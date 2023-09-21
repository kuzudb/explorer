import { CypherLexer } from "./CypherParser/CypherLexer";
import { CypherParser } from "./CypherParser/CypherParser";
import * as c3 from "antlr4-c3";
import * as antlr4 from "antlr4ng";
import * as Monaco from "monaco-editor";

// We assume the other symbols are the same as their names
// in the grammar
const REPLACED_SYMBOLS = {
  STAR: "*",
  L_SKIP: "SKIP",
  INVALID_NOT_EQUAL: "!=",
  MINUS: "-",
  FACTORIAL: "!",
  NULL_: "NULL",
};

const IGNORED_SYMBOLS = ["SP", "WHITESPACE"];

class ErrorListener extends antlr4.BaseErrorListener {
  syntaxError() {
    // Do nothing
  }
}

class CypherLanguage {
  constructor() {
    this.errorListener = new ErrorListener();
  }

  getCompletionItemsForCaret(query, caretPosition) {
    const parser = this.getParseTreeForQuery(query);
    return this.getCompletionItemsForParser(parser, caretPosition);
  }

  getCompletionItemsForParser(parser, caretPosition) {
    const core = new c3.CodeCompletionCore(parser);
    const candidates = core.collectCandidates(caretPosition);
    const completionItems = [];
    for (const candidate of candidates.tokens) {
      const symbolIdx = candidate[0];
      const symbol = this.getSymbol(symbolIdx, parser);
      if (!symbol) {
        continue;
      }
      const completionItem = symbol;
      completionItems.push(completionItem);
    }
    return completionItems;
  }

  getCompletionItemsForCursor(query, cursorPosition) {
    const caretPosition = this.getCaretPosition(query, cursorPosition);
    if (caretPosition === undefined) {
      return [];
    }
    return this.getCompletionItemsForCaret(query, caretPosition);
  }

  getCompletionItemsForLastParsedSymbol(query) {
    const parseTree = this.getParseTreeForQuery(query);
    const tokens = parseTree._input.tokens;
    const caretPosition = tokens.length - 2; // -1 for EOF, -1 for last parsed symbol
    return this.getCompletionItemsForParser(parseTree, caretPosition);
  }

  getParseTreeForQuery(query) {
    const inputStream = new antlr4.InputStream(query);
    const lexer = new CypherLexer(inputStream);
    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new CypherParser(tokenStream);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(this.errorListener);
    parser.oC_Cypher();
    return parser;
  }

  linePositionToGlobalPosition(query, line, column) {
    line -= 1;
    column -= 1;
    const lines = query.split("\n");
    let globalPosition = 0;
    for (let i = 0; i < line; ++i) {
      globalPosition += lines[i].length + 1;
    }
    globalPosition += column;
    return globalPosition;
  }

  getCaretPosition(query, cursorPosition) {
    const globalPosition = this.linePositionToGlobalPosition(
      query,
      cursorPosition.lineNumber,
      cursorPosition.column
    );
    const parseTree = this.getParseTreeForQuery(query);
    const tokens = parseTree._input.tokens;
    // Handle special case: if the cursor is at the end of the query,
    // we just return the last token
    if (globalPosition >= query.length - 1) {
      return tokens.length - 1;
    }
    // Handle special case: if the cursor is at the beginning of the query,
    // we just return the first token
    if (globalPosition === 0) {
      return 0;
    }
    for (let i = 0; i < tokens.length; ++i) {
      const token = tokens[i];
      const start = token.start;
      const stop = token.stop;
      if (start <= globalPosition && stop >= globalPosition) {
        return i;
      }
    }
    return undefined;
  }

  getSymbol(symbolIndex, parser) {
    let symbol = parser.symbolicNames[symbolIndex];
    if (!symbol) {
      return null;
    }
    // Handle special case: if the symbol is a symbolic name (identifier,
    // property or type), we set the boolean flags accordingly and expand
    // it to all possible values later
    if (
      symbol === "UnescapedSymbolicName" ||
      symbol === "EscapedSymbolicName"
    ) {
      return { symbol, isKeyword: false, isSymbolicName: true };
    }
    if (symbol !== symbol.toUpperCase()) {
      return null;
    }
    if (IGNORED_SYMBOLS.includes(symbol)) {
      return null;
    }
    if (REPLACED_SYMBOLS[symbol]) {
      symbol = REPLACED_SYMBOLS[symbol];
    }
    return { symbol, isKeyword: true, isSymbolicName: false };
  }

  getKeyWords() {
    const parser = this.getParseTreeForQuery("");
    const keywords = new Set();
    for (const symbol of parser.symbolicNames) {
      if (!symbol) {
        continue;
      }
      if (symbol !== symbol.toUpperCase()) {
        continue;
      }
      if (IGNORED_SYMBOLS.includes(symbol)) {
        continue;
      }
      if (REPLACED_SYMBOLS[symbol]) {
        // Check if the replacement is all letters
        const isAllLetters = REPLACED_SYMBOLS[symbol].match(/^[a-zA-Z]+$/);
        if (!isAllLetters) {
          continue;
        }
        keywords.add(REPLACED_SYMBOLS[symbol]);
      } else {
        keywords.add(symbol);
      }
    }
    return Array.from(keywords);
  }

  provideCompletionItemsForMonaco(model, position, schema) {
    const textUntilPosition = model.getValueInRange({
      startLineNumber: 1,
      startColumn: 1,
      endLineNumber: position.lineNumber,
      endColumn: position.column,
    });
    const wordUntilPosition = model.getWordUntilPosition(position);

    const suggestions =
      this.getCompletionItemsForLastParsedSymbol(textUntilPosition);
    const monacoSuggestions = [];
    const range = {
      startLineNumber: position.lineNumber,
      startColumn: wordUntilPosition.startColumn,
      endLineNumber: position.lineNumber,
      endColumn: wordUntilPosition.endColumn,
    };
    let addSymobolicName = false;
    for (let s of suggestions) {
      if (s.isKeyword) {
        monacoSuggestions.push({
          range,
          label: s.symbol,
          kind: Monaco.languages.CompletionItemKind.Keyword,
          insertText: s.symbol,
        });
      }
      if (s.isSymbolicName) {
        addSymobolicName = true;
      }
    }
    if (addSymobolicName) {
      schema.nodeTables.forEach((nodeTable) => {
        monacoSuggestions.push({
          range,
          label: nodeTable.name,
          kind: Monaco.languages.CompletionItemKind.Class,
          insertText: nodeTable.name,
        });
        nodeTable.properties.forEach((property) => {
          monacoSuggestions.push({
            range,
            label: property.name,
            kind: Monaco.languages.CompletionItemKind.Property,
            insertText: property.name,
          });
        });
      });
      schema.relTables.forEach((relationshipTable) => {
        monacoSuggestions.push({
          range,
          label: relationshipTable.name,
          kind: Monaco.languages.CompletionItemKind.Class,
          insertText: relationshipTable.name,
        });
        relationshipTable.properties.forEach((property) => {
          monacoSuggestions.push({
            range,
            label: property.name,
            kind: Monaco.languages.CompletionItemKind.Property,
            insertText: property.name,
          });
        });
      });
    }
    return {
      suggestions: monacoSuggestions,
    };
  }
}

export default CypherLanguage;

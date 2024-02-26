// Generated from Cypher.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class CypherParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly T__38 = 39;
    public static readonly T__39 = 40;
    public static readonly T__40 = 41;
    public static readonly T__41 = 42;
    public static readonly T__42 = 43;
    public static readonly T__43 = 44;
    public static readonly T__44 = 45;
    public static readonly CALL = 46;
    public static readonly COMMENT = 47;
    public static readonly MACRO = 48;
    public static readonly GLOB = 49;
    public static readonly COPY = 50;
    public static readonly FROM = 51;
    public static readonly COLUMN = 52;
    public static readonly EXPORT = 53;
    public static readonly DATABASE = 54;
    public static readonly NODE = 55;
    public static readonly TABLE = 56;
    public static readonly GROUP = 57;
    public static readonly RDFGRAPH = 58;
    public static readonly DROP = 59;
    public static readonly ALTER = 60;
    public static readonly DEFAULT = 61;
    public static readonly RENAME = 62;
    public static readonly ADD = 63;
    public static readonly PRIMARY = 64;
    public static readonly KEY = 65;
    public static readonly REL = 66;
    public static readonly TO = 67;
    public static readonly EXPLAIN = 68;
    public static readonly PROFILE = 69;
    public static readonly BEGIN = 70;
    public static readonly TRANSACTION = 71;
    public static readonly READ = 72;
    public static readonly ONLY = 73;
    public static readonly WRITE = 74;
    public static readonly COMMIT = 75;
    public static readonly COMMIT_SKIP_CHECKPOINT = 76;
    public static readonly ROLLBACK = 77;
    public static readonly ROLLBACK_SKIP_CHECKPOINT = 78;
    public static readonly INSTALL = 79;
    public static readonly EXTENSION = 80;
    public static readonly UNION = 81;
    public static readonly ALL = 82;
    public static readonly LOAD = 83;
    public static readonly HEADERS = 84;
    public static readonly OPTIONAL = 85;
    public static readonly MATCH = 86;
    public static readonly UNWIND = 87;
    public static readonly CREATE = 88;
    public static readonly MERGE = 89;
    public static readonly ON = 90;
    public static readonly SET = 91;
    public static readonly DETACH = 92;
    public static readonly DELETE = 93;
    public static readonly WITH = 94;
    public static readonly RETURN = 95;
    public static readonly DISTINCT = 96;
    public static readonly STAR = 97;
    public static readonly AS = 98;
    public static readonly ORDER = 99;
    public static readonly BY = 100;
    public static readonly L_SKIP = 101;
    public static readonly LIMIT = 102;
    public static readonly ASCENDING = 103;
    public static readonly ASC = 104;
    public static readonly DESCENDING = 105;
    public static readonly DESC = 106;
    public static readonly WHERE = 107;
    public static readonly SHORTEST = 108;
    public static readonly OR = 109;
    public static readonly XOR = 110;
    public static readonly AND = 111;
    public static readonly NOT = 112;
    public static readonly INVALID_NOT_EQUAL = 113;
    public static readonly MINUS = 114;
    public static readonly FACTORIAL = 115;
    public static readonly COLON = 116;
    public static readonly IN = 117;
    public static readonly STARTS = 118;
    public static readonly ENDS = 119;
    public static readonly CONTAINS = 120;
    public static readonly IS = 121;
    public static readonly NULL_ = 122;
    public static readonly TRUE = 123;
    public static readonly FALSE = 124;
    public static readonly COUNT = 125;
    public static readonly EXISTS = 126;
    public static readonly CASE = 127;
    public static readonly ELSE = 128;
    public static readonly END = 129;
    public static readonly WHEN = 130;
    public static readonly THEN = 131;
    public static readonly StringLiteral = 132;
    public static readonly EscapedChar = 133;
    public static readonly DecimalInteger = 134;
    public static readonly HexLetter = 135;
    public static readonly HexDigit = 136;
    public static readonly Digit = 137;
    public static readonly NonZeroDigit = 138;
    public static readonly NonZeroOctDigit = 139;
    public static readonly ZeroDigit = 140;
    public static readonly RegularDecimalReal = 141;
    public static readonly UnescapedSymbolicName = 142;
    public static readonly IdentifierStart = 143;
    public static readonly IdentifierPart = 144;
    public static readonly EscapedSymbolicName = 145;
    public static readonly SP = 146;
    public static readonly WHITESPACE = 147;
    public static readonly Comment = 148;
    public static readonly Unknown = 149;
    public static readonly RULE_ku_Statements = 0;
    public static readonly RULE_oC_Cypher = 1;
    public static readonly RULE_oC_Statement = 2;
    public static readonly RULE_kU_CopyFrom = 3;
    public static readonly RULE_kU_ColumnNames = 4;
    public static readonly RULE_kU_CopyFromByColumn = 5;
    public static readonly RULE_kU_CopyTO = 6;
    public static readonly RULE_kU_ExportDatabase = 7;
    public static readonly RULE_kU_StandaloneCall = 8;
    public static readonly RULE_kU_CommentOn = 9;
    public static readonly RULE_kU_CreateMacro = 10;
    public static readonly RULE_kU_PositionalArgs = 11;
    public static readonly RULE_kU_DefaultArg = 12;
    public static readonly RULE_kU_FilePaths = 13;
    public static readonly RULE_kU_ParsingOptions = 14;
    public static readonly RULE_kU_ParsingOption = 15;
    public static readonly RULE_kU_DDL = 16;
    public static readonly RULE_kU_CreateNodeTable = 17;
    public static readonly RULE_kU_CreateRelTable = 18;
    public static readonly RULE_kU_CreateRelTableGroup = 19;
    public static readonly RULE_kU_RelTableConnection = 20;
    public static readonly RULE_kU_CreateRdfGraph = 21;
    public static readonly RULE_kU_DropTable = 22;
    public static readonly RULE_kU_AlterTable = 23;
    public static readonly RULE_kU_AlterOptions = 24;
    public static readonly RULE_kU_AddProperty = 25;
    public static readonly RULE_kU_DropProperty = 26;
    public static readonly RULE_kU_RenameTable = 27;
    public static readonly RULE_kU_RenameProperty = 28;
    public static readonly RULE_kU_PropertyDefinitions = 29;
    public static readonly RULE_kU_PropertyDefinition = 30;
    public static readonly RULE_kU_CreateNodeConstraint = 31;
    public static readonly RULE_kU_DataType = 32;
    public static readonly RULE_kU_ListIdentifiers = 33;
    public static readonly RULE_kU_ListIdentifier = 34;
    public static readonly RULE_oC_AnyCypherOption = 35;
    public static readonly RULE_oC_Explain = 36;
    public static readonly RULE_oC_Profile = 37;
    public static readonly RULE_kU_Transaction = 38;
    public static readonly RULE_kU_Extension = 39;
    public static readonly RULE_kU_LoadExtension = 40;
    public static readonly RULE_kU_InstallExtension = 41;
    public static readonly RULE_oC_Query = 42;
    public static readonly RULE_oC_RegularQuery = 43;
    public static readonly RULE_oC_Union = 44;
    public static readonly RULE_oC_SingleQuery = 45;
    public static readonly RULE_oC_SinglePartQuery = 46;
    public static readonly RULE_oC_MultiPartQuery = 47;
    public static readonly RULE_kU_QueryPart = 48;
    public static readonly RULE_oC_UpdatingClause = 49;
    public static readonly RULE_oC_ReadingClause = 50;
    public static readonly RULE_kU_LoadFrom = 51;
    public static readonly RULE_kU_InQueryCall = 52;
    public static readonly RULE_oC_Match = 53;
    public static readonly RULE_oC_Unwind = 54;
    public static readonly RULE_oC_Create = 55;
    public static readonly RULE_oC_Merge = 56;
    public static readonly RULE_oC_MergeAction = 57;
    public static readonly RULE_oC_Set = 58;
    public static readonly RULE_oC_SetItem = 59;
    public static readonly RULE_oC_Delete = 60;
    public static readonly RULE_oC_With = 61;
    public static readonly RULE_oC_Return = 62;
    public static readonly RULE_oC_ProjectionBody = 63;
    public static readonly RULE_oC_ProjectionItems = 64;
    public static readonly RULE_oC_ProjectionItem = 65;
    public static readonly RULE_oC_Order = 66;
    public static readonly RULE_oC_Skip = 67;
    public static readonly RULE_oC_Limit = 68;
    public static readonly RULE_oC_SortItem = 69;
    public static readonly RULE_oC_Where = 70;
    public static readonly RULE_oC_Pattern = 71;
    public static readonly RULE_oC_PatternPart = 72;
    public static readonly RULE_oC_AnonymousPatternPart = 73;
    public static readonly RULE_oC_PatternElement = 74;
    public static readonly RULE_oC_NodePattern = 75;
    public static readonly RULE_oC_PatternElementChain = 76;
    public static readonly RULE_oC_RelationshipPattern = 77;
    public static readonly RULE_oC_RelationshipDetail = 78;
    public static readonly RULE_kU_Properties = 79;
    public static readonly RULE_oC_RelationshipTypes = 80;
    public static readonly RULE_oC_NodeLabels = 81;
    public static readonly RULE_oC_NodeLabel = 82;
    public static readonly RULE_oC_RangeLiteral = 83;
    public static readonly RULE_kU_RecursiveRelationshipComprehension = 84;
    public static readonly RULE_kU_IntermediateNodeProjectionItems = 85;
    public static readonly RULE_kU_IntermediateRelProjectionItems = 86;
    public static readonly RULE_oC_LowerBound = 87;
    public static readonly RULE_oC_UpperBound = 88;
    public static readonly RULE_oC_LabelName = 89;
    public static readonly RULE_oC_RelTypeName = 90;
    public static readonly RULE_oC_Expression = 91;
    public static readonly RULE_oC_OrExpression = 92;
    public static readonly RULE_oC_XorExpression = 93;
    public static readonly RULE_oC_AndExpression = 94;
    public static readonly RULE_oC_NotExpression = 95;
    public static readonly RULE_oC_ComparisonExpression = 96;
    public static readonly RULE_kU_ComparisonOperator = 97;
    public static readonly RULE_kU_BitwiseOrOperatorExpression = 98;
    public static readonly RULE_kU_BitwiseAndOperatorExpression = 99;
    public static readonly RULE_kU_BitShiftOperatorExpression = 100;
    public static readonly RULE_kU_BitShiftOperator = 101;
    public static readonly RULE_oC_AddOrSubtractExpression = 102;
    public static readonly RULE_kU_AddOrSubtractOperator = 103;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 104;
    public static readonly RULE_kU_MultiplyDivideModuloOperator = 105;
    public static readonly RULE_oC_PowerOfExpression = 106;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 107;
    public static readonly RULE_oC_StringListNullOperatorExpression = 108;
    public static readonly RULE_oC_ListOperatorExpression = 109;
    public static readonly RULE_oC_StringOperatorExpression = 110;
    public static readonly RULE_oC_RegularExpression = 111;
    public static readonly RULE_oC_NullOperatorExpression = 112;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 113;
    public static readonly RULE_oC_Atom = 114;
    public static readonly RULE_oC_Literal = 115;
    public static readonly RULE_oC_BooleanLiteral = 116;
    public static readonly RULE_oC_ListLiteral = 117;
    public static readonly RULE_kU_ListEntry = 118;
    public static readonly RULE_kU_StructLiteral = 119;
    public static readonly RULE_kU_StructField = 120;
    public static readonly RULE_oC_ParenthesizedExpression = 121;
    public static readonly RULE_oC_FunctionInvocation = 122;
    public static readonly RULE_oC_FunctionName = 123;
    public static readonly RULE_kU_FunctionParameter = 124;
    public static readonly RULE_oC_PathPatterns = 125;
    public static readonly RULE_oC_ExistSubquery = 126;
    public static readonly RULE_kU_CountSubquery = 127;
    public static readonly RULE_oC_PropertyLookup = 128;
    public static readonly RULE_oC_CaseExpression = 129;
    public static readonly RULE_oC_CaseAlternative = 130;
    public static readonly RULE_oC_Variable = 131;
    public static readonly RULE_oC_NumberLiteral = 132;
    public static readonly RULE_oC_Parameter = 133;
    public static readonly RULE_oC_PropertyExpression = 134;
    public static readonly RULE_oC_PropertyKeyName = 135;
    public static readonly RULE_oC_IntegerLiteral = 136;
    public static readonly RULE_oC_DoubleLiteral = 137;
    public static readonly RULE_oC_SchemaName = 138;
    public static readonly RULE_oC_SymbolicName = 139;
    public static readonly RULE_kU_NonReservedKeywords = 140;
    public static readonly RULE_oC_LeftArrowHead = 141;
    public static readonly RULE_oC_RightArrowHead = 142;
    public static readonly RULE_oC_Dash = 143;

    public static readonly literalNames = [
        null, "';'", "'('", "')'", "','", "'='", "'['", "']'", "'{'", "'}'", 
        "'|'", "'..'", "'<>'", "'<'", "'<='", "'>'", "'>='", "'&'", "'>>'", 
        "'<<'", "'+'", "'/'", "'%'", "'^'", "'=~'", "'.'", "'$'", "'\\u27E8'", 
        "'\\u3008'", "'\\uFE64'", "'\\uFF1C'", "'\\u27E9'", "'\\u3009'", 
        "'\\uFE65'", "'\\uFF1E'", "'\\u00AD'", "'\\u2010'", "'\\u2011'", 
        "'\\u2012'", "'\\u2013'", "'\\u2014'", "'\\u2015'", "'\\u2212'", 
        "'\\uFE58'", "'\\uFE63'", "'\\uFF0D'", null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "'*'", null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, "'!='", "'-'", "'!'", 
        "':'", null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "'0'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "CALL", "COMMENT", "MACRO", "GLOB", "COPY", "FROM", 
        "COLUMN", "EXPORT", "DATABASE", "NODE", "TABLE", "GROUP", "RDFGRAPH", 
        "DROP", "ALTER", "DEFAULT", "RENAME", "ADD", "PRIMARY", "KEY", "REL", 
        "TO", "EXPLAIN", "PROFILE", "BEGIN", "TRANSACTION", "READ", "ONLY", 
        "WRITE", "COMMIT", "COMMIT_SKIP_CHECKPOINT", "ROLLBACK", "ROLLBACK_SKIP_CHECKPOINT", 
        "INSTALL", "EXTENSION", "UNION", "ALL", "LOAD", "HEADERS", "OPTIONAL", 
        "MATCH", "UNWIND", "CREATE", "MERGE", "ON", "SET", "DETACH", "DELETE", 
        "WITH", "RETURN", "DISTINCT", "STAR", "AS", "ORDER", "BY", "L_SKIP", 
        "LIMIT", "ASCENDING", "ASC", "DESCENDING", "DESC", "WHERE", "SHORTEST", 
        "OR", "XOR", "AND", "NOT", "INVALID_NOT_EQUAL", "MINUS", "FACTORIAL", 
        "COLON", "IN", "STARTS", "ENDS", "CONTAINS", "IS", "NULL_", "TRUE", 
        "FALSE", "COUNT", "EXISTS", "CASE", "ELSE", "END", "WHEN", "THEN", 
        "StringLiteral", "EscapedChar", "DecimalInteger", "HexLetter", "HexDigit", 
        "Digit", "NonZeroDigit", "NonZeroOctDigit", "ZeroDigit", "RegularDecimalReal", 
        "UnescapedSymbolicName", "IdentifierStart", "IdentifierPart", "EscapedSymbolicName", 
        "SP", "WHITESPACE", "Comment", "Unknown"
    ];
    public static readonly ruleNames = [
        "ku_Statements", "oC_Cypher", "oC_Statement", "kU_CopyFrom", "kU_ColumnNames", 
        "kU_CopyFromByColumn", "kU_CopyTO", "kU_ExportDatabase", "kU_StandaloneCall", 
        "kU_CommentOn", "kU_CreateMacro", "kU_PositionalArgs", "kU_DefaultArg", 
        "kU_FilePaths", "kU_ParsingOptions", "kU_ParsingOption", "kU_DDL", 
        "kU_CreateNodeTable", "kU_CreateRelTable", "kU_CreateRelTableGroup", 
        "kU_RelTableConnection", "kU_CreateRdfGraph", "kU_DropTable", "kU_AlterTable", 
        "kU_AlterOptions", "kU_AddProperty", "kU_DropProperty", "kU_RenameTable", 
        "kU_RenameProperty", "kU_PropertyDefinitions", "kU_PropertyDefinition", 
        "kU_CreateNodeConstraint", "kU_DataType", "kU_ListIdentifiers", 
        "kU_ListIdentifier", "oC_AnyCypherOption", "oC_Explain", "oC_Profile", 
        "kU_Transaction", "kU_Extension", "kU_LoadExtension", "kU_InstallExtension", 
        "oC_Query", "oC_RegularQuery", "oC_Union", "oC_SingleQuery", "oC_SinglePartQuery", 
        "oC_MultiPartQuery", "kU_QueryPart", "oC_UpdatingClause", "oC_ReadingClause", 
        "kU_LoadFrom", "kU_InQueryCall", "oC_Match", "oC_Unwind", "oC_Create", 
        "oC_Merge", "oC_MergeAction", "oC_Set", "oC_SetItem", "oC_Delete", 
        "oC_With", "oC_Return", "oC_ProjectionBody", "oC_ProjectionItems", 
        "oC_ProjectionItem", "oC_Order", "oC_Skip", "oC_Limit", "oC_SortItem", 
        "oC_Where", "oC_Pattern", "oC_PatternPart", "oC_AnonymousPatternPart", 
        "oC_PatternElement", "oC_NodePattern", "oC_PatternElementChain", 
        "oC_RelationshipPattern", "oC_RelationshipDetail", "kU_Properties", 
        "oC_RelationshipTypes", "oC_NodeLabels", "oC_NodeLabel", "oC_RangeLiteral", 
        "kU_RecursiveRelationshipComprehension", "kU_IntermediateNodeProjectionItems", 
        "kU_IntermediateRelProjectionItems", "oC_LowerBound", "oC_UpperBound", 
        "oC_LabelName", "oC_RelTypeName", "oC_Expression", "oC_OrExpression", 
        "oC_XorExpression", "oC_AndExpression", "oC_NotExpression", "oC_ComparisonExpression", 
        "kU_ComparisonOperator", "kU_BitwiseOrOperatorExpression", "kU_BitwiseAndOperatorExpression", 
        "kU_BitShiftOperatorExpression", "kU_BitShiftOperator", "oC_AddOrSubtractExpression", 
        "kU_AddOrSubtractOperator", "oC_MultiplyDivideModuloExpression", 
        "kU_MultiplyDivideModuloOperator", "oC_PowerOfExpression", "oC_UnaryAddSubtractOrFactorialExpression", 
        "oC_StringListNullOperatorExpression", "oC_ListOperatorExpression", 
        "oC_StringOperatorExpression", "oC_RegularExpression", "oC_NullOperatorExpression", 
        "oC_PropertyOrLabelsExpression", "oC_Atom", "oC_Literal", "oC_BooleanLiteral", 
        "oC_ListLiteral", "kU_ListEntry", "kU_StructLiteral", "kU_StructField", 
        "oC_ParenthesizedExpression", "oC_FunctionInvocation", "oC_FunctionName", 
        "kU_FunctionParameter", "oC_PathPatterns", "oC_ExistSubquery", "kU_CountSubquery", 
        "oC_PropertyLookup", "oC_CaseExpression", "oC_CaseAlternative", 
        "oC_Variable", "oC_NumberLiteral", "oC_Parameter", "oC_PropertyExpression", 
        "oC_PropertyKeyName", "oC_IntegerLiteral", "oC_DoubleLiteral", "oC_SchemaName", 
        "oC_SymbolicName", "kU_NonReservedKeywords", "oC_LeftArrowHead", 
        "oC_RightArrowHead", "oC_Dash",
    ];

    public get grammarFileName(): string { return "Cypher.g4"; }
    public get literalNames(): (string | null)[] { return CypherParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return CypherParser.symbolicNames; }
    public get ruleNames(): string[] { return CypherParser.ruleNames; }
    public get serializedATN(): number[] { return CypherParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this._interp = new antlr.ParserATNSimulator(this, CypherParser._ATN, CypherParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public ku_Statements(): Ku_StatementsContext {
        let localctx: Ku_StatementsContext = new Ku_StatementsContext(this._ctx, this.state);
        this.enterRule(localctx, 0, CypherParser.RULE_ku_Statements);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 288;
            this.oC_Cypher();
            this.state = 299;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 290;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 289;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 292;
                    this.match(CypherParser.T__0);
                    this.state = 294;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                    case 1:
                        {
                        this.state = 293;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    this.state = 296;
                    this.oC_Cypher();
                    }
                    }
                }
                this.state = 301;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            }
            this.state = 303;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 302;
                this.match(CypherParser.SP);
                }
            }

            this.state = 305;
            this.match(CypherParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Cypher(): OC_CypherContext {
        let localctx: OC_CypherContext = new OC_CypherContext(this._ctx, this.state);
        this.enterRule(localctx, 2, CypherParser.RULE_oC_Cypher);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 308;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===68 || _la===69) {
                {
                this.state = 307;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 311;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 310;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 313;
            this.oC_Statement();
            }
            this.state = 318;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
            case 1:
                {
                this.state = 315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 314;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 317;
                this.match(CypherParser.T__0);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Statement(): OC_StatementContext {
        let localctx: OC_StatementContext = new OC_StatementContext(this._ctx, this.state);
        this.enterRule(localctx, 4, CypherParser.RULE_oC_Statement);
        try {
            this.state = 331;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 320;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 321;
                this.kU_DDL();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 322;
                this.kU_CopyFrom();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 323;
                this.kU_CopyFromByColumn();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 324;
                this.kU_CopyTO();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 325;
                this.kU_StandaloneCall();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 326;
                this.kU_CreateMacro();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 327;
                this.kU_CommentOn();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 328;
                this.kU_Transaction();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 329;
                this.kU_Extension();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 330;
                this.kU_ExportDatabase();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_CopyFrom(): KU_CopyFromContext {
        let localctx: KU_CopyFromContext = new KU_CopyFromContext(this._ctx, this.state);
        this.enterRule(localctx, 6, CypherParser.RULE_kU_CopyFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 333;
            this.match(CypherParser.COPY);
            this.state = 334;
            this.match(CypherParser.SP);
            this.state = 335;
            this.oC_SchemaName();
            this.state = 352;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                {
                {
                this.state = 337;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 336;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 339;
                this.match(CypherParser.T__1);
                this.state = 341;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 340;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 343;
                this.kU_ColumnNames();
                this.state = 345;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 344;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 347;
                this.match(CypherParser.T__2);
                this.state = 349;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 348;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                break;
            case 2:
                {
                this.state = 351;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 354;
            this.match(CypherParser.FROM);
            this.state = 355;
            this.match(CypherParser.SP);
            this.state = 358;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__5:
            case CypherParser.GLOB:
            case CypherParser.StringLiteral:
                {
                this.state = 356;
                this.kU_FilePaths();
                }
                break;
            case CypherParser.COMMENT:
            case CypherParser.EXPORT:
            case CypherParser.DATABASE:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.IN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 357;
                this.oC_Variable();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 373;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
            case 1:
                {
                this.state = 361;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 360;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 363;
                this.match(CypherParser.T__1);
                this.state = 365;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 364;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 367;
                this.kU_ParsingOptions();
                this.state = 369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 368;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 371;
                this.match(CypherParser.T__2);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_ColumnNames(): KU_ColumnNamesContext {
        let localctx: KU_ColumnNamesContext = new KU_ColumnNamesContext(this._ctx, this.state);
        this.enterRule(localctx, 8, CypherParser.RULE_kU_ColumnNames);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 375;
            this.oC_SchemaName();
            this.state = 386;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 377;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 376;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 379;
                    this.match(CypherParser.T__3);
                    this.state = 381;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 380;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 383;
                    this.oC_SchemaName();
                    }
                    }
                }
                this.state = 388;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_CopyFromByColumn(): KU_CopyFromByColumnContext {
        let localctx: KU_CopyFromByColumnContext = new KU_CopyFromByColumnContext(this._ctx, this.state);
        this.enterRule(localctx, 10, CypherParser.RULE_kU_CopyFromByColumn);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 389;
            this.match(CypherParser.COPY);
            this.state = 390;
            this.match(CypherParser.SP);
            this.state = 391;
            this.oC_SchemaName();
            this.state = 392;
            this.match(CypherParser.SP);
            this.state = 393;
            this.match(CypherParser.FROM);
            this.state = 394;
            this.match(CypherParser.SP);
            this.state = 395;
            this.match(CypherParser.T__1);
            this.state = 397;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 396;
                this.match(CypherParser.SP);
                }
            }

            this.state = 399;
            this.match(CypherParser.StringLiteral);
            this.state = 410;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4 || _la===146) {
                {
                {
                this.state = 401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 400;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 403;
                this.match(CypherParser.T__3);
                this.state = 405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 404;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 407;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 412;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 413;
            this.match(CypherParser.T__2);
            this.state = 414;
            this.match(CypherParser.SP);
            this.state = 415;
            this.match(CypherParser.BY);
            this.state = 416;
            this.match(CypherParser.SP);
            this.state = 417;
            this.match(CypherParser.COLUMN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_CopyTO(): KU_CopyTOContext {
        let localctx: KU_CopyTOContext = new KU_CopyTOContext(this._ctx, this.state);
        this.enterRule(localctx, 12, CypherParser.RULE_kU_CopyTO);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 419;
            this.match(CypherParser.COPY);
            this.state = 420;
            this.match(CypherParser.SP);
            this.state = 421;
            this.match(CypherParser.T__1);
            this.state = 423;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 422;
                this.match(CypherParser.SP);
                }
            }

            this.state = 425;
            this.oC_Query();
            this.state = 427;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 426;
                this.match(CypherParser.SP);
                }
            }

            this.state = 429;
            this.match(CypherParser.T__2);
            this.state = 430;
            this.match(CypherParser.SP);
            this.state = 431;
            this.match(CypherParser.TO);
            this.state = 432;
            this.match(CypherParser.SP);
            this.state = 433;
            this.match(CypherParser.StringLiteral);
            this.state = 447;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
            case 1:
                {
                this.state = 435;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 434;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 437;
                this.match(CypherParser.T__1);
                this.state = 439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 438;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 441;
                this.kU_ParsingOptions();
                this.state = 443;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 442;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 445;
                this.match(CypherParser.T__2);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_ExportDatabase(): KU_ExportDatabaseContext {
        let localctx: KU_ExportDatabaseContext = new KU_ExportDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 14, CypherParser.RULE_kU_ExportDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 449;
            this.match(CypherParser.EXPORT);
            this.state = 450;
            this.match(CypherParser.SP);
            this.state = 451;
            this.match(CypherParser.DATABASE);
            this.state = 452;
            this.match(CypherParser.SP);
            this.state = 453;
            this.match(CypherParser.StringLiteral);
            this.state = 467;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
            case 1:
                {
                this.state = 455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 454;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 457;
                this.match(CypherParser.T__1);
                this.state = 459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 458;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 461;
                this.kU_ParsingOptions();
                this.state = 463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 462;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 465;
                this.match(CypherParser.T__2);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_StandaloneCall(): KU_StandaloneCallContext {
        let localctx: KU_StandaloneCallContext = new KU_StandaloneCallContext(this._ctx, this.state);
        this.enterRule(localctx, 16, CypherParser.RULE_kU_StandaloneCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 469;
            this.match(CypherParser.CALL);
            this.state = 470;
            this.match(CypherParser.SP);
            this.state = 471;
            this.oC_SymbolicName();
            this.state = 473;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 472;
                this.match(CypherParser.SP);
                }
            }

            this.state = 475;
            this.match(CypherParser.T__4);
            this.state = 477;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 476;
                this.match(CypherParser.SP);
                }
            }

            this.state = 479;
            this.oC_Literal();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_CommentOn(): KU_CommentOnContext {
        let localctx: KU_CommentOnContext = new KU_CommentOnContext(this._ctx, this.state);
        this.enterRule(localctx, 18, CypherParser.RULE_kU_CommentOn);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 481;
            this.match(CypherParser.COMMENT);
            this.state = 482;
            this.match(CypherParser.SP);
            this.state = 483;
            this.match(CypherParser.ON);
            this.state = 484;
            this.match(CypherParser.SP);
            this.state = 485;
            this.match(CypherParser.TABLE);
            this.state = 486;
            this.match(CypherParser.SP);
            this.state = 487;
            this.oC_SchemaName();
            this.state = 488;
            this.match(CypherParser.SP);
            this.state = 489;
            this.match(CypherParser.IS);
            this.state = 490;
            this.match(CypherParser.SP);
            this.state = 491;
            this.match(CypherParser.StringLiteral);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_CreateMacro(): KU_CreateMacroContext {
        let localctx: KU_CreateMacroContext = new KU_CreateMacroContext(this._ctx, this.state);
        this.enterRule(localctx, 20, CypherParser.RULE_kU_CreateMacro);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 493;
            this.match(CypherParser.CREATE);
            this.state = 494;
            this.match(CypherParser.SP);
            this.state = 495;
            this.match(CypherParser.MACRO);
            this.state = 496;
            this.match(CypherParser.SP);
            this.state = 497;
            this.oC_FunctionName();
            this.state = 499;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 498;
                this.match(CypherParser.SP);
                }
            }

            this.state = 501;
            this.match(CypherParser.T__1);
            this.state = 503;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
            case 1:
                {
                this.state = 502;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 506;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
            case 1:
                {
                this.state = 505;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 509;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
            case 1:
                {
                this.state = 508;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 512;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 302256385) !== 0)) {
                {
                this.state = 511;
                this.kU_DefaultArg();
                }
            }

            this.state = 524;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 515;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 514;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 517;
                    this.match(CypherParser.T__3);
                    this.state = 519;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 518;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 521;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 526;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
            }
            this.state = 528;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 527;
                this.match(CypherParser.SP);
                }
            }

            this.state = 530;
            this.match(CypherParser.T__2);
            this.state = 531;
            this.match(CypherParser.SP);
            this.state = 532;
            this.match(CypherParser.AS);
            this.state = 533;
            this.match(CypherParser.SP);
            this.state = 534;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_PositionalArgs(): KU_PositionalArgsContext {
        let localctx: KU_PositionalArgsContext = new KU_PositionalArgsContext(this._ctx, this.state);
        this.enterRule(localctx, 22, CypherParser.RULE_kU_PositionalArgs);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 536;
            this.oC_SymbolicName();
            this.state = 547;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 538;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 537;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 540;
                    this.match(CypherParser.T__3);
                    this.state = 542;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 541;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 544;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 549;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_DefaultArg(): KU_DefaultArgContext {
        let localctx: KU_DefaultArgContext = new KU_DefaultArgContext(this._ctx, this.state);
        this.enterRule(localctx, 24, CypherParser.RULE_kU_DefaultArg);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 550;
            this.oC_SymbolicName();
            this.state = 552;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 551;
                this.match(CypherParser.SP);
                }
            }

            this.state = 554;
            this.match(CypherParser.COLON);
            this.state = 555;
            this.match(CypherParser.T__4);
            this.state = 557;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 556;
                this.match(CypherParser.SP);
                }
            }

            this.state = 559;
            this.oC_Literal();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_FilePaths(): KU_FilePathsContext {
        let localctx: KU_FilePathsContext = new KU_FilePathsContext(this._ctx, this.state);
        this.enterRule(localctx, 26, CypherParser.RULE_kU_FilePaths);
        let _la: number;
        try {
            this.state = 594;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__5:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 561;
                this.match(CypherParser.T__5);
                this.state = 563;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 562;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 565;
                this.match(CypherParser.StringLiteral);
                this.state = 576;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4 || _la===146) {
                    {
                    {
                    this.state = 567;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 566;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 569;
                    this.match(CypherParser.T__3);
                    this.state = 571;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 570;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 573;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 578;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 579;
                this.match(CypherParser.T__6);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 580;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 581;
                this.match(CypherParser.GLOB);
                this.state = 583;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 582;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 585;
                this.match(CypherParser.T__1);
                this.state = 587;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 586;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 589;
                this.match(CypherParser.StringLiteral);
                this.state = 591;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 590;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 593;
                this.match(CypherParser.T__2);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_ParsingOptions(): KU_ParsingOptionsContext {
        let localctx: KU_ParsingOptionsContext = new KU_ParsingOptionsContext(this._ctx, this.state);
        this.enterRule(localctx, 28, CypherParser.RULE_kU_ParsingOptions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 596;
            this.kU_ParsingOption();
            this.state = 607;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 598;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 597;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 600;
                    this.match(CypherParser.T__3);
                    this.state = 602;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 601;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 604;
                    this.kU_ParsingOption();
                    }
                    }
                }
                this.state = 609;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_ParsingOption(): KU_ParsingOptionContext {
        let localctx: KU_ParsingOptionContext = new KU_ParsingOptionContext(this._ctx, this.state);
        this.enterRule(localctx, 30, CypherParser.RULE_kU_ParsingOption);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 610;
            this.oC_SymbolicName();
            this.state = 612;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 611;
                this.match(CypherParser.SP);
                }
            }

            this.state = 614;
            this.match(CypherParser.T__4);
            this.state = 616;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 615;
                this.match(CypherParser.SP);
                }
            }

            this.state = 618;
            this.oC_Literal();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_DDL(): KU_DDLContext {
        let localctx: KU_DDLContext = new KU_DDLContext(this._ctx, this.state);
        this.enterRule(localctx, 32, CypherParser.RULE_kU_DDL);
        try {
            this.state = 626;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 620;
                this.kU_CreateNodeTable();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 621;
                this.kU_CreateRelTable();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 622;
                this.kU_CreateRelTableGroup();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 623;
                this.kU_CreateRdfGraph();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 624;
                this.kU_DropTable();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 625;
                this.kU_AlterTable();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_CreateNodeTable(): KU_CreateNodeTableContext {
        let localctx: KU_CreateNodeTableContext = new KU_CreateNodeTableContext(this._ctx, this.state);
        this.enterRule(localctx, 34, CypherParser.RULE_kU_CreateNodeTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 628;
            this.match(CypherParser.CREATE);
            this.state = 629;
            this.match(CypherParser.SP);
            this.state = 630;
            this.match(CypherParser.NODE);
            this.state = 631;
            this.match(CypherParser.SP);
            this.state = 632;
            this.match(CypherParser.TABLE);
            this.state = 633;
            this.match(CypherParser.SP);
            this.state = 634;
            this.oC_SchemaName();
            this.state = 636;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 635;
                this.match(CypherParser.SP);
                }
            }

            this.state = 638;
            this.match(CypherParser.T__1);
            this.state = 640;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 639;
                this.match(CypherParser.SP);
                }
            }

            this.state = 642;
            this.kU_PropertyDefinitions();
            this.state = 644;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 643;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 646;
            this.match(CypherParser.T__3);
            this.state = 648;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 647;
                this.match(CypherParser.SP);
                }
            }

            this.state = 650;
            this.kU_CreateNodeConstraint();
            }
            this.state = 653;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 652;
                this.match(CypherParser.SP);
                }
            }

            this.state = 655;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_CreateRelTable(): KU_CreateRelTableContext {
        let localctx: KU_CreateRelTableContext = new KU_CreateRelTableContext(this._ctx, this.state);
        this.enterRule(localctx, 36, CypherParser.RULE_kU_CreateRelTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 657;
            this.match(CypherParser.CREATE);
            this.state = 658;
            this.match(CypherParser.SP);
            this.state = 659;
            this.match(CypherParser.REL);
            this.state = 660;
            this.match(CypherParser.SP);
            this.state = 661;
            this.match(CypherParser.TABLE);
            this.state = 662;
            this.match(CypherParser.SP);
            this.state = 663;
            this.oC_SchemaName();
            this.state = 665;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 664;
                this.match(CypherParser.SP);
                }
            }

            this.state = 667;
            this.match(CypherParser.T__1);
            this.state = 669;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 668;
                this.match(CypherParser.SP);
                }
            }

            this.state = 671;
            this.kU_RelTableConnection();
            this.state = 673;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 672;
                this.match(CypherParser.SP);
                }
            }

            this.state = 683;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
            case 1:
                {
                this.state = 675;
                this.match(CypherParser.T__3);
                this.state = 677;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 676;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 679;
                this.kU_PropertyDefinitions();
                this.state = 681;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 680;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 693;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===4) {
                {
                this.state = 685;
                this.match(CypherParser.T__3);
                this.state = 687;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 686;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 689;
                this.oC_SymbolicName();
                this.state = 691;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 690;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 695;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_CreateRelTableGroup(): KU_CreateRelTableGroupContext {
        let localctx: KU_CreateRelTableGroupContext = new KU_CreateRelTableGroupContext(this._ctx, this.state);
        this.enterRule(localctx, 38, CypherParser.RULE_kU_CreateRelTableGroup);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 697;
            this.match(CypherParser.CREATE);
            this.state = 698;
            this.match(CypherParser.SP);
            this.state = 699;
            this.match(CypherParser.REL);
            this.state = 700;
            this.match(CypherParser.SP);
            this.state = 701;
            this.match(CypherParser.TABLE);
            this.state = 702;
            this.match(CypherParser.SP);
            this.state = 703;
            this.match(CypherParser.GROUP);
            this.state = 704;
            this.match(CypherParser.SP);
            this.state = 705;
            this.oC_SchemaName();
            this.state = 707;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 706;
                this.match(CypherParser.SP);
                }
            }

            this.state = 709;
            this.match(CypherParser.T__1);
            this.state = 711;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 710;
                this.match(CypherParser.SP);
                }
            }

            this.state = 713;
            this.kU_RelTableConnection();
            this.state = 715;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 714;
                this.match(CypherParser.SP);
                }
            }

            this.state = 722;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 717;
                    this.match(CypherParser.T__3);
                    this.state = 719;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 718;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 721;
                    this.kU_RelTableConnection();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 724;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 727;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 726;
                this.match(CypherParser.SP);
                }
            }

            this.state = 737;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
            case 1:
                {
                this.state = 729;
                this.match(CypherParser.T__3);
                this.state = 731;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 730;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 733;
                this.kU_PropertyDefinitions();
                this.state = 735;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 734;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 747;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===4) {
                {
                this.state = 739;
                this.match(CypherParser.T__3);
                this.state = 741;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 740;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 743;
                this.oC_SymbolicName();
                this.state = 745;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 744;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 749;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_RelTableConnection(): KU_RelTableConnectionContext {
        let localctx: KU_RelTableConnectionContext = new KU_RelTableConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 40, CypherParser.RULE_kU_RelTableConnection);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 751;
            this.match(CypherParser.FROM);
            this.state = 752;
            this.match(CypherParser.SP);
            this.state = 753;
            this.oC_SchemaName();
            this.state = 754;
            this.match(CypherParser.SP);
            this.state = 755;
            this.match(CypherParser.TO);
            this.state = 756;
            this.match(CypherParser.SP);
            this.state = 757;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_CreateRdfGraph(): KU_CreateRdfGraphContext {
        let localctx: KU_CreateRdfGraphContext = new KU_CreateRdfGraphContext(this._ctx, this.state);
        this.enterRule(localctx, 42, CypherParser.RULE_kU_CreateRdfGraph);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 759;
            this.match(CypherParser.CREATE);
            this.state = 760;
            this.match(CypherParser.SP);
            this.state = 761;
            this.match(CypherParser.RDFGRAPH);
            this.state = 762;
            this.match(CypherParser.SP);
            this.state = 763;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_DropTable(): KU_DropTableContext {
        let localctx: KU_DropTableContext = new KU_DropTableContext(this._ctx, this.state);
        this.enterRule(localctx, 44, CypherParser.RULE_kU_DropTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 765;
            this.match(CypherParser.DROP);
            this.state = 766;
            this.match(CypherParser.SP);
            this.state = 767;
            _la = this._input.LA(1);
            if(!(_la===56 || _la===58)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 768;
            this.match(CypherParser.SP);
            this.state = 769;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_AlterTable(): KU_AlterTableContext {
        let localctx: KU_AlterTableContext = new KU_AlterTableContext(this._ctx, this.state);
        this.enterRule(localctx, 46, CypherParser.RULE_kU_AlterTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 771;
            this.match(CypherParser.ALTER);
            this.state = 772;
            this.match(CypherParser.SP);
            this.state = 773;
            this.match(CypherParser.TABLE);
            this.state = 774;
            this.match(CypherParser.SP);
            this.state = 775;
            this.oC_SchemaName();
            this.state = 776;
            this.match(CypherParser.SP);
            this.state = 777;
            this.kU_AlterOptions();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_AlterOptions(): KU_AlterOptionsContext {
        let localctx: KU_AlterOptionsContext = new KU_AlterOptionsContext(this._ctx, this.state);
        this.enterRule(localctx, 48, CypherParser.RULE_kU_AlterOptions);
        try {
            this.state = 783;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 779;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 780;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 781;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 782;
                this.kU_RenameProperty();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_AddProperty(): KU_AddPropertyContext {
        let localctx: KU_AddPropertyContext = new KU_AddPropertyContext(this._ctx, this.state);
        this.enterRule(localctx, 50, CypherParser.RULE_kU_AddProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 785;
            this.match(CypherParser.ADD);
            this.state = 786;
            this.match(CypherParser.SP);
            this.state = 787;
            this.oC_PropertyKeyName();
            this.state = 788;
            this.match(CypherParser.SP);
            this.state = 789;
            this.kU_DataType(0);
            this.state = 794;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
            case 1:
                {
                this.state = 790;
                this.match(CypherParser.SP);
                this.state = 791;
                this.match(CypherParser.DEFAULT);
                this.state = 792;
                this.match(CypherParser.SP);
                this.state = 793;
                this.oC_Expression();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_DropProperty(): KU_DropPropertyContext {
        let localctx: KU_DropPropertyContext = new KU_DropPropertyContext(this._ctx, this.state);
        this.enterRule(localctx, 52, CypherParser.RULE_kU_DropProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 796;
            this.match(CypherParser.DROP);
            this.state = 797;
            this.match(CypherParser.SP);
            this.state = 798;
            this.oC_PropertyKeyName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_RenameTable(): KU_RenameTableContext {
        let localctx: KU_RenameTableContext = new KU_RenameTableContext(this._ctx, this.state);
        this.enterRule(localctx, 54, CypherParser.RULE_kU_RenameTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 800;
            this.match(CypherParser.RENAME);
            this.state = 801;
            this.match(CypherParser.SP);
            this.state = 802;
            this.match(CypherParser.TO);
            this.state = 803;
            this.match(CypherParser.SP);
            this.state = 804;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_RenameProperty(): KU_RenamePropertyContext {
        let localctx: KU_RenamePropertyContext = new KU_RenamePropertyContext(this._ctx, this.state);
        this.enterRule(localctx, 56, CypherParser.RULE_kU_RenameProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 806;
            this.match(CypherParser.RENAME);
            this.state = 807;
            this.match(CypherParser.SP);
            this.state = 808;
            this.oC_PropertyKeyName();
            this.state = 809;
            this.match(CypherParser.SP);
            this.state = 810;
            this.match(CypherParser.TO);
            this.state = 811;
            this.match(CypherParser.SP);
            this.state = 812;
            this.oC_PropertyKeyName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        let localctx: KU_PropertyDefinitionsContext = new KU_PropertyDefinitionsContext(this._ctx, this.state);
        this.enterRule(localctx, 58, CypherParser.RULE_kU_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 814;
            this.kU_PropertyDefinition();
            this.state = 825;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 816;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 815;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 818;
                    this.match(CypherParser.T__3);
                    this.state = 820;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 819;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 822;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 827;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_PropertyDefinition(): KU_PropertyDefinitionContext {
        let localctx: KU_PropertyDefinitionContext = new KU_PropertyDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 60, CypherParser.RULE_kU_PropertyDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 828;
            this.oC_PropertyKeyName();
            this.state = 829;
            this.match(CypherParser.SP);
            this.state = 830;
            this.kU_DataType(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_CreateNodeConstraint(): KU_CreateNodeConstraintContext {
        let localctx: KU_CreateNodeConstraintContext = new KU_CreateNodeConstraintContext(this._ctx, this.state);
        this.enterRule(localctx, 62, CypherParser.RULE_kU_CreateNodeConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 832;
            this.match(CypherParser.PRIMARY);
            this.state = 833;
            this.match(CypherParser.SP);
            this.state = 834;
            this.match(CypherParser.KEY);
            this.state = 836;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 835;
                this.match(CypherParser.SP);
                }
            }

            this.state = 838;
            this.match(CypherParser.T__1);
            this.state = 840;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 839;
                this.match(CypherParser.SP);
                }
            }

            this.state = 842;
            this.oC_PropertyKeyName();
            this.state = 844;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 843;
                this.match(CypherParser.SP);
                }
            }

            this.state = 846;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }

    public kU_DataType(): KU_DataTypeContext;
    public kU_DataType(_p: number): KU_DataTypeContext;
    public kU_DataType(_p?: number): KU_DataTypeContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new KU_DataTypeContext(this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 64;
        this.enterRecursionRule(localctx, 64, CypherParser.RULE_kU_DataType, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 900;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
            case 1:
                {
                this.state = 849;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 850;
                this.match(CypherParser.UNION);
                this.state = 852;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 851;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 854;
                this.match(CypherParser.T__1);
                this.state = 856;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 855;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 858;
                this.kU_PropertyDefinitions();
                this.state = 860;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 859;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 862;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                {
                this.state = 864;
                this.oC_SymbolicName();
                this.state = 866;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 865;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 868;
                this.match(CypherParser.T__1);
                this.state = 870;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 869;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 872;
                this.kU_PropertyDefinitions();
                this.state = 874;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 873;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 876;
                this.match(CypherParser.T__2);
                }
                break;
            case 4:
                {
                this.state = 878;
                this.oC_SymbolicName();
                this.state = 880;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 879;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 882;
                this.match(CypherParser.T__1);
                this.state = 884;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 883;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 886;
                this.kU_DataType(0);
                this.state = 888;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 887;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 890;
                this.match(CypherParser.T__3);
                this.state = 892;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 891;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 894;
                this.kU_DataType(0);
                this.state = 896;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 895;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 898;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 906;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 112, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    {
                    localctx = new KU_DataTypeContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_DataType);
                    this.state = 902;
                    if (!(this.precpred(this._ctx, 4))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                    }
                    this.state = 903;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 908;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 112, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public kU_ListIdentifiers(): KU_ListIdentifiersContext {
        let localctx: KU_ListIdentifiersContext = new KU_ListIdentifiersContext(this._ctx, this.state);
        this.enterRule(localctx, 66, CypherParser.RULE_kU_ListIdentifiers);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 909;
            this.kU_ListIdentifier();
            this.state = 913;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 113, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 910;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 915;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 113, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_ListIdentifier(): KU_ListIdentifierContext {
        let localctx: KU_ListIdentifierContext = new KU_ListIdentifierContext(this._ctx, this.state);
        this.enterRule(localctx, 68, CypherParser.RULE_kU_ListIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 916;
            this.match(CypherParser.T__5);
            this.state = 918;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===134) {
                {
                this.state = 917;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 920;
            this.match(CypherParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_AnyCypherOption(): OC_AnyCypherOptionContext {
        let localctx: OC_AnyCypherOptionContext = new OC_AnyCypherOptionContext(this._ctx, this.state);
        this.enterRule(localctx, 70, CypherParser.RULE_oC_AnyCypherOption);
        try {
            this.state = 924;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 922;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 923;
                this.oC_Profile();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Explain(): OC_ExplainContext {
        let localctx: OC_ExplainContext = new OC_ExplainContext(this._ctx, this.state);
        this.enterRule(localctx, 72, CypherParser.RULE_oC_Explain);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 926;
            this.match(CypherParser.EXPLAIN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Profile(): OC_ProfileContext {
        let localctx: OC_ProfileContext = new OC_ProfileContext(this._ctx, this.state);
        this.enterRule(localctx, 74, CypherParser.RULE_oC_Profile);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 928;
            this.match(CypherParser.PROFILE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_Transaction(): KU_TransactionContext {
        let localctx: KU_TransactionContext = new KU_TransactionContext(this._ctx, this.state);
        this.enterRule(localctx, 76, CypherParser.RULE_kU_Transaction);
        try {
            this.state = 944;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 930;
                this.match(CypherParser.BEGIN);
                this.state = 931;
                this.match(CypherParser.SP);
                this.state = 932;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 933;
                this.match(CypherParser.BEGIN);
                this.state = 934;
                this.match(CypherParser.SP);
                this.state = 935;
                this.match(CypherParser.TRANSACTION);
                this.state = 936;
                this.match(CypherParser.SP);
                this.state = 937;
                this.match(CypherParser.READ);
                this.state = 938;
                this.match(CypherParser.SP);
                this.state = 939;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 940;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 941;
                this.match(CypherParser.COMMIT_SKIP_CHECKPOINT);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 942;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 943;
                this.match(CypherParser.ROLLBACK_SKIP_CHECKPOINT);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_Extension(): KU_ExtensionContext {
        let localctx: KU_ExtensionContext = new KU_ExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 78, CypherParser.RULE_kU_Extension);
        try {
            this.state = 948;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 946;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 947;
                this.kU_InstallExtension();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_LoadExtension(): KU_LoadExtensionContext {
        let localctx: KU_LoadExtensionContext = new KU_LoadExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 80, CypherParser.RULE_kU_LoadExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 950;
            this.match(CypherParser.LOAD);
            this.state = 951;
            this.match(CypherParser.SP);
            this.state = 952;
            this.match(CypherParser.EXTENSION);
            this.state = 953;
            this.match(CypherParser.SP);
            this.state = 956;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 954;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.COMMENT:
            case CypherParser.EXPORT:
            case CypherParser.DATABASE:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.IN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 955;
                this.oC_Variable();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_InstallExtension(): KU_InstallExtensionContext {
        let localctx: KU_InstallExtensionContext = new KU_InstallExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 82, CypherParser.RULE_kU_InstallExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 958;
            this.match(CypherParser.INSTALL);
            this.state = 959;
            this.match(CypherParser.SP);
            this.state = 960;
            this.oC_Variable();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Query(): OC_QueryContext {
        let localctx: OC_QueryContext = new OC_QueryContext(this._ctx, this.state);
        this.enterRule(localctx, 84, CypherParser.RULE_oC_Query);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 962;
            this.oC_RegularQuery();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RegularQuery(): OC_RegularQueryContext {
        let localctx: OC_RegularQueryContext = new OC_RegularQueryContext(this._ctx, this.state);
        this.enterRule(localctx, 86, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 985;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 964;
                this.oC_SingleQuery();
                this.state = 971;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 120, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 966;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 965;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 968;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 973;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 120, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 978;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 974;
                        this.oC_Return();
                        this.state = 976;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 975;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 980;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 982;
                this.oC_SingleQuery();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Union(): OC_UnionContext {
        let localctx: OC_UnionContext = new OC_UnionContext(this._ctx, this.state);
        this.enterRule(localctx, 88, CypherParser.RULE_oC_Union);
        let _la: number;
        try {
            this.state = 999;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 987;
                this.match(CypherParser.UNION);
                this.state = 988;
                this.match(CypherParser.SP);
                this.state = 989;
                this.match(CypherParser.ALL);
                this.state = 991;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 990;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 993;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 994;
                this.match(CypherParser.UNION);
                this.state = 996;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 995;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 998;
                this.oC_SingleQuery();
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SingleQuery(): OC_SingleQueryContext {
        let localctx: OC_SingleQueryContext = new OC_SingleQueryContext(this._ctx, this.state);
        this.enterRule(localctx, 90, CypherParser.RULE_oC_SingleQuery);
        try {
            this.state = 1003;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1001;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1002;
                this.oC_MultiPartQuery();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SinglePartQuery(): OC_SinglePartQueryContext {
        let localctx: OC_SinglePartQueryContext = new OC_SinglePartQueryContext(this._ctx, this.state);
        this.enterRule(localctx, 92, CypherParser.RULE_oC_SinglePartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1050;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1011;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===46 || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 29) !== 0)) {
                    {
                    {
                    this.state = 1005;
                    this.oC_ReadingClause();
                    this.state = 1007;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1006;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1013;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1014;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1021;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===46 || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 29) !== 0)) {
                    {
                    {
                    this.state = 1015;
                    this.oC_ReadingClause();
                    this.state = 1017;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1016;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1023;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1024;
                this.oC_UpdatingClause();
                this.state = 1031;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1026;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 1025;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1028;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1033;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
                }
                this.state = 1038;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 135, this._ctx) ) {
                case 1:
                    {
                    this.state = 1035;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1034;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1037;
                    this.oC_Return();
                    }
                    break;
                }
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1044;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 1040;
                    this.oC_ReadingClause();
                    this.state = 1042;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
                    case 1:
                        {
                        this.state = 1041;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    }
                    }
                    this.state = 1046;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===46 || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 29) !== 0));
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_MultiPartQuery(): OC_MultiPartQueryContext {
        let localctx: OC_MultiPartQueryContext = new OC_MultiPartQueryContext(this._ctx, this.state);
        this.enterRule(localctx, 94, CypherParser.RULE_oC_MultiPartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1056;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1052;
                    this.kU_QueryPart();
                    this.state = 1054;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1053;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1058;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 140, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1060;
            this.oC_SinglePartQuery();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_QueryPart(): KU_QueryPartContext {
        let localctx: KU_QueryPartContext = new KU_QueryPartContext(this._ctx, this.state);
        this.enterRule(localctx, 96, CypherParser.RULE_kU_QueryPart);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1068;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===46 || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 29) !== 0)) {
                {
                {
                this.state = 1062;
                this.oC_ReadingClause();
                this.state = 1064;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1063;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1070;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1077;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 59) !== 0)) {
                {
                {
                this.state = 1071;
                this.oC_UpdatingClause();
                this.state = 1073;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1072;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1079;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1080;
            this.oC_With();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_UpdatingClause(): OC_UpdatingClauseContext {
        let localctx: OC_UpdatingClauseContext = new OC_UpdatingClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 98, CypherParser.RULE_oC_UpdatingClause);
        try {
            this.state = 1086;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1082;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1083;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1084;
                this.oC_Set();
                }
                break;
            case CypherParser.DETACH:
            case CypherParser.DELETE:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1085;
                this.oC_Delete();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ReadingClause(): OC_ReadingClauseContext {
        let localctx: OC_ReadingClauseContext = new OC_ReadingClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 100, CypherParser.RULE_oC_ReadingClause);
        try {
            this.state = 1092;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.OPTIONAL:
            case CypherParser.MATCH:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1088;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1089;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1090;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1091;
                this.kU_LoadFrom();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_LoadFrom(): KU_LoadFromContext {
        let localctx: KU_LoadFromContext = new KU_LoadFromContext(this._ctx, this.state);
        this.enterRule(localctx, 102, CypherParser.RULE_kU_LoadFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1094;
            this.match(CypherParser.LOAD);
            this.state = 1112;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 150, this._ctx) ) {
            case 1:
                {
                this.state = 1095;
                this.match(CypherParser.SP);
                this.state = 1096;
                this.match(CypherParser.WITH);
                this.state = 1097;
                this.match(CypherParser.SP);
                this.state = 1098;
                this.match(CypherParser.HEADERS);
                this.state = 1100;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1099;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1102;
                this.match(CypherParser.T__1);
                this.state = 1104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1103;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1106;
                this.kU_PropertyDefinitions();
                this.state = 1108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1107;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1110;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1114;
            this.match(CypherParser.SP);
            this.state = 1115;
            this.match(CypherParser.FROM);
            this.state = 1116;
            this.match(CypherParser.SP);
            this.state = 1134;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__5:
            case CypherParser.GLOB:
            case CypherParser.StringLiteral:
                {
                this.state = 1117;
                this.kU_FilePaths();
                this.state = 1131;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
                case 1:
                    {
                    this.state = 1119;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1118;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1121;
                    this.match(CypherParser.T__1);
                    this.state = 1123;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1122;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1125;
                    this.kU_ParsingOptions();
                    this.state = 1127;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1126;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1129;
                    this.match(CypherParser.T__2);
                    }
                    break;
                }
                }
                break;
            case CypherParser.COMMENT:
            case CypherParser.EXPORT:
            case CypherParser.DATABASE:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.IN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1133;
                this.oC_Variable();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1140;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 157, this._ctx) ) {
            case 1:
                {
                this.state = 1137;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1136;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1139;
                this.oC_Where();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_InQueryCall(): KU_InQueryCallContext {
        let localctx: KU_InQueryCallContext = new KU_InQueryCallContext(this._ctx, this.state);
        this.enterRule(localctx, 104, CypherParser.RULE_kU_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1142;
            this.match(CypherParser.CALL);
            this.state = 1143;
            this.match(CypherParser.SP);
            this.state = 1144;
            this.oC_FunctionInvocation();
            this.state = 1149;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
            case 1:
                {
                this.state = 1146;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1145;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1148;
                this.oC_Where();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Match(): OC_MatchContext {
        let localctx: OC_MatchContext = new OC_MatchContext(this._ctx, this.state);
        this.enterRule(localctx, 106, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1153;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===85) {
                {
                this.state = 1151;
                this.match(CypherParser.OPTIONAL);
                this.state = 1152;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1155;
            this.match(CypherParser.MATCH);
            this.state = 1157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1156;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1159;
            this.oC_Pattern();
            this.state = 1164;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
            case 1:
                {
                this.state = 1161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1160;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1163;
                this.oC_Where();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Unwind(): OC_UnwindContext {
        let localctx: OC_UnwindContext = new OC_UnwindContext(this._ctx, this.state);
        this.enterRule(localctx, 108, CypherParser.RULE_oC_Unwind);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1166;
            this.match(CypherParser.UNWIND);
            this.state = 1168;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1167;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1170;
            this.oC_Expression();
            this.state = 1171;
            this.match(CypherParser.SP);
            this.state = 1172;
            this.match(CypherParser.AS);
            this.state = 1173;
            this.match(CypherParser.SP);
            this.state = 1174;
            this.oC_Variable();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Create(): OC_CreateContext {
        let localctx: OC_CreateContext = new OC_CreateContext(this._ctx, this.state);
        this.enterRule(localctx, 110, CypherParser.RULE_oC_Create);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1176;
            this.match(CypherParser.CREATE);
            this.state = 1178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1177;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1180;
            this.oC_Pattern();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Merge(): OC_MergeContext {
        let localctx: OC_MergeContext = new OC_MergeContext(this._ctx, this.state);
        this.enterRule(localctx, 112, CypherParser.RULE_oC_Merge);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1182;
            this.match(CypherParser.MERGE);
            this.state = 1184;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1183;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1186;
            this.oC_Pattern();
            this.state = 1191;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 167, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1187;
                    this.match(CypherParser.SP);
                    this.state = 1188;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1193;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 167, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_MergeAction(): OC_MergeActionContext {
        let localctx: OC_MergeActionContext = new OC_MergeActionContext(this._ctx, this.state);
        this.enterRule(localctx, 114, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1204;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 168, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1194;
                this.match(CypherParser.ON);
                this.state = 1195;
                this.match(CypherParser.SP);
                this.state = 1196;
                this.match(CypherParser.MATCH);
                this.state = 1197;
                this.match(CypherParser.SP);
                this.state = 1198;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1199;
                this.match(CypherParser.ON);
                this.state = 1200;
                this.match(CypherParser.SP);
                this.state = 1201;
                this.match(CypherParser.CREATE);
                this.state = 1202;
                this.match(CypherParser.SP);
                this.state = 1203;
                this.oC_Set();
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Set(): OC_SetContext {
        let localctx: OC_SetContext = new OC_SetContext(this._ctx, this.state);
        this.enterRule(localctx, 116, CypherParser.RULE_oC_Set);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1206;
            this.match(CypherParser.SET);
            this.state = 1208;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1207;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1210;
            this.oC_SetItem();
            this.state = 1221;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1212;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1211;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1214;
                    this.match(CypherParser.T__3);
                    this.state = 1216;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1215;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1218;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1223;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SetItem(): OC_SetItemContext {
        let localctx: OC_SetItemContext = new OC_SetItemContext(this._ctx, this.state);
        this.enterRule(localctx, 118, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1224;
            this.oC_PropertyExpression();
            this.state = 1226;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1225;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1228;
            this.match(CypherParser.T__4);
            this.state = 1230;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1229;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1232;
            this.oC_Expression();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Delete(): OC_DeleteContext {
        let localctx: OC_DeleteContext = new OC_DeleteContext(this._ctx, this.state);
        this.enterRule(localctx, 120, CypherParser.RULE_oC_Delete);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===92) {
                {
                this.state = 1234;
                this.match(CypherParser.DETACH);
                this.state = 1235;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1238;
            this.match(CypherParser.DELETE);
            this.state = 1240;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1239;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1242;
            this.oC_Expression();
            this.state = 1253;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1244;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1243;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1246;
                    this.match(CypherParser.T__3);
                    this.state = 1248;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1247;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1250;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1255;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_With(): OC_WithContext {
        let localctx: OC_WithContext = new OC_WithContext(this._ctx, this.state);
        this.enterRule(localctx, 122, CypherParser.RULE_oC_With);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1256;
            this.match(CypherParser.WITH);
            this.state = 1257;
            this.oC_ProjectionBody();
            this.state = 1262;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
            case 1:
                {
                this.state = 1259;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1258;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1261;
                this.oC_Where();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Return(): OC_ReturnContext {
        let localctx: OC_ReturnContext = new OC_ReturnContext(this._ctx, this.state);
        this.enterRule(localctx, 124, CypherParser.RULE_oC_Return);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1264;
            this.match(CypherParser.RETURN);
            this.state = 1265;
            this.oC_ProjectionBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ProjectionBody(): OC_ProjectionBodyContext {
        let localctx: OC_ProjectionBodyContext = new OC_ProjectionBodyContext(this._ctx, this.state);
        this.enterRule(localctx, 126, CypherParser.RULE_oC_ProjectionBody);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1271;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
            case 1:
                {
                this.state = 1268;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1267;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1270;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1273;
            this.match(CypherParser.SP);
            this.state = 1274;
            this.oC_ProjectionItems();
            this.state = 1277;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
            case 1:
                {
                this.state = 1275;
                this.match(CypherParser.SP);
                this.state = 1276;
                this.oC_Order();
                }
                break;
            }
            this.state = 1281;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 185, this._ctx) ) {
            case 1:
                {
                this.state = 1279;
                this.match(CypherParser.SP);
                this.state = 1280;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1285;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
            case 1:
                {
                this.state = 1283;
                this.match(CypherParser.SP);
                this.state = 1284;
                this.oC_Limit();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ProjectionItems(): OC_ProjectionItemsContext {
        let localctx: OC_ProjectionItemsContext = new OC_ProjectionItemsContext(this._ctx, this.state);
        this.enterRule(localctx, 128, CypherParser.RULE_oC_ProjectionItems);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1315;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1287;
                this.match(CypherParser.STAR);
                this.state = 1298;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 189, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1289;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 1288;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1291;
                        this.match(CypherParser.T__3);
                        this.state = 1293;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 1292;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1295;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1300;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 189, this._ctx);
                }
                }
                }
                break;
            case CypherParser.T__1:
            case CypherParser.T__5:
            case CypherParser.T__7:
            case CypherParser.T__25:
            case CypherParser.COMMENT:
            case CypherParser.EXPORT:
            case CypherParser.DATABASE:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.NOT:
            case CypherParser.MINUS:
            case CypherParser.IN:
            case CypherParser.NULL_:
            case CypherParser.TRUE:
            case CypherParser.FALSE:
            case CypherParser.COUNT:
            case CypherParser.EXISTS:
            case CypherParser.CASE:
            case CypherParser.END:
            case CypherParser.StringLiteral:
            case CypherParser.DecimalInteger:
            case CypherParser.HexLetter:
            case CypherParser.RegularDecimalReal:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1301;
                this.oC_ProjectionItem();
                this.state = 1312;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 192, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1303;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 1302;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1305;
                        this.match(CypherParser.T__3);
                        this.state = 1307;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 1306;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1309;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1314;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 192, this._ctx);
                }
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ProjectionItem(): OC_ProjectionItemContext {
        let localctx: OC_ProjectionItemContext = new OC_ProjectionItemContext(this._ctx, this.state);
        this.enterRule(localctx, 130, CypherParser.RULE_oC_ProjectionItem);
        try {
            this.state = 1324;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1317;
                this.oC_Expression();
                this.state = 1318;
                this.match(CypherParser.SP);
                this.state = 1319;
                this.match(CypherParser.AS);
                this.state = 1320;
                this.match(CypherParser.SP);
                this.state = 1321;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1323;
                this.oC_Expression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Order(): OC_OrderContext {
        let localctx: OC_OrderContext = new OC_OrderContext(this._ctx, this.state);
        this.enterRule(localctx, 132, CypherParser.RULE_oC_Order);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1326;
            this.match(CypherParser.ORDER);
            this.state = 1327;
            this.match(CypherParser.SP);
            this.state = 1328;
            this.match(CypherParser.BY);
            this.state = 1329;
            this.match(CypherParser.SP);
            this.state = 1330;
            this.oC_SortItem();
            this.state = 1338;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 1331;
                this.match(CypherParser.T__3);
                this.state = 1333;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1332;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1335;
                this.oC_SortItem();
                }
                }
                this.state = 1340;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Skip(): OC_SkipContext {
        let localctx: OC_SkipContext = new OC_SkipContext(this._ctx, this.state);
        this.enterRule(localctx, 134, CypherParser.RULE_oC_Skip);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1341;
            this.match(CypherParser.L_SKIP);
            this.state = 1342;
            this.match(CypherParser.SP);
            this.state = 1343;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Limit(): OC_LimitContext {
        let localctx: OC_LimitContext = new OC_LimitContext(this._ctx, this.state);
        this.enterRule(localctx, 136, CypherParser.RULE_oC_Limit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1345;
            this.match(CypherParser.LIMIT);
            this.state = 1346;
            this.match(CypherParser.SP);
            this.state = 1347;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SortItem(): OC_SortItemContext {
        let localctx: OC_SortItemContext = new OC_SortItemContext(this._ctx, this.state);
        this.enterRule(localctx, 138, CypherParser.RULE_oC_SortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1349;
            this.oC_Expression();
            this.state = 1354;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
            case 1:
                {
                this.state = 1351;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1350;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1353;
                _la = this._input.LA(1);
                if(!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Where(): OC_WhereContext {
        let localctx: OC_WhereContext = new OC_WhereContext(this._ctx, this.state);
        this.enterRule(localctx, 140, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1356;
            this.match(CypherParser.WHERE);
            this.state = 1357;
            this.match(CypherParser.SP);
            this.state = 1358;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Pattern(): OC_PatternContext {
        let localctx: OC_PatternContext = new OC_PatternContext(this._ctx, this.state);
        this.enterRule(localctx, 142, CypherParser.RULE_oC_Pattern);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1360;
            this.oC_PatternPart();
            this.state = 1371;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 201, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1362;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1361;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1364;
                    this.match(CypherParser.T__3);
                    this.state = 1366;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1365;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1368;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1373;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 201, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PatternPart(): OC_PatternPartContext {
        let localctx: OC_PatternPartContext = new OC_PatternPartContext(this._ctx, this.state);
        this.enterRule(localctx, 144, CypherParser.RULE_oC_PatternPart);
        let _la: number;
        try {
            this.state = 1385;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.EXPORT:
            case CypherParser.DATABASE:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.IN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1374;
                this.oC_Variable();
                this.state = 1376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1375;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1378;
                this.match(CypherParser.T__4);
                this.state = 1380;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1379;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1382;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1384;
                this.oC_AnonymousPatternPart();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext {
        let localctx: OC_AnonymousPatternPartContext = new OC_AnonymousPatternPartContext(this._ctx, this.state);
        this.enterRule(localctx, 146, CypherParser.RULE_oC_AnonymousPatternPart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1387;
            this.oC_PatternElement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PatternElement(): OC_PatternElementContext {
        let localctx: OC_PatternElementContext = new OC_PatternElementContext(this._ctx, this.state);
        this.enterRule(localctx, 148, CypherParser.RULE_oC_PatternElement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1403;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1389;
                this.oC_NodePattern();
                this.state = 1396;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1391;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 1390;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1393;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1398;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1399;
                this.match(CypherParser.T__1);
                this.state = 1400;
                this.oC_PatternElement();
                this.state = 1401;
                this.match(CypherParser.T__2);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_NodePattern(): OC_NodePatternContext {
        let localctx: OC_NodePatternContext = new OC_NodePatternContext(this._ctx, this.state);
        this.enterRule(localctx, 150, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1405;
            this.match(CypherParser.T__1);
            this.state = 1407;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1406;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1413;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 302256385) !== 0)) {
                {
                this.state = 1409;
                this.oC_Variable();
                this.state = 1411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1410;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1419;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===116) {
                {
                this.state = 1415;
                this.oC_NodeLabels();
                this.state = 1417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1416;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1425;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===8) {
                {
                this.state = 1421;
                this.kU_Properties();
                this.state = 1423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1422;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1427;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PatternElementChain(): OC_PatternElementChainContext {
        let localctx: OC_PatternElementChainContext = new OC_PatternElementChainContext(this._ctx, this.state);
        this.enterRule(localctx, 152, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1429;
            this.oC_RelationshipPattern();
            this.state = 1431;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1430;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1433;
            this.oC_NodePattern();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RelationshipPattern(): OC_RelationshipPatternContext {
        let localctx: OC_RelationshipPatternContext = new OC_RelationshipPatternContext(this._ctx, this.state);
        this.enterRule(localctx, 154, CypherParser.RULE_oC_RelationshipPattern);
        let _la: number;
        try {
            this.state = 1479;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 227, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1435;
                this.oC_LeftArrowHead();
                this.state = 1437;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1436;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1439;
                this.oC_Dash();
                this.state = 1441;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
                case 1:
                    {
                    this.state = 1440;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1444;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===6) {
                    {
                    this.state = 1443;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1447;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1446;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1449;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1451;
                this.oC_Dash();
                this.state = 1453;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
                case 1:
                    {
                    this.state = 1452;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1456;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===6) {
                    {
                    this.state = 1455;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1458;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1461;
                this.oC_Dash();
                this.state = 1463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1462;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1465;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1467;
                this.oC_Dash();
                this.state = 1469;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
                case 1:
                    {
                    this.state = 1468;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1472;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===6) {
                    {
                    this.state = 1471;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1475;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1474;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1477;
                this.oC_Dash();
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RelationshipDetail(): OC_RelationshipDetailContext {
        let localctx: OC_RelationshipDetailContext = new OC_RelationshipDetailContext(this._ctx, this.state);
        this.enterRule(localctx, 156, CypherParser.RULE_oC_RelationshipDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1481;
            this.match(CypherParser.T__5);
            this.state = 1483;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1482;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1489;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 302256385) !== 0)) {
                {
                this.state = 1485;
                this.oC_Variable();
                this.state = 1487;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1486;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1495;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===116) {
                {
                this.state = 1491;
                this.oC_RelationshipTypes();
                this.state = 1493;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1492;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1501;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===97) {
                {
                this.state = 1497;
                this.oC_RangeLiteral();
                this.state = 1499;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1498;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1507;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===8) {
                {
                this.state = 1503;
                this.kU_Properties();
                this.state = 1505;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1504;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1509;
            this.match(CypherParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_Properties(): KU_PropertiesContext {
        let localctx: KU_PropertiesContext = new KU_PropertiesContext(this._ctx, this.state);
        this.enterRule(localctx, 158, CypherParser.RULE_kU_Properties);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1511;
            this.match(CypherParser.T__7);
            this.state = 1513;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1512;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1548;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 302256385) !== 0)) {
                {
                this.state = 1515;
                this.oC_PropertyKeyName();
                this.state = 1517;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1516;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1519;
                this.match(CypherParser.COLON);
                this.state = 1521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1520;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1523;
                this.oC_Expression();
                this.state = 1525;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1524;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1545;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 1527;
                    this.match(CypherParser.T__3);
                    this.state = 1529;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1528;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1531;
                    this.oC_PropertyKeyName();
                    this.state = 1533;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1532;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1535;
                    this.match(CypherParser.COLON);
                    this.state = 1537;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1536;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1539;
                    this.oC_Expression();
                    this.state = 1541;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1540;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1547;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1550;
            this.match(CypherParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RelationshipTypes(): OC_RelationshipTypesContext {
        let localctx: OC_RelationshipTypesContext = new OC_RelationshipTypesContext(this._ctx, this.state);
        this.enterRule(localctx, 160, CypherParser.RULE_oC_RelationshipTypes);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1552;
            this.match(CypherParser.COLON);
            this.state = 1554;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1553;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1556;
            this.oC_RelTypeName();
            this.state = 1570;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1558;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1557;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1560;
                    this.match(CypherParser.T__9);
                    this.state = 1562;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===116) {
                        {
                        this.state = 1561;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 1565;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1564;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1567;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1572;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_NodeLabels(): OC_NodeLabelsContext {
        let localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this._ctx, this.state);
        this.enterRule(localctx, 162, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1573;
            this.oC_NodeLabel();
            this.state = 1580;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 253, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1575;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1574;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1577;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1582;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 253, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_NodeLabel(): OC_NodeLabelContext {
        let localctx: OC_NodeLabelContext = new OC_NodeLabelContext(this._ctx, this.state);
        this.enterRule(localctx, 164, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1583;
            this.match(CypherParser.COLON);
            this.state = 1585;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1584;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1587;
            this.oC_LabelName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RangeLiteral(): OC_RangeLiteralContext {
        let localctx: OC_RangeLiteralContext = new OC_RangeLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 166, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1589;
            this.match(CypherParser.STAR);
            this.state = 1591;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
            case 1:
                {
                this.state = 1590;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1597;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.SHORTEST:
                {
                this.state = 1593;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.ALL:
                {
                this.state = 1594;
                this.match(CypherParser.ALL);
                this.state = 1595;
                this.match(CypherParser.SP);
                this.state = 1596;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.T__1:
            case CypherParser.T__6:
            case CypherParser.T__7:
            case CypherParser.T__10:
            case CypherParser.DecimalInteger:
            case CypherParser.SP:
                break;
            default:
                break;
            }
            this.state = 1600;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 257, this._ctx) ) {
            case 1:
                {
                this.state = 1599;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1616;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 262, this._ctx) ) {
            case 1:
                {
                this.state = 1603;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===134) {
                    {
                    this.state = 1602;
                    this.oC_LowerBound();
                    }
                }

                this.state = 1606;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1605;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1608;
                this.match(CypherParser.T__10);
                this.state = 1610;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
                case 1:
                    {
                    this.state = 1609;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1613;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===134) {
                    {
                    this.state = 1612;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 1615;
                this.oC_IntegerLiteral();
                }
                break;
            }
            this.state = 1622;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 264, this._ctx) ) {
            case 1:
                {
                this.state = 1619;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1618;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1621;
                this.kU_RecursiveRelationshipComprehension();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_RecursiveRelationshipComprehension(): KU_RecursiveRelationshipComprehensionContext {
        let localctx: KU_RecursiveRelationshipComprehensionContext = new KU_RecursiveRelationshipComprehensionContext(this._ctx, this.state);
        this.enterRule(localctx, 168, CypherParser.RULE_kU_RecursiveRelationshipComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1624;
            this.match(CypherParser.T__1);
            this.state = 1626;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1625;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1628;
            this.oC_Variable();
            this.state = 1630;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1629;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1632;
            this.match(CypherParser.T__3);
            this.state = 1634;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1633;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1636;
            this.oC_Variable();
            this.state = 1645;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
            case 1:
                {
                this.state = 1638;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1637;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1640;
                this.match(CypherParser.T__9);
                this.state = 1642;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1641;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1644;
                this.oC_Where();
                }
                break;
            }
            this.state = 1666;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===10 || _la===146) {
                {
                this.state = 1648;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1647;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1650;
                this.match(CypherParser.T__9);
                this.state = 1652;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1651;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1654;
                this.kU_IntermediateRelProjectionItems();
                this.state = 1656;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1655;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1658;
                this.match(CypherParser.T__3);
                this.state = 1660;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1659;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1662;
                this.kU_IntermediateNodeProjectionItems();
                this.state = 1664;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1663;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1668;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_IntermediateNodeProjectionItems(): KU_IntermediateNodeProjectionItemsContext {
        let localctx: KU_IntermediateNodeProjectionItemsContext = new KU_IntermediateNodeProjectionItemsContext(this._ctx, this.state);
        this.enterRule(localctx, 170, CypherParser.RULE_kU_IntermediateNodeProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1670;
            this.match(CypherParser.T__7);
            this.state = 1672;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 277, this._ctx) ) {
            case 1:
                {
                this.state = 1671;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1675;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109188) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 2115141633) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 77929) !== 0)) {
                {
                this.state = 1674;
                this.oC_ProjectionItems();
                }
            }

            this.state = 1678;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1677;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1680;
            this.match(CypherParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_IntermediateRelProjectionItems(): KU_IntermediateRelProjectionItemsContext {
        let localctx: KU_IntermediateRelProjectionItemsContext = new KU_IntermediateRelProjectionItemsContext(this._ctx, this.state);
        this.enterRule(localctx, 172, CypherParser.RULE_kU_IntermediateRelProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1682;
            this.match(CypherParser.T__7);
            this.state = 1684;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 280, this._ctx) ) {
            case 1:
                {
                this.state = 1683;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1687;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109188) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 2115141633) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 77929) !== 0)) {
                {
                this.state = 1686;
                this.oC_ProjectionItems();
                }
            }

            this.state = 1690;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1689;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1692;
            this.match(CypherParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_LowerBound(): OC_LowerBoundContext {
        let localctx: OC_LowerBoundContext = new OC_LowerBoundContext(this._ctx, this.state);
        this.enterRule(localctx, 174, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1694;
            this.match(CypherParser.DecimalInteger);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_UpperBound(): OC_UpperBoundContext {
        let localctx: OC_UpperBoundContext = new OC_UpperBoundContext(this._ctx, this.state);
        this.enterRule(localctx, 176, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1696;
            this.match(CypherParser.DecimalInteger);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_LabelName(): OC_LabelNameContext {
        let localctx: OC_LabelNameContext = new OC_LabelNameContext(this._ctx, this.state);
        this.enterRule(localctx, 178, CypherParser.RULE_oC_LabelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1698;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RelTypeName(): OC_RelTypeNameContext {
        let localctx: OC_RelTypeNameContext = new OC_RelTypeNameContext(this._ctx, this.state);
        this.enterRule(localctx, 180, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1700;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Expression(): OC_ExpressionContext {
        let localctx: OC_ExpressionContext = new OC_ExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 182, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1702;
            this.oC_OrExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_OrExpression(): OC_OrExpressionContext {
        let localctx: OC_OrExpressionContext = new OC_OrExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 184, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1704;
            this.oC_XorExpression();
            this.state = 1711;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 283, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1705;
                    this.match(CypherParser.SP);
                    this.state = 1706;
                    this.match(CypherParser.OR);
                    this.state = 1707;
                    this.match(CypherParser.SP);
                    this.state = 1708;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 1713;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 283, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_XorExpression(): OC_XorExpressionContext {
        let localctx: OC_XorExpressionContext = new OC_XorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 186, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1714;
            this.oC_AndExpression();
            this.state = 1721;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 284, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1715;
                    this.match(CypherParser.SP);
                    this.state = 1716;
                    this.match(CypherParser.XOR);
                    this.state = 1717;
                    this.match(CypherParser.SP);
                    this.state = 1718;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 1723;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 284, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_AndExpression(): OC_AndExpressionContext {
        let localctx: OC_AndExpressionContext = new OC_AndExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 188, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1724;
            this.oC_NotExpression();
            this.state = 1731;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1725;
                    this.match(CypherParser.SP);
                    this.state = 1726;
                    this.match(CypherParser.AND);
                    this.state = 1727;
                    this.match(CypherParser.SP);
                    this.state = 1728;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 1733;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_NotExpression(): OC_NotExpressionContext {
        let localctx: OC_NotExpressionContext = new OC_NotExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 190, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1740;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===112) {
                {
                {
                this.state = 1734;
                this.match(CypherParser.NOT);
                this.state = 1736;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1735;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1742;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1743;
            this.oC_ComparisonExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ComparisonExpression(): OC_ComparisonExpressionContext {
        let localctx: OC_ComparisonExpressionContext = new OC_ComparisonExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 192, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1793;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 298, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1745;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1755;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 290, this._ctx) ) {
                case 1:
                    {
                    this.state = 1747;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1746;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1749;
                    this.kU_ComparisonOperator();
                    this.state = 1751;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1750;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1753;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1757;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 1759;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1758;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1761;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 1763;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1762;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1765;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1769;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1771;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1770;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1773;
                this.kU_ComparisonOperator();
                this.state = 1775;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1774;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1777;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1787;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1779;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 1778;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1781;
                        this.kU_ComparisonOperator();
                        this.state = 1783;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 1782;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1785;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1789;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 297, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_ComparisonOperator(): KU_ComparisonOperatorContext {
        let localctx: KU_ComparisonOperatorContext = new KU_ComparisonOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 194, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1795;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 127008) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_BitwiseOrOperatorExpression(): KU_BitwiseOrOperatorExpressionContext {
        let localctx: KU_BitwiseOrOperatorExpressionContext = new KU_BitwiseOrOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 196, CypherParser.RULE_kU_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1797;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 1808;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 301, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1799;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1798;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1801;
                    this.match(CypherParser.T__9);
                    this.state = 1803;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1802;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1805;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 1810;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 301, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_BitwiseAndOperatorExpression(): KU_BitwiseAndOperatorExpressionContext {
        let localctx: KU_BitwiseAndOperatorExpressionContext = new KU_BitwiseAndOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 198, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1811;
            this.kU_BitShiftOperatorExpression();
            this.state = 1822;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 304, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1813;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1812;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1815;
                    this.match(CypherParser.T__16);
                    this.state = 1817;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1816;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1819;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 1824;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 304, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_BitShiftOperatorExpression(): KU_BitShiftOperatorExpressionContext {
        let localctx: KU_BitShiftOperatorExpressionContext = new KU_BitShiftOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 200, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1825;
            this.oC_AddOrSubtractExpression();
            this.state = 1837;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 307, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1827;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1826;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1829;
                    this.kU_BitShiftOperator();
                    this.state = 1831;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1830;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1833;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 1839;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 307, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_BitShiftOperator(): KU_BitShiftOperatorContext {
        let localctx: KU_BitShiftOperatorContext = new KU_BitShiftOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 202, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1840;
            _la = this._input.LA(1);
            if(!(_la===18 || _la===19)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext {
        let localctx: OC_AddOrSubtractExpressionContext = new OC_AddOrSubtractExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 204, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1842;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 1854;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 310, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1844;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1843;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1846;
                    this.kU_AddOrSubtractOperator();
                    this.state = 1848;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1847;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1850;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 1856;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 310, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_AddOrSubtractOperator(): KU_AddOrSubtractOperatorContext {
        let localctx: KU_AddOrSubtractOperatorContext = new KU_AddOrSubtractOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 206, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1857;
            _la = this._input.LA(1);
            if(!(_la===20 || _la===114)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_MultiplyDivideModuloExpression(): OC_MultiplyDivideModuloExpressionContext {
        let localctx: OC_MultiplyDivideModuloExpressionContext = new OC_MultiplyDivideModuloExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 208, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1859;
            this.oC_PowerOfExpression();
            this.state = 1871;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 313, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1861;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1860;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1863;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 1865;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1864;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1867;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 1873;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 313, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_MultiplyDivideModuloOperator(): KU_MultiplyDivideModuloOperatorContext {
        let localctx: KU_MultiplyDivideModuloOperatorContext = new KU_MultiplyDivideModuloOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 210, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1874;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===22 || _la===97)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PowerOfExpression(): OC_PowerOfExpressionContext {
        let localctx: OC_PowerOfExpressionContext = new OC_PowerOfExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 212, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1876;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 1887;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 316, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1878;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1877;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1880;
                    this.match(CypherParser.T__22);
                    this.state = 1882;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1881;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1884;
                    this.oC_UnaryAddSubtractOrFactorialExpression();
                    }
                    }
                }
                this.state = 1889;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 316, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_UnaryAddSubtractOrFactorialExpression(): OC_UnaryAddSubtractOrFactorialExpressionContext {
        let localctx: OC_UnaryAddSubtractOrFactorialExpressionContext = new OC_UnaryAddSubtractOrFactorialExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 214, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1896;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===114) {
                {
                {
                this.state = 1890;
                this.match(CypherParser.MINUS);
                this.state = 1892;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1891;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1898;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1899;
            this.oC_StringListNullOperatorExpression();
            this.state = 1904;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 320, this._ctx) ) {
            case 1:
                {
                this.state = 1901;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1900;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1903;
                this.match(CypherParser.FACTORIAL);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_StringListNullOperatorExpression(): OC_StringListNullOperatorExpressionContext {
        let localctx: OC_StringListNullOperatorExpressionContext = new OC_StringListNullOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 216, CypherParser.RULE_oC_StringListNullOperatorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1906;
            this.oC_PropertyOrLabelsExpression();
            this.state = 1914;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 322, this._ctx) ) {
            case 1:
                {
                this.state = 1907;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 1909;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1908;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1911;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 321, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 1913;
                this.oC_NullOperatorExpression();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ListOperatorExpression(): OC_ListOperatorExpressionContext {
        let localctx: OC_ListOperatorExpressionContext = new OC_ListOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 218, CypherParser.RULE_oC_ListOperatorExpression);
        let _la: number;
        try {
            this.state = 1935;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 326, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1916;
                this.match(CypherParser.SP);
                this.state = 1917;
                this.match(CypherParser.IN);
                this.state = 1919;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 1918;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1921;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1922;
                this.match(CypherParser.T__5);
                this.state = 1923;
                this.oC_Expression();
                this.state = 1924;
                this.match(CypherParser.T__6);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1926;
                this.match(CypherParser.T__5);
                this.state = 1928;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109188) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 1624439845) !== 0) || _la===145) {
                    {
                    this.state = 1927;
                    this.oC_Expression();
                    }
                }

                this.state = 1930;
                this.match(CypherParser.COLON);
                this.state = 1932;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109188) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 1624439845) !== 0) || _la===145) {
                    {
                    this.state = 1931;
                    this.oC_Expression();
                    }
                }

                this.state = 1934;
                this.match(CypherParser.T__6);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_StringOperatorExpression(): OC_StringOperatorExpressionContext {
        let localctx: OC_StringOperatorExpressionContext = new OC_StringOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 220, CypherParser.RULE_oC_StringOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1948;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 327, this._ctx) ) {
            case 1:
                {
                this.state = 1937;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 1938;
                this.match(CypherParser.SP);
                this.state = 1939;
                this.match(CypherParser.STARTS);
                this.state = 1940;
                this.match(CypherParser.SP);
                this.state = 1941;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 1942;
                this.match(CypherParser.SP);
                this.state = 1943;
                this.match(CypherParser.ENDS);
                this.state = 1944;
                this.match(CypherParser.SP);
                this.state = 1945;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 1946;
                this.match(CypherParser.SP);
                this.state = 1947;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 1951;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1950;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1953;
            this.oC_PropertyOrLabelsExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RegularExpression(): OC_RegularExpressionContext {
        let localctx: OC_RegularExpressionContext = new OC_RegularExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 222, CypherParser.RULE_oC_RegularExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1956;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1955;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1958;
            this.match(CypherParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_NullOperatorExpression(): OC_NullOperatorExpressionContext {
        let localctx: OC_NullOperatorExpressionContext = new OC_NullOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 224, CypherParser.RULE_oC_NullOperatorExpression);
        try {
            this.state = 1970;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 330, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1960;
                this.match(CypherParser.SP);
                this.state = 1961;
                this.match(CypherParser.IS);
                this.state = 1962;
                this.match(CypherParser.SP);
                this.state = 1963;
                this.match(CypherParser.NULL_);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1964;
                this.match(CypherParser.SP);
                this.state = 1965;
                this.match(CypherParser.IS);
                this.state = 1966;
                this.match(CypherParser.SP);
                this.state = 1967;
                this.match(CypherParser.NOT);
                this.state = 1968;
                this.match(CypherParser.SP);
                this.state = 1969;
                this.match(CypherParser.NULL_);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
        let localctx: OC_PropertyOrLabelsExpressionContext = new OC_PropertyOrLabelsExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 226, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1972;
            this.oC_Atom();
            this.state = 1979;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 332, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1974;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 1973;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1976;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 1981;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 332, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Atom(): OC_AtomContext {
        let localctx: OC_AtomContext = new OC_AtomContext(this._ctx, this.state);
        this.enterRule(localctx, 228, CypherParser.RULE_oC_Atom);
        try {
            this.state = 1991;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 333, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1982;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1983;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1984;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1985;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1986;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1987;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 1988;
                this.oC_ExistSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 1989;
                this.kU_CountSubquery();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 1990;
                this.oC_Variable();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Literal(): OC_LiteralContext {
        let localctx: OC_LiteralContext = new OC_LiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 230, CypherParser.RULE_oC_Literal);
        try {
            this.state = 1999;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1993;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1994;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.TRUE:
            case CypherParser.FALSE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1995;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL_:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1996;
                this.match(CypherParser.NULL_);
                }
                break;
            case CypherParser.T__5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1997;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__7:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1998;
                this.kU_StructLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_BooleanLiteral(): OC_BooleanLiteralContext {
        let localctx: OC_BooleanLiteralContext = new OC_BooleanLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 232, CypherParser.RULE_oC_BooleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2001;
            _la = this._input.LA(1);
            if(!(_la===123 || _la===124)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ListLiteral(): OC_ListLiteralContext {
        let localctx: OC_ListLiteralContext = new OC_ListLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 234, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2003;
            this.match(CypherParser.T__5);
            this.state = 2005;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2004;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2020;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109188) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 1624439845) !== 0) || _la===145) {
                {
                this.state = 2007;
                this.oC_Expression();
                this.state = 2009;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2008;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2017;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2011;
                    this.kU_ListEntry();
                    this.state = 2013;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 2012;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2019;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2022;
            this.match(CypherParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_ListEntry(): KU_ListEntryContext {
        let localctx: KU_ListEntryContext = new KU_ListEntryContext(this._ctx, this.state);
        this.enterRule(localctx, 236, CypherParser.RULE_kU_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2024;
            this.match(CypherParser.T__3);
            this.state = 2026;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 340, this._ctx) ) {
            case 1:
                {
                this.state = 2025;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2029;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109188) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 1624439845) !== 0) || _la===145) {
                {
                this.state = 2028;
                this.oC_Expression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_StructLiteral(): KU_StructLiteralContext {
        let localctx: KU_StructLiteralContext = new KU_StructLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 238, CypherParser.RULE_kU_StructLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2031;
            this.match(CypherParser.T__7);
            this.state = 2033;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2032;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2035;
            this.kU_StructField();
            this.state = 2037;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2036;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2049;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 2039;
                this.match(CypherParser.T__3);
                this.state = 2041;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2040;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2043;
                this.kU_StructField();
                this.state = 2045;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2044;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2051;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2052;
            this.match(CypherParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_StructField(): KU_StructFieldContext {
        let localctx: KU_StructFieldContext = new KU_StructFieldContext(this._ctx, this.state);
        this.enterRule(localctx, 240, CypherParser.RULE_kU_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2056;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.EXPORT:
            case CypherParser.DATABASE:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.IN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2054;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2055;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2059;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2058;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2061;
            this.match(CypherParser.COLON);
            this.state = 2063;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2062;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2065;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ParenthesizedExpression(): OC_ParenthesizedExpressionContext {
        let localctx: OC_ParenthesizedExpressionContext = new OC_ParenthesizedExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 242, CypherParser.RULE_oC_ParenthesizedExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2067;
            this.match(CypherParser.T__1);
            this.state = 2069;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2068;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2071;
            this.oC_Expression();
            this.state = 2073;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2072;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2075;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_FunctionInvocation(): OC_FunctionInvocationContext {
        let localctx: OC_FunctionInvocationContext = new OC_FunctionInvocationContext(this._ctx, this.state);
        this.enterRule(localctx, 244, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2125;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 364, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2077;
                this.match(CypherParser.COUNT);
                this.state = 2079;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2078;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2081;
                this.match(CypherParser.T__1);
                this.state = 2083;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2082;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2085;
                this.match(CypherParser.STAR);
                this.state = 2087;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2086;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2089;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2090;
                this.oC_FunctionName();
                this.state = 2092;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2091;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2094;
                this.match(CypherParser.T__1);
                this.state = 2096;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2095;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2102;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===96) {
                    {
                    this.state = 2098;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2100;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 2099;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109188) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 1624439845) !== 0) || _la===145) {
                    {
                    this.state = 2104;
                    this.kU_FunctionParameter();
                    this.state = 2106;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 2105;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2118;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===4) {
                        {
                        {
                        this.state = 2108;
                        this.match(CypherParser.T__3);
                        this.state = 2110;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 2109;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2112;
                        this.kU_FunctionParameter();
                        this.state = 2114;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 2113;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2120;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2123;
                this.match(CypherParser.T__2);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_FunctionName(): OC_FunctionNameContext {
        let localctx: OC_FunctionNameContext = new OC_FunctionNameContext(this._ctx, this.state);
        this.enterRule(localctx, 246, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2127;
            this.oC_SymbolicName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_FunctionParameter(): KU_FunctionParameterContext {
        let localctx: KU_FunctionParameterContext = new KU_FunctionParameterContext(this._ctx, this.state);
        this.enterRule(localctx, 248, CypherParser.RULE_kU_FunctionParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2138;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 367, this._ctx) ) {
            case 1:
                {
                this.state = 2129;
                this.oC_SymbolicName();
                this.state = 2131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2130;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2133;
                this.match(CypherParser.COLON);
                this.state = 2134;
                this.match(CypherParser.T__4);
                this.state = 2136;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2135;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 2140;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PathPatterns(): OC_PathPatternsContext {
        let localctx: OC_PathPatternsContext = new OC_PathPatternsContext(this._ctx, this.state);
        this.enterRule(localctx, 250, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2142;
            this.oC_NodePattern();
            this.state = 2147;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2144;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===146) {
                        {
                        this.state = 2143;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2146;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2149;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 369, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ExistSubquery(): OC_ExistSubqueryContext {
        let localctx: OC_ExistSubqueryContext = new OC_ExistSubqueryContext(this._ctx, this.state);
        this.enterRule(localctx, 252, CypherParser.RULE_oC_ExistSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2151;
            this.match(CypherParser.EXISTS);
            this.state = 2153;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2152;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2155;
            this.match(CypherParser.T__7);
            this.state = 2157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2156;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2159;
            this.match(CypherParser.MATCH);
            this.state = 2161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2160;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2163;
            this.oC_Pattern();
            this.state = 2168;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 374, this._ctx) ) {
            case 1:
                {
                this.state = 2165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2164;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2167;
                this.oC_Where();
                }
                break;
            }
            this.state = 2171;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2170;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2173;
            this.match(CypherParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_CountSubquery(): KU_CountSubqueryContext {
        let localctx: KU_CountSubqueryContext = new KU_CountSubqueryContext(this._ctx, this.state);
        this.enterRule(localctx, 254, CypherParser.RULE_kU_CountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2175;
            this.match(CypherParser.COUNT);
            this.state = 2177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2176;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2179;
            this.match(CypherParser.T__7);
            this.state = 2181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2180;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2183;
            this.match(CypherParser.MATCH);
            this.state = 2185;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2184;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2187;
            this.oC_Pattern();
            this.state = 2192;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
            case 1:
                {
                this.state = 2189;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2188;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2191;
                this.oC_Where();
                }
                break;
            }
            this.state = 2195;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2194;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2197;
            this.match(CypherParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PropertyLookup(): OC_PropertyLookupContext {
        let localctx: OC_PropertyLookupContext = new OC_PropertyLookupContext(this._ctx, this.state);
        this.enterRule(localctx, 256, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2199;
            this.match(CypherParser.T__24);
            this.state = 2201;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2200;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2205;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.EXPORT:
            case CypherParser.DATABASE:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.IN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2203;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2204;
                this.match(CypherParser.STAR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_CaseExpression(): OC_CaseExpressionContext {
        let localctx: OC_CaseExpressionContext = new OC_CaseExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 258, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2229;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 389, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2207;
                this.match(CypherParser.CASE);
                this.state = 2212;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2209;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 2208;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2211;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2214;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 385, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2216;
                this.match(CypherParser.CASE);
                this.state = 2218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2217;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2220;
                this.oC_Expression();
                this.state = 2225;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2222;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===146) {
                            {
                            this.state = 2221;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2224;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2227;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 388, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2239;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 392, this._ctx) ) {
            case 1:
                {
                this.state = 2232;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2231;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2234;
                this.match(CypherParser.ELSE);
                this.state = 2236;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 2235;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2238;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2242;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2241;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2244;
            this.match(CypherParser.END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_CaseAlternative(): OC_CaseAlternativeContext {
        let localctx: OC_CaseAlternativeContext = new OC_CaseAlternativeContext(this._ctx, this.state);
        this.enterRule(localctx, 260, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2246;
            this.match(CypherParser.WHEN);
            this.state = 2248;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2247;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2250;
            this.oC_Expression();
            this.state = 2252;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2251;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2254;
            this.match(CypherParser.THEN);
            this.state = 2256;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2255;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2258;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Variable(): OC_VariableContext {
        let localctx: OC_VariableContext = new OC_VariableContext(this._ctx, this.state);
        this.enterRule(localctx, 262, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2260;
            this.oC_SymbolicName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_NumberLiteral(): OC_NumberLiteralContext {
        let localctx: OC_NumberLiteralContext = new OC_NumberLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 264, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 2264;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2262;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2263;
                this.oC_IntegerLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Parameter(): OC_ParameterContext {
        let localctx: OC_ParameterContext = new OC_ParameterContext(this._ctx, this.state);
        this.enterRule(localctx, 266, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2266;
            this.match(CypherParser.T__25);
            this.state = 2269;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.EXPORT:
            case CypherParser.DATABASE:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.IN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2267;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2268;
                this.match(CypherParser.DecimalInteger);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PropertyExpression(): OC_PropertyExpressionContext {
        let localctx: OC_PropertyExpressionContext = new OC_PropertyExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 268, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2271;
            this.oC_Atom();
            this.state = 2273;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 2272;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2275;
            this.oC_PropertyLookup();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        let localctx: OC_PropertyKeyNameContext = new OC_PropertyKeyNameContext(this._ctx, this.state);
        this.enterRule(localctx, 270, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2277;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        let localctx: OC_IntegerLiteralContext = new OC_IntegerLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 272, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2279;
            this.match(CypherParser.DecimalInteger);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_DoubleLiteral(): OC_DoubleLiteralContext {
        let localctx: OC_DoubleLiteralContext = new OC_DoubleLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 274, CypherParser.RULE_oC_DoubleLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2281;
            this.match(CypherParser.RegularDecimalReal);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        let localctx: OC_SchemaNameContext = new OC_SchemaNameContext(this._ctx, this.state);
        this.enterRule(localctx, 276, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2283;
            this.oC_SymbolicName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        let localctx: OC_SymbolicNameContext = new OC_SymbolicNameContext(this._ctx, this.state);
        this.enterRule(localctx, 278, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 2290;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2285;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2286;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2288;
                this.match(CypherParser.HexLetter);
                }
                break;
            case CypherParser.COMMENT:
            case CypherParser.EXPORT:
            case CypherParser.DATABASE:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.IN:
            case CypherParser.COUNT:
            case CypherParser.END:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2289;
                this.kU_NonReservedKeywords();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_NonReservedKeywords(): KU_NonReservedKeywordsContext {
        let localctx: KU_NonReservedKeywordsContext = new KU_NonReservedKeywordsContext(this._ctx, this.state);
        this.enterRule(localctx, 280, CypherParser.RULE_kU_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2292;
            _la = this._input.LA(1);
            if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 8913345) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 4353) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_LeftArrowHead(): OC_LeftArrowHeadContext {
        let localctx: OC_LeftArrowHeadContext = new OC_LeftArrowHeadContext(this._ctx, this.state);
        this.enterRule(localctx, 282, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2294;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2013274112) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RightArrowHead(): OC_RightArrowHeadContext {
        let localctx: OC_RightArrowHeadContext = new OC_RightArrowHeadContext(this._ctx, this.state);
        this.enterRule(localctx, 284, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2296;
            _la = this._input.LA(1);
            if(!(((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & 983041) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Dash(): OC_DashContext {
        let localctx: OC_DashContext = new OC_DashContext(this._ctx, this.state);
        this.enterRule(localctx, 286, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2298;
            _la = this._input.LA(1);
            if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2047) !== 0) || _la===114)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }

    public override sempred(localctx: antlr.RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 32:
            return this.kU_DataType_sempred(localctx as KU_DataTypeContext, predIndex);
        }
        return true;
    }
    private kU_DataType_sempred(localctx: KU_DataTypeContext, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,149,2301,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,1,0,1,0,3,0,291,8,0,1,0,1,0,3,0,295,8,0,1,0,5,
        0,298,8,0,10,0,12,0,301,9,0,1,0,3,0,304,8,0,1,0,1,0,1,1,3,1,309,
        8,1,1,1,3,1,312,8,1,1,1,1,1,3,1,316,8,1,1,1,3,1,319,8,1,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,332,8,2,1,3,1,3,1,3,1,3,
        3,3,338,8,3,1,3,1,3,3,3,342,8,3,1,3,1,3,3,3,346,8,3,1,3,1,3,3,3,
        350,8,3,1,3,3,3,353,8,3,1,3,1,3,1,3,1,3,3,3,359,8,3,1,3,3,3,362,
        8,3,1,3,1,3,3,3,366,8,3,1,3,1,3,3,3,370,8,3,1,3,1,3,3,3,374,8,3,
        1,4,1,4,3,4,378,8,4,1,4,1,4,3,4,382,8,4,1,4,5,4,385,8,4,10,4,12,
        4,388,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,398,8,5,1,5,1,5,3,
        5,402,8,5,1,5,1,5,3,5,406,8,5,1,5,5,5,409,8,5,10,5,12,5,412,9,5,
        1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,424,8,6,1,6,1,6,3,6,
        428,8,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,436,8,6,1,6,1,6,3,6,440,8,6,
        1,6,1,6,3,6,444,8,6,1,6,1,6,3,6,448,8,6,1,7,1,7,1,7,1,7,1,7,1,7,
        3,7,456,8,7,1,7,1,7,3,7,460,8,7,1,7,1,7,3,7,464,8,7,1,7,1,7,3,7,
        468,8,7,1,8,1,8,1,8,1,8,3,8,474,8,8,1,8,1,8,3,8,478,8,8,1,8,1,8,
        1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,
        10,1,10,1,10,3,10,500,8,10,1,10,1,10,3,10,504,8,10,1,10,3,10,507,
        8,10,1,10,3,10,510,8,10,1,10,3,10,513,8,10,1,10,3,10,516,8,10,1,
        10,1,10,3,10,520,8,10,1,10,5,10,523,8,10,10,10,12,10,526,9,10,1,
        10,3,10,529,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,3,11,539,
        8,11,1,11,1,11,3,11,543,8,11,1,11,5,11,546,8,11,10,11,12,11,549,
        9,11,1,12,1,12,3,12,553,8,12,1,12,1,12,1,12,3,12,558,8,12,1,12,1,
        12,1,13,1,13,3,13,564,8,13,1,13,1,13,3,13,568,8,13,1,13,1,13,3,13,
        572,8,13,1,13,5,13,575,8,13,10,13,12,13,578,9,13,1,13,1,13,1,13,
        1,13,3,13,584,8,13,1,13,1,13,3,13,588,8,13,1,13,1,13,3,13,592,8,
        13,1,13,3,13,595,8,13,1,14,1,14,3,14,599,8,14,1,14,1,14,3,14,603,
        8,14,1,14,5,14,606,8,14,10,14,12,14,609,9,14,1,15,1,15,3,15,613,
        8,15,1,15,1,15,3,15,617,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,
        1,16,3,16,627,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,
        637,8,17,1,17,1,17,3,17,641,8,17,1,17,1,17,3,17,645,8,17,1,17,1,
        17,3,17,649,8,17,1,17,1,17,1,17,3,17,654,8,17,1,17,1,17,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,3,18,666,8,18,1,18,1,18,3,18,670,8,
        18,1,18,1,18,3,18,674,8,18,1,18,1,18,3,18,678,8,18,1,18,1,18,3,18,
        682,8,18,3,18,684,8,18,1,18,1,18,3,18,688,8,18,1,18,1,18,3,18,692,
        8,18,3,18,694,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,19,3,19,708,8,19,1,19,1,19,3,19,712,8,19,1,19,1,19,3,
        19,716,8,19,1,19,1,19,3,19,720,8,19,1,19,4,19,723,8,19,11,19,12,
        19,724,1,19,3,19,728,8,19,1,19,1,19,3,19,732,8,19,1,19,1,19,3,19,
        736,8,19,3,19,738,8,19,1,19,1,19,3,19,742,8,19,1,19,1,19,3,19,746,
        8,19,3,19,748,8,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
        1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,3,24,
        784,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,795,8,
        25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,
        28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,3,29,817,8,29,1,29,1,29,3,
        29,821,8,29,1,29,5,29,824,8,29,10,29,12,29,827,9,29,1,30,1,30,1,
        30,1,30,1,31,1,31,1,31,1,31,3,31,837,8,31,1,31,1,31,3,31,841,8,31,
        1,31,1,31,3,31,845,8,31,1,31,1,31,1,32,1,32,1,32,1,32,3,32,853,8,
        32,1,32,1,32,3,32,857,8,32,1,32,1,32,3,32,861,8,32,1,32,1,32,1,32,
        1,32,3,32,867,8,32,1,32,1,32,3,32,871,8,32,1,32,1,32,3,32,875,8,
        32,1,32,1,32,1,32,1,32,3,32,881,8,32,1,32,1,32,3,32,885,8,32,1,32,
        1,32,3,32,889,8,32,1,32,1,32,3,32,893,8,32,1,32,1,32,3,32,897,8,
        32,1,32,1,32,3,32,901,8,32,1,32,1,32,5,32,905,8,32,10,32,12,32,908,
        9,32,1,33,1,33,5,33,912,8,33,10,33,12,33,915,9,33,1,34,1,34,3,34,
        919,8,34,1,34,1,34,1,35,1,35,3,35,925,8,35,1,36,1,36,1,37,1,37,1,
        38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,
        38,3,38,945,8,38,1,39,1,39,3,39,949,8,39,1,40,1,40,1,40,1,40,1,40,
        1,40,3,40,957,8,40,1,41,1,41,1,41,1,41,1,42,1,42,1,43,1,43,3,43,
        967,8,43,1,43,5,43,970,8,43,10,43,12,43,973,9,43,1,43,1,43,3,43,
        977,8,43,4,43,979,8,43,11,43,12,43,980,1,43,1,43,1,43,3,43,986,8,
        43,1,44,1,44,1,44,1,44,3,44,992,8,44,1,44,1,44,1,44,3,44,997,8,44,
        1,44,3,44,1000,8,44,1,45,1,45,3,45,1004,8,45,1,46,1,46,3,46,1008,
        8,46,5,46,1010,8,46,10,46,12,46,1013,9,46,1,46,1,46,1,46,3,46,1018,
        8,46,5,46,1020,8,46,10,46,12,46,1023,9,46,1,46,1,46,3,46,1027,8,
        46,1,46,5,46,1030,8,46,10,46,12,46,1033,9,46,1,46,3,46,1036,8,46,
        1,46,3,46,1039,8,46,1,46,1,46,3,46,1043,8,46,4,46,1045,8,46,11,46,
        12,46,1046,1,46,1,46,3,46,1051,8,46,1,47,1,47,3,47,1055,8,47,4,47,
        1057,8,47,11,47,12,47,1058,1,47,1,47,1,48,1,48,3,48,1065,8,48,5,
        48,1067,8,48,10,48,12,48,1070,9,48,1,48,1,48,3,48,1074,8,48,5,48,
        1076,8,48,10,48,12,48,1079,9,48,1,48,1,48,1,49,1,49,1,49,1,49,3,
        49,1087,8,49,1,50,1,50,1,50,1,50,3,50,1093,8,50,1,51,1,51,1,51,1,
        51,1,51,1,51,3,51,1101,8,51,1,51,1,51,3,51,1105,8,51,1,51,1,51,3,
        51,1109,8,51,1,51,1,51,3,51,1113,8,51,1,51,1,51,1,51,1,51,1,51,3,
        51,1120,8,51,1,51,1,51,3,51,1124,8,51,1,51,1,51,3,51,1128,8,51,1,
        51,1,51,3,51,1132,8,51,1,51,3,51,1135,8,51,1,51,3,51,1138,8,51,1,
        51,3,51,1141,8,51,1,52,1,52,1,52,1,52,3,52,1147,8,52,1,52,3,52,1150,
        8,52,1,53,1,53,3,53,1154,8,53,1,53,1,53,3,53,1158,8,53,1,53,1,53,
        3,53,1162,8,53,1,53,3,53,1165,8,53,1,54,1,54,3,54,1169,8,54,1,54,
        1,54,1,54,1,54,1,54,1,54,1,55,1,55,3,55,1179,8,55,1,55,1,55,1,56,
        1,56,3,56,1185,8,56,1,56,1,56,1,56,5,56,1190,8,56,10,56,12,56,1193,
        9,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,3,57,1205,
        8,57,1,58,1,58,3,58,1209,8,58,1,58,1,58,3,58,1213,8,58,1,58,1,58,
        3,58,1217,8,58,1,58,5,58,1220,8,58,10,58,12,58,1223,9,58,1,59,1,
        59,3,59,1227,8,59,1,59,1,59,3,59,1231,8,59,1,59,1,59,1,60,1,60,3,
        60,1237,8,60,1,60,1,60,3,60,1241,8,60,1,60,1,60,3,60,1245,8,60,1,
        60,1,60,3,60,1249,8,60,1,60,5,60,1252,8,60,10,60,12,60,1255,9,60,
        1,61,1,61,1,61,3,61,1260,8,61,1,61,3,61,1263,8,61,1,62,1,62,1,62,
        1,63,3,63,1269,8,63,1,63,3,63,1272,8,63,1,63,1,63,1,63,1,63,3,63,
        1278,8,63,1,63,1,63,3,63,1282,8,63,1,63,1,63,3,63,1286,8,63,1,64,
        1,64,3,64,1290,8,64,1,64,1,64,3,64,1294,8,64,1,64,5,64,1297,8,64,
        10,64,12,64,1300,9,64,1,64,1,64,3,64,1304,8,64,1,64,1,64,3,64,1308,
        8,64,1,64,5,64,1311,8,64,10,64,12,64,1314,9,64,3,64,1316,8,64,1,
        65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,1325,8,65,1,66,1,66,1,66,1,
        66,1,66,1,66,1,66,3,66,1334,8,66,1,66,5,66,1337,8,66,10,66,12,66,
        1340,9,66,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,69,1,69,3,69,
        1352,8,69,1,69,3,69,1355,8,69,1,70,1,70,1,70,1,70,1,71,1,71,3,71,
        1363,8,71,1,71,1,71,3,71,1367,8,71,1,71,5,71,1370,8,71,10,71,12,
        71,1373,9,71,1,72,1,72,3,72,1377,8,72,1,72,1,72,3,72,1381,8,72,1,
        72,1,72,1,72,3,72,1386,8,72,1,73,1,73,1,74,1,74,3,74,1392,8,74,1,
        74,5,74,1395,8,74,10,74,12,74,1398,9,74,1,74,1,74,1,74,1,74,3,74,
        1404,8,74,1,75,1,75,3,75,1408,8,75,1,75,1,75,3,75,1412,8,75,3,75,
        1414,8,75,1,75,1,75,3,75,1418,8,75,3,75,1420,8,75,1,75,1,75,3,75,
        1424,8,75,3,75,1426,8,75,1,75,1,75,1,76,1,76,3,76,1432,8,76,1,76,
        1,76,1,77,1,77,3,77,1438,8,77,1,77,1,77,3,77,1442,8,77,1,77,3,77,
        1445,8,77,1,77,3,77,1448,8,77,1,77,1,77,1,77,1,77,3,77,1454,8,77,
        1,77,3,77,1457,8,77,1,77,3,77,1460,8,77,1,77,1,77,3,77,1464,8,77,
        1,77,1,77,1,77,1,77,3,77,1470,8,77,1,77,3,77,1473,8,77,1,77,3,77,
        1476,8,77,1,77,1,77,3,77,1480,8,77,1,78,1,78,3,78,1484,8,78,1,78,
        1,78,3,78,1488,8,78,3,78,1490,8,78,1,78,1,78,3,78,1494,8,78,3,78,
        1496,8,78,1,78,1,78,3,78,1500,8,78,3,78,1502,8,78,1,78,1,78,3,78,
        1506,8,78,3,78,1508,8,78,1,78,1,78,1,79,1,79,3,79,1514,8,79,1,79,
        1,79,3,79,1518,8,79,1,79,1,79,3,79,1522,8,79,1,79,1,79,3,79,1526,
        8,79,1,79,1,79,3,79,1530,8,79,1,79,1,79,3,79,1534,8,79,1,79,1,79,
        3,79,1538,8,79,1,79,1,79,3,79,1542,8,79,5,79,1544,8,79,10,79,12,
        79,1547,9,79,3,79,1549,8,79,1,79,1,79,1,80,1,80,3,80,1555,8,80,1,
        80,1,80,3,80,1559,8,80,1,80,1,80,3,80,1563,8,80,1,80,3,80,1566,8,
        80,1,80,5,80,1569,8,80,10,80,12,80,1572,9,80,1,81,1,81,3,81,1576,
        8,81,1,81,5,81,1579,8,81,10,81,12,81,1582,9,81,1,82,1,82,3,82,1586,
        8,82,1,82,1,82,1,83,1,83,3,83,1592,8,83,1,83,1,83,1,83,1,83,3,83,
        1598,8,83,1,83,3,83,1601,8,83,1,83,3,83,1604,8,83,1,83,3,83,1607,
        8,83,1,83,1,83,3,83,1611,8,83,1,83,3,83,1614,8,83,1,83,3,83,1617,
        8,83,1,83,3,83,1620,8,83,1,83,3,83,1623,8,83,1,84,1,84,3,84,1627,
        8,84,1,84,1,84,3,84,1631,8,84,1,84,1,84,3,84,1635,8,84,1,84,1,84,
        3,84,1639,8,84,1,84,1,84,3,84,1643,8,84,1,84,3,84,1646,8,84,1,84,
        3,84,1649,8,84,1,84,1,84,3,84,1653,8,84,1,84,1,84,3,84,1657,8,84,
        1,84,1,84,3,84,1661,8,84,1,84,1,84,3,84,1665,8,84,3,84,1667,8,84,
        1,84,1,84,1,85,1,85,3,85,1673,8,85,1,85,3,85,1676,8,85,1,85,3,85,
        1679,8,85,1,85,1,85,1,86,1,86,3,86,1685,8,86,1,86,3,86,1688,8,86,
        1,86,3,86,1691,8,86,1,86,1,86,1,87,1,87,1,88,1,88,1,89,1,89,1,90,
        1,90,1,91,1,91,1,92,1,92,1,92,1,92,1,92,5,92,1710,8,92,10,92,12,
        92,1713,9,92,1,93,1,93,1,93,1,93,1,93,5,93,1720,8,93,10,93,12,93,
        1723,9,93,1,94,1,94,1,94,1,94,1,94,5,94,1730,8,94,10,94,12,94,1733,
        9,94,1,95,1,95,3,95,1737,8,95,5,95,1739,8,95,10,95,12,95,1742,9,
        95,1,95,1,95,1,96,1,96,3,96,1748,8,96,1,96,1,96,3,96,1752,8,96,1,
        96,1,96,3,96,1756,8,96,1,96,1,96,3,96,1760,8,96,1,96,1,96,3,96,1764,
        8,96,1,96,1,96,1,96,1,96,1,96,1,96,3,96,1772,8,96,1,96,1,96,3,96,
        1776,8,96,1,96,1,96,3,96,1780,8,96,1,96,1,96,3,96,1784,8,96,1,96,
        1,96,4,96,1788,8,96,11,96,12,96,1789,1,96,1,96,3,96,1794,8,96,1,
        97,1,97,1,98,1,98,3,98,1800,8,98,1,98,1,98,3,98,1804,8,98,1,98,5,
        98,1807,8,98,10,98,12,98,1810,9,98,1,99,1,99,3,99,1814,8,99,1,99,
        1,99,3,99,1818,8,99,1,99,5,99,1821,8,99,10,99,12,99,1824,9,99,1,
        100,1,100,3,100,1828,8,100,1,100,1,100,3,100,1832,8,100,1,100,1,
        100,5,100,1836,8,100,10,100,12,100,1839,9,100,1,101,1,101,1,102,
        1,102,3,102,1845,8,102,1,102,1,102,3,102,1849,8,102,1,102,1,102,
        5,102,1853,8,102,10,102,12,102,1856,9,102,1,103,1,103,1,104,1,104,
        3,104,1862,8,104,1,104,1,104,3,104,1866,8,104,1,104,1,104,5,104,
        1870,8,104,10,104,12,104,1873,9,104,1,105,1,105,1,106,1,106,3,106,
        1879,8,106,1,106,1,106,3,106,1883,8,106,1,106,5,106,1886,8,106,10,
        106,12,106,1889,9,106,1,107,1,107,3,107,1893,8,107,5,107,1895,8,
        107,10,107,12,107,1898,9,107,1,107,1,107,3,107,1902,8,107,1,107,
        3,107,1905,8,107,1,108,1,108,1,108,4,108,1910,8,108,11,108,12,108,
        1911,1,108,3,108,1915,8,108,1,109,1,109,1,109,3,109,1920,8,109,1,
        109,1,109,1,109,1,109,1,109,1,109,1,109,3,109,1929,8,109,1,109,1,
        109,3,109,1933,8,109,1,109,3,109,1936,8,109,1,110,1,110,1,110,1,
        110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,3,110,1949,8,110,1,
        110,3,110,1952,8,110,1,110,1,110,1,111,3,111,1957,8,111,1,111,1,
        111,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,
        3,112,1971,8,112,1,113,1,113,3,113,1975,8,113,1,113,5,113,1978,8,
        113,10,113,12,113,1981,9,113,1,114,1,114,1,114,1,114,1,114,1,114,
        1,114,1,114,1,114,3,114,1992,8,114,1,115,1,115,1,115,1,115,1,115,
        1,115,3,115,2000,8,115,1,116,1,116,1,117,1,117,3,117,2006,8,117,
        1,117,1,117,3,117,2010,8,117,1,117,1,117,3,117,2014,8,117,5,117,
        2016,8,117,10,117,12,117,2019,9,117,3,117,2021,8,117,1,117,1,117,
        1,118,1,118,3,118,2027,8,118,1,118,3,118,2030,8,118,1,119,1,119,
        3,119,2034,8,119,1,119,1,119,3,119,2038,8,119,1,119,1,119,3,119,
        2042,8,119,1,119,1,119,3,119,2046,8,119,5,119,2048,8,119,10,119,
        12,119,2051,9,119,1,119,1,119,1,120,1,120,3,120,2057,8,120,1,120,
        3,120,2060,8,120,1,120,1,120,3,120,2064,8,120,1,120,1,120,1,121,
        1,121,3,121,2070,8,121,1,121,1,121,3,121,2074,8,121,1,121,1,121,
        1,122,1,122,3,122,2080,8,122,1,122,1,122,3,122,2084,8,122,1,122,
        1,122,3,122,2088,8,122,1,122,1,122,1,122,3,122,2093,8,122,1,122,
        1,122,3,122,2097,8,122,1,122,1,122,3,122,2101,8,122,3,122,2103,8,
        122,1,122,1,122,3,122,2107,8,122,1,122,1,122,3,122,2111,8,122,1,
        122,1,122,3,122,2115,8,122,5,122,2117,8,122,10,122,12,122,2120,9,
        122,3,122,2122,8,122,1,122,1,122,3,122,2126,8,122,1,123,1,123,1,
        124,1,124,3,124,2132,8,124,1,124,1,124,1,124,3,124,2137,8,124,3,
        124,2139,8,124,1,124,1,124,1,125,1,125,3,125,2145,8,125,1,125,4,
        125,2148,8,125,11,125,12,125,2149,1,126,1,126,3,126,2154,8,126,1,
        126,1,126,3,126,2158,8,126,1,126,1,126,3,126,2162,8,126,1,126,1,
        126,3,126,2166,8,126,1,126,3,126,2169,8,126,1,126,3,126,2172,8,126,
        1,126,1,126,1,127,1,127,3,127,2178,8,127,1,127,1,127,3,127,2182,
        8,127,1,127,1,127,3,127,2186,8,127,1,127,1,127,3,127,2190,8,127,
        1,127,3,127,2193,8,127,1,127,3,127,2196,8,127,1,127,1,127,1,128,
        1,128,3,128,2202,8,128,1,128,1,128,3,128,2206,8,128,1,129,1,129,
        3,129,2210,8,129,1,129,4,129,2213,8,129,11,129,12,129,2214,1,129,
        1,129,3,129,2219,8,129,1,129,1,129,3,129,2223,8,129,1,129,4,129,
        2226,8,129,11,129,12,129,2227,3,129,2230,8,129,1,129,3,129,2233,
        8,129,1,129,1,129,3,129,2237,8,129,1,129,3,129,2240,8,129,1,129,
        3,129,2243,8,129,1,129,1,129,1,130,1,130,3,130,2249,8,130,1,130,
        1,130,3,130,2253,8,130,1,130,1,130,3,130,2257,8,130,1,130,1,130,
        1,131,1,131,1,132,1,132,3,132,2265,8,132,1,133,1,133,1,133,3,133,
        2270,8,133,1,134,1,134,3,134,2274,8,134,1,134,1,134,1,135,1,135,
        1,136,1,136,1,137,1,137,1,138,1,138,1,139,1,139,1,139,1,139,1,139,
        3,139,2291,8,139,1,140,1,140,1,141,1,141,1,142,1,142,1,143,1,143,
        1,143,0,1,64,144,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
        36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
        80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
        118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,
        150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,
        182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,
        214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,
        246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,
        278,280,282,284,286,0,11,2,0,56,56,58,58,1,0,103,106,2,0,5,5,12,
        16,1,0,18,19,2,0,20,20,114,114,2,0,21,22,97,97,1,0,123,124,7,0,47,
        47,53,55,66,66,70,70,117,117,125,125,129,129,2,0,13,13,27,30,2,0,
        15,15,31,34,2,0,35,45,114,114,2606,0,288,1,0,0,0,2,308,1,0,0,0,4,
        331,1,0,0,0,6,333,1,0,0,0,8,375,1,0,0,0,10,389,1,0,0,0,12,419,1,
        0,0,0,14,449,1,0,0,0,16,469,1,0,0,0,18,481,1,0,0,0,20,493,1,0,0,
        0,22,536,1,0,0,0,24,550,1,0,0,0,26,594,1,0,0,0,28,596,1,0,0,0,30,
        610,1,0,0,0,32,626,1,0,0,0,34,628,1,0,0,0,36,657,1,0,0,0,38,697,
        1,0,0,0,40,751,1,0,0,0,42,759,1,0,0,0,44,765,1,0,0,0,46,771,1,0,
        0,0,48,783,1,0,0,0,50,785,1,0,0,0,52,796,1,0,0,0,54,800,1,0,0,0,
        56,806,1,0,0,0,58,814,1,0,0,0,60,828,1,0,0,0,62,832,1,0,0,0,64,900,
        1,0,0,0,66,909,1,0,0,0,68,916,1,0,0,0,70,924,1,0,0,0,72,926,1,0,
        0,0,74,928,1,0,0,0,76,944,1,0,0,0,78,948,1,0,0,0,80,950,1,0,0,0,
        82,958,1,0,0,0,84,962,1,0,0,0,86,985,1,0,0,0,88,999,1,0,0,0,90,1003,
        1,0,0,0,92,1050,1,0,0,0,94,1056,1,0,0,0,96,1068,1,0,0,0,98,1086,
        1,0,0,0,100,1092,1,0,0,0,102,1094,1,0,0,0,104,1142,1,0,0,0,106,1153,
        1,0,0,0,108,1166,1,0,0,0,110,1176,1,0,0,0,112,1182,1,0,0,0,114,1204,
        1,0,0,0,116,1206,1,0,0,0,118,1224,1,0,0,0,120,1236,1,0,0,0,122,1256,
        1,0,0,0,124,1264,1,0,0,0,126,1271,1,0,0,0,128,1315,1,0,0,0,130,1324,
        1,0,0,0,132,1326,1,0,0,0,134,1341,1,0,0,0,136,1345,1,0,0,0,138,1349,
        1,0,0,0,140,1356,1,0,0,0,142,1360,1,0,0,0,144,1385,1,0,0,0,146,1387,
        1,0,0,0,148,1403,1,0,0,0,150,1405,1,0,0,0,152,1429,1,0,0,0,154,1479,
        1,0,0,0,156,1481,1,0,0,0,158,1511,1,0,0,0,160,1552,1,0,0,0,162,1573,
        1,0,0,0,164,1583,1,0,0,0,166,1589,1,0,0,0,168,1624,1,0,0,0,170,1670,
        1,0,0,0,172,1682,1,0,0,0,174,1694,1,0,0,0,176,1696,1,0,0,0,178,1698,
        1,0,0,0,180,1700,1,0,0,0,182,1702,1,0,0,0,184,1704,1,0,0,0,186,1714,
        1,0,0,0,188,1724,1,0,0,0,190,1740,1,0,0,0,192,1793,1,0,0,0,194,1795,
        1,0,0,0,196,1797,1,0,0,0,198,1811,1,0,0,0,200,1825,1,0,0,0,202,1840,
        1,0,0,0,204,1842,1,0,0,0,206,1857,1,0,0,0,208,1859,1,0,0,0,210,1874,
        1,0,0,0,212,1876,1,0,0,0,214,1896,1,0,0,0,216,1906,1,0,0,0,218,1935,
        1,0,0,0,220,1948,1,0,0,0,222,1956,1,0,0,0,224,1970,1,0,0,0,226,1972,
        1,0,0,0,228,1991,1,0,0,0,230,1999,1,0,0,0,232,2001,1,0,0,0,234,2003,
        1,0,0,0,236,2024,1,0,0,0,238,2031,1,0,0,0,240,2056,1,0,0,0,242,2067,
        1,0,0,0,244,2125,1,0,0,0,246,2127,1,0,0,0,248,2138,1,0,0,0,250,2142,
        1,0,0,0,252,2151,1,0,0,0,254,2175,1,0,0,0,256,2199,1,0,0,0,258,2229,
        1,0,0,0,260,2246,1,0,0,0,262,2260,1,0,0,0,264,2264,1,0,0,0,266,2266,
        1,0,0,0,268,2271,1,0,0,0,270,2277,1,0,0,0,272,2279,1,0,0,0,274,2281,
        1,0,0,0,276,2283,1,0,0,0,278,2290,1,0,0,0,280,2292,1,0,0,0,282,2294,
        1,0,0,0,284,2296,1,0,0,0,286,2298,1,0,0,0,288,299,3,2,1,0,289,291,
        5,146,0,0,290,289,1,0,0,0,290,291,1,0,0,0,291,292,1,0,0,0,292,294,
        5,1,0,0,293,295,5,146,0,0,294,293,1,0,0,0,294,295,1,0,0,0,295,296,
        1,0,0,0,296,298,3,2,1,0,297,290,1,0,0,0,298,301,1,0,0,0,299,297,
        1,0,0,0,299,300,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,302,304,
        5,146,0,0,303,302,1,0,0,0,303,304,1,0,0,0,304,305,1,0,0,0,305,306,
        5,0,0,1,306,1,1,0,0,0,307,309,3,70,35,0,308,307,1,0,0,0,308,309,
        1,0,0,0,309,311,1,0,0,0,310,312,5,146,0,0,311,310,1,0,0,0,311,312,
        1,0,0,0,312,313,1,0,0,0,313,318,3,4,2,0,314,316,5,146,0,0,315,314,
        1,0,0,0,315,316,1,0,0,0,316,317,1,0,0,0,317,319,5,1,0,0,318,315,
        1,0,0,0,318,319,1,0,0,0,319,3,1,0,0,0,320,332,3,84,42,0,321,332,
        3,32,16,0,322,332,3,6,3,0,323,332,3,10,5,0,324,332,3,12,6,0,325,
        332,3,16,8,0,326,332,3,20,10,0,327,332,3,18,9,0,328,332,3,76,38,
        0,329,332,3,78,39,0,330,332,3,14,7,0,331,320,1,0,0,0,331,321,1,0,
        0,0,331,322,1,0,0,0,331,323,1,0,0,0,331,324,1,0,0,0,331,325,1,0,
        0,0,331,326,1,0,0,0,331,327,1,0,0,0,331,328,1,0,0,0,331,329,1,0,
        0,0,331,330,1,0,0,0,332,5,1,0,0,0,333,334,5,50,0,0,334,335,5,146,
        0,0,335,352,3,276,138,0,336,338,5,146,0,0,337,336,1,0,0,0,337,338,
        1,0,0,0,338,339,1,0,0,0,339,341,5,2,0,0,340,342,5,146,0,0,341,340,
        1,0,0,0,341,342,1,0,0,0,342,343,1,0,0,0,343,345,3,8,4,0,344,346,
        5,146,0,0,345,344,1,0,0,0,345,346,1,0,0,0,346,347,1,0,0,0,347,349,
        5,3,0,0,348,350,5,146,0,0,349,348,1,0,0,0,349,350,1,0,0,0,350,353,
        1,0,0,0,351,353,5,146,0,0,352,337,1,0,0,0,352,351,1,0,0,0,353,354,
        1,0,0,0,354,355,5,51,0,0,355,358,5,146,0,0,356,359,3,26,13,0,357,
        359,3,262,131,0,358,356,1,0,0,0,358,357,1,0,0,0,359,373,1,0,0,0,
        360,362,5,146,0,0,361,360,1,0,0,0,361,362,1,0,0,0,362,363,1,0,0,
        0,363,365,5,2,0,0,364,366,5,146,0,0,365,364,1,0,0,0,365,366,1,0,
        0,0,366,367,1,0,0,0,367,369,3,28,14,0,368,370,5,146,0,0,369,368,
        1,0,0,0,369,370,1,0,0,0,370,371,1,0,0,0,371,372,5,3,0,0,372,374,
        1,0,0,0,373,361,1,0,0,0,373,374,1,0,0,0,374,7,1,0,0,0,375,386,3,
        276,138,0,376,378,5,146,0,0,377,376,1,0,0,0,377,378,1,0,0,0,378,
        379,1,0,0,0,379,381,5,4,0,0,380,382,5,146,0,0,381,380,1,0,0,0,381,
        382,1,0,0,0,382,383,1,0,0,0,383,385,3,276,138,0,384,377,1,0,0,0,
        385,388,1,0,0,0,386,384,1,0,0,0,386,387,1,0,0,0,387,9,1,0,0,0,388,
        386,1,0,0,0,389,390,5,50,0,0,390,391,5,146,0,0,391,392,3,276,138,
        0,392,393,5,146,0,0,393,394,5,51,0,0,394,395,5,146,0,0,395,397,5,
        2,0,0,396,398,5,146,0,0,397,396,1,0,0,0,397,398,1,0,0,0,398,399,
        1,0,0,0,399,410,5,132,0,0,400,402,5,146,0,0,401,400,1,0,0,0,401,
        402,1,0,0,0,402,403,1,0,0,0,403,405,5,4,0,0,404,406,5,146,0,0,405,
        404,1,0,0,0,405,406,1,0,0,0,406,407,1,0,0,0,407,409,5,132,0,0,408,
        401,1,0,0,0,409,412,1,0,0,0,410,408,1,0,0,0,410,411,1,0,0,0,411,
        413,1,0,0,0,412,410,1,0,0,0,413,414,5,3,0,0,414,415,5,146,0,0,415,
        416,5,100,0,0,416,417,5,146,0,0,417,418,5,52,0,0,418,11,1,0,0,0,
        419,420,5,50,0,0,420,421,5,146,0,0,421,423,5,2,0,0,422,424,5,146,
        0,0,423,422,1,0,0,0,423,424,1,0,0,0,424,425,1,0,0,0,425,427,3,84,
        42,0,426,428,5,146,0,0,427,426,1,0,0,0,427,428,1,0,0,0,428,429,1,
        0,0,0,429,430,5,3,0,0,430,431,5,146,0,0,431,432,5,67,0,0,432,433,
        5,146,0,0,433,447,5,132,0,0,434,436,5,146,0,0,435,434,1,0,0,0,435,
        436,1,0,0,0,436,437,1,0,0,0,437,439,5,2,0,0,438,440,5,146,0,0,439,
        438,1,0,0,0,439,440,1,0,0,0,440,441,1,0,0,0,441,443,3,28,14,0,442,
        444,5,146,0,0,443,442,1,0,0,0,443,444,1,0,0,0,444,445,1,0,0,0,445,
        446,5,3,0,0,446,448,1,0,0,0,447,435,1,0,0,0,447,448,1,0,0,0,448,
        13,1,0,0,0,449,450,5,53,0,0,450,451,5,146,0,0,451,452,5,54,0,0,452,
        453,5,146,0,0,453,467,5,132,0,0,454,456,5,146,0,0,455,454,1,0,0,
        0,455,456,1,0,0,0,456,457,1,0,0,0,457,459,5,2,0,0,458,460,5,146,
        0,0,459,458,1,0,0,0,459,460,1,0,0,0,460,461,1,0,0,0,461,463,3,28,
        14,0,462,464,5,146,0,0,463,462,1,0,0,0,463,464,1,0,0,0,464,465,1,
        0,0,0,465,466,5,3,0,0,466,468,1,0,0,0,467,455,1,0,0,0,467,468,1,
        0,0,0,468,15,1,0,0,0,469,470,5,46,0,0,470,471,5,146,0,0,471,473,
        3,278,139,0,472,474,5,146,0,0,473,472,1,0,0,0,473,474,1,0,0,0,474,
        475,1,0,0,0,475,477,5,5,0,0,476,478,5,146,0,0,477,476,1,0,0,0,477,
        478,1,0,0,0,478,479,1,0,0,0,479,480,3,230,115,0,480,17,1,0,0,0,481,
        482,5,47,0,0,482,483,5,146,0,0,483,484,5,90,0,0,484,485,5,146,0,
        0,485,486,5,56,0,0,486,487,5,146,0,0,487,488,3,276,138,0,488,489,
        5,146,0,0,489,490,5,121,0,0,490,491,5,146,0,0,491,492,5,132,0,0,
        492,19,1,0,0,0,493,494,5,88,0,0,494,495,5,146,0,0,495,496,5,48,0,
        0,496,497,5,146,0,0,497,499,3,246,123,0,498,500,5,146,0,0,499,498,
        1,0,0,0,499,500,1,0,0,0,500,501,1,0,0,0,501,503,5,2,0,0,502,504,
        5,146,0,0,503,502,1,0,0,0,503,504,1,0,0,0,504,506,1,0,0,0,505,507,
        3,22,11,0,506,505,1,0,0,0,506,507,1,0,0,0,507,509,1,0,0,0,508,510,
        5,146,0,0,509,508,1,0,0,0,509,510,1,0,0,0,510,512,1,0,0,0,511,513,
        3,24,12,0,512,511,1,0,0,0,512,513,1,0,0,0,513,524,1,0,0,0,514,516,
        5,146,0,0,515,514,1,0,0,0,515,516,1,0,0,0,516,517,1,0,0,0,517,519,
        5,4,0,0,518,520,5,146,0,0,519,518,1,0,0,0,519,520,1,0,0,0,520,521,
        1,0,0,0,521,523,3,24,12,0,522,515,1,0,0,0,523,526,1,0,0,0,524,522,
        1,0,0,0,524,525,1,0,0,0,525,528,1,0,0,0,526,524,1,0,0,0,527,529,
        5,146,0,0,528,527,1,0,0,0,528,529,1,0,0,0,529,530,1,0,0,0,530,531,
        5,3,0,0,531,532,5,146,0,0,532,533,5,98,0,0,533,534,5,146,0,0,534,
        535,3,182,91,0,535,21,1,0,0,0,536,547,3,278,139,0,537,539,5,146,
        0,0,538,537,1,0,0,0,538,539,1,0,0,0,539,540,1,0,0,0,540,542,5,4,
        0,0,541,543,5,146,0,0,542,541,1,0,0,0,542,543,1,0,0,0,543,544,1,
        0,0,0,544,546,3,278,139,0,545,538,1,0,0,0,546,549,1,0,0,0,547,545,
        1,0,0,0,547,548,1,0,0,0,548,23,1,0,0,0,549,547,1,0,0,0,550,552,3,
        278,139,0,551,553,5,146,0,0,552,551,1,0,0,0,552,553,1,0,0,0,553,
        554,1,0,0,0,554,555,5,116,0,0,555,557,5,5,0,0,556,558,5,146,0,0,
        557,556,1,0,0,0,557,558,1,0,0,0,558,559,1,0,0,0,559,560,3,230,115,
        0,560,25,1,0,0,0,561,563,5,6,0,0,562,564,5,146,0,0,563,562,1,0,0,
        0,563,564,1,0,0,0,564,565,1,0,0,0,565,576,5,132,0,0,566,568,5,146,
        0,0,567,566,1,0,0,0,567,568,1,0,0,0,568,569,1,0,0,0,569,571,5,4,
        0,0,570,572,5,146,0,0,571,570,1,0,0,0,571,572,1,0,0,0,572,573,1,
        0,0,0,573,575,5,132,0,0,574,567,1,0,0,0,575,578,1,0,0,0,576,574,
        1,0,0,0,576,577,1,0,0,0,577,579,1,0,0,0,578,576,1,0,0,0,579,595,
        5,7,0,0,580,595,5,132,0,0,581,583,5,49,0,0,582,584,5,146,0,0,583,
        582,1,0,0,0,583,584,1,0,0,0,584,585,1,0,0,0,585,587,5,2,0,0,586,
        588,5,146,0,0,587,586,1,0,0,0,587,588,1,0,0,0,588,589,1,0,0,0,589,
        591,5,132,0,0,590,592,5,146,0,0,591,590,1,0,0,0,591,592,1,0,0,0,
        592,593,1,0,0,0,593,595,5,3,0,0,594,561,1,0,0,0,594,580,1,0,0,0,
        594,581,1,0,0,0,595,27,1,0,0,0,596,607,3,30,15,0,597,599,5,146,0,
        0,598,597,1,0,0,0,598,599,1,0,0,0,599,600,1,0,0,0,600,602,5,4,0,
        0,601,603,5,146,0,0,602,601,1,0,0,0,602,603,1,0,0,0,603,604,1,0,
        0,0,604,606,3,30,15,0,605,598,1,0,0,0,606,609,1,0,0,0,607,605,1,
        0,0,0,607,608,1,0,0,0,608,29,1,0,0,0,609,607,1,0,0,0,610,612,3,278,
        139,0,611,613,5,146,0,0,612,611,1,0,0,0,612,613,1,0,0,0,613,614,
        1,0,0,0,614,616,5,5,0,0,615,617,5,146,0,0,616,615,1,0,0,0,616,617,
        1,0,0,0,617,618,1,0,0,0,618,619,3,230,115,0,619,31,1,0,0,0,620,627,
        3,34,17,0,621,627,3,36,18,0,622,627,3,38,19,0,623,627,3,42,21,0,
        624,627,3,44,22,0,625,627,3,46,23,0,626,620,1,0,0,0,626,621,1,0,
        0,0,626,622,1,0,0,0,626,623,1,0,0,0,626,624,1,0,0,0,626,625,1,0,
        0,0,627,33,1,0,0,0,628,629,5,88,0,0,629,630,5,146,0,0,630,631,5,
        55,0,0,631,632,5,146,0,0,632,633,5,56,0,0,633,634,5,146,0,0,634,
        636,3,276,138,0,635,637,5,146,0,0,636,635,1,0,0,0,636,637,1,0,0,
        0,637,638,1,0,0,0,638,640,5,2,0,0,639,641,5,146,0,0,640,639,1,0,
        0,0,640,641,1,0,0,0,641,642,1,0,0,0,642,644,3,58,29,0,643,645,5,
        146,0,0,644,643,1,0,0,0,644,645,1,0,0,0,645,646,1,0,0,0,646,648,
        5,4,0,0,647,649,5,146,0,0,648,647,1,0,0,0,648,649,1,0,0,0,649,650,
        1,0,0,0,650,651,3,62,31,0,651,653,1,0,0,0,652,654,5,146,0,0,653,
        652,1,0,0,0,653,654,1,0,0,0,654,655,1,0,0,0,655,656,5,3,0,0,656,
        35,1,0,0,0,657,658,5,88,0,0,658,659,5,146,0,0,659,660,5,66,0,0,660,
        661,5,146,0,0,661,662,5,56,0,0,662,663,5,146,0,0,663,665,3,276,138,
        0,664,666,5,146,0,0,665,664,1,0,0,0,665,666,1,0,0,0,666,667,1,0,
        0,0,667,669,5,2,0,0,668,670,5,146,0,0,669,668,1,0,0,0,669,670,1,
        0,0,0,670,671,1,0,0,0,671,673,3,40,20,0,672,674,5,146,0,0,673,672,
        1,0,0,0,673,674,1,0,0,0,674,683,1,0,0,0,675,677,5,4,0,0,676,678,
        5,146,0,0,677,676,1,0,0,0,677,678,1,0,0,0,678,679,1,0,0,0,679,681,
        3,58,29,0,680,682,5,146,0,0,681,680,1,0,0,0,681,682,1,0,0,0,682,
        684,1,0,0,0,683,675,1,0,0,0,683,684,1,0,0,0,684,693,1,0,0,0,685,
        687,5,4,0,0,686,688,5,146,0,0,687,686,1,0,0,0,687,688,1,0,0,0,688,
        689,1,0,0,0,689,691,3,278,139,0,690,692,5,146,0,0,691,690,1,0,0,
        0,691,692,1,0,0,0,692,694,1,0,0,0,693,685,1,0,0,0,693,694,1,0,0,
        0,694,695,1,0,0,0,695,696,5,3,0,0,696,37,1,0,0,0,697,698,5,88,0,
        0,698,699,5,146,0,0,699,700,5,66,0,0,700,701,5,146,0,0,701,702,5,
        56,0,0,702,703,5,146,0,0,703,704,5,57,0,0,704,705,5,146,0,0,705,
        707,3,276,138,0,706,708,5,146,0,0,707,706,1,0,0,0,707,708,1,0,0,
        0,708,709,1,0,0,0,709,711,5,2,0,0,710,712,5,146,0,0,711,710,1,0,
        0,0,711,712,1,0,0,0,712,713,1,0,0,0,713,715,3,40,20,0,714,716,5,
        146,0,0,715,714,1,0,0,0,715,716,1,0,0,0,716,722,1,0,0,0,717,719,
        5,4,0,0,718,720,5,146,0,0,719,718,1,0,0,0,719,720,1,0,0,0,720,721,
        1,0,0,0,721,723,3,40,20,0,722,717,1,0,0,0,723,724,1,0,0,0,724,722,
        1,0,0,0,724,725,1,0,0,0,725,727,1,0,0,0,726,728,5,146,0,0,727,726,
        1,0,0,0,727,728,1,0,0,0,728,737,1,0,0,0,729,731,5,4,0,0,730,732,
        5,146,0,0,731,730,1,0,0,0,731,732,1,0,0,0,732,733,1,0,0,0,733,735,
        3,58,29,0,734,736,5,146,0,0,735,734,1,0,0,0,735,736,1,0,0,0,736,
        738,1,0,0,0,737,729,1,0,0,0,737,738,1,0,0,0,738,747,1,0,0,0,739,
        741,5,4,0,0,740,742,5,146,0,0,741,740,1,0,0,0,741,742,1,0,0,0,742,
        743,1,0,0,0,743,745,3,278,139,0,744,746,5,146,0,0,745,744,1,0,0,
        0,745,746,1,0,0,0,746,748,1,0,0,0,747,739,1,0,0,0,747,748,1,0,0,
        0,748,749,1,0,0,0,749,750,5,3,0,0,750,39,1,0,0,0,751,752,5,51,0,
        0,752,753,5,146,0,0,753,754,3,276,138,0,754,755,5,146,0,0,755,756,
        5,67,0,0,756,757,5,146,0,0,757,758,3,276,138,0,758,41,1,0,0,0,759,
        760,5,88,0,0,760,761,5,146,0,0,761,762,5,58,0,0,762,763,5,146,0,
        0,763,764,3,276,138,0,764,43,1,0,0,0,765,766,5,59,0,0,766,767,5,
        146,0,0,767,768,7,0,0,0,768,769,5,146,0,0,769,770,3,276,138,0,770,
        45,1,0,0,0,771,772,5,60,0,0,772,773,5,146,0,0,773,774,5,56,0,0,774,
        775,5,146,0,0,775,776,3,276,138,0,776,777,5,146,0,0,777,778,3,48,
        24,0,778,47,1,0,0,0,779,784,3,50,25,0,780,784,3,52,26,0,781,784,
        3,54,27,0,782,784,3,56,28,0,783,779,1,0,0,0,783,780,1,0,0,0,783,
        781,1,0,0,0,783,782,1,0,0,0,784,49,1,0,0,0,785,786,5,63,0,0,786,
        787,5,146,0,0,787,788,3,270,135,0,788,789,5,146,0,0,789,794,3,64,
        32,0,790,791,5,146,0,0,791,792,5,61,0,0,792,793,5,146,0,0,793,795,
        3,182,91,0,794,790,1,0,0,0,794,795,1,0,0,0,795,51,1,0,0,0,796,797,
        5,59,0,0,797,798,5,146,0,0,798,799,3,270,135,0,799,53,1,0,0,0,800,
        801,5,62,0,0,801,802,5,146,0,0,802,803,5,67,0,0,803,804,5,146,0,
        0,804,805,3,276,138,0,805,55,1,0,0,0,806,807,5,62,0,0,807,808,5,
        146,0,0,808,809,3,270,135,0,809,810,5,146,0,0,810,811,5,67,0,0,811,
        812,5,146,0,0,812,813,3,270,135,0,813,57,1,0,0,0,814,825,3,60,30,
        0,815,817,5,146,0,0,816,815,1,0,0,0,816,817,1,0,0,0,817,818,1,0,
        0,0,818,820,5,4,0,0,819,821,5,146,0,0,820,819,1,0,0,0,820,821,1,
        0,0,0,821,822,1,0,0,0,822,824,3,60,30,0,823,816,1,0,0,0,824,827,
        1,0,0,0,825,823,1,0,0,0,825,826,1,0,0,0,826,59,1,0,0,0,827,825,1,
        0,0,0,828,829,3,270,135,0,829,830,5,146,0,0,830,831,3,64,32,0,831,
        61,1,0,0,0,832,833,5,64,0,0,833,834,5,146,0,0,834,836,5,65,0,0,835,
        837,5,146,0,0,836,835,1,0,0,0,836,837,1,0,0,0,837,838,1,0,0,0,838,
        840,5,2,0,0,839,841,5,146,0,0,840,839,1,0,0,0,840,841,1,0,0,0,841,
        842,1,0,0,0,842,844,3,270,135,0,843,845,5,146,0,0,844,843,1,0,0,
        0,844,845,1,0,0,0,845,846,1,0,0,0,846,847,5,3,0,0,847,63,1,0,0,0,
        848,849,6,32,-1,0,849,901,3,278,139,0,850,852,5,81,0,0,851,853,5,
        146,0,0,852,851,1,0,0,0,852,853,1,0,0,0,853,854,1,0,0,0,854,856,
        5,2,0,0,855,857,5,146,0,0,856,855,1,0,0,0,856,857,1,0,0,0,857,858,
        1,0,0,0,858,860,3,58,29,0,859,861,5,146,0,0,860,859,1,0,0,0,860,
        861,1,0,0,0,861,862,1,0,0,0,862,863,5,3,0,0,863,901,1,0,0,0,864,
        866,3,278,139,0,865,867,5,146,0,0,866,865,1,0,0,0,866,867,1,0,0,
        0,867,868,1,0,0,0,868,870,5,2,0,0,869,871,5,146,0,0,870,869,1,0,
        0,0,870,871,1,0,0,0,871,872,1,0,0,0,872,874,3,58,29,0,873,875,5,
        146,0,0,874,873,1,0,0,0,874,875,1,0,0,0,875,876,1,0,0,0,876,877,
        5,3,0,0,877,901,1,0,0,0,878,880,3,278,139,0,879,881,5,146,0,0,880,
        879,1,0,0,0,880,881,1,0,0,0,881,882,1,0,0,0,882,884,5,2,0,0,883,
        885,5,146,0,0,884,883,1,0,0,0,884,885,1,0,0,0,885,886,1,0,0,0,886,
        888,3,64,32,0,887,889,5,146,0,0,888,887,1,0,0,0,888,889,1,0,0,0,
        889,890,1,0,0,0,890,892,5,4,0,0,891,893,5,146,0,0,892,891,1,0,0,
        0,892,893,1,0,0,0,893,894,1,0,0,0,894,896,3,64,32,0,895,897,5,146,
        0,0,896,895,1,0,0,0,896,897,1,0,0,0,897,898,1,0,0,0,898,899,5,3,
        0,0,899,901,1,0,0,0,900,848,1,0,0,0,900,850,1,0,0,0,900,864,1,0,
        0,0,900,878,1,0,0,0,901,906,1,0,0,0,902,903,10,4,0,0,903,905,3,66,
        33,0,904,902,1,0,0,0,905,908,1,0,0,0,906,904,1,0,0,0,906,907,1,0,
        0,0,907,65,1,0,0,0,908,906,1,0,0,0,909,913,3,68,34,0,910,912,3,68,
        34,0,911,910,1,0,0,0,912,915,1,0,0,0,913,911,1,0,0,0,913,914,1,0,
        0,0,914,67,1,0,0,0,915,913,1,0,0,0,916,918,5,6,0,0,917,919,3,272,
        136,0,918,917,1,0,0,0,918,919,1,0,0,0,919,920,1,0,0,0,920,921,5,
        7,0,0,921,69,1,0,0,0,922,925,3,72,36,0,923,925,3,74,37,0,924,922,
        1,0,0,0,924,923,1,0,0,0,925,71,1,0,0,0,926,927,5,68,0,0,927,73,1,
        0,0,0,928,929,5,69,0,0,929,75,1,0,0,0,930,931,5,70,0,0,931,932,5,
        146,0,0,932,945,5,71,0,0,933,934,5,70,0,0,934,935,5,146,0,0,935,
        936,5,71,0,0,936,937,5,146,0,0,937,938,5,72,0,0,938,939,5,146,0,
        0,939,945,5,73,0,0,940,945,5,75,0,0,941,945,5,76,0,0,942,945,5,77,
        0,0,943,945,5,78,0,0,944,930,1,0,0,0,944,933,1,0,0,0,944,940,1,0,
        0,0,944,941,1,0,0,0,944,942,1,0,0,0,944,943,1,0,0,0,945,77,1,0,0,
        0,946,949,3,80,40,0,947,949,3,82,41,0,948,946,1,0,0,0,948,947,1,
        0,0,0,949,79,1,0,0,0,950,951,5,83,0,0,951,952,5,146,0,0,952,953,
        5,80,0,0,953,956,5,146,0,0,954,957,5,132,0,0,955,957,3,262,131,0,
        956,954,1,0,0,0,956,955,1,0,0,0,957,81,1,0,0,0,958,959,5,79,0,0,
        959,960,5,146,0,0,960,961,3,262,131,0,961,83,1,0,0,0,962,963,3,86,
        43,0,963,85,1,0,0,0,964,971,3,90,45,0,965,967,5,146,0,0,966,965,
        1,0,0,0,966,967,1,0,0,0,967,968,1,0,0,0,968,970,3,88,44,0,969,966,
        1,0,0,0,970,973,1,0,0,0,971,969,1,0,0,0,971,972,1,0,0,0,972,986,
        1,0,0,0,973,971,1,0,0,0,974,976,3,124,62,0,975,977,5,146,0,0,976,
        975,1,0,0,0,976,977,1,0,0,0,977,979,1,0,0,0,978,974,1,0,0,0,979,
        980,1,0,0,0,980,978,1,0,0,0,980,981,1,0,0,0,981,982,1,0,0,0,982,
        983,3,90,45,0,983,984,6,43,-1,0,984,986,1,0,0,0,985,964,1,0,0,0,
        985,978,1,0,0,0,986,87,1,0,0,0,987,988,5,81,0,0,988,989,5,146,0,
        0,989,991,5,82,0,0,990,992,5,146,0,0,991,990,1,0,0,0,991,992,1,0,
        0,0,992,993,1,0,0,0,993,1000,3,90,45,0,994,996,5,81,0,0,995,997,
        5,146,0,0,996,995,1,0,0,0,996,997,1,0,0,0,997,998,1,0,0,0,998,1000,
        3,90,45,0,999,987,1,0,0,0,999,994,1,0,0,0,1000,89,1,0,0,0,1001,1004,
        3,92,46,0,1002,1004,3,94,47,0,1003,1001,1,0,0,0,1003,1002,1,0,0,
        0,1004,91,1,0,0,0,1005,1007,3,100,50,0,1006,1008,5,146,0,0,1007,
        1006,1,0,0,0,1007,1008,1,0,0,0,1008,1010,1,0,0,0,1009,1005,1,0,0,
        0,1010,1013,1,0,0,0,1011,1009,1,0,0,0,1011,1012,1,0,0,0,1012,1014,
        1,0,0,0,1013,1011,1,0,0,0,1014,1051,3,124,62,0,1015,1017,3,100,50,
        0,1016,1018,5,146,0,0,1017,1016,1,0,0,0,1017,1018,1,0,0,0,1018,1020,
        1,0,0,0,1019,1015,1,0,0,0,1020,1023,1,0,0,0,1021,1019,1,0,0,0,1021,
        1022,1,0,0,0,1022,1024,1,0,0,0,1023,1021,1,0,0,0,1024,1031,3,98,
        49,0,1025,1027,5,146,0,0,1026,1025,1,0,0,0,1026,1027,1,0,0,0,1027,
        1028,1,0,0,0,1028,1030,3,98,49,0,1029,1026,1,0,0,0,1030,1033,1,0,
        0,0,1031,1029,1,0,0,0,1031,1032,1,0,0,0,1032,1038,1,0,0,0,1033,1031,
        1,0,0,0,1034,1036,5,146,0,0,1035,1034,1,0,0,0,1035,1036,1,0,0,0,
        1036,1037,1,0,0,0,1037,1039,3,124,62,0,1038,1035,1,0,0,0,1038,1039,
        1,0,0,0,1039,1051,1,0,0,0,1040,1042,3,100,50,0,1041,1043,5,146,0,
        0,1042,1041,1,0,0,0,1042,1043,1,0,0,0,1043,1045,1,0,0,0,1044,1040,
        1,0,0,0,1045,1046,1,0,0,0,1046,1044,1,0,0,0,1046,1047,1,0,0,0,1047,
        1048,1,0,0,0,1048,1049,6,46,-1,0,1049,1051,1,0,0,0,1050,1011,1,0,
        0,0,1050,1021,1,0,0,0,1050,1044,1,0,0,0,1051,93,1,0,0,0,1052,1054,
        3,96,48,0,1053,1055,5,146,0,0,1054,1053,1,0,0,0,1054,1055,1,0,0,
        0,1055,1057,1,0,0,0,1056,1052,1,0,0,0,1057,1058,1,0,0,0,1058,1056,
        1,0,0,0,1058,1059,1,0,0,0,1059,1060,1,0,0,0,1060,1061,3,92,46,0,
        1061,95,1,0,0,0,1062,1064,3,100,50,0,1063,1065,5,146,0,0,1064,1063,
        1,0,0,0,1064,1065,1,0,0,0,1065,1067,1,0,0,0,1066,1062,1,0,0,0,1067,
        1070,1,0,0,0,1068,1066,1,0,0,0,1068,1069,1,0,0,0,1069,1077,1,0,0,
        0,1070,1068,1,0,0,0,1071,1073,3,98,49,0,1072,1074,5,146,0,0,1073,
        1072,1,0,0,0,1073,1074,1,0,0,0,1074,1076,1,0,0,0,1075,1071,1,0,0,
        0,1076,1079,1,0,0,0,1077,1075,1,0,0,0,1077,1078,1,0,0,0,1078,1080,
        1,0,0,0,1079,1077,1,0,0,0,1080,1081,3,122,61,0,1081,97,1,0,0,0,1082,
        1087,3,110,55,0,1083,1087,3,112,56,0,1084,1087,3,116,58,0,1085,1087,
        3,120,60,0,1086,1082,1,0,0,0,1086,1083,1,0,0,0,1086,1084,1,0,0,0,
        1086,1085,1,0,0,0,1087,99,1,0,0,0,1088,1093,3,106,53,0,1089,1093,
        3,108,54,0,1090,1093,3,104,52,0,1091,1093,3,102,51,0,1092,1088,1,
        0,0,0,1092,1089,1,0,0,0,1092,1090,1,0,0,0,1092,1091,1,0,0,0,1093,
        101,1,0,0,0,1094,1112,5,83,0,0,1095,1096,5,146,0,0,1096,1097,5,94,
        0,0,1097,1098,5,146,0,0,1098,1100,5,84,0,0,1099,1101,5,146,0,0,1100,
        1099,1,0,0,0,1100,1101,1,0,0,0,1101,1102,1,0,0,0,1102,1104,5,2,0,
        0,1103,1105,5,146,0,0,1104,1103,1,0,0,0,1104,1105,1,0,0,0,1105,1106,
        1,0,0,0,1106,1108,3,58,29,0,1107,1109,5,146,0,0,1108,1107,1,0,0,
        0,1108,1109,1,0,0,0,1109,1110,1,0,0,0,1110,1111,5,3,0,0,1111,1113,
        1,0,0,0,1112,1095,1,0,0,0,1112,1113,1,0,0,0,1113,1114,1,0,0,0,1114,
        1115,5,146,0,0,1115,1116,5,51,0,0,1116,1134,5,146,0,0,1117,1131,
        3,26,13,0,1118,1120,5,146,0,0,1119,1118,1,0,0,0,1119,1120,1,0,0,
        0,1120,1121,1,0,0,0,1121,1123,5,2,0,0,1122,1124,5,146,0,0,1123,1122,
        1,0,0,0,1123,1124,1,0,0,0,1124,1125,1,0,0,0,1125,1127,3,28,14,0,
        1126,1128,5,146,0,0,1127,1126,1,0,0,0,1127,1128,1,0,0,0,1128,1129,
        1,0,0,0,1129,1130,5,3,0,0,1130,1132,1,0,0,0,1131,1119,1,0,0,0,1131,
        1132,1,0,0,0,1132,1135,1,0,0,0,1133,1135,3,262,131,0,1134,1117,1,
        0,0,0,1134,1133,1,0,0,0,1135,1140,1,0,0,0,1136,1138,5,146,0,0,1137,
        1136,1,0,0,0,1137,1138,1,0,0,0,1138,1139,1,0,0,0,1139,1141,3,140,
        70,0,1140,1137,1,0,0,0,1140,1141,1,0,0,0,1141,103,1,0,0,0,1142,1143,
        5,46,0,0,1143,1144,5,146,0,0,1144,1149,3,244,122,0,1145,1147,5,146,
        0,0,1146,1145,1,0,0,0,1146,1147,1,0,0,0,1147,1148,1,0,0,0,1148,1150,
        3,140,70,0,1149,1146,1,0,0,0,1149,1150,1,0,0,0,1150,105,1,0,0,0,
        1151,1152,5,85,0,0,1152,1154,5,146,0,0,1153,1151,1,0,0,0,1153,1154,
        1,0,0,0,1154,1155,1,0,0,0,1155,1157,5,86,0,0,1156,1158,5,146,0,0,
        1157,1156,1,0,0,0,1157,1158,1,0,0,0,1158,1159,1,0,0,0,1159,1164,
        3,142,71,0,1160,1162,5,146,0,0,1161,1160,1,0,0,0,1161,1162,1,0,0,
        0,1162,1163,1,0,0,0,1163,1165,3,140,70,0,1164,1161,1,0,0,0,1164,
        1165,1,0,0,0,1165,107,1,0,0,0,1166,1168,5,87,0,0,1167,1169,5,146,
        0,0,1168,1167,1,0,0,0,1168,1169,1,0,0,0,1169,1170,1,0,0,0,1170,1171,
        3,182,91,0,1171,1172,5,146,0,0,1172,1173,5,98,0,0,1173,1174,5,146,
        0,0,1174,1175,3,262,131,0,1175,109,1,0,0,0,1176,1178,5,88,0,0,1177,
        1179,5,146,0,0,1178,1177,1,0,0,0,1178,1179,1,0,0,0,1179,1180,1,0,
        0,0,1180,1181,3,142,71,0,1181,111,1,0,0,0,1182,1184,5,89,0,0,1183,
        1185,5,146,0,0,1184,1183,1,0,0,0,1184,1185,1,0,0,0,1185,1186,1,0,
        0,0,1186,1191,3,142,71,0,1187,1188,5,146,0,0,1188,1190,3,114,57,
        0,1189,1187,1,0,0,0,1190,1193,1,0,0,0,1191,1189,1,0,0,0,1191,1192,
        1,0,0,0,1192,113,1,0,0,0,1193,1191,1,0,0,0,1194,1195,5,90,0,0,1195,
        1196,5,146,0,0,1196,1197,5,86,0,0,1197,1198,5,146,0,0,1198,1205,
        3,116,58,0,1199,1200,5,90,0,0,1200,1201,5,146,0,0,1201,1202,5,88,
        0,0,1202,1203,5,146,0,0,1203,1205,3,116,58,0,1204,1194,1,0,0,0,1204,
        1199,1,0,0,0,1205,115,1,0,0,0,1206,1208,5,91,0,0,1207,1209,5,146,
        0,0,1208,1207,1,0,0,0,1208,1209,1,0,0,0,1209,1210,1,0,0,0,1210,1221,
        3,118,59,0,1211,1213,5,146,0,0,1212,1211,1,0,0,0,1212,1213,1,0,0,
        0,1213,1214,1,0,0,0,1214,1216,5,4,0,0,1215,1217,5,146,0,0,1216,1215,
        1,0,0,0,1216,1217,1,0,0,0,1217,1218,1,0,0,0,1218,1220,3,118,59,0,
        1219,1212,1,0,0,0,1220,1223,1,0,0,0,1221,1219,1,0,0,0,1221,1222,
        1,0,0,0,1222,117,1,0,0,0,1223,1221,1,0,0,0,1224,1226,3,268,134,0,
        1225,1227,5,146,0,0,1226,1225,1,0,0,0,1226,1227,1,0,0,0,1227,1228,
        1,0,0,0,1228,1230,5,5,0,0,1229,1231,5,146,0,0,1230,1229,1,0,0,0,
        1230,1231,1,0,0,0,1231,1232,1,0,0,0,1232,1233,3,182,91,0,1233,119,
        1,0,0,0,1234,1235,5,92,0,0,1235,1237,5,146,0,0,1236,1234,1,0,0,0,
        1236,1237,1,0,0,0,1237,1238,1,0,0,0,1238,1240,5,93,0,0,1239,1241,
        5,146,0,0,1240,1239,1,0,0,0,1240,1241,1,0,0,0,1241,1242,1,0,0,0,
        1242,1253,3,182,91,0,1243,1245,5,146,0,0,1244,1243,1,0,0,0,1244,
        1245,1,0,0,0,1245,1246,1,0,0,0,1246,1248,5,4,0,0,1247,1249,5,146,
        0,0,1248,1247,1,0,0,0,1248,1249,1,0,0,0,1249,1250,1,0,0,0,1250,1252,
        3,182,91,0,1251,1244,1,0,0,0,1252,1255,1,0,0,0,1253,1251,1,0,0,0,
        1253,1254,1,0,0,0,1254,121,1,0,0,0,1255,1253,1,0,0,0,1256,1257,5,
        94,0,0,1257,1262,3,126,63,0,1258,1260,5,146,0,0,1259,1258,1,0,0,
        0,1259,1260,1,0,0,0,1260,1261,1,0,0,0,1261,1263,3,140,70,0,1262,
        1259,1,0,0,0,1262,1263,1,0,0,0,1263,123,1,0,0,0,1264,1265,5,95,0,
        0,1265,1266,3,126,63,0,1266,125,1,0,0,0,1267,1269,5,146,0,0,1268,
        1267,1,0,0,0,1268,1269,1,0,0,0,1269,1270,1,0,0,0,1270,1272,5,96,
        0,0,1271,1268,1,0,0,0,1271,1272,1,0,0,0,1272,1273,1,0,0,0,1273,1274,
        5,146,0,0,1274,1277,3,128,64,0,1275,1276,5,146,0,0,1276,1278,3,132,
        66,0,1277,1275,1,0,0,0,1277,1278,1,0,0,0,1278,1281,1,0,0,0,1279,
        1280,5,146,0,0,1280,1282,3,134,67,0,1281,1279,1,0,0,0,1281,1282,
        1,0,0,0,1282,1285,1,0,0,0,1283,1284,5,146,0,0,1284,1286,3,136,68,
        0,1285,1283,1,0,0,0,1285,1286,1,0,0,0,1286,127,1,0,0,0,1287,1298,
        5,97,0,0,1288,1290,5,146,0,0,1289,1288,1,0,0,0,1289,1290,1,0,0,0,
        1290,1291,1,0,0,0,1291,1293,5,4,0,0,1292,1294,5,146,0,0,1293,1292,
        1,0,0,0,1293,1294,1,0,0,0,1294,1295,1,0,0,0,1295,1297,3,130,65,0,
        1296,1289,1,0,0,0,1297,1300,1,0,0,0,1298,1296,1,0,0,0,1298,1299,
        1,0,0,0,1299,1316,1,0,0,0,1300,1298,1,0,0,0,1301,1312,3,130,65,0,
        1302,1304,5,146,0,0,1303,1302,1,0,0,0,1303,1304,1,0,0,0,1304,1305,
        1,0,0,0,1305,1307,5,4,0,0,1306,1308,5,146,0,0,1307,1306,1,0,0,0,
        1307,1308,1,0,0,0,1308,1309,1,0,0,0,1309,1311,3,130,65,0,1310,1303,
        1,0,0,0,1311,1314,1,0,0,0,1312,1310,1,0,0,0,1312,1313,1,0,0,0,1313,
        1316,1,0,0,0,1314,1312,1,0,0,0,1315,1287,1,0,0,0,1315,1301,1,0,0,
        0,1316,129,1,0,0,0,1317,1318,3,182,91,0,1318,1319,5,146,0,0,1319,
        1320,5,98,0,0,1320,1321,5,146,0,0,1321,1322,3,262,131,0,1322,1325,
        1,0,0,0,1323,1325,3,182,91,0,1324,1317,1,0,0,0,1324,1323,1,0,0,0,
        1325,131,1,0,0,0,1326,1327,5,99,0,0,1327,1328,5,146,0,0,1328,1329,
        5,100,0,0,1329,1330,5,146,0,0,1330,1338,3,138,69,0,1331,1333,5,4,
        0,0,1332,1334,5,146,0,0,1333,1332,1,0,0,0,1333,1334,1,0,0,0,1334,
        1335,1,0,0,0,1335,1337,3,138,69,0,1336,1331,1,0,0,0,1337,1340,1,
        0,0,0,1338,1336,1,0,0,0,1338,1339,1,0,0,0,1339,133,1,0,0,0,1340,
        1338,1,0,0,0,1341,1342,5,101,0,0,1342,1343,5,146,0,0,1343,1344,3,
        182,91,0,1344,135,1,0,0,0,1345,1346,5,102,0,0,1346,1347,5,146,0,
        0,1347,1348,3,182,91,0,1348,137,1,0,0,0,1349,1354,3,182,91,0,1350,
        1352,5,146,0,0,1351,1350,1,0,0,0,1351,1352,1,0,0,0,1352,1353,1,0,
        0,0,1353,1355,7,1,0,0,1354,1351,1,0,0,0,1354,1355,1,0,0,0,1355,139,
        1,0,0,0,1356,1357,5,107,0,0,1357,1358,5,146,0,0,1358,1359,3,182,
        91,0,1359,141,1,0,0,0,1360,1371,3,144,72,0,1361,1363,5,146,0,0,1362,
        1361,1,0,0,0,1362,1363,1,0,0,0,1363,1364,1,0,0,0,1364,1366,5,4,0,
        0,1365,1367,5,146,0,0,1366,1365,1,0,0,0,1366,1367,1,0,0,0,1367,1368,
        1,0,0,0,1368,1370,3,144,72,0,1369,1362,1,0,0,0,1370,1373,1,0,0,0,
        1371,1369,1,0,0,0,1371,1372,1,0,0,0,1372,143,1,0,0,0,1373,1371,1,
        0,0,0,1374,1376,3,262,131,0,1375,1377,5,146,0,0,1376,1375,1,0,0,
        0,1376,1377,1,0,0,0,1377,1378,1,0,0,0,1378,1380,5,5,0,0,1379,1381,
        5,146,0,0,1380,1379,1,0,0,0,1380,1381,1,0,0,0,1381,1382,1,0,0,0,
        1382,1383,3,146,73,0,1383,1386,1,0,0,0,1384,1386,3,146,73,0,1385,
        1374,1,0,0,0,1385,1384,1,0,0,0,1386,145,1,0,0,0,1387,1388,3,148,
        74,0,1388,147,1,0,0,0,1389,1396,3,150,75,0,1390,1392,5,146,0,0,1391,
        1390,1,0,0,0,1391,1392,1,0,0,0,1392,1393,1,0,0,0,1393,1395,3,152,
        76,0,1394,1391,1,0,0,0,1395,1398,1,0,0,0,1396,1394,1,0,0,0,1396,
        1397,1,0,0,0,1397,1404,1,0,0,0,1398,1396,1,0,0,0,1399,1400,5,2,0,
        0,1400,1401,3,148,74,0,1401,1402,5,3,0,0,1402,1404,1,0,0,0,1403,
        1389,1,0,0,0,1403,1399,1,0,0,0,1404,149,1,0,0,0,1405,1407,5,2,0,
        0,1406,1408,5,146,0,0,1407,1406,1,0,0,0,1407,1408,1,0,0,0,1408,1413,
        1,0,0,0,1409,1411,3,262,131,0,1410,1412,5,146,0,0,1411,1410,1,0,
        0,0,1411,1412,1,0,0,0,1412,1414,1,0,0,0,1413,1409,1,0,0,0,1413,1414,
        1,0,0,0,1414,1419,1,0,0,0,1415,1417,3,162,81,0,1416,1418,5,146,0,
        0,1417,1416,1,0,0,0,1417,1418,1,0,0,0,1418,1420,1,0,0,0,1419,1415,
        1,0,0,0,1419,1420,1,0,0,0,1420,1425,1,0,0,0,1421,1423,3,158,79,0,
        1422,1424,5,146,0,0,1423,1422,1,0,0,0,1423,1424,1,0,0,0,1424,1426,
        1,0,0,0,1425,1421,1,0,0,0,1425,1426,1,0,0,0,1426,1427,1,0,0,0,1427,
        1428,5,3,0,0,1428,151,1,0,0,0,1429,1431,3,154,77,0,1430,1432,5,146,
        0,0,1431,1430,1,0,0,0,1431,1432,1,0,0,0,1432,1433,1,0,0,0,1433,1434,
        3,150,75,0,1434,153,1,0,0,0,1435,1437,3,282,141,0,1436,1438,5,146,
        0,0,1437,1436,1,0,0,0,1437,1438,1,0,0,0,1438,1439,1,0,0,0,1439,1441,
        3,286,143,0,1440,1442,5,146,0,0,1441,1440,1,0,0,0,1441,1442,1,0,
        0,0,1442,1444,1,0,0,0,1443,1445,3,156,78,0,1444,1443,1,0,0,0,1444,
        1445,1,0,0,0,1445,1447,1,0,0,0,1446,1448,5,146,0,0,1447,1446,1,0,
        0,0,1447,1448,1,0,0,0,1448,1449,1,0,0,0,1449,1450,3,286,143,0,1450,
        1480,1,0,0,0,1451,1453,3,286,143,0,1452,1454,5,146,0,0,1453,1452,
        1,0,0,0,1453,1454,1,0,0,0,1454,1456,1,0,0,0,1455,1457,3,156,78,0,
        1456,1455,1,0,0,0,1456,1457,1,0,0,0,1457,1459,1,0,0,0,1458,1460,
        5,146,0,0,1459,1458,1,0,0,0,1459,1460,1,0,0,0,1460,1461,1,0,0,0,
        1461,1463,3,286,143,0,1462,1464,5,146,0,0,1463,1462,1,0,0,0,1463,
        1464,1,0,0,0,1464,1465,1,0,0,0,1465,1466,3,284,142,0,1466,1480,1,
        0,0,0,1467,1469,3,286,143,0,1468,1470,5,146,0,0,1469,1468,1,0,0,
        0,1469,1470,1,0,0,0,1470,1472,1,0,0,0,1471,1473,3,156,78,0,1472,
        1471,1,0,0,0,1472,1473,1,0,0,0,1473,1475,1,0,0,0,1474,1476,5,146,
        0,0,1475,1474,1,0,0,0,1475,1476,1,0,0,0,1476,1477,1,0,0,0,1477,1478,
        3,286,143,0,1478,1480,1,0,0,0,1479,1435,1,0,0,0,1479,1451,1,0,0,
        0,1479,1467,1,0,0,0,1480,155,1,0,0,0,1481,1483,5,6,0,0,1482,1484,
        5,146,0,0,1483,1482,1,0,0,0,1483,1484,1,0,0,0,1484,1489,1,0,0,0,
        1485,1487,3,262,131,0,1486,1488,5,146,0,0,1487,1486,1,0,0,0,1487,
        1488,1,0,0,0,1488,1490,1,0,0,0,1489,1485,1,0,0,0,1489,1490,1,0,0,
        0,1490,1495,1,0,0,0,1491,1493,3,160,80,0,1492,1494,5,146,0,0,1493,
        1492,1,0,0,0,1493,1494,1,0,0,0,1494,1496,1,0,0,0,1495,1491,1,0,0,
        0,1495,1496,1,0,0,0,1496,1501,1,0,0,0,1497,1499,3,166,83,0,1498,
        1500,5,146,0,0,1499,1498,1,0,0,0,1499,1500,1,0,0,0,1500,1502,1,0,
        0,0,1501,1497,1,0,0,0,1501,1502,1,0,0,0,1502,1507,1,0,0,0,1503,1505,
        3,158,79,0,1504,1506,5,146,0,0,1505,1504,1,0,0,0,1505,1506,1,0,0,
        0,1506,1508,1,0,0,0,1507,1503,1,0,0,0,1507,1508,1,0,0,0,1508,1509,
        1,0,0,0,1509,1510,5,7,0,0,1510,157,1,0,0,0,1511,1513,5,8,0,0,1512,
        1514,5,146,0,0,1513,1512,1,0,0,0,1513,1514,1,0,0,0,1514,1548,1,0,
        0,0,1515,1517,3,270,135,0,1516,1518,5,146,0,0,1517,1516,1,0,0,0,
        1517,1518,1,0,0,0,1518,1519,1,0,0,0,1519,1521,5,116,0,0,1520,1522,
        5,146,0,0,1521,1520,1,0,0,0,1521,1522,1,0,0,0,1522,1523,1,0,0,0,
        1523,1525,3,182,91,0,1524,1526,5,146,0,0,1525,1524,1,0,0,0,1525,
        1526,1,0,0,0,1526,1545,1,0,0,0,1527,1529,5,4,0,0,1528,1530,5,146,
        0,0,1529,1528,1,0,0,0,1529,1530,1,0,0,0,1530,1531,1,0,0,0,1531,1533,
        3,270,135,0,1532,1534,5,146,0,0,1533,1532,1,0,0,0,1533,1534,1,0,
        0,0,1534,1535,1,0,0,0,1535,1537,5,116,0,0,1536,1538,5,146,0,0,1537,
        1536,1,0,0,0,1537,1538,1,0,0,0,1538,1539,1,0,0,0,1539,1541,3,182,
        91,0,1540,1542,5,146,0,0,1541,1540,1,0,0,0,1541,1542,1,0,0,0,1542,
        1544,1,0,0,0,1543,1527,1,0,0,0,1544,1547,1,0,0,0,1545,1543,1,0,0,
        0,1545,1546,1,0,0,0,1546,1549,1,0,0,0,1547,1545,1,0,0,0,1548,1515,
        1,0,0,0,1548,1549,1,0,0,0,1549,1550,1,0,0,0,1550,1551,5,9,0,0,1551,
        159,1,0,0,0,1552,1554,5,116,0,0,1553,1555,5,146,0,0,1554,1553,1,
        0,0,0,1554,1555,1,0,0,0,1555,1556,1,0,0,0,1556,1570,3,180,90,0,1557,
        1559,5,146,0,0,1558,1557,1,0,0,0,1558,1559,1,0,0,0,1559,1560,1,0,
        0,0,1560,1562,5,10,0,0,1561,1563,5,116,0,0,1562,1561,1,0,0,0,1562,
        1563,1,0,0,0,1563,1565,1,0,0,0,1564,1566,5,146,0,0,1565,1564,1,0,
        0,0,1565,1566,1,0,0,0,1566,1567,1,0,0,0,1567,1569,3,180,90,0,1568,
        1558,1,0,0,0,1569,1572,1,0,0,0,1570,1568,1,0,0,0,1570,1571,1,0,0,
        0,1571,161,1,0,0,0,1572,1570,1,0,0,0,1573,1580,3,164,82,0,1574,1576,
        5,146,0,0,1575,1574,1,0,0,0,1575,1576,1,0,0,0,1576,1577,1,0,0,0,
        1577,1579,3,164,82,0,1578,1575,1,0,0,0,1579,1582,1,0,0,0,1580,1578,
        1,0,0,0,1580,1581,1,0,0,0,1581,163,1,0,0,0,1582,1580,1,0,0,0,1583,
        1585,5,116,0,0,1584,1586,5,146,0,0,1585,1584,1,0,0,0,1585,1586,1,
        0,0,0,1586,1587,1,0,0,0,1587,1588,3,178,89,0,1588,165,1,0,0,0,1589,
        1591,5,97,0,0,1590,1592,5,146,0,0,1591,1590,1,0,0,0,1591,1592,1,
        0,0,0,1592,1597,1,0,0,0,1593,1598,5,108,0,0,1594,1595,5,82,0,0,1595,
        1596,5,146,0,0,1596,1598,5,108,0,0,1597,1593,1,0,0,0,1597,1594,1,
        0,0,0,1597,1598,1,0,0,0,1598,1600,1,0,0,0,1599,1601,5,146,0,0,1600,
        1599,1,0,0,0,1600,1601,1,0,0,0,1601,1616,1,0,0,0,1602,1604,3,174,
        87,0,1603,1602,1,0,0,0,1603,1604,1,0,0,0,1604,1606,1,0,0,0,1605,
        1607,5,146,0,0,1606,1605,1,0,0,0,1606,1607,1,0,0,0,1607,1608,1,0,
        0,0,1608,1610,5,11,0,0,1609,1611,5,146,0,0,1610,1609,1,0,0,0,1610,
        1611,1,0,0,0,1611,1613,1,0,0,0,1612,1614,3,176,88,0,1613,1612,1,
        0,0,0,1613,1614,1,0,0,0,1614,1617,1,0,0,0,1615,1617,3,272,136,0,
        1616,1603,1,0,0,0,1616,1615,1,0,0,0,1616,1617,1,0,0,0,1617,1622,
        1,0,0,0,1618,1620,5,146,0,0,1619,1618,1,0,0,0,1619,1620,1,0,0,0,
        1620,1621,1,0,0,0,1621,1623,3,168,84,0,1622,1619,1,0,0,0,1622,1623,
        1,0,0,0,1623,167,1,0,0,0,1624,1626,5,2,0,0,1625,1627,5,146,0,0,1626,
        1625,1,0,0,0,1626,1627,1,0,0,0,1627,1628,1,0,0,0,1628,1630,3,262,
        131,0,1629,1631,5,146,0,0,1630,1629,1,0,0,0,1630,1631,1,0,0,0,1631,
        1632,1,0,0,0,1632,1634,5,4,0,0,1633,1635,5,146,0,0,1634,1633,1,0,
        0,0,1634,1635,1,0,0,0,1635,1636,1,0,0,0,1636,1645,3,262,131,0,1637,
        1639,5,146,0,0,1638,1637,1,0,0,0,1638,1639,1,0,0,0,1639,1640,1,0,
        0,0,1640,1642,5,10,0,0,1641,1643,5,146,0,0,1642,1641,1,0,0,0,1642,
        1643,1,0,0,0,1643,1644,1,0,0,0,1644,1646,3,140,70,0,1645,1638,1,
        0,0,0,1645,1646,1,0,0,0,1646,1666,1,0,0,0,1647,1649,5,146,0,0,1648,
        1647,1,0,0,0,1648,1649,1,0,0,0,1649,1650,1,0,0,0,1650,1652,5,10,
        0,0,1651,1653,5,146,0,0,1652,1651,1,0,0,0,1652,1653,1,0,0,0,1653,
        1654,1,0,0,0,1654,1656,3,172,86,0,1655,1657,5,146,0,0,1656,1655,
        1,0,0,0,1656,1657,1,0,0,0,1657,1658,1,0,0,0,1658,1660,5,4,0,0,1659,
        1661,5,146,0,0,1660,1659,1,0,0,0,1660,1661,1,0,0,0,1661,1662,1,0,
        0,0,1662,1664,3,170,85,0,1663,1665,5,146,0,0,1664,1663,1,0,0,0,1664,
        1665,1,0,0,0,1665,1667,1,0,0,0,1666,1648,1,0,0,0,1666,1667,1,0,0,
        0,1667,1668,1,0,0,0,1668,1669,5,3,0,0,1669,169,1,0,0,0,1670,1672,
        5,8,0,0,1671,1673,5,146,0,0,1672,1671,1,0,0,0,1672,1673,1,0,0,0,
        1673,1675,1,0,0,0,1674,1676,3,128,64,0,1675,1674,1,0,0,0,1675,1676,
        1,0,0,0,1676,1678,1,0,0,0,1677,1679,5,146,0,0,1678,1677,1,0,0,0,
        1678,1679,1,0,0,0,1679,1680,1,0,0,0,1680,1681,5,9,0,0,1681,171,1,
        0,0,0,1682,1684,5,8,0,0,1683,1685,5,146,0,0,1684,1683,1,0,0,0,1684,
        1685,1,0,0,0,1685,1687,1,0,0,0,1686,1688,3,128,64,0,1687,1686,1,
        0,0,0,1687,1688,1,0,0,0,1688,1690,1,0,0,0,1689,1691,5,146,0,0,1690,
        1689,1,0,0,0,1690,1691,1,0,0,0,1691,1692,1,0,0,0,1692,1693,5,9,0,
        0,1693,173,1,0,0,0,1694,1695,5,134,0,0,1695,175,1,0,0,0,1696,1697,
        5,134,0,0,1697,177,1,0,0,0,1698,1699,3,276,138,0,1699,179,1,0,0,
        0,1700,1701,3,276,138,0,1701,181,1,0,0,0,1702,1703,3,184,92,0,1703,
        183,1,0,0,0,1704,1711,3,186,93,0,1705,1706,5,146,0,0,1706,1707,5,
        109,0,0,1707,1708,5,146,0,0,1708,1710,3,186,93,0,1709,1705,1,0,0,
        0,1710,1713,1,0,0,0,1711,1709,1,0,0,0,1711,1712,1,0,0,0,1712,185,
        1,0,0,0,1713,1711,1,0,0,0,1714,1721,3,188,94,0,1715,1716,5,146,0,
        0,1716,1717,5,110,0,0,1717,1718,5,146,0,0,1718,1720,3,188,94,0,1719,
        1715,1,0,0,0,1720,1723,1,0,0,0,1721,1719,1,0,0,0,1721,1722,1,0,0,
        0,1722,187,1,0,0,0,1723,1721,1,0,0,0,1724,1731,3,190,95,0,1725,1726,
        5,146,0,0,1726,1727,5,111,0,0,1727,1728,5,146,0,0,1728,1730,3,190,
        95,0,1729,1725,1,0,0,0,1730,1733,1,0,0,0,1731,1729,1,0,0,0,1731,
        1732,1,0,0,0,1732,189,1,0,0,0,1733,1731,1,0,0,0,1734,1736,5,112,
        0,0,1735,1737,5,146,0,0,1736,1735,1,0,0,0,1736,1737,1,0,0,0,1737,
        1739,1,0,0,0,1738,1734,1,0,0,0,1739,1742,1,0,0,0,1740,1738,1,0,0,
        0,1740,1741,1,0,0,0,1741,1743,1,0,0,0,1742,1740,1,0,0,0,1743,1744,
        3,192,96,0,1744,191,1,0,0,0,1745,1755,3,196,98,0,1746,1748,5,146,
        0,0,1747,1746,1,0,0,0,1747,1748,1,0,0,0,1748,1749,1,0,0,0,1749,1751,
        3,194,97,0,1750,1752,5,146,0,0,1751,1750,1,0,0,0,1751,1752,1,0,0,
        0,1752,1753,1,0,0,0,1753,1754,3,196,98,0,1754,1756,1,0,0,0,1755,
        1747,1,0,0,0,1755,1756,1,0,0,0,1756,1794,1,0,0,0,1757,1759,3,196,
        98,0,1758,1760,5,146,0,0,1759,1758,1,0,0,0,1759,1760,1,0,0,0,1760,
        1761,1,0,0,0,1761,1763,5,113,0,0,1762,1764,5,146,0,0,1763,1762,1,
        0,0,0,1763,1764,1,0,0,0,1764,1765,1,0,0,0,1765,1766,3,196,98,0,1766,
        1767,1,0,0,0,1767,1768,6,96,-1,0,1768,1794,1,0,0,0,1769,1771,3,196,
        98,0,1770,1772,5,146,0,0,1771,1770,1,0,0,0,1771,1772,1,0,0,0,1772,
        1773,1,0,0,0,1773,1775,3,194,97,0,1774,1776,5,146,0,0,1775,1774,
        1,0,0,0,1775,1776,1,0,0,0,1776,1777,1,0,0,0,1777,1787,3,196,98,0,
        1778,1780,5,146,0,0,1779,1778,1,0,0,0,1779,1780,1,0,0,0,1780,1781,
        1,0,0,0,1781,1783,3,194,97,0,1782,1784,5,146,0,0,1783,1782,1,0,0,
        0,1783,1784,1,0,0,0,1784,1785,1,0,0,0,1785,1786,3,196,98,0,1786,
        1788,1,0,0,0,1787,1779,1,0,0,0,1788,1789,1,0,0,0,1789,1787,1,0,0,
        0,1789,1790,1,0,0,0,1790,1791,1,0,0,0,1791,1792,6,96,-1,0,1792,1794,
        1,0,0,0,1793,1745,1,0,0,0,1793,1757,1,0,0,0,1793,1769,1,0,0,0,1794,
        193,1,0,0,0,1795,1796,7,2,0,0,1796,195,1,0,0,0,1797,1808,3,198,99,
        0,1798,1800,5,146,0,0,1799,1798,1,0,0,0,1799,1800,1,0,0,0,1800,1801,
        1,0,0,0,1801,1803,5,10,0,0,1802,1804,5,146,0,0,1803,1802,1,0,0,0,
        1803,1804,1,0,0,0,1804,1805,1,0,0,0,1805,1807,3,198,99,0,1806,1799,
        1,0,0,0,1807,1810,1,0,0,0,1808,1806,1,0,0,0,1808,1809,1,0,0,0,1809,
        197,1,0,0,0,1810,1808,1,0,0,0,1811,1822,3,200,100,0,1812,1814,5,
        146,0,0,1813,1812,1,0,0,0,1813,1814,1,0,0,0,1814,1815,1,0,0,0,1815,
        1817,5,17,0,0,1816,1818,5,146,0,0,1817,1816,1,0,0,0,1817,1818,1,
        0,0,0,1818,1819,1,0,0,0,1819,1821,3,200,100,0,1820,1813,1,0,0,0,
        1821,1824,1,0,0,0,1822,1820,1,0,0,0,1822,1823,1,0,0,0,1823,199,1,
        0,0,0,1824,1822,1,0,0,0,1825,1837,3,204,102,0,1826,1828,5,146,0,
        0,1827,1826,1,0,0,0,1827,1828,1,0,0,0,1828,1829,1,0,0,0,1829,1831,
        3,202,101,0,1830,1832,5,146,0,0,1831,1830,1,0,0,0,1831,1832,1,0,
        0,0,1832,1833,1,0,0,0,1833,1834,3,204,102,0,1834,1836,1,0,0,0,1835,
        1827,1,0,0,0,1836,1839,1,0,0,0,1837,1835,1,0,0,0,1837,1838,1,0,0,
        0,1838,201,1,0,0,0,1839,1837,1,0,0,0,1840,1841,7,3,0,0,1841,203,
        1,0,0,0,1842,1854,3,208,104,0,1843,1845,5,146,0,0,1844,1843,1,0,
        0,0,1844,1845,1,0,0,0,1845,1846,1,0,0,0,1846,1848,3,206,103,0,1847,
        1849,5,146,0,0,1848,1847,1,0,0,0,1848,1849,1,0,0,0,1849,1850,1,0,
        0,0,1850,1851,3,208,104,0,1851,1853,1,0,0,0,1852,1844,1,0,0,0,1853,
        1856,1,0,0,0,1854,1852,1,0,0,0,1854,1855,1,0,0,0,1855,205,1,0,0,
        0,1856,1854,1,0,0,0,1857,1858,7,4,0,0,1858,207,1,0,0,0,1859,1871,
        3,212,106,0,1860,1862,5,146,0,0,1861,1860,1,0,0,0,1861,1862,1,0,
        0,0,1862,1863,1,0,0,0,1863,1865,3,210,105,0,1864,1866,5,146,0,0,
        1865,1864,1,0,0,0,1865,1866,1,0,0,0,1866,1867,1,0,0,0,1867,1868,
        3,212,106,0,1868,1870,1,0,0,0,1869,1861,1,0,0,0,1870,1873,1,0,0,
        0,1871,1869,1,0,0,0,1871,1872,1,0,0,0,1872,209,1,0,0,0,1873,1871,
        1,0,0,0,1874,1875,7,5,0,0,1875,211,1,0,0,0,1876,1887,3,214,107,0,
        1877,1879,5,146,0,0,1878,1877,1,0,0,0,1878,1879,1,0,0,0,1879,1880,
        1,0,0,0,1880,1882,5,23,0,0,1881,1883,5,146,0,0,1882,1881,1,0,0,0,
        1882,1883,1,0,0,0,1883,1884,1,0,0,0,1884,1886,3,214,107,0,1885,1878,
        1,0,0,0,1886,1889,1,0,0,0,1887,1885,1,0,0,0,1887,1888,1,0,0,0,1888,
        213,1,0,0,0,1889,1887,1,0,0,0,1890,1892,5,114,0,0,1891,1893,5,146,
        0,0,1892,1891,1,0,0,0,1892,1893,1,0,0,0,1893,1895,1,0,0,0,1894,1890,
        1,0,0,0,1895,1898,1,0,0,0,1896,1894,1,0,0,0,1896,1897,1,0,0,0,1897,
        1899,1,0,0,0,1898,1896,1,0,0,0,1899,1904,3,216,108,0,1900,1902,5,
        146,0,0,1901,1900,1,0,0,0,1901,1902,1,0,0,0,1902,1903,1,0,0,0,1903,
        1905,5,115,0,0,1904,1901,1,0,0,0,1904,1905,1,0,0,0,1905,215,1,0,
        0,0,1906,1914,3,226,113,0,1907,1915,3,220,110,0,1908,1910,3,218,
        109,0,1909,1908,1,0,0,0,1910,1911,1,0,0,0,1911,1909,1,0,0,0,1911,
        1912,1,0,0,0,1912,1915,1,0,0,0,1913,1915,3,224,112,0,1914,1907,1,
        0,0,0,1914,1909,1,0,0,0,1914,1913,1,0,0,0,1914,1915,1,0,0,0,1915,
        217,1,0,0,0,1916,1917,5,146,0,0,1917,1919,5,117,0,0,1918,1920,5,
        146,0,0,1919,1918,1,0,0,0,1919,1920,1,0,0,0,1920,1921,1,0,0,0,1921,
        1936,3,226,113,0,1922,1923,5,6,0,0,1923,1924,3,182,91,0,1924,1925,
        5,7,0,0,1925,1936,1,0,0,0,1926,1928,5,6,0,0,1927,1929,3,182,91,0,
        1928,1927,1,0,0,0,1928,1929,1,0,0,0,1929,1930,1,0,0,0,1930,1932,
        5,116,0,0,1931,1933,3,182,91,0,1932,1931,1,0,0,0,1932,1933,1,0,0,
        0,1933,1934,1,0,0,0,1934,1936,5,7,0,0,1935,1916,1,0,0,0,1935,1922,
        1,0,0,0,1935,1926,1,0,0,0,1936,219,1,0,0,0,1937,1949,3,222,111,0,
        1938,1939,5,146,0,0,1939,1940,5,118,0,0,1940,1941,5,146,0,0,1941,
        1949,5,94,0,0,1942,1943,5,146,0,0,1943,1944,5,119,0,0,1944,1945,
        5,146,0,0,1945,1949,5,94,0,0,1946,1947,5,146,0,0,1947,1949,5,120,
        0,0,1948,1937,1,0,0,0,1948,1938,1,0,0,0,1948,1942,1,0,0,0,1948,1946,
        1,0,0,0,1949,1951,1,0,0,0,1950,1952,5,146,0,0,1951,1950,1,0,0,0,
        1951,1952,1,0,0,0,1952,1953,1,0,0,0,1953,1954,3,226,113,0,1954,221,
        1,0,0,0,1955,1957,5,146,0,0,1956,1955,1,0,0,0,1956,1957,1,0,0,0,
        1957,1958,1,0,0,0,1958,1959,5,24,0,0,1959,223,1,0,0,0,1960,1961,
        5,146,0,0,1961,1962,5,121,0,0,1962,1963,5,146,0,0,1963,1971,5,122,
        0,0,1964,1965,5,146,0,0,1965,1966,5,121,0,0,1966,1967,5,146,0,0,
        1967,1968,5,112,0,0,1968,1969,5,146,0,0,1969,1971,5,122,0,0,1970,
        1960,1,0,0,0,1970,1964,1,0,0,0,1971,225,1,0,0,0,1972,1979,3,228,
        114,0,1973,1975,5,146,0,0,1974,1973,1,0,0,0,1974,1975,1,0,0,0,1975,
        1976,1,0,0,0,1976,1978,3,256,128,0,1977,1974,1,0,0,0,1978,1981,1,
        0,0,0,1979,1977,1,0,0,0,1979,1980,1,0,0,0,1980,227,1,0,0,0,1981,
        1979,1,0,0,0,1982,1992,3,230,115,0,1983,1992,3,266,133,0,1984,1992,
        3,258,129,0,1985,1992,3,242,121,0,1986,1992,3,244,122,0,1987,1992,
        3,250,125,0,1988,1992,3,252,126,0,1989,1992,3,254,127,0,1990,1992,
        3,262,131,0,1991,1982,1,0,0,0,1991,1983,1,0,0,0,1991,1984,1,0,0,
        0,1991,1985,1,0,0,0,1991,1986,1,0,0,0,1991,1987,1,0,0,0,1991,1988,
        1,0,0,0,1991,1989,1,0,0,0,1991,1990,1,0,0,0,1992,229,1,0,0,0,1993,
        2000,3,264,132,0,1994,2000,5,132,0,0,1995,2000,3,232,116,0,1996,
        2000,5,122,0,0,1997,2000,3,234,117,0,1998,2000,3,238,119,0,1999,
        1993,1,0,0,0,1999,1994,1,0,0,0,1999,1995,1,0,0,0,1999,1996,1,0,0,
        0,1999,1997,1,0,0,0,1999,1998,1,0,0,0,2000,231,1,0,0,0,2001,2002,
        7,6,0,0,2002,233,1,0,0,0,2003,2005,5,6,0,0,2004,2006,5,146,0,0,2005,
        2004,1,0,0,0,2005,2006,1,0,0,0,2006,2020,1,0,0,0,2007,2009,3,182,
        91,0,2008,2010,5,146,0,0,2009,2008,1,0,0,0,2009,2010,1,0,0,0,2010,
        2017,1,0,0,0,2011,2013,3,236,118,0,2012,2014,5,146,0,0,2013,2012,
        1,0,0,0,2013,2014,1,0,0,0,2014,2016,1,0,0,0,2015,2011,1,0,0,0,2016,
        2019,1,0,0,0,2017,2015,1,0,0,0,2017,2018,1,0,0,0,2018,2021,1,0,0,
        0,2019,2017,1,0,0,0,2020,2007,1,0,0,0,2020,2021,1,0,0,0,2021,2022,
        1,0,0,0,2022,2023,5,7,0,0,2023,235,1,0,0,0,2024,2026,5,4,0,0,2025,
        2027,5,146,0,0,2026,2025,1,0,0,0,2026,2027,1,0,0,0,2027,2029,1,0,
        0,0,2028,2030,3,182,91,0,2029,2028,1,0,0,0,2029,2030,1,0,0,0,2030,
        237,1,0,0,0,2031,2033,5,8,0,0,2032,2034,5,146,0,0,2033,2032,1,0,
        0,0,2033,2034,1,0,0,0,2034,2035,1,0,0,0,2035,2037,3,240,120,0,2036,
        2038,5,146,0,0,2037,2036,1,0,0,0,2037,2038,1,0,0,0,2038,2049,1,0,
        0,0,2039,2041,5,4,0,0,2040,2042,5,146,0,0,2041,2040,1,0,0,0,2041,
        2042,1,0,0,0,2042,2043,1,0,0,0,2043,2045,3,240,120,0,2044,2046,5,
        146,0,0,2045,2044,1,0,0,0,2045,2046,1,0,0,0,2046,2048,1,0,0,0,2047,
        2039,1,0,0,0,2048,2051,1,0,0,0,2049,2047,1,0,0,0,2049,2050,1,0,0,
        0,2050,2052,1,0,0,0,2051,2049,1,0,0,0,2052,2053,5,9,0,0,2053,239,
        1,0,0,0,2054,2057,3,278,139,0,2055,2057,5,132,0,0,2056,2054,1,0,
        0,0,2056,2055,1,0,0,0,2057,2059,1,0,0,0,2058,2060,5,146,0,0,2059,
        2058,1,0,0,0,2059,2060,1,0,0,0,2060,2061,1,0,0,0,2061,2063,5,116,
        0,0,2062,2064,5,146,0,0,2063,2062,1,0,0,0,2063,2064,1,0,0,0,2064,
        2065,1,0,0,0,2065,2066,3,182,91,0,2066,241,1,0,0,0,2067,2069,5,2,
        0,0,2068,2070,5,146,0,0,2069,2068,1,0,0,0,2069,2070,1,0,0,0,2070,
        2071,1,0,0,0,2071,2073,3,182,91,0,2072,2074,5,146,0,0,2073,2072,
        1,0,0,0,2073,2074,1,0,0,0,2074,2075,1,0,0,0,2075,2076,5,3,0,0,2076,
        243,1,0,0,0,2077,2079,5,125,0,0,2078,2080,5,146,0,0,2079,2078,1,
        0,0,0,2079,2080,1,0,0,0,2080,2081,1,0,0,0,2081,2083,5,2,0,0,2082,
        2084,5,146,0,0,2083,2082,1,0,0,0,2083,2084,1,0,0,0,2084,2085,1,0,
        0,0,2085,2087,5,97,0,0,2086,2088,5,146,0,0,2087,2086,1,0,0,0,2087,
        2088,1,0,0,0,2088,2089,1,0,0,0,2089,2126,5,3,0,0,2090,2092,3,246,
        123,0,2091,2093,5,146,0,0,2092,2091,1,0,0,0,2092,2093,1,0,0,0,2093,
        2094,1,0,0,0,2094,2096,5,2,0,0,2095,2097,5,146,0,0,2096,2095,1,0,
        0,0,2096,2097,1,0,0,0,2097,2102,1,0,0,0,2098,2100,5,96,0,0,2099,
        2101,5,146,0,0,2100,2099,1,0,0,0,2100,2101,1,0,0,0,2101,2103,1,0,
        0,0,2102,2098,1,0,0,0,2102,2103,1,0,0,0,2103,2121,1,0,0,0,2104,2106,
        3,248,124,0,2105,2107,5,146,0,0,2106,2105,1,0,0,0,2106,2107,1,0,
        0,0,2107,2118,1,0,0,0,2108,2110,5,4,0,0,2109,2111,5,146,0,0,2110,
        2109,1,0,0,0,2110,2111,1,0,0,0,2111,2112,1,0,0,0,2112,2114,3,248,
        124,0,2113,2115,5,146,0,0,2114,2113,1,0,0,0,2114,2115,1,0,0,0,2115,
        2117,1,0,0,0,2116,2108,1,0,0,0,2117,2120,1,0,0,0,2118,2116,1,0,0,
        0,2118,2119,1,0,0,0,2119,2122,1,0,0,0,2120,2118,1,0,0,0,2121,2104,
        1,0,0,0,2121,2122,1,0,0,0,2122,2123,1,0,0,0,2123,2124,5,3,0,0,2124,
        2126,1,0,0,0,2125,2077,1,0,0,0,2125,2090,1,0,0,0,2126,245,1,0,0,
        0,2127,2128,3,278,139,0,2128,247,1,0,0,0,2129,2131,3,278,139,0,2130,
        2132,5,146,0,0,2131,2130,1,0,0,0,2131,2132,1,0,0,0,2132,2133,1,0,
        0,0,2133,2134,5,116,0,0,2134,2136,5,5,0,0,2135,2137,5,146,0,0,2136,
        2135,1,0,0,0,2136,2137,1,0,0,0,2137,2139,1,0,0,0,2138,2129,1,0,0,
        0,2138,2139,1,0,0,0,2139,2140,1,0,0,0,2140,2141,3,182,91,0,2141,
        249,1,0,0,0,2142,2147,3,150,75,0,2143,2145,5,146,0,0,2144,2143,1,
        0,0,0,2144,2145,1,0,0,0,2145,2146,1,0,0,0,2146,2148,3,152,76,0,2147,
        2144,1,0,0,0,2148,2149,1,0,0,0,2149,2147,1,0,0,0,2149,2150,1,0,0,
        0,2150,251,1,0,0,0,2151,2153,5,126,0,0,2152,2154,5,146,0,0,2153,
        2152,1,0,0,0,2153,2154,1,0,0,0,2154,2155,1,0,0,0,2155,2157,5,8,0,
        0,2156,2158,5,146,0,0,2157,2156,1,0,0,0,2157,2158,1,0,0,0,2158,2159,
        1,0,0,0,2159,2161,5,86,0,0,2160,2162,5,146,0,0,2161,2160,1,0,0,0,
        2161,2162,1,0,0,0,2162,2163,1,0,0,0,2163,2168,3,142,71,0,2164,2166,
        5,146,0,0,2165,2164,1,0,0,0,2165,2166,1,0,0,0,2166,2167,1,0,0,0,
        2167,2169,3,140,70,0,2168,2165,1,0,0,0,2168,2169,1,0,0,0,2169,2171,
        1,0,0,0,2170,2172,5,146,0,0,2171,2170,1,0,0,0,2171,2172,1,0,0,0,
        2172,2173,1,0,0,0,2173,2174,5,9,0,0,2174,253,1,0,0,0,2175,2177,5,
        125,0,0,2176,2178,5,146,0,0,2177,2176,1,0,0,0,2177,2178,1,0,0,0,
        2178,2179,1,0,0,0,2179,2181,5,8,0,0,2180,2182,5,146,0,0,2181,2180,
        1,0,0,0,2181,2182,1,0,0,0,2182,2183,1,0,0,0,2183,2185,5,86,0,0,2184,
        2186,5,146,0,0,2185,2184,1,0,0,0,2185,2186,1,0,0,0,2186,2187,1,0,
        0,0,2187,2192,3,142,71,0,2188,2190,5,146,0,0,2189,2188,1,0,0,0,2189,
        2190,1,0,0,0,2190,2191,1,0,0,0,2191,2193,3,140,70,0,2192,2189,1,
        0,0,0,2192,2193,1,0,0,0,2193,2195,1,0,0,0,2194,2196,5,146,0,0,2195,
        2194,1,0,0,0,2195,2196,1,0,0,0,2196,2197,1,0,0,0,2197,2198,5,9,0,
        0,2198,255,1,0,0,0,2199,2201,5,25,0,0,2200,2202,5,146,0,0,2201,2200,
        1,0,0,0,2201,2202,1,0,0,0,2202,2205,1,0,0,0,2203,2206,3,270,135,
        0,2204,2206,5,97,0,0,2205,2203,1,0,0,0,2205,2204,1,0,0,0,2206,257,
        1,0,0,0,2207,2212,5,127,0,0,2208,2210,5,146,0,0,2209,2208,1,0,0,
        0,2209,2210,1,0,0,0,2210,2211,1,0,0,0,2211,2213,3,260,130,0,2212,
        2209,1,0,0,0,2213,2214,1,0,0,0,2214,2212,1,0,0,0,2214,2215,1,0,0,
        0,2215,2230,1,0,0,0,2216,2218,5,127,0,0,2217,2219,5,146,0,0,2218,
        2217,1,0,0,0,2218,2219,1,0,0,0,2219,2220,1,0,0,0,2220,2225,3,182,
        91,0,2221,2223,5,146,0,0,2222,2221,1,0,0,0,2222,2223,1,0,0,0,2223,
        2224,1,0,0,0,2224,2226,3,260,130,0,2225,2222,1,0,0,0,2226,2227,1,
        0,0,0,2227,2225,1,0,0,0,2227,2228,1,0,0,0,2228,2230,1,0,0,0,2229,
        2207,1,0,0,0,2229,2216,1,0,0,0,2230,2239,1,0,0,0,2231,2233,5,146,
        0,0,2232,2231,1,0,0,0,2232,2233,1,0,0,0,2233,2234,1,0,0,0,2234,2236,
        5,128,0,0,2235,2237,5,146,0,0,2236,2235,1,0,0,0,2236,2237,1,0,0,
        0,2237,2238,1,0,0,0,2238,2240,3,182,91,0,2239,2232,1,0,0,0,2239,
        2240,1,0,0,0,2240,2242,1,0,0,0,2241,2243,5,146,0,0,2242,2241,1,0,
        0,0,2242,2243,1,0,0,0,2243,2244,1,0,0,0,2244,2245,5,129,0,0,2245,
        259,1,0,0,0,2246,2248,5,130,0,0,2247,2249,5,146,0,0,2248,2247,1,
        0,0,0,2248,2249,1,0,0,0,2249,2250,1,0,0,0,2250,2252,3,182,91,0,2251,
        2253,5,146,0,0,2252,2251,1,0,0,0,2252,2253,1,0,0,0,2253,2254,1,0,
        0,0,2254,2256,5,131,0,0,2255,2257,5,146,0,0,2256,2255,1,0,0,0,2256,
        2257,1,0,0,0,2257,2258,1,0,0,0,2258,2259,3,182,91,0,2259,261,1,0,
        0,0,2260,2261,3,278,139,0,2261,263,1,0,0,0,2262,2265,3,274,137,0,
        2263,2265,3,272,136,0,2264,2262,1,0,0,0,2264,2263,1,0,0,0,2265,265,
        1,0,0,0,2266,2269,5,26,0,0,2267,2270,3,278,139,0,2268,2270,5,134,
        0,0,2269,2267,1,0,0,0,2269,2268,1,0,0,0,2270,267,1,0,0,0,2271,2273,
        3,228,114,0,2272,2274,5,146,0,0,2273,2272,1,0,0,0,2273,2274,1,0,
        0,0,2274,2275,1,0,0,0,2275,2276,3,256,128,0,2276,269,1,0,0,0,2277,
        2278,3,276,138,0,2278,271,1,0,0,0,2279,2280,5,134,0,0,2280,273,1,
        0,0,0,2281,2282,5,141,0,0,2282,275,1,0,0,0,2283,2284,3,278,139,0,
        2284,277,1,0,0,0,2285,2291,5,142,0,0,2286,2287,5,145,0,0,2287,2291,
        6,139,-1,0,2288,2291,5,135,0,0,2289,2291,3,280,140,0,2290,2285,1,
        0,0,0,2290,2286,1,0,0,0,2290,2288,1,0,0,0,2290,2289,1,0,0,0,2291,
        279,1,0,0,0,2292,2293,7,7,0,0,2293,281,1,0,0,0,2294,2295,7,8,0,0,
        2295,283,1,0,0,0,2296,2297,7,9,0,0,2297,285,1,0,0,0,2298,2299,7,
        10,0,0,2299,287,1,0,0,0,401,290,294,299,303,308,311,315,318,331,
        337,341,345,349,352,358,361,365,369,373,377,381,386,397,401,405,
        410,423,427,435,439,443,447,455,459,463,467,473,477,499,503,506,
        509,512,515,519,524,528,538,542,547,552,557,563,567,571,576,583,
        587,591,594,598,602,607,612,616,626,636,640,644,648,653,665,669,
        673,677,681,683,687,691,693,707,711,715,719,724,727,731,735,737,
        741,745,747,783,794,816,820,825,836,840,844,852,856,860,866,870,
        874,880,884,888,892,896,900,906,913,918,924,944,948,956,966,971,
        976,980,985,991,996,999,1003,1007,1011,1017,1021,1026,1031,1035,
        1038,1042,1046,1050,1054,1058,1064,1068,1073,1077,1086,1092,1100,
        1104,1108,1112,1119,1123,1127,1131,1134,1137,1140,1146,1149,1153,
        1157,1161,1164,1168,1178,1184,1191,1204,1208,1212,1216,1221,1226,
        1230,1236,1240,1244,1248,1253,1259,1262,1268,1271,1277,1281,1285,
        1289,1293,1298,1303,1307,1312,1315,1324,1333,1338,1351,1354,1362,
        1366,1371,1376,1380,1385,1391,1396,1403,1407,1411,1413,1417,1419,
        1423,1425,1431,1437,1441,1444,1447,1453,1456,1459,1463,1469,1472,
        1475,1479,1483,1487,1489,1493,1495,1499,1501,1505,1507,1513,1517,
        1521,1525,1529,1533,1537,1541,1545,1548,1554,1558,1562,1565,1570,
        1575,1580,1585,1591,1597,1600,1603,1606,1610,1613,1616,1619,1622,
        1626,1630,1634,1638,1642,1645,1648,1652,1656,1660,1664,1666,1672,
        1675,1678,1684,1687,1690,1711,1721,1731,1736,1740,1747,1751,1755,
        1759,1763,1771,1775,1779,1783,1789,1793,1799,1803,1808,1813,1817,
        1822,1827,1831,1837,1844,1848,1854,1861,1865,1871,1878,1882,1887,
        1892,1896,1901,1904,1911,1914,1919,1928,1932,1935,1948,1951,1956,
        1970,1974,1979,1991,1999,2005,2009,2013,2017,2020,2026,2029,2033,
        2037,2041,2045,2049,2056,2059,2063,2069,2073,2079,2083,2087,2092,
        2096,2100,2102,2106,2110,2114,2118,2121,2125,2131,2136,2138,2144,
        2149,2153,2157,2161,2165,2168,2171,2177,2181,2185,2189,2192,2195,
        2201,2205,2209,2214,2218,2222,2227,2229,2232,2236,2239,2242,2248,
        2252,2256,2264,2269,2273,2290
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!CypherParser.__ATN) {
            CypherParser.__ATN = new antlr.ATNDeserializer().deserialize(CypherParser._serializedATN);
        }

        return CypherParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(CypherParser.literalNames, CypherParser.symbolicNames, []);

    public override getVocabulary(): antlr.Vocabulary {
        return CypherParser.vocabulary;
    }

    private static readonly decisionsToDFA = CypherParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class Ku_StatementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Cypher__list(): OC_CypherContext[] {
        return this.getTypedRuleContexts(OC_CypherContext);
    }
    public oC_Cypher(i: number): OC_CypherContext {
        return this.getTypedRuleContext(OC_CypherContext, i);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(CypherParser.EOF, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_ku_Statements;
    }
}


export class OC_CypherContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Statement(): OC_StatementContext {
        return this.getTypedRuleContext(OC_StatementContext, 0);
    }
    public oC_AnyCypherOption(): OC_AnyCypherOptionContext {
        return this.getTypedRuleContext(OC_AnyCypherOptionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Cypher;
    }
}


export class OC_StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Query(): OC_QueryContext {
        return this.getTypedRuleContext(OC_QueryContext, 0);
    }
    public kU_DDL(): KU_DDLContext {
        return this.getTypedRuleContext(KU_DDLContext, 0);
    }
    public kU_CopyFrom(): KU_CopyFromContext {
        return this.getTypedRuleContext(KU_CopyFromContext, 0);
    }
    public kU_CopyFromByColumn(): KU_CopyFromByColumnContext {
        return this.getTypedRuleContext(KU_CopyFromByColumnContext, 0);
    }
    public kU_CopyTO(): KU_CopyTOContext {
        return this.getTypedRuleContext(KU_CopyTOContext, 0);
    }
    public kU_StandaloneCall(): KU_StandaloneCallContext {
        return this.getTypedRuleContext(KU_StandaloneCallContext, 0);
    }
    public kU_CreateMacro(): KU_CreateMacroContext {
        return this.getTypedRuleContext(KU_CreateMacroContext, 0);
    }
    public kU_CommentOn(): KU_CommentOnContext {
        return this.getTypedRuleContext(KU_CommentOnContext, 0);
    }
    public kU_Transaction(): KU_TransactionContext {
        return this.getTypedRuleContext(KU_TransactionContext, 0);
    }
    public kU_Extension(): KU_ExtensionContext {
        return this.getTypedRuleContext(KU_ExtensionContext, 0);
    }
    public kU_ExportDatabase(): KU_ExportDatabaseContext {
        return this.getTypedRuleContext(KU_ExportDatabaseContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Statement;
    }
}


export class KU_CopyFromContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COPY(): antlr.TerminalNode {
        return this.getToken(CypherParser.COPY, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public kU_FilePaths(): KU_FilePathsContext {
        return this.getTypedRuleContext(KU_FilePathsContext, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public kU_ParsingOptions(): KU_ParsingOptionsContext {
        return this.getTypedRuleContext(KU_ParsingOptionsContext, 0);
    }
    public kU_ColumnNames(): KU_ColumnNamesContext {
        return this.getTypedRuleContext(KU_ColumnNamesContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CopyFrom;
    }
}


export class KU_ColumnNamesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SchemaName__list(): OC_SchemaNameContext[] {
        return this.getTypedRuleContexts(OC_SchemaNameContext);
    }
    public oC_SchemaName(i: number): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ColumnNames;
    }
}


export class KU_CopyFromByColumnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COPY(): antlr.TerminalNode {
        return this.getToken(CypherParser.COPY, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public StringLiteral__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.StringLiteral);
    }
    public StringLiteral(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, i);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(CypherParser.BY, 0);
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLUMN, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CopyFromByColumn;
    }
}


export class KU_CopyTOContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COPY(): antlr.TerminalNode {
        return this.getToken(CypherParser.COPY, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Query(): OC_QueryContext {
        return this.getTypedRuleContext(OC_QueryContext, 0);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(CypherParser.TO, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public kU_ParsingOptions(): KU_ParsingOptionsContext {
        return this.getTypedRuleContext(KU_ParsingOptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CopyTO;
    }
}


export class KU_ExportDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXPORT(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXPORT, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DATABASE, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public kU_ParsingOptions(): KU_ParsingOptionsContext {
        return this.getTypedRuleContext(KU_ParsingOptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ExportDatabase;
    }
}


export class KU_StandaloneCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.CALL, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public oC_Literal(): OC_LiteralContext {
        return this.getTypedRuleContext(OC_LiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_StandaloneCall;
    }
}


export class KU_CommentOnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMENT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COMMENT, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public ON(): antlr.TerminalNode {
        return this.getToken(CypherParser.ON, 0);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(CypherParser.IS, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CommentOn;
    }
}


export class KU_CreateMacroContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public MACRO(): antlr.TerminalNode {
        return this.getToken(CypherParser.MACRO, 0);
    }
    public oC_FunctionName(): OC_FunctionNameContext {
        return this.getTypedRuleContext(OC_FunctionNameContext, 0);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public kU_PositionalArgs(): KU_PositionalArgsContext {
        return this.getTypedRuleContext(KU_PositionalArgsContext, 0);
    }
    public kU_DefaultArg__list(): KU_DefaultArgContext[] {
        return this.getTypedRuleContexts(KU_DefaultArgContext);
    }
    public kU_DefaultArg(i: number): KU_DefaultArgContext {
        return this.getTypedRuleContext(KU_DefaultArgContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateMacro;
    }
}


export class KU_PositionalArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName__list(): OC_SymbolicNameContext[] {
        return this.getTypedRuleContexts(OC_SymbolicNameContext);
    }
    public oC_SymbolicName(i: number): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_PositionalArgs;
    }
}


export class KU_DefaultArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, 0);
    }
    public oC_Literal(): OC_LiteralContext {
        return this.getTypedRuleContext(OC_LiteralContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_DefaultArg;
    }
}


export class KU_FilePathsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public StringLiteral__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.StringLiteral);
    }
    public StringLiteral(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public GLOB(): antlr.TerminalNode {
        return this.getToken(CypherParser.GLOB, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_FilePaths;
    }
}


export class KU_ParsingOptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_ParsingOption__list(): KU_ParsingOptionContext[] {
        return this.getTypedRuleContexts(KU_ParsingOptionContext);
    }
    public kU_ParsingOption(i: number): KU_ParsingOptionContext {
        return this.getTypedRuleContext(KU_ParsingOptionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ParsingOptions;
    }
}


export class KU_ParsingOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public oC_Literal(): OC_LiteralContext {
        return this.getTypedRuleContext(OC_LiteralContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ParsingOption;
    }
}


export class KU_DDLContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_CreateNodeTable(): KU_CreateNodeTableContext {
        return this.getTypedRuleContext(KU_CreateNodeTableContext, 0);
    }
    public kU_CreateRelTable(): KU_CreateRelTableContext {
        return this.getTypedRuleContext(KU_CreateRelTableContext, 0);
    }
    public kU_CreateRelTableGroup(): KU_CreateRelTableGroupContext {
        return this.getTypedRuleContext(KU_CreateRelTableGroupContext, 0);
    }
    public kU_CreateRdfGraph(): KU_CreateRdfGraphContext {
        return this.getTypedRuleContext(KU_CreateRdfGraphContext, 0);
    }
    public kU_DropTable(): KU_DropTableContext {
        return this.getTypedRuleContext(KU_DropTableContext, 0);
    }
    public kU_AlterTable(): KU_AlterTableContext {
        return this.getTypedRuleContext(KU_AlterTableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_DDL;
    }
}


export class KU_CreateNodeTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public NODE(): antlr.TerminalNode {
        return this.getToken(CypherParser.NODE, 0);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsContext, 0);
    }
    public kU_CreateNodeConstraint(): KU_CreateNodeConstraintContext {
        return this.getTypedRuleContext(KU_CreateNodeConstraintContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateNodeTable;
    }
}


export class KU_CreateRelTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public REL(): antlr.TerminalNode {
        return this.getToken(CypherParser.REL, 0);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public kU_RelTableConnection(): KU_RelTableConnectionContext {
        return this.getTypedRuleContext(KU_RelTableConnectionContext, 0);
    }
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsContext, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateRelTable;
    }
}


export class KU_CreateRelTableGroupContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public REL(): antlr.TerminalNode {
        return this.getToken(CypherParser.REL, 0);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public GROUP(): antlr.TerminalNode {
        return this.getToken(CypherParser.GROUP, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public kU_RelTableConnection__list(): KU_RelTableConnectionContext[] {
        return this.getTypedRuleContexts(KU_RelTableConnectionContext);
    }
    public kU_RelTableConnection(i: number): KU_RelTableConnectionContext {
        return this.getTypedRuleContext(KU_RelTableConnectionContext, i);
    }
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsContext, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateRelTableGroup;
    }
}


export class KU_RelTableConnectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SchemaName__list(): OC_SchemaNameContext[] {
        return this.getTypedRuleContexts(OC_SchemaNameContext);
    }
    public oC_SchemaName(i: number): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, i);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(CypherParser.TO, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_RelTableConnection;
    }
}


export class KU_CreateRdfGraphContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public RDFGRAPH(): antlr.TerminalNode {
        return this.getToken(CypherParser.RDFGRAPH, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateRdfGraph;
    }
}


export class KU_DropTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(CypherParser.DROP, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public RDFGRAPH(): antlr.TerminalNode {
        return this.getToken(CypherParser.RDFGRAPH, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_DropTable;
    }
}


export class KU_AlterTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALTER(): antlr.TerminalNode {
        return this.getToken(CypherParser.ALTER, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public kU_AlterOptions(): KU_AlterOptionsContext {
        return this.getTypedRuleContext(KU_AlterOptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AlterTable;
    }
}


export class KU_AlterOptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_AddProperty(): KU_AddPropertyContext {
        return this.getTypedRuleContext(KU_AddPropertyContext, 0);
    }
    public kU_DropProperty(): KU_DropPropertyContext {
        return this.getTypedRuleContext(KU_DropPropertyContext, 0);
    }
    public kU_RenameTable(): KU_RenameTableContext {
        return this.getTypedRuleContext(KU_RenameTableContext, 0);
    }
    public kU_RenameProperty(): KU_RenamePropertyContext {
        return this.getTypedRuleContext(KU_RenamePropertyContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AlterOptions;
    }
}


export class KU_AddPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADD(): antlr.TerminalNode {
        return this.getToken(CypherParser.ADD, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public kU_DataType(): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, 0);
    }
    public DEFAULT(): antlr.TerminalNode {
        return this.getToken(CypherParser.DEFAULT, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AddProperty;
    }
}


export class KU_DropPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(CypherParser.DROP, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_DropProperty;
    }
}


export class KU_RenameTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(CypherParser.RENAME, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(CypherParser.TO, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_RenameTable;
    }
}


export class KU_RenamePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(CypherParser.RENAME, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_PropertyKeyName__list(): OC_PropertyKeyNameContext[] {
        return this.getTypedRuleContexts(OC_PropertyKeyNameContext);
    }
    public oC_PropertyKeyName(i: number): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, i);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(CypherParser.TO, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_RenameProperty;
    }
}


export class KU_PropertyDefinitionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_PropertyDefinition__list(): KU_PropertyDefinitionContext[] {
        return this.getTypedRuleContexts(KU_PropertyDefinitionContext);
    }
    public kU_PropertyDefinition(i: number): KU_PropertyDefinitionContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_PropertyDefinitions;
    }
}


export class KU_PropertyDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public kU_DataType(): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_PropertyDefinition;
    }
}


export class KU_CreateNodeConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRIMARY(): antlr.TerminalNode {
        return this.getToken(CypherParser.PRIMARY, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public KEY(): antlr.TerminalNode {
        return this.getToken(CypherParser.KEY, 0);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateNodeConstraint;
    }
}


export class KU_DataTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public UNION(): antlr.TerminalNode {
        return this.getToken(CypherParser.UNION, 0);
    }
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public kU_DataType__list(): KU_DataTypeContext[] {
        return this.getTypedRuleContexts(KU_DataTypeContext);
    }
    public kU_DataType(i: number): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, i);
    }
    public kU_ListIdentifiers(): KU_ListIdentifiersContext {
        return this.getTypedRuleContext(KU_ListIdentifiersContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_DataType;
    }
}


export class KU_ListIdentifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_ListIdentifier__list(): KU_ListIdentifierContext[] {
        return this.getTypedRuleContexts(KU_ListIdentifierContext);
    }
    public kU_ListIdentifier(i: number): KU_ListIdentifierContext {
        return this.getTypedRuleContext(KU_ListIdentifierContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ListIdentifiers;
    }
}


export class KU_ListIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ListIdentifier;
    }
}


export class OC_AnyCypherOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Explain(): OC_ExplainContext {
        return this.getTypedRuleContext(OC_ExplainContext, 0);
    }
    public oC_Profile(): OC_ProfileContext {
        return this.getTypedRuleContext(OC_ProfileContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_AnyCypherOption;
    }
}


export class OC_ExplainContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXPLAIN(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXPLAIN, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Explain;
    }
}


export class OC_ProfileContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROFILE(): antlr.TerminalNode {
        return this.getToken(CypherParser.PROFILE, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Profile;
    }
}


export class KU_TransactionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BEGIN(): antlr.TerminalNode {
        return this.getToken(CypherParser.BEGIN, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public TRANSACTION(): antlr.TerminalNode {
        return this.getToken(CypherParser.TRANSACTION, 0);
    }
    public READ(): antlr.TerminalNode {
        return this.getToken(CypherParser.READ, 0);
    }
    public ONLY(): antlr.TerminalNode {
        return this.getToken(CypherParser.ONLY, 0);
    }
    public COMMIT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COMMIT, 0);
    }
    public COMMIT_SKIP_CHECKPOINT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COMMIT_SKIP_CHECKPOINT, 0);
    }
    public ROLLBACK(): antlr.TerminalNode {
        return this.getToken(CypherParser.ROLLBACK, 0);
    }
    public ROLLBACK_SKIP_CHECKPOINT(): antlr.TerminalNode {
        return this.getToken(CypherParser.ROLLBACK_SKIP_CHECKPOINT, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Transaction;
    }
}


export class KU_ExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_LoadExtension(): KU_LoadExtensionContext {
        return this.getTypedRuleContext(KU_LoadExtensionContext, 0);
    }
    public kU_InstallExtension(): KU_InstallExtensionContext {
        return this.getTypedRuleContext(KU_InstallExtensionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Extension;
    }
}


export class KU_LoadExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOAD(): antlr.TerminalNode {
        return this.getToken(CypherParser.LOAD, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public EXTENSION(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXTENSION, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_LoadExtension;
    }
}


export class KU_InstallExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INSTALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.INSTALL, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_InstallExtension;
    }
}


export class OC_QueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_RegularQuery(): OC_RegularQueryContext {
        return this.getTypedRuleContext(OC_RegularQueryContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Query;
    }
}


export class OC_RegularQueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SingleQuery(): OC_SingleQueryContext {
        return this.getTypedRuleContext(OC_SingleQueryContext, 0);
    }
    public oC_Union__list(): OC_UnionContext[] {
        return this.getTypedRuleContexts(OC_UnionContext);
    }
    public oC_Union(i: number): OC_UnionContext {
        return this.getTypedRuleContext(OC_UnionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Return__list(): OC_ReturnContext[] {
        return this.getTypedRuleContexts(OC_ReturnContext);
    }
    public oC_Return(i: number): OC_ReturnContext {
        return this.getTypedRuleContext(OC_ReturnContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RegularQuery;
    }
}


export class OC_UnionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNION(): antlr.TerminalNode {
        return this.getToken(CypherParser.UNION, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public ALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.ALL, 0);
    }
    public oC_SingleQuery(): OC_SingleQueryContext {
        return this.getTypedRuleContext(OC_SingleQueryContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Union;
    }
}


export class OC_SingleQueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SinglePartQuery(): OC_SinglePartQueryContext {
        return this.getTypedRuleContext(OC_SinglePartQueryContext, 0);
    }
    public oC_MultiPartQuery(): OC_MultiPartQueryContext {
        return this.getTypedRuleContext(OC_MultiPartQueryContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SingleQuery;
    }
}


export class OC_SinglePartQueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Return(): OC_ReturnContext {
        return this.getTypedRuleContext(OC_ReturnContext, 0);
    }
    public oC_ReadingClause__list(): OC_ReadingClauseContext[] {
        return this.getTypedRuleContexts(OC_ReadingClauseContext);
    }
    public oC_ReadingClause(i: number): OC_ReadingClauseContext {
        return this.getTypedRuleContext(OC_ReadingClauseContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_UpdatingClause__list(): OC_UpdatingClauseContext[] {
        return this.getTypedRuleContexts(OC_UpdatingClauseContext);
    }
    public oC_UpdatingClause(i: number): OC_UpdatingClauseContext {
        return this.getTypedRuleContext(OC_UpdatingClauseContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SinglePartQuery;
    }
}


export class OC_MultiPartQueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SinglePartQuery(): OC_SinglePartQueryContext {
        return this.getTypedRuleContext(OC_SinglePartQueryContext, 0);
    }
    public kU_QueryPart__list(): KU_QueryPartContext[] {
        return this.getTypedRuleContexts(KU_QueryPartContext);
    }
    public kU_QueryPart(i: number): KU_QueryPartContext {
        return this.getTypedRuleContext(KU_QueryPartContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_MultiPartQuery;
    }
}


export class KU_QueryPartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_With(): OC_WithContext {
        return this.getTypedRuleContext(OC_WithContext, 0);
    }
    public oC_ReadingClause__list(): OC_ReadingClauseContext[] {
        return this.getTypedRuleContexts(OC_ReadingClauseContext);
    }
    public oC_ReadingClause(i: number): OC_ReadingClauseContext {
        return this.getTypedRuleContext(OC_ReadingClauseContext, i);
    }
    public oC_UpdatingClause__list(): OC_UpdatingClauseContext[] {
        return this.getTypedRuleContexts(OC_UpdatingClauseContext);
    }
    public oC_UpdatingClause(i: number): OC_UpdatingClauseContext {
        return this.getTypedRuleContext(OC_UpdatingClauseContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_QueryPart;
    }
}


export class OC_UpdatingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Create(): OC_CreateContext {
        return this.getTypedRuleContext(OC_CreateContext, 0);
    }
    public oC_Merge(): OC_MergeContext {
        return this.getTypedRuleContext(OC_MergeContext, 0);
    }
    public oC_Set(): OC_SetContext {
        return this.getTypedRuleContext(OC_SetContext, 0);
    }
    public oC_Delete(): OC_DeleteContext {
        return this.getTypedRuleContext(OC_DeleteContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_UpdatingClause;
    }
}


export class OC_ReadingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Match(): OC_MatchContext {
        return this.getTypedRuleContext(OC_MatchContext, 0);
    }
    public oC_Unwind(): OC_UnwindContext {
        return this.getTypedRuleContext(OC_UnwindContext, 0);
    }
    public kU_InQueryCall(): KU_InQueryCallContext {
        return this.getTypedRuleContext(KU_InQueryCallContext, 0);
    }
    public kU_LoadFrom(): KU_LoadFromContext {
        return this.getTypedRuleContext(KU_LoadFromContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ReadingClause;
    }
}


export class KU_LoadFromContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOAD(): antlr.TerminalNode {
        return this.getToken(CypherParser.LOAD, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public kU_FilePaths(): KU_FilePathsContext {
        return this.getTypedRuleContext(KU_FilePathsContext, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public HEADERS(): antlr.TerminalNode {
        return this.getToken(CypherParser.HEADERS, 0);
    }
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsContext, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public kU_ParsingOptions(): KU_ParsingOptionsContext {
        return this.getTypedRuleContext(KU_ParsingOptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_LoadFrom;
    }
}


export class KU_InQueryCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.CALL, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_FunctionInvocation(): OC_FunctionInvocationContext {
        return this.getTypedRuleContext(OC_FunctionInvocationContext, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_InQueryCall;
    }
}


export class OC_MatchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(CypherParser.MATCH, 0);
    }
    public oC_Pattern(): OC_PatternContext {
        return this.getTypedRuleContext(OC_PatternContext, 0);
    }
    public OPTIONAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.OPTIONAL, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Match;
    }
}


export class OC_UnwindContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNWIND(): antlr.TerminalNode {
        return this.getToken(CypherParser.UNWIND, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Unwind;
    }
}


export class OC_CreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public oC_Pattern(): OC_PatternContext {
        return this.getTypedRuleContext(OC_PatternContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Create;
    }
}


export class OC_MergeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MERGE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MERGE, 0);
    }
    public oC_Pattern(): OC_PatternContext {
        return this.getTypedRuleContext(OC_PatternContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_MergeAction__list(): OC_MergeActionContext[] {
        return this.getTypedRuleContexts(OC_MergeActionContext);
    }
    public oC_MergeAction(i: number): OC_MergeActionContext {
        return this.getTypedRuleContext(OC_MergeActionContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Merge;
    }
}


export class OC_MergeActionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON(): antlr.TerminalNode {
        return this.getToken(CypherParser.ON, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(CypherParser.MATCH, 0);
    }
    public oC_Set(): OC_SetContext {
        return this.getTypedRuleContext(OC_SetContext, 0);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_MergeAction;
    }
}


export class OC_SetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(CypherParser.SET, 0);
    }
    public oC_SetItem__list(): OC_SetItemContext[] {
        return this.getTypedRuleContexts(OC_SetItemContext);
    }
    public oC_SetItem(i: number): OC_SetItemContext {
        return this.getTypedRuleContext(OC_SetItemContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Set;
    }
}


export class OC_SetItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyExpression(): OC_PropertyExpressionContext {
        return this.getTypedRuleContext(OC_PropertyExpressionContext, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SetItem;
    }
}


export class OC_DeleteContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DELETE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DELETE, 0);
    }
    public oC_Expression__list(): OC_ExpressionContext[] {
        return this.getTypedRuleContexts(OC_ExpressionContext);
    }
    public oC_Expression(i: number): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, i);
    }
    public DETACH(): antlr.TerminalNode {
        return this.getToken(CypherParser.DETACH, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Delete;
    }
}


export class OC_WithContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public oC_ProjectionBody(): OC_ProjectionBodyContext {
        return this.getTypedRuleContext(OC_ProjectionBodyContext, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_With;
    }
}


export class OC_ReturnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(CypherParser.RETURN, 0);
    }
    public oC_ProjectionBody(): OC_ProjectionBodyContext {
        return this.getTypedRuleContext(OC_ProjectionBodyContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Return;
    }
}


export class OC_ProjectionBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_ProjectionItems(): OC_ProjectionItemsContext {
        return this.getTypedRuleContext(OC_ProjectionItemsContext, 0);
    }
    public DISTINCT(): antlr.TerminalNode {
        return this.getToken(CypherParser.DISTINCT, 0);
    }
    public oC_Order(): OC_OrderContext {
        return this.getTypedRuleContext(OC_OrderContext, 0);
    }
    public oC_Skip(): OC_SkipContext {
        return this.getTypedRuleContext(OC_SkipContext, 0);
    }
    public oC_Limit(): OC_LimitContext {
        return this.getTypedRuleContext(OC_LimitContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ProjectionBody;
    }
}


export class OC_ProjectionItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public oC_ProjectionItem__list(): OC_ProjectionItemContext[] {
        return this.getTypedRuleContexts(OC_ProjectionItemContext);
    }
    public oC_ProjectionItem(i: number): OC_ProjectionItemContext {
        return this.getTypedRuleContext(OC_ProjectionItemContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ProjectionItems;
    }
}


export class OC_ProjectionItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ProjectionItem;
    }
}


export class OC_OrderContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER(): antlr.TerminalNode {
        return this.getToken(CypherParser.ORDER, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(CypherParser.BY, 0);
    }
    public oC_SortItem__list(): OC_SortItemContext[] {
        return this.getTypedRuleContexts(OC_SortItemContext);
    }
    public oC_SortItem(i: number): OC_SortItemContext {
        return this.getTypedRuleContext(OC_SortItemContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Order;
    }
}


export class OC_SkipContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public L_SKIP(): antlr.TerminalNode {
        return this.getToken(CypherParser.L_SKIP, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Skip;
    }
}


export class OC_LimitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIMIT(): antlr.TerminalNode {
        return this.getToken(CypherParser.LIMIT, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Limit;
    }
}


export class OC_SortItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public ASCENDING(): antlr.TerminalNode {
        return this.getToken(CypherParser.ASCENDING, 0);
    }
    public ASC(): antlr.TerminalNode {
        return this.getToken(CypherParser.ASC, 0);
    }
    public DESCENDING(): antlr.TerminalNode {
        return this.getToken(CypherParser.DESCENDING, 0);
    }
    public DESC(): antlr.TerminalNode {
        return this.getToken(CypherParser.DESC, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SortItem;
    }
}


export class OC_WhereContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHERE(): antlr.TerminalNode {
        return this.getToken(CypherParser.WHERE, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Where;
    }
}


export class OC_PatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PatternPart__list(): OC_PatternPartContext[] {
        return this.getTypedRuleContexts(OC_PatternPartContext);
    }
    public oC_PatternPart(i: number): OC_PatternPartContext {
        return this.getTypedRuleContext(OC_PatternPartContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Pattern;
    }
}


export class OC_PatternPartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext {
        return this.getTypedRuleContext(OC_AnonymousPatternPartContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PatternPart;
    }
}


export class OC_AnonymousPatternPartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PatternElement(): OC_PatternElementContext {
        return this.getTypedRuleContext(OC_PatternElementContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_AnonymousPatternPart;
    }
}


export class OC_PatternElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_NodePattern(): OC_NodePatternContext {
        return this.getTypedRuleContext(OC_NodePatternContext, 0);
    }
    public oC_PatternElementChain__list(): OC_PatternElementChainContext[] {
        return this.getTypedRuleContexts(OC_PatternElementChainContext);
    }
    public oC_PatternElementChain(i: number): OC_PatternElementChainContext {
        return this.getTypedRuleContext(OC_PatternElementChainContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_PatternElement(): OC_PatternElementContext {
        return this.getTypedRuleContext(OC_PatternElementContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PatternElement;
    }
}


export class OC_NodePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public oC_NodeLabels(): OC_NodeLabelsContext {
        return this.getTypedRuleContext(OC_NodeLabelsContext, 0);
    }
    public kU_Properties(): KU_PropertiesContext {
        return this.getTypedRuleContext(KU_PropertiesContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_NodePattern;
    }
}


export class OC_PatternElementChainContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_RelationshipPattern(): OC_RelationshipPatternContext {
        return this.getTypedRuleContext(OC_RelationshipPatternContext, 0);
    }
    public oC_NodePattern(): OC_NodePatternContext {
        return this.getTypedRuleContext(OC_NodePatternContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PatternElementChain;
    }
}


export class OC_RelationshipPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_LeftArrowHead(): OC_LeftArrowHeadContext {
        return this.getTypedRuleContext(OC_LeftArrowHeadContext, 0);
    }
    public oC_Dash__list(): OC_DashContext[] {
        return this.getTypedRuleContexts(OC_DashContext);
    }
    public oC_Dash(i: number): OC_DashContext {
        return this.getTypedRuleContext(OC_DashContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_RelationshipDetail(): OC_RelationshipDetailContext {
        return this.getTypedRuleContext(OC_RelationshipDetailContext, 0);
    }
    public oC_RightArrowHead(): OC_RightArrowHeadContext {
        return this.getTypedRuleContext(OC_RightArrowHeadContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RelationshipPattern;
    }
}


export class OC_RelationshipDetailContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public oC_RelationshipTypes(): OC_RelationshipTypesContext {
        return this.getTypedRuleContext(OC_RelationshipTypesContext, 0);
    }
    public oC_RangeLiteral(): OC_RangeLiteralContext {
        return this.getTypedRuleContext(OC_RangeLiteralContext, 0);
    }
    public kU_Properties(): KU_PropertiesContext {
        return this.getTypedRuleContext(KU_PropertiesContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RelationshipDetail;
    }
}


export class KU_PropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_PropertyKeyName__list(): OC_PropertyKeyNameContext[] {
        return this.getTypedRuleContexts(OC_PropertyKeyNameContext);
    }
    public oC_PropertyKeyName(i: number): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, i);
    }
    public COLON__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.COLON);
    }
    public COLON(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, i);
    }
    public oC_Expression__list(): OC_ExpressionContext[] {
        return this.getTypedRuleContexts(OC_ExpressionContext);
    }
    public oC_Expression(i: number): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Properties;
    }
}


export class OC_RelationshipTypesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.COLON);
    }
    public COLON(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, i);
    }
    public oC_RelTypeName__list(): OC_RelTypeNameContext[] {
        return this.getTypedRuleContexts(OC_RelTypeNameContext);
    }
    public oC_RelTypeName(i: number): OC_RelTypeNameContext {
        return this.getTypedRuleContext(OC_RelTypeNameContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RelationshipTypes;
    }
}


export class OC_NodeLabelsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_NodeLabel__list(): OC_NodeLabelContext[] {
        return this.getTypedRuleContexts(OC_NodeLabelContext);
    }
    public oC_NodeLabel(i: number): OC_NodeLabelContext {
        return this.getTypedRuleContext(OC_NodeLabelContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_NodeLabels;
    }
}


export class OC_NodeLabelContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, 0);
    }
    public oC_LabelName(): OC_LabelNameContext {
        return this.getTypedRuleContext(OC_LabelNameContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_NodeLabel;
    }
}


export class OC_RangeLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public SHORTEST(): antlr.TerminalNode {
        return this.getToken(CypherParser.SHORTEST, 0);
    }
    public ALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.ALL, 0);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public kU_RecursiveRelationshipComprehension(): KU_RecursiveRelationshipComprehensionContext {
        return this.getTypedRuleContext(KU_RecursiveRelationshipComprehensionContext, 0);
    }
    public oC_LowerBound(): OC_LowerBoundContext {
        return this.getTypedRuleContext(OC_LowerBoundContext, 0);
    }
    public oC_UpperBound(): OC_UpperBoundContext {
        return this.getTypedRuleContext(OC_UpperBoundContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RangeLiteral;
    }
}


export class KU_RecursiveRelationshipComprehensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Variable__list(): OC_VariableContext[] {
        return this.getTypedRuleContexts(OC_VariableContext);
    }
    public oC_Variable(i: number): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public kU_IntermediateRelProjectionItems(): KU_IntermediateRelProjectionItemsContext {
        return this.getTypedRuleContext(KU_IntermediateRelProjectionItemsContext, 0);
    }
    public kU_IntermediateNodeProjectionItems(): KU_IntermediateNodeProjectionItemsContext {
        return this.getTypedRuleContext(KU_IntermediateNodeProjectionItemsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_RecursiveRelationshipComprehension;
    }
}


export class KU_IntermediateNodeProjectionItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_ProjectionItems(): OC_ProjectionItemsContext {
        return this.getTypedRuleContext(OC_ProjectionItemsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_IntermediateNodeProjectionItems;
    }
}


export class KU_IntermediateRelProjectionItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_ProjectionItems(): OC_ProjectionItemsContext {
        return this.getTypedRuleContext(OC_ProjectionItemsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_IntermediateRelProjectionItems;
    }
}


export class OC_LowerBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DecimalInteger(): antlr.TerminalNode {
        return this.getToken(CypherParser.DecimalInteger, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_LowerBound;
    }
}


export class OC_UpperBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DecimalInteger(): antlr.TerminalNode {
        return this.getToken(CypherParser.DecimalInteger, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_UpperBound;
    }
}


export class OC_LabelNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_LabelName;
    }
}


export class OC_RelTypeNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RelTypeName;
    }
}


export class OC_ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_OrExpression(): OC_OrExpressionContext {
        return this.getTypedRuleContext(OC_OrExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Expression;
    }
}


export class OC_OrExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_XorExpression__list(): OC_XorExpressionContext[] {
        return this.getTypedRuleContexts(OC_XorExpressionContext);
    }
    public oC_XorExpression(i: number): OC_XorExpressionContext {
        return this.getTypedRuleContext(OC_XorExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public OR__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.OR);
    }
    public OR(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.OR, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_OrExpression;
    }
}


export class OC_XorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_AndExpression__list(): OC_AndExpressionContext[] {
        return this.getTypedRuleContexts(OC_AndExpressionContext);
    }
    public oC_AndExpression(i: number): OC_AndExpressionContext {
        return this.getTypedRuleContext(OC_AndExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public XOR__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.XOR);
    }
    public XOR(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.XOR, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_XorExpression;
    }
}


export class OC_AndExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_NotExpression__list(): OC_NotExpressionContext[] {
        return this.getTypedRuleContexts(OC_NotExpressionContext);
    }
    public oC_NotExpression(i: number): OC_NotExpressionContext {
        return this.getTypedRuleContext(OC_NotExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public AND__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.AND);
    }
    public AND(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.AND, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_AndExpression;
    }
}


export class OC_NotExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_ComparisonExpression(): OC_ComparisonExpressionContext {
        return this.getTypedRuleContext(OC_ComparisonExpressionContext, 0);
    }
    public NOT__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.NOT);
    }
    public NOT(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.NOT, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_NotExpression;
    }
}


export class OC_ComparisonExpressionContext extends antlr.ParserRuleContext {
    public _INVALID_NOT_EQUAL!: Token;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_BitwiseOrOperatorExpression__list(): KU_BitwiseOrOperatorExpressionContext[] {
        return this.getTypedRuleContexts(KU_BitwiseOrOperatorExpressionContext);
    }
    public kU_BitwiseOrOperatorExpression(i: number): KU_BitwiseOrOperatorExpressionContext {
        return this.getTypedRuleContext(KU_BitwiseOrOperatorExpressionContext, i);
    }
    public kU_ComparisonOperator__list(): KU_ComparisonOperatorContext[] {
        return this.getTypedRuleContexts(KU_ComparisonOperatorContext);
    }
    public kU_ComparisonOperator(i: number): KU_ComparisonOperatorContext {
        return this.getTypedRuleContext(KU_ComparisonOperatorContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public INVALID_NOT_EQUAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.INVALID_NOT_EQUAL, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ComparisonExpression;
    }
}


export class KU_ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ComparisonOperator;
    }
}


export class KU_BitwiseOrOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_BitwiseAndOperatorExpression__list(): KU_BitwiseAndOperatorExpressionContext[] {
        return this.getTypedRuleContexts(KU_BitwiseAndOperatorExpressionContext);
    }
    public kU_BitwiseAndOperatorExpression(i: number): KU_BitwiseAndOperatorExpressionContext {
        return this.getTypedRuleContext(KU_BitwiseAndOperatorExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_BitwiseOrOperatorExpression;
    }
}


export class KU_BitwiseAndOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_BitShiftOperatorExpression__list(): KU_BitShiftOperatorExpressionContext[] {
        return this.getTypedRuleContexts(KU_BitShiftOperatorExpressionContext);
    }
    public kU_BitShiftOperatorExpression(i: number): KU_BitShiftOperatorExpressionContext {
        return this.getTypedRuleContext(KU_BitShiftOperatorExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_BitwiseAndOperatorExpression;
    }
}


export class KU_BitShiftOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_AddOrSubtractExpression__list(): OC_AddOrSubtractExpressionContext[] {
        return this.getTypedRuleContexts(OC_AddOrSubtractExpressionContext);
    }
    public oC_AddOrSubtractExpression(i: number): OC_AddOrSubtractExpressionContext {
        return this.getTypedRuleContext(OC_AddOrSubtractExpressionContext, i);
    }
    public kU_BitShiftOperator__list(): KU_BitShiftOperatorContext[] {
        return this.getTypedRuleContexts(KU_BitShiftOperatorContext);
    }
    public kU_BitShiftOperator(i: number): KU_BitShiftOperatorContext {
        return this.getTypedRuleContext(KU_BitShiftOperatorContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_BitShiftOperatorExpression;
    }
}


export class KU_BitShiftOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_BitShiftOperator;
    }
}


export class OC_AddOrSubtractExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_MultiplyDivideModuloExpression__list(): OC_MultiplyDivideModuloExpressionContext[] {
        return this.getTypedRuleContexts(OC_MultiplyDivideModuloExpressionContext);
    }
    public oC_MultiplyDivideModuloExpression(i: number): OC_MultiplyDivideModuloExpressionContext {
        return this.getTypedRuleContext(OC_MultiplyDivideModuloExpressionContext, i);
    }
    public kU_AddOrSubtractOperator__list(): KU_AddOrSubtractOperatorContext[] {
        return this.getTypedRuleContexts(KU_AddOrSubtractOperatorContext);
    }
    public kU_AddOrSubtractOperator(i: number): KU_AddOrSubtractOperatorContext {
        return this.getTypedRuleContext(KU_AddOrSubtractOperatorContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_AddOrSubtractExpression;
    }
}


export class KU_AddOrSubtractOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AddOrSubtractOperator;
    }
}


export class OC_MultiplyDivideModuloExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PowerOfExpression__list(): OC_PowerOfExpressionContext[] {
        return this.getTypedRuleContexts(OC_PowerOfExpressionContext);
    }
    public oC_PowerOfExpression(i: number): OC_PowerOfExpressionContext {
        return this.getTypedRuleContext(OC_PowerOfExpressionContext, i);
    }
    public kU_MultiplyDivideModuloOperator__list(): KU_MultiplyDivideModuloOperatorContext[] {
        return this.getTypedRuleContexts(KU_MultiplyDivideModuloOperatorContext);
    }
    public kU_MultiplyDivideModuloOperator(i: number): KU_MultiplyDivideModuloOperatorContext {
        return this.getTypedRuleContext(KU_MultiplyDivideModuloOperatorContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_MultiplyDivideModuloExpression;
    }
}


export class KU_MultiplyDivideModuloOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_MultiplyDivideModuloOperator;
    }
}


export class OC_PowerOfExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_UnaryAddSubtractOrFactorialExpression__list(): OC_UnaryAddSubtractOrFactorialExpressionContext[] {
        return this.getTypedRuleContexts(OC_UnaryAddSubtractOrFactorialExpressionContext);
    }
    public oC_UnaryAddSubtractOrFactorialExpression(i: number): OC_UnaryAddSubtractOrFactorialExpressionContext {
        return this.getTypedRuleContext(OC_UnaryAddSubtractOrFactorialExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PowerOfExpression;
    }
}


export class OC_UnaryAddSubtractOrFactorialExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_StringListNullOperatorExpression(): OC_StringListNullOperatorExpressionContext {
        return this.getTypedRuleContext(OC_StringListNullOperatorExpressionContext, 0);
    }
    public MINUS__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.MINUS);
    }
    public MINUS(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, i);
    }
    public FACTORIAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.FACTORIAL, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression;
    }
}


export class OC_StringListNullOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
        return this.getTypedRuleContext(OC_PropertyOrLabelsExpressionContext, 0);
    }
    public oC_StringOperatorExpression(): OC_StringOperatorExpressionContext {
        return this.getTypedRuleContext(OC_StringOperatorExpressionContext, 0);
    }
    public oC_NullOperatorExpression(): OC_NullOperatorExpressionContext {
        return this.getTypedRuleContext(OC_NullOperatorExpressionContext, 0);
    }
    public oC_ListOperatorExpression__list(): OC_ListOperatorExpressionContext[] {
        return this.getTypedRuleContexts(OC_ListOperatorExpressionContext);
    }
    public oC_ListOperatorExpression(i: number): OC_ListOperatorExpressionContext {
        return this.getTypedRuleContext(OC_ListOperatorExpressionContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_StringListNullOperatorExpression;
    }
}


export class OC_ListOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(CypherParser.IN, 0);
    }
    public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
        return this.getTypedRuleContext(OC_PropertyOrLabelsExpressionContext, 0);
    }
    public oC_Expression__list(): OC_ExpressionContext[] {
        return this.getTypedRuleContexts(OC_ExpressionContext);
    }
    public oC_Expression(i: number): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, i);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ListOperatorExpression;
    }
}


export class OC_StringOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
        return this.getTypedRuleContext(OC_PropertyOrLabelsExpressionContext, 0);
    }
    public oC_RegularExpression(): OC_RegularExpressionContext {
        return this.getTypedRuleContext(OC_RegularExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public STARTS(): antlr.TerminalNode {
        return this.getToken(CypherParser.STARTS, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public ENDS(): antlr.TerminalNode {
        return this.getToken(CypherParser.ENDS, 0);
    }
    public CONTAINS(): antlr.TerminalNode {
        return this.getToken(CypherParser.CONTAINS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_StringOperatorExpression;
    }
}


export class OC_RegularExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RegularExpression;
    }
}


export class OC_NullOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(CypherParser.IS, 0);
    }
    public NULL_(): antlr.TerminalNode {
        return this.getToken(CypherParser.NULL_, 0);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(CypherParser.NOT, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_NullOperatorExpression;
    }
}


export class OC_PropertyOrLabelsExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Atom(): OC_AtomContext {
        return this.getTypedRuleContext(OC_AtomContext, 0);
    }
    public oC_PropertyLookup__list(): OC_PropertyLookupContext[] {
        return this.getTypedRuleContexts(OC_PropertyLookupContext);
    }
    public oC_PropertyLookup(i: number): OC_PropertyLookupContext {
        return this.getTypedRuleContext(OC_PropertyLookupContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PropertyOrLabelsExpression;
    }
}


export class OC_AtomContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Literal(): OC_LiteralContext {
        return this.getTypedRuleContext(OC_LiteralContext, 0);
    }
    public oC_Parameter(): OC_ParameterContext {
        return this.getTypedRuleContext(OC_ParameterContext, 0);
    }
    public oC_CaseExpression(): OC_CaseExpressionContext {
        return this.getTypedRuleContext(OC_CaseExpressionContext, 0);
    }
    public oC_ParenthesizedExpression(): OC_ParenthesizedExpressionContext {
        return this.getTypedRuleContext(OC_ParenthesizedExpressionContext, 0);
    }
    public oC_FunctionInvocation(): OC_FunctionInvocationContext {
        return this.getTypedRuleContext(OC_FunctionInvocationContext, 0);
    }
    public oC_PathPatterns(): OC_PathPatternsContext {
        return this.getTypedRuleContext(OC_PathPatternsContext, 0);
    }
    public oC_ExistSubquery(): OC_ExistSubqueryContext {
        return this.getTypedRuleContext(OC_ExistSubqueryContext, 0);
    }
    public kU_CountSubquery(): KU_CountSubqueryContext {
        return this.getTypedRuleContext(KU_CountSubqueryContext, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Atom;
    }
}


export class OC_LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_NumberLiteral(): OC_NumberLiteralContext {
        return this.getTypedRuleContext(OC_NumberLiteralContext, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public oC_BooleanLiteral(): OC_BooleanLiteralContext {
        return this.getTypedRuleContext(OC_BooleanLiteralContext, 0);
    }
    public NULL_(): antlr.TerminalNode {
        return this.getToken(CypherParser.NULL_, 0);
    }
    public oC_ListLiteral(): OC_ListLiteralContext {
        return this.getTypedRuleContext(OC_ListLiteralContext, 0);
    }
    public kU_StructLiteral(): KU_StructLiteralContext {
        return this.getTypedRuleContext(KU_StructLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Literal;
    }
}


export class OC_BooleanLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRUE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode {
        return this.getToken(CypherParser.FALSE, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_BooleanLiteral;
    }
}


export class OC_ListLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public kU_ListEntry__list(): KU_ListEntryContext[] {
        return this.getTypedRuleContexts(KU_ListEntryContext);
    }
    public kU_ListEntry(i: number): KU_ListEntryContext {
        return this.getTypedRuleContext(KU_ListEntryContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ListLiteral;
    }
}


export class KU_ListEntryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ListEntry;
    }
}


export class KU_StructLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_StructField__list(): KU_StructFieldContext[] {
        return this.getTypedRuleContexts(KU_StructFieldContext);
    }
    public kU_StructField(i: number): KU_StructFieldContext {
        return this.getTypedRuleContext(KU_StructFieldContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_StructLiteral;
    }
}


export class KU_StructFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_StructField;
    }
}


export class OC_ParenthesizedExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ParenthesizedExpression;
    }
}


export class OC_FunctionInvocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COUNT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COUNT, 0);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_FunctionName(): OC_FunctionNameContext {
        return this.getTypedRuleContext(OC_FunctionNameContext, 0);
    }
    public DISTINCT(): antlr.TerminalNode {
        return this.getToken(CypherParser.DISTINCT, 0);
    }
    public kU_FunctionParameter__list(): KU_FunctionParameterContext[] {
        return this.getTypedRuleContexts(KU_FunctionParameterContext);
    }
    public kU_FunctionParameter(i: number): KU_FunctionParameterContext {
        return this.getTypedRuleContext(KU_FunctionParameterContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_FunctionInvocation;
    }
}


export class OC_FunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_FunctionName;
    }
}


export class KU_FunctionParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_FunctionParameter;
    }
}


export class OC_PathPatternsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_NodePattern(): OC_NodePatternContext {
        return this.getTypedRuleContext(OC_NodePatternContext, 0);
    }
    public oC_PatternElementChain__list(): OC_PatternElementChainContext[] {
        return this.getTypedRuleContexts(OC_PatternElementChainContext);
    }
    public oC_PatternElementChain(i: number): OC_PatternElementChainContext {
        return this.getTypedRuleContext(OC_PatternElementChainContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PathPatterns;
    }
}


export class OC_ExistSubqueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXISTS, 0);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(CypherParser.MATCH, 0);
    }
    public oC_Pattern(): OC_PatternContext {
        return this.getTypedRuleContext(OC_PatternContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ExistSubquery;
    }
}


export class KU_CountSubqueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COUNT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COUNT, 0);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(CypherParser.MATCH, 0);
    }
    public oC_Pattern(): OC_PatternContext {
        return this.getTypedRuleContext(OC_PatternContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CountSubquery;
    }
}


export class OC_PropertyLookupContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PropertyLookup;
    }
}


export class OC_CaseExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public END(): antlr.TerminalNode {
        return this.getToken(CypherParser.END, 0);
    }
    public ELSE(): antlr.TerminalNode {
        return this.getToken(CypherParser.ELSE, 0);
    }
    public oC_Expression__list(): OC_ExpressionContext[] {
        return this.getTypedRuleContexts(OC_ExpressionContext);
    }
    public oC_Expression(i: number): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public CASE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CASE, 0);
    }
    public oC_CaseAlternative__list(): OC_CaseAlternativeContext[] {
        return this.getTypedRuleContexts(OC_CaseAlternativeContext);
    }
    public oC_CaseAlternative(i: number): OC_CaseAlternativeContext {
        return this.getTypedRuleContext(OC_CaseAlternativeContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_CaseExpression;
    }
}


export class OC_CaseAlternativeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHEN(): antlr.TerminalNode {
        return this.getToken(CypherParser.WHEN, 0);
    }
    public oC_Expression__list(): OC_ExpressionContext[] {
        return this.getTypedRuleContexts(OC_ExpressionContext);
    }
    public oC_Expression(i: number): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, i);
    }
    public THEN(): antlr.TerminalNode {
        return this.getToken(CypherParser.THEN, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_CaseAlternative;
    }
}


export class OC_VariableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Variable;
    }
}


export class OC_NumberLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_DoubleLiteral(): OC_DoubleLiteralContext {
        return this.getTypedRuleContext(OC_DoubleLiteralContext, 0);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_NumberLiteral;
    }
}


export class OC_ParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public DecimalInteger(): antlr.TerminalNode {
        return this.getToken(CypherParser.DecimalInteger, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Parameter;
    }
}


export class OC_PropertyExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Atom(): OC_AtomContext {
        return this.getTypedRuleContext(OC_AtomContext, 0);
    }
    public oC_PropertyLookup(): OC_PropertyLookupContext {
        return this.getTypedRuleContext(OC_PropertyLookupContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PropertyExpression;
    }
}


export class OC_PropertyKeyNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PropertyKeyName;
    }
}


export class OC_IntegerLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DecimalInteger(): antlr.TerminalNode {
        return this.getToken(CypherParser.DecimalInteger, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_IntegerLiteral;
    }
}


export class OC_DoubleLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RegularDecimalReal(): antlr.TerminalNode {
        return this.getToken(CypherParser.RegularDecimalReal, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_DoubleLiteral;
    }
}


export class OC_SchemaNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SchemaName;
    }
}


export class OC_SymbolicNameContext extends antlr.ParserRuleContext {
    public _EscapedSymbolicName!: Token;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UnescapedSymbolicName(): antlr.TerminalNode {
        return this.getToken(CypherParser.UnescapedSymbolicName, 0);
    }
    public EscapedSymbolicName(): antlr.TerminalNode {
        return this.getToken(CypherParser.EscapedSymbolicName, 0);
    }
    public HexLetter(): antlr.TerminalNode {
        return this.getToken(CypherParser.HexLetter, 0);
    }
    public kU_NonReservedKeywords(): KU_NonReservedKeywordsContext {
        return this.getTypedRuleContext(KU_NonReservedKeywordsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SymbolicName;
    }
}


export class KU_NonReservedKeywordsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMENT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COMMENT, 0);
    }
    public COUNT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COUNT, 0);
    }
    public NODE(): antlr.TerminalNode {
        return this.getToken(CypherParser.NODE, 0);
    }
    public REL(): antlr.TerminalNode {
        return this.getToken(CypherParser.REL, 0);
    }
    public BEGIN(): antlr.TerminalNode {
        return this.getToken(CypherParser.BEGIN, 0);
    }
    public END(): antlr.TerminalNode {
        return this.getToken(CypherParser.END, 0);
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(CypherParser.IN, 0);
    }
    public EXPORT(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXPORT, 0);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DATABASE, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_NonReservedKeywords;
    }
}


export class OC_LeftArrowHeadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_LeftArrowHead;
    }
}


export class OC_RightArrowHeadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RightArrowHead;
    }
}


export class OC_DashContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Dash;
    }
}

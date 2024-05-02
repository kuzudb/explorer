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
    public static readonly ATTACH = 46;
    public static readonly DBTYPE = 47;
    public static readonly USE = 48;
    public static readonly CALL = 49;
    public static readonly COMMENT_ = 50;
    public static readonly MACRO = 51;
    public static readonly GLOB = 52;
    public static readonly COPY = 53;
    public static readonly FROM = 54;
    public static readonly COLUMN = 55;
    public static readonly EXPORT = 56;
    public static readonly IMPORT = 57;
    public static readonly DATABASE = 58;
    public static readonly NODE = 59;
    public static readonly TABLE = 60;
    public static readonly GROUP = 61;
    public static readonly RDFGRAPH = 62;
    public static readonly DROP = 63;
    public static readonly ALTER = 64;
    public static readonly DEFAULT = 65;
    public static readonly RENAME = 66;
    public static readonly ADD = 67;
    public static readonly PRIMARY = 68;
    public static readonly KEY = 69;
    public static readonly REL = 70;
    public static readonly TO = 71;
    public static readonly EXPLAIN = 72;
    public static readonly PROFILE = 73;
    public static readonly BEGIN = 74;
    public static readonly TRANSACTION = 75;
    public static readonly READ = 76;
    public static readonly ONLY = 77;
    public static readonly WRITE = 78;
    public static readonly COMMIT = 79;
    public static readonly COMMIT_SKIP_CHECKPOINT = 80;
    public static readonly ROLLBACK = 81;
    public static readonly ROLLBACK_SKIP_CHECKPOINT = 82;
    public static readonly INSTALL = 83;
    public static readonly EXTENSION = 84;
    public static readonly UNION = 85;
    public static readonly ALL = 86;
    public static readonly LOAD = 87;
    public static readonly HEADERS = 88;
    public static readonly OPTIONAL = 89;
    public static readonly MATCH = 90;
    public static readonly UNWIND = 91;
    public static readonly CREATE = 92;
    public static readonly MERGE = 93;
    public static readonly ON = 94;
    public static readonly SET = 95;
    public static readonly DETACH = 96;
    public static readonly DELETE = 97;
    public static readonly WITH = 98;
    public static readonly RETURN = 99;
    public static readonly DISTINCT = 100;
    public static readonly STAR = 101;
    public static readonly AS = 102;
    public static readonly ORDER = 103;
    public static readonly BY = 104;
    public static readonly L_SKIP = 105;
    public static readonly LIMIT = 106;
    public static readonly ASCENDING = 107;
    public static readonly ASC = 108;
    public static readonly DESCENDING = 109;
    public static readonly DESC = 110;
    public static readonly WHERE = 111;
    public static readonly SHORTEST = 112;
    public static readonly OR = 113;
    public static readonly XOR = 114;
    public static readonly AND = 115;
    public static readonly NOT = 116;
    public static readonly INVALID_NOT_EQUAL = 117;
    public static readonly MINUS = 118;
    public static readonly FACTORIAL = 119;
    public static readonly COLON = 120;
    public static readonly IN = 121;
    public static readonly STARTS = 122;
    public static readonly ENDS = 123;
    public static readonly CONTAINS = 124;
    public static readonly IS = 125;
    public static readonly NULL_ = 126;
    public static readonly TRUE = 127;
    public static readonly FALSE = 128;
    public static readonly COUNT = 129;
    public static readonly EXISTS = 130;
    public static readonly CASE = 131;
    public static readonly ELSE = 132;
    public static readonly END = 133;
    public static readonly WHEN = 134;
    public static readonly THEN = 135;
    public static readonly StringLiteral = 136;
    public static readonly EscapedChar = 137;
    public static readonly DecimalInteger = 138;
    public static readonly HexLetter = 139;
    public static readonly HexDigit = 140;
    public static readonly Digit = 141;
    public static readonly NonZeroDigit = 142;
    public static readonly NonZeroOctDigit = 143;
    public static readonly ZeroDigit = 144;
    public static readonly RegularDecimalReal = 145;
    public static readonly UnescapedSymbolicName = 146;
    public static readonly IdentifierStart = 147;
    public static readonly IdentifierPart = 148;
    public static readonly EscapedSymbolicName = 149;
    public static readonly SP = 150;
    public static readonly WHITESPACE = 151;
    public static readonly Comment = 152;
    public static readonly Unknown = 153;
    public static readonly RULE_ku_Statements = 0;
    public static readonly RULE_oC_Cypher = 1;
    public static readonly RULE_oC_Statement = 2;
    public static readonly RULE_kU_CopyFrom = 3;
    public static readonly RULE_kU_ColumnNames = 4;
    public static readonly RULE_kU_ScanSource = 5;
    public static readonly RULE_kU_CopyFromByColumn = 6;
    public static readonly RULE_kU_CopyTO = 7;
    public static readonly RULE_kU_ExportDatabase = 8;
    public static readonly RULE_kU_ImportDatabase = 9;
    public static readonly RULE_kU_AttachDatabase = 10;
    public static readonly RULE_kU_DetachDatabase = 11;
    public static readonly RULE_kU_UseDatabase = 12;
    public static readonly RULE_kU_StandaloneCall = 13;
    public static readonly RULE_kU_CommentOn = 14;
    public static readonly RULE_kU_CreateMacro = 15;
    public static readonly RULE_kU_PositionalArgs = 16;
    public static readonly RULE_kU_DefaultArg = 17;
    public static readonly RULE_kU_FilePaths = 18;
    public static readonly RULE_kU_ParsingOptions = 19;
    public static readonly RULE_kU_ParsingOption = 20;
    public static readonly RULE_kU_CreateNodeTable = 21;
    public static readonly RULE_kU_CreateRelTable = 22;
    public static readonly RULE_kU_CreateRelTableGroup = 23;
    public static readonly RULE_kU_RelTableConnection = 24;
    public static readonly RULE_kU_CreateRdfGraph = 25;
    public static readonly RULE_kU_DropTable = 26;
    public static readonly RULE_kU_AlterTable = 27;
    public static readonly RULE_kU_AlterOptions = 28;
    public static readonly RULE_kU_AddProperty = 29;
    public static readonly RULE_kU_DropProperty = 30;
    public static readonly RULE_kU_RenameTable = 31;
    public static readonly RULE_kU_RenameProperty = 32;
    public static readonly RULE_kU_PropertyDefinitions = 33;
    public static readonly RULE_kU_PropertyDefinition = 34;
    public static readonly RULE_kU_CreateNodeConstraint = 35;
    public static readonly RULE_kU_DataType = 36;
    public static readonly RULE_kU_ListIdentifiers = 37;
    public static readonly RULE_kU_ListIdentifier = 38;
    public static readonly RULE_oC_AnyCypherOption = 39;
    public static readonly RULE_oC_Explain = 40;
    public static readonly RULE_oC_Profile = 41;
    public static readonly RULE_kU_Transaction = 42;
    public static readonly RULE_kU_Extension = 43;
    public static readonly RULE_kU_LoadExtension = 44;
    public static readonly RULE_kU_InstallExtension = 45;
    public static readonly RULE_oC_Query = 46;
    public static readonly RULE_oC_RegularQuery = 47;
    public static readonly RULE_oC_Union = 48;
    public static readonly RULE_oC_SingleQuery = 49;
    public static readonly RULE_oC_SinglePartQuery = 50;
    public static readonly RULE_oC_MultiPartQuery = 51;
    public static readonly RULE_kU_QueryPart = 52;
    public static readonly RULE_oC_UpdatingClause = 53;
    public static readonly RULE_oC_ReadingClause = 54;
    public static readonly RULE_kU_LoadFrom = 55;
    public static readonly RULE_kU_InQueryCall = 56;
    public static readonly RULE_oC_Match = 57;
    public static readonly RULE_oC_Unwind = 58;
    public static readonly RULE_oC_Create = 59;
    public static readonly RULE_oC_Merge = 60;
    public static readonly RULE_oC_MergeAction = 61;
    public static readonly RULE_oC_Set = 62;
    public static readonly RULE_oC_SetItem = 63;
    public static readonly RULE_oC_Delete = 64;
    public static readonly RULE_oC_With = 65;
    public static readonly RULE_oC_Return = 66;
    public static readonly RULE_oC_ProjectionBody = 67;
    public static readonly RULE_oC_ProjectionItems = 68;
    public static readonly RULE_oC_ProjectionItem = 69;
    public static readonly RULE_oC_Order = 70;
    public static readonly RULE_oC_Skip = 71;
    public static readonly RULE_oC_Limit = 72;
    public static readonly RULE_oC_SortItem = 73;
    public static readonly RULE_oC_Where = 74;
    public static readonly RULE_oC_Pattern = 75;
    public static readonly RULE_oC_PatternPart = 76;
    public static readonly RULE_oC_AnonymousPatternPart = 77;
    public static readonly RULE_oC_PatternElement = 78;
    public static readonly RULE_oC_NodePattern = 79;
    public static readonly RULE_oC_PatternElementChain = 80;
    public static readonly RULE_oC_RelationshipPattern = 81;
    public static readonly RULE_oC_RelationshipDetail = 82;
    public static readonly RULE_kU_Properties = 83;
    public static readonly RULE_oC_RelationshipTypes = 84;
    public static readonly RULE_oC_NodeLabels = 85;
    public static readonly RULE_oC_NodeLabel = 86;
    public static readonly RULE_oC_RangeLiteral = 87;
    public static readonly RULE_kU_RecursiveRelationshipComprehension = 88;
    public static readonly RULE_kU_IntermediateNodeProjectionItems = 89;
    public static readonly RULE_kU_IntermediateRelProjectionItems = 90;
    public static readonly RULE_oC_LowerBound = 91;
    public static readonly RULE_oC_UpperBound = 92;
    public static readonly RULE_oC_LabelName = 93;
    public static readonly RULE_oC_RelTypeName = 94;
    public static readonly RULE_oC_Expression = 95;
    public static readonly RULE_oC_OrExpression = 96;
    public static readonly RULE_oC_XorExpression = 97;
    public static readonly RULE_oC_AndExpression = 98;
    public static readonly RULE_oC_NotExpression = 99;
    public static readonly RULE_oC_ComparisonExpression = 100;
    public static readonly RULE_kU_ComparisonOperator = 101;
    public static readonly RULE_kU_BitwiseOrOperatorExpression = 102;
    public static readonly RULE_kU_BitwiseAndOperatorExpression = 103;
    public static readonly RULE_kU_BitShiftOperatorExpression = 104;
    public static readonly RULE_kU_BitShiftOperator = 105;
    public static readonly RULE_oC_AddOrSubtractExpression = 106;
    public static readonly RULE_kU_AddOrSubtractOperator = 107;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 108;
    public static readonly RULE_kU_MultiplyDivideModuloOperator = 109;
    public static readonly RULE_oC_PowerOfExpression = 110;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 111;
    public static readonly RULE_oC_StringListNullOperatorExpression = 112;
    public static readonly RULE_oC_ListOperatorExpression = 113;
    public static readonly RULE_oC_StringOperatorExpression = 114;
    public static readonly RULE_oC_RegularExpression = 115;
    public static readonly RULE_oC_NullOperatorExpression = 116;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 117;
    public static readonly RULE_oC_Atom = 118;
    public static readonly RULE_oC_Literal = 119;
    public static readonly RULE_oC_BooleanLiteral = 120;
    public static readonly RULE_oC_ListLiteral = 121;
    public static readonly RULE_kU_ListEntry = 122;
    public static readonly RULE_kU_StructLiteral = 123;
    public static readonly RULE_kU_StructField = 124;
    public static readonly RULE_oC_ParenthesizedExpression = 125;
    public static readonly RULE_oC_FunctionInvocation = 126;
    public static readonly RULE_oC_FunctionName = 127;
    public static readonly RULE_kU_FunctionParameter = 128;
    public static readonly RULE_oC_PathPatterns = 129;
    public static readonly RULE_oC_ExistSubquery = 130;
    public static readonly RULE_kU_CountSubquery = 131;
    public static readonly RULE_oC_PropertyLookup = 132;
    public static readonly RULE_oC_CaseExpression = 133;
    public static readonly RULE_oC_CaseAlternative = 134;
    public static readonly RULE_oC_Variable = 135;
    public static readonly RULE_oC_NumberLiteral = 136;
    public static readonly RULE_oC_Parameter = 137;
    public static readonly RULE_oC_PropertyExpression = 138;
    public static readonly RULE_oC_PropertyKeyName = 139;
    public static readonly RULE_oC_IntegerLiteral = 140;
    public static readonly RULE_oC_DoubleLiteral = 141;
    public static readonly RULE_oC_SchemaName = 142;
    public static readonly RULE_oC_SymbolicName = 143;
    public static readonly RULE_kU_NonReservedKeywords = 144;
    public static readonly RULE_oC_LeftArrowHead = 145;
    public static readonly RULE_oC_RightArrowHead = 146;
    public static readonly RULE_oC_Dash = 147;

    public static readonly literalNames = [
        null, "';'", "'('", "','", "')'", "'.'", "'='", "'['", "']'", "'{'", 
        "'}'", "'|'", "'..'", "'<>'", "'<'", "'<='", "'>'", "'>='", "'&'", 
        "'>>'", "'<<'", "'+'", "'/'", "'%'", "'^'", "'=~'", "'$'", "'\\u27E8'", 
        "'\\u3008'", "'\\uFE64'", "'\\uFF1C'", "'\\u27E9'", "'\\u3009'", 
        "'\\uFE65'", "'\\uFF1E'", "'\\u00AD'", "'\\u2010'", "'\\u2011'", 
        "'\\u2012'", "'\\u2013'", "'\\u2014'", "'\\u2015'", "'\\u2212'", 
        "'\\uFE58'", "'\\uFE63'", "'\\uFF0D'", null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "'*'", null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        "'!='", "'-'", "'!'", "':'", null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "'0'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "ATTACH", "DBTYPE", "USE", "CALL", "COMMENT_", "MACRO", 
        "GLOB", "COPY", "FROM", "COLUMN", "EXPORT", "IMPORT", "DATABASE", 
        "NODE", "TABLE", "GROUP", "RDFGRAPH", "DROP", "ALTER", "DEFAULT", 
        "RENAME", "ADD", "PRIMARY", "KEY", "REL", "TO", "EXPLAIN", "PROFILE", 
        "BEGIN", "TRANSACTION", "READ", "ONLY", "WRITE", "COMMIT", "COMMIT_SKIP_CHECKPOINT", 
        "ROLLBACK", "ROLLBACK_SKIP_CHECKPOINT", "INSTALL", "EXTENSION", 
        "UNION", "ALL", "LOAD", "HEADERS", "OPTIONAL", "MATCH", "UNWIND", 
        "CREATE", "MERGE", "ON", "SET", "DETACH", "DELETE", "WITH", "RETURN", 
        "DISTINCT", "STAR", "AS", "ORDER", "BY", "L_SKIP", "LIMIT", "ASCENDING", 
        "ASC", "DESCENDING", "DESC", "WHERE", "SHORTEST", "OR", "XOR", "AND", 
        "NOT", "INVALID_NOT_EQUAL", "MINUS", "FACTORIAL", "COLON", "IN", 
        "STARTS", "ENDS", "CONTAINS", "IS", "NULL_", "TRUE", "FALSE", "COUNT", 
        "EXISTS", "CASE", "ELSE", "END", "WHEN", "THEN", "StringLiteral", 
        "EscapedChar", "DecimalInteger", "HexLetter", "HexDigit", "Digit", 
        "NonZeroDigit", "NonZeroOctDigit", "ZeroDigit", "RegularDecimalReal", 
        "UnescapedSymbolicName", "IdentifierStart", "IdentifierPart", "EscapedSymbolicName", 
        "SP", "WHITESPACE", "Comment", "Unknown"
    ];
    public static readonly ruleNames = [
        "ku_Statements", "oC_Cypher", "oC_Statement", "kU_CopyFrom", "kU_ColumnNames", 
        "kU_ScanSource", "kU_CopyFromByColumn", "kU_CopyTO", "kU_ExportDatabase", 
        "kU_ImportDatabase", "kU_AttachDatabase", "kU_DetachDatabase", "kU_UseDatabase", 
        "kU_StandaloneCall", "kU_CommentOn", "kU_CreateMacro", "kU_PositionalArgs", 
        "kU_DefaultArg", "kU_FilePaths", "kU_ParsingOptions", "kU_ParsingOption", 
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
            this.state = 296;
            this.oC_Cypher();
            this.state = 307;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 298;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 297;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 300;
                    this.match(CypherParser.T__0);
                    this.state = 302;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                    case 1:
                        {
                        this.state = 301;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    this.state = 304;
                    this.oC_Cypher();
                    }
                    }
                }
                this.state = 309;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            }
            this.state = 311;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 310;
                this.match(CypherParser.SP);
                }
            }

            this.state = 313;
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
            this.state = 316;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===72 || _la===73) {
                {
                this.state = 315;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 319;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 318;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 321;
            this.oC_Statement();
            }
            this.state = 326;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
            case 1:
                {
                this.state = 323;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 322;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 325;
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
            this.state = 348;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 328;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 329;
                this.kU_CreateNodeTable();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 330;
                this.kU_CreateRelTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 331;
                this.kU_CreateRelTableGroup();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 332;
                this.kU_CreateRdfGraph();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 333;
                this.kU_DropTable();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 334;
                this.kU_AlterTable();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 335;
                this.kU_CopyFrom();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 336;
                this.kU_CopyFromByColumn();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 337;
                this.kU_CopyTO();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 338;
                this.kU_StandaloneCall();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 339;
                this.kU_CreateMacro();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 340;
                this.kU_CommentOn();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 341;
                this.kU_Transaction();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 342;
                this.kU_Extension();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 343;
                this.kU_ExportDatabase();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 344;
                this.kU_ImportDatabase();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 345;
                this.kU_AttachDatabase();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 346;
                this.kU_DetachDatabase();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 347;
                this.kU_UseDatabase();
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
            this.state = 350;
            this.match(CypherParser.COPY);
            this.state = 351;
            this.match(CypherParser.SP);
            this.state = 352;
            this.oC_SchemaName();
            this.state = 361;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                {
                {
                this.state = 354;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 353;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 356;
                this.kU_ColumnNames();
                this.state = 358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 357;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                break;
            case 2:
                {
                this.state = 360;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 363;
            this.match(CypherParser.FROM);
            this.state = 364;
            this.match(CypherParser.SP);
            this.state = 365;
            this.kU_ScanSource();
            this.state = 370;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                {
                this.state = 367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 366;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 369;
                this.kU_ParsingOptions();
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
            this.state = 372;
            this.match(CypherParser.T__1);
            this.state = 374;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 373;
                this.match(CypherParser.SP);
                }
            }

            this.state = 376;
            this.oC_SchemaName();
            this.state = 387;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 378;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 377;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 380;
                    this.match(CypherParser.T__2);
                    this.state = 382;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 381;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 384;
                    this.oC_SchemaName();
                    }
                    }
                }
                this.state = 389;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            }
            this.state = 391;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 390;
                this.match(CypherParser.SP);
                }
            }

            this.state = 393;
            this.match(CypherParser.T__3);
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
    public kU_ScanSource(): KU_ScanSourceContext {
        let localctx: KU_ScanSourceContext = new KU_ScanSourceContext(this._ctx, this.state);
        this.enterRule(localctx, 10, CypherParser.RULE_kU_ScanSource);
        let _la: number;
        try {
            this.state = 414;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 395;
                this.kU_FilePaths();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 396;
                this.match(CypherParser.T__1);
                this.state = 398;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 397;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 400;
                this.oC_Query();
                this.state = 402;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 401;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 404;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 406;
                this.oC_Variable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 407;
                this.oC_Variable();
                this.state = 408;
                this.match(CypherParser.T__4);
                this.state = 410;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 409;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 412;
                this.oC_SchemaName();
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
    public kU_CopyFromByColumn(): KU_CopyFromByColumnContext {
        let localctx: KU_CopyFromByColumnContext = new KU_CopyFromByColumnContext(this._ctx, this.state);
        this.enterRule(localctx, 12, CypherParser.RULE_kU_CopyFromByColumn);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 416;
            this.match(CypherParser.COPY);
            this.state = 417;
            this.match(CypherParser.SP);
            this.state = 418;
            this.oC_SchemaName();
            this.state = 419;
            this.match(CypherParser.SP);
            this.state = 420;
            this.match(CypherParser.FROM);
            this.state = 421;
            this.match(CypherParser.SP);
            this.state = 422;
            this.match(CypherParser.T__1);
            this.state = 424;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 423;
                this.match(CypherParser.SP);
                }
            }

            this.state = 426;
            this.match(CypherParser.StringLiteral);
            this.state = 437;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3 || _la===150) {
                {
                {
                this.state = 428;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 427;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 430;
                this.match(CypherParser.T__2);
                this.state = 432;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 431;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 434;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 440;
            this.match(CypherParser.T__3);
            this.state = 441;
            this.match(CypherParser.SP);
            this.state = 442;
            this.match(CypherParser.BY);
            this.state = 443;
            this.match(CypherParser.SP);
            this.state = 444;
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
        this.enterRule(localctx, 14, CypherParser.RULE_kU_CopyTO);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 446;
            this.match(CypherParser.COPY);
            this.state = 447;
            this.match(CypherParser.SP);
            this.state = 448;
            this.match(CypherParser.T__1);
            this.state = 450;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 449;
                this.match(CypherParser.SP);
                }
            }

            this.state = 452;
            this.oC_Query();
            this.state = 454;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 453;
                this.match(CypherParser.SP);
                }
            }

            this.state = 456;
            this.match(CypherParser.T__3);
            this.state = 457;
            this.match(CypherParser.SP);
            this.state = 458;
            this.match(CypherParser.TO);
            this.state = 459;
            this.match(CypherParser.SP);
            this.state = 460;
            this.match(CypherParser.StringLiteral);
            this.state = 465;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
            case 1:
                {
                this.state = 462;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 461;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 464;
                this.kU_ParsingOptions();
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
        this.enterRule(localctx, 16, CypherParser.RULE_kU_ExportDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 467;
            this.match(CypherParser.EXPORT);
            this.state = 468;
            this.match(CypherParser.SP);
            this.state = 469;
            this.match(CypherParser.DATABASE);
            this.state = 470;
            this.match(CypherParser.SP);
            this.state = 471;
            this.match(CypherParser.StringLiteral);
            this.state = 476;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
            case 1:
                {
                this.state = 473;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 472;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 475;
                this.kU_ParsingOptions();
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
    public kU_ImportDatabase(): KU_ImportDatabaseContext {
        let localctx: KU_ImportDatabaseContext = new KU_ImportDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 18, CypherParser.RULE_kU_ImportDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 478;
            this.match(CypherParser.IMPORT);
            this.state = 479;
            this.match(CypherParser.SP);
            this.state = 480;
            this.match(CypherParser.DATABASE);
            this.state = 481;
            this.match(CypherParser.SP);
            this.state = 482;
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
    public kU_AttachDatabase(): KU_AttachDatabaseContext {
        let localctx: KU_AttachDatabaseContext = new KU_AttachDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 20, CypherParser.RULE_kU_AttachDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 484;
            this.match(CypherParser.ATTACH);
            this.state = 485;
            this.match(CypherParser.SP);
            this.state = 486;
            this.match(CypherParser.StringLiteral);
            this.state = 493;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
            case 1:
                {
                this.state = 487;
                this.match(CypherParser.SP);
                this.state = 488;
                this.match(CypherParser.AS);
                this.state = 489;
                this.match(CypherParser.SP);
                this.state = 490;
                this.oC_SchemaName();
                this.state = 491;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 509;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
            case 1:
                {
                this.state = 496;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 495;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 498;
                this.match(CypherParser.T__1);
                this.state = 500;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 499;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 502;
                this.match(CypherParser.DBTYPE);
                this.state = 503;
                this.match(CypherParser.SP);
                this.state = 504;
                this.match(CypherParser.StringLiteral);
                this.state = 506;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 505;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 508;
                this.match(CypherParser.T__3);
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
    public kU_DetachDatabase(): KU_DetachDatabaseContext {
        let localctx: KU_DetachDatabaseContext = new KU_DetachDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 22, CypherParser.RULE_kU_DetachDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 511;
            this.match(CypherParser.DETACH);
            this.state = 512;
            this.match(CypherParser.SP);
            this.state = 513;
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
    public kU_UseDatabase(): KU_UseDatabaseContext {
        let localctx: KU_UseDatabaseContext = new KU_UseDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 24, CypherParser.RULE_kU_UseDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 515;
            this.match(CypherParser.USE);
            this.state = 516;
            this.match(CypherParser.SP);
            this.state = 517;
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
    public kU_StandaloneCall(): KU_StandaloneCallContext {
        let localctx: KU_StandaloneCallContext = new KU_StandaloneCallContext(this._ctx, this.state);
        this.enterRule(localctx, 26, CypherParser.RULE_kU_StandaloneCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 519;
            this.match(CypherParser.CALL);
            this.state = 520;
            this.match(CypherParser.SP);
            this.state = 521;
            this.oC_SymbolicName();
            this.state = 523;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 522;
                this.match(CypherParser.SP);
                }
            }

            this.state = 525;
            this.match(CypherParser.T__5);
            this.state = 527;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 526;
                this.match(CypherParser.SP);
                }
            }

            this.state = 529;
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
    public kU_CommentOn(): KU_CommentOnContext {
        let localctx: KU_CommentOnContext = new KU_CommentOnContext(this._ctx, this.state);
        this.enterRule(localctx, 28, CypherParser.RULE_kU_CommentOn);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 531;
            this.match(CypherParser.COMMENT_);
            this.state = 532;
            this.match(CypherParser.SP);
            this.state = 533;
            this.match(CypherParser.ON);
            this.state = 534;
            this.match(CypherParser.SP);
            this.state = 535;
            this.match(CypherParser.TABLE);
            this.state = 536;
            this.match(CypherParser.SP);
            this.state = 537;
            this.oC_SchemaName();
            this.state = 538;
            this.match(CypherParser.SP);
            this.state = 539;
            this.match(CypherParser.IS);
            this.state = 540;
            this.match(CypherParser.SP);
            this.state = 541;
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
        this.enterRule(localctx, 30, CypherParser.RULE_kU_CreateMacro);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 543;
            this.match(CypherParser.CREATE);
            this.state = 544;
            this.match(CypherParser.SP);
            this.state = 545;
            this.match(CypherParser.MACRO);
            this.state = 546;
            this.match(CypherParser.SP);
            this.state = 547;
            this.oC_FunctionName();
            this.state = 549;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 548;
                this.match(CypherParser.SP);
                }
            }

            this.state = 551;
            this.match(CypherParser.T__1);
            this.state = 553;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
            case 1:
                {
                this.state = 552;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 556;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
            case 1:
                {
                this.state = 555;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 559;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
            case 1:
                {
                this.state = 558;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 562;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 302256385) !== 0)) {
                {
                this.state = 561;
                this.kU_DefaultArg();
                }
            }

            this.state = 574;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 565;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 564;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 567;
                    this.match(CypherParser.T__2);
                    this.state = 569;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 568;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 571;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 576;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
            }
            this.state = 578;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 577;
                this.match(CypherParser.SP);
                }
            }

            this.state = 580;
            this.match(CypherParser.T__3);
            this.state = 581;
            this.match(CypherParser.SP);
            this.state = 582;
            this.match(CypherParser.AS);
            this.state = 583;
            this.match(CypherParser.SP);
            this.state = 584;
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
        this.enterRule(localctx, 32, CypherParser.RULE_kU_PositionalArgs);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 586;
            this.oC_SymbolicName();
            this.state = 597;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 588;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 587;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 590;
                    this.match(CypherParser.T__2);
                    this.state = 592;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 591;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 594;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 599;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
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
        this.enterRule(localctx, 34, CypherParser.RULE_kU_DefaultArg);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 600;
            this.oC_SymbolicName();
            this.state = 602;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 601;
                this.match(CypherParser.SP);
                }
            }

            this.state = 604;
            this.match(CypherParser.COLON);
            this.state = 605;
            this.match(CypherParser.T__5);
            this.state = 607;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 606;
                this.match(CypherParser.SP);
                }
            }

            this.state = 609;
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
        this.enterRule(localctx, 36, CypherParser.RULE_kU_FilePaths);
        let _la: number;
        try {
            this.state = 644;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 611;
                this.match(CypherParser.T__6);
                this.state = 613;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 612;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 615;
                this.match(CypherParser.StringLiteral);
                this.state = 626;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3 || _la===150) {
                    {
                    {
                    this.state = 617;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 616;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 619;
                    this.match(CypherParser.T__2);
                    this.state = 621;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 620;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 623;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 628;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 629;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 630;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 631;
                this.match(CypherParser.GLOB);
                this.state = 633;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 632;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 635;
                this.match(CypherParser.T__1);
                this.state = 637;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 636;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 639;
                this.match(CypherParser.StringLiteral);
                this.state = 641;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 640;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 643;
                this.match(CypherParser.T__3);
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
        this.enterRule(localctx, 38, CypherParser.RULE_kU_ParsingOptions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 646;
            this.match(CypherParser.T__1);
            this.state = 648;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 647;
                this.match(CypherParser.SP);
                }
            }

            this.state = 650;
            this.kU_ParsingOption();
            this.state = 661;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 652;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 651;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 654;
                    this.match(CypherParser.T__2);
                    this.state = 656;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 655;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 658;
                    this.kU_ParsingOption();
                    }
                    }
                }
                this.state = 663;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
            }
            this.state = 665;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 664;
                this.match(CypherParser.SP);
                }
            }

            this.state = 667;
            this.match(CypherParser.T__3);
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
        this.enterRule(localctx, 40, CypherParser.RULE_kU_ParsingOption);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 669;
            this.oC_SymbolicName();
            this.state = 671;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 670;
                this.match(CypherParser.SP);
                }
            }

            this.state = 673;
            this.match(CypherParser.T__5);
            this.state = 675;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 674;
                this.match(CypherParser.SP);
                }
            }

            this.state = 677;
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
    public kU_CreateNodeTable(): KU_CreateNodeTableContext {
        let localctx: KU_CreateNodeTableContext = new KU_CreateNodeTableContext(this._ctx, this.state);
        this.enterRule(localctx, 42, CypherParser.RULE_kU_CreateNodeTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 679;
            this.match(CypherParser.CREATE);
            this.state = 680;
            this.match(CypherParser.SP);
            this.state = 681;
            this.match(CypherParser.NODE);
            this.state = 682;
            this.match(CypherParser.SP);
            this.state = 683;
            this.match(CypherParser.TABLE);
            this.state = 684;
            this.match(CypherParser.SP);
            this.state = 685;
            this.oC_SchemaName();
            this.state = 687;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 686;
                this.match(CypherParser.SP);
                }
            }

            this.state = 689;
            this.match(CypherParser.T__1);
            this.state = 691;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 690;
                this.match(CypherParser.SP);
                }
            }

            this.state = 693;
            this.kU_PropertyDefinitions();
            this.state = 695;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 694;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 697;
            this.match(CypherParser.T__2);
            this.state = 699;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 698;
                this.match(CypherParser.SP);
                }
            }

            this.state = 701;
            this.kU_CreateNodeConstraint();
            }
            this.state = 704;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 703;
                this.match(CypherParser.SP);
                }
            }

            this.state = 706;
            this.match(CypherParser.T__3);
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
        this.enterRule(localctx, 44, CypherParser.RULE_kU_CreateRelTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 708;
            this.match(CypherParser.CREATE);
            this.state = 709;
            this.match(CypherParser.SP);
            this.state = 710;
            this.match(CypherParser.REL);
            this.state = 711;
            this.match(CypherParser.SP);
            this.state = 712;
            this.match(CypherParser.TABLE);
            this.state = 713;
            this.match(CypherParser.SP);
            this.state = 714;
            this.oC_SchemaName();
            this.state = 716;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 715;
                this.match(CypherParser.SP);
                }
            }

            this.state = 718;
            this.match(CypherParser.T__1);
            this.state = 720;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 719;
                this.match(CypherParser.SP);
                }
            }

            this.state = 722;
            this.kU_RelTableConnection();
            this.state = 724;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 723;
                this.match(CypherParser.SP);
                }
            }

            this.state = 734;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
            case 1:
                {
                this.state = 726;
                this.match(CypherParser.T__2);
                this.state = 728;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 727;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 730;
                this.kU_PropertyDefinitions();
                this.state = 732;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 731;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 744;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 736;
                this.match(CypherParser.T__2);
                this.state = 738;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 737;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 740;
                this.oC_SymbolicName();
                this.state = 742;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 741;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 746;
            this.match(CypherParser.T__3);
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
        this.enterRule(localctx, 46, CypherParser.RULE_kU_CreateRelTableGroup);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 748;
            this.match(CypherParser.CREATE);
            this.state = 749;
            this.match(CypherParser.SP);
            this.state = 750;
            this.match(CypherParser.REL);
            this.state = 751;
            this.match(CypherParser.SP);
            this.state = 752;
            this.match(CypherParser.TABLE);
            this.state = 753;
            this.match(CypherParser.SP);
            this.state = 754;
            this.match(CypherParser.GROUP);
            this.state = 755;
            this.match(CypherParser.SP);
            this.state = 756;
            this.oC_SchemaName();
            this.state = 758;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 757;
                this.match(CypherParser.SP);
                }
            }

            this.state = 760;
            this.match(CypherParser.T__1);
            this.state = 762;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 761;
                this.match(CypherParser.SP);
                }
            }

            this.state = 764;
            this.kU_RelTableConnection();
            this.state = 766;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 765;
                this.match(CypherParser.SP);
                }
            }

            this.state = 773;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 768;
                    this.match(CypherParser.T__2);
                    this.state = 770;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 769;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 772;
                    this.kU_RelTableConnection();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 775;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 87, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 778;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 777;
                this.match(CypherParser.SP);
                }
            }

            this.state = 788;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
            case 1:
                {
                this.state = 780;
                this.match(CypherParser.T__2);
                this.state = 782;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 781;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 784;
                this.kU_PropertyDefinitions();
                this.state = 786;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 785;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 798;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 790;
                this.match(CypherParser.T__2);
                this.state = 792;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 791;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 794;
                this.oC_SymbolicName();
                this.state = 796;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 795;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 800;
            this.match(CypherParser.T__3);
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
        this.enterRule(localctx, 48, CypherParser.RULE_kU_RelTableConnection);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 802;
            this.match(CypherParser.FROM);
            this.state = 803;
            this.match(CypherParser.SP);
            this.state = 804;
            this.oC_SchemaName();
            this.state = 805;
            this.match(CypherParser.SP);
            this.state = 806;
            this.match(CypherParser.TO);
            this.state = 807;
            this.match(CypherParser.SP);
            this.state = 808;
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
        this.enterRule(localctx, 50, CypherParser.RULE_kU_CreateRdfGraph);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 810;
            this.match(CypherParser.CREATE);
            this.state = 811;
            this.match(CypherParser.SP);
            this.state = 812;
            this.match(CypherParser.RDFGRAPH);
            this.state = 813;
            this.match(CypherParser.SP);
            this.state = 814;
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
        this.enterRule(localctx, 52, CypherParser.RULE_kU_DropTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 816;
            this.match(CypherParser.DROP);
            this.state = 817;
            this.match(CypherParser.SP);
            this.state = 818;
            _la = this._input.LA(1);
            if(!(_la===60 || _la===62)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 819;
            this.match(CypherParser.SP);
            this.state = 820;
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
        this.enterRule(localctx, 54, CypherParser.RULE_kU_AlterTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 822;
            this.match(CypherParser.ALTER);
            this.state = 823;
            this.match(CypherParser.SP);
            this.state = 824;
            this.match(CypherParser.TABLE);
            this.state = 825;
            this.match(CypherParser.SP);
            this.state = 826;
            this.oC_SchemaName();
            this.state = 827;
            this.match(CypherParser.SP);
            this.state = 828;
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
        this.enterRule(localctx, 56, CypherParser.RULE_kU_AlterOptions);
        try {
            this.state = 834;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 830;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 831;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 832;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 833;
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
        this.enterRule(localctx, 58, CypherParser.RULE_kU_AddProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 836;
            this.match(CypherParser.ADD);
            this.state = 837;
            this.match(CypherParser.SP);
            this.state = 838;
            this.oC_PropertyKeyName();
            this.state = 839;
            this.match(CypherParser.SP);
            this.state = 840;
            this.kU_DataType(0);
            this.state = 845;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
            case 1:
                {
                this.state = 841;
                this.match(CypherParser.SP);
                this.state = 842;
                this.match(CypherParser.DEFAULT);
                this.state = 843;
                this.match(CypherParser.SP);
                this.state = 844;
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
        this.enterRule(localctx, 60, CypherParser.RULE_kU_DropProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 847;
            this.match(CypherParser.DROP);
            this.state = 848;
            this.match(CypherParser.SP);
            this.state = 849;
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
        this.enterRule(localctx, 62, CypherParser.RULE_kU_RenameTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 851;
            this.match(CypherParser.RENAME);
            this.state = 852;
            this.match(CypherParser.SP);
            this.state = 853;
            this.match(CypherParser.TO);
            this.state = 854;
            this.match(CypherParser.SP);
            this.state = 855;
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
        this.enterRule(localctx, 64, CypherParser.RULE_kU_RenameProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 857;
            this.match(CypherParser.RENAME);
            this.state = 858;
            this.match(CypherParser.SP);
            this.state = 859;
            this.oC_PropertyKeyName();
            this.state = 860;
            this.match(CypherParser.SP);
            this.state = 861;
            this.match(CypherParser.TO);
            this.state = 862;
            this.match(CypherParser.SP);
            this.state = 863;
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
        this.enterRule(localctx, 66, CypherParser.RULE_kU_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 865;
            this.kU_PropertyDefinition();
            this.state = 876;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 99, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 867;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 866;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 869;
                    this.match(CypherParser.T__2);
                    this.state = 871;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 870;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 873;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 878;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 99, this._ctx);
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
        this.enterRule(localctx, 68, CypherParser.RULE_kU_PropertyDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 879;
            this.oC_PropertyKeyName();
            this.state = 880;
            this.match(CypherParser.SP);
            this.state = 881;
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
        this.enterRule(localctx, 70, CypherParser.RULE_kU_CreateNodeConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 883;
            this.match(CypherParser.PRIMARY);
            this.state = 884;
            this.match(CypherParser.SP);
            this.state = 885;
            this.match(CypherParser.KEY);
            this.state = 887;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 886;
                this.match(CypherParser.SP);
                }
            }

            this.state = 889;
            this.match(CypherParser.T__1);
            this.state = 891;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 890;
                this.match(CypherParser.SP);
                }
            }

            this.state = 893;
            this.oC_PropertyKeyName();
            this.state = 895;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 894;
                this.match(CypherParser.SP);
                }
            }

            this.state = 897;
            this.match(CypherParser.T__3);
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
        let _startState = 72;
        this.enterRecursionRule(localctx, 72, CypherParser.RULE_kU_DataType, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 951;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
            case 1:
                {
                this.state = 900;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 901;
                this.match(CypherParser.UNION);
                this.state = 903;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 902;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 905;
                this.match(CypherParser.T__1);
                this.state = 907;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 906;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 909;
                this.kU_PropertyDefinitions();
                this.state = 911;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 910;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 913;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                {
                this.state = 915;
                this.oC_SymbolicName();
                this.state = 917;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 916;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 919;
                this.match(CypherParser.T__1);
                this.state = 921;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 920;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 923;
                this.kU_PropertyDefinitions();
                this.state = 925;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 924;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 927;
                this.match(CypherParser.T__3);
                }
                break;
            case 4:
                {
                this.state = 929;
                this.oC_SymbolicName();
                this.state = 931;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 930;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 933;
                this.match(CypherParser.T__1);
                this.state = 935;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 934;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 937;
                this.kU_DataType(0);
                this.state = 939;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 938;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 941;
                this.match(CypherParser.T__2);
                this.state = 943;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 942;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 945;
                this.kU_DataType(0);
                this.state = 947;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 946;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 949;
                this.match(CypherParser.T__3);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 957;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 115, this._ctx);
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
                    this.state = 953;
                    if (!(this.precpred(this._ctx, 4))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                    }
                    this.state = 954;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 959;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 115, this._ctx);
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
        this.enterRule(localctx, 74, CypherParser.RULE_kU_ListIdentifiers);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 960;
            this.kU_ListIdentifier();
            this.state = 964;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 961;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 966;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
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
        this.enterRule(localctx, 76, CypherParser.RULE_kU_ListIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 967;
            this.match(CypherParser.T__6);
            this.state = 969;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===138) {
                {
                this.state = 968;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 971;
            this.match(CypherParser.T__7);
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
        this.enterRule(localctx, 78, CypherParser.RULE_oC_AnyCypherOption);
        try {
            this.state = 975;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 973;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 974;
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
        this.enterRule(localctx, 80, CypherParser.RULE_oC_Explain);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 977;
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
        this.enterRule(localctx, 82, CypherParser.RULE_oC_Profile);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 979;
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
        this.enterRule(localctx, 84, CypherParser.RULE_kU_Transaction);
        try {
            this.state = 995;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 981;
                this.match(CypherParser.BEGIN);
                this.state = 982;
                this.match(CypherParser.SP);
                this.state = 983;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 984;
                this.match(CypherParser.BEGIN);
                this.state = 985;
                this.match(CypherParser.SP);
                this.state = 986;
                this.match(CypherParser.TRANSACTION);
                this.state = 987;
                this.match(CypherParser.SP);
                this.state = 988;
                this.match(CypherParser.READ);
                this.state = 989;
                this.match(CypherParser.SP);
                this.state = 990;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 991;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 992;
                this.match(CypherParser.COMMIT_SKIP_CHECKPOINT);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 993;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 994;
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
        this.enterRule(localctx, 86, CypherParser.RULE_kU_Extension);
        try {
            this.state = 999;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 997;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 998;
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
        this.enterRule(localctx, 88, CypherParser.RULE_kU_LoadExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1001;
            this.match(CypherParser.LOAD);
            this.state = 1002;
            this.match(CypherParser.SP);
            this.state = 1003;
            this.match(CypherParser.EXTENSION);
            this.state = 1004;
            this.match(CypherParser.SP);
            this.state = 1007;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 1005;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.USE:
            case CypherParser.COMMENT_:
            case CypherParser.EXPORT:
            case CypherParser.IMPORT:
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
                this.state = 1006;
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
        this.enterRule(localctx, 90, CypherParser.RULE_kU_InstallExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1009;
            this.match(CypherParser.INSTALL);
            this.state = 1010;
            this.match(CypherParser.SP);
            this.state = 1011;
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
        this.enterRule(localctx, 92, CypherParser.RULE_oC_Query);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1013;
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
        this.enterRule(localctx, 94, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1036;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1015;
                this.oC_SingleQuery();
                this.state = 1022;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1017;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 1016;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1019;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 1024;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1029;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1025;
                        this.oC_Return();
                        this.state = 1027;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 1026;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1031;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1033;
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
        this.enterRule(localctx, 96, CypherParser.RULE_oC_Union);
        let _la: number;
        try {
            this.state = 1050;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1038;
                this.match(CypherParser.UNION);
                this.state = 1039;
                this.match(CypherParser.SP);
                this.state = 1040;
                this.match(CypherParser.ALL);
                this.state = 1042;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1041;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1044;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1045;
                this.match(CypherParser.UNION);
                this.state = 1047;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1046;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1049;
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
        this.enterRule(localctx, 98, CypherParser.RULE_oC_SingleQuery);
        try {
            this.state = 1054;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1052;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1053;
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
        this.enterRule(localctx, 100, CypherParser.RULE_oC_SinglePartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1101;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1062;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===49 || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 29) !== 0)) {
                    {
                    {
                    this.state = 1056;
                    this.oC_ReadingClause();
                    this.state = 1058;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1057;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1064;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1065;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1072;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===49 || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 29) !== 0)) {
                    {
                    {
                    this.state = 1066;
                    this.oC_ReadingClause();
                    this.state = 1068;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1067;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1074;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1075;
                this.oC_UpdatingClause();
                this.state = 1082;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1077;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 1076;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1079;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1084;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
                }
                this.state = 1089;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
                case 1:
                    {
                    this.state = 1086;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1085;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1088;
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
                this.state = 1095;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 1091;
                    this.oC_ReadingClause();
                    this.state = 1093;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 139, this._ctx) ) {
                    case 1:
                        {
                        this.state = 1092;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    }
                    }
                    this.state = 1097;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===49 || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 29) !== 0));
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
        this.enterRule(localctx, 102, CypherParser.RULE_oC_MultiPartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1107;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1103;
                    this.kU_QueryPart();
                    this.state = 1105;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1104;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1109;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 143, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1111;
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
        this.enterRule(localctx, 104, CypherParser.RULE_kU_QueryPart);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===49 || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 29) !== 0)) {
                {
                {
                this.state = 1113;
                this.oC_ReadingClause();
                this.state = 1115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1114;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 59) !== 0)) {
                {
                {
                this.state = 1122;
                this.oC_UpdatingClause();
                this.state = 1124;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1123;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1131;
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
        this.enterRule(localctx, 106, CypherParser.RULE_oC_UpdatingClause);
        try {
            this.state = 1137;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1133;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1134;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1135;
                this.oC_Set();
                }
                break;
            case CypherParser.DETACH:
            case CypherParser.DELETE:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1136;
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
        this.enterRule(localctx, 108, CypherParser.RULE_oC_ReadingClause);
        try {
            this.state = 1143;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.OPTIONAL:
            case CypherParser.MATCH:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1139;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1140;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1141;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1142;
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
        this.enterRule(localctx, 110, CypherParser.RULE_kU_LoadFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1145;
            this.match(CypherParser.LOAD);
            this.state = 1163;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
            case 1:
                {
                this.state = 1146;
                this.match(CypherParser.SP);
                this.state = 1147;
                this.match(CypherParser.WITH);
                this.state = 1148;
                this.match(CypherParser.SP);
                this.state = 1149;
                this.match(CypherParser.HEADERS);
                this.state = 1151;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1150;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1153;
                this.match(CypherParser.T__1);
                this.state = 1155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1154;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1157;
                this.kU_PropertyDefinitions();
                this.state = 1159;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1158;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1161;
                this.match(CypherParser.T__3);
                }
                break;
            }
            this.state = 1165;
            this.match(CypherParser.SP);
            this.state = 1166;
            this.match(CypherParser.FROM);
            this.state = 1167;
            this.match(CypherParser.SP);
            this.state = 1168;
            this.kU_ScanSource();
            this.state = 1173;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
            case 1:
                {
                this.state = 1170;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1169;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1172;
                this.kU_ParsingOptions();
                }
                break;
            }
            this.state = 1179;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 157, this._ctx) ) {
            case 1:
                {
                this.state = 1176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1175;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1178;
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
        this.enterRule(localctx, 112, CypherParser.RULE_kU_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1181;
            this.match(CypherParser.CALL);
            this.state = 1182;
            this.match(CypherParser.SP);
            this.state = 1183;
            this.oC_FunctionInvocation();
            this.state = 1188;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
            case 1:
                {
                this.state = 1185;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1184;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1187;
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
        this.enterRule(localctx, 114, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===89) {
                {
                this.state = 1190;
                this.match(CypherParser.OPTIONAL);
                this.state = 1191;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1194;
            this.match(CypherParser.MATCH);
            this.state = 1196;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1195;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1198;
            this.oC_Pattern();
            this.state = 1203;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
            case 1:
                {
                this.state = 1200;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1199;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1202;
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
        this.enterRule(localctx, 116, CypherParser.RULE_oC_Unwind);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1205;
            this.match(CypherParser.UNWIND);
            this.state = 1207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1206;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1209;
            this.oC_Expression();
            this.state = 1210;
            this.match(CypherParser.SP);
            this.state = 1211;
            this.match(CypherParser.AS);
            this.state = 1212;
            this.match(CypherParser.SP);
            this.state = 1213;
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
        this.enterRule(localctx, 118, CypherParser.RULE_oC_Create);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1215;
            this.match(CypherParser.CREATE);
            this.state = 1217;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1216;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1219;
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
        this.enterRule(localctx, 120, CypherParser.RULE_oC_Merge);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1221;
            this.match(CypherParser.MERGE);
            this.state = 1223;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1222;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1225;
            this.oC_Pattern();
            this.state = 1230;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 167, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1226;
                    this.match(CypherParser.SP);
                    this.state = 1227;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1232;
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
        this.enterRule(localctx, 122, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1243;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 168, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1233;
                this.match(CypherParser.ON);
                this.state = 1234;
                this.match(CypherParser.SP);
                this.state = 1235;
                this.match(CypherParser.MATCH);
                this.state = 1236;
                this.match(CypherParser.SP);
                this.state = 1237;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1238;
                this.match(CypherParser.ON);
                this.state = 1239;
                this.match(CypherParser.SP);
                this.state = 1240;
                this.match(CypherParser.CREATE);
                this.state = 1241;
                this.match(CypherParser.SP);
                this.state = 1242;
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
        this.enterRule(localctx, 124, CypherParser.RULE_oC_Set);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1245;
            this.match(CypherParser.SET);
            this.state = 1247;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1246;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1249;
            this.oC_SetItem();
            this.state = 1260;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1251;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1250;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1253;
                    this.match(CypherParser.T__2);
                    this.state = 1255;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1254;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1257;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1262;
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
        this.enterRule(localctx, 126, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1263;
            this.oC_PropertyExpression();
            this.state = 1265;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1264;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1267;
            this.match(CypherParser.T__5);
            this.state = 1269;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1268;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1271;
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
        this.enterRule(localctx, 128, CypherParser.RULE_oC_Delete);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1275;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===96) {
                {
                this.state = 1273;
                this.match(CypherParser.DETACH);
                this.state = 1274;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1277;
            this.match(CypherParser.DELETE);
            this.state = 1279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1278;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1281;
            this.oC_Expression();
            this.state = 1292;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1283;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1282;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1285;
                    this.match(CypherParser.T__2);
                    this.state = 1287;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1286;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1289;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1294;
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
        this.enterRule(localctx, 130, CypherParser.RULE_oC_With);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1295;
            this.match(CypherParser.WITH);
            this.state = 1296;
            this.oC_ProjectionBody();
            this.state = 1301;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
            case 1:
                {
                this.state = 1298;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1297;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1300;
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
        this.enterRule(localctx, 132, CypherParser.RULE_oC_Return);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1303;
            this.match(CypherParser.RETURN);
            this.state = 1304;
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
        this.enterRule(localctx, 134, CypherParser.RULE_oC_ProjectionBody);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1310;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
            case 1:
                {
                this.state = 1307;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1306;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1309;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1312;
            this.match(CypherParser.SP);
            this.state = 1313;
            this.oC_ProjectionItems();
            this.state = 1316;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
            case 1:
                {
                this.state = 1314;
                this.match(CypherParser.SP);
                this.state = 1315;
                this.oC_Order();
                }
                break;
            }
            this.state = 1320;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 185, this._ctx) ) {
            case 1:
                {
                this.state = 1318;
                this.match(CypherParser.SP);
                this.state = 1319;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1324;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
            case 1:
                {
                this.state = 1322;
                this.match(CypherParser.SP);
                this.state = 1323;
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
        this.enterRule(localctx, 136, CypherParser.RULE_oC_ProjectionItems);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1354;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1326;
                this.match(CypherParser.STAR);
                this.state = 1337;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 189, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1328;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 1327;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1330;
                        this.match(CypherParser.T__2);
                        this.state = 1332;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 1331;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1334;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1339;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 189, this._ctx);
                }
                }
                }
                break;
            case CypherParser.T__1:
            case CypherParser.T__6:
            case CypherParser.T__8:
            case CypherParser.T__25:
            case CypherParser.USE:
            case CypherParser.COMMENT_:
            case CypherParser.EXPORT:
            case CypherParser.IMPORT:
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
                this.state = 1340;
                this.oC_ProjectionItem();
                this.state = 1351;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 192, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1342;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 1341;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1344;
                        this.match(CypherParser.T__2);
                        this.state = 1346;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 1345;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1348;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1353;
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
        this.enterRule(localctx, 138, CypherParser.RULE_oC_ProjectionItem);
        try {
            this.state = 1363;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1356;
                this.oC_Expression();
                this.state = 1357;
                this.match(CypherParser.SP);
                this.state = 1358;
                this.match(CypherParser.AS);
                this.state = 1359;
                this.match(CypherParser.SP);
                this.state = 1360;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1362;
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
        this.enterRule(localctx, 140, CypherParser.RULE_oC_Order);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1365;
            this.match(CypherParser.ORDER);
            this.state = 1366;
            this.match(CypherParser.SP);
            this.state = 1367;
            this.match(CypherParser.BY);
            this.state = 1368;
            this.match(CypherParser.SP);
            this.state = 1369;
            this.oC_SortItem();
            this.state = 1377;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 1370;
                this.match(CypherParser.T__2);
                this.state = 1372;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1371;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1374;
                this.oC_SortItem();
                }
                }
                this.state = 1379;
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
        this.enterRule(localctx, 142, CypherParser.RULE_oC_Skip);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1380;
            this.match(CypherParser.L_SKIP);
            this.state = 1381;
            this.match(CypherParser.SP);
            this.state = 1382;
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
        this.enterRule(localctx, 144, CypherParser.RULE_oC_Limit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1384;
            this.match(CypherParser.LIMIT);
            this.state = 1385;
            this.match(CypherParser.SP);
            this.state = 1386;
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
        this.enterRule(localctx, 146, CypherParser.RULE_oC_SortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1388;
            this.oC_Expression();
            this.state = 1393;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
            case 1:
                {
                this.state = 1390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1389;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1392;
                _la = this._input.LA(1);
                if(!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 15) !== 0))) {
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
        this.enterRule(localctx, 148, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1395;
            this.match(CypherParser.WHERE);
            this.state = 1396;
            this.match(CypherParser.SP);
            this.state = 1397;
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
        this.enterRule(localctx, 150, CypherParser.RULE_oC_Pattern);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1399;
            this.oC_PatternPart();
            this.state = 1410;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 201, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1401;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1400;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1403;
                    this.match(CypherParser.T__2);
                    this.state = 1405;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1404;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1407;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1412;
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
        this.enterRule(localctx, 152, CypherParser.RULE_oC_PatternPart);
        let _la: number;
        try {
            this.state = 1424;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.USE:
            case CypherParser.COMMENT_:
            case CypherParser.EXPORT:
            case CypherParser.IMPORT:
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
                this.state = 1413;
                this.oC_Variable();
                this.state = 1415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1414;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1417;
                this.match(CypherParser.T__5);
                this.state = 1419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1418;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1421;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1423;
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
        this.enterRule(localctx, 154, CypherParser.RULE_oC_AnonymousPatternPart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1426;
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
        this.enterRule(localctx, 156, CypherParser.RULE_oC_PatternElement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1442;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1428;
                this.oC_NodePattern();
                this.state = 1435;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1430;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 1429;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1432;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1437;
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
                this.state = 1438;
                this.match(CypherParser.T__1);
                this.state = 1439;
                this.oC_PatternElement();
                this.state = 1440;
                this.match(CypherParser.T__3);
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
        this.enterRule(localctx, 158, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1444;
            this.match(CypherParser.T__1);
            this.state = 1446;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1445;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1452;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 302256385) !== 0)) {
                {
                this.state = 1448;
                this.oC_Variable();
                this.state = 1450;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1449;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1458;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===120) {
                {
                this.state = 1454;
                this.oC_NodeLabels();
                this.state = 1456;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1455;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1464;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1460;
                this.kU_Properties();
                this.state = 1462;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1461;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1466;
            this.match(CypherParser.T__3);
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
        this.enterRule(localctx, 160, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1468;
            this.oC_RelationshipPattern();
            this.state = 1470;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1469;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1472;
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
        this.enterRule(localctx, 162, CypherParser.RULE_oC_RelationshipPattern);
        let _la: number;
        try {
            this.state = 1518;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 227, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1474;
                this.oC_LeftArrowHead();
                this.state = 1476;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1475;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1478;
                this.oC_Dash();
                this.state = 1480;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
                case 1:
                    {
                    this.state = 1479;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1483;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1482;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1486;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1485;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1488;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1490;
                this.oC_Dash();
                this.state = 1492;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
                case 1:
                    {
                    this.state = 1491;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1495;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1494;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1497;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1500;
                this.oC_Dash();
                this.state = 1502;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1501;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1504;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1506;
                this.oC_Dash();
                this.state = 1508;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
                case 1:
                    {
                    this.state = 1507;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1511;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1510;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1513;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1516;
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
        this.enterRule(localctx, 164, CypherParser.RULE_oC_RelationshipDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1520;
            this.match(CypherParser.T__6);
            this.state = 1522;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1521;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1528;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 302256385) !== 0)) {
                {
                this.state = 1524;
                this.oC_Variable();
                this.state = 1526;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1525;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1534;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===120) {
                {
                this.state = 1530;
                this.oC_RelationshipTypes();
                this.state = 1532;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1531;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1540;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===101) {
                {
                this.state = 1536;
                this.oC_RangeLiteral();
                this.state = 1538;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1537;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1546;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1542;
                this.kU_Properties();
                this.state = 1544;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1543;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1548;
            this.match(CypherParser.T__7);
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
        this.enterRule(localctx, 166, CypherParser.RULE_kU_Properties);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1550;
            this.match(CypherParser.T__8);
            this.state = 1552;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1551;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1587;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 302256385) !== 0)) {
                {
                this.state = 1554;
                this.oC_PropertyKeyName();
                this.state = 1556;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1555;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1558;
                this.match(CypherParser.COLON);
                this.state = 1560;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1559;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1562;
                this.oC_Expression();
                this.state = 1564;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1563;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1584;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 1566;
                    this.match(CypherParser.T__2);
                    this.state = 1568;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1567;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1570;
                    this.oC_PropertyKeyName();
                    this.state = 1572;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1571;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1574;
                    this.match(CypherParser.COLON);
                    this.state = 1576;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1575;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1578;
                    this.oC_Expression();
                    this.state = 1580;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1579;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1586;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1589;
            this.match(CypherParser.T__9);
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
        this.enterRule(localctx, 168, CypherParser.RULE_oC_RelationshipTypes);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1591;
            this.match(CypherParser.COLON);
            this.state = 1593;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1592;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1595;
            this.oC_RelTypeName();
            this.state = 1609;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1597;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1596;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1599;
                    this.match(CypherParser.T__10);
                    this.state = 1601;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===120) {
                        {
                        this.state = 1600;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 1604;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1603;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1606;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1611;
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
        this.enterRule(localctx, 170, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1612;
            this.oC_NodeLabel();
            this.state = 1619;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 253, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1614;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1613;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1616;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1621;
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
        this.enterRule(localctx, 172, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1622;
            this.match(CypherParser.COLON);
            this.state = 1624;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1623;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1626;
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
        this.enterRule(localctx, 174, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1628;
            this.match(CypherParser.STAR);
            this.state = 1630;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
            case 1:
                {
                this.state = 1629;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1636;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.SHORTEST:
                {
                this.state = 1632;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.ALL:
                {
                this.state = 1633;
                this.match(CypherParser.ALL);
                this.state = 1634;
                this.match(CypherParser.SP);
                this.state = 1635;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.T__1:
            case CypherParser.T__7:
            case CypherParser.T__8:
            case CypherParser.T__11:
            case CypherParser.DecimalInteger:
            case CypherParser.SP:
                break;
            default:
                break;
            }
            this.state = 1639;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 257, this._ctx) ) {
            case 1:
                {
                this.state = 1638;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1655;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 262, this._ctx) ) {
            case 1:
                {
                this.state = 1642;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===138) {
                    {
                    this.state = 1641;
                    this.oC_LowerBound();
                    }
                }

                this.state = 1645;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1644;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1647;
                this.match(CypherParser.T__11);
                this.state = 1649;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
                case 1:
                    {
                    this.state = 1648;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1652;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===138) {
                    {
                    this.state = 1651;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 1654;
                this.oC_IntegerLiteral();
                }
                break;
            }
            this.state = 1661;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 264, this._ctx) ) {
            case 1:
                {
                this.state = 1658;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1657;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1660;
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
        this.enterRule(localctx, 176, CypherParser.RULE_kU_RecursiveRelationshipComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1663;
            this.match(CypherParser.T__1);
            this.state = 1665;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1664;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1667;
            this.oC_Variable();
            this.state = 1669;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1668;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1671;
            this.match(CypherParser.T__2);
            this.state = 1673;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1672;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1675;
            this.oC_Variable();
            this.state = 1684;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
            case 1:
                {
                this.state = 1677;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1676;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1679;
                this.match(CypherParser.T__10);
                this.state = 1681;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1680;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1683;
                this.oC_Where();
                }
                break;
            }
            this.state = 1705;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===150) {
                {
                this.state = 1687;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1686;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1689;
                this.match(CypherParser.T__10);
                this.state = 1691;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1690;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1693;
                this.kU_IntermediateRelProjectionItems();
                this.state = 1695;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1694;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1697;
                this.match(CypherParser.T__2);
                this.state = 1699;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1698;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1701;
                this.kU_IntermediateNodeProjectionItems();
                this.state = 1703;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1702;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1707;
            this.match(CypherParser.T__3);
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
        this.enterRule(localctx, 178, CypherParser.RULE_kU_IntermediateNodeProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1709;
            this.match(CypherParser.T__8);
            this.state = 1711;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 277, this._ctx) ) {
            case 1:
                {
                this.state = 1710;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1714;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 2115141633) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & 77929) !== 0)) {
                {
                this.state = 1713;
                this.oC_ProjectionItems();
                }
            }

            this.state = 1717;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1716;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1719;
            this.match(CypherParser.T__9);
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
        this.enterRule(localctx, 180, CypherParser.RULE_kU_IntermediateRelProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1721;
            this.match(CypherParser.T__8);
            this.state = 1723;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 280, this._ctx) ) {
            case 1:
                {
                this.state = 1722;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1726;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 2115141633) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & 77929) !== 0)) {
                {
                this.state = 1725;
                this.oC_ProjectionItems();
                }
            }

            this.state = 1729;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1728;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1731;
            this.match(CypherParser.T__9);
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
        this.enterRule(localctx, 182, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1733;
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
        this.enterRule(localctx, 184, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1735;
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
        this.enterRule(localctx, 186, CypherParser.RULE_oC_LabelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1737;
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
        this.enterRule(localctx, 188, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1739;
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
        this.enterRule(localctx, 190, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1741;
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
        this.enterRule(localctx, 192, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1743;
            this.oC_XorExpression();
            this.state = 1750;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 283, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1744;
                    this.match(CypherParser.SP);
                    this.state = 1745;
                    this.match(CypherParser.OR);
                    this.state = 1746;
                    this.match(CypherParser.SP);
                    this.state = 1747;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 1752;
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
        this.enterRule(localctx, 194, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1753;
            this.oC_AndExpression();
            this.state = 1760;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 284, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1754;
                    this.match(CypherParser.SP);
                    this.state = 1755;
                    this.match(CypherParser.XOR);
                    this.state = 1756;
                    this.match(CypherParser.SP);
                    this.state = 1757;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 1762;
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
        this.enterRule(localctx, 196, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1763;
            this.oC_NotExpression();
            this.state = 1770;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1764;
                    this.match(CypherParser.SP);
                    this.state = 1765;
                    this.match(CypherParser.AND);
                    this.state = 1766;
                    this.match(CypherParser.SP);
                    this.state = 1767;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 1772;
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
        this.enterRule(localctx, 198, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1779;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===116) {
                {
                {
                this.state = 1773;
                this.match(CypherParser.NOT);
                this.state = 1775;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1774;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1781;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1782;
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
        this.enterRule(localctx, 200, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1832;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 298, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1784;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1794;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 290, this._ctx) ) {
                case 1:
                    {
                    this.state = 1786;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1785;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1788;
                    this.kU_ComparisonOperator();
                    this.state = 1790;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1789;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1792;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1796;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 1798;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1797;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1800;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 1802;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1801;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1804;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1808;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1810;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1809;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1812;
                this.kU_ComparisonOperator();
                this.state = 1814;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1813;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1816;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1826;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1818;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 1817;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1820;
                        this.kU_ComparisonOperator();
                        this.state = 1822;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 1821;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1824;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1828;
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
        this.enterRule(localctx, 202, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1834;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 254016) !== 0))) {
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
        this.enterRule(localctx, 204, CypherParser.RULE_kU_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1836;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 1847;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 301, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1838;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1837;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1840;
                    this.match(CypherParser.T__10);
                    this.state = 1842;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1841;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1844;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 1849;
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
        this.enterRule(localctx, 206, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1850;
            this.kU_BitShiftOperatorExpression();
            this.state = 1861;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 304, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1852;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1851;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1854;
                    this.match(CypherParser.T__17);
                    this.state = 1856;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1855;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1858;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 1863;
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
        this.enterRule(localctx, 208, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1864;
            this.oC_AddOrSubtractExpression();
            this.state = 1876;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 307, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1866;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1865;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1868;
                    this.kU_BitShiftOperator();
                    this.state = 1870;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1869;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1872;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 1878;
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
        this.enterRule(localctx, 210, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1879;
            _la = this._input.LA(1);
            if(!(_la===19 || _la===20)) {
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
        this.enterRule(localctx, 212, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1881;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 1893;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 310, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1883;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1882;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1885;
                    this.kU_AddOrSubtractOperator();
                    this.state = 1887;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1886;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1889;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 1895;
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
        this.enterRule(localctx, 214, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1896;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===118)) {
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
        this.enterRule(localctx, 216, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1898;
            this.oC_PowerOfExpression();
            this.state = 1910;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 313, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1900;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1899;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1902;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 1904;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1903;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1906;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 1912;
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
        this.enterRule(localctx, 218, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1913;
            _la = this._input.LA(1);
            if(!(_la===22 || _la===23 || _la===101)) {
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
        this.enterRule(localctx, 220, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1915;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 1926;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 316, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1917;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1916;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1919;
                    this.match(CypherParser.T__23);
                    this.state = 1921;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 1920;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1923;
                    this.oC_UnaryAddSubtractOrFactorialExpression();
                    }
                    }
                }
                this.state = 1928;
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
        this.enterRule(localctx, 222, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1935;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===118) {
                {
                {
                this.state = 1929;
                this.match(CypherParser.MINUS);
                this.state = 1931;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1930;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1937;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1938;
            this.oC_StringListNullOperatorExpression();
            this.state = 1943;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 320, this._ctx) ) {
            case 1:
                {
                this.state = 1940;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1939;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1942;
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
        this.enterRule(localctx, 224, CypherParser.RULE_oC_StringListNullOperatorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1945;
            this.oC_PropertyOrLabelsExpression();
            this.state = 1953;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 322, this._ctx) ) {
            case 1:
                {
                this.state = 1946;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 1948;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1947;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1950;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 321, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 1952;
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
        this.enterRule(localctx, 226, CypherParser.RULE_oC_ListOperatorExpression);
        let _la: number;
        try {
            this.state = 1974;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 326, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1955;
                this.match(CypherParser.SP);
                this.state = 1956;
                this.match(CypherParser.IN);
                this.state = 1958;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 1957;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1960;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1961;
                this.match(CypherParser.T__6);
                this.state = 1962;
                this.oC_Expression();
                this.state = 1963;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1965;
                this.match(CypherParser.T__6);
                this.state = 1967;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 1624439845) !== 0) || _la===149) {
                    {
                    this.state = 1966;
                    this.oC_Expression();
                    }
                }

                this.state = 1969;
                this.match(CypherParser.COLON);
                this.state = 1971;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 1624439845) !== 0) || _la===149) {
                    {
                    this.state = 1970;
                    this.oC_Expression();
                    }
                }

                this.state = 1973;
                this.match(CypherParser.T__7);
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
        this.enterRule(localctx, 228, CypherParser.RULE_oC_StringOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1987;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 327, this._ctx) ) {
            case 1:
                {
                this.state = 1976;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 1977;
                this.match(CypherParser.SP);
                this.state = 1978;
                this.match(CypherParser.STARTS);
                this.state = 1979;
                this.match(CypherParser.SP);
                this.state = 1980;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 1981;
                this.match(CypherParser.SP);
                this.state = 1982;
                this.match(CypherParser.ENDS);
                this.state = 1983;
                this.match(CypherParser.SP);
                this.state = 1984;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 1985;
                this.match(CypherParser.SP);
                this.state = 1986;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 1990;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1989;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1992;
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
        this.enterRule(localctx, 230, CypherParser.RULE_oC_RegularExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1995;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1994;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1997;
            this.match(CypherParser.T__24);
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
        this.enterRule(localctx, 232, CypherParser.RULE_oC_NullOperatorExpression);
        try {
            this.state = 2009;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 330, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1999;
                this.match(CypherParser.SP);
                this.state = 2000;
                this.match(CypherParser.IS);
                this.state = 2001;
                this.match(CypherParser.SP);
                this.state = 2002;
                this.match(CypherParser.NULL_);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2003;
                this.match(CypherParser.SP);
                this.state = 2004;
                this.match(CypherParser.IS);
                this.state = 2005;
                this.match(CypherParser.SP);
                this.state = 2006;
                this.match(CypherParser.NOT);
                this.state = 2007;
                this.match(CypherParser.SP);
                this.state = 2008;
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
        this.enterRule(localctx, 234, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2011;
            this.oC_Atom();
            this.state = 2018;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 332, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2013;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 2012;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2015;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2020;
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
        this.enterRule(localctx, 236, CypherParser.RULE_oC_Atom);
        try {
            this.state = 2030;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 333, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2021;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2022;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2023;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2024;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2025;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2026;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2027;
                this.oC_ExistSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2028;
                this.kU_CountSubquery();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2029;
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
        this.enterRule(localctx, 238, CypherParser.RULE_oC_Literal);
        try {
            this.state = 2038;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2032;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2033;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.TRUE:
            case CypherParser.FALSE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2034;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL_:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2035;
                this.match(CypherParser.NULL_);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2036;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2037;
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
        this.enterRule(localctx, 240, CypherParser.RULE_oC_BooleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2040;
            _la = this._input.LA(1);
            if(!(_la===127 || _la===128)) {
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
        this.enterRule(localctx, 242, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2042;
            this.match(CypherParser.T__6);
            this.state = 2044;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2043;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2059;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 1624439845) !== 0) || _la===149) {
                {
                this.state = 2046;
                this.oC_Expression();
                this.state = 2048;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2047;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2056;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 2050;
                    this.kU_ListEntry();
                    this.state = 2052;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 2051;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2058;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2061;
            this.match(CypherParser.T__7);
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
        this.enterRule(localctx, 244, CypherParser.RULE_kU_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2063;
            this.match(CypherParser.T__2);
            this.state = 2065;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 340, this._ctx) ) {
            case 1:
                {
                this.state = 2064;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2068;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 1624439845) !== 0) || _la===149) {
                {
                this.state = 2067;
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
        this.enterRule(localctx, 246, CypherParser.RULE_kU_StructLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2070;
            this.match(CypherParser.T__8);
            this.state = 2072;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2071;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2074;
            this.kU_StructField();
            this.state = 2076;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2075;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2088;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 2078;
                this.match(CypherParser.T__2);
                this.state = 2080;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2079;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2082;
                this.kU_StructField();
                this.state = 2084;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2083;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2090;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2091;
            this.match(CypherParser.T__9);
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
        this.enterRule(localctx, 248, CypherParser.RULE_kU_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2095;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.USE:
            case CypherParser.COMMENT_:
            case CypherParser.EXPORT:
            case CypherParser.IMPORT:
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
                this.state = 2093;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2094;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2098;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2097;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2100;
            this.match(CypherParser.COLON);
            this.state = 2102;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2101;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2104;
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
        this.enterRule(localctx, 250, CypherParser.RULE_oC_ParenthesizedExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2106;
            this.match(CypherParser.T__1);
            this.state = 2108;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2107;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2110;
            this.oC_Expression();
            this.state = 2112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2111;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2114;
            this.match(CypherParser.T__3);
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
        this.enterRule(localctx, 252, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2164;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 364, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2116;
                this.match(CypherParser.COUNT);
                this.state = 2118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2117;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2120;
                this.match(CypherParser.T__1);
                this.state = 2122;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2121;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2124;
                this.match(CypherParser.STAR);
                this.state = 2126;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2125;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2128;
                this.match(CypherParser.T__3);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2129;
                this.oC_FunctionName();
                this.state = 2131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2130;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2133;
                this.match(CypherParser.T__1);
                this.state = 2135;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2134;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===100) {
                    {
                    this.state = 2137;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2139;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 2138;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 1624439845) !== 0) || _la===149) {
                    {
                    this.state = 2143;
                    this.kU_FunctionParameter();
                    this.state = 2145;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 2144;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2157;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===3) {
                        {
                        {
                        this.state = 2147;
                        this.match(CypherParser.T__2);
                        this.state = 2149;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 2148;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2151;
                        this.kU_FunctionParameter();
                        this.state = 2153;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 2152;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2159;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2162;
                this.match(CypherParser.T__3);
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
        this.enterRule(localctx, 254, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2166;
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
        this.enterRule(localctx, 256, CypherParser.RULE_kU_FunctionParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2177;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 367, this._ctx) ) {
            case 1:
                {
                this.state = 2168;
                this.oC_SymbolicName();
                this.state = 2170;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2169;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2172;
                this.match(CypherParser.COLON);
                this.state = 2173;
                this.match(CypherParser.T__5);
                this.state = 2175;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2174;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 2179;
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
        this.enterRule(localctx, 258, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2181;
            this.oC_NodePattern();
            this.state = 2186;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2183;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===150) {
                        {
                        this.state = 2182;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2185;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2188;
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
        this.enterRule(localctx, 260, CypherParser.RULE_oC_ExistSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2190;
            this.match(CypherParser.EXISTS);
            this.state = 2192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2191;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2194;
            this.match(CypherParser.T__8);
            this.state = 2196;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2195;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2198;
            this.match(CypherParser.MATCH);
            this.state = 2200;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2199;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2202;
            this.oC_Pattern();
            this.state = 2207;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 374, this._ctx) ) {
            case 1:
                {
                this.state = 2204;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2203;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2206;
                this.oC_Where();
                }
                break;
            }
            this.state = 2210;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2209;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2212;
            this.match(CypherParser.T__9);
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
        this.enterRule(localctx, 262, CypherParser.RULE_kU_CountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2214;
            this.match(CypherParser.COUNT);
            this.state = 2216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2215;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2218;
            this.match(CypherParser.T__8);
            this.state = 2220;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2219;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2222;
            this.match(CypherParser.MATCH);
            this.state = 2224;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2223;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2226;
            this.oC_Pattern();
            this.state = 2231;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
            case 1:
                {
                this.state = 2228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2227;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2230;
                this.oC_Where();
                }
                break;
            }
            this.state = 2234;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2233;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2236;
            this.match(CypherParser.T__9);
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
        this.enterRule(localctx, 264, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2238;
            this.match(CypherParser.T__4);
            this.state = 2240;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2239;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2244;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.USE:
            case CypherParser.COMMENT_:
            case CypherParser.EXPORT:
            case CypherParser.IMPORT:
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
                this.state = 2242;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2243;
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
        this.enterRule(localctx, 266, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2268;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 389, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2246;
                this.match(CypherParser.CASE);
                this.state = 2251;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2248;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 2247;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2250;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2253;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 385, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2255;
                this.match(CypherParser.CASE);
                this.state = 2257;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2256;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2259;
                this.oC_Expression();
                this.state = 2264;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2261;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===150) {
                            {
                            this.state = 2260;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2263;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2266;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 388, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2278;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 392, this._ctx) ) {
            case 1:
                {
                this.state = 2271;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2270;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2273;
                this.match(CypherParser.ELSE);
                this.state = 2275;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 2274;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2277;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2281;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2280;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2283;
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
        this.enterRule(localctx, 268, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2285;
            this.match(CypherParser.WHEN);
            this.state = 2287;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2286;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2289;
            this.oC_Expression();
            this.state = 2291;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2290;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2293;
            this.match(CypherParser.THEN);
            this.state = 2295;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2294;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2297;
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
        this.enterRule(localctx, 270, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2299;
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
        this.enterRule(localctx, 272, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 2303;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2301;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2302;
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
        this.enterRule(localctx, 274, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2305;
            this.match(CypherParser.T__25);
            this.state = 2308;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.USE:
            case CypherParser.COMMENT_:
            case CypherParser.EXPORT:
            case CypherParser.IMPORT:
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
                this.state = 2306;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2307;
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
        this.enterRule(localctx, 276, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2310;
            this.oC_Atom();
            this.state = 2312;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 2311;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2314;
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
        this.enterRule(localctx, 278, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2316;
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
        this.enterRule(localctx, 280, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2318;
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
        this.enterRule(localctx, 282, CypherParser.RULE_oC_DoubleLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2320;
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
        this.enterRule(localctx, 284, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2322;
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
        this.enterRule(localctx, 286, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 2329;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2324;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2325;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2327;
                this.match(CypherParser.HexLetter);
                }
                break;
            case CypherParser.USE:
            case CypherParser.COMMENT_:
            case CypherParser.EXPORT:
            case CypherParser.IMPORT:
            case CypherParser.DATABASE:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.IN:
            case CypherParser.COUNT:
            case CypherParser.END:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2328;
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
        this.enterRule(localctx, 288, CypherParser.RULE_kU_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2331;
            _la = this._input.LA(1);
            if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 71307013) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 4353) !== 0))) {
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
        this.enterRule(localctx, 290, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2333;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2013282304) !== 0))) {
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
        this.enterRule(localctx, 292, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2335;
            _la = this._input.LA(1);
            if(!(((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 491521) !== 0))) {
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
        this.enterRule(localctx, 294, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2337;
            _la = this._input.LA(1);
            if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2047) !== 0) || _la===118)) {
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
        case 36:
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
        4,1,153,2340,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        1,0,1,0,3,0,299,8,0,1,0,1,0,3,0,303,8,0,1,0,5,0,306,8,0,10,0,12,
        0,309,9,0,1,0,3,0,312,8,0,1,0,1,0,1,1,3,1,317,8,1,1,1,3,1,320,8,
        1,1,1,1,1,3,1,324,8,1,1,1,3,1,327,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,349,8,
        2,1,3,1,3,1,3,1,3,3,3,355,8,3,1,3,1,3,3,3,359,8,3,1,3,3,3,362,8,
        3,1,3,1,3,1,3,1,3,3,3,368,8,3,1,3,3,3,371,8,3,1,4,1,4,3,4,375,8,
        4,1,4,1,4,3,4,379,8,4,1,4,1,4,3,4,383,8,4,1,4,5,4,386,8,4,10,4,12,
        4,389,9,4,1,4,3,4,392,8,4,1,4,1,4,1,5,1,5,1,5,3,5,399,8,5,1,5,1,
        5,3,5,403,8,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,411,8,5,1,5,1,5,3,5,415,
        8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,425,8,6,1,6,1,6,3,6,429,
        8,6,1,6,1,6,3,6,433,8,6,1,6,5,6,436,8,6,10,6,12,6,439,9,6,1,6,1,
        6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,451,8,7,1,7,1,7,3,7,455,8,
        7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,463,8,7,1,7,3,7,466,8,7,1,8,1,8,1,
        8,1,8,1,8,1,8,3,8,474,8,8,1,8,3,8,477,8,8,1,9,1,9,1,9,1,9,1,9,1,
        9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,494,8,10,1,10,
        3,10,497,8,10,1,10,1,10,3,10,501,8,10,1,10,1,10,1,10,1,10,3,10,507,
        8,10,1,10,3,10,510,8,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,
        1,13,1,13,1,13,1,13,3,13,524,8,13,1,13,1,13,3,13,528,8,13,1,13,1,
        13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
        15,1,15,1,15,1,15,1,15,1,15,3,15,550,8,15,1,15,1,15,3,15,554,8,15,
        1,15,3,15,557,8,15,1,15,3,15,560,8,15,1,15,3,15,563,8,15,1,15,3,
        15,566,8,15,1,15,1,15,3,15,570,8,15,1,15,5,15,573,8,15,10,15,12,
        15,576,9,15,1,15,3,15,579,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,
        1,16,3,16,589,8,16,1,16,1,16,3,16,593,8,16,1,16,5,16,596,8,16,10,
        16,12,16,599,9,16,1,17,1,17,3,17,603,8,17,1,17,1,17,1,17,3,17,608,
        8,17,1,17,1,17,1,18,1,18,3,18,614,8,18,1,18,1,18,3,18,618,8,18,1,
        18,1,18,3,18,622,8,18,1,18,5,18,625,8,18,10,18,12,18,628,9,18,1,
        18,1,18,1,18,1,18,3,18,634,8,18,1,18,1,18,3,18,638,8,18,1,18,1,18,
        3,18,642,8,18,1,18,3,18,645,8,18,1,19,1,19,3,19,649,8,19,1,19,1,
        19,3,19,653,8,19,1,19,1,19,3,19,657,8,19,1,19,5,19,660,8,19,10,19,
        12,19,663,9,19,1,19,3,19,666,8,19,1,19,1,19,1,20,1,20,3,20,672,8,
        20,1,20,1,20,3,20,676,8,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,
        21,1,21,1,21,3,21,688,8,21,1,21,1,21,3,21,692,8,21,1,21,1,21,3,21,
        696,8,21,1,21,1,21,3,21,700,8,21,1,21,1,21,1,21,3,21,705,8,21,1,
        21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,717,8,22,1,
        22,1,22,3,22,721,8,22,1,22,1,22,3,22,725,8,22,1,22,1,22,3,22,729,
        8,22,1,22,1,22,3,22,733,8,22,3,22,735,8,22,1,22,1,22,3,22,739,8,
        22,1,22,1,22,3,22,743,8,22,3,22,745,8,22,1,22,1,22,1,23,1,23,1,23,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,759,8,23,1,23,1,23,3,23,
        763,8,23,1,23,1,23,3,23,767,8,23,1,23,1,23,3,23,771,8,23,1,23,4,
        23,774,8,23,11,23,12,23,775,1,23,3,23,779,8,23,1,23,1,23,3,23,783,
        8,23,1,23,1,23,3,23,787,8,23,3,23,789,8,23,1,23,1,23,3,23,793,8,
        23,1,23,1,23,3,23,797,8,23,3,23,799,8,23,1,23,1,23,1,24,1,24,1,24,
        1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,
        1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,28,
        1,28,1,28,1,28,3,28,835,8,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
        1,29,1,29,3,29,846,8,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,
        1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,3,33,
        868,8,33,1,33,1,33,3,33,872,8,33,1,33,5,33,875,8,33,10,33,12,33,
        878,9,33,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,3,35,888,8,35,1,
        35,1,35,3,35,892,8,35,1,35,1,35,3,35,896,8,35,1,35,1,35,1,36,1,36,
        1,36,1,36,3,36,904,8,36,1,36,1,36,3,36,908,8,36,1,36,1,36,3,36,912,
        8,36,1,36,1,36,1,36,1,36,3,36,918,8,36,1,36,1,36,3,36,922,8,36,1,
        36,1,36,3,36,926,8,36,1,36,1,36,1,36,1,36,3,36,932,8,36,1,36,1,36,
        3,36,936,8,36,1,36,1,36,3,36,940,8,36,1,36,1,36,3,36,944,8,36,1,
        36,1,36,3,36,948,8,36,1,36,1,36,3,36,952,8,36,1,36,1,36,5,36,956,
        8,36,10,36,12,36,959,9,36,1,37,1,37,5,37,963,8,37,10,37,12,37,966,
        9,37,1,38,1,38,3,38,970,8,38,1,38,1,38,1,39,1,39,3,39,976,8,39,1,
        40,1,40,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,
        42,1,42,1,42,1,42,1,42,3,42,996,8,42,1,43,1,43,3,43,1000,8,43,1,
        44,1,44,1,44,1,44,1,44,1,44,3,44,1008,8,44,1,45,1,45,1,45,1,45,1,
        46,1,46,1,47,1,47,3,47,1018,8,47,1,47,5,47,1021,8,47,10,47,12,47,
        1024,9,47,1,47,1,47,3,47,1028,8,47,4,47,1030,8,47,11,47,12,47,1031,
        1,47,1,47,1,47,3,47,1037,8,47,1,48,1,48,1,48,1,48,3,48,1043,8,48,
        1,48,1,48,1,48,3,48,1048,8,48,1,48,3,48,1051,8,48,1,49,1,49,3,49,
        1055,8,49,1,50,1,50,3,50,1059,8,50,5,50,1061,8,50,10,50,12,50,1064,
        9,50,1,50,1,50,1,50,3,50,1069,8,50,5,50,1071,8,50,10,50,12,50,1074,
        9,50,1,50,1,50,3,50,1078,8,50,1,50,5,50,1081,8,50,10,50,12,50,1084,
        9,50,1,50,3,50,1087,8,50,1,50,3,50,1090,8,50,1,50,1,50,3,50,1094,
        8,50,4,50,1096,8,50,11,50,12,50,1097,1,50,1,50,3,50,1102,8,50,1,
        51,1,51,3,51,1106,8,51,4,51,1108,8,51,11,51,12,51,1109,1,51,1,51,
        1,52,1,52,3,52,1116,8,52,5,52,1118,8,52,10,52,12,52,1121,9,52,1,
        52,1,52,3,52,1125,8,52,5,52,1127,8,52,10,52,12,52,1130,9,52,1,52,
        1,52,1,53,1,53,1,53,1,53,3,53,1138,8,53,1,54,1,54,1,54,1,54,3,54,
        1144,8,54,1,55,1,55,1,55,1,55,1,55,1,55,3,55,1152,8,55,1,55,1,55,
        3,55,1156,8,55,1,55,1,55,3,55,1160,8,55,1,55,1,55,3,55,1164,8,55,
        1,55,1,55,1,55,1,55,1,55,3,55,1171,8,55,1,55,3,55,1174,8,55,1,55,
        3,55,1177,8,55,1,55,3,55,1180,8,55,1,56,1,56,1,56,1,56,3,56,1186,
        8,56,1,56,3,56,1189,8,56,1,57,1,57,3,57,1193,8,57,1,57,1,57,3,57,
        1197,8,57,1,57,1,57,3,57,1201,8,57,1,57,3,57,1204,8,57,1,58,1,58,
        3,58,1208,8,58,1,58,1,58,1,58,1,58,1,58,1,58,1,59,1,59,3,59,1218,
        8,59,1,59,1,59,1,60,1,60,3,60,1224,8,60,1,60,1,60,1,60,5,60,1229,
        8,60,10,60,12,60,1232,9,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,
        61,1,61,1,61,3,61,1244,8,61,1,62,1,62,3,62,1248,8,62,1,62,1,62,3,
        62,1252,8,62,1,62,1,62,3,62,1256,8,62,1,62,5,62,1259,8,62,10,62,
        12,62,1262,9,62,1,63,1,63,3,63,1266,8,63,1,63,1,63,3,63,1270,8,63,
        1,63,1,63,1,64,1,64,3,64,1276,8,64,1,64,1,64,3,64,1280,8,64,1,64,
        1,64,3,64,1284,8,64,1,64,1,64,3,64,1288,8,64,1,64,5,64,1291,8,64,
        10,64,12,64,1294,9,64,1,65,1,65,1,65,3,65,1299,8,65,1,65,3,65,1302,
        8,65,1,66,1,66,1,66,1,67,3,67,1308,8,67,1,67,3,67,1311,8,67,1,67,
        1,67,1,67,1,67,3,67,1317,8,67,1,67,1,67,3,67,1321,8,67,1,67,1,67,
        3,67,1325,8,67,1,68,1,68,3,68,1329,8,68,1,68,1,68,3,68,1333,8,68,
        1,68,5,68,1336,8,68,10,68,12,68,1339,9,68,1,68,1,68,3,68,1343,8,
        68,1,68,1,68,3,68,1347,8,68,1,68,5,68,1350,8,68,10,68,12,68,1353,
        9,68,3,68,1355,8,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,3,69,1364,
        8,69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,3,70,1373,8,70,1,70,5,70,
        1376,8,70,10,70,12,70,1379,9,70,1,71,1,71,1,71,1,71,1,72,1,72,1,
        72,1,72,1,73,1,73,3,73,1391,8,73,1,73,3,73,1394,8,73,1,74,1,74,1,
        74,1,74,1,75,1,75,3,75,1402,8,75,1,75,1,75,3,75,1406,8,75,1,75,5,
        75,1409,8,75,10,75,12,75,1412,9,75,1,76,1,76,3,76,1416,8,76,1,76,
        1,76,3,76,1420,8,76,1,76,1,76,1,76,3,76,1425,8,76,1,77,1,77,1,78,
        1,78,3,78,1431,8,78,1,78,5,78,1434,8,78,10,78,12,78,1437,9,78,1,
        78,1,78,1,78,1,78,3,78,1443,8,78,1,79,1,79,3,79,1447,8,79,1,79,1,
        79,3,79,1451,8,79,3,79,1453,8,79,1,79,1,79,3,79,1457,8,79,3,79,1459,
        8,79,1,79,1,79,3,79,1463,8,79,3,79,1465,8,79,1,79,1,79,1,80,1,80,
        3,80,1471,8,80,1,80,1,80,1,81,1,81,3,81,1477,8,81,1,81,1,81,3,81,
        1481,8,81,1,81,3,81,1484,8,81,1,81,3,81,1487,8,81,1,81,1,81,1,81,
        1,81,3,81,1493,8,81,1,81,3,81,1496,8,81,1,81,3,81,1499,8,81,1,81,
        1,81,3,81,1503,8,81,1,81,1,81,1,81,1,81,3,81,1509,8,81,1,81,3,81,
        1512,8,81,1,81,3,81,1515,8,81,1,81,1,81,3,81,1519,8,81,1,82,1,82,
        3,82,1523,8,82,1,82,1,82,3,82,1527,8,82,3,82,1529,8,82,1,82,1,82,
        3,82,1533,8,82,3,82,1535,8,82,1,82,1,82,3,82,1539,8,82,3,82,1541,
        8,82,1,82,1,82,3,82,1545,8,82,3,82,1547,8,82,1,82,1,82,1,83,1,83,
        3,83,1553,8,83,1,83,1,83,3,83,1557,8,83,1,83,1,83,3,83,1561,8,83,
        1,83,1,83,3,83,1565,8,83,1,83,1,83,3,83,1569,8,83,1,83,1,83,3,83,
        1573,8,83,1,83,1,83,3,83,1577,8,83,1,83,1,83,3,83,1581,8,83,5,83,
        1583,8,83,10,83,12,83,1586,9,83,3,83,1588,8,83,1,83,1,83,1,84,1,
        84,3,84,1594,8,84,1,84,1,84,3,84,1598,8,84,1,84,1,84,3,84,1602,8,
        84,1,84,3,84,1605,8,84,1,84,5,84,1608,8,84,10,84,12,84,1611,9,84,
        1,85,1,85,3,85,1615,8,85,1,85,5,85,1618,8,85,10,85,12,85,1621,9,
        85,1,86,1,86,3,86,1625,8,86,1,86,1,86,1,87,1,87,3,87,1631,8,87,1,
        87,1,87,1,87,1,87,3,87,1637,8,87,1,87,3,87,1640,8,87,1,87,3,87,1643,
        8,87,1,87,3,87,1646,8,87,1,87,1,87,3,87,1650,8,87,1,87,3,87,1653,
        8,87,1,87,3,87,1656,8,87,1,87,3,87,1659,8,87,1,87,3,87,1662,8,87,
        1,88,1,88,3,88,1666,8,88,1,88,1,88,3,88,1670,8,88,1,88,1,88,3,88,
        1674,8,88,1,88,1,88,3,88,1678,8,88,1,88,1,88,3,88,1682,8,88,1,88,
        3,88,1685,8,88,1,88,3,88,1688,8,88,1,88,1,88,3,88,1692,8,88,1,88,
        1,88,3,88,1696,8,88,1,88,1,88,3,88,1700,8,88,1,88,1,88,3,88,1704,
        8,88,3,88,1706,8,88,1,88,1,88,1,89,1,89,3,89,1712,8,89,1,89,3,89,
        1715,8,89,1,89,3,89,1718,8,89,1,89,1,89,1,90,1,90,3,90,1724,8,90,
        1,90,3,90,1727,8,90,1,90,3,90,1730,8,90,1,90,1,90,1,91,1,91,1,92,
        1,92,1,93,1,93,1,94,1,94,1,95,1,95,1,96,1,96,1,96,1,96,1,96,5,96,
        1749,8,96,10,96,12,96,1752,9,96,1,97,1,97,1,97,1,97,1,97,5,97,1759,
        8,97,10,97,12,97,1762,9,97,1,98,1,98,1,98,1,98,1,98,5,98,1769,8,
        98,10,98,12,98,1772,9,98,1,99,1,99,3,99,1776,8,99,5,99,1778,8,99,
        10,99,12,99,1781,9,99,1,99,1,99,1,100,1,100,3,100,1787,8,100,1,100,
        1,100,3,100,1791,8,100,1,100,1,100,3,100,1795,8,100,1,100,1,100,
        3,100,1799,8,100,1,100,1,100,3,100,1803,8,100,1,100,1,100,1,100,
        1,100,1,100,1,100,3,100,1811,8,100,1,100,1,100,3,100,1815,8,100,
        1,100,1,100,3,100,1819,8,100,1,100,1,100,3,100,1823,8,100,1,100,
        1,100,4,100,1827,8,100,11,100,12,100,1828,1,100,1,100,3,100,1833,
        8,100,1,101,1,101,1,102,1,102,3,102,1839,8,102,1,102,1,102,3,102,
        1843,8,102,1,102,5,102,1846,8,102,10,102,12,102,1849,9,102,1,103,
        1,103,3,103,1853,8,103,1,103,1,103,3,103,1857,8,103,1,103,5,103,
        1860,8,103,10,103,12,103,1863,9,103,1,104,1,104,3,104,1867,8,104,
        1,104,1,104,3,104,1871,8,104,1,104,1,104,5,104,1875,8,104,10,104,
        12,104,1878,9,104,1,105,1,105,1,106,1,106,3,106,1884,8,106,1,106,
        1,106,3,106,1888,8,106,1,106,1,106,5,106,1892,8,106,10,106,12,106,
        1895,9,106,1,107,1,107,1,108,1,108,3,108,1901,8,108,1,108,1,108,
        3,108,1905,8,108,1,108,1,108,5,108,1909,8,108,10,108,12,108,1912,
        9,108,1,109,1,109,1,110,1,110,3,110,1918,8,110,1,110,1,110,3,110,
        1922,8,110,1,110,5,110,1925,8,110,10,110,12,110,1928,9,110,1,111,
        1,111,3,111,1932,8,111,5,111,1934,8,111,10,111,12,111,1937,9,111,
        1,111,1,111,3,111,1941,8,111,1,111,3,111,1944,8,111,1,112,1,112,
        1,112,4,112,1949,8,112,11,112,12,112,1950,1,112,3,112,1954,8,112,
        1,113,1,113,1,113,3,113,1959,8,113,1,113,1,113,1,113,1,113,1,113,
        1,113,1,113,3,113,1968,8,113,1,113,1,113,3,113,1972,8,113,1,113,
        3,113,1975,8,113,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,
        1,114,1,114,1,114,3,114,1988,8,114,1,114,3,114,1991,8,114,1,114,
        1,114,1,115,3,115,1996,8,115,1,115,1,115,1,116,1,116,1,116,1,116,
        1,116,1,116,1,116,1,116,1,116,1,116,3,116,2010,8,116,1,117,1,117,
        3,117,2014,8,117,1,117,5,117,2017,8,117,10,117,12,117,2020,9,117,
        1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,3,118,2031,
        8,118,1,119,1,119,1,119,1,119,1,119,1,119,3,119,2039,8,119,1,120,
        1,120,1,121,1,121,3,121,2045,8,121,1,121,1,121,3,121,2049,8,121,
        1,121,1,121,3,121,2053,8,121,5,121,2055,8,121,10,121,12,121,2058,
        9,121,3,121,2060,8,121,1,121,1,121,1,122,1,122,3,122,2066,8,122,
        1,122,3,122,2069,8,122,1,123,1,123,3,123,2073,8,123,1,123,1,123,
        3,123,2077,8,123,1,123,1,123,3,123,2081,8,123,1,123,1,123,3,123,
        2085,8,123,5,123,2087,8,123,10,123,12,123,2090,9,123,1,123,1,123,
        1,124,1,124,3,124,2096,8,124,1,124,3,124,2099,8,124,1,124,1,124,
        3,124,2103,8,124,1,124,1,124,1,125,1,125,3,125,2109,8,125,1,125,
        1,125,3,125,2113,8,125,1,125,1,125,1,126,1,126,3,126,2119,8,126,
        1,126,1,126,3,126,2123,8,126,1,126,1,126,3,126,2127,8,126,1,126,
        1,126,1,126,3,126,2132,8,126,1,126,1,126,3,126,2136,8,126,1,126,
        1,126,3,126,2140,8,126,3,126,2142,8,126,1,126,1,126,3,126,2146,8,
        126,1,126,1,126,3,126,2150,8,126,1,126,1,126,3,126,2154,8,126,5,
        126,2156,8,126,10,126,12,126,2159,9,126,3,126,2161,8,126,1,126,1,
        126,3,126,2165,8,126,1,127,1,127,1,128,1,128,3,128,2171,8,128,1,
        128,1,128,1,128,3,128,2176,8,128,3,128,2178,8,128,1,128,1,128,1,
        129,1,129,3,129,2184,8,129,1,129,4,129,2187,8,129,11,129,12,129,
        2188,1,130,1,130,3,130,2193,8,130,1,130,1,130,3,130,2197,8,130,1,
        130,1,130,3,130,2201,8,130,1,130,1,130,3,130,2205,8,130,1,130,3,
        130,2208,8,130,1,130,3,130,2211,8,130,1,130,1,130,1,131,1,131,3,
        131,2217,8,131,1,131,1,131,3,131,2221,8,131,1,131,1,131,3,131,2225,
        8,131,1,131,1,131,3,131,2229,8,131,1,131,3,131,2232,8,131,1,131,
        3,131,2235,8,131,1,131,1,131,1,132,1,132,3,132,2241,8,132,1,132,
        1,132,3,132,2245,8,132,1,133,1,133,3,133,2249,8,133,1,133,4,133,
        2252,8,133,11,133,12,133,2253,1,133,1,133,3,133,2258,8,133,1,133,
        1,133,3,133,2262,8,133,1,133,4,133,2265,8,133,11,133,12,133,2266,
        3,133,2269,8,133,1,133,3,133,2272,8,133,1,133,1,133,3,133,2276,8,
        133,1,133,3,133,2279,8,133,1,133,3,133,2282,8,133,1,133,1,133,1,
        134,1,134,3,134,2288,8,134,1,134,1,134,3,134,2292,8,134,1,134,1,
        134,3,134,2296,8,134,1,134,1,134,1,135,1,135,1,136,1,136,3,136,2304,
        8,136,1,137,1,137,1,137,3,137,2309,8,137,1,138,1,138,3,138,2313,
        8,138,1,138,1,138,1,139,1,139,1,140,1,140,1,141,1,141,1,142,1,142,
        1,143,1,143,1,143,1,143,1,143,3,143,2330,8,143,1,144,1,144,1,145,
        1,145,1,146,1,146,1,147,1,147,1,147,0,1,72,148,0,2,4,6,8,10,12,14,
        16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
        60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
        102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
        134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,
        166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,
        198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,
        230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,
        262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,
        294,0,11,2,0,60,60,62,62,1,0,107,110,2,0,6,6,13,17,1,0,19,20,2,0,
        21,21,118,118,2,0,22,23,101,101,1,0,127,128,8,0,48,48,50,50,56,59,
        70,70,74,74,121,121,129,129,133,133,2,0,14,14,27,30,2,0,16,16,31,
        34,2,0,35,45,118,118,2648,0,296,1,0,0,0,2,316,1,0,0,0,4,348,1,0,
        0,0,6,350,1,0,0,0,8,372,1,0,0,0,10,414,1,0,0,0,12,416,1,0,0,0,14,
        446,1,0,0,0,16,467,1,0,0,0,18,478,1,0,0,0,20,484,1,0,0,0,22,511,
        1,0,0,0,24,515,1,0,0,0,26,519,1,0,0,0,28,531,1,0,0,0,30,543,1,0,
        0,0,32,586,1,0,0,0,34,600,1,0,0,0,36,644,1,0,0,0,38,646,1,0,0,0,
        40,669,1,0,0,0,42,679,1,0,0,0,44,708,1,0,0,0,46,748,1,0,0,0,48,802,
        1,0,0,0,50,810,1,0,0,0,52,816,1,0,0,0,54,822,1,0,0,0,56,834,1,0,
        0,0,58,836,1,0,0,0,60,847,1,0,0,0,62,851,1,0,0,0,64,857,1,0,0,0,
        66,865,1,0,0,0,68,879,1,0,0,0,70,883,1,0,0,0,72,951,1,0,0,0,74,960,
        1,0,0,0,76,967,1,0,0,0,78,975,1,0,0,0,80,977,1,0,0,0,82,979,1,0,
        0,0,84,995,1,0,0,0,86,999,1,0,0,0,88,1001,1,0,0,0,90,1009,1,0,0,
        0,92,1013,1,0,0,0,94,1036,1,0,0,0,96,1050,1,0,0,0,98,1054,1,0,0,
        0,100,1101,1,0,0,0,102,1107,1,0,0,0,104,1119,1,0,0,0,106,1137,1,
        0,0,0,108,1143,1,0,0,0,110,1145,1,0,0,0,112,1181,1,0,0,0,114,1192,
        1,0,0,0,116,1205,1,0,0,0,118,1215,1,0,0,0,120,1221,1,0,0,0,122,1243,
        1,0,0,0,124,1245,1,0,0,0,126,1263,1,0,0,0,128,1275,1,0,0,0,130,1295,
        1,0,0,0,132,1303,1,0,0,0,134,1310,1,0,0,0,136,1354,1,0,0,0,138,1363,
        1,0,0,0,140,1365,1,0,0,0,142,1380,1,0,0,0,144,1384,1,0,0,0,146,1388,
        1,0,0,0,148,1395,1,0,0,0,150,1399,1,0,0,0,152,1424,1,0,0,0,154,1426,
        1,0,0,0,156,1442,1,0,0,0,158,1444,1,0,0,0,160,1468,1,0,0,0,162,1518,
        1,0,0,0,164,1520,1,0,0,0,166,1550,1,0,0,0,168,1591,1,0,0,0,170,1612,
        1,0,0,0,172,1622,1,0,0,0,174,1628,1,0,0,0,176,1663,1,0,0,0,178,1709,
        1,0,0,0,180,1721,1,0,0,0,182,1733,1,0,0,0,184,1735,1,0,0,0,186,1737,
        1,0,0,0,188,1739,1,0,0,0,190,1741,1,0,0,0,192,1743,1,0,0,0,194,1753,
        1,0,0,0,196,1763,1,0,0,0,198,1779,1,0,0,0,200,1832,1,0,0,0,202,1834,
        1,0,0,0,204,1836,1,0,0,0,206,1850,1,0,0,0,208,1864,1,0,0,0,210,1879,
        1,0,0,0,212,1881,1,0,0,0,214,1896,1,0,0,0,216,1898,1,0,0,0,218,1913,
        1,0,0,0,220,1915,1,0,0,0,222,1935,1,0,0,0,224,1945,1,0,0,0,226,1974,
        1,0,0,0,228,1987,1,0,0,0,230,1995,1,0,0,0,232,2009,1,0,0,0,234,2011,
        1,0,0,0,236,2030,1,0,0,0,238,2038,1,0,0,0,240,2040,1,0,0,0,242,2042,
        1,0,0,0,244,2063,1,0,0,0,246,2070,1,0,0,0,248,2095,1,0,0,0,250,2106,
        1,0,0,0,252,2164,1,0,0,0,254,2166,1,0,0,0,256,2177,1,0,0,0,258,2181,
        1,0,0,0,260,2190,1,0,0,0,262,2214,1,0,0,0,264,2238,1,0,0,0,266,2268,
        1,0,0,0,268,2285,1,0,0,0,270,2299,1,0,0,0,272,2303,1,0,0,0,274,2305,
        1,0,0,0,276,2310,1,0,0,0,278,2316,1,0,0,0,280,2318,1,0,0,0,282,2320,
        1,0,0,0,284,2322,1,0,0,0,286,2329,1,0,0,0,288,2331,1,0,0,0,290,2333,
        1,0,0,0,292,2335,1,0,0,0,294,2337,1,0,0,0,296,307,3,2,1,0,297,299,
        5,150,0,0,298,297,1,0,0,0,298,299,1,0,0,0,299,300,1,0,0,0,300,302,
        5,1,0,0,301,303,5,150,0,0,302,301,1,0,0,0,302,303,1,0,0,0,303,304,
        1,0,0,0,304,306,3,2,1,0,305,298,1,0,0,0,306,309,1,0,0,0,307,305,
        1,0,0,0,307,308,1,0,0,0,308,311,1,0,0,0,309,307,1,0,0,0,310,312,
        5,150,0,0,311,310,1,0,0,0,311,312,1,0,0,0,312,313,1,0,0,0,313,314,
        5,0,0,1,314,1,1,0,0,0,315,317,3,78,39,0,316,315,1,0,0,0,316,317,
        1,0,0,0,317,319,1,0,0,0,318,320,5,150,0,0,319,318,1,0,0,0,319,320,
        1,0,0,0,320,321,1,0,0,0,321,326,3,4,2,0,322,324,5,150,0,0,323,322,
        1,0,0,0,323,324,1,0,0,0,324,325,1,0,0,0,325,327,5,1,0,0,326,323,
        1,0,0,0,326,327,1,0,0,0,327,3,1,0,0,0,328,349,3,92,46,0,329,349,
        3,42,21,0,330,349,3,44,22,0,331,349,3,46,23,0,332,349,3,50,25,0,
        333,349,3,52,26,0,334,349,3,54,27,0,335,349,3,6,3,0,336,349,3,12,
        6,0,337,349,3,14,7,0,338,349,3,26,13,0,339,349,3,30,15,0,340,349,
        3,28,14,0,341,349,3,84,42,0,342,349,3,86,43,0,343,349,3,16,8,0,344,
        349,3,18,9,0,345,349,3,20,10,0,346,349,3,22,11,0,347,349,3,24,12,
        0,348,328,1,0,0,0,348,329,1,0,0,0,348,330,1,0,0,0,348,331,1,0,0,
        0,348,332,1,0,0,0,348,333,1,0,0,0,348,334,1,0,0,0,348,335,1,0,0,
        0,348,336,1,0,0,0,348,337,1,0,0,0,348,338,1,0,0,0,348,339,1,0,0,
        0,348,340,1,0,0,0,348,341,1,0,0,0,348,342,1,0,0,0,348,343,1,0,0,
        0,348,344,1,0,0,0,348,345,1,0,0,0,348,346,1,0,0,0,348,347,1,0,0,
        0,349,5,1,0,0,0,350,351,5,53,0,0,351,352,5,150,0,0,352,361,3,284,
        142,0,353,355,5,150,0,0,354,353,1,0,0,0,354,355,1,0,0,0,355,356,
        1,0,0,0,356,358,3,8,4,0,357,359,5,150,0,0,358,357,1,0,0,0,358,359,
        1,0,0,0,359,362,1,0,0,0,360,362,5,150,0,0,361,354,1,0,0,0,361,360,
        1,0,0,0,362,363,1,0,0,0,363,364,5,54,0,0,364,365,5,150,0,0,365,370,
        3,10,5,0,366,368,5,150,0,0,367,366,1,0,0,0,367,368,1,0,0,0,368,369,
        1,0,0,0,369,371,3,38,19,0,370,367,1,0,0,0,370,371,1,0,0,0,371,7,
        1,0,0,0,372,374,5,2,0,0,373,375,5,150,0,0,374,373,1,0,0,0,374,375,
        1,0,0,0,375,376,1,0,0,0,376,387,3,284,142,0,377,379,5,150,0,0,378,
        377,1,0,0,0,378,379,1,0,0,0,379,380,1,0,0,0,380,382,5,3,0,0,381,
        383,5,150,0,0,382,381,1,0,0,0,382,383,1,0,0,0,383,384,1,0,0,0,384,
        386,3,284,142,0,385,378,1,0,0,0,386,389,1,0,0,0,387,385,1,0,0,0,
        387,388,1,0,0,0,388,391,1,0,0,0,389,387,1,0,0,0,390,392,5,150,0,
        0,391,390,1,0,0,0,391,392,1,0,0,0,392,393,1,0,0,0,393,394,5,4,0,
        0,394,9,1,0,0,0,395,415,3,36,18,0,396,398,5,2,0,0,397,399,5,150,
        0,0,398,397,1,0,0,0,398,399,1,0,0,0,399,400,1,0,0,0,400,402,3,92,
        46,0,401,403,5,150,0,0,402,401,1,0,0,0,402,403,1,0,0,0,403,404,1,
        0,0,0,404,405,5,4,0,0,405,415,1,0,0,0,406,415,3,270,135,0,407,408,
        3,270,135,0,408,410,5,5,0,0,409,411,5,150,0,0,410,409,1,0,0,0,410,
        411,1,0,0,0,411,412,1,0,0,0,412,413,3,284,142,0,413,415,1,0,0,0,
        414,395,1,0,0,0,414,396,1,0,0,0,414,406,1,0,0,0,414,407,1,0,0,0,
        415,11,1,0,0,0,416,417,5,53,0,0,417,418,5,150,0,0,418,419,3,284,
        142,0,419,420,5,150,0,0,420,421,5,54,0,0,421,422,5,150,0,0,422,424,
        5,2,0,0,423,425,5,150,0,0,424,423,1,0,0,0,424,425,1,0,0,0,425,426,
        1,0,0,0,426,437,5,136,0,0,427,429,5,150,0,0,428,427,1,0,0,0,428,
        429,1,0,0,0,429,430,1,0,0,0,430,432,5,3,0,0,431,433,5,150,0,0,432,
        431,1,0,0,0,432,433,1,0,0,0,433,434,1,0,0,0,434,436,5,136,0,0,435,
        428,1,0,0,0,436,439,1,0,0,0,437,435,1,0,0,0,437,438,1,0,0,0,438,
        440,1,0,0,0,439,437,1,0,0,0,440,441,5,4,0,0,441,442,5,150,0,0,442,
        443,5,104,0,0,443,444,5,150,0,0,444,445,5,55,0,0,445,13,1,0,0,0,
        446,447,5,53,0,0,447,448,5,150,0,0,448,450,5,2,0,0,449,451,5,150,
        0,0,450,449,1,0,0,0,450,451,1,0,0,0,451,452,1,0,0,0,452,454,3,92,
        46,0,453,455,5,150,0,0,454,453,1,0,0,0,454,455,1,0,0,0,455,456,1,
        0,0,0,456,457,5,4,0,0,457,458,5,150,0,0,458,459,5,71,0,0,459,460,
        5,150,0,0,460,465,5,136,0,0,461,463,5,150,0,0,462,461,1,0,0,0,462,
        463,1,0,0,0,463,464,1,0,0,0,464,466,3,38,19,0,465,462,1,0,0,0,465,
        466,1,0,0,0,466,15,1,0,0,0,467,468,5,56,0,0,468,469,5,150,0,0,469,
        470,5,58,0,0,470,471,5,150,0,0,471,476,5,136,0,0,472,474,5,150,0,
        0,473,472,1,0,0,0,473,474,1,0,0,0,474,475,1,0,0,0,475,477,3,38,19,
        0,476,473,1,0,0,0,476,477,1,0,0,0,477,17,1,0,0,0,478,479,5,57,0,
        0,479,480,5,150,0,0,480,481,5,58,0,0,481,482,5,150,0,0,482,483,5,
        136,0,0,483,19,1,0,0,0,484,485,5,46,0,0,485,486,5,150,0,0,486,493,
        5,136,0,0,487,488,5,150,0,0,488,489,5,102,0,0,489,490,5,150,0,0,
        490,491,3,284,142,0,491,492,5,150,0,0,492,494,1,0,0,0,493,487,1,
        0,0,0,493,494,1,0,0,0,494,509,1,0,0,0,495,497,5,150,0,0,496,495,
        1,0,0,0,496,497,1,0,0,0,497,498,1,0,0,0,498,500,5,2,0,0,499,501,
        5,150,0,0,500,499,1,0,0,0,500,501,1,0,0,0,501,502,1,0,0,0,502,503,
        5,47,0,0,503,504,5,150,0,0,504,506,5,136,0,0,505,507,5,150,0,0,506,
        505,1,0,0,0,506,507,1,0,0,0,507,508,1,0,0,0,508,510,5,4,0,0,509,
        496,1,0,0,0,509,510,1,0,0,0,510,21,1,0,0,0,511,512,5,96,0,0,512,
        513,5,150,0,0,513,514,3,284,142,0,514,23,1,0,0,0,515,516,5,48,0,
        0,516,517,5,150,0,0,517,518,3,284,142,0,518,25,1,0,0,0,519,520,5,
        49,0,0,520,521,5,150,0,0,521,523,3,286,143,0,522,524,5,150,0,0,523,
        522,1,0,0,0,523,524,1,0,0,0,524,525,1,0,0,0,525,527,5,6,0,0,526,
        528,5,150,0,0,527,526,1,0,0,0,527,528,1,0,0,0,528,529,1,0,0,0,529,
        530,3,190,95,0,530,27,1,0,0,0,531,532,5,50,0,0,532,533,5,150,0,0,
        533,534,5,94,0,0,534,535,5,150,0,0,535,536,5,60,0,0,536,537,5,150,
        0,0,537,538,3,284,142,0,538,539,5,150,0,0,539,540,5,125,0,0,540,
        541,5,150,0,0,541,542,5,136,0,0,542,29,1,0,0,0,543,544,5,92,0,0,
        544,545,5,150,0,0,545,546,5,51,0,0,546,547,5,150,0,0,547,549,3,254,
        127,0,548,550,5,150,0,0,549,548,1,0,0,0,549,550,1,0,0,0,550,551,
        1,0,0,0,551,553,5,2,0,0,552,554,5,150,0,0,553,552,1,0,0,0,553,554,
        1,0,0,0,554,556,1,0,0,0,555,557,3,32,16,0,556,555,1,0,0,0,556,557,
        1,0,0,0,557,559,1,0,0,0,558,560,5,150,0,0,559,558,1,0,0,0,559,560,
        1,0,0,0,560,562,1,0,0,0,561,563,3,34,17,0,562,561,1,0,0,0,562,563,
        1,0,0,0,563,574,1,0,0,0,564,566,5,150,0,0,565,564,1,0,0,0,565,566,
        1,0,0,0,566,567,1,0,0,0,567,569,5,3,0,0,568,570,5,150,0,0,569,568,
        1,0,0,0,569,570,1,0,0,0,570,571,1,0,0,0,571,573,3,34,17,0,572,565,
        1,0,0,0,573,576,1,0,0,0,574,572,1,0,0,0,574,575,1,0,0,0,575,578,
        1,0,0,0,576,574,1,0,0,0,577,579,5,150,0,0,578,577,1,0,0,0,578,579,
        1,0,0,0,579,580,1,0,0,0,580,581,5,4,0,0,581,582,5,150,0,0,582,583,
        5,102,0,0,583,584,5,150,0,0,584,585,3,190,95,0,585,31,1,0,0,0,586,
        597,3,286,143,0,587,589,5,150,0,0,588,587,1,0,0,0,588,589,1,0,0,
        0,589,590,1,0,0,0,590,592,5,3,0,0,591,593,5,150,0,0,592,591,1,0,
        0,0,592,593,1,0,0,0,593,594,1,0,0,0,594,596,3,286,143,0,595,588,
        1,0,0,0,596,599,1,0,0,0,597,595,1,0,0,0,597,598,1,0,0,0,598,33,1,
        0,0,0,599,597,1,0,0,0,600,602,3,286,143,0,601,603,5,150,0,0,602,
        601,1,0,0,0,602,603,1,0,0,0,603,604,1,0,0,0,604,605,5,120,0,0,605,
        607,5,6,0,0,606,608,5,150,0,0,607,606,1,0,0,0,607,608,1,0,0,0,608,
        609,1,0,0,0,609,610,3,238,119,0,610,35,1,0,0,0,611,613,5,7,0,0,612,
        614,5,150,0,0,613,612,1,0,0,0,613,614,1,0,0,0,614,615,1,0,0,0,615,
        626,5,136,0,0,616,618,5,150,0,0,617,616,1,0,0,0,617,618,1,0,0,0,
        618,619,1,0,0,0,619,621,5,3,0,0,620,622,5,150,0,0,621,620,1,0,0,
        0,621,622,1,0,0,0,622,623,1,0,0,0,623,625,5,136,0,0,624,617,1,0,
        0,0,625,628,1,0,0,0,626,624,1,0,0,0,626,627,1,0,0,0,627,629,1,0,
        0,0,628,626,1,0,0,0,629,645,5,8,0,0,630,645,5,136,0,0,631,633,5,
        52,0,0,632,634,5,150,0,0,633,632,1,0,0,0,633,634,1,0,0,0,634,635,
        1,0,0,0,635,637,5,2,0,0,636,638,5,150,0,0,637,636,1,0,0,0,637,638,
        1,0,0,0,638,639,1,0,0,0,639,641,5,136,0,0,640,642,5,150,0,0,641,
        640,1,0,0,0,641,642,1,0,0,0,642,643,1,0,0,0,643,645,5,4,0,0,644,
        611,1,0,0,0,644,630,1,0,0,0,644,631,1,0,0,0,645,37,1,0,0,0,646,648,
        5,2,0,0,647,649,5,150,0,0,648,647,1,0,0,0,648,649,1,0,0,0,649,650,
        1,0,0,0,650,661,3,40,20,0,651,653,5,150,0,0,652,651,1,0,0,0,652,
        653,1,0,0,0,653,654,1,0,0,0,654,656,5,3,0,0,655,657,5,150,0,0,656,
        655,1,0,0,0,656,657,1,0,0,0,657,658,1,0,0,0,658,660,3,40,20,0,659,
        652,1,0,0,0,660,663,1,0,0,0,661,659,1,0,0,0,661,662,1,0,0,0,662,
        665,1,0,0,0,663,661,1,0,0,0,664,666,5,150,0,0,665,664,1,0,0,0,665,
        666,1,0,0,0,666,667,1,0,0,0,667,668,5,4,0,0,668,39,1,0,0,0,669,671,
        3,286,143,0,670,672,5,150,0,0,671,670,1,0,0,0,671,672,1,0,0,0,672,
        673,1,0,0,0,673,675,5,6,0,0,674,676,5,150,0,0,675,674,1,0,0,0,675,
        676,1,0,0,0,676,677,1,0,0,0,677,678,3,238,119,0,678,41,1,0,0,0,679,
        680,5,92,0,0,680,681,5,150,0,0,681,682,5,59,0,0,682,683,5,150,0,
        0,683,684,5,60,0,0,684,685,5,150,0,0,685,687,3,284,142,0,686,688,
        5,150,0,0,687,686,1,0,0,0,687,688,1,0,0,0,688,689,1,0,0,0,689,691,
        5,2,0,0,690,692,5,150,0,0,691,690,1,0,0,0,691,692,1,0,0,0,692,693,
        1,0,0,0,693,695,3,66,33,0,694,696,5,150,0,0,695,694,1,0,0,0,695,
        696,1,0,0,0,696,697,1,0,0,0,697,699,5,3,0,0,698,700,5,150,0,0,699,
        698,1,0,0,0,699,700,1,0,0,0,700,701,1,0,0,0,701,702,3,70,35,0,702,
        704,1,0,0,0,703,705,5,150,0,0,704,703,1,0,0,0,704,705,1,0,0,0,705,
        706,1,0,0,0,706,707,5,4,0,0,707,43,1,0,0,0,708,709,5,92,0,0,709,
        710,5,150,0,0,710,711,5,70,0,0,711,712,5,150,0,0,712,713,5,60,0,
        0,713,714,5,150,0,0,714,716,3,284,142,0,715,717,5,150,0,0,716,715,
        1,0,0,0,716,717,1,0,0,0,717,718,1,0,0,0,718,720,5,2,0,0,719,721,
        5,150,0,0,720,719,1,0,0,0,720,721,1,0,0,0,721,722,1,0,0,0,722,724,
        3,48,24,0,723,725,5,150,0,0,724,723,1,0,0,0,724,725,1,0,0,0,725,
        734,1,0,0,0,726,728,5,3,0,0,727,729,5,150,0,0,728,727,1,0,0,0,728,
        729,1,0,0,0,729,730,1,0,0,0,730,732,3,66,33,0,731,733,5,150,0,0,
        732,731,1,0,0,0,732,733,1,0,0,0,733,735,1,0,0,0,734,726,1,0,0,0,
        734,735,1,0,0,0,735,744,1,0,0,0,736,738,5,3,0,0,737,739,5,150,0,
        0,738,737,1,0,0,0,738,739,1,0,0,0,739,740,1,0,0,0,740,742,3,286,
        143,0,741,743,5,150,0,0,742,741,1,0,0,0,742,743,1,0,0,0,743,745,
        1,0,0,0,744,736,1,0,0,0,744,745,1,0,0,0,745,746,1,0,0,0,746,747,
        5,4,0,0,747,45,1,0,0,0,748,749,5,92,0,0,749,750,5,150,0,0,750,751,
        5,70,0,0,751,752,5,150,0,0,752,753,5,60,0,0,753,754,5,150,0,0,754,
        755,5,61,0,0,755,756,5,150,0,0,756,758,3,284,142,0,757,759,5,150,
        0,0,758,757,1,0,0,0,758,759,1,0,0,0,759,760,1,0,0,0,760,762,5,2,
        0,0,761,763,5,150,0,0,762,761,1,0,0,0,762,763,1,0,0,0,763,764,1,
        0,0,0,764,766,3,48,24,0,765,767,5,150,0,0,766,765,1,0,0,0,766,767,
        1,0,0,0,767,773,1,0,0,0,768,770,5,3,0,0,769,771,5,150,0,0,770,769,
        1,0,0,0,770,771,1,0,0,0,771,772,1,0,0,0,772,774,3,48,24,0,773,768,
        1,0,0,0,774,775,1,0,0,0,775,773,1,0,0,0,775,776,1,0,0,0,776,778,
        1,0,0,0,777,779,5,150,0,0,778,777,1,0,0,0,778,779,1,0,0,0,779,788,
        1,0,0,0,780,782,5,3,0,0,781,783,5,150,0,0,782,781,1,0,0,0,782,783,
        1,0,0,0,783,784,1,0,0,0,784,786,3,66,33,0,785,787,5,150,0,0,786,
        785,1,0,0,0,786,787,1,0,0,0,787,789,1,0,0,0,788,780,1,0,0,0,788,
        789,1,0,0,0,789,798,1,0,0,0,790,792,5,3,0,0,791,793,5,150,0,0,792,
        791,1,0,0,0,792,793,1,0,0,0,793,794,1,0,0,0,794,796,3,286,143,0,
        795,797,5,150,0,0,796,795,1,0,0,0,796,797,1,0,0,0,797,799,1,0,0,
        0,798,790,1,0,0,0,798,799,1,0,0,0,799,800,1,0,0,0,800,801,5,4,0,
        0,801,47,1,0,0,0,802,803,5,54,0,0,803,804,5,150,0,0,804,805,3,284,
        142,0,805,806,5,150,0,0,806,807,5,71,0,0,807,808,5,150,0,0,808,809,
        3,284,142,0,809,49,1,0,0,0,810,811,5,92,0,0,811,812,5,150,0,0,812,
        813,5,62,0,0,813,814,5,150,0,0,814,815,3,284,142,0,815,51,1,0,0,
        0,816,817,5,63,0,0,817,818,5,150,0,0,818,819,7,0,0,0,819,820,5,150,
        0,0,820,821,3,284,142,0,821,53,1,0,0,0,822,823,5,64,0,0,823,824,
        5,150,0,0,824,825,5,60,0,0,825,826,5,150,0,0,826,827,3,284,142,0,
        827,828,5,150,0,0,828,829,3,56,28,0,829,55,1,0,0,0,830,835,3,58,
        29,0,831,835,3,60,30,0,832,835,3,62,31,0,833,835,3,64,32,0,834,830,
        1,0,0,0,834,831,1,0,0,0,834,832,1,0,0,0,834,833,1,0,0,0,835,57,1,
        0,0,0,836,837,5,67,0,0,837,838,5,150,0,0,838,839,3,278,139,0,839,
        840,5,150,0,0,840,845,3,72,36,0,841,842,5,150,0,0,842,843,5,65,0,
        0,843,844,5,150,0,0,844,846,3,190,95,0,845,841,1,0,0,0,845,846,1,
        0,0,0,846,59,1,0,0,0,847,848,5,63,0,0,848,849,5,150,0,0,849,850,
        3,278,139,0,850,61,1,0,0,0,851,852,5,66,0,0,852,853,5,150,0,0,853,
        854,5,71,0,0,854,855,5,150,0,0,855,856,3,284,142,0,856,63,1,0,0,
        0,857,858,5,66,0,0,858,859,5,150,0,0,859,860,3,278,139,0,860,861,
        5,150,0,0,861,862,5,71,0,0,862,863,5,150,0,0,863,864,3,278,139,0,
        864,65,1,0,0,0,865,876,3,68,34,0,866,868,5,150,0,0,867,866,1,0,0,
        0,867,868,1,0,0,0,868,869,1,0,0,0,869,871,5,3,0,0,870,872,5,150,
        0,0,871,870,1,0,0,0,871,872,1,0,0,0,872,873,1,0,0,0,873,875,3,68,
        34,0,874,867,1,0,0,0,875,878,1,0,0,0,876,874,1,0,0,0,876,877,1,0,
        0,0,877,67,1,0,0,0,878,876,1,0,0,0,879,880,3,278,139,0,880,881,5,
        150,0,0,881,882,3,72,36,0,882,69,1,0,0,0,883,884,5,68,0,0,884,885,
        5,150,0,0,885,887,5,69,0,0,886,888,5,150,0,0,887,886,1,0,0,0,887,
        888,1,0,0,0,888,889,1,0,0,0,889,891,5,2,0,0,890,892,5,150,0,0,891,
        890,1,0,0,0,891,892,1,0,0,0,892,893,1,0,0,0,893,895,3,278,139,0,
        894,896,5,150,0,0,895,894,1,0,0,0,895,896,1,0,0,0,896,897,1,0,0,
        0,897,898,5,4,0,0,898,71,1,0,0,0,899,900,6,36,-1,0,900,952,3,286,
        143,0,901,903,5,85,0,0,902,904,5,150,0,0,903,902,1,0,0,0,903,904,
        1,0,0,0,904,905,1,0,0,0,905,907,5,2,0,0,906,908,5,150,0,0,907,906,
        1,0,0,0,907,908,1,0,0,0,908,909,1,0,0,0,909,911,3,66,33,0,910,912,
        5,150,0,0,911,910,1,0,0,0,911,912,1,0,0,0,912,913,1,0,0,0,913,914,
        5,4,0,0,914,952,1,0,0,0,915,917,3,286,143,0,916,918,5,150,0,0,917,
        916,1,0,0,0,917,918,1,0,0,0,918,919,1,0,0,0,919,921,5,2,0,0,920,
        922,5,150,0,0,921,920,1,0,0,0,921,922,1,0,0,0,922,923,1,0,0,0,923,
        925,3,66,33,0,924,926,5,150,0,0,925,924,1,0,0,0,925,926,1,0,0,0,
        926,927,1,0,0,0,927,928,5,4,0,0,928,952,1,0,0,0,929,931,3,286,143,
        0,930,932,5,150,0,0,931,930,1,0,0,0,931,932,1,0,0,0,932,933,1,0,
        0,0,933,935,5,2,0,0,934,936,5,150,0,0,935,934,1,0,0,0,935,936,1,
        0,0,0,936,937,1,0,0,0,937,939,3,72,36,0,938,940,5,150,0,0,939,938,
        1,0,0,0,939,940,1,0,0,0,940,941,1,0,0,0,941,943,5,3,0,0,942,944,
        5,150,0,0,943,942,1,0,0,0,943,944,1,0,0,0,944,945,1,0,0,0,945,947,
        3,72,36,0,946,948,5,150,0,0,947,946,1,0,0,0,947,948,1,0,0,0,948,
        949,1,0,0,0,949,950,5,4,0,0,950,952,1,0,0,0,951,899,1,0,0,0,951,
        901,1,0,0,0,951,915,1,0,0,0,951,929,1,0,0,0,952,957,1,0,0,0,953,
        954,10,4,0,0,954,956,3,74,37,0,955,953,1,0,0,0,956,959,1,0,0,0,957,
        955,1,0,0,0,957,958,1,0,0,0,958,73,1,0,0,0,959,957,1,0,0,0,960,964,
        3,76,38,0,961,963,3,76,38,0,962,961,1,0,0,0,963,966,1,0,0,0,964,
        962,1,0,0,0,964,965,1,0,0,0,965,75,1,0,0,0,966,964,1,0,0,0,967,969,
        5,7,0,0,968,970,3,280,140,0,969,968,1,0,0,0,969,970,1,0,0,0,970,
        971,1,0,0,0,971,972,5,8,0,0,972,77,1,0,0,0,973,976,3,80,40,0,974,
        976,3,82,41,0,975,973,1,0,0,0,975,974,1,0,0,0,976,79,1,0,0,0,977,
        978,5,72,0,0,978,81,1,0,0,0,979,980,5,73,0,0,980,83,1,0,0,0,981,
        982,5,74,0,0,982,983,5,150,0,0,983,996,5,75,0,0,984,985,5,74,0,0,
        985,986,5,150,0,0,986,987,5,75,0,0,987,988,5,150,0,0,988,989,5,76,
        0,0,989,990,5,150,0,0,990,996,5,77,0,0,991,996,5,79,0,0,992,996,
        5,80,0,0,993,996,5,81,0,0,994,996,5,82,0,0,995,981,1,0,0,0,995,984,
        1,0,0,0,995,991,1,0,0,0,995,992,1,0,0,0,995,993,1,0,0,0,995,994,
        1,0,0,0,996,85,1,0,0,0,997,1000,3,88,44,0,998,1000,3,90,45,0,999,
        997,1,0,0,0,999,998,1,0,0,0,1000,87,1,0,0,0,1001,1002,5,87,0,0,1002,
        1003,5,150,0,0,1003,1004,5,84,0,0,1004,1007,5,150,0,0,1005,1008,
        5,136,0,0,1006,1008,3,270,135,0,1007,1005,1,0,0,0,1007,1006,1,0,
        0,0,1008,89,1,0,0,0,1009,1010,5,83,0,0,1010,1011,5,150,0,0,1011,
        1012,3,270,135,0,1012,91,1,0,0,0,1013,1014,3,94,47,0,1014,93,1,0,
        0,0,1015,1022,3,98,49,0,1016,1018,5,150,0,0,1017,1016,1,0,0,0,1017,
        1018,1,0,0,0,1018,1019,1,0,0,0,1019,1021,3,96,48,0,1020,1017,1,0,
        0,0,1021,1024,1,0,0,0,1022,1020,1,0,0,0,1022,1023,1,0,0,0,1023,1037,
        1,0,0,0,1024,1022,1,0,0,0,1025,1027,3,132,66,0,1026,1028,5,150,0,
        0,1027,1026,1,0,0,0,1027,1028,1,0,0,0,1028,1030,1,0,0,0,1029,1025,
        1,0,0,0,1030,1031,1,0,0,0,1031,1029,1,0,0,0,1031,1032,1,0,0,0,1032,
        1033,1,0,0,0,1033,1034,3,98,49,0,1034,1035,6,47,-1,0,1035,1037,1,
        0,0,0,1036,1015,1,0,0,0,1036,1029,1,0,0,0,1037,95,1,0,0,0,1038,1039,
        5,85,0,0,1039,1040,5,150,0,0,1040,1042,5,86,0,0,1041,1043,5,150,
        0,0,1042,1041,1,0,0,0,1042,1043,1,0,0,0,1043,1044,1,0,0,0,1044,1051,
        3,98,49,0,1045,1047,5,85,0,0,1046,1048,5,150,0,0,1047,1046,1,0,0,
        0,1047,1048,1,0,0,0,1048,1049,1,0,0,0,1049,1051,3,98,49,0,1050,1038,
        1,0,0,0,1050,1045,1,0,0,0,1051,97,1,0,0,0,1052,1055,3,100,50,0,1053,
        1055,3,102,51,0,1054,1052,1,0,0,0,1054,1053,1,0,0,0,1055,99,1,0,
        0,0,1056,1058,3,108,54,0,1057,1059,5,150,0,0,1058,1057,1,0,0,0,1058,
        1059,1,0,0,0,1059,1061,1,0,0,0,1060,1056,1,0,0,0,1061,1064,1,0,0,
        0,1062,1060,1,0,0,0,1062,1063,1,0,0,0,1063,1065,1,0,0,0,1064,1062,
        1,0,0,0,1065,1102,3,132,66,0,1066,1068,3,108,54,0,1067,1069,5,150,
        0,0,1068,1067,1,0,0,0,1068,1069,1,0,0,0,1069,1071,1,0,0,0,1070,1066,
        1,0,0,0,1071,1074,1,0,0,0,1072,1070,1,0,0,0,1072,1073,1,0,0,0,1073,
        1075,1,0,0,0,1074,1072,1,0,0,0,1075,1082,3,106,53,0,1076,1078,5,
        150,0,0,1077,1076,1,0,0,0,1077,1078,1,0,0,0,1078,1079,1,0,0,0,1079,
        1081,3,106,53,0,1080,1077,1,0,0,0,1081,1084,1,0,0,0,1082,1080,1,
        0,0,0,1082,1083,1,0,0,0,1083,1089,1,0,0,0,1084,1082,1,0,0,0,1085,
        1087,5,150,0,0,1086,1085,1,0,0,0,1086,1087,1,0,0,0,1087,1088,1,0,
        0,0,1088,1090,3,132,66,0,1089,1086,1,0,0,0,1089,1090,1,0,0,0,1090,
        1102,1,0,0,0,1091,1093,3,108,54,0,1092,1094,5,150,0,0,1093,1092,
        1,0,0,0,1093,1094,1,0,0,0,1094,1096,1,0,0,0,1095,1091,1,0,0,0,1096,
        1097,1,0,0,0,1097,1095,1,0,0,0,1097,1098,1,0,0,0,1098,1099,1,0,0,
        0,1099,1100,6,50,-1,0,1100,1102,1,0,0,0,1101,1062,1,0,0,0,1101,1072,
        1,0,0,0,1101,1095,1,0,0,0,1102,101,1,0,0,0,1103,1105,3,104,52,0,
        1104,1106,5,150,0,0,1105,1104,1,0,0,0,1105,1106,1,0,0,0,1106,1108,
        1,0,0,0,1107,1103,1,0,0,0,1108,1109,1,0,0,0,1109,1107,1,0,0,0,1109,
        1110,1,0,0,0,1110,1111,1,0,0,0,1111,1112,3,100,50,0,1112,103,1,0,
        0,0,1113,1115,3,108,54,0,1114,1116,5,150,0,0,1115,1114,1,0,0,0,1115,
        1116,1,0,0,0,1116,1118,1,0,0,0,1117,1113,1,0,0,0,1118,1121,1,0,0,
        0,1119,1117,1,0,0,0,1119,1120,1,0,0,0,1120,1128,1,0,0,0,1121,1119,
        1,0,0,0,1122,1124,3,106,53,0,1123,1125,5,150,0,0,1124,1123,1,0,0,
        0,1124,1125,1,0,0,0,1125,1127,1,0,0,0,1126,1122,1,0,0,0,1127,1130,
        1,0,0,0,1128,1126,1,0,0,0,1128,1129,1,0,0,0,1129,1131,1,0,0,0,1130,
        1128,1,0,0,0,1131,1132,3,130,65,0,1132,105,1,0,0,0,1133,1138,3,118,
        59,0,1134,1138,3,120,60,0,1135,1138,3,124,62,0,1136,1138,3,128,64,
        0,1137,1133,1,0,0,0,1137,1134,1,0,0,0,1137,1135,1,0,0,0,1137,1136,
        1,0,0,0,1138,107,1,0,0,0,1139,1144,3,114,57,0,1140,1144,3,116,58,
        0,1141,1144,3,112,56,0,1142,1144,3,110,55,0,1143,1139,1,0,0,0,1143,
        1140,1,0,0,0,1143,1141,1,0,0,0,1143,1142,1,0,0,0,1144,109,1,0,0,
        0,1145,1163,5,87,0,0,1146,1147,5,150,0,0,1147,1148,5,98,0,0,1148,
        1149,5,150,0,0,1149,1151,5,88,0,0,1150,1152,5,150,0,0,1151,1150,
        1,0,0,0,1151,1152,1,0,0,0,1152,1153,1,0,0,0,1153,1155,5,2,0,0,1154,
        1156,5,150,0,0,1155,1154,1,0,0,0,1155,1156,1,0,0,0,1156,1157,1,0,
        0,0,1157,1159,3,66,33,0,1158,1160,5,150,0,0,1159,1158,1,0,0,0,1159,
        1160,1,0,0,0,1160,1161,1,0,0,0,1161,1162,5,4,0,0,1162,1164,1,0,0,
        0,1163,1146,1,0,0,0,1163,1164,1,0,0,0,1164,1165,1,0,0,0,1165,1166,
        5,150,0,0,1166,1167,5,54,0,0,1167,1168,5,150,0,0,1168,1173,3,10,
        5,0,1169,1171,5,150,0,0,1170,1169,1,0,0,0,1170,1171,1,0,0,0,1171,
        1172,1,0,0,0,1172,1174,3,38,19,0,1173,1170,1,0,0,0,1173,1174,1,0,
        0,0,1174,1179,1,0,0,0,1175,1177,5,150,0,0,1176,1175,1,0,0,0,1176,
        1177,1,0,0,0,1177,1178,1,0,0,0,1178,1180,3,148,74,0,1179,1176,1,
        0,0,0,1179,1180,1,0,0,0,1180,111,1,0,0,0,1181,1182,5,49,0,0,1182,
        1183,5,150,0,0,1183,1188,3,252,126,0,1184,1186,5,150,0,0,1185,1184,
        1,0,0,0,1185,1186,1,0,0,0,1186,1187,1,0,0,0,1187,1189,3,148,74,0,
        1188,1185,1,0,0,0,1188,1189,1,0,0,0,1189,113,1,0,0,0,1190,1191,5,
        89,0,0,1191,1193,5,150,0,0,1192,1190,1,0,0,0,1192,1193,1,0,0,0,1193,
        1194,1,0,0,0,1194,1196,5,90,0,0,1195,1197,5,150,0,0,1196,1195,1,
        0,0,0,1196,1197,1,0,0,0,1197,1198,1,0,0,0,1198,1203,3,150,75,0,1199,
        1201,5,150,0,0,1200,1199,1,0,0,0,1200,1201,1,0,0,0,1201,1202,1,0,
        0,0,1202,1204,3,148,74,0,1203,1200,1,0,0,0,1203,1204,1,0,0,0,1204,
        115,1,0,0,0,1205,1207,5,91,0,0,1206,1208,5,150,0,0,1207,1206,1,0,
        0,0,1207,1208,1,0,0,0,1208,1209,1,0,0,0,1209,1210,3,190,95,0,1210,
        1211,5,150,0,0,1211,1212,5,102,0,0,1212,1213,5,150,0,0,1213,1214,
        3,270,135,0,1214,117,1,0,0,0,1215,1217,5,92,0,0,1216,1218,5,150,
        0,0,1217,1216,1,0,0,0,1217,1218,1,0,0,0,1218,1219,1,0,0,0,1219,1220,
        3,150,75,0,1220,119,1,0,0,0,1221,1223,5,93,0,0,1222,1224,5,150,0,
        0,1223,1222,1,0,0,0,1223,1224,1,0,0,0,1224,1225,1,0,0,0,1225,1230,
        3,150,75,0,1226,1227,5,150,0,0,1227,1229,3,122,61,0,1228,1226,1,
        0,0,0,1229,1232,1,0,0,0,1230,1228,1,0,0,0,1230,1231,1,0,0,0,1231,
        121,1,0,0,0,1232,1230,1,0,0,0,1233,1234,5,94,0,0,1234,1235,5,150,
        0,0,1235,1236,5,90,0,0,1236,1237,5,150,0,0,1237,1244,3,124,62,0,
        1238,1239,5,94,0,0,1239,1240,5,150,0,0,1240,1241,5,92,0,0,1241,1242,
        5,150,0,0,1242,1244,3,124,62,0,1243,1233,1,0,0,0,1243,1238,1,0,0,
        0,1244,123,1,0,0,0,1245,1247,5,95,0,0,1246,1248,5,150,0,0,1247,1246,
        1,0,0,0,1247,1248,1,0,0,0,1248,1249,1,0,0,0,1249,1260,3,126,63,0,
        1250,1252,5,150,0,0,1251,1250,1,0,0,0,1251,1252,1,0,0,0,1252,1253,
        1,0,0,0,1253,1255,5,3,0,0,1254,1256,5,150,0,0,1255,1254,1,0,0,0,
        1255,1256,1,0,0,0,1256,1257,1,0,0,0,1257,1259,3,126,63,0,1258,1251,
        1,0,0,0,1259,1262,1,0,0,0,1260,1258,1,0,0,0,1260,1261,1,0,0,0,1261,
        125,1,0,0,0,1262,1260,1,0,0,0,1263,1265,3,276,138,0,1264,1266,5,
        150,0,0,1265,1264,1,0,0,0,1265,1266,1,0,0,0,1266,1267,1,0,0,0,1267,
        1269,5,6,0,0,1268,1270,5,150,0,0,1269,1268,1,0,0,0,1269,1270,1,0,
        0,0,1270,1271,1,0,0,0,1271,1272,3,190,95,0,1272,127,1,0,0,0,1273,
        1274,5,96,0,0,1274,1276,5,150,0,0,1275,1273,1,0,0,0,1275,1276,1,
        0,0,0,1276,1277,1,0,0,0,1277,1279,5,97,0,0,1278,1280,5,150,0,0,1279,
        1278,1,0,0,0,1279,1280,1,0,0,0,1280,1281,1,0,0,0,1281,1292,3,190,
        95,0,1282,1284,5,150,0,0,1283,1282,1,0,0,0,1283,1284,1,0,0,0,1284,
        1285,1,0,0,0,1285,1287,5,3,0,0,1286,1288,5,150,0,0,1287,1286,1,0,
        0,0,1287,1288,1,0,0,0,1288,1289,1,0,0,0,1289,1291,3,190,95,0,1290,
        1283,1,0,0,0,1291,1294,1,0,0,0,1292,1290,1,0,0,0,1292,1293,1,0,0,
        0,1293,129,1,0,0,0,1294,1292,1,0,0,0,1295,1296,5,98,0,0,1296,1301,
        3,134,67,0,1297,1299,5,150,0,0,1298,1297,1,0,0,0,1298,1299,1,0,0,
        0,1299,1300,1,0,0,0,1300,1302,3,148,74,0,1301,1298,1,0,0,0,1301,
        1302,1,0,0,0,1302,131,1,0,0,0,1303,1304,5,99,0,0,1304,1305,3,134,
        67,0,1305,133,1,0,0,0,1306,1308,5,150,0,0,1307,1306,1,0,0,0,1307,
        1308,1,0,0,0,1308,1309,1,0,0,0,1309,1311,5,100,0,0,1310,1307,1,0,
        0,0,1310,1311,1,0,0,0,1311,1312,1,0,0,0,1312,1313,5,150,0,0,1313,
        1316,3,136,68,0,1314,1315,5,150,0,0,1315,1317,3,140,70,0,1316,1314,
        1,0,0,0,1316,1317,1,0,0,0,1317,1320,1,0,0,0,1318,1319,5,150,0,0,
        1319,1321,3,142,71,0,1320,1318,1,0,0,0,1320,1321,1,0,0,0,1321,1324,
        1,0,0,0,1322,1323,5,150,0,0,1323,1325,3,144,72,0,1324,1322,1,0,0,
        0,1324,1325,1,0,0,0,1325,135,1,0,0,0,1326,1337,5,101,0,0,1327,1329,
        5,150,0,0,1328,1327,1,0,0,0,1328,1329,1,0,0,0,1329,1330,1,0,0,0,
        1330,1332,5,3,0,0,1331,1333,5,150,0,0,1332,1331,1,0,0,0,1332,1333,
        1,0,0,0,1333,1334,1,0,0,0,1334,1336,3,138,69,0,1335,1328,1,0,0,0,
        1336,1339,1,0,0,0,1337,1335,1,0,0,0,1337,1338,1,0,0,0,1338,1355,
        1,0,0,0,1339,1337,1,0,0,0,1340,1351,3,138,69,0,1341,1343,5,150,0,
        0,1342,1341,1,0,0,0,1342,1343,1,0,0,0,1343,1344,1,0,0,0,1344,1346,
        5,3,0,0,1345,1347,5,150,0,0,1346,1345,1,0,0,0,1346,1347,1,0,0,0,
        1347,1348,1,0,0,0,1348,1350,3,138,69,0,1349,1342,1,0,0,0,1350,1353,
        1,0,0,0,1351,1349,1,0,0,0,1351,1352,1,0,0,0,1352,1355,1,0,0,0,1353,
        1351,1,0,0,0,1354,1326,1,0,0,0,1354,1340,1,0,0,0,1355,137,1,0,0,
        0,1356,1357,3,190,95,0,1357,1358,5,150,0,0,1358,1359,5,102,0,0,1359,
        1360,5,150,0,0,1360,1361,3,270,135,0,1361,1364,1,0,0,0,1362,1364,
        3,190,95,0,1363,1356,1,0,0,0,1363,1362,1,0,0,0,1364,139,1,0,0,0,
        1365,1366,5,103,0,0,1366,1367,5,150,0,0,1367,1368,5,104,0,0,1368,
        1369,5,150,0,0,1369,1377,3,146,73,0,1370,1372,5,3,0,0,1371,1373,
        5,150,0,0,1372,1371,1,0,0,0,1372,1373,1,0,0,0,1373,1374,1,0,0,0,
        1374,1376,3,146,73,0,1375,1370,1,0,0,0,1376,1379,1,0,0,0,1377,1375,
        1,0,0,0,1377,1378,1,0,0,0,1378,141,1,0,0,0,1379,1377,1,0,0,0,1380,
        1381,5,105,0,0,1381,1382,5,150,0,0,1382,1383,3,190,95,0,1383,143,
        1,0,0,0,1384,1385,5,106,0,0,1385,1386,5,150,0,0,1386,1387,3,190,
        95,0,1387,145,1,0,0,0,1388,1393,3,190,95,0,1389,1391,5,150,0,0,1390,
        1389,1,0,0,0,1390,1391,1,0,0,0,1391,1392,1,0,0,0,1392,1394,7,1,0,
        0,1393,1390,1,0,0,0,1393,1394,1,0,0,0,1394,147,1,0,0,0,1395,1396,
        5,111,0,0,1396,1397,5,150,0,0,1397,1398,3,190,95,0,1398,149,1,0,
        0,0,1399,1410,3,152,76,0,1400,1402,5,150,0,0,1401,1400,1,0,0,0,1401,
        1402,1,0,0,0,1402,1403,1,0,0,0,1403,1405,5,3,0,0,1404,1406,5,150,
        0,0,1405,1404,1,0,0,0,1405,1406,1,0,0,0,1406,1407,1,0,0,0,1407,1409,
        3,152,76,0,1408,1401,1,0,0,0,1409,1412,1,0,0,0,1410,1408,1,0,0,0,
        1410,1411,1,0,0,0,1411,151,1,0,0,0,1412,1410,1,0,0,0,1413,1415,3,
        270,135,0,1414,1416,5,150,0,0,1415,1414,1,0,0,0,1415,1416,1,0,0,
        0,1416,1417,1,0,0,0,1417,1419,5,6,0,0,1418,1420,5,150,0,0,1419,1418,
        1,0,0,0,1419,1420,1,0,0,0,1420,1421,1,0,0,0,1421,1422,3,154,77,0,
        1422,1425,1,0,0,0,1423,1425,3,154,77,0,1424,1413,1,0,0,0,1424,1423,
        1,0,0,0,1425,153,1,0,0,0,1426,1427,3,156,78,0,1427,155,1,0,0,0,1428,
        1435,3,158,79,0,1429,1431,5,150,0,0,1430,1429,1,0,0,0,1430,1431,
        1,0,0,0,1431,1432,1,0,0,0,1432,1434,3,160,80,0,1433,1430,1,0,0,0,
        1434,1437,1,0,0,0,1435,1433,1,0,0,0,1435,1436,1,0,0,0,1436,1443,
        1,0,0,0,1437,1435,1,0,0,0,1438,1439,5,2,0,0,1439,1440,3,156,78,0,
        1440,1441,5,4,0,0,1441,1443,1,0,0,0,1442,1428,1,0,0,0,1442,1438,
        1,0,0,0,1443,157,1,0,0,0,1444,1446,5,2,0,0,1445,1447,5,150,0,0,1446,
        1445,1,0,0,0,1446,1447,1,0,0,0,1447,1452,1,0,0,0,1448,1450,3,270,
        135,0,1449,1451,5,150,0,0,1450,1449,1,0,0,0,1450,1451,1,0,0,0,1451,
        1453,1,0,0,0,1452,1448,1,0,0,0,1452,1453,1,0,0,0,1453,1458,1,0,0,
        0,1454,1456,3,170,85,0,1455,1457,5,150,0,0,1456,1455,1,0,0,0,1456,
        1457,1,0,0,0,1457,1459,1,0,0,0,1458,1454,1,0,0,0,1458,1459,1,0,0,
        0,1459,1464,1,0,0,0,1460,1462,3,166,83,0,1461,1463,5,150,0,0,1462,
        1461,1,0,0,0,1462,1463,1,0,0,0,1463,1465,1,0,0,0,1464,1460,1,0,0,
        0,1464,1465,1,0,0,0,1465,1466,1,0,0,0,1466,1467,5,4,0,0,1467,159,
        1,0,0,0,1468,1470,3,162,81,0,1469,1471,5,150,0,0,1470,1469,1,0,0,
        0,1470,1471,1,0,0,0,1471,1472,1,0,0,0,1472,1473,3,158,79,0,1473,
        161,1,0,0,0,1474,1476,3,290,145,0,1475,1477,5,150,0,0,1476,1475,
        1,0,0,0,1476,1477,1,0,0,0,1477,1478,1,0,0,0,1478,1480,3,294,147,
        0,1479,1481,5,150,0,0,1480,1479,1,0,0,0,1480,1481,1,0,0,0,1481,1483,
        1,0,0,0,1482,1484,3,164,82,0,1483,1482,1,0,0,0,1483,1484,1,0,0,0,
        1484,1486,1,0,0,0,1485,1487,5,150,0,0,1486,1485,1,0,0,0,1486,1487,
        1,0,0,0,1487,1488,1,0,0,0,1488,1489,3,294,147,0,1489,1519,1,0,0,
        0,1490,1492,3,294,147,0,1491,1493,5,150,0,0,1492,1491,1,0,0,0,1492,
        1493,1,0,0,0,1493,1495,1,0,0,0,1494,1496,3,164,82,0,1495,1494,1,
        0,0,0,1495,1496,1,0,0,0,1496,1498,1,0,0,0,1497,1499,5,150,0,0,1498,
        1497,1,0,0,0,1498,1499,1,0,0,0,1499,1500,1,0,0,0,1500,1502,3,294,
        147,0,1501,1503,5,150,0,0,1502,1501,1,0,0,0,1502,1503,1,0,0,0,1503,
        1504,1,0,0,0,1504,1505,3,292,146,0,1505,1519,1,0,0,0,1506,1508,3,
        294,147,0,1507,1509,5,150,0,0,1508,1507,1,0,0,0,1508,1509,1,0,0,
        0,1509,1511,1,0,0,0,1510,1512,3,164,82,0,1511,1510,1,0,0,0,1511,
        1512,1,0,0,0,1512,1514,1,0,0,0,1513,1515,5,150,0,0,1514,1513,1,0,
        0,0,1514,1515,1,0,0,0,1515,1516,1,0,0,0,1516,1517,3,294,147,0,1517,
        1519,1,0,0,0,1518,1474,1,0,0,0,1518,1490,1,0,0,0,1518,1506,1,0,0,
        0,1519,163,1,0,0,0,1520,1522,5,7,0,0,1521,1523,5,150,0,0,1522,1521,
        1,0,0,0,1522,1523,1,0,0,0,1523,1528,1,0,0,0,1524,1526,3,270,135,
        0,1525,1527,5,150,0,0,1526,1525,1,0,0,0,1526,1527,1,0,0,0,1527,1529,
        1,0,0,0,1528,1524,1,0,0,0,1528,1529,1,0,0,0,1529,1534,1,0,0,0,1530,
        1532,3,168,84,0,1531,1533,5,150,0,0,1532,1531,1,0,0,0,1532,1533,
        1,0,0,0,1533,1535,1,0,0,0,1534,1530,1,0,0,0,1534,1535,1,0,0,0,1535,
        1540,1,0,0,0,1536,1538,3,174,87,0,1537,1539,5,150,0,0,1538,1537,
        1,0,0,0,1538,1539,1,0,0,0,1539,1541,1,0,0,0,1540,1536,1,0,0,0,1540,
        1541,1,0,0,0,1541,1546,1,0,0,0,1542,1544,3,166,83,0,1543,1545,5,
        150,0,0,1544,1543,1,0,0,0,1544,1545,1,0,0,0,1545,1547,1,0,0,0,1546,
        1542,1,0,0,0,1546,1547,1,0,0,0,1547,1548,1,0,0,0,1548,1549,5,8,0,
        0,1549,165,1,0,0,0,1550,1552,5,9,0,0,1551,1553,5,150,0,0,1552,1551,
        1,0,0,0,1552,1553,1,0,0,0,1553,1587,1,0,0,0,1554,1556,3,278,139,
        0,1555,1557,5,150,0,0,1556,1555,1,0,0,0,1556,1557,1,0,0,0,1557,1558,
        1,0,0,0,1558,1560,5,120,0,0,1559,1561,5,150,0,0,1560,1559,1,0,0,
        0,1560,1561,1,0,0,0,1561,1562,1,0,0,0,1562,1564,3,190,95,0,1563,
        1565,5,150,0,0,1564,1563,1,0,0,0,1564,1565,1,0,0,0,1565,1584,1,0,
        0,0,1566,1568,5,3,0,0,1567,1569,5,150,0,0,1568,1567,1,0,0,0,1568,
        1569,1,0,0,0,1569,1570,1,0,0,0,1570,1572,3,278,139,0,1571,1573,5,
        150,0,0,1572,1571,1,0,0,0,1572,1573,1,0,0,0,1573,1574,1,0,0,0,1574,
        1576,5,120,0,0,1575,1577,5,150,0,0,1576,1575,1,0,0,0,1576,1577,1,
        0,0,0,1577,1578,1,0,0,0,1578,1580,3,190,95,0,1579,1581,5,150,0,0,
        1580,1579,1,0,0,0,1580,1581,1,0,0,0,1581,1583,1,0,0,0,1582,1566,
        1,0,0,0,1583,1586,1,0,0,0,1584,1582,1,0,0,0,1584,1585,1,0,0,0,1585,
        1588,1,0,0,0,1586,1584,1,0,0,0,1587,1554,1,0,0,0,1587,1588,1,0,0,
        0,1588,1589,1,0,0,0,1589,1590,5,10,0,0,1590,167,1,0,0,0,1591,1593,
        5,120,0,0,1592,1594,5,150,0,0,1593,1592,1,0,0,0,1593,1594,1,0,0,
        0,1594,1595,1,0,0,0,1595,1609,3,188,94,0,1596,1598,5,150,0,0,1597,
        1596,1,0,0,0,1597,1598,1,0,0,0,1598,1599,1,0,0,0,1599,1601,5,11,
        0,0,1600,1602,5,120,0,0,1601,1600,1,0,0,0,1601,1602,1,0,0,0,1602,
        1604,1,0,0,0,1603,1605,5,150,0,0,1604,1603,1,0,0,0,1604,1605,1,0,
        0,0,1605,1606,1,0,0,0,1606,1608,3,188,94,0,1607,1597,1,0,0,0,1608,
        1611,1,0,0,0,1609,1607,1,0,0,0,1609,1610,1,0,0,0,1610,169,1,0,0,
        0,1611,1609,1,0,0,0,1612,1619,3,172,86,0,1613,1615,5,150,0,0,1614,
        1613,1,0,0,0,1614,1615,1,0,0,0,1615,1616,1,0,0,0,1616,1618,3,172,
        86,0,1617,1614,1,0,0,0,1618,1621,1,0,0,0,1619,1617,1,0,0,0,1619,
        1620,1,0,0,0,1620,171,1,0,0,0,1621,1619,1,0,0,0,1622,1624,5,120,
        0,0,1623,1625,5,150,0,0,1624,1623,1,0,0,0,1624,1625,1,0,0,0,1625,
        1626,1,0,0,0,1626,1627,3,186,93,0,1627,173,1,0,0,0,1628,1630,5,101,
        0,0,1629,1631,5,150,0,0,1630,1629,1,0,0,0,1630,1631,1,0,0,0,1631,
        1636,1,0,0,0,1632,1637,5,112,0,0,1633,1634,5,86,0,0,1634,1635,5,
        150,0,0,1635,1637,5,112,0,0,1636,1632,1,0,0,0,1636,1633,1,0,0,0,
        1636,1637,1,0,0,0,1637,1639,1,0,0,0,1638,1640,5,150,0,0,1639,1638,
        1,0,0,0,1639,1640,1,0,0,0,1640,1655,1,0,0,0,1641,1643,3,182,91,0,
        1642,1641,1,0,0,0,1642,1643,1,0,0,0,1643,1645,1,0,0,0,1644,1646,
        5,150,0,0,1645,1644,1,0,0,0,1645,1646,1,0,0,0,1646,1647,1,0,0,0,
        1647,1649,5,12,0,0,1648,1650,5,150,0,0,1649,1648,1,0,0,0,1649,1650,
        1,0,0,0,1650,1652,1,0,0,0,1651,1653,3,184,92,0,1652,1651,1,0,0,0,
        1652,1653,1,0,0,0,1653,1656,1,0,0,0,1654,1656,3,280,140,0,1655,1642,
        1,0,0,0,1655,1654,1,0,0,0,1655,1656,1,0,0,0,1656,1661,1,0,0,0,1657,
        1659,5,150,0,0,1658,1657,1,0,0,0,1658,1659,1,0,0,0,1659,1660,1,0,
        0,0,1660,1662,3,176,88,0,1661,1658,1,0,0,0,1661,1662,1,0,0,0,1662,
        175,1,0,0,0,1663,1665,5,2,0,0,1664,1666,5,150,0,0,1665,1664,1,0,
        0,0,1665,1666,1,0,0,0,1666,1667,1,0,0,0,1667,1669,3,270,135,0,1668,
        1670,5,150,0,0,1669,1668,1,0,0,0,1669,1670,1,0,0,0,1670,1671,1,0,
        0,0,1671,1673,5,3,0,0,1672,1674,5,150,0,0,1673,1672,1,0,0,0,1673,
        1674,1,0,0,0,1674,1675,1,0,0,0,1675,1684,3,270,135,0,1676,1678,5,
        150,0,0,1677,1676,1,0,0,0,1677,1678,1,0,0,0,1678,1679,1,0,0,0,1679,
        1681,5,11,0,0,1680,1682,5,150,0,0,1681,1680,1,0,0,0,1681,1682,1,
        0,0,0,1682,1683,1,0,0,0,1683,1685,3,148,74,0,1684,1677,1,0,0,0,1684,
        1685,1,0,0,0,1685,1705,1,0,0,0,1686,1688,5,150,0,0,1687,1686,1,0,
        0,0,1687,1688,1,0,0,0,1688,1689,1,0,0,0,1689,1691,5,11,0,0,1690,
        1692,5,150,0,0,1691,1690,1,0,0,0,1691,1692,1,0,0,0,1692,1693,1,0,
        0,0,1693,1695,3,180,90,0,1694,1696,5,150,0,0,1695,1694,1,0,0,0,1695,
        1696,1,0,0,0,1696,1697,1,0,0,0,1697,1699,5,3,0,0,1698,1700,5,150,
        0,0,1699,1698,1,0,0,0,1699,1700,1,0,0,0,1700,1701,1,0,0,0,1701,1703,
        3,178,89,0,1702,1704,5,150,0,0,1703,1702,1,0,0,0,1703,1704,1,0,0,
        0,1704,1706,1,0,0,0,1705,1687,1,0,0,0,1705,1706,1,0,0,0,1706,1707,
        1,0,0,0,1707,1708,5,4,0,0,1708,177,1,0,0,0,1709,1711,5,9,0,0,1710,
        1712,5,150,0,0,1711,1710,1,0,0,0,1711,1712,1,0,0,0,1712,1714,1,0,
        0,0,1713,1715,3,136,68,0,1714,1713,1,0,0,0,1714,1715,1,0,0,0,1715,
        1717,1,0,0,0,1716,1718,5,150,0,0,1717,1716,1,0,0,0,1717,1718,1,0,
        0,0,1718,1719,1,0,0,0,1719,1720,5,10,0,0,1720,179,1,0,0,0,1721,1723,
        5,9,0,0,1722,1724,5,150,0,0,1723,1722,1,0,0,0,1723,1724,1,0,0,0,
        1724,1726,1,0,0,0,1725,1727,3,136,68,0,1726,1725,1,0,0,0,1726,1727,
        1,0,0,0,1727,1729,1,0,0,0,1728,1730,5,150,0,0,1729,1728,1,0,0,0,
        1729,1730,1,0,0,0,1730,1731,1,0,0,0,1731,1732,5,10,0,0,1732,181,
        1,0,0,0,1733,1734,5,138,0,0,1734,183,1,0,0,0,1735,1736,5,138,0,0,
        1736,185,1,0,0,0,1737,1738,3,284,142,0,1738,187,1,0,0,0,1739,1740,
        3,284,142,0,1740,189,1,0,0,0,1741,1742,3,192,96,0,1742,191,1,0,0,
        0,1743,1750,3,194,97,0,1744,1745,5,150,0,0,1745,1746,5,113,0,0,1746,
        1747,5,150,0,0,1747,1749,3,194,97,0,1748,1744,1,0,0,0,1749,1752,
        1,0,0,0,1750,1748,1,0,0,0,1750,1751,1,0,0,0,1751,193,1,0,0,0,1752,
        1750,1,0,0,0,1753,1760,3,196,98,0,1754,1755,5,150,0,0,1755,1756,
        5,114,0,0,1756,1757,5,150,0,0,1757,1759,3,196,98,0,1758,1754,1,0,
        0,0,1759,1762,1,0,0,0,1760,1758,1,0,0,0,1760,1761,1,0,0,0,1761,195,
        1,0,0,0,1762,1760,1,0,0,0,1763,1770,3,198,99,0,1764,1765,5,150,0,
        0,1765,1766,5,115,0,0,1766,1767,5,150,0,0,1767,1769,3,198,99,0,1768,
        1764,1,0,0,0,1769,1772,1,0,0,0,1770,1768,1,0,0,0,1770,1771,1,0,0,
        0,1771,197,1,0,0,0,1772,1770,1,0,0,0,1773,1775,5,116,0,0,1774,1776,
        5,150,0,0,1775,1774,1,0,0,0,1775,1776,1,0,0,0,1776,1778,1,0,0,0,
        1777,1773,1,0,0,0,1778,1781,1,0,0,0,1779,1777,1,0,0,0,1779,1780,
        1,0,0,0,1780,1782,1,0,0,0,1781,1779,1,0,0,0,1782,1783,3,200,100,
        0,1783,199,1,0,0,0,1784,1794,3,204,102,0,1785,1787,5,150,0,0,1786,
        1785,1,0,0,0,1786,1787,1,0,0,0,1787,1788,1,0,0,0,1788,1790,3,202,
        101,0,1789,1791,5,150,0,0,1790,1789,1,0,0,0,1790,1791,1,0,0,0,1791,
        1792,1,0,0,0,1792,1793,3,204,102,0,1793,1795,1,0,0,0,1794,1786,1,
        0,0,0,1794,1795,1,0,0,0,1795,1833,1,0,0,0,1796,1798,3,204,102,0,
        1797,1799,5,150,0,0,1798,1797,1,0,0,0,1798,1799,1,0,0,0,1799,1800,
        1,0,0,0,1800,1802,5,117,0,0,1801,1803,5,150,0,0,1802,1801,1,0,0,
        0,1802,1803,1,0,0,0,1803,1804,1,0,0,0,1804,1805,3,204,102,0,1805,
        1806,1,0,0,0,1806,1807,6,100,-1,0,1807,1833,1,0,0,0,1808,1810,3,
        204,102,0,1809,1811,5,150,0,0,1810,1809,1,0,0,0,1810,1811,1,0,0,
        0,1811,1812,1,0,0,0,1812,1814,3,202,101,0,1813,1815,5,150,0,0,1814,
        1813,1,0,0,0,1814,1815,1,0,0,0,1815,1816,1,0,0,0,1816,1826,3,204,
        102,0,1817,1819,5,150,0,0,1818,1817,1,0,0,0,1818,1819,1,0,0,0,1819,
        1820,1,0,0,0,1820,1822,3,202,101,0,1821,1823,5,150,0,0,1822,1821,
        1,0,0,0,1822,1823,1,0,0,0,1823,1824,1,0,0,0,1824,1825,3,204,102,
        0,1825,1827,1,0,0,0,1826,1818,1,0,0,0,1827,1828,1,0,0,0,1828,1826,
        1,0,0,0,1828,1829,1,0,0,0,1829,1830,1,0,0,0,1830,1831,6,100,-1,0,
        1831,1833,1,0,0,0,1832,1784,1,0,0,0,1832,1796,1,0,0,0,1832,1808,
        1,0,0,0,1833,201,1,0,0,0,1834,1835,7,2,0,0,1835,203,1,0,0,0,1836,
        1847,3,206,103,0,1837,1839,5,150,0,0,1838,1837,1,0,0,0,1838,1839,
        1,0,0,0,1839,1840,1,0,0,0,1840,1842,5,11,0,0,1841,1843,5,150,0,0,
        1842,1841,1,0,0,0,1842,1843,1,0,0,0,1843,1844,1,0,0,0,1844,1846,
        3,206,103,0,1845,1838,1,0,0,0,1846,1849,1,0,0,0,1847,1845,1,0,0,
        0,1847,1848,1,0,0,0,1848,205,1,0,0,0,1849,1847,1,0,0,0,1850,1861,
        3,208,104,0,1851,1853,5,150,0,0,1852,1851,1,0,0,0,1852,1853,1,0,
        0,0,1853,1854,1,0,0,0,1854,1856,5,18,0,0,1855,1857,5,150,0,0,1856,
        1855,1,0,0,0,1856,1857,1,0,0,0,1857,1858,1,0,0,0,1858,1860,3,208,
        104,0,1859,1852,1,0,0,0,1860,1863,1,0,0,0,1861,1859,1,0,0,0,1861,
        1862,1,0,0,0,1862,207,1,0,0,0,1863,1861,1,0,0,0,1864,1876,3,212,
        106,0,1865,1867,5,150,0,0,1866,1865,1,0,0,0,1866,1867,1,0,0,0,1867,
        1868,1,0,0,0,1868,1870,3,210,105,0,1869,1871,5,150,0,0,1870,1869,
        1,0,0,0,1870,1871,1,0,0,0,1871,1872,1,0,0,0,1872,1873,3,212,106,
        0,1873,1875,1,0,0,0,1874,1866,1,0,0,0,1875,1878,1,0,0,0,1876,1874,
        1,0,0,0,1876,1877,1,0,0,0,1877,209,1,0,0,0,1878,1876,1,0,0,0,1879,
        1880,7,3,0,0,1880,211,1,0,0,0,1881,1893,3,216,108,0,1882,1884,5,
        150,0,0,1883,1882,1,0,0,0,1883,1884,1,0,0,0,1884,1885,1,0,0,0,1885,
        1887,3,214,107,0,1886,1888,5,150,0,0,1887,1886,1,0,0,0,1887,1888,
        1,0,0,0,1888,1889,1,0,0,0,1889,1890,3,216,108,0,1890,1892,1,0,0,
        0,1891,1883,1,0,0,0,1892,1895,1,0,0,0,1893,1891,1,0,0,0,1893,1894,
        1,0,0,0,1894,213,1,0,0,0,1895,1893,1,0,0,0,1896,1897,7,4,0,0,1897,
        215,1,0,0,0,1898,1910,3,220,110,0,1899,1901,5,150,0,0,1900,1899,
        1,0,0,0,1900,1901,1,0,0,0,1901,1902,1,0,0,0,1902,1904,3,218,109,
        0,1903,1905,5,150,0,0,1904,1903,1,0,0,0,1904,1905,1,0,0,0,1905,1906,
        1,0,0,0,1906,1907,3,220,110,0,1907,1909,1,0,0,0,1908,1900,1,0,0,
        0,1909,1912,1,0,0,0,1910,1908,1,0,0,0,1910,1911,1,0,0,0,1911,217,
        1,0,0,0,1912,1910,1,0,0,0,1913,1914,7,5,0,0,1914,219,1,0,0,0,1915,
        1926,3,222,111,0,1916,1918,5,150,0,0,1917,1916,1,0,0,0,1917,1918,
        1,0,0,0,1918,1919,1,0,0,0,1919,1921,5,24,0,0,1920,1922,5,150,0,0,
        1921,1920,1,0,0,0,1921,1922,1,0,0,0,1922,1923,1,0,0,0,1923,1925,
        3,222,111,0,1924,1917,1,0,0,0,1925,1928,1,0,0,0,1926,1924,1,0,0,
        0,1926,1927,1,0,0,0,1927,221,1,0,0,0,1928,1926,1,0,0,0,1929,1931,
        5,118,0,0,1930,1932,5,150,0,0,1931,1930,1,0,0,0,1931,1932,1,0,0,
        0,1932,1934,1,0,0,0,1933,1929,1,0,0,0,1934,1937,1,0,0,0,1935,1933,
        1,0,0,0,1935,1936,1,0,0,0,1936,1938,1,0,0,0,1937,1935,1,0,0,0,1938,
        1943,3,224,112,0,1939,1941,5,150,0,0,1940,1939,1,0,0,0,1940,1941,
        1,0,0,0,1941,1942,1,0,0,0,1942,1944,5,119,0,0,1943,1940,1,0,0,0,
        1943,1944,1,0,0,0,1944,223,1,0,0,0,1945,1953,3,234,117,0,1946,1954,
        3,228,114,0,1947,1949,3,226,113,0,1948,1947,1,0,0,0,1949,1950,1,
        0,0,0,1950,1948,1,0,0,0,1950,1951,1,0,0,0,1951,1954,1,0,0,0,1952,
        1954,3,232,116,0,1953,1946,1,0,0,0,1953,1948,1,0,0,0,1953,1952,1,
        0,0,0,1953,1954,1,0,0,0,1954,225,1,0,0,0,1955,1956,5,150,0,0,1956,
        1958,5,121,0,0,1957,1959,5,150,0,0,1958,1957,1,0,0,0,1958,1959,1,
        0,0,0,1959,1960,1,0,0,0,1960,1975,3,234,117,0,1961,1962,5,7,0,0,
        1962,1963,3,190,95,0,1963,1964,5,8,0,0,1964,1975,1,0,0,0,1965,1967,
        5,7,0,0,1966,1968,3,190,95,0,1967,1966,1,0,0,0,1967,1968,1,0,0,0,
        1968,1969,1,0,0,0,1969,1971,5,120,0,0,1970,1972,3,190,95,0,1971,
        1970,1,0,0,0,1971,1972,1,0,0,0,1972,1973,1,0,0,0,1973,1975,5,8,0,
        0,1974,1955,1,0,0,0,1974,1961,1,0,0,0,1974,1965,1,0,0,0,1975,227,
        1,0,0,0,1976,1988,3,230,115,0,1977,1978,5,150,0,0,1978,1979,5,122,
        0,0,1979,1980,5,150,0,0,1980,1988,5,98,0,0,1981,1982,5,150,0,0,1982,
        1983,5,123,0,0,1983,1984,5,150,0,0,1984,1988,5,98,0,0,1985,1986,
        5,150,0,0,1986,1988,5,124,0,0,1987,1976,1,0,0,0,1987,1977,1,0,0,
        0,1987,1981,1,0,0,0,1987,1985,1,0,0,0,1988,1990,1,0,0,0,1989,1991,
        5,150,0,0,1990,1989,1,0,0,0,1990,1991,1,0,0,0,1991,1992,1,0,0,0,
        1992,1993,3,234,117,0,1993,229,1,0,0,0,1994,1996,5,150,0,0,1995,
        1994,1,0,0,0,1995,1996,1,0,0,0,1996,1997,1,0,0,0,1997,1998,5,25,
        0,0,1998,231,1,0,0,0,1999,2000,5,150,0,0,2000,2001,5,125,0,0,2001,
        2002,5,150,0,0,2002,2010,5,126,0,0,2003,2004,5,150,0,0,2004,2005,
        5,125,0,0,2005,2006,5,150,0,0,2006,2007,5,116,0,0,2007,2008,5,150,
        0,0,2008,2010,5,126,0,0,2009,1999,1,0,0,0,2009,2003,1,0,0,0,2010,
        233,1,0,0,0,2011,2018,3,236,118,0,2012,2014,5,150,0,0,2013,2012,
        1,0,0,0,2013,2014,1,0,0,0,2014,2015,1,0,0,0,2015,2017,3,264,132,
        0,2016,2013,1,0,0,0,2017,2020,1,0,0,0,2018,2016,1,0,0,0,2018,2019,
        1,0,0,0,2019,235,1,0,0,0,2020,2018,1,0,0,0,2021,2031,3,238,119,0,
        2022,2031,3,274,137,0,2023,2031,3,266,133,0,2024,2031,3,250,125,
        0,2025,2031,3,252,126,0,2026,2031,3,258,129,0,2027,2031,3,260,130,
        0,2028,2031,3,262,131,0,2029,2031,3,270,135,0,2030,2021,1,0,0,0,
        2030,2022,1,0,0,0,2030,2023,1,0,0,0,2030,2024,1,0,0,0,2030,2025,
        1,0,0,0,2030,2026,1,0,0,0,2030,2027,1,0,0,0,2030,2028,1,0,0,0,2030,
        2029,1,0,0,0,2031,237,1,0,0,0,2032,2039,3,272,136,0,2033,2039,5,
        136,0,0,2034,2039,3,240,120,0,2035,2039,5,126,0,0,2036,2039,3,242,
        121,0,2037,2039,3,246,123,0,2038,2032,1,0,0,0,2038,2033,1,0,0,0,
        2038,2034,1,0,0,0,2038,2035,1,0,0,0,2038,2036,1,0,0,0,2038,2037,
        1,0,0,0,2039,239,1,0,0,0,2040,2041,7,6,0,0,2041,241,1,0,0,0,2042,
        2044,5,7,0,0,2043,2045,5,150,0,0,2044,2043,1,0,0,0,2044,2045,1,0,
        0,0,2045,2059,1,0,0,0,2046,2048,3,190,95,0,2047,2049,5,150,0,0,2048,
        2047,1,0,0,0,2048,2049,1,0,0,0,2049,2056,1,0,0,0,2050,2052,3,244,
        122,0,2051,2053,5,150,0,0,2052,2051,1,0,0,0,2052,2053,1,0,0,0,2053,
        2055,1,0,0,0,2054,2050,1,0,0,0,2055,2058,1,0,0,0,2056,2054,1,0,0,
        0,2056,2057,1,0,0,0,2057,2060,1,0,0,0,2058,2056,1,0,0,0,2059,2046,
        1,0,0,0,2059,2060,1,0,0,0,2060,2061,1,0,0,0,2061,2062,5,8,0,0,2062,
        243,1,0,0,0,2063,2065,5,3,0,0,2064,2066,5,150,0,0,2065,2064,1,0,
        0,0,2065,2066,1,0,0,0,2066,2068,1,0,0,0,2067,2069,3,190,95,0,2068,
        2067,1,0,0,0,2068,2069,1,0,0,0,2069,245,1,0,0,0,2070,2072,5,9,0,
        0,2071,2073,5,150,0,0,2072,2071,1,0,0,0,2072,2073,1,0,0,0,2073,2074,
        1,0,0,0,2074,2076,3,248,124,0,2075,2077,5,150,0,0,2076,2075,1,0,
        0,0,2076,2077,1,0,0,0,2077,2088,1,0,0,0,2078,2080,5,3,0,0,2079,2081,
        5,150,0,0,2080,2079,1,0,0,0,2080,2081,1,0,0,0,2081,2082,1,0,0,0,
        2082,2084,3,248,124,0,2083,2085,5,150,0,0,2084,2083,1,0,0,0,2084,
        2085,1,0,0,0,2085,2087,1,0,0,0,2086,2078,1,0,0,0,2087,2090,1,0,0,
        0,2088,2086,1,0,0,0,2088,2089,1,0,0,0,2089,2091,1,0,0,0,2090,2088,
        1,0,0,0,2091,2092,5,10,0,0,2092,247,1,0,0,0,2093,2096,3,286,143,
        0,2094,2096,5,136,0,0,2095,2093,1,0,0,0,2095,2094,1,0,0,0,2096,2098,
        1,0,0,0,2097,2099,5,150,0,0,2098,2097,1,0,0,0,2098,2099,1,0,0,0,
        2099,2100,1,0,0,0,2100,2102,5,120,0,0,2101,2103,5,150,0,0,2102,2101,
        1,0,0,0,2102,2103,1,0,0,0,2103,2104,1,0,0,0,2104,2105,3,190,95,0,
        2105,249,1,0,0,0,2106,2108,5,2,0,0,2107,2109,5,150,0,0,2108,2107,
        1,0,0,0,2108,2109,1,0,0,0,2109,2110,1,0,0,0,2110,2112,3,190,95,0,
        2111,2113,5,150,0,0,2112,2111,1,0,0,0,2112,2113,1,0,0,0,2113,2114,
        1,0,0,0,2114,2115,5,4,0,0,2115,251,1,0,0,0,2116,2118,5,129,0,0,2117,
        2119,5,150,0,0,2118,2117,1,0,0,0,2118,2119,1,0,0,0,2119,2120,1,0,
        0,0,2120,2122,5,2,0,0,2121,2123,5,150,0,0,2122,2121,1,0,0,0,2122,
        2123,1,0,0,0,2123,2124,1,0,0,0,2124,2126,5,101,0,0,2125,2127,5,150,
        0,0,2126,2125,1,0,0,0,2126,2127,1,0,0,0,2127,2128,1,0,0,0,2128,2165,
        5,4,0,0,2129,2131,3,254,127,0,2130,2132,5,150,0,0,2131,2130,1,0,
        0,0,2131,2132,1,0,0,0,2132,2133,1,0,0,0,2133,2135,5,2,0,0,2134,2136,
        5,150,0,0,2135,2134,1,0,0,0,2135,2136,1,0,0,0,2136,2141,1,0,0,0,
        2137,2139,5,100,0,0,2138,2140,5,150,0,0,2139,2138,1,0,0,0,2139,2140,
        1,0,0,0,2140,2142,1,0,0,0,2141,2137,1,0,0,0,2141,2142,1,0,0,0,2142,
        2160,1,0,0,0,2143,2145,3,256,128,0,2144,2146,5,150,0,0,2145,2144,
        1,0,0,0,2145,2146,1,0,0,0,2146,2157,1,0,0,0,2147,2149,5,3,0,0,2148,
        2150,5,150,0,0,2149,2148,1,0,0,0,2149,2150,1,0,0,0,2150,2151,1,0,
        0,0,2151,2153,3,256,128,0,2152,2154,5,150,0,0,2153,2152,1,0,0,0,
        2153,2154,1,0,0,0,2154,2156,1,0,0,0,2155,2147,1,0,0,0,2156,2159,
        1,0,0,0,2157,2155,1,0,0,0,2157,2158,1,0,0,0,2158,2161,1,0,0,0,2159,
        2157,1,0,0,0,2160,2143,1,0,0,0,2160,2161,1,0,0,0,2161,2162,1,0,0,
        0,2162,2163,5,4,0,0,2163,2165,1,0,0,0,2164,2116,1,0,0,0,2164,2129,
        1,0,0,0,2165,253,1,0,0,0,2166,2167,3,286,143,0,2167,255,1,0,0,0,
        2168,2170,3,286,143,0,2169,2171,5,150,0,0,2170,2169,1,0,0,0,2170,
        2171,1,0,0,0,2171,2172,1,0,0,0,2172,2173,5,120,0,0,2173,2175,5,6,
        0,0,2174,2176,5,150,0,0,2175,2174,1,0,0,0,2175,2176,1,0,0,0,2176,
        2178,1,0,0,0,2177,2168,1,0,0,0,2177,2178,1,0,0,0,2178,2179,1,0,0,
        0,2179,2180,3,190,95,0,2180,257,1,0,0,0,2181,2186,3,158,79,0,2182,
        2184,5,150,0,0,2183,2182,1,0,0,0,2183,2184,1,0,0,0,2184,2185,1,0,
        0,0,2185,2187,3,160,80,0,2186,2183,1,0,0,0,2187,2188,1,0,0,0,2188,
        2186,1,0,0,0,2188,2189,1,0,0,0,2189,259,1,0,0,0,2190,2192,5,130,
        0,0,2191,2193,5,150,0,0,2192,2191,1,0,0,0,2192,2193,1,0,0,0,2193,
        2194,1,0,0,0,2194,2196,5,9,0,0,2195,2197,5,150,0,0,2196,2195,1,0,
        0,0,2196,2197,1,0,0,0,2197,2198,1,0,0,0,2198,2200,5,90,0,0,2199,
        2201,5,150,0,0,2200,2199,1,0,0,0,2200,2201,1,0,0,0,2201,2202,1,0,
        0,0,2202,2207,3,150,75,0,2203,2205,5,150,0,0,2204,2203,1,0,0,0,2204,
        2205,1,0,0,0,2205,2206,1,0,0,0,2206,2208,3,148,74,0,2207,2204,1,
        0,0,0,2207,2208,1,0,0,0,2208,2210,1,0,0,0,2209,2211,5,150,0,0,2210,
        2209,1,0,0,0,2210,2211,1,0,0,0,2211,2212,1,0,0,0,2212,2213,5,10,
        0,0,2213,261,1,0,0,0,2214,2216,5,129,0,0,2215,2217,5,150,0,0,2216,
        2215,1,0,0,0,2216,2217,1,0,0,0,2217,2218,1,0,0,0,2218,2220,5,9,0,
        0,2219,2221,5,150,0,0,2220,2219,1,0,0,0,2220,2221,1,0,0,0,2221,2222,
        1,0,0,0,2222,2224,5,90,0,0,2223,2225,5,150,0,0,2224,2223,1,0,0,0,
        2224,2225,1,0,0,0,2225,2226,1,0,0,0,2226,2231,3,150,75,0,2227,2229,
        5,150,0,0,2228,2227,1,0,0,0,2228,2229,1,0,0,0,2229,2230,1,0,0,0,
        2230,2232,3,148,74,0,2231,2228,1,0,0,0,2231,2232,1,0,0,0,2232,2234,
        1,0,0,0,2233,2235,5,150,0,0,2234,2233,1,0,0,0,2234,2235,1,0,0,0,
        2235,2236,1,0,0,0,2236,2237,5,10,0,0,2237,263,1,0,0,0,2238,2240,
        5,5,0,0,2239,2241,5,150,0,0,2240,2239,1,0,0,0,2240,2241,1,0,0,0,
        2241,2244,1,0,0,0,2242,2245,3,278,139,0,2243,2245,5,101,0,0,2244,
        2242,1,0,0,0,2244,2243,1,0,0,0,2245,265,1,0,0,0,2246,2251,5,131,
        0,0,2247,2249,5,150,0,0,2248,2247,1,0,0,0,2248,2249,1,0,0,0,2249,
        2250,1,0,0,0,2250,2252,3,268,134,0,2251,2248,1,0,0,0,2252,2253,1,
        0,0,0,2253,2251,1,0,0,0,2253,2254,1,0,0,0,2254,2269,1,0,0,0,2255,
        2257,5,131,0,0,2256,2258,5,150,0,0,2257,2256,1,0,0,0,2257,2258,1,
        0,0,0,2258,2259,1,0,0,0,2259,2264,3,190,95,0,2260,2262,5,150,0,0,
        2261,2260,1,0,0,0,2261,2262,1,0,0,0,2262,2263,1,0,0,0,2263,2265,
        3,268,134,0,2264,2261,1,0,0,0,2265,2266,1,0,0,0,2266,2264,1,0,0,
        0,2266,2267,1,0,0,0,2267,2269,1,0,0,0,2268,2246,1,0,0,0,2268,2255,
        1,0,0,0,2269,2278,1,0,0,0,2270,2272,5,150,0,0,2271,2270,1,0,0,0,
        2271,2272,1,0,0,0,2272,2273,1,0,0,0,2273,2275,5,132,0,0,2274,2276,
        5,150,0,0,2275,2274,1,0,0,0,2275,2276,1,0,0,0,2276,2277,1,0,0,0,
        2277,2279,3,190,95,0,2278,2271,1,0,0,0,2278,2279,1,0,0,0,2279,2281,
        1,0,0,0,2280,2282,5,150,0,0,2281,2280,1,0,0,0,2281,2282,1,0,0,0,
        2282,2283,1,0,0,0,2283,2284,5,133,0,0,2284,267,1,0,0,0,2285,2287,
        5,134,0,0,2286,2288,5,150,0,0,2287,2286,1,0,0,0,2287,2288,1,0,0,
        0,2288,2289,1,0,0,0,2289,2291,3,190,95,0,2290,2292,5,150,0,0,2291,
        2290,1,0,0,0,2291,2292,1,0,0,0,2292,2293,1,0,0,0,2293,2295,5,135,
        0,0,2294,2296,5,150,0,0,2295,2294,1,0,0,0,2295,2296,1,0,0,0,2296,
        2297,1,0,0,0,2297,2298,3,190,95,0,2298,269,1,0,0,0,2299,2300,3,286,
        143,0,2300,271,1,0,0,0,2301,2304,3,282,141,0,2302,2304,3,280,140,
        0,2303,2301,1,0,0,0,2303,2302,1,0,0,0,2304,273,1,0,0,0,2305,2308,
        5,26,0,0,2306,2309,3,286,143,0,2307,2309,5,138,0,0,2308,2306,1,0,
        0,0,2308,2307,1,0,0,0,2309,275,1,0,0,0,2310,2312,3,236,118,0,2311,
        2313,5,150,0,0,2312,2311,1,0,0,0,2312,2313,1,0,0,0,2313,2314,1,0,
        0,0,2314,2315,3,264,132,0,2315,277,1,0,0,0,2316,2317,3,284,142,0,
        2317,279,1,0,0,0,2318,2319,5,138,0,0,2319,281,1,0,0,0,2320,2321,
        5,145,0,0,2321,283,1,0,0,0,2322,2323,3,286,143,0,2323,285,1,0,0,
        0,2324,2330,5,146,0,0,2325,2326,5,149,0,0,2326,2330,6,143,-1,0,2327,
        2330,5,139,0,0,2328,2330,3,288,144,0,2329,2324,1,0,0,0,2329,2325,
        1,0,0,0,2329,2327,1,0,0,0,2329,2328,1,0,0,0,2330,287,1,0,0,0,2331,
        2332,7,7,0,0,2332,289,1,0,0,0,2333,2334,7,8,0,0,2334,291,1,0,0,0,
        2335,2336,7,9,0,0,2336,293,1,0,0,0,2337,2338,7,10,0,0,2338,295,1,
        0,0,0,401,298,302,307,311,316,319,323,326,348,354,358,361,367,370,
        374,378,382,387,391,398,402,410,414,424,428,432,437,450,454,462,
        465,473,476,493,496,500,506,509,523,527,549,553,556,559,562,565,
        569,574,578,588,592,597,602,607,613,617,621,626,633,637,641,644,
        648,652,656,661,665,671,675,687,691,695,699,704,716,720,724,728,
        732,734,738,742,744,758,762,766,770,775,778,782,786,788,792,796,
        798,834,845,867,871,876,887,891,895,903,907,911,917,921,925,931,
        935,939,943,947,951,957,964,969,975,995,999,1007,1017,1022,1027,
        1031,1036,1042,1047,1050,1054,1058,1062,1068,1072,1077,1082,1086,
        1089,1093,1097,1101,1105,1109,1115,1119,1124,1128,1137,1143,1151,
        1155,1159,1163,1170,1173,1176,1179,1185,1188,1192,1196,1200,1203,
        1207,1217,1223,1230,1243,1247,1251,1255,1260,1265,1269,1275,1279,
        1283,1287,1292,1298,1301,1307,1310,1316,1320,1324,1328,1332,1337,
        1342,1346,1351,1354,1363,1372,1377,1390,1393,1401,1405,1410,1415,
        1419,1424,1430,1435,1442,1446,1450,1452,1456,1458,1462,1464,1470,
        1476,1480,1483,1486,1492,1495,1498,1502,1508,1511,1514,1518,1522,
        1526,1528,1532,1534,1538,1540,1544,1546,1552,1556,1560,1564,1568,
        1572,1576,1580,1584,1587,1593,1597,1601,1604,1609,1614,1619,1624,
        1630,1636,1639,1642,1645,1649,1652,1655,1658,1661,1665,1669,1673,
        1677,1681,1684,1687,1691,1695,1699,1703,1705,1711,1714,1717,1723,
        1726,1729,1750,1760,1770,1775,1779,1786,1790,1794,1798,1802,1810,
        1814,1818,1822,1828,1832,1838,1842,1847,1852,1856,1861,1866,1870,
        1876,1883,1887,1893,1900,1904,1910,1917,1921,1926,1931,1935,1940,
        1943,1950,1953,1958,1967,1971,1974,1987,1990,1995,2009,2013,2018,
        2030,2038,2044,2048,2052,2056,2059,2065,2068,2072,2076,2080,2084,
        2088,2095,2098,2102,2108,2112,2118,2122,2126,2131,2135,2139,2141,
        2145,2149,2153,2157,2160,2164,2170,2175,2177,2183,2188,2192,2196,
        2200,2204,2207,2210,2216,2220,2224,2228,2231,2234,2240,2244,2248,
        2253,2257,2261,2266,2268,2271,2275,2278,2281,2287,2291,2295,2303,
        2308,2312,2329
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
    public kU_ImportDatabase(): KU_ImportDatabaseContext {
        return this.getTypedRuleContext(KU_ImportDatabaseContext, 0);
    }
    public kU_AttachDatabase(): KU_AttachDatabaseContext {
        return this.getTypedRuleContext(KU_AttachDatabaseContext, 0);
    }
    public kU_DetachDatabase(): KU_DetachDatabaseContext {
        return this.getTypedRuleContext(KU_DetachDatabaseContext, 0);
    }
    public kU_UseDatabase(): KU_UseDatabaseContext {
        return this.getTypedRuleContext(KU_UseDatabaseContext, 0);
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
    public kU_ScanSource(): KU_ScanSourceContext {
        return this.getTypedRuleContext(KU_ScanSourceContext, 0);
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


export class KU_ScanSourceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_FilePaths(): KU_FilePathsContext {
        return this.getTypedRuleContext(KU_FilePathsContext, 0);
    }
    public oC_Query(): OC_QueryContext {
        return this.getTypedRuleContext(OC_QueryContext, 0);
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
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ScanSource;
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


export class KU_ImportDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IMPORT(): antlr.TerminalNode {
        return this.getToken(CypherParser.IMPORT, 0);
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
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ImportDatabase;
    }
}


export class KU_AttachDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ATTACH(): antlr.TerminalNode {
        return this.getToken(CypherParser.ATTACH, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public StringLiteral__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.StringLiteral);
    }
    public StringLiteral(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, i);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public DBTYPE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DBTYPE, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AttachDatabase;
    }
}


export class KU_DetachDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DETACH(): antlr.TerminalNode {
        return this.getToken(CypherParser.DETACH, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_DetachDatabase;
    }
}


export class KU_UseDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public USE(): antlr.TerminalNode {
        return this.getToken(CypherParser.USE, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_UseDatabase;
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
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_StandaloneCall;
    }
}


export class KU_CommentOnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMENT_(): antlr.TerminalNode {
        return this.getToken(CypherParser.COMMENT_, 0);
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
    public kU_ScanSource(): KU_ScanSourceContext {
        return this.getTypedRuleContext(KU_ScanSourceContext, 0);
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
    public kU_ParsingOptions(): KU_ParsingOptionsContext {
        return this.getTypedRuleContext(KU_ParsingOptionsContext, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
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
    public COMMENT_(): antlr.TerminalNode {
        return this.getToken(CypherParser.COMMENT_, 0);
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
    public IMPORT(): antlr.TerminalNode {
        return this.getToken(CypherParser.IMPORT, 0);
    }
    public EXPORT(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXPORT, 0);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DATABASE, 0);
    }
    public USE(): antlr.TerminalNode {
        return this.getToken(CypherParser.USE, 0);
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

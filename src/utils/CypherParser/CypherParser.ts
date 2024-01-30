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
    public static readonly T__45 = 46;
    public static readonly CALL = 47;
    public static readonly COMMENT = 48;
    public static readonly MACRO = 49;
    public static readonly GLOB = 50;
    public static readonly COPY = 51;
    public static readonly FROM = 52;
    public static readonly COLUMN = 53;
    public static readonly NODE = 54;
    public static readonly TABLE = 55;
    public static readonly GROUP = 56;
    public static readonly RDF = 57;
    public static readonly GRAPH = 58;
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
    public static readonly STARTS = 116;
    public static readonly ENDS = 117;
    public static readonly CONTAINS = 118;
    public static readonly IS = 119;
    public static readonly NULL_ = 120;
    public static readonly TRUE = 121;
    public static readonly FALSE = 122;
    public static readonly COUNT = 123;
    public static readonly EXISTS = 124;
    public static readonly CASE = 125;
    public static readonly ELSE = 126;
    public static readonly END = 127;
    public static readonly WHEN = 128;
    public static readonly THEN = 129;
    public static readonly StringLiteral = 130;
    public static readonly EscapedChar = 131;
    public static readonly DecimalInteger = 132;
    public static readonly HexLetter = 133;
    public static readonly HexDigit = 134;
    public static readonly Digit = 135;
    public static readonly NonZeroDigit = 136;
    public static readonly NonZeroOctDigit = 137;
    public static readonly ZeroDigit = 138;
    public static readonly RegularDecimalReal = 139;
    public static readonly UnescapedSymbolicName = 140;
    public static readonly IdentifierStart = 141;
    public static readonly IdentifierPart = 142;
    public static readonly EscapedSymbolicName = 143;
    public static readonly SP = 144;
    public static readonly WHITESPACE = 145;
    public static readonly Comment = 146;
    public static readonly Unknown = 147;
    public static readonly RULE_oC_Cypher = 0;
    public static readonly RULE_oC_Statement = 1;
    public static readonly RULE_kU_CopyFrom = 2;
    public static readonly RULE_kU_ColumnNames = 3;
    public static readonly RULE_kU_CopyFromByColumn = 4;
    public static readonly RULE_kU_CopyTO = 5;
    public static readonly RULE_kU_StandaloneCall = 6;
    public static readonly RULE_kU_CommentOn = 7;
    public static readonly RULE_kU_CreateMacro = 8;
    public static readonly RULE_kU_PositionalArgs = 9;
    public static readonly RULE_kU_DefaultArg = 10;
    public static readonly RULE_kU_FilePaths = 11;
    public static readonly RULE_kU_ParsingOptions = 12;
    public static readonly RULE_kU_ParsingOption = 13;
    public static readonly RULE_kU_DDL = 14;
    public static readonly RULE_kU_CreateNodeTable = 15;
    public static readonly RULE_kU_CreateRelTable = 16;
    public static readonly RULE_kU_CreateRelTableGroup = 17;
    public static readonly RULE_kU_RelTableConnection = 18;
    public static readonly RULE_kU_CreateRdfGraph = 19;
    public static readonly RULE_kU_DropTable = 20;
    public static readonly RULE_kU_AlterTable = 21;
    public static readonly RULE_kU_AlterOptions = 22;
    public static readonly RULE_kU_AddProperty = 23;
    public static readonly RULE_kU_DropProperty = 24;
    public static readonly RULE_kU_RenameTable = 25;
    public static readonly RULE_kU_RenameProperty = 26;
    public static readonly RULE_kU_PropertyDefinitions = 27;
    public static readonly RULE_kU_PropertyDefinition = 28;
    public static readonly RULE_kU_CreateNodeConstraint = 29;
    public static readonly RULE_kU_DataType = 30;
    public static readonly RULE_kU_ListIdentifiers = 31;
    public static readonly RULE_kU_ListIdentifier = 32;
    public static readonly RULE_oC_AnyCypherOption = 33;
    public static readonly RULE_oC_Explain = 34;
    public static readonly RULE_oC_Profile = 35;
    public static readonly RULE_kU_Transaction = 36;
    public static readonly RULE_kU_Extension = 37;
    public static readonly RULE_kU_LoadExtension = 38;
    public static readonly RULE_kU_InstallExtension = 39;
    public static readonly RULE_oC_Query = 40;
    public static readonly RULE_oC_RegularQuery = 41;
    public static readonly RULE_oC_Union = 42;
    public static readonly RULE_oC_SingleQuery = 43;
    public static readonly RULE_oC_SinglePartQuery = 44;
    public static readonly RULE_oC_MultiPartQuery = 45;
    public static readonly RULE_kU_QueryPart = 46;
    public static readonly RULE_oC_UpdatingClause = 47;
    public static readonly RULE_oC_ReadingClause = 48;
    public static readonly RULE_kU_LoadFrom = 49;
    public static readonly RULE_kU_InQueryCall = 50;
    public static readonly RULE_oC_Match = 51;
    public static readonly RULE_oC_Unwind = 52;
    public static readonly RULE_oC_Create = 53;
    public static readonly RULE_oC_Merge = 54;
    public static readonly RULE_oC_MergeAction = 55;
    public static readonly RULE_oC_Set = 56;
    public static readonly RULE_oC_SetItem = 57;
    public static readonly RULE_oC_Delete = 58;
    public static readonly RULE_oC_With = 59;
    public static readonly RULE_oC_Return = 60;
    public static readonly RULE_oC_ProjectionBody = 61;
    public static readonly RULE_oC_ProjectionItems = 62;
    public static readonly RULE_oC_ProjectionItem = 63;
    public static readonly RULE_oC_Order = 64;
    public static readonly RULE_oC_Skip = 65;
    public static readonly RULE_oC_Limit = 66;
    public static readonly RULE_oC_SortItem = 67;
    public static readonly RULE_oC_Where = 68;
    public static readonly RULE_oC_Pattern = 69;
    public static readonly RULE_oC_PatternPart = 70;
    public static readonly RULE_oC_AnonymousPatternPart = 71;
    public static readonly RULE_oC_PatternElement = 72;
    public static readonly RULE_oC_NodePattern = 73;
    public static readonly RULE_oC_PatternElementChain = 74;
    public static readonly RULE_oC_RelationshipPattern = 75;
    public static readonly RULE_oC_RelationshipDetail = 76;
    public static readonly RULE_kU_Properties = 77;
    public static readonly RULE_oC_RelationshipTypes = 78;
    public static readonly RULE_oC_NodeLabels = 79;
    public static readonly RULE_oC_NodeLabel = 80;
    public static readonly RULE_oC_RangeLiteral = 81;
    public static readonly RULE_kU_RecursiveRelationshipComprehension = 82;
    public static readonly RULE_kU_IntermediateNodeProjectionItems = 83;
    public static readonly RULE_kU_IntermediateRelProjectionItems = 84;
    public static readonly RULE_oC_LowerBound = 85;
    public static readonly RULE_oC_UpperBound = 86;
    public static readonly RULE_oC_LabelName = 87;
    public static readonly RULE_oC_RelTypeName = 88;
    public static readonly RULE_oC_Expression = 89;
    public static readonly RULE_oC_OrExpression = 90;
    public static readonly RULE_oC_XorExpression = 91;
    public static readonly RULE_oC_AndExpression = 92;
    public static readonly RULE_oC_NotExpression = 93;
    public static readonly RULE_oC_ComparisonExpression = 94;
    public static readonly RULE_kU_ComparisonOperator = 95;
    public static readonly RULE_kU_BitwiseOrOperatorExpression = 96;
    public static readonly RULE_kU_BitwiseAndOperatorExpression = 97;
    public static readonly RULE_kU_BitShiftOperatorExpression = 98;
    public static readonly RULE_kU_BitShiftOperator = 99;
    public static readonly RULE_oC_AddOrSubtractExpression = 100;
    public static readonly RULE_kU_AddOrSubtractOperator = 101;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 102;
    public static readonly RULE_kU_MultiplyDivideModuloOperator = 103;
    public static readonly RULE_oC_PowerOfExpression = 104;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 105;
    public static readonly RULE_oC_StringListNullOperatorExpression = 106;
    public static readonly RULE_oC_ListOperatorExpression = 107;
    public static readonly RULE_kU_ListExtractOperatorExpression = 108;
    public static readonly RULE_kU_ListSliceOperatorExpression = 109;
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
        null, "';'", "'('", "')'", "','", "'='", "':'", "'['", "']'", "'{'", 
        "'}'", "'|'", "'..'", "'<>'", "'<'", "'<='", "'>'", "'>='", "'&'", 
        "'>>'", "'<<'", "'+'", "'/'", "'%'", "'^'", "'=~'", "'.'", "'$'", 
        "'\\u27E8'", "'\\u3008'", "'\\uFE64'", "'\\uFF1C'", "'\\u27E9'", 
        "'\\u3009'", "'\\uFE65'", "'\\uFF1E'", "'\\u00AD'", "'\\u2010'", 
        "'\\u2011'", "'\\u2012'", "'\\u2013'", "'\\u2014'", "'\\u2015'", 
        "'\\u2212'", "'\\uFE58'", "'\\uFE63'", "'\\uFF0D'", null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, "'*'", null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "'!='", "'-'", 
        "'!'", null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "'0'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, "CALL", "COMMENT", "MACRO", "GLOB", "COPY", "FROM", 
        "COLUMN", "NODE", "TABLE", "GROUP", "RDF", "GRAPH", "DROP", "ALTER", 
        "DEFAULT", "RENAME", "ADD", "PRIMARY", "KEY", "REL", "TO", "EXPLAIN", 
        "PROFILE", "BEGIN", "TRANSACTION", "READ", "ONLY", "WRITE", "COMMIT", 
        "COMMIT_SKIP_CHECKPOINT", "ROLLBACK", "ROLLBACK_SKIP_CHECKPOINT", 
        "INSTALL", "EXTENSION", "UNION", "ALL", "LOAD", "HEADERS", "OPTIONAL", 
        "MATCH", "UNWIND", "CREATE", "MERGE", "ON", "SET", "DETACH", "DELETE", 
        "WITH", "RETURN", "DISTINCT", "STAR", "AS", "ORDER", "BY", "L_SKIP", 
        "LIMIT", "ASCENDING", "ASC", "DESCENDING", "DESC", "WHERE", "SHORTEST", 
        "OR", "XOR", "AND", "NOT", "INVALID_NOT_EQUAL", "MINUS", "FACTORIAL", 
        "STARTS", "ENDS", "CONTAINS", "IS", "NULL_", "TRUE", "FALSE", "COUNT", 
        "EXISTS", "CASE", "ELSE", "END", "WHEN", "THEN", "StringLiteral", 
        "EscapedChar", "DecimalInteger", "HexLetter", "HexDigit", "Digit", 
        "NonZeroDigit", "NonZeroOctDigit", "ZeroDigit", "RegularDecimalReal", 
        "UnescapedSymbolicName", "IdentifierStart", "IdentifierPart", "EscapedSymbolicName", 
        "SP", "WHITESPACE", "Comment", "Unknown"
    ];
    public static readonly ruleNames = [
        "oC_Cypher", "oC_Statement", "kU_CopyFrom", "kU_ColumnNames", "kU_CopyFromByColumn", 
        "kU_CopyTO", "kU_StandaloneCall", "kU_CommentOn", "kU_CreateMacro", 
        "kU_PositionalArgs", "kU_DefaultArg", "kU_FilePaths", "kU_ParsingOptions", 
        "kU_ParsingOption", "kU_DDL", "kU_CreateNodeTable", "kU_CreateRelTable", 
        "kU_CreateRelTableGroup", "kU_RelTableConnection", "kU_CreateRdfGraph", 
        "kU_DropTable", "kU_AlterTable", "kU_AlterOptions", "kU_AddProperty", 
        "kU_DropProperty", "kU_RenameTable", "kU_RenameProperty", "kU_PropertyDefinitions", 
        "kU_PropertyDefinition", "kU_CreateNodeConstraint", "kU_DataType", 
        "kU_ListIdentifiers", "kU_ListIdentifier", "oC_AnyCypherOption", 
        "oC_Explain", "oC_Profile", "kU_Transaction", "kU_Extension", "kU_LoadExtension", 
        "kU_InstallExtension", "oC_Query", "oC_RegularQuery", "oC_Union", 
        "oC_SingleQuery", "oC_SinglePartQuery", "oC_MultiPartQuery", "kU_QueryPart", 
        "oC_UpdatingClause", "oC_ReadingClause", "kU_LoadFrom", "kU_InQueryCall", 
        "oC_Match", "oC_Unwind", "oC_Create", "oC_Merge", "oC_MergeAction", 
        "oC_Set", "oC_SetItem", "oC_Delete", "oC_With", "oC_Return", "oC_ProjectionBody", 
        "oC_ProjectionItems", "oC_ProjectionItem", "oC_Order", "oC_Skip", 
        "oC_Limit", "oC_SortItem", "oC_Where", "oC_Pattern", "oC_PatternPart", 
        "oC_AnonymousPatternPart", "oC_PatternElement", "oC_NodePattern", 
        "oC_PatternElementChain", "oC_RelationshipPattern", "oC_RelationshipDetail", 
        "kU_Properties", "oC_RelationshipTypes", "oC_NodeLabels", "oC_NodeLabel", 
        "oC_RangeLiteral", "kU_RecursiveRelationshipComprehension", "kU_IntermediateNodeProjectionItems", 
        "kU_IntermediateRelProjectionItems", "oC_LowerBound", "oC_UpperBound", 
        "oC_LabelName", "oC_RelTypeName", "oC_Expression", "oC_OrExpression", 
        "oC_XorExpression", "oC_AndExpression", "oC_NotExpression", "oC_ComparisonExpression", 
        "kU_ComparisonOperator", "kU_BitwiseOrOperatorExpression", "kU_BitwiseAndOperatorExpression", 
        "kU_BitShiftOperatorExpression", "kU_BitShiftOperator", "oC_AddOrSubtractExpression", 
        "kU_AddOrSubtractOperator", "oC_MultiplyDivideModuloExpression", 
        "kU_MultiplyDivideModuloOperator", "oC_PowerOfExpression", "oC_UnaryAddSubtractOrFactorialExpression", 
        "oC_StringListNullOperatorExpression", "oC_ListOperatorExpression", 
        "kU_ListExtractOperatorExpression", "kU_ListSliceOperatorExpression", 
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
    public oC_Cypher(): OC_CypherContext {
        let localctx: OC_CypherContext = new OC_CypherContext(this._ctx, this.state);
        this.enterRule(localctx, 0, CypherParser.RULE_oC_Cypher);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 289;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
            case 1:
                {
                this.state = 288;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 292;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===68 || _la===69) {
                {
                this.state = 291;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 295;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 294;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 297;
            this.oC_Statement();
            }
            this.state = 302;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
            case 1:
                {
                this.state = 299;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 298;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 301;
                this.match(CypherParser.T__0);
                }
                break;
            }
            this.state = 305;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 304;
                this.match(CypherParser.SP);
                }
            }

            this.state = 307;
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
    public oC_Statement(): OC_StatementContext {
        let localctx: OC_StatementContext = new OC_StatementContext(this._ctx, this.state);
        this.enterRule(localctx, 2, CypherParser.RULE_oC_Statement);
        try {
            this.state = 319;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 309;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 310;
                this.kU_DDL();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 311;
                this.kU_CopyFrom();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 312;
                this.kU_CopyFromByColumn();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 313;
                this.kU_CopyTO();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 314;
                this.kU_StandaloneCall();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 315;
                this.kU_CreateMacro();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 316;
                this.kU_CommentOn();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 317;
                this.kU_Transaction();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 318;
                this.kU_Extension();
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
        this.enterRule(localctx, 4, CypherParser.RULE_kU_CopyFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 321;
            this.match(CypherParser.COPY);
            this.state = 322;
            this.match(CypherParser.SP);
            this.state = 323;
            this.oC_SchemaName();
            this.state = 340;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                {
                {
                this.state = 325;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 324;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 327;
                this.match(CypherParser.T__1);
                this.state = 329;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 328;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 331;
                this.kU_ColumnNames();
                this.state = 333;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 332;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 335;
                this.match(CypherParser.T__2);
                this.state = 337;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 336;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                break;
            case 2:
                {
                this.state = 339;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 342;
            this.match(CypherParser.FROM);
            this.state = 343;
            this.match(CypherParser.SP);
            this.state = 344;
            this.kU_FilePaths();
            this.state = 358;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
            case 1:
                {
                this.state = 346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 345;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 348;
                this.match(CypherParser.T__1);
                this.state = 350;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 349;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 352;
                this.kU_ParsingOptions();
                this.state = 354;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 353;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 356;
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
        this.enterRule(localctx, 6, CypherParser.RULE_kU_ColumnNames);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 360;
            this.oC_SchemaName();
            this.state = 371;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 362;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 361;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 364;
                    this.match(CypherParser.T__3);
                    this.state = 366;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 365;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 368;
                    this.oC_SchemaName();
                    }
                    }
                }
                this.state = 373;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
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
        this.enterRule(localctx, 8, CypherParser.RULE_kU_CopyFromByColumn);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 374;
            this.match(CypherParser.COPY);
            this.state = 375;
            this.match(CypherParser.SP);
            this.state = 376;
            this.oC_SchemaName();
            this.state = 377;
            this.match(CypherParser.SP);
            this.state = 378;
            this.match(CypherParser.FROM);
            this.state = 379;
            this.match(CypherParser.SP);
            this.state = 380;
            this.match(CypherParser.T__1);
            this.state = 382;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 381;
                this.match(CypherParser.SP);
                }
            }

            this.state = 384;
            this.match(CypherParser.StringLiteral);
            this.state = 395;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4 || _la===144) {
                {
                {
                this.state = 386;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 385;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 388;
                this.match(CypherParser.T__3);
                this.state = 390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 389;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 392;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 398;
            this.match(CypherParser.T__2);
            this.state = 399;
            this.match(CypherParser.SP);
            this.state = 400;
            this.match(CypherParser.BY);
            this.state = 401;
            this.match(CypherParser.SP);
            this.state = 402;
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
        this.enterRule(localctx, 10, CypherParser.RULE_kU_CopyTO);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 404;
            this.match(CypherParser.COPY);
            this.state = 405;
            this.match(CypherParser.SP);
            this.state = 406;
            this.match(CypherParser.T__1);
            this.state = 408;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 407;
                this.match(CypherParser.SP);
                }
            }

            this.state = 410;
            this.oC_Query();
            this.state = 412;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 411;
                this.match(CypherParser.SP);
                }
            }

            this.state = 414;
            this.match(CypherParser.T__2);
            this.state = 415;
            this.match(CypherParser.SP);
            this.state = 416;
            this.match(CypherParser.TO);
            this.state = 417;
            this.match(CypherParser.SP);
            this.state = 418;
            this.match(CypherParser.StringLiteral);
            this.state = 432;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
            case 1:
                {
                this.state = 420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 419;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 422;
                this.match(CypherParser.T__1);
                this.state = 424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 423;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 426;
                this.kU_ParsingOptions();
                this.state = 428;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 427;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 430;
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
        this.enterRule(localctx, 12, CypherParser.RULE_kU_StandaloneCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 434;
            this.match(CypherParser.CALL);
            this.state = 435;
            this.match(CypherParser.SP);
            this.state = 436;
            this.oC_SymbolicName();
            this.state = 438;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 437;
                this.match(CypherParser.SP);
                }
            }

            this.state = 440;
            this.match(CypherParser.T__4);
            this.state = 442;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 441;
                this.match(CypherParser.SP);
                }
            }

            this.state = 444;
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
        this.enterRule(localctx, 14, CypherParser.RULE_kU_CommentOn);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 446;
            this.match(CypherParser.COMMENT);
            this.state = 447;
            this.match(CypherParser.SP);
            this.state = 448;
            this.match(CypherParser.ON);
            this.state = 449;
            this.match(CypherParser.SP);
            this.state = 450;
            this.match(CypherParser.TABLE);
            this.state = 451;
            this.match(CypherParser.SP);
            this.state = 452;
            this.oC_SchemaName();
            this.state = 453;
            this.match(CypherParser.SP);
            this.state = 454;
            this.match(CypherParser.IS);
            this.state = 455;
            this.match(CypherParser.SP);
            this.state = 456;
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
        this.enterRule(localctx, 16, CypherParser.RULE_kU_CreateMacro);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 458;
            this.match(CypherParser.CREATE);
            this.state = 459;
            this.match(CypherParser.SP);
            this.state = 460;
            this.match(CypherParser.MACRO);
            this.state = 461;
            this.match(CypherParser.SP);
            this.state = 462;
            this.oC_FunctionName();
            this.state = 464;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 463;
                this.match(CypherParser.SP);
                }
            }

            this.state = 466;
            this.match(CypherParser.T__1);
            this.state = 468;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
            case 1:
                {
                this.state = 467;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 471;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
            case 1:
                {
                this.state = 470;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 474;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
            case 1:
                {
                this.state = 473;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 477;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1180689) !== 0)) {
                {
                this.state = 476;
                this.kU_DefaultArg();
                }
            }

            this.state = 489;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 480;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 479;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 482;
                    this.match(CypherParser.T__3);
                    this.state = 484;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 483;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 486;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 491;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
            }
            this.state = 493;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 492;
                this.match(CypherParser.SP);
                }
            }

            this.state = 495;
            this.match(CypherParser.T__2);
            this.state = 496;
            this.match(CypherParser.SP);
            this.state = 497;
            this.match(CypherParser.AS);
            this.state = 498;
            this.match(CypherParser.SP);
            this.state = 499;
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
        this.enterRule(localctx, 18, CypherParser.RULE_kU_PositionalArgs);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 501;
            this.oC_SymbolicName();
            this.state = 512;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 503;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 502;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 505;
                    this.match(CypherParser.T__3);
                    this.state = 507;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 506;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 509;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 514;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
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
        this.enterRule(localctx, 20, CypherParser.RULE_kU_DefaultArg);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 515;
            this.oC_SymbolicName();
            this.state = 517;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 516;
                this.match(CypherParser.SP);
                }
            }

            this.state = 519;
            this.match(CypherParser.T__5);
            this.state = 520;
            this.match(CypherParser.T__4);
            this.state = 522;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 521;
                this.match(CypherParser.SP);
                }
            }

            this.state = 524;
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
        this.enterRule(localctx, 22, CypherParser.RULE_kU_FilePaths);
        let _la: number;
        try {
            this.state = 559;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 526;
                this.match(CypherParser.T__6);
                this.state = 528;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 527;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 530;
                this.match(CypherParser.StringLiteral);
                this.state = 541;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4 || _la===144) {
                    {
                    {
                    this.state = 532;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 531;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 534;
                    this.match(CypherParser.T__3);
                    this.state = 536;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 535;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 538;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 543;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 544;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 545;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 546;
                this.match(CypherParser.GLOB);
                this.state = 548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 547;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 550;
                this.match(CypherParser.T__1);
                this.state = 552;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 551;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 554;
                this.match(CypherParser.StringLiteral);
                this.state = 556;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 555;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 558;
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
        this.enterRule(localctx, 24, CypherParser.RULE_kU_ParsingOptions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 561;
            this.kU_ParsingOption();
            this.state = 572;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 563;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 562;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 565;
                    this.match(CypherParser.T__3);
                    this.state = 567;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 566;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 569;
                    this.kU_ParsingOption();
                    }
                    }
                }
                this.state = 574;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
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
        this.enterRule(localctx, 26, CypherParser.RULE_kU_ParsingOption);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 575;
            this.oC_SymbolicName();
            this.state = 577;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 576;
                this.match(CypherParser.SP);
                }
            }

            this.state = 579;
            this.match(CypherParser.T__4);
            this.state = 581;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 580;
                this.match(CypherParser.SP);
                }
            }

            this.state = 583;
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
        this.enterRule(localctx, 28, CypherParser.RULE_kU_DDL);
        try {
            this.state = 591;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 585;
                this.kU_CreateNodeTable();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 586;
                this.kU_CreateRelTable();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 587;
                this.kU_CreateRelTableGroup();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 588;
                this.kU_CreateRdfGraph();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 589;
                this.kU_DropTable();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 590;
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
        this.enterRule(localctx, 30, CypherParser.RULE_kU_CreateNodeTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 593;
            this.match(CypherParser.CREATE);
            this.state = 594;
            this.match(CypherParser.SP);
            this.state = 595;
            this.match(CypherParser.NODE);
            this.state = 596;
            this.match(CypherParser.SP);
            this.state = 597;
            this.match(CypherParser.TABLE);
            this.state = 598;
            this.match(CypherParser.SP);
            this.state = 599;
            this.oC_SchemaName();
            this.state = 601;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 600;
                this.match(CypherParser.SP);
                }
            }

            this.state = 603;
            this.match(CypherParser.T__1);
            this.state = 605;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 604;
                this.match(CypherParser.SP);
                }
            }

            this.state = 607;
            this.kU_PropertyDefinitions();
            this.state = 609;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 608;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 611;
            this.match(CypherParser.T__3);
            this.state = 613;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 612;
                this.match(CypherParser.SP);
                }
            }

            this.state = 615;
            this.kU_CreateNodeConstraint();
            }
            this.state = 618;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 617;
                this.match(CypherParser.SP);
                }
            }

            this.state = 620;
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
        this.enterRule(localctx, 32, CypherParser.RULE_kU_CreateRelTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 622;
            this.match(CypherParser.CREATE);
            this.state = 623;
            this.match(CypherParser.SP);
            this.state = 624;
            this.match(CypherParser.REL);
            this.state = 625;
            this.match(CypherParser.SP);
            this.state = 626;
            this.match(CypherParser.TABLE);
            this.state = 627;
            this.match(CypherParser.SP);
            this.state = 628;
            this.oC_SchemaName();
            this.state = 630;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 629;
                this.match(CypherParser.SP);
                }
            }

            this.state = 632;
            this.match(CypherParser.T__1);
            this.state = 634;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 633;
                this.match(CypherParser.SP);
                }
            }

            this.state = 636;
            this.kU_RelTableConnection();
            this.state = 638;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 637;
                this.match(CypherParser.SP);
                }
            }

            this.state = 648;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
            case 1:
                {
                this.state = 640;
                this.match(CypherParser.T__3);
                this.state = 642;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 641;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 644;
                this.kU_PropertyDefinitions();
                this.state = 646;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 645;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 658;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===4) {
                {
                this.state = 650;
                this.match(CypherParser.T__3);
                this.state = 652;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 651;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 654;
                this.oC_SymbolicName();
                this.state = 656;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 655;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 660;
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
        this.enterRule(localctx, 34, CypherParser.RULE_kU_CreateRelTableGroup);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 662;
            this.match(CypherParser.CREATE);
            this.state = 663;
            this.match(CypherParser.SP);
            this.state = 664;
            this.match(CypherParser.REL);
            this.state = 665;
            this.match(CypherParser.SP);
            this.state = 666;
            this.match(CypherParser.TABLE);
            this.state = 667;
            this.match(CypherParser.SP);
            this.state = 668;
            this.match(CypherParser.GROUP);
            this.state = 669;
            this.match(CypherParser.SP);
            this.state = 670;
            this.oC_SchemaName();
            this.state = 672;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 671;
                this.match(CypherParser.SP);
                }
            }

            this.state = 674;
            this.match(CypherParser.T__1);
            this.state = 676;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 675;
                this.match(CypherParser.SP);
                }
            }

            this.state = 678;
            this.kU_RelTableConnection();
            this.state = 680;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 679;
                this.match(CypherParser.SP);
                }
            }

            this.state = 687;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 682;
                    this.match(CypherParser.T__3);
                    this.state = 684;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 683;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 686;
                    this.kU_RelTableConnection();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 689;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 77, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 692;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 691;
                this.match(CypherParser.SP);
                }
            }

            this.state = 702;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
            case 1:
                {
                this.state = 694;
                this.match(CypherParser.T__3);
                this.state = 696;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 695;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 698;
                this.kU_PropertyDefinitions();
                this.state = 700;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 699;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 712;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===4) {
                {
                this.state = 704;
                this.match(CypherParser.T__3);
                this.state = 706;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 705;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 708;
                this.oC_SymbolicName();
                this.state = 710;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 709;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 714;
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
        this.enterRule(localctx, 36, CypherParser.RULE_kU_RelTableConnection);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 716;
            this.match(CypherParser.FROM);
            this.state = 717;
            this.match(CypherParser.SP);
            this.state = 718;
            this.oC_SchemaName();
            this.state = 719;
            this.match(CypherParser.SP);
            this.state = 720;
            this.match(CypherParser.TO);
            this.state = 721;
            this.match(CypherParser.SP);
            this.state = 722;
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
        this.enterRule(localctx, 38, CypherParser.RULE_kU_CreateRdfGraph);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 724;
            this.match(CypherParser.CREATE);
            this.state = 725;
            this.match(CypherParser.SP);
            this.state = 726;
            this.match(CypherParser.RDF);
            this.state = 727;
            this.match(CypherParser.SP);
            this.state = 728;
            this.match(CypherParser.GRAPH);
            this.state = 729;
            this.match(CypherParser.SP);
            this.state = 730;
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
        this.enterRule(localctx, 40, CypherParser.RULE_kU_DropTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 732;
            this.match(CypherParser.DROP);
            this.state = 733;
            this.match(CypherParser.SP);
            this.state = 734;
            this.match(CypherParser.TABLE);
            this.state = 735;
            this.match(CypherParser.SP);
            this.state = 736;
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
        this.enterRule(localctx, 42, CypherParser.RULE_kU_AlterTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 738;
            this.match(CypherParser.ALTER);
            this.state = 739;
            this.match(CypherParser.SP);
            this.state = 740;
            this.match(CypherParser.TABLE);
            this.state = 741;
            this.match(CypherParser.SP);
            this.state = 742;
            this.oC_SchemaName();
            this.state = 743;
            this.match(CypherParser.SP);
            this.state = 744;
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
        this.enterRule(localctx, 44, CypherParser.RULE_kU_AlterOptions);
        try {
            this.state = 750;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 746;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 747;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 748;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 749;
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
        this.enterRule(localctx, 46, CypherParser.RULE_kU_AddProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 752;
            this.match(CypherParser.ADD);
            this.state = 753;
            this.match(CypherParser.SP);
            this.state = 754;
            this.oC_PropertyKeyName();
            this.state = 755;
            this.match(CypherParser.SP);
            this.state = 756;
            this.kU_DataType(0);
            this.state = 761;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
            case 1:
                {
                this.state = 757;
                this.match(CypherParser.SP);
                this.state = 758;
                this.match(CypherParser.DEFAULT);
                this.state = 759;
                this.match(CypherParser.SP);
                this.state = 760;
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
        this.enterRule(localctx, 48, CypherParser.RULE_kU_DropProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 763;
            this.match(CypherParser.DROP);
            this.state = 764;
            this.match(CypherParser.SP);
            this.state = 765;
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
        this.enterRule(localctx, 50, CypherParser.RULE_kU_RenameTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 767;
            this.match(CypherParser.RENAME);
            this.state = 768;
            this.match(CypherParser.SP);
            this.state = 769;
            this.match(CypherParser.TO);
            this.state = 770;
            this.match(CypherParser.SP);
            this.state = 771;
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
        this.enterRule(localctx, 52, CypherParser.RULE_kU_RenameProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 773;
            this.match(CypherParser.RENAME);
            this.state = 774;
            this.match(CypherParser.SP);
            this.state = 775;
            this.oC_PropertyKeyName();
            this.state = 776;
            this.match(CypherParser.SP);
            this.state = 777;
            this.match(CypherParser.TO);
            this.state = 778;
            this.match(CypherParser.SP);
            this.state = 779;
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
        this.enterRule(localctx, 54, CypherParser.RULE_kU_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 781;
            this.kU_PropertyDefinition();
            this.state = 792;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 89, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 783;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 782;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 785;
                    this.match(CypherParser.T__3);
                    this.state = 787;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 786;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 789;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 794;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 89, this._ctx);
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
        this.enterRule(localctx, 56, CypherParser.RULE_kU_PropertyDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 795;
            this.oC_PropertyKeyName();
            this.state = 796;
            this.match(CypherParser.SP);
            this.state = 797;
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
        this.enterRule(localctx, 58, CypherParser.RULE_kU_CreateNodeConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 799;
            this.match(CypherParser.PRIMARY);
            this.state = 800;
            this.match(CypherParser.SP);
            this.state = 801;
            this.match(CypherParser.KEY);
            this.state = 803;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 802;
                this.match(CypherParser.SP);
                }
            }

            this.state = 805;
            this.match(CypherParser.T__1);
            this.state = 807;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 806;
                this.match(CypherParser.SP);
                }
            }

            this.state = 809;
            this.oC_PropertyKeyName();
            this.state = 811;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 810;
                this.match(CypherParser.SP);
                }
            }

            this.state = 813;
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
        let _startState = 60;
        this.enterRecursionRule(localctx, 60, CypherParser.RULE_kU_DataType, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 867;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
            case 1:
                {
                this.state = 816;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 817;
                this.match(CypherParser.UNION);
                this.state = 819;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 818;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 821;
                this.match(CypherParser.T__1);
                this.state = 823;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 822;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 825;
                this.kU_PropertyDefinitions();
                this.state = 827;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 826;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 829;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                {
                this.state = 831;
                this.oC_SymbolicName();
                this.state = 833;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 832;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 835;
                this.match(CypherParser.T__1);
                this.state = 837;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 836;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 839;
                this.kU_PropertyDefinitions();
                this.state = 841;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 840;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 843;
                this.match(CypherParser.T__2);
                }
                break;
            case 4:
                {
                this.state = 845;
                this.oC_SymbolicName();
                this.state = 847;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 846;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 849;
                this.match(CypherParser.T__1);
                this.state = 851;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 850;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 853;
                this.kU_DataType(0);
                this.state = 855;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 854;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 857;
                this.match(CypherParser.T__3);
                this.state = 859;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 858;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 861;
                this.kU_DataType(0);
                this.state = 863;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 862;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 865;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 873;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
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
                    this.state = 869;
                    if (!(this.precpred(this._ctx, 4))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                    }
                    this.state = 870;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 875;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
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
        this.enterRule(localctx, 62, CypherParser.RULE_kU_ListIdentifiers);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 876;
            this.kU_ListIdentifier();
            this.state = 880;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 877;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 882;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
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
        this.enterRule(localctx, 64, CypherParser.RULE_kU_ListIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 883;
            this.match(CypherParser.T__6);
            this.state = 885;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===132) {
                {
                this.state = 884;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 887;
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
        this.enterRule(localctx, 66, CypherParser.RULE_oC_AnyCypherOption);
        try {
            this.state = 891;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 889;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 890;
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
        this.enterRule(localctx, 68, CypherParser.RULE_oC_Explain);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 893;
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
        this.enterRule(localctx, 70, CypherParser.RULE_oC_Profile);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 895;
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
        this.enterRule(localctx, 72, CypherParser.RULE_kU_Transaction);
        try {
            this.state = 911;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 897;
                this.match(CypherParser.BEGIN);
                this.state = 898;
                this.match(CypherParser.SP);
                this.state = 899;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 900;
                this.match(CypherParser.BEGIN);
                this.state = 901;
                this.match(CypherParser.SP);
                this.state = 902;
                this.match(CypherParser.TRANSACTION);
                this.state = 903;
                this.match(CypherParser.SP);
                this.state = 904;
                this.match(CypherParser.READ);
                this.state = 905;
                this.match(CypherParser.SP);
                this.state = 906;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 907;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 908;
                this.match(CypherParser.COMMIT_SKIP_CHECKPOINT);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 909;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 910;
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
        this.enterRule(localctx, 74, CypherParser.RULE_kU_Extension);
        try {
            this.state = 915;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 913;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 914;
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
        this.enterRule(localctx, 76, CypherParser.RULE_kU_LoadExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 917;
            this.match(CypherParser.LOAD);
            this.state = 918;
            this.match(CypherParser.SP);
            this.state = 919;
            this.match(CypherParser.EXTENSION);
            this.state = 920;
            this.match(CypherParser.SP);
            this.state = 923;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 921;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.COMMENT:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 922;
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
        this.enterRule(localctx, 78, CypherParser.RULE_kU_InstallExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 925;
            this.match(CypherParser.INSTALL);
            this.state = 926;
            this.match(CypherParser.SP);
            this.state = 927;
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
        this.enterRule(localctx, 80, CypherParser.RULE_oC_Query);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 929;
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
        this.enterRule(localctx, 82, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 952;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 931;
                this.oC_SingleQuery();
                this.state = 938;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 113, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 933;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 932;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 935;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 940;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 113, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 945;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 941;
                        this.oC_Return();
                        this.state = 943;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 942;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 947;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 115, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 949;
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
        this.enterRule(localctx, 84, CypherParser.RULE_oC_Union);
        let _la: number;
        try {
            this.state = 966;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 954;
                this.match(CypherParser.UNION);
                this.state = 955;
                this.match(CypherParser.SP);
                this.state = 956;
                this.match(CypherParser.ALL);
                this.state = 958;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 957;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 960;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 961;
                this.match(CypherParser.UNION);
                this.state = 963;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 962;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 965;
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
        this.enterRule(localctx, 86, CypherParser.RULE_oC_SingleQuery);
        try {
            this.state = 970;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 968;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 969;
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
        this.enterRule(localctx, 88, CypherParser.RULE_oC_SinglePartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1017;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 978;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===47 || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 29) !== 0)) {
                    {
                    {
                    this.state = 972;
                    this.oC_ReadingClause();
                    this.state = 974;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 973;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 980;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 981;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 988;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===47 || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 29) !== 0)) {
                    {
                    {
                    this.state = 982;
                    this.oC_ReadingClause();
                    this.state = 984;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 983;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 990;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 991;
                this.oC_UpdatingClause();
                this.state = 998;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 993;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 992;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 995;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1000;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
                }
                this.state = 1005;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
                case 1:
                    {
                    this.state = 1002;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1001;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1004;
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
                this.state = 1011;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 1007;
                    this.oC_ReadingClause();
                    this.state = 1009;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
                    case 1:
                        {
                        this.state = 1008;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    }
                    }
                    this.state = 1013;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===47 || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 29) !== 0));
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
        this.enterRule(localctx, 90, CypherParser.RULE_oC_MultiPartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1023;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1019;
                    this.kU_QueryPart();
                    this.state = 1021;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1020;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1025;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1027;
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
        this.enterRule(localctx, 92, CypherParser.RULE_kU_QueryPart);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1035;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===47 || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 29) !== 0)) {
                {
                {
                this.state = 1029;
                this.oC_ReadingClause();
                this.state = 1031;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1030;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1037;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1044;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 59) !== 0)) {
                {
                {
                this.state = 1038;
                this.oC_UpdatingClause();
                this.state = 1040;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1039;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1046;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1047;
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
        this.enterRule(localctx, 94, CypherParser.RULE_oC_UpdatingClause);
        try {
            this.state = 1053;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1049;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1050;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1051;
                this.oC_Set();
                }
                break;
            case CypherParser.DETACH:
            case CypherParser.DELETE:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1052;
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
        this.enterRule(localctx, 96, CypherParser.RULE_oC_ReadingClause);
        try {
            this.state = 1059;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.OPTIONAL:
            case CypherParser.MATCH:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1055;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1056;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1057;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1058;
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
        this.enterRule(localctx, 98, CypherParser.RULE_kU_LoadFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1061;
            this.match(CypherParser.LOAD);
            this.state = 1079;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
            case 1:
                {
                this.state = 1062;
                this.match(CypherParser.SP);
                this.state = 1063;
                this.match(CypherParser.WITH);
                this.state = 1064;
                this.match(CypherParser.SP);
                this.state = 1065;
                this.match(CypherParser.HEADERS);
                this.state = 1067;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1066;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1069;
                this.match(CypherParser.T__1);
                this.state = 1071;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1070;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1073;
                this.kU_PropertyDefinitions();
                this.state = 1075;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1074;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1077;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1081;
            this.match(CypherParser.SP);
            this.state = 1082;
            this.match(CypherParser.FROM);
            this.state = 1083;
            this.match(CypherParser.SP);
            this.state = 1084;
            this.kU_FilePaths();
            this.state = 1098;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
            case 1:
                {
                this.state = 1086;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1085;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1088;
                this.match(CypherParser.T__1);
                this.state = 1090;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1089;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1092;
                this.kU_ParsingOptions();
                this.state = 1094;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1093;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1096;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1104;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
            case 1:
                {
                this.state = 1101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1100;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1103;
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
        this.enterRule(localctx, 100, CypherParser.RULE_kU_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1106;
            this.match(CypherParser.CALL);
            this.state = 1107;
            this.match(CypherParser.SP);
            this.state = 1108;
            this.oC_FunctionInvocation();
            this.state = 1113;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 151, this._ctx) ) {
            case 1:
                {
                this.state = 1110;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1109;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1112;
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
        this.enterRule(localctx, 102, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1117;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===85) {
                {
                this.state = 1115;
                this.match(CypherParser.OPTIONAL);
                this.state = 1116;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1119;
            this.match(CypherParser.MATCH);
            this.state = 1121;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1120;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1123;
            this.oC_Pattern();
            this.state = 1128;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
            case 1:
                {
                this.state = 1125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1124;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1127;
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
        this.enterRule(localctx, 104, CypherParser.RULE_oC_Unwind);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1130;
            this.match(CypherParser.UNWIND);
            this.state = 1132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1131;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1134;
            this.oC_Expression();
            this.state = 1135;
            this.match(CypherParser.SP);
            this.state = 1136;
            this.match(CypherParser.AS);
            this.state = 1137;
            this.match(CypherParser.SP);
            this.state = 1138;
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
        this.enterRule(localctx, 106, CypherParser.RULE_oC_Create);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1140;
            this.match(CypherParser.CREATE);
            this.state = 1142;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1141;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1144;
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
        this.enterRule(localctx, 108, CypherParser.RULE_oC_Merge);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1146;
            this.match(CypherParser.MERGE);
            this.state = 1148;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1147;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1150;
            this.oC_Pattern();
            this.state = 1155;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 159, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1151;
                    this.match(CypherParser.SP);
                    this.state = 1152;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1157;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 159, this._ctx);
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
        this.enterRule(localctx, 110, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1168;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1158;
                this.match(CypherParser.ON);
                this.state = 1159;
                this.match(CypherParser.SP);
                this.state = 1160;
                this.match(CypherParser.MATCH);
                this.state = 1161;
                this.match(CypherParser.SP);
                this.state = 1162;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1163;
                this.match(CypherParser.ON);
                this.state = 1164;
                this.match(CypherParser.SP);
                this.state = 1165;
                this.match(CypherParser.CREATE);
                this.state = 1166;
                this.match(CypherParser.SP);
                this.state = 1167;
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
        this.enterRule(localctx, 112, CypherParser.RULE_oC_Set);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1170;
            this.match(CypherParser.SET);
            this.state = 1172;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1171;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1174;
            this.oC_SetItem();
            this.state = 1185;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1176;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1175;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1178;
                    this.match(CypherParser.T__3);
                    this.state = 1180;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1179;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1182;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1187;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
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
        this.enterRule(localctx, 114, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1188;
            this.oC_PropertyExpression();
            this.state = 1190;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1189;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1192;
            this.match(CypherParser.T__4);
            this.state = 1194;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1193;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1196;
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
        this.enterRule(localctx, 116, CypherParser.RULE_oC_Delete);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1200;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===92) {
                {
                this.state = 1198;
                this.match(CypherParser.DETACH);
                this.state = 1199;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1202;
            this.match(CypherParser.DELETE);
            this.state = 1204;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1203;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1206;
            this.oC_Expression();
            this.state = 1217;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1208;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1207;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1210;
                    this.match(CypherParser.T__3);
                    this.state = 1212;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1211;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1214;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1219;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
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
        this.enterRule(localctx, 118, CypherParser.RULE_oC_With);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1220;
            this.match(CypherParser.WITH);
            this.state = 1221;
            this.oC_ProjectionBody();
            this.state = 1226;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
            case 1:
                {
                this.state = 1223;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1222;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1225;
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
        this.enterRule(localctx, 120, CypherParser.RULE_oC_Return);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1228;
            this.match(CypherParser.RETURN);
            this.state = 1229;
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
        this.enterRule(localctx, 122, CypherParser.RULE_oC_ProjectionBody);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1235;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
            case 1:
                {
                this.state = 1232;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1231;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1234;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1237;
            this.match(CypherParser.SP);
            this.state = 1238;
            this.oC_ProjectionItems();
            this.state = 1241;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
            case 1:
                {
                this.state = 1239;
                this.match(CypherParser.SP);
                this.state = 1240;
                this.oC_Order();
                }
                break;
            }
            this.state = 1245;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
            case 1:
                {
                this.state = 1243;
                this.match(CypherParser.SP);
                this.state = 1244;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1249;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 178, this._ctx) ) {
            case 1:
                {
                this.state = 1247;
                this.match(CypherParser.SP);
                this.state = 1248;
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
        this.enterRule(localctx, 124, CypherParser.RULE_oC_ProjectionItems);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1279;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1251;
                this.match(CypherParser.STAR);
                this.state = 1262;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 181, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1253;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 1252;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1255;
                        this.match(CypherParser.T__3);
                        this.state = 1257;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 1256;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1259;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1264;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 181, this._ctx);
                }
                }
                }
                break;
            case CypherParser.T__1:
            case CypherParser.T__6:
            case CypherParser.T__8:
            case CypherParser.T__26:
            case CypherParser.COMMENT:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.NOT:
            case CypherParser.MINUS:
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
                this.state = 1265;
                this.oC_ProjectionItem();
                this.state = 1276;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1267;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 1266;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1269;
                        this.match(CypherParser.T__3);
                        this.state = 1271;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 1270;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1273;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1278;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
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
        this.enterRule(localctx, 126, CypherParser.RULE_oC_ProjectionItem);
        try {
            this.state = 1288;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1281;
                this.oC_Expression();
                this.state = 1282;
                this.match(CypherParser.SP);
                this.state = 1283;
                this.match(CypherParser.AS);
                this.state = 1284;
                this.match(CypherParser.SP);
                this.state = 1285;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1287;
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
        this.enterRule(localctx, 128, CypherParser.RULE_oC_Order);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1290;
            this.match(CypherParser.ORDER);
            this.state = 1291;
            this.match(CypherParser.SP);
            this.state = 1292;
            this.match(CypherParser.BY);
            this.state = 1293;
            this.match(CypherParser.SP);
            this.state = 1294;
            this.oC_SortItem();
            this.state = 1302;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 1295;
                this.match(CypherParser.T__3);
                this.state = 1297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1296;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1299;
                this.oC_SortItem();
                }
                }
                this.state = 1304;
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
        this.enterRule(localctx, 130, CypherParser.RULE_oC_Skip);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1305;
            this.match(CypherParser.L_SKIP);
            this.state = 1306;
            this.match(CypherParser.SP);
            this.state = 1307;
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
        this.enterRule(localctx, 132, CypherParser.RULE_oC_Limit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1309;
            this.match(CypherParser.LIMIT);
            this.state = 1310;
            this.match(CypherParser.SP);
            this.state = 1311;
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
        this.enterRule(localctx, 134, CypherParser.RULE_oC_SortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1313;
            this.oC_Expression();
            this.state = 1318;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
            case 1:
                {
                this.state = 1315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1314;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1317;
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
        this.enterRule(localctx, 136, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1320;
            this.match(CypherParser.WHERE);
            this.state = 1321;
            this.match(CypherParser.SP);
            this.state = 1322;
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
        this.enterRule(localctx, 138, CypherParser.RULE_oC_Pattern);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1324;
            this.oC_PatternPart();
            this.state = 1335;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 193, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1326;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1325;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1328;
                    this.match(CypherParser.T__3);
                    this.state = 1330;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1329;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1332;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1337;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 193, this._ctx);
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
        this.enterRule(localctx, 140, CypherParser.RULE_oC_PatternPart);
        let _la: number;
        try {
            this.state = 1349;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1338;
                this.oC_Variable();
                this.state = 1340;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1339;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1342;
                this.match(CypherParser.T__4);
                this.state = 1344;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1343;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1346;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1348;
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
        this.enterRule(localctx, 142, CypherParser.RULE_oC_AnonymousPatternPart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1351;
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
        this.enterRule(localctx, 144, CypherParser.RULE_oC_PatternElement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1367;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1353;
                this.oC_NodePattern();
                this.state = 1360;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 198, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1355;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 1354;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1357;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1362;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 198, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1363;
                this.match(CypherParser.T__1);
                this.state = 1364;
                this.oC_PatternElement();
                this.state = 1365;
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
        this.enterRule(localctx, 146, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1369;
            this.match(CypherParser.T__1);
            this.state = 1371;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1370;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1377;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1180689) !== 0)) {
                {
                this.state = 1373;
                this.oC_Variable();
                this.state = 1375;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1374;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1383;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===6) {
                {
                this.state = 1379;
                this.oC_NodeLabels();
                this.state = 1381;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1380;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1389;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1385;
                this.kU_Properties();
                this.state = 1387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1386;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1391;
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
        this.enterRule(localctx, 148, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1393;
            this.oC_RelationshipPattern();
            this.state = 1395;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1394;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1397;
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
        this.enterRule(localctx, 150, CypherParser.RULE_oC_RelationshipPattern);
        let _la: number;
        try {
            this.state = 1443;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1399;
                this.oC_LeftArrowHead();
                this.state = 1401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1400;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1403;
                this.oC_Dash();
                this.state = 1405;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
                case 1:
                    {
                    this.state = 1404;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1408;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1407;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1410;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1413;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1415;
                this.oC_Dash();
                this.state = 1417;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 212, this._ctx) ) {
                case 1:
                    {
                    this.state = 1416;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1419;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1422;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1425;
                this.oC_Dash();
                this.state = 1427;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1426;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1429;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1431;
                this.oC_Dash();
                this.state = 1433;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
                case 1:
                    {
                    this.state = 1432;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1436;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1435;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1438;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1441;
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
        this.enterRule(localctx, 152, CypherParser.RULE_oC_RelationshipDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1445;
            this.match(CypherParser.T__6);
            this.state = 1447;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1446;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1453;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1180689) !== 0)) {
                {
                this.state = 1449;
                this.oC_Variable();
                this.state = 1451;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1450;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1459;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===6) {
                {
                this.state = 1455;
                this.oC_RelationshipTypes();
                this.state = 1457;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1456;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1465;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===97) {
                {
                this.state = 1461;
                this.oC_RangeLiteral();
                this.state = 1463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1462;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1471;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1467;
                this.kU_Properties();
                this.state = 1469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1468;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1473;
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
        this.enterRule(localctx, 154, CypherParser.RULE_kU_Properties);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1475;
            this.match(CypherParser.T__8);
            this.state = 1477;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1476;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1512;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1180689) !== 0)) {
                {
                this.state = 1479;
                this.oC_PropertyKeyName();
                this.state = 1481;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1480;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1483;
                this.match(CypherParser.T__5);
                this.state = 1485;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1484;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1487;
                this.oC_Expression();
                this.state = 1489;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1488;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1509;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 1491;
                    this.match(CypherParser.T__3);
                    this.state = 1493;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1492;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1495;
                    this.oC_PropertyKeyName();
                    this.state = 1497;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1496;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1499;
                    this.match(CypherParser.T__5);
                    this.state = 1501;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1500;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1503;
                    this.oC_Expression();
                    this.state = 1505;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1504;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1511;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1514;
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
        this.enterRule(localctx, 156, CypherParser.RULE_oC_RelationshipTypes);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1516;
            this.match(CypherParser.T__5);
            this.state = 1518;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1517;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1520;
            this.oC_RelTypeName();
            this.state = 1534;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 243, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1522;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1521;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1524;
                    this.match(CypherParser.T__10);
                    this.state = 1526;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===6) {
                        {
                        this.state = 1525;
                        this.match(CypherParser.T__5);
                        }
                    }

                    this.state = 1529;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1528;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1531;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1536;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 243, this._ctx);
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
        this.enterRule(localctx, 158, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1537;
            this.oC_NodeLabel();
            this.state = 1544;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 245, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1539;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1538;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1541;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1546;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 245, this._ctx);
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
        this.enterRule(localctx, 160, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1547;
            this.match(CypherParser.T__5);
            this.state = 1549;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1548;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1551;
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
        this.enterRule(localctx, 162, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1553;
            this.match(CypherParser.STAR);
            this.state = 1555;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
            case 1:
                {
                this.state = 1554;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1561;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.SHORTEST:
                {
                this.state = 1557;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.ALL:
                {
                this.state = 1558;
                this.match(CypherParser.ALL);
                this.state = 1559;
                this.match(CypherParser.SP);
                this.state = 1560;
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
            this.state = 1564;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 249, this._ctx) ) {
            case 1:
                {
                this.state = 1563;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1580;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
            case 1:
                {
                this.state = 1567;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===132) {
                    {
                    this.state = 1566;
                    this.oC_LowerBound();
                    }
                }

                this.state = 1570;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1569;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1572;
                this.match(CypherParser.T__11);
                this.state = 1574;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
                case 1:
                    {
                    this.state = 1573;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1577;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===132) {
                    {
                    this.state = 1576;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 1579;
                this.oC_IntegerLiteral();
                }
                break;
            }
            this.state = 1586;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
            case 1:
                {
                this.state = 1583;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1582;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1585;
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
        this.enterRule(localctx, 164, CypherParser.RULE_kU_RecursiveRelationshipComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1588;
            this.match(CypherParser.T__1);
            this.state = 1590;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1589;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1592;
            this.oC_Variable();
            this.state = 1594;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1593;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1596;
            this.match(CypherParser.T__3);
            this.state = 1598;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1597;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1600;
            this.oC_Variable();
            this.state = 1609;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 262, this._ctx) ) {
            case 1:
                {
                this.state = 1602;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1601;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1604;
                this.match(CypherParser.T__10);
                this.state = 1606;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1605;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1608;
                this.oC_Where();
                }
                break;
            }
            this.state = 1630;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===144) {
                {
                this.state = 1612;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1611;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1614;
                this.match(CypherParser.T__10);
                this.state = 1616;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1615;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1618;
                this.kU_IntermediateRelProjectionItems();
                this.state = 1620;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1619;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1622;
                this.match(CypherParser.T__3);
                this.state = 1624;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1623;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1626;
                this.kU_IntermediateNodeProjectionItems();
                this.state = 1628;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1627;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1632;
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
        this.enterRule(localctx, 166, CypherParser.RULE_kU_IntermediateNodeProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1634;
            this.match(CypherParser.T__8);
            this.state = 1636;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 269, this._ctx) ) {
            case 1:
                {
                this.state = 1635;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1639;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 1602387969) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 9741) !== 0)) {
                {
                this.state = 1638;
                this.oC_ProjectionItems();
                }
            }

            this.state = 1642;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1641;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1644;
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
        this.enterRule(localctx, 168, CypherParser.RULE_kU_IntermediateRelProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1646;
            this.match(CypherParser.T__8);
            this.state = 1648;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 272, this._ctx) ) {
            case 1:
                {
                this.state = 1647;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1651;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 1602387969) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 9741) !== 0)) {
                {
                this.state = 1650;
                this.oC_ProjectionItems();
                }
            }

            this.state = 1654;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1653;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1656;
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
        this.enterRule(localctx, 170, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1658;
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
        this.enterRule(localctx, 172, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1660;
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
        this.enterRule(localctx, 174, CypherParser.RULE_oC_LabelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1662;
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
        this.enterRule(localctx, 176, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1664;
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
        this.enterRule(localctx, 178, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1666;
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
        this.enterRule(localctx, 180, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1668;
            this.oC_XorExpression();
            this.state = 1675;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 275, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1669;
                    this.match(CypherParser.SP);
                    this.state = 1670;
                    this.match(CypherParser.OR);
                    this.state = 1671;
                    this.match(CypherParser.SP);
                    this.state = 1672;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 1677;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 275, this._ctx);
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
        this.enterRule(localctx, 182, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1678;
            this.oC_AndExpression();
            this.state = 1685;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 276, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1679;
                    this.match(CypherParser.SP);
                    this.state = 1680;
                    this.match(CypherParser.XOR);
                    this.state = 1681;
                    this.match(CypherParser.SP);
                    this.state = 1682;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 1687;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 276, this._ctx);
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
        this.enterRule(localctx, 184, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1688;
            this.oC_NotExpression();
            this.state = 1695;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 277, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1689;
                    this.match(CypherParser.SP);
                    this.state = 1690;
                    this.match(CypherParser.AND);
                    this.state = 1691;
                    this.match(CypherParser.SP);
                    this.state = 1692;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 1697;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 277, this._ctx);
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
        this.enterRule(localctx, 186, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1704;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===112) {
                {
                {
                this.state = 1698;
                this.match(CypherParser.NOT);
                this.state = 1700;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1699;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1706;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1707;
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
        this.enterRule(localctx, 188, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1757;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 290, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1709;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1719;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 282, this._ctx) ) {
                case 1:
                    {
                    this.state = 1711;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1710;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1713;
                    this.kU_ComparisonOperator();
                    this.state = 1715;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1714;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1717;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1721;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 1723;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1722;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1725;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 1727;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1726;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1729;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1733;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1735;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1734;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1737;
                this.kU_ComparisonOperator();
                this.state = 1739;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1738;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1741;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1751;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1743;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 1742;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1745;
                        this.kU_ComparisonOperator();
                        this.state = 1747;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 1746;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1749;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1753;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 289, this._ctx);
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
        this.enterRule(localctx, 190, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1759;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 253984) !== 0))) {
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
        this.enterRule(localctx, 192, CypherParser.RULE_kU_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1761;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 1772;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 293, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1763;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1762;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1765;
                    this.match(CypherParser.T__10);
                    this.state = 1767;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1766;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1769;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 1774;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 293, this._ctx);
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
        this.enterRule(localctx, 194, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1775;
            this.kU_BitShiftOperatorExpression();
            this.state = 1786;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 296, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1777;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1776;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1779;
                    this.match(CypherParser.T__17);
                    this.state = 1781;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1780;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1783;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 1788;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 296, this._ctx);
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
        this.enterRule(localctx, 196, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1789;
            this.oC_AddOrSubtractExpression();
            this.state = 1801;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 299, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1791;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1790;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1793;
                    this.kU_BitShiftOperator();
                    this.state = 1795;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1794;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1797;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 1803;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 299, this._ctx);
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
        this.enterRule(localctx, 198, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1804;
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
        this.enterRule(localctx, 200, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1806;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 1818;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 302, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1808;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1807;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1810;
                    this.kU_AddOrSubtractOperator();
                    this.state = 1812;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1811;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1814;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 1820;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 302, this._ctx);
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
        this.enterRule(localctx, 202, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1821;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===114)) {
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
        this.enterRule(localctx, 204, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1823;
            this.oC_PowerOfExpression();
            this.state = 1835;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 305, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1825;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1824;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1827;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 1829;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1828;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1831;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 1837;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 305, this._ctx);
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
        this.enterRule(localctx, 206, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1838;
            _la = this._input.LA(1);
            if(!(_la===22 || _la===23 || _la===97)) {
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
        this.enterRule(localctx, 208, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1840;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 1851;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 308, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1842;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1841;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1844;
                    this.match(CypherParser.T__23);
                    this.state = 1846;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1845;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1848;
                    this.oC_UnaryAddSubtractOrFactorialExpression();
                    }
                    }
                }
                this.state = 1853;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 308, this._ctx);
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
        this.enterRule(localctx, 210, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1860;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===114) {
                {
                {
                this.state = 1854;
                this.match(CypherParser.MINUS);
                this.state = 1856;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1855;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1862;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1863;
            this.oC_StringListNullOperatorExpression();
            this.state = 1868;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 312, this._ctx) ) {
            case 1:
                {
                this.state = 1865;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1864;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1867;
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
        this.enterRule(localctx, 212, CypherParser.RULE_oC_StringListNullOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1870;
            this.oC_PropertyOrLabelsExpression();
            this.state = 1878;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 314, this._ctx) ) {
            case 1:
                {
                this.state = 1871;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 1873;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 1872;
                    this.oC_ListOperatorExpression();
                    }
                    }
                    this.state = 1875;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===7);
                }
                break;
            case 3:
                {
                this.state = 1877;
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
        this.enterRule(localctx, 214, CypherParser.RULE_oC_ListOperatorExpression);
        try {
            this.state = 1882;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 315, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1880;
                this.kU_ListExtractOperatorExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1881;
                this.kU_ListSliceOperatorExpression();
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
    public kU_ListExtractOperatorExpression(): KU_ListExtractOperatorExpressionContext {
        let localctx: KU_ListExtractOperatorExpressionContext = new KU_ListExtractOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 216, CypherParser.RULE_kU_ListExtractOperatorExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1884;
            this.match(CypherParser.T__6);
            this.state = 1885;
            this.oC_Expression();
            this.state = 1886;
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
    public kU_ListSliceOperatorExpression(): KU_ListSliceOperatorExpressionContext {
        let localctx: KU_ListSliceOperatorExpressionContext = new KU_ListSliceOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 218, CypherParser.RULE_kU_ListSliceOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1888;
            this.match(CypherParser.T__6);
            this.state = 1890;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2553593605) !== 0)) {
                {
                this.state = 1889;
                this.oC_Expression();
                }
            }

            this.state = 1892;
            this.match(CypherParser.T__5);
            this.state = 1894;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2553593605) !== 0)) {
                {
                this.state = 1893;
                this.oC_Expression();
                }
            }

            this.state = 1896;
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
    public oC_StringOperatorExpression(): OC_StringOperatorExpressionContext {
        let localctx: OC_StringOperatorExpressionContext = new OC_StringOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 220, CypherParser.RULE_oC_StringOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1909;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 318, this._ctx) ) {
            case 1:
                {
                this.state = 1898;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 1899;
                this.match(CypherParser.SP);
                this.state = 1900;
                this.match(CypherParser.STARTS);
                this.state = 1901;
                this.match(CypherParser.SP);
                this.state = 1902;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 1903;
                this.match(CypherParser.SP);
                this.state = 1904;
                this.match(CypherParser.ENDS);
                this.state = 1905;
                this.match(CypherParser.SP);
                this.state = 1906;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 1907;
                this.match(CypherParser.SP);
                this.state = 1908;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 1912;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1911;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1914;
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
            this.state = 1917;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1916;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1919;
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
        this.enterRule(localctx, 224, CypherParser.RULE_oC_NullOperatorExpression);
        try {
            this.state = 1931;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 321, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1921;
                this.match(CypherParser.SP);
                this.state = 1922;
                this.match(CypherParser.IS);
                this.state = 1923;
                this.match(CypherParser.SP);
                this.state = 1924;
                this.match(CypherParser.NULL_);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1925;
                this.match(CypherParser.SP);
                this.state = 1926;
                this.match(CypherParser.IS);
                this.state = 1927;
                this.match(CypherParser.SP);
                this.state = 1928;
                this.match(CypherParser.NOT);
                this.state = 1929;
                this.match(CypherParser.SP);
                this.state = 1930;
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
            this.state = 1933;
            this.oC_Atom();
            this.state = 1940;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 323, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1935;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1934;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1937;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 1942;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 323, this._ctx);
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
            this.state = 1952;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 324, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1943;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1944;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1945;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1946;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1947;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1948;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 1949;
                this.oC_ExistSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 1950;
                this.kU_CountSubquery();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 1951;
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
            this.state = 1960;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1954;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1955;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.TRUE:
            case CypherParser.FALSE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1956;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL_:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1957;
                this.match(CypherParser.NULL_);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1958;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1959;
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
            this.state = 1962;
            _la = this._input.LA(1);
            if(!(_la===121 || _la===122)) {
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
            this.state = 1964;
            this.match(CypherParser.T__6);
            this.state = 1966;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1965;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1981;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2553593605) !== 0)) {
                {
                this.state = 1968;
                this.oC_Expression();
                this.state = 1970;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 1969;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1978;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 1972;
                    this.kU_ListEntry();
                    this.state = 1974;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 1973;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1980;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1983;
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
        this.enterRule(localctx, 236, CypherParser.RULE_kU_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1985;
            this.match(CypherParser.T__3);
            this.state = 1987;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 331, this._ctx) ) {
            case 1:
                {
                this.state = 1986;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1990;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2553593605) !== 0)) {
                {
                this.state = 1989;
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
            this.state = 1992;
            this.match(CypherParser.T__8);
            this.state = 1994;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1993;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1996;
            this.kU_StructField();
            this.state = 1998;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 1997;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2010;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 2000;
                this.match(CypherParser.T__3);
                this.state = 2002;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2001;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2004;
                this.kU_StructField();
                this.state = 2006;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2005;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2012;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2013;
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
        this.enterRule(localctx, 240, CypherParser.RULE_kU_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2017;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2015;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2016;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2020;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2019;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2022;
            this.match(CypherParser.T__5);
            this.state = 2024;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2023;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2026;
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
            this.state = 2028;
            this.match(CypherParser.T__1);
            this.state = 2030;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2029;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2032;
            this.oC_Expression();
            this.state = 2034;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2033;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2036;
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
            this.state = 2086;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 355, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2038;
                this.match(CypherParser.COUNT);
                this.state = 2040;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2039;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2042;
                this.match(CypherParser.T__1);
                this.state = 2044;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2043;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2046;
                this.match(CypherParser.STAR);
                this.state = 2048;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2047;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2050;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2051;
                this.oC_FunctionName();
                this.state = 2053;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2052;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2055;
                this.match(CypherParser.T__1);
                this.state = 2057;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2056;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2063;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===96) {
                    {
                    this.state = 2059;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2061;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 2060;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2082;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2553593605) !== 0)) {
                    {
                    this.state = 2065;
                    this.kU_FunctionParameter();
                    this.state = 2067;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 2066;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2079;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===4) {
                        {
                        {
                        this.state = 2069;
                        this.match(CypherParser.T__3);
                        this.state = 2071;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 2070;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2073;
                        this.kU_FunctionParameter();
                        this.state = 2075;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 2074;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2081;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2084;
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
            this.state = 2088;
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
            this.state = 2099;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 358, this._ctx) ) {
            case 1:
                {
                this.state = 2090;
                this.oC_SymbolicName();
                this.state = 2092;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2091;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2094;
                this.match(CypherParser.T__5);
                this.state = 2095;
                this.match(CypherParser.T__4);
                this.state = 2097;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2096;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 2101;
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
            this.state = 2103;
            this.oC_NodePattern();
            this.state = 2108;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2105;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===144) {
                        {
                        this.state = 2104;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2107;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2110;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 360, this._ctx);
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
            this.state = 2112;
            this.match(CypherParser.EXISTS);
            this.state = 2114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2113;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2116;
            this.match(CypherParser.T__8);
            this.state = 2118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2117;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2120;
            this.match(CypherParser.MATCH);
            this.state = 2122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2121;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2124;
            this.oC_Pattern();
            this.state = 2129;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 365, this._ctx) ) {
            case 1:
                {
                this.state = 2126;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2125;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2128;
                this.oC_Where();
                }
                break;
            }
            this.state = 2132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2131;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2134;
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
        this.enterRule(localctx, 254, CypherParser.RULE_kU_CountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2136;
            this.match(CypherParser.COUNT);
            this.state = 2138;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2137;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2140;
            this.match(CypherParser.T__8);
            this.state = 2142;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2141;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2144;
            this.match(CypherParser.MATCH);
            this.state = 2146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2145;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2148;
            this.oC_Pattern();
            this.state = 2153;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 371, this._ctx) ) {
            case 1:
                {
                this.state = 2150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2149;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2152;
                this.oC_Where();
                }
                break;
            }
            this.state = 2156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2155;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2158;
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
        this.enterRule(localctx, 256, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2160;
            this.match(CypherParser.T__25);
            this.state = 2162;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2161;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2166;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2164;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2165;
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
            this.state = 2190;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2168;
                this.match(CypherParser.CASE);
                this.state = 2173;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2170;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===144) {
                            {
                            this.state = 2169;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2172;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2175;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 376, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2177;
                this.match(CypherParser.CASE);
                this.state = 2179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2178;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2181;
                this.oC_Expression();
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
                        if (_la===144) {
                            {
                            this.state = 2182;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2185;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2188;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 379, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2200;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 383, this._ctx) ) {
            case 1:
                {
                this.state = 2193;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2192;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2195;
                this.match(CypherParser.ELSE);
                this.state = 2197;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===144) {
                    {
                    this.state = 2196;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2199;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2203;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2202;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2205;
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
            this.state = 2207;
            this.match(CypherParser.WHEN);
            this.state = 2209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2208;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2211;
            this.oC_Expression();
            this.state = 2213;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2212;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2215;
            this.match(CypherParser.THEN);
            this.state = 2217;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2216;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2219;
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
            this.state = 2221;
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
            this.state = 2225;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2223;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2224;
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
            this.state = 2227;
            this.match(CypherParser.T__26);
            this.state = 2230;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.COUNT:
            case CypherParser.END:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2228;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2229;
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
            this.state = 2232;
            this.oC_Atom();
            this.state = 2234;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===144) {
                {
                this.state = 2233;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2236;
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
            this.state = 2238;
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
            this.state = 2240;
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
            this.state = 2242;
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
            this.state = 2244;
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
            this.state = 2251;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2246;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2247;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2249;
                this.match(CypherParser.HexLetter);
                }
                break;
            case CypherParser.COMMENT:
            case CypherParser.NODE:
            case CypherParser.REL:
            case CypherParser.BEGIN:
            case CypherParser.COUNT:
            case CypherParser.END:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2250;
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
            this.state = 2253;
            _la = this._input.LA(1);
            if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4456513) !== 0) || _la===123 || _la===127)) {
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
            this.state = 2255;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4026548224) !== 0))) {
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
            this.state = 2257;
            _la = this._input.LA(1);
            if(!(((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 983041) !== 0))) {
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
            this.state = 2259;
            _la = this._input.LA(1);
            if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 2047) !== 0) || _la===114)) {
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
        case 30:
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
        4,1,147,2262,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        7,142,2,143,7,143,1,0,3,0,290,8,0,1,0,3,0,293,8,0,1,0,3,0,296,8,
        0,1,0,1,0,3,0,300,8,0,1,0,3,0,303,8,0,1,0,3,0,306,8,0,1,0,1,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,320,8,1,1,2,1,2,1,2,1,
        2,3,2,326,8,2,1,2,1,2,3,2,330,8,2,1,2,1,2,3,2,334,8,2,1,2,1,2,3,
        2,338,8,2,1,2,3,2,341,8,2,1,2,1,2,1,2,1,2,3,2,347,8,2,1,2,1,2,3,
        2,351,8,2,1,2,1,2,3,2,355,8,2,1,2,1,2,3,2,359,8,2,1,3,1,3,3,3,363,
        8,3,1,3,1,3,3,3,367,8,3,1,3,5,3,370,8,3,10,3,12,3,373,9,3,1,4,1,
        4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,383,8,4,1,4,1,4,3,4,387,8,4,1,4,1,
        4,3,4,391,8,4,1,4,5,4,394,8,4,10,4,12,4,397,9,4,1,4,1,4,1,4,1,4,
        1,4,1,4,1,5,1,5,1,5,1,5,3,5,409,8,5,1,5,1,5,3,5,413,8,5,1,5,1,5,
        1,5,1,5,1,5,1,5,3,5,421,8,5,1,5,1,5,3,5,425,8,5,1,5,1,5,3,5,429,
        8,5,1,5,1,5,3,5,433,8,5,1,6,1,6,1,6,1,6,3,6,439,8,6,1,6,1,6,3,6,
        443,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
        1,8,1,8,1,8,1,8,1,8,1,8,3,8,465,8,8,1,8,1,8,3,8,469,8,8,1,8,3,8,
        472,8,8,1,8,3,8,475,8,8,1,8,3,8,478,8,8,1,8,3,8,481,8,8,1,8,1,8,
        3,8,485,8,8,1,8,5,8,488,8,8,10,8,12,8,491,9,8,1,8,3,8,494,8,8,1,
        8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,3,9,504,8,9,1,9,1,9,3,9,508,8,9,1,
        9,5,9,511,8,9,10,9,12,9,514,9,9,1,10,1,10,3,10,518,8,10,1,10,1,10,
        1,10,3,10,523,8,10,1,10,1,10,1,11,1,11,3,11,529,8,11,1,11,1,11,3,
        11,533,8,11,1,11,1,11,3,11,537,8,11,1,11,5,11,540,8,11,10,11,12,
        11,543,9,11,1,11,1,11,1,11,1,11,3,11,549,8,11,1,11,1,11,3,11,553,
        8,11,1,11,1,11,3,11,557,8,11,1,11,3,11,560,8,11,1,12,1,12,3,12,564,
        8,12,1,12,1,12,3,12,568,8,12,1,12,5,12,571,8,12,10,12,12,12,574,
        9,12,1,13,1,13,3,13,578,8,13,1,13,1,13,3,13,582,8,13,1,13,1,13,1,
        14,1,14,1,14,1,14,1,14,1,14,3,14,592,8,14,1,15,1,15,1,15,1,15,1,
        15,1,15,1,15,1,15,3,15,602,8,15,1,15,1,15,3,15,606,8,15,1,15,1,15,
        3,15,610,8,15,1,15,1,15,3,15,614,8,15,1,15,1,15,1,15,3,15,619,8,
        15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,631,8,
        16,1,16,1,16,3,16,635,8,16,1,16,1,16,3,16,639,8,16,1,16,1,16,3,16,
        643,8,16,1,16,1,16,3,16,647,8,16,3,16,649,8,16,1,16,1,16,3,16,653,
        8,16,1,16,1,16,3,16,657,8,16,3,16,659,8,16,1,16,1,16,1,17,1,17,1,
        17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,673,8,17,1,17,1,17,3,
        17,677,8,17,1,17,1,17,3,17,681,8,17,1,17,1,17,3,17,685,8,17,1,17,
        4,17,688,8,17,11,17,12,17,689,1,17,3,17,693,8,17,1,17,1,17,3,17,
        697,8,17,1,17,1,17,3,17,701,8,17,3,17,703,8,17,1,17,1,17,3,17,707,
        8,17,1,17,1,17,3,17,711,8,17,3,17,713,8,17,1,17,1,17,1,18,1,18,1,
        18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
        19,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,
        21,1,21,1,22,1,22,1,22,1,22,3,22,751,8,22,1,23,1,23,1,23,1,23,1,
        23,1,23,1,23,1,23,1,23,3,23,762,8,23,1,24,1,24,1,24,1,24,1,25,1,
        25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,
        27,1,27,3,27,784,8,27,1,27,1,27,3,27,788,8,27,1,27,5,27,791,8,27,
        10,27,12,27,794,9,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,3,29,
        804,8,29,1,29,1,29,3,29,808,8,29,1,29,1,29,3,29,812,8,29,1,29,1,
        29,1,30,1,30,1,30,1,30,3,30,820,8,30,1,30,1,30,3,30,824,8,30,1,30,
        1,30,3,30,828,8,30,1,30,1,30,1,30,1,30,3,30,834,8,30,1,30,1,30,3,
        30,838,8,30,1,30,1,30,3,30,842,8,30,1,30,1,30,1,30,1,30,3,30,848,
        8,30,1,30,1,30,3,30,852,8,30,1,30,1,30,3,30,856,8,30,1,30,1,30,3,
        30,860,8,30,1,30,1,30,3,30,864,8,30,1,30,1,30,3,30,868,8,30,1,30,
        1,30,5,30,872,8,30,10,30,12,30,875,9,30,1,31,1,31,5,31,879,8,31,
        10,31,12,31,882,9,31,1,32,1,32,3,32,886,8,32,1,32,1,32,1,33,1,33,
        3,33,892,8,33,1,34,1,34,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,
        1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,912,8,36,1,37,1,37,
        3,37,916,8,37,1,38,1,38,1,38,1,38,1,38,1,38,3,38,924,8,38,1,39,1,
        39,1,39,1,39,1,40,1,40,1,41,1,41,3,41,934,8,41,1,41,5,41,937,8,41,
        10,41,12,41,940,9,41,1,41,1,41,3,41,944,8,41,4,41,946,8,41,11,41,
        12,41,947,1,41,1,41,1,41,3,41,953,8,41,1,42,1,42,1,42,1,42,3,42,
        959,8,42,1,42,1,42,1,42,3,42,964,8,42,1,42,3,42,967,8,42,1,43,1,
        43,3,43,971,8,43,1,44,1,44,3,44,975,8,44,5,44,977,8,44,10,44,12,
        44,980,9,44,1,44,1,44,1,44,3,44,985,8,44,5,44,987,8,44,10,44,12,
        44,990,9,44,1,44,1,44,3,44,994,8,44,1,44,5,44,997,8,44,10,44,12,
        44,1000,9,44,1,44,3,44,1003,8,44,1,44,3,44,1006,8,44,1,44,1,44,3,
        44,1010,8,44,4,44,1012,8,44,11,44,12,44,1013,1,44,1,44,3,44,1018,
        8,44,1,45,1,45,3,45,1022,8,45,4,45,1024,8,45,11,45,12,45,1025,1,
        45,1,45,1,46,1,46,3,46,1032,8,46,5,46,1034,8,46,10,46,12,46,1037,
        9,46,1,46,1,46,3,46,1041,8,46,5,46,1043,8,46,10,46,12,46,1046,9,
        46,1,46,1,46,1,47,1,47,1,47,1,47,3,47,1054,8,47,1,48,1,48,1,48,1,
        48,3,48,1060,8,48,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1068,8,49,1,
        49,1,49,3,49,1072,8,49,1,49,1,49,3,49,1076,8,49,1,49,1,49,3,49,1080,
        8,49,1,49,1,49,1,49,1,49,1,49,3,49,1087,8,49,1,49,1,49,3,49,1091,
        8,49,1,49,1,49,3,49,1095,8,49,1,49,1,49,3,49,1099,8,49,1,49,3,49,
        1102,8,49,1,49,3,49,1105,8,49,1,50,1,50,1,50,1,50,3,50,1111,8,50,
        1,50,3,50,1114,8,50,1,51,1,51,3,51,1118,8,51,1,51,1,51,3,51,1122,
        8,51,1,51,1,51,3,51,1126,8,51,1,51,3,51,1129,8,51,1,52,1,52,3,52,
        1133,8,52,1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,3,53,1143,8,53,
        1,53,1,53,1,54,1,54,3,54,1149,8,54,1,54,1,54,1,54,5,54,1154,8,54,
        10,54,12,54,1157,9,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,
        55,1,55,3,55,1169,8,55,1,56,1,56,3,56,1173,8,56,1,56,1,56,3,56,1177,
        8,56,1,56,1,56,3,56,1181,8,56,1,56,5,56,1184,8,56,10,56,12,56,1187,
        9,56,1,57,1,57,3,57,1191,8,57,1,57,1,57,3,57,1195,8,57,1,57,1,57,
        1,58,1,58,3,58,1201,8,58,1,58,1,58,3,58,1205,8,58,1,58,1,58,3,58,
        1209,8,58,1,58,1,58,3,58,1213,8,58,1,58,5,58,1216,8,58,10,58,12,
        58,1219,9,58,1,59,1,59,1,59,3,59,1224,8,59,1,59,3,59,1227,8,59,1,
        60,1,60,1,60,1,61,3,61,1233,8,61,1,61,3,61,1236,8,61,1,61,1,61,1,
        61,1,61,3,61,1242,8,61,1,61,1,61,3,61,1246,8,61,1,61,1,61,3,61,1250,
        8,61,1,62,1,62,3,62,1254,8,62,1,62,1,62,3,62,1258,8,62,1,62,5,62,
        1261,8,62,10,62,12,62,1264,9,62,1,62,1,62,3,62,1268,8,62,1,62,1,
        62,3,62,1272,8,62,1,62,5,62,1275,8,62,10,62,12,62,1278,9,62,3,62,
        1280,8,62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,3,63,1289,8,63,1,64,
        1,64,1,64,1,64,1,64,1,64,1,64,3,64,1298,8,64,1,64,5,64,1301,8,64,
        10,64,12,64,1304,9,64,1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,66,1,
        67,1,67,3,67,1316,8,67,1,67,3,67,1319,8,67,1,68,1,68,1,68,1,68,1,
        69,1,69,3,69,1327,8,69,1,69,1,69,3,69,1331,8,69,1,69,5,69,1334,8,
        69,10,69,12,69,1337,9,69,1,70,1,70,3,70,1341,8,70,1,70,1,70,3,70,
        1345,8,70,1,70,1,70,1,70,3,70,1350,8,70,1,71,1,71,1,72,1,72,3,72,
        1356,8,72,1,72,5,72,1359,8,72,10,72,12,72,1362,9,72,1,72,1,72,1,
        72,1,72,3,72,1368,8,72,1,73,1,73,3,73,1372,8,73,1,73,1,73,3,73,1376,
        8,73,3,73,1378,8,73,1,73,1,73,3,73,1382,8,73,3,73,1384,8,73,1,73,
        1,73,3,73,1388,8,73,3,73,1390,8,73,1,73,1,73,1,74,1,74,3,74,1396,
        8,74,1,74,1,74,1,75,1,75,3,75,1402,8,75,1,75,1,75,3,75,1406,8,75,
        1,75,3,75,1409,8,75,1,75,3,75,1412,8,75,1,75,1,75,1,75,1,75,3,75,
        1418,8,75,1,75,3,75,1421,8,75,1,75,3,75,1424,8,75,1,75,1,75,3,75,
        1428,8,75,1,75,1,75,1,75,1,75,3,75,1434,8,75,1,75,3,75,1437,8,75,
        1,75,3,75,1440,8,75,1,75,1,75,3,75,1444,8,75,1,76,1,76,3,76,1448,
        8,76,1,76,1,76,3,76,1452,8,76,3,76,1454,8,76,1,76,1,76,3,76,1458,
        8,76,3,76,1460,8,76,1,76,1,76,3,76,1464,8,76,3,76,1466,8,76,1,76,
        1,76,3,76,1470,8,76,3,76,1472,8,76,1,76,1,76,1,77,1,77,3,77,1478,
        8,77,1,77,1,77,3,77,1482,8,77,1,77,1,77,3,77,1486,8,77,1,77,1,77,
        3,77,1490,8,77,1,77,1,77,3,77,1494,8,77,1,77,1,77,3,77,1498,8,77,
        1,77,1,77,3,77,1502,8,77,1,77,1,77,3,77,1506,8,77,5,77,1508,8,77,
        10,77,12,77,1511,9,77,3,77,1513,8,77,1,77,1,77,1,78,1,78,3,78,1519,
        8,78,1,78,1,78,3,78,1523,8,78,1,78,1,78,3,78,1527,8,78,1,78,3,78,
        1530,8,78,1,78,5,78,1533,8,78,10,78,12,78,1536,9,78,1,79,1,79,3,
        79,1540,8,79,1,79,5,79,1543,8,79,10,79,12,79,1546,9,79,1,80,1,80,
        3,80,1550,8,80,1,80,1,80,1,81,1,81,3,81,1556,8,81,1,81,1,81,1,81,
        1,81,3,81,1562,8,81,1,81,3,81,1565,8,81,1,81,3,81,1568,8,81,1,81,
        3,81,1571,8,81,1,81,1,81,3,81,1575,8,81,1,81,3,81,1578,8,81,1,81,
        3,81,1581,8,81,1,81,3,81,1584,8,81,1,81,3,81,1587,8,81,1,82,1,82,
        3,82,1591,8,82,1,82,1,82,3,82,1595,8,82,1,82,1,82,3,82,1599,8,82,
        1,82,1,82,3,82,1603,8,82,1,82,1,82,3,82,1607,8,82,1,82,3,82,1610,
        8,82,1,82,3,82,1613,8,82,1,82,1,82,3,82,1617,8,82,1,82,1,82,3,82,
        1621,8,82,1,82,1,82,3,82,1625,8,82,1,82,1,82,3,82,1629,8,82,3,82,
        1631,8,82,1,82,1,82,1,83,1,83,3,83,1637,8,83,1,83,3,83,1640,8,83,
        1,83,3,83,1643,8,83,1,83,1,83,1,84,1,84,3,84,1649,8,84,1,84,3,84,
        1652,8,84,1,84,3,84,1655,8,84,1,84,1,84,1,85,1,85,1,86,1,86,1,87,
        1,87,1,88,1,88,1,89,1,89,1,90,1,90,1,90,1,90,1,90,5,90,1674,8,90,
        10,90,12,90,1677,9,90,1,91,1,91,1,91,1,91,1,91,5,91,1684,8,91,10,
        91,12,91,1687,9,91,1,92,1,92,1,92,1,92,1,92,5,92,1694,8,92,10,92,
        12,92,1697,9,92,1,93,1,93,3,93,1701,8,93,5,93,1703,8,93,10,93,12,
        93,1706,9,93,1,93,1,93,1,94,1,94,3,94,1712,8,94,1,94,1,94,3,94,1716,
        8,94,1,94,1,94,3,94,1720,8,94,1,94,1,94,3,94,1724,8,94,1,94,1,94,
        3,94,1728,8,94,1,94,1,94,1,94,1,94,1,94,1,94,3,94,1736,8,94,1,94,
        1,94,3,94,1740,8,94,1,94,1,94,3,94,1744,8,94,1,94,1,94,3,94,1748,
        8,94,1,94,1,94,4,94,1752,8,94,11,94,12,94,1753,1,94,1,94,3,94,1758,
        8,94,1,95,1,95,1,96,1,96,3,96,1764,8,96,1,96,1,96,3,96,1768,8,96,
        1,96,5,96,1771,8,96,10,96,12,96,1774,9,96,1,97,1,97,3,97,1778,8,
        97,1,97,1,97,3,97,1782,8,97,1,97,5,97,1785,8,97,10,97,12,97,1788,
        9,97,1,98,1,98,3,98,1792,8,98,1,98,1,98,3,98,1796,8,98,1,98,1,98,
        5,98,1800,8,98,10,98,12,98,1803,9,98,1,99,1,99,1,100,1,100,3,100,
        1809,8,100,1,100,1,100,3,100,1813,8,100,1,100,1,100,5,100,1817,8,
        100,10,100,12,100,1820,9,100,1,101,1,101,1,102,1,102,3,102,1826,
        8,102,1,102,1,102,3,102,1830,8,102,1,102,1,102,5,102,1834,8,102,
        10,102,12,102,1837,9,102,1,103,1,103,1,104,1,104,3,104,1843,8,104,
        1,104,1,104,3,104,1847,8,104,1,104,5,104,1850,8,104,10,104,12,104,
        1853,9,104,1,105,1,105,3,105,1857,8,105,5,105,1859,8,105,10,105,
        12,105,1862,9,105,1,105,1,105,3,105,1866,8,105,1,105,3,105,1869,
        8,105,1,106,1,106,1,106,4,106,1874,8,106,11,106,12,106,1875,1,106,
        3,106,1879,8,106,1,107,1,107,3,107,1883,8,107,1,108,1,108,1,108,
        1,108,1,109,1,109,3,109,1891,8,109,1,109,1,109,3,109,1895,8,109,
        1,109,1,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,
        1,110,1,110,3,110,1910,8,110,1,110,3,110,1913,8,110,1,110,1,110,
        1,111,3,111,1918,8,111,1,111,1,111,1,112,1,112,1,112,1,112,1,112,
        1,112,1,112,1,112,1,112,1,112,3,112,1932,8,112,1,113,1,113,3,113,
        1936,8,113,1,113,5,113,1939,8,113,10,113,12,113,1942,9,113,1,114,
        1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,3,114,1953,8,114,
        1,115,1,115,1,115,1,115,1,115,1,115,3,115,1961,8,115,1,116,1,116,
        1,117,1,117,3,117,1967,8,117,1,117,1,117,3,117,1971,8,117,1,117,
        1,117,3,117,1975,8,117,5,117,1977,8,117,10,117,12,117,1980,9,117,
        3,117,1982,8,117,1,117,1,117,1,118,1,118,3,118,1988,8,118,1,118,
        3,118,1991,8,118,1,119,1,119,3,119,1995,8,119,1,119,1,119,3,119,
        1999,8,119,1,119,1,119,3,119,2003,8,119,1,119,1,119,3,119,2007,8,
        119,5,119,2009,8,119,10,119,12,119,2012,9,119,1,119,1,119,1,120,
        1,120,3,120,2018,8,120,1,120,3,120,2021,8,120,1,120,1,120,3,120,
        2025,8,120,1,120,1,120,1,121,1,121,3,121,2031,8,121,1,121,1,121,
        3,121,2035,8,121,1,121,1,121,1,122,1,122,3,122,2041,8,122,1,122,
        1,122,3,122,2045,8,122,1,122,1,122,3,122,2049,8,122,1,122,1,122,
        1,122,3,122,2054,8,122,1,122,1,122,3,122,2058,8,122,1,122,1,122,
        3,122,2062,8,122,3,122,2064,8,122,1,122,1,122,3,122,2068,8,122,1,
        122,1,122,3,122,2072,8,122,1,122,1,122,3,122,2076,8,122,5,122,2078,
        8,122,10,122,12,122,2081,9,122,3,122,2083,8,122,1,122,1,122,3,122,
        2087,8,122,1,123,1,123,1,124,1,124,3,124,2093,8,124,1,124,1,124,
        1,124,3,124,2098,8,124,3,124,2100,8,124,1,124,1,124,1,125,1,125,
        3,125,2106,8,125,1,125,4,125,2109,8,125,11,125,12,125,2110,1,126,
        1,126,3,126,2115,8,126,1,126,1,126,3,126,2119,8,126,1,126,1,126,
        3,126,2123,8,126,1,126,1,126,3,126,2127,8,126,1,126,3,126,2130,8,
        126,1,126,3,126,2133,8,126,1,126,1,126,1,127,1,127,3,127,2139,8,
        127,1,127,1,127,3,127,2143,8,127,1,127,1,127,3,127,2147,8,127,1,
        127,1,127,3,127,2151,8,127,1,127,3,127,2154,8,127,1,127,3,127,2157,
        8,127,1,127,1,127,1,128,1,128,3,128,2163,8,128,1,128,1,128,3,128,
        2167,8,128,1,129,1,129,3,129,2171,8,129,1,129,4,129,2174,8,129,11,
        129,12,129,2175,1,129,1,129,3,129,2180,8,129,1,129,1,129,3,129,2184,
        8,129,1,129,4,129,2187,8,129,11,129,12,129,2188,3,129,2191,8,129,
        1,129,3,129,2194,8,129,1,129,1,129,3,129,2198,8,129,1,129,3,129,
        2201,8,129,1,129,3,129,2204,8,129,1,129,1,129,1,130,1,130,3,130,
        2210,8,130,1,130,1,130,3,130,2214,8,130,1,130,1,130,3,130,2218,8,
        130,1,130,1,130,1,131,1,131,1,132,1,132,3,132,2226,8,132,1,133,1,
        133,1,133,3,133,2231,8,133,1,134,1,134,3,134,2235,8,134,1,134,1,
        134,1,135,1,135,1,136,1,136,1,137,1,137,1,138,1,138,1,139,1,139,
        1,139,1,139,1,139,3,139,2252,8,139,1,140,1,140,1,141,1,141,1,142,
        1,142,1,143,1,143,1,143,0,1,60,144,0,2,4,6,8,10,12,14,16,18,20,22,
        24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,
        68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,
        108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,
        140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,
        172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,
        204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,
        236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,
        268,270,272,274,276,278,280,282,284,286,0,10,1,0,103,106,2,0,5,5,
        13,17,1,0,19,20,2,0,21,21,114,114,2,0,22,23,97,97,1,0,121,122,6,
        0,48,48,54,54,66,66,70,70,123,123,127,127,2,0,14,14,28,31,2,0,16,
        16,32,35,2,0,36,46,114,114,2556,0,289,1,0,0,0,2,319,1,0,0,0,4,321,
        1,0,0,0,6,360,1,0,0,0,8,374,1,0,0,0,10,404,1,0,0,0,12,434,1,0,0,
        0,14,446,1,0,0,0,16,458,1,0,0,0,18,501,1,0,0,0,20,515,1,0,0,0,22,
        559,1,0,0,0,24,561,1,0,0,0,26,575,1,0,0,0,28,591,1,0,0,0,30,593,
        1,0,0,0,32,622,1,0,0,0,34,662,1,0,0,0,36,716,1,0,0,0,38,724,1,0,
        0,0,40,732,1,0,0,0,42,738,1,0,0,0,44,750,1,0,0,0,46,752,1,0,0,0,
        48,763,1,0,0,0,50,767,1,0,0,0,52,773,1,0,0,0,54,781,1,0,0,0,56,795,
        1,0,0,0,58,799,1,0,0,0,60,867,1,0,0,0,62,876,1,0,0,0,64,883,1,0,
        0,0,66,891,1,0,0,0,68,893,1,0,0,0,70,895,1,0,0,0,72,911,1,0,0,0,
        74,915,1,0,0,0,76,917,1,0,0,0,78,925,1,0,0,0,80,929,1,0,0,0,82,952,
        1,0,0,0,84,966,1,0,0,0,86,970,1,0,0,0,88,1017,1,0,0,0,90,1023,1,
        0,0,0,92,1035,1,0,0,0,94,1053,1,0,0,0,96,1059,1,0,0,0,98,1061,1,
        0,0,0,100,1106,1,0,0,0,102,1117,1,0,0,0,104,1130,1,0,0,0,106,1140,
        1,0,0,0,108,1146,1,0,0,0,110,1168,1,0,0,0,112,1170,1,0,0,0,114,1188,
        1,0,0,0,116,1200,1,0,0,0,118,1220,1,0,0,0,120,1228,1,0,0,0,122,1235,
        1,0,0,0,124,1279,1,0,0,0,126,1288,1,0,0,0,128,1290,1,0,0,0,130,1305,
        1,0,0,0,132,1309,1,0,0,0,134,1313,1,0,0,0,136,1320,1,0,0,0,138,1324,
        1,0,0,0,140,1349,1,0,0,0,142,1351,1,0,0,0,144,1367,1,0,0,0,146,1369,
        1,0,0,0,148,1393,1,0,0,0,150,1443,1,0,0,0,152,1445,1,0,0,0,154,1475,
        1,0,0,0,156,1516,1,0,0,0,158,1537,1,0,0,0,160,1547,1,0,0,0,162,1553,
        1,0,0,0,164,1588,1,0,0,0,166,1634,1,0,0,0,168,1646,1,0,0,0,170,1658,
        1,0,0,0,172,1660,1,0,0,0,174,1662,1,0,0,0,176,1664,1,0,0,0,178,1666,
        1,0,0,0,180,1668,1,0,0,0,182,1678,1,0,0,0,184,1688,1,0,0,0,186,1704,
        1,0,0,0,188,1757,1,0,0,0,190,1759,1,0,0,0,192,1761,1,0,0,0,194,1775,
        1,0,0,0,196,1789,1,0,0,0,198,1804,1,0,0,0,200,1806,1,0,0,0,202,1821,
        1,0,0,0,204,1823,1,0,0,0,206,1838,1,0,0,0,208,1840,1,0,0,0,210,1860,
        1,0,0,0,212,1870,1,0,0,0,214,1882,1,0,0,0,216,1884,1,0,0,0,218,1888,
        1,0,0,0,220,1909,1,0,0,0,222,1917,1,0,0,0,224,1931,1,0,0,0,226,1933,
        1,0,0,0,228,1952,1,0,0,0,230,1960,1,0,0,0,232,1962,1,0,0,0,234,1964,
        1,0,0,0,236,1985,1,0,0,0,238,1992,1,0,0,0,240,2017,1,0,0,0,242,2028,
        1,0,0,0,244,2086,1,0,0,0,246,2088,1,0,0,0,248,2099,1,0,0,0,250,2103,
        1,0,0,0,252,2112,1,0,0,0,254,2136,1,0,0,0,256,2160,1,0,0,0,258,2190,
        1,0,0,0,260,2207,1,0,0,0,262,2221,1,0,0,0,264,2225,1,0,0,0,266,2227,
        1,0,0,0,268,2232,1,0,0,0,270,2238,1,0,0,0,272,2240,1,0,0,0,274,2242,
        1,0,0,0,276,2244,1,0,0,0,278,2251,1,0,0,0,280,2253,1,0,0,0,282,2255,
        1,0,0,0,284,2257,1,0,0,0,286,2259,1,0,0,0,288,290,5,144,0,0,289,
        288,1,0,0,0,289,290,1,0,0,0,290,292,1,0,0,0,291,293,3,66,33,0,292,
        291,1,0,0,0,292,293,1,0,0,0,293,295,1,0,0,0,294,296,5,144,0,0,295,
        294,1,0,0,0,295,296,1,0,0,0,296,297,1,0,0,0,297,302,3,2,1,0,298,
        300,5,144,0,0,299,298,1,0,0,0,299,300,1,0,0,0,300,301,1,0,0,0,301,
        303,5,1,0,0,302,299,1,0,0,0,302,303,1,0,0,0,303,305,1,0,0,0,304,
        306,5,144,0,0,305,304,1,0,0,0,305,306,1,0,0,0,306,307,1,0,0,0,307,
        308,5,0,0,1,308,1,1,0,0,0,309,320,3,80,40,0,310,320,3,28,14,0,311,
        320,3,4,2,0,312,320,3,8,4,0,313,320,3,10,5,0,314,320,3,12,6,0,315,
        320,3,16,8,0,316,320,3,14,7,0,317,320,3,72,36,0,318,320,3,74,37,
        0,319,309,1,0,0,0,319,310,1,0,0,0,319,311,1,0,0,0,319,312,1,0,0,
        0,319,313,1,0,0,0,319,314,1,0,0,0,319,315,1,0,0,0,319,316,1,0,0,
        0,319,317,1,0,0,0,319,318,1,0,0,0,320,3,1,0,0,0,321,322,5,51,0,0,
        322,323,5,144,0,0,323,340,3,276,138,0,324,326,5,144,0,0,325,324,
        1,0,0,0,325,326,1,0,0,0,326,327,1,0,0,0,327,329,5,2,0,0,328,330,
        5,144,0,0,329,328,1,0,0,0,329,330,1,0,0,0,330,331,1,0,0,0,331,333,
        3,6,3,0,332,334,5,144,0,0,333,332,1,0,0,0,333,334,1,0,0,0,334,335,
        1,0,0,0,335,337,5,3,0,0,336,338,5,144,0,0,337,336,1,0,0,0,337,338,
        1,0,0,0,338,341,1,0,0,0,339,341,5,144,0,0,340,325,1,0,0,0,340,339,
        1,0,0,0,341,342,1,0,0,0,342,343,5,52,0,0,343,344,5,144,0,0,344,358,
        3,22,11,0,345,347,5,144,0,0,346,345,1,0,0,0,346,347,1,0,0,0,347,
        348,1,0,0,0,348,350,5,2,0,0,349,351,5,144,0,0,350,349,1,0,0,0,350,
        351,1,0,0,0,351,352,1,0,0,0,352,354,3,24,12,0,353,355,5,144,0,0,
        354,353,1,0,0,0,354,355,1,0,0,0,355,356,1,0,0,0,356,357,5,3,0,0,
        357,359,1,0,0,0,358,346,1,0,0,0,358,359,1,0,0,0,359,5,1,0,0,0,360,
        371,3,276,138,0,361,363,5,144,0,0,362,361,1,0,0,0,362,363,1,0,0,
        0,363,364,1,0,0,0,364,366,5,4,0,0,365,367,5,144,0,0,366,365,1,0,
        0,0,366,367,1,0,0,0,367,368,1,0,0,0,368,370,3,276,138,0,369,362,
        1,0,0,0,370,373,1,0,0,0,371,369,1,0,0,0,371,372,1,0,0,0,372,7,1,
        0,0,0,373,371,1,0,0,0,374,375,5,51,0,0,375,376,5,144,0,0,376,377,
        3,276,138,0,377,378,5,144,0,0,378,379,5,52,0,0,379,380,5,144,0,0,
        380,382,5,2,0,0,381,383,5,144,0,0,382,381,1,0,0,0,382,383,1,0,0,
        0,383,384,1,0,0,0,384,395,5,130,0,0,385,387,5,144,0,0,386,385,1,
        0,0,0,386,387,1,0,0,0,387,388,1,0,0,0,388,390,5,4,0,0,389,391,5,
        144,0,0,390,389,1,0,0,0,390,391,1,0,0,0,391,392,1,0,0,0,392,394,
        5,130,0,0,393,386,1,0,0,0,394,397,1,0,0,0,395,393,1,0,0,0,395,396,
        1,0,0,0,396,398,1,0,0,0,397,395,1,0,0,0,398,399,5,3,0,0,399,400,
        5,144,0,0,400,401,5,100,0,0,401,402,5,144,0,0,402,403,5,53,0,0,403,
        9,1,0,0,0,404,405,5,51,0,0,405,406,5,144,0,0,406,408,5,2,0,0,407,
        409,5,144,0,0,408,407,1,0,0,0,408,409,1,0,0,0,409,410,1,0,0,0,410,
        412,3,80,40,0,411,413,5,144,0,0,412,411,1,0,0,0,412,413,1,0,0,0,
        413,414,1,0,0,0,414,415,5,3,0,0,415,416,5,144,0,0,416,417,5,67,0,
        0,417,418,5,144,0,0,418,432,5,130,0,0,419,421,5,144,0,0,420,419,
        1,0,0,0,420,421,1,0,0,0,421,422,1,0,0,0,422,424,5,2,0,0,423,425,
        5,144,0,0,424,423,1,0,0,0,424,425,1,0,0,0,425,426,1,0,0,0,426,428,
        3,24,12,0,427,429,5,144,0,0,428,427,1,0,0,0,428,429,1,0,0,0,429,
        430,1,0,0,0,430,431,5,3,0,0,431,433,1,0,0,0,432,420,1,0,0,0,432,
        433,1,0,0,0,433,11,1,0,0,0,434,435,5,47,0,0,435,436,5,144,0,0,436,
        438,3,278,139,0,437,439,5,144,0,0,438,437,1,0,0,0,438,439,1,0,0,
        0,439,440,1,0,0,0,440,442,5,5,0,0,441,443,5,144,0,0,442,441,1,0,
        0,0,442,443,1,0,0,0,443,444,1,0,0,0,444,445,3,230,115,0,445,13,1,
        0,0,0,446,447,5,48,0,0,447,448,5,144,0,0,448,449,5,90,0,0,449,450,
        5,144,0,0,450,451,5,55,0,0,451,452,5,144,0,0,452,453,3,276,138,0,
        453,454,5,144,0,0,454,455,5,119,0,0,455,456,5,144,0,0,456,457,5,
        130,0,0,457,15,1,0,0,0,458,459,5,88,0,0,459,460,5,144,0,0,460,461,
        5,49,0,0,461,462,5,144,0,0,462,464,3,246,123,0,463,465,5,144,0,0,
        464,463,1,0,0,0,464,465,1,0,0,0,465,466,1,0,0,0,466,468,5,2,0,0,
        467,469,5,144,0,0,468,467,1,0,0,0,468,469,1,0,0,0,469,471,1,0,0,
        0,470,472,3,18,9,0,471,470,1,0,0,0,471,472,1,0,0,0,472,474,1,0,0,
        0,473,475,5,144,0,0,474,473,1,0,0,0,474,475,1,0,0,0,475,477,1,0,
        0,0,476,478,3,20,10,0,477,476,1,0,0,0,477,478,1,0,0,0,478,489,1,
        0,0,0,479,481,5,144,0,0,480,479,1,0,0,0,480,481,1,0,0,0,481,482,
        1,0,0,0,482,484,5,4,0,0,483,485,5,144,0,0,484,483,1,0,0,0,484,485,
        1,0,0,0,485,486,1,0,0,0,486,488,3,20,10,0,487,480,1,0,0,0,488,491,
        1,0,0,0,489,487,1,0,0,0,489,490,1,0,0,0,490,493,1,0,0,0,491,489,
        1,0,0,0,492,494,5,144,0,0,493,492,1,0,0,0,493,494,1,0,0,0,494,495,
        1,0,0,0,495,496,5,3,0,0,496,497,5,144,0,0,497,498,5,98,0,0,498,499,
        5,144,0,0,499,500,3,178,89,0,500,17,1,0,0,0,501,512,3,278,139,0,
        502,504,5,144,0,0,503,502,1,0,0,0,503,504,1,0,0,0,504,505,1,0,0,
        0,505,507,5,4,0,0,506,508,5,144,0,0,507,506,1,0,0,0,507,508,1,0,
        0,0,508,509,1,0,0,0,509,511,3,278,139,0,510,503,1,0,0,0,511,514,
        1,0,0,0,512,510,1,0,0,0,512,513,1,0,0,0,513,19,1,0,0,0,514,512,1,
        0,0,0,515,517,3,278,139,0,516,518,5,144,0,0,517,516,1,0,0,0,517,
        518,1,0,0,0,518,519,1,0,0,0,519,520,5,6,0,0,520,522,5,5,0,0,521,
        523,5,144,0,0,522,521,1,0,0,0,522,523,1,0,0,0,523,524,1,0,0,0,524,
        525,3,230,115,0,525,21,1,0,0,0,526,528,5,7,0,0,527,529,5,144,0,0,
        528,527,1,0,0,0,528,529,1,0,0,0,529,530,1,0,0,0,530,541,5,130,0,
        0,531,533,5,144,0,0,532,531,1,0,0,0,532,533,1,0,0,0,533,534,1,0,
        0,0,534,536,5,4,0,0,535,537,5,144,0,0,536,535,1,0,0,0,536,537,1,
        0,0,0,537,538,1,0,0,0,538,540,5,130,0,0,539,532,1,0,0,0,540,543,
        1,0,0,0,541,539,1,0,0,0,541,542,1,0,0,0,542,544,1,0,0,0,543,541,
        1,0,0,0,544,560,5,8,0,0,545,560,5,130,0,0,546,548,5,50,0,0,547,549,
        5,144,0,0,548,547,1,0,0,0,548,549,1,0,0,0,549,550,1,0,0,0,550,552,
        5,2,0,0,551,553,5,144,0,0,552,551,1,0,0,0,552,553,1,0,0,0,553,554,
        1,0,0,0,554,556,5,130,0,0,555,557,5,144,0,0,556,555,1,0,0,0,556,
        557,1,0,0,0,557,558,1,0,0,0,558,560,5,3,0,0,559,526,1,0,0,0,559,
        545,1,0,0,0,559,546,1,0,0,0,560,23,1,0,0,0,561,572,3,26,13,0,562,
        564,5,144,0,0,563,562,1,0,0,0,563,564,1,0,0,0,564,565,1,0,0,0,565,
        567,5,4,0,0,566,568,5,144,0,0,567,566,1,0,0,0,567,568,1,0,0,0,568,
        569,1,0,0,0,569,571,3,26,13,0,570,563,1,0,0,0,571,574,1,0,0,0,572,
        570,1,0,0,0,572,573,1,0,0,0,573,25,1,0,0,0,574,572,1,0,0,0,575,577,
        3,278,139,0,576,578,5,144,0,0,577,576,1,0,0,0,577,578,1,0,0,0,578,
        579,1,0,0,0,579,581,5,5,0,0,580,582,5,144,0,0,581,580,1,0,0,0,581,
        582,1,0,0,0,582,583,1,0,0,0,583,584,3,230,115,0,584,27,1,0,0,0,585,
        592,3,30,15,0,586,592,3,32,16,0,587,592,3,34,17,0,588,592,3,38,19,
        0,589,592,3,40,20,0,590,592,3,42,21,0,591,585,1,0,0,0,591,586,1,
        0,0,0,591,587,1,0,0,0,591,588,1,0,0,0,591,589,1,0,0,0,591,590,1,
        0,0,0,592,29,1,0,0,0,593,594,5,88,0,0,594,595,5,144,0,0,595,596,
        5,54,0,0,596,597,5,144,0,0,597,598,5,55,0,0,598,599,5,144,0,0,599,
        601,3,276,138,0,600,602,5,144,0,0,601,600,1,0,0,0,601,602,1,0,0,
        0,602,603,1,0,0,0,603,605,5,2,0,0,604,606,5,144,0,0,605,604,1,0,
        0,0,605,606,1,0,0,0,606,607,1,0,0,0,607,609,3,54,27,0,608,610,5,
        144,0,0,609,608,1,0,0,0,609,610,1,0,0,0,610,611,1,0,0,0,611,613,
        5,4,0,0,612,614,5,144,0,0,613,612,1,0,0,0,613,614,1,0,0,0,614,615,
        1,0,0,0,615,616,3,58,29,0,616,618,1,0,0,0,617,619,5,144,0,0,618,
        617,1,0,0,0,618,619,1,0,0,0,619,620,1,0,0,0,620,621,5,3,0,0,621,
        31,1,0,0,0,622,623,5,88,0,0,623,624,5,144,0,0,624,625,5,66,0,0,625,
        626,5,144,0,0,626,627,5,55,0,0,627,628,5,144,0,0,628,630,3,276,138,
        0,629,631,5,144,0,0,630,629,1,0,0,0,630,631,1,0,0,0,631,632,1,0,
        0,0,632,634,5,2,0,0,633,635,5,144,0,0,634,633,1,0,0,0,634,635,1,
        0,0,0,635,636,1,0,0,0,636,638,3,36,18,0,637,639,5,144,0,0,638,637,
        1,0,0,0,638,639,1,0,0,0,639,648,1,0,0,0,640,642,5,4,0,0,641,643,
        5,144,0,0,642,641,1,0,0,0,642,643,1,0,0,0,643,644,1,0,0,0,644,646,
        3,54,27,0,645,647,5,144,0,0,646,645,1,0,0,0,646,647,1,0,0,0,647,
        649,1,0,0,0,648,640,1,0,0,0,648,649,1,0,0,0,649,658,1,0,0,0,650,
        652,5,4,0,0,651,653,5,144,0,0,652,651,1,0,0,0,652,653,1,0,0,0,653,
        654,1,0,0,0,654,656,3,278,139,0,655,657,5,144,0,0,656,655,1,0,0,
        0,656,657,1,0,0,0,657,659,1,0,0,0,658,650,1,0,0,0,658,659,1,0,0,
        0,659,660,1,0,0,0,660,661,5,3,0,0,661,33,1,0,0,0,662,663,5,88,0,
        0,663,664,5,144,0,0,664,665,5,66,0,0,665,666,5,144,0,0,666,667,5,
        55,0,0,667,668,5,144,0,0,668,669,5,56,0,0,669,670,5,144,0,0,670,
        672,3,276,138,0,671,673,5,144,0,0,672,671,1,0,0,0,672,673,1,0,0,
        0,673,674,1,0,0,0,674,676,5,2,0,0,675,677,5,144,0,0,676,675,1,0,
        0,0,676,677,1,0,0,0,677,678,1,0,0,0,678,680,3,36,18,0,679,681,5,
        144,0,0,680,679,1,0,0,0,680,681,1,0,0,0,681,687,1,0,0,0,682,684,
        5,4,0,0,683,685,5,144,0,0,684,683,1,0,0,0,684,685,1,0,0,0,685,686,
        1,0,0,0,686,688,3,36,18,0,687,682,1,0,0,0,688,689,1,0,0,0,689,687,
        1,0,0,0,689,690,1,0,0,0,690,692,1,0,0,0,691,693,5,144,0,0,692,691,
        1,0,0,0,692,693,1,0,0,0,693,702,1,0,0,0,694,696,5,4,0,0,695,697,
        5,144,0,0,696,695,1,0,0,0,696,697,1,0,0,0,697,698,1,0,0,0,698,700,
        3,54,27,0,699,701,5,144,0,0,700,699,1,0,0,0,700,701,1,0,0,0,701,
        703,1,0,0,0,702,694,1,0,0,0,702,703,1,0,0,0,703,712,1,0,0,0,704,
        706,5,4,0,0,705,707,5,144,0,0,706,705,1,0,0,0,706,707,1,0,0,0,707,
        708,1,0,0,0,708,710,3,278,139,0,709,711,5,144,0,0,710,709,1,0,0,
        0,710,711,1,0,0,0,711,713,1,0,0,0,712,704,1,0,0,0,712,713,1,0,0,
        0,713,714,1,0,0,0,714,715,5,3,0,0,715,35,1,0,0,0,716,717,5,52,0,
        0,717,718,5,144,0,0,718,719,3,276,138,0,719,720,5,144,0,0,720,721,
        5,67,0,0,721,722,5,144,0,0,722,723,3,276,138,0,723,37,1,0,0,0,724,
        725,5,88,0,0,725,726,5,144,0,0,726,727,5,57,0,0,727,728,5,144,0,
        0,728,729,5,58,0,0,729,730,5,144,0,0,730,731,3,276,138,0,731,39,
        1,0,0,0,732,733,5,59,0,0,733,734,5,144,0,0,734,735,5,55,0,0,735,
        736,5,144,0,0,736,737,3,276,138,0,737,41,1,0,0,0,738,739,5,60,0,
        0,739,740,5,144,0,0,740,741,5,55,0,0,741,742,5,144,0,0,742,743,3,
        276,138,0,743,744,5,144,0,0,744,745,3,44,22,0,745,43,1,0,0,0,746,
        751,3,46,23,0,747,751,3,48,24,0,748,751,3,50,25,0,749,751,3,52,26,
        0,750,746,1,0,0,0,750,747,1,0,0,0,750,748,1,0,0,0,750,749,1,0,0,
        0,751,45,1,0,0,0,752,753,5,63,0,0,753,754,5,144,0,0,754,755,3,270,
        135,0,755,756,5,144,0,0,756,761,3,60,30,0,757,758,5,144,0,0,758,
        759,5,61,0,0,759,760,5,144,0,0,760,762,3,178,89,0,761,757,1,0,0,
        0,761,762,1,0,0,0,762,47,1,0,0,0,763,764,5,59,0,0,764,765,5,144,
        0,0,765,766,3,270,135,0,766,49,1,0,0,0,767,768,5,62,0,0,768,769,
        5,144,0,0,769,770,5,67,0,0,770,771,5,144,0,0,771,772,3,276,138,0,
        772,51,1,0,0,0,773,774,5,62,0,0,774,775,5,144,0,0,775,776,3,270,
        135,0,776,777,5,144,0,0,777,778,5,67,0,0,778,779,5,144,0,0,779,780,
        3,270,135,0,780,53,1,0,0,0,781,792,3,56,28,0,782,784,5,144,0,0,783,
        782,1,0,0,0,783,784,1,0,0,0,784,785,1,0,0,0,785,787,5,4,0,0,786,
        788,5,144,0,0,787,786,1,0,0,0,787,788,1,0,0,0,788,789,1,0,0,0,789,
        791,3,56,28,0,790,783,1,0,0,0,791,794,1,0,0,0,792,790,1,0,0,0,792,
        793,1,0,0,0,793,55,1,0,0,0,794,792,1,0,0,0,795,796,3,270,135,0,796,
        797,5,144,0,0,797,798,3,60,30,0,798,57,1,0,0,0,799,800,5,64,0,0,
        800,801,5,144,0,0,801,803,5,65,0,0,802,804,5,144,0,0,803,802,1,0,
        0,0,803,804,1,0,0,0,804,805,1,0,0,0,805,807,5,2,0,0,806,808,5,144,
        0,0,807,806,1,0,0,0,807,808,1,0,0,0,808,809,1,0,0,0,809,811,3,270,
        135,0,810,812,5,144,0,0,811,810,1,0,0,0,811,812,1,0,0,0,812,813,
        1,0,0,0,813,814,5,3,0,0,814,59,1,0,0,0,815,816,6,30,-1,0,816,868,
        3,278,139,0,817,819,5,81,0,0,818,820,5,144,0,0,819,818,1,0,0,0,819,
        820,1,0,0,0,820,821,1,0,0,0,821,823,5,2,0,0,822,824,5,144,0,0,823,
        822,1,0,0,0,823,824,1,0,0,0,824,825,1,0,0,0,825,827,3,54,27,0,826,
        828,5,144,0,0,827,826,1,0,0,0,827,828,1,0,0,0,828,829,1,0,0,0,829,
        830,5,3,0,0,830,868,1,0,0,0,831,833,3,278,139,0,832,834,5,144,0,
        0,833,832,1,0,0,0,833,834,1,0,0,0,834,835,1,0,0,0,835,837,5,2,0,
        0,836,838,5,144,0,0,837,836,1,0,0,0,837,838,1,0,0,0,838,839,1,0,
        0,0,839,841,3,54,27,0,840,842,5,144,0,0,841,840,1,0,0,0,841,842,
        1,0,0,0,842,843,1,0,0,0,843,844,5,3,0,0,844,868,1,0,0,0,845,847,
        3,278,139,0,846,848,5,144,0,0,847,846,1,0,0,0,847,848,1,0,0,0,848,
        849,1,0,0,0,849,851,5,2,0,0,850,852,5,144,0,0,851,850,1,0,0,0,851,
        852,1,0,0,0,852,853,1,0,0,0,853,855,3,60,30,0,854,856,5,144,0,0,
        855,854,1,0,0,0,855,856,1,0,0,0,856,857,1,0,0,0,857,859,5,4,0,0,
        858,860,5,144,0,0,859,858,1,0,0,0,859,860,1,0,0,0,860,861,1,0,0,
        0,861,863,3,60,30,0,862,864,5,144,0,0,863,862,1,0,0,0,863,864,1,
        0,0,0,864,865,1,0,0,0,865,866,5,3,0,0,866,868,1,0,0,0,867,815,1,
        0,0,0,867,817,1,0,0,0,867,831,1,0,0,0,867,845,1,0,0,0,868,873,1,
        0,0,0,869,870,10,4,0,0,870,872,3,62,31,0,871,869,1,0,0,0,872,875,
        1,0,0,0,873,871,1,0,0,0,873,874,1,0,0,0,874,61,1,0,0,0,875,873,1,
        0,0,0,876,880,3,64,32,0,877,879,3,64,32,0,878,877,1,0,0,0,879,882,
        1,0,0,0,880,878,1,0,0,0,880,881,1,0,0,0,881,63,1,0,0,0,882,880,1,
        0,0,0,883,885,5,7,0,0,884,886,3,272,136,0,885,884,1,0,0,0,885,886,
        1,0,0,0,886,887,1,0,0,0,887,888,5,8,0,0,888,65,1,0,0,0,889,892,3,
        68,34,0,890,892,3,70,35,0,891,889,1,0,0,0,891,890,1,0,0,0,892,67,
        1,0,0,0,893,894,5,68,0,0,894,69,1,0,0,0,895,896,5,69,0,0,896,71,
        1,0,0,0,897,898,5,70,0,0,898,899,5,144,0,0,899,912,5,71,0,0,900,
        901,5,70,0,0,901,902,5,144,0,0,902,903,5,71,0,0,903,904,5,144,0,
        0,904,905,5,72,0,0,905,906,5,144,0,0,906,912,5,73,0,0,907,912,5,
        75,0,0,908,912,5,76,0,0,909,912,5,77,0,0,910,912,5,78,0,0,911,897,
        1,0,0,0,911,900,1,0,0,0,911,907,1,0,0,0,911,908,1,0,0,0,911,909,
        1,0,0,0,911,910,1,0,0,0,912,73,1,0,0,0,913,916,3,76,38,0,914,916,
        3,78,39,0,915,913,1,0,0,0,915,914,1,0,0,0,916,75,1,0,0,0,917,918,
        5,83,0,0,918,919,5,144,0,0,919,920,5,80,0,0,920,923,5,144,0,0,921,
        924,5,130,0,0,922,924,3,262,131,0,923,921,1,0,0,0,923,922,1,0,0,
        0,924,77,1,0,0,0,925,926,5,79,0,0,926,927,5,144,0,0,927,928,3,262,
        131,0,928,79,1,0,0,0,929,930,3,82,41,0,930,81,1,0,0,0,931,938,3,
        86,43,0,932,934,5,144,0,0,933,932,1,0,0,0,933,934,1,0,0,0,934,935,
        1,0,0,0,935,937,3,84,42,0,936,933,1,0,0,0,937,940,1,0,0,0,938,936,
        1,0,0,0,938,939,1,0,0,0,939,953,1,0,0,0,940,938,1,0,0,0,941,943,
        3,120,60,0,942,944,5,144,0,0,943,942,1,0,0,0,943,944,1,0,0,0,944,
        946,1,0,0,0,945,941,1,0,0,0,946,947,1,0,0,0,947,945,1,0,0,0,947,
        948,1,0,0,0,948,949,1,0,0,0,949,950,3,86,43,0,950,951,6,41,-1,0,
        951,953,1,0,0,0,952,931,1,0,0,0,952,945,1,0,0,0,953,83,1,0,0,0,954,
        955,5,81,0,0,955,956,5,144,0,0,956,958,5,82,0,0,957,959,5,144,0,
        0,958,957,1,0,0,0,958,959,1,0,0,0,959,960,1,0,0,0,960,967,3,86,43,
        0,961,963,5,81,0,0,962,964,5,144,0,0,963,962,1,0,0,0,963,964,1,0,
        0,0,964,965,1,0,0,0,965,967,3,86,43,0,966,954,1,0,0,0,966,961,1,
        0,0,0,967,85,1,0,0,0,968,971,3,88,44,0,969,971,3,90,45,0,970,968,
        1,0,0,0,970,969,1,0,0,0,971,87,1,0,0,0,972,974,3,96,48,0,973,975,
        5,144,0,0,974,973,1,0,0,0,974,975,1,0,0,0,975,977,1,0,0,0,976,972,
        1,0,0,0,977,980,1,0,0,0,978,976,1,0,0,0,978,979,1,0,0,0,979,981,
        1,0,0,0,980,978,1,0,0,0,981,1018,3,120,60,0,982,984,3,96,48,0,983,
        985,5,144,0,0,984,983,1,0,0,0,984,985,1,0,0,0,985,987,1,0,0,0,986,
        982,1,0,0,0,987,990,1,0,0,0,988,986,1,0,0,0,988,989,1,0,0,0,989,
        991,1,0,0,0,990,988,1,0,0,0,991,998,3,94,47,0,992,994,5,144,0,0,
        993,992,1,0,0,0,993,994,1,0,0,0,994,995,1,0,0,0,995,997,3,94,47,
        0,996,993,1,0,0,0,997,1000,1,0,0,0,998,996,1,0,0,0,998,999,1,0,0,
        0,999,1005,1,0,0,0,1000,998,1,0,0,0,1001,1003,5,144,0,0,1002,1001,
        1,0,0,0,1002,1003,1,0,0,0,1003,1004,1,0,0,0,1004,1006,3,120,60,0,
        1005,1002,1,0,0,0,1005,1006,1,0,0,0,1006,1018,1,0,0,0,1007,1009,
        3,96,48,0,1008,1010,5,144,0,0,1009,1008,1,0,0,0,1009,1010,1,0,0,
        0,1010,1012,1,0,0,0,1011,1007,1,0,0,0,1012,1013,1,0,0,0,1013,1011,
        1,0,0,0,1013,1014,1,0,0,0,1014,1015,1,0,0,0,1015,1016,6,44,-1,0,
        1016,1018,1,0,0,0,1017,978,1,0,0,0,1017,988,1,0,0,0,1017,1011,1,
        0,0,0,1018,89,1,0,0,0,1019,1021,3,92,46,0,1020,1022,5,144,0,0,1021,
        1020,1,0,0,0,1021,1022,1,0,0,0,1022,1024,1,0,0,0,1023,1019,1,0,0,
        0,1024,1025,1,0,0,0,1025,1023,1,0,0,0,1025,1026,1,0,0,0,1026,1027,
        1,0,0,0,1027,1028,3,88,44,0,1028,91,1,0,0,0,1029,1031,3,96,48,0,
        1030,1032,5,144,0,0,1031,1030,1,0,0,0,1031,1032,1,0,0,0,1032,1034,
        1,0,0,0,1033,1029,1,0,0,0,1034,1037,1,0,0,0,1035,1033,1,0,0,0,1035,
        1036,1,0,0,0,1036,1044,1,0,0,0,1037,1035,1,0,0,0,1038,1040,3,94,
        47,0,1039,1041,5,144,0,0,1040,1039,1,0,0,0,1040,1041,1,0,0,0,1041,
        1043,1,0,0,0,1042,1038,1,0,0,0,1043,1046,1,0,0,0,1044,1042,1,0,0,
        0,1044,1045,1,0,0,0,1045,1047,1,0,0,0,1046,1044,1,0,0,0,1047,1048,
        3,118,59,0,1048,93,1,0,0,0,1049,1054,3,106,53,0,1050,1054,3,108,
        54,0,1051,1054,3,112,56,0,1052,1054,3,116,58,0,1053,1049,1,0,0,0,
        1053,1050,1,0,0,0,1053,1051,1,0,0,0,1053,1052,1,0,0,0,1054,95,1,
        0,0,0,1055,1060,3,102,51,0,1056,1060,3,104,52,0,1057,1060,3,100,
        50,0,1058,1060,3,98,49,0,1059,1055,1,0,0,0,1059,1056,1,0,0,0,1059,
        1057,1,0,0,0,1059,1058,1,0,0,0,1060,97,1,0,0,0,1061,1079,5,83,0,
        0,1062,1063,5,144,0,0,1063,1064,5,94,0,0,1064,1065,5,144,0,0,1065,
        1067,5,84,0,0,1066,1068,5,144,0,0,1067,1066,1,0,0,0,1067,1068,1,
        0,0,0,1068,1069,1,0,0,0,1069,1071,5,2,0,0,1070,1072,5,144,0,0,1071,
        1070,1,0,0,0,1071,1072,1,0,0,0,1072,1073,1,0,0,0,1073,1075,3,54,
        27,0,1074,1076,5,144,0,0,1075,1074,1,0,0,0,1075,1076,1,0,0,0,1076,
        1077,1,0,0,0,1077,1078,5,3,0,0,1078,1080,1,0,0,0,1079,1062,1,0,0,
        0,1079,1080,1,0,0,0,1080,1081,1,0,0,0,1081,1082,5,144,0,0,1082,1083,
        5,52,0,0,1083,1084,5,144,0,0,1084,1098,3,22,11,0,1085,1087,5,144,
        0,0,1086,1085,1,0,0,0,1086,1087,1,0,0,0,1087,1088,1,0,0,0,1088,1090,
        5,2,0,0,1089,1091,5,144,0,0,1090,1089,1,0,0,0,1090,1091,1,0,0,0,
        1091,1092,1,0,0,0,1092,1094,3,24,12,0,1093,1095,5,144,0,0,1094,1093,
        1,0,0,0,1094,1095,1,0,0,0,1095,1096,1,0,0,0,1096,1097,5,3,0,0,1097,
        1099,1,0,0,0,1098,1086,1,0,0,0,1098,1099,1,0,0,0,1099,1104,1,0,0,
        0,1100,1102,5,144,0,0,1101,1100,1,0,0,0,1101,1102,1,0,0,0,1102,1103,
        1,0,0,0,1103,1105,3,136,68,0,1104,1101,1,0,0,0,1104,1105,1,0,0,0,
        1105,99,1,0,0,0,1106,1107,5,47,0,0,1107,1108,5,144,0,0,1108,1113,
        3,244,122,0,1109,1111,5,144,0,0,1110,1109,1,0,0,0,1110,1111,1,0,
        0,0,1111,1112,1,0,0,0,1112,1114,3,136,68,0,1113,1110,1,0,0,0,1113,
        1114,1,0,0,0,1114,101,1,0,0,0,1115,1116,5,85,0,0,1116,1118,5,144,
        0,0,1117,1115,1,0,0,0,1117,1118,1,0,0,0,1118,1119,1,0,0,0,1119,1121,
        5,86,0,0,1120,1122,5,144,0,0,1121,1120,1,0,0,0,1121,1122,1,0,0,0,
        1122,1123,1,0,0,0,1123,1128,3,138,69,0,1124,1126,5,144,0,0,1125,
        1124,1,0,0,0,1125,1126,1,0,0,0,1126,1127,1,0,0,0,1127,1129,3,136,
        68,0,1128,1125,1,0,0,0,1128,1129,1,0,0,0,1129,103,1,0,0,0,1130,1132,
        5,87,0,0,1131,1133,5,144,0,0,1132,1131,1,0,0,0,1132,1133,1,0,0,0,
        1133,1134,1,0,0,0,1134,1135,3,178,89,0,1135,1136,5,144,0,0,1136,
        1137,5,98,0,0,1137,1138,5,144,0,0,1138,1139,3,262,131,0,1139,105,
        1,0,0,0,1140,1142,5,88,0,0,1141,1143,5,144,0,0,1142,1141,1,0,0,0,
        1142,1143,1,0,0,0,1143,1144,1,0,0,0,1144,1145,3,138,69,0,1145,107,
        1,0,0,0,1146,1148,5,89,0,0,1147,1149,5,144,0,0,1148,1147,1,0,0,0,
        1148,1149,1,0,0,0,1149,1150,1,0,0,0,1150,1155,3,138,69,0,1151,1152,
        5,144,0,0,1152,1154,3,110,55,0,1153,1151,1,0,0,0,1154,1157,1,0,0,
        0,1155,1153,1,0,0,0,1155,1156,1,0,0,0,1156,109,1,0,0,0,1157,1155,
        1,0,0,0,1158,1159,5,90,0,0,1159,1160,5,144,0,0,1160,1161,5,86,0,
        0,1161,1162,5,144,0,0,1162,1169,3,112,56,0,1163,1164,5,90,0,0,1164,
        1165,5,144,0,0,1165,1166,5,88,0,0,1166,1167,5,144,0,0,1167,1169,
        3,112,56,0,1168,1158,1,0,0,0,1168,1163,1,0,0,0,1169,111,1,0,0,0,
        1170,1172,5,91,0,0,1171,1173,5,144,0,0,1172,1171,1,0,0,0,1172,1173,
        1,0,0,0,1173,1174,1,0,0,0,1174,1185,3,114,57,0,1175,1177,5,144,0,
        0,1176,1175,1,0,0,0,1176,1177,1,0,0,0,1177,1178,1,0,0,0,1178,1180,
        5,4,0,0,1179,1181,5,144,0,0,1180,1179,1,0,0,0,1180,1181,1,0,0,0,
        1181,1182,1,0,0,0,1182,1184,3,114,57,0,1183,1176,1,0,0,0,1184,1187,
        1,0,0,0,1185,1183,1,0,0,0,1185,1186,1,0,0,0,1186,113,1,0,0,0,1187,
        1185,1,0,0,0,1188,1190,3,268,134,0,1189,1191,5,144,0,0,1190,1189,
        1,0,0,0,1190,1191,1,0,0,0,1191,1192,1,0,0,0,1192,1194,5,5,0,0,1193,
        1195,5,144,0,0,1194,1193,1,0,0,0,1194,1195,1,0,0,0,1195,1196,1,0,
        0,0,1196,1197,3,178,89,0,1197,115,1,0,0,0,1198,1199,5,92,0,0,1199,
        1201,5,144,0,0,1200,1198,1,0,0,0,1200,1201,1,0,0,0,1201,1202,1,0,
        0,0,1202,1204,5,93,0,0,1203,1205,5,144,0,0,1204,1203,1,0,0,0,1204,
        1205,1,0,0,0,1205,1206,1,0,0,0,1206,1217,3,178,89,0,1207,1209,5,
        144,0,0,1208,1207,1,0,0,0,1208,1209,1,0,0,0,1209,1210,1,0,0,0,1210,
        1212,5,4,0,0,1211,1213,5,144,0,0,1212,1211,1,0,0,0,1212,1213,1,0,
        0,0,1213,1214,1,0,0,0,1214,1216,3,178,89,0,1215,1208,1,0,0,0,1216,
        1219,1,0,0,0,1217,1215,1,0,0,0,1217,1218,1,0,0,0,1218,117,1,0,0,
        0,1219,1217,1,0,0,0,1220,1221,5,94,0,0,1221,1226,3,122,61,0,1222,
        1224,5,144,0,0,1223,1222,1,0,0,0,1223,1224,1,0,0,0,1224,1225,1,0,
        0,0,1225,1227,3,136,68,0,1226,1223,1,0,0,0,1226,1227,1,0,0,0,1227,
        119,1,0,0,0,1228,1229,5,95,0,0,1229,1230,3,122,61,0,1230,121,1,0,
        0,0,1231,1233,5,144,0,0,1232,1231,1,0,0,0,1232,1233,1,0,0,0,1233,
        1234,1,0,0,0,1234,1236,5,96,0,0,1235,1232,1,0,0,0,1235,1236,1,0,
        0,0,1236,1237,1,0,0,0,1237,1238,5,144,0,0,1238,1241,3,124,62,0,1239,
        1240,5,144,0,0,1240,1242,3,128,64,0,1241,1239,1,0,0,0,1241,1242,
        1,0,0,0,1242,1245,1,0,0,0,1243,1244,5,144,0,0,1244,1246,3,130,65,
        0,1245,1243,1,0,0,0,1245,1246,1,0,0,0,1246,1249,1,0,0,0,1247,1248,
        5,144,0,0,1248,1250,3,132,66,0,1249,1247,1,0,0,0,1249,1250,1,0,0,
        0,1250,123,1,0,0,0,1251,1262,5,97,0,0,1252,1254,5,144,0,0,1253,1252,
        1,0,0,0,1253,1254,1,0,0,0,1254,1255,1,0,0,0,1255,1257,5,4,0,0,1256,
        1258,5,144,0,0,1257,1256,1,0,0,0,1257,1258,1,0,0,0,1258,1259,1,0,
        0,0,1259,1261,3,126,63,0,1260,1253,1,0,0,0,1261,1264,1,0,0,0,1262,
        1260,1,0,0,0,1262,1263,1,0,0,0,1263,1280,1,0,0,0,1264,1262,1,0,0,
        0,1265,1276,3,126,63,0,1266,1268,5,144,0,0,1267,1266,1,0,0,0,1267,
        1268,1,0,0,0,1268,1269,1,0,0,0,1269,1271,5,4,0,0,1270,1272,5,144,
        0,0,1271,1270,1,0,0,0,1271,1272,1,0,0,0,1272,1273,1,0,0,0,1273,1275,
        3,126,63,0,1274,1267,1,0,0,0,1275,1278,1,0,0,0,1276,1274,1,0,0,0,
        1276,1277,1,0,0,0,1277,1280,1,0,0,0,1278,1276,1,0,0,0,1279,1251,
        1,0,0,0,1279,1265,1,0,0,0,1280,125,1,0,0,0,1281,1282,3,178,89,0,
        1282,1283,5,144,0,0,1283,1284,5,98,0,0,1284,1285,5,144,0,0,1285,
        1286,3,262,131,0,1286,1289,1,0,0,0,1287,1289,3,178,89,0,1288,1281,
        1,0,0,0,1288,1287,1,0,0,0,1289,127,1,0,0,0,1290,1291,5,99,0,0,1291,
        1292,5,144,0,0,1292,1293,5,100,0,0,1293,1294,5,144,0,0,1294,1302,
        3,134,67,0,1295,1297,5,4,0,0,1296,1298,5,144,0,0,1297,1296,1,0,0,
        0,1297,1298,1,0,0,0,1298,1299,1,0,0,0,1299,1301,3,134,67,0,1300,
        1295,1,0,0,0,1301,1304,1,0,0,0,1302,1300,1,0,0,0,1302,1303,1,0,0,
        0,1303,129,1,0,0,0,1304,1302,1,0,0,0,1305,1306,5,101,0,0,1306,1307,
        5,144,0,0,1307,1308,3,178,89,0,1308,131,1,0,0,0,1309,1310,5,102,
        0,0,1310,1311,5,144,0,0,1311,1312,3,178,89,0,1312,133,1,0,0,0,1313,
        1318,3,178,89,0,1314,1316,5,144,0,0,1315,1314,1,0,0,0,1315,1316,
        1,0,0,0,1316,1317,1,0,0,0,1317,1319,7,0,0,0,1318,1315,1,0,0,0,1318,
        1319,1,0,0,0,1319,135,1,0,0,0,1320,1321,5,107,0,0,1321,1322,5,144,
        0,0,1322,1323,3,178,89,0,1323,137,1,0,0,0,1324,1335,3,140,70,0,1325,
        1327,5,144,0,0,1326,1325,1,0,0,0,1326,1327,1,0,0,0,1327,1328,1,0,
        0,0,1328,1330,5,4,0,0,1329,1331,5,144,0,0,1330,1329,1,0,0,0,1330,
        1331,1,0,0,0,1331,1332,1,0,0,0,1332,1334,3,140,70,0,1333,1326,1,
        0,0,0,1334,1337,1,0,0,0,1335,1333,1,0,0,0,1335,1336,1,0,0,0,1336,
        139,1,0,0,0,1337,1335,1,0,0,0,1338,1340,3,262,131,0,1339,1341,5,
        144,0,0,1340,1339,1,0,0,0,1340,1341,1,0,0,0,1341,1342,1,0,0,0,1342,
        1344,5,5,0,0,1343,1345,5,144,0,0,1344,1343,1,0,0,0,1344,1345,1,0,
        0,0,1345,1346,1,0,0,0,1346,1347,3,142,71,0,1347,1350,1,0,0,0,1348,
        1350,3,142,71,0,1349,1338,1,0,0,0,1349,1348,1,0,0,0,1350,141,1,0,
        0,0,1351,1352,3,144,72,0,1352,143,1,0,0,0,1353,1360,3,146,73,0,1354,
        1356,5,144,0,0,1355,1354,1,0,0,0,1355,1356,1,0,0,0,1356,1357,1,0,
        0,0,1357,1359,3,148,74,0,1358,1355,1,0,0,0,1359,1362,1,0,0,0,1360,
        1358,1,0,0,0,1360,1361,1,0,0,0,1361,1368,1,0,0,0,1362,1360,1,0,0,
        0,1363,1364,5,2,0,0,1364,1365,3,144,72,0,1365,1366,5,3,0,0,1366,
        1368,1,0,0,0,1367,1353,1,0,0,0,1367,1363,1,0,0,0,1368,145,1,0,0,
        0,1369,1371,5,2,0,0,1370,1372,5,144,0,0,1371,1370,1,0,0,0,1371,1372,
        1,0,0,0,1372,1377,1,0,0,0,1373,1375,3,262,131,0,1374,1376,5,144,
        0,0,1375,1374,1,0,0,0,1375,1376,1,0,0,0,1376,1378,1,0,0,0,1377,1373,
        1,0,0,0,1377,1378,1,0,0,0,1378,1383,1,0,0,0,1379,1381,3,158,79,0,
        1380,1382,5,144,0,0,1381,1380,1,0,0,0,1381,1382,1,0,0,0,1382,1384,
        1,0,0,0,1383,1379,1,0,0,0,1383,1384,1,0,0,0,1384,1389,1,0,0,0,1385,
        1387,3,154,77,0,1386,1388,5,144,0,0,1387,1386,1,0,0,0,1387,1388,
        1,0,0,0,1388,1390,1,0,0,0,1389,1385,1,0,0,0,1389,1390,1,0,0,0,1390,
        1391,1,0,0,0,1391,1392,5,3,0,0,1392,147,1,0,0,0,1393,1395,3,150,
        75,0,1394,1396,5,144,0,0,1395,1394,1,0,0,0,1395,1396,1,0,0,0,1396,
        1397,1,0,0,0,1397,1398,3,146,73,0,1398,149,1,0,0,0,1399,1401,3,282,
        141,0,1400,1402,5,144,0,0,1401,1400,1,0,0,0,1401,1402,1,0,0,0,1402,
        1403,1,0,0,0,1403,1405,3,286,143,0,1404,1406,5,144,0,0,1405,1404,
        1,0,0,0,1405,1406,1,0,0,0,1406,1408,1,0,0,0,1407,1409,3,152,76,0,
        1408,1407,1,0,0,0,1408,1409,1,0,0,0,1409,1411,1,0,0,0,1410,1412,
        5,144,0,0,1411,1410,1,0,0,0,1411,1412,1,0,0,0,1412,1413,1,0,0,0,
        1413,1414,3,286,143,0,1414,1444,1,0,0,0,1415,1417,3,286,143,0,1416,
        1418,5,144,0,0,1417,1416,1,0,0,0,1417,1418,1,0,0,0,1418,1420,1,0,
        0,0,1419,1421,3,152,76,0,1420,1419,1,0,0,0,1420,1421,1,0,0,0,1421,
        1423,1,0,0,0,1422,1424,5,144,0,0,1423,1422,1,0,0,0,1423,1424,1,0,
        0,0,1424,1425,1,0,0,0,1425,1427,3,286,143,0,1426,1428,5,144,0,0,
        1427,1426,1,0,0,0,1427,1428,1,0,0,0,1428,1429,1,0,0,0,1429,1430,
        3,284,142,0,1430,1444,1,0,0,0,1431,1433,3,286,143,0,1432,1434,5,
        144,0,0,1433,1432,1,0,0,0,1433,1434,1,0,0,0,1434,1436,1,0,0,0,1435,
        1437,3,152,76,0,1436,1435,1,0,0,0,1436,1437,1,0,0,0,1437,1439,1,
        0,0,0,1438,1440,5,144,0,0,1439,1438,1,0,0,0,1439,1440,1,0,0,0,1440,
        1441,1,0,0,0,1441,1442,3,286,143,0,1442,1444,1,0,0,0,1443,1399,1,
        0,0,0,1443,1415,1,0,0,0,1443,1431,1,0,0,0,1444,151,1,0,0,0,1445,
        1447,5,7,0,0,1446,1448,5,144,0,0,1447,1446,1,0,0,0,1447,1448,1,0,
        0,0,1448,1453,1,0,0,0,1449,1451,3,262,131,0,1450,1452,5,144,0,0,
        1451,1450,1,0,0,0,1451,1452,1,0,0,0,1452,1454,1,0,0,0,1453,1449,
        1,0,0,0,1453,1454,1,0,0,0,1454,1459,1,0,0,0,1455,1457,3,156,78,0,
        1456,1458,5,144,0,0,1457,1456,1,0,0,0,1457,1458,1,0,0,0,1458,1460,
        1,0,0,0,1459,1455,1,0,0,0,1459,1460,1,0,0,0,1460,1465,1,0,0,0,1461,
        1463,3,162,81,0,1462,1464,5,144,0,0,1463,1462,1,0,0,0,1463,1464,
        1,0,0,0,1464,1466,1,0,0,0,1465,1461,1,0,0,0,1465,1466,1,0,0,0,1466,
        1471,1,0,0,0,1467,1469,3,154,77,0,1468,1470,5,144,0,0,1469,1468,
        1,0,0,0,1469,1470,1,0,0,0,1470,1472,1,0,0,0,1471,1467,1,0,0,0,1471,
        1472,1,0,0,0,1472,1473,1,0,0,0,1473,1474,5,8,0,0,1474,153,1,0,0,
        0,1475,1477,5,9,0,0,1476,1478,5,144,0,0,1477,1476,1,0,0,0,1477,1478,
        1,0,0,0,1478,1512,1,0,0,0,1479,1481,3,270,135,0,1480,1482,5,144,
        0,0,1481,1480,1,0,0,0,1481,1482,1,0,0,0,1482,1483,1,0,0,0,1483,1485,
        5,6,0,0,1484,1486,5,144,0,0,1485,1484,1,0,0,0,1485,1486,1,0,0,0,
        1486,1487,1,0,0,0,1487,1489,3,178,89,0,1488,1490,5,144,0,0,1489,
        1488,1,0,0,0,1489,1490,1,0,0,0,1490,1509,1,0,0,0,1491,1493,5,4,0,
        0,1492,1494,5,144,0,0,1493,1492,1,0,0,0,1493,1494,1,0,0,0,1494,1495,
        1,0,0,0,1495,1497,3,270,135,0,1496,1498,5,144,0,0,1497,1496,1,0,
        0,0,1497,1498,1,0,0,0,1498,1499,1,0,0,0,1499,1501,5,6,0,0,1500,1502,
        5,144,0,0,1501,1500,1,0,0,0,1501,1502,1,0,0,0,1502,1503,1,0,0,0,
        1503,1505,3,178,89,0,1504,1506,5,144,0,0,1505,1504,1,0,0,0,1505,
        1506,1,0,0,0,1506,1508,1,0,0,0,1507,1491,1,0,0,0,1508,1511,1,0,0,
        0,1509,1507,1,0,0,0,1509,1510,1,0,0,0,1510,1513,1,0,0,0,1511,1509,
        1,0,0,0,1512,1479,1,0,0,0,1512,1513,1,0,0,0,1513,1514,1,0,0,0,1514,
        1515,5,10,0,0,1515,155,1,0,0,0,1516,1518,5,6,0,0,1517,1519,5,144,
        0,0,1518,1517,1,0,0,0,1518,1519,1,0,0,0,1519,1520,1,0,0,0,1520,1534,
        3,176,88,0,1521,1523,5,144,0,0,1522,1521,1,0,0,0,1522,1523,1,0,0,
        0,1523,1524,1,0,0,0,1524,1526,5,11,0,0,1525,1527,5,6,0,0,1526,1525,
        1,0,0,0,1526,1527,1,0,0,0,1527,1529,1,0,0,0,1528,1530,5,144,0,0,
        1529,1528,1,0,0,0,1529,1530,1,0,0,0,1530,1531,1,0,0,0,1531,1533,
        3,176,88,0,1532,1522,1,0,0,0,1533,1536,1,0,0,0,1534,1532,1,0,0,0,
        1534,1535,1,0,0,0,1535,157,1,0,0,0,1536,1534,1,0,0,0,1537,1544,3,
        160,80,0,1538,1540,5,144,0,0,1539,1538,1,0,0,0,1539,1540,1,0,0,0,
        1540,1541,1,0,0,0,1541,1543,3,160,80,0,1542,1539,1,0,0,0,1543,1546,
        1,0,0,0,1544,1542,1,0,0,0,1544,1545,1,0,0,0,1545,159,1,0,0,0,1546,
        1544,1,0,0,0,1547,1549,5,6,0,0,1548,1550,5,144,0,0,1549,1548,1,0,
        0,0,1549,1550,1,0,0,0,1550,1551,1,0,0,0,1551,1552,3,174,87,0,1552,
        161,1,0,0,0,1553,1555,5,97,0,0,1554,1556,5,144,0,0,1555,1554,1,0,
        0,0,1555,1556,1,0,0,0,1556,1561,1,0,0,0,1557,1562,5,108,0,0,1558,
        1559,5,82,0,0,1559,1560,5,144,0,0,1560,1562,5,108,0,0,1561,1557,
        1,0,0,0,1561,1558,1,0,0,0,1561,1562,1,0,0,0,1562,1564,1,0,0,0,1563,
        1565,5,144,0,0,1564,1563,1,0,0,0,1564,1565,1,0,0,0,1565,1580,1,0,
        0,0,1566,1568,3,170,85,0,1567,1566,1,0,0,0,1567,1568,1,0,0,0,1568,
        1570,1,0,0,0,1569,1571,5,144,0,0,1570,1569,1,0,0,0,1570,1571,1,0,
        0,0,1571,1572,1,0,0,0,1572,1574,5,12,0,0,1573,1575,5,144,0,0,1574,
        1573,1,0,0,0,1574,1575,1,0,0,0,1575,1577,1,0,0,0,1576,1578,3,172,
        86,0,1577,1576,1,0,0,0,1577,1578,1,0,0,0,1578,1581,1,0,0,0,1579,
        1581,3,272,136,0,1580,1567,1,0,0,0,1580,1579,1,0,0,0,1580,1581,1,
        0,0,0,1581,1586,1,0,0,0,1582,1584,5,144,0,0,1583,1582,1,0,0,0,1583,
        1584,1,0,0,0,1584,1585,1,0,0,0,1585,1587,3,164,82,0,1586,1583,1,
        0,0,0,1586,1587,1,0,0,0,1587,163,1,0,0,0,1588,1590,5,2,0,0,1589,
        1591,5,144,0,0,1590,1589,1,0,0,0,1590,1591,1,0,0,0,1591,1592,1,0,
        0,0,1592,1594,3,262,131,0,1593,1595,5,144,0,0,1594,1593,1,0,0,0,
        1594,1595,1,0,0,0,1595,1596,1,0,0,0,1596,1598,5,4,0,0,1597,1599,
        5,144,0,0,1598,1597,1,0,0,0,1598,1599,1,0,0,0,1599,1600,1,0,0,0,
        1600,1609,3,262,131,0,1601,1603,5,144,0,0,1602,1601,1,0,0,0,1602,
        1603,1,0,0,0,1603,1604,1,0,0,0,1604,1606,5,11,0,0,1605,1607,5,144,
        0,0,1606,1605,1,0,0,0,1606,1607,1,0,0,0,1607,1608,1,0,0,0,1608,1610,
        3,136,68,0,1609,1602,1,0,0,0,1609,1610,1,0,0,0,1610,1630,1,0,0,0,
        1611,1613,5,144,0,0,1612,1611,1,0,0,0,1612,1613,1,0,0,0,1613,1614,
        1,0,0,0,1614,1616,5,11,0,0,1615,1617,5,144,0,0,1616,1615,1,0,0,0,
        1616,1617,1,0,0,0,1617,1618,1,0,0,0,1618,1620,3,168,84,0,1619,1621,
        5,144,0,0,1620,1619,1,0,0,0,1620,1621,1,0,0,0,1621,1622,1,0,0,0,
        1622,1624,5,4,0,0,1623,1625,5,144,0,0,1624,1623,1,0,0,0,1624,1625,
        1,0,0,0,1625,1626,1,0,0,0,1626,1628,3,166,83,0,1627,1629,5,144,0,
        0,1628,1627,1,0,0,0,1628,1629,1,0,0,0,1629,1631,1,0,0,0,1630,1612,
        1,0,0,0,1630,1631,1,0,0,0,1631,1632,1,0,0,0,1632,1633,5,3,0,0,1633,
        165,1,0,0,0,1634,1636,5,9,0,0,1635,1637,5,144,0,0,1636,1635,1,0,
        0,0,1636,1637,1,0,0,0,1637,1639,1,0,0,0,1638,1640,3,124,62,0,1639,
        1638,1,0,0,0,1639,1640,1,0,0,0,1640,1642,1,0,0,0,1641,1643,5,144,
        0,0,1642,1641,1,0,0,0,1642,1643,1,0,0,0,1643,1644,1,0,0,0,1644,1645,
        5,10,0,0,1645,167,1,0,0,0,1646,1648,5,9,0,0,1647,1649,5,144,0,0,
        1648,1647,1,0,0,0,1648,1649,1,0,0,0,1649,1651,1,0,0,0,1650,1652,
        3,124,62,0,1651,1650,1,0,0,0,1651,1652,1,0,0,0,1652,1654,1,0,0,0,
        1653,1655,5,144,0,0,1654,1653,1,0,0,0,1654,1655,1,0,0,0,1655,1656,
        1,0,0,0,1656,1657,5,10,0,0,1657,169,1,0,0,0,1658,1659,5,132,0,0,
        1659,171,1,0,0,0,1660,1661,5,132,0,0,1661,173,1,0,0,0,1662,1663,
        3,276,138,0,1663,175,1,0,0,0,1664,1665,3,276,138,0,1665,177,1,0,
        0,0,1666,1667,3,180,90,0,1667,179,1,0,0,0,1668,1675,3,182,91,0,1669,
        1670,5,144,0,0,1670,1671,5,109,0,0,1671,1672,5,144,0,0,1672,1674,
        3,182,91,0,1673,1669,1,0,0,0,1674,1677,1,0,0,0,1675,1673,1,0,0,0,
        1675,1676,1,0,0,0,1676,181,1,0,0,0,1677,1675,1,0,0,0,1678,1685,3,
        184,92,0,1679,1680,5,144,0,0,1680,1681,5,110,0,0,1681,1682,5,144,
        0,0,1682,1684,3,184,92,0,1683,1679,1,0,0,0,1684,1687,1,0,0,0,1685,
        1683,1,0,0,0,1685,1686,1,0,0,0,1686,183,1,0,0,0,1687,1685,1,0,0,
        0,1688,1695,3,186,93,0,1689,1690,5,144,0,0,1690,1691,5,111,0,0,1691,
        1692,5,144,0,0,1692,1694,3,186,93,0,1693,1689,1,0,0,0,1694,1697,
        1,0,0,0,1695,1693,1,0,0,0,1695,1696,1,0,0,0,1696,185,1,0,0,0,1697,
        1695,1,0,0,0,1698,1700,5,112,0,0,1699,1701,5,144,0,0,1700,1699,1,
        0,0,0,1700,1701,1,0,0,0,1701,1703,1,0,0,0,1702,1698,1,0,0,0,1703,
        1706,1,0,0,0,1704,1702,1,0,0,0,1704,1705,1,0,0,0,1705,1707,1,0,0,
        0,1706,1704,1,0,0,0,1707,1708,3,188,94,0,1708,187,1,0,0,0,1709,1719,
        3,192,96,0,1710,1712,5,144,0,0,1711,1710,1,0,0,0,1711,1712,1,0,0,
        0,1712,1713,1,0,0,0,1713,1715,3,190,95,0,1714,1716,5,144,0,0,1715,
        1714,1,0,0,0,1715,1716,1,0,0,0,1716,1717,1,0,0,0,1717,1718,3,192,
        96,0,1718,1720,1,0,0,0,1719,1711,1,0,0,0,1719,1720,1,0,0,0,1720,
        1758,1,0,0,0,1721,1723,3,192,96,0,1722,1724,5,144,0,0,1723,1722,
        1,0,0,0,1723,1724,1,0,0,0,1724,1725,1,0,0,0,1725,1727,5,113,0,0,
        1726,1728,5,144,0,0,1727,1726,1,0,0,0,1727,1728,1,0,0,0,1728,1729,
        1,0,0,0,1729,1730,3,192,96,0,1730,1731,1,0,0,0,1731,1732,6,94,-1,
        0,1732,1758,1,0,0,0,1733,1735,3,192,96,0,1734,1736,5,144,0,0,1735,
        1734,1,0,0,0,1735,1736,1,0,0,0,1736,1737,1,0,0,0,1737,1739,3,190,
        95,0,1738,1740,5,144,0,0,1739,1738,1,0,0,0,1739,1740,1,0,0,0,1740,
        1741,1,0,0,0,1741,1751,3,192,96,0,1742,1744,5,144,0,0,1743,1742,
        1,0,0,0,1743,1744,1,0,0,0,1744,1745,1,0,0,0,1745,1747,3,190,95,0,
        1746,1748,5,144,0,0,1747,1746,1,0,0,0,1747,1748,1,0,0,0,1748,1749,
        1,0,0,0,1749,1750,3,192,96,0,1750,1752,1,0,0,0,1751,1743,1,0,0,0,
        1752,1753,1,0,0,0,1753,1751,1,0,0,0,1753,1754,1,0,0,0,1754,1755,
        1,0,0,0,1755,1756,6,94,-1,0,1756,1758,1,0,0,0,1757,1709,1,0,0,0,
        1757,1721,1,0,0,0,1757,1733,1,0,0,0,1758,189,1,0,0,0,1759,1760,7,
        1,0,0,1760,191,1,0,0,0,1761,1772,3,194,97,0,1762,1764,5,144,0,0,
        1763,1762,1,0,0,0,1763,1764,1,0,0,0,1764,1765,1,0,0,0,1765,1767,
        5,11,0,0,1766,1768,5,144,0,0,1767,1766,1,0,0,0,1767,1768,1,0,0,0,
        1768,1769,1,0,0,0,1769,1771,3,194,97,0,1770,1763,1,0,0,0,1771,1774,
        1,0,0,0,1772,1770,1,0,0,0,1772,1773,1,0,0,0,1773,193,1,0,0,0,1774,
        1772,1,0,0,0,1775,1786,3,196,98,0,1776,1778,5,144,0,0,1777,1776,
        1,0,0,0,1777,1778,1,0,0,0,1778,1779,1,0,0,0,1779,1781,5,18,0,0,1780,
        1782,5,144,0,0,1781,1780,1,0,0,0,1781,1782,1,0,0,0,1782,1783,1,0,
        0,0,1783,1785,3,196,98,0,1784,1777,1,0,0,0,1785,1788,1,0,0,0,1786,
        1784,1,0,0,0,1786,1787,1,0,0,0,1787,195,1,0,0,0,1788,1786,1,0,0,
        0,1789,1801,3,200,100,0,1790,1792,5,144,0,0,1791,1790,1,0,0,0,1791,
        1792,1,0,0,0,1792,1793,1,0,0,0,1793,1795,3,198,99,0,1794,1796,5,
        144,0,0,1795,1794,1,0,0,0,1795,1796,1,0,0,0,1796,1797,1,0,0,0,1797,
        1798,3,200,100,0,1798,1800,1,0,0,0,1799,1791,1,0,0,0,1800,1803,1,
        0,0,0,1801,1799,1,0,0,0,1801,1802,1,0,0,0,1802,197,1,0,0,0,1803,
        1801,1,0,0,0,1804,1805,7,2,0,0,1805,199,1,0,0,0,1806,1818,3,204,
        102,0,1807,1809,5,144,0,0,1808,1807,1,0,0,0,1808,1809,1,0,0,0,1809,
        1810,1,0,0,0,1810,1812,3,202,101,0,1811,1813,5,144,0,0,1812,1811,
        1,0,0,0,1812,1813,1,0,0,0,1813,1814,1,0,0,0,1814,1815,3,204,102,
        0,1815,1817,1,0,0,0,1816,1808,1,0,0,0,1817,1820,1,0,0,0,1818,1816,
        1,0,0,0,1818,1819,1,0,0,0,1819,201,1,0,0,0,1820,1818,1,0,0,0,1821,
        1822,7,3,0,0,1822,203,1,0,0,0,1823,1835,3,208,104,0,1824,1826,5,
        144,0,0,1825,1824,1,0,0,0,1825,1826,1,0,0,0,1826,1827,1,0,0,0,1827,
        1829,3,206,103,0,1828,1830,5,144,0,0,1829,1828,1,0,0,0,1829,1830,
        1,0,0,0,1830,1831,1,0,0,0,1831,1832,3,208,104,0,1832,1834,1,0,0,
        0,1833,1825,1,0,0,0,1834,1837,1,0,0,0,1835,1833,1,0,0,0,1835,1836,
        1,0,0,0,1836,205,1,0,0,0,1837,1835,1,0,0,0,1838,1839,7,4,0,0,1839,
        207,1,0,0,0,1840,1851,3,210,105,0,1841,1843,5,144,0,0,1842,1841,
        1,0,0,0,1842,1843,1,0,0,0,1843,1844,1,0,0,0,1844,1846,5,24,0,0,1845,
        1847,5,144,0,0,1846,1845,1,0,0,0,1846,1847,1,0,0,0,1847,1848,1,0,
        0,0,1848,1850,3,210,105,0,1849,1842,1,0,0,0,1850,1853,1,0,0,0,1851,
        1849,1,0,0,0,1851,1852,1,0,0,0,1852,209,1,0,0,0,1853,1851,1,0,0,
        0,1854,1856,5,114,0,0,1855,1857,5,144,0,0,1856,1855,1,0,0,0,1856,
        1857,1,0,0,0,1857,1859,1,0,0,0,1858,1854,1,0,0,0,1859,1862,1,0,0,
        0,1860,1858,1,0,0,0,1860,1861,1,0,0,0,1861,1863,1,0,0,0,1862,1860,
        1,0,0,0,1863,1868,3,212,106,0,1864,1866,5,144,0,0,1865,1864,1,0,
        0,0,1865,1866,1,0,0,0,1866,1867,1,0,0,0,1867,1869,5,115,0,0,1868,
        1865,1,0,0,0,1868,1869,1,0,0,0,1869,211,1,0,0,0,1870,1878,3,226,
        113,0,1871,1879,3,220,110,0,1872,1874,3,214,107,0,1873,1872,1,0,
        0,0,1874,1875,1,0,0,0,1875,1873,1,0,0,0,1875,1876,1,0,0,0,1876,1879,
        1,0,0,0,1877,1879,3,224,112,0,1878,1871,1,0,0,0,1878,1873,1,0,0,
        0,1878,1877,1,0,0,0,1878,1879,1,0,0,0,1879,213,1,0,0,0,1880,1883,
        3,216,108,0,1881,1883,3,218,109,0,1882,1880,1,0,0,0,1882,1881,1,
        0,0,0,1883,215,1,0,0,0,1884,1885,5,7,0,0,1885,1886,3,178,89,0,1886,
        1887,5,8,0,0,1887,217,1,0,0,0,1888,1890,5,7,0,0,1889,1891,3,178,
        89,0,1890,1889,1,0,0,0,1890,1891,1,0,0,0,1891,1892,1,0,0,0,1892,
        1894,5,6,0,0,1893,1895,3,178,89,0,1894,1893,1,0,0,0,1894,1895,1,
        0,0,0,1895,1896,1,0,0,0,1896,1897,5,8,0,0,1897,219,1,0,0,0,1898,
        1910,3,222,111,0,1899,1900,5,144,0,0,1900,1901,5,116,0,0,1901,1902,
        5,144,0,0,1902,1910,5,94,0,0,1903,1904,5,144,0,0,1904,1905,5,117,
        0,0,1905,1906,5,144,0,0,1906,1910,5,94,0,0,1907,1908,5,144,0,0,1908,
        1910,5,118,0,0,1909,1898,1,0,0,0,1909,1899,1,0,0,0,1909,1903,1,0,
        0,0,1909,1907,1,0,0,0,1910,1912,1,0,0,0,1911,1913,5,144,0,0,1912,
        1911,1,0,0,0,1912,1913,1,0,0,0,1913,1914,1,0,0,0,1914,1915,3,226,
        113,0,1915,221,1,0,0,0,1916,1918,5,144,0,0,1917,1916,1,0,0,0,1917,
        1918,1,0,0,0,1918,1919,1,0,0,0,1919,1920,5,25,0,0,1920,223,1,0,0,
        0,1921,1922,5,144,0,0,1922,1923,5,119,0,0,1923,1924,5,144,0,0,1924,
        1932,5,120,0,0,1925,1926,5,144,0,0,1926,1927,5,119,0,0,1927,1928,
        5,144,0,0,1928,1929,5,112,0,0,1929,1930,5,144,0,0,1930,1932,5,120,
        0,0,1931,1921,1,0,0,0,1931,1925,1,0,0,0,1932,225,1,0,0,0,1933,1940,
        3,228,114,0,1934,1936,5,144,0,0,1935,1934,1,0,0,0,1935,1936,1,0,
        0,0,1936,1937,1,0,0,0,1937,1939,3,256,128,0,1938,1935,1,0,0,0,1939,
        1942,1,0,0,0,1940,1938,1,0,0,0,1940,1941,1,0,0,0,1941,227,1,0,0,
        0,1942,1940,1,0,0,0,1943,1953,3,230,115,0,1944,1953,3,266,133,0,
        1945,1953,3,258,129,0,1946,1953,3,242,121,0,1947,1953,3,244,122,
        0,1948,1953,3,250,125,0,1949,1953,3,252,126,0,1950,1953,3,254,127,
        0,1951,1953,3,262,131,0,1952,1943,1,0,0,0,1952,1944,1,0,0,0,1952,
        1945,1,0,0,0,1952,1946,1,0,0,0,1952,1947,1,0,0,0,1952,1948,1,0,0,
        0,1952,1949,1,0,0,0,1952,1950,1,0,0,0,1952,1951,1,0,0,0,1953,229,
        1,0,0,0,1954,1961,3,264,132,0,1955,1961,5,130,0,0,1956,1961,3,232,
        116,0,1957,1961,5,120,0,0,1958,1961,3,234,117,0,1959,1961,3,238,
        119,0,1960,1954,1,0,0,0,1960,1955,1,0,0,0,1960,1956,1,0,0,0,1960,
        1957,1,0,0,0,1960,1958,1,0,0,0,1960,1959,1,0,0,0,1961,231,1,0,0,
        0,1962,1963,7,5,0,0,1963,233,1,0,0,0,1964,1966,5,7,0,0,1965,1967,
        5,144,0,0,1966,1965,1,0,0,0,1966,1967,1,0,0,0,1967,1981,1,0,0,0,
        1968,1970,3,178,89,0,1969,1971,5,144,0,0,1970,1969,1,0,0,0,1970,
        1971,1,0,0,0,1971,1978,1,0,0,0,1972,1974,3,236,118,0,1973,1975,5,
        144,0,0,1974,1973,1,0,0,0,1974,1975,1,0,0,0,1975,1977,1,0,0,0,1976,
        1972,1,0,0,0,1977,1980,1,0,0,0,1978,1976,1,0,0,0,1978,1979,1,0,0,
        0,1979,1982,1,0,0,0,1980,1978,1,0,0,0,1981,1968,1,0,0,0,1981,1982,
        1,0,0,0,1982,1983,1,0,0,0,1983,1984,5,8,0,0,1984,235,1,0,0,0,1985,
        1987,5,4,0,0,1986,1988,5,144,0,0,1987,1986,1,0,0,0,1987,1988,1,0,
        0,0,1988,1990,1,0,0,0,1989,1991,3,178,89,0,1990,1989,1,0,0,0,1990,
        1991,1,0,0,0,1991,237,1,0,0,0,1992,1994,5,9,0,0,1993,1995,5,144,
        0,0,1994,1993,1,0,0,0,1994,1995,1,0,0,0,1995,1996,1,0,0,0,1996,1998,
        3,240,120,0,1997,1999,5,144,0,0,1998,1997,1,0,0,0,1998,1999,1,0,
        0,0,1999,2010,1,0,0,0,2000,2002,5,4,0,0,2001,2003,5,144,0,0,2002,
        2001,1,0,0,0,2002,2003,1,0,0,0,2003,2004,1,0,0,0,2004,2006,3,240,
        120,0,2005,2007,5,144,0,0,2006,2005,1,0,0,0,2006,2007,1,0,0,0,2007,
        2009,1,0,0,0,2008,2000,1,0,0,0,2009,2012,1,0,0,0,2010,2008,1,0,0,
        0,2010,2011,1,0,0,0,2011,2013,1,0,0,0,2012,2010,1,0,0,0,2013,2014,
        5,10,0,0,2014,239,1,0,0,0,2015,2018,3,278,139,0,2016,2018,5,130,
        0,0,2017,2015,1,0,0,0,2017,2016,1,0,0,0,2018,2020,1,0,0,0,2019,2021,
        5,144,0,0,2020,2019,1,0,0,0,2020,2021,1,0,0,0,2021,2022,1,0,0,0,
        2022,2024,5,6,0,0,2023,2025,5,144,0,0,2024,2023,1,0,0,0,2024,2025,
        1,0,0,0,2025,2026,1,0,0,0,2026,2027,3,178,89,0,2027,241,1,0,0,0,
        2028,2030,5,2,0,0,2029,2031,5,144,0,0,2030,2029,1,0,0,0,2030,2031,
        1,0,0,0,2031,2032,1,0,0,0,2032,2034,3,178,89,0,2033,2035,5,144,0,
        0,2034,2033,1,0,0,0,2034,2035,1,0,0,0,2035,2036,1,0,0,0,2036,2037,
        5,3,0,0,2037,243,1,0,0,0,2038,2040,5,123,0,0,2039,2041,5,144,0,0,
        2040,2039,1,0,0,0,2040,2041,1,0,0,0,2041,2042,1,0,0,0,2042,2044,
        5,2,0,0,2043,2045,5,144,0,0,2044,2043,1,0,0,0,2044,2045,1,0,0,0,
        2045,2046,1,0,0,0,2046,2048,5,97,0,0,2047,2049,5,144,0,0,2048,2047,
        1,0,0,0,2048,2049,1,0,0,0,2049,2050,1,0,0,0,2050,2087,5,3,0,0,2051,
        2053,3,246,123,0,2052,2054,5,144,0,0,2053,2052,1,0,0,0,2053,2054,
        1,0,0,0,2054,2055,1,0,0,0,2055,2057,5,2,0,0,2056,2058,5,144,0,0,
        2057,2056,1,0,0,0,2057,2058,1,0,0,0,2058,2063,1,0,0,0,2059,2061,
        5,96,0,0,2060,2062,5,144,0,0,2061,2060,1,0,0,0,2061,2062,1,0,0,0,
        2062,2064,1,0,0,0,2063,2059,1,0,0,0,2063,2064,1,0,0,0,2064,2082,
        1,0,0,0,2065,2067,3,248,124,0,2066,2068,5,144,0,0,2067,2066,1,0,
        0,0,2067,2068,1,0,0,0,2068,2079,1,0,0,0,2069,2071,5,4,0,0,2070,2072,
        5,144,0,0,2071,2070,1,0,0,0,2071,2072,1,0,0,0,2072,2073,1,0,0,0,
        2073,2075,3,248,124,0,2074,2076,5,144,0,0,2075,2074,1,0,0,0,2075,
        2076,1,0,0,0,2076,2078,1,0,0,0,2077,2069,1,0,0,0,2078,2081,1,0,0,
        0,2079,2077,1,0,0,0,2079,2080,1,0,0,0,2080,2083,1,0,0,0,2081,2079,
        1,0,0,0,2082,2065,1,0,0,0,2082,2083,1,0,0,0,2083,2084,1,0,0,0,2084,
        2085,5,3,0,0,2085,2087,1,0,0,0,2086,2038,1,0,0,0,2086,2051,1,0,0,
        0,2087,245,1,0,0,0,2088,2089,3,278,139,0,2089,247,1,0,0,0,2090,2092,
        3,278,139,0,2091,2093,5,144,0,0,2092,2091,1,0,0,0,2092,2093,1,0,
        0,0,2093,2094,1,0,0,0,2094,2095,5,6,0,0,2095,2097,5,5,0,0,2096,2098,
        5,144,0,0,2097,2096,1,0,0,0,2097,2098,1,0,0,0,2098,2100,1,0,0,0,
        2099,2090,1,0,0,0,2099,2100,1,0,0,0,2100,2101,1,0,0,0,2101,2102,
        3,178,89,0,2102,249,1,0,0,0,2103,2108,3,146,73,0,2104,2106,5,144,
        0,0,2105,2104,1,0,0,0,2105,2106,1,0,0,0,2106,2107,1,0,0,0,2107,2109,
        3,148,74,0,2108,2105,1,0,0,0,2109,2110,1,0,0,0,2110,2108,1,0,0,0,
        2110,2111,1,0,0,0,2111,251,1,0,0,0,2112,2114,5,124,0,0,2113,2115,
        5,144,0,0,2114,2113,1,0,0,0,2114,2115,1,0,0,0,2115,2116,1,0,0,0,
        2116,2118,5,9,0,0,2117,2119,5,144,0,0,2118,2117,1,0,0,0,2118,2119,
        1,0,0,0,2119,2120,1,0,0,0,2120,2122,5,86,0,0,2121,2123,5,144,0,0,
        2122,2121,1,0,0,0,2122,2123,1,0,0,0,2123,2124,1,0,0,0,2124,2129,
        3,138,69,0,2125,2127,5,144,0,0,2126,2125,1,0,0,0,2126,2127,1,0,0,
        0,2127,2128,1,0,0,0,2128,2130,3,136,68,0,2129,2126,1,0,0,0,2129,
        2130,1,0,0,0,2130,2132,1,0,0,0,2131,2133,5,144,0,0,2132,2131,1,0,
        0,0,2132,2133,1,0,0,0,2133,2134,1,0,0,0,2134,2135,5,10,0,0,2135,
        253,1,0,0,0,2136,2138,5,123,0,0,2137,2139,5,144,0,0,2138,2137,1,
        0,0,0,2138,2139,1,0,0,0,2139,2140,1,0,0,0,2140,2142,5,9,0,0,2141,
        2143,5,144,0,0,2142,2141,1,0,0,0,2142,2143,1,0,0,0,2143,2144,1,0,
        0,0,2144,2146,5,86,0,0,2145,2147,5,144,0,0,2146,2145,1,0,0,0,2146,
        2147,1,0,0,0,2147,2148,1,0,0,0,2148,2153,3,138,69,0,2149,2151,5,
        144,0,0,2150,2149,1,0,0,0,2150,2151,1,0,0,0,2151,2152,1,0,0,0,2152,
        2154,3,136,68,0,2153,2150,1,0,0,0,2153,2154,1,0,0,0,2154,2156,1,
        0,0,0,2155,2157,5,144,0,0,2156,2155,1,0,0,0,2156,2157,1,0,0,0,2157,
        2158,1,0,0,0,2158,2159,5,10,0,0,2159,255,1,0,0,0,2160,2162,5,26,
        0,0,2161,2163,5,144,0,0,2162,2161,1,0,0,0,2162,2163,1,0,0,0,2163,
        2166,1,0,0,0,2164,2167,3,270,135,0,2165,2167,5,97,0,0,2166,2164,
        1,0,0,0,2166,2165,1,0,0,0,2167,257,1,0,0,0,2168,2173,5,125,0,0,2169,
        2171,5,144,0,0,2170,2169,1,0,0,0,2170,2171,1,0,0,0,2171,2172,1,0,
        0,0,2172,2174,3,260,130,0,2173,2170,1,0,0,0,2174,2175,1,0,0,0,2175,
        2173,1,0,0,0,2175,2176,1,0,0,0,2176,2191,1,0,0,0,2177,2179,5,125,
        0,0,2178,2180,5,144,0,0,2179,2178,1,0,0,0,2179,2180,1,0,0,0,2180,
        2181,1,0,0,0,2181,2186,3,178,89,0,2182,2184,5,144,0,0,2183,2182,
        1,0,0,0,2183,2184,1,0,0,0,2184,2185,1,0,0,0,2185,2187,3,260,130,
        0,2186,2183,1,0,0,0,2187,2188,1,0,0,0,2188,2186,1,0,0,0,2188,2189,
        1,0,0,0,2189,2191,1,0,0,0,2190,2168,1,0,0,0,2190,2177,1,0,0,0,2191,
        2200,1,0,0,0,2192,2194,5,144,0,0,2193,2192,1,0,0,0,2193,2194,1,0,
        0,0,2194,2195,1,0,0,0,2195,2197,5,126,0,0,2196,2198,5,144,0,0,2197,
        2196,1,0,0,0,2197,2198,1,0,0,0,2198,2199,1,0,0,0,2199,2201,3,178,
        89,0,2200,2193,1,0,0,0,2200,2201,1,0,0,0,2201,2203,1,0,0,0,2202,
        2204,5,144,0,0,2203,2202,1,0,0,0,2203,2204,1,0,0,0,2204,2205,1,0,
        0,0,2205,2206,5,127,0,0,2206,259,1,0,0,0,2207,2209,5,128,0,0,2208,
        2210,5,144,0,0,2209,2208,1,0,0,0,2209,2210,1,0,0,0,2210,2211,1,0,
        0,0,2211,2213,3,178,89,0,2212,2214,5,144,0,0,2213,2212,1,0,0,0,2213,
        2214,1,0,0,0,2214,2215,1,0,0,0,2215,2217,5,129,0,0,2216,2218,5,144,
        0,0,2217,2216,1,0,0,0,2217,2218,1,0,0,0,2218,2219,1,0,0,0,2219,2220,
        3,178,89,0,2220,261,1,0,0,0,2221,2222,3,278,139,0,2222,263,1,0,0,
        0,2223,2226,3,274,137,0,2224,2226,3,272,136,0,2225,2223,1,0,0,0,
        2225,2224,1,0,0,0,2226,265,1,0,0,0,2227,2230,5,27,0,0,2228,2231,
        3,278,139,0,2229,2231,5,132,0,0,2230,2228,1,0,0,0,2230,2229,1,0,
        0,0,2231,267,1,0,0,0,2232,2234,3,228,114,0,2233,2235,5,144,0,0,2234,
        2233,1,0,0,0,2234,2235,1,0,0,0,2235,2236,1,0,0,0,2236,2237,3,256,
        128,0,2237,269,1,0,0,0,2238,2239,3,276,138,0,2239,271,1,0,0,0,2240,
        2241,5,132,0,0,2241,273,1,0,0,0,2242,2243,5,139,0,0,2243,275,1,0,
        0,0,2244,2245,3,278,139,0,2245,277,1,0,0,0,2246,2252,5,140,0,0,2247,
        2248,5,143,0,0,2248,2252,6,139,-1,0,2249,2252,5,133,0,0,2250,2252,
        3,280,140,0,2251,2246,1,0,0,0,2251,2247,1,0,0,0,2251,2249,1,0,0,
        0,2251,2250,1,0,0,0,2252,279,1,0,0,0,2253,2254,7,6,0,0,2254,281,
        1,0,0,0,2255,2256,7,7,0,0,2256,283,1,0,0,0,2257,2258,7,8,0,0,2258,
        285,1,0,0,0,2259,2260,7,9,0,0,2260,287,1,0,0,0,392,289,292,295,299,
        302,305,319,325,329,333,337,340,346,350,354,358,362,366,371,382,
        386,390,395,408,412,420,424,428,432,438,442,464,468,471,474,477,
        480,484,489,493,503,507,512,517,522,528,532,536,541,548,552,556,
        559,563,567,572,577,581,591,601,605,609,613,618,630,634,638,642,
        646,648,652,656,658,672,676,680,684,689,692,696,700,702,706,710,
        712,750,761,783,787,792,803,807,811,819,823,827,833,837,841,847,
        851,855,859,863,867,873,880,885,891,911,915,923,933,938,943,947,
        952,958,963,966,970,974,978,984,988,993,998,1002,1005,1009,1013,
        1017,1021,1025,1031,1035,1040,1044,1053,1059,1067,1071,1075,1079,
        1086,1090,1094,1098,1101,1104,1110,1113,1117,1121,1125,1128,1132,
        1142,1148,1155,1168,1172,1176,1180,1185,1190,1194,1200,1204,1208,
        1212,1217,1223,1226,1232,1235,1241,1245,1249,1253,1257,1262,1267,
        1271,1276,1279,1288,1297,1302,1315,1318,1326,1330,1335,1340,1344,
        1349,1355,1360,1367,1371,1375,1377,1381,1383,1387,1389,1395,1401,
        1405,1408,1411,1417,1420,1423,1427,1433,1436,1439,1443,1447,1451,
        1453,1457,1459,1463,1465,1469,1471,1477,1481,1485,1489,1493,1497,
        1501,1505,1509,1512,1518,1522,1526,1529,1534,1539,1544,1549,1555,
        1561,1564,1567,1570,1574,1577,1580,1583,1586,1590,1594,1598,1602,
        1606,1609,1612,1616,1620,1624,1628,1630,1636,1639,1642,1648,1651,
        1654,1675,1685,1695,1700,1704,1711,1715,1719,1723,1727,1735,1739,
        1743,1747,1753,1757,1763,1767,1772,1777,1781,1786,1791,1795,1801,
        1808,1812,1818,1825,1829,1835,1842,1846,1851,1856,1860,1865,1868,
        1875,1878,1882,1890,1894,1909,1912,1917,1931,1935,1940,1952,1960,
        1966,1970,1974,1978,1981,1987,1990,1994,1998,2002,2006,2010,2017,
        2020,2024,2030,2034,2040,2044,2048,2053,2057,2061,2063,2067,2071,
        2075,2079,2082,2086,2092,2097,2099,2105,2110,2114,2118,2122,2126,
        2129,2132,2138,2142,2146,2150,2153,2156,2162,2166,2170,2175,2179,
        2183,2188,2190,2193,2197,2200,2203,2209,2213,2217,2225,2230,2234,
        2251
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

export class OC_CypherContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(CypherParser.EOF, 0);
    }
    public oC_Statement(): OC_StatementContext {
        return this.getTypedRuleContext(OC_StatementContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_AnyCypherOption(): OC_AnyCypherOptionContext {
        return this.getTypedRuleContext(OC_AnyCypherOptionContext, 0);
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
    public RDF(): antlr.TerminalNode {
        return this.getToken(CypherParser.RDF, 0);
    }
    public GRAPH(): antlr.TerminalNode {
        return this.getToken(CypherParser.GRAPH, 0);
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
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
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
    public kU_ListExtractOperatorExpression(): KU_ListExtractOperatorExpressionContext {
        return this.getTypedRuleContext(KU_ListExtractOperatorExpressionContext, 0);
    }
    public kU_ListSliceOperatorExpression(): KU_ListSliceOperatorExpressionContext {
        return this.getTypedRuleContext(KU_ListSliceOperatorExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ListOperatorExpression;
    }
}


export class KU_ListExtractOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ListExtractOperatorExpression;
    }
}


export class KU_ListSliceOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Expression__list(): OC_ExpressionContext[] {
        return this.getTypedRuleContexts(OC_ExpressionContext);
    }
    public oC_Expression(i: number): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ListSliceOperatorExpression;
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

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
    public static readonly UNION = 79;
    public static readonly ALL = 80;
    public static readonly LOAD = 81;
    public static readonly HEADERS = 82;
    public static readonly OPTIONAL = 83;
    public static readonly MATCH = 84;
    public static readonly UNWIND = 85;
    public static readonly CREATE = 86;
    public static readonly MERGE = 87;
    public static readonly ON = 88;
    public static readonly SET = 89;
    public static readonly DETACH = 90;
    public static readonly DELETE = 91;
    public static readonly WITH = 92;
    public static readonly RETURN = 93;
    public static readonly DISTINCT = 94;
    public static readonly STAR = 95;
    public static readonly AS = 96;
    public static readonly ORDER = 97;
    public static readonly BY = 98;
    public static readonly L_SKIP = 99;
    public static readonly LIMIT = 100;
    public static readonly ASCENDING = 101;
    public static readonly ASC = 102;
    public static readonly DESCENDING = 103;
    public static readonly DESC = 104;
    public static readonly WHERE = 105;
    public static readonly SHORTEST = 106;
    public static readonly OR = 107;
    public static readonly XOR = 108;
    public static readonly AND = 109;
    public static readonly NOT = 110;
    public static readonly INVALID_NOT_EQUAL = 111;
    public static readonly MINUS = 112;
    public static readonly FACTORIAL = 113;
    public static readonly STARTS = 114;
    public static readonly ENDS = 115;
    public static readonly CONTAINS = 116;
    public static readonly IS = 117;
    public static readonly NULL_ = 118;
    public static readonly TRUE = 119;
    public static readonly FALSE = 120;
    public static readonly COUNT = 121;
    public static readonly EXISTS = 122;
    public static readonly CASE = 123;
    public static readonly ELSE = 124;
    public static readonly END = 125;
    public static readonly WHEN = 126;
    public static readonly THEN = 127;
    public static readonly StringLiteral = 128;
    public static readonly EscapedChar = 129;
    public static readonly DecimalInteger = 130;
    public static readonly HexLetter = 131;
    public static readonly HexDigit = 132;
    public static readonly Digit = 133;
    public static readonly NonZeroDigit = 134;
    public static readonly NonZeroOctDigit = 135;
    public static readonly ZeroDigit = 136;
    public static readonly RegularDecimalReal = 137;
    public static readonly UnescapedSymbolicName = 138;
    public static readonly IdentifierStart = 139;
    public static readonly IdentifierPart = 140;
    public static readonly EscapedSymbolicName = 141;
    public static readonly SP = 142;
    public static readonly WHITESPACE = 143;
    public static readonly Comment = 144;
    public static readonly Unknown = 145;
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
    public static readonly RULE_oC_Query = 37;
    public static readonly RULE_oC_RegularQuery = 38;
    public static readonly RULE_oC_Union = 39;
    public static readonly RULE_oC_SingleQuery = 40;
    public static readonly RULE_oC_SinglePartQuery = 41;
    public static readonly RULE_oC_MultiPartQuery = 42;
    public static readonly RULE_kU_QueryPart = 43;
    public static readonly RULE_oC_UpdatingClause = 44;
    public static readonly RULE_oC_ReadingClause = 45;
    public static readonly RULE_kU_LoadFrom = 46;
    public static readonly RULE_kU_InQueryCall = 47;
    public static readonly RULE_oC_Match = 48;
    public static readonly RULE_oC_Unwind = 49;
    public static readonly RULE_oC_Create = 50;
    public static readonly RULE_oC_Merge = 51;
    public static readonly RULE_oC_MergeAction = 52;
    public static readonly RULE_oC_Set = 53;
    public static readonly RULE_oC_SetItem = 54;
    public static readonly RULE_oC_Delete = 55;
    public static readonly RULE_oC_With = 56;
    public static readonly RULE_oC_Return = 57;
    public static readonly RULE_oC_ProjectionBody = 58;
    public static readonly RULE_oC_ProjectionItems = 59;
    public static readonly RULE_oC_ProjectionItem = 60;
    public static readonly RULE_oC_Order = 61;
    public static readonly RULE_oC_Skip = 62;
    public static readonly RULE_oC_Limit = 63;
    public static readonly RULE_oC_SortItem = 64;
    public static readonly RULE_oC_Where = 65;
    public static readonly RULE_oC_Pattern = 66;
    public static readonly RULE_oC_PatternPart = 67;
    public static readonly RULE_oC_AnonymousPatternPart = 68;
    public static readonly RULE_oC_PatternElement = 69;
    public static readonly RULE_oC_NodePattern = 70;
    public static readonly RULE_oC_PatternElementChain = 71;
    public static readonly RULE_oC_RelationshipPattern = 72;
    public static readonly RULE_oC_RelationshipDetail = 73;
    public static readonly RULE_kU_Properties = 74;
    public static readonly RULE_oC_RelationshipTypes = 75;
    public static readonly RULE_oC_NodeLabels = 76;
    public static readonly RULE_oC_NodeLabel = 77;
    public static readonly RULE_oC_RangeLiteral = 78;
    public static readonly RULE_kU_RecursiveRelationshipComprehension = 79;
    public static readonly RULE_kU_IntermediateNodeProjectionItems = 80;
    public static readonly RULE_kU_IntermediateRelProjectionItems = 81;
    public static readonly RULE_oC_LowerBound = 82;
    public static readonly RULE_oC_UpperBound = 83;
    public static readonly RULE_oC_LabelName = 84;
    public static readonly RULE_oC_RelTypeName = 85;
    public static readonly RULE_oC_Expression = 86;
    public static readonly RULE_oC_OrExpression = 87;
    public static readonly RULE_oC_XorExpression = 88;
    public static readonly RULE_oC_AndExpression = 89;
    public static readonly RULE_oC_NotExpression = 90;
    public static readonly RULE_oC_ComparisonExpression = 91;
    public static readonly RULE_kU_ComparisonOperator = 92;
    public static readonly RULE_kU_BitwiseOrOperatorExpression = 93;
    public static readonly RULE_kU_BitwiseAndOperatorExpression = 94;
    public static readonly RULE_kU_BitShiftOperatorExpression = 95;
    public static readonly RULE_kU_BitShiftOperator = 96;
    public static readonly RULE_oC_AddOrSubtractExpression = 97;
    public static readonly RULE_kU_AddOrSubtractOperator = 98;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 99;
    public static readonly RULE_kU_MultiplyDivideModuloOperator = 100;
    public static readonly RULE_oC_PowerOfExpression = 101;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 102;
    public static readonly RULE_oC_StringListNullOperatorExpression = 103;
    public static readonly RULE_oC_ListOperatorExpression = 104;
    public static readonly RULE_kU_ListExtractOperatorExpression = 105;
    public static readonly RULE_kU_ListSliceOperatorExpression = 106;
    public static readonly RULE_oC_StringOperatorExpression = 107;
    public static readonly RULE_oC_RegularExpression = 108;
    public static readonly RULE_oC_NullOperatorExpression = 109;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 110;
    public static readonly RULE_oC_Atom = 111;
    public static readonly RULE_oC_Literal = 112;
    public static readonly RULE_oC_BooleanLiteral = 113;
    public static readonly RULE_oC_ListLiteral = 114;
    public static readonly RULE_kU_ListEntry = 115;
    public static readonly RULE_kU_StructLiteral = 116;
    public static readonly RULE_kU_StructField = 117;
    public static readonly RULE_oC_ParenthesizedExpression = 118;
    public static readonly RULE_oC_FunctionInvocation = 119;
    public static readonly RULE_oC_FunctionName = 120;
    public static readonly RULE_kU_FunctionParameter = 121;
    public static readonly RULE_oC_PathPatterns = 122;
    public static readonly RULE_oC_ExistSubquery = 123;
    public static readonly RULE_kU_CountSubquery = 124;
    public static readonly RULE_oC_PropertyLookup = 125;
    public static readonly RULE_oC_CaseExpression = 126;
    public static readonly RULE_oC_CaseAlternative = 127;
    public static readonly RULE_oC_Variable = 128;
    public static readonly RULE_oC_NumberLiteral = 129;
    public static readonly RULE_oC_Parameter = 130;
    public static readonly RULE_oC_PropertyExpression = 131;
    public static readonly RULE_oC_PropertyKeyName = 132;
    public static readonly RULE_oC_IntegerLiteral = 133;
    public static readonly RULE_oC_DoubleLiteral = 134;
    public static readonly RULE_oC_SchemaName = 135;
    public static readonly RULE_oC_SymbolicName = 136;
    public static readonly RULE_kU_NonReservedKeywords = 137;
    public static readonly RULE_oC_LeftArrowHead = 138;
    public static readonly RULE_oC_RightArrowHead = 139;
    public static readonly RULE_oC_Dash = 140;

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
        null, null, "'*'", null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, "'!='", "'-'", "'!'", 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        "'0'"
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
        "UNION", "ALL", "LOAD", "HEADERS", "OPTIONAL", "MATCH", "UNWIND", 
        "CREATE", "MERGE", "ON", "SET", "DETACH", "DELETE", "WITH", "RETURN", 
        "DISTINCT", "STAR", "AS", "ORDER", "BY", "L_SKIP", "LIMIT", "ASCENDING", 
        "ASC", "DESCENDING", "DESC", "WHERE", "SHORTEST", "OR", "XOR", "AND", 
        "NOT", "INVALID_NOT_EQUAL", "MINUS", "FACTORIAL", "STARTS", "ENDS", 
        "CONTAINS", "IS", "NULL_", "TRUE", "FALSE", "COUNT", "EXISTS", "CASE", 
        "ELSE", "END", "WHEN", "THEN", "StringLiteral", "EscapedChar", "DecimalInteger", 
        "HexLetter", "HexDigit", "Digit", "NonZeroDigit", "NonZeroOctDigit", 
        "ZeroDigit", "RegularDecimalReal", "UnescapedSymbolicName", "IdentifierStart", 
        "IdentifierPart", "EscapedSymbolicName", "SP", "WHITESPACE", "Comment", 
        "Unknown"
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
        "oC_Explain", "oC_Profile", "kU_Transaction", "oC_Query", "oC_RegularQuery", 
        "oC_Union", "oC_SingleQuery", "oC_SinglePartQuery", "oC_MultiPartQuery", 
        "kU_QueryPart", "oC_UpdatingClause", "oC_ReadingClause", "kU_LoadFrom", 
        "kU_InQueryCall", "oC_Match", "oC_Unwind", "oC_Create", "oC_Merge", 
        "oC_MergeAction", "oC_Set", "oC_SetItem", "oC_Delete", "oC_With", 
        "oC_Return", "oC_ProjectionBody", "oC_ProjectionItems", "oC_ProjectionItem", 
        "oC_Order", "oC_Skip", "oC_Limit", "oC_SortItem", "oC_Where", "oC_Pattern", 
        "oC_PatternPart", "oC_AnonymousPatternPart", "oC_PatternElement", 
        "oC_NodePattern", "oC_PatternElementChain", "oC_RelationshipPattern", 
        "oC_RelationshipDetail", "kU_Properties", "oC_RelationshipTypes", 
        "oC_NodeLabels", "oC_NodeLabel", "oC_RangeLiteral", "kU_RecursiveRelationshipComprehension", 
        "kU_IntermediateNodeProjectionItems", "kU_IntermediateRelProjectionItems", 
        "oC_LowerBound", "oC_UpperBound", "oC_LabelName", "oC_RelTypeName", 
        "oC_Expression", "oC_OrExpression", "oC_XorExpression", "oC_AndExpression", 
        "oC_NotExpression", "oC_ComparisonExpression", "kU_ComparisonOperator", 
        "kU_BitwiseOrOperatorExpression", "kU_BitwiseAndOperatorExpression", 
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
            this.state = 283;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
            case 1:
                {
                this.state = 282;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 286;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===68 || _la===69) {
                {
                this.state = 285;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 289;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 288;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 291;
            this.oC_Statement();
            }
            this.state = 296;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
            case 1:
                {
                this.state = 293;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 292;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 295;
                this.match(CypherParser.T__0);
                }
                break;
            }
            this.state = 299;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 298;
                this.match(CypherParser.SP);
                }
            }

            this.state = 301;
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
            this.state = 312;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 303;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 304;
                this.kU_DDL();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 305;
                this.kU_CopyFrom();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 306;
                this.kU_CopyFromByColumn();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 307;
                this.kU_CopyTO();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 308;
                this.kU_StandaloneCall();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 309;
                this.kU_CreateMacro();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 310;
                this.kU_CommentOn();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 311;
                this.kU_Transaction();
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
            this.state = 314;
            this.match(CypherParser.COPY);
            this.state = 315;
            this.match(CypherParser.SP);
            this.state = 316;
            this.oC_SchemaName();
            this.state = 333;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                {
                {
                this.state = 318;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 317;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 320;
                this.match(CypherParser.T__1);
                this.state = 322;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 321;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 324;
                this.kU_ColumnNames();
                this.state = 326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 325;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 328;
                this.match(CypherParser.T__2);
                this.state = 330;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 329;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                break;
            case 2:
                {
                this.state = 332;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 335;
            this.match(CypherParser.FROM);
            this.state = 336;
            this.match(CypherParser.SP);
            this.state = 337;
            this.kU_FilePaths();
            this.state = 351;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
            case 1:
                {
                this.state = 339;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 338;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 341;
                this.match(CypherParser.T__1);
                this.state = 343;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 342;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 345;
                this.kU_ParsingOptions();
                this.state = 347;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 346;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 349;
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
            this.state = 353;
            this.oC_SchemaName();
            this.state = 364;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 355;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 354;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 357;
                    this.match(CypherParser.T__3);
                    this.state = 359;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 358;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 361;
                    this.oC_SchemaName();
                    }
                    }
                }
                this.state = 366;
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
            this.state = 367;
            this.match(CypherParser.COPY);
            this.state = 368;
            this.match(CypherParser.SP);
            this.state = 369;
            this.oC_SchemaName();
            this.state = 370;
            this.match(CypherParser.SP);
            this.state = 371;
            this.match(CypherParser.FROM);
            this.state = 372;
            this.match(CypherParser.SP);
            this.state = 373;
            this.match(CypherParser.T__1);
            this.state = 375;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 374;
                this.match(CypherParser.SP);
                }
            }

            this.state = 377;
            this.match(CypherParser.StringLiteral);
            this.state = 388;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4 || _la===142) {
                {
                {
                this.state = 379;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 378;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 381;
                this.match(CypherParser.T__3);
                this.state = 383;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 382;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 385;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 391;
            this.match(CypherParser.T__2);
            this.state = 392;
            this.match(CypherParser.SP);
            this.state = 393;
            this.match(CypherParser.BY);
            this.state = 394;
            this.match(CypherParser.SP);
            this.state = 395;
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
            this.state = 397;
            this.match(CypherParser.COPY);
            this.state = 398;
            this.match(CypherParser.SP);
            this.state = 399;
            this.match(CypherParser.T__1);
            this.state = 401;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 400;
                this.match(CypherParser.SP);
                }
            }

            this.state = 403;
            this.oC_Query();
            this.state = 405;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 404;
                this.match(CypherParser.SP);
                }
            }

            this.state = 407;
            this.match(CypherParser.T__2);
            this.state = 408;
            this.match(CypherParser.SP);
            this.state = 409;
            this.match(CypherParser.TO);
            this.state = 410;
            this.match(CypherParser.SP);
            this.state = 411;
            this.match(CypherParser.StringLiteral);
            this.state = 425;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
            case 1:
                {
                this.state = 413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 412;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 415;
                this.match(CypherParser.T__1);
                this.state = 417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 416;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 419;
                this.kU_ParsingOptions();
                this.state = 421;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 420;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 423;
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
            this.state = 427;
            this.match(CypherParser.CALL);
            this.state = 428;
            this.match(CypherParser.SP);
            this.state = 429;
            this.oC_SymbolicName();
            this.state = 431;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 430;
                this.match(CypherParser.SP);
                }
            }

            this.state = 433;
            this.match(CypherParser.T__4);
            this.state = 435;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 434;
                this.match(CypherParser.SP);
                }
            }

            this.state = 437;
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
            this.state = 439;
            this.match(CypherParser.COMMENT);
            this.state = 440;
            this.match(CypherParser.SP);
            this.state = 441;
            this.match(CypherParser.ON);
            this.state = 442;
            this.match(CypherParser.SP);
            this.state = 443;
            this.match(CypherParser.TABLE);
            this.state = 444;
            this.match(CypherParser.SP);
            this.state = 445;
            this.oC_SchemaName();
            this.state = 446;
            this.match(CypherParser.SP);
            this.state = 447;
            this.match(CypherParser.IS);
            this.state = 448;
            this.match(CypherParser.SP);
            this.state = 449;
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
            this.state = 451;
            this.match(CypherParser.CREATE);
            this.state = 452;
            this.match(CypherParser.SP);
            this.state = 453;
            this.match(CypherParser.MACRO);
            this.state = 454;
            this.match(CypherParser.SP);
            this.state = 455;
            this.oC_FunctionName();
            this.state = 457;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 456;
                this.match(CypherParser.SP);
                }
            }

            this.state = 459;
            this.match(CypherParser.T__1);
            this.state = 461;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
            case 1:
                {
                this.state = 460;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 464;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
            case 1:
                {
                this.state = 463;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 467;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
            case 1:
                {
                this.state = 466;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 470;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===48 || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 1180673) !== 0)) {
                {
                this.state = 469;
                this.kU_DefaultArg();
                }
            }

            this.state = 482;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 473;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 472;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 475;
                    this.match(CypherParser.T__3);
                    this.state = 477;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 476;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 479;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 484;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
            }
            this.state = 486;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 485;
                this.match(CypherParser.SP);
                }
            }

            this.state = 488;
            this.match(CypherParser.T__2);
            this.state = 489;
            this.match(CypherParser.SP);
            this.state = 490;
            this.match(CypherParser.AS);
            this.state = 491;
            this.match(CypherParser.SP);
            this.state = 492;
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
            this.state = 494;
            this.oC_SymbolicName();
            this.state = 505;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 496;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 495;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 498;
                    this.match(CypherParser.T__3);
                    this.state = 500;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 499;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 502;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 507;
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
            this.state = 508;
            this.oC_SymbolicName();
            this.state = 510;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 509;
                this.match(CypherParser.SP);
                }
            }

            this.state = 512;
            this.match(CypherParser.T__5);
            this.state = 513;
            this.match(CypherParser.T__4);
            this.state = 515;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 514;
                this.match(CypherParser.SP);
                }
            }

            this.state = 517;
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
            this.state = 552;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 519;
                this.match(CypherParser.T__6);
                this.state = 521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 520;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 523;
                this.match(CypherParser.StringLiteral);
                this.state = 534;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4 || _la===142) {
                    {
                    {
                    this.state = 525;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 524;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 527;
                    this.match(CypherParser.T__3);
                    this.state = 529;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 528;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 531;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 536;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 537;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 538;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 539;
                this.match(CypherParser.GLOB);
                this.state = 541;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 540;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 543;
                this.match(CypherParser.T__1);
                this.state = 545;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 544;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 547;
                this.match(CypherParser.StringLiteral);
                this.state = 549;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 548;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 551;
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
            this.state = 554;
            this.kU_ParsingOption();
            this.state = 565;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 556;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 555;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 558;
                    this.match(CypherParser.T__3);
                    this.state = 560;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 559;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 562;
                    this.kU_ParsingOption();
                    }
                    }
                }
                this.state = 567;
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
            this.state = 568;
            this.oC_SymbolicName();
            this.state = 570;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 569;
                this.match(CypherParser.SP);
                }
            }

            this.state = 572;
            this.match(CypherParser.T__4);
            this.state = 574;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 573;
                this.match(CypherParser.SP);
                }
            }

            this.state = 576;
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
            this.state = 584;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 578;
                this.kU_CreateNodeTable();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 579;
                this.kU_CreateRelTable();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 580;
                this.kU_CreateRelTableGroup();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 581;
                this.kU_CreateRdfGraph();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 582;
                this.kU_DropTable();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 583;
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
            this.state = 586;
            this.match(CypherParser.CREATE);
            this.state = 587;
            this.match(CypherParser.SP);
            this.state = 588;
            this.match(CypherParser.NODE);
            this.state = 589;
            this.match(CypherParser.SP);
            this.state = 590;
            this.match(CypherParser.TABLE);
            this.state = 591;
            this.match(CypherParser.SP);
            this.state = 592;
            this.oC_SchemaName();
            this.state = 594;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 593;
                this.match(CypherParser.SP);
                }
            }

            this.state = 596;
            this.match(CypherParser.T__1);
            this.state = 598;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 597;
                this.match(CypherParser.SP);
                }
            }

            this.state = 600;
            this.kU_PropertyDefinitions();
            this.state = 602;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 601;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 604;
            this.match(CypherParser.T__3);
            this.state = 606;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 605;
                this.match(CypherParser.SP);
                }
            }

            this.state = 608;
            this.kU_CreateNodeConstraint();
            }
            this.state = 611;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 610;
                this.match(CypherParser.SP);
                }
            }

            this.state = 613;
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
            this.state = 615;
            this.match(CypherParser.CREATE);
            this.state = 616;
            this.match(CypherParser.SP);
            this.state = 617;
            this.match(CypherParser.REL);
            this.state = 618;
            this.match(CypherParser.SP);
            this.state = 619;
            this.match(CypherParser.TABLE);
            this.state = 620;
            this.match(CypherParser.SP);
            this.state = 621;
            this.oC_SchemaName();
            this.state = 623;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 622;
                this.match(CypherParser.SP);
                }
            }

            this.state = 625;
            this.match(CypherParser.T__1);
            this.state = 627;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 626;
                this.match(CypherParser.SP);
                }
            }

            this.state = 629;
            this.kU_RelTableConnection();
            this.state = 631;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 630;
                this.match(CypherParser.SP);
                }
            }

            this.state = 641;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
            case 1:
                {
                this.state = 633;
                this.match(CypherParser.T__3);
                this.state = 635;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 634;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 637;
                this.kU_PropertyDefinitions();
                this.state = 639;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 638;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 651;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===4) {
                {
                this.state = 643;
                this.match(CypherParser.T__3);
                this.state = 645;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 644;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 647;
                this.oC_SymbolicName();
                this.state = 649;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 648;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 653;
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
            this.state = 655;
            this.match(CypherParser.CREATE);
            this.state = 656;
            this.match(CypherParser.SP);
            this.state = 657;
            this.match(CypherParser.REL);
            this.state = 658;
            this.match(CypherParser.SP);
            this.state = 659;
            this.match(CypherParser.TABLE);
            this.state = 660;
            this.match(CypherParser.SP);
            this.state = 661;
            this.match(CypherParser.GROUP);
            this.state = 662;
            this.match(CypherParser.SP);
            this.state = 663;
            this.oC_SchemaName();
            this.state = 665;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
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
            if (_la===142) {
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
            if (_la===142) {
                {
                this.state = 672;
                this.match(CypherParser.SP);
                }
            }

            this.state = 680;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 675;
                    this.match(CypherParser.T__3);
                    this.state = 677;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 676;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 679;
                    this.kU_RelTableConnection();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 682;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 77, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 685;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 684;
                this.match(CypherParser.SP);
                }
            }

            this.state = 695;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
            case 1:
                {
                this.state = 687;
                this.match(CypherParser.T__3);
                this.state = 689;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 688;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 691;
                this.kU_PropertyDefinitions();
                this.state = 693;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 692;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 705;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===4) {
                {
                this.state = 697;
                this.match(CypherParser.T__3);
                this.state = 699;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 698;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 701;
                this.oC_SymbolicName();
                this.state = 703;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 702;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 707;
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
            this.state = 709;
            this.match(CypherParser.FROM);
            this.state = 710;
            this.match(CypherParser.SP);
            this.state = 711;
            this.oC_SchemaName();
            this.state = 712;
            this.match(CypherParser.SP);
            this.state = 713;
            this.match(CypherParser.TO);
            this.state = 714;
            this.match(CypherParser.SP);
            this.state = 715;
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
            this.state = 717;
            this.match(CypherParser.CREATE);
            this.state = 718;
            this.match(CypherParser.SP);
            this.state = 719;
            this.match(CypherParser.RDF);
            this.state = 720;
            this.match(CypherParser.SP);
            this.state = 721;
            this.match(CypherParser.GRAPH);
            this.state = 722;
            this.match(CypherParser.SP);
            this.state = 723;
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
            this.state = 725;
            this.match(CypherParser.DROP);
            this.state = 726;
            this.match(CypherParser.SP);
            this.state = 727;
            this.match(CypherParser.TABLE);
            this.state = 728;
            this.match(CypherParser.SP);
            this.state = 729;
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
            this.state = 731;
            this.match(CypherParser.ALTER);
            this.state = 732;
            this.match(CypherParser.SP);
            this.state = 733;
            this.match(CypherParser.TABLE);
            this.state = 734;
            this.match(CypherParser.SP);
            this.state = 735;
            this.oC_SchemaName();
            this.state = 736;
            this.match(CypherParser.SP);
            this.state = 737;
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
            this.state = 743;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 739;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 740;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 741;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 742;
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
            this.state = 745;
            this.match(CypherParser.ADD);
            this.state = 746;
            this.match(CypherParser.SP);
            this.state = 747;
            this.oC_PropertyKeyName();
            this.state = 748;
            this.match(CypherParser.SP);
            this.state = 749;
            this.kU_DataType(0);
            this.state = 754;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
            case 1:
                {
                this.state = 750;
                this.match(CypherParser.SP);
                this.state = 751;
                this.match(CypherParser.DEFAULT);
                this.state = 752;
                this.match(CypherParser.SP);
                this.state = 753;
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
            this.state = 756;
            this.match(CypherParser.DROP);
            this.state = 757;
            this.match(CypherParser.SP);
            this.state = 758;
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
            this.state = 760;
            this.match(CypherParser.RENAME);
            this.state = 761;
            this.match(CypherParser.SP);
            this.state = 762;
            this.match(CypherParser.TO);
            this.state = 763;
            this.match(CypherParser.SP);
            this.state = 764;
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
            this.state = 766;
            this.match(CypherParser.RENAME);
            this.state = 767;
            this.match(CypherParser.SP);
            this.state = 768;
            this.oC_PropertyKeyName();
            this.state = 769;
            this.match(CypherParser.SP);
            this.state = 770;
            this.match(CypherParser.TO);
            this.state = 771;
            this.match(CypherParser.SP);
            this.state = 772;
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
            this.state = 774;
            this.kU_PropertyDefinition();
            this.state = 785;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 89, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 776;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 775;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 778;
                    this.match(CypherParser.T__3);
                    this.state = 780;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 779;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 782;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 787;
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
            this.state = 788;
            this.oC_PropertyKeyName();
            this.state = 789;
            this.match(CypherParser.SP);
            this.state = 790;
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
            this.state = 792;
            this.match(CypherParser.PRIMARY);
            this.state = 793;
            this.match(CypherParser.SP);
            this.state = 794;
            this.match(CypherParser.KEY);
            this.state = 796;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 795;
                this.match(CypherParser.SP);
                }
            }

            this.state = 798;
            this.match(CypherParser.T__1);
            this.state = 800;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 799;
                this.match(CypherParser.SP);
                }
            }

            this.state = 802;
            this.oC_PropertyKeyName();
            this.state = 804;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 803;
                this.match(CypherParser.SP);
                }
            }

            this.state = 806;
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
            this.state = 860;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
            case 1:
                {
                this.state = 809;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 810;
                this.match(CypherParser.UNION);
                this.state = 812;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 811;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 814;
                this.match(CypherParser.T__1);
                this.state = 816;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 815;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 818;
                this.kU_PropertyDefinitions();
                this.state = 820;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 819;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 822;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                {
                this.state = 824;
                this.oC_SymbolicName();
                this.state = 826;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 825;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 828;
                this.match(CypherParser.T__1);
                this.state = 830;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 829;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 832;
                this.kU_PropertyDefinitions();
                this.state = 834;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 833;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 836;
                this.match(CypherParser.T__2);
                }
                break;
            case 4:
                {
                this.state = 838;
                this.oC_SymbolicName();
                this.state = 840;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 839;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 842;
                this.match(CypherParser.T__1);
                this.state = 844;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 843;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 846;
                this.kU_DataType(0);
                this.state = 848;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 847;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 850;
                this.match(CypherParser.T__3);
                this.state = 852;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 851;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 854;
                this.kU_DataType(0);
                this.state = 856;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 855;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 858;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 866;
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
                    this.state = 862;
                    if (!(this.precpred(this._ctx, 4))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                    }
                    this.state = 863;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 868;
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
            this.state = 869;
            this.kU_ListIdentifier();
            this.state = 873;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 870;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 875;
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
            this.state = 876;
            this.match(CypherParser.T__6);
            this.state = 878;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===130) {
                {
                this.state = 877;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 880;
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
            this.state = 884;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 882;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 883;
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
            this.state = 886;
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
            this.state = 888;
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
            this.state = 904;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 890;
                this.match(CypherParser.BEGIN);
                this.state = 891;
                this.match(CypherParser.SP);
                this.state = 892;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 893;
                this.match(CypherParser.BEGIN);
                this.state = 894;
                this.match(CypherParser.SP);
                this.state = 895;
                this.match(CypherParser.TRANSACTION);
                this.state = 896;
                this.match(CypherParser.SP);
                this.state = 897;
                this.match(CypherParser.READ);
                this.state = 898;
                this.match(CypherParser.SP);
                this.state = 899;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 900;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 901;
                this.match(CypherParser.COMMIT_SKIP_CHECKPOINT);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 902;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 903;
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
    public oC_Query(): OC_QueryContext {
        let localctx: OC_QueryContext = new OC_QueryContext(this._ctx, this.state);
        this.enterRule(localctx, 74, CypherParser.RULE_oC_Query);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 906;
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
        this.enterRule(localctx, 76, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 929;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 908;
                this.oC_SingleQuery();
                this.state = 915;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 910;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 909;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 912;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 917;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 922;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 918;
                        this.oC_Return();
                        this.state = 920;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 919;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 924;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 113, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 926;
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
        this.enterRule(localctx, 78, CypherParser.RULE_oC_Union);
        let _la: number;
        try {
            this.state = 943;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 931;
                this.match(CypherParser.UNION);
                this.state = 932;
                this.match(CypherParser.SP);
                this.state = 933;
                this.match(CypherParser.ALL);
                this.state = 935;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 934;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 937;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 938;
                this.match(CypherParser.UNION);
                this.state = 940;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 939;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 942;
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
        this.enterRule(localctx, 80, CypherParser.RULE_oC_SingleQuery);
        try {
            this.state = 947;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 945;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 946;
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
        this.enterRule(localctx, 82, CypherParser.RULE_oC_SinglePartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 994;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 955;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===47 || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 29) !== 0)) {
                    {
                    {
                    this.state = 949;
                    this.oC_ReadingClause();
                    this.state = 951;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 950;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 957;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 958;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 965;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===47 || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 29) !== 0)) {
                    {
                    {
                    this.state = 959;
                    this.oC_ReadingClause();
                    this.state = 961;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 960;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 967;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 968;
                this.oC_UpdatingClause();
                this.state = 975;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 124, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 970;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 969;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 972;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 977;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 124, this._ctx);
                }
                this.state = 982;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
                case 1:
                    {
                    this.state = 979;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 978;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 981;
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
                this.state = 988;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 984;
                    this.oC_ReadingClause();
                    this.state = 986;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
                    case 1:
                        {
                        this.state = 985;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    }
                    }
                    this.state = 990;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===47 || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 29) !== 0));
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
        this.enterRule(localctx, 84, CypherParser.RULE_oC_MultiPartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1000;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 996;
                    this.kU_QueryPart();
                    this.state = 998;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 997;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1002;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 131, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1004;
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
        this.enterRule(localctx, 86, CypherParser.RULE_kU_QueryPart);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1012;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===47 || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 29) !== 0)) {
                {
                {
                this.state = 1006;
                this.oC_ReadingClause();
                this.state = 1008;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1007;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1014;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1021;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 59) !== 0)) {
                {
                {
                this.state = 1015;
                this.oC_UpdatingClause();
                this.state = 1017;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
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
        this.enterRule(localctx, 88, CypherParser.RULE_oC_UpdatingClause);
        try {
            this.state = 1030;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1026;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1027;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1028;
                this.oC_Set();
                }
                break;
            case CypherParser.DETACH:
            case CypherParser.DELETE:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1029;
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
        this.enterRule(localctx, 90, CypherParser.RULE_oC_ReadingClause);
        try {
            this.state = 1036;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.OPTIONAL:
            case CypherParser.MATCH:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1032;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1033;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1034;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1035;
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
        this.enterRule(localctx, 92, CypherParser.RULE_kU_LoadFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1038;
            this.match(CypherParser.LOAD);
            this.state = 1056;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
            case 1:
                {
                this.state = 1039;
                this.match(CypherParser.SP);
                this.state = 1040;
                this.match(CypherParser.WITH);
                this.state = 1041;
                this.match(CypherParser.SP);
                this.state = 1042;
                this.match(CypherParser.HEADERS);
                this.state = 1044;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1043;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1046;
                this.match(CypherParser.T__1);
                this.state = 1048;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1047;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1050;
                this.kU_PropertyDefinitions();
                this.state = 1052;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1051;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1054;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1058;
            this.match(CypherParser.SP);
            this.state = 1059;
            this.match(CypherParser.FROM);
            this.state = 1060;
            this.match(CypherParser.SP);
            this.state = 1061;
            this.kU_FilePaths();
            this.state = 1075;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
            case 1:
                {
                this.state = 1063;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1062;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1065;
                this.match(CypherParser.T__1);
                this.state = 1067;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1066;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1069;
                this.kU_ParsingOptions();
                this.state = 1071;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1070;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1073;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1081;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
            case 1:
                {
                this.state = 1078;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1077;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1080;
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
        this.enterRule(localctx, 94, CypherParser.RULE_kU_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1083;
            this.match(CypherParser.CALL);
            this.state = 1084;
            this.match(CypherParser.SP);
            this.state = 1085;
            this.oC_FunctionInvocation();
            this.state = 1090;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
            case 1:
                {
                this.state = 1087;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1086;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1089;
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
        this.enterRule(localctx, 96, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1094;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===83) {
                {
                this.state = 1092;
                this.match(CypherParser.OPTIONAL);
                this.state = 1093;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1096;
            this.match(CypherParser.MATCH);
            this.state = 1098;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1097;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1100;
            this.oC_Pattern();
            this.state = 1105;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
            case 1:
                {
                this.state = 1102;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1101;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1104;
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
        this.enterRule(localctx, 98, CypherParser.RULE_oC_Unwind);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1107;
            this.match(CypherParser.UNWIND);
            this.state = 1109;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1108;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1111;
            this.oC_Expression();
            this.state = 1112;
            this.match(CypherParser.SP);
            this.state = 1113;
            this.match(CypherParser.AS);
            this.state = 1114;
            this.match(CypherParser.SP);
            this.state = 1115;
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
        this.enterRule(localctx, 100, CypherParser.RULE_oC_Create);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1117;
            this.match(CypherParser.CREATE);
            this.state = 1119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1118;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1121;
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
        this.enterRule(localctx, 102, CypherParser.RULE_oC_Merge);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1123;
            this.match(CypherParser.MERGE);
            this.state = 1125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1124;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1127;
            this.oC_Pattern();
            this.state = 1132;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1128;
                    this.match(CypherParser.SP);
                    this.state = 1129;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1134;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
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
        this.enterRule(localctx, 104, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1145;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1135;
                this.match(CypherParser.ON);
                this.state = 1136;
                this.match(CypherParser.SP);
                this.state = 1137;
                this.match(CypherParser.MATCH);
                this.state = 1138;
                this.match(CypherParser.SP);
                this.state = 1139;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1140;
                this.match(CypherParser.ON);
                this.state = 1141;
                this.match(CypherParser.SP);
                this.state = 1142;
                this.match(CypherParser.CREATE);
                this.state = 1143;
                this.match(CypherParser.SP);
                this.state = 1144;
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
        this.enterRule(localctx, 106, CypherParser.RULE_oC_Set);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1147;
            this.match(CypherParser.SET);
            this.state = 1149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1148;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1151;
            this.oC_SetItem();
            this.state = 1162;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1153;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1152;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1155;
                    this.match(CypherParser.T__3);
                    this.state = 1157;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1156;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1159;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1164;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
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
        this.enterRule(localctx, 108, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1165;
            this.oC_PropertyExpression();
            this.state = 1167;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1166;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1169;
            this.match(CypherParser.T__4);
            this.state = 1171;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1170;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1173;
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
        this.enterRule(localctx, 110, CypherParser.RULE_oC_Delete);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===90) {
                {
                this.state = 1175;
                this.match(CypherParser.DETACH);
                this.state = 1176;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1179;
            this.match(CypherParser.DELETE);
            this.state = 1181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1180;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1183;
            this.oC_Expression();
            this.state = 1194;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 169, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1185;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1184;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1187;
                    this.match(CypherParser.T__3);
                    this.state = 1189;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1188;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1191;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1196;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 169, this._ctx);
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
        this.enterRule(localctx, 112, CypherParser.RULE_oC_With);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1197;
            this.match(CypherParser.WITH);
            this.state = 1198;
            this.oC_ProjectionBody();
            this.state = 1203;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 171, this._ctx) ) {
            case 1:
                {
                this.state = 1200;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
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
    public oC_Return(): OC_ReturnContext {
        let localctx: OC_ReturnContext = new OC_ReturnContext(this._ctx, this.state);
        this.enterRule(localctx, 114, CypherParser.RULE_oC_Return);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1205;
            this.match(CypherParser.RETURN);
            this.state = 1206;
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
        this.enterRule(localctx, 116, CypherParser.RULE_oC_ProjectionBody);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1212;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
            case 1:
                {
                this.state = 1209;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1208;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1211;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1214;
            this.match(CypherParser.SP);
            this.state = 1215;
            this.oC_ProjectionItems();
            this.state = 1218;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
            case 1:
                {
                this.state = 1216;
                this.match(CypherParser.SP);
                this.state = 1217;
                this.oC_Order();
                }
                break;
            }
            this.state = 1222;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
            case 1:
                {
                this.state = 1220;
                this.match(CypherParser.SP);
                this.state = 1221;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1226;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
            case 1:
                {
                this.state = 1224;
                this.match(CypherParser.SP);
                this.state = 1225;
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
        this.enterRule(localctx, 118, CypherParser.RULE_oC_ProjectionItems);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1256;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1228;
                this.match(CypherParser.STAR);
                this.state = 1239;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1230;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 1229;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1232;
                        this.match(CypherParser.T__3);
                        this.state = 1234;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 1233;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1236;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1241;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
                }
                }
                }
                break;
            case CypherParser.T__1:
            case CypherParser.T__6:
            case CypherParser.T__8:
            case CypherParser.T__26:
            case CypherParser.COMMENT:
            case CypherParser.NOT:
            case CypherParser.MINUS:
            case CypherParser.NULL_:
            case CypherParser.TRUE:
            case CypherParser.FALSE:
            case CypherParser.COUNT:
            case CypherParser.EXISTS:
            case CypherParser.CASE:
            case CypherParser.StringLiteral:
            case CypherParser.DecimalInteger:
            case CypherParser.HexLetter:
            case CypherParser.RegularDecimalReal:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1242;
                this.oC_ProjectionItem();
                this.state = 1253;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1244;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
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
                        if (_la===142) {
                            {
                            this.state = 1247;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1250;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1255;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
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
        this.enterRule(localctx, 120, CypherParser.RULE_oC_ProjectionItem);
        try {
            this.state = 1265;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1258;
                this.oC_Expression();
                this.state = 1259;
                this.match(CypherParser.SP);
                this.state = 1260;
                this.match(CypherParser.AS);
                this.state = 1261;
                this.match(CypherParser.SP);
                this.state = 1262;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1264;
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
        this.enterRule(localctx, 122, CypherParser.RULE_oC_Order);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1267;
            this.match(CypherParser.ORDER);
            this.state = 1268;
            this.match(CypherParser.SP);
            this.state = 1269;
            this.match(CypherParser.BY);
            this.state = 1270;
            this.match(CypherParser.SP);
            this.state = 1271;
            this.oC_SortItem();
            this.state = 1279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 1272;
                this.match(CypherParser.T__3);
                this.state = 1274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1273;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1276;
                this.oC_SortItem();
                }
                }
                this.state = 1281;
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
        this.enterRule(localctx, 124, CypherParser.RULE_oC_Skip);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1282;
            this.match(CypherParser.L_SKIP);
            this.state = 1283;
            this.match(CypherParser.SP);
            this.state = 1284;
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
        this.enterRule(localctx, 126, CypherParser.RULE_oC_Limit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1286;
            this.match(CypherParser.LIMIT);
            this.state = 1287;
            this.match(CypherParser.SP);
            this.state = 1288;
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
        this.enterRule(localctx, 128, CypherParser.RULE_oC_SortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1290;
            this.oC_Expression();
            this.state = 1295;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
            case 1:
                {
                this.state = 1292;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1291;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1294;
                _la = this._input.LA(1);
                if(!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 15) !== 0))) {
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
        this.enterRule(localctx, 130, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1297;
            this.match(CypherParser.WHERE);
            this.state = 1298;
            this.match(CypherParser.SP);
            this.state = 1299;
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
        this.enterRule(localctx, 132, CypherParser.RULE_oC_Pattern);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1301;
            this.oC_PatternPart();
            this.state = 1312;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1303;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
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
                    if (_la===142) {
                        {
                        this.state = 1306;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1309;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1314;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
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
        this.enterRule(localctx, 134, CypherParser.RULE_oC_PatternPart);
        let _la: number;
        try {
            this.state = 1326;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.COUNT:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1315;
                this.oC_Variable();
                this.state = 1317;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1316;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1319;
                this.match(CypherParser.T__4);
                this.state = 1321;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1320;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1323;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1325;
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
        this.enterRule(localctx, 136, CypherParser.RULE_oC_AnonymousPatternPart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1328;
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
        this.enterRule(localctx, 138, CypherParser.RULE_oC_PatternElement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1344;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1330;
                this.oC_NodePattern();
                this.state = 1337;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 196, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1332;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 1331;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1334;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1339;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 196, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1340;
                this.match(CypherParser.T__1);
                this.state = 1341;
                this.oC_PatternElement();
                this.state = 1342;
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
        this.enterRule(localctx, 140, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1346;
            this.match(CypherParser.T__1);
            this.state = 1348;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1347;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1354;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===48 || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 1180673) !== 0)) {
                {
                this.state = 1350;
                this.oC_Variable();
                this.state = 1352;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1351;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1360;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===6) {
                {
                this.state = 1356;
                this.oC_NodeLabels();
                this.state = 1358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1357;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1366;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1362;
                this.kU_Properties();
                this.state = 1364;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1363;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1368;
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
        this.enterRule(localctx, 142, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1370;
            this.oC_RelationshipPattern();
            this.state = 1372;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1371;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1374;
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
        this.enterRule(localctx, 144, CypherParser.RULE_oC_RelationshipPattern);
        let _la: number;
        try {
            this.state = 1420;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1376;
                this.oC_LeftArrowHead();
                this.state = 1378;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1377;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1380;
                this.oC_Dash();
                this.state = 1382;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
                case 1:
                    {
                    this.state = 1381;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1385;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1384;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1388;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1387;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1390;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1392;
                this.oC_Dash();
                this.state = 1394;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
                case 1:
                    {
                    this.state = 1393;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1396;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1399;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1402;
                this.oC_Dash();
                this.state = 1404;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1403;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1406;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1408;
                this.oC_Dash();
                this.state = 1410;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 214, this._ctx) ) {
                case 1:
                    {
                    this.state = 1409;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1412;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1416;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1415;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1418;
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
        this.enterRule(localctx, 146, CypherParser.RULE_oC_RelationshipDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1422;
            this.match(CypherParser.T__6);
            this.state = 1424;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1423;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1430;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===48 || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 1180673) !== 0)) {
                {
                this.state = 1426;
                this.oC_Variable();
                this.state = 1428;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1427;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1436;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===6) {
                {
                this.state = 1432;
                this.oC_RelationshipTypes();
                this.state = 1434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1433;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1442;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===95) {
                {
                this.state = 1438;
                this.oC_RangeLiteral();
                this.state = 1440;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1439;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1448;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1444;
                this.kU_Properties();
                this.state = 1446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1445;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1450;
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
        this.enterRule(localctx, 148, CypherParser.RULE_kU_Properties);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1452;
            this.match(CypherParser.T__8);
            this.state = 1454;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1453;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1489;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===48 || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 1180673) !== 0)) {
                {
                this.state = 1456;
                this.oC_PropertyKeyName();
                this.state = 1458;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1457;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1460;
                this.match(CypherParser.T__5);
                this.state = 1462;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1461;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1464;
                this.oC_Expression();
                this.state = 1466;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1465;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1486;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 1468;
                    this.match(CypherParser.T__3);
                    this.state = 1470;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1469;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1472;
                    this.oC_PropertyKeyName();
                    this.state = 1474;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1473;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1476;
                    this.match(CypherParser.T__5);
                    this.state = 1478;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1477;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1480;
                    this.oC_Expression();
                    this.state = 1482;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1481;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1488;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1491;
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
        this.enterRule(localctx, 150, CypherParser.RULE_oC_RelationshipTypes);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1493;
            this.match(CypherParser.T__5);
            this.state = 1495;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1494;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1497;
            this.oC_RelTypeName();
            this.state = 1511;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1499;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1498;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1501;
                    this.match(CypherParser.T__10);
                    this.state = 1503;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===6) {
                        {
                        this.state = 1502;
                        this.match(CypherParser.T__5);
                        }
                    }

                    this.state = 1506;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1505;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1508;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1513;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
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
        this.enterRule(localctx, 152, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1514;
            this.oC_NodeLabel();
            this.state = 1521;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 243, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1516;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1515;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1518;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1523;
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
    public oC_NodeLabel(): OC_NodeLabelContext {
        let localctx: OC_NodeLabelContext = new OC_NodeLabelContext(this._ctx, this.state);
        this.enterRule(localctx, 154, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1524;
            this.match(CypherParser.T__5);
            this.state = 1526;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1525;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1528;
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
        this.enterRule(localctx, 156, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1530;
            this.match(CypherParser.STAR);
            this.state = 1532;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
            case 1:
                {
                this.state = 1531;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1538;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.SHORTEST:
                {
                this.state = 1534;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.ALL:
                {
                this.state = 1535;
                this.match(CypherParser.ALL);
                this.state = 1536;
                this.match(CypherParser.SP);
                this.state = 1537;
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
            this.state = 1541;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
            case 1:
                {
                this.state = 1540;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1557;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
            case 1:
                {
                this.state = 1544;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===130) {
                    {
                    this.state = 1543;
                    this.oC_LowerBound();
                    }
                }

                this.state = 1547;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1546;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1549;
                this.match(CypherParser.T__11);
                this.state = 1551;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 250, this._ctx) ) {
                case 1:
                    {
                    this.state = 1550;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1554;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===130) {
                    {
                    this.state = 1553;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 1556;
                this.oC_IntegerLiteral();
                }
                break;
            }
            this.state = 1563;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
            case 1:
                {
                this.state = 1560;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1559;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1562;
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
        this.enterRule(localctx, 158, CypherParser.RULE_kU_RecursiveRelationshipComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1565;
            this.match(CypherParser.T__1);
            this.state = 1567;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1566;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1569;
            this.oC_Variable();
            this.state = 1571;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1570;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1573;
            this.match(CypherParser.T__3);
            this.state = 1575;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1574;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1577;
            this.oC_Variable();
            this.state = 1586;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
            case 1:
                {
                this.state = 1579;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1578;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1581;
                this.match(CypherParser.T__10);
                this.state = 1583;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1582;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1585;
                this.oC_Where();
                }
                break;
            }
            this.state = 1607;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===142) {
                {
                this.state = 1589;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1588;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1591;
                this.match(CypherParser.T__10);
                this.state = 1593;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1592;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1595;
                this.kU_IntermediateRelProjectionItems();
                this.state = 1597;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1596;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1599;
                this.match(CypherParser.T__3);
                this.state = 1601;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1600;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1603;
                this.kU_IntermediateNodeProjectionItems();
                this.state = 1605;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1604;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1609;
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
        this.enterRule(localctx, 160, CypherParser.RULE_kU_IntermediateNodeProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1611;
            this.match(CypherParser.T__8);
            this.state = 1613;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 267, this._ctx) ) {
            case 1:
                {
                this.state = 1612;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1616;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || _la===48 || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 528646145) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 9741) !== 0)) {
                {
                this.state = 1615;
                this.oC_ProjectionItems();
                }
            }

            this.state = 1619;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1618;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1621;
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
        this.enterRule(localctx, 162, CypherParser.RULE_kU_IntermediateRelProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1623;
            this.match(CypherParser.T__8);
            this.state = 1625;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
            case 1:
                {
                this.state = 1624;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1628;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || _la===48 || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 528646145) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 9741) !== 0)) {
                {
                this.state = 1627;
                this.oC_ProjectionItems();
                }
            }

            this.state = 1631;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1630;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1633;
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
        this.enterRule(localctx, 164, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1635;
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
        this.enterRule(localctx, 166, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1637;
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
        this.enterRule(localctx, 168, CypherParser.RULE_oC_LabelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1639;
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
        this.enterRule(localctx, 170, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1641;
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
        this.enterRule(localctx, 172, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1643;
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
        this.enterRule(localctx, 174, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1645;
            this.oC_XorExpression();
            this.state = 1652;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 273, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1646;
                    this.match(CypherParser.SP);
                    this.state = 1647;
                    this.match(CypherParser.OR);
                    this.state = 1648;
                    this.match(CypherParser.SP);
                    this.state = 1649;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 1654;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 273, this._ctx);
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
        this.enterRule(localctx, 176, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1655;
            this.oC_AndExpression();
            this.state = 1662;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 274, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1656;
                    this.match(CypherParser.SP);
                    this.state = 1657;
                    this.match(CypherParser.XOR);
                    this.state = 1658;
                    this.match(CypherParser.SP);
                    this.state = 1659;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 1664;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 274, this._ctx);
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
        this.enterRule(localctx, 178, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1665;
            this.oC_NotExpression();
            this.state = 1672;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 275, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1666;
                    this.match(CypherParser.SP);
                    this.state = 1667;
                    this.match(CypherParser.AND);
                    this.state = 1668;
                    this.match(CypherParser.SP);
                    this.state = 1669;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 1674;
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
    public oC_NotExpression(): OC_NotExpressionContext {
        let localctx: OC_NotExpressionContext = new OC_NotExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 180, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1679;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===110) {
                {
                this.state = 1675;
                this.match(CypherParser.NOT);
                this.state = 1677;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1676;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1681;
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
        this.enterRule(localctx, 182, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1731;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 288, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1683;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1693;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 280, this._ctx) ) {
                case 1:
                    {
                    this.state = 1685;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1684;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1687;
                    this.kU_ComparisonOperator();
                    this.state = 1689;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1688;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1691;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1695;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 1697;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1696;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1699;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 1701;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1700;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1703;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1707;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1709;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1708;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1711;
                this.kU_ComparisonOperator();
                this.state = 1713;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1712;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1715;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 1725;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1717;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 1716;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1719;
                        this.kU_ComparisonOperator();
                        this.state = 1721;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 1720;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1723;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1727;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 287, this._ctx);
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
        this.enterRule(localctx, 184, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1733;
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
        this.enterRule(localctx, 186, CypherParser.RULE_kU_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1735;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 1746;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 291, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1737;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1736;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1739;
                    this.match(CypherParser.T__10);
                    this.state = 1741;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1740;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1743;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 1748;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 291, this._ctx);
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
        this.enterRule(localctx, 188, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1749;
            this.kU_BitShiftOperatorExpression();
            this.state = 1760;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 294, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1751;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1750;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1753;
                    this.match(CypherParser.T__17);
                    this.state = 1755;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1754;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1757;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 1762;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 294, this._ctx);
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
        this.enterRule(localctx, 190, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1763;
            this.oC_AddOrSubtractExpression();
            this.state = 1775;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 297, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1765;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1764;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1767;
                    this.kU_BitShiftOperator();
                    this.state = 1769;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1768;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1771;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 1777;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 297, this._ctx);
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
        this.enterRule(localctx, 192, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1778;
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
        this.enterRule(localctx, 194, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1780;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 1792;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 300, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1782;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1781;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1784;
                    this.kU_AddOrSubtractOperator();
                    this.state = 1786;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1785;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1788;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 1794;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 300, this._ctx);
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
        this.enterRule(localctx, 196, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1795;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===112)) {
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
        this.enterRule(localctx, 198, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1797;
            this.oC_PowerOfExpression();
            this.state = 1809;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 303, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1799;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1798;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1801;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 1803;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1802;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1805;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 1811;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 303, this._ctx);
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
        this.enterRule(localctx, 200, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1812;
            _la = this._input.LA(1);
            if(!(_la===22 || _la===23 || _la===95)) {
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
        this.enterRule(localctx, 202, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1814;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 1825;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 306, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1816;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1815;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1818;
                    this.match(CypherParser.T__23);
                    this.state = 1820;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1819;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1822;
                    this.oC_UnaryAddSubtractOrFactorialExpression();
                    }
                    }
                }
                this.state = 1827;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 306, this._ctx);
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
        this.enterRule(localctx, 204, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1832;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===112) {
                {
                this.state = 1828;
                this.match(CypherParser.MINUS);
                this.state = 1830;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1829;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1834;
            this.oC_StringListNullOperatorExpression();
            this.state = 1839;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 310, this._ctx) ) {
            case 1:
                {
                this.state = 1836;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1835;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1838;
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
        this.enterRule(localctx, 206, CypherParser.RULE_oC_StringListNullOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1841;
            this.oC_PropertyOrLabelsExpression();
            this.state = 1849;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 312, this._ctx) ) {
            case 1:
                {
                this.state = 1842;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 1844;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 1843;
                    this.oC_ListOperatorExpression();
                    }
                    }
                    this.state = 1846;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===7);
                }
                break;
            case 3:
                {
                this.state = 1848;
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
        this.enterRule(localctx, 208, CypherParser.RULE_oC_ListOperatorExpression);
        try {
            this.state = 1853;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 313, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1851;
                this.kU_ListExtractOperatorExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1852;
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
        this.enterRule(localctx, 210, CypherParser.RULE_kU_ListExtractOperatorExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1855;
            this.match(CypherParser.T__6);
            this.state = 1856;
            this.oC_Expression();
            this.state = 1857;
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
        this.enterRule(localctx, 212, CypherParser.RULE_kU_ListSliceOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1859;
            this.match(CypherParser.T__6);
            this.state = 1861;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || _la===48 || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 2553560837) !== 0)) {
                {
                this.state = 1860;
                this.oC_Expression();
                }
            }

            this.state = 1863;
            this.match(CypherParser.T__5);
            this.state = 1865;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || _la===48 || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 2553560837) !== 0)) {
                {
                this.state = 1864;
                this.oC_Expression();
                }
            }

            this.state = 1867;
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
        this.enterRule(localctx, 214, CypherParser.RULE_oC_StringOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1880;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 316, this._ctx) ) {
            case 1:
                {
                this.state = 1869;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 1870;
                this.match(CypherParser.SP);
                this.state = 1871;
                this.match(CypherParser.STARTS);
                this.state = 1872;
                this.match(CypherParser.SP);
                this.state = 1873;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 1874;
                this.match(CypherParser.SP);
                this.state = 1875;
                this.match(CypherParser.ENDS);
                this.state = 1876;
                this.match(CypherParser.SP);
                this.state = 1877;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 1878;
                this.match(CypherParser.SP);
                this.state = 1879;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 1883;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1882;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1885;
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
        this.enterRule(localctx, 216, CypherParser.RULE_oC_RegularExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1888;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1887;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1890;
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
        this.enterRule(localctx, 218, CypherParser.RULE_oC_NullOperatorExpression);
        try {
            this.state = 1902;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 319, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1892;
                this.match(CypherParser.SP);
                this.state = 1893;
                this.match(CypherParser.IS);
                this.state = 1894;
                this.match(CypherParser.SP);
                this.state = 1895;
                this.match(CypherParser.NULL_);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1896;
                this.match(CypherParser.SP);
                this.state = 1897;
                this.match(CypherParser.IS);
                this.state = 1898;
                this.match(CypherParser.SP);
                this.state = 1899;
                this.match(CypherParser.NOT);
                this.state = 1900;
                this.match(CypherParser.SP);
                this.state = 1901;
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
        this.enterRule(localctx, 220, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1904;
            this.oC_Atom();
            this.state = 1911;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 321, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1906;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1905;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1908;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 1913;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 321, this._ctx);
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
        this.enterRule(localctx, 222, CypherParser.RULE_oC_Atom);
        try {
            this.state = 1923;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 322, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1914;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1915;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1916;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1917;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1918;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1919;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 1920;
                this.oC_ExistSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 1921;
                this.kU_CountSubquery();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 1922;
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
        this.enterRule(localctx, 224, CypherParser.RULE_oC_Literal);
        try {
            this.state = 1931;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1925;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1926;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.TRUE:
            case CypherParser.FALSE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1927;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL_:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1928;
                this.match(CypherParser.NULL_);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1929;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1930;
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
        this.enterRule(localctx, 226, CypherParser.RULE_oC_BooleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1933;
            _la = this._input.LA(1);
            if(!(_la===119 || _la===120)) {
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
        this.enterRule(localctx, 228, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1935;
            this.match(CypherParser.T__6);
            this.state = 1937;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1936;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1952;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || _la===48 || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 2553560837) !== 0)) {
                {
                this.state = 1939;
                this.oC_Expression();
                this.state = 1941;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1940;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1949;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 1943;
                    this.kU_ListEntry();
                    this.state = 1945;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 1944;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1951;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1954;
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
        this.enterRule(localctx, 230, CypherParser.RULE_kU_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1956;
            this.match(CypherParser.T__3);
            this.state = 1958;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 329, this._ctx) ) {
            case 1:
                {
                this.state = 1957;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1961;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || _la===48 || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 2553560837) !== 0)) {
                {
                this.state = 1960;
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
        this.enterRule(localctx, 232, CypherParser.RULE_kU_StructLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1963;
            this.match(CypherParser.T__8);
            this.state = 1965;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1964;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1967;
            this.kU_StructField();
            this.state = 1969;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1968;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1981;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 1971;
                this.match(CypherParser.T__3);
                this.state = 1973;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1972;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1975;
                this.kU_StructField();
                this.state = 1977;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 1976;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1983;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1984;
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
        this.enterRule(localctx, 234, CypherParser.RULE_kU_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1988;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.COUNT:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1986;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 1987;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1991;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1990;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1993;
            this.match(CypherParser.T__5);
            this.state = 1995;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 1994;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1997;
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
        this.enterRule(localctx, 236, CypherParser.RULE_oC_ParenthesizedExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1999;
            this.match(CypherParser.T__1);
            this.state = 2001;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2000;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2003;
            this.oC_Expression();
            this.state = 2005;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2004;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2007;
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
        this.enterRule(localctx, 238, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2057;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 353, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2009;
                this.match(CypherParser.COUNT);
                this.state = 2011;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2010;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2013;
                this.match(CypherParser.T__1);
                this.state = 2015;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2014;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2017;
                this.match(CypherParser.STAR);
                this.state = 2019;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2018;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2021;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2022;
                this.oC_FunctionName();
                this.state = 2024;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2023;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2026;
                this.match(CypherParser.T__1);
                this.state = 2028;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2027;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2034;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===94) {
                    {
                    this.state = 2030;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2032;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 2031;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2053;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134218372) !== 0) || _la===48 || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 2553560837) !== 0)) {
                    {
                    this.state = 2036;
                    this.kU_FunctionParameter();
                    this.state = 2038;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 2037;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2050;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===4) {
                        {
                        {
                        this.state = 2040;
                        this.match(CypherParser.T__3);
                        this.state = 2042;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 2041;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2044;
                        this.kU_FunctionParameter();
                        this.state = 2046;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 2045;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2052;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2055;
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
        this.enterRule(localctx, 240, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2059;
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
        this.enterRule(localctx, 242, CypherParser.RULE_kU_FunctionParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2070;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 356, this._ctx) ) {
            case 1:
                {
                this.state = 2061;
                this.oC_SymbolicName();
                this.state = 2063;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2062;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2065;
                this.match(CypherParser.T__5);
                this.state = 2066;
                this.match(CypherParser.T__4);
                this.state = 2068;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2067;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 2072;
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
        this.enterRule(localctx, 244, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2074;
            this.oC_NodePattern();
            this.state = 2079;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2076;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===142) {
                        {
                        this.state = 2075;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2078;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2081;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 358, this._ctx);
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
        this.enterRule(localctx, 246, CypherParser.RULE_oC_ExistSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2083;
            this.match(CypherParser.EXISTS);
            this.state = 2085;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2084;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2087;
            this.match(CypherParser.T__8);
            this.state = 2089;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2088;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2091;
            this.match(CypherParser.MATCH);
            this.state = 2093;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2092;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2095;
            this.oC_Pattern();
            this.state = 2100;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 363, this._ctx) ) {
            case 1:
                {
                this.state = 2097;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2096;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2099;
                this.oC_Where();
                }
                break;
            }
            this.state = 2103;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2102;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2105;
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
        this.enterRule(localctx, 248, CypherParser.RULE_kU_CountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2107;
            this.match(CypherParser.COUNT);
            this.state = 2109;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2108;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2111;
            this.match(CypherParser.T__8);
            this.state = 2113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2112;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2115;
            this.match(CypherParser.MATCH);
            this.state = 2117;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2116;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2119;
            this.oC_Pattern();
            this.state = 2124;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 369, this._ctx) ) {
            case 1:
                {
                this.state = 2121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2120;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2123;
                this.oC_Where();
                }
                break;
            }
            this.state = 2127;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2126;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2129;
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
        this.enterRule(localctx, 250, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2131;
            this.match(CypherParser.T__25);
            this.state = 2133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2132;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2137;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.COUNT:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2135;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2136;
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
        this.enterRule(localctx, 252, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2161;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 378, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2139;
                this.match(CypherParser.CASE);
                this.state = 2144;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2141;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 2140;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2143;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2146;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 374, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2148;
                this.match(CypherParser.CASE);
                this.state = 2150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2149;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2152;
                this.oC_Expression();
                this.state = 2157;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2154;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===142) {
                            {
                            this.state = 2153;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2156;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2159;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 377, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2171;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 381, this._ctx) ) {
            case 1:
                {
                this.state = 2164;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2163;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2166;
                this.match(CypherParser.ELSE);
                this.state = 2168;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===142) {
                    {
                    this.state = 2167;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2170;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2173;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2176;
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
        this.enterRule(localctx, 254, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2178;
            this.match(CypherParser.WHEN);
            this.state = 2180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2179;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2182;
            this.oC_Expression();
            this.state = 2184;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2183;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2186;
            this.match(CypherParser.THEN);
            this.state = 2188;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2187;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2190;
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
        this.enterRule(localctx, 256, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2192;
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
        this.enterRule(localctx, 258, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 2196;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2194;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2195;
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
        this.enterRule(localctx, 260, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2198;
            this.match(CypherParser.T__26);
            this.state = 2201;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.COMMENT:
            case CypherParser.COUNT:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2199;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2200;
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
        this.enterRule(localctx, 262, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2203;
            this.oC_Atom();
            this.state = 2205;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 2204;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2207;
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
        this.enterRule(localctx, 264, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2209;
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
        this.enterRule(localctx, 266, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2211;
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
        this.enterRule(localctx, 268, CypherParser.RULE_oC_DoubleLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2213;
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
        this.enterRule(localctx, 270, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2215;
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
        this.enterRule(localctx, 272, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 2222;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2217;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2218;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2220;
                this.match(CypherParser.HexLetter);
                }
                break;
            case CypherParser.COMMENT:
            case CypherParser.COUNT:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2221;
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
        this.enterRule(localctx, 274, CypherParser.RULE_kU_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2224;
            _la = this._input.LA(1);
            if(!(_la===48 || _la===121)) {
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
        this.enterRule(localctx, 276, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2226;
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
        this.enterRule(localctx, 278, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2228;
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
        this.enterRule(localctx, 280, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2230;
            _la = this._input.LA(1);
            if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 2047) !== 0) || _la===112)) {
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
        4,1,145,2233,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,1,0,3,0,284,8,0,
        1,0,3,0,287,8,0,1,0,3,0,290,8,0,1,0,1,0,3,0,294,8,0,1,0,3,0,297,
        8,0,1,0,3,0,300,8,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        3,1,313,8,1,1,2,1,2,1,2,1,2,3,2,319,8,2,1,2,1,2,3,2,323,8,2,1,2,
        1,2,3,2,327,8,2,1,2,1,2,3,2,331,8,2,1,2,3,2,334,8,2,1,2,1,2,1,2,
        1,2,3,2,340,8,2,1,2,1,2,3,2,344,8,2,1,2,1,2,3,2,348,8,2,1,2,1,2,
        3,2,352,8,2,1,3,1,3,3,3,356,8,3,1,3,1,3,3,3,360,8,3,1,3,5,3,363,
        8,3,10,3,12,3,366,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,376,8,
        4,1,4,1,4,3,4,380,8,4,1,4,1,4,3,4,384,8,4,1,4,5,4,387,8,4,10,4,12,
        4,390,9,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,402,8,5,1,
        5,1,5,3,5,406,8,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,414,8,5,1,5,1,5,3,
        5,418,8,5,1,5,1,5,3,5,422,8,5,1,5,1,5,3,5,426,8,5,1,6,1,6,1,6,1,
        6,3,6,432,8,6,1,6,1,6,3,6,436,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,
        7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,458,8,8,1,
        8,1,8,3,8,462,8,8,1,8,3,8,465,8,8,1,8,3,8,468,8,8,1,8,3,8,471,8,
        8,1,8,3,8,474,8,8,1,8,1,8,3,8,478,8,8,1,8,5,8,481,8,8,10,8,12,8,
        484,9,8,1,8,3,8,487,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,3,9,497,
        8,9,1,9,1,9,3,9,501,8,9,1,9,5,9,504,8,9,10,9,12,9,507,9,9,1,10,1,
        10,3,10,511,8,10,1,10,1,10,1,10,3,10,516,8,10,1,10,1,10,1,11,1,11,
        3,11,522,8,11,1,11,1,11,3,11,526,8,11,1,11,1,11,3,11,530,8,11,1,
        11,5,11,533,8,11,10,11,12,11,536,9,11,1,11,1,11,1,11,1,11,3,11,542,
        8,11,1,11,1,11,3,11,546,8,11,1,11,1,11,3,11,550,8,11,1,11,3,11,553,
        8,11,1,12,1,12,3,12,557,8,12,1,12,1,12,3,12,561,8,12,1,12,5,12,564,
        8,12,10,12,12,12,567,9,12,1,13,1,13,3,13,571,8,13,1,13,1,13,3,13,
        575,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,585,8,14,1,
        15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,595,8,15,1,15,1,15,3,
        15,599,8,15,1,15,1,15,3,15,603,8,15,1,15,1,15,3,15,607,8,15,1,15,
        1,15,1,15,3,15,612,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,
        1,16,1,16,3,16,624,8,16,1,16,1,16,3,16,628,8,16,1,16,1,16,3,16,632,
        8,16,1,16,1,16,3,16,636,8,16,1,16,1,16,3,16,640,8,16,3,16,642,8,
        16,1,16,1,16,3,16,646,8,16,1,16,1,16,3,16,650,8,16,3,16,652,8,16,
        1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,
        666,8,17,1,17,1,17,3,17,670,8,17,1,17,1,17,3,17,674,8,17,1,17,1,
        17,3,17,678,8,17,1,17,4,17,681,8,17,11,17,12,17,682,1,17,3,17,686,
        8,17,1,17,1,17,3,17,690,8,17,1,17,1,17,3,17,694,8,17,3,17,696,8,
        17,1,17,1,17,3,17,700,8,17,1,17,1,17,3,17,704,8,17,3,17,706,8,17,
        1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,
        1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,
        1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,3,22,744,8,22,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,755,8,23,1,24,
        1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,
        1,26,1,26,1,26,1,26,1,27,1,27,3,27,777,8,27,1,27,1,27,3,27,781,8,
        27,1,27,5,27,784,8,27,10,27,12,27,787,9,27,1,28,1,28,1,28,1,28,1,
        29,1,29,1,29,1,29,3,29,797,8,29,1,29,1,29,3,29,801,8,29,1,29,1,29,
        3,29,805,8,29,1,29,1,29,1,30,1,30,1,30,1,30,3,30,813,8,30,1,30,1,
        30,3,30,817,8,30,1,30,1,30,3,30,821,8,30,1,30,1,30,1,30,1,30,3,30,
        827,8,30,1,30,1,30,3,30,831,8,30,1,30,1,30,3,30,835,8,30,1,30,1,
        30,1,30,1,30,3,30,841,8,30,1,30,1,30,3,30,845,8,30,1,30,1,30,3,30,
        849,8,30,1,30,1,30,3,30,853,8,30,1,30,1,30,3,30,857,8,30,1,30,1,
        30,3,30,861,8,30,1,30,1,30,5,30,865,8,30,10,30,12,30,868,9,30,1,
        31,1,31,5,31,872,8,31,10,31,12,31,875,9,31,1,32,1,32,3,32,879,8,
        32,1,32,1,32,1,33,1,33,3,33,885,8,33,1,34,1,34,1,35,1,35,1,36,1,
        36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,
        36,905,8,36,1,37,1,37,1,38,1,38,3,38,911,8,38,1,38,5,38,914,8,38,
        10,38,12,38,917,9,38,1,38,1,38,3,38,921,8,38,4,38,923,8,38,11,38,
        12,38,924,1,38,1,38,1,38,3,38,930,8,38,1,39,1,39,1,39,1,39,3,39,
        936,8,39,1,39,1,39,1,39,3,39,941,8,39,1,39,3,39,944,8,39,1,40,1,
        40,3,40,948,8,40,1,41,1,41,3,41,952,8,41,5,41,954,8,41,10,41,12,
        41,957,9,41,1,41,1,41,1,41,3,41,962,8,41,5,41,964,8,41,10,41,12,
        41,967,9,41,1,41,1,41,3,41,971,8,41,1,41,5,41,974,8,41,10,41,12,
        41,977,9,41,1,41,3,41,980,8,41,1,41,3,41,983,8,41,1,41,1,41,3,41,
        987,8,41,4,41,989,8,41,11,41,12,41,990,1,41,1,41,3,41,995,8,41,1,
        42,1,42,3,42,999,8,42,4,42,1001,8,42,11,42,12,42,1002,1,42,1,42,
        1,43,1,43,3,43,1009,8,43,5,43,1011,8,43,10,43,12,43,1014,9,43,1,
        43,1,43,3,43,1018,8,43,5,43,1020,8,43,10,43,12,43,1023,9,43,1,43,
        1,43,1,44,1,44,1,44,1,44,3,44,1031,8,44,1,45,1,45,1,45,1,45,3,45,
        1037,8,45,1,46,1,46,1,46,1,46,1,46,1,46,3,46,1045,8,46,1,46,1,46,
        3,46,1049,8,46,1,46,1,46,3,46,1053,8,46,1,46,1,46,3,46,1057,8,46,
        1,46,1,46,1,46,1,46,1,46,3,46,1064,8,46,1,46,1,46,3,46,1068,8,46,
        1,46,1,46,3,46,1072,8,46,1,46,1,46,3,46,1076,8,46,1,46,3,46,1079,
        8,46,1,46,3,46,1082,8,46,1,47,1,47,1,47,1,47,3,47,1088,8,47,1,47,
        3,47,1091,8,47,1,48,1,48,3,48,1095,8,48,1,48,1,48,3,48,1099,8,48,
        1,48,1,48,3,48,1103,8,48,1,48,3,48,1106,8,48,1,49,1,49,3,49,1110,
        8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,50,1,50,3,50,1120,8,50,1,50,
        1,50,1,51,1,51,3,51,1126,8,51,1,51,1,51,1,51,5,51,1131,8,51,10,51,
        12,51,1134,9,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,
        3,52,1146,8,52,1,53,1,53,3,53,1150,8,53,1,53,1,53,3,53,1154,8,53,
        1,53,1,53,3,53,1158,8,53,1,53,5,53,1161,8,53,10,53,12,53,1164,9,
        53,1,54,1,54,3,54,1168,8,54,1,54,1,54,3,54,1172,8,54,1,54,1,54,1,
        55,1,55,3,55,1178,8,55,1,55,1,55,3,55,1182,8,55,1,55,1,55,3,55,1186,
        8,55,1,55,1,55,3,55,1190,8,55,1,55,5,55,1193,8,55,10,55,12,55,1196,
        9,55,1,56,1,56,1,56,3,56,1201,8,56,1,56,3,56,1204,8,56,1,57,1,57,
        1,57,1,58,3,58,1210,8,58,1,58,3,58,1213,8,58,1,58,1,58,1,58,1,58,
        3,58,1219,8,58,1,58,1,58,3,58,1223,8,58,1,58,1,58,3,58,1227,8,58,
        1,59,1,59,3,59,1231,8,59,1,59,1,59,3,59,1235,8,59,1,59,5,59,1238,
        8,59,10,59,12,59,1241,9,59,1,59,1,59,3,59,1245,8,59,1,59,1,59,3,
        59,1249,8,59,1,59,5,59,1252,8,59,10,59,12,59,1255,9,59,3,59,1257,
        8,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,1266,8,60,1,61,1,61,
        1,61,1,61,1,61,1,61,1,61,3,61,1275,8,61,1,61,5,61,1278,8,61,10,61,
        12,61,1281,9,61,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,64,1,64,
        3,64,1293,8,64,1,64,3,64,1296,8,64,1,65,1,65,1,65,1,65,1,66,1,66,
        3,66,1304,8,66,1,66,1,66,3,66,1308,8,66,1,66,5,66,1311,8,66,10,66,
        12,66,1314,9,66,1,67,1,67,3,67,1318,8,67,1,67,1,67,3,67,1322,8,67,
        1,67,1,67,1,67,3,67,1327,8,67,1,68,1,68,1,69,1,69,3,69,1333,8,69,
        1,69,5,69,1336,8,69,10,69,12,69,1339,9,69,1,69,1,69,1,69,1,69,3,
        69,1345,8,69,1,70,1,70,3,70,1349,8,70,1,70,1,70,3,70,1353,8,70,3,
        70,1355,8,70,1,70,1,70,3,70,1359,8,70,3,70,1361,8,70,1,70,1,70,3,
        70,1365,8,70,3,70,1367,8,70,1,70,1,70,1,71,1,71,3,71,1373,8,71,1,
        71,1,71,1,72,1,72,3,72,1379,8,72,1,72,1,72,3,72,1383,8,72,1,72,3,
        72,1386,8,72,1,72,3,72,1389,8,72,1,72,1,72,1,72,1,72,3,72,1395,8,
        72,1,72,3,72,1398,8,72,1,72,3,72,1401,8,72,1,72,1,72,3,72,1405,8,
        72,1,72,1,72,1,72,1,72,3,72,1411,8,72,1,72,3,72,1414,8,72,1,72,3,
        72,1417,8,72,1,72,1,72,3,72,1421,8,72,1,73,1,73,3,73,1425,8,73,1,
        73,1,73,3,73,1429,8,73,3,73,1431,8,73,1,73,1,73,3,73,1435,8,73,3,
        73,1437,8,73,1,73,1,73,3,73,1441,8,73,3,73,1443,8,73,1,73,1,73,3,
        73,1447,8,73,3,73,1449,8,73,1,73,1,73,1,74,1,74,3,74,1455,8,74,1,
        74,1,74,3,74,1459,8,74,1,74,1,74,3,74,1463,8,74,1,74,1,74,3,74,1467,
        8,74,1,74,1,74,3,74,1471,8,74,1,74,1,74,3,74,1475,8,74,1,74,1,74,
        3,74,1479,8,74,1,74,1,74,3,74,1483,8,74,5,74,1485,8,74,10,74,12,
        74,1488,9,74,3,74,1490,8,74,1,74,1,74,1,75,1,75,3,75,1496,8,75,1,
        75,1,75,3,75,1500,8,75,1,75,1,75,3,75,1504,8,75,1,75,3,75,1507,8,
        75,1,75,5,75,1510,8,75,10,75,12,75,1513,9,75,1,76,1,76,3,76,1517,
        8,76,1,76,5,76,1520,8,76,10,76,12,76,1523,9,76,1,77,1,77,3,77,1527,
        8,77,1,77,1,77,1,78,1,78,3,78,1533,8,78,1,78,1,78,1,78,1,78,3,78,
        1539,8,78,1,78,3,78,1542,8,78,1,78,3,78,1545,8,78,1,78,3,78,1548,
        8,78,1,78,1,78,3,78,1552,8,78,1,78,3,78,1555,8,78,1,78,3,78,1558,
        8,78,1,78,3,78,1561,8,78,1,78,3,78,1564,8,78,1,79,1,79,3,79,1568,
        8,79,1,79,1,79,3,79,1572,8,79,1,79,1,79,3,79,1576,8,79,1,79,1,79,
        3,79,1580,8,79,1,79,1,79,3,79,1584,8,79,1,79,3,79,1587,8,79,1,79,
        3,79,1590,8,79,1,79,1,79,3,79,1594,8,79,1,79,1,79,3,79,1598,8,79,
        1,79,1,79,3,79,1602,8,79,1,79,1,79,3,79,1606,8,79,3,79,1608,8,79,
        1,79,1,79,1,80,1,80,3,80,1614,8,80,1,80,3,80,1617,8,80,1,80,3,80,
        1620,8,80,1,80,1,80,1,81,1,81,3,81,1626,8,81,1,81,3,81,1629,8,81,
        1,81,3,81,1632,8,81,1,81,1,81,1,82,1,82,1,83,1,83,1,84,1,84,1,85,
        1,85,1,86,1,86,1,87,1,87,1,87,1,87,1,87,5,87,1651,8,87,10,87,12,
        87,1654,9,87,1,88,1,88,1,88,1,88,1,88,5,88,1661,8,88,10,88,12,88,
        1664,9,88,1,89,1,89,1,89,1,89,1,89,5,89,1671,8,89,10,89,12,89,1674,
        9,89,1,90,1,90,3,90,1678,8,90,3,90,1680,8,90,1,90,1,90,1,91,1,91,
        3,91,1686,8,91,1,91,1,91,3,91,1690,8,91,1,91,1,91,3,91,1694,8,91,
        1,91,1,91,3,91,1698,8,91,1,91,1,91,3,91,1702,8,91,1,91,1,91,1,91,
        1,91,1,91,1,91,3,91,1710,8,91,1,91,1,91,3,91,1714,8,91,1,91,1,91,
        3,91,1718,8,91,1,91,1,91,3,91,1722,8,91,1,91,1,91,4,91,1726,8,91,
        11,91,12,91,1727,1,91,1,91,3,91,1732,8,91,1,92,1,92,1,93,1,93,3,
        93,1738,8,93,1,93,1,93,3,93,1742,8,93,1,93,5,93,1745,8,93,10,93,
        12,93,1748,9,93,1,94,1,94,3,94,1752,8,94,1,94,1,94,3,94,1756,8,94,
        1,94,5,94,1759,8,94,10,94,12,94,1762,9,94,1,95,1,95,3,95,1766,8,
        95,1,95,1,95,3,95,1770,8,95,1,95,1,95,5,95,1774,8,95,10,95,12,95,
        1777,9,95,1,96,1,96,1,97,1,97,3,97,1783,8,97,1,97,1,97,3,97,1787,
        8,97,1,97,1,97,5,97,1791,8,97,10,97,12,97,1794,9,97,1,98,1,98,1,
        99,1,99,3,99,1800,8,99,1,99,1,99,3,99,1804,8,99,1,99,1,99,5,99,1808,
        8,99,10,99,12,99,1811,9,99,1,100,1,100,1,101,1,101,3,101,1817,8,
        101,1,101,1,101,3,101,1821,8,101,1,101,5,101,1824,8,101,10,101,12,
        101,1827,9,101,1,102,1,102,3,102,1831,8,102,3,102,1833,8,102,1,102,
        1,102,3,102,1837,8,102,1,102,3,102,1840,8,102,1,103,1,103,1,103,
        4,103,1845,8,103,11,103,12,103,1846,1,103,3,103,1850,8,103,1,104,
        1,104,3,104,1854,8,104,1,105,1,105,1,105,1,105,1,106,1,106,3,106,
        1862,8,106,1,106,1,106,3,106,1866,8,106,1,106,1,106,1,107,1,107,
        1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,3,107,1881,
        8,107,1,107,3,107,1884,8,107,1,107,1,107,1,108,3,108,1889,8,108,
        1,108,1,108,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
        1,109,3,109,1903,8,109,1,110,1,110,3,110,1907,8,110,1,110,5,110,
        1910,8,110,10,110,12,110,1913,9,110,1,111,1,111,1,111,1,111,1,111,
        1,111,1,111,1,111,1,111,3,111,1924,8,111,1,112,1,112,1,112,1,112,
        1,112,1,112,3,112,1932,8,112,1,113,1,113,1,114,1,114,3,114,1938,
        8,114,1,114,1,114,3,114,1942,8,114,1,114,1,114,3,114,1946,8,114,
        5,114,1948,8,114,10,114,12,114,1951,9,114,3,114,1953,8,114,1,114,
        1,114,1,115,1,115,3,115,1959,8,115,1,115,3,115,1962,8,115,1,116,
        1,116,3,116,1966,8,116,1,116,1,116,3,116,1970,8,116,1,116,1,116,
        3,116,1974,8,116,1,116,1,116,3,116,1978,8,116,5,116,1980,8,116,10,
        116,12,116,1983,9,116,1,116,1,116,1,117,1,117,3,117,1989,8,117,1,
        117,3,117,1992,8,117,1,117,1,117,3,117,1996,8,117,1,117,1,117,1,
        118,1,118,3,118,2002,8,118,1,118,1,118,3,118,2006,8,118,1,118,1,
        118,1,119,1,119,3,119,2012,8,119,1,119,1,119,3,119,2016,8,119,1,
        119,1,119,3,119,2020,8,119,1,119,1,119,1,119,3,119,2025,8,119,1,
        119,1,119,3,119,2029,8,119,1,119,1,119,3,119,2033,8,119,3,119,2035,
        8,119,1,119,1,119,3,119,2039,8,119,1,119,1,119,3,119,2043,8,119,
        1,119,1,119,3,119,2047,8,119,5,119,2049,8,119,10,119,12,119,2052,
        9,119,3,119,2054,8,119,1,119,1,119,3,119,2058,8,119,1,120,1,120,
        1,121,1,121,3,121,2064,8,121,1,121,1,121,1,121,3,121,2069,8,121,
        3,121,2071,8,121,1,121,1,121,1,122,1,122,3,122,2077,8,122,1,122,
        4,122,2080,8,122,11,122,12,122,2081,1,123,1,123,3,123,2086,8,123,
        1,123,1,123,3,123,2090,8,123,1,123,1,123,3,123,2094,8,123,1,123,
        1,123,3,123,2098,8,123,1,123,3,123,2101,8,123,1,123,3,123,2104,8,
        123,1,123,1,123,1,124,1,124,3,124,2110,8,124,1,124,1,124,3,124,2114,
        8,124,1,124,1,124,3,124,2118,8,124,1,124,1,124,3,124,2122,8,124,
        1,124,3,124,2125,8,124,1,124,3,124,2128,8,124,1,124,1,124,1,125,
        1,125,3,125,2134,8,125,1,125,1,125,3,125,2138,8,125,1,126,1,126,
        3,126,2142,8,126,1,126,4,126,2145,8,126,11,126,12,126,2146,1,126,
        1,126,3,126,2151,8,126,1,126,1,126,3,126,2155,8,126,1,126,4,126,
        2158,8,126,11,126,12,126,2159,3,126,2162,8,126,1,126,3,126,2165,
        8,126,1,126,1,126,3,126,2169,8,126,1,126,3,126,2172,8,126,1,126,
        3,126,2175,8,126,1,126,1,126,1,127,1,127,3,127,2181,8,127,1,127,
        1,127,3,127,2185,8,127,1,127,1,127,3,127,2189,8,127,1,127,1,127,
        1,128,1,128,1,129,1,129,3,129,2197,8,129,1,130,1,130,1,130,3,130,
        2202,8,130,1,131,1,131,3,131,2206,8,131,1,131,1,131,1,132,1,132,
        1,133,1,133,1,134,1,134,1,135,1,135,1,136,1,136,1,136,1,136,1,136,
        3,136,2223,8,136,1,137,1,137,1,138,1,138,1,139,1,139,1,140,1,140,
        1,140,0,1,60,141,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
        36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
        80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
        118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,
        150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,
        182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,
        214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,
        246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,
        278,280,0,10,1,0,101,104,2,0,5,5,13,17,1,0,19,20,2,0,21,21,112,112,
        2,0,22,23,95,95,1,0,119,120,2,0,48,48,121,121,2,0,14,14,28,31,2,
        0,16,16,32,35,2,0,36,46,112,112,2527,0,283,1,0,0,0,2,312,1,0,0,0,
        4,314,1,0,0,0,6,353,1,0,0,0,8,367,1,0,0,0,10,397,1,0,0,0,12,427,
        1,0,0,0,14,439,1,0,0,0,16,451,1,0,0,0,18,494,1,0,0,0,20,508,1,0,
        0,0,22,552,1,0,0,0,24,554,1,0,0,0,26,568,1,0,0,0,28,584,1,0,0,0,
        30,586,1,0,0,0,32,615,1,0,0,0,34,655,1,0,0,0,36,709,1,0,0,0,38,717,
        1,0,0,0,40,725,1,0,0,0,42,731,1,0,0,0,44,743,1,0,0,0,46,745,1,0,
        0,0,48,756,1,0,0,0,50,760,1,0,0,0,52,766,1,0,0,0,54,774,1,0,0,0,
        56,788,1,0,0,0,58,792,1,0,0,0,60,860,1,0,0,0,62,869,1,0,0,0,64,876,
        1,0,0,0,66,884,1,0,0,0,68,886,1,0,0,0,70,888,1,0,0,0,72,904,1,0,
        0,0,74,906,1,0,0,0,76,929,1,0,0,0,78,943,1,0,0,0,80,947,1,0,0,0,
        82,994,1,0,0,0,84,1000,1,0,0,0,86,1012,1,0,0,0,88,1030,1,0,0,0,90,
        1036,1,0,0,0,92,1038,1,0,0,0,94,1083,1,0,0,0,96,1094,1,0,0,0,98,
        1107,1,0,0,0,100,1117,1,0,0,0,102,1123,1,0,0,0,104,1145,1,0,0,0,
        106,1147,1,0,0,0,108,1165,1,0,0,0,110,1177,1,0,0,0,112,1197,1,0,
        0,0,114,1205,1,0,0,0,116,1212,1,0,0,0,118,1256,1,0,0,0,120,1265,
        1,0,0,0,122,1267,1,0,0,0,124,1282,1,0,0,0,126,1286,1,0,0,0,128,1290,
        1,0,0,0,130,1297,1,0,0,0,132,1301,1,0,0,0,134,1326,1,0,0,0,136,1328,
        1,0,0,0,138,1344,1,0,0,0,140,1346,1,0,0,0,142,1370,1,0,0,0,144,1420,
        1,0,0,0,146,1422,1,0,0,0,148,1452,1,0,0,0,150,1493,1,0,0,0,152,1514,
        1,0,0,0,154,1524,1,0,0,0,156,1530,1,0,0,0,158,1565,1,0,0,0,160,1611,
        1,0,0,0,162,1623,1,0,0,0,164,1635,1,0,0,0,166,1637,1,0,0,0,168,1639,
        1,0,0,0,170,1641,1,0,0,0,172,1643,1,0,0,0,174,1645,1,0,0,0,176,1655,
        1,0,0,0,178,1665,1,0,0,0,180,1679,1,0,0,0,182,1731,1,0,0,0,184,1733,
        1,0,0,0,186,1735,1,0,0,0,188,1749,1,0,0,0,190,1763,1,0,0,0,192,1778,
        1,0,0,0,194,1780,1,0,0,0,196,1795,1,0,0,0,198,1797,1,0,0,0,200,1812,
        1,0,0,0,202,1814,1,0,0,0,204,1832,1,0,0,0,206,1841,1,0,0,0,208,1853,
        1,0,0,0,210,1855,1,0,0,0,212,1859,1,0,0,0,214,1880,1,0,0,0,216,1888,
        1,0,0,0,218,1902,1,0,0,0,220,1904,1,0,0,0,222,1923,1,0,0,0,224,1931,
        1,0,0,0,226,1933,1,0,0,0,228,1935,1,0,0,0,230,1956,1,0,0,0,232,1963,
        1,0,0,0,234,1988,1,0,0,0,236,1999,1,0,0,0,238,2057,1,0,0,0,240,2059,
        1,0,0,0,242,2070,1,0,0,0,244,2074,1,0,0,0,246,2083,1,0,0,0,248,2107,
        1,0,0,0,250,2131,1,0,0,0,252,2161,1,0,0,0,254,2178,1,0,0,0,256,2192,
        1,0,0,0,258,2196,1,0,0,0,260,2198,1,0,0,0,262,2203,1,0,0,0,264,2209,
        1,0,0,0,266,2211,1,0,0,0,268,2213,1,0,0,0,270,2215,1,0,0,0,272,2222,
        1,0,0,0,274,2224,1,0,0,0,276,2226,1,0,0,0,278,2228,1,0,0,0,280,2230,
        1,0,0,0,282,284,5,142,0,0,283,282,1,0,0,0,283,284,1,0,0,0,284,286,
        1,0,0,0,285,287,3,66,33,0,286,285,1,0,0,0,286,287,1,0,0,0,287,289,
        1,0,0,0,288,290,5,142,0,0,289,288,1,0,0,0,289,290,1,0,0,0,290,291,
        1,0,0,0,291,296,3,2,1,0,292,294,5,142,0,0,293,292,1,0,0,0,293,294,
        1,0,0,0,294,295,1,0,0,0,295,297,5,1,0,0,296,293,1,0,0,0,296,297,
        1,0,0,0,297,299,1,0,0,0,298,300,5,142,0,0,299,298,1,0,0,0,299,300,
        1,0,0,0,300,301,1,0,0,0,301,302,5,0,0,1,302,1,1,0,0,0,303,313,3,
        74,37,0,304,313,3,28,14,0,305,313,3,4,2,0,306,313,3,8,4,0,307,313,
        3,10,5,0,308,313,3,12,6,0,309,313,3,16,8,0,310,313,3,14,7,0,311,
        313,3,72,36,0,312,303,1,0,0,0,312,304,1,0,0,0,312,305,1,0,0,0,312,
        306,1,0,0,0,312,307,1,0,0,0,312,308,1,0,0,0,312,309,1,0,0,0,312,
        310,1,0,0,0,312,311,1,0,0,0,313,3,1,0,0,0,314,315,5,51,0,0,315,316,
        5,142,0,0,316,333,3,270,135,0,317,319,5,142,0,0,318,317,1,0,0,0,
        318,319,1,0,0,0,319,320,1,0,0,0,320,322,5,2,0,0,321,323,5,142,0,
        0,322,321,1,0,0,0,322,323,1,0,0,0,323,324,1,0,0,0,324,326,3,6,3,
        0,325,327,5,142,0,0,326,325,1,0,0,0,326,327,1,0,0,0,327,328,1,0,
        0,0,328,330,5,3,0,0,329,331,5,142,0,0,330,329,1,0,0,0,330,331,1,
        0,0,0,331,334,1,0,0,0,332,334,5,142,0,0,333,318,1,0,0,0,333,332,
        1,0,0,0,334,335,1,0,0,0,335,336,5,52,0,0,336,337,5,142,0,0,337,351,
        3,22,11,0,338,340,5,142,0,0,339,338,1,0,0,0,339,340,1,0,0,0,340,
        341,1,0,0,0,341,343,5,2,0,0,342,344,5,142,0,0,343,342,1,0,0,0,343,
        344,1,0,0,0,344,345,1,0,0,0,345,347,3,24,12,0,346,348,5,142,0,0,
        347,346,1,0,0,0,347,348,1,0,0,0,348,349,1,0,0,0,349,350,5,3,0,0,
        350,352,1,0,0,0,351,339,1,0,0,0,351,352,1,0,0,0,352,5,1,0,0,0,353,
        364,3,270,135,0,354,356,5,142,0,0,355,354,1,0,0,0,355,356,1,0,0,
        0,356,357,1,0,0,0,357,359,5,4,0,0,358,360,5,142,0,0,359,358,1,0,
        0,0,359,360,1,0,0,0,360,361,1,0,0,0,361,363,3,270,135,0,362,355,
        1,0,0,0,363,366,1,0,0,0,364,362,1,0,0,0,364,365,1,0,0,0,365,7,1,
        0,0,0,366,364,1,0,0,0,367,368,5,51,0,0,368,369,5,142,0,0,369,370,
        3,270,135,0,370,371,5,142,0,0,371,372,5,52,0,0,372,373,5,142,0,0,
        373,375,5,2,0,0,374,376,5,142,0,0,375,374,1,0,0,0,375,376,1,0,0,
        0,376,377,1,0,0,0,377,388,5,128,0,0,378,380,5,142,0,0,379,378,1,
        0,0,0,379,380,1,0,0,0,380,381,1,0,0,0,381,383,5,4,0,0,382,384,5,
        142,0,0,383,382,1,0,0,0,383,384,1,0,0,0,384,385,1,0,0,0,385,387,
        5,128,0,0,386,379,1,0,0,0,387,390,1,0,0,0,388,386,1,0,0,0,388,389,
        1,0,0,0,389,391,1,0,0,0,390,388,1,0,0,0,391,392,5,3,0,0,392,393,
        5,142,0,0,393,394,5,98,0,0,394,395,5,142,0,0,395,396,5,53,0,0,396,
        9,1,0,0,0,397,398,5,51,0,0,398,399,5,142,0,0,399,401,5,2,0,0,400,
        402,5,142,0,0,401,400,1,0,0,0,401,402,1,0,0,0,402,403,1,0,0,0,403,
        405,3,74,37,0,404,406,5,142,0,0,405,404,1,0,0,0,405,406,1,0,0,0,
        406,407,1,0,0,0,407,408,5,3,0,0,408,409,5,142,0,0,409,410,5,67,0,
        0,410,411,5,142,0,0,411,425,5,128,0,0,412,414,5,142,0,0,413,412,
        1,0,0,0,413,414,1,0,0,0,414,415,1,0,0,0,415,417,5,2,0,0,416,418,
        5,142,0,0,417,416,1,0,0,0,417,418,1,0,0,0,418,419,1,0,0,0,419,421,
        3,24,12,0,420,422,5,142,0,0,421,420,1,0,0,0,421,422,1,0,0,0,422,
        423,1,0,0,0,423,424,5,3,0,0,424,426,1,0,0,0,425,413,1,0,0,0,425,
        426,1,0,0,0,426,11,1,0,0,0,427,428,5,47,0,0,428,429,5,142,0,0,429,
        431,3,272,136,0,430,432,5,142,0,0,431,430,1,0,0,0,431,432,1,0,0,
        0,432,433,1,0,0,0,433,435,5,5,0,0,434,436,5,142,0,0,435,434,1,0,
        0,0,435,436,1,0,0,0,436,437,1,0,0,0,437,438,3,224,112,0,438,13,1,
        0,0,0,439,440,5,48,0,0,440,441,5,142,0,0,441,442,5,88,0,0,442,443,
        5,142,0,0,443,444,5,55,0,0,444,445,5,142,0,0,445,446,3,270,135,0,
        446,447,5,142,0,0,447,448,5,117,0,0,448,449,5,142,0,0,449,450,5,
        128,0,0,450,15,1,0,0,0,451,452,5,86,0,0,452,453,5,142,0,0,453,454,
        5,49,0,0,454,455,5,142,0,0,455,457,3,240,120,0,456,458,5,142,0,0,
        457,456,1,0,0,0,457,458,1,0,0,0,458,459,1,0,0,0,459,461,5,2,0,0,
        460,462,5,142,0,0,461,460,1,0,0,0,461,462,1,0,0,0,462,464,1,0,0,
        0,463,465,3,18,9,0,464,463,1,0,0,0,464,465,1,0,0,0,465,467,1,0,0,
        0,466,468,5,142,0,0,467,466,1,0,0,0,467,468,1,0,0,0,468,470,1,0,
        0,0,469,471,3,20,10,0,470,469,1,0,0,0,470,471,1,0,0,0,471,482,1,
        0,0,0,472,474,5,142,0,0,473,472,1,0,0,0,473,474,1,0,0,0,474,475,
        1,0,0,0,475,477,5,4,0,0,476,478,5,142,0,0,477,476,1,0,0,0,477,478,
        1,0,0,0,478,479,1,0,0,0,479,481,3,20,10,0,480,473,1,0,0,0,481,484,
        1,0,0,0,482,480,1,0,0,0,482,483,1,0,0,0,483,486,1,0,0,0,484,482,
        1,0,0,0,485,487,5,142,0,0,486,485,1,0,0,0,486,487,1,0,0,0,487,488,
        1,0,0,0,488,489,5,3,0,0,489,490,5,142,0,0,490,491,5,96,0,0,491,492,
        5,142,0,0,492,493,3,172,86,0,493,17,1,0,0,0,494,505,3,272,136,0,
        495,497,5,142,0,0,496,495,1,0,0,0,496,497,1,0,0,0,497,498,1,0,0,
        0,498,500,5,4,0,0,499,501,5,142,0,0,500,499,1,0,0,0,500,501,1,0,
        0,0,501,502,1,0,0,0,502,504,3,272,136,0,503,496,1,0,0,0,504,507,
        1,0,0,0,505,503,1,0,0,0,505,506,1,0,0,0,506,19,1,0,0,0,507,505,1,
        0,0,0,508,510,3,272,136,0,509,511,5,142,0,0,510,509,1,0,0,0,510,
        511,1,0,0,0,511,512,1,0,0,0,512,513,5,6,0,0,513,515,5,5,0,0,514,
        516,5,142,0,0,515,514,1,0,0,0,515,516,1,0,0,0,516,517,1,0,0,0,517,
        518,3,224,112,0,518,21,1,0,0,0,519,521,5,7,0,0,520,522,5,142,0,0,
        521,520,1,0,0,0,521,522,1,0,0,0,522,523,1,0,0,0,523,534,5,128,0,
        0,524,526,5,142,0,0,525,524,1,0,0,0,525,526,1,0,0,0,526,527,1,0,
        0,0,527,529,5,4,0,0,528,530,5,142,0,0,529,528,1,0,0,0,529,530,1,
        0,0,0,530,531,1,0,0,0,531,533,5,128,0,0,532,525,1,0,0,0,533,536,
        1,0,0,0,534,532,1,0,0,0,534,535,1,0,0,0,535,537,1,0,0,0,536,534,
        1,0,0,0,537,553,5,8,0,0,538,553,5,128,0,0,539,541,5,50,0,0,540,542,
        5,142,0,0,541,540,1,0,0,0,541,542,1,0,0,0,542,543,1,0,0,0,543,545,
        5,2,0,0,544,546,5,142,0,0,545,544,1,0,0,0,545,546,1,0,0,0,546,547,
        1,0,0,0,547,549,5,128,0,0,548,550,5,142,0,0,549,548,1,0,0,0,549,
        550,1,0,0,0,550,551,1,0,0,0,551,553,5,3,0,0,552,519,1,0,0,0,552,
        538,1,0,0,0,552,539,1,0,0,0,553,23,1,0,0,0,554,565,3,26,13,0,555,
        557,5,142,0,0,556,555,1,0,0,0,556,557,1,0,0,0,557,558,1,0,0,0,558,
        560,5,4,0,0,559,561,5,142,0,0,560,559,1,0,0,0,560,561,1,0,0,0,561,
        562,1,0,0,0,562,564,3,26,13,0,563,556,1,0,0,0,564,567,1,0,0,0,565,
        563,1,0,0,0,565,566,1,0,0,0,566,25,1,0,0,0,567,565,1,0,0,0,568,570,
        3,272,136,0,569,571,5,142,0,0,570,569,1,0,0,0,570,571,1,0,0,0,571,
        572,1,0,0,0,572,574,5,5,0,0,573,575,5,142,0,0,574,573,1,0,0,0,574,
        575,1,0,0,0,575,576,1,0,0,0,576,577,3,224,112,0,577,27,1,0,0,0,578,
        585,3,30,15,0,579,585,3,32,16,0,580,585,3,34,17,0,581,585,3,38,19,
        0,582,585,3,40,20,0,583,585,3,42,21,0,584,578,1,0,0,0,584,579,1,
        0,0,0,584,580,1,0,0,0,584,581,1,0,0,0,584,582,1,0,0,0,584,583,1,
        0,0,0,585,29,1,0,0,0,586,587,5,86,0,0,587,588,5,142,0,0,588,589,
        5,54,0,0,589,590,5,142,0,0,590,591,5,55,0,0,591,592,5,142,0,0,592,
        594,3,270,135,0,593,595,5,142,0,0,594,593,1,0,0,0,594,595,1,0,0,
        0,595,596,1,0,0,0,596,598,5,2,0,0,597,599,5,142,0,0,598,597,1,0,
        0,0,598,599,1,0,0,0,599,600,1,0,0,0,600,602,3,54,27,0,601,603,5,
        142,0,0,602,601,1,0,0,0,602,603,1,0,0,0,603,604,1,0,0,0,604,606,
        5,4,0,0,605,607,5,142,0,0,606,605,1,0,0,0,606,607,1,0,0,0,607,608,
        1,0,0,0,608,609,3,58,29,0,609,611,1,0,0,0,610,612,5,142,0,0,611,
        610,1,0,0,0,611,612,1,0,0,0,612,613,1,0,0,0,613,614,5,3,0,0,614,
        31,1,0,0,0,615,616,5,86,0,0,616,617,5,142,0,0,617,618,5,66,0,0,618,
        619,5,142,0,0,619,620,5,55,0,0,620,621,5,142,0,0,621,623,3,270,135,
        0,622,624,5,142,0,0,623,622,1,0,0,0,623,624,1,0,0,0,624,625,1,0,
        0,0,625,627,5,2,0,0,626,628,5,142,0,0,627,626,1,0,0,0,627,628,1,
        0,0,0,628,629,1,0,0,0,629,631,3,36,18,0,630,632,5,142,0,0,631,630,
        1,0,0,0,631,632,1,0,0,0,632,641,1,0,0,0,633,635,5,4,0,0,634,636,
        5,142,0,0,635,634,1,0,0,0,635,636,1,0,0,0,636,637,1,0,0,0,637,639,
        3,54,27,0,638,640,5,142,0,0,639,638,1,0,0,0,639,640,1,0,0,0,640,
        642,1,0,0,0,641,633,1,0,0,0,641,642,1,0,0,0,642,651,1,0,0,0,643,
        645,5,4,0,0,644,646,5,142,0,0,645,644,1,0,0,0,645,646,1,0,0,0,646,
        647,1,0,0,0,647,649,3,272,136,0,648,650,5,142,0,0,649,648,1,0,0,
        0,649,650,1,0,0,0,650,652,1,0,0,0,651,643,1,0,0,0,651,652,1,0,0,
        0,652,653,1,0,0,0,653,654,5,3,0,0,654,33,1,0,0,0,655,656,5,86,0,
        0,656,657,5,142,0,0,657,658,5,66,0,0,658,659,5,142,0,0,659,660,5,
        55,0,0,660,661,5,142,0,0,661,662,5,56,0,0,662,663,5,142,0,0,663,
        665,3,270,135,0,664,666,5,142,0,0,665,664,1,0,0,0,665,666,1,0,0,
        0,666,667,1,0,0,0,667,669,5,2,0,0,668,670,5,142,0,0,669,668,1,0,
        0,0,669,670,1,0,0,0,670,671,1,0,0,0,671,673,3,36,18,0,672,674,5,
        142,0,0,673,672,1,0,0,0,673,674,1,0,0,0,674,680,1,0,0,0,675,677,
        5,4,0,0,676,678,5,142,0,0,677,676,1,0,0,0,677,678,1,0,0,0,678,679,
        1,0,0,0,679,681,3,36,18,0,680,675,1,0,0,0,681,682,1,0,0,0,682,680,
        1,0,0,0,682,683,1,0,0,0,683,685,1,0,0,0,684,686,5,142,0,0,685,684,
        1,0,0,0,685,686,1,0,0,0,686,695,1,0,0,0,687,689,5,4,0,0,688,690,
        5,142,0,0,689,688,1,0,0,0,689,690,1,0,0,0,690,691,1,0,0,0,691,693,
        3,54,27,0,692,694,5,142,0,0,693,692,1,0,0,0,693,694,1,0,0,0,694,
        696,1,0,0,0,695,687,1,0,0,0,695,696,1,0,0,0,696,705,1,0,0,0,697,
        699,5,4,0,0,698,700,5,142,0,0,699,698,1,0,0,0,699,700,1,0,0,0,700,
        701,1,0,0,0,701,703,3,272,136,0,702,704,5,142,0,0,703,702,1,0,0,
        0,703,704,1,0,0,0,704,706,1,0,0,0,705,697,1,0,0,0,705,706,1,0,0,
        0,706,707,1,0,0,0,707,708,5,3,0,0,708,35,1,0,0,0,709,710,5,52,0,
        0,710,711,5,142,0,0,711,712,3,270,135,0,712,713,5,142,0,0,713,714,
        5,67,0,0,714,715,5,142,0,0,715,716,3,270,135,0,716,37,1,0,0,0,717,
        718,5,86,0,0,718,719,5,142,0,0,719,720,5,57,0,0,720,721,5,142,0,
        0,721,722,5,58,0,0,722,723,5,142,0,0,723,724,3,270,135,0,724,39,
        1,0,0,0,725,726,5,59,0,0,726,727,5,142,0,0,727,728,5,55,0,0,728,
        729,5,142,0,0,729,730,3,270,135,0,730,41,1,0,0,0,731,732,5,60,0,
        0,732,733,5,142,0,0,733,734,5,55,0,0,734,735,5,142,0,0,735,736,3,
        270,135,0,736,737,5,142,0,0,737,738,3,44,22,0,738,43,1,0,0,0,739,
        744,3,46,23,0,740,744,3,48,24,0,741,744,3,50,25,0,742,744,3,52,26,
        0,743,739,1,0,0,0,743,740,1,0,0,0,743,741,1,0,0,0,743,742,1,0,0,
        0,744,45,1,0,0,0,745,746,5,63,0,0,746,747,5,142,0,0,747,748,3,264,
        132,0,748,749,5,142,0,0,749,754,3,60,30,0,750,751,5,142,0,0,751,
        752,5,61,0,0,752,753,5,142,0,0,753,755,3,172,86,0,754,750,1,0,0,
        0,754,755,1,0,0,0,755,47,1,0,0,0,756,757,5,59,0,0,757,758,5,142,
        0,0,758,759,3,264,132,0,759,49,1,0,0,0,760,761,5,62,0,0,761,762,
        5,142,0,0,762,763,5,67,0,0,763,764,5,142,0,0,764,765,3,270,135,0,
        765,51,1,0,0,0,766,767,5,62,0,0,767,768,5,142,0,0,768,769,3,264,
        132,0,769,770,5,142,0,0,770,771,5,67,0,0,771,772,5,142,0,0,772,773,
        3,264,132,0,773,53,1,0,0,0,774,785,3,56,28,0,775,777,5,142,0,0,776,
        775,1,0,0,0,776,777,1,0,0,0,777,778,1,0,0,0,778,780,5,4,0,0,779,
        781,5,142,0,0,780,779,1,0,0,0,780,781,1,0,0,0,781,782,1,0,0,0,782,
        784,3,56,28,0,783,776,1,0,0,0,784,787,1,0,0,0,785,783,1,0,0,0,785,
        786,1,0,0,0,786,55,1,0,0,0,787,785,1,0,0,0,788,789,3,264,132,0,789,
        790,5,142,0,0,790,791,3,60,30,0,791,57,1,0,0,0,792,793,5,64,0,0,
        793,794,5,142,0,0,794,796,5,65,0,0,795,797,5,142,0,0,796,795,1,0,
        0,0,796,797,1,0,0,0,797,798,1,0,0,0,798,800,5,2,0,0,799,801,5,142,
        0,0,800,799,1,0,0,0,800,801,1,0,0,0,801,802,1,0,0,0,802,804,3,264,
        132,0,803,805,5,142,0,0,804,803,1,0,0,0,804,805,1,0,0,0,805,806,
        1,0,0,0,806,807,5,3,0,0,807,59,1,0,0,0,808,809,6,30,-1,0,809,861,
        3,272,136,0,810,812,5,79,0,0,811,813,5,142,0,0,812,811,1,0,0,0,812,
        813,1,0,0,0,813,814,1,0,0,0,814,816,5,2,0,0,815,817,5,142,0,0,816,
        815,1,0,0,0,816,817,1,0,0,0,817,818,1,0,0,0,818,820,3,54,27,0,819,
        821,5,142,0,0,820,819,1,0,0,0,820,821,1,0,0,0,821,822,1,0,0,0,822,
        823,5,3,0,0,823,861,1,0,0,0,824,826,3,272,136,0,825,827,5,142,0,
        0,826,825,1,0,0,0,826,827,1,0,0,0,827,828,1,0,0,0,828,830,5,2,0,
        0,829,831,5,142,0,0,830,829,1,0,0,0,830,831,1,0,0,0,831,832,1,0,
        0,0,832,834,3,54,27,0,833,835,5,142,0,0,834,833,1,0,0,0,834,835,
        1,0,0,0,835,836,1,0,0,0,836,837,5,3,0,0,837,861,1,0,0,0,838,840,
        3,272,136,0,839,841,5,142,0,0,840,839,1,0,0,0,840,841,1,0,0,0,841,
        842,1,0,0,0,842,844,5,2,0,0,843,845,5,142,0,0,844,843,1,0,0,0,844,
        845,1,0,0,0,845,846,1,0,0,0,846,848,3,60,30,0,847,849,5,142,0,0,
        848,847,1,0,0,0,848,849,1,0,0,0,849,850,1,0,0,0,850,852,5,4,0,0,
        851,853,5,142,0,0,852,851,1,0,0,0,852,853,1,0,0,0,853,854,1,0,0,
        0,854,856,3,60,30,0,855,857,5,142,0,0,856,855,1,0,0,0,856,857,1,
        0,0,0,857,858,1,0,0,0,858,859,5,3,0,0,859,861,1,0,0,0,860,808,1,
        0,0,0,860,810,1,0,0,0,860,824,1,0,0,0,860,838,1,0,0,0,861,866,1,
        0,0,0,862,863,10,4,0,0,863,865,3,62,31,0,864,862,1,0,0,0,865,868,
        1,0,0,0,866,864,1,0,0,0,866,867,1,0,0,0,867,61,1,0,0,0,868,866,1,
        0,0,0,869,873,3,64,32,0,870,872,3,64,32,0,871,870,1,0,0,0,872,875,
        1,0,0,0,873,871,1,0,0,0,873,874,1,0,0,0,874,63,1,0,0,0,875,873,1,
        0,0,0,876,878,5,7,0,0,877,879,3,266,133,0,878,877,1,0,0,0,878,879,
        1,0,0,0,879,880,1,0,0,0,880,881,5,8,0,0,881,65,1,0,0,0,882,885,3,
        68,34,0,883,885,3,70,35,0,884,882,1,0,0,0,884,883,1,0,0,0,885,67,
        1,0,0,0,886,887,5,68,0,0,887,69,1,0,0,0,888,889,5,69,0,0,889,71,
        1,0,0,0,890,891,5,70,0,0,891,892,5,142,0,0,892,905,5,71,0,0,893,
        894,5,70,0,0,894,895,5,142,0,0,895,896,5,71,0,0,896,897,5,142,0,
        0,897,898,5,72,0,0,898,899,5,142,0,0,899,905,5,73,0,0,900,905,5,
        75,0,0,901,905,5,76,0,0,902,905,5,77,0,0,903,905,5,78,0,0,904,890,
        1,0,0,0,904,893,1,0,0,0,904,900,1,0,0,0,904,901,1,0,0,0,904,902,
        1,0,0,0,904,903,1,0,0,0,905,73,1,0,0,0,906,907,3,76,38,0,907,75,
        1,0,0,0,908,915,3,80,40,0,909,911,5,142,0,0,910,909,1,0,0,0,910,
        911,1,0,0,0,911,912,1,0,0,0,912,914,3,78,39,0,913,910,1,0,0,0,914,
        917,1,0,0,0,915,913,1,0,0,0,915,916,1,0,0,0,916,930,1,0,0,0,917,
        915,1,0,0,0,918,920,3,114,57,0,919,921,5,142,0,0,920,919,1,0,0,0,
        920,921,1,0,0,0,921,923,1,0,0,0,922,918,1,0,0,0,923,924,1,0,0,0,
        924,922,1,0,0,0,924,925,1,0,0,0,925,926,1,0,0,0,926,927,3,80,40,
        0,927,928,6,38,-1,0,928,930,1,0,0,0,929,908,1,0,0,0,929,922,1,0,
        0,0,930,77,1,0,0,0,931,932,5,79,0,0,932,933,5,142,0,0,933,935,5,
        80,0,0,934,936,5,142,0,0,935,934,1,0,0,0,935,936,1,0,0,0,936,937,
        1,0,0,0,937,944,3,80,40,0,938,940,5,79,0,0,939,941,5,142,0,0,940,
        939,1,0,0,0,940,941,1,0,0,0,941,942,1,0,0,0,942,944,3,80,40,0,943,
        931,1,0,0,0,943,938,1,0,0,0,944,79,1,0,0,0,945,948,3,82,41,0,946,
        948,3,84,42,0,947,945,1,0,0,0,947,946,1,0,0,0,948,81,1,0,0,0,949,
        951,3,90,45,0,950,952,5,142,0,0,951,950,1,0,0,0,951,952,1,0,0,0,
        952,954,1,0,0,0,953,949,1,0,0,0,954,957,1,0,0,0,955,953,1,0,0,0,
        955,956,1,0,0,0,956,958,1,0,0,0,957,955,1,0,0,0,958,995,3,114,57,
        0,959,961,3,90,45,0,960,962,5,142,0,0,961,960,1,0,0,0,961,962,1,
        0,0,0,962,964,1,0,0,0,963,959,1,0,0,0,964,967,1,0,0,0,965,963,1,
        0,0,0,965,966,1,0,0,0,966,968,1,0,0,0,967,965,1,0,0,0,968,975,3,
        88,44,0,969,971,5,142,0,0,970,969,1,0,0,0,970,971,1,0,0,0,971,972,
        1,0,0,0,972,974,3,88,44,0,973,970,1,0,0,0,974,977,1,0,0,0,975,973,
        1,0,0,0,975,976,1,0,0,0,976,982,1,0,0,0,977,975,1,0,0,0,978,980,
        5,142,0,0,979,978,1,0,0,0,979,980,1,0,0,0,980,981,1,0,0,0,981,983,
        3,114,57,0,982,979,1,0,0,0,982,983,1,0,0,0,983,995,1,0,0,0,984,986,
        3,90,45,0,985,987,5,142,0,0,986,985,1,0,0,0,986,987,1,0,0,0,987,
        989,1,0,0,0,988,984,1,0,0,0,989,990,1,0,0,0,990,988,1,0,0,0,990,
        991,1,0,0,0,991,992,1,0,0,0,992,993,6,41,-1,0,993,995,1,0,0,0,994,
        955,1,0,0,0,994,965,1,0,0,0,994,988,1,0,0,0,995,83,1,0,0,0,996,998,
        3,86,43,0,997,999,5,142,0,0,998,997,1,0,0,0,998,999,1,0,0,0,999,
        1001,1,0,0,0,1000,996,1,0,0,0,1001,1002,1,0,0,0,1002,1000,1,0,0,
        0,1002,1003,1,0,0,0,1003,1004,1,0,0,0,1004,1005,3,82,41,0,1005,85,
        1,0,0,0,1006,1008,3,90,45,0,1007,1009,5,142,0,0,1008,1007,1,0,0,
        0,1008,1009,1,0,0,0,1009,1011,1,0,0,0,1010,1006,1,0,0,0,1011,1014,
        1,0,0,0,1012,1010,1,0,0,0,1012,1013,1,0,0,0,1013,1021,1,0,0,0,1014,
        1012,1,0,0,0,1015,1017,3,88,44,0,1016,1018,5,142,0,0,1017,1016,1,
        0,0,0,1017,1018,1,0,0,0,1018,1020,1,0,0,0,1019,1015,1,0,0,0,1020,
        1023,1,0,0,0,1021,1019,1,0,0,0,1021,1022,1,0,0,0,1022,1024,1,0,0,
        0,1023,1021,1,0,0,0,1024,1025,3,112,56,0,1025,87,1,0,0,0,1026,1031,
        3,100,50,0,1027,1031,3,102,51,0,1028,1031,3,106,53,0,1029,1031,3,
        110,55,0,1030,1026,1,0,0,0,1030,1027,1,0,0,0,1030,1028,1,0,0,0,1030,
        1029,1,0,0,0,1031,89,1,0,0,0,1032,1037,3,96,48,0,1033,1037,3,98,
        49,0,1034,1037,3,94,47,0,1035,1037,3,92,46,0,1036,1032,1,0,0,0,1036,
        1033,1,0,0,0,1036,1034,1,0,0,0,1036,1035,1,0,0,0,1037,91,1,0,0,0,
        1038,1056,5,81,0,0,1039,1040,5,142,0,0,1040,1041,5,92,0,0,1041,1042,
        5,142,0,0,1042,1044,5,82,0,0,1043,1045,5,142,0,0,1044,1043,1,0,0,
        0,1044,1045,1,0,0,0,1045,1046,1,0,0,0,1046,1048,5,2,0,0,1047,1049,
        5,142,0,0,1048,1047,1,0,0,0,1048,1049,1,0,0,0,1049,1050,1,0,0,0,
        1050,1052,3,54,27,0,1051,1053,5,142,0,0,1052,1051,1,0,0,0,1052,1053,
        1,0,0,0,1053,1054,1,0,0,0,1054,1055,5,3,0,0,1055,1057,1,0,0,0,1056,
        1039,1,0,0,0,1056,1057,1,0,0,0,1057,1058,1,0,0,0,1058,1059,5,142,
        0,0,1059,1060,5,52,0,0,1060,1061,5,142,0,0,1061,1075,3,22,11,0,1062,
        1064,5,142,0,0,1063,1062,1,0,0,0,1063,1064,1,0,0,0,1064,1065,1,0,
        0,0,1065,1067,5,2,0,0,1066,1068,5,142,0,0,1067,1066,1,0,0,0,1067,
        1068,1,0,0,0,1068,1069,1,0,0,0,1069,1071,3,24,12,0,1070,1072,5,142,
        0,0,1071,1070,1,0,0,0,1071,1072,1,0,0,0,1072,1073,1,0,0,0,1073,1074,
        5,3,0,0,1074,1076,1,0,0,0,1075,1063,1,0,0,0,1075,1076,1,0,0,0,1076,
        1081,1,0,0,0,1077,1079,5,142,0,0,1078,1077,1,0,0,0,1078,1079,1,0,
        0,0,1079,1080,1,0,0,0,1080,1082,3,130,65,0,1081,1078,1,0,0,0,1081,
        1082,1,0,0,0,1082,93,1,0,0,0,1083,1084,5,47,0,0,1084,1085,5,142,
        0,0,1085,1090,3,238,119,0,1086,1088,5,142,0,0,1087,1086,1,0,0,0,
        1087,1088,1,0,0,0,1088,1089,1,0,0,0,1089,1091,3,130,65,0,1090,1087,
        1,0,0,0,1090,1091,1,0,0,0,1091,95,1,0,0,0,1092,1093,5,83,0,0,1093,
        1095,5,142,0,0,1094,1092,1,0,0,0,1094,1095,1,0,0,0,1095,1096,1,0,
        0,0,1096,1098,5,84,0,0,1097,1099,5,142,0,0,1098,1097,1,0,0,0,1098,
        1099,1,0,0,0,1099,1100,1,0,0,0,1100,1105,3,132,66,0,1101,1103,5,
        142,0,0,1102,1101,1,0,0,0,1102,1103,1,0,0,0,1103,1104,1,0,0,0,1104,
        1106,3,130,65,0,1105,1102,1,0,0,0,1105,1106,1,0,0,0,1106,97,1,0,
        0,0,1107,1109,5,85,0,0,1108,1110,5,142,0,0,1109,1108,1,0,0,0,1109,
        1110,1,0,0,0,1110,1111,1,0,0,0,1111,1112,3,172,86,0,1112,1113,5,
        142,0,0,1113,1114,5,96,0,0,1114,1115,5,142,0,0,1115,1116,3,256,128,
        0,1116,99,1,0,0,0,1117,1119,5,86,0,0,1118,1120,5,142,0,0,1119,1118,
        1,0,0,0,1119,1120,1,0,0,0,1120,1121,1,0,0,0,1121,1122,3,132,66,0,
        1122,101,1,0,0,0,1123,1125,5,87,0,0,1124,1126,5,142,0,0,1125,1124,
        1,0,0,0,1125,1126,1,0,0,0,1126,1127,1,0,0,0,1127,1132,3,132,66,0,
        1128,1129,5,142,0,0,1129,1131,3,104,52,0,1130,1128,1,0,0,0,1131,
        1134,1,0,0,0,1132,1130,1,0,0,0,1132,1133,1,0,0,0,1133,103,1,0,0,
        0,1134,1132,1,0,0,0,1135,1136,5,88,0,0,1136,1137,5,142,0,0,1137,
        1138,5,84,0,0,1138,1139,5,142,0,0,1139,1146,3,106,53,0,1140,1141,
        5,88,0,0,1141,1142,5,142,0,0,1142,1143,5,86,0,0,1143,1144,5,142,
        0,0,1144,1146,3,106,53,0,1145,1135,1,0,0,0,1145,1140,1,0,0,0,1146,
        105,1,0,0,0,1147,1149,5,89,0,0,1148,1150,5,142,0,0,1149,1148,1,0,
        0,0,1149,1150,1,0,0,0,1150,1151,1,0,0,0,1151,1162,3,108,54,0,1152,
        1154,5,142,0,0,1153,1152,1,0,0,0,1153,1154,1,0,0,0,1154,1155,1,0,
        0,0,1155,1157,5,4,0,0,1156,1158,5,142,0,0,1157,1156,1,0,0,0,1157,
        1158,1,0,0,0,1158,1159,1,0,0,0,1159,1161,3,108,54,0,1160,1153,1,
        0,0,0,1161,1164,1,0,0,0,1162,1160,1,0,0,0,1162,1163,1,0,0,0,1163,
        107,1,0,0,0,1164,1162,1,0,0,0,1165,1167,3,262,131,0,1166,1168,5,
        142,0,0,1167,1166,1,0,0,0,1167,1168,1,0,0,0,1168,1169,1,0,0,0,1169,
        1171,5,5,0,0,1170,1172,5,142,0,0,1171,1170,1,0,0,0,1171,1172,1,0,
        0,0,1172,1173,1,0,0,0,1173,1174,3,172,86,0,1174,109,1,0,0,0,1175,
        1176,5,90,0,0,1176,1178,5,142,0,0,1177,1175,1,0,0,0,1177,1178,1,
        0,0,0,1178,1179,1,0,0,0,1179,1181,5,91,0,0,1180,1182,5,142,0,0,1181,
        1180,1,0,0,0,1181,1182,1,0,0,0,1182,1183,1,0,0,0,1183,1194,3,172,
        86,0,1184,1186,5,142,0,0,1185,1184,1,0,0,0,1185,1186,1,0,0,0,1186,
        1187,1,0,0,0,1187,1189,5,4,0,0,1188,1190,5,142,0,0,1189,1188,1,0,
        0,0,1189,1190,1,0,0,0,1190,1191,1,0,0,0,1191,1193,3,172,86,0,1192,
        1185,1,0,0,0,1193,1196,1,0,0,0,1194,1192,1,0,0,0,1194,1195,1,0,0,
        0,1195,111,1,0,0,0,1196,1194,1,0,0,0,1197,1198,5,92,0,0,1198,1203,
        3,116,58,0,1199,1201,5,142,0,0,1200,1199,1,0,0,0,1200,1201,1,0,0,
        0,1201,1202,1,0,0,0,1202,1204,3,130,65,0,1203,1200,1,0,0,0,1203,
        1204,1,0,0,0,1204,113,1,0,0,0,1205,1206,5,93,0,0,1206,1207,3,116,
        58,0,1207,115,1,0,0,0,1208,1210,5,142,0,0,1209,1208,1,0,0,0,1209,
        1210,1,0,0,0,1210,1211,1,0,0,0,1211,1213,5,94,0,0,1212,1209,1,0,
        0,0,1212,1213,1,0,0,0,1213,1214,1,0,0,0,1214,1215,5,142,0,0,1215,
        1218,3,118,59,0,1216,1217,5,142,0,0,1217,1219,3,122,61,0,1218,1216,
        1,0,0,0,1218,1219,1,0,0,0,1219,1222,1,0,0,0,1220,1221,5,142,0,0,
        1221,1223,3,124,62,0,1222,1220,1,0,0,0,1222,1223,1,0,0,0,1223,1226,
        1,0,0,0,1224,1225,5,142,0,0,1225,1227,3,126,63,0,1226,1224,1,0,0,
        0,1226,1227,1,0,0,0,1227,117,1,0,0,0,1228,1239,5,95,0,0,1229,1231,
        5,142,0,0,1230,1229,1,0,0,0,1230,1231,1,0,0,0,1231,1232,1,0,0,0,
        1232,1234,5,4,0,0,1233,1235,5,142,0,0,1234,1233,1,0,0,0,1234,1235,
        1,0,0,0,1235,1236,1,0,0,0,1236,1238,3,120,60,0,1237,1230,1,0,0,0,
        1238,1241,1,0,0,0,1239,1237,1,0,0,0,1239,1240,1,0,0,0,1240,1257,
        1,0,0,0,1241,1239,1,0,0,0,1242,1253,3,120,60,0,1243,1245,5,142,0,
        0,1244,1243,1,0,0,0,1244,1245,1,0,0,0,1245,1246,1,0,0,0,1246,1248,
        5,4,0,0,1247,1249,5,142,0,0,1248,1247,1,0,0,0,1248,1249,1,0,0,0,
        1249,1250,1,0,0,0,1250,1252,3,120,60,0,1251,1244,1,0,0,0,1252,1255,
        1,0,0,0,1253,1251,1,0,0,0,1253,1254,1,0,0,0,1254,1257,1,0,0,0,1255,
        1253,1,0,0,0,1256,1228,1,0,0,0,1256,1242,1,0,0,0,1257,119,1,0,0,
        0,1258,1259,3,172,86,0,1259,1260,5,142,0,0,1260,1261,5,96,0,0,1261,
        1262,5,142,0,0,1262,1263,3,256,128,0,1263,1266,1,0,0,0,1264,1266,
        3,172,86,0,1265,1258,1,0,0,0,1265,1264,1,0,0,0,1266,121,1,0,0,0,
        1267,1268,5,97,0,0,1268,1269,5,142,0,0,1269,1270,5,98,0,0,1270,1271,
        5,142,0,0,1271,1279,3,128,64,0,1272,1274,5,4,0,0,1273,1275,5,142,
        0,0,1274,1273,1,0,0,0,1274,1275,1,0,0,0,1275,1276,1,0,0,0,1276,1278,
        3,128,64,0,1277,1272,1,0,0,0,1278,1281,1,0,0,0,1279,1277,1,0,0,0,
        1279,1280,1,0,0,0,1280,123,1,0,0,0,1281,1279,1,0,0,0,1282,1283,5,
        99,0,0,1283,1284,5,142,0,0,1284,1285,3,172,86,0,1285,125,1,0,0,0,
        1286,1287,5,100,0,0,1287,1288,5,142,0,0,1288,1289,3,172,86,0,1289,
        127,1,0,0,0,1290,1295,3,172,86,0,1291,1293,5,142,0,0,1292,1291,1,
        0,0,0,1292,1293,1,0,0,0,1293,1294,1,0,0,0,1294,1296,7,0,0,0,1295,
        1292,1,0,0,0,1295,1296,1,0,0,0,1296,129,1,0,0,0,1297,1298,5,105,
        0,0,1298,1299,5,142,0,0,1299,1300,3,172,86,0,1300,131,1,0,0,0,1301,
        1312,3,134,67,0,1302,1304,5,142,0,0,1303,1302,1,0,0,0,1303,1304,
        1,0,0,0,1304,1305,1,0,0,0,1305,1307,5,4,0,0,1306,1308,5,142,0,0,
        1307,1306,1,0,0,0,1307,1308,1,0,0,0,1308,1309,1,0,0,0,1309,1311,
        3,134,67,0,1310,1303,1,0,0,0,1311,1314,1,0,0,0,1312,1310,1,0,0,0,
        1312,1313,1,0,0,0,1313,133,1,0,0,0,1314,1312,1,0,0,0,1315,1317,3,
        256,128,0,1316,1318,5,142,0,0,1317,1316,1,0,0,0,1317,1318,1,0,0,
        0,1318,1319,1,0,0,0,1319,1321,5,5,0,0,1320,1322,5,142,0,0,1321,1320,
        1,0,0,0,1321,1322,1,0,0,0,1322,1323,1,0,0,0,1323,1324,3,136,68,0,
        1324,1327,1,0,0,0,1325,1327,3,136,68,0,1326,1315,1,0,0,0,1326,1325,
        1,0,0,0,1327,135,1,0,0,0,1328,1329,3,138,69,0,1329,137,1,0,0,0,1330,
        1337,3,140,70,0,1331,1333,5,142,0,0,1332,1331,1,0,0,0,1332,1333,
        1,0,0,0,1333,1334,1,0,0,0,1334,1336,3,142,71,0,1335,1332,1,0,0,0,
        1336,1339,1,0,0,0,1337,1335,1,0,0,0,1337,1338,1,0,0,0,1338,1345,
        1,0,0,0,1339,1337,1,0,0,0,1340,1341,5,2,0,0,1341,1342,3,138,69,0,
        1342,1343,5,3,0,0,1343,1345,1,0,0,0,1344,1330,1,0,0,0,1344,1340,
        1,0,0,0,1345,139,1,0,0,0,1346,1348,5,2,0,0,1347,1349,5,142,0,0,1348,
        1347,1,0,0,0,1348,1349,1,0,0,0,1349,1354,1,0,0,0,1350,1352,3,256,
        128,0,1351,1353,5,142,0,0,1352,1351,1,0,0,0,1352,1353,1,0,0,0,1353,
        1355,1,0,0,0,1354,1350,1,0,0,0,1354,1355,1,0,0,0,1355,1360,1,0,0,
        0,1356,1358,3,152,76,0,1357,1359,5,142,0,0,1358,1357,1,0,0,0,1358,
        1359,1,0,0,0,1359,1361,1,0,0,0,1360,1356,1,0,0,0,1360,1361,1,0,0,
        0,1361,1366,1,0,0,0,1362,1364,3,148,74,0,1363,1365,5,142,0,0,1364,
        1363,1,0,0,0,1364,1365,1,0,0,0,1365,1367,1,0,0,0,1366,1362,1,0,0,
        0,1366,1367,1,0,0,0,1367,1368,1,0,0,0,1368,1369,5,3,0,0,1369,141,
        1,0,0,0,1370,1372,3,144,72,0,1371,1373,5,142,0,0,1372,1371,1,0,0,
        0,1372,1373,1,0,0,0,1373,1374,1,0,0,0,1374,1375,3,140,70,0,1375,
        143,1,0,0,0,1376,1378,3,276,138,0,1377,1379,5,142,0,0,1378,1377,
        1,0,0,0,1378,1379,1,0,0,0,1379,1380,1,0,0,0,1380,1382,3,280,140,
        0,1381,1383,5,142,0,0,1382,1381,1,0,0,0,1382,1383,1,0,0,0,1383,1385,
        1,0,0,0,1384,1386,3,146,73,0,1385,1384,1,0,0,0,1385,1386,1,0,0,0,
        1386,1388,1,0,0,0,1387,1389,5,142,0,0,1388,1387,1,0,0,0,1388,1389,
        1,0,0,0,1389,1390,1,0,0,0,1390,1391,3,280,140,0,1391,1421,1,0,0,
        0,1392,1394,3,280,140,0,1393,1395,5,142,0,0,1394,1393,1,0,0,0,1394,
        1395,1,0,0,0,1395,1397,1,0,0,0,1396,1398,3,146,73,0,1397,1396,1,
        0,0,0,1397,1398,1,0,0,0,1398,1400,1,0,0,0,1399,1401,5,142,0,0,1400,
        1399,1,0,0,0,1400,1401,1,0,0,0,1401,1402,1,0,0,0,1402,1404,3,280,
        140,0,1403,1405,5,142,0,0,1404,1403,1,0,0,0,1404,1405,1,0,0,0,1405,
        1406,1,0,0,0,1406,1407,3,278,139,0,1407,1421,1,0,0,0,1408,1410,3,
        280,140,0,1409,1411,5,142,0,0,1410,1409,1,0,0,0,1410,1411,1,0,0,
        0,1411,1413,1,0,0,0,1412,1414,3,146,73,0,1413,1412,1,0,0,0,1413,
        1414,1,0,0,0,1414,1416,1,0,0,0,1415,1417,5,142,0,0,1416,1415,1,0,
        0,0,1416,1417,1,0,0,0,1417,1418,1,0,0,0,1418,1419,3,280,140,0,1419,
        1421,1,0,0,0,1420,1376,1,0,0,0,1420,1392,1,0,0,0,1420,1408,1,0,0,
        0,1421,145,1,0,0,0,1422,1424,5,7,0,0,1423,1425,5,142,0,0,1424,1423,
        1,0,0,0,1424,1425,1,0,0,0,1425,1430,1,0,0,0,1426,1428,3,256,128,
        0,1427,1429,5,142,0,0,1428,1427,1,0,0,0,1428,1429,1,0,0,0,1429,1431,
        1,0,0,0,1430,1426,1,0,0,0,1430,1431,1,0,0,0,1431,1436,1,0,0,0,1432,
        1434,3,150,75,0,1433,1435,5,142,0,0,1434,1433,1,0,0,0,1434,1435,
        1,0,0,0,1435,1437,1,0,0,0,1436,1432,1,0,0,0,1436,1437,1,0,0,0,1437,
        1442,1,0,0,0,1438,1440,3,156,78,0,1439,1441,5,142,0,0,1440,1439,
        1,0,0,0,1440,1441,1,0,0,0,1441,1443,1,0,0,0,1442,1438,1,0,0,0,1442,
        1443,1,0,0,0,1443,1448,1,0,0,0,1444,1446,3,148,74,0,1445,1447,5,
        142,0,0,1446,1445,1,0,0,0,1446,1447,1,0,0,0,1447,1449,1,0,0,0,1448,
        1444,1,0,0,0,1448,1449,1,0,0,0,1449,1450,1,0,0,0,1450,1451,5,8,0,
        0,1451,147,1,0,0,0,1452,1454,5,9,0,0,1453,1455,5,142,0,0,1454,1453,
        1,0,0,0,1454,1455,1,0,0,0,1455,1489,1,0,0,0,1456,1458,3,264,132,
        0,1457,1459,5,142,0,0,1458,1457,1,0,0,0,1458,1459,1,0,0,0,1459,1460,
        1,0,0,0,1460,1462,5,6,0,0,1461,1463,5,142,0,0,1462,1461,1,0,0,0,
        1462,1463,1,0,0,0,1463,1464,1,0,0,0,1464,1466,3,172,86,0,1465,1467,
        5,142,0,0,1466,1465,1,0,0,0,1466,1467,1,0,0,0,1467,1486,1,0,0,0,
        1468,1470,5,4,0,0,1469,1471,5,142,0,0,1470,1469,1,0,0,0,1470,1471,
        1,0,0,0,1471,1472,1,0,0,0,1472,1474,3,264,132,0,1473,1475,5,142,
        0,0,1474,1473,1,0,0,0,1474,1475,1,0,0,0,1475,1476,1,0,0,0,1476,1478,
        5,6,0,0,1477,1479,5,142,0,0,1478,1477,1,0,0,0,1478,1479,1,0,0,0,
        1479,1480,1,0,0,0,1480,1482,3,172,86,0,1481,1483,5,142,0,0,1482,
        1481,1,0,0,0,1482,1483,1,0,0,0,1483,1485,1,0,0,0,1484,1468,1,0,0,
        0,1485,1488,1,0,0,0,1486,1484,1,0,0,0,1486,1487,1,0,0,0,1487,1490,
        1,0,0,0,1488,1486,1,0,0,0,1489,1456,1,0,0,0,1489,1490,1,0,0,0,1490,
        1491,1,0,0,0,1491,1492,5,10,0,0,1492,149,1,0,0,0,1493,1495,5,6,0,
        0,1494,1496,5,142,0,0,1495,1494,1,0,0,0,1495,1496,1,0,0,0,1496,1497,
        1,0,0,0,1497,1511,3,170,85,0,1498,1500,5,142,0,0,1499,1498,1,0,0,
        0,1499,1500,1,0,0,0,1500,1501,1,0,0,0,1501,1503,5,11,0,0,1502,1504,
        5,6,0,0,1503,1502,1,0,0,0,1503,1504,1,0,0,0,1504,1506,1,0,0,0,1505,
        1507,5,142,0,0,1506,1505,1,0,0,0,1506,1507,1,0,0,0,1507,1508,1,0,
        0,0,1508,1510,3,170,85,0,1509,1499,1,0,0,0,1510,1513,1,0,0,0,1511,
        1509,1,0,0,0,1511,1512,1,0,0,0,1512,151,1,0,0,0,1513,1511,1,0,0,
        0,1514,1521,3,154,77,0,1515,1517,5,142,0,0,1516,1515,1,0,0,0,1516,
        1517,1,0,0,0,1517,1518,1,0,0,0,1518,1520,3,154,77,0,1519,1516,1,
        0,0,0,1520,1523,1,0,0,0,1521,1519,1,0,0,0,1521,1522,1,0,0,0,1522,
        153,1,0,0,0,1523,1521,1,0,0,0,1524,1526,5,6,0,0,1525,1527,5,142,
        0,0,1526,1525,1,0,0,0,1526,1527,1,0,0,0,1527,1528,1,0,0,0,1528,1529,
        3,168,84,0,1529,155,1,0,0,0,1530,1532,5,95,0,0,1531,1533,5,142,0,
        0,1532,1531,1,0,0,0,1532,1533,1,0,0,0,1533,1538,1,0,0,0,1534,1539,
        5,106,0,0,1535,1536,5,80,0,0,1536,1537,5,142,0,0,1537,1539,5,106,
        0,0,1538,1534,1,0,0,0,1538,1535,1,0,0,0,1538,1539,1,0,0,0,1539,1541,
        1,0,0,0,1540,1542,5,142,0,0,1541,1540,1,0,0,0,1541,1542,1,0,0,0,
        1542,1557,1,0,0,0,1543,1545,3,164,82,0,1544,1543,1,0,0,0,1544,1545,
        1,0,0,0,1545,1547,1,0,0,0,1546,1548,5,142,0,0,1547,1546,1,0,0,0,
        1547,1548,1,0,0,0,1548,1549,1,0,0,0,1549,1551,5,12,0,0,1550,1552,
        5,142,0,0,1551,1550,1,0,0,0,1551,1552,1,0,0,0,1552,1554,1,0,0,0,
        1553,1555,3,166,83,0,1554,1553,1,0,0,0,1554,1555,1,0,0,0,1555,1558,
        1,0,0,0,1556,1558,3,266,133,0,1557,1544,1,0,0,0,1557,1556,1,0,0,
        0,1557,1558,1,0,0,0,1558,1563,1,0,0,0,1559,1561,5,142,0,0,1560,1559,
        1,0,0,0,1560,1561,1,0,0,0,1561,1562,1,0,0,0,1562,1564,3,158,79,0,
        1563,1560,1,0,0,0,1563,1564,1,0,0,0,1564,157,1,0,0,0,1565,1567,5,
        2,0,0,1566,1568,5,142,0,0,1567,1566,1,0,0,0,1567,1568,1,0,0,0,1568,
        1569,1,0,0,0,1569,1571,3,256,128,0,1570,1572,5,142,0,0,1571,1570,
        1,0,0,0,1571,1572,1,0,0,0,1572,1573,1,0,0,0,1573,1575,5,4,0,0,1574,
        1576,5,142,0,0,1575,1574,1,0,0,0,1575,1576,1,0,0,0,1576,1577,1,0,
        0,0,1577,1586,3,256,128,0,1578,1580,5,142,0,0,1579,1578,1,0,0,0,
        1579,1580,1,0,0,0,1580,1581,1,0,0,0,1581,1583,5,11,0,0,1582,1584,
        5,142,0,0,1583,1582,1,0,0,0,1583,1584,1,0,0,0,1584,1585,1,0,0,0,
        1585,1587,3,130,65,0,1586,1579,1,0,0,0,1586,1587,1,0,0,0,1587,1607,
        1,0,0,0,1588,1590,5,142,0,0,1589,1588,1,0,0,0,1589,1590,1,0,0,0,
        1590,1591,1,0,0,0,1591,1593,5,11,0,0,1592,1594,5,142,0,0,1593,1592,
        1,0,0,0,1593,1594,1,0,0,0,1594,1595,1,0,0,0,1595,1597,3,162,81,0,
        1596,1598,5,142,0,0,1597,1596,1,0,0,0,1597,1598,1,0,0,0,1598,1599,
        1,0,0,0,1599,1601,5,4,0,0,1600,1602,5,142,0,0,1601,1600,1,0,0,0,
        1601,1602,1,0,0,0,1602,1603,1,0,0,0,1603,1605,3,160,80,0,1604,1606,
        5,142,0,0,1605,1604,1,0,0,0,1605,1606,1,0,0,0,1606,1608,1,0,0,0,
        1607,1589,1,0,0,0,1607,1608,1,0,0,0,1608,1609,1,0,0,0,1609,1610,
        5,3,0,0,1610,159,1,0,0,0,1611,1613,5,9,0,0,1612,1614,5,142,0,0,1613,
        1612,1,0,0,0,1613,1614,1,0,0,0,1614,1616,1,0,0,0,1615,1617,3,118,
        59,0,1616,1615,1,0,0,0,1616,1617,1,0,0,0,1617,1619,1,0,0,0,1618,
        1620,5,142,0,0,1619,1618,1,0,0,0,1619,1620,1,0,0,0,1620,1621,1,0,
        0,0,1621,1622,5,10,0,0,1622,161,1,0,0,0,1623,1625,5,9,0,0,1624,1626,
        5,142,0,0,1625,1624,1,0,0,0,1625,1626,1,0,0,0,1626,1628,1,0,0,0,
        1627,1629,3,118,59,0,1628,1627,1,0,0,0,1628,1629,1,0,0,0,1629,1631,
        1,0,0,0,1630,1632,5,142,0,0,1631,1630,1,0,0,0,1631,1632,1,0,0,0,
        1632,1633,1,0,0,0,1633,1634,5,10,0,0,1634,163,1,0,0,0,1635,1636,
        5,130,0,0,1636,165,1,0,0,0,1637,1638,5,130,0,0,1638,167,1,0,0,0,
        1639,1640,3,270,135,0,1640,169,1,0,0,0,1641,1642,3,270,135,0,1642,
        171,1,0,0,0,1643,1644,3,174,87,0,1644,173,1,0,0,0,1645,1652,3,176,
        88,0,1646,1647,5,142,0,0,1647,1648,5,107,0,0,1648,1649,5,142,0,0,
        1649,1651,3,176,88,0,1650,1646,1,0,0,0,1651,1654,1,0,0,0,1652,1650,
        1,0,0,0,1652,1653,1,0,0,0,1653,175,1,0,0,0,1654,1652,1,0,0,0,1655,
        1662,3,178,89,0,1656,1657,5,142,0,0,1657,1658,5,108,0,0,1658,1659,
        5,142,0,0,1659,1661,3,178,89,0,1660,1656,1,0,0,0,1661,1664,1,0,0,
        0,1662,1660,1,0,0,0,1662,1663,1,0,0,0,1663,177,1,0,0,0,1664,1662,
        1,0,0,0,1665,1672,3,180,90,0,1666,1667,5,142,0,0,1667,1668,5,109,
        0,0,1668,1669,5,142,0,0,1669,1671,3,180,90,0,1670,1666,1,0,0,0,1671,
        1674,1,0,0,0,1672,1670,1,0,0,0,1672,1673,1,0,0,0,1673,179,1,0,0,
        0,1674,1672,1,0,0,0,1675,1677,5,110,0,0,1676,1678,5,142,0,0,1677,
        1676,1,0,0,0,1677,1678,1,0,0,0,1678,1680,1,0,0,0,1679,1675,1,0,0,
        0,1679,1680,1,0,0,0,1680,1681,1,0,0,0,1681,1682,3,182,91,0,1682,
        181,1,0,0,0,1683,1693,3,186,93,0,1684,1686,5,142,0,0,1685,1684,1,
        0,0,0,1685,1686,1,0,0,0,1686,1687,1,0,0,0,1687,1689,3,184,92,0,1688,
        1690,5,142,0,0,1689,1688,1,0,0,0,1689,1690,1,0,0,0,1690,1691,1,0,
        0,0,1691,1692,3,186,93,0,1692,1694,1,0,0,0,1693,1685,1,0,0,0,1693,
        1694,1,0,0,0,1694,1732,1,0,0,0,1695,1697,3,186,93,0,1696,1698,5,
        142,0,0,1697,1696,1,0,0,0,1697,1698,1,0,0,0,1698,1699,1,0,0,0,1699,
        1701,5,111,0,0,1700,1702,5,142,0,0,1701,1700,1,0,0,0,1701,1702,1,
        0,0,0,1702,1703,1,0,0,0,1703,1704,3,186,93,0,1704,1705,1,0,0,0,1705,
        1706,6,91,-1,0,1706,1732,1,0,0,0,1707,1709,3,186,93,0,1708,1710,
        5,142,0,0,1709,1708,1,0,0,0,1709,1710,1,0,0,0,1710,1711,1,0,0,0,
        1711,1713,3,184,92,0,1712,1714,5,142,0,0,1713,1712,1,0,0,0,1713,
        1714,1,0,0,0,1714,1715,1,0,0,0,1715,1725,3,186,93,0,1716,1718,5,
        142,0,0,1717,1716,1,0,0,0,1717,1718,1,0,0,0,1718,1719,1,0,0,0,1719,
        1721,3,184,92,0,1720,1722,5,142,0,0,1721,1720,1,0,0,0,1721,1722,
        1,0,0,0,1722,1723,1,0,0,0,1723,1724,3,186,93,0,1724,1726,1,0,0,0,
        1725,1717,1,0,0,0,1726,1727,1,0,0,0,1727,1725,1,0,0,0,1727,1728,
        1,0,0,0,1728,1729,1,0,0,0,1729,1730,6,91,-1,0,1730,1732,1,0,0,0,
        1731,1683,1,0,0,0,1731,1695,1,0,0,0,1731,1707,1,0,0,0,1732,183,1,
        0,0,0,1733,1734,7,1,0,0,1734,185,1,0,0,0,1735,1746,3,188,94,0,1736,
        1738,5,142,0,0,1737,1736,1,0,0,0,1737,1738,1,0,0,0,1738,1739,1,0,
        0,0,1739,1741,5,11,0,0,1740,1742,5,142,0,0,1741,1740,1,0,0,0,1741,
        1742,1,0,0,0,1742,1743,1,0,0,0,1743,1745,3,188,94,0,1744,1737,1,
        0,0,0,1745,1748,1,0,0,0,1746,1744,1,0,0,0,1746,1747,1,0,0,0,1747,
        187,1,0,0,0,1748,1746,1,0,0,0,1749,1760,3,190,95,0,1750,1752,5,142,
        0,0,1751,1750,1,0,0,0,1751,1752,1,0,0,0,1752,1753,1,0,0,0,1753,1755,
        5,18,0,0,1754,1756,5,142,0,0,1755,1754,1,0,0,0,1755,1756,1,0,0,0,
        1756,1757,1,0,0,0,1757,1759,3,190,95,0,1758,1751,1,0,0,0,1759,1762,
        1,0,0,0,1760,1758,1,0,0,0,1760,1761,1,0,0,0,1761,189,1,0,0,0,1762,
        1760,1,0,0,0,1763,1775,3,194,97,0,1764,1766,5,142,0,0,1765,1764,
        1,0,0,0,1765,1766,1,0,0,0,1766,1767,1,0,0,0,1767,1769,3,192,96,0,
        1768,1770,5,142,0,0,1769,1768,1,0,0,0,1769,1770,1,0,0,0,1770,1771,
        1,0,0,0,1771,1772,3,194,97,0,1772,1774,1,0,0,0,1773,1765,1,0,0,0,
        1774,1777,1,0,0,0,1775,1773,1,0,0,0,1775,1776,1,0,0,0,1776,191,1,
        0,0,0,1777,1775,1,0,0,0,1778,1779,7,2,0,0,1779,193,1,0,0,0,1780,
        1792,3,198,99,0,1781,1783,5,142,0,0,1782,1781,1,0,0,0,1782,1783,
        1,0,0,0,1783,1784,1,0,0,0,1784,1786,3,196,98,0,1785,1787,5,142,0,
        0,1786,1785,1,0,0,0,1786,1787,1,0,0,0,1787,1788,1,0,0,0,1788,1789,
        3,198,99,0,1789,1791,1,0,0,0,1790,1782,1,0,0,0,1791,1794,1,0,0,0,
        1792,1790,1,0,0,0,1792,1793,1,0,0,0,1793,195,1,0,0,0,1794,1792,1,
        0,0,0,1795,1796,7,3,0,0,1796,197,1,0,0,0,1797,1809,3,202,101,0,1798,
        1800,5,142,0,0,1799,1798,1,0,0,0,1799,1800,1,0,0,0,1800,1801,1,0,
        0,0,1801,1803,3,200,100,0,1802,1804,5,142,0,0,1803,1802,1,0,0,0,
        1803,1804,1,0,0,0,1804,1805,1,0,0,0,1805,1806,3,202,101,0,1806,1808,
        1,0,0,0,1807,1799,1,0,0,0,1808,1811,1,0,0,0,1809,1807,1,0,0,0,1809,
        1810,1,0,0,0,1810,199,1,0,0,0,1811,1809,1,0,0,0,1812,1813,7,4,0,
        0,1813,201,1,0,0,0,1814,1825,3,204,102,0,1815,1817,5,142,0,0,1816,
        1815,1,0,0,0,1816,1817,1,0,0,0,1817,1818,1,0,0,0,1818,1820,5,24,
        0,0,1819,1821,5,142,0,0,1820,1819,1,0,0,0,1820,1821,1,0,0,0,1821,
        1822,1,0,0,0,1822,1824,3,204,102,0,1823,1816,1,0,0,0,1824,1827,1,
        0,0,0,1825,1823,1,0,0,0,1825,1826,1,0,0,0,1826,203,1,0,0,0,1827,
        1825,1,0,0,0,1828,1830,5,112,0,0,1829,1831,5,142,0,0,1830,1829,1,
        0,0,0,1830,1831,1,0,0,0,1831,1833,1,0,0,0,1832,1828,1,0,0,0,1832,
        1833,1,0,0,0,1833,1834,1,0,0,0,1834,1839,3,206,103,0,1835,1837,5,
        142,0,0,1836,1835,1,0,0,0,1836,1837,1,0,0,0,1837,1838,1,0,0,0,1838,
        1840,5,113,0,0,1839,1836,1,0,0,0,1839,1840,1,0,0,0,1840,205,1,0,
        0,0,1841,1849,3,220,110,0,1842,1850,3,214,107,0,1843,1845,3,208,
        104,0,1844,1843,1,0,0,0,1845,1846,1,0,0,0,1846,1844,1,0,0,0,1846,
        1847,1,0,0,0,1847,1850,1,0,0,0,1848,1850,3,218,109,0,1849,1842,1,
        0,0,0,1849,1844,1,0,0,0,1849,1848,1,0,0,0,1849,1850,1,0,0,0,1850,
        207,1,0,0,0,1851,1854,3,210,105,0,1852,1854,3,212,106,0,1853,1851,
        1,0,0,0,1853,1852,1,0,0,0,1854,209,1,0,0,0,1855,1856,5,7,0,0,1856,
        1857,3,172,86,0,1857,1858,5,8,0,0,1858,211,1,0,0,0,1859,1861,5,7,
        0,0,1860,1862,3,172,86,0,1861,1860,1,0,0,0,1861,1862,1,0,0,0,1862,
        1863,1,0,0,0,1863,1865,5,6,0,0,1864,1866,3,172,86,0,1865,1864,1,
        0,0,0,1865,1866,1,0,0,0,1866,1867,1,0,0,0,1867,1868,5,8,0,0,1868,
        213,1,0,0,0,1869,1881,3,216,108,0,1870,1871,5,142,0,0,1871,1872,
        5,114,0,0,1872,1873,5,142,0,0,1873,1881,5,92,0,0,1874,1875,5,142,
        0,0,1875,1876,5,115,0,0,1876,1877,5,142,0,0,1877,1881,5,92,0,0,1878,
        1879,5,142,0,0,1879,1881,5,116,0,0,1880,1869,1,0,0,0,1880,1870,1,
        0,0,0,1880,1874,1,0,0,0,1880,1878,1,0,0,0,1881,1883,1,0,0,0,1882,
        1884,5,142,0,0,1883,1882,1,0,0,0,1883,1884,1,0,0,0,1884,1885,1,0,
        0,0,1885,1886,3,220,110,0,1886,215,1,0,0,0,1887,1889,5,142,0,0,1888,
        1887,1,0,0,0,1888,1889,1,0,0,0,1889,1890,1,0,0,0,1890,1891,5,25,
        0,0,1891,217,1,0,0,0,1892,1893,5,142,0,0,1893,1894,5,117,0,0,1894,
        1895,5,142,0,0,1895,1903,5,118,0,0,1896,1897,5,142,0,0,1897,1898,
        5,117,0,0,1898,1899,5,142,0,0,1899,1900,5,110,0,0,1900,1901,5,142,
        0,0,1901,1903,5,118,0,0,1902,1892,1,0,0,0,1902,1896,1,0,0,0,1903,
        219,1,0,0,0,1904,1911,3,222,111,0,1905,1907,5,142,0,0,1906,1905,
        1,0,0,0,1906,1907,1,0,0,0,1907,1908,1,0,0,0,1908,1910,3,250,125,
        0,1909,1906,1,0,0,0,1910,1913,1,0,0,0,1911,1909,1,0,0,0,1911,1912,
        1,0,0,0,1912,221,1,0,0,0,1913,1911,1,0,0,0,1914,1924,3,224,112,0,
        1915,1924,3,260,130,0,1916,1924,3,252,126,0,1917,1924,3,236,118,
        0,1918,1924,3,238,119,0,1919,1924,3,244,122,0,1920,1924,3,246,123,
        0,1921,1924,3,248,124,0,1922,1924,3,256,128,0,1923,1914,1,0,0,0,
        1923,1915,1,0,0,0,1923,1916,1,0,0,0,1923,1917,1,0,0,0,1923,1918,
        1,0,0,0,1923,1919,1,0,0,0,1923,1920,1,0,0,0,1923,1921,1,0,0,0,1923,
        1922,1,0,0,0,1924,223,1,0,0,0,1925,1932,3,258,129,0,1926,1932,5,
        128,0,0,1927,1932,3,226,113,0,1928,1932,5,118,0,0,1929,1932,3,228,
        114,0,1930,1932,3,232,116,0,1931,1925,1,0,0,0,1931,1926,1,0,0,0,
        1931,1927,1,0,0,0,1931,1928,1,0,0,0,1931,1929,1,0,0,0,1931,1930,
        1,0,0,0,1932,225,1,0,0,0,1933,1934,7,5,0,0,1934,227,1,0,0,0,1935,
        1937,5,7,0,0,1936,1938,5,142,0,0,1937,1936,1,0,0,0,1937,1938,1,0,
        0,0,1938,1952,1,0,0,0,1939,1941,3,172,86,0,1940,1942,5,142,0,0,1941,
        1940,1,0,0,0,1941,1942,1,0,0,0,1942,1949,1,0,0,0,1943,1945,3,230,
        115,0,1944,1946,5,142,0,0,1945,1944,1,0,0,0,1945,1946,1,0,0,0,1946,
        1948,1,0,0,0,1947,1943,1,0,0,0,1948,1951,1,0,0,0,1949,1947,1,0,0,
        0,1949,1950,1,0,0,0,1950,1953,1,0,0,0,1951,1949,1,0,0,0,1952,1939,
        1,0,0,0,1952,1953,1,0,0,0,1953,1954,1,0,0,0,1954,1955,5,8,0,0,1955,
        229,1,0,0,0,1956,1958,5,4,0,0,1957,1959,5,142,0,0,1958,1957,1,0,
        0,0,1958,1959,1,0,0,0,1959,1961,1,0,0,0,1960,1962,3,172,86,0,1961,
        1960,1,0,0,0,1961,1962,1,0,0,0,1962,231,1,0,0,0,1963,1965,5,9,0,
        0,1964,1966,5,142,0,0,1965,1964,1,0,0,0,1965,1966,1,0,0,0,1966,1967,
        1,0,0,0,1967,1969,3,234,117,0,1968,1970,5,142,0,0,1969,1968,1,0,
        0,0,1969,1970,1,0,0,0,1970,1981,1,0,0,0,1971,1973,5,4,0,0,1972,1974,
        5,142,0,0,1973,1972,1,0,0,0,1973,1974,1,0,0,0,1974,1975,1,0,0,0,
        1975,1977,3,234,117,0,1976,1978,5,142,0,0,1977,1976,1,0,0,0,1977,
        1978,1,0,0,0,1978,1980,1,0,0,0,1979,1971,1,0,0,0,1980,1983,1,0,0,
        0,1981,1979,1,0,0,0,1981,1982,1,0,0,0,1982,1984,1,0,0,0,1983,1981,
        1,0,0,0,1984,1985,5,10,0,0,1985,233,1,0,0,0,1986,1989,3,272,136,
        0,1987,1989,5,128,0,0,1988,1986,1,0,0,0,1988,1987,1,0,0,0,1989,1991,
        1,0,0,0,1990,1992,5,142,0,0,1991,1990,1,0,0,0,1991,1992,1,0,0,0,
        1992,1993,1,0,0,0,1993,1995,5,6,0,0,1994,1996,5,142,0,0,1995,1994,
        1,0,0,0,1995,1996,1,0,0,0,1996,1997,1,0,0,0,1997,1998,3,172,86,0,
        1998,235,1,0,0,0,1999,2001,5,2,0,0,2000,2002,5,142,0,0,2001,2000,
        1,0,0,0,2001,2002,1,0,0,0,2002,2003,1,0,0,0,2003,2005,3,172,86,0,
        2004,2006,5,142,0,0,2005,2004,1,0,0,0,2005,2006,1,0,0,0,2006,2007,
        1,0,0,0,2007,2008,5,3,0,0,2008,237,1,0,0,0,2009,2011,5,121,0,0,2010,
        2012,5,142,0,0,2011,2010,1,0,0,0,2011,2012,1,0,0,0,2012,2013,1,0,
        0,0,2013,2015,5,2,0,0,2014,2016,5,142,0,0,2015,2014,1,0,0,0,2015,
        2016,1,0,0,0,2016,2017,1,0,0,0,2017,2019,5,95,0,0,2018,2020,5,142,
        0,0,2019,2018,1,0,0,0,2019,2020,1,0,0,0,2020,2021,1,0,0,0,2021,2058,
        5,3,0,0,2022,2024,3,240,120,0,2023,2025,5,142,0,0,2024,2023,1,0,
        0,0,2024,2025,1,0,0,0,2025,2026,1,0,0,0,2026,2028,5,2,0,0,2027,2029,
        5,142,0,0,2028,2027,1,0,0,0,2028,2029,1,0,0,0,2029,2034,1,0,0,0,
        2030,2032,5,94,0,0,2031,2033,5,142,0,0,2032,2031,1,0,0,0,2032,2033,
        1,0,0,0,2033,2035,1,0,0,0,2034,2030,1,0,0,0,2034,2035,1,0,0,0,2035,
        2053,1,0,0,0,2036,2038,3,242,121,0,2037,2039,5,142,0,0,2038,2037,
        1,0,0,0,2038,2039,1,0,0,0,2039,2050,1,0,0,0,2040,2042,5,4,0,0,2041,
        2043,5,142,0,0,2042,2041,1,0,0,0,2042,2043,1,0,0,0,2043,2044,1,0,
        0,0,2044,2046,3,242,121,0,2045,2047,5,142,0,0,2046,2045,1,0,0,0,
        2046,2047,1,0,0,0,2047,2049,1,0,0,0,2048,2040,1,0,0,0,2049,2052,
        1,0,0,0,2050,2048,1,0,0,0,2050,2051,1,0,0,0,2051,2054,1,0,0,0,2052,
        2050,1,0,0,0,2053,2036,1,0,0,0,2053,2054,1,0,0,0,2054,2055,1,0,0,
        0,2055,2056,5,3,0,0,2056,2058,1,0,0,0,2057,2009,1,0,0,0,2057,2022,
        1,0,0,0,2058,239,1,0,0,0,2059,2060,3,272,136,0,2060,241,1,0,0,0,
        2061,2063,3,272,136,0,2062,2064,5,142,0,0,2063,2062,1,0,0,0,2063,
        2064,1,0,0,0,2064,2065,1,0,0,0,2065,2066,5,6,0,0,2066,2068,5,5,0,
        0,2067,2069,5,142,0,0,2068,2067,1,0,0,0,2068,2069,1,0,0,0,2069,2071,
        1,0,0,0,2070,2061,1,0,0,0,2070,2071,1,0,0,0,2071,2072,1,0,0,0,2072,
        2073,3,172,86,0,2073,243,1,0,0,0,2074,2079,3,140,70,0,2075,2077,
        5,142,0,0,2076,2075,1,0,0,0,2076,2077,1,0,0,0,2077,2078,1,0,0,0,
        2078,2080,3,142,71,0,2079,2076,1,0,0,0,2080,2081,1,0,0,0,2081,2079,
        1,0,0,0,2081,2082,1,0,0,0,2082,245,1,0,0,0,2083,2085,5,122,0,0,2084,
        2086,5,142,0,0,2085,2084,1,0,0,0,2085,2086,1,0,0,0,2086,2087,1,0,
        0,0,2087,2089,5,9,0,0,2088,2090,5,142,0,0,2089,2088,1,0,0,0,2089,
        2090,1,0,0,0,2090,2091,1,0,0,0,2091,2093,5,84,0,0,2092,2094,5,142,
        0,0,2093,2092,1,0,0,0,2093,2094,1,0,0,0,2094,2095,1,0,0,0,2095,2100,
        3,132,66,0,2096,2098,5,142,0,0,2097,2096,1,0,0,0,2097,2098,1,0,0,
        0,2098,2099,1,0,0,0,2099,2101,3,130,65,0,2100,2097,1,0,0,0,2100,
        2101,1,0,0,0,2101,2103,1,0,0,0,2102,2104,5,142,0,0,2103,2102,1,0,
        0,0,2103,2104,1,0,0,0,2104,2105,1,0,0,0,2105,2106,5,10,0,0,2106,
        247,1,0,0,0,2107,2109,5,121,0,0,2108,2110,5,142,0,0,2109,2108,1,
        0,0,0,2109,2110,1,0,0,0,2110,2111,1,0,0,0,2111,2113,5,9,0,0,2112,
        2114,5,142,0,0,2113,2112,1,0,0,0,2113,2114,1,0,0,0,2114,2115,1,0,
        0,0,2115,2117,5,84,0,0,2116,2118,5,142,0,0,2117,2116,1,0,0,0,2117,
        2118,1,0,0,0,2118,2119,1,0,0,0,2119,2124,3,132,66,0,2120,2122,5,
        142,0,0,2121,2120,1,0,0,0,2121,2122,1,0,0,0,2122,2123,1,0,0,0,2123,
        2125,3,130,65,0,2124,2121,1,0,0,0,2124,2125,1,0,0,0,2125,2127,1,
        0,0,0,2126,2128,5,142,0,0,2127,2126,1,0,0,0,2127,2128,1,0,0,0,2128,
        2129,1,0,0,0,2129,2130,5,10,0,0,2130,249,1,0,0,0,2131,2133,5,26,
        0,0,2132,2134,5,142,0,0,2133,2132,1,0,0,0,2133,2134,1,0,0,0,2134,
        2137,1,0,0,0,2135,2138,3,264,132,0,2136,2138,5,95,0,0,2137,2135,
        1,0,0,0,2137,2136,1,0,0,0,2138,251,1,0,0,0,2139,2144,5,123,0,0,2140,
        2142,5,142,0,0,2141,2140,1,0,0,0,2141,2142,1,0,0,0,2142,2143,1,0,
        0,0,2143,2145,3,254,127,0,2144,2141,1,0,0,0,2145,2146,1,0,0,0,2146,
        2144,1,0,0,0,2146,2147,1,0,0,0,2147,2162,1,0,0,0,2148,2150,5,123,
        0,0,2149,2151,5,142,0,0,2150,2149,1,0,0,0,2150,2151,1,0,0,0,2151,
        2152,1,0,0,0,2152,2157,3,172,86,0,2153,2155,5,142,0,0,2154,2153,
        1,0,0,0,2154,2155,1,0,0,0,2155,2156,1,0,0,0,2156,2158,3,254,127,
        0,2157,2154,1,0,0,0,2158,2159,1,0,0,0,2159,2157,1,0,0,0,2159,2160,
        1,0,0,0,2160,2162,1,0,0,0,2161,2139,1,0,0,0,2161,2148,1,0,0,0,2162,
        2171,1,0,0,0,2163,2165,5,142,0,0,2164,2163,1,0,0,0,2164,2165,1,0,
        0,0,2165,2166,1,0,0,0,2166,2168,5,124,0,0,2167,2169,5,142,0,0,2168,
        2167,1,0,0,0,2168,2169,1,0,0,0,2169,2170,1,0,0,0,2170,2172,3,172,
        86,0,2171,2164,1,0,0,0,2171,2172,1,0,0,0,2172,2174,1,0,0,0,2173,
        2175,5,142,0,0,2174,2173,1,0,0,0,2174,2175,1,0,0,0,2175,2176,1,0,
        0,0,2176,2177,5,125,0,0,2177,253,1,0,0,0,2178,2180,5,126,0,0,2179,
        2181,5,142,0,0,2180,2179,1,0,0,0,2180,2181,1,0,0,0,2181,2182,1,0,
        0,0,2182,2184,3,172,86,0,2183,2185,5,142,0,0,2184,2183,1,0,0,0,2184,
        2185,1,0,0,0,2185,2186,1,0,0,0,2186,2188,5,127,0,0,2187,2189,5,142,
        0,0,2188,2187,1,0,0,0,2188,2189,1,0,0,0,2189,2190,1,0,0,0,2190,2191,
        3,172,86,0,2191,255,1,0,0,0,2192,2193,3,272,136,0,2193,257,1,0,0,
        0,2194,2197,3,268,134,0,2195,2197,3,266,133,0,2196,2194,1,0,0,0,
        2196,2195,1,0,0,0,2197,259,1,0,0,0,2198,2201,5,27,0,0,2199,2202,
        3,272,136,0,2200,2202,5,130,0,0,2201,2199,1,0,0,0,2201,2200,1,0,
        0,0,2202,261,1,0,0,0,2203,2205,3,222,111,0,2204,2206,5,142,0,0,2205,
        2204,1,0,0,0,2205,2206,1,0,0,0,2206,2207,1,0,0,0,2207,2208,3,250,
        125,0,2208,263,1,0,0,0,2209,2210,3,270,135,0,2210,265,1,0,0,0,2211,
        2212,5,130,0,0,2212,267,1,0,0,0,2213,2214,5,137,0,0,2214,269,1,0,
        0,0,2215,2216,3,272,136,0,2216,271,1,0,0,0,2217,2223,5,138,0,0,2218,
        2219,5,141,0,0,2219,2223,6,136,-1,0,2220,2223,5,131,0,0,2221,2223,
        3,274,137,0,2222,2217,1,0,0,0,2222,2218,1,0,0,0,2222,2220,1,0,0,
        0,2222,2221,1,0,0,0,2223,273,1,0,0,0,2224,2225,7,6,0,0,2225,275,
        1,0,0,0,2226,2227,7,7,0,0,2227,277,1,0,0,0,2228,2229,7,8,0,0,2229,
        279,1,0,0,0,2230,2231,7,9,0,0,2231,281,1,0,0,0,390,283,286,289,293,
        296,299,312,318,322,326,330,333,339,343,347,351,355,359,364,375,
        379,383,388,401,405,413,417,421,425,431,435,457,461,464,467,470,
        473,477,482,486,496,500,505,510,515,521,525,529,534,541,545,549,
        552,556,560,565,570,574,584,594,598,602,606,611,623,627,631,635,
        639,641,645,649,651,665,669,673,677,682,685,689,693,695,699,703,
        705,743,754,776,780,785,796,800,804,812,816,820,826,830,834,840,
        844,848,852,856,860,866,873,878,884,904,910,915,920,924,929,935,
        940,943,947,951,955,961,965,970,975,979,982,986,990,994,998,1002,
        1008,1012,1017,1021,1030,1036,1044,1048,1052,1056,1063,1067,1071,
        1075,1078,1081,1087,1090,1094,1098,1102,1105,1109,1119,1125,1132,
        1145,1149,1153,1157,1162,1167,1171,1177,1181,1185,1189,1194,1200,
        1203,1209,1212,1218,1222,1226,1230,1234,1239,1244,1248,1253,1256,
        1265,1274,1279,1292,1295,1303,1307,1312,1317,1321,1326,1332,1337,
        1344,1348,1352,1354,1358,1360,1364,1366,1372,1378,1382,1385,1388,
        1394,1397,1400,1404,1410,1413,1416,1420,1424,1428,1430,1434,1436,
        1440,1442,1446,1448,1454,1458,1462,1466,1470,1474,1478,1482,1486,
        1489,1495,1499,1503,1506,1511,1516,1521,1526,1532,1538,1541,1544,
        1547,1551,1554,1557,1560,1563,1567,1571,1575,1579,1583,1586,1589,
        1593,1597,1601,1605,1607,1613,1616,1619,1625,1628,1631,1652,1662,
        1672,1677,1679,1685,1689,1693,1697,1701,1709,1713,1717,1721,1727,
        1731,1737,1741,1746,1751,1755,1760,1765,1769,1775,1782,1786,1792,
        1799,1803,1809,1816,1820,1825,1830,1832,1836,1839,1846,1849,1853,
        1861,1865,1880,1883,1888,1902,1906,1911,1923,1931,1937,1941,1945,
        1949,1952,1958,1961,1965,1969,1973,1977,1981,1988,1991,1995,2001,
        2005,2011,2015,2019,2024,2028,2032,2034,2038,2042,2046,2050,2053,
        2057,2063,2068,2070,2076,2081,2085,2089,2093,2097,2100,2103,2109,
        2113,2117,2121,2124,2127,2133,2137,2141,2146,2150,2154,2159,2161,
        2164,2168,2171,2174,2180,2184,2188,2196,2201,2205,2222
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
    public NOT(): antlr.TerminalNode {
        return this.getToken(CypherParser.NOT, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
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
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
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

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
    public static readonly ADD = 46;
    public static readonly ALL = 47;
    public static readonly ALTER = 48;
    public static readonly AND = 49;
    public static readonly AS = 50;
    public static readonly ASC = 51;
    public static readonly ASCENDING = 52;
    public static readonly ATTACH = 53;
    public static readonly BEGIN = 54;
    public static readonly BY = 55;
    public static readonly CALL = 56;
    public static readonly CASE = 57;
    public static readonly CAST = 58;
    public static readonly COLUMN = 59;
    public static readonly COMMENT = 60;
    public static readonly COMMIT = 61;
    public static readonly COMMIT_SKIP_CHECKPOINT = 62;
    public static readonly CONTAINS = 63;
    public static readonly COPY = 64;
    public static readonly COUNT = 65;
    public static readonly CREATE = 66;
    public static readonly CYCLE = 67;
    public static readonly DATABASE = 68;
    public static readonly DBTYPE = 69;
    public static readonly DEFAULT = 70;
    public static readonly DELETE = 71;
    public static readonly DESC = 72;
    public static readonly DESCENDING = 73;
    public static readonly DETACH = 74;
    public static readonly DISTINCT = 75;
    public static readonly DROP = 76;
    public static readonly ELSE = 77;
    public static readonly END = 78;
    public static readonly ENDS = 79;
    public static readonly EXISTS = 80;
    public static readonly EXPLAIN = 81;
    public static readonly EXPORT = 82;
    public static readonly EXTENSION = 83;
    public static readonly FALSE = 84;
    public static readonly FROM = 85;
    public static readonly GLOB = 86;
    public static readonly GRAPH = 87;
    public static readonly GROUP = 88;
    public static readonly HEADERS = 89;
    public static readonly IMPORT = 90;
    public static readonly IF = 91;
    public static readonly IN = 92;
    public static readonly INCREMENT = 93;
    public static readonly INSTALL = 94;
    public static readonly IS = 95;
    public static readonly KEY = 96;
    public static readonly LIMIT = 97;
    public static readonly LOAD = 98;
    public static readonly MACRO = 99;
    public static readonly MATCH = 100;
    public static readonly MAXVALUE = 101;
    public static readonly MERGE = 102;
    public static readonly MINVALUE = 103;
    public static readonly NO = 104;
    public static readonly NODE = 105;
    public static readonly NOT = 106;
    public static readonly NULL = 107;
    public static readonly ON = 108;
    public static readonly ONLY = 109;
    public static readonly OPTIONAL = 110;
    public static readonly OR = 111;
    public static readonly ORDER = 112;
    public static readonly PRIMARY = 113;
    public static readonly PROFILE = 114;
    public static readonly PROJECT = 115;
    public static readonly RDFGRAPH = 116;
    public static readonly READ = 117;
    public static readonly REL = 118;
    public static readonly RENAME = 119;
    public static readonly RETURN = 120;
    public static readonly ROLLBACK = 121;
    public static readonly ROLLBACK_SKIP_CHECKPOINT = 122;
    public static readonly SEQUENCE = 123;
    public static readonly SET = 124;
    public static readonly SHORTEST = 125;
    public static readonly START = 126;
    public static readonly STARTS = 127;
    public static readonly TABLE = 128;
    public static readonly THEN = 129;
    public static readonly TO = 130;
    public static readonly TRANSACTION = 131;
    public static readonly TRUE = 132;
    public static readonly TYPE = 133;
    public static readonly UNION = 134;
    public static readonly UNWIND = 135;
    public static readonly USE = 136;
    public static readonly WHEN = 137;
    public static readonly WHERE = 138;
    public static readonly WITH = 139;
    public static readonly WRITE = 140;
    public static readonly XOR = 141;
    public static readonly DECIMAL = 142;
    public static readonly STAR = 143;
    public static readonly L_SKIP = 144;
    public static readonly INVALID_NOT_EQUAL = 145;
    public static readonly MINUS = 146;
    public static readonly FACTORIAL = 147;
    public static readonly COLON = 148;
    public static readonly StringLiteral = 149;
    public static readonly EscapedChar = 150;
    public static readonly DecimalInteger = 151;
    public static readonly HexLetter = 152;
    public static readonly HexDigit = 153;
    public static readonly Digit = 154;
    public static readonly NonZeroDigit = 155;
    public static readonly NonZeroOctDigit = 156;
    public static readonly ZeroDigit = 157;
    public static readonly RegularDecimalReal = 158;
    public static readonly UnescapedSymbolicName = 159;
    public static readonly IdentifierStart = 160;
    public static readonly IdentifierPart = 161;
    public static readonly EscapedSymbolicName = 162;
    public static readonly SP = 163;
    public static readonly WHITESPACE = 164;
    public static readonly CypherComment = 165;
    public static readonly Unknown = 166;
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
    public static readonly RULE_kU_Option = 11;
    public static readonly RULE_kU_Options = 12;
    public static readonly RULE_kU_DetachDatabase = 13;
    public static readonly RULE_kU_UseDatabase = 14;
    public static readonly RULE_kU_StandaloneCall = 15;
    public static readonly RULE_kU_CommentOn = 16;
    public static readonly RULE_kU_CreateMacro = 17;
    public static readonly RULE_kU_PositionalArgs = 18;
    public static readonly RULE_kU_DefaultArg = 19;
    public static readonly RULE_kU_FilePaths = 20;
    public static readonly RULE_kU_ParsingOptions = 21;
    public static readonly RULE_kU_IfNotExists = 22;
    public static readonly RULE_kU_CreateNodeTable = 23;
    public static readonly RULE_kU_CreateRelTable = 24;
    public static readonly RULE_kU_CreateRelTableGroup = 25;
    public static readonly RULE_kU_RelTableConnection = 26;
    public static readonly RULE_kU_CreateRdfGraph = 27;
    public static readonly RULE_kU_CreateSequence = 28;
    public static readonly RULE_kU_CreateType = 29;
    public static readonly RULE_kU_SequenceOptions = 30;
    public static readonly RULE_kU_IncrementBy = 31;
    public static readonly RULE_kU_MinValue = 32;
    public static readonly RULE_kU_MaxValue = 33;
    public static readonly RULE_kU_StartWith = 34;
    public static readonly RULE_kU_Cycle = 35;
    public static readonly RULE_kU_Drop = 36;
    public static readonly RULE_kU_AlterTable = 37;
    public static readonly RULE_kU_AlterOptions = 38;
    public static readonly RULE_kU_AddProperty = 39;
    public static readonly RULE_kU_Default = 40;
    public static readonly RULE_kU_DropProperty = 41;
    public static readonly RULE_kU_RenameTable = 42;
    public static readonly RULE_kU_RenameProperty = 43;
    public static readonly RULE_kU_PropertyDefinitions = 44;
    public static readonly RULE_kU_PropertyDefinition = 45;
    public static readonly RULE_kU_PropertyDefinitionsDDL = 46;
    public static readonly RULE_kU_PropertyDefinitionDDL = 47;
    public static readonly RULE_kU_CreateNodeConstraint = 48;
    public static readonly RULE_kU_DataType = 49;
    public static readonly RULE_kU_ListIdentifiers = 50;
    public static readonly RULE_kU_ListIdentifier = 51;
    public static readonly RULE_oC_AnyCypherOption = 52;
    public static readonly RULE_oC_Explain = 53;
    public static readonly RULE_oC_Profile = 54;
    public static readonly RULE_kU_Transaction = 55;
    public static readonly RULE_kU_Extension = 56;
    public static readonly RULE_kU_LoadExtension = 57;
    public static readonly RULE_kU_InstallExtension = 58;
    public static readonly RULE_oC_Query = 59;
    public static readonly RULE_kU_ProjectGraph = 60;
    public static readonly RULE_kU_GraphProjectionTableItems = 61;
    public static readonly RULE_oC_RegularQuery = 62;
    public static readonly RULE_oC_Union = 63;
    public static readonly RULE_oC_SingleQuery = 64;
    public static readonly RULE_oC_SinglePartQuery = 65;
    public static readonly RULE_oC_MultiPartQuery = 66;
    public static readonly RULE_kU_QueryPart = 67;
    public static readonly RULE_oC_UpdatingClause = 68;
    public static readonly RULE_oC_ReadingClause = 69;
    public static readonly RULE_kU_LoadFrom = 70;
    public static readonly RULE_kU_InQueryCall = 71;
    public static readonly RULE_kU_GraphProjectionTableItem = 72;
    public static readonly RULE_kU_GraphProjectionColumnItems = 73;
    public static readonly RULE_kU_GraphProjectionColumnItem = 74;
    public static readonly RULE_oC_Match = 75;
    public static readonly RULE_oC_Unwind = 76;
    public static readonly RULE_oC_Create = 77;
    public static readonly RULE_oC_Merge = 78;
    public static readonly RULE_oC_MergeAction = 79;
    public static readonly RULE_oC_Set = 80;
    public static readonly RULE_oC_SetItem = 81;
    public static readonly RULE_oC_Delete = 82;
    public static readonly RULE_oC_With = 83;
    public static readonly RULE_oC_Return = 84;
    public static readonly RULE_oC_ProjectionBody = 85;
    public static readonly RULE_oC_ProjectionItems = 86;
    public static readonly RULE_oC_ProjectionItem = 87;
    public static readonly RULE_oC_Order = 88;
    public static readonly RULE_oC_Skip = 89;
    public static readonly RULE_oC_Limit = 90;
    public static readonly RULE_oC_SortItem = 91;
    public static readonly RULE_oC_Where = 92;
    public static readonly RULE_oC_Pattern = 93;
    public static readonly RULE_oC_PatternPart = 94;
    public static readonly RULE_oC_AnonymousPatternPart = 95;
    public static readonly RULE_oC_PatternElement = 96;
    public static readonly RULE_oC_NodePattern = 97;
    public static readonly RULE_oC_PatternElementChain = 98;
    public static readonly RULE_oC_RelationshipPattern = 99;
    public static readonly RULE_oC_RelationshipDetail = 100;
    public static readonly RULE_kU_Properties = 101;
    public static readonly RULE_oC_RelationshipTypes = 102;
    public static readonly RULE_oC_NodeLabels = 103;
    public static readonly RULE_oC_NodeLabel = 104;
    public static readonly RULE_oC_RangeLiteral = 105;
    public static readonly RULE_kU_RecursiveRelationshipComprehension = 106;
    public static readonly RULE_kU_IntermediateNodeProjectionItems = 107;
    public static readonly RULE_kU_IntermediateRelProjectionItems = 108;
    public static readonly RULE_oC_LowerBound = 109;
    public static readonly RULE_oC_UpperBound = 110;
    public static readonly RULE_oC_LabelName = 111;
    public static readonly RULE_oC_RelTypeName = 112;
    public static readonly RULE_oC_Expression = 113;
    public static readonly RULE_oC_OrExpression = 114;
    public static readonly RULE_oC_XorExpression = 115;
    public static readonly RULE_oC_AndExpression = 116;
    public static readonly RULE_oC_NotExpression = 117;
    public static readonly RULE_oC_ComparisonExpression = 118;
    public static readonly RULE_kU_ComparisonOperator = 119;
    public static readonly RULE_kU_BitwiseOrOperatorExpression = 120;
    public static readonly RULE_kU_BitwiseAndOperatorExpression = 121;
    public static readonly RULE_kU_BitShiftOperatorExpression = 122;
    public static readonly RULE_kU_BitShiftOperator = 123;
    public static readonly RULE_oC_AddOrSubtractExpression = 124;
    public static readonly RULE_kU_AddOrSubtractOperator = 125;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 126;
    public static readonly RULE_kU_MultiplyDivideModuloOperator = 127;
    public static readonly RULE_oC_PowerOfExpression = 128;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 129;
    public static readonly RULE_oC_StringListNullOperatorExpression = 130;
    public static readonly RULE_oC_ListOperatorExpression = 131;
    public static readonly RULE_oC_StringOperatorExpression = 132;
    public static readonly RULE_oC_RegularExpression = 133;
    public static readonly RULE_oC_NullOperatorExpression = 134;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 135;
    public static readonly RULE_oC_Atom = 136;
    public static readonly RULE_oC_Literal = 137;
    public static readonly RULE_oC_BooleanLiteral = 138;
    public static readonly RULE_oC_ListLiteral = 139;
    public static readonly RULE_kU_ListEntry = 140;
    public static readonly RULE_kU_StructLiteral = 141;
    public static readonly RULE_kU_StructField = 142;
    public static readonly RULE_oC_ParenthesizedExpression = 143;
    public static readonly RULE_oC_FunctionInvocation = 144;
    public static readonly RULE_oC_FunctionName = 145;
    public static readonly RULE_kU_FunctionParameter = 146;
    public static readonly RULE_oC_PathPatterns = 147;
    public static readonly RULE_oC_ExistSubquery = 148;
    public static readonly RULE_kU_CountSubquery = 149;
    public static readonly RULE_oC_PropertyLookup = 150;
    public static readonly RULE_oC_CaseExpression = 151;
    public static readonly RULE_oC_CaseAlternative = 152;
    public static readonly RULE_oC_Variable = 153;
    public static readonly RULE_oC_NumberLiteral = 154;
    public static readonly RULE_oC_Parameter = 155;
    public static readonly RULE_oC_PropertyExpression = 156;
    public static readonly RULE_oC_PropertyKeyName = 157;
    public static readonly RULE_oC_IntegerLiteral = 158;
    public static readonly RULE_oC_DoubleLiteral = 159;
    public static readonly RULE_oC_SchemaName = 160;
    public static readonly RULE_oC_SymbolicName = 161;
    public static readonly RULE_kU_NonReservedKeywords = 162;
    public static readonly RULE_oC_LeftArrowHead = 163;
    public static readonly RULE_oC_RightArrowHead = 164;
    public static readonly RULE_oC_Dash = 165;

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
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, "'*'", null, "'!='", "'-'", "'!'", "':'", 
        null, null, null, null, null, null, null, null, "'0'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "ADD", "ALL", "ALTER", "AND", "AS", "ASC", "ASCENDING", 
        "ATTACH", "BEGIN", "BY", "CALL", "CASE", "CAST", "COLUMN", "COMMENT", 
        "COMMIT", "COMMIT_SKIP_CHECKPOINT", "CONTAINS", "COPY", "COUNT", 
        "CREATE", "CYCLE", "DATABASE", "DBTYPE", "DEFAULT", "DELETE", "DESC", 
        "DESCENDING", "DETACH", "DISTINCT", "DROP", "ELSE", "END", "ENDS", 
        "EXISTS", "EXPLAIN", "EXPORT", "EXTENSION", "FALSE", "FROM", "GLOB", 
        "GRAPH", "GROUP", "HEADERS", "IMPORT", "IF", "IN", "INCREMENT", 
        "INSTALL", "IS", "KEY", "LIMIT", "LOAD", "MACRO", "MATCH", "MAXVALUE", 
        "MERGE", "MINVALUE", "NO", "NODE", "NOT", "NULL", "ON", "ONLY", 
        "OPTIONAL", "OR", "ORDER", "PRIMARY", "PROFILE", "PROJECT", "RDFGRAPH", 
        "READ", "REL", "RENAME", "RETURN", "ROLLBACK", "ROLLBACK_SKIP_CHECKPOINT", 
        "SEQUENCE", "SET", "SHORTEST", "START", "STARTS", "TABLE", "THEN", 
        "TO", "TRANSACTION", "TRUE", "TYPE", "UNION", "UNWIND", "USE", "WHEN", 
        "WHERE", "WITH", "WRITE", "XOR", "DECIMAL", "STAR", "L_SKIP", "INVALID_NOT_EQUAL", 
        "MINUS", "FACTORIAL", "COLON", "StringLiteral", "EscapedChar", "DecimalInteger", 
        "HexLetter", "HexDigit", "Digit", "NonZeroDigit", "NonZeroOctDigit", 
        "ZeroDigit", "RegularDecimalReal", "UnescapedSymbolicName", "IdentifierStart", 
        "IdentifierPart", "EscapedSymbolicName", "SP", "WHITESPACE", "CypherComment", 
        "Unknown"
    ];
    public static readonly ruleNames = [
        "ku_Statements", "oC_Cypher", "oC_Statement", "kU_CopyFrom", "kU_ColumnNames", 
        "kU_ScanSource", "kU_CopyFromByColumn", "kU_CopyTO", "kU_ExportDatabase", 
        "kU_ImportDatabase", "kU_AttachDatabase", "kU_Option", "kU_Options", 
        "kU_DetachDatabase", "kU_UseDatabase", "kU_StandaloneCall", "kU_CommentOn", 
        "kU_CreateMacro", "kU_PositionalArgs", "kU_DefaultArg", "kU_FilePaths", 
        "kU_ParsingOptions", "kU_IfNotExists", "kU_CreateNodeTable", "kU_CreateRelTable", 
        "kU_CreateRelTableGroup", "kU_RelTableConnection", "kU_CreateRdfGraph", 
        "kU_CreateSequence", "kU_CreateType", "kU_SequenceOptions", "kU_IncrementBy", 
        "kU_MinValue", "kU_MaxValue", "kU_StartWith", "kU_Cycle", "kU_Drop", 
        "kU_AlterTable", "kU_AlterOptions", "kU_AddProperty", "kU_Default", 
        "kU_DropProperty", "kU_RenameTable", "kU_RenameProperty", "kU_PropertyDefinitions", 
        "kU_PropertyDefinition", "kU_PropertyDefinitionsDDL", "kU_PropertyDefinitionDDL", 
        "kU_CreateNodeConstraint", "kU_DataType", "kU_ListIdentifiers", 
        "kU_ListIdentifier", "oC_AnyCypherOption", "oC_Explain", "oC_Profile", 
        "kU_Transaction", "kU_Extension", "kU_LoadExtension", "kU_InstallExtension", 
        "oC_Query", "kU_ProjectGraph", "kU_GraphProjectionTableItems", "oC_RegularQuery", 
        "oC_Union", "oC_SingleQuery", "oC_SinglePartQuery", "oC_MultiPartQuery", 
        "kU_QueryPart", "oC_UpdatingClause", "oC_ReadingClause", "kU_LoadFrom", 
        "kU_InQueryCall", "kU_GraphProjectionTableItem", "kU_GraphProjectionColumnItems", 
        "kU_GraphProjectionColumnItem", "oC_Match", "oC_Unwind", "oC_Create", 
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
            this.state = 332;
            this.oC_Cypher();
            this.state = 343;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 334;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 333;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 336;
                    this.match(CypherParser.T__0);
                    this.state = 338;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                    case 1:
                        {
                        this.state = 337;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    this.state = 340;
                    this.oC_Cypher();
                    }
                    }
                }
                this.state = 345;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            }
            this.state = 347;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 346;
                this.match(CypherParser.SP);
                }
            }

            this.state = 349;
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
            this.state = 352;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===81 || _la===114) {
                {
                this.state = 351;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 355;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 354;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 357;
            this.oC_Statement();
            }
            this.state = 362;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
            case 1:
                {
                this.state = 359;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 358;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 361;
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
            this.state = 386;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 364;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 365;
                this.kU_CreateNodeTable();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 366;
                this.kU_CreateRelTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 367;
                this.kU_CreateRelTableGroup();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 368;
                this.kU_CreateRdfGraph();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 369;
                this.kU_CreateSequence();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 370;
                this.kU_CreateType();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 371;
                this.kU_Drop();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 372;
                this.kU_AlterTable();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 373;
                this.kU_CopyFrom();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 374;
                this.kU_CopyFromByColumn();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 375;
                this.kU_CopyTO();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 376;
                this.kU_StandaloneCall();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 377;
                this.kU_CreateMacro();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 378;
                this.kU_CommentOn();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 379;
                this.kU_Transaction();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 380;
                this.kU_Extension();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 381;
                this.kU_ExportDatabase();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 382;
                this.kU_ImportDatabase();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 383;
                this.kU_AttachDatabase();
                }
                break;
            case 21:
                this.enterOuterAlt(localctx, 21);
                {
                this.state = 384;
                this.kU_DetachDatabase();
                }
                break;
            case 22:
                this.enterOuterAlt(localctx, 22);
                {
                this.state = 385;
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
            this.state = 388;
            this.match(CypherParser.COPY);
            this.state = 389;
            this.match(CypherParser.SP);
            this.state = 390;
            this.oC_SchemaName();
            this.state = 399;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                {
                {
                this.state = 392;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 391;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 394;
                this.kU_ColumnNames();
                this.state = 396;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 395;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                break;
            case 2:
                {
                this.state = 398;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 401;
            this.match(CypherParser.FROM);
            this.state = 402;
            this.match(CypherParser.SP);
            this.state = 403;
            this.kU_ScanSource();
            this.state = 408;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                {
                this.state = 405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 404;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 407;
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
            this.state = 410;
            this.match(CypherParser.T__1);
            this.state = 412;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 411;
                this.match(CypherParser.SP);
                }
            }

            this.state = 414;
            this.oC_SchemaName();
            this.state = 425;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 416;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 415;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 418;
                    this.match(CypherParser.T__2);
                    this.state = 420;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 419;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 422;
                    this.oC_SchemaName();
                    }
                    }
                }
                this.state = 427;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            }
            this.state = 429;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 428;
                this.match(CypherParser.SP);
                }
            }

            this.state = 431;
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
            this.state = 452;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 433;
                this.kU_FilePaths();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 434;
                this.match(CypherParser.T__1);
                this.state = 436;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 435;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 438;
                this.oC_Query();
                this.state = 440;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 439;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 442;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 444;
                this.oC_Variable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 445;
                this.oC_Variable();
                this.state = 446;
                this.match(CypherParser.T__4);
                this.state = 448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 447;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 450;
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
            this.state = 454;
            this.match(CypherParser.COPY);
            this.state = 455;
            this.match(CypherParser.SP);
            this.state = 456;
            this.oC_SchemaName();
            this.state = 457;
            this.match(CypherParser.SP);
            this.state = 458;
            this.match(CypherParser.FROM);
            this.state = 459;
            this.match(CypherParser.SP);
            this.state = 460;
            this.match(CypherParser.T__1);
            this.state = 462;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 461;
                this.match(CypherParser.SP);
                }
            }

            this.state = 464;
            this.match(CypherParser.StringLiteral);
            this.state = 475;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3 || _la===163) {
                {
                {
                this.state = 466;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 465;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 468;
                this.match(CypherParser.T__2);
                this.state = 470;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 469;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 472;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 477;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 478;
            this.match(CypherParser.T__3);
            this.state = 479;
            this.match(CypherParser.SP);
            this.state = 480;
            this.match(CypherParser.BY);
            this.state = 481;
            this.match(CypherParser.SP);
            this.state = 482;
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
            this.state = 484;
            this.match(CypherParser.COPY);
            this.state = 485;
            this.match(CypherParser.SP);
            this.state = 486;
            this.match(CypherParser.T__1);
            this.state = 488;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 487;
                this.match(CypherParser.SP);
                }
            }

            this.state = 490;
            this.oC_Query();
            this.state = 492;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 491;
                this.match(CypherParser.SP);
                }
            }

            this.state = 494;
            this.match(CypherParser.T__3);
            this.state = 495;
            this.match(CypherParser.SP);
            this.state = 496;
            this.match(CypherParser.TO);
            this.state = 497;
            this.match(CypherParser.SP);
            this.state = 498;
            this.match(CypherParser.StringLiteral);
            this.state = 503;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
            case 1:
                {
                this.state = 500;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 499;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 502;
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
            this.state = 505;
            this.match(CypherParser.EXPORT);
            this.state = 506;
            this.match(CypherParser.SP);
            this.state = 507;
            this.match(CypherParser.DATABASE);
            this.state = 508;
            this.match(CypherParser.SP);
            this.state = 509;
            this.match(CypherParser.StringLiteral);
            this.state = 514;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
            case 1:
                {
                this.state = 511;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 510;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 513;
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
            this.state = 516;
            this.match(CypherParser.IMPORT);
            this.state = 517;
            this.match(CypherParser.SP);
            this.state = 518;
            this.match(CypherParser.DATABASE);
            this.state = 519;
            this.match(CypherParser.SP);
            this.state = 520;
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
            this.state = 522;
            this.match(CypherParser.ATTACH);
            this.state = 523;
            this.match(CypherParser.SP);
            this.state = 524;
            this.match(CypherParser.StringLiteral);
            this.state = 529;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
            case 1:
                {
                this.state = 525;
                this.match(CypherParser.SP);
                this.state = 526;
                this.match(CypherParser.AS);
                this.state = 527;
                this.match(CypherParser.SP);
                this.state = 528;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 531;
            this.match(CypherParser.SP);
            this.state = 532;
            this.match(CypherParser.T__1);
            this.state = 534;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 533;
                this.match(CypherParser.SP);
                }
            }

            this.state = 536;
            this.match(CypherParser.DBTYPE);
            this.state = 537;
            this.match(CypherParser.SP);
            this.state = 538;
            this.oC_SymbolicName();
            this.state = 547;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
            case 1:
                {
                this.state = 540;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 539;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 542;
                this.match(CypherParser.T__2);
                this.state = 544;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 543;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 546;
                this.kU_Options();
                }
                break;
            }
            this.state = 550;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 549;
                this.match(CypherParser.SP);
                }
            }

            this.state = 552;
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
    public kU_Option(): KU_OptionContext {
        let localctx: KU_OptionContext = new KU_OptionContext(this._ctx, this.state);
        this.enterRule(localctx, 22, CypherParser.RULE_kU_Option);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 554;
            this.oC_SymbolicName();
            this.state = 556;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 555;
                this.match(CypherParser.SP);
                }
            }

            this.state = 558;
            this.match(CypherParser.T__5);
            this.state = 560;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 559;
                this.match(CypherParser.SP);
                }
            }

            this.state = 562;
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
    public kU_Options(): KU_OptionsContext {
        let localctx: KU_OptionsContext = new KU_OptionsContext(this._ctx, this.state);
        this.enterRule(localctx, 24, CypherParser.RULE_kU_Options);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 564;
            this.kU_Option();
            this.state = 575;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 566;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 565;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 568;
                    this.match(CypherParser.T__2);
                    this.state = 570;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 569;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 572;
                    this.kU_Option();
                    }
                    }
                }
                this.state = 577;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
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
        this.enterRule(localctx, 26, CypherParser.RULE_kU_DetachDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 578;
            this.match(CypherParser.DETACH);
            this.state = 579;
            this.match(CypherParser.SP);
            this.state = 580;
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
        this.enterRule(localctx, 28, CypherParser.RULE_kU_UseDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 582;
            this.match(CypherParser.USE);
            this.state = 583;
            this.match(CypherParser.SP);
            this.state = 584;
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
        this.enterRule(localctx, 30, CypherParser.RULE_kU_StandaloneCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 586;
            this.match(CypherParser.CALL);
            this.state = 587;
            this.match(CypherParser.SP);
            this.state = 588;
            this.oC_SymbolicName();
            this.state = 590;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 589;
                this.match(CypherParser.SP);
                }
            }

            this.state = 592;
            this.match(CypherParser.T__5);
            this.state = 594;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 593;
                this.match(CypherParser.SP);
                }
            }

            this.state = 596;
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
        this.enterRule(localctx, 32, CypherParser.RULE_kU_CommentOn);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 598;
            this.match(CypherParser.COMMENT);
            this.state = 599;
            this.match(CypherParser.SP);
            this.state = 600;
            this.match(CypherParser.ON);
            this.state = 601;
            this.match(CypherParser.SP);
            this.state = 602;
            this.match(CypherParser.TABLE);
            this.state = 603;
            this.match(CypherParser.SP);
            this.state = 604;
            this.oC_SchemaName();
            this.state = 605;
            this.match(CypherParser.SP);
            this.state = 606;
            this.match(CypherParser.IS);
            this.state = 607;
            this.match(CypherParser.SP);
            this.state = 608;
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
        this.enterRule(localctx, 34, CypherParser.RULE_kU_CreateMacro);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 610;
            this.match(CypherParser.CREATE);
            this.state = 611;
            this.match(CypherParser.SP);
            this.state = 612;
            this.match(CypherParser.MACRO);
            this.state = 613;
            this.match(CypherParser.SP);
            this.state = 614;
            this.oC_FunctionName();
            this.state = 616;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 615;
                this.match(CypherParser.SP);
                }
            }

            this.state = 618;
            this.match(CypherParser.T__1);
            this.state = 620;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
            case 1:
                {
                this.state = 619;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 623;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
            case 1:
                {
                this.state = 622;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 626;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
            case 1:
                {
                this.state = 625;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 629;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382991765) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 33216071) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 170199933) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 1153) !== 0)) {
                {
                this.state = 628;
                this.kU_DefaultArg();
                }
            }

            this.state = 641;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 632;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 631;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 634;
                    this.match(CypherParser.T__2);
                    this.state = 636;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 635;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 638;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 643;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
            }
            this.state = 645;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 644;
                this.match(CypherParser.SP);
                }
            }

            this.state = 647;
            this.match(CypherParser.T__3);
            this.state = 648;
            this.match(CypherParser.SP);
            this.state = 649;
            this.match(CypherParser.AS);
            this.state = 650;
            this.match(CypherParser.SP);
            this.state = 651;
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
        this.enterRule(localctx, 36, CypherParser.RULE_kU_PositionalArgs);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 653;
            this.oC_SymbolicName();
            this.state = 664;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 655;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 654;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 657;
                    this.match(CypherParser.T__2);
                    this.state = 659;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 658;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 661;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 666;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
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
        this.enterRule(localctx, 38, CypherParser.RULE_kU_DefaultArg);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 667;
            this.oC_SymbolicName();
            this.state = 669;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 668;
                this.match(CypherParser.SP);
                }
            }

            this.state = 671;
            this.match(CypherParser.COLON);
            this.state = 672;
            this.match(CypherParser.T__5);
            this.state = 674;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 673;
                this.match(CypherParser.SP);
                }
            }

            this.state = 676;
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
        this.enterRule(localctx, 40, CypherParser.RULE_kU_FilePaths);
        let _la: number;
        try {
            this.state = 711;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 678;
                this.match(CypherParser.T__6);
                this.state = 680;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 679;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 682;
                this.match(CypherParser.StringLiteral);
                this.state = 693;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3 || _la===163) {
                    {
                    {
                    this.state = 684;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 683;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 686;
                    this.match(CypherParser.T__2);
                    this.state = 688;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 687;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 690;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 695;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 696;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 697;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 698;
                this.match(CypherParser.GLOB);
                this.state = 700;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 699;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 702;
                this.match(CypherParser.T__1);
                this.state = 704;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 703;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 706;
                this.match(CypherParser.StringLiteral);
                this.state = 708;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 707;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 710;
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
        this.enterRule(localctx, 42, CypherParser.RULE_kU_ParsingOptions);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 713;
            this.match(CypherParser.T__1);
            this.state = 715;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 714;
                this.match(CypherParser.SP);
                }
            }

            this.state = 717;
            this.kU_Options();
            this.state = 719;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 718;
                this.match(CypherParser.SP);
                }
            }

            this.state = 721;
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
    public kU_IfNotExists(): KU_IfNotExistsContext {
        let localctx: KU_IfNotExistsContext = new KU_IfNotExistsContext(this._ctx, this.state);
        this.enterRule(localctx, 44, CypherParser.RULE_kU_IfNotExists);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 723;
            this.match(CypherParser.IF);
            this.state = 724;
            this.match(CypherParser.SP);
            this.state = 725;
            this.match(CypherParser.NOT);
            this.state = 726;
            this.match(CypherParser.SP);
            this.state = 727;
            this.match(CypherParser.EXISTS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 46, CypherParser.RULE_kU_CreateNodeTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 729;
            this.match(CypherParser.CREATE);
            this.state = 730;
            this.match(CypherParser.SP);
            this.state = 731;
            this.match(CypherParser.NODE);
            this.state = 732;
            this.match(CypherParser.SP);
            this.state = 733;
            this.match(CypherParser.TABLE);
            this.state = 734;
            this.match(CypherParser.SP);
            this.state = 738;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
            case 1:
                {
                this.state = 735;
                this.kU_IfNotExists();
                this.state = 736;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 740;
            this.oC_SchemaName();
            this.state = 742;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 741;
                this.match(CypherParser.SP);
                }
            }

            this.state = 744;
            this.match(CypherParser.T__1);
            this.state = 746;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 745;
                this.match(CypherParser.SP);
                }
            }

            this.state = 748;
            this.kU_PropertyDefinitionsDDL();
            this.state = 750;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 749;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 752;
            this.match(CypherParser.T__2);
            this.state = 754;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 753;
                this.match(CypherParser.SP);
                }
            }

            this.state = 756;
            this.kU_CreateNodeConstraint();
            }
            this.state = 759;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 758;
                this.match(CypherParser.SP);
                }
            }

            this.state = 761;
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
        this.enterRule(localctx, 48, CypherParser.RULE_kU_CreateRelTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 763;
            this.match(CypherParser.CREATE);
            this.state = 764;
            this.match(CypherParser.SP);
            this.state = 765;
            this.match(CypherParser.REL);
            this.state = 766;
            this.match(CypherParser.SP);
            this.state = 767;
            this.match(CypherParser.TABLE);
            this.state = 768;
            this.match(CypherParser.SP);
            this.state = 772;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
            case 1:
                {
                this.state = 769;
                this.kU_IfNotExists();
                this.state = 770;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 774;
            this.oC_SchemaName();
            this.state = 776;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 775;
                this.match(CypherParser.SP);
                }
            }

            this.state = 778;
            this.match(CypherParser.T__1);
            this.state = 780;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 779;
                this.match(CypherParser.SP);
                }
            }

            this.state = 782;
            this.kU_RelTableConnection();
            this.state = 784;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 783;
                this.match(CypherParser.SP);
                }
            }

            this.state = 794;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
            case 1:
                {
                this.state = 786;
                this.match(CypherParser.T__2);
                this.state = 788;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 787;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 790;
                this.kU_PropertyDefinitionsDDL();
                this.state = 792;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 791;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 804;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 796;
                this.match(CypherParser.T__2);
                this.state = 798;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 797;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 800;
                this.oC_SymbolicName();
                this.state = 802;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 801;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 806;
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
        this.enterRule(localctx, 50, CypherParser.RULE_kU_CreateRelTableGroup);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 808;
            this.match(CypherParser.CREATE);
            this.state = 809;
            this.match(CypherParser.SP);
            this.state = 810;
            this.match(CypherParser.REL);
            this.state = 811;
            this.match(CypherParser.SP);
            this.state = 812;
            this.match(CypherParser.TABLE);
            this.state = 813;
            this.match(CypherParser.SP);
            this.state = 814;
            this.match(CypherParser.GROUP);
            this.state = 815;
            this.match(CypherParser.SP);
            this.state = 819;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
            case 1:
                {
                this.state = 816;
                this.kU_IfNotExists();
                this.state = 817;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 821;
            this.oC_SchemaName();
            this.state = 823;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 822;
                this.match(CypherParser.SP);
                }
            }

            this.state = 825;
            this.match(CypherParser.T__1);
            this.state = 827;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 826;
                this.match(CypherParser.SP);
                }
            }

            this.state = 829;
            this.kU_RelTableConnection();
            this.state = 838;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 831;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 830;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 833;
                    this.match(CypherParser.T__2);
                    this.state = 835;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 834;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 837;
                    this.kU_RelTableConnection();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 840;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 91, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 843;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 842;
                this.match(CypherParser.SP);
                }
            }

            this.state = 853;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
            case 1:
                {
                this.state = 845;
                this.match(CypherParser.T__2);
                this.state = 847;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 846;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 849;
                this.kU_PropertyDefinitionsDDL();
                this.state = 851;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 850;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 863;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 855;
                this.match(CypherParser.T__2);
                this.state = 857;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 856;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 859;
                this.oC_SymbolicName();
                this.state = 861;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 860;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 865;
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
        this.enterRule(localctx, 52, CypherParser.RULE_kU_RelTableConnection);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 867;
            this.match(CypherParser.FROM);
            this.state = 868;
            this.match(CypherParser.SP);
            this.state = 869;
            this.oC_SchemaName();
            this.state = 870;
            this.match(CypherParser.SP);
            this.state = 871;
            this.match(CypherParser.TO);
            this.state = 872;
            this.match(CypherParser.SP);
            this.state = 873;
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
        this.enterRule(localctx, 54, CypherParser.RULE_kU_CreateRdfGraph);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 875;
            this.match(CypherParser.CREATE);
            this.state = 876;
            this.match(CypherParser.SP);
            this.state = 877;
            this.match(CypherParser.RDFGRAPH);
            this.state = 878;
            this.match(CypherParser.SP);
            this.state = 882;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
            case 1:
                {
                this.state = 879;
                this.kU_IfNotExists();
                this.state = 880;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 884;
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
    public kU_CreateSequence(): KU_CreateSequenceContext {
        let localctx: KU_CreateSequenceContext = new KU_CreateSequenceContext(this._ctx, this.state);
        this.enterRule(localctx, 56, CypherParser.RULE_kU_CreateSequence);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 886;
            this.match(CypherParser.CREATE);
            this.state = 887;
            this.match(CypherParser.SP);
            this.state = 888;
            this.match(CypherParser.SEQUENCE);
            this.state = 889;
            this.match(CypherParser.SP);
            this.state = 893;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
            case 1:
                {
                this.state = 890;
                this.kU_IfNotExists();
                this.state = 891;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 895;
            this.oC_SchemaName();
            this.state = 900;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 101, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 896;
                    this.match(CypherParser.SP);
                    this.state = 897;
                    this.kU_SequenceOptions();
                    }
                    }
                }
                this.state = 902;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 101, this._ctx);
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
    public kU_CreateType(): KU_CreateTypeContext {
        let localctx: KU_CreateTypeContext = new KU_CreateTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 58, CypherParser.RULE_kU_CreateType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 903;
            this.match(CypherParser.CREATE);
            this.state = 904;
            this.match(CypherParser.SP);
            this.state = 905;
            this.match(CypherParser.TYPE);
            this.state = 906;
            this.match(CypherParser.SP);
            this.state = 907;
            this.oC_SchemaName();
            this.state = 908;
            this.match(CypherParser.SP);
            this.state = 909;
            this.match(CypherParser.AS);
            this.state = 910;
            this.match(CypherParser.SP);
            this.state = 911;
            this.kU_DataType(0);
            this.state = 913;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
            case 1:
                {
                this.state = 912;
                this.match(CypherParser.SP);
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
    public kU_SequenceOptions(): KU_SequenceOptionsContext {
        let localctx: KU_SequenceOptionsContext = new KU_SequenceOptionsContext(this._ctx, this.state);
        this.enterRule(localctx, 60, CypherParser.RULE_kU_SequenceOptions);
        try {
            this.state = 920;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 915;
                this.kU_IncrementBy();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 916;
                this.kU_MinValue();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 917;
                this.kU_MaxValue();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 918;
                this.kU_StartWith();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 919;
                this.kU_Cycle();
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
    public kU_IncrementBy(): KU_IncrementByContext {
        let localctx: KU_IncrementByContext = new KU_IncrementByContext(this._ctx, this.state);
        this.enterRule(localctx, 62, CypherParser.RULE_kU_IncrementBy);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 922;
            this.match(CypherParser.INCREMENT);
            this.state = 923;
            this.match(CypherParser.SP);
            this.state = 926;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===55) {
                {
                this.state = 924;
                this.match(CypherParser.BY);
                this.state = 925;
                this.match(CypherParser.SP);
                }
            }

            this.state = 929;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 928;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 931;
            this.oC_IntegerLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_MinValue(): KU_MinValueContext {
        let localctx: KU_MinValueContext = new KU_MinValueContext(this._ctx, this.state);
        this.enterRule(localctx, 64, CypherParser.RULE_kU_MinValue);
        let _la: number;
        try {
            this.state = 942;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 933;
                this.match(CypherParser.NO);
                this.state = 934;
                this.match(CypherParser.SP);
                this.state = 935;
                this.match(CypherParser.MINVALUE);
                }
                }
                break;
            case CypherParser.MINVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 936;
                this.match(CypherParser.MINVALUE);
                this.state = 937;
                this.match(CypherParser.SP);
                this.state = 939;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 938;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 941;
                this.oC_IntegerLiteral();
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
    public kU_MaxValue(): KU_MaxValueContext {
        let localctx: KU_MaxValueContext = new KU_MaxValueContext(this._ctx, this.state);
        this.enterRule(localctx, 66, CypherParser.RULE_kU_MaxValue);
        let _la: number;
        try {
            this.state = 953;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 944;
                this.match(CypherParser.NO);
                this.state = 945;
                this.match(CypherParser.SP);
                this.state = 946;
                this.match(CypherParser.MAXVALUE);
                }
                }
                break;
            case CypherParser.MAXVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 947;
                this.match(CypherParser.MAXVALUE);
                this.state = 948;
                this.match(CypherParser.SP);
                this.state = 950;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===146) {
                    {
                    this.state = 949;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 952;
                this.oC_IntegerLiteral();
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
    public kU_StartWith(): KU_StartWithContext {
        let localctx: KU_StartWithContext = new KU_StartWithContext(this._ctx, this.state);
        this.enterRule(localctx, 68, CypherParser.RULE_kU_StartWith);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 955;
            this.match(CypherParser.START);
            this.state = 956;
            this.match(CypherParser.SP);
            this.state = 959;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===139) {
                {
                this.state = 957;
                this.match(CypherParser.WITH);
                this.state = 958;
                this.match(CypherParser.SP);
                }
            }

            this.state = 962;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 961;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 964;
            this.oC_IntegerLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_Cycle(): KU_CycleContext {
        let localctx: KU_CycleContext = new KU_CycleContext(this._ctx, this.state);
        this.enterRule(localctx, 70, CypherParser.RULE_kU_Cycle);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 968;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===104) {
                {
                this.state = 966;
                this.match(CypherParser.NO);
                this.state = 967;
                this.match(CypherParser.SP);
                }
            }

            this.state = 970;
            this.match(CypherParser.CYCLE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_Drop(): KU_DropContext {
        let localctx: KU_DropContext = new KU_DropContext(this._ctx, this.state);
        this.enterRule(localctx, 72, CypherParser.RULE_kU_Drop);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 972;
            this.match(CypherParser.DROP);
            this.state = 973;
            this.match(CypherParser.SP);
            this.state = 974;
            _la = this._input.LA(1);
            if(!(((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 4225) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 975;
            this.match(CypherParser.SP);
            this.state = 976;
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
        this.enterRule(localctx, 74, CypherParser.RULE_kU_AlterTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 978;
            this.match(CypherParser.ALTER);
            this.state = 979;
            this.match(CypherParser.SP);
            this.state = 980;
            this.match(CypherParser.TABLE);
            this.state = 981;
            this.match(CypherParser.SP);
            this.state = 982;
            this.oC_SchemaName();
            this.state = 983;
            this.match(CypherParser.SP);
            this.state = 984;
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
        this.enterRule(localctx, 76, CypherParser.RULE_kU_AlterOptions);
        try {
            this.state = 990;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 986;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 987;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 988;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 989;
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
        this.enterRule(localctx, 78, CypherParser.RULE_kU_AddProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 992;
            this.match(CypherParser.ADD);
            this.state = 993;
            this.match(CypherParser.SP);
            this.state = 994;
            this.oC_PropertyKeyName();
            this.state = 995;
            this.match(CypherParser.SP);
            this.state = 996;
            this.kU_DataType(0);
            this.state = 999;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
            case 1:
                {
                this.state = 997;
                this.match(CypherParser.SP);
                this.state = 998;
                this.kU_Default();
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
    public kU_Default(): KU_DefaultContext {
        let localctx: KU_DefaultContext = new KU_DefaultContext(this._ctx, this.state);
        this.enterRule(localctx, 80, CypherParser.RULE_kU_Default);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1001;
            this.match(CypherParser.DEFAULT);
            this.state = 1002;
            this.match(CypherParser.SP);
            this.state = 1003;
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
    public kU_DropProperty(): KU_DropPropertyContext {
        let localctx: KU_DropPropertyContext = new KU_DropPropertyContext(this._ctx, this.state);
        this.enterRule(localctx, 82, CypherParser.RULE_kU_DropProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1005;
            this.match(CypherParser.DROP);
            this.state = 1006;
            this.match(CypherParser.SP);
            this.state = 1007;
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
        this.enterRule(localctx, 84, CypherParser.RULE_kU_RenameTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1009;
            this.match(CypherParser.RENAME);
            this.state = 1010;
            this.match(CypherParser.SP);
            this.state = 1011;
            this.match(CypherParser.TO);
            this.state = 1012;
            this.match(CypherParser.SP);
            this.state = 1013;
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
        this.enterRule(localctx, 86, CypherParser.RULE_kU_RenameProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1015;
            this.match(CypherParser.RENAME);
            this.state = 1016;
            this.match(CypherParser.SP);
            this.state = 1017;
            this.oC_PropertyKeyName();
            this.state = 1018;
            this.match(CypherParser.SP);
            this.state = 1019;
            this.match(CypherParser.TO);
            this.state = 1020;
            this.match(CypherParser.SP);
            this.state = 1021;
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
        this.enterRule(localctx, 88, CypherParser.RULE_kU_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1023;
            this.kU_PropertyDefinition();
            this.state = 1034;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 117, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1025;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1024;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1027;
                    this.match(CypherParser.T__2);
                    this.state = 1029;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1028;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1031;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 1036;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 117, this._ctx);
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
        this.enterRule(localctx, 90, CypherParser.RULE_kU_PropertyDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1037;
            this.oC_PropertyKeyName();
            this.state = 1038;
            this.match(CypherParser.SP);
            this.state = 1039;
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
    public kU_PropertyDefinitionsDDL(): KU_PropertyDefinitionsDDLContext {
        let localctx: KU_PropertyDefinitionsDDLContext = new KU_PropertyDefinitionsDDLContext(this._ctx, this.state);
        this.enterRule(localctx, 92, CypherParser.RULE_kU_PropertyDefinitionsDDL);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1041;
            this.kU_PropertyDefinitionDDL();
            this.state = 1052;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 120, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1043;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1042;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1045;
                    this.match(CypherParser.T__2);
                    this.state = 1047;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1046;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1049;
                    this.kU_PropertyDefinitionDDL();
                    }
                    }
                }
                this.state = 1054;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 120, this._ctx);
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
    public kU_PropertyDefinitionDDL(): KU_PropertyDefinitionDDLContext {
        let localctx: KU_PropertyDefinitionDDLContext = new KU_PropertyDefinitionDDLContext(this._ctx, this.state);
        this.enterRule(localctx, 94, CypherParser.RULE_kU_PropertyDefinitionDDL);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1055;
            this.oC_PropertyKeyName();
            this.state = 1056;
            this.match(CypherParser.SP);
            this.state = 1057;
            this.kU_DataType(0);
            this.state = 1060;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
            case 1:
                {
                this.state = 1058;
                this.match(CypherParser.SP);
                this.state = 1059;
                this.kU_Default();
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
    public kU_CreateNodeConstraint(): KU_CreateNodeConstraintContext {
        let localctx: KU_CreateNodeConstraintContext = new KU_CreateNodeConstraintContext(this._ctx, this.state);
        this.enterRule(localctx, 96, CypherParser.RULE_kU_CreateNodeConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1062;
            this.match(CypherParser.PRIMARY);
            this.state = 1063;
            this.match(CypherParser.SP);
            this.state = 1064;
            this.match(CypherParser.KEY);
            this.state = 1066;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1065;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1068;
            this.match(CypherParser.T__1);
            this.state = 1070;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1069;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1072;
            this.oC_PropertyKeyName();
            this.state = 1074;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1073;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1076;
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
        let _startState = 98;
        this.enterRecursionRule(localctx, 98, CypherParser.RULE_kU_DataType, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1152;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
            case 1:
                {
                this.state = 1079;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 1080;
                this.match(CypherParser.UNION);
                this.state = 1082;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1081;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1084;
                this.match(CypherParser.T__1);
                this.state = 1086;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1085;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1088;
                this.kU_PropertyDefinitions();
                this.state = 1090;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1089;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1092;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                {
                this.state = 1094;
                this.oC_SymbolicName();
                this.state = 1096;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1095;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1098;
                this.match(CypherParser.T__1);
                this.state = 1100;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1099;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1102;
                this.kU_PropertyDefinitions();
                this.state = 1104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1103;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1106;
                this.match(CypherParser.T__3);
                }
                break;
            case 4:
                {
                this.state = 1108;
                this.oC_SymbolicName();
                this.state = 1110;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1109;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1112;
                this.match(CypherParser.T__1);
                this.state = 1114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1113;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1116;
                this.kU_DataType(0);
                this.state = 1118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1117;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1120;
                this.match(CypherParser.T__2);
                this.state = 1122;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1121;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1124;
                this.kU_DataType(0);
                this.state = 1126;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1125;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1128;
                this.match(CypherParser.T__3);
                }
                break;
            case 5:
                {
                this.state = 1130;
                this.match(CypherParser.DECIMAL);
                this.state = 1132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1131;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1134;
                this.match(CypherParser.T__1);
                this.state = 1136;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1135;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1138;
                this.oC_IntegerLiteral();
                this.state = 1140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1139;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1142;
                this.match(CypherParser.T__2);
                this.state = 1144;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1143;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1146;
                this.oC_IntegerLiteral();
                this.state = 1148;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1147;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1150;
                this.match(CypherParser.T__3);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1158;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 142, this._ctx);
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
                    this.state = 1154;
                    if (!(this.precpred(this._ctx, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                    }
                    this.state = 1155;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 1160;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 142, this._ctx);
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
        this.enterRule(localctx, 100, CypherParser.RULE_kU_ListIdentifiers);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1161;
            this.kU_ListIdentifier();
            this.state = 1165;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 143, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1162;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 1167;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 143, this._ctx);
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
        this.enterRule(localctx, 102, CypherParser.RULE_kU_ListIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1168;
            this.match(CypherParser.T__6);
            this.state = 1170;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===151) {
                {
                this.state = 1169;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 1172;
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
        this.enterRule(localctx, 104, CypherParser.RULE_oC_AnyCypherOption);
        try {
            this.state = 1176;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1174;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1175;
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
        this.enterRule(localctx, 106, CypherParser.RULE_oC_Explain);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1178;
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
        this.enterRule(localctx, 108, CypherParser.RULE_oC_Profile);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1180;
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
        this.enterRule(localctx, 110, CypherParser.RULE_kU_Transaction);
        try {
            this.state = 1196;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1182;
                this.match(CypherParser.BEGIN);
                this.state = 1183;
                this.match(CypherParser.SP);
                this.state = 1184;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1185;
                this.match(CypherParser.BEGIN);
                this.state = 1186;
                this.match(CypherParser.SP);
                this.state = 1187;
                this.match(CypherParser.TRANSACTION);
                this.state = 1188;
                this.match(CypherParser.SP);
                this.state = 1189;
                this.match(CypherParser.READ);
                this.state = 1190;
                this.match(CypherParser.SP);
                this.state = 1191;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1192;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1193;
                this.match(CypherParser.COMMIT_SKIP_CHECKPOINT);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1194;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1195;
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
        this.enterRule(localctx, 112, CypherParser.RULE_kU_Extension);
        try {
            this.state = 1200;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1198;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1199;
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
        this.enterRule(localctx, 114, CypherParser.RULE_kU_LoadExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1202;
            this.match(CypherParser.LOAD);
            this.state = 1203;
            this.match(CypherParser.SP);
            this.state = 1204;
            this.match(CypherParser.EXTENSION);
            this.state = 1205;
            this.match(CypherParser.SP);
            this.state = 1208;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 1206;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LOAD:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.DECIMAL:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1207;
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
        this.enterRule(localctx, 116, CypherParser.RULE_kU_InstallExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1210;
            this.match(CypherParser.INSTALL);
            this.state = 1211;
            this.match(CypherParser.SP);
            this.state = 1212;
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
        this.enterRule(localctx, 118, CypherParser.RULE_oC_Query);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1218;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 150, this._ctx) ) {
            case 1:
                {
                this.state = 1214;
                this.kU_ProjectGraph();
                this.state = 1216;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1215;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 1220;
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
    public kU_ProjectGraph(): KU_ProjectGraphContext {
        let localctx: KU_ProjectGraphContext = new KU_ProjectGraphContext(this._ctx, this.state);
        this.enterRule(localctx, 120, CypherParser.RULE_kU_ProjectGraph);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1222;
            this.match(CypherParser.PROJECT);
            this.state = 1223;
            this.match(CypherParser.SP);
            this.state = 1224;
            this.match(CypherParser.GRAPH);
            this.state = 1225;
            this.match(CypherParser.SP);
            this.state = 1226;
            this.oC_SchemaName();
            this.state = 1228;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1227;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1230;
            this.match(CypherParser.T__1);
            this.state = 1232;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1231;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1234;
            this.kU_GraphProjectionTableItems();
            this.state = 1236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1235;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1238;
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
    public kU_GraphProjectionTableItems(): KU_GraphProjectionTableItemsContext {
        let localctx: KU_GraphProjectionTableItemsContext = new KU_GraphProjectionTableItemsContext(this._ctx, this.state);
        this.enterRule(localctx, 122, CypherParser.RULE_kU_GraphProjectionTableItems);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1240;
            this.kU_GraphProjectionTableItem();
            this.state = 1251;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 156, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1242;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1241;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1244;
                    this.match(CypherParser.T__2);
                    this.state = 1246;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1245;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1248;
                    this.kU_GraphProjectionTableItem();
                    }
                    }
                }
                this.state = 1253;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 156, this._ctx);
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
    public oC_RegularQuery(): OC_RegularQueryContext {
        let localctx: OC_RegularQueryContext = new OC_RegularQueryContext(this._ctx, this.state);
        this.enterRule(localctx, 124, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1275;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1254;
                this.oC_SingleQuery();
                this.state = 1261;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1256;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 1255;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1258;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 1263;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1268;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1264;
                        this.oC_Return();
                        this.state = 1266;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 1265;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1270;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1272;
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
        this.enterRule(localctx, 126, CypherParser.RULE_oC_Union);
        let _la: number;
        try {
            this.state = 1289;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 164, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1277;
                this.match(CypherParser.UNION);
                this.state = 1278;
                this.match(CypherParser.SP);
                this.state = 1279;
                this.match(CypherParser.ALL);
                this.state = 1281;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1280;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1283;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1284;
                this.match(CypherParser.UNION);
                this.state = 1286;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1285;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1288;
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
        this.enterRule(localctx, 128, CypherParser.RULE_oC_SingleQuery);
        try {
            this.state = 1293;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1291;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1292;
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
        this.enterRule(localctx, 130, CypherParser.RULE_oC_SinglePartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1340;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1301;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===56 || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 135173) !== 0) || _la===135) {
                    {
                    {
                    this.state = 1295;
                    this.oC_ReadingClause();
                    this.state = 1297;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1296;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1303;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1304;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1311;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===56 || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 135173) !== 0) || _la===135) {
                    {
                    {
                    this.state = 1305;
                    this.oC_ReadingClause();
                    this.state = 1307;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1306;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1313;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1314;
                this.oC_UpdatingClause();
                this.state = 1321;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1316;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 1315;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1318;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1323;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
                }
                this.state = 1328;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
                case 1:
                    {
                    this.state = 1325;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1324;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1327;
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
                this.state = 1334;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 1330;
                    this.oC_ReadingClause();
                    this.state = 1332;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
                    case 1:
                        {
                        this.state = 1331;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    }
                    }
                    this.state = 1336;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===56 || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 135173) !== 0) || _la===135);
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
        this.enterRule(localctx, 132, CypherParser.RULE_oC_MultiPartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1346;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1342;
                    this.kU_QueryPart();
                    this.state = 1344;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1343;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1348;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 178, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1350;
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
        this.enterRule(localctx, 134, CypherParser.RULE_kU_QueryPart);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1358;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===56 || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 135173) !== 0) || _la===135) {
                {
                {
                this.state = 1352;
                this.oC_ReadingClause();
                this.state = 1354;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1353;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1360;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1367;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 289) !== 0) || _la===102 || _la===124) {
                {
                {
                this.state = 1361;
                this.oC_UpdatingClause();
                this.state = 1363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1362;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1370;
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
        this.enterRule(localctx, 136, CypherParser.RULE_oC_UpdatingClause);
        try {
            this.state = 1376;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1372;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1373;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1374;
                this.oC_Set();
                }
                break;
            case CypherParser.DELETE:
            case CypherParser.DETACH:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1375;
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
        this.enterRule(localctx, 138, CypherParser.RULE_oC_ReadingClause);
        try {
            this.state = 1382;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.MATCH:
            case CypherParser.OPTIONAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1378;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1379;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
            case CypherParser.PROJECT:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1380;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1381;
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
        this.enterRule(localctx, 140, CypherParser.RULE_kU_LoadFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1384;
            this.match(CypherParser.LOAD);
            this.state = 1402;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
            case 1:
                {
                this.state = 1385;
                this.match(CypherParser.SP);
                this.state = 1386;
                this.match(CypherParser.WITH);
                this.state = 1387;
                this.match(CypherParser.SP);
                this.state = 1388;
                this.match(CypherParser.HEADERS);
                this.state = 1390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1389;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1392;
                this.match(CypherParser.T__1);
                this.state = 1394;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1393;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1396;
                this.kU_PropertyDefinitions();
                this.state = 1398;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1397;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1400;
                this.match(CypherParser.T__3);
                }
                break;
            }
            this.state = 1404;
            this.match(CypherParser.SP);
            this.state = 1405;
            this.match(CypherParser.FROM);
            this.state = 1406;
            this.match(CypherParser.SP);
            this.state = 1407;
            this.kU_ScanSource();
            this.state = 1412;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
            case 1:
                {
                this.state = 1409;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1408;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1411;
                this.kU_ParsingOptions();
                }
                break;
            }
            this.state = 1418;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
            case 1:
                {
                this.state = 1415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1414;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1417;
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
        this.enterRule(localctx, 142, CypherParser.RULE_kU_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1424;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===115) {
                {
                this.state = 1420;
                this.kU_ProjectGraph();
                this.state = 1422;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1421;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1426;
            this.match(CypherParser.CALL);
            this.state = 1427;
            this.match(CypherParser.SP);
            this.state = 1428;
            this.oC_FunctionInvocation();
            this.state = 1433;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
            case 1:
                {
                this.state = 1430;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1429;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1432;
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
    public kU_GraphProjectionTableItem(): KU_GraphProjectionTableItemContext {
        let localctx: KU_GraphProjectionTableItemContext = new KU_GraphProjectionTableItemContext(this._ctx, this.state);
        this.enterRule(localctx, 144, CypherParser.RULE_kU_GraphProjectionTableItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1435;
            this.oC_SchemaName();
            this.state = 1449;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
            case 1:
                {
                this.state = 1437;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1436;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1439;
                this.match(CypherParser.T__8);
                this.state = 1441;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1440;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1443;
                this.kU_GraphProjectionColumnItems();
                this.state = 1445;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1444;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1447;
                this.match(CypherParser.T__9);
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
    public kU_GraphProjectionColumnItems(): KU_GraphProjectionColumnItemsContext {
        let localctx: KU_GraphProjectionColumnItemsContext = new KU_GraphProjectionColumnItemsContext(this._ctx, this.state);
        this.enterRule(localctx, 146, CypherParser.RULE_kU_GraphProjectionColumnItems);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1451;
            this.kU_GraphProjectionColumnItem();
            this.state = 1462;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1453;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1452;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1455;
                    this.match(CypherParser.T__2);
                    this.state = 1457;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1456;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1459;
                    this.kU_GraphProjectionColumnItem();
                    }
                    }
                }
                this.state = 1464;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
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
    public kU_GraphProjectionColumnItem(): KU_GraphProjectionColumnItemContext {
        let localctx: KU_GraphProjectionColumnItemContext = new KU_GraphProjectionColumnItemContext(this._ctx, this.state);
        this.enterRule(localctx, 148, CypherParser.RULE_kU_GraphProjectionColumnItem);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1465;
            this.oC_PropertyKeyName();
            this.state = 1468;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
            case 1:
                {
                this.state = 1466;
                this.match(CypherParser.SP);
                this.state = 1467;
                this.kU_Default();
                }
                break;
            }
            this.state = 1472;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
            case 1:
                {
                this.state = 1470;
                this.match(CypherParser.SP);
                this.state = 1471;
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
        this.enterRule(localctx, 150, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1476;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===110) {
                {
                this.state = 1474;
                this.match(CypherParser.OPTIONAL);
                this.state = 1475;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1478;
            this.match(CypherParser.MATCH);
            this.state = 1480;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1479;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1482;
            this.oC_Pattern();
            this.state = 1485;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
            case 1:
                {
                this.state = 1483;
                this.match(CypherParser.SP);
                this.state = 1484;
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
        this.enterRule(localctx, 152, CypherParser.RULE_oC_Unwind);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1487;
            this.match(CypherParser.UNWIND);
            this.state = 1489;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1488;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1491;
            this.oC_Expression();
            this.state = 1492;
            this.match(CypherParser.SP);
            this.state = 1493;
            this.match(CypherParser.AS);
            this.state = 1494;
            this.match(CypherParser.SP);
            this.state = 1495;
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
        this.enterRule(localctx, 154, CypherParser.RULE_oC_Create);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1497;
            this.match(CypherParser.CREATE);
            this.state = 1499;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1498;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1501;
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
        this.enterRule(localctx, 156, CypherParser.RULE_oC_Merge);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1503;
            this.match(CypherParser.MERGE);
            this.state = 1505;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1504;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1507;
            this.oC_Pattern();
            this.state = 1512;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1508;
                    this.match(CypherParser.SP);
                    this.state = 1509;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1514;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
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
        this.enterRule(localctx, 158, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1525;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1515;
                this.match(CypherParser.ON);
                this.state = 1516;
                this.match(CypherParser.SP);
                this.state = 1517;
                this.match(CypherParser.MATCH);
                this.state = 1518;
                this.match(CypherParser.SP);
                this.state = 1519;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1520;
                this.match(CypherParser.ON);
                this.state = 1521;
                this.match(CypherParser.SP);
                this.state = 1522;
                this.match(CypherParser.CREATE);
                this.state = 1523;
                this.match(CypherParser.SP);
                this.state = 1524;
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
        this.enterRule(localctx, 160, CypherParser.RULE_oC_Set);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1527;
            this.match(CypherParser.SET);
            this.state = 1529;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1528;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1531;
            this.oC_SetItem();
            this.state = 1542;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 217, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1533;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1532;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1535;
                    this.match(CypherParser.T__2);
                    this.state = 1537;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1536;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1539;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1544;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 217, this._ctx);
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
        this.enterRule(localctx, 162, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1545;
            this.oC_PropertyExpression();
            this.state = 1547;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1546;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1549;
            this.match(CypherParser.T__5);
            this.state = 1551;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1550;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1553;
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
        this.enterRule(localctx, 164, CypherParser.RULE_oC_Delete);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1557;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===74) {
                {
                this.state = 1555;
                this.match(CypherParser.DETACH);
                this.state = 1556;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1559;
            this.match(CypherParser.DELETE);
            this.state = 1561;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1560;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1563;
            this.oC_Expression();
            this.state = 1574;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 224, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1565;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1564;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1567;
                    this.match(CypherParser.T__2);
                    this.state = 1569;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1568;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1571;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1576;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 224, this._ctx);
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
        this.enterRule(localctx, 166, CypherParser.RULE_oC_With);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1577;
            this.match(CypherParser.WITH);
            this.state = 1578;
            this.oC_ProjectionBody();
            this.state = 1583;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
            case 1:
                {
                this.state = 1580;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1579;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1582;
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
        this.enterRule(localctx, 168, CypherParser.RULE_oC_Return);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1585;
            this.match(CypherParser.RETURN);
            this.state = 1586;
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
        this.enterRule(localctx, 170, CypherParser.RULE_oC_ProjectionBody);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1592;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
            case 1:
                {
                this.state = 1589;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1588;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1591;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1594;
            this.match(CypherParser.SP);
            this.state = 1595;
            this.oC_ProjectionItems();
            this.state = 1598;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 229, this._ctx) ) {
            case 1:
                {
                this.state = 1596;
                this.match(CypherParser.SP);
                this.state = 1597;
                this.oC_Order();
                }
                break;
            }
            this.state = 1602;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
            case 1:
                {
                this.state = 1600;
                this.match(CypherParser.SP);
                this.state = 1601;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1606;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 231, this._ctx) ) {
            case 1:
                {
                this.state = 1604;
                this.match(CypherParser.SP);
                this.state = 1605;
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
        this.enterRule(localctx, 172, CypherParser.RULE_oC_ProjectionItems);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1636;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1608;
                this.match(CypherParser.STAR);
                this.state = 1619;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 234, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1610;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 1609;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1612;
                        this.match(CypherParser.T__2);
                        this.state = 1614;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 1613;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1616;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1621;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 234, this._ctx);
                }
                }
                }
                break;
            case CypherParser.T__1:
            case CypherParser.T__6:
            case CypherParser.T__8:
            case CypherParser.T__25:
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CASE:
            case CypherParser.CAST:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXISTS:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.FALSE:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LOAD:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.NOT:
            case CypherParser.NULL:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.TRANSACTION:
            case CypherParser.TRUE:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.DECIMAL:
            case CypherParser.MINUS:
            case CypherParser.StringLiteral:
            case CypherParser.DecimalInteger:
            case CypherParser.HexLetter:
            case CypherParser.RegularDecimalReal:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1622;
                this.oC_ProjectionItem();
                this.state = 1633;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1624;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 1623;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1626;
                        this.match(CypherParser.T__2);
                        this.state = 1628;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 1627;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1630;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1635;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
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
        this.enterRule(localctx, 174, CypherParser.RULE_oC_ProjectionItem);
        try {
            this.state = 1645;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1638;
                this.oC_Expression();
                this.state = 1639;
                this.match(CypherParser.SP);
                this.state = 1640;
                this.match(CypherParser.AS);
                this.state = 1641;
                this.match(CypherParser.SP);
                this.state = 1642;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1644;
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
        this.enterRule(localctx, 176, CypherParser.RULE_oC_Order);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1647;
            this.match(CypherParser.ORDER);
            this.state = 1648;
            this.match(CypherParser.SP);
            this.state = 1649;
            this.match(CypherParser.BY);
            this.state = 1650;
            this.match(CypherParser.SP);
            this.state = 1651;
            this.oC_SortItem();
            this.state = 1659;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 1652;
                this.match(CypherParser.T__2);
                this.state = 1654;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1653;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1656;
                this.oC_SortItem();
                }
                }
                this.state = 1661;
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
        this.enterRule(localctx, 178, CypherParser.RULE_oC_Skip);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1662;
            this.match(CypherParser.L_SKIP);
            this.state = 1663;
            this.match(CypherParser.SP);
            this.state = 1664;
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
        this.enterRule(localctx, 180, CypherParser.RULE_oC_Limit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1666;
            this.match(CypherParser.LIMIT);
            this.state = 1667;
            this.match(CypherParser.SP);
            this.state = 1668;
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
        this.enterRule(localctx, 182, CypherParser.RULE_oC_SortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1670;
            this.oC_Expression();
            this.state = 1675;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
            case 1:
                {
                this.state = 1672;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1671;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1674;
                _la = this._input.LA(1);
                if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 6291459) !== 0))) {
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
        this.enterRule(localctx, 184, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1677;
            this.match(CypherParser.WHERE);
            this.state = 1678;
            this.match(CypherParser.SP);
            this.state = 1679;
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
        this.enterRule(localctx, 186, CypherParser.RULE_oC_Pattern);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1681;
            this.oC_PatternPart();
            this.state = 1692;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1683;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1682;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1685;
                    this.match(CypherParser.T__2);
                    this.state = 1687;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1686;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1689;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1694;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
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
        this.enterRule(localctx, 188, CypherParser.RULE_oC_PatternPart);
        let _la: number;
        try {
            this.state = 1706;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LOAD:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.DECIMAL:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1695;
                this.oC_Variable();
                this.state = 1697;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1696;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1699;
                this.match(CypherParser.T__5);
                this.state = 1701;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1700;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1703;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1705;
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
        this.enterRule(localctx, 190, CypherParser.RULE_oC_AnonymousPatternPart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1708;
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
        this.enterRule(localctx, 192, CypherParser.RULE_oC_PatternElement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1724;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1710;
                this.oC_NodePattern();
                this.state = 1717;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1712;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 1711;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1714;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1719;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1720;
                this.match(CypherParser.T__1);
                this.state = 1721;
                this.oC_PatternElement();
                this.state = 1722;
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
        this.enterRule(localctx, 194, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1726;
            this.match(CypherParser.T__1);
            this.state = 1728;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1727;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1734;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382991765) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 33216071) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 170199933) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 1153) !== 0)) {
                {
                this.state = 1730;
                this.oC_Variable();
                this.state = 1732;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1731;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1740;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===148) {
                {
                this.state = 1736;
                this.oC_NodeLabels();
                this.state = 1738;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1737;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1746;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1742;
                this.kU_Properties();
                this.state = 1744;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1743;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1748;
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
        this.enterRule(localctx, 196, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1750;
            this.oC_RelationshipPattern();
            this.state = 1752;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1751;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1754;
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
        this.enterRule(localctx, 198, CypherParser.RULE_oC_RelationshipPattern);
        let _la: number;
        try {
            this.state = 1800;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 272, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1756;
                this.oC_LeftArrowHead();
                this.state = 1758;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1757;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1760;
                this.oC_Dash();
                this.state = 1762;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 262, this._ctx) ) {
                case 1:
                    {
                    this.state = 1761;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1765;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1764;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1768;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1767;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1770;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1772;
                this.oC_Dash();
                this.state = 1774;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 265, this._ctx) ) {
                case 1:
                    {
                    this.state = 1773;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1777;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1776;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1780;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1779;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1782;
                this.oC_Dash();
                this.state = 1784;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1783;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1786;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1788;
                this.oC_Dash();
                this.state = 1790;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 269, this._ctx) ) {
                case 1:
                    {
                    this.state = 1789;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1793;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1792;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1796;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1795;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1798;
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
        this.enterRule(localctx, 200, CypherParser.RULE_oC_RelationshipDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1802;
            this.match(CypherParser.T__6);
            this.state = 1804;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1803;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1810;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382991765) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 33216071) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 170199933) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 1153) !== 0)) {
                {
                this.state = 1806;
                this.oC_Variable();
                this.state = 1808;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1807;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1816;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===148) {
                {
                this.state = 1812;
                this.oC_RelationshipTypes();
                this.state = 1814;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1813;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1822;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===143) {
                {
                this.state = 1818;
                this.oC_RangeLiteral();
                this.state = 1820;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1819;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1828;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1824;
                this.kU_Properties();
                this.state = 1826;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1825;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1830;
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
        this.enterRule(localctx, 202, CypherParser.RULE_kU_Properties);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1832;
            this.match(CypherParser.T__8);
            this.state = 1834;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1833;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1869;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382991765) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 33216071) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 170199933) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 1153) !== 0)) {
                {
                this.state = 1836;
                this.oC_PropertyKeyName();
                this.state = 1838;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1837;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1840;
                this.match(CypherParser.COLON);
                this.state = 1842;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1841;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1844;
                this.oC_Expression();
                this.state = 1846;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1845;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1866;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 1848;
                    this.match(CypherParser.T__2);
                    this.state = 1850;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1849;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1852;
                    this.oC_PropertyKeyName();
                    this.state = 1854;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1853;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1856;
                    this.match(CypherParser.COLON);
                    this.state = 1858;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1857;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1860;
                    this.oC_Expression();
                    this.state = 1862;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1861;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1868;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1871;
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
        this.enterRule(localctx, 204, CypherParser.RULE_oC_RelationshipTypes);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1873;
            this.match(CypherParser.COLON);
            this.state = 1875;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1874;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1877;
            this.oC_RelTypeName();
            this.state = 1891;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 296, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1879;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1878;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1881;
                    this.match(CypherParser.T__10);
                    this.state = 1883;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===148) {
                        {
                        this.state = 1882;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 1886;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1885;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1888;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1893;
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
    public oC_NodeLabels(): OC_NodeLabelsContext {
        let localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this._ctx, this.state);
        this.enterRule(localctx, 206, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1894;
            this.oC_NodeLabel();
            this.state = 1901;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 298, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1896;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 1895;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1898;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1903;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 298, this._ctx);
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
        this.enterRule(localctx, 208, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1904;
            this.match(CypherParser.COLON);
            this.state = 1906;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1905;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1908;
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
        this.enterRule(localctx, 210, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1910;
            this.match(CypherParser.STAR);
            this.state = 1912;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 300, this._ctx) ) {
            case 1:
                {
                this.state = 1911;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1918;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.SHORTEST:
                {
                this.state = 1914;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.ALL:
                {
                this.state = 1915;
                this.match(CypherParser.ALL);
                this.state = 1916;
                this.match(CypherParser.SP);
                this.state = 1917;
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
            this.state = 1921;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 302, this._ctx) ) {
            case 1:
                {
                this.state = 1920;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1937;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 307, this._ctx) ) {
            case 1:
                {
                this.state = 1924;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===151) {
                    {
                    this.state = 1923;
                    this.oC_LowerBound();
                    }
                }

                this.state = 1927;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1926;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1929;
                this.match(CypherParser.T__11);
                this.state = 1931;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 305, this._ctx) ) {
                case 1:
                    {
                    this.state = 1930;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1934;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===151) {
                    {
                    this.state = 1933;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 1936;
                this.oC_IntegerLiteral();
                }
                break;
            }
            this.state = 1943;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 309, this._ctx) ) {
            case 1:
                {
                this.state = 1940;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1939;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1942;
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
        this.enterRule(localctx, 212, CypherParser.RULE_kU_RecursiveRelationshipComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1945;
            this.match(CypherParser.T__1);
            this.state = 1947;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1946;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1949;
            this.oC_Variable();
            this.state = 1951;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1950;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1953;
            this.match(CypherParser.T__2);
            this.state = 1955;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1954;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1957;
            this.oC_Variable();
            this.state = 1966;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 315, this._ctx) ) {
            case 1:
                {
                this.state = 1959;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1958;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1961;
                this.match(CypherParser.T__10);
                this.state = 1963;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1962;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1965;
                this.oC_Where();
                }
                break;
            }
            this.state = 1987;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===163) {
                {
                this.state = 1969;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1968;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1971;
                this.match(CypherParser.T__10);
                this.state = 1973;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1972;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1975;
                this.kU_IntermediateRelProjectionItems();
                this.state = 1977;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1976;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1979;
                this.match(CypherParser.T__2);
                this.state = 1981;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1980;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1983;
                this.kU_IntermediateNodeProjectionItems();
                this.state = 1985;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 1984;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1989;
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
        this.enterRule(localctx, 214, CypherParser.RULE_kU_IntermediateNodeProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1991;
            this.match(CypherParser.T__8);
            this.state = 1993;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 322, this._ctx) ) {
            case 1:
                {
                this.state = 1992;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1996;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 267758751) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 2586250109) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & 9741) !== 0)) {
                {
                this.state = 1995;
                this.oC_ProjectionItems();
                }
            }

            this.state = 1999;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 1998;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2001;
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
        this.enterRule(localctx, 216, CypherParser.RULE_kU_IntermediateRelProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2003;
            this.match(CypherParser.T__8);
            this.state = 2005;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 325, this._ctx) ) {
            case 1:
                {
                this.state = 2004;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2008;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 267758751) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 2586250109) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & 9741) !== 0)) {
                {
                this.state = 2007;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2011;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2010;
                this.match(CypherParser.SP);
                }
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
    public oC_LowerBound(): OC_LowerBoundContext {
        let localctx: OC_LowerBoundContext = new OC_LowerBoundContext(this._ctx, this.state);
        this.enterRule(localctx, 218, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2015;
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
        this.enterRule(localctx, 220, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2017;
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
        this.enterRule(localctx, 222, CypherParser.RULE_oC_LabelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2019;
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
        this.enterRule(localctx, 224, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2021;
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
        this.enterRule(localctx, 226, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2023;
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
        this.enterRule(localctx, 228, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2025;
            this.oC_XorExpression();
            this.state = 2032;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 328, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2026;
                    this.match(CypherParser.SP);
                    this.state = 2027;
                    this.match(CypherParser.OR);
                    this.state = 2028;
                    this.match(CypherParser.SP);
                    this.state = 2029;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 2034;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 328, this._ctx);
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
        this.enterRule(localctx, 230, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2035;
            this.oC_AndExpression();
            this.state = 2042;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 329, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2036;
                    this.match(CypherParser.SP);
                    this.state = 2037;
                    this.match(CypherParser.XOR);
                    this.state = 2038;
                    this.match(CypherParser.SP);
                    this.state = 2039;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 2044;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 329, this._ctx);
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
        this.enterRule(localctx, 232, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2045;
            this.oC_NotExpression();
            this.state = 2052;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 330, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2046;
                    this.match(CypherParser.SP);
                    this.state = 2047;
                    this.match(CypherParser.AND);
                    this.state = 2048;
                    this.match(CypherParser.SP);
                    this.state = 2049;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 2054;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 330, this._ctx);
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
        this.enterRule(localctx, 234, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2061;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===106) {
                {
                {
                this.state = 2055;
                this.match(CypherParser.NOT);
                this.state = 2057;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2056;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2063;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2064;
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
        this.enterRule(localctx, 236, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 2114;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 343, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2066;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2076;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 335, this._ctx) ) {
                case 1:
                    {
                    this.state = 2068;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2067;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2070;
                    this.kU_ComparisonOperator();
                    this.state = 2072;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2071;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2074;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2078;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 2080;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2079;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2082;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 2084;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2083;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2086;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2090;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2092;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2091;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2094;
                this.kU_ComparisonOperator();
                this.state = 2096;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2095;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2098;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2108;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2100;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 2099;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2102;
                        this.kU_ComparisonOperator();
                        this.state = 2104;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 2103;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2106;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2110;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 342, this._ctx);
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
        this.enterRule(localctx, 238, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2116;
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
        this.enterRule(localctx, 240, CypherParser.RULE_kU_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2118;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 2129;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2120;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2119;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2122;
                    this.match(CypherParser.T__10);
                    this.state = 2124;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2123;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2126;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 2131;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
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
        this.enterRule(localctx, 242, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2132;
            this.kU_BitShiftOperatorExpression();
            this.state = 2143;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 349, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2134;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2133;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2136;
                    this.match(CypherParser.T__17);
                    this.state = 2138;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2137;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2140;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 2145;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 349, this._ctx);
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
        this.enterRule(localctx, 244, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2146;
            this.oC_AddOrSubtractExpression();
            this.state = 2158;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 352, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2148;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2147;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2150;
                    this.kU_BitShiftOperator();
                    this.state = 2152;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2151;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2154;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 2160;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 352, this._ctx);
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
        this.enterRule(localctx, 246, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2161;
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
        this.enterRule(localctx, 248, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2163;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 2175;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 355, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2165;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2164;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2167;
                    this.kU_AddOrSubtractOperator();
                    this.state = 2169;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2168;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2171;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 2177;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 355, this._ctx);
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
        this.enterRule(localctx, 250, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2178;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===146)) {
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
        this.enterRule(localctx, 252, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2180;
            this.oC_PowerOfExpression();
            this.state = 2192;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 358, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2182;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2181;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2184;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 2186;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2185;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2188;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 2194;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 358, this._ctx);
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
        this.enterRule(localctx, 254, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2195;
            _la = this._input.LA(1);
            if(!(_la===22 || _la===23 || _la===143)) {
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
        this.enterRule(localctx, 256, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2197;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 2208;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 361, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2199;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2198;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2201;
                    this.match(CypherParser.T__23);
                    this.state = 2203;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2202;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2205;
                    this.oC_UnaryAddSubtractOrFactorialExpression();
                    }
                    }
                }
                this.state = 2210;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 361, this._ctx);
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
        this.enterRule(localctx, 258, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2217;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===146) {
                {
                {
                this.state = 2211;
                this.match(CypherParser.MINUS);
                this.state = 2213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2212;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2220;
            this.oC_StringListNullOperatorExpression();
            this.state = 2225;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 365, this._ctx) ) {
            case 1:
                {
                this.state = 2222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2221;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2224;
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
        this.enterRule(localctx, 260, CypherParser.RULE_oC_StringListNullOperatorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2227;
            this.oC_PropertyOrLabelsExpression();
            this.state = 2235;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 367, this._ctx) ) {
            case 1:
                {
                this.state = 2228;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 2230;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2229;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2232;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 366, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 2234;
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
        this.enterRule(localctx, 262, CypherParser.RULE_oC_ListOperatorExpression);
        let _la: number;
        try {
            this.state = 2256;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 371, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2237;
                this.match(CypherParser.SP);
                this.state = 2238;
                this.match(CypherParser.IN);
                this.state = 2240;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2239;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2242;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2243;
                this.match(CypherParser.T__6);
                this.state = 2244;
                this.oC_Expression();
                this.state = 2245;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2247;
                this.match(CypherParser.T__6);
                this.state = 2249;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 267758751) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 2317814653) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & 9741) !== 0)) {
                    {
                    this.state = 2248;
                    this.oC_Expression();
                    }
                }

                this.state = 2251;
                this.match(CypherParser.COLON);
                this.state = 2253;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 267758751) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 2317814653) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & 9741) !== 0)) {
                    {
                    this.state = 2252;
                    this.oC_Expression();
                    }
                }

                this.state = 2255;
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
        this.enterRule(localctx, 264, CypherParser.RULE_oC_StringOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2269;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 372, this._ctx) ) {
            case 1:
                {
                this.state = 2258;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 2259;
                this.match(CypherParser.SP);
                this.state = 2260;
                this.match(CypherParser.STARTS);
                this.state = 2261;
                this.match(CypherParser.SP);
                this.state = 2262;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 2263;
                this.match(CypherParser.SP);
                this.state = 2264;
                this.match(CypherParser.ENDS);
                this.state = 2265;
                this.match(CypherParser.SP);
                this.state = 2266;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 2267;
                this.match(CypherParser.SP);
                this.state = 2268;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 2272;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2271;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2274;
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
        this.enterRule(localctx, 266, CypherParser.RULE_oC_RegularExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2277;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2276;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2279;
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
        this.enterRule(localctx, 268, CypherParser.RULE_oC_NullOperatorExpression);
        try {
            this.state = 2291;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 375, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2281;
                this.match(CypherParser.SP);
                this.state = 2282;
                this.match(CypherParser.IS);
                this.state = 2283;
                this.match(CypherParser.SP);
                this.state = 2284;
                this.match(CypherParser.NULL);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2285;
                this.match(CypherParser.SP);
                this.state = 2286;
                this.match(CypherParser.IS);
                this.state = 2287;
                this.match(CypherParser.SP);
                this.state = 2288;
                this.match(CypherParser.NOT);
                this.state = 2289;
                this.match(CypherParser.SP);
                this.state = 2290;
                this.match(CypherParser.NULL);
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
        this.enterRule(localctx, 270, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2293;
            this.oC_Atom();
            this.state = 2300;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 377, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2295;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2294;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2297;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2302;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 377, this._ctx);
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
        this.enterRule(localctx, 272, CypherParser.RULE_oC_Atom);
        try {
            this.state = 2312;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 378, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2303;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2304;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2305;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2306;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2307;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2308;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2309;
                this.oC_ExistSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2310;
                this.kU_CountSubquery();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2311;
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
        this.enterRule(localctx, 274, CypherParser.RULE_oC_Literal);
        try {
            this.state = 2320;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2314;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2315;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.FALSE:
            case CypherParser.TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2316;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2317;
                this.match(CypherParser.NULL);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2318;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2319;
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
        this.enterRule(localctx, 276, CypherParser.RULE_oC_BooleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2322;
            _la = this._input.LA(1);
            if(!(_la===84 || _la===132)) {
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
        this.enterRule(localctx, 278, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2324;
            this.match(CypherParser.T__6);
            this.state = 2326;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2325;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2341;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 267758751) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 2317814653) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & 9741) !== 0)) {
                {
                this.state = 2328;
                this.oC_Expression();
                this.state = 2330;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2329;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2338;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 2332;
                    this.kU_ListEntry();
                    this.state = 2334;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2333;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2340;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2343;
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
        this.enterRule(localctx, 280, CypherParser.RULE_kU_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2345;
            this.match(CypherParser.T__2);
            this.state = 2347;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 385, this._ctx) ) {
            case 1:
                {
                this.state = 2346;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2350;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 267758751) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 2317814653) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & 9741) !== 0)) {
                {
                this.state = 2349;
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
        this.enterRule(localctx, 282, CypherParser.RULE_kU_StructLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2352;
            this.match(CypherParser.T__8);
            this.state = 2354;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2353;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2356;
            this.kU_StructField();
            this.state = 2358;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2357;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2370;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 2360;
                this.match(CypherParser.T__2);
                this.state = 2362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2361;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2364;
                this.kU_StructField();
                this.state = 2366;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2365;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2372;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2373;
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
        this.enterRule(localctx, 284, CypherParser.RULE_kU_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2377;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LOAD:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.DECIMAL:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2375;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2376;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2380;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2379;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2382;
            this.match(CypherParser.COLON);
            this.state = 2384;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2383;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2386;
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
        this.enterRule(localctx, 286, CypherParser.RULE_oC_ParenthesizedExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2388;
            this.match(CypherParser.T__1);
            this.state = 2390;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2389;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2392;
            this.oC_Expression();
            this.state = 2394;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2393;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2396;
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
        this.enterRule(localctx, 288, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2475;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 416, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2398;
                this.match(CypherParser.COUNT);
                this.state = 2400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2399;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2402;
                this.match(CypherParser.T__1);
                this.state = 2404;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2403;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2406;
                this.match(CypherParser.STAR);
                this.state = 2408;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2407;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2410;
                this.match(CypherParser.T__3);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2411;
                this.match(CypherParser.CAST);
                this.state = 2413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2412;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2415;
                this.match(CypherParser.T__1);
                this.state = 2417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2416;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2419;
                this.kU_FunctionParameter();
                this.state = 2421;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2420;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2433;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case CypherParser.AS:
                    {
                    {
                    this.state = 2423;
                    this.match(CypherParser.AS);
                    this.state = 2425;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2424;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2427;
                    this.kU_DataType(0);
                    }
                    }
                    break;
                case CypherParser.T__2:
                    {
                    {
                    this.state = 2428;
                    this.match(CypherParser.T__2);
                    this.state = 2430;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2429;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2432;
                    this.kU_FunctionParameter();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2436;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2435;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2438;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2440;
                this.oC_FunctionName();
                this.state = 2442;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2441;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2444;
                this.match(CypherParser.T__1);
                this.state = 2446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2445;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2452;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===75) {
                    {
                    this.state = 2448;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2450;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2449;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2471;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 267758751) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 2317814653) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & 9741) !== 0)) {
                    {
                    this.state = 2454;
                    this.kU_FunctionParameter();
                    this.state = 2456;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2455;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2468;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===3) {
                        {
                        {
                        this.state = 2458;
                        this.match(CypherParser.T__2);
                        this.state = 2460;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 2459;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2462;
                        this.kU_FunctionParameter();
                        this.state = 2464;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 2463;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2470;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2473;
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
        this.enterRule(localctx, 290, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2477;
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
        this.enterRule(localctx, 292, CypherParser.RULE_kU_FunctionParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2488;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 419, this._ctx) ) {
            case 1:
                {
                this.state = 2479;
                this.oC_SymbolicName();
                this.state = 2481;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2480;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2483;
                this.match(CypherParser.COLON);
                this.state = 2484;
                this.match(CypherParser.T__5);
                this.state = 2486;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2485;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 2490;
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
        this.enterRule(localctx, 294, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2492;
            this.oC_NodePattern();
            this.state = 2497;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2494;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===163) {
                        {
                        this.state = 2493;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2496;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2499;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 421, this._ctx);
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
        this.enterRule(localctx, 296, CypherParser.RULE_oC_ExistSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2501;
            this.match(CypherParser.EXISTS);
            this.state = 2503;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2502;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2505;
            this.match(CypherParser.T__8);
            this.state = 2507;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2506;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2509;
            this.match(CypherParser.MATCH);
            this.state = 2511;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2510;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2513;
            this.oC_Pattern();
            this.state = 2518;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 426, this._ctx) ) {
            case 1:
                {
                this.state = 2515;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2514;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2517;
                this.oC_Where();
                }
                break;
            }
            this.state = 2521;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2520;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2523;
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
        this.enterRule(localctx, 298, CypherParser.RULE_kU_CountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2525;
            this.match(CypherParser.COUNT);
            this.state = 2527;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2526;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2529;
            this.match(CypherParser.T__8);
            this.state = 2531;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2530;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2533;
            this.match(CypherParser.MATCH);
            this.state = 2535;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2534;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2537;
            this.oC_Pattern();
            this.state = 2542;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 432, this._ctx) ) {
            case 1:
                {
                this.state = 2539;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2538;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2541;
                this.oC_Where();
                }
                break;
            }
            this.state = 2545;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2544;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2547;
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
        this.enterRule(localctx, 300, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2549;
            this.match(CypherParser.T__4);
            this.state = 2551;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2550;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2555;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LOAD:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.DECIMAL:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2553;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2554;
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
        this.enterRule(localctx, 302, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2579;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 441, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2557;
                this.match(CypherParser.CASE);
                this.state = 2562;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2559;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 2558;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2561;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2564;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 437, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2566;
                this.match(CypherParser.CASE);
                this.state = 2568;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2567;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2570;
                this.oC_Expression();
                this.state = 2575;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2572;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===163) {
                            {
                            this.state = 2571;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2574;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2577;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 440, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2589;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 444, this._ctx) ) {
            case 1:
                {
                this.state = 2582;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2581;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2584;
                this.match(CypherParser.ELSE);
                this.state = 2586;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 2585;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2588;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2592;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2591;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2594;
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
        this.enterRule(localctx, 304, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2596;
            this.match(CypherParser.WHEN);
            this.state = 2598;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2597;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2600;
            this.oC_Expression();
            this.state = 2602;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2601;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2604;
            this.match(CypherParser.THEN);
            this.state = 2606;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2605;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2608;
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
        this.enterRule(localctx, 306, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2610;
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
        this.enterRule(localctx, 308, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 2614;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2612;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2613;
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
        this.enterRule(localctx, 310, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2616;
            this.match(CypherParser.T__25);
            this.state = 2619;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LOAD:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.DECIMAL:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2617;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2618;
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
        this.enterRule(localctx, 312, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2621;
            this.oC_Atom();
            this.state = 2623;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 2622;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2625;
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
        this.enterRule(localctx, 314, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2627;
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
        this.enterRule(localctx, 316, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2629;
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
        this.enterRule(localctx, 318, CypherParser.RULE_oC_DoubleLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2631;
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
        this.enterRule(localctx, 320, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2633;
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
        this.enterRule(localctx, 322, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 2640;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2635;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2636;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2638;
                this.match(CypherParser.HexLetter);
                }
                break;
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LOAD:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.DECIMAL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2639;
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
        this.enterRule(localctx, 324, CypherParser.RULE_kU_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2642;
            _la = this._input.LA(1);
            if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382991765) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 33216071) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 170199933) !== 0))) {
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
        this.enterRule(localctx, 326, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2644;
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
        this.enterRule(localctx, 328, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2646;
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
        this.enterRule(localctx, 330, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2648;
            _la = this._input.LA(1);
            if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2047) !== 0) || _la===146)) {
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
        case 49:
            return this.kU_DataType_sempred(localctx as KU_DataTypeContext, predIndex);
        }
        return true;
    }
    private kU_DataType_sempred(localctx: KU_DataTypeContext, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 5);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,166,2651,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,1,0,1,0,3,0,335,8,0,1,0,1,0,3,0,339,8,0,1,0,5,
        0,342,8,0,10,0,12,0,345,9,0,1,0,3,0,348,8,0,1,0,1,0,1,1,3,1,353,
        8,1,1,1,3,1,356,8,1,1,1,1,1,3,1,360,8,1,1,1,3,1,363,8,1,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,1,2,3,2,387,8,2,1,3,1,3,1,3,1,3,3,3,393,8,3,1,3,1,3,
        3,3,397,8,3,1,3,3,3,400,8,3,1,3,1,3,1,3,1,3,3,3,406,8,3,1,3,3,3,
        409,8,3,1,4,1,4,3,4,413,8,4,1,4,1,4,3,4,417,8,4,1,4,1,4,3,4,421,
        8,4,1,4,5,4,424,8,4,10,4,12,4,427,9,4,1,4,3,4,430,8,4,1,4,1,4,1,
        5,1,5,1,5,3,5,437,8,5,1,5,1,5,3,5,441,8,5,1,5,1,5,1,5,1,5,1,5,1,
        5,3,5,449,8,5,1,5,1,5,3,5,453,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
        6,3,6,463,8,6,1,6,1,6,3,6,467,8,6,1,6,1,6,3,6,471,8,6,1,6,5,6,474,
        8,6,10,6,12,6,477,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,
        7,489,8,7,1,7,1,7,3,7,493,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,501,8,
        7,1,7,3,7,504,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,512,8,8,1,8,3,8,515,
        8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,
        10,530,8,10,1,10,1,10,1,10,3,10,535,8,10,1,10,1,10,1,10,1,10,3,10,
        541,8,10,1,10,1,10,3,10,545,8,10,1,10,3,10,548,8,10,1,10,3,10,551,
        8,10,1,10,1,10,1,11,1,11,3,11,557,8,11,1,11,1,11,3,11,561,8,11,1,
        11,1,11,1,12,1,12,3,12,567,8,12,1,12,1,12,3,12,571,8,12,1,12,5,12,
        574,8,12,10,12,12,12,577,9,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,
        1,14,1,15,1,15,1,15,1,15,3,15,591,8,15,1,15,1,15,3,15,595,8,15,1,
        15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
        16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,617,8,17,1,17,1,17,3,17,621,
        8,17,1,17,3,17,624,8,17,1,17,3,17,627,8,17,1,17,3,17,630,8,17,1,
        17,3,17,633,8,17,1,17,1,17,3,17,637,8,17,1,17,5,17,640,8,17,10,17,
        12,17,643,9,17,1,17,3,17,646,8,17,1,17,1,17,1,17,1,17,1,17,1,17,
        1,18,1,18,3,18,656,8,18,1,18,1,18,3,18,660,8,18,1,18,5,18,663,8,
        18,10,18,12,18,666,9,18,1,19,1,19,3,19,670,8,19,1,19,1,19,1,19,3,
        19,675,8,19,1,19,1,19,1,20,1,20,3,20,681,8,20,1,20,1,20,3,20,685,
        8,20,1,20,1,20,3,20,689,8,20,1,20,5,20,692,8,20,10,20,12,20,695,
        9,20,1,20,1,20,1,20,1,20,3,20,701,8,20,1,20,1,20,3,20,705,8,20,1,
        20,1,20,3,20,709,8,20,1,20,3,20,712,8,20,1,21,1,21,3,21,716,8,21,
        1,21,1,21,3,21,720,8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,739,8,23,1,23,
        1,23,3,23,743,8,23,1,23,1,23,3,23,747,8,23,1,23,1,23,3,23,751,8,
        23,1,23,1,23,3,23,755,8,23,1,23,1,23,1,23,3,23,760,8,23,1,23,1,23,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,773,8,24,1,24,
        1,24,3,24,777,8,24,1,24,1,24,3,24,781,8,24,1,24,1,24,3,24,785,8,
        24,1,24,1,24,3,24,789,8,24,1,24,1,24,3,24,793,8,24,3,24,795,8,24,
        1,24,1,24,3,24,799,8,24,1,24,1,24,3,24,803,8,24,3,24,805,8,24,1,
        24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,
        25,820,8,25,1,25,1,25,3,25,824,8,25,1,25,1,25,3,25,828,8,25,1,25,
        1,25,3,25,832,8,25,1,25,1,25,3,25,836,8,25,1,25,4,25,839,8,25,11,
        25,12,25,840,1,25,3,25,844,8,25,1,25,1,25,3,25,848,8,25,1,25,1,25,
        3,25,852,8,25,3,25,854,8,25,1,25,1,25,3,25,858,8,25,1,25,1,25,3,
        25,862,8,25,3,25,864,8,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,
        1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,883,8,27,1,27,
        1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,894,8,28,1,28,1,28,
        1,28,5,28,899,8,28,10,28,12,28,902,9,28,1,29,1,29,1,29,1,29,1,29,
        1,29,1,29,1,29,1,29,1,29,3,29,914,8,29,1,30,1,30,1,30,1,30,1,30,
        3,30,921,8,30,1,31,1,31,1,31,1,31,3,31,927,8,31,1,31,3,31,930,8,
        31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,940,8,32,1,32,3,
        32,943,8,32,1,33,1,33,1,33,1,33,1,33,1,33,3,33,951,8,33,1,33,3,33,
        954,8,33,1,34,1,34,1,34,1,34,3,34,960,8,34,1,34,3,34,963,8,34,1,
        34,1,34,1,35,1,35,3,35,969,8,35,1,35,1,35,1,36,1,36,1,36,1,36,1,
        36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,
        38,3,38,991,8,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,1000,8,
        39,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,
        42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,3,44,1026,
        8,44,1,44,1,44,3,44,1030,8,44,1,44,5,44,1033,8,44,10,44,12,44,1036,
        9,44,1,45,1,45,1,45,1,45,1,46,1,46,3,46,1044,8,46,1,46,1,46,3,46,
        1048,8,46,1,46,5,46,1051,8,46,10,46,12,46,1054,9,46,1,47,1,47,1,
        47,1,47,1,47,3,47,1061,8,47,1,48,1,48,1,48,1,48,3,48,1067,8,48,1,
        48,1,48,3,48,1071,8,48,1,48,1,48,3,48,1075,8,48,1,48,1,48,1,49,1,
        49,1,49,1,49,3,49,1083,8,49,1,49,1,49,3,49,1087,8,49,1,49,1,49,3,
        49,1091,8,49,1,49,1,49,1,49,1,49,3,49,1097,8,49,1,49,1,49,3,49,1101,
        8,49,1,49,1,49,3,49,1105,8,49,1,49,1,49,1,49,1,49,3,49,1111,8,49,
        1,49,1,49,3,49,1115,8,49,1,49,1,49,3,49,1119,8,49,1,49,1,49,3,49,
        1123,8,49,1,49,1,49,3,49,1127,8,49,1,49,1,49,1,49,1,49,3,49,1133,
        8,49,1,49,1,49,3,49,1137,8,49,1,49,1,49,3,49,1141,8,49,1,49,1,49,
        3,49,1145,8,49,1,49,1,49,3,49,1149,8,49,1,49,1,49,3,49,1153,8,49,
        1,49,1,49,5,49,1157,8,49,10,49,12,49,1160,9,49,1,50,1,50,5,50,1164,
        8,50,10,50,12,50,1167,9,50,1,51,1,51,3,51,1171,8,51,1,51,1,51,1,
        52,1,52,3,52,1177,8,52,1,53,1,53,1,54,1,54,1,55,1,55,1,55,1,55,1,
        55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,3,55,1197,8,55,1,
        56,1,56,3,56,1201,8,56,1,57,1,57,1,57,1,57,1,57,1,57,3,57,1209,8,
        57,1,58,1,58,1,58,1,58,1,59,1,59,3,59,1217,8,59,3,59,1219,8,59,1,
        59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,3,60,1229,8,60,1,60,1,60,3,
        60,1233,8,60,1,60,1,60,3,60,1237,8,60,1,60,1,60,1,61,1,61,3,61,1243,
        8,61,1,61,1,61,3,61,1247,8,61,1,61,5,61,1250,8,61,10,61,12,61,1253,
        9,61,1,62,1,62,3,62,1257,8,62,1,62,5,62,1260,8,62,10,62,12,62,1263,
        9,62,1,62,1,62,3,62,1267,8,62,4,62,1269,8,62,11,62,12,62,1270,1,
        62,1,62,1,62,3,62,1276,8,62,1,63,1,63,1,63,1,63,3,63,1282,8,63,1,
        63,1,63,1,63,3,63,1287,8,63,1,63,3,63,1290,8,63,1,64,1,64,3,64,1294,
        8,64,1,65,1,65,3,65,1298,8,65,5,65,1300,8,65,10,65,12,65,1303,9,
        65,1,65,1,65,1,65,3,65,1308,8,65,5,65,1310,8,65,10,65,12,65,1313,
        9,65,1,65,1,65,3,65,1317,8,65,1,65,5,65,1320,8,65,10,65,12,65,1323,
        9,65,1,65,3,65,1326,8,65,1,65,3,65,1329,8,65,1,65,1,65,3,65,1333,
        8,65,4,65,1335,8,65,11,65,12,65,1336,1,65,1,65,3,65,1341,8,65,1,
        66,1,66,3,66,1345,8,66,4,66,1347,8,66,11,66,12,66,1348,1,66,1,66,
        1,67,1,67,3,67,1355,8,67,5,67,1357,8,67,10,67,12,67,1360,9,67,1,
        67,1,67,3,67,1364,8,67,5,67,1366,8,67,10,67,12,67,1369,9,67,1,67,
        1,67,1,68,1,68,1,68,1,68,3,68,1377,8,68,1,69,1,69,1,69,1,69,3,69,
        1383,8,69,1,70,1,70,1,70,1,70,1,70,1,70,3,70,1391,8,70,1,70,1,70,
        3,70,1395,8,70,1,70,1,70,3,70,1399,8,70,1,70,1,70,3,70,1403,8,70,
        1,70,1,70,1,70,1,70,1,70,3,70,1410,8,70,1,70,3,70,1413,8,70,1,70,
        3,70,1416,8,70,1,70,3,70,1419,8,70,1,71,1,71,3,71,1423,8,71,3,71,
        1425,8,71,1,71,1,71,1,71,1,71,3,71,1431,8,71,1,71,3,71,1434,8,71,
        1,72,1,72,3,72,1438,8,72,1,72,1,72,3,72,1442,8,72,1,72,1,72,3,72,
        1446,8,72,1,72,1,72,3,72,1450,8,72,1,73,1,73,3,73,1454,8,73,1,73,
        1,73,3,73,1458,8,73,1,73,5,73,1461,8,73,10,73,12,73,1464,9,73,1,
        74,1,74,1,74,3,74,1469,8,74,1,74,1,74,3,74,1473,8,74,1,75,1,75,3,
        75,1477,8,75,1,75,1,75,3,75,1481,8,75,1,75,1,75,1,75,3,75,1486,8,
        75,1,76,1,76,3,76,1490,8,76,1,76,1,76,1,76,1,76,1,76,1,76,1,77,1,
        77,3,77,1500,8,77,1,77,1,77,1,78,1,78,3,78,1506,8,78,1,78,1,78,1,
        78,5,78,1511,8,78,10,78,12,78,1514,9,78,1,79,1,79,1,79,1,79,1,79,
        1,79,1,79,1,79,1,79,1,79,3,79,1526,8,79,1,80,1,80,3,80,1530,8,80,
        1,80,1,80,3,80,1534,8,80,1,80,1,80,3,80,1538,8,80,1,80,5,80,1541,
        8,80,10,80,12,80,1544,9,80,1,81,1,81,3,81,1548,8,81,1,81,1,81,3,
        81,1552,8,81,1,81,1,81,1,82,1,82,3,82,1558,8,82,1,82,1,82,3,82,1562,
        8,82,1,82,1,82,3,82,1566,8,82,1,82,1,82,3,82,1570,8,82,1,82,5,82,
        1573,8,82,10,82,12,82,1576,9,82,1,83,1,83,1,83,3,83,1581,8,83,1,
        83,3,83,1584,8,83,1,84,1,84,1,84,1,85,3,85,1590,8,85,1,85,3,85,1593,
        8,85,1,85,1,85,1,85,1,85,3,85,1599,8,85,1,85,1,85,3,85,1603,8,85,
        1,85,1,85,3,85,1607,8,85,1,86,1,86,3,86,1611,8,86,1,86,1,86,3,86,
        1615,8,86,1,86,5,86,1618,8,86,10,86,12,86,1621,9,86,1,86,1,86,3,
        86,1625,8,86,1,86,1,86,3,86,1629,8,86,1,86,5,86,1632,8,86,10,86,
        12,86,1635,9,86,3,86,1637,8,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
        3,87,1646,8,87,1,88,1,88,1,88,1,88,1,88,1,88,1,88,3,88,1655,8,88,
        1,88,5,88,1658,8,88,10,88,12,88,1661,9,88,1,89,1,89,1,89,1,89,1,
        90,1,90,1,90,1,90,1,91,1,91,3,91,1673,8,91,1,91,3,91,1676,8,91,1,
        92,1,92,1,92,1,92,1,93,1,93,3,93,1684,8,93,1,93,1,93,3,93,1688,8,
        93,1,93,5,93,1691,8,93,10,93,12,93,1694,9,93,1,94,1,94,3,94,1698,
        8,94,1,94,1,94,3,94,1702,8,94,1,94,1,94,1,94,3,94,1707,8,94,1,95,
        1,95,1,96,1,96,3,96,1713,8,96,1,96,5,96,1716,8,96,10,96,12,96,1719,
        9,96,1,96,1,96,1,96,1,96,3,96,1725,8,96,1,97,1,97,3,97,1729,8,97,
        1,97,1,97,3,97,1733,8,97,3,97,1735,8,97,1,97,1,97,3,97,1739,8,97,
        3,97,1741,8,97,1,97,1,97,3,97,1745,8,97,3,97,1747,8,97,1,97,1,97,
        1,98,1,98,3,98,1753,8,98,1,98,1,98,1,99,1,99,3,99,1759,8,99,1,99,
        1,99,3,99,1763,8,99,1,99,3,99,1766,8,99,1,99,3,99,1769,8,99,1,99,
        1,99,1,99,1,99,3,99,1775,8,99,1,99,3,99,1778,8,99,1,99,3,99,1781,
        8,99,1,99,1,99,3,99,1785,8,99,1,99,1,99,1,99,1,99,3,99,1791,8,99,
        1,99,3,99,1794,8,99,1,99,3,99,1797,8,99,1,99,1,99,3,99,1801,8,99,
        1,100,1,100,3,100,1805,8,100,1,100,1,100,3,100,1809,8,100,3,100,
        1811,8,100,1,100,1,100,3,100,1815,8,100,3,100,1817,8,100,1,100,1,
        100,3,100,1821,8,100,3,100,1823,8,100,1,100,1,100,3,100,1827,8,100,
        3,100,1829,8,100,1,100,1,100,1,101,1,101,3,101,1835,8,101,1,101,
        1,101,3,101,1839,8,101,1,101,1,101,3,101,1843,8,101,1,101,1,101,
        3,101,1847,8,101,1,101,1,101,3,101,1851,8,101,1,101,1,101,3,101,
        1855,8,101,1,101,1,101,3,101,1859,8,101,1,101,1,101,3,101,1863,8,
        101,5,101,1865,8,101,10,101,12,101,1868,9,101,3,101,1870,8,101,1,
        101,1,101,1,102,1,102,3,102,1876,8,102,1,102,1,102,3,102,1880,8,
        102,1,102,1,102,3,102,1884,8,102,1,102,3,102,1887,8,102,1,102,5,
        102,1890,8,102,10,102,12,102,1893,9,102,1,103,1,103,3,103,1897,8,
        103,1,103,5,103,1900,8,103,10,103,12,103,1903,9,103,1,104,1,104,
        3,104,1907,8,104,1,104,1,104,1,105,1,105,3,105,1913,8,105,1,105,
        1,105,1,105,1,105,3,105,1919,8,105,1,105,3,105,1922,8,105,1,105,
        3,105,1925,8,105,1,105,3,105,1928,8,105,1,105,1,105,3,105,1932,8,
        105,1,105,3,105,1935,8,105,1,105,3,105,1938,8,105,1,105,3,105,1941,
        8,105,1,105,3,105,1944,8,105,1,106,1,106,3,106,1948,8,106,1,106,
        1,106,3,106,1952,8,106,1,106,1,106,3,106,1956,8,106,1,106,1,106,
        3,106,1960,8,106,1,106,1,106,3,106,1964,8,106,1,106,3,106,1967,8,
        106,1,106,3,106,1970,8,106,1,106,1,106,3,106,1974,8,106,1,106,1,
        106,3,106,1978,8,106,1,106,1,106,3,106,1982,8,106,1,106,1,106,3,
        106,1986,8,106,3,106,1988,8,106,1,106,1,106,1,107,1,107,3,107,1994,
        8,107,1,107,3,107,1997,8,107,1,107,3,107,2000,8,107,1,107,1,107,
        1,108,1,108,3,108,2006,8,108,1,108,3,108,2009,8,108,1,108,3,108,
        2012,8,108,1,108,1,108,1,109,1,109,1,110,1,110,1,111,1,111,1,112,
        1,112,1,113,1,113,1,114,1,114,1,114,1,114,1,114,5,114,2031,8,114,
        10,114,12,114,2034,9,114,1,115,1,115,1,115,1,115,1,115,5,115,2041,
        8,115,10,115,12,115,2044,9,115,1,116,1,116,1,116,1,116,1,116,5,116,
        2051,8,116,10,116,12,116,2054,9,116,1,117,1,117,3,117,2058,8,117,
        5,117,2060,8,117,10,117,12,117,2063,9,117,1,117,1,117,1,118,1,118,
        3,118,2069,8,118,1,118,1,118,3,118,2073,8,118,1,118,1,118,3,118,
        2077,8,118,1,118,1,118,3,118,2081,8,118,1,118,1,118,3,118,2085,8,
        118,1,118,1,118,1,118,1,118,1,118,1,118,3,118,2093,8,118,1,118,1,
        118,3,118,2097,8,118,1,118,1,118,3,118,2101,8,118,1,118,1,118,3,
        118,2105,8,118,1,118,1,118,4,118,2109,8,118,11,118,12,118,2110,1,
        118,1,118,3,118,2115,8,118,1,119,1,119,1,120,1,120,3,120,2121,8,
        120,1,120,1,120,3,120,2125,8,120,1,120,5,120,2128,8,120,10,120,12,
        120,2131,9,120,1,121,1,121,3,121,2135,8,121,1,121,1,121,3,121,2139,
        8,121,1,121,5,121,2142,8,121,10,121,12,121,2145,9,121,1,122,1,122,
        3,122,2149,8,122,1,122,1,122,3,122,2153,8,122,1,122,1,122,5,122,
        2157,8,122,10,122,12,122,2160,9,122,1,123,1,123,1,124,1,124,3,124,
        2166,8,124,1,124,1,124,3,124,2170,8,124,1,124,1,124,5,124,2174,8,
        124,10,124,12,124,2177,9,124,1,125,1,125,1,126,1,126,3,126,2183,
        8,126,1,126,1,126,3,126,2187,8,126,1,126,1,126,5,126,2191,8,126,
        10,126,12,126,2194,9,126,1,127,1,127,1,128,1,128,3,128,2200,8,128,
        1,128,1,128,3,128,2204,8,128,1,128,5,128,2207,8,128,10,128,12,128,
        2210,9,128,1,129,1,129,3,129,2214,8,129,5,129,2216,8,129,10,129,
        12,129,2219,9,129,1,129,1,129,3,129,2223,8,129,1,129,3,129,2226,
        8,129,1,130,1,130,1,130,4,130,2231,8,130,11,130,12,130,2232,1,130,
        3,130,2236,8,130,1,131,1,131,1,131,3,131,2241,8,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,3,131,2250,8,131,1,131,1,131,3,131,
        2254,8,131,1,131,3,131,2257,8,131,1,132,1,132,1,132,1,132,1,132,
        1,132,1,132,1,132,1,132,1,132,1,132,3,132,2270,8,132,1,132,3,132,
        2273,8,132,1,132,1,132,1,133,3,133,2278,8,133,1,133,1,133,1,134,
        1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,3,134,2292,
        8,134,1,135,1,135,3,135,2296,8,135,1,135,5,135,2299,8,135,10,135,
        12,135,2302,9,135,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,
        1,136,3,136,2313,8,136,1,137,1,137,1,137,1,137,1,137,1,137,3,137,
        2321,8,137,1,138,1,138,1,139,1,139,3,139,2327,8,139,1,139,1,139,
        3,139,2331,8,139,1,139,1,139,3,139,2335,8,139,5,139,2337,8,139,10,
        139,12,139,2340,9,139,3,139,2342,8,139,1,139,1,139,1,140,1,140,3,
        140,2348,8,140,1,140,3,140,2351,8,140,1,141,1,141,3,141,2355,8,141,
        1,141,1,141,3,141,2359,8,141,1,141,1,141,3,141,2363,8,141,1,141,
        1,141,3,141,2367,8,141,5,141,2369,8,141,10,141,12,141,2372,9,141,
        1,141,1,141,1,142,1,142,3,142,2378,8,142,1,142,3,142,2381,8,142,
        1,142,1,142,3,142,2385,8,142,1,142,1,142,1,143,1,143,3,143,2391,
        8,143,1,143,1,143,3,143,2395,8,143,1,143,1,143,1,144,1,144,3,144,
        2401,8,144,1,144,1,144,3,144,2405,8,144,1,144,1,144,3,144,2409,8,
        144,1,144,1,144,1,144,3,144,2414,8,144,1,144,1,144,3,144,2418,8,
        144,1,144,1,144,3,144,2422,8,144,1,144,1,144,3,144,2426,8,144,1,
        144,1,144,1,144,3,144,2431,8,144,1,144,3,144,2434,8,144,1,144,3,
        144,2437,8,144,1,144,1,144,1,144,1,144,3,144,2443,8,144,1,144,1,
        144,3,144,2447,8,144,1,144,1,144,3,144,2451,8,144,3,144,2453,8,144,
        1,144,1,144,3,144,2457,8,144,1,144,1,144,3,144,2461,8,144,1,144,
        1,144,3,144,2465,8,144,5,144,2467,8,144,10,144,12,144,2470,9,144,
        3,144,2472,8,144,1,144,1,144,3,144,2476,8,144,1,145,1,145,1,146,
        1,146,3,146,2482,8,146,1,146,1,146,1,146,3,146,2487,8,146,3,146,
        2489,8,146,1,146,1,146,1,147,1,147,3,147,2495,8,147,1,147,4,147,
        2498,8,147,11,147,12,147,2499,1,148,1,148,3,148,2504,8,148,1,148,
        1,148,3,148,2508,8,148,1,148,1,148,3,148,2512,8,148,1,148,1,148,
        3,148,2516,8,148,1,148,3,148,2519,8,148,1,148,3,148,2522,8,148,1,
        148,1,148,1,149,1,149,3,149,2528,8,149,1,149,1,149,3,149,2532,8,
        149,1,149,1,149,3,149,2536,8,149,1,149,1,149,3,149,2540,8,149,1,
        149,3,149,2543,8,149,1,149,3,149,2546,8,149,1,149,1,149,1,150,1,
        150,3,150,2552,8,150,1,150,1,150,3,150,2556,8,150,1,151,1,151,3,
        151,2560,8,151,1,151,4,151,2563,8,151,11,151,12,151,2564,1,151,1,
        151,3,151,2569,8,151,1,151,1,151,3,151,2573,8,151,1,151,4,151,2576,
        8,151,11,151,12,151,2577,3,151,2580,8,151,1,151,3,151,2583,8,151,
        1,151,1,151,3,151,2587,8,151,1,151,3,151,2590,8,151,1,151,3,151,
        2593,8,151,1,151,1,151,1,152,1,152,3,152,2599,8,152,1,152,1,152,
        3,152,2603,8,152,1,152,1,152,3,152,2607,8,152,1,152,1,152,1,153,
        1,153,1,154,1,154,3,154,2615,8,154,1,155,1,155,1,155,3,155,2620,
        8,155,1,156,1,156,3,156,2624,8,156,1,156,1,156,1,157,1,157,1,158,
        1,158,1,159,1,159,1,160,1,160,1,161,1,161,1,161,1,161,1,161,3,161,
        2641,8,161,1,162,1,162,1,163,1,163,1,164,1,164,1,165,1,165,1,165,
        0,1,98,166,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
        40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,
        84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,
        120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,
        152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,
        184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,
        216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,
        248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,
        280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,
        312,314,316,318,320,322,324,326,328,330,0,11,3,0,116,116,123,123,
        128,128,2,0,51,52,72,73,2,0,6,6,13,17,1,0,19,20,2,0,21,21,146,146,
        2,0,22,23,143,143,2,0,84,84,132,132,26,0,46,46,48,48,50,50,53,56,
        60,61,63,65,67,68,71,71,74,74,76,76,81,83,87,87,90,91,93,93,95,96,
        98,98,100,105,115,115,117,121,123,124,126,126,131,131,133,133,136,
        136,140,140,142,142,2,0,14,14,27,30,2,0,16,16,31,34,2,0,35,45,146,
        146,3000,0,332,1,0,0,0,2,352,1,0,0,0,4,386,1,0,0,0,6,388,1,0,0,0,
        8,410,1,0,0,0,10,452,1,0,0,0,12,454,1,0,0,0,14,484,1,0,0,0,16,505,
        1,0,0,0,18,516,1,0,0,0,20,522,1,0,0,0,22,554,1,0,0,0,24,564,1,0,
        0,0,26,578,1,0,0,0,28,582,1,0,0,0,30,586,1,0,0,0,32,598,1,0,0,0,
        34,610,1,0,0,0,36,653,1,0,0,0,38,667,1,0,0,0,40,711,1,0,0,0,42,713,
        1,0,0,0,44,723,1,0,0,0,46,729,1,0,0,0,48,763,1,0,0,0,50,808,1,0,
        0,0,52,867,1,0,0,0,54,875,1,0,0,0,56,886,1,0,0,0,58,903,1,0,0,0,
        60,920,1,0,0,0,62,922,1,0,0,0,64,942,1,0,0,0,66,953,1,0,0,0,68,955,
        1,0,0,0,70,968,1,0,0,0,72,972,1,0,0,0,74,978,1,0,0,0,76,990,1,0,
        0,0,78,992,1,0,0,0,80,1001,1,0,0,0,82,1005,1,0,0,0,84,1009,1,0,0,
        0,86,1015,1,0,0,0,88,1023,1,0,0,0,90,1037,1,0,0,0,92,1041,1,0,0,
        0,94,1055,1,0,0,0,96,1062,1,0,0,0,98,1152,1,0,0,0,100,1161,1,0,0,
        0,102,1168,1,0,0,0,104,1176,1,0,0,0,106,1178,1,0,0,0,108,1180,1,
        0,0,0,110,1196,1,0,0,0,112,1200,1,0,0,0,114,1202,1,0,0,0,116,1210,
        1,0,0,0,118,1218,1,0,0,0,120,1222,1,0,0,0,122,1240,1,0,0,0,124,1275,
        1,0,0,0,126,1289,1,0,0,0,128,1293,1,0,0,0,130,1340,1,0,0,0,132,1346,
        1,0,0,0,134,1358,1,0,0,0,136,1376,1,0,0,0,138,1382,1,0,0,0,140,1384,
        1,0,0,0,142,1424,1,0,0,0,144,1435,1,0,0,0,146,1451,1,0,0,0,148,1465,
        1,0,0,0,150,1476,1,0,0,0,152,1487,1,0,0,0,154,1497,1,0,0,0,156,1503,
        1,0,0,0,158,1525,1,0,0,0,160,1527,1,0,0,0,162,1545,1,0,0,0,164,1557,
        1,0,0,0,166,1577,1,0,0,0,168,1585,1,0,0,0,170,1592,1,0,0,0,172,1636,
        1,0,0,0,174,1645,1,0,0,0,176,1647,1,0,0,0,178,1662,1,0,0,0,180,1666,
        1,0,0,0,182,1670,1,0,0,0,184,1677,1,0,0,0,186,1681,1,0,0,0,188,1706,
        1,0,0,0,190,1708,1,0,0,0,192,1724,1,0,0,0,194,1726,1,0,0,0,196,1750,
        1,0,0,0,198,1800,1,0,0,0,200,1802,1,0,0,0,202,1832,1,0,0,0,204,1873,
        1,0,0,0,206,1894,1,0,0,0,208,1904,1,0,0,0,210,1910,1,0,0,0,212,1945,
        1,0,0,0,214,1991,1,0,0,0,216,2003,1,0,0,0,218,2015,1,0,0,0,220,2017,
        1,0,0,0,222,2019,1,0,0,0,224,2021,1,0,0,0,226,2023,1,0,0,0,228,2025,
        1,0,0,0,230,2035,1,0,0,0,232,2045,1,0,0,0,234,2061,1,0,0,0,236,2114,
        1,0,0,0,238,2116,1,0,0,0,240,2118,1,0,0,0,242,2132,1,0,0,0,244,2146,
        1,0,0,0,246,2161,1,0,0,0,248,2163,1,0,0,0,250,2178,1,0,0,0,252,2180,
        1,0,0,0,254,2195,1,0,0,0,256,2197,1,0,0,0,258,2217,1,0,0,0,260,2227,
        1,0,0,0,262,2256,1,0,0,0,264,2269,1,0,0,0,266,2277,1,0,0,0,268,2291,
        1,0,0,0,270,2293,1,0,0,0,272,2312,1,0,0,0,274,2320,1,0,0,0,276,2322,
        1,0,0,0,278,2324,1,0,0,0,280,2345,1,0,0,0,282,2352,1,0,0,0,284,2377,
        1,0,0,0,286,2388,1,0,0,0,288,2475,1,0,0,0,290,2477,1,0,0,0,292,2488,
        1,0,0,0,294,2492,1,0,0,0,296,2501,1,0,0,0,298,2525,1,0,0,0,300,2549,
        1,0,0,0,302,2579,1,0,0,0,304,2596,1,0,0,0,306,2610,1,0,0,0,308,2614,
        1,0,0,0,310,2616,1,0,0,0,312,2621,1,0,0,0,314,2627,1,0,0,0,316,2629,
        1,0,0,0,318,2631,1,0,0,0,320,2633,1,0,0,0,322,2640,1,0,0,0,324,2642,
        1,0,0,0,326,2644,1,0,0,0,328,2646,1,0,0,0,330,2648,1,0,0,0,332,343,
        3,2,1,0,333,335,5,163,0,0,334,333,1,0,0,0,334,335,1,0,0,0,335,336,
        1,0,0,0,336,338,5,1,0,0,337,339,5,163,0,0,338,337,1,0,0,0,338,339,
        1,0,0,0,339,340,1,0,0,0,340,342,3,2,1,0,341,334,1,0,0,0,342,345,
        1,0,0,0,343,341,1,0,0,0,343,344,1,0,0,0,344,347,1,0,0,0,345,343,
        1,0,0,0,346,348,5,163,0,0,347,346,1,0,0,0,347,348,1,0,0,0,348,349,
        1,0,0,0,349,350,5,0,0,1,350,1,1,0,0,0,351,353,3,104,52,0,352,351,
        1,0,0,0,352,353,1,0,0,0,353,355,1,0,0,0,354,356,5,163,0,0,355,354,
        1,0,0,0,355,356,1,0,0,0,356,357,1,0,0,0,357,362,3,4,2,0,358,360,
        5,163,0,0,359,358,1,0,0,0,359,360,1,0,0,0,360,361,1,0,0,0,361,363,
        5,1,0,0,362,359,1,0,0,0,362,363,1,0,0,0,363,3,1,0,0,0,364,387,3,
        118,59,0,365,387,3,46,23,0,366,387,3,48,24,0,367,387,3,50,25,0,368,
        387,3,54,27,0,369,387,3,56,28,0,370,387,3,58,29,0,371,387,3,72,36,
        0,372,387,3,74,37,0,373,387,3,6,3,0,374,387,3,12,6,0,375,387,3,14,
        7,0,376,387,3,30,15,0,377,387,3,34,17,0,378,387,3,32,16,0,379,387,
        3,110,55,0,380,387,3,112,56,0,381,387,3,16,8,0,382,387,3,18,9,0,
        383,387,3,20,10,0,384,387,3,26,13,0,385,387,3,28,14,0,386,364,1,
        0,0,0,386,365,1,0,0,0,386,366,1,0,0,0,386,367,1,0,0,0,386,368,1,
        0,0,0,386,369,1,0,0,0,386,370,1,0,0,0,386,371,1,0,0,0,386,372,1,
        0,0,0,386,373,1,0,0,0,386,374,1,0,0,0,386,375,1,0,0,0,386,376,1,
        0,0,0,386,377,1,0,0,0,386,378,1,0,0,0,386,379,1,0,0,0,386,380,1,
        0,0,0,386,381,1,0,0,0,386,382,1,0,0,0,386,383,1,0,0,0,386,384,1,
        0,0,0,386,385,1,0,0,0,387,5,1,0,0,0,388,389,5,64,0,0,389,390,5,163,
        0,0,390,399,3,320,160,0,391,393,5,163,0,0,392,391,1,0,0,0,392,393,
        1,0,0,0,393,394,1,0,0,0,394,396,3,8,4,0,395,397,5,163,0,0,396,395,
        1,0,0,0,396,397,1,0,0,0,397,400,1,0,0,0,398,400,5,163,0,0,399,392,
        1,0,0,0,399,398,1,0,0,0,400,401,1,0,0,0,401,402,5,85,0,0,402,403,
        5,163,0,0,403,408,3,10,5,0,404,406,5,163,0,0,405,404,1,0,0,0,405,
        406,1,0,0,0,406,407,1,0,0,0,407,409,3,42,21,0,408,405,1,0,0,0,408,
        409,1,0,0,0,409,7,1,0,0,0,410,412,5,2,0,0,411,413,5,163,0,0,412,
        411,1,0,0,0,412,413,1,0,0,0,413,414,1,0,0,0,414,425,3,320,160,0,
        415,417,5,163,0,0,416,415,1,0,0,0,416,417,1,0,0,0,417,418,1,0,0,
        0,418,420,5,3,0,0,419,421,5,163,0,0,420,419,1,0,0,0,420,421,1,0,
        0,0,421,422,1,0,0,0,422,424,3,320,160,0,423,416,1,0,0,0,424,427,
        1,0,0,0,425,423,1,0,0,0,425,426,1,0,0,0,426,429,1,0,0,0,427,425,
        1,0,0,0,428,430,5,163,0,0,429,428,1,0,0,0,429,430,1,0,0,0,430,431,
        1,0,0,0,431,432,5,4,0,0,432,9,1,0,0,0,433,453,3,40,20,0,434,436,
        5,2,0,0,435,437,5,163,0,0,436,435,1,0,0,0,436,437,1,0,0,0,437,438,
        1,0,0,0,438,440,3,118,59,0,439,441,5,163,0,0,440,439,1,0,0,0,440,
        441,1,0,0,0,441,442,1,0,0,0,442,443,5,4,0,0,443,453,1,0,0,0,444,
        453,3,306,153,0,445,446,3,306,153,0,446,448,5,5,0,0,447,449,5,163,
        0,0,448,447,1,0,0,0,448,449,1,0,0,0,449,450,1,0,0,0,450,451,3,320,
        160,0,451,453,1,0,0,0,452,433,1,0,0,0,452,434,1,0,0,0,452,444,1,
        0,0,0,452,445,1,0,0,0,453,11,1,0,0,0,454,455,5,64,0,0,455,456,5,
        163,0,0,456,457,3,320,160,0,457,458,5,163,0,0,458,459,5,85,0,0,459,
        460,5,163,0,0,460,462,5,2,0,0,461,463,5,163,0,0,462,461,1,0,0,0,
        462,463,1,0,0,0,463,464,1,0,0,0,464,475,5,149,0,0,465,467,5,163,
        0,0,466,465,1,0,0,0,466,467,1,0,0,0,467,468,1,0,0,0,468,470,5,3,
        0,0,469,471,5,163,0,0,470,469,1,0,0,0,470,471,1,0,0,0,471,472,1,
        0,0,0,472,474,5,149,0,0,473,466,1,0,0,0,474,477,1,0,0,0,475,473,
        1,0,0,0,475,476,1,0,0,0,476,478,1,0,0,0,477,475,1,0,0,0,478,479,
        5,4,0,0,479,480,5,163,0,0,480,481,5,55,0,0,481,482,5,163,0,0,482,
        483,5,59,0,0,483,13,1,0,0,0,484,485,5,64,0,0,485,486,5,163,0,0,486,
        488,5,2,0,0,487,489,5,163,0,0,488,487,1,0,0,0,488,489,1,0,0,0,489,
        490,1,0,0,0,490,492,3,118,59,0,491,493,5,163,0,0,492,491,1,0,0,0,
        492,493,1,0,0,0,493,494,1,0,0,0,494,495,5,4,0,0,495,496,5,163,0,
        0,496,497,5,130,0,0,497,498,5,163,0,0,498,503,5,149,0,0,499,501,
        5,163,0,0,500,499,1,0,0,0,500,501,1,0,0,0,501,502,1,0,0,0,502,504,
        3,42,21,0,503,500,1,0,0,0,503,504,1,0,0,0,504,15,1,0,0,0,505,506,
        5,82,0,0,506,507,5,163,0,0,507,508,5,68,0,0,508,509,5,163,0,0,509,
        514,5,149,0,0,510,512,5,163,0,0,511,510,1,0,0,0,511,512,1,0,0,0,
        512,513,1,0,0,0,513,515,3,42,21,0,514,511,1,0,0,0,514,515,1,0,0,
        0,515,17,1,0,0,0,516,517,5,90,0,0,517,518,5,163,0,0,518,519,5,68,
        0,0,519,520,5,163,0,0,520,521,5,149,0,0,521,19,1,0,0,0,522,523,5,
        53,0,0,523,524,5,163,0,0,524,529,5,149,0,0,525,526,5,163,0,0,526,
        527,5,50,0,0,527,528,5,163,0,0,528,530,3,320,160,0,529,525,1,0,0,
        0,529,530,1,0,0,0,530,531,1,0,0,0,531,532,5,163,0,0,532,534,5,2,
        0,0,533,535,5,163,0,0,534,533,1,0,0,0,534,535,1,0,0,0,535,536,1,
        0,0,0,536,537,5,69,0,0,537,538,5,163,0,0,538,547,3,322,161,0,539,
        541,5,163,0,0,540,539,1,0,0,0,540,541,1,0,0,0,541,542,1,0,0,0,542,
        544,5,3,0,0,543,545,5,163,0,0,544,543,1,0,0,0,544,545,1,0,0,0,545,
        546,1,0,0,0,546,548,3,24,12,0,547,540,1,0,0,0,547,548,1,0,0,0,548,
        550,1,0,0,0,549,551,5,163,0,0,550,549,1,0,0,0,550,551,1,0,0,0,551,
        552,1,0,0,0,552,553,5,4,0,0,553,21,1,0,0,0,554,556,3,322,161,0,555,
        557,5,163,0,0,556,555,1,0,0,0,556,557,1,0,0,0,557,558,1,0,0,0,558,
        560,5,6,0,0,559,561,5,163,0,0,560,559,1,0,0,0,560,561,1,0,0,0,561,
        562,1,0,0,0,562,563,3,274,137,0,563,23,1,0,0,0,564,575,3,22,11,0,
        565,567,5,163,0,0,566,565,1,0,0,0,566,567,1,0,0,0,567,568,1,0,0,
        0,568,570,5,3,0,0,569,571,5,163,0,0,570,569,1,0,0,0,570,571,1,0,
        0,0,571,572,1,0,0,0,572,574,3,22,11,0,573,566,1,0,0,0,574,577,1,
        0,0,0,575,573,1,0,0,0,575,576,1,0,0,0,576,25,1,0,0,0,577,575,1,0,
        0,0,578,579,5,74,0,0,579,580,5,163,0,0,580,581,3,320,160,0,581,27,
        1,0,0,0,582,583,5,136,0,0,583,584,5,163,0,0,584,585,3,320,160,0,
        585,29,1,0,0,0,586,587,5,56,0,0,587,588,5,163,0,0,588,590,3,322,
        161,0,589,591,5,163,0,0,590,589,1,0,0,0,590,591,1,0,0,0,591,592,
        1,0,0,0,592,594,5,6,0,0,593,595,5,163,0,0,594,593,1,0,0,0,594,595,
        1,0,0,0,595,596,1,0,0,0,596,597,3,226,113,0,597,31,1,0,0,0,598,599,
        5,60,0,0,599,600,5,163,0,0,600,601,5,108,0,0,601,602,5,163,0,0,602,
        603,5,128,0,0,603,604,5,163,0,0,604,605,3,320,160,0,605,606,5,163,
        0,0,606,607,5,95,0,0,607,608,5,163,0,0,608,609,5,149,0,0,609,33,
        1,0,0,0,610,611,5,66,0,0,611,612,5,163,0,0,612,613,5,99,0,0,613,
        614,5,163,0,0,614,616,3,290,145,0,615,617,5,163,0,0,616,615,1,0,
        0,0,616,617,1,0,0,0,617,618,1,0,0,0,618,620,5,2,0,0,619,621,5,163,
        0,0,620,619,1,0,0,0,620,621,1,0,0,0,621,623,1,0,0,0,622,624,3,36,
        18,0,623,622,1,0,0,0,623,624,1,0,0,0,624,626,1,0,0,0,625,627,5,163,
        0,0,626,625,1,0,0,0,626,627,1,0,0,0,627,629,1,0,0,0,628,630,3,38,
        19,0,629,628,1,0,0,0,629,630,1,0,0,0,630,641,1,0,0,0,631,633,5,163,
        0,0,632,631,1,0,0,0,632,633,1,0,0,0,633,634,1,0,0,0,634,636,5,3,
        0,0,635,637,5,163,0,0,636,635,1,0,0,0,636,637,1,0,0,0,637,638,1,
        0,0,0,638,640,3,38,19,0,639,632,1,0,0,0,640,643,1,0,0,0,641,639,
        1,0,0,0,641,642,1,0,0,0,642,645,1,0,0,0,643,641,1,0,0,0,644,646,
        5,163,0,0,645,644,1,0,0,0,645,646,1,0,0,0,646,647,1,0,0,0,647,648,
        5,4,0,0,648,649,5,163,0,0,649,650,5,50,0,0,650,651,5,163,0,0,651,
        652,3,226,113,0,652,35,1,0,0,0,653,664,3,322,161,0,654,656,5,163,
        0,0,655,654,1,0,0,0,655,656,1,0,0,0,656,657,1,0,0,0,657,659,5,3,
        0,0,658,660,5,163,0,0,659,658,1,0,0,0,659,660,1,0,0,0,660,661,1,
        0,0,0,661,663,3,322,161,0,662,655,1,0,0,0,663,666,1,0,0,0,664,662,
        1,0,0,0,664,665,1,0,0,0,665,37,1,0,0,0,666,664,1,0,0,0,667,669,3,
        322,161,0,668,670,5,163,0,0,669,668,1,0,0,0,669,670,1,0,0,0,670,
        671,1,0,0,0,671,672,5,148,0,0,672,674,5,6,0,0,673,675,5,163,0,0,
        674,673,1,0,0,0,674,675,1,0,0,0,675,676,1,0,0,0,676,677,3,274,137,
        0,677,39,1,0,0,0,678,680,5,7,0,0,679,681,5,163,0,0,680,679,1,0,0,
        0,680,681,1,0,0,0,681,682,1,0,0,0,682,693,5,149,0,0,683,685,5,163,
        0,0,684,683,1,0,0,0,684,685,1,0,0,0,685,686,1,0,0,0,686,688,5,3,
        0,0,687,689,5,163,0,0,688,687,1,0,0,0,688,689,1,0,0,0,689,690,1,
        0,0,0,690,692,5,149,0,0,691,684,1,0,0,0,692,695,1,0,0,0,693,691,
        1,0,0,0,693,694,1,0,0,0,694,696,1,0,0,0,695,693,1,0,0,0,696,712,
        5,8,0,0,697,712,5,149,0,0,698,700,5,86,0,0,699,701,5,163,0,0,700,
        699,1,0,0,0,700,701,1,0,0,0,701,702,1,0,0,0,702,704,5,2,0,0,703,
        705,5,163,0,0,704,703,1,0,0,0,704,705,1,0,0,0,705,706,1,0,0,0,706,
        708,5,149,0,0,707,709,5,163,0,0,708,707,1,0,0,0,708,709,1,0,0,0,
        709,710,1,0,0,0,710,712,5,4,0,0,711,678,1,0,0,0,711,697,1,0,0,0,
        711,698,1,0,0,0,712,41,1,0,0,0,713,715,5,2,0,0,714,716,5,163,0,0,
        715,714,1,0,0,0,715,716,1,0,0,0,716,717,1,0,0,0,717,719,3,24,12,
        0,718,720,5,163,0,0,719,718,1,0,0,0,719,720,1,0,0,0,720,721,1,0,
        0,0,721,722,5,4,0,0,722,43,1,0,0,0,723,724,5,91,0,0,724,725,5,163,
        0,0,725,726,5,106,0,0,726,727,5,163,0,0,727,728,5,80,0,0,728,45,
        1,0,0,0,729,730,5,66,0,0,730,731,5,163,0,0,731,732,5,105,0,0,732,
        733,5,163,0,0,733,734,5,128,0,0,734,738,5,163,0,0,735,736,3,44,22,
        0,736,737,5,163,0,0,737,739,1,0,0,0,738,735,1,0,0,0,738,739,1,0,
        0,0,739,740,1,0,0,0,740,742,3,320,160,0,741,743,5,163,0,0,742,741,
        1,0,0,0,742,743,1,0,0,0,743,744,1,0,0,0,744,746,5,2,0,0,745,747,
        5,163,0,0,746,745,1,0,0,0,746,747,1,0,0,0,747,748,1,0,0,0,748,750,
        3,92,46,0,749,751,5,163,0,0,750,749,1,0,0,0,750,751,1,0,0,0,751,
        752,1,0,0,0,752,754,5,3,0,0,753,755,5,163,0,0,754,753,1,0,0,0,754,
        755,1,0,0,0,755,756,1,0,0,0,756,757,3,96,48,0,757,759,1,0,0,0,758,
        760,5,163,0,0,759,758,1,0,0,0,759,760,1,0,0,0,760,761,1,0,0,0,761,
        762,5,4,0,0,762,47,1,0,0,0,763,764,5,66,0,0,764,765,5,163,0,0,765,
        766,5,118,0,0,766,767,5,163,0,0,767,768,5,128,0,0,768,772,5,163,
        0,0,769,770,3,44,22,0,770,771,5,163,0,0,771,773,1,0,0,0,772,769,
        1,0,0,0,772,773,1,0,0,0,773,774,1,0,0,0,774,776,3,320,160,0,775,
        777,5,163,0,0,776,775,1,0,0,0,776,777,1,0,0,0,777,778,1,0,0,0,778,
        780,5,2,0,0,779,781,5,163,0,0,780,779,1,0,0,0,780,781,1,0,0,0,781,
        782,1,0,0,0,782,784,3,52,26,0,783,785,5,163,0,0,784,783,1,0,0,0,
        784,785,1,0,0,0,785,794,1,0,0,0,786,788,5,3,0,0,787,789,5,163,0,
        0,788,787,1,0,0,0,788,789,1,0,0,0,789,790,1,0,0,0,790,792,3,92,46,
        0,791,793,5,163,0,0,792,791,1,0,0,0,792,793,1,0,0,0,793,795,1,0,
        0,0,794,786,1,0,0,0,794,795,1,0,0,0,795,804,1,0,0,0,796,798,5,3,
        0,0,797,799,5,163,0,0,798,797,1,0,0,0,798,799,1,0,0,0,799,800,1,
        0,0,0,800,802,3,322,161,0,801,803,5,163,0,0,802,801,1,0,0,0,802,
        803,1,0,0,0,803,805,1,0,0,0,804,796,1,0,0,0,804,805,1,0,0,0,805,
        806,1,0,0,0,806,807,5,4,0,0,807,49,1,0,0,0,808,809,5,66,0,0,809,
        810,5,163,0,0,810,811,5,118,0,0,811,812,5,163,0,0,812,813,5,128,
        0,0,813,814,5,163,0,0,814,815,5,88,0,0,815,819,5,163,0,0,816,817,
        3,44,22,0,817,818,5,163,0,0,818,820,1,0,0,0,819,816,1,0,0,0,819,
        820,1,0,0,0,820,821,1,0,0,0,821,823,3,320,160,0,822,824,5,163,0,
        0,823,822,1,0,0,0,823,824,1,0,0,0,824,825,1,0,0,0,825,827,5,2,0,
        0,826,828,5,163,0,0,827,826,1,0,0,0,827,828,1,0,0,0,828,829,1,0,
        0,0,829,838,3,52,26,0,830,832,5,163,0,0,831,830,1,0,0,0,831,832,
        1,0,0,0,832,833,1,0,0,0,833,835,5,3,0,0,834,836,5,163,0,0,835,834,
        1,0,0,0,835,836,1,0,0,0,836,837,1,0,0,0,837,839,3,52,26,0,838,831,
        1,0,0,0,839,840,1,0,0,0,840,838,1,0,0,0,840,841,1,0,0,0,841,843,
        1,0,0,0,842,844,5,163,0,0,843,842,1,0,0,0,843,844,1,0,0,0,844,853,
        1,0,0,0,845,847,5,3,0,0,846,848,5,163,0,0,847,846,1,0,0,0,847,848,
        1,0,0,0,848,849,1,0,0,0,849,851,3,92,46,0,850,852,5,163,0,0,851,
        850,1,0,0,0,851,852,1,0,0,0,852,854,1,0,0,0,853,845,1,0,0,0,853,
        854,1,0,0,0,854,863,1,0,0,0,855,857,5,3,0,0,856,858,5,163,0,0,857,
        856,1,0,0,0,857,858,1,0,0,0,858,859,1,0,0,0,859,861,3,322,161,0,
        860,862,5,163,0,0,861,860,1,0,0,0,861,862,1,0,0,0,862,864,1,0,0,
        0,863,855,1,0,0,0,863,864,1,0,0,0,864,865,1,0,0,0,865,866,5,4,0,
        0,866,51,1,0,0,0,867,868,5,85,0,0,868,869,5,163,0,0,869,870,3,320,
        160,0,870,871,5,163,0,0,871,872,5,130,0,0,872,873,5,163,0,0,873,
        874,3,320,160,0,874,53,1,0,0,0,875,876,5,66,0,0,876,877,5,163,0,
        0,877,878,5,116,0,0,878,882,5,163,0,0,879,880,3,44,22,0,880,881,
        5,163,0,0,881,883,1,0,0,0,882,879,1,0,0,0,882,883,1,0,0,0,883,884,
        1,0,0,0,884,885,3,320,160,0,885,55,1,0,0,0,886,887,5,66,0,0,887,
        888,5,163,0,0,888,889,5,123,0,0,889,893,5,163,0,0,890,891,3,44,22,
        0,891,892,5,163,0,0,892,894,1,0,0,0,893,890,1,0,0,0,893,894,1,0,
        0,0,894,895,1,0,0,0,895,900,3,320,160,0,896,897,5,163,0,0,897,899,
        3,60,30,0,898,896,1,0,0,0,899,902,1,0,0,0,900,898,1,0,0,0,900,901,
        1,0,0,0,901,57,1,0,0,0,902,900,1,0,0,0,903,904,5,66,0,0,904,905,
        5,163,0,0,905,906,5,133,0,0,906,907,5,163,0,0,907,908,3,320,160,
        0,908,909,5,163,0,0,909,910,5,50,0,0,910,911,5,163,0,0,911,913,3,
        98,49,0,912,914,5,163,0,0,913,912,1,0,0,0,913,914,1,0,0,0,914,59,
        1,0,0,0,915,921,3,62,31,0,916,921,3,64,32,0,917,921,3,66,33,0,918,
        921,3,68,34,0,919,921,3,70,35,0,920,915,1,0,0,0,920,916,1,0,0,0,
        920,917,1,0,0,0,920,918,1,0,0,0,920,919,1,0,0,0,921,61,1,0,0,0,922,
        923,5,93,0,0,923,926,5,163,0,0,924,925,5,55,0,0,925,927,5,163,0,
        0,926,924,1,0,0,0,926,927,1,0,0,0,927,929,1,0,0,0,928,930,5,146,
        0,0,929,928,1,0,0,0,929,930,1,0,0,0,930,931,1,0,0,0,931,932,3,316,
        158,0,932,63,1,0,0,0,933,934,5,104,0,0,934,935,5,163,0,0,935,943,
        5,103,0,0,936,937,5,103,0,0,937,939,5,163,0,0,938,940,5,146,0,0,
        939,938,1,0,0,0,939,940,1,0,0,0,940,941,1,0,0,0,941,943,3,316,158,
        0,942,933,1,0,0,0,942,936,1,0,0,0,943,65,1,0,0,0,944,945,5,104,0,
        0,945,946,5,163,0,0,946,954,5,101,0,0,947,948,5,101,0,0,948,950,
        5,163,0,0,949,951,5,146,0,0,950,949,1,0,0,0,950,951,1,0,0,0,951,
        952,1,0,0,0,952,954,3,316,158,0,953,944,1,0,0,0,953,947,1,0,0,0,
        954,67,1,0,0,0,955,956,5,126,0,0,956,959,5,163,0,0,957,958,5,139,
        0,0,958,960,5,163,0,0,959,957,1,0,0,0,959,960,1,0,0,0,960,962,1,
        0,0,0,961,963,5,146,0,0,962,961,1,0,0,0,962,963,1,0,0,0,963,964,
        1,0,0,0,964,965,3,316,158,0,965,69,1,0,0,0,966,967,5,104,0,0,967,
        969,5,163,0,0,968,966,1,0,0,0,968,969,1,0,0,0,969,970,1,0,0,0,970,
        971,5,67,0,0,971,71,1,0,0,0,972,973,5,76,0,0,973,974,5,163,0,0,974,
        975,7,0,0,0,975,976,5,163,0,0,976,977,3,320,160,0,977,73,1,0,0,0,
        978,979,5,48,0,0,979,980,5,163,0,0,980,981,5,128,0,0,981,982,5,163,
        0,0,982,983,3,320,160,0,983,984,5,163,0,0,984,985,3,76,38,0,985,
        75,1,0,0,0,986,991,3,78,39,0,987,991,3,82,41,0,988,991,3,84,42,0,
        989,991,3,86,43,0,990,986,1,0,0,0,990,987,1,0,0,0,990,988,1,0,0,
        0,990,989,1,0,0,0,991,77,1,0,0,0,992,993,5,46,0,0,993,994,5,163,
        0,0,994,995,3,314,157,0,995,996,5,163,0,0,996,999,3,98,49,0,997,
        998,5,163,0,0,998,1000,3,80,40,0,999,997,1,0,0,0,999,1000,1,0,0,
        0,1000,79,1,0,0,0,1001,1002,5,70,0,0,1002,1003,5,163,0,0,1003,1004,
        3,226,113,0,1004,81,1,0,0,0,1005,1006,5,76,0,0,1006,1007,5,163,0,
        0,1007,1008,3,314,157,0,1008,83,1,0,0,0,1009,1010,5,119,0,0,1010,
        1011,5,163,0,0,1011,1012,5,130,0,0,1012,1013,5,163,0,0,1013,1014,
        3,320,160,0,1014,85,1,0,0,0,1015,1016,5,119,0,0,1016,1017,5,163,
        0,0,1017,1018,3,314,157,0,1018,1019,5,163,0,0,1019,1020,5,130,0,
        0,1020,1021,5,163,0,0,1021,1022,3,314,157,0,1022,87,1,0,0,0,1023,
        1034,3,90,45,0,1024,1026,5,163,0,0,1025,1024,1,0,0,0,1025,1026,1,
        0,0,0,1026,1027,1,0,0,0,1027,1029,5,3,0,0,1028,1030,5,163,0,0,1029,
        1028,1,0,0,0,1029,1030,1,0,0,0,1030,1031,1,0,0,0,1031,1033,3,90,
        45,0,1032,1025,1,0,0,0,1033,1036,1,0,0,0,1034,1032,1,0,0,0,1034,
        1035,1,0,0,0,1035,89,1,0,0,0,1036,1034,1,0,0,0,1037,1038,3,314,157,
        0,1038,1039,5,163,0,0,1039,1040,3,98,49,0,1040,91,1,0,0,0,1041,1052,
        3,94,47,0,1042,1044,5,163,0,0,1043,1042,1,0,0,0,1043,1044,1,0,0,
        0,1044,1045,1,0,0,0,1045,1047,5,3,0,0,1046,1048,5,163,0,0,1047,1046,
        1,0,0,0,1047,1048,1,0,0,0,1048,1049,1,0,0,0,1049,1051,3,94,47,0,
        1050,1043,1,0,0,0,1051,1054,1,0,0,0,1052,1050,1,0,0,0,1052,1053,
        1,0,0,0,1053,93,1,0,0,0,1054,1052,1,0,0,0,1055,1056,3,314,157,0,
        1056,1057,5,163,0,0,1057,1060,3,98,49,0,1058,1059,5,163,0,0,1059,
        1061,3,80,40,0,1060,1058,1,0,0,0,1060,1061,1,0,0,0,1061,95,1,0,0,
        0,1062,1063,5,113,0,0,1063,1064,5,163,0,0,1064,1066,5,96,0,0,1065,
        1067,5,163,0,0,1066,1065,1,0,0,0,1066,1067,1,0,0,0,1067,1068,1,0,
        0,0,1068,1070,5,2,0,0,1069,1071,5,163,0,0,1070,1069,1,0,0,0,1070,
        1071,1,0,0,0,1071,1072,1,0,0,0,1072,1074,3,314,157,0,1073,1075,5,
        163,0,0,1074,1073,1,0,0,0,1074,1075,1,0,0,0,1075,1076,1,0,0,0,1076,
        1077,5,4,0,0,1077,97,1,0,0,0,1078,1079,6,49,-1,0,1079,1153,3,322,
        161,0,1080,1082,5,134,0,0,1081,1083,5,163,0,0,1082,1081,1,0,0,0,
        1082,1083,1,0,0,0,1083,1084,1,0,0,0,1084,1086,5,2,0,0,1085,1087,
        5,163,0,0,1086,1085,1,0,0,0,1086,1087,1,0,0,0,1087,1088,1,0,0,0,
        1088,1090,3,88,44,0,1089,1091,5,163,0,0,1090,1089,1,0,0,0,1090,1091,
        1,0,0,0,1091,1092,1,0,0,0,1092,1093,5,4,0,0,1093,1153,1,0,0,0,1094,
        1096,3,322,161,0,1095,1097,5,163,0,0,1096,1095,1,0,0,0,1096,1097,
        1,0,0,0,1097,1098,1,0,0,0,1098,1100,5,2,0,0,1099,1101,5,163,0,0,
        1100,1099,1,0,0,0,1100,1101,1,0,0,0,1101,1102,1,0,0,0,1102,1104,
        3,88,44,0,1103,1105,5,163,0,0,1104,1103,1,0,0,0,1104,1105,1,0,0,
        0,1105,1106,1,0,0,0,1106,1107,5,4,0,0,1107,1153,1,0,0,0,1108,1110,
        3,322,161,0,1109,1111,5,163,0,0,1110,1109,1,0,0,0,1110,1111,1,0,
        0,0,1111,1112,1,0,0,0,1112,1114,5,2,0,0,1113,1115,5,163,0,0,1114,
        1113,1,0,0,0,1114,1115,1,0,0,0,1115,1116,1,0,0,0,1116,1118,3,98,
        49,0,1117,1119,5,163,0,0,1118,1117,1,0,0,0,1118,1119,1,0,0,0,1119,
        1120,1,0,0,0,1120,1122,5,3,0,0,1121,1123,5,163,0,0,1122,1121,1,0,
        0,0,1122,1123,1,0,0,0,1123,1124,1,0,0,0,1124,1126,3,98,49,0,1125,
        1127,5,163,0,0,1126,1125,1,0,0,0,1126,1127,1,0,0,0,1127,1128,1,0,
        0,0,1128,1129,5,4,0,0,1129,1153,1,0,0,0,1130,1132,5,142,0,0,1131,
        1133,5,163,0,0,1132,1131,1,0,0,0,1132,1133,1,0,0,0,1133,1134,1,0,
        0,0,1134,1136,5,2,0,0,1135,1137,5,163,0,0,1136,1135,1,0,0,0,1136,
        1137,1,0,0,0,1137,1138,1,0,0,0,1138,1140,3,316,158,0,1139,1141,5,
        163,0,0,1140,1139,1,0,0,0,1140,1141,1,0,0,0,1141,1142,1,0,0,0,1142,
        1144,5,3,0,0,1143,1145,5,163,0,0,1144,1143,1,0,0,0,1144,1145,1,0,
        0,0,1145,1146,1,0,0,0,1146,1148,3,316,158,0,1147,1149,5,163,0,0,
        1148,1147,1,0,0,0,1148,1149,1,0,0,0,1149,1150,1,0,0,0,1150,1151,
        5,4,0,0,1151,1153,1,0,0,0,1152,1078,1,0,0,0,1152,1080,1,0,0,0,1152,
        1094,1,0,0,0,1152,1108,1,0,0,0,1152,1130,1,0,0,0,1153,1158,1,0,0,
        0,1154,1155,10,5,0,0,1155,1157,3,100,50,0,1156,1154,1,0,0,0,1157,
        1160,1,0,0,0,1158,1156,1,0,0,0,1158,1159,1,0,0,0,1159,99,1,0,0,0,
        1160,1158,1,0,0,0,1161,1165,3,102,51,0,1162,1164,3,102,51,0,1163,
        1162,1,0,0,0,1164,1167,1,0,0,0,1165,1163,1,0,0,0,1165,1166,1,0,0,
        0,1166,101,1,0,0,0,1167,1165,1,0,0,0,1168,1170,5,7,0,0,1169,1171,
        3,316,158,0,1170,1169,1,0,0,0,1170,1171,1,0,0,0,1171,1172,1,0,0,
        0,1172,1173,5,8,0,0,1173,103,1,0,0,0,1174,1177,3,106,53,0,1175,1177,
        3,108,54,0,1176,1174,1,0,0,0,1176,1175,1,0,0,0,1177,105,1,0,0,0,
        1178,1179,5,81,0,0,1179,107,1,0,0,0,1180,1181,5,114,0,0,1181,109,
        1,0,0,0,1182,1183,5,54,0,0,1183,1184,5,163,0,0,1184,1197,5,131,0,
        0,1185,1186,5,54,0,0,1186,1187,5,163,0,0,1187,1188,5,131,0,0,1188,
        1189,5,163,0,0,1189,1190,5,117,0,0,1190,1191,5,163,0,0,1191,1197,
        5,109,0,0,1192,1197,5,61,0,0,1193,1197,5,62,0,0,1194,1197,5,121,
        0,0,1195,1197,5,122,0,0,1196,1182,1,0,0,0,1196,1185,1,0,0,0,1196,
        1192,1,0,0,0,1196,1193,1,0,0,0,1196,1194,1,0,0,0,1196,1195,1,0,0,
        0,1197,111,1,0,0,0,1198,1201,3,114,57,0,1199,1201,3,116,58,0,1200,
        1198,1,0,0,0,1200,1199,1,0,0,0,1201,113,1,0,0,0,1202,1203,5,98,0,
        0,1203,1204,5,163,0,0,1204,1205,5,83,0,0,1205,1208,5,163,0,0,1206,
        1209,5,149,0,0,1207,1209,3,306,153,0,1208,1206,1,0,0,0,1208,1207,
        1,0,0,0,1209,115,1,0,0,0,1210,1211,5,94,0,0,1211,1212,5,163,0,0,
        1212,1213,3,306,153,0,1213,117,1,0,0,0,1214,1216,3,120,60,0,1215,
        1217,5,163,0,0,1216,1215,1,0,0,0,1216,1217,1,0,0,0,1217,1219,1,0,
        0,0,1218,1214,1,0,0,0,1218,1219,1,0,0,0,1219,1220,1,0,0,0,1220,1221,
        3,124,62,0,1221,119,1,0,0,0,1222,1223,5,115,0,0,1223,1224,5,163,
        0,0,1224,1225,5,87,0,0,1225,1226,5,163,0,0,1226,1228,3,320,160,0,
        1227,1229,5,163,0,0,1228,1227,1,0,0,0,1228,1229,1,0,0,0,1229,1230,
        1,0,0,0,1230,1232,5,2,0,0,1231,1233,5,163,0,0,1232,1231,1,0,0,0,
        1232,1233,1,0,0,0,1233,1234,1,0,0,0,1234,1236,3,122,61,0,1235,1237,
        5,163,0,0,1236,1235,1,0,0,0,1236,1237,1,0,0,0,1237,1238,1,0,0,0,
        1238,1239,5,4,0,0,1239,121,1,0,0,0,1240,1251,3,144,72,0,1241,1243,
        5,163,0,0,1242,1241,1,0,0,0,1242,1243,1,0,0,0,1243,1244,1,0,0,0,
        1244,1246,5,3,0,0,1245,1247,5,163,0,0,1246,1245,1,0,0,0,1246,1247,
        1,0,0,0,1247,1248,1,0,0,0,1248,1250,3,144,72,0,1249,1242,1,0,0,0,
        1250,1253,1,0,0,0,1251,1249,1,0,0,0,1251,1252,1,0,0,0,1252,123,1,
        0,0,0,1253,1251,1,0,0,0,1254,1261,3,128,64,0,1255,1257,5,163,0,0,
        1256,1255,1,0,0,0,1256,1257,1,0,0,0,1257,1258,1,0,0,0,1258,1260,
        3,126,63,0,1259,1256,1,0,0,0,1260,1263,1,0,0,0,1261,1259,1,0,0,0,
        1261,1262,1,0,0,0,1262,1276,1,0,0,0,1263,1261,1,0,0,0,1264,1266,
        3,168,84,0,1265,1267,5,163,0,0,1266,1265,1,0,0,0,1266,1267,1,0,0,
        0,1267,1269,1,0,0,0,1268,1264,1,0,0,0,1269,1270,1,0,0,0,1270,1268,
        1,0,0,0,1270,1271,1,0,0,0,1271,1272,1,0,0,0,1272,1273,3,128,64,0,
        1273,1274,6,62,-1,0,1274,1276,1,0,0,0,1275,1254,1,0,0,0,1275,1268,
        1,0,0,0,1276,125,1,0,0,0,1277,1278,5,134,0,0,1278,1279,5,163,0,0,
        1279,1281,5,47,0,0,1280,1282,5,163,0,0,1281,1280,1,0,0,0,1281,1282,
        1,0,0,0,1282,1283,1,0,0,0,1283,1290,3,128,64,0,1284,1286,5,134,0,
        0,1285,1287,5,163,0,0,1286,1285,1,0,0,0,1286,1287,1,0,0,0,1287,1288,
        1,0,0,0,1288,1290,3,128,64,0,1289,1277,1,0,0,0,1289,1284,1,0,0,0,
        1290,127,1,0,0,0,1291,1294,3,130,65,0,1292,1294,3,132,66,0,1293,
        1291,1,0,0,0,1293,1292,1,0,0,0,1294,129,1,0,0,0,1295,1297,3,138,
        69,0,1296,1298,5,163,0,0,1297,1296,1,0,0,0,1297,1298,1,0,0,0,1298,
        1300,1,0,0,0,1299,1295,1,0,0,0,1300,1303,1,0,0,0,1301,1299,1,0,0,
        0,1301,1302,1,0,0,0,1302,1304,1,0,0,0,1303,1301,1,0,0,0,1304,1341,
        3,168,84,0,1305,1307,3,138,69,0,1306,1308,5,163,0,0,1307,1306,1,
        0,0,0,1307,1308,1,0,0,0,1308,1310,1,0,0,0,1309,1305,1,0,0,0,1310,
        1313,1,0,0,0,1311,1309,1,0,0,0,1311,1312,1,0,0,0,1312,1314,1,0,0,
        0,1313,1311,1,0,0,0,1314,1321,3,136,68,0,1315,1317,5,163,0,0,1316,
        1315,1,0,0,0,1316,1317,1,0,0,0,1317,1318,1,0,0,0,1318,1320,3,136,
        68,0,1319,1316,1,0,0,0,1320,1323,1,0,0,0,1321,1319,1,0,0,0,1321,
        1322,1,0,0,0,1322,1328,1,0,0,0,1323,1321,1,0,0,0,1324,1326,5,163,
        0,0,1325,1324,1,0,0,0,1325,1326,1,0,0,0,1326,1327,1,0,0,0,1327,1329,
        3,168,84,0,1328,1325,1,0,0,0,1328,1329,1,0,0,0,1329,1341,1,0,0,0,
        1330,1332,3,138,69,0,1331,1333,5,163,0,0,1332,1331,1,0,0,0,1332,
        1333,1,0,0,0,1333,1335,1,0,0,0,1334,1330,1,0,0,0,1335,1336,1,0,0,
        0,1336,1334,1,0,0,0,1336,1337,1,0,0,0,1337,1338,1,0,0,0,1338,1339,
        6,65,-1,0,1339,1341,1,0,0,0,1340,1301,1,0,0,0,1340,1311,1,0,0,0,
        1340,1334,1,0,0,0,1341,131,1,0,0,0,1342,1344,3,134,67,0,1343,1345,
        5,163,0,0,1344,1343,1,0,0,0,1344,1345,1,0,0,0,1345,1347,1,0,0,0,
        1346,1342,1,0,0,0,1347,1348,1,0,0,0,1348,1346,1,0,0,0,1348,1349,
        1,0,0,0,1349,1350,1,0,0,0,1350,1351,3,130,65,0,1351,133,1,0,0,0,
        1352,1354,3,138,69,0,1353,1355,5,163,0,0,1354,1353,1,0,0,0,1354,
        1355,1,0,0,0,1355,1357,1,0,0,0,1356,1352,1,0,0,0,1357,1360,1,0,0,
        0,1358,1356,1,0,0,0,1358,1359,1,0,0,0,1359,1367,1,0,0,0,1360,1358,
        1,0,0,0,1361,1363,3,136,68,0,1362,1364,5,163,0,0,1363,1362,1,0,0,
        0,1363,1364,1,0,0,0,1364,1366,1,0,0,0,1365,1361,1,0,0,0,1366,1369,
        1,0,0,0,1367,1365,1,0,0,0,1367,1368,1,0,0,0,1368,1370,1,0,0,0,1369,
        1367,1,0,0,0,1370,1371,3,166,83,0,1371,135,1,0,0,0,1372,1377,3,154,
        77,0,1373,1377,3,156,78,0,1374,1377,3,160,80,0,1375,1377,3,164,82,
        0,1376,1372,1,0,0,0,1376,1373,1,0,0,0,1376,1374,1,0,0,0,1376,1375,
        1,0,0,0,1377,137,1,0,0,0,1378,1383,3,150,75,0,1379,1383,3,152,76,
        0,1380,1383,3,142,71,0,1381,1383,3,140,70,0,1382,1378,1,0,0,0,1382,
        1379,1,0,0,0,1382,1380,1,0,0,0,1382,1381,1,0,0,0,1383,139,1,0,0,
        0,1384,1402,5,98,0,0,1385,1386,5,163,0,0,1386,1387,5,139,0,0,1387,
        1388,5,163,0,0,1388,1390,5,89,0,0,1389,1391,5,163,0,0,1390,1389,
        1,0,0,0,1390,1391,1,0,0,0,1391,1392,1,0,0,0,1392,1394,5,2,0,0,1393,
        1395,5,163,0,0,1394,1393,1,0,0,0,1394,1395,1,0,0,0,1395,1396,1,0,
        0,0,1396,1398,3,88,44,0,1397,1399,5,163,0,0,1398,1397,1,0,0,0,1398,
        1399,1,0,0,0,1399,1400,1,0,0,0,1400,1401,5,4,0,0,1401,1403,1,0,0,
        0,1402,1385,1,0,0,0,1402,1403,1,0,0,0,1403,1404,1,0,0,0,1404,1405,
        5,163,0,0,1405,1406,5,85,0,0,1406,1407,5,163,0,0,1407,1412,3,10,
        5,0,1408,1410,5,163,0,0,1409,1408,1,0,0,0,1409,1410,1,0,0,0,1410,
        1411,1,0,0,0,1411,1413,3,42,21,0,1412,1409,1,0,0,0,1412,1413,1,0,
        0,0,1413,1418,1,0,0,0,1414,1416,5,163,0,0,1415,1414,1,0,0,0,1415,
        1416,1,0,0,0,1416,1417,1,0,0,0,1417,1419,3,184,92,0,1418,1415,1,
        0,0,0,1418,1419,1,0,0,0,1419,141,1,0,0,0,1420,1422,3,120,60,0,1421,
        1423,5,163,0,0,1422,1421,1,0,0,0,1422,1423,1,0,0,0,1423,1425,1,0,
        0,0,1424,1420,1,0,0,0,1424,1425,1,0,0,0,1425,1426,1,0,0,0,1426,1427,
        5,56,0,0,1427,1428,5,163,0,0,1428,1433,3,288,144,0,1429,1431,5,163,
        0,0,1430,1429,1,0,0,0,1430,1431,1,0,0,0,1431,1432,1,0,0,0,1432,1434,
        3,184,92,0,1433,1430,1,0,0,0,1433,1434,1,0,0,0,1434,143,1,0,0,0,
        1435,1449,3,320,160,0,1436,1438,5,163,0,0,1437,1436,1,0,0,0,1437,
        1438,1,0,0,0,1438,1439,1,0,0,0,1439,1441,5,9,0,0,1440,1442,5,163,
        0,0,1441,1440,1,0,0,0,1441,1442,1,0,0,0,1442,1443,1,0,0,0,1443,1445,
        3,146,73,0,1444,1446,5,163,0,0,1445,1444,1,0,0,0,1445,1446,1,0,0,
        0,1446,1447,1,0,0,0,1447,1448,5,10,0,0,1448,1450,1,0,0,0,1449,1437,
        1,0,0,0,1449,1450,1,0,0,0,1450,145,1,0,0,0,1451,1462,3,148,74,0,
        1452,1454,5,163,0,0,1453,1452,1,0,0,0,1453,1454,1,0,0,0,1454,1455,
        1,0,0,0,1455,1457,5,3,0,0,1456,1458,5,163,0,0,1457,1456,1,0,0,0,
        1457,1458,1,0,0,0,1458,1459,1,0,0,0,1459,1461,3,148,74,0,1460,1453,
        1,0,0,0,1461,1464,1,0,0,0,1462,1460,1,0,0,0,1462,1463,1,0,0,0,1463,
        147,1,0,0,0,1464,1462,1,0,0,0,1465,1468,3,314,157,0,1466,1467,5,
        163,0,0,1467,1469,3,80,40,0,1468,1466,1,0,0,0,1468,1469,1,0,0,0,
        1469,1472,1,0,0,0,1470,1471,5,163,0,0,1471,1473,3,184,92,0,1472,
        1470,1,0,0,0,1472,1473,1,0,0,0,1473,149,1,0,0,0,1474,1475,5,110,
        0,0,1475,1477,5,163,0,0,1476,1474,1,0,0,0,1476,1477,1,0,0,0,1477,
        1478,1,0,0,0,1478,1480,5,100,0,0,1479,1481,5,163,0,0,1480,1479,1,
        0,0,0,1480,1481,1,0,0,0,1481,1482,1,0,0,0,1482,1485,3,186,93,0,1483,
        1484,5,163,0,0,1484,1486,3,184,92,0,1485,1483,1,0,0,0,1485,1486,
        1,0,0,0,1486,151,1,0,0,0,1487,1489,5,135,0,0,1488,1490,5,163,0,0,
        1489,1488,1,0,0,0,1489,1490,1,0,0,0,1490,1491,1,0,0,0,1491,1492,
        3,226,113,0,1492,1493,5,163,0,0,1493,1494,5,50,0,0,1494,1495,5,163,
        0,0,1495,1496,3,306,153,0,1496,153,1,0,0,0,1497,1499,5,66,0,0,1498,
        1500,5,163,0,0,1499,1498,1,0,0,0,1499,1500,1,0,0,0,1500,1501,1,0,
        0,0,1501,1502,3,186,93,0,1502,155,1,0,0,0,1503,1505,5,102,0,0,1504,
        1506,5,163,0,0,1505,1504,1,0,0,0,1505,1506,1,0,0,0,1506,1507,1,0,
        0,0,1507,1512,3,186,93,0,1508,1509,5,163,0,0,1509,1511,3,158,79,
        0,1510,1508,1,0,0,0,1511,1514,1,0,0,0,1512,1510,1,0,0,0,1512,1513,
        1,0,0,0,1513,157,1,0,0,0,1514,1512,1,0,0,0,1515,1516,5,108,0,0,1516,
        1517,5,163,0,0,1517,1518,5,100,0,0,1518,1519,5,163,0,0,1519,1526,
        3,160,80,0,1520,1521,5,108,0,0,1521,1522,5,163,0,0,1522,1523,5,66,
        0,0,1523,1524,5,163,0,0,1524,1526,3,160,80,0,1525,1515,1,0,0,0,1525,
        1520,1,0,0,0,1526,159,1,0,0,0,1527,1529,5,124,0,0,1528,1530,5,163,
        0,0,1529,1528,1,0,0,0,1529,1530,1,0,0,0,1530,1531,1,0,0,0,1531,1542,
        3,162,81,0,1532,1534,5,163,0,0,1533,1532,1,0,0,0,1533,1534,1,0,0,
        0,1534,1535,1,0,0,0,1535,1537,5,3,0,0,1536,1538,5,163,0,0,1537,1536,
        1,0,0,0,1537,1538,1,0,0,0,1538,1539,1,0,0,0,1539,1541,3,162,81,0,
        1540,1533,1,0,0,0,1541,1544,1,0,0,0,1542,1540,1,0,0,0,1542,1543,
        1,0,0,0,1543,161,1,0,0,0,1544,1542,1,0,0,0,1545,1547,3,312,156,0,
        1546,1548,5,163,0,0,1547,1546,1,0,0,0,1547,1548,1,0,0,0,1548,1549,
        1,0,0,0,1549,1551,5,6,0,0,1550,1552,5,163,0,0,1551,1550,1,0,0,0,
        1551,1552,1,0,0,0,1552,1553,1,0,0,0,1553,1554,3,226,113,0,1554,163,
        1,0,0,0,1555,1556,5,74,0,0,1556,1558,5,163,0,0,1557,1555,1,0,0,0,
        1557,1558,1,0,0,0,1558,1559,1,0,0,0,1559,1561,5,71,0,0,1560,1562,
        5,163,0,0,1561,1560,1,0,0,0,1561,1562,1,0,0,0,1562,1563,1,0,0,0,
        1563,1574,3,226,113,0,1564,1566,5,163,0,0,1565,1564,1,0,0,0,1565,
        1566,1,0,0,0,1566,1567,1,0,0,0,1567,1569,5,3,0,0,1568,1570,5,163,
        0,0,1569,1568,1,0,0,0,1569,1570,1,0,0,0,1570,1571,1,0,0,0,1571,1573,
        3,226,113,0,1572,1565,1,0,0,0,1573,1576,1,0,0,0,1574,1572,1,0,0,
        0,1574,1575,1,0,0,0,1575,165,1,0,0,0,1576,1574,1,0,0,0,1577,1578,
        5,139,0,0,1578,1583,3,170,85,0,1579,1581,5,163,0,0,1580,1579,1,0,
        0,0,1580,1581,1,0,0,0,1581,1582,1,0,0,0,1582,1584,3,184,92,0,1583,
        1580,1,0,0,0,1583,1584,1,0,0,0,1584,167,1,0,0,0,1585,1586,5,120,
        0,0,1586,1587,3,170,85,0,1587,169,1,0,0,0,1588,1590,5,163,0,0,1589,
        1588,1,0,0,0,1589,1590,1,0,0,0,1590,1591,1,0,0,0,1591,1593,5,75,
        0,0,1592,1589,1,0,0,0,1592,1593,1,0,0,0,1593,1594,1,0,0,0,1594,1595,
        5,163,0,0,1595,1598,3,172,86,0,1596,1597,5,163,0,0,1597,1599,3,176,
        88,0,1598,1596,1,0,0,0,1598,1599,1,0,0,0,1599,1602,1,0,0,0,1600,
        1601,5,163,0,0,1601,1603,3,178,89,0,1602,1600,1,0,0,0,1602,1603,
        1,0,0,0,1603,1606,1,0,0,0,1604,1605,5,163,0,0,1605,1607,3,180,90,
        0,1606,1604,1,0,0,0,1606,1607,1,0,0,0,1607,171,1,0,0,0,1608,1619,
        5,143,0,0,1609,1611,5,163,0,0,1610,1609,1,0,0,0,1610,1611,1,0,0,
        0,1611,1612,1,0,0,0,1612,1614,5,3,0,0,1613,1615,5,163,0,0,1614,1613,
        1,0,0,0,1614,1615,1,0,0,0,1615,1616,1,0,0,0,1616,1618,3,174,87,0,
        1617,1610,1,0,0,0,1618,1621,1,0,0,0,1619,1617,1,0,0,0,1619,1620,
        1,0,0,0,1620,1637,1,0,0,0,1621,1619,1,0,0,0,1622,1633,3,174,87,0,
        1623,1625,5,163,0,0,1624,1623,1,0,0,0,1624,1625,1,0,0,0,1625,1626,
        1,0,0,0,1626,1628,5,3,0,0,1627,1629,5,163,0,0,1628,1627,1,0,0,0,
        1628,1629,1,0,0,0,1629,1630,1,0,0,0,1630,1632,3,174,87,0,1631,1624,
        1,0,0,0,1632,1635,1,0,0,0,1633,1631,1,0,0,0,1633,1634,1,0,0,0,1634,
        1637,1,0,0,0,1635,1633,1,0,0,0,1636,1608,1,0,0,0,1636,1622,1,0,0,
        0,1637,173,1,0,0,0,1638,1639,3,226,113,0,1639,1640,5,163,0,0,1640,
        1641,5,50,0,0,1641,1642,5,163,0,0,1642,1643,3,306,153,0,1643,1646,
        1,0,0,0,1644,1646,3,226,113,0,1645,1638,1,0,0,0,1645,1644,1,0,0,
        0,1646,175,1,0,0,0,1647,1648,5,112,0,0,1648,1649,5,163,0,0,1649,
        1650,5,55,0,0,1650,1651,5,163,0,0,1651,1659,3,182,91,0,1652,1654,
        5,3,0,0,1653,1655,5,163,0,0,1654,1653,1,0,0,0,1654,1655,1,0,0,0,
        1655,1656,1,0,0,0,1656,1658,3,182,91,0,1657,1652,1,0,0,0,1658,1661,
        1,0,0,0,1659,1657,1,0,0,0,1659,1660,1,0,0,0,1660,177,1,0,0,0,1661,
        1659,1,0,0,0,1662,1663,5,144,0,0,1663,1664,5,163,0,0,1664,1665,3,
        226,113,0,1665,179,1,0,0,0,1666,1667,5,97,0,0,1667,1668,5,163,0,
        0,1668,1669,3,226,113,0,1669,181,1,0,0,0,1670,1675,3,226,113,0,1671,
        1673,5,163,0,0,1672,1671,1,0,0,0,1672,1673,1,0,0,0,1673,1674,1,0,
        0,0,1674,1676,7,1,0,0,1675,1672,1,0,0,0,1675,1676,1,0,0,0,1676,183,
        1,0,0,0,1677,1678,5,138,0,0,1678,1679,5,163,0,0,1679,1680,3,226,
        113,0,1680,185,1,0,0,0,1681,1692,3,188,94,0,1682,1684,5,163,0,0,
        1683,1682,1,0,0,0,1683,1684,1,0,0,0,1684,1685,1,0,0,0,1685,1687,
        5,3,0,0,1686,1688,5,163,0,0,1687,1686,1,0,0,0,1687,1688,1,0,0,0,
        1688,1689,1,0,0,0,1689,1691,3,188,94,0,1690,1683,1,0,0,0,1691,1694,
        1,0,0,0,1692,1690,1,0,0,0,1692,1693,1,0,0,0,1693,187,1,0,0,0,1694,
        1692,1,0,0,0,1695,1697,3,306,153,0,1696,1698,5,163,0,0,1697,1696,
        1,0,0,0,1697,1698,1,0,0,0,1698,1699,1,0,0,0,1699,1701,5,6,0,0,1700,
        1702,5,163,0,0,1701,1700,1,0,0,0,1701,1702,1,0,0,0,1702,1703,1,0,
        0,0,1703,1704,3,190,95,0,1704,1707,1,0,0,0,1705,1707,3,190,95,0,
        1706,1695,1,0,0,0,1706,1705,1,0,0,0,1707,189,1,0,0,0,1708,1709,3,
        192,96,0,1709,191,1,0,0,0,1710,1717,3,194,97,0,1711,1713,5,163,0,
        0,1712,1711,1,0,0,0,1712,1713,1,0,0,0,1713,1714,1,0,0,0,1714,1716,
        3,196,98,0,1715,1712,1,0,0,0,1716,1719,1,0,0,0,1717,1715,1,0,0,0,
        1717,1718,1,0,0,0,1718,1725,1,0,0,0,1719,1717,1,0,0,0,1720,1721,
        5,2,0,0,1721,1722,3,192,96,0,1722,1723,5,4,0,0,1723,1725,1,0,0,0,
        1724,1710,1,0,0,0,1724,1720,1,0,0,0,1725,193,1,0,0,0,1726,1728,5,
        2,0,0,1727,1729,5,163,0,0,1728,1727,1,0,0,0,1728,1729,1,0,0,0,1729,
        1734,1,0,0,0,1730,1732,3,306,153,0,1731,1733,5,163,0,0,1732,1731,
        1,0,0,0,1732,1733,1,0,0,0,1733,1735,1,0,0,0,1734,1730,1,0,0,0,1734,
        1735,1,0,0,0,1735,1740,1,0,0,0,1736,1738,3,206,103,0,1737,1739,5,
        163,0,0,1738,1737,1,0,0,0,1738,1739,1,0,0,0,1739,1741,1,0,0,0,1740,
        1736,1,0,0,0,1740,1741,1,0,0,0,1741,1746,1,0,0,0,1742,1744,3,202,
        101,0,1743,1745,5,163,0,0,1744,1743,1,0,0,0,1744,1745,1,0,0,0,1745,
        1747,1,0,0,0,1746,1742,1,0,0,0,1746,1747,1,0,0,0,1747,1748,1,0,0,
        0,1748,1749,5,4,0,0,1749,195,1,0,0,0,1750,1752,3,198,99,0,1751,1753,
        5,163,0,0,1752,1751,1,0,0,0,1752,1753,1,0,0,0,1753,1754,1,0,0,0,
        1754,1755,3,194,97,0,1755,197,1,0,0,0,1756,1758,3,326,163,0,1757,
        1759,5,163,0,0,1758,1757,1,0,0,0,1758,1759,1,0,0,0,1759,1760,1,0,
        0,0,1760,1762,3,330,165,0,1761,1763,5,163,0,0,1762,1761,1,0,0,0,
        1762,1763,1,0,0,0,1763,1765,1,0,0,0,1764,1766,3,200,100,0,1765,1764,
        1,0,0,0,1765,1766,1,0,0,0,1766,1768,1,0,0,0,1767,1769,5,163,0,0,
        1768,1767,1,0,0,0,1768,1769,1,0,0,0,1769,1770,1,0,0,0,1770,1771,
        3,330,165,0,1771,1801,1,0,0,0,1772,1774,3,330,165,0,1773,1775,5,
        163,0,0,1774,1773,1,0,0,0,1774,1775,1,0,0,0,1775,1777,1,0,0,0,1776,
        1778,3,200,100,0,1777,1776,1,0,0,0,1777,1778,1,0,0,0,1778,1780,1,
        0,0,0,1779,1781,5,163,0,0,1780,1779,1,0,0,0,1780,1781,1,0,0,0,1781,
        1782,1,0,0,0,1782,1784,3,330,165,0,1783,1785,5,163,0,0,1784,1783,
        1,0,0,0,1784,1785,1,0,0,0,1785,1786,1,0,0,0,1786,1787,3,328,164,
        0,1787,1801,1,0,0,0,1788,1790,3,330,165,0,1789,1791,5,163,0,0,1790,
        1789,1,0,0,0,1790,1791,1,0,0,0,1791,1793,1,0,0,0,1792,1794,3,200,
        100,0,1793,1792,1,0,0,0,1793,1794,1,0,0,0,1794,1796,1,0,0,0,1795,
        1797,5,163,0,0,1796,1795,1,0,0,0,1796,1797,1,0,0,0,1797,1798,1,0,
        0,0,1798,1799,3,330,165,0,1799,1801,1,0,0,0,1800,1756,1,0,0,0,1800,
        1772,1,0,0,0,1800,1788,1,0,0,0,1801,199,1,0,0,0,1802,1804,5,7,0,
        0,1803,1805,5,163,0,0,1804,1803,1,0,0,0,1804,1805,1,0,0,0,1805,1810,
        1,0,0,0,1806,1808,3,306,153,0,1807,1809,5,163,0,0,1808,1807,1,0,
        0,0,1808,1809,1,0,0,0,1809,1811,1,0,0,0,1810,1806,1,0,0,0,1810,1811,
        1,0,0,0,1811,1816,1,0,0,0,1812,1814,3,204,102,0,1813,1815,5,163,
        0,0,1814,1813,1,0,0,0,1814,1815,1,0,0,0,1815,1817,1,0,0,0,1816,1812,
        1,0,0,0,1816,1817,1,0,0,0,1817,1822,1,0,0,0,1818,1820,3,210,105,
        0,1819,1821,5,163,0,0,1820,1819,1,0,0,0,1820,1821,1,0,0,0,1821,1823,
        1,0,0,0,1822,1818,1,0,0,0,1822,1823,1,0,0,0,1823,1828,1,0,0,0,1824,
        1826,3,202,101,0,1825,1827,5,163,0,0,1826,1825,1,0,0,0,1826,1827,
        1,0,0,0,1827,1829,1,0,0,0,1828,1824,1,0,0,0,1828,1829,1,0,0,0,1829,
        1830,1,0,0,0,1830,1831,5,8,0,0,1831,201,1,0,0,0,1832,1834,5,9,0,
        0,1833,1835,5,163,0,0,1834,1833,1,0,0,0,1834,1835,1,0,0,0,1835,1869,
        1,0,0,0,1836,1838,3,314,157,0,1837,1839,5,163,0,0,1838,1837,1,0,
        0,0,1838,1839,1,0,0,0,1839,1840,1,0,0,0,1840,1842,5,148,0,0,1841,
        1843,5,163,0,0,1842,1841,1,0,0,0,1842,1843,1,0,0,0,1843,1844,1,0,
        0,0,1844,1846,3,226,113,0,1845,1847,5,163,0,0,1846,1845,1,0,0,0,
        1846,1847,1,0,0,0,1847,1866,1,0,0,0,1848,1850,5,3,0,0,1849,1851,
        5,163,0,0,1850,1849,1,0,0,0,1850,1851,1,0,0,0,1851,1852,1,0,0,0,
        1852,1854,3,314,157,0,1853,1855,5,163,0,0,1854,1853,1,0,0,0,1854,
        1855,1,0,0,0,1855,1856,1,0,0,0,1856,1858,5,148,0,0,1857,1859,5,163,
        0,0,1858,1857,1,0,0,0,1858,1859,1,0,0,0,1859,1860,1,0,0,0,1860,1862,
        3,226,113,0,1861,1863,5,163,0,0,1862,1861,1,0,0,0,1862,1863,1,0,
        0,0,1863,1865,1,0,0,0,1864,1848,1,0,0,0,1865,1868,1,0,0,0,1866,1864,
        1,0,0,0,1866,1867,1,0,0,0,1867,1870,1,0,0,0,1868,1866,1,0,0,0,1869,
        1836,1,0,0,0,1869,1870,1,0,0,0,1870,1871,1,0,0,0,1871,1872,5,10,
        0,0,1872,203,1,0,0,0,1873,1875,5,148,0,0,1874,1876,5,163,0,0,1875,
        1874,1,0,0,0,1875,1876,1,0,0,0,1876,1877,1,0,0,0,1877,1891,3,224,
        112,0,1878,1880,5,163,0,0,1879,1878,1,0,0,0,1879,1880,1,0,0,0,1880,
        1881,1,0,0,0,1881,1883,5,11,0,0,1882,1884,5,148,0,0,1883,1882,1,
        0,0,0,1883,1884,1,0,0,0,1884,1886,1,0,0,0,1885,1887,5,163,0,0,1886,
        1885,1,0,0,0,1886,1887,1,0,0,0,1887,1888,1,0,0,0,1888,1890,3,224,
        112,0,1889,1879,1,0,0,0,1890,1893,1,0,0,0,1891,1889,1,0,0,0,1891,
        1892,1,0,0,0,1892,205,1,0,0,0,1893,1891,1,0,0,0,1894,1901,3,208,
        104,0,1895,1897,5,163,0,0,1896,1895,1,0,0,0,1896,1897,1,0,0,0,1897,
        1898,1,0,0,0,1898,1900,3,208,104,0,1899,1896,1,0,0,0,1900,1903,1,
        0,0,0,1901,1899,1,0,0,0,1901,1902,1,0,0,0,1902,207,1,0,0,0,1903,
        1901,1,0,0,0,1904,1906,5,148,0,0,1905,1907,5,163,0,0,1906,1905,1,
        0,0,0,1906,1907,1,0,0,0,1907,1908,1,0,0,0,1908,1909,3,222,111,0,
        1909,209,1,0,0,0,1910,1912,5,143,0,0,1911,1913,5,163,0,0,1912,1911,
        1,0,0,0,1912,1913,1,0,0,0,1913,1918,1,0,0,0,1914,1919,5,125,0,0,
        1915,1916,5,47,0,0,1916,1917,5,163,0,0,1917,1919,5,125,0,0,1918,
        1914,1,0,0,0,1918,1915,1,0,0,0,1918,1919,1,0,0,0,1919,1921,1,0,0,
        0,1920,1922,5,163,0,0,1921,1920,1,0,0,0,1921,1922,1,0,0,0,1922,1937,
        1,0,0,0,1923,1925,3,218,109,0,1924,1923,1,0,0,0,1924,1925,1,0,0,
        0,1925,1927,1,0,0,0,1926,1928,5,163,0,0,1927,1926,1,0,0,0,1927,1928,
        1,0,0,0,1928,1929,1,0,0,0,1929,1931,5,12,0,0,1930,1932,5,163,0,0,
        1931,1930,1,0,0,0,1931,1932,1,0,0,0,1932,1934,1,0,0,0,1933,1935,
        3,220,110,0,1934,1933,1,0,0,0,1934,1935,1,0,0,0,1935,1938,1,0,0,
        0,1936,1938,3,316,158,0,1937,1924,1,0,0,0,1937,1936,1,0,0,0,1937,
        1938,1,0,0,0,1938,1943,1,0,0,0,1939,1941,5,163,0,0,1940,1939,1,0,
        0,0,1940,1941,1,0,0,0,1941,1942,1,0,0,0,1942,1944,3,212,106,0,1943,
        1940,1,0,0,0,1943,1944,1,0,0,0,1944,211,1,0,0,0,1945,1947,5,2,0,
        0,1946,1948,5,163,0,0,1947,1946,1,0,0,0,1947,1948,1,0,0,0,1948,1949,
        1,0,0,0,1949,1951,3,306,153,0,1950,1952,5,163,0,0,1951,1950,1,0,
        0,0,1951,1952,1,0,0,0,1952,1953,1,0,0,0,1953,1955,5,3,0,0,1954,1956,
        5,163,0,0,1955,1954,1,0,0,0,1955,1956,1,0,0,0,1956,1957,1,0,0,0,
        1957,1966,3,306,153,0,1958,1960,5,163,0,0,1959,1958,1,0,0,0,1959,
        1960,1,0,0,0,1960,1961,1,0,0,0,1961,1963,5,11,0,0,1962,1964,5,163,
        0,0,1963,1962,1,0,0,0,1963,1964,1,0,0,0,1964,1965,1,0,0,0,1965,1967,
        3,184,92,0,1966,1959,1,0,0,0,1966,1967,1,0,0,0,1967,1987,1,0,0,0,
        1968,1970,5,163,0,0,1969,1968,1,0,0,0,1969,1970,1,0,0,0,1970,1971,
        1,0,0,0,1971,1973,5,11,0,0,1972,1974,5,163,0,0,1973,1972,1,0,0,0,
        1973,1974,1,0,0,0,1974,1975,1,0,0,0,1975,1977,3,216,108,0,1976,1978,
        5,163,0,0,1977,1976,1,0,0,0,1977,1978,1,0,0,0,1978,1979,1,0,0,0,
        1979,1981,5,3,0,0,1980,1982,5,163,0,0,1981,1980,1,0,0,0,1981,1982,
        1,0,0,0,1982,1983,1,0,0,0,1983,1985,3,214,107,0,1984,1986,5,163,
        0,0,1985,1984,1,0,0,0,1985,1986,1,0,0,0,1986,1988,1,0,0,0,1987,1969,
        1,0,0,0,1987,1988,1,0,0,0,1988,1989,1,0,0,0,1989,1990,5,4,0,0,1990,
        213,1,0,0,0,1991,1993,5,9,0,0,1992,1994,5,163,0,0,1993,1992,1,0,
        0,0,1993,1994,1,0,0,0,1994,1996,1,0,0,0,1995,1997,3,172,86,0,1996,
        1995,1,0,0,0,1996,1997,1,0,0,0,1997,1999,1,0,0,0,1998,2000,5,163,
        0,0,1999,1998,1,0,0,0,1999,2000,1,0,0,0,2000,2001,1,0,0,0,2001,2002,
        5,10,0,0,2002,215,1,0,0,0,2003,2005,5,9,0,0,2004,2006,5,163,0,0,
        2005,2004,1,0,0,0,2005,2006,1,0,0,0,2006,2008,1,0,0,0,2007,2009,
        3,172,86,0,2008,2007,1,0,0,0,2008,2009,1,0,0,0,2009,2011,1,0,0,0,
        2010,2012,5,163,0,0,2011,2010,1,0,0,0,2011,2012,1,0,0,0,2012,2013,
        1,0,0,0,2013,2014,5,10,0,0,2014,217,1,0,0,0,2015,2016,5,151,0,0,
        2016,219,1,0,0,0,2017,2018,5,151,0,0,2018,221,1,0,0,0,2019,2020,
        3,320,160,0,2020,223,1,0,0,0,2021,2022,3,320,160,0,2022,225,1,0,
        0,0,2023,2024,3,228,114,0,2024,227,1,0,0,0,2025,2032,3,230,115,0,
        2026,2027,5,163,0,0,2027,2028,5,111,0,0,2028,2029,5,163,0,0,2029,
        2031,3,230,115,0,2030,2026,1,0,0,0,2031,2034,1,0,0,0,2032,2030,1,
        0,0,0,2032,2033,1,0,0,0,2033,229,1,0,0,0,2034,2032,1,0,0,0,2035,
        2042,3,232,116,0,2036,2037,5,163,0,0,2037,2038,5,141,0,0,2038,2039,
        5,163,0,0,2039,2041,3,232,116,0,2040,2036,1,0,0,0,2041,2044,1,0,
        0,0,2042,2040,1,0,0,0,2042,2043,1,0,0,0,2043,231,1,0,0,0,2044,2042,
        1,0,0,0,2045,2052,3,234,117,0,2046,2047,5,163,0,0,2047,2048,5,49,
        0,0,2048,2049,5,163,0,0,2049,2051,3,234,117,0,2050,2046,1,0,0,0,
        2051,2054,1,0,0,0,2052,2050,1,0,0,0,2052,2053,1,0,0,0,2053,233,1,
        0,0,0,2054,2052,1,0,0,0,2055,2057,5,106,0,0,2056,2058,5,163,0,0,
        2057,2056,1,0,0,0,2057,2058,1,0,0,0,2058,2060,1,0,0,0,2059,2055,
        1,0,0,0,2060,2063,1,0,0,0,2061,2059,1,0,0,0,2061,2062,1,0,0,0,2062,
        2064,1,0,0,0,2063,2061,1,0,0,0,2064,2065,3,236,118,0,2065,235,1,
        0,0,0,2066,2076,3,240,120,0,2067,2069,5,163,0,0,2068,2067,1,0,0,
        0,2068,2069,1,0,0,0,2069,2070,1,0,0,0,2070,2072,3,238,119,0,2071,
        2073,5,163,0,0,2072,2071,1,0,0,0,2072,2073,1,0,0,0,2073,2074,1,0,
        0,0,2074,2075,3,240,120,0,2075,2077,1,0,0,0,2076,2068,1,0,0,0,2076,
        2077,1,0,0,0,2077,2115,1,0,0,0,2078,2080,3,240,120,0,2079,2081,5,
        163,0,0,2080,2079,1,0,0,0,2080,2081,1,0,0,0,2081,2082,1,0,0,0,2082,
        2084,5,145,0,0,2083,2085,5,163,0,0,2084,2083,1,0,0,0,2084,2085,1,
        0,0,0,2085,2086,1,0,0,0,2086,2087,3,240,120,0,2087,2088,1,0,0,0,
        2088,2089,6,118,-1,0,2089,2115,1,0,0,0,2090,2092,3,240,120,0,2091,
        2093,5,163,0,0,2092,2091,1,0,0,0,2092,2093,1,0,0,0,2093,2094,1,0,
        0,0,2094,2096,3,238,119,0,2095,2097,5,163,0,0,2096,2095,1,0,0,0,
        2096,2097,1,0,0,0,2097,2098,1,0,0,0,2098,2108,3,240,120,0,2099,2101,
        5,163,0,0,2100,2099,1,0,0,0,2100,2101,1,0,0,0,2101,2102,1,0,0,0,
        2102,2104,3,238,119,0,2103,2105,5,163,0,0,2104,2103,1,0,0,0,2104,
        2105,1,0,0,0,2105,2106,1,0,0,0,2106,2107,3,240,120,0,2107,2109,1,
        0,0,0,2108,2100,1,0,0,0,2109,2110,1,0,0,0,2110,2108,1,0,0,0,2110,
        2111,1,0,0,0,2111,2112,1,0,0,0,2112,2113,6,118,-1,0,2113,2115,1,
        0,0,0,2114,2066,1,0,0,0,2114,2078,1,0,0,0,2114,2090,1,0,0,0,2115,
        237,1,0,0,0,2116,2117,7,2,0,0,2117,239,1,0,0,0,2118,2129,3,242,121,
        0,2119,2121,5,163,0,0,2120,2119,1,0,0,0,2120,2121,1,0,0,0,2121,2122,
        1,0,0,0,2122,2124,5,11,0,0,2123,2125,5,163,0,0,2124,2123,1,0,0,0,
        2124,2125,1,0,0,0,2125,2126,1,0,0,0,2126,2128,3,242,121,0,2127,2120,
        1,0,0,0,2128,2131,1,0,0,0,2129,2127,1,0,0,0,2129,2130,1,0,0,0,2130,
        241,1,0,0,0,2131,2129,1,0,0,0,2132,2143,3,244,122,0,2133,2135,5,
        163,0,0,2134,2133,1,0,0,0,2134,2135,1,0,0,0,2135,2136,1,0,0,0,2136,
        2138,5,18,0,0,2137,2139,5,163,0,0,2138,2137,1,0,0,0,2138,2139,1,
        0,0,0,2139,2140,1,0,0,0,2140,2142,3,244,122,0,2141,2134,1,0,0,0,
        2142,2145,1,0,0,0,2143,2141,1,0,0,0,2143,2144,1,0,0,0,2144,243,1,
        0,0,0,2145,2143,1,0,0,0,2146,2158,3,248,124,0,2147,2149,5,163,0,
        0,2148,2147,1,0,0,0,2148,2149,1,0,0,0,2149,2150,1,0,0,0,2150,2152,
        3,246,123,0,2151,2153,5,163,0,0,2152,2151,1,0,0,0,2152,2153,1,0,
        0,0,2153,2154,1,0,0,0,2154,2155,3,248,124,0,2155,2157,1,0,0,0,2156,
        2148,1,0,0,0,2157,2160,1,0,0,0,2158,2156,1,0,0,0,2158,2159,1,0,0,
        0,2159,245,1,0,0,0,2160,2158,1,0,0,0,2161,2162,7,3,0,0,2162,247,
        1,0,0,0,2163,2175,3,252,126,0,2164,2166,5,163,0,0,2165,2164,1,0,
        0,0,2165,2166,1,0,0,0,2166,2167,1,0,0,0,2167,2169,3,250,125,0,2168,
        2170,5,163,0,0,2169,2168,1,0,0,0,2169,2170,1,0,0,0,2170,2171,1,0,
        0,0,2171,2172,3,252,126,0,2172,2174,1,0,0,0,2173,2165,1,0,0,0,2174,
        2177,1,0,0,0,2175,2173,1,0,0,0,2175,2176,1,0,0,0,2176,249,1,0,0,
        0,2177,2175,1,0,0,0,2178,2179,7,4,0,0,2179,251,1,0,0,0,2180,2192,
        3,256,128,0,2181,2183,5,163,0,0,2182,2181,1,0,0,0,2182,2183,1,0,
        0,0,2183,2184,1,0,0,0,2184,2186,3,254,127,0,2185,2187,5,163,0,0,
        2186,2185,1,0,0,0,2186,2187,1,0,0,0,2187,2188,1,0,0,0,2188,2189,
        3,256,128,0,2189,2191,1,0,0,0,2190,2182,1,0,0,0,2191,2194,1,0,0,
        0,2192,2190,1,0,0,0,2192,2193,1,0,0,0,2193,253,1,0,0,0,2194,2192,
        1,0,0,0,2195,2196,7,5,0,0,2196,255,1,0,0,0,2197,2208,3,258,129,0,
        2198,2200,5,163,0,0,2199,2198,1,0,0,0,2199,2200,1,0,0,0,2200,2201,
        1,0,0,0,2201,2203,5,24,0,0,2202,2204,5,163,0,0,2203,2202,1,0,0,0,
        2203,2204,1,0,0,0,2204,2205,1,0,0,0,2205,2207,3,258,129,0,2206,2199,
        1,0,0,0,2207,2210,1,0,0,0,2208,2206,1,0,0,0,2208,2209,1,0,0,0,2209,
        257,1,0,0,0,2210,2208,1,0,0,0,2211,2213,5,146,0,0,2212,2214,5,163,
        0,0,2213,2212,1,0,0,0,2213,2214,1,0,0,0,2214,2216,1,0,0,0,2215,2211,
        1,0,0,0,2216,2219,1,0,0,0,2217,2215,1,0,0,0,2217,2218,1,0,0,0,2218,
        2220,1,0,0,0,2219,2217,1,0,0,0,2220,2225,3,260,130,0,2221,2223,5,
        163,0,0,2222,2221,1,0,0,0,2222,2223,1,0,0,0,2223,2224,1,0,0,0,2224,
        2226,5,147,0,0,2225,2222,1,0,0,0,2225,2226,1,0,0,0,2226,259,1,0,
        0,0,2227,2235,3,270,135,0,2228,2236,3,264,132,0,2229,2231,3,262,
        131,0,2230,2229,1,0,0,0,2231,2232,1,0,0,0,2232,2230,1,0,0,0,2232,
        2233,1,0,0,0,2233,2236,1,0,0,0,2234,2236,3,268,134,0,2235,2228,1,
        0,0,0,2235,2230,1,0,0,0,2235,2234,1,0,0,0,2235,2236,1,0,0,0,2236,
        261,1,0,0,0,2237,2238,5,163,0,0,2238,2240,5,92,0,0,2239,2241,5,163,
        0,0,2240,2239,1,0,0,0,2240,2241,1,0,0,0,2241,2242,1,0,0,0,2242,2257,
        3,270,135,0,2243,2244,5,7,0,0,2244,2245,3,226,113,0,2245,2246,5,
        8,0,0,2246,2257,1,0,0,0,2247,2249,5,7,0,0,2248,2250,3,226,113,0,
        2249,2248,1,0,0,0,2249,2250,1,0,0,0,2250,2251,1,0,0,0,2251,2253,
        5,148,0,0,2252,2254,3,226,113,0,2253,2252,1,0,0,0,2253,2254,1,0,
        0,0,2254,2255,1,0,0,0,2255,2257,5,8,0,0,2256,2237,1,0,0,0,2256,2243,
        1,0,0,0,2256,2247,1,0,0,0,2257,263,1,0,0,0,2258,2270,3,266,133,0,
        2259,2260,5,163,0,0,2260,2261,5,127,0,0,2261,2262,5,163,0,0,2262,
        2270,5,139,0,0,2263,2264,5,163,0,0,2264,2265,5,79,0,0,2265,2266,
        5,163,0,0,2266,2270,5,139,0,0,2267,2268,5,163,0,0,2268,2270,5,63,
        0,0,2269,2258,1,0,0,0,2269,2259,1,0,0,0,2269,2263,1,0,0,0,2269,2267,
        1,0,0,0,2270,2272,1,0,0,0,2271,2273,5,163,0,0,2272,2271,1,0,0,0,
        2272,2273,1,0,0,0,2273,2274,1,0,0,0,2274,2275,3,270,135,0,2275,265,
        1,0,0,0,2276,2278,5,163,0,0,2277,2276,1,0,0,0,2277,2278,1,0,0,0,
        2278,2279,1,0,0,0,2279,2280,5,25,0,0,2280,267,1,0,0,0,2281,2282,
        5,163,0,0,2282,2283,5,95,0,0,2283,2284,5,163,0,0,2284,2292,5,107,
        0,0,2285,2286,5,163,0,0,2286,2287,5,95,0,0,2287,2288,5,163,0,0,2288,
        2289,5,106,0,0,2289,2290,5,163,0,0,2290,2292,5,107,0,0,2291,2281,
        1,0,0,0,2291,2285,1,0,0,0,2292,269,1,0,0,0,2293,2300,3,272,136,0,
        2294,2296,5,163,0,0,2295,2294,1,0,0,0,2295,2296,1,0,0,0,2296,2297,
        1,0,0,0,2297,2299,3,300,150,0,2298,2295,1,0,0,0,2299,2302,1,0,0,
        0,2300,2298,1,0,0,0,2300,2301,1,0,0,0,2301,271,1,0,0,0,2302,2300,
        1,0,0,0,2303,2313,3,274,137,0,2304,2313,3,310,155,0,2305,2313,3,
        302,151,0,2306,2313,3,286,143,0,2307,2313,3,288,144,0,2308,2313,
        3,294,147,0,2309,2313,3,296,148,0,2310,2313,3,298,149,0,2311,2313,
        3,306,153,0,2312,2303,1,0,0,0,2312,2304,1,0,0,0,2312,2305,1,0,0,
        0,2312,2306,1,0,0,0,2312,2307,1,0,0,0,2312,2308,1,0,0,0,2312,2309,
        1,0,0,0,2312,2310,1,0,0,0,2312,2311,1,0,0,0,2313,273,1,0,0,0,2314,
        2321,3,308,154,0,2315,2321,5,149,0,0,2316,2321,3,276,138,0,2317,
        2321,5,107,0,0,2318,2321,3,278,139,0,2319,2321,3,282,141,0,2320,
        2314,1,0,0,0,2320,2315,1,0,0,0,2320,2316,1,0,0,0,2320,2317,1,0,0,
        0,2320,2318,1,0,0,0,2320,2319,1,0,0,0,2321,275,1,0,0,0,2322,2323,
        7,6,0,0,2323,277,1,0,0,0,2324,2326,5,7,0,0,2325,2327,5,163,0,0,2326,
        2325,1,0,0,0,2326,2327,1,0,0,0,2327,2341,1,0,0,0,2328,2330,3,226,
        113,0,2329,2331,5,163,0,0,2330,2329,1,0,0,0,2330,2331,1,0,0,0,2331,
        2338,1,0,0,0,2332,2334,3,280,140,0,2333,2335,5,163,0,0,2334,2333,
        1,0,0,0,2334,2335,1,0,0,0,2335,2337,1,0,0,0,2336,2332,1,0,0,0,2337,
        2340,1,0,0,0,2338,2336,1,0,0,0,2338,2339,1,0,0,0,2339,2342,1,0,0,
        0,2340,2338,1,0,0,0,2341,2328,1,0,0,0,2341,2342,1,0,0,0,2342,2343,
        1,0,0,0,2343,2344,5,8,0,0,2344,279,1,0,0,0,2345,2347,5,3,0,0,2346,
        2348,5,163,0,0,2347,2346,1,0,0,0,2347,2348,1,0,0,0,2348,2350,1,0,
        0,0,2349,2351,3,226,113,0,2350,2349,1,0,0,0,2350,2351,1,0,0,0,2351,
        281,1,0,0,0,2352,2354,5,9,0,0,2353,2355,5,163,0,0,2354,2353,1,0,
        0,0,2354,2355,1,0,0,0,2355,2356,1,0,0,0,2356,2358,3,284,142,0,2357,
        2359,5,163,0,0,2358,2357,1,0,0,0,2358,2359,1,0,0,0,2359,2370,1,0,
        0,0,2360,2362,5,3,0,0,2361,2363,5,163,0,0,2362,2361,1,0,0,0,2362,
        2363,1,0,0,0,2363,2364,1,0,0,0,2364,2366,3,284,142,0,2365,2367,5,
        163,0,0,2366,2365,1,0,0,0,2366,2367,1,0,0,0,2367,2369,1,0,0,0,2368,
        2360,1,0,0,0,2369,2372,1,0,0,0,2370,2368,1,0,0,0,2370,2371,1,0,0,
        0,2371,2373,1,0,0,0,2372,2370,1,0,0,0,2373,2374,5,10,0,0,2374,283,
        1,0,0,0,2375,2378,3,322,161,0,2376,2378,5,149,0,0,2377,2375,1,0,
        0,0,2377,2376,1,0,0,0,2378,2380,1,0,0,0,2379,2381,5,163,0,0,2380,
        2379,1,0,0,0,2380,2381,1,0,0,0,2381,2382,1,0,0,0,2382,2384,5,148,
        0,0,2383,2385,5,163,0,0,2384,2383,1,0,0,0,2384,2385,1,0,0,0,2385,
        2386,1,0,0,0,2386,2387,3,226,113,0,2387,285,1,0,0,0,2388,2390,5,
        2,0,0,2389,2391,5,163,0,0,2390,2389,1,0,0,0,2390,2391,1,0,0,0,2391,
        2392,1,0,0,0,2392,2394,3,226,113,0,2393,2395,5,163,0,0,2394,2393,
        1,0,0,0,2394,2395,1,0,0,0,2395,2396,1,0,0,0,2396,2397,5,4,0,0,2397,
        287,1,0,0,0,2398,2400,5,65,0,0,2399,2401,5,163,0,0,2400,2399,1,0,
        0,0,2400,2401,1,0,0,0,2401,2402,1,0,0,0,2402,2404,5,2,0,0,2403,2405,
        5,163,0,0,2404,2403,1,0,0,0,2404,2405,1,0,0,0,2405,2406,1,0,0,0,
        2406,2408,5,143,0,0,2407,2409,5,163,0,0,2408,2407,1,0,0,0,2408,2409,
        1,0,0,0,2409,2410,1,0,0,0,2410,2476,5,4,0,0,2411,2413,5,58,0,0,2412,
        2414,5,163,0,0,2413,2412,1,0,0,0,2413,2414,1,0,0,0,2414,2415,1,0,
        0,0,2415,2417,5,2,0,0,2416,2418,5,163,0,0,2417,2416,1,0,0,0,2417,
        2418,1,0,0,0,2418,2419,1,0,0,0,2419,2421,3,292,146,0,2420,2422,5,
        163,0,0,2421,2420,1,0,0,0,2421,2422,1,0,0,0,2422,2433,1,0,0,0,2423,
        2425,5,50,0,0,2424,2426,5,163,0,0,2425,2424,1,0,0,0,2425,2426,1,
        0,0,0,2426,2427,1,0,0,0,2427,2434,3,98,49,0,2428,2430,5,3,0,0,2429,
        2431,5,163,0,0,2430,2429,1,0,0,0,2430,2431,1,0,0,0,2431,2432,1,0,
        0,0,2432,2434,3,292,146,0,2433,2423,1,0,0,0,2433,2428,1,0,0,0,2434,
        2436,1,0,0,0,2435,2437,5,163,0,0,2436,2435,1,0,0,0,2436,2437,1,0,
        0,0,2437,2438,1,0,0,0,2438,2439,5,4,0,0,2439,2476,1,0,0,0,2440,2442,
        3,290,145,0,2441,2443,5,163,0,0,2442,2441,1,0,0,0,2442,2443,1,0,
        0,0,2443,2444,1,0,0,0,2444,2446,5,2,0,0,2445,2447,5,163,0,0,2446,
        2445,1,0,0,0,2446,2447,1,0,0,0,2447,2452,1,0,0,0,2448,2450,5,75,
        0,0,2449,2451,5,163,0,0,2450,2449,1,0,0,0,2450,2451,1,0,0,0,2451,
        2453,1,0,0,0,2452,2448,1,0,0,0,2452,2453,1,0,0,0,2453,2471,1,0,0,
        0,2454,2456,3,292,146,0,2455,2457,5,163,0,0,2456,2455,1,0,0,0,2456,
        2457,1,0,0,0,2457,2468,1,0,0,0,2458,2460,5,3,0,0,2459,2461,5,163,
        0,0,2460,2459,1,0,0,0,2460,2461,1,0,0,0,2461,2462,1,0,0,0,2462,2464,
        3,292,146,0,2463,2465,5,163,0,0,2464,2463,1,0,0,0,2464,2465,1,0,
        0,0,2465,2467,1,0,0,0,2466,2458,1,0,0,0,2467,2470,1,0,0,0,2468,2466,
        1,0,0,0,2468,2469,1,0,0,0,2469,2472,1,0,0,0,2470,2468,1,0,0,0,2471,
        2454,1,0,0,0,2471,2472,1,0,0,0,2472,2473,1,0,0,0,2473,2474,5,4,0,
        0,2474,2476,1,0,0,0,2475,2398,1,0,0,0,2475,2411,1,0,0,0,2475,2440,
        1,0,0,0,2476,289,1,0,0,0,2477,2478,3,322,161,0,2478,291,1,0,0,0,
        2479,2481,3,322,161,0,2480,2482,5,163,0,0,2481,2480,1,0,0,0,2481,
        2482,1,0,0,0,2482,2483,1,0,0,0,2483,2484,5,148,0,0,2484,2486,5,6,
        0,0,2485,2487,5,163,0,0,2486,2485,1,0,0,0,2486,2487,1,0,0,0,2487,
        2489,1,0,0,0,2488,2479,1,0,0,0,2488,2489,1,0,0,0,2489,2490,1,0,0,
        0,2490,2491,3,226,113,0,2491,293,1,0,0,0,2492,2497,3,194,97,0,2493,
        2495,5,163,0,0,2494,2493,1,0,0,0,2494,2495,1,0,0,0,2495,2496,1,0,
        0,0,2496,2498,3,196,98,0,2497,2494,1,0,0,0,2498,2499,1,0,0,0,2499,
        2497,1,0,0,0,2499,2500,1,0,0,0,2500,295,1,0,0,0,2501,2503,5,80,0,
        0,2502,2504,5,163,0,0,2503,2502,1,0,0,0,2503,2504,1,0,0,0,2504,2505,
        1,0,0,0,2505,2507,5,9,0,0,2506,2508,5,163,0,0,2507,2506,1,0,0,0,
        2507,2508,1,0,0,0,2508,2509,1,0,0,0,2509,2511,5,100,0,0,2510,2512,
        5,163,0,0,2511,2510,1,0,0,0,2511,2512,1,0,0,0,2512,2513,1,0,0,0,
        2513,2518,3,186,93,0,2514,2516,5,163,0,0,2515,2514,1,0,0,0,2515,
        2516,1,0,0,0,2516,2517,1,0,0,0,2517,2519,3,184,92,0,2518,2515,1,
        0,0,0,2518,2519,1,0,0,0,2519,2521,1,0,0,0,2520,2522,5,163,0,0,2521,
        2520,1,0,0,0,2521,2522,1,0,0,0,2522,2523,1,0,0,0,2523,2524,5,10,
        0,0,2524,297,1,0,0,0,2525,2527,5,65,0,0,2526,2528,5,163,0,0,2527,
        2526,1,0,0,0,2527,2528,1,0,0,0,2528,2529,1,0,0,0,2529,2531,5,9,0,
        0,2530,2532,5,163,0,0,2531,2530,1,0,0,0,2531,2532,1,0,0,0,2532,2533,
        1,0,0,0,2533,2535,5,100,0,0,2534,2536,5,163,0,0,2535,2534,1,0,0,
        0,2535,2536,1,0,0,0,2536,2537,1,0,0,0,2537,2542,3,186,93,0,2538,
        2540,5,163,0,0,2539,2538,1,0,0,0,2539,2540,1,0,0,0,2540,2541,1,0,
        0,0,2541,2543,3,184,92,0,2542,2539,1,0,0,0,2542,2543,1,0,0,0,2543,
        2545,1,0,0,0,2544,2546,5,163,0,0,2545,2544,1,0,0,0,2545,2546,1,0,
        0,0,2546,2547,1,0,0,0,2547,2548,5,10,0,0,2548,299,1,0,0,0,2549,2551,
        5,5,0,0,2550,2552,5,163,0,0,2551,2550,1,0,0,0,2551,2552,1,0,0,0,
        2552,2555,1,0,0,0,2553,2556,3,314,157,0,2554,2556,5,143,0,0,2555,
        2553,1,0,0,0,2555,2554,1,0,0,0,2556,301,1,0,0,0,2557,2562,5,57,0,
        0,2558,2560,5,163,0,0,2559,2558,1,0,0,0,2559,2560,1,0,0,0,2560,2561,
        1,0,0,0,2561,2563,3,304,152,0,2562,2559,1,0,0,0,2563,2564,1,0,0,
        0,2564,2562,1,0,0,0,2564,2565,1,0,0,0,2565,2580,1,0,0,0,2566,2568,
        5,57,0,0,2567,2569,5,163,0,0,2568,2567,1,0,0,0,2568,2569,1,0,0,0,
        2569,2570,1,0,0,0,2570,2575,3,226,113,0,2571,2573,5,163,0,0,2572,
        2571,1,0,0,0,2572,2573,1,0,0,0,2573,2574,1,0,0,0,2574,2576,3,304,
        152,0,2575,2572,1,0,0,0,2576,2577,1,0,0,0,2577,2575,1,0,0,0,2577,
        2578,1,0,0,0,2578,2580,1,0,0,0,2579,2557,1,0,0,0,2579,2566,1,0,0,
        0,2580,2589,1,0,0,0,2581,2583,5,163,0,0,2582,2581,1,0,0,0,2582,2583,
        1,0,0,0,2583,2584,1,0,0,0,2584,2586,5,77,0,0,2585,2587,5,163,0,0,
        2586,2585,1,0,0,0,2586,2587,1,0,0,0,2587,2588,1,0,0,0,2588,2590,
        3,226,113,0,2589,2582,1,0,0,0,2589,2590,1,0,0,0,2590,2592,1,0,0,
        0,2591,2593,5,163,0,0,2592,2591,1,0,0,0,2592,2593,1,0,0,0,2593,2594,
        1,0,0,0,2594,2595,5,78,0,0,2595,303,1,0,0,0,2596,2598,5,137,0,0,
        2597,2599,5,163,0,0,2598,2597,1,0,0,0,2598,2599,1,0,0,0,2599,2600,
        1,0,0,0,2600,2602,3,226,113,0,2601,2603,5,163,0,0,2602,2601,1,0,
        0,0,2602,2603,1,0,0,0,2603,2604,1,0,0,0,2604,2606,5,129,0,0,2605,
        2607,5,163,0,0,2606,2605,1,0,0,0,2606,2607,1,0,0,0,2607,2608,1,0,
        0,0,2608,2609,3,226,113,0,2609,305,1,0,0,0,2610,2611,3,322,161,0,
        2611,307,1,0,0,0,2612,2615,3,318,159,0,2613,2615,3,316,158,0,2614,
        2612,1,0,0,0,2614,2613,1,0,0,0,2615,309,1,0,0,0,2616,2619,5,26,0,
        0,2617,2620,3,322,161,0,2618,2620,5,151,0,0,2619,2617,1,0,0,0,2619,
        2618,1,0,0,0,2620,311,1,0,0,0,2621,2623,3,272,136,0,2622,2624,5,
        163,0,0,2623,2622,1,0,0,0,2623,2624,1,0,0,0,2624,2625,1,0,0,0,2625,
        2626,3,300,150,0,2626,313,1,0,0,0,2627,2628,3,320,160,0,2628,315,
        1,0,0,0,2629,2630,5,151,0,0,2630,317,1,0,0,0,2631,2632,5,158,0,0,
        2632,319,1,0,0,0,2633,2634,3,322,161,0,2634,321,1,0,0,0,2635,2641,
        5,159,0,0,2636,2637,5,162,0,0,2637,2641,6,161,-1,0,2638,2641,5,152,
        0,0,2639,2641,3,324,162,0,2640,2635,1,0,0,0,2640,2636,1,0,0,0,2640,
        2638,1,0,0,0,2640,2639,1,0,0,0,2641,323,1,0,0,0,2642,2643,7,7,0,
        0,2643,325,1,0,0,0,2644,2645,7,8,0,0,2645,327,1,0,0,0,2646,2647,
        7,9,0,0,2647,329,1,0,0,0,2648,2649,7,10,0,0,2649,331,1,0,0,0,453,
        334,338,343,347,352,355,359,362,386,392,396,399,405,408,412,416,
        420,425,429,436,440,448,452,462,466,470,475,488,492,500,503,511,
        514,529,534,540,544,547,550,556,560,566,570,575,590,594,616,620,
        623,626,629,632,636,641,645,655,659,664,669,674,680,684,688,693,
        700,704,708,711,715,719,738,742,746,750,754,759,772,776,780,784,
        788,792,794,798,802,804,819,823,827,831,835,840,843,847,851,853,
        857,861,863,882,893,900,913,920,926,929,939,942,950,953,959,962,
        968,990,999,1025,1029,1034,1043,1047,1052,1060,1066,1070,1074,1082,
        1086,1090,1096,1100,1104,1110,1114,1118,1122,1126,1132,1136,1140,
        1144,1148,1152,1158,1165,1170,1176,1196,1200,1208,1216,1218,1228,
        1232,1236,1242,1246,1251,1256,1261,1266,1270,1275,1281,1286,1289,
        1293,1297,1301,1307,1311,1316,1321,1325,1328,1332,1336,1340,1344,
        1348,1354,1358,1363,1367,1376,1382,1390,1394,1398,1402,1409,1412,
        1415,1418,1422,1424,1430,1433,1437,1441,1445,1449,1453,1457,1462,
        1468,1472,1476,1480,1485,1489,1499,1505,1512,1525,1529,1533,1537,
        1542,1547,1551,1557,1561,1565,1569,1574,1580,1583,1589,1592,1598,
        1602,1606,1610,1614,1619,1624,1628,1633,1636,1645,1654,1659,1672,
        1675,1683,1687,1692,1697,1701,1706,1712,1717,1724,1728,1732,1734,
        1738,1740,1744,1746,1752,1758,1762,1765,1768,1774,1777,1780,1784,
        1790,1793,1796,1800,1804,1808,1810,1814,1816,1820,1822,1826,1828,
        1834,1838,1842,1846,1850,1854,1858,1862,1866,1869,1875,1879,1883,
        1886,1891,1896,1901,1906,1912,1918,1921,1924,1927,1931,1934,1937,
        1940,1943,1947,1951,1955,1959,1963,1966,1969,1973,1977,1981,1985,
        1987,1993,1996,1999,2005,2008,2011,2032,2042,2052,2057,2061,2068,
        2072,2076,2080,2084,2092,2096,2100,2104,2110,2114,2120,2124,2129,
        2134,2138,2143,2148,2152,2158,2165,2169,2175,2182,2186,2192,2199,
        2203,2208,2213,2217,2222,2225,2232,2235,2240,2249,2253,2256,2269,
        2272,2277,2291,2295,2300,2312,2320,2326,2330,2334,2338,2341,2347,
        2350,2354,2358,2362,2366,2370,2377,2380,2384,2390,2394,2400,2404,
        2408,2413,2417,2421,2425,2430,2433,2436,2442,2446,2450,2452,2456,
        2460,2464,2468,2471,2475,2481,2486,2488,2494,2499,2503,2507,2511,
        2515,2518,2521,2527,2531,2535,2539,2542,2545,2551,2555,2559,2564,
        2568,2572,2577,2579,2582,2586,2589,2592,2598,2602,2606,2614,2619,
        2623,2640
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
    public kU_CreateSequence(): KU_CreateSequenceContext {
        return this.getTypedRuleContext(KU_CreateSequenceContext, 0);
    }
    public kU_CreateType(): KU_CreateTypeContext {
        return this.getTypedRuleContext(KU_CreateTypeContext, 0);
    }
    public kU_Drop(): KU_DropContext {
        return this.getTypedRuleContext(KU_DropContext, 0);
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
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public DBTYPE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DBTYPE, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AttachDatabase;
    }
}


export class KU_OptionContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_Option;
    }
}


export class KU_OptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_Option__list(): KU_OptionContext[] {
        return this.getTypedRuleContexts(KU_OptionContext);
    }
    public kU_Option(i: number): KU_OptionContext {
        return this.getTypedRuleContext(KU_OptionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Options;
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
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
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


export class KU_IfNotExistsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(CypherParser.IF, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(CypherParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXISTS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_IfNotExists;
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
    public kU_PropertyDefinitionsDDL(): KU_PropertyDefinitionsDDLContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsDDLContext, 0);
    }
    public kU_CreateNodeConstraint(): KU_CreateNodeConstraintContext {
        return this.getTypedRuleContext(KU_CreateNodeConstraintContext, 0);
    }
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
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
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public kU_PropertyDefinitionsDDL(): KU_PropertyDefinitionsDDLContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsDDLContext, 0);
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
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public kU_PropertyDefinitionsDDL(): KU_PropertyDefinitionsDDLContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsDDLContext, 0);
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
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateRdfGraph;
    }
}


export class KU_CreateSequenceContext extends antlr.ParserRuleContext {
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
    public SEQUENCE(): antlr.TerminalNode {
        return this.getToken(CypherParser.SEQUENCE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public kU_SequenceOptions__list(): KU_SequenceOptionsContext[] {
        return this.getTypedRuleContexts(KU_SequenceOptionsContext);
    }
    public kU_SequenceOptions(i: number): KU_SequenceOptionsContext {
        return this.getTypedRuleContext(KU_SequenceOptionsContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateSequence;
    }
}


export class KU_CreateTypeContext extends antlr.ParserRuleContext {
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
    public TYPE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TYPE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public kU_DataType(): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateType;
    }
}


export class KU_SequenceOptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_IncrementBy(): KU_IncrementByContext {
        return this.getTypedRuleContext(KU_IncrementByContext, 0);
    }
    public kU_MinValue(): KU_MinValueContext {
        return this.getTypedRuleContext(KU_MinValueContext, 0);
    }
    public kU_MaxValue(): KU_MaxValueContext {
        return this.getTypedRuleContext(KU_MaxValueContext, 0);
    }
    public kU_StartWith(): KU_StartWithContext {
        return this.getTypedRuleContext(KU_StartWithContext, 0);
    }
    public kU_Cycle(): KU_CycleContext {
        return this.getTypedRuleContext(KU_CycleContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_SequenceOptions;
    }
}


export class KU_IncrementByContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INCREMENT(): antlr.TerminalNode {
        return this.getToken(CypherParser.INCREMENT, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(CypherParser.BY, 0);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_IncrementBy;
    }
}


export class KU_MinValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NO(): antlr.TerminalNode {
        return this.getToken(CypherParser.NO, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public MINVALUE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINVALUE, 0);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_MinValue;
    }
}


export class KU_MaxValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NO(): antlr.TerminalNode {
        return this.getToken(CypherParser.NO, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public MAXVALUE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MAXVALUE, 0);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_MaxValue;
    }
}


export class KU_StartWithContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public START(): antlr.TerminalNode {
        return this.getToken(CypherParser.START, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_StartWith;
    }
}


export class KU_CycleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CYCLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CYCLE, 0);
    }
    public NO(): antlr.TerminalNode {
        return this.getToken(CypherParser.NO, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Cycle;
    }
}


export class KU_DropContext extends antlr.ParserRuleContext {
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
    public SEQUENCE(): antlr.TerminalNode {
        return this.getToken(CypherParser.SEQUENCE, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Drop;
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
    public kU_Default(): KU_DefaultContext {
        return this.getTypedRuleContext(KU_DefaultContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AddProperty;
    }
}


export class KU_DefaultContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEFAULT(): antlr.TerminalNode {
        return this.getToken(CypherParser.DEFAULT, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Default;
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


export class KU_PropertyDefinitionsDDLContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_PropertyDefinitionDDL__list(): KU_PropertyDefinitionDDLContext[] {
        return this.getTypedRuleContexts(KU_PropertyDefinitionDDLContext);
    }
    public kU_PropertyDefinitionDDL(i: number): KU_PropertyDefinitionDDLContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionDDLContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_PropertyDefinitionsDDL;
    }
}


export class KU_PropertyDefinitionDDLContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public kU_DataType(): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, 0);
    }
    public kU_Default(): KU_DefaultContext {
        return this.getTypedRuleContext(KU_DefaultContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_PropertyDefinitionDDL;
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
    public DECIMAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.DECIMAL, 0);
    }
    public oC_IntegerLiteral__list(): OC_IntegerLiteralContext[] {
        return this.getTypedRuleContexts(OC_IntegerLiteralContext);
    }
    public oC_IntegerLiteral(i: number): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, i);
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
    public kU_ProjectGraph(): KU_ProjectGraphContext {
        return this.getTypedRuleContext(KU_ProjectGraphContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Query;
    }
}


export class KU_ProjectGraphContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROJECT(): antlr.TerminalNode {
        return this.getToken(CypherParser.PROJECT, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public GRAPH(): antlr.TerminalNode {
        return this.getToken(CypherParser.GRAPH, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public kU_GraphProjectionTableItems(): KU_GraphProjectionTableItemsContext {
        return this.getTypedRuleContext(KU_GraphProjectionTableItemsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ProjectGraph;
    }
}


export class KU_GraphProjectionTableItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_GraphProjectionTableItem__list(): KU_GraphProjectionTableItemContext[] {
        return this.getTypedRuleContexts(KU_GraphProjectionTableItemContext);
    }
    public kU_GraphProjectionTableItem(i: number): KU_GraphProjectionTableItemContext {
        return this.getTypedRuleContext(KU_GraphProjectionTableItemContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_GraphProjectionTableItems;
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
    public kU_ProjectGraph(): KU_ProjectGraphContext {
        return this.getTypedRuleContext(KU_ProjectGraphContext, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_InQueryCall;
    }
}


export class KU_GraphProjectionTableItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public kU_GraphProjectionColumnItems(): KU_GraphProjectionColumnItemsContext {
        return this.getTypedRuleContext(KU_GraphProjectionColumnItemsContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_GraphProjectionTableItem;
    }
}


export class KU_GraphProjectionColumnItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_GraphProjectionColumnItem__list(): KU_GraphProjectionColumnItemContext[] {
        return this.getTypedRuleContexts(KU_GraphProjectionColumnItemContext);
    }
    public kU_GraphProjectionColumnItem(i: number): KU_GraphProjectionColumnItemContext {
        return this.getTypedRuleContext(KU_GraphProjectionColumnItemContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_GraphProjectionColumnItems;
    }
}


export class KU_GraphProjectionColumnItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public kU_Default(): KU_DefaultContext {
        return this.getTypedRuleContext(KU_DefaultContext, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_GraphProjectionColumnItem;
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
    public NULL(): antlr.TerminalNode {
        return this.getToken(CypherParser.NULL, 0);
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
    public NULL(): antlr.TerminalNode {
        return this.getToken(CypherParser.NULL, 0);
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
    public CAST(): antlr.TerminalNode {
        return this.getToken(CypherParser.CAST, 0);
    }
    public kU_FunctionParameter__list(): KU_FunctionParameterContext[] {
        return this.getTypedRuleContexts(KU_FunctionParameterContext);
    }
    public kU_FunctionParameter(i: number): KU_FunctionParameterContext {
        return this.getTypedRuleContext(KU_FunctionParameterContext, i);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public kU_DataType(): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, 0);
    }
    public oC_FunctionName(): OC_FunctionNameContext {
        return this.getTypedRuleContext(OC_FunctionNameContext, 0);
    }
    public DISTINCT(): antlr.TerminalNode {
        return this.getToken(CypherParser.DISTINCT, 0);
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
    public ADD(): antlr.TerminalNode {
        return this.getToken(CypherParser.ADD, 0);
    }
    public ALTER(): antlr.TerminalNode {
        return this.getToken(CypherParser.ALTER, 0);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public ATTACH(): antlr.TerminalNode {
        return this.getToken(CypherParser.ATTACH, 0);
    }
    public BEGIN(): antlr.TerminalNode {
        return this.getToken(CypherParser.BEGIN, 0);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(CypherParser.BY, 0);
    }
    public CALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.CALL, 0);
    }
    public COMMIT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COMMIT, 0);
    }
    public CONTAINS(): antlr.TerminalNode {
        return this.getToken(CypherParser.CONTAINS, 0);
    }
    public COPY(): antlr.TerminalNode {
        return this.getToken(CypherParser.COPY, 0);
    }
    public COUNT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COUNT, 0);
    }
    public CYCLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CYCLE, 0);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DATABASE, 0);
    }
    public DECIMAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.DECIMAL, 0);
    }
    public DELETE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DELETE, 0);
    }
    public DETACH(): antlr.TerminalNode {
        return this.getToken(CypherParser.DETACH, 0);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(CypherParser.DROP, 0);
    }
    public EXPLAIN(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXPLAIN, 0);
    }
    public EXPORT(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXPORT, 0);
    }
    public EXTENSION(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXTENSION, 0);
    }
    public GRAPH(): antlr.TerminalNode {
        return this.getToken(CypherParser.GRAPH, 0);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(CypherParser.IF, 0);
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(CypherParser.IS, 0);
    }
    public IMPORT(): antlr.TerminalNode {
        return this.getToken(CypherParser.IMPORT, 0);
    }
    public INCREMENT(): antlr.TerminalNode {
        return this.getToken(CypherParser.INCREMENT, 0);
    }
    public KEY(): antlr.TerminalNode {
        return this.getToken(CypherParser.KEY, 0);
    }
    public LOAD(): antlr.TerminalNode {
        return this.getToken(CypherParser.LOAD, 0);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(CypherParser.MATCH, 0);
    }
    public MAXVALUE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MAXVALUE, 0);
    }
    public MERGE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MERGE, 0);
    }
    public MINVALUE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINVALUE, 0);
    }
    public NO(): antlr.TerminalNode {
        return this.getToken(CypherParser.NO, 0);
    }
    public NODE(): antlr.TerminalNode {
        return this.getToken(CypherParser.NODE, 0);
    }
    public PROJECT(): antlr.TerminalNode {
        return this.getToken(CypherParser.PROJECT, 0);
    }
    public READ(): antlr.TerminalNode {
        return this.getToken(CypherParser.READ, 0);
    }
    public REL(): antlr.TerminalNode {
        return this.getToken(CypherParser.REL, 0);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(CypherParser.RENAME, 0);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(CypherParser.RETURN, 0);
    }
    public ROLLBACK(): antlr.TerminalNode {
        return this.getToken(CypherParser.ROLLBACK, 0);
    }
    public SEQUENCE(): antlr.TerminalNode {
        return this.getToken(CypherParser.SEQUENCE, 0);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(CypherParser.SET, 0);
    }
    public START(): antlr.TerminalNode {
        return this.getToken(CypherParser.START, 0);
    }
    public TRANSACTION(): antlr.TerminalNode {
        return this.getToken(CypherParser.TRANSACTION, 0);
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TYPE, 0);
    }
    public USE(): antlr.TerminalNode {
        return this.getToken(CypherParser.USE, 0);
    }
    public WRITE(): antlr.TerminalNode {
        return this.getToken(CypherParser.WRITE, 0);
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

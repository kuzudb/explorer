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
    public static readonly ACYCLIC = 46;
    public static readonly ANY = 47;
    public static readonly ADD = 48;
    public static readonly ALL = 49;
    public static readonly ALTER = 50;
    public static readonly AND = 51;
    public static readonly AS = 52;
    public static readonly ASC = 53;
    public static readonly ASCENDING = 54;
    public static readonly ATTACH = 55;
    public static readonly BEGIN = 56;
    public static readonly BY = 57;
    public static readonly CALL = 58;
    public static readonly CASE = 59;
    public static readonly CAST = 60;
    public static readonly CHECKPOINT = 61;
    public static readonly COLUMN = 62;
    public static readonly COMMENT = 63;
    public static readonly COMMIT = 64;
    public static readonly COMMIT_SKIP_CHECKPOINT = 65;
    public static readonly CONTAINS = 66;
    public static readonly COPY = 67;
    public static readonly COUNT = 68;
    public static readonly CREATE = 69;
    public static readonly CYCLE = 70;
    public static readonly DATABASE = 71;
    public static readonly DBTYPE = 72;
    public static readonly DEFAULT = 73;
    public static readonly DELETE = 74;
    public static readonly DESC = 75;
    public static readonly DESCENDING = 76;
    public static readonly DETACH = 77;
    public static readonly DISTINCT = 78;
    public static readonly DROP = 79;
    public static readonly ELSE = 80;
    public static readonly END = 81;
    public static readonly ENDS = 82;
    public static readonly EXISTS = 83;
    public static readonly EXPLAIN = 84;
    public static readonly EXPORT = 85;
    public static readonly EXTENSION = 86;
    public static readonly FALSE = 87;
    public static readonly FROM = 88;
    public static readonly GLOB = 89;
    public static readonly GRAPH = 90;
    public static readonly GROUP = 91;
    public static readonly HEADERS = 92;
    public static readonly HINT = 93;
    public static readonly IMPORT = 94;
    public static readonly IF = 95;
    public static readonly IN = 96;
    public static readonly INCREMENT = 97;
    public static readonly INSTALL = 98;
    public static readonly IS = 99;
    public static readonly JOIN = 100;
    public static readonly KEY = 101;
    public static readonly LIMIT = 102;
    public static readonly LOAD = 103;
    public static readonly LOGICAL = 104;
    public static readonly MACRO = 105;
    public static readonly MATCH = 106;
    public static readonly MAXVALUE = 107;
    public static readonly MERGE = 108;
    public static readonly MINVALUE = 109;
    public static readonly MULTI_JOIN = 110;
    public static readonly NO = 111;
    public static readonly NODE = 112;
    public static readonly NOT = 113;
    public static readonly NONE = 114;
    public static readonly NULL = 115;
    public static readonly ON = 116;
    public static readonly ONLY = 117;
    public static readonly OPTIONAL = 118;
    public static readonly OR = 119;
    public static readonly ORDER = 120;
    public static readonly PRIMARY = 121;
    public static readonly PROFILE = 122;
    public static readonly PROJECT = 123;
    public static readonly READ = 124;
    public static readonly REL = 125;
    public static readonly RENAME = 126;
    public static readonly RETURN = 127;
    public static readonly ROLLBACK = 128;
    public static readonly ROLLBACK_SKIP_CHECKPOINT = 129;
    public static readonly SEQUENCE = 130;
    public static readonly SET = 131;
    public static readonly SHORTEST = 132;
    public static readonly START = 133;
    public static readonly STARTS = 134;
    public static readonly TABLE = 135;
    public static readonly THEN = 136;
    public static readonly TO = 137;
    public static readonly TRAIL = 138;
    public static readonly TRANSACTION = 139;
    public static readonly TRUE = 140;
    public static readonly TYPE = 141;
    public static readonly UNION = 142;
    public static readonly UNWIND = 143;
    public static readonly USE = 144;
    public static readonly WHEN = 145;
    public static readonly WHERE = 146;
    public static readonly WITH = 147;
    public static readonly WRITE = 148;
    public static readonly WSHORTEST = 149;
    public static readonly XOR = 150;
    public static readonly SINGLE = 151;
    public static readonly YIELD = 152;
    public static readonly DECIMAL = 153;
    public static readonly STAR = 154;
    public static readonly L_SKIP = 155;
    public static readonly INVALID_NOT_EQUAL = 156;
    public static readonly MINUS = 157;
    public static readonly FACTORIAL = 158;
    public static readonly COLON = 159;
    public static readonly StringLiteral = 160;
    public static readonly EscapedChar = 161;
    public static readonly DecimalInteger = 162;
    public static readonly HexLetter = 163;
    public static readonly HexDigit = 164;
    public static readonly Digit = 165;
    public static readonly NonZeroDigit = 166;
    public static readonly NonZeroOctDigit = 167;
    public static readonly ZeroDigit = 168;
    public static readonly ExponentDecimalReal = 169;
    public static readonly RegularDecimalReal = 170;
    public static readonly UnescapedSymbolicName = 171;
    public static readonly IdentifierStart = 172;
    public static readonly IdentifierPart = 173;
    public static readonly EscapedSymbolicName = 174;
    public static readonly SP = 175;
    public static readonly WHITESPACE = 176;
    public static readonly CypherComment = 177;
    public static readonly Unknown = 178;
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
    public static readonly RULE_kU_IfNotExists = 21;
    public static readonly RULE_kU_CreateNodeTable = 22;
    public static readonly RULE_kU_CreateRelTable = 23;
    public static readonly RULE_kU_FromToConnections = 24;
    public static readonly RULE_kU_FromToConnection = 25;
    public static readonly RULE_kU_CreateSequence = 26;
    public static readonly RULE_kU_CreateType = 27;
    public static readonly RULE_kU_SequenceOptions = 28;
    public static readonly RULE_kU_IncrementBy = 29;
    public static readonly RULE_kU_MinValue = 30;
    public static readonly RULE_kU_MaxValue = 31;
    public static readonly RULE_kU_StartWith = 32;
    public static readonly RULE_kU_Cycle = 33;
    public static readonly RULE_kU_IfExists = 34;
    public static readonly RULE_kU_Drop = 35;
    public static readonly RULE_kU_AlterTable = 36;
    public static readonly RULE_kU_AlterOptions = 37;
    public static readonly RULE_kU_AddProperty = 38;
    public static readonly RULE_kU_Default = 39;
    public static readonly RULE_kU_DropProperty = 40;
    public static readonly RULE_kU_RenameTable = 41;
    public static readonly RULE_kU_RenameProperty = 42;
    public static readonly RULE_kU_ColumnDefinitions = 43;
    public static readonly RULE_kU_ColumnDefinition = 44;
    public static readonly RULE_kU_PropertyDefinitions = 45;
    public static readonly RULE_kU_PropertyDefinition = 46;
    public static readonly RULE_kU_CreateNodeConstraint = 47;
    public static readonly RULE_kU_DataType = 48;
    public static readonly RULE_kU_ListIdentifiers = 49;
    public static readonly RULE_kU_ListIdentifier = 50;
    public static readonly RULE_oC_AnyCypherOption = 51;
    public static readonly RULE_oC_Explain = 52;
    public static readonly RULE_oC_Profile = 53;
    public static readonly RULE_kU_Transaction = 54;
    public static readonly RULE_kU_Extension = 55;
    public static readonly RULE_kU_LoadExtension = 56;
    public static readonly RULE_kU_InstallExtension = 57;
    public static readonly RULE_oC_Query = 58;
    public static readonly RULE_oC_RegularQuery = 59;
    public static readonly RULE_oC_Union = 60;
    public static readonly RULE_oC_SingleQuery = 61;
    public static readonly RULE_oC_SinglePartQuery = 62;
    public static readonly RULE_oC_MultiPartQuery = 63;
    public static readonly RULE_kU_QueryPart = 64;
    public static readonly RULE_oC_UpdatingClause = 65;
    public static readonly RULE_oC_ReadingClause = 66;
    public static readonly RULE_kU_LoadFrom = 67;
    public static readonly RULE_oC_YieldItem = 68;
    public static readonly RULE_oC_YieldItems = 69;
    public static readonly RULE_kU_InQueryCall = 70;
    public static readonly RULE_oC_Match = 71;
    public static readonly RULE_kU_Hint = 72;
    public static readonly RULE_kU_JoinNode = 73;
    public static readonly RULE_oC_Unwind = 74;
    public static readonly RULE_oC_Create = 75;
    public static readonly RULE_oC_Merge = 76;
    public static readonly RULE_oC_MergeAction = 77;
    public static readonly RULE_oC_Set = 78;
    public static readonly RULE_oC_SetItem = 79;
    public static readonly RULE_oC_Delete = 80;
    public static readonly RULE_oC_With = 81;
    public static readonly RULE_oC_Return = 82;
    public static readonly RULE_oC_ProjectionBody = 83;
    public static readonly RULE_oC_ProjectionItems = 84;
    public static readonly RULE_oC_ProjectionItem = 85;
    public static readonly RULE_oC_Order = 86;
    public static readonly RULE_oC_Skip = 87;
    public static readonly RULE_oC_Limit = 88;
    public static readonly RULE_oC_SortItem = 89;
    public static readonly RULE_oC_Where = 90;
    public static readonly RULE_oC_Pattern = 91;
    public static readonly RULE_oC_PatternPart = 92;
    public static readonly RULE_oC_AnonymousPatternPart = 93;
    public static readonly RULE_oC_PatternElement = 94;
    public static readonly RULE_oC_NodePattern = 95;
    public static readonly RULE_oC_PatternElementChain = 96;
    public static readonly RULE_oC_RelationshipPattern = 97;
    public static readonly RULE_oC_RelationshipDetail = 98;
    public static readonly RULE_kU_Properties = 99;
    public static readonly RULE_oC_RelationshipTypes = 100;
    public static readonly RULE_oC_NodeLabels = 101;
    public static readonly RULE_oC_NodeLabel = 102;
    public static readonly RULE_kU_RecursiveDetail = 103;
    public static readonly RULE_kU_RecursiveType = 104;
    public static readonly RULE_oC_RangeLiteral = 105;
    public static readonly RULE_kU_RecursiveComprehension = 106;
    public static readonly RULE_kU_RecursiveProjectionItems = 107;
    public static readonly RULE_oC_LowerBound = 108;
    public static readonly RULE_oC_UpperBound = 109;
    public static readonly RULE_oC_LabelName = 110;
    public static readonly RULE_oC_RelTypeName = 111;
    public static readonly RULE_oC_Expression = 112;
    public static readonly RULE_oC_OrExpression = 113;
    public static readonly RULE_oC_XorExpression = 114;
    public static readonly RULE_oC_AndExpression = 115;
    public static readonly RULE_oC_NotExpression = 116;
    public static readonly RULE_oC_ComparisonExpression = 117;
    public static readonly RULE_kU_ComparisonOperator = 118;
    public static readonly RULE_kU_BitwiseOrOperatorExpression = 119;
    public static readonly RULE_kU_BitwiseAndOperatorExpression = 120;
    public static readonly RULE_kU_BitShiftOperatorExpression = 121;
    public static readonly RULE_kU_BitShiftOperator = 122;
    public static readonly RULE_oC_AddOrSubtractExpression = 123;
    public static readonly RULE_kU_AddOrSubtractOperator = 124;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 125;
    public static readonly RULE_kU_MultiplyDivideModuloOperator = 126;
    public static readonly RULE_oC_PowerOfExpression = 127;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 128;
    public static readonly RULE_oC_StringListNullOperatorExpression = 129;
    public static readonly RULE_oC_ListOperatorExpression = 130;
    public static readonly RULE_oC_StringOperatorExpression = 131;
    public static readonly RULE_oC_RegularExpression = 132;
    public static readonly RULE_oC_NullOperatorExpression = 133;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 134;
    public static readonly RULE_oC_Atom = 135;
    public static readonly RULE_oC_Quantifier = 136;
    public static readonly RULE_oC_FilterExpression = 137;
    public static readonly RULE_oC_IdInColl = 138;
    public static readonly RULE_oC_Literal = 139;
    public static readonly RULE_oC_BooleanLiteral = 140;
    public static readonly RULE_oC_ListLiteral = 141;
    public static readonly RULE_kU_ListEntry = 142;
    public static readonly RULE_kU_StructLiteral = 143;
    public static readonly RULE_kU_StructField = 144;
    public static readonly RULE_oC_ParenthesizedExpression = 145;
    public static readonly RULE_oC_FunctionInvocation = 146;
    public static readonly RULE_oC_FunctionName = 147;
    public static readonly RULE_kU_FunctionParameter = 148;
    public static readonly RULE_kU_LambdaParameter = 149;
    public static readonly RULE_kU_LambdaVars = 150;
    public static readonly RULE_oC_PathPatterns = 151;
    public static readonly RULE_oC_ExistCountSubquery = 152;
    public static readonly RULE_oC_PropertyLookup = 153;
    public static readonly RULE_oC_CaseExpression = 154;
    public static readonly RULE_oC_CaseAlternative = 155;
    public static readonly RULE_oC_Variable = 156;
    public static readonly RULE_oC_NumberLiteral = 157;
    public static readonly RULE_oC_Parameter = 158;
    public static readonly RULE_oC_PropertyExpression = 159;
    public static readonly RULE_oC_PropertyKeyName = 160;
    public static readonly RULE_oC_IntegerLiteral = 161;
    public static readonly RULE_oC_DoubleLiteral = 162;
    public static readonly RULE_oC_SchemaName = 163;
    public static readonly RULE_oC_SymbolicName = 164;
    public static readonly RULE_kU_NonReservedKeywords = 165;
    public static readonly RULE_oC_LeftArrowHead = 166;
    public static readonly RULE_oC_RightArrowHead = 167;
    public static readonly RULE_oC_Dash = 168;

    public static readonly literalNames = [
        null, "';'", "'('", "')'", "','", "'.'", "'='", "'['", "']'", "'{'", 
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
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, "'*'", null, "'!='", "'-'", "'!'", "':'", 
        null, null, null, null, null, null, null, null, "'0'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "ACYCLIC", "ANY", "ADD", "ALL", "ALTER", "AND", "AS", 
        "ASC", "ASCENDING", "ATTACH", "BEGIN", "BY", "CALL", "CASE", "CAST", 
        "CHECKPOINT", "COLUMN", "COMMENT", "COMMIT", "COMMIT_SKIP_CHECKPOINT", 
        "CONTAINS", "COPY", "COUNT", "CREATE", "CYCLE", "DATABASE", "DBTYPE", 
        "DEFAULT", "DELETE", "DESC", "DESCENDING", "DETACH", "DISTINCT", 
        "DROP", "ELSE", "END", "ENDS", "EXISTS", "EXPLAIN", "EXPORT", "EXTENSION", 
        "FALSE", "FROM", "GLOB", "GRAPH", "GROUP", "HEADERS", "HINT", "IMPORT", 
        "IF", "IN", "INCREMENT", "INSTALL", "IS", "JOIN", "KEY", "LIMIT", 
        "LOAD", "LOGICAL", "MACRO", "MATCH", "MAXVALUE", "MERGE", "MINVALUE", 
        "MULTI_JOIN", "NO", "NODE", "NOT", "NONE", "NULL", "ON", "ONLY", 
        "OPTIONAL", "OR", "ORDER", "PRIMARY", "PROFILE", "PROJECT", "READ", 
        "REL", "RENAME", "RETURN", "ROLLBACK", "ROLLBACK_SKIP_CHECKPOINT", 
        "SEQUENCE", "SET", "SHORTEST", "START", "STARTS", "TABLE", "THEN", 
        "TO", "TRAIL", "TRANSACTION", "TRUE", "TYPE", "UNION", "UNWIND", 
        "USE", "WHEN", "WHERE", "WITH", "WRITE", "WSHORTEST", "XOR", "SINGLE", 
        "YIELD", "DECIMAL", "STAR", "L_SKIP", "INVALID_NOT_EQUAL", "MINUS", 
        "FACTORIAL", "COLON", "StringLiteral", "EscapedChar", "DecimalInteger", 
        "HexLetter", "HexDigit", "Digit", "NonZeroDigit", "NonZeroOctDigit", 
        "ZeroDigit", "ExponentDecimalReal", "RegularDecimalReal", "UnescapedSymbolicName", 
        "IdentifierStart", "IdentifierPart", "EscapedSymbolicName", "SP", 
        "WHITESPACE", "CypherComment", "Unknown"
    ];
    public static readonly ruleNames = [
        "ku_Statements", "oC_Cypher", "oC_Statement", "kU_CopyFrom", "kU_ColumnNames", 
        "kU_ScanSource", "kU_CopyFromByColumn", "kU_CopyTO", "kU_ExportDatabase", 
        "kU_ImportDatabase", "kU_AttachDatabase", "kU_Option", "kU_Options", 
        "kU_DetachDatabase", "kU_UseDatabase", "kU_StandaloneCall", "kU_CommentOn", 
        "kU_CreateMacro", "kU_PositionalArgs", "kU_DefaultArg", "kU_FilePaths", 
        "kU_IfNotExists", "kU_CreateNodeTable", "kU_CreateRelTable", "kU_FromToConnections", 
        "kU_FromToConnection", "kU_CreateSequence", "kU_CreateType", "kU_SequenceOptions", 
        "kU_IncrementBy", "kU_MinValue", "kU_MaxValue", "kU_StartWith", 
        "kU_Cycle", "kU_IfExists", "kU_Drop", "kU_AlterTable", "kU_AlterOptions", 
        "kU_AddProperty", "kU_Default", "kU_DropProperty", "kU_RenameTable", 
        "kU_RenameProperty", "kU_ColumnDefinitions", "kU_ColumnDefinition", 
        "kU_PropertyDefinitions", "kU_PropertyDefinition", "kU_CreateNodeConstraint", 
        "kU_DataType", "kU_ListIdentifiers", "kU_ListIdentifier", "oC_AnyCypherOption", 
        "oC_Explain", "oC_Profile", "kU_Transaction", "kU_Extension", "kU_LoadExtension", 
        "kU_InstallExtension", "oC_Query", "oC_RegularQuery", "oC_Union", 
        "oC_SingleQuery", "oC_SinglePartQuery", "oC_MultiPartQuery", "kU_QueryPart", 
        "oC_UpdatingClause", "oC_ReadingClause", "kU_LoadFrom", "oC_YieldItem", 
        "oC_YieldItems", "kU_InQueryCall", "oC_Match", "kU_Hint", "kU_JoinNode", 
        "oC_Unwind", "oC_Create", "oC_Merge", "oC_MergeAction", "oC_Set", 
        "oC_SetItem", "oC_Delete", "oC_With", "oC_Return", "oC_ProjectionBody", 
        "oC_ProjectionItems", "oC_ProjectionItem", "oC_Order", "oC_Skip", 
        "oC_Limit", "oC_SortItem", "oC_Where", "oC_Pattern", "oC_PatternPart", 
        "oC_AnonymousPatternPart", "oC_PatternElement", "oC_NodePattern", 
        "oC_PatternElementChain", "oC_RelationshipPattern", "oC_RelationshipDetail", 
        "kU_Properties", "oC_RelationshipTypes", "oC_NodeLabels", "oC_NodeLabel", 
        "kU_RecursiveDetail", "kU_RecursiveType", "oC_RangeLiteral", "kU_RecursiveComprehension", 
        "kU_RecursiveProjectionItems", "oC_LowerBound", "oC_UpperBound", 
        "oC_LabelName", "oC_RelTypeName", "oC_Expression", "oC_OrExpression", 
        "oC_XorExpression", "oC_AndExpression", "oC_NotExpression", "oC_ComparisonExpression", 
        "kU_ComparisonOperator", "kU_BitwiseOrOperatorExpression", "kU_BitwiseAndOperatorExpression", 
        "kU_BitShiftOperatorExpression", "kU_BitShiftOperator", "oC_AddOrSubtractExpression", 
        "kU_AddOrSubtractOperator", "oC_MultiplyDivideModuloExpression", 
        "kU_MultiplyDivideModuloOperator", "oC_PowerOfExpression", "oC_UnaryAddSubtractOrFactorialExpression", 
        "oC_StringListNullOperatorExpression", "oC_ListOperatorExpression", 
        "oC_StringOperatorExpression", "oC_RegularExpression", "oC_NullOperatorExpression", 
        "oC_PropertyOrLabelsExpression", "oC_Atom", "oC_Quantifier", "oC_FilterExpression", 
        "oC_IdInColl", "oC_Literal", "oC_BooleanLiteral", "oC_ListLiteral", 
        "kU_ListEntry", "kU_StructLiteral", "kU_StructField", "oC_ParenthesizedExpression", 
        "oC_FunctionInvocation", "oC_FunctionName", "kU_FunctionParameter", 
        "kU_LambdaParameter", "kU_LambdaVars", "oC_PathPatterns", "oC_ExistCountSubquery", 
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
            this.state = 338;
            this.oC_Cypher();
            this.state = 349;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 340;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 339;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 342;
                    this.match(CypherParser.T__0);
                    this.state = 344;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                    case 1:
                        {
                        this.state = 343;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    this.state = 346;
                    this.oC_Cypher();
                    }
                    }
                }
                this.state = 351;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            }
            this.state = 353;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 352;
                this.match(CypherParser.SP);
                }
            }

            this.state = 355;
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
            this.state = 358;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===84 || _la===122) {
                {
                this.state = 357;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 361;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 360;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 363;
            this.oC_Statement();
            }
            this.state = 368;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
            case 1:
                {
                this.state = 365;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 364;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 367;
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
            this.state = 390;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 370;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 371;
                this.kU_CreateNodeTable();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 372;
                this.kU_CreateRelTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 373;
                this.kU_CreateSequence();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 374;
                this.kU_CreateType();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 375;
                this.kU_Drop();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 376;
                this.kU_AlterTable();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 377;
                this.kU_CopyFrom();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 378;
                this.kU_CopyFromByColumn();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 379;
                this.kU_CopyTO();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 380;
                this.kU_StandaloneCall();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 381;
                this.kU_CreateMacro();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 382;
                this.kU_CommentOn();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 383;
                this.kU_Transaction();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 384;
                this.kU_Extension();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 385;
                this.kU_ExportDatabase();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 386;
                this.kU_ImportDatabase();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 387;
                this.kU_AttachDatabase();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 388;
                this.kU_DetachDatabase();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 389;
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
            this.state = 392;
            this.match(CypherParser.COPY);
            this.state = 393;
            this.match(CypherParser.SP);
            this.state = 394;
            this.oC_SchemaName();
            this.state = 403;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                {
                {
                this.state = 396;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 395;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 398;
                this.kU_ColumnNames();
                this.state = 400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 399;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                break;
            case 2:
                {
                this.state = 402;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 405;
            this.match(CypherParser.FROM);
            this.state = 406;
            this.match(CypherParser.SP);
            this.state = 407;
            this.kU_ScanSource();
            this.state = 421;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
            case 1:
                {
                this.state = 409;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 408;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 411;
                this.match(CypherParser.T__1);
                this.state = 413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 412;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 415;
                this.kU_Options();
                this.state = 417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 416;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 419;
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
            this.state = 423;
            this.match(CypherParser.T__1);
            this.state = 425;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 424;
                this.match(CypherParser.SP);
                }
            }

            this.state = 427;
            this.oC_SchemaName();
            this.state = 438;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 429;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 428;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 431;
                    this.match(CypherParser.T__3);
                    this.state = 433;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 432;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 435;
                    this.oC_SchemaName();
                    }
                    }
                }
                this.state = 440;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
            }
            this.state = 442;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 441;
                this.match(CypherParser.SP);
                }
            }

            this.state = 444;
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
    public kU_ScanSource(): KU_ScanSourceContext {
        let localctx: KU_ScanSourceContext = new KU_ScanSourceContext(this._ctx, this.state);
        this.enterRule(localctx, 10, CypherParser.RULE_kU_ScanSource);
        let _la: number;
        try {
            this.state = 466;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 446;
                this.kU_FilePaths();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 447;
                this.match(CypherParser.T__1);
                this.state = 449;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 448;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 451;
                this.oC_Query();
                this.state = 453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 452;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 455;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 457;
                this.oC_Variable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 458;
                this.oC_Variable();
                this.state = 459;
                this.match(CypherParser.T__4);
                this.state = 461;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 460;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 463;
                this.oC_SchemaName();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 465;
                this.oC_FunctionInvocation();
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
            this.state = 468;
            this.match(CypherParser.COPY);
            this.state = 469;
            this.match(CypherParser.SP);
            this.state = 470;
            this.oC_SchemaName();
            this.state = 471;
            this.match(CypherParser.SP);
            this.state = 472;
            this.match(CypherParser.FROM);
            this.state = 473;
            this.match(CypherParser.SP);
            this.state = 474;
            this.match(CypherParser.T__1);
            this.state = 476;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 475;
                this.match(CypherParser.SP);
                }
            }

            this.state = 478;
            this.match(CypherParser.StringLiteral);
            this.state = 489;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4 || _la===175) {
                {
                {
                this.state = 480;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
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
                if (_la===175) {
                    {
                    this.state = 483;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 486;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 491;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 492;
            this.match(CypherParser.T__2);
            this.state = 493;
            this.match(CypherParser.SP);
            this.state = 494;
            this.match(CypherParser.BY);
            this.state = 495;
            this.match(CypherParser.SP);
            this.state = 496;
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
            this.state = 498;
            this.match(CypherParser.COPY);
            this.state = 499;
            this.match(CypherParser.SP);
            this.state = 500;
            this.match(CypherParser.T__1);
            this.state = 502;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 501;
                this.match(CypherParser.SP);
                }
            }

            this.state = 504;
            this.oC_Query();
            this.state = 506;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 505;
                this.match(CypherParser.SP);
                }
            }

            this.state = 508;
            this.match(CypherParser.T__2);
            this.state = 509;
            this.match(CypherParser.SP);
            this.state = 510;
            this.match(CypherParser.TO);
            this.state = 511;
            this.match(CypherParser.SP);
            this.state = 512;
            this.match(CypherParser.StringLiteral);
            this.state = 526;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
            case 1:
                {
                this.state = 514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 513;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 516;
                this.match(CypherParser.T__1);
                this.state = 518;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 517;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 520;
                this.kU_Options();
                this.state = 522;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 521;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 524;
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
        this.enterRule(localctx, 16, CypherParser.RULE_kU_ExportDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 528;
            this.match(CypherParser.EXPORT);
            this.state = 529;
            this.match(CypherParser.SP);
            this.state = 530;
            this.match(CypherParser.DATABASE);
            this.state = 531;
            this.match(CypherParser.SP);
            this.state = 532;
            this.match(CypherParser.StringLiteral);
            this.state = 546;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
            case 1:
                {
                this.state = 534;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 533;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 536;
                this.match(CypherParser.T__1);
                this.state = 538;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 537;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 540;
                this.kU_Options();
                this.state = 542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 541;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 544;
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
    public kU_ImportDatabase(): KU_ImportDatabaseContext {
        let localctx: KU_ImportDatabaseContext = new KU_ImportDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 18, CypherParser.RULE_kU_ImportDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 548;
            this.match(CypherParser.IMPORT);
            this.state = 549;
            this.match(CypherParser.SP);
            this.state = 550;
            this.match(CypherParser.DATABASE);
            this.state = 551;
            this.match(CypherParser.SP);
            this.state = 552;
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
            this.state = 554;
            this.match(CypherParser.ATTACH);
            this.state = 555;
            this.match(CypherParser.SP);
            this.state = 556;
            this.match(CypherParser.StringLiteral);
            this.state = 561;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
            case 1:
                {
                this.state = 557;
                this.match(CypherParser.SP);
                this.state = 558;
                this.match(CypherParser.AS);
                this.state = 559;
                this.match(CypherParser.SP);
                this.state = 560;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 563;
            this.match(CypherParser.SP);
            this.state = 564;
            this.match(CypherParser.T__1);
            this.state = 566;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 565;
                this.match(CypherParser.SP);
                }
            }

            this.state = 568;
            this.match(CypherParser.DBTYPE);
            this.state = 569;
            this.match(CypherParser.SP);
            this.state = 570;
            this.oC_SymbolicName();
            this.state = 579;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
            case 1:
                {
                this.state = 572;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 571;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 574;
                this.match(CypherParser.T__3);
                this.state = 576;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 575;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 578;
                this.kU_Options();
                }
                break;
            }
            this.state = 582;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 581;
                this.match(CypherParser.SP);
                }
            }

            this.state = 584;
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
    public kU_Option(): KU_OptionContext {
        let localctx: KU_OptionContext = new KU_OptionContext(this._ctx, this.state);
        this.enterRule(localctx, 22, CypherParser.RULE_kU_Option);
        let _la: number;
        try {
            this.state = 605;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 586;
                this.oC_SymbolicName();
                this.state = 600;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
                case 1:
                    {
                    this.state = 588;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 587;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 590;
                    this.match(CypherParser.T__5);
                    this.state = 592;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 591;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                case 2:
                    {
                    this.state = 597;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===175) {
                        {
                        {
                        this.state = 594;
                        this.match(CypherParser.SP);
                        }
                        }
                        this.state = 599;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                    break;
                }
                this.state = 602;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 604;
                this.oC_SymbolicName();
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
    public kU_Options(): KU_OptionsContext {
        let localctx: KU_OptionsContext = new KU_OptionsContext(this._ctx, this.state);
        this.enterRule(localctx, 24, CypherParser.RULE_kU_Options);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 607;
            this.kU_Option();
            this.state = 618;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 609;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 608;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 611;
                    this.match(CypherParser.T__3);
                    this.state = 613;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 612;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 615;
                    this.kU_Option();
                    }
                    }
                }
                this.state = 620;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
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
            this.state = 621;
            this.match(CypherParser.DETACH);
            this.state = 622;
            this.match(CypherParser.SP);
            this.state = 623;
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
            this.state = 625;
            this.match(CypherParser.USE);
            this.state = 626;
            this.match(CypherParser.SP);
            this.state = 627;
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
            this.state = 644;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 629;
                this.match(CypherParser.CALL);
                this.state = 630;
                this.match(CypherParser.SP);
                this.state = 631;
                this.oC_SymbolicName();
                this.state = 633;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 632;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 635;
                this.match(CypherParser.T__5);
                this.state = 637;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 636;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 639;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 641;
                this.match(CypherParser.CALL);
                this.state = 642;
                this.match(CypherParser.SP);
                this.state = 643;
                this.oC_FunctionInvocation();
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
    public kU_CommentOn(): KU_CommentOnContext {
        let localctx: KU_CommentOnContext = new KU_CommentOnContext(this._ctx, this.state);
        this.enterRule(localctx, 32, CypherParser.RULE_kU_CommentOn);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 646;
            this.match(CypherParser.COMMENT);
            this.state = 647;
            this.match(CypherParser.SP);
            this.state = 648;
            this.match(CypherParser.ON);
            this.state = 649;
            this.match(CypherParser.SP);
            this.state = 650;
            this.match(CypherParser.TABLE);
            this.state = 651;
            this.match(CypherParser.SP);
            this.state = 652;
            this.oC_SchemaName();
            this.state = 653;
            this.match(CypherParser.SP);
            this.state = 654;
            this.match(CypherParser.IS);
            this.state = 655;
            this.match(CypherParser.SP);
            this.state = 656;
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
            this.state = 658;
            this.match(CypherParser.CREATE);
            this.state = 659;
            this.match(CypherParser.SP);
            this.state = 660;
            this.match(CypherParser.MACRO);
            this.state = 661;
            this.match(CypherParser.SP);
            this.state = 662;
            this.oC_FunctionName();
            this.state = 664;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 663;
                this.match(CypherParser.SP);
                }
            }

            this.state = 666;
            this.match(CypherParser.T__1);
            this.state = 668;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
            case 1:
                {
                this.state = 667;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 671;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
            case 1:
                {
                this.state = 670;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 674;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
            case 1:
                {
                this.state = 673;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 677;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577943) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1646609855) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 590081) !== 0)) {
                {
                this.state = 676;
                this.kU_DefaultArg();
                }
            }

            this.state = 689;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 680;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 679;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 682;
                    this.match(CypherParser.T__3);
                    this.state = 684;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 683;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 686;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 691;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
            }
            this.state = 693;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 692;
                this.match(CypherParser.SP);
                }
            }

            this.state = 695;
            this.match(CypherParser.T__2);
            this.state = 696;
            this.match(CypherParser.SP);
            this.state = 697;
            this.match(CypherParser.AS);
            this.state = 698;
            this.match(CypherParser.SP);
            this.state = 699;
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
            this.state = 701;
            this.oC_SymbolicName();
            this.state = 712;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 703;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 702;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 705;
                    this.match(CypherParser.T__3);
                    this.state = 707;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 706;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 709;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 714;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
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
            this.state = 715;
            this.oC_SymbolicName();
            this.state = 717;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 716;
                this.match(CypherParser.SP);
                }
            }

            this.state = 719;
            this.match(CypherParser.COLON);
            this.state = 720;
            this.match(CypherParser.T__5);
            this.state = 722;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 721;
                this.match(CypherParser.SP);
                }
            }

            this.state = 724;
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
            this.state = 759;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 726;
                this.match(CypherParser.T__6);
                this.state = 728;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 727;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 730;
                this.match(CypherParser.StringLiteral);
                this.state = 741;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4 || _la===175) {
                    {
                    {
                    this.state = 732;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 731;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 734;
                    this.match(CypherParser.T__3);
                    this.state = 736;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 735;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 738;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 743;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 744;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 745;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 746;
                this.match(CypherParser.GLOB);
                this.state = 748;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 747;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 750;
                this.match(CypherParser.T__1);
                this.state = 752;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 751;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 754;
                this.match(CypherParser.StringLiteral);
                this.state = 756;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 755;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 758;
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
    public kU_IfNotExists(): KU_IfNotExistsContext {
        let localctx: KU_IfNotExistsContext = new KU_IfNotExistsContext(this._ctx, this.state);
        this.enterRule(localctx, 42, CypherParser.RULE_kU_IfNotExists);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 761;
            this.match(CypherParser.IF);
            this.state = 762;
            this.match(CypherParser.SP);
            this.state = 763;
            this.match(CypherParser.NOT);
            this.state = 764;
            this.match(CypherParser.SP);
            this.state = 765;
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
        this.enterRule(localctx, 44, CypherParser.RULE_kU_CreateNodeTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 767;
            this.match(CypherParser.CREATE);
            this.state = 768;
            this.match(CypherParser.SP);
            this.state = 769;
            this.match(CypherParser.NODE);
            this.state = 770;
            this.match(CypherParser.SP);
            this.state = 771;
            this.match(CypherParser.TABLE);
            this.state = 772;
            this.match(CypherParser.SP);
            this.state = 776;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
            case 1:
                {
                this.state = 773;
                this.kU_IfNotExists();
                this.state = 774;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 778;
            this.oC_SchemaName();
            this.state = 780;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 779;
                this.match(CypherParser.SP);
                }
            }

            this.state = 782;
            this.match(CypherParser.T__1);
            this.state = 784;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 783;
                this.match(CypherParser.SP);
                }
            }

            this.state = 786;
            this.kU_PropertyDefinitions();
            this.state = 788;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
            case 1:
                {
                this.state = 787;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 795;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===4) {
                {
                this.state = 790;
                this.match(CypherParser.T__3);
                this.state = 792;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 791;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 794;
                this.kU_CreateNodeConstraint();
                }
            }

            this.state = 798;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 797;
                this.match(CypherParser.SP);
                }
            }

            this.state = 800;
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
        this.enterRule(localctx, 46, CypherParser.RULE_kU_CreateRelTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 802;
            this.match(CypherParser.CREATE);
            this.state = 803;
            this.match(CypherParser.SP);
            this.state = 804;
            this.match(CypherParser.REL);
            this.state = 805;
            this.match(CypherParser.SP);
            this.state = 806;
            this.match(CypherParser.TABLE);
            this.state = 809;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
            case 1:
                {
                this.state = 807;
                this.match(CypherParser.SP);
                this.state = 808;
                this.match(CypherParser.GROUP);
                }
                break;
            }
            this.state = 813;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
            case 1:
                {
                this.state = 811;
                this.match(CypherParser.SP);
                this.state = 812;
                this.kU_IfNotExists();
                }
                break;
            }
            this.state = 815;
            this.match(CypherParser.SP);
            this.state = 816;
            this.oC_SchemaName();
            this.state = 818;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 817;
                this.match(CypherParser.SP);
                }
            }

            this.state = 820;
            this.match(CypherParser.T__1);
            this.state = 822;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 821;
                this.match(CypherParser.SP);
                }
            }

            this.state = 824;
            this.kU_FromToConnections();
            this.state = 826;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 825;
                this.match(CypherParser.SP);
                }
            }

            this.state = 836;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
            case 1:
                {
                this.state = 828;
                this.match(CypherParser.T__3);
                this.state = 830;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
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
                if (_la===175) {
                    {
                    this.state = 833;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 846;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===4) {
                {
                this.state = 838;
                this.match(CypherParser.T__3);
                this.state = 840;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 839;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 842;
                this.oC_SymbolicName();
                this.state = 844;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 843;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 848;
            this.match(CypherParser.T__2);
            this.state = 864;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
            case 1:
                {
                this.state = 849;
                this.match(CypherParser.SP);
                this.state = 850;
                this.match(CypherParser.WITH);
                this.state = 852;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
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
                if (_la===175) {
                    {
                    this.state = 855;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 858;
                this.kU_Options();
                this.state = 860;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 859;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 862;
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
    public kU_FromToConnections(): KU_FromToConnectionsContext {
        let localctx: KU_FromToConnectionsContext = new KU_FromToConnectionsContext(this._ctx, this.state);
        this.enterRule(localctx, 48, CypherParser.RULE_kU_FromToConnections);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 866;
            this.kU_FromToConnection();
            this.state = 877;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 102, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 868;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 867;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 870;
                    this.match(CypherParser.T__3);
                    this.state = 872;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 871;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 874;
                    this.kU_FromToConnection();
                    }
                    }
                }
                this.state = 879;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 102, this._ctx);
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
    public kU_FromToConnection(): KU_FromToConnectionContext {
        let localctx: KU_FromToConnectionContext = new KU_FromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 50, CypherParser.RULE_kU_FromToConnection);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 880;
            this.match(CypherParser.FROM);
            this.state = 881;
            this.match(CypherParser.SP);
            this.state = 882;
            this.oC_SchemaName();
            this.state = 883;
            this.match(CypherParser.SP);
            this.state = 884;
            this.match(CypherParser.TO);
            this.state = 885;
            this.match(CypherParser.SP);
            this.state = 886;
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
        this.enterRule(localctx, 52, CypherParser.RULE_kU_CreateSequence);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 888;
            this.match(CypherParser.CREATE);
            this.state = 889;
            this.match(CypherParser.SP);
            this.state = 890;
            this.match(CypherParser.SEQUENCE);
            this.state = 891;
            this.match(CypherParser.SP);
            this.state = 895;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
            case 1:
                {
                this.state = 892;
                this.kU_IfNotExists();
                this.state = 893;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 897;
            this.oC_SchemaName();
            this.state = 902;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 104, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 898;
                    this.match(CypherParser.SP);
                    this.state = 899;
                    this.kU_SequenceOptions();
                    }
                    }
                }
                this.state = 904;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 104, this._ctx);
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
        this.enterRule(localctx, 54, CypherParser.RULE_kU_CreateType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 905;
            this.match(CypherParser.CREATE);
            this.state = 906;
            this.match(CypherParser.SP);
            this.state = 907;
            this.match(CypherParser.TYPE);
            this.state = 908;
            this.match(CypherParser.SP);
            this.state = 909;
            this.oC_SchemaName();
            this.state = 910;
            this.match(CypherParser.SP);
            this.state = 911;
            this.match(CypherParser.AS);
            this.state = 912;
            this.match(CypherParser.SP);
            this.state = 913;
            this.kU_DataType(0);
            this.state = 915;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
            case 1:
                {
                this.state = 914;
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
        this.enterRule(localctx, 56, CypherParser.RULE_kU_SequenceOptions);
        try {
            this.state = 922;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 917;
                this.kU_IncrementBy();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 918;
                this.kU_MinValue();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 919;
                this.kU_MaxValue();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 920;
                this.kU_StartWith();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 921;
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
        this.enterRule(localctx, 58, CypherParser.RULE_kU_IncrementBy);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 924;
            this.match(CypherParser.INCREMENT);
            this.state = 925;
            this.match(CypherParser.SP);
            this.state = 928;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===57) {
                {
                this.state = 926;
                this.match(CypherParser.BY);
                this.state = 927;
                this.match(CypherParser.SP);
                }
            }

            this.state = 931;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===157) {
                {
                this.state = 930;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 933;
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
        this.enterRule(localctx, 60, CypherParser.RULE_kU_MinValue);
        let _la: number;
        try {
            this.state = 944;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 935;
                this.match(CypherParser.NO);
                this.state = 936;
                this.match(CypherParser.SP);
                this.state = 937;
                this.match(CypherParser.MINVALUE);
                }
                }
                break;
            case CypherParser.MINVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 938;
                this.match(CypherParser.MINVALUE);
                this.state = 939;
                this.match(CypherParser.SP);
                this.state = 941;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===157) {
                    {
                    this.state = 940;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 943;
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
        this.enterRule(localctx, 62, CypherParser.RULE_kU_MaxValue);
        let _la: number;
        try {
            this.state = 955;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 946;
                this.match(CypherParser.NO);
                this.state = 947;
                this.match(CypherParser.SP);
                this.state = 948;
                this.match(CypherParser.MAXVALUE);
                }
                }
                break;
            case CypherParser.MAXVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 949;
                this.match(CypherParser.MAXVALUE);
                this.state = 950;
                this.match(CypherParser.SP);
                this.state = 952;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===157) {
                    {
                    this.state = 951;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 954;
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
        this.enterRule(localctx, 64, CypherParser.RULE_kU_StartWith);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 957;
            this.match(CypherParser.START);
            this.state = 958;
            this.match(CypherParser.SP);
            this.state = 961;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===147) {
                {
                this.state = 959;
                this.match(CypherParser.WITH);
                this.state = 960;
                this.match(CypherParser.SP);
                }
            }

            this.state = 964;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===157) {
                {
                this.state = 963;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 966;
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
        this.enterRule(localctx, 66, CypherParser.RULE_kU_Cycle);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 970;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===111) {
                {
                this.state = 968;
                this.match(CypherParser.NO);
                this.state = 969;
                this.match(CypherParser.SP);
                }
            }

            this.state = 972;
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
    public kU_IfExists(): KU_IfExistsContext {
        let localctx: KU_IfExistsContext = new KU_IfExistsContext(this._ctx, this.state);
        this.enterRule(localctx, 68, CypherParser.RULE_kU_IfExists);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 974;
            this.match(CypherParser.IF);
            this.state = 975;
            this.match(CypherParser.SP);
            this.state = 976;
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
    public kU_Drop(): KU_DropContext {
        let localctx: KU_DropContext = new KU_DropContext(this._ctx, this.state);
        this.enterRule(localctx, 70, CypherParser.RULE_kU_Drop);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 978;
            this.match(CypherParser.DROP);
            this.state = 979;
            this.match(CypherParser.SP);
            this.state = 980;
            _la = this._input.LA(1);
            if(!(_la===130 || _la===135)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 981;
            this.match(CypherParser.SP);
            this.state = 985;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
            case 1:
                {
                this.state = 982;
                this.kU_IfExists();
                this.state = 983;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 987;
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
        this.enterRule(localctx, 72, CypherParser.RULE_kU_AlterTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 989;
            this.match(CypherParser.ALTER);
            this.state = 990;
            this.match(CypherParser.SP);
            this.state = 991;
            this.match(CypherParser.TABLE);
            this.state = 992;
            this.match(CypherParser.SP);
            this.state = 993;
            this.oC_SchemaName();
            this.state = 994;
            this.match(CypherParser.SP);
            this.state = 995;
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
        this.enterRule(localctx, 74, CypherParser.RULE_kU_AlterOptions);
        try {
            this.state = 1001;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 997;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 998;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 999;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1000;
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
        this.enterRule(localctx, 76, CypherParser.RULE_kU_AddProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1003;
            this.match(CypherParser.ADD);
            this.state = 1004;
            this.match(CypherParser.SP);
            this.state = 1008;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
            case 1:
                {
                this.state = 1005;
                this.kU_IfNotExists();
                this.state = 1006;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1010;
            this.oC_PropertyKeyName();
            this.state = 1011;
            this.match(CypherParser.SP);
            this.state = 1012;
            this.kU_DataType(0);
            this.state = 1015;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
            case 1:
                {
                this.state = 1013;
                this.match(CypherParser.SP);
                this.state = 1014;
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
        this.enterRule(localctx, 78, CypherParser.RULE_kU_Default);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1017;
            this.match(CypherParser.DEFAULT);
            this.state = 1018;
            this.match(CypherParser.SP);
            this.state = 1019;
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
        this.enterRule(localctx, 80, CypherParser.RULE_kU_DropProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1021;
            this.match(CypherParser.DROP);
            this.state = 1022;
            this.match(CypherParser.SP);
            this.state = 1026;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
            case 1:
                {
                this.state = 1023;
                this.kU_IfExists();
                this.state = 1024;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1028;
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
        this.enterRule(localctx, 82, CypherParser.RULE_kU_RenameTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1030;
            this.match(CypherParser.RENAME);
            this.state = 1031;
            this.match(CypherParser.SP);
            this.state = 1032;
            this.match(CypherParser.TO);
            this.state = 1033;
            this.match(CypherParser.SP);
            this.state = 1034;
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
        this.enterRule(localctx, 84, CypherParser.RULE_kU_RenameProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1036;
            this.match(CypherParser.RENAME);
            this.state = 1037;
            this.match(CypherParser.SP);
            this.state = 1038;
            this.oC_PropertyKeyName();
            this.state = 1039;
            this.match(CypherParser.SP);
            this.state = 1040;
            this.match(CypherParser.TO);
            this.state = 1041;
            this.match(CypherParser.SP);
            this.state = 1042;
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
    public kU_ColumnDefinitions(): KU_ColumnDefinitionsContext {
        let localctx: KU_ColumnDefinitionsContext = new KU_ColumnDefinitionsContext(this._ctx, this.state);
        this.enterRule(localctx, 86, CypherParser.RULE_kU_ColumnDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1044;
            this.kU_ColumnDefinition();
            this.state = 1055;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1046;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1045;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1048;
                    this.match(CypherParser.T__3);
                    this.state = 1050;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1049;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1052;
                    this.kU_ColumnDefinition();
                    }
                    }
                }
                this.state = 1057;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
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
    public kU_ColumnDefinition(): KU_ColumnDefinitionContext {
        let localctx: KU_ColumnDefinitionContext = new KU_ColumnDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 88, CypherParser.RULE_kU_ColumnDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1058;
            this.oC_PropertyKeyName();
            this.state = 1059;
            this.match(CypherParser.SP);
            this.state = 1060;
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
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        let localctx: KU_PropertyDefinitionsContext = new KU_PropertyDefinitionsContext(this._ctx, this.state);
        this.enterRule(localctx, 90, CypherParser.RULE_kU_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1062;
            this.kU_PropertyDefinition();
            this.state = 1073;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1064;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1063;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1066;
                    this.match(CypherParser.T__3);
                    this.state = 1068;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1067;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1070;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 1075;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
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
        this.enterRule(localctx, 92, CypherParser.RULE_kU_PropertyDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1076;
            this.kU_ColumnDefinition();
            this.state = 1079;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
            case 1:
                {
                this.state = 1077;
                this.match(CypherParser.SP);
                this.state = 1078;
                this.kU_Default();
                }
                break;
            }
            this.state = 1085;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
            case 1:
                {
                this.state = 1081;
                this.match(CypherParser.SP);
                this.state = 1082;
                this.match(CypherParser.PRIMARY);
                this.state = 1083;
                this.match(CypherParser.SP);
                this.state = 1084;
                this.match(CypherParser.KEY);
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
        this.enterRule(localctx, 94, CypherParser.RULE_kU_CreateNodeConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1087;
            this.match(CypherParser.PRIMARY);
            this.state = 1088;
            this.match(CypherParser.SP);
            this.state = 1089;
            this.match(CypherParser.KEY);
            this.state = 1091;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1090;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1093;
            this.match(CypherParser.T__1);
            this.state = 1095;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1094;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1097;
            this.oC_PropertyKeyName();
            this.state = 1099;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1098;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1101;
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
        let _startState = 96;
        this.enterRecursionRule(localctx, 96, CypherParser.RULE_kU_DataType, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1177;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
            case 1:
                {
                this.state = 1104;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 1105;
                this.match(CypherParser.UNION);
                this.state = 1107;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1106;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1109;
                this.match(CypherParser.T__1);
                this.state = 1111;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1110;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1113;
                this.kU_ColumnDefinitions();
                this.state = 1115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1114;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1117;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                {
                this.state = 1119;
                this.oC_SymbolicName();
                this.state = 1121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1120;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1123;
                this.match(CypherParser.T__1);
                this.state = 1125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1124;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1127;
                this.kU_ColumnDefinitions();
                this.state = 1129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1128;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1131;
                this.match(CypherParser.T__2);
                }
                break;
            case 4:
                {
                this.state = 1133;
                this.oC_SymbolicName();
                this.state = 1135;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1134;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1137;
                this.match(CypherParser.T__1);
                this.state = 1139;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1138;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1141;
                this.kU_DataType(0);
                this.state = 1143;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1142;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1145;
                this.match(CypherParser.T__3);
                this.state = 1147;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1146;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1149;
                this.kU_DataType(0);
                this.state = 1151;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1150;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1153;
                this.match(CypherParser.T__2);
                }
                break;
            case 5:
                {
                this.state = 1155;
                this.match(CypherParser.DECIMAL);
                this.state = 1157;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1156;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1159;
                this.match(CypherParser.T__1);
                this.state = 1161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1160;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1163;
                this.oC_IntegerLiteral();
                this.state = 1165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1164;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1167;
                this.match(CypherParser.T__3);
                this.state = 1169;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1168;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1171;
                this.oC_IntegerLiteral();
                this.state = 1173;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1172;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1175;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1183;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 149, this._ctx);
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
                    this.state = 1179;
                    if (!(this.precpred(this._ctx, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                    }
                    this.state = 1180;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 1185;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 149, this._ctx);
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
        this.enterRule(localctx, 98, CypherParser.RULE_kU_ListIdentifiers);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1186;
            this.kU_ListIdentifier();
            this.state = 1190;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1187;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 1192;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
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
        this.enterRule(localctx, 100, CypherParser.RULE_kU_ListIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1193;
            this.match(CypherParser.T__6);
            this.state = 1195;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===162) {
                {
                this.state = 1194;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 1197;
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
        this.enterRule(localctx, 102, CypherParser.RULE_oC_AnyCypherOption);
        try {
            this.state = 1201;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1199;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1200;
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
        this.enterRule(localctx, 104, CypherParser.RULE_oC_Explain);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1203;
            this.match(CypherParser.EXPLAIN);
            this.state = 1206;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
            case 1:
                {
                this.state = 1204;
                this.match(CypherParser.SP);
                this.state = 1205;
                this.match(CypherParser.LOGICAL);
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
    public oC_Profile(): OC_ProfileContext {
        let localctx: OC_ProfileContext = new OC_ProfileContext(this._ctx, this.state);
        this.enterRule(localctx, 106, CypherParser.RULE_oC_Profile);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1208;
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
        this.enterRule(localctx, 108, CypherParser.RULE_kU_Transaction);
        try {
            this.state = 1223;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1210;
                this.match(CypherParser.BEGIN);
                this.state = 1211;
                this.match(CypherParser.SP);
                this.state = 1212;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1213;
                this.match(CypherParser.BEGIN);
                this.state = 1214;
                this.match(CypherParser.SP);
                this.state = 1215;
                this.match(CypherParser.TRANSACTION);
                this.state = 1216;
                this.match(CypherParser.SP);
                this.state = 1217;
                this.match(CypherParser.READ);
                this.state = 1218;
                this.match(CypherParser.SP);
                this.state = 1219;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1220;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1221;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1222;
                this.match(CypherParser.CHECKPOINT);
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
        this.enterRule(localctx, 110, CypherParser.RULE_kU_Extension);
        try {
            this.state = 1227;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1225;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1226;
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
        this.enterRule(localctx, 112, CypherParser.RULE_kU_LoadExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1229;
            this.match(CypherParser.LOAD);
            this.state = 1230;
            this.match(CypherParser.SP);
            this.state = 1233;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
            case 1:
                {
                this.state = 1231;
                this.match(CypherParser.EXTENSION);
                this.state = 1232;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1237;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 1235;
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
            case CypherParser.CHECKPOINT:
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
            case CypherParser.FROM:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
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
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1236;
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
        this.enterRule(localctx, 114, CypherParser.RULE_kU_InstallExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1239;
            this.match(CypherParser.INSTALL);
            this.state = 1240;
            this.match(CypherParser.SP);
            this.state = 1241;
            this.oC_Variable();
            this.state = 1246;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
            case 1:
                {
                this.state = 1242;
                this.match(CypherParser.SP);
                this.state = 1243;
                this.match(CypherParser.FROM);
                this.state = 1244;
                this.match(CypherParser.SP);
                this.state = 1245;
                this.match(CypherParser.StringLiteral);
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
    public oC_Query(): OC_QueryContext {
        let localctx: OC_QueryContext = new OC_QueryContext(this._ctx, this.state);
        this.enterRule(localctx, 116, CypherParser.RULE_oC_Query);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1248;
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
        this.enterRule(localctx, 118, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1271;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1250;
                this.oC_SingleQuery();
                this.state = 1257;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1252;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1251;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1254;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 1259;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1264;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1260;
                        this.oC_Return();
                        this.state = 1262;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1261;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1266;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1268;
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
        this.enterRule(localctx, 120, CypherParser.RULE_oC_Union);
        let _la: number;
        try {
            this.state = 1285;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1273;
                this.match(CypherParser.UNION);
                this.state = 1274;
                this.match(CypherParser.SP);
                this.state = 1275;
                this.match(CypherParser.ALL);
                this.state = 1277;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1276;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1279;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1280;
                this.match(CypherParser.UNION);
                this.state = 1282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1281;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1284;
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
        this.enterRule(localctx, 122, CypherParser.RULE_oC_SingleQuery);
        try {
            this.state = 1289;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 167, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1287;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1288;
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
        this.enterRule(localctx, 124, CypherParser.RULE_oC_SinglePartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1326;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 32777) !== 0) || _la===143) {
                    {
                    {
                    this.state = 1291;
                    this.oC_ReadingClause();
                    this.state = 1293;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1292;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1299;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1300;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1307;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 32777) !== 0) || _la===143) {
                    {
                    {
                    this.state = 1301;
                    this.oC_ReadingClause();
                    this.state = 1303;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1302;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1309;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1310;
                this.oC_UpdatingClause();
                this.state = 1317;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 173, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1312;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1311;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1314;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1319;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 173, this._ctx);
                }
                this.state = 1324;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
                case 1:
                    {
                    this.state = 1321;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1320;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1323;
                    this.oC_Return();
                    }
                    break;
                }
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
    public oC_MultiPartQuery(): OC_MultiPartQueryContext {
        let localctx: OC_MultiPartQueryContext = new OC_MultiPartQueryContext(this._ctx, this.state);
        this.enterRule(localctx, 126, CypherParser.RULE_oC_MultiPartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1332;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1328;
                    this.kU_QueryPart();
                    this.state = 1330;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1329;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1334;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 178, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1336;
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
        this.enterRule(localctx, 128, CypherParser.RULE_kU_QueryPart);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1344;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===58 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 32777) !== 0) || _la===143) {
                {
                {
                this.state = 1338;
                this.oC_ReadingClause();
                this.state = 1340;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1339;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1353;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 289) !== 0) || _la===108 || _la===131) {
                {
                {
                this.state = 1347;
                this.oC_UpdatingClause();
                this.state = 1349;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1348;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1355;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1356;
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
        this.enterRule(localctx, 130, CypherParser.RULE_oC_UpdatingClause);
        try {
            this.state = 1362;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1358;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1359;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1360;
                this.oC_Set();
                }
                break;
            case CypherParser.DELETE:
            case CypherParser.DETACH:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1361;
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
        this.enterRule(localctx, 132, CypherParser.RULE_oC_ReadingClause);
        try {
            this.state = 1368;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.MATCH:
            case CypherParser.OPTIONAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1364;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1365;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1366;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1367;
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
        this.enterRule(localctx, 134, CypherParser.RULE_kU_LoadFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1370;
            this.match(CypherParser.LOAD);
            this.state = 1388;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
            case 1:
                {
                this.state = 1371;
                this.match(CypherParser.SP);
                this.state = 1372;
                this.match(CypherParser.WITH);
                this.state = 1373;
                this.match(CypherParser.SP);
                this.state = 1374;
                this.match(CypherParser.HEADERS);
                this.state = 1376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1375;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1378;
                this.match(CypherParser.T__1);
                this.state = 1380;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1379;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1382;
                this.kU_ColumnDefinitions();
                this.state = 1384;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1383;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1386;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1390;
            this.match(CypherParser.SP);
            this.state = 1391;
            this.match(CypherParser.FROM);
            this.state = 1392;
            this.match(CypherParser.SP);
            this.state = 1393;
            this.kU_ScanSource();
            this.state = 1407;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
            case 1:
                {
                this.state = 1395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1394;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1397;
                this.match(CypherParser.T__1);
                this.state = 1399;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1398;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1401;
                this.kU_Options();
                this.state = 1403;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1402;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1405;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1413;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
            case 1:
                {
                this.state = 1410;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1409;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1412;
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
    public oC_YieldItem(): OC_YieldItemContext {
        let localctx: OC_YieldItemContext = new OC_YieldItemContext(this._ctx, this.state);
        this.enterRule(localctx, 136, CypherParser.RULE_oC_YieldItem);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1420;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
            case 1:
                {
                this.state = 1415;
                this.oC_Variable();
                this.state = 1416;
                this.match(CypherParser.SP);
                this.state = 1417;
                this.match(CypherParser.AS);
                this.state = 1418;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1422;
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
    public oC_YieldItems(): OC_YieldItemsContext {
        let localctx: OC_YieldItemsContext = new OC_YieldItemsContext(this._ctx, this.state);
        this.enterRule(localctx, 138, CypherParser.RULE_oC_YieldItems);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1424;
            this.oC_YieldItem();
            this.state = 1435;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 198, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1426;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1425;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1428;
                    this.match(CypherParser.T__3);
                    this.state = 1430;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1429;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1432;
                    this.oC_YieldItem();
                    }
                    }
                }
                this.state = 1437;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 198, this._ctx);
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
        this.enterRule(localctx, 140, CypherParser.RULE_kU_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1438;
            this.match(CypherParser.CALL);
            this.state = 1439;
            this.match(CypherParser.SP);
            this.state = 1440;
            this.oC_FunctionInvocation();
            this.state = 1445;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
            case 1:
                {
                this.state = 1442;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1441;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1444;
                this.oC_Where();
                }
                break;
            }
            this.state = 1453;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
            case 1:
                {
                this.state = 1448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1447;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1450;
                this.match(CypherParser.YIELD);
                this.state = 1451;
                this.match(CypherParser.SP);
                this.state = 1452;
                this.oC_YieldItems();
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
        this.enterRule(localctx, 142, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1457;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===118) {
                {
                this.state = 1455;
                this.match(CypherParser.OPTIONAL);
                this.state = 1456;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1459;
            this.match(CypherParser.MATCH);
            this.state = 1461;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1460;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1463;
            this.oC_Pattern();
            this.state = 1466;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
            case 1:
                {
                this.state = 1464;
                this.match(CypherParser.SP);
                this.state = 1465;
                this.oC_Where();
                }
                break;
            }
            this.state = 1470;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 206, this._ctx) ) {
            case 1:
                {
                this.state = 1468;
                this.match(CypherParser.SP);
                this.state = 1469;
                this.kU_Hint();
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
    public kU_Hint(): KU_HintContext {
        let localctx: KU_HintContext = new KU_HintContext(this._ctx, this.state);
        this.enterRule(localctx, 144, CypherParser.RULE_kU_Hint);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1472;
            this.match(CypherParser.HINT);
            this.state = 1473;
            this.match(CypherParser.SP);
            this.state = 1474;
            this.kU_JoinNode(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }

    public kU_JoinNode(): KU_JoinNodeContext;
    public kU_JoinNode(_p: number): KU_JoinNodeContext;
    public kU_JoinNode(_p?: number): KU_JoinNodeContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new KU_JoinNodeContext(this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 146;
        this.enterRecursionRule(localctx, 146, CypherParser.RULE_kU_JoinNode, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1488;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__1:
                {
                this.state = 1477;
                this.match(CypherParser.T__1);
                this.state = 1479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1478;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1481;
                this.kU_JoinNode(0);
                this.state = 1483;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1482;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1485;
                this.match(CypherParser.T__2);
                }
                break;
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
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
            case CypherParser.FROM:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
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
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1487;
                this.oC_SchemaName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1506;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1504;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 211, this._ctx) ) {
                    case 1:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1490;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1491;
                        this.match(CypherParser.SP);
                        this.state = 1492;
                        this.match(CypherParser.JOIN);
                        this.state = 1493;
                        this.match(CypherParser.SP);
                        this.state = 1494;
                        this.kU_JoinNode(5);
                        }
                        break;
                    case 2:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1495;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1500;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                            case 1:
                                {
                                {
                                this.state = 1496;
                                this.match(CypherParser.SP);
                                this.state = 1497;
                                this.match(CypherParser.MULTI_JOIN);
                                this.state = 1498;
                                this.match(CypherParser.SP);
                                this.state = 1499;
                                this.oC_SchemaName();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 1502;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 210, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    }
                    }
                }
                this.state = 1508;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public oC_Unwind(): OC_UnwindContext {
        let localctx: OC_UnwindContext = new OC_UnwindContext(this._ctx, this.state);
        this.enterRule(localctx, 148, CypherParser.RULE_oC_Unwind);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1509;
            this.match(CypherParser.UNWIND);
            this.state = 1511;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1510;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1513;
            this.oC_Expression();
            this.state = 1514;
            this.match(CypherParser.SP);
            this.state = 1515;
            this.match(CypherParser.AS);
            this.state = 1516;
            this.match(CypherParser.SP);
            this.state = 1517;
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
        this.enterRule(localctx, 150, CypherParser.RULE_oC_Create);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1519;
            this.match(CypherParser.CREATE);
            this.state = 1521;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1520;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1523;
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
        this.enterRule(localctx, 152, CypherParser.RULE_oC_Merge);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1525;
            this.match(CypherParser.MERGE);
            this.state = 1527;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1526;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1529;
            this.oC_Pattern();
            this.state = 1534;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 216, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1530;
                    this.match(CypherParser.SP);
                    this.state = 1531;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1536;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 216, this._ctx);
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
        this.enterRule(localctx, 154, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1547;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1537;
                this.match(CypherParser.ON);
                this.state = 1538;
                this.match(CypherParser.SP);
                this.state = 1539;
                this.match(CypherParser.MATCH);
                this.state = 1540;
                this.match(CypherParser.SP);
                this.state = 1541;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1542;
                this.match(CypherParser.ON);
                this.state = 1543;
                this.match(CypherParser.SP);
                this.state = 1544;
                this.match(CypherParser.CREATE);
                this.state = 1545;
                this.match(CypherParser.SP);
                this.state = 1546;
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
        this.enterRule(localctx, 156, CypherParser.RULE_oC_Set);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1549;
            this.match(CypherParser.SET);
            this.state = 1551;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1550;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1553;
            this.oC_SetItem();
            this.state = 1564;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 221, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1555;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1554;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1557;
                    this.match(CypherParser.T__3);
                    this.state = 1559;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1558;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1561;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1566;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 221, this._ctx);
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
        this.enterRule(localctx, 158, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1567;
            this.oC_PropertyExpression();
            this.state = 1569;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1568;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1571;
            this.match(CypherParser.T__5);
            this.state = 1573;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1572;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1575;
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
        this.enterRule(localctx, 160, CypherParser.RULE_oC_Delete);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1579;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===77) {
                {
                this.state = 1577;
                this.match(CypherParser.DETACH);
                this.state = 1578;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1581;
            this.match(CypherParser.DELETE);
            this.state = 1583;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1582;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1585;
            this.oC_Expression();
            this.state = 1596;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 228, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1587;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1586;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1589;
                    this.match(CypherParser.T__3);
                    this.state = 1591;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1590;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1593;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1598;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 228, this._ctx);
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
        this.enterRule(localctx, 162, CypherParser.RULE_oC_With);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1599;
            this.match(CypherParser.WITH);
            this.state = 1600;
            this.oC_ProjectionBody();
            this.state = 1605;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
            case 1:
                {
                this.state = 1602;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1601;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1604;
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
        this.enterRule(localctx, 164, CypherParser.RULE_oC_Return);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1607;
            this.match(CypherParser.RETURN);
            this.state = 1608;
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
        this.enterRule(localctx, 166, CypherParser.RULE_oC_ProjectionBody);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1614;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
            case 1:
                {
                this.state = 1611;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1610;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1613;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1616;
            this.match(CypherParser.SP);
            this.state = 1617;
            this.oC_ProjectionItems();
            this.state = 1620;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
            case 1:
                {
                this.state = 1618;
                this.match(CypherParser.SP);
                this.state = 1619;
                this.oC_Order();
                }
                break;
            }
            this.state = 1624;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
            case 1:
                {
                this.state = 1622;
                this.match(CypherParser.SP);
                this.state = 1623;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1628;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
            case 1:
                {
                this.state = 1626;
                this.match(CypherParser.SP);
                this.state = 1627;
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
        this.enterRule(localctx, 168, CypherParser.RULE_oC_ProjectionItems);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1658;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1630;
                this.match(CypherParser.STAR);
                this.state = 1641;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 238, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1632;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1631;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1634;
                        this.match(CypherParser.T__3);
                        this.state = 1636;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1635;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1638;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1643;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 238, this._ctx);
                }
                }
                }
                break;
            case CypherParser.T__1:
            case CypherParser.T__6:
            case CypherParser.T__8:
            case CypherParser.T__25:
            case CypherParser.ANY:
            case CypherParser.ADD:
            case CypherParser.ALL:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CASE:
            case CypherParser.CAST:
            case CypherParser.CHECKPOINT:
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
            case CypherParser.FROM:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.NOT:
            case CypherParser.NONE:
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
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TRUE:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.SINGLE:
            case CypherParser.YIELD:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.MINUS:
            case CypherParser.StringLiteral:
            case CypherParser.DecimalInteger:
            case CypherParser.HexLetter:
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1644;
                this.oC_ProjectionItem();
                this.state = 1655;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1646;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1645;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1648;
                        this.match(CypherParser.T__3);
                        this.state = 1650;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1649;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1652;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1657;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
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
        this.enterRule(localctx, 170, CypherParser.RULE_oC_ProjectionItem);
        try {
            this.state = 1667;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1660;
                this.oC_Expression();
                this.state = 1661;
                this.match(CypherParser.SP);
                this.state = 1662;
                this.match(CypherParser.AS);
                this.state = 1663;
                this.match(CypherParser.SP);
                this.state = 1664;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1666;
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
        this.enterRule(localctx, 172, CypherParser.RULE_oC_Order);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1669;
            this.match(CypherParser.ORDER);
            this.state = 1670;
            this.match(CypherParser.SP);
            this.state = 1671;
            this.match(CypherParser.BY);
            this.state = 1672;
            this.match(CypherParser.SP);
            this.state = 1673;
            this.oC_SortItem();
            this.state = 1681;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 1674;
                this.match(CypherParser.T__3);
                this.state = 1676;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1675;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1678;
                this.oC_SortItem();
                }
                }
                this.state = 1683;
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
        this.enterRule(localctx, 174, CypherParser.RULE_oC_Skip);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1684;
            this.match(CypherParser.L_SKIP);
            this.state = 1685;
            this.match(CypherParser.SP);
            this.state = 1686;
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
        this.enterRule(localctx, 176, CypherParser.RULE_oC_Limit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1688;
            this.match(CypherParser.LIMIT);
            this.state = 1689;
            this.match(CypherParser.SP);
            this.state = 1690;
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
        this.enterRule(localctx, 178, CypherParser.RULE_oC_SortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1692;
            this.oC_Expression();
            this.state = 1697;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
            case 1:
                {
                this.state = 1694;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1693;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1696;
                _la = this._input.LA(1);
                if(!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 12582915) !== 0))) {
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
        this.enterRule(localctx, 180, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1699;
            this.match(CypherParser.WHERE);
            this.state = 1700;
            this.match(CypherParser.SP);
            this.state = 1701;
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
        this.enterRule(localctx, 182, CypherParser.RULE_oC_Pattern);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1703;
            this.oC_PatternPart();
            this.state = 1714;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 250, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1705;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1704;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1707;
                    this.match(CypherParser.T__3);
                    this.state = 1709;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1708;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1711;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1716;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 250, this._ctx);
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
        this.enterRule(localctx, 184, CypherParser.RULE_oC_PatternPart);
        let _la: number;
        try {
            this.state = 1728;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
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
            case CypherParser.FROM:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
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
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1717;
                this.oC_Variable();
                this.state = 1719;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1718;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1721;
                this.match(CypherParser.T__5);
                this.state = 1723;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1722;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1725;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1727;
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
        this.enterRule(localctx, 186, CypherParser.RULE_oC_AnonymousPatternPart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1730;
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
        this.enterRule(localctx, 188, CypherParser.RULE_oC_PatternElement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1746;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1732;
                this.oC_NodePattern();
                this.state = 1739;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 255, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1734;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1733;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1736;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1741;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 255, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1742;
                this.match(CypherParser.T__1);
                this.state = 1743;
                this.oC_PatternElement();
                this.state = 1744;
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
        this.enterRule(localctx, 190, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1748;
            this.match(CypherParser.T__1);
            this.state = 1750;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1749;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1756;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577943) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1646609855) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 590081) !== 0)) {
                {
                this.state = 1752;
                this.oC_Variable();
                this.state = 1754;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1753;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1762;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===159) {
                {
                this.state = 1758;
                this.oC_NodeLabels();
                this.state = 1760;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1759;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1768;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1764;
                this.kU_Properties();
                this.state = 1766;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1765;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1770;
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
        this.enterRule(localctx, 192, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1772;
            this.oC_RelationshipPattern();
            this.state = 1774;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1773;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1776;
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
        this.enterRule(localctx, 194, CypherParser.RULE_oC_RelationshipPattern);
        let _la: number;
        try {
            this.state = 1822;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 276, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1778;
                this.oC_LeftArrowHead();
                this.state = 1780;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1779;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1782;
                this.oC_Dash();
                this.state = 1784;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 266, this._ctx) ) {
                case 1:
                    {
                    this.state = 1783;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1787;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1786;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1790;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1789;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1792;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1794;
                this.oC_Dash();
                this.state = 1796;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 269, this._ctx) ) {
                case 1:
                    {
                    this.state = 1795;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1799;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1798;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1802;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1801;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1804;
                this.oC_Dash();
                this.state = 1806;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1805;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1808;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1810;
                this.oC_Dash();
                this.state = 1812;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 273, this._ctx) ) {
                case 1:
                    {
                    this.state = 1811;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1815;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1814;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1818;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1817;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1820;
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
        this.enterRule(localctx, 196, CypherParser.RULE_oC_RelationshipDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1824;
            this.match(CypherParser.T__6);
            this.state = 1826;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1825;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1832;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577943) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1646609855) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 590081) !== 0)) {
                {
                this.state = 1828;
                this.oC_Variable();
                this.state = 1830;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1829;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1838;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===159) {
                {
                this.state = 1834;
                this.oC_RelationshipTypes();
                this.state = 1836;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1835;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1844;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===154) {
                {
                this.state = 1840;
                this.kU_RecursiveDetail();
                this.state = 1842;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1841;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1850;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1846;
                this.kU_Properties();
                this.state = 1848;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1847;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1852;
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
        this.enterRule(localctx, 198, CypherParser.RULE_kU_Properties);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1854;
            this.match(CypherParser.T__8);
            this.state = 1856;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1855;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1891;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577943) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1646609855) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 590081) !== 0)) {
                {
                this.state = 1858;
                this.oC_PropertyKeyName();
                this.state = 1860;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1859;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1862;
                this.match(CypherParser.COLON);
                this.state = 1864;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1863;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1866;
                this.oC_Expression();
                this.state = 1868;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1867;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1888;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 1870;
                    this.match(CypherParser.T__3);
                    this.state = 1872;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1871;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1874;
                    this.oC_PropertyKeyName();
                    this.state = 1876;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1875;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1878;
                    this.match(CypherParser.COLON);
                    this.state = 1880;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1879;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1882;
                    this.oC_Expression();
                    this.state = 1884;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1883;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1890;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1893;
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
        this.enterRule(localctx, 200, CypherParser.RULE_oC_RelationshipTypes);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1895;
            this.match(CypherParser.COLON);
            this.state = 1897;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1896;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1899;
            this.oC_RelTypeName();
            this.state = 1913;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 300, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1901;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1900;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1903;
                    this.match(CypherParser.T__10);
                    this.state = 1905;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===159) {
                        {
                        this.state = 1904;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 1908;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1907;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1910;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1915;
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
    public oC_NodeLabels(): OC_NodeLabelsContext {
        let localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this._ctx, this.state);
        this.enterRule(localctx, 202, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1916;
            this.oC_NodeLabel();
            this.state = 1923;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 302, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1918;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1917;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1920;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1925;
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
    public oC_NodeLabel(): OC_NodeLabelContext {
        let localctx: OC_NodeLabelContext = new OC_NodeLabelContext(this._ctx, this.state);
        this.enterRule(localctx, 204, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1926;
            this.match(CypherParser.COLON);
            this.state = 1928;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1927;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1930;
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
    public kU_RecursiveDetail(): KU_RecursiveDetailContext {
        let localctx: KU_RecursiveDetailContext = new KU_RecursiveDetailContext(this._ctx, this.state);
        this.enterRule(localctx, 206, CypherParser.RULE_kU_RecursiveDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1932;
            this.match(CypherParser.STAR);
            this.state = 1937;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 305, this._ctx) ) {
            case 1:
                {
                this.state = 1934;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1933;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1936;
                this.kU_RecursiveType();
                }
                break;
            }
            this.state = 1943;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 307, this._ctx) ) {
            case 1:
                {
                this.state = 1940;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 306, this._ctx) ) {
                case 1:
                    {
                    this.state = 1939;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1942;
                this.oC_RangeLiteral();
                }
                break;
            }
            this.state = 1949;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 309, this._ctx) ) {
            case 1:
                {
                this.state = 1946;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1945;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1948;
                this.kU_RecursiveComprehension();
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
    public kU_RecursiveType(): KU_RecursiveTypeContext {
        let localctx: KU_RecursiveTypeContext = new KU_RecursiveTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 208, CypherParser.RULE_kU_RecursiveType);
        let _la: number;
        try {
            this.state = 1975;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 314, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1953;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===49) {
                    {
                    this.state = 1951;
                    this.match(CypherParser.ALL);
                    this.state = 1952;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1955;
                this.match(CypherParser.WSHORTEST);
                this.state = 1957;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1956;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1959;
                this.match(CypherParser.T__1);
                this.state = 1961;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1960;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1963;
                this.oC_PropertyKeyName();
                this.state = 1965;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1964;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1967;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1969;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1970;
                this.match(CypherParser.ALL);
                this.state = 1971;
                this.match(CypherParser.SP);
                this.state = 1972;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1973;
                this.match(CypherParser.TRAIL);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1974;
                this.match(CypherParser.ACYCLIC);
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
    public oC_RangeLiteral(): OC_RangeLiteralContext {
        let localctx: OC_RangeLiteralContext = new OC_RangeLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 210, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.state = 1991;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 319, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1978;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===162) {
                    {
                    this.state = 1977;
                    this.oC_LowerBound();
                    }
                }

                this.state = 1981;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1980;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1983;
                this.match(CypherParser.T__11);
                this.state = 1985;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 317, this._ctx) ) {
                case 1:
                    {
                    this.state = 1984;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1988;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===162) {
                    {
                    this.state = 1987;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1990;
                this.oC_IntegerLiteral();
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
    public kU_RecursiveComprehension(): KU_RecursiveComprehensionContext {
        let localctx: KU_RecursiveComprehensionContext = new KU_RecursiveComprehensionContext(this._ctx, this.state);
        this.enterRule(localctx, 212, CypherParser.RULE_kU_RecursiveComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1993;
            this.match(CypherParser.T__1);
            this.state = 1995;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1994;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1997;
            this.oC_Variable();
            this.state = 1999;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1998;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2001;
            this.match(CypherParser.T__3);
            this.state = 2003;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2002;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2005;
            this.oC_Variable();
            this.state = 2017;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 326, this._ctx) ) {
            case 1:
                {
                this.state = 2007;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2006;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2009;
                this.match(CypherParser.T__10);
                this.state = 2011;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2010;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2013;
                this.oC_Where();
                this.state = 2015;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 325, this._ctx) ) {
                case 1:
                    {
                    this.state = 2014;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                }
                break;
            }
            this.state = 2038;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===175) {
                {
                this.state = 2020;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2019;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2022;
                this.match(CypherParser.T__10);
                this.state = 2024;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2023;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2026;
                this.kU_RecursiveProjectionItems();
                this.state = 2028;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2027;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2030;
                this.match(CypherParser.T__3);
                this.state = 2032;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2031;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2034;
                this.kU_RecursiveProjectionItems();
                this.state = 2036;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2035;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2040;
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
    public kU_RecursiveProjectionItems(): KU_RecursiveProjectionItemsContext {
        let localctx: KU_RecursiveProjectionItemsContext = new KU_RecursiveProjectionItemsContext(this._ctx, this.state);
        this.enterRule(localctx, 214, CypherParser.RULE_kU_RecursiveProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2042;
            this.match(CypherParser.T__8);
            this.state = 2044;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 333, this._ctx) ) {
            case 1:
                {
                this.state = 2043;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2047;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309486993) !== 0)) {
                {
                this.state = 2046;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2050;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2049;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2052;
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
        this.enterRule(localctx, 216, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2054;
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
        this.enterRule(localctx, 218, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2056;
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
        this.enterRule(localctx, 220, CypherParser.RULE_oC_LabelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2058;
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
        this.enterRule(localctx, 222, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2060;
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
        this.enterRule(localctx, 224, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2062;
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
        this.enterRule(localctx, 226, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2064;
            this.oC_XorExpression();
            this.state = 2071;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 336, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2065;
                    this.match(CypherParser.SP);
                    this.state = 2066;
                    this.match(CypherParser.OR);
                    this.state = 2067;
                    this.match(CypherParser.SP);
                    this.state = 2068;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 2073;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 336, this._ctx);
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
        this.enterRule(localctx, 228, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2074;
            this.oC_AndExpression();
            this.state = 2081;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 337, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2075;
                    this.match(CypherParser.SP);
                    this.state = 2076;
                    this.match(CypherParser.XOR);
                    this.state = 2077;
                    this.match(CypherParser.SP);
                    this.state = 2078;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 2083;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 337, this._ctx);
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
        this.enterRule(localctx, 230, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2084;
            this.oC_NotExpression();
            this.state = 2091;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 338, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2085;
                    this.match(CypherParser.SP);
                    this.state = 2086;
                    this.match(CypherParser.AND);
                    this.state = 2087;
                    this.match(CypherParser.SP);
                    this.state = 2088;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 2093;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 338, this._ctx);
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
        this.enterRule(localctx, 232, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2100;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===113) {
                {
                {
                this.state = 2094;
                this.match(CypherParser.NOT);
                this.state = 2096;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2095;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2102;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2103;
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
        this.enterRule(localctx, 234, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 2153;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 351, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2105;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2115;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 343, this._ctx) ) {
                case 1:
                    {
                    this.state = 2107;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2106;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2109;
                    this.kU_ComparisonOperator();
                    this.state = 2111;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2110;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2113;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2117;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 2119;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2118;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2121;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 2123;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2122;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2125;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2129;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2130;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2133;
                this.kU_ComparisonOperator();
                this.state = 2135;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2134;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2137;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2147;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2139;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2138;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2141;
                        this.kU_ComparisonOperator();
                        this.state = 2143;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2142;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2145;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2149;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 350, this._ctx);
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
        this.enterRule(localctx, 236, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2155;
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
        this.enterRule(localctx, 238, CypherParser.RULE_kU_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2157;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 2168;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 354, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2159;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2158;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2161;
                    this.match(CypherParser.T__10);
                    this.state = 2163;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2162;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2165;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 2170;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 354, this._ctx);
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
        this.enterRule(localctx, 240, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2171;
            this.kU_BitShiftOperatorExpression();
            this.state = 2182;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 357, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2173;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2172;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2175;
                    this.match(CypherParser.T__17);
                    this.state = 2177;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2176;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2179;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 2184;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 357, this._ctx);
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
        this.enterRule(localctx, 242, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2185;
            this.oC_AddOrSubtractExpression();
            this.state = 2197;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 360, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2187;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2186;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2189;
                    this.kU_BitShiftOperator();
                    this.state = 2191;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2190;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2193;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 2199;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 360, this._ctx);
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
        this.enterRule(localctx, 244, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2200;
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
        this.enterRule(localctx, 246, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2202;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 2214;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 363, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2204;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2203;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2206;
                    this.kU_AddOrSubtractOperator();
                    this.state = 2208;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2207;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2210;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 2216;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 363, this._ctx);
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
        this.enterRule(localctx, 248, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2217;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===157)) {
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
        this.enterRule(localctx, 250, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2219;
            this.oC_PowerOfExpression();
            this.state = 2231;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 366, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2221;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2220;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2223;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 2225;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2224;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2227;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 2233;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 366, this._ctx);
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
        this.enterRule(localctx, 252, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2234;
            _la = this._input.LA(1);
            if(!(_la===22 || _la===23 || _la===154)) {
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
        this.enterRule(localctx, 254, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2236;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 2247;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 369, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2238;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2237;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2240;
                    this.match(CypherParser.T__23);
                    this.state = 2242;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2241;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2244;
                    this.oC_UnaryAddSubtractOrFactorialExpression();
                    }
                    }
                }
                this.state = 2249;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 369, this._ctx);
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
        this.enterRule(localctx, 256, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2256;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===157) {
                {
                {
                this.state = 2250;
                this.match(CypherParser.MINUS);
                this.state = 2252;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2251;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2259;
            this.oC_StringListNullOperatorExpression();
            this.state = 2264;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 373, this._ctx) ) {
            case 1:
                {
                this.state = 2261;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2260;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2263;
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
        this.enterRule(localctx, 258, CypherParser.RULE_oC_StringListNullOperatorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2266;
            this.oC_PropertyOrLabelsExpression();
            this.state = 2274;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 375, this._ctx) ) {
            case 1:
                {
                this.state = 2267;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 2269;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2268;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2271;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 374, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 2273;
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
        this.enterRule(localctx, 260, CypherParser.RULE_oC_ListOperatorExpression);
        let _la: number;
        try {
            this.state = 2295;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 379, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2276;
                this.match(CypherParser.SP);
                this.state = 2277;
                this.match(CypherParser.IN);
                this.state = 2279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2278;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2281;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2282;
                this.match(CypherParser.T__6);
                this.state = 2283;
                this.oC_Expression();
                this.state = 2284;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2286;
                this.match(CypherParser.T__6);
                this.state = 2288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309485969) !== 0)) {
                    {
                    this.state = 2287;
                    this.oC_Expression();
                    }
                }

                this.state = 2290;
                this.match(CypherParser.COLON);
                this.state = 2292;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309485969) !== 0)) {
                    {
                    this.state = 2291;
                    this.oC_Expression();
                    }
                }

                this.state = 2294;
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
        this.enterRule(localctx, 262, CypherParser.RULE_oC_StringOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2308;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
            case 1:
                {
                this.state = 2297;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 2298;
                this.match(CypherParser.SP);
                this.state = 2299;
                this.match(CypherParser.STARTS);
                this.state = 2300;
                this.match(CypherParser.SP);
                this.state = 2301;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 2302;
                this.match(CypherParser.SP);
                this.state = 2303;
                this.match(CypherParser.ENDS);
                this.state = 2304;
                this.match(CypherParser.SP);
                this.state = 2305;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 2306;
                this.match(CypherParser.SP);
                this.state = 2307;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 2311;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2310;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2313;
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
        this.enterRule(localctx, 264, CypherParser.RULE_oC_RegularExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2316;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2315;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2318;
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
        this.enterRule(localctx, 266, CypherParser.RULE_oC_NullOperatorExpression);
        try {
            this.state = 2330;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 383, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2320;
                this.match(CypherParser.SP);
                this.state = 2321;
                this.match(CypherParser.IS);
                this.state = 2322;
                this.match(CypherParser.SP);
                this.state = 2323;
                this.match(CypherParser.NULL);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2324;
                this.match(CypherParser.SP);
                this.state = 2325;
                this.match(CypherParser.IS);
                this.state = 2326;
                this.match(CypherParser.SP);
                this.state = 2327;
                this.match(CypherParser.NOT);
                this.state = 2328;
                this.match(CypherParser.SP);
                this.state = 2329;
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
        this.enterRule(localctx, 268, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2332;
            this.oC_Atom();
            this.state = 2339;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 385, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2334;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2333;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2336;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2341;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 385, this._ctx);
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
        this.enterRule(localctx, 270, CypherParser.RULE_oC_Atom);
        try {
            this.state = 2351;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 386, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2342;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2343;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2344;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2345;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2346;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2347;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2348;
                this.oC_ExistCountSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2349;
                this.oC_Variable();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2350;
                this.oC_Quantifier();
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
    public oC_Quantifier(): OC_QuantifierContext {
        let localctx: OC_QuantifierContext = new OC_QuantifierContext(this._ctx, this.state);
        this.enterRule(localctx, 272, CypherParser.RULE_oC_Quantifier);
        let _la: number;
        try {
            this.state = 2409;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ALL:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2353;
                this.match(CypherParser.ALL);
                this.state = 2355;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2354;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2357;
                this.match(CypherParser.T__1);
                this.state = 2359;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2358;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2361;
                this.oC_FilterExpression();
                this.state = 2363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2362;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2365;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.ANY:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2367;
                this.match(CypherParser.ANY);
                this.state = 2369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2368;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2371;
                this.match(CypherParser.T__1);
                this.state = 2373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2372;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2375;
                this.oC_FilterExpression();
                this.state = 2377;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2376;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2379;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.NONE:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2381;
                this.match(CypherParser.NONE);
                this.state = 2383;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2382;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2385;
                this.match(CypherParser.T__1);
                this.state = 2387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2386;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2389;
                this.oC_FilterExpression();
                this.state = 2391;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2390;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2393;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.SINGLE:
                this.enterOuterAlt(localctx, 4);
                {
                {
                this.state = 2395;
                this.match(CypherParser.SINGLE);
                this.state = 2397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2396;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2399;
                this.match(CypherParser.T__1);
                this.state = 2401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2400;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2403;
                this.oC_FilterExpression();
                this.state = 2405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2404;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2407;
                this.match(CypherParser.T__2);
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
    public oC_FilterExpression(): OC_FilterExpressionContext {
        let localctx: OC_FilterExpressionContext = new OC_FilterExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 274, CypherParser.RULE_oC_FilterExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2411;
            this.oC_IdInColl();
            this.state = 2412;
            this.match(CypherParser.SP);
            this.state = 2413;
            this.oC_Where();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_IdInColl(): OC_IdInCollContext {
        let localctx: OC_IdInCollContext = new OC_IdInCollContext(this._ctx, this.state);
        this.enterRule(localctx, 276, CypherParser.RULE_oC_IdInColl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2415;
            this.oC_Variable();
            this.state = 2416;
            this.match(CypherParser.SP);
            this.state = 2417;
            this.match(CypherParser.IN);
            this.state = 2418;
            this.match(CypherParser.SP);
            this.state = 2419;
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
    public oC_Literal(): OC_LiteralContext {
        let localctx: OC_LiteralContext = new OC_LiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 278, CypherParser.RULE_oC_Literal);
        try {
            this.state = 2427;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2421;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2422;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.FALSE:
            case CypherParser.TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2423;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2424;
                this.match(CypherParser.NULL);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2425;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2426;
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
        this.enterRule(localctx, 280, CypherParser.RULE_oC_BooleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2429;
            _la = this._input.LA(1);
            if(!(_la===87 || _la===140)) {
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
        this.enterRule(localctx, 282, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2431;
            this.match(CypherParser.T__6);
            this.state = 2433;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2432;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2448;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309485969) !== 0)) {
                {
                this.state = 2435;
                this.oC_Expression();
                this.state = 2437;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2436;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2445;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2439;
                    this.kU_ListEntry();
                    this.state = 2441;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2440;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2447;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2450;
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
        this.enterRule(localctx, 284, CypherParser.RULE_kU_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2452;
            this.match(CypherParser.T__3);
            this.state = 2454;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 406, this._ctx) ) {
            case 1:
                {
                this.state = 2453;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2457;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309485969) !== 0)) {
                {
                this.state = 2456;
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
        this.enterRule(localctx, 286, CypherParser.RULE_kU_StructLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2459;
            this.match(CypherParser.T__8);
            this.state = 2461;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2460;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2463;
            this.kU_StructField();
            this.state = 2465;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2464;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2477;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 2467;
                this.match(CypherParser.T__3);
                this.state = 2469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2468;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2471;
                this.kU_StructField();
                this.state = 2473;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2472;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2480;
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
        this.enterRule(localctx, 288, CypherParser.RULE_kU_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2484;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
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
            case CypherParser.FROM:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
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
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2482;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2483;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2487;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2486;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2489;
            this.match(CypherParser.COLON);
            this.state = 2491;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2490;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2493;
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
        this.enterRule(localctx, 290, CypherParser.RULE_oC_ParenthesizedExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2495;
            this.match(CypherParser.T__1);
            this.state = 2497;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2496;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2499;
            this.oC_Expression();
            this.state = 2501;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2500;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2503;
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
        this.enterRule(localctx, 292, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2582;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 437, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2505;
                this.match(CypherParser.COUNT);
                this.state = 2507;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2506;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2509;
                this.match(CypherParser.T__1);
                this.state = 2511;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2510;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2513;
                this.match(CypherParser.STAR);
                this.state = 2515;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2514;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2517;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2518;
                this.match(CypherParser.CAST);
                this.state = 2520;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2519;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2522;
                this.match(CypherParser.T__1);
                this.state = 2524;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2523;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2526;
                this.kU_FunctionParameter();
                this.state = 2528;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2527;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2540;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case CypherParser.AS:
                    {
                    {
                    this.state = 2530;
                    this.match(CypherParser.AS);
                    this.state = 2532;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2531;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2534;
                    this.kU_DataType(0);
                    }
                    }
                    break;
                case CypherParser.T__3:
                    {
                    {
                    this.state = 2535;
                    this.match(CypherParser.T__3);
                    this.state = 2537;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2536;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2539;
                    this.kU_FunctionParameter();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2543;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2542;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2545;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2547;
                this.oC_FunctionName();
                this.state = 2549;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2548;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2551;
                this.match(CypherParser.T__1);
                this.state = 2553;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2552;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2559;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===78) {
                    {
                    this.state = 2555;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2557;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2556;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2578;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309485969) !== 0)) {
                    {
                    this.state = 2561;
                    this.kU_FunctionParameter();
                    this.state = 2563;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2562;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2575;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===4) {
                        {
                        {
                        this.state = 2565;
                        this.match(CypherParser.T__3);
                        this.state = 2567;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2566;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2569;
                        this.kU_FunctionParameter();
                        this.state = 2571;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2570;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2577;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2580;
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
        this.enterRule(localctx, 294, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2584;
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
        this.enterRule(localctx, 296, CypherParser.RULE_kU_FunctionParameter);
        let _la: number;
        try {
            this.state = 2599;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 441, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2595;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 440, this._ctx) ) {
                case 1:
                    {
                    this.state = 2586;
                    this.oC_SymbolicName();
                    this.state = 2588;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2587;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2590;
                    this.match(CypherParser.COLON);
                    this.state = 2591;
                    this.match(CypherParser.T__5);
                    this.state = 2593;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2592;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 2597;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2598;
                this.kU_LambdaParameter();
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
    public kU_LambdaParameter(): KU_LambdaParameterContext {
        let localctx: KU_LambdaParameterContext = new KU_LambdaParameterContext(this._ctx, this.state);
        this.enterRule(localctx, 298, CypherParser.RULE_kU_LambdaParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2601;
            this.kU_LambdaVars();
            this.state = 2603;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2602;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2605;
            this.match(CypherParser.MINUS);
            this.state = 2606;
            this.match(CypherParser.T__15);
            this.state = 2608;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2607;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2610;
            this.oC_Expression();
            this.state = 2612;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 444, this._ctx) ) {
            case 1:
                {
                this.state = 2611;
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
    public kU_LambdaVars(): KU_LambdaVarsContext {
        let localctx: KU_LambdaVarsContext = new KU_LambdaVarsContext(this._ctx, this.state);
        this.enterRule(localctx, 300, CypherParser.RULE_kU_LambdaVars);
        let _la: number;
        try {
            this.state = 2638;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
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
            case CypherParser.FROM:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
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
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2614;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2615;
                this.match(CypherParser.T__1);
                this.state = 2617;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2616;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2619;
                this.oC_SymbolicName();
                this.state = 2621;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2620;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2633;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2623;
                    this.match(CypherParser.T__3);
                    this.state = 2625;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2624;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2627;
                    this.oC_SymbolicName();
                    this.state = 2629;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2628;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2635;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2636;
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
    public oC_PathPatterns(): OC_PathPatternsContext {
        let localctx: OC_PathPatternsContext = new OC_PathPatternsContext(this._ctx, this.state);
        this.enterRule(localctx, 302, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2640;
            this.oC_NodePattern();
            this.state = 2645;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2642;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2641;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2644;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2647;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 452, this._ctx);
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
    public oC_ExistCountSubquery(): OC_ExistCountSubqueryContext {
        let localctx: OC_ExistCountSubqueryContext = new OC_ExistCountSubqueryContext(this._ctx, this.state);
        this.enterRule(localctx, 304, CypherParser.RULE_oC_ExistCountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2649;
            _la = this._input.LA(1);
            if(!(_la===68 || _la===83)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 2651;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2650;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2653;
            this.match(CypherParser.T__8);
            this.state = 2655;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2654;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2657;
            this.match(CypherParser.MATCH);
            this.state = 2659;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2658;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2661;
            this.oC_Pattern();
            this.state = 2666;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 457, this._ctx) ) {
            case 1:
                {
                this.state = 2663;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2662;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2665;
                this.oC_Where();
                }
                break;
            }
            this.state = 2672;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 459, this._ctx) ) {
            case 1:
                {
                this.state = 2669;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2668;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2671;
                this.kU_Hint();
                }
                break;
            }
            this.state = 2675;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2674;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2677;
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
        this.enterRule(localctx, 306, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2679;
            this.match(CypherParser.T__4);
            this.state = 2681;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2680;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2685;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
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
            case CypherParser.FROM:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
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
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2683;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2684;
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
        this.enterRule(localctx, 308, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2709;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 468, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2687;
                this.match(CypherParser.CASE);
                this.state = 2692;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2689;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2688;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2691;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2694;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 464, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2696;
                this.match(CypherParser.CASE);
                this.state = 2698;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2697;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2700;
                this.oC_Expression();
                this.state = 2705;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2702;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2701;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2704;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2707;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 467, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2719;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 471, this._ctx) ) {
            case 1:
                {
                this.state = 2712;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2711;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2714;
                this.match(CypherParser.ELSE);
                this.state = 2716;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2715;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2718;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2722;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2721;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2724;
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
        this.enterRule(localctx, 310, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2726;
            this.match(CypherParser.WHEN);
            this.state = 2728;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2727;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2730;
            this.oC_Expression();
            this.state = 2732;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2731;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2734;
            this.match(CypherParser.THEN);
            this.state = 2736;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2735;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2738;
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
        this.enterRule(localctx, 312, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2740;
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
        this.enterRule(localctx, 314, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 2744;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2742;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2743;
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
        this.enterRule(localctx, 316, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2746;
            this.match(CypherParser.T__25);
            this.state = 2749;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
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
            case CypherParser.FROM:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
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
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2747;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2748;
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
        this.enterRule(localctx, 318, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2751;
            this.oC_Atom();
            this.state = 2753;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2752;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2755;
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
        this.enterRule(localctx, 320, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2757;
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
        this.enterRule(localctx, 322, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2759;
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
        this.enterRule(localctx, 324, CypherParser.RULE_oC_DoubleLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2761;
            _la = this._input.LA(1);
            if(!(_la===169 || _la===170)) {
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
    public oC_SchemaName(): OC_SchemaNameContext {
        let localctx: OC_SchemaNameContext = new OC_SchemaNameContext(this._ctx, this.state);
        this.enterRule(localctx, 326, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2763;
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
        this.enterRule(localctx, 328, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 2770;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2765;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2766;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2768;
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
            case CypherParser.CHECKPOINT:
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
            case CypherParser.FROM:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
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
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2769;
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
        this.enterRule(localctx, 330, CypherParser.RULE_kU_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2772;
            _la = this._input.LA(1);
            if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577943) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1646609855) !== 0) || _la===155)) {
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
        this.enterRule(localctx, 332, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2774;
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
        this.enterRule(localctx, 334, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2776;
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
        this.enterRule(localctx, 336, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2778;
            _la = this._input.LA(1);
            if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2047) !== 0) || _la===157)) {
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
        case 48:
            return this.kU_DataType_sempred(localctx as KU_DataTypeContext, predIndex);
        case 73:
            return this.kU_JoinNode_sempred(localctx as KU_JoinNodeContext, predIndex);
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
    private kU_JoinNode_sempred(localctx: KU_JoinNodeContext, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this._ctx, 4);
        case 2:
            return this.precpred(this._ctx, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,178,2781,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,1,0,1,0,3,
        0,341,8,0,1,0,1,0,3,0,345,8,0,1,0,5,0,348,8,0,10,0,12,0,351,9,0,
        1,0,3,0,354,8,0,1,0,1,0,1,1,3,1,359,8,1,1,1,3,1,362,8,1,1,1,1,1,
        3,1,366,8,1,1,1,3,1,369,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,391,8,2,1,3,1,3,
        1,3,1,3,3,3,397,8,3,1,3,1,3,3,3,401,8,3,1,3,3,3,404,8,3,1,3,1,3,
        1,3,1,3,3,3,410,8,3,1,3,1,3,3,3,414,8,3,1,3,1,3,3,3,418,8,3,1,3,
        1,3,3,3,422,8,3,1,4,1,4,3,4,426,8,4,1,4,1,4,3,4,430,8,4,1,4,1,4,
        3,4,434,8,4,1,4,5,4,437,8,4,10,4,12,4,440,9,4,1,4,3,4,443,8,4,1,
        4,1,4,1,5,1,5,1,5,3,5,450,8,5,1,5,1,5,3,5,454,8,5,1,5,1,5,1,5,1,
        5,1,5,1,5,3,5,462,8,5,1,5,1,5,1,5,3,5,467,8,5,1,6,1,6,1,6,1,6,1,
        6,1,6,1,6,1,6,3,6,477,8,6,1,6,1,6,3,6,481,8,6,1,6,1,6,3,6,485,8,
        6,1,6,5,6,488,8,6,10,6,12,6,491,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,
        1,7,1,7,1,7,3,7,503,8,7,1,7,1,7,3,7,507,8,7,1,7,1,7,1,7,1,7,1,7,
        1,7,3,7,515,8,7,1,7,1,7,3,7,519,8,7,1,7,1,7,3,7,523,8,7,1,7,1,7,
        3,7,527,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,535,8,8,1,8,1,8,3,8,539,
        8,8,1,8,1,8,3,8,543,8,8,1,8,1,8,3,8,547,8,8,1,9,1,9,1,9,1,9,1,9,
        1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,562,8,10,1,10,1,10,1,
        10,3,10,567,8,10,1,10,1,10,1,10,1,10,3,10,573,8,10,1,10,1,10,3,10,
        577,8,10,1,10,3,10,580,8,10,1,10,3,10,583,8,10,1,10,1,10,1,11,1,
        11,3,11,589,8,11,1,11,1,11,3,11,593,8,11,1,11,5,11,596,8,11,10,11,
        12,11,599,9,11,3,11,601,8,11,1,11,1,11,1,11,3,11,606,8,11,1,12,1,
        12,3,12,610,8,12,1,12,1,12,3,12,614,8,12,1,12,5,12,617,8,12,10,12,
        12,12,620,9,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,
        1,15,1,15,3,15,634,8,15,1,15,1,15,3,15,638,8,15,1,15,1,15,1,15,1,
        15,1,15,3,15,645,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
        16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,665,8,17,1,
        17,1,17,3,17,669,8,17,1,17,3,17,672,8,17,1,17,3,17,675,8,17,1,17,
        3,17,678,8,17,1,17,3,17,681,8,17,1,17,1,17,3,17,685,8,17,1,17,5,
        17,688,8,17,10,17,12,17,691,9,17,1,17,3,17,694,8,17,1,17,1,17,1,
        17,1,17,1,17,1,17,1,18,1,18,3,18,704,8,18,1,18,1,18,3,18,708,8,18,
        1,18,5,18,711,8,18,10,18,12,18,714,9,18,1,19,1,19,3,19,718,8,19,
        1,19,1,19,1,19,3,19,723,8,19,1,19,1,19,1,20,1,20,3,20,729,8,20,1,
        20,1,20,3,20,733,8,20,1,20,1,20,3,20,737,8,20,1,20,5,20,740,8,20,
        10,20,12,20,743,9,20,1,20,1,20,1,20,1,20,3,20,749,8,20,1,20,1,20,
        3,20,753,8,20,1,20,1,20,3,20,757,8,20,1,20,3,20,760,8,20,1,21,1,
        21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
        22,3,22,777,8,22,1,22,1,22,3,22,781,8,22,1,22,1,22,3,22,785,8,22,
        1,22,1,22,3,22,789,8,22,1,22,1,22,3,22,793,8,22,1,22,3,22,796,8,
        22,1,22,3,22,799,8,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,
        23,3,23,810,8,23,1,23,1,23,3,23,814,8,23,1,23,1,23,1,23,3,23,819,
        8,23,1,23,1,23,3,23,823,8,23,1,23,1,23,3,23,827,8,23,1,23,1,23,3,
        23,831,8,23,1,23,1,23,3,23,835,8,23,3,23,837,8,23,1,23,1,23,3,23,
        841,8,23,1,23,1,23,3,23,845,8,23,3,23,847,8,23,1,23,1,23,1,23,1,
        23,3,23,853,8,23,1,23,1,23,3,23,857,8,23,1,23,1,23,3,23,861,8,23,
        1,23,1,23,3,23,865,8,23,1,24,1,24,3,24,869,8,24,1,24,1,24,3,24,873,
        8,24,1,24,5,24,876,8,24,10,24,12,24,879,9,24,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,896,
        8,26,1,26,1,26,1,26,5,26,901,8,26,10,26,12,26,904,9,26,1,27,1,27,
        1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,916,8,27,1,28,1,28,
        1,28,1,28,1,28,3,28,923,8,28,1,29,1,29,1,29,1,29,3,29,929,8,29,1,
        29,3,29,932,8,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,3,30,942,
        8,30,1,30,3,30,945,8,30,1,31,1,31,1,31,1,31,1,31,1,31,3,31,953,8,
        31,1,31,3,31,956,8,31,1,32,1,32,1,32,1,32,3,32,962,8,32,1,32,3,32,
        965,8,32,1,32,1,32,1,33,1,33,3,33,971,8,33,1,33,1,33,1,34,1,34,1,
        34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,986,8,35,1,35,1,
        35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,3,
        37,1002,8,37,1,38,1,38,1,38,1,38,1,38,3,38,1009,8,38,1,38,1,38,1,
        38,1,38,1,38,3,38,1016,8,38,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,
        40,1,40,3,40,1027,8,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,
        42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,3,43,1047,8,43,1,
        43,1,43,3,43,1051,8,43,1,43,5,43,1054,8,43,10,43,12,43,1057,9,43,
        1,44,1,44,1,44,1,44,1,45,1,45,3,45,1065,8,45,1,45,1,45,3,45,1069,
        8,45,1,45,5,45,1072,8,45,10,45,12,45,1075,9,45,1,46,1,46,1,46,3,
        46,1080,8,46,1,46,1,46,1,46,1,46,3,46,1086,8,46,1,47,1,47,1,47,1,
        47,3,47,1092,8,47,1,47,1,47,3,47,1096,8,47,1,47,1,47,3,47,1100,8,
        47,1,47,1,47,1,48,1,48,1,48,1,48,3,48,1108,8,48,1,48,1,48,3,48,1112,
        8,48,1,48,1,48,3,48,1116,8,48,1,48,1,48,1,48,1,48,3,48,1122,8,48,
        1,48,1,48,3,48,1126,8,48,1,48,1,48,3,48,1130,8,48,1,48,1,48,1,48,
        1,48,3,48,1136,8,48,1,48,1,48,3,48,1140,8,48,1,48,1,48,3,48,1144,
        8,48,1,48,1,48,3,48,1148,8,48,1,48,1,48,3,48,1152,8,48,1,48,1,48,
        1,48,1,48,3,48,1158,8,48,1,48,1,48,3,48,1162,8,48,1,48,1,48,3,48,
        1166,8,48,1,48,1,48,3,48,1170,8,48,1,48,1,48,3,48,1174,8,48,1,48,
        1,48,3,48,1178,8,48,1,48,1,48,5,48,1182,8,48,10,48,12,48,1185,9,
        48,1,49,1,49,5,49,1189,8,49,10,49,12,49,1192,9,49,1,50,1,50,3,50,
        1196,8,50,1,50,1,50,1,51,1,51,3,51,1202,8,51,1,52,1,52,1,52,3,52,
        1207,8,52,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,
        1,54,1,54,1,54,1,54,3,54,1224,8,54,1,55,1,55,3,55,1228,8,55,1,56,
        1,56,1,56,1,56,3,56,1234,8,56,1,56,1,56,3,56,1238,8,56,1,57,1,57,
        1,57,1,57,1,57,1,57,1,57,3,57,1247,8,57,1,58,1,58,1,59,1,59,3,59,
        1253,8,59,1,59,5,59,1256,8,59,10,59,12,59,1259,9,59,1,59,1,59,3,
        59,1263,8,59,4,59,1265,8,59,11,59,12,59,1266,1,59,1,59,1,59,3,59,
        1272,8,59,1,60,1,60,1,60,1,60,3,60,1278,8,60,1,60,1,60,1,60,3,60,
        1283,8,60,1,60,3,60,1286,8,60,1,61,1,61,3,61,1290,8,61,1,62,1,62,
        3,62,1294,8,62,5,62,1296,8,62,10,62,12,62,1299,9,62,1,62,1,62,1,
        62,3,62,1304,8,62,5,62,1306,8,62,10,62,12,62,1309,9,62,1,62,1,62,
        3,62,1313,8,62,1,62,5,62,1316,8,62,10,62,12,62,1319,9,62,1,62,3,
        62,1322,8,62,1,62,3,62,1325,8,62,3,62,1327,8,62,1,63,1,63,3,63,1331,
        8,63,4,63,1333,8,63,11,63,12,63,1334,1,63,1,63,1,64,1,64,3,64,1341,
        8,64,5,64,1343,8,64,10,64,12,64,1346,9,64,1,64,1,64,3,64,1350,8,
        64,5,64,1352,8,64,10,64,12,64,1355,9,64,1,64,1,64,1,65,1,65,1,65,
        1,65,3,65,1363,8,65,1,66,1,66,1,66,1,66,3,66,1369,8,66,1,67,1,67,
        1,67,1,67,1,67,1,67,3,67,1377,8,67,1,67,1,67,3,67,1381,8,67,1,67,
        1,67,3,67,1385,8,67,1,67,1,67,3,67,1389,8,67,1,67,1,67,1,67,1,67,
        1,67,3,67,1396,8,67,1,67,1,67,3,67,1400,8,67,1,67,1,67,3,67,1404,
        8,67,1,67,1,67,3,67,1408,8,67,1,67,3,67,1411,8,67,1,67,3,67,1414,
        8,67,1,68,1,68,1,68,1,68,1,68,3,68,1421,8,68,1,68,1,68,1,69,1,69,
        3,69,1427,8,69,1,69,1,69,3,69,1431,8,69,1,69,5,69,1434,8,69,10,69,
        12,69,1437,9,69,1,70,1,70,1,70,1,70,3,70,1443,8,70,1,70,3,70,1446,
        8,70,1,70,3,70,1449,8,70,1,70,1,70,1,70,3,70,1454,8,70,1,71,1,71,
        3,71,1458,8,71,1,71,1,71,3,71,1462,8,71,1,71,1,71,1,71,3,71,1467,
        8,71,1,71,1,71,3,71,1471,8,71,1,72,1,72,1,72,1,72,1,73,1,73,1,73,
        3,73,1480,8,73,1,73,1,73,3,73,1484,8,73,1,73,1,73,1,73,3,73,1489,
        8,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,4,73,1501,
        8,73,11,73,12,73,1502,5,73,1505,8,73,10,73,12,73,1508,9,73,1,74,
        1,74,3,74,1512,8,74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,3,75,
        1522,8,75,1,75,1,75,1,76,1,76,3,76,1528,8,76,1,76,1,76,1,76,5,76,
        1533,8,76,10,76,12,76,1536,9,76,1,77,1,77,1,77,1,77,1,77,1,77,1,
        77,1,77,1,77,1,77,3,77,1548,8,77,1,78,1,78,3,78,1552,8,78,1,78,1,
        78,3,78,1556,8,78,1,78,1,78,3,78,1560,8,78,1,78,5,78,1563,8,78,10,
        78,12,78,1566,9,78,1,79,1,79,3,79,1570,8,79,1,79,1,79,3,79,1574,
        8,79,1,79,1,79,1,80,1,80,3,80,1580,8,80,1,80,1,80,3,80,1584,8,80,
        1,80,1,80,3,80,1588,8,80,1,80,1,80,3,80,1592,8,80,1,80,5,80,1595,
        8,80,10,80,12,80,1598,9,80,1,81,1,81,1,81,3,81,1603,8,81,1,81,3,
        81,1606,8,81,1,82,1,82,1,82,1,83,3,83,1612,8,83,1,83,3,83,1615,8,
        83,1,83,1,83,1,83,1,83,3,83,1621,8,83,1,83,1,83,3,83,1625,8,83,1,
        83,1,83,3,83,1629,8,83,1,84,1,84,3,84,1633,8,84,1,84,1,84,3,84,1637,
        8,84,1,84,5,84,1640,8,84,10,84,12,84,1643,9,84,1,84,1,84,3,84,1647,
        8,84,1,84,1,84,3,84,1651,8,84,1,84,5,84,1654,8,84,10,84,12,84,1657,
        9,84,3,84,1659,8,84,1,85,1,85,1,85,1,85,1,85,1,85,1,85,3,85,1668,
        8,85,1,86,1,86,1,86,1,86,1,86,1,86,1,86,3,86,1677,8,86,1,86,5,86,
        1680,8,86,10,86,12,86,1683,9,86,1,87,1,87,1,87,1,87,1,88,1,88,1,
        88,1,88,1,89,1,89,3,89,1695,8,89,1,89,3,89,1698,8,89,1,90,1,90,1,
        90,1,90,1,91,1,91,3,91,1706,8,91,1,91,1,91,3,91,1710,8,91,1,91,5,
        91,1713,8,91,10,91,12,91,1716,9,91,1,92,1,92,3,92,1720,8,92,1,92,
        1,92,3,92,1724,8,92,1,92,1,92,1,92,3,92,1729,8,92,1,93,1,93,1,94,
        1,94,3,94,1735,8,94,1,94,5,94,1738,8,94,10,94,12,94,1741,9,94,1,
        94,1,94,1,94,1,94,3,94,1747,8,94,1,95,1,95,3,95,1751,8,95,1,95,1,
        95,3,95,1755,8,95,3,95,1757,8,95,1,95,1,95,3,95,1761,8,95,3,95,1763,
        8,95,1,95,1,95,3,95,1767,8,95,3,95,1769,8,95,1,95,1,95,1,96,1,96,
        3,96,1775,8,96,1,96,1,96,1,97,1,97,3,97,1781,8,97,1,97,1,97,3,97,
        1785,8,97,1,97,3,97,1788,8,97,1,97,3,97,1791,8,97,1,97,1,97,1,97,
        1,97,3,97,1797,8,97,1,97,3,97,1800,8,97,1,97,3,97,1803,8,97,1,97,
        1,97,3,97,1807,8,97,1,97,1,97,1,97,1,97,3,97,1813,8,97,1,97,3,97,
        1816,8,97,1,97,3,97,1819,8,97,1,97,1,97,3,97,1823,8,97,1,98,1,98,
        3,98,1827,8,98,1,98,1,98,3,98,1831,8,98,3,98,1833,8,98,1,98,1,98,
        3,98,1837,8,98,3,98,1839,8,98,1,98,1,98,3,98,1843,8,98,3,98,1845,
        8,98,1,98,1,98,3,98,1849,8,98,3,98,1851,8,98,1,98,1,98,1,99,1,99,
        3,99,1857,8,99,1,99,1,99,3,99,1861,8,99,1,99,1,99,3,99,1865,8,99,
        1,99,1,99,3,99,1869,8,99,1,99,1,99,3,99,1873,8,99,1,99,1,99,3,99,
        1877,8,99,1,99,1,99,3,99,1881,8,99,1,99,1,99,3,99,1885,8,99,5,99,
        1887,8,99,10,99,12,99,1890,9,99,3,99,1892,8,99,1,99,1,99,1,100,1,
        100,3,100,1898,8,100,1,100,1,100,3,100,1902,8,100,1,100,1,100,3,
        100,1906,8,100,1,100,3,100,1909,8,100,1,100,5,100,1912,8,100,10,
        100,12,100,1915,9,100,1,101,1,101,3,101,1919,8,101,1,101,5,101,1922,
        8,101,10,101,12,101,1925,9,101,1,102,1,102,3,102,1929,8,102,1,102,
        1,102,1,103,1,103,3,103,1935,8,103,1,103,3,103,1938,8,103,1,103,
        3,103,1941,8,103,1,103,3,103,1944,8,103,1,103,3,103,1947,8,103,1,
        103,3,103,1950,8,103,1,104,1,104,3,104,1954,8,104,1,104,1,104,3,
        104,1958,8,104,1,104,1,104,3,104,1962,8,104,1,104,1,104,3,104,1966,
        8,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,3,104,1976,
        8,104,1,105,3,105,1979,8,105,1,105,3,105,1982,8,105,1,105,1,105,
        3,105,1986,8,105,1,105,3,105,1989,8,105,1,105,3,105,1992,8,105,1,
        106,1,106,3,106,1996,8,106,1,106,1,106,3,106,2000,8,106,1,106,1,
        106,3,106,2004,8,106,1,106,1,106,3,106,2008,8,106,1,106,1,106,3,
        106,2012,8,106,1,106,1,106,3,106,2016,8,106,3,106,2018,8,106,1,106,
        3,106,2021,8,106,1,106,1,106,3,106,2025,8,106,1,106,1,106,3,106,
        2029,8,106,1,106,1,106,3,106,2033,8,106,1,106,1,106,3,106,2037,8,
        106,3,106,2039,8,106,1,106,1,106,1,107,1,107,3,107,2045,8,107,1,
        107,3,107,2048,8,107,1,107,3,107,2051,8,107,1,107,1,107,1,108,1,
        108,1,109,1,109,1,110,1,110,1,111,1,111,1,112,1,112,1,113,1,113,
        1,113,1,113,1,113,5,113,2070,8,113,10,113,12,113,2073,9,113,1,114,
        1,114,1,114,1,114,1,114,5,114,2080,8,114,10,114,12,114,2083,9,114,
        1,115,1,115,1,115,1,115,1,115,5,115,2090,8,115,10,115,12,115,2093,
        9,115,1,116,1,116,3,116,2097,8,116,5,116,2099,8,116,10,116,12,116,
        2102,9,116,1,116,1,116,1,117,1,117,3,117,2108,8,117,1,117,1,117,
        3,117,2112,8,117,1,117,1,117,3,117,2116,8,117,1,117,1,117,3,117,
        2120,8,117,1,117,1,117,3,117,2124,8,117,1,117,1,117,1,117,1,117,
        1,117,1,117,3,117,2132,8,117,1,117,1,117,3,117,2136,8,117,1,117,
        1,117,3,117,2140,8,117,1,117,1,117,3,117,2144,8,117,1,117,1,117,
        4,117,2148,8,117,11,117,12,117,2149,1,117,1,117,3,117,2154,8,117,
        1,118,1,118,1,119,1,119,3,119,2160,8,119,1,119,1,119,3,119,2164,
        8,119,1,119,5,119,2167,8,119,10,119,12,119,2170,9,119,1,120,1,120,
        3,120,2174,8,120,1,120,1,120,3,120,2178,8,120,1,120,5,120,2181,8,
        120,10,120,12,120,2184,9,120,1,121,1,121,3,121,2188,8,121,1,121,
        1,121,3,121,2192,8,121,1,121,1,121,5,121,2196,8,121,10,121,12,121,
        2199,9,121,1,122,1,122,1,123,1,123,3,123,2205,8,123,1,123,1,123,
        3,123,2209,8,123,1,123,1,123,5,123,2213,8,123,10,123,12,123,2216,
        9,123,1,124,1,124,1,125,1,125,3,125,2222,8,125,1,125,1,125,3,125,
        2226,8,125,1,125,1,125,5,125,2230,8,125,10,125,12,125,2233,9,125,
        1,126,1,126,1,127,1,127,3,127,2239,8,127,1,127,1,127,3,127,2243,
        8,127,1,127,5,127,2246,8,127,10,127,12,127,2249,9,127,1,128,1,128,
        3,128,2253,8,128,5,128,2255,8,128,10,128,12,128,2258,9,128,1,128,
        1,128,3,128,2262,8,128,1,128,3,128,2265,8,128,1,129,1,129,1,129,
        4,129,2270,8,129,11,129,12,129,2271,1,129,3,129,2275,8,129,1,130,
        1,130,1,130,3,130,2280,8,130,1,130,1,130,1,130,1,130,1,130,1,130,
        1,130,3,130,2289,8,130,1,130,1,130,3,130,2293,8,130,1,130,3,130,
        2296,8,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,3,131,2309,8,131,1,131,3,131,2312,8,131,1,131,1,131,
        1,132,3,132,2317,8,132,1,132,1,132,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,3,133,2331,8,133,1,134,1,134,3,134,
        2335,8,134,1,134,5,134,2338,8,134,10,134,12,134,2341,9,134,1,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,3,135,2352,8,135,
        1,136,1,136,3,136,2356,8,136,1,136,1,136,3,136,2360,8,136,1,136,
        1,136,3,136,2364,8,136,1,136,1,136,1,136,1,136,3,136,2370,8,136,
        1,136,1,136,3,136,2374,8,136,1,136,1,136,3,136,2378,8,136,1,136,
        1,136,1,136,1,136,3,136,2384,8,136,1,136,1,136,3,136,2388,8,136,
        1,136,1,136,3,136,2392,8,136,1,136,1,136,1,136,1,136,3,136,2398,
        8,136,1,136,1,136,3,136,2402,8,136,1,136,1,136,3,136,2406,8,136,
        1,136,1,136,3,136,2410,8,136,1,137,1,137,1,137,1,137,1,138,1,138,
        1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,139,1,139,3,139,
        2428,8,139,1,140,1,140,1,141,1,141,3,141,2434,8,141,1,141,1,141,
        3,141,2438,8,141,1,141,1,141,3,141,2442,8,141,5,141,2444,8,141,10,
        141,12,141,2447,9,141,3,141,2449,8,141,1,141,1,141,1,142,1,142,3,
        142,2455,8,142,1,142,3,142,2458,8,142,1,143,1,143,3,143,2462,8,143,
        1,143,1,143,3,143,2466,8,143,1,143,1,143,3,143,2470,8,143,1,143,
        1,143,3,143,2474,8,143,5,143,2476,8,143,10,143,12,143,2479,9,143,
        1,143,1,143,1,144,1,144,3,144,2485,8,144,1,144,3,144,2488,8,144,
        1,144,1,144,3,144,2492,8,144,1,144,1,144,1,145,1,145,3,145,2498,
        8,145,1,145,1,145,3,145,2502,8,145,1,145,1,145,1,146,1,146,3,146,
        2508,8,146,1,146,1,146,3,146,2512,8,146,1,146,1,146,3,146,2516,8,
        146,1,146,1,146,1,146,3,146,2521,8,146,1,146,1,146,3,146,2525,8,
        146,1,146,1,146,3,146,2529,8,146,1,146,1,146,3,146,2533,8,146,1,
        146,1,146,1,146,3,146,2538,8,146,1,146,3,146,2541,8,146,1,146,3,
        146,2544,8,146,1,146,1,146,1,146,1,146,3,146,2550,8,146,1,146,1,
        146,3,146,2554,8,146,1,146,1,146,3,146,2558,8,146,3,146,2560,8,146,
        1,146,1,146,3,146,2564,8,146,1,146,1,146,3,146,2568,8,146,1,146,
        1,146,3,146,2572,8,146,5,146,2574,8,146,10,146,12,146,2577,9,146,
        3,146,2579,8,146,1,146,1,146,3,146,2583,8,146,1,147,1,147,1,148,
        1,148,3,148,2589,8,148,1,148,1,148,1,148,3,148,2594,8,148,3,148,
        2596,8,148,1,148,1,148,3,148,2600,8,148,1,149,1,149,3,149,2604,8,
        149,1,149,1,149,1,149,3,149,2609,8,149,1,149,1,149,3,149,2613,8,
        149,1,150,1,150,1,150,3,150,2618,8,150,1,150,1,150,3,150,2622,8,
        150,1,150,1,150,3,150,2626,8,150,1,150,1,150,3,150,2630,8,150,5,
        150,2632,8,150,10,150,12,150,2635,9,150,1,150,1,150,3,150,2639,8,
        150,1,151,1,151,3,151,2643,8,151,1,151,4,151,2646,8,151,11,151,12,
        151,2647,1,152,1,152,3,152,2652,8,152,1,152,1,152,3,152,2656,8,152,
        1,152,1,152,3,152,2660,8,152,1,152,1,152,3,152,2664,8,152,1,152,
        3,152,2667,8,152,1,152,3,152,2670,8,152,1,152,3,152,2673,8,152,1,
        152,3,152,2676,8,152,1,152,1,152,1,153,1,153,3,153,2682,8,153,1,
        153,1,153,3,153,2686,8,153,1,154,1,154,3,154,2690,8,154,1,154,4,
        154,2693,8,154,11,154,12,154,2694,1,154,1,154,3,154,2699,8,154,1,
        154,1,154,3,154,2703,8,154,1,154,4,154,2706,8,154,11,154,12,154,
        2707,3,154,2710,8,154,1,154,3,154,2713,8,154,1,154,1,154,3,154,2717,
        8,154,1,154,3,154,2720,8,154,1,154,3,154,2723,8,154,1,154,1,154,
        1,155,1,155,3,155,2729,8,155,1,155,1,155,3,155,2733,8,155,1,155,
        1,155,3,155,2737,8,155,1,155,1,155,1,156,1,156,1,157,1,157,3,157,
        2745,8,157,1,158,1,158,1,158,3,158,2750,8,158,1,159,1,159,3,159,
        2754,8,159,1,159,1,159,1,160,1,160,1,161,1,161,1,162,1,162,1,163,
        1,163,1,164,1,164,1,164,1,164,1,164,3,164,2771,8,164,1,165,1,165,
        1,166,1,166,1,167,1,167,1,168,1,168,1,168,0,2,96,146,169,0,2,4,6,
        8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
        52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
        96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,
        130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,
        162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,
        194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,
        226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,
        258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,
        290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,
        322,324,326,328,330,332,334,336,0,13,2,0,130,130,135,135,2,0,53,
        54,75,76,2,0,6,6,13,17,1,0,19,20,2,0,21,21,157,157,2,0,22,23,154,
        154,2,0,87,87,140,140,2,0,68,68,83,83,1,0,169,170,30,0,48,48,50,
        50,52,52,55,58,61,61,63,64,66,68,70,71,74,74,77,77,79,79,84,86,88,
        88,90,90,94,95,97,97,99,99,101,104,106,109,111,112,123,128,130,131,
        133,133,137,137,139,139,141,141,144,144,148,148,152,153,155,155,
        2,0,14,14,27,30,2,0,16,16,31,34,2,0,35,45,157,157,3154,0,338,1,0,
        0,0,2,358,1,0,0,0,4,390,1,0,0,0,6,392,1,0,0,0,8,423,1,0,0,0,10,466,
        1,0,0,0,12,468,1,0,0,0,14,498,1,0,0,0,16,528,1,0,0,0,18,548,1,0,
        0,0,20,554,1,0,0,0,22,605,1,0,0,0,24,607,1,0,0,0,26,621,1,0,0,0,
        28,625,1,0,0,0,30,644,1,0,0,0,32,646,1,0,0,0,34,658,1,0,0,0,36,701,
        1,0,0,0,38,715,1,0,0,0,40,759,1,0,0,0,42,761,1,0,0,0,44,767,1,0,
        0,0,46,802,1,0,0,0,48,866,1,0,0,0,50,880,1,0,0,0,52,888,1,0,0,0,
        54,905,1,0,0,0,56,922,1,0,0,0,58,924,1,0,0,0,60,944,1,0,0,0,62,955,
        1,0,0,0,64,957,1,0,0,0,66,970,1,0,0,0,68,974,1,0,0,0,70,978,1,0,
        0,0,72,989,1,0,0,0,74,1001,1,0,0,0,76,1003,1,0,0,0,78,1017,1,0,0,
        0,80,1021,1,0,0,0,82,1030,1,0,0,0,84,1036,1,0,0,0,86,1044,1,0,0,
        0,88,1058,1,0,0,0,90,1062,1,0,0,0,92,1076,1,0,0,0,94,1087,1,0,0,
        0,96,1177,1,0,0,0,98,1186,1,0,0,0,100,1193,1,0,0,0,102,1201,1,0,
        0,0,104,1203,1,0,0,0,106,1208,1,0,0,0,108,1223,1,0,0,0,110,1227,
        1,0,0,0,112,1229,1,0,0,0,114,1239,1,0,0,0,116,1248,1,0,0,0,118,1271,
        1,0,0,0,120,1285,1,0,0,0,122,1289,1,0,0,0,124,1326,1,0,0,0,126,1332,
        1,0,0,0,128,1344,1,0,0,0,130,1362,1,0,0,0,132,1368,1,0,0,0,134,1370,
        1,0,0,0,136,1420,1,0,0,0,138,1424,1,0,0,0,140,1438,1,0,0,0,142,1457,
        1,0,0,0,144,1472,1,0,0,0,146,1488,1,0,0,0,148,1509,1,0,0,0,150,1519,
        1,0,0,0,152,1525,1,0,0,0,154,1547,1,0,0,0,156,1549,1,0,0,0,158,1567,
        1,0,0,0,160,1579,1,0,0,0,162,1599,1,0,0,0,164,1607,1,0,0,0,166,1614,
        1,0,0,0,168,1658,1,0,0,0,170,1667,1,0,0,0,172,1669,1,0,0,0,174,1684,
        1,0,0,0,176,1688,1,0,0,0,178,1692,1,0,0,0,180,1699,1,0,0,0,182,1703,
        1,0,0,0,184,1728,1,0,0,0,186,1730,1,0,0,0,188,1746,1,0,0,0,190,1748,
        1,0,0,0,192,1772,1,0,0,0,194,1822,1,0,0,0,196,1824,1,0,0,0,198,1854,
        1,0,0,0,200,1895,1,0,0,0,202,1916,1,0,0,0,204,1926,1,0,0,0,206,1932,
        1,0,0,0,208,1975,1,0,0,0,210,1991,1,0,0,0,212,1993,1,0,0,0,214,2042,
        1,0,0,0,216,2054,1,0,0,0,218,2056,1,0,0,0,220,2058,1,0,0,0,222,2060,
        1,0,0,0,224,2062,1,0,0,0,226,2064,1,0,0,0,228,2074,1,0,0,0,230,2084,
        1,0,0,0,232,2100,1,0,0,0,234,2153,1,0,0,0,236,2155,1,0,0,0,238,2157,
        1,0,0,0,240,2171,1,0,0,0,242,2185,1,0,0,0,244,2200,1,0,0,0,246,2202,
        1,0,0,0,248,2217,1,0,0,0,250,2219,1,0,0,0,252,2234,1,0,0,0,254,2236,
        1,0,0,0,256,2256,1,0,0,0,258,2266,1,0,0,0,260,2295,1,0,0,0,262,2308,
        1,0,0,0,264,2316,1,0,0,0,266,2330,1,0,0,0,268,2332,1,0,0,0,270,2351,
        1,0,0,0,272,2409,1,0,0,0,274,2411,1,0,0,0,276,2415,1,0,0,0,278,2427,
        1,0,0,0,280,2429,1,0,0,0,282,2431,1,0,0,0,284,2452,1,0,0,0,286,2459,
        1,0,0,0,288,2484,1,0,0,0,290,2495,1,0,0,0,292,2582,1,0,0,0,294,2584,
        1,0,0,0,296,2599,1,0,0,0,298,2601,1,0,0,0,300,2638,1,0,0,0,302,2640,
        1,0,0,0,304,2649,1,0,0,0,306,2679,1,0,0,0,308,2709,1,0,0,0,310,2726,
        1,0,0,0,312,2740,1,0,0,0,314,2744,1,0,0,0,316,2746,1,0,0,0,318,2751,
        1,0,0,0,320,2757,1,0,0,0,322,2759,1,0,0,0,324,2761,1,0,0,0,326,2763,
        1,0,0,0,328,2770,1,0,0,0,330,2772,1,0,0,0,332,2774,1,0,0,0,334,2776,
        1,0,0,0,336,2778,1,0,0,0,338,349,3,2,1,0,339,341,5,175,0,0,340,339,
        1,0,0,0,340,341,1,0,0,0,341,342,1,0,0,0,342,344,5,1,0,0,343,345,
        5,175,0,0,344,343,1,0,0,0,344,345,1,0,0,0,345,346,1,0,0,0,346,348,
        3,2,1,0,347,340,1,0,0,0,348,351,1,0,0,0,349,347,1,0,0,0,349,350,
        1,0,0,0,350,353,1,0,0,0,351,349,1,0,0,0,352,354,5,175,0,0,353,352,
        1,0,0,0,353,354,1,0,0,0,354,355,1,0,0,0,355,356,5,0,0,1,356,1,1,
        0,0,0,357,359,3,102,51,0,358,357,1,0,0,0,358,359,1,0,0,0,359,361,
        1,0,0,0,360,362,5,175,0,0,361,360,1,0,0,0,361,362,1,0,0,0,362,363,
        1,0,0,0,363,368,3,4,2,0,364,366,5,175,0,0,365,364,1,0,0,0,365,366,
        1,0,0,0,366,367,1,0,0,0,367,369,5,1,0,0,368,365,1,0,0,0,368,369,
        1,0,0,0,369,3,1,0,0,0,370,391,3,116,58,0,371,391,3,44,22,0,372,391,
        3,46,23,0,373,391,3,52,26,0,374,391,3,54,27,0,375,391,3,70,35,0,
        376,391,3,72,36,0,377,391,3,6,3,0,378,391,3,12,6,0,379,391,3,14,
        7,0,380,391,3,30,15,0,381,391,3,34,17,0,382,391,3,32,16,0,383,391,
        3,108,54,0,384,391,3,110,55,0,385,391,3,16,8,0,386,391,3,18,9,0,
        387,391,3,20,10,0,388,391,3,26,13,0,389,391,3,28,14,0,390,370,1,
        0,0,0,390,371,1,0,0,0,390,372,1,0,0,0,390,373,1,0,0,0,390,374,1,
        0,0,0,390,375,1,0,0,0,390,376,1,0,0,0,390,377,1,0,0,0,390,378,1,
        0,0,0,390,379,1,0,0,0,390,380,1,0,0,0,390,381,1,0,0,0,390,382,1,
        0,0,0,390,383,1,0,0,0,390,384,1,0,0,0,390,385,1,0,0,0,390,386,1,
        0,0,0,390,387,1,0,0,0,390,388,1,0,0,0,390,389,1,0,0,0,391,5,1,0,
        0,0,392,393,5,67,0,0,393,394,5,175,0,0,394,403,3,326,163,0,395,397,
        5,175,0,0,396,395,1,0,0,0,396,397,1,0,0,0,397,398,1,0,0,0,398,400,
        3,8,4,0,399,401,5,175,0,0,400,399,1,0,0,0,400,401,1,0,0,0,401,404,
        1,0,0,0,402,404,5,175,0,0,403,396,1,0,0,0,403,402,1,0,0,0,404,405,
        1,0,0,0,405,406,5,88,0,0,406,407,5,175,0,0,407,421,3,10,5,0,408,
        410,5,175,0,0,409,408,1,0,0,0,409,410,1,0,0,0,410,411,1,0,0,0,411,
        413,5,2,0,0,412,414,5,175,0,0,413,412,1,0,0,0,413,414,1,0,0,0,414,
        415,1,0,0,0,415,417,3,24,12,0,416,418,5,175,0,0,417,416,1,0,0,0,
        417,418,1,0,0,0,418,419,1,0,0,0,419,420,5,3,0,0,420,422,1,0,0,0,
        421,409,1,0,0,0,421,422,1,0,0,0,422,7,1,0,0,0,423,425,5,2,0,0,424,
        426,5,175,0,0,425,424,1,0,0,0,425,426,1,0,0,0,426,427,1,0,0,0,427,
        438,3,326,163,0,428,430,5,175,0,0,429,428,1,0,0,0,429,430,1,0,0,
        0,430,431,1,0,0,0,431,433,5,4,0,0,432,434,5,175,0,0,433,432,1,0,
        0,0,433,434,1,0,0,0,434,435,1,0,0,0,435,437,3,326,163,0,436,429,
        1,0,0,0,437,440,1,0,0,0,438,436,1,0,0,0,438,439,1,0,0,0,439,442,
        1,0,0,0,440,438,1,0,0,0,441,443,5,175,0,0,442,441,1,0,0,0,442,443,
        1,0,0,0,443,444,1,0,0,0,444,445,5,3,0,0,445,9,1,0,0,0,446,467,3,
        40,20,0,447,449,5,2,0,0,448,450,5,175,0,0,449,448,1,0,0,0,449,450,
        1,0,0,0,450,451,1,0,0,0,451,453,3,116,58,0,452,454,5,175,0,0,453,
        452,1,0,0,0,453,454,1,0,0,0,454,455,1,0,0,0,455,456,5,3,0,0,456,
        467,1,0,0,0,457,467,3,312,156,0,458,459,3,312,156,0,459,461,5,5,
        0,0,460,462,5,175,0,0,461,460,1,0,0,0,461,462,1,0,0,0,462,463,1,
        0,0,0,463,464,3,326,163,0,464,467,1,0,0,0,465,467,3,292,146,0,466,
        446,1,0,0,0,466,447,1,0,0,0,466,457,1,0,0,0,466,458,1,0,0,0,466,
        465,1,0,0,0,467,11,1,0,0,0,468,469,5,67,0,0,469,470,5,175,0,0,470,
        471,3,326,163,0,471,472,5,175,0,0,472,473,5,88,0,0,473,474,5,175,
        0,0,474,476,5,2,0,0,475,477,5,175,0,0,476,475,1,0,0,0,476,477,1,
        0,0,0,477,478,1,0,0,0,478,489,5,160,0,0,479,481,5,175,0,0,480,479,
        1,0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,484,5,4,0,0,483,485,
        5,175,0,0,484,483,1,0,0,0,484,485,1,0,0,0,485,486,1,0,0,0,486,488,
        5,160,0,0,487,480,1,0,0,0,488,491,1,0,0,0,489,487,1,0,0,0,489,490,
        1,0,0,0,490,492,1,0,0,0,491,489,1,0,0,0,492,493,5,3,0,0,493,494,
        5,175,0,0,494,495,5,57,0,0,495,496,5,175,0,0,496,497,5,62,0,0,497,
        13,1,0,0,0,498,499,5,67,0,0,499,500,5,175,0,0,500,502,5,2,0,0,501,
        503,5,175,0,0,502,501,1,0,0,0,502,503,1,0,0,0,503,504,1,0,0,0,504,
        506,3,116,58,0,505,507,5,175,0,0,506,505,1,0,0,0,506,507,1,0,0,0,
        507,508,1,0,0,0,508,509,5,3,0,0,509,510,5,175,0,0,510,511,5,137,
        0,0,511,512,5,175,0,0,512,526,5,160,0,0,513,515,5,175,0,0,514,513,
        1,0,0,0,514,515,1,0,0,0,515,516,1,0,0,0,516,518,5,2,0,0,517,519,
        5,175,0,0,518,517,1,0,0,0,518,519,1,0,0,0,519,520,1,0,0,0,520,522,
        3,24,12,0,521,523,5,175,0,0,522,521,1,0,0,0,522,523,1,0,0,0,523,
        524,1,0,0,0,524,525,5,3,0,0,525,527,1,0,0,0,526,514,1,0,0,0,526,
        527,1,0,0,0,527,15,1,0,0,0,528,529,5,85,0,0,529,530,5,175,0,0,530,
        531,5,71,0,0,531,532,5,175,0,0,532,546,5,160,0,0,533,535,5,175,0,
        0,534,533,1,0,0,0,534,535,1,0,0,0,535,536,1,0,0,0,536,538,5,2,0,
        0,537,539,5,175,0,0,538,537,1,0,0,0,538,539,1,0,0,0,539,540,1,0,
        0,0,540,542,3,24,12,0,541,543,5,175,0,0,542,541,1,0,0,0,542,543,
        1,0,0,0,543,544,1,0,0,0,544,545,5,3,0,0,545,547,1,0,0,0,546,534,
        1,0,0,0,546,547,1,0,0,0,547,17,1,0,0,0,548,549,5,94,0,0,549,550,
        5,175,0,0,550,551,5,71,0,0,551,552,5,175,0,0,552,553,5,160,0,0,553,
        19,1,0,0,0,554,555,5,55,0,0,555,556,5,175,0,0,556,561,5,160,0,0,
        557,558,5,175,0,0,558,559,5,52,0,0,559,560,5,175,0,0,560,562,3,326,
        163,0,561,557,1,0,0,0,561,562,1,0,0,0,562,563,1,0,0,0,563,564,5,
        175,0,0,564,566,5,2,0,0,565,567,5,175,0,0,566,565,1,0,0,0,566,567,
        1,0,0,0,567,568,1,0,0,0,568,569,5,72,0,0,569,570,5,175,0,0,570,579,
        3,328,164,0,571,573,5,175,0,0,572,571,1,0,0,0,572,573,1,0,0,0,573,
        574,1,0,0,0,574,576,5,4,0,0,575,577,5,175,0,0,576,575,1,0,0,0,576,
        577,1,0,0,0,577,578,1,0,0,0,578,580,3,24,12,0,579,572,1,0,0,0,579,
        580,1,0,0,0,580,582,1,0,0,0,581,583,5,175,0,0,582,581,1,0,0,0,582,
        583,1,0,0,0,583,584,1,0,0,0,584,585,5,3,0,0,585,21,1,0,0,0,586,600,
        3,328,164,0,587,589,5,175,0,0,588,587,1,0,0,0,588,589,1,0,0,0,589,
        590,1,0,0,0,590,592,5,6,0,0,591,593,5,175,0,0,592,591,1,0,0,0,592,
        593,1,0,0,0,593,601,1,0,0,0,594,596,5,175,0,0,595,594,1,0,0,0,596,
        599,1,0,0,0,597,595,1,0,0,0,597,598,1,0,0,0,598,601,1,0,0,0,599,
        597,1,0,0,0,600,588,1,0,0,0,600,597,1,0,0,0,601,602,1,0,0,0,602,
        603,3,278,139,0,603,606,1,0,0,0,604,606,3,328,164,0,605,586,1,0,
        0,0,605,604,1,0,0,0,606,23,1,0,0,0,607,618,3,22,11,0,608,610,5,175,
        0,0,609,608,1,0,0,0,609,610,1,0,0,0,610,611,1,0,0,0,611,613,5,4,
        0,0,612,614,5,175,0,0,613,612,1,0,0,0,613,614,1,0,0,0,614,615,1,
        0,0,0,615,617,3,22,11,0,616,609,1,0,0,0,617,620,1,0,0,0,618,616,
        1,0,0,0,618,619,1,0,0,0,619,25,1,0,0,0,620,618,1,0,0,0,621,622,5,
        77,0,0,622,623,5,175,0,0,623,624,3,326,163,0,624,27,1,0,0,0,625,
        626,5,144,0,0,626,627,5,175,0,0,627,628,3,326,163,0,628,29,1,0,0,
        0,629,630,5,58,0,0,630,631,5,175,0,0,631,633,3,328,164,0,632,634,
        5,175,0,0,633,632,1,0,0,0,633,634,1,0,0,0,634,635,1,0,0,0,635,637,
        5,6,0,0,636,638,5,175,0,0,637,636,1,0,0,0,637,638,1,0,0,0,638,639,
        1,0,0,0,639,640,3,224,112,0,640,645,1,0,0,0,641,642,5,58,0,0,642,
        643,5,175,0,0,643,645,3,292,146,0,644,629,1,0,0,0,644,641,1,0,0,
        0,645,31,1,0,0,0,646,647,5,63,0,0,647,648,5,175,0,0,648,649,5,116,
        0,0,649,650,5,175,0,0,650,651,5,135,0,0,651,652,5,175,0,0,652,653,
        3,326,163,0,653,654,5,175,0,0,654,655,5,99,0,0,655,656,5,175,0,0,
        656,657,5,160,0,0,657,33,1,0,0,0,658,659,5,69,0,0,659,660,5,175,
        0,0,660,661,5,105,0,0,661,662,5,175,0,0,662,664,3,294,147,0,663,
        665,5,175,0,0,664,663,1,0,0,0,664,665,1,0,0,0,665,666,1,0,0,0,666,
        668,5,2,0,0,667,669,5,175,0,0,668,667,1,0,0,0,668,669,1,0,0,0,669,
        671,1,0,0,0,670,672,3,36,18,0,671,670,1,0,0,0,671,672,1,0,0,0,672,
        674,1,0,0,0,673,675,5,175,0,0,674,673,1,0,0,0,674,675,1,0,0,0,675,
        677,1,0,0,0,676,678,3,38,19,0,677,676,1,0,0,0,677,678,1,0,0,0,678,
        689,1,0,0,0,679,681,5,175,0,0,680,679,1,0,0,0,680,681,1,0,0,0,681,
        682,1,0,0,0,682,684,5,4,0,0,683,685,5,175,0,0,684,683,1,0,0,0,684,
        685,1,0,0,0,685,686,1,0,0,0,686,688,3,38,19,0,687,680,1,0,0,0,688,
        691,1,0,0,0,689,687,1,0,0,0,689,690,1,0,0,0,690,693,1,0,0,0,691,
        689,1,0,0,0,692,694,5,175,0,0,693,692,1,0,0,0,693,694,1,0,0,0,694,
        695,1,0,0,0,695,696,5,3,0,0,696,697,5,175,0,0,697,698,5,52,0,0,698,
        699,5,175,0,0,699,700,3,224,112,0,700,35,1,0,0,0,701,712,3,328,164,
        0,702,704,5,175,0,0,703,702,1,0,0,0,703,704,1,0,0,0,704,705,1,0,
        0,0,705,707,5,4,0,0,706,708,5,175,0,0,707,706,1,0,0,0,707,708,1,
        0,0,0,708,709,1,0,0,0,709,711,3,328,164,0,710,703,1,0,0,0,711,714,
        1,0,0,0,712,710,1,0,0,0,712,713,1,0,0,0,713,37,1,0,0,0,714,712,1,
        0,0,0,715,717,3,328,164,0,716,718,5,175,0,0,717,716,1,0,0,0,717,
        718,1,0,0,0,718,719,1,0,0,0,719,720,5,159,0,0,720,722,5,6,0,0,721,
        723,5,175,0,0,722,721,1,0,0,0,722,723,1,0,0,0,723,724,1,0,0,0,724,
        725,3,278,139,0,725,39,1,0,0,0,726,728,5,7,0,0,727,729,5,175,0,0,
        728,727,1,0,0,0,728,729,1,0,0,0,729,730,1,0,0,0,730,741,5,160,0,
        0,731,733,5,175,0,0,732,731,1,0,0,0,732,733,1,0,0,0,733,734,1,0,
        0,0,734,736,5,4,0,0,735,737,5,175,0,0,736,735,1,0,0,0,736,737,1,
        0,0,0,737,738,1,0,0,0,738,740,5,160,0,0,739,732,1,0,0,0,740,743,
        1,0,0,0,741,739,1,0,0,0,741,742,1,0,0,0,742,744,1,0,0,0,743,741,
        1,0,0,0,744,760,5,8,0,0,745,760,5,160,0,0,746,748,5,89,0,0,747,749,
        5,175,0,0,748,747,1,0,0,0,748,749,1,0,0,0,749,750,1,0,0,0,750,752,
        5,2,0,0,751,753,5,175,0,0,752,751,1,0,0,0,752,753,1,0,0,0,753,754,
        1,0,0,0,754,756,5,160,0,0,755,757,5,175,0,0,756,755,1,0,0,0,756,
        757,1,0,0,0,757,758,1,0,0,0,758,760,5,3,0,0,759,726,1,0,0,0,759,
        745,1,0,0,0,759,746,1,0,0,0,760,41,1,0,0,0,761,762,5,95,0,0,762,
        763,5,175,0,0,763,764,5,113,0,0,764,765,5,175,0,0,765,766,5,83,0,
        0,766,43,1,0,0,0,767,768,5,69,0,0,768,769,5,175,0,0,769,770,5,112,
        0,0,770,771,5,175,0,0,771,772,5,135,0,0,772,776,5,175,0,0,773,774,
        3,42,21,0,774,775,5,175,0,0,775,777,1,0,0,0,776,773,1,0,0,0,776,
        777,1,0,0,0,777,778,1,0,0,0,778,780,3,326,163,0,779,781,5,175,0,
        0,780,779,1,0,0,0,780,781,1,0,0,0,781,782,1,0,0,0,782,784,5,2,0,
        0,783,785,5,175,0,0,784,783,1,0,0,0,784,785,1,0,0,0,785,786,1,0,
        0,0,786,788,3,90,45,0,787,789,5,175,0,0,788,787,1,0,0,0,788,789,
        1,0,0,0,789,795,1,0,0,0,790,792,5,4,0,0,791,793,5,175,0,0,792,791,
        1,0,0,0,792,793,1,0,0,0,793,794,1,0,0,0,794,796,3,94,47,0,795,790,
        1,0,0,0,795,796,1,0,0,0,796,798,1,0,0,0,797,799,5,175,0,0,798,797,
        1,0,0,0,798,799,1,0,0,0,799,800,1,0,0,0,800,801,5,3,0,0,801,45,1,
        0,0,0,802,803,5,69,0,0,803,804,5,175,0,0,804,805,5,125,0,0,805,806,
        5,175,0,0,806,809,5,135,0,0,807,808,5,175,0,0,808,810,5,91,0,0,809,
        807,1,0,0,0,809,810,1,0,0,0,810,813,1,0,0,0,811,812,5,175,0,0,812,
        814,3,42,21,0,813,811,1,0,0,0,813,814,1,0,0,0,814,815,1,0,0,0,815,
        816,5,175,0,0,816,818,3,326,163,0,817,819,5,175,0,0,818,817,1,0,
        0,0,818,819,1,0,0,0,819,820,1,0,0,0,820,822,5,2,0,0,821,823,5,175,
        0,0,822,821,1,0,0,0,822,823,1,0,0,0,823,824,1,0,0,0,824,826,3,48,
        24,0,825,827,5,175,0,0,826,825,1,0,0,0,826,827,1,0,0,0,827,836,1,
        0,0,0,828,830,5,4,0,0,829,831,5,175,0,0,830,829,1,0,0,0,830,831,
        1,0,0,0,831,832,1,0,0,0,832,834,3,90,45,0,833,835,5,175,0,0,834,
        833,1,0,0,0,834,835,1,0,0,0,835,837,1,0,0,0,836,828,1,0,0,0,836,
        837,1,0,0,0,837,846,1,0,0,0,838,840,5,4,0,0,839,841,5,175,0,0,840,
        839,1,0,0,0,840,841,1,0,0,0,841,842,1,0,0,0,842,844,3,328,164,0,
        843,845,5,175,0,0,844,843,1,0,0,0,844,845,1,0,0,0,845,847,1,0,0,
        0,846,838,1,0,0,0,846,847,1,0,0,0,847,848,1,0,0,0,848,864,5,3,0,
        0,849,850,5,175,0,0,850,852,5,147,0,0,851,853,5,175,0,0,852,851,
        1,0,0,0,852,853,1,0,0,0,853,854,1,0,0,0,854,856,5,2,0,0,855,857,
        5,175,0,0,856,855,1,0,0,0,856,857,1,0,0,0,857,858,1,0,0,0,858,860,
        3,24,12,0,859,861,5,175,0,0,860,859,1,0,0,0,860,861,1,0,0,0,861,
        862,1,0,0,0,862,863,5,3,0,0,863,865,1,0,0,0,864,849,1,0,0,0,864,
        865,1,0,0,0,865,47,1,0,0,0,866,877,3,50,25,0,867,869,5,175,0,0,868,
        867,1,0,0,0,868,869,1,0,0,0,869,870,1,0,0,0,870,872,5,4,0,0,871,
        873,5,175,0,0,872,871,1,0,0,0,872,873,1,0,0,0,873,874,1,0,0,0,874,
        876,3,50,25,0,875,868,1,0,0,0,876,879,1,0,0,0,877,875,1,0,0,0,877,
        878,1,0,0,0,878,49,1,0,0,0,879,877,1,0,0,0,880,881,5,88,0,0,881,
        882,5,175,0,0,882,883,3,326,163,0,883,884,5,175,0,0,884,885,5,137,
        0,0,885,886,5,175,0,0,886,887,3,326,163,0,887,51,1,0,0,0,888,889,
        5,69,0,0,889,890,5,175,0,0,890,891,5,130,0,0,891,895,5,175,0,0,892,
        893,3,42,21,0,893,894,5,175,0,0,894,896,1,0,0,0,895,892,1,0,0,0,
        895,896,1,0,0,0,896,897,1,0,0,0,897,902,3,326,163,0,898,899,5,175,
        0,0,899,901,3,56,28,0,900,898,1,0,0,0,901,904,1,0,0,0,902,900,1,
        0,0,0,902,903,1,0,0,0,903,53,1,0,0,0,904,902,1,0,0,0,905,906,5,69,
        0,0,906,907,5,175,0,0,907,908,5,141,0,0,908,909,5,175,0,0,909,910,
        3,326,163,0,910,911,5,175,0,0,911,912,5,52,0,0,912,913,5,175,0,0,
        913,915,3,96,48,0,914,916,5,175,0,0,915,914,1,0,0,0,915,916,1,0,
        0,0,916,55,1,0,0,0,917,923,3,58,29,0,918,923,3,60,30,0,919,923,3,
        62,31,0,920,923,3,64,32,0,921,923,3,66,33,0,922,917,1,0,0,0,922,
        918,1,0,0,0,922,919,1,0,0,0,922,920,1,0,0,0,922,921,1,0,0,0,923,
        57,1,0,0,0,924,925,5,97,0,0,925,928,5,175,0,0,926,927,5,57,0,0,927,
        929,5,175,0,0,928,926,1,0,0,0,928,929,1,0,0,0,929,931,1,0,0,0,930,
        932,5,157,0,0,931,930,1,0,0,0,931,932,1,0,0,0,932,933,1,0,0,0,933,
        934,3,322,161,0,934,59,1,0,0,0,935,936,5,111,0,0,936,937,5,175,0,
        0,937,945,5,109,0,0,938,939,5,109,0,0,939,941,5,175,0,0,940,942,
        5,157,0,0,941,940,1,0,0,0,941,942,1,0,0,0,942,943,1,0,0,0,943,945,
        3,322,161,0,944,935,1,0,0,0,944,938,1,0,0,0,945,61,1,0,0,0,946,947,
        5,111,0,0,947,948,5,175,0,0,948,956,5,107,0,0,949,950,5,107,0,0,
        950,952,5,175,0,0,951,953,5,157,0,0,952,951,1,0,0,0,952,953,1,0,
        0,0,953,954,1,0,0,0,954,956,3,322,161,0,955,946,1,0,0,0,955,949,
        1,0,0,0,956,63,1,0,0,0,957,958,5,133,0,0,958,961,5,175,0,0,959,960,
        5,147,0,0,960,962,5,175,0,0,961,959,1,0,0,0,961,962,1,0,0,0,962,
        964,1,0,0,0,963,965,5,157,0,0,964,963,1,0,0,0,964,965,1,0,0,0,965,
        966,1,0,0,0,966,967,3,322,161,0,967,65,1,0,0,0,968,969,5,111,0,0,
        969,971,5,175,0,0,970,968,1,0,0,0,970,971,1,0,0,0,971,972,1,0,0,
        0,972,973,5,70,0,0,973,67,1,0,0,0,974,975,5,95,0,0,975,976,5,175,
        0,0,976,977,5,83,0,0,977,69,1,0,0,0,978,979,5,79,0,0,979,980,5,175,
        0,0,980,981,7,0,0,0,981,985,5,175,0,0,982,983,3,68,34,0,983,984,
        5,175,0,0,984,986,1,0,0,0,985,982,1,0,0,0,985,986,1,0,0,0,986,987,
        1,0,0,0,987,988,3,326,163,0,988,71,1,0,0,0,989,990,5,50,0,0,990,
        991,5,175,0,0,991,992,5,135,0,0,992,993,5,175,0,0,993,994,3,326,
        163,0,994,995,5,175,0,0,995,996,3,74,37,0,996,73,1,0,0,0,997,1002,
        3,76,38,0,998,1002,3,80,40,0,999,1002,3,82,41,0,1000,1002,3,84,42,
        0,1001,997,1,0,0,0,1001,998,1,0,0,0,1001,999,1,0,0,0,1001,1000,1,
        0,0,0,1002,75,1,0,0,0,1003,1004,5,48,0,0,1004,1008,5,175,0,0,1005,
        1006,3,42,21,0,1006,1007,5,175,0,0,1007,1009,1,0,0,0,1008,1005,1,
        0,0,0,1008,1009,1,0,0,0,1009,1010,1,0,0,0,1010,1011,3,320,160,0,
        1011,1012,5,175,0,0,1012,1015,3,96,48,0,1013,1014,5,175,0,0,1014,
        1016,3,78,39,0,1015,1013,1,0,0,0,1015,1016,1,0,0,0,1016,77,1,0,0,
        0,1017,1018,5,73,0,0,1018,1019,5,175,0,0,1019,1020,3,224,112,0,1020,
        79,1,0,0,0,1021,1022,5,79,0,0,1022,1026,5,175,0,0,1023,1024,3,68,
        34,0,1024,1025,5,175,0,0,1025,1027,1,0,0,0,1026,1023,1,0,0,0,1026,
        1027,1,0,0,0,1027,1028,1,0,0,0,1028,1029,3,320,160,0,1029,81,1,0,
        0,0,1030,1031,5,126,0,0,1031,1032,5,175,0,0,1032,1033,5,137,0,0,
        1033,1034,5,175,0,0,1034,1035,3,326,163,0,1035,83,1,0,0,0,1036,1037,
        5,126,0,0,1037,1038,5,175,0,0,1038,1039,3,320,160,0,1039,1040,5,
        175,0,0,1040,1041,5,137,0,0,1041,1042,5,175,0,0,1042,1043,3,320,
        160,0,1043,85,1,0,0,0,1044,1055,3,88,44,0,1045,1047,5,175,0,0,1046,
        1045,1,0,0,0,1046,1047,1,0,0,0,1047,1048,1,0,0,0,1048,1050,5,4,0,
        0,1049,1051,5,175,0,0,1050,1049,1,0,0,0,1050,1051,1,0,0,0,1051,1052,
        1,0,0,0,1052,1054,3,88,44,0,1053,1046,1,0,0,0,1054,1057,1,0,0,0,
        1055,1053,1,0,0,0,1055,1056,1,0,0,0,1056,87,1,0,0,0,1057,1055,1,
        0,0,0,1058,1059,3,320,160,0,1059,1060,5,175,0,0,1060,1061,3,96,48,
        0,1061,89,1,0,0,0,1062,1073,3,92,46,0,1063,1065,5,175,0,0,1064,1063,
        1,0,0,0,1064,1065,1,0,0,0,1065,1066,1,0,0,0,1066,1068,5,4,0,0,1067,
        1069,5,175,0,0,1068,1067,1,0,0,0,1068,1069,1,0,0,0,1069,1070,1,0,
        0,0,1070,1072,3,92,46,0,1071,1064,1,0,0,0,1072,1075,1,0,0,0,1073,
        1071,1,0,0,0,1073,1074,1,0,0,0,1074,91,1,0,0,0,1075,1073,1,0,0,0,
        1076,1079,3,88,44,0,1077,1078,5,175,0,0,1078,1080,3,78,39,0,1079,
        1077,1,0,0,0,1079,1080,1,0,0,0,1080,1085,1,0,0,0,1081,1082,5,175,
        0,0,1082,1083,5,121,0,0,1083,1084,5,175,0,0,1084,1086,5,101,0,0,
        1085,1081,1,0,0,0,1085,1086,1,0,0,0,1086,93,1,0,0,0,1087,1088,5,
        121,0,0,1088,1089,5,175,0,0,1089,1091,5,101,0,0,1090,1092,5,175,
        0,0,1091,1090,1,0,0,0,1091,1092,1,0,0,0,1092,1093,1,0,0,0,1093,1095,
        5,2,0,0,1094,1096,5,175,0,0,1095,1094,1,0,0,0,1095,1096,1,0,0,0,
        1096,1097,1,0,0,0,1097,1099,3,320,160,0,1098,1100,5,175,0,0,1099,
        1098,1,0,0,0,1099,1100,1,0,0,0,1100,1101,1,0,0,0,1101,1102,5,3,0,
        0,1102,95,1,0,0,0,1103,1104,6,48,-1,0,1104,1178,3,328,164,0,1105,
        1107,5,142,0,0,1106,1108,5,175,0,0,1107,1106,1,0,0,0,1107,1108,1,
        0,0,0,1108,1109,1,0,0,0,1109,1111,5,2,0,0,1110,1112,5,175,0,0,1111,
        1110,1,0,0,0,1111,1112,1,0,0,0,1112,1113,1,0,0,0,1113,1115,3,86,
        43,0,1114,1116,5,175,0,0,1115,1114,1,0,0,0,1115,1116,1,0,0,0,1116,
        1117,1,0,0,0,1117,1118,5,3,0,0,1118,1178,1,0,0,0,1119,1121,3,328,
        164,0,1120,1122,5,175,0,0,1121,1120,1,0,0,0,1121,1122,1,0,0,0,1122,
        1123,1,0,0,0,1123,1125,5,2,0,0,1124,1126,5,175,0,0,1125,1124,1,0,
        0,0,1125,1126,1,0,0,0,1126,1127,1,0,0,0,1127,1129,3,86,43,0,1128,
        1130,5,175,0,0,1129,1128,1,0,0,0,1129,1130,1,0,0,0,1130,1131,1,0,
        0,0,1131,1132,5,3,0,0,1132,1178,1,0,0,0,1133,1135,3,328,164,0,1134,
        1136,5,175,0,0,1135,1134,1,0,0,0,1135,1136,1,0,0,0,1136,1137,1,0,
        0,0,1137,1139,5,2,0,0,1138,1140,5,175,0,0,1139,1138,1,0,0,0,1139,
        1140,1,0,0,0,1140,1141,1,0,0,0,1141,1143,3,96,48,0,1142,1144,5,175,
        0,0,1143,1142,1,0,0,0,1143,1144,1,0,0,0,1144,1145,1,0,0,0,1145,1147,
        5,4,0,0,1146,1148,5,175,0,0,1147,1146,1,0,0,0,1147,1148,1,0,0,0,
        1148,1149,1,0,0,0,1149,1151,3,96,48,0,1150,1152,5,175,0,0,1151,1150,
        1,0,0,0,1151,1152,1,0,0,0,1152,1153,1,0,0,0,1153,1154,5,3,0,0,1154,
        1178,1,0,0,0,1155,1157,5,153,0,0,1156,1158,5,175,0,0,1157,1156,1,
        0,0,0,1157,1158,1,0,0,0,1158,1159,1,0,0,0,1159,1161,5,2,0,0,1160,
        1162,5,175,0,0,1161,1160,1,0,0,0,1161,1162,1,0,0,0,1162,1163,1,0,
        0,0,1163,1165,3,322,161,0,1164,1166,5,175,0,0,1165,1164,1,0,0,0,
        1165,1166,1,0,0,0,1166,1167,1,0,0,0,1167,1169,5,4,0,0,1168,1170,
        5,175,0,0,1169,1168,1,0,0,0,1169,1170,1,0,0,0,1170,1171,1,0,0,0,
        1171,1173,3,322,161,0,1172,1174,5,175,0,0,1173,1172,1,0,0,0,1173,
        1174,1,0,0,0,1174,1175,1,0,0,0,1175,1176,5,3,0,0,1176,1178,1,0,0,
        0,1177,1103,1,0,0,0,1177,1105,1,0,0,0,1177,1119,1,0,0,0,1177,1133,
        1,0,0,0,1177,1155,1,0,0,0,1178,1183,1,0,0,0,1179,1180,10,5,0,0,1180,
        1182,3,98,49,0,1181,1179,1,0,0,0,1182,1185,1,0,0,0,1183,1181,1,0,
        0,0,1183,1184,1,0,0,0,1184,97,1,0,0,0,1185,1183,1,0,0,0,1186,1190,
        3,100,50,0,1187,1189,3,100,50,0,1188,1187,1,0,0,0,1189,1192,1,0,
        0,0,1190,1188,1,0,0,0,1190,1191,1,0,0,0,1191,99,1,0,0,0,1192,1190,
        1,0,0,0,1193,1195,5,7,0,0,1194,1196,3,322,161,0,1195,1194,1,0,0,
        0,1195,1196,1,0,0,0,1196,1197,1,0,0,0,1197,1198,5,8,0,0,1198,101,
        1,0,0,0,1199,1202,3,104,52,0,1200,1202,3,106,53,0,1201,1199,1,0,
        0,0,1201,1200,1,0,0,0,1202,103,1,0,0,0,1203,1206,5,84,0,0,1204,1205,
        5,175,0,0,1205,1207,5,104,0,0,1206,1204,1,0,0,0,1206,1207,1,0,0,
        0,1207,105,1,0,0,0,1208,1209,5,122,0,0,1209,107,1,0,0,0,1210,1211,
        5,56,0,0,1211,1212,5,175,0,0,1212,1224,5,139,0,0,1213,1214,5,56,
        0,0,1214,1215,5,175,0,0,1215,1216,5,139,0,0,1216,1217,5,175,0,0,
        1217,1218,5,124,0,0,1218,1219,5,175,0,0,1219,1224,5,117,0,0,1220,
        1224,5,64,0,0,1221,1224,5,128,0,0,1222,1224,5,61,0,0,1223,1210,1,
        0,0,0,1223,1213,1,0,0,0,1223,1220,1,0,0,0,1223,1221,1,0,0,0,1223,
        1222,1,0,0,0,1224,109,1,0,0,0,1225,1228,3,112,56,0,1226,1228,3,114,
        57,0,1227,1225,1,0,0,0,1227,1226,1,0,0,0,1228,111,1,0,0,0,1229,1230,
        5,103,0,0,1230,1233,5,175,0,0,1231,1232,5,86,0,0,1232,1234,5,175,
        0,0,1233,1231,1,0,0,0,1233,1234,1,0,0,0,1234,1237,1,0,0,0,1235,1238,
        5,160,0,0,1236,1238,3,312,156,0,1237,1235,1,0,0,0,1237,1236,1,0,
        0,0,1238,113,1,0,0,0,1239,1240,5,98,0,0,1240,1241,5,175,0,0,1241,
        1246,3,312,156,0,1242,1243,5,175,0,0,1243,1244,5,88,0,0,1244,1245,
        5,175,0,0,1245,1247,5,160,0,0,1246,1242,1,0,0,0,1246,1247,1,0,0,
        0,1247,115,1,0,0,0,1248,1249,3,118,59,0,1249,117,1,0,0,0,1250,1257,
        3,122,61,0,1251,1253,5,175,0,0,1252,1251,1,0,0,0,1252,1253,1,0,0,
        0,1253,1254,1,0,0,0,1254,1256,3,120,60,0,1255,1252,1,0,0,0,1256,
        1259,1,0,0,0,1257,1255,1,0,0,0,1257,1258,1,0,0,0,1258,1272,1,0,0,
        0,1259,1257,1,0,0,0,1260,1262,3,164,82,0,1261,1263,5,175,0,0,1262,
        1261,1,0,0,0,1262,1263,1,0,0,0,1263,1265,1,0,0,0,1264,1260,1,0,0,
        0,1265,1266,1,0,0,0,1266,1264,1,0,0,0,1266,1267,1,0,0,0,1267,1268,
        1,0,0,0,1268,1269,3,122,61,0,1269,1270,6,59,-1,0,1270,1272,1,0,0,
        0,1271,1250,1,0,0,0,1271,1264,1,0,0,0,1272,119,1,0,0,0,1273,1274,
        5,142,0,0,1274,1275,5,175,0,0,1275,1277,5,49,0,0,1276,1278,5,175,
        0,0,1277,1276,1,0,0,0,1277,1278,1,0,0,0,1278,1279,1,0,0,0,1279,1286,
        3,122,61,0,1280,1282,5,142,0,0,1281,1283,5,175,0,0,1282,1281,1,0,
        0,0,1282,1283,1,0,0,0,1283,1284,1,0,0,0,1284,1286,3,122,61,0,1285,
        1273,1,0,0,0,1285,1280,1,0,0,0,1286,121,1,0,0,0,1287,1290,3,124,
        62,0,1288,1290,3,126,63,0,1289,1287,1,0,0,0,1289,1288,1,0,0,0,1290,
        123,1,0,0,0,1291,1293,3,132,66,0,1292,1294,5,175,0,0,1293,1292,1,
        0,0,0,1293,1294,1,0,0,0,1294,1296,1,0,0,0,1295,1291,1,0,0,0,1296,
        1299,1,0,0,0,1297,1295,1,0,0,0,1297,1298,1,0,0,0,1298,1300,1,0,0,
        0,1299,1297,1,0,0,0,1300,1327,3,164,82,0,1301,1303,3,132,66,0,1302,
        1304,5,175,0,0,1303,1302,1,0,0,0,1303,1304,1,0,0,0,1304,1306,1,0,
        0,0,1305,1301,1,0,0,0,1306,1309,1,0,0,0,1307,1305,1,0,0,0,1307,1308,
        1,0,0,0,1308,1310,1,0,0,0,1309,1307,1,0,0,0,1310,1317,3,130,65,0,
        1311,1313,5,175,0,0,1312,1311,1,0,0,0,1312,1313,1,0,0,0,1313,1314,
        1,0,0,0,1314,1316,3,130,65,0,1315,1312,1,0,0,0,1316,1319,1,0,0,0,
        1317,1315,1,0,0,0,1317,1318,1,0,0,0,1318,1324,1,0,0,0,1319,1317,
        1,0,0,0,1320,1322,5,175,0,0,1321,1320,1,0,0,0,1321,1322,1,0,0,0,
        1322,1323,1,0,0,0,1323,1325,3,164,82,0,1324,1321,1,0,0,0,1324,1325,
        1,0,0,0,1325,1327,1,0,0,0,1326,1297,1,0,0,0,1326,1307,1,0,0,0,1327,
        125,1,0,0,0,1328,1330,3,128,64,0,1329,1331,5,175,0,0,1330,1329,1,
        0,0,0,1330,1331,1,0,0,0,1331,1333,1,0,0,0,1332,1328,1,0,0,0,1333,
        1334,1,0,0,0,1334,1332,1,0,0,0,1334,1335,1,0,0,0,1335,1336,1,0,0,
        0,1336,1337,3,124,62,0,1337,127,1,0,0,0,1338,1340,3,132,66,0,1339,
        1341,5,175,0,0,1340,1339,1,0,0,0,1340,1341,1,0,0,0,1341,1343,1,0,
        0,0,1342,1338,1,0,0,0,1343,1346,1,0,0,0,1344,1342,1,0,0,0,1344,1345,
        1,0,0,0,1345,1353,1,0,0,0,1346,1344,1,0,0,0,1347,1349,3,130,65,0,
        1348,1350,5,175,0,0,1349,1348,1,0,0,0,1349,1350,1,0,0,0,1350,1352,
        1,0,0,0,1351,1347,1,0,0,0,1352,1355,1,0,0,0,1353,1351,1,0,0,0,1353,
        1354,1,0,0,0,1354,1356,1,0,0,0,1355,1353,1,0,0,0,1356,1357,3,162,
        81,0,1357,129,1,0,0,0,1358,1363,3,150,75,0,1359,1363,3,152,76,0,
        1360,1363,3,156,78,0,1361,1363,3,160,80,0,1362,1358,1,0,0,0,1362,
        1359,1,0,0,0,1362,1360,1,0,0,0,1362,1361,1,0,0,0,1363,131,1,0,0,
        0,1364,1369,3,142,71,0,1365,1369,3,148,74,0,1366,1369,3,140,70,0,
        1367,1369,3,134,67,0,1368,1364,1,0,0,0,1368,1365,1,0,0,0,1368,1366,
        1,0,0,0,1368,1367,1,0,0,0,1369,133,1,0,0,0,1370,1388,5,103,0,0,1371,
        1372,5,175,0,0,1372,1373,5,147,0,0,1373,1374,5,175,0,0,1374,1376,
        5,92,0,0,1375,1377,5,175,0,0,1376,1375,1,0,0,0,1376,1377,1,0,0,0,
        1377,1378,1,0,0,0,1378,1380,5,2,0,0,1379,1381,5,175,0,0,1380,1379,
        1,0,0,0,1380,1381,1,0,0,0,1381,1382,1,0,0,0,1382,1384,3,86,43,0,
        1383,1385,5,175,0,0,1384,1383,1,0,0,0,1384,1385,1,0,0,0,1385,1386,
        1,0,0,0,1386,1387,5,3,0,0,1387,1389,1,0,0,0,1388,1371,1,0,0,0,1388,
        1389,1,0,0,0,1389,1390,1,0,0,0,1390,1391,5,175,0,0,1391,1392,5,88,
        0,0,1392,1393,5,175,0,0,1393,1407,3,10,5,0,1394,1396,5,175,0,0,1395,
        1394,1,0,0,0,1395,1396,1,0,0,0,1396,1397,1,0,0,0,1397,1399,5,2,0,
        0,1398,1400,5,175,0,0,1399,1398,1,0,0,0,1399,1400,1,0,0,0,1400,1401,
        1,0,0,0,1401,1403,3,24,12,0,1402,1404,5,175,0,0,1403,1402,1,0,0,
        0,1403,1404,1,0,0,0,1404,1405,1,0,0,0,1405,1406,5,3,0,0,1406,1408,
        1,0,0,0,1407,1395,1,0,0,0,1407,1408,1,0,0,0,1408,1413,1,0,0,0,1409,
        1411,5,175,0,0,1410,1409,1,0,0,0,1410,1411,1,0,0,0,1411,1412,1,0,
        0,0,1412,1414,3,180,90,0,1413,1410,1,0,0,0,1413,1414,1,0,0,0,1414,
        135,1,0,0,0,1415,1416,3,312,156,0,1416,1417,5,175,0,0,1417,1418,
        5,52,0,0,1418,1419,5,175,0,0,1419,1421,1,0,0,0,1420,1415,1,0,0,0,
        1420,1421,1,0,0,0,1421,1422,1,0,0,0,1422,1423,3,312,156,0,1423,137,
        1,0,0,0,1424,1435,3,136,68,0,1425,1427,5,175,0,0,1426,1425,1,0,0,
        0,1426,1427,1,0,0,0,1427,1428,1,0,0,0,1428,1430,5,4,0,0,1429,1431,
        5,175,0,0,1430,1429,1,0,0,0,1430,1431,1,0,0,0,1431,1432,1,0,0,0,
        1432,1434,3,136,68,0,1433,1426,1,0,0,0,1434,1437,1,0,0,0,1435,1433,
        1,0,0,0,1435,1436,1,0,0,0,1436,139,1,0,0,0,1437,1435,1,0,0,0,1438,
        1439,5,58,0,0,1439,1440,5,175,0,0,1440,1445,3,292,146,0,1441,1443,
        5,175,0,0,1442,1441,1,0,0,0,1442,1443,1,0,0,0,1443,1444,1,0,0,0,
        1444,1446,3,180,90,0,1445,1442,1,0,0,0,1445,1446,1,0,0,0,1446,1453,
        1,0,0,0,1447,1449,5,175,0,0,1448,1447,1,0,0,0,1448,1449,1,0,0,0,
        1449,1450,1,0,0,0,1450,1451,5,152,0,0,1451,1452,5,175,0,0,1452,1454,
        3,138,69,0,1453,1448,1,0,0,0,1453,1454,1,0,0,0,1454,141,1,0,0,0,
        1455,1456,5,118,0,0,1456,1458,5,175,0,0,1457,1455,1,0,0,0,1457,1458,
        1,0,0,0,1458,1459,1,0,0,0,1459,1461,5,106,0,0,1460,1462,5,175,0,
        0,1461,1460,1,0,0,0,1461,1462,1,0,0,0,1462,1463,1,0,0,0,1463,1466,
        3,182,91,0,1464,1465,5,175,0,0,1465,1467,3,180,90,0,1466,1464,1,
        0,0,0,1466,1467,1,0,0,0,1467,1470,1,0,0,0,1468,1469,5,175,0,0,1469,
        1471,3,144,72,0,1470,1468,1,0,0,0,1470,1471,1,0,0,0,1471,143,1,0,
        0,0,1472,1473,5,93,0,0,1473,1474,5,175,0,0,1474,1475,3,146,73,0,
        1475,145,1,0,0,0,1476,1477,6,73,-1,0,1477,1479,5,2,0,0,1478,1480,
        5,175,0,0,1479,1478,1,0,0,0,1479,1480,1,0,0,0,1480,1481,1,0,0,0,
        1481,1483,3,146,73,0,1482,1484,5,175,0,0,1483,1482,1,0,0,0,1483,
        1484,1,0,0,0,1484,1485,1,0,0,0,1485,1486,5,3,0,0,1486,1489,1,0,0,
        0,1487,1489,3,326,163,0,1488,1476,1,0,0,0,1488,1487,1,0,0,0,1489,
        1506,1,0,0,0,1490,1491,10,4,0,0,1491,1492,5,175,0,0,1492,1493,5,
        100,0,0,1493,1494,5,175,0,0,1494,1505,3,146,73,5,1495,1500,10,3,
        0,0,1496,1497,5,175,0,0,1497,1498,5,110,0,0,1498,1499,5,175,0,0,
        1499,1501,3,326,163,0,1500,1496,1,0,0,0,1501,1502,1,0,0,0,1502,1500,
        1,0,0,0,1502,1503,1,0,0,0,1503,1505,1,0,0,0,1504,1490,1,0,0,0,1504,
        1495,1,0,0,0,1505,1508,1,0,0,0,1506,1504,1,0,0,0,1506,1507,1,0,0,
        0,1507,147,1,0,0,0,1508,1506,1,0,0,0,1509,1511,5,143,0,0,1510,1512,
        5,175,0,0,1511,1510,1,0,0,0,1511,1512,1,0,0,0,1512,1513,1,0,0,0,
        1513,1514,3,224,112,0,1514,1515,5,175,0,0,1515,1516,5,52,0,0,1516,
        1517,5,175,0,0,1517,1518,3,312,156,0,1518,149,1,0,0,0,1519,1521,
        5,69,0,0,1520,1522,5,175,0,0,1521,1520,1,0,0,0,1521,1522,1,0,0,0,
        1522,1523,1,0,0,0,1523,1524,3,182,91,0,1524,151,1,0,0,0,1525,1527,
        5,108,0,0,1526,1528,5,175,0,0,1527,1526,1,0,0,0,1527,1528,1,0,0,
        0,1528,1529,1,0,0,0,1529,1534,3,182,91,0,1530,1531,5,175,0,0,1531,
        1533,3,154,77,0,1532,1530,1,0,0,0,1533,1536,1,0,0,0,1534,1532,1,
        0,0,0,1534,1535,1,0,0,0,1535,153,1,0,0,0,1536,1534,1,0,0,0,1537,
        1538,5,116,0,0,1538,1539,5,175,0,0,1539,1540,5,106,0,0,1540,1541,
        5,175,0,0,1541,1548,3,156,78,0,1542,1543,5,116,0,0,1543,1544,5,175,
        0,0,1544,1545,5,69,0,0,1545,1546,5,175,0,0,1546,1548,3,156,78,0,
        1547,1537,1,0,0,0,1547,1542,1,0,0,0,1548,155,1,0,0,0,1549,1551,5,
        131,0,0,1550,1552,5,175,0,0,1551,1550,1,0,0,0,1551,1552,1,0,0,0,
        1552,1553,1,0,0,0,1553,1564,3,158,79,0,1554,1556,5,175,0,0,1555,
        1554,1,0,0,0,1555,1556,1,0,0,0,1556,1557,1,0,0,0,1557,1559,5,4,0,
        0,1558,1560,5,175,0,0,1559,1558,1,0,0,0,1559,1560,1,0,0,0,1560,1561,
        1,0,0,0,1561,1563,3,158,79,0,1562,1555,1,0,0,0,1563,1566,1,0,0,0,
        1564,1562,1,0,0,0,1564,1565,1,0,0,0,1565,157,1,0,0,0,1566,1564,1,
        0,0,0,1567,1569,3,318,159,0,1568,1570,5,175,0,0,1569,1568,1,0,0,
        0,1569,1570,1,0,0,0,1570,1571,1,0,0,0,1571,1573,5,6,0,0,1572,1574,
        5,175,0,0,1573,1572,1,0,0,0,1573,1574,1,0,0,0,1574,1575,1,0,0,0,
        1575,1576,3,224,112,0,1576,159,1,0,0,0,1577,1578,5,77,0,0,1578,1580,
        5,175,0,0,1579,1577,1,0,0,0,1579,1580,1,0,0,0,1580,1581,1,0,0,0,
        1581,1583,5,74,0,0,1582,1584,5,175,0,0,1583,1582,1,0,0,0,1583,1584,
        1,0,0,0,1584,1585,1,0,0,0,1585,1596,3,224,112,0,1586,1588,5,175,
        0,0,1587,1586,1,0,0,0,1587,1588,1,0,0,0,1588,1589,1,0,0,0,1589,1591,
        5,4,0,0,1590,1592,5,175,0,0,1591,1590,1,0,0,0,1591,1592,1,0,0,0,
        1592,1593,1,0,0,0,1593,1595,3,224,112,0,1594,1587,1,0,0,0,1595,1598,
        1,0,0,0,1596,1594,1,0,0,0,1596,1597,1,0,0,0,1597,161,1,0,0,0,1598,
        1596,1,0,0,0,1599,1600,5,147,0,0,1600,1605,3,166,83,0,1601,1603,
        5,175,0,0,1602,1601,1,0,0,0,1602,1603,1,0,0,0,1603,1604,1,0,0,0,
        1604,1606,3,180,90,0,1605,1602,1,0,0,0,1605,1606,1,0,0,0,1606,163,
        1,0,0,0,1607,1608,5,127,0,0,1608,1609,3,166,83,0,1609,165,1,0,0,
        0,1610,1612,5,175,0,0,1611,1610,1,0,0,0,1611,1612,1,0,0,0,1612,1613,
        1,0,0,0,1613,1615,5,78,0,0,1614,1611,1,0,0,0,1614,1615,1,0,0,0,1615,
        1616,1,0,0,0,1616,1617,5,175,0,0,1617,1620,3,168,84,0,1618,1619,
        5,175,0,0,1619,1621,3,172,86,0,1620,1618,1,0,0,0,1620,1621,1,0,0,
        0,1621,1624,1,0,0,0,1622,1623,5,175,0,0,1623,1625,3,174,87,0,1624,
        1622,1,0,0,0,1624,1625,1,0,0,0,1625,1628,1,0,0,0,1626,1627,5,175,
        0,0,1627,1629,3,176,88,0,1628,1626,1,0,0,0,1628,1629,1,0,0,0,1629,
        167,1,0,0,0,1630,1641,5,154,0,0,1631,1633,5,175,0,0,1632,1631,1,
        0,0,0,1632,1633,1,0,0,0,1633,1634,1,0,0,0,1634,1636,5,4,0,0,1635,
        1637,5,175,0,0,1636,1635,1,0,0,0,1636,1637,1,0,0,0,1637,1638,1,0,
        0,0,1638,1640,3,170,85,0,1639,1632,1,0,0,0,1640,1643,1,0,0,0,1641,
        1639,1,0,0,0,1641,1642,1,0,0,0,1642,1659,1,0,0,0,1643,1641,1,0,0,
        0,1644,1655,3,170,85,0,1645,1647,5,175,0,0,1646,1645,1,0,0,0,1646,
        1647,1,0,0,0,1647,1648,1,0,0,0,1648,1650,5,4,0,0,1649,1651,5,175,
        0,0,1650,1649,1,0,0,0,1650,1651,1,0,0,0,1651,1652,1,0,0,0,1652,1654,
        3,170,85,0,1653,1646,1,0,0,0,1654,1657,1,0,0,0,1655,1653,1,0,0,0,
        1655,1656,1,0,0,0,1656,1659,1,0,0,0,1657,1655,1,0,0,0,1658,1630,
        1,0,0,0,1658,1644,1,0,0,0,1659,169,1,0,0,0,1660,1661,3,224,112,0,
        1661,1662,5,175,0,0,1662,1663,5,52,0,0,1663,1664,5,175,0,0,1664,
        1665,3,312,156,0,1665,1668,1,0,0,0,1666,1668,3,224,112,0,1667,1660,
        1,0,0,0,1667,1666,1,0,0,0,1668,171,1,0,0,0,1669,1670,5,120,0,0,1670,
        1671,5,175,0,0,1671,1672,5,57,0,0,1672,1673,5,175,0,0,1673,1681,
        3,178,89,0,1674,1676,5,4,0,0,1675,1677,5,175,0,0,1676,1675,1,0,0,
        0,1676,1677,1,0,0,0,1677,1678,1,0,0,0,1678,1680,3,178,89,0,1679,
        1674,1,0,0,0,1680,1683,1,0,0,0,1681,1679,1,0,0,0,1681,1682,1,0,0,
        0,1682,173,1,0,0,0,1683,1681,1,0,0,0,1684,1685,5,155,0,0,1685,1686,
        5,175,0,0,1686,1687,3,224,112,0,1687,175,1,0,0,0,1688,1689,5,102,
        0,0,1689,1690,5,175,0,0,1690,1691,3,224,112,0,1691,177,1,0,0,0,1692,
        1697,3,224,112,0,1693,1695,5,175,0,0,1694,1693,1,0,0,0,1694,1695,
        1,0,0,0,1695,1696,1,0,0,0,1696,1698,7,1,0,0,1697,1694,1,0,0,0,1697,
        1698,1,0,0,0,1698,179,1,0,0,0,1699,1700,5,146,0,0,1700,1701,5,175,
        0,0,1701,1702,3,224,112,0,1702,181,1,0,0,0,1703,1714,3,184,92,0,
        1704,1706,5,175,0,0,1705,1704,1,0,0,0,1705,1706,1,0,0,0,1706,1707,
        1,0,0,0,1707,1709,5,4,0,0,1708,1710,5,175,0,0,1709,1708,1,0,0,0,
        1709,1710,1,0,0,0,1710,1711,1,0,0,0,1711,1713,3,184,92,0,1712,1705,
        1,0,0,0,1713,1716,1,0,0,0,1714,1712,1,0,0,0,1714,1715,1,0,0,0,1715,
        183,1,0,0,0,1716,1714,1,0,0,0,1717,1719,3,312,156,0,1718,1720,5,
        175,0,0,1719,1718,1,0,0,0,1719,1720,1,0,0,0,1720,1721,1,0,0,0,1721,
        1723,5,6,0,0,1722,1724,5,175,0,0,1723,1722,1,0,0,0,1723,1724,1,0,
        0,0,1724,1725,1,0,0,0,1725,1726,3,186,93,0,1726,1729,1,0,0,0,1727,
        1729,3,186,93,0,1728,1717,1,0,0,0,1728,1727,1,0,0,0,1729,185,1,0,
        0,0,1730,1731,3,188,94,0,1731,187,1,0,0,0,1732,1739,3,190,95,0,1733,
        1735,5,175,0,0,1734,1733,1,0,0,0,1734,1735,1,0,0,0,1735,1736,1,0,
        0,0,1736,1738,3,192,96,0,1737,1734,1,0,0,0,1738,1741,1,0,0,0,1739,
        1737,1,0,0,0,1739,1740,1,0,0,0,1740,1747,1,0,0,0,1741,1739,1,0,0,
        0,1742,1743,5,2,0,0,1743,1744,3,188,94,0,1744,1745,5,3,0,0,1745,
        1747,1,0,0,0,1746,1732,1,0,0,0,1746,1742,1,0,0,0,1747,189,1,0,0,
        0,1748,1750,5,2,0,0,1749,1751,5,175,0,0,1750,1749,1,0,0,0,1750,1751,
        1,0,0,0,1751,1756,1,0,0,0,1752,1754,3,312,156,0,1753,1755,5,175,
        0,0,1754,1753,1,0,0,0,1754,1755,1,0,0,0,1755,1757,1,0,0,0,1756,1752,
        1,0,0,0,1756,1757,1,0,0,0,1757,1762,1,0,0,0,1758,1760,3,202,101,
        0,1759,1761,5,175,0,0,1760,1759,1,0,0,0,1760,1761,1,0,0,0,1761,1763,
        1,0,0,0,1762,1758,1,0,0,0,1762,1763,1,0,0,0,1763,1768,1,0,0,0,1764,
        1766,3,198,99,0,1765,1767,5,175,0,0,1766,1765,1,0,0,0,1766,1767,
        1,0,0,0,1767,1769,1,0,0,0,1768,1764,1,0,0,0,1768,1769,1,0,0,0,1769,
        1770,1,0,0,0,1770,1771,5,3,0,0,1771,191,1,0,0,0,1772,1774,3,194,
        97,0,1773,1775,5,175,0,0,1774,1773,1,0,0,0,1774,1775,1,0,0,0,1775,
        1776,1,0,0,0,1776,1777,3,190,95,0,1777,193,1,0,0,0,1778,1780,3,332,
        166,0,1779,1781,5,175,0,0,1780,1779,1,0,0,0,1780,1781,1,0,0,0,1781,
        1782,1,0,0,0,1782,1784,3,336,168,0,1783,1785,5,175,0,0,1784,1783,
        1,0,0,0,1784,1785,1,0,0,0,1785,1787,1,0,0,0,1786,1788,3,196,98,0,
        1787,1786,1,0,0,0,1787,1788,1,0,0,0,1788,1790,1,0,0,0,1789,1791,
        5,175,0,0,1790,1789,1,0,0,0,1790,1791,1,0,0,0,1791,1792,1,0,0,0,
        1792,1793,3,336,168,0,1793,1823,1,0,0,0,1794,1796,3,336,168,0,1795,
        1797,5,175,0,0,1796,1795,1,0,0,0,1796,1797,1,0,0,0,1797,1799,1,0,
        0,0,1798,1800,3,196,98,0,1799,1798,1,0,0,0,1799,1800,1,0,0,0,1800,
        1802,1,0,0,0,1801,1803,5,175,0,0,1802,1801,1,0,0,0,1802,1803,1,0,
        0,0,1803,1804,1,0,0,0,1804,1806,3,336,168,0,1805,1807,5,175,0,0,
        1806,1805,1,0,0,0,1806,1807,1,0,0,0,1807,1808,1,0,0,0,1808,1809,
        3,334,167,0,1809,1823,1,0,0,0,1810,1812,3,336,168,0,1811,1813,5,
        175,0,0,1812,1811,1,0,0,0,1812,1813,1,0,0,0,1813,1815,1,0,0,0,1814,
        1816,3,196,98,0,1815,1814,1,0,0,0,1815,1816,1,0,0,0,1816,1818,1,
        0,0,0,1817,1819,5,175,0,0,1818,1817,1,0,0,0,1818,1819,1,0,0,0,1819,
        1820,1,0,0,0,1820,1821,3,336,168,0,1821,1823,1,0,0,0,1822,1778,1,
        0,0,0,1822,1794,1,0,0,0,1822,1810,1,0,0,0,1823,195,1,0,0,0,1824,
        1826,5,7,0,0,1825,1827,5,175,0,0,1826,1825,1,0,0,0,1826,1827,1,0,
        0,0,1827,1832,1,0,0,0,1828,1830,3,312,156,0,1829,1831,5,175,0,0,
        1830,1829,1,0,0,0,1830,1831,1,0,0,0,1831,1833,1,0,0,0,1832,1828,
        1,0,0,0,1832,1833,1,0,0,0,1833,1838,1,0,0,0,1834,1836,3,200,100,
        0,1835,1837,5,175,0,0,1836,1835,1,0,0,0,1836,1837,1,0,0,0,1837,1839,
        1,0,0,0,1838,1834,1,0,0,0,1838,1839,1,0,0,0,1839,1844,1,0,0,0,1840,
        1842,3,206,103,0,1841,1843,5,175,0,0,1842,1841,1,0,0,0,1842,1843,
        1,0,0,0,1843,1845,1,0,0,0,1844,1840,1,0,0,0,1844,1845,1,0,0,0,1845,
        1850,1,0,0,0,1846,1848,3,198,99,0,1847,1849,5,175,0,0,1848,1847,
        1,0,0,0,1848,1849,1,0,0,0,1849,1851,1,0,0,0,1850,1846,1,0,0,0,1850,
        1851,1,0,0,0,1851,1852,1,0,0,0,1852,1853,5,8,0,0,1853,197,1,0,0,
        0,1854,1856,5,9,0,0,1855,1857,5,175,0,0,1856,1855,1,0,0,0,1856,1857,
        1,0,0,0,1857,1891,1,0,0,0,1858,1860,3,320,160,0,1859,1861,5,175,
        0,0,1860,1859,1,0,0,0,1860,1861,1,0,0,0,1861,1862,1,0,0,0,1862,1864,
        5,159,0,0,1863,1865,5,175,0,0,1864,1863,1,0,0,0,1864,1865,1,0,0,
        0,1865,1866,1,0,0,0,1866,1868,3,224,112,0,1867,1869,5,175,0,0,1868,
        1867,1,0,0,0,1868,1869,1,0,0,0,1869,1888,1,0,0,0,1870,1872,5,4,0,
        0,1871,1873,5,175,0,0,1872,1871,1,0,0,0,1872,1873,1,0,0,0,1873,1874,
        1,0,0,0,1874,1876,3,320,160,0,1875,1877,5,175,0,0,1876,1875,1,0,
        0,0,1876,1877,1,0,0,0,1877,1878,1,0,0,0,1878,1880,5,159,0,0,1879,
        1881,5,175,0,0,1880,1879,1,0,0,0,1880,1881,1,0,0,0,1881,1882,1,0,
        0,0,1882,1884,3,224,112,0,1883,1885,5,175,0,0,1884,1883,1,0,0,0,
        1884,1885,1,0,0,0,1885,1887,1,0,0,0,1886,1870,1,0,0,0,1887,1890,
        1,0,0,0,1888,1886,1,0,0,0,1888,1889,1,0,0,0,1889,1892,1,0,0,0,1890,
        1888,1,0,0,0,1891,1858,1,0,0,0,1891,1892,1,0,0,0,1892,1893,1,0,0,
        0,1893,1894,5,10,0,0,1894,199,1,0,0,0,1895,1897,5,159,0,0,1896,1898,
        5,175,0,0,1897,1896,1,0,0,0,1897,1898,1,0,0,0,1898,1899,1,0,0,0,
        1899,1913,3,222,111,0,1900,1902,5,175,0,0,1901,1900,1,0,0,0,1901,
        1902,1,0,0,0,1902,1903,1,0,0,0,1903,1905,5,11,0,0,1904,1906,5,159,
        0,0,1905,1904,1,0,0,0,1905,1906,1,0,0,0,1906,1908,1,0,0,0,1907,1909,
        5,175,0,0,1908,1907,1,0,0,0,1908,1909,1,0,0,0,1909,1910,1,0,0,0,
        1910,1912,3,222,111,0,1911,1901,1,0,0,0,1912,1915,1,0,0,0,1913,1911,
        1,0,0,0,1913,1914,1,0,0,0,1914,201,1,0,0,0,1915,1913,1,0,0,0,1916,
        1923,3,204,102,0,1917,1919,5,175,0,0,1918,1917,1,0,0,0,1918,1919,
        1,0,0,0,1919,1920,1,0,0,0,1920,1922,3,204,102,0,1921,1918,1,0,0,
        0,1922,1925,1,0,0,0,1923,1921,1,0,0,0,1923,1924,1,0,0,0,1924,203,
        1,0,0,0,1925,1923,1,0,0,0,1926,1928,5,159,0,0,1927,1929,5,175,0,
        0,1928,1927,1,0,0,0,1928,1929,1,0,0,0,1929,1930,1,0,0,0,1930,1931,
        3,220,110,0,1931,205,1,0,0,0,1932,1937,5,154,0,0,1933,1935,5,175,
        0,0,1934,1933,1,0,0,0,1934,1935,1,0,0,0,1935,1936,1,0,0,0,1936,1938,
        3,208,104,0,1937,1934,1,0,0,0,1937,1938,1,0,0,0,1938,1943,1,0,0,
        0,1939,1941,5,175,0,0,1940,1939,1,0,0,0,1940,1941,1,0,0,0,1941,1942,
        1,0,0,0,1942,1944,3,210,105,0,1943,1940,1,0,0,0,1943,1944,1,0,0,
        0,1944,1949,1,0,0,0,1945,1947,5,175,0,0,1946,1945,1,0,0,0,1946,1947,
        1,0,0,0,1947,1948,1,0,0,0,1948,1950,3,212,106,0,1949,1946,1,0,0,
        0,1949,1950,1,0,0,0,1950,207,1,0,0,0,1951,1952,5,49,0,0,1952,1954,
        5,175,0,0,1953,1951,1,0,0,0,1953,1954,1,0,0,0,1954,1955,1,0,0,0,
        1955,1957,5,149,0,0,1956,1958,5,175,0,0,1957,1956,1,0,0,0,1957,1958,
        1,0,0,0,1958,1959,1,0,0,0,1959,1961,5,2,0,0,1960,1962,5,175,0,0,
        1961,1960,1,0,0,0,1961,1962,1,0,0,0,1962,1963,1,0,0,0,1963,1965,
        3,320,160,0,1964,1966,5,175,0,0,1965,1964,1,0,0,0,1965,1966,1,0,
        0,0,1966,1967,1,0,0,0,1967,1968,5,3,0,0,1968,1976,1,0,0,0,1969,1976,
        5,132,0,0,1970,1971,5,49,0,0,1971,1972,5,175,0,0,1972,1976,5,132,
        0,0,1973,1976,5,138,0,0,1974,1976,5,46,0,0,1975,1953,1,0,0,0,1975,
        1969,1,0,0,0,1975,1970,1,0,0,0,1975,1973,1,0,0,0,1975,1974,1,0,0,
        0,1976,209,1,0,0,0,1977,1979,3,216,108,0,1978,1977,1,0,0,0,1978,
        1979,1,0,0,0,1979,1981,1,0,0,0,1980,1982,5,175,0,0,1981,1980,1,0,
        0,0,1981,1982,1,0,0,0,1982,1983,1,0,0,0,1983,1985,5,12,0,0,1984,
        1986,5,175,0,0,1985,1984,1,0,0,0,1985,1986,1,0,0,0,1986,1988,1,0,
        0,0,1987,1989,3,218,109,0,1988,1987,1,0,0,0,1988,1989,1,0,0,0,1989,
        1992,1,0,0,0,1990,1992,3,322,161,0,1991,1978,1,0,0,0,1991,1990,1,
        0,0,0,1992,211,1,0,0,0,1993,1995,5,2,0,0,1994,1996,5,175,0,0,1995,
        1994,1,0,0,0,1995,1996,1,0,0,0,1996,1997,1,0,0,0,1997,1999,3,312,
        156,0,1998,2000,5,175,0,0,1999,1998,1,0,0,0,1999,2000,1,0,0,0,2000,
        2001,1,0,0,0,2001,2003,5,4,0,0,2002,2004,5,175,0,0,2003,2002,1,0,
        0,0,2003,2004,1,0,0,0,2004,2005,1,0,0,0,2005,2017,3,312,156,0,2006,
        2008,5,175,0,0,2007,2006,1,0,0,0,2007,2008,1,0,0,0,2008,2009,1,0,
        0,0,2009,2011,5,11,0,0,2010,2012,5,175,0,0,2011,2010,1,0,0,0,2011,
        2012,1,0,0,0,2012,2013,1,0,0,0,2013,2015,3,180,90,0,2014,2016,5,
        175,0,0,2015,2014,1,0,0,0,2015,2016,1,0,0,0,2016,2018,1,0,0,0,2017,
        2007,1,0,0,0,2017,2018,1,0,0,0,2018,2038,1,0,0,0,2019,2021,5,175,
        0,0,2020,2019,1,0,0,0,2020,2021,1,0,0,0,2021,2022,1,0,0,0,2022,2024,
        5,11,0,0,2023,2025,5,175,0,0,2024,2023,1,0,0,0,2024,2025,1,0,0,0,
        2025,2026,1,0,0,0,2026,2028,3,214,107,0,2027,2029,5,175,0,0,2028,
        2027,1,0,0,0,2028,2029,1,0,0,0,2029,2030,1,0,0,0,2030,2032,5,4,0,
        0,2031,2033,5,175,0,0,2032,2031,1,0,0,0,2032,2033,1,0,0,0,2033,2034,
        1,0,0,0,2034,2036,3,214,107,0,2035,2037,5,175,0,0,2036,2035,1,0,
        0,0,2036,2037,1,0,0,0,2037,2039,1,0,0,0,2038,2020,1,0,0,0,2038,2039,
        1,0,0,0,2039,2040,1,0,0,0,2040,2041,5,3,0,0,2041,213,1,0,0,0,2042,
        2044,5,9,0,0,2043,2045,5,175,0,0,2044,2043,1,0,0,0,2044,2045,1,0,
        0,0,2045,2047,1,0,0,0,2046,2048,3,168,84,0,2047,2046,1,0,0,0,2047,
        2048,1,0,0,0,2048,2050,1,0,0,0,2049,2051,5,175,0,0,2050,2049,1,0,
        0,0,2050,2051,1,0,0,0,2051,2052,1,0,0,0,2052,2053,5,10,0,0,2053,
        215,1,0,0,0,2054,2055,5,162,0,0,2055,217,1,0,0,0,2056,2057,5,162,
        0,0,2057,219,1,0,0,0,2058,2059,3,326,163,0,2059,221,1,0,0,0,2060,
        2061,3,326,163,0,2061,223,1,0,0,0,2062,2063,3,226,113,0,2063,225,
        1,0,0,0,2064,2071,3,228,114,0,2065,2066,5,175,0,0,2066,2067,5,119,
        0,0,2067,2068,5,175,0,0,2068,2070,3,228,114,0,2069,2065,1,0,0,0,
        2070,2073,1,0,0,0,2071,2069,1,0,0,0,2071,2072,1,0,0,0,2072,227,1,
        0,0,0,2073,2071,1,0,0,0,2074,2081,3,230,115,0,2075,2076,5,175,0,
        0,2076,2077,5,150,0,0,2077,2078,5,175,0,0,2078,2080,3,230,115,0,
        2079,2075,1,0,0,0,2080,2083,1,0,0,0,2081,2079,1,0,0,0,2081,2082,
        1,0,0,0,2082,229,1,0,0,0,2083,2081,1,0,0,0,2084,2091,3,232,116,0,
        2085,2086,5,175,0,0,2086,2087,5,51,0,0,2087,2088,5,175,0,0,2088,
        2090,3,232,116,0,2089,2085,1,0,0,0,2090,2093,1,0,0,0,2091,2089,1,
        0,0,0,2091,2092,1,0,0,0,2092,231,1,0,0,0,2093,2091,1,0,0,0,2094,
        2096,5,113,0,0,2095,2097,5,175,0,0,2096,2095,1,0,0,0,2096,2097,1,
        0,0,0,2097,2099,1,0,0,0,2098,2094,1,0,0,0,2099,2102,1,0,0,0,2100,
        2098,1,0,0,0,2100,2101,1,0,0,0,2101,2103,1,0,0,0,2102,2100,1,0,0,
        0,2103,2104,3,234,117,0,2104,233,1,0,0,0,2105,2115,3,238,119,0,2106,
        2108,5,175,0,0,2107,2106,1,0,0,0,2107,2108,1,0,0,0,2108,2109,1,0,
        0,0,2109,2111,3,236,118,0,2110,2112,5,175,0,0,2111,2110,1,0,0,0,
        2111,2112,1,0,0,0,2112,2113,1,0,0,0,2113,2114,3,238,119,0,2114,2116,
        1,0,0,0,2115,2107,1,0,0,0,2115,2116,1,0,0,0,2116,2154,1,0,0,0,2117,
        2119,3,238,119,0,2118,2120,5,175,0,0,2119,2118,1,0,0,0,2119,2120,
        1,0,0,0,2120,2121,1,0,0,0,2121,2123,5,156,0,0,2122,2124,5,175,0,
        0,2123,2122,1,0,0,0,2123,2124,1,0,0,0,2124,2125,1,0,0,0,2125,2126,
        3,238,119,0,2126,2127,1,0,0,0,2127,2128,6,117,-1,0,2128,2154,1,0,
        0,0,2129,2131,3,238,119,0,2130,2132,5,175,0,0,2131,2130,1,0,0,0,
        2131,2132,1,0,0,0,2132,2133,1,0,0,0,2133,2135,3,236,118,0,2134,2136,
        5,175,0,0,2135,2134,1,0,0,0,2135,2136,1,0,0,0,2136,2137,1,0,0,0,
        2137,2147,3,238,119,0,2138,2140,5,175,0,0,2139,2138,1,0,0,0,2139,
        2140,1,0,0,0,2140,2141,1,0,0,0,2141,2143,3,236,118,0,2142,2144,5,
        175,0,0,2143,2142,1,0,0,0,2143,2144,1,0,0,0,2144,2145,1,0,0,0,2145,
        2146,3,238,119,0,2146,2148,1,0,0,0,2147,2139,1,0,0,0,2148,2149,1,
        0,0,0,2149,2147,1,0,0,0,2149,2150,1,0,0,0,2150,2151,1,0,0,0,2151,
        2152,6,117,-1,0,2152,2154,1,0,0,0,2153,2105,1,0,0,0,2153,2117,1,
        0,0,0,2153,2129,1,0,0,0,2154,235,1,0,0,0,2155,2156,7,2,0,0,2156,
        237,1,0,0,0,2157,2168,3,240,120,0,2158,2160,5,175,0,0,2159,2158,
        1,0,0,0,2159,2160,1,0,0,0,2160,2161,1,0,0,0,2161,2163,5,11,0,0,2162,
        2164,5,175,0,0,2163,2162,1,0,0,0,2163,2164,1,0,0,0,2164,2165,1,0,
        0,0,2165,2167,3,240,120,0,2166,2159,1,0,0,0,2167,2170,1,0,0,0,2168,
        2166,1,0,0,0,2168,2169,1,0,0,0,2169,239,1,0,0,0,2170,2168,1,0,0,
        0,2171,2182,3,242,121,0,2172,2174,5,175,0,0,2173,2172,1,0,0,0,2173,
        2174,1,0,0,0,2174,2175,1,0,0,0,2175,2177,5,18,0,0,2176,2178,5,175,
        0,0,2177,2176,1,0,0,0,2177,2178,1,0,0,0,2178,2179,1,0,0,0,2179,2181,
        3,242,121,0,2180,2173,1,0,0,0,2181,2184,1,0,0,0,2182,2180,1,0,0,
        0,2182,2183,1,0,0,0,2183,241,1,0,0,0,2184,2182,1,0,0,0,2185,2197,
        3,246,123,0,2186,2188,5,175,0,0,2187,2186,1,0,0,0,2187,2188,1,0,
        0,0,2188,2189,1,0,0,0,2189,2191,3,244,122,0,2190,2192,5,175,0,0,
        2191,2190,1,0,0,0,2191,2192,1,0,0,0,2192,2193,1,0,0,0,2193,2194,
        3,246,123,0,2194,2196,1,0,0,0,2195,2187,1,0,0,0,2196,2199,1,0,0,
        0,2197,2195,1,0,0,0,2197,2198,1,0,0,0,2198,243,1,0,0,0,2199,2197,
        1,0,0,0,2200,2201,7,3,0,0,2201,245,1,0,0,0,2202,2214,3,250,125,0,
        2203,2205,5,175,0,0,2204,2203,1,0,0,0,2204,2205,1,0,0,0,2205,2206,
        1,0,0,0,2206,2208,3,248,124,0,2207,2209,5,175,0,0,2208,2207,1,0,
        0,0,2208,2209,1,0,0,0,2209,2210,1,0,0,0,2210,2211,3,250,125,0,2211,
        2213,1,0,0,0,2212,2204,1,0,0,0,2213,2216,1,0,0,0,2214,2212,1,0,0,
        0,2214,2215,1,0,0,0,2215,247,1,0,0,0,2216,2214,1,0,0,0,2217,2218,
        7,4,0,0,2218,249,1,0,0,0,2219,2231,3,254,127,0,2220,2222,5,175,0,
        0,2221,2220,1,0,0,0,2221,2222,1,0,0,0,2222,2223,1,0,0,0,2223,2225,
        3,252,126,0,2224,2226,5,175,0,0,2225,2224,1,0,0,0,2225,2226,1,0,
        0,0,2226,2227,1,0,0,0,2227,2228,3,254,127,0,2228,2230,1,0,0,0,2229,
        2221,1,0,0,0,2230,2233,1,0,0,0,2231,2229,1,0,0,0,2231,2232,1,0,0,
        0,2232,251,1,0,0,0,2233,2231,1,0,0,0,2234,2235,7,5,0,0,2235,253,
        1,0,0,0,2236,2247,3,256,128,0,2237,2239,5,175,0,0,2238,2237,1,0,
        0,0,2238,2239,1,0,0,0,2239,2240,1,0,0,0,2240,2242,5,24,0,0,2241,
        2243,5,175,0,0,2242,2241,1,0,0,0,2242,2243,1,0,0,0,2243,2244,1,0,
        0,0,2244,2246,3,256,128,0,2245,2238,1,0,0,0,2246,2249,1,0,0,0,2247,
        2245,1,0,0,0,2247,2248,1,0,0,0,2248,255,1,0,0,0,2249,2247,1,0,0,
        0,2250,2252,5,157,0,0,2251,2253,5,175,0,0,2252,2251,1,0,0,0,2252,
        2253,1,0,0,0,2253,2255,1,0,0,0,2254,2250,1,0,0,0,2255,2258,1,0,0,
        0,2256,2254,1,0,0,0,2256,2257,1,0,0,0,2257,2259,1,0,0,0,2258,2256,
        1,0,0,0,2259,2264,3,258,129,0,2260,2262,5,175,0,0,2261,2260,1,0,
        0,0,2261,2262,1,0,0,0,2262,2263,1,0,0,0,2263,2265,5,158,0,0,2264,
        2261,1,0,0,0,2264,2265,1,0,0,0,2265,257,1,0,0,0,2266,2274,3,268,
        134,0,2267,2275,3,262,131,0,2268,2270,3,260,130,0,2269,2268,1,0,
        0,0,2270,2271,1,0,0,0,2271,2269,1,0,0,0,2271,2272,1,0,0,0,2272,2275,
        1,0,0,0,2273,2275,3,266,133,0,2274,2267,1,0,0,0,2274,2269,1,0,0,
        0,2274,2273,1,0,0,0,2274,2275,1,0,0,0,2275,259,1,0,0,0,2276,2277,
        5,175,0,0,2277,2279,5,96,0,0,2278,2280,5,175,0,0,2279,2278,1,0,0,
        0,2279,2280,1,0,0,0,2280,2281,1,0,0,0,2281,2296,3,268,134,0,2282,
        2283,5,7,0,0,2283,2284,3,224,112,0,2284,2285,5,8,0,0,2285,2296,1,
        0,0,0,2286,2288,5,7,0,0,2287,2289,3,224,112,0,2288,2287,1,0,0,0,
        2288,2289,1,0,0,0,2289,2290,1,0,0,0,2290,2292,5,159,0,0,2291,2293,
        3,224,112,0,2292,2291,1,0,0,0,2292,2293,1,0,0,0,2293,2294,1,0,0,
        0,2294,2296,5,8,0,0,2295,2276,1,0,0,0,2295,2282,1,0,0,0,2295,2286,
        1,0,0,0,2296,261,1,0,0,0,2297,2309,3,264,132,0,2298,2299,5,175,0,
        0,2299,2300,5,134,0,0,2300,2301,5,175,0,0,2301,2309,5,147,0,0,2302,
        2303,5,175,0,0,2303,2304,5,82,0,0,2304,2305,5,175,0,0,2305,2309,
        5,147,0,0,2306,2307,5,175,0,0,2307,2309,5,66,0,0,2308,2297,1,0,0,
        0,2308,2298,1,0,0,0,2308,2302,1,0,0,0,2308,2306,1,0,0,0,2309,2311,
        1,0,0,0,2310,2312,5,175,0,0,2311,2310,1,0,0,0,2311,2312,1,0,0,0,
        2312,2313,1,0,0,0,2313,2314,3,268,134,0,2314,263,1,0,0,0,2315,2317,
        5,175,0,0,2316,2315,1,0,0,0,2316,2317,1,0,0,0,2317,2318,1,0,0,0,
        2318,2319,5,25,0,0,2319,265,1,0,0,0,2320,2321,5,175,0,0,2321,2322,
        5,99,0,0,2322,2323,5,175,0,0,2323,2331,5,115,0,0,2324,2325,5,175,
        0,0,2325,2326,5,99,0,0,2326,2327,5,175,0,0,2327,2328,5,113,0,0,2328,
        2329,5,175,0,0,2329,2331,5,115,0,0,2330,2320,1,0,0,0,2330,2324,1,
        0,0,0,2331,267,1,0,0,0,2332,2339,3,270,135,0,2333,2335,5,175,0,0,
        2334,2333,1,0,0,0,2334,2335,1,0,0,0,2335,2336,1,0,0,0,2336,2338,
        3,306,153,0,2337,2334,1,0,0,0,2338,2341,1,0,0,0,2339,2337,1,0,0,
        0,2339,2340,1,0,0,0,2340,269,1,0,0,0,2341,2339,1,0,0,0,2342,2352,
        3,278,139,0,2343,2352,3,316,158,0,2344,2352,3,308,154,0,2345,2352,
        3,290,145,0,2346,2352,3,292,146,0,2347,2352,3,302,151,0,2348,2352,
        3,304,152,0,2349,2352,3,312,156,0,2350,2352,3,272,136,0,2351,2342,
        1,0,0,0,2351,2343,1,0,0,0,2351,2344,1,0,0,0,2351,2345,1,0,0,0,2351,
        2346,1,0,0,0,2351,2347,1,0,0,0,2351,2348,1,0,0,0,2351,2349,1,0,0,
        0,2351,2350,1,0,0,0,2352,271,1,0,0,0,2353,2355,5,49,0,0,2354,2356,
        5,175,0,0,2355,2354,1,0,0,0,2355,2356,1,0,0,0,2356,2357,1,0,0,0,
        2357,2359,5,2,0,0,2358,2360,5,175,0,0,2359,2358,1,0,0,0,2359,2360,
        1,0,0,0,2360,2361,1,0,0,0,2361,2363,3,274,137,0,2362,2364,5,175,
        0,0,2363,2362,1,0,0,0,2363,2364,1,0,0,0,2364,2365,1,0,0,0,2365,2366,
        5,3,0,0,2366,2410,1,0,0,0,2367,2369,5,47,0,0,2368,2370,5,175,0,0,
        2369,2368,1,0,0,0,2369,2370,1,0,0,0,2370,2371,1,0,0,0,2371,2373,
        5,2,0,0,2372,2374,5,175,0,0,2373,2372,1,0,0,0,2373,2374,1,0,0,0,
        2374,2375,1,0,0,0,2375,2377,3,274,137,0,2376,2378,5,175,0,0,2377,
        2376,1,0,0,0,2377,2378,1,0,0,0,2378,2379,1,0,0,0,2379,2380,5,3,0,
        0,2380,2410,1,0,0,0,2381,2383,5,114,0,0,2382,2384,5,175,0,0,2383,
        2382,1,0,0,0,2383,2384,1,0,0,0,2384,2385,1,0,0,0,2385,2387,5,2,0,
        0,2386,2388,5,175,0,0,2387,2386,1,0,0,0,2387,2388,1,0,0,0,2388,2389,
        1,0,0,0,2389,2391,3,274,137,0,2390,2392,5,175,0,0,2391,2390,1,0,
        0,0,2391,2392,1,0,0,0,2392,2393,1,0,0,0,2393,2394,5,3,0,0,2394,2410,
        1,0,0,0,2395,2397,5,151,0,0,2396,2398,5,175,0,0,2397,2396,1,0,0,
        0,2397,2398,1,0,0,0,2398,2399,1,0,0,0,2399,2401,5,2,0,0,2400,2402,
        5,175,0,0,2401,2400,1,0,0,0,2401,2402,1,0,0,0,2402,2403,1,0,0,0,
        2403,2405,3,274,137,0,2404,2406,5,175,0,0,2405,2404,1,0,0,0,2405,
        2406,1,0,0,0,2406,2407,1,0,0,0,2407,2408,5,3,0,0,2408,2410,1,0,0,
        0,2409,2353,1,0,0,0,2409,2367,1,0,0,0,2409,2381,1,0,0,0,2409,2395,
        1,0,0,0,2410,273,1,0,0,0,2411,2412,3,276,138,0,2412,2413,5,175,0,
        0,2413,2414,3,180,90,0,2414,275,1,0,0,0,2415,2416,3,312,156,0,2416,
        2417,5,175,0,0,2417,2418,5,96,0,0,2418,2419,5,175,0,0,2419,2420,
        3,224,112,0,2420,277,1,0,0,0,2421,2428,3,314,157,0,2422,2428,5,160,
        0,0,2423,2428,3,280,140,0,2424,2428,5,115,0,0,2425,2428,3,282,141,
        0,2426,2428,3,286,143,0,2427,2421,1,0,0,0,2427,2422,1,0,0,0,2427,
        2423,1,0,0,0,2427,2424,1,0,0,0,2427,2425,1,0,0,0,2427,2426,1,0,0,
        0,2428,279,1,0,0,0,2429,2430,7,6,0,0,2430,281,1,0,0,0,2431,2433,
        5,7,0,0,2432,2434,5,175,0,0,2433,2432,1,0,0,0,2433,2434,1,0,0,0,
        2434,2448,1,0,0,0,2435,2437,3,224,112,0,2436,2438,5,175,0,0,2437,
        2436,1,0,0,0,2437,2438,1,0,0,0,2438,2445,1,0,0,0,2439,2441,3,284,
        142,0,2440,2442,5,175,0,0,2441,2440,1,0,0,0,2441,2442,1,0,0,0,2442,
        2444,1,0,0,0,2443,2439,1,0,0,0,2444,2447,1,0,0,0,2445,2443,1,0,0,
        0,2445,2446,1,0,0,0,2446,2449,1,0,0,0,2447,2445,1,0,0,0,2448,2435,
        1,0,0,0,2448,2449,1,0,0,0,2449,2450,1,0,0,0,2450,2451,5,8,0,0,2451,
        283,1,0,0,0,2452,2454,5,4,0,0,2453,2455,5,175,0,0,2454,2453,1,0,
        0,0,2454,2455,1,0,0,0,2455,2457,1,0,0,0,2456,2458,3,224,112,0,2457,
        2456,1,0,0,0,2457,2458,1,0,0,0,2458,285,1,0,0,0,2459,2461,5,9,0,
        0,2460,2462,5,175,0,0,2461,2460,1,0,0,0,2461,2462,1,0,0,0,2462,2463,
        1,0,0,0,2463,2465,3,288,144,0,2464,2466,5,175,0,0,2465,2464,1,0,
        0,0,2465,2466,1,0,0,0,2466,2477,1,0,0,0,2467,2469,5,4,0,0,2468,2470,
        5,175,0,0,2469,2468,1,0,0,0,2469,2470,1,0,0,0,2470,2471,1,0,0,0,
        2471,2473,3,288,144,0,2472,2474,5,175,0,0,2473,2472,1,0,0,0,2473,
        2474,1,0,0,0,2474,2476,1,0,0,0,2475,2467,1,0,0,0,2476,2479,1,0,0,
        0,2477,2475,1,0,0,0,2477,2478,1,0,0,0,2478,2480,1,0,0,0,2479,2477,
        1,0,0,0,2480,2481,5,10,0,0,2481,287,1,0,0,0,2482,2485,3,328,164,
        0,2483,2485,5,160,0,0,2484,2482,1,0,0,0,2484,2483,1,0,0,0,2485,2487,
        1,0,0,0,2486,2488,5,175,0,0,2487,2486,1,0,0,0,2487,2488,1,0,0,0,
        2488,2489,1,0,0,0,2489,2491,5,159,0,0,2490,2492,5,175,0,0,2491,2490,
        1,0,0,0,2491,2492,1,0,0,0,2492,2493,1,0,0,0,2493,2494,3,224,112,
        0,2494,289,1,0,0,0,2495,2497,5,2,0,0,2496,2498,5,175,0,0,2497,2496,
        1,0,0,0,2497,2498,1,0,0,0,2498,2499,1,0,0,0,2499,2501,3,224,112,
        0,2500,2502,5,175,0,0,2501,2500,1,0,0,0,2501,2502,1,0,0,0,2502,2503,
        1,0,0,0,2503,2504,5,3,0,0,2504,291,1,0,0,0,2505,2507,5,68,0,0,2506,
        2508,5,175,0,0,2507,2506,1,0,0,0,2507,2508,1,0,0,0,2508,2509,1,0,
        0,0,2509,2511,5,2,0,0,2510,2512,5,175,0,0,2511,2510,1,0,0,0,2511,
        2512,1,0,0,0,2512,2513,1,0,0,0,2513,2515,5,154,0,0,2514,2516,5,175,
        0,0,2515,2514,1,0,0,0,2515,2516,1,0,0,0,2516,2517,1,0,0,0,2517,2583,
        5,3,0,0,2518,2520,5,60,0,0,2519,2521,5,175,0,0,2520,2519,1,0,0,0,
        2520,2521,1,0,0,0,2521,2522,1,0,0,0,2522,2524,5,2,0,0,2523,2525,
        5,175,0,0,2524,2523,1,0,0,0,2524,2525,1,0,0,0,2525,2526,1,0,0,0,
        2526,2528,3,296,148,0,2527,2529,5,175,0,0,2528,2527,1,0,0,0,2528,
        2529,1,0,0,0,2529,2540,1,0,0,0,2530,2532,5,52,0,0,2531,2533,5,175,
        0,0,2532,2531,1,0,0,0,2532,2533,1,0,0,0,2533,2534,1,0,0,0,2534,2541,
        3,96,48,0,2535,2537,5,4,0,0,2536,2538,5,175,0,0,2537,2536,1,0,0,
        0,2537,2538,1,0,0,0,2538,2539,1,0,0,0,2539,2541,3,296,148,0,2540,
        2530,1,0,0,0,2540,2535,1,0,0,0,2541,2543,1,0,0,0,2542,2544,5,175,
        0,0,2543,2542,1,0,0,0,2543,2544,1,0,0,0,2544,2545,1,0,0,0,2545,2546,
        5,3,0,0,2546,2583,1,0,0,0,2547,2549,3,294,147,0,2548,2550,5,175,
        0,0,2549,2548,1,0,0,0,2549,2550,1,0,0,0,2550,2551,1,0,0,0,2551,2553,
        5,2,0,0,2552,2554,5,175,0,0,2553,2552,1,0,0,0,2553,2554,1,0,0,0,
        2554,2559,1,0,0,0,2555,2557,5,78,0,0,2556,2558,5,175,0,0,2557,2556,
        1,0,0,0,2557,2558,1,0,0,0,2558,2560,1,0,0,0,2559,2555,1,0,0,0,2559,
        2560,1,0,0,0,2560,2578,1,0,0,0,2561,2563,3,296,148,0,2562,2564,5,
        175,0,0,2563,2562,1,0,0,0,2563,2564,1,0,0,0,2564,2575,1,0,0,0,2565,
        2567,5,4,0,0,2566,2568,5,175,0,0,2567,2566,1,0,0,0,2567,2568,1,0,
        0,0,2568,2569,1,0,0,0,2569,2571,3,296,148,0,2570,2572,5,175,0,0,
        2571,2570,1,0,0,0,2571,2572,1,0,0,0,2572,2574,1,0,0,0,2573,2565,
        1,0,0,0,2574,2577,1,0,0,0,2575,2573,1,0,0,0,2575,2576,1,0,0,0,2576,
        2579,1,0,0,0,2577,2575,1,0,0,0,2578,2561,1,0,0,0,2578,2579,1,0,0,
        0,2579,2580,1,0,0,0,2580,2581,5,3,0,0,2581,2583,1,0,0,0,2582,2505,
        1,0,0,0,2582,2518,1,0,0,0,2582,2547,1,0,0,0,2583,293,1,0,0,0,2584,
        2585,3,328,164,0,2585,295,1,0,0,0,2586,2588,3,328,164,0,2587,2589,
        5,175,0,0,2588,2587,1,0,0,0,2588,2589,1,0,0,0,2589,2590,1,0,0,0,
        2590,2591,5,159,0,0,2591,2593,5,6,0,0,2592,2594,5,175,0,0,2593,2592,
        1,0,0,0,2593,2594,1,0,0,0,2594,2596,1,0,0,0,2595,2586,1,0,0,0,2595,
        2596,1,0,0,0,2596,2597,1,0,0,0,2597,2600,3,224,112,0,2598,2600,3,
        298,149,0,2599,2595,1,0,0,0,2599,2598,1,0,0,0,2600,297,1,0,0,0,2601,
        2603,3,300,150,0,2602,2604,5,175,0,0,2603,2602,1,0,0,0,2603,2604,
        1,0,0,0,2604,2605,1,0,0,0,2605,2606,5,157,0,0,2606,2608,5,16,0,0,
        2607,2609,5,175,0,0,2608,2607,1,0,0,0,2608,2609,1,0,0,0,2609,2610,
        1,0,0,0,2610,2612,3,224,112,0,2611,2613,5,175,0,0,2612,2611,1,0,
        0,0,2612,2613,1,0,0,0,2613,299,1,0,0,0,2614,2639,3,328,164,0,2615,
        2617,5,2,0,0,2616,2618,5,175,0,0,2617,2616,1,0,0,0,2617,2618,1,0,
        0,0,2618,2619,1,0,0,0,2619,2621,3,328,164,0,2620,2622,5,175,0,0,
        2621,2620,1,0,0,0,2621,2622,1,0,0,0,2622,2633,1,0,0,0,2623,2625,
        5,4,0,0,2624,2626,5,175,0,0,2625,2624,1,0,0,0,2625,2626,1,0,0,0,
        2626,2627,1,0,0,0,2627,2629,3,328,164,0,2628,2630,5,175,0,0,2629,
        2628,1,0,0,0,2629,2630,1,0,0,0,2630,2632,1,0,0,0,2631,2623,1,0,0,
        0,2632,2635,1,0,0,0,2633,2631,1,0,0,0,2633,2634,1,0,0,0,2634,2636,
        1,0,0,0,2635,2633,1,0,0,0,2636,2637,5,3,0,0,2637,2639,1,0,0,0,2638,
        2614,1,0,0,0,2638,2615,1,0,0,0,2639,301,1,0,0,0,2640,2645,3,190,
        95,0,2641,2643,5,175,0,0,2642,2641,1,0,0,0,2642,2643,1,0,0,0,2643,
        2644,1,0,0,0,2644,2646,3,192,96,0,2645,2642,1,0,0,0,2646,2647,1,
        0,0,0,2647,2645,1,0,0,0,2647,2648,1,0,0,0,2648,303,1,0,0,0,2649,
        2651,7,7,0,0,2650,2652,5,175,0,0,2651,2650,1,0,0,0,2651,2652,1,0,
        0,0,2652,2653,1,0,0,0,2653,2655,5,9,0,0,2654,2656,5,175,0,0,2655,
        2654,1,0,0,0,2655,2656,1,0,0,0,2656,2657,1,0,0,0,2657,2659,5,106,
        0,0,2658,2660,5,175,0,0,2659,2658,1,0,0,0,2659,2660,1,0,0,0,2660,
        2661,1,0,0,0,2661,2666,3,182,91,0,2662,2664,5,175,0,0,2663,2662,
        1,0,0,0,2663,2664,1,0,0,0,2664,2665,1,0,0,0,2665,2667,3,180,90,0,
        2666,2663,1,0,0,0,2666,2667,1,0,0,0,2667,2672,1,0,0,0,2668,2670,
        5,175,0,0,2669,2668,1,0,0,0,2669,2670,1,0,0,0,2670,2671,1,0,0,0,
        2671,2673,3,144,72,0,2672,2669,1,0,0,0,2672,2673,1,0,0,0,2673,2675,
        1,0,0,0,2674,2676,5,175,0,0,2675,2674,1,0,0,0,2675,2676,1,0,0,0,
        2676,2677,1,0,0,0,2677,2678,5,10,0,0,2678,305,1,0,0,0,2679,2681,
        5,5,0,0,2680,2682,5,175,0,0,2681,2680,1,0,0,0,2681,2682,1,0,0,0,
        2682,2685,1,0,0,0,2683,2686,3,320,160,0,2684,2686,5,154,0,0,2685,
        2683,1,0,0,0,2685,2684,1,0,0,0,2686,307,1,0,0,0,2687,2692,5,59,0,
        0,2688,2690,5,175,0,0,2689,2688,1,0,0,0,2689,2690,1,0,0,0,2690,2691,
        1,0,0,0,2691,2693,3,310,155,0,2692,2689,1,0,0,0,2693,2694,1,0,0,
        0,2694,2692,1,0,0,0,2694,2695,1,0,0,0,2695,2710,1,0,0,0,2696,2698,
        5,59,0,0,2697,2699,5,175,0,0,2698,2697,1,0,0,0,2698,2699,1,0,0,0,
        2699,2700,1,0,0,0,2700,2705,3,224,112,0,2701,2703,5,175,0,0,2702,
        2701,1,0,0,0,2702,2703,1,0,0,0,2703,2704,1,0,0,0,2704,2706,3,310,
        155,0,2705,2702,1,0,0,0,2706,2707,1,0,0,0,2707,2705,1,0,0,0,2707,
        2708,1,0,0,0,2708,2710,1,0,0,0,2709,2687,1,0,0,0,2709,2696,1,0,0,
        0,2710,2719,1,0,0,0,2711,2713,5,175,0,0,2712,2711,1,0,0,0,2712,2713,
        1,0,0,0,2713,2714,1,0,0,0,2714,2716,5,80,0,0,2715,2717,5,175,0,0,
        2716,2715,1,0,0,0,2716,2717,1,0,0,0,2717,2718,1,0,0,0,2718,2720,
        3,224,112,0,2719,2712,1,0,0,0,2719,2720,1,0,0,0,2720,2722,1,0,0,
        0,2721,2723,5,175,0,0,2722,2721,1,0,0,0,2722,2723,1,0,0,0,2723,2724,
        1,0,0,0,2724,2725,5,81,0,0,2725,309,1,0,0,0,2726,2728,5,145,0,0,
        2727,2729,5,175,0,0,2728,2727,1,0,0,0,2728,2729,1,0,0,0,2729,2730,
        1,0,0,0,2730,2732,3,224,112,0,2731,2733,5,175,0,0,2732,2731,1,0,
        0,0,2732,2733,1,0,0,0,2733,2734,1,0,0,0,2734,2736,5,136,0,0,2735,
        2737,5,175,0,0,2736,2735,1,0,0,0,2736,2737,1,0,0,0,2737,2738,1,0,
        0,0,2738,2739,3,224,112,0,2739,311,1,0,0,0,2740,2741,3,328,164,0,
        2741,313,1,0,0,0,2742,2745,3,324,162,0,2743,2745,3,322,161,0,2744,
        2742,1,0,0,0,2744,2743,1,0,0,0,2745,315,1,0,0,0,2746,2749,5,26,0,
        0,2747,2750,3,328,164,0,2748,2750,5,162,0,0,2749,2747,1,0,0,0,2749,
        2748,1,0,0,0,2750,317,1,0,0,0,2751,2753,3,270,135,0,2752,2754,5,
        175,0,0,2753,2752,1,0,0,0,2753,2754,1,0,0,0,2754,2755,1,0,0,0,2755,
        2756,3,306,153,0,2756,319,1,0,0,0,2757,2758,3,326,163,0,2758,321,
        1,0,0,0,2759,2760,5,162,0,0,2760,323,1,0,0,0,2761,2762,7,8,0,0,2762,
        325,1,0,0,0,2763,2764,3,328,164,0,2764,327,1,0,0,0,2765,2771,5,171,
        0,0,2766,2767,5,174,0,0,2767,2771,6,164,-1,0,2768,2771,5,163,0,0,
        2769,2771,3,330,165,0,2770,2765,1,0,0,0,2770,2766,1,0,0,0,2770,2768,
        1,0,0,0,2770,2769,1,0,0,0,2771,329,1,0,0,0,2772,2773,7,9,0,0,2773,
        331,1,0,0,0,2774,2775,7,10,0,0,2775,333,1,0,0,0,2776,2777,7,11,0,
        0,2777,335,1,0,0,0,2778,2779,7,12,0,0,2779,337,1,0,0,0,480,340,344,
        349,353,358,361,365,368,390,396,400,403,409,413,417,421,425,429,
        433,438,442,449,453,461,466,476,480,484,489,502,506,514,518,522,
        526,534,538,542,546,561,566,572,576,579,582,588,592,597,600,605,
        609,613,618,633,637,644,664,668,671,674,677,680,684,689,693,703,
        707,712,717,722,728,732,736,741,748,752,756,759,776,780,784,788,
        792,795,798,809,813,818,822,826,830,834,836,840,844,846,852,856,
        860,864,868,872,877,895,902,915,922,928,931,941,944,952,955,961,
        964,970,985,1001,1008,1015,1026,1046,1050,1055,1064,1068,1073,1079,
        1085,1091,1095,1099,1107,1111,1115,1121,1125,1129,1135,1139,1143,
        1147,1151,1157,1161,1165,1169,1173,1177,1183,1190,1195,1201,1206,
        1223,1227,1233,1237,1246,1252,1257,1262,1266,1271,1277,1282,1285,
        1289,1293,1297,1303,1307,1312,1317,1321,1324,1326,1330,1334,1340,
        1344,1349,1353,1362,1368,1376,1380,1384,1388,1395,1399,1403,1407,
        1410,1413,1420,1426,1430,1435,1442,1445,1448,1453,1457,1461,1466,
        1470,1479,1483,1488,1502,1504,1506,1511,1521,1527,1534,1547,1551,
        1555,1559,1564,1569,1573,1579,1583,1587,1591,1596,1602,1605,1611,
        1614,1620,1624,1628,1632,1636,1641,1646,1650,1655,1658,1667,1676,
        1681,1694,1697,1705,1709,1714,1719,1723,1728,1734,1739,1746,1750,
        1754,1756,1760,1762,1766,1768,1774,1780,1784,1787,1790,1796,1799,
        1802,1806,1812,1815,1818,1822,1826,1830,1832,1836,1838,1842,1844,
        1848,1850,1856,1860,1864,1868,1872,1876,1880,1884,1888,1891,1897,
        1901,1905,1908,1913,1918,1923,1928,1934,1937,1940,1943,1946,1949,
        1953,1957,1961,1965,1975,1978,1981,1985,1988,1991,1995,1999,2003,
        2007,2011,2015,2017,2020,2024,2028,2032,2036,2038,2044,2047,2050,
        2071,2081,2091,2096,2100,2107,2111,2115,2119,2123,2131,2135,2139,
        2143,2149,2153,2159,2163,2168,2173,2177,2182,2187,2191,2197,2204,
        2208,2214,2221,2225,2231,2238,2242,2247,2252,2256,2261,2264,2271,
        2274,2279,2288,2292,2295,2308,2311,2316,2330,2334,2339,2351,2355,
        2359,2363,2369,2373,2377,2383,2387,2391,2397,2401,2405,2409,2427,
        2433,2437,2441,2445,2448,2454,2457,2461,2465,2469,2473,2477,2484,
        2487,2491,2497,2501,2507,2511,2515,2520,2524,2528,2532,2537,2540,
        2543,2549,2553,2557,2559,2563,2567,2571,2575,2578,2582,2588,2593,
        2595,2599,2603,2608,2612,2617,2621,2625,2629,2633,2638,2642,2647,
        2651,2655,2659,2663,2666,2669,2672,2675,2681,2685,2689,2694,2698,
        2702,2707,2709,2712,2716,2719,2722,2728,2732,2736,2744,2749,2753,
        2770
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
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
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
    public oC_FunctionInvocation(): OC_FunctionInvocationContext {
        return this.getTypedRuleContext(OC_FunctionInvocationContext, 0);
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
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
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
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
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
    public oC_FunctionInvocation(): OC_FunctionInvocationContext {
        return this.getTypedRuleContext(OC_FunctionInvocationContext, 0);
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
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsContext, 0);
    }
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
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
    public kU_FromToConnections(): KU_FromToConnectionsContext {
        return this.getTypedRuleContext(KU_FromToConnectionsContext, 0);
    }
    public GROUP(): antlr.TerminalNode {
        return this.getToken(CypherParser.GROUP, 0);
    }
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsContext, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateRelTable;
    }
}


export class KU_FromToConnectionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_FromToConnection__list(): KU_FromToConnectionContext[] {
        return this.getTypedRuleContexts(KU_FromToConnectionContext);
    }
    public kU_FromToConnection(i: number): KU_FromToConnectionContext {
        return this.getTypedRuleContext(KU_FromToConnectionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_FromToConnections;
    }
}


export class KU_FromToConnectionContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_FromToConnection;
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


export class KU_IfExistsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(CypherParser.IF, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXISTS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_IfExists;
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
    public SEQUENCE(): antlr.TerminalNode {
        return this.getToken(CypherParser.SEQUENCE, 0);
    }
    public kU_IfExists(): KU_IfExistsContext {
        return this.getTypedRuleContext(KU_IfExistsContext, 0);
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
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
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
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public kU_IfExists(): KU_IfExistsContext {
        return this.getTypedRuleContext(KU_IfExistsContext, 0);
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


export class KU_ColumnDefinitionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_ColumnDefinition__list(): KU_ColumnDefinitionContext[] {
        return this.getTypedRuleContexts(KU_ColumnDefinitionContext);
    }
    public kU_ColumnDefinition(i: number): KU_ColumnDefinitionContext {
        return this.getTypedRuleContext(KU_ColumnDefinitionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ColumnDefinitions;
    }
}


export class KU_ColumnDefinitionContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_ColumnDefinition;
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
    public kU_ColumnDefinition(): KU_ColumnDefinitionContext {
        return this.getTypedRuleContext(KU_ColumnDefinitionContext, 0);
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
    public PRIMARY(): antlr.TerminalNode {
        return this.getToken(CypherParser.PRIMARY, 0);
    }
    public KEY(): antlr.TerminalNode {
        return this.getToken(CypherParser.KEY, 0);
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
    public kU_ColumnDefinitions(): KU_ColumnDefinitionsContext {
        return this.getTypedRuleContext(KU_ColumnDefinitionsContext, 0);
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
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public LOGICAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.LOGICAL, 0);
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
    public ROLLBACK(): antlr.TerminalNode {
        return this.getToken(CypherParser.ROLLBACK, 0);
    }
    public CHECKPOINT(): antlr.TerminalNode {
        return this.getToken(CypherParser.CHECKPOINT, 0);
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
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public EXTENSION(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXTENSION, 0);
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
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
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
    public kU_ColumnDefinitions(): KU_ColumnDefinitionsContext {
        return this.getTypedRuleContext(KU_ColumnDefinitionsContext, 0);
    }
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_LoadFrom;
    }
}


export class OC_YieldItemContext extends antlr.ParserRuleContext {
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
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_YieldItem;
    }
}


export class OC_YieldItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_YieldItem__list(): OC_YieldItemContext[] {
        return this.getTypedRuleContexts(OC_YieldItemContext);
    }
    public oC_YieldItem(i: number): OC_YieldItemContext {
        return this.getTypedRuleContext(OC_YieldItemContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_YieldItems;
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
    public YIELD(): antlr.TerminalNode {
        return this.getToken(CypherParser.YIELD, 0);
    }
    public oC_YieldItems(): OC_YieldItemsContext {
        return this.getTypedRuleContext(OC_YieldItemsContext, 0);
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
    public kU_Hint(): KU_HintContext {
        return this.getTypedRuleContext(KU_HintContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Match;
    }
}


export class KU_HintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HINT(): antlr.TerminalNode {
        return this.getToken(CypherParser.HINT, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public kU_JoinNode(): KU_JoinNodeContext {
        return this.getTypedRuleContext(KU_JoinNodeContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Hint;
    }
}


export class KU_JoinNodeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_JoinNode__list(): KU_JoinNodeContext[] {
        return this.getTypedRuleContexts(KU_JoinNodeContext);
    }
    public kU_JoinNode(i: number): KU_JoinNodeContext {
        return this.getTypedRuleContext(KU_JoinNodeContext, i);
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
    public JOIN(): antlr.TerminalNode {
        return this.getToken(CypherParser.JOIN, 0);
    }
    public MULTI_JOIN__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.MULTI_JOIN);
    }
    public MULTI_JOIN(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.MULTI_JOIN, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_JoinNode;
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
    public kU_RecursiveDetail(): KU_RecursiveDetailContext {
        return this.getTypedRuleContext(KU_RecursiveDetailContext, 0);
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


export class KU_RecursiveDetailContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public kU_RecursiveType(): KU_RecursiveTypeContext {
        return this.getTypedRuleContext(KU_RecursiveTypeContext, 0);
    }
    public oC_RangeLiteral(): OC_RangeLiteralContext {
        return this.getTypedRuleContext(OC_RangeLiteralContext, 0);
    }
    public kU_RecursiveComprehension(): KU_RecursiveComprehensionContext {
        return this.getTypedRuleContext(KU_RecursiveComprehensionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_RecursiveDetail;
    }
}


export class KU_RecursiveTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WSHORTEST(): antlr.TerminalNode {
        return this.getToken(CypherParser.WSHORTEST, 0);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public ALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.ALL, 0);
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
    public TRAIL(): antlr.TerminalNode {
        return this.getToken(CypherParser.TRAIL, 0);
    }
    public ACYCLIC(): antlr.TerminalNode {
        return this.getToken(CypherParser.ACYCLIC, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_RecursiveType;
    }
}


export class OC_RangeLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_LowerBound(): OC_LowerBoundContext {
        return this.getTypedRuleContext(OC_LowerBoundContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_UpperBound(): OC_UpperBoundContext {
        return this.getTypedRuleContext(OC_UpperBoundContext, 0);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RangeLiteral;
    }
}


export class KU_RecursiveComprehensionContext extends antlr.ParserRuleContext {
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
    public kU_RecursiveProjectionItems__list(): KU_RecursiveProjectionItemsContext[] {
        return this.getTypedRuleContexts(KU_RecursiveProjectionItemsContext);
    }
    public kU_RecursiveProjectionItems(i: number): KU_RecursiveProjectionItemsContext {
        return this.getTypedRuleContext(KU_RecursiveProjectionItemsContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_RecursiveComprehension;
    }
}


export class KU_RecursiveProjectionItemsContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_RecursiveProjectionItems;
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
    public oC_ExistCountSubquery(): OC_ExistCountSubqueryContext {
        return this.getTypedRuleContext(OC_ExistCountSubqueryContext, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public oC_Quantifier(): OC_QuantifierContext {
        return this.getTypedRuleContext(OC_QuantifierContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Atom;
    }
}


export class OC_QuantifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.ALL, 0);
    }
    public oC_FilterExpression(): OC_FilterExpressionContext {
        return this.getTypedRuleContext(OC_FilterExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public ANY(): antlr.TerminalNode {
        return this.getToken(CypherParser.ANY, 0);
    }
    public NONE(): antlr.TerminalNode {
        return this.getToken(CypherParser.NONE, 0);
    }
    public SINGLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.SINGLE, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Quantifier;
    }
}


export class OC_FilterExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_IdInColl(): OC_IdInCollContext {
        return this.getTypedRuleContext(OC_IdInCollContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_FilterExpression;
    }
}


export class OC_IdInCollContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
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
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_IdInColl;
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
    public kU_LambdaParameter(): KU_LambdaParameterContext {
        return this.getTypedRuleContext(KU_LambdaParameterContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_FunctionParameter;
    }
}


export class KU_LambdaParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_LambdaVars(): KU_LambdaVarsContext {
        return this.getTypedRuleContext(KU_LambdaVarsContext, 0);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
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
        return CypherParser.RULE_kU_LambdaParameter;
    }
}


export class KU_LambdaVarsContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_LambdaVars;
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


export class OC_ExistCountSubqueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(CypherParser.MATCH, 0);
    }
    public oC_Pattern(): OC_PatternContext {
        return this.getTypedRuleContext(OC_PatternContext, 0);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXISTS, 0);
    }
    public COUNT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COUNT, 0);
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
    public kU_Hint(): KU_HintContext {
        return this.getTypedRuleContext(KU_HintContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ExistCountSubquery;
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
    public ExponentDecimalReal(): antlr.TerminalNode {
        return this.getToken(CypherParser.ExponentDecimalReal, 0);
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
    public CHECKPOINT(): antlr.TerminalNode {
        return this.getToken(CypherParser.CHECKPOINT, 0);
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
    public LOGICAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.LOGICAL, 0);
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
    public L_SKIP(): antlr.TerminalNode {
        return this.getToken(CypherParser.L_SKIP, 0);
    }
    public LIMIT(): antlr.TerminalNode {
        return this.getToken(CypherParser.LIMIT, 0);
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
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(CypherParser.TO, 0);
    }
    public YIELD(): antlr.TerminalNode {
        return this.getToken(CypherParser.YIELD, 0);
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

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
    public static readonly FORCE = 89;
    public static readonly GLOB = 90;
    public static readonly GRAPH = 91;
    public static readonly GROUP = 92;
    public static readonly HEADERS = 93;
    public static readonly HINT = 94;
    public static readonly IMPORT = 95;
    public static readonly IF = 96;
    public static readonly IN = 97;
    public static readonly INCREMENT = 98;
    public static readonly INSTALL = 99;
    public static readonly IS = 100;
    public static readonly JOIN = 101;
    public static readonly KEY = 102;
    public static readonly LIMIT = 103;
    public static readonly LOAD = 104;
    public static readonly LOGICAL = 105;
    public static readonly MACRO = 106;
    public static readonly MATCH = 107;
    public static readonly MAXVALUE = 108;
    public static readonly MERGE = 109;
    public static readonly MINVALUE = 110;
    public static readonly MULTI_JOIN = 111;
    public static readonly NO = 112;
    public static readonly NODE = 113;
    public static readonly NOT = 114;
    public static readonly NONE = 115;
    public static readonly NULL = 116;
    public static readonly ON = 117;
    public static readonly ONLY = 118;
    public static readonly OPTIONAL = 119;
    public static readonly OR = 120;
    public static readonly ORDER = 121;
    public static readonly PRIMARY = 122;
    public static readonly PROFILE = 123;
    public static readonly PROJECT = 124;
    public static readonly READ = 125;
    public static readonly REL = 126;
    public static readonly RENAME = 127;
    public static readonly RETURN = 128;
    public static readonly ROLLBACK = 129;
    public static readonly ROLLBACK_SKIP_CHECKPOINT = 130;
    public static readonly SEQUENCE = 131;
    public static readonly SET = 132;
    public static readonly SHORTEST = 133;
    public static readonly START = 134;
    public static readonly STARTS = 135;
    public static readonly STRUCT = 136;
    public static readonly TABLE = 137;
    public static readonly THEN = 138;
    public static readonly TO = 139;
    public static readonly TRAIL = 140;
    public static readonly TRANSACTION = 141;
    public static readonly TRUE = 142;
    public static readonly TYPE = 143;
    public static readonly UNION = 144;
    public static readonly UNWIND = 145;
    public static readonly UNINSTALL = 146;
    public static readonly UPDATE = 147;
    public static readonly USE = 148;
    public static readonly WHEN = 149;
    public static readonly WHERE = 150;
    public static readonly WITH = 151;
    public static readonly WRITE = 152;
    public static readonly WSHORTEST = 153;
    public static readonly XOR = 154;
    public static readonly SINGLE = 155;
    public static readonly YIELD = 156;
    public static readonly USER = 157;
    public static readonly DECIMAL = 158;
    public static readonly STAR = 159;
    public static readonly L_SKIP = 160;
    public static readonly INVALID_NOT_EQUAL = 161;
    public static readonly COLON = 162;
    public static readonly MINUS = 163;
    public static readonly FACTORIAL = 164;
    public static readonly StringLiteral = 165;
    public static readonly EscapedChar = 166;
    public static readonly DecimalInteger = 167;
    public static readonly HexLetter = 168;
    public static readonly HexDigit = 169;
    public static readonly Digit = 170;
    public static readonly NonZeroDigit = 171;
    public static readonly NonZeroOctDigit = 172;
    public static readonly ZeroDigit = 173;
    public static readonly ExponentDecimalReal = 174;
    public static readonly RegularDecimalReal = 175;
    public static readonly UnescapedSymbolicName = 176;
    public static readonly IdentifierStart = 177;
    public static readonly IdentifierPart = 178;
    public static readonly EscapedSymbolicName = 179;
    public static readonly SP = 180;
    public static readonly WHITESPACE = 181;
    public static readonly CypherComment = 182;
    public static readonly Unknown = 183;
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
    public static readonly RULE_kU_CreateUser = 29;
    public static readonly RULE_kU_IncrementBy = 30;
    public static readonly RULE_kU_MinValue = 31;
    public static readonly RULE_kU_MaxValue = 32;
    public static readonly RULE_kU_StartWith = 33;
    public static readonly RULE_kU_Cycle = 34;
    public static readonly RULE_kU_IfExists = 35;
    public static readonly RULE_kU_Drop = 36;
    public static readonly RULE_kU_AlterTable = 37;
    public static readonly RULE_kU_AlterOptions = 38;
    public static readonly RULE_kU_AddProperty = 39;
    public static readonly RULE_kU_Default = 40;
    public static readonly RULE_kU_DropProperty = 41;
    public static readonly RULE_kU_RenameTable = 42;
    public static readonly RULE_kU_RenameProperty = 43;
    public static readonly RULE_kU_AddFromToConnection = 44;
    public static readonly RULE_kU_DropFromToConnection = 45;
    public static readonly RULE_kU_ColumnDefinitions = 46;
    public static readonly RULE_kU_ColumnDefinition = 47;
    public static readonly RULE_kU_PropertyDefinitions = 48;
    public static readonly RULE_kU_PropertyDefinition = 49;
    public static readonly RULE_kU_CreateNodeConstraint = 50;
    public static readonly RULE_kU_DataType = 51;
    public static readonly RULE_kU_ListIdentifiers = 52;
    public static readonly RULE_kU_ListIdentifier = 53;
    public static readonly RULE_oC_AnyCypherOption = 54;
    public static readonly RULE_oC_Explain = 55;
    public static readonly RULE_oC_Profile = 56;
    public static readonly RULE_kU_Transaction = 57;
    public static readonly RULE_kU_Extension = 58;
    public static readonly RULE_kU_LoadExtension = 59;
    public static readonly RULE_kU_InstallExtension = 60;
    public static readonly RULE_kU_UninstallExtension = 61;
    public static readonly RULE_kU_UpdateExtension = 62;
    public static readonly RULE_oC_Query = 63;
    public static readonly RULE_oC_RegularQuery = 64;
    public static readonly RULE_oC_Union = 65;
    public static readonly RULE_oC_SingleQuery = 66;
    public static readonly RULE_oC_SinglePartQuery = 67;
    public static readonly RULE_oC_MultiPartQuery = 68;
    public static readonly RULE_kU_QueryPart = 69;
    public static readonly RULE_oC_UpdatingClause = 70;
    public static readonly RULE_oC_ReadingClause = 71;
    public static readonly RULE_kU_LoadFrom = 72;
    public static readonly RULE_oC_YieldItem = 73;
    public static readonly RULE_oC_YieldItems = 74;
    public static readonly RULE_kU_InQueryCall = 75;
    public static readonly RULE_oC_Match = 76;
    public static readonly RULE_kU_Hint = 77;
    public static readonly RULE_kU_JoinNode = 78;
    public static readonly RULE_oC_Unwind = 79;
    public static readonly RULE_oC_Create = 80;
    public static readonly RULE_oC_Merge = 81;
    public static readonly RULE_oC_MergeAction = 82;
    public static readonly RULE_oC_Set = 83;
    public static readonly RULE_oC_SetItem = 84;
    public static readonly RULE_oC_Delete = 85;
    public static readonly RULE_oC_With = 86;
    public static readonly RULE_oC_Return = 87;
    public static readonly RULE_oC_ProjectionBody = 88;
    public static readonly RULE_oC_ProjectionItems = 89;
    public static readonly RULE_oC_ProjectionItem = 90;
    public static readonly RULE_oC_Order = 91;
    public static readonly RULE_oC_Skip = 92;
    public static readonly RULE_oC_Limit = 93;
    public static readonly RULE_oC_SortItem = 94;
    public static readonly RULE_oC_Where = 95;
    public static readonly RULE_oC_Pattern = 96;
    public static readonly RULE_oC_PatternPart = 97;
    public static readonly RULE_oC_AnonymousPatternPart = 98;
    public static readonly RULE_oC_PatternElement = 99;
    public static readonly RULE_oC_NodePattern = 100;
    public static readonly RULE_oC_PatternElementChain = 101;
    public static readonly RULE_oC_RelationshipPattern = 102;
    public static readonly RULE_oC_RelationshipDetail = 103;
    public static readonly RULE_kU_Properties = 104;
    public static readonly RULE_oC_RelationshipTypes = 105;
    public static readonly RULE_oC_NodeLabels = 106;
    public static readonly RULE_oC_NodeLabel = 107;
    public static readonly RULE_kU_RecursiveDetail = 108;
    public static readonly RULE_kU_RecursiveType = 109;
    public static readonly RULE_oC_RangeLiteral = 110;
    public static readonly RULE_kU_RecursiveComprehension = 111;
    public static readonly RULE_kU_RecursiveProjectionItems = 112;
    public static readonly RULE_oC_LowerBound = 113;
    public static readonly RULE_oC_UpperBound = 114;
    public static readonly RULE_oC_LabelName = 115;
    public static readonly RULE_oC_RelTypeName = 116;
    public static readonly RULE_oC_Expression = 117;
    public static readonly RULE_oC_OrExpression = 118;
    public static readonly RULE_oC_XorExpression = 119;
    public static readonly RULE_oC_AndExpression = 120;
    public static readonly RULE_oC_NotExpression = 121;
    public static readonly RULE_oC_ComparisonExpression = 122;
    public static readonly RULE_kU_ComparisonOperator = 123;
    public static readonly RULE_kU_BitwiseOrOperatorExpression = 124;
    public static readonly RULE_kU_BitwiseAndOperatorExpression = 125;
    public static readonly RULE_kU_BitShiftOperatorExpression = 126;
    public static readonly RULE_kU_BitShiftOperator = 127;
    public static readonly RULE_oC_AddOrSubtractExpression = 128;
    public static readonly RULE_kU_AddOrSubtractOperator = 129;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 130;
    public static readonly RULE_kU_MultiplyDivideModuloOperator = 131;
    public static readonly RULE_oC_PowerOfExpression = 132;
    public static readonly RULE_oC_StringListNullOperatorExpression = 133;
    public static readonly RULE_oC_ListOperatorExpression = 134;
    public static readonly RULE_oC_StringOperatorExpression = 135;
    public static readonly RULE_oC_RegularExpression = 136;
    public static readonly RULE_oC_NullOperatorExpression = 137;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 138;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 139;
    public static readonly RULE_oC_Atom = 140;
    public static readonly RULE_oC_Quantifier = 141;
    public static readonly RULE_oC_FilterExpression = 142;
    public static readonly RULE_oC_IdInColl = 143;
    public static readonly RULE_oC_Literal = 144;
    public static readonly RULE_oC_BooleanLiteral = 145;
    public static readonly RULE_oC_ListLiteral = 146;
    public static readonly RULE_kU_ListEntry = 147;
    public static readonly RULE_kU_StructLiteral = 148;
    public static readonly RULE_kU_StructField = 149;
    public static readonly RULE_oC_ParenthesizedExpression = 150;
    public static readonly RULE_oC_FunctionInvocation = 151;
    public static readonly RULE_oC_FunctionName = 152;
    public static readonly RULE_kU_FunctionParameter = 153;
    public static readonly RULE_kU_LambdaParameter = 154;
    public static readonly RULE_kU_LambdaVars = 155;
    public static readonly RULE_oC_PathPatterns = 156;
    public static readonly RULE_oC_ExistCountSubquery = 157;
    public static readonly RULE_oC_PropertyLookup = 158;
    public static readonly RULE_oC_CaseExpression = 159;
    public static readonly RULE_oC_CaseAlternative = 160;
    public static readonly RULE_oC_Variable = 161;
    public static readonly RULE_oC_NumberLiteral = 162;
    public static readonly RULE_oC_Parameter = 163;
    public static readonly RULE_oC_PropertyExpression = 164;
    public static readonly RULE_oC_PropertyKeyName = 165;
    public static readonly RULE_oC_IntegerLiteral = 166;
    public static readonly RULE_oC_DoubleLiteral = 167;
    public static readonly RULE_oC_SchemaName = 168;
    public static readonly RULE_oC_SymbolicName = 169;
    public static readonly RULE_kU_NonReservedKeywords = 170;
    public static readonly RULE_oC_LeftArrowHead = 171;
    public static readonly RULE_oC_RightArrowHead = 172;
    public static readonly RULE_oC_Dash = 173;

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
        null, null, null, null, null, null, null, null, null, "'*'", null, 
        "'!='", "':'", "'-'", "'!'", null, null, null, null, null, null, 
        null, null, "'0'"
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
        "FALSE", "FROM", "FORCE", "GLOB", "GRAPH", "GROUP", "HEADERS", "HINT", 
        "IMPORT", "IF", "IN", "INCREMENT", "INSTALL", "IS", "JOIN", "KEY", 
        "LIMIT", "LOAD", "LOGICAL", "MACRO", "MATCH", "MAXVALUE", "MERGE", 
        "MINVALUE", "MULTI_JOIN", "NO", "NODE", "NOT", "NONE", "NULL", "ON", 
        "ONLY", "OPTIONAL", "OR", "ORDER", "PRIMARY", "PROFILE", "PROJECT", 
        "READ", "REL", "RENAME", "RETURN", "ROLLBACK", "ROLLBACK_SKIP_CHECKPOINT", 
        "SEQUENCE", "SET", "SHORTEST", "START", "STARTS", "STRUCT", "TABLE", 
        "THEN", "TO", "TRAIL", "TRANSACTION", "TRUE", "TYPE", "UNION", "UNWIND", 
        "UNINSTALL", "UPDATE", "USE", "WHEN", "WHERE", "WITH", "WRITE", 
        "WSHORTEST", "XOR", "SINGLE", "YIELD", "USER", "DECIMAL", "STAR", 
        "L_SKIP", "INVALID_NOT_EQUAL", "COLON", "MINUS", "FACTORIAL", "StringLiteral", 
        "EscapedChar", "DecimalInteger", "HexLetter", "HexDigit", "Digit", 
        "NonZeroDigit", "NonZeroOctDigit", "ZeroDigit", "ExponentDecimalReal", 
        "RegularDecimalReal", "UnescapedSymbolicName", "IdentifierStart", 
        "IdentifierPart", "EscapedSymbolicName", "SP", "WHITESPACE", "CypherComment", 
        "Unknown"
    ];
    public static readonly ruleNames = [
        "ku_Statements", "oC_Cypher", "oC_Statement", "kU_CopyFrom", "kU_ColumnNames", 
        "kU_ScanSource", "kU_CopyFromByColumn", "kU_CopyTO", "kU_ExportDatabase", 
        "kU_ImportDatabase", "kU_AttachDatabase", "kU_Option", "kU_Options", 
        "kU_DetachDatabase", "kU_UseDatabase", "kU_StandaloneCall", "kU_CommentOn", 
        "kU_CreateMacro", "kU_PositionalArgs", "kU_DefaultArg", "kU_FilePaths", 
        "kU_IfNotExists", "kU_CreateNodeTable", "kU_CreateRelTable", "kU_FromToConnections", 
        "kU_FromToConnection", "kU_CreateSequence", "kU_CreateType", "kU_SequenceOptions", 
        "kU_CreateUser", "kU_IncrementBy", "kU_MinValue", "kU_MaxValue", 
        "kU_StartWith", "kU_Cycle", "kU_IfExists", "kU_Drop", "kU_AlterTable", 
        "kU_AlterOptions", "kU_AddProperty", "kU_Default", "kU_DropProperty", 
        "kU_RenameTable", "kU_RenameProperty", "kU_AddFromToConnection", 
        "kU_DropFromToConnection", "kU_ColumnDefinitions", "kU_ColumnDefinition", 
        "kU_PropertyDefinitions", "kU_PropertyDefinition", "kU_CreateNodeConstraint", 
        "kU_DataType", "kU_ListIdentifiers", "kU_ListIdentifier", "oC_AnyCypherOption", 
        "oC_Explain", "oC_Profile", "kU_Transaction", "kU_Extension", "kU_LoadExtension", 
        "kU_InstallExtension", "kU_UninstallExtension", "kU_UpdateExtension", 
        "oC_Query", "oC_RegularQuery", "oC_Union", "oC_SingleQuery", "oC_SinglePartQuery", 
        "oC_MultiPartQuery", "kU_QueryPart", "oC_UpdatingClause", "oC_ReadingClause", 
        "kU_LoadFrom", "oC_YieldItem", "oC_YieldItems", "kU_InQueryCall", 
        "oC_Match", "kU_Hint", "kU_JoinNode", "oC_Unwind", "oC_Create", 
        "oC_Merge", "oC_MergeAction", "oC_Set", "oC_SetItem", "oC_Delete", 
        "oC_With", "oC_Return", "oC_ProjectionBody", "oC_ProjectionItems", 
        "oC_ProjectionItem", "oC_Order", "oC_Skip", "oC_Limit", "oC_SortItem", 
        "oC_Where", "oC_Pattern", "oC_PatternPart", "oC_AnonymousPatternPart", 
        "oC_PatternElement", "oC_NodePattern", "oC_PatternElementChain", 
        "oC_RelationshipPattern", "oC_RelationshipDetail", "kU_Properties", 
        "oC_RelationshipTypes", "oC_NodeLabels", "oC_NodeLabel", "kU_RecursiveDetail", 
        "kU_RecursiveType", "oC_RangeLiteral", "kU_RecursiveComprehension", 
        "kU_RecursiveProjectionItems", "oC_LowerBound", "oC_UpperBound", 
        "oC_LabelName", "oC_RelTypeName", "oC_Expression", "oC_OrExpression", 
        "oC_XorExpression", "oC_AndExpression", "oC_NotExpression", "oC_ComparisonExpression", 
        "kU_ComparisonOperator", "kU_BitwiseOrOperatorExpression", "kU_BitwiseAndOperatorExpression", 
        "kU_BitShiftOperatorExpression", "kU_BitShiftOperator", "oC_AddOrSubtractExpression", 
        "kU_AddOrSubtractOperator", "oC_MultiplyDivideModuloExpression", 
        "kU_MultiplyDivideModuloOperator", "oC_PowerOfExpression", "oC_StringListNullOperatorExpression", 
        "oC_ListOperatorExpression", "oC_StringOperatorExpression", "oC_RegularExpression", 
        "oC_NullOperatorExpression", "oC_UnaryAddSubtractOrFactorialExpression", 
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
            this.state = 348;
            this.oC_Cypher();
            this.state = 359;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 350;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 349;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 352;
                    this.match(CypherParser.T__0);
                    this.state = 354;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                    case 1:
                        {
                        this.state = 353;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    this.state = 356;
                    this.oC_Cypher();
                    }
                    }
                }
                this.state = 361;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            }
            this.state = 363;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 362;
                this.match(CypherParser.SP);
                }
            }

            this.state = 365;
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
            this.state = 368;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===84 || _la===123) {
                {
                this.state = 367;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 371;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 370;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 373;
            this.oC_Statement();
            }
            this.state = 378;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
            case 1:
                {
                this.state = 375;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 374;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 377;
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
            this.state = 401;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 380;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 381;
                this.kU_CreateUser();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 382;
                this.kU_CreateNodeTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 383;
                this.kU_CreateRelTable();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 384;
                this.kU_CreateSequence();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 385;
                this.kU_CreateType();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 386;
                this.kU_Drop();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 387;
                this.kU_AlterTable();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 388;
                this.kU_CopyFrom();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 389;
                this.kU_CopyFromByColumn();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 390;
                this.kU_CopyTO();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 391;
                this.kU_StandaloneCall();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 392;
                this.kU_CreateMacro();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 393;
                this.kU_CommentOn();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 394;
                this.kU_Transaction();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 395;
                this.kU_Extension();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 396;
                this.kU_ExportDatabase();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 397;
                this.kU_ImportDatabase();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 398;
                this.kU_AttachDatabase();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 399;
                this.kU_DetachDatabase();
                }
                break;
            case 21:
                this.enterOuterAlt(localctx, 21);
                {
                this.state = 400;
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
            this.state = 403;
            this.match(CypherParser.COPY);
            this.state = 404;
            this.match(CypherParser.SP);
            this.state = 405;
            this.oC_SchemaName();
            this.state = 407;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
            case 1:
                {
                this.state = 406;
                this.kU_ColumnNames();
                }
                break;
            }
            this.state = 409;
            this.match(CypherParser.SP);
            this.state = 410;
            this.match(CypherParser.FROM);
            this.state = 411;
            this.match(CypherParser.SP);
            this.state = 412;
            this.kU_ScanSource();
            this.state = 426;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                {
                this.state = 414;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 413;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 416;
                this.match(CypherParser.T__1);
                this.state = 418;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 417;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 420;
                this.kU_Options();
                this.state = 422;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 421;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 424;
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
            this.state = 429;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 428;
                this.match(CypherParser.SP);
                }
            }

            this.state = 431;
            this.match(CypherParser.T__1);
            this.state = 433;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 432;
                this.match(CypherParser.SP);
                }
            }

            this.state = 452;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 9441303) !== 0)) {
                {
                this.state = 435;
                this.oC_SchemaName();
                this.state = 446;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 437;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 436;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 439;
                        this.match(CypherParser.T__3);
                        this.state = 441;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 440;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 443;
                        this.oC_SchemaName();
                        }
                        }
                    }
                    this.state = 448;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                }
                this.state = 450;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 449;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 454;
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
            this.state = 477;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 456;
                this.kU_FilePaths();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 457;
                this.match(CypherParser.T__1);
                this.state = 459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 458;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 461;
                this.oC_Query();
                this.state = 463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 462;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 465;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 467;
                this.oC_Parameter();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 468;
                this.oC_Variable();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 469;
                this.oC_Variable();
                this.state = 470;
                this.match(CypherParser.T__4);
                this.state = 472;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 471;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 474;
                this.oC_SchemaName();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 476;
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
            this.state = 479;
            this.match(CypherParser.COPY);
            this.state = 480;
            this.match(CypherParser.SP);
            this.state = 481;
            this.oC_SchemaName();
            this.state = 482;
            this.match(CypherParser.SP);
            this.state = 483;
            this.match(CypherParser.FROM);
            this.state = 484;
            this.match(CypherParser.SP);
            this.state = 485;
            this.match(CypherParser.T__1);
            this.state = 487;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 486;
                this.match(CypherParser.SP);
                }
            }

            this.state = 489;
            this.match(CypherParser.StringLiteral);
            this.state = 500;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4 || _la===180) {
                {
                {
                this.state = 491;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 490;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 493;
                this.match(CypherParser.T__3);
                this.state = 495;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 494;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 497;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 502;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 503;
            this.match(CypherParser.T__2);
            this.state = 504;
            this.match(CypherParser.SP);
            this.state = 505;
            this.match(CypherParser.BY);
            this.state = 506;
            this.match(CypherParser.SP);
            this.state = 507;
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
            this.state = 509;
            this.match(CypherParser.COPY);
            this.state = 510;
            this.match(CypherParser.SP);
            this.state = 511;
            this.match(CypherParser.T__1);
            this.state = 513;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 512;
                this.match(CypherParser.SP);
                }
            }

            this.state = 515;
            this.oC_Query();
            this.state = 517;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 516;
                this.match(CypherParser.SP);
                }
            }

            this.state = 519;
            this.match(CypherParser.T__2);
            this.state = 520;
            this.match(CypherParser.SP);
            this.state = 521;
            this.match(CypherParser.TO);
            this.state = 522;
            this.match(CypherParser.SP);
            this.state = 523;
            this.match(CypherParser.StringLiteral);
            this.state = 537;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
            case 1:
                {
                this.state = 525;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 524;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 527;
                this.match(CypherParser.T__1);
                this.state = 529;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 528;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 531;
                this.kU_Options();
                this.state = 533;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 532;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 535;
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
            this.state = 539;
            this.match(CypherParser.EXPORT);
            this.state = 540;
            this.match(CypherParser.SP);
            this.state = 541;
            this.match(CypherParser.DATABASE);
            this.state = 542;
            this.match(CypherParser.SP);
            this.state = 543;
            this.match(CypherParser.StringLiteral);
            this.state = 557;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
            case 1:
                {
                this.state = 545;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 544;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 547;
                this.match(CypherParser.T__1);
                this.state = 549;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 548;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 551;
                this.kU_Options();
                this.state = 553;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 552;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 555;
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
            this.state = 559;
            this.match(CypherParser.IMPORT);
            this.state = 560;
            this.match(CypherParser.SP);
            this.state = 561;
            this.match(CypherParser.DATABASE);
            this.state = 562;
            this.match(CypherParser.SP);
            this.state = 563;
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
            this.state = 565;
            this.match(CypherParser.ATTACH);
            this.state = 566;
            this.match(CypherParser.SP);
            this.state = 567;
            this.match(CypherParser.StringLiteral);
            this.state = 572;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
            case 1:
                {
                this.state = 568;
                this.match(CypherParser.SP);
                this.state = 569;
                this.match(CypherParser.AS);
                this.state = 570;
                this.match(CypherParser.SP);
                this.state = 571;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 574;
            this.match(CypherParser.SP);
            this.state = 575;
            this.match(CypherParser.T__1);
            this.state = 577;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 576;
                this.match(CypherParser.SP);
                }
            }

            this.state = 579;
            this.match(CypherParser.DBTYPE);
            this.state = 580;
            this.match(CypherParser.SP);
            this.state = 581;
            this.oC_SymbolicName();
            this.state = 590;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
            case 1:
                {
                this.state = 583;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 582;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 585;
                this.match(CypherParser.T__3);
                this.state = 587;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 586;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 589;
                this.kU_Options();
                }
                break;
            }
            this.state = 593;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 592;
                this.match(CypherParser.SP);
                }
            }

            this.state = 595;
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
            this.state = 616;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 597;
                this.oC_SymbolicName();
                this.state = 611;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
                case 1:
                    {
                    this.state = 599;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 598;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 601;
                    this.match(CypherParser.T__5);
                    this.state = 603;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 602;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                case 2:
                    {
                    this.state = 608;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===180) {
                        {
                        {
                        this.state = 605;
                        this.match(CypherParser.SP);
                        }
                        }
                        this.state = 610;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                    break;
                }
                this.state = 613;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 615;
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
            this.state = 618;
            this.kU_Option();
            this.state = 629;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 620;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 619;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 622;
                    this.match(CypherParser.T__3);
                    this.state = 624;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 623;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 626;
                    this.kU_Option();
                    }
                    }
                }
                this.state = 631;
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
            this.state = 632;
            this.match(CypherParser.DETACH);
            this.state = 633;
            this.match(CypherParser.SP);
            this.state = 634;
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
            this.state = 636;
            this.match(CypherParser.USE);
            this.state = 637;
            this.match(CypherParser.SP);
            this.state = 638;
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
            this.state = 655;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 640;
                this.match(CypherParser.CALL);
                this.state = 641;
                this.match(CypherParser.SP);
                this.state = 642;
                this.oC_SymbolicName();
                this.state = 644;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 643;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 646;
                this.match(CypherParser.T__5);
                this.state = 648;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 647;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 650;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 652;
                this.match(CypherParser.CALL);
                this.state = 653;
                this.match(CypherParser.SP);
                this.state = 654;
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
            this.state = 657;
            this.match(CypherParser.COMMENT);
            this.state = 658;
            this.match(CypherParser.SP);
            this.state = 659;
            this.match(CypherParser.ON);
            this.state = 660;
            this.match(CypherParser.SP);
            this.state = 661;
            this.match(CypherParser.TABLE);
            this.state = 662;
            this.match(CypherParser.SP);
            this.state = 663;
            this.oC_SchemaName();
            this.state = 664;
            this.match(CypherParser.SP);
            this.state = 665;
            this.match(CypherParser.IS);
            this.state = 666;
            this.match(CypherParser.SP);
            this.state = 667;
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
            this.state = 669;
            this.match(CypherParser.CREATE);
            this.state = 670;
            this.match(CypherParser.SP);
            this.state = 671;
            this.match(CypherParser.MACRO);
            this.state = 672;
            this.match(CypherParser.SP);
            this.state = 673;
            this.oC_FunctionName();
            this.state = 675;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 674;
                this.match(CypherParser.SP);
                }
            }

            this.state = 677;
            this.match(CypherParser.T__1);
            this.state = 679;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
            case 1:
                {
                this.state = 678;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 682;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
            case 1:
                {
                this.state = 681;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 685;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
            case 1:
                {
                this.state = 684;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 688;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 9441303) !== 0)) {
                {
                this.state = 687;
                this.kU_DefaultArg();
                }
            }

            this.state = 700;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 691;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 690;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 693;
                    this.match(CypherParser.T__3);
                    this.state = 695;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 694;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 697;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 702;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
            }
            this.state = 704;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 703;
                this.match(CypherParser.SP);
                }
            }

            this.state = 706;
            this.match(CypherParser.T__2);
            this.state = 707;
            this.match(CypherParser.SP);
            this.state = 708;
            this.match(CypherParser.AS);
            this.state = 709;
            this.match(CypherParser.SP);
            this.state = 710;
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
            this.state = 712;
            this.oC_SymbolicName();
            this.state = 723;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 714;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 713;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 716;
                    this.match(CypherParser.T__3);
                    this.state = 718;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 717;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 720;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 725;
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
            this.state = 726;
            this.oC_SymbolicName();
            this.state = 728;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 727;
                this.match(CypherParser.SP);
                }
            }

            this.state = 730;
            this.match(CypherParser.COLON);
            this.state = 731;
            this.match(CypherParser.T__5);
            this.state = 733;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 732;
                this.match(CypherParser.SP);
                }
            }

            this.state = 735;
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
            this.state = 770;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 737;
                this.match(CypherParser.T__6);
                this.state = 739;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 738;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 741;
                this.match(CypherParser.StringLiteral);
                this.state = 752;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4 || _la===180) {
                    {
                    {
                    this.state = 743;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 742;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 745;
                    this.match(CypherParser.T__3);
                    this.state = 747;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 746;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 749;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 754;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 755;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 756;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 757;
                this.match(CypherParser.GLOB);
                this.state = 759;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 758;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 761;
                this.match(CypherParser.T__1);
                this.state = 763;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 762;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 765;
                this.match(CypherParser.StringLiteral);
                this.state = 767;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 766;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 769;
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
            this.state = 772;
            this.match(CypherParser.IF);
            this.state = 773;
            this.match(CypherParser.SP);
            this.state = 774;
            this.match(CypherParser.NOT);
            this.state = 775;
            this.match(CypherParser.SP);
            this.state = 776;
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
            this.state = 778;
            this.match(CypherParser.CREATE);
            this.state = 779;
            this.match(CypherParser.SP);
            this.state = 780;
            this.match(CypherParser.NODE);
            this.state = 781;
            this.match(CypherParser.SP);
            this.state = 782;
            this.match(CypherParser.TABLE);
            this.state = 783;
            this.match(CypherParser.SP);
            this.state = 787;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
            case 1:
                {
                this.state = 784;
                this.kU_IfNotExists();
                this.state = 785;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 789;
            this.oC_SchemaName();
            this.state = 817;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
            case 1:
                {
                this.state = 791;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 790;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 793;
                this.match(CypherParser.T__1);
                this.state = 795;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 794;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 797;
                this.kU_PropertyDefinitions();
                this.state = 799;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
                case 1:
                    {
                    this.state = 798;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 806;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===4) {
                    {
                    this.state = 801;
                    this.match(CypherParser.T__3);
                    this.state = 803;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 802;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 805;
                    this.kU_CreateNodeConstraint();
                    }
                }

                this.state = 809;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 808;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 811;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                {
                this.state = 813;
                this.match(CypherParser.SP);
                this.state = 814;
                this.match(CypherParser.AS);
                this.state = 815;
                this.match(CypherParser.SP);
                this.state = 816;
                this.oC_Query();
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
    public kU_CreateRelTable(): KU_CreateRelTableContext {
        let localctx: KU_CreateRelTableContext = new KU_CreateRelTableContext(this._ctx, this.state);
        this.enterRule(localctx, 46, CypherParser.RULE_kU_CreateRelTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 819;
            this.match(CypherParser.CREATE);
            this.state = 820;
            this.match(CypherParser.SP);
            this.state = 821;
            this.match(CypherParser.REL);
            this.state = 822;
            this.match(CypherParser.SP);
            this.state = 823;
            this.match(CypherParser.TABLE);
            this.state = 826;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
            case 1:
                {
                this.state = 824;
                this.match(CypherParser.SP);
                this.state = 825;
                this.match(CypherParser.GROUP);
                }
                break;
            }
            this.state = 830;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
            case 1:
                {
                this.state = 828;
                this.match(CypherParser.SP);
                this.state = 829;
                this.kU_IfNotExists();
                }
                break;
            }
            this.state = 832;
            this.match(CypherParser.SP);
            this.state = 833;
            this.oC_SchemaName();
            this.state = 835;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 834;
                this.match(CypherParser.SP);
                }
            }

            this.state = 837;
            this.match(CypherParser.T__1);
            this.state = 839;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 838;
                this.match(CypherParser.SP);
                }
            }

            this.state = 841;
            this.kU_FromToConnections();
            this.state = 843;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 842;
                this.match(CypherParser.SP);
                }
            }

            this.state = 871;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
            case 1:
                {
                this.state = 853;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
                case 1:
                    {
                    this.state = 845;
                    this.match(CypherParser.T__3);
                    this.state = 847;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 846;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 849;
                    this.kU_PropertyDefinitions();
                    this.state = 851;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
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
                if (_la===4) {
                    {
                    this.state = 855;
                    this.match(CypherParser.T__3);
                    this.state = 857;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
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
                    if (_la===180) {
                        {
                        this.state = 860;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 865;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                {
                this.state = 866;
                this.match(CypherParser.T__2);
                this.state = 867;
                this.match(CypherParser.SP);
                this.state = 868;
                this.match(CypherParser.AS);
                this.state = 869;
                this.match(CypherParser.SP);
                this.state = 870;
                this.oC_Query();
                }
                break;
            }
            this.state = 888;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
            case 1:
                {
                this.state = 873;
                this.match(CypherParser.SP);
                this.state = 874;
                this.match(CypherParser.WITH);
                this.state = 876;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 875;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 878;
                this.match(CypherParser.T__1);
                this.state = 880;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 879;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 882;
                this.kU_Options();
                this.state = 884;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 883;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 886;
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
            this.state = 890;
            this.kU_FromToConnection();
            this.state = 901;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 104, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 892;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 891;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 894;
                    this.match(CypherParser.T__3);
                    this.state = 896;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 895;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 898;
                    this.kU_FromToConnection();
                    }
                    }
                }
                this.state = 903;
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
    public kU_FromToConnection(): KU_FromToConnectionContext {
        let localctx: KU_FromToConnectionContext = new KU_FromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 50, CypherParser.RULE_kU_FromToConnection);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 904;
            this.match(CypherParser.FROM);
            this.state = 905;
            this.match(CypherParser.SP);
            this.state = 906;
            this.oC_SchemaName();
            this.state = 907;
            this.match(CypherParser.SP);
            this.state = 908;
            this.match(CypherParser.TO);
            this.state = 909;
            this.match(CypherParser.SP);
            this.state = 910;
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
            this.state = 912;
            this.match(CypherParser.CREATE);
            this.state = 913;
            this.match(CypherParser.SP);
            this.state = 914;
            this.match(CypherParser.SEQUENCE);
            this.state = 915;
            this.match(CypherParser.SP);
            this.state = 919;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
            case 1:
                {
                this.state = 916;
                this.kU_IfNotExists();
                this.state = 917;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 921;
            this.oC_SchemaName();
            this.state = 926;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 922;
                    this.match(CypherParser.SP);
                    this.state = 923;
                    this.kU_SequenceOptions();
                    }
                    }
                }
                this.state = 928;
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
    public kU_CreateType(): KU_CreateTypeContext {
        let localctx: KU_CreateTypeContext = new KU_CreateTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 54, CypherParser.RULE_kU_CreateType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 929;
            this.match(CypherParser.CREATE);
            this.state = 930;
            this.match(CypherParser.SP);
            this.state = 931;
            this.match(CypherParser.TYPE);
            this.state = 932;
            this.match(CypherParser.SP);
            this.state = 933;
            this.oC_SchemaName();
            this.state = 934;
            this.match(CypherParser.SP);
            this.state = 935;
            this.match(CypherParser.AS);
            this.state = 936;
            this.match(CypherParser.SP);
            this.state = 937;
            this.kU_DataType(0);
            this.state = 939;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
            case 1:
                {
                this.state = 938;
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
            this.state = 946;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 941;
                this.kU_IncrementBy();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 942;
                this.kU_MinValue();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 943;
                this.kU_MaxValue();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 944;
                this.kU_StartWith();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 945;
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
    public kU_CreateUser(): KU_CreateUserContext {
        let localctx: KU_CreateUserContext = new KU_CreateUserContext(this._ctx, this.state);
        this.enterRule(localctx, 58, CypherParser.RULE_kU_CreateUser);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 948;
            this.match(CypherParser.CREATE);
            this.state = 949;
            this.match(CypherParser.SP);
            this.state = 950;
            this.match(CypherParser.USER);
            this.state = 951;
            this.match(CypherParser.SP);
            this.state = 955;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
            case 1:
                {
                this.state = 952;
                this.kU_IfNotExists();
                this.state = 953;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 957;
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
    public kU_IncrementBy(): KU_IncrementByContext {
        let localctx: KU_IncrementByContext = new KU_IncrementByContext(this._ctx, this.state);
        this.enterRule(localctx, 60, CypherParser.RULE_kU_IncrementBy);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 959;
            this.match(CypherParser.INCREMENT);
            this.state = 960;
            this.match(CypherParser.SP);
            this.state = 963;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===57) {
                {
                this.state = 961;
                this.match(CypherParser.BY);
                this.state = 962;
                this.match(CypherParser.SP);
                }
            }

            this.state = 966;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 965;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 968;
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
        this.enterRule(localctx, 62, CypherParser.RULE_kU_MinValue);
        let _la: number;
        try {
            this.state = 979;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 970;
                this.match(CypherParser.NO);
                this.state = 971;
                this.match(CypherParser.SP);
                this.state = 972;
                this.match(CypherParser.MINVALUE);
                }
                }
                break;
            case CypherParser.MINVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 973;
                this.match(CypherParser.MINVALUE);
                this.state = 974;
                this.match(CypherParser.SP);
                this.state = 976;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 975;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 978;
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
        this.enterRule(localctx, 64, CypherParser.RULE_kU_MaxValue);
        let _la: number;
        try {
            this.state = 990;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 981;
                this.match(CypherParser.NO);
                this.state = 982;
                this.match(CypherParser.SP);
                this.state = 983;
                this.match(CypherParser.MAXVALUE);
                }
                }
                break;
            case CypherParser.MAXVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 984;
                this.match(CypherParser.MAXVALUE);
                this.state = 985;
                this.match(CypherParser.SP);
                this.state = 987;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===163) {
                    {
                    this.state = 986;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 989;
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
        this.enterRule(localctx, 66, CypherParser.RULE_kU_StartWith);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 992;
            this.match(CypherParser.START);
            this.state = 993;
            this.match(CypherParser.SP);
            this.state = 996;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===151) {
                {
                this.state = 994;
                this.match(CypherParser.WITH);
                this.state = 995;
                this.match(CypherParser.SP);
                }
            }

            this.state = 999;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===163) {
                {
                this.state = 998;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 1001;
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
        this.enterRule(localctx, 68, CypherParser.RULE_kU_Cycle);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1005;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===112) {
                {
                this.state = 1003;
                this.match(CypherParser.NO);
                this.state = 1004;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1007;
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
        this.enterRule(localctx, 70, CypherParser.RULE_kU_IfExists);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1009;
            this.match(CypherParser.IF);
            this.state = 1010;
            this.match(CypherParser.SP);
            this.state = 1011;
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
        this.enterRule(localctx, 72, CypherParser.RULE_kU_Drop);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1013;
            this.match(CypherParser.DROP);
            this.state = 1014;
            this.match(CypherParser.SP);
            this.state = 1015;
            _la = this._input.LA(1);
            if(!(_la===131 || _la===137)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1016;
            this.match(CypherParser.SP);
            this.state = 1020;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
            case 1:
                {
                this.state = 1017;
                this.kU_IfExists();
                this.state = 1018;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1022;
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
            this.state = 1024;
            this.match(CypherParser.ALTER);
            this.state = 1025;
            this.match(CypherParser.SP);
            this.state = 1026;
            this.match(CypherParser.TABLE);
            this.state = 1027;
            this.match(CypherParser.SP);
            this.state = 1028;
            this.oC_SchemaName();
            this.state = 1029;
            this.match(CypherParser.SP);
            this.state = 1030;
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
            this.state = 1038;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1032;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1033;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1034;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1035;
                this.kU_RenameProperty();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1036;
                this.kU_AddFromToConnection();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1037;
                this.kU_DropFromToConnection();
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
            this.state = 1040;
            this.match(CypherParser.ADD);
            this.state = 1041;
            this.match(CypherParser.SP);
            this.state = 1045;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
            case 1:
                {
                this.state = 1042;
                this.kU_IfNotExists();
                this.state = 1043;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1047;
            this.oC_PropertyKeyName();
            this.state = 1048;
            this.match(CypherParser.SP);
            this.state = 1049;
            this.kU_DataType(0);
            this.state = 1052;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
            case 1:
                {
                this.state = 1050;
                this.match(CypherParser.SP);
                this.state = 1051;
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
            this.state = 1054;
            this.match(CypherParser.DEFAULT);
            this.state = 1055;
            this.match(CypherParser.SP);
            this.state = 1056;
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
            this.state = 1058;
            this.match(CypherParser.DROP);
            this.state = 1059;
            this.match(CypherParser.SP);
            this.state = 1063;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
            case 1:
                {
                this.state = 1060;
                this.kU_IfExists();
                this.state = 1061;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1065;
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
            this.state = 1067;
            this.match(CypherParser.RENAME);
            this.state = 1068;
            this.match(CypherParser.SP);
            this.state = 1069;
            this.match(CypherParser.TO);
            this.state = 1070;
            this.match(CypherParser.SP);
            this.state = 1071;
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
            this.state = 1073;
            this.match(CypherParser.RENAME);
            this.state = 1074;
            this.match(CypherParser.SP);
            this.state = 1075;
            this.oC_PropertyKeyName();
            this.state = 1076;
            this.match(CypherParser.SP);
            this.state = 1077;
            this.match(CypherParser.TO);
            this.state = 1078;
            this.match(CypherParser.SP);
            this.state = 1079;
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
    public kU_AddFromToConnection(): KU_AddFromToConnectionContext {
        let localctx: KU_AddFromToConnectionContext = new KU_AddFromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 88, CypherParser.RULE_kU_AddFromToConnection);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1081;
            this.match(CypherParser.ADD);
            this.state = 1082;
            this.match(CypherParser.SP);
            this.state = 1086;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===96) {
                {
                this.state = 1083;
                this.kU_IfNotExists();
                this.state = 1084;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1088;
            this.kU_FromToConnection();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public kU_DropFromToConnection(): KU_DropFromToConnectionContext {
        let localctx: KU_DropFromToConnectionContext = new KU_DropFromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 90, CypherParser.RULE_kU_DropFromToConnection);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1090;
            this.match(CypherParser.DROP);
            this.state = 1091;
            this.match(CypherParser.SP);
            this.state = 1095;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===96) {
                {
                this.state = 1092;
                this.kU_IfExists();
                this.state = 1093;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1097;
            this.kU_FromToConnection();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 92, CypherParser.RULE_kU_ColumnDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1099;
            this.kU_ColumnDefinition();
            this.state = 1110;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1101;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1100;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1103;
                    this.match(CypherParser.T__3);
                    this.state = 1105;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1104;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1107;
                    this.kU_ColumnDefinition();
                    }
                    }
                }
                this.state = 1112;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 94, CypherParser.RULE_kU_ColumnDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1113;
            this.oC_PropertyKeyName();
            this.state = 1114;
            this.match(CypherParser.SP);
            this.state = 1115;
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
        this.enterRule(localctx, 96, CypherParser.RULE_kU_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1117;
            this.kU_PropertyDefinition();
            this.state = 1128;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 131, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1119;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1118;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1121;
                    this.match(CypherParser.T__3);
                    this.state = 1123;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1122;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1125;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 1130;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 131, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 98, CypherParser.RULE_kU_PropertyDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1131;
            this.kU_ColumnDefinition();
            this.state = 1134;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
            case 1:
                {
                this.state = 1132;
                this.match(CypherParser.SP);
                this.state = 1133;
                this.kU_Default();
                }
                break;
            }
            this.state = 1140;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 133, this._ctx) ) {
            case 1:
                {
                this.state = 1136;
                this.match(CypherParser.SP);
                this.state = 1137;
                this.match(CypherParser.PRIMARY);
                this.state = 1138;
                this.match(CypherParser.SP);
                this.state = 1139;
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
        this.enterRule(localctx, 100, CypherParser.RULE_kU_CreateNodeConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1142;
            this.match(CypherParser.PRIMARY);
            this.state = 1143;
            this.match(CypherParser.SP);
            this.state = 1144;
            this.match(CypherParser.KEY);
            this.state = 1146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1145;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1148;
            this.match(CypherParser.T__1);
            this.state = 1150;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1149;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1152;
            this.oC_PropertyKeyName();
            this.state = 1154;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1153;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1156;
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
        let _startState = 102;
        this.enterRecursionRule(localctx, 102, CypherParser.RULE_kU_DataType, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1246;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
            case 1:
                {
                this.state = 1159;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 1160;
                this.match(CypherParser.UNION);
                this.state = 1162;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1161;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1164;
                this.match(CypherParser.T__1);
                this.state = 1166;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1165;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1168;
                this.kU_ColumnDefinitions();
                this.state = 1170;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1169;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1172;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                {
                this.state = 1174;
                this.match(CypherParser.STRUCT);
                this.state = 1176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1175;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1178;
                this.match(CypherParser.T__1);
                this.state = 1180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1179;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1182;
                this.kU_ColumnDefinitions();
                this.state = 1184;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1183;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1186;
                this.match(CypherParser.T__2);
                }
                break;
            case 4:
                {
                this.state = 1188;
                this.oC_SymbolicName();
                this.state = 1190;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1189;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1192;
                this.match(CypherParser.T__1);
                this.state = 1194;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1193;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1196;
                this.kU_ColumnDefinitions();
                this.state = 1198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1197;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1200;
                this.match(CypherParser.T__2);
                }
                break;
            case 5:
                {
                this.state = 1202;
                this.oC_SymbolicName();
                this.state = 1204;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1203;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1206;
                this.match(CypherParser.T__1);
                this.state = 1208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1207;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1210;
                this.kU_DataType(0);
                this.state = 1212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
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
                if (_la===180) {
                    {
                    this.state = 1215;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1218;
                this.kU_DataType(0);
                this.state = 1220;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1219;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1222;
                this.match(CypherParser.T__2);
                }
                break;
            case 6:
                {
                this.state = 1224;
                this.match(CypherParser.DECIMAL);
                this.state = 1226;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1225;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1228;
                this.match(CypherParser.T__1);
                this.state = 1230;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1229;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1232;
                this.oC_IntegerLiteral();
                this.state = 1234;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1233;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1236;
                this.match(CypherParser.T__3);
                this.state = 1238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1237;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1240;
                this.oC_IntegerLiteral();
                this.state = 1242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1241;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1244;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1252;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
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
                    this.state = 1248;
                    if (!(this.precpred(this._ctx, 6))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                    }
                    this.state = 1249;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 1254;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public kU_ListIdentifiers(): KU_ListIdentifiersContext {
        let localctx: KU_ListIdentifiersContext = new KU_ListIdentifiersContext(this._ctx, this.state);
        this.enterRule(localctx, 104, CypherParser.RULE_kU_ListIdentifiers);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1255;
            this.kU_ListIdentifier();
            this.state = 1259;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1256;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 1261;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 106, CypherParser.RULE_kU_ListIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1262;
            this.match(CypherParser.T__6);
            this.state = 1264;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1263;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 1266;
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
        this.enterRule(localctx, 108, CypherParser.RULE_oC_AnyCypherOption);
        try {
            this.state = 1270;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1268;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1269;
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
        this.enterRule(localctx, 110, CypherParser.RULE_oC_Explain);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1272;
            this.match(CypherParser.EXPLAIN);
            this.state = 1275;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
            case 1:
                {
                this.state = 1273;
                this.match(CypherParser.SP);
                this.state = 1274;
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
        this.enterRule(localctx, 112, CypherParser.RULE_oC_Profile);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1277;
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
        this.enterRule(localctx, 114, CypherParser.RULE_kU_Transaction);
        try {
            this.state = 1292;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 162, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1279;
                this.match(CypherParser.BEGIN);
                this.state = 1280;
                this.match(CypherParser.SP);
                this.state = 1281;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1282;
                this.match(CypherParser.BEGIN);
                this.state = 1283;
                this.match(CypherParser.SP);
                this.state = 1284;
                this.match(CypherParser.TRANSACTION);
                this.state = 1285;
                this.match(CypherParser.SP);
                this.state = 1286;
                this.match(CypherParser.READ);
                this.state = 1287;
                this.match(CypherParser.SP);
                this.state = 1288;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1289;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1290;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1291;
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
        this.enterRule(localctx, 116, CypherParser.RULE_kU_Extension);
        try {
            this.state = 1298;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1294;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.FORCE:
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1295;
                this.kU_InstallExtension();
                }
                break;
            case CypherParser.UNINSTALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1296;
                this.kU_UninstallExtension();
                }
                break;
            case CypherParser.UPDATE:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1297;
                this.kU_UpdateExtension();
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
        this.enterRule(localctx, 118, CypherParser.RULE_kU_LoadExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1300;
            this.match(CypherParser.LOAD);
            this.state = 1301;
            this.match(CypherParser.SP);
            this.state = 1304;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 164, this._ctx) ) {
            case 1:
                {
                this.state = 1302;
                this.match(CypherParser.EXTENSION);
                this.state = 1303;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1308;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 1306;
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
            case CypherParser.FORCE:
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
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1307;
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
        this.enterRule(localctx, 120, CypherParser.RULE_kU_InstallExtension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1312;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===89) {
                {
                this.state = 1310;
                this.match(CypherParser.FORCE);
                this.state = 1311;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1314;
            this.match(CypherParser.INSTALL);
            this.state = 1315;
            this.match(CypherParser.SP);
            this.state = 1316;
            this.oC_Variable();
            this.state = 1321;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 167, this._ctx) ) {
            case 1:
                {
                this.state = 1317;
                this.match(CypherParser.SP);
                this.state = 1318;
                this.match(CypherParser.FROM);
                this.state = 1319;
                this.match(CypherParser.SP);
                this.state = 1320;
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
    public kU_UninstallExtension(): KU_UninstallExtensionContext {
        let localctx: KU_UninstallExtensionContext = new KU_UninstallExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 122, CypherParser.RULE_kU_UninstallExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1323;
            this.match(CypherParser.UNINSTALL);
            this.state = 1324;
            this.match(CypherParser.SP);
            this.state = 1325;
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
    public kU_UpdateExtension(): KU_UpdateExtensionContext {
        let localctx: KU_UpdateExtensionContext = new KU_UpdateExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 124, CypherParser.RULE_kU_UpdateExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1327;
            this.match(CypherParser.UPDATE);
            this.state = 1328;
            this.match(CypherParser.SP);
            this.state = 1329;
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
        this.enterRule(localctx, 126, CypherParser.RULE_oC_Query);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1331;
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
        this.enterRule(localctx, 128, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1354;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1333;
                this.oC_SingleQuery();
                this.state = 1340;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 169, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1335;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 1334;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1337;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 1342;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 169, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1347;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1343;
                        this.oC_Return();
                        this.state = 1345;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 1344;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1349;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1351;
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
        this.enterRule(localctx, 130, CypherParser.RULE_oC_Union);
        let _la: number;
        try {
            this.state = 1368;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1356;
                this.match(CypherParser.UNION);
                this.state = 1357;
                this.match(CypherParser.SP);
                this.state = 1358;
                this.match(CypherParser.ALL);
                this.state = 1360;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1359;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1362;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1363;
                this.match(CypherParser.UNION);
                this.state = 1365;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1364;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1367;
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
        this.enterRule(localctx, 132, CypherParser.RULE_oC_SingleQuery);
        try {
            this.state = 1372;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1370;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1371;
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
        this.enterRule(localctx, 134, CypherParser.RULE_oC_SinglePartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1409;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 185, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1380;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 32777) !== 0) || _la===145) {
                    {
                    {
                    this.state = 1374;
                    this.oC_ReadingClause();
                    this.state = 1376;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1375;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1382;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1383;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 32777) !== 0) || _la===145) {
                    {
                    {
                    this.state = 1384;
                    this.oC_ReadingClause();
                    this.state = 1386;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1385;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1392;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1393;
                this.oC_UpdatingClause();
                this.state = 1400;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1395;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 1394;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1397;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1402;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
                }
                this.state = 1407;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
                case 1:
                    {
                    this.state = 1404;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1403;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1406;
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
        this.enterRule(localctx, 136, CypherParser.RULE_oC_MultiPartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1415;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1411;
                    this.kU_QueryPart();
                    this.state = 1413;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1412;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1417;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 187, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1419;
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
        this.enterRule(localctx, 138, CypherParser.RULE_kU_QueryPart);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1427;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===58 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 32777) !== 0) || _la===145) {
                {
                {
                this.state = 1421;
                this.oC_ReadingClause();
                this.state = 1423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1422;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1429;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1436;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 289) !== 0) || _la===109 || _la===132) {
                {
                {
                this.state = 1430;
                this.oC_UpdatingClause();
                this.state = 1432;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1431;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1438;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1439;
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
        this.enterRule(localctx, 140, CypherParser.RULE_oC_UpdatingClause);
        try {
            this.state = 1445;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1441;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1442;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1443;
                this.oC_Set();
                }
                break;
            case CypherParser.DELETE:
            case CypherParser.DETACH:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1444;
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
        this.enterRule(localctx, 142, CypherParser.RULE_oC_ReadingClause);
        try {
            this.state = 1451;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.MATCH:
            case CypherParser.OPTIONAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1447;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1448;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1449;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1450;
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
        this.enterRule(localctx, 144, CypherParser.RULE_kU_LoadFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1453;
            this.match(CypherParser.LOAD);
            this.state = 1471;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
            case 1:
                {
                this.state = 1454;
                this.match(CypherParser.SP);
                this.state = 1455;
                this.match(CypherParser.WITH);
                this.state = 1456;
                this.match(CypherParser.SP);
                this.state = 1457;
                this.match(CypherParser.HEADERS);
                this.state = 1459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1458;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1461;
                this.match(CypherParser.T__1);
                this.state = 1463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1462;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1465;
                this.kU_ColumnDefinitions();
                this.state = 1467;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1466;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1469;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1473;
            this.match(CypherParser.SP);
            this.state = 1474;
            this.match(CypherParser.FROM);
            this.state = 1475;
            this.match(CypherParser.SP);
            this.state = 1476;
            this.kU_ScanSource();
            this.state = 1490;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 201, this._ctx) ) {
            case 1:
                {
                this.state = 1478;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1477;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1480;
                this.match(CypherParser.T__1);
                this.state = 1482;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1481;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1484;
                this.kU_Options();
                this.state = 1486;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1485;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1488;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1496;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
            case 1:
                {
                this.state = 1493;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1492;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1495;
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
        this.enterRule(localctx, 146, CypherParser.RULE_oC_YieldItem);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1503;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
            case 1:
                {
                this.state = 1498;
                this.oC_Variable();
                this.state = 1499;
                this.match(CypherParser.SP);
                this.state = 1500;
                this.match(CypherParser.AS);
                this.state = 1501;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1505;
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
        this.enterRule(localctx, 148, CypherParser.RULE_oC_YieldItems);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1507;
            this.oC_YieldItem();
            this.state = 1518;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 207, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1509;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1508;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1511;
                    this.match(CypherParser.T__3);
                    this.state = 1513;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1512;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1515;
                    this.oC_YieldItem();
                    }
                    }
                }
                this.state = 1520;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 207, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 150, CypherParser.RULE_kU_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1521;
            this.match(CypherParser.CALL);
            this.state = 1522;
            this.match(CypherParser.SP);
            this.state = 1523;
            this.oC_FunctionInvocation();
            this.state = 1528;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
            case 1:
                {
                this.state = 1525;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1524;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1527;
                this.oC_Where();
                }
                break;
            }
            this.state = 1536;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 211, this._ctx) ) {
            case 1:
                {
                this.state = 1531;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1530;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1533;
                this.match(CypherParser.YIELD);
                this.state = 1534;
                this.match(CypherParser.SP);
                this.state = 1535;
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
        this.enterRule(localctx, 152, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1540;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===119) {
                {
                this.state = 1538;
                this.match(CypherParser.OPTIONAL);
                this.state = 1539;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1542;
            this.match(CypherParser.MATCH);
            this.state = 1544;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1543;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1546;
            this.oC_Pattern();
            this.state = 1549;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 214, this._ctx) ) {
            case 1:
                {
                this.state = 1547;
                this.match(CypherParser.SP);
                this.state = 1548;
                this.oC_Where();
                }
                break;
            }
            this.state = 1553;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
            case 1:
                {
                this.state = 1551;
                this.match(CypherParser.SP);
                this.state = 1552;
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
        this.enterRule(localctx, 154, CypherParser.RULE_kU_Hint);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1555;
            this.match(CypherParser.HINT);
            this.state = 1556;
            this.match(CypherParser.SP);
            this.state = 1557;
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
        let _startState = 156;
        this.enterRecursionRule(localctx, 156, CypherParser.RULE_kU_JoinNode, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1571;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__1:
                {
                this.state = 1560;
                this.match(CypherParser.T__1);
                this.state = 1562;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1561;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1564;
                this.kU_JoinNode(0);
                this.state = 1566;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1565;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1568;
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
            case CypherParser.FORCE:
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
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1570;
                this.oC_SchemaName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1589;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 221, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1587;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
                    case 1:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1573;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1574;
                        this.match(CypherParser.SP);
                        this.state = 1575;
                        this.match(CypherParser.JOIN);
                        this.state = 1576;
                        this.match(CypherParser.SP);
                        this.state = 1577;
                        this.kU_JoinNode(5);
                        }
                        break;
                    case 2:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1578;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1583;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                            case 1:
                                {
                                {
                                this.state = 1579;
                                this.match(CypherParser.SP);
                                this.state = 1580;
                                this.match(CypherParser.MULTI_JOIN);
                                this.state = 1581;
                                this.match(CypherParser.SP);
                                this.state = 1582;
                                this.oC_SchemaName();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 1585;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    }
                    }
                }
                this.state = 1591;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public oC_Unwind(): OC_UnwindContext {
        let localctx: OC_UnwindContext = new OC_UnwindContext(this._ctx, this.state);
        this.enterRule(localctx, 158, CypherParser.RULE_oC_Unwind);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1592;
            this.match(CypherParser.UNWIND);
            this.state = 1594;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1593;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1596;
            this.oC_Expression();
            this.state = 1597;
            this.match(CypherParser.SP);
            this.state = 1598;
            this.match(CypherParser.AS);
            this.state = 1599;
            this.match(CypherParser.SP);
            this.state = 1600;
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
        this.enterRule(localctx, 160, CypherParser.RULE_oC_Create);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1602;
            this.match(CypherParser.CREATE);
            this.state = 1604;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1603;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1606;
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
        this.enterRule(localctx, 162, CypherParser.RULE_oC_Merge);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1608;
            this.match(CypherParser.MERGE);
            this.state = 1610;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1609;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1612;
            this.oC_Pattern();
            this.state = 1617;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 225, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1613;
                    this.match(CypherParser.SP);
                    this.state = 1614;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1619;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 225, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 164, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1630;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1620;
                this.match(CypherParser.ON);
                this.state = 1621;
                this.match(CypherParser.SP);
                this.state = 1622;
                this.match(CypherParser.MATCH);
                this.state = 1623;
                this.match(CypherParser.SP);
                this.state = 1624;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1625;
                this.match(CypherParser.ON);
                this.state = 1626;
                this.match(CypherParser.SP);
                this.state = 1627;
                this.match(CypherParser.CREATE);
                this.state = 1628;
                this.match(CypherParser.SP);
                this.state = 1629;
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
        this.enterRule(localctx, 166, CypherParser.RULE_oC_Set);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1632;
            this.match(CypherParser.SET);
            this.state = 1634;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1633;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1636;
            this.oC_SetItem();
            this.state = 1647;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 230, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1638;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1637;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1640;
                    this.match(CypherParser.T__3);
                    this.state = 1642;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1641;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1644;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1649;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 230, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 168, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1650;
            this.oC_PropertyExpression();
            this.state = 1652;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1651;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1654;
            this.match(CypherParser.T__5);
            this.state = 1656;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1655;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1658;
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
        this.enterRule(localctx, 170, CypherParser.RULE_oC_Delete);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1662;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===77) {
                {
                this.state = 1660;
                this.match(CypherParser.DETACH);
                this.state = 1661;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1664;
            this.match(CypherParser.DELETE);
            this.state = 1666;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1665;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1668;
            this.oC_Expression();
            this.state = 1679;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1670;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1669;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1672;
                    this.match(CypherParser.T__3);
                    this.state = 1674;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1673;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1676;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1681;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 172, CypherParser.RULE_oC_With);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1682;
            this.match(CypherParser.WITH);
            this.state = 1683;
            this.oC_ProjectionBody();
            this.state = 1688;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
            case 1:
                {
                this.state = 1685;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1684;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1687;
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
        this.enterRule(localctx, 174, CypherParser.RULE_oC_Return);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1690;
            this.match(CypherParser.RETURN);
            this.state = 1691;
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
        this.enterRule(localctx, 176, CypherParser.RULE_oC_ProjectionBody);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1697;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
            case 1:
                {
                this.state = 1694;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1693;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1696;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1699;
            this.match(CypherParser.SP);
            this.state = 1700;
            this.oC_ProjectionItems();
            this.state = 1703;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
            case 1:
                {
                this.state = 1701;
                this.match(CypherParser.SP);
                this.state = 1702;
                this.oC_Order();
                }
                break;
            }
            this.state = 1707;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
            case 1:
                {
                this.state = 1705;
                this.match(CypherParser.SP);
                this.state = 1706;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1711;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 244, this._ctx) ) {
            case 1:
                {
                this.state = 1709;
                this.match(CypherParser.SP);
                this.state = 1710;
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
        this.enterRule(localctx, 178, CypherParser.RULE_oC_ProjectionItems);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1741;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1713;
                this.match(CypherParser.STAR);
                this.state = 1724;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 247, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1715;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 1714;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1717;
                        this.match(CypherParser.T__3);
                        this.state = 1719;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 1718;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1721;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1726;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 247, this._ctx);
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
            case CypherParser.FORCE:
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
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TRUE:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.SINGLE:
            case CypherParser.YIELD:
            case CypherParser.USER:
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
                this.state = 1727;
                this.oC_ProjectionItem();
                this.state = 1738;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 250, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1729;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 1728;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1731;
                        this.match(CypherParser.T__3);
                        this.state = 1733;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 1732;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1735;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1740;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 250, this._ctx);
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
        this.enterRule(localctx, 180, CypherParser.RULE_oC_ProjectionItem);
        try {
            this.state = 1750;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1743;
                this.oC_Expression();
                this.state = 1744;
                this.match(CypherParser.SP);
                this.state = 1745;
                this.match(CypherParser.AS);
                this.state = 1746;
                this.match(CypherParser.SP);
                this.state = 1747;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1749;
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
        this.enterRule(localctx, 182, CypherParser.RULE_oC_Order);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1752;
            this.match(CypherParser.ORDER);
            this.state = 1753;
            this.match(CypherParser.SP);
            this.state = 1754;
            this.match(CypherParser.BY);
            this.state = 1755;
            this.match(CypherParser.SP);
            this.state = 1756;
            this.oC_SortItem();
            this.state = 1764;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 1757;
                this.match(CypherParser.T__3);
                this.state = 1759;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1758;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1761;
                this.oC_SortItem();
                }
                }
                this.state = 1766;
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
        this.enterRule(localctx, 184, CypherParser.RULE_oC_Skip);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1767;
            this.match(CypherParser.L_SKIP);
            this.state = 1768;
            this.match(CypherParser.SP);
            this.state = 1769;
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
        this.enterRule(localctx, 186, CypherParser.RULE_oC_Limit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1771;
            this.match(CypherParser.LIMIT);
            this.state = 1772;
            this.match(CypherParser.SP);
            this.state = 1773;
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
        this.enterRule(localctx, 188, CypherParser.RULE_oC_SortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1775;
            this.oC_Expression();
            this.state = 1780;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
            case 1:
                {
                this.state = 1777;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1776;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1779;
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
        this.enterRule(localctx, 190, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1782;
            this.match(CypherParser.WHERE);
            this.state = 1783;
            this.match(CypherParser.SP);
            this.state = 1784;
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
        this.enterRule(localctx, 192, CypherParser.RULE_oC_Pattern);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1786;
            this.oC_PatternPart();
            this.state = 1797;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 259, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1788;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1787;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1790;
                    this.match(CypherParser.T__3);
                    this.state = 1792;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1791;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1794;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1799;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 259, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 194, CypherParser.RULE_oC_PatternPart);
        let _la: number;
        try {
            this.state = 1811;
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
            case CypherParser.FORCE:
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
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1800;
                this.oC_Variable();
                this.state = 1802;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1801;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1804;
                this.match(CypherParser.T__5);
                this.state = 1806;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1805;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1808;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1810;
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
        this.enterRule(localctx, 196, CypherParser.RULE_oC_AnonymousPatternPart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1813;
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
        this.enterRule(localctx, 198, CypherParser.RULE_oC_PatternElement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1829;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 265, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1815;
                this.oC_NodePattern();
                this.state = 1822;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 264, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1817;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 1816;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1819;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1824;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 264, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1825;
                this.match(CypherParser.T__1);
                this.state = 1826;
                this.oC_PatternElement();
                this.state = 1827;
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
        this.enterRule(localctx, 200, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1831;
            this.match(CypherParser.T__1);
            this.state = 1833;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1832;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1839;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 9441303) !== 0)) {
                {
                this.state = 1835;
                this.oC_Variable();
                this.state = 1837;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1836;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1845;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===162) {
                {
                this.state = 1841;
                this.oC_NodeLabels();
                this.state = 1843;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1842;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1851;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1847;
                this.kU_Properties();
                this.state = 1849;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1848;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1853;
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
        this.enterRule(localctx, 202, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1855;
            this.oC_RelationshipPattern();
            this.state = 1857;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1856;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1859;
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
        this.enterRule(localctx, 204, CypherParser.RULE_oC_RelationshipPattern);
        let _la: number;
        try {
            this.state = 1905;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 285, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1861;
                this.oC_LeftArrowHead();
                this.state = 1863;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1862;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1865;
                this.oC_Dash();
                this.state = 1867;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 275, this._ctx) ) {
                case 1:
                    {
                    this.state = 1866;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1870;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1869;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1873;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1872;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1875;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1877;
                this.oC_Dash();
                this.state = 1879;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 278, this._ctx) ) {
                case 1:
                    {
                    this.state = 1878;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1882;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1881;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1885;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1884;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1887;
                this.oC_Dash();
                this.state = 1889;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1888;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1891;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1893;
                this.oC_Dash();
                this.state = 1895;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 282, this._ctx) ) {
                case 1:
                    {
                    this.state = 1894;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1898;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1897;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1901;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1900;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1903;
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
        this.enterRule(localctx, 206, CypherParser.RULE_oC_RelationshipDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1907;
            this.match(CypherParser.T__6);
            this.state = 1909;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1908;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1915;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 9441303) !== 0)) {
                {
                this.state = 1911;
                this.oC_Variable();
                this.state = 1913;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1912;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1921;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===162) {
                {
                this.state = 1917;
                this.oC_RelationshipTypes();
                this.state = 1919;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1918;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1927;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===159) {
                {
                this.state = 1923;
                this.kU_RecursiveDetail();
                this.state = 1925;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1924;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1933;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1929;
                this.kU_Properties();
                this.state = 1931;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1930;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1935;
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
        this.enterRule(localctx, 208, CypherParser.RULE_kU_Properties);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1937;
            this.match(CypherParser.T__8);
            this.state = 1939;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1938;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1974;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 9441303) !== 0)) {
                {
                this.state = 1941;
                this.oC_PropertyKeyName();
                this.state = 1943;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1942;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1945;
                this.match(CypherParser.COLON);
                this.state = 1947;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1946;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1949;
                this.oC_Expression();
                this.state = 1951;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 1950;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1971;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 1953;
                    this.match(CypherParser.T__3);
                    this.state = 1955;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1954;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1957;
                    this.oC_PropertyKeyName();
                    this.state = 1959;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1958;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1961;
                    this.match(CypherParser.COLON);
                    this.state = 1963;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1962;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1965;
                    this.oC_Expression();
                    this.state = 1967;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1966;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1973;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1976;
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
        this.enterRule(localctx, 210, CypherParser.RULE_oC_RelationshipTypes);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1978;
            this.match(CypherParser.COLON);
            this.state = 1980;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 1979;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1982;
            this.oC_RelTypeName();
            this.state = 1996;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 309, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1984;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1983;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1986;
                    this.match(CypherParser.T__10);
                    this.state = 1988;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===162) {
                        {
                        this.state = 1987;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 1991;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 1990;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1993;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1998;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 309, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 212, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1999;
            this.oC_NodeLabel();
            this.state = 2006;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 311, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2001;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2000;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2003;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 2008;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 311, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 214, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2009;
            this.match(CypherParser.COLON);
            this.state = 2011;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2010;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2013;
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
        this.enterRule(localctx, 216, CypherParser.RULE_kU_RecursiveDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2015;
            this.match(CypherParser.STAR);
            this.state = 2020;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 314, this._ctx) ) {
            case 1:
                {
                this.state = 2017;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2016;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2019;
                this.kU_RecursiveType();
                }
                break;
            }
            this.state = 2026;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 316, this._ctx) ) {
            case 1:
                {
                this.state = 2023;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 315, this._ctx) ) {
                case 1:
                    {
                    this.state = 2022;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2025;
                this.oC_RangeLiteral();
                }
                break;
            }
            this.state = 2032;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 318, this._ctx) ) {
            case 1:
                {
                this.state = 2029;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2028;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2031;
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
        this.enterRule(localctx, 218, CypherParser.RULE_kU_RecursiveType);
        let _la: number;
        try {
            this.state = 2058;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 323, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2036;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===49) {
                    {
                    this.state = 2034;
                    this.match(CypherParser.ALL);
                    this.state = 2035;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2038;
                this.match(CypherParser.WSHORTEST);
                this.state = 2040;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
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
                if (_la===180) {
                    {
                    this.state = 2043;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2046;
                this.oC_PropertyKeyName();
                this.state = 2048;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
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
                this.state = 2052;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2053;
                this.match(CypherParser.ALL);
                this.state = 2054;
                this.match(CypherParser.SP);
                this.state = 2055;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2056;
                this.match(CypherParser.TRAIL);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2057;
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
        this.enterRule(localctx, 220, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.state = 2074;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 328, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2061;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2060;
                    this.oC_LowerBound();
                    }
                }

                this.state = 2064;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2063;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2066;
                this.match(CypherParser.T__11);
                this.state = 2068;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 326, this._ctx) ) {
                case 1:
                    {
                    this.state = 2067;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2071;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2070;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2073;
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
        this.enterRule(localctx, 222, CypherParser.RULE_kU_RecursiveComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2076;
            this.match(CypherParser.T__1);
            this.state = 2078;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2077;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2080;
            this.oC_Variable();
            this.state = 2082;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2081;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2084;
            this.match(CypherParser.T__3);
            this.state = 2086;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2085;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2088;
            this.oC_Variable();
            this.state = 2100;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 335, this._ctx) ) {
            case 1:
                {
                this.state = 2090;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2089;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2092;
                this.match(CypherParser.T__10);
                this.state = 2094;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2093;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2096;
                this.oC_Where();
                this.state = 2098;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 334, this._ctx) ) {
                case 1:
                    {
                    this.state = 2097;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                }
                break;
            }
            this.state = 2121;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===180) {
                {
                this.state = 2103;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2102;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2105;
                this.match(CypherParser.T__10);
                this.state = 2107;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2106;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2109;
                this.kU_RecursiveProjectionItems();
                this.state = 2111;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2110;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2113;
                this.match(CypherParser.T__3);
                this.state = 2115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2114;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2117;
                this.kU_RecursiveProjectionItems();
                this.state = 2119;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2118;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2123;
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
        this.enterRule(localctx, 224, CypherParser.RULE_kU_RecursiveProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2125;
            this.match(CypherParser.T__8);
            this.state = 2127;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 342, this._ctx) ) {
            case 1:
                {
                this.state = 2126;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 1886027335) !== 0) || _la===179) {
                {
                this.state = 2129;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2132;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2135;
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
        this.enterRule(localctx, 226, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2137;
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
        this.enterRule(localctx, 228, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2139;
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
        this.enterRule(localctx, 230, CypherParser.RULE_oC_LabelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2141;
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
        this.enterRule(localctx, 232, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2143;
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
        this.enterRule(localctx, 234, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2145;
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
        this.enterRule(localctx, 236, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2147;
            this.oC_XorExpression();
            this.state = 2154;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 345, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2148;
                    this.match(CypherParser.SP);
                    this.state = 2149;
                    this.match(CypherParser.OR);
                    this.state = 2150;
                    this.match(CypherParser.SP);
                    this.state = 2151;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 2156;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 345, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 238, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2157;
            this.oC_AndExpression();
            this.state = 2164;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2158;
                    this.match(CypherParser.SP);
                    this.state = 2159;
                    this.match(CypherParser.XOR);
                    this.state = 2160;
                    this.match(CypherParser.SP);
                    this.state = 2161;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 2166;
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
    public oC_AndExpression(): OC_AndExpressionContext {
        let localctx: OC_AndExpressionContext = new OC_AndExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 240, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2167;
            this.oC_NotExpression();
            this.state = 2174;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 347, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2168;
                    this.match(CypherParser.SP);
                    this.state = 2169;
                    this.match(CypherParser.AND);
                    this.state = 2170;
                    this.match(CypherParser.SP);
                    this.state = 2171;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 2176;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 347, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 242, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2183;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===114) {
                {
                {
                this.state = 2177;
                this.match(CypherParser.NOT);
                this.state = 2179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2178;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2185;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2186;
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
        this.enterRule(localctx, 244, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 2236;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 360, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2188;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2198;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 352, this._ctx) ) {
                case 1:
                    {
                    this.state = 2190;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2189;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2192;
                    this.kU_ComparisonOperator();
                    this.state = 2194;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2193;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2196;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2200;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 2202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2201;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2204;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 2206;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2205;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2208;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2212;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2213;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2216;
                this.kU_ComparisonOperator();
                this.state = 2218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2217;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2220;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2230;
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
                        if (_la===180) {
                            {
                            this.state = 2221;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2224;
                        this.kU_ComparisonOperator();
                        this.state = 2226;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 2225;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2228;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2232;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 359, this._ctx);
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
        this.enterRule(localctx, 246, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2238;
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
        this.enterRule(localctx, 248, CypherParser.RULE_kU_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2240;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 2251;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 363, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2242;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2241;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2244;
                    this.match(CypherParser.T__10);
                    this.state = 2246;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2245;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2248;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 2253;
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
    public kU_BitwiseAndOperatorExpression(): KU_BitwiseAndOperatorExpressionContext {
        let localctx: KU_BitwiseAndOperatorExpressionContext = new KU_BitwiseAndOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 250, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2254;
            this.kU_BitShiftOperatorExpression();
            this.state = 2265;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 366, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2256;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2255;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2258;
                    this.match(CypherParser.T__17);
                    this.state = 2260;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2259;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2262;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 2267;
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
    public kU_BitShiftOperatorExpression(): KU_BitShiftOperatorExpressionContext {
        let localctx: KU_BitShiftOperatorExpressionContext = new KU_BitShiftOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 252, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2268;
            this.oC_AddOrSubtractExpression();
            this.state = 2280;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 369, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2270;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2269;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2272;
                    this.kU_BitShiftOperator();
                    this.state = 2274;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2273;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2276;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 2282;
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
    public kU_BitShiftOperator(): KU_BitShiftOperatorContext {
        let localctx: KU_BitShiftOperatorContext = new KU_BitShiftOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 254, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2283;
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
        this.enterRule(localctx, 256, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2285;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 2297;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 372, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2287;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2286;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2289;
                    this.kU_AddOrSubtractOperator();
                    this.state = 2291;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2290;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2293;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 2299;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 372, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 258, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2300;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===163)) {
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
        this.enterRule(localctx, 260, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2302;
            this.oC_PowerOfExpression();
            this.state = 2314;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 375, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2304;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2303;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2306;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 2308;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2307;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2310;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 2316;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 375, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 262, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2317;
            _la = this._input.LA(1);
            if(!(_la===22 || _la===23 || _la===159)) {
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
        this.enterRule(localctx, 264, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2319;
            this.oC_StringListNullOperatorExpression();
            this.state = 2330;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 378, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2321;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2320;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2323;
                    this.match(CypherParser.T__23);
                    this.state = 2325;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2324;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2327;
                    this.oC_StringListNullOperatorExpression();
                    }
                    }
                }
                this.state = 2332;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 378, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 266, CypherParser.RULE_oC_StringListNullOperatorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2333;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 2341;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
            case 1:
                {
                this.state = 2334;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 2336;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2335;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2338;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 379, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 2340;
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
        this.enterRule(localctx, 268, CypherParser.RULE_oC_ListOperatorExpression);
        let _la: number;
        try {
            this.state = 2362;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 384, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2343;
                this.match(CypherParser.SP);
                this.state = 2344;
                this.match(CypherParser.IN);
                this.state = 2346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2345;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2348;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2349;
                this.match(CypherParser.T__6);
                this.state = 2350;
                this.oC_Expression();
                this.state = 2351;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2353;
                this.match(CypherParser.T__6);
                this.state = 2355;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 1886019143) !== 0) || _la===179) {
                    {
                    this.state = 2354;
                    this.oC_Expression();
                    }
                }

                this.state = 2357;
                this.match(CypherParser.COLON);
                this.state = 2359;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 1886019143) !== 0) || _la===179) {
                    {
                    this.state = 2358;
                    this.oC_Expression();
                    }
                }

                this.state = 2361;
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
        this.enterRule(localctx, 270, CypherParser.RULE_oC_StringOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2375;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 385, this._ctx) ) {
            case 1:
                {
                this.state = 2364;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 2365;
                this.match(CypherParser.SP);
                this.state = 2366;
                this.match(CypherParser.STARTS);
                this.state = 2367;
                this.match(CypherParser.SP);
                this.state = 2368;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 2369;
                this.match(CypherParser.SP);
                this.state = 2370;
                this.match(CypherParser.ENDS);
                this.state = 2371;
                this.match(CypherParser.SP);
                this.state = 2372;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 2373;
                this.match(CypherParser.SP);
                this.state = 2374;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 2378;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2377;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2380;
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
        this.enterRule(localctx, 272, CypherParser.RULE_oC_RegularExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2383;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2382;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2385;
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
        this.enterRule(localctx, 274, CypherParser.RULE_oC_NullOperatorExpression);
        try {
            this.state = 2397;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 388, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2387;
                this.match(CypherParser.SP);
                this.state = 2388;
                this.match(CypherParser.IS);
                this.state = 2389;
                this.match(CypherParser.SP);
                this.state = 2390;
                this.match(CypherParser.NULL);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2391;
                this.match(CypherParser.SP);
                this.state = 2392;
                this.match(CypherParser.IS);
                this.state = 2393;
                this.match(CypherParser.SP);
                this.state = 2394;
                this.match(CypherParser.NOT);
                this.state = 2395;
                this.match(CypherParser.SP);
                this.state = 2396;
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
    public oC_UnaryAddSubtractOrFactorialExpression(): OC_UnaryAddSubtractOrFactorialExpressionContext {
        let localctx: OC_UnaryAddSubtractOrFactorialExpressionContext = new OC_UnaryAddSubtractOrFactorialExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 276, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2405;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===163) {
                {
                {
                this.state = 2399;
                this.match(CypherParser.MINUS);
                this.state = 2401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2400;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2407;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2408;
            this.oC_PropertyOrLabelsExpression();
            this.state = 2413;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 392, this._ctx) ) {
            case 1:
                {
                this.state = 2410;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2409;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2412;
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
    public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
        let localctx: OC_PropertyOrLabelsExpressionContext = new OC_PropertyOrLabelsExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 278, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2415;
            this.oC_Atom();
            this.state = 2422;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 394, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2417;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2416;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2419;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2424;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 394, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 280, CypherParser.RULE_oC_Atom);
        try {
            this.state = 2434;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 395, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2425;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2426;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2427;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2428;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2429;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2430;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2431;
                this.oC_ExistCountSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2432;
                this.oC_Variable();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2433;
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
        this.enterRule(localctx, 282, CypherParser.RULE_oC_Quantifier);
        let _la: number;
        try {
            this.state = 2492;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ALL:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2436;
                this.match(CypherParser.ALL);
                this.state = 2438;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2437;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2440;
                this.match(CypherParser.T__1);
                this.state = 2442;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2441;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2444;
                this.oC_FilterExpression();
                this.state = 2446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2445;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2448;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.ANY:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2450;
                this.match(CypherParser.ANY);
                this.state = 2452;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2451;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2454;
                this.match(CypherParser.T__1);
                this.state = 2456;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2455;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2458;
                this.oC_FilterExpression();
                this.state = 2460;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2459;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2462;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.NONE:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2464;
                this.match(CypherParser.NONE);
                this.state = 2466;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2465;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2468;
                this.match(CypherParser.T__1);
                this.state = 2470;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2469;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2472;
                this.oC_FilterExpression();
                this.state = 2474;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2473;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2476;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.SINGLE:
                this.enterOuterAlt(localctx, 4);
                {
                {
                this.state = 2478;
                this.match(CypherParser.SINGLE);
                this.state = 2480;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2479;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2482;
                this.match(CypherParser.T__1);
                this.state = 2484;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2483;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2486;
                this.oC_FilterExpression();
                this.state = 2488;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2487;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2490;
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
        this.enterRule(localctx, 284, CypherParser.RULE_oC_FilterExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2494;
            this.oC_IdInColl();
            this.state = 2495;
            this.match(CypherParser.SP);
            this.state = 2496;
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
        this.enterRule(localctx, 286, CypherParser.RULE_oC_IdInColl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2498;
            this.oC_Variable();
            this.state = 2499;
            this.match(CypherParser.SP);
            this.state = 2500;
            this.match(CypherParser.IN);
            this.state = 2501;
            this.match(CypherParser.SP);
            this.state = 2502;
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
        this.enterRule(localctx, 288, CypherParser.RULE_oC_Literal);
        try {
            this.state = 2510;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2504;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2505;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.FALSE:
            case CypherParser.TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2506;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2507;
                this.match(CypherParser.NULL);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2508;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2509;
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
        this.enterRule(localctx, 290, CypherParser.RULE_oC_BooleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2512;
            _la = this._input.LA(1);
            if(!(_la===87 || _la===142)) {
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
        this.enterRule(localctx, 292, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2514;
            this.match(CypherParser.T__6);
            this.state = 2516;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2515;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2531;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 1886019143) !== 0) || _la===179) {
                {
                this.state = 2518;
                this.oC_Expression();
                this.state = 2520;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2519;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2528;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2522;
                    this.kU_ListEntry();
                    this.state = 2524;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2523;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2530;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2533;
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
        this.enterRule(localctx, 294, CypherParser.RULE_kU_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2535;
            this.match(CypherParser.T__3);
            this.state = 2537;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 415, this._ctx) ) {
            case 1:
                {
                this.state = 2536;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2540;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 1886019143) !== 0) || _la===179) {
                {
                this.state = 2539;
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
        this.enterRule(localctx, 296, CypherParser.RULE_kU_StructLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2542;
            this.match(CypherParser.T__8);
            this.state = 2544;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2543;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2546;
            this.kU_StructField();
            this.state = 2548;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2547;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2560;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 2550;
                this.match(CypherParser.T__3);
                this.state = 2552;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2551;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2554;
                this.kU_StructField();
                this.state = 2556;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2555;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2562;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2563;
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
        this.enterRule(localctx, 298, CypherParser.RULE_kU_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2567;
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
            case CypherParser.FORCE:
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
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2565;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2566;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2570;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2569;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2572;
            this.match(CypherParser.COLON);
            this.state = 2574;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2573;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2576;
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
        this.enterRule(localctx, 300, CypherParser.RULE_oC_ParenthesizedExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2578;
            this.match(CypherParser.T__1);
            this.state = 2580;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2579;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2582;
            this.oC_Expression();
            this.state = 2584;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2583;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2586;
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
        this.enterRule(localctx, 302, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2665;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 446, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2588;
                this.match(CypherParser.COUNT);
                this.state = 2590;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2589;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2592;
                this.match(CypherParser.T__1);
                this.state = 2594;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2593;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2596;
                this.match(CypherParser.STAR);
                this.state = 2598;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2597;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2600;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2601;
                this.match(CypherParser.CAST);
                this.state = 2603;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2602;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2605;
                this.match(CypherParser.T__1);
                this.state = 2607;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2606;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2609;
                this.kU_FunctionParameter();
                this.state = 2611;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2610;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2623;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case CypherParser.AS:
                    {
                    {
                    this.state = 2613;
                    this.match(CypherParser.AS);
                    this.state = 2615;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2614;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2617;
                    this.kU_DataType(0);
                    }
                    }
                    break;
                case CypherParser.T__3:
                    {
                    {
                    this.state = 2618;
                    this.match(CypherParser.T__3);
                    this.state = 2620;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2619;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2622;
                    this.kU_FunctionParameter();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2626;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2625;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2628;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2630;
                this.oC_FunctionName();
                this.state = 2632;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2631;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2634;
                this.match(CypherParser.T__1);
                this.state = 2636;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2635;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2642;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===78) {
                    {
                    this.state = 2638;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2640;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2639;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2661;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 1886019143) !== 0) || _la===179) {
                    {
                    this.state = 2644;
                    this.kU_FunctionParameter();
                    this.state = 2646;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2645;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2658;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===4) {
                        {
                        {
                        this.state = 2648;
                        this.match(CypherParser.T__3);
                        this.state = 2650;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 2649;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2652;
                        this.kU_FunctionParameter();
                        this.state = 2654;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 2653;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2660;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2663;
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
        this.enterRule(localctx, 304, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2667;
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
        this.enterRule(localctx, 306, CypherParser.RULE_kU_FunctionParameter);
        let _la: number;
        try {
            this.state = 2682;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 450, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2678;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 449, this._ctx) ) {
                case 1:
                    {
                    this.state = 2669;
                    this.oC_SymbolicName();
                    this.state = 2671;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2670;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2673;
                    this.match(CypherParser.COLON);
                    this.state = 2674;
                    this.match(CypherParser.T__5);
                    this.state = 2676;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2675;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 2680;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2681;
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
        this.enterRule(localctx, 308, CypherParser.RULE_kU_LambdaParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2684;
            this.kU_LambdaVars();
            this.state = 2686;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2685;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2688;
            this.match(CypherParser.MINUS);
            this.state = 2689;
            this.match(CypherParser.T__15);
            this.state = 2691;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2690;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2693;
            this.oC_Expression();
            this.state = 2695;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 453, this._ctx) ) {
            case 1:
                {
                this.state = 2694;
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
        this.enterRule(localctx, 310, CypherParser.RULE_kU_LambdaVars);
        let _la: number;
        try {
            this.state = 2721;
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
            case CypherParser.FORCE:
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
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2697;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2698;
                this.match(CypherParser.T__1);
                this.state = 2700;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2699;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2702;
                this.oC_SymbolicName();
                this.state = 2704;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2703;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2716;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2706;
                    this.match(CypherParser.T__3);
                    this.state = 2708;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2707;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2710;
                    this.oC_SymbolicName();
                    this.state = 2712;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2711;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2718;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2719;
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
        this.enterRule(localctx, 312, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2723;
            this.oC_NodePattern();
            this.state = 2728;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2725;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===180) {
                        {
                        this.state = 2724;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2727;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2730;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 461, this._ctx);
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
        this.enterRule(localctx, 314, CypherParser.RULE_oC_ExistCountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2732;
            _la = this._input.LA(1);
            if(!(_la===68 || _la===83)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 2734;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2733;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2736;
            this.match(CypherParser.T__8);
            this.state = 2738;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2737;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2740;
            this.match(CypherParser.MATCH);
            this.state = 2742;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2741;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2744;
            this.oC_Pattern();
            this.state = 2749;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 466, this._ctx) ) {
            case 1:
                {
                this.state = 2746;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2745;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2748;
                this.oC_Where();
                }
                break;
            }
            this.state = 2755;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 468, this._ctx) ) {
            case 1:
                {
                this.state = 2752;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2751;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2754;
                this.kU_Hint();
                }
                break;
            }
            this.state = 2758;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2757;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2760;
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
        this.enterRule(localctx, 316, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2762;
            this.match(CypherParser.T__4);
            this.state = 2764;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2763;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2768;
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
            case CypherParser.FORCE:
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
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2766;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2767;
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
        this.enterRule(localctx, 318, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2792;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 477, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2770;
                this.match(CypherParser.CASE);
                this.state = 2775;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2772;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 2771;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2774;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2777;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 473, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2779;
                this.match(CypherParser.CASE);
                this.state = 2781;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2780;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2783;
                this.oC_Expression();
                this.state = 2788;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2785;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===180) {
                            {
                            this.state = 2784;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2787;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2790;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 476, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2802;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 480, this._ctx) ) {
            case 1:
                {
                this.state = 2795;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2794;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2797;
                this.match(CypherParser.ELSE);
                this.state = 2799;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===180) {
                    {
                    this.state = 2798;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2801;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2805;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2804;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2807;
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
        this.enterRule(localctx, 320, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2809;
            this.match(CypherParser.WHEN);
            this.state = 2811;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2810;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2813;
            this.oC_Expression();
            this.state = 2815;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2814;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2817;
            this.match(CypherParser.THEN);
            this.state = 2819;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2818;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2821;
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
        this.enterRule(localctx, 322, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2823;
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
        this.enterRule(localctx, 324, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 2827;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2825;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2826;
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
        this.enterRule(localctx, 326, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2829;
            this.match(CypherParser.T__25);
            this.state = 2832;
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
            case CypherParser.FORCE:
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
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2830;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2831;
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
        this.enterRule(localctx, 328, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2834;
            this.oC_Atom();
            this.state = 2836;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===180) {
                {
                this.state = 2835;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2838;
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
        this.enterRule(localctx, 330, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2840;
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
        this.enterRule(localctx, 332, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2842;
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
        this.enterRule(localctx, 334, CypherParser.RULE_oC_DoubleLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2844;
            _la = this._input.LA(1);
            if(!(_la===174 || _la===175)) {
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
        this.enterRule(localctx, 336, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2846;
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
        this.enterRule(localctx, 338, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 2853;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2848;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2849;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2851;
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
            case CypherParser.FORCE:
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
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2852;
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
        this.enterRule(localctx, 340, CypherParser.RULE_kU_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2855;
            _la = this._input.LA(1);
            if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 23) !== 0))) {
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
        this.enterRule(localctx, 342, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2857;
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
        this.enterRule(localctx, 344, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2859;
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
        this.enterRule(localctx, 346, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2861;
            _la = this._input.LA(1);
            if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2047) !== 0) || _la===163)) {
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
        case 51:
            return this.kU_DataType_sempred(localctx as KU_DataTypeContext, predIndex);
        case 78:
            return this.kU_JoinNode_sempred(localctx as KU_JoinNodeContext, predIndex);
        }
        return true;
    }
    private kU_DataType_sempred(localctx: KU_DataTypeContext, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 6);
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
        4,1,183,2864,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,1,0,1,0,3,0,351,
        8,0,1,0,1,0,3,0,355,8,0,1,0,5,0,358,8,0,10,0,12,0,361,9,0,1,0,3,
        0,364,8,0,1,0,1,0,1,1,3,1,369,8,1,1,1,3,1,372,8,1,1,1,1,1,3,1,376,
        8,1,1,1,3,1,379,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,402,8,2,1,3,1,3,1,3,
        1,3,3,3,408,8,3,1,3,1,3,1,3,1,3,1,3,3,3,415,8,3,1,3,1,3,3,3,419,
        8,3,1,3,1,3,3,3,423,8,3,1,3,1,3,3,3,427,8,3,1,4,3,4,430,8,4,1,4,
        1,4,3,4,434,8,4,1,4,1,4,3,4,438,8,4,1,4,1,4,3,4,442,8,4,1,4,5,4,
        445,8,4,10,4,12,4,448,9,4,1,4,3,4,451,8,4,3,4,453,8,4,1,4,1,4,1,
        5,1,5,1,5,3,5,460,8,5,1,5,1,5,3,5,464,8,5,1,5,1,5,1,5,1,5,1,5,1,
        5,1,5,3,5,473,8,5,1,5,1,5,1,5,3,5,478,8,5,1,6,1,6,1,6,1,6,1,6,1,
        6,1,6,1,6,3,6,488,8,6,1,6,1,6,3,6,492,8,6,1,6,1,6,3,6,496,8,6,1,
        6,5,6,499,8,6,10,6,12,6,502,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,
        1,7,1,7,3,7,514,8,7,1,7,1,7,3,7,518,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
        3,7,526,8,7,1,7,1,7,3,7,530,8,7,1,7,1,7,3,7,534,8,7,1,7,1,7,3,7,
        538,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,546,8,8,1,8,1,8,3,8,550,8,8,
        1,8,1,8,3,8,554,8,8,1,8,1,8,3,8,558,8,8,1,9,1,9,1,9,1,9,1,9,1,9,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,573,8,10,1,10,1,10,1,10,
        3,10,578,8,10,1,10,1,10,1,10,1,10,3,10,584,8,10,1,10,1,10,3,10,588,
        8,10,1,10,3,10,591,8,10,1,10,3,10,594,8,10,1,10,1,10,1,11,1,11,3,
        11,600,8,11,1,11,1,11,3,11,604,8,11,1,11,5,11,607,8,11,10,11,12,
        11,610,9,11,3,11,612,8,11,1,11,1,11,1,11,3,11,617,8,11,1,12,1,12,
        3,12,621,8,12,1,12,1,12,3,12,625,8,12,1,12,5,12,628,8,12,10,12,12,
        12,631,9,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,
        15,1,15,3,15,645,8,15,1,15,1,15,3,15,649,8,15,1,15,1,15,1,15,1,15,
        1,15,3,15,656,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
        1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,676,8,17,1,17,
        1,17,3,17,680,8,17,1,17,3,17,683,8,17,1,17,3,17,686,8,17,1,17,3,
        17,689,8,17,1,17,3,17,692,8,17,1,17,1,17,3,17,696,8,17,1,17,5,17,
        699,8,17,10,17,12,17,702,9,17,1,17,3,17,705,8,17,1,17,1,17,1,17,
        1,17,1,17,1,17,1,18,1,18,3,18,715,8,18,1,18,1,18,3,18,719,8,18,1,
        18,5,18,722,8,18,10,18,12,18,725,9,18,1,19,1,19,3,19,729,8,19,1,
        19,1,19,1,19,3,19,734,8,19,1,19,1,19,1,20,1,20,3,20,740,8,20,1,20,
        1,20,3,20,744,8,20,1,20,1,20,3,20,748,8,20,1,20,5,20,751,8,20,10,
        20,12,20,754,9,20,1,20,1,20,1,20,1,20,3,20,760,8,20,1,20,1,20,3,
        20,764,8,20,1,20,1,20,3,20,768,8,20,1,20,3,20,771,8,20,1,21,1,21,
        1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
        3,22,788,8,22,1,22,1,22,3,22,792,8,22,1,22,1,22,3,22,796,8,22,1,
        22,1,22,3,22,800,8,22,1,22,1,22,3,22,804,8,22,1,22,3,22,807,8,22,
        1,22,3,22,810,8,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,818,8,22,1,
        23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,827,8,23,1,23,1,23,3,23,831,
        8,23,1,23,1,23,1,23,3,23,836,8,23,1,23,1,23,3,23,840,8,23,1,23,1,
        23,3,23,844,8,23,1,23,1,23,3,23,848,8,23,1,23,1,23,3,23,852,8,23,
        3,23,854,8,23,1,23,1,23,3,23,858,8,23,1,23,1,23,3,23,862,8,23,3,
        23,864,8,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,872,8,23,1,23,1,23,
        1,23,3,23,877,8,23,1,23,1,23,3,23,881,8,23,1,23,1,23,3,23,885,8,
        23,1,23,1,23,3,23,889,8,23,1,24,1,24,3,24,893,8,24,1,24,1,24,3,24,
        897,8,24,1,24,5,24,900,8,24,10,24,12,24,903,9,24,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,
        920,8,26,1,26,1,26,1,26,5,26,925,8,26,10,26,12,26,928,9,26,1,27,
        1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,940,8,27,1,28,
        1,28,1,28,1,28,1,28,3,28,947,8,28,1,29,1,29,1,29,1,29,1,29,1,29,
        1,29,3,29,956,8,29,1,29,1,29,1,30,1,30,1,30,1,30,3,30,964,8,30,1,
        30,3,30,967,8,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,3,31,977,
        8,31,1,31,3,31,980,8,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,988,8,
        32,1,32,3,32,991,8,32,1,33,1,33,1,33,1,33,3,33,997,8,33,1,33,3,33,
        1000,8,33,1,33,1,33,1,34,1,34,3,34,1006,8,34,1,34,1,34,1,35,1,35,
        1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,1021,8,36,1,36,
        1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,
        1,38,1,38,3,38,1039,8,38,1,39,1,39,1,39,1,39,1,39,3,39,1046,8,39,
        1,39,1,39,1,39,1,39,1,39,3,39,1053,8,39,1,40,1,40,1,40,1,40,1,41,
        1,41,1,41,1,41,1,41,3,41,1064,8,41,1,41,1,41,1,42,1,42,1,42,1,42,
        1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,
        1,44,1,44,3,44,1087,8,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,3,45,
        1096,8,45,1,45,1,45,1,46,1,46,3,46,1102,8,46,1,46,1,46,3,46,1106,
        8,46,1,46,5,46,1109,8,46,10,46,12,46,1112,9,46,1,47,1,47,1,47,1,
        47,1,48,1,48,3,48,1120,8,48,1,48,1,48,3,48,1124,8,48,1,48,5,48,1127,
        8,48,10,48,12,48,1130,9,48,1,49,1,49,1,49,3,49,1135,8,49,1,49,1,
        49,1,49,1,49,3,49,1141,8,49,1,50,1,50,1,50,1,50,3,50,1147,8,50,1,
        50,1,50,3,50,1151,8,50,1,50,1,50,3,50,1155,8,50,1,50,1,50,1,51,1,
        51,1,51,1,51,3,51,1163,8,51,1,51,1,51,3,51,1167,8,51,1,51,1,51,3,
        51,1171,8,51,1,51,1,51,1,51,1,51,3,51,1177,8,51,1,51,1,51,3,51,1181,
        8,51,1,51,1,51,3,51,1185,8,51,1,51,1,51,1,51,1,51,3,51,1191,8,51,
        1,51,1,51,3,51,1195,8,51,1,51,1,51,3,51,1199,8,51,1,51,1,51,1,51,
        1,51,3,51,1205,8,51,1,51,1,51,3,51,1209,8,51,1,51,1,51,3,51,1213,
        8,51,1,51,1,51,3,51,1217,8,51,1,51,1,51,3,51,1221,8,51,1,51,1,51,
        1,51,1,51,3,51,1227,8,51,1,51,1,51,3,51,1231,8,51,1,51,1,51,3,51,
        1235,8,51,1,51,1,51,3,51,1239,8,51,1,51,1,51,3,51,1243,8,51,1,51,
        1,51,3,51,1247,8,51,1,51,1,51,5,51,1251,8,51,10,51,12,51,1254,9,
        51,1,52,1,52,5,52,1258,8,52,10,52,12,52,1261,9,52,1,53,1,53,3,53,
        1265,8,53,1,53,1,53,1,54,1,54,3,54,1271,8,54,1,55,1,55,1,55,3,55,
        1276,8,55,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,
        1,57,1,57,1,57,1,57,3,57,1293,8,57,1,58,1,58,1,58,1,58,3,58,1299,
        8,58,1,59,1,59,1,59,1,59,3,59,1305,8,59,1,59,1,59,3,59,1309,8,59,
        1,60,1,60,3,60,1313,8,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,
        1322,8,60,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,63,1,63,1,64,
        1,64,3,64,1336,8,64,1,64,5,64,1339,8,64,10,64,12,64,1342,9,64,1,
        64,1,64,3,64,1346,8,64,4,64,1348,8,64,11,64,12,64,1349,1,64,1,64,
        1,64,3,64,1355,8,64,1,65,1,65,1,65,1,65,3,65,1361,8,65,1,65,1,65,
        1,65,3,65,1366,8,65,1,65,3,65,1369,8,65,1,66,1,66,3,66,1373,8,66,
        1,67,1,67,3,67,1377,8,67,5,67,1379,8,67,10,67,12,67,1382,9,67,1,
        67,1,67,1,67,3,67,1387,8,67,5,67,1389,8,67,10,67,12,67,1392,9,67,
        1,67,1,67,3,67,1396,8,67,1,67,5,67,1399,8,67,10,67,12,67,1402,9,
        67,1,67,3,67,1405,8,67,1,67,3,67,1408,8,67,3,67,1410,8,67,1,68,1,
        68,3,68,1414,8,68,4,68,1416,8,68,11,68,12,68,1417,1,68,1,68,1,69,
        1,69,3,69,1424,8,69,5,69,1426,8,69,10,69,12,69,1429,9,69,1,69,1,
        69,3,69,1433,8,69,5,69,1435,8,69,10,69,12,69,1438,9,69,1,69,1,69,
        1,70,1,70,1,70,1,70,3,70,1446,8,70,1,71,1,71,1,71,1,71,3,71,1452,
        8,71,1,72,1,72,1,72,1,72,1,72,1,72,3,72,1460,8,72,1,72,1,72,3,72,
        1464,8,72,1,72,1,72,3,72,1468,8,72,1,72,1,72,3,72,1472,8,72,1,72,
        1,72,1,72,1,72,1,72,3,72,1479,8,72,1,72,1,72,3,72,1483,8,72,1,72,
        1,72,3,72,1487,8,72,1,72,1,72,3,72,1491,8,72,1,72,3,72,1494,8,72,
        1,72,3,72,1497,8,72,1,73,1,73,1,73,1,73,1,73,3,73,1504,8,73,1,73,
        1,73,1,74,1,74,3,74,1510,8,74,1,74,1,74,3,74,1514,8,74,1,74,5,74,
        1517,8,74,10,74,12,74,1520,9,74,1,75,1,75,1,75,1,75,3,75,1526,8,
        75,1,75,3,75,1529,8,75,1,75,3,75,1532,8,75,1,75,1,75,1,75,3,75,1537,
        8,75,1,76,1,76,3,76,1541,8,76,1,76,1,76,3,76,1545,8,76,1,76,1,76,
        1,76,3,76,1550,8,76,1,76,1,76,3,76,1554,8,76,1,77,1,77,1,77,1,77,
        1,78,1,78,1,78,3,78,1563,8,78,1,78,1,78,3,78,1567,8,78,1,78,1,78,
        1,78,3,78,1572,8,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
        1,78,4,78,1584,8,78,11,78,12,78,1585,5,78,1588,8,78,10,78,12,78,
        1591,9,78,1,79,1,79,3,79,1595,8,79,1,79,1,79,1,79,1,79,1,79,1,79,
        1,80,1,80,3,80,1605,8,80,1,80,1,80,1,81,1,81,3,81,1611,8,81,1,81,
        1,81,1,81,5,81,1616,8,81,10,81,12,81,1619,9,81,1,82,1,82,1,82,1,
        82,1,82,1,82,1,82,1,82,1,82,1,82,3,82,1631,8,82,1,83,1,83,3,83,1635,
        8,83,1,83,1,83,3,83,1639,8,83,1,83,1,83,3,83,1643,8,83,1,83,5,83,
        1646,8,83,10,83,12,83,1649,9,83,1,84,1,84,3,84,1653,8,84,1,84,1,
        84,3,84,1657,8,84,1,84,1,84,1,85,1,85,3,85,1663,8,85,1,85,1,85,3,
        85,1667,8,85,1,85,1,85,3,85,1671,8,85,1,85,1,85,3,85,1675,8,85,1,
        85,5,85,1678,8,85,10,85,12,85,1681,9,85,1,86,1,86,1,86,3,86,1686,
        8,86,1,86,3,86,1689,8,86,1,87,1,87,1,87,1,88,3,88,1695,8,88,1,88,
        3,88,1698,8,88,1,88,1,88,1,88,1,88,3,88,1704,8,88,1,88,1,88,3,88,
        1708,8,88,1,88,1,88,3,88,1712,8,88,1,89,1,89,3,89,1716,8,89,1,89,
        1,89,3,89,1720,8,89,1,89,5,89,1723,8,89,10,89,12,89,1726,9,89,1,
        89,1,89,3,89,1730,8,89,1,89,1,89,3,89,1734,8,89,1,89,5,89,1737,8,
        89,10,89,12,89,1740,9,89,3,89,1742,8,89,1,90,1,90,1,90,1,90,1,90,
        1,90,1,90,3,90,1751,8,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,3,91,
        1760,8,91,1,91,5,91,1763,8,91,10,91,12,91,1766,9,91,1,92,1,92,1,
        92,1,92,1,93,1,93,1,93,1,93,1,94,1,94,3,94,1778,8,94,1,94,3,94,1781,
        8,94,1,95,1,95,1,95,1,95,1,96,1,96,3,96,1789,8,96,1,96,1,96,3,96,
        1793,8,96,1,96,5,96,1796,8,96,10,96,12,96,1799,9,96,1,97,1,97,3,
        97,1803,8,97,1,97,1,97,3,97,1807,8,97,1,97,1,97,1,97,3,97,1812,8,
        97,1,98,1,98,1,99,1,99,3,99,1818,8,99,1,99,5,99,1821,8,99,10,99,
        12,99,1824,9,99,1,99,1,99,1,99,1,99,3,99,1830,8,99,1,100,1,100,3,
        100,1834,8,100,1,100,1,100,3,100,1838,8,100,3,100,1840,8,100,1,100,
        1,100,3,100,1844,8,100,3,100,1846,8,100,1,100,1,100,3,100,1850,8,
        100,3,100,1852,8,100,1,100,1,100,1,101,1,101,3,101,1858,8,101,1,
        101,1,101,1,102,1,102,3,102,1864,8,102,1,102,1,102,3,102,1868,8,
        102,1,102,3,102,1871,8,102,1,102,3,102,1874,8,102,1,102,1,102,1,
        102,1,102,3,102,1880,8,102,1,102,3,102,1883,8,102,1,102,3,102,1886,
        8,102,1,102,1,102,3,102,1890,8,102,1,102,1,102,1,102,1,102,3,102,
        1896,8,102,1,102,3,102,1899,8,102,1,102,3,102,1902,8,102,1,102,1,
        102,3,102,1906,8,102,1,103,1,103,3,103,1910,8,103,1,103,1,103,3,
        103,1914,8,103,3,103,1916,8,103,1,103,1,103,3,103,1920,8,103,3,103,
        1922,8,103,1,103,1,103,3,103,1926,8,103,3,103,1928,8,103,1,103,1,
        103,3,103,1932,8,103,3,103,1934,8,103,1,103,1,103,1,104,1,104,3,
        104,1940,8,104,1,104,1,104,3,104,1944,8,104,1,104,1,104,3,104,1948,
        8,104,1,104,1,104,3,104,1952,8,104,1,104,1,104,3,104,1956,8,104,
        1,104,1,104,3,104,1960,8,104,1,104,1,104,3,104,1964,8,104,1,104,
        1,104,3,104,1968,8,104,5,104,1970,8,104,10,104,12,104,1973,9,104,
        3,104,1975,8,104,1,104,1,104,1,105,1,105,3,105,1981,8,105,1,105,
        1,105,3,105,1985,8,105,1,105,1,105,3,105,1989,8,105,1,105,3,105,
        1992,8,105,1,105,5,105,1995,8,105,10,105,12,105,1998,9,105,1,106,
        1,106,3,106,2002,8,106,1,106,5,106,2005,8,106,10,106,12,106,2008,
        9,106,1,107,1,107,3,107,2012,8,107,1,107,1,107,1,108,1,108,3,108,
        2018,8,108,1,108,3,108,2021,8,108,1,108,3,108,2024,8,108,1,108,3,
        108,2027,8,108,1,108,3,108,2030,8,108,1,108,3,108,2033,8,108,1,109,
        1,109,3,109,2037,8,109,1,109,1,109,3,109,2041,8,109,1,109,1,109,
        3,109,2045,8,109,1,109,1,109,3,109,2049,8,109,1,109,1,109,1,109,
        1,109,1,109,1,109,1,109,1,109,3,109,2059,8,109,1,110,3,110,2062,
        8,110,1,110,3,110,2065,8,110,1,110,1,110,3,110,2069,8,110,1,110,
        3,110,2072,8,110,1,110,3,110,2075,8,110,1,111,1,111,3,111,2079,8,
        111,1,111,1,111,3,111,2083,8,111,1,111,1,111,3,111,2087,8,111,1,
        111,1,111,3,111,2091,8,111,1,111,1,111,3,111,2095,8,111,1,111,1,
        111,3,111,2099,8,111,3,111,2101,8,111,1,111,3,111,2104,8,111,1,111,
        1,111,3,111,2108,8,111,1,111,1,111,3,111,2112,8,111,1,111,1,111,
        3,111,2116,8,111,1,111,1,111,3,111,2120,8,111,3,111,2122,8,111,1,
        111,1,111,1,112,1,112,3,112,2128,8,112,1,112,3,112,2131,8,112,1,
        112,3,112,2134,8,112,1,112,1,112,1,113,1,113,1,114,1,114,1,115,1,
        115,1,116,1,116,1,117,1,117,1,118,1,118,1,118,1,118,1,118,5,118,
        2153,8,118,10,118,12,118,2156,9,118,1,119,1,119,1,119,1,119,1,119,
        5,119,2163,8,119,10,119,12,119,2166,9,119,1,120,1,120,1,120,1,120,
        1,120,5,120,2173,8,120,10,120,12,120,2176,9,120,1,121,1,121,3,121,
        2180,8,121,5,121,2182,8,121,10,121,12,121,2185,9,121,1,121,1,121,
        1,122,1,122,3,122,2191,8,122,1,122,1,122,3,122,2195,8,122,1,122,
        1,122,3,122,2199,8,122,1,122,1,122,3,122,2203,8,122,1,122,1,122,
        3,122,2207,8,122,1,122,1,122,1,122,1,122,1,122,1,122,3,122,2215,
        8,122,1,122,1,122,3,122,2219,8,122,1,122,1,122,3,122,2223,8,122,
        1,122,1,122,3,122,2227,8,122,1,122,1,122,4,122,2231,8,122,11,122,
        12,122,2232,1,122,1,122,3,122,2237,8,122,1,123,1,123,1,124,1,124,
        3,124,2243,8,124,1,124,1,124,3,124,2247,8,124,1,124,5,124,2250,8,
        124,10,124,12,124,2253,9,124,1,125,1,125,3,125,2257,8,125,1,125,
        1,125,3,125,2261,8,125,1,125,5,125,2264,8,125,10,125,12,125,2267,
        9,125,1,126,1,126,3,126,2271,8,126,1,126,1,126,3,126,2275,8,126,
        1,126,1,126,5,126,2279,8,126,10,126,12,126,2282,9,126,1,127,1,127,
        1,128,1,128,3,128,2288,8,128,1,128,1,128,3,128,2292,8,128,1,128,
        1,128,5,128,2296,8,128,10,128,12,128,2299,9,128,1,129,1,129,1,130,
        1,130,3,130,2305,8,130,1,130,1,130,3,130,2309,8,130,1,130,1,130,
        5,130,2313,8,130,10,130,12,130,2316,9,130,1,131,1,131,1,132,1,132,
        3,132,2322,8,132,1,132,1,132,3,132,2326,8,132,1,132,5,132,2329,8,
        132,10,132,12,132,2332,9,132,1,133,1,133,1,133,4,133,2337,8,133,
        11,133,12,133,2338,1,133,3,133,2342,8,133,1,134,1,134,1,134,3,134,
        2347,8,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,3,134,2356,
        8,134,1,134,1,134,3,134,2360,8,134,1,134,3,134,2363,8,134,1,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,3,135,
        2376,8,135,1,135,3,135,2379,8,135,1,135,1,135,1,136,3,136,2384,8,
        136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
        1,137,1,137,3,137,2398,8,137,1,138,1,138,3,138,2402,8,138,5,138,
        2404,8,138,10,138,12,138,2407,9,138,1,138,1,138,3,138,2411,8,138,
        1,138,3,138,2414,8,138,1,139,1,139,3,139,2418,8,139,1,139,5,139,
        2421,8,139,10,139,12,139,2424,9,139,1,140,1,140,1,140,1,140,1,140,
        1,140,1,140,1,140,1,140,3,140,2435,8,140,1,141,1,141,3,141,2439,
        8,141,1,141,1,141,3,141,2443,8,141,1,141,1,141,3,141,2447,8,141,
        1,141,1,141,1,141,1,141,3,141,2453,8,141,1,141,1,141,3,141,2457,
        8,141,1,141,1,141,3,141,2461,8,141,1,141,1,141,1,141,1,141,3,141,
        2467,8,141,1,141,1,141,3,141,2471,8,141,1,141,1,141,3,141,2475,8,
        141,1,141,1,141,1,141,1,141,3,141,2481,8,141,1,141,1,141,3,141,2485,
        8,141,1,141,1,141,3,141,2489,8,141,1,141,1,141,3,141,2493,8,141,
        1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,143,1,143,1,144,
        1,144,1,144,1,144,1,144,1,144,3,144,2511,8,144,1,145,1,145,1,146,
        1,146,3,146,2517,8,146,1,146,1,146,3,146,2521,8,146,1,146,1,146,
        3,146,2525,8,146,5,146,2527,8,146,10,146,12,146,2530,9,146,3,146,
        2532,8,146,1,146,1,146,1,147,1,147,3,147,2538,8,147,1,147,3,147,
        2541,8,147,1,148,1,148,3,148,2545,8,148,1,148,1,148,3,148,2549,8,
        148,1,148,1,148,3,148,2553,8,148,1,148,1,148,3,148,2557,8,148,5,
        148,2559,8,148,10,148,12,148,2562,9,148,1,148,1,148,1,149,1,149,
        3,149,2568,8,149,1,149,3,149,2571,8,149,1,149,1,149,3,149,2575,8,
        149,1,149,1,149,1,150,1,150,3,150,2581,8,150,1,150,1,150,3,150,2585,
        8,150,1,150,1,150,1,151,1,151,3,151,2591,8,151,1,151,1,151,3,151,
        2595,8,151,1,151,1,151,3,151,2599,8,151,1,151,1,151,1,151,3,151,
        2604,8,151,1,151,1,151,3,151,2608,8,151,1,151,1,151,3,151,2612,8,
        151,1,151,1,151,3,151,2616,8,151,1,151,1,151,1,151,3,151,2621,8,
        151,1,151,3,151,2624,8,151,1,151,3,151,2627,8,151,1,151,1,151,1,
        151,1,151,3,151,2633,8,151,1,151,1,151,3,151,2637,8,151,1,151,1,
        151,3,151,2641,8,151,3,151,2643,8,151,1,151,1,151,3,151,2647,8,151,
        1,151,1,151,3,151,2651,8,151,1,151,1,151,3,151,2655,8,151,5,151,
        2657,8,151,10,151,12,151,2660,9,151,3,151,2662,8,151,1,151,1,151,
        3,151,2666,8,151,1,152,1,152,1,153,1,153,3,153,2672,8,153,1,153,
        1,153,1,153,3,153,2677,8,153,3,153,2679,8,153,1,153,1,153,3,153,
        2683,8,153,1,154,1,154,3,154,2687,8,154,1,154,1,154,1,154,3,154,
        2692,8,154,1,154,1,154,3,154,2696,8,154,1,155,1,155,1,155,3,155,
        2701,8,155,1,155,1,155,3,155,2705,8,155,1,155,1,155,3,155,2709,8,
        155,1,155,1,155,3,155,2713,8,155,5,155,2715,8,155,10,155,12,155,
        2718,9,155,1,155,1,155,3,155,2722,8,155,1,156,1,156,3,156,2726,8,
        156,1,156,4,156,2729,8,156,11,156,12,156,2730,1,157,1,157,3,157,
        2735,8,157,1,157,1,157,3,157,2739,8,157,1,157,1,157,3,157,2743,8,
        157,1,157,1,157,3,157,2747,8,157,1,157,3,157,2750,8,157,1,157,3,
        157,2753,8,157,1,157,3,157,2756,8,157,1,157,3,157,2759,8,157,1,157,
        1,157,1,158,1,158,3,158,2765,8,158,1,158,1,158,3,158,2769,8,158,
        1,159,1,159,3,159,2773,8,159,1,159,4,159,2776,8,159,11,159,12,159,
        2777,1,159,1,159,3,159,2782,8,159,1,159,1,159,3,159,2786,8,159,1,
        159,4,159,2789,8,159,11,159,12,159,2790,3,159,2793,8,159,1,159,3,
        159,2796,8,159,1,159,1,159,3,159,2800,8,159,1,159,3,159,2803,8,159,
        1,159,3,159,2806,8,159,1,159,1,159,1,160,1,160,3,160,2812,8,160,
        1,160,1,160,3,160,2816,8,160,1,160,1,160,3,160,2820,8,160,1,160,
        1,160,1,161,1,161,1,162,1,162,3,162,2828,8,162,1,163,1,163,1,163,
        3,163,2833,8,163,1,164,1,164,3,164,2837,8,164,1,164,1,164,1,165,
        1,165,1,166,1,166,1,167,1,167,1,168,1,168,1,169,1,169,1,169,1,169,
        1,169,3,169,2854,8,169,1,170,1,170,1,171,1,171,1,172,1,172,1,173,
        1,173,1,173,0,2,102,156,174,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
        28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
        72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,
        112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,
        144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,
        176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,
        208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,
        240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,
        272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,
        304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,
        336,338,340,342,344,346,0,13,2,0,131,131,137,137,2,0,53,54,75,76,
        2,0,6,6,13,17,1,0,19,20,2,0,21,21,163,163,2,0,22,23,159,159,2,0,
        87,87,142,142,2,0,68,68,83,83,1,0,174,175,31,0,48,48,50,50,52,52,
        55,58,61,61,63,64,66,68,70,71,74,74,77,77,79,79,84,86,88,89,91,91,
        95,96,98,98,100,100,102,105,107,110,112,113,124,129,131,132,134,
        134,136,136,139,139,141,141,143,143,146,148,152,152,156,158,160,
        160,2,0,14,14,27,30,2,0,16,16,31,34,2,0,35,45,163,163,3248,0,348,
        1,0,0,0,2,368,1,0,0,0,4,401,1,0,0,0,6,403,1,0,0,0,8,429,1,0,0,0,
        10,477,1,0,0,0,12,479,1,0,0,0,14,509,1,0,0,0,16,539,1,0,0,0,18,559,
        1,0,0,0,20,565,1,0,0,0,22,616,1,0,0,0,24,618,1,0,0,0,26,632,1,0,
        0,0,28,636,1,0,0,0,30,655,1,0,0,0,32,657,1,0,0,0,34,669,1,0,0,0,
        36,712,1,0,0,0,38,726,1,0,0,0,40,770,1,0,0,0,42,772,1,0,0,0,44,778,
        1,0,0,0,46,819,1,0,0,0,48,890,1,0,0,0,50,904,1,0,0,0,52,912,1,0,
        0,0,54,929,1,0,0,0,56,946,1,0,0,0,58,948,1,0,0,0,60,959,1,0,0,0,
        62,979,1,0,0,0,64,990,1,0,0,0,66,992,1,0,0,0,68,1005,1,0,0,0,70,
        1009,1,0,0,0,72,1013,1,0,0,0,74,1024,1,0,0,0,76,1038,1,0,0,0,78,
        1040,1,0,0,0,80,1054,1,0,0,0,82,1058,1,0,0,0,84,1067,1,0,0,0,86,
        1073,1,0,0,0,88,1081,1,0,0,0,90,1090,1,0,0,0,92,1099,1,0,0,0,94,
        1113,1,0,0,0,96,1117,1,0,0,0,98,1131,1,0,0,0,100,1142,1,0,0,0,102,
        1246,1,0,0,0,104,1255,1,0,0,0,106,1262,1,0,0,0,108,1270,1,0,0,0,
        110,1272,1,0,0,0,112,1277,1,0,0,0,114,1292,1,0,0,0,116,1298,1,0,
        0,0,118,1300,1,0,0,0,120,1312,1,0,0,0,122,1323,1,0,0,0,124,1327,
        1,0,0,0,126,1331,1,0,0,0,128,1354,1,0,0,0,130,1368,1,0,0,0,132,1372,
        1,0,0,0,134,1409,1,0,0,0,136,1415,1,0,0,0,138,1427,1,0,0,0,140,1445,
        1,0,0,0,142,1451,1,0,0,0,144,1453,1,0,0,0,146,1503,1,0,0,0,148,1507,
        1,0,0,0,150,1521,1,0,0,0,152,1540,1,0,0,0,154,1555,1,0,0,0,156,1571,
        1,0,0,0,158,1592,1,0,0,0,160,1602,1,0,0,0,162,1608,1,0,0,0,164,1630,
        1,0,0,0,166,1632,1,0,0,0,168,1650,1,0,0,0,170,1662,1,0,0,0,172,1682,
        1,0,0,0,174,1690,1,0,0,0,176,1697,1,0,0,0,178,1741,1,0,0,0,180,1750,
        1,0,0,0,182,1752,1,0,0,0,184,1767,1,0,0,0,186,1771,1,0,0,0,188,1775,
        1,0,0,0,190,1782,1,0,0,0,192,1786,1,0,0,0,194,1811,1,0,0,0,196,1813,
        1,0,0,0,198,1829,1,0,0,0,200,1831,1,0,0,0,202,1855,1,0,0,0,204,1905,
        1,0,0,0,206,1907,1,0,0,0,208,1937,1,0,0,0,210,1978,1,0,0,0,212,1999,
        1,0,0,0,214,2009,1,0,0,0,216,2015,1,0,0,0,218,2058,1,0,0,0,220,2074,
        1,0,0,0,222,2076,1,0,0,0,224,2125,1,0,0,0,226,2137,1,0,0,0,228,2139,
        1,0,0,0,230,2141,1,0,0,0,232,2143,1,0,0,0,234,2145,1,0,0,0,236,2147,
        1,0,0,0,238,2157,1,0,0,0,240,2167,1,0,0,0,242,2183,1,0,0,0,244,2236,
        1,0,0,0,246,2238,1,0,0,0,248,2240,1,0,0,0,250,2254,1,0,0,0,252,2268,
        1,0,0,0,254,2283,1,0,0,0,256,2285,1,0,0,0,258,2300,1,0,0,0,260,2302,
        1,0,0,0,262,2317,1,0,0,0,264,2319,1,0,0,0,266,2333,1,0,0,0,268,2362,
        1,0,0,0,270,2375,1,0,0,0,272,2383,1,0,0,0,274,2397,1,0,0,0,276,2405,
        1,0,0,0,278,2415,1,0,0,0,280,2434,1,0,0,0,282,2492,1,0,0,0,284,2494,
        1,0,0,0,286,2498,1,0,0,0,288,2510,1,0,0,0,290,2512,1,0,0,0,292,2514,
        1,0,0,0,294,2535,1,0,0,0,296,2542,1,0,0,0,298,2567,1,0,0,0,300,2578,
        1,0,0,0,302,2665,1,0,0,0,304,2667,1,0,0,0,306,2682,1,0,0,0,308,2684,
        1,0,0,0,310,2721,1,0,0,0,312,2723,1,0,0,0,314,2732,1,0,0,0,316,2762,
        1,0,0,0,318,2792,1,0,0,0,320,2809,1,0,0,0,322,2823,1,0,0,0,324,2827,
        1,0,0,0,326,2829,1,0,0,0,328,2834,1,0,0,0,330,2840,1,0,0,0,332,2842,
        1,0,0,0,334,2844,1,0,0,0,336,2846,1,0,0,0,338,2853,1,0,0,0,340,2855,
        1,0,0,0,342,2857,1,0,0,0,344,2859,1,0,0,0,346,2861,1,0,0,0,348,359,
        3,2,1,0,349,351,5,180,0,0,350,349,1,0,0,0,350,351,1,0,0,0,351,352,
        1,0,0,0,352,354,5,1,0,0,353,355,5,180,0,0,354,353,1,0,0,0,354,355,
        1,0,0,0,355,356,1,0,0,0,356,358,3,2,1,0,357,350,1,0,0,0,358,361,
        1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,363,1,0,0,0,361,359,
        1,0,0,0,362,364,5,180,0,0,363,362,1,0,0,0,363,364,1,0,0,0,364,365,
        1,0,0,0,365,366,5,0,0,1,366,1,1,0,0,0,367,369,3,108,54,0,368,367,
        1,0,0,0,368,369,1,0,0,0,369,371,1,0,0,0,370,372,5,180,0,0,371,370,
        1,0,0,0,371,372,1,0,0,0,372,373,1,0,0,0,373,378,3,4,2,0,374,376,
        5,180,0,0,375,374,1,0,0,0,375,376,1,0,0,0,376,377,1,0,0,0,377,379,
        5,1,0,0,378,375,1,0,0,0,378,379,1,0,0,0,379,3,1,0,0,0,380,402,3,
        126,63,0,381,402,3,58,29,0,382,402,3,44,22,0,383,402,3,46,23,0,384,
        402,3,52,26,0,385,402,3,54,27,0,386,402,3,72,36,0,387,402,3,74,37,
        0,388,402,3,6,3,0,389,402,3,12,6,0,390,402,3,14,7,0,391,402,3,30,
        15,0,392,402,3,34,17,0,393,402,3,32,16,0,394,402,3,114,57,0,395,
        402,3,116,58,0,396,402,3,16,8,0,397,402,3,18,9,0,398,402,3,20,10,
        0,399,402,3,26,13,0,400,402,3,28,14,0,401,380,1,0,0,0,401,381,1,
        0,0,0,401,382,1,0,0,0,401,383,1,0,0,0,401,384,1,0,0,0,401,385,1,
        0,0,0,401,386,1,0,0,0,401,387,1,0,0,0,401,388,1,0,0,0,401,389,1,
        0,0,0,401,390,1,0,0,0,401,391,1,0,0,0,401,392,1,0,0,0,401,393,1,
        0,0,0,401,394,1,0,0,0,401,395,1,0,0,0,401,396,1,0,0,0,401,397,1,
        0,0,0,401,398,1,0,0,0,401,399,1,0,0,0,401,400,1,0,0,0,402,5,1,0,
        0,0,403,404,5,67,0,0,404,405,5,180,0,0,405,407,3,336,168,0,406,408,
        3,8,4,0,407,406,1,0,0,0,407,408,1,0,0,0,408,409,1,0,0,0,409,410,
        5,180,0,0,410,411,5,88,0,0,411,412,5,180,0,0,412,426,3,10,5,0,413,
        415,5,180,0,0,414,413,1,0,0,0,414,415,1,0,0,0,415,416,1,0,0,0,416,
        418,5,2,0,0,417,419,5,180,0,0,418,417,1,0,0,0,418,419,1,0,0,0,419,
        420,1,0,0,0,420,422,3,24,12,0,421,423,5,180,0,0,422,421,1,0,0,0,
        422,423,1,0,0,0,423,424,1,0,0,0,424,425,5,3,0,0,425,427,1,0,0,0,
        426,414,1,0,0,0,426,427,1,0,0,0,427,7,1,0,0,0,428,430,5,180,0,0,
        429,428,1,0,0,0,429,430,1,0,0,0,430,431,1,0,0,0,431,433,5,2,0,0,
        432,434,5,180,0,0,433,432,1,0,0,0,433,434,1,0,0,0,434,452,1,0,0,
        0,435,446,3,336,168,0,436,438,5,180,0,0,437,436,1,0,0,0,437,438,
        1,0,0,0,438,439,1,0,0,0,439,441,5,4,0,0,440,442,5,180,0,0,441,440,
        1,0,0,0,441,442,1,0,0,0,442,443,1,0,0,0,443,445,3,336,168,0,444,
        437,1,0,0,0,445,448,1,0,0,0,446,444,1,0,0,0,446,447,1,0,0,0,447,
        450,1,0,0,0,448,446,1,0,0,0,449,451,5,180,0,0,450,449,1,0,0,0,450,
        451,1,0,0,0,451,453,1,0,0,0,452,435,1,0,0,0,452,453,1,0,0,0,453,
        454,1,0,0,0,454,455,5,3,0,0,455,9,1,0,0,0,456,478,3,40,20,0,457,
        459,5,2,0,0,458,460,5,180,0,0,459,458,1,0,0,0,459,460,1,0,0,0,460,
        461,1,0,0,0,461,463,3,126,63,0,462,464,5,180,0,0,463,462,1,0,0,0,
        463,464,1,0,0,0,464,465,1,0,0,0,465,466,5,3,0,0,466,478,1,0,0,0,
        467,478,3,326,163,0,468,478,3,322,161,0,469,470,3,322,161,0,470,
        472,5,5,0,0,471,473,5,180,0,0,472,471,1,0,0,0,472,473,1,0,0,0,473,
        474,1,0,0,0,474,475,3,336,168,0,475,478,1,0,0,0,476,478,3,302,151,
        0,477,456,1,0,0,0,477,457,1,0,0,0,477,467,1,0,0,0,477,468,1,0,0,
        0,477,469,1,0,0,0,477,476,1,0,0,0,478,11,1,0,0,0,479,480,5,67,0,
        0,480,481,5,180,0,0,481,482,3,336,168,0,482,483,5,180,0,0,483,484,
        5,88,0,0,484,485,5,180,0,0,485,487,5,2,0,0,486,488,5,180,0,0,487,
        486,1,0,0,0,487,488,1,0,0,0,488,489,1,0,0,0,489,500,5,165,0,0,490,
        492,5,180,0,0,491,490,1,0,0,0,491,492,1,0,0,0,492,493,1,0,0,0,493,
        495,5,4,0,0,494,496,5,180,0,0,495,494,1,0,0,0,495,496,1,0,0,0,496,
        497,1,0,0,0,497,499,5,165,0,0,498,491,1,0,0,0,499,502,1,0,0,0,500,
        498,1,0,0,0,500,501,1,0,0,0,501,503,1,0,0,0,502,500,1,0,0,0,503,
        504,5,3,0,0,504,505,5,180,0,0,505,506,5,57,0,0,506,507,5,180,0,0,
        507,508,5,62,0,0,508,13,1,0,0,0,509,510,5,67,0,0,510,511,5,180,0,
        0,511,513,5,2,0,0,512,514,5,180,0,0,513,512,1,0,0,0,513,514,1,0,
        0,0,514,515,1,0,0,0,515,517,3,126,63,0,516,518,5,180,0,0,517,516,
        1,0,0,0,517,518,1,0,0,0,518,519,1,0,0,0,519,520,5,3,0,0,520,521,
        5,180,0,0,521,522,5,139,0,0,522,523,5,180,0,0,523,537,5,165,0,0,
        524,526,5,180,0,0,525,524,1,0,0,0,525,526,1,0,0,0,526,527,1,0,0,
        0,527,529,5,2,0,0,528,530,5,180,0,0,529,528,1,0,0,0,529,530,1,0,
        0,0,530,531,1,0,0,0,531,533,3,24,12,0,532,534,5,180,0,0,533,532,
        1,0,0,0,533,534,1,0,0,0,534,535,1,0,0,0,535,536,5,3,0,0,536,538,
        1,0,0,0,537,525,1,0,0,0,537,538,1,0,0,0,538,15,1,0,0,0,539,540,5,
        85,0,0,540,541,5,180,0,0,541,542,5,71,0,0,542,543,5,180,0,0,543,
        557,5,165,0,0,544,546,5,180,0,0,545,544,1,0,0,0,545,546,1,0,0,0,
        546,547,1,0,0,0,547,549,5,2,0,0,548,550,5,180,0,0,549,548,1,0,0,
        0,549,550,1,0,0,0,550,551,1,0,0,0,551,553,3,24,12,0,552,554,5,180,
        0,0,553,552,1,0,0,0,553,554,1,0,0,0,554,555,1,0,0,0,555,556,5,3,
        0,0,556,558,1,0,0,0,557,545,1,0,0,0,557,558,1,0,0,0,558,17,1,0,0,
        0,559,560,5,95,0,0,560,561,5,180,0,0,561,562,5,71,0,0,562,563,5,
        180,0,0,563,564,5,165,0,0,564,19,1,0,0,0,565,566,5,55,0,0,566,567,
        5,180,0,0,567,572,5,165,0,0,568,569,5,180,0,0,569,570,5,52,0,0,570,
        571,5,180,0,0,571,573,3,336,168,0,572,568,1,0,0,0,572,573,1,0,0,
        0,573,574,1,0,0,0,574,575,5,180,0,0,575,577,5,2,0,0,576,578,5,180,
        0,0,577,576,1,0,0,0,577,578,1,0,0,0,578,579,1,0,0,0,579,580,5,72,
        0,0,580,581,5,180,0,0,581,590,3,338,169,0,582,584,5,180,0,0,583,
        582,1,0,0,0,583,584,1,0,0,0,584,585,1,0,0,0,585,587,5,4,0,0,586,
        588,5,180,0,0,587,586,1,0,0,0,587,588,1,0,0,0,588,589,1,0,0,0,589,
        591,3,24,12,0,590,583,1,0,0,0,590,591,1,0,0,0,591,593,1,0,0,0,592,
        594,5,180,0,0,593,592,1,0,0,0,593,594,1,0,0,0,594,595,1,0,0,0,595,
        596,5,3,0,0,596,21,1,0,0,0,597,611,3,338,169,0,598,600,5,180,0,0,
        599,598,1,0,0,0,599,600,1,0,0,0,600,601,1,0,0,0,601,603,5,6,0,0,
        602,604,5,180,0,0,603,602,1,0,0,0,603,604,1,0,0,0,604,612,1,0,0,
        0,605,607,5,180,0,0,606,605,1,0,0,0,607,610,1,0,0,0,608,606,1,0,
        0,0,608,609,1,0,0,0,609,612,1,0,0,0,610,608,1,0,0,0,611,599,1,0,
        0,0,611,608,1,0,0,0,612,613,1,0,0,0,613,614,3,288,144,0,614,617,
        1,0,0,0,615,617,3,338,169,0,616,597,1,0,0,0,616,615,1,0,0,0,617,
        23,1,0,0,0,618,629,3,22,11,0,619,621,5,180,0,0,620,619,1,0,0,0,620,
        621,1,0,0,0,621,622,1,0,0,0,622,624,5,4,0,0,623,625,5,180,0,0,624,
        623,1,0,0,0,624,625,1,0,0,0,625,626,1,0,0,0,626,628,3,22,11,0,627,
        620,1,0,0,0,628,631,1,0,0,0,629,627,1,0,0,0,629,630,1,0,0,0,630,
        25,1,0,0,0,631,629,1,0,0,0,632,633,5,77,0,0,633,634,5,180,0,0,634,
        635,3,336,168,0,635,27,1,0,0,0,636,637,5,148,0,0,637,638,5,180,0,
        0,638,639,3,336,168,0,639,29,1,0,0,0,640,641,5,58,0,0,641,642,5,
        180,0,0,642,644,3,338,169,0,643,645,5,180,0,0,644,643,1,0,0,0,644,
        645,1,0,0,0,645,646,1,0,0,0,646,648,5,6,0,0,647,649,5,180,0,0,648,
        647,1,0,0,0,648,649,1,0,0,0,649,650,1,0,0,0,650,651,3,234,117,0,
        651,656,1,0,0,0,652,653,5,58,0,0,653,654,5,180,0,0,654,656,3,302,
        151,0,655,640,1,0,0,0,655,652,1,0,0,0,656,31,1,0,0,0,657,658,5,63,
        0,0,658,659,5,180,0,0,659,660,5,117,0,0,660,661,5,180,0,0,661,662,
        5,137,0,0,662,663,5,180,0,0,663,664,3,336,168,0,664,665,5,180,0,
        0,665,666,5,100,0,0,666,667,5,180,0,0,667,668,5,165,0,0,668,33,1,
        0,0,0,669,670,5,69,0,0,670,671,5,180,0,0,671,672,5,106,0,0,672,673,
        5,180,0,0,673,675,3,304,152,0,674,676,5,180,0,0,675,674,1,0,0,0,
        675,676,1,0,0,0,676,677,1,0,0,0,677,679,5,2,0,0,678,680,5,180,0,
        0,679,678,1,0,0,0,679,680,1,0,0,0,680,682,1,0,0,0,681,683,3,36,18,
        0,682,681,1,0,0,0,682,683,1,0,0,0,683,685,1,0,0,0,684,686,5,180,
        0,0,685,684,1,0,0,0,685,686,1,0,0,0,686,688,1,0,0,0,687,689,3,38,
        19,0,688,687,1,0,0,0,688,689,1,0,0,0,689,700,1,0,0,0,690,692,5,180,
        0,0,691,690,1,0,0,0,691,692,1,0,0,0,692,693,1,0,0,0,693,695,5,4,
        0,0,694,696,5,180,0,0,695,694,1,0,0,0,695,696,1,0,0,0,696,697,1,
        0,0,0,697,699,3,38,19,0,698,691,1,0,0,0,699,702,1,0,0,0,700,698,
        1,0,0,0,700,701,1,0,0,0,701,704,1,0,0,0,702,700,1,0,0,0,703,705,
        5,180,0,0,704,703,1,0,0,0,704,705,1,0,0,0,705,706,1,0,0,0,706,707,
        5,3,0,0,707,708,5,180,0,0,708,709,5,52,0,0,709,710,5,180,0,0,710,
        711,3,234,117,0,711,35,1,0,0,0,712,723,3,338,169,0,713,715,5,180,
        0,0,714,713,1,0,0,0,714,715,1,0,0,0,715,716,1,0,0,0,716,718,5,4,
        0,0,717,719,5,180,0,0,718,717,1,0,0,0,718,719,1,0,0,0,719,720,1,
        0,0,0,720,722,3,338,169,0,721,714,1,0,0,0,722,725,1,0,0,0,723,721,
        1,0,0,0,723,724,1,0,0,0,724,37,1,0,0,0,725,723,1,0,0,0,726,728,3,
        338,169,0,727,729,5,180,0,0,728,727,1,0,0,0,728,729,1,0,0,0,729,
        730,1,0,0,0,730,731,5,162,0,0,731,733,5,6,0,0,732,734,5,180,0,0,
        733,732,1,0,0,0,733,734,1,0,0,0,734,735,1,0,0,0,735,736,3,288,144,
        0,736,39,1,0,0,0,737,739,5,7,0,0,738,740,5,180,0,0,739,738,1,0,0,
        0,739,740,1,0,0,0,740,741,1,0,0,0,741,752,5,165,0,0,742,744,5,180,
        0,0,743,742,1,0,0,0,743,744,1,0,0,0,744,745,1,0,0,0,745,747,5,4,
        0,0,746,748,5,180,0,0,747,746,1,0,0,0,747,748,1,0,0,0,748,749,1,
        0,0,0,749,751,5,165,0,0,750,743,1,0,0,0,751,754,1,0,0,0,752,750,
        1,0,0,0,752,753,1,0,0,0,753,755,1,0,0,0,754,752,1,0,0,0,755,771,
        5,8,0,0,756,771,5,165,0,0,757,759,5,90,0,0,758,760,5,180,0,0,759,
        758,1,0,0,0,759,760,1,0,0,0,760,761,1,0,0,0,761,763,5,2,0,0,762,
        764,5,180,0,0,763,762,1,0,0,0,763,764,1,0,0,0,764,765,1,0,0,0,765,
        767,5,165,0,0,766,768,5,180,0,0,767,766,1,0,0,0,767,768,1,0,0,0,
        768,769,1,0,0,0,769,771,5,3,0,0,770,737,1,0,0,0,770,756,1,0,0,0,
        770,757,1,0,0,0,771,41,1,0,0,0,772,773,5,96,0,0,773,774,5,180,0,
        0,774,775,5,114,0,0,775,776,5,180,0,0,776,777,5,83,0,0,777,43,1,
        0,0,0,778,779,5,69,0,0,779,780,5,180,0,0,780,781,5,113,0,0,781,782,
        5,180,0,0,782,783,5,137,0,0,783,787,5,180,0,0,784,785,3,42,21,0,
        785,786,5,180,0,0,786,788,1,0,0,0,787,784,1,0,0,0,787,788,1,0,0,
        0,788,789,1,0,0,0,789,817,3,336,168,0,790,792,5,180,0,0,791,790,
        1,0,0,0,791,792,1,0,0,0,792,793,1,0,0,0,793,795,5,2,0,0,794,796,
        5,180,0,0,795,794,1,0,0,0,795,796,1,0,0,0,796,797,1,0,0,0,797,799,
        3,96,48,0,798,800,5,180,0,0,799,798,1,0,0,0,799,800,1,0,0,0,800,
        806,1,0,0,0,801,803,5,4,0,0,802,804,5,180,0,0,803,802,1,0,0,0,803,
        804,1,0,0,0,804,805,1,0,0,0,805,807,3,100,50,0,806,801,1,0,0,0,806,
        807,1,0,0,0,807,809,1,0,0,0,808,810,5,180,0,0,809,808,1,0,0,0,809,
        810,1,0,0,0,810,811,1,0,0,0,811,812,5,3,0,0,812,818,1,0,0,0,813,
        814,5,180,0,0,814,815,5,52,0,0,815,816,5,180,0,0,816,818,3,126,63,
        0,817,791,1,0,0,0,817,813,1,0,0,0,818,45,1,0,0,0,819,820,5,69,0,
        0,820,821,5,180,0,0,821,822,5,126,0,0,822,823,5,180,0,0,823,826,
        5,137,0,0,824,825,5,180,0,0,825,827,5,92,0,0,826,824,1,0,0,0,826,
        827,1,0,0,0,827,830,1,0,0,0,828,829,5,180,0,0,829,831,3,42,21,0,
        830,828,1,0,0,0,830,831,1,0,0,0,831,832,1,0,0,0,832,833,5,180,0,
        0,833,835,3,336,168,0,834,836,5,180,0,0,835,834,1,0,0,0,835,836,
        1,0,0,0,836,837,1,0,0,0,837,839,5,2,0,0,838,840,5,180,0,0,839,838,
        1,0,0,0,839,840,1,0,0,0,840,841,1,0,0,0,841,843,3,48,24,0,842,844,
        5,180,0,0,843,842,1,0,0,0,843,844,1,0,0,0,844,871,1,0,0,0,845,847,
        5,4,0,0,846,848,5,180,0,0,847,846,1,0,0,0,847,848,1,0,0,0,848,849,
        1,0,0,0,849,851,3,96,48,0,850,852,5,180,0,0,851,850,1,0,0,0,851,
        852,1,0,0,0,852,854,1,0,0,0,853,845,1,0,0,0,853,854,1,0,0,0,854,
        863,1,0,0,0,855,857,5,4,0,0,856,858,5,180,0,0,857,856,1,0,0,0,857,
        858,1,0,0,0,858,859,1,0,0,0,859,861,3,338,169,0,860,862,5,180,0,
        0,861,860,1,0,0,0,861,862,1,0,0,0,862,864,1,0,0,0,863,855,1,0,0,
        0,863,864,1,0,0,0,864,865,1,0,0,0,865,872,5,3,0,0,866,867,5,3,0,
        0,867,868,5,180,0,0,868,869,5,52,0,0,869,870,5,180,0,0,870,872,3,
        126,63,0,871,853,1,0,0,0,871,866,1,0,0,0,872,888,1,0,0,0,873,874,
        5,180,0,0,874,876,5,151,0,0,875,877,5,180,0,0,876,875,1,0,0,0,876,
        877,1,0,0,0,877,878,1,0,0,0,878,880,5,2,0,0,879,881,5,180,0,0,880,
        879,1,0,0,0,880,881,1,0,0,0,881,882,1,0,0,0,882,884,3,24,12,0,883,
        885,5,180,0,0,884,883,1,0,0,0,884,885,1,0,0,0,885,886,1,0,0,0,886,
        887,5,3,0,0,887,889,1,0,0,0,888,873,1,0,0,0,888,889,1,0,0,0,889,
        47,1,0,0,0,890,901,3,50,25,0,891,893,5,180,0,0,892,891,1,0,0,0,892,
        893,1,0,0,0,893,894,1,0,0,0,894,896,5,4,0,0,895,897,5,180,0,0,896,
        895,1,0,0,0,896,897,1,0,0,0,897,898,1,0,0,0,898,900,3,50,25,0,899,
        892,1,0,0,0,900,903,1,0,0,0,901,899,1,0,0,0,901,902,1,0,0,0,902,
        49,1,0,0,0,903,901,1,0,0,0,904,905,5,88,0,0,905,906,5,180,0,0,906,
        907,3,336,168,0,907,908,5,180,0,0,908,909,5,139,0,0,909,910,5,180,
        0,0,910,911,3,336,168,0,911,51,1,0,0,0,912,913,5,69,0,0,913,914,
        5,180,0,0,914,915,5,131,0,0,915,919,5,180,0,0,916,917,3,42,21,0,
        917,918,5,180,0,0,918,920,1,0,0,0,919,916,1,0,0,0,919,920,1,0,0,
        0,920,921,1,0,0,0,921,926,3,336,168,0,922,923,5,180,0,0,923,925,
        3,56,28,0,924,922,1,0,0,0,925,928,1,0,0,0,926,924,1,0,0,0,926,927,
        1,0,0,0,927,53,1,0,0,0,928,926,1,0,0,0,929,930,5,69,0,0,930,931,
        5,180,0,0,931,932,5,143,0,0,932,933,5,180,0,0,933,934,3,336,168,
        0,934,935,5,180,0,0,935,936,5,52,0,0,936,937,5,180,0,0,937,939,3,
        102,51,0,938,940,5,180,0,0,939,938,1,0,0,0,939,940,1,0,0,0,940,55,
        1,0,0,0,941,947,3,60,30,0,942,947,3,62,31,0,943,947,3,64,32,0,944,
        947,3,66,33,0,945,947,3,68,34,0,946,941,1,0,0,0,946,942,1,0,0,0,
        946,943,1,0,0,0,946,944,1,0,0,0,946,945,1,0,0,0,947,57,1,0,0,0,948,
        949,5,69,0,0,949,950,5,180,0,0,950,951,5,157,0,0,951,955,5,180,0,
        0,952,953,3,42,21,0,953,954,5,180,0,0,954,956,1,0,0,0,955,952,1,
        0,0,0,955,956,1,0,0,0,956,957,1,0,0,0,957,958,3,322,161,0,958,59,
        1,0,0,0,959,960,5,98,0,0,960,963,5,180,0,0,961,962,5,57,0,0,962,
        964,5,180,0,0,963,961,1,0,0,0,963,964,1,0,0,0,964,966,1,0,0,0,965,
        967,5,163,0,0,966,965,1,0,0,0,966,967,1,0,0,0,967,968,1,0,0,0,968,
        969,3,332,166,0,969,61,1,0,0,0,970,971,5,112,0,0,971,972,5,180,0,
        0,972,980,5,110,0,0,973,974,5,110,0,0,974,976,5,180,0,0,975,977,
        5,163,0,0,976,975,1,0,0,0,976,977,1,0,0,0,977,978,1,0,0,0,978,980,
        3,332,166,0,979,970,1,0,0,0,979,973,1,0,0,0,980,63,1,0,0,0,981,982,
        5,112,0,0,982,983,5,180,0,0,983,991,5,108,0,0,984,985,5,108,0,0,
        985,987,5,180,0,0,986,988,5,163,0,0,987,986,1,0,0,0,987,988,1,0,
        0,0,988,989,1,0,0,0,989,991,3,332,166,0,990,981,1,0,0,0,990,984,
        1,0,0,0,991,65,1,0,0,0,992,993,5,134,0,0,993,996,5,180,0,0,994,995,
        5,151,0,0,995,997,5,180,0,0,996,994,1,0,0,0,996,997,1,0,0,0,997,
        999,1,0,0,0,998,1000,5,163,0,0,999,998,1,0,0,0,999,1000,1,0,0,0,
        1000,1001,1,0,0,0,1001,1002,3,332,166,0,1002,67,1,0,0,0,1003,1004,
        5,112,0,0,1004,1006,5,180,0,0,1005,1003,1,0,0,0,1005,1006,1,0,0,
        0,1006,1007,1,0,0,0,1007,1008,5,70,0,0,1008,69,1,0,0,0,1009,1010,
        5,96,0,0,1010,1011,5,180,0,0,1011,1012,5,83,0,0,1012,71,1,0,0,0,
        1013,1014,5,79,0,0,1014,1015,5,180,0,0,1015,1016,7,0,0,0,1016,1020,
        5,180,0,0,1017,1018,3,70,35,0,1018,1019,5,180,0,0,1019,1021,1,0,
        0,0,1020,1017,1,0,0,0,1020,1021,1,0,0,0,1021,1022,1,0,0,0,1022,1023,
        3,336,168,0,1023,73,1,0,0,0,1024,1025,5,50,0,0,1025,1026,5,180,0,
        0,1026,1027,5,137,0,0,1027,1028,5,180,0,0,1028,1029,3,336,168,0,
        1029,1030,5,180,0,0,1030,1031,3,76,38,0,1031,75,1,0,0,0,1032,1039,
        3,78,39,0,1033,1039,3,82,41,0,1034,1039,3,84,42,0,1035,1039,3,86,
        43,0,1036,1039,3,88,44,0,1037,1039,3,90,45,0,1038,1032,1,0,0,0,1038,
        1033,1,0,0,0,1038,1034,1,0,0,0,1038,1035,1,0,0,0,1038,1036,1,0,0,
        0,1038,1037,1,0,0,0,1039,77,1,0,0,0,1040,1041,5,48,0,0,1041,1045,
        5,180,0,0,1042,1043,3,42,21,0,1043,1044,5,180,0,0,1044,1046,1,0,
        0,0,1045,1042,1,0,0,0,1045,1046,1,0,0,0,1046,1047,1,0,0,0,1047,1048,
        3,330,165,0,1048,1049,5,180,0,0,1049,1052,3,102,51,0,1050,1051,5,
        180,0,0,1051,1053,3,80,40,0,1052,1050,1,0,0,0,1052,1053,1,0,0,0,
        1053,79,1,0,0,0,1054,1055,5,73,0,0,1055,1056,5,180,0,0,1056,1057,
        3,234,117,0,1057,81,1,0,0,0,1058,1059,5,79,0,0,1059,1063,5,180,0,
        0,1060,1061,3,70,35,0,1061,1062,5,180,0,0,1062,1064,1,0,0,0,1063,
        1060,1,0,0,0,1063,1064,1,0,0,0,1064,1065,1,0,0,0,1065,1066,3,330,
        165,0,1066,83,1,0,0,0,1067,1068,5,127,0,0,1068,1069,5,180,0,0,1069,
        1070,5,139,0,0,1070,1071,5,180,0,0,1071,1072,3,336,168,0,1072,85,
        1,0,0,0,1073,1074,5,127,0,0,1074,1075,5,180,0,0,1075,1076,3,330,
        165,0,1076,1077,5,180,0,0,1077,1078,5,139,0,0,1078,1079,5,180,0,
        0,1079,1080,3,330,165,0,1080,87,1,0,0,0,1081,1082,5,48,0,0,1082,
        1086,5,180,0,0,1083,1084,3,42,21,0,1084,1085,5,180,0,0,1085,1087,
        1,0,0,0,1086,1083,1,0,0,0,1086,1087,1,0,0,0,1087,1088,1,0,0,0,1088,
        1089,3,50,25,0,1089,89,1,0,0,0,1090,1091,5,79,0,0,1091,1095,5,180,
        0,0,1092,1093,3,70,35,0,1093,1094,5,180,0,0,1094,1096,1,0,0,0,1095,
        1092,1,0,0,0,1095,1096,1,0,0,0,1096,1097,1,0,0,0,1097,1098,3,50,
        25,0,1098,91,1,0,0,0,1099,1110,3,94,47,0,1100,1102,5,180,0,0,1101,
        1100,1,0,0,0,1101,1102,1,0,0,0,1102,1103,1,0,0,0,1103,1105,5,4,0,
        0,1104,1106,5,180,0,0,1105,1104,1,0,0,0,1105,1106,1,0,0,0,1106,1107,
        1,0,0,0,1107,1109,3,94,47,0,1108,1101,1,0,0,0,1109,1112,1,0,0,0,
        1110,1108,1,0,0,0,1110,1111,1,0,0,0,1111,93,1,0,0,0,1112,1110,1,
        0,0,0,1113,1114,3,330,165,0,1114,1115,5,180,0,0,1115,1116,3,102,
        51,0,1116,95,1,0,0,0,1117,1128,3,98,49,0,1118,1120,5,180,0,0,1119,
        1118,1,0,0,0,1119,1120,1,0,0,0,1120,1121,1,0,0,0,1121,1123,5,4,0,
        0,1122,1124,5,180,0,0,1123,1122,1,0,0,0,1123,1124,1,0,0,0,1124,1125,
        1,0,0,0,1125,1127,3,98,49,0,1126,1119,1,0,0,0,1127,1130,1,0,0,0,
        1128,1126,1,0,0,0,1128,1129,1,0,0,0,1129,97,1,0,0,0,1130,1128,1,
        0,0,0,1131,1134,3,94,47,0,1132,1133,5,180,0,0,1133,1135,3,80,40,
        0,1134,1132,1,0,0,0,1134,1135,1,0,0,0,1135,1140,1,0,0,0,1136,1137,
        5,180,0,0,1137,1138,5,122,0,0,1138,1139,5,180,0,0,1139,1141,5,102,
        0,0,1140,1136,1,0,0,0,1140,1141,1,0,0,0,1141,99,1,0,0,0,1142,1143,
        5,122,0,0,1143,1144,5,180,0,0,1144,1146,5,102,0,0,1145,1147,5,180,
        0,0,1146,1145,1,0,0,0,1146,1147,1,0,0,0,1147,1148,1,0,0,0,1148,1150,
        5,2,0,0,1149,1151,5,180,0,0,1150,1149,1,0,0,0,1150,1151,1,0,0,0,
        1151,1152,1,0,0,0,1152,1154,3,330,165,0,1153,1155,5,180,0,0,1154,
        1153,1,0,0,0,1154,1155,1,0,0,0,1155,1156,1,0,0,0,1156,1157,5,3,0,
        0,1157,101,1,0,0,0,1158,1159,6,51,-1,0,1159,1247,3,338,169,0,1160,
        1162,5,144,0,0,1161,1163,5,180,0,0,1162,1161,1,0,0,0,1162,1163,1,
        0,0,0,1163,1164,1,0,0,0,1164,1166,5,2,0,0,1165,1167,5,180,0,0,1166,
        1165,1,0,0,0,1166,1167,1,0,0,0,1167,1168,1,0,0,0,1168,1170,3,92,
        46,0,1169,1171,5,180,0,0,1170,1169,1,0,0,0,1170,1171,1,0,0,0,1171,
        1172,1,0,0,0,1172,1173,5,3,0,0,1173,1247,1,0,0,0,1174,1176,5,136,
        0,0,1175,1177,5,180,0,0,1176,1175,1,0,0,0,1176,1177,1,0,0,0,1177,
        1178,1,0,0,0,1178,1180,5,2,0,0,1179,1181,5,180,0,0,1180,1179,1,0,
        0,0,1180,1181,1,0,0,0,1181,1182,1,0,0,0,1182,1184,3,92,46,0,1183,
        1185,5,180,0,0,1184,1183,1,0,0,0,1184,1185,1,0,0,0,1185,1186,1,0,
        0,0,1186,1187,5,3,0,0,1187,1247,1,0,0,0,1188,1190,3,338,169,0,1189,
        1191,5,180,0,0,1190,1189,1,0,0,0,1190,1191,1,0,0,0,1191,1192,1,0,
        0,0,1192,1194,5,2,0,0,1193,1195,5,180,0,0,1194,1193,1,0,0,0,1194,
        1195,1,0,0,0,1195,1196,1,0,0,0,1196,1198,3,92,46,0,1197,1199,5,180,
        0,0,1198,1197,1,0,0,0,1198,1199,1,0,0,0,1199,1200,1,0,0,0,1200,1201,
        5,3,0,0,1201,1247,1,0,0,0,1202,1204,3,338,169,0,1203,1205,5,180,
        0,0,1204,1203,1,0,0,0,1204,1205,1,0,0,0,1205,1206,1,0,0,0,1206,1208,
        5,2,0,0,1207,1209,5,180,0,0,1208,1207,1,0,0,0,1208,1209,1,0,0,0,
        1209,1210,1,0,0,0,1210,1212,3,102,51,0,1211,1213,5,180,0,0,1212,
        1211,1,0,0,0,1212,1213,1,0,0,0,1213,1214,1,0,0,0,1214,1216,5,4,0,
        0,1215,1217,5,180,0,0,1216,1215,1,0,0,0,1216,1217,1,0,0,0,1217,1218,
        1,0,0,0,1218,1220,3,102,51,0,1219,1221,5,180,0,0,1220,1219,1,0,0,
        0,1220,1221,1,0,0,0,1221,1222,1,0,0,0,1222,1223,5,3,0,0,1223,1247,
        1,0,0,0,1224,1226,5,158,0,0,1225,1227,5,180,0,0,1226,1225,1,0,0,
        0,1226,1227,1,0,0,0,1227,1228,1,0,0,0,1228,1230,5,2,0,0,1229,1231,
        5,180,0,0,1230,1229,1,0,0,0,1230,1231,1,0,0,0,1231,1232,1,0,0,0,
        1232,1234,3,332,166,0,1233,1235,5,180,0,0,1234,1233,1,0,0,0,1234,
        1235,1,0,0,0,1235,1236,1,0,0,0,1236,1238,5,4,0,0,1237,1239,5,180,
        0,0,1238,1237,1,0,0,0,1238,1239,1,0,0,0,1239,1240,1,0,0,0,1240,1242,
        3,332,166,0,1241,1243,5,180,0,0,1242,1241,1,0,0,0,1242,1243,1,0,
        0,0,1243,1244,1,0,0,0,1244,1245,5,3,0,0,1245,1247,1,0,0,0,1246,1158,
        1,0,0,0,1246,1160,1,0,0,0,1246,1174,1,0,0,0,1246,1188,1,0,0,0,1246,
        1202,1,0,0,0,1246,1224,1,0,0,0,1247,1252,1,0,0,0,1248,1249,10,6,
        0,0,1249,1251,3,104,52,0,1250,1248,1,0,0,0,1251,1254,1,0,0,0,1252,
        1250,1,0,0,0,1252,1253,1,0,0,0,1253,103,1,0,0,0,1254,1252,1,0,0,
        0,1255,1259,3,106,53,0,1256,1258,3,106,53,0,1257,1256,1,0,0,0,1258,
        1261,1,0,0,0,1259,1257,1,0,0,0,1259,1260,1,0,0,0,1260,105,1,0,0,
        0,1261,1259,1,0,0,0,1262,1264,5,7,0,0,1263,1265,3,332,166,0,1264,
        1263,1,0,0,0,1264,1265,1,0,0,0,1265,1266,1,0,0,0,1266,1267,5,8,0,
        0,1267,107,1,0,0,0,1268,1271,3,110,55,0,1269,1271,3,112,56,0,1270,
        1268,1,0,0,0,1270,1269,1,0,0,0,1271,109,1,0,0,0,1272,1275,5,84,0,
        0,1273,1274,5,180,0,0,1274,1276,5,105,0,0,1275,1273,1,0,0,0,1275,
        1276,1,0,0,0,1276,111,1,0,0,0,1277,1278,5,123,0,0,1278,113,1,0,0,
        0,1279,1280,5,56,0,0,1280,1281,5,180,0,0,1281,1293,5,141,0,0,1282,
        1283,5,56,0,0,1283,1284,5,180,0,0,1284,1285,5,141,0,0,1285,1286,
        5,180,0,0,1286,1287,5,125,0,0,1287,1288,5,180,0,0,1288,1293,5,118,
        0,0,1289,1293,5,64,0,0,1290,1293,5,129,0,0,1291,1293,5,61,0,0,1292,
        1279,1,0,0,0,1292,1282,1,0,0,0,1292,1289,1,0,0,0,1292,1290,1,0,0,
        0,1292,1291,1,0,0,0,1293,115,1,0,0,0,1294,1299,3,118,59,0,1295,1299,
        3,120,60,0,1296,1299,3,122,61,0,1297,1299,3,124,62,0,1298,1294,1,
        0,0,0,1298,1295,1,0,0,0,1298,1296,1,0,0,0,1298,1297,1,0,0,0,1299,
        117,1,0,0,0,1300,1301,5,104,0,0,1301,1304,5,180,0,0,1302,1303,5,
        86,0,0,1303,1305,5,180,0,0,1304,1302,1,0,0,0,1304,1305,1,0,0,0,1305,
        1308,1,0,0,0,1306,1309,5,165,0,0,1307,1309,3,322,161,0,1308,1306,
        1,0,0,0,1308,1307,1,0,0,0,1309,119,1,0,0,0,1310,1311,5,89,0,0,1311,
        1313,5,180,0,0,1312,1310,1,0,0,0,1312,1313,1,0,0,0,1313,1314,1,0,
        0,0,1314,1315,5,99,0,0,1315,1316,5,180,0,0,1316,1321,3,322,161,0,
        1317,1318,5,180,0,0,1318,1319,5,88,0,0,1319,1320,5,180,0,0,1320,
        1322,5,165,0,0,1321,1317,1,0,0,0,1321,1322,1,0,0,0,1322,121,1,0,
        0,0,1323,1324,5,146,0,0,1324,1325,5,180,0,0,1325,1326,3,322,161,
        0,1326,123,1,0,0,0,1327,1328,5,147,0,0,1328,1329,5,180,0,0,1329,
        1330,3,322,161,0,1330,125,1,0,0,0,1331,1332,3,128,64,0,1332,127,
        1,0,0,0,1333,1340,3,132,66,0,1334,1336,5,180,0,0,1335,1334,1,0,0,
        0,1335,1336,1,0,0,0,1336,1337,1,0,0,0,1337,1339,3,130,65,0,1338,
        1335,1,0,0,0,1339,1342,1,0,0,0,1340,1338,1,0,0,0,1340,1341,1,0,0,
        0,1341,1355,1,0,0,0,1342,1340,1,0,0,0,1343,1345,3,174,87,0,1344,
        1346,5,180,0,0,1345,1344,1,0,0,0,1345,1346,1,0,0,0,1346,1348,1,0,
        0,0,1347,1343,1,0,0,0,1348,1349,1,0,0,0,1349,1347,1,0,0,0,1349,1350,
        1,0,0,0,1350,1351,1,0,0,0,1351,1352,3,132,66,0,1352,1353,6,64,-1,
        0,1353,1355,1,0,0,0,1354,1333,1,0,0,0,1354,1347,1,0,0,0,1355,129,
        1,0,0,0,1356,1357,5,144,0,0,1357,1358,5,180,0,0,1358,1360,5,49,0,
        0,1359,1361,5,180,0,0,1360,1359,1,0,0,0,1360,1361,1,0,0,0,1361,1362,
        1,0,0,0,1362,1369,3,132,66,0,1363,1365,5,144,0,0,1364,1366,5,180,
        0,0,1365,1364,1,0,0,0,1365,1366,1,0,0,0,1366,1367,1,0,0,0,1367,1369,
        3,132,66,0,1368,1356,1,0,0,0,1368,1363,1,0,0,0,1369,131,1,0,0,0,
        1370,1373,3,134,67,0,1371,1373,3,136,68,0,1372,1370,1,0,0,0,1372,
        1371,1,0,0,0,1373,133,1,0,0,0,1374,1376,3,142,71,0,1375,1377,5,180,
        0,0,1376,1375,1,0,0,0,1376,1377,1,0,0,0,1377,1379,1,0,0,0,1378,1374,
        1,0,0,0,1379,1382,1,0,0,0,1380,1378,1,0,0,0,1380,1381,1,0,0,0,1381,
        1383,1,0,0,0,1382,1380,1,0,0,0,1383,1410,3,174,87,0,1384,1386,3,
        142,71,0,1385,1387,5,180,0,0,1386,1385,1,0,0,0,1386,1387,1,0,0,0,
        1387,1389,1,0,0,0,1388,1384,1,0,0,0,1389,1392,1,0,0,0,1390,1388,
        1,0,0,0,1390,1391,1,0,0,0,1391,1393,1,0,0,0,1392,1390,1,0,0,0,1393,
        1400,3,140,70,0,1394,1396,5,180,0,0,1395,1394,1,0,0,0,1395,1396,
        1,0,0,0,1396,1397,1,0,0,0,1397,1399,3,140,70,0,1398,1395,1,0,0,0,
        1399,1402,1,0,0,0,1400,1398,1,0,0,0,1400,1401,1,0,0,0,1401,1407,
        1,0,0,0,1402,1400,1,0,0,0,1403,1405,5,180,0,0,1404,1403,1,0,0,0,
        1404,1405,1,0,0,0,1405,1406,1,0,0,0,1406,1408,3,174,87,0,1407,1404,
        1,0,0,0,1407,1408,1,0,0,0,1408,1410,1,0,0,0,1409,1380,1,0,0,0,1409,
        1390,1,0,0,0,1410,135,1,0,0,0,1411,1413,3,138,69,0,1412,1414,5,180,
        0,0,1413,1412,1,0,0,0,1413,1414,1,0,0,0,1414,1416,1,0,0,0,1415,1411,
        1,0,0,0,1416,1417,1,0,0,0,1417,1415,1,0,0,0,1417,1418,1,0,0,0,1418,
        1419,1,0,0,0,1419,1420,3,134,67,0,1420,137,1,0,0,0,1421,1423,3,142,
        71,0,1422,1424,5,180,0,0,1423,1422,1,0,0,0,1423,1424,1,0,0,0,1424,
        1426,1,0,0,0,1425,1421,1,0,0,0,1426,1429,1,0,0,0,1427,1425,1,0,0,
        0,1427,1428,1,0,0,0,1428,1436,1,0,0,0,1429,1427,1,0,0,0,1430,1432,
        3,140,70,0,1431,1433,5,180,0,0,1432,1431,1,0,0,0,1432,1433,1,0,0,
        0,1433,1435,1,0,0,0,1434,1430,1,0,0,0,1435,1438,1,0,0,0,1436,1434,
        1,0,0,0,1436,1437,1,0,0,0,1437,1439,1,0,0,0,1438,1436,1,0,0,0,1439,
        1440,3,172,86,0,1440,139,1,0,0,0,1441,1446,3,160,80,0,1442,1446,
        3,162,81,0,1443,1446,3,166,83,0,1444,1446,3,170,85,0,1445,1441,1,
        0,0,0,1445,1442,1,0,0,0,1445,1443,1,0,0,0,1445,1444,1,0,0,0,1446,
        141,1,0,0,0,1447,1452,3,152,76,0,1448,1452,3,158,79,0,1449,1452,
        3,150,75,0,1450,1452,3,144,72,0,1451,1447,1,0,0,0,1451,1448,1,0,
        0,0,1451,1449,1,0,0,0,1451,1450,1,0,0,0,1452,143,1,0,0,0,1453,1471,
        5,104,0,0,1454,1455,5,180,0,0,1455,1456,5,151,0,0,1456,1457,5,180,
        0,0,1457,1459,5,93,0,0,1458,1460,5,180,0,0,1459,1458,1,0,0,0,1459,
        1460,1,0,0,0,1460,1461,1,0,0,0,1461,1463,5,2,0,0,1462,1464,5,180,
        0,0,1463,1462,1,0,0,0,1463,1464,1,0,0,0,1464,1465,1,0,0,0,1465,1467,
        3,92,46,0,1466,1468,5,180,0,0,1467,1466,1,0,0,0,1467,1468,1,0,0,
        0,1468,1469,1,0,0,0,1469,1470,5,3,0,0,1470,1472,1,0,0,0,1471,1454,
        1,0,0,0,1471,1472,1,0,0,0,1472,1473,1,0,0,0,1473,1474,5,180,0,0,
        1474,1475,5,88,0,0,1475,1476,5,180,0,0,1476,1490,3,10,5,0,1477,1479,
        5,180,0,0,1478,1477,1,0,0,0,1478,1479,1,0,0,0,1479,1480,1,0,0,0,
        1480,1482,5,2,0,0,1481,1483,5,180,0,0,1482,1481,1,0,0,0,1482,1483,
        1,0,0,0,1483,1484,1,0,0,0,1484,1486,3,24,12,0,1485,1487,5,180,0,
        0,1486,1485,1,0,0,0,1486,1487,1,0,0,0,1487,1488,1,0,0,0,1488,1489,
        5,3,0,0,1489,1491,1,0,0,0,1490,1478,1,0,0,0,1490,1491,1,0,0,0,1491,
        1496,1,0,0,0,1492,1494,5,180,0,0,1493,1492,1,0,0,0,1493,1494,1,0,
        0,0,1494,1495,1,0,0,0,1495,1497,3,190,95,0,1496,1493,1,0,0,0,1496,
        1497,1,0,0,0,1497,145,1,0,0,0,1498,1499,3,322,161,0,1499,1500,5,
        180,0,0,1500,1501,5,52,0,0,1501,1502,5,180,0,0,1502,1504,1,0,0,0,
        1503,1498,1,0,0,0,1503,1504,1,0,0,0,1504,1505,1,0,0,0,1505,1506,
        3,322,161,0,1506,147,1,0,0,0,1507,1518,3,146,73,0,1508,1510,5,180,
        0,0,1509,1508,1,0,0,0,1509,1510,1,0,0,0,1510,1511,1,0,0,0,1511,1513,
        5,4,0,0,1512,1514,5,180,0,0,1513,1512,1,0,0,0,1513,1514,1,0,0,0,
        1514,1515,1,0,0,0,1515,1517,3,146,73,0,1516,1509,1,0,0,0,1517,1520,
        1,0,0,0,1518,1516,1,0,0,0,1518,1519,1,0,0,0,1519,149,1,0,0,0,1520,
        1518,1,0,0,0,1521,1522,5,58,0,0,1522,1523,5,180,0,0,1523,1528,3,
        302,151,0,1524,1526,5,180,0,0,1525,1524,1,0,0,0,1525,1526,1,0,0,
        0,1526,1527,1,0,0,0,1527,1529,3,190,95,0,1528,1525,1,0,0,0,1528,
        1529,1,0,0,0,1529,1536,1,0,0,0,1530,1532,5,180,0,0,1531,1530,1,0,
        0,0,1531,1532,1,0,0,0,1532,1533,1,0,0,0,1533,1534,5,156,0,0,1534,
        1535,5,180,0,0,1535,1537,3,148,74,0,1536,1531,1,0,0,0,1536,1537,
        1,0,0,0,1537,151,1,0,0,0,1538,1539,5,119,0,0,1539,1541,5,180,0,0,
        1540,1538,1,0,0,0,1540,1541,1,0,0,0,1541,1542,1,0,0,0,1542,1544,
        5,107,0,0,1543,1545,5,180,0,0,1544,1543,1,0,0,0,1544,1545,1,0,0,
        0,1545,1546,1,0,0,0,1546,1549,3,192,96,0,1547,1548,5,180,0,0,1548,
        1550,3,190,95,0,1549,1547,1,0,0,0,1549,1550,1,0,0,0,1550,1553,1,
        0,0,0,1551,1552,5,180,0,0,1552,1554,3,154,77,0,1553,1551,1,0,0,0,
        1553,1554,1,0,0,0,1554,153,1,0,0,0,1555,1556,5,94,0,0,1556,1557,
        5,180,0,0,1557,1558,3,156,78,0,1558,155,1,0,0,0,1559,1560,6,78,-1,
        0,1560,1562,5,2,0,0,1561,1563,5,180,0,0,1562,1561,1,0,0,0,1562,1563,
        1,0,0,0,1563,1564,1,0,0,0,1564,1566,3,156,78,0,1565,1567,5,180,0,
        0,1566,1565,1,0,0,0,1566,1567,1,0,0,0,1567,1568,1,0,0,0,1568,1569,
        5,3,0,0,1569,1572,1,0,0,0,1570,1572,3,336,168,0,1571,1559,1,0,0,
        0,1571,1570,1,0,0,0,1572,1589,1,0,0,0,1573,1574,10,4,0,0,1574,1575,
        5,180,0,0,1575,1576,5,101,0,0,1576,1577,5,180,0,0,1577,1588,3,156,
        78,5,1578,1583,10,3,0,0,1579,1580,5,180,0,0,1580,1581,5,111,0,0,
        1581,1582,5,180,0,0,1582,1584,3,336,168,0,1583,1579,1,0,0,0,1584,
        1585,1,0,0,0,1585,1583,1,0,0,0,1585,1586,1,0,0,0,1586,1588,1,0,0,
        0,1587,1573,1,0,0,0,1587,1578,1,0,0,0,1588,1591,1,0,0,0,1589,1587,
        1,0,0,0,1589,1590,1,0,0,0,1590,157,1,0,0,0,1591,1589,1,0,0,0,1592,
        1594,5,145,0,0,1593,1595,5,180,0,0,1594,1593,1,0,0,0,1594,1595,1,
        0,0,0,1595,1596,1,0,0,0,1596,1597,3,234,117,0,1597,1598,5,180,0,
        0,1598,1599,5,52,0,0,1599,1600,5,180,0,0,1600,1601,3,322,161,0,1601,
        159,1,0,0,0,1602,1604,5,69,0,0,1603,1605,5,180,0,0,1604,1603,1,0,
        0,0,1604,1605,1,0,0,0,1605,1606,1,0,0,0,1606,1607,3,192,96,0,1607,
        161,1,0,0,0,1608,1610,5,109,0,0,1609,1611,5,180,0,0,1610,1609,1,
        0,0,0,1610,1611,1,0,0,0,1611,1612,1,0,0,0,1612,1617,3,192,96,0,1613,
        1614,5,180,0,0,1614,1616,3,164,82,0,1615,1613,1,0,0,0,1616,1619,
        1,0,0,0,1617,1615,1,0,0,0,1617,1618,1,0,0,0,1618,163,1,0,0,0,1619,
        1617,1,0,0,0,1620,1621,5,117,0,0,1621,1622,5,180,0,0,1622,1623,5,
        107,0,0,1623,1624,5,180,0,0,1624,1631,3,166,83,0,1625,1626,5,117,
        0,0,1626,1627,5,180,0,0,1627,1628,5,69,0,0,1628,1629,5,180,0,0,1629,
        1631,3,166,83,0,1630,1620,1,0,0,0,1630,1625,1,0,0,0,1631,165,1,0,
        0,0,1632,1634,5,132,0,0,1633,1635,5,180,0,0,1634,1633,1,0,0,0,1634,
        1635,1,0,0,0,1635,1636,1,0,0,0,1636,1647,3,168,84,0,1637,1639,5,
        180,0,0,1638,1637,1,0,0,0,1638,1639,1,0,0,0,1639,1640,1,0,0,0,1640,
        1642,5,4,0,0,1641,1643,5,180,0,0,1642,1641,1,0,0,0,1642,1643,1,0,
        0,0,1643,1644,1,0,0,0,1644,1646,3,168,84,0,1645,1638,1,0,0,0,1646,
        1649,1,0,0,0,1647,1645,1,0,0,0,1647,1648,1,0,0,0,1648,167,1,0,0,
        0,1649,1647,1,0,0,0,1650,1652,3,328,164,0,1651,1653,5,180,0,0,1652,
        1651,1,0,0,0,1652,1653,1,0,0,0,1653,1654,1,0,0,0,1654,1656,5,6,0,
        0,1655,1657,5,180,0,0,1656,1655,1,0,0,0,1656,1657,1,0,0,0,1657,1658,
        1,0,0,0,1658,1659,3,234,117,0,1659,169,1,0,0,0,1660,1661,5,77,0,
        0,1661,1663,5,180,0,0,1662,1660,1,0,0,0,1662,1663,1,0,0,0,1663,1664,
        1,0,0,0,1664,1666,5,74,0,0,1665,1667,5,180,0,0,1666,1665,1,0,0,0,
        1666,1667,1,0,0,0,1667,1668,1,0,0,0,1668,1679,3,234,117,0,1669,1671,
        5,180,0,0,1670,1669,1,0,0,0,1670,1671,1,0,0,0,1671,1672,1,0,0,0,
        1672,1674,5,4,0,0,1673,1675,5,180,0,0,1674,1673,1,0,0,0,1674,1675,
        1,0,0,0,1675,1676,1,0,0,0,1676,1678,3,234,117,0,1677,1670,1,0,0,
        0,1678,1681,1,0,0,0,1679,1677,1,0,0,0,1679,1680,1,0,0,0,1680,171,
        1,0,0,0,1681,1679,1,0,0,0,1682,1683,5,151,0,0,1683,1688,3,176,88,
        0,1684,1686,5,180,0,0,1685,1684,1,0,0,0,1685,1686,1,0,0,0,1686,1687,
        1,0,0,0,1687,1689,3,190,95,0,1688,1685,1,0,0,0,1688,1689,1,0,0,0,
        1689,173,1,0,0,0,1690,1691,5,128,0,0,1691,1692,3,176,88,0,1692,175,
        1,0,0,0,1693,1695,5,180,0,0,1694,1693,1,0,0,0,1694,1695,1,0,0,0,
        1695,1696,1,0,0,0,1696,1698,5,78,0,0,1697,1694,1,0,0,0,1697,1698,
        1,0,0,0,1698,1699,1,0,0,0,1699,1700,5,180,0,0,1700,1703,3,178,89,
        0,1701,1702,5,180,0,0,1702,1704,3,182,91,0,1703,1701,1,0,0,0,1703,
        1704,1,0,0,0,1704,1707,1,0,0,0,1705,1706,5,180,0,0,1706,1708,3,184,
        92,0,1707,1705,1,0,0,0,1707,1708,1,0,0,0,1708,1711,1,0,0,0,1709,
        1710,5,180,0,0,1710,1712,3,186,93,0,1711,1709,1,0,0,0,1711,1712,
        1,0,0,0,1712,177,1,0,0,0,1713,1724,5,159,0,0,1714,1716,5,180,0,0,
        1715,1714,1,0,0,0,1715,1716,1,0,0,0,1716,1717,1,0,0,0,1717,1719,
        5,4,0,0,1718,1720,5,180,0,0,1719,1718,1,0,0,0,1719,1720,1,0,0,0,
        1720,1721,1,0,0,0,1721,1723,3,180,90,0,1722,1715,1,0,0,0,1723,1726,
        1,0,0,0,1724,1722,1,0,0,0,1724,1725,1,0,0,0,1725,1742,1,0,0,0,1726,
        1724,1,0,0,0,1727,1738,3,180,90,0,1728,1730,5,180,0,0,1729,1728,
        1,0,0,0,1729,1730,1,0,0,0,1730,1731,1,0,0,0,1731,1733,5,4,0,0,1732,
        1734,5,180,0,0,1733,1732,1,0,0,0,1733,1734,1,0,0,0,1734,1735,1,0,
        0,0,1735,1737,3,180,90,0,1736,1729,1,0,0,0,1737,1740,1,0,0,0,1738,
        1736,1,0,0,0,1738,1739,1,0,0,0,1739,1742,1,0,0,0,1740,1738,1,0,0,
        0,1741,1713,1,0,0,0,1741,1727,1,0,0,0,1742,179,1,0,0,0,1743,1744,
        3,234,117,0,1744,1745,5,180,0,0,1745,1746,5,52,0,0,1746,1747,5,180,
        0,0,1747,1748,3,322,161,0,1748,1751,1,0,0,0,1749,1751,3,234,117,
        0,1750,1743,1,0,0,0,1750,1749,1,0,0,0,1751,181,1,0,0,0,1752,1753,
        5,121,0,0,1753,1754,5,180,0,0,1754,1755,5,57,0,0,1755,1756,5,180,
        0,0,1756,1764,3,188,94,0,1757,1759,5,4,0,0,1758,1760,5,180,0,0,1759,
        1758,1,0,0,0,1759,1760,1,0,0,0,1760,1761,1,0,0,0,1761,1763,3,188,
        94,0,1762,1757,1,0,0,0,1763,1766,1,0,0,0,1764,1762,1,0,0,0,1764,
        1765,1,0,0,0,1765,183,1,0,0,0,1766,1764,1,0,0,0,1767,1768,5,160,
        0,0,1768,1769,5,180,0,0,1769,1770,3,234,117,0,1770,185,1,0,0,0,1771,
        1772,5,103,0,0,1772,1773,5,180,0,0,1773,1774,3,234,117,0,1774,187,
        1,0,0,0,1775,1780,3,234,117,0,1776,1778,5,180,0,0,1777,1776,1,0,
        0,0,1777,1778,1,0,0,0,1778,1779,1,0,0,0,1779,1781,7,1,0,0,1780,1777,
        1,0,0,0,1780,1781,1,0,0,0,1781,189,1,0,0,0,1782,1783,5,150,0,0,1783,
        1784,5,180,0,0,1784,1785,3,234,117,0,1785,191,1,0,0,0,1786,1797,
        3,194,97,0,1787,1789,5,180,0,0,1788,1787,1,0,0,0,1788,1789,1,0,0,
        0,1789,1790,1,0,0,0,1790,1792,5,4,0,0,1791,1793,5,180,0,0,1792,1791,
        1,0,0,0,1792,1793,1,0,0,0,1793,1794,1,0,0,0,1794,1796,3,194,97,0,
        1795,1788,1,0,0,0,1796,1799,1,0,0,0,1797,1795,1,0,0,0,1797,1798,
        1,0,0,0,1798,193,1,0,0,0,1799,1797,1,0,0,0,1800,1802,3,322,161,0,
        1801,1803,5,180,0,0,1802,1801,1,0,0,0,1802,1803,1,0,0,0,1803,1804,
        1,0,0,0,1804,1806,5,6,0,0,1805,1807,5,180,0,0,1806,1805,1,0,0,0,
        1806,1807,1,0,0,0,1807,1808,1,0,0,0,1808,1809,3,196,98,0,1809,1812,
        1,0,0,0,1810,1812,3,196,98,0,1811,1800,1,0,0,0,1811,1810,1,0,0,0,
        1812,195,1,0,0,0,1813,1814,3,198,99,0,1814,197,1,0,0,0,1815,1822,
        3,200,100,0,1816,1818,5,180,0,0,1817,1816,1,0,0,0,1817,1818,1,0,
        0,0,1818,1819,1,0,0,0,1819,1821,3,202,101,0,1820,1817,1,0,0,0,1821,
        1824,1,0,0,0,1822,1820,1,0,0,0,1822,1823,1,0,0,0,1823,1830,1,0,0,
        0,1824,1822,1,0,0,0,1825,1826,5,2,0,0,1826,1827,3,198,99,0,1827,
        1828,5,3,0,0,1828,1830,1,0,0,0,1829,1815,1,0,0,0,1829,1825,1,0,0,
        0,1830,199,1,0,0,0,1831,1833,5,2,0,0,1832,1834,5,180,0,0,1833,1832,
        1,0,0,0,1833,1834,1,0,0,0,1834,1839,1,0,0,0,1835,1837,3,322,161,
        0,1836,1838,5,180,0,0,1837,1836,1,0,0,0,1837,1838,1,0,0,0,1838,1840,
        1,0,0,0,1839,1835,1,0,0,0,1839,1840,1,0,0,0,1840,1845,1,0,0,0,1841,
        1843,3,212,106,0,1842,1844,5,180,0,0,1843,1842,1,0,0,0,1843,1844,
        1,0,0,0,1844,1846,1,0,0,0,1845,1841,1,0,0,0,1845,1846,1,0,0,0,1846,
        1851,1,0,0,0,1847,1849,3,208,104,0,1848,1850,5,180,0,0,1849,1848,
        1,0,0,0,1849,1850,1,0,0,0,1850,1852,1,0,0,0,1851,1847,1,0,0,0,1851,
        1852,1,0,0,0,1852,1853,1,0,0,0,1853,1854,5,3,0,0,1854,201,1,0,0,
        0,1855,1857,3,204,102,0,1856,1858,5,180,0,0,1857,1856,1,0,0,0,1857,
        1858,1,0,0,0,1858,1859,1,0,0,0,1859,1860,3,200,100,0,1860,203,1,
        0,0,0,1861,1863,3,342,171,0,1862,1864,5,180,0,0,1863,1862,1,0,0,
        0,1863,1864,1,0,0,0,1864,1865,1,0,0,0,1865,1867,3,346,173,0,1866,
        1868,5,180,0,0,1867,1866,1,0,0,0,1867,1868,1,0,0,0,1868,1870,1,0,
        0,0,1869,1871,3,206,103,0,1870,1869,1,0,0,0,1870,1871,1,0,0,0,1871,
        1873,1,0,0,0,1872,1874,5,180,0,0,1873,1872,1,0,0,0,1873,1874,1,0,
        0,0,1874,1875,1,0,0,0,1875,1876,3,346,173,0,1876,1906,1,0,0,0,1877,
        1879,3,346,173,0,1878,1880,5,180,0,0,1879,1878,1,0,0,0,1879,1880,
        1,0,0,0,1880,1882,1,0,0,0,1881,1883,3,206,103,0,1882,1881,1,0,0,
        0,1882,1883,1,0,0,0,1883,1885,1,0,0,0,1884,1886,5,180,0,0,1885,1884,
        1,0,0,0,1885,1886,1,0,0,0,1886,1887,1,0,0,0,1887,1889,3,346,173,
        0,1888,1890,5,180,0,0,1889,1888,1,0,0,0,1889,1890,1,0,0,0,1890,1891,
        1,0,0,0,1891,1892,3,344,172,0,1892,1906,1,0,0,0,1893,1895,3,346,
        173,0,1894,1896,5,180,0,0,1895,1894,1,0,0,0,1895,1896,1,0,0,0,1896,
        1898,1,0,0,0,1897,1899,3,206,103,0,1898,1897,1,0,0,0,1898,1899,1,
        0,0,0,1899,1901,1,0,0,0,1900,1902,5,180,0,0,1901,1900,1,0,0,0,1901,
        1902,1,0,0,0,1902,1903,1,0,0,0,1903,1904,3,346,173,0,1904,1906,1,
        0,0,0,1905,1861,1,0,0,0,1905,1877,1,0,0,0,1905,1893,1,0,0,0,1906,
        205,1,0,0,0,1907,1909,5,7,0,0,1908,1910,5,180,0,0,1909,1908,1,0,
        0,0,1909,1910,1,0,0,0,1910,1915,1,0,0,0,1911,1913,3,322,161,0,1912,
        1914,5,180,0,0,1913,1912,1,0,0,0,1913,1914,1,0,0,0,1914,1916,1,0,
        0,0,1915,1911,1,0,0,0,1915,1916,1,0,0,0,1916,1921,1,0,0,0,1917,1919,
        3,210,105,0,1918,1920,5,180,0,0,1919,1918,1,0,0,0,1919,1920,1,0,
        0,0,1920,1922,1,0,0,0,1921,1917,1,0,0,0,1921,1922,1,0,0,0,1922,1927,
        1,0,0,0,1923,1925,3,216,108,0,1924,1926,5,180,0,0,1925,1924,1,0,
        0,0,1925,1926,1,0,0,0,1926,1928,1,0,0,0,1927,1923,1,0,0,0,1927,1928,
        1,0,0,0,1928,1933,1,0,0,0,1929,1931,3,208,104,0,1930,1932,5,180,
        0,0,1931,1930,1,0,0,0,1931,1932,1,0,0,0,1932,1934,1,0,0,0,1933,1929,
        1,0,0,0,1933,1934,1,0,0,0,1934,1935,1,0,0,0,1935,1936,5,8,0,0,1936,
        207,1,0,0,0,1937,1939,5,9,0,0,1938,1940,5,180,0,0,1939,1938,1,0,
        0,0,1939,1940,1,0,0,0,1940,1974,1,0,0,0,1941,1943,3,330,165,0,1942,
        1944,5,180,0,0,1943,1942,1,0,0,0,1943,1944,1,0,0,0,1944,1945,1,0,
        0,0,1945,1947,5,162,0,0,1946,1948,5,180,0,0,1947,1946,1,0,0,0,1947,
        1948,1,0,0,0,1948,1949,1,0,0,0,1949,1951,3,234,117,0,1950,1952,5,
        180,0,0,1951,1950,1,0,0,0,1951,1952,1,0,0,0,1952,1971,1,0,0,0,1953,
        1955,5,4,0,0,1954,1956,5,180,0,0,1955,1954,1,0,0,0,1955,1956,1,0,
        0,0,1956,1957,1,0,0,0,1957,1959,3,330,165,0,1958,1960,5,180,0,0,
        1959,1958,1,0,0,0,1959,1960,1,0,0,0,1960,1961,1,0,0,0,1961,1963,
        5,162,0,0,1962,1964,5,180,0,0,1963,1962,1,0,0,0,1963,1964,1,0,0,
        0,1964,1965,1,0,0,0,1965,1967,3,234,117,0,1966,1968,5,180,0,0,1967,
        1966,1,0,0,0,1967,1968,1,0,0,0,1968,1970,1,0,0,0,1969,1953,1,0,0,
        0,1970,1973,1,0,0,0,1971,1969,1,0,0,0,1971,1972,1,0,0,0,1972,1975,
        1,0,0,0,1973,1971,1,0,0,0,1974,1941,1,0,0,0,1974,1975,1,0,0,0,1975,
        1976,1,0,0,0,1976,1977,5,10,0,0,1977,209,1,0,0,0,1978,1980,5,162,
        0,0,1979,1981,5,180,0,0,1980,1979,1,0,0,0,1980,1981,1,0,0,0,1981,
        1982,1,0,0,0,1982,1996,3,232,116,0,1983,1985,5,180,0,0,1984,1983,
        1,0,0,0,1984,1985,1,0,0,0,1985,1986,1,0,0,0,1986,1988,5,11,0,0,1987,
        1989,5,162,0,0,1988,1987,1,0,0,0,1988,1989,1,0,0,0,1989,1991,1,0,
        0,0,1990,1992,5,180,0,0,1991,1990,1,0,0,0,1991,1992,1,0,0,0,1992,
        1993,1,0,0,0,1993,1995,3,232,116,0,1994,1984,1,0,0,0,1995,1998,1,
        0,0,0,1996,1994,1,0,0,0,1996,1997,1,0,0,0,1997,211,1,0,0,0,1998,
        1996,1,0,0,0,1999,2006,3,214,107,0,2000,2002,5,180,0,0,2001,2000,
        1,0,0,0,2001,2002,1,0,0,0,2002,2003,1,0,0,0,2003,2005,3,214,107,
        0,2004,2001,1,0,0,0,2005,2008,1,0,0,0,2006,2004,1,0,0,0,2006,2007,
        1,0,0,0,2007,213,1,0,0,0,2008,2006,1,0,0,0,2009,2011,5,162,0,0,2010,
        2012,5,180,0,0,2011,2010,1,0,0,0,2011,2012,1,0,0,0,2012,2013,1,0,
        0,0,2013,2014,3,230,115,0,2014,215,1,0,0,0,2015,2020,5,159,0,0,2016,
        2018,5,180,0,0,2017,2016,1,0,0,0,2017,2018,1,0,0,0,2018,2019,1,0,
        0,0,2019,2021,3,218,109,0,2020,2017,1,0,0,0,2020,2021,1,0,0,0,2021,
        2026,1,0,0,0,2022,2024,5,180,0,0,2023,2022,1,0,0,0,2023,2024,1,0,
        0,0,2024,2025,1,0,0,0,2025,2027,3,220,110,0,2026,2023,1,0,0,0,2026,
        2027,1,0,0,0,2027,2032,1,0,0,0,2028,2030,5,180,0,0,2029,2028,1,0,
        0,0,2029,2030,1,0,0,0,2030,2031,1,0,0,0,2031,2033,3,222,111,0,2032,
        2029,1,0,0,0,2032,2033,1,0,0,0,2033,217,1,0,0,0,2034,2035,5,49,0,
        0,2035,2037,5,180,0,0,2036,2034,1,0,0,0,2036,2037,1,0,0,0,2037,2038,
        1,0,0,0,2038,2040,5,153,0,0,2039,2041,5,180,0,0,2040,2039,1,0,0,
        0,2040,2041,1,0,0,0,2041,2042,1,0,0,0,2042,2044,5,2,0,0,2043,2045,
        5,180,0,0,2044,2043,1,0,0,0,2044,2045,1,0,0,0,2045,2046,1,0,0,0,
        2046,2048,3,330,165,0,2047,2049,5,180,0,0,2048,2047,1,0,0,0,2048,
        2049,1,0,0,0,2049,2050,1,0,0,0,2050,2051,5,3,0,0,2051,2059,1,0,0,
        0,2052,2059,5,133,0,0,2053,2054,5,49,0,0,2054,2055,5,180,0,0,2055,
        2059,5,133,0,0,2056,2059,5,140,0,0,2057,2059,5,46,0,0,2058,2036,
        1,0,0,0,2058,2052,1,0,0,0,2058,2053,1,0,0,0,2058,2056,1,0,0,0,2058,
        2057,1,0,0,0,2059,219,1,0,0,0,2060,2062,3,226,113,0,2061,2060,1,
        0,0,0,2061,2062,1,0,0,0,2062,2064,1,0,0,0,2063,2065,5,180,0,0,2064,
        2063,1,0,0,0,2064,2065,1,0,0,0,2065,2066,1,0,0,0,2066,2068,5,12,
        0,0,2067,2069,5,180,0,0,2068,2067,1,0,0,0,2068,2069,1,0,0,0,2069,
        2071,1,0,0,0,2070,2072,3,228,114,0,2071,2070,1,0,0,0,2071,2072,1,
        0,0,0,2072,2075,1,0,0,0,2073,2075,3,332,166,0,2074,2061,1,0,0,0,
        2074,2073,1,0,0,0,2075,221,1,0,0,0,2076,2078,5,2,0,0,2077,2079,5,
        180,0,0,2078,2077,1,0,0,0,2078,2079,1,0,0,0,2079,2080,1,0,0,0,2080,
        2082,3,322,161,0,2081,2083,5,180,0,0,2082,2081,1,0,0,0,2082,2083,
        1,0,0,0,2083,2084,1,0,0,0,2084,2086,5,4,0,0,2085,2087,5,180,0,0,
        2086,2085,1,0,0,0,2086,2087,1,0,0,0,2087,2088,1,0,0,0,2088,2100,
        3,322,161,0,2089,2091,5,180,0,0,2090,2089,1,0,0,0,2090,2091,1,0,
        0,0,2091,2092,1,0,0,0,2092,2094,5,11,0,0,2093,2095,5,180,0,0,2094,
        2093,1,0,0,0,2094,2095,1,0,0,0,2095,2096,1,0,0,0,2096,2098,3,190,
        95,0,2097,2099,5,180,0,0,2098,2097,1,0,0,0,2098,2099,1,0,0,0,2099,
        2101,1,0,0,0,2100,2090,1,0,0,0,2100,2101,1,0,0,0,2101,2121,1,0,0,
        0,2102,2104,5,180,0,0,2103,2102,1,0,0,0,2103,2104,1,0,0,0,2104,2105,
        1,0,0,0,2105,2107,5,11,0,0,2106,2108,5,180,0,0,2107,2106,1,0,0,0,
        2107,2108,1,0,0,0,2108,2109,1,0,0,0,2109,2111,3,224,112,0,2110,2112,
        5,180,0,0,2111,2110,1,0,0,0,2111,2112,1,0,0,0,2112,2113,1,0,0,0,
        2113,2115,5,4,0,0,2114,2116,5,180,0,0,2115,2114,1,0,0,0,2115,2116,
        1,0,0,0,2116,2117,1,0,0,0,2117,2119,3,224,112,0,2118,2120,5,180,
        0,0,2119,2118,1,0,0,0,2119,2120,1,0,0,0,2120,2122,1,0,0,0,2121,2103,
        1,0,0,0,2121,2122,1,0,0,0,2122,2123,1,0,0,0,2123,2124,5,3,0,0,2124,
        223,1,0,0,0,2125,2127,5,9,0,0,2126,2128,5,180,0,0,2127,2126,1,0,
        0,0,2127,2128,1,0,0,0,2128,2130,1,0,0,0,2129,2131,3,178,89,0,2130,
        2129,1,0,0,0,2130,2131,1,0,0,0,2131,2133,1,0,0,0,2132,2134,5,180,
        0,0,2133,2132,1,0,0,0,2133,2134,1,0,0,0,2134,2135,1,0,0,0,2135,2136,
        5,10,0,0,2136,225,1,0,0,0,2137,2138,5,167,0,0,2138,227,1,0,0,0,2139,
        2140,5,167,0,0,2140,229,1,0,0,0,2141,2142,3,336,168,0,2142,231,1,
        0,0,0,2143,2144,3,336,168,0,2144,233,1,0,0,0,2145,2146,3,236,118,
        0,2146,235,1,0,0,0,2147,2154,3,238,119,0,2148,2149,5,180,0,0,2149,
        2150,5,120,0,0,2150,2151,5,180,0,0,2151,2153,3,238,119,0,2152,2148,
        1,0,0,0,2153,2156,1,0,0,0,2154,2152,1,0,0,0,2154,2155,1,0,0,0,2155,
        237,1,0,0,0,2156,2154,1,0,0,0,2157,2164,3,240,120,0,2158,2159,5,
        180,0,0,2159,2160,5,154,0,0,2160,2161,5,180,0,0,2161,2163,3,240,
        120,0,2162,2158,1,0,0,0,2163,2166,1,0,0,0,2164,2162,1,0,0,0,2164,
        2165,1,0,0,0,2165,239,1,0,0,0,2166,2164,1,0,0,0,2167,2174,3,242,
        121,0,2168,2169,5,180,0,0,2169,2170,5,51,0,0,2170,2171,5,180,0,0,
        2171,2173,3,242,121,0,2172,2168,1,0,0,0,2173,2176,1,0,0,0,2174,2172,
        1,0,0,0,2174,2175,1,0,0,0,2175,241,1,0,0,0,2176,2174,1,0,0,0,2177,
        2179,5,114,0,0,2178,2180,5,180,0,0,2179,2178,1,0,0,0,2179,2180,1,
        0,0,0,2180,2182,1,0,0,0,2181,2177,1,0,0,0,2182,2185,1,0,0,0,2183,
        2181,1,0,0,0,2183,2184,1,0,0,0,2184,2186,1,0,0,0,2185,2183,1,0,0,
        0,2186,2187,3,244,122,0,2187,243,1,0,0,0,2188,2198,3,248,124,0,2189,
        2191,5,180,0,0,2190,2189,1,0,0,0,2190,2191,1,0,0,0,2191,2192,1,0,
        0,0,2192,2194,3,246,123,0,2193,2195,5,180,0,0,2194,2193,1,0,0,0,
        2194,2195,1,0,0,0,2195,2196,1,0,0,0,2196,2197,3,248,124,0,2197,2199,
        1,0,0,0,2198,2190,1,0,0,0,2198,2199,1,0,0,0,2199,2237,1,0,0,0,2200,
        2202,3,248,124,0,2201,2203,5,180,0,0,2202,2201,1,0,0,0,2202,2203,
        1,0,0,0,2203,2204,1,0,0,0,2204,2206,5,161,0,0,2205,2207,5,180,0,
        0,2206,2205,1,0,0,0,2206,2207,1,0,0,0,2207,2208,1,0,0,0,2208,2209,
        3,248,124,0,2209,2210,1,0,0,0,2210,2211,6,122,-1,0,2211,2237,1,0,
        0,0,2212,2214,3,248,124,0,2213,2215,5,180,0,0,2214,2213,1,0,0,0,
        2214,2215,1,0,0,0,2215,2216,1,0,0,0,2216,2218,3,246,123,0,2217,2219,
        5,180,0,0,2218,2217,1,0,0,0,2218,2219,1,0,0,0,2219,2220,1,0,0,0,
        2220,2230,3,248,124,0,2221,2223,5,180,0,0,2222,2221,1,0,0,0,2222,
        2223,1,0,0,0,2223,2224,1,0,0,0,2224,2226,3,246,123,0,2225,2227,5,
        180,0,0,2226,2225,1,0,0,0,2226,2227,1,0,0,0,2227,2228,1,0,0,0,2228,
        2229,3,248,124,0,2229,2231,1,0,0,0,2230,2222,1,0,0,0,2231,2232,1,
        0,0,0,2232,2230,1,0,0,0,2232,2233,1,0,0,0,2233,2234,1,0,0,0,2234,
        2235,6,122,-1,0,2235,2237,1,0,0,0,2236,2188,1,0,0,0,2236,2200,1,
        0,0,0,2236,2212,1,0,0,0,2237,245,1,0,0,0,2238,2239,7,2,0,0,2239,
        247,1,0,0,0,2240,2251,3,250,125,0,2241,2243,5,180,0,0,2242,2241,
        1,0,0,0,2242,2243,1,0,0,0,2243,2244,1,0,0,0,2244,2246,5,11,0,0,2245,
        2247,5,180,0,0,2246,2245,1,0,0,0,2246,2247,1,0,0,0,2247,2248,1,0,
        0,0,2248,2250,3,250,125,0,2249,2242,1,0,0,0,2250,2253,1,0,0,0,2251,
        2249,1,0,0,0,2251,2252,1,0,0,0,2252,249,1,0,0,0,2253,2251,1,0,0,
        0,2254,2265,3,252,126,0,2255,2257,5,180,0,0,2256,2255,1,0,0,0,2256,
        2257,1,0,0,0,2257,2258,1,0,0,0,2258,2260,5,18,0,0,2259,2261,5,180,
        0,0,2260,2259,1,0,0,0,2260,2261,1,0,0,0,2261,2262,1,0,0,0,2262,2264,
        3,252,126,0,2263,2256,1,0,0,0,2264,2267,1,0,0,0,2265,2263,1,0,0,
        0,2265,2266,1,0,0,0,2266,251,1,0,0,0,2267,2265,1,0,0,0,2268,2280,
        3,256,128,0,2269,2271,5,180,0,0,2270,2269,1,0,0,0,2270,2271,1,0,
        0,0,2271,2272,1,0,0,0,2272,2274,3,254,127,0,2273,2275,5,180,0,0,
        2274,2273,1,0,0,0,2274,2275,1,0,0,0,2275,2276,1,0,0,0,2276,2277,
        3,256,128,0,2277,2279,1,0,0,0,2278,2270,1,0,0,0,2279,2282,1,0,0,
        0,2280,2278,1,0,0,0,2280,2281,1,0,0,0,2281,253,1,0,0,0,2282,2280,
        1,0,0,0,2283,2284,7,3,0,0,2284,255,1,0,0,0,2285,2297,3,260,130,0,
        2286,2288,5,180,0,0,2287,2286,1,0,0,0,2287,2288,1,0,0,0,2288,2289,
        1,0,0,0,2289,2291,3,258,129,0,2290,2292,5,180,0,0,2291,2290,1,0,
        0,0,2291,2292,1,0,0,0,2292,2293,1,0,0,0,2293,2294,3,260,130,0,2294,
        2296,1,0,0,0,2295,2287,1,0,0,0,2296,2299,1,0,0,0,2297,2295,1,0,0,
        0,2297,2298,1,0,0,0,2298,257,1,0,0,0,2299,2297,1,0,0,0,2300,2301,
        7,4,0,0,2301,259,1,0,0,0,2302,2314,3,264,132,0,2303,2305,5,180,0,
        0,2304,2303,1,0,0,0,2304,2305,1,0,0,0,2305,2306,1,0,0,0,2306,2308,
        3,262,131,0,2307,2309,5,180,0,0,2308,2307,1,0,0,0,2308,2309,1,0,
        0,0,2309,2310,1,0,0,0,2310,2311,3,264,132,0,2311,2313,1,0,0,0,2312,
        2304,1,0,0,0,2313,2316,1,0,0,0,2314,2312,1,0,0,0,2314,2315,1,0,0,
        0,2315,261,1,0,0,0,2316,2314,1,0,0,0,2317,2318,7,5,0,0,2318,263,
        1,0,0,0,2319,2330,3,266,133,0,2320,2322,5,180,0,0,2321,2320,1,0,
        0,0,2321,2322,1,0,0,0,2322,2323,1,0,0,0,2323,2325,5,24,0,0,2324,
        2326,5,180,0,0,2325,2324,1,0,0,0,2325,2326,1,0,0,0,2326,2327,1,0,
        0,0,2327,2329,3,266,133,0,2328,2321,1,0,0,0,2329,2332,1,0,0,0,2330,
        2328,1,0,0,0,2330,2331,1,0,0,0,2331,265,1,0,0,0,2332,2330,1,0,0,
        0,2333,2341,3,276,138,0,2334,2342,3,270,135,0,2335,2337,3,268,134,
        0,2336,2335,1,0,0,0,2337,2338,1,0,0,0,2338,2336,1,0,0,0,2338,2339,
        1,0,0,0,2339,2342,1,0,0,0,2340,2342,3,274,137,0,2341,2334,1,0,0,
        0,2341,2336,1,0,0,0,2341,2340,1,0,0,0,2341,2342,1,0,0,0,2342,267,
        1,0,0,0,2343,2344,5,180,0,0,2344,2346,5,97,0,0,2345,2347,5,180,0,
        0,2346,2345,1,0,0,0,2346,2347,1,0,0,0,2347,2348,1,0,0,0,2348,2363,
        3,278,139,0,2349,2350,5,7,0,0,2350,2351,3,234,117,0,2351,2352,5,
        8,0,0,2352,2363,1,0,0,0,2353,2355,5,7,0,0,2354,2356,3,234,117,0,
        2355,2354,1,0,0,0,2355,2356,1,0,0,0,2356,2357,1,0,0,0,2357,2359,
        5,162,0,0,2358,2360,3,234,117,0,2359,2358,1,0,0,0,2359,2360,1,0,
        0,0,2360,2361,1,0,0,0,2361,2363,5,8,0,0,2362,2343,1,0,0,0,2362,2349,
        1,0,0,0,2362,2353,1,0,0,0,2363,269,1,0,0,0,2364,2376,3,272,136,0,
        2365,2366,5,180,0,0,2366,2367,5,135,0,0,2367,2368,5,180,0,0,2368,
        2376,5,151,0,0,2369,2370,5,180,0,0,2370,2371,5,82,0,0,2371,2372,
        5,180,0,0,2372,2376,5,151,0,0,2373,2374,5,180,0,0,2374,2376,5,66,
        0,0,2375,2364,1,0,0,0,2375,2365,1,0,0,0,2375,2369,1,0,0,0,2375,2373,
        1,0,0,0,2376,2378,1,0,0,0,2377,2379,5,180,0,0,2378,2377,1,0,0,0,
        2378,2379,1,0,0,0,2379,2380,1,0,0,0,2380,2381,3,278,139,0,2381,271,
        1,0,0,0,2382,2384,5,180,0,0,2383,2382,1,0,0,0,2383,2384,1,0,0,0,
        2384,2385,1,0,0,0,2385,2386,5,25,0,0,2386,273,1,0,0,0,2387,2388,
        5,180,0,0,2388,2389,5,100,0,0,2389,2390,5,180,0,0,2390,2398,5,116,
        0,0,2391,2392,5,180,0,0,2392,2393,5,100,0,0,2393,2394,5,180,0,0,
        2394,2395,5,114,0,0,2395,2396,5,180,0,0,2396,2398,5,116,0,0,2397,
        2387,1,0,0,0,2397,2391,1,0,0,0,2398,275,1,0,0,0,2399,2401,5,163,
        0,0,2400,2402,5,180,0,0,2401,2400,1,0,0,0,2401,2402,1,0,0,0,2402,
        2404,1,0,0,0,2403,2399,1,0,0,0,2404,2407,1,0,0,0,2405,2403,1,0,0,
        0,2405,2406,1,0,0,0,2406,2408,1,0,0,0,2407,2405,1,0,0,0,2408,2413,
        3,278,139,0,2409,2411,5,180,0,0,2410,2409,1,0,0,0,2410,2411,1,0,
        0,0,2411,2412,1,0,0,0,2412,2414,5,164,0,0,2413,2410,1,0,0,0,2413,
        2414,1,0,0,0,2414,277,1,0,0,0,2415,2422,3,280,140,0,2416,2418,5,
        180,0,0,2417,2416,1,0,0,0,2417,2418,1,0,0,0,2418,2419,1,0,0,0,2419,
        2421,3,316,158,0,2420,2417,1,0,0,0,2421,2424,1,0,0,0,2422,2420,1,
        0,0,0,2422,2423,1,0,0,0,2423,279,1,0,0,0,2424,2422,1,0,0,0,2425,
        2435,3,288,144,0,2426,2435,3,326,163,0,2427,2435,3,318,159,0,2428,
        2435,3,300,150,0,2429,2435,3,302,151,0,2430,2435,3,312,156,0,2431,
        2435,3,314,157,0,2432,2435,3,322,161,0,2433,2435,3,282,141,0,2434,
        2425,1,0,0,0,2434,2426,1,0,0,0,2434,2427,1,0,0,0,2434,2428,1,0,0,
        0,2434,2429,1,0,0,0,2434,2430,1,0,0,0,2434,2431,1,0,0,0,2434,2432,
        1,0,0,0,2434,2433,1,0,0,0,2435,281,1,0,0,0,2436,2438,5,49,0,0,2437,
        2439,5,180,0,0,2438,2437,1,0,0,0,2438,2439,1,0,0,0,2439,2440,1,0,
        0,0,2440,2442,5,2,0,0,2441,2443,5,180,0,0,2442,2441,1,0,0,0,2442,
        2443,1,0,0,0,2443,2444,1,0,0,0,2444,2446,3,284,142,0,2445,2447,5,
        180,0,0,2446,2445,1,0,0,0,2446,2447,1,0,0,0,2447,2448,1,0,0,0,2448,
        2449,5,3,0,0,2449,2493,1,0,0,0,2450,2452,5,47,0,0,2451,2453,5,180,
        0,0,2452,2451,1,0,0,0,2452,2453,1,0,0,0,2453,2454,1,0,0,0,2454,2456,
        5,2,0,0,2455,2457,5,180,0,0,2456,2455,1,0,0,0,2456,2457,1,0,0,0,
        2457,2458,1,0,0,0,2458,2460,3,284,142,0,2459,2461,5,180,0,0,2460,
        2459,1,0,0,0,2460,2461,1,0,0,0,2461,2462,1,0,0,0,2462,2463,5,3,0,
        0,2463,2493,1,0,0,0,2464,2466,5,115,0,0,2465,2467,5,180,0,0,2466,
        2465,1,0,0,0,2466,2467,1,0,0,0,2467,2468,1,0,0,0,2468,2470,5,2,0,
        0,2469,2471,5,180,0,0,2470,2469,1,0,0,0,2470,2471,1,0,0,0,2471,2472,
        1,0,0,0,2472,2474,3,284,142,0,2473,2475,5,180,0,0,2474,2473,1,0,
        0,0,2474,2475,1,0,0,0,2475,2476,1,0,0,0,2476,2477,5,3,0,0,2477,2493,
        1,0,0,0,2478,2480,5,155,0,0,2479,2481,5,180,0,0,2480,2479,1,0,0,
        0,2480,2481,1,0,0,0,2481,2482,1,0,0,0,2482,2484,5,2,0,0,2483,2485,
        5,180,0,0,2484,2483,1,0,0,0,2484,2485,1,0,0,0,2485,2486,1,0,0,0,
        2486,2488,3,284,142,0,2487,2489,5,180,0,0,2488,2487,1,0,0,0,2488,
        2489,1,0,0,0,2489,2490,1,0,0,0,2490,2491,5,3,0,0,2491,2493,1,0,0,
        0,2492,2436,1,0,0,0,2492,2450,1,0,0,0,2492,2464,1,0,0,0,2492,2478,
        1,0,0,0,2493,283,1,0,0,0,2494,2495,3,286,143,0,2495,2496,5,180,0,
        0,2496,2497,3,190,95,0,2497,285,1,0,0,0,2498,2499,3,322,161,0,2499,
        2500,5,180,0,0,2500,2501,5,97,0,0,2501,2502,5,180,0,0,2502,2503,
        3,234,117,0,2503,287,1,0,0,0,2504,2511,3,324,162,0,2505,2511,5,165,
        0,0,2506,2511,3,290,145,0,2507,2511,5,116,0,0,2508,2511,3,292,146,
        0,2509,2511,3,296,148,0,2510,2504,1,0,0,0,2510,2505,1,0,0,0,2510,
        2506,1,0,0,0,2510,2507,1,0,0,0,2510,2508,1,0,0,0,2510,2509,1,0,0,
        0,2511,289,1,0,0,0,2512,2513,7,6,0,0,2513,291,1,0,0,0,2514,2516,
        5,7,0,0,2515,2517,5,180,0,0,2516,2515,1,0,0,0,2516,2517,1,0,0,0,
        2517,2531,1,0,0,0,2518,2520,3,234,117,0,2519,2521,5,180,0,0,2520,
        2519,1,0,0,0,2520,2521,1,0,0,0,2521,2528,1,0,0,0,2522,2524,3,294,
        147,0,2523,2525,5,180,0,0,2524,2523,1,0,0,0,2524,2525,1,0,0,0,2525,
        2527,1,0,0,0,2526,2522,1,0,0,0,2527,2530,1,0,0,0,2528,2526,1,0,0,
        0,2528,2529,1,0,0,0,2529,2532,1,0,0,0,2530,2528,1,0,0,0,2531,2518,
        1,0,0,0,2531,2532,1,0,0,0,2532,2533,1,0,0,0,2533,2534,5,8,0,0,2534,
        293,1,0,0,0,2535,2537,5,4,0,0,2536,2538,5,180,0,0,2537,2536,1,0,
        0,0,2537,2538,1,0,0,0,2538,2540,1,0,0,0,2539,2541,3,234,117,0,2540,
        2539,1,0,0,0,2540,2541,1,0,0,0,2541,295,1,0,0,0,2542,2544,5,9,0,
        0,2543,2545,5,180,0,0,2544,2543,1,0,0,0,2544,2545,1,0,0,0,2545,2546,
        1,0,0,0,2546,2548,3,298,149,0,2547,2549,5,180,0,0,2548,2547,1,0,
        0,0,2548,2549,1,0,0,0,2549,2560,1,0,0,0,2550,2552,5,4,0,0,2551,2553,
        5,180,0,0,2552,2551,1,0,0,0,2552,2553,1,0,0,0,2553,2554,1,0,0,0,
        2554,2556,3,298,149,0,2555,2557,5,180,0,0,2556,2555,1,0,0,0,2556,
        2557,1,0,0,0,2557,2559,1,0,0,0,2558,2550,1,0,0,0,2559,2562,1,0,0,
        0,2560,2558,1,0,0,0,2560,2561,1,0,0,0,2561,2563,1,0,0,0,2562,2560,
        1,0,0,0,2563,2564,5,10,0,0,2564,297,1,0,0,0,2565,2568,3,338,169,
        0,2566,2568,5,165,0,0,2567,2565,1,0,0,0,2567,2566,1,0,0,0,2568,2570,
        1,0,0,0,2569,2571,5,180,0,0,2570,2569,1,0,0,0,2570,2571,1,0,0,0,
        2571,2572,1,0,0,0,2572,2574,5,162,0,0,2573,2575,5,180,0,0,2574,2573,
        1,0,0,0,2574,2575,1,0,0,0,2575,2576,1,0,0,0,2576,2577,3,234,117,
        0,2577,299,1,0,0,0,2578,2580,5,2,0,0,2579,2581,5,180,0,0,2580,2579,
        1,0,0,0,2580,2581,1,0,0,0,2581,2582,1,0,0,0,2582,2584,3,234,117,
        0,2583,2585,5,180,0,0,2584,2583,1,0,0,0,2584,2585,1,0,0,0,2585,2586,
        1,0,0,0,2586,2587,5,3,0,0,2587,301,1,0,0,0,2588,2590,5,68,0,0,2589,
        2591,5,180,0,0,2590,2589,1,0,0,0,2590,2591,1,0,0,0,2591,2592,1,0,
        0,0,2592,2594,5,2,0,0,2593,2595,5,180,0,0,2594,2593,1,0,0,0,2594,
        2595,1,0,0,0,2595,2596,1,0,0,0,2596,2598,5,159,0,0,2597,2599,5,180,
        0,0,2598,2597,1,0,0,0,2598,2599,1,0,0,0,2599,2600,1,0,0,0,2600,2666,
        5,3,0,0,2601,2603,5,60,0,0,2602,2604,5,180,0,0,2603,2602,1,0,0,0,
        2603,2604,1,0,0,0,2604,2605,1,0,0,0,2605,2607,5,2,0,0,2606,2608,
        5,180,0,0,2607,2606,1,0,0,0,2607,2608,1,0,0,0,2608,2609,1,0,0,0,
        2609,2611,3,306,153,0,2610,2612,5,180,0,0,2611,2610,1,0,0,0,2611,
        2612,1,0,0,0,2612,2623,1,0,0,0,2613,2615,5,52,0,0,2614,2616,5,180,
        0,0,2615,2614,1,0,0,0,2615,2616,1,0,0,0,2616,2617,1,0,0,0,2617,2624,
        3,102,51,0,2618,2620,5,4,0,0,2619,2621,5,180,0,0,2620,2619,1,0,0,
        0,2620,2621,1,0,0,0,2621,2622,1,0,0,0,2622,2624,3,306,153,0,2623,
        2613,1,0,0,0,2623,2618,1,0,0,0,2624,2626,1,0,0,0,2625,2627,5,180,
        0,0,2626,2625,1,0,0,0,2626,2627,1,0,0,0,2627,2628,1,0,0,0,2628,2629,
        5,3,0,0,2629,2666,1,0,0,0,2630,2632,3,304,152,0,2631,2633,5,180,
        0,0,2632,2631,1,0,0,0,2632,2633,1,0,0,0,2633,2634,1,0,0,0,2634,2636,
        5,2,0,0,2635,2637,5,180,0,0,2636,2635,1,0,0,0,2636,2637,1,0,0,0,
        2637,2642,1,0,0,0,2638,2640,5,78,0,0,2639,2641,5,180,0,0,2640,2639,
        1,0,0,0,2640,2641,1,0,0,0,2641,2643,1,0,0,0,2642,2638,1,0,0,0,2642,
        2643,1,0,0,0,2643,2661,1,0,0,0,2644,2646,3,306,153,0,2645,2647,5,
        180,0,0,2646,2645,1,0,0,0,2646,2647,1,0,0,0,2647,2658,1,0,0,0,2648,
        2650,5,4,0,0,2649,2651,5,180,0,0,2650,2649,1,0,0,0,2650,2651,1,0,
        0,0,2651,2652,1,0,0,0,2652,2654,3,306,153,0,2653,2655,5,180,0,0,
        2654,2653,1,0,0,0,2654,2655,1,0,0,0,2655,2657,1,0,0,0,2656,2648,
        1,0,0,0,2657,2660,1,0,0,0,2658,2656,1,0,0,0,2658,2659,1,0,0,0,2659,
        2662,1,0,0,0,2660,2658,1,0,0,0,2661,2644,1,0,0,0,2661,2662,1,0,0,
        0,2662,2663,1,0,0,0,2663,2664,5,3,0,0,2664,2666,1,0,0,0,2665,2588,
        1,0,0,0,2665,2601,1,0,0,0,2665,2630,1,0,0,0,2666,303,1,0,0,0,2667,
        2668,3,338,169,0,2668,305,1,0,0,0,2669,2671,3,338,169,0,2670,2672,
        5,180,0,0,2671,2670,1,0,0,0,2671,2672,1,0,0,0,2672,2673,1,0,0,0,
        2673,2674,5,162,0,0,2674,2676,5,6,0,0,2675,2677,5,180,0,0,2676,2675,
        1,0,0,0,2676,2677,1,0,0,0,2677,2679,1,0,0,0,2678,2669,1,0,0,0,2678,
        2679,1,0,0,0,2679,2680,1,0,0,0,2680,2683,3,234,117,0,2681,2683,3,
        308,154,0,2682,2678,1,0,0,0,2682,2681,1,0,0,0,2683,307,1,0,0,0,2684,
        2686,3,310,155,0,2685,2687,5,180,0,0,2686,2685,1,0,0,0,2686,2687,
        1,0,0,0,2687,2688,1,0,0,0,2688,2689,5,163,0,0,2689,2691,5,16,0,0,
        2690,2692,5,180,0,0,2691,2690,1,0,0,0,2691,2692,1,0,0,0,2692,2693,
        1,0,0,0,2693,2695,3,234,117,0,2694,2696,5,180,0,0,2695,2694,1,0,
        0,0,2695,2696,1,0,0,0,2696,309,1,0,0,0,2697,2722,3,338,169,0,2698,
        2700,5,2,0,0,2699,2701,5,180,0,0,2700,2699,1,0,0,0,2700,2701,1,0,
        0,0,2701,2702,1,0,0,0,2702,2704,3,338,169,0,2703,2705,5,180,0,0,
        2704,2703,1,0,0,0,2704,2705,1,0,0,0,2705,2716,1,0,0,0,2706,2708,
        5,4,0,0,2707,2709,5,180,0,0,2708,2707,1,0,0,0,2708,2709,1,0,0,0,
        2709,2710,1,0,0,0,2710,2712,3,338,169,0,2711,2713,5,180,0,0,2712,
        2711,1,0,0,0,2712,2713,1,0,0,0,2713,2715,1,0,0,0,2714,2706,1,0,0,
        0,2715,2718,1,0,0,0,2716,2714,1,0,0,0,2716,2717,1,0,0,0,2717,2719,
        1,0,0,0,2718,2716,1,0,0,0,2719,2720,5,3,0,0,2720,2722,1,0,0,0,2721,
        2697,1,0,0,0,2721,2698,1,0,0,0,2722,311,1,0,0,0,2723,2728,3,200,
        100,0,2724,2726,5,180,0,0,2725,2724,1,0,0,0,2725,2726,1,0,0,0,2726,
        2727,1,0,0,0,2727,2729,3,202,101,0,2728,2725,1,0,0,0,2729,2730,1,
        0,0,0,2730,2728,1,0,0,0,2730,2731,1,0,0,0,2731,313,1,0,0,0,2732,
        2734,7,7,0,0,2733,2735,5,180,0,0,2734,2733,1,0,0,0,2734,2735,1,0,
        0,0,2735,2736,1,0,0,0,2736,2738,5,9,0,0,2737,2739,5,180,0,0,2738,
        2737,1,0,0,0,2738,2739,1,0,0,0,2739,2740,1,0,0,0,2740,2742,5,107,
        0,0,2741,2743,5,180,0,0,2742,2741,1,0,0,0,2742,2743,1,0,0,0,2743,
        2744,1,0,0,0,2744,2749,3,192,96,0,2745,2747,5,180,0,0,2746,2745,
        1,0,0,0,2746,2747,1,0,0,0,2747,2748,1,0,0,0,2748,2750,3,190,95,0,
        2749,2746,1,0,0,0,2749,2750,1,0,0,0,2750,2755,1,0,0,0,2751,2753,
        5,180,0,0,2752,2751,1,0,0,0,2752,2753,1,0,0,0,2753,2754,1,0,0,0,
        2754,2756,3,154,77,0,2755,2752,1,0,0,0,2755,2756,1,0,0,0,2756,2758,
        1,0,0,0,2757,2759,5,180,0,0,2758,2757,1,0,0,0,2758,2759,1,0,0,0,
        2759,2760,1,0,0,0,2760,2761,5,10,0,0,2761,315,1,0,0,0,2762,2764,
        5,5,0,0,2763,2765,5,180,0,0,2764,2763,1,0,0,0,2764,2765,1,0,0,0,
        2765,2768,1,0,0,0,2766,2769,3,330,165,0,2767,2769,5,159,0,0,2768,
        2766,1,0,0,0,2768,2767,1,0,0,0,2769,317,1,0,0,0,2770,2775,5,59,0,
        0,2771,2773,5,180,0,0,2772,2771,1,0,0,0,2772,2773,1,0,0,0,2773,2774,
        1,0,0,0,2774,2776,3,320,160,0,2775,2772,1,0,0,0,2776,2777,1,0,0,
        0,2777,2775,1,0,0,0,2777,2778,1,0,0,0,2778,2793,1,0,0,0,2779,2781,
        5,59,0,0,2780,2782,5,180,0,0,2781,2780,1,0,0,0,2781,2782,1,0,0,0,
        2782,2783,1,0,0,0,2783,2788,3,234,117,0,2784,2786,5,180,0,0,2785,
        2784,1,0,0,0,2785,2786,1,0,0,0,2786,2787,1,0,0,0,2787,2789,3,320,
        160,0,2788,2785,1,0,0,0,2789,2790,1,0,0,0,2790,2788,1,0,0,0,2790,
        2791,1,0,0,0,2791,2793,1,0,0,0,2792,2770,1,0,0,0,2792,2779,1,0,0,
        0,2793,2802,1,0,0,0,2794,2796,5,180,0,0,2795,2794,1,0,0,0,2795,2796,
        1,0,0,0,2796,2797,1,0,0,0,2797,2799,5,80,0,0,2798,2800,5,180,0,0,
        2799,2798,1,0,0,0,2799,2800,1,0,0,0,2800,2801,1,0,0,0,2801,2803,
        3,234,117,0,2802,2795,1,0,0,0,2802,2803,1,0,0,0,2803,2805,1,0,0,
        0,2804,2806,5,180,0,0,2805,2804,1,0,0,0,2805,2806,1,0,0,0,2806,2807,
        1,0,0,0,2807,2808,5,81,0,0,2808,319,1,0,0,0,2809,2811,5,149,0,0,
        2810,2812,5,180,0,0,2811,2810,1,0,0,0,2811,2812,1,0,0,0,2812,2813,
        1,0,0,0,2813,2815,3,234,117,0,2814,2816,5,180,0,0,2815,2814,1,0,
        0,0,2815,2816,1,0,0,0,2816,2817,1,0,0,0,2817,2819,5,138,0,0,2818,
        2820,5,180,0,0,2819,2818,1,0,0,0,2819,2820,1,0,0,0,2820,2821,1,0,
        0,0,2821,2822,3,234,117,0,2822,321,1,0,0,0,2823,2824,3,338,169,0,
        2824,323,1,0,0,0,2825,2828,3,334,167,0,2826,2828,3,332,166,0,2827,
        2825,1,0,0,0,2827,2826,1,0,0,0,2828,325,1,0,0,0,2829,2832,5,26,0,
        0,2830,2833,3,338,169,0,2831,2833,5,167,0,0,2832,2830,1,0,0,0,2832,
        2831,1,0,0,0,2833,327,1,0,0,0,2834,2836,3,280,140,0,2835,2837,5,
        180,0,0,2836,2835,1,0,0,0,2836,2837,1,0,0,0,2837,2838,1,0,0,0,2838,
        2839,3,316,158,0,2839,329,1,0,0,0,2840,2841,3,336,168,0,2841,331,
        1,0,0,0,2842,2843,5,167,0,0,2843,333,1,0,0,0,2844,2845,7,8,0,0,2845,
        335,1,0,0,0,2846,2847,3,338,169,0,2847,337,1,0,0,0,2848,2854,5,176,
        0,0,2849,2850,5,179,0,0,2850,2854,6,169,-1,0,2851,2854,5,168,0,0,
        2852,2854,3,340,170,0,2853,2848,1,0,0,0,2853,2849,1,0,0,0,2853,2851,
        1,0,0,0,2853,2852,1,0,0,0,2854,339,1,0,0,0,2855,2856,7,9,0,0,2856,
        341,1,0,0,0,2857,2858,7,10,0,0,2858,343,1,0,0,0,2859,2860,7,11,0,
        0,2860,345,1,0,0,0,2861,2862,7,12,0,0,2862,347,1,0,0,0,489,350,354,
        359,363,368,371,375,378,401,407,414,418,422,426,429,433,437,441,
        446,450,452,459,463,472,477,487,491,495,500,513,517,525,529,533,
        537,545,549,553,557,572,577,583,587,590,593,599,603,608,611,616,
        620,624,629,644,648,655,675,679,682,685,688,691,695,700,704,714,
        718,723,728,733,739,743,747,752,759,763,767,770,787,791,795,799,
        803,806,809,817,826,830,835,839,843,847,851,853,857,861,863,871,
        876,880,884,888,892,896,901,919,926,939,946,955,963,966,976,979,
        987,990,996,999,1005,1020,1038,1045,1052,1063,1086,1095,1101,1105,
        1110,1119,1123,1128,1134,1140,1146,1150,1154,1162,1166,1170,1176,
        1180,1184,1190,1194,1198,1204,1208,1212,1216,1220,1226,1230,1234,
        1238,1242,1246,1252,1259,1264,1270,1275,1292,1298,1304,1308,1312,
        1321,1335,1340,1345,1349,1354,1360,1365,1368,1372,1376,1380,1386,
        1390,1395,1400,1404,1407,1409,1413,1417,1423,1427,1432,1436,1445,
        1451,1459,1463,1467,1471,1478,1482,1486,1490,1493,1496,1503,1509,
        1513,1518,1525,1528,1531,1536,1540,1544,1549,1553,1562,1566,1571,
        1585,1587,1589,1594,1604,1610,1617,1630,1634,1638,1642,1647,1652,
        1656,1662,1666,1670,1674,1679,1685,1688,1694,1697,1703,1707,1711,
        1715,1719,1724,1729,1733,1738,1741,1750,1759,1764,1777,1780,1788,
        1792,1797,1802,1806,1811,1817,1822,1829,1833,1837,1839,1843,1845,
        1849,1851,1857,1863,1867,1870,1873,1879,1882,1885,1889,1895,1898,
        1901,1905,1909,1913,1915,1919,1921,1925,1927,1931,1933,1939,1943,
        1947,1951,1955,1959,1963,1967,1971,1974,1980,1984,1988,1991,1996,
        2001,2006,2011,2017,2020,2023,2026,2029,2032,2036,2040,2044,2048,
        2058,2061,2064,2068,2071,2074,2078,2082,2086,2090,2094,2098,2100,
        2103,2107,2111,2115,2119,2121,2127,2130,2133,2154,2164,2174,2179,
        2183,2190,2194,2198,2202,2206,2214,2218,2222,2226,2232,2236,2242,
        2246,2251,2256,2260,2265,2270,2274,2280,2287,2291,2297,2304,2308,
        2314,2321,2325,2330,2338,2341,2346,2355,2359,2362,2375,2378,2383,
        2397,2401,2405,2410,2413,2417,2422,2434,2438,2442,2446,2452,2456,
        2460,2466,2470,2474,2480,2484,2488,2492,2510,2516,2520,2524,2528,
        2531,2537,2540,2544,2548,2552,2556,2560,2567,2570,2574,2580,2584,
        2590,2594,2598,2603,2607,2611,2615,2620,2623,2626,2632,2636,2640,
        2642,2646,2650,2654,2658,2661,2665,2671,2676,2678,2682,2686,2691,
        2695,2700,2704,2708,2712,2716,2721,2725,2730,2734,2738,2742,2746,
        2749,2752,2755,2758,2764,2768,2772,2777,2781,2785,2790,2792,2795,
        2799,2802,2805,2811,2815,2819,2827,2832,2836,2853
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
    public kU_CreateUser(): KU_CreateUserContext {
        return this.getTypedRuleContext(KU_CreateUserContext, 0);
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
    public kU_ColumnNames(): KU_ColumnNamesContext {
        return this.getTypedRuleContext(KU_ColumnNamesContext, 0);
    }
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CopyFrom;
    }
}


export class KU_ColumnNamesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
    public oC_Parameter(): OC_ParameterContext {
        return this.getTypedRuleContext(OC_ParameterContext, 0);
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
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_Query(): OC_QueryContext {
        return this.getTypedRuleContext(OC_QueryContext, 0);
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
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_Query(): OC_QueryContext {
        return this.getTypedRuleContext(OC_QueryContext, 0);
    }
    public GROUP(): antlr.TerminalNode {
        return this.getToken(CypherParser.GROUP, 0);
    }
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
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


export class KU_CreateUserContext extends antlr.ParserRuleContext {
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
    public USER(): antlr.TerminalNode {
        return this.getToken(CypherParser.USER, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateUser;
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
    public kU_AddFromToConnection(): KU_AddFromToConnectionContext {
        return this.getTypedRuleContext(KU_AddFromToConnectionContext, 0);
    }
    public kU_DropFromToConnection(): KU_DropFromToConnectionContext {
        return this.getTypedRuleContext(KU_DropFromToConnectionContext, 0);
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


export class KU_AddFromToConnectionContext extends antlr.ParserRuleContext {
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
    public kU_FromToConnection(): KU_FromToConnectionContext {
        return this.getTypedRuleContext(KU_FromToConnectionContext, 0);
    }
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AddFromToConnection;
    }
}


export class KU_DropFromToConnectionContext extends antlr.ParserRuleContext {
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
    public kU_FromToConnection(): KU_FromToConnectionContext {
        return this.getTypedRuleContext(KU_FromToConnectionContext, 0);
    }
    public kU_IfExists(): KU_IfExistsContext {
        return this.getTypedRuleContext(KU_IfExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_DropFromToConnection;
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
    public STRUCT(): antlr.TerminalNode {
        return this.getToken(CypherParser.STRUCT, 0);
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
    public kU_UninstallExtension(): KU_UninstallExtensionContext {
        return this.getTypedRuleContext(KU_UninstallExtensionContext, 0);
    }
    public kU_UpdateExtension(): KU_UpdateExtensionContext {
        return this.getTypedRuleContext(KU_UpdateExtensionContext, 0);
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
    public FORCE(): antlr.TerminalNode {
        return this.getToken(CypherParser.FORCE, 0);
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


export class KU_UninstallExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNINSTALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.UNINSTALL, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_UninstallExtension;
    }
}


export class KU_UpdateExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UPDATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.UPDATE, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_UpdateExtension;
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
    public oC_StringListNullOperatorExpression__list(): OC_StringListNullOperatorExpressionContext[] {
        return this.getTypedRuleContexts(OC_StringListNullOperatorExpressionContext);
    }
    public oC_StringListNullOperatorExpression(i: number): OC_StringListNullOperatorExpressionContext {
        return this.getTypedRuleContext(OC_StringListNullOperatorExpressionContext, i);
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


export class OC_StringListNullOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_UnaryAddSubtractOrFactorialExpression(): OC_UnaryAddSubtractOrFactorialExpressionContext {
        return this.getTypedRuleContext(OC_UnaryAddSubtractOrFactorialExpressionContext, 0);
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


export class OC_UnaryAddSubtractOrFactorialExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
        return this.getTypedRuleContext(OC_PropertyOrLabelsExpressionContext, 0);
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
    public FORCE(): antlr.TerminalNode {
        return this.getToken(CypherParser.FORCE, 0);
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
    public STRUCT(): antlr.TerminalNode {
        return this.getToken(CypherParser.STRUCT, 0);
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
    public UNINSTALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.UNINSTALL, 0);
    }
    public UPDATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.UPDATE, 0);
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
    public USER(): antlr.TerminalNode {
        return this.getToken(CypherParser.USER, 0);
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

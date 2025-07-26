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
    public static readonly DECIMAL = 157;
    public static readonly STAR = 158;
    public static readonly L_SKIP = 159;
    public static readonly INVALID_NOT_EQUAL = 160;
    public static readonly COLON = 161;
    public static readonly MINUS = 162;
    public static readonly FACTORIAL = 163;
    public static readonly StringLiteral = 164;
    public static readonly EscapedChar = 165;
    public static readonly DecimalInteger = 166;
    public static readonly HexLetter = 167;
    public static readonly HexDigit = 168;
    public static readonly Digit = 169;
    public static readonly NonZeroDigit = 170;
    public static readonly NonZeroOctDigit = 171;
    public static readonly ZeroDigit = 172;
    public static readonly ExponentDecimalReal = 173;
    public static readonly RegularDecimalReal = 174;
    public static readonly UnescapedSymbolicName = 175;
    public static readonly IdentifierStart = 176;
    public static readonly IdentifierPart = 177;
    public static readonly EscapedSymbolicName = 178;
    public static readonly SP = 179;
    public static readonly WHITESPACE = 180;
    public static readonly CypherComment = 181;
    public static readonly Unknown = 182;
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
    public static readonly RULE_kU_AddFromToConnection = 43;
    public static readonly RULE_kU_DropFromToConnection = 44;
    public static readonly RULE_kU_ColumnDefinitions = 45;
    public static readonly RULE_kU_ColumnDefinition = 46;
    public static readonly RULE_kU_PropertyDefinitions = 47;
    public static readonly RULE_kU_PropertyDefinition = 48;
    public static readonly RULE_kU_CreateNodeConstraint = 49;
    public static readonly RULE_kU_DataType = 50;
    public static readonly RULE_kU_ListIdentifiers = 51;
    public static readonly RULE_kU_ListIdentifier = 52;
    public static readonly RULE_oC_AnyCypherOption = 53;
    public static readonly RULE_oC_Explain = 54;
    public static readonly RULE_oC_Profile = 55;
    public static readonly RULE_kU_Transaction = 56;
    public static readonly RULE_kU_Extension = 57;
    public static readonly RULE_kU_LoadExtension = 58;
    public static readonly RULE_kU_InstallExtension = 59;
    public static readonly RULE_kU_UninstallExtension = 60;
    public static readonly RULE_kU_UpdateExtension = 61;
    public static readonly RULE_oC_Query = 62;
    public static readonly RULE_oC_RegularQuery = 63;
    public static readonly RULE_oC_Union = 64;
    public static readonly RULE_oC_SingleQuery = 65;
    public static readonly RULE_oC_SinglePartQuery = 66;
    public static readonly RULE_oC_MultiPartQuery = 67;
    public static readonly RULE_kU_QueryPart = 68;
    public static readonly RULE_oC_UpdatingClause = 69;
    public static readonly RULE_oC_ReadingClause = 70;
    public static readonly RULE_kU_LoadFrom = 71;
    public static readonly RULE_oC_YieldItem = 72;
    public static readonly RULE_oC_YieldItems = 73;
    public static readonly RULE_kU_InQueryCall = 74;
    public static readonly RULE_oC_Match = 75;
    public static readonly RULE_kU_Hint = 76;
    public static readonly RULE_kU_JoinNode = 77;
    public static readonly RULE_oC_Unwind = 78;
    public static readonly RULE_oC_Create = 79;
    public static readonly RULE_oC_Merge = 80;
    public static readonly RULE_oC_MergeAction = 81;
    public static readonly RULE_oC_Set = 82;
    public static readonly RULE_oC_SetItem = 83;
    public static readonly RULE_oC_Delete = 84;
    public static readonly RULE_oC_With = 85;
    public static readonly RULE_oC_Return = 86;
    public static readonly RULE_oC_ProjectionBody = 87;
    public static readonly RULE_oC_ProjectionItems = 88;
    public static readonly RULE_oC_ProjectionItem = 89;
    public static readonly RULE_oC_Order = 90;
    public static readonly RULE_oC_Skip = 91;
    public static readonly RULE_oC_Limit = 92;
    public static readonly RULE_oC_SortItem = 93;
    public static readonly RULE_oC_Where = 94;
    public static readonly RULE_oC_Pattern = 95;
    public static readonly RULE_oC_PatternPart = 96;
    public static readonly RULE_oC_AnonymousPatternPart = 97;
    public static readonly RULE_oC_PatternElement = 98;
    public static readonly RULE_oC_NodePattern = 99;
    public static readonly RULE_oC_PatternElementChain = 100;
    public static readonly RULE_oC_RelationshipPattern = 101;
    public static readonly RULE_oC_RelationshipDetail = 102;
    public static readonly RULE_kU_Properties = 103;
    public static readonly RULE_oC_RelationshipTypes = 104;
    public static readonly RULE_oC_NodeLabels = 105;
    public static readonly RULE_oC_NodeLabel = 106;
    public static readonly RULE_kU_RecursiveDetail = 107;
    public static readonly RULE_kU_RecursiveType = 108;
    public static readonly RULE_oC_RangeLiteral = 109;
    public static readonly RULE_kU_RecursiveComprehension = 110;
    public static readonly RULE_kU_RecursiveProjectionItems = 111;
    public static readonly RULE_oC_LowerBound = 112;
    public static readonly RULE_oC_UpperBound = 113;
    public static readonly RULE_oC_LabelName = 114;
    public static readonly RULE_oC_RelTypeName = 115;
    public static readonly RULE_oC_Expression = 116;
    public static readonly RULE_oC_OrExpression = 117;
    public static readonly RULE_oC_XorExpression = 118;
    public static readonly RULE_oC_AndExpression = 119;
    public static readonly RULE_oC_NotExpression = 120;
    public static readonly RULE_oC_ComparisonExpression = 121;
    public static readonly RULE_kU_ComparisonOperator = 122;
    public static readonly RULE_kU_BitwiseOrOperatorExpression = 123;
    public static readonly RULE_kU_BitwiseAndOperatorExpression = 124;
    public static readonly RULE_kU_BitShiftOperatorExpression = 125;
    public static readonly RULE_kU_BitShiftOperator = 126;
    public static readonly RULE_oC_AddOrSubtractExpression = 127;
    public static readonly RULE_kU_AddOrSubtractOperator = 128;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 129;
    public static readonly RULE_kU_MultiplyDivideModuloOperator = 130;
    public static readonly RULE_oC_PowerOfExpression = 131;
    public static readonly RULE_oC_StringListNullOperatorExpression = 132;
    public static readonly RULE_oC_ListOperatorExpression = 133;
    public static readonly RULE_oC_StringOperatorExpression = 134;
    public static readonly RULE_oC_RegularExpression = 135;
    public static readonly RULE_oC_NullOperatorExpression = 136;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 137;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 138;
    public static readonly RULE_oC_Atom = 139;
    public static readonly RULE_oC_Quantifier = 140;
    public static readonly RULE_oC_FilterExpression = 141;
    public static readonly RULE_oC_IdInColl = 142;
    public static readonly RULE_oC_Literal = 143;
    public static readonly RULE_oC_BooleanLiteral = 144;
    public static readonly RULE_oC_ListLiteral = 145;
    public static readonly RULE_kU_ListEntry = 146;
    public static readonly RULE_kU_StructLiteral = 147;
    public static readonly RULE_kU_StructField = 148;
    public static readonly RULE_oC_ParenthesizedExpression = 149;
    public static readonly RULE_oC_FunctionInvocation = 150;
    public static readonly RULE_oC_FunctionName = 151;
    public static readonly RULE_kU_FunctionParameter = 152;
    public static readonly RULE_kU_LambdaParameter = 153;
    public static readonly RULE_kU_LambdaVars = 154;
    public static readonly RULE_oC_PathPatterns = 155;
    public static readonly RULE_oC_ExistCountSubquery = 156;
    public static readonly RULE_oC_PropertyLookup = 157;
    public static readonly RULE_oC_CaseExpression = 158;
    public static readonly RULE_oC_CaseAlternative = 159;
    public static readonly RULE_oC_Variable = 160;
    public static readonly RULE_oC_NumberLiteral = 161;
    public static readonly RULE_oC_Parameter = 162;
    public static readonly RULE_oC_PropertyExpression = 163;
    public static readonly RULE_oC_PropertyKeyName = 164;
    public static readonly RULE_oC_IntegerLiteral = 165;
    public static readonly RULE_oC_DoubleLiteral = 166;
    public static readonly RULE_oC_SchemaName = 167;
    public static readonly RULE_oC_SymbolicName = 168;
    public static readonly RULE_kU_NonReservedKeywords = 169;
    public static readonly RULE_oC_LeftArrowHead = 170;
    public static readonly RULE_oC_RightArrowHead = 171;
    public static readonly RULE_oC_Dash = 172;

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
        null, null, null, null, null, null, null, null, "'*'", null, "'!='", 
        "':'", "'-'", "'!'", null, null, null, null, null, null, null, null, 
        "'0'"
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
        "WSHORTEST", "XOR", "SINGLE", "YIELD", "DECIMAL", "STAR", "L_SKIP", 
        "INVALID_NOT_EQUAL", "COLON", "MINUS", "FACTORIAL", "StringLiteral", 
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
        "kU_IncrementBy", "kU_MinValue", "kU_MaxValue", "kU_StartWith", 
        "kU_Cycle", "kU_IfExists", "kU_Drop", "kU_AlterTable", "kU_AlterOptions", 
        "kU_AddProperty", "kU_Default", "kU_DropProperty", "kU_RenameTable", 
        "kU_RenameProperty", "kU_AddFromToConnection", "kU_DropFromToConnection", 
        "kU_ColumnDefinitions", "kU_ColumnDefinition", "kU_PropertyDefinitions", 
        "kU_PropertyDefinition", "kU_CreateNodeConstraint", "kU_DataType", 
        "kU_ListIdentifiers", "kU_ListIdentifier", "oC_AnyCypherOption", 
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
            this.state = 346;
            this.oC_Cypher();
            this.state = 357;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 348;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 347;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 350;
                    this.match(CypherParser.T__0);
                    this.state = 352;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                    case 1:
                        {
                        this.state = 351;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    this.state = 354;
                    this.oC_Cypher();
                    }
                    }
                }
                this.state = 359;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            }
            this.state = 361;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 360;
                this.match(CypherParser.SP);
                }
            }

            this.state = 363;
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
            this.state = 366;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===84 || _la===123) {
                {
                this.state = 365;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 369;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 368;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 371;
            this.oC_Statement();
            }
            this.state = 376;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
            case 1:
                {
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 372;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 375;
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
            this.state = 398;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 378;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 379;
                this.kU_CreateNodeTable();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 380;
                this.kU_CreateRelTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 381;
                this.kU_CreateSequence();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 382;
                this.kU_CreateType();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 383;
                this.kU_Drop();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 384;
                this.kU_AlterTable();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 385;
                this.kU_CopyFrom();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 386;
                this.kU_CopyFromByColumn();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 387;
                this.kU_CopyTO();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 388;
                this.kU_StandaloneCall();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 389;
                this.kU_CreateMacro();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 390;
                this.kU_CommentOn();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 391;
                this.kU_Transaction();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 392;
                this.kU_Extension();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 393;
                this.kU_ExportDatabase();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 394;
                this.kU_ImportDatabase();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 395;
                this.kU_AttachDatabase();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 396;
                this.kU_DetachDatabase();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 397;
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
            this.state = 400;
            this.match(CypherParser.COPY);
            this.state = 401;
            this.match(CypherParser.SP);
            this.state = 402;
            this.oC_SchemaName();
            this.state = 404;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
            case 1:
                {
                this.state = 403;
                this.kU_ColumnNames();
                }
                break;
            }
            this.state = 406;
            this.match(CypherParser.SP);
            this.state = 407;
            this.match(CypherParser.FROM);
            this.state = 408;
            this.match(CypherParser.SP);
            this.state = 409;
            this.kU_ScanSource();
            this.state = 423;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                {
                this.state = 411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 410;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 413;
                this.match(CypherParser.T__1);
                this.state = 415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 414;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 417;
                this.kU_Options();
                this.state = 419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 418;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 421;
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
            this.state = 426;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 425;
                this.match(CypherParser.SP);
                }
            }

            this.state = 428;
            this.match(CypherParser.T__1);
            this.state = 430;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 429;
                this.match(CypherParser.SP);
                }
            }

            this.state = 449;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 4720651) !== 0)) {
                {
                this.state = 432;
                this.oC_SchemaName();
                this.state = 443;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 434;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 433;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 436;
                        this.match(CypherParser.T__3);
                        this.state = 438;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 437;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 440;
                        this.oC_SchemaName();
                        }
                        }
                    }
                    this.state = 445;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                }
                this.state = 447;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 446;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 451;
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
            this.state = 474;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 453;
                this.kU_FilePaths();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 454;
                this.match(CypherParser.T__1);
                this.state = 456;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 455;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 458;
                this.oC_Query();
                this.state = 460;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 459;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 462;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 464;
                this.oC_Parameter();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 465;
                this.oC_Variable();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 466;
                this.oC_Variable();
                this.state = 467;
                this.match(CypherParser.T__4);
                this.state = 469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 468;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 471;
                this.oC_SchemaName();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 473;
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
            this.state = 476;
            this.match(CypherParser.COPY);
            this.state = 477;
            this.match(CypherParser.SP);
            this.state = 478;
            this.oC_SchemaName();
            this.state = 479;
            this.match(CypherParser.SP);
            this.state = 480;
            this.match(CypherParser.FROM);
            this.state = 481;
            this.match(CypherParser.SP);
            this.state = 482;
            this.match(CypherParser.T__1);
            this.state = 484;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 483;
                this.match(CypherParser.SP);
                }
            }

            this.state = 486;
            this.match(CypherParser.StringLiteral);
            this.state = 497;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4 || _la===179) {
                {
                {
                this.state = 488;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 487;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 490;
                this.match(CypherParser.T__3);
                this.state = 492;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 491;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 494;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 499;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 500;
            this.match(CypherParser.T__2);
            this.state = 501;
            this.match(CypherParser.SP);
            this.state = 502;
            this.match(CypherParser.BY);
            this.state = 503;
            this.match(CypherParser.SP);
            this.state = 504;
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
            this.state = 506;
            this.match(CypherParser.COPY);
            this.state = 507;
            this.match(CypherParser.SP);
            this.state = 508;
            this.match(CypherParser.T__1);
            this.state = 510;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 509;
                this.match(CypherParser.SP);
                }
            }

            this.state = 512;
            this.oC_Query();
            this.state = 514;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 513;
                this.match(CypherParser.SP);
                }
            }

            this.state = 516;
            this.match(CypherParser.T__2);
            this.state = 517;
            this.match(CypherParser.SP);
            this.state = 518;
            this.match(CypherParser.TO);
            this.state = 519;
            this.match(CypherParser.SP);
            this.state = 520;
            this.match(CypherParser.StringLiteral);
            this.state = 534;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
            case 1:
                {
                this.state = 522;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 521;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 524;
                this.match(CypherParser.T__1);
                this.state = 526;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 525;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 528;
                this.kU_Options();
                this.state = 530;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 529;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 532;
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
            this.state = 536;
            this.match(CypherParser.EXPORT);
            this.state = 537;
            this.match(CypherParser.SP);
            this.state = 538;
            this.match(CypherParser.DATABASE);
            this.state = 539;
            this.match(CypherParser.SP);
            this.state = 540;
            this.match(CypherParser.StringLiteral);
            this.state = 554;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
            case 1:
                {
                this.state = 542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 541;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 544;
                this.match(CypherParser.T__1);
                this.state = 546;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 545;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 548;
                this.kU_Options();
                this.state = 550;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 549;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 552;
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
            this.state = 556;
            this.match(CypherParser.IMPORT);
            this.state = 557;
            this.match(CypherParser.SP);
            this.state = 558;
            this.match(CypherParser.DATABASE);
            this.state = 559;
            this.match(CypherParser.SP);
            this.state = 560;
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
            this.state = 562;
            this.match(CypherParser.ATTACH);
            this.state = 563;
            this.match(CypherParser.SP);
            this.state = 564;
            this.match(CypherParser.StringLiteral);
            this.state = 569;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
            case 1:
                {
                this.state = 565;
                this.match(CypherParser.SP);
                this.state = 566;
                this.match(CypherParser.AS);
                this.state = 567;
                this.match(CypherParser.SP);
                this.state = 568;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 571;
            this.match(CypherParser.SP);
            this.state = 572;
            this.match(CypherParser.T__1);
            this.state = 574;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 573;
                this.match(CypherParser.SP);
                }
            }

            this.state = 576;
            this.match(CypherParser.DBTYPE);
            this.state = 577;
            this.match(CypherParser.SP);
            this.state = 578;
            this.oC_SymbolicName();
            this.state = 587;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
            case 1:
                {
                this.state = 580;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 579;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 582;
                this.match(CypherParser.T__3);
                this.state = 584;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 583;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 586;
                this.kU_Options();
                }
                break;
            }
            this.state = 590;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 589;
                this.match(CypherParser.SP);
                }
            }

            this.state = 592;
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
            this.state = 613;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 594;
                this.oC_SymbolicName();
                this.state = 608;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
                case 1:
                    {
                    this.state = 596;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 595;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 598;
                    this.match(CypherParser.T__5);
                    this.state = 600;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 599;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                case 2:
                    {
                    this.state = 605;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===179) {
                        {
                        {
                        this.state = 602;
                        this.match(CypherParser.SP);
                        }
                        }
                        this.state = 607;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                    break;
                }
                this.state = 610;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 612;
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
            this.state = 615;
            this.kU_Option();
            this.state = 626;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 617;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 616;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 619;
                    this.match(CypherParser.T__3);
                    this.state = 621;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 620;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 623;
                    this.kU_Option();
                    }
                    }
                }
                this.state = 628;
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
            this.state = 629;
            this.match(CypherParser.DETACH);
            this.state = 630;
            this.match(CypherParser.SP);
            this.state = 631;
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
            this.state = 633;
            this.match(CypherParser.USE);
            this.state = 634;
            this.match(CypherParser.SP);
            this.state = 635;
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
            this.state = 652;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 637;
                this.match(CypherParser.CALL);
                this.state = 638;
                this.match(CypherParser.SP);
                this.state = 639;
                this.oC_SymbolicName();
                this.state = 641;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 640;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 643;
                this.match(CypherParser.T__5);
                this.state = 645;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 644;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 647;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 649;
                this.match(CypherParser.CALL);
                this.state = 650;
                this.match(CypherParser.SP);
                this.state = 651;
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
            this.state = 654;
            this.match(CypherParser.COMMENT);
            this.state = 655;
            this.match(CypherParser.SP);
            this.state = 656;
            this.match(CypherParser.ON);
            this.state = 657;
            this.match(CypherParser.SP);
            this.state = 658;
            this.match(CypherParser.TABLE);
            this.state = 659;
            this.match(CypherParser.SP);
            this.state = 660;
            this.oC_SchemaName();
            this.state = 661;
            this.match(CypherParser.SP);
            this.state = 662;
            this.match(CypherParser.IS);
            this.state = 663;
            this.match(CypherParser.SP);
            this.state = 664;
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
            this.state = 666;
            this.match(CypherParser.CREATE);
            this.state = 667;
            this.match(CypherParser.SP);
            this.state = 668;
            this.match(CypherParser.MACRO);
            this.state = 669;
            this.match(CypherParser.SP);
            this.state = 670;
            this.oC_FunctionName();
            this.state = 672;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 671;
                this.match(CypherParser.SP);
                }
            }

            this.state = 674;
            this.match(CypherParser.T__1);
            this.state = 676;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
            case 1:
                {
                this.state = 675;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 679;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
            case 1:
                {
                this.state = 678;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 682;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
            case 1:
                {
                this.state = 681;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 685;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 4720651) !== 0)) {
                {
                this.state = 684;
                this.kU_DefaultArg();
                }
            }

            this.state = 697;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 688;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 687;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 690;
                    this.match(CypherParser.T__3);
                    this.state = 692;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 691;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 694;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 699;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
            }
            this.state = 701;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 700;
                this.match(CypherParser.SP);
                }
            }

            this.state = 703;
            this.match(CypherParser.T__2);
            this.state = 704;
            this.match(CypherParser.SP);
            this.state = 705;
            this.match(CypherParser.AS);
            this.state = 706;
            this.match(CypherParser.SP);
            this.state = 707;
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
            this.state = 709;
            this.oC_SymbolicName();
            this.state = 720;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 711;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 710;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 713;
                    this.match(CypherParser.T__3);
                    this.state = 715;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 714;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 717;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 722;
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
            this.state = 723;
            this.oC_SymbolicName();
            this.state = 725;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 724;
                this.match(CypherParser.SP);
                }
            }

            this.state = 727;
            this.match(CypherParser.COLON);
            this.state = 728;
            this.match(CypherParser.T__5);
            this.state = 730;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 729;
                this.match(CypherParser.SP);
                }
            }

            this.state = 732;
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
            this.state = 767;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 734;
                this.match(CypherParser.T__6);
                this.state = 736;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 735;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 738;
                this.match(CypherParser.StringLiteral);
                this.state = 749;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4 || _la===179) {
                    {
                    {
                    this.state = 740;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 739;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 742;
                    this.match(CypherParser.T__3);
                    this.state = 744;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 743;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 746;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 751;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 752;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 753;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 754;
                this.match(CypherParser.GLOB);
                this.state = 756;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 755;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 758;
                this.match(CypherParser.T__1);
                this.state = 760;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 759;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 762;
                this.match(CypherParser.StringLiteral);
                this.state = 764;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 763;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 766;
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
            this.state = 769;
            this.match(CypherParser.IF);
            this.state = 770;
            this.match(CypherParser.SP);
            this.state = 771;
            this.match(CypherParser.NOT);
            this.state = 772;
            this.match(CypherParser.SP);
            this.state = 773;
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
            this.state = 775;
            this.match(CypherParser.CREATE);
            this.state = 776;
            this.match(CypherParser.SP);
            this.state = 777;
            this.match(CypherParser.NODE);
            this.state = 778;
            this.match(CypherParser.SP);
            this.state = 779;
            this.match(CypherParser.TABLE);
            this.state = 780;
            this.match(CypherParser.SP);
            this.state = 784;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
            case 1:
                {
                this.state = 781;
                this.kU_IfNotExists();
                this.state = 782;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 786;
            this.oC_SchemaName();
            this.state = 814;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
            case 1:
                {
                this.state = 788;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 787;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 790;
                this.match(CypherParser.T__1);
                this.state = 792;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 791;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 794;
                this.kU_PropertyDefinitions();
                this.state = 796;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
                case 1:
                    {
                    this.state = 795;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 803;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===4) {
                    {
                    this.state = 798;
                    this.match(CypherParser.T__3);
                    this.state = 800;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 799;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 802;
                    this.kU_CreateNodeConstraint();
                    }
                }

                this.state = 806;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 805;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 808;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                {
                this.state = 810;
                this.match(CypherParser.SP);
                this.state = 811;
                this.match(CypherParser.AS);
                this.state = 812;
                this.match(CypherParser.SP);
                this.state = 813;
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
            this.state = 816;
            this.match(CypherParser.CREATE);
            this.state = 817;
            this.match(CypherParser.SP);
            this.state = 818;
            this.match(CypherParser.REL);
            this.state = 819;
            this.match(CypherParser.SP);
            this.state = 820;
            this.match(CypherParser.TABLE);
            this.state = 823;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
            case 1:
                {
                this.state = 821;
                this.match(CypherParser.SP);
                this.state = 822;
                this.match(CypherParser.GROUP);
                }
                break;
            }
            this.state = 827;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
            case 1:
                {
                this.state = 825;
                this.match(CypherParser.SP);
                this.state = 826;
                this.kU_IfNotExists();
                }
                break;
            }
            this.state = 829;
            this.match(CypherParser.SP);
            this.state = 830;
            this.oC_SchemaName();
            this.state = 832;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 831;
                this.match(CypherParser.SP);
                }
            }

            this.state = 834;
            this.match(CypherParser.T__1);
            this.state = 836;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 835;
                this.match(CypherParser.SP);
                }
            }

            this.state = 838;
            this.kU_FromToConnections();
            this.state = 840;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 839;
                this.match(CypherParser.SP);
                }
            }

            this.state = 868;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
            case 1:
                {
                this.state = 850;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
                case 1:
                    {
                    this.state = 842;
                    this.match(CypherParser.T__3);
                    this.state = 844;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 843;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 846;
                    this.kU_PropertyDefinitions();
                    this.state = 848;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 847;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 860;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===4) {
                    {
                    this.state = 852;
                    this.match(CypherParser.T__3);
                    this.state = 854;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 853;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 856;
                    this.oC_SymbolicName();
                    this.state = 858;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 857;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 862;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                {
                this.state = 863;
                this.match(CypherParser.T__2);
                this.state = 864;
                this.match(CypherParser.SP);
                this.state = 865;
                this.match(CypherParser.AS);
                this.state = 866;
                this.match(CypherParser.SP);
                this.state = 867;
                this.oC_Query();
                }
                break;
            }
            this.state = 885;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
            case 1:
                {
                this.state = 870;
                this.match(CypherParser.SP);
                this.state = 871;
                this.match(CypherParser.WITH);
                this.state = 873;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 872;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 875;
                this.match(CypherParser.T__1);
                this.state = 877;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 876;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 879;
                this.kU_Options();
                this.state = 881;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 880;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 883;
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
            this.state = 887;
            this.kU_FromToConnection();
            this.state = 898;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 104, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 889;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 888;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 891;
                    this.match(CypherParser.T__3);
                    this.state = 893;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 892;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 895;
                    this.kU_FromToConnection();
                    }
                    }
                }
                this.state = 900;
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
            this.state = 901;
            this.match(CypherParser.FROM);
            this.state = 902;
            this.match(CypherParser.SP);
            this.state = 903;
            this.oC_SchemaName();
            this.state = 904;
            this.match(CypherParser.SP);
            this.state = 905;
            this.match(CypherParser.TO);
            this.state = 906;
            this.match(CypherParser.SP);
            this.state = 907;
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
            this.state = 909;
            this.match(CypherParser.CREATE);
            this.state = 910;
            this.match(CypherParser.SP);
            this.state = 911;
            this.match(CypherParser.SEQUENCE);
            this.state = 912;
            this.match(CypherParser.SP);
            this.state = 916;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
            case 1:
                {
                this.state = 913;
                this.kU_IfNotExists();
                this.state = 914;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 918;
            this.oC_SchemaName();
            this.state = 923;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 919;
                    this.match(CypherParser.SP);
                    this.state = 920;
                    this.kU_SequenceOptions();
                    }
                    }
                }
                this.state = 925;
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
            this.state = 926;
            this.match(CypherParser.CREATE);
            this.state = 927;
            this.match(CypherParser.SP);
            this.state = 928;
            this.match(CypherParser.TYPE);
            this.state = 929;
            this.match(CypherParser.SP);
            this.state = 930;
            this.oC_SchemaName();
            this.state = 931;
            this.match(CypherParser.SP);
            this.state = 932;
            this.match(CypherParser.AS);
            this.state = 933;
            this.match(CypherParser.SP);
            this.state = 934;
            this.kU_DataType(0);
            this.state = 936;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
            case 1:
                {
                this.state = 935;
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
            this.state = 943;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 938;
                this.kU_IncrementBy();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 939;
                this.kU_MinValue();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 940;
                this.kU_MaxValue();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 941;
                this.kU_StartWith();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 942;
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
            this.state = 945;
            this.match(CypherParser.INCREMENT);
            this.state = 946;
            this.match(CypherParser.SP);
            this.state = 949;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===57) {
                {
                this.state = 947;
                this.match(CypherParser.BY);
                this.state = 948;
                this.match(CypherParser.SP);
                }
            }

            this.state = 952;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===162) {
                {
                this.state = 951;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 954;
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
            this.state = 965;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 956;
                this.match(CypherParser.NO);
                this.state = 957;
                this.match(CypherParser.SP);
                this.state = 958;
                this.match(CypherParser.MINVALUE);
                }
                }
                break;
            case CypherParser.MINVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 959;
                this.match(CypherParser.MINVALUE);
                this.state = 960;
                this.match(CypherParser.SP);
                this.state = 962;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===162) {
                    {
                    this.state = 961;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 964;
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
            this.state = 976;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 967;
                this.match(CypherParser.NO);
                this.state = 968;
                this.match(CypherParser.SP);
                this.state = 969;
                this.match(CypherParser.MAXVALUE);
                }
                }
                break;
            case CypherParser.MAXVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 970;
                this.match(CypherParser.MAXVALUE);
                this.state = 971;
                this.match(CypherParser.SP);
                this.state = 973;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===162) {
                    {
                    this.state = 972;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 975;
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
            this.state = 978;
            this.match(CypherParser.START);
            this.state = 979;
            this.match(CypherParser.SP);
            this.state = 982;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===151) {
                {
                this.state = 980;
                this.match(CypherParser.WITH);
                this.state = 981;
                this.match(CypherParser.SP);
                }
            }

            this.state = 985;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===162) {
                {
                this.state = 984;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 987;
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
            this.state = 991;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===112) {
                {
                this.state = 989;
                this.match(CypherParser.NO);
                this.state = 990;
                this.match(CypherParser.SP);
                }
            }

            this.state = 993;
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
            this.state = 995;
            this.match(CypherParser.IF);
            this.state = 996;
            this.match(CypherParser.SP);
            this.state = 997;
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
            this.state = 999;
            this.match(CypherParser.DROP);
            this.state = 1000;
            this.match(CypherParser.SP);
            this.state = 1001;
            _la = this._input.LA(1);
            if(!(_la===131 || _la===137)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1002;
            this.match(CypherParser.SP);
            this.state = 1006;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
            case 1:
                {
                this.state = 1003;
                this.kU_IfExists();
                this.state = 1004;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1008;
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
            this.state = 1010;
            this.match(CypherParser.ALTER);
            this.state = 1011;
            this.match(CypherParser.SP);
            this.state = 1012;
            this.match(CypherParser.TABLE);
            this.state = 1013;
            this.match(CypherParser.SP);
            this.state = 1014;
            this.oC_SchemaName();
            this.state = 1015;
            this.match(CypherParser.SP);
            this.state = 1016;
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
            this.state = 1024;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1018;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1019;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1020;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1021;
                this.kU_RenameProperty();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1022;
                this.kU_AddFromToConnection();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1023;
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
        this.enterRule(localctx, 76, CypherParser.RULE_kU_AddProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1026;
            this.match(CypherParser.ADD);
            this.state = 1027;
            this.match(CypherParser.SP);
            this.state = 1031;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
            case 1:
                {
                this.state = 1028;
                this.kU_IfNotExists();
                this.state = 1029;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1033;
            this.oC_PropertyKeyName();
            this.state = 1034;
            this.match(CypherParser.SP);
            this.state = 1035;
            this.kU_DataType(0);
            this.state = 1038;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
            case 1:
                {
                this.state = 1036;
                this.match(CypherParser.SP);
                this.state = 1037;
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
            this.state = 1040;
            this.match(CypherParser.DEFAULT);
            this.state = 1041;
            this.match(CypherParser.SP);
            this.state = 1042;
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
            this.state = 1044;
            this.match(CypherParser.DROP);
            this.state = 1045;
            this.match(CypherParser.SP);
            this.state = 1049;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
            case 1:
                {
                this.state = 1046;
                this.kU_IfExists();
                this.state = 1047;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1051;
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
            this.state = 1053;
            this.match(CypherParser.RENAME);
            this.state = 1054;
            this.match(CypherParser.SP);
            this.state = 1055;
            this.match(CypherParser.TO);
            this.state = 1056;
            this.match(CypherParser.SP);
            this.state = 1057;
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
            this.state = 1059;
            this.match(CypherParser.RENAME);
            this.state = 1060;
            this.match(CypherParser.SP);
            this.state = 1061;
            this.oC_PropertyKeyName();
            this.state = 1062;
            this.match(CypherParser.SP);
            this.state = 1063;
            this.match(CypherParser.TO);
            this.state = 1064;
            this.match(CypherParser.SP);
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
    public kU_AddFromToConnection(): KU_AddFromToConnectionContext {
        let localctx: KU_AddFromToConnectionContext = new KU_AddFromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 86, CypherParser.RULE_kU_AddFromToConnection);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1067;
            this.match(CypherParser.ADD);
            this.state = 1068;
            this.match(CypherParser.SP);
            this.state = 1072;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===96) {
                {
                this.state = 1069;
                this.kU_IfNotExists();
                this.state = 1070;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1074;
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
        this.enterRule(localctx, 88, CypherParser.RULE_kU_DropFromToConnection);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1076;
            this.match(CypherParser.DROP);
            this.state = 1077;
            this.match(CypherParser.SP);
            this.state = 1081;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===96) {
                {
                this.state = 1078;
                this.kU_IfExists();
                this.state = 1079;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1083;
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
        this.enterRule(localctx, 90, CypherParser.RULE_kU_ColumnDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1085;
            this.kU_ColumnDefinition();
            this.state = 1096;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 127, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1087;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1086;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1089;
                    this.match(CypherParser.T__3);
                    this.state = 1091;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1090;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1093;
                    this.kU_ColumnDefinition();
                    }
                    }
                }
                this.state = 1098;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 127, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 92, CypherParser.RULE_kU_ColumnDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1099;
            this.oC_PropertyKeyName();
            this.state = 1100;
            this.match(CypherParser.SP);
            this.state = 1101;
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
        this.enterRule(localctx, 94, CypherParser.RULE_kU_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1103;
            this.kU_PropertyDefinition();
            this.state = 1114;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 130, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1105;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1104;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1107;
                    this.match(CypherParser.T__3);
                    this.state = 1109;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1108;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1111;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 1116;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 130, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 96, CypherParser.RULE_kU_PropertyDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1117;
            this.kU_ColumnDefinition();
            this.state = 1120;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
            case 1:
                {
                this.state = 1118;
                this.match(CypherParser.SP);
                this.state = 1119;
                this.kU_Default();
                }
                break;
            }
            this.state = 1126;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
            case 1:
                {
                this.state = 1122;
                this.match(CypherParser.SP);
                this.state = 1123;
                this.match(CypherParser.PRIMARY);
                this.state = 1124;
                this.match(CypherParser.SP);
                this.state = 1125;
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
        this.enterRule(localctx, 98, CypherParser.RULE_kU_CreateNodeConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1128;
            this.match(CypherParser.PRIMARY);
            this.state = 1129;
            this.match(CypherParser.SP);
            this.state = 1130;
            this.match(CypherParser.KEY);
            this.state = 1132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
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
            if (_la===179) {
                {
                this.state = 1135;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1138;
            this.oC_PropertyKeyName();
            this.state = 1140;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1139;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1142;
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
        let _startState = 100;
        this.enterRecursionRule(localctx, 100, CypherParser.RULE_kU_DataType, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1232;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
            case 1:
                {
                this.state = 1145;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 1146;
                this.match(CypherParser.UNION);
                this.state = 1148;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1147;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1150;
                this.match(CypherParser.T__1);
                this.state = 1152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1151;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1154;
                this.kU_ColumnDefinitions();
                this.state = 1156;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1155;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1158;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                {
                this.state = 1160;
                this.match(CypherParser.STRUCT);
                this.state = 1162;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
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
                if (_la===179) {
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
                if (_la===179) {
                    {
                    this.state = 1169;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1172;
                this.match(CypherParser.T__2);
                }
                break;
            case 4:
                {
                this.state = 1174;
                this.oC_SymbolicName();
                this.state = 1176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
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
                if (_la===179) {
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
                if (_la===179) {
                    {
                    this.state = 1183;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1186;
                this.match(CypherParser.T__2);
                }
                break;
            case 5:
                {
                this.state = 1188;
                this.oC_SymbolicName();
                this.state = 1190;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
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
                if (_la===179) {
                    {
                    this.state = 1193;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1196;
                this.kU_DataType(0);
                this.state = 1198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1197;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1200;
                this.match(CypherParser.T__3);
                this.state = 1202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1201;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1204;
                this.kU_DataType(0);
                this.state = 1206;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1205;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1208;
                this.match(CypherParser.T__2);
                }
                break;
            case 6:
                {
                this.state = 1210;
                this.match(CypherParser.DECIMAL);
                this.state = 1212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1211;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1214;
                this.match(CypherParser.T__1);
                this.state = 1216;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1215;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1218;
                this.oC_IntegerLiteral();
                this.state = 1220;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1219;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1222;
                this.match(CypherParser.T__3);
                this.state = 1224;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1223;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1226;
                this.oC_IntegerLiteral();
                this.state = 1228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1227;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1230;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1238;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 156, this._ctx);
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
                    this.state = 1234;
                    if (!(this.precpred(this._ctx, 6))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                    }
                    this.state = 1235;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 1240;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public kU_ListIdentifiers(): KU_ListIdentifiersContext {
        let localctx: KU_ListIdentifiersContext = new KU_ListIdentifiersContext(this._ctx, this.state);
        this.enterRule(localctx, 102, CypherParser.RULE_kU_ListIdentifiers);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1241;
            this.kU_ListIdentifier();
            this.state = 1245;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1242;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 1247;
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
    public kU_ListIdentifier(): KU_ListIdentifierContext {
        let localctx: KU_ListIdentifierContext = new KU_ListIdentifierContext(this._ctx, this.state);
        this.enterRule(localctx, 104, CypherParser.RULE_kU_ListIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1248;
            this.match(CypherParser.T__6);
            this.state = 1250;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1249;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 1252;
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
        this.enterRule(localctx, 106, CypherParser.RULE_oC_AnyCypherOption);
        try {
            this.state = 1256;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1254;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1255;
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
        this.enterRule(localctx, 108, CypherParser.RULE_oC_Explain);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1258;
            this.match(CypherParser.EXPLAIN);
            this.state = 1261;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
            case 1:
                {
                this.state = 1259;
                this.match(CypherParser.SP);
                this.state = 1260;
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
        this.enterRule(localctx, 110, CypherParser.RULE_oC_Profile);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1263;
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
        this.enterRule(localctx, 112, CypherParser.RULE_kU_Transaction);
        try {
            this.state = 1278;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1265;
                this.match(CypherParser.BEGIN);
                this.state = 1266;
                this.match(CypherParser.SP);
                this.state = 1267;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1268;
                this.match(CypherParser.BEGIN);
                this.state = 1269;
                this.match(CypherParser.SP);
                this.state = 1270;
                this.match(CypherParser.TRANSACTION);
                this.state = 1271;
                this.match(CypherParser.SP);
                this.state = 1272;
                this.match(CypherParser.READ);
                this.state = 1273;
                this.match(CypherParser.SP);
                this.state = 1274;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1275;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1276;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1277;
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
        this.enterRule(localctx, 114, CypherParser.RULE_kU_Extension);
        try {
            this.state = 1284;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1280;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.FORCE:
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1281;
                this.kU_InstallExtension();
                }
                break;
            case CypherParser.UNINSTALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1282;
                this.kU_UninstallExtension();
                }
                break;
            case CypherParser.UPDATE:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1283;
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
        this.enterRule(localctx, 116, CypherParser.RULE_kU_LoadExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1286;
            this.match(CypherParser.LOAD);
            this.state = 1287;
            this.match(CypherParser.SP);
            this.state = 1290;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
            case 1:
                {
                this.state = 1288;
                this.match(CypherParser.EXTENSION);
                this.state = 1289;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1294;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 1292;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1293;
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
        this.enterRule(localctx, 118, CypherParser.RULE_kU_InstallExtension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1298;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===89) {
                {
                this.state = 1296;
                this.match(CypherParser.FORCE);
                this.state = 1297;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1300;
            this.match(CypherParser.INSTALL);
            this.state = 1301;
            this.match(CypherParser.SP);
            this.state = 1302;
            this.oC_Variable();
            this.state = 1307;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
            case 1:
                {
                this.state = 1303;
                this.match(CypherParser.SP);
                this.state = 1304;
                this.match(CypherParser.FROM);
                this.state = 1305;
                this.match(CypherParser.SP);
                this.state = 1306;
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
        this.enterRule(localctx, 120, CypherParser.RULE_kU_UninstallExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1309;
            this.match(CypherParser.UNINSTALL);
            this.state = 1310;
            this.match(CypherParser.SP);
            this.state = 1311;
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
        this.enterRule(localctx, 122, CypherParser.RULE_kU_UpdateExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1313;
            this.match(CypherParser.UPDATE);
            this.state = 1314;
            this.match(CypherParser.SP);
            this.state = 1315;
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
        this.enterRule(localctx, 124, CypherParser.RULE_oC_Query);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1317;
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
        this.enterRule(localctx, 126, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1340;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 171, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1319;
                this.oC_SingleQuery();
                this.state = 1326;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 168, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1321;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 1320;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1323;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 1328;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 168, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1333;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1329;
                        this.oC_Return();
                        this.state = 1331;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 1330;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1335;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1337;
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
        this.enterRule(localctx, 128, CypherParser.RULE_oC_Union);
        let _la: number;
        try {
            this.state = 1354;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1342;
                this.match(CypherParser.UNION);
                this.state = 1343;
                this.match(CypherParser.SP);
                this.state = 1344;
                this.match(CypherParser.ALL);
                this.state = 1346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1345;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1348;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1349;
                this.match(CypherParser.UNION);
                this.state = 1351;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1350;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1353;
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
        this.enterRule(localctx, 130, CypherParser.RULE_oC_SingleQuery);
        try {
            this.state = 1358;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1356;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1357;
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
        this.enterRule(localctx, 132, CypherParser.RULE_oC_SinglePartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1395;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1366;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 32777) !== 0) || _la===145) {
                    {
                    {
                    this.state = 1360;
                    this.oC_ReadingClause();
                    this.state = 1362;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1361;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1368;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1369;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 32777) !== 0) || _la===145) {
                    {
                    {
                    this.state = 1370;
                    this.oC_ReadingClause();
                    this.state = 1372;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1371;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1378;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1379;
                this.oC_UpdatingClause();
                this.state = 1386;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 181, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1381;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 1380;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1383;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1388;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 181, this._ctx);
                }
                this.state = 1393;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
                case 1:
                    {
                    this.state = 1390;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1389;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1392;
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
        this.enterRule(localctx, 134, CypherParser.RULE_oC_MultiPartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1401;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1397;
                    this.kU_QueryPart();
                    this.state = 1399;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1398;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1403;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 186, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1405;
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
        this.enterRule(localctx, 136, CypherParser.RULE_kU_QueryPart);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1413;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===58 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 32777) !== 0) || _la===145) {
                {
                {
                this.state = 1407;
                this.oC_ReadingClause();
                this.state = 1409;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1408;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1422;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 289) !== 0) || _la===109 || _la===132) {
                {
                {
                this.state = 1416;
                this.oC_UpdatingClause();
                this.state = 1418;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1417;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1425;
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
        this.enterRule(localctx, 138, CypherParser.RULE_oC_UpdatingClause);
        try {
            this.state = 1431;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1427;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1428;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1429;
                this.oC_Set();
                }
                break;
            case CypherParser.DELETE:
            case CypherParser.DETACH:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1430;
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
        this.enterRule(localctx, 140, CypherParser.RULE_oC_ReadingClause);
        try {
            this.state = 1437;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.MATCH:
            case CypherParser.OPTIONAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1433;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1434;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1435;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1436;
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
        this.enterRule(localctx, 142, CypherParser.RULE_kU_LoadFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1439;
            this.match(CypherParser.LOAD);
            this.state = 1457;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
            case 1:
                {
                this.state = 1440;
                this.match(CypherParser.SP);
                this.state = 1441;
                this.match(CypherParser.WITH);
                this.state = 1442;
                this.match(CypherParser.SP);
                this.state = 1443;
                this.match(CypherParser.HEADERS);
                this.state = 1445;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1444;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1447;
                this.match(CypherParser.T__1);
                this.state = 1449;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1448;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1451;
                this.kU_ColumnDefinitions();
                this.state = 1453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1452;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1455;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1459;
            this.match(CypherParser.SP);
            this.state = 1460;
            this.match(CypherParser.FROM);
            this.state = 1461;
            this.match(CypherParser.SP);
            this.state = 1462;
            this.kU_ScanSource();
            this.state = 1476;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
            case 1:
                {
                this.state = 1464;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1463;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1466;
                this.match(CypherParser.T__1);
                this.state = 1468;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1467;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1470;
                this.kU_Options();
                this.state = 1472;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1471;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1474;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1482;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
            case 1:
                {
                this.state = 1479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1478;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1481;
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
        this.enterRule(localctx, 144, CypherParser.RULE_oC_YieldItem);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1489;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
            case 1:
                {
                this.state = 1484;
                this.oC_Variable();
                this.state = 1485;
                this.match(CypherParser.SP);
                this.state = 1486;
                this.match(CypherParser.AS);
                this.state = 1487;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1491;
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
        this.enterRule(localctx, 146, CypherParser.RULE_oC_YieldItems);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1493;
            this.oC_YieldItem();
            this.state = 1504;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1495;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1494;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1497;
                    this.match(CypherParser.T__3);
                    this.state = 1499;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1498;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1501;
                    this.oC_YieldItem();
                    }
                    }
                }
                this.state = 1506;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 148, CypherParser.RULE_kU_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1507;
            this.match(CypherParser.CALL);
            this.state = 1508;
            this.match(CypherParser.SP);
            this.state = 1509;
            this.oC_FunctionInvocation();
            this.state = 1514;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
            case 1:
                {
                this.state = 1511;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1510;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1513;
                this.oC_Where();
                }
                break;
            }
            this.state = 1522;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
            case 1:
                {
                this.state = 1517;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1516;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1519;
                this.match(CypherParser.YIELD);
                this.state = 1520;
                this.match(CypherParser.SP);
                this.state = 1521;
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
        this.enterRule(localctx, 150, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1526;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===119) {
                {
                this.state = 1524;
                this.match(CypherParser.OPTIONAL);
                this.state = 1525;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1528;
            this.match(CypherParser.MATCH);
            this.state = 1530;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1529;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1532;
            this.oC_Pattern();
            this.state = 1535;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
            case 1:
                {
                this.state = 1533;
                this.match(CypherParser.SP);
                this.state = 1534;
                this.oC_Where();
                }
                break;
            }
            this.state = 1539;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 214, this._ctx) ) {
            case 1:
                {
                this.state = 1537;
                this.match(CypherParser.SP);
                this.state = 1538;
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
        this.enterRule(localctx, 152, CypherParser.RULE_kU_Hint);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1541;
            this.match(CypherParser.HINT);
            this.state = 1542;
            this.match(CypherParser.SP);
            this.state = 1543;
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
        let _startState = 154;
        this.enterRecursionRule(localctx, 154, CypherParser.RULE_kU_JoinNode, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1557;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__1:
                {
                this.state = 1546;
                this.match(CypherParser.T__1);
                this.state = 1548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1547;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1550;
                this.kU_JoinNode(0);
                this.state = 1552;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1551;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1554;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1556;
                this.oC_SchemaName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1575;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 220, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1573;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
                    case 1:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1559;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1560;
                        this.match(CypherParser.SP);
                        this.state = 1561;
                        this.match(CypherParser.JOIN);
                        this.state = 1562;
                        this.match(CypherParser.SP);
                        this.state = 1563;
                        this.kU_JoinNode(5);
                        }
                        break;
                    case 2:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1564;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1569;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                            case 1:
                                {
                                {
                                this.state = 1565;
                                this.match(CypherParser.SP);
                                this.state = 1566;
                                this.match(CypherParser.MULTI_JOIN);
                                this.state = 1567;
                                this.match(CypherParser.SP);
                                this.state = 1568;
                                this.oC_SchemaName();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 1571;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 218, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    }
                    }
                }
                this.state = 1577;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 220, this._ctx);
            }
            }
        }
        catch (re) {
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
        this.enterRule(localctx, 156, CypherParser.RULE_oC_Unwind);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1578;
            this.match(CypherParser.UNWIND);
            this.state = 1580;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1579;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1582;
            this.oC_Expression();
            this.state = 1583;
            this.match(CypherParser.SP);
            this.state = 1584;
            this.match(CypherParser.AS);
            this.state = 1585;
            this.match(CypherParser.SP);
            this.state = 1586;
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
        this.enterRule(localctx, 158, CypherParser.RULE_oC_Create);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1588;
            this.match(CypherParser.CREATE);
            this.state = 1590;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1589;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1592;
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
        this.enterRule(localctx, 160, CypherParser.RULE_oC_Merge);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1594;
            this.match(CypherParser.MERGE);
            this.state = 1596;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1595;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1598;
            this.oC_Pattern();
            this.state = 1603;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 224, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1599;
                    this.match(CypherParser.SP);
                    this.state = 1600;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1605;
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
    public oC_MergeAction(): OC_MergeActionContext {
        let localctx: OC_MergeActionContext = new OC_MergeActionContext(this._ctx, this.state);
        this.enterRule(localctx, 162, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1616;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1606;
                this.match(CypherParser.ON);
                this.state = 1607;
                this.match(CypherParser.SP);
                this.state = 1608;
                this.match(CypherParser.MATCH);
                this.state = 1609;
                this.match(CypherParser.SP);
                this.state = 1610;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1611;
                this.match(CypherParser.ON);
                this.state = 1612;
                this.match(CypherParser.SP);
                this.state = 1613;
                this.match(CypherParser.CREATE);
                this.state = 1614;
                this.match(CypherParser.SP);
                this.state = 1615;
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
        this.enterRule(localctx, 164, CypherParser.RULE_oC_Set);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1618;
            this.match(CypherParser.SET);
            this.state = 1620;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1619;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1622;
            this.oC_SetItem();
            this.state = 1633;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 229, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1624;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1623;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1626;
                    this.match(CypherParser.T__3);
                    this.state = 1628;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1627;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1630;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1635;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 229, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 166, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1636;
            this.oC_PropertyExpression();
            this.state = 1638;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1637;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1640;
            this.match(CypherParser.T__5);
            this.state = 1642;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1641;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1644;
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
        this.enterRule(localctx, 168, CypherParser.RULE_oC_Delete);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1648;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===77) {
                {
                this.state = 1646;
                this.match(CypherParser.DETACH);
                this.state = 1647;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1650;
            this.match(CypherParser.DELETE);
            this.state = 1652;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1651;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1654;
            this.oC_Expression();
            this.state = 1665;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 236, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1656;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
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
                    if (_la===179) {
                        {
                        this.state = 1659;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1662;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1667;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 236, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 170, CypherParser.RULE_oC_With);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1668;
            this.match(CypherParser.WITH);
            this.state = 1669;
            this.oC_ProjectionBody();
            this.state = 1674;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
            case 1:
                {
                this.state = 1671;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1670;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1673;
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
        this.enterRule(localctx, 172, CypherParser.RULE_oC_Return);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1676;
            this.match(CypherParser.RETURN);
            this.state = 1677;
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
        this.enterRule(localctx, 174, CypherParser.RULE_oC_ProjectionBody);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1683;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
            case 1:
                {
                this.state = 1680;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1679;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1682;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1685;
            this.match(CypherParser.SP);
            this.state = 1686;
            this.oC_ProjectionItems();
            this.state = 1689;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
            case 1:
                {
                this.state = 1687;
                this.match(CypherParser.SP);
                this.state = 1688;
                this.oC_Order();
                }
                break;
            }
            this.state = 1693;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
            case 1:
                {
                this.state = 1691;
                this.match(CypherParser.SP);
                this.state = 1692;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1697;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
            case 1:
                {
                this.state = 1695;
                this.match(CypherParser.SP);
                this.state = 1696;
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
        this.enterRule(localctx, 176, CypherParser.RULE_oC_ProjectionItems);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1727;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1699;
                this.match(CypherParser.STAR);
                this.state = 1710;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1701;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 1700;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1703;
                        this.match(CypherParser.T__3);
                        this.state = 1705;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 1704;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1707;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1712;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
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
                this.state = 1713;
                this.oC_ProjectionItem();
                this.state = 1724;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1715;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
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
                        if (_la===179) {
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
                    _alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
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
        this.enterRule(localctx, 178, CypherParser.RULE_oC_ProjectionItem);
        try {
            this.state = 1736;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 251, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1729;
                this.oC_Expression();
                this.state = 1730;
                this.match(CypherParser.SP);
                this.state = 1731;
                this.match(CypherParser.AS);
                this.state = 1732;
                this.match(CypherParser.SP);
                this.state = 1733;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1735;
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
        this.enterRule(localctx, 180, CypherParser.RULE_oC_Order);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1738;
            this.match(CypherParser.ORDER);
            this.state = 1739;
            this.match(CypherParser.SP);
            this.state = 1740;
            this.match(CypherParser.BY);
            this.state = 1741;
            this.match(CypherParser.SP);
            this.state = 1742;
            this.oC_SortItem();
            this.state = 1750;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 1743;
                this.match(CypherParser.T__3);
                this.state = 1745;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1744;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1747;
                this.oC_SortItem();
                }
                }
                this.state = 1752;
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
        this.enterRule(localctx, 182, CypherParser.RULE_oC_Skip);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1753;
            this.match(CypherParser.L_SKIP);
            this.state = 1754;
            this.match(CypherParser.SP);
            this.state = 1755;
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
        this.enterRule(localctx, 184, CypherParser.RULE_oC_Limit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1757;
            this.match(CypherParser.LIMIT);
            this.state = 1758;
            this.match(CypherParser.SP);
            this.state = 1759;
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
        this.enterRule(localctx, 186, CypherParser.RULE_oC_SortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1761;
            this.oC_Expression();
            this.state = 1766;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
            case 1:
                {
                this.state = 1763;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1762;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1765;
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
        this.enterRule(localctx, 188, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1768;
            this.match(CypherParser.WHERE);
            this.state = 1769;
            this.match(CypherParser.SP);
            this.state = 1770;
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
        this.enterRule(localctx, 190, CypherParser.RULE_oC_Pattern);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1772;
            this.oC_PatternPart();
            this.state = 1783;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 258, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1774;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1773;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1776;
                    this.match(CypherParser.T__3);
                    this.state = 1778;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1777;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1780;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1785;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 258, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 192, CypherParser.RULE_oC_PatternPart);
        let _la: number;
        try {
            this.state = 1797;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1786;
                this.oC_Variable();
                this.state = 1788;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1787;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1790;
                this.match(CypherParser.T__5);
                this.state = 1792;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1791;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1794;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1796;
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
        this.enterRule(localctx, 194, CypherParser.RULE_oC_AnonymousPatternPart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1799;
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
        this.enterRule(localctx, 196, CypherParser.RULE_oC_PatternElement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1815;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 264, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1801;
                this.oC_NodePattern();
                this.state = 1808;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 263, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1803;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 1802;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1805;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1810;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 263, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1811;
                this.match(CypherParser.T__1);
                this.state = 1812;
                this.oC_PatternElement();
                this.state = 1813;
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
        this.enterRule(localctx, 198, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1817;
            this.match(CypherParser.T__1);
            this.state = 1819;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1818;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1825;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 4720651) !== 0)) {
                {
                this.state = 1821;
                this.oC_Variable();
                this.state = 1823;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1822;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1831;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===161) {
                {
                this.state = 1827;
                this.oC_NodeLabels();
                this.state = 1829;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1828;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1837;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1833;
                this.kU_Properties();
                this.state = 1835;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1834;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1839;
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
        this.enterRule(localctx, 200, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1841;
            this.oC_RelationshipPattern();
            this.state = 1843;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1842;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1845;
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
        this.enterRule(localctx, 202, CypherParser.RULE_oC_RelationshipPattern);
        let _la: number;
        try {
            this.state = 1891;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 284, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1847;
                this.oC_LeftArrowHead();
                this.state = 1849;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1848;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1851;
                this.oC_Dash();
                this.state = 1853;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 274, this._ctx) ) {
                case 1:
                    {
                    this.state = 1852;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1856;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1855;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1859;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1858;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1861;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1863;
                this.oC_Dash();
                this.state = 1865;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 277, this._ctx) ) {
                case 1:
                    {
                    this.state = 1864;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1868;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1867;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1871;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1870;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1873;
                this.oC_Dash();
                this.state = 1875;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1874;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1877;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1879;
                this.oC_Dash();
                this.state = 1881;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 281, this._ctx) ) {
                case 1:
                    {
                    this.state = 1880;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1884;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1883;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1887;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1886;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1889;
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
        this.enterRule(localctx, 204, CypherParser.RULE_oC_RelationshipDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1893;
            this.match(CypherParser.T__6);
            this.state = 1895;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1894;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1901;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 4720651) !== 0)) {
                {
                this.state = 1897;
                this.oC_Variable();
                this.state = 1899;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1898;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1907;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===161) {
                {
                this.state = 1903;
                this.oC_RelationshipTypes();
                this.state = 1905;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1904;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1913;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===158) {
                {
                this.state = 1909;
                this.kU_RecursiveDetail();
                this.state = 1911;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1910;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1919;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1915;
                this.kU_Properties();
                this.state = 1917;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1916;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1921;
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
        this.enterRule(localctx, 206, CypherParser.RULE_kU_Properties);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1923;
            this.match(CypherParser.T__8);
            this.state = 1925;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1924;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1960;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 4720651) !== 0)) {
                {
                this.state = 1927;
                this.oC_PropertyKeyName();
                this.state = 1929;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1928;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1931;
                this.match(CypherParser.COLON);
                this.state = 1933;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1932;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1935;
                this.oC_Expression();
                this.state = 1937;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 1936;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1957;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 1939;
                    this.match(CypherParser.T__3);
                    this.state = 1941;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1940;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1943;
                    this.oC_PropertyKeyName();
                    this.state = 1945;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1944;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1947;
                    this.match(CypherParser.COLON);
                    this.state = 1949;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1948;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1951;
                    this.oC_Expression();
                    this.state = 1953;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1952;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1959;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1962;
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
        this.enterRule(localctx, 208, CypherParser.RULE_oC_RelationshipTypes);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1964;
            this.match(CypherParser.COLON);
            this.state = 1966;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1965;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1968;
            this.oC_RelTypeName();
            this.state = 1982;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 308, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1970;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1969;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1972;
                    this.match(CypherParser.T__10);
                    this.state = 1974;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===161) {
                        {
                        this.state = 1973;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 1977;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1976;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1979;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1984;
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
    public oC_NodeLabels(): OC_NodeLabelsContext {
        let localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this._ctx, this.state);
        this.enterRule(localctx, 210, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1985;
            this.oC_NodeLabel();
            this.state = 1992;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 310, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1987;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 1986;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1989;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1994;
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
    public oC_NodeLabel(): OC_NodeLabelContext {
        let localctx: OC_NodeLabelContext = new OC_NodeLabelContext(this._ctx, this.state);
        this.enterRule(localctx, 212, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1995;
            this.match(CypherParser.COLON);
            this.state = 1997;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 1996;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1999;
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
        this.enterRule(localctx, 214, CypherParser.RULE_kU_RecursiveDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2001;
            this.match(CypherParser.STAR);
            this.state = 2006;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 313, this._ctx) ) {
            case 1:
                {
                this.state = 2003;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2002;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2005;
                this.kU_RecursiveType();
                }
                break;
            }
            this.state = 2012;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 315, this._ctx) ) {
            case 1:
                {
                this.state = 2009;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 314, this._ctx) ) {
                case 1:
                    {
                    this.state = 2008;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2011;
                this.oC_RangeLiteral();
                }
                break;
            }
            this.state = 2018;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 317, this._ctx) ) {
            case 1:
                {
                this.state = 2015;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2014;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2017;
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
        this.enterRule(localctx, 216, CypherParser.RULE_kU_RecursiveType);
        let _la: number;
        try {
            this.state = 2044;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 322, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2022;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===49) {
                    {
                    this.state = 2020;
                    this.match(CypherParser.ALL);
                    this.state = 2021;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2024;
                this.match(CypherParser.WSHORTEST);
                this.state = 2026;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2025;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2028;
                this.match(CypherParser.T__1);
                this.state = 2030;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2029;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2032;
                this.oC_PropertyKeyName();
                this.state = 2034;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2033;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2036;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2038;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2039;
                this.match(CypherParser.ALL);
                this.state = 2040;
                this.match(CypherParser.SP);
                this.state = 2041;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2042;
                this.match(CypherParser.TRAIL);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2043;
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
        this.enterRule(localctx, 218, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.state = 2060;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 327, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2047;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2046;
                    this.oC_LowerBound();
                    }
                }

                this.state = 2050;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2049;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2052;
                this.match(CypherParser.T__11);
                this.state = 2054;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 325, this._ctx) ) {
                case 1:
                    {
                    this.state = 2053;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2057;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2056;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2059;
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
        this.enterRule(localctx, 220, CypherParser.RULE_kU_RecursiveComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2062;
            this.match(CypherParser.T__1);
            this.state = 2064;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2063;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2066;
            this.oC_Variable();
            this.state = 2068;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2067;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2070;
            this.match(CypherParser.T__3);
            this.state = 2072;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2071;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2074;
            this.oC_Variable();
            this.state = 2086;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 334, this._ctx) ) {
            case 1:
                {
                this.state = 2076;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2075;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2078;
                this.match(CypherParser.T__10);
                this.state = 2080;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2079;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2082;
                this.oC_Where();
                this.state = 2084;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 333, this._ctx) ) {
                case 1:
                    {
                    this.state = 2083;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                }
                break;
            }
            this.state = 2107;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===179) {
                {
                this.state = 2089;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2088;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2091;
                this.match(CypherParser.T__10);
                this.state = 2093;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2092;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2095;
                this.kU_RecursiveProjectionItems();
                this.state = 2097;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2096;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2099;
                this.match(CypherParser.T__3);
                this.state = 2101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2100;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2103;
                this.kU_RecursiveProjectionItems();
                this.state = 2105;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2104;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2109;
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
        this.enterRule(localctx, 222, CypherParser.RULE_kU_RecursiveProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2111;
            this.match(CypherParser.T__8);
            this.state = 2113;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 341, this._ctx) ) {
            case 1:
                {
                this.state = 2112;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 943013447) !== 0) || _la===178) {
                {
                this.state = 2115;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2118;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2121;
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
        this.enterRule(localctx, 224, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2123;
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
        this.enterRule(localctx, 226, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2125;
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
        this.enterRule(localctx, 228, CypherParser.RULE_oC_LabelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2127;
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
        this.enterRule(localctx, 230, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2129;
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
        this.enterRule(localctx, 232, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2131;
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
        this.enterRule(localctx, 234, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2133;
            this.oC_XorExpression();
            this.state = 2140;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 344, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2134;
                    this.match(CypherParser.SP);
                    this.state = 2135;
                    this.match(CypherParser.OR);
                    this.state = 2136;
                    this.match(CypherParser.SP);
                    this.state = 2137;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 2142;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 344, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 236, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2143;
            this.oC_AndExpression();
            this.state = 2150;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 345, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2144;
                    this.match(CypherParser.SP);
                    this.state = 2145;
                    this.match(CypherParser.XOR);
                    this.state = 2146;
                    this.match(CypherParser.SP);
                    this.state = 2147;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 2152;
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
    public oC_AndExpression(): OC_AndExpressionContext {
        let localctx: OC_AndExpressionContext = new OC_AndExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 238, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2153;
            this.oC_NotExpression();
            this.state = 2160;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2154;
                    this.match(CypherParser.SP);
                    this.state = 2155;
                    this.match(CypherParser.AND);
                    this.state = 2156;
                    this.match(CypherParser.SP);
                    this.state = 2157;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 2162;
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
    public oC_NotExpression(): OC_NotExpressionContext {
        let localctx: OC_NotExpressionContext = new OC_NotExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 240, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2169;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===114) {
                {
                {
                this.state = 2163;
                this.match(CypherParser.NOT);
                this.state = 2165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2164;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2171;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2172;
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
        this.enterRule(localctx, 242, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 2222;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 359, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2174;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2184;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 351, this._ctx) ) {
                case 1:
                    {
                    this.state = 2176;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2175;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2178;
                    this.kU_ComparisonOperator();
                    this.state = 2180;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2179;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2182;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2186;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 2188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2187;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2190;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 2192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2191;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2194;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2198;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2200;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2199;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2202;
                this.kU_ComparisonOperator();
                this.state = 2204;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2203;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2206;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2216;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2208;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 2207;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2210;
                        this.kU_ComparisonOperator();
                        this.state = 2212;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 2211;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2214;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2218;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 358, this._ctx);
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
        this.enterRule(localctx, 244, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2224;
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
        this.enterRule(localctx, 246, CypherParser.RULE_kU_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2226;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 2237;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 362, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2228;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2227;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2230;
                    this.match(CypherParser.T__10);
                    this.state = 2232;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2231;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2234;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 2239;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 362, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 248, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2240;
            this.kU_BitShiftOperatorExpression();
            this.state = 2251;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 365, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2242;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2241;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2244;
                    this.match(CypherParser.T__17);
                    this.state = 2246;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2245;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2248;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 2253;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 365, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 250, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2254;
            this.oC_AddOrSubtractExpression();
            this.state = 2266;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 368, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2256;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2255;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2258;
                    this.kU_BitShiftOperator();
                    this.state = 2260;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2259;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2262;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 2268;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 368, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 252, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2269;
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
        this.enterRule(localctx, 254, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2271;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 2283;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 371, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2273;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2272;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2275;
                    this.kU_AddOrSubtractOperator();
                    this.state = 2277;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2276;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2279;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 2285;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 371, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 256, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2286;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===162)) {
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
        this.enterRule(localctx, 258, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2288;
            this.oC_PowerOfExpression();
            this.state = 2300;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 374, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2290;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2289;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2292;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 2294;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2293;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2296;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 2302;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 374, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 260, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2303;
            _la = this._input.LA(1);
            if(!(_la===22 || _la===23 || _la===158)) {
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
        this.enterRule(localctx, 262, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2305;
            this.oC_StringListNullOperatorExpression();
            this.state = 2316;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 377, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2307;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2306;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2309;
                    this.match(CypherParser.T__23);
                    this.state = 2311;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2310;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2313;
                    this.oC_StringListNullOperatorExpression();
                    }
                    }
                }
                this.state = 2318;
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
    public oC_StringListNullOperatorExpression(): OC_StringListNullOperatorExpressionContext {
        let localctx: OC_StringListNullOperatorExpressionContext = new OC_StringListNullOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 264, CypherParser.RULE_oC_StringListNullOperatorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2319;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 2327;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 379, this._ctx) ) {
            case 1:
                {
                this.state = 2320;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 2322;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2321;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2324;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 378, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 2326;
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
        this.enterRule(localctx, 266, CypherParser.RULE_oC_ListOperatorExpression);
        let _la: number;
        try {
            this.state = 2348;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 383, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2329;
                this.match(CypherParser.SP);
                this.state = 2330;
                this.match(CypherParser.IN);
                this.state = 2332;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2331;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2334;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2335;
                this.match(CypherParser.T__6);
                this.state = 2336;
                this.oC_Expression();
                this.state = 2337;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2339;
                this.match(CypherParser.T__6);
                this.state = 2341;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 943009351) !== 0) || _la===178) {
                    {
                    this.state = 2340;
                    this.oC_Expression();
                    }
                }

                this.state = 2343;
                this.match(CypherParser.COLON);
                this.state = 2345;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 943009351) !== 0) || _la===178) {
                    {
                    this.state = 2344;
                    this.oC_Expression();
                    }
                }

                this.state = 2347;
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
        this.enterRule(localctx, 268, CypherParser.RULE_oC_StringOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2361;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 384, this._ctx) ) {
            case 1:
                {
                this.state = 2350;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 2351;
                this.match(CypherParser.SP);
                this.state = 2352;
                this.match(CypherParser.STARTS);
                this.state = 2353;
                this.match(CypherParser.SP);
                this.state = 2354;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 2355;
                this.match(CypherParser.SP);
                this.state = 2356;
                this.match(CypherParser.ENDS);
                this.state = 2357;
                this.match(CypherParser.SP);
                this.state = 2358;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 2359;
                this.match(CypherParser.SP);
                this.state = 2360;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 2364;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2363;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2366;
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
        this.enterRule(localctx, 270, CypherParser.RULE_oC_RegularExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2369;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2368;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2371;
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
        this.enterRule(localctx, 272, CypherParser.RULE_oC_NullOperatorExpression);
        try {
            this.state = 2383;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 387, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2373;
                this.match(CypherParser.SP);
                this.state = 2374;
                this.match(CypherParser.IS);
                this.state = 2375;
                this.match(CypherParser.SP);
                this.state = 2376;
                this.match(CypherParser.NULL);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2377;
                this.match(CypherParser.SP);
                this.state = 2378;
                this.match(CypherParser.IS);
                this.state = 2379;
                this.match(CypherParser.SP);
                this.state = 2380;
                this.match(CypherParser.NOT);
                this.state = 2381;
                this.match(CypherParser.SP);
                this.state = 2382;
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
        this.enterRule(localctx, 274, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2391;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===162) {
                {
                {
                this.state = 2385;
                this.match(CypherParser.MINUS);
                this.state = 2387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2386;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2393;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2394;
            this.oC_PropertyOrLabelsExpression();
            this.state = 2399;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 391, this._ctx) ) {
            case 1:
                {
                this.state = 2396;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2395;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2398;
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
        this.enterRule(localctx, 276, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2401;
            this.oC_Atom();
            this.state = 2408;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 393, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2403;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2402;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2405;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2410;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 393, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 278, CypherParser.RULE_oC_Atom);
        try {
            this.state = 2420;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 394, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2411;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2412;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2413;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2414;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2415;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2416;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2417;
                this.oC_ExistCountSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2418;
                this.oC_Variable();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2419;
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
        this.enterRule(localctx, 280, CypherParser.RULE_oC_Quantifier);
        let _la: number;
        try {
            this.state = 2478;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ALL:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2422;
                this.match(CypherParser.ALL);
                this.state = 2424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2423;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2426;
                this.match(CypherParser.T__1);
                this.state = 2428;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2427;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2430;
                this.oC_FilterExpression();
                this.state = 2432;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2431;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2434;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.ANY:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2436;
                this.match(CypherParser.ANY);
                this.state = 2438;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
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
                if (_la===179) {
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
                if (_la===179) {
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
            case CypherParser.NONE:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2450;
                this.match(CypherParser.NONE);
                this.state = 2452;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
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
                if (_la===179) {
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
                if (_la===179) {
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
            case CypherParser.SINGLE:
                this.enterOuterAlt(localctx, 4);
                {
                {
                this.state = 2464;
                this.match(CypherParser.SINGLE);
                this.state = 2466;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
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
                if (_la===179) {
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
                if (_la===179) {
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
        this.enterRule(localctx, 282, CypherParser.RULE_oC_FilterExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2480;
            this.oC_IdInColl();
            this.state = 2481;
            this.match(CypherParser.SP);
            this.state = 2482;
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
        this.enterRule(localctx, 284, CypherParser.RULE_oC_IdInColl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2484;
            this.oC_Variable();
            this.state = 2485;
            this.match(CypherParser.SP);
            this.state = 2486;
            this.match(CypherParser.IN);
            this.state = 2487;
            this.match(CypherParser.SP);
            this.state = 2488;
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
        this.enterRule(localctx, 286, CypherParser.RULE_oC_Literal);
        try {
            this.state = 2496;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2490;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2491;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.FALSE:
            case CypherParser.TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2492;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2493;
                this.match(CypherParser.NULL);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2494;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2495;
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
        this.enterRule(localctx, 288, CypherParser.RULE_oC_BooleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2498;
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
        this.enterRule(localctx, 290, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2500;
            this.match(CypherParser.T__6);
            this.state = 2502;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2501;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2517;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 943009351) !== 0) || _la===178) {
                {
                this.state = 2504;
                this.oC_Expression();
                this.state = 2506;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2505;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2508;
                    this.kU_ListEntry();
                    this.state = 2510;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2509;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2516;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2519;
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
        this.enterRule(localctx, 292, CypherParser.RULE_kU_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2521;
            this.match(CypherParser.T__3);
            this.state = 2523;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 414, this._ctx) ) {
            case 1:
                {
                this.state = 2522;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2526;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 943009351) !== 0) || _la===178) {
                {
                this.state = 2525;
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
        this.enterRule(localctx, 294, CypherParser.RULE_kU_StructLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2528;
            this.match(CypherParser.T__8);
            this.state = 2530;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2529;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2532;
            this.kU_StructField();
            this.state = 2534;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2533;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2546;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 2536;
                this.match(CypherParser.T__3);
                this.state = 2538;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2537;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2540;
                this.kU_StructField();
                this.state = 2542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2541;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2549;
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
        this.enterRule(localctx, 296, CypherParser.RULE_kU_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2553;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2551;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2552;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2556;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2555;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2558;
            this.match(CypherParser.COLON);
            this.state = 2560;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2559;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2562;
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
        this.enterRule(localctx, 298, CypherParser.RULE_oC_ParenthesizedExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2564;
            this.match(CypherParser.T__1);
            this.state = 2566;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2565;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2568;
            this.oC_Expression();
            this.state = 2570;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2569;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2572;
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
        this.enterRule(localctx, 300, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2651;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 445, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2574;
                this.match(CypherParser.COUNT);
                this.state = 2576;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2575;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2578;
                this.match(CypherParser.T__1);
                this.state = 2580;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2579;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2582;
                this.match(CypherParser.STAR);
                this.state = 2584;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2583;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2586;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2587;
                this.match(CypherParser.CAST);
                this.state = 2589;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2588;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2591;
                this.match(CypherParser.T__1);
                this.state = 2593;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2592;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2595;
                this.kU_FunctionParameter();
                this.state = 2597;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2596;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2609;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case CypherParser.AS:
                    {
                    {
                    this.state = 2599;
                    this.match(CypherParser.AS);
                    this.state = 2601;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2600;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2603;
                    this.kU_DataType(0);
                    }
                    }
                    break;
                case CypherParser.T__3:
                    {
                    {
                    this.state = 2604;
                    this.match(CypherParser.T__3);
                    this.state = 2606;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2605;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2608;
                    this.kU_FunctionParameter();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2612;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2611;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2614;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2616;
                this.oC_FunctionName();
                this.state = 2618;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2617;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2620;
                this.match(CypherParser.T__1);
                this.state = 2622;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2621;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2628;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===78) {
                    {
                    this.state = 2624;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2626;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2625;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2647;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4155185137) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 3915116575) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 943009351) !== 0) || _la===178) {
                    {
                    this.state = 2630;
                    this.kU_FunctionParameter();
                    this.state = 2632;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2631;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2644;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===4) {
                        {
                        {
                        this.state = 2634;
                        this.match(CypherParser.T__3);
                        this.state = 2636;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 2635;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2638;
                        this.kU_FunctionParameter();
                        this.state = 2640;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 2639;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2646;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2649;
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
        this.enterRule(localctx, 302, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2653;
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
        this.enterRule(localctx, 304, CypherParser.RULE_kU_FunctionParameter);
        let _la: number;
        try {
            this.state = 2668;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 449, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2664;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 448, this._ctx) ) {
                case 1:
                    {
                    this.state = 2655;
                    this.oC_SymbolicName();
                    this.state = 2657;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2656;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2659;
                    this.match(CypherParser.COLON);
                    this.state = 2660;
                    this.match(CypherParser.T__5);
                    this.state = 2662;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2661;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 2666;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2667;
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
        this.enterRule(localctx, 306, CypherParser.RULE_kU_LambdaParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2670;
            this.kU_LambdaVars();
            this.state = 2672;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2671;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2674;
            this.match(CypherParser.MINUS);
            this.state = 2675;
            this.match(CypherParser.T__15);
            this.state = 2677;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2676;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2679;
            this.oC_Expression();
            this.state = 2681;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 452, this._ctx) ) {
            case 1:
                {
                this.state = 2680;
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
        this.enterRule(localctx, 308, CypherParser.RULE_kU_LambdaVars);
        let _la: number;
        try {
            this.state = 2707;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2683;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2684;
                this.match(CypherParser.T__1);
                this.state = 2686;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2685;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2688;
                this.oC_SymbolicName();
                this.state = 2690;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2689;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2702;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2692;
                    this.match(CypherParser.T__3);
                    this.state = 2694;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2693;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2696;
                    this.oC_SymbolicName();
                    this.state = 2698;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2697;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2704;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2705;
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
        this.enterRule(localctx, 310, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2709;
            this.oC_NodePattern();
            this.state = 2714;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2711;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===179) {
                        {
                        this.state = 2710;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2713;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2716;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 460, this._ctx);
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
        this.enterRule(localctx, 312, CypherParser.RULE_oC_ExistCountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2718;
            _la = this._input.LA(1);
            if(!(_la===68 || _la===83)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 2720;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2719;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2722;
            this.match(CypherParser.T__8);
            this.state = 2724;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2723;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2726;
            this.match(CypherParser.MATCH);
            this.state = 2728;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2727;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2730;
            this.oC_Pattern();
            this.state = 2735;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 465, this._ctx) ) {
            case 1:
                {
                this.state = 2732;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2731;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2734;
                this.oC_Where();
                }
                break;
            }
            this.state = 2741;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 467, this._ctx) ) {
            case 1:
                {
                this.state = 2738;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2737;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2740;
                this.kU_Hint();
                }
                break;
            }
            this.state = 2744;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2743;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2746;
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
        this.enterRule(localctx, 314, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2748;
            this.match(CypherParser.T__4);
            this.state = 2750;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2749;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2754;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2752;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2753;
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
        this.enterRule(localctx, 316, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2778;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 476, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2756;
                this.match(CypherParser.CASE);
                this.state = 2761;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2758;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 2757;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2760;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2763;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 472, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2765;
                this.match(CypherParser.CASE);
                this.state = 2767;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2766;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2769;
                this.oC_Expression();
                this.state = 2774;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2771;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===179) {
                            {
                            this.state = 2770;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2773;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2776;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 475, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2788;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 479, this._ctx) ) {
            case 1:
                {
                this.state = 2781;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2780;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2783;
                this.match(CypherParser.ELSE);
                this.state = 2785;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===179) {
                    {
                    this.state = 2784;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2787;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2791;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2790;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2793;
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
        this.enterRule(localctx, 318, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2795;
            this.match(CypherParser.WHEN);
            this.state = 2797;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2796;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2799;
            this.oC_Expression();
            this.state = 2801;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2800;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2803;
            this.match(CypherParser.THEN);
            this.state = 2805;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2804;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2807;
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
        this.enterRule(localctx, 320, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2809;
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
        this.enterRule(localctx, 322, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 2813;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2811;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2812;
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
        this.enterRule(localctx, 324, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2815;
            this.match(CypherParser.T__25);
            this.state = 2818;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2816;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2817;
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
        this.enterRule(localctx, 326, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2820;
            this.oC_Atom();
            this.state = 2822;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===179) {
                {
                this.state = 2821;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2824;
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
        this.enterRule(localctx, 328, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2826;
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
        this.enterRule(localctx, 330, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2828;
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
        this.enterRule(localctx, 332, CypherParser.RULE_oC_DoubleLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2830;
            _la = this._input.LA(1);
            if(!(_la===173 || _la===174)) {
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
        this.enterRule(localctx, 334, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2832;
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
        this.enterRule(localctx, 336, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 2839;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2834;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2835;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2837;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2838;
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
        this.enterRule(localctx, 338, CypherParser.RULE_kU_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2841;
            _la = this._input.LA(1);
            if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 935155895) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 298489279) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 11) !== 0))) {
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
        this.enterRule(localctx, 340, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2843;
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
        this.enterRule(localctx, 342, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2845;
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
        this.enterRule(localctx, 344, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2847;
            _la = this._input.LA(1);
            if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2047) !== 0) || _la===162)) {
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
        case 50:
            return this.kU_DataType_sempred(localctx as KU_DataTypeContext, predIndex);
        case 77:
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
        4,1,182,2850,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        2,170,7,170,2,171,7,171,2,172,7,172,1,0,1,0,3,0,349,8,0,1,0,1,0,
        3,0,353,8,0,1,0,5,0,356,8,0,10,0,12,0,359,9,0,1,0,3,0,362,8,0,1,
        0,1,0,1,1,3,1,367,8,1,1,1,3,1,370,8,1,1,1,1,1,3,1,374,8,1,1,1,3,
        1,377,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,399,8,2,1,3,1,3,1,3,1,3,3,3,405,8,
        3,1,3,1,3,1,3,1,3,1,3,3,3,412,8,3,1,3,1,3,3,3,416,8,3,1,3,1,3,3,
        3,420,8,3,1,3,1,3,3,3,424,8,3,1,4,3,4,427,8,4,1,4,1,4,3,4,431,8,
        4,1,4,1,4,3,4,435,8,4,1,4,1,4,3,4,439,8,4,1,4,5,4,442,8,4,10,4,12,
        4,445,9,4,1,4,3,4,448,8,4,3,4,450,8,4,1,4,1,4,1,5,1,5,1,5,3,5,457,
        8,5,1,5,1,5,3,5,461,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,470,8,5,
        1,5,1,5,1,5,3,5,475,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,485,
        8,6,1,6,1,6,3,6,489,8,6,1,6,1,6,3,6,493,8,6,1,6,5,6,496,8,6,10,6,
        12,6,499,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,511,8,7,
        1,7,1,7,3,7,515,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,523,8,7,1,7,1,7,
        3,7,527,8,7,1,7,1,7,3,7,531,8,7,1,7,1,7,3,7,535,8,7,1,8,1,8,1,8,
        1,8,1,8,1,8,3,8,543,8,8,1,8,1,8,3,8,547,8,8,1,8,1,8,3,8,551,8,8,
        1,8,1,8,3,8,555,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,3,10,570,8,10,1,10,1,10,1,10,3,10,575,8,10,1,10,1,
        10,1,10,1,10,3,10,581,8,10,1,10,1,10,3,10,585,8,10,1,10,3,10,588,
        8,10,1,10,3,10,591,8,10,1,10,1,10,1,11,1,11,3,11,597,8,11,1,11,1,
        11,3,11,601,8,11,1,11,5,11,604,8,11,10,11,12,11,607,9,11,3,11,609,
        8,11,1,11,1,11,1,11,3,11,614,8,11,1,12,1,12,3,12,618,8,12,1,12,1,
        12,3,12,622,8,12,1,12,5,12,625,8,12,10,12,12,12,628,9,12,1,13,1,
        13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,642,8,
        15,1,15,1,15,3,15,646,8,15,1,15,1,15,1,15,1,15,1,15,3,15,653,8,15,
        1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,
        1,17,1,17,1,17,1,17,1,17,3,17,673,8,17,1,17,1,17,3,17,677,8,17,1,
        17,3,17,680,8,17,1,17,3,17,683,8,17,1,17,3,17,686,8,17,1,17,3,17,
        689,8,17,1,17,1,17,3,17,693,8,17,1,17,5,17,696,8,17,10,17,12,17,
        699,9,17,1,17,3,17,702,8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,
        18,3,18,712,8,18,1,18,1,18,3,18,716,8,18,1,18,5,18,719,8,18,10,18,
        12,18,722,9,18,1,19,1,19,3,19,726,8,19,1,19,1,19,1,19,3,19,731,8,
        19,1,19,1,19,1,20,1,20,3,20,737,8,20,1,20,1,20,3,20,741,8,20,1,20,
        1,20,3,20,745,8,20,1,20,5,20,748,8,20,10,20,12,20,751,9,20,1,20,
        1,20,1,20,1,20,3,20,757,8,20,1,20,1,20,3,20,761,8,20,1,20,1,20,3,
        20,765,8,20,1,20,3,20,768,8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,
        1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,785,8,22,1,22,1,22,
        3,22,789,8,22,1,22,1,22,3,22,793,8,22,1,22,1,22,3,22,797,8,22,1,
        22,1,22,3,22,801,8,22,1,22,3,22,804,8,22,1,22,3,22,807,8,22,1,22,
        1,22,1,22,1,22,1,22,1,22,3,22,815,8,22,1,23,1,23,1,23,1,23,1,23,
        1,23,1,23,3,23,824,8,23,1,23,1,23,3,23,828,8,23,1,23,1,23,1,23,3,
        23,833,8,23,1,23,1,23,3,23,837,8,23,1,23,1,23,3,23,841,8,23,1,23,
        1,23,3,23,845,8,23,1,23,1,23,3,23,849,8,23,3,23,851,8,23,1,23,1,
        23,3,23,855,8,23,1,23,1,23,3,23,859,8,23,3,23,861,8,23,1,23,1,23,
        1,23,1,23,1,23,1,23,3,23,869,8,23,1,23,1,23,1,23,3,23,874,8,23,1,
        23,1,23,3,23,878,8,23,1,23,1,23,3,23,882,8,23,1,23,1,23,3,23,886,
        8,23,1,24,1,24,3,24,890,8,24,1,24,1,24,3,24,894,8,24,1,24,5,24,897,
        8,24,10,24,12,24,900,9,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,917,8,26,1,26,1,26,1,26,
        5,26,922,8,26,10,26,12,26,925,9,26,1,27,1,27,1,27,1,27,1,27,1,27,
        1,27,1,27,1,27,1,27,3,27,937,8,27,1,28,1,28,1,28,1,28,1,28,3,28,
        944,8,28,1,29,1,29,1,29,1,29,3,29,950,8,29,1,29,3,29,953,8,29,1,
        29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,3,30,963,8,30,1,30,3,30,966,
        8,30,1,31,1,31,1,31,1,31,1,31,1,31,3,31,974,8,31,1,31,3,31,977,8,
        31,1,32,1,32,1,32,1,32,3,32,983,8,32,1,32,3,32,986,8,32,1,32,1,32,
        1,33,1,33,3,33,992,8,33,1,33,1,33,1,34,1,34,1,34,1,34,1,35,1,35,
        1,35,1,35,1,35,1,35,1,35,3,35,1007,8,35,1,35,1,35,1,36,1,36,1,36,
        1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,3,37,1025,
        8,37,1,38,1,38,1,38,1,38,1,38,3,38,1032,8,38,1,38,1,38,1,38,1,38,
        1,38,3,38,1039,8,38,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,
        3,40,1050,8,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,
        1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,3,43,1073,
        8,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,3,44,1082,8,44,1,44,1,44,
        1,45,1,45,3,45,1088,8,45,1,45,1,45,3,45,1092,8,45,1,45,5,45,1095,
        8,45,10,45,12,45,1098,9,45,1,46,1,46,1,46,1,46,1,47,1,47,3,47,1106,
        8,47,1,47,1,47,3,47,1110,8,47,1,47,5,47,1113,8,47,10,47,12,47,1116,
        9,47,1,48,1,48,1,48,3,48,1121,8,48,1,48,1,48,1,48,1,48,3,48,1127,
        8,48,1,49,1,49,1,49,1,49,3,49,1133,8,49,1,49,1,49,3,49,1137,8,49,
        1,49,1,49,3,49,1141,8,49,1,49,1,49,1,50,1,50,1,50,1,50,3,50,1149,
        8,50,1,50,1,50,3,50,1153,8,50,1,50,1,50,3,50,1157,8,50,1,50,1,50,
        1,50,1,50,3,50,1163,8,50,1,50,1,50,3,50,1167,8,50,1,50,1,50,3,50,
        1171,8,50,1,50,1,50,1,50,1,50,3,50,1177,8,50,1,50,1,50,3,50,1181,
        8,50,1,50,1,50,3,50,1185,8,50,1,50,1,50,1,50,1,50,3,50,1191,8,50,
        1,50,1,50,3,50,1195,8,50,1,50,1,50,3,50,1199,8,50,1,50,1,50,3,50,
        1203,8,50,1,50,1,50,3,50,1207,8,50,1,50,1,50,1,50,1,50,3,50,1213,
        8,50,1,50,1,50,3,50,1217,8,50,1,50,1,50,3,50,1221,8,50,1,50,1,50,
        3,50,1225,8,50,1,50,1,50,3,50,1229,8,50,1,50,1,50,3,50,1233,8,50,
        1,50,1,50,5,50,1237,8,50,10,50,12,50,1240,9,50,1,51,1,51,5,51,1244,
        8,51,10,51,12,51,1247,9,51,1,52,1,52,3,52,1251,8,52,1,52,1,52,1,
        53,1,53,3,53,1257,8,53,1,54,1,54,1,54,3,54,1262,8,54,1,55,1,55,1,
        56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,3,
        56,1279,8,56,1,57,1,57,1,57,1,57,3,57,1285,8,57,1,58,1,58,1,58,1,
        58,3,58,1291,8,58,1,58,1,58,3,58,1295,8,58,1,59,1,59,3,59,1299,8,
        59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,1308,8,59,1,60,1,60,1,
        60,1,60,1,61,1,61,1,61,1,61,1,62,1,62,1,63,1,63,3,63,1322,8,63,1,
        63,5,63,1325,8,63,10,63,12,63,1328,9,63,1,63,1,63,3,63,1332,8,63,
        4,63,1334,8,63,11,63,12,63,1335,1,63,1,63,1,63,3,63,1341,8,63,1,
        64,1,64,1,64,1,64,3,64,1347,8,64,1,64,1,64,1,64,3,64,1352,8,64,1,
        64,3,64,1355,8,64,1,65,1,65,3,65,1359,8,65,1,66,1,66,3,66,1363,8,
        66,5,66,1365,8,66,10,66,12,66,1368,9,66,1,66,1,66,1,66,3,66,1373,
        8,66,5,66,1375,8,66,10,66,12,66,1378,9,66,1,66,1,66,3,66,1382,8,
        66,1,66,5,66,1385,8,66,10,66,12,66,1388,9,66,1,66,3,66,1391,8,66,
        1,66,3,66,1394,8,66,3,66,1396,8,66,1,67,1,67,3,67,1400,8,67,4,67,
        1402,8,67,11,67,12,67,1403,1,67,1,67,1,68,1,68,3,68,1410,8,68,5,
        68,1412,8,68,10,68,12,68,1415,9,68,1,68,1,68,3,68,1419,8,68,5,68,
        1421,8,68,10,68,12,68,1424,9,68,1,68,1,68,1,69,1,69,1,69,1,69,3,
        69,1432,8,69,1,70,1,70,1,70,1,70,3,70,1438,8,70,1,71,1,71,1,71,1,
        71,1,71,1,71,3,71,1446,8,71,1,71,1,71,3,71,1450,8,71,1,71,1,71,3,
        71,1454,8,71,1,71,1,71,3,71,1458,8,71,1,71,1,71,1,71,1,71,1,71,3,
        71,1465,8,71,1,71,1,71,3,71,1469,8,71,1,71,1,71,3,71,1473,8,71,1,
        71,1,71,3,71,1477,8,71,1,71,3,71,1480,8,71,1,71,3,71,1483,8,71,1,
        72,1,72,1,72,1,72,1,72,3,72,1490,8,72,1,72,1,72,1,73,1,73,3,73,1496,
        8,73,1,73,1,73,3,73,1500,8,73,1,73,5,73,1503,8,73,10,73,12,73,1506,
        9,73,1,74,1,74,1,74,1,74,3,74,1512,8,74,1,74,3,74,1515,8,74,1,74,
        3,74,1518,8,74,1,74,1,74,1,74,3,74,1523,8,74,1,75,1,75,3,75,1527,
        8,75,1,75,1,75,3,75,1531,8,75,1,75,1,75,1,75,3,75,1536,8,75,1,75,
        1,75,3,75,1540,8,75,1,76,1,76,1,76,1,76,1,77,1,77,1,77,3,77,1549,
        8,77,1,77,1,77,3,77,1553,8,77,1,77,1,77,1,77,3,77,1558,8,77,1,77,
        1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,4,77,1570,8,77,11,77,
        12,77,1571,5,77,1574,8,77,10,77,12,77,1577,9,77,1,78,1,78,3,78,1581,
        8,78,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,3,79,1591,8,79,1,79,
        1,79,1,80,1,80,3,80,1597,8,80,1,80,1,80,1,80,5,80,1602,8,80,10,80,
        12,80,1605,9,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,
        3,81,1617,8,81,1,82,1,82,3,82,1621,8,82,1,82,1,82,3,82,1625,8,82,
        1,82,1,82,3,82,1629,8,82,1,82,5,82,1632,8,82,10,82,12,82,1635,9,
        82,1,83,1,83,3,83,1639,8,83,1,83,1,83,3,83,1643,8,83,1,83,1,83,1,
        84,1,84,3,84,1649,8,84,1,84,1,84,3,84,1653,8,84,1,84,1,84,3,84,1657,
        8,84,1,84,1,84,3,84,1661,8,84,1,84,5,84,1664,8,84,10,84,12,84,1667,
        9,84,1,85,1,85,1,85,3,85,1672,8,85,1,85,3,85,1675,8,85,1,86,1,86,
        1,86,1,87,3,87,1681,8,87,1,87,3,87,1684,8,87,1,87,1,87,1,87,1,87,
        3,87,1690,8,87,1,87,1,87,3,87,1694,8,87,1,87,1,87,3,87,1698,8,87,
        1,88,1,88,3,88,1702,8,88,1,88,1,88,3,88,1706,8,88,1,88,5,88,1709,
        8,88,10,88,12,88,1712,9,88,1,88,1,88,3,88,1716,8,88,1,88,1,88,3,
        88,1720,8,88,1,88,5,88,1723,8,88,10,88,12,88,1726,9,88,3,88,1728,
        8,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,3,89,1737,8,89,1,90,1,90,
        1,90,1,90,1,90,1,90,1,90,3,90,1746,8,90,1,90,5,90,1749,8,90,10,90,
        12,90,1752,9,90,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,93,1,93,
        3,93,1764,8,93,1,93,3,93,1767,8,93,1,94,1,94,1,94,1,94,1,95,1,95,
        3,95,1775,8,95,1,95,1,95,3,95,1779,8,95,1,95,5,95,1782,8,95,10,95,
        12,95,1785,9,95,1,96,1,96,3,96,1789,8,96,1,96,1,96,3,96,1793,8,96,
        1,96,1,96,1,96,3,96,1798,8,96,1,97,1,97,1,98,1,98,3,98,1804,8,98,
        1,98,5,98,1807,8,98,10,98,12,98,1810,9,98,1,98,1,98,1,98,1,98,3,
        98,1816,8,98,1,99,1,99,3,99,1820,8,99,1,99,1,99,3,99,1824,8,99,3,
        99,1826,8,99,1,99,1,99,3,99,1830,8,99,3,99,1832,8,99,1,99,1,99,3,
        99,1836,8,99,3,99,1838,8,99,1,99,1,99,1,100,1,100,3,100,1844,8,100,
        1,100,1,100,1,101,1,101,3,101,1850,8,101,1,101,1,101,3,101,1854,
        8,101,1,101,3,101,1857,8,101,1,101,3,101,1860,8,101,1,101,1,101,
        1,101,1,101,3,101,1866,8,101,1,101,3,101,1869,8,101,1,101,3,101,
        1872,8,101,1,101,1,101,3,101,1876,8,101,1,101,1,101,1,101,1,101,
        3,101,1882,8,101,1,101,3,101,1885,8,101,1,101,3,101,1888,8,101,1,
        101,1,101,3,101,1892,8,101,1,102,1,102,3,102,1896,8,102,1,102,1,
        102,3,102,1900,8,102,3,102,1902,8,102,1,102,1,102,3,102,1906,8,102,
        3,102,1908,8,102,1,102,1,102,3,102,1912,8,102,3,102,1914,8,102,1,
        102,1,102,3,102,1918,8,102,3,102,1920,8,102,1,102,1,102,1,103,1,
        103,3,103,1926,8,103,1,103,1,103,3,103,1930,8,103,1,103,1,103,3,
        103,1934,8,103,1,103,1,103,3,103,1938,8,103,1,103,1,103,3,103,1942,
        8,103,1,103,1,103,3,103,1946,8,103,1,103,1,103,3,103,1950,8,103,
        1,103,1,103,3,103,1954,8,103,5,103,1956,8,103,10,103,12,103,1959,
        9,103,3,103,1961,8,103,1,103,1,103,1,104,1,104,3,104,1967,8,104,
        1,104,1,104,3,104,1971,8,104,1,104,1,104,3,104,1975,8,104,1,104,
        3,104,1978,8,104,1,104,5,104,1981,8,104,10,104,12,104,1984,9,104,
        1,105,1,105,3,105,1988,8,105,1,105,5,105,1991,8,105,10,105,12,105,
        1994,9,105,1,106,1,106,3,106,1998,8,106,1,106,1,106,1,107,1,107,
        3,107,2004,8,107,1,107,3,107,2007,8,107,1,107,3,107,2010,8,107,1,
        107,3,107,2013,8,107,1,107,3,107,2016,8,107,1,107,3,107,2019,8,107,
        1,108,1,108,3,108,2023,8,108,1,108,1,108,3,108,2027,8,108,1,108,
        1,108,3,108,2031,8,108,1,108,1,108,3,108,2035,8,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,3,108,2045,8,108,1,109,3,109,
        2048,8,109,1,109,3,109,2051,8,109,1,109,1,109,3,109,2055,8,109,1,
        109,3,109,2058,8,109,1,109,3,109,2061,8,109,1,110,1,110,3,110,2065,
        8,110,1,110,1,110,3,110,2069,8,110,1,110,1,110,3,110,2073,8,110,
        1,110,1,110,3,110,2077,8,110,1,110,1,110,3,110,2081,8,110,1,110,
        1,110,3,110,2085,8,110,3,110,2087,8,110,1,110,3,110,2090,8,110,1,
        110,1,110,3,110,2094,8,110,1,110,1,110,3,110,2098,8,110,1,110,1,
        110,3,110,2102,8,110,1,110,1,110,3,110,2106,8,110,3,110,2108,8,110,
        1,110,1,110,1,111,1,111,3,111,2114,8,111,1,111,3,111,2117,8,111,
        1,111,3,111,2120,8,111,1,111,1,111,1,112,1,112,1,113,1,113,1,114,
        1,114,1,115,1,115,1,116,1,116,1,117,1,117,1,117,1,117,1,117,5,117,
        2139,8,117,10,117,12,117,2142,9,117,1,118,1,118,1,118,1,118,1,118,
        5,118,2149,8,118,10,118,12,118,2152,9,118,1,119,1,119,1,119,1,119,
        1,119,5,119,2159,8,119,10,119,12,119,2162,9,119,1,120,1,120,3,120,
        2166,8,120,5,120,2168,8,120,10,120,12,120,2171,9,120,1,120,1,120,
        1,121,1,121,3,121,2177,8,121,1,121,1,121,3,121,2181,8,121,1,121,
        1,121,3,121,2185,8,121,1,121,1,121,3,121,2189,8,121,1,121,1,121,
        3,121,2193,8,121,1,121,1,121,1,121,1,121,1,121,1,121,3,121,2201,
        8,121,1,121,1,121,3,121,2205,8,121,1,121,1,121,3,121,2209,8,121,
        1,121,1,121,3,121,2213,8,121,1,121,1,121,4,121,2217,8,121,11,121,
        12,121,2218,1,121,1,121,3,121,2223,8,121,1,122,1,122,1,123,1,123,
        3,123,2229,8,123,1,123,1,123,3,123,2233,8,123,1,123,5,123,2236,8,
        123,10,123,12,123,2239,9,123,1,124,1,124,3,124,2243,8,124,1,124,
        1,124,3,124,2247,8,124,1,124,5,124,2250,8,124,10,124,12,124,2253,
        9,124,1,125,1,125,3,125,2257,8,125,1,125,1,125,3,125,2261,8,125,
        1,125,1,125,5,125,2265,8,125,10,125,12,125,2268,9,125,1,126,1,126,
        1,127,1,127,3,127,2274,8,127,1,127,1,127,3,127,2278,8,127,1,127,
        1,127,5,127,2282,8,127,10,127,12,127,2285,9,127,1,128,1,128,1,129,
        1,129,3,129,2291,8,129,1,129,1,129,3,129,2295,8,129,1,129,1,129,
        5,129,2299,8,129,10,129,12,129,2302,9,129,1,130,1,130,1,131,1,131,
        3,131,2308,8,131,1,131,1,131,3,131,2312,8,131,1,131,5,131,2315,8,
        131,10,131,12,131,2318,9,131,1,132,1,132,1,132,4,132,2323,8,132,
        11,132,12,132,2324,1,132,3,132,2328,8,132,1,133,1,133,1,133,3,133,
        2333,8,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,3,133,2342,
        8,133,1,133,1,133,3,133,2346,8,133,1,133,3,133,2349,8,133,1,134,
        1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,3,134,
        2362,8,134,1,134,3,134,2365,8,134,1,134,1,134,1,135,3,135,2370,8,
        135,1,135,1,135,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,
        1,136,1,136,3,136,2384,8,136,1,137,1,137,3,137,2388,8,137,5,137,
        2390,8,137,10,137,12,137,2393,9,137,1,137,1,137,3,137,2397,8,137,
        1,137,3,137,2400,8,137,1,138,1,138,3,138,2404,8,138,1,138,5,138,
        2407,8,138,10,138,12,138,2410,9,138,1,139,1,139,1,139,1,139,1,139,
        1,139,1,139,1,139,1,139,3,139,2421,8,139,1,140,1,140,3,140,2425,
        8,140,1,140,1,140,3,140,2429,8,140,1,140,1,140,3,140,2433,8,140,
        1,140,1,140,1,140,1,140,3,140,2439,8,140,1,140,1,140,3,140,2443,
        8,140,1,140,1,140,3,140,2447,8,140,1,140,1,140,1,140,1,140,3,140,
        2453,8,140,1,140,1,140,3,140,2457,8,140,1,140,1,140,3,140,2461,8,
        140,1,140,1,140,1,140,1,140,3,140,2467,8,140,1,140,1,140,3,140,2471,
        8,140,1,140,1,140,3,140,2475,8,140,1,140,1,140,3,140,2479,8,140,
        1,141,1,141,1,141,1,141,1,142,1,142,1,142,1,142,1,142,1,142,1,143,
        1,143,1,143,1,143,1,143,1,143,3,143,2497,8,143,1,144,1,144,1,145,
        1,145,3,145,2503,8,145,1,145,1,145,3,145,2507,8,145,1,145,1,145,
        3,145,2511,8,145,5,145,2513,8,145,10,145,12,145,2516,9,145,3,145,
        2518,8,145,1,145,1,145,1,146,1,146,3,146,2524,8,146,1,146,3,146,
        2527,8,146,1,147,1,147,3,147,2531,8,147,1,147,1,147,3,147,2535,8,
        147,1,147,1,147,3,147,2539,8,147,1,147,1,147,3,147,2543,8,147,5,
        147,2545,8,147,10,147,12,147,2548,9,147,1,147,1,147,1,148,1,148,
        3,148,2554,8,148,1,148,3,148,2557,8,148,1,148,1,148,3,148,2561,8,
        148,1,148,1,148,1,149,1,149,3,149,2567,8,149,1,149,1,149,3,149,2571,
        8,149,1,149,1,149,1,150,1,150,3,150,2577,8,150,1,150,1,150,3,150,
        2581,8,150,1,150,1,150,3,150,2585,8,150,1,150,1,150,1,150,3,150,
        2590,8,150,1,150,1,150,3,150,2594,8,150,1,150,1,150,3,150,2598,8,
        150,1,150,1,150,3,150,2602,8,150,1,150,1,150,1,150,3,150,2607,8,
        150,1,150,3,150,2610,8,150,1,150,3,150,2613,8,150,1,150,1,150,1,
        150,1,150,3,150,2619,8,150,1,150,1,150,3,150,2623,8,150,1,150,1,
        150,3,150,2627,8,150,3,150,2629,8,150,1,150,1,150,3,150,2633,8,150,
        1,150,1,150,3,150,2637,8,150,1,150,1,150,3,150,2641,8,150,5,150,
        2643,8,150,10,150,12,150,2646,9,150,3,150,2648,8,150,1,150,1,150,
        3,150,2652,8,150,1,151,1,151,1,152,1,152,3,152,2658,8,152,1,152,
        1,152,1,152,3,152,2663,8,152,3,152,2665,8,152,1,152,1,152,3,152,
        2669,8,152,1,153,1,153,3,153,2673,8,153,1,153,1,153,1,153,3,153,
        2678,8,153,1,153,1,153,3,153,2682,8,153,1,154,1,154,1,154,3,154,
        2687,8,154,1,154,1,154,3,154,2691,8,154,1,154,1,154,3,154,2695,8,
        154,1,154,1,154,3,154,2699,8,154,5,154,2701,8,154,10,154,12,154,
        2704,9,154,1,154,1,154,3,154,2708,8,154,1,155,1,155,3,155,2712,8,
        155,1,155,4,155,2715,8,155,11,155,12,155,2716,1,156,1,156,3,156,
        2721,8,156,1,156,1,156,3,156,2725,8,156,1,156,1,156,3,156,2729,8,
        156,1,156,1,156,3,156,2733,8,156,1,156,3,156,2736,8,156,1,156,3,
        156,2739,8,156,1,156,3,156,2742,8,156,1,156,3,156,2745,8,156,1,156,
        1,156,1,157,1,157,3,157,2751,8,157,1,157,1,157,3,157,2755,8,157,
        1,158,1,158,3,158,2759,8,158,1,158,4,158,2762,8,158,11,158,12,158,
        2763,1,158,1,158,3,158,2768,8,158,1,158,1,158,3,158,2772,8,158,1,
        158,4,158,2775,8,158,11,158,12,158,2776,3,158,2779,8,158,1,158,3,
        158,2782,8,158,1,158,1,158,3,158,2786,8,158,1,158,3,158,2789,8,158,
        1,158,3,158,2792,8,158,1,158,1,158,1,159,1,159,3,159,2798,8,159,
        1,159,1,159,3,159,2802,8,159,1,159,1,159,3,159,2806,8,159,1,159,
        1,159,1,160,1,160,1,161,1,161,3,161,2814,8,161,1,162,1,162,1,162,
        3,162,2819,8,162,1,163,1,163,3,163,2823,8,163,1,163,1,163,1,164,
        1,164,1,165,1,165,1,166,1,166,1,167,1,167,1,168,1,168,1,168,1,168,
        1,168,3,168,2840,8,168,1,169,1,169,1,170,1,170,1,171,1,171,1,172,
        1,172,1,172,0,2,100,154,173,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
        28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
        72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,
        112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,
        144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,
        176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,
        208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,
        240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,
        272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,
        304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,
        336,338,340,342,344,0,13,2,0,131,131,137,137,2,0,53,54,75,76,2,0,
        6,6,13,17,1,0,19,20,2,0,21,21,162,162,2,0,22,23,158,158,2,0,87,87,
        142,142,2,0,68,68,83,83,1,0,173,174,31,0,48,48,50,50,52,52,55,58,
        61,61,63,64,66,68,70,71,74,74,77,77,79,79,84,86,88,89,91,91,95,96,
        98,98,100,100,102,105,107,110,112,113,124,129,131,132,134,134,136,
        136,139,139,141,141,143,143,146,148,152,152,156,157,159,159,2,0,
        14,14,27,30,2,0,16,16,31,34,2,0,35,45,162,162,3233,0,346,1,0,0,0,
        2,366,1,0,0,0,4,398,1,0,0,0,6,400,1,0,0,0,8,426,1,0,0,0,10,474,1,
        0,0,0,12,476,1,0,0,0,14,506,1,0,0,0,16,536,1,0,0,0,18,556,1,0,0,
        0,20,562,1,0,0,0,22,613,1,0,0,0,24,615,1,0,0,0,26,629,1,0,0,0,28,
        633,1,0,0,0,30,652,1,0,0,0,32,654,1,0,0,0,34,666,1,0,0,0,36,709,
        1,0,0,0,38,723,1,0,0,0,40,767,1,0,0,0,42,769,1,0,0,0,44,775,1,0,
        0,0,46,816,1,0,0,0,48,887,1,0,0,0,50,901,1,0,0,0,52,909,1,0,0,0,
        54,926,1,0,0,0,56,943,1,0,0,0,58,945,1,0,0,0,60,965,1,0,0,0,62,976,
        1,0,0,0,64,978,1,0,0,0,66,991,1,0,0,0,68,995,1,0,0,0,70,999,1,0,
        0,0,72,1010,1,0,0,0,74,1024,1,0,0,0,76,1026,1,0,0,0,78,1040,1,0,
        0,0,80,1044,1,0,0,0,82,1053,1,0,0,0,84,1059,1,0,0,0,86,1067,1,0,
        0,0,88,1076,1,0,0,0,90,1085,1,0,0,0,92,1099,1,0,0,0,94,1103,1,0,
        0,0,96,1117,1,0,0,0,98,1128,1,0,0,0,100,1232,1,0,0,0,102,1241,1,
        0,0,0,104,1248,1,0,0,0,106,1256,1,0,0,0,108,1258,1,0,0,0,110,1263,
        1,0,0,0,112,1278,1,0,0,0,114,1284,1,0,0,0,116,1286,1,0,0,0,118,1298,
        1,0,0,0,120,1309,1,0,0,0,122,1313,1,0,0,0,124,1317,1,0,0,0,126,1340,
        1,0,0,0,128,1354,1,0,0,0,130,1358,1,0,0,0,132,1395,1,0,0,0,134,1401,
        1,0,0,0,136,1413,1,0,0,0,138,1431,1,0,0,0,140,1437,1,0,0,0,142,1439,
        1,0,0,0,144,1489,1,0,0,0,146,1493,1,0,0,0,148,1507,1,0,0,0,150,1526,
        1,0,0,0,152,1541,1,0,0,0,154,1557,1,0,0,0,156,1578,1,0,0,0,158,1588,
        1,0,0,0,160,1594,1,0,0,0,162,1616,1,0,0,0,164,1618,1,0,0,0,166,1636,
        1,0,0,0,168,1648,1,0,0,0,170,1668,1,0,0,0,172,1676,1,0,0,0,174,1683,
        1,0,0,0,176,1727,1,0,0,0,178,1736,1,0,0,0,180,1738,1,0,0,0,182,1753,
        1,0,0,0,184,1757,1,0,0,0,186,1761,1,0,0,0,188,1768,1,0,0,0,190,1772,
        1,0,0,0,192,1797,1,0,0,0,194,1799,1,0,0,0,196,1815,1,0,0,0,198,1817,
        1,0,0,0,200,1841,1,0,0,0,202,1891,1,0,0,0,204,1893,1,0,0,0,206,1923,
        1,0,0,0,208,1964,1,0,0,0,210,1985,1,0,0,0,212,1995,1,0,0,0,214,2001,
        1,0,0,0,216,2044,1,0,0,0,218,2060,1,0,0,0,220,2062,1,0,0,0,222,2111,
        1,0,0,0,224,2123,1,0,0,0,226,2125,1,0,0,0,228,2127,1,0,0,0,230,2129,
        1,0,0,0,232,2131,1,0,0,0,234,2133,1,0,0,0,236,2143,1,0,0,0,238,2153,
        1,0,0,0,240,2169,1,0,0,0,242,2222,1,0,0,0,244,2224,1,0,0,0,246,2226,
        1,0,0,0,248,2240,1,0,0,0,250,2254,1,0,0,0,252,2269,1,0,0,0,254,2271,
        1,0,0,0,256,2286,1,0,0,0,258,2288,1,0,0,0,260,2303,1,0,0,0,262,2305,
        1,0,0,0,264,2319,1,0,0,0,266,2348,1,0,0,0,268,2361,1,0,0,0,270,2369,
        1,0,0,0,272,2383,1,0,0,0,274,2391,1,0,0,0,276,2401,1,0,0,0,278,2420,
        1,0,0,0,280,2478,1,0,0,0,282,2480,1,0,0,0,284,2484,1,0,0,0,286,2496,
        1,0,0,0,288,2498,1,0,0,0,290,2500,1,0,0,0,292,2521,1,0,0,0,294,2528,
        1,0,0,0,296,2553,1,0,0,0,298,2564,1,0,0,0,300,2651,1,0,0,0,302,2653,
        1,0,0,0,304,2668,1,0,0,0,306,2670,1,0,0,0,308,2707,1,0,0,0,310,2709,
        1,0,0,0,312,2718,1,0,0,0,314,2748,1,0,0,0,316,2778,1,0,0,0,318,2795,
        1,0,0,0,320,2809,1,0,0,0,322,2813,1,0,0,0,324,2815,1,0,0,0,326,2820,
        1,0,0,0,328,2826,1,0,0,0,330,2828,1,0,0,0,332,2830,1,0,0,0,334,2832,
        1,0,0,0,336,2839,1,0,0,0,338,2841,1,0,0,0,340,2843,1,0,0,0,342,2845,
        1,0,0,0,344,2847,1,0,0,0,346,357,3,2,1,0,347,349,5,179,0,0,348,347,
        1,0,0,0,348,349,1,0,0,0,349,350,1,0,0,0,350,352,5,1,0,0,351,353,
        5,179,0,0,352,351,1,0,0,0,352,353,1,0,0,0,353,354,1,0,0,0,354,356,
        3,2,1,0,355,348,1,0,0,0,356,359,1,0,0,0,357,355,1,0,0,0,357,358,
        1,0,0,0,358,361,1,0,0,0,359,357,1,0,0,0,360,362,5,179,0,0,361,360,
        1,0,0,0,361,362,1,0,0,0,362,363,1,0,0,0,363,364,5,0,0,1,364,1,1,
        0,0,0,365,367,3,106,53,0,366,365,1,0,0,0,366,367,1,0,0,0,367,369,
        1,0,0,0,368,370,5,179,0,0,369,368,1,0,0,0,369,370,1,0,0,0,370,371,
        1,0,0,0,371,376,3,4,2,0,372,374,5,179,0,0,373,372,1,0,0,0,373,374,
        1,0,0,0,374,375,1,0,0,0,375,377,5,1,0,0,376,373,1,0,0,0,376,377,
        1,0,0,0,377,3,1,0,0,0,378,399,3,124,62,0,379,399,3,44,22,0,380,399,
        3,46,23,0,381,399,3,52,26,0,382,399,3,54,27,0,383,399,3,70,35,0,
        384,399,3,72,36,0,385,399,3,6,3,0,386,399,3,12,6,0,387,399,3,14,
        7,0,388,399,3,30,15,0,389,399,3,34,17,0,390,399,3,32,16,0,391,399,
        3,112,56,0,392,399,3,114,57,0,393,399,3,16,8,0,394,399,3,18,9,0,
        395,399,3,20,10,0,396,399,3,26,13,0,397,399,3,28,14,0,398,378,1,
        0,0,0,398,379,1,0,0,0,398,380,1,0,0,0,398,381,1,0,0,0,398,382,1,
        0,0,0,398,383,1,0,0,0,398,384,1,0,0,0,398,385,1,0,0,0,398,386,1,
        0,0,0,398,387,1,0,0,0,398,388,1,0,0,0,398,389,1,0,0,0,398,390,1,
        0,0,0,398,391,1,0,0,0,398,392,1,0,0,0,398,393,1,0,0,0,398,394,1,
        0,0,0,398,395,1,0,0,0,398,396,1,0,0,0,398,397,1,0,0,0,399,5,1,0,
        0,0,400,401,5,67,0,0,401,402,5,179,0,0,402,404,3,334,167,0,403,405,
        3,8,4,0,404,403,1,0,0,0,404,405,1,0,0,0,405,406,1,0,0,0,406,407,
        5,179,0,0,407,408,5,88,0,0,408,409,5,179,0,0,409,423,3,10,5,0,410,
        412,5,179,0,0,411,410,1,0,0,0,411,412,1,0,0,0,412,413,1,0,0,0,413,
        415,5,2,0,0,414,416,5,179,0,0,415,414,1,0,0,0,415,416,1,0,0,0,416,
        417,1,0,0,0,417,419,3,24,12,0,418,420,5,179,0,0,419,418,1,0,0,0,
        419,420,1,0,0,0,420,421,1,0,0,0,421,422,5,3,0,0,422,424,1,0,0,0,
        423,411,1,0,0,0,423,424,1,0,0,0,424,7,1,0,0,0,425,427,5,179,0,0,
        426,425,1,0,0,0,426,427,1,0,0,0,427,428,1,0,0,0,428,430,5,2,0,0,
        429,431,5,179,0,0,430,429,1,0,0,0,430,431,1,0,0,0,431,449,1,0,0,
        0,432,443,3,334,167,0,433,435,5,179,0,0,434,433,1,0,0,0,434,435,
        1,0,0,0,435,436,1,0,0,0,436,438,5,4,0,0,437,439,5,179,0,0,438,437,
        1,0,0,0,438,439,1,0,0,0,439,440,1,0,0,0,440,442,3,334,167,0,441,
        434,1,0,0,0,442,445,1,0,0,0,443,441,1,0,0,0,443,444,1,0,0,0,444,
        447,1,0,0,0,445,443,1,0,0,0,446,448,5,179,0,0,447,446,1,0,0,0,447,
        448,1,0,0,0,448,450,1,0,0,0,449,432,1,0,0,0,449,450,1,0,0,0,450,
        451,1,0,0,0,451,452,5,3,0,0,452,9,1,0,0,0,453,475,3,40,20,0,454,
        456,5,2,0,0,455,457,5,179,0,0,456,455,1,0,0,0,456,457,1,0,0,0,457,
        458,1,0,0,0,458,460,3,124,62,0,459,461,5,179,0,0,460,459,1,0,0,0,
        460,461,1,0,0,0,461,462,1,0,0,0,462,463,5,3,0,0,463,475,1,0,0,0,
        464,475,3,324,162,0,465,475,3,320,160,0,466,467,3,320,160,0,467,
        469,5,5,0,0,468,470,5,179,0,0,469,468,1,0,0,0,469,470,1,0,0,0,470,
        471,1,0,0,0,471,472,3,334,167,0,472,475,1,0,0,0,473,475,3,300,150,
        0,474,453,1,0,0,0,474,454,1,0,0,0,474,464,1,0,0,0,474,465,1,0,0,
        0,474,466,1,0,0,0,474,473,1,0,0,0,475,11,1,0,0,0,476,477,5,67,0,
        0,477,478,5,179,0,0,478,479,3,334,167,0,479,480,5,179,0,0,480,481,
        5,88,0,0,481,482,5,179,0,0,482,484,5,2,0,0,483,485,5,179,0,0,484,
        483,1,0,0,0,484,485,1,0,0,0,485,486,1,0,0,0,486,497,5,164,0,0,487,
        489,5,179,0,0,488,487,1,0,0,0,488,489,1,0,0,0,489,490,1,0,0,0,490,
        492,5,4,0,0,491,493,5,179,0,0,492,491,1,0,0,0,492,493,1,0,0,0,493,
        494,1,0,0,0,494,496,5,164,0,0,495,488,1,0,0,0,496,499,1,0,0,0,497,
        495,1,0,0,0,497,498,1,0,0,0,498,500,1,0,0,0,499,497,1,0,0,0,500,
        501,5,3,0,0,501,502,5,179,0,0,502,503,5,57,0,0,503,504,5,179,0,0,
        504,505,5,62,0,0,505,13,1,0,0,0,506,507,5,67,0,0,507,508,5,179,0,
        0,508,510,5,2,0,0,509,511,5,179,0,0,510,509,1,0,0,0,510,511,1,0,
        0,0,511,512,1,0,0,0,512,514,3,124,62,0,513,515,5,179,0,0,514,513,
        1,0,0,0,514,515,1,0,0,0,515,516,1,0,0,0,516,517,5,3,0,0,517,518,
        5,179,0,0,518,519,5,139,0,0,519,520,5,179,0,0,520,534,5,164,0,0,
        521,523,5,179,0,0,522,521,1,0,0,0,522,523,1,0,0,0,523,524,1,0,0,
        0,524,526,5,2,0,0,525,527,5,179,0,0,526,525,1,0,0,0,526,527,1,0,
        0,0,527,528,1,0,0,0,528,530,3,24,12,0,529,531,5,179,0,0,530,529,
        1,0,0,0,530,531,1,0,0,0,531,532,1,0,0,0,532,533,5,3,0,0,533,535,
        1,0,0,0,534,522,1,0,0,0,534,535,1,0,0,0,535,15,1,0,0,0,536,537,5,
        85,0,0,537,538,5,179,0,0,538,539,5,71,0,0,539,540,5,179,0,0,540,
        554,5,164,0,0,541,543,5,179,0,0,542,541,1,0,0,0,542,543,1,0,0,0,
        543,544,1,0,0,0,544,546,5,2,0,0,545,547,5,179,0,0,546,545,1,0,0,
        0,546,547,1,0,0,0,547,548,1,0,0,0,548,550,3,24,12,0,549,551,5,179,
        0,0,550,549,1,0,0,0,550,551,1,0,0,0,551,552,1,0,0,0,552,553,5,3,
        0,0,553,555,1,0,0,0,554,542,1,0,0,0,554,555,1,0,0,0,555,17,1,0,0,
        0,556,557,5,95,0,0,557,558,5,179,0,0,558,559,5,71,0,0,559,560,5,
        179,0,0,560,561,5,164,0,0,561,19,1,0,0,0,562,563,5,55,0,0,563,564,
        5,179,0,0,564,569,5,164,0,0,565,566,5,179,0,0,566,567,5,52,0,0,567,
        568,5,179,0,0,568,570,3,334,167,0,569,565,1,0,0,0,569,570,1,0,0,
        0,570,571,1,0,0,0,571,572,5,179,0,0,572,574,5,2,0,0,573,575,5,179,
        0,0,574,573,1,0,0,0,574,575,1,0,0,0,575,576,1,0,0,0,576,577,5,72,
        0,0,577,578,5,179,0,0,578,587,3,336,168,0,579,581,5,179,0,0,580,
        579,1,0,0,0,580,581,1,0,0,0,581,582,1,0,0,0,582,584,5,4,0,0,583,
        585,5,179,0,0,584,583,1,0,0,0,584,585,1,0,0,0,585,586,1,0,0,0,586,
        588,3,24,12,0,587,580,1,0,0,0,587,588,1,0,0,0,588,590,1,0,0,0,589,
        591,5,179,0,0,590,589,1,0,0,0,590,591,1,0,0,0,591,592,1,0,0,0,592,
        593,5,3,0,0,593,21,1,0,0,0,594,608,3,336,168,0,595,597,5,179,0,0,
        596,595,1,0,0,0,596,597,1,0,0,0,597,598,1,0,0,0,598,600,5,6,0,0,
        599,601,5,179,0,0,600,599,1,0,0,0,600,601,1,0,0,0,601,609,1,0,0,
        0,602,604,5,179,0,0,603,602,1,0,0,0,604,607,1,0,0,0,605,603,1,0,
        0,0,605,606,1,0,0,0,606,609,1,0,0,0,607,605,1,0,0,0,608,596,1,0,
        0,0,608,605,1,0,0,0,609,610,1,0,0,0,610,611,3,286,143,0,611,614,
        1,0,0,0,612,614,3,336,168,0,613,594,1,0,0,0,613,612,1,0,0,0,614,
        23,1,0,0,0,615,626,3,22,11,0,616,618,5,179,0,0,617,616,1,0,0,0,617,
        618,1,0,0,0,618,619,1,0,0,0,619,621,5,4,0,0,620,622,5,179,0,0,621,
        620,1,0,0,0,621,622,1,0,0,0,622,623,1,0,0,0,623,625,3,22,11,0,624,
        617,1,0,0,0,625,628,1,0,0,0,626,624,1,0,0,0,626,627,1,0,0,0,627,
        25,1,0,0,0,628,626,1,0,0,0,629,630,5,77,0,0,630,631,5,179,0,0,631,
        632,3,334,167,0,632,27,1,0,0,0,633,634,5,148,0,0,634,635,5,179,0,
        0,635,636,3,334,167,0,636,29,1,0,0,0,637,638,5,58,0,0,638,639,5,
        179,0,0,639,641,3,336,168,0,640,642,5,179,0,0,641,640,1,0,0,0,641,
        642,1,0,0,0,642,643,1,0,0,0,643,645,5,6,0,0,644,646,5,179,0,0,645,
        644,1,0,0,0,645,646,1,0,0,0,646,647,1,0,0,0,647,648,3,232,116,0,
        648,653,1,0,0,0,649,650,5,58,0,0,650,651,5,179,0,0,651,653,3,300,
        150,0,652,637,1,0,0,0,652,649,1,0,0,0,653,31,1,0,0,0,654,655,5,63,
        0,0,655,656,5,179,0,0,656,657,5,117,0,0,657,658,5,179,0,0,658,659,
        5,137,0,0,659,660,5,179,0,0,660,661,3,334,167,0,661,662,5,179,0,
        0,662,663,5,100,0,0,663,664,5,179,0,0,664,665,5,164,0,0,665,33,1,
        0,0,0,666,667,5,69,0,0,667,668,5,179,0,0,668,669,5,106,0,0,669,670,
        5,179,0,0,670,672,3,302,151,0,671,673,5,179,0,0,672,671,1,0,0,0,
        672,673,1,0,0,0,673,674,1,0,0,0,674,676,5,2,0,0,675,677,5,179,0,
        0,676,675,1,0,0,0,676,677,1,0,0,0,677,679,1,0,0,0,678,680,3,36,18,
        0,679,678,1,0,0,0,679,680,1,0,0,0,680,682,1,0,0,0,681,683,5,179,
        0,0,682,681,1,0,0,0,682,683,1,0,0,0,683,685,1,0,0,0,684,686,3,38,
        19,0,685,684,1,0,0,0,685,686,1,0,0,0,686,697,1,0,0,0,687,689,5,179,
        0,0,688,687,1,0,0,0,688,689,1,0,0,0,689,690,1,0,0,0,690,692,5,4,
        0,0,691,693,5,179,0,0,692,691,1,0,0,0,692,693,1,0,0,0,693,694,1,
        0,0,0,694,696,3,38,19,0,695,688,1,0,0,0,696,699,1,0,0,0,697,695,
        1,0,0,0,697,698,1,0,0,0,698,701,1,0,0,0,699,697,1,0,0,0,700,702,
        5,179,0,0,701,700,1,0,0,0,701,702,1,0,0,0,702,703,1,0,0,0,703,704,
        5,3,0,0,704,705,5,179,0,0,705,706,5,52,0,0,706,707,5,179,0,0,707,
        708,3,232,116,0,708,35,1,0,0,0,709,720,3,336,168,0,710,712,5,179,
        0,0,711,710,1,0,0,0,711,712,1,0,0,0,712,713,1,0,0,0,713,715,5,4,
        0,0,714,716,5,179,0,0,715,714,1,0,0,0,715,716,1,0,0,0,716,717,1,
        0,0,0,717,719,3,336,168,0,718,711,1,0,0,0,719,722,1,0,0,0,720,718,
        1,0,0,0,720,721,1,0,0,0,721,37,1,0,0,0,722,720,1,0,0,0,723,725,3,
        336,168,0,724,726,5,179,0,0,725,724,1,0,0,0,725,726,1,0,0,0,726,
        727,1,0,0,0,727,728,5,161,0,0,728,730,5,6,0,0,729,731,5,179,0,0,
        730,729,1,0,0,0,730,731,1,0,0,0,731,732,1,0,0,0,732,733,3,286,143,
        0,733,39,1,0,0,0,734,736,5,7,0,0,735,737,5,179,0,0,736,735,1,0,0,
        0,736,737,1,0,0,0,737,738,1,0,0,0,738,749,5,164,0,0,739,741,5,179,
        0,0,740,739,1,0,0,0,740,741,1,0,0,0,741,742,1,0,0,0,742,744,5,4,
        0,0,743,745,5,179,0,0,744,743,1,0,0,0,744,745,1,0,0,0,745,746,1,
        0,0,0,746,748,5,164,0,0,747,740,1,0,0,0,748,751,1,0,0,0,749,747,
        1,0,0,0,749,750,1,0,0,0,750,752,1,0,0,0,751,749,1,0,0,0,752,768,
        5,8,0,0,753,768,5,164,0,0,754,756,5,90,0,0,755,757,5,179,0,0,756,
        755,1,0,0,0,756,757,1,0,0,0,757,758,1,0,0,0,758,760,5,2,0,0,759,
        761,5,179,0,0,760,759,1,0,0,0,760,761,1,0,0,0,761,762,1,0,0,0,762,
        764,5,164,0,0,763,765,5,179,0,0,764,763,1,0,0,0,764,765,1,0,0,0,
        765,766,1,0,0,0,766,768,5,3,0,0,767,734,1,0,0,0,767,753,1,0,0,0,
        767,754,1,0,0,0,768,41,1,0,0,0,769,770,5,96,0,0,770,771,5,179,0,
        0,771,772,5,114,0,0,772,773,5,179,0,0,773,774,5,83,0,0,774,43,1,
        0,0,0,775,776,5,69,0,0,776,777,5,179,0,0,777,778,5,113,0,0,778,779,
        5,179,0,0,779,780,5,137,0,0,780,784,5,179,0,0,781,782,3,42,21,0,
        782,783,5,179,0,0,783,785,1,0,0,0,784,781,1,0,0,0,784,785,1,0,0,
        0,785,786,1,0,0,0,786,814,3,334,167,0,787,789,5,179,0,0,788,787,
        1,0,0,0,788,789,1,0,0,0,789,790,1,0,0,0,790,792,5,2,0,0,791,793,
        5,179,0,0,792,791,1,0,0,0,792,793,1,0,0,0,793,794,1,0,0,0,794,796,
        3,94,47,0,795,797,5,179,0,0,796,795,1,0,0,0,796,797,1,0,0,0,797,
        803,1,0,0,0,798,800,5,4,0,0,799,801,5,179,0,0,800,799,1,0,0,0,800,
        801,1,0,0,0,801,802,1,0,0,0,802,804,3,98,49,0,803,798,1,0,0,0,803,
        804,1,0,0,0,804,806,1,0,0,0,805,807,5,179,0,0,806,805,1,0,0,0,806,
        807,1,0,0,0,807,808,1,0,0,0,808,809,5,3,0,0,809,815,1,0,0,0,810,
        811,5,179,0,0,811,812,5,52,0,0,812,813,5,179,0,0,813,815,3,124,62,
        0,814,788,1,0,0,0,814,810,1,0,0,0,815,45,1,0,0,0,816,817,5,69,0,
        0,817,818,5,179,0,0,818,819,5,126,0,0,819,820,5,179,0,0,820,823,
        5,137,0,0,821,822,5,179,0,0,822,824,5,92,0,0,823,821,1,0,0,0,823,
        824,1,0,0,0,824,827,1,0,0,0,825,826,5,179,0,0,826,828,3,42,21,0,
        827,825,1,0,0,0,827,828,1,0,0,0,828,829,1,0,0,0,829,830,5,179,0,
        0,830,832,3,334,167,0,831,833,5,179,0,0,832,831,1,0,0,0,832,833,
        1,0,0,0,833,834,1,0,0,0,834,836,5,2,0,0,835,837,5,179,0,0,836,835,
        1,0,0,0,836,837,1,0,0,0,837,838,1,0,0,0,838,840,3,48,24,0,839,841,
        5,179,0,0,840,839,1,0,0,0,840,841,1,0,0,0,841,868,1,0,0,0,842,844,
        5,4,0,0,843,845,5,179,0,0,844,843,1,0,0,0,844,845,1,0,0,0,845,846,
        1,0,0,0,846,848,3,94,47,0,847,849,5,179,0,0,848,847,1,0,0,0,848,
        849,1,0,0,0,849,851,1,0,0,0,850,842,1,0,0,0,850,851,1,0,0,0,851,
        860,1,0,0,0,852,854,5,4,0,0,853,855,5,179,0,0,854,853,1,0,0,0,854,
        855,1,0,0,0,855,856,1,0,0,0,856,858,3,336,168,0,857,859,5,179,0,
        0,858,857,1,0,0,0,858,859,1,0,0,0,859,861,1,0,0,0,860,852,1,0,0,
        0,860,861,1,0,0,0,861,862,1,0,0,0,862,869,5,3,0,0,863,864,5,3,0,
        0,864,865,5,179,0,0,865,866,5,52,0,0,866,867,5,179,0,0,867,869,3,
        124,62,0,868,850,1,0,0,0,868,863,1,0,0,0,869,885,1,0,0,0,870,871,
        5,179,0,0,871,873,5,151,0,0,872,874,5,179,0,0,873,872,1,0,0,0,873,
        874,1,0,0,0,874,875,1,0,0,0,875,877,5,2,0,0,876,878,5,179,0,0,877,
        876,1,0,0,0,877,878,1,0,0,0,878,879,1,0,0,0,879,881,3,24,12,0,880,
        882,5,179,0,0,881,880,1,0,0,0,881,882,1,0,0,0,882,883,1,0,0,0,883,
        884,5,3,0,0,884,886,1,0,0,0,885,870,1,0,0,0,885,886,1,0,0,0,886,
        47,1,0,0,0,887,898,3,50,25,0,888,890,5,179,0,0,889,888,1,0,0,0,889,
        890,1,0,0,0,890,891,1,0,0,0,891,893,5,4,0,0,892,894,5,179,0,0,893,
        892,1,0,0,0,893,894,1,0,0,0,894,895,1,0,0,0,895,897,3,50,25,0,896,
        889,1,0,0,0,897,900,1,0,0,0,898,896,1,0,0,0,898,899,1,0,0,0,899,
        49,1,0,0,0,900,898,1,0,0,0,901,902,5,88,0,0,902,903,5,179,0,0,903,
        904,3,334,167,0,904,905,5,179,0,0,905,906,5,139,0,0,906,907,5,179,
        0,0,907,908,3,334,167,0,908,51,1,0,0,0,909,910,5,69,0,0,910,911,
        5,179,0,0,911,912,5,131,0,0,912,916,5,179,0,0,913,914,3,42,21,0,
        914,915,5,179,0,0,915,917,1,0,0,0,916,913,1,0,0,0,916,917,1,0,0,
        0,917,918,1,0,0,0,918,923,3,334,167,0,919,920,5,179,0,0,920,922,
        3,56,28,0,921,919,1,0,0,0,922,925,1,0,0,0,923,921,1,0,0,0,923,924,
        1,0,0,0,924,53,1,0,0,0,925,923,1,0,0,0,926,927,5,69,0,0,927,928,
        5,179,0,0,928,929,5,143,0,0,929,930,5,179,0,0,930,931,3,334,167,
        0,931,932,5,179,0,0,932,933,5,52,0,0,933,934,5,179,0,0,934,936,3,
        100,50,0,935,937,5,179,0,0,936,935,1,0,0,0,936,937,1,0,0,0,937,55,
        1,0,0,0,938,944,3,58,29,0,939,944,3,60,30,0,940,944,3,62,31,0,941,
        944,3,64,32,0,942,944,3,66,33,0,943,938,1,0,0,0,943,939,1,0,0,0,
        943,940,1,0,0,0,943,941,1,0,0,0,943,942,1,0,0,0,944,57,1,0,0,0,945,
        946,5,98,0,0,946,949,5,179,0,0,947,948,5,57,0,0,948,950,5,179,0,
        0,949,947,1,0,0,0,949,950,1,0,0,0,950,952,1,0,0,0,951,953,5,162,
        0,0,952,951,1,0,0,0,952,953,1,0,0,0,953,954,1,0,0,0,954,955,3,330,
        165,0,955,59,1,0,0,0,956,957,5,112,0,0,957,958,5,179,0,0,958,966,
        5,110,0,0,959,960,5,110,0,0,960,962,5,179,0,0,961,963,5,162,0,0,
        962,961,1,0,0,0,962,963,1,0,0,0,963,964,1,0,0,0,964,966,3,330,165,
        0,965,956,1,0,0,0,965,959,1,0,0,0,966,61,1,0,0,0,967,968,5,112,0,
        0,968,969,5,179,0,0,969,977,5,108,0,0,970,971,5,108,0,0,971,973,
        5,179,0,0,972,974,5,162,0,0,973,972,1,0,0,0,973,974,1,0,0,0,974,
        975,1,0,0,0,975,977,3,330,165,0,976,967,1,0,0,0,976,970,1,0,0,0,
        977,63,1,0,0,0,978,979,5,134,0,0,979,982,5,179,0,0,980,981,5,151,
        0,0,981,983,5,179,0,0,982,980,1,0,0,0,982,983,1,0,0,0,983,985,1,
        0,0,0,984,986,5,162,0,0,985,984,1,0,0,0,985,986,1,0,0,0,986,987,
        1,0,0,0,987,988,3,330,165,0,988,65,1,0,0,0,989,990,5,112,0,0,990,
        992,5,179,0,0,991,989,1,0,0,0,991,992,1,0,0,0,992,993,1,0,0,0,993,
        994,5,70,0,0,994,67,1,0,0,0,995,996,5,96,0,0,996,997,5,179,0,0,997,
        998,5,83,0,0,998,69,1,0,0,0,999,1000,5,79,0,0,1000,1001,5,179,0,
        0,1001,1002,7,0,0,0,1002,1006,5,179,0,0,1003,1004,3,68,34,0,1004,
        1005,5,179,0,0,1005,1007,1,0,0,0,1006,1003,1,0,0,0,1006,1007,1,0,
        0,0,1007,1008,1,0,0,0,1008,1009,3,334,167,0,1009,71,1,0,0,0,1010,
        1011,5,50,0,0,1011,1012,5,179,0,0,1012,1013,5,137,0,0,1013,1014,
        5,179,0,0,1014,1015,3,334,167,0,1015,1016,5,179,0,0,1016,1017,3,
        74,37,0,1017,73,1,0,0,0,1018,1025,3,76,38,0,1019,1025,3,80,40,0,
        1020,1025,3,82,41,0,1021,1025,3,84,42,0,1022,1025,3,86,43,0,1023,
        1025,3,88,44,0,1024,1018,1,0,0,0,1024,1019,1,0,0,0,1024,1020,1,0,
        0,0,1024,1021,1,0,0,0,1024,1022,1,0,0,0,1024,1023,1,0,0,0,1025,75,
        1,0,0,0,1026,1027,5,48,0,0,1027,1031,5,179,0,0,1028,1029,3,42,21,
        0,1029,1030,5,179,0,0,1030,1032,1,0,0,0,1031,1028,1,0,0,0,1031,1032,
        1,0,0,0,1032,1033,1,0,0,0,1033,1034,3,328,164,0,1034,1035,5,179,
        0,0,1035,1038,3,100,50,0,1036,1037,5,179,0,0,1037,1039,3,78,39,0,
        1038,1036,1,0,0,0,1038,1039,1,0,0,0,1039,77,1,0,0,0,1040,1041,5,
        73,0,0,1041,1042,5,179,0,0,1042,1043,3,232,116,0,1043,79,1,0,0,0,
        1044,1045,5,79,0,0,1045,1049,5,179,0,0,1046,1047,3,68,34,0,1047,
        1048,5,179,0,0,1048,1050,1,0,0,0,1049,1046,1,0,0,0,1049,1050,1,0,
        0,0,1050,1051,1,0,0,0,1051,1052,3,328,164,0,1052,81,1,0,0,0,1053,
        1054,5,127,0,0,1054,1055,5,179,0,0,1055,1056,5,139,0,0,1056,1057,
        5,179,0,0,1057,1058,3,334,167,0,1058,83,1,0,0,0,1059,1060,5,127,
        0,0,1060,1061,5,179,0,0,1061,1062,3,328,164,0,1062,1063,5,179,0,
        0,1063,1064,5,139,0,0,1064,1065,5,179,0,0,1065,1066,3,328,164,0,
        1066,85,1,0,0,0,1067,1068,5,48,0,0,1068,1072,5,179,0,0,1069,1070,
        3,42,21,0,1070,1071,5,179,0,0,1071,1073,1,0,0,0,1072,1069,1,0,0,
        0,1072,1073,1,0,0,0,1073,1074,1,0,0,0,1074,1075,3,50,25,0,1075,87,
        1,0,0,0,1076,1077,5,79,0,0,1077,1081,5,179,0,0,1078,1079,3,68,34,
        0,1079,1080,5,179,0,0,1080,1082,1,0,0,0,1081,1078,1,0,0,0,1081,1082,
        1,0,0,0,1082,1083,1,0,0,0,1083,1084,3,50,25,0,1084,89,1,0,0,0,1085,
        1096,3,92,46,0,1086,1088,5,179,0,0,1087,1086,1,0,0,0,1087,1088,1,
        0,0,0,1088,1089,1,0,0,0,1089,1091,5,4,0,0,1090,1092,5,179,0,0,1091,
        1090,1,0,0,0,1091,1092,1,0,0,0,1092,1093,1,0,0,0,1093,1095,3,92,
        46,0,1094,1087,1,0,0,0,1095,1098,1,0,0,0,1096,1094,1,0,0,0,1096,
        1097,1,0,0,0,1097,91,1,0,0,0,1098,1096,1,0,0,0,1099,1100,3,328,164,
        0,1100,1101,5,179,0,0,1101,1102,3,100,50,0,1102,93,1,0,0,0,1103,
        1114,3,96,48,0,1104,1106,5,179,0,0,1105,1104,1,0,0,0,1105,1106,1,
        0,0,0,1106,1107,1,0,0,0,1107,1109,5,4,0,0,1108,1110,5,179,0,0,1109,
        1108,1,0,0,0,1109,1110,1,0,0,0,1110,1111,1,0,0,0,1111,1113,3,96,
        48,0,1112,1105,1,0,0,0,1113,1116,1,0,0,0,1114,1112,1,0,0,0,1114,
        1115,1,0,0,0,1115,95,1,0,0,0,1116,1114,1,0,0,0,1117,1120,3,92,46,
        0,1118,1119,5,179,0,0,1119,1121,3,78,39,0,1120,1118,1,0,0,0,1120,
        1121,1,0,0,0,1121,1126,1,0,0,0,1122,1123,5,179,0,0,1123,1124,5,122,
        0,0,1124,1125,5,179,0,0,1125,1127,5,102,0,0,1126,1122,1,0,0,0,1126,
        1127,1,0,0,0,1127,97,1,0,0,0,1128,1129,5,122,0,0,1129,1130,5,179,
        0,0,1130,1132,5,102,0,0,1131,1133,5,179,0,0,1132,1131,1,0,0,0,1132,
        1133,1,0,0,0,1133,1134,1,0,0,0,1134,1136,5,2,0,0,1135,1137,5,179,
        0,0,1136,1135,1,0,0,0,1136,1137,1,0,0,0,1137,1138,1,0,0,0,1138,1140,
        3,328,164,0,1139,1141,5,179,0,0,1140,1139,1,0,0,0,1140,1141,1,0,
        0,0,1141,1142,1,0,0,0,1142,1143,5,3,0,0,1143,99,1,0,0,0,1144,1145,
        6,50,-1,0,1145,1233,3,336,168,0,1146,1148,5,144,0,0,1147,1149,5,
        179,0,0,1148,1147,1,0,0,0,1148,1149,1,0,0,0,1149,1150,1,0,0,0,1150,
        1152,5,2,0,0,1151,1153,5,179,0,0,1152,1151,1,0,0,0,1152,1153,1,0,
        0,0,1153,1154,1,0,0,0,1154,1156,3,90,45,0,1155,1157,5,179,0,0,1156,
        1155,1,0,0,0,1156,1157,1,0,0,0,1157,1158,1,0,0,0,1158,1159,5,3,0,
        0,1159,1233,1,0,0,0,1160,1162,5,136,0,0,1161,1163,5,179,0,0,1162,
        1161,1,0,0,0,1162,1163,1,0,0,0,1163,1164,1,0,0,0,1164,1166,5,2,0,
        0,1165,1167,5,179,0,0,1166,1165,1,0,0,0,1166,1167,1,0,0,0,1167,1168,
        1,0,0,0,1168,1170,3,90,45,0,1169,1171,5,179,0,0,1170,1169,1,0,0,
        0,1170,1171,1,0,0,0,1171,1172,1,0,0,0,1172,1173,5,3,0,0,1173,1233,
        1,0,0,0,1174,1176,3,336,168,0,1175,1177,5,179,0,0,1176,1175,1,0,
        0,0,1176,1177,1,0,0,0,1177,1178,1,0,0,0,1178,1180,5,2,0,0,1179,1181,
        5,179,0,0,1180,1179,1,0,0,0,1180,1181,1,0,0,0,1181,1182,1,0,0,0,
        1182,1184,3,90,45,0,1183,1185,5,179,0,0,1184,1183,1,0,0,0,1184,1185,
        1,0,0,0,1185,1186,1,0,0,0,1186,1187,5,3,0,0,1187,1233,1,0,0,0,1188,
        1190,3,336,168,0,1189,1191,5,179,0,0,1190,1189,1,0,0,0,1190,1191,
        1,0,0,0,1191,1192,1,0,0,0,1192,1194,5,2,0,0,1193,1195,5,179,0,0,
        1194,1193,1,0,0,0,1194,1195,1,0,0,0,1195,1196,1,0,0,0,1196,1198,
        3,100,50,0,1197,1199,5,179,0,0,1198,1197,1,0,0,0,1198,1199,1,0,0,
        0,1199,1200,1,0,0,0,1200,1202,5,4,0,0,1201,1203,5,179,0,0,1202,1201,
        1,0,0,0,1202,1203,1,0,0,0,1203,1204,1,0,0,0,1204,1206,3,100,50,0,
        1205,1207,5,179,0,0,1206,1205,1,0,0,0,1206,1207,1,0,0,0,1207,1208,
        1,0,0,0,1208,1209,5,3,0,0,1209,1233,1,0,0,0,1210,1212,5,157,0,0,
        1211,1213,5,179,0,0,1212,1211,1,0,0,0,1212,1213,1,0,0,0,1213,1214,
        1,0,0,0,1214,1216,5,2,0,0,1215,1217,5,179,0,0,1216,1215,1,0,0,0,
        1216,1217,1,0,0,0,1217,1218,1,0,0,0,1218,1220,3,330,165,0,1219,1221,
        5,179,0,0,1220,1219,1,0,0,0,1220,1221,1,0,0,0,1221,1222,1,0,0,0,
        1222,1224,5,4,0,0,1223,1225,5,179,0,0,1224,1223,1,0,0,0,1224,1225,
        1,0,0,0,1225,1226,1,0,0,0,1226,1228,3,330,165,0,1227,1229,5,179,
        0,0,1228,1227,1,0,0,0,1228,1229,1,0,0,0,1229,1230,1,0,0,0,1230,1231,
        5,3,0,0,1231,1233,1,0,0,0,1232,1144,1,0,0,0,1232,1146,1,0,0,0,1232,
        1160,1,0,0,0,1232,1174,1,0,0,0,1232,1188,1,0,0,0,1232,1210,1,0,0,
        0,1233,1238,1,0,0,0,1234,1235,10,6,0,0,1235,1237,3,102,51,0,1236,
        1234,1,0,0,0,1237,1240,1,0,0,0,1238,1236,1,0,0,0,1238,1239,1,0,0,
        0,1239,101,1,0,0,0,1240,1238,1,0,0,0,1241,1245,3,104,52,0,1242,1244,
        3,104,52,0,1243,1242,1,0,0,0,1244,1247,1,0,0,0,1245,1243,1,0,0,0,
        1245,1246,1,0,0,0,1246,103,1,0,0,0,1247,1245,1,0,0,0,1248,1250,5,
        7,0,0,1249,1251,3,330,165,0,1250,1249,1,0,0,0,1250,1251,1,0,0,0,
        1251,1252,1,0,0,0,1252,1253,5,8,0,0,1253,105,1,0,0,0,1254,1257,3,
        108,54,0,1255,1257,3,110,55,0,1256,1254,1,0,0,0,1256,1255,1,0,0,
        0,1257,107,1,0,0,0,1258,1261,5,84,0,0,1259,1260,5,179,0,0,1260,1262,
        5,105,0,0,1261,1259,1,0,0,0,1261,1262,1,0,0,0,1262,109,1,0,0,0,1263,
        1264,5,123,0,0,1264,111,1,0,0,0,1265,1266,5,56,0,0,1266,1267,5,179,
        0,0,1267,1279,5,141,0,0,1268,1269,5,56,0,0,1269,1270,5,179,0,0,1270,
        1271,5,141,0,0,1271,1272,5,179,0,0,1272,1273,5,125,0,0,1273,1274,
        5,179,0,0,1274,1279,5,118,0,0,1275,1279,5,64,0,0,1276,1279,5,129,
        0,0,1277,1279,5,61,0,0,1278,1265,1,0,0,0,1278,1268,1,0,0,0,1278,
        1275,1,0,0,0,1278,1276,1,0,0,0,1278,1277,1,0,0,0,1279,113,1,0,0,
        0,1280,1285,3,116,58,0,1281,1285,3,118,59,0,1282,1285,3,120,60,0,
        1283,1285,3,122,61,0,1284,1280,1,0,0,0,1284,1281,1,0,0,0,1284,1282,
        1,0,0,0,1284,1283,1,0,0,0,1285,115,1,0,0,0,1286,1287,5,104,0,0,1287,
        1290,5,179,0,0,1288,1289,5,86,0,0,1289,1291,5,179,0,0,1290,1288,
        1,0,0,0,1290,1291,1,0,0,0,1291,1294,1,0,0,0,1292,1295,5,164,0,0,
        1293,1295,3,320,160,0,1294,1292,1,0,0,0,1294,1293,1,0,0,0,1295,117,
        1,0,0,0,1296,1297,5,89,0,0,1297,1299,5,179,0,0,1298,1296,1,0,0,0,
        1298,1299,1,0,0,0,1299,1300,1,0,0,0,1300,1301,5,99,0,0,1301,1302,
        5,179,0,0,1302,1307,3,320,160,0,1303,1304,5,179,0,0,1304,1305,5,
        88,0,0,1305,1306,5,179,0,0,1306,1308,5,164,0,0,1307,1303,1,0,0,0,
        1307,1308,1,0,0,0,1308,119,1,0,0,0,1309,1310,5,146,0,0,1310,1311,
        5,179,0,0,1311,1312,3,320,160,0,1312,121,1,0,0,0,1313,1314,5,147,
        0,0,1314,1315,5,179,0,0,1315,1316,3,320,160,0,1316,123,1,0,0,0,1317,
        1318,3,126,63,0,1318,125,1,0,0,0,1319,1326,3,130,65,0,1320,1322,
        5,179,0,0,1321,1320,1,0,0,0,1321,1322,1,0,0,0,1322,1323,1,0,0,0,
        1323,1325,3,128,64,0,1324,1321,1,0,0,0,1325,1328,1,0,0,0,1326,1324,
        1,0,0,0,1326,1327,1,0,0,0,1327,1341,1,0,0,0,1328,1326,1,0,0,0,1329,
        1331,3,172,86,0,1330,1332,5,179,0,0,1331,1330,1,0,0,0,1331,1332,
        1,0,0,0,1332,1334,1,0,0,0,1333,1329,1,0,0,0,1334,1335,1,0,0,0,1335,
        1333,1,0,0,0,1335,1336,1,0,0,0,1336,1337,1,0,0,0,1337,1338,3,130,
        65,0,1338,1339,6,63,-1,0,1339,1341,1,0,0,0,1340,1319,1,0,0,0,1340,
        1333,1,0,0,0,1341,127,1,0,0,0,1342,1343,5,144,0,0,1343,1344,5,179,
        0,0,1344,1346,5,49,0,0,1345,1347,5,179,0,0,1346,1345,1,0,0,0,1346,
        1347,1,0,0,0,1347,1348,1,0,0,0,1348,1355,3,130,65,0,1349,1351,5,
        144,0,0,1350,1352,5,179,0,0,1351,1350,1,0,0,0,1351,1352,1,0,0,0,
        1352,1353,1,0,0,0,1353,1355,3,130,65,0,1354,1342,1,0,0,0,1354,1349,
        1,0,0,0,1355,129,1,0,0,0,1356,1359,3,132,66,0,1357,1359,3,134,67,
        0,1358,1356,1,0,0,0,1358,1357,1,0,0,0,1359,131,1,0,0,0,1360,1362,
        3,140,70,0,1361,1363,5,179,0,0,1362,1361,1,0,0,0,1362,1363,1,0,0,
        0,1363,1365,1,0,0,0,1364,1360,1,0,0,0,1365,1368,1,0,0,0,1366,1364,
        1,0,0,0,1366,1367,1,0,0,0,1367,1369,1,0,0,0,1368,1366,1,0,0,0,1369,
        1396,3,172,86,0,1370,1372,3,140,70,0,1371,1373,5,179,0,0,1372,1371,
        1,0,0,0,1372,1373,1,0,0,0,1373,1375,1,0,0,0,1374,1370,1,0,0,0,1375,
        1378,1,0,0,0,1376,1374,1,0,0,0,1376,1377,1,0,0,0,1377,1379,1,0,0,
        0,1378,1376,1,0,0,0,1379,1386,3,138,69,0,1380,1382,5,179,0,0,1381,
        1380,1,0,0,0,1381,1382,1,0,0,0,1382,1383,1,0,0,0,1383,1385,3,138,
        69,0,1384,1381,1,0,0,0,1385,1388,1,0,0,0,1386,1384,1,0,0,0,1386,
        1387,1,0,0,0,1387,1393,1,0,0,0,1388,1386,1,0,0,0,1389,1391,5,179,
        0,0,1390,1389,1,0,0,0,1390,1391,1,0,0,0,1391,1392,1,0,0,0,1392,1394,
        3,172,86,0,1393,1390,1,0,0,0,1393,1394,1,0,0,0,1394,1396,1,0,0,0,
        1395,1366,1,0,0,0,1395,1376,1,0,0,0,1396,133,1,0,0,0,1397,1399,3,
        136,68,0,1398,1400,5,179,0,0,1399,1398,1,0,0,0,1399,1400,1,0,0,0,
        1400,1402,1,0,0,0,1401,1397,1,0,0,0,1402,1403,1,0,0,0,1403,1401,
        1,0,0,0,1403,1404,1,0,0,0,1404,1405,1,0,0,0,1405,1406,3,132,66,0,
        1406,135,1,0,0,0,1407,1409,3,140,70,0,1408,1410,5,179,0,0,1409,1408,
        1,0,0,0,1409,1410,1,0,0,0,1410,1412,1,0,0,0,1411,1407,1,0,0,0,1412,
        1415,1,0,0,0,1413,1411,1,0,0,0,1413,1414,1,0,0,0,1414,1422,1,0,0,
        0,1415,1413,1,0,0,0,1416,1418,3,138,69,0,1417,1419,5,179,0,0,1418,
        1417,1,0,0,0,1418,1419,1,0,0,0,1419,1421,1,0,0,0,1420,1416,1,0,0,
        0,1421,1424,1,0,0,0,1422,1420,1,0,0,0,1422,1423,1,0,0,0,1423,1425,
        1,0,0,0,1424,1422,1,0,0,0,1425,1426,3,170,85,0,1426,137,1,0,0,0,
        1427,1432,3,158,79,0,1428,1432,3,160,80,0,1429,1432,3,164,82,0,1430,
        1432,3,168,84,0,1431,1427,1,0,0,0,1431,1428,1,0,0,0,1431,1429,1,
        0,0,0,1431,1430,1,0,0,0,1432,139,1,0,0,0,1433,1438,3,150,75,0,1434,
        1438,3,156,78,0,1435,1438,3,148,74,0,1436,1438,3,142,71,0,1437,1433,
        1,0,0,0,1437,1434,1,0,0,0,1437,1435,1,0,0,0,1437,1436,1,0,0,0,1438,
        141,1,0,0,0,1439,1457,5,104,0,0,1440,1441,5,179,0,0,1441,1442,5,
        151,0,0,1442,1443,5,179,0,0,1443,1445,5,93,0,0,1444,1446,5,179,0,
        0,1445,1444,1,0,0,0,1445,1446,1,0,0,0,1446,1447,1,0,0,0,1447,1449,
        5,2,0,0,1448,1450,5,179,0,0,1449,1448,1,0,0,0,1449,1450,1,0,0,0,
        1450,1451,1,0,0,0,1451,1453,3,90,45,0,1452,1454,5,179,0,0,1453,1452,
        1,0,0,0,1453,1454,1,0,0,0,1454,1455,1,0,0,0,1455,1456,5,3,0,0,1456,
        1458,1,0,0,0,1457,1440,1,0,0,0,1457,1458,1,0,0,0,1458,1459,1,0,0,
        0,1459,1460,5,179,0,0,1460,1461,5,88,0,0,1461,1462,5,179,0,0,1462,
        1476,3,10,5,0,1463,1465,5,179,0,0,1464,1463,1,0,0,0,1464,1465,1,
        0,0,0,1465,1466,1,0,0,0,1466,1468,5,2,0,0,1467,1469,5,179,0,0,1468,
        1467,1,0,0,0,1468,1469,1,0,0,0,1469,1470,1,0,0,0,1470,1472,3,24,
        12,0,1471,1473,5,179,0,0,1472,1471,1,0,0,0,1472,1473,1,0,0,0,1473,
        1474,1,0,0,0,1474,1475,5,3,0,0,1475,1477,1,0,0,0,1476,1464,1,0,0,
        0,1476,1477,1,0,0,0,1477,1482,1,0,0,0,1478,1480,5,179,0,0,1479,1478,
        1,0,0,0,1479,1480,1,0,0,0,1480,1481,1,0,0,0,1481,1483,3,188,94,0,
        1482,1479,1,0,0,0,1482,1483,1,0,0,0,1483,143,1,0,0,0,1484,1485,3,
        320,160,0,1485,1486,5,179,0,0,1486,1487,5,52,0,0,1487,1488,5,179,
        0,0,1488,1490,1,0,0,0,1489,1484,1,0,0,0,1489,1490,1,0,0,0,1490,1491,
        1,0,0,0,1491,1492,3,320,160,0,1492,145,1,0,0,0,1493,1504,3,144,72,
        0,1494,1496,5,179,0,0,1495,1494,1,0,0,0,1495,1496,1,0,0,0,1496,1497,
        1,0,0,0,1497,1499,5,4,0,0,1498,1500,5,179,0,0,1499,1498,1,0,0,0,
        1499,1500,1,0,0,0,1500,1501,1,0,0,0,1501,1503,3,144,72,0,1502,1495,
        1,0,0,0,1503,1506,1,0,0,0,1504,1502,1,0,0,0,1504,1505,1,0,0,0,1505,
        147,1,0,0,0,1506,1504,1,0,0,0,1507,1508,5,58,0,0,1508,1509,5,179,
        0,0,1509,1514,3,300,150,0,1510,1512,5,179,0,0,1511,1510,1,0,0,0,
        1511,1512,1,0,0,0,1512,1513,1,0,0,0,1513,1515,3,188,94,0,1514,1511,
        1,0,0,0,1514,1515,1,0,0,0,1515,1522,1,0,0,0,1516,1518,5,179,0,0,
        1517,1516,1,0,0,0,1517,1518,1,0,0,0,1518,1519,1,0,0,0,1519,1520,
        5,156,0,0,1520,1521,5,179,0,0,1521,1523,3,146,73,0,1522,1517,1,0,
        0,0,1522,1523,1,0,0,0,1523,149,1,0,0,0,1524,1525,5,119,0,0,1525,
        1527,5,179,0,0,1526,1524,1,0,0,0,1526,1527,1,0,0,0,1527,1528,1,0,
        0,0,1528,1530,5,107,0,0,1529,1531,5,179,0,0,1530,1529,1,0,0,0,1530,
        1531,1,0,0,0,1531,1532,1,0,0,0,1532,1535,3,190,95,0,1533,1534,5,
        179,0,0,1534,1536,3,188,94,0,1535,1533,1,0,0,0,1535,1536,1,0,0,0,
        1536,1539,1,0,0,0,1537,1538,5,179,0,0,1538,1540,3,152,76,0,1539,
        1537,1,0,0,0,1539,1540,1,0,0,0,1540,151,1,0,0,0,1541,1542,5,94,0,
        0,1542,1543,5,179,0,0,1543,1544,3,154,77,0,1544,153,1,0,0,0,1545,
        1546,6,77,-1,0,1546,1548,5,2,0,0,1547,1549,5,179,0,0,1548,1547,1,
        0,0,0,1548,1549,1,0,0,0,1549,1550,1,0,0,0,1550,1552,3,154,77,0,1551,
        1553,5,179,0,0,1552,1551,1,0,0,0,1552,1553,1,0,0,0,1553,1554,1,0,
        0,0,1554,1555,5,3,0,0,1555,1558,1,0,0,0,1556,1558,3,334,167,0,1557,
        1545,1,0,0,0,1557,1556,1,0,0,0,1558,1575,1,0,0,0,1559,1560,10,4,
        0,0,1560,1561,5,179,0,0,1561,1562,5,101,0,0,1562,1563,5,179,0,0,
        1563,1574,3,154,77,5,1564,1569,10,3,0,0,1565,1566,5,179,0,0,1566,
        1567,5,111,0,0,1567,1568,5,179,0,0,1568,1570,3,334,167,0,1569,1565,
        1,0,0,0,1570,1571,1,0,0,0,1571,1569,1,0,0,0,1571,1572,1,0,0,0,1572,
        1574,1,0,0,0,1573,1559,1,0,0,0,1573,1564,1,0,0,0,1574,1577,1,0,0,
        0,1575,1573,1,0,0,0,1575,1576,1,0,0,0,1576,155,1,0,0,0,1577,1575,
        1,0,0,0,1578,1580,5,145,0,0,1579,1581,5,179,0,0,1580,1579,1,0,0,
        0,1580,1581,1,0,0,0,1581,1582,1,0,0,0,1582,1583,3,232,116,0,1583,
        1584,5,179,0,0,1584,1585,5,52,0,0,1585,1586,5,179,0,0,1586,1587,
        3,320,160,0,1587,157,1,0,0,0,1588,1590,5,69,0,0,1589,1591,5,179,
        0,0,1590,1589,1,0,0,0,1590,1591,1,0,0,0,1591,1592,1,0,0,0,1592,1593,
        3,190,95,0,1593,159,1,0,0,0,1594,1596,5,109,0,0,1595,1597,5,179,
        0,0,1596,1595,1,0,0,0,1596,1597,1,0,0,0,1597,1598,1,0,0,0,1598,1603,
        3,190,95,0,1599,1600,5,179,0,0,1600,1602,3,162,81,0,1601,1599,1,
        0,0,0,1602,1605,1,0,0,0,1603,1601,1,0,0,0,1603,1604,1,0,0,0,1604,
        161,1,0,0,0,1605,1603,1,0,0,0,1606,1607,5,117,0,0,1607,1608,5,179,
        0,0,1608,1609,5,107,0,0,1609,1610,5,179,0,0,1610,1617,3,164,82,0,
        1611,1612,5,117,0,0,1612,1613,5,179,0,0,1613,1614,5,69,0,0,1614,
        1615,5,179,0,0,1615,1617,3,164,82,0,1616,1606,1,0,0,0,1616,1611,
        1,0,0,0,1617,163,1,0,0,0,1618,1620,5,132,0,0,1619,1621,5,179,0,0,
        1620,1619,1,0,0,0,1620,1621,1,0,0,0,1621,1622,1,0,0,0,1622,1633,
        3,166,83,0,1623,1625,5,179,0,0,1624,1623,1,0,0,0,1624,1625,1,0,0,
        0,1625,1626,1,0,0,0,1626,1628,5,4,0,0,1627,1629,5,179,0,0,1628,1627,
        1,0,0,0,1628,1629,1,0,0,0,1629,1630,1,0,0,0,1630,1632,3,166,83,0,
        1631,1624,1,0,0,0,1632,1635,1,0,0,0,1633,1631,1,0,0,0,1633,1634,
        1,0,0,0,1634,165,1,0,0,0,1635,1633,1,0,0,0,1636,1638,3,326,163,0,
        1637,1639,5,179,0,0,1638,1637,1,0,0,0,1638,1639,1,0,0,0,1639,1640,
        1,0,0,0,1640,1642,5,6,0,0,1641,1643,5,179,0,0,1642,1641,1,0,0,0,
        1642,1643,1,0,0,0,1643,1644,1,0,0,0,1644,1645,3,232,116,0,1645,167,
        1,0,0,0,1646,1647,5,77,0,0,1647,1649,5,179,0,0,1648,1646,1,0,0,0,
        1648,1649,1,0,0,0,1649,1650,1,0,0,0,1650,1652,5,74,0,0,1651,1653,
        5,179,0,0,1652,1651,1,0,0,0,1652,1653,1,0,0,0,1653,1654,1,0,0,0,
        1654,1665,3,232,116,0,1655,1657,5,179,0,0,1656,1655,1,0,0,0,1656,
        1657,1,0,0,0,1657,1658,1,0,0,0,1658,1660,5,4,0,0,1659,1661,5,179,
        0,0,1660,1659,1,0,0,0,1660,1661,1,0,0,0,1661,1662,1,0,0,0,1662,1664,
        3,232,116,0,1663,1656,1,0,0,0,1664,1667,1,0,0,0,1665,1663,1,0,0,
        0,1665,1666,1,0,0,0,1666,169,1,0,0,0,1667,1665,1,0,0,0,1668,1669,
        5,151,0,0,1669,1674,3,174,87,0,1670,1672,5,179,0,0,1671,1670,1,0,
        0,0,1671,1672,1,0,0,0,1672,1673,1,0,0,0,1673,1675,3,188,94,0,1674,
        1671,1,0,0,0,1674,1675,1,0,0,0,1675,171,1,0,0,0,1676,1677,5,128,
        0,0,1677,1678,3,174,87,0,1678,173,1,0,0,0,1679,1681,5,179,0,0,1680,
        1679,1,0,0,0,1680,1681,1,0,0,0,1681,1682,1,0,0,0,1682,1684,5,78,
        0,0,1683,1680,1,0,0,0,1683,1684,1,0,0,0,1684,1685,1,0,0,0,1685,1686,
        5,179,0,0,1686,1689,3,176,88,0,1687,1688,5,179,0,0,1688,1690,3,180,
        90,0,1689,1687,1,0,0,0,1689,1690,1,0,0,0,1690,1693,1,0,0,0,1691,
        1692,5,179,0,0,1692,1694,3,182,91,0,1693,1691,1,0,0,0,1693,1694,
        1,0,0,0,1694,1697,1,0,0,0,1695,1696,5,179,0,0,1696,1698,3,184,92,
        0,1697,1695,1,0,0,0,1697,1698,1,0,0,0,1698,175,1,0,0,0,1699,1710,
        5,158,0,0,1700,1702,5,179,0,0,1701,1700,1,0,0,0,1701,1702,1,0,0,
        0,1702,1703,1,0,0,0,1703,1705,5,4,0,0,1704,1706,5,179,0,0,1705,1704,
        1,0,0,0,1705,1706,1,0,0,0,1706,1707,1,0,0,0,1707,1709,3,178,89,0,
        1708,1701,1,0,0,0,1709,1712,1,0,0,0,1710,1708,1,0,0,0,1710,1711,
        1,0,0,0,1711,1728,1,0,0,0,1712,1710,1,0,0,0,1713,1724,3,178,89,0,
        1714,1716,5,179,0,0,1715,1714,1,0,0,0,1715,1716,1,0,0,0,1716,1717,
        1,0,0,0,1717,1719,5,4,0,0,1718,1720,5,179,0,0,1719,1718,1,0,0,0,
        1719,1720,1,0,0,0,1720,1721,1,0,0,0,1721,1723,3,178,89,0,1722,1715,
        1,0,0,0,1723,1726,1,0,0,0,1724,1722,1,0,0,0,1724,1725,1,0,0,0,1725,
        1728,1,0,0,0,1726,1724,1,0,0,0,1727,1699,1,0,0,0,1727,1713,1,0,0,
        0,1728,177,1,0,0,0,1729,1730,3,232,116,0,1730,1731,5,179,0,0,1731,
        1732,5,52,0,0,1732,1733,5,179,0,0,1733,1734,3,320,160,0,1734,1737,
        1,0,0,0,1735,1737,3,232,116,0,1736,1729,1,0,0,0,1736,1735,1,0,0,
        0,1737,179,1,0,0,0,1738,1739,5,121,0,0,1739,1740,5,179,0,0,1740,
        1741,5,57,0,0,1741,1742,5,179,0,0,1742,1750,3,186,93,0,1743,1745,
        5,4,0,0,1744,1746,5,179,0,0,1745,1744,1,0,0,0,1745,1746,1,0,0,0,
        1746,1747,1,0,0,0,1747,1749,3,186,93,0,1748,1743,1,0,0,0,1749,1752,
        1,0,0,0,1750,1748,1,0,0,0,1750,1751,1,0,0,0,1751,181,1,0,0,0,1752,
        1750,1,0,0,0,1753,1754,5,159,0,0,1754,1755,5,179,0,0,1755,1756,3,
        232,116,0,1756,183,1,0,0,0,1757,1758,5,103,0,0,1758,1759,5,179,0,
        0,1759,1760,3,232,116,0,1760,185,1,0,0,0,1761,1766,3,232,116,0,1762,
        1764,5,179,0,0,1763,1762,1,0,0,0,1763,1764,1,0,0,0,1764,1765,1,0,
        0,0,1765,1767,7,1,0,0,1766,1763,1,0,0,0,1766,1767,1,0,0,0,1767,187,
        1,0,0,0,1768,1769,5,150,0,0,1769,1770,5,179,0,0,1770,1771,3,232,
        116,0,1771,189,1,0,0,0,1772,1783,3,192,96,0,1773,1775,5,179,0,0,
        1774,1773,1,0,0,0,1774,1775,1,0,0,0,1775,1776,1,0,0,0,1776,1778,
        5,4,0,0,1777,1779,5,179,0,0,1778,1777,1,0,0,0,1778,1779,1,0,0,0,
        1779,1780,1,0,0,0,1780,1782,3,192,96,0,1781,1774,1,0,0,0,1782,1785,
        1,0,0,0,1783,1781,1,0,0,0,1783,1784,1,0,0,0,1784,191,1,0,0,0,1785,
        1783,1,0,0,0,1786,1788,3,320,160,0,1787,1789,5,179,0,0,1788,1787,
        1,0,0,0,1788,1789,1,0,0,0,1789,1790,1,0,0,0,1790,1792,5,6,0,0,1791,
        1793,5,179,0,0,1792,1791,1,0,0,0,1792,1793,1,0,0,0,1793,1794,1,0,
        0,0,1794,1795,3,194,97,0,1795,1798,1,0,0,0,1796,1798,3,194,97,0,
        1797,1786,1,0,0,0,1797,1796,1,0,0,0,1798,193,1,0,0,0,1799,1800,3,
        196,98,0,1800,195,1,0,0,0,1801,1808,3,198,99,0,1802,1804,5,179,0,
        0,1803,1802,1,0,0,0,1803,1804,1,0,0,0,1804,1805,1,0,0,0,1805,1807,
        3,200,100,0,1806,1803,1,0,0,0,1807,1810,1,0,0,0,1808,1806,1,0,0,
        0,1808,1809,1,0,0,0,1809,1816,1,0,0,0,1810,1808,1,0,0,0,1811,1812,
        5,2,0,0,1812,1813,3,196,98,0,1813,1814,5,3,0,0,1814,1816,1,0,0,0,
        1815,1801,1,0,0,0,1815,1811,1,0,0,0,1816,197,1,0,0,0,1817,1819,5,
        2,0,0,1818,1820,5,179,0,0,1819,1818,1,0,0,0,1819,1820,1,0,0,0,1820,
        1825,1,0,0,0,1821,1823,3,320,160,0,1822,1824,5,179,0,0,1823,1822,
        1,0,0,0,1823,1824,1,0,0,0,1824,1826,1,0,0,0,1825,1821,1,0,0,0,1825,
        1826,1,0,0,0,1826,1831,1,0,0,0,1827,1829,3,210,105,0,1828,1830,5,
        179,0,0,1829,1828,1,0,0,0,1829,1830,1,0,0,0,1830,1832,1,0,0,0,1831,
        1827,1,0,0,0,1831,1832,1,0,0,0,1832,1837,1,0,0,0,1833,1835,3,206,
        103,0,1834,1836,5,179,0,0,1835,1834,1,0,0,0,1835,1836,1,0,0,0,1836,
        1838,1,0,0,0,1837,1833,1,0,0,0,1837,1838,1,0,0,0,1838,1839,1,0,0,
        0,1839,1840,5,3,0,0,1840,199,1,0,0,0,1841,1843,3,202,101,0,1842,
        1844,5,179,0,0,1843,1842,1,0,0,0,1843,1844,1,0,0,0,1844,1845,1,0,
        0,0,1845,1846,3,198,99,0,1846,201,1,0,0,0,1847,1849,3,340,170,0,
        1848,1850,5,179,0,0,1849,1848,1,0,0,0,1849,1850,1,0,0,0,1850,1851,
        1,0,0,0,1851,1853,3,344,172,0,1852,1854,5,179,0,0,1853,1852,1,0,
        0,0,1853,1854,1,0,0,0,1854,1856,1,0,0,0,1855,1857,3,204,102,0,1856,
        1855,1,0,0,0,1856,1857,1,0,0,0,1857,1859,1,0,0,0,1858,1860,5,179,
        0,0,1859,1858,1,0,0,0,1859,1860,1,0,0,0,1860,1861,1,0,0,0,1861,1862,
        3,344,172,0,1862,1892,1,0,0,0,1863,1865,3,344,172,0,1864,1866,5,
        179,0,0,1865,1864,1,0,0,0,1865,1866,1,0,0,0,1866,1868,1,0,0,0,1867,
        1869,3,204,102,0,1868,1867,1,0,0,0,1868,1869,1,0,0,0,1869,1871,1,
        0,0,0,1870,1872,5,179,0,0,1871,1870,1,0,0,0,1871,1872,1,0,0,0,1872,
        1873,1,0,0,0,1873,1875,3,344,172,0,1874,1876,5,179,0,0,1875,1874,
        1,0,0,0,1875,1876,1,0,0,0,1876,1877,1,0,0,0,1877,1878,3,342,171,
        0,1878,1892,1,0,0,0,1879,1881,3,344,172,0,1880,1882,5,179,0,0,1881,
        1880,1,0,0,0,1881,1882,1,0,0,0,1882,1884,1,0,0,0,1883,1885,3,204,
        102,0,1884,1883,1,0,0,0,1884,1885,1,0,0,0,1885,1887,1,0,0,0,1886,
        1888,5,179,0,0,1887,1886,1,0,0,0,1887,1888,1,0,0,0,1888,1889,1,0,
        0,0,1889,1890,3,344,172,0,1890,1892,1,0,0,0,1891,1847,1,0,0,0,1891,
        1863,1,0,0,0,1891,1879,1,0,0,0,1892,203,1,0,0,0,1893,1895,5,7,0,
        0,1894,1896,5,179,0,0,1895,1894,1,0,0,0,1895,1896,1,0,0,0,1896,1901,
        1,0,0,0,1897,1899,3,320,160,0,1898,1900,5,179,0,0,1899,1898,1,0,
        0,0,1899,1900,1,0,0,0,1900,1902,1,0,0,0,1901,1897,1,0,0,0,1901,1902,
        1,0,0,0,1902,1907,1,0,0,0,1903,1905,3,208,104,0,1904,1906,5,179,
        0,0,1905,1904,1,0,0,0,1905,1906,1,0,0,0,1906,1908,1,0,0,0,1907,1903,
        1,0,0,0,1907,1908,1,0,0,0,1908,1913,1,0,0,0,1909,1911,3,214,107,
        0,1910,1912,5,179,0,0,1911,1910,1,0,0,0,1911,1912,1,0,0,0,1912,1914,
        1,0,0,0,1913,1909,1,0,0,0,1913,1914,1,0,0,0,1914,1919,1,0,0,0,1915,
        1917,3,206,103,0,1916,1918,5,179,0,0,1917,1916,1,0,0,0,1917,1918,
        1,0,0,0,1918,1920,1,0,0,0,1919,1915,1,0,0,0,1919,1920,1,0,0,0,1920,
        1921,1,0,0,0,1921,1922,5,8,0,0,1922,205,1,0,0,0,1923,1925,5,9,0,
        0,1924,1926,5,179,0,0,1925,1924,1,0,0,0,1925,1926,1,0,0,0,1926,1960,
        1,0,0,0,1927,1929,3,328,164,0,1928,1930,5,179,0,0,1929,1928,1,0,
        0,0,1929,1930,1,0,0,0,1930,1931,1,0,0,0,1931,1933,5,161,0,0,1932,
        1934,5,179,0,0,1933,1932,1,0,0,0,1933,1934,1,0,0,0,1934,1935,1,0,
        0,0,1935,1937,3,232,116,0,1936,1938,5,179,0,0,1937,1936,1,0,0,0,
        1937,1938,1,0,0,0,1938,1957,1,0,0,0,1939,1941,5,4,0,0,1940,1942,
        5,179,0,0,1941,1940,1,0,0,0,1941,1942,1,0,0,0,1942,1943,1,0,0,0,
        1943,1945,3,328,164,0,1944,1946,5,179,0,0,1945,1944,1,0,0,0,1945,
        1946,1,0,0,0,1946,1947,1,0,0,0,1947,1949,5,161,0,0,1948,1950,5,179,
        0,0,1949,1948,1,0,0,0,1949,1950,1,0,0,0,1950,1951,1,0,0,0,1951,1953,
        3,232,116,0,1952,1954,5,179,0,0,1953,1952,1,0,0,0,1953,1954,1,0,
        0,0,1954,1956,1,0,0,0,1955,1939,1,0,0,0,1956,1959,1,0,0,0,1957,1955,
        1,0,0,0,1957,1958,1,0,0,0,1958,1961,1,0,0,0,1959,1957,1,0,0,0,1960,
        1927,1,0,0,0,1960,1961,1,0,0,0,1961,1962,1,0,0,0,1962,1963,5,10,
        0,0,1963,207,1,0,0,0,1964,1966,5,161,0,0,1965,1967,5,179,0,0,1966,
        1965,1,0,0,0,1966,1967,1,0,0,0,1967,1968,1,0,0,0,1968,1982,3,230,
        115,0,1969,1971,5,179,0,0,1970,1969,1,0,0,0,1970,1971,1,0,0,0,1971,
        1972,1,0,0,0,1972,1974,5,11,0,0,1973,1975,5,161,0,0,1974,1973,1,
        0,0,0,1974,1975,1,0,0,0,1975,1977,1,0,0,0,1976,1978,5,179,0,0,1977,
        1976,1,0,0,0,1977,1978,1,0,0,0,1978,1979,1,0,0,0,1979,1981,3,230,
        115,0,1980,1970,1,0,0,0,1981,1984,1,0,0,0,1982,1980,1,0,0,0,1982,
        1983,1,0,0,0,1983,209,1,0,0,0,1984,1982,1,0,0,0,1985,1992,3,212,
        106,0,1986,1988,5,179,0,0,1987,1986,1,0,0,0,1987,1988,1,0,0,0,1988,
        1989,1,0,0,0,1989,1991,3,212,106,0,1990,1987,1,0,0,0,1991,1994,1,
        0,0,0,1992,1990,1,0,0,0,1992,1993,1,0,0,0,1993,211,1,0,0,0,1994,
        1992,1,0,0,0,1995,1997,5,161,0,0,1996,1998,5,179,0,0,1997,1996,1,
        0,0,0,1997,1998,1,0,0,0,1998,1999,1,0,0,0,1999,2000,3,228,114,0,
        2000,213,1,0,0,0,2001,2006,5,158,0,0,2002,2004,5,179,0,0,2003,2002,
        1,0,0,0,2003,2004,1,0,0,0,2004,2005,1,0,0,0,2005,2007,3,216,108,
        0,2006,2003,1,0,0,0,2006,2007,1,0,0,0,2007,2012,1,0,0,0,2008,2010,
        5,179,0,0,2009,2008,1,0,0,0,2009,2010,1,0,0,0,2010,2011,1,0,0,0,
        2011,2013,3,218,109,0,2012,2009,1,0,0,0,2012,2013,1,0,0,0,2013,2018,
        1,0,0,0,2014,2016,5,179,0,0,2015,2014,1,0,0,0,2015,2016,1,0,0,0,
        2016,2017,1,0,0,0,2017,2019,3,220,110,0,2018,2015,1,0,0,0,2018,2019,
        1,0,0,0,2019,215,1,0,0,0,2020,2021,5,49,0,0,2021,2023,5,179,0,0,
        2022,2020,1,0,0,0,2022,2023,1,0,0,0,2023,2024,1,0,0,0,2024,2026,
        5,153,0,0,2025,2027,5,179,0,0,2026,2025,1,0,0,0,2026,2027,1,0,0,
        0,2027,2028,1,0,0,0,2028,2030,5,2,0,0,2029,2031,5,179,0,0,2030,2029,
        1,0,0,0,2030,2031,1,0,0,0,2031,2032,1,0,0,0,2032,2034,3,328,164,
        0,2033,2035,5,179,0,0,2034,2033,1,0,0,0,2034,2035,1,0,0,0,2035,2036,
        1,0,0,0,2036,2037,5,3,0,0,2037,2045,1,0,0,0,2038,2045,5,133,0,0,
        2039,2040,5,49,0,0,2040,2041,5,179,0,0,2041,2045,5,133,0,0,2042,
        2045,5,140,0,0,2043,2045,5,46,0,0,2044,2022,1,0,0,0,2044,2038,1,
        0,0,0,2044,2039,1,0,0,0,2044,2042,1,0,0,0,2044,2043,1,0,0,0,2045,
        217,1,0,0,0,2046,2048,3,224,112,0,2047,2046,1,0,0,0,2047,2048,1,
        0,0,0,2048,2050,1,0,0,0,2049,2051,5,179,0,0,2050,2049,1,0,0,0,2050,
        2051,1,0,0,0,2051,2052,1,0,0,0,2052,2054,5,12,0,0,2053,2055,5,179,
        0,0,2054,2053,1,0,0,0,2054,2055,1,0,0,0,2055,2057,1,0,0,0,2056,2058,
        3,226,113,0,2057,2056,1,0,0,0,2057,2058,1,0,0,0,2058,2061,1,0,0,
        0,2059,2061,3,330,165,0,2060,2047,1,0,0,0,2060,2059,1,0,0,0,2061,
        219,1,0,0,0,2062,2064,5,2,0,0,2063,2065,5,179,0,0,2064,2063,1,0,
        0,0,2064,2065,1,0,0,0,2065,2066,1,0,0,0,2066,2068,3,320,160,0,2067,
        2069,5,179,0,0,2068,2067,1,0,0,0,2068,2069,1,0,0,0,2069,2070,1,0,
        0,0,2070,2072,5,4,0,0,2071,2073,5,179,0,0,2072,2071,1,0,0,0,2072,
        2073,1,0,0,0,2073,2074,1,0,0,0,2074,2086,3,320,160,0,2075,2077,5,
        179,0,0,2076,2075,1,0,0,0,2076,2077,1,0,0,0,2077,2078,1,0,0,0,2078,
        2080,5,11,0,0,2079,2081,5,179,0,0,2080,2079,1,0,0,0,2080,2081,1,
        0,0,0,2081,2082,1,0,0,0,2082,2084,3,188,94,0,2083,2085,5,179,0,0,
        2084,2083,1,0,0,0,2084,2085,1,0,0,0,2085,2087,1,0,0,0,2086,2076,
        1,0,0,0,2086,2087,1,0,0,0,2087,2107,1,0,0,0,2088,2090,5,179,0,0,
        2089,2088,1,0,0,0,2089,2090,1,0,0,0,2090,2091,1,0,0,0,2091,2093,
        5,11,0,0,2092,2094,5,179,0,0,2093,2092,1,0,0,0,2093,2094,1,0,0,0,
        2094,2095,1,0,0,0,2095,2097,3,222,111,0,2096,2098,5,179,0,0,2097,
        2096,1,0,0,0,2097,2098,1,0,0,0,2098,2099,1,0,0,0,2099,2101,5,4,0,
        0,2100,2102,5,179,0,0,2101,2100,1,0,0,0,2101,2102,1,0,0,0,2102,2103,
        1,0,0,0,2103,2105,3,222,111,0,2104,2106,5,179,0,0,2105,2104,1,0,
        0,0,2105,2106,1,0,0,0,2106,2108,1,0,0,0,2107,2089,1,0,0,0,2107,2108,
        1,0,0,0,2108,2109,1,0,0,0,2109,2110,5,3,0,0,2110,221,1,0,0,0,2111,
        2113,5,9,0,0,2112,2114,5,179,0,0,2113,2112,1,0,0,0,2113,2114,1,0,
        0,0,2114,2116,1,0,0,0,2115,2117,3,176,88,0,2116,2115,1,0,0,0,2116,
        2117,1,0,0,0,2117,2119,1,0,0,0,2118,2120,5,179,0,0,2119,2118,1,0,
        0,0,2119,2120,1,0,0,0,2120,2121,1,0,0,0,2121,2122,5,10,0,0,2122,
        223,1,0,0,0,2123,2124,5,166,0,0,2124,225,1,0,0,0,2125,2126,5,166,
        0,0,2126,227,1,0,0,0,2127,2128,3,334,167,0,2128,229,1,0,0,0,2129,
        2130,3,334,167,0,2130,231,1,0,0,0,2131,2132,3,234,117,0,2132,233,
        1,0,0,0,2133,2140,3,236,118,0,2134,2135,5,179,0,0,2135,2136,5,120,
        0,0,2136,2137,5,179,0,0,2137,2139,3,236,118,0,2138,2134,1,0,0,0,
        2139,2142,1,0,0,0,2140,2138,1,0,0,0,2140,2141,1,0,0,0,2141,235,1,
        0,0,0,2142,2140,1,0,0,0,2143,2150,3,238,119,0,2144,2145,5,179,0,
        0,2145,2146,5,154,0,0,2146,2147,5,179,0,0,2147,2149,3,238,119,0,
        2148,2144,1,0,0,0,2149,2152,1,0,0,0,2150,2148,1,0,0,0,2150,2151,
        1,0,0,0,2151,237,1,0,0,0,2152,2150,1,0,0,0,2153,2160,3,240,120,0,
        2154,2155,5,179,0,0,2155,2156,5,51,0,0,2156,2157,5,179,0,0,2157,
        2159,3,240,120,0,2158,2154,1,0,0,0,2159,2162,1,0,0,0,2160,2158,1,
        0,0,0,2160,2161,1,0,0,0,2161,239,1,0,0,0,2162,2160,1,0,0,0,2163,
        2165,5,114,0,0,2164,2166,5,179,0,0,2165,2164,1,0,0,0,2165,2166,1,
        0,0,0,2166,2168,1,0,0,0,2167,2163,1,0,0,0,2168,2171,1,0,0,0,2169,
        2167,1,0,0,0,2169,2170,1,0,0,0,2170,2172,1,0,0,0,2171,2169,1,0,0,
        0,2172,2173,3,242,121,0,2173,241,1,0,0,0,2174,2184,3,246,123,0,2175,
        2177,5,179,0,0,2176,2175,1,0,0,0,2176,2177,1,0,0,0,2177,2178,1,0,
        0,0,2178,2180,3,244,122,0,2179,2181,5,179,0,0,2180,2179,1,0,0,0,
        2180,2181,1,0,0,0,2181,2182,1,0,0,0,2182,2183,3,246,123,0,2183,2185,
        1,0,0,0,2184,2176,1,0,0,0,2184,2185,1,0,0,0,2185,2223,1,0,0,0,2186,
        2188,3,246,123,0,2187,2189,5,179,0,0,2188,2187,1,0,0,0,2188,2189,
        1,0,0,0,2189,2190,1,0,0,0,2190,2192,5,160,0,0,2191,2193,5,179,0,
        0,2192,2191,1,0,0,0,2192,2193,1,0,0,0,2193,2194,1,0,0,0,2194,2195,
        3,246,123,0,2195,2196,1,0,0,0,2196,2197,6,121,-1,0,2197,2223,1,0,
        0,0,2198,2200,3,246,123,0,2199,2201,5,179,0,0,2200,2199,1,0,0,0,
        2200,2201,1,0,0,0,2201,2202,1,0,0,0,2202,2204,3,244,122,0,2203,2205,
        5,179,0,0,2204,2203,1,0,0,0,2204,2205,1,0,0,0,2205,2206,1,0,0,0,
        2206,2216,3,246,123,0,2207,2209,5,179,0,0,2208,2207,1,0,0,0,2208,
        2209,1,0,0,0,2209,2210,1,0,0,0,2210,2212,3,244,122,0,2211,2213,5,
        179,0,0,2212,2211,1,0,0,0,2212,2213,1,0,0,0,2213,2214,1,0,0,0,2214,
        2215,3,246,123,0,2215,2217,1,0,0,0,2216,2208,1,0,0,0,2217,2218,1,
        0,0,0,2218,2216,1,0,0,0,2218,2219,1,0,0,0,2219,2220,1,0,0,0,2220,
        2221,6,121,-1,0,2221,2223,1,0,0,0,2222,2174,1,0,0,0,2222,2186,1,
        0,0,0,2222,2198,1,0,0,0,2223,243,1,0,0,0,2224,2225,7,2,0,0,2225,
        245,1,0,0,0,2226,2237,3,248,124,0,2227,2229,5,179,0,0,2228,2227,
        1,0,0,0,2228,2229,1,0,0,0,2229,2230,1,0,0,0,2230,2232,5,11,0,0,2231,
        2233,5,179,0,0,2232,2231,1,0,0,0,2232,2233,1,0,0,0,2233,2234,1,0,
        0,0,2234,2236,3,248,124,0,2235,2228,1,0,0,0,2236,2239,1,0,0,0,2237,
        2235,1,0,0,0,2237,2238,1,0,0,0,2238,247,1,0,0,0,2239,2237,1,0,0,
        0,2240,2251,3,250,125,0,2241,2243,5,179,0,0,2242,2241,1,0,0,0,2242,
        2243,1,0,0,0,2243,2244,1,0,0,0,2244,2246,5,18,0,0,2245,2247,5,179,
        0,0,2246,2245,1,0,0,0,2246,2247,1,0,0,0,2247,2248,1,0,0,0,2248,2250,
        3,250,125,0,2249,2242,1,0,0,0,2250,2253,1,0,0,0,2251,2249,1,0,0,
        0,2251,2252,1,0,0,0,2252,249,1,0,0,0,2253,2251,1,0,0,0,2254,2266,
        3,254,127,0,2255,2257,5,179,0,0,2256,2255,1,0,0,0,2256,2257,1,0,
        0,0,2257,2258,1,0,0,0,2258,2260,3,252,126,0,2259,2261,5,179,0,0,
        2260,2259,1,0,0,0,2260,2261,1,0,0,0,2261,2262,1,0,0,0,2262,2263,
        3,254,127,0,2263,2265,1,0,0,0,2264,2256,1,0,0,0,2265,2268,1,0,0,
        0,2266,2264,1,0,0,0,2266,2267,1,0,0,0,2267,251,1,0,0,0,2268,2266,
        1,0,0,0,2269,2270,7,3,0,0,2270,253,1,0,0,0,2271,2283,3,258,129,0,
        2272,2274,5,179,0,0,2273,2272,1,0,0,0,2273,2274,1,0,0,0,2274,2275,
        1,0,0,0,2275,2277,3,256,128,0,2276,2278,5,179,0,0,2277,2276,1,0,
        0,0,2277,2278,1,0,0,0,2278,2279,1,0,0,0,2279,2280,3,258,129,0,2280,
        2282,1,0,0,0,2281,2273,1,0,0,0,2282,2285,1,0,0,0,2283,2281,1,0,0,
        0,2283,2284,1,0,0,0,2284,255,1,0,0,0,2285,2283,1,0,0,0,2286,2287,
        7,4,0,0,2287,257,1,0,0,0,2288,2300,3,262,131,0,2289,2291,5,179,0,
        0,2290,2289,1,0,0,0,2290,2291,1,0,0,0,2291,2292,1,0,0,0,2292,2294,
        3,260,130,0,2293,2295,5,179,0,0,2294,2293,1,0,0,0,2294,2295,1,0,
        0,0,2295,2296,1,0,0,0,2296,2297,3,262,131,0,2297,2299,1,0,0,0,2298,
        2290,1,0,0,0,2299,2302,1,0,0,0,2300,2298,1,0,0,0,2300,2301,1,0,0,
        0,2301,259,1,0,0,0,2302,2300,1,0,0,0,2303,2304,7,5,0,0,2304,261,
        1,0,0,0,2305,2316,3,264,132,0,2306,2308,5,179,0,0,2307,2306,1,0,
        0,0,2307,2308,1,0,0,0,2308,2309,1,0,0,0,2309,2311,5,24,0,0,2310,
        2312,5,179,0,0,2311,2310,1,0,0,0,2311,2312,1,0,0,0,2312,2313,1,0,
        0,0,2313,2315,3,264,132,0,2314,2307,1,0,0,0,2315,2318,1,0,0,0,2316,
        2314,1,0,0,0,2316,2317,1,0,0,0,2317,263,1,0,0,0,2318,2316,1,0,0,
        0,2319,2327,3,274,137,0,2320,2328,3,268,134,0,2321,2323,3,266,133,
        0,2322,2321,1,0,0,0,2323,2324,1,0,0,0,2324,2322,1,0,0,0,2324,2325,
        1,0,0,0,2325,2328,1,0,0,0,2326,2328,3,272,136,0,2327,2320,1,0,0,
        0,2327,2322,1,0,0,0,2327,2326,1,0,0,0,2327,2328,1,0,0,0,2328,265,
        1,0,0,0,2329,2330,5,179,0,0,2330,2332,5,97,0,0,2331,2333,5,179,0,
        0,2332,2331,1,0,0,0,2332,2333,1,0,0,0,2333,2334,1,0,0,0,2334,2349,
        3,276,138,0,2335,2336,5,7,0,0,2336,2337,3,232,116,0,2337,2338,5,
        8,0,0,2338,2349,1,0,0,0,2339,2341,5,7,0,0,2340,2342,3,232,116,0,
        2341,2340,1,0,0,0,2341,2342,1,0,0,0,2342,2343,1,0,0,0,2343,2345,
        5,161,0,0,2344,2346,3,232,116,0,2345,2344,1,0,0,0,2345,2346,1,0,
        0,0,2346,2347,1,0,0,0,2347,2349,5,8,0,0,2348,2329,1,0,0,0,2348,2335,
        1,0,0,0,2348,2339,1,0,0,0,2349,267,1,0,0,0,2350,2362,3,270,135,0,
        2351,2352,5,179,0,0,2352,2353,5,135,0,0,2353,2354,5,179,0,0,2354,
        2362,5,151,0,0,2355,2356,5,179,0,0,2356,2357,5,82,0,0,2357,2358,
        5,179,0,0,2358,2362,5,151,0,0,2359,2360,5,179,0,0,2360,2362,5,66,
        0,0,2361,2350,1,0,0,0,2361,2351,1,0,0,0,2361,2355,1,0,0,0,2361,2359,
        1,0,0,0,2362,2364,1,0,0,0,2363,2365,5,179,0,0,2364,2363,1,0,0,0,
        2364,2365,1,0,0,0,2365,2366,1,0,0,0,2366,2367,3,276,138,0,2367,269,
        1,0,0,0,2368,2370,5,179,0,0,2369,2368,1,0,0,0,2369,2370,1,0,0,0,
        2370,2371,1,0,0,0,2371,2372,5,25,0,0,2372,271,1,0,0,0,2373,2374,
        5,179,0,0,2374,2375,5,100,0,0,2375,2376,5,179,0,0,2376,2384,5,116,
        0,0,2377,2378,5,179,0,0,2378,2379,5,100,0,0,2379,2380,5,179,0,0,
        2380,2381,5,114,0,0,2381,2382,5,179,0,0,2382,2384,5,116,0,0,2383,
        2373,1,0,0,0,2383,2377,1,0,0,0,2384,273,1,0,0,0,2385,2387,5,162,
        0,0,2386,2388,5,179,0,0,2387,2386,1,0,0,0,2387,2388,1,0,0,0,2388,
        2390,1,0,0,0,2389,2385,1,0,0,0,2390,2393,1,0,0,0,2391,2389,1,0,0,
        0,2391,2392,1,0,0,0,2392,2394,1,0,0,0,2393,2391,1,0,0,0,2394,2399,
        3,276,138,0,2395,2397,5,179,0,0,2396,2395,1,0,0,0,2396,2397,1,0,
        0,0,2397,2398,1,0,0,0,2398,2400,5,163,0,0,2399,2396,1,0,0,0,2399,
        2400,1,0,0,0,2400,275,1,0,0,0,2401,2408,3,278,139,0,2402,2404,5,
        179,0,0,2403,2402,1,0,0,0,2403,2404,1,0,0,0,2404,2405,1,0,0,0,2405,
        2407,3,314,157,0,2406,2403,1,0,0,0,2407,2410,1,0,0,0,2408,2406,1,
        0,0,0,2408,2409,1,0,0,0,2409,277,1,0,0,0,2410,2408,1,0,0,0,2411,
        2421,3,286,143,0,2412,2421,3,324,162,0,2413,2421,3,316,158,0,2414,
        2421,3,298,149,0,2415,2421,3,300,150,0,2416,2421,3,310,155,0,2417,
        2421,3,312,156,0,2418,2421,3,320,160,0,2419,2421,3,280,140,0,2420,
        2411,1,0,0,0,2420,2412,1,0,0,0,2420,2413,1,0,0,0,2420,2414,1,0,0,
        0,2420,2415,1,0,0,0,2420,2416,1,0,0,0,2420,2417,1,0,0,0,2420,2418,
        1,0,0,0,2420,2419,1,0,0,0,2421,279,1,0,0,0,2422,2424,5,49,0,0,2423,
        2425,5,179,0,0,2424,2423,1,0,0,0,2424,2425,1,0,0,0,2425,2426,1,0,
        0,0,2426,2428,5,2,0,0,2427,2429,5,179,0,0,2428,2427,1,0,0,0,2428,
        2429,1,0,0,0,2429,2430,1,0,0,0,2430,2432,3,282,141,0,2431,2433,5,
        179,0,0,2432,2431,1,0,0,0,2432,2433,1,0,0,0,2433,2434,1,0,0,0,2434,
        2435,5,3,0,0,2435,2479,1,0,0,0,2436,2438,5,47,0,0,2437,2439,5,179,
        0,0,2438,2437,1,0,0,0,2438,2439,1,0,0,0,2439,2440,1,0,0,0,2440,2442,
        5,2,0,0,2441,2443,5,179,0,0,2442,2441,1,0,0,0,2442,2443,1,0,0,0,
        2443,2444,1,0,0,0,2444,2446,3,282,141,0,2445,2447,5,179,0,0,2446,
        2445,1,0,0,0,2446,2447,1,0,0,0,2447,2448,1,0,0,0,2448,2449,5,3,0,
        0,2449,2479,1,0,0,0,2450,2452,5,115,0,0,2451,2453,5,179,0,0,2452,
        2451,1,0,0,0,2452,2453,1,0,0,0,2453,2454,1,0,0,0,2454,2456,5,2,0,
        0,2455,2457,5,179,0,0,2456,2455,1,0,0,0,2456,2457,1,0,0,0,2457,2458,
        1,0,0,0,2458,2460,3,282,141,0,2459,2461,5,179,0,0,2460,2459,1,0,
        0,0,2460,2461,1,0,0,0,2461,2462,1,0,0,0,2462,2463,5,3,0,0,2463,2479,
        1,0,0,0,2464,2466,5,155,0,0,2465,2467,5,179,0,0,2466,2465,1,0,0,
        0,2466,2467,1,0,0,0,2467,2468,1,0,0,0,2468,2470,5,2,0,0,2469,2471,
        5,179,0,0,2470,2469,1,0,0,0,2470,2471,1,0,0,0,2471,2472,1,0,0,0,
        2472,2474,3,282,141,0,2473,2475,5,179,0,0,2474,2473,1,0,0,0,2474,
        2475,1,0,0,0,2475,2476,1,0,0,0,2476,2477,5,3,0,0,2477,2479,1,0,0,
        0,2478,2422,1,0,0,0,2478,2436,1,0,0,0,2478,2450,1,0,0,0,2478,2464,
        1,0,0,0,2479,281,1,0,0,0,2480,2481,3,284,142,0,2481,2482,5,179,0,
        0,2482,2483,3,188,94,0,2483,283,1,0,0,0,2484,2485,3,320,160,0,2485,
        2486,5,179,0,0,2486,2487,5,97,0,0,2487,2488,5,179,0,0,2488,2489,
        3,232,116,0,2489,285,1,0,0,0,2490,2497,3,322,161,0,2491,2497,5,164,
        0,0,2492,2497,3,288,144,0,2493,2497,5,116,0,0,2494,2497,3,290,145,
        0,2495,2497,3,294,147,0,2496,2490,1,0,0,0,2496,2491,1,0,0,0,2496,
        2492,1,0,0,0,2496,2493,1,0,0,0,2496,2494,1,0,0,0,2496,2495,1,0,0,
        0,2497,287,1,0,0,0,2498,2499,7,6,0,0,2499,289,1,0,0,0,2500,2502,
        5,7,0,0,2501,2503,5,179,0,0,2502,2501,1,0,0,0,2502,2503,1,0,0,0,
        2503,2517,1,0,0,0,2504,2506,3,232,116,0,2505,2507,5,179,0,0,2506,
        2505,1,0,0,0,2506,2507,1,0,0,0,2507,2514,1,0,0,0,2508,2510,3,292,
        146,0,2509,2511,5,179,0,0,2510,2509,1,0,0,0,2510,2511,1,0,0,0,2511,
        2513,1,0,0,0,2512,2508,1,0,0,0,2513,2516,1,0,0,0,2514,2512,1,0,0,
        0,2514,2515,1,0,0,0,2515,2518,1,0,0,0,2516,2514,1,0,0,0,2517,2504,
        1,0,0,0,2517,2518,1,0,0,0,2518,2519,1,0,0,0,2519,2520,5,8,0,0,2520,
        291,1,0,0,0,2521,2523,5,4,0,0,2522,2524,5,179,0,0,2523,2522,1,0,
        0,0,2523,2524,1,0,0,0,2524,2526,1,0,0,0,2525,2527,3,232,116,0,2526,
        2525,1,0,0,0,2526,2527,1,0,0,0,2527,293,1,0,0,0,2528,2530,5,9,0,
        0,2529,2531,5,179,0,0,2530,2529,1,0,0,0,2530,2531,1,0,0,0,2531,2532,
        1,0,0,0,2532,2534,3,296,148,0,2533,2535,5,179,0,0,2534,2533,1,0,
        0,0,2534,2535,1,0,0,0,2535,2546,1,0,0,0,2536,2538,5,4,0,0,2537,2539,
        5,179,0,0,2538,2537,1,0,0,0,2538,2539,1,0,0,0,2539,2540,1,0,0,0,
        2540,2542,3,296,148,0,2541,2543,5,179,0,0,2542,2541,1,0,0,0,2542,
        2543,1,0,0,0,2543,2545,1,0,0,0,2544,2536,1,0,0,0,2545,2548,1,0,0,
        0,2546,2544,1,0,0,0,2546,2547,1,0,0,0,2547,2549,1,0,0,0,2548,2546,
        1,0,0,0,2549,2550,5,10,0,0,2550,295,1,0,0,0,2551,2554,3,336,168,
        0,2552,2554,5,164,0,0,2553,2551,1,0,0,0,2553,2552,1,0,0,0,2554,2556,
        1,0,0,0,2555,2557,5,179,0,0,2556,2555,1,0,0,0,2556,2557,1,0,0,0,
        2557,2558,1,0,0,0,2558,2560,5,161,0,0,2559,2561,5,179,0,0,2560,2559,
        1,0,0,0,2560,2561,1,0,0,0,2561,2562,1,0,0,0,2562,2563,3,232,116,
        0,2563,297,1,0,0,0,2564,2566,5,2,0,0,2565,2567,5,179,0,0,2566,2565,
        1,0,0,0,2566,2567,1,0,0,0,2567,2568,1,0,0,0,2568,2570,3,232,116,
        0,2569,2571,5,179,0,0,2570,2569,1,0,0,0,2570,2571,1,0,0,0,2571,2572,
        1,0,0,0,2572,2573,5,3,0,0,2573,299,1,0,0,0,2574,2576,5,68,0,0,2575,
        2577,5,179,0,0,2576,2575,1,0,0,0,2576,2577,1,0,0,0,2577,2578,1,0,
        0,0,2578,2580,5,2,0,0,2579,2581,5,179,0,0,2580,2579,1,0,0,0,2580,
        2581,1,0,0,0,2581,2582,1,0,0,0,2582,2584,5,158,0,0,2583,2585,5,179,
        0,0,2584,2583,1,0,0,0,2584,2585,1,0,0,0,2585,2586,1,0,0,0,2586,2652,
        5,3,0,0,2587,2589,5,60,0,0,2588,2590,5,179,0,0,2589,2588,1,0,0,0,
        2589,2590,1,0,0,0,2590,2591,1,0,0,0,2591,2593,5,2,0,0,2592,2594,
        5,179,0,0,2593,2592,1,0,0,0,2593,2594,1,0,0,0,2594,2595,1,0,0,0,
        2595,2597,3,304,152,0,2596,2598,5,179,0,0,2597,2596,1,0,0,0,2597,
        2598,1,0,0,0,2598,2609,1,0,0,0,2599,2601,5,52,0,0,2600,2602,5,179,
        0,0,2601,2600,1,0,0,0,2601,2602,1,0,0,0,2602,2603,1,0,0,0,2603,2610,
        3,100,50,0,2604,2606,5,4,0,0,2605,2607,5,179,0,0,2606,2605,1,0,0,
        0,2606,2607,1,0,0,0,2607,2608,1,0,0,0,2608,2610,3,304,152,0,2609,
        2599,1,0,0,0,2609,2604,1,0,0,0,2610,2612,1,0,0,0,2611,2613,5,179,
        0,0,2612,2611,1,0,0,0,2612,2613,1,0,0,0,2613,2614,1,0,0,0,2614,2615,
        5,3,0,0,2615,2652,1,0,0,0,2616,2618,3,302,151,0,2617,2619,5,179,
        0,0,2618,2617,1,0,0,0,2618,2619,1,0,0,0,2619,2620,1,0,0,0,2620,2622,
        5,2,0,0,2621,2623,5,179,0,0,2622,2621,1,0,0,0,2622,2623,1,0,0,0,
        2623,2628,1,0,0,0,2624,2626,5,78,0,0,2625,2627,5,179,0,0,2626,2625,
        1,0,0,0,2626,2627,1,0,0,0,2627,2629,1,0,0,0,2628,2624,1,0,0,0,2628,
        2629,1,0,0,0,2629,2647,1,0,0,0,2630,2632,3,304,152,0,2631,2633,5,
        179,0,0,2632,2631,1,0,0,0,2632,2633,1,0,0,0,2633,2644,1,0,0,0,2634,
        2636,5,4,0,0,2635,2637,5,179,0,0,2636,2635,1,0,0,0,2636,2637,1,0,
        0,0,2637,2638,1,0,0,0,2638,2640,3,304,152,0,2639,2641,5,179,0,0,
        2640,2639,1,0,0,0,2640,2641,1,0,0,0,2641,2643,1,0,0,0,2642,2634,
        1,0,0,0,2643,2646,1,0,0,0,2644,2642,1,0,0,0,2644,2645,1,0,0,0,2645,
        2648,1,0,0,0,2646,2644,1,0,0,0,2647,2630,1,0,0,0,2647,2648,1,0,0,
        0,2648,2649,1,0,0,0,2649,2650,5,3,0,0,2650,2652,1,0,0,0,2651,2574,
        1,0,0,0,2651,2587,1,0,0,0,2651,2616,1,0,0,0,2652,301,1,0,0,0,2653,
        2654,3,336,168,0,2654,303,1,0,0,0,2655,2657,3,336,168,0,2656,2658,
        5,179,0,0,2657,2656,1,0,0,0,2657,2658,1,0,0,0,2658,2659,1,0,0,0,
        2659,2660,5,161,0,0,2660,2662,5,6,0,0,2661,2663,5,179,0,0,2662,2661,
        1,0,0,0,2662,2663,1,0,0,0,2663,2665,1,0,0,0,2664,2655,1,0,0,0,2664,
        2665,1,0,0,0,2665,2666,1,0,0,0,2666,2669,3,232,116,0,2667,2669,3,
        306,153,0,2668,2664,1,0,0,0,2668,2667,1,0,0,0,2669,305,1,0,0,0,2670,
        2672,3,308,154,0,2671,2673,5,179,0,0,2672,2671,1,0,0,0,2672,2673,
        1,0,0,0,2673,2674,1,0,0,0,2674,2675,5,162,0,0,2675,2677,5,16,0,0,
        2676,2678,5,179,0,0,2677,2676,1,0,0,0,2677,2678,1,0,0,0,2678,2679,
        1,0,0,0,2679,2681,3,232,116,0,2680,2682,5,179,0,0,2681,2680,1,0,
        0,0,2681,2682,1,0,0,0,2682,307,1,0,0,0,2683,2708,3,336,168,0,2684,
        2686,5,2,0,0,2685,2687,5,179,0,0,2686,2685,1,0,0,0,2686,2687,1,0,
        0,0,2687,2688,1,0,0,0,2688,2690,3,336,168,0,2689,2691,5,179,0,0,
        2690,2689,1,0,0,0,2690,2691,1,0,0,0,2691,2702,1,0,0,0,2692,2694,
        5,4,0,0,2693,2695,5,179,0,0,2694,2693,1,0,0,0,2694,2695,1,0,0,0,
        2695,2696,1,0,0,0,2696,2698,3,336,168,0,2697,2699,5,179,0,0,2698,
        2697,1,0,0,0,2698,2699,1,0,0,0,2699,2701,1,0,0,0,2700,2692,1,0,0,
        0,2701,2704,1,0,0,0,2702,2700,1,0,0,0,2702,2703,1,0,0,0,2703,2705,
        1,0,0,0,2704,2702,1,0,0,0,2705,2706,5,3,0,0,2706,2708,1,0,0,0,2707,
        2683,1,0,0,0,2707,2684,1,0,0,0,2708,309,1,0,0,0,2709,2714,3,198,
        99,0,2710,2712,5,179,0,0,2711,2710,1,0,0,0,2711,2712,1,0,0,0,2712,
        2713,1,0,0,0,2713,2715,3,200,100,0,2714,2711,1,0,0,0,2715,2716,1,
        0,0,0,2716,2714,1,0,0,0,2716,2717,1,0,0,0,2717,311,1,0,0,0,2718,
        2720,7,7,0,0,2719,2721,5,179,0,0,2720,2719,1,0,0,0,2720,2721,1,0,
        0,0,2721,2722,1,0,0,0,2722,2724,5,9,0,0,2723,2725,5,179,0,0,2724,
        2723,1,0,0,0,2724,2725,1,0,0,0,2725,2726,1,0,0,0,2726,2728,5,107,
        0,0,2727,2729,5,179,0,0,2728,2727,1,0,0,0,2728,2729,1,0,0,0,2729,
        2730,1,0,0,0,2730,2735,3,190,95,0,2731,2733,5,179,0,0,2732,2731,
        1,0,0,0,2732,2733,1,0,0,0,2733,2734,1,0,0,0,2734,2736,3,188,94,0,
        2735,2732,1,0,0,0,2735,2736,1,0,0,0,2736,2741,1,0,0,0,2737,2739,
        5,179,0,0,2738,2737,1,0,0,0,2738,2739,1,0,0,0,2739,2740,1,0,0,0,
        2740,2742,3,152,76,0,2741,2738,1,0,0,0,2741,2742,1,0,0,0,2742,2744,
        1,0,0,0,2743,2745,5,179,0,0,2744,2743,1,0,0,0,2744,2745,1,0,0,0,
        2745,2746,1,0,0,0,2746,2747,5,10,0,0,2747,313,1,0,0,0,2748,2750,
        5,5,0,0,2749,2751,5,179,0,0,2750,2749,1,0,0,0,2750,2751,1,0,0,0,
        2751,2754,1,0,0,0,2752,2755,3,328,164,0,2753,2755,5,158,0,0,2754,
        2752,1,0,0,0,2754,2753,1,0,0,0,2755,315,1,0,0,0,2756,2761,5,59,0,
        0,2757,2759,5,179,0,0,2758,2757,1,0,0,0,2758,2759,1,0,0,0,2759,2760,
        1,0,0,0,2760,2762,3,318,159,0,2761,2758,1,0,0,0,2762,2763,1,0,0,
        0,2763,2761,1,0,0,0,2763,2764,1,0,0,0,2764,2779,1,0,0,0,2765,2767,
        5,59,0,0,2766,2768,5,179,0,0,2767,2766,1,0,0,0,2767,2768,1,0,0,0,
        2768,2769,1,0,0,0,2769,2774,3,232,116,0,2770,2772,5,179,0,0,2771,
        2770,1,0,0,0,2771,2772,1,0,0,0,2772,2773,1,0,0,0,2773,2775,3,318,
        159,0,2774,2771,1,0,0,0,2775,2776,1,0,0,0,2776,2774,1,0,0,0,2776,
        2777,1,0,0,0,2777,2779,1,0,0,0,2778,2756,1,0,0,0,2778,2765,1,0,0,
        0,2779,2788,1,0,0,0,2780,2782,5,179,0,0,2781,2780,1,0,0,0,2781,2782,
        1,0,0,0,2782,2783,1,0,0,0,2783,2785,5,80,0,0,2784,2786,5,179,0,0,
        2785,2784,1,0,0,0,2785,2786,1,0,0,0,2786,2787,1,0,0,0,2787,2789,
        3,232,116,0,2788,2781,1,0,0,0,2788,2789,1,0,0,0,2789,2791,1,0,0,
        0,2790,2792,5,179,0,0,2791,2790,1,0,0,0,2791,2792,1,0,0,0,2792,2793,
        1,0,0,0,2793,2794,5,81,0,0,2794,317,1,0,0,0,2795,2797,5,149,0,0,
        2796,2798,5,179,0,0,2797,2796,1,0,0,0,2797,2798,1,0,0,0,2798,2799,
        1,0,0,0,2799,2801,3,232,116,0,2800,2802,5,179,0,0,2801,2800,1,0,
        0,0,2801,2802,1,0,0,0,2802,2803,1,0,0,0,2803,2805,5,138,0,0,2804,
        2806,5,179,0,0,2805,2804,1,0,0,0,2805,2806,1,0,0,0,2806,2807,1,0,
        0,0,2807,2808,3,232,116,0,2808,319,1,0,0,0,2809,2810,3,336,168,0,
        2810,321,1,0,0,0,2811,2814,3,332,166,0,2812,2814,3,330,165,0,2813,
        2811,1,0,0,0,2813,2812,1,0,0,0,2814,323,1,0,0,0,2815,2818,5,26,0,
        0,2816,2819,3,336,168,0,2817,2819,5,166,0,0,2818,2816,1,0,0,0,2818,
        2817,1,0,0,0,2819,325,1,0,0,0,2820,2822,3,278,139,0,2821,2823,5,
        179,0,0,2822,2821,1,0,0,0,2822,2823,1,0,0,0,2823,2824,1,0,0,0,2824,
        2825,3,314,157,0,2825,327,1,0,0,0,2826,2827,3,334,167,0,2827,329,
        1,0,0,0,2828,2829,5,166,0,0,2829,331,1,0,0,0,2830,2831,7,8,0,0,2831,
        333,1,0,0,0,2832,2833,3,336,168,0,2833,335,1,0,0,0,2834,2840,5,175,
        0,0,2835,2836,5,178,0,0,2836,2840,6,168,-1,0,2837,2840,5,167,0,0,
        2838,2840,3,338,169,0,2839,2834,1,0,0,0,2839,2835,1,0,0,0,2839,2837,
        1,0,0,0,2839,2838,1,0,0,0,2840,337,1,0,0,0,2841,2842,7,9,0,0,2842,
        339,1,0,0,0,2843,2844,7,10,0,0,2844,341,1,0,0,0,2845,2846,7,11,0,
        0,2846,343,1,0,0,0,2847,2848,7,12,0,0,2848,345,1,0,0,0,488,348,352,
        357,361,366,369,373,376,398,404,411,415,419,423,426,430,434,438,
        443,447,449,456,460,469,474,484,488,492,497,510,514,522,526,530,
        534,542,546,550,554,569,574,580,584,587,590,596,600,605,608,613,
        617,621,626,641,645,652,672,676,679,682,685,688,692,697,701,711,
        715,720,725,730,736,740,744,749,756,760,764,767,784,788,792,796,
        800,803,806,814,823,827,832,836,840,844,848,850,854,858,860,868,
        873,877,881,885,889,893,898,916,923,936,943,949,952,962,965,973,
        976,982,985,991,1006,1024,1031,1038,1049,1072,1081,1087,1091,1096,
        1105,1109,1114,1120,1126,1132,1136,1140,1148,1152,1156,1162,1166,
        1170,1176,1180,1184,1190,1194,1198,1202,1206,1212,1216,1220,1224,
        1228,1232,1238,1245,1250,1256,1261,1278,1284,1290,1294,1298,1307,
        1321,1326,1331,1335,1340,1346,1351,1354,1358,1362,1366,1372,1376,
        1381,1386,1390,1393,1395,1399,1403,1409,1413,1418,1422,1431,1437,
        1445,1449,1453,1457,1464,1468,1472,1476,1479,1482,1489,1495,1499,
        1504,1511,1514,1517,1522,1526,1530,1535,1539,1548,1552,1557,1571,
        1573,1575,1580,1590,1596,1603,1616,1620,1624,1628,1633,1638,1642,
        1648,1652,1656,1660,1665,1671,1674,1680,1683,1689,1693,1697,1701,
        1705,1710,1715,1719,1724,1727,1736,1745,1750,1763,1766,1774,1778,
        1783,1788,1792,1797,1803,1808,1815,1819,1823,1825,1829,1831,1835,
        1837,1843,1849,1853,1856,1859,1865,1868,1871,1875,1881,1884,1887,
        1891,1895,1899,1901,1905,1907,1911,1913,1917,1919,1925,1929,1933,
        1937,1941,1945,1949,1953,1957,1960,1966,1970,1974,1977,1982,1987,
        1992,1997,2003,2006,2009,2012,2015,2018,2022,2026,2030,2034,2044,
        2047,2050,2054,2057,2060,2064,2068,2072,2076,2080,2084,2086,2089,
        2093,2097,2101,2105,2107,2113,2116,2119,2140,2150,2160,2165,2169,
        2176,2180,2184,2188,2192,2200,2204,2208,2212,2218,2222,2228,2232,
        2237,2242,2246,2251,2256,2260,2266,2273,2277,2283,2290,2294,2300,
        2307,2311,2316,2324,2327,2332,2341,2345,2348,2361,2364,2369,2383,
        2387,2391,2396,2399,2403,2408,2420,2424,2428,2432,2438,2442,2446,
        2452,2456,2460,2466,2470,2474,2478,2496,2502,2506,2510,2514,2517,
        2523,2526,2530,2534,2538,2542,2546,2553,2556,2560,2566,2570,2576,
        2580,2584,2589,2593,2597,2601,2606,2609,2612,2618,2622,2626,2628,
        2632,2636,2640,2644,2647,2651,2657,2662,2664,2668,2672,2677,2681,
        2686,2690,2694,2698,2702,2707,2711,2716,2720,2724,2728,2732,2735,
        2738,2741,2744,2750,2754,2758,2763,2767,2771,2776,2778,2781,2785,
        2788,2791,2797,2801,2805,2813,2818,2822,2839
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

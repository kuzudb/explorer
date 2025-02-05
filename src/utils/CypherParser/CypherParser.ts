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
    public static readonly DECIMAL = 152;
    public static readonly YIELD = 153;
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
    public static readonly RULE_oC_ExistSubquery = 152;
    public static readonly RULE_kU_CountSubquery = 153;
    public static readonly RULE_oC_PropertyLookup = 154;
    public static readonly RULE_oC_CaseExpression = 155;
    public static readonly RULE_oC_CaseAlternative = 156;
    public static readonly RULE_oC_Variable = 157;
    public static readonly RULE_oC_NumberLiteral = 158;
    public static readonly RULE_oC_Parameter = 159;
    public static readonly RULE_oC_PropertyExpression = 160;
    public static readonly RULE_oC_PropertyKeyName = 161;
    public static readonly RULE_oC_IntegerLiteral = 162;
    public static readonly RULE_oC_DoubleLiteral = 163;
    public static readonly RULE_oC_SchemaName = 164;
    public static readonly RULE_oC_SymbolicName = 165;
    public static readonly RULE_kU_NonReservedKeywords = 166;
    public static readonly RULE_oC_LeftArrowHead = 167;
    public static readonly RULE_oC_RightArrowHead = 168;
    public static readonly RULE_oC_Dash = 169;

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
        "DECIMAL", "YIELD", "STAR", "L_SKIP", "INVALID_NOT_EQUAL", "MINUS", 
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
        "kU_LambdaParameter", "kU_LambdaVars", "oC_PathPatterns", "oC_ExistSubquery", 
        "kU_CountSubquery", "oC_PropertyLookup", "oC_CaseExpression", "oC_CaseAlternative", 
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
            this.state = 340;
            this.oC_Cypher();
            this.state = 351;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 342;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 341;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 344;
                    this.match(CypherParser.T__0);
                    this.state = 346;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                    case 1:
                        {
                        this.state = 345;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    this.state = 348;
                    this.oC_Cypher();
                    }
                    }
                }
                this.state = 353;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            }
            this.state = 355;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 354;
                this.match(CypherParser.SP);
                }
            }

            this.state = 357;
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
            this.state = 360;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===84 || _la===122) {
                {
                this.state = 359;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 363;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 362;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 365;
            this.oC_Statement();
            }
            this.state = 370;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
            case 1:
                {
                this.state = 367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 366;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 369;
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
            this.state = 392;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 372;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 373;
                this.kU_CreateNodeTable();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 374;
                this.kU_CreateRelTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 375;
                this.kU_CreateSequence();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 376;
                this.kU_CreateType();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 377;
                this.kU_Drop();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 378;
                this.kU_AlterTable();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 379;
                this.kU_CopyFrom();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 380;
                this.kU_CopyFromByColumn();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 381;
                this.kU_CopyTO();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 382;
                this.kU_StandaloneCall();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 383;
                this.kU_CreateMacro();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 384;
                this.kU_CommentOn();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 385;
                this.kU_Transaction();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 386;
                this.kU_Extension();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 387;
                this.kU_ExportDatabase();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 388;
                this.kU_ImportDatabase();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 389;
                this.kU_AttachDatabase();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 390;
                this.kU_DetachDatabase();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 391;
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
            this.state = 394;
            this.match(CypherParser.COPY);
            this.state = 395;
            this.match(CypherParser.SP);
            this.state = 396;
            this.oC_SchemaName();
            this.state = 405;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                {
                {
                this.state = 398;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 397;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 400;
                this.kU_ColumnNames();
                this.state = 402;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 401;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                break;
            case 2:
                {
                this.state = 404;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 407;
            this.match(CypherParser.FROM);
            this.state = 408;
            this.match(CypherParser.SP);
            this.state = 409;
            this.kU_ScanSource();
            this.state = 423;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
            case 1:
                {
                this.state = 411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
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
                if (_la===175) {
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
                if (_la===175) {
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
            this.state = 425;
            this.match(CypherParser.T__1);
            this.state = 427;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 426;
                this.match(CypherParser.SP);
                }
            }

            this.state = 429;
            this.oC_SchemaName();
            this.state = 440;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 431;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 430;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 433;
                    this.match(CypherParser.T__3);
                    this.state = 435;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 434;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 437;
                    this.oC_SchemaName();
                    }
                    }
                }
                this.state = 442;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
            }
            this.state = 444;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 443;
                this.match(CypherParser.SP);
                }
            }

            this.state = 446;
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
            this.state = 467;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 448;
                this.kU_FilePaths();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 449;
                this.match(CypherParser.T__1);
                this.state = 451;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 450;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 453;
                this.oC_Query();
                this.state = 455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 454;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 457;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 459;
                this.oC_Variable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 460;
                this.oC_Variable();
                this.state = 461;
                this.match(CypherParser.T__4);
                this.state = 463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 462;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 465;
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
            this.state = 469;
            this.match(CypherParser.COPY);
            this.state = 470;
            this.match(CypherParser.SP);
            this.state = 471;
            this.oC_SchemaName();
            this.state = 472;
            this.match(CypherParser.SP);
            this.state = 473;
            this.match(CypherParser.FROM);
            this.state = 474;
            this.match(CypherParser.SP);
            this.state = 475;
            this.match(CypherParser.T__1);
            this.state = 477;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 476;
                this.match(CypherParser.SP);
                }
            }

            this.state = 479;
            this.match(CypherParser.StringLiteral);
            this.state = 490;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4 || _la===175) {
                {
                {
                this.state = 481;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 480;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 483;
                this.match(CypherParser.T__3);
                this.state = 485;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 484;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 487;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 492;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 493;
            this.match(CypherParser.T__2);
            this.state = 494;
            this.match(CypherParser.SP);
            this.state = 495;
            this.match(CypherParser.BY);
            this.state = 496;
            this.match(CypherParser.SP);
            this.state = 497;
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
            this.state = 499;
            this.match(CypherParser.COPY);
            this.state = 500;
            this.match(CypherParser.SP);
            this.state = 501;
            this.match(CypherParser.T__1);
            this.state = 503;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 502;
                this.match(CypherParser.SP);
                }
            }

            this.state = 505;
            this.oC_Query();
            this.state = 507;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 506;
                this.match(CypherParser.SP);
                }
            }

            this.state = 509;
            this.match(CypherParser.T__2);
            this.state = 510;
            this.match(CypherParser.SP);
            this.state = 511;
            this.match(CypherParser.TO);
            this.state = 512;
            this.match(CypherParser.SP);
            this.state = 513;
            this.match(CypherParser.StringLiteral);
            this.state = 527;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
            case 1:
                {
                this.state = 515;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 514;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 517;
                this.match(CypherParser.T__1);
                this.state = 519;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 518;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 521;
                this.kU_Options();
                this.state = 523;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 522;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 525;
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
            this.state = 529;
            this.match(CypherParser.EXPORT);
            this.state = 530;
            this.match(CypherParser.SP);
            this.state = 531;
            this.match(CypherParser.DATABASE);
            this.state = 532;
            this.match(CypherParser.SP);
            this.state = 533;
            this.match(CypherParser.StringLiteral);
            this.state = 547;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
            case 1:
                {
                this.state = 535;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 534;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 537;
                this.match(CypherParser.T__1);
                this.state = 539;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 538;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 541;
                this.kU_Options();
                this.state = 543;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 542;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 545;
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
            this.state = 549;
            this.match(CypherParser.IMPORT);
            this.state = 550;
            this.match(CypherParser.SP);
            this.state = 551;
            this.match(CypherParser.DATABASE);
            this.state = 552;
            this.match(CypherParser.SP);
            this.state = 553;
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
            this.state = 555;
            this.match(CypherParser.ATTACH);
            this.state = 556;
            this.match(CypherParser.SP);
            this.state = 557;
            this.match(CypherParser.StringLiteral);
            this.state = 562;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
            case 1:
                {
                this.state = 558;
                this.match(CypherParser.SP);
                this.state = 559;
                this.match(CypherParser.AS);
                this.state = 560;
                this.match(CypherParser.SP);
                this.state = 561;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 564;
            this.match(CypherParser.SP);
            this.state = 565;
            this.match(CypherParser.T__1);
            this.state = 567;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 566;
                this.match(CypherParser.SP);
                }
            }

            this.state = 569;
            this.match(CypherParser.DBTYPE);
            this.state = 570;
            this.match(CypherParser.SP);
            this.state = 571;
            this.oC_SymbolicName();
            this.state = 580;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
            case 1:
                {
                this.state = 573;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 572;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 575;
                this.match(CypherParser.T__3);
                this.state = 577;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 576;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 579;
                this.kU_Options();
                }
                break;
            }
            this.state = 583;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 582;
                this.match(CypherParser.SP);
                }
            }

            this.state = 585;
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
            this.state = 606;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 587;
                this.oC_SymbolicName();
                this.state = 601;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
                case 1:
                    {
                    this.state = 589;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 588;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 591;
                    this.match(CypherParser.T__5);
                    this.state = 593;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 592;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                case 2:
                    {
                    this.state = 598;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===175) {
                        {
                        {
                        this.state = 595;
                        this.match(CypherParser.SP);
                        }
                        }
                        this.state = 600;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                    break;
                }
                this.state = 603;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 605;
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
            this.state = 608;
            this.kU_Option();
            this.state = 619;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 610;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 609;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 612;
                    this.match(CypherParser.T__3);
                    this.state = 614;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 613;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 616;
                    this.kU_Option();
                    }
                    }
                }
                this.state = 621;
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
            this.state = 622;
            this.match(CypherParser.DETACH);
            this.state = 623;
            this.match(CypherParser.SP);
            this.state = 624;
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
            this.state = 626;
            this.match(CypherParser.USE);
            this.state = 627;
            this.match(CypherParser.SP);
            this.state = 628;
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
            this.state = 645;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 630;
                this.match(CypherParser.CALL);
                this.state = 631;
                this.match(CypherParser.SP);
                this.state = 632;
                this.oC_SymbolicName();
                this.state = 634;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 633;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 636;
                this.match(CypherParser.T__5);
                this.state = 638;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 637;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 640;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 642;
                this.match(CypherParser.CALL);
                this.state = 643;
                this.match(CypherParser.SP);
                this.state = 644;
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
            this.state = 647;
            this.match(CypherParser.COMMENT);
            this.state = 648;
            this.match(CypherParser.SP);
            this.state = 649;
            this.match(CypherParser.ON);
            this.state = 650;
            this.match(CypherParser.SP);
            this.state = 651;
            this.match(CypherParser.TABLE);
            this.state = 652;
            this.match(CypherParser.SP);
            this.state = 653;
            this.oC_SchemaName();
            this.state = 654;
            this.match(CypherParser.SP);
            this.state = 655;
            this.match(CypherParser.IS);
            this.state = 656;
            this.match(CypherParser.SP);
            this.state = 657;
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
            this.state = 659;
            this.match(CypherParser.CREATE);
            this.state = 660;
            this.match(CypherParser.SP);
            this.state = 661;
            this.match(CypherParser.MACRO);
            this.state = 662;
            this.match(CypherParser.SP);
            this.state = 663;
            this.oC_FunctionName();
            this.state = 665;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 664;
                this.match(CypherParser.SP);
                }
            }

            this.state = 667;
            this.match(CypherParser.T__1);
            this.state = 669;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
            case 1:
                {
                this.state = 668;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 672;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
            case 1:
                {
                this.state = 671;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 675;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
            case 1:
                {
                this.state = 674;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 678;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577943) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 572868031) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 590081) !== 0)) {
                {
                this.state = 677;
                this.kU_DefaultArg();
                }
            }

            this.state = 690;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 681;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 680;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 683;
                    this.match(CypherParser.T__3);
                    this.state = 685;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 684;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 687;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 692;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
            }
            this.state = 694;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 693;
                this.match(CypherParser.SP);
                }
            }

            this.state = 696;
            this.match(CypherParser.T__2);
            this.state = 697;
            this.match(CypherParser.SP);
            this.state = 698;
            this.match(CypherParser.AS);
            this.state = 699;
            this.match(CypherParser.SP);
            this.state = 700;
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
            this.state = 702;
            this.oC_SymbolicName();
            this.state = 713;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 704;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 703;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 706;
                    this.match(CypherParser.T__3);
                    this.state = 708;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 707;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 710;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 715;
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
            this.state = 716;
            this.oC_SymbolicName();
            this.state = 718;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 717;
                this.match(CypherParser.SP);
                }
            }

            this.state = 720;
            this.match(CypherParser.COLON);
            this.state = 721;
            this.match(CypherParser.T__5);
            this.state = 723;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 722;
                this.match(CypherParser.SP);
                }
            }

            this.state = 725;
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
            this.state = 760;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 727;
                this.match(CypherParser.T__6);
                this.state = 729;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 728;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 731;
                this.match(CypherParser.StringLiteral);
                this.state = 742;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4 || _la===175) {
                    {
                    {
                    this.state = 733;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 732;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 735;
                    this.match(CypherParser.T__3);
                    this.state = 737;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 736;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 739;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 744;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 745;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 746;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 747;
                this.match(CypherParser.GLOB);
                this.state = 749;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 748;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 751;
                this.match(CypherParser.T__1);
                this.state = 753;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 752;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 755;
                this.match(CypherParser.StringLiteral);
                this.state = 757;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 756;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 759;
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
            this.state = 762;
            this.match(CypherParser.IF);
            this.state = 763;
            this.match(CypherParser.SP);
            this.state = 764;
            this.match(CypherParser.NOT);
            this.state = 765;
            this.match(CypherParser.SP);
            this.state = 766;
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
            this.state = 768;
            this.match(CypherParser.CREATE);
            this.state = 769;
            this.match(CypherParser.SP);
            this.state = 770;
            this.match(CypherParser.NODE);
            this.state = 771;
            this.match(CypherParser.SP);
            this.state = 772;
            this.match(CypherParser.TABLE);
            this.state = 773;
            this.match(CypherParser.SP);
            this.state = 777;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
            case 1:
                {
                this.state = 774;
                this.kU_IfNotExists();
                this.state = 775;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 779;
            this.oC_SchemaName();
            this.state = 781;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 780;
                this.match(CypherParser.SP);
                }
            }

            this.state = 783;
            this.match(CypherParser.T__1);
            this.state = 785;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 784;
                this.match(CypherParser.SP);
                }
            }

            this.state = 787;
            this.kU_PropertyDefinitions();
            this.state = 789;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
            case 1:
                {
                this.state = 788;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 796;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===4) {
                {
                this.state = 791;
                this.match(CypherParser.T__3);
                this.state = 793;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 792;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 795;
                this.kU_CreateNodeConstraint();
                }
            }

            this.state = 799;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 798;
                this.match(CypherParser.SP);
                }
            }

            this.state = 801;
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
            this.state = 803;
            this.match(CypherParser.CREATE);
            this.state = 804;
            this.match(CypherParser.SP);
            this.state = 805;
            this.match(CypherParser.REL);
            this.state = 806;
            this.match(CypherParser.SP);
            this.state = 807;
            this.match(CypherParser.TABLE);
            this.state = 810;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
            case 1:
                {
                this.state = 808;
                this.match(CypherParser.SP);
                this.state = 809;
                this.match(CypherParser.GROUP);
                }
                break;
            }
            this.state = 814;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
            case 1:
                {
                this.state = 812;
                this.match(CypherParser.SP);
                this.state = 813;
                this.kU_IfNotExists();
                }
                break;
            }
            this.state = 816;
            this.match(CypherParser.SP);
            this.state = 817;
            this.oC_SchemaName();
            this.state = 819;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
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
            if (_la===175) {
                {
                this.state = 822;
                this.match(CypherParser.SP);
                }
            }

            this.state = 825;
            this.kU_FromToConnections();
            this.state = 827;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 826;
                this.match(CypherParser.SP);
                }
            }

            this.state = 837;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
            case 1:
                {
                this.state = 829;
                this.match(CypherParser.T__3);
                this.state = 831;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 830;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 833;
                this.kU_PropertyDefinitions();
                this.state = 835;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 834;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 847;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===4) {
                {
                this.state = 839;
                this.match(CypherParser.T__3);
                this.state = 841;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 840;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 843;
                this.oC_SymbolicName();
                this.state = 845;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 844;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 849;
            this.match(CypherParser.T__2);
            this.state = 865;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
            case 1:
                {
                this.state = 850;
                this.match(CypherParser.SP);
                this.state = 851;
                this.match(CypherParser.WITH);
                this.state = 853;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 852;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 855;
                this.match(CypherParser.T__1);
                this.state = 857;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 856;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 859;
                this.kU_Options();
                this.state = 861;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 860;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 863;
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
            this.state = 867;
            this.kU_FromToConnection();
            this.state = 878;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 102, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 869;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 868;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 871;
                    this.match(CypherParser.T__3);
                    this.state = 873;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 872;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 875;
                    this.kU_FromToConnection();
                    }
                    }
                }
                this.state = 880;
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
            this.state = 881;
            this.match(CypherParser.FROM);
            this.state = 882;
            this.match(CypherParser.SP);
            this.state = 883;
            this.oC_SchemaName();
            this.state = 884;
            this.match(CypherParser.SP);
            this.state = 885;
            this.match(CypherParser.TO);
            this.state = 886;
            this.match(CypherParser.SP);
            this.state = 887;
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
            this.state = 889;
            this.match(CypherParser.CREATE);
            this.state = 890;
            this.match(CypherParser.SP);
            this.state = 891;
            this.match(CypherParser.SEQUENCE);
            this.state = 892;
            this.match(CypherParser.SP);
            this.state = 896;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
            case 1:
                {
                this.state = 893;
                this.kU_IfNotExists();
                this.state = 894;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 898;
            this.oC_SchemaName();
            this.state = 903;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 104, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 899;
                    this.match(CypherParser.SP);
                    this.state = 900;
                    this.kU_SequenceOptions();
                    }
                    }
                }
                this.state = 905;
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
            this.state = 906;
            this.match(CypherParser.CREATE);
            this.state = 907;
            this.match(CypherParser.SP);
            this.state = 908;
            this.match(CypherParser.TYPE);
            this.state = 909;
            this.match(CypherParser.SP);
            this.state = 910;
            this.oC_SchemaName();
            this.state = 911;
            this.match(CypherParser.SP);
            this.state = 912;
            this.match(CypherParser.AS);
            this.state = 913;
            this.match(CypherParser.SP);
            this.state = 914;
            this.kU_DataType(0);
            this.state = 916;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
            case 1:
                {
                this.state = 915;
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
            this.state = 923;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 918;
                this.kU_IncrementBy();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 919;
                this.kU_MinValue();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 920;
                this.kU_MaxValue();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 921;
                this.kU_StartWith();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 922;
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
            this.state = 925;
            this.match(CypherParser.INCREMENT);
            this.state = 926;
            this.match(CypherParser.SP);
            this.state = 929;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===57) {
                {
                this.state = 927;
                this.match(CypherParser.BY);
                this.state = 928;
                this.match(CypherParser.SP);
                }
            }

            this.state = 932;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===157) {
                {
                this.state = 931;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 934;
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
            this.state = 945;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 936;
                this.match(CypherParser.NO);
                this.state = 937;
                this.match(CypherParser.SP);
                this.state = 938;
                this.match(CypherParser.MINVALUE);
                }
                }
                break;
            case CypherParser.MINVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 939;
                this.match(CypherParser.MINVALUE);
                this.state = 940;
                this.match(CypherParser.SP);
                this.state = 942;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===157) {
                    {
                    this.state = 941;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 944;
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
            this.state = 956;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 947;
                this.match(CypherParser.NO);
                this.state = 948;
                this.match(CypherParser.SP);
                this.state = 949;
                this.match(CypherParser.MAXVALUE);
                }
                }
                break;
            case CypherParser.MAXVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 950;
                this.match(CypherParser.MAXVALUE);
                this.state = 951;
                this.match(CypherParser.SP);
                this.state = 953;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===157) {
                    {
                    this.state = 952;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 955;
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
            this.state = 958;
            this.match(CypherParser.START);
            this.state = 959;
            this.match(CypherParser.SP);
            this.state = 962;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===147) {
                {
                this.state = 960;
                this.match(CypherParser.WITH);
                this.state = 961;
                this.match(CypherParser.SP);
                }
            }

            this.state = 965;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===157) {
                {
                this.state = 964;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 967;
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
            this.state = 971;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===111) {
                {
                this.state = 969;
                this.match(CypherParser.NO);
                this.state = 970;
                this.match(CypherParser.SP);
                }
            }

            this.state = 973;
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
            this.state = 975;
            this.match(CypherParser.IF);
            this.state = 976;
            this.match(CypherParser.SP);
            this.state = 977;
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
            this.state = 979;
            this.match(CypherParser.DROP);
            this.state = 980;
            this.match(CypherParser.SP);
            this.state = 981;
            _la = this._input.LA(1);
            if(!(_la===130 || _la===135)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 982;
            this.match(CypherParser.SP);
            this.state = 986;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
            case 1:
                {
                this.state = 983;
                this.kU_IfExists();
                this.state = 984;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 988;
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
            this.state = 990;
            this.match(CypherParser.ALTER);
            this.state = 991;
            this.match(CypherParser.SP);
            this.state = 992;
            this.match(CypherParser.TABLE);
            this.state = 993;
            this.match(CypherParser.SP);
            this.state = 994;
            this.oC_SchemaName();
            this.state = 995;
            this.match(CypherParser.SP);
            this.state = 996;
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
            this.state = 1002;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 998;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 999;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1000;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1001;
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
            this.state = 1004;
            this.match(CypherParser.ADD);
            this.state = 1005;
            this.match(CypherParser.SP);
            this.state = 1009;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
            case 1:
                {
                this.state = 1006;
                this.kU_IfNotExists();
                this.state = 1007;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1011;
            this.oC_PropertyKeyName();
            this.state = 1012;
            this.match(CypherParser.SP);
            this.state = 1013;
            this.kU_DataType(0);
            this.state = 1016;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
            case 1:
                {
                this.state = 1014;
                this.match(CypherParser.SP);
                this.state = 1015;
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
            this.state = 1018;
            this.match(CypherParser.DEFAULT);
            this.state = 1019;
            this.match(CypherParser.SP);
            this.state = 1020;
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
            this.state = 1022;
            this.match(CypherParser.DROP);
            this.state = 1023;
            this.match(CypherParser.SP);
            this.state = 1027;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
            case 1:
                {
                this.state = 1024;
                this.kU_IfExists();
                this.state = 1025;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1029;
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
            this.state = 1031;
            this.match(CypherParser.RENAME);
            this.state = 1032;
            this.match(CypherParser.SP);
            this.state = 1033;
            this.match(CypherParser.TO);
            this.state = 1034;
            this.match(CypherParser.SP);
            this.state = 1035;
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
            this.state = 1037;
            this.match(CypherParser.RENAME);
            this.state = 1038;
            this.match(CypherParser.SP);
            this.state = 1039;
            this.oC_PropertyKeyName();
            this.state = 1040;
            this.match(CypherParser.SP);
            this.state = 1041;
            this.match(CypherParser.TO);
            this.state = 1042;
            this.match(CypherParser.SP);
            this.state = 1043;
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
            this.state = 1045;
            this.kU_ColumnDefinition();
            this.state = 1056;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1047;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1046;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1049;
                    this.match(CypherParser.T__3);
                    this.state = 1051;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1050;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1053;
                    this.kU_ColumnDefinition();
                    }
                    }
                }
                this.state = 1058;
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
            this.state = 1059;
            this.oC_PropertyKeyName();
            this.state = 1060;
            this.match(CypherParser.SP);
            this.state = 1061;
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
            this.state = 1063;
            this.kU_PropertyDefinition();
            this.state = 1074;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1065;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1064;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1067;
                    this.match(CypherParser.T__3);
                    this.state = 1069;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1068;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1071;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 1076;
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
            this.state = 1077;
            this.kU_ColumnDefinition();
            this.state = 1080;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
            case 1:
                {
                this.state = 1078;
                this.match(CypherParser.SP);
                this.state = 1079;
                this.kU_Default();
                }
                break;
            }
            this.state = 1086;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
            case 1:
                {
                this.state = 1082;
                this.match(CypherParser.SP);
                this.state = 1083;
                this.match(CypherParser.PRIMARY);
                this.state = 1084;
                this.match(CypherParser.SP);
                this.state = 1085;
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
            this.state = 1088;
            this.match(CypherParser.PRIMARY);
            this.state = 1089;
            this.match(CypherParser.SP);
            this.state = 1090;
            this.match(CypherParser.KEY);
            this.state = 1092;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1091;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1094;
            this.match(CypherParser.T__1);
            this.state = 1096;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1095;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1098;
            this.oC_PropertyKeyName();
            this.state = 1100;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1099;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1102;
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
            this.state = 1178;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
            case 1:
                {
                this.state = 1105;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 1106;
                this.match(CypherParser.UNION);
                this.state = 1108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1107;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1110;
                this.match(CypherParser.T__1);
                this.state = 1112;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1111;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1114;
                this.kU_ColumnDefinitions();
                this.state = 1116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1115;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1118;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                {
                this.state = 1120;
                this.oC_SymbolicName();
                this.state = 1122;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1121;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1124;
                this.match(CypherParser.T__1);
                this.state = 1126;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1125;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1128;
                this.kU_ColumnDefinitions();
                this.state = 1130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1129;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1132;
                this.match(CypherParser.T__2);
                }
                break;
            case 4:
                {
                this.state = 1134;
                this.oC_SymbolicName();
                this.state = 1136;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1135;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1138;
                this.match(CypherParser.T__1);
                this.state = 1140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1139;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1142;
                this.kU_DataType(0);
                this.state = 1144;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1143;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1146;
                this.match(CypherParser.T__3);
                this.state = 1148;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1147;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1150;
                this.kU_DataType(0);
                this.state = 1152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1151;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1154;
                this.match(CypherParser.T__2);
                }
                break;
            case 5:
                {
                this.state = 1156;
                this.match(CypherParser.DECIMAL);
                this.state = 1158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1157;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1160;
                this.match(CypherParser.T__1);
                this.state = 1162;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1161;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1164;
                this.oC_IntegerLiteral();
                this.state = 1166;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1165;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1168;
                this.match(CypherParser.T__3);
                this.state = 1170;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1169;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1172;
                this.oC_IntegerLiteral();
                this.state = 1174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1173;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1176;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1184;
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
                    this.state = 1180;
                    if (!(this.precpred(this._ctx, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                    }
                    this.state = 1181;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 1186;
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
            this.state = 1187;
            this.kU_ListIdentifier();
            this.state = 1191;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1188;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 1193;
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
            this.state = 1194;
            this.match(CypherParser.T__6);
            this.state = 1196;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===162) {
                {
                this.state = 1195;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 1198;
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
            this.state = 1202;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1200;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1201;
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
            this.state = 1204;
            this.match(CypherParser.EXPLAIN);
            this.state = 1207;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
            case 1:
                {
                this.state = 1205;
                this.match(CypherParser.SP);
                this.state = 1206;
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
            this.state = 1209;
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
            this.state = 1224;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1211;
                this.match(CypherParser.BEGIN);
                this.state = 1212;
                this.match(CypherParser.SP);
                this.state = 1213;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1214;
                this.match(CypherParser.BEGIN);
                this.state = 1215;
                this.match(CypherParser.SP);
                this.state = 1216;
                this.match(CypherParser.TRANSACTION);
                this.state = 1217;
                this.match(CypherParser.SP);
                this.state = 1218;
                this.match(CypherParser.READ);
                this.state = 1219;
                this.match(CypherParser.SP);
                this.state = 1220;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1221;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1222;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1223;
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
            this.state = 1228;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1226;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1227;
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
            this.state = 1230;
            this.match(CypherParser.LOAD);
            this.state = 1231;
            this.match(CypherParser.SP);
            this.state = 1232;
            this.match(CypherParser.EXTENSION);
            this.state = 1233;
            this.match(CypherParser.SP);
            this.state = 1236;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 1234;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1235;
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
            this.state = 1238;
            this.match(CypherParser.INSTALL);
            this.state = 1239;
            this.match(CypherParser.SP);
            this.state = 1240;
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
        this.enterRule(localctx, 116, CypherParser.RULE_oC_Query);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1242;
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
            this.state = 1265;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1244;
                this.oC_SingleQuery();
                this.state = 1251;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1246;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1245;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1248;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 1253;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1258;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1254;
                        this.oC_Return();
                        this.state = 1256;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1255;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1260;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1262;
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
            this.state = 1279;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 164, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1267;
                this.match(CypherParser.UNION);
                this.state = 1268;
                this.match(CypherParser.SP);
                this.state = 1269;
                this.match(CypherParser.ALL);
                this.state = 1271;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1270;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1273;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1274;
                this.match(CypherParser.UNION);
                this.state = 1276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1275;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1278;
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
            this.state = 1283;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1281;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1282;
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
            this.state = 1320;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1291;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 32777) !== 0) || _la===143) {
                    {
                    {
                    this.state = 1285;
                    this.oC_ReadingClause();
                    this.state = 1287;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1286;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1293;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1294;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1301;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 32777) !== 0) || _la===143) {
                    {
                    {
                    this.state = 1295;
                    this.oC_ReadingClause();
                    this.state = 1297;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
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
                this.oC_UpdatingClause();
                this.state = 1311;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1306;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1305;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1308;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1313;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
                }
                this.state = 1318;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
                case 1:
                    {
                    this.state = 1315;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1314;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1317;
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
            this.state = 1326;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1322;
                    this.kU_QueryPart();
                    this.state = 1324;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1323;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1328;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 176, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1330;
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
            this.state = 1338;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===58 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 32777) !== 0) || _la===143) {
                {
                {
                this.state = 1332;
                this.oC_ReadingClause();
                this.state = 1334;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1333;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1340;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1347;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 289) !== 0) || _la===108 || _la===131) {
                {
                {
                this.state = 1341;
                this.oC_UpdatingClause();
                this.state = 1343;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1342;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1349;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1350;
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
            this.state = 1356;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1352;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1353;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1354;
                this.oC_Set();
                }
                break;
            case CypherParser.DELETE:
            case CypherParser.DETACH:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1355;
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
            this.state = 1362;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.MATCH:
            case CypherParser.OPTIONAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1358;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1359;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1360;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1361;
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
            this.state = 1364;
            this.match(CypherParser.LOAD);
            this.state = 1382;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
            case 1:
                {
                this.state = 1365;
                this.match(CypherParser.SP);
                this.state = 1366;
                this.match(CypherParser.WITH);
                this.state = 1367;
                this.match(CypherParser.SP);
                this.state = 1368;
                this.match(CypherParser.HEADERS);
                this.state = 1370;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1369;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1372;
                this.match(CypherParser.T__1);
                this.state = 1374;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1373;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1376;
                this.kU_ColumnDefinitions();
                this.state = 1378;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1377;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1380;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1384;
            this.match(CypherParser.SP);
            this.state = 1385;
            this.match(CypherParser.FROM);
            this.state = 1386;
            this.match(CypherParser.SP);
            this.state = 1387;
            this.kU_ScanSource();
            this.state = 1401;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
            case 1:
                {
                this.state = 1389;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1388;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1391;
                this.match(CypherParser.T__1);
                this.state = 1393;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1392;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1395;
                this.kU_Options();
                this.state = 1397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1396;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1399;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1407;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
            case 1:
                {
                this.state = 1404;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1403;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1406;
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
            this.state = 1414;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
            case 1:
                {
                this.state = 1409;
                this.oC_Variable();
                this.state = 1410;
                this.match(CypherParser.SP);
                this.state = 1411;
                this.match(CypherParser.AS);
                this.state = 1412;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1416;
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
            this.state = 1418;
            this.oC_YieldItem();
            this.state = 1429;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 196, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1420;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1419;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1422;
                    this.match(CypherParser.T__3);
                    this.state = 1424;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1423;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1426;
                    this.oC_YieldItem();
                    }
                    }
                }
                this.state = 1431;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 196, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1432;
            this.match(CypherParser.CALL);
            this.state = 1433;
            this.match(CypherParser.SP);
            this.state = 1434;
            this.oC_FunctionInvocation();
            this.state = 1439;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
            case 1:
                {
                this.state = 1436;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1435;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1438;
                this.oC_Where();
                }
                break;
            }
            this.state = 1447;
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
                this.match(CypherParser.YIELD);
                this.state = 1445;
                this.match(CypherParser.SP);
                this.state = 1446;
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
            this.state = 1451;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===118) {
                {
                this.state = 1449;
                this.match(CypherParser.OPTIONAL);
                this.state = 1450;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1453;
            this.match(CypherParser.MATCH);
            this.state = 1455;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1454;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1457;
            this.oC_Pattern();
            this.state = 1460;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
            case 1:
                {
                this.state = 1458;
                this.match(CypherParser.SP);
                this.state = 1459;
                this.oC_Where();
                }
                break;
            }
            this.state = 1464;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
            case 1:
                {
                this.state = 1462;
                this.match(CypherParser.SP);
                this.state = 1463;
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
            this.state = 1466;
            this.match(CypherParser.HINT);
            this.state = 1467;
            this.match(CypherParser.SP);
            this.state = 1468;
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
            this.state = 1482;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__1:
                {
                this.state = 1471;
                this.match(CypherParser.T__1);
                this.state = 1473;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1472;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1475;
                this.kU_JoinNode(0);
                this.state = 1477;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1476;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1479;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1481;
                this.oC_SchemaName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1500;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 210, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1498;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
                    case 1:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1484;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1485;
                        this.match(CypherParser.SP);
                        this.state = 1486;
                        this.match(CypherParser.JOIN);
                        this.state = 1487;
                        this.match(CypherParser.SP);
                        this.state = 1488;
                        this.kU_JoinNode(5);
                        }
                        break;
                    case 2:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1489;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1494;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                            case 1:
                                {
                                {
                                this.state = 1490;
                                this.match(CypherParser.SP);
                                this.state = 1491;
                                this.match(CypherParser.MULTI_JOIN);
                                this.state = 1492;
                                this.match(CypherParser.SP);
                                this.state = 1493;
                                this.oC_SchemaName();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 1496;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 208, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    }
                    }
                }
                this.state = 1502;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 210, this._ctx);
            }
            }
        }
        catch (re) {
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
            this.state = 1503;
            this.match(CypherParser.UNWIND);
            this.state = 1505;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1504;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1507;
            this.oC_Expression();
            this.state = 1508;
            this.match(CypherParser.SP);
            this.state = 1509;
            this.match(CypherParser.AS);
            this.state = 1510;
            this.match(CypherParser.SP);
            this.state = 1511;
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
            this.state = 1513;
            this.match(CypherParser.CREATE);
            this.state = 1515;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1514;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1517;
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
            this.state = 1519;
            this.match(CypherParser.MERGE);
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
            this.state = 1528;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 214, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1524;
                    this.match(CypherParser.SP);
                    this.state = 1525;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1530;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 214, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1541;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1531;
                this.match(CypherParser.ON);
                this.state = 1532;
                this.match(CypherParser.SP);
                this.state = 1533;
                this.match(CypherParser.MATCH);
                this.state = 1534;
                this.match(CypherParser.SP);
                this.state = 1535;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1536;
                this.match(CypherParser.ON);
                this.state = 1537;
                this.match(CypherParser.SP);
                this.state = 1538;
                this.match(CypherParser.CREATE);
                this.state = 1539;
                this.match(CypherParser.SP);
                this.state = 1540;
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
            this.state = 1543;
            this.match(CypherParser.SET);
            this.state = 1545;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1544;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1547;
            this.oC_SetItem();
            this.state = 1558;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1549;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1548;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1551;
                    this.match(CypherParser.T__3);
                    this.state = 1553;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1552;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1555;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1560;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1561;
            this.oC_PropertyExpression();
            this.state = 1563;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1562;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1565;
            this.match(CypherParser.T__5);
            this.state = 1567;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1566;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1569;
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
            this.state = 1573;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===77) {
                {
                this.state = 1571;
                this.match(CypherParser.DETACH);
                this.state = 1572;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1575;
            this.match(CypherParser.DELETE);
            this.state = 1577;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1576;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1579;
            this.oC_Expression();
            this.state = 1590;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 226, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1581;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1580;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1583;
                    this.match(CypherParser.T__3);
                    this.state = 1585;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1584;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1587;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1592;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 226, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1593;
            this.match(CypherParser.WITH);
            this.state = 1594;
            this.oC_ProjectionBody();
            this.state = 1599;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
            case 1:
                {
                this.state = 1596;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1595;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1598;
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
            this.state = 1601;
            this.match(CypherParser.RETURN);
            this.state = 1602;
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
            this.state = 1608;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
            case 1:
                {
                this.state = 1605;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1604;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1607;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1610;
            this.match(CypherParser.SP);
            this.state = 1611;
            this.oC_ProjectionItems();
            this.state = 1614;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 231, this._ctx) ) {
            case 1:
                {
                this.state = 1612;
                this.match(CypherParser.SP);
                this.state = 1613;
                this.oC_Order();
                }
                break;
            }
            this.state = 1618;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
            case 1:
                {
                this.state = 1616;
                this.match(CypherParser.SP);
                this.state = 1617;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1622;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
            case 1:
                {
                this.state = 1620;
                this.match(CypherParser.SP);
                this.state = 1621;
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
            this.state = 1652;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1624;
                this.match(CypherParser.STAR);
                this.state = 1635;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 236, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1626;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1625;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1628;
                        this.match(CypherParser.T__3);
                        this.state = 1630;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1629;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1632;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1637;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 236, this._ctx);
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
                this.state = 1638;
                this.oC_ProjectionItem();
                this.state = 1649;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 239, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1640;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1639;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1642;
                        this.match(CypherParser.T__3);
                        this.state = 1644;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1643;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1646;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1651;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 239, this._ctx);
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
            this.state = 1661;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1654;
                this.oC_Expression();
                this.state = 1655;
                this.match(CypherParser.SP);
                this.state = 1656;
                this.match(CypherParser.AS);
                this.state = 1657;
                this.match(CypherParser.SP);
                this.state = 1658;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1660;
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
            this.state = 1663;
            this.match(CypherParser.ORDER);
            this.state = 1664;
            this.match(CypherParser.SP);
            this.state = 1665;
            this.match(CypherParser.BY);
            this.state = 1666;
            this.match(CypherParser.SP);
            this.state = 1667;
            this.oC_SortItem();
            this.state = 1675;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 1668;
                this.match(CypherParser.T__3);
                this.state = 1670;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1669;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1672;
                this.oC_SortItem();
                }
                }
                this.state = 1677;
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
            this.state = 1678;
            this.match(CypherParser.L_SKIP);
            this.state = 1679;
            this.match(CypherParser.SP);
            this.state = 1680;
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
            this.state = 1682;
            this.match(CypherParser.LIMIT);
            this.state = 1683;
            this.match(CypherParser.SP);
            this.state = 1684;
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
            this.state = 1686;
            this.oC_Expression();
            this.state = 1691;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
            case 1:
                {
                this.state = 1688;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1687;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1690;
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
            this.state = 1693;
            this.match(CypherParser.WHERE);
            this.state = 1694;
            this.match(CypherParser.SP);
            this.state = 1695;
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
            this.state = 1697;
            this.oC_PatternPart();
            this.state = 1708;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 248, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1699;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1698;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1701;
                    this.match(CypherParser.T__3);
                    this.state = 1703;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1702;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1705;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1710;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 248, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1722;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1711;
                this.oC_Variable();
                this.state = 1713;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1712;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1715;
                this.match(CypherParser.T__5);
                this.state = 1717;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1716;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1719;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1721;
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
            this.state = 1724;
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
            this.state = 1740;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1726;
                this.oC_NodePattern();
                this.state = 1733;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 253, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1728;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 1727;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1730;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1735;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 253, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1736;
                this.match(CypherParser.T__1);
                this.state = 1737;
                this.oC_PatternElement();
                this.state = 1738;
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
            this.state = 1742;
            this.match(CypherParser.T__1);
            this.state = 1744;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1743;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1750;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577943) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 572868031) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 590081) !== 0)) {
                {
                this.state = 1746;
                this.oC_Variable();
                this.state = 1748;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1747;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1756;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===159) {
                {
                this.state = 1752;
                this.oC_NodeLabels();
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
            if (_la===9) {
                {
                this.state = 1758;
                this.kU_Properties();
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

            this.state = 1764;
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
            this.state = 1766;
            this.oC_RelationshipPattern();
            this.state = 1768;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1767;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1770;
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
            this.state = 1816;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 274, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1772;
                this.oC_LeftArrowHead();
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
                this.oC_Dash();
                this.state = 1778;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 264, this._ctx) ) {
                case 1:
                    {
                    this.state = 1777;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1781;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1780;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1784;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1783;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1786;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1788;
                this.oC_Dash();
                this.state = 1790;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 267, this._ctx) ) {
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
                if (_la===175) {
                    {
                    this.state = 1795;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1798;
                this.oC_Dash();
                this.state = 1800;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1799;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1802;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1804;
                this.oC_Dash();
                this.state = 1806;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 271, this._ctx) ) {
                case 1:
                    {
                    this.state = 1805;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1809;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1808;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1812;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1811;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1814;
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
            this.state = 1818;
            this.match(CypherParser.T__6);
            this.state = 1820;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1819;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1826;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577943) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 572868031) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 590081) !== 0)) {
                {
                this.state = 1822;
                this.oC_Variable();
                this.state = 1824;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1823;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1832;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===159) {
                {
                this.state = 1828;
                this.oC_RelationshipTypes();
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
            if (_la===154) {
                {
                this.state = 1834;
                this.kU_RecursiveDetail();
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
            if (_la===9) {
                {
                this.state = 1840;
                this.kU_Properties();
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

            this.state = 1846;
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
            this.state = 1848;
            this.match(CypherParser.T__8);
            this.state = 1850;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1849;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1885;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577943) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 572868031) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 590081) !== 0)) {
                {
                this.state = 1852;
                this.oC_PropertyKeyName();
                this.state = 1854;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
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
                if (_la===175) {
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
                if (_la===175) {
                    {
                    this.state = 1861;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1882;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 1864;
                    this.match(CypherParser.T__3);
                    this.state = 1866;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1865;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1868;
                    this.oC_PropertyKeyName();
                    this.state = 1870;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1869;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1872;
                    this.match(CypherParser.COLON);
                    this.state = 1874;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1873;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1876;
                    this.oC_Expression();
                    this.state = 1878;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1877;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1884;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1887;
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
            this.state = 1889;
            this.match(CypherParser.COLON);
            this.state = 1891;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1890;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1893;
            this.oC_RelTypeName();
            this.state = 1907;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 298, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1895;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1894;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1897;
                    this.match(CypherParser.T__10);
                    this.state = 1899;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===159) {
                        {
                        this.state = 1898;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 1902;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1901;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1904;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1909;
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
    public oC_NodeLabels(): OC_NodeLabelsContext {
        let localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this._ctx, this.state);
        this.enterRule(localctx, 202, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1910;
            this.oC_NodeLabel();
            this.state = 1917;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 300, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1912;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 1911;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1914;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1919;
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
    public oC_NodeLabel(): OC_NodeLabelContext {
        let localctx: OC_NodeLabelContext = new OC_NodeLabelContext(this._ctx, this.state);
        this.enterRule(localctx, 204, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1920;
            this.match(CypherParser.COLON);
            this.state = 1922;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1921;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1924;
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
            this.state = 1926;
            this.match(CypherParser.STAR);
            this.state = 1931;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 303, this._ctx) ) {
            case 1:
                {
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
                this.kU_RecursiveType();
                }
                break;
            }
            this.state = 1937;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 305, this._ctx) ) {
            case 1:
                {
                this.state = 1934;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 304, this._ctx) ) {
                case 1:
                    {
                    this.state = 1933;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1936;
                this.oC_RangeLiteral();
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
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1939;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1942;
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
            this.state = 1965;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.WSHORTEST:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1945;
                this.match(CypherParser.WSHORTEST);
                this.state = 1947;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1946;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1949;
                this.match(CypherParser.T__1);
                this.state = 1951;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1950;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1953;
                this.oC_PropertyKeyName();
                this.state = 1955;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1954;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1957;
                this.match(CypherParser.T__2);
                }
                break;
            case CypherParser.SHORTEST:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1959;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.ALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1960;
                this.match(CypherParser.ALL);
                this.state = 1961;
                this.match(CypherParser.SP);
                this.state = 1962;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.TRAIL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1963;
                this.match(CypherParser.TRAIL);
                }
                break;
            case CypherParser.ACYCLIC:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1964;
                this.match(CypherParser.ACYCLIC);
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
    public oC_RangeLiteral(): OC_RangeLiteralContext {
        let localctx: OC_RangeLiteralContext = new OC_RangeLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 210, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.state = 1981;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 316, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1968;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===162) {
                    {
                    this.state = 1967;
                    this.oC_LowerBound();
                    }
                }

                this.state = 1971;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1970;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1973;
                this.match(CypherParser.T__11);
                this.state = 1975;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 314, this._ctx) ) {
                case 1:
                    {
                    this.state = 1974;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1978;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===162) {
                    {
                    this.state = 1977;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1980;
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
            this.state = 1983;
            this.match(CypherParser.T__1);
            this.state = 1985;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1984;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1987;
            this.oC_Variable();
            this.state = 1989;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1988;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1991;
            this.match(CypherParser.T__3);
            this.state = 1993;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1992;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1995;
            this.oC_Variable();
            this.state = 2007;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 323, this._ctx) ) {
            case 1:
                {
                this.state = 1997;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 1996;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1999;
                this.match(CypherParser.T__10);
                this.state = 2001;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2000;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2003;
                this.oC_Where();
                this.state = 2005;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 322, this._ctx) ) {
                case 1:
                    {
                    this.state = 2004;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                }
                break;
            }
            this.state = 2028;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===175) {
                {
                this.state = 2010;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2009;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2012;
                this.match(CypherParser.T__10);
                this.state = 2014;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2013;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2016;
                this.kU_RecursiveProjectionItems();
                this.state = 2018;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2017;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2020;
                this.match(CypherParser.T__3);
                this.state = 2022;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2021;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2024;
                this.kU_RecursiveProjectionItems();
                this.state = 2026;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2025;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2030;
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
            this.state = 2032;
            this.match(CypherParser.T__8);
            this.state = 2034;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 330, this._ctx) ) {
            case 1:
                {
                this.state = 2033;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2037;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309486481) !== 0)) {
                {
                this.state = 2036;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2040;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2039;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2042;
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
            this.state = 2044;
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
            this.state = 2046;
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
            this.state = 2048;
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
            this.state = 2050;
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
            this.state = 2052;
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
            this.state = 2054;
            this.oC_XorExpression();
            this.state = 2061;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 333, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2055;
                    this.match(CypherParser.SP);
                    this.state = 2056;
                    this.match(CypherParser.OR);
                    this.state = 2057;
                    this.match(CypherParser.SP);
                    this.state = 2058;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 2063;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 333, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 2064;
            this.oC_AndExpression();
            this.state = 2071;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 334, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2065;
                    this.match(CypherParser.SP);
                    this.state = 2066;
                    this.match(CypherParser.XOR);
                    this.state = 2067;
                    this.match(CypherParser.SP);
                    this.state = 2068;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 2073;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 334, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 2074;
            this.oC_NotExpression();
            this.state = 2081;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 335, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2075;
                    this.match(CypherParser.SP);
                    this.state = 2076;
                    this.match(CypherParser.AND);
                    this.state = 2077;
                    this.match(CypherParser.SP);
                    this.state = 2078;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 2083;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 335, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 2090;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===113) {
                {
                {
                this.state = 2084;
                this.match(CypherParser.NOT);
                this.state = 2086;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2085;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2092;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2093;
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
            this.state = 2143;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 348, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2095;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2105;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 340, this._ctx) ) {
                case 1:
                    {
                    this.state = 2097;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2096;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2099;
                    this.kU_ComparisonOperator();
                    this.state = 2101;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2100;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2103;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2107;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 2109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2108;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2111;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 2113;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2112;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2115;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2119;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2120;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2123;
                this.kU_ComparisonOperator();
                this.state = 2125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2124;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2127;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2137;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2129;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2128;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2131;
                        this.kU_ComparisonOperator();
                        this.state = 2133;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2132;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2135;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2139;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 347, this._ctx);
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
            this.state = 2145;
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
            this.state = 2147;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 2158;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 351, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2149;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2148;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2151;
                    this.match(CypherParser.T__10);
                    this.state = 2153;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2152;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2155;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 2160;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 351, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 2161;
            this.kU_BitShiftOperatorExpression();
            this.state = 2172;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 354, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
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
                    this.match(CypherParser.T__17);
                    this.state = 2167;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2166;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2169;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 2174;
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
    public kU_BitShiftOperatorExpression(): KU_BitShiftOperatorExpressionContext {
        let localctx: KU_BitShiftOperatorExpressionContext = new KU_BitShiftOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 242, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2175;
            this.oC_AddOrSubtractExpression();
            this.state = 2187;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 357, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
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
                    this.kU_BitShiftOperator();
                    this.state = 2181;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2180;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2183;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 2189;
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
    public kU_BitShiftOperator(): KU_BitShiftOperatorContext {
        let localctx: KU_BitShiftOperatorContext = new KU_BitShiftOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 244, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2190;
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
            this.state = 2192;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 2204;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 360, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2194;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2193;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2196;
                    this.kU_AddOrSubtractOperator();
                    this.state = 2198;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2197;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2200;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 2206;
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
    public kU_AddOrSubtractOperator(): KU_AddOrSubtractOperatorContext {
        let localctx: KU_AddOrSubtractOperatorContext = new KU_AddOrSubtractOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 248, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2207;
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
            this.state = 2209;
            this.oC_PowerOfExpression();
            this.state = 2221;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 363, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2211;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2210;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2213;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 2215;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2214;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2217;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 2223;
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
    public kU_MultiplyDivideModuloOperator(): KU_MultiplyDivideModuloOperatorContext {
        let localctx: KU_MultiplyDivideModuloOperatorContext = new KU_MultiplyDivideModuloOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 252, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2224;
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
            this.state = 2226;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 2237;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 366, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2228;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2227;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2230;
                    this.match(CypherParser.T__23);
                    this.state = 2232;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2231;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2234;
                    this.oC_UnaryAddSubtractOrFactorialExpression();
                    }
                    }
                }
                this.state = 2239;
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
    public oC_UnaryAddSubtractOrFactorialExpression(): OC_UnaryAddSubtractOrFactorialExpressionContext {
        let localctx: OC_UnaryAddSubtractOrFactorialExpressionContext = new OC_UnaryAddSubtractOrFactorialExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 256, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===157) {
                {
                {
                this.state = 2240;
                this.match(CypherParser.MINUS);
                this.state = 2242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2241;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2248;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2249;
            this.oC_StringListNullOperatorExpression();
            this.state = 2254;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 370, this._ctx) ) {
            case 1:
                {
                this.state = 2251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2250;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2253;
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
            this.state = 2256;
            this.oC_PropertyOrLabelsExpression();
            this.state = 2264;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 372, this._ctx) ) {
            case 1:
                {
                this.state = 2257;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 2259;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2258;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2261;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 371, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 2263;
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
            this.state = 2285;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 376, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2266;
                this.match(CypherParser.SP);
                this.state = 2267;
                this.match(CypherParser.IN);
                this.state = 2269;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2268;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2271;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2272;
                this.match(CypherParser.T__6);
                this.state = 2273;
                this.oC_Expression();
                this.state = 2274;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2276;
                this.match(CypherParser.T__6);
                this.state = 2278;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309485457) !== 0)) {
                    {
                    this.state = 2277;
                    this.oC_Expression();
                    }
                }

                this.state = 2280;
                this.match(CypherParser.COLON);
                this.state = 2282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309485457) !== 0)) {
                    {
                    this.state = 2281;
                    this.oC_Expression();
                    }
                }

                this.state = 2284;
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
            this.state = 2298;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 377, this._ctx) ) {
            case 1:
                {
                this.state = 2287;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 2288;
                this.match(CypherParser.SP);
                this.state = 2289;
                this.match(CypherParser.STARTS);
                this.state = 2290;
                this.match(CypherParser.SP);
                this.state = 2291;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 2292;
                this.match(CypherParser.SP);
                this.state = 2293;
                this.match(CypherParser.ENDS);
                this.state = 2294;
                this.match(CypherParser.SP);
                this.state = 2295;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 2296;
                this.match(CypherParser.SP);
                this.state = 2297;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 2301;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2300;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2303;
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
            this.state = 2306;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2305;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2308;
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
            this.state = 2320;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2310;
                this.match(CypherParser.SP);
                this.state = 2311;
                this.match(CypherParser.IS);
                this.state = 2312;
                this.match(CypherParser.SP);
                this.state = 2313;
                this.match(CypherParser.NULL);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2314;
                this.match(CypherParser.SP);
                this.state = 2315;
                this.match(CypherParser.IS);
                this.state = 2316;
                this.match(CypherParser.SP);
                this.state = 2317;
                this.match(CypherParser.NOT);
                this.state = 2318;
                this.match(CypherParser.SP);
                this.state = 2319;
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
            this.state = 2322;
            this.oC_Atom();
            this.state = 2329;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 382, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2324;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2323;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2326;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2331;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 382, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 2342;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 383, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2332;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2333;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2334;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2335;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2336;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2337;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2338;
                this.oC_ExistSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2339;
                this.kU_CountSubquery();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2340;
                this.oC_Variable();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 2341;
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
            this.state = 2400;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ALL:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2344;
                this.match(CypherParser.ALL);
                this.state = 2346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2345;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2348;
                this.match(CypherParser.T__1);
                this.state = 2350;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2349;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2352;
                this.oC_FilterExpression();
                this.state = 2354;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2353;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2356;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.ANY:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2358;
                this.match(CypherParser.ANY);
                this.state = 2360;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2359;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2362;
                this.match(CypherParser.T__1);
                this.state = 2364;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2363;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2366;
                this.oC_FilterExpression();
                this.state = 2368;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2367;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2370;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.NONE:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2372;
                this.match(CypherParser.NONE);
                this.state = 2374;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2373;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2376;
                this.match(CypherParser.T__1);
                this.state = 2378;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2377;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2380;
                this.oC_FilterExpression();
                this.state = 2382;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2381;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2384;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.SINGLE:
                this.enterOuterAlt(localctx, 4);
                {
                {
                this.state = 2386;
                this.match(CypherParser.SINGLE);
                this.state = 2388;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2387;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2390;
                this.match(CypherParser.T__1);
                this.state = 2392;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2391;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2394;
                this.oC_FilterExpression();
                this.state = 2396;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2395;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2398;
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
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2402;
            this.oC_IdInColl();
            this.state = 2407;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 398, this._ctx) ) {
            case 1:
                {
                this.state = 2404;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2403;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2406;
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
    public oC_IdInColl(): OC_IdInCollContext {
        let localctx: OC_IdInCollContext = new OC_IdInCollContext(this._ctx, this.state);
        this.enterRule(localctx, 276, CypherParser.RULE_oC_IdInColl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2409;
            this.oC_Variable();
            this.state = 2410;
            this.match(CypherParser.SP);
            this.state = 2411;
            this.match(CypherParser.IN);
            this.state = 2412;
            this.match(CypherParser.SP);
            this.state = 2413;
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
            this.state = 2421;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2415;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2416;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.FALSE:
            case CypherParser.TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2417;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2418;
                this.match(CypherParser.NULL);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2419;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2420;
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
            this.state = 2423;
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
            this.state = 2425;
            this.match(CypherParser.T__6);
            this.state = 2427;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2426;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2442;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309485457) !== 0)) {
                {
                this.state = 2429;
                this.oC_Expression();
                this.state = 2431;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2430;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2433;
                    this.kU_ListEntry();
                    this.state = 2435;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2434;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2441;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2444;
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
            this.state = 2446;
            this.match(CypherParser.T__3);
            this.state = 2448;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 405, this._ctx) ) {
            case 1:
                {
                this.state = 2447;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2451;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309485457) !== 0)) {
                {
                this.state = 2450;
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
            this.state = 2453;
            this.match(CypherParser.T__8);
            this.state = 2455;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2454;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2457;
            this.kU_StructField();
            this.state = 2459;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2458;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2471;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 2461;
                this.match(CypherParser.T__3);
                this.state = 2463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2462;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2465;
                this.kU_StructField();
                this.state = 2467;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2466;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2473;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2474;
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
            this.state = 2478;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2476;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2477;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2481;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2480;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2483;
            this.match(CypherParser.COLON);
            this.state = 2485;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2484;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2487;
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
            this.state = 2489;
            this.match(CypherParser.T__1);
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
            this.state = 2495;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2494;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2497;
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
            this.state = 2576;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 436, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2499;
                this.match(CypherParser.COUNT);
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
                this.match(CypherParser.T__1);
                this.state = 2505;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2504;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2507;
                this.match(CypherParser.STAR);
                this.state = 2509;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2508;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2511;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2512;
                this.match(CypherParser.CAST);
                this.state = 2514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2513;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2516;
                this.match(CypherParser.T__1);
                this.state = 2518;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2517;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2520;
                this.kU_FunctionParameter();
                this.state = 2522;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2521;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2534;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case CypherParser.AS:
                    {
                    {
                    this.state = 2524;
                    this.match(CypherParser.AS);
                    this.state = 2526;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2525;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2528;
                    this.kU_DataType(0);
                    }
                    }
                    break;
                case CypherParser.T__3:
                    {
                    {
                    this.state = 2529;
                    this.match(CypherParser.T__3);
                    this.state = 2531;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2530;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2533;
                    this.kU_FunctionParameter();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
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
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2541;
                this.oC_FunctionName();
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
                this.match(CypherParser.T__1);
                this.state = 2547;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2546;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2553;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===78) {
                    {
                    this.state = 2549;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2551;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2550;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2572;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592561) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1952182303) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1309485457) !== 0)) {
                    {
                    this.state = 2555;
                    this.kU_FunctionParameter();
                    this.state = 2557;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2556;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2569;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===4) {
                        {
                        {
                        this.state = 2559;
                        this.match(CypherParser.T__3);
                        this.state = 2561;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2560;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2563;
                        this.kU_FunctionParameter();
                        this.state = 2565;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2564;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2571;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2574;
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
            this.state = 2578;
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
            this.state = 2593;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 440, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2589;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 439, this._ctx) ) {
                case 1:
                    {
                    this.state = 2580;
                    this.oC_SymbolicName();
                    this.state = 2582;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2581;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2584;
                    this.match(CypherParser.COLON);
                    this.state = 2585;
                    this.match(CypherParser.T__5);
                    this.state = 2587;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2586;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 2591;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2592;
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
            this.state = 2595;
            this.kU_LambdaVars();
            this.state = 2597;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2596;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2599;
            this.match(CypherParser.MINUS);
            this.state = 2600;
            this.match(CypherParser.T__15);
            this.state = 2602;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2601;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2604;
            this.oC_Expression();
            this.state = 2606;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 443, this._ctx) ) {
            case 1:
                {
                this.state = 2605;
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
            this.state = 2632;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2608;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2609;
                this.match(CypherParser.T__1);
                this.state = 2611;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2610;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2613;
                this.oC_SymbolicName();
                this.state = 2615;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2614;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2627;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2617;
                    this.match(CypherParser.T__3);
                    this.state = 2619;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2618;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2621;
                    this.oC_SymbolicName();
                    this.state = 2623;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2622;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2629;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2630;
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
            this.state = 2634;
            this.oC_NodePattern();
            this.state = 2639;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2636;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===175) {
                        {
                        this.state = 2635;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2638;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2641;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 451, this._ctx);
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
        this.enterRule(localctx, 304, CypherParser.RULE_oC_ExistSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2643;
            this.match(CypherParser.EXISTS);
            this.state = 2645;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2644;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2647;
            this.match(CypherParser.T__8);
            this.state = 2649;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2648;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2651;
            this.match(CypherParser.MATCH);
            this.state = 2653;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2652;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2655;
            this.oC_Pattern();
            this.state = 2660;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 456, this._ctx) ) {
            case 1:
                {
                this.state = 2657;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2656;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2659;
                this.oC_Where();
                }
                break;
            }
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
        this.enterRule(localctx, 306, CypherParser.RULE_kU_CountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2667;
            this.match(CypherParser.COUNT);
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
            this.match(CypherParser.T__8);
            this.state = 2673;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2672;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2675;
            this.match(CypherParser.MATCH);
            this.state = 2677;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2676;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2679;
            this.oC_Pattern();
            this.state = 2684;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 462, this._ctx) ) {
            case 1:
                {
                this.state = 2681;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2680;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2683;
                this.oC_Where();
                }
                break;
            }
            this.state = 2687;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2686;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2689;
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
        this.enterRule(localctx, 308, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2691;
            this.match(CypherParser.T__4);
            this.state = 2693;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2692;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2697;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2695;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2696;
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
        this.enterRule(localctx, 310, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2721;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 471, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2699;
                this.match(CypherParser.CASE);
                this.state = 2704;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2701;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2700;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2703;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2706;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 467, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2708;
                this.match(CypherParser.CASE);
                this.state = 2710;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2709;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2712;
                this.oC_Expression();
                this.state = 2717;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2714;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===175) {
                            {
                            this.state = 2713;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2716;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2719;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 470, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2731;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 474, this._ctx) ) {
            case 1:
                {
                this.state = 2724;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2723;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2726;
                this.match(CypherParser.ELSE);
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
                }
                break;
            }
            this.state = 2734;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2733;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2736;
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
        this.enterRule(localctx, 312, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2738;
            this.match(CypherParser.WHEN);
            this.state = 2740;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2739;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2742;
            this.oC_Expression();
            this.state = 2744;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2743;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2746;
            this.match(CypherParser.THEN);
            this.state = 2748;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2747;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2750;
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
        this.enterRule(localctx, 314, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2752;
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
        this.enterRule(localctx, 316, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 2756;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2754;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2755;
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
        this.enterRule(localctx, 318, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2758;
            this.match(CypherParser.T__25);
            this.state = 2761;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2759;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2760;
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
        this.enterRule(localctx, 320, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2763;
            this.oC_Atom();
            this.state = 2765;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 2764;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2767;
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
        this.enterRule(localctx, 322, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2769;
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
        this.enterRule(localctx, 324, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2771;
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
        this.enterRule(localctx, 326, CypherParser.RULE_oC_DoubleLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2773;
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
        this.enterRule(localctx, 328, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2775;
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
        this.enterRule(localctx, 330, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 2782;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2777;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2778;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2780;
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
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2781;
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
        this.enterRule(localctx, 332, CypherParser.RULE_kU_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2784;
            _la = this._input.LA(1);
            if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577943) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 572868031) !== 0) || _la===155)) {
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
        this.enterRule(localctx, 334, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2786;
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
        this.enterRule(localctx, 336, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2788;
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
        this.enterRule(localctx, 338, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2790;
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
        4,1,178,2793,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        1,0,1,0,3,0,343,8,0,1,0,1,0,3,0,347,8,0,1,0,5,0,350,8,0,10,0,12,
        0,353,9,0,1,0,3,0,356,8,0,1,0,1,0,1,1,3,1,361,8,1,1,1,3,1,364,8,
        1,1,1,1,1,3,1,368,8,1,1,1,3,1,371,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,393,8,
        2,1,3,1,3,1,3,1,3,3,3,399,8,3,1,3,1,3,3,3,403,8,3,1,3,3,3,406,8,
        3,1,3,1,3,1,3,1,3,3,3,412,8,3,1,3,1,3,3,3,416,8,3,1,3,1,3,3,3,420,
        8,3,1,3,1,3,3,3,424,8,3,1,4,1,4,3,4,428,8,4,1,4,1,4,3,4,432,8,4,
        1,4,1,4,3,4,436,8,4,1,4,5,4,439,8,4,10,4,12,4,442,9,4,1,4,3,4,445,
        8,4,1,4,1,4,1,5,1,5,1,5,3,5,452,8,5,1,5,1,5,3,5,456,8,5,1,5,1,5,
        1,5,1,5,1,5,1,5,3,5,464,8,5,1,5,1,5,3,5,468,8,5,1,6,1,6,1,6,1,6,
        1,6,1,6,1,6,1,6,3,6,478,8,6,1,6,1,6,3,6,482,8,6,1,6,1,6,3,6,486,
        8,6,1,6,5,6,489,8,6,10,6,12,6,492,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
        7,1,7,1,7,1,7,3,7,504,8,7,1,7,1,7,3,7,508,8,7,1,7,1,7,1,7,1,7,1,
        7,1,7,3,7,516,8,7,1,7,1,7,3,7,520,8,7,1,7,1,7,3,7,524,8,7,1,7,1,
        7,3,7,528,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,536,8,8,1,8,1,8,3,8,540,
        8,8,1,8,1,8,3,8,544,8,8,1,8,1,8,3,8,548,8,8,1,9,1,9,1,9,1,9,1,9,
        1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,563,8,10,1,10,1,10,1,
        10,3,10,568,8,10,1,10,1,10,1,10,1,10,3,10,574,8,10,1,10,1,10,3,10,
        578,8,10,1,10,3,10,581,8,10,1,10,3,10,584,8,10,1,10,1,10,1,11,1,
        11,3,11,590,8,11,1,11,1,11,3,11,594,8,11,1,11,5,11,597,8,11,10,11,
        12,11,600,9,11,3,11,602,8,11,1,11,1,11,1,11,3,11,607,8,11,1,12,1,
        12,3,12,611,8,12,1,12,1,12,3,12,615,8,12,1,12,5,12,618,8,12,10,12,
        12,12,621,9,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,
        1,15,1,15,3,15,635,8,15,1,15,1,15,3,15,639,8,15,1,15,1,15,1,15,1,
        15,1,15,3,15,646,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
        16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,666,8,17,1,
        17,1,17,3,17,670,8,17,1,17,3,17,673,8,17,1,17,3,17,676,8,17,1,17,
        3,17,679,8,17,1,17,3,17,682,8,17,1,17,1,17,3,17,686,8,17,1,17,5,
        17,689,8,17,10,17,12,17,692,9,17,1,17,3,17,695,8,17,1,17,1,17,1,
        17,1,17,1,17,1,17,1,18,1,18,3,18,705,8,18,1,18,1,18,3,18,709,8,18,
        1,18,5,18,712,8,18,10,18,12,18,715,9,18,1,19,1,19,3,19,719,8,19,
        1,19,1,19,1,19,3,19,724,8,19,1,19,1,19,1,20,1,20,3,20,730,8,20,1,
        20,1,20,3,20,734,8,20,1,20,1,20,3,20,738,8,20,1,20,5,20,741,8,20,
        10,20,12,20,744,9,20,1,20,1,20,1,20,1,20,3,20,750,8,20,1,20,1,20,
        3,20,754,8,20,1,20,1,20,3,20,758,8,20,1,20,3,20,761,8,20,1,21,1,
        21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
        22,3,22,778,8,22,1,22,1,22,3,22,782,8,22,1,22,1,22,3,22,786,8,22,
        1,22,1,22,3,22,790,8,22,1,22,1,22,3,22,794,8,22,1,22,3,22,797,8,
        22,1,22,3,22,800,8,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,
        23,3,23,811,8,23,1,23,1,23,3,23,815,8,23,1,23,1,23,1,23,3,23,820,
        8,23,1,23,1,23,3,23,824,8,23,1,23,1,23,3,23,828,8,23,1,23,1,23,3,
        23,832,8,23,1,23,1,23,3,23,836,8,23,3,23,838,8,23,1,23,1,23,3,23,
        842,8,23,1,23,1,23,3,23,846,8,23,3,23,848,8,23,1,23,1,23,1,23,1,
        23,3,23,854,8,23,1,23,1,23,3,23,858,8,23,1,23,1,23,3,23,862,8,23,
        1,23,1,23,3,23,866,8,23,1,24,1,24,3,24,870,8,24,1,24,1,24,3,24,874,
        8,24,1,24,5,24,877,8,24,10,24,12,24,880,9,24,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,897,
        8,26,1,26,1,26,1,26,5,26,902,8,26,10,26,12,26,905,9,26,1,27,1,27,
        1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,917,8,27,1,28,1,28,
        1,28,1,28,1,28,3,28,924,8,28,1,29,1,29,1,29,1,29,3,29,930,8,29,1,
        29,3,29,933,8,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,3,30,943,
        8,30,1,30,3,30,946,8,30,1,31,1,31,1,31,1,31,1,31,1,31,3,31,954,8,
        31,1,31,3,31,957,8,31,1,32,1,32,1,32,1,32,3,32,963,8,32,1,32,3,32,
        966,8,32,1,32,1,32,1,33,1,33,3,33,972,8,33,1,33,1,33,1,34,1,34,1,
        34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,987,8,35,1,35,1,
        35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,3,
        37,1003,8,37,1,38,1,38,1,38,1,38,1,38,3,38,1010,8,38,1,38,1,38,1,
        38,1,38,1,38,3,38,1017,8,38,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,
        40,1,40,3,40,1028,8,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,
        42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,3,43,1048,8,43,1,
        43,1,43,3,43,1052,8,43,1,43,5,43,1055,8,43,10,43,12,43,1058,9,43,
        1,44,1,44,1,44,1,44,1,45,1,45,3,45,1066,8,45,1,45,1,45,3,45,1070,
        8,45,1,45,5,45,1073,8,45,10,45,12,45,1076,9,45,1,46,1,46,1,46,3,
        46,1081,8,46,1,46,1,46,1,46,1,46,3,46,1087,8,46,1,47,1,47,1,47,1,
        47,3,47,1093,8,47,1,47,1,47,3,47,1097,8,47,1,47,1,47,3,47,1101,8,
        47,1,47,1,47,1,48,1,48,1,48,1,48,3,48,1109,8,48,1,48,1,48,3,48,1113,
        8,48,1,48,1,48,3,48,1117,8,48,1,48,1,48,1,48,1,48,3,48,1123,8,48,
        1,48,1,48,3,48,1127,8,48,1,48,1,48,3,48,1131,8,48,1,48,1,48,1,48,
        1,48,3,48,1137,8,48,1,48,1,48,3,48,1141,8,48,1,48,1,48,3,48,1145,
        8,48,1,48,1,48,3,48,1149,8,48,1,48,1,48,3,48,1153,8,48,1,48,1,48,
        1,48,1,48,3,48,1159,8,48,1,48,1,48,3,48,1163,8,48,1,48,1,48,3,48,
        1167,8,48,1,48,1,48,3,48,1171,8,48,1,48,1,48,3,48,1175,8,48,1,48,
        1,48,3,48,1179,8,48,1,48,1,48,5,48,1183,8,48,10,48,12,48,1186,9,
        48,1,49,1,49,5,49,1190,8,49,10,49,12,49,1193,9,49,1,50,1,50,3,50,
        1197,8,50,1,50,1,50,1,51,1,51,3,51,1203,8,51,1,52,1,52,1,52,3,52,
        1208,8,52,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,
        1,54,1,54,1,54,1,54,3,54,1225,8,54,1,55,1,55,3,55,1229,8,55,1,56,
        1,56,1,56,1,56,1,56,1,56,3,56,1237,8,56,1,57,1,57,1,57,1,57,1,58,
        1,58,1,59,1,59,3,59,1247,8,59,1,59,5,59,1250,8,59,10,59,12,59,1253,
        9,59,1,59,1,59,3,59,1257,8,59,4,59,1259,8,59,11,59,12,59,1260,1,
        59,1,59,1,59,3,59,1266,8,59,1,60,1,60,1,60,1,60,3,60,1272,8,60,1,
        60,1,60,1,60,3,60,1277,8,60,1,60,3,60,1280,8,60,1,61,1,61,3,61,1284,
        8,61,1,62,1,62,3,62,1288,8,62,5,62,1290,8,62,10,62,12,62,1293,9,
        62,1,62,1,62,1,62,3,62,1298,8,62,5,62,1300,8,62,10,62,12,62,1303,
        9,62,1,62,1,62,3,62,1307,8,62,1,62,5,62,1310,8,62,10,62,12,62,1313,
        9,62,1,62,3,62,1316,8,62,1,62,3,62,1319,8,62,3,62,1321,8,62,1,63,
        1,63,3,63,1325,8,63,4,63,1327,8,63,11,63,12,63,1328,1,63,1,63,1,
        64,1,64,3,64,1335,8,64,5,64,1337,8,64,10,64,12,64,1340,9,64,1,64,
        1,64,3,64,1344,8,64,5,64,1346,8,64,10,64,12,64,1349,9,64,1,64,1,
        64,1,65,1,65,1,65,1,65,3,65,1357,8,65,1,66,1,66,1,66,1,66,3,66,1363,
        8,66,1,67,1,67,1,67,1,67,1,67,1,67,3,67,1371,8,67,1,67,1,67,3,67,
        1375,8,67,1,67,1,67,3,67,1379,8,67,1,67,1,67,3,67,1383,8,67,1,67,
        1,67,1,67,1,67,1,67,3,67,1390,8,67,1,67,1,67,3,67,1394,8,67,1,67,
        1,67,3,67,1398,8,67,1,67,1,67,3,67,1402,8,67,1,67,3,67,1405,8,67,
        1,67,3,67,1408,8,67,1,68,1,68,1,68,1,68,1,68,3,68,1415,8,68,1,68,
        1,68,1,69,1,69,3,69,1421,8,69,1,69,1,69,3,69,1425,8,69,1,69,5,69,
        1428,8,69,10,69,12,69,1431,9,69,1,70,1,70,1,70,1,70,3,70,1437,8,
        70,1,70,3,70,1440,8,70,1,70,3,70,1443,8,70,1,70,1,70,1,70,3,70,1448,
        8,70,1,71,1,71,3,71,1452,8,71,1,71,1,71,3,71,1456,8,71,1,71,1,71,
        1,71,3,71,1461,8,71,1,71,1,71,3,71,1465,8,71,1,72,1,72,1,72,1,72,
        1,73,1,73,1,73,3,73,1474,8,73,1,73,1,73,3,73,1478,8,73,1,73,1,73,
        1,73,3,73,1483,8,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,
        1,73,4,73,1495,8,73,11,73,12,73,1496,5,73,1499,8,73,10,73,12,73,
        1502,9,73,1,74,1,74,3,74,1506,8,74,1,74,1,74,1,74,1,74,1,74,1,74,
        1,75,1,75,3,75,1516,8,75,1,75,1,75,1,76,1,76,3,76,1522,8,76,1,76,
        1,76,1,76,5,76,1527,8,76,10,76,12,76,1530,9,76,1,77,1,77,1,77,1,
        77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,1542,8,77,1,78,1,78,3,78,1546,
        8,78,1,78,1,78,3,78,1550,8,78,1,78,1,78,3,78,1554,8,78,1,78,5,78,
        1557,8,78,10,78,12,78,1560,9,78,1,79,1,79,3,79,1564,8,79,1,79,1,
        79,3,79,1568,8,79,1,79,1,79,1,80,1,80,3,80,1574,8,80,1,80,1,80,3,
        80,1578,8,80,1,80,1,80,3,80,1582,8,80,1,80,1,80,3,80,1586,8,80,1,
        80,5,80,1589,8,80,10,80,12,80,1592,9,80,1,81,1,81,1,81,3,81,1597,
        8,81,1,81,3,81,1600,8,81,1,82,1,82,1,82,1,83,3,83,1606,8,83,1,83,
        3,83,1609,8,83,1,83,1,83,1,83,1,83,3,83,1615,8,83,1,83,1,83,3,83,
        1619,8,83,1,83,1,83,3,83,1623,8,83,1,84,1,84,3,84,1627,8,84,1,84,
        1,84,3,84,1631,8,84,1,84,5,84,1634,8,84,10,84,12,84,1637,9,84,1,
        84,1,84,3,84,1641,8,84,1,84,1,84,3,84,1645,8,84,1,84,5,84,1648,8,
        84,10,84,12,84,1651,9,84,3,84,1653,8,84,1,85,1,85,1,85,1,85,1,85,
        1,85,1,85,3,85,1662,8,85,1,86,1,86,1,86,1,86,1,86,1,86,1,86,3,86,
        1671,8,86,1,86,5,86,1674,8,86,10,86,12,86,1677,9,86,1,87,1,87,1,
        87,1,87,1,88,1,88,1,88,1,88,1,89,1,89,3,89,1689,8,89,1,89,3,89,1692,
        8,89,1,90,1,90,1,90,1,90,1,91,1,91,3,91,1700,8,91,1,91,1,91,3,91,
        1704,8,91,1,91,5,91,1707,8,91,10,91,12,91,1710,9,91,1,92,1,92,3,
        92,1714,8,92,1,92,1,92,3,92,1718,8,92,1,92,1,92,1,92,3,92,1723,8,
        92,1,93,1,93,1,94,1,94,3,94,1729,8,94,1,94,5,94,1732,8,94,10,94,
        12,94,1735,9,94,1,94,1,94,1,94,1,94,3,94,1741,8,94,1,95,1,95,3,95,
        1745,8,95,1,95,1,95,3,95,1749,8,95,3,95,1751,8,95,1,95,1,95,3,95,
        1755,8,95,3,95,1757,8,95,1,95,1,95,3,95,1761,8,95,3,95,1763,8,95,
        1,95,1,95,1,96,1,96,3,96,1769,8,96,1,96,1,96,1,97,1,97,3,97,1775,
        8,97,1,97,1,97,3,97,1779,8,97,1,97,3,97,1782,8,97,1,97,3,97,1785,
        8,97,1,97,1,97,1,97,1,97,3,97,1791,8,97,1,97,3,97,1794,8,97,1,97,
        3,97,1797,8,97,1,97,1,97,3,97,1801,8,97,1,97,1,97,1,97,1,97,3,97,
        1807,8,97,1,97,3,97,1810,8,97,1,97,3,97,1813,8,97,1,97,1,97,3,97,
        1817,8,97,1,98,1,98,3,98,1821,8,98,1,98,1,98,3,98,1825,8,98,3,98,
        1827,8,98,1,98,1,98,3,98,1831,8,98,3,98,1833,8,98,1,98,1,98,3,98,
        1837,8,98,3,98,1839,8,98,1,98,1,98,3,98,1843,8,98,3,98,1845,8,98,
        1,98,1,98,1,99,1,99,3,99,1851,8,99,1,99,1,99,3,99,1855,8,99,1,99,
        1,99,3,99,1859,8,99,1,99,1,99,3,99,1863,8,99,1,99,1,99,3,99,1867,
        8,99,1,99,1,99,3,99,1871,8,99,1,99,1,99,3,99,1875,8,99,1,99,1,99,
        3,99,1879,8,99,5,99,1881,8,99,10,99,12,99,1884,9,99,3,99,1886,8,
        99,1,99,1,99,1,100,1,100,3,100,1892,8,100,1,100,1,100,3,100,1896,
        8,100,1,100,1,100,3,100,1900,8,100,1,100,3,100,1903,8,100,1,100,
        5,100,1906,8,100,10,100,12,100,1909,9,100,1,101,1,101,3,101,1913,
        8,101,1,101,5,101,1916,8,101,10,101,12,101,1919,9,101,1,102,1,102,
        3,102,1923,8,102,1,102,1,102,1,103,1,103,3,103,1929,8,103,1,103,
        3,103,1932,8,103,1,103,3,103,1935,8,103,1,103,3,103,1938,8,103,1,
        103,3,103,1941,8,103,1,103,3,103,1944,8,103,1,104,1,104,3,104,1948,
        8,104,1,104,1,104,3,104,1952,8,104,1,104,1,104,3,104,1956,8,104,
        1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,3,104,1966,8,104,
        1,105,3,105,1969,8,105,1,105,3,105,1972,8,105,1,105,1,105,3,105,
        1976,8,105,1,105,3,105,1979,8,105,1,105,3,105,1982,8,105,1,106,1,
        106,3,106,1986,8,106,1,106,1,106,3,106,1990,8,106,1,106,1,106,3,
        106,1994,8,106,1,106,1,106,3,106,1998,8,106,1,106,1,106,3,106,2002,
        8,106,1,106,1,106,3,106,2006,8,106,3,106,2008,8,106,1,106,3,106,
        2011,8,106,1,106,1,106,3,106,2015,8,106,1,106,1,106,3,106,2019,8,
        106,1,106,1,106,3,106,2023,8,106,1,106,1,106,3,106,2027,8,106,3,
        106,2029,8,106,1,106,1,106,1,107,1,107,3,107,2035,8,107,1,107,3,
        107,2038,8,107,1,107,3,107,2041,8,107,1,107,1,107,1,108,1,108,1,
        109,1,109,1,110,1,110,1,111,1,111,1,112,1,112,1,113,1,113,1,113,
        1,113,1,113,5,113,2060,8,113,10,113,12,113,2063,9,113,1,114,1,114,
        1,114,1,114,1,114,5,114,2070,8,114,10,114,12,114,2073,9,114,1,115,
        1,115,1,115,1,115,1,115,5,115,2080,8,115,10,115,12,115,2083,9,115,
        1,116,1,116,3,116,2087,8,116,5,116,2089,8,116,10,116,12,116,2092,
        9,116,1,116,1,116,1,117,1,117,3,117,2098,8,117,1,117,1,117,3,117,
        2102,8,117,1,117,1,117,3,117,2106,8,117,1,117,1,117,3,117,2110,8,
        117,1,117,1,117,3,117,2114,8,117,1,117,1,117,1,117,1,117,1,117,1,
        117,3,117,2122,8,117,1,117,1,117,3,117,2126,8,117,1,117,1,117,3,
        117,2130,8,117,1,117,1,117,3,117,2134,8,117,1,117,1,117,4,117,2138,
        8,117,11,117,12,117,2139,1,117,1,117,3,117,2144,8,117,1,118,1,118,
        1,119,1,119,3,119,2150,8,119,1,119,1,119,3,119,2154,8,119,1,119,
        5,119,2157,8,119,10,119,12,119,2160,9,119,1,120,1,120,3,120,2164,
        8,120,1,120,1,120,3,120,2168,8,120,1,120,5,120,2171,8,120,10,120,
        12,120,2174,9,120,1,121,1,121,3,121,2178,8,121,1,121,1,121,3,121,
        2182,8,121,1,121,1,121,5,121,2186,8,121,10,121,12,121,2189,9,121,
        1,122,1,122,1,123,1,123,3,123,2195,8,123,1,123,1,123,3,123,2199,
        8,123,1,123,1,123,5,123,2203,8,123,10,123,12,123,2206,9,123,1,124,
        1,124,1,125,1,125,3,125,2212,8,125,1,125,1,125,3,125,2216,8,125,
        1,125,1,125,5,125,2220,8,125,10,125,12,125,2223,9,125,1,126,1,126,
        1,127,1,127,3,127,2229,8,127,1,127,1,127,3,127,2233,8,127,1,127,
        5,127,2236,8,127,10,127,12,127,2239,9,127,1,128,1,128,3,128,2243,
        8,128,5,128,2245,8,128,10,128,12,128,2248,9,128,1,128,1,128,3,128,
        2252,8,128,1,128,3,128,2255,8,128,1,129,1,129,1,129,4,129,2260,8,
        129,11,129,12,129,2261,1,129,3,129,2265,8,129,1,130,1,130,1,130,
        3,130,2270,8,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,3,130,
        2279,8,130,1,130,1,130,3,130,2283,8,130,1,130,3,130,2286,8,130,1,
        131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        3,131,2299,8,131,1,131,3,131,2302,8,131,1,131,1,131,1,132,3,132,
        2307,8,132,1,132,1,132,1,133,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,3,133,2321,8,133,1,134,1,134,3,134,2325,8,134,
        1,134,5,134,2328,8,134,10,134,12,134,2331,9,134,1,135,1,135,1,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,135,3,135,2343,8,135,1,136,
        1,136,3,136,2347,8,136,1,136,1,136,3,136,2351,8,136,1,136,1,136,
        3,136,2355,8,136,1,136,1,136,1,136,1,136,3,136,2361,8,136,1,136,
        1,136,3,136,2365,8,136,1,136,1,136,3,136,2369,8,136,1,136,1,136,
        1,136,1,136,3,136,2375,8,136,1,136,1,136,3,136,2379,8,136,1,136,
        1,136,3,136,2383,8,136,1,136,1,136,1,136,1,136,3,136,2389,8,136,
        1,136,1,136,3,136,2393,8,136,1,136,1,136,3,136,2397,8,136,1,136,
        1,136,3,136,2401,8,136,1,137,1,137,3,137,2405,8,137,1,137,3,137,
        2408,8,137,1,138,1,138,1,138,1,138,1,138,1,138,1,139,1,139,1,139,
        1,139,1,139,1,139,3,139,2422,8,139,1,140,1,140,1,141,1,141,3,141,
        2428,8,141,1,141,1,141,3,141,2432,8,141,1,141,1,141,3,141,2436,8,
        141,5,141,2438,8,141,10,141,12,141,2441,9,141,3,141,2443,8,141,1,
        141,1,141,1,142,1,142,3,142,2449,8,142,1,142,3,142,2452,8,142,1,
        143,1,143,3,143,2456,8,143,1,143,1,143,3,143,2460,8,143,1,143,1,
        143,3,143,2464,8,143,1,143,1,143,3,143,2468,8,143,5,143,2470,8,143,
        10,143,12,143,2473,9,143,1,143,1,143,1,144,1,144,3,144,2479,8,144,
        1,144,3,144,2482,8,144,1,144,1,144,3,144,2486,8,144,1,144,1,144,
        1,145,1,145,3,145,2492,8,145,1,145,1,145,3,145,2496,8,145,1,145,
        1,145,1,146,1,146,3,146,2502,8,146,1,146,1,146,3,146,2506,8,146,
        1,146,1,146,3,146,2510,8,146,1,146,1,146,1,146,3,146,2515,8,146,
        1,146,1,146,3,146,2519,8,146,1,146,1,146,3,146,2523,8,146,1,146,
        1,146,3,146,2527,8,146,1,146,1,146,1,146,3,146,2532,8,146,1,146,
        3,146,2535,8,146,1,146,3,146,2538,8,146,1,146,1,146,1,146,1,146,
        3,146,2544,8,146,1,146,1,146,3,146,2548,8,146,1,146,1,146,3,146,
        2552,8,146,3,146,2554,8,146,1,146,1,146,3,146,2558,8,146,1,146,1,
        146,3,146,2562,8,146,1,146,1,146,3,146,2566,8,146,5,146,2568,8,146,
        10,146,12,146,2571,9,146,3,146,2573,8,146,1,146,1,146,3,146,2577,
        8,146,1,147,1,147,1,148,1,148,3,148,2583,8,148,1,148,1,148,1,148,
        3,148,2588,8,148,3,148,2590,8,148,1,148,1,148,3,148,2594,8,148,1,
        149,1,149,3,149,2598,8,149,1,149,1,149,1,149,3,149,2603,8,149,1,
        149,1,149,3,149,2607,8,149,1,150,1,150,1,150,3,150,2612,8,150,1,
        150,1,150,3,150,2616,8,150,1,150,1,150,3,150,2620,8,150,1,150,1,
        150,3,150,2624,8,150,5,150,2626,8,150,10,150,12,150,2629,9,150,1,
        150,1,150,3,150,2633,8,150,1,151,1,151,3,151,2637,8,151,1,151,4,
        151,2640,8,151,11,151,12,151,2641,1,152,1,152,3,152,2646,8,152,1,
        152,1,152,3,152,2650,8,152,1,152,1,152,3,152,2654,8,152,1,152,1,
        152,3,152,2658,8,152,1,152,3,152,2661,8,152,1,152,3,152,2664,8,152,
        1,152,1,152,1,153,1,153,3,153,2670,8,153,1,153,1,153,3,153,2674,
        8,153,1,153,1,153,3,153,2678,8,153,1,153,1,153,3,153,2682,8,153,
        1,153,3,153,2685,8,153,1,153,3,153,2688,8,153,1,153,1,153,1,154,
        1,154,3,154,2694,8,154,1,154,1,154,3,154,2698,8,154,1,155,1,155,
        3,155,2702,8,155,1,155,4,155,2705,8,155,11,155,12,155,2706,1,155,
        1,155,3,155,2711,8,155,1,155,1,155,3,155,2715,8,155,1,155,4,155,
        2718,8,155,11,155,12,155,2719,3,155,2722,8,155,1,155,3,155,2725,
        8,155,1,155,1,155,3,155,2729,8,155,1,155,3,155,2732,8,155,1,155,
        3,155,2735,8,155,1,155,1,155,1,156,1,156,3,156,2741,8,156,1,156,
        1,156,3,156,2745,8,156,1,156,1,156,3,156,2749,8,156,1,156,1,156,
        1,157,1,157,1,158,1,158,3,158,2757,8,158,1,159,1,159,1,159,3,159,
        2762,8,159,1,160,1,160,3,160,2766,8,160,1,160,1,160,1,161,1,161,
        1,162,1,162,1,163,1,163,1,164,1,164,1,165,1,165,1,165,1,165,1,165,
        3,165,2783,8,165,1,166,1,166,1,167,1,167,1,168,1,168,1,169,1,169,
        1,169,0,2,96,146,170,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
        32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
        76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,
        114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,
        146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,
        178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,
        210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,
        242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,
        274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,
        306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,
        338,0,12,2,0,130,130,135,135,2,0,53,54,75,76,2,0,6,6,13,17,1,0,19,
        20,2,0,21,21,157,157,2,0,22,23,154,154,2,0,87,87,140,140,1,0,169,
        170,30,0,48,48,50,50,52,52,55,58,61,61,63,64,66,68,70,71,74,74,77,
        77,79,79,84,86,88,88,90,90,94,95,97,97,99,99,101,104,106,109,111,
        112,123,128,130,131,133,133,137,137,139,139,141,141,144,144,148,
        148,152,152,155,155,2,0,14,14,27,30,2,0,16,16,31,34,2,0,35,45,157,
        157,3168,0,340,1,0,0,0,2,360,1,0,0,0,4,392,1,0,0,0,6,394,1,0,0,0,
        8,425,1,0,0,0,10,467,1,0,0,0,12,469,1,0,0,0,14,499,1,0,0,0,16,529,
        1,0,0,0,18,549,1,0,0,0,20,555,1,0,0,0,22,606,1,0,0,0,24,608,1,0,
        0,0,26,622,1,0,0,0,28,626,1,0,0,0,30,645,1,0,0,0,32,647,1,0,0,0,
        34,659,1,0,0,0,36,702,1,0,0,0,38,716,1,0,0,0,40,760,1,0,0,0,42,762,
        1,0,0,0,44,768,1,0,0,0,46,803,1,0,0,0,48,867,1,0,0,0,50,881,1,0,
        0,0,52,889,1,0,0,0,54,906,1,0,0,0,56,923,1,0,0,0,58,925,1,0,0,0,
        60,945,1,0,0,0,62,956,1,0,0,0,64,958,1,0,0,0,66,971,1,0,0,0,68,975,
        1,0,0,0,70,979,1,0,0,0,72,990,1,0,0,0,74,1002,1,0,0,0,76,1004,1,
        0,0,0,78,1018,1,0,0,0,80,1022,1,0,0,0,82,1031,1,0,0,0,84,1037,1,
        0,0,0,86,1045,1,0,0,0,88,1059,1,0,0,0,90,1063,1,0,0,0,92,1077,1,
        0,0,0,94,1088,1,0,0,0,96,1178,1,0,0,0,98,1187,1,0,0,0,100,1194,1,
        0,0,0,102,1202,1,0,0,0,104,1204,1,0,0,0,106,1209,1,0,0,0,108,1224,
        1,0,0,0,110,1228,1,0,0,0,112,1230,1,0,0,0,114,1238,1,0,0,0,116,1242,
        1,0,0,0,118,1265,1,0,0,0,120,1279,1,0,0,0,122,1283,1,0,0,0,124,1320,
        1,0,0,0,126,1326,1,0,0,0,128,1338,1,0,0,0,130,1356,1,0,0,0,132,1362,
        1,0,0,0,134,1364,1,0,0,0,136,1414,1,0,0,0,138,1418,1,0,0,0,140,1432,
        1,0,0,0,142,1451,1,0,0,0,144,1466,1,0,0,0,146,1482,1,0,0,0,148,1503,
        1,0,0,0,150,1513,1,0,0,0,152,1519,1,0,0,0,154,1541,1,0,0,0,156,1543,
        1,0,0,0,158,1561,1,0,0,0,160,1573,1,0,0,0,162,1593,1,0,0,0,164,1601,
        1,0,0,0,166,1608,1,0,0,0,168,1652,1,0,0,0,170,1661,1,0,0,0,172,1663,
        1,0,0,0,174,1678,1,0,0,0,176,1682,1,0,0,0,178,1686,1,0,0,0,180,1693,
        1,0,0,0,182,1697,1,0,0,0,184,1722,1,0,0,0,186,1724,1,0,0,0,188,1740,
        1,0,0,0,190,1742,1,0,0,0,192,1766,1,0,0,0,194,1816,1,0,0,0,196,1818,
        1,0,0,0,198,1848,1,0,0,0,200,1889,1,0,0,0,202,1910,1,0,0,0,204,1920,
        1,0,0,0,206,1926,1,0,0,0,208,1965,1,0,0,0,210,1981,1,0,0,0,212,1983,
        1,0,0,0,214,2032,1,0,0,0,216,2044,1,0,0,0,218,2046,1,0,0,0,220,2048,
        1,0,0,0,222,2050,1,0,0,0,224,2052,1,0,0,0,226,2054,1,0,0,0,228,2064,
        1,0,0,0,230,2074,1,0,0,0,232,2090,1,0,0,0,234,2143,1,0,0,0,236,2145,
        1,0,0,0,238,2147,1,0,0,0,240,2161,1,0,0,0,242,2175,1,0,0,0,244,2190,
        1,0,0,0,246,2192,1,0,0,0,248,2207,1,0,0,0,250,2209,1,0,0,0,252,2224,
        1,0,0,0,254,2226,1,0,0,0,256,2246,1,0,0,0,258,2256,1,0,0,0,260,2285,
        1,0,0,0,262,2298,1,0,0,0,264,2306,1,0,0,0,266,2320,1,0,0,0,268,2322,
        1,0,0,0,270,2342,1,0,0,0,272,2400,1,0,0,0,274,2402,1,0,0,0,276,2409,
        1,0,0,0,278,2421,1,0,0,0,280,2423,1,0,0,0,282,2425,1,0,0,0,284,2446,
        1,0,0,0,286,2453,1,0,0,0,288,2478,1,0,0,0,290,2489,1,0,0,0,292,2576,
        1,0,0,0,294,2578,1,0,0,0,296,2593,1,0,0,0,298,2595,1,0,0,0,300,2632,
        1,0,0,0,302,2634,1,0,0,0,304,2643,1,0,0,0,306,2667,1,0,0,0,308,2691,
        1,0,0,0,310,2721,1,0,0,0,312,2738,1,0,0,0,314,2752,1,0,0,0,316,2756,
        1,0,0,0,318,2758,1,0,0,0,320,2763,1,0,0,0,322,2769,1,0,0,0,324,2771,
        1,0,0,0,326,2773,1,0,0,0,328,2775,1,0,0,0,330,2782,1,0,0,0,332,2784,
        1,0,0,0,334,2786,1,0,0,0,336,2788,1,0,0,0,338,2790,1,0,0,0,340,351,
        3,2,1,0,341,343,5,175,0,0,342,341,1,0,0,0,342,343,1,0,0,0,343,344,
        1,0,0,0,344,346,5,1,0,0,345,347,5,175,0,0,346,345,1,0,0,0,346,347,
        1,0,0,0,347,348,1,0,0,0,348,350,3,2,1,0,349,342,1,0,0,0,350,353,
        1,0,0,0,351,349,1,0,0,0,351,352,1,0,0,0,352,355,1,0,0,0,353,351,
        1,0,0,0,354,356,5,175,0,0,355,354,1,0,0,0,355,356,1,0,0,0,356,357,
        1,0,0,0,357,358,5,0,0,1,358,1,1,0,0,0,359,361,3,102,51,0,360,359,
        1,0,0,0,360,361,1,0,0,0,361,363,1,0,0,0,362,364,5,175,0,0,363,362,
        1,0,0,0,363,364,1,0,0,0,364,365,1,0,0,0,365,370,3,4,2,0,366,368,
        5,175,0,0,367,366,1,0,0,0,367,368,1,0,0,0,368,369,1,0,0,0,369,371,
        5,1,0,0,370,367,1,0,0,0,370,371,1,0,0,0,371,3,1,0,0,0,372,393,3,
        116,58,0,373,393,3,44,22,0,374,393,3,46,23,0,375,393,3,52,26,0,376,
        393,3,54,27,0,377,393,3,70,35,0,378,393,3,72,36,0,379,393,3,6,3,
        0,380,393,3,12,6,0,381,393,3,14,7,0,382,393,3,30,15,0,383,393,3,
        34,17,0,384,393,3,32,16,0,385,393,3,108,54,0,386,393,3,110,55,0,
        387,393,3,16,8,0,388,393,3,18,9,0,389,393,3,20,10,0,390,393,3,26,
        13,0,391,393,3,28,14,0,392,372,1,0,0,0,392,373,1,0,0,0,392,374,1,
        0,0,0,392,375,1,0,0,0,392,376,1,0,0,0,392,377,1,0,0,0,392,378,1,
        0,0,0,392,379,1,0,0,0,392,380,1,0,0,0,392,381,1,0,0,0,392,382,1,
        0,0,0,392,383,1,0,0,0,392,384,1,0,0,0,392,385,1,0,0,0,392,386,1,
        0,0,0,392,387,1,0,0,0,392,388,1,0,0,0,392,389,1,0,0,0,392,390,1,
        0,0,0,392,391,1,0,0,0,393,5,1,0,0,0,394,395,5,67,0,0,395,396,5,175,
        0,0,396,405,3,328,164,0,397,399,5,175,0,0,398,397,1,0,0,0,398,399,
        1,0,0,0,399,400,1,0,0,0,400,402,3,8,4,0,401,403,5,175,0,0,402,401,
        1,0,0,0,402,403,1,0,0,0,403,406,1,0,0,0,404,406,5,175,0,0,405,398,
        1,0,0,0,405,404,1,0,0,0,406,407,1,0,0,0,407,408,5,88,0,0,408,409,
        5,175,0,0,409,423,3,10,5,0,410,412,5,175,0,0,411,410,1,0,0,0,411,
        412,1,0,0,0,412,413,1,0,0,0,413,415,5,2,0,0,414,416,5,175,0,0,415,
        414,1,0,0,0,415,416,1,0,0,0,416,417,1,0,0,0,417,419,3,24,12,0,418,
        420,5,175,0,0,419,418,1,0,0,0,419,420,1,0,0,0,420,421,1,0,0,0,421,
        422,5,3,0,0,422,424,1,0,0,0,423,411,1,0,0,0,423,424,1,0,0,0,424,
        7,1,0,0,0,425,427,5,2,0,0,426,428,5,175,0,0,427,426,1,0,0,0,427,
        428,1,0,0,0,428,429,1,0,0,0,429,440,3,328,164,0,430,432,5,175,0,
        0,431,430,1,0,0,0,431,432,1,0,0,0,432,433,1,0,0,0,433,435,5,4,0,
        0,434,436,5,175,0,0,435,434,1,0,0,0,435,436,1,0,0,0,436,437,1,0,
        0,0,437,439,3,328,164,0,438,431,1,0,0,0,439,442,1,0,0,0,440,438,
        1,0,0,0,440,441,1,0,0,0,441,444,1,0,0,0,442,440,1,0,0,0,443,445,
        5,175,0,0,444,443,1,0,0,0,444,445,1,0,0,0,445,446,1,0,0,0,446,447,
        5,3,0,0,447,9,1,0,0,0,448,468,3,40,20,0,449,451,5,2,0,0,450,452,
        5,175,0,0,451,450,1,0,0,0,451,452,1,0,0,0,452,453,1,0,0,0,453,455,
        3,116,58,0,454,456,5,175,0,0,455,454,1,0,0,0,455,456,1,0,0,0,456,
        457,1,0,0,0,457,458,5,3,0,0,458,468,1,0,0,0,459,468,3,314,157,0,
        460,461,3,314,157,0,461,463,5,5,0,0,462,464,5,175,0,0,463,462,1,
        0,0,0,463,464,1,0,0,0,464,465,1,0,0,0,465,466,3,328,164,0,466,468,
        1,0,0,0,467,448,1,0,0,0,467,449,1,0,0,0,467,459,1,0,0,0,467,460,
        1,0,0,0,468,11,1,0,0,0,469,470,5,67,0,0,470,471,5,175,0,0,471,472,
        3,328,164,0,472,473,5,175,0,0,473,474,5,88,0,0,474,475,5,175,0,0,
        475,477,5,2,0,0,476,478,5,175,0,0,477,476,1,0,0,0,477,478,1,0,0,
        0,478,479,1,0,0,0,479,490,5,160,0,0,480,482,5,175,0,0,481,480,1,
        0,0,0,481,482,1,0,0,0,482,483,1,0,0,0,483,485,5,4,0,0,484,486,5,
        175,0,0,485,484,1,0,0,0,485,486,1,0,0,0,486,487,1,0,0,0,487,489,
        5,160,0,0,488,481,1,0,0,0,489,492,1,0,0,0,490,488,1,0,0,0,490,491,
        1,0,0,0,491,493,1,0,0,0,492,490,1,0,0,0,493,494,5,3,0,0,494,495,
        5,175,0,0,495,496,5,57,0,0,496,497,5,175,0,0,497,498,5,62,0,0,498,
        13,1,0,0,0,499,500,5,67,0,0,500,501,5,175,0,0,501,503,5,2,0,0,502,
        504,5,175,0,0,503,502,1,0,0,0,503,504,1,0,0,0,504,505,1,0,0,0,505,
        507,3,116,58,0,506,508,5,175,0,0,507,506,1,0,0,0,507,508,1,0,0,0,
        508,509,1,0,0,0,509,510,5,3,0,0,510,511,5,175,0,0,511,512,5,137,
        0,0,512,513,5,175,0,0,513,527,5,160,0,0,514,516,5,175,0,0,515,514,
        1,0,0,0,515,516,1,0,0,0,516,517,1,0,0,0,517,519,5,2,0,0,518,520,
        5,175,0,0,519,518,1,0,0,0,519,520,1,0,0,0,520,521,1,0,0,0,521,523,
        3,24,12,0,522,524,5,175,0,0,523,522,1,0,0,0,523,524,1,0,0,0,524,
        525,1,0,0,0,525,526,5,3,0,0,526,528,1,0,0,0,527,515,1,0,0,0,527,
        528,1,0,0,0,528,15,1,0,0,0,529,530,5,85,0,0,530,531,5,175,0,0,531,
        532,5,71,0,0,532,533,5,175,0,0,533,547,5,160,0,0,534,536,5,175,0,
        0,535,534,1,0,0,0,535,536,1,0,0,0,536,537,1,0,0,0,537,539,5,2,0,
        0,538,540,5,175,0,0,539,538,1,0,0,0,539,540,1,0,0,0,540,541,1,0,
        0,0,541,543,3,24,12,0,542,544,5,175,0,0,543,542,1,0,0,0,543,544,
        1,0,0,0,544,545,1,0,0,0,545,546,5,3,0,0,546,548,1,0,0,0,547,535,
        1,0,0,0,547,548,1,0,0,0,548,17,1,0,0,0,549,550,5,94,0,0,550,551,
        5,175,0,0,551,552,5,71,0,0,552,553,5,175,0,0,553,554,5,160,0,0,554,
        19,1,0,0,0,555,556,5,55,0,0,556,557,5,175,0,0,557,562,5,160,0,0,
        558,559,5,175,0,0,559,560,5,52,0,0,560,561,5,175,0,0,561,563,3,328,
        164,0,562,558,1,0,0,0,562,563,1,0,0,0,563,564,1,0,0,0,564,565,5,
        175,0,0,565,567,5,2,0,0,566,568,5,175,0,0,567,566,1,0,0,0,567,568,
        1,0,0,0,568,569,1,0,0,0,569,570,5,72,0,0,570,571,5,175,0,0,571,580,
        3,330,165,0,572,574,5,175,0,0,573,572,1,0,0,0,573,574,1,0,0,0,574,
        575,1,0,0,0,575,577,5,4,0,0,576,578,5,175,0,0,577,576,1,0,0,0,577,
        578,1,0,0,0,578,579,1,0,0,0,579,581,3,24,12,0,580,573,1,0,0,0,580,
        581,1,0,0,0,581,583,1,0,0,0,582,584,5,175,0,0,583,582,1,0,0,0,583,
        584,1,0,0,0,584,585,1,0,0,0,585,586,5,3,0,0,586,21,1,0,0,0,587,601,
        3,330,165,0,588,590,5,175,0,0,589,588,1,0,0,0,589,590,1,0,0,0,590,
        591,1,0,0,0,591,593,5,6,0,0,592,594,5,175,0,0,593,592,1,0,0,0,593,
        594,1,0,0,0,594,602,1,0,0,0,595,597,5,175,0,0,596,595,1,0,0,0,597,
        600,1,0,0,0,598,596,1,0,0,0,598,599,1,0,0,0,599,602,1,0,0,0,600,
        598,1,0,0,0,601,589,1,0,0,0,601,598,1,0,0,0,602,603,1,0,0,0,603,
        604,3,278,139,0,604,607,1,0,0,0,605,607,3,330,165,0,606,587,1,0,
        0,0,606,605,1,0,0,0,607,23,1,0,0,0,608,619,3,22,11,0,609,611,5,175,
        0,0,610,609,1,0,0,0,610,611,1,0,0,0,611,612,1,0,0,0,612,614,5,4,
        0,0,613,615,5,175,0,0,614,613,1,0,0,0,614,615,1,0,0,0,615,616,1,
        0,0,0,616,618,3,22,11,0,617,610,1,0,0,0,618,621,1,0,0,0,619,617,
        1,0,0,0,619,620,1,0,0,0,620,25,1,0,0,0,621,619,1,0,0,0,622,623,5,
        77,0,0,623,624,5,175,0,0,624,625,3,328,164,0,625,27,1,0,0,0,626,
        627,5,144,0,0,627,628,5,175,0,0,628,629,3,328,164,0,629,29,1,0,0,
        0,630,631,5,58,0,0,631,632,5,175,0,0,632,634,3,330,165,0,633,635,
        5,175,0,0,634,633,1,0,0,0,634,635,1,0,0,0,635,636,1,0,0,0,636,638,
        5,6,0,0,637,639,5,175,0,0,638,637,1,0,0,0,638,639,1,0,0,0,639,640,
        1,0,0,0,640,641,3,224,112,0,641,646,1,0,0,0,642,643,5,58,0,0,643,
        644,5,175,0,0,644,646,3,292,146,0,645,630,1,0,0,0,645,642,1,0,0,
        0,646,31,1,0,0,0,647,648,5,63,0,0,648,649,5,175,0,0,649,650,5,116,
        0,0,650,651,5,175,0,0,651,652,5,135,0,0,652,653,5,175,0,0,653,654,
        3,328,164,0,654,655,5,175,0,0,655,656,5,99,0,0,656,657,5,175,0,0,
        657,658,5,160,0,0,658,33,1,0,0,0,659,660,5,69,0,0,660,661,5,175,
        0,0,661,662,5,105,0,0,662,663,5,175,0,0,663,665,3,294,147,0,664,
        666,5,175,0,0,665,664,1,0,0,0,665,666,1,0,0,0,666,667,1,0,0,0,667,
        669,5,2,0,0,668,670,5,175,0,0,669,668,1,0,0,0,669,670,1,0,0,0,670,
        672,1,0,0,0,671,673,3,36,18,0,672,671,1,0,0,0,672,673,1,0,0,0,673,
        675,1,0,0,0,674,676,5,175,0,0,675,674,1,0,0,0,675,676,1,0,0,0,676,
        678,1,0,0,0,677,679,3,38,19,0,678,677,1,0,0,0,678,679,1,0,0,0,679,
        690,1,0,0,0,680,682,5,175,0,0,681,680,1,0,0,0,681,682,1,0,0,0,682,
        683,1,0,0,0,683,685,5,4,0,0,684,686,5,175,0,0,685,684,1,0,0,0,685,
        686,1,0,0,0,686,687,1,0,0,0,687,689,3,38,19,0,688,681,1,0,0,0,689,
        692,1,0,0,0,690,688,1,0,0,0,690,691,1,0,0,0,691,694,1,0,0,0,692,
        690,1,0,0,0,693,695,5,175,0,0,694,693,1,0,0,0,694,695,1,0,0,0,695,
        696,1,0,0,0,696,697,5,3,0,0,697,698,5,175,0,0,698,699,5,52,0,0,699,
        700,5,175,0,0,700,701,3,224,112,0,701,35,1,0,0,0,702,713,3,330,165,
        0,703,705,5,175,0,0,704,703,1,0,0,0,704,705,1,0,0,0,705,706,1,0,
        0,0,706,708,5,4,0,0,707,709,5,175,0,0,708,707,1,0,0,0,708,709,1,
        0,0,0,709,710,1,0,0,0,710,712,3,330,165,0,711,704,1,0,0,0,712,715,
        1,0,0,0,713,711,1,0,0,0,713,714,1,0,0,0,714,37,1,0,0,0,715,713,1,
        0,0,0,716,718,3,330,165,0,717,719,5,175,0,0,718,717,1,0,0,0,718,
        719,1,0,0,0,719,720,1,0,0,0,720,721,5,159,0,0,721,723,5,6,0,0,722,
        724,5,175,0,0,723,722,1,0,0,0,723,724,1,0,0,0,724,725,1,0,0,0,725,
        726,3,278,139,0,726,39,1,0,0,0,727,729,5,7,0,0,728,730,5,175,0,0,
        729,728,1,0,0,0,729,730,1,0,0,0,730,731,1,0,0,0,731,742,5,160,0,
        0,732,734,5,175,0,0,733,732,1,0,0,0,733,734,1,0,0,0,734,735,1,0,
        0,0,735,737,5,4,0,0,736,738,5,175,0,0,737,736,1,0,0,0,737,738,1,
        0,0,0,738,739,1,0,0,0,739,741,5,160,0,0,740,733,1,0,0,0,741,744,
        1,0,0,0,742,740,1,0,0,0,742,743,1,0,0,0,743,745,1,0,0,0,744,742,
        1,0,0,0,745,761,5,8,0,0,746,761,5,160,0,0,747,749,5,89,0,0,748,750,
        5,175,0,0,749,748,1,0,0,0,749,750,1,0,0,0,750,751,1,0,0,0,751,753,
        5,2,0,0,752,754,5,175,0,0,753,752,1,0,0,0,753,754,1,0,0,0,754,755,
        1,0,0,0,755,757,5,160,0,0,756,758,5,175,0,0,757,756,1,0,0,0,757,
        758,1,0,0,0,758,759,1,0,0,0,759,761,5,3,0,0,760,727,1,0,0,0,760,
        746,1,0,0,0,760,747,1,0,0,0,761,41,1,0,0,0,762,763,5,95,0,0,763,
        764,5,175,0,0,764,765,5,113,0,0,765,766,5,175,0,0,766,767,5,83,0,
        0,767,43,1,0,0,0,768,769,5,69,0,0,769,770,5,175,0,0,770,771,5,112,
        0,0,771,772,5,175,0,0,772,773,5,135,0,0,773,777,5,175,0,0,774,775,
        3,42,21,0,775,776,5,175,0,0,776,778,1,0,0,0,777,774,1,0,0,0,777,
        778,1,0,0,0,778,779,1,0,0,0,779,781,3,328,164,0,780,782,5,175,0,
        0,781,780,1,0,0,0,781,782,1,0,0,0,782,783,1,0,0,0,783,785,5,2,0,
        0,784,786,5,175,0,0,785,784,1,0,0,0,785,786,1,0,0,0,786,787,1,0,
        0,0,787,789,3,90,45,0,788,790,5,175,0,0,789,788,1,0,0,0,789,790,
        1,0,0,0,790,796,1,0,0,0,791,793,5,4,0,0,792,794,5,175,0,0,793,792,
        1,0,0,0,793,794,1,0,0,0,794,795,1,0,0,0,795,797,3,94,47,0,796,791,
        1,0,0,0,796,797,1,0,0,0,797,799,1,0,0,0,798,800,5,175,0,0,799,798,
        1,0,0,0,799,800,1,0,0,0,800,801,1,0,0,0,801,802,5,3,0,0,802,45,1,
        0,0,0,803,804,5,69,0,0,804,805,5,175,0,0,805,806,5,125,0,0,806,807,
        5,175,0,0,807,810,5,135,0,0,808,809,5,175,0,0,809,811,5,91,0,0,810,
        808,1,0,0,0,810,811,1,0,0,0,811,814,1,0,0,0,812,813,5,175,0,0,813,
        815,3,42,21,0,814,812,1,0,0,0,814,815,1,0,0,0,815,816,1,0,0,0,816,
        817,5,175,0,0,817,819,3,328,164,0,818,820,5,175,0,0,819,818,1,0,
        0,0,819,820,1,0,0,0,820,821,1,0,0,0,821,823,5,2,0,0,822,824,5,175,
        0,0,823,822,1,0,0,0,823,824,1,0,0,0,824,825,1,0,0,0,825,827,3,48,
        24,0,826,828,5,175,0,0,827,826,1,0,0,0,827,828,1,0,0,0,828,837,1,
        0,0,0,829,831,5,4,0,0,830,832,5,175,0,0,831,830,1,0,0,0,831,832,
        1,0,0,0,832,833,1,0,0,0,833,835,3,90,45,0,834,836,5,175,0,0,835,
        834,1,0,0,0,835,836,1,0,0,0,836,838,1,0,0,0,837,829,1,0,0,0,837,
        838,1,0,0,0,838,847,1,0,0,0,839,841,5,4,0,0,840,842,5,175,0,0,841,
        840,1,0,0,0,841,842,1,0,0,0,842,843,1,0,0,0,843,845,3,330,165,0,
        844,846,5,175,0,0,845,844,1,0,0,0,845,846,1,0,0,0,846,848,1,0,0,
        0,847,839,1,0,0,0,847,848,1,0,0,0,848,849,1,0,0,0,849,865,5,3,0,
        0,850,851,5,175,0,0,851,853,5,147,0,0,852,854,5,175,0,0,853,852,
        1,0,0,0,853,854,1,0,0,0,854,855,1,0,0,0,855,857,5,2,0,0,856,858,
        5,175,0,0,857,856,1,0,0,0,857,858,1,0,0,0,858,859,1,0,0,0,859,861,
        3,24,12,0,860,862,5,175,0,0,861,860,1,0,0,0,861,862,1,0,0,0,862,
        863,1,0,0,0,863,864,5,3,0,0,864,866,1,0,0,0,865,850,1,0,0,0,865,
        866,1,0,0,0,866,47,1,0,0,0,867,878,3,50,25,0,868,870,5,175,0,0,869,
        868,1,0,0,0,869,870,1,0,0,0,870,871,1,0,0,0,871,873,5,4,0,0,872,
        874,5,175,0,0,873,872,1,0,0,0,873,874,1,0,0,0,874,875,1,0,0,0,875,
        877,3,50,25,0,876,869,1,0,0,0,877,880,1,0,0,0,878,876,1,0,0,0,878,
        879,1,0,0,0,879,49,1,0,0,0,880,878,1,0,0,0,881,882,5,88,0,0,882,
        883,5,175,0,0,883,884,3,328,164,0,884,885,5,175,0,0,885,886,5,137,
        0,0,886,887,5,175,0,0,887,888,3,328,164,0,888,51,1,0,0,0,889,890,
        5,69,0,0,890,891,5,175,0,0,891,892,5,130,0,0,892,896,5,175,0,0,893,
        894,3,42,21,0,894,895,5,175,0,0,895,897,1,0,0,0,896,893,1,0,0,0,
        896,897,1,0,0,0,897,898,1,0,0,0,898,903,3,328,164,0,899,900,5,175,
        0,0,900,902,3,56,28,0,901,899,1,0,0,0,902,905,1,0,0,0,903,901,1,
        0,0,0,903,904,1,0,0,0,904,53,1,0,0,0,905,903,1,0,0,0,906,907,5,69,
        0,0,907,908,5,175,0,0,908,909,5,141,0,0,909,910,5,175,0,0,910,911,
        3,328,164,0,911,912,5,175,0,0,912,913,5,52,0,0,913,914,5,175,0,0,
        914,916,3,96,48,0,915,917,5,175,0,0,916,915,1,0,0,0,916,917,1,0,
        0,0,917,55,1,0,0,0,918,924,3,58,29,0,919,924,3,60,30,0,920,924,3,
        62,31,0,921,924,3,64,32,0,922,924,3,66,33,0,923,918,1,0,0,0,923,
        919,1,0,0,0,923,920,1,0,0,0,923,921,1,0,0,0,923,922,1,0,0,0,924,
        57,1,0,0,0,925,926,5,97,0,0,926,929,5,175,0,0,927,928,5,57,0,0,928,
        930,5,175,0,0,929,927,1,0,0,0,929,930,1,0,0,0,930,932,1,0,0,0,931,
        933,5,157,0,0,932,931,1,0,0,0,932,933,1,0,0,0,933,934,1,0,0,0,934,
        935,3,324,162,0,935,59,1,0,0,0,936,937,5,111,0,0,937,938,5,175,0,
        0,938,946,5,109,0,0,939,940,5,109,0,0,940,942,5,175,0,0,941,943,
        5,157,0,0,942,941,1,0,0,0,942,943,1,0,0,0,943,944,1,0,0,0,944,946,
        3,324,162,0,945,936,1,0,0,0,945,939,1,0,0,0,946,61,1,0,0,0,947,948,
        5,111,0,0,948,949,5,175,0,0,949,957,5,107,0,0,950,951,5,107,0,0,
        951,953,5,175,0,0,952,954,5,157,0,0,953,952,1,0,0,0,953,954,1,0,
        0,0,954,955,1,0,0,0,955,957,3,324,162,0,956,947,1,0,0,0,956,950,
        1,0,0,0,957,63,1,0,0,0,958,959,5,133,0,0,959,962,5,175,0,0,960,961,
        5,147,0,0,961,963,5,175,0,0,962,960,1,0,0,0,962,963,1,0,0,0,963,
        965,1,0,0,0,964,966,5,157,0,0,965,964,1,0,0,0,965,966,1,0,0,0,966,
        967,1,0,0,0,967,968,3,324,162,0,968,65,1,0,0,0,969,970,5,111,0,0,
        970,972,5,175,0,0,971,969,1,0,0,0,971,972,1,0,0,0,972,973,1,0,0,
        0,973,974,5,70,0,0,974,67,1,0,0,0,975,976,5,95,0,0,976,977,5,175,
        0,0,977,978,5,83,0,0,978,69,1,0,0,0,979,980,5,79,0,0,980,981,5,175,
        0,0,981,982,7,0,0,0,982,986,5,175,0,0,983,984,3,68,34,0,984,985,
        5,175,0,0,985,987,1,0,0,0,986,983,1,0,0,0,986,987,1,0,0,0,987,988,
        1,0,0,0,988,989,3,328,164,0,989,71,1,0,0,0,990,991,5,50,0,0,991,
        992,5,175,0,0,992,993,5,135,0,0,993,994,5,175,0,0,994,995,3,328,
        164,0,995,996,5,175,0,0,996,997,3,74,37,0,997,73,1,0,0,0,998,1003,
        3,76,38,0,999,1003,3,80,40,0,1000,1003,3,82,41,0,1001,1003,3,84,
        42,0,1002,998,1,0,0,0,1002,999,1,0,0,0,1002,1000,1,0,0,0,1002,1001,
        1,0,0,0,1003,75,1,0,0,0,1004,1005,5,48,0,0,1005,1009,5,175,0,0,1006,
        1007,3,42,21,0,1007,1008,5,175,0,0,1008,1010,1,0,0,0,1009,1006,1,
        0,0,0,1009,1010,1,0,0,0,1010,1011,1,0,0,0,1011,1012,3,322,161,0,
        1012,1013,5,175,0,0,1013,1016,3,96,48,0,1014,1015,5,175,0,0,1015,
        1017,3,78,39,0,1016,1014,1,0,0,0,1016,1017,1,0,0,0,1017,77,1,0,0,
        0,1018,1019,5,73,0,0,1019,1020,5,175,0,0,1020,1021,3,224,112,0,1021,
        79,1,0,0,0,1022,1023,5,79,0,0,1023,1027,5,175,0,0,1024,1025,3,68,
        34,0,1025,1026,5,175,0,0,1026,1028,1,0,0,0,1027,1024,1,0,0,0,1027,
        1028,1,0,0,0,1028,1029,1,0,0,0,1029,1030,3,322,161,0,1030,81,1,0,
        0,0,1031,1032,5,126,0,0,1032,1033,5,175,0,0,1033,1034,5,137,0,0,
        1034,1035,5,175,0,0,1035,1036,3,328,164,0,1036,83,1,0,0,0,1037,1038,
        5,126,0,0,1038,1039,5,175,0,0,1039,1040,3,322,161,0,1040,1041,5,
        175,0,0,1041,1042,5,137,0,0,1042,1043,5,175,0,0,1043,1044,3,322,
        161,0,1044,85,1,0,0,0,1045,1056,3,88,44,0,1046,1048,5,175,0,0,1047,
        1046,1,0,0,0,1047,1048,1,0,0,0,1048,1049,1,0,0,0,1049,1051,5,4,0,
        0,1050,1052,5,175,0,0,1051,1050,1,0,0,0,1051,1052,1,0,0,0,1052,1053,
        1,0,0,0,1053,1055,3,88,44,0,1054,1047,1,0,0,0,1055,1058,1,0,0,0,
        1056,1054,1,0,0,0,1056,1057,1,0,0,0,1057,87,1,0,0,0,1058,1056,1,
        0,0,0,1059,1060,3,322,161,0,1060,1061,5,175,0,0,1061,1062,3,96,48,
        0,1062,89,1,0,0,0,1063,1074,3,92,46,0,1064,1066,5,175,0,0,1065,1064,
        1,0,0,0,1065,1066,1,0,0,0,1066,1067,1,0,0,0,1067,1069,5,4,0,0,1068,
        1070,5,175,0,0,1069,1068,1,0,0,0,1069,1070,1,0,0,0,1070,1071,1,0,
        0,0,1071,1073,3,92,46,0,1072,1065,1,0,0,0,1073,1076,1,0,0,0,1074,
        1072,1,0,0,0,1074,1075,1,0,0,0,1075,91,1,0,0,0,1076,1074,1,0,0,0,
        1077,1080,3,88,44,0,1078,1079,5,175,0,0,1079,1081,3,78,39,0,1080,
        1078,1,0,0,0,1080,1081,1,0,0,0,1081,1086,1,0,0,0,1082,1083,5,175,
        0,0,1083,1084,5,121,0,0,1084,1085,5,175,0,0,1085,1087,5,101,0,0,
        1086,1082,1,0,0,0,1086,1087,1,0,0,0,1087,93,1,0,0,0,1088,1089,5,
        121,0,0,1089,1090,5,175,0,0,1090,1092,5,101,0,0,1091,1093,5,175,
        0,0,1092,1091,1,0,0,0,1092,1093,1,0,0,0,1093,1094,1,0,0,0,1094,1096,
        5,2,0,0,1095,1097,5,175,0,0,1096,1095,1,0,0,0,1096,1097,1,0,0,0,
        1097,1098,1,0,0,0,1098,1100,3,322,161,0,1099,1101,5,175,0,0,1100,
        1099,1,0,0,0,1100,1101,1,0,0,0,1101,1102,1,0,0,0,1102,1103,5,3,0,
        0,1103,95,1,0,0,0,1104,1105,6,48,-1,0,1105,1179,3,330,165,0,1106,
        1108,5,142,0,0,1107,1109,5,175,0,0,1108,1107,1,0,0,0,1108,1109,1,
        0,0,0,1109,1110,1,0,0,0,1110,1112,5,2,0,0,1111,1113,5,175,0,0,1112,
        1111,1,0,0,0,1112,1113,1,0,0,0,1113,1114,1,0,0,0,1114,1116,3,86,
        43,0,1115,1117,5,175,0,0,1116,1115,1,0,0,0,1116,1117,1,0,0,0,1117,
        1118,1,0,0,0,1118,1119,5,3,0,0,1119,1179,1,0,0,0,1120,1122,3,330,
        165,0,1121,1123,5,175,0,0,1122,1121,1,0,0,0,1122,1123,1,0,0,0,1123,
        1124,1,0,0,0,1124,1126,5,2,0,0,1125,1127,5,175,0,0,1126,1125,1,0,
        0,0,1126,1127,1,0,0,0,1127,1128,1,0,0,0,1128,1130,3,86,43,0,1129,
        1131,5,175,0,0,1130,1129,1,0,0,0,1130,1131,1,0,0,0,1131,1132,1,0,
        0,0,1132,1133,5,3,0,0,1133,1179,1,0,0,0,1134,1136,3,330,165,0,1135,
        1137,5,175,0,0,1136,1135,1,0,0,0,1136,1137,1,0,0,0,1137,1138,1,0,
        0,0,1138,1140,5,2,0,0,1139,1141,5,175,0,0,1140,1139,1,0,0,0,1140,
        1141,1,0,0,0,1141,1142,1,0,0,0,1142,1144,3,96,48,0,1143,1145,5,175,
        0,0,1144,1143,1,0,0,0,1144,1145,1,0,0,0,1145,1146,1,0,0,0,1146,1148,
        5,4,0,0,1147,1149,5,175,0,0,1148,1147,1,0,0,0,1148,1149,1,0,0,0,
        1149,1150,1,0,0,0,1150,1152,3,96,48,0,1151,1153,5,175,0,0,1152,1151,
        1,0,0,0,1152,1153,1,0,0,0,1153,1154,1,0,0,0,1154,1155,5,3,0,0,1155,
        1179,1,0,0,0,1156,1158,5,152,0,0,1157,1159,5,175,0,0,1158,1157,1,
        0,0,0,1158,1159,1,0,0,0,1159,1160,1,0,0,0,1160,1162,5,2,0,0,1161,
        1163,5,175,0,0,1162,1161,1,0,0,0,1162,1163,1,0,0,0,1163,1164,1,0,
        0,0,1164,1166,3,324,162,0,1165,1167,5,175,0,0,1166,1165,1,0,0,0,
        1166,1167,1,0,0,0,1167,1168,1,0,0,0,1168,1170,5,4,0,0,1169,1171,
        5,175,0,0,1170,1169,1,0,0,0,1170,1171,1,0,0,0,1171,1172,1,0,0,0,
        1172,1174,3,324,162,0,1173,1175,5,175,0,0,1174,1173,1,0,0,0,1174,
        1175,1,0,0,0,1175,1176,1,0,0,0,1176,1177,5,3,0,0,1177,1179,1,0,0,
        0,1178,1104,1,0,0,0,1178,1106,1,0,0,0,1178,1120,1,0,0,0,1178,1134,
        1,0,0,0,1178,1156,1,0,0,0,1179,1184,1,0,0,0,1180,1181,10,5,0,0,1181,
        1183,3,98,49,0,1182,1180,1,0,0,0,1183,1186,1,0,0,0,1184,1182,1,0,
        0,0,1184,1185,1,0,0,0,1185,97,1,0,0,0,1186,1184,1,0,0,0,1187,1191,
        3,100,50,0,1188,1190,3,100,50,0,1189,1188,1,0,0,0,1190,1193,1,0,
        0,0,1191,1189,1,0,0,0,1191,1192,1,0,0,0,1192,99,1,0,0,0,1193,1191,
        1,0,0,0,1194,1196,5,7,0,0,1195,1197,3,324,162,0,1196,1195,1,0,0,
        0,1196,1197,1,0,0,0,1197,1198,1,0,0,0,1198,1199,5,8,0,0,1199,101,
        1,0,0,0,1200,1203,3,104,52,0,1201,1203,3,106,53,0,1202,1200,1,0,
        0,0,1202,1201,1,0,0,0,1203,103,1,0,0,0,1204,1207,5,84,0,0,1205,1206,
        5,175,0,0,1206,1208,5,104,0,0,1207,1205,1,0,0,0,1207,1208,1,0,0,
        0,1208,105,1,0,0,0,1209,1210,5,122,0,0,1210,107,1,0,0,0,1211,1212,
        5,56,0,0,1212,1213,5,175,0,0,1213,1225,5,139,0,0,1214,1215,5,56,
        0,0,1215,1216,5,175,0,0,1216,1217,5,139,0,0,1217,1218,5,175,0,0,
        1218,1219,5,124,0,0,1219,1220,5,175,0,0,1220,1225,5,117,0,0,1221,
        1225,5,64,0,0,1222,1225,5,128,0,0,1223,1225,5,61,0,0,1224,1211,1,
        0,0,0,1224,1214,1,0,0,0,1224,1221,1,0,0,0,1224,1222,1,0,0,0,1224,
        1223,1,0,0,0,1225,109,1,0,0,0,1226,1229,3,112,56,0,1227,1229,3,114,
        57,0,1228,1226,1,0,0,0,1228,1227,1,0,0,0,1229,111,1,0,0,0,1230,1231,
        5,103,0,0,1231,1232,5,175,0,0,1232,1233,5,86,0,0,1233,1236,5,175,
        0,0,1234,1237,5,160,0,0,1235,1237,3,314,157,0,1236,1234,1,0,0,0,
        1236,1235,1,0,0,0,1237,113,1,0,0,0,1238,1239,5,98,0,0,1239,1240,
        5,175,0,0,1240,1241,3,314,157,0,1241,115,1,0,0,0,1242,1243,3,118,
        59,0,1243,117,1,0,0,0,1244,1251,3,122,61,0,1245,1247,5,175,0,0,1246,
        1245,1,0,0,0,1246,1247,1,0,0,0,1247,1248,1,0,0,0,1248,1250,3,120,
        60,0,1249,1246,1,0,0,0,1250,1253,1,0,0,0,1251,1249,1,0,0,0,1251,
        1252,1,0,0,0,1252,1266,1,0,0,0,1253,1251,1,0,0,0,1254,1256,3,164,
        82,0,1255,1257,5,175,0,0,1256,1255,1,0,0,0,1256,1257,1,0,0,0,1257,
        1259,1,0,0,0,1258,1254,1,0,0,0,1259,1260,1,0,0,0,1260,1258,1,0,0,
        0,1260,1261,1,0,0,0,1261,1262,1,0,0,0,1262,1263,3,122,61,0,1263,
        1264,6,59,-1,0,1264,1266,1,0,0,0,1265,1244,1,0,0,0,1265,1258,1,0,
        0,0,1266,119,1,0,0,0,1267,1268,5,142,0,0,1268,1269,5,175,0,0,1269,
        1271,5,49,0,0,1270,1272,5,175,0,0,1271,1270,1,0,0,0,1271,1272,1,
        0,0,0,1272,1273,1,0,0,0,1273,1280,3,122,61,0,1274,1276,5,142,0,0,
        1275,1277,5,175,0,0,1276,1275,1,0,0,0,1276,1277,1,0,0,0,1277,1278,
        1,0,0,0,1278,1280,3,122,61,0,1279,1267,1,0,0,0,1279,1274,1,0,0,0,
        1280,121,1,0,0,0,1281,1284,3,124,62,0,1282,1284,3,126,63,0,1283,
        1281,1,0,0,0,1283,1282,1,0,0,0,1284,123,1,0,0,0,1285,1287,3,132,
        66,0,1286,1288,5,175,0,0,1287,1286,1,0,0,0,1287,1288,1,0,0,0,1288,
        1290,1,0,0,0,1289,1285,1,0,0,0,1290,1293,1,0,0,0,1291,1289,1,0,0,
        0,1291,1292,1,0,0,0,1292,1294,1,0,0,0,1293,1291,1,0,0,0,1294,1321,
        3,164,82,0,1295,1297,3,132,66,0,1296,1298,5,175,0,0,1297,1296,1,
        0,0,0,1297,1298,1,0,0,0,1298,1300,1,0,0,0,1299,1295,1,0,0,0,1300,
        1303,1,0,0,0,1301,1299,1,0,0,0,1301,1302,1,0,0,0,1302,1304,1,0,0,
        0,1303,1301,1,0,0,0,1304,1311,3,130,65,0,1305,1307,5,175,0,0,1306,
        1305,1,0,0,0,1306,1307,1,0,0,0,1307,1308,1,0,0,0,1308,1310,3,130,
        65,0,1309,1306,1,0,0,0,1310,1313,1,0,0,0,1311,1309,1,0,0,0,1311,
        1312,1,0,0,0,1312,1318,1,0,0,0,1313,1311,1,0,0,0,1314,1316,5,175,
        0,0,1315,1314,1,0,0,0,1315,1316,1,0,0,0,1316,1317,1,0,0,0,1317,1319,
        3,164,82,0,1318,1315,1,0,0,0,1318,1319,1,0,0,0,1319,1321,1,0,0,0,
        1320,1291,1,0,0,0,1320,1301,1,0,0,0,1321,125,1,0,0,0,1322,1324,3,
        128,64,0,1323,1325,5,175,0,0,1324,1323,1,0,0,0,1324,1325,1,0,0,0,
        1325,1327,1,0,0,0,1326,1322,1,0,0,0,1327,1328,1,0,0,0,1328,1326,
        1,0,0,0,1328,1329,1,0,0,0,1329,1330,1,0,0,0,1330,1331,3,124,62,0,
        1331,127,1,0,0,0,1332,1334,3,132,66,0,1333,1335,5,175,0,0,1334,1333,
        1,0,0,0,1334,1335,1,0,0,0,1335,1337,1,0,0,0,1336,1332,1,0,0,0,1337,
        1340,1,0,0,0,1338,1336,1,0,0,0,1338,1339,1,0,0,0,1339,1347,1,0,0,
        0,1340,1338,1,0,0,0,1341,1343,3,130,65,0,1342,1344,5,175,0,0,1343,
        1342,1,0,0,0,1343,1344,1,0,0,0,1344,1346,1,0,0,0,1345,1341,1,0,0,
        0,1346,1349,1,0,0,0,1347,1345,1,0,0,0,1347,1348,1,0,0,0,1348,1350,
        1,0,0,0,1349,1347,1,0,0,0,1350,1351,3,162,81,0,1351,129,1,0,0,0,
        1352,1357,3,150,75,0,1353,1357,3,152,76,0,1354,1357,3,156,78,0,1355,
        1357,3,160,80,0,1356,1352,1,0,0,0,1356,1353,1,0,0,0,1356,1354,1,
        0,0,0,1356,1355,1,0,0,0,1357,131,1,0,0,0,1358,1363,3,142,71,0,1359,
        1363,3,148,74,0,1360,1363,3,140,70,0,1361,1363,3,134,67,0,1362,1358,
        1,0,0,0,1362,1359,1,0,0,0,1362,1360,1,0,0,0,1362,1361,1,0,0,0,1363,
        133,1,0,0,0,1364,1382,5,103,0,0,1365,1366,5,175,0,0,1366,1367,5,
        147,0,0,1367,1368,5,175,0,0,1368,1370,5,92,0,0,1369,1371,5,175,0,
        0,1370,1369,1,0,0,0,1370,1371,1,0,0,0,1371,1372,1,0,0,0,1372,1374,
        5,2,0,0,1373,1375,5,175,0,0,1374,1373,1,0,0,0,1374,1375,1,0,0,0,
        1375,1376,1,0,0,0,1376,1378,3,86,43,0,1377,1379,5,175,0,0,1378,1377,
        1,0,0,0,1378,1379,1,0,0,0,1379,1380,1,0,0,0,1380,1381,5,3,0,0,1381,
        1383,1,0,0,0,1382,1365,1,0,0,0,1382,1383,1,0,0,0,1383,1384,1,0,0,
        0,1384,1385,5,175,0,0,1385,1386,5,88,0,0,1386,1387,5,175,0,0,1387,
        1401,3,10,5,0,1388,1390,5,175,0,0,1389,1388,1,0,0,0,1389,1390,1,
        0,0,0,1390,1391,1,0,0,0,1391,1393,5,2,0,0,1392,1394,5,175,0,0,1393,
        1392,1,0,0,0,1393,1394,1,0,0,0,1394,1395,1,0,0,0,1395,1397,3,24,
        12,0,1396,1398,5,175,0,0,1397,1396,1,0,0,0,1397,1398,1,0,0,0,1398,
        1399,1,0,0,0,1399,1400,5,3,0,0,1400,1402,1,0,0,0,1401,1389,1,0,0,
        0,1401,1402,1,0,0,0,1402,1407,1,0,0,0,1403,1405,5,175,0,0,1404,1403,
        1,0,0,0,1404,1405,1,0,0,0,1405,1406,1,0,0,0,1406,1408,3,180,90,0,
        1407,1404,1,0,0,0,1407,1408,1,0,0,0,1408,135,1,0,0,0,1409,1410,3,
        314,157,0,1410,1411,5,175,0,0,1411,1412,5,52,0,0,1412,1413,5,175,
        0,0,1413,1415,1,0,0,0,1414,1409,1,0,0,0,1414,1415,1,0,0,0,1415,1416,
        1,0,0,0,1416,1417,3,314,157,0,1417,137,1,0,0,0,1418,1429,3,136,68,
        0,1419,1421,5,175,0,0,1420,1419,1,0,0,0,1420,1421,1,0,0,0,1421,1422,
        1,0,0,0,1422,1424,5,4,0,0,1423,1425,5,175,0,0,1424,1423,1,0,0,0,
        1424,1425,1,0,0,0,1425,1426,1,0,0,0,1426,1428,3,136,68,0,1427,1420,
        1,0,0,0,1428,1431,1,0,0,0,1429,1427,1,0,0,0,1429,1430,1,0,0,0,1430,
        139,1,0,0,0,1431,1429,1,0,0,0,1432,1433,5,58,0,0,1433,1434,5,175,
        0,0,1434,1439,3,292,146,0,1435,1437,5,175,0,0,1436,1435,1,0,0,0,
        1436,1437,1,0,0,0,1437,1438,1,0,0,0,1438,1440,3,180,90,0,1439,1436,
        1,0,0,0,1439,1440,1,0,0,0,1440,1447,1,0,0,0,1441,1443,5,175,0,0,
        1442,1441,1,0,0,0,1442,1443,1,0,0,0,1443,1444,1,0,0,0,1444,1445,
        5,153,0,0,1445,1446,5,175,0,0,1446,1448,3,138,69,0,1447,1442,1,0,
        0,0,1447,1448,1,0,0,0,1448,141,1,0,0,0,1449,1450,5,118,0,0,1450,
        1452,5,175,0,0,1451,1449,1,0,0,0,1451,1452,1,0,0,0,1452,1453,1,0,
        0,0,1453,1455,5,106,0,0,1454,1456,5,175,0,0,1455,1454,1,0,0,0,1455,
        1456,1,0,0,0,1456,1457,1,0,0,0,1457,1460,3,182,91,0,1458,1459,5,
        175,0,0,1459,1461,3,180,90,0,1460,1458,1,0,0,0,1460,1461,1,0,0,0,
        1461,1464,1,0,0,0,1462,1463,5,175,0,0,1463,1465,3,144,72,0,1464,
        1462,1,0,0,0,1464,1465,1,0,0,0,1465,143,1,0,0,0,1466,1467,5,93,0,
        0,1467,1468,5,175,0,0,1468,1469,3,146,73,0,1469,145,1,0,0,0,1470,
        1471,6,73,-1,0,1471,1473,5,2,0,0,1472,1474,5,175,0,0,1473,1472,1,
        0,0,0,1473,1474,1,0,0,0,1474,1475,1,0,0,0,1475,1477,3,146,73,0,1476,
        1478,5,175,0,0,1477,1476,1,0,0,0,1477,1478,1,0,0,0,1478,1479,1,0,
        0,0,1479,1480,5,3,0,0,1480,1483,1,0,0,0,1481,1483,3,328,164,0,1482,
        1470,1,0,0,0,1482,1481,1,0,0,0,1483,1500,1,0,0,0,1484,1485,10,4,
        0,0,1485,1486,5,175,0,0,1486,1487,5,100,0,0,1487,1488,5,175,0,0,
        1488,1499,3,146,73,5,1489,1494,10,3,0,0,1490,1491,5,175,0,0,1491,
        1492,5,110,0,0,1492,1493,5,175,0,0,1493,1495,3,328,164,0,1494,1490,
        1,0,0,0,1495,1496,1,0,0,0,1496,1494,1,0,0,0,1496,1497,1,0,0,0,1497,
        1499,1,0,0,0,1498,1484,1,0,0,0,1498,1489,1,0,0,0,1499,1502,1,0,0,
        0,1500,1498,1,0,0,0,1500,1501,1,0,0,0,1501,147,1,0,0,0,1502,1500,
        1,0,0,0,1503,1505,5,143,0,0,1504,1506,5,175,0,0,1505,1504,1,0,0,
        0,1505,1506,1,0,0,0,1506,1507,1,0,0,0,1507,1508,3,224,112,0,1508,
        1509,5,175,0,0,1509,1510,5,52,0,0,1510,1511,5,175,0,0,1511,1512,
        3,314,157,0,1512,149,1,0,0,0,1513,1515,5,69,0,0,1514,1516,5,175,
        0,0,1515,1514,1,0,0,0,1515,1516,1,0,0,0,1516,1517,1,0,0,0,1517,1518,
        3,182,91,0,1518,151,1,0,0,0,1519,1521,5,108,0,0,1520,1522,5,175,
        0,0,1521,1520,1,0,0,0,1521,1522,1,0,0,0,1522,1523,1,0,0,0,1523,1528,
        3,182,91,0,1524,1525,5,175,0,0,1525,1527,3,154,77,0,1526,1524,1,
        0,0,0,1527,1530,1,0,0,0,1528,1526,1,0,0,0,1528,1529,1,0,0,0,1529,
        153,1,0,0,0,1530,1528,1,0,0,0,1531,1532,5,116,0,0,1532,1533,5,175,
        0,0,1533,1534,5,106,0,0,1534,1535,5,175,0,0,1535,1542,3,156,78,0,
        1536,1537,5,116,0,0,1537,1538,5,175,0,0,1538,1539,5,69,0,0,1539,
        1540,5,175,0,0,1540,1542,3,156,78,0,1541,1531,1,0,0,0,1541,1536,
        1,0,0,0,1542,155,1,0,0,0,1543,1545,5,131,0,0,1544,1546,5,175,0,0,
        1545,1544,1,0,0,0,1545,1546,1,0,0,0,1546,1547,1,0,0,0,1547,1558,
        3,158,79,0,1548,1550,5,175,0,0,1549,1548,1,0,0,0,1549,1550,1,0,0,
        0,1550,1551,1,0,0,0,1551,1553,5,4,0,0,1552,1554,5,175,0,0,1553,1552,
        1,0,0,0,1553,1554,1,0,0,0,1554,1555,1,0,0,0,1555,1557,3,158,79,0,
        1556,1549,1,0,0,0,1557,1560,1,0,0,0,1558,1556,1,0,0,0,1558,1559,
        1,0,0,0,1559,157,1,0,0,0,1560,1558,1,0,0,0,1561,1563,3,320,160,0,
        1562,1564,5,175,0,0,1563,1562,1,0,0,0,1563,1564,1,0,0,0,1564,1565,
        1,0,0,0,1565,1567,5,6,0,0,1566,1568,5,175,0,0,1567,1566,1,0,0,0,
        1567,1568,1,0,0,0,1568,1569,1,0,0,0,1569,1570,3,224,112,0,1570,159,
        1,0,0,0,1571,1572,5,77,0,0,1572,1574,5,175,0,0,1573,1571,1,0,0,0,
        1573,1574,1,0,0,0,1574,1575,1,0,0,0,1575,1577,5,74,0,0,1576,1578,
        5,175,0,0,1577,1576,1,0,0,0,1577,1578,1,0,0,0,1578,1579,1,0,0,0,
        1579,1590,3,224,112,0,1580,1582,5,175,0,0,1581,1580,1,0,0,0,1581,
        1582,1,0,0,0,1582,1583,1,0,0,0,1583,1585,5,4,0,0,1584,1586,5,175,
        0,0,1585,1584,1,0,0,0,1585,1586,1,0,0,0,1586,1587,1,0,0,0,1587,1589,
        3,224,112,0,1588,1581,1,0,0,0,1589,1592,1,0,0,0,1590,1588,1,0,0,
        0,1590,1591,1,0,0,0,1591,161,1,0,0,0,1592,1590,1,0,0,0,1593,1594,
        5,147,0,0,1594,1599,3,166,83,0,1595,1597,5,175,0,0,1596,1595,1,0,
        0,0,1596,1597,1,0,0,0,1597,1598,1,0,0,0,1598,1600,3,180,90,0,1599,
        1596,1,0,0,0,1599,1600,1,0,0,0,1600,163,1,0,0,0,1601,1602,5,127,
        0,0,1602,1603,3,166,83,0,1603,165,1,0,0,0,1604,1606,5,175,0,0,1605,
        1604,1,0,0,0,1605,1606,1,0,0,0,1606,1607,1,0,0,0,1607,1609,5,78,
        0,0,1608,1605,1,0,0,0,1608,1609,1,0,0,0,1609,1610,1,0,0,0,1610,1611,
        5,175,0,0,1611,1614,3,168,84,0,1612,1613,5,175,0,0,1613,1615,3,172,
        86,0,1614,1612,1,0,0,0,1614,1615,1,0,0,0,1615,1618,1,0,0,0,1616,
        1617,5,175,0,0,1617,1619,3,174,87,0,1618,1616,1,0,0,0,1618,1619,
        1,0,0,0,1619,1622,1,0,0,0,1620,1621,5,175,0,0,1621,1623,3,176,88,
        0,1622,1620,1,0,0,0,1622,1623,1,0,0,0,1623,167,1,0,0,0,1624,1635,
        5,154,0,0,1625,1627,5,175,0,0,1626,1625,1,0,0,0,1626,1627,1,0,0,
        0,1627,1628,1,0,0,0,1628,1630,5,4,0,0,1629,1631,5,175,0,0,1630,1629,
        1,0,0,0,1630,1631,1,0,0,0,1631,1632,1,0,0,0,1632,1634,3,170,85,0,
        1633,1626,1,0,0,0,1634,1637,1,0,0,0,1635,1633,1,0,0,0,1635,1636,
        1,0,0,0,1636,1653,1,0,0,0,1637,1635,1,0,0,0,1638,1649,3,170,85,0,
        1639,1641,5,175,0,0,1640,1639,1,0,0,0,1640,1641,1,0,0,0,1641,1642,
        1,0,0,0,1642,1644,5,4,0,0,1643,1645,5,175,0,0,1644,1643,1,0,0,0,
        1644,1645,1,0,0,0,1645,1646,1,0,0,0,1646,1648,3,170,85,0,1647,1640,
        1,0,0,0,1648,1651,1,0,0,0,1649,1647,1,0,0,0,1649,1650,1,0,0,0,1650,
        1653,1,0,0,0,1651,1649,1,0,0,0,1652,1624,1,0,0,0,1652,1638,1,0,0,
        0,1653,169,1,0,0,0,1654,1655,3,224,112,0,1655,1656,5,175,0,0,1656,
        1657,5,52,0,0,1657,1658,5,175,0,0,1658,1659,3,314,157,0,1659,1662,
        1,0,0,0,1660,1662,3,224,112,0,1661,1654,1,0,0,0,1661,1660,1,0,0,
        0,1662,171,1,0,0,0,1663,1664,5,120,0,0,1664,1665,5,175,0,0,1665,
        1666,5,57,0,0,1666,1667,5,175,0,0,1667,1675,3,178,89,0,1668,1670,
        5,4,0,0,1669,1671,5,175,0,0,1670,1669,1,0,0,0,1670,1671,1,0,0,0,
        1671,1672,1,0,0,0,1672,1674,3,178,89,0,1673,1668,1,0,0,0,1674,1677,
        1,0,0,0,1675,1673,1,0,0,0,1675,1676,1,0,0,0,1676,173,1,0,0,0,1677,
        1675,1,0,0,0,1678,1679,5,155,0,0,1679,1680,5,175,0,0,1680,1681,3,
        224,112,0,1681,175,1,0,0,0,1682,1683,5,102,0,0,1683,1684,5,175,0,
        0,1684,1685,3,224,112,0,1685,177,1,0,0,0,1686,1691,3,224,112,0,1687,
        1689,5,175,0,0,1688,1687,1,0,0,0,1688,1689,1,0,0,0,1689,1690,1,0,
        0,0,1690,1692,7,1,0,0,1691,1688,1,0,0,0,1691,1692,1,0,0,0,1692,179,
        1,0,0,0,1693,1694,5,146,0,0,1694,1695,5,175,0,0,1695,1696,3,224,
        112,0,1696,181,1,0,0,0,1697,1708,3,184,92,0,1698,1700,5,175,0,0,
        1699,1698,1,0,0,0,1699,1700,1,0,0,0,1700,1701,1,0,0,0,1701,1703,
        5,4,0,0,1702,1704,5,175,0,0,1703,1702,1,0,0,0,1703,1704,1,0,0,0,
        1704,1705,1,0,0,0,1705,1707,3,184,92,0,1706,1699,1,0,0,0,1707,1710,
        1,0,0,0,1708,1706,1,0,0,0,1708,1709,1,0,0,0,1709,183,1,0,0,0,1710,
        1708,1,0,0,0,1711,1713,3,314,157,0,1712,1714,5,175,0,0,1713,1712,
        1,0,0,0,1713,1714,1,0,0,0,1714,1715,1,0,0,0,1715,1717,5,6,0,0,1716,
        1718,5,175,0,0,1717,1716,1,0,0,0,1717,1718,1,0,0,0,1718,1719,1,0,
        0,0,1719,1720,3,186,93,0,1720,1723,1,0,0,0,1721,1723,3,186,93,0,
        1722,1711,1,0,0,0,1722,1721,1,0,0,0,1723,185,1,0,0,0,1724,1725,3,
        188,94,0,1725,187,1,0,0,0,1726,1733,3,190,95,0,1727,1729,5,175,0,
        0,1728,1727,1,0,0,0,1728,1729,1,0,0,0,1729,1730,1,0,0,0,1730,1732,
        3,192,96,0,1731,1728,1,0,0,0,1732,1735,1,0,0,0,1733,1731,1,0,0,0,
        1733,1734,1,0,0,0,1734,1741,1,0,0,0,1735,1733,1,0,0,0,1736,1737,
        5,2,0,0,1737,1738,3,188,94,0,1738,1739,5,3,0,0,1739,1741,1,0,0,0,
        1740,1726,1,0,0,0,1740,1736,1,0,0,0,1741,189,1,0,0,0,1742,1744,5,
        2,0,0,1743,1745,5,175,0,0,1744,1743,1,0,0,0,1744,1745,1,0,0,0,1745,
        1750,1,0,0,0,1746,1748,3,314,157,0,1747,1749,5,175,0,0,1748,1747,
        1,0,0,0,1748,1749,1,0,0,0,1749,1751,1,0,0,0,1750,1746,1,0,0,0,1750,
        1751,1,0,0,0,1751,1756,1,0,0,0,1752,1754,3,202,101,0,1753,1755,5,
        175,0,0,1754,1753,1,0,0,0,1754,1755,1,0,0,0,1755,1757,1,0,0,0,1756,
        1752,1,0,0,0,1756,1757,1,0,0,0,1757,1762,1,0,0,0,1758,1760,3,198,
        99,0,1759,1761,5,175,0,0,1760,1759,1,0,0,0,1760,1761,1,0,0,0,1761,
        1763,1,0,0,0,1762,1758,1,0,0,0,1762,1763,1,0,0,0,1763,1764,1,0,0,
        0,1764,1765,5,3,0,0,1765,191,1,0,0,0,1766,1768,3,194,97,0,1767,1769,
        5,175,0,0,1768,1767,1,0,0,0,1768,1769,1,0,0,0,1769,1770,1,0,0,0,
        1770,1771,3,190,95,0,1771,193,1,0,0,0,1772,1774,3,334,167,0,1773,
        1775,5,175,0,0,1774,1773,1,0,0,0,1774,1775,1,0,0,0,1775,1776,1,0,
        0,0,1776,1778,3,338,169,0,1777,1779,5,175,0,0,1778,1777,1,0,0,0,
        1778,1779,1,0,0,0,1779,1781,1,0,0,0,1780,1782,3,196,98,0,1781,1780,
        1,0,0,0,1781,1782,1,0,0,0,1782,1784,1,0,0,0,1783,1785,5,175,0,0,
        1784,1783,1,0,0,0,1784,1785,1,0,0,0,1785,1786,1,0,0,0,1786,1787,
        3,338,169,0,1787,1817,1,0,0,0,1788,1790,3,338,169,0,1789,1791,5,
        175,0,0,1790,1789,1,0,0,0,1790,1791,1,0,0,0,1791,1793,1,0,0,0,1792,
        1794,3,196,98,0,1793,1792,1,0,0,0,1793,1794,1,0,0,0,1794,1796,1,
        0,0,0,1795,1797,5,175,0,0,1796,1795,1,0,0,0,1796,1797,1,0,0,0,1797,
        1798,1,0,0,0,1798,1800,3,338,169,0,1799,1801,5,175,0,0,1800,1799,
        1,0,0,0,1800,1801,1,0,0,0,1801,1802,1,0,0,0,1802,1803,3,336,168,
        0,1803,1817,1,0,0,0,1804,1806,3,338,169,0,1805,1807,5,175,0,0,1806,
        1805,1,0,0,0,1806,1807,1,0,0,0,1807,1809,1,0,0,0,1808,1810,3,196,
        98,0,1809,1808,1,0,0,0,1809,1810,1,0,0,0,1810,1812,1,0,0,0,1811,
        1813,5,175,0,0,1812,1811,1,0,0,0,1812,1813,1,0,0,0,1813,1814,1,0,
        0,0,1814,1815,3,338,169,0,1815,1817,1,0,0,0,1816,1772,1,0,0,0,1816,
        1788,1,0,0,0,1816,1804,1,0,0,0,1817,195,1,0,0,0,1818,1820,5,7,0,
        0,1819,1821,5,175,0,0,1820,1819,1,0,0,0,1820,1821,1,0,0,0,1821,1826,
        1,0,0,0,1822,1824,3,314,157,0,1823,1825,5,175,0,0,1824,1823,1,0,
        0,0,1824,1825,1,0,0,0,1825,1827,1,0,0,0,1826,1822,1,0,0,0,1826,1827,
        1,0,0,0,1827,1832,1,0,0,0,1828,1830,3,200,100,0,1829,1831,5,175,
        0,0,1830,1829,1,0,0,0,1830,1831,1,0,0,0,1831,1833,1,0,0,0,1832,1828,
        1,0,0,0,1832,1833,1,0,0,0,1833,1838,1,0,0,0,1834,1836,3,206,103,
        0,1835,1837,5,175,0,0,1836,1835,1,0,0,0,1836,1837,1,0,0,0,1837,1839,
        1,0,0,0,1838,1834,1,0,0,0,1838,1839,1,0,0,0,1839,1844,1,0,0,0,1840,
        1842,3,198,99,0,1841,1843,5,175,0,0,1842,1841,1,0,0,0,1842,1843,
        1,0,0,0,1843,1845,1,0,0,0,1844,1840,1,0,0,0,1844,1845,1,0,0,0,1845,
        1846,1,0,0,0,1846,1847,5,8,0,0,1847,197,1,0,0,0,1848,1850,5,9,0,
        0,1849,1851,5,175,0,0,1850,1849,1,0,0,0,1850,1851,1,0,0,0,1851,1885,
        1,0,0,0,1852,1854,3,322,161,0,1853,1855,5,175,0,0,1854,1853,1,0,
        0,0,1854,1855,1,0,0,0,1855,1856,1,0,0,0,1856,1858,5,159,0,0,1857,
        1859,5,175,0,0,1858,1857,1,0,0,0,1858,1859,1,0,0,0,1859,1860,1,0,
        0,0,1860,1862,3,224,112,0,1861,1863,5,175,0,0,1862,1861,1,0,0,0,
        1862,1863,1,0,0,0,1863,1882,1,0,0,0,1864,1866,5,4,0,0,1865,1867,
        5,175,0,0,1866,1865,1,0,0,0,1866,1867,1,0,0,0,1867,1868,1,0,0,0,
        1868,1870,3,322,161,0,1869,1871,5,175,0,0,1870,1869,1,0,0,0,1870,
        1871,1,0,0,0,1871,1872,1,0,0,0,1872,1874,5,159,0,0,1873,1875,5,175,
        0,0,1874,1873,1,0,0,0,1874,1875,1,0,0,0,1875,1876,1,0,0,0,1876,1878,
        3,224,112,0,1877,1879,5,175,0,0,1878,1877,1,0,0,0,1878,1879,1,0,
        0,0,1879,1881,1,0,0,0,1880,1864,1,0,0,0,1881,1884,1,0,0,0,1882,1880,
        1,0,0,0,1882,1883,1,0,0,0,1883,1886,1,0,0,0,1884,1882,1,0,0,0,1885,
        1852,1,0,0,0,1885,1886,1,0,0,0,1886,1887,1,0,0,0,1887,1888,5,10,
        0,0,1888,199,1,0,0,0,1889,1891,5,159,0,0,1890,1892,5,175,0,0,1891,
        1890,1,0,0,0,1891,1892,1,0,0,0,1892,1893,1,0,0,0,1893,1907,3,222,
        111,0,1894,1896,5,175,0,0,1895,1894,1,0,0,0,1895,1896,1,0,0,0,1896,
        1897,1,0,0,0,1897,1899,5,11,0,0,1898,1900,5,159,0,0,1899,1898,1,
        0,0,0,1899,1900,1,0,0,0,1900,1902,1,0,0,0,1901,1903,5,175,0,0,1902,
        1901,1,0,0,0,1902,1903,1,0,0,0,1903,1904,1,0,0,0,1904,1906,3,222,
        111,0,1905,1895,1,0,0,0,1906,1909,1,0,0,0,1907,1905,1,0,0,0,1907,
        1908,1,0,0,0,1908,201,1,0,0,0,1909,1907,1,0,0,0,1910,1917,3,204,
        102,0,1911,1913,5,175,0,0,1912,1911,1,0,0,0,1912,1913,1,0,0,0,1913,
        1914,1,0,0,0,1914,1916,3,204,102,0,1915,1912,1,0,0,0,1916,1919,1,
        0,0,0,1917,1915,1,0,0,0,1917,1918,1,0,0,0,1918,203,1,0,0,0,1919,
        1917,1,0,0,0,1920,1922,5,159,0,0,1921,1923,5,175,0,0,1922,1921,1,
        0,0,0,1922,1923,1,0,0,0,1923,1924,1,0,0,0,1924,1925,3,220,110,0,
        1925,205,1,0,0,0,1926,1931,5,154,0,0,1927,1929,5,175,0,0,1928,1927,
        1,0,0,0,1928,1929,1,0,0,0,1929,1930,1,0,0,0,1930,1932,3,208,104,
        0,1931,1928,1,0,0,0,1931,1932,1,0,0,0,1932,1937,1,0,0,0,1933,1935,
        5,175,0,0,1934,1933,1,0,0,0,1934,1935,1,0,0,0,1935,1936,1,0,0,0,
        1936,1938,3,210,105,0,1937,1934,1,0,0,0,1937,1938,1,0,0,0,1938,1943,
        1,0,0,0,1939,1941,5,175,0,0,1940,1939,1,0,0,0,1940,1941,1,0,0,0,
        1941,1942,1,0,0,0,1942,1944,3,212,106,0,1943,1940,1,0,0,0,1943,1944,
        1,0,0,0,1944,207,1,0,0,0,1945,1947,5,149,0,0,1946,1948,5,175,0,0,
        1947,1946,1,0,0,0,1947,1948,1,0,0,0,1948,1949,1,0,0,0,1949,1951,
        5,2,0,0,1950,1952,5,175,0,0,1951,1950,1,0,0,0,1951,1952,1,0,0,0,
        1952,1953,1,0,0,0,1953,1955,3,322,161,0,1954,1956,5,175,0,0,1955,
        1954,1,0,0,0,1955,1956,1,0,0,0,1956,1957,1,0,0,0,1957,1958,5,3,0,
        0,1958,1966,1,0,0,0,1959,1966,5,132,0,0,1960,1961,5,49,0,0,1961,
        1962,5,175,0,0,1962,1966,5,132,0,0,1963,1966,5,138,0,0,1964,1966,
        5,46,0,0,1965,1945,1,0,0,0,1965,1959,1,0,0,0,1965,1960,1,0,0,0,1965,
        1963,1,0,0,0,1965,1964,1,0,0,0,1966,209,1,0,0,0,1967,1969,3,216,
        108,0,1968,1967,1,0,0,0,1968,1969,1,0,0,0,1969,1971,1,0,0,0,1970,
        1972,5,175,0,0,1971,1970,1,0,0,0,1971,1972,1,0,0,0,1972,1973,1,0,
        0,0,1973,1975,5,12,0,0,1974,1976,5,175,0,0,1975,1974,1,0,0,0,1975,
        1976,1,0,0,0,1976,1978,1,0,0,0,1977,1979,3,218,109,0,1978,1977,1,
        0,0,0,1978,1979,1,0,0,0,1979,1982,1,0,0,0,1980,1982,3,324,162,0,
        1981,1968,1,0,0,0,1981,1980,1,0,0,0,1982,211,1,0,0,0,1983,1985,5,
        2,0,0,1984,1986,5,175,0,0,1985,1984,1,0,0,0,1985,1986,1,0,0,0,1986,
        1987,1,0,0,0,1987,1989,3,314,157,0,1988,1990,5,175,0,0,1989,1988,
        1,0,0,0,1989,1990,1,0,0,0,1990,1991,1,0,0,0,1991,1993,5,4,0,0,1992,
        1994,5,175,0,0,1993,1992,1,0,0,0,1993,1994,1,0,0,0,1994,1995,1,0,
        0,0,1995,2007,3,314,157,0,1996,1998,5,175,0,0,1997,1996,1,0,0,0,
        1997,1998,1,0,0,0,1998,1999,1,0,0,0,1999,2001,5,11,0,0,2000,2002,
        5,175,0,0,2001,2000,1,0,0,0,2001,2002,1,0,0,0,2002,2003,1,0,0,0,
        2003,2005,3,180,90,0,2004,2006,5,175,0,0,2005,2004,1,0,0,0,2005,
        2006,1,0,0,0,2006,2008,1,0,0,0,2007,1997,1,0,0,0,2007,2008,1,0,0,
        0,2008,2028,1,0,0,0,2009,2011,5,175,0,0,2010,2009,1,0,0,0,2010,2011,
        1,0,0,0,2011,2012,1,0,0,0,2012,2014,5,11,0,0,2013,2015,5,175,0,0,
        2014,2013,1,0,0,0,2014,2015,1,0,0,0,2015,2016,1,0,0,0,2016,2018,
        3,214,107,0,2017,2019,5,175,0,0,2018,2017,1,0,0,0,2018,2019,1,0,
        0,0,2019,2020,1,0,0,0,2020,2022,5,4,0,0,2021,2023,5,175,0,0,2022,
        2021,1,0,0,0,2022,2023,1,0,0,0,2023,2024,1,0,0,0,2024,2026,3,214,
        107,0,2025,2027,5,175,0,0,2026,2025,1,0,0,0,2026,2027,1,0,0,0,2027,
        2029,1,0,0,0,2028,2010,1,0,0,0,2028,2029,1,0,0,0,2029,2030,1,0,0,
        0,2030,2031,5,3,0,0,2031,213,1,0,0,0,2032,2034,5,9,0,0,2033,2035,
        5,175,0,0,2034,2033,1,0,0,0,2034,2035,1,0,0,0,2035,2037,1,0,0,0,
        2036,2038,3,168,84,0,2037,2036,1,0,0,0,2037,2038,1,0,0,0,2038,2040,
        1,0,0,0,2039,2041,5,175,0,0,2040,2039,1,0,0,0,2040,2041,1,0,0,0,
        2041,2042,1,0,0,0,2042,2043,5,10,0,0,2043,215,1,0,0,0,2044,2045,
        5,162,0,0,2045,217,1,0,0,0,2046,2047,5,162,0,0,2047,219,1,0,0,0,
        2048,2049,3,328,164,0,2049,221,1,0,0,0,2050,2051,3,328,164,0,2051,
        223,1,0,0,0,2052,2053,3,226,113,0,2053,225,1,0,0,0,2054,2061,3,228,
        114,0,2055,2056,5,175,0,0,2056,2057,5,119,0,0,2057,2058,5,175,0,
        0,2058,2060,3,228,114,0,2059,2055,1,0,0,0,2060,2063,1,0,0,0,2061,
        2059,1,0,0,0,2061,2062,1,0,0,0,2062,227,1,0,0,0,2063,2061,1,0,0,
        0,2064,2071,3,230,115,0,2065,2066,5,175,0,0,2066,2067,5,150,0,0,
        2067,2068,5,175,0,0,2068,2070,3,230,115,0,2069,2065,1,0,0,0,2070,
        2073,1,0,0,0,2071,2069,1,0,0,0,2071,2072,1,0,0,0,2072,229,1,0,0,
        0,2073,2071,1,0,0,0,2074,2081,3,232,116,0,2075,2076,5,175,0,0,2076,
        2077,5,51,0,0,2077,2078,5,175,0,0,2078,2080,3,232,116,0,2079,2075,
        1,0,0,0,2080,2083,1,0,0,0,2081,2079,1,0,0,0,2081,2082,1,0,0,0,2082,
        231,1,0,0,0,2083,2081,1,0,0,0,2084,2086,5,113,0,0,2085,2087,5,175,
        0,0,2086,2085,1,0,0,0,2086,2087,1,0,0,0,2087,2089,1,0,0,0,2088,2084,
        1,0,0,0,2089,2092,1,0,0,0,2090,2088,1,0,0,0,2090,2091,1,0,0,0,2091,
        2093,1,0,0,0,2092,2090,1,0,0,0,2093,2094,3,234,117,0,2094,233,1,
        0,0,0,2095,2105,3,238,119,0,2096,2098,5,175,0,0,2097,2096,1,0,0,
        0,2097,2098,1,0,0,0,2098,2099,1,0,0,0,2099,2101,3,236,118,0,2100,
        2102,5,175,0,0,2101,2100,1,0,0,0,2101,2102,1,0,0,0,2102,2103,1,0,
        0,0,2103,2104,3,238,119,0,2104,2106,1,0,0,0,2105,2097,1,0,0,0,2105,
        2106,1,0,0,0,2106,2144,1,0,0,0,2107,2109,3,238,119,0,2108,2110,5,
        175,0,0,2109,2108,1,0,0,0,2109,2110,1,0,0,0,2110,2111,1,0,0,0,2111,
        2113,5,156,0,0,2112,2114,5,175,0,0,2113,2112,1,0,0,0,2113,2114,1,
        0,0,0,2114,2115,1,0,0,0,2115,2116,3,238,119,0,2116,2117,1,0,0,0,
        2117,2118,6,117,-1,0,2118,2144,1,0,0,0,2119,2121,3,238,119,0,2120,
        2122,5,175,0,0,2121,2120,1,0,0,0,2121,2122,1,0,0,0,2122,2123,1,0,
        0,0,2123,2125,3,236,118,0,2124,2126,5,175,0,0,2125,2124,1,0,0,0,
        2125,2126,1,0,0,0,2126,2127,1,0,0,0,2127,2137,3,238,119,0,2128,2130,
        5,175,0,0,2129,2128,1,0,0,0,2129,2130,1,0,0,0,2130,2131,1,0,0,0,
        2131,2133,3,236,118,0,2132,2134,5,175,0,0,2133,2132,1,0,0,0,2133,
        2134,1,0,0,0,2134,2135,1,0,0,0,2135,2136,3,238,119,0,2136,2138,1,
        0,0,0,2137,2129,1,0,0,0,2138,2139,1,0,0,0,2139,2137,1,0,0,0,2139,
        2140,1,0,0,0,2140,2141,1,0,0,0,2141,2142,6,117,-1,0,2142,2144,1,
        0,0,0,2143,2095,1,0,0,0,2143,2107,1,0,0,0,2143,2119,1,0,0,0,2144,
        235,1,0,0,0,2145,2146,7,2,0,0,2146,237,1,0,0,0,2147,2158,3,240,120,
        0,2148,2150,5,175,0,0,2149,2148,1,0,0,0,2149,2150,1,0,0,0,2150,2151,
        1,0,0,0,2151,2153,5,11,0,0,2152,2154,5,175,0,0,2153,2152,1,0,0,0,
        2153,2154,1,0,0,0,2154,2155,1,0,0,0,2155,2157,3,240,120,0,2156,2149,
        1,0,0,0,2157,2160,1,0,0,0,2158,2156,1,0,0,0,2158,2159,1,0,0,0,2159,
        239,1,0,0,0,2160,2158,1,0,0,0,2161,2172,3,242,121,0,2162,2164,5,
        175,0,0,2163,2162,1,0,0,0,2163,2164,1,0,0,0,2164,2165,1,0,0,0,2165,
        2167,5,18,0,0,2166,2168,5,175,0,0,2167,2166,1,0,0,0,2167,2168,1,
        0,0,0,2168,2169,1,0,0,0,2169,2171,3,242,121,0,2170,2163,1,0,0,0,
        2171,2174,1,0,0,0,2172,2170,1,0,0,0,2172,2173,1,0,0,0,2173,241,1,
        0,0,0,2174,2172,1,0,0,0,2175,2187,3,246,123,0,2176,2178,5,175,0,
        0,2177,2176,1,0,0,0,2177,2178,1,0,0,0,2178,2179,1,0,0,0,2179,2181,
        3,244,122,0,2180,2182,5,175,0,0,2181,2180,1,0,0,0,2181,2182,1,0,
        0,0,2182,2183,1,0,0,0,2183,2184,3,246,123,0,2184,2186,1,0,0,0,2185,
        2177,1,0,0,0,2186,2189,1,0,0,0,2187,2185,1,0,0,0,2187,2188,1,0,0,
        0,2188,243,1,0,0,0,2189,2187,1,0,0,0,2190,2191,7,3,0,0,2191,245,
        1,0,0,0,2192,2204,3,250,125,0,2193,2195,5,175,0,0,2194,2193,1,0,
        0,0,2194,2195,1,0,0,0,2195,2196,1,0,0,0,2196,2198,3,248,124,0,2197,
        2199,5,175,0,0,2198,2197,1,0,0,0,2198,2199,1,0,0,0,2199,2200,1,0,
        0,0,2200,2201,3,250,125,0,2201,2203,1,0,0,0,2202,2194,1,0,0,0,2203,
        2206,1,0,0,0,2204,2202,1,0,0,0,2204,2205,1,0,0,0,2205,247,1,0,0,
        0,2206,2204,1,0,0,0,2207,2208,7,4,0,0,2208,249,1,0,0,0,2209,2221,
        3,254,127,0,2210,2212,5,175,0,0,2211,2210,1,0,0,0,2211,2212,1,0,
        0,0,2212,2213,1,0,0,0,2213,2215,3,252,126,0,2214,2216,5,175,0,0,
        2215,2214,1,0,0,0,2215,2216,1,0,0,0,2216,2217,1,0,0,0,2217,2218,
        3,254,127,0,2218,2220,1,0,0,0,2219,2211,1,0,0,0,2220,2223,1,0,0,
        0,2221,2219,1,0,0,0,2221,2222,1,0,0,0,2222,251,1,0,0,0,2223,2221,
        1,0,0,0,2224,2225,7,5,0,0,2225,253,1,0,0,0,2226,2237,3,256,128,0,
        2227,2229,5,175,0,0,2228,2227,1,0,0,0,2228,2229,1,0,0,0,2229,2230,
        1,0,0,0,2230,2232,5,24,0,0,2231,2233,5,175,0,0,2232,2231,1,0,0,0,
        2232,2233,1,0,0,0,2233,2234,1,0,0,0,2234,2236,3,256,128,0,2235,2228,
        1,0,0,0,2236,2239,1,0,0,0,2237,2235,1,0,0,0,2237,2238,1,0,0,0,2238,
        255,1,0,0,0,2239,2237,1,0,0,0,2240,2242,5,157,0,0,2241,2243,5,175,
        0,0,2242,2241,1,0,0,0,2242,2243,1,0,0,0,2243,2245,1,0,0,0,2244,2240,
        1,0,0,0,2245,2248,1,0,0,0,2246,2244,1,0,0,0,2246,2247,1,0,0,0,2247,
        2249,1,0,0,0,2248,2246,1,0,0,0,2249,2254,3,258,129,0,2250,2252,5,
        175,0,0,2251,2250,1,0,0,0,2251,2252,1,0,0,0,2252,2253,1,0,0,0,2253,
        2255,5,158,0,0,2254,2251,1,0,0,0,2254,2255,1,0,0,0,2255,257,1,0,
        0,0,2256,2264,3,268,134,0,2257,2265,3,262,131,0,2258,2260,3,260,
        130,0,2259,2258,1,0,0,0,2260,2261,1,0,0,0,2261,2259,1,0,0,0,2261,
        2262,1,0,0,0,2262,2265,1,0,0,0,2263,2265,3,266,133,0,2264,2257,1,
        0,0,0,2264,2259,1,0,0,0,2264,2263,1,0,0,0,2264,2265,1,0,0,0,2265,
        259,1,0,0,0,2266,2267,5,175,0,0,2267,2269,5,96,0,0,2268,2270,5,175,
        0,0,2269,2268,1,0,0,0,2269,2270,1,0,0,0,2270,2271,1,0,0,0,2271,2286,
        3,268,134,0,2272,2273,5,7,0,0,2273,2274,3,224,112,0,2274,2275,5,
        8,0,0,2275,2286,1,0,0,0,2276,2278,5,7,0,0,2277,2279,3,224,112,0,
        2278,2277,1,0,0,0,2278,2279,1,0,0,0,2279,2280,1,0,0,0,2280,2282,
        5,159,0,0,2281,2283,3,224,112,0,2282,2281,1,0,0,0,2282,2283,1,0,
        0,0,2283,2284,1,0,0,0,2284,2286,5,8,0,0,2285,2266,1,0,0,0,2285,2272,
        1,0,0,0,2285,2276,1,0,0,0,2286,261,1,0,0,0,2287,2299,3,264,132,0,
        2288,2289,5,175,0,0,2289,2290,5,134,0,0,2290,2291,5,175,0,0,2291,
        2299,5,147,0,0,2292,2293,5,175,0,0,2293,2294,5,82,0,0,2294,2295,
        5,175,0,0,2295,2299,5,147,0,0,2296,2297,5,175,0,0,2297,2299,5,66,
        0,0,2298,2287,1,0,0,0,2298,2288,1,0,0,0,2298,2292,1,0,0,0,2298,2296,
        1,0,0,0,2299,2301,1,0,0,0,2300,2302,5,175,0,0,2301,2300,1,0,0,0,
        2301,2302,1,0,0,0,2302,2303,1,0,0,0,2303,2304,3,268,134,0,2304,263,
        1,0,0,0,2305,2307,5,175,0,0,2306,2305,1,0,0,0,2306,2307,1,0,0,0,
        2307,2308,1,0,0,0,2308,2309,5,25,0,0,2309,265,1,0,0,0,2310,2311,
        5,175,0,0,2311,2312,5,99,0,0,2312,2313,5,175,0,0,2313,2321,5,115,
        0,0,2314,2315,5,175,0,0,2315,2316,5,99,0,0,2316,2317,5,175,0,0,2317,
        2318,5,113,0,0,2318,2319,5,175,0,0,2319,2321,5,115,0,0,2320,2310,
        1,0,0,0,2320,2314,1,0,0,0,2321,267,1,0,0,0,2322,2329,3,270,135,0,
        2323,2325,5,175,0,0,2324,2323,1,0,0,0,2324,2325,1,0,0,0,2325,2326,
        1,0,0,0,2326,2328,3,308,154,0,2327,2324,1,0,0,0,2328,2331,1,0,0,
        0,2329,2327,1,0,0,0,2329,2330,1,0,0,0,2330,269,1,0,0,0,2331,2329,
        1,0,0,0,2332,2343,3,278,139,0,2333,2343,3,318,159,0,2334,2343,3,
        310,155,0,2335,2343,3,290,145,0,2336,2343,3,292,146,0,2337,2343,
        3,302,151,0,2338,2343,3,304,152,0,2339,2343,3,306,153,0,2340,2343,
        3,314,157,0,2341,2343,3,272,136,0,2342,2332,1,0,0,0,2342,2333,1,
        0,0,0,2342,2334,1,0,0,0,2342,2335,1,0,0,0,2342,2336,1,0,0,0,2342,
        2337,1,0,0,0,2342,2338,1,0,0,0,2342,2339,1,0,0,0,2342,2340,1,0,0,
        0,2342,2341,1,0,0,0,2343,271,1,0,0,0,2344,2346,5,49,0,0,2345,2347,
        5,175,0,0,2346,2345,1,0,0,0,2346,2347,1,0,0,0,2347,2348,1,0,0,0,
        2348,2350,5,2,0,0,2349,2351,5,175,0,0,2350,2349,1,0,0,0,2350,2351,
        1,0,0,0,2351,2352,1,0,0,0,2352,2354,3,274,137,0,2353,2355,5,175,
        0,0,2354,2353,1,0,0,0,2354,2355,1,0,0,0,2355,2356,1,0,0,0,2356,2357,
        5,3,0,0,2357,2401,1,0,0,0,2358,2360,5,47,0,0,2359,2361,5,175,0,0,
        2360,2359,1,0,0,0,2360,2361,1,0,0,0,2361,2362,1,0,0,0,2362,2364,
        5,2,0,0,2363,2365,5,175,0,0,2364,2363,1,0,0,0,2364,2365,1,0,0,0,
        2365,2366,1,0,0,0,2366,2368,3,274,137,0,2367,2369,5,175,0,0,2368,
        2367,1,0,0,0,2368,2369,1,0,0,0,2369,2370,1,0,0,0,2370,2371,5,3,0,
        0,2371,2401,1,0,0,0,2372,2374,5,114,0,0,2373,2375,5,175,0,0,2374,
        2373,1,0,0,0,2374,2375,1,0,0,0,2375,2376,1,0,0,0,2376,2378,5,2,0,
        0,2377,2379,5,175,0,0,2378,2377,1,0,0,0,2378,2379,1,0,0,0,2379,2380,
        1,0,0,0,2380,2382,3,274,137,0,2381,2383,5,175,0,0,2382,2381,1,0,
        0,0,2382,2383,1,0,0,0,2383,2384,1,0,0,0,2384,2385,5,3,0,0,2385,2401,
        1,0,0,0,2386,2388,5,151,0,0,2387,2389,5,175,0,0,2388,2387,1,0,0,
        0,2388,2389,1,0,0,0,2389,2390,1,0,0,0,2390,2392,5,2,0,0,2391,2393,
        5,175,0,0,2392,2391,1,0,0,0,2392,2393,1,0,0,0,2393,2394,1,0,0,0,
        2394,2396,3,274,137,0,2395,2397,5,175,0,0,2396,2395,1,0,0,0,2396,
        2397,1,0,0,0,2397,2398,1,0,0,0,2398,2399,5,3,0,0,2399,2401,1,0,0,
        0,2400,2344,1,0,0,0,2400,2358,1,0,0,0,2400,2372,1,0,0,0,2400,2386,
        1,0,0,0,2401,273,1,0,0,0,2402,2407,3,276,138,0,2403,2405,5,175,0,
        0,2404,2403,1,0,0,0,2404,2405,1,0,0,0,2405,2406,1,0,0,0,2406,2408,
        3,180,90,0,2407,2404,1,0,0,0,2407,2408,1,0,0,0,2408,275,1,0,0,0,
        2409,2410,3,314,157,0,2410,2411,5,175,0,0,2411,2412,5,96,0,0,2412,
        2413,5,175,0,0,2413,2414,3,224,112,0,2414,277,1,0,0,0,2415,2422,
        3,316,158,0,2416,2422,5,160,0,0,2417,2422,3,280,140,0,2418,2422,
        5,115,0,0,2419,2422,3,282,141,0,2420,2422,3,286,143,0,2421,2415,
        1,0,0,0,2421,2416,1,0,0,0,2421,2417,1,0,0,0,2421,2418,1,0,0,0,2421,
        2419,1,0,0,0,2421,2420,1,0,0,0,2422,279,1,0,0,0,2423,2424,7,6,0,
        0,2424,281,1,0,0,0,2425,2427,5,7,0,0,2426,2428,5,175,0,0,2427,2426,
        1,0,0,0,2427,2428,1,0,0,0,2428,2442,1,0,0,0,2429,2431,3,224,112,
        0,2430,2432,5,175,0,0,2431,2430,1,0,0,0,2431,2432,1,0,0,0,2432,2439,
        1,0,0,0,2433,2435,3,284,142,0,2434,2436,5,175,0,0,2435,2434,1,0,
        0,0,2435,2436,1,0,0,0,2436,2438,1,0,0,0,2437,2433,1,0,0,0,2438,2441,
        1,0,0,0,2439,2437,1,0,0,0,2439,2440,1,0,0,0,2440,2443,1,0,0,0,2441,
        2439,1,0,0,0,2442,2429,1,0,0,0,2442,2443,1,0,0,0,2443,2444,1,0,0,
        0,2444,2445,5,8,0,0,2445,283,1,0,0,0,2446,2448,5,4,0,0,2447,2449,
        5,175,0,0,2448,2447,1,0,0,0,2448,2449,1,0,0,0,2449,2451,1,0,0,0,
        2450,2452,3,224,112,0,2451,2450,1,0,0,0,2451,2452,1,0,0,0,2452,285,
        1,0,0,0,2453,2455,5,9,0,0,2454,2456,5,175,0,0,2455,2454,1,0,0,0,
        2455,2456,1,0,0,0,2456,2457,1,0,0,0,2457,2459,3,288,144,0,2458,2460,
        5,175,0,0,2459,2458,1,0,0,0,2459,2460,1,0,0,0,2460,2471,1,0,0,0,
        2461,2463,5,4,0,0,2462,2464,5,175,0,0,2463,2462,1,0,0,0,2463,2464,
        1,0,0,0,2464,2465,1,0,0,0,2465,2467,3,288,144,0,2466,2468,5,175,
        0,0,2467,2466,1,0,0,0,2467,2468,1,0,0,0,2468,2470,1,0,0,0,2469,2461,
        1,0,0,0,2470,2473,1,0,0,0,2471,2469,1,0,0,0,2471,2472,1,0,0,0,2472,
        2474,1,0,0,0,2473,2471,1,0,0,0,2474,2475,5,10,0,0,2475,287,1,0,0,
        0,2476,2479,3,330,165,0,2477,2479,5,160,0,0,2478,2476,1,0,0,0,2478,
        2477,1,0,0,0,2479,2481,1,0,0,0,2480,2482,5,175,0,0,2481,2480,1,0,
        0,0,2481,2482,1,0,0,0,2482,2483,1,0,0,0,2483,2485,5,159,0,0,2484,
        2486,5,175,0,0,2485,2484,1,0,0,0,2485,2486,1,0,0,0,2486,2487,1,0,
        0,0,2487,2488,3,224,112,0,2488,289,1,0,0,0,2489,2491,5,2,0,0,2490,
        2492,5,175,0,0,2491,2490,1,0,0,0,2491,2492,1,0,0,0,2492,2493,1,0,
        0,0,2493,2495,3,224,112,0,2494,2496,5,175,0,0,2495,2494,1,0,0,0,
        2495,2496,1,0,0,0,2496,2497,1,0,0,0,2497,2498,5,3,0,0,2498,291,1,
        0,0,0,2499,2501,5,68,0,0,2500,2502,5,175,0,0,2501,2500,1,0,0,0,2501,
        2502,1,0,0,0,2502,2503,1,0,0,0,2503,2505,5,2,0,0,2504,2506,5,175,
        0,0,2505,2504,1,0,0,0,2505,2506,1,0,0,0,2506,2507,1,0,0,0,2507,2509,
        5,154,0,0,2508,2510,5,175,0,0,2509,2508,1,0,0,0,2509,2510,1,0,0,
        0,2510,2511,1,0,0,0,2511,2577,5,3,0,0,2512,2514,5,60,0,0,2513,2515,
        5,175,0,0,2514,2513,1,0,0,0,2514,2515,1,0,0,0,2515,2516,1,0,0,0,
        2516,2518,5,2,0,0,2517,2519,5,175,0,0,2518,2517,1,0,0,0,2518,2519,
        1,0,0,0,2519,2520,1,0,0,0,2520,2522,3,296,148,0,2521,2523,5,175,
        0,0,2522,2521,1,0,0,0,2522,2523,1,0,0,0,2523,2534,1,0,0,0,2524,2526,
        5,52,0,0,2525,2527,5,175,0,0,2526,2525,1,0,0,0,2526,2527,1,0,0,0,
        2527,2528,1,0,0,0,2528,2535,3,96,48,0,2529,2531,5,4,0,0,2530,2532,
        5,175,0,0,2531,2530,1,0,0,0,2531,2532,1,0,0,0,2532,2533,1,0,0,0,
        2533,2535,3,296,148,0,2534,2524,1,0,0,0,2534,2529,1,0,0,0,2535,2537,
        1,0,0,0,2536,2538,5,175,0,0,2537,2536,1,0,0,0,2537,2538,1,0,0,0,
        2538,2539,1,0,0,0,2539,2540,5,3,0,0,2540,2577,1,0,0,0,2541,2543,
        3,294,147,0,2542,2544,5,175,0,0,2543,2542,1,0,0,0,2543,2544,1,0,
        0,0,2544,2545,1,0,0,0,2545,2547,5,2,0,0,2546,2548,5,175,0,0,2547,
        2546,1,0,0,0,2547,2548,1,0,0,0,2548,2553,1,0,0,0,2549,2551,5,78,
        0,0,2550,2552,5,175,0,0,2551,2550,1,0,0,0,2551,2552,1,0,0,0,2552,
        2554,1,0,0,0,2553,2549,1,0,0,0,2553,2554,1,0,0,0,2554,2572,1,0,0,
        0,2555,2557,3,296,148,0,2556,2558,5,175,0,0,2557,2556,1,0,0,0,2557,
        2558,1,0,0,0,2558,2569,1,0,0,0,2559,2561,5,4,0,0,2560,2562,5,175,
        0,0,2561,2560,1,0,0,0,2561,2562,1,0,0,0,2562,2563,1,0,0,0,2563,2565,
        3,296,148,0,2564,2566,5,175,0,0,2565,2564,1,0,0,0,2565,2566,1,0,
        0,0,2566,2568,1,0,0,0,2567,2559,1,0,0,0,2568,2571,1,0,0,0,2569,2567,
        1,0,0,0,2569,2570,1,0,0,0,2570,2573,1,0,0,0,2571,2569,1,0,0,0,2572,
        2555,1,0,0,0,2572,2573,1,0,0,0,2573,2574,1,0,0,0,2574,2575,5,3,0,
        0,2575,2577,1,0,0,0,2576,2499,1,0,0,0,2576,2512,1,0,0,0,2576,2541,
        1,0,0,0,2577,293,1,0,0,0,2578,2579,3,330,165,0,2579,295,1,0,0,0,
        2580,2582,3,330,165,0,2581,2583,5,175,0,0,2582,2581,1,0,0,0,2582,
        2583,1,0,0,0,2583,2584,1,0,0,0,2584,2585,5,159,0,0,2585,2587,5,6,
        0,0,2586,2588,5,175,0,0,2587,2586,1,0,0,0,2587,2588,1,0,0,0,2588,
        2590,1,0,0,0,2589,2580,1,0,0,0,2589,2590,1,0,0,0,2590,2591,1,0,0,
        0,2591,2594,3,224,112,0,2592,2594,3,298,149,0,2593,2589,1,0,0,0,
        2593,2592,1,0,0,0,2594,297,1,0,0,0,2595,2597,3,300,150,0,2596,2598,
        5,175,0,0,2597,2596,1,0,0,0,2597,2598,1,0,0,0,2598,2599,1,0,0,0,
        2599,2600,5,157,0,0,2600,2602,5,16,0,0,2601,2603,5,175,0,0,2602,
        2601,1,0,0,0,2602,2603,1,0,0,0,2603,2604,1,0,0,0,2604,2606,3,224,
        112,0,2605,2607,5,175,0,0,2606,2605,1,0,0,0,2606,2607,1,0,0,0,2607,
        299,1,0,0,0,2608,2633,3,330,165,0,2609,2611,5,2,0,0,2610,2612,5,
        175,0,0,2611,2610,1,0,0,0,2611,2612,1,0,0,0,2612,2613,1,0,0,0,2613,
        2615,3,330,165,0,2614,2616,5,175,0,0,2615,2614,1,0,0,0,2615,2616,
        1,0,0,0,2616,2627,1,0,0,0,2617,2619,5,4,0,0,2618,2620,5,175,0,0,
        2619,2618,1,0,0,0,2619,2620,1,0,0,0,2620,2621,1,0,0,0,2621,2623,
        3,330,165,0,2622,2624,5,175,0,0,2623,2622,1,0,0,0,2623,2624,1,0,
        0,0,2624,2626,1,0,0,0,2625,2617,1,0,0,0,2626,2629,1,0,0,0,2627,2625,
        1,0,0,0,2627,2628,1,0,0,0,2628,2630,1,0,0,0,2629,2627,1,0,0,0,2630,
        2631,5,3,0,0,2631,2633,1,0,0,0,2632,2608,1,0,0,0,2632,2609,1,0,0,
        0,2633,301,1,0,0,0,2634,2639,3,190,95,0,2635,2637,5,175,0,0,2636,
        2635,1,0,0,0,2636,2637,1,0,0,0,2637,2638,1,0,0,0,2638,2640,3,192,
        96,0,2639,2636,1,0,0,0,2640,2641,1,0,0,0,2641,2639,1,0,0,0,2641,
        2642,1,0,0,0,2642,303,1,0,0,0,2643,2645,5,83,0,0,2644,2646,5,175,
        0,0,2645,2644,1,0,0,0,2645,2646,1,0,0,0,2646,2647,1,0,0,0,2647,2649,
        5,9,0,0,2648,2650,5,175,0,0,2649,2648,1,0,0,0,2649,2650,1,0,0,0,
        2650,2651,1,0,0,0,2651,2653,5,106,0,0,2652,2654,5,175,0,0,2653,2652,
        1,0,0,0,2653,2654,1,0,0,0,2654,2655,1,0,0,0,2655,2660,3,182,91,0,
        2656,2658,5,175,0,0,2657,2656,1,0,0,0,2657,2658,1,0,0,0,2658,2659,
        1,0,0,0,2659,2661,3,180,90,0,2660,2657,1,0,0,0,2660,2661,1,0,0,0,
        2661,2663,1,0,0,0,2662,2664,5,175,0,0,2663,2662,1,0,0,0,2663,2664,
        1,0,0,0,2664,2665,1,0,0,0,2665,2666,5,10,0,0,2666,305,1,0,0,0,2667,
        2669,5,68,0,0,2668,2670,5,175,0,0,2669,2668,1,0,0,0,2669,2670,1,
        0,0,0,2670,2671,1,0,0,0,2671,2673,5,9,0,0,2672,2674,5,175,0,0,2673,
        2672,1,0,0,0,2673,2674,1,0,0,0,2674,2675,1,0,0,0,2675,2677,5,106,
        0,0,2676,2678,5,175,0,0,2677,2676,1,0,0,0,2677,2678,1,0,0,0,2678,
        2679,1,0,0,0,2679,2684,3,182,91,0,2680,2682,5,175,0,0,2681,2680,
        1,0,0,0,2681,2682,1,0,0,0,2682,2683,1,0,0,0,2683,2685,3,180,90,0,
        2684,2681,1,0,0,0,2684,2685,1,0,0,0,2685,2687,1,0,0,0,2686,2688,
        5,175,0,0,2687,2686,1,0,0,0,2687,2688,1,0,0,0,2688,2689,1,0,0,0,
        2689,2690,5,10,0,0,2690,307,1,0,0,0,2691,2693,5,5,0,0,2692,2694,
        5,175,0,0,2693,2692,1,0,0,0,2693,2694,1,0,0,0,2694,2697,1,0,0,0,
        2695,2698,3,322,161,0,2696,2698,5,154,0,0,2697,2695,1,0,0,0,2697,
        2696,1,0,0,0,2698,309,1,0,0,0,2699,2704,5,59,0,0,2700,2702,5,175,
        0,0,2701,2700,1,0,0,0,2701,2702,1,0,0,0,2702,2703,1,0,0,0,2703,2705,
        3,312,156,0,2704,2701,1,0,0,0,2705,2706,1,0,0,0,2706,2704,1,0,0,
        0,2706,2707,1,0,0,0,2707,2722,1,0,0,0,2708,2710,5,59,0,0,2709,2711,
        5,175,0,0,2710,2709,1,0,0,0,2710,2711,1,0,0,0,2711,2712,1,0,0,0,
        2712,2717,3,224,112,0,2713,2715,5,175,0,0,2714,2713,1,0,0,0,2714,
        2715,1,0,0,0,2715,2716,1,0,0,0,2716,2718,3,312,156,0,2717,2714,1,
        0,0,0,2718,2719,1,0,0,0,2719,2717,1,0,0,0,2719,2720,1,0,0,0,2720,
        2722,1,0,0,0,2721,2699,1,0,0,0,2721,2708,1,0,0,0,2722,2731,1,0,0,
        0,2723,2725,5,175,0,0,2724,2723,1,0,0,0,2724,2725,1,0,0,0,2725,2726,
        1,0,0,0,2726,2728,5,80,0,0,2727,2729,5,175,0,0,2728,2727,1,0,0,0,
        2728,2729,1,0,0,0,2729,2730,1,0,0,0,2730,2732,3,224,112,0,2731,2724,
        1,0,0,0,2731,2732,1,0,0,0,2732,2734,1,0,0,0,2733,2735,5,175,0,0,
        2734,2733,1,0,0,0,2734,2735,1,0,0,0,2735,2736,1,0,0,0,2736,2737,
        5,81,0,0,2737,311,1,0,0,0,2738,2740,5,145,0,0,2739,2741,5,175,0,
        0,2740,2739,1,0,0,0,2740,2741,1,0,0,0,2741,2742,1,0,0,0,2742,2744,
        3,224,112,0,2743,2745,5,175,0,0,2744,2743,1,0,0,0,2744,2745,1,0,
        0,0,2745,2746,1,0,0,0,2746,2748,5,136,0,0,2747,2749,5,175,0,0,2748,
        2747,1,0,0,0,2748,2749,1,0,0,0,2749,2750,1,0,0,0,2750,2751,3,224,
        112,0,2751,313,1,0,0,0,2752,2753,3,330,165,0,2753,315,1,0,0,0,2754,
        2757,3,326,163,0,2755,2757,3,324,162,0,2756,2754,1,0,0,0,2756,2755,
        1,0,0,0,2757,317,1,0,0,0,2758,2761,5,26,0,0,2759,2762,3,330,165,
        0,2760,2762,5,162,0,0,2761,2759,1,0,0,0,2761,2760,1,0,0,0,2762,319,
        1,0,0,0,2763,2765,3,270,135,0,2764,2766,5,175,0,0,2765,2764,1,0,
        0,0,2765,2766,1,0,0,0,2766,2767,1,0,0,0,2767,2768,3,308,154,0,2768,
        321,1,0,0,0,2769,2770,3,328,164,0,2770,323,1,0,0,0,2771,2772,5,162,
        0,0,2772,325,1,0,0,0,2773,2774,7,7,0,0,2774,327,1,0,0,0,2775,2776,
        3,330,165,0,2776,329,1,0,0,0,2777,2783,5,171,0,0,2778,2779,5,174,
        0,0,2779,2783,6,165,-1,0,2780,2783,5,163,0,0,2781,2783,3,332,166,
        0,2782,2777,1,0,0,0,2782,2778,1,0,0,0,2782,2780,1,0,0,0,2782,2781,
        1,0,0,0,2783,331,1,0,0,0,2784,2785,7,8,0,0,2785,333,1,0,0,0,2786,
        2787,7,9,0,0,2787,335,1,0,0,0,2788,2789,7,10,0,0,2789,337,1,0,0,
        0,2790,2791,7,11,0,0,2791,339,1,0,0,0,483,342,346,351,355,360,363,
        367,370,392,398,402,405,411,415,419,423,427,431,435,440,444,451,
        455,463,467,477,481,485,490,503,507,515,519,523,527,535,539,543,
        547,562,567,573,577,580,583,589,593,598,601,606,610,614,619,634,
        638,645,665,669,672,675,678,681,685,690,694,704,708,713,718,723,
        729,733,737,742,749,753,757,760,777,781,785,789,793,796,799,810,
        814,819,823,827,831,835,837,841,845,847,853,857,861,865,869,873,
        878,896,903,916,923,929,932,942,945,953,956,962,965,971,986,1002,
        1009,1016,1027,1047,1051,1056,1065,1069,1074,1080,1086,1092,1096,
        1100,1108,1112,1116,1122,1126,1130,1136,1140,1144,1148,1152,1158,
        1162,1166,1170,1174,1178,1184,1191,1196,1202,1207,1224,1228,1236,
        1246,1251,1256,1260,1265,1271,1276,1279,1283,1287,1291,1297,1301,
        1306,1311,1315,1318,1320,1324,1328,1334,1338,1343,1347,1356,1362,
        1370,1374,1378,1382,1389,1393,1397,1401,1404,1407,1414,1420,1424,
        1429,1436,1439,1442,1447,1451,1455,1460,1464,1473,1477,1482,1496,
        1498,1500,1505,1515,1521,1528,1541,1545,1549,1553,1558,1563,1567,
        1573,1577,1581,1585,1590,1596,1599,1605,1608,1614,1618,1622,1626,
        1630,1635,1640,1644,1649,1652,1661,1670,1675,1688,1691,1699,1703,
        1708,1713,1717,1722,1728,1733,1740,1744,1748,1750,1754,1756,1760,
        1762,1768,1774,1778,1781,1784,1790,1793,1796,1800,1806,1809,1812,
        1816,1820,1824,1826,1830,1832,1836,1838,1842,1844,1850,1854,1858,
        1862,1866,1870,1874,1878,1882,1885,1891,1895,1899,1902,1907,1912,
        1917,1922,1928,1931,1934,1937,1940,1943,1947,1951,1955,1965,1968,
        1971,1975,1978,1981,1985,1989,1993,1997,2001,2005,2007,2010,2014,
        2018,2022,2026,2028,2034,2037,2040,2061,2071,2081,2086,2090,2097,
        2101,2105,2109,2113,2121,2125,2129,2133,2139,2143,2149,2153,2158,
        2163,2167,2172,2177,2181,2187,2194,2198,2204,2211,2215,2221,2228,
        2232,2237,2242,2246,2251,2254,2261,2264,2269,2278,2282,2285,2298,
        2301,2306,2320,2324,2329,2342,2346,2350,2354,2360,2364,2368,2374,
        2378,2382,2388,2392,2396,2400,2404,2407,2421,2427,2431,2435,2439,
        2442,2448,2451,2455,2459,2463,2467,2471,2478,2481,2485,2491,2495,
        2501,2505,2509,2514,2518,2522,2526,2531,2534,2537,2543,2547,2551,
        2553,2557,2561,2565,2569,2572,2576,2582,2587,2589,2593,2597,2602,
        2606,2611,2615,2619,2623,2627,2632,2636,2641,2645,2649,2653,2657,
        2660,2663,2669,2673,2677,2681,2684,2687,2693,2697,2701,2706,2710,
        2714,2719,2721,2724,2728,2731,2734,2740,2744,2748,2756,2761,2765,
        2782
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
    public oC_ExistSubquery(): OC_ExistSubqueryContext {
        return this.getTypedRuleContext(OC_ExistSubqueryContext, 0);
    }
    public kU_CountSubquery(): KU_CountSubqueryContext {
        return this.getTypedRuleContext(KU_CountSubqueryContext, 0);
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
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
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

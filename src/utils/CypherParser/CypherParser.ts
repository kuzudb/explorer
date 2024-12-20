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
    public static readonly XOR = 149;
    public static readonly SINGLE = 150;
    public static readonly DECIMAL = 151;
    public static readonly STAR = 152;
    public static readonly L_SKIP = 153;
    public static readonly INVALID_NOT_EQUAL = 154;
    public static readonly MINUS = 155;
    public static readonly FACTORIAL = 156;
    public static readonly COLON = 157;
    public static readonly StringLiteral = 158;
    public static readonly EscapedChar = 159;
    public static readonly DecimalInteger = 160;
    public static readonly HexLetter = 161;
    public static readonly HexDigit = 162;
    public static readonly Digit = 163;
    public static readonly NonZeroDigit = 164;
    public static readonly NonZeroOctDigit = 165;
    public static readonly ZeroDigit = 166;
    public static readonly ExponentDecimalReal = 167;
    public static readonly RegularDecimalReal = 168;
    public static readonly UnescapedSymbolicName = 169;
    public static readonly IdentifierStart = 170;
    public static readonly IdentifierPart = 171;
    public static readonly EscapedSymbolicName = 172;
    public static readonly SP = 173;
    public static readonly WHITESPACE = 174;
    public static readonly CypherComment = 175;
    public static readonly Unknown = 176;
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
    public static readonly RULE_kU_CreateSequence = 27;
    public static readonly RULE_kU_CreateType = 28;
    public static readonly RULE_kU_SequenceOptions = 29;
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
    public static readonly RULE_kU_ColumnDefinitions = 44;
    public static readonly RULE_kU_ColumnDefinition = 45;
    public static readonly RULE_kU_PropertyDefinitions = 46;
    public static readonly RULE_kU_PropertyDefinition = 47;
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
    public static readonly RULE_oC_RegularQuery = 60;
    public static readonly RULE_oC_Union = 61;
    public static readonly RULE_oC_SingleQuery = 62;
    public static readonly RULE_oC_SinglePartQuery = 63;
    public static readonly RULE_oC_MultiPartQuery = 64;
    public static readonly RULE_kU_QueryPart = 65;
    public static readonly RULE_oC_UpdatingClause = 66;
    public static readonly RULE_oC_ReadingClause = 67;
    public static readonly RULE_kU_LoadFrom = 68;
    public static readonly RULE_kU_InQueryCall = 69;
    public static readonly RULE_oC_Match = 70;
    public static readonly RULE_kU_Hint = 71;
    public static readonly RULE_kU_JoinNode = 72;
    public static readonly RULE_oC_Unwind = 73;
    public static readonly RULE_oC_Create = 74;
    public static readonly RULE_oC_Merge = 75;
    public static readonly RULE_oC_MergeAction = 76;
    public static readonly RULE_oC_Set = 77;
    public static readonly RULE_oC_SetItem = 78;
    public static readonly RULE_oC_Delete = 79;
    public static readonly RULE_oC_With = 80;
    public static readonly RULE_oC_Return = 81;
    public static readonly RULE_oC_ProjectionBody = 82;
    public static readonly RULE_oC_ProjectionItems = 83;
    public static readonly RULE_oC_ProjectionItem = 84;
    public static readonly RULE_oC_Order = 85;
    public static readonly RULE_oC_Skip = 86;
    public static readonly RULE_oC_Limit = 87;
    public static readonly RULE_oC_SortItem = 88;
    public static readonly RULE_oC_Where = 89;
    public static readonly RULE_oC_Pattern = 90;
    public static readonly RULE_oC_PatternPart = 91;
    public static readonly RULE_oC_AnonymousPatternPart = 92;
    public static readonly RULE_oC_PatternElement = 93;
    public static readonly RULE_oC_NodePattern = 94;
    public static readonly RULE_oC_PatternElementChain = 95;
    public static readonly RULE_oC_RelationshipPattern = 96;
    public static readonly RULE_oC_RelationshipDetail = 97;
    public static readonly RULE_kU_Properties = 98;
    public static readonly RULE_oC_RelationshipTypes = 99;
    public static readonly RULE_oC_NodeLabels = 100;
    public static readonly RULE_oC_NodeLabel = 101;
    public static readonly RULE_oC_RangeLiteral = 102;
    public static readonly RULE_kU_RecursiveRelationshipComprehension = 103;
    public static readonly RULE_kU_IntermediateNodeProjectionItems = 104;
    public static readonly RULE_kU_IntermediateRelProjectionItems = 105;
    public static readonly RULE_oC_LowerBound = 106;
    public static readonly RULE_oC_UpperBound = 107;
    public static readonly RULE_oC_LabelName = 108;
    public static readonly RULE_oC_RelTypeName = 109;
    public static readonly RULE_oC_Expression = 110;
    public static readonly RULE_oC_OrExpression = 111;
    public static readonly RULE_oC_XorExpression = 112;
    public static readonly RULE_oC_AndExpression = 113;
    public static readonly RULE_oC_NotExpression = 114;
    public static readonly RULE_oC_ComparisonExpression = 115;
    public static readonly RULE_kU_ComparisonOperator = 116;
    public static readonly RULE_kU_BitwiseOrOperatorExpression = 117;
    public static readonly RULE_kU_BitwiseAndOperatorExpression = 118;
    public static readonly RULE_kU_BitShiftOperatorExpression = 119;
    public static readonly RULE_kU_BitShiftOperator = 120;
    public static readonly RULE_oC_AddOrSubtractExpression = 121;
    public static readonly RULE_kU_AddOrSubtractOperator = 122;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 123;
    public static readonly RULE_kU_MultiplyDivideModuloOperator = 124;
    public static readonly RULE_oC_PowerOfExpression = 125;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 126;
    public static readonly RULE_oC_StringListNullOperatorExpression = 127;
    public static readonly RULE_oC_ListOperatorExpression = 128;
    public static readonly RULE_oC_StringOperatorExpression = 129;
    public static readonly RULE_oC_RegularExpression = 130;
    public static readonly RULE_oC_NullOperatorExpression = 131;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 132;
    public static readonly RULE_oC_Atom = 133;
    public static readonly RULE_oC_Quantifier = 134;
    public static readonly RULE_oC_FilterExpression = 135;
    public static readonly RULE_oC_IdInColl = 136;
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
    public static readonly RULE_kU_LambdaParameter = 147;
    public static readonly RULE_kU_LambdaVars = 148;
    public static readonly RULE_oC_PathPatterns = 149;
    public static readonly RULE_oC_ExistSubquery = 150;
    public static readonly RULE_kU_CountSubquery = 151;
    public static readonly RULE_oC_PropertyLookup = 152;
    public static readonly RULE_oC_CaseExpression = 153;
    public static readonly RULE_oC_CaseAlternative = 154;
    public static readonly RULE_oC_Variable = 155;
    public static readonly RULE_oC_NumberLiteral = 156;
    public static readonly RULE_oC_Parameter = 157;
    public static readonly RULE_oC_PropertyExpression = 158;
    public static readonly RULE_oC_PropertyKeyName = 159;
    public static readonly RULE_oC_IntegerLiteral = 160;
    public static readonly RULE_oC_DoubleLiteral = 161;
    public static readonly RULE_oC_SchemaName = 162;
    public static readonly RULE_oC_SymbolicName = 163;
    public static readonly RULE_kU_NonReservedKeywords = 164;
    public static readonly RULE_oC_LeftArrowHead = 165;
    public static readonly RULE_oC_RightArrowHead = 166;
    public static readonly RULE_oC_Dash = 167;

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
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "'*'", null, "'!='", "'-'", "'!'", "':'", null, null, 
        null, null, null, null, null, null, "'0'"
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
        "USE", "WHEN", "WHERE", "WITH", "WRITE", "XOR", "SINGLE", "DECIMAL", 
        "STAR", "L_SKIP", "INVALID_NOT_EQUAL", "MINUS", "FACTORIAL", "COLON", 
        "StringLiteral", "EscapedChar", "DecimalInteger", "HexLetter", "HexDigit", 
        "Digit", "NonZeroDigit", "NonZeroOctDigit", "ZeroDigit", "ExponentDecimalReal", 
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
        "kU_ParsingOptions", "kU_IfNotExists", "kU_CreateNodeTable", "kU_CreateRelTable", 
        "kU_CreateRelTableGroup", "kU_RelTableConnection", "kU_CreateSequence", 
        "kU_CreateType", "kU_SequenceOptions", "kU_IncrementBy", "kU_MinValue", 
        "kU_MaxValue", "kU_StartWith", "kU_Cycle", "kU_IfExists", "kU_Drop", 
        "kU_AlterTable", "kU_AlterOptions", "kU_AddProperty", "kU_Default", 
        "kU_DropProperty", "kU_RenameTable", "kU_RenameProperty", "kU_ColumnDefinitions", 
        "kU_ColumnDefinition", "kU_PropertyDefinitions", "kU_PropertyDefinition", 
        "kU_CreateNodeConstraint", "kU_DataType", "kU_ListIdentifiers", 
        "kU_ListIdentifier", "oC_AnyCypherOption", "oC_Explain", "oC_Profile", 
        "kU_Transaction", "kU_Extension", "kU_LoadExtension", "kU_InstallExtension", 
        "oC_Query", "oC_RegularQuery", "oC_Union", "oC_SingleQuery", "oC_SinglePartQuery", 
        "oC_MultiPartQuery", "kU_QueryPart", "oC_UpdatingClause", "oC_ReadingClause", 
        "kU_LoadFrom", "kU_InQueryCall", "oC_Match", "kU_Hint", "kU_JoinNode", 
        "oC_Unwind", "oC_Create", "oC_Merge", "oC_MergeAction", "oC_Set", 
        "oC_SetItem", "oC_Delete", "oC_With", "oC_Return", "oC_ProjectionBody", 
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
            this.state = 336;
            this.oC_Cypher();
            this.state = 347;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 338;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 337;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 340;
                    this.match(CypherParser.T__0);
                    this.state = 342;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                    case 1:
                        {
                        this.state = 341;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    this.state = 344;
                    this.oC_Cypher();
                    }
                    }
                }
                this.state = 349;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            }
            this.state = 351;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 350;
                this.match(CypherParser.SP);
                }
            }

            this.state = 353;
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
            this.state = 356;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===84 || _la===122) {
                {
                this.state = 355;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 359;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 358;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 361;
            this.oC_Statement();
            }
            this.state = 366;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
            case 1:
                {
                this.state = 363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 362;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 365;
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
            this.state = 389;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 368;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 369;
                this.kU_CreateNodeTable();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 370;
                this.kU_CreateRelTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 371;
                this.kU_CreateRelTableGroup();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 372;
                this.kU_CreateSequence();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 373;
                this.kU_CreateType();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 374;
                this.kU_Drop();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 375;
                this.kU_AlterTable();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 376;
                this.kU_CopyFrom();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 377;
                this.kU_CopyFromByColumn();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 378;
                this.kU_CopyTO();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 379;
                this.kU_StandaloneCall();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 380;
                this.kU_CreateMacro();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 381;
                this.kU_CommentOn();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 382;
                this.kU_Transaction();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 383;
                this.kU_Extension();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 384;
                this.kU_ExportDatabase();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 385;
                this.kU_ImportDatabase();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 386;
                this.kU_AttachDatabase();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 387;
                this.kU_DetachDatabase();
                }
                break;
            case 21:
                this.enterOuterAlt(localctx, 21);
                {
                this.state = 388;
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
            this.state = 391;
            this.match(CypherParser.COPY);
            this.state = 392;
            this.match(CypherParser.SP);
            this.state = 393;
            this.oC_SchemaName();
            this.state = 402;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                {
                {
                this.state = 395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 394;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 397;
                this.kU_ColumnNames();
                this.state = 399;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 398;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                break;
            case 2:
                {
                this.state = 401;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 404;
            this.match(CypherParser.FROM);
            this.state = 405;
            this.match(CypherParser.SP);
            this.state = 406;
            this.kU_ScanSource();
            this.state = 411;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                {
                this.state = 408;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 407;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 410;
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
            this.state = 413;
            this.match(CypherParser.T__1);
            this.state = 415;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 414;
                this.match(CypherParser.SP);
                }
            }

            this.state = 417;
            this.oC_SchemaName();
            this.state = 428;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 419;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 418;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 421;
                    this.match(CypherParser.T__2);
                    this.state = 423;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 422;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 425;
                    this.oC_SchemaName();
                    }
                    }
                }
                this.state = 430;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            }
            this.state = 432;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 431;
                this.match(CypherParser.SP);
                }
            }

            this.state = 434;
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
            this.state = 455;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 436;
                this.kU_FilePaths();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 437;
                this.match(CypherParser.T__1);
                this.state = 439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 438;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 441;
                this.oC_Query();
                this.state = 443;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 442;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 445;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 447;
                this.oC_Variable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 448;
                this.oC_Variable();
                this.state = 449;
                this.match(CypherParser.T__4);
                this.state = 451;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 450;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 453;
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
            this.state = 457;
            this.match(CypherParser.COPY);
            this.state = 458;
            this.match(CypherParser.SP);
            this.state = 459;
            this.oC_SchemaName();
            this.state = 460;
            this.match(CypherParser.SP);
            this.state = 461;
            this.match(CypherParser.FROM);
            this.state = 462;
            this.match(CypherParser.SP);
            this.state = 463;
            this.match(CypherParser.T__1);
            this.state = 465;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 464;
                this.match(CypherParser.SP);
                }
            }

            this.state = 467;
            this.match(CypherParser.StringLiteral);
            this.state = 478;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3 || _la===173) {
                {
                {
                this.state = 469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 468;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 471;
                this.match(CypherParser.T__2);
                this.state = 473;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 472;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 475;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 480;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 481;
            this.match(CypherParser.T__3);
            this.state = 482;
            this.match(CypherParser.SP);
            this.state = 483;
            this.match(CypherParser.BY);
            this.state = 484;
            this.match(CypherParser.SP);
            this.state = 485;
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
            this.state = 487;
            this.match(CypherParser.COPY);
            this.state = 488;
            this.match(CypherParser.SP);
            this.state = 489;
            this.match(CypherParser.T__1);
            this.state = 491;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 490;
                this.match(CypherParser.SP);
                }
            }

            this.state = 493;
            this.oC_Query();
            this.state = 495;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 494;
                this.match(CypherParser.SP);
                }
            }

            this.state = 497;
            this.match(CypherParser.T__3);
            this.state = 498;
            this.match(CypherParser.SP);
            this.state = 499;
            this.match(CypherParser.TO);
            this.state = 500;
            this.match(CypherParser.SP);
            this.state = 501;
            this.match(CypherParser.StringLiteral);
            this.state = 506;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
            case 1:
                {
                this.state = 503;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 502;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 505;
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
            this.state = 508;
            this.match(CypherParser.EXPORT);
            this.state = 509;
            this.match(CypherParser.SP);
            this.state = 510;
            this.match(CypherParser.DATABASE);
            this.state = 511;
            this.match(CypherParser.SP);
            this.state = 512;
            this.match(CypherParser.StringLiteral);
            this.state = 517;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
            case 1:
                {
                this.state = 514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 513;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 516;
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
            this.state = 519;
            this.match(CypherParser.IMPORT);
            this.state = 520;
            this.match(CypherParser.SP);
            this.state = 521;
            this.match(CypherParser.DATABASE);
            this.state = 522;
            this.match(CypherParser.SP);
            this.state = 523;
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
            this.state = 525;
            this.match(CypherParser.ATTACH);
            this.state = 526;
            this.match(CypherParser.SP);
            this.state = 527;
            this.match(CypherParser.StringLiteral);
            this.state = 532;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
            case 1:
                {
                this.state = 528;
                this.match(CypherParser.SP);
                this.state = 529;
                this.match(CypherParser.AS);
                this.state = 530;
                this.match(CypherParser.SP);
                this.state = 531;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 534;
            this.match(CypherParser.SP);
            this.state = 535;
            this.match(CypherParser.T__1);
            this.state = 537;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 536;
                this.match(CypherParser.SP);
                }
            }

            this.state = 539;
            this.match(CypherParser.DBTYPE);
            this.state = 540;
            this.match(CypherParser.SP);
            this.state = 541;
            this.oC_SymbolicName();
            this.state = 550;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
            case 1:
                {
                this.state = 543;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 542;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 545;
                this.match(CypherParser.T__2);
                this.state = 547;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 546;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 549;
                this.kU_Options();
                }
                break;
            }
            this.state = 553;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 552;
                this.match(CypherParser.SP);
                }
            }

            this.state = 555;
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
            this.state = 576;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 557;
                this.oC_SymbolicName();
                this.state = 571;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
                case 1:
                    {
                    this.state = 559;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 558;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 561;
                    this.match(CypherParser.T__5);
                    this.state = 563;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 562;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                case 2:
                    {
                    this.state = 568;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===173) {
                        {
                        {
                        this.state = 565;
                        this.match(CypherParser.SP);
                        }
                        }
                        this.state = 570;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                    break;
                }
                this.state = 573;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 575;
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
            this.state = 578;
            this.kU_Option();
            this.state = 589;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 580;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 579;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 582;
                    this.match(CypherParser.T__2);
                    this.state = 584;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 583;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 586;
                    this.kU_Option();
                    }
                    }
                }
                this.state = 591;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 592;
            this.match(CypherParser.DETACH);
            this.state = 593;
            this.match(CypherParser.SP);
            this.state = 594;
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
            this.state = 596;
            this.match(CypherParser.USE);
            this.state = 597;
            this.match(CypherParser.SP);
            this.state = 598;
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
            this.state = 615;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 600;
                this.match(CypherParser.CALL);
                this.state = 601;
                this.match(CypherParser.SP);
                this.state = 602;
                this.oC_SymbolicName();
                this.state = 604;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 603;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 606;
                this.match(CypherParser.T__5);
                this.state = 608;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 607;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 610;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 612;
                this.match(CypherParser.CALL);
                this.state = 613;
                this.match(CypherParser.SP);
                this.state = 614;
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
            this.state = 617;
            this.match(CypherParser.COMMENT);
            this.state = 618;
            this.match(CypherParser.SP);
            this.state = 619;
            this.match(CypherParser.ON);
            this.state = 620;
            this.match(CypherParser.SP);
            this.state = 621;
            this.match(CypherParser.TABLE);
            this.state = 622;
            this.match(CypherParser.SP);
            this.state = 623;
            this.oC_SchemaName();
            this.state = 624;
            this.match(CypherParser.SP);
            this.state = 625;
            this.match(CypherParser.IS);
            this.state = 626;
            this.match(CypherParser.SP);
            this.state = 627;
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
            this.state = 629;
            this.match(CypherParser.CREATE);
            this.state = 630;
            this.match(CypherParser.SP);
            this.state = 631;
            this.match(CypherParser.MACRO);
            this.state = 632;
            this.match(CypherParser.SP);
            this.state = 633;
            this.oC_FunctionName();
            this.state = 635;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 634;
                this.match(CypherParser.SP);
                }
            }

            this.state = 637;
            this.match(CypherParser.T__1);
            this.state = 639;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
            case 1:
                {
                this.state = 638;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 642;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
            case 1:
                {
                this.state = 641;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 645;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
            case 1:
                {
                this.state = 644;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 648;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577927) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1378158015) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 2305) !== 0)) {
                {
                this.state = 647;
                this.kU_DefaultArg();
                }
            }

            this.state = 660;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 651;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 650;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 653;
                    this.match(CypherParser.T__2);
                    this.state = 655;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 654;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 657;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 662;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
            }
            this.state = 664;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 663;
                this.match(CypherParser.SP);
                }
            }

            this.state = 666;
            this.match(CypherParser.T__3);
            this.state = 667;
            this.match(CypherParser.SP);
            this.state = 668;
            this.match(CypherParser.AS);
            this.state = 669;
            this.match(CypherParser.SP);
            this.state = 670;
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
            this.state = 672;
            this.oC_SymbolicName();
            this.state = 683;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 674;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 673;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 676;
                    this.match(CypherParser.T__2);
                    this.state = 678;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 677;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 680;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 685;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 686;
            this.oC_SymbolicName();
            this.state = 688;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 687;
                this.match(CypherParser.SP);
                }
            }

            this.state = 690;
            this.match(CypherParser.COLON);
            this.state = 691;
            this.match(CypherParser.T__5);
            this.state = 693;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 692;
                this.match(CypherParser.SP);
                }
            }

            this.state = 695;
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
            this.state = 730;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 697;
                this.match(CypherParser.T__6);
                this.state = 699;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 698;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 701;
                this.match(CypherParser.StringLiteral);
                this.state = 712;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3 || _la===173) {
                    {
                    {
                    this.state = 703;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 702;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 705;
                    this.match(CypherParser.T__2);
                    this.state = 707;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 706;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 709;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 714;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 715;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 716;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 717;
                this.match(CypherParser.GLOB);
                this.state = 719;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 718;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 721;
                this.match(CypherParser.T__1);
                this.state = 723;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 722;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 725;
                this.match(CypherParser.StringLiteral);
                this.state = 727;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 726;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 729;
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
            this.state = 732;
            this.match(CypherParser.T__1);
            this.state = 734;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 733;
                this.match(CypherParser.SP);
                }
            }

            this.state = 736;
            this.kU_Options();
            this.state = 738;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 737;
                this.match(CypherParser.SP);
                }
            }

            this.state = 740;
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
            this.state = 742;
            this.match(CypherParser.IF);
            this.state = 743;
            this.match(CypherParser.SP);
            this.state = 744;
            this.match(CypherParser.NOT);
            this.state = 745;
            this.match(CypherParser.SP);
            this.state = 746;
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
            this.state = 748;
            this.match(CypherParser.CREATE);
            this.state = 749;
            this.match(CypherParser.SP);
            this.state = 750;
            this.match(CypherParser.NODE);
            this.state = 751;
            this.match(CypherParser.SP);
            this.state = 752;
            this.match(CypherParser.TABLE);
            this.state = 753;
            this.match(CypherParser.SP);
            this.state = 757;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
            case 1:
                {
                this.state = 754;
                this.kU_IfNotExists();
                this.state = 755;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 759;
            this.oC_SchemaName();
            this.state = 761;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 760;
                this.match(CypherParser.SP);
                }
            }

            this.state = 763;
            this.match(CypherParser.T__1);
            this.state = 765;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 764;
                this.match(CypherParser.SP);
                }
            }

            this.state = 767;
            this.kU_PropertyDefinitions();
            this.state = 769;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
            case 1:
                {
                this.state = 768;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 776;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 771;
                this.match(CypherParser.T__2);
                this.state = 773;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 772;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 775;
                this.kU_CreateNodeConstraint();
                }
            }

            this.state = 779;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 778;
                this.match(CypherParser.SP);
                }
            }

            this.state = 781;
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
            this.state = 783;
            this.match(CypherParser.CREATE);
            this.state = 784;
            this.match(CypherParser.SP);
            this.state = 785;
            this.match(CypherParser.REL);
            this.state = 786;
            this.match(CypherParser.SP);
            this.state = 787;
            this.match(CypherParser.TABLE);
            this.state = 788;
            this.match(CypherParser.SP);
            this.state = 792;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
            case 1:
                {
                this.state = 789;
                this.kU_IfNotExists();
                this.state = 790;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 794;
            this.oC_SchemaName();
            this.state = 796;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
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
            if (_la===173) {
                {
                this.state = 799;
                this.match(CypherParser.SP);
                }
            }

            this.state = 802;
            this.kU_RelTableConnection();
            this.state = 804;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 803;
                this.match(CypherParser.SP);
                }
            }

            this.state = 814;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
            case 1:
                {
                this.state = 806;
                this.match(CypherParser.T__2);
                this.state = 808;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 807;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 810;
                this.kU_PropertyDefinitions();
                this.state = 812;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 811;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 824;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 816;
                this.match(CypherParser.T__2);
                this.state = 818;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 817;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 820;
                this.oC_SymbolicName();
                this.state = 822;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 821;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 826;
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
            this.state = 828;
            this.match(CypherParser.CREATE);
            this.state = 829;
            this.match(CypherParser.SP);
            this.state = 830;
            this.match(CypherParser.REL);
            this.state = 831;
            this.match(CypherParser.SP);
            this.state = 832;
            this.match(CypherParser.TABLE);
            this.state = 833;
            this.match(CypherParser.SP);
            this.state = 834;
            this.match(CypherParser.GROUP);
            this.state = 835;
            this.match(CypherParser.SP);
            this.state = 839;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
            case 1:
                {
                this.state = 836;
                this.kU_IfNotExists();
                this.state = 837;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 841;
            this.oC_SchemaName();
            this.state = 843;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 842;
                this.match(CypherParser.SP);
                }
            }

            this.state = 845;
            this.match(CypherParser.T__1);
            this.state = 847;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 846;
                this.match(CypherParser.SP);
                }
            }

            this.state = 849;
            this.kU_RelTableConnection();
            this.state = 858;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 851;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 850;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 853;
                    this.match(CypherParser.T__2);
                    this.state = 855;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 854;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 857;
                    this.kU_RelTableConnection();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 860;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 863;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 862;
                this.match(CypherParser.SP);
                }
            }

            this.state = 873;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
            case 1:
                {
                this.state = 865;
                this.match(CypherParser.T__2);
                this.state = 867;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 866;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 869;
                this.kU_PropertyDefinitions();
                this.state = 871;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 870;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 883;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 875;
                this.match(CypherParser.T__2);
                this.state = 877;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 876;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 879;
                this.oC_SymbolicName();
                this.state = 881;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 880;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 885;
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
            this.state = 887;
            this.match(CypherParser.FROM);
            this.state = 888;
            this.match(CypherParser.SP);
            this.state = 889;
            this.oC_SchemaName();
            this.state = 890;
            this.match(CypherParser.SP);
            this.state = 891;
            this.match(CypherParser.TO);
            this.state = 892;
            this.match(CypherParser.SP);
            this.state = 893;
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
        this.enterRule(localctx, 54, CypherParser.RULE_kU_CreateSequence);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 895;
            this.match(CypherParser.CREATE);
            this.state = 896;
            this.match(CypherParser.SP);
            this.state = 897;
            this.match(CypherParser.SEQUENCE);
            this.state = 898;
            this.match(CypherParser.SP);
            this.state = 902;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
            case 1:
                {
                this.state = 899;
                this.kU_IfNotExists();
                this.state = 900;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 904;
            this.oC_SchemaName();
            this.state = 909;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 905;
                    this.match(CypherParser.SP);
                    this.state = 906;
                    this.kU_SequenceOptions();
                    }
                    }
                }
                this.state = 911;
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
            this.exitRule();
        }
        return localctx;
    }
    public kU_CreateType(): KU_CreateTypeContext {
        let localctx: KU_CreateTypeContext = new KU_CreateTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 56, CypherParser.RULE_kU_CreateType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 912;
            this.match(CypherParser.CREATE);
            this.state = 913;
            this.match(CypherParser.SP);
            this.state = 914;
            this.match(CypherParser.TYPE);
            this.state = 915;
            this.match(CypherParser.SP);
            this.state = 916;
            this.oC_SchemaName();
            this.state = 917;
            this.match(CypherParser.SP);
            this.state = 918;
            this.match(CypherParser.AS);
            this.state = 919;
            this.match(CypherParser.SP);
            this.state = 920;
            this.kU_DataType(0);
            this.state = 922;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
            case 1:
                {
                this.state = 921;
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
        this.enterRule(localctx, 58, CypherParser.RULE_kU_SequenceOptions);
        try {
            this.state = 929;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 924;
                this.kU_IncrementBy();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 925;
                this.kU_MinValue();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 926;
                this.kU_MaxValue();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 927;
                this.kU_StartWith();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 928;
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
        this.enterRule(localctx, 60, CypherParser.RULE_kU_IncrementBy);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 931;
            this.match(CypherParser.INCREMENT);
            this.state = 932;
            this.match(CypherParser.SP);
            this.state = 935;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===57) {
                {
                this.state = 933;
                this.match(CypherParser.BY);
                this.state = 934;
                this.match(CypherParser.SP);
                }
            }

            this.state = 938;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===155) {
                {
                this.state = 937;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 940;
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
            this.state = 951;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 942;
                this.match(CypherParser.NO);
                this.state = 943;
                this.match(CypherParser.SP);
                this.state = 944;
                this.match(CypherParser.MINVALUE);
                }
                }
                break;
            case CypherParser.MINVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 945;
                this.match(CypherParser.MINVALUE);
                this.state = 946;
                this.match(CypherParser.SP);
                this.state = 948;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===155) {
                    {
                    this.state = 947;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 950;
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
            this.state = 962;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 953;
                this.match(CypherParser.NO);
                this.state = 954;
                this.match(CypherParser.SP);
                this.state = 955;
                this.match(CypherParser.MAXVALUE);
                }
                }
                break;
            case CypherParser.MAXVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 956;
                this.match(CypherParser.MAXVALUE);
                this.state = 957;
                this.match(CypherParser.SP);
                this.state = 959;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===155) {
                    {
                    this.state = 958;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 961;
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
            this.state = 964;
            this.match(CypherParser.START);
            this.state = 965;
            this.match(CypherParser.SP);
            this.state = 968;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===147) {
                {
                this.state = 966;
                this.match(CypherParser.WITH);
                this.state = 967;
                this.match(CypherParser.SP);
                }
            }

            this.state = 971;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===155) {
                {
                this.state = 970;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 973;
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
            this.state = 977;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===111) {
                {
                this.state = 975;
                this.match(CypherParser.NO);
                this.state = 976;
                this.match(CypherParser.SP);
                }
            }

            this.state = 979;
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
            this.state = 981;
            this.match(CypherParser.IF);
            this.state = 982;
            this.match(CypherParser.SP);
            this.state = 983;
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
            this.state = 985;
            this.match(CypherParser.DROP);
            this.state = 986;
            this.match(CypherParser.SP);
            this.state = 987;
            _la = this._input.LA(1);
            if(!(_la===130 || _la===135)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 988;
            this.match(CypherParser.SP);
            this.state = 992;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
            case 1:
                {
                this.state = 989;
                this.kU_IfExists();
                this.state = 990;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 994;
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
            this.state = 996;
            this.match(CypherParser.ALTER);
            this.state = 997;
            this.match(CypherParser.SP);
            this.state = 998;
            this.match(CypherParser.TABLE);
            this.state = 999;
            this.match(CypherParser.SP);
            this.state = 1000;
            this.oC_SchemaName();
            this.state = 1001;
            this.match(CypherParser.SP);
            this.state = 1002;
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
            this.state = 1008;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1004;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1005;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1006;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1007;
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
            this.state = 1010;
            this.match(CypherParser.ADD);
            this.state = 1011;
            this.match(CypherParser.SP);
            this.state = 1015;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
            case 1:
                {
                this.state = 1012;
                this.kU_IfNotExists();
                this.state = 1013;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1017;
            this.oC_PropertyKeyName();
            this.state = 1018;
            this.match(CypherParser.SP);
            this.state = 1019;
            this.kU_DataType(0);
            this.state = 1022;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
            case 1:
                {
                this.state = 1020;
                this.match(CypherParser.SP);
                this.state = 1021;
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
            this.state = 1024;
            this.match(CypherParser.DEFAULT);
            this.state = 1025;
            this.match(CypherParser.SP);
            this.state = 1026;
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
            this.state = 1028;
            this.match(CypherParser.DROP);
            this.state = 1029;
            this.match(CypherParser.SP);
            this.state = 1033;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
            case 1:
                {
                this.state = 1030;
                this.kU_IfExists();
                this.state = 1031;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1035;
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
            this.state = 1037;
            this.match(CypherParser.RENAME);
            this.state = 1038;
            this.match(CypherParser.SP);
            this.state = 1039;
            this.match(CypherParser.TO);
            this.state = 1040;
            this.match(CypherParser.SP);
            this.state = 1041;
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
            this.state = 1043;
            this.match(CypherParser.RENAME);
            this.state = 1044;
            this.match(CypherParser.SP);
            this.state = 1045;
            this.oC_PropertyKeyName();
            this.state = 1046;
            this.match(CypherParser.SP);
            this.state = 1047;
            this.match(CypherParser.TO);
            this.state = 1048;
            this.match(CypherParser.SP);
            this.state = 1049;
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
        this.enterRule(localctx, 88, CypherParser.RULE_kU_ColumnDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1051;
            this.kU_ColumnDefinition();
            this.state = 1062;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 124, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1053;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1052;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1055;
                    this.match(CypherParser.T__2);
                    this.state = 1057;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1056;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1059;
                    this.kU_ColumnDefinition();
                    }
                    }
                }
                this.state = 1064;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 124, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 90, CypherParser.RULE_kU_ColumnDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1065;
            this.oC_PropertyKeyName();
            this.state = 1066;
            this.match(CypherParser.SP);
            this.state = 1067;
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
        this.enterRule(localctx, 92, CypherParser.RULE_kU_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1069;
            this.kU_PropertyDefinition();
            this.state = 1080;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 127, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1071;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1070;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1073;
                    this.match(CypherParser.T__2);
                    this.state = 1075;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1074;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1077;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 1082;
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
    public kU_PropertyDefinition(): KU_PropertyDefinitionContext {
        let localctx: KU_PropertyDefinitionContext = new KU_PropertyDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 94, CypherParser.RULE_kU_PropertyDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1083;
            this.kU_ColumnDefinition();
            this.state = 1086;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
            case 1:
                {
                this.state = 1084;
                this.match(CypherParser.SP);
                this.state = 1085;
                this.kU_Default();
                }
                break;
            }
            this.state = 1092;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
            case 1:
                {
                this.state = 1088;
                this.match(CypherParser.SP);
                this.state = 1089;
                this.match(CypherParser.PRIMARY);
                this.state = 1090;
                this.match(CypherParser.SP);
                this.state = 1091;
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
        this.enterRule(localctx, 96, CypherParser.RULE_kU_CreateNodeConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1094;
            this.match(CypherParser.PRIMARY);
            this.state = 1095;
            this.match(CypherParser.SP);
            this.state = 1096;
            this.match(CypherParser.KEY);
            this.state = 1098;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1097;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1100;
            this.match(CypherParser.T__1);
            this.state = 1102;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1101;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1104;
            this.oC_PropertyKeyName();
            this.state = 1106;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1105;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1108;
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
            this.state = 1184;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
            case 1:
                {
                this.state = 1111;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 1112;
                this.match(CypherParser.UNION);
                this.state = 1114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1113;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1116;
                this.match(CypherParser.T__1);
                this.state = 1118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1117;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1120;
                this.kU_ColumnDefinitions();
                this.state = 1122;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1121;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1124;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                {
                this.state = 1126;
                this.oC_SymbolicName();
                this.state = 1128;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1127;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1130;
                this.match(CypherParser.T__1);
                this.state = 1132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1131;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1134;
                this.kU_ColumnDefinitions();
                this.state = 1136;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1135;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1138;
                this.match(CypherParser.T__3);
                }
                break;
            case 4:
                {
                this.state = 1140;
                this.oC_SymbolicName();
                this.state = 1142;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1141;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1144;
                this.match(CypherParser.T__1);
                this.state = 1146;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1145;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1148;
                this.kU_DataType(0);
                this.state = 1150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1149;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1152;
                this.match(CypherParser.T__2);
                this.state = 1154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1153;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1156;
                this.kU_DataType(0);
                this.state = 1158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1157;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1160;
                this.match(CypherParser.T__3);
                }
                break;
            case 5:
                {
                this.state = 1162;
                this.match(CypherParser.DECIMAL);
                this.state = 1164;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1163;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1166;
                this.match(CypherParser.T__1);
                this.state = 1168;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1167;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1170;
                this.oC_IntegerLiteral();
                this.state = 1172;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1171;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1174;
                this.match(CypherParser.T__2);
                this.state = 1176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1175;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1178;
                this.oC_IntegerLiteral();
                this.state = 1180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1179;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1182;
                this.match(CypherParser.T__3);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1190;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
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
                    this.state = 1186;
                    if (!(this.precpred(this._ctx, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                    }
                    this.state = 1187;
                    this.kU_ListIdentifiers();
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
            this.state = 1193;
            this.kU_ListIdentifier();
            this.state = 1197;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 151, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1194;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 1199;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 151, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1200;
            this.match(CypherParser.T__6);
            this.state = 1202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===160) {
                {
                this.state = 1201;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 1204;
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
            this.state = 1208;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1206;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1207;
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
            this.state = 1210;
            this.match(CypherParser.EXPLAIN);
            this.state = 1213;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
            case 1:
                {
                this.state = 1211;
                this.match(CypherParser.SP);
                this.state = 1212;
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
        this.enterRule(localctx, 108, CypherParser.RULE_oC_Profile);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1215;
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
            this.state = 1230;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1217;
                this.match(CypherParser.BEGIN);
                this.state = 1218;
                this.match(CypherParser.SP);
                this.state = 1219;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1220;
                this.match(CypherParser.BEGIN);
                this.state = 1221;
                this.match(CypherParser.SP);
                this.state = 1222;
                this.match(CypherParser.TRANSACTION);
                this.state = 1223;
                this.match(CypherParser.SP);
                this.state = 1224;
                this.match(CypherParser.READ);
                this.state = 1225;
                this.match(CypherParser.SP);
                this.state = 1226;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1227;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1228;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1229;
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
        this.enterRule(localctx, 112, CypherParser.RULE_kU_Extension);
        try {
            this.state = 1234;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1232;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1233;
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
            this.state = 1236;
            this.match(CypherParser.LOAD);
            this.state = 1237;
            this.match(CypherParser.SP);
            this.state = 1238;
            this.match(CypherParser.EXTENSION);
            this.state = 1239;
            this.match(CypherParser.SP);
            this.state = 1242;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 1240;
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
                this.state = 1241;
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
            this.state = 1244;
            this.match(CypherParser.INSTALL);
            this.state = 1245;
            this.match(CypherParser.SP);
            this.state = 1246;
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
        this.enterRule(localctx, 120, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1271;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 162, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1250;
                this.oC_SingleQuery();
                this.state = 1257;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 159, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1252;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
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
                    _alt = this._interp.adaptivePredict(this._input, 159, this._ctx);
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
                        if (_la===173) {
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
                    _alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
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
        this.enterRule(localctx, 122, CypherParser.RULE_oC_Union);
        let _la: number;
        try {
            this.state = 1285;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
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
                if (_la===173) {
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
                if (_la===173) {
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
        this.enterRule(localctx, 124, CypherParser.RULE_oC_SingleQuery);
        try {
            this.state = 1289;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
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
        this.enterRule(localctx, 126, CypherParser.RULE_oC_SinglePartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1326;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
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
                    if (_la===173) {
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
                    if (_la===173) {
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
                _alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1312;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
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
                    _alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
                }
                this.state = 1324;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
                case 1:
                    {
                    this.state = 1321;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
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
        this.enterRule(localctx, 128, CypherParser.RULE_oC_MultiPartQuery);
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
                    if (_la===173) {
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
                _alt = this._interp.adaptivePredict(this._input, 177, this._ctx);
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
        this.enterRule(localctx, 130, CypherParser.RULE_kU_QueryPart);
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
                if (_la===173) {
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
                if (_la===173) {
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
        this.enterRule(localctx, 132, CypherParser.RULE_oC_UpdatingClause);
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
        this.enterRule(localctx, 134, CypherParser.RULE_oC_ReadingClause);
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
        this.enterRule(localctx, 136, CypherParser.RULE_kU_LoadFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1370;
            this.match(CypherParser.LOAD);
            this.state = 1388;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 187, this._ctx) ) {
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
                if (_la===173) {
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
                if (_la===173) {
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
                if (_la===173) {
                    {
                    this.state = 1383;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1386;
                this.match(CypherParser.T__3);
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
            this.state = 1398;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
            case 1:
                {
                this.state = 1395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1394;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1397;
                this.kU_ParsingOptions();
                }
                break;
            }
            this.state = 1404;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 191, this._ctx) ) {
            case 1:
                {
                this.state = 1401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1400;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1403;
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
        this.enterRule(localctx, 138, CypherParser.RULE_kU_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1406;
            this.match(CypherParser.CALL);
            this.state = 1407;
            this.match(CypherParser.SP);
            this.state = 1408;
            this.oC_FunctionInvocation();
            this.state = 1413;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
            case 1:
                {
                this.state = 1410;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
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
    public oC_Match(): OC_MatchContext {
        let localctx: OC_MatchContext = new OC_MatchContext(this._ctx, this.state);
        this.enterRule(localctx, 140, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1417;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===118) {
                {
                this.state = 1415;
                this.match(CypherParser.OPTIONAL);
                this.state = 1416;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1419;
            this.match(CypherParser.MATCH);
            this.state = 1421;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1420;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1423;
            this.oC_Pattern();
            this.state = 1426;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
            case 1:
                {
                this.state = 1424;
                this.match(CypherParser.SP);
                this.state = 1425;
                this.oC_Where();
                }
                break;
            }
            this.state = 1430;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
            case 1:
                {
                this.state = 1428;
                this.match(CypherParser.SP);
                this.state = 1429;
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
        this.enterRule(localctx, 142, CypherParser.RULE_kU_Hint);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1432;
            this.match(CypherParser.HINT);
            this.state = 1433;
            this.match(CypherParser.SP);
            this.state = 1434;
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
        let _startState = 144;
        this.enterRecursionRule(localctx, 144, CypherParser.RULE_kU_JoinNode, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1448;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__1:
                {
                this.state = 1437;
                this.match(CypherParser.T__1);
                this.state = 1439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1438;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1441;
                this.kU_JoinNode(0);
                this.state = 1443;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1442;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1445;
                this.match(CypherParser.T__3);
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
                this.state = 1447;
                this.oC_SchemaName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1466;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1464;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
                    case 1:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1450;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1451;
                        this.match(CypherParser.SP);
                        this.state = 1452;
                        this.match(CypherParser.JOIN);
                        this.state = 1453;
                        this.match(CypherParser.SP);
                        this.state = 1454;
                        this.kU_JoinNode(5);
                        }
                        break;
                    case 2:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1455;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1460;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                            case 1:
                                {
                                {
                                this.state = 1456;
                                this.match(CypherParser.SP);
                                this.state = 1457;
                                this.match(CypherParser.MULTI_JOIN);
                                this.state = 1458;
                                this.match(CypherParser.SP);
                                this.state = 1459;
                                this.oC_SchemaName();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 1462;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 201, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    }
                    }
                }
                this.state = 1468;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public oC_Unwind(): OC_UnwindContext {
        let localctx: OC_UnwindContext = new OC_UnwindContext(this._ctx, this.state);
        this.enterRule(localctx, 146, CypherParser.RULE_oC_Unwind);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1469;
            this.match(CypherParser.UNWIND);
            this.state = 1471;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1470;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1473;
            this.oC_Expression();
            this.state = 1474;
            this.match(CypherParser.SP);
            this.state = 1475;
            this.match(CypherParser.AS);
            this.state = 1476;
            this.match(CypherParser.SP);
            this.state = 1477;
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
        this.enterRule(localctx, 148, CypherParser.RULE_oC_Create);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1479;
            this.match(CypherParser.CREATE);
            this.state = 1481;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1480;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1483;
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
        this.enterRule(localctx, 150, CypherParser.RULE_oC_Merge);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1485;
            this.match(CypherParser.MERGE);
            this.state = 1487;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1486;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1489;
            this.oC_Pattern();
            this.state = 1494;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 207, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1490;
                    this.match(CypherParser.SP);
                    this.state = 1491;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1496;
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
    public oC_MergeAction(): OC_MergeActionContext {
        let localctx: OC_MergeActionContext = new OC_MergeActionContext(this._ctx, this.state);
        this.enterRule(localctx, 152, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1507;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1497;
                this.match(CypherParser.ON);
                this.state = 1498;
                this.match(CypherParser.SP);
                this.state = 1499;
                this.match(CypherParser.MATCH);
                this.state = 1500;
                this.match(CypherParser.SP);
                this.state = 1501;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1502;
                this.match(CypherParser.ON);
                this.state = 1503;
                this.match(CypherParser.SP);
                this.state = 1504;
                this.match(CypherParser.CREATE);
                this.state = 1505;
                this.match(CypherParser.SP);
                this.state = 1506;
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
        this.enterRule(localctx, 154, CypherParser.RULE_oC_Set);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1509;
            this.match(CypherParser.SET);
            this.state = 1511;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1510;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1513;
            this.oC_SetItem();
            this.state = 1524;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1515;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1514;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1517;
                    this.match(CypherParser.T__2);
                    this.state = 1519;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1518;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1521;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1526;
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
    public oC_SetItem(): OC_SetItemContext {
        let localctx: OC_SetItemContext = new OC_SetItemContext(this._ctx, this.state);
        this.enterRule(localctx, 156, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1527;
            this.oC_PropertyExpression();
            this.state = 1529;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1528;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1531;
            this.match(CypherParser.T__5);
            this.state = 1533;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1532;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1535;
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
        this.enterRule(localctx, 158, CypherParser.RULE_oC_Delete);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1539;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===77) {
                {
                this.state = 1537;
                this.match(CypherParser.DETACH);
                this.state = 1538;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1541;
            this.match(CypherParser.DELETE);
            this.state = 1543;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1542;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1545;
            this.oC_Expression();
            this.state = 1556;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1547;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1546;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1549;
                    this.match(CypherParser.T__2);
                    this.state = 1551;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
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
                this.state = 1558;
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
    public oC_With(): OC_WithContext {
        let localctx: OC_WithContext = new OC_WithContext(this._ctx, this.state);
        this.enterRule(localctx, 160, CypherParser.RULE_oC_With);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1559;
            this.match(CypherParser.WITH);
            this.state = 1560;
            this.oC_ProjectionBody();
            this.state = 1565;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
            case 1:
                {
                this.state = 1562;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1561;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1564;
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
        this.enterRule(localctx, 162, CypherParser.RULE_oC_Return);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1567;
            this.match(CypherParser.RETURN);
            this.state = 1568;
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
        this.enterRule(localctx, 164, CypherParser.RULE_oC_ProjectionBody);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1574;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 223, this._ctx) ) {
            case 1:
                {
                this.state = 1571;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1570;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1573;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1576;
            this.match(CypherParser.SP);
            this.state = 1577;
            this.oC_ProjectionItems();
            this.state = 1580;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
            case 1:
                {
                this.state = 1578;
                this.match(CypherParser.SP);
                this.state = 1579;
                this.oC_Order();
                }
                break;
            }
            this.state = 1584;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
            case 1:
                {
                this.state = 1582;
                this.match(CypherParser.SP);
                this.state = 1583;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1588;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
            case 1:
                {
                this.state = 1586;
                this.match(CypherParser.SP);
                this.state = 1587;
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
        this.enterRule(localctx, 166, CypherParser.RULE_oC_ProjectionItems);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1618;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1590;
                this.match(CypherParser.STAR);
                this.state = 1601;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 229, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1592;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
                            {
                            this.state = 1591;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1594;
                        this.match(CypherParser.T__2);
                        this.state = 1596;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
                            {
                            this.state = 1595;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1598;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1603;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 229, this._ctx);
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
                this.state = 1604;
                this.oC_ProjectionItem();
                this.state = 1615;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 232, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1606;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
                            {
                            this.state = 1605;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1608;
                        this.match(CypherParser.T__2);
                        this.state = 1610;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
                            {
                            this.state = 1609;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1612;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1617;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 232, this._ctx);
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
        this.enterRule(localctx, 168, CypherParser.RULE_oC_ProjectionItem);
        try {
            this.state = 1627;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1620;
                this.oC_Expression();
                this.state = 1621;
                this.match(CypherParser.SP);
                this.state = 1622;
                this.match(CypherParser.AS);
                this.state = 1623;
                this.match(CypherParser.SP);
                this.state = 1624;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1626;
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
        this.enterRule(localctx, 170, CypherParser.RULE_oC_Order);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1629;
            this.match(CypherParser.ORDER);
            this.state = 1630;
            this.match(CypherParser.SP);
            this.state = 1631;
            this.match(CypherParser.BY);
            this.state = 1632;
            this.match(CypherParser.SP);
            this.state = 1633;
            this.oC_SortItem();
            this.state = 1641;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 1634;
                this.match(CypherParser.T__2);
                this.state = 1636;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1635;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1638;
                this.oC_SortItem();
                }
                }
                this.state = 1643;
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
        this.enterRule(localctx, 172, CypherParser.RULE_oC_Skip);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1644;
            this.match(CypherParser.L_SKIP);
            this.state = 1645;
            this.match(CypherParser.SP);
            this.state = 1646;
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
        this.enterRule(localctx, 174, CypherParser.RULE_oC_Limit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1648;
            this.match(CypherParser.LIMIT);
            this.state = 1649;
            this.match(CypherParser.SP);
            this.state = 1650;
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
        this.enterRule(localctx, 176, CypherParser.RULE_oC_SortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1652;
            this.oC_Expression();
            this.state = 1657;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
            case 1:
                {
                this.state = 1654;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1653;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1656;
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
        this.enterRule(localctx, 178, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1659;
            this.match(CypherParser.WHERE);
            this.state = 1660;
            this.match(CypherParser.SP);
            this.state = 1661;
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
        this.enterRule(localctx, 180, CypherParser.RULE_oC_Pattern);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1663;
            this.oC_PatternPart();
            this.state = 1674;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1665;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1664;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1667;
                    this.match(CypherParser.T__2);
                    this.state = 1669;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1668;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1671;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1676;
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
    public oC_PatternPart(): OC_PatternPartContext {
        let localctx: OC_PatternPartContext = new OC_PatternPartContext(this._ctx, this.state);
        this.enterRule(localctx, 182, CypherParser.RULE_oC_PatternPart);
        let _la: number;
        try {
            this.state = 1688;
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
                this.state = 1677;
                this.oC_Variable();
                this.state = 1679;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1678;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1681;
                this.match(CypherParser.T__5);
                this.state = 1683;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1682;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1685;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1687;
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
        this.enterRule(localctx, 184, CypherParser.RULE_oC_AnonymousPatternPart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1690;
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
        this.enterRule(localctx, 186, CypherParser.RULE_oC_PatternElement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1706;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1692;
                this.oC_NodePattern();
                this.state = 1699;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1694;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
                            {
                            this.state = 1693;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1696;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1701;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1702;
                this.match(CypherParser.T__1);
                this.state = 1703;
                this.oC_PatternElement();
                this.state = 1704;
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
        this.enterRule(localctx, 188, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1708;
            this.match(CypherParser.T__1);
            this.state = 1710;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1709;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1716;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577927) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1378158015) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 2305) !== 0)) {
                {
                this.state = 1712;
                this.oC_Variable();
                this.state = 1714;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1713;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1722;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===157) {
                {
                this.state = 1718;
                this.oC_NodeLabels();
                this.state = 1720;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1719;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1728;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1724;
                this.kU_Properties();
                this.state = 1726;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1725;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1730;
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
        this.enterRule(localctx, 190, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1732;
            this.oC_RelationshipPattern();
            this.state = 1734;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1733;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1736;
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
        this.enterRule(localctx, 192, CypherParser.RULE_oC_RelationshipPattern);
        let _la: number;
        try {
            this.state = 1782;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 267, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1738;
                this.oC_LeftArrowHead();
                this.state = 1740;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1739;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1742;
                this.oC_Dash();
                this.state = 1744;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 257, this._ctx) ) {
                case 1:
                    {
                    this.state = 1743;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1747;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1746;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1750;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1749;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1752;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1754;
                this.oC_Dash();
                this.state = 1756;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
                case 1:
                    {
                    this.state = 1755;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1759;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1758;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1762;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1761;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1764;
                this.oC_Dash();
                this.state = 1766;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1765;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1768;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1770;
                this.oC_Dash();
                this.state = 1772;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 264, this._ctx) ) {
                case 1:
                    {
                    this.state = 1771;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1775;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1774;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1778;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1777;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1780;
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
        this.enterRule(localctx, 194, CypherParser.RULE_oC_RelationshipDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1784;
            this.match(CypherParser.T__6);
            this.state = 1786;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1785;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1792;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577927) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1378158015) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 2305) !== 0)) {
                {
                this.state = 1788;
                this.oC_Variable();
                this.state = 1790;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1789;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1798;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===157) {
                {
                this.state = 1794;
                this.oC_RelationshipTypes();
                this.state = 1796;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1795;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1804;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===152) {
                {
                this.state = 1800;
                this.oC_RangeLiteral();
                this.state = 1802;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1801;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1810;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1806;
                this.kU_Properties();
                this.state = 1808;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1807;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1812;
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
        this.enterRule(localctx, 196, CypherParser.RULE_kU_Properties);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1814;
            this.match(CypherParser.T__8);
            this.state = 1816;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1815;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1851;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577927) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1378158015) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 2305) !== 0)) {
                {
                this.state = 1818;
                this.oC_PropertyKeyName();
                this.state = 1820;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1819;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1822;
                this.match(CypherParser.COLON);
                this.state = 1824;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1823;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1826;
                this.oC_Expression();
                this.state = 1828;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1827;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1848;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 1830;
                    this.match(CypherParser.T__2);
                    this.state = 1832;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1831;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1834;
                    this.oC_PropertyKeyName();
                    this.state = 1836;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1835;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1838;
                    this.match(CypherParser.COLON);
                    this.state = 1840;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1839;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1842;
                    this.oC_Expression();
                    this.state = 1844;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1843;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1850;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1853;
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
        this.enterRule(localctx, 198, CypherParser.RULE_oC_RelationshipTypes);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1855;
            this.match(CypherParser.COLON);
            this.state = 1857;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1856;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1859;
            this.oC_RelTypeName();
            this.state = 1873;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 291, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1861;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1860;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1863;
                    this.match(CypherParser.T__10);
                    this.state = 1865;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===157) {
                        {
                        this.state = 1864;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 1868;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1867;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1870;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1875;
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
    public oC_NodeLabels(): OC_NodeLabelsContext {
        let localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this._ctx, this.state);
        this.enterRule(localctx, 200, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1876;
            this.oC_NodeLabel();
            this.state = 1883;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 293, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1878;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 1877;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1880;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1885;
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
    public oC_NodeLabel(): OC_NodeLabelContext {
        let localctx: OC_NodeLabelContext = new OC_NodeLabelContext(this._ctx, this.state);
        this.enterRule(localctx, 202, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1886;
            this.match(CypherParser.COLON);
            this.state = 1888;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1887;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1890;
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
        this.enterRule(localctx, 204, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1892;
            this.match(CypherParser.STAR);
            this.state = 1894;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 295, this._ctx) ) {
            case 1:
                {
                this.state = 1893;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1902;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.SHORTEST:
                {
                this.state = 1896;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.ALL:
                {
                this.state = 1897;
                this.match(CypherParser.ALL);
                this.state = 1898;
                this.match(CypherParser.SP);
                this.state = 1899;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.TRAIL:
                {
                this.state = 1900;
                this.match(CypherParser.TRAIL);
                }
                break;
            case CypherParser.ACYCLIC:
                {
                this.state = 1901;
                this.match(CypherParser.ACYCLIC);
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
            this.state = 1905;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 297, this._ctx) ) {
            case 1:
                {
                this.state = 1904;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1921;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 302, this._ctx) ) {
            case 1:
                {
                this.state = 1908;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===160) {
                    {
                    this.state = 1907;
                    this.oC_LowerBound();
                    }
                }

                this.state = 1911;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1910;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1913;
                this.match(CypherParser.T__11);
                this.state = 1915;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 300, this._ctx) ) {
                case 1:
                    {
                    this.state = 1914;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1918;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===160) {
                    {
                    this.state = 1917;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 1920;
                this.oC_IntegerLiteral();
                }
                break;
            }
            this.state = 1927;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 304, this._ctx) ) {
            case 1:
                {
                this.state = 1924;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1923;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1926;
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
        this.enterRule(localctx, 206, CypherParser.RULE_kU_RecursiveRelationshipComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1929;
            this.match(CypherParser.T__1);
            this.state = 1931;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1930;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1933;
            this.oC_Variable();
            this.state = 1935;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1934;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1937;
            this.match(CypherParser.T__2);
            this.state = 1939;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1938;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1941;
            this.oC_Variable();
            this.state = 1953;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 311, this._ctx) ) {
            case 1:
                {
                this.state = 1943;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1942;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1945;
                this.match(CypherParser.T__10);
                this.state = 1947;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1946;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1949;
                this.oC_Where();
                this.state = 1951;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 310, this._ctx) ) {
                case 1:
                    {
                    this.state = 1950;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                }
                break;
            }
            this.state = 1974;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===173) {
                {
                this.state = 1956;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1955;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1958;
                this.match(CypherParser.T__10);
                this.state = 1960;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1959;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1962;
                this.kU_IntermediateRelProjectionItems();
                this.state = 1964;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1963;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1966;
                this.match(CypherParser.T__2);
                this.state = 1968;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1967;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1970;
                this.kU_IntermediateNodeProjectionItems();
                this.state = 1972;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 1971;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1976;
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
        this.enterRule(localctx, 208, CypherParser.RULE_kU_IntermediateNodeProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1978;
            this.match(CypherParser.T__8);
            this.state = 1980;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 318, this._ctx) ) {
            case 1:
                {
                this.state = 1979;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1983;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 327371729) !== 0)) {
                {
                this.state = 1982;
                this.oC_ProjectionItems();
                }
            }

            this.state = 1986;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1985;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1988;
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
        this.enterRule(localctx, 210, CypherParser.RULE_kU_IntermediateRelProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1990;
            this.match(CypherParser.T__8);
            this.state = 1992;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 321, this._ctx) ) {
            case 1:
                {
                this.state = 1991;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1995;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 327371729) !== 0)) {
                {
                this.state = 1994;
                this.oC_ProjectionItems();
                }
            }

            this.state = 1998;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 1997;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2000;
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
        this.enterRule(localctx, 212, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2002;
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
        this.enterRule(localctx, 214, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2004;
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
        this.enterRule(localctx, 216, CypherParser.RULE_oC_LabelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2006;
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
        this.enterRule(localctx, 218, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2008;
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
        this.enterRule(localctx, 220, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2010;
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
        this.enterRule(localctx, 222, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2012;
            this.oC_XorExpression();
            this.state = 2019;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 324, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2013;
                    this.match(CypherParser.SP);
                    this.state = 2014;
                    this.match(CypherParser.OR);
                    this.state = 2015;
                    this.match(CypherParser.SP);
                    this.state = 2016;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 2021;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 324, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 224, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2022;
            this.oC_AndExpression();
            this.state = 2029;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 325, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2023;
                    this.match(CypherParser.SP);
                    this.state = 2024;
                    this.match(CypherParser.XOR);
                    this.state = 2025;
                    this.match(CypherParser.SP);
                    this.state = 2026;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 2031;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 325, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 226, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2032;
            this.oC_NotExpression();
            this.state = 2039;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 326, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2033;
                    this.match(CypherParser.SP);
                    this.state = 2034;
                    this.match(CypherParser.AND);
                    this.state = 2035;
                    this.match(CypherParser.SP);
                    this.state = 2036;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 2041;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 326, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 228, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2048;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===113) {
                {
                {
                this.state = 2042;
                this.match(CypherParser.NOT);
                this.state = 2044;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2043;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2050;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2051;
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
        this.enterRule(localctx, 230, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 2101;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 339, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2053;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2063;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 331, this._ctx) ) {
                case 1:
                    {
                    this.state = 2055;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2054;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2057;
                    this.kU_ComparisonOperator();
                    this.state = 2059;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2058;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2061;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2065;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 2067;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2066;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2069;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 2071;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2070;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2073;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2077;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2079;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2078;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2081;
                this.kU_ComparisonOperator();
                this.state = 2083;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2082;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2085;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2095;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2087;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
                            {
                            this.state = 2086;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2089;
                        this.kU_ComparisonOperator();
                        this.state = 2091;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
                            {
                            this.state = 2090;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2093;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2097;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 338, this._ctx);
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
        this.enterRule(localctx, 232, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2103;
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
        this.enterRule(localctx, 234, CypherParser.RULE_kU_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2105;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 2116;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 342, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2107;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2106;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2109;
                    this.match(CypherParser.T__10);
                    this.state = 2111;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2110;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2113;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 2118;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 342, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 236, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2119;
            this.kU_BitShiftOperatorExpression();
            this.state = 2130;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 345, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2121;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2120;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2123;
                    this.match(CypherParser.T__17);
                    this.state = 2125;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2124;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2127;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 2132;
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
    public kU_BitShiftOperatorExpression(): KU_BitShiftOperatorExpressionContext {
        let localctx: KU_BitShiftOperatorExpressionContext = new KU_BitShiftOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 238, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2133;
            this.oC_AddOrSubtractExpression();
            this.state = 2145;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 348, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2135;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2134;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2137;
                    this.kU_BitShiftOperator();
                    this.state = 2139;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2138;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2141;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 2147;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 348, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 240, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2148;
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
        this.enterRule(localctx, 242, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2150;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 2162;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 351, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2152;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2151;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2154;
                    this.kU_AddOrSubtractOperator();
                    this.state = 2156;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2155;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2158;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 2164;
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
    public kU_AddOrSubtractOperator(): KU_AddOrSubtractOperatorContext {
        let localctx: KU_AddOrSubtractOperatorContext = new KU_AddOrSubtractOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 244, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2165;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===155)) {
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
        this.enterRule(localctx, 246, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2167;
            this.oC_PowerOfExpression();
            this.state = 2179;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 354, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2169;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2168;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2171;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 2173;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2172;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2175;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 2181;
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
    public kU_MultiplyDivideModuloOperator(): KU_MultiplyDivideModuloOperatorContext {
        let localctx: KU_MultiplyDivideModuloOperatorContext = new KU_MultiplyDivideModuloOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 248, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2182;
            _la = this._input.LA(1);
            if(!(_la===22 || _la===23 || _la===152)) {
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
        this.enterRule(localctx, 250, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2184;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 2195;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 357, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2186;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2185;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2188;
                    this.match(CypherParser.T__23);
                    this.state = 2190;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2189;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2192;
                    this.oC_UnaryAddSubtractOrFactorialExpression();
                    }
                    }
                }
                this.state = 2197;
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
    public oC_UnaryAddSubtractOrFactorialExpression(): OC_UnaryAddSubtractOrFactorialExpressionContext {
        let localctx: OC_UnaryAddSubtractOrFactorialExpressionContext = new OC_UnaryAddSubtractOrFactorialExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 252, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2204;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===155) {
                {
                {
                this.state = 2198;
                this.match(CypherParser.MINUS);
                this.state = 2200;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2199;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2206;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2207;
            this.oC_StringListNullOperatorExpression();
            this.state = 2212;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 361, this._ctx) ) {
            case 1:
                {
                this.state = 2209;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2208;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2211;
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
        this.enterRule(localctx, 254, CypherParser.RULE_oC_StringListNullOperatorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2214;
            this.oC_PropertyOrLabelsExpression();
            this.state = 2222;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 363, this._ctx) ) {
            case 1:
                {
                this.state = 2215;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 2217;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2216;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2219;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 362, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 2221;
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
        this.enterRule(localctx, 256, CypherParser.RULE_oC_ListOperatorExpression);
        let _la: number;
        try {
            this.state = 2243;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 367, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2224;
                this.match(CypherParser.SP);
                this.state = 2225;
                this.match(CypherParser.IN);
                this.state = 2227;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2226;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2229;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2230;
                this.match(CypherParser.T__6);
                this.state = 2231;
                this.oC_Expression();
                this.state = 2232;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2234;
                this.match(CypherParser.T__6);
                this.state = 2236;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 327371473) !== 0)) {
                    {
                    this.state = 2235;
                    this.oC_Expression();
                    }
                }

                this.state = 2238;
                this.match(CypherParser.COLON);
                this.state = 2240;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 327371473) !== 0)) {
                    {
                    this.state = 2239;
                    this.oC_Expression();
                    }
                }

                this.state = 2242;
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
        this.enterRule(localctx, 258, CypherParser.RULE_oC_StringOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2256;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 368, this._ctx) ) {
            case 1:
                {
                this.state = 2245;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 2246;
                this.match(CypherParser.SP);
                this.state = 2247;
                this.match(CypherParser.STARTS);
                this.state = 2248;
                this.match(CypherParser.SP);
                this.state = 2249;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 2250;
                this.match(CypherParser.SP);
                this.state = 2251;
                this.match(CypherParser.ENDS);
                this.state = 2252;
                this.match(CypherParser.SP);
                this.state = 2253;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 2254;
                this.match(CypherParser.SP);
                this.state = 2255;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 2259;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2258;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2261;
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
        this.enterRule(localctx, 260, CypherParser.RULE_oC_RegularExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2264;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2263;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2266;
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
        this.enterRule(localctx, 262, CypherParser.RULE_oC_NullOperatorExpression);
        try {
            this.state = 2278;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 371, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2268;
                this.match(CypherParser.SP);
                this.state = 2269;
                this.match(CypherParser.IS);
                this.state = 2270;
                this.match(CypherParser.SP);
                this.state = 2271;
                this.match(CypherParser.NULL);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2272;
                this.match(CypherParser.SP);
                this.state = 2273;
                this.match(CypherParser.IS);
                this.state = 2274;
                this.match(CypherParser.SP);
                this.state = 2275;
                this.match(CypherParser.NOT);
                this.state = 2276;
                this.match(CypherParser.SP);
                this.state = 2277;
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
        this.enterRule(localctx, 264, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2280;
            this.oC_Atom();
            this.state = 2287;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 373, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2282;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2281;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2284;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2289;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 373, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 266, CypherParser.RULE_oC_Atom);
        try {
            this.state = 2300;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 374, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2290;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2291;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2292;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2293;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2294;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2295;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2296;
                this.oC_ExistSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2297;
                this.kU_CountSubquery();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2298;
                this.oC_Variable();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 2299;
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
        this.enterRule(localctx, 268, CypherParser.RULE_oC_Quantifier);
        let _la: number;
        try {
            this.state = 2358;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ALL:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2302;
                this.match(CypherParser.ALL);
                this.state = 2304;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2303;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2306;
                this.match(CypherParser.T__1);
                this.state = 2308;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2307;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2310;
                this.oC_FilterExpression();
                this.state = 2312;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2311;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2314;
                this.match(CypherParser.T__3);
                }
                }
                break;
            case CypherParser.ANY:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2316;
                this.match(CypherParser.ANY);
                this.state = 2318;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2317;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2320;
                this.match(CypherParser.T__1);
                this.state = 2322;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2321;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2324;
                this.oC_FilterExpression();
                this.state = 2326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2325;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2328;
                this.match(CypherParser.T__3);
                }
                }
                break;
            case CypherParser.NONE:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2330;
                this.match(CypherParser.NONE);
                this.state = 2332;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2331;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2334;
                this.match(CypherParser.T__1);
                this.state = 2336;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2335;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2338;
                this.oC_FilterExpression();
                this.state = 2340;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2339;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2342;
                this.match(CypherParser.T__3);
                }
                }
                break;
            case CypherParser.SINGLE:
                this.enterOuterAlt(localctx, 4);
                {
                {
                this.state = 2344;
                this.match(CypherParser.SINGLE);
                this.state = 2346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
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
                if (_la===173) {
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
                if (_la===173) {
                    {
                    this.state = 2353;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2356;
                this.match(CypherParser.T__3);
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
        this.enterRule(localctx, 270, CypherParser.RULE_oC_FilterExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2360;
            this.oC_IdInColl();
            this.state = 2365;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 389, this._ctx) ) {
            case 1:
                {
                this.state = 2362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2361;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2364;
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
        this.enterRule(localctx, 272, CypherParser.RULE_oC_IdInColl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2367;
            this.oC_Variable();
            this.state = 2368;
            this.match(CypherParser.SP);
            this.state = 2369;
            this.match(CypherParser.IN);
            this.state = 2370;
            this.match(CypherParser.SP);
            this.state = 2371;
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
        this.enterRule(localctx, 274, CypherParser.RULE_oC_Literal);
        try {
            this.state = 2379;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2373;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2374;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.FALSE:
            case CypherParser.TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2375;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2376;
                this.match(CypherParser.NULL);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2377;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2378;
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
            this.state = 2381;
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
        this.enterRule(localctx, 278, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2383;
            this.match(CypherParser.T__6);
            this.state = 2385;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2384;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2400;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 327371473) !== 0)) {
                {
                this.state = 2387;
                this.oC_Expression();
                this.state = 2389;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2388;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 2391;
                    this.kU_ListEntry();
                    this.state = 2393;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2392;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2399;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2402;
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
            this.state = 2404;
            this.match(CypherParser.T__2);
            this.state = 2406;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 396, this._ctx) ) {
            case 1:
                {
                this.state = 2405;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2409;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 327371473) !== 0)) {
                {
                this.state = 2408;
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
            this.state = 2411;
            this.match(CypherParser.T__8);
            this.state = 2413;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2412;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2415;
            this.kU_StructField();
            this.state = 2417;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2416;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2429;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 2419;
                this.match(CypherParser.T__2);
                this.state = 2421;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2420;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2423;
                this.kU_StructField();
                this.state = 2425;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2424;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2431;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2432;
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
            this.state = 2436;
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
                this.state = 2434;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2435;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2439;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2438;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2441;
            this.match(CypherParser.COLON);
            this.state = 2443;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2442;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2445;
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
            this.state = 2447;
            this.match(CypherParser.T__1);
            this.state = 2449;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2448;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2451;
            this.oC_Expression();
            this.state = 2453;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2452;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2455;
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
            this.state = 2534;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 427, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2457;
                this.match(CypherParser.COUNT);
                this.state = 2459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2458;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2461;
                this.match(CypherParser.T__1);
                this.state = 2463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2462;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2465;
                this.match(CypherParser.STAR);
                this.state = 2467;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2466;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2469;
                this.match(CypherParser.T__3);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2470;
                this.match(CypherParser.CAST);
                this.state = 2472;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2471;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2474;
                this.match(CypherParser.T__1);
                this.state = 2476;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2475;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2478;
                this.kU_FunctionParameter();
                this.state = 2480;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2479;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2492;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case CypherParser.AS:
                    {
                    {
                    this.state = 2482;
                    this.match(CypherParser.AS);
                    this.state = 2484;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2483;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2486;
                    this.kU_DataType(0);
                    }
                    }
                    break;
                case CypherParser.T__2:
                    {
                    {
                    this.state = 2487;
                    this.match(CypherParser.T__2);
                    this.state = 2489;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2488;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2491;
                    this.kU_FunctionParameter();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2495;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2494;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2497;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2499;
                this.oC_FunctionName();
                this.state = 2501;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
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
                if (_la===173) {
                    {
                    this.state = 2504;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2511;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===78) {
                    {
                    this.state = 2507;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2509;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2508;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2530;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 327371473) !== 0)) {
                    {
                    this.state = 2513;
                    this.kU_FunctionParameter();
                    this.state = 2515;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2514;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2527;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===3) {
                        {
                        {
                        this.state = 2517;
                        this.match(CypherParser.T__2);
                        this.state = 2519;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
                            {
                            this.state = 2518;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2521;
                        this.kU_FunctionParameter();
                        this.state = 2523;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
                            {
                            this.state = 2522;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2529;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2532;
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
            this.state = 2536;
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
            this.state = 2551;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 431, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2547;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 430, this._ctx) ) {
                case 1:
                    {
                    this.state = 2538;
                    this.oC_SymbolicName();
                    this.state = 2540;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2539;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2542;
                    this.match(CypherParser.COLON);
                    this.state = 2543;
                    this.match(CypherParser.T__5);
                    this.state = 2545;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2544;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 2549;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2550;
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
        this.enterRule(localctx, 294, CypherParser.RULE_kU_LambdaParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2553;
            this.kU_LambdaVars();
            this.state = 2555;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2554;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2557;
            this.match(CypherParser.MINUS);
            this.state = 2558;
            this.match(CypherParser.T__15);
            this.state = 2560;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2559;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2562;
            this.oC_Expression();
            this.state = 2564;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 434, this._ctx) ) {
            case 1:
                {
                this.state = 2563;
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
        this.enterRule(localctx, 296, CypherParser.RULE_kU_LambdaVars);
        let _la: number;
        try {
            this.state = 2590;
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
                this.state = 2566;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2567;
                this.match(CypherParser.T__1);
                this.state = 2569;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2568;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2571;
                this.oC_SymbolicName();
                this.state = 2573;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2572;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2585;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 2575;
                    this.match(CypherParser.T__2);
                    this.state = 2577;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2576;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2579;
                    this.oC_SymbolicName();
                    this.state = 2581;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2580;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2587;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2588;
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
    public oC_PathPatterns(): OC_PathPatternsContext {
        let localctx: OC_PathPatternsContext = new OC_PathPatternsContext(this._ctx, this.state);
        this.enterRule(localctx, 298, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2592;
            this.oC_NodePattern();
            this.state = 2597;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2594;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===173) {
                        {
                        this.state = 2593;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2596;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2599;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 442, this._ctx);
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
        this.enterRule(localctx, 300, CypherParser.RULE_oC_ExistSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2601;
            this.match(CypherParser.EXISTS);
            this.state = 2603;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2602;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2605;
            this.match(CypherParser.T__8);
            this.state = 2607;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2606;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2609;
            this.match(CypherParser.MATCH);
            this.state = 2611;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2610;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2613;
            this.oC_Pattern();
            this.state = 2618;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 447, this._ctx) ) {
            case 1:
                {
                this.state = 2615;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2614;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2617;
                this.oC_Where();
                }
                break;
            }
            this.state = 2621;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2620;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2623;
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
        this.enterRule(localctx, 302, CypherParser.RULE_kU_CountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2625;
            this.match(CypherParser.COUNT);
            this.state = 2627;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2626;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2629;
            this.match(CypherParser.T__8);
            this.state = 2631;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2630;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2633;
            this.match(CypherParser.MATCH);
            this.state = 2635;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2634;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2637;
            this.oC_Pattern();
            this.state = 2642;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 453, this._ctx) ) {
            case 1:
                {
                this.state = 2639;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2638;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2641;
                this.oC_Where();
                }
                break;
            }
            this.state = 2645;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2644;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2647;
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
        this.enterRule(localctx, 304, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2649;
            this.match(CypherParser.T__4);
            this.state = 2651;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2650;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2655;
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
                this.state = 2653;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2654;
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
        this.enterRule(localctx, 306, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2679;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 462, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2657;
                this.match(CypherParser.CASE);
                this.state = 2662;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2659;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
                            {
                            this.state = 2658;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2661;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2664;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 458, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2666;
                this.match(CypherParser.CASE);
                this.state = 2668;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2667;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2670;
                this.oC_Expression();
                this.state = 2675;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2672;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===173) {
                            {
                            this.state = 2671;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2674;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2677;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 461, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2689;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 465, this._ctx) ) {
            case 1:
                {
                this.state = 2682;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2681;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2684;
                this.match(CypherParser.ELSE);
                this.state = 2686;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===173) {
                    {
                    this.state = 2685;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2688;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2692;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2691;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2694;
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
        this.enterRule(localctx, 308, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2696;
            this.match(CypherParser.WHEN);
            this.state = 2698;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2697;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2700;
            this.oC_Expression();
            this.state = 2702;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2701;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2704;
            this.match(CypherParser.THEN);
            this.state = 2706;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2705;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2708;
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
        this.enterRule(localctx, 310, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2710;
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
        this.enterRule(localctx, 312, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 2714;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2712;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2713;
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
        this.enterRule(localctx, 314, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2716;
            this.match(CypherParser.T__25);
            this.state = 2719;
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
                this.state = 2717;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2718;
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
        this.enterRule(localctx, 316, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2721;
            this.oC_Atom();
            this.state = 2723;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===173) {
                {
                this.state = 2722;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2725;
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
        this.enterRule(localctx, 318, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2727;
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
        this.enterRule(localctx, 320, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2729;
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
        this.enterRule(localctx, 322, CypherParser.RULE_oC_DoubleLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2731;
            _la = this._input.LA(1);
            if(!(_la===167 || _la===168)) {
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
        this.enterRule(localctx, 324, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2733;
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
        this.enterRule(localctx, 326, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 2740;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2735;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2736;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2738;
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
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2739;
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
        this.enterRule(localctx, 328, CypherParser.RULE_kU_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2742;
            _la = this._input.LA(1);
            if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577927) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1378158015) !== 0))) {
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
        this.enterRule(localctx, 330, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2744;
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
        this.enterRule(localctx, 332, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2746;
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
        this.enterRule(localctx, 334, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2748;
            _la = this._input.LA(1);
            if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2047) !== 0) || _la===155)) {
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
        case 72:
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
        4,1,176,2751,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,1,0,1,0,3,0,339,8,0,1,
        0,1,0,3,0,343,8,0,1,0,5,0,346,8,0,10,0,12,0,349,9,0,1,0,3,0,352,
        8,0,1,0,1,0,1,1,3,1,357,8,1,1,1,3,1,360,8,1,1,1,1,1,3,1,364,8,1,
        1,1,3,1,367,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,390,8,2,1,3,1,3,1,3,1,3,
        3,3,396,8,3,1,3,1,3,3,3,400,8,3,1,3,3,3,403,8,3,1,3,1,3,1,3,1,3,
        3,3,409,8,3,1,3,3,3,412,8,3,1,4,1,4,3,4,416,8,4,1,4,1,4,3,4,420,
        8,4,1,4,1,4,3,4,424,8,4,1,4,5,4,427,8,4,10,4,12,4,430,9,4,1,4,3,
        4,433,8,4,1,4,1,4,1,5,1,5,1,5,3,5,440,8,5,1,5,1,5,3,5,444,8,5,1,
        5,1,5,1,5,1,5,1,5,1,5,3,5,452,8,5,1,5,1,5,3,5,456,8,5,1,6,1,6,1,
        6,1,6,1,6,1,6,1,6,1,6,3,6,466,8,6,1,6,1,6,3,6,470,8,6,1,6,1,6,3,
        6,474,8,6,1,6,5,6,477,8,6,10,6,12,6,480,9,6,1,6,1,6,1,6,1,6,1,6,
        1,6,1,7,1,7,1,7,1,7,3,7,492,8,7,1,7,1,7,3,7,496,8,7,1,7,1,7,1,7,
        1,7,1,7,1,7,3,7,504,8,7,1,7,3,7,507,8,7,1,8,1,8,1,8,1,8,1,8,1,8,
        3,8,515,8,8,1,8,3,8,518,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,
        10,1,10,1,10,1,10,1,10,3,10,533,8,10,1,10,1,10,1,10,3,10,538,8,10,
        1,10,1,10,1,10,1,10,3,10,544,8,10,1,10,1,10,3,10,548,8,10,1,10,3,
        10,551,8,10,1,10,3,10,554,8,10,1,10,1,10,1,11,1,11,3,11,560,8,11,
        1,11,1,11,3,11,564,8,11,1,11,5,11,567,8,11,10,11,12,11,570,9,11,
        3,11,572,8,11,1,11,1,11,1,11,3,11,577,8,11,1,12,1,12,3,12,581,8,
        12,1,12,1,12,3,12,585,8,12,1,12,5,12,588,8,12,10,12,12,12,591,9,
        12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,3,
        15,605,8,15,1,15,1,15,3,15,609,8,15,1,15,1,15,1,15,1,15,1,15,3,15,
        616,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
        1,16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,636,8,17,1,17,1,17,3,17,
        640,8,17,1,17,3,17,643,8,17,1,17,3,17,646,8,17,1,17,3,17,649,8,17,
        1,17,3,17,652,8,17,1,17,1,17,3,17,656,8,17,1,17,5,17,659,8,17,10,
        17,12,17,662,9,17,1,17,3,17,665,8,17,1,17,1,17,1,17,1,17,1,17,1,
        17,1,18,1,18,3,18,675,8,18,1,18,1,18,3,18,679,8,18,1,18,5,18,682,
        8,18,10,18,12,18,685,9,18,1,19,1,19,3,19,689,8,19,1,19,1,19,1,19,
        3,19,694,8,19,1,19,1,19,1,20,1,20,3,20,700,8,20,1,20,1,20,3,20,704,
        8,20,1,20,1,20,3,20,708,8,20,1,20,5,20,711,8,20,10,20,12,20,714,
        9,20,1,20,1,20,1,20,1,20,3,20,720,8,20,1,20,1,20,3,20,724,8,20,1,
        20,1,20,3,20,728,8,20,1,20,3,20,731,8,20,1,21,1,21,3,21,735,8,21,
        1,21,1,21,3,21,739,8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,758,8,23,1,23,
        1,23,3,23,762,8,23,1,23,1,23,3,23,766,8,23,1,23,1,23,3,23,770,8,
        23,1,23,1,23,3,23,774,8,23,1,23,3,23,777,8,23,1,23,3,23,780,8,23,
        1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,793,
        8,24,1,24,1,24,3,24,797,8,24,1,24,1,24,3,24,801,8,24,1,24,1,24,3,
        24,805,8,24,1,24,1,24,3,24,809,8,24,1,24,1,24,3,24,813,8,24,3,24,
        815,8,24,1,24,1,24,3,24,819,8,24,1,24,1,24,3,24,823,8,24,3,24,825,
        8,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        1,25,3,25,840,8,25,1,25,1,25,3,25,844,8,25,1,25,1,25,3,25,848,8,
        25,1,25,1,25,3,25,852,8,25,1,25,1,25,3,25,856,8,25,1,25,4,25,859,
        8,25,11,25,12,25,860,1,25,3,25,864,8,25,1,25,1,25,3,25,868,8,25,
        1,25,1,25,3,25,872,8,25,3,25,874,8,25,1,25,1,25,3,25,878,8,25,1,
        25,1,25,3,25,882,8,25,3,25,884,8,25,1,25,1,25,1,26,1,26,1,26,1,26,
        1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,903,
        8,27,1,27,1,27,1,27,5,27,908,8,27,10,27,12,27,911,9,27,1,28,1,28,
        1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,923,8,28,1,29,1,29,
        1,29,1,29,1,29,3,29,930,8,29,1,30,1,30,1,30,1,30,3,30,936,8,30,1,
        30,3,30,939,8,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,3,31,949,
        8,31,1,31,3,31,952,8,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,960,8,
        32,1,32,3,32,963,8,32,1,33,1,33,1,33,1,33,3,33,969,8,33,1,33,3,33,
        972,8,33,1,33,1,33,1,34,1,34,3,34,978,8,34,1,34,1,34,1,35,1,35,1,
        35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,993,8,36,1,36,1,
        36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,3,
        38,1009,8,38,1,39,1,39,1,39,1,39,1,39,3,39,1016,8,39,1,39,1,39,1,
        39,1,39,1,39,3,39,1023,8,39,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,
        41,1,41,3,41,1034,8,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,
        43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,3,44,1054,8,44,1,
        44,1,44,3,44,1058,8,44,1,44,5,44,1061,8,44,10,44,12,44,1064,9,44,
        1,45,1,45,1,45,1,45,1,46,1,46,3,46,1072,8,46,1,46,1,46,3,46,1076,
        8,46,1,46,5,46,1079,8,46,10,46,12,46,1082,9,46,1,47,1,47,1,47,3,
        47,1087,8,47,1,47,1,47,1,47,1,47,3,47,1093,8,47,1,48,1,48,1,48,1,
        48,3,48,1099,8,48,1,48,1,48,3,48,1103,8,48,1,48,1,48,3,48,1107,8,
        48,1,48,1,48,1,49,1,49,1,49,1,49,3,49,1115,8,49,1,49,1,49,3,49,1119,
        8,49,1,49,1,49,3,49,1123,8,49,1,49,1,49,1,49,1,49,3,49,1129,8,49,
        1,49,1,49,3,49,1133,8,49,1,49,1,49,3,49,1137,8,49,1,49,1,49,1,49,
        1,49,3,49,1143,8,49,1,49,1,49,3,49,1147,8,49,1,49,1,49,3,49,1151,
        8,49,1,49,1,49,3,49,1155,8,49,1,49,1,49,3,49,1159,8,49,1,49,1,49,
        1,49,1,49,3,49,1165,8,49,1,49,1,49,3,49,1169,8,49,1,49,1,49,3,49,
        1173,8,49,1,49,1,49,3,49,1177,8,49,1,49,1,49,3,49,1181,8,49,1,49,
        1,49,3,49,1185,8,49,1,49,1,49,5,49,1189,8,49,10,49,12,49,1192,9,
        49,1,50,1,50,5,50,1196,8,50,10,50,12,50,1199,9,50,1,51,1,51,3,51,
        1203,8,51,1,51,1,51,1,52,1,52,3,52,1209,8,52,1,53,1,53,1,53,3,53,
        1214,8,53,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,
        1,55,1,55,1,55,1,55,3,55,1231,8,55,1,56,1,56,3,56,1235,8,56,1,57,
        1,57,1,57,1,57,1,57,1,57,3,57,1243,8,57,1,58,1,58,1,58,1,58,1,59,
        1,59,1,60,1,60,3,60,1253,8,60,1,60,5,60,1256,8,60,10,60,12,60,1259,
        9,60,1,60,1,60,3,60,1263,8,60,4,60,1265,8,60,11,60,12,60,1266,1,
        60,1,60,1,60,3,60,1272,8,60,1,61,1,61,1,61,1,61,3,61,1278,8,61,1,
        61,1,61,1,61,3,61,1283,8,61,1,61,3,61,1286,8,61,1,62,1,62,3,62,1290,
        8,62,1,63,1,63,3,63,1294,8,63,5,63,1296,8,63,10,63,12,63,1299,9,
        63,1,63,1,63,1,63,3,63,1304,8,63,5,63,1306,8,63,10,63,12,63,1309,
        9,63,1,63,1,63,3,63,1313,8,63,1,63,5,63,1316,8,63,10,63,12,63,1319,
        9,63,1,63,3,63,1322,8,63,1,63,3,63,1325,8,63,3,63,1327,8,63,1,64,
        1,64,3,64,1331,8,64,4,64,1333,8,64,11,64,12,64,1334,1,64,1,64,1,
        65,1,65,3,65,1341,8,65,5,65,1343,8,65,10,65,12,65,1346,9,65,1,65,
        1,65,3,65,1350,8,65,5,65,1352,8,65,10,65,12,65,1355,9,65,1,65,1,
        65,1,66,1,66,1,66,1,66,3,66,1363,8,66,1,67,1,67,1,67,1,67,3,67,1369,
        8,67,1,68,1,68,1,68,1,68,1,68,1,68,3,68,1377,8,68,1,68,1,68,3,68,
        1381,8,68,1,68,1,68,3,68,1385,8,68,1,68,1,68,3,68,1389,8,68,1,68,
        1,68,1,68,1,68,1,68,3,68,1396,8,68,1,68,3,68,1399,8,68,1,68,3,68,
        1402,8,68,1,68,3,68,1405,8,68,1,69,1,69,1,69,1,69,3,69,1411,8,69,
        1,69,3,69,1414,8,69,1,70,1,70,3,70,1418,8,70,1,70,1,70,3,70,1422,
        8,70,1,70,1,70,1,70,3,70,1427,8,70,1,70,1,70,3,70,1431,8,70,1,71,
        1,71,1,71,1,71,1,72,1,72,1,72,3,72,1440,8,72,1,72,1,72,3,72,1444,
        8,72,1,72,1,72,1,72,3,72,1449,8,72,1,72,1,72,1,72,1,72,1,72,1,72,
        1,72,1,72,1,72,1,72,4,72,1461,8,72,11,72,12,72,1462,5,72,1465,8,
        72,10,72,12,72,1468,9,72,1,73,1,73,3,73,1472,8,73,1,73,1,73,1,73,
        1,73,1,73,1,73,1,74,1,74,3,74,1482,8,74,1,74,1,74,1,75,1,75,3,75,
        1488,8,75,1,75,1,75,1,75,5,75,1493,8,75,10,75,12,75,1496,9,75,1,
        76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,1508,8,76,1,
        77,1,77,3,77,1512,8,77,1,77,1,77,3,77,1516,8,77,1,77,1,77,3,77,1520,
        8,77,1,77,5,77,1523,8,77,10,77,12,77,1526,9,77,1,78,1,78,3,78,1530,
        8,78,1,78,1,78,3,78,1534,8,78,1,78,1,78,1,79,1,79,3,79,1540,8,79,
        1,79,1,79,3,79,1544,8,79,1,79,1,79,3,79,1548,8,79,1,79,1,79,3,79,
        1552,8,79,1,79,5,79,1555,8,79,10,79,12,79,1558,9,79,1,80,1,80,1,
        80,3,80,1563,8,80,1,80,3,80,1566,8,80,1,81,1,81,1,81,1,82,3,82,1572,
        8,82,1,82,3,82,1575,8,82,1,82,1,82,1,82,1,82,3,82,1581,8,82,1,82,
        1,82,3,82,1585,8,82,1,82,1,82,3,82,1589,8,82,1,83,1,83,3,83,1593,
        8,83,1,83,1,83,3,83,1597,8,83,1,83,5,83,1600,8,83,10,83,12,83,1603,
        9,83,1,83,1,83,3,83,1607,8,83,1,83,1,83,3,83,1611,8,83,1,83,5,83,
        1614,8,83,10,83,12,83,1617,9,83,3,83,1619,8,83,1,84,1,84,1,84,1,
        84,1,84,1,84,1,84,3,84,1628,8,84,1,85,1,85,1,85,1,85,1,85,1,85,1,
        85,3,85,1637,8,85,1,85,5,85,1640,8,85,10,85,12,85,1643,9,85,1,86,
        1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,88,1,88,3,88,1655,8,88,1,88,
        3,88,1658,8,88,1,89,1,89,1,89,1,89,1,90,1,90,3,90,1666,8,90,1,90,
        1,90,3,90,1670,8,90,1,90,5,90,1673,8,90,10,90,12,90,1676,9,90,1,
        91,1,91,3,91,1680,8,91,1,91,1,91,3,91,1684,8,91,1,91,1,91,1,91,3,
        91,1689,8,91,1,92,1,92,1,93,1,93,3,93,1695,8,93,1,93,5,93,1698,8,
        93,10,93,12,93,1701,9,93,1,93,1,93,1,93,1,93,3,93,1707,8,93,1,94,
        1,94,3,94,1711,8,94,1,94,1,94,3,94,1715,8,94,3,94,1717,8,94,1,94,
        1,94,3,94,1721,8,94,3,94,1723,8,94,1,94,1,94,3,94,1727,8,94,3,94,
        1729,8,94,1,94,1,94,1,95,1,95,3,95,1735,8,95,1,95,1,95,1,96,1,96,
        3,96,1741,8,96,1,96,1,96,3,96,1745,8,96,1,96,3,96,1748,8,96,1,96,
        3,96,1751,8,96,1,96,1,96,1,96,1,96,3,96,1757,8,96,1,96,3,96,1760,
        8,96,1,96,3,96,1763,8,96,1,96,1,96,3,96,1767,8,96,1,96,1,96,1,96,
        1,96,3,96,1773,8,96,1,96,3,96,1776,8,96,1,96,3,96,1779,8,96,1,96,
        1,96,3,96,1783,8,96,1,97,1,97,3,97,1787,8,97,1,97,1,97,3,97,1791,
        8,97,3,97,1793,8,97,1,97,1,97,3,97,1797,8,97,3,97,1799,8,97,1,97,
        1,97,3,97,1803,8,97,3,97,1805,8,97,1,97,1,97,3,97,1809,8,97,3,97,
        1811,8,97,1,97,1,97,1,98,1,98,3,98,1817,8,98,1,98,1,98,3,98,1821,
        8,98,1,98,1,98,3,98,1825,8,98,1,98,1,98,3,98,1829,8,98,1,98,1,98,
        3,98,1833,8,98,1,98,1,98,3,98,1837,8,98,1,98,1,98,3,98,1841,8,98,
        1,98,1,98,3,98,1845,8,98,5,98,1847,8,98,10,98,12,98,1850,9,98,3,
        98,1852,8,98,1,98,1,98,1,99,1,99,3,99,1858,8,99,1,99,1,99,3,99,1862,
        8,99,1,99,1,99,3,99,1866,8,99,1,99,3,99,1869,8,99,1,99,5,99,1872,
        8,99,10,99,12,99,1875,9,99,1,100,1,100,3,100,1879,8,100,1,100,5,
        100,1882,8,100,10,100,12,100,1885,9,100,1,101,1,101,3,101,1889,8,
        101,1,101,1,101,1,102,1,102,3,102,1895,8,102,1,102,1,102,1,102,1,
        102,1,102,1,102,3,102,1903,8,102,1,102,3,102,1906,8,102,1,102,3,
        102,1909,8,102,1,102,3,102,1912,8,102,1,102,1,102,3,102,1916,8,102,
        1,102,3,102,1919,8,102,1,102,3,102,1922,8,102,1,102,3,102,1925,8,
        102,1,102,3,102,1928,8,102,1,103,1,103,3,103,1932,8,103,1,103,1,
        103,3,103,1936,8,103,1,103,1,103,3,103,1940,8,103,1,103,1,103,3,
        103,1944,8,103,1,103,1,103,3,103,1948,8,103,1,103,1,103,3,103,1952,
        8,103,3,103,1954,8,103,1,103,3,103,1957,8,103,1,103,1,103,3,103,
        1961,8,103,1,103,1,103,3,103,1965,8,103,1,103,1,103,3,103,1969,8,
        103,1,103,1,103,3,103,1973,8,103,3,103,1975,8,103,1,103,1,103,1,
        104,1,104,3,104,1981,8,104,1,104,3,104,1984,8,104,1,104,3,104,1987,
        8,104,1,104,1,104,1,105,1,105,3,105,1993,8,105,1,105,3,105,1996,
        8,105,1,105,3,105,1999,8,105,1,105,1,105,1,106,1,106,1,107,1,107,
        1,108,1,108,1,109,1,109,1,110,1,110,1,111,1,111,1,111,1,111,1,111,
        5,111,2018,8,111,10,111,12,111,2021,9,111,1,112,1,112,1,112,1,112,
        1,112,5,112,2028,8,112,10,112,12,112,2031,9,112,1,113,1,113,1,113,
        1,113,1,113,5,113,2038,8,113,10,113,12,113,2041,9,113,1,114,1,114,
        3,114,2045,8,114,5,114,2047,8,114,10,114,12,114,2050,9,114,1,114,
        1,114,1,115,1,115,3,115,2056,8,115,1,115,1,115,3,115,2060,8,115,
        1,115,1,115,3,115,2064,8,115,1,115,1,115,3,115,2068,8,115,1,115,
        1,115,3,115,2072,8,115,1,115,1,115,1,115,1,115,1,115,1,115,3,115,
        2080,8,115,1,115,1,115,3,115,2084,8,115,1,115,1,115,3,115,2088,8,
        115,1,115,1,115,3,115,2092,8,115,1,115,1,115,4,115,2096,8,115,11,
        115,12,115,2097,1,115,1,115,3,115,2102,8,115,1,116,1,116,1,117,1,
        117,3,117,2108,8,117,1,117,1,117,3,117,2112,8,117,1,117,5,117,2115,
        8,117,10,117,12,117,2118,9,117,1,118,1,118,3,118,2122,8,118,1,118,
        1,118,3,118,2126,8,118,1,118,5,118,2129,8,118,10,118,12,118,2132,
        9,118,1,119,1,119,3,119,2136,8,119,1,119,1,119,3,119,2140,8,119,
        1,119,1,119,5,119,2144,8,119,10,119,12,119,2147,9,119,1,120,1,120,
        1,121,1,121,3,121,2153,8,121,1,121,1,121,3,121,2157,8,121,1,121,
        1,121,5,121,2161,8,121,10,121,12,121,2164,9,121,1,122,1,122,1,123,
        1,123,3,123,2170,8,123,1,123,1,123,3,123,2174,8,123,1,123,1,123,
        5,123,2178,8,123,10,123,12,123,2181,9,123,1,124,1,124,1,125,1,125,
        3,125,2187,8,125,1,125,1,125,3,125,2191,8,125,1,125,5,125,2194,8,
        125,10,125,12,125,2197,9,125,1,126,1,126,3,126,2201,8,126,5,126,
        2203,8,126,10,126,12,126,2206,9,126,1,126,1,126,3,126,2210,8,126,
        1,126,3,126,2213,8,126,1,127,1,127,1,127,4,127,2218,8,127,11,127,
        12,127,2219,1,127,3,127,2223,8,127,1,128,1,128,1,128,3,128,2228,
        8,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,3,128,2237,8,128,
        1,128,1,128,3,128,2241,8,128,1,128,3,128,2244,8,128,1,129,1,129,
        1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,3,129,2257,
        8,129,1,129,3,129,2260,8,129,1,129,1,129,1,130,3,130,2265,8,130,
        1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,3,131,2279,8,131,1,132,1,132,3,132,2283,8,132,1,132,5,132,
        2286,8,132,10,132,12,132,2289,9,132,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,3,133,2301,8,133,1,134,1,134,3,134,
        2305,8,134,1,134,1,134,3,134,2309,8,134,1,134,1,134,3,134,2313,8,
        134,1,134,1,134,1,134,1,134,3,134,2319,8,134,1,134,1,134,3,134,2323,
        8,134,1,134,1,134,3,134,2327,8,134,1,134,1,134,1,134,1,134,3,134,
        2333,8,134,1,134,1,134,3,134,2337,8,134,1,134,1,134,3,134,2341,8,
        134,1,134,1,134,1,134,1,134,3,134,2347,8,134,1,134,1,134,3,134,2351,
        8,134,1,134,1,134,3,134,2355,8,134,1,134,1,134,3,134,2359,8,134,
        1,135,1,135,3,135,2363,8,135,1,135,3,135,2366,8,135,1,136,1,136,
        1,136,1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,3,137,
        2380,8,137,1,138,1,138,1,139,1,139,3,139,2386,8,139,1,139,1,139,
        3,139,2390,8,139,1,139,1,139,3,139,2394,8,139,5,139,2396,8,139,10,
        139,12,139,2399,9,139,3,139,2401,8,139,1,139,1,139,1,140,1,140,3,
        140,2407,8,140,1,140,3,140,2410,8,140,1,141,1,141,3,141,2414,8,141,
        1,141,1,141,3,141,2418,8,141,1,141,1,141,3,141,2422,8,141,1,141,
        1,141,3,141,2426,8,141,5,141,2428,8,141,10,141,12,141,2431,9,141,
        1,141,1,141,1,142,1,142,3,142,2437,8,142,1,142,3,142,2440,8,142,
        1,142,1,142,3,142,2444,8,142,1,142,1,142,1,143,1,143,3,143,2450,
        8,143,1,143,1,143,3,143,2454,8,143,1,143,1,143,1,144,1,144,3,144,
        2460,8,144,1,144,1,144,3,144,2464,8,144,1,144,1,144,3,144,2468,8,
        144,1,144,1,144,1,144,3,144,2473,8,144,1,144,1,144,3,144,2477,8,
        144,1,144,1,144,3,144,2481,8,144,1,144,1,144,3,144,2485,8,144,1,
        144,1,144,1,144,3,144,2490,8,144,1,144,3,144,2493,8,144,1,144,3,
        144,2496,8,144,1,144,1,144,1,144,1,144,3,144,2502,8,144,1,144,1,
        144,3,144,2506,8,144,1,144,1,144,3,144,2510,8,144,3,144,2512,8,144,
        1,144,1,144,3,144,2516,8,144,1,144,1,144,3,144,2520,8,144,1,144,
        1,144,3,144,2524,8,144,5,144,2526,8,144,10,144,12,144,2529,9,144,
        3,144,2531,8,144,1,144,1,144,3,144,2535,8,144,1,145,1,145,1,146,
        1,146,3,146,2541,8,146,1,146,1,146,1,146,3,146,2546,8,146,3,146,
        2548,8,146,1,146,1,146,3,146,2552,8,146,1,147,1,147,3,147,2556,8,
        147,1,147,1,147,1,147,3,147,2561,8,147,1,147,1,147,3,147,2565,8,
        147,1,148,1,148,1,148,3,148,2570,8,148,1,148,1,148,3,148,2574,8,
        148,1,148,1,148,3,148,2578,8,148,1,148,1,148,3,148,2582,8,148,5,
        148,2584,8,148,10,148,12,148,2587,9,148,1,148,1,148,3,148,2591,8,
        148,1,149,1,149,3,149,2595,8,149,1,149,4,149,2598,8,149,11,149,12,
        149,2599,1,150,1,150,3,150,2604,8,150,1,150,1,150,3,150,2608,8,150,
        1,150,1,150,3,150,2612,8,150,1,150,1,150,3,150,2616,8,150,1,150,
        3,150,2619,8,150,1,150,3,150,2622,8,150,1,150,1,150,1,151,1,151,
        3,151,2628,8,151,1,151,1,151,3,151,2632,8,151,1,151,1,151,3,151,
        2636,8,151,1,151,1,151,3,151,2640,8,151,1,151,3,151,2643,8,151,1,
        151,3,151,2646,8,151,1,151,1,151,1,152,1,152,3,152,2652,8,152,1,
        152,1,152,3,152,2656,8,152,1,153,1,153,3,153,2660,8,153,1,153,4,
        153,2663,8,153,11,153,12,153,2664,1,153,1,153,3,153,2669,8,153,1,
        153,1,153,3,153,2673,8,153,1,153,4,153,2676,8,153,11,153,12,153,
        2677,3,153,2680,8,153,1,153,3,153,2683,8,153,1,153,1,153,3,153,2687,
        8,153,1,153,3,153,2690,8,153,1,153,3,153,2693,8,153,1,153,1,153,
        1,154,1,154,3,154,2699,8,154,1,154,1,154,3,154,2703,8,154,1,154,
        1,154,3,154,2707,8,154,1,154,1,154,1,155,1,155,1,156,1,156,3,156,
        2715,8,156,1,157,1,157,1,157,3,157,2720,8,157,1,158,1,158,3,158,
        2724,8,158,1,158,1,158,1,159,1,159,1,160,1,160,1,161,1,161,1,162,
        1,162,1,163,1,163,1,163,1,163,1,163,3,163,2741,8,163,1,164,1,164,
        1,165,1,165,1,166,1,166,1,167,1,167,1,167,0,2,98,144,168,0,2,4,6,
        8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
        52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
        96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,
        130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,
        162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,
        194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,
        226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,
        258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,
        290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,
        322,324,326,328,330,332,334,0,12,2,0,130,130,135,135,2,0,53,54,75,
        76,2,0,6,6,13,17,1,0,19,20,2,0,21,21,155,155,2,0,22,23,152,152,2,
        0,87,87,140,140,1,0,167,168,28,0,48,48,50,50,52,52,55,58,61,61,63,
        64,66,68,70,71,74,74,77,77,79,79,84,86,90,90,94,95,97,97,99,99,101,
        104,106,109,111,112,123,128,130,131,133,133,139,139,141,141,144,
        144,148,148,151,151,153,153,2,0,14,14,27,30,2,0,16,16,31,34,2,0,
        35,45,155,155,3121,0,336,1,0,0,0,2,356,1,0,0,0,4,389,1,0,0,0,6,391,
        1,0,0,0,8,413,1,0,0,0,10,455,1,0,0,0,12,457,1,0,0,0,14,487,1,0,0,
        0,16,508,1,0,0,0,18,519,1,0,0,0,20,525,1,0,0,0,22,576,1,0,0,0,24,
        578,1,0,0,0,26,592,1,0,0,0,28,596,1,0,0,0,30,615,1,0,0,0,32,617,
        1,0,0,0,34,629,1,0,0,0,36,672,1,0,0,0,38,686,1,0,0,0,40,730,1,0,
        0,0,42,732,1,0,0,0,44,742,1,0,0,0,46,748,1,0,0,0,48,783,1,0,0,0,
        50,828,1,0,0,0,52,887,1,0,0,0,54,895,1,0,0,0,56,912,1,0,0,0,58,929,
        1,0,0,0,60,931,1,0,0,0,62,951,1,0,0,0,64,962,1,0,0,0,66,964,1,0,
        0,0,68,977,1,0,0,0,70,981,1,0,0,0,72,985,1,0,0,0,74,996,1,0,0,0,
        76,1008,1,0,0,0,78,1010,1,0,0,0,80,1024,1,0,0,0,82,1028,1,0,0,0,
        84,1037,1,0,0,0,86,1043,1,0,0,0,88,1051,1,0,0,0,90,1065,1,0,0,0,
        92,1069,1,0,0,0,94,1083,1,0,0,0,96,1094,1,0,0,0,98,1184,1,0,0,0,
        100,1193,1,0,0,0,102,1200,1,0,0,0,104,1208,1,0,0,0,106,1210,1,0,
        0,0,108,1215,1,0,0,0,110,1230,1,0,0,0,112,1234,1,0,0,0,114,1236,
        1,0,0,0,116,1244,1,0,0,0,118,1248,1,0,0,0,120,1271,1,0,0,0,122,1285,
        1,0,0,0,124,1289,1,0,0,0,126,1326,1,0,0,0,128,1332,1,0,0,0,130,1344,
        1,0,0,0,132,1362,1,0,0,0,134,1368,1,0,0,0,136,1370,1,0,0,0,138,1406,
        1,0,0,0,140,1417,1,0,0,0,142,1432,1,0,0,0,144,1448,1,0,0,0,146,1469,
        1,0,0,0,148,1479,1,0,0,0,150,1485,1,0,0,0,152,1507,1,0,0,0,154,1509,
        1,0,0,0,156,1527,1,0,0,0,158,1539,1,0,0,0,160,1559,1,0,0,0,162,1567,
        1,0,0,0,164,1574,1,0,0,0,166,1618,1,0,0,0,168,1627,1,0,0,0,170,1629,
        1,0,0,0,172,1644,1,0,0,0,174,1648,1,0,0,0,176,1652,1,0,0,0,178,1659,
        1,0,0,0,180,1663,1,0,0,0,182,1688,1,0,0,0,184,1690,1,0,0,0,186,1706,
        1,0,0,0,188,1708,1,0,0,0,190,1732,1,0,0,0,192,1782,1,0,0,0,194,1784,
        1,0,0,0,196,1814,1,0,0,0,198,1855,1,0,0,0,200,1876,1,0,0,0,202,1886,
        1,0,0,0,204,1892,1,0,0,0,206,1929,1,0,0,0,208,1978,1,0,0,0,210,1990,
        1,0,0,0,212,2002,1,0,0,0,214,2004,1,0,0,0,216,2006,1,0,0,0,218,2008,
        1,0,0,0,220,2010,1,0,0,0,222,2012,1,0,0,0,224,2022,1,0,0,0,226,2032,
        1,0,0,0,228,2048,1,0,0,0,230,2101,1,0,0,0,232,2103,1,0,0,0,234,2105,
        1,0,0,0,236,2119,1,0,0,0,238,2133,1,0,0,0,240,2148,1,0,0,0,242,2150,
        1,0,0,0,244,2165,1,0,0,0,246,2167,1,0,0,0,248,2182,1,0,0,0,250,2184,
        1,0,0,0,252,2204,1,0,0,0,254,2214,1,0,0,0,256,2243,1,0,0,0,258,2256,
        1,0,0,0,260,2264,1,0,0,0,262,2278,1,0,0,0,264,2280,1,0,0,0,266,2300,
        1,0,0,0,268,2358,1,0,0,0,270,2360,1,0,0,0,272,2367,1,0,0,0,274,2379,
        1,0,0,0,276,2381,1,0,0,0,278,2383,1,0,0,0,280,2404,1,0,0,0,282,2411,
        1,0,0,0,284,2436,1,0,0,0,286,2447,1,0,0,0,288,2534,1,0,0,0,290,2536,
        1,0,0,0,292,2551,1,0,0,0,294,2553,1,0,0,0,296,2590,1,0,0,0,298,2592,
        1,0,0,0,300,2601,1,0,0,0,302,2625,1,0,0,0,304,2649,1,0,0,0,306,2679,
        1,0,0,0,308,2696,1,0,0,0,310,2710,1,0,0,0,312,2714,1,0,0,0,314,2716,
        1,0,0,0,316,2721,1,0,0,0,318,2727,1,0,0,0,320,2729,1,0,0,0,322,2731,
        1,0,0,0,324,2733,1,0,0,0,326,2740,1,0,0,0,328,2742,1,0,0,0,330,2744,
        1,0,0,0,332,2746,1,0,0,0,334,2748,1,0,0,0,336,347,3,2,1,0,337,339,
        5,173,0,0,338,337,1,0,0,0,338,339,1,0,0,0,339,340,1,0,0,0,340,342,
        5,1,0,0,341,343,5,173,0,0,342,341,1,0,0,0,342,343,1,0,0,0,343,344,
        1,0,0,0,344,346,3,2,1,0,345,338,1,0,0,0,346,349,1,0,0,0,347,345,
        1,0,0,0,347,348,1,0,0,0,348,351,1,0,0,0,349,347,1,0,0,0,350,352,
        5,173,0,0,351,350,1,0,0,0,351,352,1,0,0,0,352,353,1,0,0,0,353,354,
        5,0,0,1,354,1,1,0,0,0,355,357,3,104,52,0,356,355,1,0,0,0,356,357,
        1,0,0,0,357,359,1,0,0,0,358,360,5,173,0,0,359,358,1,0,0,0,359,360,
        1,0,0,0,360,361,1,0,0,0,361,366,3,4,2,0,362,364,5,173,0,0,363,362,
        1,0,0,0,363,364,1,0,0,0,364,365,1,0,0,0,365,367,5,1,0,0,366,363,
        1,0,0,0,366,367,1,0,0,0,367,3,1,0,0,0,368,390,3,118,59,0,369,390,
        3,46,23,0,370,390,3,48,24,0,371,390,3,50,25,0,372,390,3,54,27,0,
        373,390,3,56,28,0,374,390,3,72,36,0,375,390,3,74,37,0,376,390,3,
        6,3,0,377,390,3,12,6,0,378,390,3,14,7,0,379,390,3,30,15,0,380,390,
        3,34,17,0,381,390,3,32,16,0,382,390,3,110,55,0,383,390,3,112,56,
        0,384,390,3,16,8,0,385,390,3,18,9,0,386,390,3,20,10,0,387,390,3,
        26,13,0,388,390,3,28,14,0,389,368,1,0,0,0,389,369,1,0,0,0,389,370,
        1,0,0,0,389,371,1,0,0,0,389,372,1,0,0,0,389,373,1,0,0,0,389,374,
        1,0,0,0,389,375,1,0,0,0,389,376,1,0,0,0,389,377,1,0,0,0,389,378,
        1,0,0,0,389,379,1,0,0,0,389,380,1,0,0,0,389,381,1,0,0,0,389,382,
        1,0,0,0,389,383,1,0,0,0,389,384,1,0,0,0,389,385,1,0,0,0,389,386,
        1,0,0,0,389,387,1,0,0,0,389,388,1,0,0,0,390,5,1,0,0,0,391,392,5,
        67,0,0,392,393,5,173,0,0,393,402,3,324,162,0,394,396,5,173,0,0,395,
        394,1,0,0,0,395,396,1,0,0,0,396,397,1,0,0,0,397,399,3,8,4,0,398,
        400,5,173,0,0,399,398,1,0,0,0,399,400,1,0,0,0,400,403,1,0,0,0,401,
        403,5,173,0,0,402,395,1,0,0,0,402,401,1,0,0,0,403,404,1,0,0,0,404,
        405,5,88,0,0,405,406,5,173,0,0,406,411,3,10,5,0,407,409,5,173,0,
        0,408,407,1,0,0,0,408,409,1,0,0,0,409,410,1,0,0,0,410,412,3,42,21,
        0,411,408,1,0,0,0,411,412,1,0,0,0,412,7,1,0,0,0,413,415,5,2,0,0,
        414,416,5,173,0,0,415,414,1,0,0,0,415,416,1,0,0,0,416,417,1,0,0,
        0,417,428,3,324,162,0,418,420,5,173,0,0,419,418,1,0,0,0,419,420,
        1,0,0,0,420,421,1,0,0,0,421,423,5,3,0,0,422,424,5,173,0,0,423,422,
        1,0,0,0,423,424,1,0,0,0,424,425,1,0,0,0,425,427,3,324,162,0,426,
        419,1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,
        432,1,0,0,0,430,428,1,0,0,0,431,433,5,173,0,0,432,431,1,0,0,0,432,
        433,1,0,0,0,433,434,1,0,0,0,434,435,5,4,0,0,435,9,1,0,0,0,436,456,
        3,40,20,0,437,439,5,2,0,0,438,440,5,173,0,0,439,438,1,0,0,0,439,
        440,1,0,0,0,440,441,1,0,0,0,441,443,3,118,59,0,442,444,5,173,0,0,
        443,442,1,0,0,0,443,444,1,0,0,0,444,445,1,0,0,0,445,446,5,4,0,0,
        446,456,1,0,0,0,447,456,3,310,155,0,448,449,3,310,155,0,449,451,
        5,5,0,0,450,452,5,173,0,0,451,450,1,0,0,0,451,452,1,0,0,0,452,453,
        1,0,0,0,453,454,3,324,162,0,454,456,1,0,0,0,455,436,1,0,0,0,455,
        437,1,0,0,0,455,447,1,0,0,0,455,448,1,0,0,0,456,11,1,0,0,0,457,458,
        5,67,0,0,458,459,5,173,0,0,459,460,3,324,162,0,460,461,5,173,0,0,
        461,462,5,88,0,0,462,463,5,173,0,0,463,465,5,2,0,0,464,466,5,173,
        0,0,465,464,1,0,0,0,465,466,1,0,0,0,466,467,1,0,0,0,467,478,5,158,
        0,0,468,470,5,173,0,0,469,468,1,0,0,0,469,470,1,0,0,0,470,471,1,
        0,0,0,471,473,5,3,0,0,472,474,5,173,0,0,473,472,1,0,0,0,473,474,
        1,0,0,0,474,475,1,0,0,0,475,477,5,158,0,0,476,469,1,0,0,0,477,480,
        1,0,0,0,478,476,1,0,0,0,478,479,1,0,0,0,479,481,1,0,0,0,480,478,
        1,0,0,0,481,482,5,4,0,0,482,483,5,173,0,0,483,484,5,57,0,0,484,485,
        5,173,0,0,485,486,5,62,0,0,486,13,1,0,0,0,487,488,5,67,0,0,488,489,
        5,173,0,0,489,491,5,2,0,0,490,492,5,173,0,0,491,490,1,0,0,0,491,
        492,1,0,0,0,492,493,1,0,0,0,493,495,3,118,59,0,494,496,5,173,0,0,
        495,494,1,0,0,0,495,496,1,0,0,0,496,497,1,0,0,0,497,498,5,4,0,0,
        498,499,5,173,0,0,499,500,5,137,0,0,500,501,5,173,0,0,501,506,5,
        158,0,0,502,504,5,173,0,0,503,502,1,0,0,0,503,504,1,0,0,0,504,505,
        1,0,0,0,505,507,3,42,21,0,506,503,1,0,0,0,506,507,1,0,0,0,507,15,
        1,0,0,0,508,509,5,85,0,0,509,510,5,173,0,0,510,511,5,71,0,0,511,
        512,5,173,0,0,512,517,5,158,0,0,513,515,5,173,0,0,514,513,1,0,0,
        0,514,515,1,0,0,0,515,516,1,0,0,0,516,518,3,42,21,0,517,514,1,0,
        0,0,517,518,1,0,0,0,518,17,1,0,0,0,519,520,5,94,0,0,520,521,5,173,
        0,0,521,522,5,71,0,0,522,523,5,173,0,0,523,524,5,158,0,0,524,19,
        1,0,0,0,525,526,5,55,0,0,526,527,5,173,0,0,527,532,5,158,0,0,528,
        529,5,173,0,0,529,530,5,52,0,0,530,531,5,173,0,0,531,533,3,324,162,
        0,532,528,1,0,0,0,532,533,1,0,0,0,533,534,1,0,0,0,534,535,5,173,
        0,0,535,537,5,2,0,0,536,538,5,173,0,0,537,536,1,0,0,0,537,538,1,
        0,0,0,538,539,1,0,0,0,539,540,5,72,0,0,540,541,5,173,0,0,541,550,
        3,326,163,0,542,544,5,173,0,0,543,542,1,0,0,0,543,544,1,0,0,0,544,
        545,1,0,0,0,545,547,5,3,0,0,546,548,5,173,0,0,547,546,1,0,0,0,547,
        548,1,0,0,0,548,549,1,0,0,0,549,551,3,24,12,0,550,543,1,0,0,0,550,
        551,1,0,0,0,551,553,1,0,0,0,552,554,5,173,0,0,553,552,1,0,0,0,553,
        554,1,0,0,0,554,555,1,0,0,0,555,556,5,4,0,0,556,21,1,0,0,0,557,571,
        3,326,163,0,558,560,5,173,0,0,559,558,1,0,0,0,559,560,1,0,0,0,560,
        561,1,0,0,0,561,563,5,6,0,0,562,564,5,173,0,0,563,562,1,0,0,0,563,
        564,1,0,0,0,564,572,1,0,0,0,565,567,5,173,0,0,566,565,1,0,0,0,567,
        570,1,0,0,0,568,566,1,0,0,0,568,569,1,0,0,0,569,572,1,0,0,0,570,
        568,1,0,0,0,571,559,1,0,0,0,571,568,1,0,0,0,572,573,1,0,0,0,573,
        574,3,274,137,0,574,577,1,0,0,0,575,577,3,326,163,0,576,557,1,0,
        0,0,576,575,1,0,0,0,577,23,1,0,0,0,578,589,3,22,11,0,579,581,5,173,
        0,0,580,579,1,0,0,0,580,581,1,0,0,0,581,582,1,0,0,0,582,584,5,3,
        0,0,583,585,5,173,0,0,584,583,1,0,0,0,584,585,1,0,0,0,585,586,1,
        0,0,0,586,588,3,22,11,0,587,580,1,0,0,0,588,591,1,0,0,0,589,587,
        1,0,0,0,589,590,1,0,0,0,590,25,1,0,0,0,591,589,1,0,0,0,592,593,5,
        77,0,0,593,594,5,173,0,0,594,595,3,324,162,0,595,27,1,0,0,0,596,
        597,5,144,0,0,597,598,5,173,0,0,598,599,3,324,162,0,599,29,1,0,0,
        0,600,601,5,58,0,0,601,602,5,173,0,0,602,604,3,326,163,0,603,605,
        5,173,0,0,604,603,1,0,0,0,604,605,1,0,0,0,605,606,1,0,0,0,606,608,
        5,6,0,0,607,609,5,173,0,0,608,607,1,0,0,0,608,609,1,0,0,0,609,610,
        1,0,0,0,610,611,3,220,110,0,611,616,1,0,0,0,612,613,5,58,0,0,613,
        614,5,173,0,0,614,616,3,288,144,0,615,600,1,0,0,0,615,612,1,0,0,
        0,616,31,1,0,0,0,617,618,5,63,0,0,618,619,5,173,0,0,619,620,5,116,
        0,0,620,621,5,173,0,0,621,622,5,135,0,0,622,623,5,173,0,0,623,624,
        3,324,162,0,624,625,5,173,0,0,625,626,5,99,0,0,626,627,5,173,0,0,
        627,628,5,158,0,0,628,33,1,0,0,0,629,630,5,69,0,0,630,631,5,173,
        0,0,631,632,5,105,0,0,632,633,5,173,0,0,633,635,3,290,145,0,634,
        636,5,173,0,0,635,634,1,0,0,0,635,636,1,0,0,0,636,637,1,0,0,0,637,
        639,5,2,0,0,638,640,5,173,0,0,639,638,1,0,0,0,639,640,1,0,0,0,640,
        642,1,0,0,0,641,643,3,36,18,0,642,641,1,0,0,0,642,643,1,0,0,0,643,
        645,1,0,0,0,644,646,5,173,0,0,645,644,1,0,0,0,645,646,1,0,0,0,646,
        648,1,0,0,0,647,649,3,38,19,0,648,647,1,0,0,0,648,649,1,0,0,0,649,
        660,1,0,0,0,650,652,5,173,0,0,651,650,1,0,0,0,651,652,1,0,0,0,652,
        653,1,0,0,0,653,655,5,3,0,0,654,656,5,173,0,0,655,654,1,0,0,0,655,
        656,1,0,0,0,656,657,1,0,0,0,657,659,3,38,19,0,658,651,1,0,0,0,659,
        662,1,0,0,0,660,658,1,0,0,0,660,661,1,0,0,0,661,664,1,0,0,0,662,
        660,1,0,0,0,663,665,5,173,0,0,664,663,1,0,0,0,664,665,1,0,0,0,665,
        666,1,0,0,0,666,667,5,4,0,0,667,668,5,173,0,0,668,669,5,52,0,0,669,
        670,5,173,0,0,670,671,3,220,110,0,671,35,1,0,0,0,672,683,3,326,163,
        0,673,675,5,173,0,0,674,673,1,0,0,0,674,675,1,0,0,0,675,676,1,0,
        0,0,676,678,5,3,0,0,677,679,5,173,0,0,678,677,1,0,0,0,678,679,1,
        0,0,0,679,680,1,0,0,0,680,682,3,326,163,0,681,674,1,0,0,0,682,685,
        1,0,0,0,683,681,1,0,0,0,683,684,1,0,0,0,684,37,1,0,0,0,685,683,1,
        0,0,0,686,688,3,326,163,0,687,689,5,173,0,0,688,687,1,0,0,0,688,
        689,1,0,0,0,689,690,1,0,0,0,690,691,5,157,0,0,691,693,5,6,0,0,692,
        694,5,173,0,0,693,692,1,0,0,0,693,694,1,0,0,0,694,695,1,0,0,0,695,
        696,3,274,137,0,696,39,1,0,0,0,697,699,5,7,0,0,698,700,5,173,0,0,
        699,698,1,0,0,0,699,700,1,0,0,0,700,701,1,0,0,0,701,712,5,158,0,
        0,702,704,5,173,0,0,703,702,1,0,0,0,703,704,1,0,0,0,704,705,1,0,
        0,0,705,707,5,3,0,0,706,708,5,173,0,0,707,706,1,0,0,0,707,708,1,
        0,0,0,708,709,1,0,0,0,709,711,5,158,0,0,710,703,1,0,0,0,711,714,
        1,0,0,0,712,710,1,0,0,0,712,713,1,0,0,0,713,715,1,0,0,0,714,712,
        1,0,0,0,715,731,5,8,0,0,716,731,5,158,0,0,717,719,5,89,0,0,718,720,
        5,173,0,0,719,718,1,0,0,0,719,720,1,0,0,0,720,721,1,0,0,0,721,723,
        5,2,0,0,722,724,5,173,0,0,723,722,1,0,0,0,723,724,1,0,0,0,724,725,
        1,0,0,0,725,727,5,158,0,0,726,728,5,173,0,0,727,726,1,0,0,0,727,
        728,1,0,0,0,728,729,1,0,0,0,729,731,5,4,0,0,730,697,1,0,0,0,730,
        716,1,0,0,0,730,717,1,0,0,0,731,41,1,0,0,0,732,734,5,2,0,0,733,735,
        5,173,0,0,734,733,1,0,0,0,734,735,1,0,0,0,735,736,1,0,0,0,736,738,
        3,24,12,0,737,739,5,173,0,0,738,737,1,0,0,0,738,739,1,0,0,0,739,
        740,1,0,0,0,740,741,5,4,0,0,741,43,1,0,0,0,742,743,5,95,0,0,743,
        744,5,173,0,0,744,745,5,113,0,0,745,746,5,173,0,0,746,747,5,83,0,
        0,747,45,1,0,0,0,748,749,5,69,0,0,749,750,5,173,0,0,750,751,5,112,
        0,0,751,752,5,173,0,0,752,753,5,135,0,0,753,757,5,173,0,0,754,755,
        3,44,22,0,755,756,5,173,0,0,756,758,1,0,0,0,757,754,1,0,0,0,757,
        758,1,0,0,0,758,759,1,0,0,0,759,761,3,324,162,0,760,762,5,173,0,
        0,761,760,1,0,0,0,761,762,1,0,0,0,762,763,1,0,0,0,763,765,5,2,0,
        0,764,766,5,173,0,0,765,764,1,0,0,0,765,766,1,0,0,0,766,767,1,0,
        0,0,767,769,3,92,46,0,768,770,5,173,0,0,769,768,1,0,0,0,769,770,
        1,0,0,0,770,776,1,0,0,0,771,773,5,3,0,0,772,774,5,173,0,0,773,772,
        1,0,0,0,773,774,1,0,0,0,774,775,1,0,0,0,775,777,3,96,48,0,776,771,
        1,0,0,0,776,777,1,0,0,0,777,779,1,0,0,0,778,780,5,173,0,0,779,778,
        1,0,0,0,779,780,1,0,0,0,780,781,1,0,0,0,781,782,5,4,0,0,782,47,1,
        0,0,0,783,784,5,69,0,0,784,785,5,173,0,0,785,786,5,125,0,0,786,787,
        5,173,0,0,787,788,5,135,0,0,788,792,5,173,0,0,789,790,3,44,22,0,
        790,791,5,173,0,0,791,793,1,0,0,0,792,789,1,0,0,0,792,793,1,0,0,
        0,793,794,1,0,0,0,794,796,3,324,162,0,795,797,5,173,0,0,796,795,
        1,0,0,0,796,797,1,0,0,0,797,798,1,0,0,0,798,800,5,2,0,0,799,801,
        5,173,0,0,800,799,1,0,0,0,800,801,1,0,0,0,801,802,1,0,0,0,802,804,
        3,52,26,0,803,805,5,173,0,0,804,803,1,0,0,0,804,805,1,0,0,0,805,
        814,1,0,0,0,806,808,5,3,0,0,807,809,5,173,0,0,808,807,1,0,0,0,808,
        809,1,0,0,0,809,810,1,0,0,0,810,812,3,92,46,0,811,813,5,173,0,0,
        812,811,1,0,0,0,812,813,1,0,0,0,813,815,1,0,0,0,814,806,1,0,0,0,
        814,815,1,0,0,0,815,824,1,0,0,0,816,818,5,3,0,0,817,819,5,173,0,
        0,818,817,1,0,0,0,818,819,1,0,0,0,819,820,1,0,0,0,820,822,3,326,
        163,0,821,823,5,173,0,0,822,821,1,0,0,0,822,823,1,0,0,0,823,825,
        1,0,0,0,824,816,1,0,0,0,824,825,1,0,0,0,825,826,1,0,0,0,826,827,
        5,4,0,0,827,49,1,0,0,0,828,829,5,69,0,0,829,830,5,173,0,0,830,831,
        5,125,0,0,831,832,5,173,0,0,832,833,5,135,0,0,833,834,5,173,0,0,
        834,835,5,91,0,0,835,839,5,173,0,0,836,837,3,44,22,0,837,838,5,173,
        0,0,838,840,1,0,0,0,839,836,1,0,0,0,839,840,1,0,0,0,840,841,1,0,
        0,0,841,843,3,324,162,0,842,844,5,173,0,0,843,842,1,0,0,0,843,844,
        1,0,0,0,844,845,1,0,0,0,845,847,5,2,0,0,846,848,5,173,0,0,847,846,
        1,0,0,0,847,848,1,0,0,0,848,849,1,0,0,0,849,858,3,52,26,0,850,852,
        5,173,0,0,851,850,1,0,0,0,851,852,1,0,0,0,852,853,1,0,0,0,853,855,
        5,3,0,0,854,856,5,173,0,0,855,854,1,0,0,0,855,856,1,0,0,0,856,857,
        1,0,0,0,857,859,3,52,26,0,858,851,1,0,0,0,859,860,1,0,0,0,860,858,
        1,0,0,0,860,861,1,0,0,0,861,863,1,0,0,0,862,864,5,173,0,0,863,862,
        1,0,0,0,863,864,1,0,0,0,864,873,1,0,0,0,865,867,5,3,0,0,866,868,
        5,173,0,0,867,866,1,0,0,0,867,868,1,0,0,0,868,869,1,0,0,0,869,871,
        3,92,46,0,870,872,5,173,0,0,871,870,1,0,0,0,871,872,1,0,0,0,872,
        874,1,0,0,0,873,865,1,0,0,0,873,874,1,0,0,0,874,883,1,0,0,0,875,
        877,5,3,0,0,876,878,5,173,0,0,877,876,1,0,0,0,877,878,1,0,0,0,878,
        879,1,0,0,0,879,881,3,326,163,0,880,882,5,173,0,0,881,880,1,0,0,
        0,881,882,1,0,0,0,882,884,1,0,0,0,883,875,1,0,0,0,883,884,1,0,0,
        0,884,885,1,0,0,0,885,886,5,4,0,0,886,51,1,0,0,0,887,888,5,88,0,
        0,888,889,5,173,0,0,889,890,3,324,162,0,890,891,5,173,0,0,891,892,
        5,137,0,0,892,893,5,173,0,0,893,894,3,324,162,0,894,53,1,0,0,0,895,
        896,5,69,0,0,896,897,5,173,0,0,897,898,5,130,0,0,898,902,5,173,0,
        0,899,900,3,44,22,0,900,901,5,173,0,0,901,903,1,0,0,0,902,899,1,
        0,0,0,902,903,1,0,0,0,903,904,1,0,0,0,904,909,3,324,162,0,905,906,
        5,173,0,0,906,908,3,58,29,0,907,905,1,0,0,0,908,911,1,0,0,0,909,
        907,1,0,0,0,909,910,1,0,0,0,910,55,1,0,0,0,911,909,1,0,0,0,912,913,
        5,69,0,0,913,914,5,173,0,0,914,915,5,141,0,0,915,916,5,173,0,0,916,
        917,3,324,162,0,917,918,5,173,0,0,918,919,5,52,0,0,919,920,5,173,
        0,0,920,922,3,98,49,0,921,923,5,173,0,0,922,921,1,0,0,0,922,923,
        1,0,0,0,923,57,1,0,0,0,924,930,3,60,30,0,925,930,3,62,31,0,926,930,
        3,64,32,0,927,930,3,66,33,0,928,930,3,68,34,0,929,924,1,0,0,0,929,
        925,1,0,0,0,929,926,1,0,0,0,929,927,1,0,0,0,929,928,1,0,0,0,930,
        59,1,0,0,0,931,932,5,97,0,0,932,935,5,173,0,0,933,934,5,57,0,0,934,
        936,5,173,0,0,935,933,1,0,0,0,935,936,1,0,0,0,936,938,1,0,0,0,937,
        939,5,155,0,0,938,937,1,0,0,0,938,939,1,0,0,0,939,940,1,0,0,0,940,
        941,3,320,160,0,941,61,1,0,0,0,942,943,5,111,0,0,943,944,5,173,0,
        0,944,952,5,109,0,0,945,946,5,109,0,0,946,948,5,173,0,0,947,949,
        5,155,0,0,948,947,1,0,0,0,948,949,1,0,0,0,949,950,1,0,0,0,950,952,
        3,320,160,0,951,942,1,0,0,0,951,945,1,0,0,0,952,63,1,0,0,0,953,954,
        5,111,0,0,954,955,5,173,0,0,955,963,5,107,0,0,956,957,5,107,0,0,
        957,959,5,173,0,0,958,960,5,155,0,0,959,958,1,0,0,0,959,960,1,0,
        0,0,960,961,1,0,0,0,961,963,3,320,160,0,962,953,1,0,0,0,962,956,
        1,0,0,0,963,65,1,0,0,0,964,965,5,133,0,0,965,968,5,173,0,0,966,967,
        5,147,0,0,967,969,5,173,0,0,968,966,1,0,0,0,968,969,1,0,0,0,969,
        971,1,0,0,0,970,972,5,155,0,0,971,970,1,0,0,0,971,972,1,0,0,0,972,
        973,1,0,0,0,973,974,3,320,160,0,974,67,1,0,0,0,975,976,5,111,0,0,
        976,978,5,173,0,0,977,975,1,0,0,0,977,978,1,0,0,0,978,979,1,0,0,
        0,979,980,5,70,0,0,980,69,1,0,0,0,981,982,5,95,0,0,982,983,5,173,
        0,0,983,984,5,83,0,0,984,71,1,0,0,0,985,986,5,79,0,0,986,987,5,173,
        0,0,987,988,7,0,0,0,988,992,5,173,0,0,989,990,3,70,35,0,990,991,
        5,173,0,0,991,993,1,0,0,0,992,989,1,0,0,0,992,993,1,0,0,0,993,994,
        1,0,0,0,994,995,3,324,162,0,995,73,1,0,0,0,996,997,5,50,0,0,997,
        998,5,173,0,0,998,999,5,135,0,0,999,1000,5,173,0,0,1000,1001,3,324,
        162,0,1001,1002,5,173,0,0,1002,1003,3,76,38,0,1003,75,1,0,0,0,1004,
        1009,3,78,39,0,1005,1009,3,82,41,0,1006,1009,3,84,42,0,1007,1009,
        3,86,43,0,1008,1004,1,0,0,0,1008,1005,1,0,0,0,1008,1006,1,0,0,0,
        1008,1007,1,0,0,0,1009,77,1,0,0,0,1010,1011,5,48,0,0,1011,1015,5,
        173,0,0,1012,1013,3,44,22,0,1013,1014,5,173,0,0,1014,1016,1,0,0,
        0,1015,1012,1,0,0,0,1015,1016,1,0,0,0,1016,1017,1,0,0,0,1017,1018,
        3,318,159,0,1018,1019,5,173,0,0,1019,1022,3,98,49,0,1020,1021,5,
        173,0,0,1021,1023,3,80,40,0,1022,1020,1,0,0,0,1022,1023,1,0,0,0,
        1023,79,1,0,0,0,1024,1025,5,73,0,0,1025,1026,5,173,0,0,1026,1027,
        3,220,110,0,1027,81,1,0,0,0,1028,1029,5,79,0,0,1029,1033,5,173,0,
        0,1030,1031,3,70,35,0,1031,1032,5,173,0,0,1032,1034,1,0,0,0,1033,
        1030,1,0,0,0,1033,1034,1,0,0,0,1034,1035,1,0,0,0,1035,1036,3,318,
        159,0,1036,83,1,0,0,0,1037,1038,5,126,0,0,1038,1039,5,173,0,0,1039,
        1040,5,137,0,0,1040,1041,5,173,0,0,1041,1042,3,324,162,0,1042,85,
        1,0,0,0,1043,1044,5,126,0,0,1044,1045,5,173,0,0,1045,1046,3,318,
        159,0,1046,1047,5,173,0,0,1047,1048,5,137,0,0,1048,1049,5,173,0,
        0,1049,1050,3,318,159,0,1050,87,1,0,0,0,1051,1062,3,90,45,0,1052,
        1054,5,173,0,0,1053,1052,1,0,0,0,1053,1054,1,0,0,0,1054,1055,1,0,
        0,0,1055,1057,5,3,0,0,1056,1058,5,173,0,0,1057,1056,1,0,0,0,1057,
        1058,1,0,0,0,1058,1059,1,0,0,0,1059,1061,3,90,45,0,1060,1053,1,0,
        0,0,1061,1064,1,0,0,0,1062,1060,1,0,0,0,1062,1063,1,0,0,0,1063,89,
        1,0,0,0,1064,1062,1,0,0,0,1065,1066,3,318,159,0,1066,1067,5,173,
        0,0,1067,1068,3,98,49,0,1068,91,1,0,0,0,1069,1080,3,94,47,0,1070,
        1072,5,173,0,0,1071,1070,1,0,0,0,1071,1072,1,0,0,0,1072,1073,1,0,
        0,0,1073,1075,5,3,0,0,1074,1076,5,173,0,0,1075,1074,1,0,0,0,1075,
        1076,1,0,0,0,1076,1077,1,0,0,0,1077,1079,3,94,47,0,1078,1071,1,0,
        0,0,1079,1082,1,0,0,0,1080,1078,1,0,0,0,1080,1081,1,0,0,0,1081,93,
        1,0,0,0,1082,1080,1,0,0,0,1083,1086,3,90,45,0,1084,1085,5,173,0,
        0,1085,1087,3,80,40,0,1086,1084,1,0,0,0,1086,1087,1,0,0,0,1087,1092,
        1,0,0,0,1088,1089,5,173,0,0,1089,1090,5,121,0,0,1090,1091,5,173,
        0,0,1091,1093,5,101,0,0,1092,1088,1,0,0,0,1092,1093,1,0,0,0,1093,
        95,1,0,0,0,1094,1095,5,121,0,0,1095,1096,5,173,0,0,1096,1098,5,101,
        0,0,1097,1099,5,173,0,0,1098,1097,1,0,0,0,1098,1099,1,0,0,0,1099,
        1100,1,0,0,0,1100,1102,5,2,0,0,1101,1103,5,173,0,0,1102,1101,1,0,
        0,0,1102,1103,1,0,0,0,1103,1104,1,0,0,0,1104,1106,3,318,159,0,1105,
        1107,5,173,0,0,1106,1105,1,0,0,0,1106,1107,1,0,0,0,1107,1108,1,0,
        0,0,1108,1109,5,4,0,0,1109,97,1,0,0,0,1110,1111,6,49,-1,0,1111,1185,
        3,326,163,0,1112,1114,5,142,0,0,1113,1115,5,173,0,0,1114,1113,1,
        0,0,0,1114,1115,1,0,0,0,1115,1116,1,0,0,0,1116,1118,5,2,0,0,1117,
        1119,5,173,0,0,1118,1117,1,0,0,0,1118,1119,1,0,0,0,1119,1120,1,0,
        0,0,1120,1122,3,88,44,0,1121,1123,5,173,0,0,1122,1121,1,0,0,0,1122,
        1123,1,0,0,0,1123,1124,1,0,0,0,1124,1125,5,4,0,0,1125,1185,1,0,0,
        0,1126,1128,3,326,163,0,1127,1129,5,173,0,0,1128,1127,1,0,0,0,1128,
        1129,1,0,0,0,1129,1130,1,0,0,0,1130,1132,5,2,0,0,1131,1133,5,173,
        0,0,1132,1131,1,0,0,0,1132,1133,1,0,0,0,1133,1134,1,0,0,0,1134,1136,
        3,88,44,0,1135,1137,5,173,0,0,1136,1135,1,0,0,0,1136,1137,1,0,0,
        0,1137,1138,1,0,0,0,1138,1139,5,4,0,0,1139,1185,1,0,0,0,1140,1142,
        3,326,163,0,1141,1143,5,173,0,0,1142,1141,1,0,0,0,1142,1143,1,0,
        0,0,1143,1144,1,0,0,0,1144,1146,5,2,0,0,1145,1147,5,173,0,0,1146,
        1145,1,0,0,0,1146,1147,1,0,0,0,1147,1148,1,0,0,0,1148,1150,3,98,
        49,0,1149,1151,5,173,0,0,1150,1149,1,0,0,0,1150,1151,1,0,0,0,1151,
        1152,1,0,0,0,1152,1154,5,3,0,0,1153,1155,5,173,0,0,1154,1153,1,0,
        0,0,1154,1155,1,0,0,0,1155,1156,1,0,0,0,1156,1158,3,98,49,0,1157,
        1159,5,173,0,0,1158,1157,1,0,0,0,1158,1159,1,0,0,0,1159,1160,1,0,
        0,0,1160,1161,5,4,0,0,1161,1185,1,0,0,0,1162,1164,5,151,0,0,1163,
        1165,5,173,0,0,1164,1163,1,0,0,0,1164,1165,1,0,0,0,1165,1166,1,0,
        0,0,1166,1168,5,2,0,0,1167,1169,5,173,0,0,1168,1167,1,0,0,0,1168,
        1169,1,0,0,0,1169,1170,1,0,0,0,1170,1172,3,320,160,0,1171,1173,5,
        173,0,0,1172,1171,1,0,0,0,1172,1173,1,0,0,0,1173,1174,1,0,0,0,1174,
        1176,5,3,0,0,1175,1177,5,173,0,0,1176,1175,1,0,0,0,1176,1177,1,0,
        0,0,1177,1178,1,0,0,0,1178,1180,3,320,160,0,1179,1181,5,173,0,0,
        1180,1179,1,0,0,0,1180,1181,1,0,0,0,1181,1182,1,0,0,0,1182,1183,
        5,4,0,0,1183,1185,1,0,0,0,1184,1110,1,0,0,0,1184,1112,1,0,0,0,1184,
        1126,1,0,0,0,1184,1140,1,0,0,0,1184,1162,1,0,0,0,1185,1190,1,0,0,
        0,1186,1187,10,5,0,0,1187,1189,3,100,50,0,1188,1186,1,0,0,0,1189,
        1192,1,0,0,0,1190,1188,1,0,0,0,1190,1191,1,0,0,0,1191,99,1,0,0,0,
        1192,1190,1,0,0,0,1193,1197,3,102,51,0,1194,1196,3,102,51,0,1195,
        1194,1,0,0,0,1196,1199,1,0,0,0,1197,1195,1,0,0,0,1197,1198,1,0,0,
        0,1198,101,1,0,0,0,1199,1197,1,0,0,0,1200,1202,5,7,0,0,1201,1203,
        3,320,160,0,1202,1201,1,0,0,0,1202,1203,1,0,0,0,1203,1204,1,0,0,
        0,1204,1205,5,8,0,0,1205,103,1,0,0,0,1206,1209,3,106,53,0,1207,1209,
        3,108,54,0,1208,1206,1,0,0,0,1208,1207,1,0,0,0,1209,105,1,0,0,0,
        1210,1213,5,84,0,0,1211,1212,5,173,0,0,1212,1214,5,104,0,0,1213,
        1211,1,0,0,0,1213,1214,1,0,0,0,1214,107,1,0,0,0,1215,1216,5,122,
        0,0,1216,109,1,0,0,0,1217,1218,5,56,0,0,1218,1219,5,173,0,0,1219,
        1231,5,139,0,0,1220,1221,5,56,0,0,1221,1222,5,173,0,0,1222,1223,
        5,139,0,0,1223,1224,5,173,0,0,1224,1225,5,124,0,0,1225,1226,5,173,
        0,0,1226,1231,5,117,0,0,1227,1231,5,64,0,0,1228,1231,5,128,0,0,1229,
        1231,5,61,0,0,1230,1217,1,0,0,0,1230,1220,1,0,0,0,1230,1227,1,0,
        0,0,1230,1228,1,0,0,0,1230,1229,1,0,0,0,1231,111,1,0,0,0,1232,1235,
        3,114,57,0,1233,1235,3,116,58,0,1234,1232,1,0,0,0,1234,1233,1,0,
        0,0,1235,113,1,0,0,0,1236,1237,5,103,0,0,1237,1238,5,173,0,0,1238,
        1239,5,86,0,0,1239,1242,5,173,0,0,1240,1243,5,158,0,0,1241,1243,
        3,310,155,0,1242,1240,1,0,0,0,1242,1241,1,0,0,0,1243,115,1,0,0,0,
        1244,1245,5,98,0,0,1245,1246,5,173,0,0,1246,1247,3,310,155,0,1247,
        117,1,0,0,0,1248,1249,3,120,60,0,1249,119,1,0,0,0,1250,1257,3,124,
        62,0,1251,1253,5,173,0,0,1252,1251,1,0,0,0,1252,1253,1,0,0,0,1253,
        1254,1,0,0,0,1254,1256,3,122,61,0,1255,1252,1,0,0,0,1256,1259,1,
        0,0,0,1257,1255,1,0,0,0,1257,1258,1,0,0,0,1258,1272,1,0,0,0,1259,
        1257,1,0,0,0,1260,1262,3,162,81,0,1261,1263,5,173,0,0,1262,1261,
        1,0,0,0,1262,1263,1,0,0,0,1263,1265,1,0,0,0,1264,1260,1,0,0,0,1265,
        1266,1,0,0,0,1266,1264,1,0,0,0,1266,1267,1,0,0,0,1267,1268,1,0,0,
        0,1268,1269,3,124,62,0,1269,1270,6,60,-1,0,1270,1272,1,0,0,0,1271,
        1250,1,0,0,0,1271,1264,1,0,0,0,1272,121,1,0,0,0,1273,1274,5,142,
        0,0,1274,1275,5,173,0,0,1275,1277,5,49,0,0,1276,1278,5,173,0,0,1277,
        1276,1,0,0,0,1277,1278,1,0,0,0,1278,1279,1,0,0,0,1279,1286,3,124,
        62,0,1280,1282,5,142,0,0,1281,1283,5,173,0,0,1282,1281,1,0,0,0,1282,
        1283,1,0,0,0,1283,1284,1,0,0,0,1284,1286,3,124,62,0,1285,1273,1,
        0,0,0,1285,1280,1,0,0,0,1286,123,1,0,0,0,1287,1290,3,126,63,0,1288,
        1290,3,128,64,0,1289,1287,1,0,0,0,1289,1288,1,0,0,0,1290,125,1,0,
        0,0,1291,1293,3,134,67,0,1292,1294,5,173,0,0,1293,1292,1,0,0,0,1293,
        1294,1,0,0,0,1294,1296,1,0,0,0,1295,1291,1,0,0,0,1296,1299,1,0,0,
        0,1297,1295,1,0,0,0,1297,1298,1,0,0,0,1298,1300,1,0,0,0,1299,1297,
        1,0,0,0,1300,1327,3,162,81,0,1301,1303,3,134,67,0,1302,1304,5,173,
        0,0,1303,1302,1,0,0,0,1303,1304,1,0,0,0,1304,1306,1,0,0,0,1305,1301,
        1,0,0,0,1306,1309,1,0,0,0,1307,1305,1,0,0,0,1307,1308,1,0,0,0,1308,
        1310,1,0,0,0,1309,1307,1,0,0,0,1310,1317,3,132,66,0,1311,1313,5,
        173,0,0,1312,1311,1,0,0,0,1312,1313,1,0,0,0,1313,1314,1,0,0,0,1314,
        1316,3,132,66,0,1315,1312,1,0,0,0,1316,1319,1,0,0,0,1317,1315,1,
        0,0,0,1317,1318,1,0,0,0,1318,1324,1,0,0,0,1319,1317,1,0,0,0,1320,
        1322,5,173,0,0,1321,1320,1,0,0,0,1321,1322,1,0,0,0,1322,1323,1,0,
        0,0,1323,1325,3,162,81,0,1324,1321,1,0,0,0,1324,1325,1,0,0,0,1325,
        1327,1,0,0,0,1326,1297,1,0,0,0,1326,1307,1,0,0,0,1327,127,1,0,0,
        0,1328,1330,3,130,65,0,1329,1331,5,173,0,0,1330,1329,1,0,0,0,1330,
        1331,1,0,0,0,1331,1333,1,0,0,0,1332,1328,1,0,0,0,1333,1334,1,0,0,
        0,1334,1332,1,0,0,0,1334,1335,1,0,0,0,1335,1336,1,0,0,0,1336,1337,
        3,126,63,0,1337,129,1,0,0,0,1338,1340,3,134,67,0,1339,1341,5,173,
        0,0,1340,1339,1,0,0,0,1340,1341,1,0,0,0,1341,1343,1,0,0,0,1342,1338,
        1,0,0,0,1343,1346,1,0,0,0,1344,1342,1,0,0,0,1344,1345,1,0,0,0,1345,
        1353,1,0,0,0,1346,1344,1,0,0,0,1347,1349,3,132,66,0,1348,1350,5,
        173,0,0,1349,1348,1,0,0,0,1349,1350,1,0,0,0,1350,1352,1,0,0,0,1351,
        1347,1,0,0,0,1352,1355,1,0,0,0,1353,1351,1,0,0,0,1353,1354,1,0,0,
        0,1354,1356,1,0,0,0,1355,1353,1,0,0,0,1356,1357,3,160,80,0,1357,
        131,1,0,0,0,1358,1363,3,148,74,0,1359,1363,3,150,75,0,1360,1363,
        3,154,77,0,1361,1363,3,158,79,0,1362,1358,1,0,0,0,1362,1359,1,0,
        0,0,1362,1360,1,0,0,0,1362,1361,1,0,0,0,1363,133,1,0,0,0,1364,1369,
        3,140,70,0,1365,1369,3,146,73,0,1366,1369,3,138,69,0,1367,1369,3,
        136,68,0,1368,1364,1,0,0,0,1368,1365,1,0,0,0,1368,1366,1,0,0,0,1368,
        1367,1,0,0,0,1369,135,1,0,0,0,1370,1388,5,103,0,0,1371,1372,5,173,
        0,0,1372,1373,5,147,0,0,1373,1374,5,173,0,0,1374,1376,5,92,0,0,1375,
        1377,5,173,0,0,1376,1375,1,0,0,0,1376,1377,1,0,0,0,1377,1378,1,0,
        0,0,1378,1380,5,2,0,0,1379,1381,5,173,0,0,1380,1379,1,0,0,0,1380,
        1381,1,0,0,0,1381,1382,1,0,0,0,1382,1384,3,88,44,0,1383,1385,5,173,
        0,0,1384,1383,1,0,0,0,1384,1385,1,0,0,0,1385,1386,1,0,0,0,1386,1387,
        5,4,0,0,1387,1389,1,0,0,0,1388,1371,1,0,0,0,1388,1389,1,0,0,0,1389,
        1390,1,0,0,0,1390,1391,5,173,0,0,1391,1392,5,88,0,0,1392,1393,5,
        173,0,0,1393,1398,3,10,5,0,1394,1396,5,173,0,0,1395,1394,1,0,0,0,
        1395,1396,1,0,0,0,1396,1397,1,0,0,0,1397,1399,3,42,21,0,1398,1395,
        1,0,0,0,1398,1399,1,0,0,0,1399,1404,1,0,0,0,1400,1402,5,173,0,0,
        1401,1400,1,0,0,0,1401,1402,1,0,0,0,1402,1403,1,0,0,0,1403,1405,
        3,178,89,0,1404,1401,1,0,0,0,1404,1405,1,0,0,0,1405,137,1,0,0,0,
        1406,1407,5,58,0,0,1407,1408,5,173,0,0,1408,1413,3,288,144,0,1409,
        1411,5,173,0,0,1410,1409,1,0,0,0,1410,1411,1,0,0,0,1411,1412,1,0,
        0,0,1412,1414,3,178,89,0,1413,1410,1,0,0,0,1413,1414,1,0,0,0,1414,
        139,1,0,0,0,1415,1416,5,118,0,0,1416,1418,5,173,0,0,1417,1415,1,
        0,0,0,1417,1418,1,0,0,0,1418,1419,1,0,0,0,1419,1421,5,106,0,0,1420,
        1422,5,173,0,0,1421,1420,1,0,0,0,1421,1422,1,0,0,0,1422,1423,1,0,
        0,0,1423,1426,3,180,90,0,1424,1425,5,173,0,0,1425,1427,3,178,89,
        0,1426,1424,1,0,0,0,1426,1427,1,0,0,0,1427,1430,1,0,0,0,1428,1429,
        5,173,0,0,1429,1431,3,142,71,0,1430,1428,1,0,0,0,1430,1431,1,0,0,
        0,1431,141,1,0,0,0,1432,1433,5,93,0,0,1433,1434,5,173,0,0,1434,1435,
        3,144,72,0,1435,143,1,0,0,0,1436,1437,6,72,-1,0,1437,1439,5,2,0,
        0,1438,1440,5,173,0,0,1439,1438,1,0,0,0,1439,1440,1,0,0,0,1440,1441,
        1,0,0,0,1441,1443,3,144,72,0,1442,1444,5,173,0,0,1443,1442,1,0,0,
        0,1443,1444,1,0,0,0,1444,1445,1,0,0,0,1445,1446,5,4,0,0,1446,1449,
        1,0,0,0,1447,1449,3,324,162,0,1448,1436,1,0,0,0,1448,1447,1,0,0,
        0,1449,1466,1,0,0,0,1450,1451,10,4,0,0,1451,1452,5,173,0,0,1452,
        1453,5,100,0,0,1453,1454,5,173,0,0,1454,1465,3,144,72,5,1455,1460,
        10,3,0,0,1456,1457,5,173,0,0,1457,1458,5,110,0,0,1458,1459,5,173,
        0,0,1459,1461,3,324,162,0,1460,1456,1,0,0,0,1461,1462,1,0,0,0,1462,
        1460,1,0,0,0,1462,1463,1,0,0,0,1463,1465,1,0,0,0,1464,1450,1,0,0,
        0,1464,1455,1,0,0,0,1465,1468,1,0,0,0,1466,1464,1,0,0,0,1466,1467,
        1,0,0,0,1467,145,1,0,0,0,1468,1466,1,0,0,0,1469,1471,5,143,0,0,1470,
        1472,5,173,0,0,1471,1470,1,0,0,0,1471,1472,1,0,0,0,1472,1473,1,0,
        0,0,1473,1474,3,220,110,0,1474,1475,5,173,0,0,1475,1476,5,52,0,0,
        1476,1477,5,173,0,0,1477,1478,3,310,155,0,1478,147,1,0,0,0,1479,
        1481,5,69,0,0,1480,1482,5,173,0,0,1481,1480,1,0,0,0,1481,1482,1,
        0,0,0,1482,1483,1,0,0,0,1483,1484,3,180,90,0,1484,149,1,0,0,0,1485,
        1487,5,108,0,0,1486,1488,5,173,0,0,1487,1486,1,0,0,0,1487,1488,1,
        0,0,0,1488,1489,1,0,0,0,1489,1494,3,180,90,0,1490,1491,5,173,0,0,
        1491,1493,3,152,76,0,1492,1490,1,0,0,0,1493,1496,1,0,0,0,1494,1492,
        1,0,0,0,1494,1495,1,0,0,0,1495,151,1,0,0,0,1496,1494,1,0,0,0,1497,
        1498,5,116,0,0,1498,1499,5,173,0,0,1499,1500,5,106,0,0,1500,1501,
        5,173,0,0,1501,1508,3,154,77,0,1502,1503,5,116,0,0,1503,1504,5,173,
        0,0,1504,1505,5,69,0,0,1505,1506,5,173,0,0,1506,1508,3,154,77,0,
        1507,1497,1,0,0,0,1507,1502,1,0,0,0,1508,153,1,0,0,0,1509,1511,5,
        131,0,0,1510,1512,5,173,0,0,1511,1510,1,0,0,0,1511,1512,1,0,0,0,
        1512,1513,1,0,0,0,1513,1524,3,156,78,0,1514,1516,5,173,0,0,1515,
        1514,1,0,0,0,1515,1516,1,0,0,0,1516,1517,1,0,0,0,1517,1519,5,3,0,
        0,1518,1520,5,173,0,0,1519,1518,1,0,0,0,1519,1520,1,0,0,0,1520,1521,
        1,0,0,0,1521,1523,3,156,78,0,1522,1515,1,0,0,0,1523,1526,1,0,0,0,
        1524,1522,1,0,0,0,1524,1525,1,0,0,0,1525,155,1,0,0,0,1526,1524,1,
        0,0,0,1527,1529,3,316,158,0,1528,1530,5,173,0,0,1529,1528,1,0,0,
        0,1529,1530,1,0,0,0,1530,1531,1,0,0,0,1531,1533,5,6,0,0,1532,1534,
        5,173,0,0,1533,1532,1,0,0,0,1533,1534,1,0,0,0,1534,1535,1,0,0,0,
        1535,1536,3,220,110,0,1536,157,1,0,0,0,1537,1538,5,77,0,0,1538,1540,
        5,173,0,0,1539,1537,1,0,0,0,1539,1540,1,0,0,0,1540,1541,1,0,0,0,
        1541,1543,5,74,0,0,1542,1544,5,173,0,0,1543,1542,1,0,0,0,1543,1544,
        1,0,0,0,1544,1545,1,0,0,0,1545,1556,3,220,110,0,1546,1548,5,173,
        0,0,1547,1546,1,0,0,0,1547,1548,1,0,0,0,1548,1549,1,0,0,0,1549,1551,
        5,3,0,0,1550,1552,5,173,0,0,1551,1550,1,0,0,0,1551,1552,1,0,0,0,
        1552,1553,1,0,0,0,1553,1555,3,220,110,0,1554,1547,1,0,0,0,1555,1558,
        1,0,0,0,1556,1554,1,0,0,0,1556,1557,1,0,0,0,1557,159,1,0,0,0,1558,
        1556,1,0,0,0,1559,1560,5,147,0,0,1560,1565,3,164,82,0,1561,1563,
        5,173,0,0,1562,1561,1,0,0,0,1562,1563,1,0,0,0,1563,1564,1,0,0,0,
        1564,1566,3,178,89,0,1565,1562,1,0,0,0,1565,1566,1,0,0,0,1566,161,
        1,0,0,0,1567,1568,5,127,0,0,1568,1569,3,164,82,0,1569,163,1,0,0,
        0,1570,1572,5,173,0,0,1571,1570,1,0,0,0,1571,1572,1,0,0,0,1572,1573,
        1,0,0,0,1573,1575,5,78,0,0,1574,1571,1,0,0,0,1574,1575,1,0,0,0,1575,
        1576,1,0,0,0,1576,1577,5,173,0,0,1577,1580,3,166,83,0,1578,1579,
        5,173,0,0,1579,1581,3,170,85,0,1580,1578,1,0,0,0,1580,1581,1,0,0,
        0,1581,1584,1,0,0,0,1582,1583,5,173,0,0,1583,1585,3,172,86,0,1584,
        1582,1,0,0,0,1584,1585,1,0,0,0,1585,1588,1,0,0,0,1586,1587,5,173,
        0,0,1587,1589,3,174,87,0,1588,1586,1,0,0,0,1588,1589,1,0,0,0,1589,
        165,1,0,0,0,1590,1601,5,152,0,0,1591,1593,5,173,0,0,1592,1591,1,
        0,0,0,1592,1593,1,0,0,0,1593,1594,1,0,0,0,1594,1596,5,3,0,0,1595,
        1597,5,173,0,0,1596,1595,1,0,0,0,1596,1597,1,0,0,0,1597,1598,1,0,
        0,0,1598,1600,3,168,84,0,1599,1592,1,0,0,0,1600,1603,1,0,0,0,1601,
        1599,1,0,0,0,1601,1602,1,0,0,0,1602,1619,1,0,0,0,1603,1601,1,0,0,
        0,1604,1615,3,168,84,0,1605,1607,5,173,0,0,1606,1605,1,0,0,0,1606,
        1607,1,0,0,0,1607,1608,1,0,0,0,1608,1610,5,3,0,0,1609,1611,5,173,
        0,0,1610,1609,1,0,0,0,1610,1611,1,0,0,0,1611,1612,1,0,0,0,1612,1614,
        3,168,84,0,1613,1606,1,0,0,0,1614,1617,1,0,0,0,1615,1613,1,0,0,0,
        1615,1616,1,0,0,0,1616,1619,1,0,0,0,1617,1615,1,0,0,0,1618,1590,
        1,0,0,0,1618,1604,1,0,0,0,1619,167,1,0,0,0,1620,1621,3,220,110,0,
        1621,1622,5,173,0,0,1622,1623,5,52,0,0,1623,1624,5,173,0,0,1624,
        1625,3,310,155,0,1625,1628,1,0,0,0,1626,1628,3,220,110,0,1627,1620,
        1,0,0,0,1627,1626,1,0,0,0,1628,169,1,0,0,0,1629,1630,5,120,0,0,1630,
        1631,5,173,0,0,1631,1632,5,57,0,0,1632,1633,5,173,0,0,1633,1641,
        3,176,88,0,1634,1636,5,3,0,0,1635,1637,5,173,0,0,1636,1635,1,0,0,
        0,1636,1637,1,0,0,0,1637,1638,1,0,0,0,1638,1640,3,176,88,0,1639,
        1634,1,0,0,0,1640,1643,1,0,0,0,1641,1639,1,0,0,0,1641,1642,1,0,0,
        0,1642,171,1,0,0,0,1643,1641,1,0,0,0,1644,1645,5,153,0,0,1645,1646,
        5,173,0,0,1646,1647,3,220,110,0,1647,173,1,0,0,0,1648,1649,5,102,
        0,0,1649,1650,5,173,0,0,1650,1651,3,220,110,0,1651,175,1,0,0,0,1652,
        1657,3,220,110,0,1653,1655,5,173,0,0,1654,1653,1,0,0,0,1654,1655,
        1,0,0,0,1655,1656,1,0,0,0,1656,1658,7,1,0,0,1657,1654,1,0,0,0,1657,
        1658,1,0,0,0,1658,177,1,0,0,0,1659,1660,5,146,0,0,1660,1661,5,173,
        0,0,1661,1662,3,220,110,0,1662,179,1,0,0,0,1663,1674,3,182,91,0,
        1664,1666,5,173,0,0,1665,1664,1,0,0,0,1665,1666,1,0,0,0,1666,1667,
        1,0,0,0,1667,1669,5,3,0,0,1668,1670,5,173,0,0,1669,1668,1,0,0,0,
        1669,1670,1,0,0,0,1670,1671,1,0,0,0,1671,1673,3,182,91,0,1672,1665,
        1,0,0,0,1673,1676,1,0,0,0,1674,1672,1,0,0,0,1674,1675,1,0,0,0,1675,
        181,1,0,0,0,1676,1674,1,0,0,0,1677,1679,3,310,155,0,1678,1680,5,
        173,0,0,1679,1678,1,0,0,0,1679,1680,1,0,0,0,1680,1681,1,0,0,0,1681,
        1683,5,6,0,0,1682,1684,5,173,0,0,1683,1682,1,0,0,0,1683,1684,1,0,
        0,0,1684,1685,1,0,0,0,1685,1686,3,184,92,0,1686,1689,1,0,0,0,1687,
        1689,3,184,92,0,1688,1677,1,0,0,0,1688,1687,1,0,0,0,1689,183,1,0,
        0,0,1690,1691,3,186,93,0,1691,185,1,0,0,0,1692,1699,3,188,94,0,1693,
        1695,5,173,0,0,1694,1693,1,0,0,0,1694,1695,1,0,0,0,1695,1696,1,0,
        0,0,1696,1698,3,190,95,0,1697,1694,1,0,0,0,1698,1701,1,0,0,0,1699,
        1697,1,0,0,0,1699,1700,1,0,0,0,1700,1707,1,0,0,0,1701,1699,1,0,0,
        0,1702,1703,5,2,0,0,1703,1704,3,186,93,0,1704,1705,5,4,0,0,1705,
        1707,1,0,0,0,1706,1692,1,0,0,0,1706,1702,1,0,0,0,1707,187,1,0,0,
        0,1708,1710,5,2,0,0,1709,1711,5,173,0,0,1710,1709,1,0,0,0,1710,1711,
        1,0,0,0,1711,1716,1,0,0,0,1712,1714,3,310,155,0,1713,1715,5,173,
        0,0,1714,1713,1,0,0,0,1714,1715,1,0,0,0,1715,1717,1,0,0,0,1716,1712,
        1,0,0,0,1716,1717,1,0,0,0,1717,1722,1,0,0,0,1718,1720,3,200,100,
        0,1719,1721,5,173,0,0,1720,1719,1,0,0,0,1720,1721,1,0,0,0,1721,1723,
        1,0,0,0,1722,1718,1,0,0,0,1722,1723,1,0,0,0,1723,1728,1,0,0,0,1724,
        1726,3,196,98,0,1725,1727,5,173,0,0,1726,1725,1,0,0,0,1726,1727,
        1,0,0,0,1727,1729,1,0,0,0,1728,1724,1,0,0,0,1728,1729,1,0,0,0,1729,
        1730,1,0,0,0,1730,1731,5,4,0,0,1731,189,1,0,0,0,1732,1734,3,192,
        96,0,1733,1735,5,173,0,0,1734,1733,1,0,0,0,1734,1735,1,0,0,0,1735,
        1736,1,0,0,0,1736,1737,3,188,94,0,1737,191,1,0,0,0,1738,1740,3,330,
        165,0,1739,1741,5,173,0,0,1740,1739,1,0,0,0,1740,1741,1,0,0,0,1741,
        1742,1,0,0,0,1742,1744,3,334,167,0,1743,1745,5,173,0,0,1744,1743,
        1,0,0,0,1744,1745,1,0,0,0,1745,1747,1,0,0,0,1746,1748,3,194,97,0,
        1747,1746,1,0,0,0,1747,1748,1,0,0,0,1748,1750,1,0,0,0,1749,1751,
        5,173,0,0,1750,1749,1,0,0,0,1750,1751,1,0,0,0,1751,1752,1,0,0,0,
        1752,1753,3,334,167,0,1753,1783,1,0,0,0,1754,1756,3,334,167,0,1755,
        1757,5,173,0,0,1756,1755,1,0,0,0,1756,1757,1,0,0,0,1757,1759,1,0,
        0,0,1758,1760,3,194,97,0,1759,1758,1,0,0,0,1759,1760,1,0,0,0,1760,
        1762,1,0,0,0,1761,1763,5,173,0,0,1762,1761,1,0,0,0,1762,1763,1,0,
        0,0,1763,1764,1,0,0,0,1764,1766,3,334,167,0,1765,1767,5,173,0,0,
        1766,1765,1,0,0,0,1766,1767,1,0,0,0,1767,1768,1,0,0,0,1768,1769,
        3,332,166,0,1769,1783,1,0,0,0,1770,1772,3,334,167,0,1771,1773,5,
        173,0,0,1772,1771,1,0,0,0,1772,1773,1,0,0,0,1773,1775,1,0,0,0,1774,
        1776,3,194,97,0,1775,1774,1,0,0,0,1775,1776,1,0,0,0,1776,1778,1,
        0,0,0,1777,1779,5,173,0,0,1778,1777,1,0,0,0,1778,1779,1,0,0,0,1779,
        1780,1,0,0,0,1780,1781,3,334,167,0,1781,1783,1,0,0,0,1782,1738,1,
        0,0,0,1782,1754,1,0,0,0,1782,1770,1,0,0,0,1783,193,1,0,0,0,1784,
        1786,5,7,0,0,1785,1787,5,173,0,0,1786,1785,1,0,0,0,1786,1787,1,0,
        0,0,1787,1792,1,0,0,0,1788,1790,3,310,155,0,1789,1791,5,173,0,0,
        1790,1789,1,0,0,0,1790,1791,1,0,0,0,1791,1793,1,0,0,0,1792,1788,
        1,0,0,0,1792,1793,1,0,0,0,1793,1798,1,0,0,0,1794,1796,3,198,99,0,
        1795,1797,5,173,0,0,1796,1795,1,0,0,0,1796,1797,1,0,0,0,1797,1799,
        1,0,0,0,1798,1794,1,0,0,0,1798,1799,1,0,0,0,1799,1804,1,0,0,0,1800,
        1802,3,204,102,0,1801,1803,5,173,0,0,1802,1801,1,0,0,0,1802,1803,
        1,0,0,0,1803,1805,1,0,0,0,1804,1800,1,0,0,0,1804,1805,1,0,0,0,1805,
        1810,1,0,0,0,1806,1808,3,196,98,0,1807,1809,5,173,0,0,1808,1807,
        1,0,0,0,1808,1809,1,0,0,0,1809,1811,1,0,0,0,1810,1806,1,0,0,0,1810,
        1811,1,0,0,0,1811,1812,1,0,0,0,1812,1813,5,8,0,0,1813,195,1,0,0,
        0,1814,1816,5,9,0,0,1815,1817,5,173,0,0,1816,1815,1,0,0,0,1816,1817,
        1,0,0,0,1817,1851,1,0,0,0,1818,1820,3,318,159,0,1819,1821,5,173,
        0,0,1820,1819,1,0,0,0,1820,1821,1,0,0,0,1821,1822,1,0,0,0,1822,1824,
        5,157,0,0,1823,1825,5,173,0,0,1824,1823,1,0,0,0,1824,1825,1,0,0,
        0,1825,1826,1,0,0,0,1826,1828,3,220,110,0,1827,1829,5,173,0,0,1828,
        1827,1,0,0,0,1828,1829,1,0,0,0,1829,1848,1,0,0,0,1830,1832,5,3,0,
        0,1831,1833,5,173,0,0,1832,1831,1,0,0,0,1832,1833,1,0,0,0,1833,1834,
        1,0,0,0,1834,1836,3,318,159,0,1835,1837,5,173,0,0,1836,1835,1,0,
        0,0,1836,1837,1,0,0,0,1837,1838,1,0,0,0,1838,1840,5,157,0,0,1839,
        1841,5,173,0,0,1840,1839,1,0,0,0,1840,1841,1,0,0,0,1841,1842,1,0,
        0,0,1842,1844,3,220,110,0,1843,1845,5,173,0,0,1844,1843,1,0,0,0,
        1844,1845,1,0,0,0,1845,1847,1,0,0,0,1846,1830,1,0,0,0,1847,1850,
        1,0,0,0,1848,1846,1,0,0,0,1848,1849,1,0,0,0,1849,1852,1,0,0,0,1850,
        1848,1,0,0,0,1851,1818,1,0,0,0,1851,1852,1,0,0,0,1852,1853,1,0,0,
        0,1853,1854,5,10,0,0,1854,197,1,0,0,0,1855,1857,5,157,0,0,1856,1858,
        5,173,0,0,1857,1856,1,0,0,0,1857,1858,1,0,0,0,1858,1859,1,0,0,0,
        1859,1873,3,218,109,0,1860,1862,5,173,0,0,1861,1860,1,0,0,0,1861,
        1862,1,0,0,0,1862,1863,1,0,0,0,1863,1865,5,11,0,0,1864,1866,5,157,
        0,0,1865,1864,1,0,0,0,1865,1866,1,0,0,0,1866,1868,1,0,0,0,1867,1869,
        5,173,0,0,1868,1867,1,0,0,0,1868,1869,1,0,0,0,1869,1870,1,0,0,0,
        1870,1872,3,218,109,0,1871,1861,1,0,0,0,1872,1875,1,0,0,0,1873,1871,
        1,0,0,0,1873,1874,1,0,0,0,1874,199,1,0,0,0,1875,1873,1,0,0,0,1876,
        1883,3,202,101,0,1877,1879,5,173,0,0,1878,1877,1,0,0,0,1878,1879,
        1,0,0,0,1879,1880,1,0,0,0,1880,1882,3,202,101,0,1881,1878,1,0,0,
        0,1882,1885,1,0,0,0,1883,1881,1,0,0,0,1883,1884,1,0,0,0,1884,201,
        1,0,0,0,1885,1883,1,0,0,0,1886,1888,5,157,0,0,1887,1889,5,173,0,
        0,1888,1887,1,0,0,0,1888,1889,1,0,0,0,1889,1890,1,0,0,0,1890,1891,
        3,216,108,0,1891,203,1,0,0,0,1892,1894,5,152,0,0,1893,1895,5,173,
        0,0,1894,1893,1,0,0,0,1894,1895,1,0,0,0,1895,1902,1,0,0,0,1896,1903,
        5,132,0,0,1897,1898,5,49,0,0,1898,1899,5,173,0,0,1899,1903,5,132,
        0,0,1900,1903,5,138,0,0,1901,1903,5,46,0,0,1902,1896,1,0,0,0,1902,
        1897,1,0,0,0,1902,1900,1,0,0,0,1902,1901,1,0,0,0,1902,1903,1,0,0,
        0,1903,1905,1,0,0,0,1904,1906,5,173,0,0,1905,1904,1,0,0,0,1905,1906,
        1,0,0,0,1906,1921,1,0,0,0,1907,1909,3,212,106,0,1908,1907,1,0,0,
        0,1908,1909,1,0,0,0,1909,1911,1,0,0,0,1910,1912,5,173,0,0,1911,1910,
        1,0,0,0,1911,1912,1,0,0,0,1912,1913,1,0,0,0,1913,1915,5,12,0,0,1914,
        1916,5,173,0,0,1915,1914,1,0,0,0,1915,1916,1,0,0,0,1916,1918,1,0,
        0,0,1917,1919,3,214,107,0,1918,1917,1,0,0,0,1918,1919,1,0,0,0,1919,
        1922,1,0,0,0,1920,1922,3,320,160,0,1921,1908,1,0,0,0,1921,1920,1,
        0,0,0,1921,1922,1,0,0,0,1922,1927,1,0,0,0,1923,1925,5,173,0,0,1924,
        1923,1,0,0,0,1924,1925,1,0,0,0,1925,1926,1,0,0,0,1926,1928,3,206,
        103,0,1927,1924,1,0,0,0,1927,1928,1,0,0,0,1928,205,1,0,0,0,1929,
        1931,5,2,0,0,1930,1932,5,173,0,0,1931,1930,1,0,0,0,1931,1932,1,0,
        0,0,1932,1933,1,0,0,0,1933,1935,3,310,155,0,1934,1936,5,173,0,0,
        1935,1934,1,0,0,0,1935,1936,1,0,0,0,1936,1937,1,0,0,0,1937,1939,
        5,3,0,0,1938,1940,5,173,0,0,1939,1938,1,0,0,0,1939,1940,1,0,0,0,
        1940,1941,1,0,0,0,1941,1953,3,310,155,0,1942,1944,5,173,0,0,1943,
        1942,1,0,0,0,1943,1944,1,0,0,0,1944,1945,1,0,0,0,1945,1947,5,11,
        0,0,1946,1948,5,173,0,0,1947,1946,1,0,0,0,1947,1948,1,0,0,0,1948,
        1949,1,0,0,0,1949,1951,3,178,89,0,1950,1952,5,173,0,0,1951,1950,
        1,0,0,0,1951,1952,1,0,0,0,1952,1954,1,0,0,0,1953,1943,1,0,0,0,1953,
        1954,1,0,0,0,1954,1974,1,0,0,0,1955,1957,5,173,0,0,1956,1955,1,0,
        0,0,1956,1957,1,0,0,0,1957,1958,1,0,0,0,1958,1960,5,11,0,0,1959,
        1961,5,173,0,0,1960,1959,1,0,0,0,1960,1961,1,0,0,0,1961,1962,1,0,
        0,0,1962,1964,3,210,105,0,1963,1965,5,173,0,0,1964,1963,1,0,0,0,
        1964,1965,1,0,0,0,1965,1966,1,0,0,0,1966,1968,5,3,0,0,1967,1969,
        5,173,0,0,1968,1967,1,0,0,0,1968,1969,1,0,0,0,1969,1970,1,0,0,0,
        1970,1972,3,208,104,0,1971,1973,5,173,0,0,1972,1971,1,0,0,0,1972,
        1973,1,0,0,0,1973,1975,1,0,0,0,1974,1956,1,0,0,0,1974,1975,1,0,0,
        0,1975,1976,1,0,0,0,1976,1977,5,4,0,0,1977,207,1,0,0,0,1978,1980,
        5,9,0,0,1979,1981,5,173,0,0,1980,1979,1,0,0,0,1980,1981,1,0,0,0,
        1981,1983,1,0,0,0,1982,1984,3,166,83,0,1983,1982,1,0,0,0,1983,1984,
        1,0,0,0,1984,1986,1,0,0,0,1985,1987,5,173,0,0,1986,1985,1,0,0,0,
        1986,1987,1,0,0,0,1987,1988,1,0,0,0,1988,1989,5,10,0,0,1989,209,
        1,0,0,0,1990,1992,5,9,0,0,1991,1993,5,173,0,0,1992,1991,1,0,0,0,
        1992,1993,1,0,0,0,1993,1995,1,0,0,0,1994,1996,3,166,83,0,1995,1994,
        1,0,0,0,1995,1996,1,0,0,0,1996,1998,1,0,0,0,1997,1999,5,173,0,0,
        1998,1997,1,0,0,0,1998,1999,1,0,0,0,1999,2000,1,0,0,0,2000,2001,
        5,10,0,0,2001,211,1,0,0,0,2002,2003,5,160,0,0,2003,213,1,0,0,0,2004,
        2005,5,160,0,0,2005,215,1,0,0,0,2006,2007,3,324,162,0,2007,217,1,
        0,0,0,2008,2009,3,324,162,0,2009,219,1,0,0,0,2010,2011,3,222,111,
        0,2011,221,1,0,0,0,2012,2019,3,224,112,0,2013,2014,5,173,0,0,2014,
        2015,5,119,0,0,2015,2016,5,173,0,0,2016,2018,3,224,112,0,2017,2013,
        1,0,0,0,2018,2021,1,0,0,0,2019,2017,1,0,0,0,2019,2020,1,0,0,0,2020,
        223,1,0,0,0,2021,2019,1,0,0,0,2022,2029,3,226,113,0,2023,2024,5,
        173,0,0,2024,2025,5,149,0,0,2025,2026,5,173,0,0,2026,2028,3,226,
        113,0,2027,2023,1,0,0,0,2028,2031,1,0,0,0,2029,2027,1,0,0,0,2029,
        2030,1,0,0,0,2030,225,1,0,0,0,2031,2029,1,0,0,0,2032,2039,3,228,
        114,0,2033,2034,5,173,0,0,2034,2035,5,51,0,0,2035,2036,5,173,0,0,
        2036,2038,3,228,114,0,2037,2033,1,0,0,0,2038,2041,1,0,0,0,2039,2037,
        1,0,0,0,2039,2040,1,0,0,0,2040,227,1,0,0,0,2041,2039,1,0,0,0,2042,
        2044,5,113,0,0,2043,2045,5,173,0,0,2044,2043,1,0,0,0,2044,2045,1,
        0,0,0,2045,2047,1,0,0,0,2046,2042,1,0,0,0,2047,2050,1,0,0,0,2048,
        2046,1,0,0,0,2048,2049,1,0,0,0,2049,2051,1,0,0,0,2050,2048,1,0,0,
        0,2051,2052,3,230,115,0,2052,229,1,0,0,0,2053,2063,3,234,117,0,2054,
        2056,5,173,0,0,2055,2054,1,0,0,0,2055,2056,1,0,0,0,2056,2057,1,0,
        0,0,2057,2059,3,232,116,0,2058,2060,5,173,0,0,2059,2058,1,0,0,0,
        2059,2060,1,0,0,0,2060,2061,1,0,0,0,2061,2062,3,234,117,0,2062,2064,
        1,0,0,0,2063,2055,1,0,0,0,2063,2064,1,0,0,0,2064,2102,1,0,0,0,2065,
        2067,3,234,117,0,2066,2068,5,173,0,0,2067,2066,1,0,0,0,2067,2068,
        1,0,0,0,2068,2069,1,0,0,0,2069,2071,5,154,0,0,2070,2072,5,173,0,
        0,2071,2070,1,0,0,0,2071,2072,1,0,0,0,2072,2073,1,0,0,0,2073,2074,
        3,234,117,0,2074,2075,1,0,0,0,2075,2076,6,115,-1,0,2076,2102,1,0,
        0,0,2077,2079,3,234,117,0,2078,2080,5,173,0,0,2079,2078,1,0,0,0,
        2079,2080,1,0,0,0,2080,2081,1,0,0,0,2081,2083,3,232,116,0,2082,2084,
        5,173,0,0,2083,2082,1,0,0,0,2083,2084,1,0,0,0,2084,2085,1,0,0,0,
        2085,2095,3,234,117,0,2086,2088,5,173,0,0,2087,2086,1,0,0,0,2087,
        2088,1,0,0,0,2088,2089,1,0,0,0,2089,2091,3,232,116,0,2090,2092,5,
        173,0,0,2091,2090,1,0,0,0,2091,2092,1,0,0,0,2092,2093,1,0,0,0,2093,
        2094,3,234,117,0,2094,2096,1,0,0,0,2095,2087,1,0,0,0,2096,2097,1,
        0,0,0,2097,2095,1,0,0,0,2097,2098,1,0,0,0,2098,2099,1,0,0,0,2099,
        2100,6,115,-1,0,2100,2102,1,0,0,0,2101,2053,1,0,0,0,2101,2065,1,
        0,0,0,2101,2077,1,0,0,0,2102,231,1,0,0,0,2103,2104,7,2,0,0,2104,
        233,1,0,0,0,2105,2116,3,236,118,0,2106,2108,5,173,0,0,2107,2106,
        1,0,0,0,2107,2108,1,0,0,0,2108,2109,1,0,0,0,2109,2111,5,11,0,0,2110,
        2112,5,173,0,0,2111,2110,1,0,0,0,2111,2112,1,0,0,0,2112,2113,1,0,
        0,0,2113,2115,3,236,118,0,2114,2107,1,0,0,0,2115,2118,1,0,0,0,2116,
        2114,1,0,0,0,2116,2117,1,0,0,0,2117,235,1,0,0,0,2118,2116,1,0,0,
        0,2119,2130,3,238,119,0,2120,2122,5,173,0,0,2121,2120,1,0,0,0,2121,
        2122,1,0,0,0,2122,2123,1,0,0,0,2123,2125,5,18,0,0,2124,2126,5,173,
        0,0,2125,2124,1,0,0,0,2125,2126,1,0,0,0,2126,2127,1,0,0,0,2127,2129,
        3,238,119,0,2128,2121,1,0,0,0,2129,2132,1,0,0,0,2130,2128,1,0,0,
        0,2130,2131,1,0,0,0,2131,237,1,0,0,0,2132,2130,1,0,0,0,2133,2145,
        3,242,121,0,2134,2136,5,173,0,0,2135,2134,1,0,0,0,2135,2136,1,0,
        0,0,2136,2137,1,0,0,0,2137,2139,3,240,120,0,2138,2140,5,173,0,0,
        2139,2138,1,0,0,0,2139,2140,1,0,0,0,2140,2141,1,0,0,0,2141,2142,
        3,242,121,0,2142,2144,1,0,0,0,2143,2135,1,0,0,0,2144,2147,1,0,0,
        0,2145,2143,1,0,0,0,2145,2146,1,0,0,0,2146,239,1,0,0,0,2147,2145,
        1,0,0,0,2148,2149,7,3,0,0,2149,241,1,0,0,0,2150,2162,3,246,123,0,
        2151,2153,5,173,0,0,2152,2151,1,0,0,0,2152,2153,1,0,0,0,2153,2154,
        1,0,0,0,2154,2156,3,244,122,0,2155,2157,5,173,0,0,2156,2155,1,0,
        0,0,2156,2157,1,0,0,0,2157,2158,1,0,0,0,2158,2159,3,246,123,0,2159,
        2161,1,0,0,0,2160,2152,1,0,0,0,2161,2164,1,0,0,0,2162,2160,1,0,0,
        0,2162,2163,1,0,0,0,2163,243,1,0,0,0,2164,2162,1,0,0,0,2165,2166,
        7,4,0,0,2166,245,1,0,0,0,2167,2179,3,250,125,0,2168,2170,5,173,0,
        0,2169,2168,1,0,0,0,2169,2170,1,0,0,0,2170,2171,1,0,0,0,2171,2173,
        3,248,124,0,2172,2174,5,173,0,0,2173,2172,1,0,0,0,2173,2174,1,0,
        0,0,2174,2175,1,0,0,0,2175,2176,3,250,125,0,2176,2178,1,0,0,0,2177,
        2169,1,0,0,0,2178,2181,1,0,0,0,2179,2177,1,0,0,0,2179,2180,1,0,0,
        0,2180,247,1,0,0,0,2181,2179,1,0,0,0,2182,2183,7,5,0,0,2183,249,
        1,0,0,0,2184,2195,3,252,126,0,2185,2187,5,173,0,0,2186,2185,1,0,
        0,0,2186,2187,1,0,0,0,2187,2188,1,0,0,0,2188,2190,5,24,0,0,2189,
        2191,5,173,0,0,2190,2189,1,0,0,0,2190,2191,1,0,0,0,2191,2192,1,0,
        0,0,2192,2194,3,252,126,0,2193,2186,1,0,0,0,2194,2197,1,0,0,0,2195,
        2193,1,0,0,0,2195,2196,1,0,0,0,2196,251,1,0,0,0,2197,2195,1,0,0,
        0,2198,2200,5,155,0,0,2199,2201,5,173,0,0,2200,2199,1,0,0,0,2200,
        2201,1,0,0,0,2201,2203,1,0,0,0,2202,2198,1,0,0,0,2203,2206,1,0,0,
        0,2204,2202,1,0,0,0,2204,2205,1,0,0,0,2205,2207,1,0,0,0,2206,2204,
        1,0,0,0,2207,2212,3,254,127,0,2208,2210,5,173,0,0,2209,2208,1,0,
        0,0,2209,2210,1,0,0,0,2210,2211,1,0,0,0,2211,2213,5,156,0,0,2212,
        2209,1,0,0,0,2212,2213,1,0,0,0,2213,253,1,0,0,0,2214,2222,3,264,
        132,0,2215,2223,3,258,129,0,2216,2218,3,256,128,0,2217,2216,1,0,
        0,0,2218,2219,1,0,0,0,2219,2217,1,0,0,0,2219,2220,1,0,0,0,2220,2223,
        1,0,0,0,2221,2223,3,262,131,0,2222,2215,1,0,0,0,2222,2217,1,0,0,
        0,2222,2221,1,0,0,0,2222,2223,1,0,0,0,2223,255,1,0,0,0,2224,2225,
        5,173,0,0,2225,2227,5,96,0,0,2226,2228,5,173,0,0,2227,2226,1,0,0,
        0,2227,2228,1,0,0,0,2228,2229,1,0,0,0,2229,2244,3,264,132,0,2230,
        2231,5,7,0,0,2231,2232,3,220,110,0,2232,2233,5,8,0,0,2233,2244,1,
        0,0,0,2234,2236,5,7,0,0,2235,2237,3,220,110,0,2236,2235,1,0,0,0,
        2236,2237,1,0,0,0,2237,2238,1,0,0,0,2238,2240,5,157,0,0,2239,2241,
        3,220,110,0,2240,2239,1,0,0,0,2240,2241,1,0,0,0,2241,2242,1,0,0,
        0,2242,2244,5,8,0,0,2243,2224,1,0,0,0,2243,2230,1,0,0,0,2243,2234,
        1,0,0,0,2244,257,1,0,0,0,2245,2257,3,260,130,0,2246,2247,5,173,0,
        0,2247,2248,5,134,0,0,2248,2249,5,173,0,0,2249,2257,5,147,0,0,2250,
        2251,5,173,0,0,2251,2252,5,82,0,0,2252,2253,5,173,0,0,2253,2257,
        5,147,0,0,2254,2255,5,173,0,0,2255,2257,5,66,0,0,2256,2245,1,0,0,
        0,2256,2246,1,0,0,0,2256,2250,1,0,0,0,2256,2254,1,0,0,0,2257,2259,
        1,0,0,0,2258,2260,5,173,0,0,2259,2258,1,0,0,0,2259,2260,1,0,0,0,
        2260,2261,1,0,0,0,2261,2262,3,264,132,0,2262,259,1,0,0,0,2263,2265,
        5,173,0,0,2264,2263,1,0,0,0,2264,2265,1,0,0,0,2265,2266,1,0,0,0,
        2266,2267,5,25,0,0,2267,261,1,0,0,0,2268,2269,5,173,0,0,2269,2270,
        5,99,0,0,2270,2271,5,173,0,0,2271,2279,5,115,0,0,2272,2273,5,173,
        0,0,2273,2274,5,99,0,0,2274,2275,5,173,0,0,2275,2276,5,113,0,0,2276,
        2277,5,173,0,0,2277,2279,5,115,0,0,2278,2268,1,0,0,0,2278,2272,1,
        0,0,0,2279,263,1,0,0,0,2280,2287,3,266,133,0,2281,2283,5,173,0,0,
        2282,2281,1,0,0,0,2282,2283,1,0,0,0,2283,2284,1,0,0,0,2284,2286,
        3,304,152,0,2285,2282,1,0,0,0,2286,2289,1,0,0,0,2287,2285,1,0,0,
        0,2287,2288,1,0,0,0,2288,265,1,0,0,0,2289,2287,1,0,0,0,2290,2301,
        3,274,137,0,2291,2301,3,314,157,0,2292,2301,3,306,153,0,2293,2301,
        3,286,143,0,2294,2301,3,288,144,0,2295,2301,3,298,149,0,2296,2301,
        3,300,150,0,2297,2301,3,302,151,0,2298,2301,3,310,155,0,2299,2301,
        3,268,134,0,2300,2290,1,0,0,0,2300,2291,1,0,0,0,2300,2292,1,0,0,
        0,2300,2293,1,0,0,0,2300,2294,1,0,0,0,2300,2295,1,0,0,0,2300,2296,
        1,0,0,0,2300,2297,1,0,0,0,2300,2298,1,0,0,0,2300,2299,1,0,0,0,2301,
        267,1,0,0,0,2302,2304,5,49,0,0,2303,2305,5,173,0,0,2304,2303,1,0,
        0,0,2304,2305,1,0,0,0,2305,2306,1,0,0,0,2306,2308,5,2,0,0,2307,2309,
        5,173,0,0,2308,2307,1,0,0,0,2308,2309,1,0,0,0,2309,2310,1,0,0,0,
        2310,2312,3,270,135,0,2311,2313,5,173,0,0,2312,2311,1,0,0,0,2312,
        2313,1,0,0,0,2313,2314,1,0,0,0,2314,2315,5,4,0,0,2315,2359,1,0,0,
        0,2316,2318,5,47,0,0,2317,2319,5,173,0,0,2318,2317,1,0,0,0,2318,
        2319,1,0,0,0,2319,2320,1,0,0,0,2320,2322,5,2,0,0,2321,2323,5,173,
        0,0,2322,2321,1,0,0,0,2322,2323,1,0,0,0,2323,2324,1,0,0,0,2324,2326,
        3,270,135,0,2325,2327,5,173,0,0,2326,2325,1,0,0,0,2326,2327,1,0,
        0,0,2327,2328,1,0,0,0,2328,2329,5,4,0,0,2329,2359,1,0,0,0,2330,2332,
        5,114,0,0,2331,2333,5,173,0,0,2332,2331,1,0,0,0,2332,2333,1,0,0,
        0,2333,2334,1,0,0,0,2334,2336,5,2,0,0,2335,2337,5,173,0,0,2336,2335,
        1,0,0,0,2336,2337,1,0,0,0,2337,2338,1,0,0,0,2338,2340,3,270,135,
        0,2339,2341,5,173,0,0,2340,2339,1,0,0,0,2340,2341,1,0,0,0,2341,2342,
        1,0,0,0,2342,2343,5,4,0,0,2343,2359,1,0,0,0,2344,2346,5,150,0,0,
        2345,2347,5,173,0,0,2346,2345,1,0,0,0,2346,2347,1,0,0,0,2347,2348,
        1,0,0,0,2348,2350,5,2,0,0,2349,2351,5,173,0,0,2350,2349,1,0,0,0,
        2350,2351,1,0,0,0,2351,2352,1,0,0,0,2352,2354,3,270,135,0,2353,2355,
        5,173,0,0,2354,2353,1,0,0,0,2354,2355,1,0,0,0,2355,2356,1,0,0,0,
        2356,2357,5,4,0,0,2357,2359,1,0,0,0,2358,2302,1,0,0,0,2358,2316,
        1,0,0,0,2358,2330,1,0,0,0,2358,2344,1,0,0,0,2359,269,1,0,0,0,2360,
        2365,3,272,136,0,2361,2363,5,173,0,0,2362,2361,1,0,0,0,2362,2363,
        1,0,0,0,2363,2364,1,0,0,0,2364,2366,3,178,89,0,2365,2362,1,0,0,0,
        2365,2366,1,0,0,0,2366,271,1,0,0,0,2367,2368,3,310,155,0,2368,2369,
        5,173,0,0,2369,2370,5,96,0,0,2370,2371,5,173,0,0,2371,2372,3,220,
        110,0,2372,273,1,0,0,0,2373,2380,3,312,156,0,2374,2380,5,158,0,0,
        2375,2380,3,276,138,0,2376,2380,5,115,0,0,2377,2380,3,278,139,0,
        2378,2380,3,282,141,0,2379,2373,1,0,0,0,2379,2374,1,0,0,0,2379,2375,
        1,0,0,0,2379,2376,1,0,0,0,2379,2377,1,0,0,0,2379,2378,1,0,0,0,2380,
        275,1,0,0,0,2381,2382,7,6,0,0,2382,277,1,0,0,0,2383,2385,5,7,0,0,
        2384,2386,5,173,0,0,2385,2384,1,0,0,0,2385,2386,1,0,0,0,2386,2400,
        1,0,0,0,2387,2389,3,220,110,0,2388,2390,5,173,0,0,2389,2388,1,0,
        0,0,2389,2390,1,0,0,0,2390,2397,1,0,0,0,2391,2393,3,280,140,0,2392,
        2394,5,173,0,0,2393,2392,1,0,0,0,2393,2394,1,0,0,0,2394,2396,1,0,
        0,0,2395,2391,1,0,0,0,2396,2399,1,0,0,0,2397,2395,1,0,0,0,2397,2398,
        1,0,0,0,2398,2401,1,0,0,0,2399,2397,1,0,0,0,2400,2387,1,0,0,0,2400,
        2401,1,0,0,0,2401,2402,1,0,0,0,2402,2403,5,8,0,0,2403,279,1,0,0,
        0,2404,2406,5,3,0,0,2405,2407,5,173,0,0,2406,2405,1,0,0,0,2406,2407,
        1,0,0,0,2407,2409,1,0,0,0,2408,2410,3,220,110,0,2409,2408,1,0,0,
        0,2409,2410,1,0,0,0,2410,281,1,0,0,0,2411,2413,5,9,0,0,2412,2414,
        5,173,0,0,2413,2412,1,0,0,0,2413,2414,1,0,0,0,2414,2415,1,0,0,0,
        2415,2417,3,284,142,0,2416,2418,5,173,0,0,2417,2416,1,0,0,0,2417,
        2418,1,0,0,0,2418,2429,1,0,0,0,2419,2421,5,3,0,0,2420,2422,5,173,
        0,0,2421,2420,1,0,0,0,2421,2422,1,0,0,0,2422,2423,1,0,0,0,2423,2425,
        3,284,142,0,2424,2426,5,173,0,0,2425,2424,1,0,0,0,2425,2426,1,0,
        0,0,2426,2428,1,0,0,0,2427,2419,1,0,0,0,2428,2431,1,0,0,0,2429,2427,
        1,0,0,0,2429,2430,1,0,0,0,2430,2432,1,0,0,0,2431,2429,1,0,0,0,2432,
        2433,5,10,0,0,2433,283,1,0,0,0,2434,2437,3,326,163,0,2435,2437,5,
        158,0,0,2436,2434,1,0,0,0,2436,2435,1,0,0,0,2437,2439,1,0,0,0,2438,
        2440,5,173,0,0,2439,2438,1,0,0,0,2439,2440,1,0,0,0,2440,2441,1,0,
        0,0,2441,2443,5,157,0,0,2442,2444,5,173,0,0,2443,2442,1,0,0,0,2443,
        2444,1,0,0,0,2444,2445,1,0,0,0,2445,2446,3,220,110,0,2446,285,1,
        0,0,0,2447,2449,5,2,0,0,2448,2450,5,173,0,0,2449,2448,1,0,0,0,2449,
        2450,1,0,0,0,2450,2451,1,0,0,0,2451,2453,3,220,110,0,2452,2454,5,
        173,0,0,2453,2452,1,0,0,0,2453,2454,1,0,0,0,2454,2455,1,0,0,0,2455,
        2456,5,4,0,0,2456,287,1,0,0,0,2457,2459,5,68,0,0,2458,2460,5,173,
        0,0,2459,2458,1,0,0,0,2459,2460,1,0,0,0,2460,2461,1,0,0,0,2461,2463,
        5,2,0,0,2462,2464,5,173,0,0,2463,2462,1,0,0,0,2463,2464,1,0,0,0,
        2464,2465,1,0,0,0,2465,2467,5,152,0,0,2466,2468,5,173,0,0,2467,2466,
        1,0,0,0,2467,2468,1,0,0,0,2468,2469,1,0,0,0,2469,2535,5,4,0,0,2470,
        2472,5,60,0,0,2471,2473,5,173,0,0,2472,2471,1,0,0,0,2472,2473,1,
        0,0,0,2473,2474,1,0,0,0,2474,2476,5,2,0,0,2475,2477,5,173,0,0,2476,
        2475,1,0,0,0,2476,2477,1,0,0,0,2477,2478,1,0,0,0,2478,2480,3,292,
        146,0,2479,2481,5,173,0,0,2480,2479,1,0,0,0,2480,2481,1,0,0,0,2481,
        2492,1,0,0,0,2482,2484,5,52,0,0,2483,2485,5,173,0,0,2484,2483,1,
        0,0,0,2484,2485,1,0,0,0,2485,2486,1,0,0,0,2486,2493,3,98,49,0,2487,
        2489,5,3,0,0,2488,2490,5,173,0,0,2489,2488,1,0,0,0,2489,2490,1,0,
        0,0,2490,2491,1,0,0,0,2491,2493,3,292,146,0,2492,2482,1,0,0,0,2492,
        2487,1,0,0,0,2493,2495,1,0,0,0,2494,2496,5,173,0,0,2495,2494,1,0,
        0,0,2495,2496,1,0,0,0,2496,2497,1,0,0,0,2497,2498,5,4,0,0,2498,2535,
        1,0,0,0,2499,2501,3,290,145,0,2500,2502,5,173,0,0,2501,2500,1,0,
        0,0,2501,2502,1,0,0,0,2502,2503,1,0,0,0,2503,2505,5,2,0,0,2504,2506,
        5,173,0,0,2505,2504,1,0,0,0,2505,2506,1,0,0,0,2506,2511,1,0,0,0,
        2507,2509,5,78,0,0,2508,2510,5,173,0,0,2509,2508,1,0,0,0,2509,2510,
        1,0,0,0,2510,2512,1,0,0,0,2511,2507,1,0,0,0,2511,2512,1,0,0,0,2512,
        2530,1,0,0,0,2513,2515,3,292,146,0,2514,2516,5,173,0,0,2515,2514,
        1,0,0,0,2515,2516,1,0,0,0,2516,2527,1,0,0,0,2517,2519,5,3,0,0,2518,
        2520,5,173,0,0,2519,2518,1,0,0,0,2519,2520,1,0,0,0,2520,2521,1,0,
        0,0,2521,2523,3,292,146,0,2522,2524,5,173,0,0,2523,2522,1,0,0,0,
        2523,2524,1,0,0,0,2524,2526,1,0,0,0,2525,2517,1,0,0,0,2526,2529,
        1,0,0,0,2527,2525,1,0,0,0,2527,2528,1,0,0,0,2528,2531,1,0,0,0,2529,
        2527,1,0,0,0,2530,2513,1,0,0,0,2530,2531,1,0,0,0,2531,2532,1,0,0,
        0,2532,2533,5,4,0,0,2533,2535,1,0,0,0,2534,2457,1,0,0,0,2534,2470,
        1,0,0,0,2534,2499,1,0,0,0,2535,289,1,0,0,0,2536,2537,3,326,163,0,
        2537,291,1,0,0,0,2538,2540,3,326,163,0,2539,2541,5,173,0,0,2540,
        2539,1,0,0,0,2540,2541,1,0,0,0,2541,2542,1,0,0,0,2542,2543,5,157,
        0,0,2543,2545,5,6,0,0,2544,2546,5,173,0,0,2545,2544,1,0,0,0,2545,
        2546,1,0,0,0,2546,2548,1,0,0,0,2547,2538,1,0,0,0,2547,2548,1,0,0,
        0,2548,2549,1,0,0,0,2549,2552,3,220,110,0,2550,2552,3,294,147,0,
        2551,2547,1,0,0,0,2551,2550,1,0,0,0,2552,293,1,0,0,0,2553,2555,3,
        296,148,0,2554,2556,5,173,0,0,2555,2554,1,0,0,0,2555,2556,1,0,0,
        0,2556,2557,1,0,0,0,2557,2558,5,155,0,0,2558,2560,5,16,0,0,2559,
        2561,5,173,0,0,2560,2559,1,0,0,0,2560,2561,1,0,0,0,2561,2562,1,0,
        0,0,2562,2564,3,220,110,0,2563,2565,5,173,0,0,2564,2563,1,0,0,0,
        2564,2565,1,0,0,0,2565,295,1,0,0,0,2566,2591,3,326,163,0,2567,2569,
        5,2,0,0,2568,2570,5,173,0,0,2569,2568,1,0,0,0,2569,2570,1,0,0,0,
        2570,2571,1,0,0,0,2571,2573,3,326,163,0,2572,2574,5,173,0,0,2573,
        2572,1,0,0,0,2573,2574,1,0,0,0,2574,2585,1,0,0,0,2575,2577,5,3,0,
        0,2576,2578,5,173,0,0,2577,2576,1,0,0,0,2577,2578,1,0,0,0,2578,2579,
        1,0,0,0,2579,2581,3,326,163,0,2580,2582,5,173,0,0,2581,2580,1,0,
        0,0,2581,2582,1,0,0,0,2582,2584,1,0,0,0,2583,2575,1,0,0,0,2584,2587,
        1,0,0,0,2585,2583,1,0,0,0,2585,2586,1,0,0,0,2586,2588,1,0,0,0,2587,
        2585,1,0,0,0,2588,2589,5,4,0,0,2589,2591,1,0,0,0,2590,2566,1,0,0,
        0,2590,2567,1,0,0,0,2591,297,1,0,0,0,2592,2597,3,188,94,0,2593,2595,
        5,173,0,0,2594,2593,1,0,0,0,2594,2595,1,0,0,0,2595,2596,1,0,0,0,
        2596,2598,3,190,95,0,2597,2594,1,0,0,0,2598,2599,1,0,0,0,2599,2597,
        1,0,0,0,2599,2600,1,0,0,0,2600,299,1,0,0,0,2601,2603,5,83,0,0,2602,
        2604,5,173,0,0,2603,2602,1,0,0,0,2603,2604,1,0,0,0,2604,2605,1,0,
        0,0,2605,2607,5,9,0,0,2606,2608,5,173,0,0,2607,2606,1,0,0,0,2607,
        2608,1,0,0,0,2608,2609,1,0,0,0,2609,2611,5,106,0,0,2610,2612,5,173,
        0,0,2611,2610,1,0,0,0,2611,2612,1,0,0,0,2612,2613,1,0,0,0,2613,2618,
        3,180,90,0,2614,2616,5,173,0,0,2615,2614,1,0,0,0,2615,2616,1,0,0,
        0,2616,2617,1,0,0,0,2617,2619,3,178,89,0,2618,2615,1,0,0,0,2618,
        2619,1,0,0,0,2619,2621,1,0,0,0,2620,2622,5,173,0,0,2621,2620,1,0,
        0,0,2621,2622,1,0,0,0,2622,2623,1,0,0,0,2623,2624,5,10,0,0,2624,
        301,1,0,0,0,2625,2627,5,68,0,0,2626,2628,5,173,0,0,2627,2626,1,0,
        0,0,2627,2628,1,0,0,0,2628,2629,1,0,0,0,2629,2631,5,9,0,0,2630,2632,
        5,173,0,0,2631,2630,1,0,0,0,2631,2632,1,0,0,0,2632,2633,1,0,0,0,
        2633,2635,5,106,0,0,2634,2636,5,173,0,0,2635,2634,1,0,0,0,2635,2636,
        1,0,0,0,2636,2637,1,0,0,0,2637,2642,3,180,90,0,2638,2640,5,173,0,
        0,2639,2638,1,0,0,0,2639,2640,1,0,0,0,2640,2641,1,0,0,0,2641,2643,
        3,178,89,0,2642,2639,1,0,0,0,2642,2643,1,0,0,0,2643,2645,1,0,0,0,
        2644,2646,5,173,0,0,2645,2644,1,0,0,0,2645,2646,1,0,0,0,2646,2647,
        1,0,0,0,2647,2648,5,10,0,0,2648,303,1,0,0,0,2649,2651,5,5,0,0,2650,
        2652,5,173,0,0,2651,2650,1,0,0,0,2651,2652,1,0,0,0,2652,2655,1,0,
        0,0,2653,2656,3,318,159,0,2654,2656,5,152,0,0,2655,2653,1,0,0,0,
        2655,2654,1,0,0,0,2656,305,1,0,0,0,2657,2662,5,59,0,0,2658,2660,
        5,173,0,0,2659,2658,1,0,0,0,2659,2660,1,0,0,0,2660,2661,1,0,0,0,
        2661,2663,3,308,154,0,2662,2659,1,0,0,0,2663,2664,1,0,0,0,2664,2662,
        1,0,0,0,2664,2665,1,0,0,0,2665,2680,1,0,0,0,2666,2668,5,59,0,0,2667,
        2669,5,173,0,0,2668,2667,1,0,0,0,2668,2669,1,0,0,0,2669,2670,1,0,
        0,0,2670,2675,3,220,110,0,2671,2673,5,173,0,0,2672,2671,1,0,0,0,
        2672,2673,1,0,0,0,2673,2674,1,0,0,0,2674,2676,3,308,154,0,2675,2672,
        1,0,0,0,2676,2677,1,0,0,0,2677,2675,1,0,0,0,2677,2678,1,0,0,0,2678,
        2680,1,0,0,0,2679,2657,1,0,0,0,2679,2666,1,0,0,0,2680,2689,1,0,0,
        0,2681,2683,5,173,0,0,2682,2681,1,0,0,0,2682,2683,1,0,0,0,2683,2684,
        1,0,0,0,2684,2686,5,80,0,0,2685,2687,5,173,0,0,2686,2685,1,0,0,0,
        2686,2687,1,0,0,0,2687,2688,1,0,0,0,2688,2690,3,220,110,0,2689,2682,
        1,0,0,0,2689,2690,1,0,0,0,2690,2692,1,0,0,0,2691,2693,5,173,0,0,
        2692,2691,1,0,0,0,2692,2693,1,0,0,0,2693,2694,1,0,0,0,2694,2695,
        5,81,0,0,2695,307,1,0,0,0,2696,2698,5,145,0,0,2697,2699,5,173,0,
        0,2698,2697,1,0,0,0,2698,2699,1,0,0,0,2699,2700,1,0,0,0,2700,2702,
        3,220,110,0,2701,2703,5,173,0,0,2702,2701,1,0,0,0,2702,2703,1,0,
        0,0,2703,2704,1,0,0,0,2704,2706,5,136,0,0,2705,2707,5,173,0,0,2706,
        2705,1,0,0,0,2706,2707,1,0,0,0,2707,2708,1,0,0,0,2708,2709,3,220,
        110,0,2709,309,1,0,0,0,2710,2711,3,326,163,0,2711,311,1,0,0,0,2712,
        2715,3,322,161,0,2713,2715,3,320,160,0,2714,2712,1,0,0,0,2714,2713,
        1,0,0,0,2715,313,1,0,0,0,2716,2719,5,26,0,0,2717,2720,3,326,163,
        0,2718,2720,5,160,0,0,2719,2717,1,0,0,0,2719,2718,1,0,0,0,2720,315,
        1,0,0,0,2721,2723,3,266,133,0,2722,2724,5,173,0,0,2723,2722,1,0,
        0,0,2723,2724,1,0,0,0,2724,2725,1,0,0,0,2725,2726,3,304,152,0,2726,
        317,1,0,0,0,2727,2728,3,324,162,0,2728,319,1,0,0,0,2729,2730,5,160,
        0,0,2730,321,1,0,0,0,2731,2732,7,7,0,0,2732,323,1,0,0,0,2733,2734,
        3,326,163,0,2734,325,1,0,0,0,2735,2741,5,169,0,0,2736,2737,5,172,
        0,0,2737,2741,6,163,-1,0,2738,2741,5,161,0,0,2739,2741,3,328,164,
        0,2740,2735,1,0,0,0,2740,2736,1,0,0,0,2740,2738,1,0,0,0,2740,2739,
        1,0,0,0,2741,327,1,0,0,0,2742,2743,7,8,0,0,2743,329,1,0,0,0,2744,
        2745,7,9,0,0,2745,331,1,0,0,0,2746,2747,7,10,0,0,2747,333,1,0,0,
        0,2748,2749,7,11,0,0,2749,335,1,0,0,0,474,338,342,347,351,356,359,
        363,366,389,395,399,402,408,411,415,419,423,428,432,439,443,451,
        455,465,469,473,478,491,495,503,506,514,517,532,537,543,547,550,
        553,559,563,568,571,576,580,584,589,604,608,615,635,639,642,645,
        648,651,655,660,664,674,678,683,688,693,699,703,707,712,719,723,
        727,730,734,738,757,761,765,769,773,776,779,792,796,800,804,808,
        812,814,818,822,824,839,843,847,851,855,860,863,867,871,873,877,
        881,883,902,909,922,929,935,938,948,951,959,962,968,971,977,992,
        1008,1015,1022,1033,1053,1057,1062,1071,1075,1080,1086,1092,1098,
        1102,1106,1114,1118,1122,1128,1132,1136,1142,1146,1150,1154,1158,
        1164,1168,1172,1176,1180,1184,1190,1197,1202,1208,1213,1230,1234,
        1242,1252,1257,1262,1266,1271,1277,1282,1285,1289,1293,1297,1303,
        1307,1312,1317,1321,1324,1326,1330,1334,1340,1344,1349,1353,1362,
        1368,1376,1380,1384,1388,1395,1398,1401,1404,1410,1413,1417,1421,
        1426,1430,1439,1443,1448,1462,1464,1466,1471,1481,1487,1494,1507,
        1511,1515,1519,1524,1529,1533,1539,1543,1547,1551,1556,1562,1565,
        1571,1574,1580,1584,1588,1592,1596,1601,1606,1610,1615,1618,1627,
        1636,1641,1654,1657,1665,1669,1674,1679,1683,1688,1694,1699,1706,
        1710,1714,1716,1720,1722,1726,1728,1734,1740,1744,1747,1750,1756,
        1759,1762,1766,1772,1775,1778,1782,1786,1790,1792,1796,1798,1802,
        1804,1808,1810,1816,1820,1824,1828,1832,1836,1840,1844,1848,1851,
        1857,1861,1865,1868,1873,1878,1883,1888,1894,1902,1905,1908,1911,
        1915,1918,1921,1924,1927,1931,1935,1939,1943,1947,1951,1953,1956,
        1960,1964,1968,1972,1974,1980,1983,1986,1992,1995,1998,2019,2029,
        2039,2044,2048,2055,2059,2063,2067,2071,2079,2083,2087,2091,2097,
        2101,2107,2111,2116,2121,2125,2130,2135,2139,2145,2152,2156,2162,
        2169,2173,2179,2186,2190,2195,2200,2204,2209,2212,2219,2222,2227,
        2236,2240,2243,2256,2259,2264,2278,2282,2287,2300,2304,2308,2312,
        2318,2322,2326,2332,2336,2340,2346,2350,2354,2358,2362,2365,2379,
        2385,2389,2393,2397,2400,2406,2409,2413,2417,2421,2425,2429,2436,
        2439,2443,2449,2453,2459,2463,2467,2472,2476,2480,2484,2489,2492,
        2495,2501,2505,2509,2511,2515,2519,2523,2527,2530,2534,2540,2545,
        2547,2551,2555,2560,2564,2569,2573,2577,2581,2585,2590,2594,2599,
        2603,2607,2611,2615,2618,2621,2627,2631,2635,2639,2642,2645,2651,
        2655,2659,2664,2668,2672,2677,2679,2682,2686,2689,2692,2698,2702,
        2706,2714,2719,2723,2740
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
    public kU_RelTableConnection(): KU_RelTableConnectionContext {
        return this.getTypedRuleContext(KU_RelTableConnectionContext, 0);
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
    public TRAIL(): antlr.TerminalNode {
        return this.getToken(CypherParser.TRAIL, 0);
    }
    public ACYCLIC(): antlr.TerminalNode {
        return this.getToken(CypherParser.ACYCLIC, 0);
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

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
    public static readonly RegularDecimalReal = 167;
    public static readonly UnescapedSymbolicName = 168;
    public static readonly IdentifierStart = 169;
    public static readonly IdentifierPart = 170;
    public static readonly EscapedSymbolicName = 171;
    public static readonly SP = 172;
    public static readonly WHITESPACE = 173;
    public static readonly CypherComment = 174;
    public static readonly Unknown = 175;
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
    public static readonly RULE_oC_RangeLiteral = 107;
    public static readonly RULE_kU_RecursiveRelationshipComprehension = 108;
    public static readonly RULE_kU_IntermediateNodeProjectionItems = 109;
    public static readonly RULE_kU_IntermediateRelProjectionItems = 110;
    public static readonly RULE_oC_LowerBound = 111;
    public static readonly RULE_oC_UpperBound = 112;
    public static readonly RULE_oC_LabelName = 113;
    public static readonly RULE_oC_RelTypeName = 114;
    public static readonly RULE_oC_Expression = 115;
    public static readonly RULE_oC_OrExpression = 116;
    public static readonly RULE_oC_XorExpression = 117;
    public static readonly RULE_oC_AndExpression = 118;
    public static readonly RULE_oC_NotExpression = 119;
    public static readonly RULE_oC_ComparisonExpression = 120;
    public static readonly RULE_kU_ComparisonOperator = 121;
    public static readonly RULE_kU_BitwiseOrOperatorExpression = 122;
    public static readonly RULE_kU_BitwiseAndOperatorExpression = 123;
    public static readonly RULE_kU_BitShiftOperatorExpression = 124;
    public static readonly RULE_kU_BitShiftOperator = 125;
    public static readonly RULE_oC_AddOrSubtractExpression = 126;
    public static readonly RULE_kU_AddOrSubtractOperator = 127;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 128;
    public static readonly RULE_kU_MultiplyDivideModuloOperator = 129;
    public static readonly RULE_oC_PowerOfExpression = 130;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 131;
    public static readonly RULE_oC_StringListNullOperatorExpression = 132;
    public static readonly RULE_oC_ListOperatorExpression = 133;
    public static readonly RULE_oC_StringOperatorExpression = 134;
    public static readonly RULE_oC_RegularExpression = 135;
    public static readonly RULE_oC_NullOperatorExpression = 136;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 137;
    public static readonly RULE_oC_Atom = 138;
    public static readonly RULE_oC_Quantifier = 139;
    public static readonly RULE_oC_FilterExpression = 140;
    public static readonly RULE_oC_IdInColl = 141;
    public static readonly RULE_oC_Literal = 142;
    public static readonly RULE_oC_BooleanLiteral = 143;
    public static readonly RULE_oC_ListLiteral = 144;
    public static readonly RULE_kU_ListEntry = 145;
    public static readonly RULE_kU_StructLiteral = 146;
    public static readonly RULE_kU_StructField = 147;
    public static readonly RULE_oC_ParenthesizedExpression = 148;
    public static readonly RULE_oC_FunctionInvocation = 149;
    public static readonly RULE_oC_FunctionName = 150;
    public static readonly RULE_kU_FunctionParameter = 151;
    public static readonly RULE_kU_LambdaParameter = 152;
    public static readonly RULE_kU_LambdaVars = 153;
    public static readonly RULE_oC_PathPatterns = 154;
    public static readonly RULE_oC_ExistSubquery = 155;
    public static readonly RULE_kU_CountSubquery = 156;
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
        "Digit", "NonZeroDigit", "NonZeroOctDigit", "ZeroDigit", "RegularDecimalReal", 
        "UnescapedSymbolicName", "IdentifierStart", "IdentifierPart", "EscapedSymbolicName", 
        "SP", "WHITESPACE", "CypherComment", "Unknown"
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
        "oC_Query", "kU_ProjectGraph", "kU_GraphProjectionTableItems", "oC_RegularQuery", 
        "oC_Union", "oC_SingleQuery", "oC_SinglePartQuery", "oC_MultiPartQuery", 
        "kU_QueryPart", "oC_UpdatingClause", "oC_ReadingClause", "kU_LoadFrom", 
        "kU_InQueryCall", "kU_GraphProjectionTableItem", "kU_GraphProjectionColumnItems", 
        "kU_GraphProjectionColumnItem", "oC_Match", "kU_Hint", "kU_JoinNode", 
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
                    if (_la===172) {
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
            if (_la===172) {
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
            if (_la===84 || _la===122) {
                {
                this.state = 365;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 369;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
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
                if (_la===172) {
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
            this.state = 399;
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
                this.kU_CreateRelTableGroup();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 382;
                this.kU_CreateSequence();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 383;
                this.kU_CreateType();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 384;
                this.kU_Drop();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 385;
                this.kU_AlterTable();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 386;
                this.kU_CopyFrom();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 387;
                this.kU_CopyFromByColumn();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 388;
                this.kU_CopyTO();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 389;
                this.kU_StandaloneCall();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 390;
                this.kU_CreateMacro();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 391;
                this.kU_CommentOn();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 392;
                this.kU_Transaction();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 393;
                this.kU_Extension();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 394;
                this.kU_ExportDatabase();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 395;
                this.kU_ImportDatabase();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 396;
                this.kU_AttachDatabase();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 397;
                this.kU_DetachDatabase();
                }
                break;
            case 21:
                this.enterOuterAlt(localctx, 21);
                {
                this.state = 398;
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
            this.state = 401;
            this.match(CypherParser.COPY);
            this.state = 402;
            this.match(CypherParser.SP);
            this.state = 403;
            this.oC_SchemaName();
            this.state = 412;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                {
                {
                this.state = 405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 404;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 407;
                this.kU_ColumnNames();
                this.state = 409;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 408;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                break;
            case 2:
                {
                this.state = 411;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 414;
            this.match(CypherParser.FROM);
            this.state = 415;
            this.match(CypherParser.SP);
            this.state = 416;
            this.kU_ScanSource();
            this.state = 421;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                {
                this.state = 418;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 417;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 420;
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
            this.state = 423;
            this.match(CypherParser.T__1);
            this.state = 425;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 424;
                this.match(CypherParser.SP);
                }
            }

            this.state = 427;
            this.oC_SchemaName();
            this.state = 438;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 429;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 428;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 431;
                    this.match(CypherParser.T__2);
                    this.state = 433;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
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
                _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            }
            this.state = 442;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 441;
                this.match(CypherParser.SP);
                }
            }

            this.state = 444;
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
            this.state = 465;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
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
                if (_la===172) {
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
                if (_la===172) {
                    {
                    this.state = 452;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 455;
                this.match(CypherParser.T__3);
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
                if (_la===172) {
                    {
                    this.state = 460;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 463;
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
            this.state = 467;
            this.match(CypherParser.COPY);
            this.state = 468;
            this.match(CypherParser.SP);
            this.state = 469;
            this.oC_SchemaName();
            this.state = 470;
            this.match(CypherParser.SP);
            this.state = 471;
            this.match(CypherParser.FROM);
            this.state = 472;
            this.match(CypherParser.SP);
            this.state = 473;
            this.match(CypherParser.T__1);
            this.state = 475;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 474;
                this.match(CypherParser.SP);
                }
            }

            this.state = 477;
            this.match(CypherParser.StringLiteral);
            this.state = 488;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3 || _la===172) {
                {
                {
                this.state = 479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 478;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 481;
                this.match(CypherParser.T__2);
                this.state = 483;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 482;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 485;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 490;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 491;
            this.match(CypherParser.T__3);
            this.state = 492;
            this.match(CypherParser.SP);
            this.state = 493;
            this.match(CypherParser.BY);
            this.state = 494;
            this.match(CypherParser.SP);
            this.state = 495;
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
            this.state = 497;
            this.match(CypherParser.COPY);
            this.state = 498;
            this.match(CypherParser.SP);
            this.state = 499;
            this.match(CypherParser.T__1);
            this.state = 501;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 500;
                this.match(CypherParser.SP);
                }
            }

            this.state = 503;
            this.oC_Query();
            this.state = 505;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 504;
                this.match(CypherParser.SP);
                }
            }

            this.state = 507;
            this.match(CypherParser.T__3);
            this.state = 508;
            this.match(CypherParser.SP);
            this.state = 509;
            this.match(CypherParser.TO);
            this.state = 510;
            this.match(CypherParser.SP);
            this.state = 511;
            this.match(CypherParser.StringLiteral);
            this.state = 516;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
            case 1:
                {
                this.state = 513;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 512;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 515;
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
            this.state = 518;
            this.match(CypherParser.EXPORT);
            this.state = 519;
            this.match(CypherParser.SP);
            this.state = 520;
            this.match(CypherParser.DATABASE);
            this.state = 521;
            this.match(CypherParser.SP);
            this.state = 522;
            this.match(CypherParser.StringLiteral);
            this.state = 527;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
            case 1:
                {
                this.state = 524;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 523;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 526;
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
            this.state = 529;
            this.match(CypherParser.IMPORT);
            this.state = 530;
            this.match(CypherParser.SP);
            this.state = 531;
            this.match(CypherParser.DATABASE);
            this.state = 532;
            this.match(CypherParser.SP);
            this.state = 533;
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
            this.state = 535;
            this.match(CypherParser.ATTACH);
            this.state = 536;
            this.match(CypherParser.SP);
            this.state = 537;
            this.match(CypherParser.StringLiteral);
            this.state = 542;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
            case 1:
                {
                this.state = 538;
                this.match(CypherParser.SP);
                this.state = 539;
                this.match(CypherParser.AS);
                this.state = 540;
                this.match(CypherParser.SP);
                this.state = 541;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 544;
            this.match(CypherParser.SP);
            this.state = 545;
            this.match(CypherParser.T__1);
            this.state = 547;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 546;
                this.match(CypherParser.SP);
                }
            }

            this.state = 549;
            this.match(CypherParser.DBTYPE);
            this.state = 550;
            this.match(CypherParser.SP);
            this.state = 551;
            this.oC_SymbolicName();
            this.state = 560;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
            case 1:
                {
                this.state = 553;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 552;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 555;
                this.match(CypherParser.T__2);
                this.state = 557;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 556;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 559;
                this.kU_Options();
                }
                break;
            }
            this.state = 563;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 562;
                this.match(CypherParser.SP);
                }
            }

            this.state = 565;
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
            this.state = 586;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 567;
                this.oC_SymbolicName();
                this.state = 581;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
                case 1:
                    {
                    this.state = 569;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 568;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 571;
                    this.match(CypherParser.T__5);
                    this.state = 573;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 572;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                case 2:
                    {
                    this.state = 578;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===172) {
                        {
                        {
                        this.state = 575;
                        this.match(CypherParser.SP);
                        }
                        }
                        this.state = 580;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                    break;
                }
                this.state = 583;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 585;
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
            this.state = 588;
            this.kU_Option();
            this.state = 599;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 590;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 589;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 592;
                    this.match(CypherParser.T__2);
                    this.state = 594;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 593;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 596;
                    this.kU_Option();
                    }
                    }
                }
                this.state = 601;
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
            this.state = 602;
            this.match(CypherParser.DETACH);
            this.state = 603;
            this.match(CypherParser.SP);
            this.state = 604;
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
            this.state = 606;
            this.match(CypherParser.USE);
            this.state = 607;
            this.match(CypherParser.SP);
            this.state = 608;
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
            this.state = 625;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 610;
                this.match(CypherParser.CALL);
                this.state = 611;
                this.match(CypherParser.SP);
                this.state = 612;
                this.oC_SymbolicName();
                this.state = 614;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 613;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 616;
                this.match(CypherParser.T__5);
                this.state = 618;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 617;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 620;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 622;
                this.match(CypherParser.CALL);
                this.state = 623;
                this.match(CypherParser.SP);
                this.state = 624;
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
            this.state = 627;
            this.match(CypherParser.COMMENT);
            this.state = 628;
            this.match(CypherParser.SP);
            this.state = 629;
            this.match(CypherParser.ON);
            this.state = 630;
            this.match(CypherParser.SP);
            this.state = 631;
            this.match(CypherParser.TABLE);
            this.state = 632;
            this.match(CypherParser.SP);
            this.state = 633;
            this.oC_SchemaName();
            this.state = 634;
            this.match(CypherParser.SP);
            this.state = 635;
            this.match(CypherParser.IS);
            this.state = 636;
            this.match(CypherParser.SP);
            this.state = 637;
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
            this.state = 639;
            this.match(CypherParser.CREATE);
            this.state = 640;
            this.match(CypherParser.SP);
            this.state = 641;
            this.match(CypherParser.MACRO);
            this.state = 642;
            this.match(CypherParser.SP);
            this.state = 643;
            this.oC_FunctionName();
            this.state = 645;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 644;
                this.match(CypherParser.SP);
                }
            }

            this.state = 647;
            this.match(CypherParser.T__1);
            this.state = 649;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
            case 1:
                {
                this.state = 648;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 652;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
            case 1:
                {
                this.state = 651;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 655;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
            case 1:
                {
                this.state = 654;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 658;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577927) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1378158015) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 1153) !== 0)) {
                {
                this.state = 657;
                this.kU_DefaultArg();
                }
            }

            this.state = 670;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 661;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 660;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 663;
                    this.match(CypherParser.T__2);
                    this.state = 665;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 664;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 667;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 672;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
            }
            this.state = 674;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 673;
                this.match(CypherParser.SP);
                }
            }

            this.state = 676;
            this.match(CypherParser.T__3);
            this.state = 677;
            this.match(CypherParser.SP);
            this.state = 678;
            this.match(CypherParser.AS);
            this.state = 679;
            this.match(CypherParser.SP);
            this.state = 680;
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
            this.state = 682;
            this.oC_SymbolicName();
            this.state = 693;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 684;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
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
                    if (_la===172) {
                        {
                        this.state = 687;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 690;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 695;
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
            this.state = 696;
            this.oC_SymbolicName();
            this.state = 698;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 697;
                this.match(CypherParser.SP);
                }
            }

            this.state = 700;
            this.match(CypherParser.COLON);
            this.state = 701;
            this.match(CypherParser.T__5);
            this.state = 703;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 702;
                this.match(CypherParser.SP);
                }
            }

            this.state = 705;
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
            this.state = 740;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 707;
                this.match(CypherParser.T__6);
                this.state = 709;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 708;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 711;
                this.match(CypherParser.StringLiteral);
                this.state = 722;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3 || _la===172) {
                    {
                    {
                    this.state = 713;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 712;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 715;
                    this.match(CypherParser.T__2);
                    this.state = 717;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 716;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 719;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 724;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 725;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 726;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 727;
                this.match(CypherParser.GLOB);
                this.state = 729;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 728;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 731;
                this.match(CypherParser.T__1);
                this.state = 733;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 732;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 735;
                this.match(CypherParser.StringLiteral);
                this.state = 737;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 736;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 739;
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
            this.state = 742;
            this.match(CypherParser.T__1);
            this.state = 744;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 743;
                this.match(CypherParser.SP);
                }
            }

            this.state = 746;
            this.kU_Options();
            this.state = 748;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 747;
                this.match(CypherParser.SP);
                }
            }

            this.state = 750;
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
            this.state = 752;
            this.match(CypherParser.IF);
            this.state = 753;
            this.match(CypherParser.SP);
            this.state = 754;
            this.match(CypherParser.NOT);
            this.state = 755;
            this.match(CypherParser.SP);
            this.state = 756;
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
            this.state = 758;
            this.match(CypherParser.CREATE);
            this.state = 759;
            this.match(CypherParser.SP);
            this.state = 760;
            this.match(CypherParser.NODE);
            this.state = 761;
            this.match(CypherParser.SP);
            this.state = 762;
            this.match(CypherParser.TABLE);
            this.state = 763;
            this.match(CypherParser.SP);
            this.state = 767;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
            case 1:
                {
                this.state = 764;
                this.kU_IfNotExists();
                this.state = 765;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 769;
            this.oC_SchemaName();
            this.state = 771;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 770;
                this.match(CypherParser.SP);
                }
            }

            this.state = 773;
            this.match(CypherParser.T__1);
            this.state = 775;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 774;
                this.match(CypherParser.SP);
                }
            }

            this.state = 777;
            this.kU_PropertyDefinitions();
            this.state = 779;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
            case 1:
                {
                this.state = 778;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 786;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 781;
                this.match(CypherParser.T__2);
                this.state = 783;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 782;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 785;
                this.kU_CreateNodeConstraint();
                }
            }

            this.state = 789;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 788;
                this.match(CypherParser.SP);
                }
            }

            this.state = 791;
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
            this.state = 793;
            this.match(CypherParser.CREATE);
            this.state = 794;
            this.match(CypherParser.SP);
            this.state = 795;
            this.match(CypherParser.REL);
            this.state = 796;
            this.match(CypherParser.SP);
            this.state = 797;
            this.match(CypherParser.TABLE);
            this.state = 798;
            this.match(CypherParser.SP);
            this.state = 802;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
            case 1:
                {
                this.state = 799;
                this.kU_IfNotExists();
                this.state = 800;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 804;
            this.oC_SchemaName();
            this.state = 806;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 805;
                this.match(CypherParser.SP);
                }
            }

            this.state = 808;
            this.match(CypherParser.T__1);
            this.state = 810;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 809;
                this.match(CypherParser.SP);
                }
            }

            this.state = 812;
            this.kU_RelTableConnection();
            this.state = 814;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 813;
                this.match(CypherParser.SP);
                }
            }

            this.state = 824;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
            case 1:
                {
                this.state = 816;
                this.match(CypherParser.T__2);
                this.state = 818;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 817;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 820;
                this.kU_PropertyDefinitions();
                this.state = 822;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 821;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 834;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 826;
                this.match(CypherParser.T__2);
                this.state = 828;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 827;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 830;
                this.oC_SymbolicName();
                this.state = 832;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 831;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 836;
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
            this.state = 838;
            this.match(CypherParser.CREATE);
            this.state = 839;
            this.match(CypherParser.SP);
            this.state = 840;
            this.match(CypherParser.REL);
            this.state = 841;
            this.match(CypherParser.SP);
            this.state = 842;
            this.match(CypherParser.TABLE);
            this.state = 843;
            this.match(CypherParser.SP);
            this.state = 844;
            this.match(CypherParser.GROUP);
            this.state = 845;
            this.match(CypherParser.SP);
            this.state = 849;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
            case 1:
                {
                this.state = 846;
                this.kU_IfNotExists();
                this.state = 847;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 851;
            this.oC_SchemaName();
            this.state = 853;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
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
            if (_la===172) {
                {
                this.state = 856;
                this.match(CypherParser.SP);
                }
            }

            this.state = 859;
            this.kU_RelTableConnection();
            this.state = 868;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 861;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 860;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 863;
                    this.match(CypherParser.T__2);
                    this.state = 865;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 864;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 867;
                    this.kU_RelTableConnection();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 870;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 873;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 872;
                this.match(CypherParser.SP);
                }
            }

            this.state = 883;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
            case 1:
                {
                this.state = 875;
                this.match(CypherParser.T__2);
                this.state = 877;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 876;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 879;
                this.kU_PropertyDefinitions();
                this.state = 881;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 880;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 893;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 885;
                this.match(CypherParser.T__2);
                this.state = 887;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 886;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 889;
                this.oC_SymbolicName();
                this.state = 891;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 890;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 895;
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
            this.state = 897;
            this.match(CypherParser.FROM);
            this.state = 898;
            this.match(CypherParser.SP);
            this.state = 899;
            this.oC_SchemaName();
            this.state = 900;
            this.match(CypherParser.SP);
            this.state = 901;
            this.match(CypherParser.TO);
            this.state = 902;
            this.match(CypherParser.SP);
            this.state = 903;
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
            this.state = 905;
            this.match(CypherParser.CREATE);
            this.state = 906;
            this.match(CypherParser.SP);
            this.state = 907;
            this.match(CypherParser.SEQUENCE);
            this.state = 908;
            this.match(CypherParser.SP);
            this.state = 912;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
            case 1:
                {
                this.state = 909;
                this.kU_IfNotExists();
                this.state = 910;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 914;
            this.oC_SchemaName();
            this.state = 919;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 915;
                    this.match(CypherParser.SP);
                    this.state = 916;
                    this.kU_SequenceOptions();
                    }
                    }
                }
                this.state = 921;
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
            this.state = 922;
            this.match(CypherParser.CREATE);
            this.state = 923;
            this.match(CypherParser.SP);
            this.state = 924;
            this.match(CypherParser.TYPE);
            this.state = 925;
            this.match(CypherParser.SP);
            this.state = 926;
            this.oC_SchemaName();
            this.state = 927;
            this.match(CypherParser.SP);
            this.state = 928;
            this.match(CypherParser.AS);
            this.state = 929;
            this.match(CypherParser.SP);
            this.state = 930;
            this.kU_DataType(0);
            this.state = 932;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
            case 1:
                {
                this.state = 931;
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
            this.state = 939;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 934;
                this.kU_IncrementBy();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 935;
                this.kU_MinValue();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 936;
                this.kU_MaxValue();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 937;
                this.kU_StartWith();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 938;
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
            this.state = 941;
            this.match(CypherParser.INCREMENT);
            this.state = 942;
            this.match(CypherParser.SP);
            this.state = 945;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===57) {
                {
                this.state = 943;
                this.match(CypherParser.BY);
                this.state = 944;
                this.match(CypherParser.SP);
                }
            }

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
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 961;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 952;
                this.match(CypherParser.NO);
                this.state = 953;
                this.match(CypherParser.SP);
                this.state = 954;
                this.match(CypherParser.MINVALUE);
                }
                }
                break;
            case CypherParser.MINVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 955;
                this.match(CypherParser.MINVALUE);
                this.state = 956;
                this.match(CypherParser.SP);
                this.state = 958;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===155) {
                    {
                    this.state = 957;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 960;
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
            this.state = 972;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 963;
                this.match(CypherParser.NO);
                this.state = 964;
                this.match(CypherParser.SP);
                this.state = 965;
                this.match(CypherParser.MAXVALUE);
                }
                }
                break;
            case CypherParser.MAXVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 966;
                this.match(CypherParser.MAXVALUE);
                this.state = 967;
                this.match(CypherParser.SP);
                this.state = 969;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===155) {
                    {
                    this.state = 968;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 971;
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
            this.state = 974;
            this.match(CypherParser.START);
            this.state = 975;
            this.match(CypherParser.SP);
            this.state = 978;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===147) {
                {
                this.state = 976;
                this.match(CypherParser.WITH);
                this.state = 977;
                this.match(CypherParser.SP);
                }
            }

            this.state = 981;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===155) {
                {
                this.state = 980;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 983;
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
            this.state = 987;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===111) {
                {
                this.state = 985;
                this.match(CypherParser.NO);
                this.state = 986;
                this.match(CypherParser.SP);
                }
            }

            this.state = 989;
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
            this.state = 991;
            this.match(CypherParser.IF);
            this.state = 992;
            this.match(CypherParser.SP);
            this.state = 993;
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
            this.state = 995;
            this.match(CypherParser.DROP);
            this.state = 996;
            this.match(CypherParser.SP);
            this.state = 997;
            _la = this._input.LA(1);
            if(!(_la===130 || _la===135)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 998;
            this.match(CypherParser.SP);
            this.state = 1002;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
            case 1:
                {
                this.state = 999;
                this.kU_IfExists();
                this.state = 1000;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1004;
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
            this.state = 1006;
            this.match(CypherParser.ALTER);
            this.state = 1007;
            this.match(CypherParser.SP);
            this.state = 1008;
            this.match(CypherParser.TABLE);
            this.state = 1009;
            this.match(CypherParser.SP);
            this.state = 1010;
            this.oC_SchemaName();
            this.state = 1011;
            this.match(CypherParser.SP);
            this.state = 1012;
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
            this.state = 1018;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1014;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1015;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1016;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1017;
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
            this.state = 1020;
            this.match(CypherParser.ADD);
            this.state = 1021;
            this.match(CypherParser.SP);
            this.state = 1022;
            this.oC_PropertyKeyName();
            this.state = 1023;
            this.match(CypherParser.SP);
            this.state = 1024;
            this.kU_DataType(0);
            this.state = 1027;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
            case 1:
                {
                this.state = 1025;
                this.match(CypherParser.SP);
                this.state = 1026;
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
            this.state = 1029;
            this.match(CypherParser.DEFAULT);
            this.state = 1030;
            this.match(CypherParser.SP);
            this.state = 1031;
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
            this.state = 1033;
            this.match(CypherParser.DROP);
            this.state = 1034;
            this.match(CypherParser.SP);
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
            _alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1053;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
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
                    if (_la===172) {
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
                _alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            _alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1071;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
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
                    if (_la===172) {
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
                _alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
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
            switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
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
            if (_la===172) {
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
            if (_la===172) {
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
            if (_la===172) {
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
            switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
                if (_la===172) {
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
            _alt = this._interp.adaptivePredict(this._input, 148, this._ctx);
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
                _alt = this._interp.adaptivePredict(this._input, 148, this._ctx);
            }
            }
        }
        catch (re) {
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
            _alt = this._interp.adaptivePredict(this._input, 149, this._ctx);
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
            switch ( this._interp.adaptivePredict(this._input, 152, this._ctx) ) {
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
            switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
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
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1252;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 157, this._ctx) ) {
            case 1:
                {
                this.state = 1248;
                this.kU_ProjectGraph();
                this.state = 1250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1249;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 1254;
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
            this.state = 1256;
            this.match(CypherParser.PROJECT);
            this.state = 1257;
            this.match(CypherParser.SP);
            this.state = 1258;
            this.match(CypherParser.GRAPH);
            this.state = 1259;
            this.match(CypherParser.SP);
            this.state = 1260;
            this.oC_SchemaName();
            this.state = 1262;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1261;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1264;
            this.match(CypherParser.T__1);
            this.state = 1266;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1265;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1268;
            this.kU_GraphProjectionTableItems();
            this.state = 1270;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1269;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1272;
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
            this.state = 1274;
            this.kU_GraphProjectionTableItem();
            this.state = 1285;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 163, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1276;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1275;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1278;
                    this.match(CypherParser.T__2);
                    this.state = 1280;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1279;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1282;
                    this.kU_GraphProjectionTableItem();
                    }
                    }
                }
                this.state = 1287;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 163, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1309;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 168, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1288;
                this.oC_SingleQuery();
                this.state = 1295;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 165, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1290;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 1289;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1292;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 1297;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 165, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1302;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1298;
                        this.oC_Return();
                        this.state = 1300;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 1299;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1304;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 167, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1306;
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
            this.state = 1323;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 171, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1311;
                this.match(CypherParser.UNION);
                this.state = 1312;
                this.match(CypherParser.SP);
                this.state = 1313;
                this.match(CypherParser.ALL);
                this.state = 1315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1314;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1317;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1318;
                this.match(CypherParser.UNION);
                this.state = 1320;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1319;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1322;
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
            this.state = 1327;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1325;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1326;
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
            this.state = 1364;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1335;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 1081353) !== 0) || _la===143) {
                    {
                    {
                    this.state = 1329;
                    this.oC_ReadingClause();
                    this.state = 1331;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1330;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1337;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1338;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1345;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 1081353) !== 0) || _la===143) {
                    {
                    {
                    this.state = 1339;
                    this.oC_ReadingClause();
                    this.state = 1341;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1340;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1347;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1348;
                this.oC_UpdatingClause();
                this.state = 1355;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 178, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1350;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 1349;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1352;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1357;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 178, this._ctx);
                }
                this.state = 1362;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
                case 1:
                    {
                    this.state = 1359;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1358;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1361;
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
        this.enterRule(localctx, 132, CypherParser.RULE_oC_MultiPartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1370;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1366;
                    this.kU_QueryPart();
                    this.state = 1368;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1367;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1372;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 183, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1374;
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
            this.state = 1382;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===58 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 1081353) !== 0) || _la===143) {
                {
                {
                this.state = 1376;
                this.oC_ReadingClause();
                this.state = 1378;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1377;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1384;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1391;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 289) !== 0) || _la===108 || _la===131) {
                {
                {
                this.state = 1385;
                this.oC_UpdatingClause();
                this.state = 1387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1386;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1393;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1394;
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
            this.state = 1400;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1396;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1397;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1398;
                this.oC_Set();
                }
                break;
            case CypherParser.DELETE:
            case CypherParser.DETACH:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1399;
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
            this.state = 1406;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.MATCH:
            case CypherParser.OPTIONAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1402;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1403;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
            case CypherParser.PROJECT:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1404;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1405;
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
            this.state = 1408;
            this.match(CypherParser.LOAD);
            this.state = 1426;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
            case 1:
                {
                this.state = 1409;
                this.match(CypherParser.SP);
                this.state = 1410;
                this.match(CypherParser.WITH);
                this.state = 1411;
                this.match(CypherParser.SP);
                this.state = 1412;
                this.match(CypherParser.HEADERS);
                this.state = 1414;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1413;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1416;
                this.match(CypherParser.T__1);
                this.state = 1418;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1417;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1420;
                this.kU_ColumnDefinitions();
                this.state = 1422;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1421;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1424;
                this.match(CypherParser.T__3);
                }
                break;
            }
            this.state = 1428;
            this.match(CypherParser.SP);
            this.state = 1429;
            this.match(CypherParser.FROM);
            this.state = 1430;
            this.match(CypherParser.SP);
            this.state = 1431;
            this.kU_ScanSource();
            this.state = 1436;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
            case 1:
                {
                this.state = 1433;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1432;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1435;
                this.kU_ParsingOptions();
                }
                break;
            }
            this.state = 1442;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
            case 1:
                {
                this.state = 1439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1438;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1441;
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
            this.state = 1448;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===123) {
                {
                this.state = 1444;
                this.kU_ProjectGraph();
                this.state = 1446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1445;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1450;
            this.match(CypherParser.CALL);
            this.state = 1451;
            this.match(CypherParser.SP);
            this.state = 1452;
            this.oC_FunctionInvocation();
            this.state = 1457;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 201, this._ctx) ) {
            case 1:
                {
                this.state = 1454;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1453;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1456;
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
            this.state = 1459;
            this.oC_SchemaName();
            this.state = 1473;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
            case 1:
                {
                this.state = 1461;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1460;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1463;
                this.match(CypherParser.T__8);
                this.state = 1465;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1464;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1467;
                this.kU_GraphProjectionColumnItems();
                this.state = 1469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1468;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1471;
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
            this.state = 1475;
            this.kU_GraphProjectionColumnItem();
            this.state = 1486;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 208, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1477;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1476;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1479;
                    this.match(CypherParser.T__2);
                    this.state = 1481;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1480;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1483;
                    this.kU_GraphProjectionColumnItem();
                    }
                    }
                }
                this.state = 1488;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 208, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1489;
            this.oC_PropertyKeyName();
            this.state = 1492;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
            case 1:
                {
                this.state = 1490;
                this.match(CypherParser.SP);
                this.state = 1491;
                this.kU_Default();
                }
                break;
            }
            this.state = 1496;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
            case 1:
                {
                this.state = 1494;
                this.match(CypherParser.SP);
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
    public oC_Match(): OC_MatchContext {
        let localctx: OC_MatchContext = new OC_MatchContext(this._ctx, this.state);
        this.enterRule(localctx, 150, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1500;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===118) {
                {
                this.state = 1498;
                this.match(CypherParser.OPTIONAL);
                this.state = 1499;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1502;
            this.match(CypherParser.MATCH);
            this.state = 1504;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1503;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1506;
            this.oC_Pattern();
            this.state = 1509;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
            case 1:
                {
                this.state = 1507;
                this.match(CypherParser.SP);
                this.state = 1508;
                this.oC_Where();
                }
                break;
            }
            this.state = 1513;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 214, this._ctx) ) {
            case 1:
                {
                this.state = 1511;
                this.match(CypherParser.SP);
                this.state = 1512;
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
            this.state = 1515;
            this.match(CypherParser.HINT);
            this.state = 1516;
            this.match(CypherParser.SP);
            this.state = 1517;
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
            this.state = 1531;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__1:
                {
                this.state = 1520;
                this.match(CypherParser.T__1);
                this.state = 1522;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1521;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1524;
                this.kU_JoinNode(0);
                this.state = 1526;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1525;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1528;
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
                this.state = 1530;
                this.oC_SchemaName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1549;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 220, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1547;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
                    case 1:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1533;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1534;
                        this.match(CypherParser.SP);
                        this.state = 1535;
                        this.match(CypherParser.JOIN);
                        this.state = 1536;
                        this.match(CypherParser.SP);
                        this.state = 1537;
                        this.kU_JoinNode(5);
                        }
                        break;
                    case 2:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1538;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1543;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                            case 1:
                                {
                                {
                                this.state = 1539;
                                this.match(CypherParser.SP);
                                this.state = 1540;
                                this.match(CypherParser.MULTI_JOIN);
                                this.state = 1541;
                                this.match(CypherParser.SP);
                                this.state = 1542;
                                this.oC_SchemaName();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 1545;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 218, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    }
                    }
                }
                this.state = 1551;
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
            this.state = 1552;
            this.match(CypherParser.UNWIND);
            this.state = 1554;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1553;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1556;
            this.oC_Expression();
            this.state = 1557;
            this.match(CypherParser.SP);
            this.state = 1558;
            this.match(CypherParser.AS);
            this.state = 1559;
            this.match(CypherParser.SP);
            this.state = 1560;
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
            this.state = 1562;
            this.match(CypherParser.CREATE);
            this.state = 1564;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1563;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1566;
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
            this.state = 1568;
            this.match(CypherParser.MERGE);
            this.state = 1570;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1569;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1572;
            this.oC_Pattern();
            this.state = 1577;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 224, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1573;
                    this.match(CypherParser.SP);
                    this.state = 1574;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1579;
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
            this.state = 1590;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1580;
                this.match(CypherParser.ON);
                this.state = 1581;
                this.match(CypherParser.SP);
                this.state = 1582;
                this.match(CypherParser.MATCH);
                this.state = 1583;
                this.match(CypherParser.SP);
                this.state = 1584;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1585;
                this.match(CypherParser.ON);
                this.state = 1586;
                this.match(CypherParser.SP);
                this.state = 1587;
                this.match(CypherParser.CREATE);
                this.state = 1588;
                this.match(CypherParser.SP);
                this.state = 1589;
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
            this.state = 1592;
            this.match(CypherParser.SET);
            this.state = 1594;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1593;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1596;
            this.oC_SetItem();
            this.state = 1607;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 229, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1598;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1597;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1600;
                    this.match(CypherParser.T__2);
                    this.state = 1602;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1601;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1604;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1609;
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
            this.state = 1610;
            this.oC_PropertyExpression();
            this.state = 1612;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1611;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1614;
            this.match(CypherParser.T__5);
            this.state = 1616;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1615;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1618;
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
            this.state = 1622;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===77) {
                {
                this.state = 1620;
                this.match(CypherParser.DETACH);
                this.state = 1621;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1624;
            this.match(CypherParser.DELETE);
            this.state = 1626;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1625;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1628;
            this.oC_Expression();
            this.state = 1639;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 236, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1630;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1629;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1632;
                    this.match(CypherParser.T__2);
                    this.state = 1634;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1633;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1636;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1641;
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
            this.state = 1642;
            this.match(CypherParser.WITH);
            this.state = 1643;
            this.oC_ProjectionBody();
            this.state = 1648;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
            case 1:
                {
                this.state = 1645;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1644;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1647;
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
            this.state = 1650;
            this.match(CypherParser.RETURN);
            this.state = 1651;
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
            this.state = 1657;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
            case 1:
                {
                this.state = 1654;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1653;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1656;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1659;
            this.match(CypherParser.SP);
            this.state = 1660;
            this.oC_ProjectionItems();
            this.state = 1663;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
            case 1:
                {
                this.state = 1661;
                this.match(CypherParser.SP);
                this.state = 1662;
                this.oC_Order();
                }
                break;
            }
            this.state = 1667;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
            case 1:
                {
                this.state = 1665;
                this.match(CypherParser.SP);
                this.state = 1666;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1671;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
            case 1:
                {
                this.state = 1669;
                this.match(CypherParser.SP);
                this.state = 1670;
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
            this.state = 1701;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1673;
                this.match(CypherParser.STAR);
                this.state = 1684;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1675;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 1674;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1677;
                        this.match(CypherParser.T__2);
                        this.state = 1679;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 1678;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1681;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1686;
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
            case CypherParser.RegularDecimalReal:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1687;
                this.oC_ProjectionItem();
                this.state = 1698;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1689;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 1688;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1691;
                        this.match(CypherParser.T__2);
                        this.state = 1693;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 1692;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1695;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1700;
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
            this.state = 1710;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 251, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1703;
                this.oC_Expression();
                this.state = 1704;
                this.match(CypherParser.SP);
                this.state = 1705;
                this.match(CypherParser.AS);
                this.state = 1706;
                this.match(CypherParser.SP);
                this.state = 1707;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1709;
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
            this.state = 1712;
            this.match(CypherParser.ORDER);
            this.state = 1713;
            this.match(CypherParser.SP);
            this.state = 1714;
            this.match(CypherParser.BY);
            this.state = 1715;
            this.match(CypherParser.SP);
            this.state = 1716;
            this.oC_SortItem();
            this.state = 1724;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 1717;
                this.match(CypherParser.T__2);
                this.state = 1719;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1718;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1721;
                this.oC_SortItem();
                }
                }
                this.state = 1726;
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
            this.state = 1727;
            this.match(CypherParser.L_SKIP);
            this.state = 1728;
            this.match(CypherParser.SP);
            this.state = 1729;
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
            this.state = 1731;
            this.match(CypherParser.LIMIT);
            this.state = 1732;
            this.match(CypherParser.SP);
            this.state = 1733;
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
            this.state = 1735;
            this.oC_Expression();
            this.state = 1740;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
            case 1:
                {
                this.state = 1737;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1736;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1739;
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
            this.state = 1742;
            this.match(CypherParser.WHERE);
            this.state = 1743;
            this.match(CypherParser.SP);
            this.state = 1744;
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
            this.state = 1746;
            this.oC_PatternPart();
            this.state = 1757;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 258, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1748;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1747;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1750;
                    this.match(CypherParser.T__2);
                    this.state = 1752;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1751;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1754;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1759;
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
            this.state = 1771;
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
                this.state = 1760;
                this.oC_Variable();
                this.state = 1762;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1761;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1764;
                this.match(CypherParser.T__5);
                this.state = 1766;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1765;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1768;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1770;
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
            this.state = 1773;
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
            this.state = 1789;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 264, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1775;
                this.oC_NodePattern();
                this.state = 1782;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 263, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1777;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 1776;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1779;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1784;
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
                this.state = 1785;
                this.match(CypherParser.T__1);
                this.state = 1786;
                this.oC_PatternElement();
                this.state = 1787;
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
        this.enterRule(localctx, 198, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1791;
            this.match(CypherParser.T__1);
            this.state = 1793;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1792;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1799;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577927) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1378158015) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 1153) !== 0)) {
                {
                this.state = 1795;
                this.oC_Variable();
                this.state = 1797;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1796;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1805;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===157) {
                {
                this.state = 1801;
                this.oC_NodeLabels();
                this.state = 1803;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1802;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1811;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1807;
                this.kU_Properties();
                this.state = 1809;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1808;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1813;
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
        this.enterRule(localctx, 200, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1815;
            this.oC_RelationshipPattern();
            this.state = 1817;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1816;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1819;
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
            this.state = 1865;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 284, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1821;
                this.oC_LeftArrowHead();
                this.state = 1823;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1822;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1825;
                this.oC_Dash();
                this.state = 1827;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 274, this._ctx) ) {
                case 1:
                    {
                    this.state = 1826;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1830;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1829;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1833;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1832;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1835;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1837;
                this.oC_Dash();
                this.state = 1839;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 277, this._ctx) ) {
                case 1:
                    {
                    this.state = 1838;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1842;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1841;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1845;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1844;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1847;
                this.oC_Dash();
                this.state = 1849;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1848;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1851;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1853;
                this.oC_Dash();
                this.state = 1855;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 281, this._ctx) ) {
                case 1:
                    {
                    this.state = 1854;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1858;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1857;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1861;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1860;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1863;
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
            this.state = 1867;
            this.match(CypherParser.T__6);
            this.state = 1869;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1868;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1875;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577927) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1378158015) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 1153) !== 0)) {
                {
                this.state = 1871;
                this.oC_Variable();
                this.state = 1873;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1872;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1881;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===157) {
                {
                this.state = 1877;
                this.oC_RelationshipTypes();
                this.state = 1879;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1878;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1887;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===152) {
                {
                this.state = 1883;
                this.oC_RangeLiteral();
                this.state = 1885;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1884;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1893;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1889;
                this.kU_Properties();
                this.state = 1891;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1890;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1895;
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
            this.state = 1897;
            this.match(CypherParser.T__8);
            this.state = 1899;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1898;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1934;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2765989781) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 467577927) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1378158015) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 1153) !== 0)) {
                {
                this.state = 1901;
                this.oC_PropertyKeyName();
                this.state = 1903;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1902;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1905;
                this.match(CypherParser.COLON);
                this.state = 1907;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1906;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1909;
                this.oC_Expression();
                this.state = 1911;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1910;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1931;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 1913;
                    this.match(CypherParser.T__2);
                    this.state = 1915;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1914;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1917;
                    this.oC_PropertyKeyName();
                    this.state = 1919;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1918;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1921;
                    this.match(CypherParser.COLON);
                    this.state = 1923;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1922;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1925;
                    this.oC_Expression();
                    this.state = 1927;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1926;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1933;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1936;
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
            this.state = 1938;
            this.match(CypherParser.COLON);
            this.state = 1940;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1939;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1942;
            this.oC_RelTypeName();
            this.state = 1956;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 308, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1944;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1943;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1946;
                    this.match(CypherParser.T__10);
                    this.state = 1948;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===157) {
                        {
                        this.state = 1947;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 1951;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1950;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1953;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1958;
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
            this.state = 1959;
            this.oC_NodeLabel();
            this.state = 1966;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 310, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1961;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 1960;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1963;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1968;
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
            this.state = 1969;
            this.match(CypherParser.COLON);
            this.state = 1971;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 1970;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1973;
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
        this.enterRule(localctx, 214, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1975;
            this.match(CypherParser.STAR);
            this.state = 1977;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 312, this._ctx) ) {
            case 1:
                {
                this.state = 1976;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1985;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.SHORTEST:
                {
                this.state = 1979;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.ALL:
                {
                this.state = 1980;
                this.match(CypherParser.ALL);
                this.state = 1981;
                this.match(CypherParser.SP);
                this.state = 1982;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.TRAIL:
                {
                this.state = 1983;
                this.match(CypherParser.TRAIL);
                }
                break;
            case CypherParser.ACYCLIC:
                {
                this.state = 1984;
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
            this.state = 1988;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 314, this._ctx) ) {
            case 1:
                {
                this.state = 1987;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2004;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 319, this._ctx) ) {
            case 1:
                {
                this.state = 1991;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===160) {
                    {
                    this.state = 1990;
                    this.oC_LowerBound();
                    }
                }

                this.state = 1994;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 1993;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1996;
                this.match(CypherParser.T__11);
                this.state = 1998;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 317, this._ctx) ) {
                case 1:
                    {
                    this.state = 1997;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2001;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===160) {
                    {
                    this.state = 2000;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 2003;
                this.oC_IntegerLiteral();
                }
                break;
            }
            this.state = 2010;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 321, this._ctx) ) {
            case 1:
                {
                this.state = 2007;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2006;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2009;
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
        this.enterRule(localctx, 216, CypherParser.RULE_kU_RecursiveRelationshipComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2012;
            this.match(CypherParser.T__1);
            this.state = 2014;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2013;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2016;
            this.oC_Variable();
            this.state = 2018;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2017;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2020;
            this.match(CypherParser.T__2);
            this.state = 2022;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2021;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2024;
            this.oC_Variable();
            this.state = 2036;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 328, this._ctx) ) {
            case 1:
                {
                this.state = 2026;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2025;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2028;
                this.match(CypherParser.T__10);
                this.state = 2030;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2029;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2032;
                this.oC_Where();
                this.state = 2034;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 327, this._ctx) ) {
                case 1:
                    {
                    this.state = 2033;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                }
                break;
            }
            this.state = 2057;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===172) {
                {
                this.state = 2039;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2038;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2041;
                this.match(CypherParser.T__10);
                this.state = 2043;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2042;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2045;
                this.kU_IntermediateRelProjectionItems();
                this.state = 2047;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2046;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2049;
                this.match(CypherParser.T__2);
                this.state = 2051;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2050;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2053;
                this.kU_IntermediateNodeProjectionItems();
                this.state = 2055;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2054;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2059;
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
        this.enterRule(localctx, 218, CypherParser.RULE_kU_IntermediateNodeProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2061;
            this.match(CypherParser.T__8);
            this.state = 2063;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 335, this._ctx) ) {
            case 1:
                {
                this.state = 2062;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2066;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 159599569) !== 0)) {
                {
                this.state = 2065;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2069;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2068;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2071;
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
        this.enterRule(localctx, 220, CypherParser.RULE_kU_IntermediateRelProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2073;
            this.match(CypherParser.T__8);
            this.state = 2075;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 338, this._ctx) ) {
            case 1:
                {
                this.state = 2074;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2078;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 159599569) !== 0)) {
                {
                this.state = 2077;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2081;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2080;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2083;
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
        this.enterRule(localctx, 222, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2085;
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
        this.enterRule(localctx, 224, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2087;
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
        this.enterRule(localctx, 226, CypherParser.RULE_oC_LabelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2089;
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
        this.enterRule(localctx, 228, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2091;
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
        this.enterRule(localctx, 230, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2093;
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
        this.enterRule(localctx, 232, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2095;
            this.oC_XorExpression();
            this.state = 2102;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 341, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2096;
                    this.match(CypherParser.SP);
                    this.state = 2097;
                    this.match(CypherParser.OR);
                    this.state = 2098;
                    this.match(CypherParser.SP);
                    this.state = 2099;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 2104;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 341, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 234, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2105;
            this.oC_AndExpression();
            this.state = 2112;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 342, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2106;
                    this.match(CypherParser.SP);
                    this.state = 2107;
                    this.match(CypherParser.XOR);
                    this.state = 2108;
                    this.match(CypherParser.SP);
                    this.state = 2109;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 2114;
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
    public oC_AndExpression(): OC_AndExpressionContext {
        let localctx: OC_AndExpressionContext = new OC_AndExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 236, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2115;
            this.oC_NotExpression();
            this.state = 2122;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 343, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2116;
                    this.match(CypherParser.SP);
                    this.state = 2117;
                    this.match(CypherParser.AND);
                    this.state = 2118;
                    this.match(CypherParser.SP);
                    this.state = 2119;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 2124;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 343, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 238, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2131;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===113) {
                {
                {
                this.state = 2125;
                this.match(CypherParser.NOT);
                this.state = 2127;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2126;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2133;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2134;
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
        this.enterRule(localctx, 240, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 2184;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 356, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2136;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2146;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 348, this._ctx) ) {
                case 1:
                    {
                    this.state = 2138;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2137;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2140;
                    this.kU_ComparisonOperator();
                    this.state = 2142;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2141;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2144;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2148;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 2150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2149;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2152;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 2154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2153;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2156;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2160;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2162;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2161;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2164;
                this.kU_ComparisonOperator();
                this.state = 2166;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2165;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2168;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2178;
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
                        if (_la===172) {
                            {
                            this.state = 2169;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2172;
                        this.kU_ComparisonOperator();
                        this.state = 2174;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 2173;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2176;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2180;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 355, this._ctx);
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
        this.enterRule(localctx, 242, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2186;
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
        this.enterRule(localctx, 244, CypherParser.RULE_kU_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2188;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 2199;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 359, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2190;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2189;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2192;
                    this.match(CypherParser.T__10);
                    this.state = 2194;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2193;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2196;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 2201;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 359, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 246, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2202;
            this.kU_BitShiftOperatorExpression();
            this.state = 2213;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 362, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2204;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2203;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2206;
                    this.match(CypherParser.T__17);
                    this.state = 2208;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2207;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2210;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 2215;
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
    public kU_BitShiftOperatorExpression(): KU_BitShiftOperatorExpressionContext {
        let localctx: KU_BitShiftOperatorExpressionContext = new KU_BitShiftOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 248, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2216;
            this.oC_AddOrSubtractExpression();
            this.state = 2228;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 365, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2218;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2217;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2220;
                    this.kU_BitShiftOperator();
                    this.state = 2222;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2221;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2224;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 2230;
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
    public kU_BitShiftOperator(): KU_BitShiftOperatorContext {
        let localctx: KU_BitShiftOperatorContext = new KU_BitShiftOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 250, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2231;
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
        this.enterRule(localctx, 252, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2233;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 2245;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 368, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2235;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2234;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2237;
                    this.kU_AddOrSubtractOperator();
                    this.state = 2239;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2238;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2241;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 2247;
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
    public kU_AddOrSubtractOperator(): KU_AddOrSubtractOperatorContext {
        let localctx: KU_AddOrSubtractOperatorContext = new KU_AddOrSubtractOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 254, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2248;
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
        this.enterRule(localctx, 256, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2250;
            this.oC_PowerOfExpression();
            this.state = 2262;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 371, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2252;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2251;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2254;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 2256;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2255;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2258;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 2264;
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
    public kU_MultiplyDivideModuloOperator(): KU_MultiplyDivideModuloOperatorContext {
        let localctx: KU_MultiplyDivideModuloOperatorContext = new KU_MultiplyDivideModuloOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 258, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2265;
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
        this.enterRule(localctx, 260, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2267;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 2278;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 374, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2269;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2268;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2271;
                    this.match(CypherParser.T__23);
                    this.state = 2273;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2272;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2275;
                    this.oC_UnaryAddSubtractOrFactorialExpression();
                    }
                    }
                }
                this.state = 2280;
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
    public oC_UnaryAddSubtractOrFactorialExpression(): OC_UnaryAddSubtractOrFactorialExpressionContext {
        let localctx: OC_UnaryAddSubtractOrFactorialExpressionContext = new OC_UnaryAddSubtractOrFactorialExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 262, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2287;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===155) {
                {
                {
                this.state = 2281;
                this.match(CypherParser.MINUS);
                this.state = 2283;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2282;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2289;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2290;
            this.oC_StringListNullOperatorExpression();
            this.state = 2295;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 378, this._ctx) ) {
            case 1:
                {
                this.state = 2292;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2291;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2294;
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
        this.enterRule(localctx, 264, CypherParser.RULE_oC_StringListNullOperatorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2297;
            this.oC_PropertyOrLabelsExpression();
            this.state = 2305;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
            case 1:
                {
                this.state = 2298;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 2300;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2299;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2302;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 379, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 2304;
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
            this.state = 2326;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 384, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2307;
                this.match(CypherParser.SP);
                this.state = 2308;
                this.match(CypherParser.IN);
                this.state = 2310;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2309;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2312;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2313;
                this.match(CypherParser.T__6);
                this.state = 2314;
                this.oC_Expression();
                this.state = 2315;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2317;
                this.match(CypherParser.T__6);
                this.state = 2319;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 159599313) !== 0)) {
                    {
                    this.state = 2318;
                    this.oC_Expression();
                    }
                }

                this.state = 2321;
                this.match(CypherParser.COLON);
                this.state = 2323;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 159599313) !== 0)) {
                    {
                    this.state = 2322;
                    this.oC_Expression();
                    }
                }

                this.state = 2325;
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
            this.state = 2339;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 385, this._ctx) ) {
            case 1:
                {
                this.state = 2328;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 2329;
                this.match(CypherParser.SP);
                this.state = 2330;
                this.match(CypherParser.STARTS);
                this.state = 2331;
                this.match(CypherParser.SP);
                this.state = 2332;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 2333;
                this.match(CypherParser.SP);
                this.state = 2334;
                this.match(CypherParser.ENDS);
                this.state = 2335;
                this.match(CypherParser.SP);
                this.state = 2336;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 2337;
                this.match(CypherParser.SP);
                this.state = 2338;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 2342;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2341;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2344;
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
            this.state = 2347;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2346;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2349;
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
            this.state = 2361;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 388, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2351;
                this.match(CypherParser.SP);
                this.state = 2352;
                this.match(CypherParser.IS);
                this.state = 2353;
                this.match(CypherParser.SP);
                this.state = 2354;
                this.match(CypherParser.NULL);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2355;
                this.match(CypherParser.SP);
                this.state = 2356;
                this.match(CypherParser.IS);
                this.state = 2357;
                this.match(CypherParser.SP);
                this.state = 2358;
                this.match(CypherParser.NOT);
                this.state = 2359;
                this.match(CypherParser.SP);
                this.state = 2360;
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
        this.enterRule(localctx, 274, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2363;
            this.oC_Atom();
            this.state = 2370;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 390, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2365;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2364;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2367;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2372;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 390, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 276, CypherParser.RULE_oC_Atom);
        try {
            this.state = 2383;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 391, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2373;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2374;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2375;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2376;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2377;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2378;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2379;
                this.oC_ExistSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2380;
                this.kU_CountSubquery();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2381;
                this.oC_Variable();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 2382;
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
        this.enterRule(localctx, 278, CypherParser.RULE_oC_Quantifier);
        let _la: number;
        try {
            this.state = 2441;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ALL:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2385;
                this.match(CypherParser.ALL);
                this.state = 2387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2386;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2389;
                this.match(CypherParser.T__1);
                this.state = 2391;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2390;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2393;
                this.oC_FilterExpression();
                this.state = 2395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2394;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2397;
                this.match(CypherParser.T__3);
                }
                }
                break;
            case CypherParser.ANY:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2399;
                this.match(CypherParser.ANY);
                this.state = 2401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2400;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2403;
                this.match(CypherParser.T__1);
                this.state = 2405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2404;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2407;
                this.oC_FilterExpression();
                this.state = 2409;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2408;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2411;
                this.match(CypherParser.T__3);
                }
                }
                break;
            case CypherParser.NONE:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2413;
                this.match(CypherParser.NONE);
                this.state = 2415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2414;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2417;
                this.match(CypherParser.T__1);
                this.state = 2419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2418;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2421;
                this.oC_FilterExpression();
                this.state = 2423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2422;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2425;
                this.match(CypherParser.T__3);
                }
                }
                break;
            case CypherParser.SINGLE:
                this.enterOuterAlt(localctx, 4);
                {
                {
                this.state = 2427;
                this.match(CypherParser.SINGLE);
                this.state = 2429;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2428;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2431;
                this.match(CypherParser.T__1);
                this.state = 2433;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2432;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2435;
                this.oC_FilterExpression();
                this.state = 2437;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2436;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2439;
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
        this.enterRule(localctx, 280, CypherParser.RULE_oC_FilterExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2443;
            this.oC_IdInColl();
            this.state = 2448;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 406, this._ctx) ) {
            case 1:
                {
                this.state = 2445;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2444;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2447;
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
        this.enterRule(localctx, 282, CypherParser.RULE_oC_IdInColl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2450;
            this.oC_Variable();
            this.state = 2451;
            this.match(CypherParser.SP);
            this.state = 2452;
            this.match(CypherParser.IN);
            this.state = 2453;
            this.match(CypherParser.SP);
            this.state = 2454;
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
        this.enterRule(localctx, 284, CypherParser.RULE_oC_Literal);
        try {
            this.state = 2462;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2456;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2457;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.FALSE:
            case CypherParser.TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2458;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2459;
                this.match(CypherParser.NULL);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2460;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2461;
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
        this.enterRule(localctx, 286, CypherParser.RULE_oC_BooleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2464;
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
        this.enterRule(localctx, 288, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2466;
            this.match(CypherParser.T__6);
            this.state = 2468;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2467;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2483;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 159599313) !== 0)) {
                {
                this.state = 2470;
                this.oC_Expression();
                this.state = 2472;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2471;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2480;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 2474;
                    this.kU_ListEntry();
                    this.state = 2476;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2475;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2482;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2485;
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
        this.enterRule(localctx, 290, CypherParser.RULE_kU_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2487;
            this.match(CypherParser.T__2);
            this.state = 2489;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 413, this._ctx) ) {
            case 1:
                {
                this.state = 2488;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2492;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 159599313) !== 0)) {
                {
                this.state = 2491;
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
        this.enterRule(localctx, 292, CypherParser.RULE_kU_StructLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2494;
            this.match(CypherParser.T__8);
            this.state = 2496;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2495;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2498;
            this.kU_StructField();
            this.state = 2500;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2499;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2512;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 2502;
                this.match(CypherParser.T__2);
                this.state = 2504;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2503;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2506;
                this.kU_StructField();
                this.state = 2508;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2507;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2515;
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
        this.enterRule(localctx, 294, CypherParser.RULE_kU_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2519;
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
                this.state = 2517;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2518;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2522;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2521;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2524;
            this.match(CypherParser.COLON);
            this.state = 2526;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2525;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2528;
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
        this.enterRule(localctx, 296, CypherParser.RULE_oC_ParenthesizedExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2530;
            this.match(CypherParser.T__1);
            this.state = 2532;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2531;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2534;
            this.oC_Expression();
            this.state = 2536;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2535;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2538;
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
        this.enterRule(localctx, 298, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2617;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 444, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2540;
                this.match(CypherParser.COUNT);
                this.state = 2542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2541;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2544;
                this.match(CypherParser.T__1);
                this.state = 2546;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2545;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2548;
                this.match(CypherParser.STAR);
                this.state = 2550;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2549;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2552;
                this.match(CypherParser.T__3);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2553;
                this.match(CypherParser.CAST);
                this.state = 2555;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2554;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2557;
                this.match(CypherParser.T__1);
                this.state = 2559;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2558;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2561;
                this.kU_FunctionParameter();
                this.state = 2563;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2562;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2575;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case CypherParser.AS:
                    {
                    {
                    this.state = 2565;
                    this.match(CypherParser.AS);
                    this.state = 2567;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2566;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2569;
                    this.kU_DataType(0);
                    }
                    }
                    break;
                case CypherParser.T__2:
                    {
                    {
                    this.state = 2570;
                    this.match(CypherParser.T__2);
                    this.state = 2572;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2571;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2574;
                    this.kU_FunctionParameter();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2578;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2577;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2580;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2582;
                this.oC_FunctionName();
                this.state = 2584;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2583;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2586;
                this.match(CypherParser.T__1);
                this.state = 2588;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2587;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2594;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===78) {
                    {
                    this.state = 2590;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2592;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2591;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2613;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237024559) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 2077592049) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1885073439) !== 0) || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 159599313) !== 0)) {
                    {
                    this.state = 2596;
                    this.kU_FunctionParameter();
                    this.state = 2598;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2597;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2610;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===3) {
                        {
                        {
                        this.state = 2600;
                        this.match(CypherParser.T__2);
                        this.state = 2602;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 2601;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2604;
                        this.kU_FunctionParameter();
                        this.state = 2606;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 2605;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2612;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2615;
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
        this.enterRule(localctx, 300, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2619;
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
        this.enterRule(localctx, 302, CypherParser.RULE_kU_FunctionParameter);
        let _la: number;
        try {
            this.state = 2634;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 448, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2630;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 447, this._ctx) ) {
                case 1:
                    {
                    this.state = 2621;
                    this.oC_SymbolicName();
                    this.state = 2623;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2622;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2625;
                    this.match(CypherParser.COLON);
                    this.state = 2626;
                    this.match(CypherParser.T__5);
                    this.state = 2628;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2627;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 2632;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2633;
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
        this.enterRule(localctx, 304, CypherParser.RULE_kU_LambdaParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2636;
            this.kU_LambdaVars();
            this.state = 2638;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2637;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2640;
            this.match(CypherParser.MINUS);
            this.state = 2641;
            this.match(CypherParser.T__15);
            this.state = 2643;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2642;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2645;
            this.oC_Expression();
            this.state = 2647;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 451, this._ctx) ) {
            case 1:
                {
                this.state = 2646;
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
        this.enterRule(localctx, 306, CypherParser.RULE_kU_LambdaVars);
        let _la: number;
        try {
            this.state = 2673;
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
                this.state = 2649;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2650;
                this.match(CypherParser.T__1);
                this.state = 2652;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2651;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2654;
                this.oC_SymbolicName();
                this.state = 2656;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2655;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2668;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 2658;
                    this.match(CypherParser.T__2);
                    this.state = 2660;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2659;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2662;
                    this.oC_SymbolicName();
                    this.state = 2664;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2663;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2670;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2671;
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
        this.enterRule(localctx, 308, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2675;
            this.oC_NodePattern();
            this.state = 2680;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2677;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===172) {
                        {
                        this.state = 2676;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2679;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2682;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 459, this._ctx);
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
        this.enterRule(localctx, 310, CypherParser.RULE_oC_ExistSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2684;
            this.match(CypherParser.EXISTS);
            this.state = 2686;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2685;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2688;
            this.match(CypherParser.T__8);
            this.state = 2690;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2689;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2692;
            this.match(CypherParser.MATCH);
            this.state = 2694;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2693;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2696;
            this.oC_Pattern();
            this.state = 2701;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 464, this._ctx) ) {
            case 1:
                {
                this.state = 2698;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2697;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2700;
                this.oC_Where();
                }
                break;
            }
            this.state = 2704;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2703;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2706;
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
        this.enterRule(localctx, 312, CypherParser.RULE_kU_CountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2708;
            this.match(CypherParser.COUNT);
            this.state = 2710;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2709;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2712;
            this.match(CypherParser.T__8);
            this.state = 2714;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2713;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2716;
            this.match(CypherParser.MATCH);
            this.state = 2718;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2717;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2720;
            this.oC_Pattern();
            this.state = 2725;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 470, this._ctx) ) {
            case 1:
                {
                this.state = 2722;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2721;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2724;
                this.oC_Where();
                }
                break;
            }
            this.state = 2728;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2727;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2730;
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
            this.state = 2732;
            this.match(CypherParser.T__4);
            this.state = 2734;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2733;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2738;
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
                this.state = 2736;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2737;
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
            this.state = 2762;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 479, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2740;
                this.match(CypherParser.CASE);
                this.state = 2745;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2742;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 2741;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2744;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2747;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 475, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2749;
                this.match(CypherParser.CASE);
                this.state = 2751;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2750;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2753;
                this.oC_Expression();
                this.state = 2758;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2755;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===172) {
                            {
                            this.state = 2754;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2757;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2760;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 478, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2772;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 482, this._ctx) ) {
            case 1:
                {
                this.state = 2765;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2764;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2767;
                this.match(CypherParser.ELSE);
                this.state = 2769;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===172) {
                    {
                    this.state = 2768;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2771;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2775;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2774;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2777;
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
            this.state = 2779;
            this.match(CypherParser.WHEN);
            this.state = 2781;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2780;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2783;
            this.oC_Expression();
            this.state = 2785;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2784;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2787;
            this.match(CypherParser.THEN);
            this.state = 2789;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2788;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2791;
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
            this.state = 2793;
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
            this.state = 2797;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2795;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2796;
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
            this.state = 2799;
            this.match(CypherParser.T__25);
            this.state = 2802;
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
                this.state = 2800;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2801;
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
            this.state = 2804;
            this.oC_Atom();
            this.state = 2806;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===172) {
                {
                this.state = 2805;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2808;
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
            this.state = 2810;
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
            this.state = 2812;
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
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2814;
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
        this.enterRule(localctx, 334, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2816;
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
            this.state = 2823;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2818;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2819;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2821;
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
                this.state = 2822;
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
            this.state = 2825;
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
        this.enterRule(localctx, 340, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2827;
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
            this.state = 2829;
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
            this.state = 2831;
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
        case 77:
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
        4,1,175,2834,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,400,8,2,1,3,1,3,1,3,1,3,3,3,406,
        8,3,1,3,1,3,3,3,410,8,3,1,3,3,3,413,8,3,1,3,1,3,1,3,1,3,3,3,419,
        8,3,1,3,3,3,422,8,3,1,4,1,4,3,4,426,8,4,1,4,1,4,3,4,430,8,4,1,4,
        1,4,3,4,434,8,4,1,4,5,4,437,8,4,10,4,12,4,440,9,4,1,4,3,4,443,8,
        4,1,4,1,4,1,5,1,5,1,5,3,5,450,8,5,1,5,1,5,3,5,454,8,5,1,5,1,5,1,
        5,1,5,1,5,1,5,3,5,462,8,5,1,5,1,5,3,5,466,8,5,1,6,1,6,1,6,1,6,1,
        6,1,6,1,6,1,6,3,6,476,8,6,1,6,1,6,3,6,480,8,6,1,6,1,6,3,6,484,8,
        6,1,6,5,6,487,8,6,10,6,12,6,490,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,
        1,7,1,7,1,7,3,7,502,8,7,1,7,1,7,3,7,506,8,7,1,7,1,7,1,7,1,7,1,7,
        1,7,3,7,514,8,7,1,7,3,7,517,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,525,
        8,8,1,8,3,8,528,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,3,10,543,8,10,1,10,1,10,1,10,3,10,548,8,10,1,10,1,
        10,1,10,1,10,3,10,554,8,10,1,10,1,10,3,10,558,8,10,1,10,3,10,561,
        8,10,1,10,3,10,564,8,10,1,10,1,10,1,11,1,11,3,11,570,8,11,1,11,1,
        11,3,11,574,8,11,1,11,5,11,577,8,11,10,11,12,11,580,9,11,3,11,582,
        8,11,1,11,1,11,1,11,3,11,587,8,11,1,12,1,12,3,12,591,8,12,1,12,1,
        12,3,12,595,8,12,1,12,5,12,598,8,12,10,12,12,12,601,9,12,1,13,1,
        13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,615,8,
        15,1,15,1,15,3,15,619,8,15,1,15,1,15,1,15,1,15,1,15,3,15,626,8,15,
        1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,
        1,17,1,17,1,17,1,17,1,17,3,17,646,8,17,1,17,1,17,3,17,650,8,17,1,
        17,3,17,653,8,17,1,17,3,17,656,8,17,1,17,3,17,659,8,17,1,17,3,17,
        662,8,17,1,17,1,17,3,17,666,8,17,1,17,5,17,669,8,17,10,17,12,17,
        672,9,17,1,17,3,17,675,8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,
        18,3,18,685,8,18,1,18,1,18,3,18,689,8,18,1,18,5,18,692,8,18,10,18,
        12,18,695,9,18,1,19,1,19,3,19,699,8,19,1,19,1,19,1,19,3,19,704,8,
        19,1,19,1,19,1,20,1,20,3,20,710,8,20,1,20,1,20,3,20,714,8,20,1,20,
        1,20,3,20,718,8,20,1,20,5,20,721,8,20,10,20,12,20,724,9,20,1,20,
        1,20,1,20,1,20,3,20,730,8,20,1,20,1,20,3,20,734,8,20,1,20,1,20,3,
        20,738,8,20,1,20,3,20,741,8,20,1,21,1,21,3,21,745,8,21,1,21,1,21,
        3,21,749,8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,768,8,23,1,23,1,23,3,23,
        772,8,23,1,23,1,23,3,23,776,8,23,1,23,1,23,3,23,780,8,23,1,23,1,
        23,3,23,784,8,23,1,23,3,23,787,8,23,1,23,3,23,790,8,23,1,23,1,23,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,803,8,24,1,24,
        1,24,3,24,807,8,24,1,24,1,24,3,24,811,8,24,1,24,1,24,3,24,815,8,
        24,1,24,1,24,3,24,819,8,24,1,24,1,24,3,24,823,8,24,3,24,825,8,24,
        1,24,1,24,3,24,829,8,24,1,24,1,24,3,24,833,8,24,3,24,835,8,24,1,
        24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,
        25,850,8,25,1,25,1,25,3,25,854,8,25,1,25,1,25,3,25,858,8,25,1,25,
        1,25,3,25,862,8,25,1,25,1,25,3,25,866,8,25,1,25,4,25,869,8,25,11,
        25,12,25,870,1,25,3,25,874,8,25,1,25,1,25,3,25,878,8,25,1,25,1,25,
        3,25,882,8,25,3,25,884,8,25,1,25,1,25,3,25,888,8,25,1,25,1,25,3,
        25,892,8,25,3,25,894,8,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,
        1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,913,8,27,1,27,
        1,27,1,27,5,27,918,8,27,10,27,12,27,921,9,27,1,28,1,28,1,28,1,28,
        1,28,1,28,1,28,1,28,1,28,1,28,3,28,933,8,28,1,29,1,29,1,29,1,29,
        1,29,3,29,940,8,29,1,30,1,30,1,30,1,30,3,30,946,8,30,1,30,3,30,949,
        8,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,3,31,959,8,31,1,31,
        3,31,962,8,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,970,8,32,1,32,3,
        32,973,8,32,1,33,1,33,1,33,1,33,3,33,979,8,33,1,33,3,33,982,8,33,
        1,33,1,33,1,34,1,34,3,34,988,8,34,1,34,1,34,1,35,1,35,1,35,1,35,
        1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,1003,8,36,1,36,1,36,1,37,
        1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,3,38,1019,
        8,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,1028,8,39,1,40,1,40,
        1,40,1,40,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,43,
        1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,3,44,1054,8,44,1,44,
        1,44,3,44,1058,8,44,1,44,5,44,1061,8,44,10,44,12,44,1064,9,44,1,
        45,1,45,1,45,1,45,1,46,1,46,3,46,1072,8,46,1,46,1,46,3,46,1076,8,
        46,1,46,5,46,1079,8,46,10,46,12,46,1082,9,46,1,47,1,47,1,47,3,47,
        1087,8,47,1,47,1,47,1,47,1,47,3,47,1093,8,47,1,48,1,48,1,48,1,48,
        3,48,1099,8,48,1,48,1,48,3,48,1103,8,48,1,48,1,48,3,48,1107,8,48,
        1,48,1,48,1,49,1,49,1,49,1,49,3,49,1115,8,49,1,49,1,49,3,49,1119,
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
        1,59,3,59,1251,8,59,3,59,1253,8,59,1,59,1,59,1,60,1,60,1,60,1,60,
        1,60,1,60,3,60,1263,8,60,1,60,1,60,3,60,1267,8,60,1,60,1,60,3,60,
        1271,8,60,1,60,1,60,1,61,1,61,3,61,1277,8,61,1,61,1,61,3,61,1281,
        8,61,1,61,5,61,1284,8,61,10,61,12,61,1287,9,61,1,62,1,62,3,62,1291,
        8,62,1,62,5,62,1294,8,62,10,62,12,62,1297,9,62,1,62,1,62,3,62,1301,
        8,62,4,62,1303,8,62,11,62,12,62,1304,1,62,1,62,1,62,3,62,1310,8,
        62,1,63,1,63,1,63,1,63,3,63,1316,8,63,1,63,1,63,1,63,3,63,1321,8,
        63,1,63,3,63,1324,8,63,1,64,1,64,3,64,1328,8,64,1,65,1,65,3,65,1332,
        8,65,5,65,1334,8,65,10,65,12,65,1337,9,65,1,65,1,65,1,65,3,65,1342,
        8,65,5,65,1344,8,65,10,65,12,65,1347,9,65,1,65,1,65,3,65,1351,8,
        65,1,65,5,65,1354,8,65,10,65,12,65,1357,9,65,1,65,3,65,1360,8,65,
        1,65,3,65,1363,8,65,3,65,1365,8,65,1,66,1,66,3,66,1369,8,66,4,66,
        1371,8,66,11,66,12,66,1372,1,66,1,66,1,67,1,67,3,67,1379,8,67,5,
        67,1381,8,67,10,67,12,67,1384,9,67,1,67,1,67,3,67,1388,8,67,5,67,
        1390,8,67,10,67,12,67,1393,9,67,1,67,1,67,1,68,1,68,1,68,1,68,3,
        68,1401,8,68,1,69,1,69,1,69,1,69,3,69,1407,8,69,1,70,1,70,1,70,1,
        70,1,70,1,70,3,70,1415,8,70,1,70,1,70,3,70,1419,8,70,1,70,1,70,3,
        70,1423,8,70,1,70,1,70,3,70,1427,8,70,1,70,1,70,1,70,1,70,1,70,3,
        70,1434,8,70,1,70,3,70,1437,8,70,1,70,3,70,1440,8,70,1,70,3,70,1443,
        8,70,1,71,1,71,3,71,1447,8,71,3,71,1449,8,71,1,71,1,71,1,71,1,71,
        3,71,1455,8,71,1,71,3,71,1458,8,71,1,72,1,72,3,72,1462,8,72,1,72,
        1,72,3,72,1466,8,72,1,72,1,72,3,72,1470,8,72,1,72,1,72,3,72,1474,
        8,72,1,73,1,73,3,73,1478,8,73,1,73,1,73,3,73,1482,8,73,1,73,5,73,
        1485,8,73,10,73,12,73,1488,9,73,1,74,1,74,1,74,3,74,1493,8,74,1,
        74,1,74,3,74,1497,8,74,1,75,1,75,3,75,1501,8,75,1,75,1,75,3,75,1505,
        8,75,1,75,1,75,1,75,3,75,1510,8,75,1,75,1,75,3,75,1514,8,75,1,76,
        1,76,1,76,1,76,1,77,1,77,1,77,3,77,1523,8,77,1,77,1,77,3,77,1527,
        8,77,1,77,1,77,1,77,3,77,1532,8,77,1,77,1,77,1,77,1,77,1,77,1,77,
        1,77,1,77,1,77,1,77,4,77,1544,8,77,11,77,12,77,1545,5,77,1548,8,
        77,10,77,12,77,1551,9,77,1,78,1,78,3,78,1555,8,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,79,1,79,3,79,1565,8,79,1,79,1,79,1,80,1,80,3,80,
        1571,8,80,1,80,1,80,1,80,5,80,1576,8,80,10,80,12,80,1579,9,80,1,
        81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,3,81,1591,8,81,1,
        82,1,82,3,82,1595,8,82,1,82,1,82,3,82,1599,8,82,1,82,1,82,3,82,1603,
        8,82,1,82,5,82,1606,8,82,10,82,12,82,1609,9,82,1,83,1,83,3,83,1613,
        8,83,1,83,1,83,3,83,1617,8,83,1,83,1,83,1,84,1,84,3,84,1623,8,84,
        1,84,1,84,3,84,1627,8,84,1,84,1,84,3,84,1631,8,84,1,84,1,84,3,84,
        1635,8,84,1,84,5,84,1638,8,84,10,84,12,84,1641,9,84,1,85,1,85,1,
        85,3,85,1646,8,85,1,85,3,85,1649,8,85,1,86,1,86,1,86,1,87,3,87,1655,
        8,87,1,87,3,87,1658,8,87,1,87,1,87,1,87,1,87,3,87,1664,8,87,1,87,
        1,87,3,87,1668,8,87,1,87,1,87,3,87,1672,8,87,1,88,1,88,3,88,1676,
        8,88,1,88,1,88,3,88,1680,8,88,1,88,5,88,1683,8,88,10,88,12,88,1686,
        9,88,1,88,1,88,3,88,1690,8,88,1,88,1,88,3,88,1694,8,88,1,88,5,88,
        1697,8,88,10,88,12,88,1700,9,88,3,88,1702,8,88,1,89,1,89,1,89,1,
        89,1,89,1,89,1,89,3,89,1711,8,89,1,90,1,90,1,90,1,90,1,90,1,90,1,
        90,3,90,1720,8,90,1,90,5,90,1723,8,90,10,90,12,90,1726,9,90,1,91,
        1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,93,1,93,3,93,1738,8,93,1,93,
        3,93,1741,8,93,1,94,1,94,1,94,1,94,1,95,1,95,3,95,1749,8,95,1,95,
        1,95,3,95,1753,8,95,1,95,5,95,1756,8,95,10,95,12,95,1759,9,95,1,
        96,1,96,3,96,1763,8,96,1,96,1,96,3,96,1767,8,96,1,96,1,96,1,96,3,
        96,1772,8,96,1,97,1,97,1,98,1,98,3,98,1778,8,98,1,98,5,98,1781,8,
        98,10,98,12,98,1784,9,98,1,98,1,98,1,98,1,98,3,98,1790,8,98,1,99,
        1,99,3,99,1794,8,99,1,99,1,99,3,99,1798,8,99,3,99,1800,8,99,1,99,
        1,99,3,99,1804,8,99,3,99,1806,8,99,1,99,1,99,3,99,1810,8,99,3,99,
        1812,8,99,1,99,1,99,1,100,1,100,3,100,1818,8,100,1,100,1,100,1,101,
        1,101,3,101,1824,8,101,1,101,1,101,3,101,1828,8,101,1,101,3,101,
        1831,8,101,1,101,3,101,1834,8,101,1,101,1,101,1,101,1,101,3,101,
        1840,8,101,1,101,3,101,1843,8,101,1,101,3,101,1846,8,101,1,101,1,
        101,3,101,1850,8,101,1,101,1,101,1,101,1,101,3,101,1856,8,101,1,
        101,3,101,1859,8,101,1,101,3,101,1862,8,101,1,101,1,101,3,101,1866,
        8,101,1,102,1,102,3,102,1870,8,102,1,102,1,102,3,102,1874,8,102,
        3,102,1876,8,102,1,102,1,102,3,102,1880,8,102,3,102,1882,8,102,1,
        102,1,102,3,102,1886,8,102,3,102,1888,8,102,1,102,1,102,3,102,1892,
        8,102,3,102,1894,8,102,1,102,1,102,1,103,1,103,3,103,1900,8,103,
        1,103,1,103,3,103,1904,8,103,1,103,1,103,3,103,1908,8,103,1,103,
        1,103,3,103,1912,8,103,1,103,1,103,3,103,1916,8,103,1,103,1,103,
        3,103,1920,8,103,1,103,1,103,3,103,1924,8,103,1,103,1,103,3,103,
        1928,8,103,5,103,1930,8,103,10,103,12,103,1933,9,103,3,103,1935,
        8,103,1,103,1,103,1,104,1,104,3,104,1941,8,104,1,104,1,104,3,104,
        1945,8,104,1,104,1,104,3,104,1949,8,104,1,104,3,104,1952,8,104,1,
        104,5,104,1955,8,104,10,104,12,104,1958,9,104,1,105,1,105,3,105,
        1962,8,105,1,105,5,105,1965,8,105,10,105,12,105,1968,9,105,1,106,
        1,106,3,106,1972,8,106,1,106,1,106,1,107,1,107,3,107,1978,8,107,
        1,107,1,107,1,107,1,107,1,107,1,107,3,107,1986,8,107,1,107,3,107,
        1989,8,107,1,107,3,107,1992,8,107,1,107,3,107,1995,8,107,1,107,1,
        107,3,107,1999,8,107,1,107,3,107,2002,8,107,1,107,3,107,2005,8,107,
        1,107,3,107,2008,8,107,1,107,3,107,2011,8,107,1,108,1,108,3,108,
        2015,8,108,1,108,1,108,3,108,2019,8,108,1,108,1,108,3,108,2023,8,
        108,1,108,1,108,3,108,2027,8,108,1,108,1,108,3,108,2031,8,108,1,
        108,1,108,3,108,2035,8,108,3,108,2037,8,108,1,108,3,108,2040,8,108,
        1,108,1,108,3,108,2044,8,108,1,108,1,108,3,108,2048,8,108,1,108,
        1,108,3,108,2052,8,108,1,108,1,108,3,108,2056,8,108,3,108,2058,8,
        108,1,108,1,108,1,109,1,109,3,109,2064,8,109,1,109,3,109,2067,8,
        109,1,109,3,109,2070,8,109,1,109,1,109,1,110,1,110,3,110,2076,8,
        110,1,110,3,110,2079,8,110,1,110,3,110,2082,8,110,1,110,1,110,1,
        111,1,111,1,112,1,112,1,113,1,113,1,114,1,114,1,115,1,115,1,116,
        1,116,1,116,1,116,1,116,5,116,2101,8,116,10,116,12,116,2104,9,116,
        1,117,1,117,1,117,1,117,1,117,5,117,2111,8,117,10,117,12,117,2114,
        9,117,1,118,1,118,1,118,1,118,1,118,5,118,2121,8,118,10,118,12,118,
        2124,9,118,1,119,1,119,3,119,2128,8,119,5,119,2130,8,119,10,119,
        12,119,2133,9,119,1,119,1,119,1,120,1,120,3,120,2139,8,120,1,120,
        1,120,3,120,2143,8,120,1,120,1,120,3,120,2147,8,120,1,120,1,120,
        3,120,2151,8,120,1,120,1,120,3,120,2155,8,120,1,120,1,120,1,120,
        1,120,1,120,1,120,3,120,2163,8,120,1,120,1,120,3,120,2167,8,120,
        1,120,1,120,3,120,2171,8,120,1,120,1,120,3,120,2175,8,120,1,120,
        1,120,4,120,2179,8,120,11,120,12,120,2180,1,120,1,120,3,120,2185,
        8,120,1,121,1,121,1,122,1,122,3,122,2191,8,122,1,122,1,122,3,122,
        2195,8,122,1,122,5,122,2198,8,122,10,122,12,122,2201,9,122,1,123,
        1,123,3,123,2205,8,123,1,123,1,123,3,123,2209,8,123,1,123,5,123,
        2212,8,123,10,123,12,123,2215,9,123,1,124,1,124,3,124,2219,8,124,
        1,124,1,124,3,124,2223,8,124,1,124,1,124,5,124,2227,8,124,10,124,
        12,124,2230,9,124,1,125,1,125,1,126,1,126,3,126,2236,8,126,1,126,
        1,126,3,126,2240,8,126,1,126,1,126,5,126,2244,8,126,10,126,12,126,
        2247,9,126,1,127,1,127,1,128,1,128,3,128,2253,8,128,1,128,1,128,
        3,128,2257,8,128,1,128,1,128,5,128,2261,8,128,10,128,12,128,2264,
        9,128,1,129,1,129,1,130,1,130,3,130,2270,8,130,1,130,1,130,3,130,
        2274,8,130,1,130,5,130,2277,8,130,10,130,12,130,2280,9,130,1,131,
        1,131,3,131,2284,8,131,5,131,2286,8,131,10,131,12,131,2289,9,131,
        1,131,1,131,3,131,2293,8,131,1,131,3,131,2296,8,131,1,132,1,132,
        1,132,4,132,2301,8,132,11,132,12,132,2302,1,132,3,132,2306,8,132,
        1,133,1,133,1,133,3,133,2311,8,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,3,133,2320,8,133,1,133,1,133,3,133,2324,8,133,1,133,
        3,133,2327,8,133,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,
        1,134,1,134,1,134,3,134,2340,8,134,1,134,3,134,2343,8,134,1,134,
        1,134,1,135,3,135,2348,8,135,1,135,1,135,1,136,1,136,1,136,1,136,
        1,136,1,136,1,136,1,136,1,136,1,136,3,136,2362,8,136,1,137,1,137,
        3,137,2366,8,137,1,137,5,137,2369,8,137,10,137,12,137,2372,9,137,
        1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,3,138,
        2384,8,138,1,139,1,139,3,139,2388,8,139,1,139,1,139,3,139,2392,8,
        139,1,139,1,139,3,139,2396,8,139,1,139,1,139,1,139,1,139,3,139,2402,
        8,139,1,139,1,139,3,139,2406,8,139,1,139,1,139,3,139,2410,8,139,
        1,139,1,139,1,139,1,139,3,139,2416,8,139,1,139,1,139,3,139,2420,
        8,139,1,139,1,139,3,139,2424,8,139,1,139,1,139,1,139,1,139,3,139,
        2430,8,139,1,139,1,139,3,139,2434,8,139,1,139,1,139,3,139,2438,8,
        139,1,139,1,139,3,139,2442,8,139,1,140,1,140,3,140,2446,8,140,1,
        140,3,140,2449,8,140,1,141,1,141,1,141,1,141,1,141,1,141,1,142,1,
        142,1,142,1,142,1,142,1,142,3,142,2463,8,142,1,143,1,143,1,144,1,
        144,3,144,2469,8,144,1,144,1,144,3,144,2473,8,144,1,144,1,144,3,
        144,2477,8,144,5,144,2479,8,144,10,144,12,144,2482,9,144,3,144,2484,
        8,144,1,144,1,144,1,145,1,145,3,145,2490,8,145,1,145,3,145,2493,
        8,145,1,146,1,146,3,146,2497,8,146,1,146,1,146,3,146,2501,8,146,
        1,146,1,146,3,146,2505,8,146,1,146,1,146,3,146,2509,8,146,5,146,
        2511,8,146,10,146,12,146,2514,9,146,1,146,1,146,1,147,1,147,3,147,
        2520,8,147,1,147,3,147,2523,8,147,1,147,1,147,3,147,2527,8,147,1,
        147,1,147,1,148,1,148,3,148,2533,8,148,1,148,1,148,3,148,2537,8,
        148,1,148,1,148,1,149,1,149,3,149,2543,8,149,1,149,1,149,3,149,2547,
        8,149,1,149,1,149,3,149,2551,8,149,1,149,1,149,1,149,3,149,2556,
        8,149,1,149,1,149,3,149,2560,8,149,1,149,1,149,3,149,2564,8,149,
        1,149,1,149,3,149,2568,8,149,1,149,1,149,1,149,3,149,2573,8,149,
        1,149,3,149,2576,8,149,1,149,3,149,2579,8,149,1,149,1,149,1,149,
        1,149,3,149,2585,8,149,1,149,1,149,3,149,2589,8,149,1,149,1,149,
        3,149,2593,8,149,3,149,2595,8,149,1,149,1,149,3,149,2599,8,149,1,
        149,1,149,3,149,2603,8,149,1,149,1,149,3,149,2607,8,149,5,149,2609,
        8,149,10,149,12,149,2612,9,149,3,149,2614,8,149,1,149,1,149,3,149,
        2618,8,149,1,150,1,150,1,151,1,151,3,151,2624,8,151,1,151,1,151,
        1,151,3,151,2629,8,151,3,151,2631,8,151,1,151,1,151,3,151,2635,8,
        151,1,152,1,152,3,152,2639,8,152,1,152,1,152,1,152,3,152,2644,8,
        152,1,152,1,152,3,152,2648,8,152,1,153,1,153,1,153,3,153,2653,8,
        153,1,153,1,153,3,153,2657,8,153,1,153,1,153,3,153,2661,8,153,1,
        153,1,153,3,153,2665,8,153,5,153,2667,8,153,10,153,12,153,2670,9,
        153,1,153,1,153,3,153,2674,8,153,1,154,1,154,3,154,2678,8,154,1,
        154,4,154,2681,8,154,11,154,12,154,2682,1,155,1,155,3,155,2687,8,
        155,1,155,1,155,3,155,2691,8,155,1,155,1,155,3,155,2695,8,155,1,
        155,1,155,3,155,2699,8,155,1,155,3,155,2702,8,155,1,155,3,155,2705,
        8,155,1,155,1,155,1,156,1,156,3,156,2711,8,156,1,156,1,156,3,156,
        2715,8,156,1,156,1,156,3,156,2719,8,156,1,156,1,156,3,156,2723,8,
        156,1,156,3,156,2726,8,156,1,156,3,156,2729,8,156,1,156,1,156,1,
        157,1,157,3,157,2735,8,157,1,157,1,157,3,157,2739,8,157,1,158,1,
        158,3,158,2743,8,158,1,158,4,158,2746,8,158,11,158,12,158,2747,1,
        158,1,158,3,158,2752,8,158,1,158,1,158,3,158,2756,8,158,1,158,4,
        158,2759,8,158,11,158,12,158,2760,3,158,2763,8,158,1,158,3,158,2766,
        8,158,1,158,1,158,3,158,2770,8,158,1,158,3,158,2773,8,158,1,158,
        3,158,2776,8,158,1,158,1,158,1,159,1,159,3,159,2782,8,159,1,159,
        1,159,3,159,2786,8,159,1,159,1,159,3,159,2790,8,159,1,159,1,159,
        1,160,1,160,1,161,1,161,3,161,2798,8,161,1,162,1,162,1,162,3,162,
        2803,8,162,1,163,1,163,3,163,2807,8,163,1,163,1,163,1,164,1,164,
        1,165,1,165,1,166,1,166,1,167,1,167,1,168,1,168,1,168,1,168,1,168,
        3,168,2824,8,168,1,169,1,169,1,170,1,170,1,171,1,171,1,172,1,172,
        1,172,0,2,98,154,173,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
        32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
        76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,
        114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,
        146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,
        178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,
        210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,
        242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,
        274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,
        306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,
        338,340,342,344,0,11,2,0,130,130,135,135,2,0,53,54,75,76,2,0,6,6,
        13,17,1,0,19,20,2,0,21,21,155,155,2,0,22,23,152,152,2,0,87,87,140,
        140,28,0,48,48,50,50,52,52,55,58,61,61,63,64,66,68,70,71,74,74,77,
        77,79,79,84,86,90,90,94,95,97,97,99,99,101,104,106,109,111,112,123,
        128,130,131,133,133,139,139,141,141,144,144,148,148,151,151,153,
        153,2,0,14,14,27,30,2,0,16,16,31,34,2,0,35,45,155,155,3216,0,346,
        1,0,0,0,2,366,1,0,0,0,4,399,1,0,0,0,6,401,1,0,0,0,8,423,1,0,0,0,
        10,465,1,0,0,0,12,467,1,0,0,0,14,497,1,0,0,0,16,518,1,0,0,0,18,529,
        1,0,0,0,20,535,1,0,0,0,22,586,1,0,0,0,24,588,1,0,0,0,26,602,1,0,
        0,0,28,606,1,0,0,0,30,625,1,0,0,0,32,627,1,0,0,0,34,639,1,0,0,0,
        36,682,1,0,0,0,38,696,1,0,0,0,40,740,1,0,0,0,42,742,1,0,0,0,44,752,
        1,0,0,0,46,758,1,0,0,0,48,793,1,0,0,0,50,838,1,0,0,0,52,897,1,0,
        0,0,54,905,1,0,0,0,56,922,1,0,0,0,58,939,1,0,0,0,60,941,1,0,0,0,
        62,961,1,0,0,0,64,972,1,0,0,0,66,974,1,0,0,0,68,987,1,0,0,0,70,991,
        1,0,0,0,72,995,1,0,0,0,74,1006,1,0,0,0,76,1018,1,0,0,0,78,1020,1,
        0,0,0,80,1029,1,0,0,0,82,1033,1,0,0,0,84,1037,1,0,0,0,86,1043,1,
        0,0,0,88,1051,1,0,0,0,90,1065,1,0,0,0,92,1069,1,0,0,0,94,1083,1,
        0,0,0,96,1094,1,0,0,0,98,1184,1,0,0,0,100,1193,1,0,0,0,102,1200,
        1,0,0,0,104,1208,1,0,0,0,106,1210,1,0,0,0,108,1215,1,0,0,0,110,1230,
        1,0,0,0,112,1234,1,0,0,0,114,1236,1,0,0,0,116,1244,1,0,0,0,118,1252,
        1,0,0,0,120,1256,1,0,0,0,122,1274,1,0,0,0,124,1309,1,0,0,0,126,1323,
        1,0,0,0,128,1327,1,0,0,0,130,1364,1,0,0,0,132,1370,1,0,0,0,134,1382,
        1,0,0,0,136,1400,1,0,0,0,138,1406,1,0,0,0,140,1408,1,0,0,0,142,1448,
        1,0,0,0,144,1459,1,0,0,0,146,1475,1,0,0,0,148,1489,1,0,0,0,150,1500,
        1,0,0,0,152,1515,1,0,0,0,154,1531,1,0,0,0,156,1552,1,0,0,0,158,1562,
        1,0,0,0,160,1568,1,0,0,0,162,1590,1,0,0,0,164,1592,1,0,0,0,166,1610,
        1,0,0,0,168,1622,1,0,0,0,170,1642,1,0,0,0,172,1650,1,0,0,0,174,1657,
        1,0,0,0,176,1701,1,0,0,0,178,1710,1,0,0,0,180,1712,1,0,0,0,182,1727,
        1,0,0,0,184,1731,1,0,0,0,186,1735,1,0,0,0,188,1742,1,0,0,0,190,1746,
        1,0,0,0,192,1771,1,0,0,0,194,1773,1,0,0,0,196,1789,1,0,0,0,198,1791,
        1,0,0,0,200,1815,1,0,0,0,202,1865,1,0,0,0,204,1867,1,0,0,0,206,1897,
        1,0,0,0,208,1938,1,0,0,0,210,1959,1,0,0,0,212,1969,1,0,0,0,214,1975,
        1,0,0,0,216,2012,1,0,0,0,218,2061,1,0,0,0,220,2073,1,0,0,0,222,2085,
        1,0,0,0,224,2087,1,0,0,0,226,2089,1,0,0,0,228,2091,1,0,0,0,230,2093,
        1,0,0,0,232,2095,1,0,0,0,234,2105,1,0,0,0,236,2115,1,0,0,0,238,2131,
        1,0,0,0,240,2184,1,0,0,0,242,2186,1,0,0,0,244,2188,1,0,0,0,246,2202,
        1,0,0,0,248,2216,1,0,0,0,250,2231,1,0,0,0,252,2233,1,0,0,0,254,2248,
        1,0,0,0,256,2250,1,0,0,0,258,2265,1,0,0,0,260,2267,1,0,0,0,262,2287,
        1,0,0,0,264,2297,1,0,0,0,266,2326,1,0,0,0,268,2339,1,0,0,0,270,2347,
        1,0,0,0,272,2361,1,0,0,0,274,2363,1,0,0,0,276,2383,1,0,0,0,278,2441,
        1,0,0,0,280,2443,1,0,0,0,282,2450,1,0,0,0,284,2462,1,0,0,0,286,2464,
        1,0,0,0,288,2466,1,0,0,0,290,2487,1,0,0,0,292,2494,1,0,0,0,294,2519,
        1,0,0,0,296,2530,1,0,0,0,298,2617,1,0,0,0,300,2619,1,0,0,0,302,2634,
        1,0,0,0,304,2636,1,0,0,0,306,2673,1,0,0,0,308,2675,1,0,0,0,310,2684,
        1,0,0,0,312,2708,1,0,0,0,314,2732,1,0,0,0,316,2762,1,0,0,0,318,2779,
        1,0,0,0,320,2793,1,0,0,0,322,2797,1,0,0,0,324,2799,1,0,0,0,326,2804,
        1,0,0,0,328,2810,1,0,0,0,330,2812,1,0,0,0,332,2814,1,0,0,0,334,2816,
        1,0,0,0,336,2823,1,0,0,0,338,2825,1,0,0,0,340,2827,1,0,0,0,342,2829,
        1,0,0,0,344,2831,1,0,0,0,346,357,3,2,1,0,347,349,5,172,0,0,348,347,
        1,0,0,0,348,349,1,0,0,0,349,350,1,0,0,0,350,352,5,1,0,0,351,353,
        5,172,0,0,352,351,1,0,0,0,352,353,1,0,0,0,353,354,1,0,0,0,354,356,
        3,2,1,0,355,348,1,0,0,0,356,359,1,0,0,0,357,355,1,0,0,0,357,358,
        1,0,0,0,358,361,1,0,0,0,359,357,1,0,0,0,360,362,5,172,0,0,361,360,
        1,0,0,0,361,362,1,0,0,0,362,363,1,0,0,0,363,364,5,0,0,1,364,1,1,
        0,0,0,365,367,3,104,52,0,366,365,1,0,0,0,366,367,1,0,0,0,367,369,
        1,0,0,0,368,370,5,172,0,0,369,368,1,0,0,0,369,370,1,0,0,0,370,371,
        1,0,0,0,371,376,3,4,2,0,372,374,5,172,0,0,373,372,1,0,0,0,373,374,
        1,0,0,0,374,375,1,0,0,0,375,377,5,1,0,0,376,373,1,0,0,0,376,377,
        1,0,0,0,377,3,1,0,0,0,378,400,3,118,59,0,379,400,3,46,23,0,380,400,
        3,48,24,0,381,400,3,50,25,0,382,400,3,54,27,0,383,400,3,56,28,0,
        384,400,3,72,36,0,385,400,3,74,37,0,386,400,3,6,3,0,387,400,3,12,
        6,0,388,400,3,14,7,0,389,400,3,30,15,0,390,400,3,34,17,0,391,400,
        3,32,16,0,392,400,3,110,55,0,393,400,3,112,56,0,394,400,3,16,8,0,
        395,400,3,18,9,0,396,400,3,20,10,0,397,400,3,26,13,0,398,400,3,28,
        14,0,399,378,1,0,0,0,399,379,1,0,0,0,399,380,1,0,0,0,399,381,1,0,
        0,0,399,382,1,0,0,0,399,383,1,0,0,0,399,384,1,0,0,0,399,385,1,0,
        0,0,399,386,1,0,0,0,399,387,1,0,0,0,399,388,1,0,0,0,399,389,1,0,
        0,0,399,390,1,0,0,0,399,391,1,0,0,0,399,392,1,0,0,0,399,393,1,0,
        0,0,399,394,1,0,0,0,399,395,1,0,0,0,399,396,1,0,0,0,399,397,1,0,
        0,0,399,398,1,0,0,0,400,5,1,0,0,0,401,402,5,67,0,0,402,403,5,172,
        0,0,403,412,3,334,167,0,404,406,5,172,0,0,405,404,1,0,0,0,405,406,
        1,0,0,0,406,407,1,0,0,0,407,409,3,8,4,0,408,410,5,172,0,0,409,408,
        1,0,0,0,409,410,1,0,0,0,410,413,1,0,0,0,411,413,5,172,0,0,412,405,
        1,0,0,0,412,411,1,0,0,0,413,414,1,0,0,0,414,415,5,88,0,0,415,416,
        5,172,0,0,416,421,3,10,5,0,417,419,5,172,0,0,418,417,1,0,0,0,418,
        419,1,0,0,0,419,420,1,0,0,0,420,422,3,42,21,0,421,418,1,0,0,0,421,
        422,1,0,0,0,422,7,1,0,0,0,423,425,5,2,0,0,424,426,5,172,0,0,425,
        424,1,0,0,0,425,426,1,0,0,0,426,427,1,0,0,0,427,438,3,334,167,0,
        428,430,5,172,0,0,429,428,1,0,0,0,429,430,1,0,0,0,430,431,1,0,0,
        0,431,433,5,3,0,0,432,434,5,172,0,0,433,432,1,0,0,0,433,434,1,0,
        0,0,434,435,1,0,0,0,435,437,3,334,167,0,436,429,1,0,0,0,437,440,
        1,0,0,0,438,436,1,0,0,0,438,439,1,0,0,0,439,442,1,0,0,0,440,438,
        1,0,0,0,441,443,5,172,0,0,442,441,1,0,0,0,442,443,1,0,0,0,443,444,
        1,0,0,0,444,445,5,4,0,0,445,9,1,0,0,0,446,466,3,40,20,0,447,449,
        5,2,0,0,448,450,5,172,0,0,449,448,1,0,0,0,449,450,1,0,0,0,450,451,
        1,0,0,0,451,453,3,118,59,0,452,454,5,172,0,0,453,452,1,0,0,0,453,
        454,1,0,0,0,454,455,1,0,0,0,455,456,5,4,0,0,456,466,1,0,0,0,457,
        466,3,320,160,0,458,459,3,320,160,0,459,461,5,5,0,0,460,462,5,172,
        0,0,461,460,1,0,0,0,461,462,1,0,0,0,462,463,1,0,0,0,463,464,3,334,
        167,0,464,466,1,0,0,0,465,446,1,0,0,0,465,447,1,0,0,0,465,457,1,
        0,0,0,465,458,1,0,0,0,466,11,1,0,0,0,467,468,5,67,0,0,468,469,5,
        172,0,0,469,470,3,334,167,0,470,471,5,172,0,0,471,472,5,88,0,0,472,
        473,5,172,0,0,473,475,5,2,0,0,474,476,5,172,0,0,475,474,1,0,0,0,
        475,476,1,0,0,0,476,477,1,0,0,0,477,488,5,158,0,0,478,480,5,172,
        0,0,479,478,1,0,0,0,479,480,1,0,0,0,480,481,1,0,0,0,481,483,5,3,
        0,0,482,484,5,172,0,0,483,482,1,0,0,0,483,484,1,0,0,0,484,485,1,
        0,0,0,485,487,5,158,0,0,486,479,1,0,0,0,487,490,1,0,0,0,488,486,
        1,0,0,0,488,489,1,0,0,0,489,491,1,0,0,0,490,488,1,0,0,0,491,492,
        5,4,0,0,492,493,5,172,0,0,493,494,5,57,0,0,494,495,5,172,0,0,495,
        496,5,62,0,0,496,13,1,0,0,0,497,498,5,67,0,0,498,499,5,172,0,0,499,
        501,5,2,0,0,500,502,5,172,0,0,501,500,1,0,0,0,501,502,1,0,0,0,502,
        503,1,0,0,0,503,505,3,118,59,0,504,506,5,172,0,0,505,504,1,0,0,0,
        505,506,1,0,0,0,506,507,1,0,0,0,507,508,5,4,0,0,508,509,5,172,0,
        0,509,510,5,137,0,0,510,511,5,172,0,0,511,516,5,158,0,0,512,514,
        5,172,0,0,513,512,1,0,0,0,513,514,1,0,0,0,514,515,1,0,0,0,515,517,
        3,42,21,0,516,513,1,0,0,0,516,517,1,0,0,0,517,15,1,0,0,0,518,519,
        5,85,0,0,519,520,5,172,0,0,520,521,5,71,0,0,521,522,5,172,0,0,522,
        527,5,158,0,0,523,525,5,172,0,0,524,523,1,0,0,0,524,525,1,0,0,0,
        525,526,1,0,0,0,526,528,3,42,21,0,527,524,1,0,0,0,527,528,1,0,0,
        0,528,17,1,0,0,0,529,530,5,94,0,0,530,531,5,172,0,0,531,532,5,71,
        0,0,532,533,5,172,0,0,533,534,5,158,0,0,534,19,1,0,0,0,535,536,5,
        55,0,0,536,537,5,172,0,0,537,542,5,158,0,0,538,539,5,172,0,0,539,
        540,5,52,0,0,540,541,5,172,0,0,541,543,3,334,167,0,542,538,1,0,0,
        0,542,543,1,0,0,0,543,544,1,0,0,0,544,545,5,172,0,0,545,547,5,2,
        0,0,546,548,5,172,0,0,547,546,1,0,0,0,547,548,1,0,0,0,548,549,1,
        0,0,0,549,550,5,72,0,0,550,551,5,172,0,0,551,560,3,336,168,0,552,
        554,5,172,0,0,553,552,1,0,0,0,553,554,1,0,0,0,554,555,1,0,0,0,555,
        557,5,3,0,0,556,558,5,172,0,0,557,556,1,0,0,0,557,558,1,0,0,0,558,
        559,1,0,0,0,559,561,3,24,12,0,560,553,1,0,0,0,560,561,1,0,0,0,561,
        563,1,0,0,0,562,564,5,172,0,0,563,562,1,0,0,0,563,564,1,0,0,0,564,
        565,1,0,0,0,565,566,5,4,0,0,566,21,1,0,0,0,567,581,3,336,168,0,568,
        570,5,172,0,0,569,568,1,0,0,0,569,570,1,0,0,0,570,571,1,0,0,0,571,
        573,5,6,0,0,572,574,5,172,0,0,573,572,1,0,0,0,573,574,1,0,0,0,574,
        582,1,0,0,0,575,577,5,172,0,0,576,575,1,0,0,0,577,580,1,0,0,0,578,
        576,1,0,0,0,578,579,1,0,0,0,579,582,1,0,0,0,580,578,1,0,0,0,581,
        569,1,0,0,0,581,578,1,0,0,0,582,583,1,0,0,0,583,584,3,284,142,0,
        584,587,1,0,0,0,585,587,3,336,168,0,586,567,1,0,0,0,586,585,1,0,
        0,0,587,23,1,0,0,0,588,599,3,22,11,0,589,591,5,172,0,0,590,589,1,
        0,0,0,590,591,1,0,0,0,591,592,1,0,0,0,592,594,5,3,0,0,593,595,5,
        172,0,0,594,593,1,0,0,0,594,595,1,0,0,0,595,596,1,0,0,0,596,598,
        3,22,11,0,597,590,1,0,0,0,598,601,1,0,0,0,599,597,1,0,0,0,599,600,
        1,0,0,0,600,25,1,0,0,0,601,599,1,0,0,0,602,603,5,77,0,0,603,604,
        5,172,0,0,604,605,3,334,167,0,605,27,1,0,0,0,606,607,5,144,0,0,607,
        608,5,172,0,0,608,609,3,334,167,0,609,29,1,0,0,0,610,611,5,58,0,
        0,611,612,5,172,0,0,612,614,3,336,168,0,613,615,5,172,0,0,614,613,
        1,0,0,0,614,615,1,0,0,0,615,616,1,0,0,0,616,618,5,6,0,0,617,619,
        5,172,0,0,618,617,1,0,0,0,618,619,1,0,0,0,619,620,1,0,0,0,620,621,
        3,230,115,0,621,626,1,0,0,0,622,623,5,58,0,0,623,624,5,172,0,0,624,
        626,3,298,149,0,625,610,1,0,0,0,625,622,1,0,0,0,626,31,1,0,0,0,627,
        628,5,63,0,0,628,629,5,172,0,0,629,630,5,116,0,0,630,631,5,172,0,
        0,631,632,5,135,0,0,632,633,5,172,0,0,633,634,3,334,167,0,634,635,
        5,172,0,0,635,636,5,99,0,0,636,637,5,172,0,0,637,638,5,158,0,0,638,
        33,1,0,0,0,639,640,5,69,0,0,640,641,5,172,0,0,641,642,5,105,0,0,
        642,643,5,172,0,0,643,645,3,300,150,0,644,646,5,172,0,0,645,644,
        1,0,0,0,645,646,1,0,0,0,646,647,1,0,0,0,647,649,5,2,0,0,648,650,
        5,172,0,0,649,648,1,0,0,0,649,650,1,0,0,0,650,652,1,0,0,0,651,653,
        3,36,18,0,652,651,1,0,0,0,652,653,1,0,0,0,653,655,1,0,0,0,654,656,
        5,172,0,0,655,654,1,0,0,0,655,656,1,0,0,0,656,658,1,0,0,0,657,659,
        3,38,19,0,658,657,1,0,0,0,658,659,1,0,0,0,659,670,1,0,0,0,660,662,
        5,172,0,0,661,660,1,0,0,0,661,662,1,0,0,0,662,663,1,0,0,0,663,665,
        5,3,0,0,664,666,5,172,0,0,665,664,1,0,0,0,665,666,1,0,0,0,666,667,
        1,0,0,0,667,669,3,38,19,0,668,661,1,0,0,0,669,672,1,0,0,0,670,668,
        1,0,0,0,670,671,1,0,0,0,671,674,1,0,0,0,672,670,1,0,0,0,673,675,
        5,172,0,0,674,673,1,0,0,0,674,675,1,0,0,0,675,676,1,0,0,0,676,677,
        5,4,0,0,677,678,5,172,0,0,678,679,5,52,0,0,679,680,5,172,0,0,680,
        681,3,230,115,0,681,35,1,0,0,0,682,693,3,336,168,0,683,685,5,172,
        0,0,684,683,1,0,0,0,684,685,1,0,0,0,685,686,1,0,0,0,686,688,5,3,
        0,0,687,689,5,172,0,0,688,687,1,0,0,0,688,689,1,0,0,0,689,690,1,
        0,0,0,690,692,3,336,168,0,691,684,1,0,0,0,692,695,1,0,0,0,693,691,
        1,0,0,0,693,694,1,0,0,0,694,37,1,0,0,0,695,693,1,0,0,0,696,698,3,
        336,168,0,697,699,5,172,0,0,698,697,1,0,0,0,698,699,1,0,0,0,699,
        700,1,0,0,0,700,701,5,157,0,0,701,703,5,6,0,0,702,704,5,172,0,0,
        703,702,1,0,0,0,703,704,1,0,0,0,704,705,1,0,0,0,705,706,3,284,142,
        0,706,39,1,0,0,0,707,709,5,7,0,0,708,710,5,172,0,0,709,708,1,0,0,
        0,709,710,1,0,0,0,710,711,1,0,0,0,711,722,5,158,0,0,712,714,5,172,
        0,0,713,712,1,0,0,0,713,714,1,0,0,0,714,715,1,0,0,0,715,717,5,3,
        0,0,716,718,5,172,0,0,717,716,1,0,0,0,717,718,1,0,0,0,718,719,1,
        0,0,0,719,721,5,158,0,0,720,713,1,0,0,0,721,724,1,0,0,0,722,720,
        1,0,0,0,722,723,1,0,0,0,723,725,1,0,0,0,724,722,1,0,0,0,725,741,
        5,8,0,0,726,741,5,158,0,0,727,729,5,89,0,0,728,730,5,172,0,0,729,
        728,1,0,0,0,729,730,1,0,0,0,730,731,1,0,0,0,731,733,5,2,0,0,732,
        734,5,172,0,0,733,732,1,0,0,0,733,734,1,0,0,0,734,735,1,0,0,0,735,
        737,5,158,0,0,736,738,5,172,0,0,737,736,1,0,0,0,737,738,1,0,0,0,
        738,739,1,0,0,0,739,741,5,4,0,0,740,707,1,0,0,0,740,726,1,0,0,0,
        740,727,1,0,0,0,741,41,1,0,0,0,742,744,5,2,0,0,743,745,5,172,0,0,
        744,743,1,0,0,0,744,745,1,0,0,0,745,746,1,0,0,0,746,748,3,24,12,
        0,747,749,5,172,0,0,748,747,1,0,0,0,748,749,1,0,0,0,749,750,1,0,
        0,0,750,751,5,4,0,0,751,43,1,0,0,0,752,753,5,95,0,0,753,754,5,172,
        0,0,754,755,5,113,0,0,755,756,5,172,0,0,756,757,5,83,0,0,757,45,
        1,0,0,0,758,759,5,69,0,0,759,760,5,172,0,0,760,761,5,112,0,0,761,
        762,5,172,0,0,762,763,5,135,0,0,763,767,5,172,0,0,764,765,3,44,22,
        0,765,766,5,172,0,0,766,768,1,0,0,0,767,764,1,0,0,0,767,768,1,0,
        0,0,768,769,1,0,0,0,769,771,3,334,167,0,770,772,5,172,0,0,771,770,
        1,0,0,0,771,772,1,0,0,0,772,773,1,0,0,0,773,775,5,2,0,0,774,776,
        5,172,0,0,775,774,1,0,0,0,775,776,1,0,0,0,776,777,1,0,0,0,777,779,
        3,92,46,0,778,780,5,172,0,0,779,778,1,0,0,0,779,780,1,0,0,0,780,
        786,1,0,0,0,781,783,5,3,0,0,782,784,5,172,0,0,783,782,1,0,0,0,783,
        784,1,0,0,0,784,785,1,0,0,0,785,787,3,96,48,0,786,781,1,0,0,0,786,
        787,1,0,0,0,787,789,1,0,0,0,788,790,5,172,0,0,789,788,1,0,0,0,789,
        790,1,0,0,0,790,791,1,0,0,0,791,792,5,4,0,0,792,47,1,0,0,0,793,794,
        5,69,0,0,794,795,5,172,0,0,795,796,5,125,0,0,796,797,5,172,0,0,797,
        798,5,135,0,0,798,802,5,172,0,0,799,800,3,44,22,0,800,801,5,172,
        0,0,801,803,1,0,0,0,802,799,1,0,0,0,802,803,1,0,0,0,803,804,1,0,
        0,0,804,806,3,334,167,0,805,807,5,172,0,0,806,805,1,0,0,0,806,807,
        1,0,0,0,807,808,1,0,0,0,808,810,5,2,0,0,809,811,5,172,0,0,810,809,
        1,0,0,0,810,811,1,0,0,0,811,812,1,0,0,0,812,814,3,52,26,0,813,815,
        5,172,0,0,814,813,1,0,0,0,814,815,1,0,0,0,815,824,1,0,0,0,816,818,
        5,3,0,0,817,819,5,172,0,0,818,817,1,0,0,0,818,819,1,0,0,0,819,820,
        1,0,0,0,820,822,3,92,46,0,821,823,5,172,0,0,822,821,1,0,0,0,822,
        823,1,0,0,0,823,825,1,0,0,0,824,816,1,0,0,0,824,825,1,0,0,0,825,
        834,1,0,0,0,826,828,5,3,0,0,827,829,5,172,0,0,828,827,1,0,0,0,828,
        829,1,0,0,0,829,830,1,0,0,0,830,832,3,336,168,0,831,833,5,172,0,
        0,832,831,1,0,0,0,832,833,1,0,0,0,833,835,1,0,0,0,834,826,1,0,0,
        0,834,835,1,0,0,0,835,836,1,0,0,0,836,837,5,4,0,0,837,49,1,0,0,0,
        838,839,5,69,0,0,839,840,5,172,0,0,840,841,5,125,0,0,841,842,5,172,
        0,0,842,843,5,135,0,0,843,844,5,172,0,0,844,845,5,91,0,0,845,849,
        5,172,0,0,846,847,3,44,22,0,847,848,5,172,0,0,848,850,1,0,0,0,849,
        846,1,0,0,0,849,850,1,0,0,0,850,851,1,0,0,0,851,853,3,334,167,0,
        852,854,5,172,0,0,853,852,1,0,0,0,853,854,1,0,0,0,854,855,1,0,0,
        0,855,857,5,2,0,0,856,858,5,172,0,0,857,856,1,0,0,0,857,858,1,0,
        0,0,858,859,1,0,0,0,859,868,3,52,26,0,860,862,5,172,0,0,861,860,
        1,0,0,0,861,862,1,0,0,0,862,863,1,0,0,0,863,865,5,3,0,0,864,866,
        5,172,0,0,865,864,1,0,0,0,865,866,1,0,0,0,866,867,1,0,0,0,867,869,
        3,52,26,0,868,861,1,0,0,0,869,870,1,0,0,0,870,868,1,0,0,0,870,871,
        1,0,0,0,871,873,1,0,0,0,872,874,5,172,0,0,873,872,1,0,0,0,873,874,
        1,0,0,0,874,883,1,0,0,0,875,877,5,3,0,0,876,878,5,172,0,0,877,876,
        1,0,0,0,877,878,1,0,0,0,878,879,1,0,0,0,879,881,3,92,46,0,880,882,
        5,172,0,0,881,880,1,0,0,0,881,882,1,0,0,0,882,884,1,0,0,0,883,875,
        1,0,0,0,883,884,1,0,0,0,884,893,1,0,0,0,885,887,5,3,0,0,886,888,
        5,172,0,0,887,886,1,0,0,0,887,888,1,0,0,0,888,889,1,0,0,0,889,891,
        3,336,168,0,890,892,5,172,0,0,891,890,1,0,0,0,891,892,1,0,0,0,892,
        894,1,0,0,0,893,885,1,0,0,0,893,894,1,0,0,0,894,895,1,0,0,0,895,
        896,5,4,0,0,896,51,1,0,0,0,897,898,5,88,0,0,898,899,5,172,0,0,899,
        900,3,334,167,0,900,901,5,172,0,0,901,902,5,137,0,0,902,903,5,172,
        0,0,903,904,3,334,167,0,904,53,1,0,0,0,905,906,5,69,0,0,906,907,
        5,172,0,0,907,908,5,130,0,0,908,912,5,172,0,0,909,910,3,44,22,0,
        910,911,5,172,0,0,911,913,1,0,0,0,912,909,1,0,0,0,912,913,1,0,0,
        0,913,914,1,0,0,0,914,919,3,334,167,0,915,916,5,172,0,0,916,918,
        3,58,29,0,917,915,1,0,0,0,918,921,1,0,0,0,919,917,1,0,0,0,919,920,
        1,0,0,0,920,55,1,0,0,0,921,919,1,0,0,0,922,923,5,69,0,0,923,924,
        5,172,0,0,924,925,5,141,0,0,925,926,5,172,0,0,926,927,3,334,167,
        0,927,928,5,172,0,0,928,929,5,52,0,0,929,930,5,172,0,0,930,932,3,
        98,49,0,931,933,5,172,0,0,932,931,1,0,0,0,932,933,1,0,0,0,933,57,
        1,0,0,0,934,940,3,60,30,0,935,940,3,62,31,0,936,940,3,64,32,0,937,
        940,3,66,33,0,938,940,3,68,34,0,939,934,1,0,0,0,939,935,1,0,0,0,
        939,936,1,0,0,0,939,937,1,0,0,0,939,938,1,0,0,0,940,59,1,0,0,0,941,
        942,5,97,0,0,942,945,5,172,0,0,943,944,5,57,0,0,944,946,5,172,0,
        0,945,943,1,0,0,0,945,946,1,0,0,0,946,948,1,0,0,0,947,949,5,155,
        0,0,948,947,1,0,0,0,948,949,1,0,0,0,949,950,1,0,0,0,950,951,3,330,
        165,0,951,61,1,0,0,0,952,953,5,111,0,0,953,954,5,172,0,0,954,962,
        5,109,0,0,955,956,5,109,0,0,956,958,5,172,0,0,957,959,5,155,0,0,
        958,957,1,0,0,0,958,959,1,0,0,0,959,960,1,0,0,0,960,962,3,330,165,
        0,961,952,1,0,0,0,961,955,1,0,0,0,962,63,1,0,0,0,963,964,5,111,0,
        0,964,965,5,172,0,0,965,973,5,107,0,0,966,967,5,107,0,0,967,969,
        5,172,0,0,968,970,5,155,0,0,969,968,1,0,0,0,969,970,1,0,0,0,970,
        971,1,0,0,0,971,973,3,330,165,0,972,963,1,0,0,0,972,966,1,0,0,0,
        973,65,1,0,0,0,974,975,5,133,0,0,975,978,5,172,0,0,976,977,5,147,
        0,0,977,979,5,172,0,0,978,976,1,0,0,0,978,979,1,0,0,0,979,981,1,
        0,0,0,980,982,5,155,0,0,981,980,1,0,0,0,981,982,1,0,0,0,982,983,
        1,0,0,0,983,984,3,330,165,0,984,67,1,0,0,0,985,986,5,111,0,0,986,
        988,5,172,0,0,987,985,1,0,0,0,987,988,1,0,0,0,988,989,1,0,0,0,989,
        990,5,70,0,0,990,69,1,0,0,0,991,992,5,95,0,0,992,993,5,172,0,0,993,
        994,5,83,0,0,994,71,1,0,0,0,995,996,5,79,0,0,996,997,5,172,0,0,997,
        998,7,0,0,0,998,1002,5,172,0,0,999,1000,3,70,35,0,1000,1001,5,172,
        0,0,1001,1003,1,0,0,0,1002,999,1,0,0,0,1002,1003,1,0,0,0,1003,1004,
        1,0,0,0,1004,1005,3,334,167,0,1005,73,1,0,0,0,1006,1007,5,50,0,0,
        1007,1008,5,172,0,0,1008,1009,5,135,0,0,1009,1010,5,172,0,0,1010,
        1011,3,334,167,0,1011,1012,5,172,0,0,1012,1013,3,76,38,0,1013,75,
        1,0,0,0,1014,1019,3,78,39,0,1015,1019,3,82,41,0,1016,1019,3,84,42,
        0,1017,1019,3,86,43,0,1018,1014,1,0,0,0,1018,1015,1,0,0,0,1018,1016,
        1,0,0,0,1018,1017,1,0,0,0,1019,77,1,0,0,0,1020,1021,5,48,0,0,1021,
        1022,5,172,0,0,1022,1023,3,328,164,0,1023,1024,5,172,0,0,1024,1027,
        3,98,49,0,1025,1026,5,172,0,0,1026,1028,3,80,40,0,1027,1025,1,0,
        0,0,1027,1028,1,0,0,0,1028,79,1,0,0,0,1029,1030,5,73,0,0,1030,1031,
        5,172,0,0,1031,1032,3,230,115,0,1032,81,1,0,0,0,1033,1034,5,79,0,
        0,1034,1035,5,172,0,0,1035,1036,3,328,164,0,1036,83,1,0,0,0,1037,
        1038,5,126,0,0,1038,1039,5,172,0,0,1039,1040,5,137,0,0,1040,1041,
        5,172,0,0,1041,1042,3,334,167,0,1042,85,1,0,0,0,1043,1044,5,126,
        0,0,1044,1045,5,172,0,0,1045,1046,3,328,164,0,1046,1047,5,172,0,
        0,1047,1048,5,137,0,0,1048,1049,5,172,0,0,1049,1050,3,328,164,0,
        1050,87,1,0,0,0,1051,1062,3,90,45,0,1052,1054,5,172,0,0,1053,1052,
        1,0,0,0,1053,1054,1,0,0,0,1054,1055,1,0,0,0,1055,1057,5,3,0,0,1056,
        1058,5,172,0,0,1057,1056,1,0,0,0,1057,1058,1,0,0,0,1058,1059,1,0,
        0,0,1059,1061,3,90,45,0,1060,1053,1,0,0,0,1061,1064,1,0,0,0,1062,
        1060,1,0,0,0,1062,1063,1,0,0,0,1063,89,1,0,0,0,1064,1062,1,0,0,0,
        1065,1066,3,328,164,0,1066,1067,5,172,0,0,1067,1068,3,98,49,0,1068,
        91,1,0,0,0,1069,1080,3,94,47,0,1070,1072,5,172,0,0,1071,1070,1,0,
        0,0,1071,1072,1,0,0,0,1072,1073,1,0,0,0,1073,1075,5,3,0,0,1074,1076,
        5,172,0,0,1075,1074,1,0,0,0,1075,1076,1,0,0,0,1076,1077,1,0,0,0,
        1077,1079,3,94,47,0,1078,1071,1,0,0,0,1079,1082,1,0,0,0,1080,1078,
        1,0,0,0,1080,1081,1,0,0,0,1081,93,1,0,0,0,1082,1080,1,0,0,0,1083,
        1086,3,90,45,0,1084,1085,5,172,0,0,1085,1087,3,80,40,0,1086,1084,
        1,0,0,0,1086,1087,1,0,0,0,1087,1092,1,0,0,0,1088,1089,5,172,0,0,
        1089,1090,5,121,0,0,1090,1091,5,172,0,0,1091,1093,5,101,0,0,1092,
        1088,1,0,0,0,1092,1093,1,0,0,0,1093,95,1,0,0,0,1094,1095,5,121,0,
        0,1095,1096,5,172,0,0,1096,1098,5,101,0,0,1097,1099,5,172,0,0,1098,
        1097,1,0,0,0,1098,1099,1,0,0,0,1099,1100,1,0,0,0,1100,1102,5,2,0,
        0,1101,1103,5,172,0,0,1102,1101,1,0,0,0,1102,1103,1,0,0,0,1103,1104,
        1,0,0,0,1104,1106,3,328,164,0,1105,1107,5,172,0,0,1106,1105,1,0,
        0,0,1106,1107,1,0,0,0,1107,1108,1,0,0,0,1108,1109,5,4,0,0,1109,97,
        1,0,0,0,1110,1111,6,49,-1,0,1111,1185,3,336,168,0,1112,1114,5,142,
        0,0,1113,1115,5,172,0,0,1114,1113,1,0,0,0,1114,1115,1,0,0,0,1115,
        1116,1,0,0,0,1116,1118,5,2,0,0,1117,1119,5,172,0,0,1118,1117,1,0,
        0,0,1118,1119,1,0,0,0,1119,1120,1,0,0,0,1120,1122,3,88,44,0,1121,
        1123,5,172,0,0,1122,1121,1,0,0,0,1122,1123,1,0,0,0,1123,1124,1,0,
        0,0,1124,1125,5,4,0,0,1125,1185,1,0,0,0,1126,1128,3,336,168,0,1127,
        1129,5,172,0,0,1128,1127,1,0,0,0,1128,1129,1,0,0,0,1129,1130,1,0,
        0,0,1130,1132,5,2,0,0,1131,1133,5,172,0,0,1132,1131,1,0,0,0,1132,
        1133,1,0,0,0,1133,1134,1,0,0,0,1134,1136,3,88,44,0,1135,1137,5,172,
        0,0,1136,1135,1,0,0,0,1136,1137,1,0,0,0,1137,1138,1,0,0,0,1138,1139,
        5,4,0,0,1139,1185,1,0,0,0,1140,1142,3,336,168,0,1141,1143,5,172,
        0,0,1142,1141,1,0,0,0,1142,1143,1,0,0,0,1143,1144,1,0,0,0,1144,1146,
        5,2,0,0,1145,1147,5,172,0,0,1146,1145,1,0,0,0,1146,1147,1,0,0,0,
        1147,1148,1,0,0,0,1148,1150,3,98,49,0,1149,1151,5,172,0,0,1150,1149,
        1,0,0,0,1150,1151,1,0,0,0,1151,1152,1,0,0,0,1152,1154,5,3,0,0,1153,
        1155,5,172,0,0,1154,1153,1,0,0,0,1154,1155,1,0,0,0,1155,1156,1,0,
        0,0,1156,1158,3,98,49,0,1157,1159,5,172,0,0,1158,1157,1,0,0,0,1158,
        1159,1,0,0,0,1159,1160,1,0,0,0,1160,1161,5,4,0,0,1161,1185,1,0,0,
        0,1162,1164,5,151,0,0,1163,1165,5,172,0,0,1164,1163,1,0,0,0,1164,
        1165,1,0,0,0,1165,1166,1,0,0,0,1166,1168,5,2,0,0,1167,1169,5,172,
        0,0,1168,1167,1,0,0,0,1168,1169,1,0,0,0,1169,1170,1,0,0,0,1170,1172,
        3,330,165,0,1171,1173,5,172,0,0,1172,1171,1,0,0,0,1172,1173,1,0,
        0,0,1173,1174,1,0,0,0,1174,1176,5,3,0,0,1175,1177,5,172,0,0,1176,
        1175,1,0,0,0,1176,1177,1,0,0,0,1177,1178,1,0,0,0,1178,1180,3,330,
        165,0,1179,1181,5,172,0,0,1180,1179,1,0,0,0,1180,1181,1,0,0,0,1181,
        1182,1,0,0,0,1182,1183,5,4,0,0,1183,1185,1,0,0,0,1184,1110,1,0,0,
        0,1184,1112,1,0,0,0,1184,1126,1,0,0,0,1184,1140,1,0,0,0,1184,1162,
        1,0,0,0,1185,1190,1,0,0,0,1186,1187,10,5,0,0,1187,1189,3,100,50,
        0,1188,1186,1,0,0,0,1189,1192,1,0,0,0,1190,1188,1,0,0,0,1190,1191,
        1,0,0,0,1191,99,1,0,0,0,1192,1190,1,0,0,0,1193,1197,3,102,51,0,1194,
        1196,3,102,51,0,1195,1194,1,0,0,0,1196,1199,1,0,0,0,1197,1195,1,
        0,0,0,1197,1198,1,0,0,0,1198,101,1,0,0,0,1199,1197,1,0,0,0,1200,
        1202,5,7,0,0,1201,1203,3,330,165,0,1202,1201,1,0,0,0,1202,1203,1,
        0,0,0,1203,1204,1,0,0,0,1204,1205,5,8,0,0,1205,103,1,0,0,0,1206,
        1209,3,106,53,0,1207,1209,3,108,54,0,1208,1206,1,0,0,0,1208,1207,
        1,0,0,0,1209,105,1,0,0,0,1210,1213,5,84,0,0,1211,1212,5,172,0,0,
        1212,1214,5,104,0,0,1213,1211,1,0,0,0,1213,1214,1,0,0,0,1214,107,
        1,0,0,0,1215,1216,5,122,0,0,1216,109,1,0,0,0,1217,1218,5,56,0,0,
        1218,1219,5,172,0,0,1219,1231,5,139,0,0,1220,1221,5,56,0,0,1221,
        1222,5,172,0,0,1222,1223,5,139,0,0,1223,1224,5,172,0,0,1224,1225,
        5,124,0,0,1225,1226,5,172,0,0,1226,1231,5,117,0,0,1227,1231,5,64,
        0,0,1228,1231,5,128,0,0,1229,1231,5,61,0,0,1230,1217,1,0,0,0,1230,
        1220,1,0,0,0,1230,1227,1,0,0,0,1230,1228,1,0,0,0,1230,1229,1,0,0,
        0,1231,111,1,0,0,0,1232,1235,3,114,57,0,1233,1235,3,116,58,0,1234,
        1232,1,0,0,0,1234,1233,1,0,0,0,1235,113,1,0,0,0,1236,1237,5,103,
        0,0,1237,1238,5,172,0,0,1238,1239,5,86,0,0,1239,1242,5,172,0,0,1240,
        1243,5,158,0,0,1241,1243,3,320,160,0,1242,1240,1,0,0,0,1242,1241,
        1,0,0,0,1243,115,1,0,0,0,1244,1245,5,98,0,0,1245,1246,5,172,0,0,
        1246,1247,3,320,160,0,1247,117,1,0,0,0,1248,1250,3,120,60,0,1249,
        1251,5,172,0,0,1250,1249,1,0,0,0,1250,1251,1,0,0,0,1251,1253,1,0,
        0,0,1252,1248,1,0,0,0,1252,1253,1,0,0,0,1253,1254,1,0,0,0,1254,1255,
        3,124,62,0,1255,119,1,0,0,0,1256,1257,5,123,0,0,1257,1258,5,172,
        0,0,1258,1259,5,90,0,0,1259,1260,5,172,0,0,1260,1262,3,334,167,0,
        1261,1263,5,172,0,0,1262,1261,1,0,0,0,1262,1263,1,0,0,0,1263,1264,
        1,0,0,0,1264,1266,5,2,0,0,1265,1267,5,172,0,0,1266,1265,1,0,0,0,
        1266,1267,1,0,0,0,1267,1268,1,0,0,0,1268,1270,3,122,61,0,1269,1271,
        5,172,0,0,1270,1269,1,0,0,0,1270,1271,1,0,0,0,1271,1272,1,0,0,0,
        1272,1273,5,4,0,0,1273,121,1,0,0,0,1274,1285,3,144,72,0,1275,1277,
        5,172,0,0,1276,1275,1,0,0,0,1276,1277,1,0,0,0,1277,1278,1,0,0,0,
        1278,1280,5,3,0,0,1279,1281,5,172,0,0,1280,1279,1,0,0,0,1280,1281,
        1,0,0,0,1281,1282,1,0,0,0,1282,1284,3,144,72,0,1283,1276,1,0,0,0,
        1284,1287,1,0,0,0,1285,1283,1,0,0,0,1285,1286,1,0,0,0,1286,123,1,
        0,0,0,1287,1285,1,0,0,0,1288,1295,3,128,64,0,1289,1291,5,172,0,0,
        1290,1289,1,0,0,0,1290,1291,1,0,0,0,1291,1292,1,0,0,0,1292,1294,
        3,126,63,0,1293,1290,1,0,0,0,1294,1297,1,0,0,0,1295,1293,1,0,0,0,
        1295,1296,1,0,0,0,1296,1310,1,0,0,0,1297,1295,1,0,0,0,1298,1300,
        3,172,86,0,1299,1301,5,172,0,0,1300,1299,1,0,0,0,1300,1301,1,0,0,
        0,1301,1303,1,0,0,0,1302,1298,1,0,0,0,1303,1304,1,0,0,0,1304,1302,
        1,0,0,0,1304,1305,1,0,0,0,1305,1306,1,0,0,0,1306,1307,3,128,64,0,
        1307,1308,6,62,-1,0,1308,1310,1,0,0,0,1309,1288,1,0,0,0,1309,1302,
        1,0,0,0,1310,125,1,0,0,0,1311,1312,5,142,0,0,1312,1313,5,172,0,0,
        1313,1315,5,49,0,0,1314,1316,5,172,0,0,1315,1314,1,0,0,0,1315,1316,
        1,0,0,0,1316,1317,1,0,0,0,1317,1324,3,128,64,0,1318,1320,5,142,0,
        0,1319,1321,5,172,0,0,1320,1319,1,0,0,0,1320,1321,1,0,0,0,1321,1322,
        1,0,0,0,1322,1324,3,128,64,0,1323,1311,1,0,0,0,1323,1318,1,0,0,0,
        1324,127,1,0,0,0,1325,1328,3,130,65,0,1326,1328,3,132,66,0,1327,
        1325,1,0,0,0,1327,1326,1,0,0,0,1328,129,1,0,0,0,1329,1331,3,138,
        69,0,1330,1332,5,172,0,0,1331,1330,1,0,0,0,1331,1332,1,0,0,0,1332,
        1334,1,0,0,0,1333,1329,1,0,0,0,1334,1337,1,0,0,0,1335,1333,1,0,0,
        0,1335,1336,1,0,0,0,1336,1338,1,0,0,0,1337,1335,1,0,0,0,1338,1365,
        3,172,86,0,1339,1341,3,138,69,0,1340,1342,5,172,0,0,1341,1340,1,
        0,0,0,1341,1342,1,0,0,0,1342,1344,1,0,0,0,1343,1339,1,0,0,0,1344,
        1347,1,0,0,0,1345,1343,1,0,0,0,1345,1346,1,0,0,0,1346,1348,1,0,0,
        0,1347,1345,1,0,0,0,1348,1355,3,136,68,0,1349,1351,5,172,0,0,1350,
        1349,1,0,0,0,1350,1351,1,0,0,0,1351,1352,1,0,0,0,1352,1354,3,136,
        68,0,1353,1350,1,0,0,0,1354,1357,1,0,0,0,1355,1353,1,0,0,0,1355,
        1356,1,0,0,0,1356,1362,1,0,0,0,1357,1355,1,0,0,0,1358,1360,5,172,
        0,0,1359,1358,1,0,0,0,1359,1360,1,0,0,0,1360,1361,1,0,0,0,1361,1363,
        3,172,86,0,1362,1359,1,0,0,0,1362,1363,1,0,0,0,1363,1365,1,0,0,0,
        1364,1335,1,0,0,0,1364,1345,1,0,0,0,1365,131,1,0,0,0,1366,1368,3,
        134,67,0,1367,1369,5,172,0,0,1368,1367,1,0,0,0,1368,1369,1,0,0,0,
        1369,1371,1,0,0,0,1370,1366,1,0,0,0,1371,1372,1,0,0,0,1372,1370,
        1,0,0,0,1372,1373,1,0,0,0,1373,1374,1,0,0,0,1374,1375,3,130,65,0,
        1375,133,1,0,0,0,1376,1378,3,138,69,0,1377,1379,5,172,0,0,1378,1377,
        1,0,0,0,1378,1379,1,0,0,0,1379,1381,1,0,0,0,1380,1376,1,0,0,0,1381,
        1384,1,0,0,0,1382,1380,1,0,0,0,1382,1383,1,0,0,0,1383,1391,1,0,0,
        0,1384,1382,1,0,0,0,1385,1387,3,136,68,0,1386,1388,5,172,0,0,1387,
        1386,1,0,0,0,1387,1388,1,0,0,0,1388,1390,1,0,0,0,1389,1385,1,0,0,
        0,1390,1393,1,0,0,0,1391,1389,1,0,0,0,1391,1392,1,0,0,0,1392,1394,
        1,0,0,0,1393,1391,1,0,0,0,1394,1395,3,170,85,0,1395,135,1,0,0,0,
        1396,1401,3,158,79,0,1397,1401,3,160,80,0,1398,1401,3,164,82,0,1399,
        1401,3,168,84,0,1400,1396,1,0,0,0,1400,1397,1,0,0,0,1400,1398,1,
        0,0,0,1400,1399,1,0,0,0,1401,137,1,0,0,0,1402,1407,3,150,75,0,1403,
        1407,3,156,78,0,1404,1407,3,142,71,0,1405,1407,3,140,70,0,1406,1402,
        1,0,0,0,1406,1403,1,0,0,0,1406,1404,1,0,0,0,1406,1405,1,0,0,0,1407,
        139,1,0,0,0,1408,1426,5,103,0,0,1409,1410,5,172,0,0,1410,1411,5,
        147,0,0,1411,1412,5,172,0,0,1412,1414,5,92,0,0,1413,1415,5,172,0,
        0,1414,1413,1,0,0,0,1414,1415,1,0,0,0,1415,1416,1,0,0,0,1416,1418,
        5,2,0,0,1417,1419,5,172,0,0,1418,1417,1,0,0,0,1418,1419,1,0,0,0,
        1419,1420,1,0,0,0,1420,1422,3,88,44,0,1421,1423,5,172,0,0,1422,1421,
        1,0,0,0,1422,1423,1,0,0,0,1423,1424,1,0,0,0,1424,1425,5,4,0,0,1425,
        1427,1,0,0,0,1426,1409,1,0,0,0,1426,1427,1,0,0,0,1427,1428,1,0,0,
        0,1428,1429,5,172,0,0,1429,1430,5,88,0,0,1430,1431,5,172,0,0,1431,
        1436,3,10,5,0,1432,1434,5,172,0,0,1433,1432,1,0,0,0,1433,1434,1,
        0,0,0,1434,1435,1,0,0,0,1435,1437,3,42,21,0,1436,1433,1,0,0,0,1436,
        1437,1,0,0,0,1437,1442,1,0,0,0,1438,1440,5,172,0,0,1439,1438,1,0,
        0,0,1439,1440,1,0,0,0,1440,1441,1,0,0,0,1441,1443,3,188,94,0,1442,
        1439,1,0,0,0,1442,1443,1,0,0,0,1443,141,1,0,0,0,1444,1446,3,120,
        60,0,1445,1447,5,172,0,0,1446,1445,1,0,0,0,1446,1447,1,0,0,0,1447,
        1449,1,0,0,0,1448,1444,1,0,0,0,1448,1449,1,0,0,0,1449,1450,1,0,0,
        0,1450,1451,5,58,0,0,1451,1452,5,172,0,0,1452,1457,3,298,149,0,1453,
        1455,5,172,0,0,1454,1453,1,0,0,0,1454,1455,1,0,0,0,1455,1456,1,0,
        0,0,1456,1458,3,188,94,0,1457,1454,1,0,0,0,1457,1458,1,0,0,0,1458,
        143,1,0,0,0,1459,1473,3,334,167,0,1460,1462,5,172,0,0,1461,1460,
        1,0,0,0,1461,1462,1,0,0,0,1462,1463,1,0,0,0,1463,1465,5,9,0,0,1464,
        1466,5,172,0,0,1465,1464,1,0,0,0,1465,1466,1,0,0,0,1466,1467,1,0,
        0,0,1467,1469,3,146,73,0,1468,1470,5,172,0,0,1469,1468,1,0,0,0,1469,
        1470,1,0,0,0,1470,1471,1,0,0,0,1471,1472,5,10,0,0,1472,1474,1,0,
        0,0,1473,1461,1,0,0,0,1473,1474,1,0,0,0,1474,145,1,0,0,0,1475,1486,
        3,148,74,0,1476,1478,5,172,0,0,1477,1476,1,0,0,0,1477,1478,1,0,0,
        0,1478,1479,1,0,0,0,1479,1481,5,3,0,0,1480,1482,5,172,0,0,1481,1480,
        1,0,0,0,1481,1482,1,0,0,0,1482,1483,1,0,0,0,1483,1485,3,148,74,0,
        1484,1477,1,0,0,0,1485,1488,1,0,0,0,1486,1484,1,0,0,0,1486,1487,
        1,0,0,0,1487,147,1,0,0,0,1488,1486,1,0,0,0,1489,1492,3,328,164,0,
        1490,1491,5,172,0,0,1491,1493,3,80,40,0,1492,1490,1,0,0,0,1492,1493,
        1,0,0,0,1493,1496,1,0,0,0,1494,1495,5,172,0,0,1495,1497,3,188,94,
        0,1496,1494,1,0,0,0,1496,1497,1,0,0,0,1497,149,1,0,0,0,1498,1499,
        5,118,0,0,1499,1501,5,172,0,0,1500,1498,1,0,0,0,1500,1501,1,0,0,
        0,1501,1502,1,0,0,0,1502,1504,5,106,0,0,1503,1505,5,172,0,0,1504,
        1503,1,0,0,0,1504,1505,1,0,0,0,1505,1506,1,0,0,0,1506,1509,3,190,
        95,0,1507,1508,5,172,0,0,1508,1510,3,188,94,0,1509,1507,1,0,0,0,
        1509,1510,1,0,0,0,1510,1513,1,0,0,0,1511,1512,5,172,0,0,1512,1514,
        3,152,76,0,1513,1511,1,0,0,0,1513,1514,1,0,0,0,1514,151,1,0,0,0,
        1515,1516,5,93,0,0,1516,1517,5,172,0,0,1517,1518,3,154,77,0,1518,
        153,1,0,0,0,1519,1520,6,77,-1,0,1520,1522,5,2,0,0,1521,1523,5,172,
        0,0,1522,1521,1,0,0,0,1522,1523,1,0,0,0,1523,1524,1,0,0,0,1524,1526,
        3,154,77,0,1525,1527,5,172,0,0,1526,1525,1,0,0,0,1526,1527,1,0,0,
        0,1527,1528,1,0,0,0,1528,1529,5,4,0,0,1529,1532,1,0,0,0,1530,1532,
        3,334,167,0,1531,1519,1,0,0,0,1531,1530,1,0,0,0,1532,1549,1,0,0,
        0,1533,1534,10,4,0,0,1534,1535,5,172,0,0,1535,1536,5,100,0,0,1536,
        1537,5,172,0,0,1537,1548,3,154,77,5,1538,1543,10,3,0,0,1539,1540,
        5,172,0,0,1540,1541,5,110,0,0,1541,1542,5,172,0,0,1542,1544,3,334,
        167,0,1543,1539,1,0,0,0,1544,1545,1,0,0,0,1545,1543,1,0,0,0,1545,
        1546,1,0,0,0,1546,1548,1,0,0,0,1547,1533,1,0,0,0,1547,1538,1,0,0,
        0,1548,1551,1,0,0,0,1549,1547,1,0,0,0,1549,1550,1,0,0,0,1550,155,
        1,0,0,0,1551,1549,1,0,0,0,1552,1554,5,143,0,0,1553,1555,5,172,0,
        0,1554,1553,1,0,0,0,1554,1555,1,0,0,0,1555,1556,1,0,0,0,1556,1557,
        3,230,115,0,1557,1558,5,172,0,0,1558,1559,5,52,0,0,1559,1560,5,172,
        0,0,1560,1561,3,320,160,0,1561,157,1,0,0,0,1562,1564,5,69,0,0,1563,
        1565,5,172,0,0,1564,1563,1,0,0,0,1564,1565,1,0,0,0,1565,1566,1,0,
        0,0,1566,1567,3,190,95,0,1567,159,1,0,0,0,1568,1570,5,108,0,0,1569,
        1571,5,172,0,0,1570,1569,1,0,0,0,1570,1571,1,0,0,0,1571,1572,1,0,
        0,0,1572,1577,3,190,95,0,1573,1574,5,172,0,0,1574,1576,3,162,81,
        0,1575,1573,1,0,0,0,1576,1579,1,0,0,0,1577,1575,1,0,0,0,1577,1578,
        1,0,0,0,1578,161,1,0,0,0,1579,1577,1,0,0,0,1580,1581,5,116,0,0,1581,
        1582,5,172,0,0,1582,1583,5,106,0,0,1583,1584,5,172,0,0,1584,1591,
        3,164,82,0,1585,1586,5,116,0,0,1586,1587,5,172,0,0,1587,1588,5,69,
        0,0,1588,1589,5,172,0,0,1589,1591,3,164,82,0,1590,1580,1,0,0,0,1590,
        1585,1,0,0,0,1591,163,1,0,0,0,1592,1594,5,131,0,0,1593,1595,5,172,
        0,0,1594,1593,1,0,0,0,1594,1595,1,0,0,0,1595,1596,1,0,0,0,1596,1607,
        3,166,83,0,1597,1599,5,172,0,0,1598,1597,1,0,0,0,1598,1599,1,0,0,
        0,1599,1600,1,0,0,0,1600,1602,5,3,0,0,1601,1603,5,172,0,0,1602,1601,
        1,0,0,0,1602,1603,1,0,0,0,1603,1604,1,0,0,0,1604,1606,3,166,83,0,
        1605,1598,1,0,0,0,1606,1609,1,0,0,0,1607,1605,1,0,0,0,1607,1608,
        1,0,0,0,1608,165,1,0,0,0,1609,1607,1,0,0,0,1610,1612,3,326,163,0,
        1611,1613,5,172,0,0,1612,1611,1,0,0,0,1612,1613,1,0,0,0,1613,1614,
        1,0,0,0,1614,1616,5,6,0,0,1615,1617,5,172,0,0,1616,1615,1,0,0,0,
        1616,1617,1,0,0,0,1617,1618,1,0,0,0,1618,1619,3,230,115,0,1619,167,
        1,0,0,0,1620,1621,5,77,0,0,1621,1623,5,172,0,0,1622,1620,1,0,0,0,
        1622,1623,1,0,0,0,1623,1624,1,0,0,0,1624,1626,5,74,0,0,1625,1627,
        5,172,0,0,1626,1625,1,0,0,0,1626,1627,1,0,0,0,1627,1628,1,0,0,0,
        1628,1639,3,230,115,0,1629,1631,5,172,0,0,1630,1629,1,0,0,0,1630,
        1631,1,0,0,0,1631,1632,1,0,0,0,1632,1634,5,3,0,0,1633,1635,5,172,
        0,0,1634,1633,1,0,0,0,1634,1635,1,0,0,0,1635,1636,1,0,0,0,1636,1638,
        3,230,115,0,1637,1630,1,0,0,0,1638,1641,1,0,0,0,1639,1637,1,0,0,
        0,1639,1640,1,0,0,0,1640,169,1,0,0,0,1641,1639,1,0,0,0,1642,1643,
        5,147,0,0,1643,1648,3,174,87,0,1644,1646,5,172,0,0,1645,1644,1,0,
        0,0,1645,1646,1,0,0,0,1646,1647,1,0,0,0,1647,1649,3,188,94,0,1648,
        1645,1,0,0,0,1648,1649,1,0,0,0,1649,171,1,0,0,0,1650,1651,5,127,
        0,0,1651,1652,3,174,87,0,1652,173,1,0,0,0,1653,1655,5,172,0,0,1654,
        1653,1,0,0,0,1654,1655,1,0,0,0,1655,1656,1,0,0,0,1656,1658,5,78,
        0,0,1657,1654,1,0,0,0,1657,1658,1,0,0,0,1658,1659,1,0,0,0,1659,1660,
        5,172,0,0,1660,1663,3,176,88,0,1661,1662,5,172,0,0,1662,1664,3,180,
        90,0,1663,1661,1,0,0,0,1663,1664,1,0,0,0,1664,1667,1,0,0,0,1665,
        1666,5,172,0,0,1666,1668,3,182,91,0,1667,1665,1,0,0,0,1667,1668,
        1,0,0,0,1668,1671,1,0,0,0,1669,1670,5,172,0,0,1670,1672,3,184,92,
        0,1671,1669,1,0,0,0,1671,1672,1,0,0,0,1672,175,1,0,0,0,1673,1684,
        5,152,0,0,1674,1676,5,172,0,0,1675,1674,1,0,0,0,1675,1676,1,0,0,
        0,1676,1677,1,0,0,0,1677,1679,5,3,0,0,1678,1680,5,172,0,0,1679,1678,
        1,0,0,0,1679,1680,1,0,0,0,1680,1681,1,0,0,0,1681,1683,3,178,89,0,
        1682,1675,1,0,0,0,1683,1686,1,0,0,0,1684,1682,1,0,0,0,1684,1685,
        1,0,0,0,1685,1702,1,0,0,0,1686,1684,1,0,0,0,1687,1698,3,178,89,0,
        1688,1690,5,172,0,0,1689,1688,1,0,0,0,1689,1690,1,0,0,0,1690,1691,
        1,0,0,0,1691,1693,5,3,0,0,1692,1694,5,172,0,0,1693,1692,1,0,0,0,
        1693,1694,1,0,0,0,1694,1695,1,0,0,0,1695,1697,3,178,89,0,1696,1689,
        1,0,0,0,1697,1700,1,0,0,0,1698,1696,1,0,0,0,1698,1699,1,0,0,0,1699,
        1702,1,0,0,0,1700,1698,1,0,0,0,1701,1673,1,0,0,0,1701,1687,1,0,0,
        0,1702,177,1,0,0,0,1703,1704,3,230,115,0,1704,1705,5,172,0,0,1705,
        1706,5,52,0,0,1706,1707,5,172,0,0,1707,1708,3,320,160,0,1708,1711,
        1,0,0,0,1709,1711,3,230,115,0,1710,1703,1,0,0,0,1710,1709,1,0,0,
        0,1711,179,1,0,0,0,1712,1713,5,120,0,0,1713,1714,5,172,0,0,1714,
        1715,5,57,0,0,1715,1716,5,172,0,0,1716,1724,3,186,93,0,1717,1719,
        5,3,0,0,1718,1720,5,172,0,0,1719,1718,1,0,0,0,1719,1720,1,0,0,0,
        1720,1721,1,0,0,0,1721,1723,3,186,93,0,1722,1717,1,0,0,0,1723,1726,
        1,0,0,0,1724,1722,1,0,0,0,1724,1725,1,0,0,0,1725,181,1,0,0,0,1726,
        1724,1,0,0,0,1727,1728,5,153,0,0,1728,1729,5,172,0,0,1729,1730,3,
        230,115,0,1730,183,1,0,0,0,1731,1732,5,102,0,0,1732,1733,5,172,0,
        0,1733,1734,3,230,115,0,1734,185,1,0,0,0,1735,1740,3,230,115,0,1736,
        1738,5,172,0,0,1737,1736,1,0,0,0,1737,1738,1,0,0,0,1738,1739,1,0,
        0,0,1739,1741,7,1,0,0,1740,1737,1,0,0,0,1740,1741,1,0,0,0,1741,187,
        1,0,0,0,1742,1743,5,146,0,0,1743,1744,5,172,0,0,1744,1745,3,230,
        115,0,1745,189,1,0,0,0,1746,1757,3,192,96,0,1747,1749,5,172,0,0,
        1748,1747,1,0,0,0,1748,1749,1,0,0,0,1749,1750,1,0,0,0,1750,1752,
        5,3,0,0,1751,1753,5,172,0,0,1752,1751,1,0,0,0,1752,1753,1,0,0,0,
        1753,1754,1,0,0,0,1754,1756,3,192,96,0,1755,1748,1,0,0,0,1756,1759,
        1,0,0,0,1757,1755,1,0,0,0,1757,1758,1,0,0,0,1758,191,1,0,0,0,1759,
        1757,1,0,0,0,1760,1762,3,320,160,0,1761,1763,5,172,0,0,1762,1761,
        1,0,0,0,1762,1763,1,0,0,0,1763,1764,1,0,0,0,1764,1766,5,6,0,0,1765,
        1767,5,172,0,0,1766,1765,1,0,0,0,1766,1767,1,0,0,0,1767,1768,1,0,
        0,0,1768,1769,3,194,97,0,1769,1772,1,0,0,0,1770,1772,3,194,97,0,
        1771,1760,1,0,0,0,1771,1770,1,0,0,0,1772,193,1,0,0,0,1773,1774,3,
        196,98,0,1774,195,1,0,0,0,1775,1782,3,198,99,0,1776,1778,5,172,0,
        0,1777,1776,1,0,0,0,1777,1778,1,0,0,0,1778,1779,1,0,0,0,1779,1781,
        3,200,100,0,1780,1777,1,0,0,0,1781,1784,1,0,0,0,1782,1780,1,0,0,
        0,1782,1783,1,0,0,0,1783,1790,1,0,0,0,1784,1782,1,0,0,0,1785,1786,
        5,2,0,0,1786,1787,3,196,98,0,1787,1788,5,4,0,0,1788,1790,1,0,0,0,
        1789,1775,1,0,0,0,1789,1785,1,0,0,0,1790,197,1,0,0,0,1791,1793,5,
        2,0,0,1792,1794,5,172,0,0,1793,1792,1,0,0,0,1793,1794,1,0,0,0,1794,
        1799,1,0,0,0,1795,1797,3,320,160,0,1796,1798,5,172,0,0,1797,1796,
        1,0,0,0,1797,1798,1,0,0,0,1798,1800,1,0,0,0,1799,1795,1,0,0,0,1799,
        1800,1,0,0,0,1800,1805,1,0,0,0,1801,1803,3,210,105,0,1802,1804,5,
        172,0,0,1803,1802,1,0,0,0,1803,1804,1,0,0,0,1804,1806,1,0,0,0,1805,
        1801,1,0,0,0,1805,1806,1,0,0,0,1806,1811,1,0,0,0,1807,1809,3,206,
        103,0,1808,1810,5,172,0,0,1809,1808,1,0,0,0,1809,1810,1,0,0,0,1810,
        1812,1,0,0,0,1811,1807,1,0,0,0,1811,1812,1,0,0,0,1812,1813,1,0,0,
        0,1813,1814,5,4,0,0,1814,199,1,0,0,0,1815,1817,3,202,101,0,1816,
        1818,5,172,0,0,1817,1816,1,0,0,0,1817,1818,1,0,0,0,1818,1819,1,0,
        0,0,1819,1820,3,198,99,0,1820,201,1,0,0,0,1821,1823,3,340,170,0,
        1822,1824,5,172,0,0,1823,1822,1,0,0,0,1823,1824,1,0,0,0,1824,1825,
        1,0,0,0,1825,1827,3,344,172,0,1826,1828,5,172,0,0,1827,1826,1,0,
        0,0,1827,1828,1,0,0,0,1828,1830,1,0,0,0,1829,1831,3,204,102,0,1830,
        1829,1,0,0,0,1830,1831,1,0,0,0,1831,1833,1,0,0,0,1832,1834,5,172,
        0,0,1833,1832,1,0,0,0,1833,1834,1,0,0,0,1834,1835,1,0,0,0,1835,1836,
        3,344,172,0,1836,1866,1,0,0,0,1837,1839,3,344,172,0,1838,1840,5,
        172,0,0,1839,1838,1,0,0,0,1839,1840,1,0,0,0,1840,1842,1,0,0,0,1841,
        1843,3,204,102,0,1842,1841,1,0,0,0,1842,1843,1,0,0,0,1843,1845,1,
        0,0,0,1844,1846,5,172,0,0,1845,1844,1,0,0,0,1845,1846,1,0,0,0,1846,
        1847,1,0,0,0,1847,1849,3,344,172,0,1848,1850,5,172,0,0,1849,1848,
        1,0,0,0,1849,1850,1,0,0,0,1850,1851,1,0,0,0,1851,1852,3,342,171,
        0,1852,1866,1,0,0,0,1853,1855,3,344,172,0,1854,1856,5,172,0,0,1855,
        1854,1,0,0,0,1855,1856,1,0,0,0,1856,1858,1,0,0,0,1857,1859,3,204,
        102,0,1858,1857,1,0,0,0,1858,1859,1,0,0,0,1859,1861,1,0,0,0,1860,
        1862,5,172,0,0,1861,1860,1,0,0,0,1861,1862,1,0,0,0,1862,1863,1,0,
        0,0,1863,1864,3,344,172,0,1864,1866,1,0,0,0,1865,1821,1,0,0,0,1865,
        1837,1,0,0,0,1865,1853,1,0,0,0,1866,203,1,0,0,0,1867,1869,5,7,0,
        0,1868,1870,5,172,0,0,1869,1868,1,0,0,0,1869,1870,1,0,0,0,1870,1875,
        1,0,0,0,1871,1873,3,320,160,0,1872,1874,5,172,0,0,1873,1872,1,0,
        0,0,1873,1874,1,0,0,0,1874,1876,1,0,0,0,1875,1871,1,0,0,0,1875,1876,
        1,0,0,0,1876,1881,1,0,0,0,1877,1879,3,208,104,0,1878,1880,5,172,
        0,0,1879,1878,1,0,0,0,1879,1880,1,0,0,0,1880,1882,1,0,0,0,1881,1877,
        1,0,0,0,1881,1882,1,0,0,0,1882,1887,1,0,0,0,1883,1885,3,214,107,
        0,1884,1886,5,172,0,0,1885,1884,1,0,0,0,1885,1886,1,0,0,0,1886,1888,
        1,0,0,0,1887,1883,1,0,0,0,1887,1888,1,0,0,0,1888,1893,1,0,0,0,1889,
        1891,3,206,103,0,1890,1892,5,172,0,0,1891,1890,1,0,0,0,1891,1892,
        1,0,0,0,1892,1894,1,0,0,0,1893,1889,1,0,0,0,1893,1894,1,0,0,0,1894,
        1895,1,0,0,0,1895,1896,5,8,0,0,1896,205,1,0,0,0,1897,1899,5,9,0,
        0,1898,1900,5,172,0,0,1899,1898,1,0,0,0,1899,1900,1,0,0,0,1900,1934,
        1,0,0,0,1901,1903,3,328,164,0,1902,1904,5,172,0,0,1903,1902,1,0,
        0,0,1903,1904,1,0,0,0,1904,1905,1,0,0,0,1905,1907,5,157,0,0,1906,
        1908,5,172,0,0,1907,1906,1,0,0,0,1907,1908,1,0,0,0,1908,1909,1,0,
        0,0,1909,1911,3,230,115,0,1910,1912,5,172,0,0,1911,1910,1,0,0,0,
        1911,1912,1,0,0,0,1912,1931,1,0,0,0,1913,1915,5,3,0,0,1914,1916,
        5,172,0,0,1915,1914,1,0,0,0,1915,1916,1,0,0,0,1916,1917,1,0,0,0,
        1917,1919,3,328,164,0,1918,1920,5,172,0,0,1919,1918,1,0,0,0,1919,
        1920,1,0,0,0,1920,1921,1,0,0,0,1921,1923,5,157,0,0,1922,1924,5,172,
        0,0,1923,1922,1,0,0,0,1923,1924,1,0,0,0,1924,1925,1,0,0,0,1925,1927,
        3,230,115,0,1926,1928,5,172,0,0,1927,1926,1,0,0,0,1927,1928,1,0,
        0,0,1928,1930,1,0,0,0,1929,1913,1,0,0,0,1930,1933,1,0,0,0,1931,1929,
        1,0,0,0,1931,1932,1,0,0,0,1932,1935,1,0,0,0,1933,1931,1,0,0,0,1934,
        1901,1,0,0,0,1934,1935,1,0,0,0,1935,1936,1,0,0,0,1936,1937,5,10,
        0,0,1937,207,1,0,0,0,1938,1940,5,157,0,0,1939,1941,5,172,0,0,1940,
        1939,1,0,0,0,1940,1941,1,0,0,0,1941,1942,1,0,0,0,1942,1956,3,228,
        114,0,1943,1945,5,172,0,0,1944,1943,1,0,0,0,1944,1945,1,0,0,0,1945,
        1946,1,0,0,0,1946,1948,5,11,0,0,1947,1949,5,157,0,0,1948,1947,1,
        0,0,0,1948,1949,1,0,0,0,1949,1951,1,0,0,0,1950,1952,5,172,0,0,1951,
        1950,1,0,0,0,1951,1952,1,0,0,0,1952,1953,1,0,0,0,1953,1955,3,228,
        114,0,1954,1944,1,0,0,0,1955,1958,1,0,0,0,1956,1954,1,0,0,0,1956,
        1957,1,0,0,0,1957,209,1,0,0,0,1958,1956,1,0,0,0,1959,1966,3,212,
        106,0,1960,1962,5,172,0,0,1961,1960,1,0,0,0,1961,1962,1,0,0,0,1962,
        1963,1,0,0,0,1963,1965,3,212,106,0,1964,1961,1,0,0,0,1965,1968,1,
        0,0,0,1966,1964,1,0,0,0,1966,1967,1,0,0,0,1967,211,1,0,0,0,1968,
        1966,1,0,0,0,1969,1971,5,157,0,0,1970,1972,5,172,0,0,1971,1970,1,
        0,0,0,1971,1972,1,0,0,0,1972,1973,1,0,0,0,1973,1974,3,226,113,0,
        1974,213,1,0,0,0,1975,1977,5,152,0,0,1976,1978,5,172,0,0,1977,1976,
        1,0,0,0,1977,1978,1,0,0,0,1978,1985,1,0,0,0,1979,1986,5,132,0,0,
        1980,1981,5,49,0,0,1981,1982,5,172,0,0,1982,1986,5,132,0,0,1983,
        1986,5,138,0,0,1984,1986,5,46,0,0,1985,1979,1,0,0,0,1985,1980,1,
        0,0,0,1985,1983,1,0,0,0,1985,1984,1,0,0,0,1985,1986,1,0,0,0,1986,
        1988,1,0,0,0,1987,1989,5,172,0,0,1988,1987,1,0,0,0,1988,1989,1,0,
        0,0,1989,2004,1,0,0,0,1990,1992,3,222,111,0,1991,1990,1,0,0,0,1991,
        1992,1,0,0,0,1992,1994,1,0,0,0,1993,1995,5,172,0,0,1994,1993,1,0,
        0,0,1994,1995,1,0,0,0,1995,1996,1,0,0,0,1996,1998,5,12,0,0,1997,
        1999,5,172,0,0,1998,1997,1,0,0,0,1998,1999,1,0,0,0,1999,2001,1,0,
        0,0,2000,2002,3,224,112,0,2001,2000,1,0,0,0,2001,2002,1,0,0,0,2002,
        2005,1,0,0,0,2003,2005,3,330,165,0,2004,1991,1,0,0,0,2004,2003,1,
        0,0,0,2004,2005,1,0,0,0,2005,2010,1,0,0,0,2006,2008,5,172,0,0,2007,
        2006,1,0,0,0,2007,2008,1,0,0,0,2008,2009,1,0,0,0,2009,2011,3,216,
        108,0,2010,2007,1,0,0,0,2010,2011,1,0,0,0,2011,215,1,0,0,0,2012,
        2014,5,2,0,0,2013,2015,5,172,0,0,2014,2013,1,0,0,0,2014,2015,1,0,
        0,0,2015,2016,1,0,0,0,2016,2018,3,320,160,0,2017,2019,5,172,0,0,
        2018,2017,1,0,0,0,2018,2019,1,0,0,0,2019,2020,1,0,0,0,2020,2022,
        5,3,0,0,2021,2023,5,172,0,0,2022,2021,1,0,0,0,2022,2023,1,0,0,0,
        2023,2024,1,0,0,0,2024,2036,3,320,160,0,2025,2027,5,172,0,0,2026,
        2025,1,0,0,0,2026,2027,1,0,0,0,2027,2028,1,0,0,0,2028,2030,5,11,
        0,0,2029,2031,5,172,0,0,2030,2029,1,0,0,0,2030,2031,1,0,0,0,2031,
        2032,1,0,0,0,2032,2034,3,188,94,0,2033,2035,5,172,0,0,2034,2033,
        1,0,0,0,2034,2035,1,0,0,0,2035,2037,1,0,0,0,2036,2026,1,0,0,0,2036,
        2037,1,0,0,0,2037,2057,1,0,0,0,2038,2040,5,172,0,0,2039,2038,1,0,
        0,0,2039,2040,1,0,0,0,2040,2041,1,0,0,0,2041,2043,5,11,0,0,2042,
        2044,5,172,0,0,2043,2042,1,0,0,0,2043,2044,1,0,0,0,2044,2045,1,0,
        0,0,2045,2047,3,220,110,0,2046,2048,5,172,0,0,2047,2046,1,0,0,0,
        2047,2048,1,0,0,0,2048,2049,1,0,0,0,2049,2051,5,3,0,0,2050,2052,
        5,172,0,0,2051,2050,1,0,0,0,2051,2052,1,0,0,0,2052,2053,1,0,0,0,
        2053,2055,3,218,109,0,2054,2056,5,172,0,0,2055,2054,1,0,0,0,2055,
        2056,1,0,0,0,2056,2058,1,0,0,0,2057,2039,1,0,0,0,2057,2058,1,0,0,
        0,2058,2059,1,0,0,0,2059,2060,5,4,0,0,2060,217,1,0,0,0,2061,2063,
        5,9,0,0,2062,2064,5,172,0,0,2063,2062,1,0,0,0,2063,2064,1,0,0,0,
        2064,2066,1,0,0,0,2065,2067,3,176,88,0,2066,2065,1,0,0,0,2066,2067,
        1,0,0,0,2067,2069,1,0,0,0,2068,2070,5,172,0,0,2069,2068,1,0,0,0,
        2069,2070,1,0,0,0,2070,2071,1,0,0,0,2071,2072,5,10,0,0,2072,219,
        1,0,0,0,2073,2075,5,9,0,0,2074,2076,5,172,0,0,2075,2074,1,0,0,0,
        2075,2076,1,0,0,0,2076,2078,1,0,0,0,2077,2079,3,176,88,0,2078,2077,
        1,0,0,0,2078,2079,1,0,0,0,2079,2081,1,0,0,0,2080,2082,5,172,0,0,
        2081,2080,1,0,0,0,2081,2082,1,0,0,0,2082,2083,1,0,0,0,2083,2084,
        5,10,0,0,2084,221,1,0,0,0,2085,2086,5,160,0,0,2086,223,1,0,0,0,2087,
        2088,5,160,0,0,2088,225,1,0,0,0,2089,2090,3,334,167,0,2090,227,1,
        0,0,0,2091,2092,3,334,167,0,2092,229,1,0,0,0,2093,2094,3,232,116,
        0,2094,231,1,0,0,0,2095,2102,3,234,117,0,2096,2097,5,172,0,0,2097,
        2098,5,119,0,0,2098,2099,5,172,0,0,2099,2101,3,234,117,0,2100,2096,
        1,0,0,0,2101,2104,1,0,0,0,2102,2100,1,0,0,0,2102,2103,1,0,0,0,2103,
        233,1,0,0,0,2104,2102,1,0,0,0,2105,2112,3,236,118,0,2106,2107,5,
        172,0,0,2107,2108,5,149,0,0,2108,2109,5,172,0,0,2109,2111,3,236,
        118,0,2110,2106,1,0,0,0,2111,2114,1,0,0,0,2112,2110,1,0,0,0,2112,
        2113,1,0,0,0,2113,235,1,0,0,0,2114,2112,1,0,0,0,2115,2122,3,238,
        119,0,2116,2117,5,172,0,0,2117,2118,5,51,0,0,2118,2119,5,172,0,0,
        2119,2121,3,238,119,0,2120,2116,1,0,0,0,2121,2124,1,0,0,0,2122,2120,
        1,0,0,0,2122,2123,1,0,0,0,2123,237,1,0,0,0,2124,2122,1,0,0,0,2125,
        2127,5,113,0,0,2126,2128,5,172,0,0,2127,2126,1,0,0,0,2127,2128,1,
        0,0,0,2128,2130,1,0,0,0,2129,2125,1,0,0,0,2130,2133,1,0,0,0,2131,
        2129,1,0,0,0,2131,2132,1,0,0,0,2132,2134,1,0,0,0,2133,2131,1,0,0,
        0,2134,2135,3,240,120,0,2135,239,1,0,0,0,2136,2146,3,244,122,0,2137,
        2139,5,172,0,0,2138,2137,1,0,0,0,2138,2139,1,0,0,0,2139,2140,1,0,
        0,0,2140,2142,3,242,121,0,2141,2143,5,172,0,0,2142,2141,1,0,0,0,
        2142,2143,1,0,0,0,2143,2144,1,0,0,0,2144,2145,3,244,122,0,2145,2147,
        1,0,0,0,2146,2138,1,0,0,0,2146,2147,1,0,0,0,2147,2185,1,0,0,0,2148,
        2150,3,244,122,0,2149,2151,5,172,0,0,2150,2149,1,0,0,0,2150,2151,
        1,0,0,0,2151,2152,1,0,0,0,2152,2154,5,154,0,0,2153,2155,5,172,0,
        0,2154,2153,1,0,0,0,2154,2155,1,0,0,0,2155,2156,1,0,0,0,2156,2157,
        3,244,122,0,2157,2158,1,0,0,0,2158,2159,6,120,-1,0,2159,2185,1,0,
        0,0,2160,2162,3,244,122,0,2161,2163,5,172,0,0,2162,2161,1,0,0,0,
        2162,2163,1,0,0,0,2163,2164,1,0,0,0,2164,2166,3,242,121,0,2165,2167,
        5,172,0,0,2166,2165,1,0,0,0,2166,2167,1,0,0,0,2167,2168,1,0,0,0,
        2168,2178,3,244,122,0,2169,2171,5,172,0,0,2170,2169,1,0,0,0,2170,
        2171,1,0,0,0,2171,2172,1,0,0,0,2172,2174,3,242,121,0,2173,2175,5,
        172,0,0,2174,2173,1,0,0,0,2174,2175,1,0,0,0,2175,2176,1,0,0,0,2176,
        2177,3,244,122,0,2177,2179,1,0,0,0,2178,2170,1,0,0,0,2179,2180,1,
        0,0,0,2180,2178,1,0,0,0,2180,2181,1,0,0,0,2181,2182,1,0,0,0,2182,
        2183,6,120,-1,0,2183,2185,1,0,0,0,2184,2136,1,0,0,0,2184,2148,1,
        0,0,0,2184,2160,1,0,0,0,2185,241,1,0,0,0,2186,2187,7,2,0,0,2187,
        243,1,0,0,0,2188,2199,3,246,123,0,2189,2191,5,172,0,0,2190,2189,
        1,0,0,0,2190,2191,1,0,0,0,2191,2192,1,0,0,0,2192,2194,5,11,0,0,2193,
        2195,5,172,0,0,2194,2193,1,0,0,0,2194,2195,1,0,0,0,2195,2196,1,0,
        0,0,2196,2198,3,246,123,0,2197,2190,1,0,0,0,2198,2201,1,0,0,0,2199,
        2197,1,0,0,0,2199,2200,1,0,0,0,2200,245,1,0,0,0,2201,2199,1,0,0,
        0,2202,2213,3,248,124,0,2203,2205,5,172,0,0,2204,2203,1,0,0,0,2204,
        2205,1,0,0,0,2205,2206,1,0,0,0,2206,2208,5,18,0,0,2207,2209,5,172,
        0,0,2208,2207,1,0,0,0,2208,2209,1,0,0,0,2209,2210,1,0,0,0,2210,2212,
        3,248,124,0,2211,2204,1,0,0,0,2212,2215,1,0,0,0,2213,2211,1,0,0,
        0,2213,2214,1,0,0,0,2214,247,1,0,0,0,2215,2213,1,0,0,0,2216,2228,
        3,252,126,0,2217,2219,5,172,0,0,2218,2217,1,0,0,0,2218,2219,1,0,
        0,0,2219,2220,1,0,0,0,2220,2222,3,250,125,0,2221,2223,5,172,0,0,
        2222,2221,1,0,0,0,2222,2223,1,0,0,0,2223,2224,1,0,0,0,2224,2225,
        3,252,126,0,2225,2227,1,0,0,0,2226,2218,1,0,0,0,2227,2230,1,0,0,
        0,2228,2226,1,0,0,0,2228,2229,1,0,0,0,2229,249,1,0,0,0,2230,2228,
        1,0,0,0,2231,2232,7,3,0,0,2232,251,1,0,0,0,2233,2245,3,256,128,0,
        2234,2236,5,172,0,0,2235,2234,1,0,0,0,2235,2236,1,0,0,0,2236,2237,
        1,0,0,0,2237,2239,3,254,127,0,2238,2240,5,172,0,0,2239,2238,1,0,
        0,0,2239,2240,1,0,0,0,2240,2241,1,0,0,0,2241,2242,3,256,128,0,2242,
        2244,1,0,0,0,2243,2235,1,0,0,0,2244,2247,1,0,0,0,2245,2243,1,0,0,
        0,2245,2246,1,0,0,0,2246,253,1,0,0,0,2247,2245,1,0,0,0,2248,2249,
        7,4,0,0,2249,255,1,0,0,0,2250,2262,3,260,130,0,2251,2253,5,172,0,
        0,2252,2251,1,0,0,0,2252,2253,1,0,0,0,2253,2254,1,0,0,0,2254,2256,
        3,258,129,0,2255,2257,5,172,0,0,2256,2255,1,0,0,0,2256,2257,1,0,
        0,0,2257,2258,1,0,0,0,2258,2259,3,260,130,0,2259,2261,1,0,0,0,2260,
        2252,1,0,0,0,2261,2264,1,0,0,0,2262,2260,1,0,0,0,2262,2263,1,0,0,
        0,2263,257,1,0,0,0,2264,2262,1,0,0,0,2265,2266,7,5,0,0,2266,259,
        1,0,0,0,2267,2278,3,262,131,0,2268,2270,5,172,0,0,2269,2268,1,0,
        0,0,2269,2270,1,0,0,0,2270,2271,1,0,0,0,2271,2273,5,24,0,0,2272,
        2274,5,172,0,0,2273,2272,1,0,0,0,2273,2274,1,0,0,0,2274,2275,1,0,
        0,0,2275,2277,3,262,131,0,2276,2269,1,0,0,0,2277,2280,1,0,0,0,2278,
        2276,1,0,0,0,2278,2279,1,0,0,0,2279,261,1,0,0,0,2280,2278,1,0,0,
        0,2281,2283,5,155,0,0,2282,2284,5,172,0,0,2283,2282,1,0,0,0,2283,
        2284,1,0,0,0,2284,2286,1,0,0,0,2285,2281,1,0,0,0,2286,2289,1,0,0,
        0,2287,2285,1,0,0,0,2287,2288,1,0,0,0,2288,2290,1,0,0,0,2289,2287,
        1,0,0,0,2290,2295,3,264,132,0,2291,2293,5,172,0,0,2292,2291,1,0,
        0,0,2292,2293,1,0,0,0,2293,2294,1,0,0,0,2294,2296,5,156,0,0,2295,
        2292,1,0,0,0,2295,2296,1,0,0,0,2296,263,1,0,0,0,2297,2305,3,274,
        137,0,2298,2306,3,268,134,0,2299,2301,3,266,133,0,2300,2299,1,0,
        0,0,2301,2302,1,0,0,0,2302,2300,1,0,0,0,2302,2303,1,0,0,0,2303,2306,
        1,0,0,0,2304,2306,3,272,136,0,2305,2298,1,0,0,0,2305,2300,1,0,0,
        0,2305,2304,1,0,0,0,2305,2306,1,0,0,0,2306,265,1,0,0,0,2307,2308,
        5,172,0,0,2308,2310,5,96,0,0,2309,2311,5,172,0,0,2310,2309,1,0,0,
        0,2310,2311,1,0,0,0,2311,2312,1,0,0,0,2312,2327,3,274,137,0,2313,
        2314,5,7,0,0,2314,2315,3,230,115,0,2315,2316,5,8,0,0,2316,2327,1,
        0,0,0,2317,2319,5,7,0,0,2318,2320,3,230,115,0,2319,2318,1,0,0,0,
        2319,2320,1,0,0,0,2320,2321,1,0,0,0,2321,2323,5,157,0,0,2322,2324,
        3,230,115,0,2323,2322,1,0,0,0,2323,2324,1,0,0,0,2324,2325,1,0,0,
        0,2325,2327,5,8,0,0,2326,2307,1,0,0,0,2326,2313,1,0,0,0,2326,2317,
        1,0,0,0,2327,267,1,0,0,0,2328,2340,3,270,135,0,2329,2330,5,172,0,
        0,2330,2331,5,134,0,0,2331,2332,5,172,0,0,2332,2340,5,147,0,0,2333,
        2334,5,172,0,0,2334,2335,5,82,0,0,2335,2336,5,172,0,0,2336,2340,
        5,147,0,0,2337,2338,5,172,0,0,2338,2340,5,66,0,0,2339,2328,1,0,0,
        0,2339,2329,1,0,0,0,2339,2333,1,0,0,0,2339,2337,1,0,0,0,2340,2342,
        1,0,0,0,2341,2343,5,172,0,0,2342,2341,1,0,0,0,2342,2343,1,0,0,0,
        2343,2344,1,0,0,0,2344,2345,3,274,137,0,2345,269,1,0,0,0,2346,2348,
        5,172,0,0,2347,2346,1,0,0,0,2347,2348,1,0,0,0,2348,2349,1,0,0,0,
        2349,2350,5,25,0,0,2350,271,1,0,0,0,2351,2352,5,172,0,0,2352,2353,
        5,99,0,0,2353,2354,5,172,0,0,2354,2362,5,115,0,0,2355,2356,5,172,
        0,0,2356,2357,5,99,0,0,2357,2358,5,172,0,0,2358,2359,5,113,0,0,2359,
        2360,5,172,0,0,2360,2362,5,115,0,0,2361,2351,1,0,0,0,2361,2355,1,
        0,0,0,2362,273,1,0,0,0,2363,2370,3,276,138,0,2364,2366,5,172,0,0,
        2365,2364,1,0,0,0,2365,2366,1,0,0,0,2366,2367,1,0,0,0,2367,2369,
        3,314,157,0,2368,2365,1,0,0,0,2369,2372,1,0,0,0,2370,2368,1,0,0,
        0,2370,2371,1,0,0,0,2371,275,1,0,0,0,2372,2370,1,0,0,0,2373,2384,
        3,284,142,0,2374,2384,3,324,162,0,2375,2384,3,316,158,0,2376,2384,
        3,296,148,0,2377,2384,3,298,149,0,2378,2384,3,308,154,0,2379,2384,
        3,310,155,0,2380,2384,3,312,156,0,2381,2384,3,320,160,0,2382,2384,
        3,278,139,0,2383,2373,1,0,0,0,2383,2374,1,0,0,0,2383,2375,1,0,0,
        0,2383,2376,1,0,0,0,2383,2377,1,0,0,0,2383,2378,1,0,0,0,2383,2379,
        1,0,0,0,2383,2380,1,0,0,0,2383,2381,1,0,0,0,2383,2382,1,0,0,0,2384,
        277,1,0,0,0,2385,2387,5,49,0,0,2386,2388,5,172,0,0,2387,2386,1,0,
        0,0,2387,2388,1,0,0,0,2388,2389,1,0,0,0,2389,2391,5,2,0,0,2390,2392,
        5,172,0,0,2391,2390,1,0,0,0,2391,2392,1,0,0,0,2392,2393,1,0,0,0,
        2393,2395,3,280,140,0,2394,2396,5,172,0,0,2395,2394,1,0,0,0,2395,
        2396,1,0,0,0,2396,2397,1,0,0,0,2397,2398,5,4,0,0,2398,2442,1,0,0,
        0,2399,2401,5,47,0,0,2400,2402,5,172,0,0,2401,2400,1,0,0,0,2401,
        2402,1,0,0,0,2402,2403,1,0,0,0,2403,2405,5,2,0,0,2404,2406,5,172,
        0,0,2405,2404,1,0,0,0,2405,2406,1,0,0,0,2406,2407,1,0,0,0,2407,2409,
        3,280,140,0,2408,2410,5,172,0,0,2409,2408,1,0,0,0,2409,2410,1,0,
        0,0,2410,2411,1,0,0,0,2411,2412,5,4,0,0,2412,2442,1,0,0,0,2413,2415,
        5,114,0,0,2414,2416,5,172,0,0,2415,2414,1,0,0,0,2415,2416,1,0,0,
        0,2416,2417,1,0,0,0,2417,2419,5,2,0,0,2418,2420,5,172,0,0,2419,2418,
        1,0,0,0,2419,2420,1,0,0,0,2420,2421,1,0,0,0,2421,2423,3,280,140,
        0,2422,2424,5,172,0,0,2423,2422,1,0,0,0,2423,2424,1,0,0,0,2424,2425,
        1,0,0,0,2425,2426,5,4,0,0,2426,2442,1,0,0,0,2427,2429,5,150,0,0,
        2428,2430,5,172,0,0,2429,2428,1,0,0,0,2429,2430,1,0,0,0,2430,2431,
        1,0,0,0,2431,2433,5,2,0,0,2432,2434,5,172,0,0,2433,2432,1,0,0,0,
        2433,2434,1,0,0,0,2434,2435,1,0,0,0,2435,2437,3,280,140,0,2436,2438,
        5,172,0,0,2437,2436,1,0,0,0,2437,2438,1,0,0,0,2438,2439,1,0,0,0,
        2439,2440,5,4,0,0,2440,2442,1,0,0,0,2441,2385,1,0,0,0,2441,2399,
        1,0,0,0,2441,2413,1,0,0,0,2441,2427,1,0,0,0,2442,279,1,0,0,0,2443,
        2448,3,282,141,0,2444,2446,5,172,0,0,2445,2444,1,0,0,0,2445,2446,
        1,0,0,0,2446,2447,1,0,0,0,2447,2449,3,188,94,0,2448,2445,1,0,0,0,
        2448,2449,1,0,0,0,2449,281,1,0,0,0,2450,2451,3,320,160,0,2451,2452,
        5,172,0,0,2452,2453,5,96,0,0,2453,2454,5,172,0,0,2454,2455,3,230,
        115,0,2455,283,1,0,0,0,2456,2463,3,322,161,0,2457,2463,5,158,0,0,
        2458,2463,3,286,143,0,2459,2463,5,115,0,0,2460,2463,3,288,144,0,
        2461,2463,3,292,146,0,2462,2456,1,0,0,0,2462,2457,1,0,0,0,2462,2458,
        1,0,0,0,2462,2459,1,0,0,0,2462,2460,1,0,0,0,2462,2461,1,0,0,0,2463,
        285,1,0,0,0,2464,2465,7,6,0,0,2465,287,1,0,0,0,2466,2468,5,7,0,0,
        2467,2469,5,172,0,0,2468,2467,1,0,0,0,2468,2469,1,0,0,0,2469,2483,
        1,0,0,0,2470,2472,3,230,115,0,2471,2473,5,172,0,0,2472,2471,1,0,
        0,0,2472,2473,1,0,0,0,2473,2480,1,0,0,0,2474,2476,3,290,145,0,2475,
        2477,5,172,0,0,2476,2475,1,0,0,0,2476,2477,1,0,0,0,2477,2479,1,0,
        0,0,2478,2474,1,0,0,0,2479,2482,1,0,0,0,2480,2478,1,0,0,0,2480,2481,
        1,0,0,0,2481,2484,1,0,0,0,2482,2480,1,0,0,0,2483,2470,1,0,0,0,2483,
        2484,1,0,0,0,2484,2485,1,0,0,0,2485,2486,5,8,0,0,2486,289,1,0,0,
        0,2487,2489,5,3,0,0,2488,2490,5,172,0,0,2489,2488,1,0,0,0,2489,2490,
        1,0,0,0,2490,2492,1,0,0,0,2491,2493,3,230,115,0,2492,2491,1,0,0,
        0,2492,2493,1,0,0,0,2493,291,1,0,0,0,2494,2496,5,9,0,0,2495,2497,
        5,172,0,0,2496,2495,1,0,0,0,2496,2497,1,0,0,0,2497,2498,1,0,0,0,
        2498,2500,3,294,147,0,2499,2501,5,172,0,0,2500,2499,1,0,0,0,2500,
        2501,1,0,0,0,2501,2512,1,0,0,0,2502,2504,5,3,0,0,2503,2505,5,172,
        0,0,2504,2503,1,0,0,0,2504,2505,1,0,0,0,2505,2506,1,0,0,0,2506,2508,
        3,294,147,0,2507,2509,5,172,0,0,2508,2507,1,0,0,0,2508,2509,1,0,
        0,0,2509,2511,1,0,0,0,2510,2502,1,0,0,0,2511,2514,1,0,0,0,2512,2510,
        1,0,0,0,2512,2513,1,0,0,0,2513,2515,1,0,0,0,2514,2512,1,0,0,0,2515,
        2516,5,10,0,0,2516,293,1,0,0,0,2517,2520,3,336,168,0,2518,2520,5,
        158,0,0,2519,2517,1,0,0,0,2519,2518,1,0,0,0,2520,2522,1,0,0,0,2521,
        2523,5,172,0,0,2522,2521,1,0,0,0,2522,2523,1,0,0,0,2523,2524,1,0,
        0,0,2524,2526,5,157,0,0,2525,2527,5,172,0,0,2526,2525,1,0,0,0,2526,
        2527,1,0,0,0,2527,2528,1,0,0,0,2528,2529,3,230,115,0,2529,295,1,
        0,0,0,2530,2532,5,2,0,0,2531,2533,5,172,0,0,2532,2531,1,0,0,0,2532,
        2533,1,0,0,0,2533,2534,1,0,0,0,2534,2536,3,230,115,0,2535,2537,5,
        172,0,0,2536,2535,1,0,0,0,2536,2537,1,0,0,0,2537,2538,1,0,0,0,2538,
        2539,5,4,0,0,2539,297,1,0,0,0,2540,2542,5,68,0,0,2541,2543,5,172,
        0,0,2542,2541,1,0,0,0,2542,2543,1,0,0,0,2543,2544,1,0,0,0,2544,2546,
        5,2,0,0,2545,2547,5,172,0,0,2546,2545,1,0,0,0,2546,2547,1,0,0,0,
        2547,2548,1,0,0,0,2548,2550,5,152,0,0,2549,2551,5,172,0,0,2550,2549,
        1,0,0,0,2550,2551,1,0,0,0,2551,2552,1,0,0,0,2552,2618,5,4,0,0,2553,
        2555,5,60,0,0,2554,2556,5,172,0,0,2555,2554,1,0,0,0,2555,2556,1,
        0,0,0,2556,2557,1,0,0,0,2557,2559,5,2,0,0,2558,2560,5,172,0,0,2559,
        2558,1,0,0,0,2559,2560,1,0,0,0,2560,2561,1,0,0,0,2561,2563,3,302,
        151,0,2562,2564,5,172,0,0,2563,2562,1,0,0,0,2563,2564,1,0,0,0,2564,
        2575,1,0,0,0,2565,2567,5,52,0,0,2566,2568,5,172,0,0,2567,2566,1,
        0,0,0,2567,2568,1,0,0,0,2568,2569,1,0,0,0,2569,2576,3,98,49,0,2570,
        2572,5,3,0,0,2571,2573,5,172,0,0,2572,2571,1,0,0,0,2572,2573,1,0,
        0,0,2573,2574,1,0,0,0,2574,2576,3,302,151,0,2575,2565,1,0,0,0,2575,
        2570,1,0,0,0,2576,2578,1,0,0,0,2577,2579,5,172,0,0,2578,2577,1,0,
        0,0,2578,2579,1,0,0,0,2579,2580,1,0,0,0,2580,2581,5,4,0,0,2581,2618,
        1,0,0,0,2582,2584,3,300,150,0,2583,2585,5,172,0,0,2584,2583,1,0,
        0,0,2584,2585,1,0,0,0,2585,2586,1,0,0,0,2586,2588,5,2,0,0,2587,2589,
        5,172,0,0,2588,2587,1,0,0,0,2588,2589,1,0,0,0,2589,2594,1,0,0,0,
        2590,2592,5,78,0,0,2591,2593,5,172,0,0,2592,2591,1,0,0,0,2592,2593,
        1,0,0,0,2593,2595,1,0,0,0,2594,2590,1,0,0,0,2594,2595,1,0,0,0,2595,
        2613,1,0,0,0,2596,2598,3,302,151,0,2597,2599,5,172,0,0,2598,2597,
        1,0,0,0,2598,2599,1,0,0,0,2599,2610,1,0,0,0,2600,2602,5,3,0,0,2601,
        2603,5,172,0,0,2602,2601,1,0,0,0,2602,2603,1,0,0,0,2603,2604,1,0,
        0,0,2604,2606,3,302,151,0,2605,2607,5,172,0,0,2606,2605,1,0,0,0,
        2606,2607,1,0,0,0,2607,2609,1,0,0,0,2608,2600,1,0,0,0,2609,2612,
        1,0,0,0,2610,2608,1,0,0,0,2610,2611,1,0,0,0,2611,2614,1,0,0,0,2612,
        2610,1,0,0,0,2613,2596,1,0,0,0,2613,2614,1,0,0,0,2614,2615,1,0,0,
        0,2615,2616,5,4,0,0,2616,2618,1,0,0,0,2617,2540,1,0,0,0,2617,2553,
        1,0,0,0,2617,2582,1,0,0,0,2618,299,1,0,0,0,2619,2620,3,336,168,0,
        2620,301,1,0,0,0,2621,2623,3,336,168,0,2622,2624,5,172,0,0,2623,
        2622,1,0,0,0,2623,2624,1,0,0,0,2624,2625,1,0,0,0,2625,2626,5,157,
        0,0,2626,2628,5,6,0,0,2627,2629,5,172,0,0,2628,2627,1,0,0,0,2628,
        2629,1,0,0,0,2629,2631,1,0,0,0,2630,2621,1,0,0,0,2630,2631,1,0,0,
        0,2631,2632,1,0,0,0,2632,2635,3,230,115,0,2633,2635,3,304,152,0,
        2634,2630,1,0,0,0,2634,2633,1,0,0,0,2635,303,1,0,0,0,2636,2638,3,
        306,153,0,2637,2639,5,172,0,0,2638,2637,1,0,0,0,2638,2639,1,0,0,
        0,2639,2640,1,0,0,0,2640,2641,5,155,0,0,2641,2643,5,16,0,0,2642,
        2644,5,172,0,0,2643,2642,1,0,0,0,2643,2644,1,0,0,0,2644,2645,1,0,
        0,0,2645,2647,3,230,115,0,2646,2648,5,172,0,0,2647,2646,1,0,0,0,
        2647,2648,1,0,0,0,2648,305,1,0,0,0,2649,2674,3,336,168,0,2650,2652,
        5,2,0,0,2651,2653,5,172,0,0,2652,2651,1,0,0,0,2652,2653,1,0,0,0,
        2653,2654,1,0,0,0,2654,2656,3,336,168,0,2655,2657,5,172,0,0,2656,
        2655,1,0,0,0,2656,2657,1,0,0,0,2657,2668,1,0,0,0,2658,2660,5,3,0,
        0,2659,2661,5,172,0,0,2660,2659,1,0,0,0,2660,2661,1,0,0,0,2661,2662,
        1,0,0,0,2662,2664,3,336,168,0,2663,2665,5,172,0,0,2664,2663,1,0,
        0,0,2664,2665,1,0,0,0,2665,2667,1,0,0,0,2666,2658,1,0,0,0,2667,2670,
        1,0,0,0,2668,2666,1,0,0,0,2668,2669,1,0,0,0,2669,2671,1,0,0,0,2670,
        2668,1,0,0,0,2671,2672,5,4,0,0,2672,2674,1,0,0,0,2673,2649,1,0,0,
        0,2673,2650,1,0,0,0,2674,307,1,0,0,0,2675,2680,3,198,99,0,2676,2678,
        5,172,0,0,2677,2676,1,0,0,0,2677,2678,1,0,0,0,2678,2679,1,0,0,0,
        2679,2681,3,200,100,0,2680,2677,1,0,0,0,2681,2682,1,0,0,0,2682,2680,
        1,0,0,0,2682,2683,1,0,0,0,2683,309,1,0,0,0,2684,2686,5,83,0,0,2685,
        2687,5,172,0,0,2686,2685,1,0,0,0,2686,2687,1,0,0,0,2687,2688,1,0,
        0,0,2688,2690,5,9,0,0,2689,2691,5,172,0,0,2690,2689,1,0,0,0,2690,
        2691,1,0,0,0,2691,2692,1,0,0,0,2692,2694,5,106,0,0,2693,2695,5,172,
        0,0,2694,2693,1,0,0,0,2694,2695,1,0,0,0,2695,2696,1,0,0,0,2696,2701,
        3,190,95,0,2697,2699,5,172,0,0,2698,2697,1,0,0,0,2698,2699,1,0,0,
        0,2699,2700,1,0,0,0,2700,2702,3,188,94,0,2701,2698,1,0,0,0,2701,
        2702,1,0,0,0,2702,2704,1,0,0,0,2703,2705,5,172,0,0,2704,2703,1,0,
        0,0,2704,2705,1,0,0,0,2705,2706,1,0,0,0,2706,2707,5,10,0,0,2707,
        311,1,0,0,0,2708,2710,5,68,0,0,2709,2711,5,172,0,0,2710,2709,1,0,
        0,0,2710,2711,1,0,0,0,2711,2712,1,0,0,0,2712,2714,5,9,0,0,2713,2715,
        5,172,0,0,2714,2713,1,0,0,0,2714,2715,1,0,0,0,2715,2716,1,0,0,0,
        2716,2718,5,106,0,0,2717,2719,5,172,0,0,2718,2717,1,0,0,0,2718,2719,
        1,0,0,0,2719,2720,1,0,0,0,2720,2725,3,190,95,0,2721,2723,5,172,0,
        0,2722,2721,1,0,0,0,2722,2723,1,0,0,0,2723,2724,1,0,0,0,2724,2726,
        3,188,94,0,2725,2722,1,0,0,0,2725,2726,1,0,0,0,2726,2728,1,0,0,0,
        2727,2729,5,172,0,0,2728,2727,1,0,0,0,2728,2729,1,0,0,0,2729,2730,
        1,0,0,0,2730,2731,5,10,0,0,2731,313,1,0,0,0,2732,2734,5,5,0,0,2733,
        2735,5,172,0,0,2734,2733,1,0,0,0,2734,2735,1,0,0,0,2735,2738,1,0,
        0,0,2736,2739,3,328,164,0,2737,2739,5,152,0,0,2738,2736,1,0,0,0,
        2738,2737,1,0,0,0,2739,315,1,0,0,0,2740,2745,5,59,0,0,2741,2743,
        5,172,0,0,2742,2741,1,0,0,0,2742,2743,1,0,0,0,2743,2744,1,0,0,0,
        2744,2746,3,318,159,0,2745,2742,1,0,0,0,2746,2747,1,0,0,0,2747,2745,
        1,0,0,0,2747,2748,1,0,0,0,2748,2763,1,0,0,0,2749,2751,5,59,0,0,2750,
        2752,5,172,0,0,2751,2750,1,0,0,0,2751,2752,1,0,0,0,2752,2753,1,0,
        0,0,2753,2758,3,230,115,0,2754,2756,5,172,0,0,2755,2754,1,0,0,0,
        2755,2756,1,0,0,0,2756,2757,1,0,0,0,2757,2759,3,318,159,0,2758,2755,
        1,0,0,0,2759,2760,1,0,0,0,2760,2758,1,0,0,0,2760,2761,1,0,0,0,2761,
        2763,1,0,0,0,2762,2740,1,0,0,0,2762,2749,1,0,0,0,2763,2772,1,0,0,
        0,2764,2766,5,172,0,0,2765,2764,1,0,0,0,2765,2766,1,0,0,0,2766,2767,
        1,0,0,0,2767,2769,5,80,0,0,2768,2770,5,172,0,0,2769,2768,1,0,0,0,
        2769,2770,1,0,0,0,2770,2771,1,0,0,0,2771,2773,3,230,115,0,2772,2765,
        1,0,0,0,2772,2773,1,0,0,0,2773,2775,1,0,0,0,2774,2776,5,172,0,0,
        2775,2774,1,0,0,0,2775,2776,1,0,0,0,2776,2777,1,0,0,0,2777,2778,
        5,81,0,0,2778,317,1,0,0,0,2779,2781,5,145,0,0,2780,2782,5,172,0,
        0,2781,2780,1,0,0,0,2781,2782,1,0,0,0,2782,2783,1,0,0,0,2783,2785,
        3,230,115,0,2784,2786,5,172,0,0,2785,2784,1,0,0,0,2785,2786,1,0,
        0,0,2786,2787,1,0,0,0,2787,2789,5,136,0,0,2788,2790,5,172,0,0,2789,
        2788,1,0,0,0,2789,2790,1,0,0,0,2790,2791,1,0,0,0,2791,2792,3,230,
        115,0,2792,319,1,0,0,0,2793,2794,3,336,168,0,2794,321,1,0,0,0,2795,
        2798,3,332,166,0,2796,2798,3,330,165,0,2797,2795,1,0,0,0,2797,2796,
        1,0,0,0,2798,323,1,0,0,0,2799,2802,5,26,0,0,2800,2803,3,336,168,
        0,2801,2803,5,160,0,0,2802,2800,1,0,0,0,2802,2801,1,0,0,0,2803,325,
        1,0,0,0,2804,2806,3,276,138,0,2805,2807,5,172,0,0,2806,2805,1,0,
        0,0,2806,2807,1,0,0,0,2807,2808,1,0,0,0,2808,2809,3,314,157,0,2809,
        327,1,0,0,0,2810,2811,3,334,167,0,2811,329,1,0,0,0,2812,2813,5,160,
        0,0,2813,331,1,0,0,0,2814,2815,5,167,0,0,2815,333,1,0,0,0,2816,2817,
        3,336,168,0,2817,335,1,0,0,0,2818,2824,5,168,0,0,2819,2820,5,171,
        0,0,2820,2824,6,168,-1,0,2821,2824,5,161,0,0,2822,2824,3,338,169,
        0,2823,2818,1,0,0,0,2823,2819,1,0,0,0,2823,2821,1,0,0,0,2823,2822,
        1,0,0,0,2824,337,1,0,0,0,2825,2826,7,7,0,0,2826,339,1,0,0,0,2827,
        2828,7,8,0,0,2828,341,1,0,0,0,2829,2830,7,9,0,0,2830,343,1,0,0,0,
        2831,2832,7,10,0,0,2832,345,1,0,0,0,491,348,352,357,361,366,369,
        373,376,399,405,409,412,418,421,425,429,433,438,442,449,453,461,
        465,475,479,483,488,501,505,513,516,524,527,542,547,553,557,560,
        563,569,573,578,581,586,590,594,599,614,618,625,645,649,652,655,
        658,661,665,670,674,684,688,693,698,703,709,713,717,722,729,733,
        737,740,744,748,767,771,775,779,783,786,789,802,806,810,814,818,
        822,824,828,832,834,849,853,857,861,865,870,873,877,881,883,887,
        891,893,912,919,932,939,945,948,958,961,969,972,978,981,987,1002,
        1018,1027,1053,1057,1062,1071,1075,1080,1086,1092,1098,1102,1106,
        1114,1118,1122,1128,1132,1136,1142,1146,1150,1154,1158,1164,1168,
        1172,1176,1180,1184,1190,1197,1202,1208,1213,1230,1234,1242,1250,
        1252,1262,1266,1270,1276,1280,1285,1290,1295,1300,1304,1309,1315,
        1320,1323,1327,1331,1335,1341,1345,1350,1355,1359,1362,1364,1368,
        1372,1378,1382,1387,1391,1400,1406,1414,1418,1422,1426,1433,1436,
        1439,1442,1446,1448,1454,1457,1461,1465,1469,1473,1477,1481,1486,
        1492,1496,1500,1504,1509,1513,1522,1526,1531,1545,1547,1549,1554,
        1564,1570,1577,1590,1594,1598,1602,1607,1612,1616,1622,1626,1630,
        1634,1639,1645,1648,1654,1657,1663,1667,1671,1675,1679,1684,1689,
        1693,1698,1701,1710,1719,1724,1737,1740,1748,1752,1757,1762,1766,
        1771,1777,1782,1789,1793,1797,1799,1803,1805,1809,1811,1817,1823,
        1827,1830,1833,1839,1842,1845,1849,1855,1858,1861,1865,1869,1873,
        1875,1879,1881,1885,1887,1891,1893,1899,1903,1907,1911,1915,1919,
        1923,1927,1931,1934,1940,1944,1948,1951,1956,1961,1966,1971,1977,
        1985,1988,1991,1994,1998,2001,2004,2007,2010,2014,2018,2022,2026,
        2030,2034,2036,2039,2043,2047,2051,2055,2057,2063,2066,2069,2075,
        2078,2081,2102,2112,2122,2127,2131,2138,2142,2146,2150,2154,2162,
        2166,2170,2174,2180,2184,2190,2194,2199,2204,2208,2213,2218,2222,
        2228,2235,2239,2245,2252,2256,2262,2269,2273,2278,2283,2287,2292,
        2295,2302,2305,2310,2319,2323,2326,2339,2342,2347,2361,2365,2370,
        2383,2387,2391,2395,2401,2405,2409,2415,2419,2423,2429,2433,2437,
        2441,2445,2448,2462,2468,2472,2476,2480,2483,2489,2492,2496,2500,
        2504,2508,2512,2519,2522,2526,2532,2536,2542,2546,2550,2555,2559,
        2563,2567,2572,2575,2578,2584,2588,2592,2594,2598,2602,2606,2610,
        2613,2617,2623,2628,2630,2634,2638,2643,2647,2652,2656,2660,2664,
        2668,2673,2677,2682,2686,2690,2694,2698,2701,2704,2710,2714,2718,
        2722,2725,2728,2734,2738,2742,2747,2751,2755,2760,2762,2765,2769,
        2772,2775,2781,2785,2789,2797,2802,2806,2823
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

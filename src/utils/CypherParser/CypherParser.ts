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
    public static readonly CHECKPOINT = 59;
    public static readonly COLUMN = 60;
    public static readonly COMMENT = 61;
    public static readonly COMMIT = 62;
    public static readonly COMMIT_SKIP_CHECKPOINT = 63;
    public static readonly CONTAINS = 64;
    public static readonly COPY = 65;
    public static readonly COUNT = 66;
    public static readonly CREATE = 67;
    public static readonly CYCLE = 68;
    public static readonly DATABASE = 69;
    public static readonly DBTYPE = 70;
    public static readonly DEFAULT = 71;
    public static readonly DELETE = 72;
    public static readonly DESC = 73;
    public static readonly DESCENDING = 74;
    public static readonly DETACH = 75;
    public static readonly DISTINCT = 76;
    public static readonly DROP = 77;
    public static readonly ELSE = 78;
    public static readonly END = 79;
    public static readonly ENDS = 80;
    public static readonly EXISTS = 81;
    public static readonly EXPLAIN = 82;
    public static readonly EXPORT = 83;
    public static readonly EXTENSION = 84;
    public static readonly FALSE = 85;
    public static readonly FROM = 86;
    public static readonly GLOB = 87;
    public static readonly GRAPH = 88;
    public static readonly GROUP = 89;
    public static readonly HEADERS = 90;
    public static readonly HINT = 91;
    public static readonly IMPORT = 92;
    public static readonly IF = 93;
    public static readonly IN = 94;
    public static readonly INCREMENT = 95;
    public static readonly INSTALL = 96;
    public static readonly IS = 97;
    public static readonly JOIN = 98;
    public static readonly KEY = 99;
    public static readonly LIMIT = 100;
    public static readonly LOAD = 101;
    public static readonly MACRO = 102;
    public static readonly MATCH = 103;
    public static readonly MAXVALUE = 104;
    public static readonly MERGE = 105;
    public static readonly MINVALUE = 106;
    public static readonly MULTI_JOIN = 107;
    public static readonly NO = 108;
    public static readonly NODE = 109;
    public static readonly NOT = 110;
    public static readonly NULL = 111;
    public static readonly ON = 112;
    public static readonly ONLY = 113;
    public static readonly OPTIONAL = 114;
    public static readonly OR = 115;
    public static readonly ORDER = 116;
    public static readonly PRIMARY = 117;
    public static readonly PROFILE = 118;
    public static readonly PROJECT = 119;
    public static readonly RDFGRAPH = 120;
    public static readonly READ = 121;
    public static readonly REL = 122;
    public static readonly RENAME = 123;
    public static readonly RETURN = 124;
    public static readonly ROLLBACK = 125;
    public static readonly ROLLBACK_SKIP_CHECKPOINT = 126;
    public static readonly SEQUENCE = 127;
    public static readonly SET = 128;
    public static readonly SHORTEST = 129;
    public static readonly START = 130;
    public static readonly STARTS = 131;
    public static readonly TABLE = 132;
    public static readonly THEN = 133;
    public static readonly TO = 134;
    public static readonly TRANSACTION = 135;
    public static readonly TRUE = 136;
    public static readonly TYPE = 137;
    public static readonly UNION = 138;
    public static readonly UNWIND = 139;
    public static readonly USE = 140;
    public static readonly WHEN = 141;
    public static readonly WHERE = 142;
    public static readonly WITH = 143;
    public static readonly WRITE = 144;
    public static readonly XOR = 145;
    public static readonly DECIMAL = 146;
    public static readonly STAR = 147;
    public static readonly L_SKIP = 148;
    public static readonly INVALID_NOT_EQUAL = 149;
    public static readonly MINUS = 150;
    public static readonly FACTORIAL = 151;
    public static readonly COLON = 152;
    public static readonly StringLiteral = 153;
    public static readonly EscapedChar = 154;
    public static readonly DecimalInteger = 155;
    public static readonly HexLetter = 156;
    public static readonly HexDigit = 157;
    public static readonly Digit = 158;
    public static readonly NonZeroDigit = 159;
    public static readonly NonZeroOctDigit = 160;
    public static readonly ZeroDigit = 161;
    public static readonly RegularDecimalReal = 162;
    public static readonly UnescapedSymbolicName = 163;
    public static readonly IdentifierStart = 164;
    public static readonly IdentifierPart = 165;
    public static readonly EscapedSymbolicName = 166;
    public static readonly SP = 167;
    public static readonly WHITESPACE = 168;
    public static readonly CypherComment = 169;
    public static readonly Unknown = 170;
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
    public static readonly RULE_kU_IfExists = 36;
    public static readonly RULE_kU_Drop = 37;
    public static readonly RULE_kU_AlterTable = 38;
    public static readonly RULE_kU_AlterOptions = 39;
    public static readonly RULE_kU_AddProperty = 40;
    public static readonly RULE_kU_Default = 41;
    public static readonly RULE_kU_DropProperty = 42;
    public static readonly RULE_kU_RenameTable = 43;
    public static readonly RULE_kU_RenameProperty = 44;
    public static readonly RULE_kU_PropertyDefinitions = 45;
    public static readonly RULE_kU_PropertyDefinition = 46;
    public static readonly RULE_kU_PropertyDefinitionsDDL = 47;
    public static readonly RULE_kU_PropertyDefinitionDDL = 48;
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
    public static readonly RULE_oC_Query = 60;
    public static readonly RULE_kU_ProjectGraph = 61;
    public static readonly RULE_kU_GraphProjectionTableItems = 62;
    public static readonly RULE_oC_RegularQuery = 63;
    public static readonly RULE_oC_Union = 64;
    public static readonly RULE_oC_SingleQuery = 65;
    public static readonly RULE_oC_SinglePartQuery = 66;
    public static readonly RULE_oC_MultiPartQuery = 67;
    public static readonly RULE_kU_QueryPart = 68;
    public static readonly RULE_oC_UpdatingClause = 69;
    public static readonly RULE_oC_ReadingClause = 70;
    public static readonly RULE_kU_LoadFrom = 71;
    public static readonly RULE_kU_InQueryCall = 72;
    public static readonly RULE_kU_GraphProjectionTableItem = 73;
    public static readonly RULE_kU_GraphProjectionColumnItems = 74;
    public static readonly RULE_kU_GraphProjectionColumnItem = 75;
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
    public static readonly RULE_oC_RangeLiteral = 108;
    public static readonly RULE_kU_RecursiveRelationshipComprehension = 109;
    public static readonly RULE_kU_IntermediateNodeProjectionItems = 110;
    public static readonly RULE_kU_IntermediateRelProjectionItems = 111;
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
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 132;
    public static readonly RULE_oC_StringListNullOperatorExpression = 133;
    public static readonly RULE_oC_ListOperatorExpression = 134;
    public static readonly RULE_oC_StringOperatorExpression = 135;
    public static readonly RULE_oC_RegularExpression = 136;
    public static readonly RULE_oC_NullOperatorExpression = 137;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 138;
    public static readonly RULE_oC_Atom = 139;
    public static readonly RULE_oC_Literal = 140;
    public static readonly RULE_oC_BooleanLiteral = 141;
    public static readonly RULE_oC_ListLiteral = 142;
    public static readonly RULE_kU_ListEntry = 143;
    public static readonly RULE_kU_StructLiteral = 144;
    public static readonly RULE_kU_StructField = 145;
    public static readonly RULE_oC_ParenthesizedExpression = 146;
    public static readonly RULE_oC_FunctionInvocation = 147;
    public static readonly RULE_oC_FunctionName = 148;
    public static readonly RULE_kU_FunctionParameter = 149;
    public static readonly RULE_kU_LambdaParameter = 150;
    public static readonly RULE_kU_LambdaVars = 151;
    public static readonly RULE_oC_PathPatterns = 152;
    public static readonly RULE_oC_ExistSubquery = 153;
    public static readonly RULE_kU_CountSubquery = 154;
    public static readonly RULE_oC_PropertyLookup = 155;
    public static readonly RULE_oC_CaseExpression = 156;
    public static readonly RULE_oC_CaseAlternative = 157;
    public static readonly RULE_oC_Variable = 158;
    public static readonly RULE_oC_NumberLiteral = 159;
    public static readonly RULE_oC_Parameter = 160;
    public static readonly RULE_oC_PropertyExpression = 161;
    public static readonly RULE_oC_PropertyKeyName = 162;
    public static readonly RULE_oC_IntegerLiteral = 163;
    public static readonly RULE_oC_DoubleLiteral = 164;
    public static readonly RULE_oC_SchemaName = 165;
    public static readonly RULE_oC_SymbolicName = 166;
    public static readonly RULE_kU_NonReservedKeywords = 167;
    public static readonly RULE_oC_LeftArrowHead = 168;
    public static readonly RULE_oC_RightArrowHead = 169;
    public static readonly RULE_oC_Dash = 170;

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
        null, null, null, null, null, null, null, null, "'*'", null, "'!='", 
        "'-'", "'!'", "':'", null, null, null, null, null, null, null, null, 
        "'0'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "ADD", "ALL", "ALTER", "AND", "AS", "ASC", "ASCENDING", 
        "ATTACH", "BEGIN", "BY", "CALL", "CASE", "CAST", "CHECKPOINT", "COLUMN", 
        "COMMENT", "COMMIT", "COMMIT_SKIP_CHECKPOINT", "CONTAINS", "COPY", 
        "COUNT", "CREATE", "CYCLE", "DATABASE", "DBTYPE", "DEFAULT", "DELETE", 
        "DESC", "DESCENDING", "DETACH", "DISTINCT", "DROP", "ELSE", "END", 
        "ENDS", "EXISTS", "EXPLAIN", "EXPORT", "EXTENSION", "FALSE", "FROM", 
        "GLOB", "GRAPH", "GROUP", "HEADERS", "HINT", "IMPORT", "IF", "IN", 
        "INCREMENT", "INSTALL", "IS", "JOIN", "KEY", "LIMIT", "LOAD", "MACRO", 
        "MATCH", "MAXVALUE", "MERGE", "MINVALUE", "MULTI_JOIN", "NO", "NODE", 
        "NOT", "NULL", "ON", "ONLY", "OPTIONAL", "OR", "ORDER", "PRIMARY", 
        "PROFILE", "PROJECT", "RDFGRAPH", "READ", "REL", "RENAME", "RETURN", 
        "ROLLBACK", "ROLLBACK_SKIP_CHECKPOINT", "SEQUENCE", "SET", "SHORTEST", 
        "START", "STARTS", "TABLE", "THEN", "TO", "TRANSACTION", "TRUE", 
        "TYPE", "UNION", "UNWIND", "USE", "WHEN", "WHERE", "WITH", "WRITE", 
        "XOR", "DECIMAL", "STAR", "L_SKIP", "INVALID_NOT_EQUAL", "MINUS", 
        "FACTORIAL", "COLON", "StringLiteral", "EscapedChar", "DecimalInteger", 
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
        "kU_MinValue", "kU_MaxValue", "kU_StartWith", "kU_Cycle", "kU_IfExists", 
        "kU_Drop", "kU_AlterTable", "kU_AlterOptions", "kU_AddProperty", 
        "kU_Default", "kU_DropProperty", "kU_RenameTable", "kU_RenameProperty", 
        "kU_PropertyDefinitions", "kU_PropertyDefinition", "kU_PropertyDefinitionsDDL", 
        "kU_PropertyDefinitionDDL", "kU_CreateNodeConstraint", "kU_DataType", 
        "kU_ListIdentifiers", "kU_ListIdentifier", "oC_AnyCypherOption", 
        "oC_Explain", "oC_Profile", "kU_Transaction", "kU_Extension", "kU_LoadExtension", 
        "kU_InstallExtension", "oC_Query", "kU_ProjectGraph", "kU_GraphProjectionTableItems", 
        "oC_RegularQuery", "oC_Union", "oC_SingleQuery", "oC_SinglePartQuery", 
        "oC_MultiPartQuery", "kU_QueryPart", "oC_UpdatingClause", "oC_ReadingClause", 
        "kU_LoadFrom", "kU_InQueryCall", "kU_GraphProjectionTableItem", 
        "kU_GraphProjectionColumnItems", "kU_GraphProjectionColumnItem", 
        "oC_Match", "kU_Hint", "kU_JoinNode", "oC_Unwind", "oC_Create", 
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
        "kU_FunctionParameter", "kU_LambdaParameter", "kU_LambdaVars", "oC_PathPatterns", 
        "oC_ExistSubquery", "kU_CountSubquery", "oC_PropertyLookup", "oC_CaseExpression", 
        "oC_CaseAlternative", "oC_Variable", "oC_NumberLiteral", "oC_Parameter", 
        "oC_PropertyExpression", "oC_PropertyKeyName", "oC_IntegerLiteral", 
        "oC_DoubleLiteral", "oC_SchemaName", "oC_SymbolicName", "kU_NonReservedKeywords", 
        "oC_LeftArrowHead", "oC_RightArrowHead", "oC_Dash",
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
            this.state = 342;
            this.oC_Cypher();
            this.state = 353;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 344;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 343;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 346;
                    this.match(CypherParser.T__0);
                    this.state = 348;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                    case 1:
                        {
                        this.state = 347;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    this.state = 350;
                    this.oC_Cypher();
                    }
                    }
                }
                this.state = 355;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            }
            this.state = 357;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 356;
                this.match(CypherParser.SP);
                }
            }

            this.state = 359;
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
            this.state = 362;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===82 || _la===118) {
                {
                this.state = 361;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 365;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 364;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 367;
            this.oC_Statement();
            }
            this.state = 372;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
            case 1:
                {
                this.state = 369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 368;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 371;
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
            this.state = 396;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 374;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 375;
                this.kU_CreateNodeTable();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 376;
                this.kU_CreateRelTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 377;
                this.kU_CreateRelTableGroup();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 378;
                this.kU_CreateRdfGraph();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 379;
                this.kU_CreateSequence();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 380;
                this.kU_CreateType();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 381;
                this.kU_Drop();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 382;
                this.kU_AlterTable();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 383;
                this.kU_CopyFrom();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 384;
                this.kU_CopyFromByColumn();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 385;
                this.kU_CopyTO();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 386;
                this.kU_StandaloneCall();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 387;
                this.kU_CreateMacro();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 388;
                this.kU_CommentOn();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 389;
                this.kU_Transaction();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 390;
                this.kU_Extension();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 391;
                this.kU_ExportDatabase();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 392;
                this.kU_ImportDatabase();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 393;
                this.kU_AttachDatabase();
                }
                break;
            case 21:
                this.enterOuterAlt(localctx, 21);
                {
                this.state = 394;
                this.kU_DetachDatabase();
                }
                break;
            case 22:
                this.enterOuterAlt(localctx, 22);
                {
                this.state = 395;
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
            this.state = 398;
            this.match(CypherParser.COPY);
            this.state = 399;
            this.match(CypherParser.SP);
            this.state = 400;
            this.oC_SchemaName();
            this.state = 409;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                {
                {
                this.state = 402;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 401;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 404;
                this.kU_ColumnNames();
                this.state = 406;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 405;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                break;
            case 2:
                {
                this.state = 408;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 411;
            this.match(CypherParser.FROM);
            this.state = 412;
            this.match(CypherParser.SP);
            this.state = 413;
            this.kU_ScanSource();
            this.state = 418;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                {
                this.state = 415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 414;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 417;
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
            this.state = 420;
            this.match(CypherParser.T__1);
            this.state = 422;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 421;
                this.match(CypherParser.SP);
                }
            }

            this.state = 424;
            this.oC_SchemaName();
            this.state = 435;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 426;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 425;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 428;
                    this.match(CypherParser.T__2);
                    this.state = 430;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 429;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 432;
                    this.oC_SchemaName();
                    }
                    }
                }
                this.state = 437;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            }
            this.state = 439;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 438;
                this.match(CypherParser.SP);
                }
            }

            this.state = 441;
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
            this.state = 462;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 443;
                this.kU_FilePaths();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 444;
                this.match(CypherParser.T__1);
                this.state = 446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 445;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 448;
                this.oC_Query();
                this.state = 450;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 449;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 452;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 454;
                this.oC_Variable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 455;
                this.oC_Variable();
                this.state = 456;
                this.match(CypherParser.T__4);
                this.state = 458;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 457;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 460;
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
            this.state = 464;
            this.match(CypherParser.COPY);
            this.state = 465;
            this.match(CypherParser.SP);
            this.state = 466;
            this.oC_SchemaName();
            this.state = 467;
            this.match(CypherParser.SP);
            this.state = 468;
            this.match(CypherParser.FROM);
            this.state = 469;
            this.match(CypherParser.SP);
            this.state = 470;
            this.match(CypherParser.T__1);
            this.state = 472;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 471;
                this.match(CypherParser.SP);
                }
            }

            this.state = 474;
            this.match(CypherParser.StringLiteral);
            this.state = 485;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3 || _la===167) {
                {
                {
                this.state = 476;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 475;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 478;
                this.match(CypherParser.T__2);
                this.state = 480;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 479;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 482;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 487;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 488;
            this.match(CypherParser.T__3);
            this.state = 489;
            this.match(CypherParser.SP);
            this.state = 490;
            this.match(CypherParser.BY);
            this.state = 491;
            this.match(CypherParser.SP);
            this.state = 492;
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
            this.state = 494;
            this.match(CypherParser.COPY);
            this.state = 495;
            this.match(CypherParser.SP);
            this.state = 496;
            this.match(CypherParser.T__1);
            this.state = 498;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 497;
                this.match(CypherParser.SP);
                }
            }

            this.state = 500;
            this.oC_Query();
            this.state = 502;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 501;
                this.match(CypherParser.SP);
                }
            }

            this.state = 504;
            this.match(CypherParser.T__3);
            this.state = 505;
            this.match(CypherParser.SP);
            this.state = 506;
            this.match(CypherParser.TO);
            this.state = 507;
            this.match(CypherParser.SP);
            this.state = 508;
            this.match(CypherParser.StringLiteral);
            this.state = 513;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
            case 1:
                {
                this.state = 510;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 509;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 512;
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
            this.state = 515;
            this.match(CypherParser.EXPORT);
            this.state = 516;
            this.match(CypherParser.SP);
            this.state = 517;
            this.match(CypherParser.DATABASE);
            this.state = 518;
            this.match(CypherParser.SP);
            this.state = 519;
            this.match(CypherParser.StringLiteral);
            this.state = 524;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
            case 1:
                {
                this.state = 521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 520;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 523;
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
            this.state = 526;
            this.match(CypherParser.IMPORT);
            this.state = 527;
            this.match(CypherParser.SP);
            this.state = 528;
            this.match(CypherParser.DATABASE);
            this.state = 529;
            this.match(CypherParser.SP);
            this.state = 530;
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
            this.state = 532;
            this.match(CypherParser.ATTACH);
            this.state = 533;
            this.match(CypherParser.SP);
            this.state = 534;
            this.match(CypherParser.StringLiteral);
            this.state = 539;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
            case 1:
                {
                this.state = 535;
                this.match(CypherParser.SP);
                this.state = 536;
                this.match(CypherParser.AS);
                this.state = 537;
                this.match(CypherParser.SP);
                this.state = 538;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 541;
            this.match(CypherParser.SP);
            this.state = 542;
            this.match(CypherParser.T__1);
            this.state = 544;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 543;
                this.match(CypherParser.SP);
                }
            }

            this.state = 546;
            this.match(CypherParser.DBTYPE);
            this.state = 547;
            this.match(CypherParser.SP);
            this.state = 548;
            this.oC_SymbolicName();
            this.state = 557;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
            case 1:
                {
                this.state = 550;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 549;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 552;
                this.match(CypherParser.T__2);
                this.state = 554;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 553;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 556;
                this.kU_Options();
                }
                break;
            }
            this.state = 560;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 559;
                this.match(CypherParser.SP);
                }
            }

            this.state = 562;
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
            this.state = 564;
            this.oC_SymbolicName();
            this.state = 566;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 565;
                this.match(CypherParser.SP);
                }
            }

            this.state = 568;
            this.match(CypherParser.T__5);
            this.state = 570;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 569;
                this.match(CypherParser.SP);
                }
            }

            this.state = 572;
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
            this.state = 574;
            this.kU_Option();
            this.state = 585;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 576;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 575;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 578;
                    this.match(CypherParser.T__2);
                    this.state = 580;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 579;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 582;
                    this.kU_Option();
                    }
                    }
                }
                this.state = 587;
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
            this.state = 588;
            this.match(CypherParser.DETACH);
            this.state = 589;
            this.match(CypherParser.SP);
            this.state = 590;
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
            this.state = 592;
            this.match(CypherParser.USE);
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
    public kU_StandaloneCall(): KU_StandaloneCallContext {
        let localctx: KU_StandaloneCallContext = new KU_StandaloneCallContext(this._ctx, this.state);
        this.enterRule(localctx, 30, CypherParser.RULE_kU_StandaloneCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 596;
            this.match(CypherParser.CALL);
            this.state = 597;
            this.match(CypherParser.SP);
            this.state = 598;
            this.oC_SymbolicName();
            this.state = 600;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 599;
                this.match(CypherParser.SP);
                }
            }

            this.state = 602;
            this.match(CypherParser.T__5);
            this.state = 604;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 603;
                this.match(CypherParser.SP);
                }
            }

            this.state = 606;
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
            this.state = 608;
            this.match(CypherParser.COMMENT);
            this.state = 609;
            this.match(CypherParser.SP);
            this.state = 610;
            this.match(CypherParser.ON);
            this.state = 611;
            this.match(CypherParser.SP);
            this.state = 612;
            this.match(CypherParser.TABLE);
            this.state = 613;
            this.match(CypherParser.SP);
            this.state = 614;
            this.oC_SchemaName();
            this.state = 615;
            this.match(CypherParser.SP);
            this.state = 616;
            this.match(CypherParser.IS);
            this.state = 617;
            this.match(CypherParser.SP);
            this.state = 618;
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
            this.state = 620;
            this.match(CypherParser.CREATE);
            this.state = 621;
            this.match(CypherParser.SP);
            this.state = 622;
            this.match(CypherParser.MACRO);
            this.state = 623;
            this.match(CypherParser.SP);
            this.state = 624;
            this.oC_FunctionName();
            this.state = 626;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 625;
                this.match(CypherParser.SP);
                }
            }

            this.state = 628;
            this.match(CypherParser.T__1);
            this.state = 630;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
            case 1:
                {
                this.state = 629;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 633;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
            case 1:
                {
                this.state = 632;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 636;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
            case 1:
                {
                this.state = 635;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 639;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765989781) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 233483335) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 707070845) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 1153) !== 0)) {
                {
                this.state = 638;
                this.kU_DefaultArg();
                }
            }

            this.state = 651;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 642;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 641;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 644;
                    this.match(CypherParser.T__2);
                    this.state = 646;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 645;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 648;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 653;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
            }
            this.state = 655;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 654;
                this.match(CypherParser.SP);
                }
            }

            this.state = 657;
            this.match(CypherParser.T__3);
            this.state = 658;
            this.match(CypherParser.SP);
            this.state = 659;
            this.match(CypherParser.AS);
            this.state = 660;
            this.match(CypherParser.SP);
            this.state = 661;
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
            this.state = 663;
            this.oC_SymbolicName();
            this.state = 674;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 665;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 664;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 667;
                    this.match(CypherParser.T__2);
                    this.state = 669;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 668;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 671;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 676;
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
            this.state = 677;
            this.oC_SymbolicName();
            this.state = 679;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 678;
                this.match(CypherParser.SP);
                }
            }

            this.state = 681;
            this.match(CypherParser.COLON);
            this.state = 682;
            this.match(CypherParser.T__5);
            this.state = 684;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 683;
                this.match(CypherParser.SP);
                }
            }

            this.state = 686;
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
            this.state = 721;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 688;
                this.match(CypherParser.T__6);
                this.state = 690;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 689;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 692;
                this.match(CypherParser.StringLiteral);
                this.state = 703;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3 || _la===167) {
                    {
                    {
                    this.state = 694;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 693;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 696;
                    this.match(CypherParser.T__2);
                    this.state = 698;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 697;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 700;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 705;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 706;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 707;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 708;
                this.match(CypherParser.GLOB);
                this.state = 710;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 709;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 712;
                this.match(CypherParser.T__1);
                this.state = 714;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 713;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 716;
                this.match(CypherParser.StringLiteral);
                this.state = 718;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 717;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 720;
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
            this.state = 723;
            this.match(CypherParser.T__1);
            this.state = 725;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 724;
                this.match(CypherParser.SP);
                }
            }

            this.state = 727;
            this.kU_Options();
            this.state = 729;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 728;
                this.match(CypherParser.SP);
                }
            }

            this.state = 731;
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
            this.state = 733;
            this.match(CypherParser.IF);
            this.state = 734;
            this.match(CypherParser.SP);
            this.state = 735;
            this.match(CypherParser.NOT);
            this.state = 736;
            this.match(CypherParser.SP);
            this.state = 737;
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
            this.state = 739;
            this.match(CypherParser.CREATE);
            this.state = 740;
            this.match(CypherParser.SP);
            this.state = 741;
            this.match(CypherParser.NODE);
            this.state = 742;
            this.match(CypherParser.SP);
            this.state = 743;
            this.match(CypherParser.TABLE);
            this.state = 744;
            this.match(CypherParser.SP);
            this.state = 748;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
            case 1:
                {
                this.state = 745;
                this.kU_IfNotExists();
                this.state = 746;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 750;
            this.oC_SchemaName();
            this.state = 752;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 751;
                this.match(CypherParser.SP);
                }
            }

            this.state = 754;
            this.match(CypherParser.T__1);
            this.state = 756;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 755;
                this.match(CypherParser.SP);
                }
            }

            this.state = 758;
            this.kU_PropertyDefinitionsDDL();
            this.state = 760;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 759;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 762;
            this.match(CypherParser.T__2);
            this.state = 764;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 763;
                this.match(CypherParser.SP);
                }
            }

            this.state = 766;
            this.kU_CreateNodeConstraint();
            }
            this.state = 769;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 768;
                this.match(CypherParser.SP);
                }
            }

            this.state = 771;
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
            this.state = 773;
            this.match(CypherParser.CREATE);
            this.state = 774;
            this.match(CypherParser.SP);
            this.state = 775;
            this.match(CypherParser.REL);
            this.state = 776;
            this.match(CypherParser.SP);
            this.state = 777;
            this.match(CypherParser.TABLE);
            this.state = 778;
            this.match(CypherParser.SP);
            this.state = 782;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
            case 1:
                {
                this.state = 779;
                this.kU_IfNotExists();
                this.state = 780;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 784;
            this.oC_SchemaName();
            this.state = 786;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 785;
                this.match(CypherParser.SP);
                }
            }

            this.state = 788;
            this.match(CypherParser.T__1);
            this.state = 790;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 789;
                this.match(CypherParser.SP);
                }
            }

            this.state = 792;
            this.kU_RelTableConnection();
            this.state = 794;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 793;
                this.match(CypherParser.SP);
                }
            }

            this.state = 804;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
            case 1:
                {
                this.state = 796;
                this.match(CypherParser.T__2);
                this.state = 798;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 797;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 800;
                this.kU_PropertyDefinitionsDDL();
                this.state = 802;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 801;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 814;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 806;
                this.match(CypherParser.T__2);
                this.state = 808;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 807;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 810;
                this.oC_SymbolicName();
                this.state = 812;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 811;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 816;
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
            this.state = 818;
            this.match(CypherParser.CREATE);
            this.state = 819;
            this.match(CypherParser.SP);
            this.state = 820;
            this.match(CypherParser.REL);
            this.state = 821;
            this.match(CypherParser.SP);
            this.state = 822;
            this.match(CypherParser.TABLE);
            this.state = 823;
            this.match(CypherParser.SP);
            this.state = 824;
            this.match(CypherParser.GROUP);
            this.state = 825;
            this.match(CypherParser.SP);
            this.state = 829;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
            case 1:
                {
                this.state = 826;
                this.kU_IfNotExists();
                this.state = 827;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 831;
            this.oC_SchemaName();
            this.state = 833;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
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
            if (_la===167) {
                {
                this.state = 836;
                this.match(CypherParser.SP);
                }
            }

            this.state = 839;
            this.kU_RelTableConnection();
            this.state = 848;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 841;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 840;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 843;
                    this.match(CypherParser.T__2);
                    this.state = 845;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 844;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 847;
                    this.kU_RelTableConnection();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 850;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 91, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 853;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 852;
                this.match(CypherParser.SP);
                }
            }

            this.state = 863;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
            case 1:
                {
                this.state = 855;
                this.match(CypherParser.T__2);
                this.state = 857;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 856;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 859;
                this.kU_PropertyDefinitionsDDL();
                this.state = 861;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 860;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 873;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 865;
                this.match(CypherParser.T__2);
                this.state = 867;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 866;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 869;
                this.oC_SymbolicName();
                this.state = 871;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 870;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 875;
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
            this.state = 877;
            this.match(CypherParser.FROM);
            this.state = 878;
            this.match(CypherParser.SP);
            this.state = 879;
            this.oC_SchemaName();
            this.state = 880;
            this.match(CypherParser.SP);
            this.state = 881;
            this.match(CypherParser.TO);
            this.state = 882;
            this.match(CypherParser.SP);
            this.state = 883;
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
            this.state = 885;
            this.match(CypherParser.CREATE);
            this.state = 886;
            this.match(CypherParser.SP);
            this.state = 887;
            this.match(CypherParser.RDFGRAPH);
            this.state = 888;
            this.match(CypherParser.SP);
            this.state = 892;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
            case 1:
                {
                this.state = 889;
                this.kU_IfNotExists();
                this.state = 890;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 894;
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
            this.state = 896;
            this.match(CypherParser.CREATE);
            this.state = 897;
            this.match(CypherParser.SP);
            this.state = 898;
            this.match(CypherParser.SEQUENCE);
            this.state = 899;
            this.match(CypherParser.SP);
            this.state = 903;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
            case 1:
                {
                this.state = 900;
                this.kU_IfNotExists();
                this.state = 901;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 905;
            this.oC_SchemaName();
            this.state = 910;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 101, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 906;
                    this.match(CypherParser.SP);
                    this.state = 907;
                    this.kU_SequenceOptions();
                    }
                    }
                }
                this.state = 912;
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
            this.state = 913;
            this.match(CypherParser.CREATE);
            this.state = 914;
            this.match(CypherParser.SP);
            this.state = 915;
            this.match(CypherParser.TYPE);
            this.state = 916;
            this.match(CypherParser.SP);
            this.state = 917;
            this.oC_SchemaName();
            this.state = 918;
            this.match(CypherParser.SP);
            this.state = 919;
            this.match(CypherParser.AS);
            this.state = 920;
            this.match(CypherParser.SP);
            this.state = 921;
            this.kU_DataType(0);
            this.state = 923;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
            case 1:
                {
                this.state = 922;
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
            this.state = 930;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 925;
                this.kU_IncrementBy();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 926;
                this.kU_MinValue();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 927;
                this.kU_MaxValue();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 928;
                this.kU_StartWith();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 929;
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
            this.state = 932;
            this.match(CypherParser.INCREMENT);
            this.state = 933;
            this.match(CypherParser.SP);
            this.state = 936;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===55) {
                {
                this.state = 934;
                this.match(CypherParser.BY);
                this.state = 935;
                this.match(CypherParser.SP);
                }
            }

            this.state = 939;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 938;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 941;
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
            this.state = 952;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 943;
                this.match(CypherParser.NO);
                this.state = 944;
                this.match(CypherParser.SP);
                this.state = 945;
                this.match(CypherParser.MINVALUE);
                }
                }
                break;
            case CypherParser.MINVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 946;
                this.match(CypherParser.MINVALUE);
                this.state = 947;
                this.match(CypherParser.SP);
                this.state = 949;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 948;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 951;
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
            this.state = 963;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 954;
                this.match(CypherParser.NO);
                this.state = 955;
                this.match(CypherParser.SP);
                this.state = 956;
                this.match(CypherParser.MAXVALUE);
                }
                }
                break;
            case CypherParser.MAXVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 957;
                this.match(CypherParser.MAXVALUE);
                this.state = 958;
                this.match(CypherParser.SP);
                this.state = 960;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===150) {
                    {
                    this.state = 959;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 962;
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
            this.state = 965;
            this.match(CypherParser.START);
            this.state = 966;
            this.match(CypherParser.SP);
            this.state = 969;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===143) {
                {
                this.state = 967;
                this.match(CypherParser.WITH);
                this.state = 968;
                this.match(CypherParser.SP);
                }
            }

            this.state = 972;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 971;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 974;
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
            this.state = 978;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===108) {
                {
                this.state = 976;
                this.match(CypherParser.NO);
                this.state = 977;
                this.match(CypherParser.SP);
                }
            }

            this.state = 980;
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
        this.enterRule(localctx, 72, CypherParser.RULE_kU_IfExists);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 982;
            this.match(CypherParser.IF);
            this.state = 983;
            this.match(CypherParser.SP);
            this.state = 984;
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
        this.enterRule(localctx, 74, CypherParser.RULE_kU_Drop);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 986;
            this.match(CypherParser.DROP);
            this.state = 987;
            this.match(CypherParser.SP);
            this.state = 988;
            _la = this._input.LA(1);
            if(!(((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 4225) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 989;
            this.match(CypherParser.SP);
            this.state = 993;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
            case 1:
                {
                this.state = 990;
                this.kU_IfExists();
                this.state = 991;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 995;
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
        this.enterRule(localctx, 76, CypherParser.RULE_kU_AlterTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 997;
            this.match(CypherParser.ALTER);
            this.state = 998;
            this.match(CypherParser.SP);
            this.state = 999;
            this.match(CypherParser.TABLE);
            this.state = 1000;
            this.match(CypherParser.SP);
            this.state = 1001;
            this.oC_SchemaName();
            this.state = 1002;
            this.match(CypherParser.SP);
            this.state = 1003;
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
        this.enterRule(localctx, 78, CypherParser.RULE_kU_AlterOptions);
        try {
            this.state = 1009;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1005;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1006;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1007;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1008;
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
        this.enterRule(localctx, 80, CypherParser.RULE_kU_AddProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1011;
            this.match(CypherParser.ADD);
            this.state = 1012;
            this.match(CypherParser.SP);
            this.state = 1013;
            this.oC_PropertyKeyName();
            this.state = 1014;
            this.match(CypherParser.SP);
            this.state = 1015;
            this.kU_DataType(0);
            this.state = 1018;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
            case 1:
                {
                this.state = 1016;
                this.match(CypherParser.SP);
                this.state = 1017;
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
        this.enterRule(localctx, 82, CypherParser.RULE_kU_Default);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1020;
            this.match(CypherParser.DEFAULT);
            this.state = 1021;
            this.match(CypherParser.SP);
            this.state = 1022;
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
        this.enterRule(localctx, 84, CypherParser.RULE_kU_DropProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1024;
            this.match(CypherParser.DROP);
            this.state = 1025;
            this.match(CypherParser.SP);
            this.state = 1026;
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
        this.enterRule(localctx, 86, CypherParser.RULE_kU_RenameTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1028;
            this.match(CypherParser.RENAME);
            this.state = 1029;
            this.match(CypherParser.SP);
            this.state = 1030;
            this.match(CypherParser.TO);
            this.state = 1031;
            this.match(CypherParser.SP);
            this.state = 1032;
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
        this.enterRule(localctx, 88, CypherParser.RULE_kU_RenameProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1034;
            this.match(CypherParser.RENAME);
            this.state = 1035;
            this.match(CypherParser.SP);
            this.state = 1036;
            this.oC_PropertyKeyName();
            this.state = 1037;
            this.match(CypherParser.SP);
            this.state = 1038;
            this.match(CypherParser.TO);
            this.state = 1039;
            this.match(CypherParser.SP);
            this.state = 1040;
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
        this.enterRule(localctx, 90, CypherParser.RULE_kU_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1042;
            this.kU_PropertyDefinition();
            this.state = 1053;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 118, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1044;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1043;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1046;
                    this.match(CypherParser.T__2);
                    this.state = 1048;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1047;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1050;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 1055;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 118, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1056;
            this.oC_PropertyKeyName();
            this.state = 1057;
            this.match(CypherParser.SP);
            this.state = 1058;
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
        this.enterRule(localctx, 94, CypherParser.RULE_kU_PropertyDefinitionsDDL);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1060;
            this.kU_PropertyDefinitionDDL();
            this.state = 1071;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1062;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1061;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1064;
                    this.match(CypherParser.T__2);
                    this.state = 1066;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1065;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1068;
                    this.kU_PropertyDefinitionDDL();
                    }
                    }
                }
                this.state = 1073;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 96, CypherParser.RULE_kU_PropertyDefinitionDDL);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1074;
            this.oC_PropertyKeyName();
            this.state = 1075;
            this.match(CypherParser.SP);
            this.state = 1076;
            this.kU_DataType(0);
            this.state = 1079;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
            case 1:
                {
                this.state = 1077;
                this.match(CypherParser.SP);
                this.state = 1078;
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
        this.enterRule(localctx, 98, CypherParser.RULE_kU_CreateNodeConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1081;
            this.match(CypherParser.PRIMARY);
            this.state = 1082;
            this.match(CypherParser.SP);
            this.state = 1083;
            this.match(CypherParser.KEY);
            this.state = 1085;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1084;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1087;
            this.match(CypherParser.T__1);
            this.state = 1089;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1088;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1091;
            this.oC_PropertyKeyName();
            this.state = 1093;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1092;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1095;
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
        let _startState = 100;
        this.enterRecursionRule(localctx, 100, CypherParser.RULE_kU_DataType, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1171;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
            case 1:
                {
                this.state = 1098;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 1099;
                this.match(CypherParser.UNION);
                this.state = 1101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1100;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1103;
                this.match(CypherParser.T__1);
                this.state = 1105;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1104;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1107;
                this.kU_PropertyDefinitions();
                this.state = 1109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1108;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1111;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                {
                this.state = 1113;
                this.oC_SymbolicName();
                this.state = 1115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1114;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1117;
                this.match(CypherParser.T__1);
                this.state = 1119;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1118;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1121;
                this.kU_PropertyDefinitions();
                this.state = 1123;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1122;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1125;
                this.match(CypherParser.T__3);
                }
                break;
            case 4:
                {
                this.state = 1127;
                this.oC_SymbolicName();
                this.state = 1129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1128;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1131;
                this.match(CypherParser.T__1);
                this.state = 1133;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1132;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1135;
                this.kU_DataType(0);
                this.state = 1137;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1136;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1139;
                this.match(CypherParser.T__2);
                this.state = 1141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1140;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1143;
                this.kU_DataType(0);
                this.state = 1145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1144;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1147;
                this.match(CypherParser.T__3);
                }
                break;
            case 5:
                {
                this.state = 1149;
                this.match(CypherParser.DECIMAL);
                this.state = 1151;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
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
                if (_la===167) {
                    {
                    this.state = 1154;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1157;
                this.oC_IntegerLiteral();
                this.state = 1159;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1158;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1161;
                this.match(CypherParser.T__2);
                this.state = 1163;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1162;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1165;
                this.oC_IntegerLiteral();
                this.state = 1167;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1166;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1169;
                this.match(CypherParser.T__3);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1177;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 143, this._ctx);
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
                    this.state = 1173;
                    if (!(this.precpred(this._ctx, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                    }
                    this.state = 1174;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 1179;
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
            this.state = 1180;
            this.kU_ListIdentifier();
            this.state = 1184;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 144, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1181;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 1186;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 144, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1187;
            this.match(CypherParser.T__6);
            this.state = 1189;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===155) {
                {
                this.state = 1188;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 1191;
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
            this.state = 1195;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1193;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1194;
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
            this.state = 1197;
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
        this.enterRule(localctx, 110, CypherParser.RULE_oC_Profile);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1199;
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
            this.state = 1214;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1201;
                this.match(CypherParser.BEGIN);
                this.state = 1202;
                this.match(CypherParser.SP);
                this.state = 1203;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1204;
                this.match(CypherParser.BEGIN);
                this.state = 1205;
                this.match(CypherParser.SP);
                this.state = 1206;
                this.match(CypherParser.TRANSACTION);
                this.state = 1207;
                this.match(CypherParser.SP);
                this.state = 1208;
                this.match(CypherParser.READ);
                this.state = 1209;
                this.match(CypherParser.SP);
                this.state = 1210;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1211;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1212;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1213;
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
            this.state = 1218;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1216;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1217;
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
        this.enterRule(localctx, 116, CypherParser.RULE_kU_LoadExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1220;
            this.match(CypherParser.LOAD);
            this.state = 1221;
            this.match(CypherParser.SP);
            this.state = 1222;
            this.match(CypherParser.EXTENSION);
            this.state = 1223;
            this.match(CypherParser.SP);
            this.state = 1226;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 1224;
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
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1225;
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
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1228;
            this.match(CypherParser.INSTALL);
            this.state = 1229;
            this.match(CypherParser.SP);
            this.state = 1230;
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
        this.enterRule(localctx, 120, CypherParser.RULE_oC_Query);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1236;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 151, this._ctx) ) {
            case 1:
                {
                this.state = 1232;
                this.kU_ProjectGraph();
                this.state = 1234;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1233;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 1238;
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
        this.enterRule(localctx, 122, CypherParser.RULE_kU_ProjectGraph);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1240;
            this.match(CypherParser.PROJECT);
            this.state = 1241;
            this.match(CypherParser.SP);
            this.state = 1242;
            this.match(CypherParser.GRAPH);
            this.state = 1243;
            this.match(CypherParser.SP);
            this.state = 1244;
            this.oC_SchemaName();
            this.state = 1246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1245;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1248;
            this.match(CypherParser.T__1);
            this.state = 1250;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1249;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1252;
            this.kU_GraphProjectionTableItems();
            this.state = 1254;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1253;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1256;
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
        this.enterRule(localctx, 124, CypherParser.RULE_kU_GraphProjectionTableItems);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1258;
            this.kU_GraphProjectionTableItem();
            this.state = 1269;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1260;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1259;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1262;
                    this.match(CypherParser.T__2);
                    this.state = 1264;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1263;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1266;
                    this.kU_GraphProjectionTableItem();
                    }
                    }
                }
                this.state = 1271;
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
    public oC_RegularQuery(): OC_RegularQueryContext {
        let localctx: OC_RegularQueryContext = new OC_RegularQueryContext(this._ctx, this.state);
        this.enterRule(localctx, 126, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1293;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 162, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1272;
                this.oC_SingleQuery();
                this.state = 1279;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 159, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1274;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===167) {
                            {
                            this.state = 1273;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1276;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 1281;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 159, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1286;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1282;
                        this.oC_Return();
                        this.state = 1284;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===167) {
                            {
                            this.state = 1283;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1288;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1290;
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
            this.state = 1307;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1295;
                this.match(CypherParser.UNION);
                this.state = 1296;
                this.match(CypherParser.SP);
                this.state = 1297;
                this.match(CypherParser.ALL);
                this.state = 1299;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1298;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1301;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1302;
                this.match(CypherParser.UNION);
                this.state = 1304;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1303;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1306;
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
            this.state = 1311;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1309;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1310;
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
            this.state = 1358;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1319;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===56 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 270341) !== 0) || _la===139) {
                    {
                    {
                    this.state = 1313;
                    this.oC_ReadingClause();
                    this.state = 1315;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1314;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1321;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1322;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1329;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===56 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 270341) !== 0) || _la===139) {
                    {
                    {
                    this.state = 1323;
                    this.oC_ReadingClause();
                    this.state = 1325;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1324;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1331;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1332;
                this.oC_UpdatingClause();
                this.state = 1339;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1334;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===167) {
                            {
                            this.state = 1333;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1336;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1341;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
                }
                this.state = 1346;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
                case 1:
                    {
                    this.state = 1343;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1342;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1345;
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
                this.state = 1352;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 1348;
                    this.oC_ReadingClause();
                    this.state = 1350;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
                    case 1:
                        {
                        this.state = 1349;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    }
                    }
                    this.state = 1354;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===56 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 270341) !== 0) || _la===139);
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
            this.state = 1364;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1360;
                    this.kU_QueryPart();
                    this.state = 1362;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1361;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1366;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1368;
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
            this.state = 1376;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===56 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 270341) !== 0) || _la===139) {
                {
                {
                this.state = 1370;
                this.oC_ReadingClause();
                this.state = 1372;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
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
            this.state = 1385;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 289) !== 0) || _la===105 || _la===128) {
                {
                {
                this.state = 1379;
                this.oC_UpdatingClause();
                this.state = 1381;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1380;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1388;
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
            this.state = 1394;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1390;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1391;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1392;
                this.oC_Set();
                }
                break;
            case CypherParser.DELETE:
            case CypherParser.DETACH:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1393;
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
            this.state = 1400;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.MATCH:
            case CypherParser.OPTIONAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1396;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1397;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
            case CypherParser.PROJECT:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1398;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1399;
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
            this.state = 1402;
            this.match(CypherParser.LOAD);
            this.state = 1420;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
            case 1:
                {
                this.state = 1403;
                this.match(CypherParser.SP);
                this.state = 1404;
                this.match(CypherParser.WITH);
                this.state = 1405;
                this.match(CypherParser.SP);
                this.state = 1406;
                this.match(CypherParser.HEADERS);
                this.state = 1408;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1407;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1410;
                this.match(CypherParser.T__1);
                this.state = 1412;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1411;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1414;
                this.kU_PropertyDefinitions();
                this.state = 1416;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1415;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1418;
                this.match(CypherParser.T__3);
                }
                break;
            }
            this.state = 1422;
            this.match(CypherParser.SP);
            this.state = 1423;
            this.match(CypherParser.FROM);
            this.state = 1424;
            this.match(CypherParser.SP);
            this.state = 1425;
            this.kU_ScanSource();
            this.state = 1430;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 191, this._ctx) ) {
            case 1:
                {
                this.state = 1427;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1426;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1429;
                this.kU_ParsingOptions();
                }
                break;
            }
            this.state = 1436;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
            case 1:
                {
                this.state = 1433;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1432;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1435;
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
        this.enterRule(localctx, 144, CypherParser.RULE_kU_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1442;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===119) {
                {
                this.state = 1438;
                this.kU_ProjectGraph();
                this.state = 1440;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1439;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1444;
            this.match(CypherParser.CALL);
            this.state = 1445;
            this.match(CypherParser.SP);
            this.state = 1446;
            this.oC_FunctionInvocation();
            this.state = 1451;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
            case 1:
                {
                this.state = 1448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1447;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1450;
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
        this.enterRule(localctx, 146, CypherParser.RULE_kU_GraphProjectionTableItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1453;
            this.oC_SchemaName();
            this.state = 1467;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 201, this._ctx) ) {
            case 1:
                {
                this.state = 1455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1454;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1457;
                this.match(CypherParser.T__8);
                this.state = 1459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1458;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1461;
                this.kU_GraphProjectionColumnItems();
                this.state = 1463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1462;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1465;
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
        this.enterRule(localctx, 148, CypherParser.RULE_kU_GraphProjectionColumnItems);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1469;
            this.kU_GraphProjectionColumnItem();
            this.state = 1480;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 204, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1471;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1470;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1473;
                    this.match(CypherParser.T__2);
                    this.state = 1475;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1474;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1477;
                    this.kU_GraphProjectionColumnItem();
                    }
                    }
                }
                this.state = 1482;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 204, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 150, CypherParser.RULE_kU_GraphProjectionColumnItem);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1483;
            this.oC_PropertyKeyName();
            this.state = 1486;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
            case 1:
                {
                this.state = 1484;
                this.match(CypherParser.SP);
                this.state = 1485;
                this.kU_Default();
                }
                break;
            }
            this.state = 1490;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 206, this._ctx) ) {
            case 1:
                {
                this.state = 1488;
                this.match(CypherParser.SP);
                this.state = 1489;
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
        this.enterRule(localctx, 152, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1494;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===114) {
                {
                this.state = 1492;
                this.match(CypherParser.OPTIONAL);
                this.state = 1493;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1496;
            this.match(CypherParser.MATCH);
            this.state = 1498;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1497;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1500;
            this.oC_Pattern();
            this.state = 1503;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
            case 1:
                {
                this.state = 1501;
                this.match(CypherParser.SP);
                this.state = 1502;
                this.oC_Where();
                }
                break;
            }
            this.state = 1507;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
            case 1:
                {
                this.state = 1505;
                this.match(CypherParser.SP);
                this.state = 1506;
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
            this.state = 1509;
            this.match(CypherParser.HINT);
            this.state = 1510;
            this.match(CypherParser.SP);
            this.state = 1511;
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
            this.state = 1525;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__1:
                {
                this.state = 1514;
                this.match(CypherParser.T__1);
                this.state = 1516;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1515;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1518;
                this.kU_JoinNode(0);
                this.state = 1520;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1519;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1522;
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
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1524;
                this.oC_SchemaName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1543;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 216, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1541;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
                    case 1:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1527;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1528;
                        this.match(CypherParser.SP);
                        this.state = 1529;
                        this.match(CypherParser.JOIN);
                        this.state = 1530;
                        this.match(CypherParser.SP);
                        this.state = 1531;
                        this.kU_JoinNode(5);
                        }
                        break;
                    case 2:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1532;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1537;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                            case 1:
                                {
                                {
                                this.state = 1533;
                                this.match(CypherParser.SP);
                                this.state = 1534;
                                this.match(CypherParser.MULTI_JOIN);
                                this.state = 1535;
                                this.match(CypherParser.SP);
                                this.state = 1536;
                                this.oC_SchemaName();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 1539;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 214, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    }
                    }
                }
                this.state = 1545;
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
            this.state = 1546;
            this.match(CypherParser.UNWIND);
            this.state = 1548;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1547;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1550;
            this.oC_Expression();
            this.state = 1551;
            this.match(CypherParser.SP);
            this.state = 1552;
            this.match(CypherParser.AS);
            this.state = 1553;
            this.match(CypherParser.SP);
            this.state = 1554;
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
            this.state = 1556;
            this.match(CypherParser.CREATE);
            this.state = 1558;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1557;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1560;
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
            this.state = 1562;
            this.match(CypherParser.MERGE);
            this.state = 1564;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1563;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1566;
            this.oC_Pattern();
            this.state = 1571;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 220, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1567;
                    this.match(CypherParser.SP);
                    this.state = 1568;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1573;
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
            this.exitRule();
        }
        return localctx;
    }
    public oC_MergeAction(): OC_MergeActionContext {
        let localctx: OC_MergeActionContext = new OC_MergeActionContext(this._ctx, this.state);
        this.enterRule(localctx, 164, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1584;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1574;
                this.match(CypherParser.ON);
                this.state = 1575;
                this.match(CypherParser.SP);
                this.state = 1576;
                this.match(CypherParser.MATCH);
                this.state = 1577;
                this.match(CypherParser.SP);
                this.state = 1578;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1579;
                this.match(CypherParser.ON);
                this.state = 1580;
                this.match(CypherParser.SP);
                this.state = 1581;
                this.match(CypherParser.CREATE);
                this.state = 1582;
                this.match(CypherParser.SP);
                this.state = 1583;
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
            this.state = 1586;
            this.match(CypherParser.SET);
            this.state = 1588;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1587;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1590;
            this.oC_SetItem();
            this.state = 1601;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 225, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1592;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
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
                    if (_la===167) {
                        {
                        this.state = 1595;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1598;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1603;
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
    public oC_SetItem(): OC_SetItemContext {
        let localctx: OC_SetItemContext = new OC_SetItemContext(this._ctx, this.state);
        this.enterRule(localctx, 168, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1604;
            this.oC_PropertyExpression();
            this.state = 1606;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1605;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1608;
            this.match(CypherParser.T__5);
            this.state = 1610;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1609;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1612;
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
            this.state = 1616;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===75) {
                {
                this.state = 1614;
                this.match(CypherParser.DETACH);
                this.state = 1615;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1618;
            this.match(CypherParser.DELETE);
            this.state = 1620;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1619;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1622;
            this.oC_Expression();
            this.state = 1633;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 232, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1624;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
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
                    if (_la===167) {
                        {
                        this.state = 1627;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1630;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1635;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 232, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1636;
            this.match(CypherParser.WITH);
            this.state = 1637;
            this.oC_ProjectionBody();
            this.state = 1642;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
            case 1:
                {
                this.state = 1639;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1638;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1641;
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
            this.state = 1644;
            this.match(CypherParser.RETURN);
            this.state = 1645;
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
            this.state = 1651;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 236, this._ctx) ) {
            case 1:
                {
                this.state = 1648;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1647;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1650;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1653;
            this.match(CypherParser.SP);
            this.state = 1654;
            this.oC_ProjectionItems();
            this.state = 1657;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 237, this._ctx) ) {
            case 1:
                {
                this.state = 1655;
                this.match(CypherParser.SP);
                this.state = 1656;
                this.oC_Order();
                }
                break;
            }
            this.state = 1661;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
            case 1:
                {
                this.state = 1659;
                this.match(CypherParser.SP);
                this.state = 1660;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1665;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
            case 1:
                {
                this.state = 1663;
                this.match(CypherParser.SP);
                this.state = 1664;
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
            this.state = 1695;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1667;
                this.match(CypherParser.STAR);
                this.state = 1678;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 242, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1669;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===167) {
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
                        if (_la===167) {
                            {
                            this.state = 1672;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1675;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1680;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 242, this._ctx);
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
                this.state = 1681;
                this.oC_ProjectionItem();
                this.state = 1692;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 245, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1683;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===167) {
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
                        if (_la===167) {
                            {
                            this.state = 1686;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1689;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1694;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 245, this._ctx);
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
            this.state = 1704;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1697;
                this.oC_Expression();
                this.state = 1698;
                this.match(CypherParser.SP);
                this.state = 1699;
                this.match(CypherParser.AS);
                this.state = 1700;
                this.match(CypherParser.SP);
                this.state = 1701;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1703;
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
            this.state = 1706;
            this.match(CypherParser.ORDER);
            this.state = 1707;
            this.match(CypherParser.SP);
            this.state = 1708;
            this.match(CypherParser.BY);
            this.state = 1709;
            this.match(CypherParser.SP);
            this.state = 1710;
            this.oC_SortItem();
            this.state = 1718;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 1711;
                this.match(CypherParser.T__2);
                this.state = 1713;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1712;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1715;
                this.oC_SortItem();
                }
                }
                this.state = 1720;
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
            this.state = 1721;
            this.match(CypherParser.L_SKIP);
            this.state = 1722;
            this.match(CypherParser.SP);
            this.state = 1723;
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
            this.state = 1725;
            this.match(CypherParser.LIMIT);
            this.state = 1726;
            this.match(CypherParser.SP);
            this.state = 1727;
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
            this.state = 1729;
            this.oC_Expression();
            this.state = 1734;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 251, this._ctx) ) {
            case 1:
                {
                this.state = 1731;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1730;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1733;
                _la = this._input.LA(1);
                if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 12582915) !== 0))) {
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
            this.state = 1736;
            this.match(CypherParser.WHERE);
            this.state = 1737;
            this.match(CypherParser.SP);
            this.state = 1738;
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
            this.state = 1740;
            this.oC_PatternPart();
            this.state = 1751;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 254, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1742;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1741;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1744;
                    this.match(CypherParser.T__2);
                    this.state = 1746;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1745;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1748;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1753;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 254, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1765;
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
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1754;
                this.oC_Variable();
                this.state = 1756;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1755;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1758;
                this.match(CypherParser.T__5);
                this.state = 1760;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1759;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1762;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1764;
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
            this.state = 1767;
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
            this.state = 1783;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1769;
                this.oC_NodePattern();
                this.state = 1776;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 259, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1771;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===167) {
                            {
                            this.state = 1770;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1773;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1778;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 259, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1779;
                this.match(CypherParser.T__1);
                this.state = 1780;
                this.oC_PatternElement();
                this.state = 1781;
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
        this.enterRule(localctx, 200, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1785;
            this.match(CypherParser.T__1);
            this.state = 1787;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1786;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1793;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765989781) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 233483335) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 707070845) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 1153) !== 0)) {
                {
                this.state = 1789;
                this.oC_Variable();
                this.state = 1791;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1790;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1799;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===152) {
                {
                this.state = 1795;
                this.oC_NodeLabels();
                this.state = 1797;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
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
            if (_la===9) {
                {
                this.state = 1801;
                this.kU_Properties();
                this.state = 1803;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1802;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1807;
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
        this.enterRule(localctx, 202, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1809;
            this.oC_RelationshipPattern();
            this.state = 1811;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1810;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1813;
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
            this.state = 1859;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 280, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1815;
                this.oC_LeftArrowHead();
                this.state = 1817;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1816;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1819;
                this.oC_Dash();
                this.state = 1821;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
                case 1:
                    {
                    this.state = 1820;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1824;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1823;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1827;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1826;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1829;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1831;
                this.oC_Dash();
                this.state = 1833;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 273, this._ctx) ) {
                case 1:
                    {
                    this.state = 1832;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1836;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1835;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1839;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1838;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1841;
                this.oC_Dash();
                this.state = 1843;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1842;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1845;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1847;
                this.oC_Dash();
                this.state = 1849;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 277, this._ctx) ) {
                case 1:
                    {
                    this.state = 1848;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1852;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1851;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1855;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1854;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1857;
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
            this.state = 1861;
            this.match(CypherParser.T__6);
            this.state = 1863;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1862;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1869;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765989781) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 233483335) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 707070845) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 1153) !== 0)) {
                {
                this.state = 1865;
                this.oC_Variable();
                this.state = 1867;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1866;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1875;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===152) {
                {
                this.state = 1871;
                this.oC_RelationshipTypes();
                this.state = 1873;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
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
            if (_la===147) {
                {
                this.state = 1877;
                this.oC_RangeLiteral();
                this.state = 1879;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
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
            if (_la===9) {
                {
                this.state = 1883;
                this.kU_Properties();
                this.state = 1885;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1884;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1889;
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
            this.state = 1891;
            this.match(CypherParser.T__8);
            this.state = 1893;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1892;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1928;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765989781) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 233483335) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 707070845) !== 0) || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 1153) !== 0)) {
                {
                this.state = 1895;
                this.oC_PropertyKeyName();
                this.state = 1897;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1896;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1899;
                this.match(CypherParser.COLON);
                this.state = 1901;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1900;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1903;
                this.oC_Expression();
                this.state = 1905;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1904;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1925;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 1907;
                    this.match(CypherParser.T__2);
                    this.state = 1909;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1908;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1911;
                    this.oC_PropertyKeyName();
                    this.state = 1913;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1912;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1915;
                    this.match(CypherParser.COLON);
                    this.state = 1917;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1916;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1919;
                    this.oC_Expression();
                    this.state = 1921;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1920;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1927;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1930;
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
            this.state = 1932;
            this.match(CypherParser.COLON);
            this.state = 1934;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1933;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1936;
            this.oC_RelTypeName();
            this.state = 1950;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 304, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1938;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1937;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1940;
                    this.match(CypherParser.T__10);
                    this.state = 1942;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===152) {
                        {
                        this.state = 1941;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 1945;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1944;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1947;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1952;
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
    public oC_NodeLabels(): OC_NodeLabelsContext {
        let localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this._ctx, this.state);
        this.enterRule(localctx, 212, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1953;
            this.oC_NodeLabel();
            this.state = 1960;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 306, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1955;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 1954;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1957;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1962;
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
    public oC_NodeLabel(): OC_NodeLabelContext {
        let localctx: OC_NodeLabelContext = new OC_NodeLabelContext(this._ctx, this.state);
        this.enterRule(localctx, 214, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1963;
            this.match(CypherParser.COLON);
            this.state = 1965;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 1964;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1967;
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
        this.enterRule(localctx, 216, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1969;
            this.match(CypherParser.STAR);
            this.state = 1971;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 308, this._ctx) ) {
            case 1:
                {
                this.state = 1970;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1977;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.SHORTEST:
                {
                this.state = 1973;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.ALL:
                {
                this.state = 1974;
                this.match(CypherParser.ALL);
                this.state = 1975;
                this.match(CypherParser.SP);
                this.state = 1976;
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
            this.state = 1980;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 310, this._ctx) ) {
            case 1:
                {
                this.state = 1979;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1996;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 315, this._ctx) ) {
            case 1:
                {
                this.state = 1983;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===155) {
                    {
                    this.state = 1982;
                    this.oC_LowerBound();
                    }
                }

                this.state = 1986;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1985;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1988;
                this.match(CypherParser.T__11);
                this.state = 1990;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 313, this._ctx) ) {
                case 1:
                    {
                    this.state = 1989;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1993;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===155) {
                    {
                    this.state = 1992;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 1995;
                this.oC_IntegerLiteral();
                }
                break;
            }
            this.state = 2002;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 317, this._ctx) ) {
            case 1:
                {
                this.state = 1999;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 1998;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2001;
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
        this.enterRule(localctx, 218, CypherParser.RULE_kU_RecursiveRelationshipComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2004;
            this.match(CypherParser.T__1);
            this.state = 2006;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2005;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2008;
            this.oC_Variable();
            this.state = 2010;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2009;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2012;
            this.match(CypherParser.T__2);
            this.state = 2014;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2013;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2016;
            this.oC_Variable();
            this.state = 2028;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 324, this._ctx) ) {
            case 1:
                {
                this.state = 2018;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2017;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2020;
                this.match(CypherParser.T__10);
                this.state = 2022;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2021;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2024;
                this.oC_Where();
                this.state = 2026;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 323, this._ctx) ) {
                case 1:
                    {
                    this.state = 2025;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                }
                break;
            }
            this.state = 2049;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===167) {
                {
                this.state = 2031;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2030;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2033;
                this.match(CypherParser.T__10);
                this.state = 2035;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2034;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2037;
                this.kU_IntermediateRelProjectionItems();
                this.state = 2039;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2038;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2041;
                this.match(CypherParser.T__2);
                this.state = 2043;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2042;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2045;
                this.kU_IntermediateNodeProjectionItems();
                this.state = 2047;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2046;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2051;
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
        this.enterRule(localctx, 220, CypherParser.RULE_kU_IntermediateNodeProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2053;
            this.match(CypherParser.T__8);
            this.state = 2055;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 331, this._ctx) ) {
            case 1:
                {
                this.state = 2054;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2058;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765995925) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 2077579423) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 3123121021) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 9741) !== 0)) {
                {
                this.state = 2057;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2061;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2060;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2063;
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
        this.enterRule(localctx, 222, CypherParser.RULE_kU_IntermediateRelProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2065;
            this.match(CypherParser.T__8);
            this.state = 2067;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 334, this._ctx) ) {
            case 1:
                {
                this.state = 2066;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2070;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765995925) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 2077579423) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 3123121021) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 9741) !== 0)) {
                {
                this.state = 2069;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2073;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2072;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2075;
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
            this.state = 2077;
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
            this.state = 2079;
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
            this.state = 2081;
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
            this.state = 2083;
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
            this.state = 2085;
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
            this.state = 2087;
            this.oC_XorExpression();
            this.state = 2094;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 337, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2088;
                    this.match(CypherParser.SP);
                    this.state = 2089;
                    this.match(CypherParser.OR);
                    this.state = 2090;
                    this.match(CypherParser.SP);
                    this.state = 2091;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 2096;
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
    public oC_XorExpression(): OC_XorExpressionContext {
        let localctx: OC_XorExpressionContext = new OC_XorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 236, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2097;
            this.oC_AndExpression();
            this.state = 2104;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 338, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2098;
                    this.match(CypherParser.SP);
                    this.state = 2099;
                    this.match(CypherParser.XOR);
                    this.state = 2100;
                    this.match(CypherParser.SP);
                    this.state = 2101;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 2106;
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
    public oC_AndExpression(): OC_AndExpressionContext {
        let localctx: OC_AndExpressionContext = new OC_AndExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 238, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2107;
            this.oC_NotExpression();
            this.state = 2114;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 339, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2108;
                    this.match(CypherParser.SP);
                    this.state = 2109;
                    this.match(CypherParser.AND);
                    this.state = 2110;
                    this.match(CypherParser.SP);
                    this.state = 2111;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 2116;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 339, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 2123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===110) {
                {
                {
                this.state = 2117;
                this.match(CypherParser.NOT);
                this.state = 2119;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2118;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2126;
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
            this.state = 2176;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 352, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2128;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2138;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 344, this._ctx) ) {
                case 1:
                    {
                    this.state = 2130;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2129;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2132;
                    this.kU_ComparisonOperator();
                    this.state = 2134;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2133;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2136;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2140;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 2142;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2141;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2144;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 2146;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2145;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2148;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2152;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2153;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2156;
                this.kU_ComparisonOperator();
                this.state = 2158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2157;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2160;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2170;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2162;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===167) {
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
                        if (_la===167) {
                            {
                            this.state = 2165;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2168;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2172;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 351, this._ctx);
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
            this.state = 2178;
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
            this.state = 2180;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 2191;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 355, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2182;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2181;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2184;
                    this.match(CypherParser.T__10);
                    this.state = 2186;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2185;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2188;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 2193;
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
    public kU_BitwiseAndOperatorExpression(): KU_BitwiseAndOperatorExpressionContext {
        let localctx: KU_BitwiseAndOperatorExpressionContext = new KU_BitwiseAndOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 248, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2194;
            this.kU_BitShiftOperatorExpression();
            this.state = 2205;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 358, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2196;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2195;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2198;
                    this.match(CypherParser.T__17);
                    this.state = 2200;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2199;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2202;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 2207;
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
    public kU_BitShiftOperatorExpression(): KU_BitShiftOperatorExpressionContext {
        let localctx: KU_BitShiftOperatorExpressionContext = new KU_BitShiftOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 250, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2208;
            this.oC_AddOrSubtractExpression();
            this.state = 2220;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 361, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2210;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2209;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2212;
                    this.kU_BitShiftOperator();
                    this.state = 2214;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2213;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2216;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 2222;
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
    public kU_BitShiftOperator(): KU_BitShiftOperatorContext {
        let localctx: KU_BitShiftOperatorContext = new KU_BitShiftOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 252, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2223;
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
            this.state = 2225;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 2237;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 364, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2227;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2226;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2229;
                    this.kU_AddOrSubtractOperator();
                    this.state = 2231;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2230;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2233;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 2239;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 364, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 2240;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===150)) {
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
            this.state = 2242;
            this.oC_PowerOfExpression();
            this.state = 2254;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 367, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2244;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2243;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2246;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 2248;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2247;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2250;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 2256;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 367, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 2257;
            _la = this._input.LA(1);
            if(!(_la===22 || _la===23 || _la===147)) {
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
            this.state = 2259;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 2270;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 370, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2261;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2260;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2263;
                    this.match(CypherParser.T__23);
                    this.state = 2265;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2264;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2267;
                    this.oC_UnaryAddSubtractOrFactorialExpression();
                    }
                    }
                }
                this.state = 2272;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 370, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
        this.enterRule(localctx, 264, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===150) {
                {
                {
                this.state = 2273;
                this.match(CypherParser.MINUS);
                this.state = 2275;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2274;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2281;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2282;
            this.oC_StringListNullOperatorExpression();
            this.state = 2287;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 374, this._ctx) ) {
            case 1:
                {
                this.state = 2284;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2283;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2286;
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
        this.enterRule(localctx, 266, CypherParser.RULE_oC_StringListNullOperatorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2289;
            this.oC_PropertyOrLabelsExpression();
            this.state = 2297;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 376, this._ctx) ) {
            case 1:
                {
                this.state = 2290;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 2292;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2291;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2294;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 375, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 2296;
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
            this.state = 2318;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2299;
                this.match(CypherParser.SP);
                this.state = 2300;
                this.match(CypherParser.IN);
                this.state = 2302;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2301;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2304;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2305;
                this.match(CypherParser.T__6);
                this.state = 2306;
                this.oC_Expression();
                this.state = 2307;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2309;
                this.match(CypherParser.T__6);
                this.state = 2311;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765995925) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 2077579423) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 2854685565) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 9741) !== 0)) {
                    {
                    this.state = 2310;
                    this.oC_Expression();
                    }
                }

                this.state = 2313;
                this.match(CypherParser.COLON);
                this.state = 2315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765995925) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 2077579423) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 2854685565) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 9741) !== 0)) {
                    {
                    this.state = 2314;
                    this.oC_Expression();
                    }
                }

                this.state = 2317;
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
            this.state = 2331;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 381, this._ctx) ) {
            case 1:
                {
                this.state = 2320;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 2321;
                this.match(CypherParser.SP);
                this.state = 2322;
                this.match(CypherParser.STARTS);
                this.state = 2323;
                this.match(CypherParser.SP);
                this.state = 2324;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 2325;
                this.match(CypherParser.SP);
                this.state = 2326;
                this.match(CypherParser.ENDS);
                this.state = 2327;
                this.match(CypherParser.SP);
                this.state = 2328;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 2329;
                this.match(CypherParser.SP);
                this.state = 2330;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 2334;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2333;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2336;
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
            this.state = 2339;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2338;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2341;
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
            this.state = 2353;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 384, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2343;
                this.match(CypherParser.SP);
                this.state = 2344;
                this.match(CypherParser.IS);
                this.state = 2345;
                this.match(CypherParser.SP);
                this.state = 2346;
                this.match(CypherParser.NULL);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2347;
                this.match(CypherParser.SP);
                this.state = 2348;
                this.match(CypherParser.IS);
                this.state = 2349;
                this.match(CypherParser.SP);
                this.state = 2350;
                this.match(CypherParser.NOT);
                this.state = 2351;
                this.match(CypherParser.SP);
                this.state = 2352;
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
        this.enterRule(localctx, 276, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2355;
            this.oC_Atom();
            this.state = 2362;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 386, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2357;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2356;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2359;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2364;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 386, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 2374;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 387, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2365;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2366;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2367;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2368;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2369;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2370;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2371;
                this.oC_ExistSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2372;
                this.kU_CountSubquery();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2373;
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
        this.enterRule(localctx, 280, CypherParser.RULE_oC_Literal);
        try {
            this.state = 2382;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2376;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2377;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.FALSE:
            case CypherParser.TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2378;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2379;
                this.match(CypherParser.NULL);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2380;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2381;
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
        this.enterRule(localctx, 282, CypherParser.RULE_oC_BooleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2384;
            _la = this._input.LA(1);
            if(!(_la===85 || _la===136)) {
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
        this.enterRule(localctx, 284, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2386;
            this.match(CypherParser.T__6);
            this.state = 2388;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2387;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2403;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765995925) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 2077579423) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 2854685565) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 9741) !== 0)) {
                {
                this.state = 2390;
                this.oC_Expression();
                this.state = 2392;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2391;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 2394;
                    this.kU_ListEntry();
                    this.state = 2396;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2395;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2402;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2405;
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
        this.enterRule(localctx, 286, CypherParser.RULE_kU_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2407;
            this.match(CypherParser.T__2);
            this.state = 2409;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 394, this._ctx) ) {
            case 1:
                {
                this.state = 2408;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2412;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765995925) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 2077579423) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 2854685565) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 9741) !== 0)) {
                {
                this.state = 2411;
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
        this.enterRule(localctx, 288, CypherParser.RULE_kU_StructLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2414;
            this.match(CypherParser.T__8);
            this.state = 2416;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2415;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2418;
            this.kU_StructField();
            this.state = 2420;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2419;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2432;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 2422;
                this.match(CypherParser.T__2);
                this.state = 2424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2423;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2426;
                this.kU_StructField();
                this.state = 2428;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2427;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2435;
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
        this.enterRule(localctx, 290, CypherParser.RULE_kU_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2439;
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
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2437;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2438;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2442;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2441;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2444;
            this.match(CypherParser.COLON);
            this.state = 2446;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2445;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2448;
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
        this.enterRule(localctx, 292, CypherParser.RULE_oC_ParenthesizedExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2450;
            this.match(CypherParser.T__1);
            this.state = 2452;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2451;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2454;
            this.oC_Expression();
            this.state = 2456;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2455;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2458;
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
        this.enterRule(localctx, 294, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2537;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 425, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2460;
                this.match(CypherParser.COUNT);
                this.state = 2462;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2461;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2464;
                this.match(CypherParser.T__1);
                this.state = 2466;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2465;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2468;
                this.match(CypherParser.STAR);
                this.state = 2470;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2469;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2472;
                this.match(CypherParser.T__3);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2473;
                this.match(CypherParser.CAST);
                this.state = 2475;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2474;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2477;
                this.match(CypherParser.T__1);
                this.state = 2479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2478;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2481;
                this.kU_FunctionParameter();
                this.state = 2483;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2482;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2495;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case CypherParser.AS:
                    {
                    {
                    this.state = 2485;
                    this.match(CypherParser.AS);
                    this.state = 2487;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2486;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2489;
                    this.kU_DataType(0);
                    }
                    }
                    break;
                case CypherParser.T__2:
                    {
                    {
                    this.state = 2490;
                    this.match(CypherParser.T__2);
                    this.state = 2492;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2491;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2494;
                    this.kU_FunctionParameter();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2497;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2500;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2502;
                this.oC_FunctionName();
                this.state = 2504;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2503;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2506;
                this.match(CypherParser.T__1);
                this.state = 2508;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2507;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===76) {
                    {
                    this.state = 2510;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2512;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2511;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2533;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765995925) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 2077579423) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 2854685565) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 9741) !== 0)) {
                    {
                    this.state = 2516;
                    this.kU_FunctionParameter();
                    this.state = 2518;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2517;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2530;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===3) {
                        {
                        {
                        this.state = 2520;
                        this.match(CypherParser.T__2);
                        this.state = 2522;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===167) {
                            {
                            this.state = 2521;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2524;
                        this.kU_FunctionParameter();
                        this.state = 2526;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===167) {
                            {
                            this.state = 2525;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2532;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2535;
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
        this.enterRule(localctx, 296, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2539;
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
        this.enterRule(localctx, 298, CypherParser.RULE_kU_FunctionParameter);
        let _la: number;
        try {
            this.state = 2554;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 429, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2550;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 428, this._ctx) ) {
                case 1:
                    {
                    this.state = 2541;
                    this.oC_SymbolicName();
                    this.state = 2543;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2542;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2545;
                    this.match(CypherParser.COLON);
                    this.state = 2546;
                    this.match(CypherParser.T__5);
                    this.state = 2548;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2547;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 2552;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2553;
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
        this.enterRule(localctx, 300, CypherParser.RULE_kU_LambdaParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2556;
            this.kU_LambdaVars();
            this.state = 2558;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2557;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2560;
            this.match(CypherParser.MINUS);
            this.state = 2561;
            this.match(CypherParser.T__15);
            this.state = 2563;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2562;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2565;
            this.oC_Expression();
            this.state = 2567;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 432, this._ctx) ) {
            case 1:
                {
                this.state = 2566;
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
        this.enterRule(localctx, 302, CypherParser.RULE_kU_LambdaVars);
        let _la: number;
        try {
            this.state = 2593;
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
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2569;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2570;
                this.match(CypherParser.T__1);
                this.state = 2572;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2571;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2574;
                this.oC_SymbolicName();
                this.state = 2576;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2575;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2588;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 2578;
                    this.match(CypherParser.T__2);
                    this.state = 2580;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2579;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2582;
                    this.oC_SymbolicName();
                    this.state = 2584;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2583;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2590;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2591;
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
        this.enterRule(localctx, 304, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2595;
            this.oC_NodePattern();
            this.state = 2600;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2597;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===167) {
                        {
                        this.state = 2596;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2599;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2602;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 440, this._ctx);
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
        this.enterRule(localctx, 306, CypherParser.RULE_oC_ExistSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2604;
            this.match(CypherParser.EXISTS);
            this.state = 2606;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2605;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2608;
            this.match(CypherParser.T__8);
            this.state = 2610;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2609;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2612;
            this.match(CypherParser.MATCH);
            this.state = 2614;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2613;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2616;
            this.oC_Pattern();
            this.state = 2621;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 445, this._ctx) ) {
            case 1:
                {
                this.state = 2618;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2617;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2620;
                this.oC_Where();
                }
                break;
            }
            this.state = 2624;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2623;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2626;
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
        this.enterRule(localctx, 308, CypherParser.RULE_kU_CountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2628;
            this.match(CypherParser.COUNT);
            this.state = 2630;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2629;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2632;
            this.match(CypherParser.T__8);
            this.state = 2634;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2633;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2636;
            this.match(CypherParser.MATCH);
            this.state = 2638;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2637;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2640;
            this.oC_Pattern();
            this.state = 2645;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 451, this._ctx) ) {
            case 1:
                {
                this.state = 2642;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2641;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2644;
                this.oC_Where();
                }
                break;
            }
            this.state = 2648;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2647;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2650;
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
        this.enterRule(localctx, 310, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2652;
            this.match(CypherParser.T__4);
            this.state = 2654;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2653;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2658;
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
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2656;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2657;
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
        this.enterRule(localctx, 312, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2682;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 460, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2660;
                this.match(CypherParser.CASE);
                this.state = 2665;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2662;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===167) {
                            {
                            this.state = 2661;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2664;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2667;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 456, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2669;
                this.match(CypherParser.CASE);
                this.state = 2671;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2670;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2673;
                this.oC_Expression();
                this.state = 2678;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2675;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===167) {
                            {
                            this.state = 2674;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2677;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2680;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 459, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2692;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 463, this._ctx) ) {
            case 1:
                {
                this.state = 2685;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2684;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2687;
                this.match(CypherParser.ELSE);
                this.state = 2689;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===167) {
                    {
                    this.state = 2688;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2691;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2695;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2694;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2697;
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
        this.enterRule(localctx, 314, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2699;
            this.match(CypherParser.WHEN);
            this.state = 2701;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2700;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2703;
            this.oC_Expression();
            this.state = 2705;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2704;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2707;
            this.match(CypherParser.THEN);
            this.state = 2709;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2708;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2711;
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
        this.enterRule(localctx, 316, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2713;
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
        this.enterRule(localctx, 318, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 2717;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2715;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2716;
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
        this.enterRule(localctx, 320, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2719;
            this.match(CypherParser.T__25);
            this.state = 2722;
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
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2720;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2721;
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
        this.enterRule(localctx, 322, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2724;
            this.oC_Atom();
            this.state = 2726;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===167) {
                {
                this.state = 2725;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2728;
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
        this.enterRule(localctx, 324, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2730;
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
        this.enterRule(localctx, 326, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2732;
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
        this.enterRule(localctx, 328, CypherParser.RULE_oC_DoubleLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2734;
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
        this.enterRule(localctx, 330, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2736;
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
        this.enterRule(localctx, 332, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 2743;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2738;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2739;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2741;
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
            case CypherParser.L_SKIP:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2742;
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
        this.enterRule(localctx, 334, CypherParser.RULE_kU_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2745;
            _la = this._input.LA(1);
            if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2765989781) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 233483335) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 707070845) !== 0))) {
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
        this.enterRule(localctx, 336, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2747;
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
        this.enterRule(localctx, 338, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2749;
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
        this.enterRule(localctx, 340, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2751;
            _la = this._input.LA(1);
            if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2047) !== 0) || _la===150)) {
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
        case 78:
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
        4,1,170,2754,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        2,170,7,170,1,0,1,0,3,0,345,8,0,1,0,1,0,3,0,349,8,0,1,0,5,0,352,
        8,0,10,0,12,0,355,9,0,1,0,3,0,358,8,0,1,0,1,0,1,1,3,1,363,8,1,1,
        1,3,1,366,8,1,1,1,1,1,3,1,370,8,1,1,1,3,1,373,8,1,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,3,2,397,8,2,1,3,1,3,1,3,1,3,3,3,403,8,3,1,3,1,3,3,3,407,
        8,3,1,3,3,3,410,8,3,1,3,1,3,1,3,1,3,3,3,416,8,3,1,3,3,3,419,8,3,
        1,4,1,4,3,4,423,8,4,1,4,1,4,3,4,427,8,4,1,4,1,4,3,4,431,8,4,1,4,
        5,4,434,8,4,10,4,12,4,437,9,4,1,4,3,4,440,8,4,1,4,1,4,1,5,1,5,1,
        5,3,5,447,8,5,1,5,1,5,3,5,451,8,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,459,
        8,5,1,5,1,5,3,5,463,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,473,
        8,6,1,6,1,6,3,6,477,8,6,1,6,1,6,3,6,481,8,6,1,6,5,6,484,8,6,10,6,
        12,6,487,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,499,8,7,
        1,7,1,7,3,7,503,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,511,8,7,1,7,3,7,
        514,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,522,8,8,1,8,3,8,525,8,8,1,9,
        1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,540,
        8,10,1,10,1,10,1,10,3,10,545,8,10,1,10,1,10,1,10,1,10,3,10,551,8,
        10,1,10,1,10,3,10,555,8,10,1,10,3,10,558,8,10,1,10,3,10,561,8,10,
        1,10,1,10,1,11,1,11,3,11,567,8,11,1,11,1,11,3,11,571,8,11,1,11,1,
        11,1,12,1,12,3,12,577,8,12,1,12,1,12,3,12,581,8,12,1,12,5,12,584,
        8,12,10,12,12,12,587,9,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,
        1,15,1,15,1,15,1,15,3,15,601,8,15,1,15,1,15,3,15,605,8,15,1,15,1,
        15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
        17,1,17,1,17,1,17,1,17,1,17,3,17,627,8,17,1,17,1,17,3,17,631,8,17,
        1,17,3,17,634,8,17,1,17,3,17,637,8,17,1,17,3,17,640,8,17,1,17,3,
        17,643,8,17,1,17,1,17,3,17,647,8,17,1,17,5,17,650,8,17,10,17,12,
        17,653,9,17,1,17,3,17,656,8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,
        1,18,3,18,666,8,18,1,18,1,18,3,18,670,8,18,1,18,5,18,673,8,18,10,
        18,12,18,676,9,18,1,19,1,19,3,19,680,8,19,1,19,1,19,1,19,3,19,685,
        8,19,1,19,1,19,1,20,1,20,3,20,691,8,20,1,20,1,20,3,20,695,8,20,1,
        20,1,20,3,20,699,8,20,1,20,5,20,702,8,20,10,20,12,20,705,9,20,1,
        20,1,20,1,20,1,20,3,20,711,8,20,1,20,1,20,3,20,715,8,20,1,20,1,20,
        3,20,719,8,20,1,20,3,20,722,8,20,1,21,1,21,3,21,726,8,21,1,21,1,
        21,3,21,730,8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,
        23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,749,8,23,1,23,1,23,3,
        23,753,8,23,1,23,1,23,3,23,757,8,23,1,23,1,23,3,23,761,8,23,1,23,
        1,23,3,23,765,8,23,1,23,1,23,1,23,3,23,770,8,23,1,23,1,23,1,24,1,
        24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,783,8,24,1,24,1,24,3,
        24,787,8,24,1,24,1,24,3,24,791,8,24,1,24,1,24,3,24,795,8,24,1,24,
        1,24,3,24,799,8,24,1,24,1,24,3,24,803,8,24,3,24,805,8,24,1,24,1,
        24,3,24,809,8,24,1,24,1,24,3,24,813,8,24,3,24,815,8,24,1,24,1,24,
        1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,830,
        8,25,1,25,1,25,3,25,834,8,25,1,25,1,25,3,25,838,8,25,1,25,1,25,3,
        25,842,8,25,1,25,1,25,3,25,846,8,25,1,25,4,25,849,8,25,11,25,12,
        25,850,1,25,3,25,854,8,25,1,25,1,25,3,25,858,8,25,1,25,1,25,3,25,
        862,8,25,3,25,864,8,25,1,25,1,25,3,25,868,8,25,1,25,1,25,3,25,872,
        8,25,3,25,874,8,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
        1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,893,8,27,1,27,1,27,
        1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,904,8,28,1,28,1,28,1,28,
        5,28,909,8,28,10,28,12,28,912,9,28,1,29,1,29,1,29,1,29,1,29,1,29,
        1,29,1,29,1,29,1,29,3,29,924,8,29,1,30,1,30,1,30,1,30,1,30,3,30,
        931,8,30,1,31,1,31,1,31,1,31,3,31,937,8,31,1,31,3,31,940,8,31,1,
        31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,950,8,32,1,32,3,32,953,
        8,32,1,33,1,33,1,33,1,33,1,33,1,33,3,33,961,8,33,1,33,3,33,964,8,
        33,1,34,1,34,1,34,1,34,3,34,970,8,34,1,34,3,34,973,8,34,1,34,1,34,
        1,35,1,35,3,35,979,8,35,1,35,1,35,1,36,1,36,1,36,1,36,1,37,1,37,
        1,37,1,37,1,37,1,37,1,37,3,37,994,8,37,1,37,1,37,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,3,39,1010,8,39,1,40,
        1,40,1,40,1,40,1,40,1,40,1,40,3,40,1019,8,40,1,41,1,41,1,41,1,41,
        1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,1,45,1,45,3,45,1045,8,45,1,45,1,45,3,45,
        1049,8,45,1,45,5,45,1052,8,45,10,45,12,45,1055,9,45,1,46,1,46,1,
        46,1,46,1,47,1,47,3,47,1063,8,47,1,47,1,47,3,47,1067,8,47,1,47,5,
        47,1070,8,47,10,47,12,47,1073,9,47,1,48,1,48,1,48,1,48,1,48,3,48,
        1080,8,48,1,49,1,49,1,49,1,49,3,49,1086,8,49,1,49,1,49,3,49,1090,
        8,49,1,49,1,49,3,49,1094,8,49,1,49,1,49,1,50,1,50,1,50,1,50,3,50,
        1102,8,50,1,50,1,50,3,50,1106,8,50,1,50,1,50,3,50,1110,8,50,1,50,
        1,50,1,50,1,50,3,50,1116,8,50,1,50,1,50,3,50,1120,8,50,1,50,1,50,
        3,50,1124,8,50,1,50,1,50,1,50,1,50,3,50,1130,8,50,1,50,1,50,3,50,
        1134,8,50,1,50,1,50,3,50,1138,8,50,1,50,1,50,3,50,1142,8,50,1,50,
        1,50,3,50,1146,8,50,1,50,1,50,1,50,1,50,3,50,1152,8,50,1,50,1,50,
        3,50,1156,8,50,1,50,1,50,3,50,1160,8,50,1,50,1,50,3,50,1164,8,50,
        1,50,1,50,3,50,1168,8,50,1,50,1,50,3,50,1172,8,50,1,50,1,50,5,50,
        1176,8,50,10,50,12,50,1179,9,50,1,51,1,51,5,51,1183,8,51,10,51,12,
        51,1186,9,51,1,52,1,52,3,52,1190,8,52,1,52,1,52,1,53,1,53,3,53,1196,
        8,53,1,54,1,54,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
        1,56,1,56,1,56,1,56,1,56,3,56,1215,8,56,1,57,1,57,3,57,1219,8,57,
        1,58,1,58,1,58,1,58,1,58,1,58,3,58,1227,8,58,1,59,1,59,1,59,1,59,
        1,60,1,60,3,60,1235,8,60,3,60,1237,8,60,1,60,1,60,1,61,1,61,1,61,
        1,61,1,61,1,61,3,61,1247,8,61,1,61,1,61,3,61,1251,8,61,1,61,1,61,
        3,61,1255,8,61,1,61,1,61,1,62,1,62,3,62,1261,8,62,1,62,1,62,3,62,
        1265,8,62,1,62,5,62,1268,8,62,10,62,12,62,1271,9,62,1,63,1,63,3,
        63,1275,8,63,1,63,5,63,1278,8,63,10,63,12,63,1281,9,63,1,63,1,63,
        3,63,1285,8,63,4,63,1287,8,63,11,63,12,63,1288,1,63,1,63,1,63,3,
        63,1294,8,63,1,64,1,64,1,64,1,64,3,64,1300,8,64,1,64,1,64,1,64,3,
        64,1305,8,64,1,64,3,64,1308,8,64,1,65,1,65,3,65,1312,8,65,1,66,1,
        66,3,66,1316,8,66,5,66,1318,8,66,10,66,12,66,1321,9,66,1,66,1,66,
        1,66,3,66,1326,8,66,5,66,1328,8,66,10,66,12,66,1331,9,66,1,66,1,
        66,3,66,1335,8,66,1,66,5,66,1338,8,66,10,66,12,66,1341,9,66,1,66,
        3,66,1344,8,66,1,66,3,66,1347,8,66,1,66,1,66,3,66,1351,8,66,4,66,
        1353,8,66,11,66,12,66,1354,1,66,1,66,3,66,1359,8,66,1,67,1,67,3,
        67,1363,8,67,4,67,1365,8,67,11,67,12,67,1366,1,67,1,67,1,68,1,68,
        3,68,1373,8,68,5,68,1375,8,68,10,68,12,68,1378,9,68,1,68,1,68,3,
        68,1382,8,68,5,68,1384,8,68,10,68,12,68,1387,9,68,1,68,1,68,1,69,
        1,69,1,69,1,69,3,69,1395,8,69,1,70,1,70,1,70,1,70,3,70,1401,8,70,
        1,71,1,71,1,71,1,71,1,71,1,71,3,71,1409,8,71,1,71,1,71,3,71,1413,
        8,71,1,71,1,71,3,71,1417,8,71,1,71,1,71,3,71,1421,8,71,1,71,1,71,
        1,71,1,71,1,71,3,71,1428,8,71,1,71,3,71,1431,8,71,1,71,3,71,1434,
        8,71,1,71,3,71,1437,8,71,1,72,1,72,3,72,1441,8,72,3,72,1443,8,72,
        1,72,1,72,1,72,1,72,3,72,1449,8,72,1,72,3,72,1452,8,72,1,73,1,73,
        3,73,1456,8,73,1,73,1,73,3,73,1460,8,73,1,73,1,73,3,73,1464,8,73,
        1,73,1,73,3,73,1468,8,73,1,74,1,74,3,74,1472,8,74,1,74,1,74,3,74,
        1476,8,74,1,74,5,74,1479,8,74,10,74,12,74,1482,9,74,1,75,1,75,1,
        75,3,75,1487,8,75,1,75,1,75,3,75,1491,8,75,1,76,1,76,3,76,1495,8,
        76,1,76,1,76,3,76,1499,8,76,1,76,1,76,1,76,3,76,1504,8,76,1,76,1,
        76,3,76,1508,8,76,1,77,1,77,1,77,1,77,1,78,1,78,1,78,3,78,1517,8,
        78,1,78,1,78,3,78,1521,8,78,1,78,1,78,1,78,3,78,1526,8,78,1,78,1,
        78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,4,78,1538,8,78,11,78,
        12,78,1539,5,78,1542,8,78,10,78,12,78,1545,9,78,1,79,1,79,3,79,1549,
        8,79,1,79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,3,80,1559,8,80,1,80,
        1,80,1,81,1,81,3,81,1565,8,81,1,81,1,81,1,81,5,81,1570,8,81,10,81,
        12,81,1573,9,81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,
        3,82,1585,8,82,1,83,1,83,3,83,1589,8,83,1,83,1,83,3,83,1593,8,83,
        1,83,1,83,3,83,1597,8,83,1,83,5,83,1600,8,83,10,83,12,83,1603,9,
        83,1,84,1,84,3,84,1607,8,84,1,84,1,84,3,84,1611,8,84,1,84,1,84,1,
        85,1,85,3,85,1617,8,85,1,85,1,85,3,85,1621,8,85,1,85,1,85,3,85,1625,
        8,85,1,85,1,85,3,85,1629,8,85,1,85,5,85,1632,8,85,10,85,12,85,1635,
        9,85,1,86,1,86,1,86,3,86,1640,8,86,1,86,3,86,1643,8,86,1,87,1,87,
        1,87,1,88,3,88,1649,8,88,1,88,3,88,1652,8,88,1,88,1,88,1,88,1,88,
        3,88,1658,8,88,1,88,1,88,3,88,1662,8,88,1,88,1,88,3,88,1666,8,88,
        1,89,1,89,3,89,1670,8,89,1,89,1,89,3,89,1674,8,89,1,89,5,89,1677,
        8,89,10,89,12,89,1680,9,89,1,89,1,89,3,89,1684,8,89,1,89,1,89,3,
        89,1688,8,89,1,89,5,89,1691,8,89,10,89,12,89,1694,9,89,3,89,1696,
        8,89,1,90,1,90,1,90,1,90,1,90,1,90,1,90,3,90,1705,8,90,1,91,1,91,
        1,91,1,91,1,91,1,91,1,91,3,91,1714,8,91,1,91,5,91,1717,8,91,10,91,
        12,91,1720,9,91,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,94,1,94,
        3,94,1732,8,94,1,94,3,94,1735,8,94,1,95,1,95,1,95,1,95,1,96,1,96,
        3,96,1743,8,96,1,96,1,96,3,96,1747,8,96,1,96,5,96,1750,8,96,10,96,
        12,96,1753,9,96,1,97,1,97,3,97,1757,8,97,1,97,1,97,3,97,1761,8,97,
        1,97,1,97,1,97,3,97,1766,8,97,1,98,1,98,1,99,1,99,3,99,1772,8,99,
        1,99,5,99,1775,8,99,10,99,12,99,1778,9,99,1,99,1,99,1,99,1,99,3,
        99,1784,8,99,1,100,1,100,3,100,1788,8,100,1,100,1,100,3,100,1792,
        8,100,3,100,1794,8,100,1,100,1,100,3,100,1798,8,100,3,100,1800,8,
        100,1,100,1,100,3,100,1804,8,100,3,100,1806,8,100,1,100,1,100,1,
        101,1,101,3,101,1812,8,101,1,101,1,101,1,102,1,102,3,102,1818,8,
        102,1,102,1,102,3,102,1822,8,102,1,102,3,102,1825,8,102,1,102,3,
        102,1828,8,102,1,102,1,102,1,102,1,102,3,102,1834,8,102,1,102,3,
        102,1837,8,102,1,102,3,102,1840,8,102,1,102,1,102,3,102,1844,8,102,
        1,102,1,102,1,102,1,102,3,102,1850,8,102,1,102,3,102,1853,8,102,
        1,102,3,102,1856,8,102,1,102,1,102,3,102,1860,8,102,1,103,1,103,
        3,103,1864,8,103,1,103,1,103,3,103,1868,8,103,3,103,1870,8,103,1,
        103,1,103,3,103,1874,8,103,3,103,1876,8,103,1,103,1,103,3,103,1880,
        8,103,3,103,1882,8,103,1,103,1,103,3,103,1886,8,103,3,103,1888,8,
        103,1,103,1,103,1,104,1,104,3,104,1894,8,104,1,104,1,104,3,104,1898,
        8,104,1,104,1,104,3,104,1902,8,104,1,104,1,104,3,104,1906,8,104,
        1,104,1,104,3,104,1910,8,104,1,104,1,104,3,104,1914,8,104,1,104,
        1,104,3,104,1918,8,104,1,104,1,104,3,104,1922,8,104,5,104,1924,8,
        104,10,104,12,104,1927,9,104,3,104,1929,8,104,1,104,1,104,1,105,
        1,105,3,105,1935,8,105,1,105,1,105,3,105,1939,8,105,1,105,1,105,
        3,105,1943,8,105,1,105,3,105,1946,8,105,1,105,5,105,1949,8,105,10,
        105,12,105,1952,9,105,1,106,1,106,3,106,1956,8,106,1,106,5,106,1959,
        8,106,10,106,12,106,1962,9,106,1,107,1,107,3,107,1966,8,107,1,107,
        1,107,1,108,1,108,3,108,1972,8,108,1,108,1,108,1,108,1,108,3,108,
        1978,8,108,1,108,3,108,1981,8,108,1,108,3,108,1984,8,108,1,108,3,
        108,1987,8,108,1,108,1,108,3,108,1991,8,108,1,108,3,108,1994,8,108,
        1,108,3,108,1997,8,108,1,108,3,108,2000,8,108,1,108,3,108,2003,8,
        108,1,109,1,109,3,109,2007,8,109,1,109,1,109,3,109,2011,8,109,1,
        109,1,109,3,109,2015,8,109,1,109,1,109,3,109,2019,8,109,1,109,1,
        109,3,109,2023,8,109,1,109,1,109,3,109,2027,8,109,3,109,2029,8,109,
        1,109,3,109,2032,8,109,1,109,1,109,3,109,2036,8,109,1,109,1,109,
        3,109,2040,8,109,1,109,1,109,3,109,2044,8,109,1,109,1,109,3,109,
        2048,8,109,3,109,2050,8,109,1,109,1,109,1,110,1,110,3,110,2056,8,
        110,1,110,3,110,2059,8,110,1,110,3,110,2062,8,110,1,110,1,110,1,
        111,1,111,3,111,2068,8,111,1,111,3,111,2071,8,111,1,111,3,111,2074,
        8,111,1,111,1,111,1,112,1,112,1,113,1,113,1,114,1,114,1,115,1,115,
        1,116,1,116,1,117,1,117,1,117,1,117,1,117,5,117,2093,8,117,10,117,
        12,117,2096,9,117,1,118,1,118,1,118,1,118,1,118,5,118,2103,8,118,
        10,118,12,118,2106,9,118,1,119,1,119,1,119,1,119,1,119,5,119,2113,
        8,119,10,119,12,119,2116,9,119,1,120,1,120,3,120,2120,8,120,5,120,
        2122,8,120,10,120,12,120,2125,9,120,1,120,1,120,1,121,1,121,3,121,
        2131,8,121,1,121,1,121,3,121,2135,8,121,1,121,1,121,3,121,2139,8,
        121,1,121,1,121,3,121,2143,8,121,1,121,1,121,3,121,2147,8,121,1,
        121,1,121,1,121,1,121,1,121,1,121,3,121,2155,8,121,1,121,1,121,3,
        121,2159,8,121,1,121,1,121,3,121,2163,8,121,1,121,1,121,3,121,2167,
        8,121,1,121,1,121,4,121,2171,8,121,11,121,12,121,2172,1,121,1,121,
        3,121,2177,8,121,1,122,1,122,1,123,1,123,3,123,2183,8,123,1,123,
        1,123,3,123,2187,8,123,1,123,5,123,2190,8,123,10,123,12,123,2193,
        9,123,1,124,1,124,3,124,2197,8,124,1,124,1,124,3,124,2201,8,124,
        1,124,5,124,2204,8,124,10,124,12,124,2207,9,124,1,125,1,125,3,125,
        2211,8,125,1,125,1,125,3,125,2215,8,125,1,125,1,125,5,125,2219,8,
        125,10,125,12,125,2222,9,125,1,126,1,126,1,127,1,127,3,127,2228,
        8,127,1,127,1,127,3,127,2232,8,127,1,127,1,127,5,127,2236,8,127,
        10,127,12,127,2239,9,127,1,128,1,128,1,129,1,129,3,129,2245,8,129,
        1,129,1,129,3,129,2249,8,129,1,129,1,129,5,129,2253,8,129,10,129,
        12,129,2256,9,129,1,130,1,130,1,131,1,131,3,131,2262,8,131,1,131,
        1,131,3,131,2266,8,131,1,131,5,131,2269,8,131,10,131,12,131,2272,
        9,131,1,132,1,132,3,132,2276,8,132,5,132,2278,8,132,10,132,12,132,
        2281,9,132,1,132,1,132,3,132,2285,8,132,1,132,3,132,2288,8,132,1,
        133,1,133,1,133,4,133,2293,8,133,11,133,12,133,2294,1,133,3,133,
        2298,8,133,1,134,1,134,1,134,3,134,2303,8,134,1,134,1,134,1,134,
        1,134,1,134,1,134,1,134,3,134,2312,8,134,1,134,1,134,3,134,2316,
        8,134,1,134,3,134,2319,8,134,1,135,1,135,1,135,1,135,1,135,1,135,
        1,135,1,135,1,135,1,135,1,135,3,135,2332,8,135,1,135,3,135,2335,
        8,135,1,135,1,135,1,136,3,136,2340,8,136,1,136,1,136,1,137,1,137,
        1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,3,137,2354,8,137,
        1,138,1,138,3,138,2358,8,138,1,138,5,138,2361,8,138,10,138,12,138,
        2364,9,138,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,
        3,139,2375,8,139,1,140,1,140,1,140,1,140,1,140,1,140,3,140,2383,
        8,140,1,141,1,141,1,142,1,142,3,142,2389,8,142,1,142,1,142,3,142,
        2393,8,142,1,142,1,142,3,142,2397,8,142,5,142,2399,8,142,10,142,
        12,142,2402,9,142,3,142,2404,8,142,1,142,1,142,1,143,1,143,3,143,
        2410,8,143,1,143,3,143,2413,8,143,1,144,1,144,3,144,2417,8,144,1,
        144,1,144,3,144,2421,8,144,1,144,1,144,3,144,2425,8,144,1,144,1,
        144,3,144,2429,8,144,5,144,2431,8,144,10,144,12,144,2434,9,144,1,
        144,1,144,1,145,1,145,3,145,2440,8,145,1,145,3,145,2443,8,145,1,
        145,1,145,3,145,2447,8,145,1,145,1,145,1,146,1,146,3,146,2453,8,
        146,1,146,1,146,3,146,2457,8,146,1,146,1,146,1,147,1,147,3,147,2463,
        8,147,1,147,1,147,3,147,2467,8,147,1,147,1,147,3,147,2471,8,147,
        1,147,1,147,1,147,3,147,2476,8,147,1,147,1,147,3,147,2480,8,147,
        1,147,1,147,3,147,2484,8,147,1,147,1,147,3,147,2488,8,147,1,147,
        1,147,1,147,3,147,2493,8,147,1,147,3,147,2496,8,147,1,147,3,147,
        2499,8,147,1,147,1,147,1,147,1,147,3,147,2505,8,147,1,147,1,147,
        3,147,2509,8,147,1,147,1,147,3,147,2513,8,147,3,147,2515,8,147,1,
        147,1,147,3,147,2519,8,147,1,147,1,147,3,147,2523,8,147,1,147,1,
        147,3,147,2527,8,147,5,147,2529,8,147,10,147,12,147,2532,9,147,3,
        147,2534,8,147,1,147,1,147,3,147,2538,8,147,1,148,1,148,1,149,1,
        149,3,149,2544,8,149,1,149,1,149,1,149,3,149,2549,8,149,3,149,2551,
        8,149,1,149,1,149,3,149,2555,8,149,1,150,1,150,3,150,2559,8,150,
        1,150,1,150,1,150,3,150,2564,8,150,1,150,1,150,3,150,2568,8,150,
        1,151,1,151,1,151,3,151,2573,8,151,1,151,1,151,3,151,2577,8,151,
        1,151,1,151,3,151,2581,8,151,1,151,1,151,3,151,2585,8,151,5,151,
        2587,8,151,10,151,12,151,2590,9,151,1,151,1,151,3,151,2594,8,151,
        1,152,1,152,3,152,2598,8,152,1,152,4,152,2601,8,152,11,152,12,152,
        2602,1,153,1,153,3,153,2607,8,153,1,153,1,153,3,153,2611,8,153,1,
        153,1,153,3,153,2615,8,153,1,153,1,153,3,153,2619,8,153,1,153,3,
        153,2622,8,153,1,153,3,153,2625,8,153,1,153,1,153,1,154,1,154,3,
        154,2631,8,154,1,154,1,154,3,154,2635,8,154,1,154,1,154,3,154,2639,
        8,154,1,154,1,154,3,154,2643,8,154,1,154,3,154,2646,8,154,1,154,
        3,154,2649,8,154,1,154,1,154,1,155,1,155,3,155,2655,8,155,1,155,
        1,155,3,155,2659,8,155,1,156,1,156,3,156,2663,8,156,1,156,4,156,
        2666,8,156,11,156,12,156,2667,1,156,1,156,3,156,2672,8,156,1,156,
        1,156,3,156,2676,8,156,1,156,4,156,2679,8,156,11,156,12,156,2680,
        3,156,2683,8,156,1,156,3,156,2686,8,156,1,156,1,156,3,156,2690,8,
        156,1,156,3,156,2693,8,156,1,156,3,156,2696,8,156,1,156,1,156,1,
        157,1,157,3,157,2702,8,157,1,157,1,157,3,157,2706,8,157,1,157,1,
        157,3,157,2710,8,157,1,157,1,157,1,158,1,158,1,159,1,159,3,159,2718,
        8,159,1,160,1,160,1,160,3,160,2723,8,160,1,161,1,161,3,161,2727,
        8,161,1,161,1,161,1,162,1,162,1,163,1,163,1,164,1,164,1,165,1,165,
        1,166,1,166,1,166,1,166,1,166,3,166,2744,8,166,1,167,1,167,1,168,
        1,168,1,169,1,169,1,170,1,170,1,170,0,2,100,156,171,0,2,4,6,8,10,
        12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
        56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,
        100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,
        132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,
        164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,
        196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,
        228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,
        260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,
        292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,
        324,326,328,330,332,334,336,338,340,0,11,3,0,120,120,127,127,132,
        132,2,0,51,52,73,74,2,0,6,6,13,17,1,0,19,20,2,0,21,21,150,150,2,
        0,22,23,147,147,2,0,85,85,136,136,30,0,46,46,48,48,50,50,53,56,59,
        59,61,62,64,66,68,69,72,72,75,75,77,77,82,84,88,88,92,93,95,95,97,
        97,99,99,101,101,103,106,108,109,119,119,121,125,127,128,130,130,
        135,135,137,137,140,140,144,144,146,146,148,148,2,0,14,14,27,30,
        2,0,16,16,31,34,2,0,35,45,150,150,3116,0,342,1,0,0,0,2,362,1,0,0,
        0,4,396,1,0,0,0,6,398,1,0,0,0,8,420,1,0,0,0,10,462,1,0,0,0,12,464,
        1,0,0,0,14,494,1,0,0,0,16,515,1,0,0,0,18,526,1,0,0,0,20,532,1,0,
        0,0,22,564,1,0,0,0,24,574,1,0,0,0,26,588,1,0,0,0,28,592,1,0,0,0,
        30,596,1,0,0,0,32,608,1,0,0,0,34,620,1,0,0,0,36,663,1,0,0,0,38,677,
        1,0,0,0,40,721,1,0,0,0,42,723,1,0,0,0,44,733,1,0,0,0,46,739,1,0,
        0,0,48,773,1,0,0,0,50,818,1,0,0,0,52,877,1,0,0,0,54,885,1,0,0,0,
        56,896,1,0,0,0,58,913,1,0,0,0,60,930,1,0,0,0,62,932,1,0,0,0,64,952,
        1,0,0,0,66,963,1,0,0,0,68,965,1,0,0,0,70,978,1,0,0,0,72,982,1,0,
        0,0,74,986,1,0,0,0,76,997,1,0,0,0,78,1009,1,0,0,0,80,1011,1,0,0,
        0,82,1020,1,0,0,0,84,1024,1,0,0,0,86,1028,1,0,0,0,88,1034,1,0,0,
        0,90,1042,1,0,0,0,92,1056,1,0,0,0,94,1060,1,0,0,0,96,1074,1,0,0,
        0,98,1081,1,0,0,0,100,1171,1,0,0,0,102,1180,1,0,0,0,104,1187,1,0,
        0,0,106,1195,1,0,0,0,108,1197,1,0,0,0,110,1199,1,0,0,0,112,1214,
        1,0,0,0,114,1218,1,0,0,0,116,1220,1,0,0,0,118,1228,1,0,0,0,120,1236,
        1,0,0,0,122,1240,1,0,0,0,124,1258,1,0,0,0,126,1293,1,0,0,0,128,1307,
        1,0,0,0,130,1311,1,0,0,0,132,1358,1,0,0,0,134,1364,1,0,0,0,136,1376,
        1,0,0,0,138,1394,1,0,0,0,140,1400,1,0,0,0,142,1402,1,0,0,0,144,1442,
        1,0,0,0,146,1453,1,0,0,0,148,1469,1,0,0,0,150,1483,1,0,0,0,152,1494,
        1,0,0,0,154,1509,1,0,0,0,156,1525,1,0,0,0,158,1546,1,0,0,0,160,1556,
        1,0,0,0,162,1562,1,0,0,0,164,1584,1,0,0,0,166,1586,1,0,0,0,168,1604,
        1,0,0,0,170,1616,1,0,0,0,172,1636,1,0,0,0,174,1644,1,0,0,0,176,1651,
        1,0,0,0,178,1695,1,0,0,0,180,1704,1,0,0,0,182,1706,1,0,0,0,184,1721,
        1,0,0,0,186,1725,1,0,0,0,188,1729,1,0,0,0,190,1736,1,0,0,0,192,1740,
        1,0,0,0,194,1765,1,0,0,0,196,1767,1,0,0,0,198,1783,1,0,0,0,200,1785,
        1,0,0,0,202,1809,1,0,0,0,204,1859,1,0,0,0,206,1861,1,0,0,0,208,1891,
        1,0,0,0,210,1932,1,0,0,0,212,1953,1,0,0,0,214,1963,1,0,0,0,216,1969,
        1,0,0,0,218,2004,1,0,0,0,220,2053,1,0,0,0,222,2065,1,0,0,0,224,2077,
        1,0,0,0,226,2079,1,0,0,0,228,2081,1,0,0,0,230,2083,1,0,0,0,232,2085,
        1,0,0,0,234,2087,1,0,0,0,236,2097,1,0,0,0,238,2107,1,0,0,0,240,2123,
        1,0,0,0,242,2176,1,0,0,0,244,2178,1,0,0,0,246,2180,1,0,0,0,248,2194,
        1,0,0,0,250,2208,1,0,0,0,252,2223,1,0,0,0,254,2225,1,0,0,0,256,2240,
        1,0,0,0,258,2242,1,0,0,0,260,2257,1,0,0,0,262,2259,1,0,0,0,264,2279,
        1,0,0,0,266,2289,1,0,0,0,268,2318,1,0,0,0,270,2331,1,0,0,0,272,2339,
        1,0,0,0,274,2353,1,0,0,0,276,2355,1,0,0,0,278,2374,1,0,0,0,280,2382,
        1,0,0,0,282,2384,1,0,0,0,284,2386,1,0,0,0,286,2407,1,0,0,0,288,2414,
        1,0,0,0,290,2439,1,0,0,0,292,2450,1,0,0,0,294,2537,1,0,0,0,296,2539,
        1,0,0,0,298,2554,1,0,0,0,300,2556,1,0,0,0,302,2593,1,0,0,0,304,2595,
        1,0,0,0,306,2604,1,0,0,0,308,2628,1,0,0,0,310,2652,1,0,0,0,312,2682,
        1,0,0,0,314,2699,1,0,0,0,316,2713,1,0,0,0,318,2717,1,0,0,0,320,2719,
        1,0,0,0,322,2724,1,0,0,0,324,2730,1,0,0,0,326,2732,1,0,0,0,328,2734,
        1,0,0,0,330,2736,1,0,0,0,332,2743,1,0,0,0,334,2745,1,0,0,0,336,2747,
        1,0,0,0,338,2749,1,0,0,0,340,2751,1,0,0,0,342,353,3,2,1,0,343,345,
        5,167,0,0,344,343,1,0,0,0,344,345,1,0,0,0,345,346,1,0,0,0,346,348,
        5,1,0,0,347,349,5,167,0,0,348,347,1,0,0,0,348,349,1,0,0,0,349,350,
        1,0,0,0,350,352,3,2,1,0,351,344,1,0,0,0,352,355,1,0,0,0,353,351,
        1,0,0,0,353,354,1,0,0,0,354,357,1,0,0,0,355,353,1,0,0,0,356,358,
        5,167,0,0,357,356,1,0,0,0,357,358,1,0,0,0,358,359,1,0,0,0,359,360,
        5,0,0,1,360,1,1,0,0,0,361,363,3,106,53,0,362,361,1,0,0,0,362,363,
        1,0,0,0,363,365,1,0,0,0,364,366,5,167,0,0,365,364,1,0,0,0,365,366,
        1,0,0,0,366,367,1,0,0,0,367,372,3,4,2,0,368,370,5,167,0,0,369,368,
        1,0,0,0,369,370,1,0,0,0,370,371,1,0,0,0,371,373,5,1,0,0,372,369,
        1,0,0,0,372,373,1,0,0,0,373,3,1,0,0,0,374,397,3,120,60,0,375,397,
        3,46,23,0,376,397,3,48,24,0,377,397,3,50,25,0,378,397,3,54,27,0,
        379,397,3,56,28,0,380,397,3,58,29,0,381,397,3,74,37,0,382,397,3,
        76,38,0,383,397,3,6,3,0,384,397,3,12,6,0,385,397,3,14,7,0,386,397,
        3,30,15,0,387,397,3,34,17,0,388,397,3,32,16,0,389,397,3,112,56,0,
        390,397,3,114,57,0,391,397,3,16,8,0,392,397,3,18,9,0,393,397,3,20,
        10,0,394,397,3,26,13,0,395,397,3,28,14,0,396,374,1,0,0,0,396,375,
        1,0,0,0,396,376,1,0,0,0,396,377,1,0,0,0,396,378,1,0,0,0,396,379,
        1,0,0,0,396,380,1,0,0,0,396,381,1,0,0,0,396,382,1,0,0,0,396,383,
        1,0,0,0,396,384,1,0,0,0,396,385,1,0,0,0,396,386,1,0,0,0,396,387,
        1,0,0,0,396,388,1,0,0,0,396,389,1,0,0,0,396,390,1,0,0,0,396,391,
        1,0,0,0,396,392,1,0,0,0,396,393,1,0,0,0,396,394,1,0,0,0,396,395,
        1,0,0,0,397,5,1,0,0,0,398,399,5,65,0,0,399,400,5,167,0,0,400,409,
        3,330,165,0,401,403,5,167,0,0,402,401,1,0,0,0,402,403,1,0,0,0,403,
        404,1,0,0,0,404,406,3,8,4,0,405,407,5,167,0,0,406,405,1,0,0,0,406,
        407,1,0,0,0,407,410,1,0,0,0,408,410,5,167,0,0,409,402,1,0,0,0,409,
        408,1,0,0,0,410,411,1,0,0,0,411,412,5,86,0,0,412,413,5,167,0,0,413,
        418,3,10,5,0,414,416,5,167,0,0,415,414,1,0,0,0,415,416,1,0,0,0,416,
        417,1,0,0,0,417,419,3,42,21,0,418,415,1,0,0,0,418,419,1,0,0,0,419,
        7,1,0,0,0,420,422,5,2,0,0,421,423,5,167,0,0,422,421,1,0,0,0,422,
        423,1,0,0,0,423,424,1,0,0,0,424,435,3,330,165,0,425,427,5,167,0,
        0,426,425,1,0,0,0,426,427,1,0,0,0,427,428,1,0,0,0,428,430,5,3,0,
        0,429,431,5,167,0,0,430,429,1,0,0,0,430,431,1,0,0,0,431,432,1,0,
        0,0,432,434,3,330,165,0,433,426,1,0,0,0,434,437,1,0,0,0,435,433,
        1,0,0,0,435,436,1,0,0,0,436,439,1,0,0,0,437,435,1,0,0,0,438,440,
        5,167,0,0,439,438,1,0,0,0,439,440,1,0,0,0,440,441,1,0,0,0,441,442,
        5,4,0,0,442,9,1,0,0,0,443,463,3,40,20,0,444,446,5,2,0,0,445,447,
        5,167,0,0,446,445,1,0,0,0,446,447,1,0,0,0,447,448,1,0,0,0,448,450,
        3,120,60,0,449,451,5,167,0,0,450,449,1,0,0,0,450,451,1,0,0,0,451,
        452,1,0,0,0,452,453,5,4,0,0,453,463,1,0,0,0,454,463,3,316,158,0,
        455,456,3,316,158,0,456,458,5,5,0,0,457,459,5,167,0,0,458,457,1,
        0,0,0,458,459,1,0,0,0,459,460,1,0,0,0,460,461,3,330,165,0,461,463,
        1,0,0,0,462,443,1,0,0,0,462,444,1,0,0,0,462,454,1,0,0,0,462,455,
        1,0,0,0,463,11,1,0,0,0,464,465,5,65,0,0,465,466,5,167,0,0,466,467,
        3,330,165,0,467,468,5,167,0,0,468,469,5,86,0,0,469,470,5,167,0,0,
        470,472,5,2,0,0,471,473,5,167,0,0,472,471,1,0,0,0,472,473,1,0,0,
        0,473,474,1,0,0,0,474,485,5,153,0,0,475,477,5,167,0,0,476,475,1,
        0,0,0,476,477,1,0,0,0,477,478,1,0,0,0,478,480,5,3,0,0,479,481,5,
        167,0,0,480,479,1,0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,484,
        5,153,0,0,483,476,1,0,0,0,484,487,1,0,0,0,485,483,1,0,0,0,485,486,
        1,0,0,0,486,488,1,0,0,0,487,485,1,0,0,0,488,489,5,4,0,0,489,490,
        5,167,0,0,490,491,5,55,0,0,491,492,5,167,0,0,492,493,5,60,0,0,493,
        13,1,0,0,0,494,495,5,65,0,0,495,496,5,167,0,0,496,498,5,2,0,0,497,
        499,5,167,0,0,498,497,1,0,0,0,498,499,1,0,0,0,499,500,1,0,0,0,500,
        502,3,120,60,0,501,503,5,167,0,0,502,501,1,0,0,0,502,503,1,0,0,0,
        503,504,1,0,0,0,504,505,5,4,0,0,505,506,5,167,0,0,506,507,5,134,
        0,0,507,508,5,167,0,0,508,513,5,153,0,0,509,511,5,167,0,0,510,509,
        1,0,0,0,510,511,1,0,0,0,511,512,1,0,0,0,512,514,3,42,21,0,513,510,
        1,0,0,0,513,514,1,0,0,0,514,15,1,0,0,0,515,516,5,83,0,0,516,517,
        5,167,0,0,517,518,5,69,0,0,518,519,5,167,0,0,519,524,5,153,0,0,520,
        522,5,167,0,0,521,520,1,0,0,0,521,522,1,0,0,0,522,523,1,0,0,0,523,
        525,3,42,21,0,524,521,1,0,0,0,524,525,1,0,0,0,525,17,1,0,0,0,526,
        527,5,92,0,0,527,528,5,167,0,0,528,529,5,69,0,0,529,530,5,167,0,
        0,530,531,5,153,0,0,531,19,1,0,0,0,532,533,5,53,0,0,533,534,5,167,
        0,0,534,539,5,153,0,0,535,536,5,167,0,0,536,537,5,50,0,0,537,538,
        5,167,0,0,538,540,3,330,165,0,539,535,1,0,0,0,539,540,1,0,0,0,540,
        541,1,0,0,0,541,542,5,167,0,0,542,544,5,2,0,0,543,545,5,167,0,0,
        544,543,1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,546,547,5,70,0,0,
        547,548,5,167,0,0,548,557,3,332,166,0,549,551,5,167,0,0,550,549,
        1,0,0,0,550,551,1,0,0,0,551,552,1,0,0,0,552,554,5,3,0,0,553,555,
        5,167,0,0,554,553,1,0,0,0,554,555,1,0,0,0,555,556,1,0,0,0,556,558,
        3,24,12,0,557,550,1,0,0,0,557,558,1,0,0,0,558,560,1,0,0,0,559,561,
        5,167,0,0,560,559,1,0,0,0,560,561,1,0,0,0,561,562,1,0,0,0,562,563,
        5,4,0,0,563,21,1,0,0,0,564,566,3,332,166,0,565,567,5,167,0,0,566,
        565,1,0,0,0,566,567,1,0,0,0,567,568,1,0,0,0,568,570,5,6,0,0,569,
        571,5,167,0,0,570,569,1,0,0,0,570,571,1,0,0,0,571,572,1,0,0,0,572,
        573,3,280,140,0,573,23,1,0,0,0,574,585,3,22,11,0,575,577,5,167,0,
        0,576,575,1,0,0,0,576,577,1,0,0,0,577,578,1,0,0,0,578,580,5,3,0,
        0,579,581,5,167,0,0,580,579,1,0,0,0,580,581,1,0,0,0,581,582,1,0,
        0,0,582,584,3,22,11,0,583,576,1,0,0,0,584,587,1,0,0,0,585,583,1,
        0,0,0,585,586,1,0,0,0,586,25,1,0,0,0,587,585,1,0,0,0,588,589,5,75,
        0,0,589,590,5,167,0,0,590,591,3,330,165,0,591,27,1,0,0,0,592,593,
        5,140,0,0,593,594,5,167,0,0,594,595,3,330,165,0,595,29,1,0,0,0,596,
        597,5,56,0,0,597,598,5,167,0,0,598,600,3,332,166,0,599,601,5,167,
        0,0,600,599,1,0,0,0,600,601,1,0,0,0,601,602,1,0,0,0,602,604,5,6,
        0,0,603,605,5,167,0,0,604,603,1,0,0,0,604,605,1,0,0,0,605,606,1,
        0,0,0,606,607,3,232,116,0,607,31,1,0,0,0,608,609,5,61,0,0,609,610,
        5,167,0,0,610,611,5,112,0,0,611,612,5,167,0,0,612,613,5,132,0,0,
        613,614,5,167,0,0,614,615,3,330,165,0,615,616,5,167,0,0,616,617,
        5,97,0,0,617,618,5,167,0,0,618,619,5,153,0,0,619,33,1,0,0,0,620,
        621,5,67,0,0,621,622,5,167,0,0,622,623,5,102,0,0,623,624,5,167,0,
        0,624,626,3,296,148,0,625,627,5,167,0,0,626,625,1,0,0,0,626,627,
        1,0,0,0,627,628,1,0,0,0,628,630,5,2,0,0,629,631,5,167,0,0,630,629,
        1,0,0,0,630,631,1,0,0,0,631,633,1,0,0,0,632,634,3,36,18,0,633,632,
        1,0,0,0,633,634,1,0,0,0,634,636,1,0,0,0,635,637,5,167,0,0,636,635,
        1,0,0,0,636,637,1,0,0,0,637,639,1,0,0,0,638,640,3,38,19,0,639,638,
        1,0,0,0,639,640,1,0,0,0,640,651,1,0,0,0,641,643,5,167,0,0,642,641,
        1,0,0,0,642,643,1,0,0,0,643,644,1,0,0,0,644,646,5,3,0,0,645,647,
        5,167,0,0,646,645,1,0,0,0,646,647,1,0,0,0,647,648,1,0,0,0,648,650,
        3,38,19,0,649,642,1,0,0,0,650,653,1,0,0,0,651,649,1,0,0,0,651,652,
        1,0,0,0,652,655,1,0,0,0,653,651,1,0,0,0,654,656,5,167,0,0,655,654,
        1,0,0,0,655,656,1,0,0,0,656,657,1,0,0,0,657,658,5,4,0,0,658,659,
        5,167,0,0,659,660,5,50,0,0,660,661,5,167,0,0,661,662,3,232,116,0,
        662,35,1,0,0,0,663,674,3,332,166,0,664,666,5,167,0,0,665,664,1,0,
        0,0,665,666,1,0,0,0,666,667,1,0,0,0,667,669,5,3,0,0,668,670,5,167,
        0,0,669,668,1,0,0,0,669,670,1,0,0,0,670,671,1,0,0,0,671,673,3,332,
        166,0,672,665,1,0,0,0,673,676,1,0,0,0,674,672,1,0,0,0,674,675,1,
        0,0,0,675,37,1,0,0,0,676,674,1,0,0,0,677,679,3,332,166,0,678,680,
        5,167,0,0,679,678,1,0,0,0,679,680,1,0,0,0,680,681,1,0,0,0,681,682,
        5,152,0,0,682,684,5,6,0,0,683,685,5,167,0,0,684,683,1,0,0,0,684,
        685,1,0,0,0,685,686,1,0,0,0,686,687,3,280,140,0,687,39,1,0,0,0,688,
        690,5,7,0,0,689,691,5,167,0,0,690,689,1,0,0,0,690,691,1,0,0,0,691,
        692,1,0,0,0,692,703,5,153,0,0,693,695,5,167,0,0,694,693,1,0,0,0,
        694,695,1,0,0,0,695,696,1,0,0,0,696,698,5,3,0,0,697,699,5,167,0,
        0,698,697,1,0,0,0,698,699,1,0,0,0,699,700,1,0,0,0,700,702,5,153,
        0,0,701,694,1,0,0,0,702,705,1,0,0,0,703,701,1,0,0,0,703,704,1,0,
        0,0,704,706,1,0,0,0,705,703,1,0,0,0,706,722,5,8,0,0,707,722,5,153,
        0,0,708,710,5,87,0,0,709,711,5,167,0,0,710,709,1,0,0,0,710,711,1,
        0,0,0,711,712,1,0,0,0,712,714,5,2,0,0,713,715,5,167,0,0,714,713,
        1,0,0,0,714,715,1,0,0,0,715,716,1,0,0,0,716,718,5,153,0,0,717,719,
        5,167,0,0,718,717,1,0,0,0,718,719,1,0,0,0,719,720,1,0,0,0,720,722,
        5,4,0,0,721,688,1,0,0,0,721,707,1,0,0,0,721,708,1,0,0,0,722,41,1,
        0,0,0,723,725,5,2,0,0,724,726,5,167,0,0,725,724,1,0,0,0,725,726,
        1,0,0,0,726,727,1,0,0,0,727,729,3,24,12,0,728,730,5,167,0,0,729,
        728,1,0,0,0,729,730,1,0,0,0,730,731,1,0,0,0,731,732,5,4,0,0,732,
        43,1,0,0,0,733,734,5,93,0,0,734,735,5,167,0,0,735,736,5,110,0,0,
        736,737,5,167,0,0,737,738,5,81,0,0,738,45,1,0,0,0,739,740,5,67,0,
        0,740,741,5,167,0,0,741,742,5,109,0,0,742,743,5,167,0,0,743,744,
        5,132,0,0,744,748,5,167,0,0,745,746,3,44,22,0,746,747,5,167,0,0,
        747,749,1,0,0,0,748,745,1,0,0,0,748,749,1,0,0,0,749,750,1,0,0,0,
        750,752,3,330,165,0,751,753,5,167,0,0,752,751,1,0,0,0,752,753,1,
        0,0,0,753,754,1,0,0,0,754,756,5,2,0,0,755,757,5,167,0,0,756,755,
        1,0,0,0,756,757,1,0,0,0,757,758,1,0,0,0,758,760,3,94,47,0,759,761,
        5,167,0,0,760,759,1,0,0,0,760,761,1,0,0,0,761,762,1,0,0,0,762,764,
        5,3,0,0,763,765,5,167,0,0,764,763,1,0,0,0,764,765,1,0,0,0,765,766,
        1,0,0,0,766,767,3,98,49,0,767,769,1,0,0,0,768,770,5,167,0,0,769,
        768,1,0,0,0,769,770,1,0,0,0,770,771,1,0,0,0,771,772,5,4,0,0,772,
        47,1,0,0,0,773,774,5,67,0,0,774,775,5,167,0,0,775,776,5,122,0,0,
        776,777,5,167,0,0,777,778,5,132,0,0,778,782,5,167,0,0,779,780,3,
        44,22,0,780,781,5,167,0,0,781,783,1,0,0,0,782,779,1,0,0,0,782,783,
        1,0,0,0,783,784,1,0,0,0,784,786,3,330,165,0,785,787,5,167,0,0,786,
        785,1,0,0,0,786,787,1,0,0,0,787,788,1,0,0,0,788,790,5,2,0,0,789,
        791,5,167,0,0,790,789,1,0,0,0,790,791,1,0,0,0,791,792,1,0,0,0,792,
        794,3,52,26,0,793,795,5,167,0,0,794,793,1,0,0,0,794,795,1,0,0,0,
        795,804,1,0,0,0,796,798,5,3,0,0,797,799,5,167,0,0,798,797,1,0,0,
        0,798,799,1,0,0,0,799,800,1,0,0,0,800,802,3,94,47,0,801,803,5,167,
        0,0,802,801,1,0,0,0,802,803,1,0,0,0,803,805,1,0,0,0,804,796,1,0,
        0,0,804,805,1,0,0,0,805,814,1,0,0,0,806,808,5,3,0,0,807,809,5,167,
        0,0,808,807,1,0,0,0,808,809,1,0,0,0,809,810,1,0,0,0,810,812,3,332,
        166,0,811,813,5,167,0,0,812,811,1,0,0,0,812,813,1,0,0,0,813,815,
        1,0,0,0,814,806,1,0,0,0,814,815,1,0,0,0,815,816,1,0,0,0,816,817,
        5,4,0,0,817,49,1,0,0,0,818,819,5,67,0,0,819,820,5,167,0,0,820,821,
        5,122,0,0,821,822,5,167,0,0,822,823,5,132,0,0,823,824,5,167,0,0,
        824,825,5,89,0,0,825,829,5,167,0,0,826,827,3,44,22,0,827,828,5,167,
        0,0,828,830,1,0,0,0,829,826,1,0,0,0,829,830,1,0,0,0,830,831,1,0,
        0,0,831,833,3,330,165,0,832,834,5,167,0,0,833,832,1,0,0,0,833,834,
        1,0,0,0,834,835,1,0,0,0,835,837,5,2,0,0,836,838,5,167,0,0,837,836,
        1,0,0,0,837,838,1,0,0,0,838,839,1,0,0,0,839,848,3,52,26,0,840,842,
        5,167,0,0,841,840,1,0,0,0,841,842,1,0,0,0,842,843,1,0,0,0,843,845,
        5,3,0,0,844,846,5,167,0,0,845,844,1,0,0,0,845,846,1,0,0,0,846,847,
        1,0,0,0,847,849,3,52,26,0,848,841,1,0,0,0,849,850,1,0,0,0,850,848,
        1,0,0,0,850,851,1,0,0,0,851,853,1,0,0,0,852,854,5,167,0,0,853,852,
        1,0,0,0,853,854,1,0,0,0,854,863,1,0,0,0,855,857,5,3,0,0,856,858,
        5,167,0,0,857,856,1,0,0,0,857,858,1,0,0,0,858,859,1,0,0,0,859,861,
        3,94,47,0,860,862,5,167,0,0,861,860,1,0,0,0,861,862,1,0,0,0,862,
        864,1,0,0,0,863,855,1,0,0,0,863,864,1,0,0,0,864,873,1,0,0,0,865,
        867,5,3,0,0,866,868,5,167,0,0,867,866,1,0,0,0,867,868,1,0,0,0,868,
        869,1,0,0,0,869,871,3,332,166,0,870,872,5,167,0,0,871,870,1,0,0,
        0,871,872,1,0,0,0,872,874,1,0,0,0,873,865,1,0,0,0,873,874,1,0,0,
        0,874,875,1,0,0,0,875,876,5,4,0,0,876,51,1,0,0,0,877,878,5,86,0,
        0,878,879,5,167,0,0,879,880,3,330,165,0,880,881,5,167,0,0,881,882,
        5,134,0,0,882,883,5,167,0,0,883,884,3,330,165,0,884,53,1,0,0,0,885,
        886,5,67,0,0,886,887,5,167,0,0,887,888,5,120,0,0,888,892,5,167,0,
        0,889,890,3,44,22,0,890,891,5,167,0,0,891,893,1,0,0,0,892,889,1,
        0,0,0,892,893,1,0,0,0,893,894,1,0,0,0,894,895,3,330,165,0,895,55,
        1,0,0,0,896,897,5,67,0,0,897,898,5,167,0,0,898,899,5,127,0,0,899,
        903,5,167,0,0,900,901,3,44,22,0,901,902,5,167,0,0,902,904,1,0,0,
        0,903,900,1,0,0,0,903,904,1,0,0,0,904,905,1,0,0,0,905,910,3,330,
        165,0,906,907,5,167,0,0,907,909,3,60,30,0,908,906,1,0,0,0,909,912,
        1,0,0,0,910,908,1,0,0,0,910,911,1,0,0,0,911,57,1,0,0,0,912,910,1,
        0,0,0,913,914,5,67,0,0,914,915,5,167,0,0,915,916,5,137,0,0,916,917,
        5,167,0,0,917,918,3,330,165,0,918,919,5,167,0,0,919,920,5,50,0,0,
        920,921,5,167,0,0,921,923,3,100,50,0,922,924,5,167,0,0,923,922,1,
        0,0,0,923,924,1,0,0,0,924,59,1,0,0,0,925,931,3,62,31,0,926,931,3,
        64,32,0,927,931,3,66,33,0,928,931,3,68,34,0,929,931,3,70,35,0,930,
        925,1,0,0,0,930,926,1,0,0,0,930,927,1,0,0,0,930,928,1,0,0,0,930,
        929,1,0,0,0,931,61,1,0,0,0,932,933,5,95,0,0,933,936,5,167,0,0,934,
        935,5,55,0,0,935,937,5,167,0,0,936,934,1,0,0,0,936,937,1,0,0,0,937,
        939,1,0,0,0,938,940,5,150,0,0,939,938,1,0,0,0,939,940,1,0,0,0,940,
        941,1,0,0,0,941,942,3,326,163,0,942,63,1,0,0,0,943,944,5,108,0,0,
        944,945,5,167,0,0,945,953,5,106,0,0,946,947,5,106,0,0,947,949,5,
        167,0,0,948,950,5,150,0,0,949,948,1,0,0,0,949,950,1,0,0,0,950,951,
        1,0,0,0,951,953,3,326,163,0,952,943,1,0,0,0,952,946,1,0,0,0,953,
        65,1,0,0,0,954,955,5,108,0,0,955,956,5,167,0,0,956,964,5,104,0,0,
        957,958,5,104,0,0,958,960,5,167,0,0,959,961,5,150,0,0,960,959,1,
        0,0,0,960,961,1,0,0,0,961,962,1,0,0,0,962,964,3,326,163,0,963,954,
        1,0,0,0,963,957,1,0,0,0,964,67,1,0,0,0,965,966,5,130,0,0,966,969,
        5,167,0,0,967,968,5,143,0,0,968,970,5,167,0,0,969,967,1,0,0,0,969,
        970,1,0,0,0,970,972,1,0,0,0,971,973,5,150,0,0,972,971,1,0,0,0,972,
        973,1,0,0,0,973,974,1,0,0,0,974,975,3,326,163,0,975,69,1,0,0,0,976,
        977,5,108,0,0,977,979,5,167,0,0,978,976,1,0,0,0,978,979,1,0,0,0,
        979,980,1,0,0,0,980,981,5,68,0,0,981,71,1,0,0,0,982,983,5,93,0,0,
        983,984,5,167,0,0,984,985,5,81,0,0,985,73,1,0,0,0,986,987,5,77,0,
        0,987,988,5,167,0,0,988,989,7,0,0,0,989,993,5,167,0,0,990,991,3,
        72,36,0,991,992,5,167,0,0,992,994,1,0,0,0,993,990,1,0,0,0,993,994,
        1,0,0,0,994,995,1,0,0,0,995,996,3,330,165,0,996,75,1,0,0,0,997,998,
        5,48,0,0,998,999,5,167,0,0,999,1000,5,132,0,0,1000,1001,5,167,0,
        0,1001,1002,3,330,165,0,1002,1003,5,167,0,0,1003,1004,3,78,39,0,
        1004,77,1,0,0,0,1005,1010,3,80,40,0,1006,1010,3,84,42,0,1007,1010,
        3,86,43,0,1008,1010,3,88,44,0,1009,1005,1,0,0,0,1009,1006,1,0,0,
        0,1009,1007,1,0,0,0,1009,1008,1,0,0,0,1010,79,1,0,0,0,1011,1012,
        5,46,0,0,1012,1013,5,167,0,0,1013,1014,3,324,162,0,1014,1015,5,167,
        0,0,1015,1018,3,100,50,0,1016,1017,5,167,0,0,1017,1019,3,82,41,0,
        1018,1016,1,0,0,0,1018,1019,1,0,0,0,1019,81,1,0,0,0,1020,1021,5,
        71,0,0,1021,1022,5,167,0,0,1022,1023,3,232,116,0,1023,83,1,0,0,0,
        1024,1025,5,77,0,0,1025,1026,5,167,0,0,1026,1027,3,324,162,0,1027,
        85,1,0,0,0,1028,1029,5,123,0,0,1029,1030,5,167,0,0,1030,1031,5,134,
        0,0,1031,1032,5,167,0,0,1032,1033,3,330,165,0,1033,87,1,0,0,0,1034,
        1035,5,123,0,0,1035,1036,5,167,0,0,1036,1037,3,324,162,0,1037,1038,
        5,167,0,0,1038,1039,5,134,0,0,1039,1040,5,167,0,0,1040,1041,3,324,
        162,0,1041,89,1,0,0,0,1042,1053,3,92,46,0,1043,1045,5,167,0,0,1044,
        1043,1,0,0,0,1044,1045,1,0,0,0,1045,1046,1,0,0,0,1046,1048,5,3,0,
        0,1047,1049,5,167,0,0,1048,1047,1,0,0,0,1048,1049,1,0,0,0,1049,1050,
        1,0,0,0,1050,1052,3,92,46,0,1051,1044,1,0,0,0,1052,1055,1,0,0,0,
        1053,1051,1,0,0,0,1053,1054,1,0,0,0,1054,91,1,0,0,0,1055,1053,1,
        0,0,0,1056,1057,3,324,162,0,1057,1058,5,167,0,0,1058,1059,3,100,
        50,0,1059,93,1,0,0,0,1060,1071,3,96,48,0,1061,1063,5,167,0,0,1062,
        1061,1,0,0,0,1062,1063,1,0,0,0,1063,1064,1,0,0,0,1064,1066,5,3,0,
        0,1065,1067,5,167,0,0,1066,1065,1,0,0,0,1066,1067,1,0,0,0,1067,1068,
        1,0,0,0,1068,1070,3,96,48,0,1069,1062,1,0,0,0,1070,1073,1,0,0,0,
        1071,1069,1,0,0,0,1071,1072,1,0,0,0,1072,95,1,0,0,0,1073,1071,1,
        0,0,0,1074,1075,3,324,162,0,1075,1076,5,167,0,0,1076,1079,3,100,
        50,0,1077,1078,5,167,0,0,1078,1080,3,82,41,0,1079,1077,1,0,0,0,1079,
        1080,1,0,0,0,1080,97,1,0,0,0,1081,1082,5,117,0,0,1082,1083,5,167,
        0,0,1083,1085,5,99,0,0,1084,1086,5,167,0,0,1085,1084,1,0,0,0,1085,
        1086,1,0,0,0,1086,1087,1,0,0,0,1087,1089,5,2,0,0,1088,1090,5,167,
        0,0,1089,1088,1,0,0,0,1089,1090,1,0,0,0,1090,1091,1,0,0,0,1091,1093,
        3,324,162,0,1092,1094,5,167,0,0,1093,1092,1,0,0,0,1093,1094,1,0,
        0,0,1094,1095,1,0,0,0,1095,1096,5,4,0,0,1096,99,1,0,0,0,1097,1098,
        6,50,-1,0,1098,1172,3,332,166,0,1099,1101,5,138,0,0,1100,1102,5,
        167,0,0,1101,1100,1,0,0,0,1101,1102,1,0,0,0,1102,1103,1,0,0,0,1103,
        1105,5,2,0,0,1104,1106,5,167,0,0,1105,1104,1,0,0,0,1105,1106,1,0,
        0,0,1106,1107,1,0,0,0,1107,1109,3,90,45,0,1108,1110,5,167,0,0,1109,
        1108,1,0,0,0,1109,1110,1,0,0,0,1110,1111,1,0,0,0,1111,1112,5,4,0,
        0,1112,1172,1,0,0,0,1113,1115,3,332,166,0,1114,1116,5,167,0,0,1115,
        1114,1,0,0,0,1115,1116,1,0,0,0,1116,1117,1,0,0,0,1117,1119,5,2,0,
        0,1118,1120,5,167,0,0,1119,1118,1,0,0,0,1119,1120,1,0,0,0,1120,1121,
        1,0,0,0,1121,1123,3,90,45,0,1122,1124,5,167,0,0,1123,1122,1,0,0,
        0,1123,1124,1,0,0,0,1124,1125,1,0,0,0,1125,1126,5,4,0,0,1126,1172,
        1,0,0,0,1127,1129,3,332,166,0,1128,1130,5,167,0,0,1129,1128,1,0,
        0,0,1129,1130,1,0,0,0,1130,1131,1,0,0,0,1131,1133,5,2,0,0,1132,1134,
        5,167,0,0,1133,1132,1,0,0,0,1133,1134,1,0,0,0,1134,1135,1,0,0,0,
        1135,1137,3,100,50,0,1136,1138,5,167,0,0,1137,1136,1,0,0,0,1137,
        1138,1,0,0,0,1138,1139,1,0,0,0,1139,1141,5,3,0,0,1140,1142,5,167,
        0,0,1141,1140,1,0,0,0,1141,1142,1,0,0,0,1142,1143,1,0,0,0,1143,1145,
        3,100,50,0,1144,1146,5,167,0,0,1145,1144,1,0,0,0,1145,1146,1,0,0,
        0,1146,1147,1,0,0,0,1147,1148,5,4,0,0,1148,1172,1,0,0,0,1149,1151,
        5,146,0,0,1150,1152,5,167,0,0,1151,1150,1,0,0,0,1151,1152,1,0,0,
        0,1152,1153,1,0,0,0,1153,1155,5,2,0,0,1154,1156,5,167,0,0,1155,1154,
        1,0,0,0,1155,1156,1,0,0,0,1156,1157,1,0,0,0,1157,1159,3,326,163,
        0,1158,1160,5,167,0,0,1159,1158,1,0,0,0,1159,1160,1,0,0,0,1160,1161,
        1,0,0,0,1161,1163,5,3,0,0,1162,1164,5,167,0,0,1163,1162,1,0,0,0,
        1163,1164,1,0,0,0,1164,1165,1,0,0,0,1165,1167,3,326,163,0,1166,1168,
        5,167,0,0,1167,1166,1,0,0,0,1167,1168,1,0,0,0,1168,1169,1,0,0,0,
        1169,1170,5,4,0,0,1170,1172,1,0,0,0,1171,1097,1,0,0,0,1171,1099,
        1,0,0,0,1171,1113,1,0,0,0,1171,1127,1,0,0,0,1171,1149,1,0,0,0,1172,
        1177,1,0,0,0,1173,1174,10,5,0,0,1174,1176,3,102,51,0,1175,1173,1,
        0,0,0,1176,1179,1,0,0,0,1177,1175,1,0,0,0,1177,1178,1,0,0,0,1178,
        101,1,0,0,0,1179,1177,1,0,0,0,1180,1184,3,104,52,0,1181,1183,3,104,
        52,0,1182,1181,1,0,0,0,1183,1186,1,0,0,0,1184,1182,1,0,0,0,1184,
        1185,1,0,0,0,1185,103,1,0,0,0,1186,1184,1,0,0,0,1187,1189,5,7,0,
        0,1188,1190,3,326,163,0,1189,1188,1,0,0,0,1189,1190,1,0,0,0,1190,
        1191,1,0,0,0,1191,1192,5,8,0,0,1192,105,1,0,0,0,1193,1196,3,108,
        54,0,1194,1196,3,110,55,0,1195,1193,1,0,0,0,1195,1194,1,0,0,0,1196,
        107,1,0,0,0,1197,1198,5,82,0,0,1198,109,1,0,0,0,1199,1200,5,118,
        0,0,1200,111,1,0,0,0,1201,1202,5,54,0,0,1202,1203,5,167,0,0,1203,
        1215,5,135,0,0,1204,1205,5,54,0,0,1205,1206,5,167,0,0,1206,1207,
        5,135,0,0,1207,1208,5,167,0,0,1208,1209,5,121,0,0,1209,1210,5,167,
        0,0,1210,1215,5,113,0,0,1211,1215,5,62,0,0,1212,1215,5,125,0,0,1213,
        1215,5,59,0,0,1214,1201,1,0,0,0,1214,1204,1,0,0,0,1214,1211,1,0,
        0,0,1214,1212,1,0,0,0,1214,1213,1,0,0,0,1215,113,1,0,0,0,1216,1219,
        3,116,58,0,1217,1219,3,118,59,0,1218,1216,1,0,0,0,1218,1217,1,0,
        0,0,1219,115,1,0,0,0,1220,1221,5,101,0,0,1221,1222,5,167,0,0,1222,
        1223,5,84,0,0,1223,1226,5,167,0,0,1224,1227,5,153,0,0,1225,1227,
        3,316,158,0,1226,1224,1,0,0,0,1226,1225,1,0,0,0,1227,117,1,0,0,0,
        1228,1229,5,96,0,0,1229,1230,5,167,0,0,1230,1231,3,316,158,0,1231,
        119,1,0,0,0,1232,1234,3,122,61,0,1233,1235,5,167,0,0,1234,1233,1,
        0,0,0,1234,1235,1,0,0,0,1235,1237,1,0,0,0,1236,1232,1,0,0,0,1236,
        1237,1,0,0,0,1237,1238,1,0,0,0,1238,1239,3,126,63,0,1239,121,1,0,
        0,0,1240,1241,5,119,0,0,1241,1242,5,167,0,0,1242,1243,5,88,0,0,1243,
        1244,5,167,0,0,1244,1246,3,330,165,0,1245,1247,5,167,0,0,1246,1245,
        1,0,0,0,1246,1247,1,0,0,0,1247,1248,1,0,0,0,1248,1250,5,2,0,0,1249,
        1251,5,167,0,0,1250,1249,1,0,0,0,1250,1251,1,0,0,0,1251,1252,1,0,
        0,0,1252,1254,3,124,62,0,1253,1255,5,167,0,0,1254,1253,1,0,0,0,1254,
        1255,1,0,0,0,1255,1256,1,0,0,0,1256,1257,5,4,0,0,1257,123,1,0,0,
        0,1258,1269,3,146,73,0,1259,1261,5,167,0,0,1260,1259,1,0,0,0,1260,
        1261,1,0,0,0,1261,1262,1,0,0,0,1262,1264,5,3,0,0,1263,1265,5,167,
        0,0,1264,1263,1,0,0,0,1264,1265,1,0,0,0,1265,1266,1,0,0,0,1266,1268,
        3,146,73,0,1267,1260,1,0,0,0,1268,1271,1,0,0,0,1269,1267,1,0,0,0,
        1269,1270,1,0,0,0,1270,125,1,0,0,0,1271,1269,1,0,0,0,1272,1279,3,
        130,65,0,1273,1275,5,167,0,0,1274,1273,1,0,0,0,1274,1275,1,0,0,0,
        1275,1276,1,0,0,0,1276,1278,3,128,64,0,1277,1274,1,0,0,0,1278,1281,
        1,0,0,0,1279,1277,1,0,0,0,1279,1280,1,0,0,0,1280,1294,1,0,0,0,1281,
        1279,1,0,0,0,1282,1284,3,174,87,0,1283,1285,5,167,0,0,1284,1283,
        1,0,0,0,1284,1285,1,0,0,0,1285,1287,1,0,0,0,1286,1282,1,0,0,0,1287,
        1288,1,0,0,0,1288,1286,1,0,0,0,1288,1289,1,0,0,0,1289,1290,1,0,0,
        0,1290,1291,3,130,65,0,1291,1292,6,63,-1,0,1292,1294,1,0,0,0,1293,
        1272,1,0,0,0,1293,1286,1,0,0,0,1294,127,1,0,0,0,1295,1296,5,138,
        0,0,1296,1297,5,167,0,0,1297,1299,5,47,0,0,1298,1300,5,167,0,0,1299,
        1298,1,0,0,0,1299,1300,1,0,0,0,1300,1301,1,0,0,0,1301,1308,3,130,
        65,0,1302,1304,5,138,0,0,1303,1305,5,167,0,0,1304,1303,1,0,0,0,1304,
        1305,1,0,0,0,1305,1306,1,0,0,0,1306,1308,3,130,65,0,1307,1295,1,
        0,0,0,1307,1302,1,0,0,0,1308,129,1,0,0,0,1309,1312,3,132,66,0,1310,
        1312,3,134,67,0,1311,1309,1,0,0,0,1311,1310,1,0,0,0,1312,131,1,0,
        0,0,1313,1315,3,140,70,0,1314,1316,5,167,0,0,1315,1314,1,0,0,0,1315,
        1316,1,0,0,0,1316,1318,1,0,0,0,1317,1313,1,0,0,0,1318,1321,1,0,0,
        0,1319,1317,1,0,0,0,1319,1320,1,0,0,0,1320,1322,1,0,0,0,1321,1319,
        1,0,0,0,1322,1359,3,174,87,0,1323,1325,3,140,70,0,1324,1326,5,167,
        0,0,1325,1324,1,0,0,0,1325,1326,1,0,0,0,1326,1328,1,0,0,0,1327,1323,
        1,0,0,0,1328,1331,1,0,0,0,1329,1327,1,0,0,0,1329,1330,1,0,0,0,1330,
        1332,1,0,0,0,1331,1329,1,0,0,0,1332,1339,3,138,69,0,1333,1335,5,
        167,0,0,1334,1333,1,0,0,0,1334,1335,1,0,0,0,1335,1336,1,0,0,0,1336,
        1338,3,138,69,0,1337,1334,1,0,0,0,1338,1341,1,0,0,0,1339,1337,1,
        0,0,0,1339,1340,1,0,0,0,1340,1346,1,0,0,0,1341,1339,1,0,0,0,1342,
        1344,5,167,0,0,1343,1342,1,0,0,0,1343,1344,1,0,0,0,1344,1345,1,0,
        0,0,1345,1347,3,174,87,0,1346,1343,1,0,0,0,1346,1347,1,0,0,0,1347,
        1359,1,0,0,0,1348,1350,3,140,70,0,1349,1351,5,167,0,0,1350,1349,
        1,0,0,0,1350,1351,1,0,0,0,1351,1353,1,0,0,0,1352,1348,1,0,0,0,1353,
        1354,1,0,0,0,1354,1352,1,0,0,0,1354,1355,1,0,0,0,1355,1356,1,0,0,
        0,1356,1357,6,66,-1,0,1357,1359,1,0,0,0,1358,1319,1,0,0,0,1358,1329,
        1,0,0,0,1358,1352,1,0,0,0,1359,133,1,0,0,0,1360,1362,3,136,68,0,
        1361,1363,5,167,0,0,1362,1361,1,0,0,0,1362,1363,1,0,0,0,1363,1365,
        1,0,0,0,1364,1360,1,0,0,0,1365,1366,1,0,0,0,1366,1364,1,0,0,0,1366,
        1367,1,0,0,0,1367,1368,1,0,0,0,1368,1369,3,132,66,0,1369,135,1,0,
        0,0,1370,1372,3,140,70,0,1371,1373,5,167,0,0,1372,1371,1,0,0,0,1372,
        1373,1,0,0,0,1373,1375,1,0,0,0,1374,1370,1,0,0,0,1375,1378,1,0,0,
        0,1376,1374,1,0,0,0,1376,1377,1,0,0,0,1377,1385,1,0,0,0,1378,1376,
        1,0,0,0,1379,1381,3,138,69,0,1380,1382,5,167,0,0,1381,1380,1,0,0,
        0,1381,1382,1,0,0,0,1382,1384,1,0,0,0,1383,1379,1,0,0,0,1384,1387,
        1,0,0,0,1385,1383,1,0,0,0,1385,1386,1,0,0,0,1386,1388,1,0,0,0,1387,
        1385,1,0,0,0,1388,1389,3,172,86,0,1389,137,1,0,0,0,1390,1395,3,160,
        80,0,1391,1395,3,162,81,0,1392,1395,3,166,83,0,1393,1395,3,170,85,
        0,1394,1390,1,0,0,0,1394,1391,1,0,0,0,1394,1392,1,0,0,0,1394,1393,
        1,0,0,0,1395,139,1,0,0,0,1396,1401,3,152,76,0,1397,1401,3,158,79,
        0,1398,1401,3,144,72,0,1399,1401,3,142,71,0,1400,1396,1,0,0,0,1400,
        1397,1,0,0,0,1400,1398,1,0,0,0,1400,1399,1,0,0,0,1401,141,1,0,0,
        0,1402,1420,5,101,0,0,1403,1404,5,167,0,0,1404,1405,5,143,0,0,1405,
        1406,5,167,0,0,1406,1408,5,90,0,0,1407,1409,5,167,0,0,1408,1407,
        1,0,0,0,1408,1409,1,0,0,0,1409,1410,1,0,0,0,1410,1412,5,2,0,0,1411,
        1413,5,167,0,0,1412,1411,1,0,0,0,1412,1413,1,0,0,0,1413,1414,1,0,
        0,0,1414,1416,3,90,45,0,1415,1417,5,167,0,0,1416,1415,1,0,0,0,1416,
        1417,1,0,0,0,1417,1418,1,0,0,0,1418,1419,5,4,0,0,1419,1421,1,0,0,
        0,1420,1403,1,0,0,0,1420,1421,1,0,0,0,1421,1422,1,0,0,0,1422,1423,
        5,167,0,0,1423,1424,5,86,0,0,1424,1425,5,167,0,0,1425,1430,3,10,
        5,0,1426,1428,5,167,0,0,1427,1426,1,0,0,0,1427,1428,1,0,0,0,1428,
        1429,1,0,0,0,1429,1431,3,42,21,0,1430,1427,1,0,0,0,1430,1431,1,0,
        0,0,1431,1436,1,0,0,0,1432,1434,5,167,0,0,1433,1432,1,0,0,0,1433,
        1434,1,0,0,0,1434,1435,1,0,0,0,1435,1437,3,190,95,0,1436,1433,1,
        0,0,0,1436,1437,1,0,0,0,1437,143,1,0,0,0,1438,1440,3,122,61,0,1439,
        1441,5,167,0,0,1440,1439,1,0,0,0,1440,1441,1,0,0,0,1441,1443,1,0,
        0,0,1442,1438,1,0,0,0,1442,1443,1,0,0,0,1443,1444,1,0,0,0,1444,1445,
        5,56,0,0,1445,1446,5,167,0,0,1446,1451,3,294,147,0,1447,1449,5,167,
        0,0,1448,1447,1,0,0,0,1448,1449,1,0,0,0,1449,1450,1,0,0,0,1450,1452,
        3,190,95,0,1451,1448,1,0,0,0,1451,1452,1,0,0,0,1452,145,1,0,0,0,
        1453,1467,3,330,165,0,1454,1456,5,167,0,0,1455,1454,1,0,0,0,1455,
        1456,1,0,0,0,1456,1457,1,0,0,0,1457,1459,5,9,0,0,1458,1460,5,167,
        0,0,1459,1458,1,0,0,0,1459,1460,1,0,0,0,1460,1461,1,0,0,0,1461,1463,
        3,148,74,0,1462,1464,5,167,0,0,1463,1462,1,0,0,0,1463,1464,1,0,0,
        0,1464,1465,1,0,0,0,1465,1466,5,10,0,0,1466,1468,1,0,0,0,1467,1455,
        1,0,0,0,1467,1468,1,0,0,0,1468,147,1,0,0,0,1469,1480,3,150,75,0,
        1470,1472,5,167,0,0,1471,1470,1,0,0,0,1471,1472,1,0,0,0,1472,1473,
        1,0,0,0,1473,1475,5,3,0,0,1474,1476,5,167,0,0,1475,1474,1,0,0,0,
        1475,1476,1,0,0,0,1476,1477,1,0,0,0,1477,1479,3,150,75,0,1478,1471,
        1,0,0,0,1479,1482,1,0,0,0,1480,1478,1,0,0,0,1480,1481,1,0,0,0,1481,
        149,1,0,0,0,1482,1480,1,0,0,0,1483,1486,3,324,162,0,1484,1485,5,
        167,0,0,1485,1487,3,82,41,0,1486,1484,1,0,0,0,1486,1487,1,0,0,0,
        1487,1490,1,0,0,0,1488,1489,5,167,0,0,1489,1491,3,190,95,0,1490,
        1488,1,0,0,0,1490,1491,1,0,0,0,1491,151,1,0,0,0,1492,1493,5,114,
        0,0,1493,1495,5,167,0,0,1494,1492,1,0,0,0,1494,1495,1,0,0,0,1495,
        1496,1,0,0,0,1496,1498,5,103,0,0,1497,1499,5,167,0,0,1498,1497,1,
        0,0,0,1498,1499,1,0,0,0,1499,1500,1,0,0,0,1500,1503,3,192,96,0,1501,
        1502,5,167,0,0,1502,1504,3,190,95,0,1503,1501,1,0,0,0,1503,1504,
        1,0,0,0,1504,1507,1,0,0,0,1505,1506,5,167,0,0,1506,1508,3,154,77,
        0,1507,1505,1,0,0,0,1507,1508,1,0,0,0,1508,153,1,0,0,0,1509,1510,
        5,91,0,0,1510,1511,5,167,0,0,1511,1512,3,156,78,0,1512,155,1,0,0,
        0,1513,1514,6,78,-1,0,1514,1516,5,2,0,0,1515,1517,5,167,0,0,1516,
        1515,1,0,0,0,1516,1517,1,0,0,0,1517,1518,1,0,0,0,1518,1520,3,156,
        78,0,1519,1521,5,167,0,0,1520,1519,1,0,0,0,1520,1521,1,0,0,0,1521,
        1522,1,0,0,0,1522,1523,5,4,0,0,1523,1526,1,0,0,0,1524,1526,3,330,
        165,0,1525,1513,1,0,0,0,1525,1524,1,0,0,0,1526,1543,1,0,0,0,1527,
        1528,10,4,0,0,1528,1529,5,167,0,0,1529,1530,5,98,0,0,1530,1531,5,
        167,0,0,1531,1542,3,156,78,5,1532,1537,10,3,0,0,1533,1534,5,167,
        0,0,1534,1535,5,107,0,0,1535,1536,5,167,0,0,1536,1538,3,330,165,
        0,1537,1533,1,0,0,0,1538,1539,1,0,0,0,1539,1537,1,0,0,0,1539,1540,
        1,0,0,0,1540,1542,1,0,0,0,1541,1527,1,0,0,0,1541,1532,1,0,0,0,1542,
        1545,1,0,0,0,1543,1541,1,0,0,0,1543,1544,1,0,0,0,1544,157,1,0,0,
        0,1545,1543,1,0,0,0,1546,1548,5,139,0,0,1547,1549,5,167,0,0,1548,
        1547,1,0,0,0,1548,1549,1,0,0,0,1549,1550,1,0,0,0,1550,1551,3,232,
        116,0,1551,1552,5,167,0,0,1552,1553,5,50,0,0,1553,1554,5,167,0,0,
        1554,1555,3,316,158,0,1555,159,1,0,0,0,1556,1558,5,67,0,0,1557,1559,
        5,167,0,0,1558,1557,1,0,0,0,1558,1559,1,0,0,0,1559,1560,1,0,0,0,
        1560,1561,3,192,96,0,1561,161,1,0,0,0,1562,1564,5,105,0,0,1563,1565,
        5,167,0,0,1564,1563,1,0,0,0,1564,1565,1,0,0,0,1565,1566,1,0,0,0,
        1566,1571,3,192,96,0,1567,1568,5,167,0,0,1568,1570,3,164,82,0,1569,
        1567,1,0,0,0,1570,1573,1,0,0,0,1571,1569,1,0,0,0,1571,1572,1,0,0,
        0,1572,163,1,0,0,0,1573,1571,1,0,0,0,1574,1575,5,112,0,0,1575,1576,
        5,167,0,0,1576,1577,5,103,0,0,1577,1578,5,167,0,0,1578,1585,3,166,
        83,0,1579,1580,5,112,0,0,1580,1581,5,167,0,0,1581,1582,5,67,0,0,
        1582,1583,5,167,0,0,1583,1585,3,166,83,0,1584,1574,1,0,0,0,1584,
        1579,1,0,0,0,1585,165,1,0,0,0,1586,1588,5,128,0,0,1587,1589,5,167,
        0,0,1588,1587,1,0,0,0,1588,1589,1,0,0,0,1589,1590,1,0,0,0,1590,1601,
        3,168,84,0,1591,1593,5,167,0,0,1592,1591,1,0,0,0,1592,1593,1,0,0,
        0,1593,1594,1,0,0,0,1594,1596,5,3,0,0,1595,1597,5,167,0,0,1596,1595,
        1,0,0,0,1596,1597,1,0,0,0,1597,1598,1,0,0,0,1598,1600,3,168,84,0,
        1599,1592,1,0,0,0,1600,1603,1,0,0,0,1601,1599,1,0,0,0,1601,1602,
        1,0,0,0,1602,167,1,0,0,0,1603,1601,1,0,0,0,1604,1606,3,322,161,0,
        1605,1607,5,167,0,0,1606,1605,1,0,0,0,1606,1607,1,0,0,0,1607,1608,
        1,0,0,0,1608,1610,5,6,0,0,1609,1611,5,167,0,0,1610,1609,1,0,0,0,
        1610,1611,1,0,0,0,1611,1612,1,0,0,0,1612,1613,3,232,116,0,1613,169,
        1,0,0,0,1614,1615,5,75,0,0,1615,1617,5,167,0,0,1616,1614,1,0,0,0,
        1616,1617,1,0,0,0,1617,1618,1,0,0,0,1618,1620,5,72,0,0,1619,1621,
        5,167,0,0,1620,1619,1,0,0,0,1620,1621,1,0,0,0,1621,1622,1,0,0,0,
        1622,1633,3,232,116,0,1623,1625,5,167,0,0,1624,1623,1,0,0,0,1624,
        1625,1,0,0,0,1625,1626,1,0,0,0,1626,1628,5,3,0,0,1627,1629,5,167,
        0,0,1628,1627,1,0,0,0,1628,1629,1,0,0,0,1629,1630,1,0,0,0,1630,1632,
        3,232,116,0,1631,1624,1,0,0,0,1632,1635,1,0,0,0,1633,1631,1,0,0,
        0,1633,1634,1,0,0,0,1634,171,1,0,0,0,1635,1633,1,0,0,0,1636,1637,
        5,143,0,0,1637,1642,3,176,88,0,1638,1640,5,167,0,0,1639,1638,1,0,
        0,0,1639,1640,1,0,0,0,1640,1641,1,0,0,0,1641,1643,3,190,95,0,1642,
        1639,1,0,0,0,1642,1643,1,0,0,0,1643,173,1,0,0,0,1644,1645,5,124,
        0,0,1645,1646,3,176,88,0,1646,175,1,0,0,0,1647,1649,5,167,0,0,1648,
        1647,1,0,0,0,1648,1649,1,0,0,0,1649,1650,1,0,0,0,1650,1652,5,76,
        0,0,1651,1648,1,0,0,0,1651,1652,1,0,0,0,1652,1653,1,0,0,0,1653,1654,
        5,167,0,0,1654,1657,3,178,89,0,1655,1656,5,167,0,0,1656,1658,3,182,
        91,0,1657,1655,1,0,0,0,1657,1658,1,0,0,0,1658,1661,1,0,0,0,1659,
        1660,5,167,0,0,1660,1662,3,184,92,0,1661,1659,1,0,0,0,1661,1662,
        1,0,0,0,1662,1665,1,0,0,0,1663,1664,5,167,0,0,1664,1666,3,186,93,
        0,1665,1663,1,0,0,0,1665,1666,1,0,0,0,1666,177,1,0,0,0,1667,1678,
        5,147,0,0,1668,1670,5,167,0,0,1669,1668,1,0,0,0,1669,1670,1,0,0,
        0,1670,1671,1,0,0,0,1671,1673,5,3,0,0,1672,1674,5,167,0,0,1673,1672,
        1,0,0,0,1673,1674,1,0,0,0,1674,1675,1,0,0,0,1675,1677,3,180,90,0,
        1676,1669,1,0,0,0,1677,1680,1,0,0,0,1678,1676,1,0,0,0,1678,1679,
        1,0,0,0,1679,1696,1,0,0,0,1680,1678,1,0,0,0,1681,1692,3,180,90,0,
        1682,1684,5,167,0,0,1683,1682,1,0,0,0,1683,1684,1,0,0,0,1684,1685,
        1,0,0,0,1685,1687,5,3,0,0,1686,1688,5,167,0,0,1687,1686,1,0,0,0,
        1687,1688,1,0,0,0,1688,1689,1,0,0,0,1689,1691,3,180,90,0,1690,1683,
        1,0,0,0,1691,1694,1,0,0,0,1692,1690,1,0,0,0,1692,1693,1,0,0,0,1693,
        1696,1,0,0,0,1694,1692,1,0,0,0,1695,1667,1,0,0,0,1695,1681,1,0,0,
        0,1696,179,1,0,0,0,1697,1698,3,232,116,0,1698,1699,5,167,0,0,1699,
        1700,5,50,0,0,1700,1701,5,167,0,0,1701,1702,3,316,158,0,1702,1705,
        1,0,0,0,1703,1705,3,232,116,0,1704,1697,1,0,0,0,1704,1703,1,0,0,
        0,1705,181,1,0,0,0,1706,1707,5,116,0,0,1707,1708,5,167,0,0,1708,
        1709,5,55,0,0,1709,1710,5,167,0,0,1710,1718,3,188,94,0,1711,1713,
        5,3,0,0,1712,1714,5,167,0,0,1713,1712,1,0,0,0,1713,1714,1,0,0,0,
        1714,1715,1,0,0,0,1715,1717,3,188,94,0,1716,1711,1,0,0,0,1717,1720,
        1,0,0,0,1718,1716,1,0,0,0,1718,1719,1,0,0,0,1719,183,1,0,0,0,1720,
        1718,1,0,0,0,1721,1722,5,148,0,0,1722,1723,5,167,0,0,1723,1724,3,
        232,116,0,1724,185,1,0,0,0,1725,1726,5,100,0,0,1726,1727,5,167,0,
        0,1727,1728,3,232,116,0,1728,187,1,0,0,0,1729,1734,3,232,116,0,1730,
        1732,5,167,0,0,1731,1730,1,0,0,0,1731,1732,1,0,0,0,1732,1733,1,0,
        0,0,1733,1735,7,1,0,0,1734,1731,1,0,0,0,1734,1735,1,0,0,0,1735,189,
        1,0,0,0,1736,1737,5,142,0,0,1737,1738,5,167,0,0,1738,1739,3,232,
        116,0,1739,191,1,0,0,0,1740,1751,3,194,97,0,1741,1743,5,167,0,0,
        1742,1741,1,0,0,0,1742,1743,1,0,0,0,1743,1744,1,0,0,0,1744,1746,
        5,3,0,0,1745,1747,5,167,0,0,1746,1745,1,0,0,0,1746,1747,1,0,0,0,
        1747,1748,1,0,0,0,1748,1750,3,194,97,0,1749,1742,1,0,0,0,1750,1753,
        1,0,0,0,1751,1749,1,0,0,0,1751,1752,1,0,0,0,1752,193,1,0,0,0,1753,
        1751,1,0,0,0,1754,1756,3,316,158,0,1755,1757,5,167,0,0,1756,1755,
        1,0,0,0,1756,1757,1,0,0,0,1757,1758,1,0,0,0,1758,1760,5,6,0,0,1759,
        1761,5,167,0,0,1760,1759,1,0,0,0,1760,1761,1,0,0,0,1761,1762,1,0,
        0,0,1762,1763,3,196,98,0,1763,1766,1,0,0,0,1764,1766,3,196,98,0,
        1765,1754,1,0,0,0,1765,1764,1,0,0,0,1766,195,1,0,0,0,1767,1768,3,
        198,99,0,1768,197,1,0,0,0,1769,1776,3,200,100,0,1770,1772,5,167,
        0,0,1771,1770,1,0,0,0,1771,1772,1,0,0,0,1772,1773,1,0,0,0,1773,1775,
        3,202,101,0,1774,1771,1,0,0,0,1775,1778,1,0,0,0,1776,1774,1,0,0,
        0,1776,1777,1,0,0,0,1777,1784,1,0,0,0,1778,1776,1,0,0,0,1779,1780,
        5,2,0,0,1780,1781,3,198,99,0,1781,1782,5,4,0,0,1782,1784,1,0,0,0,
        1783,1769,1,0,0,0,1783,1779,1,0,0,0,1784,199,1,0,0,0,1785,1787,5,
        2,0,0,1786,1788,5,167,0,0,1787,1786,1,0,0,0,1787,1788,1,0,0,0,1788,
        1793,1,0,0,0,1789,1791,3,316,158,0,1790,1792,5,167,0,0,1791,1790,
        1,0,0,0,1791,1792,1,0,0,0,1792,1794,1,0,0,0,1793,1789,1,0,0,0,1793,
        1794,1,0,0,0,1794,1799,1,0,0,0,1795,1797,3,212,106,0,1796,1798,5,
        167,0,0,1797,1796,1,0,0,0,1797,1798,1,0,0,0,1798,1800,1,0,0,0,1799,
        1795,1,0,0,0,1799,1800,1,0,0,0,1800,1805,1,0,0,0,1801,1803,3,208,
        104,0,1802,1804,5,167,0,0,1803,1802,1,0,0,0,1803,1804,1,0,0,0,1804,
        1806,1,0,0,0,1805,1801,1,0,0,0,1805,1806,1,0,0,0,1806,1807,1,0,0,
        0,1807,1808,5,4,0,0,1808,201,1,0,0,0,1809,1811,3,204,102,0,1810,
        1812,5,167,0,0,1811,1810,1,0,0,0,1811,1812,1,0,0,0,1812,1813,1,0,
        0,0,1813,1814,3,200,100,0,1814,203,1,0,0,0,1815,1817,3,336,168,0,
        1816,1818,5,167,0,0,1817,1816,1,0,0,0,1817,1818,1,0,0,0,1818,1819,
        1,0,0,0,1819,1821,3,340,170,0,1820,1822,5,167,0,0,1821,1820,1,0,
        0,0,1821,1822,1,0,0,0,1822,1824,1,0,0,0,1823,1825,3,206,103,0,1824,
        1823,1,0,0,0,1824,1825,1,0,0,0,1825,1827,1,0,0,0,1826,1828,5,167,
        0,0,1827,1826,1,0,0,0,1827,1828,1,0,0,0,1828,1829,1,0,0,0,1829,1830,
        3,340,170,0,1830,1860,1,0,0,0,1831,1833,3,340,170,0,1832,1834,5,
        167,0,0,1833,1832,1,0,0,0,1833,1834,1,0,0,0,1834,1836,1,0,0,0,1835,
        1837,3,206,103,0,1836,1835,1,0,0,0,1836,1837,1,0,0,0,1837,1839,1,
        0,0,0,1838,1840,5,167,0,0,1839,1838,1,0,0,0,1839,1840,1,0,0,0,1840,
        1841,1,0,0,0,1841,1843,3,340,170,0,1842,1844,5,167,0,0,1843,1842,
        1,0,0,0,1843,1844,1,0,0,0,1844,1845,1,0,0,0,1845,1846,3,338,169,
        0,1846,1860,1,0,0,0,1847,1849,3,340,170,0,1848,1850,5,167,0,0,1849,
        1848,1,0,0,0,1849,1850,1,0,0,0,1850,1852,1,0,0,0,1851,1853,3,206,
        103,0,1852,1851,1,0,0,0,1852,1853,1,0,0,0,1853,1855,1,0,0,0,1854,
        1856,5,167,0,0,1855,1854,1,0,0,0,1855,1856,1,0,0,0,1856,1857,1,0,
        0,0,1857,1858,3,340,170,0,1858,1860,1,0,0,0,1859,1815,1,0,0,0,1859,
        1831,1,0,0,0,1859,1847,1,0,0,0,1860,205,1,0,0,0,1861,1863,5,7,0,
        0,1862,1864,5,167,0,0,1863,1862,1,0,0,0,1863,1864,1,0,0,0,1864,1869,
        1,0,0,0,1865,1867,3,316,158,0,1866,1868,5,167,0,0,1867,1866,1,0,
        0,0,1867,1868,1,0,0,0,1868,1870,1,0,0,0,1869,1865,1,0,0,0,1869,1870,
        1,0,0,0,1870,1875,1,0,0,0,1871,1873,3,210,105,0,1872,1874,5,167,
        0,0,1873,1872,1,0,0,0,1873,1874,1,0,0,0,1874,1876,1,0,0,0,1875,1871,
        1,0,0,0,1875,1876,1,0,0,0,1876,1881,1,0,0,0,1877,1879,3,216,108,
        0,1878,1880,5,167,0,0,1879,1878,1,0,0,0,1879,1880,1,0,0,0,1880,1882,
        1,0,0,0,1881,1877,1,0,0,0,1881,1882,1,0,0,0,1882,1887,1,0,0,0,1883,
        1885,3,208,104,0,1884,1886,5,167,0,0,1885,1884,1,0,0,0,1885,1886,
        1,0,0,0,1886,1888,1,0,0,0,1887,1883,1,0,0,0,1887,1888,1,0,0,0,1888,
        1889,1,0,0,0,1889,1890,5,8,0,0,1890,207,1,0,0,0,1891,1893,5,9,0,
        0,1892,1894,5,167,0,0,1893,1892,1,0,0,0,1893,1894,1,0,0,0,1894,1928,
        1,0,0,0,1895,1897,3,324,162,0,1896,1898,5,167,0,0,1897,1896,1,0,
        0,0,1897,1898,1,0,0,0,1898,1899,1,0,0,0,1899,1901,5,152,0,0,1900,
        1902,5,167,0,0,1901,1900,1,0,0,0,1901,1902,1,0,0,0,1902,1903,1,0,
        0,0,1903,1905,3,232,116,0,1904,1906,5,167,0,0,1905,1904,1,0,0,0,
        1905,1906,1,0,0,0,1906,1925,1,0,0,0,1907,1909,5,3,0,0,1908,1910,
        5,167,0,0,1909,1908,1,0,0,0,1909,1910,1,0,0,0,1910,1911,1,0,0,0,
        1911,1913,3,324,162,0,1912,1914,5,167,0,0,1913,1912,1,0,0,0,1913,
        1914,1,0,0,0,1914,1915,1,0,0,0,1915,1917,5,152,0,0,1916,1918,5,167,
        0,0,1917,1916,1,0,0,0,1917,1918,1,0,0,0,1918,1919,1,0,0,0,1919,1921,
        3,232,116,0,1920,1922,5,167,0,0,1921,1920,1,0,0,0,1921,1922,1,0,
        0,0,1922,1924,1,0,0,0,1923,1907,1,0,0,0,1924,1927,1,0,0,0,1925,1923,
        1,0,0,0,1925,1926,1,0,0,0,1926,1929,1,0,0,0,1927,1925,1,0,0,0,1928,
        1895,1,0,0,0,1928,1929,1,0,0,0,1929,1930,1,0,0,0,1930,1931,5,10,
        0,0,1931,209,1,0,0,0,1932,1934,5,152,0,0,1933,1935,5,167,0,0,1934,
        1933,1,0,0,0,1934,1935,1,0,0,0,1935,1936,1,0,0,0,1936,1950,3,230,
        115,0,1937,1939,5,167,0,0,1938,1937,1,0,0,0,1938,1939,1,0,0,0,1939,
        1940,1,0,0,0,1940,1942,5,11,0,0,1941,1943,5,152,0,0,1942,1941,1,
        0,0,0,1942,1943,1,0,0,0,1943,1945,1,0,0,0,1944,1946,5,167,0,0,1945,
        1944,1,0,0,0,1945,1946,1,0,0,0,1946,1947,1,0,0,0,1947,1949,3,230,
        115,0,1948,1938,1,0,0,0,1949,1952,1,0,0,0,1950,1948,1,0,0,0,1950,
        1951,1,0,0,0,1951,211,1,0,0,0,1952,1950,1,0,0,0,1953,1960,3,214,
        107,0,1954,1956,5,167,0,0,1955,1954,1,0,0,0,1955,1956,1,0,0,0,1956,
        1957,1,0,0,0,1957,1959,3,214,107,0,1958,1955,1,0,0,0,1959,1962,1,
        0,0,0,1960,1958,1,0,0,0,1960,1961,1,0,0,0,1961,213,1,0,0,0,1962,
        1960,1,0,0,0,1963,1965,5,152,0,0,1964,1966,5,167,0,0,1965,1964,1,
        0,0,0,1965,1966,1,0,0,0,1966,1967,1,0,0,0,1967,1968,3,228,114,0,
        1968,215,1,0,0,0,1969,1971,5,147,0,0,1970,1972,5,167,0,0,1971,1970,
        1,0,0,0,1971,1972,1,0,0,0,1972,1977,1,0,0,0,1973,1978,5,129,0,0,
        1974,1975,5,47,0,0,1975,1976,5,167,0,0,1976,1978,5,129,0,0,1977,
        1973,1,0,0,0,1977,1974,1,0,0,0,1977,1978,1,0,0,0,1978,1980,1,0,0,
        0,1979,1981,5,167,0,0,1980,1979,1,0,0,0,1980,1981,1,0,0,0,1981,1996,
        1,0,0,0,1982,1984,3,224,112,0,1983,1982,1,0,0,0,1983,1984,1,0,0,
        0,1984,1986,1,0,0,0,1985,1987,5,167,0,0,1986,1985,1,0,0,0,1986,1987,
        1,0,0,0,1987,1988,1,0,0,0,1988,1990,5,12,0,0,1989,1991,5,167,0,0,
        1990,1989,1,0,0,0,1990,1991,1,0,0,0,1991,1993,1,0,0,0,1992,1994,
        3,226,113,0,1993,1992,1,0,0,0,1993,1994,1,0,0,0,1994,1997,1,0,0,
        0,1995,1997,3,326,163,0,1996,1983,1,0,0,0,1996,1995,1,0,0,0,1996,
        1997,1,0,0,0,1997,2002,1,0,0,0,1998,2000,5,167,0,0,1999,1998,1,0,
        0,0,1999,2000,1,0,0,0,2000,2001,1,0,0,0,2001,2003,3,218,109,0,2002,
        1999,1,0,0,0,2002,2003,1,0,0,0,2003,217,1,0,0,0,2004,2006,5,2,0,
        0,2005,2007,5,167,0,0,2006,2005,1,0,0,0,2006,2007,1,0,0,0,2007,2008,
        1,0,0,0,2008,2010,3,316,158,0,2009,2011,5,167,0,0,2010,2009,1,0,
        0,0,2010,2011,1,0,0,0,2011,2012,1,0,0,0,2012,2014,5,3,0,0,2013,2015,
        5,167,0,0,2014,2013,1,0,0,0,2014,2015,1,0,0,0,2015,2016,1,0,0,0,
        2016,2028,3,316,158,0,2017,2019,5,167,0,0,2018,2017,1,0,0,0,2018,
        2019,1,0,0,0,2019,2020,1,0,0,0,2020,2022,5,11,0,0,2021,2023,5,167,
        0,0,2022,2021,1,0,0,0,2022,2023,1,0,0,0,2023,2024,1,0,0,0,2024,2026,
        3,190,95,0,2025,2027,5,167,0,0,2026,2025,1,0,0,0,2026,2027,1,0,0,
        0,2027,2029,1,0,0,0,2028,2018,1,0,0,0,2028,2029,1,0,0,0,2029,2049,
        1,0,0,0,2030,2032,5,167,0,0,2031,2030,1,0,0,0,2031,2032,1,0,0,0,
        2032,2033,1,0,0,0,2033,2035,5,11,0,0,2034,2036,5,167,0,0,2035,2034,
        1,0,0,0,2035,2036,1,0,0,0,2036,2037,1,0,0,0,2037,2039,3,222,111,
        0,2038,2040,5,167,0,0,2039,2038,1,0,0,0,2039,2040,1,0,0,0,2040,2041,
        1,0,0,0,2041,2043,5,3,0,0,2042,2044,5,167,0,0,2043,2042,1,0,0,0,
        2043,2044,1,0,0,0,2044,2045,1,0,0,0,2045,2047,3,220,110,0,2046,2048,
        5,167,0,0,2047,2046,1,0,0,0,2047,2048,1,0,0,0,2048,2050,1,0,0,0,
        2049,2031,1,0,0,0,2049,2050,1,0,0,0,2050,2051,1,0,0,0,2051,2052,
        5,4,0,0,2052,219,1,0,0,0,2053,2055,5,9,0,0,2054,2056,5,167,0,0,2055,
        2054,1,0,0,0,2055,2056,1,0,0,0,2056,2058,1,0,0,0,2057,2059,3,178,
        89,0,2058,2057,1,0,0,0,2058,2059,1,0,0,0,2059,2061,1,0,0,0,2060,
        2062,5,167,0,0,2061,2060,1,0,0,0,2061,2062,1,0,0,0,2062,2063,1,0,
        0,0,2063,2064,5,10,0,0,2064,221,1,0,0,0,2065,2067,5,9,0,0,2066,2068,
        5,167,0,0,2067,2066,1,0,0,0,2067,2068,1,0,0,0,2068,2070,1,0,0,0,
        2069,2071,3,178,89,0,2070,2069,1,0,0,0,2070,2071,1,0,0,0,2071,2073,
        1,0,0,0,2072,2074,5,167,0,0,2073,2072,1,0,0,0,2073,2074,1,0,0,0,
        2074,2075,1,0,0,0,2075,2076,5,10,0,0,2076,223,1,0,0,0,2077,2078,
        5,155,0,0,2078,225,1,0,0,0,2079,2080,5,155,0,0,2080,227,1,0,0,0,
        2081,2082,3,330,165,0,2082,229,1,0,0,0,2083,2084,3,330,165,0,2084,
        231,1,0,0,0,2085,2086,3,234,117,0,2086,233,1,0,0,0,2087,2094,3,236,
        118,0,2088,2089,5,167,0,0,2089,2090,5,115,0,0,2090,2091,5,167,0,
        0,2091,2093,3,236,118,0,2092,2088,1,0,0,0,2093,2096,1,0,0,0,2094,
        2092,1,0,0,0,2094,2095,1,0,0,0,2095,235,1,0,0,0,2096,2094,1,0,0,
        0,2097,2104,3,238,119,0,2098,2099,5,167,0,0,2099,2100,5,145,0,0,
        2100,2101,5,167,0,0,2101,2103,3,238,119,0,2102,2098,1,0,0,0,2103,
        2106,1,0,0,0,2104,2102,1,0,0,0,2104,2105,1,0,0,0,2105,237,1,0,0,
        0,2106,2104,1,0,0,0,2107,2114,3,240,120,0,2108,2109,5,167,0,0,2109,
        2110,5,49,0,0,2110,2111,5,167,0,0,2111,2113,3,240,120,0,2112,2108,
        1,0,0,0,2113,2116,1,0,0,0,2114,2112,1,0,0,0,2114,2115,1,0,0,0,2115,
        239,1,0,0,0,2116,2114,1,0,0,0,2117,2119,5,110,0,0,2118,2120,5,167,
        0,0,2119,2118,1,0,0,0,2119,2120,1,0,0,0,2120,2122,1,0,0,0,2121,2117,
        1,0,0,0,2122,2125,1,0,0,0,2123,2121,1,0,0,0,2123,2124,1,0,0,0,2124,
        2126,1,0,0,0,2125,2123,1,0,0,0,2126,2127,3,242,121,0,2127,241,1,
        0,0,0,2128,2138,3,246,123,0,2129,2131,5,167,0,0,2130,2129,1,0,0,
        0,2130,2131,1,0,0,0,2131,2132,1,0,0,0,2132,2134,3,244,122,0,2133,
        2135,5,167,0,0,2134,2133,1,0,0,0,2134,2135,1,0,0,0,2135,2136,1,0,
        0,0,2136,2137,3,246,123,0,2137,2139,1,0,0,0,2138,2130,1,0,0,0,2138,
        2139,1,0,0,0,2139,2177,1,0,0,0,2140,2142,3,246,123,0,2141,2143,5,
        167,0,0,2142,2141,1,0,0,0,2142,2143,1,0,0,0,2143,2144,1,0,0,0,2144,
        2146,5,149,0,0,2145,2147,5,167,0,0,2146,2145,1,0,0,0,2146,2147,1,
        0,0,0,2147,2148,1,0,0,0,2148,2149,3,246,123,0,2149,2150,1,0,0,0,
        2150,2151,6,121,-1,0,2151,2177,1,0,0,0,2152,2154,3,246,123,0,2153,
        2155,5,167,0,0,2154,2153,1,0,0,0,2154,2155,1,0,0,0,2155,2156,1,0,
        0,0,2156,2158,3,244,122,0,2157,2159,5,167,0,0,2158,2157,1,0,0,0,
        2158,2159,1,0,0,0,2159,2160,1,0,0,0,2160,2170,3,246,123,0,2161,2163,
        5,167,0,0,2162,2161,1,0,0,0,2162,2163,1,0,0,0,2163,2164,1,0,0,0,
        2164,2166,3,244,122,0,2165,2167,5,167,0,0,2166,2165,1,0,0,0,2166,
        2167,1,0,0,0,2167,2168,1,0,0,0,2168,2169,3,246,123,0,2169,2171,1,
        0,0,0,2170,2162,1,0,0,0,2171,2172,1,0,0,0,2172,2170,1,0,0,0,2172,
        2173,1,0,0,0,2173,2174,1,0,0,0,2174,2175,6,121,-1,0,2175,2177,1,
        0,0,0,2176,2128,1,0,0,0,2176,2140,1,0,0,0,2176,2152,1,0,0,0,2177,
        243,1,0,0,0,2178,2179,7,2,0,0,2179,245,1,0,0,0,2180,2191,3,248,124,
        0,2181,2183,5,167,0,0,2182,2181,1,0,0,0,2182,2183,1,0,0,0,2183,2184,
        1,0,0,0,2184,2186,5,11,0,0,2185,2187,5,167,0,0,2186,2185,1,0,0,0,
        2186,2187,1,0,0,0,2187,2188,1,0,0,0,2188,2190,3,248,124,0,2189,2182,
        1,0,0,0,2190,2193,1,0,0,0,2191,2189,1,0,0,0,2191,2192,1,0,0,0,2192,
        247,1,0,0,0,2193,2191,1,0,0,0,2194,2205,3,250,125,0,2195,2197,5,
        167,0,0,2196,2195,1,0,0,0,2196,2197,1,0,0,0,2197,2198,1,0,0,0,2198,
        2200,5,18,0,0,2199,2201,5,167,0,0,2200,2199,1,0,0,0,2200,2201,1,
        0,0,0,2201,2202,1,0,0,0,2202,2204,3,250,125,0,2203,2196,1,0,0,0,
        2204,2207,1,0,0,0,2205,2203,1,0,0,0,2205,2206,1,0,0,0,2206,249,1,
        0,0,0,2207,2205,1,0,0,0,2208,2220,3,254,127,0,2209,2211,5,167,0,
        0,2210,2209,1,0,0,0,2210,2211,1,0,0,0,2211,2212,1,0,0,0,2212,2214,
        3,252,126,0,2213,2215,5,167,0,0,2214,2213,1,0,0,0,2214,2215,1,0,
        0,0,2215,2216,1,0,0,0,2216,2217,3,254,127,0,2217,2219,1,0,0,0,2218,
        2210,1,0,0,0,2219,2222,1,0,0,0,2220,2218,1,0,0,0,2220,2221,1,0,0,
        0,2221,251,1,0,0,0,2222,2220,1,0,0,0,2223,2224,7,3,0,0,2224,253,
        1,0,0,0,2225,2237,3,258,129,0,2226,2228,5,167,0,0,2227,2226,1,0,
        0,0,2227,2228,1,0,0,0,2228,2229,1,0,0,0,2229,2231,3,256,128,0,2230,
        2232,5,167,0,0,2231,2230,1,0,0,0,2231,2232,1,0,0,0,2232,2233,1,0,
        0,0,2233,2234,3,258,129,0,2234,2236,1,0,0,0,2235,2227,1,0,0,0,2236,
        2239,1,0,0,0,2237,2235,1,0,0,0,2237,2238,1,0,0,0,2238,255,1,0,0,
        0,2239,2237,1,0,0,0,2240,2241,7,4,0,0,2241,257,1,0,0,0,2242,2254,
        3,262,131,0,2243,2245,5,167,0,0,2244,2243,1,0,0,0,2244,2245,1,0,
        0,0,2245,2246,1,0,0,0,2246,2248,3,260,130,0,2247,2249,5,167,0,0,
        2248,2247,1,0,0,0,2248,2249,1,0,0,0,2249,2250,1,0,0,0,2250,2251,
        3,262,131,0,2251,2253,1,0,0,0,2252,2244,1,0,0,0,2253,2256,1,0,0,
        0,2254,2252,1,0,0,0,2254,2255,1,0,0,0,2255,259,1,0,0,0,2256,2254,
        1,0,0,0,2257,2258,7,5,0,0,2258,261,1,0,0,0,2259,2270,3,264,132,0,
        2260,2262,5,167,0,0,2261,2260,1,0,0,0,2261,2262,1,0,0,0,2262,2263,
        1,0,0,0,2263,2265,5,24,0,0,2264,2266,5,167,0,0,2265,2264,1,0,0,0,
        2265,2266,1,0,0,0,2266,2267,1,0,0,0,2267,2269,3,264,132,0,2268,2261,
        1,0,0,0,2269,2272,1,0,0,0,2270,2268,1,0,0,0,2270,2271,1,0,0,0,2271,
        263,1,0,0,0,2272,2270,1,0,0,0,2273,2275,5,150,0,0,2274,2276,5,167,
        0,0,2275,2274,1,0,0,0,2275,2276,1,0,0,0,2276,2278,1,0,0,0,2277,2273,
        1,0,0,0,2278,2281,1,0,0,0,2279,2277,1,0,0,0,2279,2280,1,0,0,0,2280,
        2282,1,0,0,0,2281,2279,1,0,0,0,2282,2287,3,266,133,0,2283,2285,5,
        167,0,0,2284,2283,1,0,0,0,2284,2285,1,0,0,0,2285,2286,1,0,0,0,2286,
        2288,5,151,0,0,2287,2284,1,0,0,0,2287,2288,1,0,0,0,2288,265,1,0,
        0,0,2289,2297,3,276,138,0,2290,2298,3,270,135,0,2291,2293,3,268,
        134,0,2292,2291,1,0,0,0,2293,2294,1,0,0,0,2294,2292,1,0,0,0,2294,
        2295,1,0,0,0,2295,2298,1,0,0,0,2296,2298,3,274,137,0,2297,2290,1,
        0,0,0,2297,2292,1,0,0,0,2297,2296,1,0,0,0,2297,2298,1,0,0,0,2298,
        267,1,0,0,0,2299,2300,5,167,0,0,2300,2302,5,94,0,0,2301,2303,5,167,
        0,0,2302,2301,1,0,0,0,2302,2303,1,0,0,0,2303,2304,1,0,0,0,2304,2319,
        3,276,138,0,2305,2306,5,7,0,0,2306,2307,3,232,116,0,2307,2308,5,
        8,0,0,2308,2319,1,0,0,0,2309,2311,5,7,0,0,2310,2312,3,232,116,0,
        2311,2310,1,0,0,0,2311,2312,1,0,0,0,2312,2313,1,0,0,0,2313,2315,
        5,152,0,0,2314,2316,3,232,116,0,2315,2314,1,0,0,0,2315,2316,1,0,
        0,0,2316,2317,1,0,0,0,2317,2319,5,8,0,0,2318,2299,1,0,0,0,2318,2305,
        1,0,0,0,2318,2309,1,0,0,0,2319,269,1,0,0,0,2320,2332,3,272,136,0,
        2321,2322,5,167,0,0,2322,2323,5,131,0,0,2323,2324,5,167,0,0,2324,
        2332,5,143,0,0,2325,2326,5,167,0,0,2326,2327,5,80,0,0,2327,2328,
        5,167,0,0,2328,2332,5,143,0,0,2329,2330,5,167,0,0,2330,2332,5,64,
        0,0,2331,2320,1,0,0,0,2331,2321,1,0,0,0,2331,2325,1,0,0,0,2331,2329,
        1,0,0,0,2332,2334,1,0,0,0,2333,2335,5,167,0,0,2334,2333,1,0,0,0,
        2334,2335,1,0,0,0,2335,2336,1,0,0,0,2336,2337,3,276,138,0,2337,271,
        1,0,0,0,2338,2340,5,167,0,0,2339,2338,1,0,0,0,2339,2340,1,0,0,0,
        2340,2341,1,0,0,0,2341,2342,5,25,0,0,2342,273,1,0,0,0,2343,2344,
        5,167,0,0,2344,2345,5,97,0,0,2345,2346,5,167,0,0,2346,2354,5,111,
        0,0,2347,2348,5,167,0,0,2348,2349,5,97,0,0,2349,2350,5,167,0,0,2350,
        2351,5,110,0,0,2351,2352,5,167,0,0,2352,2354,5,111,0,0,2353,2343,
        1,0,0,0,2353,2347,1,0,0,0,2354,275,1,0,0,0,2355,2362,3,278,139,0,
        2356,2358,5,167,0,0,2357,2356,1,0,0,0,2357,2358,1,0,0,0,2358,2359,
        1,0,0,0,2359,2361,3,310,155,0,2360,2357,1,0,0,0,2361,2364,1,0,0,
        0,2362,2360,1,0,0,0,2362,2363,1,0,0,0,2363,277,1,0,0,0,2364,2362,
        1,0,0,0,2365,2375,3,280,140,0,2366,2375,3,320,160,0,2367,2375,3,
        312,156,0,2368,2375,3,292,146,0,2369,2375,3,294,147,0,2370,2375,
        3,304,152,0,2371,2375,3,306,153,0,2372,2375,3,308,154,0,2373,2375,
        3,316,158,0,2374,2365,1,0,0,0,2374,2366,1,0,0,0,2374,2367,1,0,0,
        0,2374,2368,1,0,0,0,2374,2369,1,0,0,0,2374,2370,1,0,0,0,2374,2371,
        1,0,0,0,2374,2372,1,0,0,0,2374,2373,1,0,0,0,2375,279,1,0,0,0,2376,
        2383,3,318,159,0,2377,2383,5,153,0,0,2378,2383,3,282,141,0,2379,
        2383,5,111,0,0,2380,2383,3,284,142,0,2381,2383,3,288,144,0,2382,
        2376,1,0,0,0,2382,2377,1,0,0,0,2382,2378,1,0,0,0,2382,2379,1,0,0,
        0,2382,2380,1,0,0,0,2382,2381,1,0,0,0,2383,281,1,0,0,0,2384,2385,
        7,6,0,0,2385,283,1,0,0,0,2386,2388,5,7,0,0,2387,2389,5,167,0,0,2388,
        2387,1,0,0,0,2388,2389,1,0,0,0,2389,2403,1,0,0,0,2390,2392,3,232,
        116,0,2391,2393,5,167,0,0,2392,2391,1,0,0,0,2392,2393,1,0,0,0,2393,
        2400,1,0,0,0,2394,2396,3,286,143,0,2395,2397,5,167,0,0,2396,2395,
        1,0,0,0,2396,2397,1,0,0,0,2397,2399,1,0,0,0,2398,2394,1,0,0,0,2399,
        2402,1,0,0,0,2400,2398,1,0,0,0,2400,2401,1,0,0,0,2401,2404,1,0,0,
        0,2402,2400,1,0,0,0,2403,2390,1,0,0,0,2403,2404,1,0,0,0,2404,2405,
        1,0,0,0,2405,2406,5,8,0,0,2406,285,1,0,0,0,2407,2409,5,3,0,0,2408,
        2410,5,167,0,0,2409,2408,1,0,0,0,2409,2410,1,0,0,0,2410,2412,1,0,
        0,0,2411,2413,3,232,116,0,2412,2411,1,0,0,0,2412,2413,1,0,0,0,2413,
        287,1,0,0,0,2414,2416,5,9,0,0,2415,2417,5,167,0,0,2416,2415,1,0,
        0,0,2416,2417,1,0,0,0,2417,2418,1,0,0,0,2418,2420,3,290,145,0,2419,
        2421,5,167,0,0,2420,2419,1,0,0,0,2420,2421,1,0,0,0,2421,2432,1,0,
        0,0,2422,2424,5,3,0,0,2423,2425,5,167,0,0,2424,2423,1,0,0,0,2424,
        2425,1,0,0,0,2425,2426,1,0,0,0,2426,2428,3,290,145,0,2427,2429,5,
        167,0,0,2428,2427,1,0,0,0,2428,2429,1,0,0,0,2429,2431,1,0,0,0,2430,
        2422,1,0,0,0,2431,2434,1,0,0,0,2432,2430,1,0,0,0,2432,2433,1,0,0,
        0,2433,2435,1,0,0,0,2434,2432,1,0,0,0,2435,2436,5,10,0,0,2436,289,
        1,0,0,0,2437,2440,3,332,166,0,2438,2440,5,153,0,0,2439,2437,1,0,
        0,0,2439,2438,1,0,0,0,2440,2442,1,0,0,0,2441,2443,5,167,0,0,2442,
        2441,1,0,0,0,2442,2443,1,0,0,0,2443,2444,1,0,0,0,2444,2446,5,152,
        0,0,2445,2447,5,167,0,0,2446,2445,1,0,0,0,2446,2447,1,0,0,0,2447,
        2448,1,0,0,0,2448,2449,3,232,116,0,2449,291,1,0,0,0,2450,2452,5,
        2,0,0,2451,2453,5,167,0,0,2452,2451,1,0,0,0,2452,2453,1,0,0,0,2453,
        2454,1,0,0,0,2454,2456,3,232,116,0,2455,2457,5,167,0,0,2456,2455,
        1,0,0,0,2456,2457,1,0,0,0,2457,2458,1,0,0,0,2458,2459,5,4,0,0,2459,
        293,1,0,0,0,2460,2462,5,66,0,0,2461,2463,5,167,0,0,2462,2461,1,0,
        0,0,2462,2463,1,0,0,0,2463,2464,1,0,0,0,2464,2466,5,2,0,0,2465,2467,
        5,167,0,0,2466,2465,1,0,0,0,2466,2467,1,0,0,0,2467,2468,1,0,0,0,
        2468,2470,5,147,0,0,2469,2471,5,167,0,0,2470,2469,1,0,0,0,2470,2471,
        1,0,0,0,2471,2472,1,0,0,0,2472,2538,5,4,0,0,2473,2475,5,58,0,0,2474,
        2476,5,167,0,0,2475,2474,1,0,0,0,2475,2476,1,0,0,0,2476,2477,1,0,
        0,0,2477,2479,5,2,0,0,2478,2480,5,167,0,0,2479,2478,1,0,0,0,2479,
        2480,1,0,0,0,2480,2481,1,0,0,0,2481,2483,3,298,149,0,2482,2484,5,
        167,0,0,2483,2482,1,0,0,0,2483,2484,1,0,0,0,2484,2495,1,0,0,0,2485,
        2487,5,50,0,0,2486,2488,5,167,0,0,2487,2486,1,0,0,0,2487,2488,1,
        0,0,0,2488,2489,1,0,0,0,2489,2496,3,100,50,0,2490,2492,5,3,0,0,2491,
        2493,5,167,0,0,2492,2491,1,0,0,0,2492,2493,1,0,0,0,2493,2494,1,0,
        0,0,2494,2496,3,298,149,0,2495,2485,1,0,0,0,2495,2490,1,0,0,0,2496,
        2498,1,0,0,0,2497,2499,5,167,0,0,2498,2497,1,0,0,0,2498,2499,1,0,
        0,0,2499,2500,1,0,0,0,2500,2501,5,4,0,0,2501,2538,1,0,0,0,2502,2504,
        3,296,148,0,2503,2505,5,167,0,0,2504,2503,1,0,0,0,2504,2505,1,0,
        0,0,2505,2506,1,0,0,0,2506,2508,5,2,0,0,2507,2509,5,167,0,0,2508,
        2507,1,0,0,0,2508,2509,1,0,0,0,2509,2514,1,0,0,0,2510,2512,5,76,
        0,0,2511,2513,5,167,0,0,2512,2511,1,0,0,0,2512,2513,1,0,0,0,2513,
        2515,1,0,0,0,2514,2510,1,0,0,0,2514,2515,1,0,0,0,2515,2533,1,0,0,
        0,2516,2518,3,298,149,0,2517,2519,5,167,0,0,2518,2517,1,0,0,0,2518,
        2519,1,0,0,0,2519,2530,1,0,0,0,2520,2522,5,3,0,0,2521,2523,5,167,
        0,0,2522,2521,1,0,0,0,2522,2523,1,0,0,0,2523,2524,1,0,0,0,2524,2526,
        3,298,149,0,2525,2527,5,167,0,0,2526,2525,1,0,0,0,2526,2527,1,0,
        0,0,2527,2529,1,0,0,0,2528,2520,1,0,0,0,2529,2532,1,0,0,0,2530,2528,
        1,0,0,0,2530,2531,1,0,0,0,2531,2534,1,0,0,0,2532,2530,1,0,0,0,2533,
        2516,1,0,0,0,2533,2534,1,0,0,0,2534,2535,1,0,0,0,2535,2536,5,4,0,
        0,2536,2538,1,0,0,0,2537,2460,1,0,0,0,2537,2473,1,0,0,0,2537,2502,
        1,0,0,0,2538,295,1,0,0,0,2539,2540,3,332,166,0,2540,297,1,0,0,0,
        2541,2543,3,332,166,0,2542,2544,5,167,0,0,2543,2542,1,0,0,0,2543,
        2544,1,0,0,0,2544,2545,1,0,0,0,2545,2546,5,152,0,0,2546,2548,5,6,
        0,0,2547,2549,5,167,0,0,2548,2547,1,0,0,0,2548,2549,1,0,0,0,2549,
        2551,1,0,0,0,2550,2541,1,0,0,0,2550,2551,1,0,0,0,2551,2552,1,0,0,
        0,2552,2555,3,232,116,0,2553,2555,3,300,150,0,2554,2550,1,0,0,0,
        2554,2553,1,0,0,0,2555,299,1,0,0,0,2556,2558,3,302,151,0,2557,2559,
        5,167,0,0,2558,2557,1,0,0,0,2558,2559,1,0,0,0,2559,2560,1,0,0,0,
        2560,2561,5,150,0,0,2561,2563,5,16,0,0,2562,2564,5,167,0,0,2563,
        2562,1,0,0,0,2563,2564,1,0,0,0,2564,2565,1,0,0,0,2565,2567,3,232,
        116,0,2566,2568,5,167,0,0,2567,2566,1,0,0,0,2567,2568,1,0,0,0,2568,
        301,1,0,0,0,2569,2594,3,332,166,0,2570,2572,5,2,0,0,2571,2573,5,
        167,0,0,2572,2571,1,0,0,0,2572,2573,1,0,0,0,2573,2574,1,0,0,0,2574,
        2576,3,332,166,0,2575,2577,5,167,0,0,2576,2575,1,0,0,0,2576,2577,
        1,0,0,0,2577,2588,1,0,0,0,2578,2580,5,3,0,0,2579,2581,5,167,0,0,
        2580,2579,1,0,0,0,2580,2581,1,0,0,0,2581,2582,1,0,0,0,2582,2584,
        3,332,166,0,2583,2585,5,167,0,0,2584,2583,1,0,0,0,2584,2585,1,0,
        0,0,2585,2587,1,0,0,0,2586,2578,1,0,0,0,2587,2590,1,0,0,0,2588,2586,
        1,0,0,0,2588,2589,1,0,0,0,2589,2591,1,0,0,0,2590,2588,1,0,0,0,2591,
        2592,5,4,0,0,2592,2594,1,0,0,0,2593,2569,1,0,0,0,2593,2570,1,0,0,
        0,2594,303,1,0,0,0,2595,2600,3,200,100,0,2596,2598,5,167,0,0,2597,
        2596,1,0,0,0,2597,2598,1,0,0,0,2598,2599,1,0,0,0,2599,2601,3,202,
        101,0,2600,2597,1,0,0,0,2601,2602,1,0,0,0,2602,2600,1,0,0,0,2602,
        2603,1,0,0,0,2603,305,1,0,0,0,2604,2606,5,81,0,0,2605,2607,5,167,
        0,0,2606,2605,1,0,0,0,2606,2607,1,0,0,0,2607,2608,1,0,0,0,2608,2610,
        5,9,0,0,2609,2611,5,167,0,0,2610,2609,1,0,0,0,2610,2611,1,0,0,0,
        2611,2612,1,0,0,0,2612,2614,5,103,0,0,2613,2615,5,167,0,0,2614,2613,
        1,0,0,0,2614,2615,1,0,0,0,2615,2616,1,0,0,0,2616,2621,3,192,96,0,
        2617,2619,5,167,0,0,2618,2617,1,0,0,0,2618,2619,1,0,0,0,2619,2620,
        1,0,0,0,2620,2622,3,190,95,0,2621,2618,1,0,0,0,2621,2622,1,0,0,0,
        2622,2624,1,0,0,0,2623,2625,5,167,0,0,2624,2623,1,0,0,0,2624,2625,
        1,0,0,0,2625,2626,1,0,0,0,2626,2627,5,10,0,0,2627,307,1,0,0,0,2628,
        2630,5,66,0,0,2629,2631,5,167,0,0,2630,2629,1,0,0,0,2630,2631,1,
        0,0,0,2631,2632,1,0,0,0,2632,2634,5,9,0,0,2633,2635,5,167,0,0,2634,
        2633,1,0,0,0,2634,2635,1,0,0,0,2635,2636,1,0,0,0,2636,2638,5,103,
        0,0,2637,2639,5,167,0,0,2638,2637,1,0,0,0,2638,2639,1,0,0,0,2639,
        2640,1,0,0,0,2640,2645,3,192,96,0,2641,2643,5,167,0,0,2642,2641,
        1,0,0,0,2642,2643,1,0,0,0,2643,2644,1,0,0,0,2644,2646,3,190,95,0,
        2645,2642,1,0,0,0,2645,2646,1,0,0,0,2646,2648,1,0,0,0,2647,2649,
        5,167,0,0,2648,2647,1,0,0,0,2648,2649,1,0,0,0,2649,2650,1,0,0,0,
        2650,2651,5,10,0,0,2651,309,1,0,0,0,2652,2654,5,5,0,0,2653,2655,
        5,167,0,0,2654,2653,1,0,0,0,2654,2655,1,0,0,0,2655,2658,1,0,0,0,
        2656,2659,3,324,162,0,2657,2659,5,147,0,0,2658,2656,1,0,0,0,2658,
        2657,1,0,0,0,2659,311,1,0,0,0,2660,2665,5,57,0,0,2661,2663,5,167,
        0,0,2662,2661,1,0,0,0,2662,2663,1,0,0,0,2663,2664,1,0,0,0,2664,2666,
        3,314,157,0,2665,2662,1,0,0,0,2666,2667,1,0,0,0,2667,2665,1,0,0,
        0,2667,2668,1,0,0,0,2668,2683,1,0,0,0,2669,2671,5,57,0,0,2670,2672,
        5,167,0,0,2671,2670,1,0,0,0,2671,2672,1,0,0,0,2672,2673,1,0,0,0,
        2673,2678,3,232,116,0,2674,2676,5,167,0,0,2675,2674,1,0,0,0,2675,
        2676,1,0,0,0,2676,2677,1,0,0,0,2677,2679,3,314,157,0,2678,2675,1,
        0,0,0,2679,2680,1,0,0,0,2680,2678,1,0,0,0,2680,2681,1,0,0,0,2681,
        2683,1,0,0,0,2682,2660,1,0,0,0,2682,2669,1,0,0,0,2683,2692,1,0,0,
        0,2684,2686,5,167,0,0,2685,2684,1,0,0,0,2685,2686,1,0,0,0,2686,2687,
        1,0,0,0,2687,2689,5,78,0,0,2688,2690,5,167,0,0,2689,2688,1,0,0,0,
        2689,2690,1,0,0,0,2690,2691,1,0,0,0,2691,2693,3,232,116,0,2692,2685,
        1,0,0,0,2692,2693,1,0,0,0,2693,2695,1,0,0,0,2694,2696,5,167,0,0,
        2695,2694,1,0,0,0,2695,2696,1,0,0,0,2696,2697,1,0,0,0,2697,2698,
        5,79,0,0,2698,313,1,0,0,0,2699,2701,5,141,0,0,2700,2702,5,167,0,
        0,2701,2700,1,0,0,0,2701,2702,1,0,0,0,2702,2703,1,0,0,0,2703,2705,
        3,232,116,0,2704,2706,5,167,0,0,2705,2704,1,0,0,0,2705,2706,1,0,
        0,0,2706,2707,1,0,0,0,2707,2709,5,133,0,0,2708,2710,5,167,0,0,2709,
        2708,1,0,0,0,2709,2710,1,0,0,0,2710,2711,1,0,0,0,2711,2712,3,232,
        116,0,2712,315,1,0,0,0,2713,2714,3,332,166,0,2714,317,1,0,0,0,2715,
        2718,3,328,164,0,2716,2718,3,326,163,0,2717,2715,1,0,0,0,2717,2716,
        1,0,0,0,2718,319,1,0,0,0,2719,2722,5,26,0,0,2720,2723,3,332,166,
        0,2721,2723,5,155,0,0,2722,2720,1,0,0,0,2722,2721,1,0,0,0,2723,321,
        1,0,0,0,2724,2726,3,278,139,0,2725,2727,5,167,0,0,2726,2725,1,0,
        0,0,2726,2727,1,0,0,0,2727,2728,1,0,0,0,2728,2729,3,310,155,0,2729,
        323,1,0,0,0,2730,2731,3,330,165,0,2731,325,1,0,0,0,2732,2733,5,155,
        0,0,2733,327,1,0,0,0,2734,2735,5,162,0,0,2735,329,1,0,0,0,2736,2737,
        3,332,166,0,2737,331,1,0,0,0,2738,2744,5,163,0,0,2739,2740,5,166,
        0,0,2740,2744,6,166,-1,0,2741,2744,5,156,0,0,2742,2744,3,334,167,
        0,2743,2738,1,0,0,0,2743,2739,1,0,0,0,2743,2741,1,0,0,0,2743,2742,
        1,0,0,0,2744,333,1,0,0,0,2745,2746,7,7,0,0,2746,335,1,0,0,0,2747,
        2748,7,8,0,0,2748,337,1,0,0,0,2749,2750,7,9,0,0,2750,339,1,0,0,0,
        2751,2752,7,10,0,0,2752,341,1,0,0,0,472,344,348,353,357,362,365,
        369,372,396,402,406,409,415,418,422,426,430,435,439,446,450,458,
        462,472,476,480,485,498,502,510,513,521,524,539,544,550,554,557,
        560,566,570,576,580,585,600,604,626,630,633,636,639,642,646,651,
        655,665,669,674,679,684,690,694,698,703,710,714,718,721,725,729,
        748,752,756,760,764,769,782,786,790,794,798,802,804,808,812,814,
        829,833,837,841,845,850,853,857,861,863,867,871,873,892,903,910,
        923,930,936,939,949,952,960,963,969,972,978,993,1009,1018,1044,1048,
        1053,1062,1066,1071,1079,1085,1089,1093,1101,1105,1109,1115,1119,
        1123,1129,1133,1137,1141,1145,1151,1155,1159,1163,1167,1171,1177,
        1184,1189,1195,1214,1218,1226,1234,1236,1246,1250,1254,1260,1264,
        1269,1274,1279,1284,1288,1293,1299,1304,1307,1311,1315,1319,1325,
        1329,1334,1339,1343,1346,1350,1354,1358,1362,1366,1372,1376,1381,
        1385,1394,1400,1408,1412,1416,1420,1427,1430,1433,1436,1440,1442,
        1448,1451,1455,1459,1463,1467,1471,1475,1480,1486,1490,1494,1498,
        1503,1507,1516,1520,1525,1539,1541,1543,1548,1558,1564,1571,1584,
        1588,1592,1596,1601,1606,1610,1616,1620,1624,1628,1633,1639,1642,
        1648,1651,1657,1661,1665,1669,1673,1678,1683,1687,1692,1695,1704,
        1713,1718,1731,1734,1742,1746,1751,1756,1760,1765,1771,1776,1783,
        1787,1791,1793,1797,1799,1803,1805,1811,1817,1821,1824,1827,1833,
        1836,1839,1843,1849,1852,1855,1859,1863,1867,1869,1873,1875,1879,
        1881,1885,1887,1893,1897,1901,1905,1909,1913,1917,1921,1925,1928,
        1934,1938,1942,1945,1950,1955,1960,1965,1971,1977,1980,1983,1986,
        1990,1993,1996,1999,2002,2006,2010,2014,2018,2022,2026,2028,2031,
        2035,2039,2043,2047,2049,2055,2058,2061,2067,2070,2073,2094,2104,
        2114,2119,2123,2130,2134,2138,2142,2146,2154,2158,2162,2166,2172,
        2176,2182,2186,2191,2196,2200,2205,2210,2214,2220,2227,2231,2237,
        2244,2248,2254,2261,2265,2270,2275,2279,2284,2287,2294,2297,2302,
        2311,2315,2318,2331,2334,2339,2353,2357,2362,2374,2382,2388,2392,
        2396,2400,2403,2409,2412,2416,2420,2424,2428,2432,2439,2442,2446,
        2452,2456,2462,2466,2470,2475,2479,2483,2487,2492,2495,2498,2504,
        2508,2512,2514,2518,2522,2526,2530,2533,2537,2543,2548,2550,2554,
        2558,2563,2567,2572,2576,2580,2584,2588,2593,2597,2602,2606,2610,
        2614,2618,2621,2624,2630,2634,2638,2642,2645,2648,2654,2658,2662,
        2667,2671,2675,2680,2682,2685,2689,2692,2695,2701,2705,2709,2717,
        2722,2726,2743
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
    public RDFGRAPH(): antlr.TerminalNode {
        return this.getToken(CypherParser.RDFGRAPH, 0);
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

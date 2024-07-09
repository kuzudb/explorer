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
    public static readonly HINT = 90;
    public static readonly IMPORT = 91;
    public static readonly IF = 92;
    public static readonly IN = 93;
    public static readonly INCREMENT = 94;
    public static readonly INSTALL = 95;
    public static readonly IS = 96;
    public static readonly JOIN = 97;
    public static readonly KEY = 98;
    public static readonly LIMIT = 99;
    public static readonly LOAD = 100;
    public static readonly MACRO = 101;
    public static readonly MATCH = 102;
    public static readonly MAXVALUE = 103;
    public static readonly MERGE = 104;
    public static readonly MINVALUE = 105;
    public static readonly MULTI_JOIN = 106;
    public static readonly NO = 107;
    public static readonly NODE = 108;
    public static readonly NOT = 109;
    public static readonly NULL = 110;
    public static readonly ON = 111;
    public static readonly ONLY = 112;
    public static readonly OPTIONAL = 113;
    public static readonly OR = 114;
    public static readonly ORDER = 115;
    public static readonly PRIMARY = 116;
    public static readonly PROFILE = 117;
    public static readonly PROJECT = 118;
    public static readonly RDFGRAPH = 119;
    public static readonly READ = 120;
    public static readonly REL = 121;
    public static readonly RENAME = 122;
    public static readonly RETURN = 123;
    public static readonly ROLLBACK = 124;
    public static readonly ROLLBACK_SKIP_CHECKPOINT = 125;
    public static readonly SEQUENCE = 126;
    public static readonly SET = 127;
    public static readonly SHORTEST = 128;
    public static readonly START = 129;
    public static readonly STARTS = 130;
    public static readonly TABLE = 131;
    public static readonly THEN = 132;
    public static readonly TO = 133;
    public static readonly TRANSACTION = 134;
    public static readonly TRUE = 135;
    public static readonly TYPE = 136;
    public static readonly UNION = 137;
    public static readonly UNWIND = 138;
    public static readonly USE = 139;
    public static readonly WHEN = 140;
    public static readonly WHERE = 141;
    public static readonly WITH = 142;
    public static readonly WRITE = 143;
    public static readonly XOR = 144;
    public static readonly DECIMAL = 145;
    public static readonly STAR = 146;
    public static readonly L_SKIP = 147;
    public static readonly INVALID_NOT_EQUAL = 148;
    public static readonly MINUS = 149;
    public static readonly FACTORIAL = 150;
    public static readonly COLON = 151;
    public static readonly StringLiteral = 152;
    public static readonly EscapedChar = 153;
    public static readonly DecimalInteger = 154;
    public static readonly HexLetter = 155;
    public static readonly HexDigit = 156;
    public static readonly Digit = 157;
    public static readonly NonZeroDigit = 158;
    public static readonly NonZeroOctDigit = 159;
    public static readonly ZeroDigit = 160;
    public static readonly RegularDecimalReal = 161;
    public static readonly UnescapedSymbolicName = 162;
    public static readonly IdentifierStart = 163;
    public static readonly IdentifierPart = 164;
    public static readonly EscapedSymbolicName = 165;
    public static readonly SP = 166;
    public static readonly WHITESPACE = 167;
    public static readonly CypherComment = 168;
    public static readonly Unknown = 169;
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
        null, null, null, null, null, null, null, "'*'", null, "'!='", "'-'", 
        "'!'", "':'", null, null, null, null, null, null, null, null, "'0'"
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
        "GRAPH", "GROUP", "HEADERS", "HINT", "IMPORT", "IF", "IN", "INCREMENT", 
        "INSTALL", "IS", "JOIN", "KEY", "LIMIT", "LOAD", "MACRO", "MATCH", 
        "MAXVALUE", "MERGE", "MINVALUE", "MULTI_JOIN", "NO", "NODE", "NOT", 
        "NULL", "ON", "ONLY", "OPTIONAL", "OR", "ORDER", "PRIMARY", "PROFILE", 
        "PROJECT", "RDFGRAPH", "READ", "REL", "RENAME", "RETURN", "ROLLBACK", 
        "ROLLBACK_SKIP_CHECKPOINT", "SEQUENCE", "SET", "SHORTEST", "START", 
        "STARTS", "TABLE", "THEN", "TO", "TRANSACTION", "TRUE", "TYPE", 
        "UNION", "UNWIND", "USE", "WHEN", "WHERE", "WITH", "WRITE", "XOR", 
        "DECIMAL", "STAR", "L_SKIP", "INVALID_NOT_EQUAL", "MINUS", "FACTORIAL", 
        "COLON", "StringLiteral", "EscapedChar", "DecimalInteger", "HexLetter", 
        "HexDigit", "Digit", "NonZeroDigit", "NonZeroOctDigit", "ZeroDigit", 
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
                    if (_la===166) {
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
            if (_la===166) {
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
            if (_la===81 || _la===117) {
                {
                this.state = 359;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 363;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
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
                if (_la===166) {
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
            this.state = 394;
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
                this.kU_CreateRelTableGroup();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 376;
                this.kU_CreateRdfGraph();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 377;
                this.kU_CreateSequence();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 378;
                this.kU_CreateType();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 379;
                this.kU_Drop();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 380;
                this.kU_AlterTable();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 381;
                this.kU_CopyFrom();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 382;
                this.kU_CopyFromByColumn();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 383;
                this.kU_CopyTO();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 384;
                this.kU_StandaloneCall();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 385;
                this.kU_CreateMacro();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 386;
                this.kU_CommentOn();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 387;
                this.kU_Transaction();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 388;
                this.kU_Extension();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 389;
                this.kU_ExportDatabase();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 390;
                this.kU_ImportDatabase();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 391;
                this.kU_AttachDatabase();
                }
                break;
            case 21:
                this.enterOuterAlt(localctx, 21);
                {
                this.state = 392;
                this.kU_DetachDatabase();
                }
                break;
            case 22:
                this.enterOuterAlt(localctx, 22);
                {
                this.state = 393;
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
            this.state = 396;
            this.match(CypherParser.COPY);
            this.state = 397;
            this.match(CypherParser.SP);
            this.state = 398;
            this.oC_SchemaName();
            this.state = 407;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                {
                {
                this.state = 400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 399;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 402;
                this.kU_ColumnNames();
                this.state = 404;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 403;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                break;
            case 2:
                {
                this.state = 406;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 409;
            this.match(CypherParser.FROM);
            this.state = 410;
            this.match(CypherParser.SP);
            this.state = 411;
            this.kU_ScanSource();
            this.state = 416;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                {
                this.state = 413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 412;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 415;
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
            this.state = 418;
            this.match(CypherParser.T__1);
            this.state = 420;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 419;
                this.match(CypherParser.SP);
                }
            }

            this.state = 422;
            this.oC_SchemaName();
            this.state = 433;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 424;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 423;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 426;
                    this.match(CypherParser.T__2);
                    this.state = 428;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 427;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 430;
                    this.oC_SchemaName();
                    }
                    }
                }
                this.state = 435;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
            }
            this.state = 437;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 436;
                this.match(CypherParser.SP);
                }
            }

            this.state = 439;
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
            this.state = 460;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 441;
                this.kU_FilePaths();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 442;
                this.match(CypherParser.T__1);
                this.state = 444;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 443;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 446;
                this.oC_Query();
                this.state = 448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 447;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 450;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 452;
                this.oC_Variable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 453;
                this.oC_Variable();
                this.state = 454;
                this.match(CypherParser.T__4);
                this.state = 456;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 455;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 458;
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
            this.state = 462;
            this.match(CypherParser.COPY);
            this.state = 463;
            this.match(CypherParser.SP);
            this.state = 464;
            this.oC_SchemaName();
            this.state = 465;
            this.match(CypherParser.SP);
            this.state = 466;
            this.match(CypherParser.FROM);
            this.state = 467;
            this.match(CypherParser.SP);
            this.state = 468;
            this.match(CypherParser.T__1);
            this.state = 470;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 469;
                this.match(CypherParser.SP);
                }
            }

            this.state = 472;
            this.match(CypherParser.StringLiteral);
            this.state = 483;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3 || _la===166) {
                {
                {
                this.state = 474;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 473;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 476;
                this.match(CypherParser.T__2);
                this.state = 478;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 477;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 480;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 485;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 486;
            this.match(CypherParser.T__3);
            this.state = 487;
            this.match(CypherParser.SP);
            this.state = 488;
            this.match(CypherParser.BY);
            this.state = 489;
            this.match(CypherParser.SP);
            this.state = 490;
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
            this.state = 492;
            this.match(CypherParser.COPY);
            this.state = 493;
            this.match(CypherParser.SP);
            this.state = 494;
            this.match(CypherParser.T__1);
            this.state = 496;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 495;
                this.match(CypherParser.SP);
                }
            }

            this.state = 498;
            this.oC_Query();
            this.state = 500;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 499;
                this.match(CypherParser.SP);
                }
            }

            this.state = 502;
            this.match(CypherParser.T__3);
            this.state = 503;
            this.match(CypherParser.SP);
            this.state = 504;
            this.match(CypherParser.TO);
            this.state = 505;
            this.match(CypherParser.SP);
            this.state = 506;
            this.match(CypherParser.StringLiteral);
            this.state = 511;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
            case 1:
                {
                this.state = 508;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 507;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 510;
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
            this.state = 513;
            this.match(CypherParser.EXPORT);
            this.state = 514;
            this.match(CypherParser.SP);
            this.state = 515;
            this.match(CypherParser.DATABASE);
            this.state = 516;
            this.match(CypherParser.SP);
            this.state = 517;
            this.match(CypherParser.StringLiteral);
            this.state = 522;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
            case 1:
                {
                this.state = 519;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 518;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 521;
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
            this.state = 524;
            this.match(CypherParser.IMPORT);
            this.state = 525;
            this.match(CypherParser.SP);
            this.state = 526;
            this.match(CypherParser.DATABASE);
            this.state = 527;
            this.match(CypherParser.SP);
            this.state = 528;
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
            this.state = 530;
            this.match(CypherParser.ATTACH);
            this.state = 531;
            this.match(CypherParser.SP);
            this.state = 532;
            this.match(CypherParser.StringLiteral);
            this.state = 537;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
            case 1:
                {
                this.state = 533;
                this.match(CypherParser.SP);
                this.state = 534;
                this.match(CypherParser.AS);
                this.state = 535;
                this.match(CypherParser.SP);
                this.state = 536;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 539;
            this.match(CypherParser.SP);
            this.state = 540;
            this.match(CypherParser.T__1);
            this.state = 542;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 541;
                this.match(CypherParser.SP);
                }
            }

            this.state = 544;
            this.match(CypherParser.DBTYPE);
            this.state = 545;
            this.match(CypherParser.SP);
            this.state = 546;
            this.oC_SymbolicName();
            this.state = 555;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
            case 1:
                {
                this.state = 548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 547;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 550;
                this.match(CypherParser.T__2);
                this.state = 552;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 551;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 554;
                this.kU_Options();
                }
                break;
            }
            this.state = 558;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 557;
                this.match(CypherParser.SP);
                }
            }

            this.state = 560;
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
            this.state = 562;
            this.oC_SymbolicName();
            this.state = 564;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 563;
                this.match(CypherParser.SP);
                }
            }

            this.state = 566;
            this.match(CypherParser.T__5);
            this.state = 568;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 567;
                this.match(CypherParser.SP);
                }
            }

            this.state = 570;
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
            this.state = 572;
            this.kU_Option();
            this.state = 583;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 574;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 573;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 576;
                    this.match(CypherParser.T__2);
                    this.state = 578;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 577;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 580;
                    this.kU_Option();
                    }
                    }
                }
                this.state = 585;
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
            this.state = 586;
            this.match(CypherParser.DETACH);
            this.state = 587;
            this.match(CypherParser.SP);
            this.state = 588;
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
            this.state = 590;
            this.match(CypherParser.USE);
            this.state = 591;
            this.match(CypherParser.SP);
            this.state = 592;
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
            this.state = 594;
            this.match(CypherParser.CALL);
            this.state = 595;
            this.match(CypherParser.SP);
            this.state = 596;
            this.oC_SymbolicName();
            this.state = 598;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 597;
                this.match(CypherParser.SP);
                }
            }

            this.state = 600;
            this.match(CypherParser.T__5);
            this.state = 602;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 601;
                this.match(CypherParser.SP);
                }
            }

            this.state = 604;
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
            this.state = 606;
            this.match(CypherParser.COMMENT);
            this.state = 607;
            this.match(CypherParser.SP);
            this.state = 608;
            this.match(CypherParser.ON);
            this.state = 609;
            this.match(CypherParser.SP);
            this.state = 610;
            this.match(CypherParser.TABLE);
            this.state = 611;
            this.match(CypherParser.SP);
            this.state = 612;
            this.oC_SchemaName();
            this.state = 613;
            this.match(CypherParser.SP);
            this.state = 614;
            this.match(CypherParser.IS);
            this.state = 615;
            this.match(CypherParser.SP);
            this.state = 616;
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
            this.state = 618;
            this.match(CypherParser.CREATE);
            this.state = 619;
            this.match(CypherParser.SP);
            this.state = 620;
            this.match(CypherParser.MACRO);
            this.state = 621;
            this.match(CypherParser.SP);
            this.state = 622;
            this.oC_FunctionName();
            this.state = 624;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 623;
                this.match(CypherParser.SP);
                }
            }

            this.state = 626;
            this.match(CypherParser.T__1);
            this.state = 628;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
            case 1:
                {
                this.state = 627;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 631;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
            case 1:
                {
                this.state = 630;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 634;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
            case 1:
                {
                this.state = 633;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 637;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382991765) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 233483335) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 170199933) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 1153) !== 0)) {
                {
                this.state = 636;
                this.kU_DefaultArg();
                }
            }

            this.state = 649;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 640;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 639;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 642;
                    this.match(CypherParser.T__2);
                    this.state = 644;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 643;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 646;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 651;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
            }
            this.state = 653;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 652;
                this.match(CypherParser.SP);
                }
            }

            this.state = 655;
            this.match(CypherParser.T__3);
            this.state = 656;
            this.match(CypherParser.SP);
            this.state = 657;
            this.match(CypherParser.AS);
            this.state = 658;
            this.match(CypherParser.SP);
            this.state = 659;
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
            this.state = 661;
            this.oC_SymbolicName();
            this.state = 672;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 663;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 662;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 665;
                    this.match(CypherParser.T__2);
                    this.state = 667;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 666;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 669;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 674;
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
            this.state = 675;
            this.oC_SymbolicName();
            this.state = 677;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 676;
                this.match(CypherParser.SP);
                }
            }

            this.state = 679;
            this.match(CypherParser.COLON);
            this.state = 680;
            this.match(CypherParser.T__5);
            this.state = 682;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 681;
                this.match(CypherParser.SP);
                }
            }

            this.state = 684;
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
            this.state = 719;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 686;
                this.match(CypherParser.T__6);
                this.state = 688;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 687;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 690;
                this.match(CypherParser.StringLiteral);
                this.state = 701;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3 || _la===166) {
                    {
                    {
                    this.state = 692;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 691;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 694;
                    this.match(CypherParser.T__2);
                    this.state = 696;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 695;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 698;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 703;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 704;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 705;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 706;
                this.match(CypherParser.GLOB);
                this.state = 708;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 707;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 710;
                this.match(CypherParser.T__1);
                this.state = 712;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 711;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 714;
                this.match(CypherParser.StringLiteral);
                this.state = 716;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 715;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 718;
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
            this.state = 721;
            this.match(CypherParser.T__1);
            this.state = 723;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 722;
                this.match(CypherParser.SP);
                }
            }

            this.state = 725;
            this.kU_Options();
            this.state = 727;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 726;
                this.match(CypherParser.SP);
                }
            }

            this.state = 729;
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
            this.state = 731;
            this.match(CypherParser.IF);
            this.state = 732;
            this.match(CypherParser.SP);
            this.state = 733;
            this.match(CypherParser.NOT);
            this.state = 734;
            this.match(CypherParser.SP);
            this.state = 735;
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
            this.state = 737;
            this.match(CypherParser.CREATE);
            this.state = 738;
            this.match(CypherParser.SP);
            this.state = 739;
            this.match(CypherParser.NODE);
            this.state = 740;
            this.match(CypherParser.SP);
            this.state = 741;
            this.match(CypherParser.TABLE);
            this.state = 742;
            this.match(CypherParser.SP);
            this.state = 746;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
            case 1:
                {
                this.state = 743;
                this.kU_IfNotExists();
                this.state = 744;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 748;
            this.oC_SchemaName();
            this.state = 750;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 749;
                this.match(CypherParser.SP);
                }
            }

            this.state = 752;
            this.match(CypherParser.T__1);
            this.state = 754;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 753;
                this.match(CypherParser.SP);
                }
            }

            this.state = 756;
            this.kU_PropertyDefinitionsDDL();
            this.state = 758;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 757;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 760;
            this.match(CypherParser.T__2);
            this.state = 762;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 761;
                this.match(CypherParser.SP);
                }
            }

            this.state = 764;
            this.kU_CreateNodeConstraint();
            }
            this.state = 767;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 766;
                this.match(CypherParser.SP);
                }
            }

            this.state = 769;
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
            this.state = 771;
            this.match(CypherParser.CREATE);
            this.state = 772;
            this.match(CypherParser.SP);
            this.state = 773;
            this.match(CypherParser.REL);
            this.state = 774;
            this.match(CypherParser.SP);
            this.state = 775;
            this.match(CypherParser.TABLE);
            this.state = 776;
            this.match(CypherParser.SP);
            this.state = 780;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
            case 1:
                {
                this.state = 777;
                this.kU_IfNotExists();
                this.state = 778;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 782;
            this.oC_SchemaName();
            this.state = 784;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 783;
                this.match(CypherParser.SP);
                }
            }

            this.state = 786;
            this.match(CypherParser.T__1);
            this.state = 788;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 787;
                this.match(CypherParser.SP);
                }
            }

            this.state = 790;
            this.kU_RelTableConnection();
            this.state = 792;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 791;
                this.match(CypherParser.SP);
                }
            }

            this.state = 802;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
            case 1:
                {
                this.state = 794;
                this.match(CypherParser.T__2);
                this.state = 796;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 795;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 798;
                this.kU_PropertyDefinitionsDDL();
                this.state = 800;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 799;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 812;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 804;
                this.match(CypherParser.T__2);
                this.state = 806;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 805;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 808;
                this.oC_SymbolicName();
                this.state = 810;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 809;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 814;
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
            this.state = 821;
            this.match(CypherParser.SP);
            this.state = 822;
            this.match(CypherParser.GROUP);
            this.state = 823;
            this.match(CypherParser.SP);
            this.state = 827;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
            case 1:
                {
                this.state = 824;
                this.kU_IfNotExists();
                this.state = 825;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 829;
            this.oC_SchemaName();
            this.state = 831;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 830;
                this.match(CypherParser.SP);
                }
            }

            this.state = 833;
            this.match(CypherParser.T__1);
            this.state = 835;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 834;
                this.match(CypherParser.SP);
                }
            }

            this.state = 837;
            this.kU_RelTableConnection();
            this.state = 846;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 839;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 838;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 841;
                    this.match(CypherParser.T__2);
                    this.state = 843;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 842;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 845;
                    this.kU_RelTableConnection();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 848;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 91, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 851;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 850;
                this.match(CypherParser.SP);
                }
            }

            this.state = 861;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
            case 1:
                {
                this.state = 853;
                this.match(CypherParser.T__2);
                this.state = 855;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 854;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 857;
                this.kU_PropertyDefinitionsDDL();
                this.state = 859;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 858;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 871;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===3) {
                {
                this.state = 863;
                this.match(CypherParser.T__2);
                this.state = 865;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 864;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 867;
                this.oC_SymbolicName();
                this.state = 869;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 868;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 873;
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
            this.state = 875;
            this.match(CypherParser.FROM);
            this.state = 876;
            this.match(CypherParser.SP);
            this.state = 877;
            this.oC_SchemaName();
            this.state = 878;
            this.match(CypherParser.SP);
            this.state = 879;
            this.match(CypherParser.TO);
            this.state = 880;
            this.match(CypherParser.SP);
            this.state = 881;
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
            this.state = 883;
            this.match(CypherParser.CREATE);
            this.state = 884;
            this.match(CypherParser.SP);
            this.state = 885;
            this.match(CypherParser.RDFGRAPH);
            this.state = 886;
            this.match(CypherParser.SP);
            this.state = 890;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
            case 1:
                {
                this.state = 887;
                this.kU_IfNotExists();
                this.state = 888;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 892;
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
            this.state = 894;
            this.match(CypherParser.CREATE);
            this.state = 895;
            this.match(CypherParser.SP);
            this.state = 896;
            this.match(CypherParser.SEQUENCE);
            this.state = 897;
            this.match(CypherParser.SP);
            this.state = 901;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
            case 1:
                {
                this.state = 898;
                this.kU_IfNotExists();
                this.state = 899;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 903;
            this.oC_SchemaName();
            this.state = 908;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 101, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 904;
                    this.match(CypherParser.SP);
                    this.state = 905;
                    this.kU_SequenceOptions();
                    }
                    }
                }
                this.state = 910;
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
            this.state = 911;
            this.match(CypherParser.CREATE);
            this.state = 912;
            this.match(CypherParser.SP);
            this.state = 913;
            this.match(CypherParser.TYPE);
            this.state = 914;
            this.match(CypherParser.SP);
            this.state = 915;
            this.oC_SchemaName();
            this.state = 916;
            this.match(CypherParser.SP);
            this.state = 917;
            this.match(CypherParser.AS);
            this.state = 918;
            this.match(CypherParser.SP);
            this.state = 919;
            this.kU_DataType(0);
            this.state = 921;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
            case 1:
                {
                this.state = 920;
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
            this.state = 928;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 923;
                this.kU_IncrementBy();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 924;
                this.kU_MinValue();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 925;
                this.kU_MaxValue();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 926;
                this.kU_StartWith();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 927;
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
            this.state = 930;
            this.match(CypherParser.INCREMENT);
            this.state = 931;
            this.match(CypherParser.SP);
            this.state = 934;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===55) {
                {
                this.state = 932;
                this.match(CypherParser.BY);
                this.state = 933;
                this.match(CypherParser.SP);
                }
            }

            this.state = 937;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===149) {
                {
                this.state = 936;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 939;
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
            this.state = 950;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 941;
                this.match(CypherParser.NO);
                this.state = 942;
                this.match(CypherParser.SP);
                this.state = 943;
                this.match(CypherParser.MINVALUE);
                }
                }
                break;
            case CypherParser.MINVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 944;
                this.match(CypherParser.MINVALUE);
                this.state = 945;
                this.match(CypherParser.SP);
                this.state = 947;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===149) {
                    {
                    this.state = 946;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 949;
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
                this.match(CypherParser.MAXVALUE);
                }
                }
                break;
            case CypherParser.MAXVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 955;
                this.match(CypherParser.MAXVALUE);
                this.state = 956;
                this.match(CypherParser.SP);
                this.state = 958;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===149) {
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
    public kU_StartWith(): KU_StartWithContext {
        let localctx: KU_StartWithContext = new KU_StartWithContext(this._ctx, this.state);
        this.enterRule(localctx, 68, CypherParser.RULE_kU_StartWith);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 963;
            this.match(CypherParser.START);
            this.state = 964;
            this.match(CypherParser.SP);
            this.state = 967;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===142) {
                {
                this.state = 965;
                this.match(CypherParser.WITH);
                this.state = 966;
                this.match(CypherParser.SP);
                }
            }

            this.state = 970;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===149) {
                {
                this.state = 969;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 972;
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
            this.state = 976;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===107) {
                {
                this.state = 974;
                this.match(CypherParser.NO);
                this.state = 975;
                this.match(CypherParser.SP);
                }
            }

            this.state = 978;
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
            this.state = 980;
            this.match(CypherParser.DROP);
            this.state = 981;
            this.match(CypherParser.SP);
            this.state = 982;
            _la = this._input.LA(1);
            if(!(((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 4225) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 983;
            this.match(CypherParser.SP);
            this.state = 984;
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
            this.state = 986;
            this.match(CypherParser.ALTER);
            this.state = 987;
            this.match(CypherParser.SP);
            this.state = 988;
            this.match(CypherParser.TABLE);
            this.state = 989;
            this.match(CypherParser.SP);
            this.state = 990;
            this.oC_SchemaName();
            this.state = 991;
            this.match(CypherParser.SP);
            this.state = 992;
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
            this.state = 998;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 994;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 995;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 996;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 997;
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
            this.state = 1000;
            this.match(CypherParser.ADD);
            this.state = 1001;
            this.match(CypherParser.SP);
            this.state = 1002;
            this.oC_PropertyKeyName();
            this.state = 1003;
            this.match(CypherParser.SP);
            this.state = 1004;
            this.kU_DataType(0);
            this.state = 1007;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
            case 1:
                {
                this.state = 1005;
                this.match(CypherParser.SP);
                this.state = 1006;
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
            this.state = 1009;
            this.match(CypherParser.DEFAULT);
            this.state = 1010;
            this.match(CypherParser.SP);
            this.state = 1011;
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
            this.state = 1013;
            this.match(CypherParser.DROP);
            this.state = 1014;
            this.match(CypherParser.SP);
            this.state = 1015;
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
            this.state = 1017;
            this.match(CypherParser.RENAME);
            this.state = 1018;
            this.match(CypherParser.SP);
            this.state = 1019;
            this.match(CypherParser.TO);
            this.state = 1020;
            this.match(CypherParser.SP);
            this.state = 1021;
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
            this.state = 1023;
            this.match(CypherParser.RENAME);
            this.state = 1024;
            this.match(CypherParser.SP);
            this.state = 1025;
            this.oC_PropertyKeyName();
            this.state = 1026;
            this.match(CypherParser.SP);
            this.state = 1027;
            this.match(CypherParser.TO);
            this.state = 1028;
            this.match(CypherParser.SP);
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
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        let localctx: KU_PropertyDefinitionsContext = new KU_PropertyDefinitionsContext(this._ctx, this.state);
        this.enterRule(localctx, 88, CypherParser.RULE_kU_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1031;
            this.kU_PropertyDefinition();
            this.state = 1042;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 117, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1033;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1032;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1035;
                    this.match(CypherParser.T__2);
                    this.state = 1037;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1036;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1039;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 1044;
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
            this.state = 1045;
            this.oC_PropertyKeyName();
            this.state = 1046;
            this.match(CypherParser.SP);
            this.state = 1047;
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
            this.state = 1049;
            this.kU_PropertyDefinitionDDL();
            this.state = 1060;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 120, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1051;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1050;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1053;
                    this.match(CypherParser.T__2);
                    this.state = 1055;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1054;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1057;
                    this.kU_PropertyDefinitionDDL();
                    }
                    }
                }
                this.state = 1062;
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
            this.state = 1063;
            this.oC_PropertyKeyName();
            this.state = 1064;
            this.match(CypherParser.SP);
            this.state = 1065;
            this.kU_DataType(0);
            this.state = 1068;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
            case 1:
                {
                this.state = 1066;
                this.match(CypherParser.SP);
                this.state = 1067;
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
            this.state = 1070;
            this.match(CypherParser.PRIMARY);
            this.state = 1071;
            this.match(CypherParser.SP);
            this.state = 1072;
            this.match(CypherParser.KEY);
            this.state = 1074;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1073;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1076;
            this.match(CypherParser.T__1);
            this.state = 1078;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1077;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1080;
            this.oC_PropertyKeyName();
            this.state = 1082;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1081;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1084;
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
            this.state = 1160;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
            case 1:
                {
                this.state = 1087;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 1088;
                this.match(CypherParser.UNION);
                this.state = 1090;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1089;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1092;
                this.match(CypherParser.T__1);
                this.state = 1094;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1093;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1096;
                this.kU_PropertyDefinitions();
                this.state = 1098;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1097;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1100;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                {
                this.state = 1102;
                this.oC_SymbolicName();
                this.state = 1104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1103;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1106;
                this.match(CypherParser.T__1);
                this.state = 1108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1107;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1110;
                this.kU_PropertyDefinitions();
                this.state = 1112;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1111;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1114;
                this.match(CypherParser.T__3);
                }
                break;
            case 4:
                {
                this.state = 1116;
                this.oC_SymbolicName();
                this.state = 1118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1117;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1120;
                this.match(CypherParser.T__1);
                this.state = 1122;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
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
                if (_la===166) {
                    {
                    this.state = 1125;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1128;
                this.match(CypherParser.T__2);
                this.state = 1130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1129;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1132;
                this.kU_DataType(0);
                this.state = 1134;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1133;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1136;
                this.match(CypherParser.T__3);
                }
                break;
            case 5:
                {
                this.state = 1138;
                this.match(CypherParser.DECIMAL);
                this.state = 1140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1139;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1142;
                this.match(CypherParser.T__1);
                this.state = 1144;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
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
                if (_la===166) {
                    {
                    this.state = 1147;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1150;
                this.match(CypherParser.T__2);
                this.state = 1152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1151;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1154;
                this.oC_IntegerLiteral();
                this.state = 1156;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1155;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1158;
                this.match(CypherParser.T__3);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1166;
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
                    this.state = 1162;
                    if (!(this.precpred(this._ctx, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                    }
                    this.state = 1163;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 1168;
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
            this.state = 1169;
            this.kU_ListIdentifier();
            this.state = 1173;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 143, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1170;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 1175;
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
            this.state = 1176;
            this.match(CypherParser.T__6);
            this.state = 1178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===154) {
                {
                this.state = 1177;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 1180;
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
            this.state = 1184;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1182;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1183;
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
            this.state = 1186;
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
            this.state = 1188;
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
            this.state = 1204;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1190;
                this.match(CypherParser.BEGIN);
                this.state = 1191;
                this.match(CypherParser.SP);
                this.state = 1192;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1193;
                this.match(CypherParser.BEGIN);
                this.state = 1194;
                this.match(CypherParser.SP);
                this.state = 1195;
                this.match(CypherParser.TRANSACTION);
                this.state = 1196;
                this.match(CypherParser.SP);
                this.state = 1197;
                this.match(CypherParser.READ);
                this.state = 1198;
                this.match(CypherParser.SP);
                this.state = 1199;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1200;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1201;
                this.match(CypherParser.COMMIT_SKIP_CHECKPOINT);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1202;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1203;
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
            this.state = 1208;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1206;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1207;
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
            this.state = 1210;
            this.match(CypherParser.LOAD);
            this.state = 1211;
            this.match(CypherParser.SP);
            this.state = 1212;
            this.match(CypherParser.EXTENSION);
            this.state = 1213;
            this.match(CypherParser.SP);
            this.state = 1216;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 1214;
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
                this.state = 1215;
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
            this.state = 1218;
            this.match(CypherParser.INSTALL);
            this.state = 1219;
            this.match(CypherParser.SP);
            this.state = 1220;
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
            this.state = 1226;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 150, this._ctx) ) {
            case 1:
                {
                this.state = 1222;
                this.kU_ProjectGraph();
                this.state = 1224;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1223;
                    this.match(CypherParser.SP);
                    }
                }

                }
                break;
            }
            this.state = 1228;
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
            this.state = 1230;
            this.match(CypherParser.PROJECT);
            this.state = 1231;
            this.match(CypherParser.SP);
            this.state = 1232;
            this.match(CypherParser.GRAPH);
            this.state = 1233;
            this.match(CypherParser.SP);
            this.state = 1234;
            this.oC_SchemaName();
            this.state = 1236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1235;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1238;
            this.match(CypherParser.T__1);
            this.state = 1240;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1239;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1242;
            this.kU_GraphProjectionTableItems();
            this.state = 1244;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1243;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1246;
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
            this.state = 1248;
            this.kU_GraphProjectionTableItem();
            this.state = 1259;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 156, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1250;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1249;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1252;
                    this.match(CypherParser.T__2);
                    this.state = 1254;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1253;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1256;
                    this.kU_GraphProjectionTableItem();
                    }
                    }
                }
                this.state = 1261;
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
            this.state = 1283;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1262;
                this.oC_SingleQuery();
                this.state = 1269;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1264;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 1263;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1266;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 1271;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1276;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1272;
                        this.oC_Return();
                        this.state = 1274;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 1273;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1278;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1280;
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
            this.state = 1297;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 164, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1285;
                this.match(CypherParser.UNION);
                this.state = 1286;
                this.match(CypherParser.SP);
                this.state = 1287;
                this.match(CypherParser.ALL);
                this.state = 1289;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1288;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1291;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1292;
                this.match(CypherParser.UNION);
                this.state = 1294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1293;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1296;
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
            this.state = 1301;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1299;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1300;
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
            this.state = 1348;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1309;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===56 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 270341) !== 0) || _la===138) {
                    {
                    {
                    this.state = 1303;
                    this.oC_ReadingClause();
                    this.state = 1305;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1304;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1311;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1312;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1319;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===56 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 270341) !== 0) || _la===138) {
                    {
                    {
                    this.state = 1313;
                    this.oC_ReadingClause();
                    this.state = 1315;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
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
                this.oC_UpdatingClause();
                this.state = 1329;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1324;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 1323;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1326;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1331;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
                }
                this.state = 1336;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
                case 1:
                    {
                    this.state = 1333;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1332;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1335;
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
                this.state = 1342;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 1338;
                    this.oC_ReadingClause();
                    this.state = 1340;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
                    case 1:
                        {
                        this.state = 1339;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    }
                    }
                    this.state = 1344;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===56 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 270341) !== 0) || _la===138);
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
            this.state = 1354;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1350;
                    this.kU_QueryPart();
                    this.state = 1352;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1351;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1356;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 178, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1358;
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
            this.state = 1366;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===56 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 270341) !== 0) || _la===138) {
                {
                {
                this.state = 1360;
                this.oC_ReadingClause();
                this.state = 1362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
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
            this.state = 1375;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 289) !== 0) || _la===104 || _la===127) {
                {
                {
                this.state = 1369;
                this.oC_UpdatingClause();
                this.state = 1371;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1370;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1377;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1378;
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
            this.state = 1384;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1380;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1381;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1382;
                this.oC_Set();
                }
                break;
            case CypherParser.DELETE:
            case CypherParser.DETACH:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1383;
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
            this.state = 1390;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.MATCH:
            case CypherParser.OPTIONAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1386;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1387;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
            case CypherParser.PROJECT:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1388;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1389;
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
            this.state = 1392;
            this.match(CypherParser.LOAD);
            this.state = 1410;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
            case 1:
                {
                this.state = 1393;
                this.match(CypherParser.SP);
                this.state = 1394;
                this.match(CypherParser.WITH);
                this.state = 1395;
                this.match(CypherParser.SP);
                this.state = 1396;
                this.match(CypherParser.HEADERS);
                this.state = 1398;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1397;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1400;
                this.match(CypherParser.T__1);
                this.state = 1402;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1401;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1404;
                this.kU_PropertyDefinitions();
                this.state = 1406;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1405;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1408;
                this.match(CypherParser.T__3);
                }
                break;
            }
            this.state = 1412;
            this.match(CypherParser.SP);
            this.state = 1413;
            this.match(CypherParser.FROM);
            this.state = 1414;
            this.match(CypherParser.SP);
            this.state = 1415;
            this.kU_ScanSource();
            this.state = 1420;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
            case 1:
                {
                this.state = 1417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1416;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1419;
                this.kU_ParsingOptions();
                }
                break;
            }
            this.state = 1426;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
            case 1:
                {
                this.state = 1423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1422;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1425;
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
            this.state = 1432;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===118) {
                {
                this.state = 1428;
                this.kU_ProjectGraph();
                this.state = 1430;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1429;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1434;
            this.match(CypherParser.CALL);
            this.state = 1435;
            this.match(CypherParser.SP);
            this.state = 1436;
            this.oC_FunctionInvocation();
            this.state = 1441;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
            case 1:
                {
                this.state = 1438;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1437;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1440;
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
            this.state = 1443;
            this.oC_SchemaName();
            this.state = 1457;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
            case 1:
                {
                this.state = 1445;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1444;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1447;
                this.match(CypherParser.T__8);
                this.state = 1449;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1448;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1451;
                this.kU_GraphProjectionColumnItems();
                this.state = 1453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1452;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1455;
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
            this.state = 1459;
            this.kU_GraphProjectionColumnItem();
            this.state = 1470;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1461;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1460;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1463;
                    this.match(CypherParser.T__2);
                    this.state = 1465;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1464;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1467;
                    this.kU_GraphProjectionColumnItem();
                    }
                    }
                }
                this.state = 1472;
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
            this.state = 1473;
            this.oC_PropertyKeyName();
            this.state = 1476;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
            case 1:
                {
                this.state = 1474;
                this.match(CypherParser.SP);
                this.state = 1475;
                this.kU_Default();
                }
                break;
            }
            this.state = 1480;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
            case 1:
                {
                this.state = 1478;
                this.match(CypherParser.SP);
                this.state = 1479;
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
            this.state = 1484;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===113) {
                {
                this.state = 1482;
                this.match(CypherParser.OPTIONAL);
                this.state = 1483;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1486;
            this.match(CypherParser.MATCH);
            this.state = 1488;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1487;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1490;
            this.oC_Pattern();
            this.state = 1493;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
            case 1:
                {
                this.state = 1491;
                this.match(CypherParser.SP);
                this.state = 1492;
                this.oC_Where();
                }
                break;
            }
            this.state = 1497;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
            case 1:
                {
                this.state = 1495;
                this.match(CypherParser.SP);
                this.state = 1496;
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
            this.state = 1499;
            this.match(CypherParser.HINT);
            this.state = 1500;
            this.match(CypherParser.SP);
            this.state = 1501;
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
            this.state = 1515;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__1:
                {
                this.state = 1504;
                this.match(CypherParser.T__1);
                this.state = 1506;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1505;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1508;
                this.kU_JoinNode(0);
                this.state = 1510;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1509;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1512;
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
                this.state = 1514;
                this.oC_SchemaName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1533;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 215, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1531;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 214, this._ctx) ) {
                    case 1:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1517;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1518;
                        this.match(CypherParser.SP);
                        this.state = 1519;
                        this.match(CypherParser.JOIN);
                        this.state = 1520;
                        this.match(CypherParser.SP);
                        this.state = 1521;
                        this.kU_JoinNode(5);
                        }
                        break;
                    case 2:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1522;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1527;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                            case 1:
                                {
                                {
                                this.state = 1523;
                                this.match(CypherParser.SP);
                                this.state = 1524;
                                this.match(CypherParser.MULTI_JOIN);
                                this.state = 1525;
                                this.match(CypherParser.SP);
                                this.state = 1526;
                                this.oC_SchemaName();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 1529;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 213, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    }
                    }
                }
                this.state = 1535;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 215, this._ctx);
            }
            }
        }
        catch (re) {
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
            this.state = 1536;
            this.match(CypherParser.UNWIND);
            this.state = 1538;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1537;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1540;
            this.oC_Expression();
            this.state = 1541;
            this.match(CypherParser.SP);
            this.state = 1542;
            this.match(CypherParser.AS);
            this.state = 1543;
            this.match(CypherParser.SP);
            this.state = 1544;
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
            this.state = 1546;
            this.match(CypherParser.CREATE);
            this.state = 1548;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1547;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1550;
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
            this.state = 1552;
            this.match(CypherParser.MERGE);
            this.state = 1554;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1553;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1556;
            this.oC_Pattern();
            this.state = 1561;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1557;
                    this.match(CypherParser.SP);
                    this.state = 1558;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1563;
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
    public oC_MergeAction(): OC_MergeActionContext {
        let localctx: OC_MergeActionContext = new OC_MergeActionContext(this._ctx, this.state);
        this.enterRule(localctx, 162, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1574;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1564;
                this.match(CypherParser.ON);
                this.state = 1565;
                this.match(CypherParser.SP);
                this.state = 1566;
                this.match(CypherParser.MATCH);
                this.state = 1567;
                this.match(CypherParser.SP);
                this.state = 1568;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1569;
                this.match(CypherParser.ON);
                this.state = 1570;
                this.match(CypherParser.SP);
                this.state = 1571;
                this.match(CypherParser.CREATE);
                this.state = 1572;
                this.match(CypherParser.SP);
                this.state = 1573;
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
            this.state = 1576;
            this.match(CypherParser.SET);
            this.state = 1578;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1577;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1580;
            this.oC_SetItem();
            this.state = 1591;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 224, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1582;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1581;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1584;
                    this.match(CypherParser.T__2);
                    this.state = 1586;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1585;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1588;
                    this.oC_SetItem();
                    }
                    }
                }
                this.state = 1593;
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
    public oC_SetItem(): OC_SetItemContext {
        let localctx: OC_SetItemContext = new OC_SetItemContext(this._ctx, this.state);
        this.enterRule(localctx, 166, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1594;
            this.oC_PropertyExpression();
            this.state = 1596;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1595;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1598;
            this.match(CypherParser.T__5);
            this.state = 1600;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1599;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1602;
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
            this.state = 1606;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===74) {
                {
                this.state = 1604;
                this.match(CypherParser.DETACH);
                this.state = 1605;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1608;
            this.match(CypherParser.DELETE);
            this.state = 1610;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1609;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1612;
            this.oC_Expression();
            this.state = 1623;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 231, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1614;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1613;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1616;
                    this.match(CypherParser.T__2);
                    this.state = 1618;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1617;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1620;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1625;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 231, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1626;
            this.match(CypherParser.WITH);
            this.state = 1627;
            this.oC_ProjectionBody();
            this.state = 1632;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
            case 1:
                {
                this.state = 1629;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1628;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1631;
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
            this.state = 1634;
            this.match(CypherParser.RETURN);
            this.state = 1635;
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
            this.state = 1641;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
            case 1:
                {
                this.state = 1638;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1637;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1640;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1643;
            this.match(CypherParser.SP);
            this.state = 1644;
            this.oC_ProjectionItems();
            this.state = 1647;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 236, this._ctx) ) {
            case 1:
                {
                this.state = 1645;
                this.match(CypherParser.SP);
                this.state = 1646;
                this.oC_Order();
                }
                break;
            }
            this.state = 1651;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 237, this._ctx) ) {
            case 1:
                {
                this.state = 1649;
                this.match(CypherParser.SP);
                this.state = 1650;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1655;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
            case 1:
                {
                this.state = 1653;
                this.match(CypherParser.SP);
                this.state = 1654;
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
            this.state = 1685;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1657;
                this.match(CypherParser.STAR);
                this.state = 1668;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1659;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 1658;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1661;
                        this.match(CypherParser.T__2);
                        this.state = 1663;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 1662;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1665;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1670;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
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
                this.state = 1671;
                this.oC_ProjectionItem();
                this.state = 1682;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 244, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1673;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 1672;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1675;
                        this.match(CypherParser.T__2);
                        this.state = 1677;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 1676;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1679;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1684;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 244, this._ctx);
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
            this.state = 1694;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1687;
                this.oC_Expression();
                this.state = 1688;
                this.match(CypherParser.SP);
                this.state = 1689;
                this.match(CypherParser.AS);
                this.state = 1690;
                this.match(CypherParser.SP);
                this.state = 1691;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1693;
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
            this.state = 1696;
            this.match(CypherParser.ORDER);
            this.state = 1697;
            this.match(CypherParser.SP);
            this.state = 1698;
            this.match(CypherParser.BY);
            this.state = 1699;
            this.match(CypherParser.SP);
            this.state = 1700;
            this.oC_SortItem();
            this.state = 1708;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 1701;
                this.match(CypherParser.T__2);
                this.state = 1703;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1702;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1705;
                this.oC_SortItem();
                }
                }
                this.state = 1710;
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
            this.state = 1711;
            this.match(CypherParser.L_SKIP);
            this.state = 1712;
            this.match(CypherParser.SP);
            this.state = 1713;
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
            this.state = 1715;
            this.match(CypherParser.LIMIT);
            this.state = 1716;
            this.match(CypherParser.SP);
            this.state = 1717;
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
            this.state = 1719;
            this.oC_Expression();
            this.state = 1724;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 250, this._ctx) ) {
            case 1:
                {
                this.state = 1721;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1720;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1723;
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
        this.enterRule(localctx, 188, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1726;
            this.match(CypherParser.WHERE);
            this.state = 1727;
            this.match(CypherParser.SP);
            this.state = 1728;
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
            this.state = 1730;
            this.oC_PatternPart();
            this.state = 1741;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 253, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1732;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1731;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1734;
                    this.match(CypherParser.T__2);
                    this.state = 1736;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1735;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1738;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1743;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 253, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
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
            this.state = 1755;
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
                this.state = 1744;
                this.oC_Variable();
                this.state = 1746;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1745;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1748;
                this.match(CypherParser.T__5);
                this.state = 1750;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1749;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1752;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1754;
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
            this.state = 1757;
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
            this.state = 1773;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 259, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1759;
                this.oC_NodePattern();
                this.state = 1766;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 258, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1761;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 1760;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1763;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1768;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 258, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1769;
                this.match(CypherParser.T__1);
                this.state = 1770;
                this.oC_PatternElement();
                this.state = 1771;
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
            this.state = 1775;
            this.match(CypherParser.T__1);
            this.state = 1777;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1776;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1783;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382991765) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 233483335) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 170199933) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 1153) !== 0)) {
                {
                this.state = 1779;
                this.oC_Variable();
                this.state = 1781;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1780;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1789;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===151) {
                {
                this.state = 1785;
                this.oC_NodeLabels();
                this.state = 1787;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1786;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1795;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1791;
                this.kU_Properties();
                this.state = 1793;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1792;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1797;
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
            this.state = 1799;
            this.oC_RelationshipPattern();
            this.state = 1801;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1800;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1803;
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
            this.state = 1849;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 279, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1805;
                this.oC_LeftArrowHead();
                this.state = 1807;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1806;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1809;
                this.oC_Dash();
                this.state = 1811;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 269, this._ctx) ) {
                case 1:
                    {
                    this.state = 1810;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1814;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1813;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1817;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1816;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1819;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1821;
                this.oC_Dash();
                this.state = 1823;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 272, this._ctx) ) {
                case 1:
                    {
                    this.state = 1822;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1826;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1825;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1829;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1828;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1831;
                this.oC_Dash();
                this.state = 1833;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1832;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1835;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1837;
                this.oC_Dash();
                this.state = 1839;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 276, this._ctx) ) {
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
                if (_la===166) {
                    {
                    this.state = 1844;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1847;
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
            this.state = 1851;
            this.match(CypherParser.T__6);
            this.state = 1853;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1852;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1859;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382991765) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 233483335) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 170199933) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 1153) !== 0)) {
                {
                this.state = 1855;
                this.oC_Variable();
                this.state = 1857;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1856;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1865;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===151) {
                {
                this.state = 1861;
                this.oC_RelationshipTypes();
                this.state = 1863;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1862;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1871;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===146) {
                {
                this.state = 1867;
                this.oC_RangeLiteral();
                this.state = 1869;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1868;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1877;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1873;
                this.kU_Properties();
                this.state = 1875;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1874;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1879;
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
            this.state = 1881;
            this.match(CypherParser.T__8);
            this.state = 1883;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1882;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1918;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382991765) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 233483335) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 170199933) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 1153) !== 0)) {
                {
                this.state = 1885;
                this.oC_PropertyKeyName();
                this.state = 1887;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1886;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1889;
                this.match(CypherParser.COLON);
                this.state = 1891;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1890;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1893;
                this.oC_Expression();
                this.state = 1895;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1894;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1915;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 1897;
                    this.match(CypherParser.T__2);
                    this.state = 1899;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1898;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1901;
                    this.oC_PropertyKeyName();
                    this.state = 1903;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
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
                    if (_la===166) {
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
                    if (_la===166) {
                        {
                        this.state = 1910;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1917;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 1920;
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
            this.state = 1922;
            this.match(CypherParser.COLON);
            this.state = 1924;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1923;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1926;
            this.oC_RelTypeName();
            this.state = 1940;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 303, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1928;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1927;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1930;
                    this.match(CypherParser.T__10);
                    this.state = 1932;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===151) {
                        {
                        this.state = 1931;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 1935;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1934;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1937;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 1942;
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
    public oC_NodeLabels(): OC_NodeLabelsContext {
        let localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this._ctx, this.state);
        this.enterRule(localctx, 210, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1943;
            this.oC_NodeLabel();
            this.state = 1950;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 305, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1945;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 1944;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1947;
                    this.oC_NodeLabel();
                    }
                    }
                }
                this.state = 1952;
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
    public oC_NodeLabel(): OC_NodeLabelContext {
        let localctx: OC_NodeLabelContext = new OC_NodeLabelContext(this._ctx, this.state);
        this.enterRule(localctx, 212, CypherParser.RULE_oC_NodeLabel);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1953;
            this.match(CypherParser.COLON);
            this.state = 1955;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1954;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1957;
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
            this.state = 1959;
            this.match(CypherParser.STAR);
            this.state = 1961;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 307, this._ctx) ) {
            case 1:
                {
                this.state = 1960;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1967;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.SHORTEST:
                {
                this.state = 1963;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case CypherParser.ALL:
                {
                this.state = 1964;
                this.match(CypherParser.ALL);
                this.state = 1965;
                this.match(CypherParser.SP);
                this.state = 1966;
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
            this.state = 1970;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 309, this._ctx) ) {
            case 1:
                {
                this.state = 1969;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1986;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 314, this._ctx) ) {
            case 1:
                {
                this.state = 1973;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===154) {
                    {
                    this.state = 1972;
                    this.oC_LowerBound();
                    }
                }

                this.state = 1976;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1975;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1978;
                this.match(CypherParser.T__11);
                this.state = 1980;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 312, this._ctx) ) {
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
                if (_la===154) {
                    {
                    this.state = 1982;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 1985;
                this.oC_IntegerLiteral();
                }
                break;
            }
            this.state = 1992;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 316, this._ctx) ) {
            case 1:
                {
                this.state = 1989;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1988;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1991;
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
            this.state = 1994;
            this.match(CypherParser.T__1);
            this.state = 1996;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1995;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1998;
            this.oC_Variable();
            this.state = 2000;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1999;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2002;
            this.match(CypherParser.T__2);
            this.state = 2004;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2003;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2006;
            this.oC_Variable();
            this.state = 2018;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 323, this._ctx) ) {
            case 1:
                {
                this.state = 2008;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2007;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2010;
                this.match(CypherParser.T__10);
                this.state = 2012;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2011;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2014;
                this.oC_Where();
                this.state = 2016;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 322, this._ctx) ) {
                case 1:
                    {
                    this.state = 2015;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                }
                break;
            }
            this.state = 2039;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===166) {
                {
                this.state = 2021;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2020;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2023;
                this.match(CypherParser.T__10);
                this.state = 2025;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2024;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2027;
                this.kU_IntermediateRelProjectionItems();
                this.state = 2029;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2028;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2031;
                this.match(CypherParser.T__2);
                this.state = 2033;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2032;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2035;
                this.kU_IntermediateNodeProjectionItems();
                this.state = 2037;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2036;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2041;
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
            this.state = 2043;
            this.match(CypherParser.T__8);
            this.state = 2045;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 330, this._ctx) ) {
            case 1:
                {
                this.state = 2044;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2048;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2077579423) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 2586250109) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 9741) !== 0)) {
                {
                this.state = 2047;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2051;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2050;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2053;
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
            this.state = 2055;
            this.match(CypherParser.T__8);
            this.state = 2057;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 333, this._ctx) ) {
            case 1:
                {
                this.state = 2056;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2060;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2077579423) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 2586250109) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 9741) !== 0)) {
                {
                this.state = 2059;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2063;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2062;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2065;
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
            this.state = 2067;
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
            this.state = 2069;
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
            this.state = 2071;
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
            this.state = 2073;
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
            this.state = 2075;
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
            this.state = 2077;
            this.oC_XorExpression();
            this.state = 2084;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 336, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2078;
                    this.match(CypherParser.SP);
                    this.state = 2079;
                    this.match(CypherParser.OR);
                    this.state = 2080;
                    this.match(CypherParser.SP);
                    this.state = 2081;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 2086;
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
        this.enterRule(localctx, 234, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2087;
            this.oC_AndExpression();
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
                    this.match(CypherParser.XOR);
                    this.state = 2090;
                    this.match(CypherParser.SP);
                    this.state = 2091;
                    this.oC_AndExpression();
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
    public oC_AndExpression(): OC_AndExpressionContext {
        let localctx: OC_AndExpressionContext = new OC_AndExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 236, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2097;
            this.oC_NotExpression();
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
                    this.match(CypherParser.AND);
                    this.state = 2100;
                    this.match(CypherParser.SP);
                    this.state = 2101;
                    this.oC_NotExpression();
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
    public oC_NotExpression(): OC_NotExpressionContext {
        let localctx: OC_NotExpressionContext = new OC_NotExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 238, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===109) {
                {
                {
                this.state = 2107;
                this.match(CypherParser.NOT);
                this.state = 2109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2108;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2116;
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
            this.state = 2166;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 351, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2118;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2128;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 343, this._ctx) ) {
                case 1:
                    {
                    this.state = 2120;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2119;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2122;
                    this.kU_ComparisonOperator();
                    this.state = 2124;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2123;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2126;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2130;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 2132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2131;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2134;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 2136;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2135;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2138;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2142;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2144;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2143;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2146;
                this.kU_ComparisonOperator();
                this.state = 2148;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2147;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2150;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2160;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2152;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 2151;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2154;
                        this.kU_ComparisonOperator();
                        this.state = 2156;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 2155;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2158;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2162;
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
        this.enterRule(localctx, 242, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2168;
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
            this.state = 2170;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 2181;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 354, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2172;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2171;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2174;
                    this.match(CypherParser.T__10);
                    this.state = 2176;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2175;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2178;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 2183;
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
        this.enterRule(localctx, 246, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2184;
            this.kU_BitShiftOperatorExpression();
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
                    if (_la===166) {
                        {
                        this.state = 2185;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2188;
                    this.match(CypherParser.T__17);
                    this.state = 2190;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2189;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2192;
                    this.kU_BitShiftOperatorExpression();
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
    public kU_BitShiftOperatorExpression(): KU_BitShiftOperatorExpressionContext {
        let localctx: KU_BitShiftOperatorExpressionContext = new KU_BitShiftOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 248, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2198;
            this.oC_AddOrSubtractExpression();
            this.state = 2210;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 360, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2200;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2199;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2202;
                    this.kU_BitShiftOperator();
                    this.state = 2204;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2203;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2206;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 2212;
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
        this.enterRule(localctx, 250, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2213;
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
            this.state = 2215;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 2227;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 363, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2217;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2216;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2219;
                    this.kU_AddOrSubtractOperator();
                    this.state = 2221;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2220;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2223;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 2229;
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
        this.enterRule(localctx, 254, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2230;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===149)) {
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
            this.state = 2232;
            this.oC_PowerOfExpression();
            this.state = 2244;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 366, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2234;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2233;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2236;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 2238;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2237;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2240;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 2246;
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
        this.enterRule(localctx, 258, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2247;
            _la = this._input.LA(1);
            if(!(_la===22 || _la===23 || _la===146)) {
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
            this.state = 2249;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 2260;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 369, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2251;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2250;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2253;
                    this.match(CypherParser.T__23);
                    this.state = 2255;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2254;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2257;
                    this.oC_UnaryAddSubtractOrFactorialExpression();
                    }
                    }
                }
                this.state = 2262;
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
        this.enterRule(localctx, 262, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2269;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===149) {
                {
                {
                this.state = 2263;
                this.match(CypherParser.MINUS);
                this.state = 2265;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2264;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2271;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2272;
            this.oC_StringListNullOperatorExpression();
            this.state = 2277;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 373, this._ctx) ) {
            case 1:
                {
                this.state = 2274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2273;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2276;
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
            this.state = 2279;
            this.oC_PropertyOrLabelsExpression();
            this.state = 2287;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 375, this._ctx) ) {
            case 1:
                {
                this.state = 2280;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 2282;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2281;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2284;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 374, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 2286;
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
            this.state = 2308;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 379, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2289;
                this.match(CypherParser.SP);
                this.state = 2290;
                this.match(CypherParser.IN);
                this.state = 2292;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2291;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2294;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2295;
                this.match(CypherParser.T__6);
                this.state = 2296;
                this.oC_Expression();
                this.state = 2297;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2299;
                this.match(CypherParser.T__6);
                this.state = 2301;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2077579423) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 2317814653) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 9741) !== 0)) {
                    {
                    this.state = 2300;
                    this.oC_Expression();
                    }
                }

                this.state = 2303;
                this.match(CypherParser.COLON);
                this.state = 2305;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2077579423) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 2317814653) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 9741) !== 0)) {
                    {
                    this.state = 2304;
                    this.oC_Expression();
                    }
                }

                this.state = 2307;
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
            this.state = 2321;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
            case 1:
                {
                this.state = 2310;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 2311;
                this.match(CypherParser.SP);
                this.state = 2312;
                this.match(CypherParser.STARTS);
                this.state = 2313;
                this.match(CypherParser.SP);
                this.state = 2314;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 2315;
                this.match(CypherParser.SP);
                this.state = 2316;
                this.match(CypherParser.ENDS);
                this.state = 2317;
                this.match(CypherParser.SP);
                this.state = 2318;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 2319;
                this.match(CypherParser.SP);
                this.state = 2320;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 2324;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2323;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2326;
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
            this.state = 2329;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2328;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2331;
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
            this.state = 2343;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 383, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2333;
                this.match(CypherParser.SP);
                this.state = 2334;
                this.match(CypherParser.IS);
                this.state = 2335;
                this.match(CypherParser.SP);
                this.state = 2336;
                this.match(CypherParser.NULL);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2337;
                this.match(CypherParser.SP);
                this.state = 2338;
                this.match(CypherParser.IS);
                this.state = 2339;
                this.match(CypherParser.SP);
                this.state = 2340;
                this.match(CypherParser.NOT);
                this.state = 2341;
                this.match(CypherParser.SP);
                this.state = 2342;
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
            this.state = 2345;
            this.oC_Atom();
            this.state = 2352;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 385, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2347;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2346;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2349;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2354;
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
        this.enterRule(localctx, 276, CypherParser.RULE_oC_Atom);
        try {
            this.state = 2364;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 386, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2355;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2356;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2357;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2358;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2359;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2360;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2361;
                this.oC_ExistSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2362;
                this.kU_CountSubquery();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2363;
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
        this.enterRule(localctx, 278, CypherParser.RULE_oC_Literal);
        try {
            this.state = 2372;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2366;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2367;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.FALSE:
            case CypherParser.TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2368;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2369;
                this.match(CypherParser.NULL);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2370;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2371;
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
            this.state = 2374;
            _la = this._input.LA(1);
            if(!(_la===84 || _la===135)) {
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
            this.state = 2376;
            this.match(CypherParser.T__6);
            this.state = 2378;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2377;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2393;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2077579423) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 2317814653) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 9741) !== 0)) {
                {
                this.state = 2380;
                this.oC_Expression();
                this.state = 2382;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2381;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 2384;
                    this.kU_ListEntry();
                    this.state = 2386;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2385;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2392;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2395;
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
            this.state = 2397;
            this.match(CypherParser.T__2);
            this.state = 2399;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 393, this._ctx) ) {
            case 1:
                {
                this.state = 2398;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2402;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2077579423) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 2317814653) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 9741) !== 0)) {
                {
                this.state = 2401;
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
            this.state = 2404;
            this.match(CypherParser.T__8);
            this.state = 2406;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2405;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2408;
            this.kU_StructField();
            this.state = 2410;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2409;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2422;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===3) {
                {
                {
                this.state = 2412;
                this.match(CypherParser.T__2);
                this.state = 2414;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2413;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2416;
                this.kU_StructField();
                this.state = 2418;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2417;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2425;
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
            this.state = 2429;
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
                this.state = 2427;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2428;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2432;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2431;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2434;
            this.match(CypherParser.COLON);
            this.state = 2436;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2435;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2438;
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
            this.state = 2440;
            this.match(CypherParser.T__1);
            this.state = 2442;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2441;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2444;
            this.oC_Expression();
            this.state = 2446;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2445;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2448;
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
        this.enterRule(localctx, 292, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2527;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 424, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2450;
                this.match(CypherParser.COUNT);
                this.state = 2452;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
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
                if (_la===166) {
                    {
                    this.state = 2455;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2458;
                this.match(CypherParser.STAR);
                this.state = 2460;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2459;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2462;
                this.match(CypherParser.T__3);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2463;
                this.match(CypherParser.CAST);
                this.state = 2465;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2464;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2467;
                this.match(CypherParser.T__1);
                this.state = 2469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2468;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2471;
                this.kU_FunctionParameter();
                this.state = 2473;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2472;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2485;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case CypherParser.AS:
                    {
                    {
                    this.state = 2475;
                    this.match(CypherParser.AS);
                    this.state = 2477;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2476;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2479;
                    this.kU_DataType(0);
                    }
                    }
                    break;
                case CypherParser.T__2:
                    {
                    {
                    this.state = 2480;
                    this.match(CypherParser.T__2);
                    this.state = 2482;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2481;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2484;
                    this.kU_FunctionParameter();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2488;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2487;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2490;
                this.match(CypherParser.T__3);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2492;
                this.oC_FunctionName();
                this.state = 2494;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2493;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2496;
                this.match(CypherParser.T__1);
                this.state = 2498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2497;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2504;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===75) {
                    {
                    this.state = 2500;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2502;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2501;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2523;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109508) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382997909) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2077579423) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 2317814653) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 9741) !== 0)) {
                    {
                    this.state = 2506;
                    this.kU_FunctionParameter();
                    this.state = 2508;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2507;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2520;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===3) {
                        {
                        {
                        this.state = 2510;
                        this.match(CypherParser.T__2);
                        this.state = 2512;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 2511;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2514;
                        this.kU_FunctionParameter();
                        this.state = 2516;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 2515;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2522;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2525;
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
        this.enterRule(localctx, 294, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2529;
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
            this.state = 2544;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 428, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2540;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 427, this._ctx) ) {
                case 1:
                    {
                    this.state = 2531;
                    this.oC_SymbolicName();
                    this.state = 2533;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2532;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2535;
                    this.match(CypherParser.COLON);
                    this.state = 2536;
                    this.match(CypherParser.T__5);
                    this.state = 2538;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2537;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 2542;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2543;
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
            this.state = 2546;
            this.kU_LambdaVars();
            this.state = 2548;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2547;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2550;
            this.match(CypherParser.MINUS);
            this.state = 2551;
            this.match(CypherParser.T__15);
            this.state = 2553;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2552;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2555;
            this.oC_Expression();
            this.state = 2557;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 431, this._ctx) ) {
            case 1:
                {
                this.state = 2556;
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
            this.state = 2583;
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
                this.state = 2559;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2560;
                this.match(CypherParser.T__1);
                this.state = 2562;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2561;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2564;
                this.oC_SymbolicName();
                this.state = 2566;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2565;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2578;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===3) {
                    {
                    {
                    this.state = 2568;
                    this.match(CypherParser.T__2);
                    this.state = 2570;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2569;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2572;
                    this.oC_SymbolicName();
                    this.state = 2574;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2573;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2580;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2581;
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
        this.enterRule(localctx, 302, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2585;
            this.oC_NodePattern();
            this.state = 2590;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2587;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===166) {
                        {
                        this.state = 2586;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2589;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2592;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 439, this._ctx);
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
            this.state = 2594;
            this.match(CypherParser.EXISTS);
            this.state = 2596;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2595;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2598;
            this.match(CypherParser.T__8);
            this.state = 2600;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2599;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2602;
            this.match(CypherParser.MATCH);
            this.state = 2604;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2603;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2606;
            this.oC_Pattern();
            this.state = 2611;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 444, this._ctx) ) {
            case 1:
                {
                this.state = 2608;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2607;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2610;
                this.oC_Where();
                }
                break;
            }
            this.state = 2614;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2613;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2616;
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
            this.state = 2618;
            this.match(CypherParser.COUNT);
            this.state = 2620;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2619;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2622;
            this.match(CypherParser.T__8);
            this.state = 2624;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2623;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2626;
            this.match(CypherParser.MATCH);
            this.state = 2628;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2627;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2630;
            this.oC_Pattern();
            this.state = 2635;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 450, this._ctx) ) {
            case 1:
                {
                this.state = 2632;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2631;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2634;
                this.oC_Where();
                }
                break;
            }
            this.state = 2638;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2637;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2640;
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
            this.state = 2642;
            this.match(CypherParser.T__4);
            this.state = 2644;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2643;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2648;
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
                this.state = 2646;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2647;
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
            this.state = 2672;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 459, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2650;
                this.match(CypherParser.CASE);
                this.state = 2655;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2652;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 2651;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2654;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2657;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 455, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2659;
                this.match(CypherParser.CASE);
                this.state = 2661;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2660;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2663;
                this.oC_Expression();
                this.state = 2668;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2665;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===166) {
                            {
                            this.state = 2664;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2667;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2670;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 458, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2682;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 462, this._ctx) ) {
            case 1:
                {
                this.state = 2675;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2674;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2677;
                this.match(CypherParser.ELSE);
                this.state = 2679;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 2678;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2681;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2685;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2684;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2687;
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
            this.state = 2689;
            this.match(CypherParser.WHEN);
            this.state = 2691;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2690;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2693;
            this.oC_Expression();
            this.state = 2695;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2694;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2697;
            this.match(CypherParser.THEN);
            this.state = 2699;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2698;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2701;
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
            this.state = 2703;
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
            this.state = 2707;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2705;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2706;
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
            this.state = 2709;
            this.match(CypherParser.T__25);
            this.state = 2712;
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
                this.state = 2710;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2711;
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
            this.state = 2714;
            this.oC_Atom();
            this.state = 2716;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2715;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2718;
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
            this.state = 2720;
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
            this.state = 2722;
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
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2724;
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
        this.enterRule(localctx, 328, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2726;
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
            this.state = 2733;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2728;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2729;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2731;
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
                this.state = 2732;
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
            this.state = 2735;
            _la = this._input.LA(1);
            if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1382991765) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 233483335) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 170199933) !== 0))) {
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
            this.state = 2737;
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
            this.state = 2739;
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
            this.state = 2741;
            _la = this._input.LA(1);
            if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2047) !== 0) || _la===149)) {
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
        4,1,169,2744,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,
        2,395,8,2,1,3,1,3,1,3,1,3,3,3,401,8,3,1,3,1,3,3,3,405,8,3,1,3,3,
        3,408,8,3,1,3,1,3,1,3,1,3,3,3,414,8,3,1,3,3,3,417,8,3,1,4,1,4,3,
        4,421,8,4,1,4,1,4,3,4,425,8,4,1,4,1,4,3,4,429,8,4,1,4,5,4,432,8,
        4,10,4,12,4,435,9,4,1,4,3,4,438,8,4,1,4,1,4,1,5,1,5,1,5,3,5,445,
        8,5,1,5,1,5,3,5,449,8,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,457,8,5,1,5,
        1,5,3,5,461,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,471,8,6,1,6,
        1,6,3,6,475,8,6,1,6,1,6,3,6,479,8,6,1,6,5,6,482,8,6,10,6,12,6,485,
        9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,497,8,7,1,7,1,7,
        3,7,501,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,509,8,7,1,7,3,7,512,8,7,
        1,8,1,8,1,8,1,8,1,8,1,8,3,8,520,8,8,1,8,3,8,523,8,8,1,9,1,9,1,9,
        1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,538,8,10,1,10,
        1,10,1,10,3,10,543,8,10,1,10,1,10,1,10,1,10,3,10,549,8,10,1,10,1,
        10,3,10,553,8,10,1,10,3,10,556,8,10,1,10,3,10,559,8,10,1,10,1,10,
        1,11,1,11,3,11,565,8,11,1,11,1,11,3,11,569,8,11,1,11,1,11,1,12,1,
        12,3,12,575,8,12,1,12,1,12,3,12,579,8,12,1,12,5,12,582,8,12,10,12,
        12,12,585,9,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,
        1,15,1,15,3,15,599,8,15,1,15,1,15,3,15,603,8,15,1,15,1,15,1,16,1,
        16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,
        17,1,17,1,17,1,17,3,17,625,8,17,1,17,1,17,3,17,629,8,17,1,17,3,17,
        632,8,17,1,17,3,17,635,8,17,1,17,3,17,638,8,17,1,17,3,17,641,8,17,
        1,17,1,17,3,17,645,8,17,1,17,5,17,648,8,17,10,17,12,17,651,9,17,
        1,17,3,17,654,8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,3,18,
        664,8,18,1,18,1,18,3,18,668,8,18,1,18,5,18,671,8,18,10,18,12,18,
        674,9,18,1,19,1,19,3,19,678,8,19,1,19,1,19,1,19,3,19,683,8,19,1,
        19,1,19,1,20,1,20,3,20,689,8,20,1,20,1,20,3,20,693,8,20,1,20,1,20,
        3,20,697,8,20,1,20,5,20,700,8,20,10,20,12,20,703,9,20,1,20,1,20,
        1,20,1,20,3,20,709,8,20,1,20,1,20,3,20,713,8,20,1,20,1,20,3,20,717,
        8,20,1,20,3,20,720,8,20,1,21,1,21,3,21,724,8,21,1,21,1,21,3,21,728,
        8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,
        1,23,1,23,1,23,1,23,1,23,3,23,747,8,23,1,23,1,23,3,23,751,8,23,1,
        23,1,23,3,23,755,8,23,1,23,1,23,3,23,759,8,23,1,23,1,23,3,23,763,
        8,23,1,23,1,23,1,23,3,23,768,8,23,1,23,1,23,1,24,1,24,1,24,1,24,
        1,24,1,24,1,24,1,24,1,24,3,24,781,8,24,1,24,1,24,3,24,785,8,24,1,
        24,1,24,3,24,789,8,24,1,24,1,24,3,24,793,8,24,1,24,1,24,3,24,797,
        8,24,1,24,1,24,3,24,801,8,24,3,24,803,8,24,1,24,1,24,3,24,807,8,
        24,1,24,1,24,3,24,811,8,24,3,24,813,8,24,1,24,1,24,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,828,8,25,1,25,1,25,
        3,25,832,8,25,1,25,1,25,3,25,836,8,25,1,25,1,25,3,25,840,8,25,1,
        25,1,25,3,25,844,8,25,1,25,4,25,847,8,25,11,25,12,25,848,1,25,3,
        25,852,8,25,1,25,1,25,3,25,856,8,25,1,25,1,25,3,25,860,8,25,3,25,
        862,8,25,1,25,1,25,3,25,866,8,25,1,25,1,25,3,25,870,8,25,3,25,872,
        8,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,
        1,27,1,27,1,27,1,27,1,27,3,27,891,8,27,1,27,1,27,1,28,1,28,1,28,
        1,28,1,28,1,28,1,28,3,28,902,8,28,1,28,1,28,1,28,5,28,907,8,28,10,
        28,12,28,910,9,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
        29,3,29,922,8,29,1,30,1,30,1,30,1,30,1,30,3,30,929,8,30,1,31,1,31,
        1,31,1,31,3,31,935,8,31,1,31,3,31,938,8,31,1,31,1,31,1,32,1,32,1,
        32,1,32,1,32,1,32,3,32,948,8,32,1,32,3,32,951,8,32,1,33,1,33,1,33,
        1,33,1,33,1,33,3,33,959,8,33,1,33,3,33,962,8,33,1,34,1,34,1,34,1,
        34,3,34,968,8,34,1,34,3,34,971,8,34,1,34,1,34,1,35,1,35,3,35,977,
        8,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,
        1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,3,38,999,8,38,1,39,1,39,
        1,39,1,39,1,39,1,39,1,39,3,39,1008,8,39,1,40,1,40,1,40,1,40,1,41,
        1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,
        1,43,1,43,1,43,1,43,1,44,1,44,3,44,1034,8,44,1,44,1,44,3,44,1038,
        8,44,1,44,5,44,1041,8,44,10,44,12,44,1044,9,44,1,45,1,45,1,45,1,
        45,1,46,1,46,3,46,1052,8,46,1,46,1,46,3,46,1056,8,46,1,46,5,46,1059,
        8,46,10,46,12,46,1062,9,46,1,47,1,47,1,47,1,47,1,47,3,47,1069,8,
        47,1,48,1,48,1,48,1,48,3,48,1075,8,48,1,48,1,48,3,48,1079,8,48,1,
        48,1,48,3,48,1083,8,48,1,48,1,48,1,49,1,49,1,49,1,49,3,49,1091,8,
        49,1,49,1,49,3,49,1095,8,49,1,49,1,49,3,49,1099,8,49,1,49,1,49,1,
        49,1,49,3,49,1105,8,49,1,49,1,49,3,49,1109,8,49,1,49,1,49,3,49,1113,
        8,49,1,49,1,49,1,49,1,49,3,49,1119,8,49,1,49,1,49,3,49,1123,8,49,
        1,49,1,49,3,49,1127,8,49,1,49,1,49,3,49,1131,8,49,1,49,1,49,3,49,
        1135,8,49,1,49,1,49,1,49,1,49,3,49,1141,8,49,1,49,1,49,3,49,1145,
        8,49,1,49,1,49,3,49,1149,8,49,1,49,1,49,3,49,1153,8,49,1,49,1,49,
        3,49,1157,8,49,1,49,1,49,3,49,1161,8,49,1,49,1,49,5,49,1165,8,49,
        10,49,12,49,1168,9,49,1,50,1,50,5,50,1172,8,50,10,50,12,50,1175,
        9,50,1,51,1,51,3,51,1179,8,51,1,51,1,51,1,52,1,52,3,52,1185,8,52,
        1,53,1,53,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,
        1,55,1,55,1,55,1,55,1,55,3,55,1205,8,55,1,56,1,56,3,56,1209,8,56,
        1,57,1,57,1,57,1,57,1,57,1,57,3,57,1217,8,57,1,58,1,58,1,58,1,58,
        1,59,1,59,3,59,1225,8,59,3,59,1227,8,59,1,59,1,59,1,60,1,60,1,60,
        1,60,1,60,1,60,3,60,1237,8,60,1,60,1,60,3,60,1241,8,60,1,60,1,60,
        3,60,1245,8,60,1,60,1,60,1,61,1,61,3,61,1251,8,61,1,61,1,61,3,61,
        1255,8,61,1,61,5,61,1258,8,61,10,61,12,61,1261,9,61,1,62,1,62,3,
        62,1265,8,62,1,62,5,62,1268,8,62,10,62,12,62,1271,9,62,1,62,1,62,
        3,62,1275,8,62,4,62,1277,8,62,11,62,12,62,1278,1,62,1,62,1,62,3,
        62,1284,8,62,1,63,1,63,1,63,1,63,3,63,1290,8,63,1,63,1,63,1,63,3,
        63,1295,8,63,1,63,3,63,1298,8,63,1,64,1,64,3,64,1302,8,64,1,65,1,
        65,3,65,1306,8,65,5,65,1308,8,65,10,65,12,65,1311,9,65,1,65,1,65,
        1,65,3,65,1316,8,65,5,65,1318,8,65,10,65,12,65,1321,9,65,1,65,1,
        65,3,65,1325,8,65,1,65,5,65,1328,8,65,10,65,12,65,1331,9,65,1,65,
        3,65,1334,8,65,1,65,3,65,1337,8,65,1,65,1,65,3,65,1341,8,65,4,65,
        1343,8,65,11,65,12,65,1344,1,65,1,65,3,65,1349,8,65,1,66,1,66,3,
        66,1353,8,66,4,66,1355,8,66,11,66,12,66,1356,1,66,1,66,1,67,1,67,
        3,67,1363,8,67,5,67,1365,8,67,10,67,12,67,1368,9,67,1,67,1,67,3,
        67,1372,8,67,5,67,1374,8,67,10,67,12,67,1377,9,67,1,67,1,67,1,68,
        1,68,1,68,1,68,3,68,1385,8,68,1,69,1,69,1,69,1,69,3,69,1391,8,69,
        1,70,1,70,1,70,1,70,1,70,1,70,3,70,1399,8,70,1,70,1,70,3,70,1403,
        8,70,1,70,1,70,3,70,1407,8,70,1,70,1,70,3,70,1411,8,70,1,70,1,70,
        1,70,1,70,1,70,3,70,1418,8,70,1,70,3,70,1421,8,70,1,70,3,70,1424,
        8,70,1,70,3,70,1427,8,70,1,71,1,71,3,71,1431,8,71,3,71,1433,8,71,
        1,71,1,71,1,71,1,71,3,71,1439,8,71,1,71,3,71,1442,8,71,1,72,1,72,
        3,72,1446,8,72,1,72,1,72,3,72,1450,8,72,1,72,1,72,3,72,1454,8,72,
        1,72,1,72,3,72,1458,8,72,1,73,1,73,3,73,1462,8,73,1,73,1,73,3,73,
        1466,8,73,1,73,5,73,1469,8,73,10,73,12,73,1472,9,73,1,74,1,74,1,
        74,3,74,1477,8,74,1,74,1,74,3,74,1481,8,74,1,75,1,75,3,75,1485,8,
        75,1,75,1,75,3,75,1489,8,75,1,75,1,75,1,75,3,75,1494,8,75,1,75,1,
        75,3,75,1498,8,75,1,76,1,76,1,76,1,76,1,77,1,77,1,77,3,77,1507,8,
        77,1,77,1,77,3,77,1511,8,77,1,77,1,77,1,77,3,77,1516,8,77,1,77,1,
        77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,4,77,1528,8,77,11,77,
        12,77,1529,5,77,1532,8,77,10,77,12,77,1535,9,77,1,78,1,78,3,78,1539,
        8,78,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,3,79,1549,8,79,1,79,
        1,79,1,80,1,80,3,80,1555,8,80,1,80,1,80,1,80,5,80,1560,8,80,10,80,
        12,80,1563,9,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,
        3,81,1575,8,81,1,82,1,82,3,82,1579,8,82,1,82,1,82,3,82,1583,8,82,
        1,82,1,82,3,82,1587,8,82,1,82,5,82,1590,8,82,10,82,12,82,1593,9,
        82,1,83,1,83,3,83,1597,8,83,1,83,1,83,3,83,1601,8,83,1,83,1,83,1,
        84,1,84,3,84,1607,8,84,1,84,1,84,3,84,1611,8,84,1,84,1,84,3,84,1615,
        8,84,1,84,1,84,3,84,1619,8,84,1,84,5,84,1622,8,84,10,84,12,84,1625,
        9,84,1,85,1,85,1,85,3,85,1630,8,85,1,85,3,85,1633,8,85,1,86,1,86,
        1,86,1,87,3,87,1639,8,87,1,87,3,87,1642,8,87,1,87,1,87,1,87,1,87,
        3,87,1648,8,87,1,87,1,87,3,87,1652,8,87,1,87,1,87,3,87,1656,8,87,
        1,88,1,88,3,88,1660,8,88,1,88,1,88,3,88,1664,8,88,1,88,5,88,1667,
        8,88,10,88,12,88,1670,9,88,1,88,1,88,3,88,1674,8,88,1,88,1,88,3,
        88,1678,8,88,1,88,5,88,1681,8,88,10,88,12,88,1684,9,88,3,88,1686,
        8,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,3,89,1695,8,89,1,90,1,90,
        1,90,1,90,1,90,1,90,1,90,3,90,1704,8,90,1,90,5,90,1707,8,90,10,90,
        12,90,1710,9,90,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,93,1,93,
        3,93,1722,8,93,1,93,3,93,1725,8,93,1,94,1,94,1,94,1,94,1,95,1,95,
        3,95,1733,8,95,1,95,1,95,3,95,1737,8,95,1,95,5,95,1740,8,95,10,95,
        12,95,1743,9,95,1,96,1,96,3,96,1747,8,96,1,96,1,96,3,96,1751,8,96,
        1,96,1,96,1,96,3,96,1756,8,96,1,97,1,97,1,98,1,98,3,98,1762,8,98,
        1,98,5,98,1765,8,98,10,98,12,98,1768,9,98,1,98,1,98,1,98,1,98,3,
        98,1774,8,98,1,99,1,99,3,99,1778,8,99,1,99,1,99,3,99,1782,8,99,3,
        99,1784,8,99,1,99,1,99,3,99,1788,8,99,3,99,1790,8,99,1,99,1,99,3,
        99,1794,8,99,3,99,1796,8,99,1,99,1,99,1,100,1,100,3,100,1802,8,100,
        1,100,1,100,1,101,1,101,3,101,1808,8,101,1,101,1,101,3,101,1812,
        8,101,1,101,3,101,1815,8,101,1,101,3,101,1818,8,101,1,101,1,101,
        1,101,1,101,3,101,1824,8,101,1,101,3,101,1827,8,101,1,101,3,101,
        1830,8,101,1,101,1,101,3,101,1834,8,101,1,101,1,101,1,101,1,101,
        3,101,1840,8,101,1,101,3,101,1843,8,101,1,101,3,101,1846,8,101,1,
        101,1,101,3,101,1850,8,101,1,102,1,102,3,102,1854,8,102,1,102,1,
        102,3,102,1858,8,102,3,102,1860,8,102,1,102,1,102,3,102,1864,8,102,
        3,102,1866,8,102,1,102,1,102,3,102,1870,8,102,3,102,1872,8,102,1,
        102,1,102,3,102,1876,8,102,3,102,1878,8,102,1,102,1,102,1,103,1,
        103,3,103,1884,8,103,1,103,1,103,3,103,1888,8,103,1,103,1,103,3,
        103,1892,8,103,1,103,1,103,3,103,1896,8,103,1,103,1,103,3,103,1900,
        8,103,1,103,1,103,3,103,1904,8,103,1,103,1,103,3,103,1908,8,103,
        1,103,1,103,3,103,1912,8,103,5,103,1914,8,103,10,103,12,103,1917,
        9,103,3,103,1919,8,103,1,103,1,103,1,104,1,104,3,104,1925,8,104,
        1,104,1,104,3,104,1929,8,104,1,104,1,104,3,104,1933,8,104,1,104,
        3,104,1936,8,104,1,104,5,104,1939,8,104,10,104,12,104,1942,9,104,
        1,105,1,105,3,105,1946,8,105,1,105,5,105,1949,8,105,10,105,12,105,
        1952,9,105,1,106,1,106,3,106,1956,8,106,1,106,1,106,1,107,1,107,
        3,107,1962,8,107,1,107,1,107,1,107,1,107,3,107,1968,8,107,1,107,
        3,107,1971,8,107,1,107,3,107,1974,8,107,1,107,3,107,1977,8,107,1,
        107,1,107,3,107,1981,8,107,1,107,3,107,1984,8,107,1,107,3,107,1987,
        8,107,1,107,3,107,1990,8,107,1,107,3,107,1993,8,107,1,108,1,108,
        3,108,1997,8,108,1,108,1,108,3,108,2001,8,108,1,108,1,108,3,108,
        2005,8,108,1,108,1,108,3,108,2009,8,108,1,108,1,108,3,108,2013,8,
        108,1,108,1,108,3,108,2017,8,108,3,108,2019,8,108,1,108,3,108,2022,
        8,108,1,108,1,108,3,108,2026,8,108,1,108,1,108,3,108,2030,8,108,
        1,108,1,108,3,108,2034,8,108,1,108,1,108,3,108,2038,8,108,3,108,
        2040,8,108,1,108,1,108,1,109,1,109,3,109,2046,8,109,1,109,3,109,
        2049,8,109,1,109,3,109,2052,8,109,1,109,1,109,1,110,1,110,3,110,
        2058,8,110,1,110,3,110,2061,8,110,1,110,3,110,2064,8,110,1,110,1,
        110,1,111,1,111,1,112,1,112,1,113,1,113,1,114,1,114,1,115,1,115,
        1,116,1,116,1,116,1,116,1,116,5,116,2083,8,116,10,116,12,116,2086,
        9,116,1,117,1,117,1,117,1,117,1,117,5,117,2093,8,117,10,117,12,117,
        2096,9,117,1,118,1,118,1,118,1,118,1,118,5,118,2103,8,118,10,118,
        12,118,2106,9,118,1,119,1,119,3,119,2110,8,119,5,119,2112,8,119,
        10,119,12,119,2115,9,119,1,119,1,119,1,120,1,120,3,120,2121,8,120,
        1,120,1,120,3,120,2125,8,120,1,120,1,120,3,120,2129,8,120,1,120,
        1,120,3,120,2133,8,120,1,120,1,120,3,120,2137,8,120,1,120,1,120,
        1,120,1,120,1,120,1,120,3,120,2145,8,120,1,120,1,120,3,120,2149,
        8,120,1,120,1,120,3,120,2153,8,120,1,120,1,120,3,120,2157,8,120,
        1,120,1,120,4,120,2161,8,120,11,120,12,120,2162,1,120,1,120,3,120,
        2167,8,120,1,121,1,121,1,122,1,122,3,122,2173,8,122,1,122,1,122,
        3,122,2177,8,122,1,122,5,122,2180,8,122,10,122,12,122,2183,9,122,
        1,123,1,123,3,123,2187,8,123,1,123,1,123,3,123,2191,8,123,1,123,
        5,123,2194,8,123,10,123,12,123,2197,9,123,1,124,1,124,3,124,2201,
        8,124,1,124,1,124,3,124,2205,8,124,1,124,1,124,5,124,2209,8,124,
        10,124,12,124,2212,9,124,1,125,1,125,1,126,1,126,3,126,2218,8,126,
        1,126,1,126,3,126,2222,8,126,1,126,1,126,5,126,2226,8,126,10,126,
        12,126,2229,9,126,1,127,1,127,1,128,1,128,3,128,2235,8,128,1,128,
        1,128,3,128,2239,8,128,1,128,1,128,5,128,2243,8,128,10,128,12,128,
        2246,9,128,1,129,1,129,1,130,1,130,3,130,2252,8,130,1,130,1,130,
        3,130,2256,8,130,1,130,5,130,2259,8,130,10,130,12,130,2262,9,130,
        1,131,1,131,3,131,2266,8,131,5,131,2268,8,131,10,131,12,131,2271,
        9,131,1,131,1,131,3,131,2275,8,131,1,131,3,131,2278,8,131,1,132,
        1,132,1,132,4,132,2283,8,132,11,132,12,132,2284,1,132,3,132,2288,
        8,132,1,133,1,133,1,133,3,133,2293,8,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,3,133,2302,8,133,1,133,1,133,3,133,2306,8,133,
        1,133,3,133,2309,8,133,1,134,1,134,1,134,1,134,1,134,1,134,1,134,
        1,134,1,134,1,134,1,134,3,134,2322,8,134,1,134,3,134,2325,8,134,
        1,134,1,134,1,135,3,135,2330,8,135,1,135,1,135,1,136,1,136,1,136,
        1,136,1,136,1,136,1,136,1,136,1,136,1,136,3,136,2344,8,136,1,137,
        1,137,3,137,2348,8,137,1,137,5,137,2351,8,137,10,137,12,137,2354,
        9,137,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,3,138,
        2365,8,138,1,139,1,139,1,139,1,139,1,139,1,139,3,139,2373,8,139,
        1,140,1,140,1,141,1,141,3,141,2379,8,141,1,141,1,141,3,141,2383,
        8,141,1,141,1,141,3,141,2387,8,141,5,141,2389,8,141,10,141,12,141,
        2392,9,141,3,141,2394,8,141,1,141,1,141,1,142,1,142,3,142,2400,8,
        142,1,142,3,142,2403,8,142,1,143,1,143,3,143,2407,8,143,1,143,1,
        143,3,143,2411,8,143,1,143,1,143,3,143,2415,8,143,1,143,1,143,3,
        143,2419,8,143,5,143,2421,8,143,10,143,12,143,2424,9,143,1,143,1,
        143,1,144,1,144,3,144,2430,8,144,1,144,3,144,2433,8,144,1,144,1,
        144,3,144,2437,8,144,1,144,1,144,1,145,1,145,3,145,2443,8,145,1,
        145,1,145,3,145,2447,8,145,1,145,1,145,1,146,1,146,3,146,2453,8,
        146,1,146,1,146,3,146,2457,8,146,1,146,1,146,3,146,2461,8,146,1,
        146,1,146,1,146,3,146,2466,8,146,1,146,1,146,3,146,2470,8,146,1,
        146,1,146,3,146,2474,8,146,1,146,1,146,3,146,2478,8,146,1,146,1,
        146,1,146,3,146,2483,8,146,1,146,3,146,2486,8,146,1,146,3,146,2489,
        8,146,1,146,1,146,1,146,1,146,3,146,2495,8,146,1,146,1,146,3,146,
        2499,8,146,1,146,1,146,3,146,2503,8,146,3,146,2505,8,146,1,146,1,
        146,3,146,2509,8,146,1,146,1,146,3,146,2513,8,146,1,146,1,146,3,
        146,2517,8,146,5,146,2519,8,146,10,146,12,146,2522,9,146,3,146,2524,
        8,146,1,146,1,146,3,146,2528,8,146,1,147,1,147,1,148,1,148,3,148,
        2534,8,148,1,148,1,148,1,148,3,148,2539,8,148,3,148,2541,8,148,1,
        148,1,148,3,148,2545,8,148,1,149,1,149,3,149,2549,8,149,1,149,1,
        149,1,149,3,149,2554,8,149,1,149,1,149,3,149,2558,8,149,1,150,1,
        150,1,150,3,150,2563,8,150,1,150,1,150,3,150,2567,8,150,1,150,1,
        150,3,150,2571,8,150,1,150,1,150,3,150,2575,8,150,5,150,2577,8,150,
        10,150,12,150,2580,9,150,1,150,1,150,3,150,2584,8,150,1,151,1,151,
        3,151,2588,8,151,1,151,4,151,2591,8,151,11,151,12,151,2592,1,152,
        1,152,3,152,2597,8,152,1,152,1,152,3,152,2601,8,152,1,152,1,152,
        3,152,2605,8,152,1,152,1,152,3,152,2609,8,152,1,152,3,152,2612,8,
        152,1,152,3,152,2615,8,152,1,152,1,152,1,153,1,153,3,153,2621,8,
        153,1,153,1,153,3,153,2625,8,153,1,153,1,153,3,153,2629,8,153,1,
        153,1,153,3,153,2633,8,153,1,153,3,153,2636,8,153,1,153,3,153,2639,
        8,153,1,153,1,153,1,154,1,154,3,154,2645,8,154,1,154,1,154,3,154,
        2649,8,154,1,155,1,155,3,155,2653,8,155,1,155,4,155,2656,8,155,11,
        155,12,155,2657,1,155,1,155,3,155,2662,8,155,1,155,1,155,3,155,2666,
        8,155,1,155,4,155,2669,8,155,11,155,12,155,2670,3,155,2673,8,155,
        1,155,3,155,2676,8,155,1,155,1,155,3,155,2680,8,155,1,155,3,155,
        2683,8,155,1,155,3,155,2686,8,155,1,155,1,155,1,156,1,156,3,156,
        2692,8,156,1,156,1,156,3,156,2696,8,156,1,156,1,156,3,156,2700,8,
        156,1,156,1,156,1,157,1,157,1,158,1,158,3,158,2708,8,158,1,159,1,
        159,1,159,3,159,2713,8,159,1,160,1,160,3,160,2717,8,160,1,160,1,
        160,1,161,1,161,1,162,1,162,1,163,1,163,1,164,1,164,1,165,1,165,
        1,165,1,165,1,165,3,165,2734,8,165,1,166,1,166,1,167,1,167,1,168,
        1,168,1,169,1,169,1,169,0,2,98,154,170,0,2,4,6,8,10,12,14,16,18,
        20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
        64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,
        106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,
        138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,
        170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,
        202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,
        234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,
        266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,
        298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,
        330,332,334,336,338,0,11,3,0,119,119,126,126,131,131,2,0,51,52,72,
        73,2,0,6,6,13,17,1,0,19,20,2,0,21,21,149,149,2,0,22,23,146,146,2,
        0,84,84,135,135,28,0,46,46,48,48,50,50,53,56,60,61,63,65,67,68,71,
        71,74,74,76,76,81,83,87,87,91,92,94,94,96,96,98,98,100,100,102,105,
        107,108,118,118,120,124,126,127,129,129,134,134,136,136,139,139,
        143,143,145,145,2,0,14,14,27,30,2,0,16,16,31,34,2,0,35,45,149,149,
        3107,0,340,1,0,0,0,2,360,1,0,0,0,4,394,1,0,0,0,6,396,1,0,0,0,8,418,
        1,0,0,0,10,460,1,0,0,0,12,462,1,0,0,0,14,492,1,0,0,0,16,513,1,0,
        0,0,18,524,1,0,0,0,20,530,1,0,0,0,22,562,1,0,0,0,24,572,1,0,0,0,
        26,586,1,0,0,0,28,590,1,0,0,0,30,594,1,0,0,0,32,606,1,0,0,0,34,618,
        1,0,0,0,36,661,1,0,0,0,38,675,1,0,0,0,40,719,1,0,0,0,42,721,1,0,
        0,0,44,731,1,0,0,0,46,737,1,0,0,0,48,771,1,0,0,0,50,816,1,0,0,0,
        52,875,1,0,0,0,54,883,1,0,0,0,56,894,1,0,0,0,58,911,1,0,0,0,60,928,
        1,0,0,0,62,930,1,0,0,0,64,950,1,0,0,0,66,961,1,0,0,0,68,963,1,0,
        0,0,70,976,1,0,0,0,72,980,1,0,0,0,74,986,1,0,0,0,76,998,1,0,0,0,
        78,1000,1,0,0,0,80,1009,1,0,0,0,82,1013,1,0,0,0,84,1017,1,0,0,0,
        86,1023,1,0,0,0,88,1031,1,0,0,0,90,1045,1,0,0,0,92,1049,1,0,0,0,
        94,1063,1,0,0,0,96,1070,1,0,0,0,98,1160,1,0,0,0,100,1169,1,0,0,0,
        102,1176,1,0,0,0,104,1184,1,0,0,0,106,1186,1,0,0,0,108,1188,1,0,
        0,0,110,1204,1,0,0,0,112,1208,1,0,0,0,114,1210,1,0,0,0,116,1218,
        1,0,0,0,118,1226,1,0,0,0,120,1230,1,0,0,0,122,1248,1,0,0,0,124,1283,
        1,0,0,0,126,1297,1,0,0,0,128,1301,1,0,0,0,130,1348,1,0,0,0,132,1354,
        1,0,0,0,134,1366,1,0,0,0,136,1384,1,0,0,0,138,1390,1,0,0,0,140,1392,
        1,0,0,0,142,1432,1,0,0,0,144,1443,1,0,0,0,146,1459,1,0,0,0,148,1473,
        1,0,0,0,150,1484,1,0,0,0,152,1499,1,0,0,0,154,1515,1,0,0,0,156,1536,
        1,0,0,0,158,1546,1,0,0,0,160,1552,1,0,0,0,162,1574,1,0,0,0,164,1576,
        1,0,0,0,166,1594,1,0,0,0,168,1606,1,0,0,0,170,1626,1,0,0,0,172,1634,
        1,0,0,0,174,1641,1,0,0,0,176,1685,1,0,0,0,178,1694,1,0,0,0,180,1696,
        1,0,0,0,182,1711,1,0,0,0,184,1715,1,0,0,0,186,1719,1,0,0,0,188,1726,
        1,0,0,0,190,1730,1,0,0,0,192,1755,1,0,0,0,194,1757,1,0,0,0,196,1773,
        1,0,0,0,198,1775,1,0,0,0,200,1799,1,0,0,0,202,1849,1,0,0,0,204,1851,
        1,0,0,0,206,1881,1,0,0,0,208,1922,1,0,0,0,210,1943,1,0,0,0,212,1953,
        1,0,0,0,214,1959,1,0,0,0,216,1994,1,0,0,0,218,2043,1,0,0,0,220,2055,
        1,0,0,0,222,2067,1,0,0,0,224,2069,1,0,0,0,226,2071,1,0,0,0,228,2073,
        1,0,0,0,230,2075,1,0,0,0,232,2077,1,0,0,0,234,2087,1,0,0,0,236,2097,
        1,0,0,0,238,2113,1,0,0,0,240,2166,1,0,0,0,242,2168,1,0,0,0,244,2170,
        1,0,0,0,246,2184,1,0,0,0,248,2198,1,0,0,0,250,2213,1,0,0,0,252,2215,
        1,0,0,0,254,2230,1,0,0,0,256,2232,1,0,0,0,258,2247,1,0,0,0,260,2249,
        1,0,0,0,262,2269,1,0,0,0,264,2279,1,0,0,0,266,2308,1,0,0,0,268,2321,
        1,0,0,0,270,2329,1,0,0,0,272,2343,1,0,0,0,274,2345,1,0,0,0,276,2364,
        1,0,0,0,278,2372,1,0,0,0,280,2374,1,0,0,0,282,2376,1,0,0,0,284,2397,
        1,0,0,0,286,2404,1,0,0,0,288,2429,1,0,0,0,290,2440,1,0,0,0,292,2527,
        1,0,0,0,294,2529,1,0,0,0,296,2544,1,0,0,0,298,2546,1,0,0,0,300,2583,
        1,0,0,0,302,2585,1,0,0,0,304,2594,1,0,0,0,306,2618,1,0,0,0,308,2642,
        1,0,0,0,310,2672,1,0,0,0,312,2689,1,0,0,0,314,2703,1,0,0,0,316,2707,
        1,0,0,0,318,2709,1,0,0,0,320,2714,1,0,0,0,322,2720,1,0,0,0,324,2722,
        1,0,0,0,326,2724,1,0,0,0,328,2726,1,0,0,0,330,2733,1,0,0,0,332,2735,
        1,0,0,0,334,2737,1,0,0,0,336,2739,1,0,0,0,338,2741,1,0,0,0,340,351,
        3,2,1,0,341,343,5,166,0,0,342,341,1,0,0,0,342,343,1,0,0,0,343,344,
        1,0,0,0,344,346,5,1,0,0,345,347,5,166,0,0,346,345,1,0,0,0,346,347,
        1,0,0,0,347,348,1,0,0,0,348,350,3,2,1,0,349,342,1,0,0,0,350,353,
        1,0,0,0,351,349,1,0,0,0,351,352,1,0,0,0,352,355,1,0,0,0,353,351,
        1,0,0,0,354,356,5,166,0,0,355,354,1,0,0,0,355,356,1,0,0,0,356,357,
        1,0,0,0,357,358,5,0,0,1,358,1,1,0,0,0,359,361,3,104,52,0,360,359,
        1,0,0,0,360,361,1,0,0,0,361,363,1,0,0,0,362,364,5,166,0,0,363,362,
        1,0,0,0,363,364,1,0,0,0,364,365,1,0,0,0,365,370,3,4,2,0,366,368,
        5,166,0,0,367,366,1,0,0,0,367,368,1,0,0,0,368,369,1,0,0,0,369,371,
        5,1,0,0,370,367,1,0,0,0,370,371,1,0,0,0,371,3,1,0,0,0,372,395,3,
        118,59,0,373,395,3,46,23,0,374,395,3,48,24,0,375,395,3,50,25,0,376,
        395,3,54,27,0,377,395,3,56,28,0,378,395,3,58,29,0,379,395,3,72,36,
        0,380,395,3,74,37,0,381,395,3,6,3,0,382,395,3,12,6,0,383,395,3,14,
        7,0,384,395,3,30,15,0,385,395,3,34,17,0,386,395,3,32,16,0,387,395,
        3,110,55,0,388,395,3,112,56,0,389,395,3,16,8,0,390,395,3,18,9,0,
        391,395,3,20,10,0,392,395,3,26,13,0,393,395,3,28,14,0,394,372,1,
        0,0,0,394,373,1,0,0,0,394,374,1,0,0,0,394,375,1,0,0,0,394,376,1,
        0,0,0,394,377,1,0,0,0,394,378,1,0,0,0,394,379,1,0,0,0,394,380,1,
        0,0,0,394,381,1,0,0,0,394,382,1,0,0,0,394,383,1,0,0,0,394,384,1,
        0,0,0,394,385,1,0,0,0,394,386,1,0,0,0,394,387,1,0,0,0,394,388,1,
        0,0,0,394,389,1,0,0,0,394,390,1,0,0,0,394,391,1,0,0,0,394,392,1,
        0,0,0,394,393,1,0,0,0,395,5,1,0,0,0,396,397,5,64,0,0,397,398,5,166,
        0,0,398,407,3,328,164,0,399,401,5,166,0,0,400,399,1,0,0,0,400,401,
        1,0,0,0,401,402,1,0,0,0,402,404,3,8,4,0,403,405,5,166,0,0,404,403,
        1,0,0,0,404,405,1,0,0,0,405,408,1,0,0,0,406,408,5,166,0,0,407,400,
        1,0,0,0,407,406,1,0,0,0,408,409,1,0,0,0,409,410,5,85,0,0,410,411,
        5,166,0,0,411,416,3,10,5,0,412,414,5,166,0,0,413,412,1,0,0,0,413,
        414,1,0,0,0,414,415,1,0,0,0,415,417,3,42,21,0,416,413,1,0,0,0,416,
        417,1,0,0,0,417,7,1,0,0,0,418,420,5,2,0,0,419,421,5,166,0,0,420,
        419,1,0,0,0,420,421,1,0,0,0,421,422,1,0,0,0,422,433,3,328,164,0,
        423,425,5,166,0,0,424,423,1,0,0,0,424,425,1,0,0,0,425,426,1,0,0,
        0,426,428,5,3,0,0,427,429,5,166,0,0,428,427,1,0,0,0,428,429,1,0,
        0,0,429,430,1,0,0,0,430,432,3,328,164,0,431,424,1,0,0,0,432,435,
        1,0,0,0,433,431,1,0,0,0,433,434,1,0,0,0,434,437,1,0,0,0,435,433,
        1,0,0,0,436,438,5,166,0,0,437,436,1,0,0,0,437,438,1,0,0,0,438,439,
        1,0,0,0,439,440,5,4,0,0,440,9,1,0,0,0,441,461,3,40,20,0,442,444,
        5,2,0,0,443,445,5,166,0,0,444,443,1,0,0,0,444,445,1,0,0,0,445,446,
        1,0,0,0,446,448,3,118,59,0,447,449,5,166,0,0,448,447,1,0,0,0,448,
        449,1,0,0,0,449,450,1,0,0,0,450,451,5,4,0,0,451,461,1,0,0,0,452,
        461,3,314,157,0,453,454,3,314,157,0,454,456,5,5,0,0,455,457,5,166,
        0,0,456,455,1,0,0,0,456,457,1,0,0,0,457,458,1,0,0,0,458,459,3,328,
        164,0,459,461,1,0,0,0,460,441,1,0,0,0,460,442,1,0,0,0,460,452,1,
        0,0,0,460,453,1,0,0,0,461,11,1,0,0,0,462,463,5,64,0,0,463,464,5,
        166,0,0,464,465,3,328,164,0,465,466,5,166,0,0,466,467,5,85,0,0,467,
        468,5,166,0,0,468,470,5,2,0,0,469,471,5,166,0,0,470,469,1,0,0,0,
        470,471,1,0,0,0,471,472,1,0,0,0,472,483,5,152,0,0,473,475,5,166,
        0,0,474,473,1,0,0,0,474,475,1,0,0,0,475,476,1,0,0,0,476,478,5,3,
        0,0,477,479,5,166,0,0,478,477,1,0,0,0,478,479,1,0,0,0,479,480,1,
        0,0,0,480,482,5,152,0,0,481,474,1,0,0,0,482,485,1,0,0,0,483,481,
        1,0,0,0,483,484,1,0,0,0,484,486,1,0,0,0,485,483,1,0,0,0,486,487,
        5,4,0,0,487,488,5,166,0,0,488,489,5,55,0,0,489,490,5,166,0,0,490,
        491,5,59,0,0,491,13,1,0,0,0,492,493,5,64,0,0,493,494,5,166,0,0,494,
        496,5,2,0,0,495,497,5,166,0,0,496,495,1,0,0,0,496,497,1,0,0,0,497,
        498,1,0,0,0,498,500,3,118,59,0,499,501,5,166,0,0,500,499,1,0,0,0,
        500,501,1,0,0,0,501,502,1,0,0,0,502,503,5,4,0,0,503,504,5,166,0,
        0,504,505,5,133,0,0,505,506,5,166,0,0,506,511,5,152,0,0,507,509,
        5,166,0,0,508,507,1,0,0,0,508,509,1,0,0,0,509,510,1,0,0,0,510,512,
        3,42,21,0,511,508,1,0,0,0,511,512,1,0,0,0,512,15,1,0,0,0,513,514,
        5,82,0,0,514,515,5,166,0,0,515,516,5,68,0,0,516,517,5,166,0,0,517,
        522,5,152,0,0,518,520,5,166,0,0,519,518,1,0,0,0,519,520,1,0,0,0,
        520,521,1,0,0,0,521,523,3,42,21,0,522,519,1,0,0,0,522,523,1,0,0,
        0,523,17,1,0,0,0,524,525,5,91,0,0,525,526,5,166,0,0,526,527,5,68,
        0,0,527,528,5,166,0,0,528,529,5,152,0,0,529,19,1,0,0,0,530,531,5,
        53,0,0,531,532,5,166,0,0,532,537,5,152,0,0,533,534,5,166,0,0,534,
        535,5,50,0,0,535,536,5,166,0,0,536,538,3,328,164,0,537,533,1,0,0,
        0,537,538,1,0,0,0,538,539,1,0,0,0,539,540,5,166,0,0,540,542,5,2,
        0,0,541,543,5,166,0,0,542,541,1,0,0,0,542,543,1,0,0,0,543,544,1,
        0,0,0,544,545,5,69,0,0,545,546,5,166,0,0,546,555,3,330,165,0,547,
        549,5,166,0,0,548,547,1,0,0,0,548,549,1,0,0,0,549,550,1,0,0,0,550,
        552,5,3,0,0,551,553,5,166,0,0,552,551,1,0,0,0,552,553,1,0,0,0,553,
        554,1,0,0,0,554,556,3,24,12,0,555,548,1,0,0,0,555,556,1,0,0,0,556,
        558,1,0,0,0,557,559,5,166,0,0,558,557,1,0,0,0,558,559,1,0,0,0,559,
        560,1,0,0,0,560,561,5,4,0,0,561,21,1,0,0,0,562,564,3,330,165,0,563,
        565,5,166,0,0,564,563,1,0,0,0,564,565,1,0,0,0,565,566,1,0,0,0,566,
        568,5,6,0,0,567,569,5,166,0,0,568,567,1,0,0,0,568,569,1,0,0,0,569,
        570,1,0,0,0,570,571,3,278,139,0,571,23,1,0,0,0,572,583,3,22,11,0,
        573,575,5,166,0,0,574,573,1,0,0,0,574,575,1,0,0,0,575,576,1,0,0,
        0,576,578,5,3,0,0,577,579,5,166,0,0,578,577,1,0,0,0,578,579,1,0,
        0,0,579,580,1,0,0,0,580,582,3,22,11,0,581,574,1,0,0,0,582,585,1,
        0,0,0,583,581,1,0,0,0,583,584,1,0,0,0,584,25,1,0,0,0,585,583,1,0,
        0,0,586,587,5,74,0,0,587,588,5,166,0,0,588,589,3,328,164,0,589,27,
        1,0,0,0,590,591,5,139,0,0,591,592,5,166,0,0,592,593,3,328,164,0,
        593,29,1,0,0,0,594,595,5,56,0,0,595,596,5,166,0,0,596,598,3,330,
        165,0,597,599,5,166,0,0,598,597,1,0,0,0,598,599,1,0,0,0,599,600,
        1,0,0,0,600,602,5,6,0,0,601,603,5,166,0,0,602,601,1,0,0,0,602,603,
        1,0,0,0,603,604,1,0,0,0,604,605,3,230,115,0,605,31,1,0,0,0,606,607,
        5,60,0,0,607,608,5,166,0,0,608,609,5,111,0,0,609,610,5,166,0,0,610,
        611,5,131,0,0,611,612,5,166,0,0,612,613,3,328,164,0,613,614,5,166,
        0,0,614,615,5,96,0,0,615,616,5,166,0,0,616,617,5,152,0,0,617,33,
        1,0,0,0,618,619,5,66,0,0,619,620,5,166,0,0,620,621,5,101,0,0,621,
        622,5,166,0,0,622,624,3,294,147,0,623,625,5,166,0,0,624,623,1,0,
        0,0,624,625,1,0,0,0,625,626,1,0,0,0,626,628,5,2,0,0,627,629,5,166,
        0,0,628,627,1,0,0,0,628,629,1,0,0,0,629,631,1,0,0,0,630,632,3,36,
        18,0,631,630,1,0,0,0,631,632,1,0,0,0,632,634,1,0,0,0,633,635,5,166,
        0,0,634,633,1,0,0,0,634,635,1,0,0,0,635,637,1,0,0,0,636,638,3,38,
        19,0,637,636,1,0,0,0,637,638,1,0,0,0,638,649,1,0,0,0,639,641,5,166,
        0,0,640,639,1,0,0,0,640,641,1,0,0,0,641,642,1,0,0,0,642,644,5,3,
        0,0,643,645,5,166,0,0,644,643,1,0,0,0,644,645,1,0,0,0,645,646,1,
        0,0,0,646,648,3,38,19,0,647,640,1,0,0,0,648,651,1,0,0,0,649,647,
        1,0,0,0,649,650,1,0,0,0,650,653,1,0,0,0,651,649,1,0,0,0,652,654,
        5,166,0,0,653,652,1,0,0,0,653,654,1,0,0,0,654,655,1,0,0,0,655,656,
        5,4,0,0,656,657,5,166,0,0,657,658,5,50,0,0,658,659,5,166,0,0,659,
        660,3,230,115,0,660,35,1,0,0,0,661,672,3,330,165,0,662,664,5,166,
        0,0,663,662,1,0,0,0,663,664,1,0,0,0,664,665,1,0,0,0,665,667,5,3,
        0,0,666,668,5,166,0,0,667,666,1,0,0,0,667,668,1,0,0,0,668,669,1,
        0,0,0,669,671,3,330,165,0,670,663,1,0,0,0,671,674,1,0,0,0,672,670,
        1,0,0,0,672,673,1,0,0,0,673,37,1,0,0,0,674,672,1,0,0,0,675,677,3,
        330,165,0,676,678,5,166,0,0,677,676,1,0,0,0,677,678,1,0,0,0,678,
        679,1,0,0,0,679,680,5,151,0,0,680,682,5,6,0,0,681,683,5,166,0,0,
        682,681,1,0,0,0,682,683,1,0,0,0,683,684,1,0,0,0,684,685,3,278,139,
        0,685,39,1,0,0,0,686,688,5,7,0,0,687,689,5,166,0,0,688,687,1,0,0,
        0,688,689,1,0,0,0,689,690,1,0,0,0,690,701,5,152,0,0,691,693,5,166,
        0,0,692,691,1,0,0,0,692,693,1,0,0,0,693,694,1,0,0,0,694,696,5,3,
        0,0,695,697,5,166,0,0,696,695,1,0,0,0,696,697,1,0,0,0,697,698,1,
        0,0,0,698,700,5,152,0,0,699,692,1,0,0,0,700,703,1,0,0,0,701,699,
        1,0,0,0,701,702,1,0,0,0,702,704,1,0,0,0,703,701,1,0,0,0,704,720,
        5,8,0,0,705,720,5,152,0,0,706,708,5,86,0,0,707,709,5,166,0,0,708,
        707,1,0,0,0,708,709,1,0,0,0,709,710,1,0,0,0,710,712,5,2,0,0,711,
        713,5,166,0,0,712,711,1,0,0,0,712,713,1,0,0,0,713,714,1,0,0,0,714,
        716,5,152,0,0,715,717,5,166,0,0,716,715,1,0,0,0,716,717,1,0,0,0,
        717,718,1,0,0,0,718,720,5,4,0,0,719,686,1,0,0,0,719,705,1,0,0,0,
        719,706,1,0,0,0,720,41,1,0,0,0,721,723,5,2,0,0,722,724,5,166,0,0,
        723,722,1,0,0,0,723,724,1,0,0,0,724,725,1,0,0,0,725,727,3,24,12,
        0,726,728,5,166,0,0,727,726,1,0,0,0,727,728,1,0,0,0,728,729,1,0,
        0,0,729,730,5,4,0,0,730,43,1,0,0,0,731,732,5,92,0,0,732,733,5,166,
        0,0,733,734,5,109,0,0,734,735,5,166,0,0,735,736,5,80,0,0,736,45,
        1,0,0,0,737,738,5,66,0,0,738,739,5,166,0,0,739,740,5,108,0,0,740,
        741,5,166,0,0,741,742,5,131,0,0,742,746,5,166,0,0,743,744,3,44,22,
        0,744,745,5,166,0,0,745,747,1,0,0,0,746,743,1,0,0,0,746,747,1,0,
        0,0,747,748,1,0,0,0,748,750,3,328,164,0,749,751,5,166,0,0,750,749,
        1,0,0,0,750,751,1,0,0,0,751,752,1,0,0,0,752,754,5,2,0,0,753,755,
        5,166,0,0,754,753,1,0,0,0,754,755,1,0,0,0,755,756,1,0,0,0,756,758,
        3,92,46,0,757,759,5,166,0,0,758,757,1,0,0,0,758,759,1,0,0,0,759,
        760,1,0,0,0,760,762,5,3,0,0,761,763,5,166,0,0,762,761,1,0,0,0,762,
        763,1,0,0,0,763,764,1,0,0,0,764,765,3,96,48,0,765,767,1,0,0,0,766,
        768,5,166,0,0,767,766,1,0,0,0,767,768,1,0,0,0,768,769,1,0,0,0,769,
        770,5,4,0,0,770,47,1,0,0,0,771,772,5,66,0,0,772,773,5,166,0,0,773,
        774,5,121,0,0,774,775,5,166,0,0,775,776,5,131,0,0,776,780,5,166,
        0,0,777,778,3,44,22,0,778,779,5,166,0,0,779,781,1,0,0,0,780,777,
        1,0,0,0,780,781,1,0,0,0,781,782,1,0,0,0,782,784,3,328,164,0,783,
        785,5,166,0,0,784,783,1,0,0,0,784,785,1,0,0,0,785,786,1,0,0,0,786,
        788,5,2,0,0,787,789,5,166,0,0,788,787,1,0,0,0,788,789,1,0,0,0,789,
        790,1,0,0,0,790,792,3,52,26,0,791,793,5,166,0,0,792,791,1,0,0,0,
        792,793,1,0,0,0,793,802,1,0,0,0,794,796,5,3,0,0,795,797,5,166,0,
        0,796,795,1,0,0,0,796,797,1,0,0,0,797,798,1,0,0,0,798,800,3,92,46,
        0,799,801,5,166,0,0,800,799,1,0,0,0,800,801,1,0,0,0,801,803,1,0,
        0,0,802,794,1,0,0,0,802,803,1,0,0,0,803,812,1,0,0,0,804,806,5,3,
        0,0,805,807,5,166,0,0,806,805,1,0,0,0,806,807,1,0,0,0,807,808,1,
        0,0,0,808,810,3,330,165,0,809,811,5,166,0,0,810,809,1,0,0,0,810,
        811,1,0,0,0,811,813,1,0,0,0,812,804,1,0,0,0,812,813,1,0,0,0,813,
        814,1,0,0,0,814,815,5,4,0,0,815,49,1,0,0,0,816,817,5,66,0,0,817,
        818,5,166,0,0,818,819,5,121,0,0,819,820,5,166,0,0,820,821,5,131,
        0,0,821,822,5,166,0,0,822,823,5,88,0,0,823,827,5,166,0,0,824,825,
        3,44,22,0,825,826,5,166,0,0,826,828,1,0,0,0,827,824,1,0,0,0,827,
        828,1,0,0,0,828,829,1,0,0,0,829,831,3,328,164,0,830,832,5,166,0,
        0,831,830,1,0,0,0,831,832,1,0,0,0,832,833,1,0,0,0,833,835,5,2,0,
        0,834,836,5,166,0,0,835,834,1,0,0,0,835,836,1,0,0,0,836,837,1,0,
        0,0,837,846,3,52,26,0,838,840,5,166,0,0,839,838,1,0,0,0,839,840,
        1,0,0,0,840,841,1,0,0,0,841,843,5,3,0,0,842,844,5,166,0,0,843,842,
        1,0,0,0,843,844,1,0,0,0,844,845,1,0,0,0,845,847,3,52,26,0,846,839,
        1,0,0,0,847,848,1,0,0,0,848,846,1,0,0,0,848,849,1,0,0,0,849,851,
        1,0,0,0,850,852,5,166,0,0,851,850,1,0,0,0,851,852,1,0,0,0,852,861,
        1,0,0,0,853,855,5,3,0,0,854,856,5,166,0,0,855,854,1,0,0,0,855,856,
        1,0,0,0,856,857,1,0,0,0,857,859,3,92,46,0,858,860,5,166,0,0,859,
        858,1,0,0,0,859,860,1,0,0,0,860,862,1,0,0,0,861,853,1,0,0,0,861,
        862,1,0,0,0,862,871,1,0,0,0,863,865,5,3,0,0,864,866,5,166,0,0,865,
        864,1,0,0,0,865,866,1,0,0,0,866,867,1,0,0,0,867,869,3,330,165,0,
        868,870,5,166,0,0,869,868,1,0,0,0,869,870,1,0,0,0,870,872,1,0,0,
        0,871,863,1,0,0,0,871,872,1,0,0,0,872,873,1,0,0,0,873,874,5,4,0,
        0,874,51,1,0,0,0,875,876,5,85,0,0,876,877,5,166,0,0,877,878,3,328,
        164,0,878,879,5,166,0,0,879,880,5,133,0,0,880,881,5,166,0,0,881,
        882,3,328,164,0,882,53,1,0,0,0,883,884,5,66,0,0,884,885,5,166,0,
        0,885,886,5,119,0,0,886,890,5,166,0,0,887,888,3,44,22,0,888,889,
        5,166,0,0,889,891,1,0,0,0,890,887,1,0,0,0,890,891,1,0,0,0,891,892,
        1,0,0,0,892,893,3,328,164,0,893,55,1,0,0,0,894,895,5,66,0,0,895,
        896,5,166,0,0,896,897,5,126,0,0,897,901,5,166,0,0,898,899,3,44,22,
        0,899,900,5,166,0,0,900,902,1,0,0,0,901,898,1,0,0,0,901,902,1,0,
        0,0,902,903,1,0,0,0,903,908,3,328,164,0,904,905,5,166,0,0,905,907,
        3,60,30,0,906,904,1,0,0,0,907,910,1,0,0,0,908,906,1,0,0,0,908,909,
        1,0,0,0,909,57,1,0,0,0,910,908,1,0,0,0,911,912,5,66,0,0,912,913,
        5,166,0,0,913,914,5,136,0,0,914,915,5,166,0,0,915,916,3,328,164,
        0,916,917,5,166,0,0,917,918,5,50,0,0,918,919,5,166,0,0,919,921,3,
        98,49,0,920,922,5,166,0,0,921,920,1,0,0,0,921,922,1,0,0,0,922,59,
        1,0,0,0,923,929,3,62,31,0,924,929,3,64,32,0,925,929,3,66,33,0,926,
        929,3,68,34,0,927,929,3,70,35,0,928,923,1,0,0,0,928,924,1,0,0,0,
        928,925,1,0,0,0,928,926,1,0,0,0,928,927,1,0,0,0,929,61,1,0,0,0,930,
        931,5,94,0,0,931,934,5,166,0,0,932,933,5,55,0,0,933,935,5,166,0,
        0,934,932,1,0,0,0,934,935,1,0,0,0,935,937,1,0,0,0,936,938,5,149,
        0,0,937,936,1,0,0,0,937,938,1,0,0,0,938,939,1,0,0,0,939,940,3,324,
        162,0,940,63,1,0,0,0,941,942,5,107,0,0,942,943,5,166,0,0,943,951,
        5,105,0,0,944,945,5,105,0,0,945,947,5,166,0,0,946,948,5,149,0,0,
        947,946,1,0,0,0,947,948,1,0,0,0,948,949,1,0,0,0,949,951,3,324,162,
        0,950,941,1,0,0,0,950,944,1,0,0,0,951,65,1,0,0,0,952,953,5,107,0,
        0,953,954,5,166,0,0,954,962,5,103,0,0,955,956,5,103,0,0,956,958,
        5,166,0,0,957,959,5,149,0,0,958,957,1,0,0,0,958,959,1,0,0,0,959,
        960,1,0,0,0,960,962,3,324,162,0,961,952,1,0,0,0,961,955,1,0,0,0,
        962,67,1,0,0,0,963,964,5,129,0,0,964,967,5,166,0,0,965,966,5,142,
        0,0,966,968,5,166,0,0,967,965,1,0,0,0,967,968,1,0,0,0,968,970,1,
        0,0,0,969,971,5,149,0,0,970,969,1,0,0,0,970,971,1,0,0,0,971,972,
        1,0,0,0,972,973,3,324,162,0,973,69,1,0,0,0,974,975,5,107,0,0,975,
        977,5,166,0,0,976,974,1,0,0,0,976,977,1,0,0,0,977,978,1,0,0,0,978,
        979,5,67,0,0,979,71,1,0,0,0,980,981,5,76,0,0,981,982,5,166,0,0,982,
        983,7,0,0,0,983,984,5,166,0,0,984,985,3,328,164,0,985,73,1,0,0,0,
        986,987,5,48,0,0,987,988,5,166,0,0,988,989,5,131,0,0,989,990,5,166,
        0,0,990,991,3,328,164,0,991,992,5,166,0,0,992,993,3,76,38,0,993,
        75,1,0,0,0,994,999,3,78,39,0,995,999,3,82,41,0,996,999,3,84,42,0,
        997,999,3,86,43,0,998,994,1,0,0,0,998,995,1,0,0,0,998,996,1,0,0,
        0,998,997,1,0,0,0,999,77,1,0,0,0,1000,1001,5,46,0,0,1001,1002,5,
        166,0,0,1002,1003,3,322,161,0,1003,1004,5,166,0,0,1004,1007,3,98,
        49,0,1005,1006,5,166,0,0,1006,1008,3,80,40,0,1007,1005,1,0,0,0,1007,
        1008,1,0,0,0,1008,79,1,0,0,0,1009,1010,5,70,0,0,1010,1011,5,166,
        0,0,1011,1012,3,230,115,0,1012,81,1,0,0,0,1013,1014,5,76,0,0,1014,
        1015,5,166,0,0,1015,1016,3,322,161,0,1016,83,1,0,0,0,1017,1018,5,
        122,0,0,1018,1019,5,166,0,0,1019,1020,5,133,0,0,1020,1021,5,166,
        0,0,1021,1022,3,328,164,0,1022,85,1,0,0,0,1023,1024,5,122,0,0,1024,
        1025,5,166,0,0,1025,1026,3,322,161,0,1026,1027,5,166,0,0,1027,1028,
        5,133,0,0,1028,1029,5,166,0,0,1029,1030,3,322,161,0,1030,87,1,0,
        0,0,1031,1042,3,90,45,0,1032,1034,5,166,0,0,1033,1032,1,0,0,0,1033,
        1034,1,0,0,0,1034,1035,1,0,0,0,1035,1037,5,3,0,0,1036,1038,5,166,
        0,0,1037,1036,1,0,0,0,1037,1038,1,0,0,0,1038,1039,1,0,0,0,1039,1041,
        3,90,45,0,1040,1033,1,0,0,0,1041,1044,1,0,0,0,1042,1040,1,0,0,0,
        1042,1043,1,0,0,0,1043,89,1,0,0,0,1044,1042,1,0,0,0,1045,1046,3,
        322,161,0,1046,1047,5,166,0,0,1047,1048,3,98,49,0,1048,91,1,0,0,
        0,1049,1060,3,94,47,0,1050,1052,5,166,0,0,1051,1050,1,0,0,0,1051,
        1052,1,0,0,0,1052,1053,1,0,0,0,1053,1055,5,3,0,0,1054,1056,5,166,
        0,0,1055,1054,1,0,0,0,1055,1056,1,0,0,0,1056,1057,1,0,0,0,1057,1059,
        3,94,47,0,1058,1051,1,0,0,0,1059,1062,1,0,0,0,1060,1058,1,0,0,0,
        1060,1061,1,0,0,0,1061,93,1,0,0,0,1062,1060,1,0,0,0,1063,1064,3,
        322,161,0,1064,1065,5,166,0,0,1065,1068,3,98,49,0,1066,1067,5,166,
        0,0,1067,1069,3,80,40,0,1068,1066,1,0,0,0,1068,1069,1,0,0,0,1069,
        95,1,0,0,0,1070,1071,5,116,0,0,1071,1072,5,166,0,0,1072,1074,5,98,
        0,0,1073,1075,5,166,0,0,1074,1073,1,0,0,0,1074,1075,1,0,0,0,1075,
        1076,1,0,0,0,1076,1078,5,2,0,0,1077,1079,5,166,0,0,1078,1077,1,0,
        0,0,1078,1079,1,0,0,0,1079,1080,1,0,0,0,1080,1082,3,322,161,0,1081,
        1083,5,166,0,0,1082,1081,1,0,0,0,1082,1083,1,0,0,0,1083,1084,1,0,
        0,0,1084,1085,5,4,0,0,1085,97,1,0,0,0,1086,1087,6,49,-1,0,1087,1161,
        3,330,165,0,1088,1090,5,137,0,0,1089,1091,5,166,0,0,1090,1089,1,
        0,0,0,1090,1091,1,0,0,0,1091,1092,1,0,0,0,1092,1094,5,2,0,0,1093,
        1095,5,166,0,0,1094,1093,1,0,0,0,1094,1095,1,0,0,0,1095,1096,1,0,
        0,0,1096,1098,3,88,44,0,1097,1099,5,166,0,0,1098,1097,1,0,0,0,1098,
        1099,1,0,0,0,1099,1100,1,0,0,0,1100,1101,5,4,0,0,1101,1161,1,0,0,
        0,1102,1104,3,330,165,0,1103,1105,5,166,0,0,1104,1103,1,0,0,0,1104,
        1105,1,0,0,0,1105,1106,1,0,0,0,1106,1108,5,2,0,0,1107,1109,5,166,
        0,0,1108,1107,1,0,0,0,1108,1109,1,0,0,0,1109,1110,1,0,0,0,1110,1112,
        3,88,44,0,1111,1113,5,166,0,0,1112,1111,1,0,0,0,1112,1113,1,0,0,
        0,1113,1114,1,0,0,0,1114,1115,5,4,0,0,1115,1161,1,0,0,0,1116,1118,
        3,330,165,0,1117,1119,5,166,0,0,1118,1117,1,0,0,0,1118,1119,1,0,
        0,0,1119,1120,1,0,0,0,1120,1122,5,2,0,0,1121,1123,5,166,0,0,1122,
        1121,1,0,0,0,1122,1123,1,0,0,0,1123,1124,1,0,0,0,1124,1126,3,98,
        49,0,1125,1127,5,166,0,0,1126,1125,1,0,0,0,1126,1127,1,0,0,0,1127,
        1128,1,0,0,0,1128,1130,5,3,0,0,1129,1131,5,166,0,0,1130,1129,1,0,
        0,0,1130,1131,1,0,0,0,1131,1132,1,0,0,0,1132,1134,3,98,49,0,1133,
        1135,5,166,0,0,1134,1133,1,0,0,0,1134,1135,1,0,0,0,1135,1136,1,0,
        0,0,1136,1137,5,4,0,0,1137,1161,1,0,0,0,1138,1140,5,145,0,0,1139,
        1141,5,166,0,0,1140,1139,1,0,0,0,1140,1141,1,0,0,0,1141,1142,1,0,
        0,0,1142,1144,5,2,0,0,1143,1145,5,166,0,0,1144,1143,1,0,0,0,1144,
        1145,1,0,0,0,1145,1146,1,0,0,0,1146,1148,3,324,162,0,1147,1149,5,
        166,0,0,1148,1147,1,0,0,0,1148,1149,1,0,0,0,1149,1150,1,0,0,0,1150,
        1152,5,3,0,0,1151,1153,5,166,0,0,1152,1151,1,0,0,0,1152,1153,1,0,
        0,0,1153,1154,1,0,0,0,1154,1156,3,324,162,0,1155,1157,5,166,0,0,
        1156,1155,1,0,0,0,1156,1157,1,0,0,0,1157,1158,1,0,0,0,1158,1159,
        5,4,0,0,1159,1161,1,0,0,0,1160,1086,1,0,0,0,1160,1088,1,0,0,0,1160,
        1102,1,0,0,0,1160,1116,1,0,0,0,1160,1138,1,0,0,0,1161,1166,1,0,0,
        0,1162,1163,10,5,0,0,1163,1165,3,100,50,0,1164,1162,1,0,0,0,1165,
        1168,1,0,0,0,1166,1164,1,0,0,0,1166,1167,1,0,0,0,1167,99,1,0,0,0,
        1168,1166,1,0,0,0,1169,1173,3,102,51,0,1170,1172,3,102,51,0,1171,
        1170,1,0,0,0,1172,1175,1,0,0,0,1173,1171,1,0,0,0,1173,1174,1,0,0,
        0,1174,101,1,0,0,0,1175,1173,1,0,0,0,1176,1178,5,7,0,0,1177,1179,
        3,324,162,0,1178,1177,1,0,0,0,1178,1179,1,0,0,0,1179,1180,1,0,0,
        0,1180,1181,5,8,0,0,1181,103,1,0,0,0,1182,1185,3,106,53,0,1183,1185,
        3,108,54,0,1184,1182,1,0,0,0,1184,1183,1,0,0,0,1185,105,1,0,0,0,
        1186,1187,5,81,0,0,1187,107,1,0,0,0,1188,1189,5,117,0,0,1189,109,
        1,0,0,0,1190,1191,5,54,0,0,1191,1192,5,166,0,0,1192,1205,5,134,0,
        0,1193,1194,5,54,0,0,1194,1195,5,166,0,0,1195,1196,5,134,0,0,1196,
        1197,5,166,0,0,1197,1198,5,120,0,0,1198,1199,5,166,0,0,1199,1205,
        5,112,0,0,1200,1205,5,61,0,0,1201,1205,5,62,0,0,1202,1205,5,124,
        0,0,1203,1205,5,125,0,0,1204,1190,1,0,0,0,1204,1193,1,0,0,0,1204,
        1200,1,0,0,0,1204,1201,1,0,0,0,1204,1202,1,0,0,0,1204,1203,1,0,0,
        0,1205,111,1,0,0,0,1206,1209,3,114,57,0,1207,1209,3,116,58,0,1208,
        1206,1,0,0,0,1208,1207,1,0,0,0,1209,113,1,0,0,0,1210,1211,5,100,
        0,0,1211,1212,5,166,0,0,1212,1213,5,83,0,0,1213,1216,5,166,0,0,1214,
        1217,5,152,0,0,1215,1217,3,314,157,0,1216,1214,1,0,0,0,1216,1215,
        1,0,0,0,1217,115,1,0,0,0,1218,1219,5,95,0,0,1219,1220,5,166,0,0,
        1220,1221,3,314,157,0,1221,117,1,0,0,0,1222,1224,3,120,60,0,1223,
        1225,5,166,0,0,1224,1223,1,0,0,0,1224,1225,1,0,0,0,1225,1227,1,0,
        0,0,1226,1222,1,0,0,0,1226,1227,1,0,0,0,1227,1228,1,0,0,0,1228,1229,
        3,124,62,0,1229,119,1,0,0,0,1230,1231,5,118,0,0,1231,1232,5,166,
        0,0,1232,1233,5,87,0,0,1233,1234,5,166,0,0,1234,1236,3,328,164,0,
        1235,1237,5,166,0,0,1236,1235,1,0,0,0,1236,1237,1,0,0,0,1237,1238,
        1,0,0,0,1238,1240,5,2,0,0,1239,1241,5,166,0,0,1240,1239,1,0,0,0,
        1240,1241,1,0,0,0,1241,1242,1,0,0,0,1242,1244,3,122,61,0,1243,1245,
        5,166,0,0,1244,1243,1,0,0,0,1244,1245,1,0,0,0,1245,1246,1,0,0,0,
        1246,1247,5,4,0,0,1247,121,1,0,0,0,1248,1259,3,144,72,0,1249,1251,
        5,166,0,0,1250,1249,1,0,0,0,1250,1251,1,0,0,0,1251,1252,1,0,0,0,
        1252,1254,5,3,0,0,1253,1255,5,166,0,0,1254,1253,1,0,0,0,1254,1255,
        1,0,0,0,1255,1256,1,0,0,0,1256,1258,3,144,72,0,1257,1250,1,0,0,0,
        1258,1261,1,0,0,0,1259,1257,1,0,0,0,1259,1260,1,0,0,0,1260,123,1,
        0,0,0,1261,1259,1,0,0,0,1262,1269,3,128,64,0,1263,1265,5,166,0,0,
        1264,1263,1,0,0,0,1264,1265,1,0,0,0,1265,1266,1,0,0,0,1266,1268,
        3,126,63,0,1267,1264,1,0,0,0,1268,1271,1,0,0,0,1269,1267,1,0,0,0,
        1269,1270,1,0,0,0,1270,1284,1,0,0,0,1271,1269,1,0,0,0,1272,1274,
        3,172,86,0,1273,1275,5,166,0,0,1274,1273,1,0,0,0,1274,1275,1,0,0,
        0,1275,1277,1,0,0,0,1276,1272,1,0,0,0,1277,1278,1,0,0,0,1278,1276,
        1,0,0,0,1278,1279,1,0,0,0,1279,1280,1,0,0,0,1280,1281,3,128,64,0,
        1281,1282,6,62,-1,0,1282,1284,1,0,0,0,1283,1262,1,0,0,0,1283,1276,
        1,0,0,0,1284,125,1,0,0,0,1285,1286,5,137,0,0,1286,1287,5,166,0,0,
        1287,1289,5,47,0,0,1288,1290,5,166,0,0,1289,1288,1,0,0,0,1289,1290,
        1,0,0,0,1290,1291,1,0,0,0,1291,1298,3,128,64,0,1292,1294,5,137,0,
        0,1293,1295,5,166,0,0,1294,1293,1,0,0,0,1294,1295,1,0,0,0,1295,1296,
        1,0,0,0,1296,1298,3,128,64,0,1297,1285,1,0,0,0,1297,1292,1,0,0,0,
        1298,127,1,0,0,0,1299,1302,3,130,65,0,1300,1302,3,132,66,0,1301,
        1299,1,0,0,0,1301,1300,1,0,0,0,1302,129,1,0,0,0,1303,1305,3,138,
        69,0,1304,1306,5,166,0,0,1305,1304,1,0,0,0,1305,1306,1,0,0,0,1306,
        1308,1,0,0,0,1307,1303,1,0,0,0,1308,1311,1,0,0,0,1309,1307,1,0,0,
        0,1309,1310,1,0,0,0,1310,1312,1,0,0,0,1311,1309,1,0,0,0,1312,1349,
        3,172,86,0,1313,1315,3,138,69,0,1314,1316,5,166,0,0,1315,1314,1,
        0,0,0,1315,1316,1,0,0,0,1316,1318,1,0,0,0,1317,1313,1,0,0,0,1318,
        1321,1,0,0,0,1319,1317,1,0,0,0,1319,1320,1,0,0,0,1320,1322,1,0,0,
        0,1321,1319,1,0,0,0,1322,1329,3,136,68,0,1323,1325,5,166,0,0,1324,
        1323,1,0,0,0,1324,1325,1,0,0,0,1325,1326,1,0,0,0,1326,1328,3,136,
        68,0,1327,1324,1,0,0,0,1328,1331,1,0,0,0,1329,1327,1,0,0,0,1329,
        1330,1,0,0,0,1330,1336,1,0,0,0,1331,1329,1,0,0,0,1332,1334,5,166,
        0,0,1333,1332,1,0,0,0,1333,1334,1,0,0,0,1334,1335,1,0,0,0,1335,1337,
        3,172,86,0,1336,1333,1,0,0,0,1336,1337,1,0,0,0,1337,1349,1,0,0,0,
        1338,1340,3,138,69,0,1339,1341,5,166,0,0,1340,1339,1,0,0,0,1340,
        1341,1,0,0,0,1341,1343,1,0,0,0,1342,1338,1,0,0,0,1343,1344,1,0,0,
        0,1344,1342,1,0,0,0,1344,1345,1,0,0,0,1345,1346,1,0,0,0,1346,1347,
        6,65,-1,0,1347,1349,1,0,0,0,1348,1309,1,0,0,0,1348,1319,1,0,0,0,
        1348,1342,1,0,0,0,1349,131,1,0,0,0,1350,1352,3,134,67,0,1351,1353,
        5,166,0,0,1352,1351,1,0,0,0,1352,1353,1,0,0,0,1353,1355,1,0,0,0,
        1354,1350,1,0,0,0,1355,1356,1,0,0,0,1356,1354,1,0,0,0,1356,1357,
        1,0,0,0,1357,1358,1,0,0,0,1358,1359,3,130,65,0,1359,133,1,0,0,0,
        1360,1362,3,138,69,0,1361,1363,5,166,0,0,1362,1361,1,0,0,0,1362,
        1363,1,0,0,0,1363,1365,1,0,0,0,1364,1360,1,0,0,0,1365,1368,1,0,0,
        0,1366,1364,1,0,0,0,1366,1367,1,0,0,0,1367,1375,1,0,0,0,1368,1366,
        1,0,0,0,1369,1371,3,136,68,0,1370,1372,5,166,0,0,1371,1370,1,0,0,
        0,1371,1372,1,0,0,0,1372,1374,1,0,0,0,1373,1369,1,0,0,0,1374,1377,
        1,0,0,0,1375,1373,1,0,0,0,1375,1376,1,0,0,0,1376,1378,1,0,0,0,1377,
        1375,1,0,0,0,1378,1379,3,170,85,0,1379,135,1,0,0,0,1380,1385,3,158,
        79,0,1381,1385,3,160,80,0,1382,1385,3,164,82,0,1383,1385,3,168,84,
        0,1384,1380,1,0,0,0,1384,1381,1,0,0,0,1384,1382,1,0,0,0,1384,1383,
        1,0,0,0,1385,137,1,0,0,0,1386,1391,3,150,75,0,1387,1391,3,156,78,
        0,1388,1391,3,142,71,0,1389,1391,3,140,70,0,1390,1386,1,0,0,0,1390,
        1387,1,0,0,0,1390,1388,1,0,0,0,1390,1389,1,0,0,0,1391,139,1,0,0,
        0,1392,1410,5,100,0,0,1393,1394,5,166,0,0,1394,1395,5,142,0,0,1395,
        1396,5,166,0,0,1396,1398,5,89,0,0,1397,1399,5,166,0,0,1398,1397,
        1,0,0,0,1398,1399,1,0,0,0,1399,1400,1,0,0,0,1400,1402,5,2,0,0,1401,
        1403,5,166,0,0,1402,1401,1,0,0,0,1402,1403,1,0,0,0,1403,1404,1,0,
        0,0,1404,1406,3,88,44,0,1405,1407,5,166,0,0,1406,1405,1,0,0,0,1406,
        1407,1,0,0,0,1407,1408,1,0,0,0,1408,1409,5,4,0,0,1409,1411,1,0,0,
        0,1410,1393,1,0,0,0,1410,1411,1,0,0,0,1411,1412,1,0,0,0,1412,1413,
        5,166,0,0,1413,1414,5,85,0,0,1414,1415,5,166,0,0,1415,1420,3,10,
        5,0,1416,1418,5,166,0,0,1417,1416,1,0,0,0,1417,1418,1,0,0,0,1418,
        1419,1,0,0,0,1419,1421,3,42,21,0,1420,1417,1,0,0,0,1420,1421,1,0,
        0,0,1421,1426,1,0,0,0,1422,1424,5,166,0,0,1423,1422,1,0,0,0,1423,
        1424,1,0,0,0,1424,1425,1,0,0,0,1425,1427,3,188,94,0,1426,1423,1,
        0,0,0,1426,1427,1,0,0,0,1427,141,1,0,0,0,1428,1430,3,120,60,0,1429,
        1431,5,166,0,0,1430,1429,1,0,0,0,1430,1431,1,0,0,0,1431,1433,1,0,
        0,0,1432,1428,1,0,0,0,1432,1433,1,0,0,0,1433,1434,1,0,0,0,1434,1435,
        5,56,0,0,1435,1436,5,166,0,0,1436,1441,3,292,146,0,1437,1439,5,166,
        0,0,1438,1437,1,0,0,0,1438,1439,1,0,0,0,1439,1440,1,0,0,0,1440,1442,
        3,188,94,0,1441,1438,1,0,0,0,1441,1442,1,0,0,0,1442,143,1,0,0,0,
        1443,1457,3,328,164,0,1444,1446,5,166,0,0,1445,1444,1,0,0,0,1445,
        1446,1,0,0,0,1446,1447,1,0,0,0,1447,1449,5,9,0,0,1448,1450,5,166,
        0,0,1449,1448,1,0,0,0,1449,1450,1,0,0,0,1450,1451,1,0,0,0,1451,1453,
        3,146,73,0,1452,1454,5,166,0,0,1453,1452,1,0,0,0,1453,1454,1,0,0,
        0,1454,1455,1,0,0,0,1455,1456,5,10,0,0,1456,1458,1,0,0,0,1457,1445,
        1,0,0,0,1457,1458,1,0,0,0,1458,145,1,0,0,0,1459,1470,3,148,74,0,
        1460,1462,5,166,0,0,1461,1460,1,0,0,0,1461,1462,1,0,0,0,1462,1463,
        1,0,0,0,1463,1465,5,3,0,0,1464,1466,5,166,0,0,1465,1464,1,0,0,0,
        1465,1466,1,0,0,0,1466,1467,1,0,0,0,1467,1469,3,148,74,0,1468,1461,
        1,0,0,0,1469,1472,1,0,0,0,1470,1468,1,0,0,0,1470,1471,1,0,0,0,1471,
        147,1,0,0,0,1472,1470,1,0,0,0,1473,1476,3,322,161,0,1474,1475,5,
        166,0,0,1475,1477,3,80,40,0,1476,1474,1,0,0,0,1476,1477,1,0,0,0,
        1477,1480,1,0,0,0,1478,1479,5,166,0,0,1479,1481,3,188,94,0,1480,
        1478,1,0,0,0,1480,1481,1,0,0,0,1481,149,1,0,0,0,1482,1483,5,113,
        0,0,1483,1485,5,166,0,0,1484,1482,1,0,0,0,1484,1485,1,0,0,0,1485,
        1486,1,0,0,0,1486,1488,5,102,0,0,1487,1489,5,166,0,0,1488,1487,1,
        0,0,0,1488,1489,1,0,0,0,1489,1490,1,0,0,0,1490,1493,3,190,95,0,1491,
        1492,5,166,0,0,1492,1494,3,188,94,0,1493,1491,1,0,0,0,1493,1494,
        1,0,0,0,1494,1497,1,0,0,0,1495,1496,5,166,0,0,1496,1498,3,152,76,
        0,1497,1495,1,0,0,0,1497,1498,1,0,0,0,1498,151,1,0,0,0,1499,1500,
        5,90,0,0,1500,1501,5,166,0,0,1501,1502,3,154,77,0,1502,153,1,0,0,
        0,1503,1504,6,77,-1,0,1504,1506,5,2,0,0,1505,1507,5,166,0,0,1506,
        1505,1,0,0,0,1506,1507,1,0,0,0,1507,1508,1,0,0,0,1508,1510,3,154,
        77,0,1509,1511,5,166,0,0,1510,1509,1,0,0,0,1510,1511,1,0,0,0,1511,
        1512,1,0,0,0,1512,1513,5,4,0,0,1513,1516,1,0,0,0,1514,1516,3,328,
        164,0,1515,1503,1,0,0,0,1515,1514,1,0,0,0,1516,1533,1,0,0,0,1517,
        1518,10,4,0,0,1518,1519,5,166,0,0,1519,1520,5,97,0,0,1520,1521,5,
        166,0,0,1521,1532,3,154,77,5,1522,1527,10,3,0,0,1523,1524,5,166,
        0,0,1524,1525,5,106,0,0,1525,1526,5,166,0,0,1526,1528,3,328,164,
        0,1527,1523,1,0,0,0,1528,1529,1,0,0,0,1529,1527,1,0,0,0,1529,1530,
        1,0,0,0,1530,1532,1,0,0,0,1531,1517,1,0,0,0,1531,1522,1,0,0,0,1532,
        1535,1,0,0,0,1533,1531,1,0,0,0,1533,1534,1,0,0,0,1534,155,1,0,0,
        0,1535,1533,1,0,0,0,1536,1538,5,138,0,0,1537,1539,5,166,0,0,1538,
        1537,1,0,0,0,1538,1539,1,0,0,0,1539,1540,1,0,0,0,1540,1541,3,230,
        115,0,1541,1542,5,166,0,0,1542,1543,5,50,0,0,1543,1544,5,166,0,0,
        1544,1545,3,314,157,0,1545,157,1,0,0,0,1546,1548,5,66,0,0,1547,1549,
        5,166,0,0,1548,1547,1,0,0,0,1548,1549,1,0,0,0,1549,1550,1,0,0,0,
        1550,1551,3,190,95,0,1551,159,1,0,0,0,1552,1554,5,104,0,0,1553,1555,
        5,166,0,0,1554,1553,1,0,0,0,1554,1555,1,0,0,0,1555,1556,1,0,0,0,
        1556,1561,3,190,95,0,1557,1558,5,166,0,0,1558,1560,3,162,81,0,1559,
        1557,1,0,0,0,1560,1563,1,0,0,0,1561,1559,1,0,0,0,1561,1562,1,0,0,
        0,1562,161,1,0,0,0,1563,1561,1,0,0,0,1564,1565,5,111,0,0,1565,1566,
        5,166,0,0,1566,1567,5,102,0,0,1567,1568,5,166,0,0,1568,1575,3,164,
        82,0,1569,1570,5,111,0,0,1570,1571,5,166,0,0,1571,1572,5,66,0,0,
        1572,1573,5,166,0,0,1573,1575,3,164,82,0,1574,1564,1,0,0,0,1574,
        1569,1,0,0,0,1575,163,1,0,0,0,1576,1578,5,127,0,0,1577,1579,5,166,
        0,0,1578,1577,1,0,0,0,1578,1579,1,0,0,0,1579,1580,1,0,0,0,1580,1591,
        3,166,83,0,1581,1583,5,166,0,0,1582,1581,1,0,0,0,1582,1583,1,0,0,
        0,1583,1584,1,0,0,0,1584,1586,5,3,0,0,1585,1587,5,166,0,0,1586,1585,
        1,0,0,0,1586,1587,1,0,0,0,1587,1588,1,0,0,0,1588,1590,3,166,83,0,
        1589,1582,1,0,0,0,1590,1593,1,0,0,0,1591,1589,1,0,0,0,1591,1592,
        1,0,0,0,1592,165,1,0,0,0,1593,1591,1,0,0,0,1594,1596,3,320,160,0,
        1595,1597,5,166,0,0,1596,1595,1,0,0,0,1596,1597,1,0,0,0,1597,1598,
        1,0,0,0,1598,1600,5,6,0,0,1599,1601,5,166,0,0,1600,1599,1,0,0,0,
        1600,1601,1,0,0,0,1601,1602,1,0,0,0,1602,1603,3,230,115,0,1603,167,
        1,0,0,0,1604,1605,5,74,0,0,1605,1607,5,166,0,0,1606,1604,1,0,0,0,
        1606,1607,1,0,0,0,1607,1608,1,0,0,0,1608,1610,5,71,0,0,1609,1611,
        5,166,0,0,1610,1609,1,0,0,0,1610,1611,1,0,0,0,1611,1612,1,0,0,0,
        1612,1623,3,230,115,0,1613,1615,5,166,0,0,1614,1613,1,0,0,0,1614,
        1615,1,0,0,0,1615,1616,1,0,0,0,1616,1618,5,3,0,0,1617,1619,5,166,
        0,0,1618,1617,1,0,0,0,1618,1619,1,0,0,0,1619,1620,1,0,0,0,1620,1622,
        3,230,115,0,1621,1614,1,0,0,0,1622,1625,1,0,0,0,1623,1621,1,0,0,
        0,1623,1624,1,0,0,0,1624,169,1,0,0,0,1625,1623,1,0,0,0,1626,1627,
        5,142,0,0,1627,1632,3,174,87,0,1628,1630,5,166,0,0,1629,1628,1,0,
        0,0,1629,1630,1,0,0,0,1630,1631,1,0,0,0,1631,1633,3,188,94,0,1632,
        1629,1,0,0,0,1632,1633,1,0,0,0,1633,171,1,0,0,0,1634,1635,5,123,
        0,0,1635,1636,3,174,87,0,1636,173,1,0,0,0,1637,1639,5,166,0,0,1638,
        1637,1,0,0,0,1638,1639,1,0,0,0,1639,1640,1,0,0,0,1640,1642,5,75,
        0,0,1641,1638,1,0,0,0,1641,1642,1,0,0,0,1642,1643,1,0,0,0,1643,1644,
        5,166,0,0,1644,1647,3,176,88,0,1645,1646,5,166,0,0,1646,1648,3,180,
        90,0,1647,1645,1,0,0,0,1647,1648,1,0,0,0,1648,1651,1,0,0,0,1649,
        1650,5,166,0,0,1650,1652,3,182,91,0,1651,1649,1,0,0,0,1651,1652,
        1,0,0,0,1652,1655,1,0,0,0,1653,1654,5,166,0,0,1654,1656,3,184,92,
        0,1655,1653,1,0,0,0,1655,1656,1,0,0,0,1656,175,1,0,0,0,1657,1668,
        5,146,0,0,1658,1660,5,166,0,0,1659,1658,1,0,0,0,1659,1660,1,0,0,
        0,1660,1661,1,0,0,0,1661,1663,5,3,0,0,1662,1664,5,166,0,0,1663,1662,
        1,0,0,0,1663,1664,1,0,0,0,1664,1665,1,0,0,0,1665,1667,3,178,89,0,
        1666,1659,1,0,0,0,1667,1670,1,0,0,0,1668,1666,1,0,0,0,1668,1669,
        1,0,0,0,1669,1686,1,0,0,0,1670,1668,1,0,0,0,1671,1682,3,178,89,0,
        1672,1674,5,166,0,0,1673,1672,1,0,0,0,1673,1674,1,0,0,0,1674,1675,
        1,0,0,0,1675,1677,5,3,0,0,1676,1678,5,166,0,0,1677,1676,1,0,0,0,
        1677,1678,1,0,0,0,1678,1679,1,0,0,0,1679,1681,3,178,89,0,1680,1673,
        1,0,0,0,1681,1684,1,0,0,0,1682,1680,1,0,0,0,1682,1683,1,0,0,0,1683,
        1686,1,0,0,0,1684,1682,1,0,0,0,1685,1657,1,0,0,0,1685,1671,1,0,0,
        0,1686,177,1,0,0,0,1687,1688,3,230,115,0,1688,1689,5,166,0,0,1689,
        1690,5,50,0,0,1690,1691,5,166,0,0,1691,1692,3,314,157,0,1692,1695,
        1,0,0,0,1693,1695,3,230,115,0,1694,1687,1,0,0,0,1694,1693,1,0,0,
        0,1695,179,1,0,0,0,1696,1697,5,115,0,0,1697,1698,5,166,0,0,1698,
        1699,5,55,0,0,1699,1700,5,166,0,0,1700,1708,3,186,93,0,1701,1703,
        5,3,0,0,1702,1704,5,166,0,0,1703,1702,1,0,0,0,1703,1704,1,0,0,0,
        1704,1705,1,0,0,0,1705,1707,3,186,93,0,1706,1701,1,0,0,0,1707,1710,
        1,0,0,0,1708,1706,1,0,0,0,1708,1709,1,0,0,0,1709,181,1,0,0,0,1710,
        1708,1,0,0,0,1711,1712,5,147,0,0,1712,1713,5,166,0,0,1713,1714,3,
        230,115,0,1714,183,1,0,0,0,1715,1716,5,99,0,0,1716,1717,5,166,0,
        0,1717,1718,3,230,115,0,1718,185,1,0,0,0,1719,1724,3,230,115,0,1720,
        1722,5,166,0,0,1721,1720,1,0,0,0,1721,1722,1,0,0,0,1722,1723,1,0,
        0,0,1723,1725,7,1,0,0,1724,1721,1,0,0,0,1724,1725,1,0,0,0,1725,187,
        1,0,0,0,1726,1727,5,141,0,0,1727,1728,5,166,0,0,1728,1729,3,230,
        115,0,1729,189,1,0,0,0,1730,1741,3,192,96,0,1731,1733,5,166,0,0,
        1732,1731,1,0,0,0,1732,1733,1,0,0,0,1733,1734,1,0,0,0,1734,1736,
        5,3,0,0,1735,1737,5,166,0,0,1736,1735,1,0,0,0,1736,1737,1,0,0,0,
        1737,1738,1,0,0,0,1738,1740,3,192,96,0,1739,1732,1,0,0,0,1740,1743,
        1,0,0,0,1741,1739,1,0,0,0,1741,1742,1,0,0,0,1742,191,1,0,0,0,1743,
        1741,1,0,0,0,1744,1746,3,314,157,0,1745,1747,5,166,0,0,1746,1745,
        1,0,0,0,1746,1747,1,0,0,0,1747,1748,1,0,0,0,1748,1750,5,6,0,0,1749,
        1751,5,166,0,0,1750,1749,1,0,0,0,1750,1751,1,0,0,0,1751,1752,1,0,
        0,0,1752,1753,3,194,97,0,1753,1756,1,0,0,0,1754,1756,3,194,97,0,
        1755,1744,1,0,0,0,1755,1754,1,0,0,0,1756,193,1,0,0,0,1757,1758,3,
        196,98,0,1758,195,1,0,0,0,1759,1766,3,198,99,0,1760,1762,5,166,0,
        0,1761,1760,1,0,0,0,1761,1762,1,0,0,0,1762,1763,1,0,0,0,1763,1765,
        3,200,100,0,1764,1761,1,0,0,0,1765,1768,1,0,0,0,1766,1764,1,0,0,
        0,1766,1767,1,0,0,0,1767,1774,1,0,0,0,1768,1766,1,0,0,0,1769,1770,
        5,2,0,0,1770,1771,3,196,98,0,1771,1772,5,4,0,0,1772,1774,1,0,0,0,
        1773,1759,1,0,0,0,1773,1769,1,0,0,0,1774,197,1,0,0,0,1775,1777,5,
        2,0,0,1776,1778,5,166,0,0,1777,1776,1,0,0,0,1777,1778,1,0,0,0,1778,
        1783,1,0,0,0,1779,1781,3,314,157,0,1780,1782,5,166,0,0,1781,1780,
        1,0,0,0,1781,1782,1,0,0,0,1782,1784,1,0,0,0,1783,1779,1,0,0,0,1783,
        1784,1,0,0,0,1784,1789,1,0,0,0,1785,1787,3,210,105,0,1786,1788,5,
        166,0,0,1787,1786,1,0,0,0,1787,1788,1,0,0,0,1788,1790,1,0,0,0,1789,
        1785,1,0,0,0,1789,1790,1,0,0,0,1790,1795,1,0,0,0,1791,1793,3,206,
        103,0,1792,1794,5,166,0,0,1793,1792,1,0,0,0,1793,1794,1,0,0,0,1794,
        1796,1,0,0,0,1795,1791,1,0,0,0,1795,1796,1,0,0,0,1796,1797,1,0,0,
        0,1797,1798,5,4,0,0,1798,199,1,0,0,0,1799,1801,3,202,101,0,1800,
        1802,5,166,0,0,1801,1800,1,0,0,0,1801,1802,1,0,0,0,1802,1803,1,0,
        0,0,1803,1804,3,198,99,0,1804,201,1,0,0,0,1805,1807,3,334,167,0,
        1806,1808,5,166,0,0,1807,1806,1,0,0,0,1807,1808,1,0,0,0,1808,1809,
        1,0,0,0,1809,1811,3,338,169,0,1810,1812,5,166,0,0,1811,1810,1,0,
        0,0,1811,1812,1,0,0,0,1812,1814,1,0,0,0,1813,1815,3,204,102,0,1814,
        1813,1,0,0,0,1814,1815,1,0,0,0,1815,1817,1,0,0,0,1816,1818,5,166,
        0,0,1817,1816,1,0,0,0,1817,1818,1,0,0,0,1818,1819,1,0,0,0,1819,1820,
        3,338,169,0,1820,1850,1,0,0,0,1821,1823,3,338,169,0,1822,1824,5,
        166,0,0,1823,1822,1,0,0,0,1823,1824,1,0,0,0,1824,1826,1,0,0,0,1825,
        1827,3,204,102,0,1826,1825,1,0,0,0,1826,1827,1,0,0,0,1827,1829,1,
        0,0,0,1828,1830,5,166,0,0,1829,1828,1,0,0,0,1829,1830,1,0,0,0,1830,
        1831,1,0,0,0,1831,1833,3,338,169,0,1832,1834,5,166,0,0,1833,1832,
        1,0,0,0,1833,1834,1,0,0,0,1834,1835,1,0,0,0,1835,1836,3,336,168,
        0,1836,1850,1,0,0,0,1837,1839,3,338,169,0,1838,1840,5,166,0,0,1839,
        1838,1,0,0,0,1839,1840,1,0,0,0,1840,1842,1,0,0,0,1841,1843,3,204,
        102,0,1842,1841,1,0,0,0,1842,1843,1,0,0,0,1843,1845,1,0,0,0,1844,
        1846,5,166,0,0,1845,1844,1,0,0,0,1845,1846,1,0,0,0,1846,1847,1,0,
        0,0,1847,1848,3,338,169,0,1848,1850,1,0,0,0,1849,1805,1,0,0,0,1849,
        1821,1,0,0,0,1849,1837,1,0,0,0,1850,203,1,0,0,0,1851,1853,5,7,0,
        0,1852,1854,5,166,0,0,1853,1852,1,0,0,0,1853,1854,1,0,0,0,1854,1859,
        1,0,0,0,1855,1857,3,314,157,0,1856,1858,5,166,0,0,1857,1856,1,0,
        0,0,1857,1858,1,0,0,0,1858,1860,1,0,0,0,1859,1855,1,0,0,0,1859,1860,
        1,0,0,0,1860,1865,1,0,0,0,1861,1863,3,208,104,0,1862,1864,5,166,
        0,0,1863,1862,1,0,0,0,1863,1864,1,0,0,0,1864,1866,1,0,0,0,1865,1861,
        1,0,0,0,1865,1866,1,0,0,0,1866,1871,1,0,0,0,1867,1869,3,214,107,
        0,1868,1870,5,166,0,0,1869,1868,1,0,0,0,1869,1870,1,0,0,0,1870,1872,
        1,0,0,0,1871,1867,1,0,0,0,1871,1872,1,0,0,0,1872,1877,1,0,0,0,1873,
        1875,3,206,103,0,1874,1876,5,166,0,0,1875,1874,1,0,0,0,1875,1876,
        1,0,0,0,1876,1878,1,0,0,0,1877,1873,1,0,0,0,1877,1878,1,0,0,0,1878,
        1879,1,0,0,0,1879,1880,5,8,0,0,1880,205,1,0,0,0,1881,1883,5,9,0,
        0,1882,1884,5,166,0,0,1883,1882,1,0,0,0,1883,1884,1,0,0,0,1884,1918,
        1,0,0,0,1885,1887,3,322,161,0,1886,1888,5,166,0,0,1887,1886,1,0,
        0,0,1887,1888,1,0,0,0,1888,1889,1,0,0,0,1889,1891,5,151,0,0,1890,
        1892,5,166,0,0,1891,1890,1,0,0,0,1891,1892,1,0,0,0,1892,1893,1,0,
        0,0,1893,1895,3,230,115,0,1894,1896,5,166,0,0,1895,1894,1,0,0,0,
        1895,1896,1,0,0,0,1896,1915,1,0,0,0,1897,1899,5,3,0,0,1898,1900,
        5,166,0,0,1899,1898,1,0,0,0,1899,1900,1,0,0,0,1900,1901,1,0,0,0,
        1901,1903,3,322,161,0,1902,1904,5,166,0,0,1903,1902,1,0,0,0,1903,
        1904,1,0,0,0,1904,1905,1,0,0,0,1905,1907,5,151,0,0,1906,1908,5,166,
        0,0,1907,1906,1,0,0,0,1907,1908,1,0,0,0,1908,1909,1,0,0,0,1909,1911,
        3,230,115,0,1910,1912,5,166,0,0,1911,1910,1,0,0,0,1911,1912,1,0,
        0,0,1912,1914,1,0,0,0,1913,1897,1,0,0,0,1914,1917,1,0,0,0,1915,1913,
        1,0,0,0,1915,1916,1,0,0,0,1916,1919,1,0,0,0,1917,1915,1,0,0,0,1918,
        1885,1,0,0,0,1918,1919,1,0,0,0,1919,1920,1,0,0,0,1920,1921,5,10,
        0,0,1921,207,1,0,0,0,1922,1924,5,151,0,0,1923,1925,5,166,0,0,1924,
        1923,1,0,0,0,1924,1925,1,0,0,0,1925,1926,1,0,0,0,1926,1940,3,228,
        114,0,1927,1929,5,166,0,0,1928,1927,1,0,0,0,1928,1929,1,0,0,0,1929,
        1930,1,0,0,0,1930,1932,5,11,0,0,1931,1933,5,151,0,0,1932,1931,1,
        0,0,0,1932,1933,1,0,0,0,1933,1935,1,0,0,0,1934,1936,5,166,0,0,1935,
        1934,1,0,0,0,1935,1936,1,0,0,0,1936,1937,1,0,0,0,1937,1939,3,228,
        114,0,1938,1928,1,0,0,0,1939,1942,1,0,0,0,1940,1938,1,0,0,0,1940,
        1941,1,0,0,0,1941,209,1,0,0,0,1942,1940,1,0,0,0,1943,1950,3,212,
        106,0,1944,1946,5,166,0,0,1945,1944,1,0,0,0,1945,1946,1,0,0,0,1946,
        1947,1,0,0,0,1947,1949,3,212,106,0,1948,1945,1,0,0,0,1949,1952,1,
        0,0,0,1950,1948,1,0,0,0,1950,1951,1,0,0,0,1951,211,1,0,0,0,1952,
        1950,1,0,0,0,1953,1955,5,151,0,0,1954,1956,5,166,0,0,1955,1954,1,
        0,0,0,1955,1956,1,0,0,0,1956,1957,1,0,0,0,1957,1958,3,226,113,0,
        1958,213,1,0,0,0,1959,1961,5,146,0,0,1960,1962,5,166,0,0,1961,1960,
        1,0,0,0,1961,1962,1,0,0,0,1962,1967,1,0,0,0,1963,1968,5,128,0,0,
        1964,1965,5,47,0,0,1965,1966,5,166,0,0,1966,1968,5,128,0,0,1967,
        1963,1,0,0,0,1967,1964,1,0,0,0,1967,1968,1,0,0,0,1968,1970,1,0,0,
        0,1969,1971,5,166,0,0,1970,1969,1,0,0,0,1970,1971,1,0,0,0,1971,1986,
        1,0,0,0,1972,1974,3,222,111,0,1973,1972,1,0,0,0,1973,1974,1,0,0,
        0,1974,1976,1,0,0,0,1975,1977,5,166,0,0,1976,1975,1,0,0,0,1976,1977,
        1,0,0,0,1977,1978,1,0,0,0,1978,1980,5,12,0,0,1979,1981,5,166,0,0,
        1980,1979,1,0,0,0,1980,1981,1,0,0,0,1981,1983,1,0,0,0,1982,1984,
        3,224,112,0,1983,1982,1,0,0,0,1983,1984,1,0,0,0,1984,1987,1,0,0,
        0,1985,1987,3,324,162,0,1986,1973,1,0,0,0,1986,1985,1,0,0,0,1986,
        1987,1,0,0,0,1987,1992,1,0,0,0,1988,1990,5,166,0,0,1989,1988,1,0,
        0,0,1989,1990,1,0,0,0,1990,1991,1,0,0,0,1991,1993,3,216,108,0,1992,
        1989,1,0,0,0,1992,1993,1,0,0,0,1993,215,1,0,0,0,1994,1996,5,2,0,
        0,1995,1997,5,166,0,0,1996,1995,1,0,0,0,1996,1997,1,0,0,0,1997,1998,
        1,0,0,0,1998,2000,3,314,157,0,1999,2001,5,166,0,0,2000,1999,1,0,
        0,0,2000,2001,1,0,0,0,2001,2002,1,0,0,0,2002,2004,5,3,0,0,2003,2005,
        5,166,0,0,2004,2003,1,0,0,0,2004,2005,1,0,0,0,2005,2006,1,0,0,0,
        2006,2018,3,314,157,0,2007,2009,5,166,0,0,2008,2007,1,0,0,0,2008,
        2009,1,0,0,0,2009,2010,1,0,0,0,2010,2012,5,11,0,0,2011,2013,5,166,
        0,0,2012,2011,1,0,0,0,2012,2013,1,0,0,0,2013,2014,1,0,0,0,2014,2016,
        3,188,94,0,2015,2017,5,166,0,0,2016,2015,1,0,0,0,2016,2017,1,0,0,
        0,2017,2019,1,0,0,0,2018,2008,1,0,0,0,2018,2019,1,0,0,0,2019,2039,
        1,0,0,0,2020,2022,5,166,0,0,2021,2020,1,0,0,0,2021,2022,1,0,0,0,
        2022,2023,1,0,0,0,2023,2025,5,11,0,0,2024,2026,5,166,0,0,2025,2024,
        1,0,0,0,2025,2026,1,0,0,0,2026,2027,1,0,0,0,2027,2029,3,220,110,
        0,2028,2030,5,166,0,0,2029,2028,1,0,0,0,2029,2030,1,0,0,0,2030,2031,
        1,0,0,0,2031,2033,5,3,0,0,2032,2034,5,166,0,0,2033,2032,1,0,0,0,
        2033,2034,1,0,0,0,2034,2035,1,0,0,0,2035,2037,3,218,109,0,2036,2038,
        5,166,0,0,2037,2036,1,0,0,0,2037,2038,1,0,0,0,2038,2040,1,0,0,0,
        2039,2021,1,0,0,0,2039,2040,1,0,0,0,2040,2041,1,0,0,0,2041,2042,
        5,4,0,0,2042,217,1,0,0,0,2043,2045,5,9,0,0,2044,2046,5,166,0,0,2045,
        2044,1,0,0,0,2045,2046,1,0,0,0,2046,2048,1,0,0,0,2047,2049,3,176,
        88,0,2048,2047,1,0,0,0,2048,2049,1,0,0,0,2049,2051,1,0,0,0,2050,
        2052,5,166,0,0,2051,2050,1,0,0,0,2051,2052,1,0,0,0,2052,2053,1,0,
        0,0,2053,2054,5,10,0,0,2054,219,1,0,0,0,2055,2057,5,9,0,0,2056,2058,
        5,166,0,0,2057,2056,1,0,0,0,2057,2058,1,0,0,0,2058,2060,1,0,0,0,
        2059,2061,3,176,88,0,2060,2059,1,0,0,0,2060,2061,1,0,0,0,2061,2063,
        1,0,0,0,2062,2064,5,166,0,0,2063,2062,1,0,0,0,2063,2064,1,0,0,0,
        2064,2065,1,0,0,0,2065,2066,5,10,0,0,2066,221,1,0,0,0,2067,2068,
        5,154,0,0,2068,223,1,0,0,0,2069,2070,5,154,0,0,2070,225,1,0,0,0,
        2071,2072,3,328,164,0,2072,227,1,0,0,0,2073,2074,3,328,164,0,2074,
        229,1,0,0,0,2075,2076,3,232,116,0,2076,231,1,0,0,0,2077,2084,3,234,
        117,0,2078,2079,5,166,0,0,2079,2080,5,114,0,0,2080,2081,5,166,0,
        0,2081,2083,3,234,117,0,2082,2078,1,0,0,0,2083,2086,1,0,0,0,2084,
        2082,1,0,0,0,2084,2085,1,0,0,0,2085,233,1,0,0,0,2086,2084,1,0,0,
        0,2087,2094,3,236,118,0,2088,2089,5,166,0,0,2089,2090,5,144,0,0,
        2090,2091,5,166,0,0,2091,2093,3,236,118,0,2092,2088,1,0,0,0,2093,
        2096,1,0,0,0,2094,2092,1,0,0,0,2094,2095,1,0,0,0,2095,235,1,0,0,
        0,2096,2094,1,0,0,0,2097,2104,3,238,119,0,2098,2099,5,166,0,0,2099,
        2100,5,49,0,0,2100,2101,5,166,0,0,2101,2103,3,238,119,0,2102,2098,
        1,0,0,0,2103,2106,1,0,0,0,2104,2102,1,0,0,0,2104,2105,1,0,0,0,2105,
        237,1,0,0,0,2106,2104,1,0,0,0,2107,2109,5,109,0,0,2108,2110,5,166,
        0,0,2109,2108,1,0,0,0,2109,2110,1,0,0,0,2110,2112,1,0,0,0,2111,2107,
        1,0,0,0,2112,2115,1,0,0,0,2113,2111,1,0,0,0,2113,2114,1,0,0,0,2114,
        2116,1,0,0,0,2115,2113,1,0,0,0,2116,2117,3,240,120,0,2117,239,1,
        0,0,0,2118,2128,3,244,122,0,2119,2121,5,166,0,0,2120,2119,1,0,0,
        0,2120,2121,1,0,0,0,2121,2122,1,0,0,0,2122,2124,3,242,121,0,2123,
        2125,5,166,0,0,2124,2123,1,0,0,0,2124,2125,1,0,0,0,2125,2126,1,0,
        0,0,2126,2127,3,244,122,0,2127,2129,1,0,0,0,2128,2120,1,0,0,0,2128,
        2129,1,0,0,0,2129,2167,1,0,0,0,2130,2132,3,244,122,0,2131,2133,5,
        166,0,0,2132,2131,1,0,0,0,2132,2133,1,0,0,0,2133,2134,1,0,0,0,2134,
        2136,5,148,0,0,2135,2137,5,166,0,0,2136,2135,1,0,0,0,2136,2137,1,
        0,0,0,2137,2138,1,0,0,0,2138,2139,3,244,122,0,2139,2140,1,0,0,0,
        2140,2141,6,120,-1,0,2141,2167,1,0,0,0,2142,2144,3,244,122,0,2143,
        2145,5,166,0,0,2144,2143,1,0,0,0,2144,2145,1,0,0,0,2145,2146,1,0,
        0,0,2146,2148,3,242,121,0,2147,2149,5,166,0,0,2148,2147,1,0,0,0,
        2148,2149,1,0,0,0,2149,2150,1,0,0,0,2150,2160,3,244,122,0,2151,2153,
        5,166,0,0,2152,2151,1,0,0,0,2152,2153,1,0,0,0,2153,2154,1,0,0,0,
        2154,2156,3,242,121,0,2155,2157,5,166,0,0,2156,2155,1,0,0,0,2156,
        2157,1,0,0,0,2157,2158,1,0,0,0,2158,2159,3,244,122,0,2159,2161,1,
        0,0,0,2160,2152,1,0,0,0,2161,2162,1,0,0,0,2162,2160,1,0,0,0,2162,
        2163,1,0,0,0,2163,2164,1,0,0,0,2164,2165,6,120,-1,0,2165,2167,1,
        0,0,0,2166,2118,1,0,0,0,2166,2130,1,0,0,0,2166,2142,1,0,0,0,2167,
        241,1,0,0,0,2168,2169,7,2,0,0,2169,243,1,0,0,0,2170,2181,3,246,123,
        0,2171,2173,5,166,0,0,2172,2171,1,0,0,0,2172,2173,1,0,0,0,2173,2174,
        1,0,0,0,2174,2176,5,11,0,0,2175,2177,5,166,0,0,2176,2175,1,0,0,0,
        2176,2177,1,0,0,0,2177,2178,1,0,0,0,2178,2180,3,246,123,0,2179,2172,
        1,0,0,0,2180,2183,1,0,0,0,2181,2179,1,0,0,0,2181,2182,1,0,0,0,2182,
        245,1,0,0,0,2183,2181,1,0,0,0,2184,2195,3,248,124,0,2185,2187,5,
        166,0,0,2186,2185,1,0,0,0,2186,2187,1,0,0,0,2187,2188,1,0,0,0,2188,
        2190,5,18,0,0,2189,2191,5,166,0,0,2190,2189,1,0,0,0,2190,2191,1,
        0,0,0,2191,2192,1,0,0,0,2192,2194,3,248,124,0,2193,2186,1,0,0,0,
        2194,2197,1,0,0,0,2195,2193,1,0,0,0,2195,2196,1,0,0,0,2196,247,1,
        0,0,0,2197,2195,1,0,0,0,2198,2210,3,252,126,0,2199,2201,5,166,0,
        0,2200,2199,1,0,0,0,2200,2201,1,0,0,0,2201,2202,1,0,0,0,2202,2204,
        3,250,125,0,2203,2205,5,166,0,0,2204,2203,1,0,0,0,2204,2205,1,0,
        0,0,2205,2206,1,0,0,0,2206,2207,3,252,126,0,2207,2209,1,0,0,0,2208,
        2200,1,0,0,0,2209,2212,1,0,0,0,2210,2208,1,0,0,0,2210,2211,1,0,0,
        0,2211,249,1,0,0,0,2212,2210,1,0,0,0,2213,2214,7,3,0,0,2214,251,
        1,0,0,0,2215,2227,3,256,128,0,2216,2218,5,166,0,0,2217,2216,1,0,
        0,0,2217,2218,1,0,0,0,2218,2219,1,0,0,0,2219,2221,3,254,127,0,2220,
        2222,5,166,0,0,2221,2220,1,0,0,0,2221,2222,1,0,0,0,2222,2223,1,0,
        0,0,2223,2224,3,256,128,0,2224,2226,1,0,0,0,2225,2217,1,0,0,0,2226,
        2229,1,0,0,0,2227,2225,1,0,0,0,2227,2228,1,0,0,0,2228,253,1,0,0,
        0,2229,2227,1,0,0,0,2230,2231,7,4,0,0,2231,255,1,0,0,0,2232,2244,
        3,260,130,0,2233,2235,5,166,0,0,2234,2233,1,0,0,0,2234,2235,1,0,
        0,0,2235,2236,1,0,0,0,2236,2238,3,258,129,0,2237,2239,5,166,0,0,
        2238,2237,1,0,0,0,2238,2239,1,0,0,0,2239,2240,1,0,0,0,2240,2241,
        3,260,130,0,2241,2243,1,0,0,0,2242,2234,1,0,0,0,2243,2246,1,0,0,
        0,2244,2242,1,0,0,0,2244,2245,1,0,0,0,2245,257,1,0,0,0,2246,2244,
        1,0,0,0,2247,2248,7,5,0,0,2248,259,1,0,0,0,2249,2260,3,262,131,0,
        2250,2252,5,166,0,0,2251,2250,1,0,0,0,2251,2252,1,0,0,0,2252,2253,
        1,0,0,0,2253,2255,5,24,0,0,2254,2256,5,166,0,0,2255,2254,1,0,0,0,
        2255,2256,1,0,0,0,2256,2257,1,0,0,0,2257,2259,3,262,131,0,2258,2251,
        1,0,0,0,2259,2262,1,0,0,0,2260,2258,1,0,0,0,2260,2261,1,0,0,0,2261,
        261,1,0,0,0,2262,2260,1,0,0,0,2263,2265,5,149,0,0,2264,2266,5,166,
        0,0,2265,2264,1,0,0,0,2265,2266,1,0,0,0,2266,2268,1,0,0,0,2267,2263,
        1,0,0,0,2268,2271,1,0,0,0,2269,2267,1,0,0,0,2269,2270,1,0,0,0,2270,
        2272,1,0,0,0,2271,2269,1,0,0,0,2272,2277,3,264,132,0,2273,2275,5,
        166,0,0,2274,2273,1,0,0,0,2274,2275,1,0,0,0,2275,2276,1,0,0,0,2276,
        2278,5,150,0,0,2277,2274,1,0,0,0,2277,2278,1,0,0,0,2278,263,1,0,
        0,0,2279,2287,3,274,137,0,2280,2288,3,268,134,0,2281,2283,3,266,
        133,0,2282,2281,1,0,0,0,2283,2284,1,0,0,0,2284,2282,1,0,0,0,2284,
        2285,1,0,0,0,2285,2288,1,0,0,0,2286,2288,3,272,136,0,2287,2280,1,
        0,0,0,2287,2282,1,0,0,0,2287,2286,1,0,0,0,2287,2288,1,0,0,0,2288,
        265,1,0,0,0,2289,2290,5,166,0,0,2290,2292,5,93,0,0,2291,2293,5,166,
        0,0,2292,2291,1,0,0,0,2292,2293,1,0,0,0,2293,2294,1,0,0,0,2294,2309,
        3,274,137,0,2295,2296,5,7,0,0,2296,2297,3,230,115,0,2297,2298,5,
        8,0,0,2298,2309,1,0,0,0,2299,2301,5,7,0,0,2300,2302,3,230,115,0,
        2301,2300,1,0,0,0,2301,2302,1,0,0,0,2302,2303,1,0,0,0,2303,2305,
        5,151,0,0,2304,2306,3,230,115,0,2305,2304,1,0,0,0,2305,2306,1,0,
        0,0,2306,2307,1,0,0,0,2307,2309,5,8,0,0,2308,2289,1,0,0,0,2308,2295,
        1,0,0,0,2308,2299,1,0,0,0,2309,267,1,0,0,0,2310,2322,3,270,135,0,
        2311,2312,5,166,0,0,2312,2313,5,130,0,0,2313,2314,5,166,0,0,2314,
        2322,5,142,0,0,2315,2316,5,166,0,0,2316,2317,5,79,0,0,2317,2318,
        5,166,0,0,2318,2322,5,142,0,0,2319,2320,5,166,0,0,2320,2322,5,63,
        0,0,2321,2310,1,0,0,0,2321,2311,1,0,0,0,2321,2315,1,0,0,0,2321,2319,
        1,0,0,0,2322,2324,1,0,0,0,2323,2325,5,166,0,0,2324,2323,1,0,0,0,
        2324,2325,1,0,0,0,2325,2326,1,0,0,0,2326,2327,3,274,137,0,2327,269,
        1,0,0,0,2328,2330,5,166,0,0,2329,2328,1,0,0,0,2329,2330,1,0,0,0,
        2330,2331,1,0,0,0,2331,2332,5,25,0,0,2332,271,1,0,0,0,2333,2334,
        5,166,0,0,2334,2335,5,96,0,0,2335,2336,5,166,0,0,2336,2344,5,110,
        0,0,2337,2338,5,166,0,0,2338,2339,5,96,0,0,2339,2340,5,166,0,0,2340,
        2341,5,109,0,0,2341,2342,5,166,0,0,2342,2344,5,110,0,0,2343,2333,
        1,0,0,0,2343,2337,1,0,0,0,2344,273,1,0,0,0,2345,2352,3,276,138,0,
        2346,2348,5,166,0,0,2347,2346,1,0,0,0,2347,2348,1,0,0,0,2348,2349,
        1,0,0,0,2349,2351,3,308,154,0,2350,2347,1,0,0,0,2351,2354,1,0,0,
        0,2352,2350,1,0,0,0,2352,2353,1,0,0,0,2353,275,1,0,0,0,2354,2352,
        1,0,0,0,2355,2365,3,278,139,0,2356,2365,3,318,159,0,2357,2365,3,
        310,155,0,2358,2365,3,290,145,0,2359,2365,3,292,146,0,2360,2365,
        3,302,151,0,2361,2365,3,304,152,0,2362,2365,3,306,153,0,2363,2365,
        3,314,157,0,2364,2355,1,0,0,0,2364,2356,1,0,0,0,2364,2357,1,0,0,
        0,2364,2358,1,0,0,0,2364,2359,1,0,0,0,2364,2360,1,0,0,0,2364,2361,
        1,0,0,0,2364,2362,1,0,0,0,2364,2363,1,0,0,0,2365,277,1,0,0,0,2366,
        2373,3,316,158,0,2367,2373,5,152,0,0,2368,2373,3,280,140,0,2369,
        2373,5,110,0,0,2370,2373,3,282,141,0,2371,2373,3,286,143,0,2372,
        2366,1,0,0,0,2372,2367,1,0,0,0,2372,2368,1,0,0,0,2372,2369,1,0,0,
        0,2372,2370,1,0,0,0,2372,2371,1,0,0,0,2373,279,1,0,0,0,2374,2375,
        7,6,0,0,2375,281,1,0,0,0,2376,2378,5,7,0,0,2377,2379,5,166,0,0,2378,
        2377,1,0,0,0,2378,2379,1,0,0,0,2379,2393,1,0,0,0,2380,2382,3,230,
        115,0,2381,2383,5,166,0,0,2382,2381,1,0,0,0,2382,2383,1,0,0,0,2383,
        2390,1,0,0,0,2384,2386,3,284,142,0,2385,2387,5,166,0,0,2386,2385,
        1,0,0,0,2386,2387,1,0,0,0,2387,2389,1,0,0,0,2388,2384,1,0,0,0,2389,
        2392,1,0,0,0,2390,2388,1,0,0,0,2390,2391,1,0,0,0,2391,2394,1,0,0,
        0,2392,2390,1,0,0,0,2393,2380,1,0,0,0,2393,2394,1,0,0,0,2394,2395,
        1,0,0,0,2395,2396,5,8,0,0,2396,283,1,0,0,0,2397,2399,5,3,0,0,2398,
        2400,5,166,0,0,2399,2398,1,0,0,0,2399,2400,1,0,0,0,2400,2402,1,0,
        0,0,2401,2403,3,230,115,0,2402,2401,1,0,0,0,2402,2403,1,0,0,0,2403,
        285,1,0,0,0,2404,2406,5,9,0,0,2405,2407,5,166,0,0,2406,2405,1,0,
        0,0,2406,2407,1,0,0,0,2407,2408,1,0,0,0,2408,2410,3,288,144,0,2409,
        2411,5,166,0,0,2410,2409,1,0,0,0,2410,2411,1,0,0,0,2411,2422,1,0,
        0,0,2412,2414,5,3,0,0,2413,2415,5,166,0,0,2414,2413,1,0,0,0,2414,
        2415,1,0,0,0,2415,2416,1,0,0,0,2416,2418,3,288,144,0,2417,2419,5,
        166,0,0,2418,2417,1,0,0,0,2418,2419,1,0,0,0,2419,2421,1,0,0,0,2420,
        2412,1,0,0,0,2421,2424,1,0,0,0,2422,2420,1,0,0,0,2422,2423,1,0,0,
        0,2423,2425,1,0,0,0,2424,2422,1,0,0,0,2425,2426,5,10,0,0,2426,287,
        1,0,0,0,2427,2430,3,330,165,0,2428,2430,5,152,0,0,2429,2427,1,0,
        0,0,2429,2428,1,0,0,0,2430,2432,1,0,0,0,2431,2433,5,166,0,0,2432,
        2431,1,0,0,0,2432,2433,1,0,0,0,2433,2434,1,0,0,0,2434,2436,5,151,
        0,0,2435,2437,5,166,0,0,2436,2435,1,0,0,0,2436,2437,1,0,0,0,2437,
        2438,1,0,0,0,2438,2439,3,230,115,0,2439,289,1,0,0,0,2440,2442,5,
        2,0,0,2441,2443,5,166,0,0,2442,2441,1,0,0,0,2442,2443,1,0,0,0,2443,
        2444,1,0,0,0,2444,2446,3,230,115,0,2445,2447,5,166,0,0,2446,2445,
        1,0,0,0,2446,2447,1,0,0,0,2447,2448,1,0,0,0,2448,2449,5,4,0,0,2449,
        291,1,0,0,0,2450,2452,5,65,0,0,2451,2453,5,166,0,0,2452,2451,1,0,
        0,0,2452,2453,1,0,0,0,2453,2454,1,0,0,0,2454,2456,5,2,0,0,2455,2457,
        5,166,0,0,2456,2455,1,0,0,0,2456,2457,1,0,0,0,2457,2458,1,0,0,0,
        2458,2460,5,146,0,0,2459,2461,5,166,0,0,2460,2459,1,0,0,0,2460,2461,
        1,0,0,0,2461,2462,1,0,0,0,2462,2528,5,4,0,0,2463,2465,5,58,0,0,2464,
        2466,5,166,0,0,2465,2464,1,0,0,0,2465,2466,1,0,0,0,2466,2467,1,0,
        0,0,2467,2469,5,2,0,0,2468,2470,5,166,0,0,2469,2468,1,0,0,0,2469,
        2470,1,0,0,0,2470,2471,1,0,0,0,2471,2473,3,296,148,0,2472,2474,5,
        166,0,0,2473,2472,1,0,0,0,2473,2474,1,0,0,0,2474,2485,1,0,0,0,2475,
        2477,5,50,0,0,2476,2478,5,166,0,0,2477,2476,1,0,0,0,2477,2478,1,
        0,0,0,2478,2479,1,0,0,0,2479,2486,3,98,49,0,2480,2482,5,3,0,0,2481,
        2483,5,166,0,0,2482,2481,1,0,0,0,2482,2483,1,0,0,0,2483,2484,1,0,
        0,0,2484,2486,3,296,148,0,2485,2475,1,0,0,0,2485,2480,1,0,0,0,2486,
        2488,1,0,0,0,2487,2489,5,166,0,0,2488,2487,1,0,0,0,2488,2489,1,0,
        0,0,2489,2490,1,0,0,0,2490,2491,5,4,0,0,2491,2528,1,0,0,0,2492,2494,
        3,294,147,0,2493,2495,5,166,0,0,2494,2493,1,0,0,0,2494,2495,1,0,
        0,0,2495,2496,1,0,0,0,2496,2498,5,2,0,0,2497,2499,5,166,0,0,2498,
        2497,1,0,0,0,2498,2499,1,0,0,0,2499,2504,1,0,0,0,2500,2502,5,75,
        0,0,2501,2503,5,166,0,0,2502,2501,1,0,0,0,2502,2503,1,0,0,0,2503,
        2505,1,0,0,0,2504,2500,1,0,0,0,2504,2505,1,0,0,0,2505,2523,1,0,0,
        0,2506,2508,3,296,148,0,2507,2509,5,166,0,0,2508,2507,1,0,0,0,2508,
        2509,1,0,0,0,2509,2520,1,0,0,0,2510,2512,5,3,0,0,2511,2513,5,166,
        0,0,2512,2511,1,0,0,0,2512,2513,1,0,0,0,2513,2514,1,0,0,0,2514,2516,
        3,296,148,0,2515,2517,5,166,0,0,2516,2515,1,0,0,0,2516,2517,1,0,
        0,0,2517,2519,1,0,0,0,2518,2510,1,0,0,0,2519,2522,1,0,0,0,2520,2518,
        1,0,0,0,2520,2521,1,0,0,0,2521,2524,1,0,0,0,2522,2520,1,0,0,0,2523,
        2506,1,0,0,0,2523,2524,1,0,0,0,2524,2525,1,0,0,0,2525,2526,5,4,0,
        0,2526,2528,1,0,0,0,2527,2450,1,0,0,0,2527,2463,1,0,0,0,2527,2492,
        1,0,0,0,2528,293,1,0,0,0,2529,2530,3,330,165,0,2530,295,1,0,0,0,
        2531,2533,3,330,165,0,2532,2534,5,166,0,0,2533,2532,1,0,0,0,2533,
        2534,1,0,0,0,2534,2535,1,0,0,0,2535,2536,5,151,0,0,2536,2538,5,6,
        0,0,2537,2539,5,166,0,0,2538,2537,1,0,0,0,2538,2539,1,0,0,0,2539,
        2541,1,0,0,0,2540,2531,1,0,0,0,2540,2541,1,0,0,0,2541,2542,1,0,0,
        0,2542,2545,3,230,115,0,2543,2545,3,298,149,0,2544,2540,1,0,0,0,
        2544,2543,1,0,0,0,2545,297,1,0,0,0,2546,2548,3,300,150,0,2547,2549,
        5,166,0,0,2548,2547,1,0,0,0,2548,2549,1,0,0,0,2549,2550,1,0,0,0,
        2550,2551,5,149,0,0,2551,2553,5,16,0,0,2552,2554,5,166,0,0,2553,
        2552,1,0,0,0,2553,2554,1,0,0,0,2554,2555,1,0,0,0,2555,2557,3,230,
        115,0,2556,2558,5,166,0,0,2557,2556,1,0,0,0,2557,2558,1,0,0,0,2558,
        299,1,0,0,0,2559,2584,3,330,165,0,2560,2562,5,2,0,0,2561,2563,5,
        166,0,0,2562,2561,1,0,0,0,2562,2563,1,0,0,0,2563,2564,1,0,0,0,2564,
        2566,3,330,165,0,2565,2567,5,166,0,0,2566,2565,1,0,0,0,2566,2567,
        1,0,0,0,2567,2578,1,0,0,0,2568,2570,5,3,0,0,2569,2571,5,166,0,0,
        2570,2569,1,0,0,0,2570,2571,1,0,0,0,2571,2572,1,0,0,0,2572,2574,
        3,330,165,0,2573,2575,5,166,0,0,2574,2573,1,0,0,0,2574,2575,1,0,
        0,0,2575,2577,1,0,0,0,2576,2568,1,0,0,0,2577,2580,1,0,0,0,2578,2576,
        1,0,0,0,2578,2579,1,0,0,0,2579,2581,1,0,0,0,2580,2578,1,0,0,0,2581,
        2582,5,4,0,0,2582,2584,1,0,0,0,2583,2559,1,0,0,0,2583,2560,1,0,0,
        0,2584,301,1,0,0,0,2585,2590,3,198,99,0,2586,2588,5,166,0,0,2587,
        2586,1,0,0,0,2587,2588,1,0,0,0,2588,2589,1,0,0,0,2589,2591,3,200,
        100,0,2590,2587,1,0,0,0,2591,2592,1,0,0,0,2592,2590,1,0,0,0,2592,
        2593,1,0,0,0,2593,303,1,0,0,0,2594,2596,5,80,0,0,2595,2597,5,166,
        0,0,2596,2595,1,0,0,0,2596,2597,1,0,0,0,2597,2598,1,0,0,0,2598,2600,
        5,9,0,0,2599,2601,5,166,0,0,2600,2599,1,0,0,0,2600,2601,1,0,0,0,
        2601,2602,1,0,0,0,2602,2604,5,102,0,0,2603,2605,5,166,0,0,2604,2603,
        1,0,0,0,2604,2605,1,0,0,0,2605,2606,1,0,0,0,2606,2611,3,190,95,0,
        2607,2609,5,166,0,0,2608,2607,1,0,0,0,2608,2609,1,0,0,0,2609,2610,
        1,0,0,0,2610,2612,3,188,94,0,2611,2608,1,0,0,0,2611,2612,1,0,0,0,
        2612,2614,1,0,0,0,2613,2615,5,166,0,0,2614,2613,1,0,0,0,2614,2615,
        1,0,0,0,2615,2616,1,0,0,0,2616,2617,5,10,0,0,2617,305,1,0,0,0,2618,
        2620,5,65,0,0,2619,2621,5,166,0,0,2620,2619,1,0,0,0,2620,2621,1,
        0,0,0,2621,2622,1,0,0,0,2622,2624,5,9,0,0,2623,2625,5,166,0,0,2624,
        2623,1,0,0,0,2624,2625,1,0,0,0,2625,2626,1,0,0,0,2626,2628,5,102,
        0,0,2627,2629,5,166,0,0,2628,2627,1,0,0,0,2628,2629,1,0,0,0,2629,
        2630,1,0,0,0,2630,2635,3,190,95,0,2631,2633,5,166,0,0,2632,2631,
        1,0,0,0,2632,2633,1,0,0,0,2633,2634,1,0,0,0,2634,2636,3,188,94,0,
        2635,2632,1,0,0,0,2635,2636,1,0,0,0,2636,2638,1,0,0,0,2637,2639,
        5,166,0,0,2638,2637,1,0,0,0,2638,2639,1,0,0,0,2639,2640,1,0,0,0,
        2640,2641,5,10,0,0,2641,307,1,0,0,0,2642,2644,5,5,0,0,2643,2645,
        5,166,0,0,2644,2643,1,0,0,0,2644,2645,1,0,0,0,2645,2648,1,0,0,0,
        2646,2649,3,322,161,0,2647,2649,5,146,0,0,2648,2646,1,0,0,0,2648,
        2647,1,0,0,0,2649,309,1,0,0,0,2650,2655,5,57,0,0,2651,2653,5,166,
        0,0,2652,2651,1,0,0,0,2652,2653,1,0,0,0,2653,2654,1,0,0,0,2654,2656,
        3,312,156,0,2655,2652,1,0,0,0,2656,2657,1,0,0,0,2657,2655,1,0,0,
        0,2657,2658,1,0,0,0,2658,2673,1,0,0,0,2659,2661,5,57,0,0,2660,2662,
        5,166,0,0,2661,2660,1,0,0,0,2661,2662,1,0,0,0,2662,2663,1,0,0,0,
        2663,2668,3,230,115,0,2664,2666,5,166,0,0,2665,2664,1,0,0,0,2665,
        2666,1,0,0,0,2666,2667,1,0,0,0,2667,2669,3,312,156,0,2668,2665,1,
        0,0,0,2669,2670,1,0,0,0,2670,2668,1,0,0,0,2670,2671,1,0,0,0,2671,
        2673,1,0,0,0,2672,2650,1,0,0,0,2672,2659,1,0,0,0,2673,2682,1,0,0,
        0,2674,2676,5,166,0,0,2675,2674,1,0,0,0,2675,2676,1,0,0,0,2676,2677,
        1,0,0,0,2677,2679,5,77,0,0,2678,2680,5,166,0,0,2679,2678,1,0,0,0,
        2679,2680,1,0,0,0,2680,2681,1,0,0,0,2681,2683,3,230,115,0,2682,2675,
        1,0,0,0,2682,2683,1,0,0,0,2683,2685,1,0,0,0,2684,2686,5,166,0,0,
        2685,2684,1,0,0,0,2685,2686,1,0,0,0,2686,2687,1,0,0,0,2687,2688,
        5,78,0,0,2688,311,1,0,0,0,2689,2691,5,140,0,0,2690,2692,5,166,0,
        0,2691,2690,1,0,0,0,2691,2692,1,0,0,0,2692,2693,1,0,0,0,2693,2695,
        3,230,115,0,2694,2696,5,166,0,0,2695,2694,1,0,0,0,2695,2696,1,0,
        0,0,2696,2697,1,0,0,0,2697,2699,5,132,0,0,2698,2700,5,166,0,0,2699,
        2698,1,0,0,0,2699,2700,1,0,0,0,2700,2701,1,0,0,0,2701,2702,3,230,
        115,0,2702,313,1,0,0,0,2703,2704,3,330,165,0,2704,315,1,0,0,0,2705,
        2708,3,326,163,0,2706,2708,3,324,162,0,2707,2705,1,0,0,0,2707,2706,
        1,0,0,0,2708,317,1,0,0,0,2709,2712,5,26,0,0,2710,2713,3,330,165,
        0,2711,2713,5,154,0,0,2712,2710,1,0,0,0,2712,2711,1,0,0,0,2713,319,
        1,0,0,0,2714,2716,3,276,138,0,2715,2717,5,166,0,0,2716,2715,1,0,
        0,0,2716,2717,1,0,0,0,2717,2718,1,0,0,0,2718,2719,3,308,154,0,2719,
        321,1,0,0,0,2720,2721,3,328,164,0,2721,323,1,0,0,0,2722,2723,5,154,
        0,0,2723,325,1,0,0,0,2724,2725,5,161,0,0,2725,327,1,0,0,0,2726,2727,
        3,330,165,0,2727,329,1,0,0,0,2728,2734,5,162,0,0,2729,2730,5,165,
        0,0,2730,2734,6,165,-1,0,2731,2734,5,155,0,0,2732,2734,3,332,166,
        0,2733,2728,1,0,0,0,2733,2729,1,0,0,0,2733,2731,1,0,0,0,2733,2732,
        1,0,0,0,2734,331,1,0,0,0,2735,2736,7,7,0,0,2736,333,1,0,0,0,2737,
        2738,7,8,0,0,2738,335,1,0,0,0,2739,2740,7,9,0,0,2740,337,1,0,0,0,
        2741,2742,7,10,0,0,2742,339,1,0,0,0,471,342,346,351,355,360,363,
        367,370,394,400,404,407,413,416,420,424,428,433,437,444,448,456,
        460,470,474,478,483,496,500,508,511,519,522,537,542,548,552,555,
        558,564,568,574,578,583,598,602,624,628,631,634,637,640,644,649,
        653,663,667,672,677,682,688,692,696,701,708,712,716,719,723,727,
        746,750,754,758,762,767,780,784,788,792,796,800,802,806,810,812,
        827,831,835,839,843,848,851,855,859,861,865,869,871,890,901,908,
        921,928,934,937,947,950,958,961,967,970,976,998,1007,1033,1037,1042,
        1051,1055,1060,1068,1074,1078,1082,1090,1094,1098,1104,1108,1112,
        1118,1122,1126,1130,1134,1140,1144,1148,1152,1156,1160,1166,1173,
        1178,1184,1204,1208,1216,1224,1226,1236,1240,1244,1250,1254,1259,
        1264,1269,1274,1278,1283,1289,1294,1297,1301,1305,1309,1315,1319,
        1324,1329,1333,1336,1340,1344,1348,1352,1356,1362,1366,1371,1375,
        1384,1390,1398,1402,1406,1410,1417,1420,1423,1426,1430,1432,1438,
        1441,1445,1449,1453,1457,1461,1465,1470,1476,1480,1484,1488,1493,
        1497,1506,1510,1515,1529,1531,1533,1538,1548,1554,1561,1574,1578,
        1582,1586,1591,1596,1600,1606,1610,1614,1618,1623,1629,1632,1638,
        1641,1647,1651,1655,1659,1663,1668,1673,1677,1682,1685,1694,1703,
        1708,1721,1724,1732,1736,1741,1746,1750,1755,1761,1766,1773,1777,
        1781,1783,1787,1789,1793,1795,1801,1807,1811,1814,1817,1823,1826,
        1829,1833,1839,1842,1845,1849,1853,1857,1859,1863,1865,1869,1871,
        1875,1877,1883,1887,1891,1895,1899,1903,1907,1911,1915,1918,1924,
        1928,1932,1935,1940,1945,1950,1955,1961,1967,1970,1973,1976,1980,
        1983,1986,1989,1992,1996,2000,2004,2008,2012,2016,2018,2021,2025,
        2029,2033,2037,2039,2045,2048,2051,2057,2060,2063,2084,2094,2104,
        2109,2113,2120,2124,2128,2132,2136,2144,2148,2152,2156,2162,2166,
        2172,2176,2181,2186,2190,2195,2200,2204,2210,2217,2221,2227,2234,
        2238,2244,2251,2255,2260,2265,2269,2274,2277,2284,2287,2292,2301,
        2305,2308,2321,2324,2329,2343,2347,2352,2364,2372,2378,2382,2386,
        2390,2393,2399,2402,2406,2410,2414,2418,2422,2429,2432,2436,2442,
        2446,2452,2456,2460,2465,2469,2473,2477,2482,2485,2488,2494,2498,
        2502,2504,2508,2512,2516,2520,2523,2527,2533,2538,2540,2544,2548,
        2553,2557,2562,2566,2570,2574,2578,2583,2587,2592,2596,2600,2604,
        2608,2611,2614,2620,2624,2628,2632,2635,2638,2644,2648,2652,2657,
        2661,2665,2670,2672,2675,2679,2682,2685,2691,2695,2699,2707,2712,
        2716,2733
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

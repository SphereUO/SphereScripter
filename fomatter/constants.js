// constants.js

const Variables = [
  "SECTOR",
  "ACTION",
  "ADDTIMER",
  "ADVRATE",
  "AMOUNT",
  "ANIM",
  "ARMOR",
  "ATTR",
  "AVERSIONS",
  "BASEID",
  "BLOODCOLOR",
  "BODY",
  "CAN",
  "CAN_PILE",
  "CHAR",
  "COLOR",
  "CREATE",
  "SELL",
  "BUY",
  "CONT",
  "DAM",
  "DEF",
  "DEFNAME",
  "CALCMEMBERINDEX",
  "DESIRES",
  "DEX",
  "DISPID",
  "FAME",
  "FINDLAYER",
  "FINDMEMORY",
  "FINDTYPE",
  "FLAGS",
  "FLIP",
  "DUPELIST",
  "DUPEITEM",
  "FOOD",
  "FOODTYPE",
  "HASTIMER",
  "HITS",
  "HITPOINTS",
  "ICON",
  "ID",
  "INT",
  "INTELLIGENCE",
  "ITEM",
  "ITEMNEWBIE",
  "KARMA",
  "KEY",
  "LAYER",
  "MAXFOOD",
  "OBODY",
  "OSKIN",
  "MANA",
  "MAXHITS",
  "MAXMANA",
  "MAXSTAM",
  "MEMORYFINDTYPE",
  "MORE",
  "MORE1",
  "MORE2",
  "MOREP",
  "MOREX",
  "MOREY",
  "MOREZ",
  "MOREM",
  "MORE1L",
  "MORE1H",
  "MORE2L",
  "MORE2H",
  "MOVERATE",
  "RESLEVEL",
  "RESDISPDNID",
  "RESDISPDNHUE",
  "NAME",
  "NPC",
  "P",
  "RAINCHANCE",
  "RECT",
  "REMOVETIMER",
  "RESOURCES",
  "RESOURCES2",
  "RESMAKE",
  "SERIAL",
  "SHELTER",
  "SKILLMAKE",
  "SKILLSUM",
  "STAM",
  "STAMINA",
  "STATSUM",
  "STR",
  "STRENGTH",
  "STRLEN",
  "STRMATCH",
  "TDATA1",
  "TDATA2",
  "TDATA3",
  "TDATA4",
  "TEVENTS",
  "TIMER",
  "TIMERD",
  "TITLE",
  "TSPEECH",
  "TYPE",
  "UID",
  "VALUE",
  "WEIGHT",
  "REPAIR",
  "SPEED",
  "TWOHANDS",
  "COMPONENT",
  "CATEGORY",
  "SUBSECTION",
  "DESCRIPTION",
  "MULTIREGION",
  "ALCHEMY",
  "ANATOMY",
  "ANIMALLORE",
  "ITEMID",
  "ARMSLORE",
  "ARMSLORE",
  "BEGGING",
  "BLACKSMITHING",
  "BOWCRAFT",
  "PEACEMAKING",
  "CAMPING",
  "CARPENTRY",
  "CARTOGRAPHY",
  "COOKING",
  "DETECTINGHIDDEN",
  "ENTICEMENT",
  "EVALUATINGINTEL",
  "HEALING",
  "FISHING",
  "FORENSICS",
  "HERDING",
  "HIDING",
  "PROVOCATION",
  "INSCRIPTION",
  "LOCKPICKING",
  "MAGERY",
  "TACTICS",
  "SNOOPING",
  "MUSICIANSHIP",
  "POISONING",
  "ARCHERY",
  "SPIRITSPEAK",
  "STEALING",
  "TAILORING",
  "TAMING",
  "TASTEID",
  "TINKERING",
  "TRACKING",
  "VETERINARY",
  "SWORDSMANSHIP",
  "MACEFIGHTING",
  "FENCING",
  "WRESTLING",
  "LUMBERJACKING",
  "MINING",
  "MEDITATION",
  "STEALTH",
  "REMOVETRAP",
  "NECROMANCY",
  "MAGICRESISTANCE",
  "PARRYING",
  "CAST_TIME",
  "DURATION",
  "EFFECT",
  "EFFECT_ID",
  "GROUP",
  "INTERRUPT",
  "MANAUSE",
  "PROMPT_MSG",
  "RUNE_ITEM",
  "RUNES",
  "SCROLL_ITEM",
  "SKILLREQ",
  "SOUND",
  "CanUse",
  "ReqStr",
];

const Triggers = [
  "AfterClick",
  "Attack",
  "CallGuards",
  "CharAttack",
  "CharClick",
  "CharClientTooltip",
  "CharDClick",
  "CharTradeAccepted",
  "Click",
  "ClientTooltip",
  "ContextMenuRequest",
  "ContextMenuSelect",
  "Create",
  "Criminal",
  "DClick",
  "Death",
  "DeathCorpse",
  "Destroy",
  "Dismount",
  "EnvironChange",
  "ExpChange",
  "ExpLevelChange",
  "FameChange",
  "GetHit",
  "Hit",
  "HitMiss",
  "HouseDesignCommit",
  "HouseDesignExit",
  "Hunger",
  "ItemAfterClick",
  "ItemBuy",
  "ItemClick",
  "ItemClientTooltip",
  "ItemContextMenuRequest",
  "ItemContextMenuSelect",
  "ItemCreate",
  "ItemDamage",
  "ItemDClick",
  "ItemDropOn_Char",
  "ItemDropOn_Ground",
  "ItemDropOn_Item",
  "ItemDropOn_Self",
  "ItemEquip",
  "ItemEquipTest",
  "ItemPickUp_Ground",
  "ItemPickUp_Pack",
  "ItemPickUp_Self",
  "ItemPickUp_Stack",
  "ItemSell",
  "ItemSpellEffect",
  "ItemStep",
  "ItemTargOn_Cancel",
  "ItemTargOn_Char",
  "ItemTargOn_Ground",
  "ItemTargOn_Item",
  "ItemToolTip",
  "ItemUnEquip",
  "Jailed",
  "KarmaChange",
  "Kill",
  "Login",
  "Logout",
  "Mount",
  "MurderDecay",
  "MurderMark",
  "NPCAcceptItem",
  "NPCActFight",
  "NPCActFollow",
  "NPCAction",
  "NPCHearGreeting",
  "NPCHearUnknown",
  "NPCLookAtChar",
  "NPCLookAtItem",
  "NPCLostTeleport",
  "NPCRefuseItem",
  "NPCRestock",
  "NPCSeeNewPlayer",
  "NPCSeeWantItem",
  "NPCSpecialAction",
  "PersonalSpace",
  "PetDesert",
  "Profile",
  "ReceiveItem",
  "RegionEnter",
  "RegionLeave",
  "Rename",
  "SeeCrime",
  "SkillAbort",
  "SkillChange",
  "SkillFail",
  "SkillGain",
  "SkillMakeItem",
  "SkillMenu",
  "SkillPreStart",
  "SkillSelect",
  "SkillStart",
  "SkillSuccess",
  "SkillUseQuick",
  "SpellBook",
  "SpellCast",
  "SpellEffect",
  "SpellFail",
  "SpellSelect",
  "SpellSuccess",
  "StatChange",
  "StepStealth",
  "ToolTip",
  "TradeAccepted",
  "UserBugReport",
  "UserChatButton",
  "UserExtCmd",
  "UserExWalkLimit",
  "UserGuildButton",
  "UserKRToolbar",
  "UserMailBag",
  "UserQuestArrowClick",
  "UserQuestButton",
  "UserSkills",
  "UserSpecialMove",
  "UserStats",
  "UserVirtue",
  "UserVirtueInvoke",
  "UserWarmode",
  "AfterClick",
  "Buy",
  "Click",
  "ClientTooltip",
  "ContextMenuRequest",
  "ContextMenuSelect",
  "Create",
  "Damage",
  "DClick",
  "Destroy",
  "DropOn_Char",
  "DropOn_Ground",
  "DropOn_Item",
  "DropOn_Self",
  "Equip",
  "EquipTest",
  "PickUp_Ground",
  "PickUp_Pack",
  "PickUp_Self",
  "PickUp_Stack",
  "Sell",
  "SpellEffect",
  "Step",
  "TargOn_Cancel",
  "TargOn_Char",
  "TargOn_Ground",
  "TargOn_Item",
  "Timer",
  "ToolTip",
  "UnEquip",
  "ResourceTest",
  "ResourceFound",
  "CliPeriodic",
  "Enter",
  "Exit",
  "RegPeriodic",
  "Step",
  "Abort",
  "Fail",
  "Gain",
  "PreStart",
  "Select",
  "Start",
  "Success",
  "UseQuick",
  "Effect",
  "Fail",
  "Select",
  "Start",
  "Success"
];


const Controls = [
  "BEGIN",
  "END",
  "DORAND",
  "ENDDO",
  "DOSWITCH",
  "ENDDO",
  "FOR",
  "ENDFOR",
  "FORCHARLAYER",
  "ENDFOR",
  "FORCHARMEMORYTYPE",
  "ENDFOR",
  "FORCHARS",
  "ENDFOR",
  "FORCLIENTS",
  "ENDFOR",
  "FORCONT",
  "ENDFOR",
  "FORCONTID",
  "ENDFOR",
  "FORCONTTYPE",
  "ENDFOR",
  "FORINSTANCES",
  "ENDFOR",
  "FORITEMS",
  "ENDFOR",
  "FOROBJS",
  "ENDFOR",
  "FORPLAYERS",
  "ENDFOR",
  "IF",
  "ELSE",
  "ENDIF",
  "WHILE",
  "ENDWHILE",
  "TRY"
];


const TypesKeywords = [
  "ACT",
  "ARG",
  "ARGCHK",
  "ARGN",
  "ARGS",
  "ARGO",
  "ARGV",
  "ARGVCOUNT",
  "ARGTXT",
  "LASTNEW",
  "LASTNEWCHAR",
  "LINK",
  "QTAG",
  "SERV",
  "NEW",
  "SRC",
  "TAG",
  "TARG",
  "THIS",
  "TOPOBJ",
  "REGION",
  "ACCOUNT",
  "TRIGGER",
  "VAR",
  "VAR0",
  "TAG0",
  "CONT"
];


exports.VarsKeywords = Variables;
exports.Triggers = Triggers;
exports.Controls = Controls;
exports.TypesKeywords = TypesKeywords;

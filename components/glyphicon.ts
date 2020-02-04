import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import {
  createDictionary,
  IDictionary,
  toLowerWithDashes
} from "./bobrilHelpers";

export enum GlyphIcon {
  Asterisk,
  Plus,
  Euro,
  Eur,
  Minus,
  Cloud,
  Envelope,
  Pencil,
  Glass,
  Music,
  Search,
  Heart,
  Star,
  StarEmpty,
  User,
  Film,
  ThLarge,
  Th,
  ThList,
  Ok,
  Remove,
  ZoomIn,
  ZoomOut,
  Off,
  Signal,
  Cog,
  Trash,
  Home,
  File,
  Time,
  Road,
  DownloadAlt,
  Download,
  Upload,
  Inbox,
  PlayCircle,
  Repeat,
  Refresh,
  ListAlt,
  Lock,
  Flag,
  Headphones,
  VolumeOff,
  VolumeDown,
  VolumeUp,
  Qrcode,
  Barcode,
  Tag,
  Tags,
  Book,
  Bookmark,
  Print,
  Camera,
  Font,
  Bold,
  Italic,
  TextHeight,
  TextWidth,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  IndentLeft,
  IndentRight,
  FacetimeVideo,
  Picture,
  MapMarker,
  Adjust,
  Tint,
  Edit,
  Share,
  Check,
  Move,
  StepBackward,
  FastBackward,
  Backward,
  Play,
  Pause,
  Stop,
  Forward,
  FastForward,
  StepForward,
  Eject,
  ChevronLeft,
  ChevronRight,
  PlusSign,
  MinusSign,
  RemoveSign,
  OkSign,
  QuestionSign,
  InfoSign,
  Screenshot,
  RemoveCircle,
  OkCircle,
  BanCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ShareAlt,
  ResizeFull,
  ResizeSmall,
  ExclamationSign,
  Gift,
  Leaf,
  Fire,
  EyeOpen,
  EyeClose,
  WarningSign,
  Plane,
  Calendar,
  Random,
  Comment,
  Magnet,
  ChevronUp,
  ChevronDown,
  Retweet,
  Shoppingcart,
  FolderClose,
  FolderOpen,
  ResizeVertical,
  ResizeHorizontal,
  Hdd,
  Bullhorn,
  Bell,
  Certificate,
  ThumbsUp,
  ThumbsDown,
  HandRight,
  HandUeft,
  HandUp,
  HandDown,
  CircleArrowRight,
  CircleArrowLEft,
  CircleArrowUp,
  CircleArrowDown,
  Globe,
  Wrench,
  Tasks,
  Filter,
  Briefcase,
  Fullscreen,
  Dashboard,
  Paperclip,
  HeartEmpty,
  Link,
  Phone,
  Pushpin,
  Usd,
  Gbp,
  Sort,
  SortByAlphabet,
  SortByAlphabetAlt,
  SortByOrder,
  SortByOrderAlt,
  SortByAttributes,
  SortByAttributesAlt,
  Unchecked,
  Expand,
  CollapseDown,
  CollapseUp,
  LogIn,
  Flash,
  LogOut,
  NewWindow,
  Record,
  Save,
  Open,
  Saved,
  Import,
  Export,
  Send,
  FloppyDisk,
  FloppySaved,
  FloppyRemove,
  FloppySave,
  FloppyOpen,
  CreditCard,
  Transfer,
  Cutlery,
  Header,
  Compressed,
  Earphone,
  PhoneAlt,
  Tower,
  Stats,
  SdVideo,
  HdVideo,
  Subtitles,
  SoundStereo,
  SoundDolby,
  Sound51,
  Sound61,
  Sound71,
  CopyrightMark,
  RegistrationMark,
  CloudDownload,
  CloudUpload,
  TreeConifer,
  TreeDeciduous,
  Cd,
  SaveFile,
  OpenFile,
  LevelUp,
  Copy,
  Paste,
  Alert,
  Equalizer,
  King,
  Queen,
  Pawn,
  Bishop,
  Knight,
  BabyFormula,
  Tent,
  Blackboard,
  Bed,
  Apple,
  Erase,
  Hourglass,
  Lamp,
  Duplicate,
  PiggyBank,
  Scissors,
  Bitcoin,
  Btc,
  Xbt,
  Yen,
  Jpy,
  Ruble,
  Rub,
  Scale,
  IceLolly,
  IceLollyTasted,
  Education,
  OptionHorizontal,
  OptionVertical,
  MenuHamburger,
  ModalWindow,
  Oil,
  Grain,
  Sunglasses,
  TextDize,
  TextColor,
  TextBackground,
  ObjectAlignTop,
  ObjectAlignBottom,
  ObjectAlignHorizontal,
  ObjectAlignLeft,
  ObjectAlignVertical,
  ObjectAlignRight,
  TriangleRight,
  TriangleLeft,
  TriangleBottom,
  TriangleTop,
  Console,
  Superscript,
  Subscript,
  MenuLeft,
  MenuRight,
  MenuDown,
  MenuUp
}

export const glyphIconStyles = {
  glyphicon: b.styleDef("glyphicon"),
  formControlFeedback: b.styleDef("form-control-feedback")
};

export const glyphIconTypeStyles = generateStyles();

export interface IGlyphiconData extends IBaseData {
  icon: GlyphIcon;
  formControlFeedback?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IGlyphiconData;
}

export const Glyphicon = b.createDerivedComponent<IGlyphiconData, IBaseData>(Elem, {
  id: "bobrilstrap-glyphicon",
  render(ctx: ICtx, me: IElementBobrilNode) {
    me.tag = "span";
    me.attrs["aria-hidden"] = true;
    b.style(me, glyphIconStyles.glyphicon);
    b.style(me, glyphIconTypeStyles(ctx.data.icon));
    b.style(
      me,
      !!ctx.data.formControlFeedback && glyphIconStyles.formControlFeedback
    );
  }
});

export default Glyphicon;

function generateStyles(): IDictionary<GlyphIcon, b.IBobrilStyle> {
  let result = createDictionary<GlyphIcon, b.IBobrilStyle>();
  Object.keys(GlyphIcon).forEach(key => {
    let castedValue = parseInt(key, 10);
    if (!isNaN(castedValue)) {
      result(
        castedValue,
        b.styleDef(`glyphicon-${toLowerWithDashes(GlyphIcon[castedValue])}`)
      );
    }
  });

  return result;
}

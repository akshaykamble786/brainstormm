import {
  AIHighlight,
  CharacterCount,
  CodeBlockLowlight,
  Color,
  CustomKeymap,
  GlobalDragHandle,
  HighlightExtension,
  HorizontalRule,
  MarkdownExtension,
  Placeholder,
  StarterKit,
  TaskItem,
  TaskList,
  TextStyle,
  TiptapLink,
  TiptapUnderline,
  Twitter,
  Youtube,
  Mathematics,
} from "novel/extensions";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import FontFamily from "@tiptap/extension-font-family";
import { Image } from "@tiptap/extension-image";
import { cx } from "class-variance-authority";
import { common, createLowlight } from "lowlight";

const aiHighlight = AIHighlight;
const placeholder = Placeholder;
const tiptapLink = TiptapLink.configure({
  HTMLAttributes: {
    class: cx(
      "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer"
    ),
  },
});

const heading = Heading.configure({
  levels: [1,2,3],
});

const fontFamily = FontFamily.configure({
  types: ['textStyle'],
})

const textAlign = TextAlign.configure({
  types: ['heading', 'paragraph'],
  alignments: ['left', 'center', 'right', 'justify'],
  defaultAlignment: 'left',
});

const table = Table.configure({
  resizable: true,
  allowTableNodeSelection: true,
  HTMLAttributes: {
    class: "table-auto border-collapse border border-slate-200 w-full",
  },
});

const tableCell = TableCell.configure({
  HTMLAttributes: {
    class: "border border-slate-200 p-2",
  },
});

const tableHeader = TableHeader.configure({
  HTMLAttributes: {
    class: "border border-slate-200 p-2 bg-background font-bold",
  },
});

const tableRow = TableRow.configure({
  HTMLAttributes: {
    class: "border border-slate-200",
  },
});

const taskList = TaskList.configure({
  HTMLAttributes: {
    class: cx("not-prose pl-2 "),
  },
});
const taskItem = TaskItem.configure({
  HTMLAttributes: {
    class: cx("flex gap-2 items-start my-4"),
  },
  nested: true,
});

const horizontalRule = HorizontalRule.configure({
  HTMLAttributes: {
    class: cx("mt-4 mb-6 border-t border-muted-foreground"),
  },
});

const starterKit = StarterKit.configure({
  history: false,

  bulletList: {
    HTMLAttributes: {
      class: cx("list-disc list-outside leading-3 -mt-2"),
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: cx("list-decimal list-outside leading-3 -mt-2"),
    },
  },
  listItem: {
    HTMLAttributes: {
      class: cx("leading-normal -mb-2"),
    },
  },
  blockquote: {
    HTMLAttributes: {
      class: cx("border-l-4 border-primary"),
    },
  },
  codeBlock: false,
  code: {
    HTMLAttributes: {
      class: cx("rounded-md bg-muted  px-1.5 py-1 font-mono font-medium"),
      spellcheck: "false",
    },
  },
  horizontalRule: false,
  dropcursor: {
    color: "#DBEAFE",
    width: 4,
  },
  gapcursor: false,
});

const codeBlockLowlight = CodeBlockLowlight.configure({
  lowlight: createLowlight(common),
});

const youtube = Youtube.configure({
  HTMLAttributes: {
    class: cx("rounded-lg border border-muted"),
  },
  inline: false,
});

const twitter = Twitter.configure({
  HTMLAttributes: {
    class: cx("not-prose"),
  },
  inline: false,
});

const mathematics = Mathematics.configure({
  HTMLAttributes: {
    class: cx("text-foreground rounded p-1 hover:bg-accent cursor-pointer"),
  },
  katexOptions: {
    throwOnError: false,
  },
});

const characterCount = CharacterCount.configure();

export const defaultExtensions = [
  starterKit,
  placeholder,
  tiptapLink,
  taskList,
  taskItem,
  horizontalRule,
  aiHighlight,
  codeBlockLowlight,
  youtube,
  twitter,
  mathematics,
  characterCount,
  TiptapUnderline,
  MarkdownExtension,
  HighlightExtension.configure({
    multicolor: true,
  }),
  TextStyle,
  Color,
  CustomKeymap,
  GlobalDragHandle,
  table,
  tableRow,
  tableCell,
  tableHeader,
  heading,
  Image.configure({
    inline: true,
    allowBase64: true,
  }),
  textAlign,
  fontFamily,
];

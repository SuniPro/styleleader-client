import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "tui-color-picker/dist/tui-color-picker.css";
import { Editor } from "@toast-ui/react-editor";
import { Editor as EditorType } from "@toast-ui/react-editor";
import styled from "@emotion/styled";
import { useRef } from "react";

type Props = {
  editorRef: React.RefObject<Editor> | null;
  imageHandler: (blob: File, callback: typeof Function) => void;
  content?: string;
};

const toolbar = [
  ["heading", "bold", "italic", "strike"],
  ["hr", "quote", "ul", "ol"],
  ["image"],
];

export function BoardEditor() {
  const editorRef = useRef<EditorType>(null);

  const handleSave = () => {
    if (editorRef.current) {
      let markDownContent = editorRef.current.getInstance().getMarkdown();
      let htmlContent = editorRef.current.getInstance().getHTML();
      console.log(markDownContent);
      console.log("================================================");
      console.log(htmlContent);
    }
  };

  return (
    <EditorContainer>
      <button onClick={handleSave}></button>
      <TitleEditor></TitleEditor>
      <Editor
        ref={editorRef}
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        toolbarItems={toolbar}
      />
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleEditor = styled.input`
  width: 100%;
`;

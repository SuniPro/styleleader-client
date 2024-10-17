import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "tui-color-picker/dist/tui-color-picker.css";
import { Editor } from "@toast-ui/react-editor";
import { Editor as EditorType } from "@toast-ui/react-editor";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

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

  const [images, setImages] = useState<string[]>([]);

  const handleSave = () => {
    if (editorRef.current) {
      let markDownContent = editorRef.current.getInstance().getMarkdown();
      let htmlContent = editorRef.current.getInstance().getHTML();
      console.log(markDownContent);
      console.log("================================================");
      console.log(htmlContent);
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      // 기존 훅 제거
      editorRef.current.getInstance().removeHook("addImageBlobHook");
      // 새로운 훅 추가
      editorRef.current
        .getInstance()
        .addHook("addImageBlobHook", (blob, callback) => {
          (async () => {
            let formData = new FormData();
            formData.append("image", blob);

            console.log("이미지가 업로드 됐습니다.");

            const { data: filename } = await axios.post(
              `file/upload`,
              formData,
              {
                headers: { "content-type": "multipart/formdata" },
                withCredentials: true,
              },
            );

            console.log("formData  ", formData);

            const imageUrl = "http://localhost:8080/image/add/" + filename;

            // Image 를 가져올 수 있는 URL 을 callback 메서드에 넣어주면 자동으로 이미지를 가져온다.
            callback(imageUrl, "iamge");
          })();

          return false;
        });
    }

    return () => {};
  }, [editorRef]);

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

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

            await axios.post(`{저장할 서버 api}`, formData, {
              headers: { "content-type": "multipart/formdata" },
              withCredentials: true,
            });

            const imageUrl = "저장된 서버 주소" + blob.name;

            setImages([...images, imageUrl]);
            callback(imageUrl, "image");
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
        // hooks 에서 addImageBlobHook 를 주물러 주면 된다.
        hooks={{
          addImageBlobHook: async (blob, callback) => {
            console.log(blob); // File {name: '카레유.png', ... }

            // 1. 첨부된 이미지 파일을 서버로 전송후, 이미지 경로 url을 받아온다.
            // const imgUrl = await .... 서버 전송 / 경로 수신 코드 ...

            // 2. 첨부된 이미지를 화면에 표시(경로는 임의로 넣었다.)
            callback("http://localhost:5000/img/카레유.png", "카레유");
          },
        }}
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

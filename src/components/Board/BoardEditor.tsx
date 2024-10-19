import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "tui-color-picker/dist/tui-color-picker.css";
import { Editor } from "@toast-ui/react-editor";
import { Editor as EditorType } from "@toast-ui/react-editor";
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { css } from "@emotion/react";
import { StyledWriteButton } from "./BoardList";
import { UnderLineInput } from "../layouts/LayoutLayer";

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

export function BoardEditor(props: { writing: () => void }) {
  const editorRef = useRef<EditorType>(null);

  const [title, setTitle] = useState<string>("");
  const [important, setImportant] = useState<boolean>(false);

  const handleSave = () => {
    if (editorRef.current) {
      const boardRecord = {
        writer: "Nana",
        title: title,
        content: editorRef.current.getInstance().getHTML(),
        important: important,
      };

      // axios
      //   .post("api/board/write", boardRecord, {
      //     headers: { "Content-Type": "application/json" },
      //   })
      //   .then((res) => {
      //     if (res.status === 200) {
      //       props.writing();
      //     }
      //   })
      //   .catch((error) => {
      //     console.error("Error writing to the board:", error);
      //   });
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
            formData.append("multipartFile", blob);

            const { data: filename } = await axios.post(
              `api/api/file/upload`,
              formData,
              {
                headers: { "content-type": "multipart/form-data" },
                withCredentials: true,
              },
            );

            const imageUrl =
              "http://localhost:8080/api/file/upload/" + filename;

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
      <HeaderLine>
        <StyledPriorityHighIcon
          important={important}
          onClick={() => setImportant((prev) => !prev)}
        />
        <UnderLineInput
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          isWrite={title.length !== 0}
          underLineColor={"#d7bc6a"}
        />
      </HeaderLine>
      <Editor
        ref={editorRef}
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        toolbarItems={toolbar}
      />
      <StyledWriteButton onClick={handleSave}>SAVE</StyledWriteButton>
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeaderLine = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPriorityHighIcon = styled(PriorityHighIcon)<{ important: boolean }>(
  ({ important }) => css`
    color: ${important && "#df1313"};
    cursor: pointer;
  `,
);

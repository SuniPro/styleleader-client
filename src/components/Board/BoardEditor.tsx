/** @jsxImportSource @emotion/react */
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "tui-color-picker/dist/tui-color-picker.css";
import { Editor, Editor as EditorType } from "@toast-ui/react-editor";
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { css, Theme, useTheme } from "@emotion/react";
import { StyledWriteButton } from "./BoardList";
import { UnderLineInput } from "../layouts/LayoutLayer";
import { useNavigate, useParams } from "react-router-dom";
import theme from "../../styles/theme";

const toolbar = [
  ["heading", "bold", "italic", "strike"],
  ["hr", "quote", "ul", "ol"],
  ["image"],
];

export function BoardEditor(props: { writing: () => void }) {
  const { boardId } = useParams<{ boardId: string }>();
  const navigate = useNavigate();

  const editorRef = useRef<EditorType>(null);
  const theme = useTheme();

  const [title, setTitle] = useState<string>("");
  const [important, setImportant] = useState<boolean>(false);

  const handleSave = () => {
    if (editorRef.current) {
      const boardRecord = {
        ...(boardId ? { boardId } : {}),
        writer: "Nana",
        title: title,
        content: editorRef.current.getInstance().getHTML(),
        important: important,
        category: "",
        insertId: "Nana",
      };

      axios
        .post("/api/board/write", boardRecord, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          if (res.status === 200) {
            props.writing();
          }
        })
        .catch((error) => {
          console.error("Error writing to the board:", error);
        });
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
              `/api/board/file/upload`,
              formData,
              {
                headers: { "content-type": "multipart/form-data" },
                withCredentials: true,
              },
            );

            // Image 를 가져올 수 있는 URL 을 callback 메서드에 넣어주면 자동으로 이미지를 가져온다.
            callback(filename, "iamge");
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
          theme={theme}
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
      <HeaderLine
        css={css`
          gap: 10px;
        `}
      >
        <StyledWriteButton
          css={css`
            width: 100%;
          `}
          onClick={() => navigate(-1)}
          tone={theme.colors.gray}
        >
          CANCEL
        </StyledWriteButton>
        <StyledWriteButton
          css={css`
            width: 100%;
          `}
          onClick={handleSave}
          tone={theme.colors.gradientGoldBottom}
        >
          SAVE
        </StyledWriteButton>
      </HeaderLine>
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  z-index: 0;
`;

const HeaderLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledPriorityHighIcon = styled(PriorityHighIcon)<{
  important: boolean;
  theme: Theme;
}>(
  ({ important, theme }) => css`
    color: ${important && theme.colors.warning};
    cursor: pointer;
  `,
);

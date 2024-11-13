import { getFileToPost, getFormSprings } from "./base";
import { Board } from "../model/Board";

export async function getBoard(boardId: string): Promise<Board> {
  const response = await getFormSprings(`/api/board/${boardId}`);

  return await response.data;
}

export async function getFile(props: { file: string }): Promise<void> {
  await getFileToPost(`/api/file/get`, { file: props.file });
}

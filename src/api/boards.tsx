import { Board } from "../model/Board";
import { getFormSprings, postToSprings } from "./base";

export async function getBoardList(): Promise<Board[]> {
  const response = await getFormSprings("/api/board/list");

  return await response.data;
}

export async function getBoard(boardId: string): Promise<Board> {
  const response = await getFormSprings(`/api/board/${boardId}`);

  return await response.data;
}

export async function postWrite(param: Board): Promise<Board> {
  const response = await postToSprings(`/api/board/write`, param);

  return await response.data;
}

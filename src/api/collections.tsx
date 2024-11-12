import { Board } from "../model/Board";
import { getFormSprings, postToSprings } from "./base";
import { Collection } from "../model/Collection";

export async function getCollectionListOfBrand(
  brand: string,
): Promise<Collection[]> {
  const response = await getFormSprings(`/api/file/collection/${brand}`);

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

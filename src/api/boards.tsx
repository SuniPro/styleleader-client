import { AnnouncementType } from "../model/Board";
import { getFormSprings } from "./base";

export async function getBoardList(): Promise<AnnouncementType[]> {
  const response = await getFormSprings("api/board/list");

  return await response.data;
}

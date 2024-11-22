import { getFormSprings } from "./base";
import { Collection } from "../model/Collection";

export async function getCollectionsOfBrand(
  brand: string,
): Promise<Collection[]> {
  const response = await getFormSprings(`/api/collection/get/${brand}`);

  return await response.data;
}

export async function getCollections(): Promise<Collection[]> {
  const response = await getFormSprings(`/api/collection/get/list`);

  return await response.data;
}

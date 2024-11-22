import { getFormSprings, postToSprings } from "./base";
import { DisplayAssets } from "../model/Display";

export async function getDisplayAssets(): Promise<DisplayAssets[]> {
  const response = await getFormSprings(`/api/admin/display/list`);

  return await response.data;
}

export async function addDisplayAsset(
  object: DisplayAssets,
): Promise<DisplayAssets> {
  const response = await postToSprings(`/api/admin/display/add`, object);

  return await response.data;
}

export async function editDisplayAsset(
  object: DisplayAssets,
): Promise<DisplayAssets> {
  const response = await postToSprings(`/api/admin/display/edit`, object);

  return await response.data;
}

export async function deleteDisplayAsset(id: number): Promise<number> {
  const response = await getFormSprings(`/api/admin/display/delete/${id}`);

  return await response.data;
}

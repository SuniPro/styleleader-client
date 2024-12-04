import { getFormSprings, postToSprings } from "./base";
import { ServiceCategory, ServiceContents } from "../model/Service";

export async function getServiceCategoryList(): Promise<ServiceCategory[]> {
  const response = await getFormSprings("/api/service/list");

  return await response.data;
}

export async function addServiceContent(
  content: ServiceContents,
): Promise<ServiceContents> {
  const response = await postToSprings("/api/service/contents/add", content);

  return await response.data;
}

export async function editServiceContent(
  content: ServiceContents,
): Promise<ServiceContents> {
  const response = await postToSprings("/api/service/contents/edit", content);

  return await response.data;
}

export async function deleteServiceContent(id: number): Promise<number> {
  const response = await getFormSprings(`/api/service/contents/delete/${id}`);

  return await response.data;
}

import {
  getFormSprings,
  postToSprings,
  SignResponse,
  signThroughServer,
} from "./base";
import { User } from "../model/User";
import { error } from "../alert/alert";

export async function getUserList(
  password: string,
  roleType: "admin" | "writer" | "guest",
): Promise<User[]> {
  const response = await postToSprings("/api/user/list/", {
    password,
    roleType,
  });

  return await response.data;
}

export async function checkMe(): Promise<User> {
  const response = await getFormSprings("/api/user/check");
  return response.data;
}

export async function signIn(param: User): Promise<SignResponse> {
  try {
    const response: SignResponse = await signThroughServer(
      "/api/user/login",
      param,
    );
    if (response.status !== 200) {
      error("로그인 실패", "이메일과 비밀번호를 확인하시기 바랍니다.");
    }
    return response;
  } catch (err) {
    error("로그인 실패", "이메일과 비밀번호를 확인하시기 바랍니다.");
    throw err; // 호출 측에서 처리하도록 에러를 다시 던짐
  }
}

export async function signUp(param: User): Promise<User> {
  const response = await postToSprings(`/api/user/create`, param);

  return await response.data;
}

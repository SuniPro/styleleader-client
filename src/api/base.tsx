import axios, { AxiosResponse } from "axios";

export class HttpError extends Error {
  constructor(
    public status: number,
    public message: string,
    public response: any,
    public url: string,
  ) {
    super(message);
  }
}

interface InitOptions {
  skipError?: boolean;
}

export async function getFormSprings(
  url: string,
  init: InitOptions = { skipError: false },
): Promise<AxiosResponse> {
  return axios
    .get(url, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => responseHandler(response, url, init))
    .catch(errorHandler);
}

export async function postToSprings(
  url: string,
  param: any,
  init: RequestInit & { skipError?: boolean } = {},
): Promise<AxiosResponse> {
  return axios
    .post(url, param, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => responseHandler(response, url, init))
    .catch(errorHandler);
}

async function responseHandler(
  response: AxiosResponse,
  url: string,
  init: InitOptions = { skipError: false },
): Promise<AxiosResponse> {
  if (response.status !== 200 && !init.skipError) {
    const text = JSON.stringify(response.data);
    let jsonResponse: any;

    try {
      jsonResponse = JSON.parse(text);
    } catch {
      throw new HttpError(response.status, text, text, url);
    }

    let message = "";
    if (jsonResponse.errors) {
      message = jsonResponse.errors
        .map((error: { detail: string }) => error.detail)
        .join("\n");
    }

    throw new HttpError(response.status, message, jsonResponse, url);
  }

  return response;
}

function errorHandler(error: any): never {
  if (error.response) {
    const { status, data, config } = error.response;
    const message = data?.message || "An error occurred.";
    throw new HttpError(status, message, data, config.url);
  } else {
    throw new Error("Network error or server is unreachable");
  }
}

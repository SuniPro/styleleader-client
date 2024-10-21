declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    env: any;
  }
}

type EnvType = {
  MAIN_SPRING_SERVER_URL: string;
};

export const env: EnvType = { ...process.env, ...window.env };

import "dotenv/config";

export function getMainServerUrl(): string {
  return process.env.MAIN_SPRING_SERVER_URL ?? "";
}

function isLocalHostname(): boolean {
  const ipPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  return (
    window.location.hostname === "localhost" ||
    ipPattern.test(window.location.hostname)
  );
}

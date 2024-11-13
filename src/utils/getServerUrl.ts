import { AppConfig } from "../config/config";

export function getMainServerUrl(): string {
  return AppConfig.server.main ?? "";
}

function isLocalHostname(): boolean {
  const ipPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  return (
    window.location.hostname === "localhost" ||
    ipPattern.test(window.location.hostname)
  );
}

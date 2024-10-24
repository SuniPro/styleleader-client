export function getMainServerUrl(): string {
  return "http://localhost:8080";
}

function isLocalHostname(): boolean {
  const ipPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  return (
    window.location.hostname === "localhost" ||
    ipPattern.test(window.location.hostname)
  );
}

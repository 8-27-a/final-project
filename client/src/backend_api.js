let backendUrl;

if (window.location.hostname === "locahost") {
  backendUrl = "http://localhost:5000/v1";
} else {
  backendUrl = `${window.location.origin}/v1`;
}

export const API_URL = backendUrl;

import httpService from "./httpService";
import https from "../config.json";

export async function getUsers() {
  return httpService.get(https.apiUrl);
}

export async function getUser(id) {
  return httpService.get(https.apiUrl + "/" + id);
}

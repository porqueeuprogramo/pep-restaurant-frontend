import axios from "axios";
import { IRestaurantsAPIData } from "../types";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

const config = {
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1MllxSXJRZndkUzhaSEdIRVlVdm8wazRrNGxxN21lRUNhNDhuU2g2ZzZjIn0.eyJleHAiOjE2MjU2MTI3OTAsImlhdCI6MTYyNTYxMjQ5MCwianRpIjoiMzliODFhMTktMGZlNC00ZmMyLTg4ZWMtZGI2YjhhYjRlZmMwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2F1dGgvcmVhbG1zL3BlcHJlc3RhdXJhbnQiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiODBkYjVmZTQtYjliZC00MzQ2LWI4NDUtNjljNDNjNjYxNWIyIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicGVwcmVzdGF1cmFudCIsInNlc3Npb25fc3RhdGUiOiJmYTBiYjNjYS02ZDVlLTRiNmEtYTA3Mi00NWM0YWRiN2YxMzgiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJwZXByZXN0YXVyYW50Ijp7InJvbGVzIjpbIkFETUlOIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUiLCJuYW1lIjoicGVwIHVzZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJwZXB1c2VyIiwiZ2l2ZW5fbmFtZSI6InBlcCIsImZhbWlseV9uYW1lIjoidXNlciJ9.IdJuvOQ0O_0dybuBYnlQa-Eb4lzDQ06BPzUv-Qo0pVPzudE8kjDcu1dQf781wHsx0W-6xmHfKKqN0Zkkw-RQ8EkuoYlE8abQ3TkuZIVL7AnAo5UBJpFTvjIBa8SGwAUYbtF24PvEsvT2l1WUQEc69qPn1Lm-z9ujV5cLpbUz8hAUl06JX4IXV7ZM0yALIiUMUq8r-99xV6AZyaVc-LQh6tTS4Dg1a3nji_pauDbPSa0TUvny4DZCSuxy3dNGOsScuAxoif4DOV-3r9qwkvkLe5r9fXVj7gnR8dh1SyWBAouu6p0fWUqSOIYyz08a8nP0fSUQrvyevD1de1HRsJq5pw"
  },
  data: {},
} as const;

export async function getRestaurants() {
  const response = await api.get("/restaurant", config)
  return response.data;
}

export async function getRestaurant(restaurantId: string) {
  const response = await api.get(`/restaurant/${restaurantId}`, config);
  return response.data;
}

export async function createRestaurant(data: IRestaurantsAPIData) {
  const response = await api.post("/restaurant", data, config);
  return response.data;
}

export async function updateRestaurant(restaurantId: string, data: IRestaurantsAPIData) {
  const response = await api.put(`/restaurant/${restaurantId}`, data, config);
  return response.data;
}

export async function deleteRestaurant(restaurantId: string) {
  await api.delete(`/restaurant/${restaurantId}`, config);
}

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

const config = {
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1bnRiOWtyZGo3dGRIeFF5ZnJMWFl2d002cDlIX0NUV21oUE1YR1FCV2p3In0.eyJleHAiOjE2MzEyMjczMzMsImlhdCI6MTYzMTIyNzAzMywianRpIjoiNDEyOTZlZGItOTY4Ny00MmU4LTg1OTUtYWI1MTA1MjBmMWE3IiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS45Njo4MDgxL2F1dGgvcmVhbG1zL3BlcHJlc3RhdXJhbnQiLCJzdWIiOiI0MTdjMzIwZi1jN2VlLTRjZDMtOWU3Ni1jZTI1MThkNjE0YzMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwZXByZXN0YXVyYW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjljNjE2MDI1LWY0YTYtNDgzNC1iMWE2LWY1YjZmZjVhYTcxNCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InBlcHJlc3RhdXJhbnQiOnsicm9sZXMiOlsiQURNSU4iXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI5YzYxNjAyNS1mNGE2LTQ4MzQtYjFhNi1mNWI2ZmY1YWE3MTQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJwZXAgdXNlciIsInByZWZlcnJlZF91c2VybmFtZSI6InBlcHVzZXIiLCJnaXZlbl9uYW1lIjoicGVwIiwiZmFtaWx5X25hbWUiOiJ1c2VyIiwiZW1haWwiOiJwb3JxdWVldXByb2dyYW1vQGdtYWlsLmNvbSJ9.SCQkrua24GTEb1yOYUzwvZbeYX4VUkP6nvRTbqiEZe7aMvSMY3bl4xJcZfNvmLbpE829hb1Bu1zNl7udxSe9LuAryo5veCBnSVBgZ0dJ78uY4daQnStTjEHMvC8pIsY3FV-jZgeETUBQYTNYYbjee6z1QixPWICqkq3ovZ-7vDfKEvdxD6WubLb3MgBJx9swlrGKB856XDArtVxc_KvBWqasZ04U9yQFaaKcOQRDfqHjW4GSECHEhOZ9TOwHwN0WB9bm35GVeIq95yvXirOUDnCgb85urNK92_0opMUbBKqDMNiCeOgn4bMUnsQhuEOgxv_FLR04sPbVaXTBR4pecg"
  },
  data: {},
};

export async function getRestaurants() {
  const response = await api.get("/restaurant", config)
  return response.data;
}

export async function getRestaurant(restaurantId) {
  const response = await api.get(`/restaurant/${restaurantId}`, config);
  return response.data;
}

export async function createRestaurant(data) {
  const response = await api.post("/restaurant", data, config);
  return response.data;
}

export async function updateRestaurant(restaurantId, data) {
  const response = await api.put(`/restaurant/${restaurantId}`, data, config);
  return response.data;
}

export async function deleteRestaurant(restaurantId) {
  await api.delete(`/restaurant/${restaurantId}`, config);
}

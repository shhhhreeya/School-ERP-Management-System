import API from "./api";

export const markAttendance = (data) =>
  API.post("/attendance", data);

export const getAttendance = () =>
  API.get("/attendance");
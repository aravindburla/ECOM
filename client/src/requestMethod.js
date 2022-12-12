import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGI2NDkxNmZhMGEyNTU2NjY0YTUzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDE1NTA2MSwiZXhwIjoxNjcwNDE0MjYxfQ.NQddk8tbSJMkpKZR0D-a_eIVf0xTl85F9jIOJ8cLd1M";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

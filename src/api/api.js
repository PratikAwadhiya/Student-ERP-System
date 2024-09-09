import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.34.254:8080",
});

export default api;

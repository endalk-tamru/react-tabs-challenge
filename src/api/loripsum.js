import axios from "axios";

// export const BASE_URL = "https://loripsum.net/api";
export const BASE_URL = "/api"; // The root URL is configured in package.json as a proxy to address CORS issues.

export const fetchFirstTabText = () =>
  axios.get(`${BASE_URL}/3/plaintext`).then((res) => res.data);

export const fetchSecondTabText = () =>
  axios.get(`${BASE_URL}/2/plaintext`).then((res) => res.data);

export const fetchThirdTabText = () =>
  axios.get(`${BASE_URL}/medium/plaintext`).then((res) => res.data);

export const fetchFourthTabText = () =>
  axios.get(`${BASE_URL}/plaintext`).then((res) => res.data);

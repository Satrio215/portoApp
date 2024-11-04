import axios from "axios";

export const url = "http://localhost:8000/api/";

export const apiPengalaman = () => axios.get(url + "pengalamans");

export const apiProjek = () => axios.get(url + "projeks");

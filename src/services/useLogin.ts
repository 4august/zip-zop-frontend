import api from "../config/api";
import type { LoginDto } from "../interfaces/LoginDto";

export default async function useLogin(formData : LoginDto) {

    const { data } = await api.post("/login", formData);

    sessionStorage.setItem("token", data.access_token)
}
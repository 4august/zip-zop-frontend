import api from "../config/api";
import type { Profile } from "../interfaces/ProfileDto";

export default async function useProfile() {

    const { data } = await api.get<Profile>("/usuario/profile")

    return data
}



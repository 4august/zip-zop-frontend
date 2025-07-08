import type { useRouter } from "vue-router"

export default function logout(router: ReturnType<typeof useRouter>) {

    
    sessionStorage.removeItem("token")
    router.push("/login")
}
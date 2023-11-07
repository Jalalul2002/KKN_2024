import AuthRoute from "@/components/AuthRoute"
import { Data } from "@/components/mahasiswa/Data"
import Link from "next/link"

export default function display() {
    return(
        <div>
            <AuthRoute>
                <Data/> <br/>
                <Link href="/mahasiswa/protected">Protected</Link>
            </AuthRoute>
        </div>
    )
}
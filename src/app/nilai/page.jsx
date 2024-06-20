'use client'

import MainLayoutPage from "@/components/mainLayout"
import { M_Siswa_getAll } from "@/models/M_Siswa"
import { useEffect } from "react"

export default function NilaiPage() {

    const getSiswa = async () => {
        await M_Siswa_getAll()
    }

    useEffect(() => {
        getSiswa()
    }, [])

    return (
        <MainLayoutPage>
            <div className="">
                Test
            </div>
        </MainLayoutPage>
    )
}
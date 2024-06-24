'use client'

import MainLayoutPage from "@/components/mainLayout"
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"

export default function NotFound() {
    const router = useRouter()
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full md:w-1/2">
                <div className="flex items-center justify-center">
                    <div className="w-20 h-20 md:w-40 md:h-40  rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faXmark} className="text-inherit w-10 h-10 md:w-20 md:h-20 " />
                    </div>
                </div>
                <hr className="my-3 opacity-0" />
                <h1 className="text-center md:text-3xl font-bold opacity-70">
                    Halaman Tidak Ditemukan
                </h1>
                <hr className="my-1 opacity-0" />
                <div className="flex justify-center w-full">
                    <button type="button" onClick={() => router.back()} className="px-3 py-2 rounded-full bg-zinc-200 hover:bg-zinc-300 flex items-center justify-center gap-3">
                        <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3 text-inherit" />
                        Kembali
                    </button>
                </div>
            </div>
        </div>
    )
}
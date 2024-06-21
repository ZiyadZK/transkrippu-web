'use client'

import MainLayoutPage from "@/components/mainLayout"
import { faDownload, faEdit, faFile, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AkunPage() {
    return (
        <MainLayoutPage>
            <div className="text-xs md:text-sm no-scrollbar">
                <div className="flex items-center gap-5 w-full md:w-fit text-xs md:text-sm">
                    <button type="button" className="w-full md:w-fit px-3 py-2 rounded border dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-3 font-medium ease-out duration-300">
                        <FontAwesomeIcon icon={faPlus} className="w-3 h-3 text-inherit opacity-70" />
                        Tambah
                    </button>
                    <button type="button" className="w-full md:w-fit px-3 py-2 rounded border dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-3 font-medium  ease-out duration-300">
                        <FontAwesomeIcon icon={faDownload} className="w-3 h-3 text-inherit  opacity-70" />
                        Import
                    </button>
                </div>
                <hr className="my-5 dark:opacity-10" />
                <div className="grid grid-cols-12 p-3 rounded-lg border dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
                    <div className="col-span-7 md:col-span-2 flex items-center gap-3">
                        <input type="checkbox" className="cursor-pointer" />
                        Nama Pegawai
                    </div>
                    <div className="col-span-2 hidden md:flex items-center gap-3">
                        ID Pegawai
                    </div>
                    <div className="col-span-2 hidden md:flex items-center gap-3">
                        Email
                    </div>
                    <div className="col-span-2 hidden md:flex items-center gap-3">
                        Password
                    </div>
                    <div className="col-span-2 hidden md:flex items-center gap-3">
                        Role
                    </div>
                    <div className="col-span-5 md:col-span-2 flex items-center gap-3">
                        <input type="text" className="w-full dark:bg-zinc-900 bg-white px-2 py-1 rounded border dark:border-zinc-700" placeholder="Cari disini" />
                    </div>
                </div>
                <div className="py-3 relative overflow-auto w-full max-h-[500px]">
                    <div className="grid grid-cols-12 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 ease-out duration-300">
                        <div className="col-span-7 md:col-span-2 flex items-center gap-3">
                            <input type="checkbox" className="cursor-pointer" />
                            Ziyad Jahizh Kartiwa
                        </div>
                        <div className="col-span-2 hidden md:flex items-center gap-3">
                            <p className="px-2 py-0.5 rounded-full dark:bg-zinc-700 text-xs bg-zinc-100">
                                121
                            </p>
                        </div>
                        <div className="col-span-2 hidden md:flex items-center gap-3">
                            kakangtea74@gmail.com
                        </div>
                        <div className="col-span-2 hidden md:flex items-center gap-3">
                            ziyadzk207a
                        </div>
                        <div className="col-span-2 hidden md:flex items-center gap-3">
                            <p className="px-2 py-0.5 rounded-full bg-red-500 text-white dark:bg-red-500/10 dark:text-red-500">
                                Admin
                            </p>
                        </div>
                        <div className="col-span-5 md:col-span-2 flex items-center justify-center gap-3">
                            <button type="button" className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500/50 hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-500 ease-out duration-200">
                                <FontAwesomeIcon icon={faFile} className="w-3 h-3 text-inherit" />
                            </button>
                            <button type="button" className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-amber-500 dark:hover:border-amber-500/50 hover:bg-amber-100 dark:hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-500 ease-out duration-200">
                                <FontAwesomeIcon icon={faEdit} className="w-3 h-3 text-inherit" />
                            </button>
                            <button type="button" className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-red-500 dark:hover:border-red-500/50 hover:bg-red-100 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-500 ease-out duration-200">
                                <FontAwesomeIcon icon={faTrash} className="w-3 h-3 text-inherit" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </MainLayoutPage>
    )
}
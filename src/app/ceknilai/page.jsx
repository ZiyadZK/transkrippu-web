'use client'

import { faEdit, faFile, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


export default function CekNilaiPage() {

    const [tab, setTab] = useState('tabel')

    return (
        <div className="bg-zinc-100 w-full min-h-screen">
            <div className="w-full dark:bg-zinc-950 relative flex items-center justify-center overflow-auto p-5 md:p-0 text-zinc-700 dark:text-zinc-100">
                <div className="w-full max-w-[1300px] pt-20">
                    <div className="flex justify-center">
                        <div className="flex items-center divide-x dark:divide-zinc-700">
                            <Link href={'/'} className="flex items-center gap-3 pr-5">
                                <Image src={'/logo-sekolah-2.png'} width={30} height={30} alt="Logo Sekolah" />
                                <h1 className="font-bold tracking-tighter block text-xl md:text-2xl">
                                    SI<span className="text-red-500">Tran</span><span className="text-violet-500">skrip</span>
                                </h1>
                            </Link>
                            <div className="pl-5">
                                <h1 className="font-bold text-lg md:text-2xl text-center">
                                    Cek Nilai Siswa
                                </h1>
                            </div>
                        </div>
                    </div>

                    <hr className="my-5 opacity-0" />

                    <div className="flex items-center justify-center">
                        <div className="w-full md:w-1/2 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 space-y-3">
                            <div className="flex flex-col md:flex-row md:items-center gap-1">
                                <p className="w-full md:w-1/3">
                                    Masukkan NIS
                                </p>
                                <div className="w-full md:w-2/3">
                                    <input type="text" className="w-full px-3 py-2 rounded-md border" placeholder="NIS Siswa" />
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="hidden md:block w-1/3"></div>
                                <div className="w-full md:w-2/3">
                                    <button className="w-full md:w-fit px-3 py-2 rounded-md hover:bg-rose-500 focus:bg-rose-700 flex items-center justify-center gap-3 bg-rose-600 text-white">
                                        <FontAwesomeIcon icon={faSearch} className="w-3 h-3 text-inherit" />
                                        Cari Data
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr className="my-5 opacity-0" />
                    <div className="w-full relative flex flex-col md:flex-row md:gap-5 gap-2">
                        <div className="w-full md:w-1/5 p-5 h-full sticky">
                            <div className="flex md:flex-col flex-row  gap-2 sticky top-0">
                                <button type="button" disabled={tab === 'tabel'} onClick={() => setTab('tabel')} className={`rounded-md hover:bg-zinc-200 ${tab === 'tabel' ? 'text-inherit' : 'text-zinc-400'} w-full md:text-start px-4 py-2`}>
                                    Tabel Nilai
                                </button>
                                
                                <button type="button" disabled={tab === 'grafik'} onClick={() => setTab('grafik')} className={` rounded-md hover:bg-zinc-200 ${tab === 'grafik' ? 'text-inherit' : 'text-zinc-400'}  w-full md:text-start  px-3 py-2`}>
                                    Grafik Nilai
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-4/5 p-5 bg-white border rounded-lg">
                            {tab === 'tabel' && (
                                <>
                                    <div className="hidden md:grid grid-cols-11 border-b dark:border-zinc-700 *:px-3 *:py-2 divide-x dark:divide-zinc-700 text-xs">
                                        <div className="col-span-3"></div>
                                        <div className="col-span-6 flex items-center justify-center font-medium">
                                            SEMESTER
                                        </div>
                                        <div className="col-span-1"></div>
                                    </div>
                                    <div className="grid grid-cols-11 divide-x dark:divide-zinc-700 border-b dark:border-zinc-700 border-t md:border-t-0 text-xs">
                                        <div className="col-span-9 md:col-span-3 font-medium px-3  flex items-center py-2">
                                            MATA PELAJARAN
                                        </div>
                                        <div className="col-span-1 hidden md:flex items-center justify-center font-medium px-3 py-2">
                                            1
                                        </div>
                                        <div className="col-span-1 hidden md:flex items-center justify-center font-medium px-3 py-2">
                                            2
                                        </div>
                                        <div className="col-span-1 hidden md:flex items-center justify-center font-medium px-3 py-2">
                                            3
                                        </div>
                                        <div className="col-span-1 hidden md:flex items-center justify-center font-medium px-3 py-2">
                                            4
                                        </div>
                                        <div className="col-span-1 hidden md:flex items-center justify-center font-medium px-3 py-2">
                                            5
                                        </div>
                                        <div className="col-span-1 hidden md:flex items-center justify-center font-medium px-3 py-2">
                                            6
                                        </div>
                                        <div className="col-span-1 hidden md:flex items-center justify-center font-medium px-3  text-center py-2">
                                            Nilai Rata - rata Rapor
                                        </div>
                                        <div className="col-span-1 hidden md:flex items-center justify-center font-medium px-3  text-center py-2">
                                            Nilai Ujian Sekolah
                                        </div>
                                        <div className="col-span-2 flex md:hidden items-center justify-center font-medium px-3 py-2"></div>
                                    </div>
                                    <div className="divide-y dark:divide-zinc-700 border-b dark:border-zinc-700 text-sm">
                                        {Array.from({ length: 24}).map((_, index) => (
                                            <div key={index} className="grid grid-cols-11 py-3 px-3 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                                                <div className="col-span-10 md:col-span-3 flex items-center">
                                                    Bahasa Indonesia
                                                </div>
                                                <div className="col-span-1 hidden md:flex items-center justify-center">
                                                    <p className="p-1 rounded border bg-zinc-50 dark:border-zinc-700 dark:bg-black font-medium">
                                                        87.9
                                                    </p>
                                                </div>
                                                <div className="col-span-1 hidden md:flex items-center justify-center">
                                                    <p className="p-1 rounded border bg-zinc-50 dark:border-zinc-700 dark:bg-black font-medium">
                                                        87.9
                                                    </p>
                                                </div>
                                                <div className="col-span-1 hidden md:flex items-center justify-center">
                                                    <p className="p-1 rounded border bg-zinc-50 dark:border-zinc-700 dark:bg-black font-medium">
                                                        87.9
                                                    </p>
                                                </div>
                                                <div className="col-span-1 hidden md:flex items-center justify-center">
                                                    <p className="p-1 rounded border bg-zinc-50 dark:border-zinc-700 dark:bg-black font-medium">
                                                        87.9
                                                    </p>
                                                </div>
                                                <div className="col-span-1 hidden md:flex items-center justify-center">
                                                    <p className="p-1 rounded border bg-zinc-50 dark:border-zinc-700 dark:bg-black font-medium">
                                                        87.9
                                                    </p>
                                                </div>
                                                <div className="col-span-1 hidden md:flex items-center justify-center">
                                                    <p className="p-1 rounded border bg-zinc-50 dark:border-zinc-700 dark:bg-black font-medium">
                                                        87.9
                                                    </p>
                                                </div>
                                                <div className="col-span-1 hidden md:flex items-center justify-center">
                                                    <p className="p-1 rounded border bg-zinc-50 dark:border-zinc-700 dark:bg-black font-medium">
                                                        87.9
                                                    </p>
                                                </div>
                                                <div className="col-span-1 hidden md:flex items-center justify-center">
                                                    <p className="p-1 rounded border bg-zinc-50 dark:border-zinc-700 dark:bg-black font-medium">
                                                        87.9
                                                    </p>
                                                </div>
                                                <div className="flex md:hidden items-center justify-center gap-1 md:gap-3 col-span-1">
                                                    <button type="button" className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex md:hidden items-center justify-center hover:border-blue-500 dark:hover:border-blue-500/50 hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-500 ease-out duration-200">
                                                        <FontAwesomeIcon icon={faSearch} className="w-3 h-3 text-inherit" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
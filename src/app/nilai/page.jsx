'use client'

import MainLayoutPage from "@/components/mainLayout"
import { faAnglesLeft, faAnglesRight, faCheckSquare, faDownload, faEdit, faFile, faFilter, faHandPointUp, faHandPointer, faPlus, faPowerOff, faPrint, faSave, faSearch, faTrash, faTriangleExclamation, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"

export default function NilaiPage() {

    const ref_modal_tambah = useRef(null)

    const [dataSiswa, setDataSiswa] = useState([])
    const [filterDataSiswa, setFilterDataSiswa] = useState({
        kelas: [], jurusan: [], rombel: [], tahun_masuk: []
    })

    return (
        <MainLayoutPage>
            <div className="p-5 border dark:border-zinc-800 bg-white dark:bg-zinc-900 md:rounded-xl rounded-md">
                <div className="text-xs">
                    <button type="button" className="w-full md:w-fit px-3 py-2 rounded border dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-3 font-medium ease-out duration-300">
                        <FontAwesomeIcon icon={faDownload} className="w-3 h-3 text-inherit opacity-70" />
                        Import
                    </button>
                    <hr className="my-5 dark:opacity-10" />
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faFilter} className="w-3 h-3 text-inherit" />
                        Filter Data
                    </div>
                    <hr className="my-1 opacity-0" />
                    <div className="flex md:flex-row flex-col gap-3">
                        <FontAwesomeIcon icon={faFilter} className="w-3 h-3 text-inherit opacity-0 hidden md:block" />
                        <div className="space-y-3 w-full">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
                                <div className="w-full md:w-1/6 opacity-60">
                                    Kelas
                                </div>
                                <div className="w-full md:w-5/6 flex items-center gap-2 relative overflow-auto">
                                    <button type="button" className="flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md hover:bg-zinc-800">
                                        TEST 123 INI KATEGORI
                                    </button>
                                    <button type="button" className="flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md hover:bg-zinc-800">
                                        TEST 123 INI KATEGORI
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
                                <div className="w-full md:w-1/6 opacity-60">
                                    Jurusan
                                </div>
                                <div className="w-full md:w-5/6 flex items-center gap-2 relative overflow-auto">
                                    <button type="button" className="flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md hover:bg-zinc-800">
                                        TEST 123 INI KATEGORI
                                    </button>
                                    <button type="button" className="flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md hover:bg-zinc-800">
                                        TEST 123 INI KATEGORI
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
                                <div className="w-full md:w-1/6 opacity-60">
                                    Rombel
                                </div>
                                <div className="w-full md:w-5/6 flex items-center gap-2 relative overflow-auto">
                                    <button type="button" className="flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md hover:bg-zinc-800">
                                        Aktif
                                    </button>
                                    <button type="button" className="flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md hover:bg-zinc-800">
                                        Tidak Aktif
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
                                <div className="w-full md:w-1/6 opacity-60">
                                    Tahun Lulus
                                </div>
                                <div className="w-full md:w-5/6 flex items-center gap-2 relative overflow-auto">
                                    <button type="button" className="flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md hover:bg-zinc-800">
                                        Aktif
                                    </button>
                                    <button type="button" className="flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md hover:bg-zinc-800">
                                        Tidak Aktif
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <hr className="my-3 dark:opacity-10" />
                    <div className="p-3 rounded-lg border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800">
                        
                        <div className="grid grid-cols-12">
                            <div className="col-span-7 md:col-span-4 flex items-center gap-3">
                                <input type="checkbox" />
                                Nama Siswa
                            </div>
                            <div className="col-span-2 hidden md:flex items-center">
                                NISN / NIS
                            </div>
                            <div className="hidden md:flex items-center col-span-2">
                                Kelas
                            </div>
                            <div className="hidden md:flex items-center col-span-2">
                                Tahun Lulus
                            </div>
                            <div className="col-span-5 md:col-span-2 flex items-center">
                                <input type="text" className="w-full px-2 py-1 rounded dark:bg-zinc-700 bg-white border dark:border-zinc-600" placeholder="Cari" />
                            </div>
                        </div>
                    </div>

                    <div className="py-3 relative w-full overflow-auto max-h-[500px]">
                        {Array.from({ length: 10}).map((_, index) => (
                            <div key={index} className="grid grid-cols-12 p-3 w-full dark:hover:bg-zinc-800 hover:bg-zinc-100 rounded group">
                                <div className="col-span-7 md:col-span-4 flex items-center gap-3">
                                    <input type="checkbox" />
                                    Ziyad Jahizh Kartiwa
                                </div>
                                <div className="col-span-2 hidden md:flex items-center">
                                    12121212 / 1212121
                                </div>
                                <div className="col-span-2 hidden md:flex items-center">
                                    XII TKJ 2
                                </div>
                                <div className="col-span-2 hidden md:flex items-center">
                                    2022
                                </div>
                                <div className="col-span-5 md:col-span-2 flex items-center justify-center gap-1 md:gap-3">
                                    <button type="button" className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex md:hidden items-center justify-center hover:border-blue-500 dark:hover:border-blue-500/50 hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-500 ease-out duration-200">
                                        <FontAwesomeIcon icon={faFile} className="w-3 h-3 text-inherit" />
                                    </button>
                                    <button type="button" className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-teal-500 dark:hover:border-teal-500/50 hover:bg-teal-100 dark:hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-500 ease-out duration-200">
                                        <FontAwesomeIcon icon={faSearch} className="w-3 h-3 text-inherit" />
                                    </button>
                                    <button type="button" className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500/50 hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-500 ease-out duration-200">
                                        <FontAwesomeIcon icon={faPrint} className="w-3 h-3 text-inherit" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <hr className="my-2 opacity-0" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-xs">
                        <div className="flex p-3 rounded-md border dark:border-zinc-700 items-center w-full md:w-fit divide-x dark:divide-zinc-700 justify-between md:justify-start">
                            <div className="flex items-center gap-2 pr-3  w-full md:w-fit">
                                <FontAwesomeIcon icon={faCheckSquare} className="w-3 h-3 text-inherit" />
                                3 Data
                            </div>
                            <div className="flex items-center justify-center w-full md:w-fit gap-3 px-3">
                                <button type="button" className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500/50 hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-500 ease-out duration-200">
                                    <FontAwesomeIcon icon={faPrint} className="w-3 h-3 text-inherit" />
                                </button>
                            </div>
                            <p className="pl-3  w-full md:w-fit">
                                Total 12 Data
                            </p>
                        </div>
                        <div className="flex p-3 rounded-md border dark:border-zinc-700 items-center w-full md:w-fit divide-x dark:divide-zinc-700 justify-between md:justify-start">
                            <div className="flex items-center gap-2 pr-3  w-full md:w-fit">
                                <button type="button" className="w-5 h-5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faAnglesLeft} className="w-3 h-3 text-inherit" />
                                </button>
                                1
                                <button type="button" className="w-5 h-5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faAnglesRight} className="w-3 h-3 text-inherit" />
                                </button>
                            </div>
                            <div className="flex items-center gap-2 pl-3  w-full md:w-fit">
                                <select className="select select-bordered w-full select-sm dark:bg-zinc-800 bg-zinc-100">
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-3 opacity-0" />
            <div className="flex gap-5 items-center p-3 border rounded-lg dark:border-zinc-700 w-fit text-xs shadow-md dark:shadow-white/20 shadow-black/20 bg-white dark:bg-transparent">
                <FontAwesomeIcon icon={faTriangleExclamation} className="w-4 h-4 text-inherit" />
                <p>
                    Anda harus memilih <b>Data Siswa</b> terlebih dahulu untuk melihat Rekapan Nilai
                </p>
            </div>
            <hr className="my-3 opacity-0" />

            <div className="p-5 border relative dark:border-zinc-800 bg-white dark:bg-zinc-900 md:rounded-xl rounded-md text-xs">
                <h1 className="text-xl md:text-3xl font-medium">
                    ZIYAD JAHIZH KARTIWA
                </h1>
                <hr className="my-3 dark:opacity-10" />
                <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-2">
                    <div className="flex items-center gap-2 w-full">
                        <button type="button" onClick={() => document.getElementById('tambah_nilai').showModal()} className="w-full md:w-fit px-3 py-2 rounded border dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-3 font-medium ease-out duration-300">
                            <FontAwesomeIcon icon={faPlus} className="w-3 h-3 text-inherit opacity-70" />
                            Tambah Nilai
                        </button>
                        <dialog ref={ref_modal_tambah} id="tambah_nilai" className="modal bg-gradient-to-t dark:from-zinc-950 from-zinc-50">
                            <div className="modal-box bg-white dark:bg-zinc-900 rounded  border dark:border-zinc-800 md:max-w-[900px]">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Tambah Nilai</h3>
                                <hr className="my-1 opacity-0" />
                                <p className="opacity-70">
                                    Nilai dibawah ini ditujukan untuk <span className="font-bold opacity-100">Ziyad Jahizh K</span>
                                </p>
                                <hr className="my-3 dark:opacity-10" />
                                <div className="flex flex-col md:flex-row gap-2 md:gap-5">
                                    <div className="w-full md:w-1/3">
                                        <input type="text" className="w-full px-2 py-1 rounded-md border dark:border-zinc-700 dark:bg-zinc-800" placeholder="Cari dan Pilih Mata Pelajaran" />
                                        <hr className="my-1 opacity-0" />
                                        <div className="relative w-full space-y-1 max-h-[200px] overflow-auto">
                                            {Array.from({ length: 15}).map((_, index) => (
                                                <div key={index} className="p-3 rounded-md border dark:border-zinc-700 hover:border-zinc-700 dark:hover:border-zinc-400 ease-out duration-300 flex items-center justify-between">
                                                    <p>
                                                        Matematika
                                                    </p>
                                                    <input type="radio" name="radio_tambah_nilai_mapel" className="cursor-pointer radio radio-xs border dark:border-zinc-100" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <div className="divide-y divide-zinc-300 dark:divide-zinc-700 w-full">
                                            <div className="flex flex-col md:flex-row md:items-center gap-1 w-full pt-1 pb-3">
                                                <p className="w-full md:w-1/3 opacity-70">
                                                    ID Mata Pelajaran
                                                </p>
                                                <p className="w-full md:w-2/3">
                                                    1
                                                </p>
                                            </div>
                                            <div className="flex flex-col md:flex-row md:items-center gap-1 w-full  py-3">
                                                <p className="w-full md:w-1/3 opacity-70">
                                                    Nama Mata Pelajaran
                                                </p>
                                                <p className="w-full md:w-2/3">
                                                    Bahasa Indonesia
                                                </p>
                                            </div>
                                            <div className="flex flex-col md:flex-row md:items-center gap-1 w-full  py-3">
                                                <p className="w-full md:w-1/3 opacity-70">
                                                    Kategori Mata Pelajaran
                                                </p>
                                                <p className="w-full md:w-2/3">
                                                    ABC ABC ABAC ABC ACBA
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 *:p-2 border dark:border-zinc-700 divide-y dark:divide-zinc-700">
                                            <div className="col-span-6 flex justify-center items-center font-bold">
                                                Semester
                                            </div>
                                            <div className="col-span-1 flex justify-center items-center font-bold">
                                                1
                                            </div>
                                            <div className="col-span-1 flex justify-center items-center font-bold">
                                                2
                                            </div>
                                            <div className="col-span-1 flex justify-center items-center font-bold">
                                                3
                                            </div>
                                            <div className="col-span-1 flex justify-center items-center font-bold">
                                                4
                                            </div>
                                            <div className="col-span-1 flex justify-center items-center font-bold">
                                                5
                                            </div>
                                            <div className="col-span-1 flex justify-center items-center font-bold">
                                                6
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 divide-x dark:divide-zinc-700 border-x border-b dark:border-zinc-700">
                                            <div className="col-span-1 flex justify-center items-center">
                                                <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                            </div>
                                            <div className="col-span-1 flex justify-center items-center">
                                                <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                            </div>
                                            <div className="col-span-1 flex justify-center items-center">
                                                <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                            </div>
                                            <div className="col-span-1 flex justify-center items-center">
                                                <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                            </div>
                                            <div className="col-span-1 flex justify-center items-center">
                                                <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                            </div>
                                            <div className="col-span-1 flex justify-center items-center">
                                                <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                            </div>
                                        </div>
                                        <hr className="my-1 opacity-0" />
                                        <button type="button" className="px-3 py-2 rounded-md flex items-center gap-3 w-full md:w-fit justify-center bg-green-500 hover:bg-green-400 focus:bg-green-600 text-white">
                                            <FontAwesomeIcon icon={faSave} className="w-3 h-3 text-inherit" />
                                            Simpan
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </dialog>
                        <button type="button" className="w-full md:w-fit px-3 py-2 rounded border dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-3 font-medium ease-out duration-300">
                            <FontAwesomeIcon icon={faPrint} className="w-3 h-3 text-inherit opacity-70" />
                            Print
                        </button>
                    </div>
                    <button type="button" className="w-full md:w-fit px-3 py-2 rounded border dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-3 font-medium ease-out duration-300">
                        <FontAwesomeIcon icon={faXmark} className="w-3 h-3 text-inherit opacity-70" />
                        Batal
                    </button>
                </div>
                <hr className="my-3 opacity-0" />
                <div className="hidden md:grid grid-cols-12 border-b dark:border-zinc-700 *:px-3 *:py-2 divide-x dark:divide-zinc-700">
                    <div className="col-span-3"></div>
                    <div className="col-span-6 flex items-center justify-center font-extrabold">
                        SEMESTER
                    </div>
                    <div className="col-span-3"></div>
                </div>
                <div className="grid grid-cols-12 divide-x dark:divide-zinc-700 border-b dark:border-zinc-700 border-t md:border-t-0">
                    <div className="col-span-7 md:col-span-3 font-bold px-3 py-2 flex items-center">
                        MATA PELAJARAN
                    </div>
                    <div className="col-span-1 hidden md:flex items-center justify-center font-extrabold px-3 py-2">
                        1
                    </div>
                    <div className="col-span-1 hidden md:flex items-center justify-center font-extrabold px-3 py-2">
                        2
                    </div>
                    <div className="col-span-1 hidden md:flex items-center justify-center font-extrabold px-3 py-2">
                        3
                    </div>
                    <div className="col-span-1 hidden md:flex items-center justify-center font-extrabold px-3 py-2">
                        4
                    </div>
                    <div className="col-span-1 hidden md:flex items-center justify-center font-extrabold px-3 py-2">
                        5
                    </div>
                    <div className="col-span-1 hidden md:flex items-center justify-center font-extrabold px-3 py-2">
                        6
                    </div>
                    <div className="col-span-1 hidden md:flex items-center justify-center font-extrabold px-3 py-2 text-center">
                        Nilai Rata - rata Rapor
                    </div>
                    <div className="col-span-1 hidden md:flex items-center justify-center font-extrabold px-3 py-2 text-center">
                        Nilai Ujian Sekolah
                    </div>
                    <div className="col-span-5 md:col-span-1 flex items-center justify-center font-extrabold px-3 py-2"></div>
                </div>
                <div className="divide-y dark:divide-zinc-700 border-b dark:border-zinc-700">
                    {Array.from({ length: 24}).map((_, index) => (
                        <div key={index} className="grid grid-cols-12  *:px-3 *:py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                            <div className="col-span-7 md:col-span-3 flex items-center">
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
                            <div className="flex items-center justify-center gap-1 md:gap-3 col-span-5 md:col-span-1">
                                <button type="button" className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex md:hidden items-center justify-center hover:border-blue-500 dark:hover:border-blue-500/50 hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-500 ease-out duration-200">
                                    <FontAwesomeIcon icon={faFile} className="w-3 h-3 text-inherit" />
                                </button>
                                <button type="button" onClick={() => document.getElementById(`ubah_nilai_${index}`).showModal()} className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-amber-500 dark:hover:border-amber-500/50 hover:bg-amber-100 dark:hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-500 ease-out duration-200">
                                    <FontAwesomeIcon icon={faEdit} className="w-3 h-3 text-inherit" />
                                </button>
                                <dialog id={`ubah_nilai_${index}`} className="modal bg-gradient-to-t dark:from-zinc-950 from-zinc-50">
                                    <div className="modal-box bg-white dark:bg-zinc-900 rounded  border dark:border-zinc-800 md:max-w-[700px]">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">Ubah Nilai</h3>
                                        <hr className="my-1 opacity-0" />
                                        <p className="opacity-70">
                                            Nilai dibawah ini ditujukan untuk <span className="font-bold opacity-100">Ziyad Jahizh K</span>
                                        </p>
                                        <hr className="my-3 dark:opacity-10" />
                                        <div className="flex flex-col md:flex-row gap-2 md:gap-5">
                                            <div className="w-full">
                                                <div className="divide-y divide-zinc-300 dark:divide-zinc-700 w-full">
                                                    <div className="flex flex-col md:flex-row md:items-center gap-1 w-full pt-1 pb-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            ID Mata Pelajaran
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            1
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col md:flex-row md:items-center gap-1 w-full  py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Nama Mata Pelajaran
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            Bahasa Indonesia
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col md:flex-row md:items-center gap-1 w-full  py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Kategori Mata Pelajaran
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            ABC ABC ABAC ABC ACBA
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-6 *:p-2 border dark:border-zinc-700 divide-y dark:divide-zinc-700">
                                                    <div className="col-span-6 flex justify-center items-center font-bold">
                                                        Semester
                                                    </div>
                                                    <div className="col-span-1 flex justify-center items-center font-bold">
                                                        1
                                                    </div>
                                                    <div className="col-span-1 flex justify-center items-center font-bold">
                                                        2
                                                    </div>
                                                    <div className="col-span-1 flex justify-center items-center font-bold">
                                                        3
                                                    </div>
                                                    <div className="col-span-1 flex justify-center items-center font-bold">
                                                        4
                                                    </div>
                                                    <div className="col-span-1 flex justify-center items-center font-bold">
                                                        5
                                                    </div>
                                                    <div className="col-span-1 flex justify-center items-center font-bold">
                                                        6
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-6 divide-x dark:divide-zinc-700 border-x border-b dark:border-zinc-700">
                                                    <div className="col-span-1 flex justify-center items-center">
                                                        <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                                    </div>
                                                    <div className="col-span-1 flex justify-center items-center">
                                                        <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                                    </div>
                                                    <div className="col-span-1 flex justify-center items-center">
                                                        <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                                    </div>
                                                    <div className="col-span-1 flex justify-center items-center">
                                                        <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                                    </div>
                                                    <div className="col-span-1 flex justify-center items-center">
                                                        <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                                    </div>
                                                    <div className="col-span-1 flex justify-center items-center">
                                                        <input type="text" className="w-full text-center p-2 bg-transparent" placeholder="...." />
                                                    </div>
                                                </div>
                                                <hr className="my-1 opacity-0" />
                                                <button type="button" className="px-3 py-2 rounded-md flex items-center gap-3 w-full md:w-fit justify-center bg-green-500 hover:bg-green-400 focus:bg-green-600 text-white">
                                                    <FontAwesomeIcon icon={faSave} className="w-3 h-3 text-inherit" />
                                                    Simpan
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </dialog>
                                <button type="button" className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-red-500 dark:hover:border-red-500/50 hover:bg-red-100 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-500 ease-out duration-200">
                                    <FontAwesomeIcon icon={faTrash} className="w-3 h-3 text-inherit" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hidden md:grid grid-cols-12 *:px-3 *:py-4 divide-x dark:divide-zinc-700 border-b dark:border-zinc-700">
                    <div className="col-span-9 flex items-center justify-end font-medium">
                        Rata - rata
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                        <p className="p-1 rounded border bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 font-medium">
                            87.9
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                        <p className="p-1 rounded border bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 font-medium">
                            87.9
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center justify-center"></div>
                </div>
                <div className="flex md:hidden justify-end items-center px-3 py-4">
                    <button type="button" className="w-fit px-3 py-2 rounded border dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-3 font-medium ease-out duration-300">
                        <FontAwesomeIcon icon={faSearch} className="w-3 h-3 text-inherit opacity-70" />
                        Cek Total Rata - rata
                    </button>
                </div>
            </div>
        </MainLayoutPage>
    )
}
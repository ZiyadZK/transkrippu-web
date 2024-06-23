'use client'

import MainLayoutPage from "@/components/mainLayout"
import { faAnglesLeft, faAnglesRight, faCheckSquare, faEdit, faFile, faFilter, faPlus, faPowerOff, faSave, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MataPelajaranPage() {
    return (
        <MainLayoutPage>
            <div className="p-5 border dark:border-zinc-800 bg-white dark:bg-zinc-900 md:rounded-xl rounded-md">
                <div className="text-xs">
                    <button type="button" onClick={() => document.getElementById('tambah_mapel').showModal()} className="w-full md:w-fit px-3 py-2 rounded border dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-3 font-medium ease-out duration-300">
                        <FontAwesomeIcon icon={faPlus} className="w-3 h-3 text-inherit opacity-70" />
                        Tambah
                    </button>
                    <dialog id="tambah_mapel" className="modal bg-gradient-to-t dark:from-zinc-950 from-zinc-50">
                        <div className="modal-box bg-white dark:bg-zinc-900 md:max-w-[700px] rounded border dark:border-zinc-800">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Tambah Mata Pelajaran</h3>
                            <hr className="my-2 opacity-0" />
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="w-full divide-y h-fit dark:divide-zinc-800 ">
                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                        <p className="w-full md:w-1/3 opacity-70">
                                            Nama
                                        </p>
                                        <div className="w-full md:w-2/3">
                                            <input type="text" placeholder="Nama Mata Pelajaran" className="input input-bordered w-full input-sm dark:bg-zinc-800 bg-zinc-100" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                        <p className="w-full md:w-1/3 opacity-70">
                                            Kategori
                                        </p>
                                        <div className="w-full md:w-2/3">
                                            <input type="text" placeholder="Kategori" className="input input-bordered w-full input-sm dark:bg-zinc-800 bg-zinc-100" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                        <p className="w-full md:w-1/3 opacity-70">
                                            Apakah Induk?
                                        </p>
                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                        Tidak
                                            <input type="checkbox"  className="toggle toggle-success toggle-sm" />
                                            Ya
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                        <p className="w-full md:w-1/3 opacity-70">
                                            Induk dari
                                        </p>
                                        <div className="w-full md:w-2/3">
                                            <select className="select select-bordered w-full select-sm dark:bg-zinc-800 bg-zinc-100">
                                                <option value={''} disabled >-- Pilih Mata Pelajaran --</option>
                                                <option value="Operator">Operator</option>
                                                <option value="Admin">Admin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                        <p className="w-full md:w-1/3 opacity-70">
                                            Apakah Mata Pelajaran?
                                        </p>
                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                            Tidak
                                            <input type="checkbox"  className="toggle toggle-success toggle-sm" />
                                            Ya
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                        <p className="w-full md:w-1/3 opacity-70">
                                            Aktif
                                        </p>
                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                            Tidak
                                            <input type="checkbox"  className="toggle toggle-success toggle-sm" />
                                            Ya
                                        </div>
                                    </div>
                                    
                                    <div className="py-3 px-2">
                                        <button type="button" className="px-3 py-2 rounded bg-green-600 hover:bg-green-400 focus:bg-green-700 flex items-center justify-center w-fit gap-3 text-white">
                                            <FontAwesomeIcon icon={faSave} className="w-3 h-3 text-inherit" />
                                            Simpan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
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
                                    Kategori
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
                                    Induk
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
                                    Status
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
                    <hr className="my-5 dark:opacity-10" />
                    <div className="relative overflow-auto w-full max-h-[400px] text-xs">
                        <div className="grid grid-cols-12 p-3 rounded-lg border dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 sticky top-0 mb-2">
                            <div className="col-span-7 md:col-span-2 flex items-center gap-3">
                                <input type="checkbox" className="cursor-pointer" />
                                Nama
                            </div>
                            <div className="col-span-2 hidden md:flex items-center gap-3">
                                Kategori
                            </div>
                            <div className="col-span-2 hidden md:flex items-center gap-3">
                                Induk
                            </div>
                            <div className="col-span-2 hidden md:flex items-center gap-3">
                                Mata Pelajaran
                            </div>
                            <div className="col-span-2 hidden md:flex items-center gap-3">
                                Status
                            </div>
                            <div className="col-span-5 md:col-span-2 flex items-center gap-3">
                                <input type="text" className="w-full dark:bg-zinc-900 bg-white px-2 py-1 rounded border dark:border-zinc-700" placeholder="Cari disini" />
                            </div>
                        </div>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} className="grid grid-cols-12 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 ease-out duration-300">
                                <div className="col-span-7 md:col-span-2 flex items-center gap-3">
                                    <input type="checkbox" className="cursor-pointer" />
                                    Bahasa Indonesia
                                    <kbd className="kbd kbd-xs dark:bg-zinc-800 border dark:border-zinc-700">
                                        1
                                    </kbd>
                                </div>
                                <div className="col-span-2 hidden md:flex items-center gap-3">
                                    Muatan Nasional
                                </div>
                                <div className="col-span-2 hidden md:flex items-center gap-3">
                                    Sendiri
                                </div>
                                <div className="col-span-2 hidden md:flex items-center gap-1">
                                    <button type="button" className="px-2 py-1 rounded-full bg-red-500 dark:bg-red-500/10 text-white dark:text-red-400 flex items-center justify-center gap-2">
                                        <FontAwesomeIcon icon={faXmark} className="w-3 h-3 text-inherit" />
                                        Tidak
                                    </button>
                                </div>
                                <div className="col-span-2 hidden md:flex items-center gap-3">
                                    <button type="button" className="px-2 py-1 rounded-full bg-red-500 dark:bg-red-500/10 text-white dark:text-red-400 flex items-center justify-center gap-2">
                                        <FontAwesomeIcon icon={faPowerOff} className="w-3 h-3 text-inherit" />
                                        Tidak Aktif
                                    </button>
                                </div>
                                <div className="col-span-5 md:col-span-2 flex items-center justify-center md:gap-3 gap-1">
                                    <button type="button" onClick={() => document.getElementById(`info_mapel_${index}`).showModal()} className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 md:hidden flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500/50 hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-500 ease-out duration-200">
                                        <FontAwesomeIcon icon={faFile} className="w-3 h-3 text-inherit" />
                                    </button>
                                    <dialog id={`info_mapel_${index}`} className="modal bg-gradient-to-t dark:from-zinc-950 from-zinc-50">
                                        <div className="modal-box bg-white dark:bg-zinc-900 rounded  border dark:border-zinc-800">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h3 className="font-bold text-lg">Informasi Akun</h3>
                                            <hr className="my-2 opacity-0" />
                                            <div className="flex flex-col md:flex-row gap-2">
                                                <div className="w-full divide-y h-fit dark:divide-zinc-800 ">
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Nama
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                            ABC 123
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Kategori
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                            ABC 123
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Apakah Induk?
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                            <button type="button" className="px-2 py-1 rounded-full bg-red-500 dark:bg-red-500/10 text-white dark:text-red-400 flex items-center justify-center gap-2">
                                                                <FontAwesomeIcon icon={faXmark} className="w-3 h-3 text-inherit" />
                                                                Tidak
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Induk dari
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                            ABC 123
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Apakah Mata Pelajaran?
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                            <button type="button" className="px-2 py-1 rounded-full bg-red-500 dark:bg-red-500/10 text-white dark:text-red-400 flex items-center justify-center gap-2">
                                                                <FontAwesomeIcon icon={faXmark} className="w-3 h-3 text-inherit" />
                                                                Tidak
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Aktif
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                            <button type="button" className="px-2 py-1 rounded-full bg-red-500 dark:bg-red-500/10 text-white dark:text-red-400 flex items-center justify-center gap-2">
                                                                <FontAwesomeIcon icon={faXmark} className="w-3 h-3 text-inherit" />
                                                                Tidak
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </dialog>
                                    <button type="button" onClick={() => document.getElementById(`edit_akun_${index}`).showModal()} className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-amber-500 dark:hover:border-amber-500/50 hover:bg-amber-100 dark:hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-500 ease-out duration-200">
                                        <FontAwesomeIcon icon={faEdit} className="w-3 h-3 text-inherit" />
                                    </button>
                                    <dialog id={`edit_akun_${index}`} className="modal bg-gradient-to-t dark:from-zinc-950 from-zinc-50">
                                        <div className="modal-box bg-white dark:bg-zinc-900 rounded  border dark:border-zinc-800">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h3 className="font-bold text-lg">Ubah Akun</h3>
                                            <hr className="my-2 opacity-0" />
                                            <div className="flex flex-col md:flex-row gap-2">
                                                <div className="w-full divide-y h-fit dark:divide-zinc-800 ">
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Nama
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                            <input type="text" placeholder="Nama Mata Pelajaran" className="input input-bordered w-full input-sm dark:bg-zinc-800 bg-zinc-100" />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Kategori
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                            <input type="text" placeholder="Kategori" className="input input-bordered w-full input-sm dark:bg-zinc-800 bg-zinc-100" />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Apakah Induk?
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                        Tidak
                                                            <input type="checkbox"  className="toggle toggle-success toggle-sm" />
                                                            Ya
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Induk dari
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                            <select className="select select-bordered w-full select-sm dark:bg-zinc-800 bg-zinc-100">
                                                                <option value={''} disabled >-- Pilih Mata Pelajaran --</option>
                                                                <option value="Operator">Operator</option>
                                                                <option value="Admin">Admin</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Apakah Mata Pelajaran?
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                            Tidak
                                                            <input type="checkbox"  className="toggle toggle-success toggle-sm" />
                                                            Ya
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Aktif
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                            Tidak
                                                            <input type="checkbox"  className="toggle toggle-success toggle-sm" />
                                                            Ya
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="py-3 px-2">
                                                        <button type="button" className="px-3 py-2 rounded bg-green-600 hover:bg-green-400 focus:bg-green-700 flex items-center justify-center w-fit gap-3 text-white">
                                                            <FontAwesomeIcon icon={faSave} className="w-3 h-3 text-inherit" />
                                                            Simpan
                                                        </button>
                                                    </div>
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
                    <hr className="my-2 opacity-0" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-xs">
                        <div className="flex p-3 rounded-md border dark:border-zinc-700 items-center w-full md:w-fit divide-x dark:divide-zinc-700 justify-between md:justify-start">
                            <div className="flex items-center gap-2 pr-3  w-full md:w-fit">
                                <FontAwesomeIcon icon={faCheckSquare} className="w-3 h-3 text-inherit" />
                                3 Data
                            </div>
                            <div className="flex items-center justify-center w-full md:w-fit gap-3 px-3">
                                <button type="button" className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-red-500 dark:hover:border-red-500/50 hover:bg-red-100 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-500 ease-out duration-200">
                                    <FontAwesomeIcon icon={faTrash} className="w-3 h-3 text-inherit" />
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
        </MainLayoutPage>
    )
}
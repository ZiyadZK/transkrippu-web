'use client'

import MainLayoutPage from "@/components/mainLayout"
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight, faCheckSquare, faDownload, faEdit, faFile, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AkunPage() {



    return (
        <MainLayoutPage>
            <div className="p-5 border dark:border-zinc-800 bg-white dark:bg-zinc-900 md:rounded-xl rounded-md">
                <div className="text-xs md:text-sm no-scrollbar">
                    <div className="flex items-center gap-5 w-full md:w-fit text-xs md:text-sm">
                        <button type="button" onClick={() => document.getElementById('tambah_akun').showModal()} className="w-full md:w-fit px-3 py-2 rounded border dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-3 font-medium ease-out duration-300">
                            <FontAwesomeIcon icon={faPlus} className="w-3 h-3 text-inherit opacity-70" />
                            Tambah
                        </button>
                        <dialog id="tambah_akun" className="modal bg-gradient-to-t dark:from-zinc-950 from-zinc-50">
                            <div className="modal-box bg-white dark:bg-zinc-900 rounded md:max-w-[900px] border dark:border-zinc-800">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Tambah Akun</h3>
                                <hr className="my-2 opacity-0" />
                                <div className="flex flex-col md:flex-row gap-2">
                                    <div className="w-full md:w-1/2 space-y-2">
                                        <label className="input input-bordered input-sm flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800">
                                            <input type="text" className="grow" placeholder="Cari pegawai disini" />
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                        </label>
                                        <div className=" py-2 relative overflow-auto max-h-[300px] space-y-1">
                                            {Array.from({ length: 15 }).map((_, index) => (
                                                <label key={index} htmlFor={index} className="flex items-center w-full justify-between p-3 border dark:border-zinc-800 hover:border-zinc-700 dark:hover:border-zinc-400 rounded-lg text-xs cursor-pointer ease-out duration-200 has-[:checked]:border-zinc-400">
                                                    <p>
                                                        Ziyad Jahizh Kartiwa
                                                    </p>
                                                    <div className="flex items-center gap-2">
                                                        <p className="opacity-50">
                                                            PNS
                                                        </p>
                                                        <input type="radio" name="radio" id={index} className="" />
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 divide-y h-fit dark:divide-zinc-800 ">
                                        <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                            <p className="w-full md:w-1/3 opacity-50">
                                                Nama Pegawai
                                            </p>
                                            <p className="w-full md:w-2/3">
                                                Ziyad Jahizh Kartiwa
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                            <p className="w-full md:w-1/3 opacity-50">
                                                ID Pegawai
                                            </p>
                                            <p className="w-full md:w-2/3">
                                                Ziyad Jahizh Kartiwa
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                            <p className="w-full md:w-1/3 opacity-50">
                                                Email
                                            </p>
                                            <p className="w-full md:w-2/3">
                                                <label className="input input-bordered flex items-center gap-2 input-sm dark:bg-zinc-800 bg-zinc-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                                    <input type="text" className="grow" placeholder="Email" />
                                                </label>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                            <p className="w-full md:w-1/3 opacity-50">
                                                Password
                                            </p>
                                            <p className="w-full md:w-2/3">
                                                <label className="input input-bordered flex items-center gap-2 input-sm dark:bg-zinc-800 bg-zinc-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                                    <input type="text" className="grow" placeholder="Password" />
                                                </label>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                            <p className="w-full md:w-1/3 opacity-50">
                                                Role
                                            </p>
                                            <p className="w-full md:w-2/3">
                                                <select className="select select-bordered w-full select-sm dark:bg-zinc-800 bg-zinc-100">
                                                    <option value={''} disabled >-- Pilih Role --</option>
                                                    <option value="Operator">Operator</option>
                                                    <option value="Admin">Admin</option>
                                                </select>
                                            </p>
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
                    </div>
                    <hr className="my-5 dark:opacity-10" />
                    
                    <div className="relative overflow-auto w-full max-h-[400px]">
                        <div className="grid grid-cols-12 p-3 rounded-lg border dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 sticky top-0 mb-2">
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
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} className="grid grid-cols-12 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 ease-out duration-300">
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
                                <div className="col-span-5 md:col-span-2 flex items-center justify-center md:gap-3 gap-1">
                                    <button type="button" onClick={() => document.getElementById(`info_akun_${index}`).showModal()} className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 md:hidden flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500/50 hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-500 ease-out duration-200">
                                        <FontAwesomeIcon icon={faFile} className="w-3 h-3 text-inherit" />
                                    </button>
                                    <dialog id={`info_akun_${index}`} className="modal bg-gradient-to-t dark:from-zinc-950 from-zinc-50">
                                        <div className="modal-box bg-white dark:bg-zinc-900 rounded  border dark:border-zinc-800">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h3 className="font-bold text-lg">Informasi Akun</h3>
                                            <hr className="my-2 opacity-0" />
                                            <div className="flex flex-col md:flex-row gap-2">
                                                <div className="w-full divide-y h-fit dark:divide-zinc-800 ">
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-50">
                                                            Nama Pegawai
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            Ziyad Jahizh Kartiwa
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-50">
                                                            ID Pegawai
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            Ziyad Jahizh Kartiwa
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-50">
                                                            Email
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            <label className="input input-bordered flex items-center gap-2 input-sm dark:bg-zinc-800 bg-zinc-100">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                                                <input disabled type="text" className="grow" placeholder="Email" />
                                                            </label>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-50">
                                                            Password
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            <label className="input input-bordered flex items-center gap-2 input-sm dark:bg-zinc-800 bg-zinc-100">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                                                <input disabled type="text" className="grow" placeholder="Password" />
                                                            </label>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-50">
                                                            Role
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            <select disabled className="select select-bordered w-full select-sm dark:bg-zinc-800 bg-zinc-100">
                                                                <option value={''} disabled >-- Pilih Role --</option>
                                                                <option value="Operator">Operator</option>
                                                                <option value="Admin">Admin</option>
                                                            </select>
                                                        </p>
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
                                                        <p className="w-full md:w-1/3 opacity-50">
                                                            Nama Pegawai
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            Ziyad Jahizh Kartiwa
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-50">
                                                            ID Pegawai
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            Ziyad Jahizh Kartiwa
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-50">
                                                            Email
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            <label className="input input-bordered flex items-center gap-2 input-sm dark:bg-zinc-800 bg-zinc-100">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                                                <input type="text" className="grow" placeholder="Email" />
                                                            </label>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-50">
                                                            Password
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            <label className="input input-bordered flex items-center gap-2 input-sm dark:bg-zinc-800 bg-zinc-100">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                                                <input type="text" className="grow" placeholder="Password" />
                                                            </label>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-50">
                                                            Role
                                                        </p>
                                                        <p className="w-full md:w-2/3">
                                                            <select className="select select-bordered w-full select-sm dark:bg-zinc-800 bg-zinc-100">
                                                                <option value={''} disabled >-- Pilih Role --</option>
                                                                <option value="Operator">Operator</option>
                                                                <option value="Admin">Admin</option>
                                                            </select>
                                                        </p>
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
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
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
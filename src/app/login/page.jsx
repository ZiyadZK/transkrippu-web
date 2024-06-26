'use client'

import { toast } from "@/libs/toast";
import { M_Akun_login } from "@/models/M_Akun";
import { faEnvelope, faEye } from "@fortawesome/free-regular-svg-icons";
import { faKey, faSignIn, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

    const router = useRouter()

    const [loginLoading, setLoginLoading] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const [loginForm, setLoginForm] = useState({
        email: '', password: '', rememberMe: false
    })

    const submitLogin = async (e) => {
        e.preventDefault()

        setLoginLoading(true)
        const response = await M_Akun_login(loginForm['email'], loginForm['password'], loginForm['rememberMe'] ? 5 : 1)
        if(response.success) {
            router.push('/')
        }else{
            setLoginLoading(false)
            toast.fire({
                title: 'Gagal Login!',
                text: response.message,
                icon: 'error',
                timer: 5000,
                timerProgressBar: true
            })
        }
    }

    return (
        <div className="w-full h-screen relative overflow-hidden bg-zinc-50 text-zinc-800">
            <div className="absolute top-0 left-0 w-full flex justify-center z-[1]">
                <div className="w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem] rounded-full bg-red-500 blur-3xl md:blur-[12rem] -translate-y-[50%]"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center z-[1]">
                <div className="w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem] rounded-full bg-violet-500 blur-3xl md:blur-[12rem] translate-y-[50%]"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-screen flex flex-col md:flex-row justify-between md:items-center md:justify-center z-[2]">
                <form onSubmit={submitLogin} className="w-full md:w-1/3 bg-white h-full md:h-fit p-5 md:rounded-2xl md:shadow-2xl flex md:block flex-col md:flex-row justify-between md:items-center md:justify-center">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Image src={'/logo-sekolah-2.png'} width={20} height={20} alt="Logo Sekolah" />
                            <h1 className="font-bold text-xl">
                                SI<span className="text-red-500">Tran</span><span className="text-violet-500">skrip</span>
                            </h1>
                        </div>
                        <div className="text-end text-xs md:text-sm">
                            <p>
                                Sistem Informasi Transkrip
                            </p>
                            <p>
                                SMK Pekerjaan Umum Negeri Bandung
                            </p>
                        </div>
                    </div>
                    <div className="md:my-10 md:px-20 space-y-2">
                        <div className="relative w-full flex justify-center">
                            <input type="text" disabled={loginLoading} required onChange={e => setLoginForm(state => ({...state, email: e.target.value}))} className="w-full rounded-full border border-zinc-100/0 bg-zinc-50 shadow-lg pl-12 pr-3 h-12 placeholder-shown:border-zinc-100 placeholder-shown:shadow-none placeholder-shown:bg-zinc-50/0 transition-all duration-300 outline-none peer" placeholder="Masukkan Email anda" />
                            <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center peer-placeholder-shown:text-zinc-600 text-zinc-400">
                                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-inherit" />
                            </div>
                        </div>
                        <div className="relative w-full flex justify-center">
                            <input disabled={loginLoading} type={`${showPass ? 'text' : 'password'}`} required onChange={e => setLoginForm(state => ({...state, password: e.target.value}))} className="w-full rounded-full border border-zinc-100/0 bg-zinc-50 shadow-lg pl-12 pr-3 h-12 placeholder-shown:border-zinc-100 placeholder-shown:shadow-none placeholder-shown:bg-zinc-50/0 transition-all duration-300 outline-none peer" placeholder="Masukkan Password anda" />
                            <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center peer-placeholder-shown:text-zinc-600 text-zinc-400">
                                <FontAwesomeIcon icon={faKey} className="w-4 h-4 text-inherit" />
                            </div>
                            <button type="button"  onClick={() => setShowPass(state => !state)} className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center peer-placeholder-shown:text-zinc-600 text-zinc-400 rounded-full hover:bg-zinc-200 ease-out duration-150">
                                <FontAwesomeIcon icon={faEye} className="w-4 h-4 text-inherit" />
                            </button>
                        </div>
                        <div className="relative w-full">
                            <div className="flex items-center gap-5 text-xs md:text-sm">
                                <input type="checkbox" checked={loginForm['rememberMe']} onChange={() => setLoginForm(state => ({...state, rememberMe: !state['rememberMe']}))} />
                                Ingat Login saya
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <button type="submit" disabled={loginLoading} className="w-full md:w-1/2 py-2 px-3 rounded-lg bg-violet-500 hover:bg-violet-400 focus:bg-violet-600 text-white flex items-center justify-center gap-3">
                            <FontAwesomeIcon icon={loginLoading ? faSpinner : faSignIn} className={`${loginLoading ? 'w-6 h-6' : 'w-3 h-3'} text-inherit ${loginLoading && 'animate-spin'}`} />
                            <span className={`${loginLoading && 'hidden'}`}>Masuk</span>
                        </button>
                        <button className="w-full md:w-1/2 py-2 px-3 rounded-lg border text-zinc-700 hover:bg-zinc-100 flex items-center justify-center gap-3">
                            <FontAwesomeIcon icon={faSignIn} className="w-3 h-3 text-inherit" />
                            Lupa Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
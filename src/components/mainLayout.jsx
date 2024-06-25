'use client'

import { jakarta } from "@/libs/fonts";
import { M_Akun_getUserdata, M_Akun_logout } from "@/models/M_Akun";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faCog, faHouse, faLayerGroup, faSignOut, faStar, faTimeline, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navLink = [
    { url: '/matapelajaran', title: 'Mata Pelajaran', page: 'Data Mata Pelajaran', icon: faLayerGroup, role: ['Admin']},
    { url: '/nilai', title: 'Nilai', page: 'Data Nilai', icon: faStar, role: ['Admin', 'Operator']},
    { url: '/akun', title: 'Akun', page: 'Data Akun', icon: faUserShield, role: ['Admin']},
    { url: '/riwayat', title: 'Riwayat', page: 'Data Riwayat', icon: faTimeline, role: ['Admin']},
]

const navLinkFull = [
    ...navLink,
    { title: 'Dashboard', icon: faHouse, url: '/', page: 'Dashboard Page', role: ['Operator', 'Admin']}
]

export default function MainLayoutPage({ children }) {

    const router = useRouter()
    const path = usePathname();
    const [filteredPath, setFilteredPath] = useState(null)
    const [loggedAkun, setLoggedAkun] = useState(null)
    const [theme, setTheme] = useState('')

    const getLoggedAkun = async () => {
        const response = await M_Akun_getUserdata()
        if(response.success) {
            setLoggedAkun(response.data)
        }else{
            router.push('/login')
        }
    }

    const getFilteredPath = () => {
        const updatedPath = navLinkFull.find(item => path === item.url || (path.startsWith(item.url) && item.url !== '/'))
        setFilteredPath(!updatedPath ? path : updatedPath)
    }

    const getTheme = () => {
        const themeData = localStorage.getItem('theme') || 'light'
        if(themeData === 'dark') {
            document.body.classList.add('dark')
        }else{
            document.body.classList.remove('dark')
        }

        setTheme(themeData)
    }

    const toggleTheme = () => {
        if(theme === 'dark') {
            localStorage.setItem('theme', 'light')
            document.body.classList.remove('dark')
            setTheme('light')
        }else{
            localStorage.setItem('theme', 'dark')
            document.body.classList.add('dark')
            setTheme('dark')
        }
    }

    useEffect(() => {
        getFilteredPath()
        getTheme()
        getLoggedAkun()
    }, [])

    const [hoveredPath, setHoveredPath] = useState(path)

    const submitLogout = async () => {
        const response = await M_Akun_logout()
        if(response.success) {
            router.push('/login')
        }
    }

    return (
        <div className={`drawer ${jakarta.className} dark:text-zinc-100 text-zinc-700 scrollbar-body`}>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-full bg-zinc-100 dark:bg-zinc-950">
                <div className="px-5 bg-white sticky top-0 dark:bg-zinc-900 border-b border-zinc-300 dark:border-zinc-800 pt-5 space-y-2 z-10">
                    <div className="flex justify-between w-full items-center">
                        <div className="flex items-center divide-x divide-zinc-300 dark:divide-zinc-800">
                            <Link href={'/'} className="flex items-center gap-3 pr-3 md:pr-5">
                                <Image src={'/logo-sekolah-2.png'} width={15} height={15} alt="Logo Sekolah" />
                                <h1 className="font-bold tracking-tighter hidden md:block">
                                    SI<span className="text-red-500">Tran</span><span className="text-violet-500">skrip</span>
                                </h1>
                            </Link> 
                            {!filteredPath ? (
                                <div className="loading loading-spinner loading-sm text-zinc-400 pl-3 md:pl-5 py-3"></div>
                            ):(
                                <div className="pl-3 md:pl-5 flex items-center gap-3">
                                    <FontAwesomeIcon icon={filteredPath.icon} className="w-3 h-3 text-inherit" />
                                    {filteredPath.title}
                                </div>
                            )}
                        </div>
                        {loggedAkun && (
                            <div className="flex items-center gap-3">
                                <div className="hidden md:flex items-center gap-3 ">
                                    {loggedAkun['role_akun'] === 'Admin' && (
                                        <p className="px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-500">
                                            Admin
                                        </p>
                                    )}
                                    {loggedAkun['role_akun'] === 'Operator' && (
                                        <p className="px-2 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-500">
                                            Operator
                                        </p>
                                    )}
                                    <article className="text-end">
                                        <p className="text-xs">
                                            {loggedAkun['email_akun']}
                                        </p>
                                        <p className="text-xs opacity-50">
                                            {loggedAkun['nama_akun']}
                                        </p>
                                    </article>
                                </div>
                                <button type="button" onClick={() => toggleTheme()} className="rounded-full border w-8 h-8 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 hidden md:flex items-center justify-center group text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200">
                                    <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="w-4 h-4 text-inherit group-hover:-rotate-45 transition-all duration-300" />
                                </button>
                                <label htmlFor="my-drawer" className="rounded-full border w-8 h-8 dark:border-zinc-800 hover:bg-zinc-50 transition-all duration-300 dark:hover:bg-zinc-800 flex md:hidden items-center justify-center group text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 drawer-button">
                                    <FontAwesomeIcon icon={faCog} className="w-4 h-4 text-inherit group-hover:-rotate-45 transition-all duration-300" />
                                </label>
                                <button type="button" onClick={() => submitLogout()} className="rounded-full border w-8 h-8 dark:border-zinc-800 hover:bg-zinc-50 transition-all duration-300 dark:hover:bg-zinc-800 hidden md:flex items-center justify-center group text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200">
                                    <FontAwesomeIcon icon={faSignOut} className="w-4 h-4 text-inherit transition-all duration-300" />
                                </button>
                            </div>
                        )}
                    </div>
                    {!filteredPath ? (
                        <div className="loading loading-spinner loading-sm text-zinc-400 py-4"></div>
                    ):(
                        <div className="flex items-center gap-2 overflow-auto relative w-full pb-2">
                            {loggedAkun && navLink.map((value, index) => value['role'].includes(loggedAkun.role_akun) && (
                                <Link
                                    key={index}
                                    href={value.url}
                                    className={`px-4 py-2 rounded-md flex-shrink-0 text-xs font-medium ${filteredPath && filteredPath.url.startsWith(value.url) ? 'text-zinc-800 dark:text-zinc-100' : 'text-zinc-400'} hover:text-zinc-700 dark:hover:text-zinc-200 relative no-underline duration-300 ease-in z-[100]`}
                                    onMouseOver={() => setHoveredPath(value.url)}
                                    onMouseLeave={() => setHoveredPath(path)}
                                >
                                    <span>
                                        {value.title}
                                    </span>
                                    {hoveredPath.startsWith(value.url) && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-full bg-zinc-100 dark:bg-zinc-800 rounded-md -z-10 text-zinc-700 dark:text-zinc-200"
                                            layoutId="navbar"
                                            aria-hidden="true"
                                            style={{
                                                width: "100%",
                                            }}
                                            transition={{
                                                type: 'spring',
                                                bounce: 0,
                                                stiffness: 200,
                                                damping: 30,
                                                duration: 0.01,
                                            }}
                                        />
                                    )}
                                    
                                </Link>
                            ))}
                            <Link href={'/ceknilai'} className="px-4 py-2 rounded-md text-xs bg-blue-500 flex-shrink-0 font-medium text-white hover:shadow-lg hover:shadow-cyan-500/40 ease-out duration-200">
                                Cek Nilai untuk Siswa
                            </Link>
                        </div>
                    )}
                </div>
                <div className="px-2 md:px-10 pt-2 md:pt-5 pb-10 relative overflow-auto w-full h-screen no-scrollbar">
                    {children}
                </div>
            </div> 
            <div className="drawer-side md:hidden">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                {loggedAkun && (
                    <div className="p-5 w-80 min-h-full bg-white dark:bg-zinc-900 dark:text-zinc-100 text-zinc-800">
                        <hr className="my-12 opacity-0" />
                        <p>
                            {loggedAkun['nama_akun']}
                        </p>
                        <p className="text-xs opacity-40">
                            {loggedAkun['email_akun']}
                        </p>
                        <hr className="my-1 opacity-0" />
                        {loggedAkun['role_akun'] === 'Admin' && (
                            <p className="px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-500 w-fit">
                                Admin
                            </p>
                        )}
                        {loggedAkun['role_akun'] === 'Operator' && (
                            <p className="px-2 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-500 w-fit">
                                Operator
                            </p>
                        )}
                        <hr className="my-5 dark:opacity-10" />
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <p className="opacity-60">
                                    Tema
                                </p>
                                <button type="button" onClick={() => toggleTheme()} className="rounded-lg border w-8 h-8 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center group text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200">
                                    <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="w-4 h-4 text-inherit group-hover:-rotate-45 transition-all duration-300" />
                                </button>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="opacity-60">
                                    Keluar
                                </p>
                                <button type="button" onClick={() => submitLogout()} className="rounded-lg border w-8 h-8 dark:border-zinc-800 hover:bg-zinc-50 transition-all duration-300 dark:hover:bg-zinc-800 flex items-center justify-center group text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200">
                                    <FontAwesomeIcon icon={faSignOut} className="w-4 h-4 text-inherit transition-all duration-300" />
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
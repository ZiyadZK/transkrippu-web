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

export default function PublicMainLayoutPage({ children }) {

    const router = useRouter()
    const path = usePathname()
    const [filteredPath, setFilteredPath] = useState(null)
    const [theme, setTheme] = useState('')
    const [tab, setTab] = useState('tabel')

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
        getTheme()
    }, [])

    const [hoveredTab, setHoveredTab] = useState(tab)

    

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
                            <div className="pl-3 md:pl-5 flex items-center gap-3">
                                <FontAwesomeIcon icon={faStar} className="w-3 h-3 text-inherit" />
                                Cek Nilai Siswa
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button type="button" onClick={() => toggleTheme()} className="rounded-full border w-8 h-8 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center group text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200">
                                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="w-4 h-4 text-inherit group-hover:-rotate-45 transition-all duration-300" />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 relative overflow-auto">

                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md flex-shrink-0 text-xs font-medium ${tab === 'tabel' ? 'text-zinc-800 dark:text-zinc-100' : 'text-zinc-400'} hover:text-zinc-700 dark:hover:text-zinc-200 relative no-underline duration-300 ease-in z-[100]`}
                            onMouseOver={() => setHoveredTab('tabel')}
                            onMouseLeave={() => setHoveredTab(tab)}
                        >
                            <span>
                                Tabel Nilai
                            </span>
                            {tab === 'tabel' && (
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
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md flex-shrink-0 text-xs font-medium ${tab === 'grafik' ? 'text-zinc-800 dark:text-zinc-100' : 'text-zinc-400'} hover:text-zinc-700 dark:hover:text-zinc-200 relative no-underline duration-300 ease-in z-[100]`}
                            onMouseOver={() => setHoveredTab('grafik')}
                            onMouseLeave={() => setHoveredTab(tab)}
                        >
                            <span>
                                Grafik Nilai
                            </span>
                            {tab === 'grafik' && (
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
                        </button>
                    </div>
                </div>
                <div className="px-2 md:px-10 pt-2 md:pt-5 pb-10 relative overflow-auto w-full h-screen no-scrollbar">
                    {children}
                </div>
            </div> 
            <div className="drawer-side md:hidden">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="p-5 w-80 min-h-full bg-white dark:bg-zinc-900 dark:text-zinc-100 text-zinc-800">
                    <hr className="my-12 opacity-0" />
                    
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <p className="opacity-60">
                                Tema
                            </p>
                            <button type="button" onClick={() => toggleTheme()} className="rounded-lg border w-8 h-8 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center group text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200">
                                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="w-4 h-4 text-inherit group-hover:-rotate-45 transition-all duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
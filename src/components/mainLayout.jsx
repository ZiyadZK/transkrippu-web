'use client'

import { jakarta } from "@/libs/fonts";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faCog, faHouse, faLayerGroup, faSignOut, faStar, faTimeline, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navLink = [
    { url: '/matapelajaran', title: 'Mata Pelajaran', page: 'Data Mata Pelajaran', icon: faLayerGroup, role: ['Admin', 'Operator']},
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
        const userdata = await getLoggedUserdata()
        setLoggedAkun(userdata)
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
    }, [])

    const [hoveredPath, setHoveredPath] = useState(path)

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
                        <div className="flex items-center gap-3">
                            <div className="hidden md:flex items-center gap-3 ">
                                <p className="px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-500">
                                    Admin
                                </p>
                                <article className="text-end">
                                    <p className="text-xs">
                                        kakangtea74@gmail.com
                                    </p>
                                    <p className="text-xs opacity-50">
                                        Ziyad
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
                    </div>
                    {!filteredPath ? (
                        <div className="loading loading-spinner loading-sm text-zinc-400 py-4"></div>
                    ):(
                        <div className="flex items-center gap-2 overflow-auto relative w-full pb-2">
                            {navLink.map((value, index) => (
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
                        </div>
                    )}
                </div>
                <div className="px-2 md:px-10 pt-2 md:pt-5 pb-10 relative overflow-auto w-full h-screen no-scrollbar">
                    {children}
                </div>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
                
                </ul>
            </div>
        </div>
    );
}
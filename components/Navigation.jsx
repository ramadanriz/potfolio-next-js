import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const Navigation = () => {
    const [navbar, setNavbar] = useState(false)
    const {systemTheme , theme, setTheme} = useTheme ()
    const [mounted, setMounted] = useState(false)
    const router = useRouter()

    useEffect(() =>{
        setMounted(true)
    },[])

    const renderThemeChanger= () => {
        if(!mounted) return null
        const currentTheme = theme === "system" ? systemTheme : theme
        if(currentTheme ==="dark"){
          return (
            <BsFillSunFill className="w-7 h-7 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
          )
        } else {
            return (
                <BsFillMoonFill className="w-7 h-7 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
            )
        }
    }

    return (
        <nav className="w-full shadow dark:bg-dark-eval-0 dark:shadow-dark-eval-3">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/" legacyBehavior>
                            <a className="text-2xl font-bold">{process.env.appName}</a>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 dark:text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <AiOutlineClose />
                                ) : (
                                    <AiOutlineMenu />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? "block" : "hidden"}`}>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li>
                                {renderThemeChanger()}
                            </li>
                            <li className="text-gray-600 dark:text-white hover:text-blue-600">
                                <Link href="/about" legacyBehavior>
                                    <a className={router.asPath == "/about" ? "border-b-2 border-b-blue-800" : ""}>About</a>
                                </Link>
                            </li>
                            <li className="text-gray-600 dark:text-white hover:text-blue-600">
                                <Link href="/login" legacyBehavior>
                                    <a className={router.asPath == "/login" ? "border-b-2 border-b-blue-800" : ""}>Login</a>
                                </Link>
                            </li>
                            <li className="text-gray-600 dark:text-white hover:text-blue-600">
                                <Link href="/register" legacyBehavior>
                                    <a className={router.asPath == "/register" ? "border-b-2 border-b-blue-800" : ""}>Register</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
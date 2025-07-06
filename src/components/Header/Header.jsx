import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../container/Container";
import ReactLogo from '/src/assets/react.svg';
import ThemeBtn from "../ThemeButton";
import { ThemeProvider } from "../../contexts/theme";
import { NavLink } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import Logo from "../Logo";


function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    console.log("Auth Status:", authStatus); // should log `true` after login
    
    const navigate = useNavigate()

    const navItems = [
        {
            name: "Home",
            path: '/',
            active: true,
        },
        {
            name: "Login",
            path: '/login',
            active: !authStatus,
        },
        {
            name: "Signup",
            path: '/signup',
            active: !authStatus,
        },
        {
            name: "All Posts",
            path: '/all-posts',
            active: authStatus,
        },
        {
            name: "Add Post",
            path: '/add-post',
            active: authStatus,
        },
    ]

    return (

        <header className={` bg-[#efb38827] dark:bg-[#111111] dark:text-amber-50`}>
            <Container className="px-0" >
                <nav className="flex p-2" >
                    <div className="flex justify-center items-center">
                        <Logo />
                        
                    </div>
                    <ul className="flex flex-row ml-auto gap-1.5 md:gap-10 items-center mr-5 my-2">
                        {
                            // navItems.map((item) => item.active ? (
                            //     <li key={item.name}>

                            //         <button
                            //             onClick={() => navigate(item.path)}
                            //             className="w-15 h-8 md:w-25 md:h-10 flex items-center justify-center text-sm md:text-[14px]  shadow-sm shadow-cyan-300 p-2 px-4 rounded-xl hover:cursor-pointer 
                            //                         hover:scale-105 duration-500">
                            //             {item.name}
                            //         </button>
                            //     </li>) : null)


                            navItems.map((item) => item.active ? (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `whitespace-nowrap w-15 h-8 md:w-25 md:h-10 flex items-center justify-center text-[13px] md:text-[14px]  shadow-sm shadow-orange-400 p-2 px-[30px] rounded-xl hover:cursor-pointer 
                                            hover:scale-105 duration-500
                                            ${isActive ? "text-orange-400 font-bold font-stretch-54%" : "null"}`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ) : null)
                        }
                        {authStatus && (
                            <li >
                                <NavLink 
                                to="/login"
                                className={({ isActive }) =>
                                            `w-15 h-8 md:w-25 md:h-10 flex items-center justify-center text-sm md:text-[14px]  shadow-sm shadow-orange-400 p-2 px-4 rounded-xl hover:cursor-pointer 
                                            hover:scale-105 duration-500
                                            ${isActive ? "text-orange-400 font-bold" : "null"}`
                                        }>

                                <LogoutBtn />
                                </NavLink>
                            </li>
                        )}
                         
                        
                        
                    </ul>
                    <ThemeBtn />
                </nav>
            </Container>
        </header>


    )
}

export default Header;
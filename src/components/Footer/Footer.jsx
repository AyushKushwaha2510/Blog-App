import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Links, NavLink, useNavigate } from 'react-router-dom'
import LogoutBtn from './LogoutBtn';

function Footer() {
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
        <footer className='w-[100%] h-max md:h-max bg-[#212121] flex-col justify-center text-[#f5f5f5] py-5'>
            <div className='justify-center max-w-[1500px] mx-auto px-1 md:px-2'>
                <div className='flex justify-between items-center p-2 mb-5 md:p-0 md:py-2'>
                    <h1 className='text-[22px] md:text-3xl'>Let's Connect There</h1>
                    {/* <button className='border rounded-2xl p-1 px-2'>Hire Me</button> */}
                </div>
                <hr className='my-5 mx-2 md:mx-0 border-t-2 border-[#6c615b6b]' />
                <div className=' flex flex-wrap gap-6 md:flex-row justify-between px-2 md:px-0'>
                    <div className=' max-w-2xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam ad consequuntur aspernatur ab exercitationem aut totam ut? Magnam, impedit.
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#fd853a] mb-2 md:mb-4 md:text-xl'>Navigation</h4>
                        <ul className="flex flex-col ml-auto gap-3 items-center mr-5">
                            {
                                navItems.map((item) => item.active ? (
                                    <li key={item.name}>
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `flex flex-col  hover:cursor-pointer 
                                            hover:scale-105 duration-500
                                            ${isActive ? "text-cyan-300" : "null"}`
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
                                            ` flex flex-col items-center justify-center hover:cursor-pointer 
                                            hover:scale-105 duration-500
                                            ${isActive ? "text-cyan-300" : "null"}`
                                        }>

                                        <LogoutBtn />
                                    </NavLink>
                                </li>
                            )}



                        </ul>
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <h4 className='text-[#fd853a] mb-2 md:mb-4 md:text-xl'>Contacts</h4>
                        <span>+91 78345xxxxx</span>
                        <span>xyz@abc.com</span>
                        <a href='https://ayushkushwaha-portfolio.netlify.app/' target='_blank'>www.portfolio.com</a>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-[#fd853a] mb-2 md:mb-4 md:text-xl'>Get the latest information</label>
                        <input type="email" name="" id="mail" placeholder='Your email address'
                            className='border rounded-md p-1 px-2' />
                        <div className='flex flex-row gap-3 mt-5 justify-evenly items-center'>
                            <a href="https://github.com/AyushKushwaha2510" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0539 13.5182 14.0332 14.4958 12.6716C15.4735 11.3101 15.9996 9.6762 16 8C16 3.58 12.42 0 8 0Z" fill="white" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/ayush-kushwaha-30701b250/" target='_blank' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16" fill="none">
                                    <path d="M0 1.14614C0 0.513313 0.526012 0 1.17491 0H14.8251C15.474 0 16 0.513315 16 1.14614V14.8539C16 15.4869 15.474 16 14.8251 16L1.17491 16C0.526012 16 0 15.4869 0 14.8539V1.14614ZM4.94338 13.3937V6.16876H2.54196V13.3937H4.94338ZM3.74266 5.18232C4.58008 5.18232 5.10131 4.62753 5.10131 3.9342C5.0857 3.22527 4.58008 2.68587 3.75854 2.68587C2.93709 2.68587 2.4 3.22527 2.4 3.9342C2.4 4.62753 2.92112 5.18232 3.72701 5.18232H3.74266ZM8.6514 13.3937V9.35897C8.6514 9.14304 8.667 8.92732 8.73042 8.77296C8.90401 8.34153 9.29915 7.89471 9.96255 7.89471C10.8315 7.89471 11.1791 8.55725 11.1791 9.52851V13.3937H13.5803V9.251C13.5803 7.03184 12.3956 5.99922 10.8156 5.99922C9.54177 5.99922 8.9706 6.69937 8.65146 7.19167V7.21656H8.63543C8.6407 7.20832 8.64605 7.20003 8.65146 7.19167V6.16876H6.25007C6.28158 6.8467 6.25007 13.3937 6.25007 13.3937H8.6514Z" fill="white" />
                                </svg>
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=100026339483193' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19V16.19Z" fill="white" />
                                </svg>
                            </a>
                            {/* <a href=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17 4H7C4 4 2 6 2 9V15C2 18 4 20 7 20H17C20 20 22 18 22 15V9C22 6 20 4 17 4ZM13.89 13.03L11.42 14.51C10.42 15.11 9.59998 14.65 9.59998 13.48V10.51C9.59998 9.34001 10.42 8.88001 11.42 9.48001L13.89 10.96C14.84 11.54 14.84 12.46 13.89 13.03Z" fill="white" />
                                </svg>
                            </a> */}
                            <a href=' https://wa.me/qr/IS4OPZMXA255A1' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                    <path d="M21.98 11.41C21.64 5.60995 16.37 1.13996 10.3 2.13996C6.12004 2.82996 2.77005 6.21994 2.12005 10.3999C1.74005 12.8199 2.24007 15.1099 3.33007 16.9999L2.44006 20.3099C2.24006 21.0599 2.93004 21.7399 3.67004 21.5299L6.93005 20.63C8.41005 21.5 10.14 21.9999 11.99 21.9999C17.63 21.9999 22.31 17.03 21.98 11.41ZM16.8801 15.7199C16.7901 15.8999 16.68 16.07 16.54 16.23C16.29 16.5 16.02 16.7 15.72 16.82C15.42 16.95 15.09 17.01 14.74 17.01C14.23 17.01 13.68 16.89 13.11 16.64C12.53 16.39 11.9601 16.0599 11.3901 15.6499C10.8101 15.2299 10.2701 14.7599 9.75005 14.2499C9.23005 13.7299 8.77003 13.1799 8.35003 12.6099C7.94003 12.0399 7.61005 11.4699 7.37005 10.8999C7.13005 10.3299 7.01006 9.77996 7.01006 9.25996C7.01006 8.91996 7.07006 8.58996 7.19006 8.28996C7.31006 7.97996 7.50007 7.69996 7.77007 7.44996C8.09007 7.12996 8.44005 6.97996 8.81005 6.97996C8.95005 6.97996 9.09002 7.00995 9.22002 7.06995C9.35002 7.12995 9.47005 7.21995 9.56005 7.34995L10.72 8.98994C10.81 9.11994 10.88 9.22994 10.92 9.33994C10.97 9.44994 10.99 9.54994 10.99 9.64994C10.99 9.76994 10.9501 9.88996 10.8801 10.01C10.8101 10.13 10.72 10.2499 10.6 10.3699L10.22 10.7699C10.16 10.8299 10.1401 10.8899 10.1401 10.9699C10.1401 11.0099 10.15 11.0499 10.16 11.0899C10.18 11.1299 10.1901 11.1599 10.2001 11.1899C10.2901 11.3599 10.45 11.5699 10.67 11.8299C10.9 12.0899 11.1401 12.3599 11.4001 12.6199C11.6701 12.8899 11.9301 13.1299 12.2001 13.3599C12.4601 13.5799 12.68 13.73 12.85 13.82C12.88 13.83 12.9101 13.8499 12.9401 13.8599C12.9801 13.8799 13.0201 13.88 13.0701 13.88C13.1601 13.88 13.2201 13.85 13.2801 13.79L13.66 13.41C13.79 13.28 13.9101 13.19 14.0201 13.13C14.1401 13.06 14.2501 13.0199 14.3801 13.0199C14.4801 13.0199 14.5801 13.0399 14.6901 13.0899C14.8001 13.1399 14.92 13.2 15.04 13.29L16.7001 14.4699C16.8301 14.5599 16.92 14.67 16.98 14.79C17.03 14.92 17.0601 15.0399 17.0601 15.1799C17.0001 15.3499 16.9601 15.5399 16.8801 15.7199Z" fill="white" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/ayush.kushwaha2510/" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z" fill="white" />
                                </svg>
                            </a>
                            {/* <a href=""></a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16" fill="none">
                                <path d="M5.02601 15C11.0636 15 14.3673 9.99705 14.3673 5.66585C14.3673 5.5251 14.3673 5.38435 14.3609 5.2436C15.0012 4.78297 15.5582 4.20079 16 3.54183C15.411 3.80413 14.7771 3.97687 14.1112 4.06004C14.7899 3.65699 15.3085 3.01083 15.5582 2.24311C14.9244 2.62057 14.2201 2.88927 13.471 3.03642C12.8691 2.39665 12.0176 2 11.0764 2C9.26451 2 7.79192 3.47146 7.79192 5.28199C7.79192 5.53789 7.82393 5.7874 7.87515 6.03051C5.14766 5.89616 2.72749 4.58465 1.10764 2.60138C0.825931 3.0876 0.665866 3.65059 0.665866 4.25197C0.665866 5.39075 1.2485 6.39518 2.12565 6.98376C1.58784 6.96457 1.08203 6.81742 0.640256 6.57431C0.640256 6.58711 0.640256 6.5999 0.640256 6.61909C0.640256 8.20571 1.77351 9.53642 3.27171 9.83711C2.9964 9.91388 2.70828 9.95226 2.40736 9.95226C2.19608 9.95226 1.9912 9.93307 1.79272 9.89469C2.20888 11.1998 3.42537 12.1467 4.85954 12.1722C3.73269 13.0551 2.31773 13.5797 0.781113 13.5797C0.518608 13.5797 0.256102 13.5669 0 13.5349C1.44698 14.4562 3.17567 15 5.02601 15Z" fill="white" />
                            </svg> */}
                        </div>
                    </div>
                </div>
                <hr className="my-5 mx-2 md:mx-0 border-t-2 border-[#6c615b6b]" />
                <div>
                    <div className='flex flex-wrap justify-center md:justify-between text-sm text-[#9f9d9d9d] gap-2 '>
                        <span>Copyright© 2025 Portfolio. All Rights Reserved.</span>
                        <span>User Terms & Conditions | Privacy Policy</span>
                    </div>
                    <br />
                    <div className='mx-auto w-max text-[#9f9d9dcf]'>
                        <span>Developed by | Ayush Kumar Kushwaha</span>
                    </div>
                </div>


            </div>




        </footer>
    )
}

export default Footer;
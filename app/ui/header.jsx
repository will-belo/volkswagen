"use client"

import UserContext from "@/src/contexts/UserContext"
import { Button, Link, Menu, MenuItem } from "@mui/material"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"

export default function Header() {
    const { userIdAPI, logoutUser } = useContext(UserContext)
    const [userState, setUserState] = useState(null)
    const router = useRouter()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    useEffect(() => {
        setUserState(userIdAPI)
    },[userIdAPI])

    const handleLogout = () => {
        if(logoutUser()){
            router.refresh
        }
    }
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="flex flex-row items-center justify-center p-4">
            <div className="flex-none"></div>
            
            <div className="grow flex justify-center divide-x divide-black">
                <Link underline="none" color="inherit" className="hover:text-volks-blue ease-in-out duration-200 cursor-pointer px-7 py-2">Treinamentos</Link>
                <Link underline="none" color="inherit" className="hover:text-volks-blue ease-in-out duration-200 cursor-pointer px-7 py-2">Peças VW</Link>
                <Link underline="none" color="inherit" className="hover:text-volks-blue ease-in-out duration-200 cursor-pointer px-7 py-2">Catálogo Economy</Link>
                <Link underline="none" color="inherit" className="hover:text-volks-blue ease-in-out duration-200 cursor-pointer px-7 py-2">Notícias</Link>
            </div>

            <div className="flex-none">
            { userState ?
                <div>
                    <a onClick={handleClick}>
                        Usuário
                    </a>

                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Perfil</MenuItem>
                        <MenuItem onClick={handleClose}>Meus treinamentos</MenuItem>
                        <MenuItem onClick={handleLogout}>Sair</MenuItem>
                    </Menu>
                </div>
            :
                <div className="flex justify-center items-center gap-7">
                    <Link href="/auth/signup" className="hover:text-volks-blue ease-in-out duration-200 uppercase text-black no-underline px-7 py-1">Cadastre-se</Link>
                    <Button href="/auth/signin" variant="outlined" className="uppercase text-black no-underline px-7 py-1">Entrar</Button>
                </div>
            }
            </div>
        </div>
    )
}
"use client"

import UserContext from "@/src/contexts/UserContext"
import { Menu, MenuItem } from "@mui/material"
import { useContext, useEffect, useState } from "react"

export default function Header() {
    const { userIdAPI } = useContext(UserContext)
    const [userState, setUserState] = useState(null)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    useEffect(() => {
        setUserState(userIdAPI)
    },[userIdAPI])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="p-4 flex items-center justify-center  flex-row">
            <div className="flex-none">
                LOGO
            </div>
            
            <div className="grow flex justify-center gap-5">
                <h1>Treinamentos</h1>
                <h1>Calendário</h1>
                <h1>Sobre</h1>
            </div>

            <div className="flex-none">
                { userState ?
                    <>
                    <a onClick={handleClick}>
                        Usuário
                    </a>

                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Perfil</MenuItem>
                        <MenuItem onClick={handleClose}>Meus treinamentos</MenuItem>
                        <MenuItem onClick={handleClose}>Sair</MenuItem>
                    </Menu>
                    </>
                :
                    <h1>A</h1>
                }
            </div>
        </div>
    )
}
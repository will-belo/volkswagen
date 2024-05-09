"use client"

import UserContext from "@/src/contexts/UserContext"
import { useContext, useEffect, useState } from "react"

export default function dashboard(){
    const { logoutUser } = useContext(UserContext)
    
    const logoutHandle = () => {
        logoutUser()
    }

    return(
        <>
            <h1>Dashboard</h1>
            <button onClick={logoutHandle}>Sair</button>
        </>
    )
}
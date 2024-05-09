"use client"

import { createContext, useEffect, useState } from 'react';
import { logout, user_API } from '@/actions';
import { useRouter } from 'next/navigation';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const router = useRouter()
    const [userIdAPI, setUserIdAPI] = useState(null)

    // Função que executa o logout do usuário
    const logoutUser = () => {
        const response = logout()

        if(response){
            router.push('/')
        }
    }
    // Retorna o id do usuário retornado pela API de login
    useEffect(() => {
        (async () => {
            setUserIdAPI(await user_API())
        })()
    },[])
    
    return (
        <UserContext.Provider value={{ userIdAPI, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;

"use client"

import UserContext from "@/src/contexts/UserContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function RedirectPage(){
    const router = useRouter()
    const { verify } = useContext(UserContext);

    verify()
    
    router.push('/dashboard')
}
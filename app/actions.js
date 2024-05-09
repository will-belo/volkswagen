"use server"

import { cookies } from "next/headers";

export async function logout(){
    cookies().delete('singlePassToken')
    cookies().delete('user_id')

    return true
}

export async function user_API(){
    const user_id = cookies().get('user_id')
    
    if(user_id){
        return user_id.value
    }

    return null
}
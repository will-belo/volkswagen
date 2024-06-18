'use server'

import singlePassValidate from '@/src/validate/singlePassValidate'
import { cookies } from 'next/headers'

export async function GET(req) {
    const jwt = cookies().get('token')
    const user = cookies().get('context')

    const request = await singlePassValidate(jwt)
    
    const role = await request.json()
    
    if(request.status == 200){ // && role.role == 'common'
        const request = await fetch(`https://apivw.oficinabrasil.com.br/api/users/${user.value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + jwt.value
            },
            cache: 'no-store',
        })
    
        const response = await request.json()

        if(request.ok){
            response.role = role.role
            
            return Response.json(response)
        }
    }

    return Response.json(false, {
        status: 404
    })
}

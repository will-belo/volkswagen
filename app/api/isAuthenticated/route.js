'use server'

import { cookies } from 'next/headers'

export async function GET(req) {
    const jwt = cookies().get('token')
    const user = cookies().get('context')

    if(jwt && user){
        const data = 'id=' + encodeURIComponent(user.value)

        const request = await fetch('http://127.0.0.1:80/api/getInfos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + jwt.value
            },
            body: data,
        })
    
        const response = await request.json()
        
        if(request.ok){
            return Response.json(response)
        }
    }

    return new Response(false,{
        status: 404,
    })
}

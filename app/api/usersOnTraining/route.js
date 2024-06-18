'use server'

import { cookies } from 'next/headers'

export async function GET(req) {
    const jwt = cookies().get('token')

    if(jwt){
        const { searchParams } =  new URL(req.url)
        
        const request = await fetch(`http://127.0.0.1:80/api/admin/trainings/${searchParams.get('training')}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + jwt.value
            },
            cache: 'no-store',
        })
        
        const response = await request.json()

        if( request.status != 200 ){
            return new Response(response, {
                status: 401,
            })
        }
        
        return Response.json(response)
    }
}

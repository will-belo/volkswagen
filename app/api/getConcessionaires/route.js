'use server'

import { cookies } from 'next/headers'

export async function GET(req) {
    const jwt = cookies().get('token')

    if(jwt){
        const { searchParams } =  new URL(req.url)
        
        const request = await fetch(`http://127.0.0.1:80/api/getConcessionaireByAddress?state=${searchParams.get('state')}&city=${searchParams.get('city')}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + jwt.value
            },
        })
    
        const response = await request.json()
        
        if(request.ok){
            return Response.json(response)
        }

        return Response.json(response,{
            status: 404,
        })
    }
}
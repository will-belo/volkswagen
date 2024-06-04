'use server'

import { cookies } from 'next/headers'

export async function POST(req) {
    const jwt = cookies().get('token')
    const user = cookies().get('context')

    if(jwt){
        const training =  await req.formData()
        
        const data = 
            'concessionaireId=' + encodeURIComponent(training.get('concessionaireID')) +
            '&trainingId='      + encodeURIComponent(training.get('trainingID')) +
            '&userId='          + encodeURIComponent(user.value)
            
        const request = await fetch('https://apivw.oficinabrasil.com.br/api/training', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + jwt.value
            },
            body: data
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

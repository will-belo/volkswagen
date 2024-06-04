'use server'

export async function GET(req) {
    const request = await fetch('https://apivw.oficinabrasil.com.br/api/trainings', {
        method: 'GET',
    })

    const response = await request.json()
    
    if(request.ok){
        return Response.json(response)
    }

    return Response.json(response,{
        status: request.status,
    })
}

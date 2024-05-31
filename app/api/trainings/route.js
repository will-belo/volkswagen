'use server'

export async function GET(req) {
    const request = await fetch('http://127.0.0.1:80/api/getAllTrainings', {
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

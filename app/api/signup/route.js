'use server'

export async function POST(req) {
    const formData = await req.formData()
    
    const data = 
        'auto_repair_cep=' + encodeURIComponent(formData.get('auto_repair_cep')) + 
        '&auto_repair_city=' + encodeURIComponent(formData.get('auto_repair_city')) + 
        '&auto_repair_number=' + encodeURIComponent(formData.get('auto_repair_number')) + 
        '&auto_repair_phone=' + encodeURIComponent(formData.get('auto_repair_phone')) + 
        '&auto_repair_state=' + encodeURIComponent(formData.get('auto_repair_state')) + 
        '&auto_repair_street=' + encodeURIComponent(formData.get('auto_repair_street')) + 
        '&born_at=' + encodeURIComponent(formData.get('born_at')) + 
        '&branch_activity=' + encodeURIComponent(formData.get('branch_activity')) + 
        '&cep=' + encodeURIComponent(formData.get('cep')) + 
        '&city=' + encodeURIComponent(formData.get('city')) + 
        '&cnpj=' + encodeURIComponent(formData.get('cnpj')) + 
        '&email=' + encodeURIComponent(formData.get('email')) + 
        '&fantasyName=' + encodeURIComponent(formData.get('fantasyName')) + 
        '&gender=' + encodeURIComponent(formData.get('gender')) + 
        '&name=' + encodeURIComponent(formData.get('name')) + 
        '&number=' + encodeURIComponent(formData.get('number')) + 
        '&password=' + encodeURIComponent(formData.get('password')) + 
        '&state=' + encodeURIComponent(formData.get('state')) + 
        '&street=' + encodeURIComponent(formData.get('street')) +
        '&check=' + encodeURIComponent(formData.get('check'))

    const request = await fetch('http://127.0.0.1:80/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
    })
    
    const response = await request.text()

    if( request.status != 200 ){
        return new Response(response, {
            status: 401,
        })
    }
    
    return Response.json(response)
}

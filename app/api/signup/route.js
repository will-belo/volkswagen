'use server'

export async function POST(req) {
    const formData = await req.formData()
    
    const data = 
        'cep='                 + encodeURIComponent(formData.get('cep')) + 
        '&city='               + encodeURIComponent(formData.get('city')) + 
        '&cnpj='               + encodeURIComponent(formData.get('cnpj')) + 
        '&name='               + encodeURIComponent(formData.get('name')) + 
        '&email='              + encodeURIComponent(formData.get('email')) + 
        '&state='              + encodeURIComponent(formData.get('state')) + 
        '&check='              + encodeURIComponent(formData.get('check')) +
        '&phone='              + encodeURIComponent(formData.get('phone')) +
        '&gender='             + encodeURIComponent(formData.get('gender')) + 
        '&street='             + encodeURIComponent(formData.get('street')) +
        '&number='             + encodeURIComponent(formData.get('number')) + 
        '&born_at='            + encodeURIComponent(formData.get('born_at')) +
        '&password='           + encodeURIComponent(formData.get('password')) +
        '&document='           + encodeURIComponent(formData.get('document')) +  
        '&fantasyName='        + encodeURIComponent(formData.get('fantasyName')) + 
        '&branch_activity='    + encodeURIComponent(formData.get('branch_activity')) + 
        '&auto_repair_cep='    + encodeURIComponent(formData.get('auto_repair_cep')) + 
        '&auto_repair_city='   + encodeURIComponent(formData.get('auto_repair_city')) + 
        '&auto_repair_phone='  + encodeURIComponent(formData.get('auto_repair_phone')) + 
        '&auto_repair_state='  + encodeURIComponent(formData.get('auto_repair_state')) + 
        '&auto_repair_number=' + encodeURIComponent(formData.get('auto_repair_number')) +
        '&auto_repair_street=' + encodeURIComponent(formData.get('auto_repair_street'))

    const request = await fetch('http://127.0.0.1:80/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
    })
    
    const response = await request.json()
    
    if( request.status != 201 ){
        return new Response(response, {
            status: 401,
        })
    }
    
    return Response.json(response)
}

export default async function singlePassValidate(token){
  if(token){
    const request = await fetch('https://login.oficinabrasil.com.br/api/verify', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token.value,
      }
    })
    
    return request
  }

  return Response.json(null, {
    status: 400
  })
}
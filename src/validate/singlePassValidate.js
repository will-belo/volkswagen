export default async function singlePassValidate(token){
  if(token){
    const request = await fetch('http://127.0.0.1:8080/api/verify', {
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
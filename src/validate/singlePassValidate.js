export default async function singlePassValidate(token){
    const request = await fetch('http://127.0.0.1:80/api/verify', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token.value,
      }
    })
    
    return request
}
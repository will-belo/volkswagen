import { NextResponse } from 'next/server';
import singlePassValidate from '../validate/singlePassValidate';

export default async function redirectIfLoggedMiddleware(token, url){
    url.pathname = '/dashboard'

    const request = await singlePassValidate(token)
    
    const response = await request.json()

    if ( request.status == 200 && response.role == 'common' ){
        return NextResponse.redirect(url)
    }

    return NextResponse.next();
}
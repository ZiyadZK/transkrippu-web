import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { decryptData } from "./libs/crypto";

const rolePath = {
    '/matapelajaran': ['Admin'],
    '/akun': ['Admin'],
    '/nilai': ['Admin', 'Operator'],
    '/riwayat': ['Admin']
}

export async function middleware(req) {
    if(!cookies().has('userdata')) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    const encryptedUserdata = cookies().get('userdata')
    const decryptedUserdata = await decryptData(encryptedUserdata)
    const pathname = req.nextUrl.pathname;

    if(pathname !== '/') {
        for(let path of Object.keys(rolePath)) {
            if(pathname.startsWith(path)) {
                if(!rolePath[path].includes(decryptedUserdata.role_akun)) {
                    return NextResponse.redirect(new URL('/', req.url))
                }
            }
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/akun', '/matapelajaran', '/nilai', '/riwayat']
}
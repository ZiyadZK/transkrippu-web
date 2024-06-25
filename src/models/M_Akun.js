'use server'

import { api_delete, api_get, api_post, api_put } from "@/libs/api_service"
import { decryptData } from "@/libs/crypto"
import { cookies } from "next/headers"

export const M_Akun_login = async (email, password, duration) => {
    if(typeof(duration) === 'undefined') {
        duration = 1 * 1000 * 60 * 60 * 24
    }else{
        duration = duration * 1000 * 60 * 60 * 24
    }

    const response = await api_get(`/v1/userdata/${email}/${password}`)
    if(response.success) {
        cookies().set('userdata', response.data, {
            secure: true,
            maxAge: duration
        })
    }

    return {
        success: response.success,
        data: response?.data,
        message: response.message
    }
}

export const M_Akun_logout = async () => {
    cookies().delete('userdata')

    return {
        success: true
    }
}

export const M_Akun_getUserdata = async () => {
    try {
        if(!cookies().has('userdata')) {
            return {
                success: false,
                message: 'Belum memiliki userdata masuk ke dalam Session!'
            }
        }
        
        const data = await decryptData(cookies().get('userdata'))
        
        return {
            success: true,
            data
        }

    } catch (error) {
        console.log(error)
        return {
            success: false
        }
    }


}

export const M_Akun_getAll = async () => {
    const response = await api_get('/v1/data/akun')
    
    return {
        success: response.success,
        data: response?.data,
        message: response?.message
    }
}

export const M_Akun_create = async (payload) => {
    const response = await api_post('/v1/data/akun', payload)
    
    return {
        success: response.success,
        message: response.message
    }
}

export const M_Akun_update = async (id_akun, payload) => {
    const response = await api_put('/v1/data/akun', {id_akun, payload})
    console.log(response)
    
    return {
        success: response.success,
        message: response.message
    }
}

export const M_Akun_delete = async (id_akun) => {
    const response = await api_delete('/v1/data/akun', {id_akun})

    return {
        success: response.success,
        message: response.message
    }
}
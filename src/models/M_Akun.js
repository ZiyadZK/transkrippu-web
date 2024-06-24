'use server'

import { api_delete, api_get, api_post, api_put } from "@/libs/api_service"

export const M_Akun_getAll = async () => {
    const response = await api_get('/v1/data/akun')
    
    return {
        success: response.success,
        data: response.data.data,
        message: response.message
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
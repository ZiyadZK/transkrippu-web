'use server'

import { api_delete, api_get, api_post, api_put } from "@/libs/api_service"

export const M_Nilai_getAll = async (nis) => {
    const response = await api_get(`/v1/data/nilai/${nis}`)

    return {
        success: response.success,
        data: response?.data,
        message: response.message
    }
}

export const M_Nilai_create = async (payload) => {
    const response = await api_post('/v1/data/nilai', payload)

    return {
        success: response.success,
        data: response?.data,
        message: response.message
    }
}

export const M_Nilai_update = async (id_nilai, payload) => {
    const response = await api_put('/v1/data/nilai', {id_nilai, payload})

    return {
        success: response.success,
        data: response?.data,
        message: response.message
    }
}

export const M_Nilai_delete = async (id_nilai) => {
    const response = await api_delete('/v1/data/nilai', {id_nilai})

    return {
        success: response.success,
        data: response?.data,
        message: response.message
    }
}
'use server'

import { api_delete, api_get, api_post, api_put } from "@/libs/api_service"
import { objToQueryURL } from "@/libs/query"

export const M_Matpel_getAll = async () => {
    const response = await api_get(`/v1/data/mapel`)

    return {
        success: response.success,
        data: response.data,
        message: response.message
    }
}

export const M_Matpel_create = async (payload) => {
    const response = await api_post('/v1/data/mapel', payload)

    return {
        success: response.success,
        data: response.data,
        message: response.message
    }
}

export const M_Matpel_update = async (id_mapel, payload) => {
    const response = await api_put('/v1/data/mapel', {id_mapel, payload})

    return {
        success: response.success,
        data: response.data,
        message: response.message
    }
}

export const M_Matpel_delete = async (id_mapel) => {
    const response = await api_delete('/v1/data/mapel', {id_mapel})

    return {
        success: response.success,
        data: response.data,
        message: response.message
    }
}
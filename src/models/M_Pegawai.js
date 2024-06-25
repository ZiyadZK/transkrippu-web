'use server'

import { api_get } from "@/libs/api_service"

export const M_Pegawai_getAll = async () => {
    const response = await api_get('/v1/data/pegawai', `${process.env.MAIN_API_URL}/simak`)

    return {
        success: response.success,
        data: response.data,
        message: response.message
    }
}
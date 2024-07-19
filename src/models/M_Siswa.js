'use server'

import { api_get } from "@/libs/api_service"

export const M_Siswa_getAll = async () => {
    const response = await api_get('/simak/v1/data/siswa', process.env.MAIN_API_URL)

    return {
        success: response.success,
        message: response.message,
        data: response.data
    }
}
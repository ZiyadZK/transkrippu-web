'use server'

import axios from "axios"

export const api_get = async ( url = '/v1', base_url = process.env.API_URL) => {
    try {
        const response = await axios.get(`${base_url}${url}`, {
            headers: {
                'X-API-KEY': process.env.API_KEY
            }
        })

        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: error.response.data.message.error
        }
    }
}

export const api_post = async ( url = '/v1', payload, base_url = process.env.API_URL) => {
    try {
        const response = await axios.post(`${base_url}${url}`, payload, {
            headers: {
                'X-API-KEY': process.env.API_KEY
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

export const api_put = async (url = '/v1', payload, base_url = process.env.API_URL) => {
    try {
        const response = await axios.put(`${base_url}${url}`, payload, {
            headers: {
                'X-API-KEY': process.env.API_KEY
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

export const api_delete = async (url = '/v1', payload, base_url = process.env.API_URL) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${base_url}${url}`,
            data: payload,
            headers: {
                'X-API-KEY': process.env.API_KEY
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}


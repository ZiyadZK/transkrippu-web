'use server'

import axios from "axios"

export const api_get = async ( url = '/v1', base_url = process.env.API_URL) => {
    try {
        const response = await axios.get(`${base_url}${url}`, {
            headers: {
                'X-API-KEY': process.env.API_KEY
            }
        })

        if(response.status === 200) {
            return {
                success: true,
                data: response.data.data,
                message: response.data.message
            }
        }else{
            return {
                success: false,
                message: response.data.message
            }
        }
    } catch (error) {
        return {
            success: false,
            message: error.response.data.message
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

        if(response.status === 200) {
            return {
                success: true,
                message: response.data.message
            }
        }else{
            return {
                success: false,
                message: response.data.message
            }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: error.response.data.message
        }
    }
}

export const api_put = async (url = '/v1', payload, base_url = process.env.API_URL) => {
    try {
        const response = await axios.put(`${base_url}${url}`, payload, {
            headers: {
                'X-API-KEY': process.env.API_KEY
            }
        })

        if(response.status === 200) {
            return {
                success: true,
                message: response.data.message
            }
        }else{
            return {
                success: false,
                message: response.data.message
            }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: error.response.data.message
        }
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

        if(response.status === 200) {
            return {
                success: true,
                message: response.data.message
            }
        }else{
            return {
                success: false,
                message: response.data.message
            }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: error.response.data.message
        }
    }
}


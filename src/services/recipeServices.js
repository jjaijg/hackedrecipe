import axios from 'axios'
import { API_URL } from '../config'

export const getRecipes = async () => {
    try {
        const resp = await axios.get(`${API_URL}/recipe`)
        return resp.data
    } catch (error) {
        console.log(error)
        return []
    }
}
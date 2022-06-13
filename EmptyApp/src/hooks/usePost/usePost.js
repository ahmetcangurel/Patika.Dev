import { useState } from 'react'
import axios from 'axios'

const usePost = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const post = async (url, apiData) => {
        try {
            setLoading(true)
            const response = await axios.post(url, apiData)
            setData(response.data)
            setLoading(false)
        }
        catch (err) {
            setError(err)
            setLoading(false)
        }
    }
    return { data, loading, error, post }

}

export default usePost
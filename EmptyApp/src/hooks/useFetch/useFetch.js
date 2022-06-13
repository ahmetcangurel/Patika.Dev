import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const res = await axios.get(url)
            setData(res.data)
            setLoading(false)
        }
        catch (err) {
            setError(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    })

    return { data, loading, error }
}

export default useFetch
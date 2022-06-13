import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const resData = await axios.get(url)
            setData(resData.data)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, error, loading }
}

export default useFetch
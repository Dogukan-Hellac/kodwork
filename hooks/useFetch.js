import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url)
            setData(responseData)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setError(err.message)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return { error, data, loading }
}

export default useFetch


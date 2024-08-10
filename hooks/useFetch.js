import { useState, useEffect } from "react";
import axios from "axios";

function useFetch() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get('https://api-v2.themuse.com/jobs?page=0')
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


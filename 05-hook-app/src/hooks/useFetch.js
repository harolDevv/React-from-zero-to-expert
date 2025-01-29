import { useEffect, useState } from "react"

const localCache = {}

const useFetch = (url) => {
    const [state, setState] = useState({ 
        data: null, 
        loading: true, 
        error: null,
    })

    useEffect(() => {
        getData()
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            loading: true,
            error: null,
        })
    }

    const getData = async () => {

        if (localCache[url]) {
            setState({
                data: localCache[url],
                loading: false,
                error: null,
            })
            return
        }

        setLoadingState()
        
        const response = await fetch(url)

        if (!response.ok) {
            setState({
                data: null,
                loading: false,
                error: {
                    status: response.status,
                    statusText: !response.statusText ? 'An error has ocurred' : response.statusText,
                },
            })
            return
        }

        const data = await response.json()
        setState({
            data,
            loading: false,
            error: null,
        })

        localCache[url] = data;
    }

    return {
        data,
        loading,
        error
    }
}

export default useFetch

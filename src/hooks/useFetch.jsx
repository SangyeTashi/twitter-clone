import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (dataUrl, initialState) => {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    signal: controller.signal,
                });
                setData(response.data);
            } catch (err) {
                controller.abort();
                setError(err.message);
                setData(initialState);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData(dataUrl);
    }, [dataUrl]);

    return { data, isLoading, error };
};

export default useFetch;

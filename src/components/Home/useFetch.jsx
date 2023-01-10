import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (dataUrl) => {
    const [data, setData] = useState([]);
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
                setError(err.message);
                setData([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData(dataUrl);
    }, [dataUrl]);

    return { data, isLoading, error };
};

export default useFetch;

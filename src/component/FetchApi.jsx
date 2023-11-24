import { useEffect, useState } from 'react';
import axios from 'axios';

const FetchApi = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            setData(response.data);

        };

        fetchData();
    }, []);

    return (
        <div>
            <div>
                {data.title}
            </div>
        </div>
    );
};

export default FetchApi;

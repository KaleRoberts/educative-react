import { FC, useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import './Messages.css';

const INITIAL_MESSGE = '';

export const Messages: FC = () => {
    const [message, setMessage] = useState(INITIAL_MESSGE);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadMessage();
    }, []);

    const loadMessage = async () => {
        try {
            setLoading(true);
            const response: AxiosResponse<any> = await axios.get('https://json.versant.digital/.netlify/functions/fake-api/message');
            // if (response.data && response.status === 200) {
            //     setLoading(false);
            // }
            setMessage(response.data);
            setLoading(false);
        } catch (e) {
            setMessage(e.message);
            setLoading(false);
        }
    };

    return loading ? (
        <div className="loader">
        </div>
    ) : (
        <h1>{message}</h1>
    )
}

export default Messages;
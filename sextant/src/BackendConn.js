import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const BackendConn = () => {
    const [lat, setLat] = useState(null);

    useEffect(() => {
        const data = new W3CWebSocket('ws://localhost:55455');
        data.onmessage = (msg) => {
            setLat(new Date().getTime() - msg.data);
        };
        return () => {
            data.close();
        }
    }, []);
  return (
    <div>
        <h2>{lat}</h2>
    </div>
  )
}

export default BackendConn;
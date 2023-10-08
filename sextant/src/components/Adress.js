import React, { useEffect, useState } from 'react';

const Adress = ({url}) => {
    const [ip, setIp] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(url);
                const data = await res.json();
                setIp(data.ip);
            }catch (error) {
                console.error('Error', error);
            }
        };
        fetchData();
    }, [url]);

  return (
    <div>
        <h1>{ip}</h1>
    </div>
  )
}

export default Adress;
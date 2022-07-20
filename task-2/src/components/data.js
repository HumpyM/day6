import React, {useState, useEffect } from "react";
import axios from "axios";

const Data=() => {
    const [Data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData =async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(response.data);
                console.log(response.data);
                setError(null);
            }
        catch(error){
            setError(error.message);
            setData(null);
        }
    };
        getData();
    }, []);

        if(Data ===null){
            return <div>
                Loading ....
            {error && (
                <div><h3>{'There is a problem in fetching the post data- ${error}'}</h3></div>

            )}         
            </div>
        }
        return(
            <div>
                <h1>API Posts</h1>
                <ul>
                    {Data.map((item) =>(
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                        </li>
                    ))}
                </ul>
            </div>
            );
                    };

export default Data;

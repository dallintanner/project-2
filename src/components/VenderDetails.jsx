import { useEffect, useState } from "react";
import axios from "axios";

export default function VenderDetails({name, venderId}){
   const [items, setItems] = useState([]);
   useEffect( () => {
    axios.get(`/api/venderItems/${venderId}`).then(res => setItems(res.data))
   }, [])

    return(
        <div >
            <h2>{name}</h2>
            {items.map(item => {
                return (
                    <li key = {item.id}>{item.name}</li>
                )
            })}
        </div>
    );
}
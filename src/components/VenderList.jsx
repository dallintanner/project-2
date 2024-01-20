import { useEffect, useState } from "react";
import axios from "axios";
import ShowDetails from "./venderdetails.jsx"

export default function ListVenders({name, venderId}){
   const [items, setItems] = useState([]);
   useEffect( () => {
    axios.get(`/api/venderItems/${venderId}`).then(res => setItems(res.data))
   }, [])

    return(
        <div >

            <h2><ShowDetails name = {name} venderId = {venderId}/></h2>
            {items.map(item => {
                return (
                    <li key = {item.id}>{item.name}</li>
                )
            })}
        </div>
    );
}
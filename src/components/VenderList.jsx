import { useEffect, useState } from "react";
import axios from "axios";
import VenderDetails from "./VenderDetails.jsx"

export default function ListVenders({id, name, venderId, vender, setVenders, index}){
   const [items, setItems] = useState([]);
   useEffect( () => {
    axios.get(`/api/venderItems/${venderId}`).then(res => setItems(res.data))
   }, [])

    return(
        <div >

            <h2><VenderDetails key = {id} name = {name} venderId = {id} vender = {vender} setVenders = {setVenders} index = {index}/></h2>
            {items.map(item => {
                return (
                    <li key = {item.id}>{item.name}</li>
                )
            })}
        </div>
    );
}
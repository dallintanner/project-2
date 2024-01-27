import { useEffect, useState } from "react";
import axios from "axios";
import VenderDetails from "./VenderDetails.jsx"

export default function ListVenders(props){ //{name, venderId, vender, setVenders, index, rep, notes}
   const [items, setItems] = useState([]);
   useEffect( () => {
    axios.get(`/api/venderItems/${props.venderId}`).then(res => setItems(res.data))
   }, [])

    return(
        <div >

            <h2><VenderDetails key = {props.venderId} name = {props.name} venderId = {props.venderId} vender = {props.vender} setVenders = {props.setVenders} index = {props.index} rep = {props.rep} notes = {props.notes}/></h2>
            {items.map(item => {
                return (
                    <li key = {item.id}>{item.name}</li>
                )
            })}
        </div>
    );
}
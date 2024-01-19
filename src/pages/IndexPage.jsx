import { useLoaderData } from "react-router-dom";
import VenderDetails from "../components/VenderList";
import AddVender from "../components/AddVender";
import { useState } from "react";

export default function IndexPage(){
    const {venders} = useLoaderData(); // pull data from database
    const [vender, setVenders] = useState(venders); // put this date into state
    const listVenders = vender.map(({id, name,}) => ( // using this state date and mapping over it
       <VenderDetails key = {id} name = {name} venderId = {id}/>
    ));

    return(
        <>
            <h1>Inventory Manager App</h1>
            <ul>{listVenders}</ul>

            <AddVender newVender = {setVenders} vender = {vender}/>
        </>
    );
}
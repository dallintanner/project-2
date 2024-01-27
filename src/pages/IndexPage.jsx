import { useLoaderData } from "react-router-dom";
import VenderList from "../components/VenderList";
import AddVender from "../components/AddVender";
import ShowDetails from "../components/VenderDetails";
import { useState } from "react";

export default function IndexPage(){
    const {venders} = useLoaderData(); // pull data from database
    const [vender, setVenders] = useState(venders); // put this data into state
    //console.log(vender[0].rep);
    const listVenders = vender.map(({id, name, rep, notes, website}, index) => (  //using this state data and mapping over it
       <VenderList key = {id} name = {name} venderId = {id} vender = {vender} setVenders = {setVenders} index = {index} rep = {rep} notes = {notes} website = {website} />
       ));

    return(
        <>
            <h1>Inventory Manager App</h1>
            <ul>{listVenders}</ul>

            <AddVender setVenders = {setVenders} vender = {vender}/>
        </>
    );
}
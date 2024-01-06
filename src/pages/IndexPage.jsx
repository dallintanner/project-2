import { useLoaderData } from "react-router-dom";
import VenderDetails from "../components/VenderDetails";
import AddVender from "../components/AddVender";

export default function IndexPage(){
    const {venders} = useLoaderData();
    const listVenders = venders.map(({id, name,}) => (
       <VenderDetails key = {id} name = {name} venderId = {id}/>
    ));

    return(
        <>
            <h1>Inventory Manager App</h1>
            <ul>{listVenders}</ul>

            <>{AddVender()}</>
        </>
    );
}
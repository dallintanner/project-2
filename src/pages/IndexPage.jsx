// import { Vender, Item } from "../model";
import { useLoaderData } from "react-router-dom";

export default function IndexPage(){
    const {venders} = useLoaderData();
    const listVenders = venders.map(({id, name,}) => (
        <li key={id}>
            <h2>{name}</h2>
        </li>
    ));

    return(
        <>
            <h1>Inventory Manager App</h1>
            <ul>{listVenders}</ul>
        </>
    );
}
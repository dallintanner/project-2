import { Vender, Item } from "../model";

export default function IndexPage(){

    const listVenders = Vender.map(({venderId, name,}) => (
        <li key={venderId}>
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
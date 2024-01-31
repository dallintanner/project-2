import { useLoaderData } from "react-router-dom";
import VenderList from "../components/ListVenders";
import AddVender from "../components/AddVender";
import { useState } from "react";

export default function IndexPage() {
    const { venders } = useLoaderData(); // pull venders from database
    const [vender, setVenders] = useState(venders); // put venders into state
    const listVenders = vender.map(({ venderId, name, rep, notes, website }, index) => (  //using this state data and mapping over it
        <VenderList key={venderId} name={name} venderId={venderId} vender={vender} setVenders={setVenders} index={index} rep={rep} notes={notes} website={website} />
    ));

    return (
        <>  
            <h1>Inventory Manager App</h1>
            <ul>{listVenders}</ul>

            <AddVender setVenders={setVenders} vender={vender} />
        </>
    );
}
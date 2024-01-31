import VenderDetails from "./VenderDetails.jsx"
import ListItems from "./ListItems.jsx";
import AddItem from "./AddItem.jsx";

export default function ListVenders(props) { //{name, venderId, vender, setVenders, index, rep, notes, website}

    return (
        <div >
            <h2><VenderDetails key={props.venderId} name={props.name} venderId={props.venderId} vender={props.vender} setVenders={props.setVenders} index={props.index} rep={props.rep} notes={props.notes} website={props.website} /></h2>
            <ListItems key={props.venderId} vender={props.vender} items={props.vender[props.index].items} />
            <AddItem></AddItem>
        </div>
    );
}
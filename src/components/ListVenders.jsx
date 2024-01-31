import VenderDetails from "./VenderDetails.jsx"
import ListItems from "./ListItems.jsx";
import AddItem from "./AddItem.jsx";

export default function ListVenders(props) { //{name, venderId, vender, setVenders, index, rep, notes, website}
    console.log(props.vender[props.index].items)
    console.log(props.vender[props.index].name)

    return (
        <div >
            <h2><VenderDetails key={props.venderId} name={props.name} venderId={props.venderId} vender={props.vender} setVenders={props.setVenders} index={props.index} rep={props.rep} notes={props.notes} website={props.website} /></h2>
            <ListItems key={props.venderId} vender={props.vender} items={props.vender[props.index].items} />
            <AddItem items={props.vender[props.index].items} venderId={props.venderId} />
            </div>
    );
}
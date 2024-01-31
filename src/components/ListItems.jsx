import ItemDetails from "./ItemDetails";

export default function ListItems(props) {

    return (
        <>
            {props.items ?
                    props.items.map(item => {
                        return (
                            <li key={item.id}>{item.name}</li>
                        );
                    })
                : null}
        </>
    );
}
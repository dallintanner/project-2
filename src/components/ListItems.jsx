export default function ListItems(props) {
    console.log(props.items);

    return (
        <>
            {props.items.map(item => {
                return (
                    <li key={item.id}>{item.name}</li>
                );
            })}
        </>
    );
}
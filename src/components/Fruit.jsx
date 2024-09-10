

export default function Fruit({ name, price, emoji, soldout }) {
    return (
        <>
            <li key={name}>{emoji} {name} ${price} {soldout ? "soldOUT" : ''} </li>
        </>
    )
}
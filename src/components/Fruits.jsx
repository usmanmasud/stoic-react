import Fruit from "./Fruit";

export default function Fruits() {

    // const fruits = ['Apple', 'Mango', 'Banana', 'Oranegs'];
    const fruits = [
        { name: "Apple", price: 10, emoji: "🍎" },
        { name: "Mango", price: 6, emoji: "🥭" },
        { name: "Banana", price: 5, emoji: "🍌" },
        { name: "Pineapple", price: 8, emoji: "🍍" }
    ];

    return (
        <div>
            {fruits.map(fruit => <ul>
                <Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} key={fruit.name} />
            </ul>
            )
            }
        </div >
    )
}
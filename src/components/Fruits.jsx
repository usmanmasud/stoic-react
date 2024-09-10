import Fruit from "./Fruit";

export default function Fruits() {

    // const fruits = ['Apple', 'Mango', 'Banana', 'Oranegs'];
    const fruits = [
        { name: "Apple", price: 10, emoji: "🍎", soldout: false },
        { name: "Mango", price: 6, emoji: "🥭", soldout: true },
        { name: "Banana", price: 5, emoji: "🍌", soldout: false },
        { name: "Pineapple", price: 8, emoji: "🍍", soldout: false }
    ];

    return (
        <div>
            {fruits.map(fruit => <ul>
                <Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} soldout={fruit.soldout} />
            </ul>
            )
            }
        </div >
    )
}
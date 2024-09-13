import { useState } from "react"

export default function Form() {
    const [name, setName] = useState({ firstName: '', lastName: '', other: '' });

    return (
        <div>
            {name.firstName} - {name.lastName} - {name.other}
            <form>
                <input onChange={e => setName({ ...name, firstName: e.target.value })} type="text" value={name.firstName} />
                <input onChange={e => setName({ ...name, lastName: e.target.value })} type="text" value={name.lastName} />
                <input onChange={e => setName({ ...name, other: e.target.value })} type="text" value={name.other} />
                <button onClick={e => {
                    e.preventDefault()
                    console.log(name)
                }}>Add</button>
            </form>
        </div>
    )
}
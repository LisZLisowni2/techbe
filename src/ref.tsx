import { useRef, useState } from "react"

export default function RefComponent() {
    let clickCounterNotRef = 0;
    const countRef = useRef(0)
    const inputRef = useRef(null)
    const listRef = useRef(new Map())

    const [change, setChange] = useState(false)

    return (
        <div style={{ paddingLeft: '30px' }}>
            <div>
                <button onClick={() => { countRef.current++; clickCounterNotRef++ }}>
                    Dodaj
                </button>
                <button onClick={() => { alert(`Ilość kliknięć z REFA: ${countRef.current}`); alert(`Ilość kliknięć ze zmiennej: ${clickCounterNotRef}`) }}>
                    Wyświetl
                </button>
                <button onClick={() => setChange(!change)}>Zmień stan</button>
            </div>
            <button onClick={() => inputRef.current.focus()}>Fokus</button>
            <Input ref={inputRef} />
            <ul>
                <li ref={node => listRef.current.set('1', node)}>1.</li>
                <li ref={node => listRef.current.set('2', node)}>2.</li>
                <li ref={node => listRef.current.set('3', node)}>3.</li>
            </ul>
        </div>
    )
}

function Input({ ref }) {
    return <input type="text" ref={ref} />
}
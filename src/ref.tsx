import { useRef, useState } from "react"
import React from "react";

export default function RefComponent() {
    let clickCounterNotRef = 0;
    const countRef = useRef(0)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const listRef = useRef<Map<string, HTMLLIElement>>(new Map<string, HTMLLIElement>())

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
            <button onClick={() => inputRef.current?.focus()}>Fokus</button>
            <Input ref={inputRef} />
            <ul>
                <li ref={node => { if (node) listRef.current?.set('1', node) }}>1.</li>
                <li ref={node => { if (node) listRef.current?.set('2', node) }}>2.</li>
                <li ref={node => { if (node) listRef.current?.set('3', node) }}>3.</li>
            </ul>
        </div>
    )
}

function Input({ ref }: { ref: React.RefObject<HTMLInputElement | null> }) {
    return <input type="text" ref={ref} />
}
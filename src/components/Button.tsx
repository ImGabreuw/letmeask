import {useState} from "react";

// Tipagem com Typescript
// type ButtonProps = {
//     children?: string; // atributo opcional (?:)
// }

export function Button() { // Named export
    // Sem React: (Não funciona bem, pois o conteúdo do botão não é alterado)
    // let counter = 0;
    // function increment() {
    //     counter++;
    // }

    // Com React:
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
        console.log(counter)
    }

    return (
        // <button>{props.children || "Default value"}</button>

        <button onClick={increment}>
            {counter}
        </button> // referência de um função
    )
}
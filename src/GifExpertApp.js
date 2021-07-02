import { useState } from "react";
import {AddCategory} from './Components/AddCategory';
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {

    // const categories = ['Mauricio', 'Javiera', 'Alejandra'];

    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     //Una forma de hacerlo, una de las más comunes
    //     // setCategories([...categories, 'Constanza']);

    //     //otra forma de hacerlo, usando el callback de setCategories
    //     // setCategories( cats => [...cats, 'Conztanza']);
    // }

    return ( 
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>

        {/* <button onClick={ handleAdd }>Agregar</button> */}

        <ol>
            {
                categories.map((category) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </ol>
        </>
     );
}
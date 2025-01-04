import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['The Office']);

    const onAddCategory = (newCategory) => { 
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        //setCategories(cats => [...cats, 'Valorant'] /*agregar un nuevo valor al array*/);
    }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(event) => onAddCategory(event)}/>
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}
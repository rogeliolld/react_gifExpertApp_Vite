import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);

  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center flex-col  text-center">
          <h1 className="text-3xl text-slate-600 uppercase">Gif Expert App</h1>
          <AddCategory
            onNewCategory={event => onAddCategory(event)}
          />

          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            onClick={onAddCategory}>
            Agregar
          </button>

          {
            categories.map(category => (
              <GifGrid
                category={category}
                key={category} />
            ))
          }
        </div>
      </div>
    </>
  )
}

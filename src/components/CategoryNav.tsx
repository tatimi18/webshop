import React from 'react'
import catalog from '../catalog_data/catalog.json'

const CategoryNav = ({classNameUl, className__input, onClick}) => {
    const categoriesSet = new Set();
    const allCategories = [];

    for (let item of catalog) {
        allCategories.push(...item.categories)
    }

    for (let category of allCategories) {
        categoriesSet.add(category)
    }

    const listCategories = Array.from(categoriesSet).map((category: string) => 
        <input 
            readOnly
            value={category}
            key={category} 
            className={className__input}
            onClick={onClick}
        />
        
        )

  return (
    <ul className={classNameUl}>
        {listCategories}
    </ul>
  )
}

export default CategoryNav

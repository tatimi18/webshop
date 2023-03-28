import React from 'react';

interface CatalogListProps<T> {
    items: T[];
    onChange: any;
    renderItem: (item: T) => React.ReactNode
}

export default function CatalogList<T>(props: CatalogListProps<T>) {
  return (


    <section className="catalog">
        <div className="catalog__wrapper">
            
            
            {props.items.map(props.renderItem)}
        </div>
	</section>
  )
}


import React, { useState } from 'react';
import '../src/css/style.css';
import Navbar from './components/Navbar';
import catalog from './catalog_data/catalog.json';
import CatalogList from './components/CatalogList';
import CatalogItem from './components/CatalogItem';
import MySelect from './components/UI/select/MySelect';
import Sidebar from './components/Sidebar';



function App() {	
	const [selectedSort, setSelectedSort] = useState('');
	const [catalogOrder, setCatalogOrder] = useState(catalog)


	const sortCatalog = (sortType: string) => {
		setSelectedSort(sortType);
		getSortedCatalog(catalog, sortType)
	}

	const getSortedCatalog = (itemsToSort, nameSelect: string) => {
		const sortedCatalog = [...itemsToSort];
		if (nameSelect.includes('title')) {
			sortedCatalog.sort((a, b) => a.title.localeCompare(b.title))
		} else if (nameSelect.includes('price')) {
			sortedCatalog.sort((a, b) => (a.price) - (b.price))
		}

		if (nameSelect.includes('DOWN')) {
			sortedCatalog.reverse()
		}
		setCatalogOrder(sortedCatalog)
	} 

	return (

		<div>
			<Navbar/>

			<div className="container">

				<div className="flex__firstLine" style={{display: 'flex'}}>
					<div className="catalog__title">Косметика и гигиена</div>

					<MySelect 
						value={selectedSort}
						onChange={sortCatalog}
						options={[
							{value: 'title-UP', name: 'Название ↑', reverse: false},
							{value: 'title-DOWN', name: 'Название ↓', reverse: true}, 
							{value: 'price-UP', name: 'Цена ↑', reverse: false},
							{value: 'price-DOWN', name: 'Цена ↓', reverse: true},
						]}
						defaultValue={'Выбрать'}
					/>
				</div>

				<div className="flex">
					<Sidebar/>
					<CatalogList 
						items={catalogOrder} 
						onChange={setCatalogOrder}
						renderItem={(item) => <CatalogItem key={item.id} item={item}/>}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;

import React, { useState } from 'react';
import '../src/css/style.css';
import Navbar from './components/Navbar';
import catalog from './catalog_data/catalog.json';
import CatalogList from './components/CatalogList';
import CatalogItem from './components/CatalogItem';
import MySelect from './components/UI/select/MySelect';



function App() {	
	const [selectedSort, setSelectedSort] = useState('');
	const [catalogOrder, setCatalogOrder] = useState(catalog)


	const sortCatalog = (sortType) => {
		setSelectedSort(sortType);
		getSortedCatalog(catalog, sortType)
	}

	const getSortedCatalog = (itemsToSort, nameSelect) => {
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
			
			<MySelect 
				value={selectedSort}
				onChange={sortCatalog}
				options={[
					{value: 'title-UP', name: 'По названию по возрастанию', reverse: false},
					{value: 'title-DOWN', name: 'По названию по убыванию', reverse: true}, 
					{value: 'price-UP', name: 'По цене по возрастанию', reverse: false},
					{value: 'price-DOWN', name: 'По цене по убыванию', reverse: true},
				]}
				defaultValue={'сортировать'}
			/>
			<CatalogList 
				items={catalogOrder} 
				onChange={setCatalogOrder}
				renderItem={(item) => <CatalogItem key={item.id} item={item}/>}
			/>
		</div>
	);
}

export default App;

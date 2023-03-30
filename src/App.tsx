import React, { useState } from 'react';
import '../src/css/style.css';
import Navbar from './components/Navbar';
import catalog from './catalog_data/catalog.json';
import CatalogList from './components/CatalogList';
import CatalogItem from './components/CatalogItem';
import MySelect from './components/UI/select/MySelect';
import Sidebar from './components/Sidebar';
import CategoryNav from './components/CategoryNav';



function App() {	
	let copyCatalog = [...catalog]

	const [selectedSort, setSelectedSort] = useState('');
	const [catalogOrder, setCatalogOrder] = useState(copyCatalog);

	const [priceStart, setPriceStart] = useState('')
	const [priceEnd, setPriceEnd] = useState('')

	const sortCatalog = (sortType: string) => {
		setSelectedSort(sortType);
		getSortedCatalog(copyCatalog, sortType)
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

	function filterByCategory(category) {
		/* category.target.classList.toggle('input__category__active')

		if (category.target.className === 'input__category input__category__active') {
			getFilteredCatalog(catalogOrder, category.target.value)
		} else {
			console.log('отменяем фильтр');
			setCatalogOrder(catalog)
		} */

		category.target.className = 'input__category input__category__active';
		getFilteredCatalog(catalogOrder, category.target.value)


	}

	function getFilteredCatalog(itemsToFilter, selectedFilter) {
		let copy = [...itemsToFilter];
		const words = selectedFilter.split(' ')
	
		let filteredCatalog = copy.filter(item => item.categories.join(',').includes(words[words.length - 1]))
		setCatalogOrder(filteredCatalog)
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

				<CategoryNav
					onClick={filterByCategory}
					className__input={'input__category'}
					classNameUl={'ul__horizontal'}
				/>
				
				<div className="flex">
					<Sidebar
						priceStart={priceStart}
						priceEnd={priceEnd}
						onChangePriceStart={e => setPriceStart(e.target.value)}
						onChangePriceEnd={e => setPriceEnd(e.target.value)}
					/>
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

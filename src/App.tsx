import React from 'react';
import '../src/css/style.css';
import Navbar from './components/Navbar';
import catalog from './catalog_data/catalog.json';
import CatalogList from './components/CatalogList';
import CatalogItem from './components/CatalogItem';


function App() {
	
	return (

		<div>
			<Navbar/>
			<CatalogList 
				items={catalog} 
				renderItem={(item) => <CatalogItem key={item.id} item={item}/>}
			/>
		</div>
	);
}

export default App;

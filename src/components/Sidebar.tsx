import React from 'react'
import MyInput from './UI/input/MyInput';
import catalog from '../catalog_data/catalog.json';

const Sidebar = () => {
    const produsersSet = new Set();
	for (let item of catalog) {
		produsersSet.add(item.producer)
	}
    
	const produsers = Array.from(produsersSet);

    return (
        <section className='sidebar'>
			<div className="title">ПОДБОР ПО ПАРАМЕТРАМ</div>
            <div className="filter__price-text">Цена <span className='price'>₽</span></div>
            <div className="filter__price-inputs">
                <MyInput placeholder={'0'} type={'number'} className={'input__price-filter'} />
                    - 
                <MyInput placeholder={'10 000'} type={'number'} className={'input__price-filter'} />
            </div>
            <div className="search__produser">
                <div className="search__produser-title">Производитель</div>
                <MyInput placeholder={'Поиск...'} className={'input'} type={'text'}/>
                <div className="filterList">
                    {produsers.map((produser: any) => 
                        <div className='checkboxes' key={produser}>
                            <input type='checkbox' name={produser}/>
                            <p className='checkbox-name'>{produser}</p>
                        </div>)}
                </div>
            </div>

            <div>Кнопки по категориям</div>

		</section>
    )
}

export default Sidebar

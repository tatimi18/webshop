import React from 'react'
import MyInput from './UI/input/MyInput';
import catalog from '../catalog_data/catalog.json';
import MyButton from './UI/button/MyButton';
import deleteIcon from '../icons/navbar/delete.svg';

const Sidebar = ({priceStart, priceEnd, onChangePriceStart, onChangePriceEnd}) => {
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
                <MyInput 
                    value={priceStart}
                    name="priceStart"
                    onChange={onChangePriceStart}
                    placeholder={'0'} 
                    type={'text'} 
                    className={'input__price-filter'} 
                />
                    - 
                <MyInput 
                    value={priceEnd}
                    name="priceEnd"
                    onChange={onChangePriceEnd}
                    placeholder={'10 000'} 
                    type={'text'} 
                    className={'input__price-filter'} 
                />
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

            <div className="line__horizontal"></div>

            <div className="flex">
                <MyButton classNameBtn={'btn'} text={'Показать'}/>
                <MyButton classNameBtn={'btn btn__img-only'} text={''} srcImg={deleteIcon} alt={'delete'}/>


            </div>
            <div>Кнопки по категориям</div>

		</section>
    )
}

export default Sidebar

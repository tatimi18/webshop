import React, {FC} from 'react';
import { ICatalogItem } from '../types/types';
import volume from '../icons/catalog/volume.svg'
import weight from '../icons/catalog/weight.svg'
import MyButton from './UI/button/MyButton';
import buy from '../icons/catalog/buy.svg'

interface CatalogItemProps {
    item: ICatalogItem;
}



const CatalogItem: FC<CatalogItemProps> = ({item}) => {

    const SizeTypeVariant = item.sizeType;
    return (
        <div className='item__card'>
            <img className='item__img' src={item.url} alt={item.title} />

            {SizeTypeVariant === 'volume' && (
                <div className='item__size-type-wrapper'>
                    <img src={volume} alt={item.sizeType} />
                    <p className='item__size-type-text'>{item.size} мл</p> 
                </div>
            )}

            {SizeTypeVariant === 'weight' && (
                <div className='item__size-type-wrapper'>
                    <img src={weight} alt={item.sizeType} />
                    <p className='item__size-type-text'>{item.size} г</p> 
                </div>
            )}
            
            <p className='item__title'>
                <span className='item__brand-span'>{item.brand} </span>
                {item.title}
            </p>

            <p className="item__info">
                Штрихкод: <span className='item__info-span'>{item.barcode}</span>
            </p>
            <p className="item__info">
                Производитель: <span className='item__info-span'>{item.producer}</span>
            </p>
            <p className="item__info">
                Бренд: <span className='item__info-span'>{item.brand}</span>
            </p>

            <div className="item__buy">
                <p className="item__price">{item.price} ₽</p>
                <MyButton srcImg={buy} classNameImg={'btn__img-buy'} classNameBtn='btn btn__buy'  text={'В КОРЗИНУ'}/>
            </div>
            
            
        </div>
    )
}

export default CatalogItem

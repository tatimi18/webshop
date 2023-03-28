/* 

import React, { useState } from "react";

const MySelect = ({}) => {
  const [selectedSort, setSelectedSort] = useState<String>();

  // This function is triggered when the select changes
  const sortCatalog = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value= event.target.value;
    setSelectedSort(value);
  };
  const sortCatalog = (sort: any) => {
    console.log(`сортировка по`);
  };

  return (
    <div>
        <select 


        >
            <option selected disabled>Сортировка по</option>
            
            <option value="title-ascending">По названию по возрастанию</option>
            <option value="title-descending">По названию по убыванию</option>
            <option value="price-ascending">По цене по возрастанию</option>
            <option value="price-descending">По цене по убыванию</option>
        </select>

    </div>
  );
};

export default MySelect; */

import React, {FC} from 'react'

interface ISelect {
    value: string;
    onChange: (e: any) => void;
    options: any;
    defaultValue: string
}

const MySelect: FC<ISelect> = ({options, defaultValue, value, onChange}) => {
  return (
    <div className='select__wrapper'>
      <div className="select__title">Сортировка:</div>
      <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={'select'}
      >
          <option className='select__option' disabled value="">{defaultValue}</option>
          {options.map(option => <option className='select__option' key={option.name} value={option.value}>{option.name}</option>)}
      </select>
    </div>
  )
}

export default MySelect

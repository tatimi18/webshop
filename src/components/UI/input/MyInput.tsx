import React, {FC} from 'react';

interface MyInputProps {
	onChange?: any
	name?: string;
	value?: string | number;
	className: string;
	placeholder: string;
	type: string;
}

const MyInput: FC<MyInputProps> = ({className, placeholder, type, value, onChange}) => {
  return (
    <input 
		value={value} 
		onChange={onChange}
		className={className} 
		type={type} 
		placeholder={placeholder} 
	/>
  )
}

export default MyInput

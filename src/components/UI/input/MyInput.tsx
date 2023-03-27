import React, {FC} from 'react';

interface MyInputProps {
  className: string;
  placeholder: string;
  type: string;
}

const MyInput: FC<MyInputProps> = ({className, placeholder, type}) => {
  return (
    <input className={className} type={type} placeholder={placeholder} />
  )
}

export default MyInput

import React, {FC} from 'react';

interface MyInputProps {
  className: string;
  placeholder: string;
}

const MyInput: FC<MyInputProps> = ({className, placeholder}) => {
  return (
    <input className={className} type="text" placeholder={placeholder} />
  )
}

export default MyInput

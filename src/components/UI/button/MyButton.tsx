import React, {FC} from 'react';

interface MyButtonProps {
  classNameBtn: string;
  classNameImg?: string;
  text: string;
  srcImg?: string;
  alt?: string;
}

const MyButton: FC<MyButtonProps> = ({classNameBtn, classNameImg, text, srcImg, alt}) => {
  return (
    <button className={classNameBtn}>
      {text}
      <img className={classNameImg} src={srcImg} alt={alt}></img>
    </button>
  )
}

export default MyButton

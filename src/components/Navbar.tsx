import React, {FC} from 'react';
import locationImg from '../icons/navbar/location.svg';
import mailImg from '../icons/navbar/mail.svg';
import logo from '../icons/navbar/logo.svg';
import catalog from '../icons/navbar/catalog.svg';
import download from '../icons/navbar/download.svg';
import woman from '../img/navbar/woman.png';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const Navbar: FC = () => {
  return (
    <div>
      <nav className='nav'>
			<div className="container">
				<div className="first-line">
					<div className='nav-block'>
						<div className="nav-block__content">
							<img className='nav__img' src={locationImg} alt="location" />
							<div className='nav__descr'>
								<p className="nav__text nav__text__bold">г. Кокчетав, ул. Ж. Ташенова 129Б</p>
								<p className="nav__text nav__text__thin">(Рынок Восточный)</p>
							</div>
						</div>

						<div className="line"></div>

						<div className="nav-block__content">
							<img className='nav__img' src={mailImg} alt="mail" />
							<div className='nav__descr'>
								<p className="nav__text nav__text__bold">opt.sultan@mail.ru</p>
								<p className="nav__text nav__text__thin">На связи в любое время</p>
							</div>
						</div>
						
					</div>

					<div className='nav-block'>
						<p className="nav__link">О компании</p>
						<div className="line line__mini"></div>
						<p className="nav__link">Доставка и оплата</p>
						<div className="line line__mini"></div>
						<p className="nav__link">Возврат</p>
						<div className="line line__mini"></div>
						<p className="nav__link">Контакты</p>
					</div>

				</div>
			</div>

			<div className='hr'></div>
			

			<div className="container">
				<div className="second-line">
					<img src={logo} alt="logo" />
					<MyButton classNameImg='btn__img' classNameBtn={'btn btn__catalog'} text={'Каталог'} srcImg={catalog} alt={'catalog'}/>
                    <MyInput type={'text'} className={'input input__nav'} placeholder={'Поиск...'}/>
					<div className="nav__info">
						<div className="nav__info__text">
							<div className="tel">+7 (777) 490-00-91</div>
							<div className="time">время работы: 9:00-20:00</div>
							<div className="call">Заказать звонок</div>
						</div>
						<img src={woman} alt="woman" className="nav__info__img" />
					</div>

					<div className="line line__second-nav"></div>

                    <MyButton classNameBtn={'btn btn__price'} text={'Прайс-лист'} classNameImg={'btn__img'} srcImg={download} alt={'download'}/>
					<div className="line line__second-nav"></div>

					<div>БЛОК С КОРЗИНОЙ</div>
				</div>
			</div>
			
			<div className='hr'></div>
		</nav>
    </div>
  )
}

export default Navbar

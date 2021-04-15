import React from 'react';
import {Link} from "react-router-dom";
import {updateCarsData} from "../redux/reducers/cars";
import {useDispatch} from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <Link to='/'>LoGo</Link>
                    <div>
                        <Link to='/' className='nav-item'>Главная</Link>
                        <Link to='/about' className='nav-item'>О нас</Link>
                        <Link to='/catalog' className='nav-item' onClick={dispatch(updateCarsData())}>Каталог</Link>
                        <Link to='/contacts' className='nav-item'>Контакты</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};
export default Header;
import React from 'react';
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';

const Catalog = () => {
    const carsArray = useSelector(s => s.cars.carsData);
    return (
        <div>
            <div className='row'>
                {carsArray.map((car) => (
                    <div className='card' key={car.id}>
                        <img src="" alt=""/>
                        <p>Модель машины: {car.car_model}</p>
                        <p>Производитель: {car.car_make}</p>
                        <p>Год выпуска: {car.car_year}</p>
                        <p>Цена: {car.price}</p>
                        <Link  className='link'to={`/catalog/${car.id}`}>Подробнее</Link>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Catalog;
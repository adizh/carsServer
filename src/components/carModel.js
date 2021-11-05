import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

const CarModel = () => {
    const {carId} = useParams();
    const filterArr = useSelector(s => s.cars.carsData.filter((el) => el.id === +carId));
    const [car] = filterArr;
 
    return (
        <div className='carInfo'>
           <div className='card' key={car.id}>
                        <img src="" alt=""/>
                        <p>Модель машины: {car.car_model}</p>
                        <p>Производитель: {car.car_make}</p>
                        <p>Год выпуска: {car.car_year}</p>
                        <p>Цена: {car.price}</p>
                    </div>

            <div><Link className='link main' to='/catalog'>Back</Link></div>
            <div><Link className='link main' to='/'>Main page</Link></div>
        </div>
    );
};
export default CarModel;
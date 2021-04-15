import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

const CarModel = () => {
    const {carId} = useParams();
    const filterArr = useSelector(s => s.cars.carsData.filter((el) => el.id === +carId));
    const [carObj] = filterArr;
    return (
        <div>
            тут только {JSON.stringify(carObj)}
            <div><Link to='/catalog'>Back</Link></div>
            <div><Link to='/'>Main page</Link></div>
        </div>
    );
};
export default CarModel;
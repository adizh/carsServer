import axios from "axios";

const initialState = {
    name: '',
    carsData: []
};
const UPDATE_CARS_DATA = 'UPDATE_CARS_DATA';
export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CARS_DATA: {
            return {
                ...state,
                carsData: action.carsData
            }
        }
        default:
            return state
    }
}
export const updateCarsData = () => {
    return (dispatch) => {
        axios('http://localhost:8080/api/v1/cars')
            .then(({data}) => {
                    dispatch({type: UPDATE_CARS_DATA, carsData: data})
                }
            )
    }
};
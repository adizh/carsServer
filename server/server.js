const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = 8080;
const cors = require("cors");
server.use(cors());
server.use(bodyParser.json());


server.get('/api/v1/cars', (req, res) => {
    res.send([{"id": 1, "car_make": "Ford", "car_model": "E-Series", "car_year": 1986, "price": 40090},
        {"id": 2, "car_make": "BMW", "car_model": "7 Series", "car_year": 2010, "price": 40090},
        {"id": 3, "car_make": "Chrysler", "car_model": "Pacifica", "car_year": 2007, "price": 40090},
        {"id": 4, "car_make": "Chevrolet", "car_model": "Suburban 2500", "car_year": 1999, "price": 40090},
        {"id": 5, "car_make": "Saturn", "car_model": "VUE", "car_year": 2010, "price": 40090},
        {"id": 6, "car_make": "Mercury", "car_model": "Capri", "car_year": 1984, "price": 40090},
        {"id": 7, "car_make": "Mazda", "car_model": "Miata MX-5", "car_year": 2003, "price": 40090},
        {"id": 8, "car_make": "Ford", "car_model": "Aerostar", "car_year": 1992, "price": 40090},
        {"id": 9, "car_make": "Hyundai", "car_model": "Tiburon", "car_year": 2007, "price": 40090},
        {"id": 10, "car_make": "Ford", "car_model": "Crown Victoria", "car_year": 2002, "price": 40090},
        {"id": 11, "car_make": "Pontiac", "car_model": "LeMans", "car_year": 1993, "price": "договорная"},
        {"id": 12, "car_make": "Ford", "car_model": "Explorer Sport", "car_year": 2002, "price": "договорная"},
        {"id": 13, "car_make": "Oldsmobile", "car_model": "Alero", "car_year": 2000, "price": "договорная"},
        {"id": 14, "car_make": "Land Rover", "car_model": "Range Rover", "car_year": 1987, "price": "договорная"},
        {"id": 15, "car_make": "Chrysler", "car_model": "Town & Country", "car_year": 2012, "price": "договорная"},
        {"id": 16, "car_make": "Aptera", "car_model": "Typ-1", "car_year": 2008, "price": "договорная"},
        {"id": 17, "car_make": "Honda", "car_model": "Prelude", "car_year": 2000, "price": "договорная"},
        {"id": 18, "car_make": "Audi", "car_model": "A6", "car_year": 2005, "price": "договорная"},
        {"id": 19, "car_make": "Hyundai", "car_model": "Accent", "car_year": 2010, "price": "договорная"},
        {"id": 20, "car_make": "Mazda", "car_model": "CX-9", "car_year": 2011, "price": "договорная"},
        {"id": 21, "car_make": "BMW", "car_model": "X6", "car_year": 2011, "price": "договорная"},
        {"id": 22, "car_make": "Toyota", "car_model": "Previa", "car_year": 1995, "price": 12000},
        {"id": 23, "car_make": "Lamborghini", "car_model": "Diablo", "car_year": 1999, "price": 12000},
        {"id": 24, "car_make": "Suzuki", "car_model": "Verona", "car_year": 2005, "price": 12000},
        {"id": 25, "car_make": "GMC", "car_model": "3500 Club Coupe", "car_year": 1997, "price": 12000},
        {"id": 26, "car_make": "Chrysler", "car_model": "Sebring", "car_year": 2006, "price": 12000},
        {"id": 27, "car_make": "Infiniti", "car_model": "J", "car_year": 1993, "price": 12000},
        {"id": 28, "car_make": "Mitsubishi", "car_model": "Outlander", "car_year": 2007, "price": 12000},
        {"id": 29, "car_make": "Mazda", "car_model": "MX-3", "car_year": 1993, "price": 12000},
        {"id": 30, "car_make": "Ford", "car_model": "F350", "car_year": 2000, "price": 12000}])
});
server.listen(port);

/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

const api_key = "68bfa8c09d951eac7f9b9d52b66ecccf";

/**
 * Fecth data from server
 * @param {string} URL API URL
 * @param {Function} callback callback
 */
export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon){
        return `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon){
        return `https://cors-anywhere.herokuapp.com/https//api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric&appid`;
    },
    airPolution(lat, lon){
        return `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
    },
    reverseGeo(lat, lon){
        return `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },
    geo(query){
        return `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    }
};

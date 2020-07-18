
import { GetAllCities, AddCity, UpdateCity, DeleteCity, CityLookUp } from 'api/Core/CityManager';

let AddCityAPI = async (city, callback) => {
    return await AddCity(city, callback);
};

let UpdateCityAPI = async (city_id, city, callback) => {
    return await UpdateCity(city_id, city, callback);
};

let DeleteCityAPI = async (city_id, callback) => {
    return await DeleteCity(city_id, callback);
};

let GetCiteisAPI = async (filter, callback) => {
    return await GetAllCities( filter, callback);
};

let CityLookUpAPI = async (city_id, callback) => {
    return await CityLookUp( city_id, callback);
};

export { AddCityAPI, UpdateCityAPI, DeleteCityAPI, GetCiteisAPI, CityLookUpAPI };
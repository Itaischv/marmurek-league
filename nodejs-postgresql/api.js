import axios from "axios";
import dotenv from "dotenv/config";

const token = process.env.RAPID_API_KEY;
const IPL_ID = 383;  // Ligat Ha'al
const season = 2022;

const headers = {
    'x-rapidapi-key': token,
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
}
const requestOptions = (url, params, method = "GET") => (
    {
        method: method,
        url: url,
        params: params,
        headers: headers
    });


export function getFixtures(){
    const req = requestOptions("https://api-football-v1.p.rapidapi.com/v3/fixtures/", {
        league: IPL_ID, season: season
    })
    return axios.request(req).then(function (response) {
        return response.data.response;
    }).catch(function (error) {
        return error;
    });
}

export function getRoundFixtures(round_number){
    const req = requestOptions("https://api-football-v1.p.rapidapi.com/v3/fixtures/", {
        league: IPL_ID, season: season, round: "Regular Season - ".concat(round_number)
    });
    return axios.request(req).then(function (response) {
        console.log(response.data.response)
        return response.data.response;
    }).catch(function (error) {
        return error;
    });
}



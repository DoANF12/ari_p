import axios from "axios";

const Apple  = 'https://newsapi.org/v2/everything?q=apple&from=2023-01-12&to=2023-01-12&sortBy=popularity&apiKey='
const Tesla  = 'https://newsapi.org/v2/everything?q=tesla&from=2022-12-13&sortBy=publishedAt&apiKey='
const Busines  = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='
const Key = 'f9cda15d45784978b4ead99b46b7db96'
//Apple
async function getApple() {
    return await axios
    .get(Apple + Key, 
    // {
    // headers: { key: 'f9cda15d45784978b4ead99b46b7db96' },
    // }
    )
    .then((res) => {
    if (res.status != 200) throw new Error("Response Failed");
    return res.data;
    })  
}
//Tesla
async function getTesla() {
    return await axios
    .get(Tesla + Key, 
    // {
    // headers: { 'content-type': 'application/json' },
    // }
    )
    .then((res) => {
    if (res.status != 200) throw new Error("Response Failed");
    return res.data;
    })  
}

//Busines
async function getBussines() {
    return await axios
    .get(Busines + Key, 
    // {
    // headers: { 'content-type': 'application/json' },
    // }
    )
    .then((res) => {
    if (res.status != 200) throw new Error("Response Failed");
    return res.data;
    })  
}

export default {getBussines,getTesla,getApple}
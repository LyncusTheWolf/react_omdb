const apiString = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

//#region Get search terms
//#region Promise Chain Handlers
// export const getMoviesBySearchTerm = async (searchTerm) =>
//     await fetch(`${apiString}&s=${searchTerm}`)
//         .then(res => res.json())
//         .then(res => res)
//         .catch(err => err);

// export const getMovieDetailsById = async (movieId="tt3896198") =>
//     await fetch(`${apiString}&i=${movieId}`)
//         .then(res => res.json())
//         .then(res => res)
//         .catch(err => err);
//#endregion

//region Full Function Calls
export const getMoviesBySearchTerm = async (searchTerm, pageNumber, queryOptions) => {
    const extraQueryStrings = new URLSearchParams(queryOptions).toString();
    console.log(extraQueryStrings);
    //&${extraQueryStrings}
    const searchURL = `${apiString}&s=${searchTerm}&page=${pageNumber}&${extraQueryStrings}`; // based on the omdbapi docs we need to use s query string
    const response = await fetch(searchURL);

    
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    const result = await response.json();

    if (result.Response === "True") {
        return result;
    }

    return [];
};

export const getMovieDetailsById = async (searchId) => {
    const searchURL = `${apiString}&i=${searchId}`; // based on the omdbapi docs we need to use i query string

    const response = await fetch(searchURL);

    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    const result = await response.json();

    if (result) {
        return result;
    }

    return null;
};
//#endregion
//#endregion

//#region Data management fucntions
export const saveData = (newData) => sessionStorage.setItem(newData.length ? "movies" : "movie", JSON.stringify(newData));

export const retrieveStorageData = (key) => {
    const dataKey = sessionStorage.getItem(key);
    return JSON.parse(dataKey);
}
//#endregion

export const convertToLowerCase = (data) => {
    if(data.length){
        data.map((obj) =>
            Object.keys(obj).reduce((value, key) => {                
                value[key.toLowerCase()] = obj[key];
                return value;
            })
        )
    } else {
        Object.keys(data).reduce((value, key) => {
            //console.log(key);
            value[key.toLowerCase()] = data[key];
            console.log(value);
            return value;
        }, {})
    }

    console.log(data);
}

export const clamp = (num, min, max)=>{
    return Math.min(Math.max(num, min), max);
}

//#region Legacy Code
// export const getMoviesBySearchTerm = async (searchTerm) =>{
//     const response = await fetch(`${apiString}&s=${searchTerm}`);
//     let movieJSON = await response.json();

//     return movieJSON;
// }

// export const getMovieDetailsById = async (searchID="tt3896198") =>{
//     const response = await fetch(`${apiString}&i=${searchID}`);
//     let movieJSON = await response.json();

//     return movieJSON;
// }
//#endregion

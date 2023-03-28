export const discoverRequest = (genre)=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=145d735794b8c35cc77b1dd1a86ea0dd&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genre}`)
    
    //after we reach fulfilled status for our requested data (link in fetch), we pass a function.
    // response is the data + info about the request
    .then((response) =>{
        // but we need only data (without info), so we call json fucntion to response object, in order to reach the data.
        return(
            response.json()
        )
    })
    //the data from past then is avaliable in the next then (in data value)
    .then((data) => console.log(data));
}
//its all about Promise

//newer way to work with promise 
//writing async is necessary to use await inside function
//pageNum=1 - param with default value, if pageNUm has value it'll use this value unless it has no value it'll use 1
export const discoverRequestNew = async(genre, pageNum=1)=>{
    const linkHandler= ()=>{
        return(
            genre==null?"":`&with_genres=${genre}`
        )
    }
    //await doesnt let the variable to create without async data;
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=145d735794b8c35cc77b1dd1a86ea0dd&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&include_adult=false&with_original_language=en&page=${pageNum}${linkHandler()}`);
    let data = response.json();
    return data;
}

// export const imageRequest = async (imageName)=>{
//     let response = await fetch(`https://image.tmdb.org/t/p/w500/${imageName}`)
//     let image = response;
//     console.log(image)
// }

//a request that gives us a random movie from top 100 most popular ones atm.
export const randomMovieRequest = async()=>{
    //generates a random number between 1-5
    let randomNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    // sends a fetch request for popular movies from page randomNum
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=145d735794b8c35cc77b1dd1a86ea0dd&language=en-US&sort_by=popularity.desc&include_adult=false&with_original_language=en&page=${randomNum}`)
    let data = response.json();
    return data;
}

export const lastReleasedRequest = async()=>{
    let date = new Date().toISOString().slice(0, 10);
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=145d735794b8c35cc77b1dd1a86ea0dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.lte=${date}&with_original_language=en`)
    let data = response.json();
    return data;
}

export const popularActorsRequest = async()=>{
    let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=145d735794b8c35cc77b1dd1a86ea0dd&language=en-US&page=${randomNum}`)
    let data = response.json();
    return data;
}

export const specificMovieRequest = async(id)=>{
    //creating the object where the data will be stored
    const data = {}
    let infoResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=145d735794b8c35cc77b1dd1a86ea0dd&language=en-US`)
    //the condition (.ok) returns bool (true or false) if the response was successful or not
    if(infoResponse.ok){
        //we create a new key inside the object and put the response as it's value
        data["info"] = await infoResponse.json()
    }
    let castRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=145d735794b8c35cc77b1dd1a86ea0dd&language=en-US`)
    if(castRes.ok){
        data["cast"] = await castRes.json()
        return data
    }
    return null
}
//refactoring to promiseAll
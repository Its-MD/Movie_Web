export const getMovie = async()=>{
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=145d735794b8c35cc77b1dd1a86ea0dd&query=the+avengers`);
    let data = response.json();
    return data;
}
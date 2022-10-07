export class ApiEndpoints{
    static NEW_MOVIES = 'movie/popular';
    static POPULAR_MOVIES = 'movie/top_rated';
    static POPULAR_SERIES = 'tv/popular';
    static GET_GENRES = 'genre/movie/list';    
    static getMoviesByGenre(id: string, page:number){
        return 'discover/movie?language=es-MX&with_genres='+id+'&page='+page;
    } 
}
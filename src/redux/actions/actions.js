import axios from "axios"
import { actionsTypes } from "./ActionsTypes"
import { options } from "../../constants/apiConstants"

//tüm atılan isteklerin başına gelir
axios.defaults.baseURL ="https://api.themoviedb.org/3"

//senkron(anında gerçekleşen süre gerektirmeyen işlemler)
//yüklenenin durumuna göre isLoading degerini değiştirme
export const setLoading=(payload)=>({
        type:actionsTypes.SET_LOADING,
        payload
    
})

// asenkron yani anından gerçekleşmeyen (API çağrıları veri tabanı istekleri)
// süreç gerektiren işlemler 
// async (anlık gerçekleşmeyen)
export const getMovies=()=>{
    return async function(dispatch){
        axios
        .get("/movie/popular", options)
        .then((response)=>
        dispatch({
          type:actionsTypes.SET_MOVIES,
          payload:response.data.results,
        }))
        .catch((error) => console.log(error));
    }
}

//filmler için kategori verisi çekme

export const getGenres=()=>(dispatch)=>{

axios.get('/genre/movie/list?language=tr',options)
//sonucu reducera gönderme
.then((response)=>dispatch({
  type:actionsTypes.SET_CATEGORIES,
  payload:response.data.genres
}))

}
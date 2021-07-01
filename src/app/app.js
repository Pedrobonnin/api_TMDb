import React from 'react';
import Menu from '../menu/menu';
import Rutas from '../rutas/rutas';
import './app.css';
function App(){
  const base_url = 'https://api.themoviedb.org/3/';
  const api_key = '6511c938195c56067e1386df779c2be0';
  const apiUrl = {
    popular: base_url + `movie/popular?api_key=${api_key}&language=es-MX&page=`,
    valorados:base_url + `movie/top_rated?api_key=${api_key}&language=es-MX&page=`,
    proximos:base_url + `movie/upcoming?api_key=${api_key}&language=es-MX&page=`,
    trending: base_url + `trending/movie/day?api_key=${api_key}&language=es-MX&page=`,
    recommendations: base_url + `movie/recommendations?api_key=${api_key}&language=es-MX&page=1`,
    accion: base_url + `/&with_genres=28?api_key=${api_key}&language=es-MX&page=`,
  }
  return (
    <div>
      <Menu/>
      <Rutas {...apiUrl}/>
    </div>
  )
}

export default App;

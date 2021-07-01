import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import Movie from '../movie/movie';
import PopularFlyer from './assets/images/popular.jpg';
import ValoradosFlyer from './assets/images/valorados.jpg';
import EstrenosFlyer from './assets/images/estrenos.jpg';
import AccionFlyer from './assets/images/accion.jpg';
import recommendationsFlyer from './assets/images/terror.jpg';
import trendingFlyer from './assets/images/cartelera.jpg';

const Home = ()=>(
  <div className="Home">
    <h3>   CATALOGOS </h3>
    <Link to="/populares" target="_blank">
      <Movie imageLocal={PopularFlyer} titulo="Populares"/>
    </Link>
    <Link to="/valorados" target="_blank">
      <Movie imageLocal={ValoradosFlyer} titulo="Más Valorados"/>
    </Link>
    <Link to="/estrenos" target="_blank">
      <Movie imageLocal={EstrenosFlyer} titulo="Próximos Estrenos"/>
    </Link>
    <Link to="/trending" target="_blank">
      <Movie imageLocal={trendingFlyer} titulo="Tendencias"/>
    </Link>
    <Link to="/recommendations" target="_blank">
      <Movie imageLocal={recommendationsFlyer} titulo="Recomendadas"/>
    </Link>
    <Link to="/accion" target="_blank">
      <Movie imageLocal={AccionFlyer} titulo="Accion"/>
    </Link>

    
  </div>
);

export default Home;

import React, { Component } from 'react'
import aja from 'aja'
import './list-movie.css'
/*Components*/
import Movie from './movie'
import BtnNext from '../movie/btn-next'

class ListMovie extends Component{
  state = {
    list:[],
    page:1,

    modalVisible:false

	
  }
  /*navegación hacia arriba*/
  scrollToTop= (scrollDuration)=> {
      var cosParameter = window.scrollY / 2,
          scrollCount = 0,
          oldTimestamp = performance.now();
      function step (newTimestamp) {
          scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
          if (scrollCount >= Math.PI) window.scrollTo(0, 0);
          if (window.scrollY === 0) return;
          window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
          oldTimestamp = newTimestamp;
          window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
  }
  /*listado de peliculas*/
  getMovies = ()=>{
    let url = this.props.apiUrl+this.state.page
    let self = this
    aja()
      .url(url)
      .method('get')
      .on('success', function(data){
        //cuando llega respuesta
        console.log(data)
        self.newMovies(data.results)
      })
      .on('error',function(err){
        //cuando ocurre un error
        console.log('se perdio la conexion a internet')
      })
      .go();
  }
  newMovies = (movies) =>{
    this.setState({
      list:movies
    });
    this.scrollToTop(100)
  }
  componentDidMount(){
    this.getMovies()
  }
  /*siguiente pagina del listado de peliculas*/
  nextMovies = (event) => {
    var page = {page:this.state.page+1}
    this.setState(page,function(){
      this.getMovies()
    })

  }
  render(){

    return (
      <div>
        <div className="ListMovie">
          <h1 className="ListMovie-title" style={ {color:this.props.color} }>
            { this.props.section }
          </h1>
          {
            this.state.list.map(
              (el,key)=>{
                return (
                  <Movie key={key} titulo={ el.title } id={el.id} image={ el.poster_path } handleOpen={ this.getVideos }/>
                )
              }
            )
          }
        </div>
        <BtnNext handleNext={ this.nextMovies } />
    </div>

    )
  }
}

export default ListMovie

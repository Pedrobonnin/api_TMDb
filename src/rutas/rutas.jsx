import React,{ Component } from 'react'
/* rutas en react */
import { Route } from 'react-router-dom'
import ListMovie from '../movie/list-movie'
import Home from '../home/home'

/*rutas de navegacion disponibles*/
class Rutas extends Component {
  render(){
    return(
      <div>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/populares" component={ ()=>(
          <ListMovie
            apiUrl={this.props.popular}
            section="Populares"
            color="#8a0503"
            handleOpen={ this.props.handleOpen }
          />)
        }
        />
        <Route path="/valorados" component={()=>(
          <ListMovie
            apiUrl={this.props.valorados}
            section="Más Valoradas"
            color="#8a0503"
            handleOpen={ this.props.handleOpen }
          />)
        }
        />

        <Route path="/estrenos" component={()=>(
          <ListMovie
            apiUrl={this.props.proximos}
            section="Estrenos"
            color="#8a0503"
            handleOpen={ this.props.handleOpen }
          />)
        }   
      />
        <Route path="/trending" component={()=>(
          <ListMovie
            apiUrl={this.props.trending}
            section="Trending"
            color="#8a0503"
            handleOpen={ this.props.handleOpen }
          />)
        }   
        />
        <Route path="/terror" component={()=>(
          <ListMovie
            apiUrl={this.props.terror}
            section="terror"
            color="#8a0503"
            handleOpen={ this.props.handleOpen }
          />)
        }  
        />
        <Route path="/accion" component={()=>(
          <ListMovie
            apiUrl={this.props.accion}
            section="accion"
            color="#8a0503"
            handleOpen={ this.props.handleOpen }
          />)
        }  
      />
    </div>
    )

  }
}

export default Rutas

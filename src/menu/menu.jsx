import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';



class Menu extends Component{
  getTabs(){
    return ['casa','populares','valorados','estrenos'];
  }
  CheckTab = ()=>{
    let path = window.location.pathname.replace('/','');
    if(path===''){
      path='casa';
    }
    this.setStyles(path);
  }
  Tab = (element)=>{
    var url = element.target.id;
    this.setStyles(url);
  }
  setStyles = (url)=>{
    for(let tab of this.getTabs()){
      if(url===tab){
        document.querySelector('#'+tab).className = "Menu-select";
      }else{
        document.querySelector('#'+tab).className = "Menu-unselect";
      }
    }
  }
  componentDidMount(){
    this.CheckTab();
  }
  render(){
    return(
      <div>
        <div  className="logotipo">
          <a> Movi-Dick </a>
        </div>
        <div className="Menu">
          <ul onClick={ this.Tab }>
            <li>
              <Link to="/" className="activo" id="casa">Casa</Link>
            </li>
            <li>
              <Link to="/populares" id="populares">Populares</Link>
            </li>
            <li>
              <Link to="/valorados" id="valorados">Más Valorados</Link>
            </li>
            <li>
              <Link to="/estrenos" id="estrenos">Próximos Estrenos</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Menu;

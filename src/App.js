import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaNoticias from './components/ListaNoticias';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listaNoticias: [],
      categoriaNoticias: ['business','entertainment','general','health','science','sports','technology'],
      selected: 'business'
    }
  }

  componentDidMount() {
    this.consultarNoticia(this.state.selected);
  }
  
  consultarNoticia = async (selected) =>{
    const urlApi = `https://newsapi.org/v2/top-headlines?country=mx&category=${selected}&apiKey=004381c512694d56be0d01dabee2b450`;
    const respuesta = await fetch(urlApi);
    const noticias = await respuesta.json();
    this.setState({listaNoticias: noticias.articles})
  }

  render() {
    const {categoriaNoticias, listaNoticias} = this.state;
     return (
      <div className="bg-dark">
        <Header/>
        <section className="container bg-light">
          <br/>
          <h4 className="text-center">Encuentra noticias por categorias</h4>
          <br/>
          <Formulario 
            categoriaNoticias={categoriaNoticias}
            consultarNoticia={this.consultarNoticia}
          />
          <br/>
          <ListaNoticias listaNoticias={listaNoticias}></ListaNoticias>
        </section>
      </div>
    );
  }
}

export default App;

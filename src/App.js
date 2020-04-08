import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [categoria, guardarCategoria ] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
        const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=e7626d0b2f854ce58caeebe826226983`;
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
          titulo="Buscador de noticias"
      />
      <div className="container white">
        <Formulario
            guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
            noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;

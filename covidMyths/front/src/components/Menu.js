import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import './Menu.css';
import Pregunta from './Pregunta';
import ForoPreguntas from './ForoPreguntas';
import Noticias from '../components/VerNoticias';
import VerDetalleNoticia from '../components/VerDetalleNoticia';

const Menu = (props) => {
  return (
    <div>
      <div>
        <div class="sidebar">
          <a class="active" href="home">
            Home
          </a>
          <Link to="/preguntar">PreguntaAlgo</Link>
        </div>
        <div class="content">
          <Route
            path="/preguntar"
            exact
            component={() => <ForoPreguntas></ForoPreguntas>}
          ></Route>

          <Route
            path="/preguntar"
            exact
            component={() => <ForoPreguntas></ForoPreguntas>}
          ></Route>

          <Route
            path="/noticias"
            exact
            component={() => <Noticias></Noticias>}
          ></Route>

          <Route
            path="/verDetalleNoticia"
            exact
            component={() => <VerDetalleNoticia></VerDetalleNoticia>}
          ></Route>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;

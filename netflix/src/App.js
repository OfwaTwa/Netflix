import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/common/header.jsx";
import Footer from "./components/common/footer.jsx";
import Homepage from "./components/hompage.jsx";
import MovieList from "./components/movies/list/index.jsx";

//Rutas para la pagina
const App = (props) => {
  return (
    <>
      <Header/>
      <Footer/>
      <Switch>
        <Route exact path="/">  
          <Homepage/>     
        </Route>
        <Route exact path="/peliculas">
          <MovieList/>
          <p>Películas</p>
        </Route>
        <Redirect to="/">
        </Redirect>
      </Switch> 
    </> 
  )
};

export default App;

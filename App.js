import React from 'react'
import Accueil from './components/Pages/PageA/Accueil'
import PageB from './components/Pages/PageB/PageB'
import PageC from './components/Pages/PageC/PageC'
import PageD from './components/Pages/PageD/PageD'
import PageE from './components/Pages/PageE/PageE'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      
      <div className='container'>

    
      <Header/>
      <Switch>
        <Route path="/" exact component={Accueil}/>
        <Route path="/b" component={PageB}/>
        <Route path="/c" component={PageC}/>
        <Route path="/d" component={PageD}/>
        <Route path="/e" component={PageE}/>
        <Route component={PageNotFound}/>
      </Switch>
      
      <Footer/> 
       </div>

    </BrowserRouter>
  );
}

export default App;

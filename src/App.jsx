
import './App.css'
import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from "wouter"


function App() {
 

  return (
   <div className='App'>
      <section 
      className='App-content'>
        <h3>App</h3>
        <Link to='/gif/panda'>Giif de pandas</Link>
        <Link to='/gif/mexico'>Giif de mexico</Link>
        <Link to='/gif/goku'>Giif de goku</Link>
        <Route 
        component={ListOfGifs}
        path='/gif/:keyword'
        />
        
      </section>
    </div>

  )
}

export default App

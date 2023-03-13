// import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header/Header';
import { Footer }  from './component/Footer/Footer';
import { Main }  from './component/Main/Main';
import { UserCard }  from './component/UserCard/UserCard';
import data from './constant/data.json';
import { Contact } from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div className='card-container'> 
        { 
          data.map((cardData)=>{
            return  <UserCard data={cardData}/>
          })
        } 
      </div>
      <Contact />
      <Footer />
          
    </div>
  );
}

export default App;

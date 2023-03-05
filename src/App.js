
import './App.css';
import Header from "./components/profiles/Header";

import FullName from "./components/profiles/FullName";
import Bio from "./components/profiles/Bio"
import Profession from './components/profiles/Profession';
import Profiles from './components/profiles/Profiles';
function App() {
  const handleAlert = () => { alert( `Im a developer and civil Engineering student `);
  };
  return (
    <div>
      <Header />
      
      <FullName firstName="Yosr" lastName="Gabsi">
      
        <h3>Welcome to my profile</h3>
      </FullName>
      <Bio FullName="Yosr Gabsi" Age={24} Interests=" Playing music , Camping and Cooking "  />
      <div>
      <h3 className='title'><b>Profession</b></h3>
    <p className='card-text'>I am currently a student at GOMyCode Academy
  
    I have scientific and IT skills, the ability to think methodically and to manage projects. I have also problem-solving skills </p>
    <p className='card-text'><b>SKIILS</b> <br/> - Creativity and flexibility <br/> - Communication Skills <br/> -Project Management </p>
      
      <Profession title={"Im a developer and civil Engineering student" } 
      
      handleAlert={handleAlert}/></div>
      

    <Profiles>
     <div>
      <h1>Contact</h1>
      <p>Email:Gabsiyosr00@gmail.com</p>
      
      </div>
      </Profiles>
       </div>
       
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App(props) {
  const { employee } = props;

  return (
    <div className="container">
        <div class="parent">
        <div className='profile-img'>
        <img src={employee.profileImg} alt="the person profile"></img>
      
      <h1>{employee.name}</h1>
        </div>
      
         
      

        <div className="location">
          
            <p>Location</p>
            <h2>{employee.location}</h2>
         
        </div>
        <div className="bloodgroup">
     
          <p>BloodGroup</p>
           <h2>{employee.bloodGroup}</h2>
     
         
        </div>
        <div className="age">
          <p>Age</p>
          <h2>{employee.age}</h2>
        </div>
      </div>
    
    </div>
  );
}

export default App;

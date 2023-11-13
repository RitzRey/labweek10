import './App.css';
import TenantFormFunction from './components/TenantFormFunction';
import TenantInput from './components/TenantInput';
import './ExerciseTitle.css';
import './FormContainer.css';


function App() {

  return (
    <div className='exercisetitle-container'>
      <h1>Week 10 Exercise</h1>

      <div className='form-container'>
        <TenantFormFunction />
      </div>
      
    </div>
  );
}

export default App;


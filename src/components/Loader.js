import loader from '../assets/images/loader2.gif'
import '../loader.css'

function Loader(props) {



    return (
    
      <div className='main-loader'>
        
        <img src={loader} alt="LOADING..." className="loader" />
      
      </div>
     
    );
  
  }
  
  export default Loader;
  
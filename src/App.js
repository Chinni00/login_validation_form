import React,{useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Store/Auth-context';


function App() {

  const ctx = useContext(AuthContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(()=>{
  //   const storeUserLoggedInInformation = localStorage.getItem('isLogedIn');

  // if(storeUserLoggedInInformation === '1'){
  //   setIsLoggedIn(true)
  // }
  // },[])

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLogedIn',"1")
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLogedIn')
  //   setIsLoggedIn(false);
  // };

  return (
    
      <React.Fragment>
      <MainHeader  />
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home  />}
      </main>
      </React.Fragment>
     
    
  );
}

export default App;

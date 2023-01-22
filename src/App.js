import { useRef, useState } from 'react';
import ReactSwitch from 'react-switch';
import './App.css';
import useDebounce from './useDebounce';
import useFetch from './useFetch';
import useTheme from './useTheme';

function App() {

  // let setTime = useRef('second');

  // // const plat = () => {
  // let [data, isLoaging, err] = useFetch('https://jsonplaceholder.typicode.com/users');
  // // }
  // const [ee, setee] = useState('')
  // useDebounce(x, 1000, ee);
  // function x() {
  //   console.log('red')
  // }
  const [mainColor, setmainColor, setTheme, toggleTheme ,deleteProperty] = useTheme();


  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <div className='page'>
        <div className='colors'>
          <div className='colorDiv' style={{ 'background': 'chartreuse' }} onClick={(e) => { deleteProperty(e,'background') }}>
            <p>delete Property css</p>
          </div>
          <div className='colorDiv' style={{ 'background': 'red' }} onClick={(e) => { setTheme('red') }}></div>
          <div className='colorDiv' style={{ 'background': 'blue' }} onClick={(e) => { setTheme('blue')}}></div>
          <div className='colorDiv' style={{ 'background': 'green' }} onClick={(e) => { setTheme('green') }}></div>
          <div className='colorDiv' style={{ 'background': 'yellow' }} onClick={(e) => { setTheme('yellow') }}></div>
          <div className='colorDiv' style={{ 'background': 'gray' }} onClick={(e) => { setTheme('gray') }}></div>
          <div className='colorDiv' style={{ 'background': 'purple' }} onClick={(e) => { setTheme('purple') }}></div>
          <div className='colorDiv' style={{ 'background': 'aqua' }} onClick={(e) => { setTheme('aqua') }}></div>

        </div>
        <div className="main">
          <p className="sign" align="center">Sign in</p>
          <form className="form1">
            <input className="un " type="text" align="center" placeholder="Username" />
            <input className="pass" type="password" align="center" placeholder="Password" />
            <a className="submit" align="center">Sign in</a>
            <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
          </form>
        </div>

        <ReactSwitch onChange={toggleTheme} checked={mainColor === "black"} />
      </div>

      {/* <div className="search-wrapper">
          <label for="search">Search Users</label> */}
      {/* <input type="search" id="search" data-search onKeyDown={(e) => { 
            data && console.log( data);
             isLoaging && console.log(isLoaging+'isloading');
              err && console.log(err+'err'); }} /> */}
      {/* <input type="search" id="search" data-search onKeyDown={(e) => { setee(e)}} />
        </div> */}
      {/* <div class="user-cards" data-user-cards-container></div>
        <template data-user-template>
          <div class="card">
            <div class="header" data-header></div>
            <div class="body" data-body></div>
          </div>
        </template> */}
      {/* </header> */}
    </div>
  );
}

export default App;

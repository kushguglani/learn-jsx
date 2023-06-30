import React from 'react';
import MyClassComponent from './MyClassComponent';
import "./App.css"

function App() {
  const data = "hello";
  const loggedIn = true;
  let friends = ["Nikhil", "ashvary", "kush", "rahul"];
  return (
    <>
    
    <MyClassComponent name="kush"/>
      {
        loggedIn === true ?
          <div className="helolo">
            <h1>Hello1 logged in </h1>
            <h1>Hello1</h1>
          </div>
          :
          <div>
            <h1>Hello2 logged out</h1>
            <h1>Hello2</h1>
          </div>
      }
      <hr />
      <p>hello this is a para tag</p>
      <ul>
       {
        friends.map((friend)=>{
          return <li>{friend}</li>
        })
       }
      </ul>
      <ul>
       {
        friends.map((friend)=><li>{friend}</li>)
       }
      </ul>
    </>
  );
}

export default App;

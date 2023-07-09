import React, {useState } from 'react';
import './App.css';
import UseRef from './UseRef';
import UseCallBack from './UseCallBack';
import UseMemo from './UseMemo';
import ComponentC from './ComponentC';
import ComponentA from './ComponentA';
import CustomHooks from './CustomHooks';

export const UserContext = React.createContext();

function App() {

 const [getName,setName] = useState('akash');

  return (
    <div className="App">
          {/* <CustomHooks/> */}
           {/* <UseMemo/> */}
           {/* <ComponentA name={getName}/>  */}
           <UserContext.Provider value={getName}>
           <ComponentA/>
           </UserContext.Provider>
          
           {/* <UseCallBack/>  */}
           {/* <UseRef/> */}
           {/* <UseReducer/> */}
    </div>
  );
}

export default App;

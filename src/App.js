import React from 'react';
import Navigation from './components/Navigation/Navigation';
import SaladMaker from './components/SaladMaker/SaladMaker';
import UserContext from './context/UserContext';
const user = {
  name: 'Maysa',
  favorites: ['avocado', 'carrot', 'broccoli']
}

function App() {
  return (
    <UserContext.Provider value={{user}}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
}

export default App;
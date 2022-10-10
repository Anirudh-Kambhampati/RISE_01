import './App.css';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import SidebarComps from './components/SidebarComps';
import Sidebar from './components/Sidebar'
import Form from './pages/Form';
import LoginForm from './pages/LoginForm';
function App() {
  return (
    <div className="App">

      {/* <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path="/signup" element={<Form/>} />
          <Route path='/admin' element={<Sidebar className='sidebar' />} />
      </Routes> */}
      <div className='sidebar'><Sidebar /></div>
    </div>
  );
}

export default App;

// import './App.css';
// import React from 'react';
// import SidebarComps from './components/SidebarComps';
// import Sidebar from './components/Sidebar'
// import Form from './pages/Form';
// function App() {
//   return (
//     <div className="App">
//       {/* <Form /> */}
//       <Sidebar />
//     </div>
//   );
// }

// export default App;
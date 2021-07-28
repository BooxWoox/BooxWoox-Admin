import { Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import BookApprovalSys from './components/BookApprovalSys';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {useState} from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
    <div className='Topbar'>
      <img src={'images/logo.png'} width='180px' height='50px' alt=""/>
      <MenuRoundedIcon onClick={()=>setSidebarOpen(!sidebarOpen)} id='hamburgerbtn'/>
    </div>
    <div className="App">
      <Sidebar drawerOpen={sidebarOpen}/>
      <div className='main'>
        <Switch>
          <Route exact path='/BookApprovalSys' component={BookApprovalSys}/>
        </Switch>
      </div>
    </div>
    </>
  );
}

export default App;

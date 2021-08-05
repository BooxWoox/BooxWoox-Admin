import { Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import BookApprovalSys from './components/BookApprovalSys';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {useState} from 'react';
import Transactions from './components/Transactions';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import AllOrders from './components/AllOrders';

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
          <Route exact path='/' component={Login}/>
          <Route exact path='/allOrders' component={AllOrders}/>
          <Route exact path='/changePassword' component={ChangePassword}/>
          <Route exact path='/BookApprovalSys' component={BookApprovalSys}/>
          <Route exact path='/Transactions' component={Transactions}/>
        </Switch>
      </div>
    </div>
    </>
  );
}

export default App;

import { Route, Switch } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import BookApprovalSys from './components/BookApprovalSys'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import { useState } from 'react'
import Transactions from './components/Transactions'
import Login from './components/Login'
import ChangePassword from './components/ChangePassword'
import AllOrders from './components/AllOrders'
import { useLocation } from 'react-router-dom'
import LateReturn from './components/LateReturn'
import BlogAdmin from './components/BlogAdmin'
import BlogAdminComments from './components/BlogAdminComments'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const location = useLocation().pathname

  return (
    <>
      <div className="Topbar">
        <img src={'/images/logo.png'} width="180px" height="50px" alt="" />
        {location === '/' || location === '/changePassword' ? (
          ''
        ) : (
          <MenuRoundedIcon
            onClick={() => setSidebarOpen(!sidebarOpen)}
            id="hamburgerbtn"
          />
        )}
      </div>
      <div className="App">
        {location === '/' || location === '/changePassword' ? (
          ''
        ) : (
          <Sidebar drawerOpen={sidebarOpen} />
        )}
        <div className="main">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/allOrders" component={AllOrders} />
            <Route exact path="/changePassword" component={ChangePassword} />
            <Route exact path="/BookApprovalSys" component={BookApprovalSys} />
            <Route exact path="/Transactions" component={Transactions} />
            <Route exact path="/lateReturn" component={LateReturn} />
            <Route exact path="/blogAdmins" component={BlogAdmin} />
            <Route
              exact
              path="/blogAdmins/blogAdminComments/:type/:blogID/"
              component={BlogAdminComments}
            />
          </Switch>
        </div>
      </div>
    </>
  )
}

export default App

import {Switch, Route} from 'react-router-dom'
import CartPage from '../pages/CartPage'
import StorePage from '../pages/StorePage'

function Routes() {

  return (

    <Switch>
      <Route exact path={'/'}>
        <StorePage/>
      </Route>
      <Route path={'/cart'}>
        <CartPage/>
      </Route>
    </Switch>

  )
  
}

export default Routes

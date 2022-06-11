import { Container, Content } from "../CartPage/styles"
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'
import Card from "../../components/card"
import Buttons from "../../components/buttons"

function CartPage() {

  const history = useHistory()
  const cart = useSelector(store => store.cart)
  const cartOut = () => {
    return history.push('/')
  }

  return <Container>
    <Content>
      <header>
        <h2>Kenzie Shop</h2>
        <div>
          <Buttons onClick={cartOut}>Home</Buttons>
          <Buttons>Cart</Buttons>
        </div>
      </header>
      <main>
        {cart.map(({id, name, image, price})=> <Card key={id} id={id} name={name} price={price} image={image} onCart={true}/>)}
      </main>
    </Content>
  </Container>
  
}

export default CartPage
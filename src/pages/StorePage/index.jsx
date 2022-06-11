import { Container, Content } from "../StorePage/styles"
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'
import Card from "../../components/card"
import Buttons from "../../components/buttons"

function StorePage() {

  const history = useHistory()
  const products = useSelector(store => store.products)
  const cartIn = () => {
    return history.push('/cart')
  }

  return <Container>
    <Content>
      <header>
        <h2>Kenzie Shop</h2>
        <div>
          <Buttons>Home</Buttons>
          <Buttons onClick={cartIn}>Cart</Buttons>
        </div>
      </header>
      <main>
        {products.map(({id, name, image, price})=> <Card key={id} id={id} name={name} price={price} image={image}/>)}
      </main>
    </Content>
  </Container>
  
}

export default StorePage
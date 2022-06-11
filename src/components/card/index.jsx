import { Container, RemoveContainer } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, subProduct } from "../../store/modules/cart/actions"
import Buttons from "../buttons"

const Card = ({id, name, price, image, onCart}) => {

  const dispatch = useDispatch()
  const products = useSelector( store => store.products )
  const product = products.find(prod => prod.id === id)

  return (

    <>
      {onCart?
        <RemoveContainer>
          <img src={image} alt={name} />
          <div>
            <h3>{name}</h3>
            <h4>{price.toFixed(2)} R$</h4>
            <div>
              <Buttons onClick={() => dispatch(subProduct(product))}>Excluir</Buttons>
            </div>
          </div>
        </RemoveContainer>
      : 
        <Container>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <h4>{price.toFixed(2)} R$</h4>
          <div>
            <Buttons onClick={() => dispatch(addProduct(product))}>Adicionar ao Carrinho</Buttons>
          </div>
        </Container>
      }
    </>

  )

}

export default Card
import { Button } from './styles'

function Buttons({children, classname, onClick}) {

     return (
       <Button className={classname} onClick={onClick} >{children}</Button>
     )

}

export default Buttons
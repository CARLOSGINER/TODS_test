import style from './cart.module.css';
import {useSelector} from 'react-redux';

const {buttonStyle} = style

const Cart = ()=>{

    const cartCount = useSelector(state=>state.counter.cartCount); 

    return(
        <button className={buttonStyle}>
            Cart ({cartCount})
        </button>
    )   
}

export default Cart;
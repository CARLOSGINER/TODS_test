import style from './button.module.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {useDispatch} from 'react-redux';
import {addToCartCount} from '../../../redux/ducks/quantityCounter';


const {general,icon,textStyle} = style;



const Button = ({color,likeIcon,text,textColor,buttonType}) => {

    const dispatch = useDispatch();

    const handleClick = () =>{
        if(buttonType==="addToCart"){
            dispatch(addToCartCount())
        }
    }

    return(
        <button 
            onClick={handleClick}
            style={{
                backgroundColor:color,
            }}
            className={general}
        >
            <span className={icon}>
                {likeIcon? <AiOutlineHeart/> : undefined}    
            </span>
            <span 
                className={textStyle}
                style={{
                    color:textColor
                }}
            >
                {text}
            </span>
        </button>
    )
}

export default Button;
import style from './title.module.css';
import Cart from './Cart';

const {general,wrapper,textStyle} = style

const Title = ({text})=>{
    return(
        <title className={general}>
            <div className={wrapper}>
                <p className={textStyle}>{text}</p>
                <Cart/>
            </div>
        </title> 
    )   
}

export default Title;
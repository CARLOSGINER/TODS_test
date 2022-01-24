import style from './product.module.css';

const {general} = style;


const Product = ({mainURL}) => {
    return(
        <figure 
            className={general}
            style={{
                backgroundImage:` linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.05)),url(${mainURL})`
            }}
        ></figure>
    )
}

export default Product;
import style from './info.module.css';
import {useSelector} from 'react-redux';

const {general,title,price,details,description} = style;


const Info = () => {

    const data = useSelector((state)=>state.dataReducer.data)

    return(
        <aside className={general}>
            <h1 className={title}>{data?data.name:"loading..."}</h1>
            <h2 className={price}>$499.00</h2>
            <div className={details}>
                <h3><span>Availability: </span>{data?data.stock.stockLevelStatus:"loading..."}</h3>
                <h3><span>Product Code: </span>#4657</h3>
                <h3><span>Tags: </span>Fashion,Hood,Classic</h3>
            </div>
            <div className={description}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat veritatis aperiam natus a maiores quas? Ipsum quisquam porro modi blanditiis expedita laborum quae eligendi cum possimus vitae? Dolorem, mollitia?</p>
                <ul>
                    <li>Brown suit for a tone-one-tone look</li>
                    <li>Regular fit</li>
                    <li>100% leather</li>
                    <li>Free chipping with 4 days delivery</li>
                </ul>
            </div>
        </aside>
    )
}

export default Info;
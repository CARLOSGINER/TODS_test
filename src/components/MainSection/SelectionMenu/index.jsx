import style from './selectionMenu.module.css';
import Counter from './Counter';
import { useSelector } from 'react-redux';
import {useState} from 'react';

const { general,menu,menuQty} = style;



const SelectionMenu = () => {

    const data = useSelector(state=>state.dataReducer.data);

    const [sizes,setSizes] = useState([])

    const handleChange = ({target}) => {
        const sizes = data.variantOptions.map(each => {
            if(each.color===target.value){
                return each.size
            } else {
                return "";
            }
        });
        setSizes(sizes)
    }

    return (
        <section className={general}>
            <div className={menu}>
                <label htmlFor="color">COLOR</label>
                <select  defaultValue="default" id="color" name="color" onChange={handleChange}>
                    <option value="default">-</option>
                    {data? data.colorSizeOptions.map((each,index)=>(
                        <option key={index} value={each.color}>{each.color}</option>
                    )):"loading..."}
                </select>
            </div>
            <div className={menu}>
                <label htmlFor="size">SIZE</label>
                <select defaultValue="default" id="size" name="size">
                    <option value="default">-</option>
                    {sizes.map((element,index)=>(
                        <option key={index} value={element}>{element}</option>
                    ))}
                </select>
            </div>
            <div className={menuQty}>
                <label htmlFor="QTY">QTY</label>
                <Counter/>
            </div>
        </section>
    )
}

export default SelectionMenu;
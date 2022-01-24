import style from './counter.module.css';
import {AiFillCaretUp} from 'react-icons/ai';
import {AiFillCaretDown} from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import {decrement,increment} from '../../../../redux/ducks/quantityCounter';

const {general,number,buttons} = style


const Counter = ()=>{

    const count = useSelector((state) => state.counter.count)


    const dispatch = useDispatch();

    const handleIncrement = () =>{
        dispatch(increment())
    }
    
    
    const handleDecrement = () =>{
        dispatch(decrement())
    }

    return(
        <div className={general}>
            <div className={number}>{count}</div>
            <div className={buttons}>
                <button onClick={handleIncrement}><AiFillCaretUp/></button>
                <button onClick={handleDecrement}><AiFillCaretDown/></button>
            </div>
        </div>
    )   
}

export default Counter;
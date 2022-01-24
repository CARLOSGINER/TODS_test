import style from './popUpBar.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const { general, wrapper, textStyle } = style

const PopUpBar = ({ text }) => {

    const [close, setClose] = useState(false)

    const handleClose = () => {
        setClose(true);
    }

    return (
        <>
            {!close &&
                <div className={general}>
                    <div className={wrapper}>
                        <p className={textStyle}>{text}</p>
                        <div onClick={handleClose}>
                            <AiOutlineClose
                                style={{
                                    color: "hsl(200, 7%, 60%)",
                                    position: "absolute",
                                    right: "0px",
                                    cursor: "pointer"
                                }}
                            />
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default PopUpBar;
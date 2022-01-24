import style from './thumbnail.module.css';


const {general} = style;


const Thumbnail = ({url,setMainURL}) => {

    const handleClick = () =>{
        setMainURL(url)
    }

    return(
        <div 
            onClick={handleClick}
            className={general}
            style={{
                backgroundImage:`linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)) ,url(${process.env.PUBLIC_URL +url})`,
            }}>
        </div>
    )
}

export default Thumbnail;


import style from './mainSection.module.css';
import Product from './Product';
import Thumbnail from './Thumbnail';
import Info  from './Info';
import SelectionMenu from './SelectionMenu';
import Button from './Button';
import {useState} from 'react';


const {mainSection,left,right,carrousel,buttons} = style;

const images = [
    {url:"/img/shoe01.jpg"},
    {url:"/img/shoe02.jpg"},
    {url:"/img/shoe05.jpg"},
    {url:"/img/shoe06.jpg"}
]

const MainSection = () => {

    const [mainURL,setMainURL] = useState("/img/shoe01.jpg")

    return(
        <main className={mainSection}>
            <section className={left}>
                <Product mainURL={mainURL}/>
                <div className={carrousel}>
                    {images.map((each,index)=>(
                        <Thumbnail setMainURL={setMainURL} key={index} url={each.url}/>
                    ))}
                </div>                
            </section>

            <aside className={right}>
                <Info/>
                <SelectionMenu/>
                <div className={buttons}>
                    <Button 
                        color={"#000"}
                        textColor={"#fff"}
                        text={"add to cart"}
                        buttonType={"addToCart"}
                    />
                    <Button 
                        color={"#fff"}
                        textColor={"#000"}  
                        likeIcon={true}
                        text={"add to whishlist"}
                    />
                </div>
            </aside>
        </main>
    )
}

export default MainSection;
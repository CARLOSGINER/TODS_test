import style from './navBar.module.css';

const {general,deco} = style

const NavBar = ()=>{
    return(
        <nav className={general}>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">men</a></li>
                <li><a href="#">women</a></li>
                <li><a href="#">lookbook</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">blog</a></li>
            </ul>
            <div className={deco}>
            </div>
        </nav> 
    )   
}

export default NavBar;
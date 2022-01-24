import style from './header.module.css';
import PopUpBar from './PopUpBar';
import Title from './Title';
import NavBar from './Navbar';

const {header} = style

const Header = ()=>{
    return(
        <header className={header}>
            <PopUpBar text={'start selling your products or buy them from anywhere!'}/>
            <Title text={'bonfire'}/>
            <NavBar/>
        </header>
    )
}

export default Header;
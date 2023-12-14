import { useState } from "react";
import Menu from './Menu';

const Home = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenuClick = () => {
        setShowMenu(!showMenu)
    }

    return (
            <div className="home">
                <div>
                    <h1>BURGER SHOP</h1>
                    <p>Give yourself a tasty burger</p>
                </div>
                <a href="#" onClick={handleMenuClick}>Explore Menu</a>
                {showMenu && (<Menu />)}
            </div>
    )
}

export default Home;
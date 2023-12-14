import Menu from './Menu';
import Founder from './Founder'
import { useState } from "react";

const Home = () => {
    const options = {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        }
    }
    
    const [showMenu, setShowMenu] = useState(false)
    const handleMenuClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <div className="home">
                <div>
                    <h1>BURGER SHOP</h1>
                    <p>Give yourself a tasty burger</p>
                </div>
                <a href="#menu" onClick={handleMenuClick}>Explore Menu</a>
                {/* {showMenu && (<Menu />)} */}
            </div>
            <Menu />
            <Founder />
        </>
            
    )
}

export default Home;
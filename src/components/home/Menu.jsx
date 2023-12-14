import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
    return (
        <div id="menu">
            <h1>MENU</h1>
            <div>
                <MenuCard itemNum={1} burgerSrc={burger1} price="200" title="CHEESE BURGER" handler delay={0} />
                <MenuCard itemNum={2} burgerSrc={burger2} price="500" title="VEG CHEESE BURGER" handler delay={0} />
                <MenuCard itemNum={3} burgerSrc={burger3} price="1800" title="CHEESE BURGER WITH FRENCH FRIES" handler delay={0} />
            </div>
        </div>
    )
}

export default Menu
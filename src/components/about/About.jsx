import { Link } from 'react-router-dom';
import { RiFindReplaceLine } from 'react-icons/ri';
import me from "../../assets/skj.jpg";

const About = () => {
    return (
        <section className="about">
            <main>
                <h1>ABOUT US</h1>
                <article>
                    <h4>BURGER SHOP</h4>
                    <p>This is Burger Shop. The place for most tasty burgers on the entire earth.</p>
                    <p>Explore the various type of food and burgers. Click below to see the menu.</p>
                    <Link to='/'>
                        <RiFindReplaceLine />
                    </Link>
                </article>
                <div>
                    <h2>FOUNDER</h2>
                    <article>
                        <div>
                            <img src={me} alt="Founder" />
                            <h3>Nelson</h3>
                        </div>
                        <p>I am Nelson, the founder of Burger Shop. <br />Affiliated to Good Taste...</p>
                    </article>
                </div>
            </main>
        </section>
    )
}

export default About
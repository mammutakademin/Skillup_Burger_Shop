// Write all the code here
import me from "../../assets/skj.jpg";
const About = () => {
    return (
        <section className="about">
            <main className="main">
                <h1>ABOUT US</h1>
                <article>
                    <h4>BURGER SHOP</h4>
                    <p>This is Burger Shop. The place for most tasty burgers on the entire earth.</p>
                    <p>Explore the various type of food and burgers. Click below to see the menu.</p>
                </article>
                <div>
                    <h2>FOUNDER</h2>
                    <article>
                        <div>
                            <img src={me} alt="Nelson" />
                            <h3>Nelson</h3>
                        </div>
                        <p>I am Nelson, the founder of Burger Shop. <br />Affiliated to God Taste...</p>
                    </article>
                </div>
            </main>
        </section>
    )
}

export default About
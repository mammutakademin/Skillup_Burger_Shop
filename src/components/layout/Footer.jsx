import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Burger Shop</h2>
                <p>We are trying to give you the best taste possible.</p>
                <p>We give attention to genuine feedback. <strong>All rights received @burgershop</strong></p>
            </div>
            <aside>
                <h4>Follow Us</h4>
                    <a href="https://youtube.com">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://instagram.com">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://github.com">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                
            </aside>
        </footer>
    )
}

export default Footer;

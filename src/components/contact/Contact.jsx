import burger2 from "../../assets/burger2.png";
import Popup from 'reactjs-popup';

const Contact = () => {
    return (
        <div className="contact">
            <form>
                <h2>CONTACT US</h2>
                <input type="text" name="guest" id="guest" placeholder="Guest01" />
                <input type="email" name="email" id="email" placeholder="guest01@xyz.com" />
                <textarea name="feedback" id="feedback" cols="30" rows="10" placeholder="Feedback from Guest01"></textarea>

                <Popup trigger=
                    {<button type = "button">Send</button>}
                    position="right center">
                    <div style={{color:"red", transform: 'translate(0%,-500%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Thank you for contacting us! We will get back to you shortly.</div>           
                </Popup>

            </form>
            <div className="formBorder">
                <div>
                    <img src={burger2} alt="veg cheese burger" />
                </div>
            </div>
        </div>
    )
}

export default Contact;

import Popup from 'reactjs-popup';
import {
  Country,
  State,
} from 'country-state-city';
import { Link } from 'react-router-dom';

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Country</option>
                {Country && Country.getAllCountries().map((i) => {
                  return (
                  <option value="{i.isoCode}" key="{i.isoCode}">
                    {i.name}
                  </option>)
                })}
    
            </select>
          </div>
          <div>
                <label>State</label>
                <select>
                  <option value="">State</option>
                  {State && State.getStatesOfCountry("IN").map((i) => {
                    return (
                    <option value="{i.isoCode}" key="{i.isoCode}">
                      {i.name}
                    </option>)
                  })}
                </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
        {/* // Enter thr code for contact            */}
          <div>
            <label>Phone No.</label>
            <input type="tel" placeholder='Enter Phone No.' />
          </div>
          <Popup trigger=
                {<Link className='link'>Confirm Order</Link>}
                position="right top">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Order Placed</div>
               
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;

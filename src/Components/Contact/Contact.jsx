import React from 'react'
import './Contact.css'
import ticket_icon from '../../assets/ticket-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Ticket Booked Successfully...");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "16ad1450-9c03-434f-af2a-d3bca667458b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
      <h3>Hurry Up!! Book Your Ticket Now  <img src={ticket_icon}alt="" /></h3>
      <p> 
        Feel free to contact us for any questions or concerns. 
        We are always happy to help.
        We look forward to hearing from you.
        Thank you for choosing us. 
      </p>
      <ul>
        <li><img src={mail_icon} alt="" />bihartourism@gmail.com</li>
        <li><img src={phone_icon} alt="" />+91-6204656114</li>
        <li><img src={location_icon} alt="" />Bodhgaya,Bihar,INDIA</li>
       
      </ul>
      </div>
      <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>
                        <label>Your name</label>
                        <input type="text" name='name' placeholder='Enter Your Name' required />

                        <label>Phone Number</label>
                        <input type="tel" name='phone' placeholder='Enter Your Phone Number' required />

                        <label>Aadhar Card Number</label>
                        <input type="text" name='aadhar' placeholder='Enter Your Aadhar Card Number' required />

                        <label>Booking Type</label>
                        <select name='booking_type' required>
                            <option value="cultural">Cultural</option>
                            <option value="natural">Natural</option>
                            <option value="historical">Historical</option>
                        </select>
                        
                        <label>Payment Method</label>
                        <select name='payment_method' required>
                            <option value="credit_card">Credit Card</option>
                            <option value="debit_card">Debit Card</option>
                            <option value="net_banking">Net Banking</option>
                            <option value="upi">UPI</option>
                        </select>

                        <label>Permanent Address</label>
                        <textarea name="query" placeholder='Enter Your Permanent Address' rows="3" required></textarea>

                        <button type='submit' className='btn dark-btn'>Book Ticket <img src={white_arrow} alt="arrow icon" /></button>
                        <span>{result}</span>
                    </label>
                </form>
            </div>
    </div>
  )
}

export default Contact

import "./ContactUs.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram} from "react-icons/ai";
import { AiFillYoutube} from "react-icons/ai";
function ContactUs() {
  return (
    <div  style={{background: "linear-gradient(180deg, #E7E2E2 0%, rgba(255, 255, 255, 0) 100%)",height:"500px",width:"70%"}}>
    <div className="ContactMain">
      <div className="imageDiv" >
        <p >
          Get In Touch <br></br>With Us
        </p>
        <img src="ContactUs.png" alt="" className="imageContact" />
      </div>
      <div className="ContactUs">
        Contact Us
        <br></br>
        <br></br>
        <div className="FormDiv Form" >
          <form>
            <label for="name">Name</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              name="name"
            ></input>
            <br></br>
            <br></br>
            <label for="email">Email</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Your Email"
              id="email"
              name="email"
            ></input>
            <br></br>
            <br></br>

            <label for="message">Message</label>
            <br></br>
            <textarea
              type="text"
              rows="4"
              cols="20"
              placeholder="Your Message"
              id="message"
              name="message"
            ></textarea>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div style={{textAlign:"center",marginBottom:"0px"}}>
        {/* <div>Social Handles</div> */}
        <div className="socialHandles">
            <p><BsFacebook/>FaceBook</p>
            <p><AiFillTwitterCircle/>Twitter</p>
            <p><AiFillInstagram/>Instagram</p>
            <p><AiFillYoutube/>Youtube</p>
        </div>
    </div>
    </div>
  );
}

export default ContactUs;

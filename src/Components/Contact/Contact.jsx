import SectionHeading from '../SectionHeading'
import './Contact.css'
import Linkedin from '../../assets/Icons/Linkedin';
import Github from '../../assets/Icons/Github';
import Email from '../../assets/Icons/Email';

function Contact() {
    return (
      <div className="contact-container">
        <div className="contact">
          <SectionHeading title={"Contact"} />
          <div className="contact-content">
            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit="submit"
                    >
                <input type='hidden' name='form-name' value='contact'/>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="contact-input"
                name="name"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="contact-input"
                name="email"
                required
              />
              <label>Message</label>
              <textarea name="message" required />
              <button type="submit" className="form-button">
                Send
              </button>
            </form>
            <div className="contact-links">
              <h4>Email</h4>
              <p>Masonward99@hotmail.com</p>
              <h4>Phone</h4>
              <p>07459 625 984</p>
              <h4>Socials</h4>
              <ul className="header-links">
                <li>
                  <a href="https://github.com/Masonward99" target="blank">
                    <Github />
                  </a>
                </li>
                <li>
                  <a href="mailto: masonward99@hotmail.com" target="blank">
                    <Email />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mason-ward-177475170/"
                    target="blank"
                  >
                    <Linkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Contact
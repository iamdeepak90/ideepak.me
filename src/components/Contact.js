import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
const Contact = () => {
  const [data, setData] = useState({});
  useEffect(async () => {
    setData(await fatchData("/static/info.json"));
  }, []);

  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const mailConfig = {
      Host : "smtp.zoho.in",
      Username : "hello@ideepak.me",
      Password : "HelloI@$44",
      To : formState.email,
      From : "hello@ideepak.me",
      Subject : `${formState.name} submit a Contact Form on iDeepak.me`,
      Body : formState.message
    };

    /* if(window.Email){
      window.Email.send(mailConfig).then(()=> alert(formState.email));
    } */

    Email.send(mailConfig).then(
      message => alert(message)
    );
  }

  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>I Want To Hear From You!</h3>
            <p>Got questions or ready to start your digital journey? Reach out today and bring your vision to life!</p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && (
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">{data.contact.email}</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li><h3>&nbsp;</h3></li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>{data.contact.phn}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={submitHandler}
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input name="name" type="text" value={formState.name || ''} onChange={changeHandler} placeholder="Your Name *" />
                      </li>
                      <li>
                        <input
                          name="email"
                          type="text"
                          placeholder="Your Email *"
                          value={formState.email || ''}
                          onChange={changeHandler}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      name="message"
                      placeholder="Write your message here"
                      value={formState.message || ''}
                      onChange={changeHandler}
                    />
                  </div>
                  <button type="submit" className="contactBtn">Submit Now</button>
                </form>
              </div>
            </div>
            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              <img src="img/brushes/contact/2.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/contact/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Contact;

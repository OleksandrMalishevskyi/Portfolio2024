import React, { useState, useRef, useEffect, memo} from 'react'
import { BsExclamationLg, BsPatchCheckFill } from 'react-icons/bs'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { Blast, Map } from '../../components'
import Fade from 'react-reveal/Fade'
import Reveal from 'react-reveal/Reveal'


// Email js
import emailjs from '@emailjs/browser'
import './contact.scss'

const Contact = memo(() => {
const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [])

const sendEmail = (e) => {
  e.preventDefault()

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const userId = process.env.REACT_APP_USER_ID;

console.log(process.env)

  if (!serviceId || !templateId || !userId) {
    console.error('EmailJS keys are missing.');
    return;
  }

  emailjs
    .sendForm(serviceId, templateId, form.current, userId)
    .then(
      () => {
        alert('Message successfully sent!');
        window.location.reload(false);
      },
      () => {
        alert('Failed to send the message, please try again');
      }
    );
}


  return (
    <>
      <section className="contact-section">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div>
            <h2 aria-label="contact me" className="contact__heading">
              <Blast
                letterClass={letterClass}
                arrayStr={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
                indexLetter={12}
              />
            </h2>
            <Fade bottom>
              <p>
                I’m interested in freelance opportunities and I am always ready
                to build projects at anytime, if you have any job offer for me,
                you could use the form below to react out to me.
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <div className="input-wrapper">
              <div className="form-input-group">
<input placeholder="Name" type="text" name="name" required />
                <span className="switch__bg"></span>
                <BsExclamationLg className="exclamation" />
                <BsPatchCheckFill className="checkCircle" />
              </div>

              <div className="form-input-group">
<input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                <span className="switch__bg"></span>
                <BsExclamationLg className="exclamation" />
                <BsPatchCheckFill className="checkCircle" />
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="form-input-group">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
              <span className="switch__bg"></span>
              <BsExclamationLg className="exclamation" />
              <BsPatchCheckFill className="checkCircle" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="form-input-group">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
              <span className="switch__bg"></span>
              <BsExclamationLg className="exclamation" />
              <BsPatchCheckFill className="checkCircle" />
            </div>
          </Fade>
          <Fade left>
            <button type="submit" className="contact-button submit-button">
              <div>
                <span className="bg switch__bg"></span>
                <span className="base switch__border-color"></span>
                <span className="text">
                  SEND MESSAGE
                  <RiSendPlane2Fill className="message-deliver" />
                </span>
              </div>
            </button>
          </Fade>
          <Reveal bottom>
            <footer className="footer">
              <p> &copy; copyright All Right Reserved TechnoTiger - 2023-2024</p>
            </footer>
          </Reveal>
        </form>
        <div className="google-map">
          <Map />
        </div>
        {/* <div ref={MessageRef} className="message"></div> */}
      </section>
    </>
  )
})

export default Contact

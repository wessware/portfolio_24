import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.sendForm('service_xxxxxxxxxx', 'template_xxxxxxxxxx', formRef.current, 'xxxxxxxxxxxx')
     .then(() => {
        setLoading(false);
        setForm({
          name: '',
          email: '',
          message: '',
        });
        alert('Message sent successfully!');
      })
     .catch(err => {
        setLoading(false);
        alert('Message failed to send.', err);
      });
  };

  return (
    <SectionWrapper id="contact" customStyles={styles.contact}>
      <h2>Contact</h2>
      <motion.div variants={slideIn} initial="initial" animate="enter" exit="exit">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required></textarea>
          <motion.button type="submit" whileHover={sendHover} disabled={loading}>
            {loading? 'Sending...' : <img src={send} alt="Send" />}
          </motion.button>
        </form>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;
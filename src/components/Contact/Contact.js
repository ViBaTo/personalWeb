// src/components/Contact/Contact.js
import './Contact.css'

const Contact = () => {
  const contactSection = document.createElement('section')
  contactSection.className = 'contact'

  contactSection.innerHTML = `
    <h2>Contact Me</h2>
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  `

  return contactSection
}

export default Contact

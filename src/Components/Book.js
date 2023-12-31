import React from 'react'
import '../Style/book.css'

const Book = () => {

  
  return (
    <>
     <div class="container">
    <h2>Contact Us</h2>
    <form id="contactForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
    </>
  )
}

export default Book
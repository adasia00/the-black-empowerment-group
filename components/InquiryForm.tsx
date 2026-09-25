"use client";

import { FormEvent, useState } from "react";
import { serviceOptions } from "@/components/serviceOptions";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="full-name">Full Name</label>
        <input id="full-name" name="fullName" type="text" autoComplete="name" placeholder="Your full name" required />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="phone">Phone / WhatsApp Number</label>
        <input id="phone" name="phone" type="text" autoComplete="tel" placeholder="Your phone or WhatsApp number" required />
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="service">Service Interested In</label>
        <select id="service" name="service" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          {serviceOptions.map(({ title }) => (
            <option key={title} value={title}>{title}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="message">Comment</label>
        <textarea
          id="message"
          name="message"
          placeholder="Send us a message and tell us a little more about your project – we’d love to explore how we can help bring your vision to life."
          required
        />
      </div>
      <button className="button button-gold form-submit" type="submit">Send inquiry <span aria-hidden="true">↗</span></button>
      {submitted && (
        <p className="form-status" role="status">
          This preview form is not connected to a message delivery service yet. Your inquiry has not been sent.
        </p>
      )}
    </form>
  );
}

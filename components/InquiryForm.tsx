"use client";

import { FormEvent, useState } from "react";
import { serviceOptions } from "@/components/serviceOptions";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "New website inquiry");
    formData.append("from_name", "The Black Empowerment Group website");
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result: { success?: boolean } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Web3Forms submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="full-name">Full Name</label>
        <input id="full-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required />
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
      <button className="button button-gold form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send inquiry"} <span aria-hidden="true">↗</span>
      </button>
      {status === "success" && (
        <p className="form-status" role="status">Thank you. Your inquiry has been sent successfully.</p>
      )}
      {status === "error" && (
        <p className="form-status" role="alert">
          We couldn’t send your inquiry. Please try again or contact us by email.
        </p>
      )}
    </form>
  );
}

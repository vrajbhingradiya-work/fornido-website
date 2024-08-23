"use client";
import { useState } from "react";
import { websiteData } from "../../websiteData";

const InquiryForm = () => {
  const inquirySection = websiteData.homePage.inquirySection;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    termsAccepted: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.termsAccepted) {
      setError("You must accept the terms and conditions.");
      return;
    }

    try {
      const response = await fetch("/api/send-inquiry-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        }),
      });

      if (response.ok) {
        setSuccess("Your inquiry has been sent successfully!");
        setFormData({
          name: "",
          phone: "",
          termsAccepted: false,
        });
      } else {
        setError("Failed to send inquiry. Please try again later.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="newsletter-area newsletter-area-two section-pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="newsletter-inner">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="newsletter-content">
                    <div className="section-title mb-50">
                      <span className="sub-title">
                        {inquirySection.sectionHeading}
                      </span>
                      <h2 className="title">{inquirySection.heading}</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                      <ul className="list-wrap">
                        <li>
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </li>
                        <li>
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </li>
                        <li className="submit-btn">
                          <input type="submit" value="Submit" />
                        </li>
                      </ul>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="termsAccepted"
                          className="form-check-input"
                          id="checkbox"
                          checked={formData.termsAccepted}
                          onChange={handleChange}
                        />
                        <label htmlFor="checkbox">
                          I accept <span>Terms &amp; Conditions</span> for
                          processing personal data
                        </label>
                      </div>
                    </form>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;

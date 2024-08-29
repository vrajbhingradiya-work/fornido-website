"use client";
import React, { useState } from "react";

const BrochureDownloadForm = ({
  setFormIsShowing,
  brochureLink = "https://drive.google.com/file/d/1yJj7ywNR5uXz55CLrfnJ8RxqM9U9KiDX/view",
  projectName = "project",
}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name && number && email) {
      // Redirect to the Google Drive view and close the form

      const response = await fetch("/api/send-brochure-download-form-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          phone: number,
          email: email,
          project: projectName,
        }), // Convert formData to JSON string
      });
      console.log(response);
      alert("Message successfully sent");
      window.open(brochureLink, "_blank");
      setIsSubmitted(true);
      setError("");
      setTimeout(() => {
        setFormIsShowing(false); // Close the form after 2 seconds
      }, 2000);
    } else {
      setError("Please fill in all fields.");
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
                      <span className="sub-title">Quick Inquiry</span>
                      <h2 className="title">
                        Please fill in the form to view and download the
                        brochure!
                      </h2>
                    </div>
                    {isSubmitted ? (
                      <p>
                        Thank you for your details. The brochure is available in
                        a new tab...
                      </p>
                    ) : (
                      <form onSubmit={handleSubmit} className="newsletter-form">
                        <ul className="list-wrap">
                          <li>
                            <input
                              type="text"
                              placeholder="Your name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              placeholder="Phone number"
                              value={number}
                              onChange={(e) => setNumber(e.target.value)}
                              required
                            />
                          </li>
                          <li>
                            <input
                              type="email"
                              placeholder="Your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </li>
                          <li className="submit-btn">
                            <input type="submit" value="Submit" />
                          </li>
                        </ul>
                        {error && <p className="error">{error}</p>}
                      </form>
                    )}
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

export default BrochureDownloadForm;

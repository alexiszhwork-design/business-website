import { useState } from "react";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedbackMessage("");

    // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
    const formspreeEndpoint = "https://formspree.io/f/mrevwvqr";

    fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          setFeedbackMessage("✓ Message sent successfully!");
          clearState();
          setTimeout(() => setFeedbackMessage(""), 5000);
        } else {
          setFeedbackMessage("✗ Error sending message. Please try again.");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setFeedbackMessage("✗ Error sending message. Please try again.");
      });
  };
  
  const getSocialLink = (url, platform) => {
    if (url && (url.startsWith("http") || url.startsWith("/"))) return url;
    // Fall back to main site for each platform if no valid URL provided
    const defaults = {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
    };
    return defaults[platform] || "/";
  };
  return (
    <div>
      <div className="container faq-wrapper" style={{ paddingTop: 100 }}>
        <div className="col-md-10 col-md-offset-1">
          <div className="section-title text-center">
            <h2>FAQ</h2>
            <p>Common questions about enrollment, schedules, and materials.</p>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h4>What ages do you accept?</h4>
              <p>We offer programs for children ages 3 through 16, with age-appropriate groupings and curriculum.</p>
            </div>

            <div className="faq-item">
              <h4>How do I enroll in a program?</h4>
              <p>You can enroll by contacting us via the form below or by emailing us directly at {props.data ? props.data.email : "info@company.com"}.</p>
            </div>

            <div className="faq-item">
              <h4>Do I need to bring materials or instruments?</h4>
              <p>Basic materials are provided for workshops. For instrument lessons, students should bring their own instrument when possible — we can advise on rentals.</p>
            </div>

            <div className="faq-item">
              <h4>What is your cancellation policy?</h4>
              <p>We ask for 24 hours notice for cancellations. For multi-session programs, refunds are handled on a case-by-case basis.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success" style={{ color: feedbackMessage.includes("✓") ? "green" : "red", marginBottom: "12px" }}>
                  {feedbackMessage}
                </div>
                <button type="submit" className="btn btn-custom btn-lg" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? (
                  <a href={`mailto:${props.data.email}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {props.data.email}
                  </a>
                ) : (
                  "loading"
                )}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={getSocialLink(props.data && props.data.facebook, "facebook")} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={getSocialLink(props.data && props.data.instagram, "instagram")} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={getSocialLink(props.data && props.data.twitter, "twitter")} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={getSocialLink(props.data && props.data.youtube, "youtube")} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

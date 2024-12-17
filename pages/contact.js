import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    if (res.ok) alert("Message Sent!");
  };

  return (
    <div>
      <Header />
      <main>
        <video autoPlay muted loop className="video-bg">
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

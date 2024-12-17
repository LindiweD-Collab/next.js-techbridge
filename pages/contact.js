import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message }),
      });
      if (res.ok) {
        alert("Message Sent!");
        setMessage("");
      } else {
        alert("Error sending message");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white h-screen">
      <Header />
      <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-8 xl:p-10 relative">
        <video autoPlay muted loop className="video-bg absolute top-0 left-0 w-full h-full object-cover">
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>
        <div className="bg-white bg-opacity-75 p-4 md:p-6 lg:p-8 xl:p-10 rounded shadow-md relative z-10">
          <h1 className="text-purple-700 text-4xl font-bold mb-4">
            Get in Touch
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 mb-4 border border-gray-400 rounded"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

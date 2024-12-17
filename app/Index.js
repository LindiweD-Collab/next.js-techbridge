import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <section className="hero" style={{ backgroundImage: `url(/bg-image.jpg)` }}>
          <h1>Welcome to TechBridge Solutions</h1>
          <p>Innovative Software Solutions for Your Business Needs</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

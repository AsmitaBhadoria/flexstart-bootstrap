import logo from './logo.svg';
import './App.css';
import './style.scss';


function App() {
  return (
    <header>
      <div className="logo">
        <img src="C:\Users\91797\Desktop\56456.png" alt="Company Logo" width="550" />
      </div>
      <nav>
        <ul>
          {/* Add more <li> items and structure as needed */}
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          {/* ... other list items ... */}
        </ul>
      </nav>
      <button>Get Started</button>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>We offer modern solutions for growing your business</h1>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <button className="btn">GET Started </button>
      </div>
      <div className="hero-content1">
        <img src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="" />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <div className="container">
      <div className="headingDiv">
        <h2>This is the heading</h2>
        <p>Lorem ipsum ...</p>
      </div>
      <div className="imgDiv">
        <img src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/about.jpg" alt="" />
      </div>
    </div>
  );
}

function HomeCardsSection() {
  return (
    <section className="home-cards">
      {/* Add your cards and content here */}
      <div>
        <img src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-1.png" alt="" />
        <h3>Ad cupiditate sed est odio</h3>
        <p>Eum ad dolor et...</p>
      </div>
      {/* ... other card components ... */}
    </section>
  );
}

function Apps() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <div className="App1">ṣ
        <HomeCardsSection />
        <HomeCardsSection />
        <HomeCardsSection />
      </div>
      {/* Add other components as needed */}
    </div>
  )
}

export default Apps;

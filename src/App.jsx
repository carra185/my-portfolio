import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* Hero */}
      <section>
        <h1>Hi, I’m Nathan</h1>
        <p>Aspiring game developer & CS student</p>
      </section>

      {/* About */}
      <section>
        <h2>About Me</h2>
        <p>
          I’m a computer science student interested in game development,
          programming, and building interactive applications.
        </p>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>

        <div>
          <h3>Project 1</h3>
          <p>A web app built using JavaScript.</p>
        </div>

        <div>
          <h3>Project 2</h3>
          <p>An Express server with API routes.</p>
        </div>

        <div>
          <h3>Project 3</h3>
          <p>A portfolio website built with React.</p>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
        <p>GitHub: github.com/yourusername</p>
      </section>
    </main>
  );
}

function Blog() {
  return (
    <main>
      <h1>Spring Break 2026</h1>

      <p>
        During spring break, I spent time relaxing and recharging after a busy
        semester. I explored new places, tried different foods, and enjoyed time
        away from school responsibilities.
      </p>

      <p>
        One of the highlights was spending time outdoors and experiencing new
        environments. It was a great opportunity to step away from coding for a
        bit and come back refreshed and motivated.
      </p>

      <p>
        Overall, the break helped me reset mentally and prepare for the rest of
        the semester. I’m excited to apply what I’ve learned and continue
        improving my skills.
      </p>

      {/* Example image */}
      <img
        src="https://via.placeholder.com/400"
        alt="Spring break"
        style={{ marginTop: "20px" }}
      />
    </main>
  );
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
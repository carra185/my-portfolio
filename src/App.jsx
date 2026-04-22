import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* Hero */}
      <section>
        <h1>Hi, I’m Nathan Carranza</h1>
        <p>CIS Major and UCI dropout :)</p>
      </section>

      {/* About */}
      <section>
        <h2>About Me</h2>
        <p>
          I’m a computer information systems student interested in sleeping,
          eating, and chugging redbull before bed so I have nightmares from heart palputaions.
        </p>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>

        <div>
          <h3>Vet Connect</h3>
          <p>A web application that helps military veterans apply and better navigate their VA benefits.</p>
        </div>

        <div>
          <h3>The Big Smell</h3>
          <p>A little passion project I've been working on for the past 6 years. It's almost ready. Keep a nostral open, you might catch a whiff ;)</p>
        </div>

        <div>
          <h3>Trader Joes 2</h3>
          <p>It's like the first one but with one stripper pole in the middle and ps5 in the back.</p>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact</h2>
        <p>Email: carra185@csusm.edu</p>
        <p>GitHub: github.com/carra185</p>
      </section>
    </main>
  );
}

function Blog() {
  return (
    <main>
      <h1>Spring Break 2026</h1>

      <p>
        nup.
      </p>

<p>         </p>

      <p>
        bup.
      </p>

      <p>
        yup.
      </p>

      {/* Example image */}
      <img
        src="https://preview.redd.it/dogs-with-smiles-this-is-my-grandmas-pup-punky-v0-wfxgpbsridra1.jpg?width=1080&crop=smart&auto=webp&s=cb898684471dea9e52cf14b741c5b7c12cbd52d2"
        alt="blog img"
        style={{ marginTop: "20px" }}
      />
    </main>
  );
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
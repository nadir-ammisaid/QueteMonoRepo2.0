import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to the best movies app</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/programs">Programs</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;

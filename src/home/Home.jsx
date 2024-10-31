import { useState } from "react";
import Drawer from "../drawer/Drawer";
import "./Home.css";
import { FiSidebar } from "react-icons/fi";

function Home() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="home">
      <Drawer setIsOpen={setIsNavbarOpen} isOpen={isNavbarOpen} />
      <div className="title">
        <button
          onClick={() => setIsNavbarOpen(true)}
          style={{ display: isNavbarOpen ? "none" : "block" }}
          className="button-open-drawer chatgpt-title-button"
        >
          <FiSidebar />
        </button>
        <button className="chatgpt-title-button">ChatGPT :O</button>
      </div>
    </div>
  );
}

export default Home;

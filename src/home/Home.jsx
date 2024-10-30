import { useState } from "react";
import Drawer from "../drawer/Drawer";
import "./Home.css";
import { FiSidebar } from "react-icons/fi";

function Home() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [drawerClasses, setDrawerClasses] = useState(["drawer"]);

  function openDrawer() {
    setIsNavbarOpen(true);

    setDrawerClasses(["drawer", "drawer-opened"]);
  }

  return (
    <div className="home">
      <Drawer
        classes={drawerClasses}
        setIsOpen={setIsNavbarOpen}
        setDrawerClasses={setDrawerClasses}
        isOpen={isNavbarOpen}
      />
      <div className="title">
        <button
          onClick={openDrawer}
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

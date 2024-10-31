import { useEffect, useState } from "react";
import Drawer from "../drawer/Drawer";
import "./Home.css";
import { FiSidebar } from "react-icons/fi";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
import { BiMenuAltLeft } from "react-icons/bi";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth <= 768);
      });
    };
  }, []);

  return (
    <div className="home">
      {isMobile ? (
        <MobileDrawer
          isOpen={isNavbarOpen}
          isMobile={isMobile}
          setIsOpen={setIsNavbarOpen}
        />
      ) : (
        <Drawer setIsOpen={setIsNavbarOpen} isOpen={isNavbarOpen} />
      )}
      <div className="title">
        <button
          onClick={() => setIsNavbarOpen(true)}
          style={{ display: isNavbarOpen && !isMobile ? "none" : "block" }}
          className="button-open-drawer chatgpt-title-button"
        >
          {isMobile ? <BiMenuAltLeft /> : <FiSidebar />}
        </button>
        <button className={`chatgpt-title-button ${isMobile && "text"}`}>
          ChatGPT :O
        </button>
      </div>
    </div>
  );
}

export default Home;

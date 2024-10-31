import { FiSidebar } from "react-icons/fi";
import "./Drawer.css";

function Drawer({ isOpen, setIsOpen }) {
  return (
    <div className={`drawer ${isOpen && `drawer-opened`}`}>
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="button-open-drawer chatgpt-title-button drawer-button-close"
        >
          <FiSidebar />
        </button>
      )}
    </div>
  );
}

export default Drawer;

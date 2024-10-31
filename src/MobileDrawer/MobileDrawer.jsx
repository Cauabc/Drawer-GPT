import "./MobileDrawer.css";
import { BiMenuAltLeft } from "react-icons/bi";

function MobileDrawer({ isOpen, isMobile, setIsOpen }) {
  return (
    <div
      className={`mobile-drawer ${
        isOpen && isMobile && "mobile-drawer-opened"
      }`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="button-open-drawer chatgpt-title-button drawer-button-close"
      >
        <BiMenuAltLeft />
      </button>
    </div>
  );
}

export default MobileDrawer;

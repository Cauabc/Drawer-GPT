import { FiSidebar } from "react-icons/fi";
import "./Drawer.css";

function Drawer({ classes, isOpen, setIsOpen, setDrawerClasses }) {
  function closeDrawer() {
    setIsOpen(false);
    setDrawerClasses(["drawer"]);
  }

  return (
    <div className={classes.map((classe) => classe).join(" ")}>
      {isOpen && (
        <button
          onClick={closeDrawer}
          className="button-open-drawer chatgpt-title-button drawer-button-close"
        >
          <FiSidebar />
        </button>
      )}
    </div>
  );
}

export default Drawer;

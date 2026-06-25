import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <p id="sidebar-header">Today's Menu</p>
      <p className="sidebar-link is-selected">Daily Promotion</p>
      <p className="sidebar-link">Coffee & Tea</p>
      <p className="sidebar-link">Fruit Juice</p>
      <p className="sidebar-link">Soft Drinks</p>
      <p className="sidebar-link">Sides</p>
      <p className="sidebar-link">Pasta</p>
      <p className="sidebar-link">Main Course</p>
    </aside>
  )
}
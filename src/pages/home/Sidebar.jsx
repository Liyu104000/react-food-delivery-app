import "./Sidebar.css";

export function Sidebar({categoriesList, selectedCategory, setSelectedCategory}) {
  return (
    <aside className="sidebar">
      <p className="sidebar-header">Today's Menu</p>

      {categoriesList.map(cat => (
        <p
         key={cat.id}
         className={`sidebar-link ${selectedCategory === cat.id ? "is-selected" : ""}`}
         onClick={() => setSelectedCategory(cat.id)}
        > 
        {cat.name}        
      </p>
      ))}
    </aside>
  )
}
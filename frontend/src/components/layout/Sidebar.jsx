import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: "220px", borderRight: "1px solid #ddd", padding: "16px" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/forms/new">Create Form</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

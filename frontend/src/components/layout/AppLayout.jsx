import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main style={{ padding: "16px", flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
};


export default AppLayout;
import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};


export default AppLayout;
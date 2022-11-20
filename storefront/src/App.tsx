import { Outlet } from "react-router-dom";
import { Navigation } from "./Containers";

function App() {
  return (
    <div className="flex w-full h-screen bg-slate-50">
      <Navigation />
      <div className="flex flex-col w-full h-full px-20 py-6">
        <div className="flex justify-center">
          <h1 className="font-serif text-2xl font-semibold">
            medusa <span className="font-normal">store</span>
          </h1>
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

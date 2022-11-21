import { MedusaProvider } from "medusa-react";
import { QueryClient } from "react-query";
import { Outlet, useNavigation } from "react-router-dom";
import { Navigation, WithConfig } from "./Containers";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000,
      retry: 1,
    },
  },
});

function App() {
  const navigation = useNavigation();

  return (
    <div className="flex w-full h-full bg-slate-50">
      <Navigation />
      <div className="flex flex-col w-full h-full px-20 py-6">
        <div className="flex justify-center">
          <h1 className="font-serif text-2xl font-semibold">
            medusa <span className="font-normal">store</span>
          </h1>
        </div>
        <div
          className={`p-4 ${
            navigation.state === "loading" ? "opacity-50" : "opacity-100"
          }`}
        >
          <MedusaProvider
            baseUrl="http://localhost:9000"
            queryClientProviderProps={{ client: queryClient }}
          >
            <WithConfig>
              <Outlet />
            </WithConfig>
          </MedusaProvider>
        </div>
      </div>
    </div>
  );
}

export default App;

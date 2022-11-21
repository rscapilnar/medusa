import { Region } from "@medusajs/medusa";
import { useRegions } from "medusa-react";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type StoreConfig = {
  regions: Region[];
  activeRegion?: Region;
  setActiveRegion: Dispatch<SetStateAction<Region | undefined>>;
};

const StoreConfigContext = createContext<StoreConfig>({} as StoreConfig);
export const useConfig = () => useContext(StoreConfigContext);

const WithConfig = ({ children }: PropsWithChildren) => {
  const { regions, isLoading } = useRegions();

  const [activeRegion, setActiveRegion] = useState<Region>();

  useEffect(() => {
    if (regions && regions.length) setActiveRegion(regions[0]);
  }, [regions]);

  // if it's loading, I'd show some nice full-page overlay
  return (
    <StoreConfigContext.Provider
      value={{ regions: regions || [], activeRegion, setActiveRegion }}
    >
      {isLoading ? null : children}
    </StoreConfigContext.Provider>
  );
};

export default WithConfig;

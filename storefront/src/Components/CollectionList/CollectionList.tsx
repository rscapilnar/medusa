import { useCollections } from "medusa-react";
import { useStorefront } from "../../Containers/Storefront/Storefront";
import Placeholder from "../Placeholder";

const Separator = () => (
  <span
    className="mx-3 text-2xl font-bold text-slate-300"
    style={{ letterSpacing: "-0.17em" }}
  >
    {`//`}
  </span>
);

const Loading = () => (
  <>
    {[...Array(5)].map((_, i) => (
      <>
        <Placeholder width="w-24" height="h-8" />
        {i < 4 && <Separator />}
      </>
    ))}
  </>
);

const CollectionList = () => {
  const { collections, isLoading } = useCollections();
  const { selectedCollectionId, setSelectedCollectionId } = useStorefront();

  return (
    <div className="flex items-center self-center">
      {isLoading && <Loading />}
      {!isLoading && collections && (
        <>
          {[{ title: "All", id: null }, ...collections].map((collection, i) => {
            const isSelected = selectedCollectionId === collection.id;
            return (
              <>
                <div
                  className={`text-xl font-bold font-serif ${
                    isSelected
                      ? "text-gray-600"
                      : "text-gray-400 cursor-pointer"
                  }`}
                  onClick={() => setSelectedCollectionId(collection.id)}
                >
                  {collection.title}
                </div>
                {i < collections.length && <Separator />}
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default CollectionList;

import { use, useEffect, useState } from "react";
import { fetchPackList } from "../../_utils/packListRequestsIndex";
import PackingCategoryList from "./PackingCategoryList";
import RevealSectionBtn from "../misc-components/RevealSectionBtn";


export default function PackListPanel({ tripProps, displayProps, requestProps, packListProps, ...props }) {
  const [showCategory, setShowCategory] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedPackList = await fetchPackList(packListProps.packListId);
        packListProps.setPackList(fetchedPackList);
      } catch (error) {
        console.error("Error fetching pack list:", error);
      }
    };

    packListProps.packListId ? fetchData() : null;
  }, [packListProps.packListId]);

  if (
    displayProps.tripDisplayTab !== "Packing List" &&
    displayProps.tripDisplayTab !== "Full Details"
  ) {
    return null;
  } else {
    return (
      <div className="flex flex-col bg-peach-300 rounded-xl">
        <RevealSectionBtn
          category={"Packing List"}
          showCategory={showCategory}
          setShowCategory={setShowCategory}
          arrowUp={showCategory}
        />
        <div
          id={`packing-list-section`}
          className={`${
            showCategory ? null : "hidden"
          } flex gap-1 flex-row flex-wrap bg-gray-100 rounded-b-xl`}
        >
          {packListProps.packList
            ?  Object.entries(packListProps.packList).map(([category, items]) => {
              if (items.length === 0 || typeof items !== "object") {
                return null;
              }
              return (
                <PackingCategoryList
                  key={category}
                  category={category}
                  items={items}
                  packList={packListProps.packList}
                  setPackList={packListProps.setPackList}
                />
              );
            })
            : 
            <button className="m-auto">Create Packing List</button>
            }

        </div>
      </div>
    );
  }
}

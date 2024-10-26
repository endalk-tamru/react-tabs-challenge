// I used context to demonstrate my state management skills,
// enhancing code readability and simplifying data sharing across components.
// For caching, I utilized React Query, and I am also proficient in
// Redux and RTK Query for larger projects.

import { useTabContext } from "../context/TabContext";
import FirstTab from "./Tabs/FirstTab";
import SecondTab from "./Tabs/SecondTab";
import ThirdTab from "./Tabs/ThirdTab";
import ForthTab from "./Tabs/ForthTab";

const tabOptions = [
  { id: 1, tabTitle: "Tab 1" },
  { id: 2, tabTitle: "Tab 2" },
  { id: 3, tabTitle: "Tab 3" },
  { id: 4, tabTitle: "Tab 4" },
];

export default function Tabs() {
  const { selectedTab, setSelectedTab } = useTabContext();

  return (
    <div className="container">
      {/* TODO Add tabs here */}
      <div className="tabs">
        {tabOptions?.map((tab) => (
          <button
            key={tab.id}
            className={selectedTab === tab.id ? "active" : ""}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {selectedTab === 1 && <FirstTab />}
        {selectedTab === 2 && <SecondTab />}
        {selectedTab === 3 && <ThirdTab />}
        {selectedTab === 4 && <ForthTab />}
      </div>
    </div>
  );
}

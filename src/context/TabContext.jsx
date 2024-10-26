// I have used context to demonstrate my skill in state management.
// This approach improves code readability and enables easier state sharing,
// particularly in larger applications where multiple components depend on the same data.

import { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const useTabContext = () => useContext(TabContext);

export const TabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};

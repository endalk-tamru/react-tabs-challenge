import { useQuery } from "react-query";

import { useTabContext } from "../../context/TabContext";
import { fetchFirstTabText } from "../../api/loripsum";

export default function FirstTab() {
  const { selectedTab } = useTabContext();

  const { data, isLoading, error } = useQuery(
    ["tabText", selectedTab],
    () => fetchFirstTabText(),
    {
      staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
      cacheTime: 1000 * 60 * 10, // Keep data in cache for 10 minutes
    }
  );

  if (isLoading) return <h4>Loading...</h4>;
  if (error) return <p>Error loading content</p>;

  return (
    <div>
      <h2>Title {selectedTab}</h2>

      <p>{data}</p>
    </div>
  );
}

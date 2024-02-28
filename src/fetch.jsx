export const fetchData = async (link, setData) => {
  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
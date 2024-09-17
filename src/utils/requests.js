export const getRequest = async (url) => {
    const apiRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
    const data = await fetch(url, apiRequest).then(response => response.json());
    return data;
}
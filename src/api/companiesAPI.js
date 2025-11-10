export const fetchCompaniesAPI = async () => {
  try {
    const response = await fetch("/companies_data.json");
    // console.log(response);

    if (!response.ok) {
      throw new Error("Failed to load local JSON file");
    }

    const data = await response.json();
    return data.companies;
  } catch (error) {
    console.error("Error loading JSON data:", error);
    throw error;
  }
};

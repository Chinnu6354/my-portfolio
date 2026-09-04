const API_BASE_URL =
  "https://myportfolio-api-61za.onrender.com/api/v1/portfolio/chinnu";

export const getEducation = async () => {
  const url =
    "https://myportfolio-api-61za.onrender.com/api/v1/portfolio/chinnu/education/";

  console.log("Calling API:", url);

  const response = await fetch(url);

  console.log("Status:", response.status);
  console.log("Response:", response);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();

  console.log("Education data:", data);

  return data;
};

export const getProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/projects/`);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
};

export const getSkills = async () => {
  const response = await fetch(`${API_BASE_URL}/skills/`);

  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }

  return response.json();
};

export const getExperience = async () => {
  const response = await fetch(`${API_BASE_URL}/experience/`);

  if (!response.ok) {
    throw new Error("Failed to fetch experience");
  }

  return response.json();
};
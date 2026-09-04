const API_BASE_URL = process.env.REACT_APP_BASE_API;

console.log("API BASE URL:", API_BASE_URL);

export const getEducation = async () => {
  const response = await fetch(`${API_BASE_URL}chinnu/education/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch education: ${response.status}`);
  }

  return response.json();
};

export const getProjects = async () => {
  const response = await fetch(`${API_BASE_URL}chinnu/projects/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status}`);
  }

  return response.json();
};

export const getSkills = async () => {
  const response = await fetch(`${API_BASE_URL}chinnu/skills/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch skills: ${response.status}`);
  }

  return response.json();
};

export const getExperience = async () => {
  const response = await fetch(`${API_BASE_URL}chinnu/experience/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch experience: ${response.status}`);
  }

  return response.json();
};
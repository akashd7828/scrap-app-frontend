// api.js

export const saveForm1Data = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/form1Data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.error("Error saving Form1 data:", error);
  }
};

export const saveForm2Data = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/form2Data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.error("Error saving Form2 data:", error);
  }
};

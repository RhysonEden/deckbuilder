import axios from "axios";
const BASE_URL = "https://api.magicthegathering.io/v1/";

export async function fetchCards({ name, text }) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}cards?name=${name}&text=${text}`
    );

    return data.cards || [];
  } catch (error) {
    throw error;
  }
}

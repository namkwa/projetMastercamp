import axios from "axios";

async function register(identifiers) {
  const response = await axios.post(
    "http://localhost:3000/register",
    identifiers
  );
  return response;
}

export { register };

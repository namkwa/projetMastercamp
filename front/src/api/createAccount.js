import axios from "axios";

async function createAccount(identifiers) {
  const res = await axios.post("http://localhost:3000/createAccount", identifiers);
  return res;
}

export { createAccount };

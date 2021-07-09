import axios from "axios";

async function me() {
  const res = await axios.get("http://localhost:3000/me", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
  return res;
}

export { me };

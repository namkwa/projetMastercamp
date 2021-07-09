import axios from "axios";

async function getProjects() {
  const res = await axios.get("http://localhost:3000/getProjects", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
  return res;
}

export { getProjects };

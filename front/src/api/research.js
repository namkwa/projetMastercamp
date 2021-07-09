import axios from "axios";

async function research(keywords) {
  const response = await axios.get("http://localhost:3000/research", {
    headers: {
      argument: keywords.string,
      authorization: localStorage.getItem("token"),
    },
  });
  return response;
}

export { research };

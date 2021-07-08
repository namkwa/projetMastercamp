import axios from "axios";

async function research(keywords) {
  console.log("toujours front");
  console.log(keywords);
  const response = await axios.get("http://localhost:3000/research", {
    headers: {
      argument: keywords.string,
      authorization: localStorage.getItem("token"),
    },
  });
  return response;
}

export { research };

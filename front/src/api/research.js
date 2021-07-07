import axios from "axios";

async function research(identifiers) {
    console.log("toujours front")
    console.log(identifiers)
  const response = await axios.get("http://localhost:3000/research",{headers: {argument: identifiers.string}});
  return response;
}

export { research };

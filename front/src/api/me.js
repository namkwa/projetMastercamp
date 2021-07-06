import axios from "axios";

async function me() {
  console.log("TOKEN : ");
  console.log(localStorage.getItem("token"));
  const res = await axios.get("http://localhost:3000/me", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
  return res;
}

export { me };

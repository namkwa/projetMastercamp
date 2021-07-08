import axios from "axios";

async function test2() {
  const res = await axios.get("http://localhost:3000/test2");
  console.log(res);
}

export { test2 };

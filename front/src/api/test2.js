import axios from "axios";

async function test2() {
  const res = await axios.get("http://localhost:3000/test2");
}

export { test2 };

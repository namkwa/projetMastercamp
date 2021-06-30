import axios from "axios";

async function upload(file) {
  let formData = new FormData();
  formData.append("file", file);
  console.log(localStorage.getItem("token"));
  const res = await axios.post("http://localhost:3000/upload", formData, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  console.log(res);
}

export { upload };

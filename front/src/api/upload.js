import axios from "axios";

async function upload(documentInfo) {
  let formData = new FormData();
  formData.append("title", documentInfo.title);
  formData.append("file", documentInfo.file);
  formData.append("description", documentInfo.description);
  console.log(localStorage.getItem("token"));
  const res = await axios.post("http://localhost:3000/upload", formData, {
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "multipart/form-data",
      title: documentInfo.title,
    },
  });
  return res;
}

export { upload };

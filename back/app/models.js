import { Bookshelf } from "./config.js";

const Student = Bookshelf.model("Student", {
  tableName: "etudiant",
});

export { Student };

import { Bookshelf } from "./config.js";

const Student = Bookshelf.model("Student", {
  tableName: "student",
});

const Documents = Bookshelf.model("Documents", {
  tableName: "document",
});

const Test = Bookshelf.model("Test", {
  tableName: "test",
});

export { Student, Documents, Test };

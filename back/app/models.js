import { Bookshelf } from "./config.js";

const Student = Bookshelf.model("Student", {
  tableName: "etudiant",
});

const Documents = Bookshelf.model("Documents", {
  tableName: "document_",
});

const Comments = Bookshelf.model("Comments", {
  tableName: "commentaire",
});

const addDocument = Bookshelf.model("addDocument", {
  tableName: "ajouter",
});

const downloadDocument = Bookshelf.model("downloadDocument", {
  tableName: "telecharger",
});

export { Student };

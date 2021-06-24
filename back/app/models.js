import { Bookshelf } from "./config.js";

const Users = Bookshelf.model("Users", {
  tableName: "users",
});

export { Users };

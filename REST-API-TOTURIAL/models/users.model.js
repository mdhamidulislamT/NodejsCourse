const { v4: uuid4 } = require("uuid");

const users = [
  {
    id: uuid4(),
    username: "Anisul Islam",
    email: "anisulislam@gmail.com",
  },
  {
    id: uuid4(),
    username: "Md Hamidul Islam",
    email: "hamidlive6@gmail.com",
  },
  {
    id: uuid4(),
    username: "Md Ariful Islam",
    email: "arifulislam@gmail.com",
  },
  {
    id: uuid4(),
    username: "Burhanul Islam",
    email: "burhanislam@gmail.com",
  },
  {
    id: uuid4(),
    username: "Tashriful Islam",
    email: "tashriful@gmail.com",
  },
  {
    id: uuid4(),
    username: "Mosorraf Islam",
    email: "mosorraf@gmail.com",
  }
];

module.exports = users;
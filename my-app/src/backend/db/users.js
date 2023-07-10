// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "Adarshbalika@123",
    email: "adarsh@gmail.com",
    bio: "Redefining!",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
    website: "https://manasamandalreddy.netlify.app/",
    createdAt: "2022-06-16T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "79Gksh9otl",
    firstName: "James",
    lastName: "Robert",
    username: "jamesrobert",
    password: "Jamesrobert@123",
    email: "james@gmail.com",
    bio: "Live love and laugh",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
    website: "https://google.com/",
    createdAt: "2023-06-18T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Jack",
    lastName: "William",
    username: "jackwilliam",
    password: "Jackwilliam@123",
    email: "jack@gmail.com",
    bio: "Hey all! Let's connect",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554256/socialmedia/avatars/jane-doe_il3cvx.webp",
    website: "https://manasamandalreddy.netlify.app/",
    createdAt: "2023-06-23T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Michael",
    lastName: "Smith",
    username: "michaelsmith",
    password: "Michaelsmith@123",
    email: "michael@gmail.com",
    bio: "Rock and Roll",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
    website: "https://manasamandalreddy.netlify.app/",
    createdAt: "2023-06-19T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "o5gzWjEeX_",
    firstName: "Taylor",
    lastName: "Swift",
    username: "Taylor_Swift",
    password: "Taylor@1",
    email: "taylor@gmail.com",
    bio: "Born Singer",
    bookmarks: [],
    avatarUrl: "",
    createdAt: "2023-06-20T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "M1NR81Bzlz",
    firstName: "Henry",
    lastName: "Duo",
    username: "henryduo",
    password: "Henryduo@123",
    email: "henry@gmail.com",
    bio: "Believer",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525373/socialmedia/avatars/alex-maxwell.webp",
    website: "",
    createdAt: "2023-06-20T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "qq8zWjEeXd",
    firstName: "Mihira",
    lastName: "Jonas",
    username: "mihirajonas",
    password: "Mihirajonas@123",
    email: "mihira@gmail.com",
    bio: "I am",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525510/socialmedia/avatars/sophia-jones.webp",
    website: "",
    createdAt: "2023-06-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];

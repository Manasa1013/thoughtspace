import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "7fd08cd0-1952-4fdf-bf04-2fcc87d2ad49",
    firstName: "Taylor",
    lastName: "Swift",
    username: "Taylor_Swift",
    password: "Taylor@1",
    createdAt: "2023-06-28T22:27:23+05:30",
    updatedAt: "2023-06-28T22:27:23+05:30",
  },
];

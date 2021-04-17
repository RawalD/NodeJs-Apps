import express from "express";

import {
    users,
  createUser,
  getUserId,
  deleteUser,
  patchUser
} from "../controllers/users.js";



const router = express.Router();



//All routes start with /users
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", createUser);

// /users/2 => req.params
router.get("/:id", getUserId);

router.delete("/:id", deleteUser);

router.patch("/:id", patchUser);

export default router;

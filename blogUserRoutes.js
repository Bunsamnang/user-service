import express from "express";
import {
  createBlog,
  deleteBlog,
  editBlog,
  viewOwnBlogs,
  viewPublicBlogs,
} from "./blogUserController.js";
const router = express.Router();

router.get("/viewall", viewPublicBlogs);
router.get("/myblogs", viewOwnBlogs);

router.post("/create-blog", createBlog);
router.put("/edit-blog/:id", editBlog);
router.delete("/delete-blog/:id", deleteBlog);

export default router;

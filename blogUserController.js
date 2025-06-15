import blogAPI from "./utils/blogAPI.js";

export const viewPublicBlogs = async (req, res) => {
  try {
    const response = await blogAPI.get("/public/viewall", {
      params: req.query,
    });
    res.status(200).json(response.data);
  } catch (err) {
    console.error("Error fetching public blogs:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const viewOwnBlogs = async (req, res) => {
  try {
    const response = await blogAPI.get("/user/myblogs", {
      headers: {
        "x-user-id": req.user._id,
      },
      params: req.query,
    });
    res.status(200).json(response.data);
  } catch (err) {
    console.error("Error fetching own blogs:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createBlog = async (req, res) => {
  try {
    const response = await blogAPI.post("/user/create-blog", req.body, {
      headers: {
        "x-user-id": req.user._id,
      },
    });
    res.status(200).json(response.data);
  } catch (err) {
    console.error("Error creating blog:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const editBlog = async (req, res) => {
  try {
    const response = await blogAPI.put(
      `/user/edit-blog/${req.params.id}`,
      req.body,
      {
        headers: {
          "x-user-id": req.user._id,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error("Error editing blog:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const response = await blogAPI.delete(
      `/user/delete-blog/${req.params.id}`,
      {
        headers: {
          "x-user-id": req.user._id,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error("Error deleting blog:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

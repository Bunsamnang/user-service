export const extractUserFromHeader = (req, res, next) => {
  const userId = req.headers["x-user-id"];
  if (!userId) {
    return res.status(401).json({ message: "No user ID header" });
  }
  req.user = { _id: userId };
  next();
};

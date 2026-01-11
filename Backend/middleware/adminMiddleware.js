const adminMiddleware = (req, res, next) => {
  if (!req.user?.isAdmin) return res.status(403).json("Admin only");
  next();
};

export default adminMiddleware;

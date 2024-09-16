// backend/middlewares/admin.js
const admin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .send({
        message:
          "Access denied. Only administrators can perform this action.",
      });
  }
  next();
};

module.exports = admin;

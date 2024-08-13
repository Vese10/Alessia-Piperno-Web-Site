// backend/middlewares/admin.js
const admin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send({ message: 'Accesso negato. Solo gli amministratori possono eseguire questa azione.' });
  }
  next();
};

module.exports = admin;
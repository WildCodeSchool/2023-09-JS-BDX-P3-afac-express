const authAdminMiddleware = (req, res, next) => {
  if (req?.user?.is_admin !== 1) {
    return res.status(403).json({ error: "you're not admin" });
  }

  return next();
};

module.exports = { authAdminMiddleware };

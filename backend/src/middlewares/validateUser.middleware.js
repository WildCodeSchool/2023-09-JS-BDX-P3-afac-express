const validateUser = async (req, res, next) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // eslint-disable-next-line camelcase
  const { email, password, is_admin } = req.body;

  if (!emailRegex.test(email)) {
    res.status(400).send({ message: `Email is missing` });
    return;
  }
  if ((password?.length ?? 0) < 4) {
    res.status(400).send({ message: `passeword is missing` });
    return;
  }
  // eslint-disable-next-line camelcase
  if (typeof is_admin !== "boolean") {
    res.status(400).send({ message: `Boolean is needed` });
    return;
  }
  next();
};

module.exports = validateUser;

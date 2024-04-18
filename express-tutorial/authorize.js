const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'hasalem') {
    req.user = { name: user, id: 15 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }

};
module.exports = authorize;
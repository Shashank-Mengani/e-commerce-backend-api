import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.token;

  if (!authHeader) {
    return res.status(401).json({ message: "You are not authenticated!" });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid!" });
    }

    req.user = user;
    next();
  });
};

export const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      req.user.id === req.params.id ||
      req.user.id === req.params.userId ||
      req.user.isAdmin
    ) {
      next();
    } else {
      res.status(403).json({ message: "You are not allowed!" });
    }
  });
};

export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "Admin access required!" });
    }
  });
};
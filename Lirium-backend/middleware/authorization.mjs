import jwt from 'jsonwebtoken';
import User from '../models/UserSchema.mjs';
import { asyncHandler } from './asyncHandler.mjs';
import ErrorResponse from '../models/ErrorResponse.mjs';

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorResponse('Not authorized', 401));
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedToken.id);

    if (!req.user) {
      return next(new ErrorResponse('Not authorized', 401));
    }

    next();
  } catch (error) {
    return next(new ErrorResponse('Not authorized', 401));
  }
});

export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        statusCode: 403,
        message: `The role ${req.user.role} has no authorization`,
      });
    }
    next();
  };
};

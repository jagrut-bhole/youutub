//method by making promises
const asyncHandler = (reqHandler) => {
  (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((error) => next(error));
  };
};

export { asyncHandler };

//another method using try-catch block

// const asyncHandler = () => async (fn) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: true,
//       message: err.message,
//     });
//   }
// };

// export { asyncHandler }
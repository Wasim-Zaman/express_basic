const generateResponse = require("../utils/response");

exports.getTest = (req, res, next) => {
  try {
    const data = {
      message: "This is a test route",
    };
    res
      .status(200)
      .json(generateResponse(200, true, "Test route is working!", data));
  } catch (error) {
    next(error);
  }
};

import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  // per user
  try {
    const { success } = await ratelimit.limit(userid);

    if (!success) {
      return res.status(429).json({
        message: "Too many request, please try again.",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;

import userMiddleware from "./userIsLoggedInMiddleware";
import adminMiddleware from "./adminIsLoggedInMiddleware";
import redirectMiddleware from "./redirectIfLoggedMiddleware";

export const userIsLoggedInMiddleware = userMiddleware;
export const adminIsLoggedInMiddleware = adminMiddleware;
export const redirectIfLoggedMiddleware = redirectMiddleware;
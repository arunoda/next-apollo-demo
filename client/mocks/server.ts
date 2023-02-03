import { setupServer } from "msw/node";
import { handlers } from "./handlers/users/handler";

export const server = setupServer(...handlers);
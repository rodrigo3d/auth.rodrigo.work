// import { log } from "@repo/logger";s
import { createServer } from "./server";

const port = process.env.PORT || 3000;
const server = createServer();

server.listen(port, () => {
  console.info(`🚀 Api running on http://localhost:${port}`)
})

module.exports = server

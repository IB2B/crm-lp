import { initBotId } from "botid/client/core"

// Vercel BotID: an invisible check that the booking and newsletter forms are sent by people, not bots.
// It adds a proof to these requests; the API routes verify it with checkBotId() (botid/server).
// Locally (next dev) every request counts as human.
initBotId({
  protect: [
    { path: "/api/booking", method: "POST" },
    { path: "/api/newsletter", method: "POST" },
  ],
})

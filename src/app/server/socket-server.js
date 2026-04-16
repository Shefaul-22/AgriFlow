const { Server } = require("socket.io");

const io = new Server(4000, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("user connected:", socket.id);

  // Join room (farm)
  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-joined", socket.id);
  });

  // WebRTC offer
  socket.on("offer", ({ room, offer }) => {
    socket.to(room).emit("offer", { offer });
  });

  // WebRTC answer
  socket.on("answer", ({ room, answer }) => {
    socket.to(room).emit("answer", { answer });
  });

  // ICE candidate
  socket.on("ice-candidate", ({ room, candidate }) => {
    socket.to(room).emit("ice-candidate", { candidate });
  });
});

io.listen(4000);
console.log("Socket server running on port 4000");
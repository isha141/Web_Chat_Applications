// Access-Control-Allow-Origin : '*'
// testing for pushing
const socket= io('http://localhost:8000/socket.io/client-dist/socket.io.js',{
      transports: ["websocket"]
});
const form=document.getElementById('send_container')
const messageInput=document.getElementById('messageinp')
const messageContainer= document.querySelector(".container")

// const append= ()=>{
//   const
// }
// const socket = io("http://localhost");

socket.on("connection", () => { 
//    console.log("Isha jindal");
  console.log(socket.connected); // true
});

socket.on("connection", () => { 
  cout<<"hyy";
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

const naming=prompt("Enter your name to join"); 
console.log(naming);
ret = socket.emit('new-user-joined',naming);
console.log(ret) 

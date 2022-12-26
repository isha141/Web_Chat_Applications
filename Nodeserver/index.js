// const { Socket } = require('socket.io')

// Node server 

const io=require('socket.io')(8000,{
   cors :{
        origin:"*"
   }
});

// connection come  // user joined 
// socket.io instance which listen all the connection (new user joined )
io.on('Connection',socket=>{  
    // basically used for particular joint connection  
    // user joint event this function will run 
      socket.on('new-user-joined',name=>{ 
      console.log('New User Joined',name);
      user[socket.id]=name;     // update user    // dispaly to all connection in the group 
      socket.broadcast.emit('user-joined',name);
    });

    socket.on('send' , message=>{
       socket.broadcast.emit('receive',{message:message, name: user[socket.id]})
    }); 
})

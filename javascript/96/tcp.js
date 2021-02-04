const net = require('net')


const server = net.createServer(function (socket) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() +1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    function getString(){
        let monthString = '';
        let dateString = ''
        if(month < 10){
            monthString= '0'
        }
        if(day < 10){
            dateString= '0'
        }
        return(`${year}-${monthString}${month}-${dateString}${day} ${hours}:${minutes}`);
    }

    socket.write(getString());
    socket.write('\n');
   
    socket.destroy();
})
server.listen(process.argv[2])


/* const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kp',{useNewUrlParser: true});

mongoose.connection.once('open',function(){
      console.log('connection has made');
});
*/

const mongoose = require('mongoose');
mongoose.connect("mongodb://projectdata:eDXErWXduaeWuSmzbaJbNpEPN9KM8StRxs3q6QJ5JsUeHwsU13ysy1IyCJkunfST6Hy9NsED2p8yop9RTMxnrw%3D%3D@projectdata.documents.azure.com:10255/medicareDB?ssl=true&replicaSet=globaldb").then(
                      ()=>console.log('connection successfull')).catch((err)=>console.error(err));
 
            
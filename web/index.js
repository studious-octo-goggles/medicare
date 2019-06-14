 var mongoose=require('mongoose');
 const Schema = require('mongoose').Schema;
 var express=require('express');
 var bodyParser=require('body-parser');
 var crypto = require('crypto');
 var app=express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));
 
 var fileupload = require('express-fileupload');
 var fs = require('fs');
 app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));
const doc = require('./db/doc');
const admin = require('./db/admin');
const patient = require('./db/patient');
const tempPat = require('./db/temppatient');
const prescription = require('./db/prescription');

app.get('/',function(req,res){
    console.log("host");
    res.sendFile( 'index.html',{root:'./web/'} );  
});
app.get('/h',function(req,res){
    console.log("host");
    res.sendFile( 'home.html',{root:'./web/'} );  
});
app.get('/style',function(req,res){
    res.sendFile( 'style.css',{root:'./web/resources/css/'} );  
});
app.get('/js',function(req,res){
    res.sendFile( 'main.js',{root:'./web/resources/js/'} );  
});
app.get('/seatCss',function(req,res){
    res.sendFile( 'seat.css',{root:'./web/'} );  
});
//......................................xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx..........................
app.get('/patDetails',function(req,res){
    res.sendFile( 'Pat_Details.html',{root:'./web/'} );  
});
app.get('/symptoms',function(req,res){
    res.sendFile( 'Symptoms.html',{root:'./web/'} );  
});
app.get('/medicalHelp',function(req,res){
    res.sendFile( 'MedicalHelp.html',{root:'./web/'} );  
});
app.get('/appointment',function(req,res){
    res.sendFile( 'style.css',{root:'./web/'} );  
});
//-----img--------------------------------------------------------------------
app.get('/logo', function (req, res) {  
    res.sendFile( 'finalLogo.png',{root:'./img/'} ); 
 })
 app.get('/medicarePic', function (req, res) {  
    res.sendFile( 'medicare.png',{root:'./img/'} ); 
 })
 app.get('/patPic5', function (req, res) {  
    res.sendFile( 'patPic1.jpeg',{root:'./img/'} ); 
 })
app.get('/patDocPic', function (req, res) {  
    res.sendFile( 'patdoc.jpg',{root:'./img/'} ); 
 })
 app.get('/docPic', function (req, res) {  
    res.sendFile( 'doc.png',{root:'./img/'} );  
 })
 app.get('/adminPic', function (req, res) {  
    res.sendFile( 'admin.png',{root:'./img/'} );  
 })
 app.get('/doctorPic', function (req, res) {  
    res.sendFile( 'doctor.jpg',{root:'./img/'} );  
 })
 app.get('/hosPic', function (req, res) {  
    res.sendFile( 'hosp.jpg',{root:'./img/'} );  
 })
 app.get('/dischargePic', function (req, res) {  
    res.sendFile( 'discharge.jpg',{root:'./img/'} );  
 })
 
 app.get('/plusSignPic', function (req, res) {  
    res.sendFile( 'add.png',{root:'./img/'} );  
 })
 app.get('/removeSignPic', function (req, res) {  
    res.sendFile( 'remove.png',{root:'./img/'} );  
 })
 app.get('/completeSignPic', function (req, res) {  
    res.sendFile( 'complete.png',{root:'./img/'} );  
 })
 app.get('/uncompleteSignPic', function (req, res) {  
    res.sendFile( 'uncomplete.png',{root:'./img/'} );  
 })
//-------html files-----------------------------------------------------------
var onePatSearch;
var sId={};
var d_Id={};
app.get('/about',function(req,res){
    console.log("host");
    res.sendFile( 'about.html',{root:'./web/'} );  
 });
app.get('/loginPage', function (req, res) {  
    res.sendFile( 'login.html',{root:'./web/'} );  
 })
 app.get('/updateDoc', function (req, res) {  
    res.sendFile( 'update.html',{root:'./web/'} );  
 })
 app.get('/docProfile', function (req, res) {  
    res.sendFile( 'profile.html',{root:'./web/'} );  
 })
 app.get('/addPatient', function (req, res) {  
    res.sendFile( 'AddPatient.html',{root:'./web/'} );  
 })
 app.get('/changePassword', function (req, res) {  
    res.sendFile( 'ChangePassword.html',{root:'./web/'} );  
 })
 app.get('/docAssignPat', function (req, res) {  
    res.sendFile( 'AssignedPatients.html',{root:'./web/'} );  
 })
 app.get('/assignBed', function (req, res) {  
    res.sendFile( 'AssignBed.html',{root:'./web/'} );  
 })
 app.get('/seatMap', function (req, res) {  
    res.sendFile( 'SeatMap.html',{root:'./web/'} );  
 })
 app.get('/allPatientView', function (req, res) {  
    res.sendFile( 'ViewPat.html',{root:'./web/'} );  
 })
 app.get('/discharge', function (req, res) {  
    res.sendFile( 'newDischargePat.html',{root:'./web/'} );  
 })
 app.get('/billing', function (req, res) {  
    res.sendFile( 'BillingInfo.html',{root:'./web/'} );  
 })
 app.get('/adminhome', function (req, res) {  
    res.sendFile( 'adminhomepage.html',{root:'./web/'} );  
 })
 app.post('/onePatView', function (req, res) {  
     onePatSearch = req.body.id5;
     sId={"id":onePatSearch};
    res.sendFile( 'oneView.html',{root:'./web/'} );  
 })
 app.get('/onePatId', function (req, res) {  
     console.log(sId);
    res.send(sId);
})
app.get('/oneDocId', function (req, res) { 
    d_Id={"id":docCurrentId}; 
    console.log(d_Id);
   res.send(d_Id);
})
 app.get('/appointments', function (req, res) {  
    res.sendFile( 'appointment.html',{root:'./web/'} );  
 })
 //----- var for patient route--------------------
 var patData1={id1:"",name1:"",add1:"",phn1:"",disease1:""};
 // var patId1, patName1, patAdd1, patMobile1, patDisease1,
//---------routes-------------------------------------------------------------
var pass;
var idd;
var docCurrentId;
var patBillId;
var extraCh;
app.post('/register',function(req,res){
    console.log("i am in register");
    SaveDocData(req);
    var ret={};
    ret['response']="Done";
    console.log("done");
 //   res.send(JSON.stringify(ret));
    res.sendFile( 'adminHomePage.html',{root:'./web/'} );  
});
//..........................xxxxxxxxxxxxxxxxxxxxxxxx.............................................
var tempDisease;
var tempSymptoms;
var tempDuration;
app.post('/register2',function(req,res){
    console.log("i am in temp register");
    SaveTempPatData(req);
    var ret={};
    ret['response']="Done";
    console.log("done");
 //   res.send(JSON.stringify(ret));
    res.sendFile( 'Symptoms.html',{root:'./web/'} );  
});
app.post('/register5',function(req,res){
    console.log("i am in temp Prescription ");
    SavePrescription(req);
    var ret={};
    ret['response']="Done";
    console.log("done");
 //   res.send(JSON.stringify(ret));
    res.send("done");  
});

app.post('/saveSymtomData',function(req,res){
    console.log("i am in symptoms data");
    tempDisease=req.body.disease;
    tempSymptoms=req.body.symptoms;
    res.sendFile( 'prescription.html',{root:'./web/'} );  
});
app.post('/prescription',function(req,res){
    tempDuration=req.body.tempdays;
    console.log(tempDisease+ " 222     " +tempSymptoms+ "      " +tempDuration);
    res.sendFile( 'prescription.html',{root:'./web/'} );  
});
app.get('/prescriptionView',function(req,res){
    var query = prescription.find({'disease':tempDisease});
    query.select('disease symptom prescription1');
    query.exec(function(err,data){
        if(err) return handleError(err);
        if(data.length == 0){
            res.json({msg : 'Unsuccessful'});
        }
        else{
            var x=Object.values(data);
            res.send(x);
            console.log("--------------");
            console.log(x);
        }
    });
});

app.post('/addPat1',function(req,res){
    console.log("i am in patient first data");
    patData1['id1']=req.body.id1;
    patData1['name1']=req.body.name1;
    patData1['add1']=req.body.add1;
    patData1['phn1']=req.body.phn1;
    patData1['disease1']=req.body.disease1;
    console.log(patData1);
    res.send("done");
});
app.post('/patDataFirst',function(req,res){
    console.log("i am sending patient first data");
    res.send(patData1);
});
app.post('/patDataData',function(req,res){
    console.log("i am in patient second data");
    patData1['date']=req.body.date1;
    patData1['docId']=req.body.id;
    patData1['roomType']=req.body.room;
    console.log(patData1);
    res.send("done");
});
app.post('/patData',function(req,res){
    console.log("i am in patient data saving route");
    patData1['bedNo']=req.body.bedNo;
    console.log(patData1);
    SavePatientData(patData1);
    var ret={};
    ret['response']="Done";
    console.log("done");
    res.sendFile( 'AddPatient.html',{root:'./web/'} );  
});
app.post('/roomData',function(req,res){
    console.log("i am in room data");
    SaveRoomData(req);
    var ret={};
    ret['response']="Done";
    console.log("done");
 //   res.send(JSON.stringify(ret));
    res.sendFile( 'adminHomePage.html',{root:'./web/'} );  
});
app.get('/patView',function(req,res){
    var query = patient.find({});
    query.select('patient_name assignDocId patient_id patient_mobile patient_address disease entryDate roomType bedNo');
    query.exec(function(err,data){
        if(err) return handleError(err);
        if(data.length == 0){
            res.json({msg : 'Unsuccessful'});
        }
        else{
            var x=Object.values(data);
            res.send(x);
            console.log("--------------");
            console.log(x);
        }
    });
}); 
app.get('/profile',function(req,res){
    var password=pass;
    var hashed_pass = crypto.createHash('sha512').update(password).digest("hex");
    var query = doc.find({'doc_email':idd, 'doc_password':hashed_pass});
    query.select('doc_name doc_email doc_id doc_mobile doc_address specialist salary');
    query.exec(function(err,data){
        if(err) return handleError(err);
        if(data.length == 0){
            res.json({msg : 'Unsuccessful'});
        }
        else{
            var x=Object.values(data[0]);
            res.send(x[3]);
            console.log(data[0]);
        }       
    });
}); 
app.get('/assignDocName',function(req,res){
    console.log("data------------------------");
    var query = doc.find({'doc_id':req.body.id,});
    query.select('doc_name ');
    query.exec(function(err,data){
        if(err) return handleError(err);
        if(data.length == 0){
            res.json({msg : 'Unsuccessful'});
        }
        else{
            var x=Object.values(data[0]);
            res.send(x[3]);
            console.log(data[0]);
        }       
    });
});
app.post('/patProfile',function(req,res){
    console.log(req.body.Id);
    patBillId=req.body.Id;
    var query = patient.find({'patient_id':req.body.Id,});
    query.select('patient_id patient_name patient_mobile patient_address disease assignDocId entryDate roomType');
    query.exec(function(err,data){
        if(err) return handleError(err);
        if(data.length == 0){
            res.json({msg : 'Unsuccessful'});
        }
        else{
            var x=Object.values(data[0]);
            console.log(x[3].assignDocId);
            res.send(x[3]);

        } 
    });
});
app.post('/patBillData',function(req,res){
    var query = patient.find({'patient_id':patBillId,});
    query.select('patient_id patient_name patient_mobile patient_address disease assignDocId entryDate roomType');
    query.exec(function(err,data){
        if(err) return handleError(err);
        if(data.length == 0){
            res.json({msg : 'Unsuccessful'});
        }
        else{
            var x=Object.values(data[0]);
            console.log(x[3].assignDocId);
            res.send(x[3]);

        } 
    });
});
app.post('/billgenerate', function (req, res) {  
    extraCh = req.body.ch;
    console.log(extraCh);
    res.sendFile( 'Bill.html',{root:'./web/Invoice'} );  
})
app.post('/deletePat', function (req, res) {      
    var query = patient.findOneAndRemove({'patient_id':patBillId,});
    query.exec(function(err,data){
            res.send("done");
    });
})
app.post('/extraInfo', function (req, res) {  
    var xx={ex:extraCh,};
    res.send(xx);  
})
app.post('/docInfo',function(req,res){
    console.log(req.body.Id);
    var query = doc.find({'doc_id':req.body.Id,});
    query.select('doc_name doc_email doc_id doc_mobile doc_address specialist salary');
    query.exec(function(err,data){
        if(err) return handleError(err);
        if(data.length == 0){
            res.json({msg : 'Unsuccessful'});
        }
        else{
            var x=Object.values(data[0]);
         //   console.log(x[3]);
            res.send(x[3]);

        }       
    });
}); 
app.post('/updateAccount',function(req,res){
    console.log("i am in update doc account");
    console.log(req.body.id);
    var query = doc.findOneAndUpdate({doc_id:req.body.id},{doc_name: req.body.name, doc_id:req.body.id, doc_address:req.body.add, salary:req.body.salary}, { new: true});
    query.exec(function(err,data){
      if(err) return handleError(err);
      res.send(data);    
    });
});
app.post('/changePass',function(req,res){
    console.log("i am in change doc password");
    console.log(req.body.oldPass);
    var query = doc.findOneAndUpdate({doc_id:docCurrentId},{doc_password: req.body.newPass}, { new: true});
    query.exec(function(err,data){
      if(err) return handleError(err);
      res.sendFile( 'ChangePassword.html',{root:'./web/'} );  
    });
});
app.post('/docLogin',function(req,res){
    console.log(" doctor login activity");
    docCurrentId=req.body.id;
    var password=req.body.password;
    var hashed_pass = crypto.createHash('sha512').update(password).digest("hex");
    var query = doc.find({'doc_id':req.body.id, 'doc_password':hashed_pass});
    query.select('doc_name');
    query.exec(function(err,data){
        if(data.length == 0){
            res.json({msg : 'Unsuccessful'});
        }
        else{
        res.sendFile( 'profile.html',{root:'./web/'} );  
        console.log(JSON.stringify(data[0]));
        }       
    });
});
app.post('/docCurrentProfile',function(req,res){
    console.log(" doctor profile");
    var query = doc.find({'doc_id':docCurrentId,});
    query.select('doc_name doc_id doc_address doc_email doc_mobile specialist salary');
    query.exec(function(err,data){
        if(data.length == 0){
            res.json({msg : 'Unsuccessful'});
        }
        else{
            var x=Object.values(data[0]);
               console.log(x[3]);
               res.send(x[3]);
        }       
    });
});

app.post('/adminLogin',function(req,res){
    console.log("admin login activity");
    var password=req.body.password;
    var hashed_pass = crypto.createHash('sha512').update(password).digest("hex");
    var query = admin.find({'id':req.body.id, 'password':hashed_pass});
    query.select('name');
    query.exec(function(err,data){
        if(data.length == 0){
            res.json({msg : 'Unsuccessful'});
        }
        else{
        res.sendFile( 'adminhomepage.html',{root:'./web/'} );  
        console.log(JSON.stringify(data[0]));
        }       
    });
}); 


app.post('/login1',function(req,res){
    console.log("login activity");
     pass = req.body.password;
     idd = req.body.id;
    var password=req.body.password;
    var hashed_pass = crypto.createHash('sha512').update(password).digest("hex");
    var query = doc.find({'doc_email':req.body.id, 'doc_password':hashed_pass});
    query.select('doc_name doc_email doc_id doc_mobile');
    query.exec(function(err,data){
        if(data.length == 0){
            res.json({msg : 'Unsuccessful'});
        }
        else{
        res.sendFile( 'test.html',{root:'./web/'} );  
        console.log(JSON.stringify(data[0]));
        }       
    });
}); 
function SaveDocData(req){
    console.log(req.body.t1);
    var password=req.body.t2;
    var hashed_pass = crypto.createHash('sha512').update(password).digest("hex");
    var doc1 = new doc({
        doc_id:req.body.t0,
        doc_name:req.body.t1,
        doc_address:req.body.t3,
        doc_email:req.body.id,
        doc_mobile:req.body.t4,
        specialist:req.body.s,
        salary:req.body.t5,
        doc_password:hashed_pass   
    });
    doc1.save(function(error){
    if(error){
        console.error(error);
  }
});
}
function SavePatientData(patData1){
    var patient1 = new patient({
        patient_id:patData1.id1,
        patient_name:patData1.name1,
        patient_address:patData1.add1,
        patient_mobile:patData1.phn1,
        disease:patData1.disease1,
    //    blood_group:String,
    //    relative_name:String,
   //     patient_relation:String,
    //    relative_mobile:Number,
        entryDate:patData1.date,
        assignDocId:patData1.docId,
        roomType:patData1.roomType,
        bedNo:patData1.bedNo
    });
    patient1.save(function(error){
        if(error){
            console.error(error);
      }
    });
}
function SaveTempPatData(req){
       var tempPat1 = new tempPat({
        patientname:req.body.temp1,
        patientaddress:req.body.temp2,
        patientmobile:req.body.temp3,
        dob:req.body.temp4,
        age:req.body.temp5,          
    });
    tempPat1.save(function(error){
    if(error){
        console.error(error);
  }
});
}
function SavePrescription(req){
    var prescription2 = new prescription({
        disease:req.body.temp1,
        symptom:req.body.temp2,
        prescription1:req.body.temp3,          
 });
 prescription2.save(function(error){
 if(error){
     console.error(error);
}
});
}
function SaveAdminData(req){
    console.log(req.body.t1);
    var password=req.body.t2;
    var hashed_pass = crypto.createHash('sha512').update(password).digest("hex");
    var admin1 = new admin({
        id:req.body.t0,
        name:req.body.t1,
        address:req.body.t3,
        email:req.body.id,
        mobile:req.body.t4,
        password:hashed_pass   
    });
    console.log(req);
    admin1.save(function(error){
    if(error){
        console.error(error);
  }
});
}
 var server=app.listen(4000).on('error', function(err) { console.log(err)});

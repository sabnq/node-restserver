//========================
//   PUERTO
//========================
process.env.PORT = process.env.PORT || 3000;

//========================
//   ENTORNO
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========================
//   BASES DE DATOS
//========================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //user = cafe-user
    //password = 123456a
    urlDB = 'mongodb://cafe-user:123456a@ds023550.mlab.com:23550/cafe';
}

process.env.URLDB = urlDB;
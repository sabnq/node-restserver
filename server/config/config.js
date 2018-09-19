//========================
//   PUERTO
//========================
process.env.PORT = process.env.PORT || 3000;

//========================
//   ENTORNO
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========================
//   Vencimiento del token
//========================
process.env.CADUCIDAD_TOKEN = '200h';

//========================
//   SEED autenticación
//========================
process.env.SEED = process.env.SEED || 'secreto-sed-dev'

//========================
//   BASES DE DATOS
//========================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //user = cafe-user
    //password = 123456a

    //urlDB = 'mongodb://cafe-user:123456a@ds023550.mlab.com:23550/cafe';
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//========================
//   GOOGLE CLIENTID
//========================

process.env.CLIENT_ID = process.env.CLIENT_ID || '849137246543-bbjndietg3qsq0rhmjvvjun9ih69hhjh.apps.googleusercontent.com';
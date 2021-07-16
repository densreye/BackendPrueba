const Bdconection= require("../conection/bdconection.js");
const oracledb = require('oracledb');

//Conexion a la Base de Datos
async function ConexionBD() {
    try {
       connection = await oracledb.getConnection({
          user: Bdconection.USER,
          password: Bdconection.PASSWORD,
          connectString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST="+Bdconection.HOST+")(PORT="+Bdconection.PORT+"))(CONNECT_DATA=(SID="+Bdconection.DB+")(SERVER = DEDICATED)(SERVICE_NAME = PRODUCCION)))"  
          
      });
      console.log('La conexión a BD ha sido exitosa');
      
    } catch (err) {
        console.log('No fue posible conectarse a la BD'); 
      console.error(err.message);
    } 
  }
  
  ConexionBD();
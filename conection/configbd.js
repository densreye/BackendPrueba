
const bdconection = require('../conection/bdconection')
module.exports = {
     
    user: bdconection.USER,
    password: bdconection.PASSWORD,
    connectString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST="+bdconection.HOST+")(PORT="+bdconection.PORT+"))(CONNECT_DATA=(SID="+bdconection.DB+")(SERVER = DEDICATED)(SERVICE_NAME = PRODUCCION)))"   
}
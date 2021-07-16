//Modulo Transacciones

module.exports = app => {
    const startTransaction= require("../appcontroller/controlTransaccion")
    var router = require("express").Router();
    router.post("/mi_Transaccion/Iniciar",startTransaction.inicializar)
    router.get("/mi_Transaccion/Iniciar", (req,res)=>{
        res.json({"message":"solo methodo post"})
    })
    app.use('/facturacion/v1/', router);
}

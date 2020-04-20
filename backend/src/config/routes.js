const express = require('express')

module.exports = function(server){
    
    // Defini URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de Ciclo de Pagamento
    const BillingCyle = require('../api/billingCycle/billingCycleService')
    BillingCyle.register(router, '/billingCycles')
}
module.exports = {
    auth: {
        Account: require('./src/auth/account'),
        Profile: require('./src/auth/profile'),
        Role: require('./src/auth/role'),
        ApiEndpoint: require('./src/auth/api-endpoint')
    },
    inventory: {
        Inventory: require('./src/inventory/inventory')
    },
    map: require('./src/map'),
    validator: require('./src/validator')
}

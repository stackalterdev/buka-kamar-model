module.exports = {
    auth: {
        Account: require('./src/auth/account'),
        Profile: require('./src/auth/profile'),
        Role: require('./src/auth/role'),
        ApiEndpoint: require('./src/auth/api-endpoint')
    },
    map: require('./src/map'),
    validator: require('./src/validator')
}

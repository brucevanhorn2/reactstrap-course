module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        mailingList: [],
        vehicles: [],
        dealerships: _.times(100, function(n){
            return{
                id: n,
                dealershipName: faker.name.findName() + "'s Flying Cars",
                address: faker.address.streetAddress("####") + ' ' + faker.address.city() + " " + faker.address.state() + " " + faker.address.zipCode(),
                phone: faker.phone.phoneNumber()
            }
        })
    }
}
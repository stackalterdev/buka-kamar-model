require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    // data.should.have.property('username');
    // data.username.should.instanceof(String);

    data.should.have.property('margin');
    data.margin.should.instanceof(Number);

    data.should.have.property('autoloadROH');
    data.autoloadROH.should.instanceof(Boolean);

    data.should.have.property('roomSold');
    data.roomSold.should.instanceof(Number);

    data.should.have.property('totalROHRooms');
    data.totalROHRooms.should.instanceof(Number);

    data.should.have.property('rate');
    data.rate.should.instanceof(Number);

    data.should.have.property('qualifyingRate');
    data.qualifyingRate.should.instanceof(Number);

    data.should.have.property('discount');
    data.discount.should.instanceof(Number);

    data.should.have.property('netRate');
    data.netRate.should.instanceof(Number);

    data.should.have.property('suitesSold');
    data.suitesSold.should.instanceof(Number);

    data.should.have.property('totalSuiteRooms');
    data.totalSuiteRooms.should.instanceof(Number);

    data.should.have.property('upgradeFee');
    data.upgradeFee.should.instanceof(Number);

    data.should.have.property('roomsSold');
    data.roomsSold.should.instanceof(Number);

    data.should.have.property('totalRooms');
    data.totalRooms.should.instanceof(Number);

    data.should.have.property('negotiatedRate');
    data.negotiatedRate.should.instanceof(Number);

    data.should.have.property('promotionsHTPerks');
    data.promotionsHTPerks.should.instanceof(Boolean);

    data.should.have.property('geoRates');
    data.geoRates.should.instanceof(Boolean);

    data.should.have.property('dailyDrop');
    data.dailyDrop.should.instanceof(Boolean);

    data.should.have.property('tonightPlusOne');
    data.tonightPlusOne.should.instanceof(Boolean);

    data.should.have.property('multiNight');
    data.multiNight.should.instanceof(Boolean);
};
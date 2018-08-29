'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Inventory extends BaseModel {
    constructor(source) {
        super('inventory', '1.0.0');

        // Define properties.
        this.hotelId = '';
        this.date = new Date();
        this.margin = 0;
        this.autoloadROH = false;
        this.roomSold = 0;
        this.totalROHRooms = 0;
        this.rate = 0;
        this.qualifyingRate = 0;
        this.discount = 0;
        this.netRate = 0;
        this.suitesSold = 0;
        this.totalSuiteRooms = 0;
        this.upgradeFee = 0;
        this.roomsSold = 0;
        this.totalRooms = 0;
        this.negotiatedRate = 0;
        this.promotionsHTPerks = false;
        this.geoRates = false;
        this.dailyDrop = false;
        this.tonightPlusOne = false;
        this.multiNight = false;

        this.copy(source);
    }
};
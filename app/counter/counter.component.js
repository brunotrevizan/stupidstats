"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var CounterComponent = (function () {
    function CounterComponent() {
        /*
        counterPornVideo = 0;
        counterWatchignPorn = 0;
        counterTrashCell = 0;
        counterPizza = 0;
        counterChocolate = 0;
        counterAirBlueWhale = 0;
        counterSexualIntercourse = 0;
        counterPoopPeople = 0;
    */
        this.hoje = new Date();
        this.minutesOfTheDay = this.hoje.getHours() * 60 + this.hoje.getMinutes();
        this.milissecondsOfTheDay = this.minutesOfTheDay * 60000;
        this.pornVideoByMilissecond = 2340000;
        this.watchingPornMilissecond = 1000;
        this.trashCellByMilissecond = 1000;
        this.pizzaByMilissecond = 1000;
        this.chocolateByMilissecond = 1000;
        this.airWhaleByMilissecond = 1000;
        this.sexualIntercourseByMilissecond = 1000;
        this.poopingPeopleByMilissecond = 1000;
        this.valuePornVideoByMilissecond = 1;
        this.valueWatchingPornMilissecond = 29985;
        this.valueTrashCellByMilissecond = 4;
        this.valuePizzaByMilissecond = 350;
        this.valueChocolateByMilissecond = 6754; //kg
        this.valueAirWhaleByMilissecond = 56724; //litros
        this.valueSexualIntercourseByMilissecond = 79166;
        this.valuePoopingPeopleByMilissecond = 209;
        // se hj ja tem 35000 ms e são 209 pessoas cada 1000 ms fazendo coco, qts ja fizeram?
        //ms day 72600000
        this.counterPornVideo = (this.milissecondsOfTheDay / this.pornVideoByMilissecond) * this.valuePornVideoByMilissecond;
        this.counterWatchignPorn = (this.milissecondsOfTheDay / this.watchingPornMilissecond) * this.valueWatchingPornMilissecond;
        this.counterTrashCell = (this.milissecondsOfTheDay / this.trashCellByMilissecond) * this.valueTrashCellByMilissecond;
        this.counterPizza = (this.milissecondsOfTheDay / this.pizzaByMilissecond) * this.valuePizzaByMilissecond;
        this.counterChocolate = (this.milissecondsOfTheDay / this.chocolateByMilissecond) * this.valueChocolateByMilissecond;
        this.counterAirBlueWhale = (this.milissecondsOfTheDay / this.airWhaleByMilissecond) * this.valueAirWhaleByMilissecond;
        this.counterSexualIntercourse = (this.milissecondsOfTheDay / this.sexualIntercourseByMilissecond) * this.valueSexualIntercourseByMilissecond;
        this.counterPoopPeople = (this.milissecondsOfTheDay / this.poopingPeopleByMilissecond) * this.valuePoopingPeopleByMilissecond;
    }
    CounterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timerPornVideo = Rx_1.Observable.timer(2000, this.pornVideoByMilissecond);
        var subscriptionO = timerPornVideo.subscribe(function (t) { return _this.counterPornVideo = _this.counterPornVideo + _this.valuePornVideoByMilissecond; });
        var timerPornWatched = Rx_1.Observable.timer(2000, this.watchingPornMilissecond);
        var subscription = timerPornWatched.subscribe(function (t) { return _this.counterWatchignPorn = _this.counterWatchignPorn + _this.valueWatchingPornMilissecond; });
        var timerTrashCell = Rx_1.Observable.timer(2000, this.trashCellByMilissecond);
        var subscription = timerTrashCell.subscribe(function (t) { return _this.counterTrashCell = _this.counterTrashCell + _this.valueTrashCellByMilissecond; });
        var timerPizza = Rx_1.Observable.timer(2000, this.pizzaByMilissecond);
        var subscription = timerPizza.subscribe(function (t) { return _this.counterPizza = _this.counterPizza + _this.valuePizzaByMilissecond; });
        var timerChocolate = Rx_1.Observable.timer(2000, this.chocolateByMilissecond);
        var subscription = timerChocolate.subscribe(function (t) { return _this.counterChocolate = _this.counterChocolate + _this.valueChocolateByMilissecond; });
        var timerWhale = Rx_1.Observable.timer(2000, this.airWhaleByMilissecond);
        var subscription = timerWhale.subscribe(function (t) { return _this.counterAirBlueWhale = _this.counterAirBlueWhale + _this.valueAirWhaleByMilissecond; });
        var timerSexualIntercourse = Rx_1.Observable.timer(2000, this.sexualIntercourseByMilissecond);
        var subscription = timerSexualIntercourse.subscribe(function (t) { return _this.counterSexualIntercourse = _this.counterSexualIntercourse + _this.valueSexualIntercourseByMilissecond; });
        var timerPoop = Rx_1.Observable.timer(2000, this.poopingPeopleByMilissecond);
        var subscription = timerPoop.subscribe(function (t) { return _this.counterPoopPeople = _this.counterPoopPeople + _this.valuePoopingPeopleByMilissecond; });
    };
    CounterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'counter',
            templateUrl: 'counter.component.html',
            styleUrls: ['counter.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CounterComponent);
    return CounterComponent;
}());
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map
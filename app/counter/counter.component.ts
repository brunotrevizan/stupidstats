import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';
 
@Component({
    moduleId: module.id,
    selector: 'counter',
    templateUrl: 'counter.component.html',
    styleUrls: ['counter.component.css']
})
 
export class CounterComponent implements OnInit {


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

        hoje = new Date();
        minutesOfTheDay = this.hoje.getHours() * 60 + this.hoje.getMinutes();
        milissecondsOfTheDay = this.minutesOfTheDay * 60000;

        pornVideoByMilissecond = 2340000;
        watchingPornMilissecond = 1000;
        trashCellByMilissecond = 1000;
        pizzaByMilissecond = 1000;
        chocolateByMilissecond = 1000;
        airWhaleByMilissecond = 1000;
        sexualIntercourseByMilissecond = 1000;
        poopingPeopleByMilissecond = 1000;

        valuePornVideoByMilissecond = 1;
        valueWatchingPornMilissecond = 29985;
        valueTrashCellByMilissecond = 4;
        valuePizzaByMilissecond = 350;
        valueChocolateByMilissecond = 6754;//kg
        valueAirWhaleByMilissecond = 56724;//litros
        valueSexualIntercourseByMilissecond = 79166;
        valuePoopingPeopleByMilissecond = 209;

        // se hj ja tem 35000 ms e são 209 pessoas cada 1000 ms fazendo coco, qts ja fizeram?
//ms day 72600000
        counterPornVideo = (this.milissecondsOfTheDay/this.pornVideoByMilissecond) * this.valuePornVideoByMilissecond;
        counterWatchignPorn = (this.milissecondsOfTheDay/this.watchingPornMilissecond) * this.valueWatchingPornMilissecond;
        counterTrashCell = (this.milissecondsOfTheDay/this.trashCellByMilissecond) * this.valueTrashCellByMilissecond;
        counterPizza = (this.milissecondsOfTheDay/this.pizzaByMilissecond) * this.valuePizzaByMilissecond;
        counterChocolate = (this.milissecondsOfTheDay/this.chocolateByMilissecond) * this.valueChocolateByMilissecond;
        counterAirBlueWhale = (this.milissecondsOfTheDay/this.airWhaleByMilissecond) * this.valueAirWhaleByMilissecond;
        counterSexualIntercourse = (this.milissecondsOfTheDay/this.sexualIntercourseByMilissecond) * this.valueSexualIntercourseByMilissecond;
        counterPoopPeople = (this.milissecondsOfTheDay/this.poopingPeopleByMilissecond) * this.valuePoopingPeopleByMilissecond;

	ngOnInit(){

		let timerPornVideo = Observable.timer(2000, this.pornVideoByMilissecond);
		var subscriptionO = timerPornVideo.subscribe(t => this.counterPornVideo = this.counterPornVideo + this.valuePornVideoByMilissecond);
        
        let timerPornWatched = Observable.timer(2000, this.watchingPornMilissecond);
		var subscription = timerPornWatched.subscribe(t => this.counterWatchignPorn = this.counterWatchignPorn + this.valueWatchingPornMilissecond);

        let timerTrashCell = Observable.timer(2000, this.trashCellByMilissecond);
		var subscription = timerTrashCell.subscribe(t => this.counterTrashCell = this.counterTrashCell + this.valueTrashCellByMilissecond);

        let timerPizza = Observable.timer(2000, this.pizzaByMilissecond);
		var subscription = timerPizza.subscribe(t => this.counterPizza = this.counterPizza + this.valuePizzaByMilissecond);

        let timerChocolate = Observable.timer(2000, this.chocolateByMilissecond);
		var subscription = timerChocolate.subscribe(t => this.counterChocolate = this.counterChocolate + this.valueChocolateByMilissecond);

        let timerWhale = Observable.timer(2000, this.airWhaleByMilissecond);
		var subscription = timerWhale.subscribe(t => this.counterAirBlueWhale = this.counterAirBlueWhale + this.valueAirWhaleByMilissecond);

        let timerSexualIntercourse = Observable.timer(2000, this.sexualIntercourseByMilissecond);
		var subscription = timerSexualIntercourse.subscribe(t => this.counterSexualIntercourse = this.counterSexualIntercourse + this.valueSexualIntercourseByMilissecond);

        let timerPoop = Observable.timer(2000, this.poopingPeopleByMilissecond);
		var subscription = timerPoop.subscribe(t => this.counterPoopPeople = this.counterPoopPeople + this.valuePoopingPeopleByMilissecond);

	}
}
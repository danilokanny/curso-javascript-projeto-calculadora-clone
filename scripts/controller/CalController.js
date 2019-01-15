class CalController {

constructor(){

    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this.currentDate;
    this.initialize();
}

initialize(){
    
    this._dateEl.innerHTML = "15/01/2019";
    this._timeEl.innerHTML = "15:53";

}
    get displayCalc(){

        return this._displayCalcEL.innerHTML;

    }

    set displayCalc(valor){
        this._displayCalcEL.innerHTML = valor;

    }

    get currentDate(){

        return this._currentDate;

    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}
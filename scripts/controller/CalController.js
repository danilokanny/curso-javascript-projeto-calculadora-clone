class CalController {

constructor(){
    this._locale = 'pt-BR';
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this.currentDate;
    this.initialize();
    this. initButtonEvents();
}

initialize(){
    /*
    executa um intervalo em milisegundos
   setInterval(() => {
       
   }, interval); */
   setInterval(() => {
       this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
        day:"2-digit",
        month: "long",
        year: "numeric"

       });
       this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
}, 1000);
}

    initButtonEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g ");
            buttons.forEach((btn, index)=>{

                btn.addEventListener('click', e=> {

                    console.log(btn.className.baseVal.replace("btn-",""));

                })

            })
    }

        get displayTime(){

            return this._timeEl.innerHTML;

        }

        set displayTime(value){

            this._timeEl.innerHTML = value;

        }
        
        get displayDate(){

            return this._dateEl.innerHTML;

        }

        set displayDate(value){

            this._dateEl.innerHTML = value;

        }


    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }
/* dt.toLocaleDateString('pt-BR',{month:'short'}) puxa o mes abreviado, 
    dt.toLocaleDateString('pt-BR',{month:'long'}) puxa o mes por extenso em portugues
    dt.toLocaleTimeString('pt-BR') puxa a hora completa 
    dt = variavel declarado ao new Date() -- dt.getDate() puxa somente a data
    dt.getMonth() puxa somente o mes
    dt.getFullYear() puxa somente o ano

*/
    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}
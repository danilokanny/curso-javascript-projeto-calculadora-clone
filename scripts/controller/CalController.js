class CalController {

constructor(){
    this._operation = [];
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
    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => { 

            element.addEventListener(event, fn, false);
        });

    }

    clearEntry(){
        this._operation.pop();
    }


    clearAll(){
       return this._operation = [this._operation.length-1];
    }

    setError(){
        this.displayCalc = "Error";
    }
    getLastOperation(){
        this._operation[this._operation.length-1];
    }

    isOperator(value){

        return (['+','-','*','/','%'].indexOf(value) > -1 );

    }
    addOperation(value){
            console.log('A',isNaN(this.getLastOperation()));

        if (isNaN(this.getLastOperation())){
            //string

            if(this.isOperator(value)){
                //trocar operador
                this._operation[this._operation.length - 1] = value;

            }else if(isNaN(value)) {
                //outra coisa
                console.log(value);
            }else {
                
                this._operation.push(value);

            }

        }else {
            //number
            let newValue = this.getLastOperation().toString() + value.toString(); 
            this._operation.push(newValue);
            console.log('B',newValue);
        }
 //push acresenta no array, pop retira a ultima operação.
        console.log(this._operation);
    }

    execBtn(value){

        switch(value){

            case 'ac' :
                this.clearAll();
                break;
            case 'ce' :
                this.clearEntry();
                break;
            case 'soma' :
            this.addOperation('+');  
                break;
            case 'subtracao' :
            this.addOperation('-');
                break;
            case 'divisao' :
            this.addOperation('/');   
                break;
            case 'multiplicacao' :
            this.addOperation('*');   
                break;
            case 'igual' :
            
                break;
            case 'porcento' :
            this.addOperation('%');
                break;

            case 'ponto':
            this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            this.addOperation(parseInt(value));
            break;

            default:
                this.setError();
            break;
        }

    }
    initButtonEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g ");
            buttons.forEach((btn, index)=>{

                this.addEventListenerAll(btn, "click drag ", e=> {

                    let textBtn = btn.className.baseVal.replace("btn-","");
                    this.execBtn(textBtn);

                });

                this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                    
                    btn.style.cursor = "pointer"; 

                });

            });
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
const CALCULADORA = (()=>{
    const calcObj = {
        resultado: 0,
        
        soma: function(...valor){
            res = 0;
            for(i of valor){
                res += i;
            }
            return calcObj.resultado += res, calcObj.result() ;
        },
        subtrai:function(...valor){
            res = 0;
            for(i of valor){
                res -= i;
            }
            return calcObj.resultado += res, calcObj.result();
        },
        multiplica:function(...valor){
            res = calcObj.resultado;

            for(i of valor){
                res *= i;
            }
            return calcObj.resultado = res, calcObj.result();
        },
        divde:function(...valor){

            res = calcObj.resultado;
            for(i of valor){
                res /= i;
            }
            return calcObj.resultado = res, calcObj.result();
        },
        limpa:function(){
            return calcObj.resultado = 0, calcObj.result();
        },

        mostraRes:function(){
            return calcObj.resultado;
        },
        result: function(){
            return document.getElementById("result").innerHTML = calcObj.mostraRes();
        }

        

    }

    return {
        // resultado : calcObj.mostraRes,
        somar: calcObj.soma,
        subtrair: calcObj.subtrai,
        dividir: calcObj.divde,
        multiplicar: calcObj.multiplica,
        limpar: calcObj.limpa,

    }

})()




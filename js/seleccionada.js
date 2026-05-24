

const calcular = () =>  {

   let numeroUNO = parseFloat(document.getElementById("numero").value);
   let  numeroDOS =  parseFloat(document.getElementById("numerodos").value);
   let  cajaOPERADOR =  document.getElementById("operador").value;
   let  cajaResultado = document.getElementById("resultado");
    let resultadoFinal= 0;

    // operar 

    if (cajaOPERADOR === "suma") {
        resultadoFinal = numeroUNO + numeroDOS;

      // ¡Aquí añadimos la resta!
   } else if (cajaOPERADOR === "resta") { 
       resultadoFinal = numeroUNO - numeroDOS;


        } else if (cajaOPERADOR === "multiplicacion") { 
        resultadoFinal = numeroUNO * numeroDOS;


        } else if (cajaOPERADOR === "division") {
        resultadoFinal = numeroUNO / numeroDOS;
    }

    //Mostrar  en el HTML

    cajaResultado.innerText = "El resultado es: " + resultadoFinal;

}
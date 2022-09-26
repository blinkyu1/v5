
let TipoPersona=["ASALARIADO","NO ASALARIADO"];
let asalariados=["CREDITO VIVIENDA SOCIAL","CREDITO VIVIENDA","CREDITO DE CONSUMO","CREDITO VEHICULO PARTICULAR"];
let noasalariados=["CREDITO VIVIENDA SOCIAL","CREDITO VIVIENDA","CREDITO DE CONSUMO","CREDITO VEHICULO PARTICULAR","CREDITO PARA NEGOCIO","CREDITO PRODUCCION Y AGROPECUARIO"];
let total =[asalariados,noasalariados];
var select = "";
select = document.getElementById("Categoria");
var conts=0;
for (i = 0; i < TipoPersona.length; i++) {
  option = document.createElement("option");
  option.value = "TP"+i;
  option.text = TipoPersona[i];
  select.appendChild(option);
}
var combo5 = document.getElementById("Categoria");
var Categoria=combo5.options[combo5.selectedIndex].text;
for (i = 0; i < TipoPersona.length; i++) {
  if(Categoria==TipoPersona[i]){
    var selectrf = "";
    selectrf = document.getElementById("SubCategoria");
    for (let i = selectrf.options.length; i >= 0; i--) {
      selectrf.remove(i);
    }
    for (let index = 0; index < total[i].length; index++) {
      option = document.createElement("option");
        option.value = i+""+index;
        option.text =  total[i][index];
        selectrf.appendChild(option);
    }
  }
}  
$("#monto").on({
  "focus": function (event) {
      $(event.target).select();
  },
  "keyup": function (event) {
      $(event.target).val(function (index, value ) {
          return value.replace(/\D/g, "")
                      .replace(/([0-9])([0-9]{2})$/, '$1.$2')
                      .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
      });
  }
});
  

function cargar(){
  var combo5 = document.getElementById("Categoria");
  var Categoria=combo5.options[combo5.selectedIndex].text;
 console.log(Categoria);
  for (i = 0; i < TipoPersona.length; i++) {
    if(Categoria==TipoPersona[i]){
      var selectrf = "";
      selectrf = document.getElementById("SubCategoria");
      for (let i = selectrf.options.length; i >= 0; i--) {
        selectrf.remove(i);
      }
      for (let index = 0; index < total[i].length; index++) {
        option = document.createElement("option");
          option.value = i+""+index;
          option.text =  total[i][index];
          selectrf.appendChild(option);
      }
    }
  }  
}


$(document).on("click", ".simulaUm", function () {
  
 
  jQuery(".resultados").show();
  jQuery("html, body");
  let cont=0;
  var combo1 = document.getElementById("Categoria");
  var Categoria=combo1.options[combo1.selectedIndex].text;
  var combo2 = document.getElementById("SubCategoria");
  var SubCategoria=combo2.options[combo2.selectedIndex].text;
  var combo3 = document.getElementById("TipoGarant");
  var garantia=combo3.options[combo3.selectedIndex].text;
  var  mont=document.getElementById("monto").value;
  let mes=  parseFloat(document.getElementById("mes").value );
if(garantia=="Tipo de Garantía"){
  combo3.style.borderColor = "#ef0000";
  cont++;
}
else  {combo3.style.borderColor = "#bdc3c7";}
if(document.getElementById("mes").value==""||document.getElementById("mes").value==null){
  document.getElementById("mes").style.borderColor = "#ef0000";
  cont++;
}
else{
  document.getElementById("mes").style.borderColor = "#bdc3c7";
}
if(document.getElementById("monto").value==""||document.getElementById("monto").value==null){
  document.getElementById("monto").style.borderColor = "#ef0000";
  cont++;
}
else{
  document.getElementById("monto").style.borderColor = "#bdc3c7";
}





  mont=mont.replace(/[^\d\.\-]/g, ""); 
  let monto= parseFloat(mont);
 console.log(monto+" "+document.getElementById("monto").value);

  
  let interes=0;
  var resultado1="";
  var resultado2="";
  var resultado3="";

  switch(SubCategoria)
        { 
            case "CREDITO PRODUCCION Y AGROPECUARIO":
                if (mes <= 120 && monto <= 1715000){
                    resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((11.50/100)/12)),((-1) * parseInt(mes))))) / ((11.50/100)/12));
                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((11.50/100)/12)),((-1) * parseInt(mes))))) / ((11.50/100)/12))) / 6.85;
                      interes = 11.50
                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                } else {
                            resultado1 = 0
                            resultado2 =  0
                            interes = 0
                            }

            break;
                
            case "CREDITO VIVIENDA SOCIAL":
                switch(garantia)
                {
                  case "OTRAS":
                        if (monto <= 255000){
                            resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((5.50/100)/12)),((-1) * parseInt(mes))))) / ((5.50/100)/12));
                            resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((5.50/100)/12)),((-1) * parseInt(mes))))) / ((5.50/100)/12))) / 6.85;
                            interes = 5.50
                            resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                        } else {
                             if (monto >= 255001 && monto <= 380000){
                                resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((6.00/100)/12)),((-1) * parseInt(mes))))) / ((6.00/100)/12));
                                resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((6.00/100)/12)),((-1) * parseInt(mes))))) / ((6.00/100)/12))) / 6.85;
                                interes = 6.00
                                resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                              } else {
                                  if (monto >= 380001 && monto <= 460000){
                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((6.50/100)/12)),((-1) * parseInt(mes))))) / ((6.50/100)/12));
                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((6.50/100)/12)),((-1) * parseInt(mes))))) / ((6.50/100)/12))) / 6.85;
                                      interes = 6.50
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                                  } else {
                                    resultado1 = 0
                                    resultado2 =  0
                                    interes = 0
                                    }
                              }
                        }
                    break;
                  case "HIPOTECARIA":
                         if (monto <= 255000){
                            resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((5.50/100)/12)),((-1) * parseInt(mes))))) / ((5.50/100)/12));
                            resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((5.50/100)/12)),((-1) * parseInt(mes))))) / ((5.50/100)/12))) / 6.85;
                            interes = 5.50
                            resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                        } else {
                             if (monto >= 255001 && monto <= 380000){
                                resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((6.00/100)/12)),((-1) * parseInt(mes))))) / ((6.00/100)/12));
                                resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((6.00/100)/12)),((-1) * parseInt(mes))))) / ((6.00/100)/12))) / 6.85;
                                interes = 6.00
                                resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                              } else {
                                  if (monto >= 380001 && monto <= 460000){
                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((6.50/100)/12)),((-1) * parseInt(mes))))) / ((6.50/100)/12));
                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((6.50/100)/12)),((-1) * parseInt(mes))))) / ((6.50/100)/12))) / 6.85;
                                      interes = 6.50
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                                  } else {
                                    resultado1 = 0
                                    resultado2 =  0
                                    interes = 0
                                    }
                              }
                        }
                    break;
                }
            break;
          case "CREDITO VIVIENDA":
          
                switch(garantia)
                {
                  case "OTRAS":
                    
                        if (monto <= 24500 && mes <= 36){
                            resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((26.50/100)/12)),((-1) * parseInt(mes))))) / ((26.50/100)/12));
                            resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((26.50/100)/12)),((-1) * parseInt(mes))))) / ((26.50/100)/12))) / 6.85;
                            interes = 26.50
                            resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                        } else {
                             if (monto <= 49000 && mes <= 36){
                                resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((25.50/100)/12)),((-1) * parseInt(mes))))) / ((25.50/100)/12));
                                resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((25.50/100)/12)),((-1) * parseInt(mes))))) / ((25.50/100)/12))) / 6.85;
                                interes = 25.50
                                resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                              } else {
                                  if (monto <= 110000 && mes <= 36){
                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((23.50/100)/12)),((-1) * parseInt(mes))))) / ((23.50/100)/12));
                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((23.50/100)/12)),((-1) * parseInt(mes))))) / ((23.50/100)/12))) / 6.85;
                                      interes = 23.50
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                                  } else {
                                        if (monto <= 110000 && mes <= 60){
                                          resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((21.50/100)/12)),((-1) * parseInt(mes))))) / ((21.50/100)/12));
                                          resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((21.50/100)/12)),((-1) * parseInt(mes))))) / ((21.50/100)/12))) / 6.85;
                                          interes = 21.50
                                          resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                        } else {
                                            if (monto <= 110000 && mes > 60){
                                              resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((19.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((19.50+2.98)/100)/12));
                                              resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((19.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((19.50+2.98)/100)/12))) / 6.85;
                                              interes = (19.50+2.98)
                                              resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                            } else {
                                                if (monto > 110000 && monto <= 210000){
                                                  resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((18.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((18.00+2.98)/100)/12));
                                                  resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((18.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((18.00+2.98)/100)/12))) / 6.85;
                                                  interes = (18.00+2.98)
                                                  resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'   
                                                } else {
                                                    resultado1 = 0
                                                    resultado2 =  0
                                                    interes = 0
                                                }
                                            }
                                        }
                                    }
                              }
                        }
                        
                    break;
                  case "HIPOTECARIA":
                          if (monto >= 24500.01 && monto <= 49000){
                            resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((20.00/100)/12)),((-1) * parseInt(mes))))) / ((20.00/100)/12));
                            resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((20.00/100)/12)),((-1) * parseInt(mes))))) / ((20.00/100)/12))) / 6.85;
                            interes = 20.00
                            resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'  
                        } else {
                             if (monto <= 110000 && mes <= 36){
                                resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((18.00/100)/12)),((-1) * parseInt(mes))))) / ((18.00/100)/12));
                                resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((18.00/100)/12)),((-1) * parseInt(mes))))) / ((18.00/100)/12))) / 6.85;
                                interes = 18.00
                                resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                              } else {
                                  if (monto <= 110000 && mes <= 60){
                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((17.50/100)/12)),((-1) * parseInt(mes))))) / ((17.50/100)/12));
                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((17.50/100)/12)),((-1) * parseInt(mes))))) / ((17.50/100)/12))) / 6.85;
                                      interes = 17.50
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                                  } else {
                                        if (monto <= 110000 && mes > 60){
                                          resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((13.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((13.50+2.98)/100)/12));
                                          resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((13.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((13.50+2.98)/100)/12))) / 6.85;
                                          interes = (13.50+2.98)
                                          resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                        } else {
                                            if (monto > 110000 && monto <= 210000){
                                              resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((12.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((12.50+2.98)/100)/12));
                                              resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((12.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((12.50+2.98)/100)/12))) / 6.85;
                                              interes = (12.50+2.98)
                                              resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                            } else {
                                                if (monto > 210000 && monto <= 420000){
                                                  resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((11.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((11.50+2.98)/100)/12));
                                                  resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((11.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((11.50+2.98)/100)/12))) / 6.85;
                                                  interes = (11.50+2.98)
                                                  resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'   
                                                } else {
                                                    if (monto > 420000){
                                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((10.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((10.50+2.98)/100)/12));
                                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((10.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((10.50+2.98)/100)/12))) / 6.85;
                                                      interes = (10.50+2.98)
                                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                                    } else {
                                                        resultado1 = 0
                                                        resultado2 =  0
                                                        interes = 0
                                                    }
                                                }
                                            }
                                        }
                                    }
                              }
                        }
                    break;
                }
            break;
                case "CREDITO PARA NEGOCIO (OPERACION/INVERSION)":
                switch(garantia)
                {
                  case "OTRAS":
                        if (monto <= 16000 && mes <= 36){
                            resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((26.50/100)/12)),((-1) * parseInt(mes))))) / ((26.50/100)/12));
                            resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((26.50/100)/12)),((-1) * parseInt(mes))))) / ((26.50/100)/12))) / 6.85;
                            interes = 26.50
                            resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                        } else {
                             if (monto <= 24500 && mes <= 36){
                                resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((26.50/100)/12)),((-1) * parseInt(mes))))) / ((26.50/100)/12));
                                resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((26.50/100)/12)),((-1) * parseInt(mes))))) / ((26.50/100)/12))) / 6.85;
                                interes = 26.50
                                resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                              } else {
                                  if (monto <= 49000 && mes <= 36){
                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((25.50/100)/12)),((-1) * parseInt(mes))))) / ((25.50/100)/12));
                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((25.50/100)/12)),((-1) * parseInt(mes))))) / ((25.50/100)/12))) / 6.85;
                                      interes = 25.50
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                                  } else {
                                      if (monto <= 110000 && mes <= 36){
                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((23.50/100)/12)),((-1) * parseInt(mes))))) / ((23.50/100)/12));
                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((23.50/100)/12)),((-1) * parseInt(mes))))) / ((23.50/100)/12))) / 6.85;
                                      interes = 23.50
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'      
                                      } else{
                                          if (monto <= 110000 && mes <= 60){
                                          resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((21.50/100)/12)),((-1) * parseInt(mes))))) / ((21.50/100)/12));
                                          resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((21.50/100)/12)),((-1) * parseInt(mes))))) / ((21.50/100)/12))) / 6.85;
                                          interes = 21.50
                                          resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'      
                                          } else {
                                            if (monto <= 110000 && mes > 60){
                                              resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((19.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((19.50+2.98)/100)/12));
                                              resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((19.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((19.50+2.98)/100)/12))) / 6.85;
                                              interes = (19.50+2.98)
                                              resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                            } else {
                                                if (monto > 110000 && monto <= 210000){
                                                  resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((18.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((18.00+2.98)/100)/12));
                                                  resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((18.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((18.00+2.98)/100)/12))) / 6.85;
                                                  interes = (18.00+2.98)
                                                  resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'   
                                                } else {
                                                     if (monto > 210000 && monto <= 420000){
                                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((17.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((17.00+2.98)/100)/12));
                                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((17.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((17.00+2.98)/100)/12))) / 6.85;
                                                      interes = (17.00+2.98)
                                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'      
                                                      } else {
                                                        if (monto > 420000){
                                                          resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((16.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((16.00+2.98)/100)/12));
                                                          resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((16.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((16.00+2.98)/100)/12))) / 6.85;
                                                          interes = (16.00+2.98)
                                                          resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                                          } else {
                                                            resultado1 = 0
                                                            resultado2 =  0
                                                            interes = 0
                                                          }
                                                      }
                                                }
                                            }
                                        }
                                    }
                              }
                        }
                    }
					break;
                  case "HIPOTECARIA":
                          if (monto >= 24500.01 && monto <= 49000){
                            resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((20.00/100)/12)),((-1) * parseInt(mes))))) / ((20.00/100)/12));
                            resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((20.00/100)/12)),((-1) * parseInt(mes))))) / ((20.00/100)/12))) / 6.85;
                            interes = 20.00
                            resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'  
                        } else {
                             if (monto <= 110000 && mes <= 36){
                                resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((18.00/100)/12)),((-1) * parseInt(mes))))) / ((18.00/100)/12));
                                resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((18.00/100)/12)),((-1) * parseInt(mes))))) / ((18.00/100)/12))) / 6.85;
                                interes = 18.00
                                resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                              } else {
                                  if (monto <= 110000 && mes <= 60){
                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((17.50/100)/12)),((-1) * parseInt(mes))))) / ((17.50/100)/12));
                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((17.50/100)/12)),((-1) * parseInt(mes))))) / ((17.50/100)/12))) / 6.85;
                                      interes = 17.50
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                                  } else {
                                        if (monto <= 110000 && mes > 60){
                                          resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((13.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((13.50+2.98)/100)/12));
                                          resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((13.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((13.50+2.98)/100)/12))) / 6.85;
                                          interes = (13.50+2.98)
                                          resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                        } else {
                                            if (monto > 110000 && monto <= 210000){
                                              resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((12.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((12.50+2.98)/100)/12));
                                              resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((12.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((12.50+2.98)/100)/12))) / 6.85;
                                              interes = (12.50+2.98)
                                              resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                            } else {
                                                if (monto > 210000 && monto <= 420000){
                                                  resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((11.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((11.50+2.98)/100)/12));
                                                  resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((11.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((11.50+2.98)/100)/12))) / 6.85;
                                                  interes = (11.50+2.98)
                                                  resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'   
                                                } else {
                                                    if (monto > 420000){
                                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((10.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((10.50+2.98)/100)/12));
                                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((10.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((10.50+2.98)/100)/12))) / 6.85;
                                                      interes = (10.50+2.98)
                                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                                    } else {
                                                        resultado1 = 0
                                                        resultado2 =  0
                                                        interes = 0
                                                    }
                                                }
                                            }
                                        }
                                    }
                              }
                        }
                    break;
                }
            break;
          case "CREDITO DE CONSUMO":
                switch(garantia)
                {
                  case "OTRAS":
                        if (monto <= 16000 && mes <= 36){
                            resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((28.50/100)/12)),((-1) * parseInt(mes))))) / ((28.50/100)/12));
                            resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((28.50/100)/12)),((-1) * parseInt(mes))))) / ((28.50/100)/12))) / 6.85;
                            interes = 27.50
                            resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                        } else {

                             if (monto <= 110000 && mes <= 36){
                                resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((26.50/100)/12)),((-1) * parseInt(mes))))) / ((26.50/100)/12));
                                resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((26.50/100)/12)),((-1) * parseInt(mes))))) / ((26.50/100)/12))) / 6.85;
                                interes = 26.50
                                resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                              } else {
                                  if (monto <= 110000 && mes <= 60){
                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((20.00/100)/12)),((-1) * parseInt(mes))))) / ((20.00/100)/12));
                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((20.00/100)/12)),((-1) * parseInt(mes))))) / ((20.00/100)/12))) / 6.85;
                                      interes = 20.00
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                                  } else {
                                        if (monto <= 110000 && mes > 60){
                                          resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((18.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((18.00+2.98)/100)/12));
                                          resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((18.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((18.00+2.98)/100)/12))) / 6.85;
                                          interes = (18.00+2.98)
                                          resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                        } else {
                                            resultado1 = 0
                                            resultado2 =  0
                                            interes = 0
                                        }
                                    }
                              }
                        }
                    break;
                  case "HIPOTECARIA":
                          if (monto >= 24500.00 && monto <= 49000){
                            resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((22.00/100)/12)),((-1) * parseInt(mes))))) / ((22.00/100)/12));
                            resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((22.00/100)/12)),((-1) * parseInt(mes))))) / ((22.00/100)/12))) / 6.85;
                            interes = 22.00
                            resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'  
                        } else {
                             if (monto > 49000 && (monto <= 110000 &&            mes <= 36)){
                                resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((21.00/100)/12)),((-1) * parseInt(mes))))) / ((21.00/100)/12));
                                resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((21.00/100)/12)),((-1) * parseInt(mes))))) / ((21.00/100)/12))) / 6.85;
                                interes = 21.00
                                resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                              } else {
                                  if (monto >= 24500.00 && (monto <= 110000 &&     mes <= 60)){
                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((18.00/100)/12)),((-1) * parseInt(mes))))) / ((18.00/100)/12));
                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((18.00/100)/12)),((-1) * parseInt(mes))))) / ((18.00/100)/12))) / 6.85;
                                      interes = 18.00
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                                  } else {
                                        if (monto <= 110000 && mes > 60){
                                          resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((15.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((15.50+2.98)/100)/12));
                                          resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((15.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((15.50+2.98)/100)/12))) / 6.85;
                                          interes = (15.50+2.98)
                                          resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                        } else {
                                            if (monto > 110000 && monto <= 210000){
                                              resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((14.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((14.50+2.98)/100)/12));
                                              resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((14.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((14.50+2.98)/100)/12))) / 6.85;
                                              interes = (14.50+2.98)
                                              resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                            } else {
                                                if (monto > 210000 && monto <= 420000){
                                                  resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((13.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((13.50+2.98)/100)/12));
                                                  resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((13.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((13.50+2.98)/100)/12))) / 6.85;
                                                  interes = (13.50+2.98)
                                                  resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'   
                                                } else {
                                                    if (monto > 420000){
                                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((12.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((12.50+2.98)/100)/12));
                                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((12.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((12.50+2.98)/100)/12))) / 6.85;
                                                      interes = (12.50+2.98)
                                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                                    } else {
                                                        resultado1 = 0
                                                        resultado2 =  0
                                                        interes = 0
                                                    }
                                                }
                                            }
                                        }
                                    }
                              }
                        }
                    break;
                }
            break;
            
          case "CREDITO VEHICULO PARTICULAR":
                switch(garantia)
                {
                  case "OTRAS":
                        resultado1 = 0
                        resultado2 =  0
                        interes = 0
                    break;
                  case "HIPOTECARIA":
                          if (monto >= 49000.01 && monto <= 110000){
                            resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((12.00/100)/12)),((-1) * parseInt(mes))))) / ((12.00/100)/12));
                            resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((12.00/100)/12)),((-1) * parseInt(mes))))) / ((12.00/100)/12))) / 6.85;
                            interes = 12.00
                            resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'  
                        } else {
                             if (monto <= 110000 && mes <= 60){
                                resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(( 11.00/100)/12)),((-1) * parseInt(mes))))) / (( 11.00/100)/12));
                                resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(( 11.00/100)/12)),((-1) * parseInt(mes))))) / (( 11.00/100)/12))) / 6.85;
                                interes = 11.00
                                resultado3 = 'Cuota referencial sujeto a condiciones de cada producto' 
                              } else {
                                  if (monto <= 110000 && mes > 60){
                                      resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((( 11.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / ((( 11.00+2.98)/100)/12));
                                      resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((( 11.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / ((( 11.00+2.98)/100)/12))) / 6.85;
                                      interes = ( 11.00+2.98)
                                      resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'
                                  } else {
                                        if (monto > 110000 && monto <= 210000){
                                          resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+((( 11.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / ((( 11.00+2.98)/100)/12));
                                          resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+((( 11.00+2.98)/100)/12)),((-1) * parseInt(mes))))) / ((( 11.00+2.98)/100)/12))) / 6.85;
                                          interes = ( 11.00+2.98)
                                          resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                        } else {
                                            if (monto > 210000 && monto <= 420000){
                                              resultado1 = (parseInt(monto)) / ((1 -(Math.pow((1+(((10.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((10.50+2.98)/100)/12));
                                              resultado2 =  ((parseInt(monto)) / ((1 -(Math.pow((1+(((10.50+2.98)/100)/12)),((-1) * parseInt(mes))))) / (((10.50+2.98)/100)/12))) / 6.85;
                                              interes = ( 10.50+2.98)
                                              resultado3 = 'Cuota referencial sujeto a condiciones de cada producto'    
                                            } else {
                                                resultado1 = 0
                                                resultado2 =  0
                                                interes = 0
                                            }
                                        }
                                    }
                              }
                        }
                    break;
                }
            break;
                
          
		}

  

 if(cont==0){
 document.getElementById("subm").click();

  var tabla = document.getElementById("table_body");
  tabla.innerHTML = "";
  $("#table_body").empty();
  if(interes>0){
    tabla.innerHTML +=
    "<div class=" +
    '"' +
    "right-form" +
    '"' +
    " >" +
    "<div class=" +
    '"' +
    "form resultados" +
    '"' +
    ">" +
    "<div class=" +
    '"' +
    " mb-10 relative rounded shadow-header w-full" +
    '"' +
    ">" +
    "<div class=" +
    '"' +
    " border-b-1 flex flex-row justify-between w-full" +
    '"' +
    " >" +
    "<div class=" +
    '"' +
    "input-text" +
    '"' +
    "></div>" +
    "<div class=" +
    '"' +
    "border-r-1 flex items-center justify-center w-1/2 COLORA generic-title" +
    '"' +
    "> " +
    "BancoSol" +
    " </div>" +
    "<div class=" +
    '"' +
    "flex items-center justify-center w-1/2 COLORB" +
    '"' +
    "> <span class=" +
    '"' +
    "font-light text-base text-center" +
    '"' +
    ">Tasa de Interés <span class=" +
    '"' +
    "apTas" +
    '"' +
    ">" +
    interes +
    "</span>%</span>" +
    "</div>" +
    "</div>" +
    "<hr />" +
    "<div class=" +
    '"' +
    "p2" +
    '"' +
    ">Interés Calculado para el Monto Bs <span class=" +
    '"' +
    "apTGan" +
    '"' +
    ">" +
    document.getElementById("monto").value +
    "</span>.</div>" +
    "<div class=" +
    '"' +
    "flex flex-row w-full justify-between pt-5" +
    '"' +
    ">" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">Cuota a pagar en Bolivianos:</span> <span class=" +
    '"' +
    "text-2xl text-custom-blue" +
    '"' +
    ">Bs <span class=" +
    '"' +
    "text-2xl text-custom-blue apTGan" +
    '"' +
    ">" +
    (resultado1).toFixed(2) +
    "</span></span>" +
    "</div>" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">Plazo</span> <span class=" +
    '"' +
    "text-2xl text-custom-blue" +
    '"' +
    "> <span class=" +
    '"' +
    "text-2xl text-custom-blue apPlaz" +
    '"' +
    ">" +
    mes +
    "</span> Meses.</span>" +
    "<div class=" +
    '"' +
    "flex flex-col" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-700 text-size-description" +
    '"' +
    "></span> </div>" +
    "</div>" +
    "</div>" +
    "<div class=" +
    '"' +
    "flex flex-row w-full justify-between pt-5" +
    '"' +
    ">" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">Cuota a pagar en Dolares:</span> <span class=" +
    '"' +
    "text-2xl text-custom-blue" +
    '"' +
    ">Bs <span class=" +
    '"' +
    "text-2xl text-custom-blue apMont" +
    '"' +
    ">" +
    (resultado2).toFixed(2) +
    "</span></span>" +
    "</div>" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">Monto total al Finalizar el Credito</span> <span class=" +
    '"' +
    "text-2xl text-custom-blue" +
    '"' +
    ">Bs <span class=" +
    '"' +
    "text-2xl text-custom-blue apTot" +
    '"' +
    ">" +
    (resultado1*mes).toFixed(2) +
    "</span></span>" +
    "<div class=" +
    '"' +
    "flex flex-col" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-700 text-size-description" +
    '"' +
    "></span> </div>" +
    "</div>" +
    "</div>" +
    "<div class=" +
    '"' +
    "flex flex-row w-full justify-between pt-5" +
    '"' +
    ">" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">CONDICIONES</span>" +
    "<p1>1. Tasa de interes <span class=" +
    '"' +
    "apTas" +
    '"' +
    ">" +
    interes +
    "</span> % anual.</p1>" +
    "<p1>2. Plazo <span class=" +
    '"' +
    "apPlaz" +
    '"' +
    ">" +
    mes +
    "</span> Mes.</p1>" +
    "<p1>3. Excento de IVA</p1>" +
    "</div>" +
    "<div class=" +
    '"' +
    "flex flex-col items-start justify-start pl-5 w-1/2" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-600 text-size-description" +
    '"' +
    ">REQUISITOS</span>" +
    "<p1>1. Solo para personas naturales.</p1>" +
    "<p1>2. Contar con Carnet de Identidad.</p1>" +
    "<p1>3. Realizar el deposito en <span class=" +
    '"' +
    "apTipoM" +
    '"' +
    ">" +
    "Bolivianos." +
    "</span></p1>" +
    "<div class=" +
    '"' +
    "flex flex-col" +
    '"' +
    "> <span class=" +
    '"' +
    "text-gray-700 text-size-description" +
    '"' +
    "></span> </div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</br>";
  
  }
  else{
    alert("Banco Sol Informa: El Tipo de Asalariado no tiene ese tipo de Garantia, Porfavor escoger otro tipo de Garantia")
  }
 

    
 }
  else{
    alert("Banco Sol Informa: Porfavor realizar las selecciones correctas para el simulador.")
   
  }
  
});

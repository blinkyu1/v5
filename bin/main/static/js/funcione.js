const open11 = document.getElementById("vent");
const modal_conteniner11 = document.getElementById("modal_conteniner11");
const close11 = document.getElementById("close11");
close11.addEventListener("click", () => {
  modal_conteniner11.classList.remove("show");
});
$(document).on("click", ".enviar1", function () {
  jQuery("html, body");
  var combo1 = document.getElementById("Departamento");
  var Departamento = combo1.options[combo1.selectedIndex].text;
  var CiudadDepartamento=document.getElementById("CiudadDepartamento").value;
  var combo2 = document.getElementById("TipoReclamante");
  var TipoReclamante=combo2.options[combo2.selectedIndex].text;
  var NombreReclamante=document.getElementById("NombreReclamante").value;
  var ApellidoReclamante=document.getElementById("ApellidoReclamante").value;
  var combo3 = document.getElementById("TipoDocumento");
  var TipoDocumento=combo3.options[combo3.selectedIndex].text;
  var NDocumento= document.getElementById("NDocumento").value;
  var combo4 = document.getElementById("ClienteB");
  var ClienteB=combo4.options[combo4.selectedIndex].text;
  var Direccion=document.getElementById("Direccion").value;
  var NombreLegal=document.getElementById("NombreLegal").value;
  var nPoder= document.getElementById("nPoder").value;
  var telefonoDomicilio=document.getElementById("telefonoDomicilio").value;
  var telefonoPersonal=document.getElementById("telefonoPersonal").value;
  var emailReclamante=document.getElementById("emailReclamante").value;
var cont=0;
if(Departamento=="Ciudad de Reclamo"){
  document.getElementById("Departamento").style.borderColor = "#ef0000";
  cont++;
}
else{
  document.getElementById("Departamento").style.borderColor = "#bdc3c7";
}
if(CiudadDepartamento==""){
  document.getElementById("CiudadDepartamento").style.borderColor = "#ef0000";
  cont++;
}
else{
  document.getElementById("CiudadDepartamento").style.borderColor = "#bdc3c7";
}
if(TipoReclamante=="Tipo de Reclamante"){
  document.getElementById("TipoReclamante").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("TipoReclamante").style.borderColor = "#bdc3c7";
}
if(NombreReclamante==""){
  document.getElementById("NombreReclamante").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("NombreReclamante").style.borderColor = "#bdc3c7";
}
if(ApellidoReclamante==""){
  document.getElementById("ApellidoReclamante").style.borderColor = "#ef0000";
  cont++;
}
else{
  document.getElementById("ApellidoReclamante").style.borderColor = "#bdc3c7";
}
if(TipoDocumento=="Tipo Documento"){
  document.getElementById("TipoDocumento").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("TipoDocumento").style.borderColor = "#bdc3c7";
}
if(NDocumento==""){
  document.getElementById("NDocumento").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("NDocumento").style.borderColor = "#bdc3c7";
}
if(ClienteB=="¿Es usted cliente de BancoSol?"){
  document.getElementById("ClienteB").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("ClienteB").style.borderColor = "#bdc3c7";
}
if(Direccion==""){
  document.getElementById("Direccion").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("Direccion").style.borderColor = "#bdc3c7";
}
if(telefonoDomicilio==""){
  document.getElementById("telefonoDomicilio").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("telefonoDomicilio").style.borderColor = "#bdc3c7";
}
if(telefonoPersonal==""){
  document.getElementById("telefonoPersonal").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("telefonoPersonal").style.borderColor = "#bdc3c7";
}
if(emailReclamante==""){
  document.getElementById("emailReclamante").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("emailReclamante").style.borderColor = "#bdc3c7";
}

if(cont==0){
  document.querySelector(".next_button").click();
  document.getElementById("actived").style.display="block"}
else{
alert("hay campos incorrectos :"+cont);
}
  
  
});


  
 

$(document).on("click", ".enviar", function () {
  jQuery("html, body");
  var combo1 = document.getElementById("Departamento");
  var Departamento = combo1.options[combo1.selectedIndex].text;
  var CiudadDepartamento=document.getElementById("CiudadDepartamento").value;
  var combo2 = document.getElementById("TipoReclamante");
  var TipoReclamante=combo2.options[combo2.selectedIndex].text;
  var NombreReclamante=document.getElementById("NombreReclamante").value;
  var ApellidoReclamante=document.getElementById("ApellidoReclamante").value;
  var combo3 = document.getElementById("TipoDocumento");
  var TipoDocumento=combo3.options[combo3.selectedIndex].text;
  var NDocumento= document.getElementById("NDocumento").value;
  var combo4 = document.getElementById("ClienteB");
  var ClienteB=combo4.options[combo4.selectedIndex].text;
  var Direccion=document.getElementById("Direccion").value;
  var NombreLegal=document.getElementById("NombreLegal").value;
  var nPoder= document.getElementById("nPoder").value;
  var telefonoDomicilio=document.getElementById("telefonoDomicilio").value;
  var telefonoPersonal=document.getElementById("telefonoPersonal").value;
  var emailReclamante=document.getElementById("emailReclamante").value;
  var FechaReclamo=document.getElementById("FechaReclamo").value;
  var combo5 = document.getElementById("Categoria");
  var Categoria=combo5.options[combo5.selectedIndex].text;
  var combo6= document.getElementById("SubCategoria");
  var SubCategoria=combo6.options[combo6.selectedIndex].text;
  var combo7= document.getElementById("tipoCredito");
  var tipoCredito=combo7.options[combo7.selectedIndex].text;
  var DAgencia=document.getElementById("DAgencia").value;
  var Oficina=document.getElementById("Oficina").value;
  var comment=document.getElementById("comment").value;
  var Moneda=document.getElementById("Moneda").value;
  var combo8= document.getElementById("TipoMoneda");
  var TipoMoneda=combo8.options[combo8.selectedIndex].text;
  var NombreLegal=document.getElementById("NombreLegal").value;
  var nPoder=document.getElementById("nPoder").value;
var cont=0;

if(FechaReclamo=="dd/mm/aaaa"){
  document.getElementById("FechaReclamo").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("FechaReclamo").style.borderColor = "#bdc3c7";
}
if(Categoria=="Categoria..."){
  document.getElementById("Categoria").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("Categoria").style.borderColor = "#bdc3c7";
}
/*if(SubCategoria=="SubCategoria..."){
  document.getElementById("SubCategoria").style.borderColor = "#ef0000";
  cont++;
}*/
if(tipoCredito=="Tipo de Crédito..."){
  document.getElementById("tipoCredito").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("tipoCredito").style.borderColor = "#bdc3c7";
}
if(DAgencia==""){
  document.getElementById("DAgencia").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("DAgencia").style.borderColor = "#bdc3c7";
}
if(Oficina==""){
  document.getElementById("Oficina").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("Oficina").style.borderColor = "#bdc3c7";
}
if(comment==""){
  document.getElementById("comment").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("comment").style.borderColor = "#bdc3c7";
}
if(Moneda==""){
  document.getElementById("Moneda").style.borderColor = "#ef0000";
  cont++;
}else{
  document.getElementById("Moneda").style.borderColor = "#bdc3c7";
}

  
  if(cont==0){
   
    console.log(JSON.stringify({
      Departamento:Departamento,
      CiudadDepartamento:CiudadDepartamento,
      TipoReclamante:TipoReclamante,
      NombreReclamante:NombreReclamante,
      ApellidoReclamante:ApellidoReclamante,
      TipoDocumento:TipoDocumento,NDocumento:NDocumento,
      ClienteB:ClienteB,
      Direccion:Direccion,
      NombreLegal:NombreLegal,
      nPoder:nPoder,
      telefonoDomicilio:telefonoDomicilio,
      telefonoPersonal:telefonoPersonal,
      emailReclamante:emailReclamante,
      FechaReclamo:FechaReclamo,
      Categoria:Categoria,
      SubCategoria:SubCategoria,
      tipoCredito:tipoCredito,
      DAgencia:DAgencia,
      Oficina:Oficina,
      comment:comment,
      Moneda:Moneda,
      TipoMoneda:TipoMoneda
    }));
    /*fetch("http://vqflowdesa/PRASFIWS/service.asmx?op=startFlowPRASFI",{
      method:"POST",mode: 'no-cors',
      body:JSON.stringify({
        Departamento:Departamento,
        CiudadDepartamento:CiudadDepartamento,
        TipoReclamante:TipoReclamante,
        NombreReclamante:NombreReclamante,
        ApellidoReclamante:ApellidoReclamante,
        TipoDocumento:TipoDocumento,NDocumento:NDocumento,
        ClienteB:ClienteB,
        Direccion:Direccion,
        NombreLegal:NombreLegal,
        nPoder:nPoder,
        telefonoDomicilio:telefonoDomicilio,
        telefonoPersonal:telefonoPersonal,
        emailReclamante:emailReclamante,
        FechaReclamo:FechaReclamo,
        Categoria:Categoria,
        SubCategoria:SubCategoria,
        tipoCredito:tipoCredito,
        DAgencia:DAgencia,
        Oficina:Oficina,
        comment:comment,
        Moneda:Moneda,
        TipoMoneda:TipoMoneda,
        NombreLegal:document.getElementById("NombreLegal").value,
        nPoder:document.getElementById("nPoder").value
      }),
      headers:{
        "Content-type": "application/json"
      }
      
    }).then(response => response.json())
    .then(json => console.log(json))*/
    
    var args = JSON.stringify({
      Departamento:Departamento,
      CiudadDepartamento:CiudadDepartamento,
      TipoReclamante:TipoReclamante,
      NombreReclamante:NombreReclamante,
      ApellidoReclamante:ApellidoReclamante,
      TipoDocumento:TipoDocumento,NDocumento:NDocumento,
      ClienteB:ClienteB,
      Direccion:Direccion,
      NombreLegal:NombreLegal,
      nPoder:nPoder,
      telefonoDomicilio:telefonoDomicilio,
      telefonoPersonal:telefonoPersonal,
      emailReclamante:emailReclamante,
      FechaReclamo:FechaReclamo,
      Categoria:Categoria,
      SubCategoria:SubCategoria,
      tipoCredito:tipoCredito,
      DAgencia:DAgencia,
      Oficina:Oficina,
      comment:comment,
      Moneda:Moneda,
      TipoMoneda:TipoMoneda
    });
  
    
    //modal_conteniner11.classList.add("show");
  }
else{
  alert("hay campos incorrectos :"+cont);
}
});


jQuery(document).ready(function ($) {
  $("#smart-form").validate({
    errorClass: "state-error",
    validClass: "state-success",
    errorElement: "em",
    highlight: function (element, errorClass, validClass) {
      $(element).closest(".field").addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).closest(".field").removeClass(errorClass).addClass(validClass);
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio") || element.is(":checkbox")) {
        element.closest(".option-group").after(error);
      } else {
        error.insertAfter(element.parent());
      }
    }
  });
});

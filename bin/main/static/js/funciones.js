const firebaseConfig = {
  apiKey: "AIzaSyD8rszv2Eh8pakAr3l7u8PCiREvdM3aes4",
  authDomain: "calculadoradpf.firebaseapp.com",
  projectId: "calculadoradpf",
  storageBucket: "calculadoradpf.appspot.com",
  messagingSenderId: "287685067942",
  appId: "1:287685067942:web:fa7b26c50e4a3349776067",
  measurementId: "G-9GYK3D66K0"
};
const app = firebase.initializeApp(firebaseConfig);

$(document).on("click", ".simulaUm", function () {
  /* formateador */
  Number.prototype.praPessoa = function (c, d, t) {
    let n = this,
      s,
      i,
      j;
    (c = isNaN((c = Math.abs(c))) ? 2 : c),
      (d = d === undefined ? "," : d),
      (t = t === undefined ? "." : t),
      (s = n < 0 ? "-" : ""),
      (i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + ""),
      (j = (j = i.length) > 3 ? j % 3 : 0);

    return (
      s +
      (j ? i.substr(0, j) + t : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
      (c
        ? d +
          Math.abs(n - i)
            .toFixed(c)
            .slice(2)
        : "")
    );
  };

  jQuery(".resultados").show();
  jQuery("html, body");

  var combo2 = document.getElementById("moneda");
  var selected2 = combo2.options[combo2.selectedIndex].text;
  var combo = document.getElementById("Plazo");
  var selected = combo.options[combo.selectedIndex].text;

  if (parseInt(selected) < 180) {
    document.getElementById("ya").style.display = "none";
  } else {
    document.getElementById("ya").style.display = "block";
  }

  let tasa = 0;
  let aux = 0;
  let rciva = 10310.5;
  var tabla = document.getElementById("table_body");

  tabla.innerHTML = "";
  $("#table_body").empty();
  app
    .firestore()
    .collection("Dpf")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        if (doc.data().item === selected) {
          console.log(doc.data().valor);
          tasa = doc.data().valor;
          let monto = parseFloat(jQuery(".monto").val() * 1);

          const tipmd = selected2;
          if (tipmd === "Dolares") {
            monto = monto * 6.96;
          }

          let tasaPush = tasa;
          let Interesganado = monto * (tasa / 100);
          let total = monto + monto * (tasa / 100);
          if (selected === "Plazo(en días)") {
            selected = "0";
          }
          if (selected2 === "Moneda") {
            selected2 = "";
          }

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
            doc.data().nombre +
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
            Number(tasaPush).praPessoa() +
            "</span>%</span>" +
            "</div>" +
            "</div>" +
            "<hr />" +
            "<div class=" +
            '"' +
            "p2" +
            '"' +
            ">Interés Calculado Bs <span class=" +
            '"' +
            "apTGan" +
            '"' +
            ">" +
            Number(Interesganado).praPessoa() +
            "</span> menos RC IVA Bs 00,00</div>" +
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
            ">Interés Ganado</span> <span class=" +
            '"' +
            "text-2xl text-custom-blue" +
            '"' +
            ">Bs <span class=" +
            '"' +
            "text-2xl text-custom-blue apTGan" +
            '"' +
            ">" +
            Number(Interesganado).praPessoa() +
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
            selected +
            "</span> días</span>" +
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
            ">Capital inicial depositado</span> <span class=" +
            '"' +
            "text-2xl text-custom-blue" +
            '"' +
            ">Bs <span class=" +
            '"' +
            "text-2xl text-custom-blue apMont" +
            '"' +
            ">" +
            Number(monto).praPessoa() +
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
            ">Monto total recibido</span> <span class=" +
            '"' +
            "text-2xl text-custom-blue" +
            '"' +
            ">Bs <span class=" +
            '"' +
            "text-2xl text-custom-blue apTot" +
            '"' +
            ">" +
            Number(total).praPessoa() +
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
            Number(tasaPush).praPessoa() +
            "</span> % anual.</p1>" +
            "<p1>2. Plazo <span class=" +
            '"' +
            "apPlaz" +
            '"' +
            ">" +
            selected +
            "</span> días.</p1>" +
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
            selected2 +
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
          /* imprime resultados */
          /* jQuery(".apMont").text(Number(monto).praPessoa());
          jQuery(".apTas").text(Number(tasaPush).praPessoa());
          jQuery(".apTGan").text(Number(Interesganado).praPessoa());
          jQuery(".apTot").text(Number(total).praPessoa());
          jQuery(".apPlaz").text(selected);
          jQuery(".apTipoM").text(selected2);*/
        }

        return doc.data();
      });
    });
});

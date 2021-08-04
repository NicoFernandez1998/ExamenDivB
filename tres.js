function mostrar() {
  let origen;
  let cantidad;
  let costo;
  let acumVAsia = 0;
  let acumVEuropa = 0;
  let acumvUsa = 0;
  let mayorCantidad;
  let promedioAsia;
  let contAsia = 0;
  let costoTotal;
  let costoDescuento;
  let cantidadTotal;
  let descuento;

  for (let i = 0; i < 10; i++) {
    origen = prompt("Ingrese origen: Asia,Europa,USA").toLowerCase();
    while (origen != "asia" && origen != "europa" && origen != "usa") {
      origen = prompt(
        "Incorrecto. Ingrese origen: Asia,Europa,USA"
      ).toLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese cantidad de vacunas: "));
    while (isNaN(cantidad) || cantidad < 0) {
      cantidad = parseInt(prompt("Incorrecto. Ingrese cantidad de vacunas: "));
    }

    costo = parseFloat(prompt("Costo del vuelo entre 1 millon y 5 millones: "));
    while (costo < 1000000 || costo > 5000000) {
      costo = parseFloat(
        prompt("Incorrecto. Costo del vuelo entre 1 millon y 5 millones: ")
      );
    }

    if (origen == "asia") {
      acumVAsia += cantidad;
      contAsia++;
    } else if (origen == "europa") {
      acumVEuropa += cantidad;
    } else {
      acumvUsa += cantidad;
    }

    costoTotal = costo;
    cantidadTotal = cantidad;

    if (cantidad > 4000000) {
      descuento = 0.3;
    } else if (cantidad > 2000000) {
      descuento = 0.2;
    } else {
      descuento = 0;
    }
  } //*****************FIN DEL FOR*********************

  if (acumVAsia > acumVEuropa && acumVAsia > acumvUsa) {
    mayorCantidad = "Asia";
  } else if (acumVEuropa >= acumVAsia && acumVEuropa > acumvUsa) {
    mayorCantidad = "Europa";
  } else {
    mayorCantidad = "USA";
  }

  promedioAsia = acumVAsia * contAsia;

  costoDescuento = costoTotal - costoTotal * descuento;

  console.log(
    "a) El origen con mayor cantidad de vacunas es: " + mayorCantidad
  );

  if (contAsia == 0) {
    console.log("b) No llegaron vacunas de Asia.");
  } else {
    console.log(
      "b) El promedio de vacunas llegadas desde Asia es: " + promedioAsia
    );
  }

  console.log("c) El total a pagar sin descuento es: " + costoTotal);

  if (descuento == 0) {
    console.log("d) No se realizo ningun descuento.");
  } else {
    console.log(
      "d) Se realizo un descuento del " +
        descuento +
        "%" +
        ", con un importe de: " +
        costoDescuento
    );
  }
}

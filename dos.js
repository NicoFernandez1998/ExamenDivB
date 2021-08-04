function mostrar() {
  
  let nacionalidad;
  let resultado;
  let edad;
  let cepa;
  let contPositivos = 0;
  let contNegativos = 0;
  let contDelta = 0;
  let contAlfa = 0;
  let contBeta = 0;
  let edadMayorContagiado;
  let flagMayorContagiado = 1;
  let contArgentinaDelta = 0;
  let porcPositivos;
  let porcNegativos;
  let cepaMayor;

  for (let i = 0; i < 8; i++) {
    nacionalidad = prompt(
      "Ingrese nacionalidad: argentina/ extranjero."
    ).toLowerCase();
    while (nacionalidad != "argentina" && nacionalidad != "extranjero") {
      nacionalidad = prompt(
        "Incorrecto. Ingrese nacionalidad: argentina/ extranjero."
      ).toLowerCase();
    }

    resultado = prompt("Ingrese resultado: positivo/negativo.").toLowerCase();
    while (resultado != "positivo" && resultado != "negativo") {
      resultado = prompt(
        "Incorrecto. Ingrese resultado: positivo/negativo."
      ).toLowerCase();
    }

    edad = parseInt(prompt("Ingrese edad entre 18 y 65 años: "));
    while (isNaN(edad) || edad < 18 || edad > 65) {
      edad = parseInt(prompt("Incorrecto. Ingrese edad entre 18 y 65 años: "));
    }

    if (resultado == "positivo") {
      cepa = prompt("ingrese tipo de cepa: delta/alfa/beta");
      while (cepa != "delta" && cepa != "alfa" && cepa != "beta") {
        cepa = prompt("Incorrecto. ingrese tipo de cepa: delta/alfa/beta");
      }
    } else {
      cepa = "ninguna";
    }

    if (resultado == "positivo") {
      contPositivos++;
    } else {
      contNegativos++;
    }

    switch (cepa) {
      case "delta":
        contDelta++;
        break;
      case "alfa":
        contAlfa++;
        break;
      case "beta":
        contBeta++;
        break;
    }

    if (
      resultado == "positivo" &&
      nacionalidad == "extranjero" &&
      (flagMayorContagiado || edad > edadMayorContagiado)
    ) {
      edadMayorContagiado = edad;
      flagMayorContagiado = 0;
    }

    if (nacionalidad == "argentina" && cepa == "delta") {
      contArgentinaDelta++;
    }
  } //************FIN DEL FOR***************

  porcPositivos = (contPositivos * 100) / 8;
  porcNegativos = (contNegativos * 100) / 8;

  if (contDelta > contAlfa && contDelta > contBeta) {
    cepaMayor = "delta";
  } else if (contAlfa >= contDelta && contAlfa > contBeta) {
    cepaMayor = "alfa";
  } else {
    cepaMayor = "beta";
  }

  if ((contPositivos = 0)) {
    console.log("a) No se ingresaron positivos.");
  } else {
    console.log("a) El porcentaje de positivos es del " + porcPositivos + "%");
  }

  if ((contNegativos = 0)) {
    console.log("b) No se ingresaron negativos.");
  } else {
    console.log("b) El porcentaje de negativos es del " + porcNegativos + "%");
  }

  console.log("c) La cepa mas encontrada es " + cepaMayor);

  if (flagMayorContagiado) {
    console.log("d) No se ingresaron extranjeros contagiados.");
  } else {
    console.log(
      "d) La edad del mayor extranjero contagiado es: " + edadMayorContagiado
    );
  }

  if (contArgentinaDelta == 0) {
    console.log("e) No se ingresaron argentinos contagiados con delta");
  } else {
    console.log("e) Argentinos contagiados con delta: " + contArgentinaDelta);
  }
}

function mostrar() {
  
  let nombre;
  let edad;
  let vacuna;
  let dosis;
  let sexo;
  let seguir;
  let contRusa = 0;
  let contAmer = 0;
  let contChina = 0;
  let contVacunados = 0;
  let acumEdadRusa = 0;
  let promedioRusa;
  let mujerMasEdad = 0;
  let nameMujerMasEdad;
  let vacunaMujerMasEdad;
  let flagMME = 1;
  let americanaMayores = 0;
  let porcAmericana;
  let contDosDosis = 0;
  let porcDosDosis;
  let menosInoculada;

  do {
    nombre = prompt("Ingrese nombre: ");

    edad = parseInt(prompt("Ingrese edad mayor o igual a 12 años: "));
    while (isNaN(edad) || edad < 12) {
      edad = parseInt(
        prompt("Incorrecto. Ingrese edad mayor o igual a 12 años: ")
      );
    }

    vacuna = prompt(
      "Ingrese el tipo de vacuna: rusa/china/americana"
    ).toLowerCase();
    while (vacuna != "rusa" && vacuna != "china" && vacuna != "americana") {
      vacuna = prompt(
        "Ingrese el tipo de vacuna: rusa/china/americana"
      ).toLowerCase();
    }
    if (edad >= 12 && edad <= 17) {
      vacuna = "americana";
    }

    dosis = prompt("Ingrese dosis: p/s");
    while (dosis != "p" && dosis != "s") {
      dosis = prompt("Incorrecto. Ingrese dosis: p/s");
    }

    sexo = prompt("Ingrese sexo: m/f").toLowerCase();
    while (sexo != "m" && sexo != "f") {
      sexo = prompt("Incorrecto. Ingrese sexo: m/f").toLowerCase();
    }

    if (vacuna == "americana") {
      contAmer++;
    }

    if (vacuna == "china") {
      contChina++;
    }

    if (vacuna == "rusa") {
      contRusa++;
      acumEdadRusa += edad;
    }

    if (sexo == "f" && (flagMME || edad > mujerMasEdad)) {
      nameMujerMasEdad = nombre;
      vacunaMujerMasEdad = vacuna;
      flagMME = 0;
    }

    if (vacuna == "americana" && edad > 17) {
      americanaMayores++;
    }

    if (dosis == "s") {
      contDosDosis++;
    }

    contVacunados++;

    seguir = prompt("Desea ingresar otro vacunado: s/n").toLocaleLowerCase();
  } while (seguir == "s"); 
  
  // *******************FIN DEL BUCLE*********************

  promedioRusa = acumEdadRusa / contRusa;

  porcAmericana = (americanaMayores * 100) / contAmer;

  porcDosDosis = (contDosDosis * 100) / contVacunados;

  if (contChina < contRusa && contChina < contAmer) {
    menosInoculada = "china";
  } else if (contRusa <= contChina && contRusa < contAmer) {
    menosInoculada = "rusa";
  } else {
    menosInoculada = "americana";
  }

  if ((contRusa = 0)) {
    console.log("a) No se ingresaron vacunados con la rusa.");
  } else {
    console.log("a) El promedio de vacunados con la rusa es " + promedioRusa);
  }

  if ((mujerMasEdad = 0)) {
    console.log("b) No se ingresaron mujeres vacunadas.");
  } else {
    console.log(
      "b) La mayor mujer vacunada se llama: " +
        nameMujerMasEdad +
        " y le dieron la " +
        vacunaMujerMasEdad
    );
  }

  if ((americanaMayores = 0)) {
    console.log("c) No se ingresaron mayores de edad con la vacuna americana");
  } else if ((contAmer = 0)) {
    console.log("c) No se ingresaron vacunados con la americana");
  } else {
    console.log(
      "c) El porcentaje de mayores de edad vacunados con americana es: " +
        porcAmericana +
        "%"
    );
  }

  if ((contDosDosis = 0)) {
    console.log("d) No hubo vacunados con segunda dosis");
  } else {
    console.log(
      "d) El porcentaje de vacunados con segunda dosis es: " +
        porcDosDosis +
        "%"
    );
  }

  console.log("e) La vacuna menos inoculada es " + menosInoculada);
}

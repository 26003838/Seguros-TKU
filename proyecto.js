// Variable para controlar el bucle
var continuar = true;

while (continuar) {
    var nombre = prompt("Ingrese su nombre completo (o escriba 'Salir' para terminar):");

    if (nombre.toUpperCase() === "SALIR") {
        continuar = false;
        alert("Gracias por usar el cotizador. ¡Feliz día!");
        break;
    }

    var precio_base = 2000;
    var recargo_total = 0;

    var edad = prompt("¿Cuántos años tiene?");
    var edad_num = parseInt(edad);

    if (edad_num < 18) {
        alert("Debe ser mayor de edad para cotizar.");
        continue; // Regresa al inicio del bucle
    }

    // --- Recargos por Edad ---
    if (edad_num >= 18 && edad_num < 25) recargo_total += precio_base * 0.10;
    else if (edad_num >= 25 && edad_num < 50) recargo_total += precio_base * 0.20;
    else if (edad_num >= 50) recargo_total += precio_base * 0.30;

    // --- Recargo Cónyuge ---
    var casado = prompt("¿Está casado/a? (si/no)");
    if (casado.toUpperCase() === "SI") {
        var edad_conyuge = parseInt(prompt("¿Qué edad tiene su cónyuge?"));
        if (edad_conyuge >= 18 && edad_conyuge < 25) recargo_total += precio_base * 0.10;
        else if (edad_conyuge >= 25 && edad_conyuge < 50) recargo_total += precio_base * 0.20;
        else if (edad_conyuge >= 50) recargo_total += precio_base * 0.30;
    }

    // --- Recargo Hijos ---
    var hijos = prompt("¿Tiene hijos? (si/no)");
    if (hijos.toUpperCase() === "SI") {
        var cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
        recargo_total += (precio_base * 0.20) * cantidad_hijos;
    }

    // --- NUEVOS RECARGOS (Puntos Extra) ---
    
    // 1. Recargo por Propiedades (35% por propiedad)
    var propiedades = parseInt(prompt("¿Cuántas propiedades tiene?"));
    if (propiedades > 0) {
        recargo_total += (precio_base * 0.35) * propiedades;
    }

    // 2. Recargo por Ingresos (5% sobre el salario)
    var salario = parseFloat(prompt("¿Cuál es su salario mensual?"));
    recargo_total += (salario * 0.05);

    // --- Resultado ---
    var precio_final = precio_base + recargo_total;
    alert("Cotización para: " + nombre + 
          "\nRecargos totales: Q." + recargo_total + 
          "\nPrecio Final: Q." + precio_final);
}
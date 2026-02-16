// Precio base de la cotización
var precio_base = 2000

// Valores de los recargos 
var edad_18 = 0.10 // 10%
var edad_25 = 0.20 // 20%
var edad_50 = 0.30 // 30%

var casado_18 = 0.10 // 10%
var casado_25 = 0.20 // 20%
var casado_50 = 0.30 // 30%

var hijos_recargo = 0.20 // 20%


// Recargo total acumulado
var recargo_total = 0

// Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre completo")
var edad = prompt("¿Cuántos años tiene? Ingrese solo números")

// Convertimos la edad a número
var edad_numero = parseInt(edad)

// Validación: Solo personas mayores de edad pueden cotizar
if (edad_numero < 18) {
  alert("Lo sentimos, debe ser mayor de edad para contratar un seguro.")
} else {
  
  // ----------- INCISO 1: Recargo por edad del asegurado -----------
  if(edad_numero >= 18 && edad_numero < 25){
    recargo_total = recargo_total + (precio_base * edad_18)
  } else if(edad_numero >= 25 && edad_numero < 50){
    recargo_total = recargo_total + (precio_base * edad_25)
  } else if(edad_numero >= 50){
    recargo_total = recargo_total + (precio_base * edad_50)
  }

  // ----------- INCISO 2: Recargo por cónyuge -----------
  var casado = prompt("¿Está casado actualmente?", "si/no")
  if("SI" == casado.toUpperCase()){
    var edad_conyuge = prompt("¿Qué edad tiene su esposo/a?")
    var edad_conyuge_numero = parseInt(edad_conyuge)
    
    if(edad_conyuge_numero >= 18 && edad_conyuge_numero < 25){
      recargo_total = recargo_total + (precio_base * casado_18)
    } else if(edad_conyuge_numero >= 25 && edad_conyuge_numero < 50){
      recargo_total = recargo_total + (precio_base * casado_25)
    } else if(edad_conyuge_numero >= 50){
      recargo_total = recargo_total + (precio_base * casado_50)
    }
  }

  // ----------- INCISO 3: Recargo por hijos -----------
  var hijos = prompt("¿Tiene hijos?", "si/no")
  if("SI" == hijos.toUpperCase()){
    var cantidad_hijos = prompt("¿Cuántos hijos tiene?")
    var cantidad_hijos_numero = parseInt(cantidad_hijos)
    
    // El recargo es del 20% por cada hijo
    recargo_total = recargo_total + (precio_base * hijos_recargo) * cantidad_hijos_numero
  }

  // Resultado final
  var precio_final = precio_base + recargo_total

  // Mensajes de salida
  alert("Para el cliente " + nombre)
  alert("El recargo total será de: Q." + recargo_total)
  alert("El precio final de la cotización es: Q." + precio_final)
}
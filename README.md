# 🛡️ Sistema de Cotización TK-U Seguros

Este proyecto automatiza el cálculo de primas de seguros para la empresa **TK-U** en la ciudad de Jedha, transformando un proceso manual ineficiente en una herramienta digital rápida y precisa.

---

## 📋 1. Análisis de la Situación

* **Problema:** El sistema manual actual limita la producción a solo **50 cotizaciones por día**, generando cuellos de botella y pérdida de clientes potenciales.
* **Solución:** Un motor de cálculo programado que aplica recargos dinámicos sobre un precio base, permitiendo generar cotizaciones ilimitadas de forma instantánea.

---

## 💰 2. Lógica de Negocio (Cálculo de Recargos)

La cotización parte de un **Precio Base de Q. 2,000.00**. Sobre este monto, se aplican recargos acumulativos según el perfil del cliente:

### A. Tabla de Recargos por Edad (Titular y Cónyuge)
Se aplican los mismos rangos porcentuales para ambos, calculados individualmente sobre el precio base:

| Rango de Edad | Porcentaje de Recargo | Monto Sugerido (Q. 2,000) |
| :--- | :--- | :--- |
| **18 - 24 años** | 10% | Q. 200.00 |
| **25 - 49 años** | 20% | Q. 400.00 |
| **50 años o más** | 30% | Q. 600.00 |

### B. Recargo por Carga Familiar
* **Hijos:** Se aplica un **20% de recargo** por cada hijo (Q. 400.00 c/u), sin importar la edad de estos.

---

## ⚙️ 3. Algoritmo de Resolución

El flujo lógico del programa se ha diseñado de la siguiente manera:

1.  **Inicialización:** Definir `precio_base` y acumulador `total_recargos`.
2.  **Captura de Perfil:** Solicitar nombre y edad del asegurado.
3.  **Filtro de Seguridad:** * **SI** edad < 18: Notificar error y abortar proceso.
    * **SI/NO**: Continuar al cálculo.
4.  **Evaluación del Asegurado:** Determinar rango de edad y sumar porcentaje al acumulador.
5.  **Evaluación de Cónyuge:** * ¿Estado civil es "Casado"?
    * **SI:** Solicitar edad del cónyuge, determinar rango y sumar recargo.
6.  **Evaluación de Hijos:** * ¿Tiene hijos?
    * **SI:** Solicitar cantidad y multiplicar `(Precio_Base * 0.20) * cantidad`.
7.  **Consolidación:** `Precio_Final = Precio_Base + total_recargos`.
8.  **Salida:** Mostrar resumen detallado y precio final.

---

## 🚀 Puntos Extra: Mejoras Implementadas
* **Ciclo Continuo:** El programa ahora permite realizar múltiples cotizaciones seguidas. Se detiene únicamente cuando el usuario escribe la palabra **"Salir"**.
* **Recargo por Propiedades:** Se añadió un cargo del 35% sobre el precio base por cada propiedad del asegurado.
* **Recargo por Ingresos:** Se aplica un 5% extra calculado sobre el salario mensual del cliente.

## 🧐 Consideraciones del Problema
Para este desarrollo, fue crítico considerar:
1. **Validaciones:** Que los ingresos y cantidades sean números válidos.
2. **Acumulación:** Asegurar que los recargos de los puntos extra se sumen correctamente al total y no reemplacen los anteriores.

## 💡 Propuestas de Mejora
1. **Interfaz Gráfica:** Sustituir los `prompt()` y `alert()` por un formulario HTML con botones y campos de texto para mejorar la experiencia del usuario.
2. **Persistencia de Datos:** Guardar las cotizaciones en una base de datos o un archivo para que la empresa pueda contactar a los clientes después.
3. **Validación Robusta:** Implementar filtros para evitar que el usuario ingrese letras en campos donde se esperan números o sueldos negativos.



---


# Cambios de copy: rediseño de conducta.com.ar

Registro de cada texto nuevo, modificado o eliminado respecto de la versión en producción (commit `4a95f60` de `main`). Rama: `rediseno`. Fecha: 27/10/2026.

**Origen de cada cambio**
- **Brief §7**: texto propuesto en la sección 7 del brief. Necesita el OK de Román antes de publicarse.
- **Decisión**: aplica una decisión ya marcada en el brief (D1 a D11) o elegida por Román.
- **Regla**: corrección mínima por las reglas de copy de la sección 4 (rayas, construcciones "No X. Y.", frases prohibidas, mayúsculas).
- **Propuesta de Claude**: texto que no estaba en el brief. Necesita el OK de Román.
- **Ronda 2**: cambio pedido por Román sobre el deploy preview (27/10/2026). Manda sobre lo que diga el resto de este documento.

---

## Ronda 2: cambios pedidos por Román sobre el deploy preview

**Hero, párrafo**
- Antes: "Ordenamos cómo tu empresa se comunica con sus clientes y cómo se comunican tus equipos entre sí, con base en las ciencias del comportamiento. Trabajamos con pymes de 10 a 500 personas."
- Después: "Ordenamos cómo tu empresa se comunica con sus clientes y cómo se comunican tus equipos entre sí, con base en las ciencias del comportamiento."
- Origen: Ronda 2. El rango sigue en la descripción para buscadores, en Nosotros y en la pregunta 7.

**Hero, fila de clientes**
- Antes: Evidenpsia, Farmacia Lutilsky, Ponti, Pleno.
- Después: Evidenpsia, Farmacia Lutilsky, Ponti, Soluciones Analíticas.
- Origen: Ronda 2 (Pleno sale de los casos).

**Qué resolvemos: orden y diseño de las tarjetas**
- Antes: 1.° Comunicación externa, 2.° Comunicación interna. Tarjetas claras con "Cuándo nos llaman" y "Qué entregamos".
- Después: 1.° Comunicación interna (bloque navy), 2.° Comunicación externa (bloque ink). Arriba, tres problemas en forma de pregunta en Bold; abajo, un panel con "¿De qué nos encargamos?" y los entregables con un marcador en forma de corte; al pie, el botón "Agendá una consulta".
- Origen: Ronda 2. Excepción a la regla de orden (externa, después interna), como el H1.

**Qué resolvemos: ajuste de diseño (segundo pedido)**
- Las dos tarjetas pasan a ocupar todo el ancho, una debajo de la otra. El título de cada tarjeta es más grande (28 a 40 px Bold) y las tres preguntas van en tres columnas, cada una con una línea fina arriba, en Regular para que no compitan con el título. En el panel, "¿De qué nos encargamos?" queda a la izquierda y los entregables en dos columnas. En el celular, las preguntas y la lista van en una columna.
- Origen: Ronda 2. Suma un paso a la escala tipográfica (--fs-title), que ahora tiene 7.

**Comunicación interna, problemas** (reemplaza "Cuándo nos llaman")
- Antes: "La información se pierde entre áreas." / "Los mismos conflictos se repiten entre equipos o niveles." / "No está claro quién comunica qué, ni por qué canal."
- Después: "¿La información se pierde entre áreas?" / "¿Los mismos conflictos se repiten entre equipos o niveles?" / "¿No está claro quién comunica qué, ni por qué canal?"
- Origen: Ronda 2.

**Comunicación externa, problemas** (reemplaza "Cuándo nos llaman")
- Antes: "La marca no refleja el nivel real de la empresa." / "Las consultas no se convierten en ventas." / "Hay que lanzar una marca nueva o rediseñar la actual."
- Después: "¿Tu marca no refleja el nivel real de tu empresa?" / "¿Las consultas no se convierten en ventas?" / "¿Necesitás lanzar una marca nueva o rediseñar la actual?"
- Origen: Ronda 2.

**Subtítulo de entregables**
- Antes: "Qué entregamos"
- Después: "¿De qué nos encargamos?"
- Origen: Ronda 2 (de las dos opciones propuestas por Román, la que mejor encaja con una lista de entregables).

**Farmacia Lutilsky, resultado**
- Antes: [COMPLETAR: resultado observable]
- Después: "Aumentaron las ventas de los productos de mayor valor."
- Origen: Ronda 2.

**Pleno**
- Antes: caso con situación y resultado sin completar.
- Después: caso eliminado (también sus imágenes).
- Origen: Ronda 2.

**Soluciones Analíticas** (caso nuevo, Comunicación interna)
- Antes: no existía.
- Después:
  - Situación: "Había problemas de comunicación entre áreas."
  - Qué hicimos: "Diseñamos y realizamos entrevistas a medida, medimos los datos y entregamos planes estratégicos de mejora."
  - Resultado: "Mayor velocidad en la ejecución de tareas, menos fricciones operativas y mayor bienestar del equipo."
  - Imagen: no hay fotos de marca, así que el lugar de la imagen es un panel navy con el nombre del cliente (brief §6.3). Se reemplaza si llega una foto o el logo.
- Origen: Ronda 2, con redacción ajustada a la de los otros casos.

**Método Conducta: interacción**
- Antes: las cuatro fases en fila, todas visibles.
- Después: pestañas 01 a 04 con una línea que avanza; se ve una fase por vez y se pasa con un clic, con las flechas del teclado o con "Fase anterior" y "Fase siguiente". Sin JavaScript se ven las cuatro en fila, como antes. Textos sin cambios.
- Origen: Ronda 2. Textos nuevos: "Fase anterior" y "Fase siguiente" (Propuesta de Claude).

**Aparición al hacer scroll**
- Antes: solo se animaba la entrada del hero (brief §5.4).
- Después: títulos de sección, tarjetas, casos, método, Nosotros, preguntas y contacto aparecen con un fundido y un desplazamiento corto hacia arriba la primera vez que entran en pantalla. Con "reducir movimiento" activado no se anima nada.
- Origen: Ronda 2. Excepción al brief §5.4.

**Pregunta 2, ¿Qué pasa en la consulta inicial?**
- Antes: [COMPLETAR]
- Después: "Es una primera conversación, sin costo. Nos contás qué está pasando en tu empresa y te hacemos algunas preguntas para entender el problema. Al terminar te decimos con claridad si podemos ayudarte y, si es así, cuál sería el primer paso."
- Origen: Propuesta de Claude, a pedido de Román. No menciona duración ni medio (videollamada, presencial) porque no están definidos; se pueden sumar.

---

## Metadatos (título de pestaña y vista previa al compartir)

**Título** (`title`, `og:title`, `twitter:title`)
- Antes: "Conducta. | Comunicación y Marca para Pymes"
- Después: "Conducta. | Consultora de comunicación para pymes"
- Origen: Regla ("pymes" en minúscula y sin mayúsculas de énfasis). Propuesta de Claude.

**Descripción** (`description`, `og:description`)
- Antes: "Conducta. es una consultora de estrategia de marca y comunicación para pymes, con base en las ciencias del comportamiento. Comunicación interna y externa, siempre con diagnóstico antes que intuición." / "Diagnóstico estratégico y comunicación basados en evidencia, para pymes. Comunicación interna y externa, siempre con diagnóstico antes que intuición."
- Después: "Consultora de comunicación externa e interna para pymes, con base en las ciencias del comportamiento. Trabajamos con pymes de 10 a 500 personas."
- Origen: Regla (sacar el slogan y respetar el orden externa, interna). Propuesta de Claude.

**Descripción corta** (`twitter:description`)
- Antes: "Diagnóstico estratégico y comunicación basados en evidencia, para pymes."
- Después: "Consultora de comunicación externa e interna para pymes, con base en las ciencias del comportamiento."
- Origen: Propuesta de Claude.

## Menú

- Antes: Conducta · Equipo · Método · Soluciones · Trabajo · FAQ · Contacto (más íconos de Instagram y LinkedIn)
- Después: Soluciones, Casos, Método, Nosotros, Preguntas frecuentes, y el botón "Agendá una consulta". Las redes pasan al footer.
- Origen: Decisión (D2: "Nosotros" en lugar de "Equipo") y arquitectura de la sección 6.

## Hero

**Título principal (H1)**
- Antes: no había H1. Se mostraba el logotipo como imagen.
- Después: "Comunicación interna y externa para pymes."
- Origen: Decisión (D1 = A; texto elegido por Román, que confirmó este orden de los frentes).

**Párrafo**
- Antes: "Comunicación de pymes, con ciencias del comportamiento."
- Después: "Ordenamos cómo tu empresa se comunica con sus clientes y cómo se comunican tus equipos entre sí, con base en las ciencias del comportamiento. Trabajamos con pymes de 10 a 500 personas."
- Origen: Brief §7.

**Acciones**
- Antes: botón "Agendá una consulta".
- Después: botón "Agendá una consulta" y enlace "Ver casos". Debajo: "Por WhatsApp. La primera consulta no tiene costo."
- Origen: Brief §6 y §7.

**Fila de clientes**
- Antes: no existía.
- Después: Evidenpsia, Farmacia Lutilsky, Ponti, Pleno (provisorio en texto; se reemplaza por los logos).
- Origen: Decisión (D9: con logos).

## Qué resolvemos (antes "Soluciones")

**Título**
- Antes: "Soluciones."
- Después: "Qué resolvemos."
- Origen: Decisión de Román.

**Bajada**
- Antes: "Dos frentes de trabajo para pymes, siempre con diagnóstico antes que ejecución."
- Después: eliminada.
- Origen: Regla. Se parece al slogan prohibido y repetía la idea de diagnóstico, que ahora se dice una sola vez, en el método. El brief permite una oración de bajada "como mucho".

**Tarjeta de Comunicación externa**
- Antes: título "Comunicación Externa", bajada "Diagnóstico y estrategia de marca para pymes" y, dentro de un acordeón cerrado: "Identificamos las fallas en cómo tu pyme comunica — en digital, en identidad visual y en el proceso de ventas — y diseñamos una estrategia orientada a resultados concretos: más consultas, más conversiones, más clientes." / "Construimos o rediseñamos tu identidad de marca desde el diagnóstico estratégico, ya sea que estés arrancando de cero o repensando lo que ya tenés. Cada decisión de naming, identidad visual y tono de voz está fundada en evidencia y alineada con tu objetivo de negocio."
- Después: título "Comunicación externa", abierta, sin acordeón.
  - Cuándo nos llaman: "La marca no refleja el nivel real de la empresa." / "Las consultas no se convierten en ventas." / "Hay que lanzar una marca nueva o rediseñar la actual."
  - Qué entregamos: Diagnóstico de comunicación externa (digital, identidad visual y proceso de ventas) / Posicionamiento / Naming / Identidad visual / Tono de voz / Estrategia de redes.
  - Enlace: "Agendá una consulta".
- Origen: Brief §7.

**Tarjeta de Comunicación interna**
- Antes: título "Comunicación Interna", bajada "Diagnóstico y protocolos para la comunicación entre áreas" y, dentro de un acordeón cerrado: "Identificamos los patrones de comunicación entre áreas, equipos y niveles jerárquicos. Distinguimos fricciones estructurales de fricciones interpersonales para dirigir la intervención al problema real." / "Diseñamos protocolos formales de comunicación cuando su ausencia es la causa de la fricción. Entregamos documentos operativos claros, con roles y canales definidos."
- Después: título "Comunicación interna", abierta.
  - Cuándo nos llaman: "La información se pierde entre áreas." / "Los mismos conflictos se repiten entre equipos o niveles." / "No está claro quién comunica qué, ni por qué canal."
  - Qué entregamos: Diagnóstico de patrones de comunicación entre áreas, equipos y niveles / Distinción entre fricciones estructurales e interpersonales / Protocolos formales de comunicación / Documentos operativos con roles y canales definidos.
  - Enlace: "Agendá una consulta".
- Origen: Brief §7.

## Casos

Cada caso muestra ahora, sin hover: frente ("Comunicación externa"), cliente, situación, qué hicimos y resultado. Las etiquetas "Situación", "Qué hicimos" y "Resultado" son nuevas (Brief §6).

**Evidenpsia** (caso destacado)
- Antes: "Las profesionales detrás de Evidenpsia no conseguían pacientes y estaban desmotivadas con su propio proyecto. Hicimos un rebranding completo —logo, paleta, estrategia de redes y roadmap— para que la marca representara lo que realmente eran y pudieran cobrar lo que su trabajo valía. Hoy consiguen los pacientes que buscaban, al valor que buscaban, y no tienen lugar para más."
- Después:
  - Situación: "Las profesionales no conseguían pacientes y estaban desmotivadas con su propio proyecto."
  - Qué hicimos: "Rebranding completo (logo, paleta, estrategia de redes y hoja de ruta) para que la marca representara lo que realmente eran y pudieran cobrar lo que su trabajo vale."
  - Resultado: "Hoy consiguen los pacientes que buscaban, al valor que buscaban, y tienen la agenda completa."
- Origen: Brief §7. A verificar por Román: "tienen la agenda completa" reemplaza a "no tienen lugar para más".

**Farmacia Lutilsky**
- Antes: "Una farmacia con más de 40 años de trayectoria atravesaba una caída sostenida en ventas y una migración de clientes hacia productos de menor margen. Rediseñamos su identidad visual completa —logo, sistema visual e isotipo heráldico— a partir de un diagnóstico estratégico previo. La clientela reconoció y valoró el cambio."
- Después:
  - Situación: sin cambios.
  - Qué hicimos: "A partir de un diagnóstico estratégico, rediseñamos su identidad visual completa (logo, sistema visual e isotipo heráldico)."
  - Resultado: [COMPLETAR: resultado observable]
- Origen: Brief §7. Se sacó "La clientela reconoció y valoró el cambio" porque no es un resultado observable.

**Wagner Bros Teck**
- Antes: "Una empresa de autopartes que nunca había tenido logo ni marca buscaba renovarse, sin tener claro por dónde empezar. El diagnóstico mostró que la clientela ya la reconocía por el apellido de su dueño —Wagner— y ese fue el insumo principal para construir la identidad: logo, isotipo, variables de marca y sistema de aplicaciones."
- Después: caso eliminado.
- Origen: Decisión (D6).

**Ponti**
- Antes: "Creamos el naming, el logo, la paleta, el tono de voz y la estrategia de redes de Ponti: la identidad completa de una marca que se prepara para salir al mercado. Hoy el sistema está terminado; solo resta la aprobación formal del nombre en el INPI para el lanzamiento."
- Después:
  - Situación: "Una marca nueva que se preparaba para salir al mercado."
  - Qué hicimos: "Naming, logo, paleta, tono de voz y estrategia de redes."
  - Resultado: "Identidad completa, lista para el lanzamiento."
- Origen: Brief §7 y Decisión (D6: sin la mención al INPI). A considerar: el resultado describe un entregable, no una conducta observada.

**Pleno**
- Antes: "Diseñamos y desarrollamos el sitio web de Pleno, aplicando su sistema de identidad visual."
- Después:
  - Situación: [COMPLETAR: situación]
  - Qué hicimos: sin cambios.
  - Resultado: [COMPLETAR: resultado observable]
- Origen: Brief §7.

## Método

**Título**
- Antes: "Cómo trabajamos."
- Después: "Método Conducta."
- Origen: Decisión (D3 = A).

**Bajada**
- Antes: "Tres fases, siempre en el mismo orden. Ninguna decisión de diseño o mensaje se toma sin la anterior."
- Después: "Cada proyecto pasa por estas fases, en este orden. Ninguna decisión de marca, mensaje o protocolo se toma sin la anterior."
- Origen: Brief §7.

**Fases**
- Antes:
  - 01 Diagnóstico: "Analizamos cómo responde tu audiencia a tu marca hoy: qué genera confianza, qué la aleja, y por qué."
  - 02 Posicionamiento: "Definimos qué debe comunicar tu marca para generar la decisión que buscás en esa audiencia."
  - 03 Implementación: "Bajamos esas decisiones a cada pieza y canal, eliminando fricciones en el camino a contactarte o comprar."
- Después:
  - 01 Diagnóstico funcional: "Identificamos qué conductas produce hoy tu comunicación (en clientes o dentro de los equipos) y qué las está causando."
  - 02 Diseño de marco relacional: "Definimos qué tiene que asociar la gente con tu marca o con tu comunicación interna para responder como necesitás."
  - 03 Arquitectura de decisión: "Diseñamos piezas, canales y protocolos para que la conducta buscada sea la más fácil de elegir."
  - 04 Verificación conductual: "Medimos si las conductas cambiaron y ajustamos lo que no funcionó."
- Origen: Brief §7 (opción A).

## Nosotros (antes "Qué es Conducta" y "Román Masimelli")

**Título**
- Antes: "Qué es Conducta." y, en otra sección, "Román Masimelli."
- Después: "Quiénes somos." (una sola sección)
- Origen: Brief §6.

**Párrafos institucionales**
- Antes: "Somos una consultora de estrategia de marca y comunicación con base en las ciencias del comportamiento. Integramos ese marco en un método propio: un proceso de diagnóstico, diseño e intervención que trata los problemas de comunicación como lo que son — problemas de conducta." / "No ejecutamos sin diagnóstico. Cada decisión de identidad, posicionamiento o comunicación está fundada en evidencia y orientada a resultados observables y verificables." / "Trabajamos con pymes de entre 10 y 500 personas que enfrentan problemas complejos de comunicación y requieren un abordaje riguroso."
- Después: "Somos una consultora de comunicación para pymes. Aplicamos las ciencias del comportamiento a dos frentes: cómo se comunica la empresa con sus clientes y cómo se comunican sus equipos entre sí. Cada decisión de marca, mensaje o protocolo parte de un diagnóstico y apunta a resultados que se pueden observar." / "Trabajamos con pymes de 10 a 500 personas, en cualquier país de habla hispana. Es el tamaño en el que ya hay estructura para implementar lo que entregamos y todavía no hay un equipo propio resolviendo esto."
- Origen: Brief §7.

**Credenciales "UBA / B2B / 360°"**
- Antes: "UBA, Respaldo académico" / "B2B, Foco en pymes" / "360°, Diagnóstico integral"
- Después: eliminadas.
- Origen: Decisión (D7 = A).

**Bloque de dirección**
- Antes (primera persona): "Soy Licenciado en Psicología por la Universidad de Buenos Aires. Docente en la Facultad de Psicología de la UBA — Psicología Social y Teoría y Técnica de Grupos — y Jefe de Trabajos Prácticos en Fundación Barceló, en el área de Psicoestadística." / "Mi formación me dio herramientas concretas para entender cómo se comportan las personas: qué eligen, qué rechazan y por qué. Apliqué ese conocimiento en comunicación institucional — en la Secretaría Académica de la UBA — y en equipos de comunicación para campañas políticas antes de fundar Conducta." / "Conducta. nació de esa intersección: ciencias del comportamiento aplicadas a la comunicación de las pymes — puertas afuera y puertas adentro. No especulamos sobre lo que funciona. Lo diagnosticamos, lo diseñamos y lo verificamos."
- Después (tercera persona, lista): "Román Masimelli" / "Fundador y director" / "Licenciado en Psicología (Universidad de Buenos Aires)." / "Docente en la Facultad de Psicología de la UBA (Psicología Social y Teoría y Técnica de Grupos)." / "Jefe de Trabajos Prácticos de Psicoestadística en Fundación Barceló." / "Experiencia en comunicación institucional en la Secretaría Académica de la UBA."
- Origen: Decisión (D2 = A, sin campañas políticas) y Brief §7.

## Preguntas frecuentes

**Título**
- Antes: "Preguntas frecuentes." con la bajada "Todo lo que quizás te preguntes antes de escribirnos."
- Después: "Preguntas frecuentes." sin bajada.
- Origen: Regla (sin frases de relleno).

**1. ¿Por qué no hay precios en esta web?**
- Antes: "No cotizamos sin diagnóstico previo. El costo depende del problema real de cada empresa, no de un paquete cerrado — se define después de la primera conversación, no antes."
- Después: "Cotizamos después del diagnóstico, porque el costo depende del problema real de cada empresa. Lo definimos después de la primera conversación."
- Origen: Brief §7.

**2. ¿Qué pasa en la consulta inicial?** (pregunta nueva)
- Antes: no existía.
- Después: [COMPLETAR: qué pasa en la consulta inicial. Aclarar que no tiene costo y qué se lleva el cliente de esa conversación.]
- Origen: Brief §7.

**3. ¿Cómo empieza un proyecto?**
- Antes: "Siempre con diagnóstico. Antes de proponer un servicio puntual, entendemos el problema real — a veces no es el que se pidió al principio."
- Después: "Con un diagnóstico. Antes de proponer un servicio, entendemos el problema real, que a veces no es el que se planteó al principio."
- Origen: Brief §7.

**4. ¿Qué necesitamos de vos para arrancar?**
- Antes: "El briefing completo y los materiales existentes: logos anteriores, accesos, manuales de marca si los tenés. Con eso empieza el diagnóstico."
- Después: "Depende del frente. En comunicación externa, los materiales de marca que existan (logos, manuales, accesos). En comunicación interna, acceso a las personas y a los canales involucrados. Con eso empieza el diagnóstico."
- Origen: Brief §7 (cubre los dos frentes).

**5. ¿Hacen solo diseño o también estrategia?**
- Antes: "¿Hacen solo identidad visual, o también estrategia?" / "Las dos cosas, y en ese orden. No diseñamos sin haber definido antes qué tiene que lograr esa identidad."
- Después: "¿Hacen solo diseño o también estrategia?" / "Las dos cosas, en ese orden. Primero definimos qué tiene que lograr la comunicación y después la diseñamos."
- Origen: Brief §7.

**6. ¿Trabajan con empresas fuera de Argentina?**
- Sin cambios: "Sí, con pymes de cualquier país de habla hispana. La mayor parte del proceso se coordina de forma remota."

**7. ¿Con qué tamaño de empresas trabajan?**
- Antes: "Con pymes de entre 10 y 500 personas. Es el rango donde nuestro método tiene sentido: ya hay estructura para ejecutar lo que entregamos, pero todavía no hay un equipo propio resolviendo esto puertas adentro."
- Después: "Con pymes de 10 a 500 personas."
- Origen: Brief §7 (corta, porque la explicación ya está en Nosotros).

## Contacto

**Título**
- Antes: "Hablemos de tu pyme." (en dos líneas forzadas)
- Después: "Hablemos de tu pyme."
- Origen: sin cambios de texto.

**Párrafo**
- Antes: "Escribinos por WhatsApp y coordinamos una consulta inicial sin costo."
- Después: "Contanos qué está pasando en tu empresa. La primera consulta no tiene costo y te decimos con claridad si podemos ayudarte."
- Origen: Brief §7.

**Botón y mail**
- Antes: botón "Escribinos por WhatsApp". El mail solo aparecía en el footer.
- Después: botón "Agendá una consulta" (el mismo nombre en toda la página) y el mail visible al lado: somos@conducta.com.ar.
- Origen: Brief §3 (un solo CTA) y Decisión (D10 = A).

## Mensaje de WhatsApp

- Antes: "Hola! Soy [nombre], de [empresa]. Me gustaría contarte sobre [motivo/proyecto]."
- Después: "Hola, quiero coordinar una consulta inicial para mi empresa."
- Origen: Brief §7.

## Footer

- Antes: isotipo, íconos de redes y "© 2026 Conducta. Todos los derechos reservados. · somos@conducta.com.ar"
- Después: logotipo, enlaces a las secciones, somos@conducta.com.ar, íconos de Instagram y LinkedIn, y "© 2026 Conducta."
- Origen: Brief §6 (sin separador con punto medio).

---

## Pendientes [COMPLETAR]

| Dónde | Qué falta |
|---|---|
| Ninguno de contenido | |

Resueltos en la ronda 2: resultado de Farmacia Lutilsky, caso Pleno (eliminado), respuesta a la pregunta 2, foto de Román y logos de los cuatro clientes. Los logos se pasaron a blanco con fondo transparente (al de Soluciones Analíticas se le quitó el fondo blanco) y se muestran al 60% de opacidad, con el alto compensado para que pesen parecido. El de Soluciones Analíticas también reemplaza al panel con el nombre en su caso.

## Para revisar antes de publicar

- Todo lo marcado como "Brief §7" o "Propuesta de Claude" necesita tu OK.
- El rango "10 a 500 personas" ahora aparece dos veces en la página (Nosotros y la pregunta 7) y en la descripción para buscadores.
- Soluciones Analíticas: confirmar que el cliente autoriza aparecer con nombre (el brief registraba que el caso de comunicación interna era confidencial).
- Evidenpsia: confirmar que "tienen la agenda completa" es correcto.
- Ponti: el resultado describe lo que se entregó. Si hay algo observado después del lanzamiento, conviene reemplazarlo.
- La palabra "diagnóstico" sigue en la bajada del método, en Nosotros y en tres respuestas de preguntas frecuentes. La idea de diagnóstico primero se dice como argumento una sola vez, en el método.

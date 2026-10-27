# Brief de rediseño: conducta.com.ar

Documento para Claude Code. Este brief manda sobre cualquier criterio propio, plantilla o skill de diseño. Si algo no está cubierto acá, preguntá antes de decidir.

---

## Cómo usar este documento (Román)

1. Completá la sección "Decisiones abiertas" (marcá una opción en cada una o escribí la tuya).
2. Copiá este archivo a la raíz del repo de la web.
3. Abrí Claude Code en el repo y pegá el prompt de arranque.
4. Aprobá fase por fase. Claude Code no avanza sin tu OK.

### Prompt de arranque (pegar en Claude Code)

```
Vas a rediseñar la landing de Conducta (conducta.com.ar, sitio estático en GitHub + Netlify).

Antes de tocar cualquier archivo, leé completo brief-rediseno-web-conducta.md en la raíz del repo. Ese documento manda sobre cualquier criterio propio, plantilla o skill. Si tenés disponible una skill de diseño frontend, usala solo como apoyo y nunca contra lo que dice el brief.

Trabajá en una rama nueva llamada rediseno. Nunca hagas commits ni push a main.

Ejecutá solo la Fase 0 del brief y frená. Mostrame el inventario y, si alguna decisión de la sección "Decisiones abiertas" no está marcada, preguntame por esa decisión puntual. No avances a la Fase 1 sin mi aprobación explícita.
```

Prompts para las fases siguientes (uno por vez, después de revisar):

```
Aprobado. Seguí con la Fase 1 del brief y frená al terminar con capturas en 375, 768 y 1440 px.
```
```
Aprobado. Seguí con la Fase 2 (copy) y dejame CAMBIOS-COPY.md con el antes y el después de cada texto.
```
```
Aprobado. Seguí con las Fases 3 y 4. Al final subí la rama y pasame el link del deploy preview de Netlify. No mergees a main.
```

---

## Decisiones abiertas (Román completa antes de arrancar)

Cada decisión tiene una recomendación. Claude Code ejecuta solo lo que esté marcado. Si una decisión queda sin marcar, pregunta antes de tocar esa parte y avanza con el resto.

**D1. Hero: qué va como titular.** Hoy el hero muestra el logotipo gigante y una frase debajo. No hay H1 y la frase funciona como tagline.
- [x] A (recomendada). Reemplazar el logotipo por un H1 descriptivo (dice qué hacemos y para quién, sin slogan). El logotipo pasa al cierre de la página, como indica la regla de marca. Opciones de H1 en la sección 7.
- [ ] B. Mantener el logotipo grande en el hero y sumar un H1 descriptivo debajo.

**D2. Sección de Román.** Hoy está en primera persona del singular ("Soy Licenciado...") con el título de menú "Equipo", aunque es una sola persona. La regla de comunicación externa es voz "nosotros" sin nombrar integrantes. Por otro lado, para un decisor, ver quién dirige una consultora boutique es una señal de confianza fuerte.
- [x] A (recomendada). Mantener un bloque "Quién dirige Conducta" en tercera persona, corto, con foto profesional y credenciales verificables. Menú: "Nosotros".
- [ ] B. Mantenerlo en primera persona.
- [ ] C. Sacarlo y dejar solo la voz institucional.
- Mención a campañas políticas en la trayectoria: [ ] mantener [x] sacar (recomendado sacarla: con decisores de pymes puede generar lectura partidaria).

**D3. Método.** La web muestra 3 fases (Diagnóstico, Posicionamiento, Implementación) escritas solo desde marca y ventas. El Método Conducta formalizado tiene 4 fases y la web no lo nombra.
- [x] A (recomendada). Nombrar "Método Conducta" con sus 4 fases (Diagnóstico funcional, Diseño de marco relacional, Arquitectura de decisión, Verificación conductual), cada una con una bajada en lenguaje de decisor que cubra comunicación externa e interna. Textos en la sección 7.
- [ ] B. Mantener 3 fases, reescritas para cubrir los dos frentes. Textos en la sección 7.
- A tener en cuenta: la guía "Tono de Conducta" pide evitar tecnicismos que no sean estrictamente necesarios. "Diseño de marco relacional" y "Arquitectura de decisión" son nombres técnicos. A funciona si la bajada de cada fase los traduce; si preferís que la web no dependa de eso, B es la opción segura.

**D4. Botones (CTA).** La regla de marca dice que el dorado se usa solo en los puntos finales. Hoy el dorado está en botones, números, bordes, íconos, líneas y hovers.
- [x] A (recomendada). Aplicar la regla completa: botón principal en blanco (#F8F9FA) con texto oscuro sobre fondos oscuros, y en oscuro (#0B121E) con texto blanco sobre fondos claros. El dorado queda solo en los puntos.
- [ ] B. Hacer una excepción y mantener el dorado en el botón principal.

**D5. Fondos claros.** Hoy toda la página es azul casi negro. Eso, más las líneas doradas entre secciones, es buena parte de la sensación de encierro.
- [x] A (recomendada). Alternar secciones oscuras (#0B121E), claras (#F8F9FA) y navy (#1C395C). Todo dentro de la paleta.
- [ ] B. Mantener todo oscuro y resolver el aire solo con espaciado.

**D6. Casos.** Hoy hay 5. Todos son de comunicación externa, así que el frente de comunicación interna no tiene ninguna prueba. Pleno es el más débil (un sitio web, que no figura entre los servicios). Ponti cierra con un trámite pendiente del INPI, que se lee como algo sin terminar.
- Cuáles quedan: [x] Evidenpsia [x] Farmacia Lutilsky [ ] Wagner Bros Teck [x] Ponti [x] Pleno
- Caso de comunicación interna (aunque sea anonimizado): [ ] Sí, lo paso yo [x] Todavía no (Román, 27/10/2026: existe un caso, pero por confidencialidad no se puede mencionar, ni siquiera anonimizado. No va en la web.)
- Ponti: [x] Sacar la mención al INPI (recomendado) [ ] Dejarla
- Resultados observables por caso (dato concreto, aunque sea cualitativo y verificable): Román los completa en la sección 7. Claude Code no inventa resultados.

**D7. Credenciales "UBA / B2B / 360°".** "B2B" y "360°" son relleno de plantilla. "UBA, respaldo académico" puede leerse como un aval institucional de la UBA a Conducta.
- [x] A (recomendada). Sacar el bloque. Las credenciales reales (docencia en UBA y Barceló) van en el bloque de dirección, dichas con precisión.
- [ ] B. Reemplazarlo por datos verificables que yo paso.

**D8. Video del hero.**
- [x] A (recomendada). Mantenerlo solo en desktop, comprimido, con una capa más oscura para que el titular se lea perfecto. En mobile y con "reducir movimiento" activado se muestra una imagen fija.
- [ ] B. Sacarlo y usar fondo liso.

**D9. Fila de clientes en el hero.** Mostrar los nombres o logos de clientes debajo del CTA es la señal de confianza más rápida para un decisor.
- [x] Sí, con logos (los paso en SVG o PNG transparente)
- [ ] Sí, solo con nombres en texto
- [ ] No

**D10. Contacto.** Hoy el único canal visible es WhatsApp y el mail está en el footer casi invisible.
- [x] A (recomendada). WhatsApp como canal principal y el mail visible al lado, en la sección de contacto.
- [ ] B. Solo WhatsApp.

**D11. Forma de las cajas.** Decidida por Román el 27/10/2026.
- [x] Layout abierto (sin cajas) + corte a 45° del isotipo en los objetos. Detalle en las secciones 5.1 a 5.3.

---

## 1. Contexto

Conducta es una consultora de comunicación para pymes con base en las ciencias del comportamiento. Trabaja en dos frentes, siempre nombrados en este orden: Comunicación Externa (diagnóstico de marca, posicionamiento, naming, identidad visual, tono de voz) y Comunicación Interna (diagnóstico de patrones de comunicación entre áreas, equipos y niveles; protocolos formales con roles y canales definidos).

Público objetivo: dueños, gerentes generales y directores de marketing de pymes de 10 a 500 personas, en países de habla hispana. No apuntamos a emprendedores, diseñadores, startups ni instituciones.

La web se armó en enero de 2026 y se fue parchando. El resultado se ve desordenado, encerrado y menos profesional de lo que Conducta es.

Stack actual: un solo index.html con CSS y JS inline, assets en la raíz, deploy en Netlify desde GitHub, dominio conducta.com.ar, mail somos@conducta.com.ar, WhatsApp Business +54 9 2954 31-5270.

## 2. Diagnóstico de la versión actual

Relevado sobre el sitio en producción (desktop 1440 px y mobile 375 px) y sobre el código.

### 2.1 Lo que frena la conversión

- **No se entiende rápido qué hacemos.** El hero no tiene H1. Muestra el logotipo y la frase "Comunicación de pymes, con ciencias del comportamiento.", que no dice qué problema resolvemos ni qué entregamos.
- **El orden de las secciones es el inverso al que necesita un decisor.** Hoy va: quiénes somos, Román, método, soluciones, casos. Un decisor primero quiere saber qué le resolvemos, después ver pruebas y recién después cómo trabajamos y quiénes somos.
- **Los servicios están escondidos.** Las dos soluciones están en acordeones cerrados. Un decisor escanea y no hace clic para descubrir la oferta principal.
- **Los casos están escondidos.** El nombre del cliente y la descripción solo aparecen al pasar el mouse. En mobile solo aparecen si se toca la tarjeta, cosa que casi nadie hace. Lo que se ve son fotos rotando sin contexto.
- **Los casos no muestran resultados.** La web promete "resultados observables y verificables" y los casos cierran con frases como "La clientela reconoció y valoró el cambio". Esa contradicción le resta seriedad.
- **El frente de comunicación interna no tiene prueba.** Los 5 casos son de comunicación externa. El método, la FAQ "¿Qué necesitamos de vos?" y la FAQ sobre identidad visual también están escritas solo desde marca.
- **La idea "diagnóstico primero" se repite unas siete veces** (Qué es, Román, Método, Soluciones y tres FAQ). Repetida tanto pierde fuerza y suena a relleno.
- **La foto de Román no carga** (roman-foto.jpg devuelve 404). El bloque se ve como un rectángulo vacío.
- **La vista previa al compartir el link no tiene imagen** (og-image.jpg devuelve 404). Cada vez que la web se comparte por WhatsApp o LinkedIn sale sin imagen.

### 2.2 Incumplimientos de las reglas de marca y copy

- Dorado usado en botones, números del método, credenciales, íconos +, líneas, bordes, hovers del menú y una línea decorativa en el hero. La regla es: dorado solo en los puntos finales.
- Divisores: línea dorada arriba de cada sección, arriba de las credenciales y arriba del footer. La regla es sin divisores.
- Tagline debajo del logo en el hero y frases de relleno debajo de títulos ("Todo lo que quizás te preguntes antes de escribirnos.").
- Logotipo al inicio (hero) e isotipo al final (footer). La regla es la inversa: el isotipo puede ir en cualquier lugar y el logotipo va al cierre.
- Rayas largas (—) en casi todos los párrafos. Regla: sin rayas, usar paréntesis.
- "puertas afuera y puertas adentro" aparece en la sección de Román. Es un encuadre interno, no va en copy externo.
- Construcciones del tipo "No X. Y." repetidas ("No ejecutamos sin diagnóstico.", "No especulamos sobre lo que funciona. Lo diagnosticamos...", "No cotizamos sin diagnóstico previo.").
- Primera persona del singular en la sección de Román y menú "Equipo" con una sola persona (afirmación de escala que no se puede verificar).
- Credenciales de plantilla ("B2B", "360°").

### 2.3 Por qué se siente desordenada y sin aire (con datos)

- **Tipografía sin sistema:** 19 combinaciones distintas de tamaño y peso. Los H2 de sección aparecen en 4 tamaños distintos (42, 46, 63 y 66 px a 1440 px de ancho).
- **Grises sin sistema:** 8 opacidades distintas de blanco para texto (del 25% al 75%). Tres de ellas (25%, 40% y 45%) no llegan al contraste mínimo AA para texto chico.
- **Sin contenedor:** no hay ancho máximo. El contenido se estira de borde a borde con 60 px de margen fijo, así que en pantallas grandes nada queda anclado.
- **Cada sección con su propia lógica de alineación:** split 50/50, encabezados con anchos máximos de 640, 380, 560 px o ninguno, FAQ en dos columnas. El ojo no encuentra una grilla común.
- **Tarjetas pegadas:** separación de 2 px entre tarjetas en método, soluciones, casos y FAQ. Se ve como una cuadrícula apretada.
- **Todo cuadrado:** radio 0 en todas las cajas.
- **Todo oscuro y con líneas:** un solo color de fondo en toda la página, cortado por líneas doradas. No hay ritmo.
- **Decoración que suma ruido:** triángulos navy en el hero y en soluciones, línea dorada diagonal, 5 tarjetas de casos cambiando de foto cada 3,5 segundos al mismo tiempo, y animación de entrada en cada bloque.
- **Las dos primeras secciones se pegan:** "Qué es Conducta" y "Román" comparten estructura y la segunda no tiene separación, así que se leen como un solo bloque largo.
- **Mobile:** la página mide 10,5 pantallas. Los bloques de imagen de las secciones split ocupan 280 px solo para mostrar un título.

### 2.4 Problemas técnicos

- Peso: las fotos de casos suman unos 40 MB (pleno-2.jpg pesa 9,5 MB; evidenpsia-3, ponti-2 y pleno-1 pasan los 4,9 MB). El video del hero pesa 6,4 MB. En datos móviles la web tarda mucho en cargar.
- Calidad despareja: las fotos de Farmacia Lutilsky y Wagner pesan entre 30 y 100 KB y las demás varios MB.
- Fotos de casos como background-image: sin texto alternativo y sin carga diferida.
- Logos en PNG con mix-blend-mode: screen para disimular el fondo (conviene SVG).
- Acordeones armados con div y click: no son accesibles por teclado ni anuncian si están abiertos.
- JSON-LD con teléfono vacío, sin logo, sin redes y sin fundador. Meta keywords (no sirven).
- CSS muerto de versiones anteriores (.accordion-body-inner, .portfolio-outer-info, .portfolio-item-image).
- Sin soporte para "reducir movimiento" del sistema.
- Prefill de WhatsApp con corchetes ("Soy [nombre], de [empresa]") que la persona tiene que editar a mano.

## 3. Objetivo y criterios de éxito

Objetivo único de la landing: que un decisor de una pyme entienda en menos de 10 segundos qué hace Conducta, para quién y cómo empezar, y que salga convencido de que es una consultora seria.

La página está bien resuelta si:
- El H1 y el párrafo del hero explican qué hacemos, para quién y en qué dos frentes, sin slogan.
- Los dos servicios y sus entregables se leen sin hacer clic.
- Los casos muestran cliente, situación, intervención y resultado sin hover.
- Hay un solo CTA, con el mismo nombre en toda la página, y siempre a la vista en el menú.
- La página respira: grilla común, espaciado generoso y ritmo de fondos.
- Se cumplen todas las reglas de la sección 4.
- Lighthouse mobile: Performance 90 o más; Accesibilidad, Buenas prácticas y SEO 95 o más.

## 4. Reglas no negociables

### Marca
- Tipografía: Helvetica (la web usa Helvetica Neue LT Pro de Adobe Fonts, kit ya cargado: https://use.typekit.net/mdg5mik.css). Solo Regular (400) y Bold (700). Ninguna otra familia.
- Colores: #0B121E (oscuro principal), #1C395C (navy), #F8F9FA (blanco), #AF8C53 (dorado). Se permiten variaciones de opacidad de estos colores. No se agregan colores nuevos.
- El dorado se usa únicamente para el punto final de los títulos (span.dot). Nunca en botones, números, bordes, íconos, líneas, hovers ni en el logotipo.
- Sin taglines ni divisores. La separación entre secciones se resuelve con espacio y cambio de fondo.
- El isotipo puede ir en cualquier lugar (menú). El logotipo va al cierre (footer).

### Copy
- Tono (guía "Tono de Conducta"): sobrio, pragmático y académico-técnico. Basado en hechos y en análisis, directo y orientado a la solución. Sin tecnicismos que no sean estrictamente necesarios: la claridad va primero. Ejes conceptuales: diagnóstico, conducta, estrategia, arquitectura institucional, evidencia y pragmatismo.
- Voz institucional en "nosotros". Español rioplatense con voseo ("agendá", "escribinos").
- Siempre "ciencias del comportamiento" (nunca "análisis de la conducta" ni "análisis del comportamiento").
- Siempre "pymes" en minúscula.
- Cuando se habla del método o de la consultora en general, se cubren los dos frentes: comunicación externa e interna, en ese orden.
- Prohibido: rayas largas (—), lenguaje motivacional, superlativos, afirmaciones de escala que no se puedan verificar, lenguaje inclusivo, mayúsculas como énfasis, la construcción "No es X, es Y" y sus variantes, la frase "puertas afuera y puertas adentro", y jerga técnica interna (ABA, RFT, MFM, TCO, IAR, ICR, PAF, PBIF, PIC).
- Mayúscula inicial normal (oración), nunca títulos en mayúsculas.
- Negrita solo para resaltar, con moderación.
- Claude Code no inventa datos, resultados, clientes ni credenciales. Si falta un dato, deja un marcador visible [COMPLETAR: ...] y lo lista en el reporte de la fase.

## 5. Dirección de diseño

### 5.1 Concepto: suizo institucional

Helvetica es la marca, así que la dirección natural es el estilo tipográfico suizo llevado a una consultora seria: grilla estricta, alineación a la izquierda con bandera a la derecha, títulos grandes en Bold con interletrado ajustado, mucho espacio en blanco y casi nada de decoración. El tono de referencia es "arquitectura institucional": orden, estructura y pragmatismo.

La web tiene dos firmas visuales, y las dos salen del logo: el punto dorado del logotipo al final de cada título y la esquina cortada a 45° del isotipo. Todo lo demás queda quieto y disciplinado para que esas dos cosas se noten.

**Forma de las cajas (decidida):**
- **Layout abierto.** La mayor parte del contenido va sin cajas: textos, listas, pasos del método, preguntas frecuentes. Lo ordenan la grilla y el espacio, no los recuadros. Eso es lo que da aire.
- **Corte a 45° del isotipo en los objetos.** El isotipo de Conducta es un rectángulo vertical con la esquina inferior derecha cortada a 45°. Esa misma forma se aplica solo a los pocos objetos que existen: fotos de casos, foto del bloque de dirección, tarjetas de servicios, botones y el bloque del hero.
- Siempre la misma esquina (inferior derecha) y siempre a 45°. Nunca otra esquina, nunca dos esquinas, nunca otro ángulo.
- El tamaño del corte depende de la jerarquía del objeto (tokens en 5.2). Es fijo, no proporcional al tamaño del objeto.
- Ninguna esquina redondeada en toda la página. Nada de botones píldora.
- El corte nunca lleva color propio: es la forma del objeto, no un adorno. Nunca dorado.
- El corte grande aparece una sola vez: en el hero (ver sección 6). Reemplaza al triángulo navy y a la línea dorada decorativa de la versión actual, que eran un eco suelto de esta misma forma.

Evitar los recursos que hoy delatan una web hecha con IA: etiquetas en mayúsculas arriba de cada título, flechas agregadas a todos los botones, separadores con punto medio (A · B · C), animación de entrada en cada bloque, todas las tarjetas iguales con la misma sombra, gradientes decorativos.

### 5.2 Tokens

```css
:root {
  /* Color */
  --ink: #0B121E;
  --navy: #1C395C;
  --paper: #F8F9FA;
  --gold: #AF8C53;            /* solo .dot */

  /* Texto sobre oscuro (ink / navy) */
  --on-dark-1: #F8F9FA;
  --on-dark-2: rgba(248,249,250,.74);
  --on-dark-3: rgba(248,249,250,.56); /* solo texto de 16 px o más */
  --line-dark: rgba(248,249,250,.10);
  --surface-dark: rgba(248,249,250,.04);

  /* Texto sobre claro (paper) */
  --on-light-1: #0B121E;
  --on-light-2: rgba(11,18,30,.72);
  --on-light-3: rgba(11,18,30,.56);
  --line-light: rgba(11,18,30,.10);
  --surface-light: rgba(28,57,92,.05);

  /* Tipografía (6 pasos, nada fuera de esta escala) */
  --fs-display: clamp(2.75rem, 5.6vw, 5rem);    /* H1 */
  --fs-h2: clamp(2.125rem, 3.8vw, 3.5rem);
  --fs-h3: clamp(1.25rem, 1.6vw, 1.5rem);
  --fs-lead: clamp(1.125rem, 1.4vw, 1.3125rem);
  --fs-body: 1.0625rem;                          /* 17 px */
  --fs-small: 0.875rem;                          /* 14 px */
  --lh-tight: 1.04;   /* display y H2 */
  --lh-snug: 1.25;    /* H3 */
  --lh-body: 1.62;
  --tracking-display: -0.03em;
  --tracking-h2: -0.022em;
  --tracking-h3: -0.01em;

  /* Layout */
  --container: 1240px;
  --gutter: clamp(20px, 5vw, 64px);
  --section-y: clamp(96px, 11vw, 168px);
  --grid-gap: clamp(16px, 2vw, 28px);
  --measure: 62ch;     /* ancho máximo de párrafos */

  /* Corte a 45° (esquina inferior derecha, forma del isotipo) */
  --cut-hero: clamp(64px, 9vw, 144px); /* solo el bloque del hero */
  --cut-xl: clamp(28px, 3vw, 44px);    /* imágenes grandes: caso destacado, foto de dirección */
  --cut-lg: clamp(20px, 2vw, 28px);    /* imágenes de casos en grilla, tarjetas de servicios */
  --cut-sm: 10px;                      /* botones */
  --radius: 0;                         /* no se usa border-radius en ningún elemento */

  /* Motion */
  --ease: cubic-bezier(.2,.7,.2,1);
  --dur: 480ms;
}
```

Reglas de uso:
- Todo el contenido vive dentro de un contenedor de max-width var(--container) con padding lateral var(--gutter). Grilla de 12 columnas.
- Todas las secciones usan el mismo padding vertical var(--section-y). Ninguna sección define su propio espaciado.
- Párrafos con max-width var(--measure).
- H2 de todas las secciones con el mismo tamaño y el mismo margen inferior. Un solo estilo de H2 para toda la página.
- Sin sombras y sin bordes en objetos cortados. clip-path recorta bordes, sombras y outlines, así que todo objeto con corte es una superficie rellena (imagen, --surface-* o color pleno), nunca un recuadro con línea.

Implementación del corte (una sola utilidad, reutilizada en todo el sitio):

```css
.cut {
  --c: var(--cut-lg);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--c)), calc(100% - var(--c)) 100%, 0 100%);
}
.cut--xl   { --c: var(--cut-xl); }
.cut--sm   { --c: var(--cut-sm); }
.cut--hero { --c: var(--cut-hero); }
```

Foco de teclado en objetos cortados: el anillo de foco tiene que seguir la forma del corte. Envolver el elemento en un contenedor sin clip-path y dibujar el anillo con un pseudo-elemento detrás, con el mismo polígono, 3 px más grande en cada lado y el corte 1,25 px más grande, en --on-dark-1 sobre fondos oscuros y --on-light-1 sobre claros. Verificarlo con teclado en la Fase 4.

### 5.3 Componentes

- **Botón principal:** rectangular con corte .cut--sm, alto 52 px, padding 0 28px, 16 px Bold, sin mayúsculas ni interletrado extra, sin flecha. Sobre oscuro: fondo --paper y texto --ink. Sobre claro: fondo --ink y texto --paper. Hover: leve cambio de opacidad. Foco con anillo en forma de corte (ver arriba). Versión compacta para el menú: alto 44 px.
- **Enlace secundario:** texto subrayado con offset, mismo color que el texto principal de la sección. Sin caja.
- **Etiqueta de frente** ("Comunicación externa" / "Comunicación interna"): texto en --fs-small Regular, color --on-*-2, sin caja ni borde, sin mayúsculas. Va arriba del nombre del cliente en cada caso. Se usa solo en casos porque da información.
- **Tarjeta de servicio:** superficie rellena (--surface-*) con corte .cut (--cut-lg), padding clamp(24px, 3vw, 40px). Es el único tipo de tarjeta de la página.
- **Imagen:** contenedor con corte (.cut--xl en el caso destacado y en la foto de dirección; .cut en la grilla de casos), object-fit: cover.
- **Preguntas frecuentes:** layout abierto, sin cajas ni líneas. Cada pregunta es un button real con aria-expanded y aria-controls, separado del siguiente por espacio (24 a 32 px). Ícono + que rota a ×, en el color del texto (no dorado). Varias preguntas pueden quedar abiertas a la vez.
- **Pasos del método:** sin cajas. Número, nombre y descripción alineados a la grilla.
- **Título con punto:** todos los H1 y H2 terminan en `<span class="dot">.</span>`, que es lo único dorado de la página.

### 5.4 Movimiento

- Un único momento orquestado: la entrada del hero al cargar (titular, párrafo y CTA en secuencia, 600 ms en total).
- El resto de la página sin animaciones de entrada.
- Respuesta a acciones del usuario (abrir FAQ, hover de botón): sí, sutil.
- Sin carruseles automáticos.
- Con prefers-reduced-motion activado: nada se anima y el video no se reproduce.
- Ronda 2 (Román, 27/10/2026): se suman la aparición de los bloques al hacer scroll y el método interactivo (una fase por vez). Excepción a los dos primeros puntos. También pidió invertir el orden de las tarjetas de Qué resolvemos (interna primero), sacar Pleno y sumar el caso Soluciones Analíticas (comunicación interna). Detalle en CAMBIOS-COPY.md.

## 6. Arquitectura de la página

Orden nuevo, pensado para el recorrido de un decisor: qué me resuelven, pruebas, cómo trabajan, quiénes son, dudas, contacto.

| # | Sección | Fondo (si D5 = A) | Ancla |
|---|---|---|---|
| 0 | Menú | transparente, luego ink con blur | |
| 1 | Hero | ink | #inicio |
| 2 | Soluciones | paper | #soluciones |
| 3 | Casos | ink | #casos |
| 4 | Método | navy | #metodo |
| 5 | Nosotros (Conducta + dirección) | paper | #nosotros |
| 6 | Preguntas frecuentes | paper (continúa) | #preguntas |
| 7 | Contacto | ink | #contacto |
| 8 | Footer | ink | |

### 0. Menú
- Izquierda: isotipo (SVG si existe).
- Centro o derecha: Soluciones, Casos, Método, Nosotros, Preguntas frecuentes.
- Derecha: botón "Agendá una consulta" (versión compacta, 44 px de alto).
- Íconos de redes fuera del menú (van al footer).
- Mobile: isotipo, botón compacto y menú hamburguesa (button con aria-expanded). Panel a pantalla completa con los mismos 5 links y el CTA.

### 1. Hero
- Alto mínimo 88vh. Contenido alineado a la izquierda y abajo, ocupando unas 9 de 12 columnas.
- H1 descriptivo (ver opciones en la sección 7), tamaño --fs-display.
- Párrafo lead de 2 oraciones máximo, --fs-lead, color --on-dark-2, ancho 6 columnas.
- Fila de acciones: botón principal "Agendá una consulta" y enlace secundario "Ver casos" (ancla a #casos). Debajo, en --fs-small: "Por WhatsApp. La primera consulta no tiene costo."
- Si D9 = sí: fila de clientes al pie del hero, en blanco con 60% de opacidad, sin etiqueta en mayúsculas.
- Fondo: video según D8, con capa ink de al menos 70% de opacidad. Se eliminan los triángulos y la línea dorada.
- Forma: el bloque del hero lleva el corte grande (.cut--hero) en su esquina inferior derecha, recortado contra la sección siguiente. Es el único momento en que el corte aparece a escala de página: el hero entero tiene la forma del isotipo. Como Soluciones va en fondo claro (D5 = A), el corte se lee nítido. Si D5 = B (todo oscuro), el corte del hero se ve contra ink y pierde fuerza: en ese caso, preguntar antes de implementarlo.
- Cuidar que el corte no tape contenido: la fila de clientes y el CTA quedan fuera de la zona cortada en todos los anchos.

### 2. Soluciones
- H2: "Qué resolvemos." (elegido por Román el 27/10/2026).
- Una oración de bajada, como mucho.
- Dos tarjetas grandes lado a lado (una debajo de la otra en mobile), abiertas, sin acordeón. Mismo alto.
- Cada tarjeta: título (H3), "Cuándo nos llaman" (3 situaciones en lenguaje de decisor), "Qué entregamos" (lista de entregables) y un enlace al CTA.
- Contenido en la sección 7.

### 3. Casos
- H2: "Casos."
- Caso destacado (por defecto Evidenpsia, el de resultado más claro) en formato ancho: imagen a la izquierda (7 columnas, corte .cut--xl), texto a la derecha.
- El resto en grilla de 3 columnas (1 en mobile): imagen arriba con corte .cut y proporción 4:3, texto abajo sin caja.
- Cada caso muestra siempre, sin hover: etiqueta de frente, nombre del cliente (H3), situación, qué hicimos y resultado (este último en Bold o como línea separada).
- Una sola imagen por caso, la mejor. Sin rotación automática.
- Si hay caso de comunicación interna sin imágenes de marca, se resuelve con una tarjeta de texto en fondo --surface-dark, con corte .cut y la misma estructura.

### 4. Método
- H2: "Método Conducta." (si D3 = A) o "Cómo trabajamos." (si D3 = B).
- Una oración de bajada que diga una sola vez la idea de diagnóstico primero.
- Pasos en fila horizontal (4 o 3 columnas; en mobile, uno debajo del otro). Acá la numeración sí corresponde porque es una secuencia: números grandes en --on-dark-3, nombre del paso en H3, descripción en --fs-body.
- Sin cajas alrededor de cada paso: el espacio y la grilla los separan.

### 5. Nosotros
- Dos columnas.
- Izquierda: H2 "Quiénes somos." y el párrafo institucional (sección 7).
- Derecha (si D2 = A o B): foto de Román con corte .cut--xl y proporción 4:5 (la misma proporción vertical del isotipo), nombre, rol ("Fundador y director") y lista corta de credenciales.
- En mobile: texto, después foto y credenciales.

### 6. Preguntas frecuentes
- Dos columnas: izquierda H2 "Preguntas frecuentes." (sin frase de relleno debajo); derecha, acordeón.
- Preguntas en la sección 7.

### 7. Contacto
- Bloque grande, alineado a la izquierda.
- H2: "Hablemos de tu pyme."
- Párrafo: ver sección 7.
- Botón principal "Agendá una consulta" (WhatsApp) y, si D10 = A, el mail visible como enlace secundario (somos@conducta.com.ar).

### 8. Footer
- Logotipo (cierre de la pieza, según la regla de marca).
- Links de anclas, Instagram y LinkedIn (íconos de línea, color --on-dark-2), mail.
- "© 2026 Conducta." en --fs-small y --on-dark-3.

## 7. Copy

Todo lo que dice "propuesta" necesita el OK de Román antes de publicarse. Claude Code registra cada texto nuevo o modificado en CAMBIOS-COPY.md con el antes y el después.

### Hero (D1). Opciones de H1 (Román elige una o escribe otra)
- A. "Consultora de comunicación para pymes."
- B. "Resolvemos problemas de comunicación en pymes."
- C. "Comunicación externa e interna para pymes."

Elegido por Román (27/10/2026): "Comunicación interna y externa para pymes." Confirmado por Román ese mismo día: el H1 va con este orden, como excepción a la regla de orden de la sección 4. En el resto de la página se mantiene el orden externa, después interna.

Lead (propuesta): "Ordenamos cómo tu empresa se comunica con sus clientes y cómo se comunican tus equipos entre sí, con base en las ciencias del comportamiento. Trabajamos con pymes de 10 a 500 personas."

Línea bajo el CTA: "Por WhatsApp. La primera consulta no tiene costo."

### Soluciones (propuesta, armada con el copy actual)

**Comunicación externa.**
Cuándo nos llaman:
- La marca no refleja el nivel real de la empresa.
- Las consultas no se convierten en ventas.
- Hay que lanzar una marca nueva o rediseñar la actual.

Qué entregamos:
- Diagnóstico de comunicación externa (digital, identidad visual y proceso de ventas)
- Posicionamiento
- Naming
- Identidad visual
- Tono de voz
- Estrategia de redes

**Comunicación interna.**
Cuándo nos llaman:
- La información se pierde entre áreas.
- Los mismos conflictos se repiten entre equipos o niveles.
- No está claro quién comunica qué, ni por qué canal.

Qué entregamos:
- Diagnóstico de patrones de comunicación entre áreas, equipos y niveles
- Distinción entre fricciones estructurales e interpersonales
- Protocolos formales de comunicación
- Documentos operativos con roles y canales definidos

### Casos (reescritura del copy actual, sin rayas)

Formato por caso: Frente / Cliente / Situación / Qué hicimos / Resultado.

**Evidenpsia** (Comunicación externa)
- Situación: Las profesionales no conseguían pacientes y estaban desmotivadas con su propio proyecto.
- Qué hicimos: Rebranding completo (logo, paleta, estrategia de redes y hoja de ruta) para que la marca representara lo que realmente eran y pudieran cobrar lo que su trabajo vale.
- Resultado: Hoy consiguen los pacientes que buscaban, al valor que buscaban, y tienen la agenda completa.

**Farmacia Lutilsky** (Comunicación externa)
- Situación: Una farmacia con más de 40 años de trayectoria atravesaba una caída sostenida en ventas y una migración de clientes hacia productos de menor margen.
- Qué hicimos: A partir de un diagnóstico estratégico, rediseñamos su identidad visual completa (logo, sistema visual e isotipo heráldico).
- Resultado: [COMPLETAR: dato observable. Hoy dice "La clientela reconoció y valoró el cambio".]

**Wagner Bros Teck** (Comunicación externa)
- Situación: Una empresa de autopartes que nunca había tenido logo ni marca quería renovarse, sin tener claro por dónde empezar.
- Qué hicimos: El diagnóstico mostró que la clientela ya la reconocía por el apellido de su dueño. Construimos la identidad sobre ese reconocimiento: logo, isotipo, variables de marca y sistema de aplicaciones.
- Resultado: [COMPLETAR]

**Ponti** (Comunicación externa)
- Situación: Una marca nueva que se preparaba para salir al mercado.
- Qué hicimos: Naming, logo, paleta, tono de voz y estrategia de redes.
- Resultado: Identidad completa, lista para el lanzamiento. [Sin la mención al INPI si D6 lo indica.]

**Pleno** (si queda): "Diseñamos y desarrollamos el sitio web de Pleno, aplicando su sistema de identidad visual." [COMPLETAR situación y resultado o sacar el caso.]

**Caso de comunicación interna** (si D6 = sí): [COMPLETAR por Román. Puede ir anonimizado, por ejemplo "Empresa de servicios, 80 personas".]

### Método

Bajada (propuesta): "Cada proyecto pasa por estas fases, en este orden. Ninguna decisión de marca, mensaje o protocolo se toma sin la anterior."

**Opción A (D3 = A): Método Conducta, 4 fases.**
1. Diagnóstico funcional. Identificamos qué conductas produce hoy tu comunicación (en clientes o dentro de los equipos) y qué las está causando.
2. Diseño de marco relacional. Definimos qué tiene que asociar la gente con tu marca o con tu comunicación interna para responder como necesitás.
3. Arquitectura de decisión. Diseñamos piezas, canales y protocolos para que la conducta buscada sea la más fácil de elegir.
4. Verificación conductual. Medimos si las conductas cambiaron y ajustamos lo que no funcionó.

**Opción B (D3 = B): 3 fases.**
1. Diagnóstico. Analizamos cómo funciona hoy la comunicación con tus clientes o entre tus áreas: qué genera confianza o acuerdo, qué genera fricción, y por qué.
2. Diseño. Definimos qué tiene que comunicar tu marca o cómo tiene que circular la información para producir las conductas que buscás.
3. Implementación. Bajamos esas decisiones a piezas, canales y protocolos concretos, y verificamos que funcionen.

### Nosotros

Párrafo institucional (propuesta): "Somos una consultora de comunicación para pymes. Aplicamos las ciencias del comportamiento a dos frentes: cómo se comunica la empresa con sus clientes y cómo se comunican sus equipos entre sí. Cada decisión de marca, mensaje o protocolo parte de un diagnóstico y apunta a resultados que se pueden observar."

Segundo párrafo (propuesta): "Trabajamos con pymes de 10 a 500 personas, en cualquier país de habla hispana. Es el tamaño en el que ya hay estructura para implementar lo que entregamos y todavía no hay un equipo propio resolviendo esto."

Bloque de dirección (si D2 = A, tercera persona, propuesta):
- Román Masimelli. Fundador y director.
- Licenciado en Psicología (Universidad de Buenos Aires).
- Docente en la Facultad de Psicología de la UBA (Psicología Social y Teoría y Técnica de Grupos).
- Jefe de Trabajos Prácticos de Psicoestadística en Fundación Barceló.
- Experiencia en comunicación institucional en la Secretaría Académica de la UBA. [Campañas políticas según D2.]

Si D2 = B, se mantiene el texto actual en primera persona, corregido: sin rayas y sin "puertas afuera y puertas adentro".

### Preguntas frecuentes (propuesta)

1. ¿Por qué no hay precios en esta web?
   Cotizamos después del diagnóstico, porque el costo depende del problema real de cada empresa. Lo definimos después de la primera conversación.
2. ¿Qué pasa en la consulta inicial?
   [COMPLETAR por Román. Debe aclarar que no tiene costo y qué se lleva el cliente de esa conversación.]
3. ¿Cómo empieza un proyecto?
   Con un diagnóstico. Antes de proponer un servicio, entendemos el problema real, que a veces no es el que se planteó al principio.
4. ¿Qué necesitamos de vos para arrancar?
   Depende del frente. En comunicación externa, los materiales de marca que existan (logos, manuales, accesos). En comunicación interna, acceso a las personas y a los canales involucrados. Con eso empieza el diagnóstico.
5. ¿Hacen solo diseño o también estrategia?
   Las dos cosas, en ese orden. Primero definimos qué tiene que lograr la comunicación y después la diseñamos.
6. ¿Trabajan con empresas fuera de Argentina?
   Sí, con pymes de cualquier país de habla hispana. La mayor parte del proceso se coordina de forma remota.
7. ¿Con qué tamaño de empresas trabajan?
   Con pymes de 10 a 500 personas.

(Si el segundo párrafo de Nosotros queda, la respuesta 7 queda corta para no repetirlo.)

### Contacto (propuesta)
- H2: "Hablemos de tu pyme."
- Párrafo: "Contanos qué está pasando en tu empresa. La primera consulta no tiene costo y te decimos con claridad si podemos ayudarte."
- Botón: "Agendá una consulta".
- Mail visible (si D10 = A).

### WhatsApp
Prefill nuevo para todos los botones: "Hola, quiero coordinar una consulta inicial para mi empresa."
URL: https://wa.me/5492954315270?text= + el texto codificado.

## 8. Técnico

### Estructura
- Sitio estático, sin frameworks ni paso de build obligatorio. Separar en index.html, /assets/css/styles.css y /assets/js/main.js. Mantener en la raíz los favicons y los archivos que Netlify ya sirve.
- CSS ordenado por capas: tokens, base, layout, componentes, secciones. Clases con nombres claros. Sin estilos inline. Borrar todo el CSS muerto.
- JS mínimo: menú, scroll del menú, acordeón accesible, entrada del hero.

### Imágenes y video
- Convertir todas las fotos a WebP (y AVIF opcional) con sharp desde npm. Dos anchos por imagen (800 y 1600 px). Objetivo: menos de 250 KB por archivo.
- Usar `<picture>` o `<img>` con srcset, sizes, width, height, alt descriptivo, loading="lazy" y decoding="async" (excepto lo que esté en el primer pantallazo).
- Video del hero (si D8 = A): recomprimir con ffmpeg a 720p, H.264, sin audio, -crf 28 -preset veryfast, objetivo de 2,5 MB o menos. Atributos preload="metadata", poster en WebP. No cargarlo en mobile ni con reduced-motion.
- Logotipo e isotipo: Román va a copiar a /assets/brand/ los archivos oficiales, que son PNG con transparencia real: logoblanco.png y Conducta Principal Negro.png (logotipo, 4092 x 707 px), isotipoblanco.png e Isotipo Negro.png (isotipo, 1799 x 2409 px). Son enormes para web: exportar versiones al doble del tamaño en que se muestran (por ejemplo, isotipo del menú a 72 px de alto y logotipo del footer a 64 px de alto) en PNG optimizado y WebP. Versión blanca sobre fondos oscuros y navy; versión negra sobre fondos claros. Sacar todo mix-blend-mode. Si en el repo aparece un SVG oficial, tiene prioridad.
- og-image.jpg: hoy da 404. Crear una de 1200 x 630 px: fondo #0B121E, isotipo, el H1 elegido en Helvetica Bold blanco con el punto dorado. Generarla con un HTML y una captura de Playwright. Mostrársela a Román antes de publicarla.
- roman-foto.jpg: hoy da 404. No reemplazar con un placeholder genérico. Dejar el espacio preparado y reportar que falta la foto.

### SEO y metadatos
- Un solo H1. Jerarquía H2 y H3 correcta.
- lang="es-AR".
- Revisar title y description con las reglas de copy (sin rayas). Eliminar meta keywords.
- JSON-LD ProfessionalService completo: name, description, url, logo, image, email, telephone (+54 9 2954 31-5270), address, areaServed, sameAs (Instagram y LinkedIn) y founder (Person), este último solo si D2 lo mantiene.
- Verificar que existan sitemap.xml y robots.txt. Si no existen, crearlos.
- Verificar que existan todos los favicons referenciados.

### Accesibilidad
- Contraste AA en todo el texto (con los tokens de la sección 5.2 se cumple; no inventar opacidades nuevas).
- Foco visible en todos los elementos interactivos.
- Acordeones y menú con button, aria-expanded y aria-controls.
- Enlace "Saltar al contenido".
- prefers-reduced-motion respetado.
- Los enlaces que abren WhatsApp o redes avisan que abren en otra pestaña (texto para lectores de pantalla).

### Netlify
- Agregar _headers con caché larga para /assets/*.
- No tocar la configuración de dominio ni el email.

## 9. Proceso con aprobaciones

Una fase por vez. Al cerrar cada fase, Claude Code frena, muestra lo hecho y espera el OK.

**Fase 0. Relevamiento.**
Leer el brief completo. Crear la rama rediseno. Listar archivos del repo, assets con su peso y cuáles faltan (404). Revisar qué decisiones están marcadas. Reportar y preguntar solo por las decisiones sin marcar.

**Fase 1. Sistema y estructura.**
Implementar tokens, componentes y el nuevo orden de secciones, usando el copy actual corregido solo por reglas (sin rayas, sin frases prohibidas). Levantar un servidor local y sacar capturas de página completa con Playwright en 375, 768 y 1440 px. Hacer una autocrítica breve de las capturas contra la sección 3 y corregir antes de mostrar.

**Fase 2. Copy.**
Aplicar el copy de la sección 7 según las decisiones. Crear CAMBIOS-COPY.md con cada texto modificado (antes y después) y la lista de [COMPLETAR] pendientes.

**Fase 3. Assets, rendimiento, SEO y accesibilidad.**
Todo lo de la sección 8.

**Fase 4. QA y publicación en preview.**
Correr el checklist de la sección 10. Subir la rama y pasar el link del deploy preview de Netlify. No mergear a main sin aprobación explícita.

## 10. Checklist de QA

- [ ] La búsqueda de "—" en index.html no devuelve resultados.
- [ ] La búsqueda de "puertas afuera" no devuelve resultados.
- [ ] var(--gold) o #AF8C53 solo aparece en la regla de .dot.
- [ ] Ningún border-top ni border-bottom funciona como divisor entre secciones.
- [ ] Todas las secciones usan el mismo padding vertical y el mismo contenedor.
- [ ] Hay un solo estilo de H2 en toda la página.
- [ ] Ningún tamaño de fuente fuera de la escala de 6 pasos.
- [ ] No hay ningún border-radius distinto de 0 en el CSS.
- [ ] El corte solo aparece en hero, imágenes, tarjetas de servicios y botones; siempre en la esquina inferior derecha, siempre a 45° y siempre con los tokens --cut-*.
- [ ] Ningún objeto cortado tiene borde, sombra ni outline recortado; el foco de teclado sigue la forma del corte.
- [ ] Textos, pasos del método y preguntas frecuentes sin cajas.
- [ ] El logotipo aparece solo en el footer (si D1 = A).
- [ ] Servicios y casos se leen completos sin hover ni clic.
- [ ] El CTA dice lo mismo en toda la página y abre WhatsApp con el prefill nuevo.
- [ ] Sin scroll horizontal en 320, 375, 768, 1024, 1440 y 1920 px.
- [ ] Navegación completa con teclado (menú, acordeones, CTA).
- [ ] Con reduced-motion no hay animaciones ni video.
- [ ] Ninguna imagen supera los 300 KB. El video pesa 2,5 MB o menos.
- [ ] og-image y todos los favicons responden 200.
- [ ] Lighthouse mobile: Performance 90 o más; Accesibilidad, Buenas prácticas y SEO 95 o más.
- [ ] Vista previa del link revisada (por ejemplo con el validador de LinkedIn Post Inspector).
- [ ] Todos los [COMPLETAR] listados en el reporte final.

## 11. Lo que tiene que proveer Román

- Foto profesional para el bloque de dirección (vertical, buena luz, fondo neutro).
- Los 4 PNG oficiales de logotipo e isotipo (están en el proyecto de Conducta) copiados al repo en /assets/brand/. SVG si lo tenés.
- Resultados observables de cada caso que quede.
- Caso de comunicación interna, si va.
- Logos de clientes, si D9 = sí con logos.
- Respuesta para "¿Qué pasa en la consulta inicial?".
- H1 elegido.

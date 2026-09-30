# 📔 Diario de desarrollo

En este diario documentaré mi proceso de desarrollo del proyecto *Grid Landing
Page Main*. Registraré los avances, decisiones, dificultades y aprendizajes que
surjan durante la construcción de la página, con el objetivo de seguir mi
progreso y mejorar mis habilidades en HTML y CSS.

## 📅 23 de septiembre de 2026 — Exploración inicial de la documentación

### 🎯 Objetivo

Explorar el proyecto y ubicarme en el punto de partida.

### 🎧 Lo que escuché

<table>
    <td>
        <a href="https://www.youtube.com/watch?v=wmFg-T-alLk&t=2987s">
            <img
                src="https://i.ytimg.com/vi/wmFg-T-alLk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAY4TUfnBbrR9Pw0aJTIunsC_HKiw"
                width="280px"
            >
        </a>
        <div>
            <div>
                <img src="https://yt3.googleusercontent.com/CZrv4KDtfbUu4CsOtgp2qaKceo1uDFGugFWnSxzP1Of_Bj7P76oZN5amQcsavv1a3W1YGIgxAA=s160-c-k-c0x00ffffff-no-rj" width="32px">
                <span>oiabreeze</span>
            </div>
            <p><i>Grooves de otoño que sientan tan bien<br>🍂🎧 | Cozy Chill Pop · Jazzhop & Lofi<br>· Café · Focus · BGM </i></p>
            <ul>
               <li>
                    <a href="https://www.youtube.com/@oiabreeze/featured">
                        <img src="https://images.icon-icons.com/2699/PNG/512/youtube_logo_icon_168737.png" width="16px">
                        <span>YouTube</span>
                    </a>
                </li>
               <li>
                    <a href="https://open.spotify.com/intl-es/artist/7MDZDPiL6AGmcZvgqqOFxd">
                        <img src="https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcTGVLfQUI48k8KKCMwUjD3KyEUROiRSiLzDmmf8hgtwe8HzSO843p2fwuWlPYudjeGnfYWVJ1bYp1hF2CxSRlsNOqLyb4G7wl4aBDBXsG0LP5Og_rEr" width="16px">
                        <span>Spotify</span>
                    </a>
                </li>
            </ul>
        </div>
    </td>
</table>


### 🛠️ Trabajo realizado

- Leer la documentación actual del proyecto.
- Pasearme por `index.html` para averiguar qué tocar primero.
- Darle mi formato al código HTML en la sección `head`.
- Identificar elementos del navbar.
- Dar estructura al contenido de la hero section.

### 🧠 Lo que aprendí

- Si uso `/` como valor de un `href`, me redirige a la página de inicio.
- Aunque no tengan texto alternativo, conviene mantener `alt=""` en las
  imágenes para que los lectores de pantalla las ignoren, ya que son
  decorativas.

#### 📋 Lista de definiciones

- `<dl>`: *definition list* → lista de definiciones.
- `<dt>`: *definition term* → término de definición.
- `<dd>`: *definition description* → descripción de término.

### ✅ Resultado

- Quedó estructurada la cabecera con la identidad de la marca y el botón
    del menú. La interacción del navbar queda pendiente para una próxima etapa.
- Hero section estructurada semánticamente.

### 🚧 Dificultades

Invertí el orden de los dos primeros elementos de cada grupo estadístico, de
manera que los conceptos quedan antes que su valor. Así mejoro la legibilidad
para los lectores de pantalla y las personas que navegan con teclado.

El problema es que, en el diseño de referencia, primero aparece el valor y
después el concepto. Sé que se puede solucionar con CSS, pero todavía no sé cómo.

### 👣 Próximos pasos

- ~~Dar estructura HTML al contenido de la sección hero.~~
- ~~Dar estructura al contenido del footer.~~

## 📅 24 de septiembre de 2026 — Estructuración final de la página

### 🎯 Objetivo

Hoy terminaré la estructura semántica de la página web. Concretamente:

- footer
- navbar

y posteriormente agregar los `aria-labels` y clases con *BEM* a todo.

También quiero añadir el metadato *description* al head y algunos otros para
Open Graph.

### 🎧 Lo que escuché

<table>
    <td>
        <a href="https://www.youtube.com/watch?v=wmFg-T-alLk&t=2987s">
            <img
                src="https://i.ytimg.com/vi/wmFg-T-alLk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAY4TUfnBbrR9Pw0aJTIunsC_HKiw"
                width="280px"
            >
        </a>
        <div>
            <div>
                <img src="https://yt3.googleusercontent.com/CZrv4KDtfbUu4CsOtgp2qaKceo1uDFGugFWnSxzP1Of_Bj7P76oZN5amQcsavv1a3W1YGIgxAA=s160-c-k-c0x00ffffff-no-rj" width="32px">
                <span>oiabreeze</span>
            </div>
            <p><i>Grooves de otoño que sientan tan bien<br>🍂🎧 | Cozy Chill Pop · Jazzhop & Lofi<br>· Café · Focus · BGM </i></p>
            <ul>
               <li>
                    <a href="https://www.youtube.com/@oiabreeze/featured">
                        <img src="https://images.icon-icons.com/2699/PNG/512/youtube_logo_icon_168737.png" width="16px">
                        <span>YouTube</span>
                    </a>
                </li>
               <li>
                    <a href="https://open.spotify.com/intl-es/artist/7MDZDPiL6AGmcZvgqqOFxd">
                        <img src="https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcTGVLfQUI48k8KKCMwUjD3KyEUROiRSiLzDmmf8hgtwe8HzSO843p2fwuWlPYudjeGnfYWVJ1bYp1hF2CxSRlsNOqLyb4G7wl4aBDBXsG0LP5Og_rEr" width="16px">
                        <span>Spotify</span>
                    </a>
                </li>
            </ul>
        </div>
    </td>
</table>

### 🛠️ Trabajo realizado

- Estructuración de footer y navbar.
- Adición de clases con convención *BEM*.
- Añadí metadatos Open Graph para controlar la vista previa al compartir la
    página en redes sociales.

### 🧠 Lo que aprendí

El modificador en BEM se añade para representar un estado diferente al predeterminado.
No es necesario crear una clase para el estado original, porque se asume que ese
estado es el que no tiene modificador.

---

He aprendido a usar *Open Graph* 😁, lo creí difícil, pero solo consiste en aprender
sus metadatos y que representa cada uno.

---

Había escrito que le añadiría `aria-labels` a todo, pero eso solo confundiría a
los lectores de pantalla pues hay elementos que por sí solos se describen bien,
como por ejemplo los elementos de mi navbar:

- About
- Our Work
- Partners
- Annual Report
- Donate

Así que añadirles `aria-labels` sobra.

Lo misma pasa con el contenido de mi hero section.

### ✅ Resultado

- Página estructurada con elementos semánticos como `header`, `main`, `section`,
    `nav` y `footer`.
- Navbar organizada con una lista de enlaces clara y comprensible para lectores
    de pantalla.
- Clases añadidas siguiendo la convención *BEM*.
- Metadatos Open Graph añadidos para controlar la vista previa de la página al
    compartirla en redes sociales.
- Atributos ARIA añadidos únicamente donde aportan información adicional.

### 👣 Próximos pasos

- ~~Crear la interacción del menú hamburguesa con JavaScript.~~
- Comenzar a escribir los estilos CSS siguiendo las clases creadas con *BEM*.

## 📅 28 de septiembre de 2026 — Optimización de la lógica y maquetación con CSS Grid

### 🎯 Objetivo

- Revisar la lógica y explicarla.
- Organizar las partes de la página con CSS Grid, siguiendo el diseño de referencia.
- Comprobar que la distribución se adapte correctamente a distintos tamaños de pantalla.

### 🎧 Lo que escuché

<table>
    <td>
        <a href="https://www.youtube.com/watch?v=upsoP4bl5J0">
            <img
                src="https://i.ytimg.com/vi/upsoP4bl5J0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzEdo0E7drPCHWVVUB68M-eaanew"
                width="280px"
                alt="portada"
            >
        </a>
        <div>
            <div>
                <img
                    src="https://yt3.ggpht.com/50uChumsI4iQjdKpp70o5Sh1SvFcMU2Xa58QW49msqZSVKuqeAFMmZ6lhoEgq8raixXkgc2p=s88-c-k-c0x00ffffff-no-rj"
                    width="32px"
                    alt="perfil"
                >
                <span>Oldies Station</span>
            </div>
            <p>
                <i>
                    1940's calm night in the autumn with<br>
                    relaxing vintage oldies playing in<br>
                    another room (cricket asmr)
                </i>
            </p>
            <ul>
               <li>
                    <a href="1940's calm night in the autumn with relaxing vintage oldies playing in another room (cricket asmr)">
                        <img src="https://images.icon-icons.com/2699/PNG/512/youtube_logo_icon_168737.png" width="16px">
                        <span>YouTube</span>
                    </a>
                </li>
            </ul>
        </div>
    </td>
</table>

### 🛠️ Trabajo realizado

- Implementación de la interacción del menú: alternancia de la clase del botón y
    actualización de aria-expanded. El CSS muestra u oculta la navegación y los iconos.

### 🧠 Lo que aprendí

- Aprendí que JavaScript puede añadir o quitar clases de un elemento con `classList.toggle()`.
    Después, CSS aplica los estilos correspondientes a cada estado.
- También aprendí que `aria-expanded` comunica si la navegación está abierta o cerrada.

#### Flujo de la lógica

- 🟡 Responsabilidad de JavaScript
- 🔵 Responsabilidad de CSS

```mermaid
flowchart TD
    A([Click al botón]) --> E[Alternar clase `--open`]
    E --> B{¿Está presente la clase `--open?`}
    B -- Sí --> C[Mostrar menú]
    B -- No --> D[Cerrar menú]
classDef css fill: #8ab8ef, color: #111111
classDef js fill: #d4f363, color: #111111
class C css
class D css
class E,B js
```

## 📅 29 de septiembre de 2026 — Maquetación responsive del hero y las estadísticas

### 🎯 Objetivo

Adaptar la distribución del hero y sus estadísticas a pantallas móviles y
anchas, siguiendo el diseño de referencia.

### 🎧 Lo que escuché

<table>
    <td>
        <a href="https://www.youtube.com/watch?v=FNuU-_NKGS4&t=1936s">
            <img
                src="https://i.ytimg.com/vi/FNuU-_NKGS4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzzWlNBHFsCM-zAnpvF7xUhYxX_w"
                width="280px"
                alt="portada"
            >
        </a>
        <div>
            <div>
                <img
                    src="https://yt3.googleusercontent.com/Kmr-QvIWCBdzfmhIQ_sPnOirNrFLGg6d9wCmwBwNjcZ93bwwZD4tb9afObuhAJd5_PFp35-jzg=s120-c-k-c0x00ffffff-no-rj"
                    width="32px"
                    alt="perfil"
                >
                <span>mocha.</span>
            </div>
            <p>
                <i>pumpkin cat.</i>
            </p>
            <ul>
               <li>
                    <a href="music.apple.com/us/artist/mocha/1817615388">
                        <img src="https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcR0NXfQO7I81Sxe-HdfBIK4M8FdOAi_cMH5Awx11X1zvYs0nSmJwdFk5NZrfeYFdzgWTVcIO8OfacL3khYul_ZTaFVT-Gla27jO3PHtUvVYu234s9o" width="16px">
                        <span>Apple Music</span>
                    </a>
                </li>
               <li>
                    <a href="open.spotify.com/artist/5qCVMR70Et7SfFRFPSLHIV">
                        <img src="https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcTGVLfQUI48k8KKCMwUjD3KyEUROiRSiLzDmmf8hgtwe8HzSO843p2fwuWlPYudjeGnfYWVJ1bYp1hF2CxSRlsNOqLyb4G7wl4aBDBXsG0LP5Og_rEr" width="16px">
                        <span>Spotify</span>
                    </a>
                </li>
            </ul>
        </div>
    </td>
</table>

### 🛠️ Trabajo realizado

- Añadí estilos globales para normalizar los elementos, cargué la fuente Inter y
    definí los estilos base de la página.
- Organicé el header, el hero y el footer con CSS Grid, y distribuí cada
    estadística usando áreas de grid para ubicar su icono, valor, etiqueta y
    descripción.
- Preparé una disposición móvil en una columna y, desde el breakpoint de
    375 px, distribuí el hero en dos columnas y las estadísticas en una cuadrícula
    de dos por dos.
- Unifiqué la estructura de los iconos de las estadísticas para poder
    posicionarlos de forma consistente con CSS Grid.

### 🧠 Lo que aprendí

Aprendí a combinar CSS Grid con `grid-template-areas` y una media query para
cambiar la distribución según el ancho de pantalla. También entendí que
`grid-area` solo ubica un elemento dentro del grid de su contenedor; no lo mueve
a otro contenedor. Como la navbar está dentro del header y la presentación está
dentro del hero, asignarle `grid-area: hero` no la coloca dentro de
`.hero__presentation`.

Además, los iconos decorativos pueden llevar `alt=""` para que los lectores de
pantalla los ignoren.

### 🚧 Dificultades

Quise ubicar la navbar abierta en la zona de `.hero__presentation` usando
`grid-area`, pero la navbar y la presentación pertenecen a contenedores distintos.

### ✅ Resultado

La página ya cuenta con una base móvil y una distribución alternativa para
pantallas más anchas. Las cuatro estadísticas tienen una estructura uniforme y
se organizan en una cuadrícula de dos por dos a partir del breakpoint definido.

### 👣 Próximos pasos

- Definir y comprobar la posición de la navbar cuando se abre.
- Revisar el diseño en distintos anchos de pantalla y ajustar el breakpoint si
    hace falta.

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
                src="./personal/assets/images/front-page/grooves-de-otoño-que-sientan-tan-bien.png"
                width="280px"
            >
        </a>
        <div>
            <div>
                <img src="./personal/assets/images/icons/profiles/oiabreeze.png" width="32px">
                <span>oiabreeze</span>
            </div>
            <p><i>Grooves de otoño que sientan tan bien<br>🍂🎧 | Cozy Chill Pop · Jazzhop & Lofi<br>· Café · Focus · BGM </i></p>
            <ul>
               <li>
                    <a href="https://www.youtube.com/@oiabreeze/featured">
                        <img src="./personal/assets/images/icons/logos/youtube.png" width="16px">
                        <span>YouTube</span>
                    </a>
                </li>
               <li>
                    <a href="https://open.spotify.com/intl-es/artist/7MDZDPiL6AGmcZvgqqOFxd">
                        <img src="./personal/assets/images/icons/logos/spotify.png" width="16px">
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
- Dar estructura al contenido del footer.

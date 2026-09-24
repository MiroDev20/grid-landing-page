# 😎 Guía general de Conventional Commits + emoji

Esta guía propone un estilo consistente para escribir mensajes de commit
claros, descriptivos y fáciles de revisar.

## 1. Formato base

```text
<emoji> <type>(<scope>): <descripción breve>
```

Ejemplo:

```text
✨ feat(auth): añadir inicio de sesión
```

El `scope` es opcional y debe indicar la sección afectada.

## 2. Tipos recomendados

| Tipo | Emoji | Uso recomendado |
|---|---|---|
| `feat` | ✨ | Añadir una funcionalidad |
| `fix` | 🐛 | Corregir un error |
| `docs` | 📝 | Modificar documentación |
| `style` | 🎨 | Cambiar formato o estilos |
| `refactor` | ♻️ | Reestructurar código sin cambiar su comportamiento |
| `perf` | ⚡ | Mejorar el rendimiento |
| `a11y` | ♿ | Mejorar la accesibilidad |
| `test` | ✅ | Añadir o modificar pruebas |
| `build` | 📦 | Modificar dependencias o procesos de compilación |
| `ci` | 👷 | Modificar automatizaciones o pipelines |
| `chore` | 🔧 | Realizar tareas generales de mantenimiento |
| `revert` | ⏪ | Revertir un commit anterior |
| `security` | 🔒 | Aplicar mejoras de seguridad |
| `deps` | ⬆️ | Actualizar dependencias |
| `config` | ⚙️ | Modificar archivos de configuración |
| `rename` | 🚚 | Renombrar archivos, funciones o componentes |
| `remove` | 🔥 | Eliminar código o archivos |
| `release` | 🔖 | Preparar una versión o publicación |
| `wip` | 🚧 | Indicar trabajo en progreso |
| `init` | 🎉 | Inicializar un proyecto o estructura base |

## 3. Uso del scope

El `scope` debe ser breve y representar la parte del proyecto afectada.

```text
✨ feat(header): añadir menú responsive
🐛 fix(form): validar campos vacíos
📝 docs(readme): actualizar instrucciones de instalación
🎨 style(button): ajustar estilos del botón principal
```

Cuando el cambio afecta a varias partes o al proyecto completo, puedes omitirlo:

```text
🔧 chore: reorganizar archivos del proyecto
```

## 4. Reglas para mensajes útiles

- Escribe la descripción en tiempo presente: `añadir`, `corregir`, `actualizar`.
- Mantén el mensaje breve y concreto.
- Evita mensajes vagos como `cambios`, `arreglos` o `update`.
- No termines la descripción con un punto.
- Usa un commit separado para cada cambio relacionado.
- Añade más contexto en el cuerpo del commit cuando sea necesario.

## 5. Plantilla rápida

```text
<emoji> <type>(<scope>): <descripción breve>
```

Con contexto opcional:

```text
<emoji> <type>(<scope>): <descripción breve>

Explicación adicional del cambio,
su motivo o sus implicaciones.
```

## 6. Ejemplos generales

```text
✨ feat: añadir modo oscuro
🐛 fix: corregir error al cargar los datos
📝 docs(readme): documentar la instalación
🎨 style(navbar): mejorar el espaciado
♻️ refactor(api): simplificar las peticiones
✅ test(cart): cubrir el cálculo del total
📦 build: actualizar las dependencias
🔧 chore: reorganizar la estructura del proyecto
```

## 7. Regla principal

El tipo de Conventional Commits describe la naturaleza del cambio.
El emoji aporta una referencia visual y el scope identifica la parte afectada.

La estructura recomendada es:

```text
<type>(<scope>): <descripción>
```

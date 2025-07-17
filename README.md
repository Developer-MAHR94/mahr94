# MAHR 94 - Sitio Web Corporativo

Sitio web moderno y responsivo para MAHR 94, desarrollado con React y TailwindCSS.

## 🎨 Colores Institucionales

- **Negro**: `#000000` - Fondo principal
- **Blanco**: `#FFFFFF` - Texto principal
- **Azul**: `#0099e5` - Íconos y enlaces
- **Amarillo**: `#FFD43B` - Botones y destacados

## 🚀 Características

- **Header fijo** con navegación responsiva
- **Sección Hero** con llamadas a la acción
- **Servicios** con 4 tarjetas interactivas
- **Proyectos** en grid responsivo
- **Formulario de contacto** funcional
- **Botón flotante de WhatsApp**
- **Footer** con enlaces y redes sociales
- **Diseño completamente responsivo**

## 🛠️ Tecnologías Utilizadas

- React 18
- TailwindCSS 3
- Heroicons
- HTML5 & CSS3
- JavaScript ES6+

## 📦 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd mahr94-website
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm start
   ```

4. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Navegación principal
│   ├── Hero.jsx           # Sección de bienvenida
│   ├── Servicios.jsx      # Tarjetas de servicios
│   ├── Proyectos.jsx      # Grid de proyectos
│   ├── Contacto.jsx       # Formulario de contacto
│   └── Footer.jsx         # Pie de página
├── assets/
│   └── logo.png           # Logo de MAHR 94
├── App.js                 # Componente principal
├── index.js              # Punto de entrada
└── index.css             # Estilos globales
```

## 🎯 Personalización

### Cambiar el Logo
Reemplaza el archivo `src/assets/logo.png` con tu logo oficial.

### Actualizar Información de Contacto
Modifica los datos en `src/components/Contacto.jsx`:
- Email: `contacto@mahr94.com`
- Teléfono: `+1 (555) 123-4567`
- Ubicación: `Ciudad de México, México`

### Enlaces de Redes Sociales
Actualiza los enlaces en `src/components/Footer.jsx`:
- GitHub
- LinkedIn
- Twitter

### Número de WhatsApp
Cambia el número en `src/components/Contacto.jsx` en el botón flotante:
```jsx
href="https://wa.me/TU_NUMERO?text=Hola,%20me%20interesa%20trabajar%20con%20MAHR%2094"
```

## 📱 Responsive Design

El sitio está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Despliegue

### Build para Producción
```bash
npm run build
```

### Desplegar en Vercel
1. Conecta tu repositorio a Vercel
2. Configura el comando de build: `npm run build`
3. Directorio de salida: `build`

### Desplegar en Netlify
1. Sube la carpeta `build` a Netlify
2. O conecta directamente el repositorio

## 📄 Licencia

© MAHR 94 - Todos los derechos reservados

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Desarrollado con ❤️ por MAHR 94** 
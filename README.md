# 🛍️ Teslo Shop

**Una aplicación moderna de e-commerce construida con React, TypeScript y Vite**

Teslo Shop es una plataforma de comercio electrónico completa que ofrece una experiencia de compra fluida con una interfaz de usuario moderna, sistema de autenticación robusto y panel de administración integral.

## ✨ Características Principales

### 🏪 Tienda Pública

- **Catálogo de productos** con navegación intuitiva
- **Filtrado por categorías** (género, tipo de producto)
- **Páginas de producto detalladas** con información completa
- **Diseño responsivo** optimizado para todos los dispositivos
- **Interfaz moderna** con Tailwind CSS y componentes de Radix UI

### 🔐 Sistema de Autenticación

- **Registro de usuarios** con validación de datos
- **Inicio de sesión** seguro
- **Rutas protegidas** para áreas privadas
- **Navegación intuitiva** entre estados de autenticación

### 👨‍💼 Panel de Administración

- **Dashboard administrativo** con métricas clave
- **Gestión de productos** (crear, editar, eliminar)
- **Interfaz dedicada** para administradores
- **Rutas protegidas** con lazy loading

## 🛠️ Tecnologías Utilizadas

### Frontend Core

- **React 19** - Biblioteca principal para la interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Herramienta de construcción rápida y moderna
- **React Router 7** - Enrutamiento declarativo con lazy loading

### Estilado y UI

- **Tailwind CSS 4** - Framework de utilidades CSS
- **Radix UI** - Componentes accesibles y sin estilos
- **Lucide React** - Iconografía moderna y consistente
- **CVA (Class Variance Authority)** - Gestión de variantes de componentes

### Herramientas de Desarrollo

- **ESLint** - Análisis estático de código
- **TypeScript ESLint** - Rules específicas para TypeScript
- **Vite Plugin React SWC** - Compilación optimizada

## 📁 Estructura del Proyecto

```
src/
├── 🏪 shop/              # Módulo de la tienda pública
│   ├── components/       # Componentes específicos de la tienda
│   ├── layouts/          # Layouts para páginas de tienda
│   └── pages/           # Páginas principales de la tienda
│
├── 🔐 auth/              # Módulo de autenticación
│   ├── layouts/          # Layout para páginas de auth
│   └── pages/           # Páginas de login y registro
│
├── 👨‍💼 admin/            # Módulo de administración
│   ├── layouts/          # Layout para panel admin
│   └── pages/           # Páginas del dashboard admin
│
├── 🧩 components/        # Componentes UI reutilizables
│   └── ui/              # Sistema de diseño base
│
└── 📚 lib/               # Utilidades y configuraciones
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn** o **pnpm**

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone [URL_DEL_REPOSITORIO]
cd teslo-shop
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

## 📝 Scripts Disponibles

| Comando           | Descripción                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo              |
| `npm run build`   | Construye la aplicación para producción       |
| `npm run preview` | Vista previa de la construcción de producción |
| `npm run lint`    | Ejecuta el linter para verificar el código    |

## 🗺️ Rutas de la Aplicación

### Rutas Públicas

- `/` - Página principal de la tienda
- `/product/:slug` - Página de producto individual
- `/gender/:gender` - Productos filtrados por género

### Rutas de Autenticación

- `/auth/login` - Página de inicio de sesión
- `/auth/register` - Página de registro

### Rutas de Administración

- `/admin` - Dashboard principal
- `/admin/products` - Gestión de productos
- `/admin/products/:id` - Edición de producto específico

## 🎨 Sistema de Diseño

La aplicación utiliza un sistema de diseño consistente basado en:

- **Componentes reutilizables** con Radix UI
- **Tokens de diseño** gestionados con Tailwind CSS
- **Variantes de componentes** usando CVA
- **Iconografía** consistente con Lucide React

## 🚧 Próximas Funcionalidades

- [ ] Carrito de compras
- [ ] Proceso de checkout
- [ ] Integración de pagos
- [ ] Sistema de reseñas
- [ ] Gestión de inventario
- [ ] Notificaciones en tiempo real
- [ ] PWA (Progressive Web App)

## 🤝 Contribución

Este es un proyecto educativo desarrollado con fines de aprendizaje. Las contribuciones y sugerencias son bienvenidas para mejorar la experiencia de aprendizaje.

## 👨‍💻 Desarrollado por

**Alonso** - Proyecto educativo para el aprendizaje de React y desarrollo web moderno.

---

_Este proyecto forma parte de un curso de React y tiene fines educativos. Diseñado para demostrar las mejores prácticas en el desarrollo de aplicaciones web modernas._

# Nombre del Proyecto

Clon de la interfaz de un post de react.

## Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Instalación](#instalación)
   - [Requisitos](#requisitos)
   - [Configuración del Backend (Django) y Frontend (React)](#configuración-del-backend-django-y-frontend-react)
4. [Ejecución](#ejecución)

## Descripción del Proyecto

El proyecto consta de una interfza:

En este proyecto se desarrollaron las funcionalidades para guardar comentarios y ver comentarios guardados. También se implementaron diversos componentes de la interfaz, como botones, cuadros de texto, iconos, tipografía, colores y estilos, todos alineados con el diseño del modelo proporcionado.

El desarrollo se enfocó en replicar fielmente la estructura visual del modelo, logrando un maquetado preciso y creando los componentes necesarios para una interfaz coherente y estéticamente alineada con el diseño original.

Para futuras versiones, se planea añadir funcionalidades de internacionalización para soportar múltiples idiomas, así como la opción de agregar respuestas a los comentarios existentes, ampliando la interacción en la plataforma.

Explica en más detalle qué hace la aplicación y las principales funcionalidades. Puedes añadir capturas de pantalla si ayuda a entender mejor el proyecto.

Los comentarios serán almacenados en una base de datos de SQLite.

## Modelo de datos
Una tabla para guardar el usuario, su icono, el comentario, su id, fecha de guardado, fecha de actualización, y una llave foránea para saber si tiene comentario padre, con el fin de saber si es un comentario en respuesta del otro (archivo models.py en carpeta backend).

## Tecnologías Utilizadas

- **Backend**: Django (versión 3.2 o superior)
- **Frontend**: React (versión 18.0 o superior) usnado Vite
- **Base de Datos**: SQLite
- **Otros**: Axios, node.js Django REST Framework, Material UI, flaticon, bootstrap

## Instalación

### Requisitos

- Python 3.8 o superior
- Node.js 14 o superior
- npm
- python virtualenv

### Configuración del Backend (Django) y Frontend (React)

1. Clona el repositorio e ingresa al directorio del backend:

   1.1. Ingresa al directorio backend
   ```bash
   cd redditClone/backend
   ```

   Activa el entorno virtual:
   ```bash
   env\Scripts\activate

   Inicia el servidor del proyecto:
   ```bash
   python manage.py runserver
   ```

   **Funcionamiento**
   
   Realiza peticiones de prueba en [http://localhost:8000/comments/api/comments/](http://localhost:8000/comments/api/comments/).

   La documentación pertinente de la API se encuentra en la siguiente URL:
   [http://localhost:8000/comments/docs/](http://localhost:8000/comments/docs/).

   Ver comentarios (GET):
   ```bash
   http://localhost:8000/comments/api/comments/
   ```

   Ver comentario por id (ejemplo id = 1):
   ```bash
   http://localhost:8000/comments/api/comments/1/
   ```

   Crear comentario (POST) ejemplo:
   URL: 
   ```bash
   http://localhost:8000/comments/api/comments/
   ```
   Body:
   ```json
   {
     "content": "Comentario 1",
     "user": "Max",
     "parent": null
   }
   ```

   1.2. Abra otra terminal:
   ```bash
   cd ..
   cd frontend/frontReddit
   ```

   Instale las dependencias necesarias:
   ```bash
   npm i react-router-dom axios react-hook-form
   npm install prop-types
   npm install axios
   npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/icons-material
   npm install @fontsource/roboto
   npm install bootstrap
   npm i @flaticon/flaticon-uicons
   ```

   Inicie el servidor:
   ```bash
   npm run dev
   ```

   Accede a través de la URL:
   [http://localhost:5173](http://localhost:5173)

## Ejecución

1. **Iniciar el Backend**

   - Asegúrase de que el entorno virtual está activado. Si aún no lo ha hecho, navege al directorio del backend y active el entorno virtual:
   ```bash
   cd redditClone/backend
   env\Scripts\activate
   ```

   - Inicie el servidor de desarrollo de Django:
   ```bash
   python manage.py runserver
   ```
   - El servidor se ejecutará por defecto en [http://localhost:8000](http://localhost:8000).

2. **Iniciar el Frontend**

   - Abra otra terminal y navege al directorio del frontend:
   ```bash
   cd ../frontend/frontReddit
   ```

   - Inicie el servidor de desarrollo de React:
   ```bash
   npm run dev
   ```
   - La aplicación React se ejecutará por defecto en [http://localhost:5173](http://localhost:5173).

3. **Interacción con la Aplicación**

   - Una vez que ambos servidores estén en funcionamiento, abra el navegador y visite [http://localhost:5173](http://localhost:5173) para ver la interfaz de usuario.
   - Puede comenzar a agregar comentarios a través de la interfaz, los mismos se guardaran con el nombre pordefecto del modelo usado.
   - Podras evaluar las firentes componentes de la pagina, botones, links, cuadros de texto.. etc
   - Para ver los comentarios existentes, asegúrate de que el servidor de Django esté corriendo para que las peticiones API funcionen correctamente.

4. **Probar la API**

   - Si deseas realizar pruebas en la API, puedes usar herramientas como Postman o cURL. Asegúrate de tener el servidor de Django en funcionamiento y prueba las siguientes solicitudes:
     - **Obtener todos los comentarios (GET)**:  
       `http://localhost:8000/comments/api/comments/`
     - **Obtener un comentario por ID (GET)**:  
       `http://localhost:8000/comments/api/comments/{id}/`
     - **Crear un nuevo comentario (POST)**:  
       URL: `http://localhost:8000/comments/api/comments/`  
       Body:
       ```json
       {
         "content": "Comentario 1",
         "user": "Max",
         "parent": null
       }
       ```
5. Estrucura
**Backend**
redditClone/
├── backend/                   # Carpeta que contiene el código del backend
│   ├── appApi/                # Aplicación API
│   │   ├── __pycache__/       
│   │   ├── __init__.py       
│   │   ├── asgi.py            
│   │   ├── settings.py        # Configuración del proyecto
│   │   ├── urls.py            # Rutas de la API
│   │   └── wsgi.py            
│   ├── backend/               # Carpeta principal de la aplicación
│   │   ├── __pycache__/       
│   │   ├── migrations/        # Migraciones de la base de datos
│   │   │   ├── __init__.py    
│   │   ├── __init__.py        
│   │   ├── admin.py           
│   │   ├── apps.py            # Configuración de la aplicación
│   │   ├── models.py          # Modelos de datos
│   │   ├── serializer.py       # Serializadores para API
│   │   ├── tests.py           
│   │   ├── urls.py            # Rutas de la aplicación
│   │   └── views.py           # Vistas de la API
│   ├── env/                   # Entorno virtual
│   │   ├── db.sqlite3         # Base de datos SQLite
│──-└── manage.py              # Archivo de gestión de Django


**Backend**
redditClone/
frontend/                  # Carpeta que contiene el código del frontend
├── frontReddit/           # Aplicación React
│   ├── node_modules/      # Dependencias de Node.js
│   ├── public/             # Archivos públicos (HTML, imágenes)
│   └── src/               # Código fuente de la aplicación
│       ├── api/           # API archivos js encargador de comunicar back con front
│       ├── assets/        # Recursos estáticos como imágenes
│       ├── components/    # Componentes de React Botones, inputs, menus, otros.
│       ├── pages/         # Páginas de la aplicación
│       ├── styles/        # Archivos de estilos CSS
│       ├── utils/         # Funciones utilitarias
│       ├── App.jsx        # Componente principal de la aplicación
│       ├── main.jsx       # Punto de entrada de la aplicación
│       ├── index.html     # Archivo HTML principal
│       ├── eslint.config.js
│       ├── package.json    # Dependencias del frontend
│       ├── package-lock.json
└───────└── vite.config.js


## Estado del Proyecto

Este proyecto está actualmente en desarrollo. Se están planeando futuras mejoras y características.


## Mejoras Futuras

- Implementar internacionalización.
- Añadir respuestas a comentarios existentes.
- Mejorar la interfaz de usuario y la experiencia del usuario.
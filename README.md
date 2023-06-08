# Sistema de Control Escolar

Este es un sistema de control escolar que te permitirá administrar y gestionar distintos aspectos de la vida estudiantil, como inscripciones, calificaciones y más. 

## Cómo descargar e instalar el sistema

Para descargar e instalar el sistema, asegúrate de contar con los recursos necesarios, los cuales son:

- Node.js
- Git
- XAMPP

Además, es importante que configures SSH. Si no sabes cómo hacerlo, a continuación te proporcionamos algunos enlaces que te pueden ayudar en este proceso:

- Para generar usuarios Git: https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez
- Para configurar la SSH key de tu cuenta GitHub: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
- Para agregar tu SSH key a tu cuenta de GitHub: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

Una vez que hayas configurado todo lo anterior, sigue los siguientes pasos:

1. Inicializa Git con el siguiente comando:
>git init


2. Agrega el repositorio del sistema a tu cuenta de Git:

>git remote add git@github.com:SISTEMAADMIN/SistemaControlEscolarTescha.git


3. Verifica la conexión con el siguiente comando:
>git remote -v

Debe aparecerte un mensaje similar a este:

origin git@github.com:SISTEMAADMIN/SistemaControlEscolarTescha.git (fetch)

origin git@github.com:SISTEMAADMIN/SistemaControlEscolarTescha.git (push)


4. Descarga el código del sistema desde el repositorio con el siguiente comando:
>git pull origin main

5. Instala las dependencias necesarias del sistema con el siguiente comando:
>npm i


6. Inicia el servidor Express con el siguiente comando:
>npm run dev


7. Para correr el lado del frontend, dirígete a la carpeta `client` y ejecuta los siguientes comandos:
>cd client

>npm i

>npm run dev


¡Listo! Ya puedes empezar a utilizar el Sistema de Control Escolar.

# Prueba Técnica API Backend para Equipzilla
***
![Equipzilla](./img/logo-equizilla.png)
***
## Repositorio de github en el que se a estado trabajando el proyecto:
## https://github.com/RobertoGuzman64/equipzillabackend.git

## El proyecto se encuentra deployado en heroku y la URL de acceso a los endpoints es la siguiente:
## https://equipzillabackend.herokuapp.com/


## Pre-requisitos del proyecto para hacerlo funcionar en tu equipo local:

* Instalar **Nodejs** en nuestro equipo, descargándolo de su página oficial
https://nodejs.org/

* Clonar el proyecto en nuestro equipo con git:
```
git clone 'url-del-repositorio'
```

* Instalar todas las dependecias con el siguiente comando:
```
npm install
```

* Arrancamos el servidor con el siguiente comando:
```
npm start
```

## Tecnologías utilizadas en el proyecto:
* **dotenv**: Instalamos dotenv en nuestro proyecto con el siguiente comando:
```
npm install dotenv
```
* **twitter**: Instalamos twitter en nuestro proyecto con el siguiente comando:
```
npm install twitter
```
* **mongoose**: Instalamos mongoose en nuestro proyecto con el siguiente comando:
```
npm install mongoose
```
* **cors**: Instalamos cors en nuestro proyecto, para tener un control de acceso a nuestra API:
```
npm install cors
```
* **express**: Instalamos express en nuestro proyecto con el siguiente comando:
```
npm install express
```
* **nodemon**: Instalamos nodemon en nuestro proyecto. También añadimos en nuestro **package.json** un script para poder ejecutarlo:
```
npm install nodemon
```
```
// AÑADIDO EN PACKAGE.JSON
"dev": "nodemon index.js"
```
```
// EJECUTAMOS EN TERMINAL
npm run dev
```
## Explicación de la estructura del proyecto

* **index.js**: Este es el archivo principal. En este archivo se llama al archivo de las rutas, en donde se gestiona la ruta inicial (/) y se arranca el servidor.

* **dbconnect.js**: En este archivo se gestiona el acceso a la base de datos.

* **router.js**: En este archivo se gestiona las diferentes vistas que puede tener la aplicación. Se creará una ruta por cada tabla de la base de datos a la que queramos acceder (twitter).

* **views**
    * **TwitterRouter.js**: En este archivo gestionamos la ruta y los endpoints que apuntan a dicha ruta.

* **controllers**
    * **TwitterController.js**: En este archivo creamos las funciones de cada endpoint:
        * **verTweets**: Obtenemos un listado de todos los tweets de nuestra base de datos.
        * **buscaTweets**: Muestra 100 tweets con el hastag que se le pasa como parámetro.
        * **guarda1Tweet**: Guarda 1 tweet que introducimos por body.
        * **guardaTweets**: Guarda 100 tweets con el hastag que se le pase como parámetro.
* **models**
    * **twitter.js**: Aquí encontramos todos los campos necesarios para guardar los tweets.

* **.gitignore**: Archivo en el que se indica que archivos no se subirán a nuestro repositorio. Está editado de la siguiente manera:
```
/node_modules
*.env
.env.*
!*.env.example
```
***
![NODE HEROKU MONGODB](/img/mongoheroku.jpeg)
***
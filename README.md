<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# PokeEx

1. Clonar repositorio

2. Ejecutar
```
npm install
```
3. Tener Nest CLI instalado.
```
En Windows: npm i -g @nestjs/cli
En Linux: sudo npm i -g @nestjs/cli
```
4. Levantar base de datos.

  - Lanzar Docker Desktop (si no está instalador Docker en el sistema)

  - Ejecutar
  ```
  docker compose up -d
  ```
5. Clonar archivo ___.env-template___ y renombrarlo a ___.env___

6. Configurar las variables de entorno definidas en el ___.env___

7. Ejecutar la aplicación en dev:
```
npm run start:dev
```
8. Reconstruir base de datos con petición http GET:
***NOTA*** Esto borrará todo registro de pokemons de la base datos y generará nuevos. No es recomendable emplearlo en producción.
```
http://localhost:3000/api/v2/seed
```
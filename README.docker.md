<a href="README.md">
  <img
    align="right"
    src="https://img.shields.io/badge/Inicio-161b22?style=for-the-badge&logoColor=white&logo=github"
    alt="Inicio"
  />
</a>

# Proyecto de viajes 🏖️
<div>
  <a href="https://docs.docker.com/compose/" target="_blank">
    <img
      src="https://img.shields.io/badge/v2.24.6-gray?style=flat&logo=docker&logoColor=white&label=Docker Compose&labelColor=46a2f1"
      alt="Docker compose"
    />
  </a>
  <a href="https://nginx.org/en/docs/" target="_blank">
    <img
      src="https://img.shields.io/badge/v1.23.3-gray?style=flat&logo=nginx&logoColor=white&label=Nginx&labelColor=009639"
      alt="Nginx"
    />
  </a>
  <a href="https://nodejs.org/en/" target="_blank">
    <img
      src="https://img.shields.io/badge/v18.14.2-gray?style=flat&logo=node.js&logoColor=white&label=Node.js&labelColor=43853D"
      alt="Node Js"
    />
  </a>
</div>

### Requisitos previos 📝
- Docker Compose **versión 2.x**
- Ejecutar bash desde la carpeta **docker**

#### Puertos habilitados
- [**3001**](http://localhost:3001) para desarrollo
- [**4001**](http://localhost:4001) para producción

#### Menu de opciones 📋
```bash
$ bash deployment.sh
```
```bash
==================
 Travel project 🏖️
==================
1) Deploy on development mode 🛠
2) Delete on development mode 🗑️
3) Deploy on production mode 🚀
4) Delete on production mode 🗑️
5) Quit 👋
Select an option and press Enter 👆: 
```

### Demo 🎬
<img width="500" src="./demo/docker.gif"/>

## Información relevante 📑
### Imagen
```bash
$ docker images
```
| REPOSITORY      | TAG                | SIZE   |
| --------------- | ------------------ | ------ |
| node            | 18.14.2-alpine3.17 | ~174MB |
| travel          | 1.0.0              | ~43MB  |

### Contenedor
```bash
$ docker ps
```
| NAME            | PORTS                  |
| --------------- | ---------------------- |
| travel          | 0.0.0.0:3001->3001/tcp |
| travel-prod     | 0.0.0.0:4001->80/tcp   |

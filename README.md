# KùzuExplorer

Browser-based user interface for the [Kùzu](https://github.com/kuzudb/kuzu) graph database.

## Get started

KùzuExplorer is a web application that is launched from a deployed Docker image. Ensure that you have Docker installed before proceeding.

The commands below make KùzuExplorer accessible on http://localhost:8000.

### Option 1: Existing database

Access an existing Kùzu database by mounting its path to the `/database` directory as follows.

```bash
docker run -p 8000:8000 \
           -v /absolute/path/to/database:/database \
           --rm kuzudb/explorer:latest
```

The `--rm` flag tells docker that the container should automatically be removed after we close docker. 

### Option 2: Empty database with example data

The `-v` flag in the example above is optional: If no database path is specified, the server will be started with an empty database, and you can load the database with bundled datasets to explore the basic functionalities of Kùzu.

```bash
docker run -p 8000:8000 --rm kuzudb/explorer:latest
```
Click on the `Datasets` tab on the top right corner of the navigation bar, and load the bundled dataset of your choice to explore the graph.

### Option 3: Empty database with custom data

Alternatively, directories containing node and edge data files, in formats such as `.parquet`, `.csv`, and `.npy` can be mounted to the `/data` directory as follows:

```bash
docker run -p 8000:8000 \
           -v /absolute/path/to/data/files:/data \
           --rm kuzudb/explorer:latest
```

With this approach, the data files can be accessed inside the web application to load yourself into Kùzu via Cypher.


## Development (with Kùzu compiled from source)
### Stack
- Server
  - [Node.js](https://nodejs.org)
  - [Express.js](https://expressjs.com/)
  - [Kùzu](https://kuzudb.com)
- Client
  - [Vue 3](https://vuejs.org/)
  - [Bootstrap 5](https://getbootstrap.com/docs/5.0/)
  - [Monaco Editor](https://microsoft.github.io/monaco-editor/)
  - [G6](https://github.com/antvis/G6)

### Prerequisite
- [Node.js v20](https://nodejs.org/dist/latest-v20.x/)
- [JDK 11+](https://jdk.java.net/11/)
- [Toolchain for building Kùzu](https://kuzudb.com/docusaurus/development/building-kuzu)

### Environment setup
#### Download and compile Kùzu
```bash
git submodule update --init --recursive
npm run build-kuzu 
```

#### Install Node.js dependencies
```bash
npm i
```

#### Generate grammar files
```bash
npm run generate-grammar
```

#### Fetch datasets
```bash
npm run fetch-datasets
```

### Run development server (with hot-reloading)
```
env KUZU_PATH=path/to/database npm run serve
```

## Build and serve for production
### Run production server locally
```bash
npm run build
env KUZU_PATH=path/to/database npm run serve-prod
```

### Run production server with Docker
```
docker build -t kuzudb/explorer:latest .
docker run -p 8000:8000 \
           -v /absolute/path/to/database:/database \
           --rm kuzudb/explorer:latest
```

## Deployment
A [GitHub actions pipeline](.github/workflows/build-and-deploy.yml) has been configured to automatically build and deploy 
the Docker image to [Docker Hub](https://hub.docker.com/) upon pushing to the master branch. The pipeline will build images
for both `amd64` and `arm64` platforms.

## Contributing
We welcome contributions to KùzuExplorer. By contributing to KùzuExplorer, you agree that your contributions will be licensed under the [MIT License](LICENSE).

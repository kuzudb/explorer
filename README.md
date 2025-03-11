# Kuzu Explorer

Browser-based user interface for the [Kuzu](https://github.com/kuzudb/kuzu) graph database.

<img src="https://github.com/user-attachments/assets/51f14fed-59bc-4e2b-946e-54acbdc094ae">


## Get started

Kuzu Explorer is a web application that is launched from a deployed Docker image.
Please refer to the [Docker documentation](https://docs.docker.com/get-docker/) for details on how to install and use Docker.

Below we show two different ways to launch Kuzu Explorer. Each of these options make
Kuzu Explorer accessible on [http://localhost:8000](http://localhost:8000). If the launching is successful, you should see the logs similar to the following in your shell:

```
Access mode: READ_WRITE
Version of Kuzu: v0.0.11
Deployed server started on port: 8000
```

### Option 1: Using an existing database

To access an existing Kuzu database, you can mount its path to the `/database` directory as follows:

```bash
docker run -p 8000:8000 \
           -v /absolute/path/to/database:/database \
           --rm kuzudb/explorer:latest
```

By mounting local database files to Docker via `-v /absolute/path/to/database:/database`,
the changes done in the UI will persist to the local database files after the UI is shutdown.

The `--rm` flag tells docker that the container should automatically be removed after we close docker.

### Option 2: Start with an empty database with example data

You can also launch Kuzu Explorer without specifying an existing database. Kuzu Explorer comes with
bundled datasets that you can use to explore the basic functionalities of Kuzu.
This is simply done by removing the `-v` flag in the example above. If no database path is specified
with `-v`, the server will be started with an empty database.

```bash
docker run -p 8000:8000 --rm kuzudb/explorer:latest
```

Click on the `Datasets` tab on the top right corner and then: (i) you can select one of the bundled dataset
of your choice from the drow-down menu; (ii) load it into Kuzu by clicking the "Load Dataset" button; and (iii)
finally use Kuzu Explorer to explore it.

### Additional launch configurations

#### Access mode

By default, Kuzu Explorer is launched in read-write mode, which means that you can modify the database. If you want to launch Kuzu Explorer in read-only mode, you can do so by setting the `MODE` environment variable to `READ_ONLY` as follows.

```bash
docker run -p 8000:8000 \
           -v /absolute/path/to/database:/database \
           -e MODE=READ_ONLY \
           --rm kuzudb/explorer:latest
```

In read-only mode, you can still issue read queries and visualize the results, but you cannot run write queries or modify the schema.

#### Buffer pool size

By default, Kuzu Explorer is launched with a maximum buffer pool size of 80% of the available memory. If you want to launch Kuzu Explorer with a different buffer pool size, you can do so by setting the `KUZU_BUFFER_POOL_SIZE` environment variable to the desired value in bytes as follows.

For example, to launch Kuzu Explorer with a buffer pool size of 1GB, you can run the following command.

```bash
docker run -p 8000:8000 \
           -v /absolute/path/to/database:/database \
           -e KUZU_BUFFER_POOL_SIZE=1073741824 \
           --rm kuzudb/explorer:latest
```

#### In-memory mode

By default, Kuzu Explorer is launched in disk-based mode. If you want to launch Kuzu Explorer in in-memory mode, you can do so by setting the `KUZU_IN_MEMORY` environment variable to `true` as follows.

```bash
docker run -p 8000:8000 \
           -e KUZU_IN_MEMORY=true \
           --rm kuzudb/explorer:latest
```

In in-memory mode, the database is stored in memory and all changes are lost when the server is shut down even if a database directory is mounted. Also, read-only access mode is not supported in in-memory mode.

#### WebAssembly mode

In WebAssembly mode, Kuzu Explorer is launched with `kuzu-wasm`, which runs all the queries directly in browser. If you want to launch Kuzu Explorer in WebAssembly mode, you can do so by setting the `KUZU_WASM` environment variable to `true` as follows.

```bash
docker run -p 8000:8000 \
           -e KUZU_IN_MEMORY=true \
           --rm kuzudb/explorer:latest
```

In WebAssembly mode, the database is stored in the current browser session and all changes are lost when the browser tab is closed or when the tab is refreshed. All other configuration parameters are ignored in WebAssembly mode.

#### Dev builds

If you want to launch Kuzu Explorer with the latest development build of Kuzu, you can do so by using the `dev` tag instead of `latest`.

```bash
docker run -p 8000:8000 \
           -v /absolute/path/to/database:/database \
           --rm kuzudb/explorer:dev
```

The `dev` tag is updated daily, approximately two hours after the latest dev build of Kuzu is released.

### Updating Kuzu Explorer

When a new version of Kuzu Explorer is released after the initial launch, re-launching the container WILL NOT automatically update the local image to the latest version. To update the local image to the latest version, you can run the following command.

```bash
docker pull kuzudb/explorer:latest
```

After pulling the latest image, you can re-launch the container with the same command as before.

### Launch with Podman

If you are using [Podman](https://podman.io/) instead of Docker, you can launch Kuzu Explorer by replacing `docker` with `podman` in the commands above. However, note that by default Podman maps the default user account to the `root` user in the container. This may cause permission issues when mounting local database files to the container. To avoid this, you can use the `--userns=keep-id` flag to keep the user ID of the current user inside the container, or enable `:U` option for each volume to change the owner and group of the source volume to the current user.

For example:

```bash
podman run -p 8000:8000 \
           -v /absolute/path/to/database:/database:U \
           --rm kuzudb/explorer:latest
```

or,

```bash
podman run -p 8000:8000 \
           -v /absolute/path/to/database:/database \
           --userns=keep-id \
           --rm kuzudb/explorer:latest
```

Please refer to the official Podman docs for [mounting external volumes](https://docs.podman.io/en/latest/markdown/podman-run.1.html#mounting-external-volumes) and [user namespace mode](https://https://docs.podman.io/en/latest/markdown/podman-run.1.html#userns-mode) for more information.

## Documentation

For more information regarding launching and using Kuzu Explorer, please refer to the [documentation](https://docs.kuzudb.com).

## Development (with Kuzu compiled from source)

### Stack

- Server
  - [Node.js](https://nodejs.org)
  - [Express.js](https://expressjs.com/)
  - [Kuzu](https://kuzudb.com)
- Client
  - [Vue 3](https://vuejs.org/)
  - [Bootstrap 5](https://getbootstrap.com/docs/5.0/)
  - [Monaco Editor](https://microsoft.github.io/monaco-editor/)
  - [G6](https://github.com/antvis/G6)

### Prerequisite

- [Node.js v20](https://nodejs.org/dist/latest-v20.x/)
- [JDK 11+](https://jdk.java.net/11/)
- [Toolchain for building Kuzu](https://docs.kuzudb.com/developer-guide/)
- [Git](https://git-scm.com/)

### Environment setup

#### Install Node.js dependencies

```bash
npm i
```

#### Download and compile Kuzu

```bash
git submodule update --init --recursive
npm run build-kuzu
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

### Check code style with ESLint

```
npm run eslint
```

Include `-fix` for automatic correction of fixable styles.

```
npm run eslint-fix
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

We welcome contributions to Kuzu Explorer. By contributing to Kuzu Explorer, you agree that your contributions will be licensed under the [MIT License](LICENSE).

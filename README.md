# Kùzu Explorer

Browser-based user interface for the [Kùzu](https://github.com/kuzudb/kuzu) graph database.

![image](https://github.com/kuzudb/explorer/assets/14037726/12bfcd9e-cb7f-4fd5-9214-7bbd3b547bd6)

## Get started

Kùzu Explorer is a web application that is launched from a deployed Docker image.
Please refer to the [Docker documentation](https://docs.docker.com/get-docker/) for details on how to install and use Docker.

Below we show two different ways to launch Kùzu Explorer. Each of these options make
Kùzu Explorer accessible on [http://localhost:8000](http://localhost:8000). If the launching is successful, you should see the logs similar to the following in your shell:

```
Access mode: READ_WRITE
Version of Kùzu: v0.0.11
Deployed server started on port: 8000
```

### Option 1: Using an existing database

To access an existing Kùzu database, you can mount its path to the `/database` directory as follows:

```bash
docker run -p 8000:8000 \
           -v /absolute/path/to/database:/database \
           --rm kuzudb/explorer:latest
```

By mounting local database files to Docker via `-v /absolute/path/to/database:/database`,
the changes done in the UI will persist to the local database files after the UI is shutdown.

The `--rm` flag tells docker that the container should automatically be removed after we close docker.

### Option 2: Start with an empty database with example data

You can also launch Kùzu Explorer without specifying an existing database. Kùzu Explorer comes with
bundled datasets that you can use to explore the basic functionalities of Kùzu.
This is simply done by removing the `-v` flag in the example above. If no database path is specified
with `-v`, the server will be started with an empty database.

```bash
docker run -p 8000:8000 --rm kuzudb/explorer:latest
```

Click on the `Datasets` tab on the top right corner and then: (i) you can select one of the bundled dataset
of your choice from the drow-down menu; (ii) load it into Kùzu by clicking the "Load Dataset" button; and (iii)
finally use Kùzu Explorer to explore it.

### Additional launch configurations

#### Access mode

By default, Kùzu Explorer is launched in read-write mode, which means that you can modify the database. If you want to launch Kùzu Explorer in read-only mode, you can do so by setting the `MODE` environment variable to `READ_ONLY` as follows.

```bash
docker run -p 8000:8000 \
           -v /absolute/path/to/database:/database \
           -e MODE=READ_ONLY \
           --rm kuzudb/explorer:latest
```

In read-only mode, you can still issue read queries and visualize the results, but you cannot run write queries or modify the schema.

#### Buffer pool size

By default, Kùzu Explorer is launched with a maximum buffer pool size of 80% of the available memory. If you want to launch Kùzu Explorer with a different buffer pool size, you can do so by setting the `KUZU_BUFFER_POOL_SIZE` environment variable to the desired value in bytes as follows.

For example, to launch Kùzu Explorer with a buffer pool size of 1GB, you can run the following command.

```bash
docker run -p 8000:8000 \
           -v /absolute/path/to/database:/database \
           -e KUZU_BUFFER_POOL_SIZE=1073741824 \
           --rm kuzudb/explorer:latest
```

#### In-memory mode

By default, Kùzu Explorer is launched in disk-based mode. If you want to launch Kùzu Explorer in in-memory mode, you can do so by setting the `KUZU_IN_MEMORY` environment variable to `true` as follows.

```bash
docker run -p 8000:8000 \
           -e KUZU_IN_MEMORY=true \
           --rm kuzudb/explorer:latest
```

In in-memory mode, the database is stored in memory and all changes are lost when the server is shut down even if a database directory is mounted. Also, read-only access mode is not supported in in-memory mode.


#### Dev builds

If you want to launch Kùzu Explorer with the latest development build of Kùzu, you can do so by using the `dev` tag instead of `latest`.

```bash
docker run -p 8000:8000 \
           -v /absolute/path/to/database:/database \
           --rm kuzudb/explorer:dev
```

The `dev` tag is updated daily, approximately two hours after the latest dev build of Kùzu is released.

### Updating Kùzu Explorer

When a new version of Kùzu Explorer is released after the initial launch, re-launching the container WILL NOT automatically update the local image to the latest version. To update the local image to the latest version, you can run the following command.

```bash
docker pull kuzudb/explorer:latest
```

After pulling the latest image, you can re-launch the container with the same command as before.

### Launch with Podman

If you are using [Podman](https://podman.io/) instead of Docker, you can launch Kùzu Explorer by replacing `docker` with `podman` in the commands above. However, note that by default Podman maps the default user account to the `root` user in the container. This may cause permission issues when mounting local database files to the container. To avoid this, you can use the `--userns=keep-id` flag to keep the user ID of the current user inside the container, or enable `:U` option for each volume to change the owner and group of the source volume to the current user.

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

For more information regarding launching and using Kùzu Explorer, please refer to the [documentation](https://docs.kuzudb.com).

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
- [Toolchain for building Kùzu](https://docs.kuzudb.com/developer-guide/)
- [Git](https://git-scm.com/)

### Environment setup

#### Install Node.js dependencies

```bash
npm i
```

#### Download and compile Kùzu

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

We welcome contributions to Kùzu Explorer. By contributing to Kùzu Explorer, you agree that your contributions will be licensed under the [MIT License](LICENSE).

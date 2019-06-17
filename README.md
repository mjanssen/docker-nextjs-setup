## This is a base setup combining both Docker and Next.js

Run `npm start` for local development.

### Building Docker
Run `docker-compose up --build -d` to build your next.js application and publish the docker container.
Don't mind the errors, since it's using the Alpine image, to have the smallest image possible.

- `--build` creates image from scratch
- `-d` deamon mode - docker container continues on the background

Your next.js application will be build to src/build

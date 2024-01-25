IMAGE_TARGET_STAGE=development
IMAGE_TAG=development
IMAGE_BASE_NAME=tech-radar

image-build:
	DOCKER_BUILDKIT=1 docker build \
	--progress plain \
	-t ${IMAGE_BASE_NAME}:${IMAGE_TAG} .

run:
	docker run \
	-it --rm \
	-p 3000:3000 \
	-v ${PWD}:/app \
	-v /app/node_modules \
	-e CHOKIDAR_USEPOLLING=true \
	${IMAGE_BASE_NAME}:${IMAGE_TAG}

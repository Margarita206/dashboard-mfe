IMAGE_NAME = host-mfe
IMAGE_VERSION = latest
IMAGE_REGISTRY = 192.168.101.30:8443/server-ui-v2-image/
IMAGE_PORT = 80

# Docker ------------------------------------------------------------------------------
build-docker:
	docker build -t $(IMAGE_REGISTRY)$(IMAGE_NAME):$(IMAGE_VERSION) -f ./deployments/Dockerfile .

push-registry:
	docker push $(IMAGE_REGISTRY)$(IMAGE_NAME):$(IMAGE_VERSION)

start-container:
	docker run -d -e VITE_MFE_SOURCES_IP=http://192.168.101.27:31130/ -p 3000:${IMAGE_PORT} --name $(IMAGE_NAME) $(IMAGE_REGISTRY)$(IMAGE_NAME):$(IMAGE_VERSION)

save-rat-archive:
	docker save -o $(IMAGE_NAME).tar $(IMAGE_REGISTRY)$(IMAGE_NAME):$(IMAGE_VERSION)
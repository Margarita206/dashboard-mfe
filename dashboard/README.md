### Build docker

```bash
DOCKER_BUILDKIT=1 docker build --secret id=npmrc,src=$HOME/.npmrc -f deployments/Dockerfile -t 192.168.101.30:8443/server-ui-v2-image/dashboard-mfe .
```

### Push docker

```bash
docker push 192.168.101.30:8443/server-ui-v2-image/dashboard-mfe
```

### Copy deployment config

```bash
sshpass -p "12345678" scp deployments/deployment.yaml user@192.168.101.27:/home/user/mfes/dashboard-mfe/
```

### Ssh login

```bash
sshpass -p "12345678" ssh user@192.168.101.27
```

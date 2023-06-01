FROM openjdk:8
EXPOSE 8080
ADD target/boot-docker.jar boot-docker.jar
ENTRYPOINT ["java","-jar", "boot-docker.jar"]

#docker run -p 9090:8080 boot-docker-app used to run docker on port p for port
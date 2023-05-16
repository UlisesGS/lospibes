FROM openjdk:19-alpine
VOLUME /tmp
EXPOSE 8090
#RUN ./mvnw clean package -DskipTests
ADD ./target/gateway-0.0.1-SNAPSHOT.jar gateway.jar
ENTRYPOINT ["java", "-jar", "/gateway.jar"]
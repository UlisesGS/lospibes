FROM openjdk:19-alpine
VOLUME /tmp
#EXPOSE 8001
#RUN ./mvnw clean package -DskipTests
ADD ./target/libro-0.0.1-SNAPSHOT.jar libro.jar
ENTRYPOINT ["java", "-jar", "libro.jar"]
FROM openjdk:19-alpine
VOLUME /tmp
#EXPOSE 8001
#RUN ./mvnw clean package -DskipTests
ADD ./target/demo-0.0.1-SNAPSHOT.jar demo.jar
ENTRYPOINT ["java", "-jar", "demo.jar"]
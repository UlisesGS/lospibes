FROM openjdk:19-alpine
VOLUME /tmp
EXPOSE 8761
#RUN ./mvnw clean package -DskipTests
ADD ./target/eureka-0.0.1-SNAPSHOT.jar eureka.jar
ENTRYPOINT ["java", "-jar", "/eureka.jar"]
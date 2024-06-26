<h1>Projeto ImageLite</h1>
<hr>
<p>Projeto do curso Fullstack Spring Boot + ReactJS do Zero ao Deploy no Docker</p>
<h1>Descrição</h1>
<hr>
<p>Projeto feito em Next.JS e tailwind no front-end e backend em Spring com autenticação jwt e importado ao docker</p>
<h1>Execução</h1>
<hr>
<p>Clonar o repositorio e criar um arquivo Dockerfile na pasta raiz com  o código a seguir e no terminal ainda na pasta raiz executar a seguinte linha de código: docker compose up, após isso basta ir no localhost:3000</p>

<details>
 <summary>Código docker</summary>
FROM maven:3.8.5-openjdk-17 as builder
WORKDIR /app
COPY . .
RUN mvn dependency:resolve
RUN mvn clean package -DskipTests

FROM amazoncorretto:17
WORKDIR /app
COPY --from=builder ./app/target/*.jar ./application.jar
EXPOSE 8080

ENV POSTGRES_HOST=localhost
RUN echo "the env var POSTGRES_HOST value is $POSTGRES_HOST"

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=production", "application.jar"]
</details>

package io.github.dougllasfps.imageliteapi.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity // Entidade JPA
@Table(name = "auth_user") // Tabela de um banco
@EntityListeners(AuditingEntityListener.class)  // Data de criação
@Data // Getters e Setters do Lombok
@NoArgsConstructor // Cria um construtor sem argumentos
@AllArgsConstructor // Cria um construtor com argumentos
@Builder
public class User {

    @Id // id da entidade
    @GeneratedValue(strategy = GenerationType.UUID) // unique universal id
    private String id;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String password;
    @CreatedDate
    @Column(name = "created_at") // Annotation para dizer que é um dado de uma coluna, podemos customizar o nome
    private LocalDateTime createdAt;
}

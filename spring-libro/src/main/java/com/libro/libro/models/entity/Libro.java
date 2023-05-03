package com.libro.libro.models.entity;

import com.libro.libro.client.entity.Autor;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import javax.validation.constraints.NotNull;

@Entity
@Data
@Table(name = "libros")
public class Libro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String nombre;

    @NotNull
    private Integer paginas;

    @Transient
    private Autor autor;

    @NotNull
    private Long idAutor;


}

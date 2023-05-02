package com.autor.demo.repositorio;

import com.autor.demo.entidad.Autor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutorRepositorio extends JpaRepository<Autor,Long> {

}

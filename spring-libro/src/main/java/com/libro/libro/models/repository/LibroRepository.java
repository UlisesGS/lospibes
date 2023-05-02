package com.libro.libro.repository;

import com.libro.libro.models.entity.Libro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibroRepository extends JpaRepository<Libro, Long> {
}

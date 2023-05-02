package com.libro.libro.models.service;


import com.libro.libro.client.entity.Autor;
import com.libro.libro.models.entity.Libro;

import java.util.List;
import java.util.Optional;

public interface IntLibroService {

    public List<Libro> findAll();

    public Optional<Libro> findByid(Long id);

    public Libro save(Libro libro);

    public void deleteById(Long id);

    public List<Autor> findAllAutor();

    public Optional<Autor> findByIdAutor(Long id);
}

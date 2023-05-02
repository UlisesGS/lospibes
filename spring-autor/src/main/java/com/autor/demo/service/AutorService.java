package com.autor.demo.service;

import com.autor.demo.entidad.Autor;

import java.util.List;
import java.util.Optional;

public interface AutorService {
    public List<Autor> findAll();
    public Optional<Autor>findById(Long id);
    public Autor save(Autor autor);
    public void delete(Long id);
}

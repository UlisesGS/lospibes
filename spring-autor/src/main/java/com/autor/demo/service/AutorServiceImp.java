package com.autor.demo.service;

import com.autor.demo.entidad.Autor;
import com.autor.demo.repositorio.AutorRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AutorServiceImp implements AutorService {
    @Autowired
    private AutorRepositorio repositorio;

    @Override
    public List<Autor> findAll() {
        return repositorio.findAll();
    }

    @Override
    public Optional<Autor> findById(Long id) {
        return repositorio.findById(id);
    }

    @Override
    public Autor save(Autor autor) {
        return repositorio.save(autor);
    }

    @Override
    public void delete(Long id) {
        repositorio.deleteById(id);
    }
}

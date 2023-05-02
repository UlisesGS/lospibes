package com.libro.libro.models.service;

import com.libro.libro.client.AutorCLient;
import com.libro.libro.client.entity.Autor;
import com.libro.libro.models.entity.Libro;
import com.libro.libro.models.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImplLibroService implements IntLibroService{

    @Autowired
    private LibroRepository libroRepository;

    @Autowired
    private AutorCLient autorCLient;

    @Override
    public List<Libro> findAll() {
        return libroRepository.findAll();
    }

    @Override
    public Optional<Libro> findByid(Long id) {
        return libroRepository.findById(id);
    }

    @Override
    public Libro save(Libro libro) {
        return libroRepository.save(libro);
    }

    @Override
    public void deleteById(Long id) {
        libroRepository.deleteById(id);
    }

    @Override
    public List<Autor> findAllAutor() {
        return autorCLient.listar();
    }

    @Override
    public Optional<Autor> findByIdAutor(Long id) {
        return autorCLient.findByIdAutor(id);
    }
}

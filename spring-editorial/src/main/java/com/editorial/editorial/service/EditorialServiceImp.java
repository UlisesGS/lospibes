package com.editorial.editorial.service;

import com.editorial.editorial.entidad.Editorial;
import com.editorial.editorial.repositorio.EditorialRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class EditorialServiceImp implements EditorialService {
    @Autowired
    EditorialRepositorio repositorio;
    @Override
    public List<Editorial> findAll() {
        return repositorio.findAll();
    }

    @Override
    public Optional<Editorial> findById(Long id) {
        return repositorio.findById(id);
    }

    @Override
    public Editorial save(Editorial editorial) {
        return repositorio.save(editorial);
    }

    @Override
    public void deleteById(Long id) {
        repositorio.deleteById(id);
    }
}

package com.editorial.editorial.service;

import com.editorial.editorial.entidad.Editorial;

import java.util.List;
import java.util.Optional;

public interface EditorialService {
    public List<Editorial>findAll();
    public Optional<Editorial>findById(Long id);
    public Editorial save (Editorial editorial);
    public void deleteById(Long id);
}

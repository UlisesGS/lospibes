package com.libro.libro.client;

import com.libro.libro.client.entity.Autor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@FeignClient(name = "msvc-autor")
public interface AutorCLient {

    @GetMapping
    List<Autor>listar();

    @GetMapping("/{id}")
    Optional<Autor>findByIdAutor(@PathVariable Long id);
}

package com.editorial.editorial.controlador;

import com.editorial.editorial.entidad.Editorial;
import com.editorial.editorial.service.EditorialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class EditorialControlador {
    @Autowired
    private EditorialService service;

    private ResponseEntity<?> validar(BindingResult result) {
        Map<String, Object> errores = new HashMap<>();
        result.getFieldErrors().forEach(e -> {
            errores.put(e.getField(), "El campo " + e.getField() + " " + e.getDefaultMessage());
        });
        return new ResponseEntity<>(errores, HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        Optional<Editorial> e = service.findById(id);
        if (e.isPresent()) {
            return ResponseEntity.ok().body(e.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody Editorial editorial, BindingResult result) {
        if (result.hasErrors()) {
            return this.validar(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(editorial));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?>editar(@Valid @RequestBody Editorial editorial,
                                   BindingResult result,
                                   @PathVariable Long id){
        if (result.hasErrors()){
            return this.validar(result);
        }
        Optional<Editorial>e = service.findById(id);
        if (e.isPresent()){
            Editorial editorialDb= e.get();
            editorialDb.setNombre(editorial.getNombre());
            return ResponseEntity.status(HttpStatus.CREATED).body(service.save(editorialDb));
        }
        return ResponseEntity.notFound().build();

    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?>delete(@PathVariable Long id){
        Optional<Editorial>e = service.findById(id);
        if (e.isPresent()){
            service.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}

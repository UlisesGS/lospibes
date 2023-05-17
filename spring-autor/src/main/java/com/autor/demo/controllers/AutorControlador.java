package com.autor.demo.controllers;

import com.autor.demo.entidad.Autor;
import com.autor.demo.service.AutorService;
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
public class AutorControlador {
    //comentario para ver  en git
    @Autowired
    private AutorService service;
    private ResponseEntity<?>validar(BindingResult result){
        Map<String,Object>errores = new HashMap<>();
        result.getFieldErrors().forEach(e->{
            errores.put(e.getField(),"El campo "+e.getField()+ " "+ e.getDefaultMessage());
        });
        return new ResponseEntity<>(errores, HttpStatus.NOT_FOUND);
    }
    @GetMapping()
    public ResponseEntity<?>listar(){
        return ResponseEntity.ok().body(service.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<?>findById(@PathVariable Long id){
        Optional<Autor> respuesta = service.findById(id);
        if (respuesta.isPresent()){
            return ResponseEntity.ok().body(respuesta.get());
        }
        return ResponseEntity.notFound().build();
    }
    @PostMapping
    public ResponseEntity<?>save(@Valid @RequestBody  Autor autor,BindingResult result){
        if(result.hasErrors()){
            return validar(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(autor));

    }
    @PutMapping("/{id}")
    public ResponseEntity<?>editar(@Valid @RequestBody Autor autor,
                                   BindingResult result,@PathVariable Long id){
        if(result.hasErrors()){
            return validar(result);
        }
        Optional<Autor>respuesta = service.findById(id);
        if (respuesta.isPresent()){
            Autor autorDb = respuesta.get();
            autorDb.setNombre(autor.getNombre());
            return ResponseEntity.status(HttpStatus.CREATED).body(service.save(autorDb));
        }
        return ResponseEntity.notFound().build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?>delete(@PathVariable Long id){
        Optional<Autor>r = service.findById(id);
        if  (r.isPresent()){
            service.delete(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}

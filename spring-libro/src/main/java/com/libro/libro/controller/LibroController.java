package com.libro.libro.controller;

import com.libro.libro.client.entity.Autor;
import com.libro.libro.models.entity.Libro;
import com.libro.libro.models.service.ImplLibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class LibroController {

    @Autowired
    private ImplLibroService libroService;


    @GetMapping
    public ResponseEntity<?> findAll(){
        return ResponseEntity.ok().body(libroService.findAll());
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Optional<Libro> libroOptional = libroService.findByid(id);
        Libro libro=null;

        if (libroOptional.isEmpty()){
            return ResponseEntity.noContent().build();
        }

        libro = libroOptional.get();

        Autor autor = validateAutor(libro.getIdAutor());

        if(autor==null){
            return new ResponseEntity<>("El autor es incorrecto.", HttpStatus.NOT_FOUND);
        }

        libro.setAutor(autor);

        return ResponseEntity.ok().body(libro);
    }


    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody Libro libro, BindingResult result){

        try {

            if (result.hasErrors()){
                validate(result);
            }

            Autor autor = validateAutor(libro.getIdAutor());

            if(autor==null){
                return new ResponseEntity<>("El autor es incorrecto.", HttpStatus.NOT_FOUND);
            }

            libro.setAutor(autor);

            return ResponseEntity.status(HttpStatus.CREATED).body(libroService.save(libro));
        }catch (DataAccessException e){
            return ResponseEntity.internalServerError().build();
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> change(@Valid @RequestBody Libro libro, @PathVariable Long id, BindingResult result){
        Optional<Libro>libroOptional = libroService.findByid(id);
        try{
            if (result.hasErrors()){
                validate(result);
            }

            if (libroOptional.isEmpty()){
                return ResponseEntity.notFound().build();
            }

            Libro libro1 = libroOptional.get();

            libro1.setNombre(libro.getNombre());
            libro1.setPaginas(libro.getPaginas());


            return ResponseEntity.status(HttpStatus.CREATED).body(libroService.save(libro1));
        }catch (DataAccessException e){
            return ResponseEntity.internalServerError().build();
        }

    }


    /*NO ME ACUERDO QUE RESPONSEENTITY VAN EN EL RETURN*/
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        Optional<Libro> libroOptional = libroService.findByid(id);

        try {
            if (libroOptional.isEmpty()){
                return ResponseEntity.notFound().build();
            }

            libroService.deleteById(id);
            return ResponseEntity.noContent().build();
        }catch (DataAccessException e){
            return ResponseEntity.internalServerError().build();
        }

    }

    /*LO DEJO PA PROBAR NO MAS*/
    @GetMapping("/autor")
    public ResponseEntity<?> findAllAutor(){

        return ResponseEntity.ok().body(libroService.findAllAutor());

    }


    private Autor validateAutor(Long idAutor){
        Optional<Autor> autorOptional = libroService.findByIdAutor(idAutor);
        Autor autor=null;

        if(autorOptional.isPresent()){
            autor = autorOptional.get();
        }
        return autor;

    }


    private ResponseEntity<?> validate(BindingResult result){
        Map<String, Object> response = new HashMap<>();

        result.getFieldErrors().forEach(resultados ->{
            response.put(resultados.getField(), ", el campo "+ resultados.getField()+ " "+resultados.getDefaultMessage());
        });

        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.cliente.cliente.controller;

import com.cliente.cliente.entity.Cliente;
import com.cliente.cliente.service.ClienteServiceImpl;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author crowl
 */
@RestController
public class ClienteController {
    
    @Autowired
    private ClienteServiceImpl servCliente;
    
    @GetMapping
    public ResponseEntity<?>listar(){
        List<Cliente> clientes=servCliente.findByAll();
        if(clientes.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(clientes); 
    }
    
    @GetMapping("/{}id")
    public ResponseEntity<?>buscarPorId(@PathVariable Long id){
        Cliente cliente= servCliente.findById(id).get();
        if(cliente==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(cliente);
    }
    @PostMapping
    public ResponseEntity<?>guardar(@RequestBody Cliente cliente){
        Cliente nuevoCliente=servCliente.save(cliente);
        return ResponseEntity.ok(this);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?>modificar(@PathVariable Long id){
        Optional<Cliente> find= servCliente.findById(id);
        if(find.isPresent()){
            Cliente cliente=find.get();
            
        }
    }
    
    
    
}

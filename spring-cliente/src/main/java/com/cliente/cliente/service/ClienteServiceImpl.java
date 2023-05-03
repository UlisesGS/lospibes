/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.cliente.cliente.service;


import com.cliente.cliente.entity.Cliente;
import com.cliente.cliente.repository.IClienteRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author crowl
 */
@Service
public class ClienteServiceImpl implements IClienteService{
    @Autowired
    private IClienteRepository repoCliente;

    @Override
    public List<Cliente> findByAll() {
        return repoCliente.findAll();
    }

    @Override
    public Optional<Cliente> findById(Long id) {
        return repoCliente.findById(id);
    }

    @Override
    public Cliente save(Cliente cliente) {
        return repoCliente.save(cliente);
    }

    @Override
    public void update(Cliente cliente) {
        repoCliente.save(cliente);
    }

    @Override
    public void deleteById(Long id) {
        repoCliente.deleteById(id);
    }
    
}

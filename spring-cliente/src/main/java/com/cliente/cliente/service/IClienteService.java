/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.cliente.cliente.service;

import com.cliente.cliente.entity.Cliente;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author crowl
 */
public interface IClienteService {
    
    public List<Cliente> findByAll();
    public Optional<Cliente> findById(Long id);
    public Cliente save(Cliente cliente);
    public void update(Cliente cliente);
    public void deleteById(Long id);
}

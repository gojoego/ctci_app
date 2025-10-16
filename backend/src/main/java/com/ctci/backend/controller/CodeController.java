package com.ctci.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ctci.backend.model.CodeRequest;
import com.ctci.backend.model.CodeResponse;
import com.ctci.backend.service.CodeExecutionService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") 
public class CodeController {

    private final CodeExecutionService service; 

    public CodeController(CodeExecutionService service) {
        this.service = service;
    }

    @PostMapping("/execute")
    public CodeResponse execute(@RequestBody CodeRequest request){
        String result = service.runJavaCode(request.getCode());
        boolean success = !result.contains("❌");
        return new CodeResponse(success, result);
    }
}
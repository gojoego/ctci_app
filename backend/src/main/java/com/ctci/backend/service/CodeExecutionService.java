package com.ctci.backend.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.tools.JavaCompiler;
import javax.tools.ToolProvider;

import org.springframework.stereotype.Service;

@Service
public class CodeExecutionService {
    public String runJavaCode(String code) {
        try {
            // save user-submitted code to file 
            File file = new File("UserSolution.java");
            try (FileWriter fw = new FileWriter(file)) {
                fw.write(code);
            }
            
            // compile code 
            JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
            if (compiler.run(null, null, null, file.getPath()) != 0){
                return "❌ Compilation failed.";
            }

            // execute compiled class 
            ProcessBuilder pb = new ProcessBuilder("java", "UserSolution");
            pb.redirectErrorStream(true);
            Process process = pb.start();
            BufferedReader reader = new BufferedReader(
                new InputStreamReader(process.getInputStream())
            );

            StringBuilder output = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null)
                output.append(line).append("\n");
            
            process.waitFor();
            return output.toString();
        } catch (IOException e) {
            return "❌ IO Error: " + e.getMessage();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return "❌ Execution interrupted.";
        } catch (Exception e) {
            // fallback for anything unexpected
            return "❌ Unexpected error: " + e.getMessage();
        }
    }
}
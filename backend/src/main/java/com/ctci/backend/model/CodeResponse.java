package com.ctci.backend.model;

public class CodeResponse {
    private boolean success;
    private String output;

    public CodeResponse(boolean success, String output) {
        this.success = success;
        this.output = output;
    }

    public boolean isSuccess(){
        return success;
    }
    public String getOutput(){
        return output;
    }
}
package com.ctci.backend.model;

public class CodeRequest {
    private String code;
    private String problemId;

    public String getCode(){
        return code;
    }
    public void setCode(String code){
        this.code = code;
    }

    public String getProblemId(){
        return problemId;
    }
    public void setProblemId(String problemId){
        this.problemId = problemId;
    }
}
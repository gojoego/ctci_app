package com.ctci.ch1;

public class MyStringBuilder {
    private char[] data;
    private int size;

    public MyStringBuilder(){
        this(16);
    }

    public MyStringBuilder(int capacity) {
        if (capacity <= 0) {
            throw new IllegalArgumentException("capacity must be > 0");
        }
        data = new char[capacity];
        size = 0;
    }

    private void ensureCap(int additionalChars){
        int required = size + additionalChars;
        if (required > data.length) {
            int newCap = Math.max(data.length * 2, required);
            char[] newData = new char[newCap];
            System.arraycopy(data, 0, newData, 0, size);
            data = newData;
        }
    }

    public MyStringBuilder append(char c){
        ensureCap(1);
        data[size] = c;
        size++;
        return this;
    }

    public MyStringBuilder append(String s){
        if (s == null) {
            return append("null");
        }

        int len = s.length();
        ensureCap(len);

        for (int i = 0; i < size; i++) {
            data[size + i] = s.charAt(i);
        }

        size += len;

        return this;
    }

    public String convertString(){
        return new String(data, 0, size);
    }
}
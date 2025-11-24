package com.ctci.ch1;

public class StringCompression {

    public static void main(String[] args) {
        System.out.println();
    }

    public static String compressString(String input) {
        String output = "";
        int countConsecutive = 0;
        for (int i = 0; i < input.length(); i++){
            countConsecutive++;

            if (i + 1 >= input.length() || input.charAt(i) != input.charAt(i + 1)) {
                output += "" + input.charAt(i) + countConsecutive;
                countConsecutive = 0;
            }
        }
        return output;    
    }
}

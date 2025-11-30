package com.ctci.ch1;

public class IsUnique {
    public static void main(String[] args) {
        System.out.println(isUniqueChars(""));
        System.out.println(isUniqueCharsBit(""));
    }

    public static boolean isUniqueChars(String input) {
        if (input.length() > 128) return false;

        boolean[] char_set = new boolean[128];
        for (int i = 0; i < input.length(); i++) {
            int value = input.charAt(i);
            if (char_set[value]) return false;

            char_set[value] = true;
        }
        return true;
    }

    public static boolean isUniqueCharsBit(String input) {
        int checker = 0;

        for (int i = 0; i < input.length(); i++) {
            int value = input.charAt(i);
            if ((checker & (1 << value)) > 0) return false;
            checker |= (1 << value); 
        }
    
        return true;
    }
}

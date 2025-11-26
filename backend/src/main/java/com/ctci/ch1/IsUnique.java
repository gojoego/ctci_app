package com.ctci.ch1;

public class IsUnique {
    public static void main(String[] args) {
        System.out.println(isUnique(""));
    }

    public static boolean isUnique(String input) {
        if (input.length() > 128) return false;

        boolean[] char_set = new boolean[128];
        for (int i = 0; i < input.length(); i++) {
            int value = input.charAt(i);
            if (char_set[value]) return false;

            char_set[value] = false;
        }
        return true;
    }
}

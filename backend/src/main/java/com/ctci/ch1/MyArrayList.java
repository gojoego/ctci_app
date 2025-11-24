package com.ctci.ch1;

public class MyArrayList<E> {

    private E[] data;
    private int size;

    public MyArrayList() {
        this(10);
    }    

    @SuppressWarnings("unchecked")
    public MyArrayList(int capacity) {
        if (capacity <= 0) {
            throw new IllegalArgumentException("capacity must be > 0");
        } 
        data = (E[]) new Object[capacity];
        size = 0;
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    private void checkIndex(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException(
                "index: " + index + ", size: "
            );
        }
    }    

    public E get(int index) {
        checkIndex(index);
        return data[index];
    }

    public E set(int index, E value) {
        checkIndex(index);
        E old = data[index];
        data[index] = value;
        return old;
    }
    
    @SuppressWarnings("unchecked")
    public void ensureCap() {
        if (size == data.length) {
            int newCap = data.length * 2;
            E[] newData = (E[]) new Object[newCap];
            System.arraycopy(data, 0, newData, 0, size);
            data = newData;
        }
    }

    public void add(E value){
        ensureCap();
        data[size] = value;
        size++;
    }

    public E remove(int index) {
        checkIndex(index);
        E removed = data[index];

        for (int i = index; i < size -1; i++){
            data[i] = data[i + 1];
        }

        data[size] = null;
        size--;

        return removed;
    }

    public String buildString(){
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        for (int i = 0; i < size; i++){
            sb.append(data[i]);
            if (i < size - 1) {
                sb.append(", ");
            }
        }

        sb.append("]");
        return sb.toString();
    }
}

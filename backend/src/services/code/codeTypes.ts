export namespace codeTypes {
  export interface CodeResponse {
    language: string;
    content: string;
    extension: string;
  }

  export interface CodeFile {
    content: string;
    filename: string;
  }

  export const CODE_TEMPLATES: Record<string, string> = {
    javascript: 'console.log("Hello, World!");',
    typescript: 'const message: string = "Hello, World!";
console.log(message);',
    python: 'print("Hello, World!")',
    java: 'public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}',
    csharp: 'using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}',
    cpp: '#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}',
    go: 'package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}',
    ruby: 'puts "Hello, World!"',
    php: '<?php
echo "Hello, World!";
?>',
    swift: 'print("Hello, World!")',
    kotlin: 'fun main() {
    println("Hello, World!")
}',
    rust: 'fn main() {
    println!("Hello, World!");
}',
    html: '<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>',
    bash: '#!/bin/bash
echo "Hello, World!"'
  };
}

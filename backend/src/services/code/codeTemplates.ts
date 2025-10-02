/**
 * Hello World code templates for various programming languages
 */
export const codeTemplates: Record<string, string> = {
  JavaScript: 'console.log("Hello, World!");',

  Python: 'print("Hello, World!")',

  Java: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',

  CSharp:
    'using System;\n\nnamespace HelloWorld\n{\n  class Program\n  {\n    static void Main(string[] args)\n    {\n      Console.WriteLine("Hello, World!");\n    }\n  }\n}',

  CPlusPlus:
    '#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!" << std::endl;\n  return 0;\n}',

  PHP: '<?php\n  echo "Hello, World!";\n?>',

  Ruby: 'puts "Hello, World!"',

  Go: 'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, World!")\n}',

  Swift: 'import Swift\n\nprint("Hello, World!")',

  TypeScript: 'console.log("Hello, World!");',
};

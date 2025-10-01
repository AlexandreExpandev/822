export namespace languageTypes {
  export interface Language {
    id: string;
    name: string;
    extension: string;
  }

  export const SUPPORTED_LANGUAGES: Language[] = [
    { id: 'javascript', name: 'JavaScript', extension: 'js' },
    { id: 'typescript', name: 'TypeScript', extension: 'ts' },
    { id: 'python', name: 'Python', extension: 'py' },
    { id: 'java', name: 'Java', extension: 'java' },
    { id: 'csharp', name: 'C#', extension: 'cs' },
    { id: 'cpp', name: 'C++', extension: 'cpp' },
    { id: 'go', name: 'Go', extension: 'go' },
    { id: 'ruby', name: 'Ruby', extension: 'rb' },
    { id: 'php', name: 'PHP', extension: 'php' },
    { id: 'swift', name: 'Swift', extension: 'swift' },
    { id: 'kotlin', name: 'Kotlin', extension: 'kt' },
    { id: 'rust', name: 'Rust', extension: 'rs' },
    { id: 'html', name: 'HTML', extension: 'html' },
    { id: 'bash', name: 'Bash', extension: 'sh' },
  ];
}

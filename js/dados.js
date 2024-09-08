let dados = [
    {
        nome: "JavaScript",
        criador: "Brendan Eich",
        anoCriacao: 1995,
        paradigmas: "orientado a objetos, funcional, prototipado",
        caracteristicas: "Interpretada, tipagem dinâmica, multi-paradigma",
        link: "https://pt.wikipedia.org/wiki/JavaScript",
        youtube: "BXqUH86F-kA",
        img: "javascript.png"
    },
      {
        nome: "Python",
        criador: "Guido van Rossum",
        anoCriacao: 1991,
        paradigmas: "orientado a objetos, funcional, procedural",
        caracteristicas: "Interpretada, tipagem dinâmica, legível",
        link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
        youtube: "S9uPNppGsGo",
        img: "phyton.png"
      },
      {
        nome: "Java",
        criador: "James Gosling",
        anoCriacao: 1995,
        paradigmas: "orientado a objetos",
        caracteristicas: "Compilada, tipagem estática, plataforma cruzada",
        link: "https://pt.wikipedia.org/wiki/Java_(linguagem_de_programa%C3%A7%C3%A3o)",
        youtube: "LnORjqZUMIQ",
        img: "java.png"
      },
      {
        nome: "PHP",
        criador: "Rasmus Lerdorf",
        anoCriacao: 1994,
        paradigmas: "procedural, orientado a objetos, funcional",
        caracteristicas: "Linguagem interpretada, de script, de propósito geral, especialmente adequada para desenvolvimento web.",
        link: "https://pt.wikipedia.org/wiki/PHP",
        youtube: "TfsO0BGvGn0",
        img: "php.png"
      },
      {
        nome: "C#",
        criador: "Anders Hejlsberg",
        anoCriacao: 2000,
        paradigmas: "orientado a objetos",
        caracteristicas: "Linguagem compilada, fortemente tipada, multi-paradigma, orientada a componentes, com suporte a programação assíncrona e funcional.",
        link: "https://pt.wikipedia.org/wiki/C_Sharp",
        youtube: "PKMm-cHe56g",
        img: "c-sharp.png"
      },
      {
        nome: "C",
        criador: "Dennis Ritchie",
        anoCriacao: 1972,
        paradigmas: "procedural",
        caracteristicas: "Linguagem de programação de baixo nível, compilada, fortemente tipada, com foco em eficiência e portabilidade.",
        link: "https://pt.wikipedia.org/wiki/C_(linguagem_de_programa%C3%A7%C3%A3o)",
        youtube: "2w8GYzBjNj8",
        img: "c.png"
      },
      {
        nome: "C++",
        criador: "Bjarne Stroustrup",
        anoCriacao: 1979,
        paradigmas: "multi-paradigma, orientado a objetos, procedural, genérico",
        caracteristicas: "Linguagem de programação compilada, fortemente tipada, que oferece alto nível de controle sobre a memória e recursos do sistema. Suporta programação procedural, orientada a objetos e genérica.",
        link: "https://pt.wikipedia.org/wiki/C%2B%2B",
        youtube: "nUQKr-ey86Y",
        img: "c++.png"
      },
      {
        nome: "TypeScript",
        criador: "Microsoft",
        anoCriacao: 2012,
        paradigmas: "tipado staticamente, orientado a objetos",
        caracteristicas: "Superconjunto do JavaScript que adiciona tipagem estática, interfaces, classes e outras funcionalidades para melhorar a organização e manutenabilidade do código.",
        link: "https://en.wikipedia.org/wiki/TypeScript",
        youtube: "ppDsxbUNtNQ",
        img: "typescript.png"
      },
      {
        nome: "Ruby on Rails",
        criador: "David Heinemeier Hansson",
        anoCriacao: 2004,
        paradigmas: "MVC, convenção sobre configuração",
        caracteristicas: "Framework web de alto nível, escrito em Ruby, que segue o padrão Model-View-Controller e enfatiza a simplicidade e a produtividade.",
        link: "https://pt.wikipedia.org/wiki/Ruby_on_Rails",
        youtube: "F2qEsqDXZWI",
        img: "ruby_on_rails.svg"
      },
      {
        nome: "Delphi",
        criador: "Anders Hejlsberg",
        anoCriacao: 1995,
        paradigmas: "orientado a objetos, procedural",
        caracteristicas: "Linguagem compilada, fortemente tipada, com foco em desenvolvimento rápido de aplicações (RAD), especialmente para Windows.",
        link: "https://pt.wikipedia.org/wiki/Delphi_(software)",
        youtube: "pFni9cj4tqE",
        img: "delphi.png"
      },
      {
        nome: "Go",
        criador: "Robert Griesemer, Rob Pike, Ken Thompson",
        anoCriacao: 2009,
        paradigmas: "imperativo, concorrente, compilado",
        caracteristicas: "Linguagem de programação compilada, estática e de tipagem forte, projetada para construir software simples, confiável e eficiente.",
        link: "https://pt.wikipedia.org/wiki/Go_(linguagem_de_programa%C3%A7%C3%A3o)",
        youtube: "WiGU_ZB-u0w",
        img: "go.png"
      },
      {
        nome: "SQL",
        criador: "Comitê ANSI/ISO",
        anoCriacao: 1974,
        paradigmas: "declarativo",
        caracteristicas: "Linguagem de consulta estruturada para gerenciar bancos de dados relacionais. Permite inserir, atualizar, excluir e recuperar dados.",
        link: "https://pt.wikipedia.org/wiki/SQL",
        youtube: "G7bMwefn8RQ",
        img: "sql.jpg"
      },
      {
        nome: "Visual Basic for Applications (VBA)",
        criador: "Microsoft",
        anoCriacao: 1993,
        paradigmas: "orientado a objetos, procedural",
        caracteristicas: "Linguagem de programação de alto nível, utilizada para automatizar tarefas em aplicativos da suíte Microsoft Office. É fortemente tipada e baseada em eventos.",
        link: "https://pt.wikipedia.org/wiki/Visual_Basic_for_Applications",
        youtube: "RnZV0D2nWYs",
        img: "vba.png"
      },
      {
        nome: "MATLAB",
        criador: "Cleve Moler",
        anoCriacao: 1984,
        paradigmas: "imperativo, orientado a objetos, funcional",
        caracteristicas: "Linguagem interpretada, de alto nível, com foco em computação numérica, visualização de dados e desenvolvimento de algoritmos.",
        link: "https://en.wikipedia.org/wiki/MATLAB",
        youtube: "da0qJnleaEQ",
        img: "matlab.png"
      },
      {
        nome: "Scala",
        criador: "Martin Odersky",
        anoCriacao: 2003,
        paradigmas: "funcional, orientado a objetos",
        caracteristicas: "Linguagem de programação multi-paradigma, compilada, fortemente tipada, que roda na JVM e interopera com Java.",
        link: "https://pt.wikipedia.org/wiki/Scala_(linguagem_de_programa%C3%A7%C3%A3o)",
        youtube: "WoOZuiM28LI",
        img: "scala.png"
      },
      {
        nome: "Kotlin",
        criador: "JetBrains",
        anoCriacao: 2011,
        paradigmas: "funcional, orientado a objetos",
        caracteristicas: "Linguagem moderna, estática e multiplataforma, com foco em segurança e concisão. Roda na JVM e interopera com Java.",
        link: "https://pt.wikipedia.org/wiki/Kotlin",
        youtube: "4lOjDziyce8",
        img: "kotlin.jpg"
      },
      {
        nome: "Rust",
        criador: "Graydon Hoare",
        anoCriacao: 2010,
        paradigmas: "multi-paradigma, imperativo, funcional, orientado a objetos",
        caracteristicas: "Linguagem de programação compilada, fortemente tipada, com foco em segurança de memória, concorrência e performance. Possui um sistema de ownership e borrowing que garante a segurança de memória.",
        link: "https://pt.wikipedia.org/wiki/Rust_(linguagem_de_programa%C3%A7%C3%A3o)",
        youtube: "zWXloY0sslE",
        img: "rust.png"
      },
      {
        nome: "HTML",
        criador: "Tim Berners-Lee",
        anoCriacao: 1993,
        paradigmas: "declarativo",
        caracteristicas: "linguagem de marcação, estrutura de documentos, hipertexto",
        link: "https://pt.wikipedia.org/wiki/HTML",
        youtube: "nPEpaft1y1k",
        img: "html.png"
      },
      {
        nome: "Cascading Style Sheets (CSS)",
        criador: "Håkon Wium Lie",
        anoCriacao: 1996,
        paradigmas: "declarativo",
        caracteristicas: "folhas de estilo em cascata, estiliza elementos HTML, separação de conteúdo e apresentação",
        link: "https://pt.wikipedia.org/wiki/Cascading_Style_Sheets",
        youtube: "w1J6gY40yMo",
        img: "css.png"
      }
];
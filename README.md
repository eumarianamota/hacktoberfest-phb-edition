# HacktoberFest PHB Edition
O objetivo desse repositório é guiar desenvolvedores e estudantes que querem fazer a sua primeira contribuição em  projetos open source. Seja bem-vindo(a) e espero que esse repositório possa lhe ajudar.

Antes de iniciar o tutorial, certifique-se de que você está incrito no hacktoberfest, se não estiver, faça o seu [cadastro aqui](https://hacktoberfest.com/).


## 1. Faça um Fork do repositório
O `fork` é uma cópia pessoal de um repositório de outra pessoa. Ao fazer um `fork`, você cria um novo repositório na sua conta que é uma cópia do original, permitindo que você faça alterações sem afetar o projeto original.

<img src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

## 2. Clone o repositório para a sua máquina
Diferente do `fork`, onde você copiou um repositório de outra pessoa para o seu GitHub, com o `clone` você vai copiar o repositório do seu Github para o seu computador. 

Para isso, primeiro você clica em "code" e depois copia a URL do SSH, veja o exemplo:

<img src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />

<img src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

Copiou a URL do SSH? Agora abra o terminal do seu computador e faça um git clone.
```bash
git clone git@github.com:seu-nome/hacktoberfest-phb-edition.git
```

## 3. Crie uma Branch 
Ainda no terminal, entre na pasta onde você acabou de clonar o seu projeto github.
```bash 
cd nome-da-pasta
```
Agora vamos criar uma branch e mudar para ela com o seguinte comando:
```bash
git switch -c novo-nome-da-branch
```

## 4. Faça as suas contribuições
Com o projeto clonado e a branch criada, abra ele em um editor de código como o vscode ou outro de sua preferência e vamos fazer as suas contribuições. Para esse projeto, as contribuições são as seguintes:

1. Adicione uma foto sua na pasta "documents"
2. Coloque o seu nome, seu github e instagram (opcional) no arquivo "infos.md"

Seu nome, foto e redes sociais ficarão no site da HacktoberFest PHB Edition que você pode acessar pelo link na descrição do repositório.

## 5. Sincronize as mudanças 
O primeiro comando a ser executado é o `git status`, com ele, você consegue verificar o estado atual do repositório, quais arquivos foram modificados, quais estão prontos para serem adicionadose quais não estão sendo monitorados pelo Git. Veja o exemplo: 

```bash 
git status
```

Depois de verificar o estado do seu repositório e ver que tem mudanças a serem sincroniadas, você pode usar o `git add` para adicionar essas mudanças na stanging area, local onde esses arquivos vão ficar até o commit ser executado. 
```bash
git add . //adiciona todos os arquivos modificados na staging area
git add nome-do-arquivo //adiciona somente o arquivo citado na staging area
``` 

Com todos os arquivos adicionados na staging area, agora você vai salvar esses arquivos no repositório local com o comando `git commit`, veja: 
```bash
git commit -m "added my name, picture and social media to the project"
```

Por fim, envie as mudanças para o repositório remoto usando o comando `git push`:
```bash
git push -u origin nome-da-sua-branch
```

## 5. Envie as suas mudanças para review
Se você for no seu repositório no github, você verá um botão de `Compare & Pull Request`, clique nesse botão e envie o seu Pull Request para análise.

<img src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

<img src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Seguiu o tutorial certinho? fique tranquilo(a) que em breve vamos juntar todas as suas mudanças na branch main e você recebrá um email com a notificação das mudanças. 

## Terminei, e agora?
Fez o seu primeiro Pull Request com sucesso? Agora faltam só mais cinco contribuições para você concluir o desafio do hacktoberfest 2025.

Para te ajudar, vou deixar o link de alguns repositórios que você pode contribuir para concluir o desafio, mas não se limite a eles, existem inúmeros projetos do github esperando pela sua contribuição.

### Repositórios em Markdown 
[Materiais de estudo]()
[Simuladores Virtuais]()
[Materiais sobre cybersegurança]()
[Repositório de extensões para IDE]()

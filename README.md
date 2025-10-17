# HacktoberFest PHB Edition
O objetivo desse repositório é guiar desenvolvedores e estudantes que querem fazer a sua primeira contribuição em  projetos open source. Seja bem-vindo(a) e espero que esse repositório possa lhe ajudar.

## Faça um Fork do repositório
<img src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

Fazer um fork é fazer uma cópia de um repositório para a seu github. 

## Clone o repositório para a sua máquina
Com o fork do repositório feito, é hora de fazer um clone dele e mandar para a sua máquina. 

Para isso, primeiro você clica em "code" e depois copia a URL do SSH, veja o exemplo:

<img src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />

<img src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

Copiou a URL do SSH? Agora abra o terminal do seu computador e faça um git clone.
```bash
git clone git@github.com:seu-nome/hacktoberfest-phb-edition.git
```

## Crie uma Branch 
Ainda no terminal, entre na pasta onde você acabou de clonar o seu projeto github.
```bash 
cd nome-da-pasta
```
Agora vamos criar uma branch e mudar para ela com o seguinte comando:
```bash
git switch -c novo-nome-da-branch
```

## Faça as suas contribuições
Com o projeto clonado e a branch criada, abra ele em um editor de código como o vscode ou outro de sua preferência e vamos fazer as suas contribuições.  Para esse projeto, as contribuições são as seguintes:

1. Adicione uma foto sua na pasta "documents"
2. Coloque o seu nome, seu github e instagram (opcional) no arquivo "infos.md"

Seu nome, foto e redes sociais ficarão no site da HacktoberFest PHB Edition que você pode acessar pelo link na descrição do repositório.

## Sincronize as mudanças 
Execute o seguinte comando no terminal do seu projeto para ver se tem mudanças a serem sincronizadas:
```bash 
git status
```

O "git status" retornou que o seu projeto tem mudanças a serem sincroniadas? Se sim, adicione essas mudanças para a sua branch com o seguinte comando:
```bash
git add .
``` 

Agora faça o commit dessas mudanças usando o comando:
```bash
git commit -m "added my name, picture and social media to the project"
```

Por fim, envie as mudanças usando o comando `git push`:
```bash
git push -u origin nome-da-sua-branch
```

## Envie as suas mudanças para review
Se você for no seu repositório no github, você verá um botão de `Compare & Pull Request`, clique nesse botão e envie o seu Pull Request para análise.

<img src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

<img src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Seguiu o tutorial certinho? fique tranquilo(a) que em breve vamos juntar todas as suas mudanças na branch main e você recebrá um email com a notificação das mudanças. 

## Terminei, e agora?
Fez o seu primeiro Pull Request com sucesso? Agora faltam só mais cinco contribuições para você concluir o desafio do hacktoberfest 2025.

Para te ajudar, vou deixar o link de alguns repositórios que você pode contribuir para concluir o desafio, mas não se limite a eles, existem inúmeros projetos do github esperando pela sua contribuição. 











# Instructions to run

Clone the project using

```
git clone https://github.com/viniciusmurad/PZ_Challenge_Web.git
```

Install dependencies using:

```
npm install
```

```
bower install
```

Run server using:

```
npm start
```

The webapp will be running at

```
http://localhost:3000
```


# PZ_Challenge_Web
Programming Challenge for Web Developers

# Photozig - Desafio de programação Web

## Instruções de entrega do desafio

1. Primeiro, faça um fork deste projeto para sua conta no Github (crie uma se você não possuir).
2. Em seguida, implemente o projeto tal qual descrito abaixo, em seu próprio fork.
3. Crie as instruções de instalação e execução do aplicativo em seu readme.md
4. Por fim, envie o link do seu repositório para avaliarmos seu código

## Requisitos do projeto

Carregar um json dinamicamente a partir da url `http://pbmedia.pepblast.com/pz_challenge/assets.json`, fazer o parse e criar uma interface (lista) com os objetos disponíveis no json. Na lista mostrar o nome ("name") e a imagem ("im") do objeto.

Quando selecionado algum item da lista, deve mostrar uma nova tela onde tocará o vídeo background ("bg") juntamente com o áudio ("sg"). O background deve tocar em looping até o áudio terminar.

Para os objetos que contenham textos ("txts"), a interface deve mostrar os textos centralizados em cima do vídeo background no tempo especificado ("time").

Bônus 1: ter uma opção de ir para o item próximo e anterior a partir dessa tela, sem ter que voltar para a lista e selecionar outro item.

Bônus 2: implementar usando o Canvas.

Para carregar os assets utilizar a url base do campo ("assetsLocation") + o nome do arquivo especificado em cada objeto.

## Avaliação

Seu projeto será avaliado conforme os critérios:

1. Atende funcionalmente o que foi pedido;
2. Interpretação dos requisitos e do json fornecido;
3. Documentar o que é necessário para configurar o ambiente e rodar sua aplicação na maquina do avaliador;
4. Boas práticas de programação;
5. Código bem escrito, fácil de entender e manter;
6. Interface e uso da aplicação pelo Usuário;

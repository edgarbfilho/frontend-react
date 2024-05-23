# Use a imagem base oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia todos os arquivos da aplicação para o diretório de trabalho
COPY . .

# Compila a aplicação React
RUN npm run build

# Instala o servidor HTTP estático `serve`
RUN npm install -g serve

# Define a porta que será exposta
EXPOSE 3000

# Comando para rodar o servidor `serve` e servir a aplicação compilada
CMD ["serve", "-s", "build", "-l", "3000"]

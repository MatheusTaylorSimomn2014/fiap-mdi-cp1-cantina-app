# Cantina - App: A Cantina Inteligente da FIAP

## Nomes, RM´s e Contribuições Descritas do Grupo:

| Nome | Contribuições |
|------|----------------|
| Henrique Maldonado, RM557270 | Fez toda a estrutura do projeto e desenvolveu o código Cantina App, tudo de uma vez. |
| Matheus Taylor, RM556211 | Desenvolveu a documentação do README.md do Cantina App e a criação do repositório do github `fiap-mdi-cp1-cantina-app`. |

## Sobre o Projeto

**Nome do App:** Cantina - App: A Cantina Inteligente da FIAP 
**Problema resolvido:** Durante os intervalos, a cantina da FIAP costuma ficar lotada, fazendo com que os alunos percam tempo em filas longas sem saber o momento ideal para ir lanchar. Este app resolve esse problema oferecendo **monitoramento em tempo real da fila**, estatísticas de atendimento e um gráfico histórico da ocupação.

**Operação da FIAP escolhida:** Operação **Cantina** – escolhida por ser um ambiente de alto fluxo de alunos, onde a gestão de filas impacta diretamente a experiência e o tempo disponível para alimentação.

### Funcionalidades implementadas

- **Tela inicial** – exibe o número atual de pessoas na fila, com status visual (🟢 Tranquilo, 🟡 Moderado, 🔴 Cheio) e ícone ilustrativo.
- **Tela "Ver análise completa"** – simula a fila dinâmica e calcula:
- Média do tempo de atendimento (min)
- Variância dos tempos
- Tempo estimado total = média × tamanho da fila
- **Tela "Ver histórico da fila"** – gráfico de barras atualizado automaticamente com as últimas 10 medições e seus horários.
- **Navegação** – por abas (Home / Perfil – aguardando implementação) e botões de navegação para as telas de análise e histórico.

## Como Rodar o Projeto

### Pré‑requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- Aplicativo **Expo Go** no celular (Android/iOS) ou emulador Android/iOS configurado

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/MatheusTaylorSimomn2014/fiap-mdi-cp1-cantina-app.git
cd fiap-mdi-cp1-cantina-app/cantina-app
```
2. **Instale as dependências**

```bash
npm install
```

3. **Inicie o servidor Expo**

```bash
npx expo start
```
4. **Execute no dispositivo/emulador**

Escaneie o QR Code com o Expo Go (Android/iOS) ou pressione `a` para emulador Android / `i` para iOS

**OBS:** Certifique-se de que o celular e o computador estejam na mesma rede Wi-Fi.

## Demonstração

### Prints das telas

### **Tela do Grafico da Fila Cantina:**

<img width="422" height="707" alt="Grafico_fila" src="https://github.com/user-attachments/assets/9dd654e0-b993-4832-8054-803189b0dbb4" />

### **Tela e código do Grafico da Fila Cantina:**

<img width="1140" height="828" alt="Grafico_Fila_code" src="https://github.com/user-attachments/assets/4bec0147-7e94-4a25-a88b-fab347bfbe9e" />

### **Tela e código do Menu Cantina:**

<img width="1557" height="826" alt="Menu_Cantina_code" src="https://github.com/user-attachments/assets/d270813d-bce1-4473-be35-de1339dbb6d2" />

### **Tela e código da Simulação da Cantina:**

<img width="1554" height="843" alt="Simula_Cantina_code" src="https://github.com/user-attachments/assets/5bf5bae4-cd04-43bd-af3a-ecb0f279b398" />

### Vídeo do Cantina App Rodando
https://www.youtube.com/watch?v=9kSTV4Xo338
**Link do vídeo para uma demonstração em tempo: Clique aqui para assistir**


## Decisões Técnicas

### Estrutura do projeto
O projeto foi criado com Expo (SDK 51) e utiliza o Expo Router para navegação baseada em arquivos. A organização das pastas segue o padrão recomendado:

```text
cantina-app/
├── app/
│   ├── _layout.js       
│   ├── index.js         
│   ├── sobre.js        
│   └── status.js        
├── assets/              
├── .gitignore
├── App.js               
├── app.json
└── package.json
```

### Hooks utilizados e suas funções

| Hook       | Local                                   | Finalidade                                                                                           |
|------------|-----------------------------------------|------------------------------------------------------------------------------------------------------|
| `useState`   | index.js, sobre.js, status.js           | Armazenar estado da fila, tempos de atendimento, média, variância, estimativa, dados do gráfico e flags de loading. |
| `useEffect`  | index.js, sobre.js, status.js           | Executar efeitos colaterais: atualização periódica da fila (simulação), cálculo de estatísticas e coleta de dados para o gráfico. |
| `useRouter`  | index.js, sobre.js, status.js           | Navegação programática entre telas (`router.push()`, `router.back()`).                               |

### Navegação
- Utilizamos Expo Router com `Tabs` no `_layout.js`, definindo duas abas: Home (`index`) e Perfil (aguardando implementação futura).
- Dentro da tela Home, usamos `TouchableOpacity` com 'router.push()' para ir até as rotas `/sobre` e `/status`, criando uma navegação em pilha aninhada às abas.
- Isso permite que o usuário explore análises avançadas e retorne facilmente com `router.back()`.

### Simulação de dados
Como o app foi desenvolvido para demonstração (sem backend real), utilizamos `setInterval` e `Math.random()` para simular:
- Número de pessoas na fila (0 a 14)
- Tempo de atendimento por pessoa (2 a 6 minutos)
- Atualização a cada 2 ou 3 segundos, dependendo da tela

Essa abordagem permite testar todas as funcionalidades sem dependência externa.

### Estilização
- `StyleSheet.create` para estilos isolados por componente.
- Cores definidas manualmente (ex: `#F23064` para cards principais, `#32CD32` para estimativa, `#FF8C00` para barras do gráfico).
- Layout responsivo com `flex`, `alignItems` , `justifyContent` e `padding`. 

## Próximos Passos 
Com mais tempo, o grupo implementaria:

- **Backend real** – API REST com Node.js + MongoDB para armazenar filas reais e históricos.
- **Autenticação** – Login com e-mail FIAP para associar o perfil do aluno.
- **Localização** – Detectar qual cantina (unidade) o aluno está.
- **Notificações push** – Avisar quando a fila estiver abaixo de 5 pessoas.
- **Tema escuro** e acessibilidade (aumento de contraste, suporte a leitores de tela).
- **Tela de Perfil** – exibir histórico do aluno, preferências e tempo médio de espera nos últimos dias.

# Licença
**Este projeto foi desenvolvido para fins acadêmicos – FIAP – Mobile Development & IOT (CheckPoint 1).**

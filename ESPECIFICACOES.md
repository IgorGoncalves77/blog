## Especificações - Geral

- O projeto utiliza React
- O projeto utiliza Redux
- O projeto utiliza Material-UI

## Especificações - UI

- Os componentes da interface estão estilizados com Material-UI, enriquecendo a experiência de usuário;
- Os posts contém título, conteúdo, autor, data de criação e indicador de votos;
- Os posts podem ser editados e excluídos, também como serem votados e comentários pode ser adicionados;
- Os comentários podem ser visualizados junto com o post;
- Os comentários contém autor e conteúdo;
- Os comentários podem ser editados e excluídos, também como serem votados;

## Especificações - Função

- Quando o usuário clica em uma categoria os posts exibidos em tela são corretamente filtrados pela categoria selecionada;
- Quando o usuário escolhe uma ordenação, os posts são ordenados de acordo com o tipo escolhido seja ele pelo saldo de votos ou data de criação, podendo ter uma ordenação padrão caso não seja selecionado;
- A aplicação deve possibilitar a criação de novos posts e também a criação de comentários em posts já existentes;
- A aplicação deve possibilitar a votação de posts bem como comentários;
- O formulário de criação de posts bem como o de comentários deve possuir validações para impedir de inserir dados na API que sejam inválidos de alguma forma (ex: sem autor, sem data de criação, etc...), a API pode ser alterada de acordo para impedir tais casos;

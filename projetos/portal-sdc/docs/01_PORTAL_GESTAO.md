# Módulo 01 — Portal de Gestão

**Objetivo:** acompanhar escolas, estudantes, filtros e indicadores num único local, reduzindo alternâncias manuais entre planilhas.

## Já demonstrado no MVP 1.4

- Navegação e consulta de informações consolidadas;
- Filtros por escola e acompanhamento de estudantes;
- Indicadores agregados e distribuição de níveis CEFR;
- Acesso organizado às etapas de triagem documental na interface.

## Requisitos ainda pendentes de validação

- Autenticação e autorização por papéis definidos pela instituição;
- Perfis com acesso mínimo necessário (coordenação, mentores e, se aprovado, estudantes);
- Tratamento de erros e sessões expiradas;
- Usabilidade no celular, acessibilidade e responsividade;
- Consistência dos indicadores após alterações concorrentes;
- Impedimento de acesso cruzado entre escolas.

## Critérios de aceite para uma futura homologação

- [ ] Usuário não autorizado não obtém dados ou executa operações pela API;
- [ ] Usuário de uma escola não visualiza documentos de outra;
- [ ] Os indicadores exibidos batem com a base de teste para o mesmo instante;
- [ ] Os filtros não expõem campos pessoais desnecessários;
- [ ] Testes de navegação e responsividade documentados;
- [ ] Logs de exceção e mudanças relevantes recuperáveis.

## Evidência publicável

Print agregado do dashboard, sem nomes, contatos, dados de nascimento, documentos ou URLs internas. A demo da pasta `demo/` é uma implementação pública fictícia, não o backend real.

# Módulo 04 — Gestão Pedagógica

**Estado:** em desenvolvimento. O Portal SDC possui fontes estruturadas que podem alimentar relatórios, mas os geradores ainda não foram demonstrados como concluídos.

## Produto A — Relatório mensal

**Entrada proposta:** mês/ano, projeto, unidades participantes, encontros, indicadores disponíveis, pendências autorizadas e observações institucionais.

**Saída pretendida:** Google Docs editável e, após conferência, PDF. O relatório deve separar **dados automáticos**, **observações humanas** e **campos sem evidência**.

### Estrutura inicial

1. Identificação do período e escopo;
2. Escolas e participação (dados agregados);
3. Atividades e encontros do período;
4. Evolução dos indicadores disponíveis (sem alegar causalidade);
5. Pendências, encaminhamentos, responsáveis e próximos passos;
6. Revisão e aprovação humana.

## Produto B — Gerador de planos de aula

**Entrada proposta:** público-alvo, série, tema, objetivo de aprendizagem, duração, recursos, nível CEFR *estimado/observado* e estratégia didática.

**Saída pretendida:** plano de aula editável com objetivos, warm-up, leitura/atividade, prática, avaliação formativa, adaptação e referências. Toda proposta precisa de revisão docente.

## Organização técnica sugerida

- Definir modelos de documento versionados e revisáveis;
- Separar coleta de parâmetros de formatação;
- Validar campos essenciais antes de gerar;
- Registrar versão do modelo, autor, data e status de revisão;
- Não inserir automaticamente dados pessoais em prompts externos;
- Somente anexar relatórios a pastas autorizadas.

## Critérios de aceite

- [ ] Relatório piloto criado com dados fictícios e referência temporal;
- [ ] Valores do relatório conferidos com a base utilizada;
- [ ] Campos ausentes indicados, não inventados;
- [ ] Documento editável gerado e revisado;
- [ ] Plano de aula piloto gerado com objetivos e duração consistentes;
- [ ] Revisão docente antes de distribuição;
- [ ] Política de acesso e armazenamento definida.

**Não implementado neste pacote:** geradores conectados ao Drive ou rotinas que produzam documentos institucionais de verdade.

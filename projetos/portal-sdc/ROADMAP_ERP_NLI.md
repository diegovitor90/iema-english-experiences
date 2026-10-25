# Evolução proposta — ERP do Núcleo de Língua Inglesa (NLI)

> **Visão de produto em estudo. Não é uma implantação aprovada, contratada ou concluída.**

## Motivação

A experiência incremental no Portal SDC trouxe necessidades reutilizáveis: registros confiáveis, trilhas de auditoria, indicadores, documentos, relatórios e fluxos pedagógicos. Um **ERP modular** pode ser uma hipótese para integrar processos do Núcleo de Língua Inglesa, mas seu escopo deve surgir de entrevistas e requisitos reais.

## Primeira visão: quatro frentes integradas

| Frente | Escopo | Situação observada |
|---|---|---|
| **Portal de Gestão** | Operações, escolas, participantes, projetos e indicadores | MVP SDC demonstrado; expansão não homologada |
| **Nivelamento CEFR** | Diagnóstico piloto e relatórios pedagógicos | Em desenvolvimento; avaliação não construída |
| **Automação Documental** | Triagem, revisão, conferência e auditoria | Parcialmente testado no SDC; adaptação geral não concluída |
| **Gestão Pedagógica** | Relatórios e planos de aula editáveis | Em desenvolvimento |

### Módulos que podem ser estudados depois

Formação docente (eventos, inscrições, presença e avaliações), biblioteca de materiais, comunicação interna, indicadores institucionais, configuração de perfis, autenticação e serviços de suporte.

## Percurso recomendado

### Fase 0 — Descoberta e governança
- [ ] Ouvir usuários, identificar trabalhos repetitivos e problemas reais;
- [ ] Delimitar titularidade, autorização e uso de dados institucionais;
- [ ] Definir papéis, finalidade de tratamento e medidas LGPD;
- [ ] Selecionar indicadores de sucesso observáveis.

### Fase 1 — Homologação do SDC
- [ ] Concluir controle de acesso e testes de permissões;
- [ ] Testar rejeições, correções, reprocessamento e duplicatas;
- [ ] Verificar consistência dos indicadores e logs;
- [ ] Validar responsividade e usabilidade.

### Fase 2 — Módulos pedagógicos em ambiente de teste
- [ ] Prototipar relatório mensal com dados fictícios;
- [ ] Gerar plano de aula editável para revisão docente;
- [ ] Desenvolver banco piloto de itens de inglês;
- [ ] Registrar resultados diagnósticos sem apresentar certificação CEFR.

### Fase 3 — Decisão arquitetural do ERP
- [ ] Levantar requisitos funcionais e não funcionais;
- [ ] Comparar manutenção em Apps Script com alternativas de backend;
- [ ] Planejar autenticação, acesso, logs, backup, observabilidade e custos;
- [ ] Prototipar um módulo com uma equipe piloto autorizada.

### Fase 4 — Avaliação de impacto
- [ ] Comparar tempo de tarefas, erros e retrabalho antes/depois;
- [ ] Coletar feedback com usuários voluntários/autorizados;
- [ ] Decidir evolução incremental com base em resultados demonstrados.

## Pergunta principal

**Quais processos educacionais e administrativos do NLI se beneficiariam mais de uma plataforma integrada — e quais requisitos de segurança, governança e acessibilidade precisam vir antes?**

A proposta precisa ser validada institucionalmente antes de ser descrita como ERP em operação.

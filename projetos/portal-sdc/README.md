# Portal SDC | Da planilha à gestão educacional integrada

**Estudo de caso de Engenharia de Software — MVP 1.0 → 1.4 → proposta modular**

> **Projeto autoral de portfólio e documentação técnica.** Desenvolvido a partir dos desafios do School Diplomacy Clubs (SDC), no contexto do Núcleo de Língua Inglesa (NLI/IEMA). **Não é publicação oficial do IEMA, ERP institucional implantado nem código completo do ambiente real.** A demonstração pública é independente, utiliza somente dados fictícios e não se conecta a planilhas ou documentos reais.

## O problema real

Uma operação educacional envolve escolas, estudantes, documentos e indicadores. Quando cada parte é acompanhada separadamente, aparecem riscos de retrabalho, registros inconsistentes e decisões sem rastreabilidade.

A evolução seguiu um caminho incremental:

**dados organizados → portal de consultas → triagem documental → verificação humana → proposta de módulos pedagógicos.**

## Evolução do MVP

| Versão | Evolução documentada | Situação |
|---|---|---|
| **1.0** | Busca de escolas e estudantes, filtros, indicadores e distribuição por nível CEFR | Protótipo demonstrado |
| **1.1** | Localização/triagem de documentos, sugestões de vínculo e interface de revisão | Fluxos de triagem testados |
| **1.2** | Separação entre confirmação de vínculo e validação de assinatura, com trilha de auditoria | Casos controlados testados |
| **1.4** | Interface reorganizada, navegação lateral, indicadores e acesso às etapas documentais | MVP apresentado; homologação integral pendente |

**Retrato histórico da base de trabalho:** 48 escolas, 246 estudantes cadastrados e 126 com continuidade confirmada. Esses valores não constituem painel em tempo real e não devem ser confundidos com os números da demo.

![Visão do painel MVP 1.4 com dados agregados](assets/dashboard-mvp-1-4-agregado.png)

*Referência visual do protótipo. Não é evidência de implantação de um ERP.*

## Quatro módulos na visão integrada

A infraestrutura já construída motiva a organização das próximas funcionalidades em **quatro frentes**. Elas **não estão todas concluídas**.

| Módulo | Já demonstrado ou disponível | Em desenvolvimento / ainda não homologado |
|---|---|---|
| **1. Portal de Gestão** | Consulta, filtros, dashboard, estudantes, escolas e indicadores | Autorização por perfil, robustez e testes de segurança |
| **2. Nivelamento CEFR** | Registro/distribuição de níveis já existentes | Banco piloto, avaliação, correção e relatório diagnóstico; **não certifica proficiência** |
| **3. Automação Documental** | Triagem, sugestão de vínculo, separação entre vínculo e assinatura e eventos de auditoria em testes | Rejeição, correção, duplicidade, idempotência, testes de permissão e homologação |
| **4. Gestão Pedagógica** | Dados estruturados que podem alimentar relatórios | Gerador de relatórios mensais e planos de aula editáveis com revisão humana |

**Importante:** o fato de a plataforma ter infraestrutura compartilhável não equivale a dizer que 47%, 80% ou qualquer outro percentual foi comprovado por testes automatizados. A situação de cada módulo está detalhada em [MÓDULOS.md](MODULOS.md).

## Tecnologias e decisões

- **Frontend:** HTML, CSS, JavaScript;
- **Automação e backend:** Google Apps Script;
- **Dados e documentos:** Google Sheets e Google Drive;
- **Identidade dos registros:** identificadores estáveis, nunca posições de linha;
- **Documentação:** estados distintos para arquivo encontrado, vínculo confirmado e assinatura validada;
- **Decisões sensíveis:** revisão humana, autorização e trilha de auditoria.

Consulte [ARQUITETURA.md](ARQUITETURA.md) e os requisitos de cada módulo em [`docs/`](docs/).

## Testes documentados e limites

No primeiro ciclo da triagem foram **11 arquivos examinados, 6 encaminhados para triagem e 3 sugestões únicas de correspondência**. Encontrar um arquivo não valida uma assinatura. As rotinas de rejeição, correção, prevenção de duplicidade, permissões e alguns fluxos da versão 1.4 ainda exigem validação. Leia [CHECKLIST_HOMOLOGACAO.md](CHECKLIST_HOMOLOGACAO.md).

## Demonstração pública, sem dados reais

A pasta [`demo/`](demo/) reúne **uma experiência visual independente**, criada para ilustrar telas e conceitos, sem autenticação institucional, API Google ou persistência. Abra [`demo/index.html`](demo/index.html) em seu navegador para explorar os dados de exemplo.

![Demonstração pública independente em desktop](assets/preview-demo-desktop.png)

> Não utilize a demo para tratar documentos reais ou coletar dados pessoais. Ela não é um ambiente de homologação do IEMA.

## Próxima etapa: estudar um ERP para o NLI

A proposta de produto é investigar uma plataforma de módulos reutilizáveis para gestão, documentação, formação docente, acompanhamento pedagógico e relatórios. **O ERP ainda é um conceito de evolução**, sujeito a levantamento de requisitos, autorização, análise de segurança e validação institucional.

Leia [ROADMAP_ERP_NLI.md](ROADMAP_ERP_NLI.md) e [CHANGELOG.md](CHANGELOG.md).

---
**Diego Vitor — Engenharia de Software.** Projeto apresentado como estudo de caso pessoal. Menções ao SDC/IEMA contextualizam o desafio e não representam endosso, divulgação oficial ou transferência de dados institucionais.

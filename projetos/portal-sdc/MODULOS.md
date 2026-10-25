# Os quatro módulos — Visão de produto e status

**Referência:** Portal SDC MVP 1.4 e proposta incremental de expansão. **Status declarado com base no histórico do desenvolvimento, não em uma bateria automatizada de testes.**

| Módulo | Finalidade | Entregas já documentadas | Próxima entrega verificável | Estado |
|---|---|---|---|---|
| [01 — Portal de Gestão](docs/01_PORTAL_GESTAO.md) | Consulta e acompanhamento | Filtros, visão geral e distribuição CEFR | Testes de permissão e navegação | **MVP funcional, em homologação** |
| [02 — Nivelamento CEFR](docs/02_NIVELAMENTO_CEFR.md) | Diagnóstico de inglês | Registro de níveis existentes | Banco de itens piloto e diagnóstico não certificador | **Em desenvolvimento** |
| [03 — Automação Documental](docs/03_AUTOMACAO_DOCUMENTAL.md) | Fluxo rastreável de documentos | Triagem, sugestões e revisão em casos de teste | Rejeição, correção e controle de acesso | **Protótipo parcialmente testado** |
| [04 — Gestão Pedagógica](docs/04_GESTAO_PEDAGOGICA.md) | Documentos pedagógicos | Fontes estruturadas disponíveis | Primeiro relatório e plano editável gerados | **Em desenvolvimento** |

## Interfaces e limites de integração

```text
             PORTAL WEB (HTML / CSS / JavaScript)
                            |
                  GOOGLE APPS SCRIPT
               /            |            \
       Google Sheets    Google Drive    Geradores (futuros)
            |               |               |
     Cadastros/CEFR    Triagem/revisão    Docs/PDF (proposta)
```

A integração não deve apagar ou duplicar a base existente. Os módulos compartilham identificadores estáveis e regras centralizadas de acesso, logs e validação.

### O que os números significam

- **48 escolas / 246 estudantes / 126 continuidades:** retrato histórico do protótipo com base de trabalho, não cadastro público.
- **11 arquivos / 6 triagens / 3 sugestões:** resultado de um primeiro ciclo de testes, não prova de que todos os documentos tenham sido aprovados.
- **CEFR:** dados de nível registrados são informação cadastral; não demonstram que um teste de nivelamento foi aplicado e validado.
- **Relatórios e planos:** a existência de fontes de dados não equivale à geração automática concluída.

## Próximos passos

O [checklist de homologação](CHECKLIST_HOMOLOGACAO.md) indica o que precisa ser registrado como evidência antes de atualizar o status de um módulo.

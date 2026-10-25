# Módulo 02 — Nivelamento de inglês (referenciado ao CEFR)

**Estado:** em desenvolvimento. Níveis já registrados na base não comprovam realização de uma avaliação diagnóstica.

## Propósito

Construir um **diagnóstico pedagógico piloto** que forneça evidências de leitura e uso da língua inglesa e oriente ações educativas, sem se apresentar como certificação oficial CEFR.

## Fluxo funcional proposto

1. Acesso autorizado e associação a identificador estável do estudante;
2. Seleção de avaliação diagnóstica conforme objetivo e faixa-alvo;
3. Aplicação piloto de *Reading* e *Use of English*;
4. Correção de itens objetivos e armazenamento de respostas;
5. Relatório por habilidade e recomendações para análise docente;
6. Revisão pedagógica da rubrica e do relatório antes de uso real.

*Listening*, *Speaking* e *Writing* exigem materiais acessíveis, critérios próprios e, quando apropriado, avaliadores e rubricas humanas.

## Esboço de dados — somente fictícios

| Campo | Uso |
|---|---|
| `assessment_id` | Identificador da versão do teste |
| `student_id` | Vínculo estável; não usar nome como chave |
| `item_id` | Identificador de questão |
| `skill` | Habilidade avaliada |
| `answer` / `score` | Resposta e pontuação quando aplicável |
| `completed_at` | Registro temporal |
| `rubric_version` | Rastrear critérios vigentes |

## Requisitos antes de alegar classificação de proficiência

- [ ] Banco piloto de questões autorizado e revisado pedagogicamente;
- [ ] Critérios de correção e rubricas documentados;
- [ ] Controle de tentativas e acessibilidade;
- [ ] Proteção dos resultados individuais e regras de retenção;
- [ ] Validação pedagógica e avaliação de confiabilidade;
- [ ] Relatório que indique explicitamente **estimativa diagnóstica**, não certificação.

**Não implementado neste pacote:** banco de questões, aplicação, correção, resultados individuais ou conexão à base institucional.

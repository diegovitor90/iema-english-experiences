# Checklist de validação — Portal SDC e quatro módulos

**Objetivo:** evitar confundir *código criado*, *teste isolado*, *demonstração* e *homologação completa*. Este checklist não registra novas execuções de teste: todos os itens abaixo permanecem **pendentes de evidência verificável** neste pacote.

## 1. Portal de Gestão
- [ ] Autenticação e papéis de acesso definidos;
- [ ] Teste negativo: usuário sem perfil não vê informações nem executa ações;
- [ ] Filtros e indicadores conferidos em base fictícia;
- [ ] Testes de responsividade e acessibilidade registrados.

## 2. Nivelamento CEFR
- [ ] Banco de itens e versões identificados;
- [ ] Aplicação piloto funcional, sem dados reais;
- [ ] Correção e relatórios diagnósticos conferidos;
- [ ] Rubricas pedagógicas revisadas;
- [ ] Resultado explicitamente rotulado como **não certificador**.

## 3. Automação Documental
- [ ] Rejeição de vínculo testada;
- [ ] Solicitação de correção testada;
- [ ] Reexecução não gera duplicatas;
- [ ] Acesso ao documento é restrito por perfil;
- [ ] Trilha de auditoria íntegra e recuperável;
- [ ] A validação de assinatura ocorre **somente após revisão humana**.

## 4. Gestão Pedagógica
- [ ] Relatório mensal gerado em formato editável a partir de dados fictícios;
- [ ] Os indicadores do relatório foram conferidos;
- [ ] Plano de aula gerado com parâmetros e objetivos definidos;
- [ ] Responsável docente revisou e ajustou a saída;
- [ ] Permissões e armazenamento definidos.

## Verificações transversais
- [ ] Privacidade: não expor nomes, contatos, datas de nascimento ou termos;
- [ ] Versões e logs recuperáveis;
- [ ] Testes de falhas e recuperação;
- [ ] Inventário de permissões e acessos;
- [ ] Aprovação explícita para eventual uso institucional.

## Modelo para registrar evidência

| Data | Versão | Módulo | Cenário | Esperado | Obtido | Evidência sem dados pessoais | Responsável |
|---|---|---|---|---|---|---|---|
| A preencher | 1.4+ | A preencher | A preencher | A preencher | A preencher | Link autorizado | A preencher |

Atualize o README **apenas após** o cenário respectivo ter sido testado e documentado.

# Módulo 03 — Automação Documental

**Estado:** triagem e partes do fluxo de revisão implementadas/testadas no MVP; homologação integral pendente.

## Problema de negócio

Encontrar um arquivo em uma pasta não garante que pertença ao estudante correto, que o termo seja a versão exigida ou que a assinatura esteja válida.

## Fluxo registrado no estudo de caso

```text
Drive: arquivo encontrado
  -> Apps Script: identificação e normalização
  -> sugestão de vínculo, quando possível
  -> fila de triagem
  -> revisor confirma ou rejeita o vínculo
  -> conferência humana da assinatura
  -> situação documental atualizada + auditoria
```

**Três estados distintos:** `ENCONTRADO`, `VINCULO_CONFIRMADO` e `ASSINATURA_VALIDADA`. A transição entre esses estados não é automática apenas porque um PDF está presente.

## Testes iniciais informados

- 11 arquivos examinados;
- 6 documentos encaminhados à triagem;
- 3 sugestões únicas;
- 3 registros sem correspondência exata;
- Nenhum vínculo automático indevido relatado nesse ciclo.

Esses resultados não comprovam funcionamento completo de rejeição, autorização por perfil ou correção documental.

## Decisões de engenharia

- Relacionar documentos a **IDs estáveis**, nunca a números de linha;
- Registrar ID do arquivo, escola, status e histórico de revisão quando autorizado;
- Registrar o responsável pela decisão, sem tornar as informações públicas;
- Tratar nomes e escolas parecidos apenas como sugestão assistida;
- Planejar **idempotência** para evitar eventos duplicados em reexecuções;
- Validar permissões no servidor, não só escondendo botões no frontend;
- Evitar aprovação automática de assinaturas.

## Critérios de aceite pendentes

- [ ] Rejeição de vínculo testada;
- [ ] Solicitação de correção e reenfileiramento testados;
- [ ] Arquivo duplicado ou renomeado não gera duplicação indevida;
- [ ] Concorrência controlada nas atualizações;
- [ ] Usuário sem permissão não revisa, aprova nem acessa arquivos;
- [ ] Cada decisão gera trilha de auditoria íntegra;
- [ ] Uma assinatura não é dada como válida sem conferência humana.

**Não incluir neste repositório:** termos reais, IDs do Drive, nomes, CPF, contatos, datas de nascimento, credenciais, logs contendo dados de estudantes ou código conectado ao ambiente institucional.

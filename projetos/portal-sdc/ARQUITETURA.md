# Arquitetura do Portal SDC e visão modular — Estudo de caso

Este documento separa **arquitetura existente no MVP** de **componentes planejados para a expansão**.

## Camadas conhecidas do MVP 1.4

| Camada | Responsabilidade |
|---|---|
| Google Sheets | Cadastros, relações por ID, estado dos registros e indicadores |
| Google Drive | Organização e localização de documentos |
| Google Apps Script | Leitura, processamento, regras, eventos e registros de auditoria |
| HTML + CSS + JavaScript | Interface de consulta, navegação e revisão |
| Revisor autorizado | Confirmação de vínculo, verificação de assinatura e decisão documentada |

```text
             PORTAL WEB
         HTML / CSS / JavaScript
                   |
            Google Apps Script
        (consulta, triagem, logs)
           /                \
     Google Sheets        Google Drive
     (IDs e estados)      (documentos)
           \                /
               Revisão humana
```

## Quatro frentes de negócio

- **Portal de Gestão:** aproveita consulta e painel existentes, mas precisa homologar acesso e segurança.
- **Nivelamento CEFR:** novo fluxo de avaliação diagnóstica — em desenvolvimento.
- **Automação Documental:** aproveita triagem parcialmente testada, com decisões sensíveis humanas.
- **Gestão Pedagógica:** geradores de relatórios e planos — em desenvolvimento.

## Contratos de dados (proposta)

- `student_id`: ID individual estável do estudante;
- `school_id`: código estável da unidade escolar, a ser validado;
- `document_id`: identidade do registro de documento, distinta do nome do arquivo;
- `assessment_id`: versão do instrumento de avaliação;
- `report_id`: identificador da versão do relatório;
- `audit_event_id`: evento rastreável da alteração.

**Atenção:** não transformar esse esboço em banco de dados oficial sem validar cabeçalhos, IDs existentes e regras institucionais.

## Três conceitos separados na documentação

1. **Arquivo encontrado**: existe um arquivo no armazenamento;
2. **Vínculo confirmado**: documento associado a registro específico após revisão;
3. **Assinatura validada**: assinatura conferida por pessoa autorizada.

Os testes de 1.1/1.2 documentaram momentos distintos de triagem, vínculo e validação, mas não comprovam homologação de todas as transições, permissões, rejeições e falhas.

## Regras para integrar módulos sem retrabalho

- Reaproveitar as abas e estruturas autorizadas; não duplicar cadastros;
- Tratar IDs como chaves estáveis, não valores derivados de posição da linha;
- Aplicar regras de acesso nas operações do servidor;
- Registrar criação, alteração e revisão com rastreabilidade;
- Implementar mecanismos contra duplicatas e concorrência;
- Permitir alteração/reversão controlada e manter logs adequados;
- Definir política de retenção, finalidade e minimização dos dados sob LGPD;
- Publicar demos apenas com valores fictícios ou agregados não identificáveis;
- Separar claramente **MVP SDC** de **proposta futura de ERP NLI**.

## Limite do repositório

A demo em `demo/` é apenas visual, com dados inventados. O repositório não deve hospedar código de produção, planilhas e PDFs de estudantes, URLs privadas, IDs de pastas operacionais, credenciais ou tokens.

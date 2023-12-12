*** Settings ***
Documentation    Teste de Cadastro de Atividade
Library    SeleniumLibrary

*** Variables ***
${URL}            http://localhost:.com

*** Test Cases ***
Cadastro de Atividade Com Sucesso
    Open Browser    ${URL}    Chrome  executable_path=/usr/bin/chromedriver
    Maximize Browser Window
    [Teardown]    Close Browser

    # Preencher o formulário com dados válidos
    Input Text    name=nome_atividade    Nome da Atividade Válida
    Input Text    name=descricao_atividade    Descrição da Atividade
    Input Text    name=data_atividade    2023-12-31   # Data futura válida
    Select From List By Label    name=pasta_atividade    Casa
    Click Element    css=input[name=destacar_atividade]
    Click Element    css=input[name=finalizada_atividade]
    Click Element    css=input[type=submit]

    # Validar se a atividade foi cadastrada com sucesso
    Page Should Contain    Atividade cadastrada com sucesso

# Cadastro de Atividade Com Dados Inválidos
#     Open Browser    ${URL}    Chrome
#     Maximize Browser Window
#     [Teardown]    Close Browser

#     # Preencher o formulário com dados inválidos
#     Input Text    name=nome_atividade    # Deixe o campo de nome em branco
#     Input Text    name=data_atividade    2020-01-01   # Data passada inválida
#     Click Element    css=input[type=submit]

#     # Validar mensagem de erro
#     Page Should Contain    Por favor, preencha o campo "Nome da Atividade"
#     Page Should Contain    A data de finalização deve ser igual ou superior à data atual

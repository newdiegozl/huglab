# erros comuns 
- o app precisa ter um modelo cpp ja baixado para poder ser aberto, para resolver isso crie um arquivo que baixa um modelo cpp leve que pode ser desintalado e trocado por algum outro de sua preferencia mas gostaria de dar recomendações possiveis bugs que ainda estou trabalhando para resolver, causo voce deixe o modelo montado e desintale ele e feche o app sem montar outro modelo isso pode fazer com que o app não abra mais por que o app depende que todos os servers abram para rodar logo se o http não rode o app não abre, o http python sera removido no futuro a escolha de http ao invez de fazer direto pelo ipc foi escolhida por que pretendia manter um web app no futuro o que ainda pretentdo mas limitando fuções de montagem e dowload para interface electron para deixar mais seguro e menos codigo duplicado.

# orientação 
- ests pasta foi criada para ajudar facilitar configurar o projeto 
atualmente para manter um stream de download de modelos é usado o wget ou curl, mas causo eles falhem no app ele consegue cair para a biblioteca ofiacial da hugface, então wget e curl são apenas esteticos para acapanamente de prograsso ele tambem tendem a ter um download mais rapido do modelos mas não juntifica a sua intalação  então fica ao seu criterio ter ou não ter essa dependecias causo quero algo mais leve recomendo não baixalos o app ira funcionar mesmo sem eles.

# recado
causa perceba difuldade em cofigurar o projeto pode deixar um mensagem huglab\.github\ISSUE_TEMPLATE\bug_report.md eu irei ler e arrumar assim que possivel.



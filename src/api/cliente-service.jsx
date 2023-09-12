import service from "./service";

function obter(){
    return new Promise((resolve, reject) => {
        service.get('/clientes', {
            headers:{
                'Authorization': obterToken()
            }
        })
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}
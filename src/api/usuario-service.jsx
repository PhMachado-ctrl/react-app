import service from "./service";

// Vai la na API se autenticar devolve os dados
function autenticar(email, senha){
    // Retorna uma promessa
    return new Promise((resolve, reject) => {
        service.post('/login', {email, senha})
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

export default {
    autenticar
}
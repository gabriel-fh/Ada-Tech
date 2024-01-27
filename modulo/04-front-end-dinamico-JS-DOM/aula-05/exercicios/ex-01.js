// Exercícios

// Crie uma função assíncrona usando setTimeout e callback

const semIdeiaPraNome = (callback) => {
    callback();
    console.log('deu certo?');
}

setTimeout(() => {
    semIdeiaPraNome(() => {
        console.log('Slá cara')
    });
}, 1000)


const funcaoAssincrona = async (callback) => {
    setTimeout(() => { 
        semIdeiaPraNome(callback);
    }, 2000)
}

funcaoAssincrona(() => {
    console.log('Callback da função assíncrona');
});


// Identifique e discuta um exemplo de Callback Hell

const outraFuncaoAssincrona = (callback) => {
    setTimeout(() => { 
        semIdeiaPraNome(callback);
    }, 3000);
}

setTimeout(() => {
    semIdeiaPraNome(() => {
        console.log('callback hell');

        funcaoAssincrona(() => {
            console.log('primeiro aninhamento');

            outraFuncaoAssincrona(() => {
                console.log('segundo aninhamento');
            });
        });
    });
}, 1000);


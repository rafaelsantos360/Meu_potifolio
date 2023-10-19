fetch('https://api.open-meteo.com/weather?cities=sao%20paulo,rio%20de%20janeiro,salvador,porto%20alegre&key=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    // Manipule os dados recebidos aqui
    
  })
  .catch(error => {
    // Trate os erros adequadamente
  });

function extrairCoordenadas(cidade) {
const latitude = cidade.lat;
const longitude = cidade.lon;

return { latitude, longitude };
}
then(data => {
    const saoPaulo = extrairCoordenadas(data.sao_paulo);
    const rioDeJaneiro = extrairCoordenadas(data.rio_de_janeiro);
    const salvador = extrairCoordenadas(data.salvador);
    const portoAlegre = extrairCoordenadas(data.porto_alegre);
  
    // Atualize as temperaturas nas células da tabela
    document.getElementById('temp-sao-paulo').innerText = saoPaulo.temperature;
    document.getElementById('temp-rio-de-janeiro').innerText = rioDeJaneiro.temperature;
    document.getElementById('temp-salvador').innerText = salvador.temperature;
    document.getElementById('temp-porto-alegre').innerText = portoAlegre.temperature;
  });
  
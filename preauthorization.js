const axios = require('axios');
const crypto = require('crypto');

function md5Has(key){
    const hash = crypto.createHash('md5').update(key).digest('hex');
    return hash;
}


const url = 'https://api.pay1.de/post-gateway/';
const key = 'Payone0123456789!';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};


const data = {
mid :'14648',
portalid :'2037267',
aid :'52078',
key :md5Has(key),
mode: 'test',
encoding: 'UTF-8',

city :'Kiel',
country:'DE',
currency:'EUR',
email:'shopper@example.com',
lastname:'Payer',
street:'Fraunhoferstr. 2 - 4',
zip:'24118',
birthday:'19700101',
language:'en',

reference:'123324',
amount:'100',
currency:'EUR',

request:'authorization',
clearingtype:'cc',

cardpan:'4111111111111111',
cardtype:'V',
cardexpiredate:'2312',
cardcvc2:'123',

successurl:'https://google.de/success',
errorurl:'https://google.de/errorurl',
backurl:'https://google.de/backurl'


};

const curlData = Object.entries(data).map(([key, value]) => `${key}=${value}`).join('&');

axios.post(url, curlData,{headers})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.errror(error.response.data);
  }); 
 

'use strict';

{
    const btn=document.getElementById('btn');

    btn.addEventListener('click',()=>{
        const results=['please please me','with the beatles','a hard days night','beatles for sale','help!','rubber soul','revolver','sgt. peppers lonely hearts club band',
    'magical mystery tour','the beatles','yellow submarine','let it be','abby road'];
btn.textContent=results[Math.floor(Math.random()*results.length)];


    });
}

const infodono = (prefix, numerodn, NickDono, NomeDoBot) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return`
╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃             𝑰𝑵𝑭𝑶 𝑫𝑶𝑵𝑶
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃╿ ۝➛ 𝑵𝑰𝑪𝑲: ${NickDono}
┃╿ ۝➛ wa.me/${numerodn}
┃╿ ۝➛ 𝑷𝑹𝑬𝑭𝑰𝑿𝑶: ${prefix}
┃╿ ۝➛ 𝑵𝑶𝑴𝑬 𝑩𝑶𝑻: ${NomeDoBot}
┃╽
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
          
`
}

exports.infodono = infodono
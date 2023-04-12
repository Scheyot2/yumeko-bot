const fs = require("fs")
const chalk = require("chalk")


const menu = (prefix, pushname, numerodn, bioo, adivinhaa, NomeDoBot,  wame) => {

return `
╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃     〔🩸〕𝑷𝑹𝑰𝑵𝑪𝑰𝑷𝑨𝑳〔🩸〕
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
┃╽
┃╿ ۝➛ ${prefix}convite [link do gp]
┃╿ ۝➛ ${prefix}duelo
┃╿ ۝➛ ${prefix}conselhobiblico 
┃╿ ۝➛ ${prefix}mediafire [LINK] 
┃╿ ۝➛ ${prefix}ping
┃╿ ۝➛ ${prefix}perfil
┃╿ ۝➛ ${prefix}lista-online
┃╿ ۝➛ ${prefix}instadw [LINK] 
┃╿ ۝➛ ${prefix}gtts pt [texto] 
┃╿ ۝➛ ${prefix}metadinha
┃╿ ۝➛ ${prefix}videopralink [marcar vídeo] 
┃╿ ۝➛ ${prefix}gerarlink 
┃╿ ۝➛ ${prefix}level
┃╿ ۝➛ ${prefix}premiumlist
┃╿ ۝➛ ${prefix}ranklevel
┃╿ ۝➛ ${prefix}correio
┃╽
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾

╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃   〔🩸〕𝑴𝑬𝑵𝑼 𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑺〔🩸〕
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
┃╽
┃╿ ۝➛ ${prefix}emoji 😛
┃╿ ۝➛ ${prefix}emoji2 😈+☺️
┃╿ ۝➛ ${prefix}attp [Lista+estilos] 
┃╿ ۝➛ ${prefix}ttp [texto] 
┃╿ ۝➛ ${prefix}toimg
┃╿ ۝➛ ${prefix}togif
┃╿ ۝➛ ${prefix}sticker
┃╿ ۝➛ ${prefix}roubar [marcar a figu] 
┃╿ ۝➛ ${prefix}rename [marcar a figu]  
┃╿ ۝➛ ${prefix}cstiker
┃╿ ۝➛ ${prefix}pack-figu
┃╿ ۝➛ ${prefix}sfundo
┃╿ ۝➛ ${prefix}figs                           
┃╽
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾

╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃       〔🩸〕𝑴𝑬𝑵𝑼 𝑵𝑭𝑺𝑾〔🩸〕
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
┃╽
┃╿ ۝➛ ${prefix}porno [nome tipo: mirian] 
┃╿ ۝➛ ${prefix}xvideo [link]
┃╿ ۝➛ ${prefix}hentai
┃╿ ۝➛ ${prefix}porno2
┃╽
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾

╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃       〔🩸〕𝑴𝑬𝑵𝑼 𝑨𝑫𝑴𝑰𝑵𝑺〔🩸〕
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
┃╽
┃╿ ۝➛ ${prefix}tagall [marcar todos]
┃╿ ۝➛ ${prefix}marcar [marcar todos]
┃╿ ۝➛ ${prefix}resetaki [akinator]
┃╿ ۝➛ ${prefix}autofigu-gp 1/0
┃╿ ۝➛ ${prefix}hidetag [marcar todos] 
┃╿ ۝➛ ${prefix}simih 1/0
┃╿ ۝➛ ${prefix}simih2 1/0
┃╿ ۝➛ ${prefix}simiplaca 1/0
┃╿ ۝➛ ${prefix}descgp
┃╿ ۝➛ ${prefix}nomegp
┃╿ ۝➛ ${prefix}fotogp
┃╿ ۝➛ ${prefix}ban
┃╿ ۝➛ ${prefix}sairgp
┃╿ ۝➛ ${prefix}reviver [marcar a msg]
┃╿ ۝➛ ${prefix}kick @numero
┃╿ ۝➛ ${prefix}mute @MARQUE O NÚMERO
┃╿ ۝➛ ${prefix}desmute @MARQUE O NÚMERO
┃╿ ۝➛ ${prefix}mutados
┃╿ ۝➛ ${prefix}marcarwa [marcar todos] 
┃╿ ۝➛ ${prefix}add 552199..... 
┃╿ ۝➛ ${prefix}linkgp
┃╿ ۝➛ ${prefix}promover @numero
┃╿ ۝➛ ${prefix}rebaixar @numero
┃╿ ۝➛ ${prefix}tirardalista
┃╿ ۝➛ ${prefix}listanegra
┃╿ ۝➛ ${prefix}listban
┃╿ ۝➛ ${prefix}autoban
┃╿ ۝➛ ${prefix}kickfake [remove todos fake]
┃╿ ۝➛ ${prefix}banfake [remove todos fake]
┃╽
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾

╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃        〔🩸〕𝑳𝑶𝑳𝑰𝑺〔🩸〕
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
┃╽
┃╿ ۝➛ ${prefix}waifu
┃╿ ۝➛ ${prefix}juice
┃╿ ۝➛ ${prefix}cosplay
┃╿ ۝➛ ${prefix}husbu
┃╿ ۝➛ ${prefix}loli
┃╿ ۝➛ ${prefix}yaoi
┃╿ ۝➛ ${prefix}foto-de-cria
┃╿ ۝➛ ${prefix}naruto
┃╿ ۝➛ ${prefix}zoro
┃╿ ۝➛ ${prefix}luffy
┃╿ ۝➛ ${prefix}sanji
┃╿ ۝➛ ${prefix}ussop
┃╿ ۝➛ ${prefix}nami
┃╿ ۝➛ ${prefix}copper
┃╿ ۝➛ ${prefix}minato
┃╿ ۝➛ ${prefix}sasuke
┃╿ ۝➛ ${prefix}sakura
┃╿ ۝➛ ${prefix}boruto
┃╿ ۝➛ ${prefix}sarada
┃╿ ۝➛ ${prefix}mitsuki
┃╿ ۝➛ ${prefix}orochimaru
┃╿ ۝➛ ${prefix}tsunade
┃╿ ۝➛ ${prefix}kakashi
┃╿ ۝➛ ${prefix}killua
┃╿ ۝➛ ${prefix}gon
┃╿ ۝➛ ${prefix}rimuru
┃╿ ۝➛ ${prefix}sagiri
┃╿ ۝➛ ${prefix}natsu
┃╿ ۝➛ ${prefix}tanjirou
┃╿ ۝➛ ${prefix}nezuko
┃╿ ۝➛ ${prefix}senku
┃╽
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾

╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃       〔🩸〕𝑪𝑶𝑵𝑭𝑰𝑮 𝑮𝑹𝑶𝑼𝑷〔🩸〕
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
┃╽
┃╿ ۝➛ ${prefix}autofig-pv 1/0
┃╿ ۝➛ ${prefix}autofig-gp 1/0
┃╿ ۝➛ ${prefix}configp
┃╿ ۝➛ ${prefix}Antidocumento 1 / 0  
┃╿ ۝➛ ${prefix}antilinkhard 1/0
┃╿ ۝➛ ${prefix}antilink 1/0
┃╿ ۝➛ ${prefix}Antiloc 1 / 0  
┃╿ ۝➛ ${prefix}Anticontato 1 / 0
┃╿ ۝➛ ${prefix}Antiaudio 1 / 0
┃╿ ۝➛ ${prefix}Antivideo 1 / 0
┃╿ ۝➛ ${prefix}Antifake 1 / 0
┃╿ ۝➛ ${prefix}Antiimg 1 / 0
┃╿ ۝➛ ${prefix}AntiCatalogo 1 / 0
┃╿ ۝➛ ${prefix}antisticker 1/0
┃╿ ۝➛ ${prefix}Nsfw 1/0
┃╿ ۝➛ ${prefix}leveling 1/0
┃╿ ۝➛ ${prefix}anagrama 1/0
┃╿ ۝➛ ${prefix}autoreação
┃╿ ۝➛ ${prefix}legendabv2
┃╿ ۝➛ ${prefix}legendasaiu2
┃╿ ۝➛ ${prefix}bemvindo2
┃╿ ۝➛ ${prefix}novolink
┃╿ ۝➛ ${prefix}infogp
┃╿ ۝➛ ${prefix}abrirgp
┃╽
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾

╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃        〔🩸〕𝑨𝑼𝑫𝑰𝑶𝑺〔🩸〕
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
┃╽
┃╿ ۝➛ ${prefix}faustao 
┃╿ ۝➛ ${prefix}chapolin 
┃╿ ۝➛ ${prefix}eminem
┃╿ ۝➛ ${prefix}ibere 
┃╽
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾

╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃       〔🩸〕𝑷𝑬𝑺𝑸𝑼𝑰𝑺𝑨𝑺〔🩸〕
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
┃╽
┃╿ ۝➛ ${prefix}pesquisar
┃╿ ۝➛ ${prefix}google
┃╿ ۝➛ ${prefix}mia
┃╿ ۝➛ ${prefix}celular [nome do celular] 
┃╿ ۝➛ ${prefix}pinterest [nome de qualquer coisa] 
┃╿ ۝➛ ${prefix}pesquisar-mulheres
┃╿ ۝➛ ${prefix}gerarcpf
┃╿ ۝➛ ${prefix}cep
┃╿ ۝➛ ${prefix}placa
┃╿ ۝➛ ${prefix}ddd
┃╿ ۝➛ ${prefix}encurtalink
┃╿ ۝➛ ${prefix}listabr
┃╿ ۝➛ ${prefix}listafake
┃╿ ۝➛ ${prefix}listaddd
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾

╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃         〔🩸〕𝑱𝑶𝑮𝑶𝑺〔🩸〕
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
┃╽
┃╿ ۝➛ ${prefix}akinator
┃╿ ۝➛ ${prefix}jogodaforca
┃╿ ۝➛ ${prefix}forca (letter)
┃╿ ۝➛ ${prefix}resetforca
┃╿ ۝➛ ${prefix}joga @552195.... [pedra papel tesoura]
┃╿ ۝➛ ${prefix}jogodavelha @
┃╿ ۝➛ ${prefix}simi texto
┃╿ ۝➛ ${prefix}fazernick
┃╿ ۝➛ ${prefix}Pau
┃╿ ۝➛ ${prefix}Gay1
┃╿ ۝➛ ${prefix}Gadometro
┃╿ ۝➛ ${prefix}Chance (Texto)
┃╿ ۝➛ ${prefix}cassino
┃╿ ۝➛ ${prefix}casal
┃╿ ۝➛ ${prefix}shipo
┃╿ ۝➛ ${prefix}alma-gemeas
┃╿ ۝➛ ${prefix}duelo
┃╿ ۝➛ ${prefix}gay
┃╿ ۝➛ ${prefix}feio
┃╿ ۝➛ ${prefix}matar
┃╿ ۝➛ ${prefix}vesgo
┃╿ ۝➛ ${prefix}bebado
┃╿ ۝➛ ${prefix}gado
┃╿ ۝➛ ${prefix}gostoso
┃╿ ۝➛ ${prefix}gostosa
┃╿ ۝➛ ${prefix}beijo
┃╿ ۝➛ ${prefix}tapa
┃╿ ۝➛ ${prefix}chutar
┃╿ ۝➛ ${prefix}dogolpe
┃╿ ۝➛ ${prefix}nazista
┃╿ ۝➛ ${prefix}rankgay
┃╿ ۝➛ ${prefix}rankgado
┃╿ ۝➛ ${prefix}rankcorno
┃╿ ۝➛ ${prefix}rankgostosos
┃╿ ۝➛ ${prefix}rankgostosas
┃╿ ۝➛ ${prefix}ranknazista
┃╿ ۝➛ ${prefix}rankotakus
┃╿ ۝➛ ${prefix}rankpau
┃╿ ۝➛ ${prefix}quando
┃╿ ۝➛ ${prefix}docfake
┃╽
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾

╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃      〔🩸〕𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫𝑺〔🩸〕
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
┃╽
┃╿ ۝➛ ${prefix}ytmp3
┃╿ ۝➛ ${prefix}ytmp4
┃╿ ۝➛ ${prefix}play [nome da música] 
┃╿ ۝➛ ${prefix}play2 [nome da música]
┃╿ ۝➛ ${prefix}tomp3 [marcar vídeo] 
┃╽
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾

╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃      〔🩸〕𝑴𝑬𝑵𝑼 𝑫𝑶𝑵𝑶〔🩸〕
┃╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
┃╽
┃╿ ۝➛ ${prefix}anticall 1/0
┃╿ ۝➛ ${prefix}premiumlist
┃╿ ۝➛ ${prefix}addpremium @
┃╿ ۝➛ ${prefix}delpremium @
┃╿ ۝➛ ${prefix}reviverqr
┃╿ ۝➛ ${prefix}arquivargp
┃╿ ۝➛ ${prefix}nuke
┃╿ ۝➛ ${prefix}entrar [link do gp]
┃╿ ۝➛ ${prefix}antipvon
┃╿ ۝➛ ${prefix}antipvoff
┃╿ ۝➛ ${prefix}msg
┃╿ ۝➛ ${prefix}ausente [Motivo da ausência]
┃╿ ۝➛ ${prefix}voltei
┃╿ ۝➛ ${prefix}on
┃╿ ۝➛ ${prefix}off
┃╿ ۝➛ ${prefix}block @
┃╿ ۝➛ ${prefix}unblock @
┃╿ ۝➛ ${prefix}clonargp 
┃╿ ۝➛ ${prefix}clonagp
┃╿ ۝➛ ${prefix}fotobot
┃╿ ۝➛ ${prefix}clonar
┃╿ ۝➛ ${prefix}seradm [pra ser torna adm do gp]
┃╿ ۝➛ ${prefix}sermembro [pra tira teu adm do gp]
┃╿ ۝➛ ${prefix}listagp
┃╿ ۝➛ ${prefix}banghost
┃╿ ۝➛ ${prefix}serpremium
┃╿ ۝➛ ${prefix}antipv 1/0
┃╿ ۝➛ ${prefix}ganharxp
┃╿ ۝➛ ${prefix}ganharlevel
┃╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
`
}

exports.menu = menu

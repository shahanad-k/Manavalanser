const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/UCCrYk1.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is Shahanad K*
*Creator number : http://wa.me/+919645090649?text=Hi Shahanad Bro*
*Bot setting video : Soon*
*Githublink (Setup)  :    https://github.com/shahanad-k/Manavalanser*
*Audio commads :   https://github.com/shahanad-k/Manavalanser/tree/master/uploads*
*Sticker commads : https://github.com/shahanad-k/Manavalanser/tree/master/uploads*
*Instagram Link : https://www.instagram.com/shahanadk_z/*
*Whatsapp Group Link : https://chat.whatsapp.com/GmAMFa9uPSp5rqcaX6nXUu
`})

}));

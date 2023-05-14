const { PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const Discord = require("discord.js")
const db = require("justdata")
const config = require("./config.json")
const client = new Client({
  intents: INTENTS,
  allowedMentions: {
    parse: ["users"]
  },
  partials: PARTIALS,
  retryLimit: 32
});

global.client = client;
client.commands = (global.commands = []);

const { readdirSync } = require("fs");
const { TOKEN } = require("./config.json");
const { Modal } = require("discord-modals");
readdirSync('./commands').forEach(f => {
    if (!f.endsWith(".js")) return;

    const props = require(`./commands/${f}`);

    client.commands.push({
        name: props.name.toLowerCase(),
        description: props.description,
        options: props.options,
        dm_permission: props.dm_permission,
        type: 1
    });

    console.log(`[BOT] ${props.name} komutu yüklendi.`)

});
readdirSync('./events').forEach(e => {

    const eve = require(`./events/${e}`);
    const name = e.split(".")[0];

    client.on(name, (...args) => {
        eve(client, ...args)
    });
    console.log(`[EVENT] ${name} eventi yüklendi.`)
});


client.login(TOKEN)


client.on('interactionCreate',async (interaction) => {


  if(interaction.customId === "captcha") {

  interaction.member.roles.add("1081615478579007559").catch(e => {})
 interaction.reply({content: "Rolün başarıyla verildi", ephemeral: true})

  
  }

  if(interaction.customId === "captcha2") {
  
    const channelid = client.channels.cache.get(config.channelid)
    if(!channelid) return;

const embed = new EmbedBuilder()
.setAuthor({name: "Hatalı Kod Girişi!", iconURL: interaction.user.avatarURL()})
.setDescription(`${interaction.user.tag} Adlı kullanıcı yanlış kod kullandı ve sunucudan atıldı.`)
.setFooter({text: "Wixua Tester"})
.setColor("Red")

    channelid.send({embeds: [embed]})

    interaction.member.kick().catch(e => {})
    
    }

    if(interaction.customId === "captcha3") {
  
      const channelid = client.channels.cache.get(config.channelid)
      if(!channelid) return;
  
  const embed = new EmbedBuilder()
  .setAuthor({name: "Hatalı Kod Girişi!", iconURL: interaction.user.avatarURL()})
  .setDescription(`${interaction.user.tag} Adlı kullanıcı yanlış kod kullandı ve sunucudan atıldı.`)
  .setFooter({text: "Wixua Tester"})
  .setColor("Red")
  
      channelid.send({embeds: [embed]})
  
      interaction.member.kick().catch(e => {})
      
      }
      if(interaction.customId === "captcha4") {
  
        const channelid = client.channels.cache.get(config.channelid)
        if(!channelid) return;
    
    const embed = new EmbedBuilder()
    .setAuthor({name: "Hatalı Kod Girişi!", iconURL: interaction.user.avatarURL()})
    .setDescription(`${interaction.user.tag} Adlı kullanıcı yanlış kod kullandı ve sunucudan atıldı.`)
    .setFooter({text: "Wixua Tester"})
    .setColor("Red")
    
        channelid.send({embeds: [embed]})
    
        interaction.member.kick().catch(e => {})
        
        }


  })

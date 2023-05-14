const { Captcha } = require("captcha-canvas")
const { AttachmentBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, CaptchaGenerator } = require("discord.js")
module.exports = {
  name: "captcha",
  description: "Botun pingini gösterir!",
  type: 1,
  options: [],
  run: async (client, interaction, member) => {
    const captcha = new Captcha();
    captcha.async = true;
    captcha.addDecoy();
    captcha.drawTrace();
    captcha.drawCaptcha();
    function randomString(length) {
      var randomstring = Math.random().toString(36).slice(-6).toUpperCase();
      return randomstring;
    }

    var randomstring = randomString(6);
    var randomstring2 = randomString(6);
    var randomstring3 = randomString(6);


    const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setLabel(captcha.text)
                    .setStyle(1)
                    .setCustomId("captcha")
            )
            .addComponents(
              new ButtonBuilder()
              .setLabel(randomstring)
                  .setStyle(1)
                  .setCustomId("captcha2")
          )
          .addComponents(
            new ButtonBuilder()
            .setLabel(randomstring2)
                .setStyle(1)
                .setCustomId("captcha3")
        )
        .addComponents(
          new ButtonBuilder()
          .setLabel(randomstring3)
              .setStyle(1)
              .setCustomId("captcha4")
      )


 
          const captchaAttachment = new AttachmentBuilder(await captcha.png, 'captcha.png')

          interaction.reply({files: [captchaAttachment], components: [row1], ephemeral: true})


 
  }
}
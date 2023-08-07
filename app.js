const { Bot, Keyboard } = require("grammy");
const getDistanceFromLatLonInKm = require("./get_distance")

const bot = new Bot("6579038707:AAGw6BTsNOtfT-uqlt5JSvaS5c4ipdZcn3A")

bot.command("start", async (ctx) => {
    await ctx.reply('пришлите свою лакатию', {parse_mode: "HTML", reply_markup: new Keyboard().requestLocation("Location").resized()});
});

bot.on("message:location", async (ctx) => {
    const lat1 = 41.285915;
    const lon1 = 69.203569;
    const lat2 = ctx.message.location.latitude; 
    const lon2 = ctx.message.location.longitude;
    const result = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);

    ctx.reply(`Oт вашего местоположения до Нажот талим расстояние ${Math.floor(result)}Км`)
})

bot.on("message", async (ctx) => {
    ctx.reply(`${ctx.from.first_name}! @getDistace_Najot_talim_bot сможет только сказать вам расстояние до Нажот талим. Пожалуйста, отправьте местоположение.`)
})

bot.start();
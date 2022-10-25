const { Markup, Composer, Scenes } = require('telegraf')
const addFilmScene = new Scenes.WizardScene('addFilmScene', 
   async (ctx) => {
    film = ctx.message.text
    ctx.reply('Название фильма: ' + film + '\nТеперь отправь жанр в виде (Комедия/Боевик)')
    ctx.wizard.next()
    },
    async (ctx) => {
    zanr = ctx.message.text
    ctx.reply('Получается жанр у нас: ' + zanr + '\nОтправь рейтинг фильма в виде (8.5/10)')
    ctx.wizard.next()
    }, async (ctx) => {
        rait = ctx.message.text
        ctx.reply('С рейтингом определились.\nОтправь возрастное ограничение вместе с +')
        ctx.wizard.next()
    },
    async (ctx) => {
    ogran = ctx.message.text
    ctx.reply('Отправь url картинки')
    ctx.wizard.next()
    }, async (ctx) => {
        urll = ctx.message.text
        ctx.replyWithPhoto({url: urll}, {caption: '🎬Название: <b>' + film + '</b>' + '\n🗣️Жанр: <b>' + zanr + '</b>' + '\n🗨️Оценка: <b>' + rait + '</b>' + '\n💢Возрастное ограничение: <b>' + ogran + '</b>', parse_mode: 'HTML'})
        ctx.scene.leave()
    })
addFilmScene.enter( async (ctx) => {
    ctx.editMessageText('Для начала отправь только название фильма.');
})
module.exports = addFilmScene;
import SummonerService from 'App/Services/SummonerService'
import Summoner from 'App/Models/Summoner'


import Env from '@ioc:Adonis/Core/Env'

enum LeagueRegionKr {
  브라질 = 'br1',
  북유럽 = 'eun1',
  서유럽 = 'euw1',
  한국 = 'kr',
  북라틴 = 'la1',
  남라틴 = 'la2',
  북미 = 'na1',
  오세아니아 = 'oc1',
  러시아 = 'ru',
  터키 = 'tr1',
  일본 = 'jp1',
}

var urlencode = require('urlencode');

//https://discord.com/api/oauth2/authorize?client_id=998383721071771658&permissions=3668032&scope=bot
const Discord = require('discord.js')

const client = new Discord.Client({ intents: [ 'DIRECT_MESSAGES', 'GUILD_MESSAGES' ] })


const helpConfig: any = {
  title: '도움말',
  aliases: ['도움', '명령어', 'commands', 'help'],
  category: ['bot'],
  des: ['소환사정보: 정보', '전적검색: 검색', '전적분석: 분석'],
  region: ['한국(기본값)', '북미', '북유럽', '서유럽', '일본', '브라질', '북라틴', '남라틴', '오세아니아', '러시아', '터키'],
  use: ['@재미니 <명령어> <소환사> <나라명>']
}

const help = new Discord.MessageEmbed()
.setTitle(`${helpConfig.title}`)
.setColor('#0ea085')
.setDescription(`\`\`\`fix\n@사용법@\n\n롤: ${helpConfig.use}\`\`\``)
.addField('1. 명령어 설명', `**${helpConfig.des.join('\n')}**`, false)
.addField('2. 나라명', `**${helpConfig.region.join(', ')}**`, false)


client.on('ready', () => {
  console.log(`${client.user.tag} 봇을 시작합니다.`);
})

client.on("guildCreate", function(guild){
  let found = 0;
  guild.channels.cache.map((channel) => {
      if (found === 0) {
        if (channel.type === "text") {
          if (channel.permissionsFor(client.user).has("VIEW_CHANNEL") === true) {
            if (channel.permissionsFor(client.user).has("SEND_MESSAGES") === true) {
              channel.send(`안녕하세요 저는 재미니라고 합니다.\n사용법은 @재미니 헬프 하시면 보실수 있습니다.`);
              
              found = 1;
            }
          }
        }
      }
    });
})

client.on("message", async function(message) {
  try {
    const recvId: string = message.content.split(' ')[0].replace(/[^0-9]/g, "")
    let recvName: string = ''
    let prefix: string = ''

    try {
      recvName = message.mentions.roles.get(`${recvId}`).name
      prefix = `<@&${recvId}> `
    } catch (error) {
      recvName = message.mentions.users.get(`${recvId}`).username
      prefix = `<@${recvId}> `
    }
    
    
  
    try {
      if (message.author.bot || recvName !== '재미니') return
      
      const content: string = message.content.slice(prefix.length).trim()
      
      let args: string[] = content.split(' ')
      const command1: string = args[0]
      const command2: string = args[args.length - 1]
      args.splice(0, 1)
      args.splice(args.length - 1, 1)
      
      const commondT: string = args.join(' ')
      
      if(content !== "") {
        if (command1 === "정보") {
          if(commondT) {
            const summoner: string = commondT

            let region: string = LeagueRegionKr.한국
            if(command2)
              region = LeagueRegionKr[command2]

            let account: any = await SummonerService.getAccount(summoner, region)
            
            // Check if the summoner is found
            if (!account) {
              const overview = new Discord.MessageEmbed()
                .setTitle(`${commondT} (${command2 === undefined ? '한국' : command2 }) 소환사 정보`)
                .setColor('#e84057')
                .setDescription(`\`\`\`fix\n등록되지 않은 소환사입니다.\n오타를 확인 후 다시 검색해주세요.\`\`\``)
              
              message.reply(overview);
            }
            
            // Summoner in DB
            await Summoner.firstOrCreate({ puuid: account.puuid })
            
            // Summoner names
            //account.names = await SummonerService.getAllSummonerNames(account, summonerDB)

            let ranked: any = await SummonerService.getRanked(account.id, region)
            
            const overview = new Discord.MessageEmbed()
              .setColor('#0ea085')
              .setTitle(`${summoner} 소환사 보러가기 | ZEM.GG`)
              .setURL(`https://zem.gg/summoner/${region.replace(/[^a-zA-Z]/g, "")}/${urlencode.encode(summoner)}`)
              .setDescription(`\`\`\`fix\n레벨:${account.summonerLevel} 솔랭:${(typeof ranked.soloQ == 'undefined' ? 'Unranked' : `${ranked.soloQ.fullRank}(${ranked.soloQ.leaguePoints}LP)`)} 자랭:${(typeof ranked.flex5v5 == 'undefined' ? 'Unranked' : `${ranked.flex5v5.fullRank}(${ranked.flex5v5.leaguePoints}LP)`)}\`\`\``)
              .setThumbnail(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${account.profileIconId}.jpg`)
              .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
              )
              .addField('Inline field title', 'Some value here', true)
                          
            message.reply(overview);
          } else {
            message.reply(help)
          }
        } else if(args[0] === "헬프") {
          message.reply(help)
        }
      } else {
        message.reply(help)
      }
    } catch (error) {
      console.log(error)
    }    
  } catch (error) {
    console.log(error)
  }



})


client.login(Env.get('DISCORD_TOKEN'))
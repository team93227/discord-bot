const Discord = require('discord.js');
const client = new Discord.Client;
const config = require('./config.json')
const command = require('./command')
const EventEmitter = require('events');
const { timeStamp } = require('console');
const emitter = new EventEmitter()
EventEmitter.defaultMaxListeners = 1000


client.once('ready' , async () =>{
    console.log('project online');
    setInterval(async () => { await client.user.setActivity(`$help | for help`, { type: "WATCHING" }); }, 5000);
});
client.on('guildMemberAdd', member =>{

    const channel = client.channels.cache.get("channel id here");
    
    if(!channel) return;

    channel.send(`Welcome ${member} have a good time in here! please read <#channel id here> and if you want to join please check out <#channel id here> have fun in chat!`)
})






  
  

command(client, 'ban', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        message.channel.send(`${tag} That user has been banned`)
      } else {
        message.channel.send(`${tag} Please specify someone to ban.`)
      }
    } else {
      message.channel.send(
        `${tag} You do not have permission to use this command.`
      )
    }
  })

  command(client, 'kick', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.kick()
        message.channel.send(`${member} was kicked`)
      } else {
        message.channel.send(`${tag} Please specify someone to kick.`)
      }
    } else {
      message.channel.send(
        `${tag} You do not have permission to use this command.`
      )
    }
  })
  const baseFile = 'command-base.js'
  const commandBase = require(`./${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

 //can be client.on or bot.on
 client.on('message', message => {
    const prefix = '$'
    //unless you defined it alr
    
    //again it can be bot.user.id or client.user.id
            if(message.content === `<@!${client.user.id}>`) {
    
    //it can be discord or Discord Or Just MessageEmbed If You Didnt Define Discord 
                const ee = new Discord.MessageEmbed()
                .setTitle(`I Was Pinged!`)
                .setDescription(`My Prefix Is **${prefix}** To See My List Of Commands Run **${prefix}help**!`)
                message.channel.send(ee)
            }
        })
        
          

        command(client, 'help', (message) => {

            const embed = new Discord.MessageEmbed()
              .setAuthor(message.author.username)
              .setFooter(`This bot is still being worked on! Please be patient thank you.`)
              .setTimestamp()
              .setColor('#00AAFF')
              .addFields(
                {
                  name: 'help',
                  value: 'This command is being used',
                  inline: true,
                },
                {
                  name: 'fun',
                  value: 'This command will show you messages you can send to make the bot respond!',
                  inline: true,
                },
                {
                  name: 'moderation',
                  value: 'Still being worked on!',
                  inline: true,
                },
                {
                    name: 'info',
                    value: 'This command will display info for the bot and the server!'

                }
                
              )
              
            message.channel.send(embed)
        
          })




          command(client, 'developer', (message) => {
            
            const embed = new Discord.MessageEmbed()
              .setAuthor(message.author.username)
              .setFooter('This bot is still being worked on thank you for your time')
              .setTimestamp()
              .setColor('#00AAFF')
              .addFields(
                {
                  name: 'bot developer',
                  value: '<@634546427904786432>',
                  inline: true,
                },
                
              )
        
            message.channel.send(embed)
          })
        
          
          command(client, 'fun', (message) => {

            const embed = new Discord.MessageEmbed()
              .setAuthor(message.author.username)
              .setFooter(`This bot is still being worked on! Please be patient thank you.`)
              .setTimestamp()
              .setColor('#00AAFF')
              .addFields(
                {
                  name: 'COMING SOON',
                  value: 'COMING SOON',
                  inline: true,
                },
                {
                  name: 'COMING SOON',
                  value: 'COMING SOON',
                  inline: true,
                },
                {
                  name: 'COMING SOON',
                  value: 'COMING SOON',
                  inline: true,
                },
               
              )
              
            message.channel.send(embed)})

            command(client, 'moderation', (message) => {

                const embed = new Discord.MessageEmbed()
                  .setAuthor(message.author.username)
                  .setFooter(`This bot is still being worked on! Please be patient thank you.`)
                  .setTimestamp()
                  .setColor('#00AAFF')
                  .addFields(
                    {
                      name: 'ban',
                      value: 'bans them from the server',
                      inline: true,
                    },
                    {
                      name: 'kick',
                      value: 'kicks them from the server',
                      inline: true,
                    },
                    
                    
                  )
                  
                message.channel.send(embed)})

                command(client, 'info', (message) => {

                    const embed = new Discord.MessageEmbed()
                      .setAuthor(message.author.username)
                      .setFooter(`This bot is still being worked on! Please be patient thank you.`)
                      .setTimestamp()
                      .setColor('#00AAFF')
                      .addFields(
                        {
                          name: 'bot developer',
                          value: 'This will show you who coded me!',
                          inline: true,
                        },
                        {
                          name: 'serverinfo',
                          value: 'This will display the info for the server!',
                          inline: true,
                        },
                        {
                            name: 'membercount', 
                            value: 'This will display the members in the server!',
                            inline: true,


                        }
                        
                        
                      )
                      
                    message.channel.send(embed)})



                    command(client, 'membercount', (message) => {
                        const { guild } = message

                        const {  memberCount, t } = guild
                        const embed = new Discord.MessageEmbed()
                          .setAuthor(message.author.username)
                          .setFooter('Thank you for using my command instead of dynos')
                          .setColor('#00AAFF')
                          .setTimestamp()
                          .addFields(
                            {
                              name: 'Members',
                              value: memberCount,
                              inline: true,
                            },
                            
                          )
                    
                        message.channel.send(embed)
                      })


                      command(client, 'serverinfo', (message) => {
                        const { guild } = message
                    
                        const { name, region, memberCount, owner, afkTimeout } = guild
                        const icon = guild.iconURL()
                    
                        const embed = new Discord.MessageEmbed()
                          .setTitle(`Server info for "${name}"`)
                          .setThumbnail(icon)
                          .setTimestamp()
                          .addFields(
                            {
                              name: 'Region',
                              value: region,
                            },
                            {
                              name: 'Members',
                              value: memberCount,
                            },
                            {
                              name: 'Server owner',
                              value: owner
                            },
                            {
                              name: 'AFK Timeout',
                              value: afkTimeout / 60,
                            }
                            
                          )
                            
                        message.channel.send(embed)
                      })
                    

                     



                      
                     
                     
  


                      command(client, 'Booster', (message) => {
                        const { guild } = message
                    
                        
                        const icon = message.guild.iconURL({dynamic: true})
                        const embed = new Discord.MessageEmbed()
                        .setTitle('Booster Perks')
                        .setThumbnail(icon)
                        .setTimestamp()
                          .addFields(
                            {
                              name: 'Access to send pictures in chat',
                              value: '\u200b',
                              inline: true
                            },
                            {
                              name: 'Access to booster promo',
                              value: '\u200b',
                              inline: true
                            },
                            {
                              name: 'Able to change your nickname on the server',
                              value: '\u200b',
                              inline: true
                              
                            },
                            {
                              name: 'Bypass ALL giveaway requirements',
                              value: '\u200b',
                              inline: true
                            },
                            {
                              name: 'Booster role given',
                              value: '\u200b',
                              inline: true
                            },

                            {
                              name: 'Instant review of RC/Staff Application',
                              value: '\u200b',
                              inline: true
                            },
                          )
                    
                        message.channel.send(embed)
                      })


                      command(client, 'promo', (message) => {
                        const { guild } = message
                    
                        
                        const icon = message.guild.iconURL({dynamic: true})
                        const embed = new Discord.MessageEmbed()
                        .setTitle('Paid Promo Prices For ')
                        .setThumbnail(icon)
                        .setTimestamp()
                          .addFields(
                            {
                              name: '2$ = @here ping',
                              value: '\u200b',
                              inline: true
                            },
                            {
                              name: '4$ = @everyone ping',
                              value: '\u200b',
                              inline: true
                            },
                            {
                              name: '10$ = Shoutout on all socials',
                              value: '\u200b',
                              inline: true
                              
                            },
                          )
                    
                        message.channel.send(embed)
                      })












                      command(client, 'Rules', (message) => {
                        const { guild } = message
                    
                        
                        const icon = message.guild.iconURL({dynamic: true})
                        const embed = new Discord.MessageEmbed()
                        .setTitle('| Discord Rules')
                        .setThumbnail(icon)
                        .setTimestamp()
                          .addFields(
                            {
                              name: '- (1) Harassment, hate speech, homophobia, transphobic, racism, sexism, and ableism are strictly prohibited within this server. This server has a zero-tolerance policy for such',
                              value: '\u200b',
                              inline: true
                            },
                            {
                              name: ' - (2) Avoid indulging in disruptive behavior. This includes, but not limited to, spamming, excessive pinging, threats (doxxing, swatting, etc.) , and especially toxicity. Such behavior is not allowed within this server',
                              value: '\u200b',
                              inline: true
                            },
                            {
                              name: '- (3) Be mindful of channels and their uses. Read the channel descriptions and pins.',
                              value: '\u200b',
                              inline: true
                              
                            },
                            {
                              name: '- (4) NSFW content is strictly prohibited within this server.',
                              value: '\u200b',
                              inline: true
                            },
                            {
                              name: '- (5) Be careful when discussing certain topics such as race, sexuality, politics, and religion.',
                              value: '\u200b',
                              inline: true
                            },

                            {
                              name: '- (6) Remain civil and considerate towards other users. If there is a conflict, work to defuse it instead of making it worse.',
                              value: '\u200b',
                              inline: true
                            },
                            {
                              name:'- (7) Please have common sense. Not everything that is prohibited will be listed here, but that does not mean it is allowed.',
                              value: '\u200b',
                              inline: true
                            },
                            {
                              name: '- Discord ToS ~ https://discordapp.com/terms',
                              value: '\u200b',
                              inline: true
                            }
                          )
                    
                        message.channel.send(embed)
                      })










                        
                 
 






client.login(config.token)

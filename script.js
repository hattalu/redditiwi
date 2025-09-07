const BASE_PATH = window.location.pathname.includes('/r/') ? '../' : '';

const originalCreatePostElement = createPostElement;
createPostElement = function(post) {
    const modifiedPost = {...post};
    
    if (modifiedPost.media) {
        modifiedPost.media = {...modifiedPost.media};
        if (!modifiedPost.media.url.startsWith('http')) {
            modifiedPost.media.url = BASE_PATH + modifiedPost.media.url;
        }
    }
    
    if (modifiedPost.av_sub && !modifiedPost.av_sub.startsWith('http')) {
        modifiedPost.av_sub = BASE_PATH + modifiedPost.av_sub;
    }
    
    return originalCreatePostElement(modifiedPost);
};

const posts = [
    {
        id: "1",
        title: "His personality summarized in a video:",
        content: "¿Te acuerdas cuando te pregunté que le pedirías al trotis que te dijera? Lo anoté y se lo pedí el 2 de agosto para que llegara a tiempo para tu cum KJADKJAKJ 1 grande Patrick Pedraza, realmente no esperaba que hiciera mucho más x lo que le pedí, pero me gusto mucho el vídeo, ojalá se pudiera pedir también a los japos, yo andaría pidiendo pa mi esposa awaa TE AMO MUCHO",
        media: {
            type: "video",
            url: "video.mp4",
        },
        upvotes: 69,
        user: "Lu",
        subreddit: "r/Scaramouche",
        av_sub: "./icons/yop.png",
        time: "hace 12 días",
        timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).getTime(),
        comments: [{
            user: "Lu",
            avatar: "./icons/yop.png",
            text: "HOLA MI AMOR FELIZ MES DE CUMPLEAÑOS",
            time: "16h ago",
            upvotes: 143,
            replies: [{
                user: "Lu",
                avatar: "./icons/yop.png",
                text: "QUIERO HACER MUCHAS COSAS PARA TI",
                time: "15h ago",
                upvotes: 143,
                replies: [{
                    user: "Lu",
                    avatar: "./icons/yop.png",
                    text: "ASI QUE DEBERÍAS REVISAR ESTA PÁGINA CADA DÍA JEJEJE",
                    time: "14h ago",
                    upvotes: 143
                },
                {
                user: "Lu",
                avatar: "./icons/yop.png",
                text: "DAILY REDDIT AKSJDKAJS TE AMO MUCHO",
                time: "16h ago",
                upvotes: 143
            },
            ]}]
            },
        ],
    },
    {
        id: "2",
        title: "I finished a new project!",
        content: "It is the new building located in the Avidya Forest for the members of the Akademiya, I came to several disagreements with the main organizer, but finally I was able to organize a good environment for the students.",
        media: {
            type: "image",
            url: "edificio.png",
        },
        upvotes: 30,
        user: "Kaveh",
        av_sub: "archi.jpg",
        subreddit: "r/architecture",
        time: "hace 5 días",
        timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).getTime(),
        comments:[{
            user: "kool",
            avatar: "default-avatar.png",
            text: "i passed by there when construction was starting and ngl i thought it would be bigger lol",
            time: "4d ago",
            upvotes: -5,
            replies: [{
                user: "Alhaiham",
                avatar: "./icons/alhaitham.png",
                text: "That's your inferiority complex talking.",
                time: "4d ago",
                upvotes: -1,
                replies: [{
                    user: "kool",
                    avatar: "default-avatar.png",
                    text: "?? wtf",
                    time: "4d ago",
                    upvotes: -1,
                },{
                    user: "Kaveh",
                    avatar: "./icons/kaveh.jpg",
                    text: "ALHAITHAM WHY DO YOU HAVE THAT PFP",
                    time: "4d ago",
                    upvotes: 1,
                    replies: [{
                        user: "Alhaitham",
                        avatar: "./icons/alhaitham.png",
                        text: "I like to look at it when I open this app.",
                        time: "4d ago",
                        upvotes: 0,
                    }]
                }]
            }]
        }]
    },
    {
        id: "3",
        title: "Theres a strange page that i discovered",
        content: "is like a web event or smt? <a href='https://hattalu.github.io/Conteo/' target=\"_blank\"> this one </a> the screen is mostly black and it could just be a random page but idk, ill leave it here in case anyone can discover smt else",
        upvotes: 54,
        user: "notahacker",
        subreddit: "r/WebEvent",
        av_sub: "web.jpg",
        time: "hace 2 días",
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).getTime(),
        comments: [{
            user: "ragebaiter",
            avatar: "default-avatar.png",
            text: "and?",
            time: "16h ago",
            upvotes: -68,
        },
        {
            user: "Express-Pudding-1282",
            avatar: "defaultav2.jpg",
            text: "I increased the contrast a bit?",
            image: "contraste.png",
            time: "15h ago",
            upvotes: 128,
            replies: [{
                user: "crystxllizing",
                avatar: "defav3.png",
                text: "looks like one of those void images 😭",
                time: "15h ago",
                upvotes: 43,
                replies: [{
                    user: "weeb00b5",
                    avatar: "defav6.png",
                    text: "maybe the surprise is a screamer",
                    time: "14h ago",
                    upvotes: 13
                },
                {
                user: "h4cktow4ck",
                avatar: "defav4.png",
                text: "There are hearts so must be a romantic thing",
                time: "6h ago",
                upvotes: 10
            },{
                user: "wklits",
                avatar: "default-avatar.png",
                text: "so the dev copied their idea from that Genshin web event...",
                time: "2h ago",
                upvotes: 5
            }
            ]}]
            },{
                user: "FormalTop1013",
                avatar: "defav5.png",
                text: "do the right click thing -> inspect",
                time: "14h ago",
                upvotes: 18
            }
        ],
    },{
        id: "4",
        title: "AITA for for destroying a building that didn't have any of my sensei's merchandise?",
        content: "When I went to ask, they only told me they can give me <a href='https://i.ibb.co/LD6M7tdC/saitamamerch.jpg' target=\"_blank\"> this keychain </a> for 5 CENTS. Or even FOR FREE? HOW DARE THEY LOWER MY SENSEI'S VALUE?",
        upvotes: 1,
        av_sub: "aita.png",
        user: "SaitamasNumber1Fan",
        subreddit: "r/AmItheAsshole",
        time: "hace 1 día",
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).getTime(),
        comments: [{
            user: "justrandomguy",
            avatar: "defav3.png",
            text: "*reads title* wtf<br>*sees who the OP is* oh that guy again<br>yeah i dont think you hear words that arent from your sensei but yeah YTA",
            time: "hace 1 día",
            upvotes: 30
        },{
            user: "saitama",
            avatar: "./icons/saitama.jpg",
            text: "Genos...",
            time: "hace 1 día",
            upvotes: 200,
            replies:[{
                user: "SaitamasNumber1Fan",
                avatar: "./icons/genos.jpg",
                text: "I did it when it was night, no one was hurt, sensei!",
                time: "hace 1 día",
                upvotes: 1
            },{
                user: "CarryFantastic6990",
                avatar: "defav4.png",
                text: "why does it have so many positive votes?",
                time: "hace 1 día",
                upvotes: -1,
                replies:[{
                    user: "SaitamasNumber1Fan",
                    avatar: "./icons/saitama.jpg",
                    text: "Because my sensei is the best, obviously.",
                    time: "hace 1 día",
                    upvotes: 1
                },{
                    user: "justrandomguy",
                    avatar: "defav3.png",
                    text: "OP is a very dedicated fan (stalker) of him and created a bunch of accounts to give him upvotes on every message he left.",
                    time: "hace 1 día",
                    upvotes: 5
                }]
            }]
        }]
    },{
        id: "5",
        title: "when I lead the Matra I have 2 unwritten rules:",
        content: "#1 <br> #2",
        upvotes: 153,
        av_sub: "dadjokes.png",
        user: "General Mahahahahahamatra",
        subreddit: "r/dadjokes",
        time: "hace 2 horas",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).getTime(),
        comments: [{
            user: "General Mahahahahahamatra",
            avatar: "./icons/cyno.jpg",
            text: "Get it? Because they're unwritten rules, so you can't read them.",
            time: "hace 2 horas",
            upvotes: 55,
            replies: [{
                user: "Ok-Might3341",
                avatar: "defav5.png",
                text: "You own this subreddit, OP",
                time: "hace 2 horas",
                upvotes: 10
            },{
                user: "PositiveElk3927",
                avatar: "defav3.png",
                text:  "coming to this subreddit just to see OP's posts",
                time: "hace 2 horas",
                upvotes: 5
            }]
        },{
            user: "Tighnari",
            avatar: "./icons/tighnari.png",
            text: "...",
            image: "cynojoke.jpg",
            time: "hace 2 horas",
            upvotes: 53,
            replies: [{
                user: "General Mahahahahahamatra",
                avatar: "./icons/cyno.jpg",
                text: "dw Nari I have a written rule to love you forever.",
                time: "hace 2 horas",
                upvotes: 50,
                replies: [{
                    user: "PositiveElk3927",
                    avatar: "defav3.png",
                    text: "wtf smooth asf",
                    time: "hace 2 horas",
                    upvotes: 5
                },{
                    user: "llamageddon01",
                    avatar: "defav6.png",
                    text: "TID how to use humor to win over my gf",
                    time: "hace 2 horas",
                    upvotes: 3
                },{
                    user: "Tighnari",
                    avatar: "./icons/tighnari.png",
                    text: "...There’s so mushroom in my heart for you",
                    time: "hace 2 horas",
                    upvotes: 60
                }]
            }]
        }]
    },{
        id: "6",
        title: "AITA for giving him juice instead of wine?",
        content: "I (M30) have a bar in town where my husband (M30) goes to get some free drinks, I'm not going to let him get drunk that often, so I've been serving him grape juice instead. He complains now but he hadn't really noticed until a few days ago when some green-drunkard who was banned came to tell him what was going on. Now he hasn't stopped complaining about my... lack of romance? So AITA?",
        upvotes: 90,
        av_sub: "aita.png",
        user: "NoctuaFlames",
        subreddit: "r/AmItheAsshole",
        time: "hace 5 horas",
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).getTime(),
        comments: [{
            user: "PavoOcellus",
            avatar: "./icons/kaeya.png",
            text: "You could have let it ferment and it would have made a good wine, that's unromantic! And you could tell me, I can drink one or two glasses of grape juice if it's with you.",
            time: "hace 5 horas",
            upvotes: 10,
            replies: [{
                user: "NoctuaFlames",
                avatar: "./icons/diluc.png",
                text: "Agree, but it was fun watching you flirt, pretending to be drunk when you weren't.",
                time: "hace 5 horas",
                upvotes: 15,
                replies: [{
                    user: "PavoOcellus",
                    avatar: "./icons/kaeya.png",
                    text: "Ah, you were just making fun of me! I'll go with the Darknight Hero, he'll surely give me wine and love.",
                    time: "hace 5 horas",
                    upvotes: 10,
                    replies:[{
                        user: "NoctuaFlames",
                        avatar: "./icons/diluc.png",
                        text: "Not sure about the wine, but there's definitely a lot of love waiting for you.",
                        time: "hace 5 horas",
                        upvotes: 5
                    }]
                }]
            }]
        },{
            user: "Wise_Chipmunk_4367",
            avatar: "defav6.png",
            text: "OP really came to post just to flirt with his husband in front of everyone 💀💀 YTA for reminding me that I am alone.",
            time: "hace 4 horas",
            upvotes: 180,
            replies: [{
                user: "PavoOcellus",
                avatar: "./icons/kaeya.png",
                text: "That was my plan all along",
                image: "kaeluc.png",
                time: "hace 4 horas",
                upvotes: -100
            }]
        }]
    },{
        id: "7",
        title: "I saw an angel eating a person",
        content: "I was walking home late at night when crossing an alley I heard a person in pain, I looked towards where the sound was and I saw a person almost sucking the soul from the mouth of the person in pain, I know what you're thinking but! As soon as that 'person' saw me, a light appeared around it that blinded me and when I could see again, they were gone! It could only have been an angel with all that light that came out of nowhere! I managed to take a photo, even if it is very bright, you can see them!",
        media:{
            type: "image",
            url: "destiel.png"
        },
        upvotes: 120,
        av_sub: "paranormal.png",
        user: "CelestialWitness",
        subreddit: "r/Paranormal",
        time: "hace 1 hora",
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).getTime(),
        comments: [{
            user: "GhostHunter42",
            avatar: "defaultav2.png",
            text: "bro really was 'flashing' by some gays",
            time: "hace 1 hora",
            upvotes: 50,
        },{
            user: "Castiel",
            avatar: "./icons/castiel.png",
            text: "... It looks... very shiny...",
            time: "hace 1 hora",
            upvotes: 0,
            replies: [{
                user: "DeanWinchester",
                avatar: "./icons/dean.png",
                text: "Dammit Cas u told me they would lose their memory when you used your power",
                time: "hace 1 hora",
                upvotes: 20,
                replies:[{
                    user: "Castiel",
                    avatar: "./icons/castiel.png",
                    text: "I'm sorry, I think my power was unbalanced because I got distracted thinking about you.",
                    time: "hace 1 hora",
                    upvotes: 1,
                    replies:[{
                        user: "DeanWinchester",
                        avatar: "./icons/dean.png",
                        text: "Being romantic isn't going to save you. You better start thinking of a way to fix this.",
                        time: "hace 1 hora",
                        upvotes: 1
                    }]
                },{
                    user: "Mountain-Bottle-272",
                    avatar: "defav6.png",
                    text: "What?",
                    time: "hace 1 hora",
                    upvotes: 0
                },{
                    user: "Destiel#69Fan",
                    avatar: "destiel.png",
                    text: "I knew Dean was gay!",
                    time: "hace 1 hora",
                    upvotes: 50,
                    replies: [{
                        user: "Destiel#5Fan",
                        avatar: "destiel.png",
                        text: "I always knew it!",
                        time: "hace 1 hora",
                        upvotes: 0
                    },{
                        user: "Destiel#420Fan",
                        avatar: "destiel.png",
                        text: "And Cas is quite possessive w that 'sucking his soul out through his mouth'!",
                        time: "hace 1 hora",
                        upvotes: 30
                    },{
                        user: "Destiel#666Fan",
                        avatar: "destiel.png",
                        text: "Make more fanfics!",
                        time: "hace 1 hora",
                        upvotes: 0
                    },{
                        user: "DeanWinchester",
                        avatar: "./icons/dean.png",
                        text: "they are like the girls from that school...",
                        time: "hace 1 hora",
                        upvotes: 10
                    }]
                }]
            }]
        },{
            user: "WonTrickPhony",
            avatar: "default-avatar.png",
            text: "so the original theme lost in smt else...",
            time: "hace 1 hora",
            upvotes: 5
        }]
    },{
        id: "8",
        title: "Sett (Co-leader of Hearsteel) Interview For Fans",
        content: "The most shocking revelation came when Sett was asked about his romantic interests <br> <blockquote> <p> Interviewer: So Sett, every fan wants to know... Do you like someone right now? <br>Sett: Haha, it's not just right now, it's something that has lasted a lifetime. <br> Interviewer: Wow, that's deep! Can you give us more details? <br>Sett: Well, it's someone very special to me, but I can't reveal their identity just yet, I still have to know what he thinks.</p> </blockquote>",
        upvotes: 800,
        media: {
            type: "image",
            url: "vogue.png",
        },
        av_sub: "heartsteel.png",
        user: "ToughStudent4334",
        subreddit: "r/HeartsteelFans",
        time: "hace 3 horas",
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).getTime(),
        comments: [{
            user: "HankBoi_WasTaken",
            avatar: "defav4.png",
            text: "He??",
            time: "hace 3 horas",
            upvotes: -15,
            replies: [{
                user: "PandaCatRacoon",
                avatar: "defav5.png",
                text: "Bro is the only one who doesn't know they're not straight",
                time: "hace 3 horas",
                upvotes: 20
            }]
        },{
            user: "ShadXII",
            avatar: "defav6.png",
            text: "Whyy I was faithful to Sett I can't believe he has a partner😔",
            time: "hace 3 horas",
            upvotes: -10,
            replies: [{
                user: "PandaCatRacoon",
                avatar: "defav5.png",
                text: "Lmao sure you probably had a chance with him if he was single",
                time: "hace 3 horas",
                upvotes: 15,
                replies: [{
                    user: "rwwaela",
                    avatar: "defav3.png",
                    text: "I mean yeah that guy is pretty delulu, but look at Sett, who wouldn't want something with him? Those muscles...🤤",
                    time: "hace 3 horas",
                    upvotes: -3,
                    replies: [{
                        user: "cybirddude",
                        avatar: "defaultav2.jpg",
                        text: "I think all fans are agree so why you have negative votes? lol",
                        time: "hace 3 horas",
                        upvotes: 0,
                        replies: [{
                            user: "rwwaela",
                            avatar: "defav3.png",
                            text: "I think they already answered you further down in the post😭",
                            time: "hace 2 horas",
                            upvotes: 0
                        }]
                    },{
                        user: "LunariAp",
                        avatar: "./icons/aphelios.png",
                        text: "You're looking at my boyfriend too much.",
                        time: "hace 3 horas",
                        upvotes: -1,
                        replies: [{
                            user: "PandaCatRacoon",
                            avatar: "defav5.png",
                            text: "Lol another delulu",
                            time: "hace 3 horas",
                            upvotes: -1,
                        },{
                            user: "rwwaela",
                            avatar: "defav3.png",
                            text: "Uhm... in another interview there was a leak with the names they used on their networks and... this person is Aphelios💀",
                            time: "hace 3 horas",
                            upvotes: 0,
                            replies: [{
                                user: "PandaCatRacoon",
                                avatar: "defav5.png",
                                text: "help i forgot how to erase a comment",
                                time: "hace 3 horas",
                                upvotes: 1,
                            }]
                        }]
                    }]
                }]
            }]
        },{
            user: "cybirddude",
            avatar: "defaultav2.jpg",
            text: "Wait, so Sett is dating Aphelios??",
            time: "hace 3 horas",
            upvotes: 10,
            replies: [{
                user: "LunariAp",
                avatar: "./icons/aphelios.png",
                text: "arent you a smart one...",
                time: "hace 3 horas",
                upvotes: 0,
                replies: [{
                    user: "MuscleSt",
                    avatar: "./icons/sett.png",
                    text: "babe dont be rude to our fans...",
                    time: "hace 3 horas",
                    upvotes: 15,
                },{
                    user: "shadXII",
                    avatar: "defav6.png",
                    text: "I always thought Aphelios was shy...",
                    time: "hace 3 horas",
                    upvotes: -1,
                    replies: [{
                        user: "LunariAp",
                        avatar: "./icons/aphelios.png",
                        text: "nah I just don't talk much because Sett makes me hoarse every night.",
                        time: "hace 3 horas",
                        upvotes: 105,
                        replies: [{
                            user: "MuscleSt",
                            avatar: "./icons/sett.png",
                            text: "Okay it's time to step away from the keyboard",
                            time: "hace 3 horas",
                            upvotes: 20,
                        },{
                            user: "cybirddude",
                            avatar: "defaultav2.jpg",
                            text: "omg Idk if I should be happy or ashamed😭",
                            time: "hace 3 horas",
                            upvotes: 5
                        }]
                    }]
                }]
            }]
        }]
    },{
        id: "9",
        title: "What is the most romantic thing you have done for your partner?",
        content: "I want to hear your stories, I want to do something special for my partner but I don't know what, so I want to hear your experiences to get ideas.",
        upvotes: 445,
        av_sub: "romance.jpg",
        user: "LoverBoy1234",
        subreddit: "r/Romance",
        time: "hace 30 minutos",
        timestamp: new Date(Date.now() - 30 * 60 * 1000).getTime(),
        comments: [{
            user: "MoonJo",
            avatar: "./icons/MoonJo.jpg",
            text: "I made him a bracelet with the teeth of all his loved ones🙂",
            time: "hace 29 minutos",
            upvotes: -1,
            replies: [{
                user: "LoverBoy1234",
                avatar: "defaultav2.png",
                text: "I... what?",
                time: "hace 28 minutos",
                upvotes: 5,
            },{
                user: "JongWoo",
                avatar: "./icons/jongwoo.jpg",
                text: "and it is well secured, it doesn't come off even when I'm running",
                time: "hace 28 minutos",
                upvotes: 1,
                replies: [{
                    user: "MoonJo",
                    avatar: "./icons/MoonJo.jpg",
                    text: "I didn't want it to come out when we were having intense nights.",
                    time: "hace 28 minutos",
                    upvotes: 1
                }]
            },{
                user: "StarryEyed",
                avatar: "defav3.png",
                text: "eh... like, their loved ones who passed away?",
                time: "hace 27 minutos",
                upvotes: -2,
                replies: [{
                    user: "MoonJo",
                    avatar: "./icons/MoonJo.jpg",
                    text: "no, his favorite people are still alive... yet.",
                    time: "hace 27 minutos",
                    upvotes: 1,
                    replies: [{
                        user: "JongWoo",
                        avatar: "./icons/jongwoo.jpg",
                        text: "Don't say yet.",
                        time: "hace 27 minutos",
                        upvotes: 1,
                        replies: [{
                            user: "MoonJo",
                            avatar: "./icons/MoonJo.jpg",
                            text: "Yes, jagiya💕",
                            time: "hace 27 minutos",
                            upvotes: 1
                        }]
                    }]
                }]
            },{
                user: "QuietStorm",
                avatar: "defav4.png",
                text: "me rn",
                image: "mom.png",
                time: "hace 26 minutos",
                upvotes: 100,
            }]
        },{
            user: "llamagedon01",
            avatar: "defav5.png",
            text: "911 theres a crazy person here",
            time: "hace 20 minutos",
            upvotes: 50,
            replies: [{
                user: "JongWoo",
                avatar: "./icons/jongwoo.jpg",
                text: "Dw he doesn't do bad things to people anymore",
                time: "hace 20 minutos",
                upvotes: 1,
                replies: [{
                    user: "LoverBoy1234",
                    avatar: "defaultav2.png",
                    text: "Bad things? Anymore? 😭",
                    time: "hace 20 minutos",
                    upvotes: 10,
                },{
                    user: "MoonJo",
                    avatar: "./icons/MoonJo.jpg",
                    text: "If no one harms my jagiya, no one will get hurt.",
                    time: "hace 20 minutos",
                    upvotes: 100,
                    replies: [{
                        user: "LoverBoy1234",
                        avatar: "defaultav2.png",
                        text: "Awww",
                        time: "hace 20 minutos",
                        upvotes: 0,
                        replies:[{
                            user: "llamagedon01",
                            avatar: "defav5.png",
                            text: "wdym aww💀",
                            time: "hace 19 minutos",
                            upvotes: 1,
                        }]
                    }]
                }]
            }]
        },{
            user: "Lu",
            avatar: "./icons/yop.png",
            text: "Uhm I made this mini reddit 😀",
            time: "hace 18 minutos",
            upvotes: 10,
            replies: [{
                user: "LoverBoy1234",
                avatar: "defav2.png",
                text: "bro writing with the voices in her head😔",
                time: "hace 18 minuos",
                upvotes: 0,
            }]
        }]
    },{
        id: "10",
        title: "I found this thing from the same person who made the website",
        content: "Idk if it's another website, it doesn't look like it? more like a colorful thing? It's out of focus, but who knows",
        upvotes: 200,
        user: "notahacker",
        subreddit: "r/WebEvent",
        av_sub: "web.jpg",
        media: {
            type: "image",
            url: "misterio.png"
        },
        time: "hace 12 horas",
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).getTime(),
        comments:[{
            user: "GhostHunter42",
            avatar: "defaultav2.png",
            text: "It seems like someone is creating hype and hasn't even finished the gift yet...",
            time: "hace 12 horas",
            upvotes: 150,
            replies: [{
                user: "notahacker",
                avatar: "default-avatar.png",
                text: "agree tsk tsk",
                time: "hace 12 horas",
                upvotes: 100
            }]
        }]
    },{
        id: "11",
        title: "I just want to share a photo of my boyfriend bc he's really cute",
        content: "He has to wear a mask for his job, so I took advantage of the fact that he didn't have one to take a picture of him smiling at me💕",
        upvotes: 110,
        user: "NortonC",
        subreddit: "r/Romance",
        media: {
            type: "image",
            url: "whydissomad.png"
        },
        av_sub: "romance.jpg",
        time: "hace 5 minutos",
        timestamp: new Date(Date.now() - 30 * 60 * 1000).getTime(),
        comments: [{
            user: "LoverBoy1234",
            avatar: "defaultav2.jpg",
            text: "You should put his mask back on i think hes a lil upset💀",
            time: "hace 5 minutos",
            upvotes: -1,
            replies: [{
                user: "AesopC",
                avatar: "./icons/aesop.png",
                text: "I don't like taking pictures, but I'm not upset since NonNon-san asked me for one photo for him.",
                time: "hace 5 minutos",
                upvotes: 15,
                replies: [{
                    user: "NortonC",
                    avatar: "./icons/norton.png",
                    text: "Your NonNon-san",
                    time: "hace 5 minutos",
                    upvotes: 10,
                    replies: [{
                        user: "AesopC",
                        avatar: "./icons/aesop.png",
                        text: "Ah- yes, my NonNon-san",
                        upvotes: 1
                    }]
                }]
            },{
                user: "StarryEyed",
                avatar: "defav3.png",
                text: "I was going to say the same thing until I read his comment, it seems that he is quite cute in an unique way",
                time: "hace 5 minutos",
                upvotes: 1,
                replies: [{
                    user: "NortonC",
                    avatar: "./icons/norton.png",
                    text: "yes MY boyfriend is really cute in every way",
                    time: "hace 5 minutos",
                    upvotes: 1,
                    replies: [{
                        user: "StarryEyed",
                        avatar: "defav3.png",
                        text: "omg ok nobodys gonna steal YOUR boyfriend",
                        time: "hace 5 minutos",
                        upvotes: 1,
                    }]
                }]
            }]
        },{
            user: "llamagedon01",
            avatar: "defav5.png",
            text: "after that post with the tooth psycho, I thought this would be similar, but it only turns out to be a couple in love LAME I almost prefer the psychos",
            time: "hace 4 minutos",
            upvotes: -10
        }]
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(posts);
displayPosts();

function countComments(comments) {
    if (!comments) return 0;
    return comments.reduce((acc, c) => acc + 1 + countComments(c.replies || []), 0);
}

function createPostElement(post) {
    const postElement = document.createElement("div");
    postElement.className = "post";

    let mediaHTML = "";
    if (post.media) {
        switch (post.media.type) {
            case "image":
                mediaHTML = `<div class="media-container"><img src="${post.media.url}" alt="Imagen"></div>`;
                break;
            case "video":
                if (post.media.url.includes("youtube.com") || post.media.url.includes("youtu.be")) {
                    const videoId = post.media.url.split('v=')[1]?.split('&')[0] || post.media.url.split('/').pop();
                    mediaHTML = `
                        <div class="media-container">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>`;
                } else {
                    mediaHTML = `
                        <div class="media-container">
                            <video controls>
                                <source src="${post.media.url}" type="video/mp4">
                                Tu navegador no soporta videos.
                            </video>
                        </div>`;
                }
                break;
            case "audio":
                mediaHTML = `
                    <div class="audio-player">
                        <audio controls>
                            <source src="${post.media.url}" type="audio/mpeg">
                            Tu navegador no soporta audio.
                        </audio>
                    </div>`;
                break;
        }
    }

    const textHTML = !post.media
        ? `<p class="post-text">${post.content}</p>`
        : "";

    postElement.innerHTML = `
        <div class="post-header">
            <img src="${post.av_sub || './icons/yop.png'}" alt="Avatar" class="avatar">
            <span class="subreddit">${post.subreddit}</span>
            <span>•</span>
            <span class="time">${post.time}</span>
        </div>
        <div class="post-content">
            <h3 class="post-title">${post.title}</h3>
            ${mediaHTML}
            ${textHTML}
        </div>
        <div class="post-footer">
            <div class="vote-box">
                <button class="vote-btn upvote">
                    <svg viewBox="0 0 24 24" width="22" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon class="arrow-fill" points="12,6 7,12 11,12 11,18 13,18 13,12 17,12" fill="currentColor" opacity="0"/>
                        <path d="M12 4l-7 8h4v6h6v-6h4z"/>
                    </svg>
                </button>
                <span class="vote-count">${post.upvotes}</span>
                <button class="vote-btn downvote">
                    <svg viewBox="0 0 24 24" width="22" height="30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(180deg);">
                        <polygon class="arrow-fill" points="12,6 7,12 11,12 11,18 13,18 13,12 17,12" fill="currentColor" opacity="0"/>
                        <path d="M12 4l-7 8h4v6h6v-6h4z"/>
                    </svg>
                </button>
            </div>
            <button class="vote-btn comment-btn">
                <i class="far fa-comment"> </i> ${countComments(post.comments)}
            </button>
        </div>
    `;
    return postElement;
}

function displayRecentPosts() {
    const recentList = document.getElementById("recentPostsList");
    if (!recentList) return;
    recentList.innerHTML = "";
    const sortedPosts = [...posts].sort((a, b) => {
        if (a.timestamp && b.timestamp) {
            return b.timestamp - a.timestamp;
        }
        return parseTimeToMs(b.time) - parseTimeToMs(a.time);
    });
    sortedPosts.slice(0, 5).forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="recent-post-item" data-post-id="${post.id}">
                <div class="recent-post-meta">
                    <span class="recent-user">${post.user}</span>
                    <span> • </span>
                    <span class="recent-time">${post.time}</span>
                </div>
                <div class="recent-title">${post.title}</div>
                <div class="recent-votes">${post.upvotes} upvotes</div>
            </div>
        `;
        recentList.appendChild(li);
    });
    attachRecentPostListeners();
}

function attachRecentPostListeners() {
    document.querySelectorAll('.recent-post-item').forEach(item => {
        item.addEventListener('click', function() {
            const postId = this.getAttribute('data-post-id');
            openPostFromId(postId);
        });
        item.style.cursor = 'pointer';
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#1a1a1b';
        });
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
}

function openPostFromId(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        localStorage.setItem("selectedPost", JSON.stringify(post));
        localStorage.setItem("selectedComments", JSON.stringify(post.comments || []));
        window.location.href = "post.html";
    } else {
        console.error("Post no encontrado con ID:", postId);
    }
}

function displayPosts() {
    const container = document.getElementById("posts");
    if (!container) return;
    container.innerHTML = "";
    posts.forEach(post => {
        const postElement = createPostElement(post);
        container.appendChild(postElement);
    });
    
    document.querySelectorAll(".post").forEach((postDiv, idx) => {
        postDiv.addEventListener("click", function(e) {
            if (
                !e.target.closest('.vote-btn'))
                {
                    localStorage.setItem("selectedPost", JSON.stringify(posts[idx]));
                    localStorage.setItem("selectedComments", JSON.stringify(posts[idx].comments || []));
                    window.location.href = "post.html";
                }
        });
    });

    document.querySelectorAll(".upvote").forEach((btn,idx) => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const voteCount = this.nextElementSibling;
            const downvoteBtn = this.parentElement.querySelector(".downvote");
            if (!this.classList.contains("upvoted")) {
                this.classList.add("upvoted");
                localStorage.setItem("vote_post_" + posts[idx].id, "upvoted");
                if (downvoteBtn.classList.contains("downvoted")) {
                    downvoteBtn.classList.remove("downvoted");
                    localStorage.setItem("vote_post_" + posts[idx].id, "upvoted");
                    voteCount.textContent = parseInt(voteCount.textContent) + 2;
                } else {
                    voteCount.textContent = parseInt(voteCount.textContent) + 1;
                }
            } else {
                this.classList.remove("upvoted");
                localStorage.removeItem("vote_post_" + posts[idx].id);
                voteCount.textContent = parseInt(voteCount.textContent) - 1;
            }
            localStorage.setItem("vote_post_" + posts[idx].id, "upvoted");
            localStorage.setItem("votes_post_" + posts[idx].id, voteCount.textContent);
        });
    });

    document.querySelectorAll(".downvote").forEach((btn, idx) => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const voteCount = this.previousElementSibling;
            const upvoteBtn = this.parentElement.querySelector(".upvote");
            if (!this.classList.contains("downvoted")) {
                this.classList.add("downvoted");
                localStorage.setItem("vote_post_" + posts[idx].id, "downvoted");
                if (upvoteBtn.classList.contains("upvoted")) {
                    upvoteBtn.classList.remove("upvoted");
                    localStorage.setItem("vote_post_" + posts[idx].id, "downvoted");
                    voteCount.textContent = parseInt(voteCount.textContent) - 2;
                } else {
                    voteCount.textContent = parseInt(voteCount.textContent) - 1;
                }
            } else {
                this.classList.remove("downvoted");
                localStorage.removeItem("vote_post_" + posts[idx].id);
                voteCount.textContent = parseInt(voteCount.textContent) + 1;
            }
            localStorage.setItem("vote_post_" + posts[idx].id, "upvoted");
            localStorage.setItem("votes_post_" + posts[idx].id, voteCount.textContent);
        });
    });
    displayRecentPosts();
}

const userDropdown = document.getElementById("userDropdown");
if (userDropdown) {
    userDropdown.addEventListener("click", function() {
        const dropdown = document.getElementById("dropdownMenu");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
}
window.addEventListener("click", function(e) {
    if (!e.target.closest("#userDropdown")) {
        document.getElementById("dropdownMenu").style.display = "none";
    }
});

window.onload = displayPosts;

document.querySelectorAll('.sidebar-left li').forEach(li => {
    li.addEventListener('click', function() {
        document.querySelectorAll('.sidebar-left li').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll(".post").forEach((postDiv, idx) => {
    const upvoteBtn = postDiv.querySelector(".upvote");
    const downvoteBtn = postDiv.querySelector(".downvote");
    const voteState = localStorage.getItem("vote_post_" + posts[idx].id);
    if (voteState === "upvoted") upvoteBtn.classList.add("upvoted");
    if (voteState === "downvoted") downvoteBtn.classList.add("downvoted");
});

localStorage.setItem('posts', JSON.stringify(posts));

const savedPosts = JSON.parse(localStorage.getItem('posts'));
if (savedPosts) {
    posts.length = 0;
    posts.push(...savedPosts);
}

function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (!searchInput) return;
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value.trim());
        }
    });
    const searchIcon = document.querySelector('.search-bar .fa-search');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const searchValue = searchInput.value.trim();
            if (searchValue) {
                performSearch(searchValue);
            }
        });
    }
}

function performSearch(query) {
    if (!query) return;
    const searchTerm = query.toLowerCase();
    const filteredPosts = posts.filter(post => {
        return (
            post.title.toLowerCase().includes(searchTerm) ||
            post.content.toLowerCase().includes(searchTerm) ||
            post.user.toLowerCase().includes(searchTerm) ||
            post.subreddit.toLowerCase().includes(searchTerm)
        );
    });
    displaySearchResults(filteredPosts, query);
}

function displaySearchResults(results, query) {
    const container = document.getElementById('posts');
    if (!container) return;
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No se encontraron resultados para "${query}"</h3>
                <p>Intenta con otras palabras clave o revisa la ortografía.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    results.forEach(post => {
        const postElement = createPostElement(post);
        container.appendChild(postElement);
    });
    
    attachPostInteractions();
}

function attachPostInteractions() {
    document.querySelectorAll(".post").forEach((postDiv, idx) => {
        const upvoteBtn = postDiv.querySelector(".upvote");
        const downvoteBtn = postDiv.querySelector(".downvote");
        const voteState = localStorage.getItem("vote_post_" + posts[idx].id);
        if (voteState === "upvoted") upvoteBtn.classList.add("upvoted");
        if (voteState === "downvoted") downvoteBtn.classList.add("downvoted");
    });
    
    document.querySelectorAll(".upvote").forEach((btn, idx) => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const voteCount = this.nextElementSibling;
            const downvoteBtn = this.parentElement.querySelector(".downvote");
            if (!this.classList.contains("upvoted")) {
                this.classList.add("upvoted");
                localStorage.setItem("vote_post_" + posts[idx].id, "upvoted");
                if (downvoteBtn.classList.contains("downvoted")) {
                    downvoteBtn.classList.remove("downvoted");
                    localStorage.setItem("vote_post_" + posts[idx].id, "upvoted");
                    voteCount.textContent = parseInt(voteCount.textContent) + 2;
                } else {
                    voteCount.textContent = parseInt(voteCount.textContent) + 1;
                }
            } else {
                this.classList.remove("upvoted");
                localStorage.removeItem("vote_post_" + posts[idx].id);
                voteCount.textContent = parseInt(voteCount.textContent) - 1;
            }
            localStorage.setItem("vote_post_" + posts[idx].id, "upvoted");
            localStorage.setItem("votes_post_" + posts[idx].id, voteCount.textContent);
        });
    });
    
    document.querySelectorAll(".downvote").forEach((btn, idx) => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const voteCount = this.nextElementSibling;
            const downvoteBtn = this.parentElement.querySelector(".downvote");
            if (!this.classList.contains("upvoted")) {
                this.classList.add("upvoted");
                localStorage.setItem("vote_post_" + posts[idx].id, "upvoted");
                if (downvoteBtn.classList.contains("downvoted")) {
                    downvoteBtn.classList.remove("downvoted");
                    localStorage.setItem("vote_post_" + posts[idx].id, "upvoted");
                    voteCount.textContent = parseInt(voteCount.textContent) + 2;
                } else {
                    voteCount.textContent = parseInt(voteCount.textContent) + 1;
                }
            } else {
                this.classList.remove("upvoted");
                localStorage.removeItem("vote_post_" + posts[idx].id);
                voteCount.textContent = parseInt(voteCount.textContent) - 1;
            }
            localStorage.setItem("vote_post_" + posts[idx].id, "upvoted");
            localStorage.setItem("votes_post_" + posts[idx].id, voteCount.textContent);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initSearch();
});
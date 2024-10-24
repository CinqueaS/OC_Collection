const db = require('../db')
const  Creator  = require('../models/creator')
const Story = require('../models/story')
const Character = require('../models/character')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    await Creator.deleteMany()
    await Story.deleteMany()
    await Character.deleteMany()
    const Jiv = await new Creator({
        userName: "Jiv",
        stories: null,
        characters: null
    })
    const Unsafe = await new Creator({
        userName:"Unsafe",
        stories: null,
        characters: null
    })
    const Chaotic = await new Creator({
        userName:"Chaotic",
        stories: null,
        characters: null
    })
    const Hilda = await new Character({
        Name: "Hildabrand Natalia Strauss-Einswell",
        story: null,
        bio: `Hilda is a rather cheery individual, yet not without her secrets. If she isn’t face down in a book or in her study, reading up on other forms of magic, she’s improving on her own, looking through several hundreds of years of magical knowledge. She puts on a pretty face but is always observing people to see if she can get a read on them, although she does it in a rather subtle fashion, knowing when and when not to do so. Generally kind to those she knows, she speaks with a rather semi-formal inflection and is rather loose around most people which gives off a somewhat ditzy and playful personality. However, if it’s based around her work or if approached by some other witches or their knights, her personality shifts to a more serious and formal tone. Not one to underestimate most situations, she’s always looking for the more sensible way to figure out issues. Attempting to keep a cool head under most forms of pressure she isn’t immune to making mistakes, her biggest issue being dwelling on several situations that have long since passed and can no longer change. Confident in her skill and her family name, she carries both with pride and is serious about not only doing her job but protecting those unable to protect themselves. 
`,
        age: 115,
        gender: "Female",
        height: `5'3/160cm`,
        weight: "123lbs",
        images: "../images/Ko7Mqei.png"
 })
    const Gys = await new Character({        
            Name: "Gys",
            story: null,
            bio: `Gys is a forgotten child from a massive genocide committed towards the Nhamrus. From a young age she was a part of a slave camp for mining and was the only one to actually develop an interest in the resources their captors had them scrounging for. One day the captors decided that they would do some "population control" and shut off the entrance to the mining site with everyone in it, save for one curious girl. Gys on her way sees nothing but a large cloud of smoke coming from what was once her "Work site". From that day on she planned her rebellion against the world`,
            age: 22,
            gender: "Female",
            height: `5'9/175cm`,
            weight: "142lbs",
            images: "../images/unsafe_full.png"
            
        
    })
    const Haina = await new Character({
        Name: "Haina-Jina",
        story: null,
        bio: `Haina-Jina comes off as aloof and uninterested, yet incredibly kind and respectful to those around him. A very polite yet unresponsive individual, most people who do see him will notice him pass through crowds with the greatest of ease - as if he’s a phantom in broad daylight, while simultaneously assisting the elderly at a moment’s notice. Not many have heard full sentences from Haina-Jina as he often takes to short, one-worded responses for most of his interactions. Even measly thieves who try to take the better of Haina tend to just get brushed off and ignored like yesterday’s garbage. Anybody who takes it a step further and tries their hand at attacking him are oft downed before they even decide what type of attack they should use against him, leaving them to watch him walk away as if nothing even happened in the first place. Haina will almost always coincidentally appear whenever there’s some form of bad commotion in any village or town he’s nearby at that moment. Perhaps the rarest sight somebody can see from him is a genuine smile, which comes up the most whenever somebody openly underestimates his nigh-unparalleled abilities. Could this be because he realizes he’ll be spending less time on the matter at hand… or because he might be in for something he won’t deem as a waste of time? Most are left to their imaginations before Haina dispatches the issue and proceeds along his way.

In combat, Haina-Jina’s actions are precise and calculated. He comes off as incredibly lazy and uninterested to anybody not strong enough to understand the depths to his actions - which isn’t an inaccurate belief to have of him. He’ll tend to lean on using their own power against them in order to avoid wasting his own time and wearing his patience thin; he has no interest in whether or not he’s fully incapacitated whoever stood in his way so long as he’s not disturbed any further. Against the few enemies who are strong enough to give him pause (namely: his “siblings”), Haina’s focus skyrockets to the point of overthinking his next moves enough for some of his attacks to even become sluggish and almost even predictable. In an attempt to avoid using Tasteless as much as possible (due to the strain his strongest techniques put on him as well as the effect it has on his siblings) he’s forced to restrain himself and hold back in most fights where he would be better off at fighting more seriously. 
`,
        age: 24,
        gender: "Male",
        height: "5'11/180cm",
        weight: "156lbs",
        images: "../images/Haina.png"
    })
    const WitchKnight = await new Story(
        {
            
            title: "WitchKnight",
            genres: ["Action,", "Fantasy"],
            creator: null,
            characters: null,
            chapters: ["https://docs.google.com/document/d/1wsaEuxL4DZwnE0Bp8Vz0OS0pZljKIqlDrdIRDaBR5Vs/edit?usp=sharing", "https://docs.google.com/document/d/176ihYli8c_31RN27oBt3kEA19yLaKtkPb3LRSkMPPLA/edit?usp=sharing"]
            
        }
    )
    const Nhamrousia = await new Story(
        {
            title: "Nhamrousia",
            genres: ["Action", "Drama", "Dystopian"],
            creator: null,
            characters: null,
            chapters: ["nothing", "here"]
        }
    )
    const Dreamless = await new Story({
        title: "Dreamless",
        genres: ["Action"],
        creator: null,
        characters: null,
        chapters: ["https://docs.google.com/document/d/1sge6LIFNITmob55y1xZxTMYhbVq7OET0bU5WNlf51jk/edit?usp=sharing", "https://docs.google.com/document/d/1LYDZJ6ov-yBwO9CHLYNr429xKwr0AlaVHKfU3u_GCOs/edit?usp=sharing", "https://docs.google.com/document/d/19x4I-dsbWjBtcMWFc1wNYiLkzJKD-1BIkLKjYLjth24/edit?usp=drivesdk", "https://docs.google.com/document/d/1zkCmBm_WhJpW3eT7myYQeWXDc1qIEJWB29UL3at3ark/edit?usp=drive_link", "https://docs.google.com/document/d/1ygNNAUPqqUpFvnqE1l4wtLh_8coWmbVhYOzpatz6TkE/edit?usp=drive_link", "https://docs.google.com/document/d/1-MG40_GGKzewBkDWknOVYezfr_rWHuHfD7_TZCOQhKQ/edit?usp=drive_link", "https://docs.google.com/document/d/1GQeYg1PMSYD-C5ZHULPNMotxEMt-2DqiKhLRAGnbudw/edit?usp=drive_link", "https://docs.google.com/document/d/13S95-kPcbGrwc2yNV7aHueq580SO4CaLI57VPm_gV08/edit?usp=drive_link", "https://docs.google.com/document/d/1AF_AX_hIqySbD-fF5YlLnsIdKlOKI3SqwilkQzg5b4Q/edit?usp=drive_link", "https://docs.google.com/document/d/1pfj3StWg-kZD1df_808VD9eHhq0bqQDYdf78AYYuBFM/edit?usp=drive_link", "https://docs.google.com/document/d/1D2vJgVaIN_cIQg4G7WF8Dsjr2FSbBbgxeHlBbyXx4LU/edit?usp=drive_link"]
    })


 Jiv.stories = WitchKnight._id
 Jiv.characters = Hilda._id
 Chaotic.stories = Dreamless._id
 Chaotic.characters = Haina._id
 Unsafe.stories = Nhamrousia._id
 Unsafe.characters = Gys._id
 Hilda.story = WitchKnight._id
 Gys.story = Nhamrousia._id
 Haina.story = Dreamless._id
 WitchKnight.creator = Jiv._id 
 Nhamrousia.creator = Unsafe._id 
 Dreamless.creator = Chaotic._id
 WitchKnight.characters = Hilda._id
 Nhamrousia.characters = Gys._id
 Dreamless.characters = Haina._id

 await Jiv.save()
 await Unsafe.save()
 await Chaotic.save()
 await Hilda.save()
 await Gys.save()
 await Haina.save()
 await WitchKnight.save()
 await Nhamrousia.save()
 await Dreamless.save()

 console.log("Created characters and stories")




}




const run = async () => {
    await main()
    db.close()
  }
  
  run()
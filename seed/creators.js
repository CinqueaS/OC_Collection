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
    const Hilda = await new Character({
        Name: "Hilda",
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


 Jiv.stories = WitchKnight._id
 Jiv.characters = Hilda._id
 Unsafe.stories = Nhamrousia._id
 Unsafe.characters = Gys._id
 Hilda.story = WitchKnight._id
 Gys.story = Nhamrousia._id
 WitchKnight.creator = Jiv._id 
 Nhamrousia.creator = Unsafe._id 
 WitchKnight.characters = Hilda._id
 Nhamrousia.characters = Gys._id

 await Jiv.save()
 await Unsafe.save()
 await Hilda.save()
 await Gys.save()
 await WitchKnight.save()
 await Nhamrousia.save()


 console.log("Created characters and stories")




}




const run = async () => {
    await main()
    db.close()
  }
  
  run()
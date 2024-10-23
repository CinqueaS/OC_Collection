const db = require('../db')
const Creator = require('../models/creator')
const Character = require('../models/character')
const Story = require('../models/story')


const getAllCreator = async (req, res) => {
    try {
        const Creators = await Creator.find()
        res.json(Creators)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCreatorById = async (req, res) => {
    try {
        const { id } = req.params;
        const Creators = await Creator.findById(id)
        if (Creators) {
            return res.json(Creators);
        }
        return res.status(404).send('Creator with the specified ID does not exists');
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Creator doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const getCreatorByName = async (req, res) => {
    try {
        const { name } = req.params.name;
        const Creators = await Creator.find({name: req.params.name})
        if (Creators) {
            return res.json(Creators);
        }
        return res.status(404).send('Creator with the specified name does not exists');
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Creator doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}


const createCreator = async (req, res) => {
    try {
        const newCreator = await new Creator(req.body)
        await newCreator.save()
        return res.status(201).json({newCreator})
    }
    catch (e) {
        return res.status(500).json({ e: e.message })
    }
}


const updateCreator = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedCreator = await Creator.findByIdAndUpdate(id, req.body, { new: true })
        if (updatedCreator) {
            return res.status(200).json(updatedCreator)
        }
        throw new Error("Creator not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteCreator = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Creator.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Creator deleted");
        }
        throw new Error("Creator not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllCharacters = async (req, res) => {
    try {
        const Characters = await Character.find()
        res.json(Characters)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCharacterById = async (req, res) => {
    try {
        const { id } = req.params;
        const Characters = await Character.findById(id)
        if (Characters) {
            return res.json(Characters);
        }
        return res.status(404).send('Character with the specified ID does not exists');
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Character doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}


const createCharacter = async (req, res) => {
    try {
        const newCharacter = await new Character(req.body)
        await newCharacter.save()
        return res.status(201).json({newCharacter})
    }
    catch (e) {
        return res.status(500).json({ e: e.message })
    }
}


const updateCharacter = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedCharacter = await Character.findByIdAndUpdate(id, req.body, { new: true })
        if (updatedCharacter) {
            return res.status(200).json(updatedCharacter)
        }
        throw new Error("Character not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Character.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Character deleted");
        }
        throw new Error("Character not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllStory = async (req, res) => {
    try {
        const directions = await Story.find()
        res.json(directions)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getStoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const story = await Story.findById(id)
        if (story) {
            return res.json(story);
        }
        return res.status(404).send('Character with the specified ID does not exists');
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Character doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const createStory = async (req, res) => {
    try {
        const newStory = await new Story(req.body)
        await newStory.save()
        return res.status(201).json({newStory})
    }
    catch (e) {
        return res.status(500).json({ e: e.message })
    }
}


const updateStory= async (req, res) => {
    try {
        let { id } = req.params;
        let updatedStory = await Storys.findByIdAndUpdate(id, req.body, { new: true })
        if (updatedStory) {
            return res.status(200).json(updatedStory)
        }
        throw new Error("Story not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteStory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Story.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Story deleted");
        }
        throw new Error("Story not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCreator,
    getCreatorById,
    getCreatorByName,
    createCreator,
    updateCreator,
    deleteCreator,
    createCharacter,
    updateCharacter,
    deleteCharacter,
    createStory,
    updateStory,
    deleteStory,
    getAllCharacters,
    getCharacterById,
    getAllStory,
    getStoryById,
}
const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        attack: 10,
        defense: 9,
        maxLife: 100
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 80,
        attack: 15,
        defense: 3,
        maxLife: 80
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: "Little Monster",
        life: 40,
        attack: 4,
        defense: 4,
        maxLife: 40
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: "Big Monster",
        life: 120,
        attack: 16,
        defense: 6,
        maxLife: 120
    }
}

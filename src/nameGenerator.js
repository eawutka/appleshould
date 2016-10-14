import _ from 'underscore'

const firstNames = [
    ['Barry', 'Barrie', 'Berri'],
    ['Carrie', 'Cary', 'Karry', 'Kairi'],
    ['Chery', 'Cheri', 'Sherry'],
    ['Garry', 'Gerrie', 'Gerry'],
    ['Harry'],
    ['Jerry', 'Jeri', 'Jerrie'],
    ['Larry'],
    ['Mary'],
    ['Perry'],
    ['Terry', 'Teri', 'Terri']
]

const lastNames = [
    'Wright',
    'Right',
    'Wrighte',
    'Wryght',
    'White',
    'Dwight',
    'Dwighte',
    'Knight',
    'Knighte',
    'Night'
]

//const affixes = [
    //["O'NAME"],
    //['MacNAME', 'McNAME'],
    //['Von NAME', 'Van NAME'],
    //['NAMEson'],
    //['NAMEworth'],
    //['NAMEsky'],
    //['FitzNAME'],
    //['NAMEborough', 'NAMEburg'],
    //['NAMEgard', 'NAMEgaard'],
    //['NAMEman', 'NAMEmann'],
    //['NAMEopoulos'],
//]

const generateName = () => {
    let firstName = _.sample(_.sample(firstNames))
    let lastName = _.sample(lastNames)
    //if (Math.random() >= 0.5) {
        //lastName = _.sample(_.sample(affixes)).replace("NAME", lastName)
    //}

    return firstName + " " + lastName;
}

export default generateName;
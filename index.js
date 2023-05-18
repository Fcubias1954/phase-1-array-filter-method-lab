const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) { 
    let driverList = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    console.log(driverList);
    return driverList;
};
findMatching(drivers,`Bobby`);

function fuzzyMatch(drivers, beginingLetters) {
    const matchingNames = drivers.filter(driver => driver.startsWith(beginingLetters) === beginingLetters.startsWith(beginingLetters));
    console.log(matchingNames);
    return matchingNames;
};
matchingNames('Sa');

const drivers2  = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(drivers2, string) {
    const nameMatch = drivers2.filter(match => match.name === string);
    console.log(nameMatch);
    return nameMatch;
}
nameMatch(drivers2, 'Annette');




























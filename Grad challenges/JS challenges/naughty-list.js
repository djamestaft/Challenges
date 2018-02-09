//lists
let santasList = ["Tom", "Errol", "peter", "Sam", "Jennifer"];
let children = ["Errol", "Peter", "Jennifer"];

//function to find children
const findChildren = (santasList, children) => {
    
    //filter santasList
    let naughtyList = santasList.filter((value) => {
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return children.includes(value);
    });
    
    return naughtyList;
}

//log results of method
console.log(findChildren(santasList, children));
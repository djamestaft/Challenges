//lists
let santasList = ["Tom","Errol","PEter","Sam","Jennifer"];
let children = ["Errol", "Peter", "Jennifer"];

//function to find children
function findChildren(santasList, children) {
    let naughtyList = [];
    
    for (let x of santasList) {
        for (let y of children) {
            if (x.toLowerCase(0) === y.toLowerCase(0)) {
                naughtyList.push(y);
            }
        }
    }
    return naughtyList;
}

//log results of method
console.log(findChildren(santasList, children));
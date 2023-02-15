
function searchHeritage(str) {

    let table = [
        { code: "A001", name: "Wati", parent: "" },
        { code: "A002", name: "Wira", parent: "A001" },
        { code: "A003", name: "Andi", parent: "A002" },
        { code: "A004", name: "Bagus", parent: "A002" },
        { code: "A005", name: "Siti", parent: "A001" },
        { code: "A006", name: "Hasan", parent: "A005" },
        { code: "A007", name: "Abdul", parent: "A006" },
    ]

let heritage = []
  for(let i = 0; i < table.length; i++){

    if(table[i].parent == str ){
        heritage.push(table[i])
    }else if ( heritage.find(el => el.code == table[i].parent) ){
        heritage.push(table[i])
    }
  }

    return heritage
}

console.log(searchHeritage("A001"));

console.log(searchHeritage("A002"));

console.log(searchHeritage("A005"));

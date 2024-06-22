const myStudents = [
    {
        ism:"sanjar",
        login:2222,
        parol:1212,

    },
    {
        ism:"elshod",
        login:2252,
        parol:1242,


    },
    {
        ism:"umid",
        login:2352,
        parol:1142,


    }
]

let userLogin = +prompt("login kiriting");
let userParol = +prompt("parol kiriting");

const result = myStudents.find(item.login == userLogin && item.parol == userParol);



function Dictionary () {
    var Animal = {
        Species:"Dog",
        Color:"Brown",
        Breed:"Yorkie",
        Age:2,
        Sound:"Bark!"
    };
    delete Animal.Breed; //This deleted breed making it undefined.
    document.getElementById("Dictionary").innerHTML = Animal.Breed;

}
function Dictionary () {
    var Animal = {
        Species:"Dog",
        Color:"Brown",
        Breed:"Yorkie",
        Age:2,
        Sound:"Bark!"
    };
    document.getElementById("Animal").innerHTML = Animal.Sound

}
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

var Dictionary = {
    key1 = "ALG1",
    value2= "Algebra"
};
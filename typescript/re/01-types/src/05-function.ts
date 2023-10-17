function greet(name:string){
    console.log("hello"+name.toLocaleUpperCase()+'!!')

}

greet('Felixlu')

function getFavoriteNumber(){
    return 25
}

const names = ['j','y','a']

names.forEach(function(s){
    console.log(s.toUpperCase())
}) 

names.forEach((s)=>{
    console.log(s.toUpperCase())
})
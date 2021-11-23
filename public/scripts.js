function getData(){
    fetch('http://localhost:5000/bd')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(function(err){
        alert('Ocorreu problema')
    })
}

function processData(data){
    console.log(data)
}
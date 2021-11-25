function getData(){
    fetch('http://localhost:5000/bd')
    .then(res => res.json())
    .then(data => processData(data) )
    .catch(function(err){
        alert('Ocorreu problema')
    })
}

function processData(data){
        const linhaCidades = document.getElementById('cidades')
        linhaCidades.innerHTML=''
        for(let i=0; i < 10; i++){
            let nome = data[i].Name
            let distrito = data[i].District
            let pop = data[i].Population
            let id = data[i].ID
            linhaCidades.innerHTML += ` <tr>
                                            <th>${nome}</th>
                                            <th>${distrito}</th>
                                            <th>${pop}</th>
                                            <td">
                                            <button 
                                            onclick="Delete"
                                            type="button" 
                                            class="btn btn-danger"
                                            style="width:100px;>
                                            Eliminar</button>

                                            <button 
                                            type="button" 
                                            class="btn btn-success"
                                            style="width:100px;>
                                            Editar</button>

                                            <button 
                                            onclick="ShowID(${ID})"
                                            type="button" 
                                            class="btn btn-info"
                                            style="width:100px;>
                                            Ver mais</button>

                                            </td>
                                        </tr>`
        }
    }

    function showID(ID){
        console.log(ID)

    }




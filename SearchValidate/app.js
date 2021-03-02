const formulario = document.getElementById ('formulario')
const inputSearch = document.getElementById('search');

formulario.addEventListener('submit',(e) =>{
    e.preventDefault()
    console.log (formulario)

    const expresionsSearch = /^.{3,}$/ // min.characters.
    
    //Search
    if(inputSearch.value===""){
    document.getElementById('formulario__input-error').classList.add('formulario__input-error-activo');
    
    } else{
        document.getElementById('formulario__input-error').classList.remove('formulario__input-error-activo');
    }

    if(expresionsSearch.test(inputSearch.value)){

        document.getElementById('characters__error').classList.remove('characters__input-error-activo');
        

     
    }else{
        document.getElementById('characters__error').classList.add
        ('characters__input-error-activo');
        
    }

 
})

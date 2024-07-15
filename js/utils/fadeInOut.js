document.addEventListener("DOMContentLoaded", ()=>{
    function toggleModal(event){
        event.preventDefault();
        const modal = document.getElementById("form-data");
        modal.classList.toggle("show");
    }

    document.getElementById("consultoria").addEventListener("click", toggleModal);
    document.getElementById("cancel").addEventListener("click", toggleModal);
});

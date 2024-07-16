document.addEventListener("DOMContentLoaded", ()=>{
    function toggleModal(event){
        event.preventDefault();
        const modal = document.getElementById("form-data");
        modal.classList.toggle("show");
        document.querySelector("body").classList.toggle("stopScrolling");
    }

    document.getElementById("consultoria").addEventListener("click", toggleModal);
    document.getElementById("want_solution").addEventListener("click", toggleModal);
    document.getElementById("cancel").addEventListener("click", toggleModal);
});

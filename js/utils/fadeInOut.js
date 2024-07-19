document.addEventListener("DOMContentLoaded", ()=>{
    function toggleModal(event){
        event.preventDefault();
        const modal = document.getElementById("form-data");
        modal.classList.toggle("show");
        document.querySelector("body").classList.toggle("stopScrolling");
    }

    document.getElementById("consultoria").addEventListener("click", toggleModal);
    const want_solution = document.getElementById("want_solution");
    want_solution !== null? want_solution.addEventListener("click", toggleModal) : null;
    document.getElementById("cancel").addEventListener("click", toggleModal);
});

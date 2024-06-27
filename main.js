let listElemts = document.querySelectorAll(".list__button--click");

listElemts.forEach(listElemt =>
    {
        listElemt.addEventListener("click", ()=>{

            listElemt.classList.toggle("arrow");

            let height = 0;
            let menu = listElemt.nextElementSibling;
            if(menu.clientHeight == "0"){
                height=menu.scrollHeight;
            }

            menu.style.height = `${height}px`;
        })
    });
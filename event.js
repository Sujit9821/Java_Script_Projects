const buttons = document.querySelectorAll("button");
        buttons.forEach((button)=>{
            button.addEventListener("click",()=>{
                const color = button.id;
                document.body.style.backgroundColor = color;

            });
        });
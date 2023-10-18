document.addEventListener("DOMContentLoaded",()=>{
    const header = document.getElementsByTagName("h1")
    const checkbox =  document.getElementsByClassName("checkbox")
    const price = document.getElementsByClassName("price")
    const bei = document.getElementsByClassName("bei")
    const button = document.getElementsByTagName("button")
    fetch(" http://localhost:3000/books")
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        data.map((book, index) => {
            if (index < header.length) {
                header[index].textContent = book.title;
            }
        });
        
        data.map((pri,index)=>{
            if(index<bei.length){
                bei[index].textContent = `${pri.price}$`
            }
        })

        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].addEventListener("change", (e) => {
                if (i < price.length) {
                    price[i].textContent = `${data[i].description}.The book is ${data[i].pages} pages.`
                }
            });
        }

        for (let i=0; i<button.length; i++){
            button[i].addEventListener("click",()=>{
                alert(`You have successfully bought the novel ${data[i].title}, at ${data[i].price}.Enjoy your read.😊`)
            })
        }
    })
    .catch((error)=>{
        console.log(error)
    })
    })

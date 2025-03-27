const listItem=document.querySelectorAll('li');
listItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        let a=item.querySelector('a');
        window.open(`${a.getAttribute('href')}`);
    });
})

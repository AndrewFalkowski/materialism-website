function searchFunction() {
    var input, filter, a, title, description, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('episode_list');
    li = ul.getElementsByTagName('li');

    for(i=0 ; i< li.length; i++){
        title = li[i].getElementsByTagName("a")[0];
        description = li[i].getElementsByTagName("p")[0];
        if(title.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }
        else if(description.innerHTML.toUpperCase().indexOf(filter) > -1){
              li[i].style.display = "";
        }
        else{
            li[i].style.display = 'none';
        }
    }
}

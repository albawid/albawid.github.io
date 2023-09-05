function func() {
    var input = document.getElementById("search-input");
    var listPost = document.getElementById("list-post");
    // var listProject = document.getElementById("list-project")
    
    if (input.value==='') {
      listPost.classList.remove("disable") 
    } else {
      listPost.classList.add("disable")
    }

    // if (input.value==='') { // search buat project belum bisa
    //   listProject.classList.remove("disable")
    // } else {
    //   listProject.classList.add("disable")
    // }
  }
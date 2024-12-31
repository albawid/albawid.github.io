function func() {
    var input = document.getElementById("search-input");
    var listPost = document.getElementById("list-post");
    if (input.value==='') {
      listPost.classList.remove("disable") 
    } else {
      listPost.classList.add("disable")
    }
  }
const showReplies = document.querySelectorAll(".show-replies");

showReplies.forEach((btn) => 
    btn.addEventListener("click", (e) => {
      let parentContainer = e.target.closest(".comment__container");
      let _id = parentContainer.id;
      if (_id) {
        let childrenContainer = parentContainer.querySelectorAll(`[dataset=${_id}]`);
        childrenContainer.forEach(child => child.classList.toggle('opened'));
      }
    })
);
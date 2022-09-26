import {
  auth,
  printPost,
  deletePost,
  updateLikes,
  getPost,
  //editPosts
} from '../lib/firebase.js';

const callbackPost = (post) => {
  const containerPost = document.querySelector('#postContainer');
  containerPost.innerHTML = '';
  const templatesPrintPost = (element) => {
    const postUser = document.createElement('div');
    postUser.className = 'containerPost';
    const templatePrintPost1 = `
        <section class="container-print-post" id="containerPrintPost">
          <div class="user-names">${element.userName}</div>
          <div id="${element.id}">
            <div class="user-post" id= "userPost">${element.userPost}</div>
          </div>
          <div class="container-buttons">
            <div class="btn-like">
              <button class="btn-like" id="btnLike" value="${element.id}">
                <img src="./utilitys/img/like.png" alt="me gusta" class="like-post" id="likePost">
              </button>
              <p class="counter-likes" id="counterLikes">${element.likesCounter} Me gusta</p>
            </div>
      `;
    const templatePrintPost3 = `
          </div>
        </section>
      `;
    let editStatus = false;

    let templatePrintPost2 = '';
    if (element.userId === auth.currentUser.uid) {
      templatePrintPost2 = `
        <div class="buttons-editions">
          <button class="btn-edit" id="btnEdit" value="${element.id}">
            <img src="./utilitys/img/edit.png" alt="editar post" class="edit-post" id="editPost">
          </button> 
          <button class="btn-delete" id="btnDelete" value="${element.id}">
            <img src="./utilitys/img/eliminar.png" alt="eliminar post" class="delete-post" id="deletePost">
          </button>
        </div>
        `;
    }
    postUser.innerHTML += templatePrintPost1 + templatePrintPost2 + templatePrintPost3;
    containerPost.appendChild(postUser);
  };
  post.forEach(templatesPrintPost);

  // botón de eliminar
  const buttonDelete = document.querySelectorAll('#btnDelete');
  buttonDelete.forEach((item) => {
    item.addEventListener('click', () => {
      deletePost(item.value);
    });
  });

  // botón de dar likes
  const likeBtn = containerPost.querySelectorAll('.btn-like');
  likeBtn.forEach((btnL) => {
    btnL.addEventListener('click', () => {
      const postId = btnL.value;
      updateLikes(postId);
    });
  });

  // botón editar  

  const btnsEdit = containerPost.querySelectorAll("#btnEdit");
  btnsEdit.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      try {
        const doc = await getPost(btn.value);
        console.log(e.target.dataset.idedit)
        const post = doc.data();
        containerPost["postMessage"].value = post.postMessage;

        editStatus = true;
        id = doc.id;
        postMessage["btnEdit"].innerText = "Update";
      } catch (error) {
        console.log(error);
      }
    });
  });






  return containerPost;
};

export const postView = () => {
  printPost('post', callbackPost);
};

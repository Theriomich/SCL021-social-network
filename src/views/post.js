import {
  auth,
  printPost,
  deletePost,
  updateLikes,
  getPost,
  updatePost,
  addDataPost,

} from '../lib/firebase.js';

export let editStatus = false;
export let id = '';


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

  /*//editar
  const buttonEdit = document.querySelectorAll('#btnEdit');
  buttonEdit.forEach((item) => {
    item.addEventListener("click", async (e) => {
      try {
        const doc = await getPost (item.value);
        const post = doc.data();
        console.log(doc.data());
        document.getElementById("postMessage").value=post.userPost;

        editStatus = true;
        id = doc.id;
        document.getElementById("postBtn").innerText = "Update";
      } catch (error) {
        console.log(error);
      }
    });
  });*/


  const buttonEdit = document.querySelectorAll('#btnEdit');
  buttonEdit.forEach((item) => {
    item.addEventListener("click", async (e) => {
      try {
        const doc = await getPost(item.value);
        console.log(item.value);
        const post = doc.data();
        console.log(doc.data());
        document.getElementById("postMessage").value = post.userPost;

        editStatus = true;
        id = doc.id;
        document.getElementById("postBtn").innerText = "Update";

      } catch (error) {
        console.log(error);
      }
    });
  });

  document.addEventListener("submit", async (e) => {
    e.preventDefault();
    const editPost = document.getElementById("postMessage").value = post.userPost;
    try {
      if (!editStatus) {
        await addDataPost(postMessage.value);
      } else {
        await updatePost(id, {
          postMessage: postMessage.value,
        });

        editStatus = false;
        id = "";
        document.getElementById("postBtn").innerText = "Save";
      }

      postMessage.reset();
    } catch (error) {
      console.log(error);
    }
  });



  return containerPost;
};

export const postView = () => {
  printPost('post', callbackPost);
};


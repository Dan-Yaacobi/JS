const submitButton = document.querySelector("#submit_button")
const commentArea = document.querySelector(".comment")

submitButton.addEventListener("click", ()=>{
    if (!commentArea.value == ""){
        const commentSave = createComment(commentArea.value)
        saveToStorage(commentSave.dataset.id, commentSave.commentText.textContent)
        commentArea.value = ""
    }
})
        const commentSave = createComment(commentArea.value)
        saveToStorage(commentSave.dataset.id, commentArea.value)
window.onload = function(){
    loadFromStorage()
}

function createComment(text, id=""){
    const commentsBoard = document.querySelector(".comments_board")
    const newComment = document.createElement("h2")
    if (id == ""){
        newComment.dataset.id = crypto.randomUUID()
    }
    else{
        newComment.dataset.id = id
    }
    const commentText = document.createElement("p")
    commentText.textContent = text
    newComment.commentText = commentText
    newComment.appendChild(commentText)

    createButtons(newComment)
    newComment.editing = false
    commentsBoard.appendChild(newComment)
    return newComment
}

function handleEdit(comment,editComment,editSubmitButton){
    if (!comment.editing){
        startEdit(comment,editComment,editSubmitButton)
    }
    else{
        finishEdit(comment,editComment,editSubmitButton)
    }
}

function startEdit(comment,editComment,editSubmitButton){
        editComment.style.display = "block"
        editSubmitButton.disabled = false
        editSubmitButton.style.display = "block"
        comment.editing = true
}

function finishEdit(comment,editComment,editSubmitButton){
        editComment.style.display = "none"
        editSubmitButton.disabled = true
        editSubmitButton.style.display = "none"
        comment.editing = false
}
function handleSubmit(comment,editComment,editSubmitButton){
        if (editComment.value !== ""){
            comment.commentText.textContent = editComment.value
            saveToStorage(comment.dataset.id,editComment.value)
            editComment.value = ""
        }
        finishEdit(comment,editComment,editSubmitButton)
    }

function handleDelete(comment){
        deleteFromStorage(comment.dataset.id)
        comment.remove()
}
function createButtons(comment){
    const editButton = document.createElement("button")
    const deleteButton = document.createElement("button")
    
    editButton.textContent = "Edit"
    deleteButton.textContent = "Delete"

    const editComment = document.createElement("textarea")
    const editSubmitButton = document.createElement("button")
    editSubmitButton.textContent = "Submit"

    editButton.addEventListener("click", () => handleEdit(comment,editComment,editSubmitButton));
    deleteButton.addEventListener("click", () => handleDelete(comment));
    editSubmitButton.addEventListener("click",() => handleSubmit(comment,editComment,editSubmitButton))
    finishEdit(comment,editComment,editSubmitButton)

    comment.appendChild(deleteButton)
    comment.appendChild(editButton)
    comment.appendChild(editComment)
    comment.appendChild(editSubmitButton)

}

function saveToStorage(id, value){
    localStorage.setItem(id,value)
}

function deleteFromStorage(id){
    localStorage.removeItem(id)
}

function loadFromStorage(){
    for(let i = 0; i< localStorage.length; i++){
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)

        createComment(value,key)
    }
}
const add = document.querySelector('.add');
const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
    notes.forEach(notess => {

        addnotes(notess);
    }
    );
}

add.addEventListener('click', addnotes);

function addnotes( texts = '') {
    const note = document.createElement('div');
    note.classList.add('Notes');

    note.innerHTML += `<div class="tools">
    <button class="edit">
        <i class="fas fa-edit"></i>
    </button>
    <button class="delete">
        <i class="fas fa-trash-alt"></i>
    </button>
   
</div>
<div class="main hidden"><p></p> </div>
    <textarea></textarea>
`;
document.body.appendChild(note);
const Btnedit = note.querySelector('.edit');
const Btndelete = note.querySelector('.delete');
const mainEl = note.querySelector('.main');
const text = note.querySelector('textarea');
text.value = texts;
 "[object PointerEvent]" ===  text.value ? text.value = '' : text.value = texts;
  mainEl.querySelector('p').innerHTML = text.value;
text.addEventListener('input', (e) => {
 
    const { value } = e.target;
    mainEl.querySelector('p').innerHTML =  marked(value); 
    updateLs();
});

Btnedit.addEventListener('click', () => {
   mainEl.classList.toggle('hidden');
    text.classList.toggle('hidden');

 });
Btndelete.addEventListener('click', () => {
    note.remove();
    updateLs();
});


}

function updateLs() {
    const notes = document.querySelectorAll('.Notes');
    const notesArr = [];
    notes.forEach(note => {
        const text = note.querySelector('textarea').value;
        notesArr.push(text);
    });
    localStorage.setItem('notes', JSON.stringify(notesArr));
}
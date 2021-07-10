const submitBtn = document.getElementById('submit');
const libraryContainer = document.getElementById('library');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');

submitBtn.addEventListener('click', (e) => {
  const booksContainer = document.createElement('div');
  const bookReference = document.createElement('h2');
  const removeBtn = document.createElement('button');

  booksContainer.id = 'books-container';
  libraryContainer.appendChild(booksContainer);

  bookReference.className = 'book-reference';
  bookReference.textContent = `"${inputTitle.value}" by ${inputAuthor.value}`;

  removeBtn.className = 'remove-btn';
  removeBtn.textContent = 'Remove';

  booksContainer.appendChild(bookReference);
  booksContainer.appendChild(removeBtn);

  e.preventDefault();
});

/* Local Storage */
submitBtn.addEventListener('click', () => {
  const key = inputTitle.value;
  const { value } = inputAuthor;

  if (key && value) {
    localStorage.setItem(key, value);
  }
});
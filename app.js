// this variable holds the base URL for google search
const URL = "https://www.google.com/search?q=";
const FEELING_LUCKY = "&btnI=&sourceid=navclient&gfns=1";
// this variable selects the first input element in the document 
const inputDetails = document.querySelector("input");
const lucky = document.querySelector("button[data-lucky]");
// added event listenter to the lucky button, when clicked the output is a function
lucky.addEventListener("click", () => {
  console.log("here", inputDetails.value);
  if (!inputDetails.value) return;
  document.location = `${URL}${inputDetails.value}${FEELING_LUCKY}`;
});
//function named onSubmit it targets form submission events, and preventing a default browser
function onSubmit(event) {
  event.preventDefault();
  const { textSearch } = Object.fromEntries(new FormData(event.target));
  console.log("text", textSearch);

  if (!inputDetails.value) return;
  document.location = `${URL}${textSearch}`;
}

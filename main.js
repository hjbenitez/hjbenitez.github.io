// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function changeColour(
    primaryColour, primaryColourShade,
    secondaryColour, secondaryColourShade,
    tertiaryColour, tertiaryColourShade) {

    document.querySelector(
      ":root").style.cssText = 
      `
      --primary-colour:` +  primaryColour + `;
      --primary-colour-shade:` +  primaryColourShade + `;

      --secondary-colour:`+ secondaryColour +`;
      --secondary-colour-shade:`+ secondaryColourShade +`;

      --tertiary-colour:`+ tertiaryColour +`;
      --tertiary-colour-shade:`+ tertiaryColourShade +`;
      `;
  }
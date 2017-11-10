// Set the initial values and avoid global variables
$(function() {
  // Select color input
  const inputColor = $('#colorPicker');
  let color = inputColor.val();

  inputColor.on('blur', () => color = inputColor.val());

  let table = $('#pixel_canvas');

  // The event handler for clicking on "submit"
  const makeGrid = evt => {
    const el = evt.target;
    if (el.type !== 'submit') return;

    // Select size input
    let height = $('#input_height').val();
    let width = $('#input_width').val();

    // Clean the "old" table
    table.children().remove();

    // Draw the table
    let col = '';
    for (let i = 0; i < width; i++) {
      col += '<td></td>';
    }
    for (let count = 0; count < height; count++) {
      table.append(`<tr>${col}</tr>`);
    }

    return false;
  };

  // When size is submitted by the user, call makeGrid()
  $('#sizePicker').click(makeGrid);

  // Handler for "drawing"
  table.click(evt => $(evt.target).css('background', color));
});

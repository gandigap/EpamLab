export function changeDisplayModal(display) {
  const modal = document.getElementById('modal');
  modal.style.display = display;
}

export function changeDisplayDialog(display) {
  const dialog = document.getElementById('dialog');
  if (display === 'none') {
    dialog.showModal();
  } else {
    dialog.close();
  }
}

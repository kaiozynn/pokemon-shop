export class classItem {
  static addItem(count) {
    const contador = document.querySelector('.shopCount-item')

    if(count !== 0) {
      contador.classList.remove('shopDisplayNone');
      contador.classList.add('shopCount-item');
      return contador.innerHTML = count;
    }
  }

  static createItem(count, item) {
    return {
      count,
      item
    }
  }
}
export const drawer = {
    linkDrawGameArea: null,
    drawGameArea() {
        let div = document.createElement('div');
        document.querySelector('body').prepend(div);
        div.style.height = '1000px';
        div.style.width = '1000px';
        div.style.border = '2px solid black';
        div.id = 'gameArea';
        this.linkDrawGameArea = div;
        return div;
    }
    // linkDrawGameArea: this.drawGameArea, 
}

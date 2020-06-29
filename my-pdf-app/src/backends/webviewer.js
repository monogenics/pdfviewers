export default class Webviewer {
    init = (source, element) => {
      this.viewer = new window.PDFTron.WebViewer({
        path: '/WebViewer/lib',
        initialDoc: source,
      }, element);
    }  
  
    rotate = (direction) => {
      if(direction === 'clockwise') {
        this.viewer.rotateClockwise();
        console.log(this.viewer.searchText('Cisco',{caseSensitive: false, wholeWord: true}))
      } else {
        this.viewer.rotateCounterClockwise();
      }
    }
  }
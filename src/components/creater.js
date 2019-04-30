
import domtoimage from 'dom-to-image';

const creater = () => {
  var node = document.getElementById('my-node');

  console.log(node);
  domtoimage.toPng(node)
      .then(function (dataUrl) {
        console.log('hit');
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });

}

export default creater;
import domtoimage from 'dom-to-image';

export const GENERATER_INPUT_ID = 'generator-target-id';

const generate = () => {
  const inputId = GENERATER_INPUT_ID;

  var node = document.getElementById(inputId);

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

export default generate;
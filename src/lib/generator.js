import domtoimage from 'dom-to-image';

export const GENERATER_INPUT_ID = 'generator-target-id';

const generate = () => {
  const inputId = GENERATER_INPUT_ID;
  const node = document.getElementById(inputId);

  domtoimage.toPng(node)
    .then(dataUrl => {
      const img = new Image();
      img.src = dataUrl;

      document.body.appendChild(img);
    })
    .catch(error => {
      console.error('oops, something went wrong!', error);
    });
}

export default generate;
import domtoimage from 'dom-to-image';

export const GENERATER_INPUT_ID = 'generator-input-id';
export const GENERATER_OUTPUT_ID = 'generator-output-id'

const generate = () => {
  const inputId = GENERATER_INPUT_ID;
  const node = document.getElementById(inputId);

  domtoimage.toPng(node)
    .then(dataUrl => {
      const img = new Image();
      img.src = dataUrl;
      img.style.border = 'dashed 1px black';

      document.getElementById(GENERATER_OUTPUT_ID).appendChild(img);
    })
    .catch(error => {
      console.error('oops, something went wrong!', error);
    });
}

export default generate;
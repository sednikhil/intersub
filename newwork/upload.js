
  async function convertImageToText() {
    const imageFileInput = document.getElementById('imageFile');
    const outputDiv = document.getElementById('output');

    if (imageFileInput.files.length > 0) {
      const imageFile = imageFileInput.files[0];
      
      // Initialize Tesseract.js
      const { createWorker } = Tesseract;
      const worker = createWorker({
        logger: (info) => console.log(info),
      });

      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');

      // Perform OCR on the selected image
      const { data: { text } } = await worker.recognize(imageFile);
      outputDiv.innerText = text;

      await worker.terminate();
    } else {
      outputDiv.innerText = 'Please select an image file.';
    }
  }


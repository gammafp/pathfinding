function handleFileSelect(evt) {
    var files = evt.target;
    var reader = new FileReader();
    reader.onload = function () {
        var texto = reader.result;
        localStorage.setItem("lienzo", texto);
        location.reload();
    }
    reader.readAsText(files.files[0]);
}

function guardarSaveData(evet) {
    var textFile = null,
        makeTextFile = function (text) {
            var data = new Blob([text], {
                type: 'text/plain'
            });

            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }

            textFile = window.URL.createObjectURL(data);

            return textFile;
        };

        evet.target.href= makeTextFile(localStorage.getItem("lienzo"));



}
document.getElementById('linkDeDescarga').addEventListener('click', guardarSaveData, false);
document.getElementById('archivos').addEventListener('change', handleFileSelect, false);
class FreqVisualizer {
    //area declaration
    constructor(DivID) {
        const mainDiv = document.getElementById(DivID);
        let height = document.getElementById(DivID).attributes.height;
        let width = document.getElementById(DivID).attributes.width;
        init()
        function init() {
        mainDiv.appendChild(document.createElement("canvas"));
    }
    }
}

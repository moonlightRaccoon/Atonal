let sample;
let waveform, analyzer;
let playButton;


function preload() {
    sample = loadSound('assets/simple.mp3');
}

var samples = 100;

function setup() {
    let myCanvas = createCanvas(340, 80);
    myCanvas.parent('sketch');
    playButton =
        analyzer = new p5.FFT();
    analyzer.setInput(sample);
}


function keyPressed() {
    if (key >= 'w') {
        sample.loop();
    }


}

function playTrack() {
        console.log("acaba de entrar");

    if (sample.isPlaying()) {
        
                        console.log("aqui deberia entrar segundo");

        sample.pause();
           document.getElementById("pbutton").textContent = "Play";
    } else if (sample.isPaused()) {
                                console.log("aqui deberia entrar tercero");

           document.getElementById("pbutton").textContent = "Pause";
        sample.play();
    } else {
                console.log("aqui deberia entrar primero");

        sample.play();
        document.getElementById("pbutton").textContent = "Pause";
        console.log();
    }
    
    
        var element = document.getElementById("albums");

        if (window.matchMedia("(orientation: portrait)").matches) {
            element.setAttribute("data", "grid.html");
        } else if (window.matchMedia("(orientation: landscape)").matches) {
            element.setAttribute("data", "coverflow.html");
        }

}

function draw() {
    background(0);
    stroke(4, 209, 40);
    strokeWeight(2.5);
    noFill();
    waveform = analyzer.waveform();

    beginShape();
    for (var i = 0; i < samples; i++) {
        vertex(
            map(i, 0, samples, 0, width),
            map(waveform[i], -1, 1, 0, height)
        );
    }
    endShape();
}




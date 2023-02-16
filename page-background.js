// load the library, either via a window global (browsers) or require call (node)
// in es-module environments, you can `import trianglify from 'trianglify'` as well
const trianglify = window.trianglify || require('trianglify');

// get random numbers
var randColorFunc = Math.random() >= 0.5;
var randColorArg  = Math.random();
var randCellSize  = 30 + Math.round(Math.random() * 20);

// build the background
const patternOpts = {
    //palette: { flag: ['#e28d00', '#eccd00', '#ffffff', '#62afdd', '#223756'] },       // aroace flag
    xColors: "Spectral", //'YlGnBu',
    yColors: "RdYlGn", //'match',
    variance: 1,
    cellSize: 15, //randCellSize,
    strokeWidth: 0, //(randColorFunc ? 0 : 1),
    //colorFunction: trianglify.colorFunctions.interpolateLinear(randColorArg),
    //colorFunction: trianglify.colorFunctions.sparkle(randColorArg),
    colorFunction: trianglify.colorFunctions.shadows(),
    seed: "stuck"
};

function setBackground() {
    // set current width
    patternOpts.width  = window.innerWidth;
    patternOpts.height = window.innerHeight;

    var pattern = trianglify(patternOpts);

    // assign to the svg element
    var svg = $(pattern.toSVG());
    $("#background_svg").html(svg);
}

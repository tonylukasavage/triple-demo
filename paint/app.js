// $ triple --module ti.paint

paint = require("ti.paint");

var window = Titanium.UI.createWindow({
 title: 'Test Paint',
 backgroundColor: '#fff'
});

var paintView = paint.createPaintView({
 top: 0,
 left: 0,
 right: 0,
 bottom: 0,
 strokeColor: '#0f0',
 strokeAlpha: 255,
 strokeWidth: 10
});

window.add(paintView);
window.open();

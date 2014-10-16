/** @jsx React.DOM */
/**
 * Created by ngrebenshikov on 16/10/14.
 */
function run() {
    minX = 0;
    maxX = window.innerWidth;
    minY = 0;
    maxY = window.innerHeight;

    var wrapper = document.getElementById('wrapper');
    wrapper.style.width = maxX+'px';
    wrapper.style.height = maxY+'px';

    gravity = 0.5;
    numBunnies = 100;
    incBunnies = 20;

    bunnies = [];

    var bunny;
    for (var i = 0; i < numBunnies; i++) {
        bunny = {};
        bunny.position = {};
        bunny.position.x = 0;
        bunny.position.y = 0;
        bunny.speedX = Math.random() * 5;
        bunny.speedY = (Math.random() * 5) - 2.5;
        bunny.scale = 0.3 + Math.random();
        bunny.rotation = 15 - Math.random() * 30;
        bunnies.push(bunny);
    }

    var fps = {
        startTime: 0,
        frameNumber: 0,
        getFPS: function () {
            this.frameNumber++;
            var d = new Date().getTime(),
                currentTime = ( d - this.startTime ) / 1000,
                result = Math.floor(( this.frameNumber / currentTime ));

            if (currentTime > 1) {
                this.startTime = new Date().getTime();
                this.frameNumber = 0;
            }
            return result;

        }
    };

    setInterval(function () {
        var toRender = [];
        for (var i = 0; i < numBunnies; i++) {
            bunny = bunnies[i];
            bunny.position.x += bunny.speedX;
            bunny.position.y += bunny.speedY;
            bunny.speedY += gravity;
            bunny.alpha = 0.3 + 0.7 * bunny.position.y / maxY;

            if (bunny.position.x > maxX) {
                bunny.speedX *= -1;
                bunny.position.x = maxX;
            }
            else if (bunny.position.x < minX) {
                bunny.speedX *= -1;
                bunny.position.x = minX;
            }
            if (bunny.position.y > maxY) {
                bunny.speedY *= -0.8;
                bunny.position.y = maxY;
                if (Math.random() > 0.5) bunny.speedY -= 3 + Math.random() * 4;
            }
            else if (bunny.position.y < minY) {
                bunny.speedY = 0;
                bunny.position.y = minY;
            }

            toRender.push(Bunny({
                key: 'b'+i,
                x: ~~bunny.position.x,
                y: ~~bunny.position.y,
                rotation: ~~bunny.rotation,
                opacity: bunny.alpha.toFixed(2),
                scale: bunny.scale.toFixed(2)
            }));
        }

        toRender.push(Text({ key: "fps", text: "FPS: " + fps.getFPS(), x: 25, y: 25}));
        toRender.push(Text({ key: "num", text: "Number of bunnies: " + numBunnies, x: 25, y: 50}));

        var s = {width: "100%", height:"100%"};
        React.renderComponent(React.DOM.svg({style: s}, toRender), wrapper);
    }, 1);
}

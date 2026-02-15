document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("starfield");
    const context = canvas.getContext("2d");
    const song = document.getElementById("valentineSong");
    const button = document.getElementById("valentinesButton");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars setup
    const stars = 500;
    const colorrange = [0, 60, 240];
    const starArray = [];

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < stars; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * 1.2;
        let hue = colorrange[getRandom(0, colorrange.length - 1)];
        let sat = getRandom(50, 100);
        let opacity = Math.random();
        starArray.push({ x, y, radius, hue, sat, opacity });
    }

    let frameNumber = 0;
    let opacity = 0;
    let secondOpacity = 0;
    let thirdOpacity = 0;

    function drawStars() {
        for (let star of starArray) {
            context.beginPath();
            context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            context.fillStyle = `hsla(${star.hue}, ${star.sat}%, 88%, ${star.opacity})`;
            context.fill();
        }
    }

    function updateStars() {
        for (let star of starArray) {
            if (Math.random() > 0.99) star.opacity = Math.random();
        }
    }

    // Autoplay song on first interaction
    function autoPlaySong() {
        song.play().catch(() => console.log("Autoplay blocked, click button to play"));
        document.removeEventListener("click", autoPlaySong);
        document.removeEventListener("keydown", autoPlaySong);
    }

    document.addEventListener("click", autoPlaySong);
    document.addEventListener("keydown", autoPlaySong);

    button.addEventListener("click", () => {
        song.play();
        if (button.textContent.startsWith("Click Me")) {
            button.textContent = "loading...";
            setTimeout(() => button.textContent = "Check Your Messenger 🙃", 2000);
        }
    });

    function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
        lines.forEach((line, index) => {
            context.fillText(line, x, y + index * (fontSize + lineHeight));
        });
    }

    function drawText() {
        const fontSize = Math.min(30, window.innerWidth / 24);
        const lineHeight = 8;

        context.font = `${fontSize}px Comic Sans MS`;
        context.textAlign = "center";
        context.shadowColor = "rgba(45, 45, 255, 1)";
        context.shadowBlur = 8;

        // **Full message sequence, fades in/out**
        if(frameNumber < 250){
            context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
            context.fillText("Dear Mekmek just want u to know everyday I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
            opacity += 0.01;
        }
        if(frameNumber >= 250 && frameNumber < 500){
            context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
            context.fillText("Dear Mekmek just want u to know everyday I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
            opacity -= 0.01;
        }
        if(frameNumber == 500) opacity = 0;

        if(frameNumber > 500 && frameNumber < 750){
            context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
            if(window.innerWidth < 600) {
                drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
            } else {
                context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
            }
            opacity += 0.01;
        }
        if(frameNumber >= 750 && frameNumber < 1000){
            context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
            if(window.innerWidth < 600) {
                drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
            } else {
                context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
            }
            opacity -= 0.01;
        }
        if(frameNumber == 1000) opacity = 0;

        if(frameNumber > 1000 && frameNumber < 1250){
            context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
            context.fillText("to be alive, and to get to spend this life with you is so incredibly unfathomably unlikely", canvas.width/2, canvas.height/2);
            opacity += 0.01;
        }
        if(frameNumber >= 1250 && frameNumber < 1500){
            context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
            context.fillText("to be alive, and to get to spend this life with you is so incredibly unfathomably unlikely", canvas.width/2, canvas.height/2);
            opacity -= 0.01;
        }
        if(frameNumber == 1500) opacity = 0;

        if(frameNumber > 1500 && frameNumber < 1750){
            context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
            context.fillText("and yet here I am to get the impossible chance to get to know and be with you", canvas.width/2, canvas.height/2);
            opacity += 0.01;
        }
        if(frameNumber >= 1750 && frameNumber < 2000){
            context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
            context.fillText("and yet here I am to get the impossible chance to get to know and be with you", canvas.width/2, canvas.height/2);
            opacity -= 0.01;
        }
        if(frameNumber == 2000) opacity = 0;

        if(frameNumber > 2000 && frameNumber < 2250){
            context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
            if(window.innerWidth < 600) {
                drawTextWithLineBreaks(["I’ll be your shield and your shoulder"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
            } else {
                context.fillText("I’ll be your shield and your shoulder", canvas.width/2, canvas.height/2);
            }
            opacity += 0.01;
        }
        if(frameNumber >= 2250 && frameNumber < 2500){
            context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
            if(window.innerWidth < 600) {
                drawTextWithLineBreaks(["I’ll stay with u thru every storm keeping you safe and close"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
            } else {
                context.fillText("I’ll stay with u thru every storm keeping you safe and close", canvas.width/2, canvas.height/2);
            }
            opacity -= 0.01;
        }
        if(frameNumber == 2500) opacity = 0;

        if(frameNumber > 2500 && frameNumber < 2750){
            context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
            if(window.innerWidth < 600) {
                drawTextWithLineBreaks(["I love you so much Mekmek, more than", "all the time and space in the universe can contain"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
            } else {
                context.fillText("I love you so much Mekmek, more than all the time and space in the universe can contain", canvas.width/2, canvas.height/2);
            }
            opacity += 0.01;
        }

        if(frameNumber >= 2750){
            context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
            if(window.innerWidth < 600) {
                drawTextWithLineBreaks(["and I can't wait to spend all the time in", "the world to share that love with you!"], canvas.width/2, canvas.height/2 + 60, fontSize, lineHeight);
            } else {
                context.fillText("and I can't wait to spend all the time in the world to share that love with you!", canvas.width/2, canvas.height/2 + 50);
            }
            secondOpacity += 0.01;
        }

        if(frameNumber >= 3000){
            context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
            context.fillText("Happy Valentines Day Mekyla I LOVE YOU WITH ALL MY HEART AND NINE LIVES <3", canvas.width/2, canvas.height/2 + 120);
            thirdOpacity += 0.01;
            button.style.display = "block";
        }

        context.shadowColor = "transparent";
        context.shadowBlur = 0;
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawStars();
        updateStars();
        drawText();
        frameNumber++;
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    requestAnimationFrame(draw);

});

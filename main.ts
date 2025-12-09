<!doctype html >
    <html lang="en" >
        <head>
        <meta charset="utf-8" />
            <meta name="viewport" content = "width=device-width,initial-scale=1" />
                <title>3D Car Drifting Game < /title>
                    < link rel = "stylesheet" href = "style.css" />
                        <!--Three.js CDN-- >
                            <script src="https://unpkg.com/three@0.158.0/build/three.min.js" > </script>
                                < script src = "https://unpkg.com/three@0.158.0/examples/js/controls/OrbitControls.js" > </script>
                                    < /head>
                                    < body >
                                    <!--Intro / Start screen-- >
                                        <div id="overlay" class="overlay" >
                                            <div class="menu" >
                                                <h1>3D Car Drifting < /h1>
                                                    < p > Arcade - style low - poly drifting.Use arrow keys / WASD.Space = handbrake.< /p>
                                                        < button id = "startBtn" class="btn" > Tap to Start < /button>
                                                            < div class="muterow" >
                                                                <button id="muteBtn" class="btn small" > Mute < /button>
                                                                    < button id = "controlsToggle" class="btn small" > Show Controls < /button>
                                                                        < /div>
                                                                        < div id = "controlsInfo" class="controlsinfo hidden" >
                                                                            <strong>Desktop: </strong> Arrow / WASD to drive, Space handbrake. < br />
                                                                                <strong>Mobile: </strong> On-screen buttons (left/right, accel, brake, drift).
</div>
    < /div>
    < /div>

    < !--HUD -->
        <div id="hud" class="hud hidden" >
            <div class="toprow" >
                <div class="score" > Score: <span id="score" > 0 < /span></div >
                    <div class="timer" > Time: <span id="timer" > 60 < /span>s</div >
                        </div>
                        < div class="midrow" >
                            <div class="combo" > Combo: x < span id = "combo" > 1 < /span></div >
                                </div>
                                < div class="bottomrow" >
                                    <button id="restartBtn" class="btn small" > Restart < /button>
                                        < button id = "muteBtn2" class="btn small" > Mute < /button>
                                            < /div>
                                            < /div>

                                            < !--Mobile controls(rendered on top of canvas)-- >
                                                <div id="mobileControls" class="mobile-controls hidden" >
                                                    <div class="left-right" >
                                                        <button id="leftBtn" class="ctl" >◀</button>
                                                            < button id = "rightBtn" class="ctl" >▶</button>
                                                                < /div>
                                                                < div class="pedals" >
                                                                    <button id="accelBtn" class="ctl big" >▲</button>
                                                                        < button id = "brakeBtn" class="ctl big" >▼</button>
                                                                            < button id = "driftBtn" class="ctl big red" > DRIFT < /button>
                                                                                < /div>
                                                                                < /div>

                                                                                < !--Canvas container-- >
                                                                                    <div id="canvasContainer" > </div>

                                                                                        < !--Skidmark legend-- >
                                                                                            <div class="legend" > Hold drift > 1.5s to increase combo < /div>

                                                                                                < !--Scripts -->
                                                                                                    <script src="mobileControls.js" > </script>
                                                                                                        < script src = "script.js" > </script>
                                                                                                            < /body>
                                                                                                            < /html>

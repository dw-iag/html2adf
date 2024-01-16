
const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link type="text/css" rel="stylesheet" href="styles.css"><title>Nothing to see here.</title><style>body{ display: flex; width: 100vw; height: 100vh; margin: 0; justify-content: center; align-items: center; background-color: #fadebd;} .frame{ position: relative; width: 800px; height: 600px; overflow: hidden; --time: 22s;} .frame *, .frame *::before, .frame *::after{ content: ''; position: absolute;} .scene1{ width: 100%; height: 100%;} .scene1::after{ top: 50%; left: 50%; width: 390px; height: 12px; border-radius: 50%; background-color: #d6c2a6; box-shadow: 0 10px #fadebd, 0 20px #fadebd; translate: -50% 170px;} .boy{ top: 50%; left: 50%; width: 140px; height: 130px; background: radial-gradient(closest-side, #f78265 100%, transparent 0) center -5px / 60px 40px no-repeat, white; border-radius: 25px 25px 0 0; animation: boy var(--time) linear infinite;} @keyframes boy{ 0%, 66.41%, 100%{ translate: -50% 43px; } 66.42%, 91.8%{ translate: -50% 67px; } 93.42%{ translate: -50% 44px; }} .boy::before{ top: -30px; left: 50%; width: 42px; height: 40px; background-color: #f78265; translate: -50%;} .boy__head{ top: -220px; left: 50%; width: 160px; height: 140px; background-color: #ff977b; box-shadow: inset 0 -4px 0 12px #715538; border-radius: 60px 60px 10px 10px; animation: boyHead var(--time) linear infinite;} @keyframes boyHead{ 0%, 100%{ translate: -50%; } 0.54%{ translate: -50% 22px; } 1.08%, 5.4%{ translate: -50% 31px; } 5.4%, 66.41%{ translate: -50% -2px; } 66.42%{ translate: -50% 33px; } 86.67%{ translate: -50% 46px; } 87.75%, 90.99%{ translate: -50% -2px; } 91.52%{ translate: -50% 16px; } 93.42%{ translate: -50% -3px; }} .boy__head::before{ top: 60px; left: 50%; width: 190px; height: 155px; background-color: #ff977b; border-radius: 50%; animation: boyFace var(--time) linear infinite;} @keyframes boyFace{ 0%, 100%{ translate: -50%; } 0.54%{ translate: -50% -9px; } 1.08%, 99.36%{ translate: -50% -16px; }} .boy__head::after{ top: 78px; left: -45px; width: 50px; height: 50px; background: conic-gradient(from 270deg, #ff977b 0deg 61deg, transparent 0), radial-gradient(#ff977b 8px, #303083 8px 10px, #ff977b 0); border-radius: 100%; -webkit-box-reflect: right 150px; animation: boyEars var(--time) linear infinite;} @keyframes boyEars{ 0%, 100%{ translate: 0 0px; } 0.54%{ translate: 0 -15px; } 1.08%, 99.36%{ translate: 0 -22px; }} .boy__hair{ top: -20px; left: 31px; width: 43px; height: 28px; background: radial-gradient(circle at 109px 60px, transparent 70%, #715537 0); border-radius: 90% 2px 0 0 / 100% 2px 0 0;} .boy__hair::before{ top: 4px; left: 30px; width: 33px; height: 17px; background: radial-gradient(circle at 79px 49px, transparent 70%, #715537 0); border-radius: 90% 2px 0 0 / 100% 2px 0 0;} .boy__eyes{ top: 17px; left: 17px; width: 64px; height: 64px; background: #f78569; border-radius: 50%; box-shadow: 60px 0 #f78569; animation: boyEyesPosition var(--time) linear infinite;} @keyframes boyEyesPosition{ 0%, 100%{ translate: 0 0px; } 0.54%, 99.36%{ translate: 0 10px; }} .boy__eyes::before, .boy__eyes::after{ width: 100%; height: 100%; background: linear-gradient(transparent 32px, black 0) 32px 0px / 2px 100% no-repeat, white; border-radius: 50%; animation: boyEyesSize var(--time) linear infinite, boyEyesDirection var(--time) linear infinite;} @keyframes boyEyesSize{ 0%, 19.44%, 100%{ scale: 1 1; } 19.71%{ scale: 1 0.2; } 20.25%, 38.34%{ scale: 1 1; } 38.88%{ scale: 1 0.2; } 39.15%, 66.41%{ scale: 1 1; } 66.42%{ scale: 1 0.2; } 86.67%{ scale: 1 0.05; } 87.21%, 90.99%{ scale: 1 1; } 91.52%{ scale: 1 0; } 92.07%{ scale: 1 1; }} @keyframes boyEyesDirection{ 0%, 19.44%, 100%{ background-position: 32px 0px;} 19.71%, 39.14%{ background-position: 32px -15px; } 39.15%, 66.41%{ background-position: 32px 0px; } 66.42%, 91.52%{ background-position: 32px -15px; } 92.07%{ background-position: 32px 0px; }} .boy__eyes::before{ top: 0px; left: 0px;} .boy__eyes::after{ top: 0px; left: 60px;} .boy__mouth{ top: 50%; left: 50%;} .boy__mouth::before{ top: 22px; left: 50%; width: 136px; height: 100px; background: #ff4559; border-radius: 30px 30px 70px 70px; box-shadow: inset -65px 50px 0 -20px #be1520; animation: mouthOpen var(--time) linear infinite;} @keyframes mouthOpen{ 0%, 100%{ translate: -50%; scale: 1;} 0.54%, 91.53%{ translate: -50% 22px; scale: 0;} 94.77%, 95.58%{ translate: -50%; scale: 0.7;}} .boy__mouth::after{ top: 79px; left: -28px; width: 49px; height: 30px; background: radial-gradient(circle at -20% 50%, #ff977b 8px, #303083 8px 10px, transparent 0) 10px 1px / 20px 20px no-repeat, radial-gradient(transparent 15px, #303083 15px 17px, transparent 0) 33px -12px no-repeat, linear-gradient(#303083, #303083) 15px 11px / 34px 2px no-repeat; animation: mouthClose var(--time) linear infinite, mouthMovement 0.7s linear infinite;} @keyframes mouthClose{ 0%, 0.53%, 91.54%, 100%{ opacity: 0; } 0.54%, 91.53%{ opacity: 1; } 1.08%, 66.41%{ translate: 0px -4px; } 66.42%, 86.67%{ translate: 0px -30px; } 86.94%, 90.99%{ translate: -7px -30px; } 0%, 1.08%{ animation-play-state: running, paused;} 1.09%, 100%{ animation-play-state: running, running;}} @keyframes mouthMovement{ 0%, 100%{ background-position: 8px 1px, 33px -12px, 15px 11px;} 25%{ background-position: 12px 1px, 33px -12px, 15px 11px;} 50%{ background-position: 12px 5px, 33px -12px, 15px 11px;} 75%{ background-position: 8px 5px, 33px -12px, 15px 11px;}} .boy__cheeks{ top: 96px; left: 6px; width: 20px; height: 20px; background: #ff4559; border-radius: 50%; box-shadow: 126px 0 #ff4559;} .boy__cheeks::before{ top: -37px; left: 73px; width: 20px; height: 22px; background: #ff977b; transform-origin: top right; rotate: 10deg; border-radius: 0 8px 100% 0 / 0 8px 60% 0; animation: boyNose var(--time) linear infinite;} @keyframes boyNose{ 0%, 100%{ translate: 0 0px; } 0.54%, 2.16%{ translate: 0 10px; } 5.4%, 98.55%{translate: 0 15px; }} .boy__leftArm{ top: 0px; left: -10px; width: 170px; height: 50px; background: #ff977b; transform-origin: 25px 25px; border-radius: 99em; box-shadow: inset 90px 0 0 -20px white; animation: boyArm var(--time) linear infinite;} @keyframes boyArm{ 0%, 100%{ rotate: 163deg; } 0.54%, 66.41%{ rotate: 173deg; } 66.42%, 90.99%{ rotate: 150deg; } 93.42%, 95.58%{ rotate: 170deg; } 96.93%{ rotate: 149deg; } 98.55%{ rotate: 138deg; }} .boy__leftArm::before{ top: 0px; left: calc(100% - 50px); width: 152px; height: 50px; background: inherit; border-radius: inherit; transform-origin: inherit; animation: boyArmBefore var(--time) linear infinite;} @keyframes boyArmBefore{ 0%, 100%{ rotate: 159deg; } 0.54%, 66.41%{ rotate: 153deg; } 66.42%, 90.99%{ rotate: 209deg; } 93.42%, 94.77%{ rotate: 114deg; } 95.58%{ rotate: 138deg; } 96.93%, 98.55%{ rotate: 189deg; }} .boy__leftArm::after{ top: 0px; left: calc(100% - 50px); width: 70px; height: 70px; background: radial-gradient(closest-side, #ff977b 100%, transparent 0) -25px 21px no-repeat, radial-gradient(closest-side, transparent calc(80% - 2px), #303083 calc(80% - 2px) 80%, #ff977b 0) -8px -19px / 120% 120% no-repeat, radial-gradient(closest-side, #ff977b calc(100% - 2px), #303083 calc(100% - 2px) 100%, transparent 0) -23px 17px no-repeat, radial-gradient(closest-side, #ff977b calc(100% - 2px), #303083 calc(100% - 2px) 100%, transparent 0) -13px 5px no-repeat, radial-gradient(closest-side, #ff977b calc(100% - 2px), #303083 calc(100% - 2px) 100%, transparent 0) -9px -3px no-repeat, radial-gradient(closest-side, #ff977b calc(100% - 2px), #303083 calc(100% - 2px) 100%, transparent 0) -2px -10px no-repeat, #ff977b; border-radius: 50%; transform-origin: inherit; animation: boyArmAfter var(--time) linear infinite;} @keyframes boyArmAfter{ 0%, 100%{ transform: rotate(155deg) translate(95px, -4px); } 0.54%, 66.41%{ transform: rotate(159deg) translate(95px, -18px); } 66.42%, 90.99%{ transform: rotate(209deg) translate(95px, -18px); } 93.42%, 94.77%{ transform: rotate(114deg) translate(100px, -8px); } 95.58%{ transform: rotate(138deg) translate(100px, -8px); } 96.93%, 98.55%{ transform: rotate(189deg) translate(100px, -8px); }} .chopsticks{ top: 0px; left: calc(100% - 50px); animation: chopsticks var(--time) linear infinite;} @keyframes chopsticks{ 0%, 100%{ transform: rotate(155deg) translate(115px, -30px) rotate(0deg); } 0.54%, 66.41%{ transform: rotate(159deg) translate(115px, -44px) rotate(-11deg); } 66.42%, 90.99%{ transform: rotate(209deg) translate(85px, -24px) rotate(-11deg); } 93.42%, 94.77%{ transform: rotate(114deg) translate(142px, -30px) rotate(64deg); } 95.58%{ transform: rotate(138deg) translate(126px, -32px) rotate(50deg); } 96.93%{ transform: rotate(189deg) translate(93px, -20px) rotate(50deg); } 98.55%{ transform: rotate(183deg) translate(93px, -9px) rotate(50deg); }} .chopsticks::before{ top: 0px; left: 0px; width: 160px; height: 6px; background: linear-gradient(1deg, #303083 70%, transparent 0); border-radius: 99em; translate: -50% -6px; transform-origin: center center; animation: chopsticksBefore var(--time) linear infinite;} @keyframes chopsticksBefore{ 0%, 93.15%, 100%{ rotate: 37deg; } 93.69%{ rotate: 42deg; } 93.96%, 94.23%{ rotate: 37deg; } 94.50%{ rotate: 42deg; } 94.77%{ rotate: 37deg; }} .chopsticks::after{ top: 0px; left: 0px; width: 160px; height: 6px; background: linear-gradient(1deg, #303083 70%, transparent 0); border-radius: 99em; transform-origin: center center; animation: chopsticksAfter var(--time) linear infinite;} @keyframes chopsticksAfter{ 0%, 90.99%, 100%{ translate: calc(-50% - 3px) -1px; rotate: 34deg;} 93.42%{ translate: calc(-50% - 3px) 5px; rotate: 36deg;}} .plate{ top: 50%; left: 50%; width: 70px; height: 6px; background-color: #202465; border-radius: 6px 6px 0 0; translate: -50% 170px; z-index: 1;} .plate::after{ top: -55px; left: 50%; width: 125px; height: 55px; background: linear-gradient(180deg, white 1px, transparent 1px 14px, white 14px 15px, transparent 0) 0 10px, #303083; border-radius: 0 0 35px 35px / 0 0 50px 50px; translate: -50%;} .noodle{ top: -28px; left: 50%; animation: noodle var(--time) linear infinite, noodleLength var(--time) linear infinite;} @keyframes noodle{ 0%, 1.08%, 100%{ translate: -50%; } 5.40%, 66.41%{ translate: -50% -36px; } 66.42%{ translate: -50% -27px; } 86.67%, 98.81%{ translate: -50% -14px; } 98.82%{ translate: -50% 105px;} 0%, 77.76%, 100%{ clip-path: polygon(-200% 0%, 300% 0%, 300% 100%, -200% 100%); } 86.67%, 90.99%, 98.82%{ clip-path: polygon(-200% 0%, 300% 0%, 300% 0%, -200% 0%); }} .noodle, .noodle::before, .noodle::after{ width: 6px; height: 160px; background: radial-gradient(circle at -7px 50%, transparent 6px 8px, #ffcf8b 8px 10px, transparent 0) 3px 11px / 4px 22px repeat-y, radial-gradient(circle at 10px 50%, transparent 6px 8px, #ffcf8b 8px 10px, transparent 0) 0 0 / 3px 22px repeat-y;} .noodle::before, .noodle::after{ animation: noodleLength var(--time) linear infinite;} @keyframes noodleLength{ 0%, 2.16%{ background-position: 3px 11px, 0 0;} 97.2%, 100%{ background-position: 3px -1489px, 0 -1500px;}} .noodle::before{ left: -7px;} .noodle::after{ left: 7px;} .rightArm{ top: 50%; left: 50%; width: 192px; height: 50px; background: #ff977b; transform-origin: 25px 25px; border-radius: 99em; box-shadow: inset 90px 0 0 -20px white; z-index: 1; animation: rightArm var(--time) linear infinite;} @keyframes rightArm{ 0%, 66.41%, 100%{ translate: 28px 43px; rotate: 35deg; } 66.42%, 90.99%{ translate: 28px 69px; rotate: 23deg; } 93.42%{ translate: 28px 43px; rotate: 35deg; }} .rightArm::before{ top: 0px; left: calc(100% - 50px); width: 152px; height: 50px; background: inherit; border-radius: inherit; transform-origin: inherit; animation: rightArmBefore var(--time) linear infinite;} @keyframes rightArmBefore{ 0%, 66.41%, 100%{ rotate: 144deg; } 66.42%, 90.99%{ rotate: 156deg; } 93.42%{ rotate: 144deg; }} .rightArm::after{ top: 0px; left: calc(100% - 50px); width: 70px; height: 70px; background: radial-gradient(closest-side, #ff977b 100%, transparent 0) 43px -33px no-repeat, radial-gradient(closest-side, #ff977b calc(100% - 2px), #303083 calc(100% - 2px) 100%, transparent 0) 25px 12px / 70% 40% no-repeat, radial-gradient(closest-side, #ff977b 100%, transparent 0) -15px -35px no-repeat, radial-gradient(closest-side, transparent calc(100% - 2px), #303083 calc(100% - 2px) 100%, transparent 0) -35px 13px / 100% 70% no-repeat, radial-gradient(closest-side, transparent calc(100% - 2px), #303083 calc(100% - 2px) 100%, transparent 0) -24px 7px no-repeat, radial-gradient(closest-side, transparent calc(100% - 2px), #303083 calc(100% - 2px) 100%, transparent 0) -10px 14px no-repeat, #ff977b; border-radius: 50%; transform-origin: inherit; animation: rightArmAfter var(--time) linear infinite;} @keyframes rightArmAfter{ 0%, 66.41%, 100%{ transform: rotate(144deg) translate(104px, -3px); } 66.42%, 90.99%{ transform: rotate(156deg) translate(104px, -3px); } 93.42%{ transform: rotate(144deg) translate(104px, -3px); }} .scene2{ width: 100%; height: 100%; background-color: #fadebd; text-align: center; line-height: 600px; font-size: 4em; font-family: 'Indie Flower', cursive; color: #303083; z-index: 1; animation: scene2 var(--time) linear infinite;} @keyframes scene2{ 0%, 47.78%, 66.43%, 100%{ opacity: 0;} 47.79%, 66.42%{ opacity: 1;}}</style></head><body><div class="frame"><div class="scene1"><div class="boy"><div class="boy__head"><div class="boy__hair"></div><div class="boy__eyes"></div><div class="boy__mouth"></div><div class="boy__cheeks"></div></div><div class="noodle"></div><div class="boy__leftArm"><div class="chopsticks"></div></div></div><div class="plate"></div><div class="rightArm"></div></div><div class="scene2">5 minutes later</div></div></body></html>`

export default html
  function showActionLog(text) {
  const log = document.getElementById("action-log");
  log.textContent = text;
  log.style.animation = "none";
  log.offsetHeight; // trigger reflow to restart animation
  log.style.animation = "fadeOut 2s ease-out forwards";
}

        let walkoutAudio = null;

      const fighters = [
        {
          name: "'AIR' Akaki  Basiashvili",
          img: "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.15752-9/514434756_713185394861477_7705537185801404233_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=RtMZDEmFdnoQ7kNvwFv_T-E&_nc_oc=AdmWX0gHYwm-Po-IS5BtjdBNZXKAgrQQn57LOARLTB5BSUpi8W39OA2URnpzlvGcqWk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.ftbs5-2.fna&oh=03_Q7cD2gGnXQP1olyEVfgOSjfNm0Xr3f8DKIzXhSbphimxmkoG4A&oe=6888A84B",
          power: 100,
          defense: 90,
          stamina: 100,
          walkoutSong: "Screen Recording 2025-06-29 183753.mp3"
        },

          {
          name: "Baso",
          img: "https://instagram.ftbs5-2.fna.fbcdn.net/v/t1.15752-9/495048823_946866817503223_3653553517473129448_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=9rJRo6-DohUQ7kNvwHYUgL9&_nc_oc=AdnwZ1MsB9LJLg3OSwbmpRZGcGkcL457vloStpTF7156lEUYONwHtEN1Tipxl2f45wE&_nc_zt=23&_nc_ht=instagram.ftbs5-2.fna&oh=03_Q7cD2gFgGX6vpuow8PgnQ8inzeUsrDxUVUe0-4mC6rtKMvRMYw&oe=6888BD16",
          power: 150,
          defense: 150,
          stamina: 100,
          walkoutSong: "Screen Recording 2025-06-29 170736 (audio-extractor.net).mp3"
        },
        {
            name:"Dachi 'Monk' Tsiklauri",
            img:"https://scontent.ftbs5-4.fna.fbcdn.net/v/t1.15752-9/509610714_1303335878130583_6411762013009333125_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Lv9AFqXXAUsQ7kNvwFj62uh&_nc_oc=AdkonyF8pbQU2ANjdEMNvf2B7GWCGlxqOof9b_lKCxhIm7ARWDG-uLHj9z1gpgoLSIM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.ftbs5-4.fna&oh=03_Q7cD2gFpnGhdLlXjPRg6iqtg9X23pFZKpu2PMfG4H1G5vfmzrg&oe=6889DD15",
            power: 130,
            defense: 130,
            stamina: 130,
            walkoutSong: "Screen Recording 2025-06-29 174215 (audio-extractor.net).mp3"
        },
        {
          name: "Oto 'Medved' Khosanashvili",
          img: "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.15752-9/513957107_689381843920709_9089882088212639806_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=FZHpI47u1JkQ7kNvwEcsTMf&_nc_oc=AdnjkVs989TfNER7GNZMtHb1ivC95bxlYBLalfJ_cOHHdAJYteD_nou4lKd0pAZgBv4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.ftbs5-2.fna&oh=03_Q7cD2gGDO5ynfK1YY3ICZ8jvDMx9LeLJfQkbhaQkhtgMJGSOZw&oe=6889F583",
          power: 200,
          defense: 200,
          stamina: 200,
        },
        {
          name: "Davit 'El Kvahador' Badridze",
          img: "https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.15752-9/509587954_2534273973580198_7131695336244765271_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=CZdxGwf8HuAQ7kNvwERmnzS&_nc_oc=AdkRukjP380D8Lb8PeLU3SyAFeZjUBuxq0bXBiVYMO_E4bYr-I4S_IWhZ-uX6YIOmpg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.ftbs5-3.fna&oh=03_Q7cD2gGJTgr68-iWMOru0Rclu-6e2zHz7PxxeSafDINNXDcGNg&oe=688A0CD1",
          power: 100,
          defense: 100,
          stamina: 100,
        },
        {
          name: "Saba 'Xanga' Lataria",
          img: "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.15752-9/509433350_781866944522008_726902806990498873_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=E_4-qyBFmUYQ7kNvwE4qWsV&_nc_oc=AdnAnBPX5iT3x9nk9tJOS9fycH194I2wp9P6JAgJzRok332Q-TH6MSdy6UMNLzKUZyg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.ftbs5-2.fna&oh=03_Q7cD2gF7BkbOk8ZxwLv2EiX_YsWZ0mB-MCZW_dY0CiQTgoCdXg&oe=6889DDEE",
          power: 140,
          defense: 140,
          stamina: 130,
        },
        {
          name: "Jon Jones",
    img: "https://www.pngmart.com/files/22/Jon-Jones-PNG-Pic.png",
    power: 92,
    defense: 88,
    stamina: 100

          
        },
        // {
        //   name: "Ilia Topuria",
        //   img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=150&h=150&fit=crop&crop=face",
        //   power: 93,
        //   defense: 82,
        //   stamina: 100,
        // },
        // {
        //   name: "Islam Makhachev",
        //   img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&h=150&fit=crop&crop=face",
        //   power: 87,
        //   defense: 85,
        //   stamina: 100,
        // },
        // {
        //   name: "khabib Nurmagomedov",
        //   img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&h=150&fit=crop&crop=face",
        //   power: 90,
        //   defense: 85,
        //   stamina: 100,

        // },
        // {
        //   name: "Alexander Volkanovski",
        //   img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&h=150&fit=crop&crop=face",
        //   power: 88,
        //   defense: 90,
        //   stamina: 100,

        // },
        // {
        //   name: "Max Holloway",
        //   img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&h=150&fit=crop&crop=face",
        //   power: 85,
        //   defense: 87,
        //   stamina: 100,

        // },
        // {
        //   name: "Dustin Poirier",
        //   img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&h=150&fit=crop&crop=face",
        //   power: 89,
        //   defense: 86,
        //   stamina: 100,
        // },
        // {
        //   name: "Justin Gaethje",
        //   img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&h=150&fit=crop&crop=face",
        //   power: 91,
        //   defense: 84,
        //   stamina: 100,
        // },
        // {
        //   name: "Aljamain Sterling",
        //   img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&h=150&fit=crop&crop=face",
        //   power: 86,
        //   defense: 89,
        //   stamina: 100,
        // },
        // {
        //   name: "Sean O'Malley",
        //   img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&h=150&fit=crop&crop=face",
        //   power: 88,
        //   defense: 83,
        //   stamina: 100,
        // },
//        
      ];
      function playSound(id) {
  const audio = document.getElementById(id);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
  
    if (id === "ko-sound") {
        document.getElementById("game-over").style.display = "flex";
        document.getElementById("winner-text").textContent = "KO! " + selectedPlayer.name;
        playSound("ko-sound");
        gameState.gameActive = false;
        clearInterval(aiInterval);
    }
    }
    
        function playerBlock() {
            if (!gameState.gameActive) return;
            if (gameState.playerBlocking) return;
            gameState.playerBlocking = true;
            changeStamina("player", -5);
            playSound("block-sound");
            document.getElementById("fighter1").classList.add("blocking");
            setTimeout(() => {
            gameState.playerBlocking = false;
            document.getElementById("fighter1").classList.remove("blocking");
            }, 500);
        }
    
        function opponentBlock() {
            if (!gameState.gameActive) return;
            if (gameState.opponentBlocking) return;
            gameState.opponentBlocking = true;
            changeStamina("opponent", -5);
            playSound("block-sound");
            document.getElementById("fighter2").classList.add("blocking");
            setTimeout(() => {
            gameState.opponentBlocking = false;
            document.getElementById("fighter2").classList.remove("blocking");
            }, 500);
        }
    
        function startAI() {
            aiInterval = setInterval(() => {
            if (!gameState.gameActive) return;
    
            const action = Math.random();
            if (action < 0.4) {
                opponentAttack("punch");
            } else if (action < 0.8) {
                opponentAttack("kick");
            } else {
                opponentBlock();
            }
            }, 2000);
        }
    
        function opponentAttack(type) {
            if (!gameState.gameActive) return;
            const fighter2 = document.getElementById("fighter2");
            fighter2.classList.add(type === "kick" ? "kicking" : "punching");
    
            setTimeout(() => {
            fighter2.classList.remove(type === "kick" ? "kicking" : "punching");
            }, 300);
    
            const cost = type === "kick" ? 15 : 10;
            if (gameState.opponentStamina < cost) return;
    
            changeStamina("opponent", -cost);
            
            let damage = type === "kick" ? 15 : 10;
            if (gameState.playerBlocking) {
                damage = Math.max(0, damage - selectedOpponent.defense / 10);
                showActionLog("Player blocked the attack!");
            } else {
                showActionLog(type === "kick" ? "Opponent Kick! 🦵" : "Opponent Punch! 👊");
            }
            gameState.playerHP = Math.max(0, gameState.playerHP - damage);
            updateHealthBars(); 
}


      let selectedPlayer = null;
      let selectedOpponent = null;
      let aiInterval = null;
      let gameState = {
        playerHP: 100,
        opponentHP: 100,
        playerBlocking: false,
        opponentBlocking: false,
       playerStamina: selectedPlayer?.stamina ?? 100,
        opponentStamina: selectedOpponent?.stamina ?? 100,


        gameActive: false,
      };

      function renderFighters(containerId, callback) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        fighters.forEach((fighter) => {
          const card = document.createElement("div");
          card.className = "fighter-card";
          card.innerHTML = `
          <img src="${fighter.img}" alt="${fighter.name}" onerror="this.src='https://via.placeholder.com/100?text=No+Image'">
          <p>${fighter.name}</p>
        `;
          card.onclick = () => callback(fighter, card, containerId);
          container.appendChild(card);
        });
      }

      function selectFighter(fighter, card, containerId) {
        const container = document.getElementById(containerId);
        container
          .querySelectorAll(".fighter-card")
          .forEach((c) => c.classList.remove("selected"));
        card.classList.add("selected");
        if (containerId === "fighter-select") {
          selectedPlayer = fighter;
        } else {
          selectedOpponent = fighter;
        }
        document.getElementById("start-btn").disabled = !(
          selectedPlayer && selectedOpponent
        );
      }
function updateHealthBars() {
  document.getElementById("p1-bar").style.width = gameState.playerHP + "%";
  document.getElementById("p2-bar").style.width = gameState.opponentHP + "%";
  document.querySelectorAll(".health-count")[0].textContent = Math.round(gameState.playerHP);
  document.querySelectorAll(".health-count")[1].textContent = Math.round(gameState.opponentHP);
}
      function updateStaminaBars() {
        document.getElementById("p1-stamina-bar").style.width =
          gameState.playerStamina + "%";
        document.getElementById("p2-stamina-bar").style.width =
          gameState.opponentStamina + "%";
      }

      function changeStamina(who, amt) {
        let key = who + "Stamina";
        gameState[key] = Math.max(0, Math.min(100, gameState[key] + amt));
        updateStaminaBars();
      }
function startFight() {
  if (!selectedPlayer || !selectedOpponent) {
    alert("Please select both fighters!");
    return;
  }

  let playerAudio = selectedPlayer.walkoutSong ? new Audio(selectedPlayer.walkoutSong) : null;
  let opponentAudio = selectedOpponent.walkoutSong ? new Audio(selectedOpponent.walkoutSong) : null;

  if (playerAudio) playerAudio.volume = 0.6;
  if (opponentAudio) opponentAudio.volume = 0.6;

  if (playerAudio && opponentAudio) {
    // Play first walkout
    playerAudio.play();

    // When player audio ends, play opponent's
    playerAudio.onended = () => {
      opponentAudio.play();

      // When opponent audio ends, start the fight
      opponentAudio.onended = () => {
        initFight();
      };
    };
  } else if (playerAudio) {
    playerAudio.play();
    playerAudio.onended = () => initFight();
  } else if (opponentAudio) {
    opponentAudio.play();
    opponentAudio.onended = () => initFight();
  } else {
    initFight();
  }
}


      function initFight() {
  document.getElementById("lobby").style.display = "none";
  document.getElementById("arena").style.display = "flex";
  document.getElementById("p1-name").textContent = selectedPlayer.name;
  document.getElementById("p2-name").textContent = selectedOpponent.name;
  document.getElementById("p1-img").src = selectedPlayer.img;
  document.getElementById("p2-img").src = selectedOpponent.img;

  gameState = {
    playerHP: 100,
    opponentHP: 100,
    playerBlocking: false,
    opponentBlocking: false,
    playerStamina: selectedPlayer.stamina ?? 100,
    opponentStamina: selectedOpponent.stamina ?? 100,
    gameActive: true
  };

  updateHealthBars();
  updateStaminaBars();
  startAI();
}


      function createHitEffect(x, y) {
        const effect = document.createElement("div");
        effect.className = "hit-effect";
        effect.style.left = `${x - 50}px`;
        effect.style.top = `${y - 50}px`;
        document.getElementById("arena").appendChild(effect);
        setTimeout(() => {
          effect.style.animation = "hitFlash 0.5s forwards";
          setTimeout(() => effect.remove(), 500);
        }, 10);
      }

      function createBloodEffect(x, y) {
        const effect = document.createElement("div");
        effect.className = "blood-effect";
        effect.style.left = `${x - 10}px`;
        effect.style.top = `${y - 10}px`;
        document.getElementById("arena").appendChild(effect);
        setTimeout(() => {
          effect.style.animation = "bloodSplat 0.8s forwards";
          setTimeout(() => effect.remove(), 800);
        }, 10);
      }

      function playerAttack(type) {
        if (type === "kick") {
  playSound("kick-sound");
} else {
  playSound("punch-sound");
}

        if (!gameState.gameActive) return;
        const cost = type === "kick" ? 15 : 10;
        if (gameState.playerStamina < cost) return;
        changeStamina("player", -cost);
        const damage = type === "kick" ? 15 : 10;
        const fighter1 = document.getElementById("fighter1");
        const fighter2 = document.getElementById("fighter2");
        const fighter2Rect = fighter2.getBoundingClientRect();
        const hitX = fighter2Rect.left + fighter2Rect.width / 2;
        const hitY = fighter2Rect.top + fighter2Rect.height / 2;
        if (type === "kick") {
          fighter1.classList.add("kicking");
          setTimeout(() => fighter1.classList.remove("kicking"), 400);
        } else {
          fighter1.classList.add("punching");
          setTimeout(() => fighter1.classList.remove("punching"), 300);
        }
        if (!gameState.opponentBlocking) {
          setTimeout(
            () => {
              gameState.opponentHP = Math.max(0, gameState.opponentHP - damage);
              updateHealthBars();
              createHitEffect(hitX, hitY);
              createBloodEffect(hitX, hitY);
              fighter2.classList.add("hit");
              setTimeout(() => fighter2.classList.remove("hit"), 500);
              checkGameOver();
            },
            type === "kick" ? 200 : 150
          );
        }
      }

      function playerBlock() {
        playSound("block-sound");

        if (!gameState.gameActive) return;
        gameState.playerBlocking = true;
        const fighter1 = document.getElementById("fighter1");
        fighter1.classList.add("blocking");
        setTimeout(() => {
          gameState.playerBlocking = false;
          fighter1.classList.remove("blocking");
        }, 1000);
      }

      function aiTurn() {
        if (!gameState.gameActive) return;
        const stamina = gameState.opponentStamina;
        const hpRatio = gameState.opponentHP / (gameState.playerHP || 1);
        let move;
        if (stamina < 15) {
          move = Math.random() < 0.7 ? "block" : "rest";
        } else if (hpRatio > 1.2) {
          move = Math.random() < 0.9 ? "attack" : "block";
        } else if (hpRatio < 0.8) {
          move = Math.random() < 0.5 ? "block" : "attack";
        } else {
          move = Math.random() < 0.5 ? "attack" : "block";
        }
        const fighter2 = document.getElementById("fighter2");
        const fighter1 = document.getElementById("fighter1");
        const fighter1Rect = fighter1.getBoundingClientRect();
        const hitX = fighter1Rect.left + fighter1Rect.width / 2;
        const hitY = fighter1Rect.top + fighter1Rect.height / 2;
        if (move === "attack") {
          const type = stamina >= 15 && Math.random() < 0.5 ? "kick" : "punch";
          const cost = type === "kick" ? 15 : 10;
          if (stamina < cost) return;
          changeStamina("opponent", -cost);
          if (type === "kick") {
            fighter2.classList.add("kicking");
            setTimeout(() => fighter2.classList.remove("kicking"), 400);
          } else {
            fighter2.classList.add("punching");
            setTimeout(() => fighter2.classList.remove("punching"), 300);
          }
          if (!gameState.playerBlocking) {
            setTimeout(
              () => {
                gameState.playerHP = Math.max(
                  0,
                  gameState.playerHP - (type === "kick" ? 15 : 10)
                );
                updateHealthBars();
                createHitEffect(hitX, hitY);
                createBloodEffect(hitX, hitY);
                fighter1.classList.add("hit");
                setTimeout(() => fighter1.classList.remove("hit"), 500);
                checkGameOver();
              },
              type === "kick" ? 200 : 150
            );
          }
        } else if (move === "block") {
          gameState.opponentBlocking = true;
          fighter2.classList.add("blocking");
          setTimeout(() => {
            gameState.opponentBlocking = false;
            fighter2.classList.remove("blocking");
          }, 1000);
        }
        // else rest: do nothing, stamina will recover passively
      }

      function checkGameOver() {
  
        
        if (gameState.playerHP <= 0 || gameState.opponentHP <= 0) {
          gameState.gameActive = false;
          clearInterval(aiInterval);
          const winner =
            gameState.playerHP > 0
              ? selectedPlayer.name
              : selectedOpponent.name;
          document.getElementById("winner-text").textContent =
            winner + " WINS!";
            playSound("ko-sound")
          document.getElementById("game-over").style.display = "block";
          const loser =
            gameState.playerHP > 0
              ? document.getElementById("fighter2")
              : document.getElementById("fighter1");
          loser.classList.add("knockout");
        }
              
      }

      function startAI() {
        aiInterval = setInterval(aiTurn, 1000);
      }

      function restartGame() {
        document.getElementById("game-over").style.display = "none";
        document
          .querySelector(".fighter.knockout")
          .classList.remove("knockout");
        startFight();
      }

      function backToLobby() {
        document.getElementById("game-over").style.display = "none";
        document.getElementById("arena").style.display = "none";
        document.getElementById("lobby").style.display = "flex";
        clearInterval(aiInterval);
        document
          .querySelector(".fighter.knockout")
          .classList.remove("knockout");
      }

      // Keyboard controls
      document.addEventListener("keydown", (e) => {
        if (!gameState.gameActive) return;
        switch (e.key.toLowerCase()) {
          case "a":
            playerAttack("punch");
            break;
          case "s":
            playerAttack("kick");
            break;
          case "d":
            playerBlock();
            break;
        }
      });

      // Passive stamina recovery
     setInterval(() => {
  if (gameState.gameActive) {
    const playerRegen = gameState.playerBlocking ? 10 : 5;
    const opponentRegen = gameState.opponentBlocking ? 5 : 1;
    changeStamina("player", playerRegen);
    changeStamina("opponent", opponentRegen);
  }
}, 1000);


      // Initialize the game
      renderFighters("fighter-select", selectFighter);
      renderFighters("opponent-select", selectFighter);



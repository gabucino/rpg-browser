let player;

function Player(classtype, health, mana, strength, agility, speed) {
   this.classType = classtype
   this.health = health
   this.mana = mana
   this.strength = strength
   this.agility = agility
   this.speed = speed
}

let PlayerMoves = {
   calcAttack: function () {

      // Who attacks first?

      let getPlayerSpeed = player.speed
      let getEnemySpeed = enemy.speed

      //Player attacks

      let playerAttack = function () {
         let calcBaseDamage;
         if (player.mana > 0) {
            calcBaseDamage = player.strength * player.mana / 1000
         } else {
            calcBaseDamage = player.strength * player.agility / 1000
         }
         let offSetDamage = Math.floor(Math.random() * Math.floor(10))
         let calcOutputDamage = calcBaseDamage + offSetDamage
         //Number of hits
         let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1
         let attackValues = [calcOutputDamage, numberOfHits]
         return attackValues
      }

      //Enemy attacks
      let enemyAttack = function () {
         let calcBaseDamage;
         if (enemy.mana > 0) {
            calcBaseDamage = enemy.strength * enemy.mana / 1000
         } else {
            calcBaseDamage = enemy.strength * enemy.agility / 1000
         }
         let offSetDamage = Math.floor(Math.random() * Math.floor(10))
         let calcOutputDamage = calcBaseDamage + offSetDamage
         //Number of hits
         let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1
         let attackValues = [calcOutputDamage, numberOfHits]
         return attackValues
      }

      //Get player/enemy health to change later
      let getPlayerHealth = document.querySelector('.player-health')
      let getEnemyHealth = document.querySelector('.enemy-health')


      //Initiate attacks
      if (getPlayerSpeed >= getEnemySpeed) {
         let playerAttackValues = playerAttack()
         let totalDamage = playerAttackValues[0] * playerAttackValues[1]
         enemy.health = enemy.health - totalDamage
         alert('You hit ' + playerAttackValues[0] + ' damage ' + playerAttackValues[1] + ' times')
         if (enemy.health <= 0) {
            alert('You win! Refresh the browser to play again!')
            getPlayerHealth.innerHTML = 'Heath: ' + player.health
            getEnemyHealth.innerHTML = 'Health: 0'
         } else {
            getEnemyHealth.innerHTML = 'Heath: ' + enemy.health
            //Enemy attacks
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1]
            player.health = player.health - totalDamage
            alert('The enemy hit ' + enemyAttackValues[0] + ' damage ' + enemyAttackValues[1] + ' times')
            if (player.health <= 0) {
               alert('You loose! Refresh the browser to play again!')
               getPlayerHealth.innerHTML = 'Heath: 0'
               getEnemyHealth.innerHTML = 'Health: ' + enemy.health
            } else {
               getPlayerHealth.innerHTML = 'Health: ' + player.health
            }
         }
      } else if (getEnemySpeed > getPlayerSpeed) {
         let enemyAttackValues = enemyAttack()
         let totalDamage = enemyAttackValues[0] * enemyAttackValues[1]
         player.health = player.health - totalDamage
         alert('The enemy hit ' + enemyAttackValues[0] + ' damage ' + enemyAttackValues[1] + ' times')
         if (player.health <= 0) {
            alert('You loose! Refresh the browser to play again!')
            getEnemyHealth.innerHTML = 'Heath: ' + player.health
            getPlayerHealth.innerHTML = 'Health: 0'
         } else {
            getPlayerHealth.innerHTML = 'Heath: ' + player.health
            //Player attacks
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1]
            enemy.health = enemy.health - totalDamage
            alert('You hit ' + playerAttackValues[0] + ' damage ' + playerAttackValues[1] + ' times')
            if (enemy.health <= 0) {
               alert('You win! Refresh the browser to play again!')
               getEnemyHealth.innerHTML = 'Health: 0'
               getPlayerHealth.innerHTML = 'Health: ' + player.health
            } else {
               getEnemyHealth.innerHTML = 'Health: ' + enemy.health
            }
         }
      }
   }
}
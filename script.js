const symbols = ['√', '∑', '∫', '∞', 'π', '∆', '≈', '≠', '≤', '≥', '±', '∂', '∇', '∅', '∈'];
        const correctSymbol = '√';

        const gameContainer = document.getElementById('game-container');
        const result = document.getElementById('result');
        const playAgainBtn = document.getElementById('play-again');

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function generateSymbols() {
            let options = symbols.filter(sym => sym !== correctSymbol);
            options = shuffle(options).slice(0, 5);
            options.push(correctSymbol);
            options = shuffle(options);
            return options;
        }

        function displaySymbols() {
            const options = generateSymbols();
            gameContainer.innerHTML = '';
            options.forEach(symbol => {
                const btn = document.createElement('div');
                btn.classList.add('symbol-button');
                btn.textContent = symbol;
                btn.addEventListener('click', () => checkAnswer(symbol, btn));
                gameContainer.appendChild(btn);
            });
        }

        function checkAnswer(symbol, btn) {
            if (symbol === correctSymbol) {
                result.textContent = 'Correct! You found the radical sign!';
                result.style.color = '#2ecc71';
            } else {
                result.textContent = 'Oops! That\'s not the radical sign.';
                result.style.color = '#e74c3c';
            }
            result.style.visibility = 'visible';
            disableButtons();
            playAgainBtn.style.display = 'inline-block';
        }

        function disableButtons() {
            const buttons = document.querySelectorAll('.symbol-button');
            buttons.forEach(button => {
                button.style.pointerEvents = 'none';
                button.style.opacity = '0.6';
            });
        }

        function resetGame() {
            result.style.visibility = 'hidden';
            playAgainBtn.style.display = 'none';
            displaySymbols();
        }

        playAgainBtn.addEventListener('click', resetGame);

        // Initialize game
        displaySymbols();
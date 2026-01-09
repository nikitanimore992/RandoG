

// Array of jokes
        const jokes = [
            "Why don’t programmers like nature? Too many bugs.",
            "Why do Java developers wear glasses? Because they don’t C#.",
            "Why was the computer cold? It left its Windows open.",
            "Why did the programmer quit his job? Because he didn’t get arrays.",
            "Why do programmers prefer dark mode? Because light attracts bugs.",
            "Why was the JavaScript developer sad? Because he didn’t know how to 'null' his feelings.",
            "Why did the computer go to the doctor? Because it caught a virus.",
            "Why do programmers hate meetings? Because they prefer byte-sized conversations.",
            "Did you hear about the circus fire? It was in tents!"
        ];

        function generateJoke() {
            const randomIndex = Math.floor(Math.random() * jokes.length);
            document.getElementById("joke").innerText = jokes[randomIndex];
        }



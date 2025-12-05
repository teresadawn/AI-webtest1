const definitions = [
    "Computer Science: The study of computers, algorithms, and problem-solving.",
    "Algorithm: Step-by-step procedure for solving a problem.",
    "Programming: Writing instructions that computers can follow.",
    "Hardware: Physical parts of a computer (CPU, RAM, monitor).",
    "Software: Programs and applications that run on hardware."
];

document.getElementById("quizBtn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * definitions.length);
    document.getElementById("quizResult").innerText = definitions[randomIndex];
});

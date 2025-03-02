function toggleContent(grade) {
    const contentDiv = document.getElementById(grade + "Content");
    const isHidden = contentDiv.classList.toggle("hidden");

    if (!isHidden) {
        contentDiv.innerHTML = `
            <h3>What do you want to learn more about?</h3>
            <button onclick="displayOurInformation('${grade}')">Our Information</button>
            <button onclick="displayWebResources('${grade}')">Web Resources</button>
        `;
    } else {
        contentDiv.innerHTML = ""; // Clear content if hidden
    }
}

function displayOurInformation(grade) {
    const contentDiv = document.getElementById(grade + "Content");
    const information = {
        grade1: `
            <h4>Counting and Addition</h4>
            <p>Example Question: If you have 2 apples and get 1 more, how many apples do you have?</p>
            <p><strong>Explanation:</strong> In Grade 1, you begin to learn about numbers and how they can be used to describe amounts. Addition helps us find the total when we combine things together. For example, if you have 2 apples and then someone gives you 1 more, you can simply add the two numbers together to find out how many apples you have in total. You count: "2 apples + 1 apple = 3 apples." This process is called addition. You'll practice addition with different numbers and objects to help you understand how adding works. Remember, addition is just combining two groups into one bigger group!</p>
            <img src="https://i.imgur.com/ho2XOeI.png" alt="Counting and Addition" />
        `,
        grade2: `
            <h4>Addition, Subtraction, and Word Problems</h4>
            <p>Example Question: If you have 10 balloons and 4 fly away, how many are left?</p>
            <p><strong>Explanation:</strong> Grade 2 builds on your knowledge of addition and subtraction. Subtraction means taking away from a group. In this problem, you start with 10 balloons, and 4 balloons fly away. To find out how many are left, you subtract the 4 that flew away from the 10 that you started with. This can be written as:
            <br>10 balloons - 4 balloons = 6 balloons left.
            You’ll encounter similar problems, like word problems, that ask you to figure out what happens when things are added or taken away.</p>
            <img src="https://i.imgur.com/17gnhol.png" alt="Word problem example" />
        `,
        grade3: `
            <h4>Multiplication, Division, and Fractions</h4>
            <p>Example Question: What is 3 multiplied by 4?</p>
            <p><strong>Explanation:</strong> In Grade 3, you learn multiplication, which is a way to add the same number many times. For example, 3 multiplied by 4 means you have 3 groups of 4. You can think of it as:
            <br>4 + 4 + 4 = 12.
            This is a quick way of adding the same number over and over again. You’ll also learn about division, which is the opposite of multiplication, and how to work with fractions to understand parts of a whole.</p>
            <img src="https://i.imgur.com/TVWf3QP.png" />
        `,
        grade4: `
            <h4>Multiplying Multi-Digit Numbers and Fractions</h4>
            <p>Example Question: Multiply 23 by 4.</p>
            <p><strong>Explanation:</strong> In Grade 4, you start learning how to multiply numbers that are larger than single digits. This is called multi-digit multiplication. To multiply 23 by 4, you break the problem into smaller steps. First, multiply 20 (the tens part) by 4, which gives you 80. Then, multiply 3 (the ones part) by 4, which gives you 12. Finally, you add 80 and 12 to get 92. So, 23 × 4 = 92. You will also work on understanding fractions and how to represent parts of a whole in different ways.</p>
            <img src="https://i.imgur.com/tB1SQKg.png" alt="Multiplying example" />
        `,
        grade5: `
            <h4>Decimals, Ratios, and Volume</h4>
            <p>Example Question: Find the volume of a box with dimensions 2 cm by 3 cm by 4 cm.</p>
            <p><strong>Explanation:</strong> In Grade 5, you explore decimals, ratios, and volume. Volume measures the amount of space inside a 3D object. To find the volume of a box, multiply the length, width, and height together. For example, if the dimensions of the box are 2 cm, 3 cm, and 4 cm, you would multiply:
            <br>2 cm × 3 cm × 4 cm = 24 cubic centimeters.
            You’ll also learn how to work with ratios to compare different amounts and how to understand decimals, which are numbers smaller than one.</p>
            <img src="https://via.placeholder.com/150" alt="Volume example" />
        `,
        grade6: `
            <h4>Ratios, Integers, and Algebra</h4>
            <p>Example Question: Solve the equation x + 2 = 5.</p>
            <p><strong>Explanation:</strong> In Grade 6, you start to learn about algebra. Algebra is a branch of math where you use letters (called variables) to represent unknown numbers. In the equation x + 2 = 5, you need to find out what number x represents. To do this, you can subtract 2 from both sides of the equation:
            <br>x + 2 - 2 = 5 - 2
            This simplifies to:
            <br>x = 3
            Now you know that x = 3. You’ll also learn about integers, which include positive and negative numbers, and how to solve equations like this one.</p>
            <img src="https://via.placeholder.com/150" alt="Algebra example" />
        `,
        grade7: `
            <h4>Expressions, Equations, and Probability</h4>
            <p>Example Question: What is the probability of flipping a coin and getting heads?</p>
            <p><strong>Explanation:</strong> In Grade 7, you start working with expressions and equations, and you begin learning about probability. Probability is the chance of something happening. A coin has two sides: heads and tails, so there are two possible outcomes. The probability of flipping heads is:
            <br>1 out of 2 or 50%.
            To calculate probability, divide the number of successful outcomes by the total number of possible outcomes. You’ll use this concept to solve problems about chance, like games, cards, and dice.</p>
            <img src="https://via.placeholder.com/150" alt="Probability example" />
        `,
        grade8: `
            <h4>Linear Equations, Functions, and Statistics</h4>
            <p>Example Question: Solve 2x + 3 = 11.</p>
            <p><strong>Explanation:</strong> In Grade 8, you dive into solving linear equations. A linear equation is an equation where the highest power of the variable is 1, such as 2x + 3 = 11. To solve this equation, you isolate x. First, subtract 3 from both sides:
            <br>2x + 3 - 3 = 11 - 3
            This simplifies to:
            <br>2x = 8
            Next, divide both sides by 2:
            <br>2x ÷ 2 = 8 ÷ 2
            This gives you:
            <br>x = 4.
            Now you’ve solved for x. You will also learn about functions and how to interpret and analyze data.</p>
            <img src="https://via.placeholder.com/150" alt="Linear equation example" />
        `,
        grade9: `
            <h4>Algebra, Geometry, and Functions</h4>
            <p>Example Question: Solve 3x - 5 = 10.</p>
            <p><strong>Explanation:</strong> In Grade 9, you continue studying algebra and geometry. To solve the equation 3x - 5 = 10, start by adding 5 to both sides to cancel out the -5:
            <br>3x - 5 + 5 = 10 + 5
            This simplifies to:
            <br>3x = 15
            Then, divide both sides by 3:
            <br>3x ÷ 3 = 15 ÷ 3
            This gives you:
            <br>x = 5.
            This equation involves solving for an unknown variable, and you will also work on solving geometry problems involving shapes and angles.</p>
            <img src="https://via.placeholder.com/150" alt="Geometry and algebra" />
        `,
        grade10: `
            <h4>Algebra II and Advanced Geometry</h4>
            <p>Example Question: Solve x² - 5x + 6 = 0 by factoring.</p>
            <p><strong>Explanation:</strong> In Grade 10, you explore more advanced algebra and geometry. The equation x² - 5x + 6 = 0 is a quadratic equation, which can often be solved by factoring. To factor this equation, look for two numbers that multiply to give 6 and add to give -5. These numbers are -2 and -3:
            <br>(x - 2)(x - 3) = 0
            Set each factor equal to 0:
            <br>x - 2 = 0 or x - 3 = 0
            Solve for x:
            <br>x = 2 or x = 3.</p>
            <img src="https://via.placeholder.com/150" alt="Quadratic equation" />
        `
    };

    contentDiv.innerHTML = information[grade] || "<p>Information for this grade is not available.</p>";
}

function displayWebResources(grade) {
    const contentDiv = document.getElementById(grade + "Content");
    const resources = {
        grade1: `
            <h4>Web Resources for Grade 1</h4>
            <ul>
                <li><a href="https://www.khanacademy.org/math/cc-1st-grade-math">Khan Academy - 1st Grade Math</a></li>
                <li><a href="https://www.education.com/resources/first-grade/math/">Education.com - Grade 1 Math Resources</a></li>
            </ul>
        `,
        grade2: `
            <h4>Web Resources for Grade 2</h4>
            <ul>
                <li><a href="https://www.khanacademy.org/math/cc-2nd-grade-math">Khan Academy - 2nd Grade Math</a></li>
                <li><a href="https://www.abcmouse.com/abc/subjects/math/second-grade">ABCmouse - Second Grade Math</a></li>
            </ul>
        `,
        grade3: `
            <h4>Web Resources for Grade 3</h4>
            <ul>
                <li><a href="https://www.khanacademy.org/math/cc-3rd-grade-math">Khan Academy - 3rd Grade Math</a></li>
                <li><a href="https://www.splashlearn.com/math/grade-3">SplashLearn - 3rd Grade Math</a></li>
            </ul>
        `,
        grade4: `
            <h4>Web Resources for Grade 4</h4>
            <ul>
                <li><a href="https://www.khanacademy.org/math/cc-4th-grade-math">Khan Academy - 4th Grade Math</a></li>
                <li><a href="https://www.abcya.com/grades/4">ABCya - Grade 4 Learning</a></li>
            </ul>
        `,
        grade5: `
            <h4>Web Resources for Grade 5</h4>
            <ul>
                <li><a href="https://www.khanacademy.org/math/cc-5th-grade-math">Khan Academy - 5th Grade Math</a></li>
                <li><a href="https://www.splashlearn.com/math/grade-5">SplashLearn - 5th Grade Math</a></li>
            </ul>
        `,
        grade6: `
            <h4>Web Resources for Grade 6</h4>
            <ul>
                <li><a href="https://www.khanacademy.org/math/cc-6th-grade-math">Khan Academy - 6th Grade Math</a></li>
                <li><a href="https://www.multiplication.com/learn">Multiplication.com</a></li>
            </ul>
        `,
        grade7: `
            <h4>Web Resources for Grade 7</h4>
            <ul>
                <li><a href="https://www.khanacademy.org/math/cc-7th-grade-math">Khan Academy - 7th Grade Math</a></li>
                <li><a href="https://www.splashlearn.com/math/grade-7">SplashLearn - 7th Grade Math</a></li>
            </ul>
        `,
        grade8: `
            <h4>Web Resources for Grade 8</h4>
            <ul>
                <li><a href="https://www.khanacademy.org/math/cc-8th-grade-math">Khan Academy - 8th Grade Math</a></li>
                <li><a href="https://www.coolmath.com/8th-grade">Coolmath - 8th Grade</a></li>
            </ul>
        `,
        grade9: `
            <h4>Web Resources for Grade 9</h4>
            <ul>
                <li><a href="https://www.khanacademy.org/math/cc-9th-grade-math">Khan Academy - 9th Grade Math</a></li>
                <li><a href="https://www.desmos.com">Desmos - Graphing Calculator</a></li>
            </ul>
        `,
        grade10: `
            <h4>Web Resources for Grade 10</h4>
            <ul>
                <li><a href="https://www.khanacademy.org/math/cc-10th-grade-math">Khan Academy - 10th Grade Math</a></li>
                <li><a href="https://www.mathway.com">Mathway - Online Math Solver</a></li>
            </ul>
        `
    };

    contentDiv.innerHTML = resources[grade] || "<p>Resources for this grade are not available.</p>";
}
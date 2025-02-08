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
        grade1: "In Grade 1, students learn about counting, basic addition and subtraction, shapes, and measurement. Using visual aids helps reinforce these concepts. Counting means saying numbers one after the other, like 1, 2, 3, to know how many things you have; when you add, you put groups together (for example, if you have 2 apples and then get 1 more, you count them all to have 3 apples), and when you subtract, you take some away (if you have 5 candies and eat 2, you count the rest to see that you have 3 left). Shapes are all around us—circles are round, squares have four equal sides, and triangles have three sides—which you can see in toys and drawings. Measurement is when you use a tool like a ruler to find out how long or short something is, like measuring your favorite crayon to see if it's 5 inches long.<br><br><strong>Example:</strong> If you have 2 apples and get 1 more, how many apples do you have?<br><strong>Answer:</strong> 3 apples.",
        grade2: "Grade 2 focuses on addition and subtraction, basic word problems, and measurement. Incorporating hands-on activities can enhance understanding. In Grade 2, addition means putting numbers together—for example, if you have 3 apples and get 2 more, you add them (3 + 2) to get 5 apples—while subtraction means taking some away, like if you have 5 cookies and eat 2, you subtract (5 – 2) to see that 3 cookies remain. Basic word problems, such as, \"If you have 10 balloons and 4 fly away, how many do you have left?\", help put these ideas into practice. Measurement involves using rulers or measuring tapes to determine length.<br><br><strong>Example:</strong> If you have 10 balloons and 4 fly away, how many are left?<br><strong>Answer:</strong> 6 balloons.",
        grade3: "In Grade 3, students learn multiplication, division, fractions, and basic geometry. Multiplication is like repeated addition (for example, 3 groups of 4 means 4 + 4 + 4, which equals 12). Division is the process of sharing equally. Fractions represent parts of a whole, such as 1/2 or 1/4, and basic geometry explores shapes and angles.<br><br><strong>Example:</strong> What is 3 multiplied by 4?<br><strong>Answer:</strong> 12.",
        grade4: "Grade 4 emphasizes multi-digit multiplication, long division, fractions, and more detailed geometry concepts. Students learn to break problems down into step-by-step processes for solving them.<br><br><strong>Example:</strong> Multiply 23 by 4.<br><strong>Solution:</strong> Multiply 4 x 3 = 12 (write down 2, carry over 1); then 4 x 2 = 8 plus the carried 1 equals 9, so the answer is 92.",
        grade5: "Grade 5 covers decimals, ratios, and volume. Students work on applying these ideas to real-world scenarios, like comparing measurements and calculating space.<br><br><strong>Example:</strong> Find the volume of a box with dimensions 2 cm by 3 cm by 4 cm.<br><strong>Answer:</strong> Volume = 2 x 3 x 4 = 24 cubic centimeters.",
        grade6: "In Grade 6, students explore ratios, integers, and basic algebraic expressions. They learn to solve simple equations and work with negative numbers.<br><br><strong>Example:</strong> Solve the equation x + 2 = 5.<br><strong>Solution:</strong> Subtract 2 from both sides to get x = 3.",
        grade7: "Grade 7 introduces expressions, equations, and probability. Students begin to handle more abstract problems, including calculating the chance of events.<br><br><strong>Example:</strong> What is the probability of flipping a coin and getting heads?<br><strong>Answer:</strong> The probability is 1/2, or 50%.",
        grade8: "In Grade 8, students study linear equations, functions, and statistics. They learn how to solve equations and interpret data sets.<br><br><strong>Example:</strong> Solve the equation 2x + 3 = 11.<br><strong>Solution:</strong> Subtract 3 from both sides to get 2x = 8, then divide by 2 to find x = 4.",
        grade9: "Grade 9 focuses on algebra, geometry, and functions, expanding on previous topics with more complex problems and diverse solving strategies.<br><br><strong>Example:</strong> Solve the equation 3x - 5 = 10.<br><strong>Solution:</strong> Add 5 to both sides to get 3x = 15, then divide by 3 to find x = 5.",
        grade10: "Grade 10 delves into Algebra II and advanced geometry concepts. Students tackle problems that require critical thinking and multi-step solutions.<br><br><strong>Example:</strong> Solve the quadratic equation x² - 5x + 6 = 0 by factoring.<br><strong>Solution:</strong> Factor the equation into (x - 2)(x - 3) = 0, so x = 2 or x = 3.",
        grade11: "In Grade 11, students study pre-calculus and statistics, preparing them for advanced topics by introducing abstract concepts and data analysis.<br><br><strong>Example:</strong> Find the mean of the data set [2, 4, 6, 8, 10].<br><strong>Solution:</strong> The mean is (2 + 4 + 6 + 8 + 10) / 5 = 30 / 5 = 6.",
        grade12: "Grade 12 culminates with calculus and advanced statistics. Students work on concepts like derivatives, integrals, and sophisticated data analysis techniques.<br><br><strong>Example:</strong> Find the derivative of f(x) = x².<br><strong>Answer:</strong> The derivative f'(x) = 2x."
    };
    contentDiv.innerHTML = `<p>${information[grade]}</p>`;
}

function displayWebResources(grade) {
    const resources = {
        grade1: "Khan Academy: https://www.khanacademy.org/math/early-math",
        grade2: "ABCmouse: https://www.abcmouse.com/",
        grade3: "IXL Math: https://www.ixl.com/math/",
        grade4: "Prodigy Math: https://www.prodigygame.com/",
        grade5: "Math Playground: https://www.mathplayground.com/",
        grade6: "Coolmath Games: https://www.coolmathgames.com/",
        grade7: "Khan Academy: https://www.khanacademy.org/math",
        grade8: "IXL Math: https://www.ixl.com/math/",
        grade9: "Algebra Help: https://www.algebrahelp.com/",
        grade10: "PatrickJMT: https://www.youtube.com/user/patrickJMT",
        grade11: "Paul's Online Math Notes: http://tutorial.math.lamar.edu/",
        grade12: "Khan Academy: https://www.khanacademy.org/math/calculus-1"
    };
    const contentDiv = document.getElementById(grade + "Content");
    contentDiv.innerHTML = `<p>Resources: ${resources[grade]}</p>`;
}
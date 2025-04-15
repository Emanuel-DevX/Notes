function generateQuizQuestions() {
  // Provided questions (custom questions from your lecture material)
  const providedQuestions = {
    1: {
      id: 1,
      type: "multiple",
      question:
        "Given this table, which violates 2NF?\n\n`Orders(OrderID, ProductID, ProductName, Quantity, CustomerName)`",
      options: [
        "OrderID → ProductID, Quantity",
        "ProductID → ProductName",
        "OrderID → CustomerName",
        "Quantity → ProductID",
      ],
      correct: "ProductID → ProductName",
    },
    2: {
      id: 2,
      type: "truefalse",
      question: "Denormalization always improves write performance.",
      options: ["True", "False"],
      correct: "False",
    },
    3: {
      id: 3,
      type: "multiple",
      question:
        "Which schema avoids redundancy?\nA) `Emp(EmpID, Name, ProjectID, ProjectName)`\nB) `Emp(EmpID, Name) + Project(ProjectID, ProjectName) + Assign(EmpID, ProjectID)`",
      options: ["Only A", "Only B", "Both", "Neither"],
      correct: "Only B",
    },
    4: {
      id: 4,
      type: "truefalse",
      question: "Creating indexes on all columns speeds up INSERT operations.",
      options: ["True", "False"],
      correct: "False",
    },
    5: {
      id: 5,
      type: "multiple",
      question: "What is true about BCNF?",
      options: [
        "It allows partial dependencies",
        "It is stricter than 3NF",
        "It permits transitive dependencies",
        "It is equivalent to 2NF",
      ],
      correct: "It is stricter than 3NF",
    },
    6: {
      id: 6,
      type: "truefalse",
      question: "Primary keys can contain NULL values.",
      options: ["True", "False"],
      correct: "False",
    },
    7: {
      id: 7,
      type: "multiple",
      question:
        "Which table is NOT in 3NF?\n\nA) `Student(StudentID, AdvisorID, AdvisorName)`\nB) `Course(CourseID, Title, Credits)`",
      options: ["Only A", "Only B", "Both", "Neither"],
      correct: "Only A",
    },
    8: {
      id: 8,
      type: "truefalse",
      question: "CRUD operations include Create, Read, Update, and Delete.",
      options: ["True", "False"],
      correct: "True",
    },
    9: {
      id: 9,
      type: "multiple",
      question: "Which is a PHYSICAL design decision?",
      options: [
        "Defining a foreign key constraint",
        "Choosing between 1:M or M:N relationships",
        "Implementing index on EmpID for faster searches",
        "Identifying entity subtypes in an ERD",
      ],
      correct: "Implementing index on EmpID for faster searches",
    },
    10: {
      id: 10,
      type: "truefalse",
      question: "A composite key contains multiple attributes.",
      options: ["True", "False"],
      correct: "True",
    },
    11: {
      id: 11,
      type: "multiple",
      question: "When would you use a hash index over a B-tree?",
      options: [
        "For range queries (e.g., BETWEEN)",
        "For exact-match queries only",
        "When data is frequently updated",
        "When the table has NULL values",
      ],
      correct: "For exact-match queries only",
    },
    12: {
      id: 12,
      type: "truefalse",
      question: "Views can improve database security.",
      options: ["True", "False"],
      correct: "True",
    },
    13: {
      id: 13,
      type: "multiple",
      question: "Which normalization form eliminates transitive dependencies?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      correct: "3NF",
    },
    14: {
      id: 14,
      type: "truefalse",
      question: "Foreign keys must be indexed for optimal performance.",
      options: ["True", "False"],
      correct: "True",
    },
    15: {
      id: 15,
      type: "multiple",
      question: "Which is an advantage of NoSQL databases?",
      options: [
        "ACID compliance",
        "Complex join operations",
        "Horizontal scalability",
        "Strong schema enforcement",
      ],
      correct: "Horizontal scalability",
    },
    16: {
      id: 16,
      type: "truefalse",
      question: "Clustered indexes determine the physical order of data.",
      options: ["True", "False"],
      correct: "True",
    },
    17: {
      id: 17,
      type: "multiple",
      question:
        "Which is a valid approach to resolve many-to-many relationships?",
      options: [
        "Use composite keys",
        "Create a junction table",
        "Embed arrays within a document",
        "All of the above",
      ],
      correct: "All of the above",
    },
    18: {
      id: 18,
      type: "truefalse",
      question: "Star schema is commonly used in OLTP systems.",
      options: ["True", "False"],
      correct: "False",
    },
    19: {
      id: 19,
      type: "multiple",
      question: "What does the ACID property 'Isolation' ensure?",
      options: [
        "Data remains consistent after transaction",
        "Transactions operate independently",
        "Failed transactions are rolled back",
        "Changes are permanent once committed",
      ],
      correct: "Transactions operate independently",
    },
    20: {
      id: 20,
      type: "truefalse",
      question: "Columnstore indexes are typically better for OLAP than OLTP.",
      options: ["True", "False"],
      correct: "True",
    },
    21: {
      id: 21,
      type: "multiple",
      question: "Why avoid thick clients in healthcare systems?",
      options: [
        "They require more server resources",
        "They cannot handle complex UIs",
        "Data security risks if devices are compromised",
        "They are harder to debug",
      ],
      correct: "Data security risks if devices are compromised",
    },
    23: {
      id: 23,
      type: "multiple",
      question: "In 3-tier architecture, where should input validation occur?",
      options: [
        "Client tier",
        "Business logic tier",
        "Data tier",
        "Both client and business tiers",
      ],
      correct: "Business logic tier",
    },
    24: {
      id: 24,
      type: "truefalse",
      question: "REST APIs must return JSON data.",
      options: ["True", "False"],
      correct: "False",
    },
    25: {
      id: 25,
      type: "multiple",
      question: "Which is NOT a benefit of hybrid clouds?",
      options: [
        "Cost savings over private clouds",
        "Lower latency than public clouds",
        "Simpler compliance than public clouds",
        "No need for on-premise hardware",
      ],
      correct: "No need for on-premise hardware",
    },
    27: {
      id: 27,
      type: "truefalse",
      question: "Public clouds are always less secure than private clouds.",
      options: ["True", "False"],
      correct: "False",
    },
    29: {
      id: 29,
      type: "multiple",
      question: "Which architecture pattern best supports horizontal scaling?",
      options: [
        "Monolithic",
        "Microservices",
        "Layered",
        "Model-View-Controller",
      ],
      correct: "Microservices",
    },
    36: {
      id: 36,
      type: "truefalse",
      question:
        "Stateless services are easier to scale horizontally than stateful ones.",
      options: ["True", "False"],
      correct: "True",
    },
    41: {
      id: 41,
      type: "multiple",
      question: "Which module exhibits high cohesion?",
      options: [
        "calculateTax()",
        "processOrderAndSendEmail()",
        "Both",
        "Neither",
      ],
      correct: "calculateTax()",
    },
    42: {
      id: 42,
      type: "truefalse",
      question: "DRY principle promotes code duplication.",
      options: ["True", "False"],
      correct: "False",
    },
    43: {
      id: 43,
      type: "multiple",
      question: "How does loose coupling improve systems?",
      options: [
        "Makes modules interdependent",
        "Reduces the need for testing",
        "Minimizes ripple effects of changes",
        "Increases execution speed",
      ],
      correct: "Minimizes ripple effects of changes",
    },
    44: {
      id: 44,
      type: "truefalse",
      question:
        "The Open/Closed Principle states modules should be open for extension but closed for modification.",
      options: ["True", "False"],
      correct: "True",
    },
    45: {
      id: 45,
      type: "multiple",
      question: "Which violates Shneiderman's 'consistency' rule?",
      options: [
        "'Delete' button sometimes labeled 'Remove'",
        "Using red for warnings",
        "Requiring passwords >8 chars",
        "Allowing undo",
      ],
      correct: "'Delete' button sometimes labeled 'Remove'",
    },
    46: {
      id: 46,
      type: "truefalse",
      question: "User personas are primarily based on demographic data.",
      options: ["True", "False"],
      correct: "False",
    },
    47: {
      id: 47,
      type: "truefalse",
      question: "Wireframes should include detailed color schemes.",
      options: ["True", "False"],
      correct: "False",
    },
    48: {
      id: 48,
      type: "truefalse",
      question: "Inheritance promotes code reuse.",
      options: ["True", "False"],
      correct: "True",
    },
    49: {
      id: 49,
      type: "multiple",
      question:
        "Which design pattern decouples an abstraction from its implementation?",
      options: ["Factory", "Singleton", "Bridge", "Observer"],
      correct: "Bridge",
    },
    50: {
      id: 50,
      type: "truefalse",
      question: "MVP pattern is identical to MVC pattern.",
      options: ["True", "False"],
      correct: "False",
    },
    51: {
      id: 51,
      type: "multiple",
      question: "Which principle focuses on separating interfaces?",
      options: [
        "Single Responsibility",
        "Open/Closed",
        "Liskov Substitution",
        "Interface Segregation",
      ],
      correct: "Interface Segregation",
    },
    52: {
      id: 52,
      type: "truefalse",
      question:
        "Black box testing requires knowledge of internal code structure.",
      options: ["True", "False"],
      correct: "False",
    },
    53: {
      id: 53,
      type: "multiple",
      question: "What is the primary purpose of unit testing?",
      options: [
        "Verify system performance",
        "Test individual components in isolation",
        "Validate user interfaces",
        "Check integration between systems",
      ],
      correct: "Test individual components in isolation",
    },
    54: {
      id: 54,
      type: "truefalse",
      question: "Dependency injection increases coupling between classes.",
      options: ["True", "False"],
      correct: "False",
    },
    55: {
      id: 55,
      type: "multiple",
      question:
        "Which UX principle relates to making systems match the real world?",
      options: [
        "Recognition over recall",
        "Error prevention",
        "Match between system and real world",
        "Aesthetic and minimalist design",
      ],
      correct: "Match between system and real world",
    },
    56: {
      id: 56,
      type: "truefalse",
      question: "The mediator pattern increases coupling between objects.",
      options: ["True", "False"],
      correct: "False",
    },
    57: {
      id: 57,
      type: "multiple",
      question: "What is the purpose of the strategy pattern?",
      options: [
        "Create objects without specifying exact class",
        "Define family of algorithms that are interchangeable",
        "Ensure a class has only one instance",
        "Add responsibilities to objects dynamically",
      ],
      correct: "Define family of algorithms that are interchangeable",
    },
    58: {
      id: 58,
      type: "truefalse",
      question: "Responsive design always requires JavaScript.",
      options: ["True", "False"],
      correct: "False",
    },
    59: {
      id: 59,
      type: "multiple",
      question: "What is the main benefit of Test-Driven Development?",
      options: [
        "Faster execution time",
        "Reduced development time",
        "Better design and code quality",
        "Elimination of integration testing",
      ],
      correct: "Better design and code quality",
    },
    60: {
      id: 60,
      type: "truefalse",
      question: "Command pattern separates an action from its invoker.",
      options: ["True", "False"],
      correct: "True",
    },
    68: {
      id: 68,
      type: "truefalse",
      question: "B+ trees are commonly used in database indexes.",
      options: ["True", "False"],
      correct: "True",
    },
    74: {
      id: 74,
      type: "truefalse",
      question: "Database normalization typically improves query performance.",
      options: ["True", "False"],
      correct: "False",
    },
    77: {
      id: 77,
      type: "multiple",
      question: "What is the primary purpose of database partitioning?",
      options: [
        "Improve write performance",
        "Ensure data consistency",
        "Increase data redundancy",
        "Simplify SQL queries",
      ],
      correct: "Improve write performance",
    },
    78: {
      id: 78,
      type: "truefalse",
      question:
        "NoSQL databases typically sacrifice ACID properties for performance.",
      options: ["True", "False"],
      correct: "True",
    },
    81: {
      id: 81,
      type: "multiple",
      question: "What is the primary benefit of database connection pooling?",
      options: [
        "Improved data security",
        "Reduced connection overhead",
        "Better query optimization",
        "Simplified transaction management",
      ],
      correct: "Reduced connection overhead",
    },
    97: {
      id: 97,
      type: "multiple",
      question: "What is a primary benefit of database denormalization?",
      options: [
        "Improved data integrity",
        "Reduced storage requirements",
        "Faster query performance",
        "Simpler database schema",
      ],
      correct: "Faster query performance",
    },
    100: {
      id: 100,
      type: "truefalse",
      question: "Database transactions can contain multiple SQL statements.",
      options: ["True", "False"],
      correct: "True",
    },
  };

  // List of accepted IDs for provided lecture questions
  const acceptedIDs = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    23, 24, 25, 27, 29, 36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
    54, 55, 56, 57, 58, 59, 60, 68, 74, 77, 78, 81, 97, 100,
  ];

  // Generic multiple-choice topics from the lecture material.
  const genericTopicsMultiple = [
    {
      question: "What does 1NF ensure in a database?",
      options: [
        "Each attribute is atomic",
        "No duplicate rows",
        "All values are indexed",
        "Data is physically sorted",
      ],
      correct: "Each attribute is atomic",
    },
    {
      question: "What is the main goal of normalization?",
      options: [
        "Reduce redundancy",
        "Increase storage space",
        "Improve user interfaces",
        "Simplify network design",
      ],
      correct: "Reduce redundancy",
    },
    {
      question: "What does 2NF eliminate?",
      options: [
        "Partial dependency",
        "Transitive dependency",
        "All dependencies",
        "Redundant keys",
      ],
      correct: "Partial dependency",
    },
    {
      question: "What does 3NF eliminate?",
      options: [
        "Partial dependency",
        "Transitive dependency",
        "Data redundancy",
        "Both A and B",
      ],
      correct: "Transitive dependency",
    },
    {
      question: "What is an ERD?",
      options: [
        "Entity Relationship Diagram",
        "Error Reporting Device",
        "Electronic Resource Directory",
        "None of these",
      ],
      correct: "Entity Relationship Diagram",
    },
    {
      question: "What is a DFD?",
      options: [
        "Data Flow Diagram",
        "Distributed File Directory",
        "Dynamic Function Definition",
        "None of these",
      ],
      correct: "Data Flow Diagram",
    },
    {
      question: "What does CRUD stand for?",
      options: [
        "Create, Read, Update, Delete",
        "Copy, Remove, Update, Delete",
        "Compute, Read, Upload, Delete",
        "None of these",
      ],
      correct: "Create, Read, Update, Delete",
    },
    {
      question: "What is a primary key?",
      options: [
        "A unique identifier for each record",
        "An attribute that can be null",
        "An indexed attribute only",
        "A foreign key",
      ],
      correct: "A unique identifier for each record",
    },
    {
      question: "What is a foreign key?",
      options: [
        "A reference to a primary key in another table",
        "A key that is not unique",
        "An attribute used for sorting",
        "None of these",
      ],
      correct: "A reference to a primary key in another table",
    },
    {
      question: "What is the purpose of indexing?",
      options: [
        "Improve query performance",
        "Reduce data redundancy",
        "Ensure data consistency",
        "Simplify table design",
      ],
      correct: "Improve query performance",
    },
    {
      question: "What is denormalization?",
      options: [
        "Introducing redundancy to improve performance",
        "Eliminating redundancy",
        "Normalizing data",
        "None of these",
      ],
      correct: "Introducing redundancy to improve performance",
    },
    {
      question: "What is a junction table used for?",
      options: [
        "Resolving many-to-many relationships",
        "Storing backup data",
        "Holding system logs",
        "None of these",
      ],
      correct: "Resolving many-to-many relationships",
    },
    {
      question: "What is a composite key?",
      options: [
        "A key consisting of multiple attributes",
        "A key generated automatically",
        "A key that is always numeric",
        "None of these",
      ],
      correct: "A key consisting of multiple attributes",
    },
    {
      question: "What is a clustered index?",
      options: [
        "An index that determines the physical order of data",
        "An index that is stored separately from data",
        "An index that is not used for queries",
        "None of these",
      ],
      correct: "An index that determines the physical order of data",
    },
    {
      question: "What does ACID stand for in transactions?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Accuracy, Consistency, Integrity, Durability",
        "Atomicity, Clarity, Integrity, Durability",
        "None of these",
      ],
      correct: "Atomicity, Consistency, Isolation, Durability",
    },
    {
      question: "What is a view in a database?",
      options: [
        "A virtual table based on a query",
        "A stored backup of a table",
        "An index on a table",
        "None of these",
      ],
      correct: "A virtual table based on a query",
    },
    {
      question: "What is client-server architecture?",
      options: [
        "A model separating presentation from data processing",
        "A monolithic application design",
        "A peer-to-peer network",
        "None of these",
      ],
      correct: "A model separating presentation from data processing",
    },
    {
      question: "What is multi-tier architecture?",
      options: [
        "Architecture that separates data, logic, and presentation into layers",
        "A single-layer design",
        "A network routing protocol",
        "None of these",
      ],
      correct:
        "Architecture that separates data, logic, and presentation into layers",
    },
    {
      question: "What is cloud computing?",
      options: [
        "Delivery of computing services over the internet",
        "Storing data locally on a server",
        "A type of relational database",
        "None of these",
      ],
      correct: "Delivery of computing services over the internet",
    },
    {
      question: "What is virtualization?",
      options: [
        "Creation of virtual instances of hardware and software",
        "Physical server consolidation",
        "A network firewall",
        "None of these",
      ],
      correct: "Creation of virtual instances of hardware and software",
    },
    {
      question: "What is a microservice?",
      options: [
        "A small, independently deployable service",
        "A large monolithic application",
        "A type of database",
        "None of these",
      ],
      correct: "A small, independently deployable service",
    },
  ];

  // Generic true/false statements related to the lecture material.
  const genericStatementsTF = [
    {
      statement: "1NF requires each cell to contain a single atomic value.",
      truth: "True",
    },
    {
      statement: "A candidate key can contain NULL values.",
      truth: "False",
    },
    {
      statement: "ERDs visually represent entities and their relationships.",
      truth: "True",
    },
    {
      statement: "DFDs show the flow of data within a system.",
      truth: "True",
    },
    {
      statement: "CRUD stands for Create, Read, Update, Delete.",
      truth: "True",
    },
    {
      statement: "Normalization reduces data redundancy.",
      truth: "True",
    },
    {
      statement: "A primary key uniquely identifies a record.",
      truth: "True",
    },
    {
      statement: "Indexes improve query performance.",
      truth: "True",
    },
    {
      statement:
        "Junction tables are used to resolve many-to-many relationships.",
      truth: "True",
    },
    {
      statement: "Composite keys consist of a single attribute.",
      truth: "False",
    },
  ];

  const questions = [];
  let multipleIndex = 0;
  let tfIndex = 0;

  for (let i = 1; i <= 100; i++) {
    if (acceptedIDs.includes(i)) {
      // Use the custom provided question.
      questions.push(providedQuestions[i]);
    } else {
      // For IDs not provided, generate a generic lecture-related question.
      if (i % 2 === 0) {
        // Even: generate a True/False question.
        const item = genericStatementsTF[tfIndex % genericStatementsTF.length];
        tfIndex++;
        questions.push({
          id: i,
          type: "truefalse",
          question: `Statement ${i}: ${item.statement}`,
          options: ["True", "False"],
          correct: item.truth,
        });
      } else {
        // Odd: generate a Multiple-Choice question.
        const topic =
          genericTopicsMultiple[multipleIndex % genericTopicsMultiple.length];
        multipleIndex++;
        questions.push({
          id: i,
          type: "multiple",
          question: `Question ${i}: ${topic.question}`,
          options: topic.options,
          correct: topic.correct,
        });
      }
    }
  }
  return questions;
}

// Generate the complete question set
const quizQuestions = generateQuizQuestions();
console.log(quizQuestions);

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledQuestions = shuffle([...quizQuestions]);

const itemsPerPage = 10;
let currentPage = 1;
const totalPages = Math.ceil(shuffledQuestions.length / itemsPerPage);

// Function to render the questions for the current page
function displayQuiz() {
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";
  // Reset check button text
  document.getElementById("checkButton").innerText = "Check Answers";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentQuestions = shuffledQuestions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  currentQuestions.forEach((q) => {
    // Create a card for each quiz question with a unique id attribute
    const card = document.createElement("div");
    card.className = "bg-gray-800 p-6 rounded-lg shadow-lg mb-4";
    card.id = `card_${q.id}`; // Unique identifier for feedback targeting

    // Build options HTML
    let optionsHTML = "";
    q.options.forEach((option, idx) => {
      const radioId = `q${q.id}_option${idx}`;
      optionsHTML += `
        <div class="flex items-center mt-2">
          <input type="radio" name="question_${q.id}" id="${radioId}" value="${option}" class="form-radio text-blue-500">
          <label for="${radioId}" class="ml-2">${option}</label>
        </div>
      `;
    });

    card.innerHTML = `
      <div>
        <h2 class="text-xl font-bold">Question ${q.id}</h2>
        <p class="mt-2 text-lg">${q.question}</p>
        <div class="mt-4">
          ${optionsHTML}
        </div>
        <p class="feedback mt-2 text-sm"></p>
      </div>
    `;
    container.appendChild(card);
  });

  document.getElementById("prevButton").disabled = currentPage === 1;
  document.getElementById("nextButton").disabled = currentPage === totalPages;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Function to check answers for the current page
function checkAnswers() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentQuestions = shuffledQuestions.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  let correctCount = 0;

  currentQuestions.forEach((q) => {
    // Use Array.from to safely iterate over the HTMLCollection
    const radios = Array.from(document.getElementsByName(`question_${q.id}`));
    let selectedValue = "";
    radios.forEach((radio) => {
      if (radio.checked) {
        selectedValue = radio.value;
      }
    });

    // Get the corresponding card by its unique id
    const card = document.getElementById(`card_${q.id}`);
    const feedbackP = card.querySelector(".feedback");

    if (selectedValue === "") {
      feedbackP.innerText = "No answer selected.";
      feedbackP.className = "feedback mt-2 text-sm text-yellow-400";
    } else if (selectedValue === q.correct) {
      feedbackP.innerText = "Correct!";
      feedbackP.className = "feedback mt-2 text-sm text-green-400";
      correctCount++;
    } else {
      feedbackP.innerText = `Incorrect! The correct answer is: ${q.correct}.`;
      feedbackP.className = "feedback mt-2 text-sm text-red-400";
    }
  });

  document.getElementById(
    "checkButton"
  ).innerText = `You got ${correctCount} out of ${currentQuestions.length} correct. Check Again`;
}

// Event listeners for buttons
document.getElementById("prevButton").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayQuiz();
  }
});
document.getElementById("nextButton").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayQuiz();
  }
});
document.getElementById("checkButton").addEventListener("click", checkAnswers);

// Initial rendering of quiz questions when the page loads
displayQuiz();

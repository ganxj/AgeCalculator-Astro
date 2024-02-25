const getFaqList = () => {
  const faqs: Faq[] = [
    {
      question: "1. What is chronological age?",
      answer:
        "Chronological age is the amount of time that has passed from a person's birth to a given date. It is commonly quoted in years, months, weeks, days, etc?\n" +
        "\n" +
        "Chronological age is different to biological age because biological age takes into account for different biological and physiological development factors including genetics, lifestyle, nutrition and health conditions.",
    },
    {
      question: "2. Why Use a Chronological Age Calculator?",
      answer:
        "Medical Purposes\n" +
        "In the medical field, calculating a patient's actual age is crucial for diagnosis and treatment. The Chronological Age Calculator assists doctors in more accurately assessing a patient's health.\n" +
        "\n" +
        "Health Management\n" +
        "Personal health and fitness plans are often tailored based on age. Using the Chronological Age Calculator ensures that plans and recommendations are based on accurate age data.\n" +
        "\n" +
        "Insurance Business\n" +
        "Insurance companies typically base insurance premiums on the age of the insured. Accurately calculating the age of the insured is essential to ensure fair insurance rates.",
    },
    {
      question: "3. How to calculate chronological age?",
      answer:
        "To calculate your chronological age you need to subtract your date of birth from the current date. However, this is easier said than done because different months have a different number of days. February, for example, has 28 days in a normal year and 29 in a leap year. You can get a rough idea of how old you are in days by calculating as follows:Age in days = (years × 365) + (months × 31) + days",
    },
    {
      question: "4. Using our chronological age calculator",
      answer:
        "When you enter a date of birth into our age calculator, the function subtracts that date from the current one (or one you enter) in order to return the difference between the two dates. It then formats the result to display it in chronological order - meaning that it displays years, months and then days. As a handy feature, you're also able to find out statistics for the number of months & days, weeks and days individually.",
    },
  ];

  return faqs;
};

export interface Faq {
  question: string;
  answer: string;
}

export default getFaqList;

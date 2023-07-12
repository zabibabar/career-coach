type Persona = {
  title: string;
  subtitle: string;
  picture: string;
  goals: { title: string; desc: string }[];
};

const personas: Persona[] = [
  {
    title: "Student",
    subtitle: "Are you a highschool or a university Student?",
    picture: "undraw_education_f8ru.svg",
    goals: [
      {
        title: "Major Selection & Alignment",
        desc: "Making sure major aligns with personal goals and ambitions",
      },
      {
        title: "Excel Academically",
        desc: "Getting grades that you desire and graduate on time",
      },
      {
        title: "Gain Experience",
        desc: "Preparing for Internships and first job during school",
      },
      {
        title: "Continue Your Journey",
        desc: "Continue Education or enter the workforce",
      },
    ],
  },
  {
    title: "Young Professional",
    subtitle: "Are you a recent grad starting your career?",
    picture: "undraw_career_development_re_sv91.svg",
    goals: [
      {
        title: "Career Selection & Alignment",
        desc: "Making sure career aligns with personal goals and ambitions",
      },
      {
        title: "Excel Professionally",
        desc: "Growing/learning at job and setting yourself for promotion/raises",
      },
      {
        title: "Mentally Succeed",
        desc: "Feeling comfortable at your first job, overcoming imposter syndrome",
      },
      {
        title: "Set Yourself Up For Financial Success",
        desc: "Building emergency fund, paying off debt, saving for retirement (Yes, 20s is the best time to do it)",
      },
    ],
  },
  {
    title: "International (F-1)",
    subtitle:
      "Are you a current or prospective international student in the US?",
    picture: "undraw_adventure_re_ncqp.svg",
    goals: [
      {
        title: "Dealing with Culture Shock",
        desc: "Helping you settle into a new culture and provide support",
      },
      {
        title: "Working during school",
        desc: "Competing with locals and standing out in the job hunt",
      },
      {
        title: "Knowing the nitty gritty",
        desc: "Understanding your responsibilities as an international student to maintain your status",
      },
      {
        title: "Continuing your journey after school",
        desc: "Deciding between grad school, OPT, and going back home",
      },
    ],
  },
];

export default personas;

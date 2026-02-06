export const dark_email_color = "#243845";
export const light_email_color = "#f7f5f3";

export const consultation_price = "$60";
export const regular_price = "$75";
type certType = {
  name: string;
  link: string;
};
export type CoachInfo = {
  name: string;
  section_name: string;
  title: string;
  picture_url: string;
  short_bio: string;
  bio: string[];
  custom_button?: {
    title: string;
    link: string;
  };
  certifications?: certType[];
};

export const coaches: CoachInfo[] = [
  {
    name: "Emma Bush",
    section_name: "emma",
    title:
      "Business Owner | Nutrition and Wellness, Gut and Hormone Health Coach",
    picture_url:
      "https://bjwlzqryc3kj3ybt.public.blob.vercel-storage.com/coaches/emma/profile.png",
    short_bio:
      "Emma helps women restore balance and confidence through gut and hormone health support. After overcoming Stage 4 endometriosis through holistic lifestyle changes, she is passionate about helping women heal naturally and live toxin-free.",
    bio: [
      "Hi, I’m Emma! I am so excited to help you on your personal journey to Gut & Hormone success! I’m passionate about helping others live a non-toxic lifestyle because it is what saved me from years of undiagnosed pain.",
      "I trained throughout my youth as a competitive runner, eventually earning me a spot at Texas A&M. Over time, the level at which I trained and competed started causing my body to shut down. I was diagnosed with Stage 4 endometriosis and was in and out of hospitals for debilitating pain, cysts, and fertility issues. Endometriosis is a highly understudied disorder, and medical professionals were unable to get to the root of my problem. Instead of supplying me with what I truly needed, they continued to give me the same advice they give every woman: birth control and surgery. Neither option felt right for my body at the time, and I knew it was time to look for other solutions.",
      "As women, it can be discouraging to feel so lost when it comes to your body, especially your reproductive system. But I refused to give up. I knew there was a community for people like me, people who saw the studies on the effects of these birth controls and procedures and noticed the endometriosis cycle continued to appear again and again, sometimes worse than before. I surrounded myself with a community that shared my struggle, my pain, and began to educate myself on alternative options. The answer I needed became clear – balanced hormones, nourishing food, and a toxin-free lifestyle.",
      "By learning to live in alignment with my cycle, changing my diet, removing hidden toxins, and supporting my body holistically, I began to heal. It took years of work and dedication to see the goals I had for myself through, but I can now say I am no longer afraid and on a never-ending upward climb to freedom from my endometriosis symptoms. I continued my education, becoming a certified Gut & Hormone Health Professional, and used what I learned not only for my own body, but also for other women who needed the tools to be their healthiest selves again.",
      "I am proof that a non-toxic lifestyle change can and will make a difference in your overall health. Through educating myself and my faith that God would continue to guide me, I was saved from the non-stop pain and burden I carried for 4 years. The journey wasn’t easy, but I came out on the other side with energy, confidence, and a new lease on life. If I can give one thing to those around me in this life, it would be freedom from the pain and suffering our bodies endure. Your body is capable of healing as mine did, and I’m so excited to help you get there!",
    ],
    certifications: [
      {
        name: "Gut Health Course",
        link: "https://bjwlzqryc3kj3ybt.public.blob.vercel-storage.com/coaches/emma/certification1.png",
      },
      {
        name: "Hormone Health Course",
        link: "https://bjwlzqryc3kj3ybt.public.blob.vercel-storage.com/coaches/emma/certification2.png",
      },
      {
        name: "Health Coach Training",
        link: "https://bjwlzqryc3kj3ybt.public.blob.vercel-storage.com/coaches/emma/certification3.png",
      },
    ],
  },
  {
    name: "Rachel de Jong",
    section_name: "rachel",
    title: "Functional Nutrition Counselor | Fitness Professional",
    picture_url:
      "https://bjwlzqryc3kj3ybt.public.blob.vercel-storage.com/coaches/rachel/profile.png",
    short_bio:
      "Rachel helps women feel strong, supported, and well through personalized nutrition and fitness guidance. With experience in gut health, fitness, and motherhood, she knows one size does not fit all- and your health deserves better.",
    bio: [
      "Hi! My name is Rachel de Jong, and I’m so glad you’re here. I’m a Functional Nutrition Counselor, Certified Personal Trainer, Group Fitness Instructor, and proud boy mom. I’ve been working professionally in the nutrition and fitness space for nearly seven years, and my passion for helping people become healthy and strong in a sustainable, attainable, and stress-free way continues to grow.",
      "Through my own health and wellness journey—healing my relationship with food, learning how to nourish my body to support my love for exercise and competition, and stepping into the ever-demanding role of motherhood—I developed a deep passion for helping others build a healthy, whole lifestyle that truly lasts.",
      "Along the way, I navigated my own gut health challenges and was often met with “one-size-fits-all” nutrition protocols. Spoiler alert: they didn’t work. What did work was learning how to support my body with individualized care, targeted nourishment, and patience—allowing me to heal, optimize my health, and feel truly well.",
      "Today, I aim to be the bridge between your health questions and the answers that never quite seem to fit. We are all wonderfully unique, and your care should reflect that. One size does not fit all—and your health deserves more than that.",
    ],
    custom_button: {
      title: "Join Rachels RAD Wellness Community",
      link: "https://rad-health-wellness.circle.so",
    },
  },
];

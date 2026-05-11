export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  gallery: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'amujae-leader-sona-t-sesay',
    title: 'Amujae Leader: Sona T. Sesay Recognised for Public Service Excellence',
    date: 'March 2023',
    excerpt: 'The Ellen Johnson Sirleaf Presidential Center for Women & Development names Sona T. Sesay as an Amujae Leader for her outstanding contributions to education in Liberia.',
    content: `
      <p>The Ellen Johnson Sirleaf Presidential Center for Women and Development (EJS Center) is proud to announce the selection of Sona T. Sesay as an Amujae Leader. This prestigious designation recognises African women demonstrating exceptional leadership potential and a profound commitment to public service.</p>
      <p>As an Amujae Leader, Sona joins a network of distinguished women leaders across the continent, dedicated to driving transformative change and fostering inclusive development. Her work in the Liberian education sector, particularly her focus on student personnel services and educational equity, has been exemplary.</p>
      <p>Through this program, Sona will engage in high-level mentorship, leadership development, and networking opportunities, further strengthening her capacity to contribute to Liberia's national progress.</p>
    `,
    image: '/assets/images/sona-award-portrait-tsue.png',
    gallery: [
      '/assets/images/sona-award-portrait-tsue.png',
      '/assets/images/sona-award-presentation-ceremony.png',
      '/assets/images/sona-ministry-event-speaking.png',
    ],
  },
  {
    slug: 'ivlp-awardee-global-best-practices',
    title: 'IVLP Awardee Brings Global Best Practices to Liberian Education',
    date: 'November 2022',
    excerpt: 'The U.S. Department of State recognises Sona T. Sesay through the International Visitor Leadership Program for her impactful leadership in student personnel services.',
    content: `
      <p>Sona T. Sesay has been honoured by the U.S. Department of State as an International Visitor Leadership Program (IVLP) Impact Awardee. This recognition highlights her outstanding leadership and the positive impact of her work in Liberia's education sector.</p>
      <p>The IVLP is the U.S. Department of State’s premier professional exchange program, bringing emerging international leaders to the United States to cultivate lasting relationships and share best practices. Sona's participation focused on student personnel services, providing her with valuable insights into global educational standards.</p>
      <p>Since returning to Liberia, Sona has been instrumental in implementing evidence-based approaches to student welfare and institutional strengthening at the Ministry of Education.</p>
    `,
    image: '/assets/images/sona-award-presentation-ceremony.png',
    gallery: [
      '/assets/images/sona-award-presentation-ceremony.png',
      '/assets/images/sona-national-student-symposium-podium.png',
      '/assets/images/sona-leadership-laptop-session.png',
    ],
  },
  {
    slug: 'gratitude-network-fellow-educational-equity',
    title: 'Gratitude Network Fellow Champions Educational Equity in West Africa',
    date: 'June 2021',
    excerpt: 'Sona T. Sesay joins the Gratitude Network Fellowship, bringing her commitment to scaling educational impact and youth development across West Africa.',
    content: `
      <p>Sona T. Sesay has been selected as a Gratitude Network Fellow, a global community of social entrepreneurs dedicated to scaling impact in education and youth development. This fellowship recognises Sona's commitment to fostering educational equity across West Africa.</p>
      <p>The Gratitude Network provides its fellows with executive coaching, strategic support, and a global network of peers and mentors. This support is crucial for scaling innovative educational solutions that address the needs of underserved populations.</p>
      <p>Sona's work continues to bridge the gap between policy and practice, ensuring that every child in Liberia has the opportunity to receive a quality education.</p>
    `,
    image: '/assets/images/sona-bluecrest-graduation-speech.png',
    gallery: [
      '/assets/images/sona-bluecrest-graduation-speech.png',
      '/assets/images/sona-student-engagement-group.png',
      '/assets/images/sona-stakeholder-engagement-group.png',
    ],
  },
];

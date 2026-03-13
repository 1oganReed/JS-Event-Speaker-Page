// define objects - speakers
let speakers = [
    {
        name: 'Dr. Sarah Chen',
        title_company: 'Chief AI Researcher TechVision Labs',
        description: 'Dr. Chen is a leading expert in machine learning with over 15 years of experience. She has published more than 50 papers on neural networks and AI ethics',
        topic: 'The future of Ethical AI Development',
        expertise: 'Machine Learning & AI Ethics',
        website: 'sarahchen.tech',
        twitter: '@sarahchen_ai',
        linkedin: 'linkedin.com/in/sarahchen',
        image:'images/Dr.Sarah-Chen.png'
    },
    {
        name: 'Marcus Rodriguez',
        title_company: 'Founder & CEO GreenTech Innovations',
        description: 'Marcus is a serial entrepreneur passionate about sustainable technology. He has founded three successful startups focused on clean energy solutions.',
        topic: 'Building Sustainable Startups in a Digital Age',
        expertise: 'Entrepreneurship & Sustainability',
        website: 'greentechinnovations.com',
        twitter: '@marcusrod',
        linkedin: 'linkedin.com/in/marcusrodriguez',
        image:'images/Marcus-Rodriguez.png'
    },
    {
        name: 'Dr. Amara Okafor',
        title_company: 'Director of Cybersecurity SecureNet Solutions',
        description: 'Dr. Okafor specializes in Cybersecurity and threat intelligence. She advises governments and Fortune 500 companies on digitial security strategies',
        topic: 'Protecting Your Digital Assets: Modern Cybersecurity Strategies',
        expertise: 'Cybersecurity & Threat Intelligence',
        website: 'amaraokafor.com',
        twitter: '@amara_security',
        linkedin: 'linkedin.com/in/amaraokafor',
        image:'images/Dr.Amara-Okafor.png'
    },
    {
        name: 'James Patterson',
        title_company: 'Head of Product Design DesignFirst Studio',
        description: 'James has led design teams at major tech companies for over a decade. His work has won multiple design awards and shaped user experiences for millions.',
        topic: 'Human Centered Design in the Age of AI',
        expertise: 'UX Design & Product Strategy',
        website: 'jpattersondesign.com',
        twitter: '@jpatterson_ux',
        linkedin: 'linkedin.com/in/jamespatterson',
        image:'images/James-Patterson.png'
    },
    {
        name: 'Dr. Priya Sharma',
        title_company: 'VP of Data Sciences Analytics Corp',
        description: 'Dr. Sharma leads data science initiatives that drive business transformation. Shes known for making complex data accessible and actionable',
        topic: 'Data-Driven Decision Making: From Insights to Impact',
        expertise: 'Data Science & Business Analytics',
        website: 'priyasharmaanalytics.com',
        twitter: '@priya_data',
        linkedin: 'linkedin.com/in/priyasharma',
        image:'images/Dr.Priya-Sharma.png'
    },
    {
        name: 'Alex Thompson',
        title_company: 'Blockchain Architect CryptoChain Technologies',
        description: 'Alex is a pioneer in blockchain technology and decentralized systems. Hes contributed to several major blockchain protocols and advises on Web3 strategies',
        topic: 'Blockchain Beyond Cryptocurrency: Real World Applications',
        expertise: 'Blockchain & Web3',
        website: 'alexthompson.io',
        twitter: '@alexthompson_bc',
        linkedin: 'linkedin.com/in/alexthompson',
        image:'images/Alex-Thompson.png'
    },
    {
        name: 'Lisa Wang',
        title_company: 'Chief Marketing Officer BrandSpark Agency',
        description: 'Lisa has revolutionized digital marketing strategies for global brands. Her campaigns have generated billions in revenue and won numberous industry awards.',
        topic: 'Marketing in 2026: Authenticity Meets Automation',
        expertise: 'Digital Markething & Brand Strategy',
        website: 'lisawang.co',
        twitter: '@lisawang_mktg',
        linkedin: 'linkedin.com/in/lisawang',
        image:'images/Lisa-Wang.png'
    },
    {
        name: 'Dr. Michael Foster',
        title_company: 'Quantum Computing Researcher Quantum Dynamics Institute',
        description: 'Dr. Foster is at the forefront of quantum computing research. His work on quantum algorithms has potential applications in cryptography and organization.',
        topic: 'Quantum Computing: The Next Computing Revolution',
        expertise: 'Quantum Computing & Physics',
        website: 'michaelfosterquantum.edu',
        twitter: '@mfoster_quantum',
        linkedin: 'linkedin.com/in/michaelfoster',
        image:'images/Dr.Michael-Foster.png'
    },
];

// Header
/* const header = document.getElementById("header");

let html = "";
html += `
    <h1>Event Speakers 2026</h1>
        <p>Meet our amazing lineup of speakers</p>
        `;
header.innerHTML = html; */


function displaySpeakers(){
    const grid = document.getElementById('speakersGrid');
    let html = "";

    for(i = 0; i < speakers.length; i++){
        const speaker = speakers[i];
        html += `
                    <div class="speaker-card">
                
                    <div class= "speaker-image">
                        <img src="${speaker.image}" alt="${speaker.name}"  width=70px; height=70px;>
                    </div>
                    <div class= "speaker-name">${speaker.name}</div>
                    <div class= "speaker-title_company">${speaker.title_company}</div>
                    <div class= "speaker-description">${speaker.description}</div>
                    <div class= "speaker-topic">${speaker.topic}</div>
                    <div class= "speaker-expertise">${speaker.expertise}</div>
                    <div class= "speaker-website">${speaker.website}</div>
                    <div class= "speaker-twitter">${speaker.twitter}</div>
                    <div class= "speaker-linkedin">${speaker.linkedin}</div>
        </div>
        `
    }
    grid.innerHTML = html;
}
displaySpeakers()
(function(){
    const spanE1 = document.querySelector("main h2 span");
    const arr = ['Back-End Developer','Data-Engineer','AP Instructor'];
    let index = 0;
    let cur = arr[index].split("");
    function writeTxt(){
        spanE1.textContent += cur.shift();
        if(cur.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random()*100));
            //unit is ms
        } else {
            cur = spanE1.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    function deleteTxt(){
        cur.pop();
        spanE1.textContent = cur.join("")
        if(cur.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random*100));
        } else {
            index += 1;
            cur = arr[index].split("");
            writeTxt()
        }
    }
    writeTxt();
})();

document.addEventListener('DOMContentLoaded',function(){
    toggleLanguage('en');
});

const headerE1 = document.querySelector('header');
window.addEventListener('scroll',function(){
    this.requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
    let bsy = window.scrollY ? window.scrollY : window.pageYOffset;
    if (bsy > 0){
        headerE1.classList.add('active')
    } else {
        headerE1.classList.remove('active')
    }
};

const animationMove = function(selector){
    const targetE1 = document.querySelector(selector);
    const bsy = window.pageYOffset;
    const tay = targetE1.getBoundingClientRect().top + bsy;
    window.scrollTo({top: tay, behavior: 'smooth'});
};

const scollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scollMoveE1.length; i++){
    scollMoveE1[i].addEventListener('click',function(e){
        const target = this.dataset.target;
        animationMove(target)
    })
}

//Language Toggle Change
const texts = {
    ko: {
        main_desc: "Duke Kunshan University에서 응용수학 및 계산과학을 전공하고 있는 2학년 학생입니다. 융합적 교육을 통해 세상을 바라보는 독특한 시각을 갖추고 있습니다. 동시에, 이전의 다양한 실무 경험과 활동을 통해 컴퓨터 과학과 수학에 대한 탄탄한 이해를 쌓았습니다.",
        download: "이력서 다운로드",
        about_self: "안녕하세요, 저는 이기훈입니다. 교육자이자 소프트웨어 개발자를 꿈꾸며, 컴퓨터 과학, 데이터 과학, 공학, 수학/과학 교육에 열정을 가지고 있습니다. 물리, 수학, 컴퓨터 과학을 가르친 경험을 바탕으로 폭넓은 지식과 전문성을 갖추고 있습니다. 소프트웨어 개발 분야에서 저의 문제 해결 능력과 창의력을 바탕으로 혁신적인 솔루션을 만들고 싶습니다. 평생 학습자로서 항상 새로운 도전과 성장의 기회를 찾고 있습니다. 함께 연결되어 IT 업계에서 긍정적인 변화를 만들어갈 수 있기를 기대합니다.",
        skills_python: "Python에 능숙하며, 알고리즘 문제 해결과 다양한 프로젝트 개발이 가능합니다.",
        skills_java: "Java에 능숙하며, 알고리즘 문제 해결과 프로젝트 개발 경험이 있습니다.",
        skills_VBA: "컴퓨터활용능력 1급 자격을 보유하고 있으며, MS Excel 및 데이터베이스 활용에 능숙하고, VBA 코드를 활용한 업무 자동화 경험이 풍부합니다.",
        skills_HTML5: "HTML5의 기본기를 잘 이해하고 있으며, 프론트엔드 구조와 논리를 탄탄하게 파악하고 있습니다.",
        skills_CSS: "CSS를 활용하여 웹페이지 스타일링이 가능하며, 프론트엔드 디자인의 핵심 원리를 이해하고 있습니다.",
        skills_javascript: "JavaScript의 핵심 논리와 프론트엔드 상호작용 구현에 익숙합니다.",
        skills_MySQL: "MySQL에 능숙하며, 원하는 데이터셋을 쿼리하고 트리거, 함수, 뷰 등 고급 기능도 사용할 수 있습니다.",
        skills_Database: "데이터베이스를 설계 및 구축할 수 있으며, 관계형 데이터베이스 관리 시스템(RDBMS)에 능숙하고, JSON, 객체지향 DB 등 다양한 DB 포맷에도 익숙합니다.",
        skills_Git: "Git을 활용한 버전 관리 및 협업 경험이 있습니다.",
        skills_ScikitLearn: "scikit-learn을 활용하여 지도·비지도 학습 모델을 통한 통계 분석 경험이 있습니다.",
        info_phone: "전화번호",
        info_email: "이메일 주소",
        info_address: "주소",
        contact_name: "이름",
        contact_email: "이메일",
        contact_message: "메시지",
        contact_send: "보내기"
    },
    en: {
        main_desc:" A second-year student majoring in Applied Mathematics and Computational Science at Duke Kunshan University. I have a unique approach to the world from my interdisciplinary education. Simultaneously, I have a solid understanding of computer science and mathematics from my prior professional experiences and activities.",
        download:"Download CV",
        about_self: "Hi, I'm Gihun Lee, an educator and aspiring software developer with a passion for CS, DS, Engineering, and Math/Science education. With a background in teaching Physics, Mathematics, and Computer Science, I bring a wealth of knowledge and expertise to the table. I am interested in leveraging my skills to work in the software development industry, where I can apply my problem-solving abilities and creativity to build innovative solutions. As a lifelong learner, I am always seeking new challenges and opportunities to grow both personally and professionally. Let's connect and explore how we can collaborate to make a positive impact in the tech industry.",
        skills_python: "Proficient in Python, capable of solving algorithmic problems and building diverse projects.",
        skills_java: "Proficient in Java, with experience in algorithmic problem-solving and project development.",
        skills_VBA: "Highly proficient in MS Excel and database management, with extensive experience automating tasks using Visual Basic for Applications.",
        skills_HTML5: "Solid understanding of HTML5 fundamentals, with a strong grasp of frontend logic and structure.",
        skills_CSS:"Comfortable with CSS, able to style web pages and understand the core principles of frontend design.",
        skills_javascript: "Skilled in JavaScript, understanding the logic and interactivity essential for frontend development.",
        skills_MySQL:"Proficient in MySQL, able to query datasets and utilize advanced features such as triggers, functions, and views.",
        skills_Database: "Capable of designing and building databases; proficient in relational database management systems and familiar with alternative formats like JSON and object-oriented databases.",
        skills_Git: "Experienced in using Git for version control and effective collaboration with other developers.",
        skills_ScikitLearn: "Experienced in applying scikit-learn for statistical analysis, utilizing both supervised and unsupervised machine learning models.",
        info_phone: "phone number",
        info_email: "email address",
        info_address: "address",
        contact_name: "Name",
        contact_email: "Email",
        contact_message: "Message",
        contact_send: "Send",
    }
};

function toggleLanguage(lang) {
    document.getElementById('main_desc').innerText = texts[lang].main_desc;
    document.getElementById('download').innerText = texts[lang].download;
    document.getElementById('about_self').innerText = texts[lang].about_self;
    document.getElementById('skills_python').innerText = texts[lang].skills_python;   
    document.getElementById('skills_java').innerText = texts[lang].skills_java;
    document.getElementById('skills_VBA').innerText = texts[lang].skills_VBA;
    document.getElementById('skills_HTML5').innerText = texts[lang].skills_HTML5;
    document.getElementById('skills_CSS').innerText = texts[lang].skills_CSS;
    document.getElementById('skills_javascript').innerText = texts[lang].skills_javascript;
    document.getElementById('skills_MySQL').innerText = texts[lang].skills_MySQL;
    document.getElementById('skills_Database').innerText = texts[lang].skills_Database;
    document.getElementById('skills_Git').innerText = texts[lang].skills_Git;
    document.getElementById('skills_ScikitLearn').innerText = texts[lang].skills_ScikitLearn;
    document.getElementById('info_phone').innerText = texts[lang].info_phone;
    document.getElementById('info_email').innerText = texts[lang].info_email;
    document.getElementById('info_address').innerText = texts[lang].info_address;
    document.getElementById('contact_name').innerText = texts[lang].contact_name;
    document.getElementById('contact_email').innerText = texts[lang].contact_email;
    document.getElementById('contact_message').innerText = texts[lang].contact_message;
    document.getElementById('contact_send').innerText = texts[lang].contact_send;    
}
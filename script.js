document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "./images/wallpaperflare.com_wallpaper (1).jpg",
        "./images/wallpaperflare.com_wallpaper (2).jpg",
        "./images/wallpaperflare.com_wallpaper (3).png"
    ];

    let currentImageIndex = 0;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById("autoChangeImage").src = images[currentImageIndex];
    }

    setInterval(changeImage, 2000); // Change image every 2 seconds

    const urlParams = new URLSearchParams(window.location.search);
    const celebrityId = urlParams.get('celebrity');

    const celebrities = {
        "1": {
            "name": "Kim Nam-joon(김남준)",
            "image": "./images/celebrity1.jpg",
            "description": "RM (whose full name is Kim Namjoon) is the band's leader and main rapper. Born on Sept. 12, 1994, RM grew up in Ilsan, South Korea, and began rapping at a young age. He made some waves in the underground rap scene — performing under various names, including Large, Stealo and Runch Randa — and eventually caught the eye of the South Korean record label Big Hit Entertainment (later rebranded into HYBE), who formed BTS and recruited him to be the first official member in 2010.Over the years, RM has been praised for his fluency in English. During an appearance on The Ellen Degeneres Show, RM revealed that he taught himself English by watching the iconic sitcom Friends. \"My English teacher was the sitcom Friends,\" he explained. \"Back in the days, when I was like 15, 14, it was quite like a syndrome for all the Korean parents to make their kids watch Friends. I thought I was kind of like a victim at that time, but right now, I'm the lucky one, thanks to my mother.\"RM added that his mom bought him all 10 seasons of the hit show on DVD. \"So firstly, I watched them with the Korean subtitles, and then next time, I watched with the English subtitles, and then I just removed it.\" During their annual FESTA dinner in June 2022, BTS shared that they would be taking a break to pursue solo projects and figure out their next steps as a band.\"I always thought that BTS was different from other groups, but the problem with K-pop and the whole idol system is that they don't give you time to mature,\" RM said during the event.\"You have to keep producing music and keep doing something.\"HYBE later clarified in a statement that the group was not taking a hiatus and would remain active \"as a team while taking individual journey to further achieve personal growth.\"RM made his official solo debut with his first studio album, INDIGO, in December 2022."
        },
        "2": {
            "name": "Kim Seok-jin(김석진)",
            "image": "./images/celebrity2.jpg",
            "description": "Jin (whose full name is Kim Seokjin) was born on Dec. 4, 1992, in Gwacheon, South Korea. He is the oldest member of the group and the first member to begin mandatory military service in South Korea— a requirement that must be fulfilled by able-bodied men in the country before they're 28 years old.Often referred to as \"Worldwide Handsome, \" Jin joined the group in 2013 as one of the four main vocalists. In 2017, Jin graduated from Konkuk University in South Korea, according to a tweet from BTS' official Twitter page, with a degree in acting and art.Jin is also BTS' resident foodie. He previously had his own food web series, Eat Jin, and he is the co-owner of a Japanese restaurant called Ossu Seriomushi, located in Seoul, South Korea. In August 2022, Jin made use of his time off from BTS and got back in the kitchen, receiving a cooking lesson from celebrity chef and South Korean television personality Lee Yeon-bok, per Billboard.During an interview with Weverse Magazine, Jin opened up about finding his confidence as an individual, outside of BTS.\"It used to be that any time I had to do something, I thought it was such a big deal. Like, how can I handle something this big right now,\" Jin told the outlet. \"I would always feel discouraged, but my personality has changed a lot now, I think. I think the biggest change in my mind is that now, even if there's a major project in the works, I think I can do it now.\"He added, \"Now, instead of, 'How can I handle this?' it's 'I can handle this!' when I'm making songs for other people to listen to.\"Jin released the solo single, \"The Astronaut,\" which was co-written by Chris Martin of Coldplay, in October 2022."
        },
        "3": {
            "name": "Min Yoon-gi(민윤기)",
            "image": "./images/celebrity3.jpg",
            "description": "Suga (whose full name is Min Yoongi) was born on March 9, 1993, in Daegu, South Korea. Prior to joining BTS, he made a name for himself as an underground rapper — performing under the stage name Gloss — and a producer.These days, in addition to his involvement with BTS, Suga performs as a solo rapper under the alias Agust D, which is a play on his stage name and a reference to his hometown. He is also a commercial producer under the name \"By Suga.\"Of his different aliases, he told GQ Austalia, \"All three are me. They each take up a third of myself, and one isn't more reflective of me than another. I simply give people a choice. These three sides of myself are incredibly different, so I'm giving people a choice to see me as they want.\"In April 2022, Suga produced and was featured on \"Gangnam Style\" singer Psy's comeback song \"That That.\"\"At first, because he's many years my senior and someone who's well-respected in the business I was quite nervous,\" Suga said of the collaboration, adding, \"it felt like working with a childhood friend so it made the songwriting process that much more fun … We became besties in a way.\"Suga made his foray into the fashion world in January 2023, when Italian fashion house Valentino announced him as their latest brand ambassador.Suga joined the company's Di.Vas ambassador group, which stands for Different Values, per WWD. Pierpaolo Picciolo, Valentino's creative director, described Suga to the outlet as a \"multifaceted artist\" who expresses himself with \"authenticity and energy.\" He added, \"He perfectly embodies everything that DI.VA.s testimonials stand for: diversity, inclusivity, creativity, and passion.\"In September 2023, Suga became the third member of BTS to enlist in the South Korean military."
        },
        "4": {
            "name": "Kim Tae-hyung(김태형)",
            "image": "./images/celebrity4.jpg",
            "description": "V (whose full name is Kim Taehyung) was born on Dec. 30, 1995, in Daegu, South Korea. He grew up singing and playing the saxophone, and he eventually joined BTS after auditioning for Big Hit Entertainment in 2013.After making his official debut with BTS, V also took on acting projects and debuted as an actor in the historical drama Hwarang: The Poet Warrior Youth. V also starred on In the Soop: Friendcation, a reality show on Disney+ that followed the singer and his real-life actor and musician friends, including Parasite star Choi Woo-shik, while they were on vacation. BTS originated the franchise with 2020's BTS In the Soop.On his 25th birthday in December 2020, V released the song \"Snow Flower,\" which is a collaboration with singer-songwriter, producer and rapper Peakboy. Upon its release, he also discussed an upcoming solo mixtape.\"This year feels like a stopped moment, and as the end of the year nears, I think there will be a lot of people with increased anxiety and depression. As [the mixtape] was late, I made [the song] in a hurry, feeling sorry for ARMY,\" he said. \"For today, I hope that white flowers will come down to your hearts and feel some warm comfort and happiness.\"In December 2021, when the BTS members joined Instagram, V broke two Guinness world records in the process. The singer broke the record for the fastest time to reach both 1 million followers and 10 million followers.That same month, he released the holiday song, \"Christmas Tree,\" which immediately topped the Billboard charts and earned him his first solo No. 1, per Billboard. The following year, he released a cover of the Christmas song \"It's Beginning To Look A Lot Like Christmas\" on Dec. 23, 2022.V is reportedly single. However, he's rumored to be dating Jennie from Blackpink. The pair were spotted holding hands on a stroll through Paris in May 2023."
        },
        "5": {
            "name": "Jeon Jung-kook(전정국)",
            "image": "./images/celebrity5.jpg",
            "description": "Jungkook (whose full name is Jeon Jung-kook) was born on Sept. 1, 1997, in Busan, South Korea. He is the youngest member of BTS and ARMY affectionately call him \"Kookie\" or \"Golden Maknae,\" which translates to \"golden youngest.\" When he was a teenager, Jungkook auditioned for the Korean talent show Superstar K during its third season in 2011. While he never made it to the finals, his audition did get him recognized by a few talent agencies, including Big Hit Entertainment. He began training under the label and joined BTS in 2013 as one of the four main vocalists and a dancer.Jungkook was inspired by his bandmate J-Hope to make his own music as a solo artist. \"It was really funny. After hearing the album, [Jungkook] suddenly went to his studio,\" J-Hope told Rolling Stone in July 2022. \"I think he felt the motivation to start. I love that one of our greatest motivators is one another.\""
        },
        "6": {
            "name": "Park Ji-min(박지민)",
            "image": "./images/celebrity6.jpg",
            "description": "Jimin (whose full name is Park Jimin) was born on Oct. 13, 1995, in Busan, South Korea. He is another one of the group's main dancers, and he studied dance in high school. He was the last to join BTS, becoming a member of the group in 2013. In recent years, Jimin has also ventured out independently and taken on new projects. In early January 2023, he was featured on South Korean singer Taeyang's song \"Vibe.\" Just a few days later, Dior announced Jimin as their new global brand ambassador.The artist celebrated the news on Instagram, writing, \"So thrilled to start a journey with @Dior!\" He added in Korean, \"Honored to be Dior's Global Ambassador! Stay tuned for a lot of things to come!\"Jimin has kept plans of a solo album close to his chest, however, in an interview with W Korea on Jan. 23, 2023, he hinted that there is an album in the works. \"Lately, I am working on a solo album. That's what I have been up to. Nothing special … \" he said subtly."
        },
        "7": {
            "name": "Celebrity 3",
            "image": "./images/celebrity7.jpg",
            "description": "Detailed description about Celebrity 3."
        }
    };

    if (celebrityId && celebrities[celebrityId]) {
        document.getElementById("celebrity-name").textContent = celebrities[celebrityId].name;
        document.getElementById("celebrity-image").src = celebrities[celebrityId].image;
        document.getElementById("celebrity-description").textContent = celebrities[celebrityId].description;
    }



    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
        "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
        "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
        "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo",
        "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica",
        "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
        "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
        "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
        "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
        "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
        "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
        "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
        "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
        "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
        "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
        "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
        "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
        "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
        "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
        "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

    const jobs = ["Accountant", "Actor", "Architect", "Artist", "Baker", "Banker", "Barber", "Bartender",
        "Biologist", "Builder", "Butcher", "Carpenter", "Chef", "Cleaner", "Clerk", "Dentist",
        "Designer", "Developer", "Doctor", "Driver", "Economist", "Electrician", "Engineer",
        "Farmer", "Firefighter", "Fisherman", "Florist", "Journalist", "Judge", "Lawyer",
        "Librarian", "Mechanic", "Musician", "Nurse", "Painter", "Pharmacist", "Photographer",
        "Pilot", "Plumber", "Policeman", "Professor", "Psychologist", "Scientist", "Secretary",
        "Singer", "Soldier", "Teacher", "Technician", "Veterinarian", "Waiter", "Writer"];

    const nationalitySelect = document.getElementById('nationality');
    const occupationSelect = document.getElementById('occupation');
    const otherNationalityInput = document.getElementById('otherNationality');
    const otherOccupationInput = document.getElementById('otherOccupation');

    countries.forEach(country => {
        let option = document.createElement('option');
        option.value = country;
        option.text = country;
        nationalitySelect.appendChild(option);
    });

    jobs.forEach(job => {
        let option = document.createElement('option');
        option.value = job;
        option.text = job;
        occupationSelect.appendChild(option);
    });

    nationalitySelect.addEventListener('change', function () {
        if (this.value === 'Other') {
            otherNationalityInput.style.display = 'block';
            otherNationalityInput.required = true;
        } else {
            otherNationalityInput.style.display = 'none';
            otherNationalityInput.required = false;
        }
    });

    occupationSelect.addEventListener('change', function () {
        if (this.value === 'Other') {
            otherOccupationInput.style.display = 'block';
            otherOccupationInput.required = true;
        } else {
            otherOccupationInput.style.display = 'none';
            otherOccupationInput.required = false;
        }
    });

    // Add 'Other' option to both dropdowns
    let otherOptionCountry = document.createElement('option');
    otherOptionCountry.value = 'Other';
    otherOptionCountry.text = 'Other';
    nationalitySelect.appendChild(otherOptionCountry);

    let otherOptionJob = document.createElement('option');
    otherOptionJob.value = 'Other';
    otherOptionJob.text = 'Other';
    occupationSelect.appendChild(otherOptionJob);


});


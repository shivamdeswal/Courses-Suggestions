function searchCoursesOnEnter(event) {
  if (event.keyCode === 13) {
    searchCourses();
  }
}

function searchCourses() {
  
  // Get the search query from the input field
  const searchQuery = document.getElementById('search-input').value.toLowerCase();

  // Get the container for displaying search results
  const searchResultsContainer = document.getElementById('search-results');

  // Clear previous search results
  searchResultsContainer.innerHTML = '';
  
    // Perform the search logic and display the top 4 matching courses
    const courses = {
      dsa: [
        {
          title: 'Data Structure and Algorithms Bootcamp @Supreme Batch By Love Babbar',
          image: "https://i.ytimg.com/vi/0UN3e8HDX7g/maxresdefault.jpg",
          link: 'https://www.thecodehelp.in/course/data-structures-bootcamp'
        },
        {
          title: "Basics of C++ with DSA by Coding Ninja's",
          image: 'https://i.ytimg.com/vi/bE0zlj0sq_c/maxresdefault.jpg',
          link: 'https://www.codingninjas.com/courses/c-plus-plus-data-structures-and-algorithms?utm_source=google&utm_medium=%5Bsearch%5D&utm_campaign=14935983531_139422131276_e_coding%20ninjas%20data%20structures%20and%20algorithms__613071547439_c____9299136&gad=1&gclid=Cj0KCQjwpPKiBhDvARIsACn-gzDnu4YlkDJw9mWStFhbyOLl7VO87xuur4h2Qj6L1Jf9VScLDiJBI6IaAvyqEALw_wcB'
        },
        {
          title: 'DSA: Deep Dive Using Java By Udemy',
          image: "https://i.ytimg.com/vi/_W4zaToU7vc/maxresdefault.jpg",
          link: 'https://www.udemy.com/course/data-structures-and-algorithms-deep-dive-using-java/?ranMID=39197&ranEAID=JVFxdTr9V80&ranSiteID=JVFxdTr9V80-kP2uSLnA5ximoQilHv7VRw&LSNPUBID=JVFxdTr9V80&utm_source=aff-campaign&utm_medium=udemyads'
        },
        {
          title: "Basics of python with DSA by Coding Ninja's",
          image: 'https://blog.shikshacoach.com/wp-content/uploads/2022/06/Coding-Ninjas.jpg',
          link: 'https://www.codingninjas.com/courses/python-data-structures-and-algorithms?utm_source=google&utm_medium=%5Bsearch%5D&utm_campaign=17292057002_141212466637_e_best%20dsa%20course%20in%20python__621462075490_c____9299136&gad=1&gclid=Cj0KCQjwpPKiBhDvARIsACn-gzBw_EQsBhO-Kivg9E6XXeKt4GOKB0o3hLDtcoFULGTAH8SgwXxOWqoaAkcfEALw_wcB'
        }
      ],
      python: [
        {
          title: 'Core Python Programming - Become a Python Professional By Udemy',
          image: 'https://coursecouponclub.com/wp-content/uploads/2021/04/PYTHON-UDEMY-2048x1152.jpg',
          link: 'https://www.udemy.com/course/core-python-3-and-oop-course-for-absolute-beginners/'
        },
        {
          title: ' Automate the Boring Stuff with Python Programming By Udemy',
          image: 'https://i.ytimg.com/vi/mvFRpMHJwA0/maxresdefault.jpg',
          link: 'https://www.udemy.com/course/automate/'
        },
        {
          title: 'Complete Python Mastery By Mosh',
          image: 'https://i.ytimg.com/vi/8TnBZ8rom9c/maxresdefault.jpg',
          link: 'https://codewithmosh.com/p/python-programming-course-beginners'
        },
        {
          title: 'The Ultimate Python Course By Code With Harry',
          image: 'https://i.ytimg.com/vi/Tto8TS-fJQU/maxresdefault.jpg',
          link: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg'
        }
      ],
      os: [
        {
          title: 'Operating Systems For Placement By CodeHelp(Babbar)',
          image: 'https://i.ytimg.com/vi/LBqNWOqSzBA/maxresdefault.jpg',
          link: 'https://www.youtube.com/playlist?list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG'
        },
        {
          title: 'Operating Systems: Virtualization, Concurrency & Persistence By educative',
          image: 'https://www.educative.io/v2api/collection/10370001/5371225300795392/image/5002600266072064',
          link: 'https://www.educative.io/courses/operating-systems-virtualization-concurrency-persistence?affiliate_id=5073518643380224'
        },
        {
          title: 'A+ 2016: Operating Systems Fundamentals',
          image: 'https://engineeringhulk.com/wp-content/uploads/2022/12/os-main-1200x705.jpg',
          link: 'https://www.udemy.com/course/it-operating-systems-comptia-a-plus-900/?ranMID=39197&ranEAID=CuIbQrBnhiw&ranSiteID=CuIbQrBnhiw-PSJyLZ2CW1BKUvwDFqiC5w&LSNPUBID=CuIbQrBnhiw&utm_source=aff-campaign&utm_medium=udemyads'
        },
        {
          title: 'Linux Command Line Basics By Udemy',
          image: 'https://img-c.udemycdn.com/course/750x422/2107378_ae9b.jpg',
          link: 'https://www.udemy.com/course/linux-command-line-volume1/'
        }
      ],
      java: [
        {
          title: 'Alpha 3.0 Placement Course By Apna Collage',
          image: 'https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/website%20(6)_kqqcptz2vrh7h9.jpeg',
          link: 'https://www.apnacollege.in/course/alpha-batch-3'
        },
        {
          title: 'Core Java Tutorial By Durga Sir',
          image: 'https://i.ytimg.com/vi/eTXd89t8ngI/maxresdefault.jpg',
          link: 'https://www.youtube.com/playlist?list=PLd3UqWTnYXOmx_J1774ukG_rvrpyWczm0'
        },
        {
          title: 'The Ultimate Java Mastery Series By Mosh',
          image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/t12BZqmRoulvCTDhoYie',
          link: 'https://codewithmosh.com/p/the-ultimate-java-mastery-series'
        },
        {
          title: 'Learn JAVA Programming - Beginner to Master By Udemy',
          image: 'https://img-b.udemycdn.com/course/750x422/2462140_b27f_2.jpg',
          link: 'https://www.udemy.com/course/java-se-programming/'
        }
      ],
      
      "c++": [
        {
          title: 'The Ultimate C++ Series By Mosh',
          image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/HHccIBrETt2l5UDwzS5c',
          link: 'https://codewithmosh.com/p/ultimate-c-plus-plus-series'
        },
        {
          title: 'Learn C++ Programming -Beginner to Advance- Deep Dive in C++ By Udemy',
          image: 'https://img-c.udemycdn.com/course/750x422/2121018_9de5_5.jpg',
          link: 'https://www.udemy.com/course/cpp-deep-dive/'
        },
        {
          title: 'Complete C++ Placement DSA Course By Babbar',
          image: 'https://i.ytimg.com/vi/9kQ1JUDleWg/maxresdefault.jpg',
          link: 'https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA'
        },
        {
          title: 'The Complete C++ Developer Course By Udemy',
          image: 'https://img-c.udemycdn.com/course/750x422/2773144_8c37_3.jpg',
          link: 'https://www.udemy.com/course/the-complete-cpp-developer-course/'
        }
      ],
      ai: [
        {
          title: 'Artificial Intelligence: Reinforcement Learning in Python By Udemy',
          image: 'https://img-b.udemycdn.com/course/750x422/2310440_7c36_3.jpg',
          link: 'https://www.udemy.com/course/artificial-intelligence-reinforcement-learning-in-python/'
        },
        {
          title: 'Artificial Intelligence (AI) By ColumbiaX University',
          image: 'https://imageio.forbes.com/specials-images/imageserve/64213c10fc7ed6f0a3eb47ae/The-Intersection-Of-AI-And-Human-Creativity--Can-Machines-Really-Be-Creative-/960x0.jpg?format=jpg&width=960',
          link: 'https://www.edx.org/course/artificial-intelligence-ai'
        },
        {
          title: 'Stanford CS221: Artificial Intelligence: Principles and Technique By Stanford',
          image: 'https://www.newworldai.com/wp-content/uploads/CS221.jpg',
          link: 'https://www.youtube.com/playlist?list=PLoROMvodv4rO1NB9TD4iUZ3qghGEGtqNX'
        },
        {
          title: 'How to use Artificial Intelligence - A guide for everyone! By Udemy',
          image: 'https://www.unite.ai/wp-content/uploads/2022/04/robot-5702074_1280.jpg',
          link: 'https://www.udemy.com/course/how-to-use-artificial-intelligence-a-guide-for-everyone/'
        }
      ],

      "data science": [
        {
          title: 'The Data Science Course 2023: Complete Data Science Bootcamp By Udemy',
          image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Data_Science.jpg',
          link: 'https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/'
        },
        {
          title: 'Statistics for Data Science and Business Analysis By Udemy',
          image: 'https://rigorousthemes.com/blog/wp-content/uploads/2021/12/Best-Data-Science-Courses-on-Udemy.png',
          link: 'https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/'
        },
        {
          title: 'Data Science Full Course For Beginners By Code Basics',
          image: 'https://files.codebasics.io/images/1.1.419/courses/thumbnails/data-science-full-course-for-beginners.webp',
          link: 'https://www.youtube.com/playlist?list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV'
        },
        {
          title: 'Data Science A-Z™: Hands-On Exercises & ChatGPT Bonus [2023] By Udemy',
          image: 'https://qph.cf2.quoracdn.net/main-qimg-f939b475d704c9eb651c3167c0a3d3d4-pjlq',
          link: 'https://www.udemy.com/course/datascience/'
        }
      ],
      "web development": [
        {
          title: 'Full Stack Web Development Course — MERN Stack By Coding Ninja\'s',
          image: 'https://www.codingninjas.com/blog/wp-content/uploads/2020/02/Web-Dev-Projects.png',
          link: 'https://www.codingninjas.com/courses/full-stack-web-dev-mern'
        },
        {
          title: 'Web Development Master Course By Love Babbar',
          image: 'https://i.ytimg.com/vi/6yAsGCaQkp4/maxresdefault.jpg',
          link: 'https://www.thecodehelp.in/course/web-development-bootcamp'
        },
        {
          title: 'The Complete Front-End Web Development Course by Udemy',
          image: 'https://www.classcentral.com/report/wp-content/uploads/2022/04/BCG-Web-Development-NEW-Banner.png',
          link: 'https://i.ytimg.com/vi/6yAsGCaQkp4/maxresdefault.jpg'
        },
        {
          title: 'The Complete 2023 Web Development Bootcamp By Angela Yu',
          image: 'https://pbs.twimg.com/media/FPg8IHhWUAE0Zyz?format=jpg&name=large',
          link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-OocP7UJq5lVCkQ3TNbB0PA&utm_medium=udemyads&utm_source=aff-campaign'
        }
      ]
    };
  
    // Perform the search
    let coursesFound = false;
    for (const subject in courses) {
      if (subject.toLowerCase().includes(searchQuery)) {
        const matchingCourses = courses[subject].slice(0, 4); // Get the top 4 matching courses
        matchingCourses.forEach(course => {
          const courseElement = document.createElement('div');
          courseElement.classList.add('course');
          courseElement.innerHTML = `
            <a href="${course.link}" target="_blank">
              <img src="${course.image}" alt="${course.title}">
              <h3>${course.title}</h3>
            </a>
          `;
          searchResultsContainer.appendChild(courseElement);
        });
        coursesFound = true;
        break;
      }
    }
    
    if (!coursesFound) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('no-results');
      messageElement.textContent = 'This course is not available.';
      searchResultsContainer.appendChild(messageElement);
    }  
}


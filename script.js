document.addEventListener("DOMContentLoaded", () => {
    const chatbotIcon = document.getElementById("chatbot-icon");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeBtn = document.getElementById("close-btn");
    const sendBtn = document.getElementById("send-btn");
    const inputField = document.getElementById("chatbot-input");
    const messagesContainer = document.getElementById("chatbot-messages");

    let isOpen = false;
    let isFirstOpen = true;

    // Smooth transition
    chatbotContainer.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    chatbotContainer.style.opacity = 0;
    chatbotContainer.style.transform = "scale(0.95)";

    function toggleChatbot() {
        isOpen = !isOpen;

        if (isOpen) {
            chatbotContainer.classList.remove("hidden");
            setTimeout(() => {
                chatbotContainer.style.opacity = 1;
                chatbotContainer.style.transform = "scale(1)";
            }, 10);

            if (isFirstOpen) {
                showDefaultMessages();
                isFirstOpen = false;
            }
        } else {
            chatbotContainer.style.opacity = 0;
            chatbotContainer.style.transform = "scale(0.95)";
            setTimeout(() => {
                chatbotContainer.classList.add("hidden");
            }, 300);
        }
    }

    chatbotIcon.addEventListener("click", toggleChatbot);
    closeBtn.addEventListener("click", toggleChatbot);

    function appendMessage(content, type) {
        const message = document.createElement("div");
        message.classList.add("message", type);
        message.textContent = content;

        // WhatsApp-like bubble styling for bot reply
        if (type === "bot") {
            message.style.backgroundColor = "#fff";
            message.style.color = "#000";
        }

        messagesContainer.appendChild(message);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showDefaultMessages() {
        appendMessage("👋 Hi! I'm your Campus Assistant.", "bot");
        appendMessage("Ask me anything about campus, academics, or events!", "bot");
    }

    function sendMessage() {
        const userInput = inputField.value.trim();
        if (userInput === "") return;

        appendMessage(userInput, "user");
        inputField.value = "";

        // Simulate chatbot response
        setTimeout(() => {
            appendMessage(getBotReply(userInput), "bot");
        }, 500);
    }

    function getBotReply(input) {
        input = input.toLowerCase();
        if (input.includes("library")) return "The library is open from 9 AM to 8 PM.";
        if (input.includes("canteen")) return "Yes, the canteen is located beside the main hall.";
        if (input.includes("event")) return "The next event is the Tech Fest on Friday!";
        if (input.includes("hi")) return "Hello! how can I help you today?";
        if (input.includes("what are the requirements for admission")) return "The student have to qualify his/her 12th examination with 70% marks.The college calculate the merit point based on his/her 12th result.Student will be admitted if his/her name comes in the merit list in the college website. ";
        if (input.includes("what are the deadlines for admission")) return "The college notifies the date in their college website.";
        if (input.includes("what are the campus facilities and resources available")) return "There are specific departments(23) for each subject.A playground,gym,a campus full with grenery,library,canteen.";
        if (input.includes("what is the social life like on campus")) return "It will be average experience for each student";
        if (input.includes("what are the hostel options on campus")) return "There are 2 boys hostel present in the campus(FH,NR Hostel).And a girls hostel outside the campus";
        if (input.includes("what is the student faculty ratio")) return "1:40";

        if (input.includes("what are the academic requirements for bca")) return "A student must have computer application or math in 12th and the student have to qualify with 70% or above marks ";
        if (input.includes("what are the academic requirements for bba")) return "A student must have arts or commerce in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for bengali")) return "A student must have arts  in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for economics")) return "A student must have arts or commerce in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for education")) return "A student must have arts  in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for english")) return "A student must have arts in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for geography")) return "A student must have arts or math in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for hindi")) return "A student must have arts  in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for history")) return "A student must have arts in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for music")) return "A student must have arts in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for philosophy")) return "A student must have arts  in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for political science")) return "A student must have arts in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for sanskrit")) return "A student must have arts in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for sociology")) return "A student must have arts in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for anthropology")) return "A student must have science in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for botany")) return "A student must have science in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for chemistry")) return "A student must have science in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for computer science")) return "A student must have science in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for electronics")) return "A student must have science in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for mathematics")) return "A student must have science in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for physics")) return "A student must have science in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for statistics")) return "A student must have science in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for zoology")) return "A student must have science in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the academic requirements for commerce")) return "A student must have commerce in 12th and the student have to qualify with 70% or above marks";
        if (input.includes("what are the departments for admission")) return "There are 23 departments in our college";

        if (input.includes("what are the fees for bca")) return "14000/_ for each semester and 24000/_ during the time of admission";
        if (input.includes("what are the fees for bba")) return "12000/_ for each semester and 18000/_ during the time of admission";
        if (input.includes("what are the fees for bengali")) return "2610/_ during the time of admission and 7810/_is the full course fees";
        if (input.includes("what are the fees for economics")) return "3600/_";
        if (input.includes("what are the fees for education")) return "2610/_ is the annual  fees";
        if (input.includes("what are the fees for english")) return "2610/_is the annual  fees";
        if (input.includes("what are the fees for geography")) return "2702/_ is the annual  fees";
        if (input.includes("what are the fees for hindi")) return "2702/_ is the annual  fees";
        if (input.includes("what are the fees for history")) return "2702/_ is the annual fees";
        if (input.includes("what are the fees for music")) return "3600/_ for the entire 3 year course";
        if (input.includes("what are the fees for philosophy")) return "2610/_ is the annual  fees";
        if (input.includes("what are the fees for political science")) return "7830/_ for the entire 3 year course";
        if (input.includes("what are the fees for sanskrit")) return "7830/_ for the entire 3 year course";
        if (input.includes("what are the fees for sociology")) return "7830/_ for the entire 3 year course";
        if (input.includes("what are the fees for anthropology")) return "73500/_ for the entire 3 year course";
        if (input.includes("what are the fees for botany")) return "12300/_ for the entire 3 year course";
        if (input.includes("what are the fees for chemistry")) return "12000/_ for the entire 3 year course";
        if (input.includes("what are the fees for computer science")) return "90000/_ for the entire 3 year course";
        if (input.includes("what are the fees for electronics")) return "12300/_ for the entire 3 year course";

        if (input.includes("what are the fees for mathematics")) return "10800/_ for the entire 3 year course";
        if (input.includes("what are the fees for physics")) return "12300/_ for the entire 3 year course";
        if (input.includes("what are the fees for statistics")) return "12300/_ for the entire 3 year course";
        if (input.includes("what are the fees for zoology")) return "12300/_ for the entire 3 year course";
        if (input.includes("what are the fees for commerce")) return "10500/_ for the entire 3 year course";
        if (input.includes("what is the name of our college")) return "Burdwan Raj College";
        if (input.includes("how many departments are there in the college")) return "23";
        if (input.includes("how many hostels are there in the college")) return "2 hostels are for boys and 1 hostel is for girls";
        if (input.includes("how are the placements in the bba bca department")) return "THere is no placement in this college.you have to try off campus for job";
        if (input.includes("student teacher ratio in the college")) return "1:25";
        if (input.includes("is there any facilities of library")) return "yes";
        if (input.includes("naac grade of the college")) return "Burdwan Raj College has been accredited by NAAC with a B++ grade";
        if (input.includes("is there any facilities of gym")) return "yes";
        if (input.includes("is there any canteen in the college")) return "yes";
        if (input.includes("is the campus ragging free or not")) return "yes.it's a ragging free campus";
        if (input.includes("is there any anti ragging squad present or not")) return "no anti-ragging squad is present";
        if (input.includes("what are the sports activities available")) return "there ae certain sports activity like cricket,football,annual sports ";
        if (input.includes("is there any parking lot present in the college")) return "yes";
        if (input.includes("what are the social activities held in the college")) return "there is no social activity";
        if (input.includes("is our campus eco friendly or not")) return "yes its eco friendly";
        if (input.includes("is there any other activities apart from sports")) return "no";
        if (input.includes("what are the total number of students in the college")) return "5000";
        if (input.includes("is the faculty members are supportive or not")) return "yes, they are supportive";
        if (input.includes("is there any entrance exam")) return "no";
        if (input.includes("what documents are required for admission")) return "10th,12th registration card, mark sheet, admit";
        if (input.includes("are there any admission helpline")) return "no";
        if (input.includes("where can i check my application status")) return "college website";
        if (input.includes("what is the last date to apply for the year 2025")) return "it will be notified in the college website";
        if (input.includes("what is the tentative date for start application in the year 2025")) return "july,2025";
        if (input.includes("how can i pay my semester fees online")) return "there is a payment option in the college website";
        if (input.includes("how can i pay my admission fees online")) return "there is a payment option in the college website";
        if (input.includes("how can i pay my exam fees online")) return "there is a payment option in the college website";
        if (input.includes("are there any scholarship available")) return "no there is any scholarship available from this college. students must have to apply scholarship from government portal";
        if (input.includes("what are the eligibility criteria for scholarship")) return "the student must scored 50%";
        if (input.includes("what is the last date to pay the fees")) return "it will be notified in the college website";
        if (input.includes("what courses or programs do you offer")) return "bba,bca,bsc,ba,commerce";

        if (input.includes("what is the academic calender for this year")) return "september,2025";
        if (input.includes("how can contact my professors or advisors")) return "the contact no of teachers or advisors is available in the college website";
        if (input.includes("where can i find the syllabus")) return "college website";
        if (input.includes("where is our college located")) return "it is located in Burdwan, specifically at Aftab house.Frazer Avenue.it is situated near hospital more in the  Baburbag area.its also near the north bank of shyamsayer";

        if (input.includes("is this college better for bca or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for bba or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for bengali or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for economics or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for education or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for english or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for geography or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for hindi or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for history or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for music or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for philosophy or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for political science or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for sanskrit or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for sociology or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for anthropology or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for botany or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for chemistry or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for computer science or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for electronics or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for mathematics or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for physics or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for statistics or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for zoology or not")) return "the student will get a average education and the all over experience is average";
        if (input.includes("is this college better for commerce or not")) return "the student will get a average education and the all over experience is average";

        if (input.includes("what are the faculty member for bca")) return "Dr. Sudatta Banerjee(SACT),Dr. Krishanu Dey(SACT),Dr. Debdip Khan(SACT),Ms. Baishakhi Banerjee(SACT),Mr. Tanay Kumar Nandi(SACT),Ms. Runu Roy Daw(SACT)";
        if (input.includes("what are the faculty member for bba")) return "Dr. Sudatta Banerjee(SACT),Dr. Krishanu Dey(SACT),Dr. Debdip Khan(SACT),Ms. Baishakhi Banerjee(SACT),Mr. Tanay Kumar Nandi(SACT),Ms. Runu Roy Daw(SACT)";
        if (input.includes("what are the faculty member for bengali")) return "Mr.Dhananjoy Ghoshal(Associate Professor),Mr. Amar Kumar Mondal(Associate Professor),Dr. Kamal Chandra Mandal(Associate Professor),Dr. Mohan Lal Pal(Associate Professor),Dr. Mistu Roy Samanta (Assistant professor),Ms. Baishakhi Chakroborty(Assistant Professor),Mr. Saptarshi Chatterjee(SACT), Dr. Sumita Roy(SACT)";
        if (input.includes("what are the faculty member for economics")) return "Dr. Piali Bandyopadhyay(Associate Professor),Mr. Gopal Halder(Assistant Professor),Dr. Mahasweta Roy Dutta (Assistant Professor),Mr. Avijit Pal(Assistant Professor)";
        if (input.includes("what are the faculty member for education")) return "Mr. Prasenjit Ghow(SACT) ,Ms. Mitali Patra(SACT)";
        if (input.includes("what are the faculty member for english")) return "Dr. Rabi Sankar Chowdhury(Associate Professor)";
        if (input.includes("what are the faculty member for hindi")) return "Ms.Nandira Begam(SACT), Mr. Hemant Navneet Ram(SACT),Dr. Pratichi Malviya (SACT), Mr. Ajay Kumar Singh(SACT)";
        if (input.includes("what are the faculty member for history")) return "Ms. Dhira Roy Mukhopadhyay(Associate Professor),Ms. Abriti Bakshi Ray(Associate Professor),Dr. Sudipta Mukherjee(Associate Professor),Mr. Swarupananda Saha(Assistant Professor),Ms. Syed Tannaj Sahanaj Rima(SACT),Mr. Soutan Rudra(SACT)";
        if (input.includes("what are the faculty member for music")) return "Mr. Debdas Banerjee(SACT), Ms. Patralika Dutta Roy(SACT)";
        if (input.includes("what are the faculty member for philosophy")) return "Dr. Kanan Chakroborty(SACT)";
        if (input.includes("what are the faculty member for political science")) return "Dr. Bijoy Chand(Associate Professor),Mr. Kartik Kumar Bhunia(Assistant Professor),Mr. Pranabesh Talukdar(Assistant Professor),Ms. Sujata Acharya(SACT)";
        if (input.includes("what are the faculty member for sanskrit")) return "Dr. Shrimanta Chattopadhyay(Associate Professor),Dr. Debalina Chatterjee(Assistant Professor),Mr. Rajkumar Dhibar(Assistant Professor),Ms. Dipanwita Soren(Assistant Professor),Ms. Aparna Khanara(SACT),Mr. Subha Biswas(SACT),Dr. Indrani Chatterjee(SACT)";
        if (input.includes("what are the faculty member for sociology")) return "Dr. Tanima Chowdhury(Associate Professor),Ms. Sukanya Bhattacharjee(SACT)";
        if (input.includes("what are the faculty member for anthropology")) return "Mr. Subrata Kundu(SACT),Mr. Ayan Bandyopadhyay(SACT),Ms. Priyanka Dhara(SACT)";
        if (input.includes("what are the faculty member for botany")) return "Dr.Pradip kumar Bandyopadhyay(Associate Professor),Ms. Tanushri Mondal(Assistant Professor),Dr. Somenath Das(Assistant Professor),Dr. Nishith Ranjan Sarkar(Assistant Professor),Dr. Abhinanada Ghosh(SACT),Dr. Sunanda Dutta(SACT),Dr. Avishek Sarkar(SACT),Dr. Moitreyee Kundu(SACT),";
        if (input.includes("what are the faculty member for chemistry")) return "Dr. Dipankar Das(Associate Professor),Dr. Ananta Kumar Ghosh(Associate Professor),Dr. Kaushik Chattopadhyay (Associate Professor),Dr. Sumitava Khan(Assistant Professor),Dr. Mainak Mitra(Assistant Professor)";
        if (input.includes("what are the faculty member for computer science")) return "Ms. Swati Sen(SACT),Ms. Rusa Mishra Sinha Roy(SACT";
        if (input.includes("what are the faculty member for electronics")) return "Dr. Suvra Sarkar(Associate Professor),Mr. Rathindra Nath Koner(SACT)";
        if (input.includes("what are the faculty member for mathemtics")) return "Dr. Raghu Nath Ray(Assistant Professor),Dr. Sudipta Sinha(Associate Professor),Dr. Rakesh Bhowmick (Assistant Professor),Dr. Pritam Rooj(Assistant Professor),Mr. Md Jasimuddin(SACT)";
        if (input.includes("what are the faculty member for physics")) return "Dr. Sanat Kumar Manik(Associate Professor),Dr. Abani Mohan Rudra(Associate Professor),Dr. Surajit Mandal(Associate Professor),Dr, Arup Dhara(Assistant Professor),Dr. Abhishek Chowdhury(Assistant Professor)";
        if (input.includes("what are the faculty member for zoology")) return "Ms. Soma Banerjee(Associate Professor),Dr. Buddhadev Mondal(Associate Professor),Dr. Siddharthasankar Banerjee(Associate Professor),Ms. Mousumi Mandal(Assistant Professor),Dr. Syamdas Bandyopadhyay(Assistant Professor)";


        return "Thanks for your message! We'll get back to you soon.";
    }

    sendBtn.addEventListener("click", sendMessage);
    inputField.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
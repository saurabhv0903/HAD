import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ChatPage.css';
import boy from '../assets/boy.png';

import { BiUpvote } from "react-icons/bi";
import { IoFlagOutline } from "react-icons/io5";
import { IoFlagSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";



const QnaForum = () => {

    const navigate = useNavigate();

    const [relatedQuestions, setRelatedQuestions] = useState([
        "I'm depressed almost every day and have been for years. My life feels empty and meaningless and almost nothing makes me truly happy. What could I do to fix it? I am on antidepressants, they help but don't do enough.",
        "I am deeply unhappy. I am always depressed about my life, and I feel like every year my life gets worse and worse. I feel like a failure. What can do?",
        "I'm worried that I'm going to be depressed forever and always struggle through life and not enjoy it. Is there no hope for me?",
        "Does life ever get better? Or am I going to be depressed forever?",
        "At what age does life seem to get better?"
    ])

    const [questions, setQuestions] = useState({
        "Question1":["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."],
        "Question2":["answer1", "answer2"],
        "Question3":["answer1", "answer2"],
        "Question4":["answer1", "answer2"],
        "Question5":["answer1", "answer2"],
        "Question6":["answer1", "answer2"],
        "Question7":["answer1", "answer2"],   
        "Question8":["answer1", "answer2"],   
        "Question9":["answer1", "answer2"],       
    })

    const toggleAnswerVisibility = (question) => {
        const updatedQuestions = { ...questions };
        updatedQuestions[question].showFullAnswer = !updatedQuestions[question].showFullAnswer;
        setQuestions(updatedQuestions);
    };

    const navigateToQuestion = (question, answers) => {
        console.log("hehehehehe", question, answers)
        navigate("/qnaForumQuestion", { state: {question: question, answers: answers}});
    }

    return (
        <>
            <div className="flex h-screen">
                
                    {/* Ask & Answer Section */}
                    <div className="flex-1 mr-4 rounded-3xl max-h-[calc(100vh-7.5rem)] overflow-y-auto scrollbar">
                        {Object.entries(questions).map(([question, answers]) => (
                        
                            // wraps both questions and answers for a single item
                            <div key={question} className="bg-white p-4 border border-gray-300 mb-4 rounded-3xl">
                                
                                {/* question part */}
                                <div className='flex flex-col border-b-2 mb-3'>
                                    <div>
                                        <h2 className="text-lg font-semibold mb-2">{question}</h2>
                                    </div>

                                    <div className='flex flex-row justify-between mb-4'>
                                        <button className="bg-gray-200 rounded-3xl px-5">
                                            answer
                                        </button>
                                        <p>29 March 2024</p>
                                    </div>
                                </div>
                                
                                {/* answer part */}
                                <div>

                                    {answers.map((answer, index) => (
                                        
                                        <div className='border-b-2 mb-4'>
                                            
                                            <div className='flex flex-row justify-between'>
                                                {/* profile and doctor name */}
                                                <div className='flex flex-row'>
                                                        
                                                    <img src ={boy} className = "w-10 h-10 rounded-full mr-2" />
                                                    <div className = "flex-1 self-center"> 
                                                        <p className = "text-2sm text-black" >Saurabh</p>
                                                    </div>

                                                </div>

                                                <div className='flex flex-row items-center justify-between'>
                                                    <BiUpvote className='mr-4'/>
                                                    <IoFlagOutline className='mr-4'/>
                                                    {/* <IoFlagSharp className='mr-2'/> */}
                                                    <BsThreeDots className='mr-4'/>

                                                </div>
                                            </div>

                                            <p key={index}>
                                                
                                                {answer.slice(0, 100)}...            
                                            </p>

                                            <p 
                                                    className="cursor-pointer text-blue-600 hover:underline underline-offset-2" 
                                                    onClick={() => navigateToQuestion(question , answers)}
                                                >
                                                    read more
                                                    
                                                </p>
                                            {/* <Link to={{pathname: `/qnaForumQuestion`, state: {question, answers}}}>read more</Link> */}
                                            {/* <p>{questions[question].showFullAnswer ? answer : `${answer.slice(0, 100)}...`}
                                                {answer.length > 100 && (
                                                    <button onClick={() => toggleAnswerVisibility(question)}>
                                                        {questions[question].showFullAnswer ? 'Read Less' : 'Read More'}
                                                    </button>
                                                )}
                                            </p> */}
                                
                                
                                        </div>
                                
                                    ))}
                                
                                </div>

                        
                            </div>
                        ))}
                    </div>
                    
                    {/* Related Questions Section */}
                    <div className="bg-white p-4 rounded-3xl w-1/3">
                        <h2 className="text-lg font-semibold mb-4 border-b-2 border-b-black">Related Questions</h2>
                        {relatedQuestions.map((question, index) => (
                            <Link key={index} to={{pathname: `/question`, state: {question}}} className="block mb-4 bg-white hover:text-blue-700 hover:underline blur-link hover:bg-gray-50">
                                {question}
                            </Link>
                        ))}
                    </div>
            </div>
        </>
    )
    

}


export default QnaForum;
 
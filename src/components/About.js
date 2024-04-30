import React from 'react'

export default function About(props) {
    let modeStyle = {
        color: props.mode === 'light' ? 'black':'white',
        backgroundColor: props.mode === 'dark' ? '#121225':'white',
    }
    
  return (
    <div className='container my-3'>
        <h5 className='text-center text-primary'>About Us</h5>
        <div className="my-4">
            Welcome to our React Text Manipulation App! We're thrilled to introduce you to our innovative tool designed to simplify text editing and manipulation tasks. At our core, we're a team of dedicated developers committed to crafting intuitive solutions for everyday challenges.
        </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className= "accordion-button fw-bold" style={modeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Introduction
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body" style={modeStyle}>
                        <p>
                            This application is a simple text manipulation tool built using React. It allows users to perform various operations on text, such as converting text to uppercase or lowercase, removing whitespace, extracting digits and links, reversing text, and more.
                        </p>
                        <p>
                            The application provides a user-friendly interface where users can input text into a textarea and then perform the desired operations by clicking on the corresponding buttons.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button fw-bold" style={modeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Features
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body" style={modeStyle}>
                        <ul>
                            <li>Convert text to uppercase or lowercase</li>
                            <li>Remove whitespace from text</li>
                            <li>Extract digits and links from text</li>
                            <li>Reverse text</li>
                            <li>Copy and paste text</li>
                            <li>Download text as a text file</li>
                        </ul></div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button fw-bold" style={modeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Technologies Used
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body" style={modeStyle}>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button fw-bold" style={modeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        Developer Information
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                    <div className="accordion-body" style={modeStyle}>
                        <h5>Author</h5>
                        <p>
                            This application was created by <code>Aditya Patel</code>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

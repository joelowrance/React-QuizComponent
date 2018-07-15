import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(button_text) {
        console.log(button_text, this.props.quiz_question.anwer);
        if (button_text === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    }


    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((a, ix) => {
                            return <QuizQuestionButton key={ix} clickHandler={this.handleClick.bind(this)} button_text={a} key={ix} />
                        })}
                    </ul>
                </section>
            </main>
        );
    }
}


export default QuizQuestion;

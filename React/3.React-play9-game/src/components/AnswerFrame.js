import React, {Component} from 'react'

class AnswerFrame extends Component {
    render() {

        let {selectedNumbers,unSelectNumber} = this.props;
        let numbers = selectedNumbers.map((number, index) => { 
            return <span key={index} className="number" onClick={() => { unSelectNumber(number)}}>{number}</span>
        });
        return (
            <div id="answer-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        )
    }
}

export default AnswerFrame
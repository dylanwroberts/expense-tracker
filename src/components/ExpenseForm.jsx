import React from 'react';
import moment from 'moment';

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        //adds support for passing an expense in as the default
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            error: ''
        }
    }

    handleDescriptionChange = e => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    handleAmountChange = e => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    handleNoteChange = e => {
        const note = e.target.value;

    }

    handleFormSubmit = e => {
        e.preventDefault();

        if(!this.state.description) {
            this.setState(() => ({ error: 'You must provide a description.' }));
        }
        else if(!this.state.amount) {
            this.setState(() => ({ error: 'You must provide an amount.' }));
        }
        else {
            this.setState(() => ({ error: '' }));

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Add a new expense</h1>
                { this.state.error ? <p>{this.state.error}</p> : null }
                <form>
                    <input type="text" placeholder="description" />
                    <input type="number" placeholder="amount" />
            
                    <textarea placeholder="note" />
                    <button>{this.props.buttonText}</button>
                </form>
            </div>
        );
    }
}
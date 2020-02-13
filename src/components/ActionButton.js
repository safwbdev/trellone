import React from 'react'
import { Button, Card } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';


class ActionButton extends React.Component {

    state = {
        formOpen: false
    }
    openForm = () => {
        this.setState(
            {
                formOpen: true
            }
        )
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "+ Add another List" : "+ Add another Card";

        return (
            <Button onClick={this.openForm}>{buttonText}</Button>
        )

    }
    closeForm = () => {
        this.setState({
            formOpen:false
        })
    }
    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    renderForm = () => {
        const { list } = this.props;
        const placeholder = list ? "Enter List Title" : "Enter Card Text";
        const buttonTitle = list ? "Add List" : "Add Card";
        return <div>
            <Card>
                <TextareaAutosize 
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange} />
            </Card>
            <div>
                <Button>
                    {buttonTitle}{" "}
                </Button>
                <Button>Close</Button>
            </div>
        </div>
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton() ;
    }
}

export default ActionButton
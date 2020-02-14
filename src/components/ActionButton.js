import React from 'react'
import { Button, Card } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { addList, addCard } from '../actions'


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

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text:""
            })
            dispatch(addList(text))
        }

        return;
    }
    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text:""
            })
            dispatch(addCard(listID, text))
        }

    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another List" : "Add another Card";

        return (
            <Button onClick={this.openForm}>
                <FontAwesomeIcon icon={faPlus} />{" "}{buttonText}
            </Button>
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
                    <Button onMouseDown={list ? this.handleAddList : this.handleAddCard}>
                        {buttonTitle}
                    </Button>{" "}
                    <Button><FontAwesomeIcon icon={faTimes} /></Button>
                </div>
            </div>
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton() ;
    }
}

export default connect()(ActionButton)
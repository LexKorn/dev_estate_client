import React, {useState, useEffect} from 'react'
import {Form, Button, ListGroup, Card} from 'react-bootstrap'
import {Fade} from 'react-awesome-reveal'

import { IMessage } from '../../types/types'
import { LoaderT } from '../LoaderType/LoaderT'

import './chatBlock.sass'


const ChatBlock: React.FC = () => {
    const [message, setMessage] = useState<IMessage>({} as IMessage);                    // created by user
    const [receivedMessage, setReceivedMessage] = useState<IMessage>({} as IMessage);    // created by system
    const [messages, setMessages] = useState<IMessage[]>([]);                            // array of all messeges
    const [text, setText] = useState<string>('');

    useEffect(() => {
        if (message.id) {
            setMessages([...messages, message]);
        }
    }, [message]);

    useEffect(() => {
        if (receivedMessage.id) {
            setMessages([...messages, receivedMessage]);
        }
    }, [receivedMessage]);

    const createMessage = () => {
        if (!text.trim()) {               
            return alert('Необходимо ввести текст');
        }
        setMessage({id: Date.now(), userId: 1, text: text});
        setText('');

        setTimeout(() => {createReceivedMessage()}, 2000);
    };

    const createReceivedMessage = () => {
        setReceivedMessage({id: Date.now(), userId: 2, text: "Ваше обращение очень важно, мы скоро свяжемся с Вами."});
    };

    return (
        <div className='chat'>
            <Form className="chat__form">
                <Form.Control as='textarea'
                    className="chat__input"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder={"Набирите сообщение"}
                />
                <div className="chat__form_btn">
                    <Button variant={"outline-warning"} className="chat__btn" onClick={createMessage}>Отправить</Button>              
                </div>
            </Form>
            <LoaderT />

            <ListGroup className="chat__list">
                {/* <Fade cascade duration={300} triggerOnce={true} direction={'down'}> */}
                    {Boolean(messages.length) && 
                        messages.map(item =>
                            <Card 
                                key={item.id}
                                className={item.userId === 1 ? "chat__list_item shadow receiver" : "chat__list_item shadow"}
                                >
                                {item.text}
                            </Card>
                    )}
                {/* </Fade> */}
            </ListGroup>
        </div>
    )
}

export default ChatBlock;
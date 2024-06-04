import React, {useState, useEffect} from 'react'
import {Form, Button, ListGroup, Card} from 'react-bootstrap'

import { IMessage } from '../../types/types'
import { LoaderT } from '../LoaderType/LoaderT'
import { index } from '../../utils/calc'

import './chatBlock.sass'


const answers: string[] = [
    "Ваше обращение очень важно, мы скоро свяжемся с Вами.",
    "Ваш запрос принят. Скоро вернёмся к Вам.",
    "Наши менеджеры уже решают Вашу задачу",
    "Мы свяжемся с Вами в ближайшее время.",
    "Рады будем помочь со всеми вашими вопросами."
];

const ChatBlock: React.FC = () => {
    const [message, setMessage] = useState<IMessage>({} as IMessage);                    // created by user
    const [receivedMessage, setReceivedMessage] = useState<IMessage>({} as IMessage);    // created by system
    const [messages, setMessages] = useState<IMessage[]>([]);                            // array of all messeges
    const [text, setText] = useState<string>('');
    const [typing, setTyping] = useState<boolean>(false);

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

        setTimeout(() => {setTyping(true)}, 1200);
        setTimeout(() => {setTyping(false)}, 4500);
        setTimeout(() => {createReceivedMessage()}, 4700);
    };

    const createReceivedMessage = () => {
        setReceivedMessage({id: Date.now(), userId: 2, text: `${answers[index(answers)]}`});
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

            <ListGroup className="chat__list">
                {Boolean(messages.length) && 
                    messages.map(item =>
                        <Card 
                            key={item.id}
                            className={item.userId === 1 ? "chat__list_item shadow receiver" : "chat__list_item shadow"}
                            >
                            {item.text}
                        </Card>
                )}
                {typing && <LoaderT />}
            </ListGroup>
        </div>
    )
}

export default ChatBlock;
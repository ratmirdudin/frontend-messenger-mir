import React, {useEffect, useRef, useState} from 'react';
import ChatLine from "./ChatLine";
import {PaperAirplaneIcon} from "@heroicons/react/24/outline";
import Loader from "./Loader";
import {ArrowUturnLeftIcon, TrashIcon, UserCircleIcon} from "@heroicons/react/24/solid";
import {useRouter} from "next/router";
import {format} from "date-fns";

const chatLinesOne = [
  {id: 1, sender: "Дима", message: "Дарова", time: "15:02", isRight: false},
  {id: 2, sender: "Андрей", message: "Привет", time: "15:05", isRight: true},
  {id: 3, sender: "Дима", message: "Че мутишь", time: "15:07", isRight: false},
  {id: 4, sender: "Андрей", message: "Работаю", time: "15:07", isRight: true},
  {id: 5, sender: "Дима", message: "А че", time: "15:08", isRight: false},
  {id: 6, sender: "Андрей", message: "Ну прост(((", time: "15:09", isRight: true},
  {id: 7, sender: "Дима", message: "Лан, покичи", time: "15:10", isRight: false},
  // {
  //   id: 8,
  //   sender: "Андрей",
  //   message: "Очень длинный чатлайн от Андреяяяяяяяяяяяяяяяяяяяяяяяяяя",
  //   time: "15:20",
  //   isRight: true
  // },
  // {
  //   id: 9,
  //   sender: "Дима",
  //   message: "Очень длинный чатлайн от ДИИИИИИИИИИИИИИИИИИИИИИИИМЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ",
  //   time: "15:20",
  //   isRight: false
  // },
  // {
  //   id: 10,
  //   sender: "Андрей",
  //   message: "Очень длинный чатлайн от Андреяяяяяяяяяяяяяяяяяяяяяяяяяя",
  //   time: "15:20",
  //   isRight: true
  // },
  // {
  //   id: 11,
  //   sender: "Дима",
  //   message: "Очень длинный чатлайн от ДИИИИИИИИИИИИИИИИИИИИИИИИМЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ",
  //   time: "15:20",
  //   isRight: false
  // },
  // {
  //   id: 12,
  //   sender: "Андрей",
  //   message: "Очень длинный чатлайн от Андреяяяяяяяяяяяяяяяяяяяяяяяяяя",
  //   time: "15:20",
  //   isRight: true
  // },
  // {
  //   id: 13,
  //   sender: "Дима",
  //   message: "Очень длинный чатлайн от ДИИИИИИИИИИИИИИИИИИИИИИИИМЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ",
  //   time: "15:20",
  //   isRight: false
  // },
]

const chatLinesTwo = [
  {id: 1, sender: "Дима", message: "Дарова", time: "15:02", isRight: false},
  {id: 2, sender: "Андрей", message: "Привет", time: "15:05", isRight: true},
]

const chats = [
  {id: 1, chat: chatLinesOne},
  {id: 2, chat: chatLinesTwo},
]

const Chat = ({opponent}) => {
  const router = useRouter()
  // const {xPos, yPos, showMenu} = useContextMenu();

  const listRef = useRef(null)
  const inputRef = useRef(null)

  const hide = false

  const [messages, setMessages] = useState(chatLinesOne)

  const [selectedIds, setSelectedIds] = useState([])

  const [loading, setLoading] = useState(false)

  const [input, setInput] = useState("")

  const keyDownEvent = (event) => {
    if (event.key === "Escape") {
      setSelectedIds([])
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value)
  };

  const sendMessage = (e) => {
    e.preventDefault()
    if (input.replaceAll('\n', '').length < 1) {
      return
    }

    const newId = Math.max(...messages.map(item => item.id)) + 1
    const time = format(new Date(), 'HH:mm')
    const newMessage = {
      id: newId,
      isRight: true,
      sender: "Андрей",
      time: time,
      message: input
    }

    setMessages([...messages, newMessage])
    setInput("")

    listRef.current?.lastElementChild?.scrollIntoView();
    inputRef.current?.scrollIntoView()

    inputRef.current?.blur()
    inputRef.current?.focus()
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      // e.preventDefault()
      // logic on send message
      sendMessage(e)
    }
  };

  const handleContextClick = (e) => {
    // console.log(e.button)
    // if (e.type === "contextmenu") {
    //   e.preventDefault()
    // }
  }

  const handleDeleteSelected = (e) => {
    setMessages(messages.filter((msg) => !selectedIds.includes(msg.id)))
    setSelectedIds([])
  }

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
      inputRef.current?.focus()
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div onKeyDown={keyDownEvent} tabIndex="0"
         className=" flex flex-col w-[100%] h-[calc(100dvh-47px)] md:h-[calc(100vh-77px)] md:border shadow-md bg-gray-100 outline-0 ">

      {/*все что выше основного блока*/}
      <div className="flex flex-col">
        {/*верхняя плашка с собеседником*/}
        {!!opponent &&
          <div className="flex items-center border-b-2">
            <div onClick={() => router.back()}
                 className="max-md:hidden flex items-center pr-1 h-full cursor-pointer bg-amber-300 rounded-r-full">
              <ArrowUturnLeftIcon className="inline-flex h-4"/>
            </div>
            <div className="flex flex-grow items-center">
              <div className="flex items-center mx-auto py-0.5">
                <UserCircleIcon className="cursor-pointer pl-1.5 h-7 md:h-8 text-amber-500 inline-flex "/>
                <p className="cursor-pointer text-base hover:underline text-blue-800 hover:text-blue-600">
                  {opponent}
                </p>
              </div>
            </div>

            {/*<div className="flex items-center">
              <p className="cursor-pointer hover:underline text-blue-800 hover:text-blue-600">
                Я
              </p>
              <UserCircleIcon className="cursor-pointer pr-1.5 h-8 text-amber-400 inline-flex "/>
            </div>*/}
          </div>
        }
      </div>

      {/*основной блок и поле ввода*/}
      <div className="flex flex-col flex-grow justify-end overflow-y-scroll relative">

        {/*actions for selected elems*/}
        {selectedIds.length !== 0 &&
          <div className="flex items-center h-10 bg-gray-100 border-b-2 absolute top-0 left-0 z-[100] w-[100%] h-8">
            <div onClick={handleDeleteSelected} className="cursor-pointer">
              <TrashIcon className=" inline-flex h-6 text-cyan-600 hover:text-cyan-500 transition transform ease-out"/>
            </div>
          </div>
        }

        {/*main блок*/}
        {loading
          ?
          (
            <div className="flex items-center mx-auto h-[100%] ">
              <Loader/>
            </div>
          )
          :
          messages.length !== 0 ? (
              <div onClick={handleContextClick} className=" flex flex-col-reverse overflow-y-scroll pt-8">
                <div ref={listRef} className="flex flex-col pb-2 ">
                  {/*messages block*/}
                  {messages.map(({id, sender, message, time, isRight}) =>
                    (
                      <ChatLine key={id} id={id} sender={sender} message={message} time={time}
                                isRight={isRight}
                                isSelected={selectedIds.includes(id)}
                                handleSelect={() => setSelectedIds([...selectedIds, id])}
                                handleUnselect={() => setSelectedIds(selectedIds.filter(item => item !== id))}
                      />
                    )
                  )
                  }
                </div>
              </div>)
            :
            <div className=" flex flex-grow items-center mx-auto select-none">
              <p className="text-gray-400">Начните диалог c собеседником</p>
            </div>
        }
        {/*input block*/}
        <div className=" flex items-center text-cyan-900 bg-white border-t-2">
          <textarea value={input} onChange={handleInput} onKeyDown={handleEnter}
                    placeholder="Написать сообщение..."
                    className=" align-middle leading-loose resize-none text-sm px-2.5 w-[100%] h-10 outline-none"
                    autoFocus={true}
                    maxLength={1000}
                    ref={inputRef}/>
          {/*<input value={input} onChange={handleInput} onKeyDown={handleEnter} type="text"*/}
          {/*       placeholder="Написать сообщение..."*/}
          {/*       className="text-sm px-1.5 w-[100%] h-10 outline-none"/>*/}
          <div onClick={sendMessage}>
            <PaperAirplaneIcon
              className="inline-flex cursor-pointer h-8 hover:text-cyan-700 transition transform ease-out"/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Chat;
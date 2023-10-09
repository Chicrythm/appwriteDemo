import React, {useState, useEffect} from "react"
import { databases } from "../appwriteConfig"
import { Query, ID } from "appwrite"

const Room = () => {

  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState('')

  useEffect(()=> {
    getMessage()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()

    let payload = {
      body: message
    }

    let response = await databases.createDocument(
      '6520c17e349c2035d3d2',
      '6520c18d59be64632fae',
      ID.unique(),
      payload
    );

      console.log('Create!', response)

    setMessageList(prevState => [response, ...prevState])
    setMessage('')
  }

  const getMessage = async () => {
    const response = await databases.listDocuments(
      "6520c17e349c2035d3d2",
      "6520c18d59be64632fae",
    );

    setMessageList(response.documents)
    console.log('response', response.documents)
  }

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <textarea
                maxLength={1000}
                placeholder="say something"
                onChange={(e) => {setMessage(e.target.value)}}
                value = {message}
              >
              </textarea>
            </div>
            <div>
              <input type="submit" value="Send" ></input>
            </div>
          </form>
        </div>
        <div>
         {messageList.map(item => {
          return(
            <div>
            <span>{item.body}</span>
            </div>
          )
          
         })}
        </div>
        {/* <div>1111</div> */}
        
      </div>
    </>
  )
}

export default Room

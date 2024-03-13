import { useState } from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';


export default function InputFill() {
  const [value, setValue] = useState('');

  const handleBoldClick = () => {
    document.execCommand('bold');
  };

  const handleItalicClick = () => {
    document.execCommand('italic');
  };

  const handleUnderlineClick = () => {
    document.execCommand('underline');
  };

  const handleFontSizeChange = (size) => {
    document.execCommand('fontSize', false, size);
  };

  const handleLinkClick = () => {
    const url = prompt('Enter URL:');
    document.execCommand('createLink', false, url);
  };

  const handleImageClick = () => {
    const url = prompt('Enter image URL:');
    document.execCommand('insertImage', false, url);
  };

  const handleEmojiClick = () => {
    const emoji = prompt('Enter emoji:');
    document.execCommand('insertText', false, emoji);
  };



    return (
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              New Email
              <div className="mt-6">

                  <input
                    className="border-b border-gray-300 focus:border-blue-500 focus:outline-none px-2 py-1 mb-6 w-full"
                  />

                  <input
                    className="border-b border-gray-300 focus:border-blue-500 focus:outline-none px-2 py-1 mb-6 w-full"
                  />
                  
                  <textarea className="w-full h-24 p-2 resize-none rounded-lg border-gray-300 focus:ring-blue-500 focus:outline-none"  placeholder="Text here">
                    
                  </textarea>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-4">

                    <button onClick={handleBoldClick}>
                      <FormatBoldIcon />
                    </button>

                    <button onClick={handleItalicClick}>
                    <FormatItalicIcon />
                    </button>

                    <button onClick={handleUnderlineClick}>
                    <FormatUnderlinedIcon />
                    </button>

                    <button onClick={handleFontSizeChange}>
                      <TextFieldsIcon />
                    </button>

                    <button onClick={handleLinkClick}>
                    <InsertLinkOutlinedIcon />
                    </button>

                    <button onClick={handleImageClick}>
                    <ImageOutlinedIcon />
                    </button>

                    <button onClick={handleEmojiClick}>
                    <SentimentSatisfiedOutlinedIcon />
                    </button>
                    


                    </div>
                  </div>
                  <button className="w-full mt-6 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Send
                    </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

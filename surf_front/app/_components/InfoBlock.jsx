import ReactMarkdown from 'react-markdown'

// Componente para un bloque de información
const InfoBlock = ({ data }) => {
    console.log(data.button);
    const {headline, text, showimageRight, imageSrc, button} = data;

  return (
    <div className={`info ${showimageRight ? "info-reversed" : ""}`}>
       <img
        className="info_image" 
        src={imageSrc || "/info-blocks/Rectangle 12(1).png"}
        alt=""
      />
       <div className="info_text">
            <h2 className="info_headline"> {headline} </h2>
            <ReactMarkdown className='copy'>{text}</ReactMarkdown> 
            {button}
       </div>
    </div>
  )
}

export default InfoBlock
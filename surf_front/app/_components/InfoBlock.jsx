

const InfoBlock = ({ data }) => {

    const {headline, text, button, reversed} = data;

  return (
    <div className={`info ${reversed ? "info-reversed" : ""}`}>
       <img className="info_image" src="/info-blocks/Rectangle 12(1).png" alt="" />
       <div className="info_text">
            <h2 className="info_headline"> {headline} </h2>
            {text}
            {button}
       </div>
    </div>
  )
}

export default InfoBlock
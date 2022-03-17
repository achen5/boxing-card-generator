import "./App.css";
import html2canvas from 'html2canvas';
import React from "react";

class DLButton extends React.Component {
    constructor(props) {
        super(props);
        this.cardToPicture = this.cardToPicture.bind(this);
    }
    cardToPicture() {
        const selector = document.querySelector(".card");
        const name = this.props.data.name;
        const nameNoSpace = name.replace(/\s/g, '');
        const fileName = `${nameNoSpace}BoxingCard`
        html2canvas(selector,{
            allowTaint: true,
            useCORS: true
        }).then(function(canvas) {
          saveAs(canvas.toDataURL(), fileName);
      });
        function saveAs(uri, filename) {
  
          let link = document.createElement('a');
          console.log(link);
      
          if (typeof link.download === 'string') {
      
              link.href = uri;
              link.download = filename;
  
              //Firefox support
              document.body.appendChild(link);
      
              link.click();
      
              document.body.removeChild(link);
      
          } else {
      
              window.open(uri);
      
          }
      }
      this.props.updatePropString(<span>Enjoy your card &#128522;</span>,"buttonCaption");
    }

    render() {
        return(
            <div>
                <button className="download" onClick={this.cardToPicture}>Download your card</button>
                <p class="downloadCaption">{this.props.data.buttonCaption}</p>
            </div>
        )
    }
}

export default DLButton;

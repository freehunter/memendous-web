document.querySelector('.get-quote').addEventListener('click', getQuote)

function getQuote(e) {
    console.log("Made it to getQuote")
    
    const xhr = new XMLHttpRequest()
    
    xhr.open('GET', `https://qer67hnlcb.execute-api.us-east-2.amazonaws.com/prod/quote`, true)
    
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText)
            
            let output = ''
            
            output += `<img src=${response}>`
            
            document.querySelector('.meme').innerHTML = output
        } else {
            console.log("there was some minor failing")
            document.querySelector('.meme').innerHTML = "Something went wrong"
        }
    }
    
    xhr.send()
    
    e.preventDefault()
}

document.querySelector('.get-meme').addEventListener('click', getMeme)

function getMeme(e) {
    const top = document.querySelector('#top').value
    const bottom = document.querySelector('#bottom').value
    
    const xhr = new XMLHttpRequest()
    
    xhr.open('GET', `https://qer67hnlcb.execute-api.us-east-2.amazonaws.com/prod/quote`, true)
    
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText)
            
            let output = ''
            
            output += `<img src=${response}>`
            
            document.querySelector('.meme').innerHTML = output
        } else {
            document.querySelector('.meme').innerHTML = "Something went wrong"
        }
    }
    
    xhr.send()
    
    e.preventDefault()
}

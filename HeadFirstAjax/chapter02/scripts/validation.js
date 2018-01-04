window.onload = initPage


function initPage() {
  document.getElementById("username").onblur = checkUsername
}

function checkUsername() {
  request = createRequest()
  if (request == null) {
    alert('没有创建对象')
  } else {
    var theName = document.getElementById('username').value
    var username = escape(theName)
    var url = 'checkName.php?username=' + username
    request.onreadystatechange = showUsernameStatus

    request.open('GET', url, true)

    request.send(null)
  }


}

function showUsernameStatus() {
  if(request.readyState == 4){
    if(request.status == 200){
      if(request.responseText == 'okay'){
        document.getElementById('username').className = 'approved'
        document.getElementById('register').disabled = false
      }else{
        document.getElementById('username').className = 'denied'
        document.getElementById('username').focus()
        document.getElementById('username').select()

        document.getElementById('register').disabled = true
      }
    }
  }
}
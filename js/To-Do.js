var get1 = document.getElementById('import');
var no = 0;
var click = 0;
var input;
var count = new Array("one", "two", "three");
var count2 = new Array('a', 'b', 'c');
var me = 0;

document.getElementById('input001').addEventListener('keypress', function (e) {
    // Enter Key Listener for the input box!
    var key = e.which || e.keyCode;
    if (key == 13) {
        e.preventDefault();
        send();
    }
})

function send() {
    input = input001.value;

    if ((input == "Enter A To-Do") || (input == "")) {
        Alert.render("No To-Do Is Set!");
    } else if ((input != "Enter A To-Do") || (input != "")) {
        if (no <= 2) {
            click++;
            no++;

            var element = document.createElement('span');
            element.innerHTML = no + "  ." + input + "        ";
            element.id = count[me];

            var btnOne = document.createElement('button');
            btnOne.innerHTML = 'x';
            btnOne.id = count2[me];
            btnOne.setAttribute("onclick", "del(event)");

            window.elementTwo = element;
            window.btnTwo = btnOne;

            get1.appendChild(elementTwo);
            get1.appendChild(btnTwo);

            get1.innerHTML += "<br class='hello1' />" + "<br />";
            input001.value = "";
            me++;
        } else if (no == 3) {
            Alert.render("Your 'To-Do Activity' input Limit On Your List Is Reached!" + "<br />" + "You Can't Add More! :(");
        }
    }
}

function del(ev) {
  
    if(ev.target.id == 'a'){

      document.getElementById('one').innerHTML = document.getElementById('one').innerText.strike();
      document.getElementById('a').style.display = 'none';

     }else if(ev.target.id == 'b'){

       document.getElementById('two').innerHTML = document.getElementById('two').innerText.strike();
       document.getElementById('b').style.display = 'none';

}else if(ev.target.id == 'c'){

       document.getElementById('three').innerHTML = document.getElementById('three').innerText.strike();
       document.getElementById('c').style.display = 'none';
}
}

function CustomAlert() {
 this.render = function (dialog) {

     var winW = window.innerWidth;
     var winH = window.innerHeight;
     var dialogoverlay = document.getElementById('dialogoverlay');
     var dialogbox = document.getElementById('dialogbox');
     dialogoverlay.style.display = "block";
     dialogoverlay.style.height = winH + "px";
     dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
     dialogbox.style.top = "150px";
     dialogbox.style.display = "block";
     document.getElementById('dialogboxhead').innerHTML = "Notification Message!";
     document.getElementById('dialogboxbody').innerHTML = dialog;
     document.getElementById('dialogboxfoot').innerHTML = '<button id="lin" onclick="Alert.ok()">Ok</button>';
 }
 this.ok = function () {
     document.getElementById('dialogbox').style.display = "none";
     document.getElementById('dialogoverlay').style.display = "none";
 }
}
var Alert = new CustomAlert();

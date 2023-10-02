console.log("welcome to website")

var typed = new Typed(".typing", {
    strings: [ "YouYuber", "Blogger","MERN Stack", "React js"],
    typedSpeed: 90,
    backSpeed: 80,
    loop: true
});

 
var tablinks =document.getElementsByClassName("tab-links");
        var tabcontents =document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("about-skills");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("about-skills");
        }

        ScrollReveal({
            reset: true,
            distance: '150px',
            duration: 2500,
            delay: 400 
   
           });

           ScrollReveal().reveal('.left , .img-figma', {delay: 500, origin: 'top'});
           ScrollReveal().reveal('.headline-1', {delay: 500, origin: 'left'});
           ScrollReveal().reveal('.headline-2', {delay: 500, origin: 'right'});
           ScrollReveal().reveal('.right', {delay: 600, origin: 'bottom'});
           ScrollReveal().reveal('.center', {delay: 500, origin: 'bottom', interval:200});
           ScrollReveal().reveal('.', {delay: 500, origin: 'top'});
           
        function Menu(e){
      let list = document.querySelector('ul');
      e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
    }




    //////-----E-mail script-----///////


        function Send(){

          
           var name = document.getElementById("name").value;
           var email = document.getElementById("email").value;
           var contact = document.getElementById("Contact").value;
          

           var body = "Name: " + name + "<br/> Email:" + email + "<br/> Contact Number:" + contact + "<br/> Message:" + mess;
            
           console.log(body);
            Email.send({

                Host : "smtp.elasticemail.com",
                Username : "rishitech04@gmail.com",
                Password : "542909F44379D98DF3865E29B83F6F9E9297",
                To : 'rishitech04@gmail.com',
                From : document.getElementById("email").value,
                Subject : " contact form",
             Body : body
            }).then(
                message =>{
                    if(message=='OK'){

                        swal("Successfull", "Your Data Successfull Received", "success");
                    }
                    else{

                        swal("Something Wrong", "Your Data is not Received", "error");
                    }
                }
              );

            
        
        }

       

   




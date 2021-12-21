   var capital=false;
    $(".capl").click(function(){
        if(capital==true){
            capital=false;
            $(".capl").css("background-color","black");
        }
        else{
            capital=true;
            $(".capl").css("background-color","grey") ; 
        }

       }
        
    )

    $(".buton").hide();
    $("#disp").click(function(){
        $("p").hide();
        $(".buton").show();
    })
    function valuek(e){ 
        console.log(e.value);
        if(capital==true){
            // console.log(e.value.toUpperCase())
            e.value=e.value.toUpperCase()
        }
        else if(e.value=="Enter"){
            e.value ="\n";
        }
        else if(e.value=="Tab"){
            e.value="    ";
    
        }
        else if(e.value=="space"){
            e.value=" ";
        }
    
        else{
        
        e.value=e.value.toLowerCase();
        }
    
        disp.value+=e.value;
    }
    function back(){
        var bs=document.getElementById("disp").value;
        var len=bs.length-1;
        
        document.getElementById("disp").value=bs.slice(0,len);
    }

    
        
         
        $(".shift").click(function()
        {
            capital=true;
            console.log("Caps"+ capital);
            $(".shiftl").css("background-color","grey");
            $(".shiftr").css("background-color","grey");
        
        setTimeout(()=>{
            capital=false;
            console.log("Caps"+ capital);
            
            $(".shiftl").css("background-color","black");
            $(".shiftr").css("background-color","black");
            // console.log("Delaying function");
        },2000);
        
        // setTimeout(()=>{
            
            
        // },2000);

        // var second=setTimeout(()=>{
        //     capital=false;
        // },1000)
    })


    function control(){
         
        var cop=document.getElementById("disp");
        let option=prompt("What would you like to do?\n A-SelectAll\n C-Copy\nV-Paste","You can cancel also");
        console.log( option);
        option=option.toUpperCase();

        switch(option){
            case "A":
                console.log("A");
                cop.select();
                break;
            case "C":
                console.log("C");
                cop.select();
                navigator.clipboard.writeText(cop.value);
                 alert("CopiedText "+ cop.value);
                break;
            case "V":
                alert("Try after some time")
           
        }
        
    } 
        
        
        
        
        // if(option=="C"||"c")
        //    {      
        //         cop.select();
        //         navigator.clipboard.writeText(cop.value);
        //         alert("CopiedText "+ cop.value);
        //         console.log(" if");
                
        //     }else if(option=="A"||"a"){
        //         cop.select();
        //         console.log("No");
            
        //     }
        //     else (option=="V"||"v")
        //     {
        //         disp.value+=cop.value;
        //     }
           
            

    





//---------------------------------------------------------- declaration------------------------------------------------------------
const show=(y)=>document.getElementById(`${y}`).style.display='inline';
const flexshow=(z)=>document.getElementById(`${z}`).style.display='flex';
const hid=(x)=>document.getElementById(`${x}`).style.display='none';
const gridshow=(r)=>document.getElementById(`${r}`).style.display='grid';
let yourScore=0,pcScore=0;
let selected_Items=document.getElementsByClassName('choice');
let chosen_image,chosen_border,chosen_alt,pc_image,pc_border,pc_alt;
const choices=['1','2','3'];

// const hid=(x)=>{
//     const check=document.getElementById(`${x}`);
//     if (check){
//       check.style.display = 'none';
//     } 
//     else{
//       console.error(`ID '${x}' not found`);
//     }
//   };


// -----------------------------------------functions---------------------------------------------------------
function homepage(){
    hid('res_name');
    hid('res_name1');
    hid('res_name2');
    hid('loser1');
    hid('loser2');
    hid('winner');
    hid('sl_status');
    hid('next');
    hid('victory_page');
    hid('rules_box')
    gridshow('selection');
    flexshow('scoreboard');
    // console.log('its working')
};

function youwin(y){
    hid('selection');
    show('next');
    show('winner');
    show('loser2');
    show('res_name1');
    flexshow('sl_status');
    overwriting('winner','loser2',y);
    document.getElementById(`f_ring`).style.border=`1em solid ${y[1]}`;
    document.getElementById(`loser2`).style.border=`1em solid ${y[4]}`;
    // console.log(y)
    yourScore+=1;
    document.querySelector('#yr_score span').innerHTML=yourScore;

};

function youlose(y){
    hid('selection');
    show('winner');
    show('loser1');
    show('res_name');
    flexshow('sl_status');
    overwriting('loser1','winner',y);
    document.getElementById(`loser1`).style.border=`1em solid ${y[1]}`
    console.log(y)
    document.getElementById(`f_ring`).style.border=`1em solid ${y[4]}`;
    pcScore+=1;
    document.querySelector('#c_score span').innerHTML=pcScore;
};

function overwriting(x,y,z){
    document.querySelector(`#${x} img`).src=`${z[0]}`;
    document.querySelector(`#${y} img`).src=`${z[3]}`;
    document.querySelector(`#${x} img`).alt=`${z[2]}`;
    document.querySelector(`#${y} img`).alt=`${z[5]}`;
    
};

function youtie(y){
    hid('selection');
    show('loser1');
    show('loser2');
    show('res_name2');
    flexshow('sl_status');
    overwriting('loser1','loser2',y);
    // console.log(y)
    document.getElementById(`loser1`).style.border=`1em solid ${y[1]}`;
    document.getElementById(`loser2`).style.border=`1em solid ${y[4]}`;
};

function vpage(){
    hid('res_name');
    hid('res_name1');
    hid('res_name2');
    hid('loser1');
    hid('loser2');
    hid('winner');
    hid('sl_status');
    hid('next');
    flexshow('victory_page');
    hid('rules_box')
    hid('selection');
    hid('scoreboard');
    document.querySelector('#yr_score span').innerHTML=0;
    document.querySelector('#c_score span').innerHTML=0;
};

function rules(){
    show('rules_box');
};

function close_rules(){
    hid('rules_box');
};
 
// console.log(selected_Items)

function getstyles(x){
        gimage=document.querySelector(`#${x} img`).src;
        gbor= getComputedStyle(document.getElementById(`${x}`)).getPropertyValue('border-color');
        gimage1=new URL(gimage).pathname;
        return [gimage1,gbor]

};

// let a,b;
// a=getstyles('rock')[0];
// b=new URL(a).pathname;
// console.log(b)

//---------------------------------------------------- logic -------------------------------------------------------------
for (let i=0;i<selected_Items.length;i++){
    selected_Items[i].addEventListener('click',()=>{
        const s_choice=selected_Items[i].value;
        const pc_Choice_Index=Math.floor(Math.random()*choices.length);
        const pc_choice=choices[pc_Choice_Index];
        const val=math.evaluate(pc_choice-s_choice);
        
        console.log('typeofval',typeof(val),'val',val);
        console.log(pc_Choice_Index,'index');
        console.log('choicetype',typeof(s_choice),'choice',s_choice);
        console.log(typeof(pc_choice),pc_choice,'pcchoice');
        


        switch (s_choice){
            case '1':
                chosen_image=getstyles('rock')[0];
                chosen_border=getstyles('rock')[1];
                chosen_alt='rock';
                break;
            case '2':
                chosen_image=getstyles('paper')[0];
                chosen_border=getstyles('paper')[1];
                chosen_alt='paper';
                break;
            case '3':
                chosen_image=getstyles('scissor')[0];
                chosen_border=getstyles('scissor')[1];
                chosen_alt='scissor';
                break;
        };

        console.log('chosen_image',chosen_image,'chosen_border',chosen_border,'chosen_alt',chosen_alt)

        switch (pc_choice){
            case '1':
                pc_image=getstyles('rock')[0];
                pc_border=getstyles('rock')[1];
                pc_alt='rock';
                break;
            case '2':
                pc_image=getstyles('paper')[0];
                pc_border=getstyles('paper')[1];
                pc_alt='paper';
                break;
            case '3':
                pc_image=getstyles('scissor')[0];
                pc_border=getstyles('scissor')[1];
                pc_alt='scissor';
                break;
        };

        // console.log('pc_image',pc_image,'pc_border',pc_border,'pc_alt',pc_alt)


        if (val==0){
            youtie([chosen_image,chosen_border,chosen_alt,pc_image,pc_border,pc_alt]);
        }
        else if(val==2 || val==-1){
            youwin([chosen_image,chosen_border,chosen_alt,pc_image,pc_border,pc_alt]);
        }
        else{
            youlose([chosen_image,chosen_border,chosen_alt,pc_image,pc_border,pc_alt])
        }

    })};


// call
homepage();

class Profile{
    constructor(){

    }

    async getProfile(){
        const profile=await fetch('https://jsonplaceholder.typicode.com/users');
        const resProfile= await profile.json();

        const picture= await fetch('https://jsonplaceholder.typicode.com/photos');
        const resPicture=await picture.json();
        return {
            resProfile,
            resPicture
        }
    }
}




const btn=document.querySelector('#btn');




class UI {
    constructor(card,cardHeader){
        this.card=document.querySelector('.card-body');

        this.cardHeader=document.querySelector('.card-header');
    }

    Change(){
    
    
    };
    
    showUser(resProfile){
        
        
        const html=`
             <ul class="list-group list-group-flush">
                <li class='list-group-item '>
                    <i class="fas fa-user"></i> <span>Name:</span> <span class="label">${resProfile.name}</span>
                </li>
                <li class='list-group-item '>
                    <i class="fas fa-phone"></i> <span>Phone:</span> <span class="label">${resProfile.phone}</span>
                </li>
                <li class='list-group-item '>
                    <i class="fas fa-city"></i> <span>City:</span> <span class="label">${resProfile.address.city}</span>
                </li>
                <li class='list-group-item '>
                    <i class="fas fa-building"></i> <span>Company:</span> <span class="label">${resProfile.company.name}</span>
                </li><li class='list-group-item '>
                    <i class="fas fa-envelope-square"></i> <span>Email:</span>  <span class="label">${resProfile.email}</span>
                </li>
            </ul>
        
        `
        this.card.innerHTML=html;
    }

    showUserPicture(resPicture){
        const html=`
                <img src="${resPicture.thumbnailUrl} " class="w-100">
        `

        this.cardHeader.innerHTML=html;
    }
}

let user=new Profile();

let ui=new UI();

user.getProfile().then(res=>{
     console.log(res.resProfile);
     ui.showUser(res.resProfile[0]);

     ui.showUserPicture(res.resPicture[0])

});


btn.addEventListener('click',change)

function change(){
        
        let i;
        do{
             a=Math.floor(Math.random()*9)
        }while(i==a)
        
        i=a;

        console.log(a)

        user.getProfile().then(res=>{
        console.log(res.resProfile);
        ui.showUser(res.resProfile[a]);

        ui.showUserPicture(res.resPicture[a])
    });
 }

 

// user.getProfile().then(res=>{
//     console.log(res.resPicture[0]);
// })
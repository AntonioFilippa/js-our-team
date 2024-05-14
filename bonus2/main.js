
//DEFINIAMO L'ARRAY DI OGGETTI PER I MEMBRI DEL TEAM
const teamMembers = [
{
    name: 'Wayne Barnett',
    role: 'Founder e CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
},
{
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
},
{
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
},
{
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
},
{
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'scott-estrada-developer.jpg'
},
{
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
}



]
//CICLO PER OGNI MEMBRO DEL TEAM PER STAMPARE IN CONSOLE

for (const member of teamMembers){

    console.log(`Nome: ${member.name}`);
    console.log(`Ruolo: ${member.role}`);
    console.log(`Foto: ${member.photo}`);
}

//COLLEGHIAMO IN HTML LE IMG E LE DESCRIZIONI

const teamContainer = document.getElementById('team-members');

for (const member of teamMembers){
    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');
    
    const memberPhoto = document.createElement('img');
    memberPhoto.src = "img/" + member.photo;
    
    const memberName = document.createElement('h3');
    memberName.innerHTML = member.name;
    
    const memberRole = document.createElement('p');
    memberRole.innerHTML = member.role;
    
    memberCard.appendChild(memberPhoto);
    memberCard.appendChild(memberName);
    memberCard.appendChild(memberRole);
    
    teamContainer.appendChild(memberCard);
}





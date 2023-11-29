document.addEventListener('DOMContentLoaded', () => {
    const dataList = document.getElementById('data-list');
    const dataList1 = document.getElementById('data-lists');
    const dataList2 = document.getElementById('data-listss');
  
    // Remplacer l'URL par l'API souhaitée
    const apiUrl = ' http://localhost:3010/candidates';
    const apiUrl1 = ' http://localhost:3010/questions';
    const apiUrl2 = ' http://localhost:3010/applications';
    fetch (apiUrl1)
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
      })
      .then(data => {
        console.log("t",data);
        afficherDonnees(data);
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
      fetch (apiUrl2)
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
      })
      .then(data => {
        console.log("t",data);
        afficherDonnees1(data);
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
      fetch (apiUrl)
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
      })
      .then(data => {
        console.log("t",data);
        afficherDonnees2(data);
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
   async function afficherDonnees(data) {
      data.
      forEach( item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.id} - ${item.question} `;
       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Détails..';
        deleteButton.addEventListener('click', () => detailsElement(item.id));
    
        // Ajouter le bouton Supprimer à côté de l'élément dans la liste
        
     
        listItem.appendChild(deleteButton);
       
        dataList.appendChild(listItem);
      });
    }
    async function afficherDonnees1(data) {
      data.
      forEach( item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.id} - ${item.name} - ${item.applicationId}`;
        dataList1.appendChild(listItem);
      });
    }
    async function afficherDonnees2(data) {
     
      data.
      forEach( item => {
        const listItem = document.createElement('li');
     
        listItem.textContent = `${item.id} - ${item.name} - ${item.applicationId}`;
        dataList2.appendChild(listItem);
      });
    }
  });
  
function detailsElement(id) {
  // Filtrer les éléments pour supprimer l'élément avec l'ID correspondant
 // elements = elements.filter(element => element.id !== id);
  console.log(id)
  
  // Mettre à jour l'affichage après la suppression
 
}
const donationBtn = document.querySelector(".donation-btn")
const detailsBtn = document.querySelector(".details-btn")
const shareBtn = document.querySelector(".share")
const modal = document.getElementById("donationModal");
const modalContent = document.querySelector(".modal-content")
const closeBtn =  document.querySelector(".close")
const saveForLater = document.querySelector(".save-for-later")

const modalContentDonation = `
        <h2>Thank you for your donation!</h2>
          <p>Your support helps us make a difference.</p>`

const modalContentDetails =`
        <h2>Support a Child's Education: </h2>
        <p>Your $50 donation can provide essential educational resources, including textbooks, school supplies, and access to online learning platforms, ensuring that a child receives quality education.</p>`
const openModal = () => {
   
    modal.style.display = "flex";
  }
  
const closeModal =() => {
  
    modal.style.display = "none";
  }

document.addEventListener("click", function(event) {
    
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });

donationBtn.addEventListener("click", function(event){
    event.preventDefault()
    openModal()
    modalContent.innerHTML = modalContentDonation
})
detailsBtn.addEventListener("click", function(event){
    event.preventDefault()
    openModal()
    modalContent.innerHTML = modalContentDetails
})
closeBtn.addEventListener("click", closeModal)


// save for later

const handleSaveForLater = () => {
    
    const donationInfo = {
      amount: document.querySelector(".donation-amt").innerText,
     
    };
  
    localStorage.setItem('savedDonation', JSON.stringify(donationInfo));
    alert('Donation saved for later. Thank you for considering our cause!');
  }

saveForLater.addEventListener("click", function(event){
    event.preventDefault()
    handleSaveForLater()
})
  

// share 

const shareWithFriends =() => {
    
    const emailSubject = "Support This Cause";
    const emailBody = "Hey,\n\nI just came across an important cause and wanted to share it with you. Consider making a donation:\n\n";
    var donationUrl = "http://127.0.0.1:5500/box/index.html";
    const emailLink = "mailto:?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(emailBody + donationUrl);
  
    window.location.href = emailLink;
  }
  
shareBtn.addEventListener("click", function(event){
    event.preventDefault()
    shareWithFriends()
})
//function expression to select elements
const selectElement = (s) => document.querySelector(s);

//open the menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//close the menu on click

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});


// POP UP BOXES WHEN HOMEPAGE IMAGES ARE CLICKED ON

/////////////////////////////////////////////////////////////////////////////////////////
//Image Button for White Bentley
document.getElementById('image-button-whitebentley').addEventListener('click', () =>{
    document.querySelector('.bg-modal-whitebentley').style.display = 'flex';
});

//Get close button for White Bentley
document.querySelector('.close-btn-whitebentley').addEventListener("click", function() {
	document.querySelector('.bg-modal-whitebentley').style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////////
//Image Button for Blue SVR
document.getElementById('image-button-bluesvr').addEventListener('click', () => {
    document.querySelector('.bg-modal-bluesvr').style.display = 'flex';
});

//Get close button for Blue SVR
document.querySelector('.close-btn-bluesvr').addEventListener("click", function() {
	document.querySelector('.bg-modal-bluesvr').style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////////
//Image Button for White S63

document.getElementById('image-button-whites63').addEventListener('click', () => {
    document.querySelector('.bg-modal-whites63').style.display = 'flex';
});

//Get close button for White S63

document.querySelector('.close-btn-whites63').addEventListener('click', () => {
    document.querySelector('.bg-modal-whites63').style.display = "none";
})

////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('image-button-blackbentley').addEventListener('click', () => {
    document.querySelector('.bg-modal-blackbentley').style.display = 'flex';
});

document.querySelector('.close-btn-blackbentley').addEventListener('click', () => {
    document.querySelector('.bg-modal-blackbentley').style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('image-button-whiterange').addEventListener('click', () => {
    document.querySelector('.bg-modal-whiterange').style.display = 'flex';
});

document.querySelector('.close-btn-whiterange').addEventListener('click', () => {
    document.querySelector('.bg-modal-whiterange').style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('image-button-orangebentley').addEventListener('click', () => {
    document.querySelector('.bg-modal-orangebentley').style.display = 'flex';
});

document.querySelector('.close-btn-orangebentley').addEventListener('click', () => {
    document.querySelector('.bg-modal-orangebentley').style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////

//Outside click to close popup box

//Toggle Booking Page for All cars //

//////////////// White Bentley //
document.getElementById('booking-button-whitebentley').addEventListener('click', () => {
    document.getElementById('car-info-whitebentley').style.display = 'none';
    document.getElementById('car-info-whitebentley').style.zIndex = '21';
});

document.getElementById('back-btn-whitebentley').addEventListener('click', () => {
    document.getElementById('car-info-whitebentley').style.display = 'block';
    document.getElementById('car-info-whitebentley').style.zIndex = '23';
    
});
//////////////// Blue SVR //
document.getElementById('booking-button-bluesvr').addEventListener('click', () => {
    document.getElementById('car-info-bluesvr').style.display = 'none';
    document.getElementById('car-info-bluesvr').style.zIndex = '21';
});

document.getElementById('back-btn-bluesvr').addEventListener('click', () => {
    document.getElementById('car-info-bluesvr').style.display = 'block';
    document.getElementById('car-info-bluesvr').style.zIndex = '23';
    
});
/////////////// White S63 //
document.getElementById('booking-button-whites63').addEventListener('click', () => {
    document.getElementById('car-info-whites63').style.display = 'none';
    document.getElementById('car-info-whites63').style.zIndex = '21';
});

document.getElementById('back-btn-whites63').addEventListener('click', () => {
    document.getElementById('car-info-whites63').style.display = 'block';
    document.getElementById('car-info-whites63').style.zIndex = '23';
    
});
/////////////// Black Bentley //
document.getElementById('booking-button-blackbentley').addEventListener('click', () => {
    document.getElementById('car-info-blackbentley').style.display = 'none';
    document.getElementById('car-info-blackbentley').style.zIndex = '21';
});

document.getElementById('back-btn-blackbentley').addEventListener('click', () => {
    document.getElementById('car-info-blackbentley').style.display = 'block';
    document.getElementById('car-info-blackbentley').style.zIndex = '23';
    
});
/////////////// White Range //
document.getElementById('booking-button-whiterange').addEventListener('click', () => {
    document.getElementById('car-info-whiterange').style.display = 'none';
    document.getElementById('car-info-whiterange').style.zIndex = '21';
});

document.getElementById('back-btn-whiterange').addEventListener('click', () => {
    document.getElementById('car-info-whiterange').style.display = 'block';
    document.getElementById('car-info-whiterange').style.zIndex = '23';
    
});
/////////////// Orange Bentley //
document.getElementById('booking-button-orangebentley').addEventListener('click', () => {
    document.getElementById('car-info-orangebentley').style.display = 'none';
    document.getElementById('car-info-orangebentley').style.zIndex = '21';
});

document.getElementById('back-btn-orangebentley').addEventListener('click', () => {
    document.getElementById('car-info-orangebentley').style.display = 'block';
    document.getElementById('car-info-orangebentley').style.zIndex = '23';
    
});


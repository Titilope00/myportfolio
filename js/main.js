let products = {
    data: [
      {
        productName: "Classy Duplex",
        category: "duplex",
        bedroom: "15bd   4bth",
        status: "active",
        price: "999,000,000(NGN)",
        image: "images/duplex.jpeg",
        location: "Block A,Lagos State.",
      },
      {
        productName: "Exquisive Mansion",
        category: "mansion",
        bedroom: "22bd    11bth",
        status: "active",
        price: "49,000,000(NGN)",
        image: "images/man.jpeg" ,
        location:"Amadi Estate, Ikoyi, Osun State.",
      },
      {
        productName: "Classy Duplex",
        category: "duplex",
        bedroom: "2bd",
        status: "active",
        price: "999,000,000(NGN)",
        image: "images/dup.jpeg",
        location: "Google street,Benue State",
      },
      {
        productName: "3 Bedroom Flat",
        category: "flats",
        bedroom: "2bd",
        status: "active",
        price: "29,000,000(NGN)",
        image: "images/fff.jpeg",
        location:"Emmanuel street,Borno State",
      },
      {
        productName: "Fully furnished Duplex",
        category: "duplex",
        bedroom: "12bd  5bth" ,
        status: "active",
        price: "129,000,000(NGN)",
        image: "images/dupp.jpeg",
        location:"Evangelical street,Oyo State",
      },
      {
        productName: "Industrial Complex",
        category: "industrial",
        bedroom: "20 rooms",
        status: "active",
        price: "129,000,000(NGN)",
        image: "images/indd.jpeg",
        location:"Mission street,Imo State",
      },
      {
        productName: "Well defined commercial building",
        category: "commecial",
        bedroom: "42 rooms",
        status: "active",
        price: "89,000,000(NGN)",
        image: "images/co.jpeg",
        location:"River street,Zamfara State",
      },
      {
        productName: "Italian designed industrial building",
        category: "industrial",
        bedroom: "35 rooms",
        status: "active",
        price: "189,000,000(NGN)",
        image: "images/c.jpeg",
        location:"Aaron street,Oyo State",
      },
      {
        productName: "Italian Duplex",
        category: "duplex",
        bedroom: "9bd   4bth",
        status: "active",
        price: "18,000,000(NGN)",
        image: "images/dupl.jpeg",
        location:"QK Estate,Niger State",
      },
      {
        productName: "Commercial building",
        category: "commercial",
        bedroom: "21 rooms",
        status: "active",
        price: "109,000,000(NGN)",
        image: "images/comm.jpeg",
        location:"Evangelical street,Delta State",
      },
      {
        productName: "Fully furnished and swimming pool surrounded mansion",
        category: "mansion",
        bedroom: "26bd    8bth",
        status: "active",
        price: "4,900,000(NGN)",
        image: "images/man.jpeg",
        location:"Creed street,Edo State",
      },
      {
        productName: "Steel production company",
        category: "industrial",
        bedroom: "33 rooms",
        status: "active",
        price: "9,000,000(NGN)",
        image: "images/in.jpeg",
        location:"Evangelical street,Benue State",
      },
      {
        productName: "Comfy Flat",
        category: "flat",
        bedroom: "2bd  2bth",
        status: "active",
        price: "900,000(NGN)",
        image: "images/fl.jpeg",
        location:"Jummy street,Sokoto State",
      },
      {
        productName: "Exquisive Mansion",
        category: "mansion",
        bedroom: "22bd   9bth",
        status: "active",
        price: "49,000,000(NGN)",
        image: "images/ma.jpeg" ,
        location:"Freedom street,Ondo State",
      },
      {
        productName: "Spacious flats", 
        category: "flats",  
        bedroom: "3bd   1bth",
        status: "active",
        price: "3,000,000(NGN)",  
        image: "images/f.jpeg",
        location:"Evangelical street,Lagos State",
      },
      {
        productName: "Exquisive Mansion",
        category: "mansion",
        bedroom: "18bd   10bth",
        status: "active",
        price: "49,000,000(NGN)",
        image: "images/ind.jpeg" ,
        location:"Evangelical street,Benue State",
      },
      {
        productName: "Classy Duplex",
        category: "duplex",
        bedroom: "23bd    10bth",
        status: "active",
        price: "999,000,000(NGN)",
        image: "images/duplex.jpeg",
        location:"Amen street,Osun State",
      },
      {
        productName: "3 Bedroom Flat",
        category: "flats",
        bedroom: "2bd 2bth",
        status: "active",
        price: "29,000,000(NGN)",
        image: "images/flat.jpeg",
        location:"Evangelical street,Abia State",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h3");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //location
    let location = document.createElement("h5");
    location.innerText = "" + i.location;
    location.style.marginBottom ="9px"
    container.appendChild(location);
    //price
    let price = document.createElement("h3");
    price.innerText = "#" + i.price;
    container.appendChild(price);
    //bedroom
    let icon = document.createElement("i");
    let bedroom = document.createElement("h5");
    icon.classList.add("bx", "bxs-bath")
    bedroom.innerText = "" + i.bedroom;
    bedroom.style.margin ="9px";
    bedroom.appendChild(icon);
    container.appendChild(bedroom);
    //status
    let status = document.createElement("p");
    status.innerText = "" + i.status;
    status.style.color ="#53e053";
    container.appendChild(status);
    //boxicons
    let loveIcon = document.createElement('i');
    loveIcon.classList.add('loveIcon');
    loveIcon.classList.add('bx');
    loveIcon.classList.add('bx-heart');

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  };
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };

  
// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});


const menuIcon =document.querySelector('#menu');

menuIcon.addEventListener('click',function(){
 menuIcon.classList.toggle('clicked');
});


window.addEventListener("scroll", function(){
    var scrollToTop = document.getElementById("scrollToTop");
    if(window.scrollY > 100) {
        scrollToTop.style.display ="block";
    } else{
        scrollToTop.style.display ="none";
    }
}
);

document.getElementById("scrollToTop"). addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//signup

function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
} 

function showSignupForm(signupType){
  const landlordSignupForm = document.getElementById('landlord-signup-form');
  const tenantSignupForm = document.getElementById('tenant-signup-form');

  if (signupType === 'landlord'){
    landlordSignupForm.style.display ='block';

    tenantSignupForm.style.display ='none';
  }
  else if (signupType === 'tenant'){
    landlordSignupForm.style.display ='none';

    tenantSignupForm.style.display ='block';
  }

  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.style.display = 'none';
}

//login
document.getElementById("reg2").addEventListener("click", function() {
  document.getElementById("login-instructions").classList.remove("hidden");
});

document.getElementsByClassName("subt").addEventListener("click", function() {
  var password = document.getElementById("pass").value;

  if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()\-_=+{};:,<.>]/.test(password)) {
    document.getElementById("result").textContent = "Login successful!";
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").classList.add("success");
  } else {
    document.getElementById("result").textContent = "Login failed. Password does not meet the criteria.";
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").classList.add("error");
  }
})

document.getElementById("searchButton").addEventListener("click",
function(){
  var searchOutput = document.getElementById("searchOutput").value;
  console.log("search input: " + searchOutput);
});

function toggleFeatures(){
  var features = document.getElementById('features');
  if (features.style.display === "none"){
      features.style.display = "block";
  }
  else{
      features.style.display = "none";
  }
}
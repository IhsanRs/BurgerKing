document.addEventListener("DOMContentLoaded", function(){

  // Create a div element and set its positioning properties
  let div1 = document.createElement("div");
  div1.setAttribute('style', 'position: absolute; top: 37%; left: 10%; height: 48%; width: 40%; border-radius: 10px; padding: 10px;')

  // Create an image element for section 1 and set its source and styling
  let img1 = document.createElement("img");
  img1.setAttribute("src", "https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/d8fd4a8e3f490852d89b76e1c41632dcc2e37730-1000x500.png?w=750&q=40&fit=max&auto=format");
  img1.setAttribute("style", "width: 100%; height: 70%; border-top-right-radius: 15px; border-top-left-radius: 15px;");
  div1.appendChild(img1);

  // Create a div element for writing in section 1 and set its styling
  let writing1 = document.createElement("div");
  writing1.setAttribute("id", "writing_one");
  writing1.setAttribute("style", "text-align: left; background-color: white; padding: 10px; position: relative; height: 30%; font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana;");

  // Create a heading element for the title of section 1 and set its styling
  let title1 = document.createElement("h3");
  title1.setAttribute("id", "h3_one");
  title1.setAttribute("style", "color: rgb(80, 35, 20);")
  title1.innerHTML = "YourBurgerKing"; // Add title text
  writing1.appendChild(title1);

  // Create a paragraph element for the description of section 1 and set its styling
  let description1 = document.createElement("p");
  description1.setAttribute("id", "p_one");
  description1.setAttribute("style", "color: rgb(80, 35, 20); font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana; font-size:13px;")
  description1.innerHTML = "<b>Earn points and get rewarded with every order on the BK App."; // Add description text
  writing1.appendChild(description1);

  // Create a button element for section 1 and set its styling
  let button1 = document.createElement("button");
  button1.setAttribute("id", "button_one");
  button1.setAttribute("style", "background-color: white; width: 25%; height: 32%; color: red; font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana; font-size: 15px; border: 1px solid black; border-radius: 25px; position: absolute; right: 25px; bottom: 50px; border-color: red; font-weight:bolder; cursor: pointer;");
  button1.innerHTML = "Get rewarded"; // Add button text
  writing1.appendChild(button1);
  div1.appendChild(writing1);

  // Append the div to the body of the document
  document.body.appendChild(div1);






/*****************************BOX 2**************************************/


  
  // Create a new div element for section 2
  let div2 = document.createElement("div");
  div2.setAttribute('style', 'position: absolute; top: 37%; left: 55%; height: 48%; width: 40%; border-radius: 10px; padding: 10px;')

  // Create an image element for section 2 and set its source and styling
  let img2 = document.createElement("img");
  img2.setAttribute("src", "https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/d7633238a57bccec71d8c8760f616c2323fe47e1-1184x600.jpg?w=750&q=40&fit=max&auto=format");
  img2.setAttribute("style", "width: 100%; height: 70%; border-top-right-radius: 15px; border-top-left-radius: 15px;");
  div2.appendChild(img2);

  // Create a div element for writing in section 2 and set its styling
  let writing2 = document.createElement("div");
  writing2.setAttribute("id", "writing_two");
  writing2.setAttribute("style", "text-align: left; background-color: white; padding: 10px; position: relative; height: 30%; font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana;");

  // Create a heading element for the title of section 2 and set its styling
  let title2 = document.createElement("h3");
  title2.setAttribute("id", "h3_two");
  title2.setAttribute("style", "color: rgb(80, 35, 20);");
  title2.innerHTML = "BK® Delivers, powered by Deliveroo®"; // Add title text
  writing2.appendChild(title2);

  // Create a paragraph element for the description of section 2 and set its styling
  let description2 = document.createElement("p");
  description2.setAttribute("id", "p_two");
  description2.setAttribute("style", "color: rgb(80, 35, 20); font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana; font-size:13px;")
  description2.innerHTML = "<b>Get your flame-grilled favourites straight to your door today!"; // Add description text
  writing2.appendChild(description2);

  // Create a button element for section 2 and set its styling
  let button2 = document.createElement("button");
  button2.setAttribute("id", "button_two");
  button2.setAttribute("style", "background-color: rgb(214, 35, 0); width: 22%; height:33%; color: rgb(251, 226, 218); font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana; font-size: 15px; border-radius: 25px; position: absolute; right: 55px; bottom: 50px; border-color: transparent; font-weight: bold; cursor: pointer;");
  button2.innerHTML = "Order now"; // Add button text
  writing2.appendChild(button2);
  div2.appendChild(writing2);

  // Append section 2 div to the document body
  document.body.appendChild(div2);





 /***************************BOX 3****************************************/


 
  // Get the div element for section 3 and set its positioning properties
  let div3 = document.getElementById("section_bottom_left");
  div3.setAttribute('style', 'position: absolute; top: 95%; left: 10%; height: 48%; width: 40%; border-radius: 10px; padding: 10px;')

  // Create an image element for section 3 and set its source and styling
  let img3 = document.createElement("img");
  img3.setAttribute("src", "https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/423b0c1100e6ba2a700189d038116a109852f884-1000x500.png?w=750&q=40&fit=max&auto=format");
  img3.setAttribute("style", "width: 100%; height: 70%; border-top-right-radius: 15px; border-top-left-radius: 15px;");
  div3.appendChild(img3);

  // Create a div element for writing in section 3 and set its styling
  let writing3 = document.createElement("div");
  writing3.setAttribute("id", "writing_three");
  writing3.setAttribute("style", "text-align: left; background-color: white; padding: 10px; position: relative; height: 30%; font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana;");

  // Create a heading element for the title of section 3 and set its styling
  let title3 = document.createElement("h3");
  title3.setAttribute("id", "h3_three");
  title3.setAttribute("style", "color: rgb(80, 35, 20);");
  title3.innerHTML = "Peppercorn Gourmet Kings"; // Add title text
  writing3.appendChild(title3);

  // Create a paragraph element for the description of section 3 and set its styling
  let description3 = document.createElement("p");
  description3.setAttribute("id", "p_three");
  description3.setAttribute("style", "color: rgb(80, 35, 20); font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana; font-size:13px;")
  description3.innerHTML = "<b>150g of Aberdeen Angus or Crispy Chicken with a <br> classic Peppercorn mayo"; // Add description text
  writing3.appendChild(description3);

  // Create a button element for section 3 and set its styling
  let button3 = document.createElement("button");
  button3.setAttribute("id", "button_three");
  button3.setAttribute("style", "background-color: rgb(214, 35, 0); width: 35%; height:32%; color: rgb(251, 226, 218); font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana; font-size: 15px; border-radius: 25px; position: absolute; right: 45px; bottom: 50px; border-color: transparent; font-weight: bold; cursor: pointer;");
  button3.innerHTML = "Discover the range"; // Add button text
  writing3.appendChild(button3);
  div3.appendChild(writing3);




  
  /****************************BOX 4*************************************/


  
  // Get the div element for section 4 and set its positioning properties
  let div4 = document.getElementById("section_bottom_right");
  div4.setAttribute('style', 'position: absolute; top: 95%; left: 55%; height: 48%; width: 40%; border-radius: 10px; padding: 10px;')

  // Create an image element for section 4 and set its source and styling
  let img4 = document.createElement("img");
  img4.setAttribute("src", "https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/e821764096a7c20f4bf0caeda50391f28636ebcc-1000x500.png?w=750&q=40&fit=max&auto=format");
  img4.setAttribute("style", "width: 100%; height: 70%;");
  div4.appendChild(img4);

  // Create a div element for writing in section 4 and set its styling
  let writing4 = document.createElement("div");
  writing4.setAttribute("id", "writing_four");
  writing4.setAttribute("style", "text-align: left; background-color: white; padding: 10px; position: relative; height: 30%; font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana;");

  // Create a heading element for the title of section 4 and set its styling
  let title4 = document.createElement("h3");
  title4.setAttribute("id", "h3_four");
  title4.setAttribute("style", "color: rgb(80, 35, 20);");
  title4.innerHTML = "NEW Doritos Tangy Cheese Chicken Fries"; // Add title text
  writing4.appendChild(title4);

  // Create a paragraph element for the description of section 4 and set its styling
  let description4 = document.createElement("p");
  description4.setAttribute("id", "p_four");
  description4.setAttribute("style", "color: rgb(80, 35, 20); font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana; font-size:13px;")
  description4.innerHTML = "<b>Chicken Fries, but make it Tangy. Get your hands on this tasty <br> collaboration!"; // Add description text
  writing4.appendChild(description4);

  // Create a button element for section 4 and set its styling
  let button4 = document.createElement("button");
  button4.setAttribute("id", "button_four");
  button4.setAttribute("style", "background-color: rgb(214, 35, 0); width: 22%; height:33%; color: rgb(251, 226, 218); font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana; font-size: 15px; border-radius: 25px; position: absolute; right: 55px; bottom: 50px; border-color: transparent; font-weight: bold; cursor: pointer;");
  button4.innerHTML = "Order now"; // Add button text
  writing4.appendChild(button4);
  div4.appendChild(writing4);




  /**************************SECTION 5**********************************/


  

  // Get the div element for section 5 and set its positioning properties
  let div5 = document.getElementById("section_bottom");
  div5.setAttribute("style", "position: absolute; top: 170%; left: 0%; width: 100%; height: 70%; background-color: #efe1cc;");

  // Set up the image for section 5
  let img5 = document.getElementById("img_five");
  img5.setAttribute('src', 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/ec025695dc78c9198b572d6b0aadda878415b78c-1340x2014.png?w=750&q=40&fit=max&auto=format');
  img5.setAttribute("style", "width: 480px; height: 636px; top: 160%; left: 30%; position: absolute; z-index: 100;");

  // Set up the description for section 5
  let d5D = document.getElementById("p_five");
  d5D.setAttribute("style", "position: absolute; right: 7%; top: 80%; width: 30%; font-size: 14px; font-family: 'Flame Sans', 'Helvetica Neue', Helvetica, Arial, Verdana; font-weight: bold; color: #6e2a11;");
  d5D.innerHTML = "Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.";

  // Set up the title for section 5
  let d5T = document.getElementById("h3_five");
  d5T.setAttribute("style", "position: absolute; right: 12%; top: 10%; font-size: 45px; font-family: 'Bowlby One'; color: rgb(80, 35, 20);");
  d5T.innerHTML = "Save £££ <br> With offers on <br> demand";

  // Set up the first image button for section 5 (Google Play)
  let imgButton1 = document.createElement("div");
  imgButton1.setAttribute("id", "img_button_one");
  imgButton1.setAttribute("style", "background-image: url('https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'); background-size: contain; background-repeat: no-repeat; width: 190px; height: 60px; right: 15%; position: absolute; top: 70%; cursor: pointer;");
  imgButton1.onmouseover = function() { this.style.cursor = 'pointer'; }; // Change cursor on hover
  div5.appendChild(imgButton1);

  // Set up the second image button for section 5 (App Store)
  let imgButton2 = document.createElement("div");
  imgButton2.setAttribute("id", "img_button_two");
  imgButton2.setAttribute("style", "background-image: url('https://cn.maplesoft.com/products/MapleCalculator/images/app-store-icons-apple-app-store.png'); background-size: contain; background-repeat: no-repeat; width: 190px; height: 70px; right: 25%; position: absolute; top: 69%; cursor: pointer;");
  imgButton2.onmouseover = function() { this.style.cursor = 'pointer'; }; // Change cursor on hover
  div5.appendChild(imgButton2);





  /***************************FOOTER***********************************/


  

  // Get the footer element and set its positioning properties
  let footer = document.getElementById("footer");
  footer.setAttribute('style', 'position: absolute; top: 240%; left: 0%; width: 100%; height: 50%; background-color: #2e0505;');

  // Create a container for the list on the left side of the footer
  let listContainerLeft = document.createElement("div");
  listContainerLeft.setAttribute("style", "position: absolute; top: 15%; left: 5%; color: rgb(245, 235, 220);");

  // Create the header element for the left list
  let listHeaderLeft = document.createElement("h3");
  listHeaderLeft.innerHTML = "<b>BK<sup style='font-size: 40%;'>®</sup> INFO</b>";
  listHeaderLeft.setAttribute("style", "font-size: 24px; color: rgb(245, 235, 220);");
  listContainerLeft.appendChild(listHeaderLeft);

  // Create the list element for the left list
  let listLeft = document.createElement("ul");
  listLeft.setAttribute("style", "list-style-type: none; padding-left: 0;");

  // Individual list items for the left list
  let itemsLeft = ["About BK<sup style='font-size: 40%;'>®</sup>", "FAQs", "Policies", "Get in touch", "Terms & Conditions", "Guest Trac", "Trademarks"];
  itemsLeft.forEach(itemText => {
    let listItem = document.createElement("li");
    listItem.innerHTML = itemText;
    listItem.style.cursor = "pointer"; // Change cursor on hover
    listItem.onmouseover = function() { this.style.textDecoration = 'underline'; }; // Underline on hover
    listItem.onmouseout = function() { this.style.textDecoration = 'none'; }; // Remove underline when not hovered
    listItem.style.fontFamily = "'Roboto', sans-serif";
    listItem.style.fontSize = "14px";
    listLeft.appendChild(listItem);
  });

  // Append the left list to its container and the container to the footer
  listContainerLeft.appendChild(listLeft);
  footer.appendChild(listContainerLeft);

  // Create a container for the list on the right side of the footer
  let listContainerRight = document.createElement("div");
  listContainerRight.setAttribute("style", "position: absolute; top: 15%; right: 45%; color: rgb(245, 235, 220);");

  // Create the header element for the right list
  let listHeaderRight = document.createElement("h3");
  listHeaderRight.innerHTML = "<b>BK<sup style='font-size: 40%;'>®</sup> AND YOU</b>";
  listHeaderRight.setAttribute("style", "font-size: 24px; color:rgb(245, 235, 220);");
  listContainerRight.appendChild(listHeaderRight);

  // Create the list element for the right list
  let listRight = document.createElement("ul");
  listRight.setAttribute("style", "list-style-type: none; padding-left: 0;");

  // Individual list items for the right list
  let itemsRight = ["Careers", "Privacy Policy", "Modern Slavery Statement", "Tax Strategy"];
  itemsRight.forEach(itemText => {
    let listItem = document.createElement("li");
    listItem.innerHTML = itemText;
    listItem.style.cursor = "pointer"; // Change cursor on hover
    listItem.onmouseover = function() { this.style.textDecoration = 'underline'; }; // Underline on hover
    listItem.onmouseout = function() { this.style.textDecoration = 'none'; }; // Remove underline when not hovered
    listItem.style.fontFamily = "'Roboto', sans-serif";
    listItem.style.fontSize = "14px";
    listRight.appendChild(listItem);
  });

  // Append the right list to its container and the container to the footer
  listContainerRight.appendChild(listRight);
  footer.appendChild(listContainerRight);


  
  
  // Horizontal line
  let hrLine = document.createElement("hr");
  hrLine.setAttribute("style", "width: 87.1%; border-color: rgb(245, 235, 220); border-width: 1px; position: absolute; top: 65%; right: 8%;");
  footer.appendChild(hrLine);


  // Create an image element and styling
  let imgElement = document.createElement("img");
  imgElement.setAttribute("src", "bkfooter.png");
  imgElement.setAttribute("alt", "Burger King Footer");
  imgElement.setAttribute("style", "position: absolute; top: 74%; left: 5%; width: 12%; height: 6%;");
  footer.appendChild(imgElement);


  
  // Create a container for the language selection and social media icons
  let languageAndSocialContainer = document.createElement("div");
  languageAndSocialContainer.setAttribute("style", "position: absolute; top: 74%; right: 8%;");

  // Add globe icon
  let globeIcon = document.createElement("i");
  globeIcon.classList.add("fas", "fa-globe");
  globeIcon.setAttribute("style", "font-size: 20px; color: rgb(245, 235, 220); margin-right: 10px; cursor: pointer;"); // Set cursor to pointer
  languageAndSocialContainer.appendChild(globeIcon);
  // Add "EN" text
  let enText = document.createElement("span");
  enText.textContent = "EN";
  enText.setAttribute("style", "color: rgb(245, 235, 220); margin-right: 10px; font-size: 16px; font-weight: bold; font-family: sans-serif;");
  languageAndSocialContainer.appendChild(enText);

  // Define the social media icons
  let socialMediaIcons = ["instagram", "facebook", "youtube", "twitter"];

  // Create and append the social media icons
  socialMediaIcons.forEach(icon => {
      let iconElement = document.createElement("i");
      iconElement.classList.add("fab", `fa-${icon}`);

      iconElement.setAttribute("style", "font-size: 20px; color: rgb(245, 235, 220); margin-right: 10px;");

      // Add hover effect and cursor pointer
      iconElement.addEventListener("mouseover", function() {
          this.style.color = "red";
          this.style.cursor = "pointer";
      });

      // Restore original color when not hovering
      iconElement.addEventListener("mouseout", function() {
          this.style.color = "rgb(245, 235, 220)";
      });

      languageAndSocialContainer.appendChild(iconElement);
  });

  footer.appendChild(languageAndSocialContainer); // Append the language selection and social media icons container to the footer


  // Text underneath Burger King image
  let textElement = document.createElement("p");
  textElement.textContent = "TM & Copyright 2021 Burger King Corporation. All Rights Reserved. Ihsan";
  textElement.setAttribute("style", "color: rgb(245, 235, 220); font-family: 'Arial', sans-serif; font-weight: bold; font-size: 12px; margin-top: 5px; position: absolute; top: 85%; left: 5%;");
  footer.appendChild(textElement);


  // Horizontal line 2
  let hrLine2 = document.createElement("hr");
  hrLine2.setAttribute("style", "width: 87.1%; border-color: rgb(245, 235, 220); border-width: 1px; position: absolute; top: 92%; right: 8%; margin-top: 20px;");
  footer.appendChild(hrLine2);


});
